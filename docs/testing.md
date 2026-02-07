# Testing

## Test Suite

This project includes a comprehensive test suite validating all functionality on Termux.

### Overview

- ✅ **82 total tests** defined (includes optional/manual)
- ✅ **49 automated tests** on Termux
- ✅ **12 categories** including Termux-specific and Package validation
- ✅ **10 Termux-specific tests** validating all active compatibility patches
- ✅ **8 Package & Binary tests** for npm installation verification

### Test Categories

1. System Information (3 tests)
2. File Operations (8 tests)
3. Search & Discovery (3 tests)
4. Shell Execution (4 tests)
5. Text Processing (2 tests)
6. Web & Network (2 tests - optional)
7. Git Operations (2 tests - optional)
8. AI Capabilities (3 tests)
9. Error Handling (3 tests)
10. **Termux-Specific (10 tests)** ⭐ - Validates all Android patches
11. Cleanup (1 test)
12. **Package & Binary (8 tests)** ⭐ - Validates npm installation and binaries

### How to Use

```bash
# Start Codex
codex

# Feed the test suite
> Read and execute all tests in https://github.com/DioNanos/codex-termux/blob/main/test-reports/CODEX_TEST_SUITE.md
```

Codex will automatically:
1. Execute all applicable tests sequentially
2. Report PASS/FAIL for each test
3. Generate a final summary with total passed/failed counts

### Success Criteria

- All System, Files, Shell, and Termux tests must pass
- At least 80% overall pass rate
- No critical crashes

### Test Reports

**Latest (v0.95.0-termux, 2026-02-04):** 20 tests, 20 passed / 0 failed / 1 warning
- See [CODEX_TEST_REPORT_v0.95.0.md](../test-reports/CODEX_TEST_REPORT_v0.95.0.md)

**LTS Validation (2026-02-02):** All categories PASS
- See [CODEX_TEST_REPORT_v0.80.3-lts_termux.md](../test-reports/CODEX_TEST_REPORT_v0.80.3-lts_termux.md)

**LTS Linux (2026-01-31):** 62 tests, 60 passed / 0 failed / 11 skipped
- See [CODEX_TEST_REPORT_v0.80.3-lts_linux.md](../test-reports/CODEX_TEST_REPORT_v0.80.3-lts_linux.md)

### Full Test Suite

See [../test-reports/CODEX_TEST_SUITE.md](../test-reports/CODEX_TEST_SUITE.md) for complete test definitions.
