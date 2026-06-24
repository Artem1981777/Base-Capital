// On-chain staking against the RiskStake contract.
//
// Read paths use a keyless public client and are safe to call from the web
// server (powering the landing's on-chain reputation block). Write paths
// (commit / resolve) require the agent's private key and only run in the
// scheduled stake job (agent/stake.ts), never in the request path.
import {
	createPublicClient,
	fallback,
	createWalletClient,
	getAddress,
	http,
	type Address,
	type Hex,
} from "viem"
import { privateKeyToAccount } from "viem/accounts"
import { base, baseSepolia } from "viem/chains"
import { config } from "../config.js"

const chain = config.isMainnet ? base : baseSepolia

export const riskStakeAbi = [
	{
		name: "commitVerdict",
		type: "function",
		stateMutability: "nonpayable",
		inputs: [
			{ name: "id", type: "bytes32" },
			{ name: "token", type: "address" },
			{ name: "rating", type: "uint8" },
			{ name: "stake", type: "uint256" },
		],
		outputs: [],
	},
	{
		name: "resolveVerdict",
		type: "function",
		stateMutability: "nonpayable",
		inputs: [
			{ name: "id", type: "bytes32" },
			{ name: "correct", type: "bool" },
		],
		outputs: [],
	},
	{
		name: "verdictCount",
		type: "function",
		stateMutability: "view",
		inputs: [],
		outputs: [{ type: "uint256" }],
	},
	{
		name: "verdictIds",
		type: "function",
		stateMutability: "view",
		inputs: [{ name: "", type: "uint256" }],
		outputs: [{ type: "bytes32" }],
	},
	{
		name: "verdicts",
		type: "function",
		stateMutability: "view",
		inputs: [{ name: "", type: "bytes32" }],
		outputs: [
			{ name: "agent", type: "address" },
			{ name: "token", type: "address" },
			{ name: "rating", type: "uint8" },
			{ name: "stake", type: "uint96" },
			{ name: "committedAt", type: "uint40" },
			{ name: "status", type: "uint8" },
		],
	},
	{
		name: "getAgentStats",
		type: "function",
		stateMutability: "view",
		inputs: [{ name: "agent", type: "address" }],
		outputs: [
			{ name: "totalVerdicts", type: "uint256" },
			{ name: "totalStaked", type: "uint256" },
			{ name: "totalSlashed", type: "uint256" },
			{ name: "totalReturned", type: "uint256" },
			{ name: "correct", type: "uint256" },
			{ name: "wrong", type: "uint256" },
			{ name: "accuracyBps", type: "uint256" },
		],
	},
] as const

export const erc20Abi = [
	{
		name: "approve",
		type: "function",
		stateMutability: "nonpayable",
		inputs: [
			{ name: "spender", type: "address" },
			{ name: "amount", type: "uint256" },
		],
		outputs: [{ type: "bool" }],
	},
	{
		name: "allowance",
		type: "function",
		stateMutability: "view",
		inputs: [
			{ name: "owner", type: "address" },
			{ name: "spender", type: "address" },
		],
		outputs: [{ type: "uint256" }],
	},
	{
		name: "balanceOf",
		type: "function",
		stateMutability: "view",
		inputs: [{ name: "account", type: "address" }],
		outputs: [{ type: "uint256" }],
	},
] as const

export const VerdictStatus = {
	None: 0,
	Pending: 1,
	Correct: 2,
	Wrong: 3,
} as const

export type OnchainAgentStats = {
	totalVerdicts: number
	totalStakedUsd: number
	totalSlashedUsd: number
	totalReturnedUsd: number
	correct: number
	wrong: number
	accuracyBps: number
}

const USDC_DECIMALS = 6n

function toUsd(units: bigint): number {
	// 6-decimal USDC -> human number with 2 dp precision.
	return Number(units) / 1e6
}

export function usdToUnits(usd: string | number): bigint {
	const [whole, frac = ""] = String(usd).split(".")
	const fracPadded = (frac + "000000").slice(0, Number(USDC_DECIMALS))
	return BigInt(whole || "0") * 1_000_000n + BigInt(fracPadded || "0")
}

export function publicClient() {
	return createPublicClient({ chain, transport: fallback([
		http(config.rpcUrl, { retryCount: 5, retryDelay: 800 }),
		http("https://base.llamarpc.com", { retryCount: 3 }),
		http("https://base.publicnode.com", { retryCount: 3 }),
		http("https://mainnet.base.org", { retryCount: 3 }),
	]) })
}

export function hasContract(): boolean {
	return /^0x[0-9a-fA-F]{40}$/.test(config.riskStakeAddress)
}

/** Keyless read of an agent's on-chain reputation. */
export async function readAgentStats(
	agent: string = config.agentAddress,
): Promise<OnchainAgentStats> {
	const client = publicClient()
	const r = (await client.readContract({
		address: getAddress(config.riskStakeAddress),
		abi: riskStakeAbi,
		functionName: "getAgentStats",
		args: [getAddress(agent)],
	})) as readonly bigint[]
	return {
		totalVerdicts: Number(r[0]),
		totalStakedUsd: toUsd(r[1]),
		totalSlashedUsd: toUsd(r[2]),
		totalReturnedUsd: toUsd(r[3]),
		correct: Number(r[4]),
		wrong: Number(r[5]),
		accuracyBps: Number(r[6]),
	}
}

export function agentWallet() {
	const pk = config.agentPrivateKey
	if (!pk) throw new Error("DEPLOYER_PRIVATE_KEY (agent key) not set")
	const account = privateKeyToAccount(
		(pk.startsWith("0x") ? pk : `0x${pk}`) as Hex,
	)
	const wallet = createWalletClient({
		account,
		chain,
		transport: http(config.rpcUrl),
	})
	return { account, wallet }
}

/** Ensure the contract is approved to pull at least `need` USDC from the agent. */
export async function ensureAllowance(need: bigint): Promise<void> {
	const { account, wallet } = agentWallet()
	const client = publicClient()
	const current = (await client.readContract({
		address: getAddress(config.usdcAddress),
		abi: erc20Abi,
		functionName: "allowance",
		args: [account.address, getAddress(config.riskStakeAddress)],
	})) as bigint
	if (current >= need) return
	// Approve a generous batch (100 USDC) so we don't approve every commit.
	const hash = await wallet.writeContract({
		address: getAddress(config.usdcAddress),
		abi: erc20Abi,
		functionName: "approve",
		args: [getAddress(config.riskStakeAddress), 100_000_000n],
	})
	await client.waitForTransactionReceipt({ hash })
	console.log(`approved USDC allowance (tx ${hash})`)
}

export async function usdcBalance(): Promise<bigint> {
	const { account } = agentWallet()
	const client = publicClient()
	return (await client.readContract({
		address: getAddress(config.usdcAddress),
		abi: erc20Abi,
		functionName: "balanceOf",
		args: [account.address],
	})) as bigint
}

export type OnchainVerdict = {
	id: Hex
	agent: Address
	token: Address
	rating: number
	stake: bigint
	committedAt: number
	status: number
}

export async function getVerdict(id: Hex): Promise<OnchainVerdict> {
	const client = publicClient()
	const r = (await client.readContract({
		address: getAddress(config.riskStakeAddress),
		abi: riskStakeAbi,
		functionName: "verdicts",
		args: [id],
	})) as readonly [Address, Address, number, bigint, number, number]
	return {
		id,
		agent: r[0],
		token: r[1],
		rating: Number(r[2]),
		stake: r[3],
		committedAt: Number(r[4]),
		status: Number(r[5]),
	}
}

export async function listVerdictIds(): Promise<Hex[]> {
	const client = publicClient()
	const count = (await client.readContract({
		address: getAddress(config.riskStakeAddress),
		abi: riskStakeAbi,
		functionName: "verdictCount",
	})) as bigint
	const ids: Hex[] = []
	for (let i = 0n; i < count; i++) {
		const id = (await client.readContract({
			address: getAddress(config.riskStakeAddress),
			abi: riskStakeAbi,
			functionName: "verdictIds",
			args: [i],
		})) as Hex
		ids.push(id)
	}
	return ids
}

export async function commitVerdict(
	id: Hex,
	token: string,
	rating: number,
	stake: bigint,
): Promise<Hex> {
	const { wallet } = agentWallet()
	const client = publicClient()
	const hash = await wallet.writeContract({
		address: getAddress(config.riskStakeAddress),
		abi: riskStakeAbi,
		functionName: "commitVerdict",
		args: [id, getAddress(token), rating, stake],
	})
	await client.waitForTransactionReceipt({ hash })
	return hash
}

export async function resolveVerdict(id: Hex, correct: boolean): Promise<Hex> {
	const { wallet } = agentWallet()
	const client = publicClient()
	const hash = await wallet.writeContract({
		address: getAddress(config.riskStakeAddress),
		abi: riskStakeAbi,
		functionName: "resolveVerdict",
		args: [id, correct],
	})
	await client.waitForTransactionReceipt({ hash })
	return hash
    }
