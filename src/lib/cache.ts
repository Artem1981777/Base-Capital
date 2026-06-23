// Tiny in-memory TTL cache.
// Bursts on popular tokens are served from cache so we stay under the free
// rate limits of DexScreener (60/min) and GeckoTerminal (30/min) while still
// charging per x402 call.

type Entry = { value: unknown; expires: number }

const store = new Map<string, Entry>()

export async function cached<T>(
	key: string,
	ttlMs: number,
	fn: () => Promise<T>,
): Promise<T> {
	const hit = store.get(key)
	if (hit && hit.expires > Date.now()) return hit.value as T
	const value = await fn()
	store.set(key, { value, expires: Date.now() + ttlMs })
	return value
}
