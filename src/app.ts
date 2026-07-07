import express from "express"
import { paymentMiddleware, x402ResourceServer } from "@x402/express"
import { ExactEvmScheme } from "@x402/evm/exact/server"
import { HTTPFacilitatorClient } from "@x402/core/server"
import { BUILDER_CODE, declareBuilderCodeExtension } from "@x402/extensions/builder-code"
import { declareDiscoveryExtension } from "@x402/extensions/bazaar"
import { config } from "./config.js"
import { assessToken } from "./lib/risk.js"
import { renderLanding } from "./landing.js"
import { verdicts, stats } from "./data/log.js"
import { readAgentStats, readAgentStatsByAddress, hasContract } from "./lib/stake.js"
import { mountDiscovery } from "./wellknown.js"
import { backtest } from "./data/backtest.js"

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
	// Base App / Farcaster mini-app embed assets (SVG: 3:2 card + square icon).
	const EMBED_SVG = "<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'><defs><linearGradient id='bg' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#0b1b3f'/><stop offset='1' stop-color='#07080a'/></linearGradient></defs><rect width='1200' height='800' fill='url(#bg)'/><path d='M150 168 l70 -28 l70 28 v78 c0 60 -38 100 -70 118 c-32 -18 -70 -58 -70 -118 z' fill='#4f8cff'/><text x='300' y='250' font-family='Segoe UI,Helvetica,Arial,sans-serif' font-size='96' font-weight='800' fill='#ffffff'>Base Capital</text><text x='300' y='320' font-family='Segoe UI,Helvetica,Arial,sans-serif' font-size='40' fill='#9ec0ff'>x402 onchain risk scores for Base</text><text x='150' y='540' font-family='Segoe UI,Helvetica,Arial,sans-serif' font-size='40' fill='#e8eaed'>Staked on-chain - 100% accuracy - wrong calls slashed</text><text x='150' y='620' font-family='Segoe UI,Helvetica,Arial,sans-serif' font-size='32' fill='#8a9099'>Builder Code bc_kob8hqa0 - ERC-8004 agent - pay-per-call USDC</text></svg>";
	const ICON_SVG = "<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><rect width='512' height='512' rx='96' fill='#0b1b3f'/><path d='M146 150 l110 -44 l110 44 v120 c0 96 -60 160 -110 188 c-50 -28 -110 -92 -110 -188 z' fill='#4f8cff'/><text x='256' y='298' text-anchor='middle' font-family='Segoe UI,Helvetica,Arial,sans-serif' font-size='118' font-weight='800' fill='#ffffff'>BC</text></svg>";
	app.get("/embed.svg", (_req, res) => {
		res.type("image/svg+xml").send(EMBED_SVG)
	})
	app.get("/icon.svg", (_req, res) => {
		res.type("image/svg+xml").send(ICON_SVG)
	})

	// Liveness/health probe: RPC reachability + contract config. Free, ungated.
	app.get("/healthz", async (_req, res) => {
		const checks: Record<string, unknown> = {}
		let rpcOk = false
		try {
			const ctrl = new AbortController()
			const timer = setTimeout(() => ctrl.abort(), 4000)
			const r = await fetch(config.rpcUrl, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "eth_blockNumber", params: [] }),
				signal: ctrl.signal,
			})
			clearTimeout(timer)
			const j = (await r.json()) as { result?: string }
			rpcOk = Boolean(j && j.result)
			checks.rpc = { ok: rpcOk, blockNumber: j.result ?? null }
		} catch (err) {
			checks.rpc = { ok: false, error: String(err) }
		}
		checks.contract = { configured: hasContract() }
		res.status(rpcOk ? 200 : 503).json({
			ok: rpcOk,
			network: config.network,
			checks,
			ts: new Date().toISOString(),
		})
	})

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
	// Per-address on-chain reputation: free, keyless read of any agent's
	// staked track record on Base mainnet. Powers the landing "Track record"
	// block and lets external agents verify on-chain accountability.
	app.get("/v1/agent/:address", async (req, res) => {
		if (!hasContract()) {
			res.json({ available: false })
			return
		}
		const address = req.params.address
		if (!/^0x[0-9a-fA-F]{40}$/.test(address)) {
			res.status(400).json({ error: "invalid address" })
			return
		}
		try {
			const onchain = await readAgentStatsByAddress(address)
			res.json({
				available: true,
				address,
				network: config.network,
				contract: config.riskStakeAddress,
				explorer: `https://basescan.org/address/${address}`,
				stats: onchain,
				source: "onchain:RiskStake.getAgentStats",
				data_stale: false,
				generatedAt: new Date().toISOString(),
			})
		} catch (err) {
			res.json({
				available: false,
				address,
				data_stale: true,
				error: (err as Error).message,
				generatedAt: new Date().toISOString(),
			})
		}
	})

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
					...declareDiscoveryExtension({ input: { token: "0x4200000000000000000000000000000000000006" }, inputSchema: { properties: { token: { type: "string" } }, required: ["token"] }, output: { example: { token: "0x4200000000000000000000000000000000000006", score: 82, rating: "SAFE", flags: [] } } }),
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
					...declareDiscoveryExtension({ output: { example: { trending: [{ token: "0x4200000000000000000000000000000000000006", score: 41, rating: "RISKY", flags: ["low_liquidity"] }] } } }),
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
