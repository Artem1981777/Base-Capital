// Autonomous on-chain staking pass for the risk agent.
//
// 1. Commits fresh verdicts on-chain (USDC skin-in-the-game) — capped per run.
// 2. Resolves matured pending verdicts by re-assessing the token:
//      SAFE  verdict  -> correct if the token still scores >= 75
//      RISKY/RUG verdict -> correct if the token has since degraded (< 75)
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
import type { Hex } from "viem"

const RATING: Record<string, number> = { SAFE: 0, RISKY: 1, LIKELY_RUG: 2 }

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
		const v = await getVerdict(id)
		if (v.status !== VerdictStatus.Pending) continue
		if (nowSec - v.committedAt < minAgeSec) continue
		try {
			const r = await assessToken(v.token)
			const nowVerdict = classify(r.score)
			const saidSafe = v.rating === 0
			const stillSafe = nowVerdict === "SAFE"
			const correct = saidSafe ? stillSafe : !stillSafe
			const hash = await resolveVerdict(id, correct)
			resolved++
			console.log(
				`resolved ${id.slice(0, 10)} rating ${v.rating} -> ${correct ? "CORRECT" : "WRONG"} (now ${nowVerdict}/${r.score}) tx ${hash}`,
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
		`done: +${committed} committed, ${resolved} resolved | on-chain: ${s.totalVerdicts} verdicts, $${s.totalStakedUsd} staked, ${s.correct}/${s.correct + s.wrong} correct, accuracy ${(s.accuracyBps / 100).toFixed(2)}%`,
	)
}

main().catch((e) => {
	console.error(e)
	process.exit(1)
})
