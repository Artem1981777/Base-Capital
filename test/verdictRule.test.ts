import { describe, it, expect } from "vitest"
import { isVerdictCorrect, hasHardRug, HARD_RUG_FLAGS, MIN_SAFE_SCORE } from "../src/lib/verdictRule.js"

describe("verdict rule", () => {
  it("SAFE correct when clean and score >= 75", () => {
    expect(isVerdictCorrect(0, 75, [])).toBe(true)
    expect(isVerdictCorrect(0, 88, ["owner_not_renounced"])).toBe(true)
  })
  it("SAFE wrong when score < 75", () => {
    expect(isVerdictCorrect(0, 74, [])).toBe(false)
  })
  it("SAFE wrong when hard-rug present even if score high", () => {
    expect(isVerdictCorrect(0, 99, ["honeypot"])).toBe(false)
  })
  it("RISKY/RUG correct when hard-rug present", () => {
    expect(isVerdictCorrect(1, 90, ["cannot_sell_all"])).toBe(true)
    expect(isVerdictCorrect(2, 90, ["sim_honeypot"])).toBe(true)
  })
  it("RISKY/RUG correct when score < 75", () => {
    expect(isVerdictCorrect(1, 40, [])).toBe(true)
  })
  it("RISKY/RUG wrong when clean and score >= 75", () => {
    expect(isVerdictCorrect(1, 80, ["owner_not_renounced"])).toBe(false)
  })
  it("hasHardRug detects only hard-rug flags", () => {
    expect(hasHardRug(["high_holder_concentration"])).toBe(false)
    expect(hasHardRug(["sim_extreme_sell_tax"])).toBe(true)
  })
  it("constants stable", () => {
    expect(MIN_SAFE_SCORE).toBe(75)
    expect(HARD_RUG_FLAGS).toContain("honeypot")
  })
})
