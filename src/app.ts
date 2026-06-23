import express from "express"
import { paymentMiddleware } from "@x402/express"
import { config } from "./config.js"
import { assessToken } from "./lib/risk.js"

export function createApp() {
	const app = express()

	// Free, unpaid service manifest — handy for humans and Bazaar crawlers.
	app.get("/", (_req, res) => {
		res.json({
			name: "Base Capital",
			description:
				"x402 onchain risk-intelligence API for AI trading agents on Base.",
			network: config.network,
			endpoints: {
				"GET /v1/risk/:token": `${config.riskPriceUsd} USDC — token risk score on Base`,
			},
		})
	})

	// x402 payment gate on the paid route.
	// NOTE: the @x402/express SDK is moving fast — verify this signature and the
	// Builder Code field against current docs:
	// https://docs.cdp.coinbase.com/x402/quickstart-for-sellers
	app.use(
		paymentMiddleware(
			config.payTo,
			{
				"GET /v1/risk/*": {
					price: `$${config.riskPriceUsd}`,
					network: config.network,
					config: {
						description:
							"Token risk score for Base tokens: liquidity, LP, ownership, mint authority, age, holder concentration. Returns a 0-100 safety score plus flags.",
						// Enable Bazaar discovery so the CDP facilitator auto-indexes us.
						discoverable: true,
					},
				},
			},
			{
				url: config.facilitatorUrl,
				// Builder Code attribution (ERC-8021) -> Builder Rewards.
				// The facilitator appends the code's suffix to the settlement tx.
				builderCode: config.builderCode,
			},
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

	return app
}
