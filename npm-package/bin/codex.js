#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const binaryPath = join(__dirname, 'codex');

// Default behavior:
// - `codex` (no args) starts to TUI
// - `codex <prompt>` runs `codex exec <prompt>` for convenience
// - `codex <known-subcommand|--flag>` passes args through unchanged
const knownSubcommands = new Set([
  'exec',
  'review',
  'login',
  'logout',
  'mcp',
  'mcp-server',
  'app-server',
  'completion',
  'sandbox',
  'execpolicy',
  'apply',
  'resume',
  'cloud',
  'responses-api-proxy',
  'stdio-to-uds',
  'features',
  'tui'
]);

const args = process.argv.slice(2);
const first = args[0];
const isOption = first?.startsWith('-');
const isKnownSubcommand = first && knownSubcommands.has(first);

const finalArgs =
  args.length === 0 ? [] : isOption || isKnownSubcommand ? args : ['exec', ...args];

const TERMUX_PREFIX = process.env.PREFIX || '/data/data/com.termux/files/usr';

function sanitizeLdLibraryPath(binDir) {
  const blocked = new Set([
    `${TERMUX_PREFIX}/lib`,
    `${TERMUX_PREFIX}/libexec`,
    '/data/data/com.termux/files/usr/lib',
    '/data/data/com.termux/files/usr/libexec'
  ]);

  const extraPaths = (process.env.LD_LIBRARY_PATH || '')
    .split(':')
    .filter((entry) => entry && !blocked.has(entry));

  return [binDir, ...extraPaths].join(':');
}

// Keep bundled libc++ visible while avoiding Termux liblzma conflicts.
const env = { ...process.env, CODEX_MANAGED_BY_NPM: '1' };
const binDir = __dirname;
env.LD_LIBRARY_PATH = sanitizeLdLibraryPath(binDir);

const child = spawn(binaryPath, finalArgs, {
  stdio: 'inherit',
  env
});

child.on('exit', (code) => {
  process.exit(code);
});
