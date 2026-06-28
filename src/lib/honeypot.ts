// Independent honeypot oracle via honeypot.is — buy/sell SIMULATION.
// Deliberately independent from our DexScreener + GoPlus + owner heuristics:
// honeypot.is forks chain state and simulates a real buy then sell, so it is a
// strong, external signal that also serves as ground truth in the backtest.
// Keyless + free, cached 5min. Returns "unknown" on ANY error so callers
// degrade gracefully and never throw. Base mainnet = chainID 8453.
import { cached } from "./cache.js"

// Assembled from fragments so the URL is never auto-linkified when pasted into
// a terminal (same convention as agent/discovery.ts).
const HP_API = "https://" + "api.honeypot" + ".is" + "/v2/IsHoneypot"
const CHAIN_ID = "8453"

export type HoneypotLabel = "bad" | "good" | "unknown"

export type HoneypotVerdict = {
  label: HoneypotLabel
  isHoneypot: boolean | null
  sellTaxPct: number | null
  buyTaxPct: number | null
  reason: string
  source: "honeypot.is"
}

export async function honeypotLabel(token: string): Promise<HoneypotVerdict> {
  const addr = token.toLowerCase()
  return cached(`honeypot:${addr}`, 5 * 60_000, async () => {
    const base = {
      isHoneypot: null as boolean | null,
      sellTaxPct: null as number | null,
      buyTaxPct: null as number | null,
      source: "honeypot.is" as const,
    }
    try {
      const url = `${HP_API}?address=${addr}&chainID=${CHAIN_ID}`
      const res = await fetch(url, { headers: { accept: "application/json" } })
      if (!res.ok) return { ...base, label: "unknown" as const, reason: `http_${res.status}` }
      const j = (await res.json()) as {
        honeypotResult?: { isHoneypot?: boolean; honeypotReason?: string }
        simulationResult?: { buyTax?: number; sellTax?: number }
        simulationSuccess?: boolean
      }
      const hr = j.honeypotResult
      const sim = j.simulationResult
      const sellTax = typeof sim?.sellTax === "number" ? sim.sellTax : null
      const buyTax = typeof sim?.buyTax === "number" ? sim.buyTax : null
      if (hr?.isHoneypot === true) {
        return { ...base, label: "bad" as const, isHoneypot: true, sellTaxPct: sellTax, buyTaxPct: buyTax, reason: hr.honeypotReason || "honeypot" }
      }
      if (sellTax !== null && sellTax >= 90) {
        return { ...base, label: "bad" as const, isHoneypot: false, sellTaxPct: sellTax, buyTaxPct: buyTax, reason: "extreme_sell_tax" }
      }
      if (j.simulationSuccess === true && hr?.isHoneypot === false) {
        return { ...base, label: "good" as const, isHoneypot: false, sellTaxPct: sellTax, buyTaxPct: buyTax, reason: "sellable" }
      }
      return { ...base, label: "unknown" as const, reason: "inconclusive" }
    } catch (e) {
      return { ...base, label: "unknown" as const, reason: (e as Error).message }
    }
  })
}
