// Offline backtest v4: precision/recall of the risk engine for detecting unsafe
// tokens, scored against MULTIPLE INDEPENDENT ground-truth oracles and reported
// with explicit class sizes and Wilson 95% confidence intervals.
//
// Ground truth = consensus of three signals, none reusing this engine's score:
//   1. honeypot.is buy/sell fork-simulation (bad/good/unknown)
//   2. GoPlus contract-security hard-rug flags (honeypot / cannot-sell /
//      cannot-buy / >=90% tax)
//   3. post-hoc liquidity DRAIN: a token that had real liquidity when logged
//      but whose pool is now empty - a retrospective T+N rug confirmation, the
//      closest honest approximation to walk-forward without an archival feed.
// Inter-oracle agreement (honeypot.is vs GoPlus) is reported as Cohen's kappa.
//
// Run: NETWORK_MODE=mainnet npx tsx agent/backtest.ts
import { writeFileSync } from "node:fs"
import { join } from "node:path"
import { assessToken } from "../src/lib/risk.js"
import { honeypotLabel } from "../src/lib/honeypot.js"
import { getTokenSecurity } from "../src/lib/goplus.js"
import { discoverTokens } from "./discovery.js"
import { WATCHLIST, type WatchToken } from "./watchlist.js"
import { verdicts as logVerdicts } from "../src/data/log.js"
import type {
  BacktestReport,
  BacktestMetrics,
  OracleAgreement,
} from "../src/data/backtest-types.js"

const THRESHOLD = Number(process.env.BACKTEST_THRESHOLD ?? 75)
const MAX = Number(process.env.BACKTEST_MAX ?? 300)
const SWEEP = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85]
const SLEEP_MS = Number(process.env.BACKTEST_SLEEP_MS ?? 300)
const DRAIN_PRIOR = 50_000
const DRAIN_FLOOR = 500

const GT = "https://" + "api.geckoterminal" + ".com" + "/api/v2"
const QUOTE_DENYLIST = new Set([
  "0x4200000000000000000000000000000000000006",
  "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
  "0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
])

const BLUE_CHIPS: WatchToken[] = [
  { symbol: "WETH", address: "0x4200000000000000000000000000000000000006" },
  { symbol: "USDC", address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" },
  { symbol: "cbBTC", address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf" },
  { symbol: "AERO", address: "0x940181a94A35A4569E4529A3CDfB74e38FD98631" },
  { symbol: "DEGEN", address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed" },
  { symbol: "BRETT", address: "0x532f27101965dd16442E59d40670FaF5eBB142E4" },
]

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

type Candidate = { symbol: string; address: string; blueChip: boolean }

function dedupe(cands: Candidate[]): Candidate[] {
  const seen = new Set<string>()
  const out: Candidate[] = []
  for (const c of cands) {
    const a = c.address.toLowerCase()
    if (!/^0x[a-f0-9]{40}$/.test(a) || seen.has(a) || QUOTE_DENYLIST.has(a)) continue
    seen.add(a)
    out.push({ symbol: c.symbol, address: a, blueChip: c.blueChip })
  }
  return out
}

const loggedLiquidity = new Map<string, number>()
for (const v of logVerdicts) {
  const a = v.token.toLowerCase()
  const prev = loggedLiquidity.get(a) ?? 0
  if (v.liquidityUsd > prev) loggedLiquidity.set(a, v.liquidityUsd)
}

async function harvestRisky(): Promise<Candidate[]> {
  const out: Candidate[] = []
  const feeds = [
    "new_pools?page=1",
    "new_pools?page=2",
    "new_pools?page=3",
    "new_pools?page=4",
    "trending_pools?page=1",
    "trending_pools?page=2",
  ]
  for (const f of feeds) {
    try {
      const res = await fetch(`${GT}/networks/base/${f}`, {
        headers: { accept: "application/json" },
      })
      if (!res.ok) {
        await sleep(400)
        continue
      }
      const json = (await res.json()) as {
        data?: Array<{
          attributes?: { name?: string; reserve_in_usd?: string }
          relationships?: { base_token?: { data?: { id?: string } } }
        }>
      }
      for (const p of json.data ?? []) {
        const liq = Number(p.attributes?.reserve_in_usd ?? 0)
        if (liq < 500) continue
        const id = p.relationships?.base_token?.data?.id ?? ""
        const addr = (id.includes("_") ? id.slice(id.indexOf("_") + 1) : id).toLowerCase()
        if (!/^0x[a-f0-9]{40}$/.test(addr)) continue
        const name = p.attributes?.name ?? "?"
        const symbol = (name.split("/")[0] ?? "?").trim().split(" ")[0] || "?"
        out.push({ symbol, address: addr, blueChip: false })
      }
    } catch (e) {
      console.warn(`harvest ${f} failed: ${(e as Error).message}`)
    }
    await sleep(400)
  }
  return out
}

async function buildUniverse(): Promise<Candidate[]> {
  let discovered: WatchToken[] = []
  try {
    discovered = await discoverTokens()
  } catch (e) {
    console.warn(`discovery failed: ${(e as Error).message}`)
  }
  const risky = await harvestRisky()
  const cands: Candidate[] = [
    ...BLUE_CHIPS.map((t) => ({ symbol: t.symbol, address: t.address, blueChip: true })),
    ...WATCHLIST.map((t) => ({ symbol: t.symbol, address: t.address, blueChip: false })),
    ...discovered.map((t) => ({ symbol: t.symbol, address: t.address, blueChip: false })),
    ...risky,
    ...logVerdicts.map((v) => ({ symbol: v.symbol, address: v.token, blueChip: false })),
  ]
  return dedupe(cands).slice(0, MAX)
}

type Lab = "bad" | "good" | "unknown"

function goplusLabel(sec: Awaited<ReturnType<typeof getTokenSecurity>>): Lab {
  if (!sec) return "unknown"
  const hardRug =
    sec.isHoneypot ||
    sec.cannotSellAll ||
    sec.cannotBuy ||
    sec.sellTaxPct >= 90 ||
    sec.buyTaxPct >= 90
  return hardRug ? "bad" : "good"
}

function wilson(success: number, n: number): { lo: number; hi: number } {
  if (n === 0) return { lo: 0, hi: 0 }
  const z = 1.96
  const p = success / n
  const z2 = z * z
  const denom = 1 + z2 / n
  const center = p + z2 / (2 * n)
  const margin = z * Math.sqrt((p * (1 - p) + z2 / (4 * n)) / n)
  const clamp = (x: number) => Math.round(Math.min(1, Math.max(0, x)) * 1000) / 1000
  return { lo: clamp((center - margin) / denom), hi: clamp((center + margin) / denom) }
}

function cohensKappa(pairs: Array<{ a: Lab; b: Lab }>): OracleAgreement {
  const defined = pairs.filter((x) => x.a !== "unknown" && x.b !== "unknown")
  const n = defined.length
  let agree = 0
  let aBad = 0
  let bBad = 0
  for (const { a, b } of defined) {
    if (a === b) agree++
    if (a === "bad") aBad++
    if (b === "bad") bBad++
  }
  const po = n === 0 ? 0 : agree / n
  const pBadA = n === 0 ? 0 : aBad / n
  const pBadB = n === 0 ? 0 : bBad / n
  const pe = pBadA * pBadB + (1 - pBadA) * (1 - pBadB)
  const kappa = pe === 1 ? 1 : (po - pe) / (1 - pe)
  const r3 = (x: number) => Math.round(x * 1000) / 1000
  return {
    raters: "honeypot.is vs GoPlus",
    n,
    agree,
    observed: r3(po),
    expected: r3(pe),
    kappa: r3(kappa),
  }
}

type Sample = { score: number; truth: "bad" | "good" }

function evaluate(samples: Sample[], threshold: number) {
  let tp = 0, fp = 0, tn = 0, fn = 0
  for (const s of samples) {
    const predUnsafe = s.score < threshold
    if (s.truth === "bad") {
      if (predUnsafe) tp++
      else fn++
    } else {
      if (predUnsafe) fp++
      else tn++
    }
  }
  const precision = tp + fp === 0 ? 0 : tp / (tp + fp)
  const recall = tp + fn === 0 ? 0 : tp / (tp + fn)
  const f1 = precision + recall === 0 ? 0 : (2 * precision * recall) / (precision + recall)
  const accuracy = samples.length === 0 ? 0 : (tp + tn) / samples.length
  const r3 = (x: number) => Math.round(x * 1000) / 1000
  const metrics: BacktestMetrics = {
    precision: r3(precision),
    recall: r3(recall),
    f1: r3(f1),
    accuracy: r3(accuracy),
  }
  return { confusion: { tp, fp, tn, fn }, metrics }
}

function render(report: BacktestReport): string {
  return [
    "// Auto-generated by agent/backtest.ts. Do not edit by hand.",
    "// Multi-oracle precision/recall of the risk engine with Wilson 95% CIs.",
    "// Served read-only by GET /backtest.",
    'import type { BacktestReport } from "./backtest-types.js"',
    "",
    `export const backtest: BacktestReport = ${JSON.stringify(report, null, 2)}`,
    "",
  ].join("\n")
}

async function main() {
  const universe = await buildUniverse()
  console.log(`universe: ${universe.length} candidate tokens (threshold ${THRESHOLD})`)

  const samplesSim: Sample[] = []
  const samplesNoSim: Sample[] = []
  const rows: BacktestReport["rows"] = []
  const kappaPairs: Array<{ a: Lab; b: Lab }> = []
  let skipped = 0

  for (const c of universe) {
    let scoreSim: number
    let scoreNoSim: number
    let curLiq: number
    try {
      const rSim = await assessToken(c.address, { simulate: true })
      const rNo = await assessToken(c.address, { simulate: false })
      scoreSim = rSim.score
      scoreNoSim = rNo.score
      curLiq = rSim.data.liquidityUsd
    } catch (e) {
      console.warn(`assess failed ${c.symbol} ${c.address}: ${(e as Error).message}`)
      skipped++
      continue
    }

    const hp = await honeypotLabel(c.address)
    const sec = await getTokenSecurity(c.address)
    const hpLab: Lab = hp.label
    const gpLab: Lab = goplusLabel(sec)

    const prior = loggedLiquidity.get(c.address) ?? 0
    const drained = prior >= DRAIN_PRIOR && curLiq < DRAIN_FLOOR

    kappaPairs.push({ a: hpLab, b: gpLab })

    const sources: string[] = []
    if (hpLab === "bad") sources.push("honeypot.is")
    if (gpLab === "bad") sources.push("goplus")
    if (drained) sources.push("liquidity-drain")

    let truth: "bad" | "good" | "unknown"
    if (sources.length > 0) {
      truth = "bad"
    } else if (hpLab === "good" || gpLab === "good" || c.blueChip) {
      truth = "good"
    } else {
      truth = "unknown"
    }

    if (truth === "unknown") {
      skipped++
      await sleep(SLEEP_MS)
      continue
    }

    const predicted: "unsafe" | "safe" = scoreSim < THRESHOLD ? "unsafe" : "safe"
    const correct = (truth === "bad") === (predicted === "unsafe")
    samplesSim.push({ score: scoreSim, truth })
    samplesNoSim.push({ score: scoreNoSim, truth })
    rows.push({
      symbol: c.symbol,
      token: c.address,
      score: scoreSim,
      scoreNoSim,
      predicted,
      truth,
      correct,
      oracleReason: truth === "bad" ? sources.join("+") : hp.reason,
      sources: truth === "bad" ? sources : undefined,
    })
    console.log(
      `${correct ? "OK  " : "MISS"} ${c.symbol.padEnd(10)} sim=${String(scoreSim).padStart(3)} pred=${predicted.padEnd(6)} truth=${truth.padEnd(4)} [${truth === "bad" ? sources.join("+") : hp.reason}]`,
    )
    await sleep(SLEEP_MS)
  }

  const bad = samplesSim.filter((s) => s.truth === "bad").length
  const good = samplesSim.length - bad
  const overall = evaluate(samplesSim, THRESHOLD)
  const overallNoSim = evaluate(samplesNoSim, THRESHOLD)
  const sweep = SWEEP.map((t) => ({ threshold: t, ...evaluate(samplesSim, t).metrics }))
  const agreement = cohensKappa(kappaPairs)
  const cm = overall.confusion
  const precCI = wilson(cm.tp, cm.tp + cm.fp)
  const recCI = wilson(cm.tp, cm.tp + cm.fn)

  const report: BacktestReport = {
    generatedAt: new Date().toISOString(),
    oracle: "consensus: honeypot.is sim + GoPlus security + post-hoc liquidity drain",
    predictionRule: "predict UNSAFE when risk score < threshold, else SAFE",
    threshold: THRESHOLD,
    universe: {
      candidates: universe.length,
      labeled: samplesSim.length,
      bad,
      good,
      skippedUnknown: skipped,
    },
    confusion: overall.confusion,
    metrics: overall.metrics,
    metricsNoSim: overallNoSim.metrics,
    sweep,
    rows,
    positives: bad,
    ci: {
      method: "wilson-95",
      precision: { ...precCI, n: cm.tp + cm.fp },
      recall: { ...recCI, n: cm.tp + cm.fn },
    },
    agreement,
    groundTruthSources: [
      "honeypot.is buy/sell simulation (chainID 8453)",
      "GoPlus token contract security (hard-rug flags)",
      "post-hoc on-chain liquidity drain vs logged liquidity",
    ],
    methodology: [
      `Positive (bad) class size n=${bad}. Read precision/recall together with their Wilson 95% intervals; a metric over a tiny n is not evidence.`,
      "A token is labelled BAD if ANY independent hard source confirms a rug (honeypot, cannot-sell, >=90% tax, or a drained pool), GOOD if the live oracles agree it is sellable and it has not drained, otherwise skipped as unknown rather than guessed.",
      "Liquidity-drain is a retrospective T+N rug confirmation against the liquidity recorded when the token was first logged - the closest honest approximation to walk-forward without an archival point-in-time feed.",
      `Inter-oracle agreement (honeypot.is vs GoPlus) Cohen kappa = ${agreement.kappa} over n=${agreement.n}.`,
      "No hardcoded rug list: every address is harvested live from GeckoTerminal pools, discovery, watchlist and the published verdict log.",
    ],
    notes: [
      "Each token scored twice: WITH live simulation (metrics) and WITHOUT (metricsNoSim) to show the lift from the simulation signal vs the static engine.",
      "Tokens no oracle can classify are skipped, not guessed.",
    ],
  }

  const outPath = join(process.cwd(), "src", "data", "backtest.ts")
  writeFileSync(outPath, render(report))
  const stamp = (report.generatedAt ?? new Date().toISOString()).slice(0, 10)
  const proofPath = join(process.cwd(), "proofs", `backtest-${stamp}.json`)
  writeFileSync(proofPath, JSON.stringify(report, null, 2))

  console.log("")
  console.log(`labeled=${samplesSim.length} bad=${bad} good=${good} skipped=${skipped}`)
  console.log(`@${THRESHOLD} WITH sim : P=${overall.metrics.precision} R=${overall.metrics.recall} F1=${overall.metrics.f1} acc=${overall.metrics.accuracy}`)
  console.log(`precision 95% CI [${precCI.lo}, ${precCI.hi}] over n=${cm.tp + cm.fp}; recall 95% CI [${recCI.lo}, ${recCI.hi}] over n=${cm.tp + cm.fn}`)
  console.log(`kappa(honeypot.is,GoPlus)=${agreement.kappa} over n=${agreement.n}`)
  console.log(`wrote ${outPath} and ${proofPath}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
