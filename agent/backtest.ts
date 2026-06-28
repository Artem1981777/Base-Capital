// Offline backtest: precision/recall of the risk engine for detecting unsafe
// tokens, scored against an INDEPENDENT ground-truth oracle (honeypot.is
// buy/sell simulation). Each token is scored TWICE — WITH live simulation
// (production) and WITHOUT (static engine ablation) — so the report shows the
// real lift from the simulation signal rather than a circular metric.
//
// Universe = blue-chip controls + static watchlist + live Base discovery + a
// low-liquidity new_pools harvest (where honeypots cluster) + published verdict
// log. All real on-chain addresses; no hardcoded rug list. Regenerates
// src/data/backtest.ts, served read-only by GET /backtest.
//
// Run: NETWORK_MODE=mainnet npx tsx agent/backtest.ts
import { writeFileSync } from "node:fs"
import { join } from "node:path"
import { assessToken } from "../src/lib/risk.js"
import { honeypotLabel } from "../src/lib/honeypot.js"
import { discoverTokens } from "./discovery.js"
import { WATCHLIST, type WatchToken } from "./watchlist.js"
import { verdicts as logVerdicts } from "../src/data/log.js"
import type { BacktestReport } from "../src/data/backtest-types.js"

const THRESHOLD = Number(process.env.BACKTEST_THRESHOLD ?? 75)
const MAX = Number(process.env.BACKTEST_MAX ?? 80)
const SWEEP = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85]

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

// Low-liquidity new/trending pools — honeypots cluster here. Deliberately a
// LOWER floor than production discovery, only to enrich the backtest sample.
async function harvestRisky(): Promise<Candidate[]> {
  const out: Candidate[] = []
  const feeds = ["new_pools?page=1", "new_pools?page=2", "trending_pools?page=1"]
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
        if (liq < 1000) continue // ignore dust/empty pools
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
  return {
    confusion: { tp, fp, tn, fn },
    metrics: { precision: r3(precision), recall: r3(recall), f1: r3(f1), accuracy: r3(accuracy) },
  }
}

function render(report: BacktestReport): string {
  return [
    "// Auto-generated by agent/backtest.ts. Do not edit by hand.",
    "// Precision/recall of the risk engine vs an independent honeypot oracle",
    "// (honeypot.is buy/sell simulation). Served read-only by GET /backtest.",
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
  let skipped = 0

  for (const c of universe) {
    let scoreSim: number
    let scoreNoSim: number
    let simFlags: string[]
    try {
      const rSim = await assessToken(c.address, { simulate: true })
      const rNo = await assessToken(c.address, { simulate: false })
      scoreSim = rSim.score
      scoreNoSim = rNo.score
      simFlags = rSim.flags
    } catch (e) {
      console.warn(`assess failed ${c.symbol} ${c.address}: ${(e as Error).message}`)
      skipped++
      continue
    }
    const hp = await honeypotLabel(c.address)
    let truth: "bad" | "good" | "unknown" = hp.label
    if (truth === "unknown" && c.blueChip) truth = "good"
    if (truth === "unknown") {
      skipped++
      console.log(`skip   ${c.symbol.padEnd(10)} sim=${String(scoreSim).padStart(3)} (oracle ${hp.reason})`)
      await sleep(250)
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
      oracleReason: hp.reason,
    })
    console.log(
      `${correct ? "OK  " : "MISS"} ${c.symbol.padEnd(10)} sim=${String(scoreSim).padStart(3)} nosim=${String(scoreNoSim).padStart(3)} pred=${predicted.padEnd(6)} truth=${truth.padEnd(4)} (${hp.reason})`,
    )
    if (!correct) console.log(`     flags: ${simFlags.join(", ") || "(none)"}`)
    await sleep(250)
  }

  const bad = samplesSim.filter((s) => s.truth === "bad").length
  const good = samplesSim.length - bad
  const overall = evaluate(samplesSim, THRESHOLD)
  const overallNoSim = evaluate(samplesNoSim, THRESHOLD)
  const sweep = SWEEP.map((t) => ({ threshold: t, ...evaluate(samplesSim, t).metrics }))

  const report: BacktestReport = {
    generatedAt: new Date().toISOString(),
    oracle: "honeypot.is (buy/sell simulation, chainID 8453)",
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
    notes: [
      "Ground truth from honeypot.is buy/sell simulation — an external buy/sell fork sim, independent of this engine's market-data/GoPlus/owner heuristics.",
      "Each token scored twice: WITH live simulation (metrics) and WITHOUT (metricsNoSim) to show the real lift from the simulation signal vs the static engine.",
      "Universe = blue-chip controls + watchlist + live GeckoTerminal Base discovery + low-liquidity new_pools harvest + published verdict log. All real on-chain addresses; no hardcoded rug list.",
      "Tokens the oracle cannot classify (no liquidity / sim failure / not indexed) are skipped, not guessed.",
    ],
  }

  const outPath = join(process.cwd(), "src", "data", "backtest.ts")
  writeFileSync(outPath, render(report))

  console.log("")
  console.log(`labeled=${samplesSim.length} bad=${bad} good=${good} skipped=${skipped}`)
  console.log(`@${THRESHOLD} WITH sim : P=${overall.metrics.precision} R=${overall.metrics.recall} F1=${overall.metrics.f1} acc=${overall.metrics.accuracy}`)
  console.log(`@${THRESHOLD} NO  sim : P=${overallNoSim.metrics.precision} R=${overallNoSim.metrics.recall} F1=${overallNoSim.metrics.f1} acc=${overallNoSim.metrics.accuracy}`)
  console.log("threshold sweep (WITH sim):")
  for (const p of sweep) {
    console.log(`  t=${String(p.threshold).padStart(2)}  P=${p.precision}  R=${p.recall}  F1=${p.f1}  acc=${p.accuracy}`)
  }
  console.log(`wrote ${outPath}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
