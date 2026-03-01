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

// Set LD_LIBRARY_PATH to include the bin directory for libc++_shared.so
const env = { ...process.env, CODEX_MANAGED_BY_NPM: '1' };
const binDir = __dirname;
if (process.env.LD_LIBRARY_PATH) {
  env.LD_LIBRARY_PATH = `${binDir}:${process.env.LD_LIBRARY_PATH}`;
} else {
  env.LD_LIBRARY_PATH = binDir;
}

const child = spawn(binaryPath, finalArgs, {
  stdio: 'inherit',
  env
});

child.on('exit', (code) => {
  process.exit(code);
});
