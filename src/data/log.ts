import type { AgentVerdict } from "../lib/verdict.js"

export type AgentStats = {
	updatedAt: string
	tokensScored: number
	verdictsIssued: number
	safe: number
	risky: number
	likelyRug: number
	ticks: number
}

// Seeded empty. Regenerated each agent tick (agent/tick.ts) and committed by
// the "Risk Agent" GitHub Actions workflow, which redeploys the site.
export const stats: AgentStats = {
	updatedAt: "",
	tokensScored: 0,
	verdictsIssued: 0,
	safe: 0,
	risky: 0,
	likelyRug: 0,
	ticks: 0,
}

export const verdicts: AgentVerdict[] = []
