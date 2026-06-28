// Risk scoring: combine DexScreener market data + on-chain reads + GoPlus
// contract-security signals + an optional live honeypot SIMULATION into a
// 0-100 safety score. Higher = safer. Heuristic, not a buy/sell guarantee.
import { bestPair, getBasePairs } from "./dexscreener.js"
import { getOwner, getTotalSupply, validateAddress } from "./onchain.js"
import {
  getTokenSecurity,
  ownerRenouncedFromGoplus,
  type GoPlusSecurity,
} from "./goplus.js"
import { honeypotLabel, type HoneypotLabel } from "./honeypot.js"
import { cached } from "./cache.js"

const DEAD_ADDRESSES = new Set([
  "0x0000000000000000000000000000000000000000",
  "0x000000000000000000000000000000000000dead",
])

// Live buy/sell simulation (honeypot.is) is independent of the static GoPlus
// checks and catches honeypots GoPlus misses. On by default; disable with
// HONEYPOT_SIM=false. Per-call override via assessToken(token, { simulate }).
const SIM_ENABLED =
  (process.env.HONEYPOT_SIM ?? "true").toLowerCase() !== "false"

export type RiskRating = "low" | "medium" | "high" | "critical"

export type SecuritySummary = {
  source: "goplus" | "unavailable"
  isHoneypot: boolean | null
  buyTaxPct: number | null
  sellTaxPct: number | null
  isMintable: boolean | null
  transferPausable: boolean | null
  isOpenSource: boolean | null
  holderCount: number | null
  topHolderPct: number | null
  top1HolderPct: number | null
}

export type SimulationSummary = {
  source: "honeypot.is" | "disabled"
  label: HoneypotLabel
  reason: string
}

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
    security: SecuritySummary
    simulation: SimulationSummary
  }
  disclaimer: string
  generatedAt: string
}

// Hard rug signals from GoPlus — heavy penalties. These are the patterns that
// actually drain buyers (can't sell, punitive taxes, owner can mint/seize).
function applyHardSecurityFlags(s: GoPlusSecurity, flags: string[]): number {
  let d = 0
  if (s.isHoneypot) {
    flags.push("honeypot")
    d += 60
  }
  if (s.cannotSellAll) {
    flags.push("cannot_sell_all")
    d += 45
  }
  if (s.cannotBuy) {
    flags.push("cannot_buy")
    d += 25
  }
  if (s.sellTaxPct > 50) {
    flags.push("extreme_sell_tax")
    d += 45
  } else if (s.sellTaxPct >= 15) {
    flags.push("high_sell_tax")
    d += 25
  } else if (s.sellTaxPct >= 10) {
    flags.push("elevated_sell_tax")
    d += 12
  }
  if (s.buyTaxPct > 50) {
    flags.push("extreme_buy_tax")
    d += 25
  } else if (s.buyTaxPct >= 10) {
    flags.push("high_buy_tax")
    d += 10
  }
  if (s.hiddenOwner) {
    flags.push("hidden_owner")
    d += 25
  }
  if (s.selfdestruct) {
    flags.push("selfdestruct")
    d += 25
  }
  if (s.ownerChangeBalance) {
    flags.push("owner_can_change_balance")
    d += 30
  }
  if (s.canTakeBackOwnership) {
    flags.push("ownership_reclaimable")
    d += 15
  }
  if (s.slippageModifiable) {
    flags.push("modifiable_tax")
    d += 10
  }
  if (s.externalCall) {
    flags.push("external_call")
    d += 8
  }
  if (s.isOpenSource === false) {
    flags.push("not_open_source")
    d += 20
  }
  return d
}

function summarize(s: GoPlusSecurity | null): SecuritySummary {
  if (!s) {
    return {
      source: "unavailable",
      isHoneypot: null,
      buyTaxPct: null,
      sellTaxPct: null,
      isMintable: null,
      transferPausable: null,
      isOpenSource: null,
      holderCount: null,
      topHolderPct: null,
      top1HolderPct: null,
    }
  }
  return {
    source: "goplus",
    isHoneypot: s.isHoneypot,
    buyTaxPct: s.buyTaxPct,
    sellTaxPct: s.sellTaxPct,
    isMintable: s.isMintable,
    transferPausable: s.transferPausable,
    isOpenSource: s.isOpenSource,
    holderCount: s.holderCount,
    topHolderPct: s.topHolderPct,
    top1HolderPct: s.top1HolderPct,
  }
}

export async function assessToken(
  tokenRaw: string,
  opts?: { simulate?: boolean },
): Promise<RiskResult> {
  const token = validateAddress(tokenRaw)
  const simulate = opts?.simulate ?? SIM_ENABLED
  return cached(
    `risk:${token.toLowerCase()}:${simulate ? "sim" : "nosim"}`,
    60_000,
    async () => {
      const [pairs, owner, totalSupply, sec, sim] = await Promise.all([
        getBasePairs(token),
        getOwner(token),
        getTotalSupply(token),
        getTokenSecurity(token),
        simulate ? honeypotLabel(token) : Promise.resolve(null),
      ])
      const pair = bestPair(pairs)

      const flags: string[] = []
      let score = 100

      // --- Market structure (DexScreener) ---
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

      // --- Contract security (GoPlus, mainnet only) ---
      if (sec) {
        score -= applyHardSecurityFlags(sec, flags)
      } else {
        flags.push("security_check_unavailable")
      }

      // Ownership: prefer GoPlus' resolved owner, fall back to a direct owner()
      // read against the contract.
      const goplusRenounced = ownerRenouncedFromGoplus(sec)
      const ownerRenounced =
        goplusRenounced !== null
          ? goplusRenounced
          : owner
            ? DEAD_ADDRESSES.has(owner.toLowerCase())
            : null

      // Centralization signals: real risks, but blue-chips legitimately have
      // admin keys. Flag transparently but cap the combined penalty.
      let central = 0
      if (sec?.isMintable) {
        flags.push("mintable")
        central++
      }
      if (sec?.transferPausable) {
        flags.push("pausable")
        central++
      }
      if (sec?.isBlacklisted) {
        flags.push("has_blacklist")
        central++
      }
      if (ownerRenounced === false) {
        flags.push("owner_not_renounced")
        central++
      }
      score -= Math.min(central * 4, 12)

      // Holder concentration (softened — these are soft signals; a handful of
      // wallets can dump, but liquid/established tokens often have staking or
      // protocol-owned supply that looks concentrated).
      if (sec?.topHolderPct != null) {
        const p = sec.topHolderPct
        if (p >= 0.8) {
          flags.push("extreme_holder_concentration")
          score -= 12
        } else if (p >= 0.6) {
          flags.push("high_holder_concentration")
          score -= 8
        } else if (p >= 0.4) {
          flags.push("elevated_holder_concentration")
          score -= 4
        }
      }

      // --- Live buy/sell simulation (honeypot.is): HARD signal ---
      // Catches honeypots the static GoPlus checks miss. Never penalizes on
      // "unknown" (404 / not indexed / sim failure) so it degrades gracefully.
      if (sim && sim.label === "bad") {
        flags.push(
          sim.reason === "extreme_sell_tax" ? "sim_extreme_sell_tax" : "sim_honeypot",
        )
        score -= 70
      }

      // A token our live simulation just successfully sold is empirically
      // sellable: never issue a slashing-grade LIKELY_RUG verdict on it.
      // Floor at the RISKY boundary so static/theoretical flags alone cannot
      // force a rug call (protects staked capital from wrong slashes).
      if (sim && sim.label === "good") {
        score = Math.max(score, 40)
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

      const simulation: SimulationSummary = simulate
        ? {
            source: "honeypot.is",
            label: sim ? sim.label : "unknown",
            reason: sim ? sim.reason : "unavailable",
          }
        : { source: "disabled", label: "unknown", reason: "simulation_disabled" }

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
          owner: sec?.ownerAddress ?? owner,
          ownerRenounced,
          totalSupply: totalSupply?.toString() ?? null,
          dex: pair?.dexId ?? null,
          pairAddress: pair?.pairAddress ?? null,
          security: summarize(sec),
          simulation,
        },
        disclaimer:
          "Heuristic score combining DexScreener market data, on-chain reads, GoPlus contract-security signals and a live honeypot.is buy/sell simulation. Not a buy/sell guarantee — always do your own research.",
        generatedAt: new Date().toISOString(),
      }
    },
  )
}
