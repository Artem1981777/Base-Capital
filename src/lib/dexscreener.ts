// DexScreener client — free, no API key, 60 req/min.
// Docs: https://docs.dexscreener.com/api/reference

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
	const res = await fetch(`${BASE_URL}/latest/dex/tokens/${token}`, {
		headers: { accept: "application/json" },
	})
	if (!res.ok) throw new Error(`DexScreener responded ${res.status}`)
	const json = (await res.json()) as { pairs?: DexPair[] }
	return (json.pairs ?? []).filter((p) => p.chainId === "base")
}

export function bestPair(pairs: DexPair[]): DexPair | undefined {
	return [...pairs].sort(
		(a, b) => (b.liquidity?.usd ?? 0) - (a.liquidity?.usd ?? 0),
	)[0]
}
