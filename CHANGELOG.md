# Changelog - Codex Termux

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.77.1-termux] - 2026-01-04

### Termux Notes
- Merged upstream main (63 commits after rust-v0.77.0). Highlights:
  - Config sources: in-repo `.codex/config.toml` (8ff16a7), `/etc/codex/config.toml` (e27d9bd), `project_root_markers` (314937f).
  - ExecPolicyManager wiring: add (96fdbdd), load from ConfigLayerStack (277babb).
  - TUI2 selection/copy/perf: multi-click selection (0130a2f), copy shortcut (414fbe0), cache transcript (90f37e8), reduce redraws (3cfa4bc), scroll stickiness fix (279283f).
  - Unified exec output cap (fb24c47), SandboxUsers group for ACLs (79ce79a).
  - Remove reasoning format (40de81e), remove model family from TUI (2de7314).
- Termux patches (#1–#6, #8, #9) revalidated via `verify-patches.sh`.

### Testing
- CODEX_TEST_SUITE v1.2 on Termux (2026-01-04): 49 tests, 47 passed / 0 failed / 2 skipped (WebSearch disabled; git info skipped outside repo). Package & Binary 8/8 passed; Termux-specific 10/10 passed.

---

## [0.77.0-termux] - 2025-12-21

### Termux Notes
- Bumped workspace + npm versions to `0.77.0-termux` (based on upstream rust-v0.77.0).
- Built and verified unified binary (`codex` with `codex-exec` wrapper).

### Testing
- CODEX_TEST_SUITE v1.2 on Termux (2025-12-21): 50 tests, 48 passed / 0 failed / 2 skipped (WebSearch unavailable; git info skipped outside a repo).
