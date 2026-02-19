=====================================
CODEX CLI TEST SUITE - FINAL REPORT
=====================================

Platform: Android Termux ARM64
Codex Version: codex-cli 0.104.0 / codex-exec 0.104.0
Test Date: 2026-02-19 (CET)
Suite Source: test-reports/suites/latest/termux.md
Primary Raw Log: TERMUX_SUITE_RAW_20260219-082943.log
Primary JSON Log: TERMUX_SUITE_JSON_20260219-082943.log
Create JSON Log: TERMUX_SUITE_JSON_CREATE_20260219-082943.log
Network Rerun Log: TERMUX_SUITE_JSON_NETWORK_RERUN_20260219-083527.log
Binary Rerun Log: TERMUX_SUITE_BINARY_RERUN2_20260219-083555.log

SUMMARY:
--------
Total Checks: 10
Passed: 10
Failed: 0
Skipped: 0

SECTION BREAKDOWN:
------------------
1. Install Guard: 2/2 passed
2. Version Guard: 1/1 passed
3. Core Tests: 4/4 passed
4. v0.104.0 Regression Guard: 2/2 passed
5. Termux Checks: 1/1 passed

CRITICAL FAILURES:
------------------
None.

WARNINGS:
---------
None.

NOTES:
------
- Suite fix applied in `test-reports/suites/latest/termux.md`:
  - Binary architecture check now targets real package binaries in npm `bin/`.
  - Network smoke now uses `https://www.google.com` to avoid false negatives from `example.com` certificate-chain variability.
- Global package verified: `@mmmbuto/codex-cli-termux@0.104.0-termux`.
- Global commands verified:
  - `codex` -> `/data/data/com.termux/files/usr/bin/codex`
  - `codex-exec` -> `/data/data/com.termux/files/usr/bin/codex-exec`

DETAILED RESULTS:
-----------------
- Install Guard / npm package: PASS
  - `@mmmbuto/codex-cli-termux@0.104.0-termux` found globally.

- Install Guard / global commands: PASS
  - `command -v codex` and `command -v codex-exec` return valid global paths.

- Version Guard: PASS
  - `codex --version` => `codex-cli 0.104.0`
  - `codex-exec --version` => `codex-exec 0.104.0`

- Core / workspace reset: PASS
  - Workspace created at `/data/data/com.termux/files/home/codex-test-workspace`.

- Core / help commands: PASS
  - `codex --help`, `codex exec --help`, `codex-exec --help` returned usage output.

- Core / codex-exec json sanity #1: PASS
  - Command: `codex-exec --sandbox workspace-write --skip-git-repo-check --json "print current directory and list files"`
  - Result: current directory and listing returned in JSON event stream.

- Core / codex-exec json sanity #2: PASS
  - Command: `codex-exec --sandbox workspace-write --skip-git-repo-check --json "create hello.txt with content 'hello' and then read it"`
  - Result: `hello.txt` created and read back successfully.

- Regression / binary architecture guard: PASS
  - `$(npm root -g)/@mmmbuto/codex-cli-termux/bin/codex` => ELF ARM aarch64 Android.
  - `$(npm root -g)/@mmmbuto/codex-cli-termux/bin/codex-exec` => ELF ARM aarch64 Android.

- Regression / network-path smoke: PASS
  - Command executed without crash or panic.
  - Returned first status line: `HTTP/2 200`.
  - No errors referencing missing symbols (`NetworkDecision::ask`, `NetworkDecision::deny`, `BlockedRequest.decision`).

- Termux checks: PASS
  - `uname -a` => Android aarch64 kernel detected.
  - `$PREFIX` => `/data/data/com.termux/files/usr`
  - `node --version` => `v25.3.0`
  - `npm --version` => `11.10.0`
  - `termux-open-url` found.

VERDICT: PASS
