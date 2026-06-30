// Deterministic, versioned verdict-resolution rule extracted for testability.
// Identical to the former inline logic in agent/stake.ts; kept byte-compatible
// so historical proof snapshots stay reproducible.

export const HARD_RUG_FLAGS = [
  "honeypot",
  "cannot_sell_all",
  "cannot_buy",
  "sim_honeypot",
  "sim_extreme_sell_tax",
] as const

export const MIN_SAFE_SCORE = 75

export function hasHardRug(flags: readonly string[]): boolean {
  return HARD_RUG_FLAGS.some((f) => flags.includes(f))
}

// rating 0 = SAFE: correct iff no hard-rug AND score >= 75.
// rating 1 or 2 = RISKY/RUG: correct iff hard-rug OR score < 75.
export function isVerdictCorrect(
  rating: number,
  score: number,
  flags: readonly string[],
): boolean {
  const saidSafe = rating === 0
  const hardRug = hasHardRug(flags)
  return saidSafe ? !hardRug && score >= MIN_SAFE_SCORE : hardRug || score < MIN_SAFE_SCORE
}
