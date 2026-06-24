// Turns a raw RiskResult into an auditable agent verdict with a SHA256 hash
// over its inputs, so every published call is independently verifiable.
import { createHash } from "node:crypto"
import type { RiskResult } from "./risk.js"

export type Verdict = "SAFE" | "RISKY" | "LIKELY_RUG"

export type AgentVerdict = {
	id: string
	ts: string
	symbol: string
	token: string
	score: number
	rating: string
	verdict: Verdict
	confidence: number
	flags: string[]
	liquidityUsd: number
	hash: string
}

export function classify(score: number): Verdict {
	if (score >= 75) return "SAFE"
	if (score >= 40) return "RISKY"
	return "LIKELY_RUG"
}

export function toVerdict(symbol: string, r: RiskResult): AgentVerdict {
	// Conviction = distance from the 50 midpoint, normalised to 0..1.
	const confidence = Math.round((Math.abs(r.score - 50) / 50) * 100) / 100
	const payload = JSON.stringify({
		token: r.token,
		score: r.score,
		flags: r.flags,
		ts: r.generatedAt,
	})
	const hash = createHash("sha256").update(payload).digest("hex")
	return {
		id: hash.slice(0, 12),
		ts: r.generatedAt,
		symbol,
		token: r.token,
		score: r.score,
		rating: r.rating,
		verdict: classify(r.score),
		confidence,
		flags: r.flags,
		liquidityUsd: r.data.liquidityUsd,
		hash,
	}
}
