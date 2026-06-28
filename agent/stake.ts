// Autonomous on-chain staking pass for the risk agent.
//
// 1. Commits fresh verdicts on-chain (USDC skin-in-the-game) — capped per run.
// 2. Resolves matured pending verdicts with a DETERMINISTIC, verifiable rule:
//      SAFE  verdict -> correct iff (no hard-rug signal) AND score >= 75
//      RISKY/RUG     -> correct iff (hard-rug signal) OR score < 75
//    where hard-rug = honeypot | cannot_sell_all | cannot_buy.
//    A proofHash (keccak256 of the canonical maturity-time snapshot) is
//    committed on-chain and the full snapshot is printed to the public CI log,
//    so every resolution is independently reproducible.
//    Correct -> stake returned; Wrong -> stake slashed to treasury.
//
// Runs in the scheduled "Stake" GitHub Actions job with DEPLOYER_PRIVATE_KEY.
import { config } from "../src/config.js"
import { assessToken } from "../src/lib/risk.js"
import { classify } from "../src/lib/verdict.js"
import { verdicts as logVerdicts } from "../src/data/log.js"
import {
  commitVerdict,
  ensureAllowance,
  getVerdict,
  hasContract,
  listVerdictIds,
  readAgentStats,
  resolveVerdict,
  usdcBalance,
  usdToUnits,
  VerdictStatus,
} from "../src/lib/stake.js"
import { keccak256, toBytes, type Hex } from "viem"

const RATING: Record<string, number> = { SAFE: 0, RISKY: 1, LIKELY_RUG: 2 }
const HARD_RUG_FLAGS = ["honeypot", "cannot_sell_all", "cannot_buy", "sim_honeypot", "sim_extreme_sell_tax"]

function idHex(hash: string): Hex {
  return (hash.startsWith("0x") ? hash : `0x${hash}`) as Hex
}

async function commitFresh(stakeUnits: bigint): Promise<number> {
  let committed = 0
  const bal = await usdcBalance()
  if (bal < stakeUnits) {
    console.log(
      `skip commit: USDC balance ${Number(bal) / 1e6} < stake ${Number(stakeUnits) / 1e6}`,
    )
    return 0
  }
  await ensureAllowance(stakeUnits * BigInt(config.maxCommitsPerRun))
  for (const v of logVerdicts) {
    if (committed >= config.maxCommitsPerRun) break
    const id = idHex(v.hash)
    const rating = RATING[v.verdict]
    if (rating === undefined) continue
    try {
      const existing = await getVerdict(id)
      if (existing.status !== VerdictStatus.None) continue // already committed
      const hash = await commitVerdict(id, v.token, rating, stakeUnits)
      committed++
      console.log(
        `committed ${v.symbol} ${v.verdict} stake $${config.agentStakeUsd} id ${id.slice(0, 10)} tx ${hash}`,
      )
    } catch (e) {
      console.error(`commit failed ${v.symbol}:`, (e as Error).message)
    }
  }
  return committed
}

async function resolveMatured(): Promise<number> {
  let resolved = 0
  const nowSec = Math.floor(Date.now() / 1000)
  const minAgeSec = config.resolveAfterMinutes * 60
  const ids = await listVerdictIds()
  for (const id of ids) {
    if (resolved >= config.maxResolvesPerRun) break
    let v
    try {
      v = await getVerdict(id)
    } catch (e) {
      console.error(
        `skip ${id.slice(0, 10)} (read failed):`,
        (e as Error).message,
      )
      continue
    }
    if (v.status !== VerdictStatus.Pending) continue
    if (nowSec - v.committedAt < minAgeSec) continue
    try {
      const r = await assessToken(v.token)
      const hardRug = HARD_RUG_FLAGS.some((f) => r.flags.includes(f))
      const saidSafe = v.rating === 0
      // Deterministic resolution rule (see file header).
      const correct = saidSafe
        ? !hardRug && r.score >= 75
        : hardRug || r.score < 75

      // Canonical, reproducible snapshot of the inputs the decision used.
      // keccak256(snapshot) is committed on-chain; the full JSON is logged
      // publicly so anyone can recompute and verify the hash.
      const snapshot = {
        v: 1,
        id,
        token: v.token.toLowerCase(),
        rating: v.rating,
        committedAt: v.committedAt,
        resolvedScore: r.score,
        hardRug,
        liquidityUsd: r.data.liquidityUsd,
        priceUsd: r.data.priceUsd,
        ownerRenounced: r.data.ownerRenounced,
        topHolderPct: r.data.security.topHolderPct,
        flags: [...r.flags].sort(),
        rule:
          "SAFE:correct=!hardRug&&score>=75 | RISKY|RUG:correct=hardRug||score<75",
        decision: correct ? "CORRECT" : "WRONG",
      }
      const canonical = JSON.stringify(snapshot)
      const proofHash = keccak256(toBytes(canonical))
      console.log(`proof ${id.slice(0, 10)} ${proofHash} :: ${canonical}`)

      const hash = await resolveVerdict(id, correct, proofHash)
      resolved++
      console.log(
        `resolved ${id.slice(0, 10)} rating ${v.rating} -> ${correct ? "CORRECT" : "WRONG"} (now ${classify(r.score)}/${r.score}) tx ${hash}`,
      )
    } catch (e) {
      console.error(`resolve failed ${id.slice(0, 10)}:`, (e as Error).message)
    }
  }
  return resolved
}

async function main() {
  if (!config.isMainnet) {
    console.log("not mainnet — staking disabled")
    return
  }
  if (!hasContract()) {
    console.log("RISKSTAKE_ADDRESS not configured — nothing to do")
    return
  }
  if (!config.agentPrivateKey) {
    console.error("DEPLOYER_PRIVATE_KEY not set — cannot stake")
    process.exit(1)
  }
  const stakeUnits = usdToUnits(config.agentStakeUsd)
  console.log(
    `stake run: contract ${config.riskStakeAddress} agent ${config.agentAddress} stake $${config.agentStakeUsd}`,
  )
  const resolved = await resolveMatured()
  const committed = await commitFresh(stakeUnits)
  const s = await readAgentStats()
  console.log(
    `done: +${committed} committed, ${resolved} resolved | on-chain: ${s.totalVerdicts} verdicts, $${s.totalStakedUsd} staked, ${s.correct}/${s.correct + s.wrong} correct, accuracy ${(s.accuracyBps / 100).toFixed(2)}%, at-risk $${s.totalAtRiskUsd}, slash-rate ${(s.slashRateBps / 100).toFixed(2)}%`,
  )
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
