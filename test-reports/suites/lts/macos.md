# LTS Test Suite (macOS arm64)

Purpose: validate an LTS build on macOS arm64 using your `~/.zshrc` wrappers for:

- `codex-glm-a` (wraps `codex`)
- `codex-glm-a-exec` (wraps `codex-exec`)

This suite is written to avoid provider-specific instructions. It only assumes
your wrappers set whatever environment you need and then run the binaries.

## Command Selection

```bash
command -v codex-glm-a
command -v codex-glm-a-exec
```

## Version Family Guard (Required)

Both must be `-lts`:

```bash
codex-glm-a --version
codex-glm-a --version | rg --fixed-strings "-lts"

codex-glm-a-exec --version
codex-glm-a-exec --version | rg --fixed-strings "-lts"
```

If either command reports `0.96.0` and references `@openai/codex`, you are testing
the upstream Homebrew/npm package, not this repo's LTS.

## Basic Functionality

```bash
codex-glm-a --help
codex-glm-a exec --help
codex-glm-a-exec --help
```

Non-interactive sanity:

```bash
codex-glm-a-exec --json "print working directory and list files"
codex-glm-a-exec --json "create hello.txt with content 'hello' and then read it"
```

## Updater Sanity (Important)

The LTS updater must not suggest upgrades to non-LTS versions such as `0.96.0`.
If it does, capture:

```bash
codex-glm-a --version
env | rg '^CODEX_MANAGED_BY_NPM=' || true
cat ~/.config/codex/version.json 2>/dev/null || true
```

