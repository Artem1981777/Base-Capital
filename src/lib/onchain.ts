// Onchain reads via viem against the free Base RPC.
import {
	createPublicClient,
	getAddress,
	http,
	isAddress,
	type Address,
} from "viem"
import { base, baseSepolia } from "viem/chains"
import { config } from "../config.js"

const chain = config.isMainnet ? base : baseSepolia

export const publicClient = createPublicClient({
	chain,
	transport: http(config.rpcUrl),
})

const ownableAbi = [
	{
		name: "owner",
		type: "function",
		stateMutability: "view",
		inputs: [],
		outputs: [{ type: "address" }],
	},
] as const

const erc20Abi = [
	{
		name: "totalSupply",
		type: "function",
		stateMutability: "view",
		inputs: [],
		outputs: [{ type: "uint256" }],
	},
] as const

export function validateAddress(token: string): Address {
	if (!isAddress(token)) throw new Error("Invalid token address")
	return getAddress(token)
}

export async function getOwner(token: Address): Promise<string | null> {
	try {
		return (await publicClient.readContract({
			address: token,
			abi: ownableAbi,
			functionName: "owner",
		})) as string
	} catch {
		return null // contract has no owner() — often a good sign
	}
}

export async function getTotalSupply(token: Address): Promise<bigint | null> {
	try {
		return (await publicClient.readContract({
			address: token,
			abi: erc20Abi,
			functionName: "totalSupply",
		})) as bigint
	} catch {
		return null
	}
}
