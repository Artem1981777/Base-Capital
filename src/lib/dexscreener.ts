// DexScreener client — free, no API key, 60 req/min.
// Docs: https://docs.dexscreener.com/api/reference

import { fetchJson } from "./http.js"

const BASE_URL = "https://api.dexscreener.com"

export type DexPair = {
	chainId: string
	dexId?: string
	pairAddress?: string
	priceUsd?: string
	liquidity?: { usd?: number }
	volume?: { h24?: number }
	priceChange?: { h24?: number }
	pairCreatedAt?: number
	fdv?: number
	marketCap?: number
}

export async function getBasePairs(token: string): Promise<DexPair[]> {
	try {
		const json = await fetchJson<{ pairs?: DexPair[] }>(
			`${BASE_URL}/latest/dex/tokens/${token}`,
		)
		return (json.pairs ?? []).filter((p) => p.chainId === "base")
	} catch {
		// Degrade gracefully: a DexScreener outage must not 500 the risk endpoint.
		return []
	}
}

export function bestPair(pairs: DexPair[]): DexPair | undefined {
	return [...pairs].sort(
		(a, b) => (b.liquidity?.usd ?? 0) - (a.liquidity?.usd ?? 0),
	)[0]
}
