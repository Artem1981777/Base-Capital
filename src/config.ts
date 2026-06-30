import "dotenv/config"

export type NetworkMode = "testnet" | "mainnet"

const mode = (process.env.NETWORK_MODE ?? "testnet") as NetworkMode
const isMainnet = mode === "mainnet"

export const config = {
	mode,
	isMainnet,
	// CAIP-2 network id used by x402
	network: (isMainnet ? "eip155:8453" : "eip155:84532") as "eip155:8453" | "eip155:84532", // Base / Base Sepolia
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

	// --- On-chain reputation (RiskStake) ---
	// Deployed RiskStake contract: the agent stakes USDC behind every verdict.
	riskStakeAddress:
		process.env.RISKSTAKE_ADDRESS ??
		(isMainnet ? "0x0eC7de61eE08659743A896FeB15BfB99361f440e" : ""),
	// USDC token used for staking (6 decimals).
	usdcAddress:
		process.env.USDC_ADDRESS ??
		(isMainnet
			? "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
			: "0x036CbD53842c5426634e7929541eC2318f3dCF7e"),
	// The agent / oracle address (deployer + owner of RiskStake). Public, read-only use.
	agentAddress:
		process.env.AGENT_ADDRESS ??
		"0x404d641eB58352c5AA23aF6b16d08f0C979f6778",
	// Private key for the staking agent (owner). Only read in the stake job, never shipped to the client.
	agentPrivateKey: process.env.DEPLOYER_PRIVATE_KEY,
  // ERC-8004 agentId whose reputation the v3 RiskStake tracks.
  agentId: Number(process.env.AGENT_ID ?? 57556),
	// USDC staked behind each verdict (string, human units).
	agentStakeUsd: process.env.AGENT_STAKE_USD ?? "1",
	// Max verdicts committed / resolved per stake run (budget guard).
	maxCommitsPerRun: Number(process.env.MAX_COMMITS_PER_RUN ?? 1),
	maxResolvesPerRun: Number(process.env.MAX_RESOLVES_PER_RUN ?? 3),
	// Pending verdicts older than this (minutes) become eligible for resolution.
	resolveAfterMinutes: Number(process.env.RESOLVE_AFTER_MINUTES ?? 50),
}
