# @mmmbuto/codex-cli-lts

> **Long-term support line based on upstream rust-v0.80.0, stable for compatibility**

[![npm](https://img.shields.io/npm/v/@mmmbuto/codex-cli-lts?style=flat-square&logo=npm)](https://www.npmjs.org/package/@mmmbuto/codex-cli-lts)
[![downloads](https://img.shields.io/npm/dt/@mmmbuto/codex-cli-lts?style=flat-square)](https://www.npmjs.org/package/@mmmbuto/codex-cli-lts)
[![ko-fi](https://img.shields.io/badge/☕_Support-Ko--fi-FF5E5B?style=flat-square&logo=ko-fi)](https://ko-fi.com/dionanos)

---

## What This Is

LTS (Long-term support) release line based on upstream OpenAI Codex rust-v0.80.0. This version focuses on stability and compatibility, supporting both **/chat and /responses** wire APIs.

### Version

- **Package**: `@mmmbuto/codex-cli-lts`
- **Version**: `0.80.4-lts` (based on rust-v0.80.0)
- **Supported**: Linux x64 + Android Termux (ARM64) + macOS arm64 (via CI artifacts/releases)
- **Updates**: Security and stability backports only

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

**Current patches**: See [../patches/](../patches/) directory for full documentation.

Need help debugging upgrade alerts? See
[../docs/termux-upgrade-checks.md](../docs/termux-upgrade-checks.md) for known causes
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
npm install -g @mmmbuto/codex-cli-lts
```

**Verify:**
```bash
codex --version
codex login
```

See [../docs/installation.md](../docs/installation.md) for more details.

---

## 🚀 Quickstart

Get started with Codex LTS in 2 minutes. Choose your setup:

- **Path 1**: OpenAI (default) - `codex login && codex`
- **Path 2**: /chat providers (native support for wire_api)
- **Path 3**: OpenRouter & gateways

See [../docs/quickstart.md](../docs/quickstart.md) for complete instructions.

---

## 📚 Documentation

- [Getting Started](../docs/getting-started.md)
- [Configuration](../docs/config.md)
- [Slash Commands](../docs/slash_commands.md)
- [Sandbox & Approvals](../docs/sandbox.md)
- [Authentication](../docs/authentication.md)
- [Skills](../docs/skills.md)
- [Contributing](../docs/contributing.md)
- [Open Source Fund](../docs/open-source-fund.md)

---

## 🔧 Project Maintenance

**Codex-Termux** is a community-maintained port enabling AI-powered coding on Android Termux.

**Maintenance activities:**
- 🔨 **ARM64 compilation** - Building native binaries for each upstream release
- 🔄 **Upstream synchronization** - Tracking OpenAI Codex updates and merging changes
- 🐛 **Compatibility patches** - Maintaining Android-specific fixes for Termux environment
- 📱 **Device testing** - Verification on real ARM64 hardware
- 📚 **Documentation & support** - Maintaining docs, responding to GitHub issues

**Thank you** to all users who have reported issues, provided feedback, and helped improve this project.

---

## 📝 License

This project maintains full compliance with the Apache 2.0 license from OpenAI Codex.

**Original work**: Copyright OpenAI (https://github.com/openai/codex)
**Termux port**: Minimal patches for Android compatibility

See [../LICENSE](../LICENSE) file for details.

---

## 🙏 Credits

- **OpenAI** for the amazing Codex CLI
- **Termux** community for Android terminal environment
- All contributors to upstream Codex project

---

**Version**: Based on OpenAI Codex rust-v0.80.0 with Termux compatibility patches
**Platform**: Linux x64 + Android Termux ARM64 + macOS arm64
**Maintained**: Community-driven, not affiliated with OpenAI
