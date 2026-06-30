import { describe, it, expect } from "vitest"
import { keccak256, toBytes } from "viem"
import { readFileSync } from "node:fs"

// Golden vectors: archived canonical snapshot -> on-chain proofHash.
// Locks the zero-trust reproducibility invariant.
const VECTORS: Record<string, string> = {
  "0x2cb7862b2ae349f58fca02f995d875af5aee5b3579d9712bf16820a697bcd95e": "0x0c5caab2081990fd26df6733d73f6076528d1f5565c9125acd609cb53f5848e7",
  "0x5035bc754c31792da0e67bcd50e59f899ff71b9bdcca33c0d01340a44b8598bb": "0x895d0e38a7a560cf2f3beb98cfbcd4f568215b6157417567f8ba18c010c60619",
  "0xadfad1354435acba23bcab7b983bdd86331834ec869ef620251b274d9fa50139": "0x2af81d5b285cab97587fb39d3a7161ef15411c0c7bb43977760c7d4060fa26ee"
}

describe("proof reproducibility (golden vectors)", () => {
  for (const [id, expected] of Object.entries(VECTORS)) {
    it("proof " + id.slice(0, 10) + " matches on-chain proofHash", () => {
      const raw = readFileSync("proofs/" + id + ".json", "utf8")
      expect(keccak256(toBytes(raw))).toBe(expected)
    })
  }
})
