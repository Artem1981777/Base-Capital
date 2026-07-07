// Resilient JSON fetch shared by all upstream data sources (DexScreener,
// GoPlus, honeypot.is). Adds a request timeout, retries with exponential
// backoff + jitter, and a short per-host circuit breaker so an upstream
// outage sheds load instead of hanging the serverless function. Breaker
// state is per-instance (best-effort) - no external infra required.

export type FetchJsonOpts = {
	timeoutMs?: number
	retries?: number
	method?: string
	headers?: Record<string, string>
	body?: string
}

export class UpstreamError extends Error {
	readonly status?: number
	constructor(message: string, status?: number) {
		super(message)
		this.name = "UpstreamError"
		this.status = status
	}
}

const BREAKER_THRESHOLD = 4
const BREAKER_COOLDOWN_MS = 30_000
const breaker = new Map<string, { failures: number; openUntil: number }>()

function hostOf(url: string): string {
	try {
		return new URL(url).host
	} catch {
		return url
	}
}

function recordFailure(host: string): void {
	const b = breaker.get(host) ?? { failures: 0, openUntil: 0 }
	b.failures += 1
	if (b.failures >= BREAKER_THRESHOLD) {
		b.openUntil = Date.now() + BREAKER_COOLDOWN_MS
		b.failures = 0
	}
	breaker.set(host, b)
}

function recordSuccess(host: string): void {
	breaker.set(host, { failures: 0, openUntil: 0 })
}

export async function fetchJson<T>(url: string, opts: FetchJsonOpts = {}): Promise<T> {
	const timeoutMs = opts.timeoutMs ?? 6000
	const retries = opts.retries ?? 2
	const method = opts.method ?? "GET"
	const headers = opts.headers ?? { accept: "application/json" }
	const host = hostOf(url)

	const open = breaker.get(host)
	if (open && open.openUntil > Date.now()) {
		throw new UpstreamError("circuit_open:" + host)
	}

	let lastErr: unknown
	for (let attempt = 0; attempt <= retries; attempt++) {
		const ctrl = new AbortController()
		const timer = setTimeout(() => ctrl.abort(), timeoutMs)
		try {
			const res = await fetch(url, { method, headers, body: opts.body, signal: ctrl.signal })
			clearTimeout(timer)
			if (!res.ok) throw new UpstreamError("http_" + res.status, res.status)
			recordSuccess(host)
			return (await res.json()) as T
		} catch (err) {
			clearTimeout(timer)
			lastErr = err
			const status = err instanceof UpstreamError ? err.status : undefined
			const retryable = status === undefined || status >= 500 || status === 429
			if (!retryable) {
				recordFailure(host)
				throw err
			}
			if (attempt < retries) {
				const backoff = Math.min(1500, 200 * 2 ** attempt) + Math.random() * 100
				await new Promise((r) => setTimeout(r, backoff))
			}
		}
	}
	recordFailure(host)
	throw lastErr instanceof Error ? lastErr : new UpstreamError(String(lastErr))
}
