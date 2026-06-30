// Autonomous on-chain staking pass for the risk agent (v3).
//
// 1. Commits fresh verdicts on-chain (USDC skin-in-the-game) — capped per run.
// 2. Optimistically PROPOSES resolutions for matured pending verdicts with a
//    DETERMINISTIC, verifiable rule (below). proofHash (keccak256 of the
//    canonical snapshot) + ruleVersion + snapshot pointer are committed
//    on-chain; the full snapshot is printed to the public CI log so every
//    resolution is independently reproducible. Anyone may challenge within the
//    on-chain challenge window by posting a bond.
// 3. FINALIZES proposed verdicts once the window elapses unchallenged:
//    Correct -> stake returned; Wrong -> stake slashed to treasury.
//
// Rule:
//   SAFE      -> correct iff (no hard-rug signal) AND score >= 75
//   RISKY/RUG -> correct iff (hard-rug signal) OR score < 75
//   hard-rug = honeypot | cannot_sell_all | cannot_buy | sim_honeypot | sim_extreme_sell_tax
//
// Runs in the scheduled "Stake" GitHub Actions job with DEPLOYER_PRIVATE_KEY.
import { config } from "../src/config.js"
import { assessToken } from "../src/lib/risk.js"
import { classify } from "../src/lib/verdict.js"
import { verdicts as logVerdicts } from "../src/data/log.js"
import {
  commitVerdict,
  ensureAllowance,
  finalize,
  getPending,
  getVerdict,
  hasContract,
  proposeResolution,
  readAgentStats,
  usdcBalance,
  usdToUnits,
  VerdictStatus,
} from "../src/lib/stake.js"
import { keccak256, toBytes, type Hex } from "viem"

// On-chain rule version bound into every proof snapshot. Bump when the
// resolution logic changes so historical proofs stay attributable.
const RULE_VERSION = 1

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

// Walk the O(1) pending index: PROPOSE matured Pending verdicts and FINALIZE
// Proposed verdicts whose challenge window has closed. Challenged verdicts are
// left for the owner/arbiter (resolveChallenge), never auto-handled here.
async function processPending(): Promise<{ proposed: number; finalized: number }> {
  let proposed = 0
  let finalized = 0
  const nowSec = Math.floor(Date.now() / 1000)
  const minAgeSec = config.resolveAfterMinutes * 60
  let ids: Hex[]
  try {
    ids = await getPending(0n, 200n)
  } catch (e) {
    console.error("getPending failed:", (e as Error).message)
    return { proposed, finalized }
  }
  for (const id of ids) {
    if (proposed >= config.maxResolvesPerRun && finalized >= config.maxResolvesPerRun) break
    let v
    try {
      v = await getVerdict(id)
    } catch (e) {
      console.error(`skip ${id.slice(0, 10)} (read failed):`, (e as Error).message)
      continue
    }

    if (v.status === VerdictStatus.Proposed) {
      if (finalized >= config.maxResolvesPerRun) continue
      if (nowSec <= v.challengeDeadline) continue
      try {
        const hash = await finalize(id)
        finalized++
        console.log(
          `finalized ${id.slice(0, 10)} -> ${v.proposedCorrect ? "CORRECT" : "WRONG"} tx ${hash}`,
        )
      } catch (e) {
        console.error(`finalize failed ${id.slice(0, 10)}:`, (e as Error).message)
      }
      continue
    }

    if (v.status !== VerdictStatus.Pending) continue
    if (proposed >= config.maxResolvesPerRun) continue
    if (nowSec - v.committedAt < minAgeSec) continue
    try {
      const r = await assessToken(v.token)
      const hardRug = HARD_RUG_FLAGS.some((f) => r.flags.includes(f))
      const saidSafe = v.rating === 0
      const correct = saidSafe ? !hardRug && r.score >= 75 : hardRug || r.score < 75

      const snapshot = {
        v: RULE_VERSION,
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
      const snapshotURI = `proof:${proofHash}`
      console.log(`proof ${id.slice(0, 10)} ${proofHash} :: ${canonical}`)

      const hash = await proposeResolution(id, correct, proofHash, RULE_VERSION, snapshotURI)
      proposed++
      console.log(
        `proposed ${id.slice(0, 10)} rating ${v.rating} -> ${correct ? "CORRECT" : "WRONG"} (now ${classify(r.score)}/${r.score}) tx ${hash}`,
      )
    } catch (e) {
      console.error(`propose failed ${id.slice(0, 10)}:`, (e as Error).message)
    }
  }
  return { proposed, finalized }
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
    `stake run: contract ${config.riskStakeAddress} agent ${config.agentAddress} (id ${config.agentId}) stake $${config.agentStakeUsd}`,
  )
  const { proposed, finalized } = await processPending()
  const committed = await commitFresh(stakeUnits)
  const s = await readAgentStats()
  console.log(
    `done: +${committed} committed, ${proposed} proposed, ${finalized} finalized | on-chain: ${s.totalVerdicts} verdicts, $${s.totalStakedUsd} staked, ${s.correct}/${s.correct + s.wrong} correct, accuracy ${(s.accuracyBps / 100).toFixed(2)}%, at-risk $${s.totalAtRiskUsd}, slash-rate ${(s.slashRateBps / 100).toFixed(2)}%, identity-age ${Math.floor(s.identityAgeSeconds / 86400)}d`,
  )
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
