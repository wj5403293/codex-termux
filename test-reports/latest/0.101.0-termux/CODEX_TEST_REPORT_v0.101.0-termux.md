=====================================
CODEX CLI TEST SUITE - FINAL REPORT
=====================================

Platform: Android Termux ARM64
Codex Version: codex-cli 0.101.0 / codex-exec 0.101.0
Test Date: 2026-02-16 (CET)
Suite Source: test-reports/suites/latest/termux.md
Primary Raw Log: TERMUX_SUITE_RAW_20260216-001403.log
Primary JSON Log: TERMUX_SUITE_JSON_20260216-001403.log
Rerun JSON Log: TERMUX_SUITE_JSON_RERUN_20260216-001455.log

SUMMARY:
--------
Total Checks: 8
Passed: 8
Failed: 0
Skipped: 0

SECTION BREAKDOWN:
------------------
1. Install Guard: 2/2 passed
2. Version Guard: 1/1 passed
3. Core Tests: 4/4 passed (1 required a rerun)
4. Termux Checks: 1/1 passed

CRITICAL FAILURES:
------------------
None.

WARNINGS:
---------
- In JSON logs, a non-fatal warning was observed:
  `ERROR codex_core::rollout::list: state db missing rollout path for thread ...`

NOTES:
------
- The "create hello.txt" JSON sanity check initially failed due to the default sandbox being
  read-only; it was re-run with `--sandbox workspace-write` and passed.

DETAILED RESULTS:
-----------------
- Install Guard / npm package: PASS
  - `@mmmbuto/codex-cli-termux@0.101.0-termux` found globally.

- Install Guard / global commands: PASS
  - `codex` -> `/data/data/com.termux/files/usr/bin/codex`
  - `codex-exec` -> `/data/data/com.termux/files/usr/bin/codex-exec`

- Version Guard: PASS
  - `codex --version` => `codex-cli 0.101.0`
  - `codex-exec --version` => `codex-exec 0.101.0`

- Core / workspace reset: PASS
  - Workspace created at `/data/data/com.termux/files/home/codex-test-workspace`.

- Core / help commands: PASS
  - `codex --help`, `codex exec --help`, `codex-exec --help` all returned usage output.

- Core / codex-exec json sanity #1: PASS
  - Command: `codex-exec --skip-git-repo-check --json "print current directory and list files"`
  - Result: current directory and listing returned in JSON event stream.

- Core / codex-exec json sanity #2: PASS (rerun)
  - Command: `codex-exec --sandbox workspace-write --skip-git-repo-check --json "create hello.txt with content 'hello' and then read it"`
  - Result: `hello.txt` created and read back successfully.

- Termux checks: PASS
  - `uname -a` => Android aarch64 kernel detected
  - `$PREFIX` => `/data/data/com.termux/files/usr`
  - `node --version` => `v25.3.0`
  - `npm --version` => `11.10.0`
  - `termux-open-url` found

VERDICT: PASS

