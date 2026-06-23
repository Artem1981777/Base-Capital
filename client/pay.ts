// Test buyer client: pays for a /v1/risk call and prints the result + receipt.
// Run: npx tsx client/pay.ts [tokenAddress]
import "dotenv/config"
import { x402Client, wrapFetchWithPayment, x402HTTPClient } from "@x402/fetch"
import { registerExactEvmScheme } from "@x402/evm/exact/client"
import { privateKeyToAccount } from "viem/accounts"

const BASE_URL = process.env.TARGET_URL ?? "https://base-capital.vercel.app"
const TOKEN = process.argv[2] ?? "0x4200000000000000000000000000000000000006"

const pk = process.env.TEST_PRIVATE_KEY as `0x${string}` | undefined
if (!pk) {
	throw new Error(
		"Set TEST_PRIVATE_KEY in .env (throwaway testnet key from: npx tsx client/wallet.ts)",
	)
}

const signer = privateKeyToAccount(pk)
const client = new x402Client()
registerExactEvmScheme(client, { signer })
const fetchWithPayment = wrapFetchWithPayment(fetch, client)

console.log(`Buyer wallet : ${signer.address}`)
console.log(`Endpoint     : ${BASE_URL}/v1/risk/${TOKEN}`)
console.log("Paying 0.01 USDC and fetching the risk score...\n")

const res = await fetchWithPayment(`${BASE_URL}/v1/risk/${TOKEN}`, {
	method: "GET",
})
const body = await res.json()

console.log("--- Risk score ---")
console.log(JSON.stringify(body, null, 2))

if (res.ok) {
	const httpClient = new x402HTTPClient(client)
	const settle = httpClient.getPaymentSettleResponse((name) =>
		res.headers.get(name),
	)
	console.log("\n--- Payment settled ---")
	console.log(JSON.stringify(settle, null, 2))
	console.log(
		"\nView the tx on https://sepolia.basescan.org (search the txHash above).",
	)
} else {
	console.log(`\nRequest failed: HTTP ${res.status}`)
}
