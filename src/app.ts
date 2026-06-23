import express from "express"
import { paymentMiddleware, x402ResourceServer } from "@x402/express"
import { ExactEvmScheme } from "@x402/evm/exact/server"
import { HTTPFacilitatorClient } from "@x402/core/server"
import { facilitator as cdpFacilitator } from "@coinbase/x402"
import { BUILDER_CODE, declareBuilderCodeExtension } from "@x402/extensions/builder-code"
import { config } from "./config.js"
import { assessToken } from "./lib/risk.js"

export function createApp() {
	const app = express()

	const manifest = {
		name: "Base Capital",
		description:
			"x402 onchain risk-intelligence API for AI trading agents on Base.",
		network: config.network,
		endpoints: {
			"GET /v1/risk/:token": `$${config.riskPriceUsd} USDC — token risk score on Base`,
		},
	}

	// HTML landing carries the base:app_id meta tag for base.dev domain
	// verification. Agents/crawlers still get JSON via Accept negotiation
	// or the explicit /manifest route.
	const landingHtml = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="base:app_id" content="${config.baseAppId}" />
<title>Base Capital — x402 onchain risk API</title>
</head>
<body style="margin:0;font:16px/1.6 system-ui,sans-serif;background:#0a0b0d;color:#e8eaed">
<main style="max-width:640px;margin:0 auto;padding:48px 24px">
<h1 style="font-size:2rem;margin:0 0 .25rem">Base Capital</h1>
<div style="color:#4f8cff;font-weight:600;margin-bottom:1.5rem">x402 onchain risk intelligence for AI trading agents on Base</div>
<p>Pay-per-call API returning a 0–100 risk score for any Base token — liquidity, LP, ownership, age and holder-concentration checks.</p>
<div style="background:#16181d;border:1px solid #23262d;border-radius:12px;padding:20px;margin-top:16px">
<strong>GET /v1/risk/:token</strong><br/>
<span style="color:#9aa0a6">$${config.riskPriceUsd} USDC per call · network ${config.network}</span>
</div>
<p style="margin-top:24px;color:#9aa0a6">Machine-readable manifest: <a style="color:#4f8cff" href="/manifest">/manifest</a> · Powered by <a style="color:#4f8cff" href="https://x402.org">x402</a></p>
</main>
</body>
</html>`

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

	// Facilitator: free public one on testnet; CDP facilitator on mainnet
	// (needs free CDP API keys; charges no fee for USDC on Base).
	const facilitatorClient = config.isMainnet
		? new HTTPFacilitatorClient(cdpFacilitator)
		: new HTTPFacilitatorClient({ url: config.facilitatorUrl })

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
					extensions: {
						[BUILDER_CODE]: declareBuilderCodeExtension(config.builderCode),
					},
				},
			},
			resourceServer,
		),
	)

	app.get("/v1/risk/:token", async (req, res) => {
		try {
			res.json(await assessToken(req.params.token))
		} catch (err) {
			res.status(400).json({ error: (err as Error).message })
		}
	})

	return app
}
