// GoPlus Security — Token Security API (keyless, free tier).
// Docs: https://docs.gopluslabs.io/reference/tokensecurityusingget_1
//
// Covers Base mainnet (chain_id 8453). Returns null on testnet or on ANY error
// so risk scoring always degrades gracefully and never throws on GoPlus
// downtime. No API key required.
import { cached } from "./cache.js"
import { fetchJson } from "./http.js"
import { config } from "../config.js"

const BASE_URL = "https://api.gopluslabs.io/api/v1/token_security"
const BASE_CHAIN_ID = "8453" // Base mainnet

export type GoPlusSecurity = {
  isHoneypot: boolean
  cannotSellAll: boolean
  cannotBuy: boolean
  buyTaxPct: number
  sellTaxPct: number
  isMintable: boolean
  transferPausable: boolean
  isBlacklisted: boolean
  hiddenOwner: boolean
  selfdestruct: boolean
  ownerChangeBalance: boolean
  canTakeBackOwnership: boolean
  slippageModifiable: boolean
  externalCall: boolean
  isOpenSource: boolean | null
  ownerAddress: string | null
  holderCount: number | null
  topHolderPct: number | null
  top1HolderPct: number | null
  source: "goplus"
}

const DEAD = new Set([
  "",
  "0x0000000000000000000000000000000000000000",
  "0x000000000000000000000000000000000000dead",
])

// GoPlus encodes booleans as the strings "1" / "0" (or omits the key entirely).
function one(v: unknown): boolean {
  return v === "1"
}

// Taxes come back as decimal-fraction strings, e.g. "0.1" => 10%.
function pct(v: unknown): number {
  const n = typeof v === "string" && v !== "" ? Number(v) : 0
  return Number.isFinite(n) ? Math.round(n * 100 * 100) / 100 : 0
}

// Holder concentration from GoPlus' top-holder list. Returns the summed share
// of non-locked, non-burn top holders (0..1) and the single largest holder's
// share. Locked and burn/dead balances are excluded so liquidity locks don't
// look like whale concentration.
function holderConcentration(r: Record<string, unknown>): {
  top: number | null
  top1: number | null
} {
  const holders = Array.isArray((r as { holders?: unknown }).holders)
    ? ((r as { holders: unknown[] }).holders as Array<Record<string, unknown>>)
    : null
  if (!holders) return { top: null, top1: null }
  let sum = 0
  let max = 0
  for (const h of holders) {
    if (!h || typeof h !== "object") continue
    if (h.is_locked === "1" || h.is_locked === 1) continue
    const addr =
      typeof h.address === "string" ? h.address.toLowerCase() : ""
    if (DEAD.has(addr)) continue
    const p =
      typeof h.percent === "string" && h.percent !== ""
        ? Number(h.percent)
        : 0
    if (!Number.isFinite(p)) continue
    sum += p
    if (p > max) max = p
  }
  const clamp = (x: number) => Math.min(1, Math.max(0, x))
  return { top: clamp(sum), top1: clamp(max) }
}

export async function getTokenSecurity(
  token: string,
): Promise<GoPlusSecurity | null> {
  // GoPlus token security only covers mainnets; skip on Base Sepolia so the
  // testnet build keeps working without false "unknown" penalties.
  if (!config.isMainnet) return null
  const addr = token.toLowerCase()
  // Security data changes slowly; cache longer than the 60s risk cache to stay
  // comfortably under the free rate limit.
  return cached(`goplus:${addr}`, 5 * 60_000, async () => {
    try {
      const url = `${BASE_URL}/${BASE_CHAIN_ID}?contract_addresses=${addr}`
      const json = await fetchJson<{
        code?: number
        result?: Record<string, Record<string, unknown>>
      }>(url)
      // Result is keyed by the lowercased contract address.
      const r = json.result?.[addr]
      if (!r || Object.keys(r).length === 0) return null
      const ownerAddress =
        typeof r.owner_address === "string" ? r.owner_address : null
      const conc = holderConcentration(r)
      return {
        isHoneypot: one(r.is_honeypot),
        cannotSellAll: one(r.cannot_sell_all),
        cannotBuy: one(r.cannot_buy),
        buyTaxPct: pct(r.buy_tax),
        sellTaxPct: pct(r.sell_tax),
        isMintable: one(r.is_mintable),
        transferPausable: one(r.transfer_pausable),
        isBlacklisted: one(r.is_blacklisted),
        hiddenOwner: one(r.hidden_owner),
        selfdestruct: one(r.selfdestruct),
        ownerChangeBalance: one(r.owner_change_balance),
        canTakeBackOwnership: one(r.can_take_back_ownership),
        slippageModifiable: one(r.slippage_modifiable),
        externalCall: one(r.external_call),
        isOpenSource:
          r.is_open_source === undefined || r.is_open_source === ""
            ? null
            : one(r.is_open_source),
        ownerAddress,
        holderCount:
          typeof r.holder_count === "string" && r.holder_count !== ""
            ? Number(r.holder_count)
            : null,
        topHolderPct: conc.top,
        top1HolderPct: conc.top1,
        source: "goplus" as const,
      }
    } catch {
      return null
    }
  })
}

// Resolve renounced ownership from GoPlus' owner_address when present.
export function ownerRenouncedFromGoplus(
  sec: GoPlusSecurity | null,
): boolean | null {
  if (!sec || sec.ownerAddress === null) return null
  return DEAD.has(sec.ownerAddress.toLowerCase())
}
