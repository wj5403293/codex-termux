# 2-Minute Quickstart / 2分钟快速开始

Get a first session running fast. Choose the path that matches your account.
快速完成首次运行。选择与你的账号/网关匹配的路径。

## Path 1 — OpenAI (default)

```bash
codex login
codex
```

## Path 2 — /chat providers with codex-lts (dual install)

Use this when a provider requires `wire_api = "chat"`. Since Codex v0.95.0+ deprecates `wire_api` in the **global** config, keep it out of `~/.codex/config.toml` and pass it inline only to the LTS binary.

**Warning (v0.95.0+):** putting `wire_api = "chat"` in the global config breaks the main `codex` install. Use inline `-c` overrides **only** for `codex-lts`.

**Quick setup / 快速配置:**
```bash
# Latest global (responses-compatible)
npm install -g @mmmbuto/codex-cli-termux

# LTS local (avoid name clash with global)
mkdir -p ~/.local/codex-lts
cd ~/.local/codex-lts
npm init -y
npm install @mmmbuto/codex-cli-lts
```

**Global config (NO wire_api):**
```toml
# ~/.codex/config.toml
[model_providers.chat-a]
name = "Chat-A"
base_url = "https://api.example.com/v1"
env_key = "CHAT_A_API_KEY"
models = ["model-1", "model-2"]
```

**Alias for LTS with inline wire_api:**
```bash
cat >> ~/.zshrc << 'ALIAS_EOF'
codex-chat-a() {
  CHAT_A_API_KEY="$CHAT_A_API_KEY" \
  ~/.local/codex-lts/node_modules/.bin/codex \
    -c model="model-1" \
    -c model_provider="chat-a" \
    -c 'model_providers.chat-a.wire_api="chat"' \
    "$@"
}
ALIAS_EOF

source ~/.zshrc
codex-chat-a "hello from a /chat provider"
```

## Path 3 — OpenRouter & gateways / OpenRouter 与兼容网关

For OpenRouter or other OpenAI-compatible providers.
适用于 OpenRouter 或其他 OpenAI 兼容的提供商。

See [docs/openrouter-quickstart.md](./openrouter-quickstart.md) for detailed configuration.

```bash
# Quick example (see docs for full setup)
source ~/.codex/.env
codex --profile or-fast
```

Caution: model slugs/names can change on providers—verify the current model list first.
注意：模型名称可能变化，请以提供商模型列表为准。
