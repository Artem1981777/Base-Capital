import "dotenv/config"

export type NetworkMode = "testnet" | "mainnet"

const mode = (process.env.NETWORK_MODE ?? "testnet") as NetworkMode
const isMainnet = mode === "mainnet"

export const config = {
	mode,
	isMainnet,
	// CAIP-2 network id used by x402
	network: isMainnet ? "eip155:8453" : "eip155:84532", // Base / Base Sepolia
	// Free public testnet facilitator vs xpay mainnet facilitator (keyless, no fee for USDC on Base)
	facilitatorUrl: isMainnet
		? "https://facilitator.xpay.sh"
		: "https://x402.org/facilitator",
	// USDC payout / identity. Basename resolves to the registered payout address.
	payTo: process.env.PAY_TO ?? "artem00777.base.eth",
	// Base Builder Code for ERC-8021 attribution -> Builder Rewards
	builderCode: process.env.BUILDER_CODE ?? "bc_kob8hqa0",
	// Price per /v1/risk call (USDC)
	riskPriceUsd: process.env.RISK_PRICE_USD ?? "0.01",
	rpcUrl:
		process.env.RPC_URL ??
		(isMainnet ? "https://mainnet.base.org" : "https://sepolia.base.org"),
	cdpApiKeyId: process.env.CDP_API_KEY_ID,
	cdpApiKeySecret: process.env.CDP_API_KEY_SECRET,
	// Base Build app id for base.dev domain verification (public meta tag).
	baseAppId: process.env.BASE_APP_ID ?? "6a3a6b5ad79487d5e6aaca0a",
	port: Number(process.env.PORT ?? 3000),
}
