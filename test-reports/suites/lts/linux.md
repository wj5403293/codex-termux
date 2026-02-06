# LTS Test Suite (Linux)

Purpose: validate an installed LTS build (both `codex` and `codex-exec`) on Linux.

## Command Selection

This suite assumes you have shell functions/aliases in `~/.zshrc` that select your
preferred profile. For LTS tests we use:

- `codex-glm-a` (wraps `codex`)
- `codex-glm-a-exec` (wraps `codex-exec`)

If you do not have these, create equivalents that forward to the real binaries.

Verify commands exist:

```bash
command -v codex-glm-a
command -v codex-glm-a-exec
```

## Version Family Guard (Required)

Both commands must report an `-lts` version:

```bash
codex-glm-a --version
codex-glm-a --version | rg --fixed-strings "-lts"

codex-glm-a-exec --version
codex-glm-a-exec --version | rg --fixed-strings "-lts"
```

## Basic Functionality

Help/usage:

```bash
codex-glm-a --help
codex-glm-a exec --help
codex-glm-a-exec --help
```

Non-interactive sanity (no secrets):

```bash
codex-glm-a-exec --json "print working directory and list files"
codex-glm-a-exec --json "create a file named hello.txt with content 'hello' and then read it"
```

File operations:

```bash
tmpdir="$(mktemp -d)"
cd "$tmpdir"
printf "a\nb\nc\n" > a.txt
codex-glm-a-exec --json "count lines in a.txt and write the count to out.txt"
cat out.txt
```

## Update Banner Sanity (Optional)

The updater should not suggest a jump to non-LTS tags.

```bash
codex-glm-a --search --help >/dev/null 2>&1 || true
```

If you see: `0.80.x-lts -> 0.96.0` (or any non-`-lts`), that is a bug.

