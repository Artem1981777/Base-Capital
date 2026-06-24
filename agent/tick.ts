// Autonomous risk-agent tick. Run on a schedule (GitHub Actions cron).
// Scores every watchlist token, appends fresh verdicts to the auditable log,
// updates cumulative stats, and regenerates src/data/log.ts. The CI job then
// commits the file, which redeploys the site with fresh data.
import { writeFileSync, mkdirSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { WATCHLIST } from "./watchlist.js"
import { assessToken } from "../src/lib/risk.js"
import { toVerdict, type AgentVerdict } from "../src/lib/verdict.js"
import {
	verdicts as prevVerdicts,
	stats as prevStats,
	type AgentStats,
} from "../src/data/log.js"

const MAX_LOG = 200

async function main() {
	const fresh: AgentVerdict[] = []
	for (const t of WATCHLIST) {
		try {
			const r = await assessToken(t.address)
			fresh.push(toVerdict(t.symbol, r))
			console.log(`scored ${t.symbol}: ${r.score} (${r.rating})`)
		} catch (e) {
			console.error(`score failed ${t.symbol}:`, (e as Error).message)
		}
	}

	const all = [...fresh, ...prevVerdicts].slice(0, MAX_LOG)
	const stats: AgentStats = {
		updatedAt: new Date().toISOString(),
		tokensScored: prevStats.tokensScored + fresh.length,
		verdictsIssued: prevStats.verdictsIssued + fresh.length,
		safe: prevStats.safe + fresh.filter((v) => v.verdict === "SAFE").length,
		risky: prevStats.risky + fresh.filter((v) => v.verdict === "RISKY").length,
		likelyRug:
			prevStats.likelyRug +
			fresh.filter((v) => v.verdict === "LIKELY_RUG").length,
		ticks: prevStats.ticks + 1,
	}

	const here = dirname(fileURLToPath(import.meta.url))
	const out = resolve(here, "../src/data/log.ts")
	const content =
		'import type { AgentVerdict } from "../lib/verdict.js"\n\n' +
		"export type AgentStats = {\n" +
		"\tupdatedAt: string\n\ttokensScored: number\n\tverdictsIssued: number\n" +
		"\tsafe: number\n\trisky: number\n\tlikelyRug: number\n\tticks: number\n}\n\n" +
		"export const stats: AgentStats = " +
		JSON.stringify(stats, null, "\t") +
		"\n\nexport const verdicts: AgentVerdict[] = " +
		JSON.stringify(all, null, "\t") +
		"\n"

	mkdirSync(dirname(out), { recursive: true })
	writeFileSync(out, content)
	console.log(`tick complete: ${fresh.length} scored, ${all.length} in log`)
}

main().catch((e) => {
	console.error(e)
	process.exit(1)
})
