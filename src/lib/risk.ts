// Risk scoring: combine DexScreener market data + onchain reads into a 0-100
// safety score. Higher = safer. Heuristic, not a buy/sell simulation.
import { bestPair, getBasePairs } from "./dexscreener.js"
import { getOwner, getTotalSupply, validateAddress } from "./onchain.js"
import { cached } from "./cache.js"

const DEAD_ADDRESSES = new Set([
	"0x0000000000000000000000000000000000000000",
	"0x000000000000000000000000000000000000dead",
])

export type RiskRating = "low" | "medium" | "high" | "critical"

export type RiskResult = {
	token: string
	score: number
	rating: RiskRating
	flags: string[]
	data: {
		liquidityUsd: number
		priceUsd: string | null
		volume24h: number
		ageHours: number | null
		owner: string | null
		ownerRenounced: boolean | null
		totalSupply: string | null
		dex: string | null
		pairAddress: string | null
	}
	disclaimer: string
	generatedAt: string
}

export async function assessToken(tokenRaw: string): Promise<RiskResult> {
	const token = validateAddress(tokenRaw)
	return cached(`risk:${token.toLowerCase()}`, 60_000, async () => {
		const [pairs, owner, totalSupply] = await Promise.all([
			getBasePairs(token),
			getOwner(token),
			getTotalSupply(token),
		])
		const pair = bestPair(pairs)

		const flags: string[] = []
		let score = 100

		const liquidityUsd = pair?.liquidity?.usd ?? 0
		if (!pair) {
			flags.push("no_dex_pair")
			score -= 40
		} else if (liquidityUsd < 10_000) {
			flags.push("low_liquidity")
			score -= 25
		} else if (liquidityUsd < 50_000) {
			flags.push("medium_liquidity")
			score -= 10
		}

		const ageHours = pair?.pairCreatedAt
			? (Date.now() - pair.pairCreatedAt) / 3.6e6
			: null
		if (ageHours !== null && ageHours < 24) {
			flags.push("new_pair_under_24h")
			score -= 15
		}

		const volume24h = pair?.volume?.h24 ?? 0
		if (liquidityUsd > 0 && volume24h / liquidityUsd > 10) {
			flags.push("volume_liquidity_anomaly")
			score -= 10
		}

		const ownerRenounced = owner
			? DEAD_ADDRESSES.has(owner.toLowerCase())
			: null
		if (owner && ownerRenounced === false) {
			flags.push("owner_not_renounced")
			score -= 10
		}

		score = Math.max(0, Math.min(100, score))
		const rating: RiskRating =
			score >= 75
				? "low"
				: score >= 50
					? "medium"
					: score >= 25
						? "high"
						: "critical"

		return {
			token,
			score,
			rating,
			flags,
			data: {
				liquidityUsd,
				priceUsd: pair?.priceUsd ?? null,
				volume24h,
				ageHours,
				owner,
				ownerRenounced,
				totalSupply: totalSupply?.toString() ?? null,
				dex: pair?.dexId ?? null,
				pairAddress: pair?.pairAddress ?? null,
			},
			disclaimer:
				"Heuristic score, not a buy/sell simulation. Honeypot detection is not exhaustive — always do your own research.",
			generatedAt: new Date().toISOString(),
		}
	})
}
