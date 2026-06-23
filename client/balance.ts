// Check the test wallet's address + balances on Base Sepolia.
// Run: npx tsx client/balance.ts
import "dotenv/config"
import { createPublicClient, http, formatUnits, formatEther } from "viem"
import { baseSepolia } from "viem/chains"
import { privateKeyToAccount } from "viem/accounts"

const USDC = "0x036CbD53842c5426634e7929541eC2318f3dCF7e" as const

const pk = process.env.TEST_PRIVATE_KEY as `0x${string}` | undefined
if (!pk) throw new Error("TEST_PRIVATE_KEY not found in .env")

const account = privateKeyToAccount(pk)
const client = createPublicClient({
	chain: baseSepolia,
	transport: http("https://sepolia.base.org"),
})

const erc20Abi = [
	{
		name: "balanceOf",
		type: "function",
		stateMutability: "view",
		inputs: [{ type: "address" }],
		outputs: [{ type: "uint256" }],
	},
] as const

const [usdcRaw, eth] = await Promise.all([
	client.readContract({
		address: USDC,
		abi: erc20Abi,
		functionName: "balanceOf",
		args: [account.address],
	}),
	client.getBalance({ address: account.address }),
])
const usdc = usdcRaw as bigint

console.log(`Wallet address : ${account.address}`)
console.log(`USDC balance   : ${formatUnits(usdc, 6)} USDC`)
console.log(`ETH balance    : ${formatEther(eth)} ETH`)
console.log(
	usdc > 0n
		? "\n✅ Funded — ready to pay. Run: npx tsx client/pay.ts"
		: "\n⚠️ No USDC yet — fund this address at faucet.circle.com (Base Sepolia).",
)
