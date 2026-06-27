import express from "express"
import { paymentMiddleware, x402ResourceServer } from "@x402/express"
import { ExactEvmScheme } from "@x402/evm/exact/server"
import { HTTPFacilitatorClient } from "@x402/core/server"
import { BUILDER_CODE, declareBuilderCodeExtension } from "@x402/extensions/builder-code"
import { config } from "./config.js"
import { assessToken } from "./lib/risk.js"
import { renderLanding } from "./landing.js"
import { verdicts, stats } from "./data/log.js"
import { readAgentStats, hasContract } from "./lib/stake.js"
import { mountDiscovery } from "./wellknown.js"

export function createApp() {
	const app = express()

	const repoUrl = "https://github.com/Artem1981777/Base-Capital"

	const manifest = {
		name: "Base Capital",
		description:
			"x402 onchain risk-intelligence API for AI trading agents on Base.",
		network: config.network,
		endpoints: {
			"GET /v1/risk/:token": `$${config.riskPriceUsd} USDC — token risk score on Base`,
			"GET /v1/signal/trending": `$${config.riskPriceUsd} USDC — risk-ranked trending tokens (agent-to-agent)`,
			"GET /v1/feed": "free — recent autonomous agent verdicts",
			"GET /v1/stats": "free — autonomous agent activity stats",
			"GET /v1/onchain/stats":
				"free — on-chain RiskStake reputation (staked, slashed, accuracy)",
		},
	}

	// Human-facing landing + interactive demo. Agents/crawlers still get JSON via
	// Accept negotiation on "/" or the explicit /manifest route. The HTML carries
	// the base:app_id meta tag for base.dev domain verification.
	const landingHtml = renderLanding({
		network: config.network,
		price: String(config.riskPriceUsd),
		appId: config.baseAppId,
		repoUrl,
	})

	app.get("/", (req, res) => {
		if (req.accepts(["html", "json"]) === "json") {
			res.json(manifest)
			return
		}
		res.type("html").send(landingHtml)
	})

	app.get("/manifest", (_req, res) => {
		res.json(manifest)
	})

	// Machine-readable discovery doc for x402 indexers (x402scan). Free, ungated.
	app.get("/openapi.json", (_req, res) => {
		const price = Number(config.riskPriceUsd).toFixed(6)
		res.json({
			openapi: "3.1.0",
			info: {
				title: "Base Capital",
				version: "1.0.0",
				description: "x402 onchain risk-intelligence API for AI trading agents on Base.",
				"x-guidance": "Token risk intelligence for AI trading agents on Base. Call GET /v1/risk/{token} with an ERC-20 contract address for a 0-100 safety score plus honeypot/rug/ownership/liquidity flags (GoPlus-backed); every verdict is staked onchain. Call GET /v1/signal/trending for risk-ranked trending tokens. Both cost " + price + " USDC per call via x402 on " + config.network + ". Free preview at GET /v1/preview/{token}.",
			},
			servers: [{ url: "https://base-capital.vercel.app" }],
			paths: {
				"/v1/risk/{token}": {
					get: {
						operationId: "riskCheck",
						summary: "Risk check - token safety score for a Base ERC-20",
						tags: ["Risk"],
						"x-payment-info": {
							price: { mode: "fixed", currency: "USD", amount: price },
							protocols: [{ x402: {} }],
						},
						parameters: [
							{
								name: "token",
								in: "path",
								required: true,
								description: "ERC-20 token contract address on Base (0x-prefixed, 42 chars).",
								schema: { type: "string", pattern: "^0x[a-fA-F0-9]{40}$" },
							},
						],
						responses: {
							"200": {
								description: "Risk assessment for the token",
								content: { "application/json": { schema: { type: "object", properties: { token: { type: "string" }, score: { type: "number" }, rating: { type: "string" }, flags: { type: "array", items: { type: "string" } } }, required: ["token", "score"] } } },
							},
							"402": { description: "Payment Required" },
						},
					},
				},
				"/v1/signal/trending": {
					get: {
						operationId: "trendingSignal",
						summary: "Trending signal - risk-ranked trending tokens",
						tags: ["Signal"],
						"x-payment-info": {
							price: { mode: "fixed", currency: "USD", amount: price },
							protocols: [{ x402: {} }],
						},
						parameters: [
							{
								name: "limit",
								in: "query",
								required: false,
								description: "Max number of tokens to return (default 10).",
								schema: { type: "integer", minimum: 1, maximum: 50 },
							},
						],
						responses: {
							"200": {
								description: "Risk-ranked list of trending tokens",
								content: { "application/json": { schema: { type: "object", properties: { tokens: { type: "array", items: { type: "object" } } }, required: ["tokens"] } } },
							},
							"402": { description: "Payment Required" },
						},
					},
				},
			},
		})
	})

	// Free, rate-limited preview powering the browser demo on "/". Identical
	// scoring to the paid route but with no x402 payment. Soft in-memory guard;
	// the 60s risk cache also absorbs repeats. Agent/production traffic uses the
	// paid /v1/risk route below. Registered before the payment middleware so it
	// is never gated.
	const previewHits = new Map<string, number[]>()
	function previewRateLimited(ip: string): boolean {
		const now = Date.now()
		const recent = (previewHits.get(ip) ?? []).filter((t) => now - t < 60_000)
		recent.push(now)
		previewHits.set(ip, recent)
		return recent.length > 20
	}

	app.get("/v1/preview/:token", async (req, res) => {
		const fwd = req.headers["x-forwarded-for"]
		const ip =
			(Array.isArray(fwd) ? fwd[0] : fwd)?.split(",")[0]?.trim() ||
			req.ip ||
			"anon"
		if (previewRateLimited(ip)) {
			res.status(429).json({
				error:
					"Rate limit: 20 previews/min. Use the paid /v1/risk endpoint for production traffic.",
			})
			return
		}
		try {
			res.json(await assessToken(req.params.token))
		} catch (err) {
			res.status(400).json({ error: (err as Error).message })
		}
	})

	// Live read-only views over the autonomous risk agent's published verdict
	// log (regenerated each tick by agent/tick.ts and committed to the repo).
	// Free + ungated — these power the Agent Feed and live stats on the landing.
	app.get("/v1/stats", (_req, res) => {
		res.json(stats)
	})

	app.get("/v1/feed", (req, res) => {
		const limit = Math.min(Number(req.query.limit) || 25, 100)
		res.json({ stats, verdicts: verdicts.slice(0, limit) })
	})

	// On-chain reputation (RiskStake): keyless read of the agent's staked track
	// record on Base mainnet. Powers the landing's on-chain reputation block.
	app.get("/v1/onchain/stats", async (_req, res) => {
		if (!hasContract()) {
			res.json({ available: false })
			return
		}
		try {
			const onchain = await readAgentStats()
			res.json({
				available: true,
				network: config.network,
				contract: config.riskStakeAddress,
				agent: config.agentAddress,
				explorer: `https://basescan.org/address/${config.riskStakeAddress}`,
				stats: onchain,
			})
		} catch (err) {
			res.json({ available: false, error: (err as Error).message })
		}
	})

	// Facilitator: x402.org public facilitator on testnet; xpay (permissionless,
	// no API keys, gas-sponsored) on mainnet. Both non-custodial: USDC flows
	// buyer -> payTo directly. URL is chosen in config by NETWORK_MODE.
	mountDiscovery(app)

	const facilitatorClient = new HTTPFacilitatorClient({
		url: config.facilitatorUrl,
	})

	// Register the EVM "exact" payment scheme for our network.
	const resourceServer = new x402ResourceServer(facilitatorClient).register(
		config.network,
		new ExactEvmScheme(),
	)

	// x402 v2 payment gate on the paid route.
	app.use(
		paymentMiddleware(
			{
				"GET /v1/risk/:token": {
					accepts: [
						{
							scheme: "exact",
							price: `$${config.riskPriceUsd}`,
							network: config.network,
							payTo: config.payTo,
						},
					],
					description:
						"Token risk score for Base tokens: liquidity, LP, ownership, age, holder concentration. Returns a 0-100 safety score plus flags.",
					mimeType: "application/json",
					// Base Builder Code (ERC-8021) attribution -> Builder Rewards.
					// declareBuilderCodeExtension validates ^[a-z0-9_]{1,32}$ and throws otherwise.
					extensions: {
						[BUILDER_CODE]: declareBuilderCodeExtension(config.builderCode),
					},
				},
				"GET /v1/signal/trending": {
					accepts: [
						{
							scheme: "exact",
							price: `$${config.riskPriceUsd}`,
							network: config.network,
							payTo: config.payTo,
						},
					],
					description:
						"Risk-ranked trending feed: the agent's watchlist sorted riskiest-first, with verdict, score, confidence and flags. Built for agent-to-agent consumption.",
					mimeType: "application/json",
					extensions: {
						[BUILDER_CODE]: declareBuilderCodeExtension(config.builderCode),
					},
				},
			},
			resourceServer,
		),
	)

	// Paid handler.
	app.get("/v1/risk/:token", async (req, res) => {
		try {
			res.json(await assessToken(req.params.token))
		} catch (err) {
			res.status(400).json({ error: (err as Error).message })
		}
	})

	// Paid agent-to-agent signal: riskiest watchlist tokens first, from the
	// agent's latest published verdicts. Builder-code attributed like /v1/risk.
	app.get("/v1/signal/trending", (_req, res) => {
		const trending = [...verdicts]
			.sort((a, b) => a.score - b.score)
			.slice(0, 10)
			.map((v) => ({
				symbol: v.symbol,
				token: v.token,
				score: v.score,
				verdict: v.verdict,
				confidence: v.confidence,
				flags: v.flags,
				hash: v.hash,
			}))
		res.json({
			generatedAt: stats.updatedAt,
			network: config.network,
			count: trending.length,
			trending,
		})
	})

	return app
}
