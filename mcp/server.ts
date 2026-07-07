#!/usr/bin/env node
/**
 * Base Capital — MCP server.
 * Exposes the x402 risk API as MCP tools so any MCP client (Claude Desktop,
 * agent frameworks) can call it, paying per call in USDC on Base.
 *
 * Env:
 *   BASE_CAPITAL_URL  default https://base-capital.vercel.app
 *   PRIVATE_KEY       buyer EOA (0x...) funded with USDC on Base.
 *                     Required only for paid tools (risk_check, risk_batch, trending_signal).
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { z } from "zod"
import { wrapFetchWithPayment } from "@x402/fetch"
import { x402Client } from "@x402/core/client"
import { ExactEvmScheme } from "@x402/evm/exact/client"
import { privateKeyToAccount } from "viem/accounts"

const BASE = (process.env.BASE_CAPITAL_URL ?? "https://base-capital.vercel.app").replace(/\/$/, "")
const PK = process.env.PRIVATE_KEY as `0x${string}` | undefined

let payFetch: typeof fetch = fetch
if (PK) {
	const signer = privateKeyToAccount(PK)
	const client = new x402Client()
	client.register("eip155:*", new ExactEvmScheme(signer))
	payFetch = wrapFetchWithPayment(fetch, client) as unknown as typeof fetch
}

async function getJson(f: typeof fetch, path: string) {
	const res = await f(`${BASE}${path}`, { method: "GET" })
	const text = await res.text()
	if (!res.ok) throw new Error(`HTTP ${res.status} for ${path}: ${text.slice(0, 300)}`)
	try { return JSON.parse(text) } catch { return text }
}

async function postJson(f: typeof fetch, path: string, body: unknown) {
	const res = await f(`${BASE}${path}`, {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(body),
	})
	const text = await res.text()
	if (!res.ok) throw new Error(`HTTP ${res.status} for ${path}: ${text.slice(0, 300)}`)
	try { return JSON.parse(text) } catch { return text }
}

function ok(data: unknown) {
	return { content: [{ type: "text" as const, text: typeof data === "string" ? data : JSON.stringify(data, null, 2) }] }
}
function fail(e: unknown) {
	return { isError: true, content: [{ type: "text" as const, text: `Error: ${e instanceof Error ? e.message : String(e)}` }] }
}

const server = new McpServer({ name: "base-capital", version: "1.0.0" })

server.registerTool(
	"risk_check",
	{
		title: "Token risk check (paid)",
		description: "Real-time risk score (0-100) + honeypot/rug/ownership/liquidity flags for a Base token. Verdict staked onchain for accountability. Costs $0.01 USDC via x402 (requires PRIVATE_KEY).",
		inputSchema: { token: z.string().describe("Base token contract address, e.g. 0x4200...0006") },
	},
	async ({ token }) => {
		try { return ok(await getJson(payFetch, `/v1/risk/${token}`)) } catch (e) { return fail(e) }
	},
)

server.registerTool(
	"trending_signal",
	{
		title: "Trending risk feed (paid)",
		description: "Watchlist sorted riskiest-first with verdict, score, confidence and flags. Built for agent-to-agent consumption. Costs $0.01 USDC via x402 (requires PRIVATE_KEY).",
		inputSchema: {},
	},
	async () => {
		try { return ok(await getJson(payFetch, `/v1/signal/trending`)) } catch (e) { return fail(e) }
	},
)

server.registerTool(
	"preview",
	{
		title: "Token preview (free)",
		description: "Free, unpaid preview of a Base token's basic risk signals. No payment required.",
		inputSchema: { token: z.string().describe("Base token contract address (0x...)") },
	},
	async ({ token }) => {
		try { return ok(await getJson(fetch, `/v1/preview/${token}`)) } catch (e) { return fail(e) }
	},
)

server.registerTool(
	"risk_batch",
	{
		title: "Batch token risk check (paid)",
		description: "Risk scores (0-100) + flags, confidence and per-source health for up to 10 Base tokens in one call. One x402 payment for the whole batch. Costs $0.01 USDC via x402 (requires PRIVATE_KEY).",
		inputSchema: { tokens: z.array(z.string()).min(1).max(10).describe("1-10 Base token contract addresses (0x...)") },
	},
	async ({ tokens }) => {
		try { return ok(await postJson(payFetch, "/v1/risk/batch", { tokens })) } catch (e) { return fail(e) }
	},
)

const transport = new StdioServerTransport()
await server.connect(transport)
