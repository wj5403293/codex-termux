# 🤖 Codex CLI - Termux Edition

> **Built from upstream OpenAI Codex source, compiled for Linux x64 + Android Termux (ARM64)**

[![npm](https://img.shields.io/npm/v/@mmmbuto/codex-cli-termux?style=flat-square&logo=npm)](https://www.npmjs.org/package/@mmmbuto/codex-cli-termux)
[![downloads](https://img.shields.io/npm/dt/@mmmbuto/codex-cli-termux?style=flat-square)](https://www.npmjs.org/package/@mmmbuto/codex-cli-termux)
[![ko-fi](https://img.shields.io/badge/☕_Support-Ko--fi-FF5E5B?style=flat-square&logo=ko-fi)](https://ko-fi.com/dionanos)

---

## What This Is

Built from upstream OpenAI Codex source, compiled for Linux x64 and Android Termux. Since Termux is not officially supported by upstream, we apply minimal patches only for critical compatibility issues.

### Termux Edition

This repo maintains **two release lines**:

- **Latest (main)**: Termux-only, tracks upstream more closely (current: **v0.95.0-termux** based on `rust-v0.95.0`).
- **LTS (lts)**: Long-term support based on upstream `rust-v0.80.0`, stable for compatibility.
  The LTS line supports **both /chat and /responses** wire APIs, and receives **security and stability backports only**.

### What We Do:
✅ **Use official OpenAI Codex source** (https://github.com/openai/codex)
✅ **Compile for Linux x64 + ARM64** (Android Termux native)
✅ **Apply minimal patches** only for Termux-specific issues not addressed upstream
✅ **Package as npm** for easy installation
✅ **Maintain full Apache 2.0 compliance** with OpenAI attribution

### What We DON'T Do:
❌ **NO new features**
❌ **NO behavior modifications** (works exactly like upstream)
❌ **NO replacement** of official Codex

### 🔧 Compatibility Patches

We only apply patches for issues that:
- **Prevent Codex from working on Termux**
- **Are not addressed by upstream** (Termux is not officially supported)
- **Are minimal and well-documented**

**Current patches**: See [patches/](./patches/) directory for full documentation.

Need help debugging upgrade alerts? See
[docs/termux-upgrade-checks.md](./docs/termux-upgrade-checks.md) for known causes
and fix strategies.

**Found an issue?** Well-documented bug reports with reproduction steps are welcome! Open an [issue](https://github.com/DioNanos/codex-termux/issues).

---

## 📋 Prerequisites

### Linux (x64)

```bash
# Install Node.js (example for Debian/Ubuntu)
sudo apt-get update
sudo apt-get install -y nodejs npm

# Verify
node --version  # v18+ (recommended v22+)
npm --version   # v6+
```

**Requirements:**
- Linux x64
- Node.js >=18 (recommended >=22)
- ~80MB storage

### Termux (Android ARM64)

```bash
# Update Termux packages
pkg update && pkg upgrade -y

# Install Node.js
pkg install nodejs-lts -y

# Verify
node --version  # v18+ (recommended v22+)
npm --version   # v6+
```

**Requirements:**
- Android 7+ (Termux)
- ARM64 architecture
- Node.js >=18 (recommended >=22)
- ~50MB storage

---

## 📦 Installation

```bash
npm install -g @mmmbuto/codex-cli-termux
```

**Verify:**
```bash
codex --version
codex login
```

See [docs/installation.md](./docs/installation.md) for more details.

---

## 🚀 Quickstart

Get started with Codex in 2 minutes. Choose your setup:

- **Path 1**: OpenAI (default) - `codex login && codex`
- **Path 2**: /chat providers with codex-lts (dual install)
- **Path 3**: OpenRouter & gateways

See [docs/quickstart.md](./docs/quickstart.md) for complete instructions.

---

## 📚 Documentation

- [Getting Started](./docs/getting-started.md)
- [Configuration](./docs/config.md)
- [Slash Commands](./docs/slash_commands.md)
- [Sandbox & Approvals](./docs/sandbox.md)
- [Authentication](./docs/authentication.md)
- [Skills](./docs/skills.md)
- [Contributing](./docs/contributing.md)
- [Open Source Fund](./docs/open-source-fund.md)

---

## 🔧 Project Maintenance

**Codex-Termux** is a community-maintained port enabling AI-powered coding on Android Termux.

**Maintenance activities:**
- 🔨 **ARM64 compilation** - Building native binaries for each upstream release (~18min per build)
- 🔄 **Upstream synchronization** - Tracking OpenAI Codex updates and merging changes
- 🐛 **Compatibility patches** - Maintaining Android-specific fixes for Termux environment
- 📱 **Device testing** - Verification on real ARM64 hardware (ARM64 flagship device, other devices)
- 📚 **Documentation & support** - Maintaining docs, responding to GitHub issues

**Time investment:** Approximately 20 hours per month for project upkeep.

**Thank you** to all users who have reported issues, provided feedback, and helped improve this project. Your contributions make Codex accessible on mobile platforms.

---

## 📝 License

This project maintains full compliance with the Apache 2.0 license from OpenAI Codex.

**Original work**: Copyright OpenAI (https://github.com/openai/codex)
**Termux port**: Minimal patches for Android compatibility

See [LICENSE](./LICENSE) file for details.

---

## 🙏 Credits

- **OpenAI** for the amazing Codex CLI
- **Termux** community for Android terminal environment
- All contributors to upstream Codex project

---

**Version**: Based on OpenAI Codex rust-v0.95.0 with Termux compatibility patches
**Platform**: Android Termux ARM64
**Maintained**: Community-driven, not affiliated with OpenAI
