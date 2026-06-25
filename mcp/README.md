# Base Capital — MCP server

Call Base Capital's x402 risk API from any MCP client (Claude Desktop, agent
frameworks). Each paid tool call settles in USDC on Base via x402 — no API keys,
no signup.

## Tools
- risk_check(token)    paid ($0.01 USDC): 0-100 risk score + honeypot/rug/ownership/liquidity flags
- trending_signal()    paid ($0.01 USDC): watchlist sorted riskiest-first
- preview(token)       free: basic risk signals, no payment

## Run
    PRIVATE_KEY=0xYOUR_BUYER_KEY npx tsx mcp/server.ts

## Claude Desktop (claude_desktop_config.json)
    {
      "mcpServers": {
        "base-capital": {
          "command": "npx",
          "args": ["-y", "tsx", "/ABSOLUTE/PATH/base-capital/mcp/server.ts"],
          "env": {
            "PRIVATE_KEY": "0xYOUR_BUYER_KEY",
            "BASE_CAPITAL_URL": "https://base-capital.vercel.app"
          }
        }
      }
    }

The buyer wallet must hold a little USDC on Base. Paid calls are attributed to
the app via our ERC-8021 builder code.
