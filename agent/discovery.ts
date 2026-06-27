// agent/discovery.ts
// Dynamic Base-token discovery for the risk agent.
// Pulls trending + newly-created Base pools from GeckoTerminal (free, no key),
// takes the base token of each pool, filters by liquidity + 24h volume, and
// returns a deduplicated WatchToken[] to merge into the static WATCHLIST.
// Toggle with DISCOVERY_ENABLED=false. Tune with DISCOVERY_LIMIT,
// DISCOVERY_MIN_LIQUIDITY_USD, DISCOVERY_MIN_VOLUME_USD.
import type { WatchToken } from "./watchlist.js"

// URL is assembled from fragments on purpose so it is never rendered as a
// clickable link (keeps copy/paste into the terminal safe).
const GT_BASE = "https://" + "api.geckoterminal" + ".com" + "/api/v2"
const NETWORK = "base"

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

type GtPool = {
  attributes?: {
    name?: string
    reserve_in_usd?: string
    volume_usd?: { h24?: string }
  }
  relationships?: {
    base_token?: { data?: { id?: string } }
  }
}

// Major quote assets we never want to surface as the "subject" token.
const QUOTE_DENYLIST = new Set<string>([
  "0x4200000000000000000000000000000000000006",
  "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
  "0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
  "0xfde4c96c8593536e31f229ea8f37b2ada2699bb2",
])

function addressFromId(id?: string): string | null {
  if (!id) return null
  const ix = id.indexOf("_")
  const addr = (ix >= 0 ? id.slice(ix + 1) : id).toLowerCase()
  return /^0x[a-f0-9]{40}$/.test(addr) ? addr : null
}

function symbolFromName(name?: string): string {
  if (!name) return "?"
  const left = name.split("/")[0] ?? "?"
  return left.trim().split(" ")[0] || "?"
}

// Fetch one feed with a single retry on transient (429 / 5xx / network) errors.
async function fetchPools(path: string): Promise<GtPool[]> {
  let lastErr = "unknown"
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch(`${GT_BASE}/networks/${NETWORK}/${path}`, {
        headers: { accept: "application/json" },
      })
      if (!res.ok) {
        lastErr = `status ${res.status}`
        if (res.status === 429 || res.status >= 500) {
          await sleep(800)
          continue
        }
        throw new Error(lastErr)
      }
      const json = (await res.json()) as { data?: GtPool[] }
      return json.data ?? []
    } catch (e) {
      lastErr = (e as Error).message
      if (attempt < 2) await sleep(600)
    }
  }
  throw new Error(`${path}: ${lastErr}`)
}

export async function discoverTokens(): Promise<WatchToken[]> {
  const enabled =
    (process.env.DISCOVERY_ENABLED ?? "true").toLowerCase() !== "false"
  if (!enabled) return []

  const limit = Number(process.env.DISCOVERY_LIMIT ?? 12)
  const minLiq = Number(process.env.DISCOVERY_MIN_LIQUIDITY_USD ?? 25000)
  const minVol = Number(process.env.DISCOVERY_MIN_VOLUME_USD ?? 25000)

  const feeds = ["trending_pools?page=1", "new_pools?page=1"]
  const pools: GtPool[] = []
  for (const f of feeds) {
    try {
      pools.push(...(await fetchPools(f)))
    } catch (e) {
      console.warn(`discovery: feed ${f} failed: ${(e as Error).message}`)
    }
  }

  const seen = new Set<string>()
  const out: WatchToken[] = []
  for (const p of pools) {
    const a = p.attributes ?? {}
    if (Number(a.reserve_in_usd ?? 0) < minLiq) continue
    if (Number(a.volume_usd?.h24 ?? 0) < minVol) continue
    const addr = addressFromId(p.relationships?.base_token?.data?.id)
    if (!addr || QUOTE_DENYLIST.has(addr) || seen.has(addr)) continue
    seen.add(addr)
    out.push({ symbol: symbolFromName(a.name), address: addr })
    if (out.length >= limit) break
  }
  return out
}
