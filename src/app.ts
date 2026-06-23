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

	// Free, unpaid service manifest — for humans and discovery crawlers.
	app.get("/", (_req, res) => {
		res.json({
			name: "Base Capital",
			description:
				"x402 onchain risk-intelligence API for AI trading agents on Base.",
			network: config.network,
			endpoints: {
				"GET /v1/risk/:token": `$${config.riskPriceUsd} USDC — token risk score on Base`,
			},
		})
	})

	// Facilitator: free public on testnet; CDP on mainnet (free keys, no USDC fee on Base).
	const facilitatorClient = config.isMainnet
		? new HTTPFacilitatorClient(cdpFacilitator)
		: new HTTPFacilitatorClient({ url: config.facilitatorUrl })

	const resourceServer = new x402ResourceServer(facilitatorClient).register(
		config.network,
		new ExactEvmScheme(),
	)

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
