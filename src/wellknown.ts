import type { Application } from "express"
import { config } from "./config.js"

const HOST = "base-capital" + ".vercel" + ".app"
const BASE = "https://" + HOST
const REPO = "https://" + "github" + ".com" + "/Artem1981777/Base-Capital"
const PRICE = String(config.riskPriceUsd)

export function mountDiscovery(app: Application): void {
  // Machine-readable x402 discovery manifest for autonomous agents and indexers.
  app.get("/.well-known/x402.json", (_req, res) => {
    res.json({
      x402Version: 1,
      name: "Base Capital",
      description:
        "x402 onchain risk-intelligence API for AI trading agents on Base. Token safety scores (0-100) plus honeypot/rug/ownership/liquidity flags, GoPlus-backed, every verdict staked onchain.",
      network: config.network,
      builderCode: config.builderCode,
      documentation: BASE + "/openapi.json",
      openapi: BASE + "/openapi.json",
      repository: REPO,
      resources: [
        {
          method: "GET",
          path: "/v1/risk/{token}",
          description:
            "Risk check for a Base ERC-20: 0-100 safety score plus honeypot/rug/ownership/liquidity flags.",
          price: { amount: PRICE, currency: "USD" },
          payTo: config.payTo,
          network: config.network,
          protocols: ["x402"],
        },
        {
          method: "GET",
          path: "/v1/signal/trending",
          description:
            "Risk-ranked trending tokens on Base, riskiest first. Built for agent-to-agent use.",
          price: { amount: PRICE, currency: "USD" },
          payTo: config.payTo,
          network: config.network,
          protocols: ["x402"],
        },
      ],
      free: [
        { method: "GET", path: "/v1/preview/{token}", description: "Free risk preview." },
        { method: "GET", path: "/v1/feed", description: "Recent verdict feed." },
        { method: "GET", path: "/v1/stats", description: "Service stats." },
        { method: "GET", path: "/v1/onchain/stats", description: "Onchain stake reputation." },
      ],
    })
  })

  // Plain-text capability summary for LLM crawlers.
  app.get("/llms.txt", (_req, res) => {
    const lines = [
      "# Base Capital",
      "",
      "x402 onchain risk-intelligence API for AI trading agents on Base.",
      "",
      "## What it does",
      "Given a Base ERC-20 contract address, returns a 0-100 safety score plus",
      "honeypot / rug / ownership / liquidity flags (GoPlus-backed). Every verdict",
      "is staked onchain via the RiskStake contract.",
      "",
      "## Paid endpoints (x402, " + config.network + ", " + PRICE + " USDC per call)",
      "GET /v1/risk/{token}      token safety score plus flags",
      "GET /v1/signal/trending   risk-ranked trending tokens",
      "",
      "## Free endpoints",
      "GET /v1/preview/{token}   free risk preview",
      "GET /v1/feed              recent verdict feed",
      "GET /v1/stats             service stats",
      "GET /v1/onchain/stats     onchain stake reputation",
      "",
      "## Discovery",
      "Manifest: " + BASE + "/.well-known/x402.json",
      "OpenAPI:  " + BASE + "/openapi.json",
      "Source:   " + REPO,
      "Builder Code: " + config.builderCode,
      "",
    ]
    res.type("text/plain").send(lines.join("\n"))
  })
}
