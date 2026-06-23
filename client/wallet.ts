// Generate a throwaway TESTNET wallet. Run: npx tsx client/wallet.ts
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts"

const pk = generatePrivateKey()
const account = privateKeyToAccount(pk)

console.log("Throwaway TESTNET wallet — fund it from a Base Sepolia faucet:\n")
console.log(`ADDRESS          = ${account.address}`)
console.log(`TEST_PRIVATE_KEY = ${pk}`)
console.log("\nAdd this line to your .env (NEVER reuse this key on mainnet):")
console.log(`TEST_PRIVATE_KEY=${pk}`)
