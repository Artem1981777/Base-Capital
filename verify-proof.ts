// Standalone reproducibility checker (read-only, no private key).
// For each archived snapshot in proofs/, recompute keccak256 and assert it
// matches the proofHash stored on-chain for that verdict. Run with:
//   NETWORK_MODE=mainnet npx tsx verify-proof.ts [0x<verdictId>]
import { keccak256, toBytes, type Hex } from "viem"
import { readFileSync, readdirSync } from "node:fs"
import { getVerdict } from "./src/lib/stake.js"

async function verifyOne(id: Hex): Promise<boolean> {
  const raw = readFileSync(`proofs/${id}.json`, "utf8")
  const local = keccak256(toBytes(raw))
  const v = await getVerdict(id)
  const ok = local.toLowerCase() === v.proofHash.toLowerCase()
  console.log(`${ok ? "PASS" : "FAIL"} ${id}`)
  console.log(`  local   proofHash: ${local}`)
  console.log(`  onchain proofHash: ${v.proofHash}`)
  console.log(`  snapshotURI:       ${v.snapshotURI}`)
  return ok
}

async function main() {
  const arg = process.argv[2]
  const ids: Hex[] = arg
    ? [arg as Hex]
    : readdirSync("proofs")
        .filter((f) => f.endsWith(".json"))
        .map((f) => f.replace(".json", "") as Hex)
  if (ids.length === 0) {
    console.log("no proof files in proofs/ yet — run the stake job first")
    return
  }
  let pass = 0
  for (const id of ids) {
    try {
      if (await verifyOne(id)) pass++
    } catch (e) {
      console.error(`ERROR ${id}:`, (e as Error).message)
    }
  }
  console.log(`\n${pass}/${ids.length} proofs verified against on-chain proofHash`)
  if (pass !== ids.length) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
