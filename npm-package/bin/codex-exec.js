#!/usr/bin/env node

import { spawn } from 'child_process';
import { existsSync, lstatSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const execBinaryPath = join(__dirname, 'codex-exec');
const codexBinaryPath = join(__dirname, 'codex');

const hasDedicatedExecBinary =
  existsSync(execBinaryPath) && !lstatSync(execBinaryPath).isSymbolicLink();

const binaryPath = hasDedicatedExecBinary ? execBinaryPath : codexBinaryPath;
const args = hasDedicatedExecBinary
  ? process.argv.slice(2)
  : ['exec', ...process.argv.slice(2)];

// Set LD_LIBRARY_PATH to include the bin directory for libc++_shared.so
const env = { ...process.env };
const binDir = __dirname;
if (process.env.LD_LIBRARY_PATH) {
  env.LD_LIBRARY_PATH = `${binDir}:${process.env.LD_LIBRARY_PATH}`;
} else {
  env.LD_LIBRARY_PATH = binDir;
}

const child = spawn(binaryPath, args, {
  stdio: 'inherit',
  env
});

child.on('exit', (code) => {
  process.exit(code);
});