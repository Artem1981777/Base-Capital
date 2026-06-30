// On-chain staking against the RiskStake contract (v3).
//
// Read paths use a keyless public client and are safe to call from the web
// server (powering the landing's on-chain reputation block). Write paths
// (commit / propose / finalize) require the agent's private key and only run
// in the scheduled stake job (agent/stake.ts), never in the request path.
//
// v3 ABI: agentId-bound reputation (ERC-8004), optimistic resolution with a
// public 24h challenge window (proposeResolution -> finalize), on-chain rule
// versioning + snapshot pointer for reproducible proofs, an O(1) pending
// index, and a 48h time-locked rescue. Roles stay separated.
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
import { Attribution } from "ox/erc8021"
import { base, baseSepolia } from "viem/chains"
import { config } from "../config.js"

// Base Builder Code (ERC-8021) attribution for agent onchain txs.
const BUILDER_CODE_SUFFIX = Attribution.toDataSuffix({ codes: [config.builderCode] })

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
    name: "proposeResolution",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "id", type: "bytes32" },
      { name: "correct", type: "bool" },
      { name: "proofHash", type: "bytes32" },
      { name: "ruleVersion", type: "uint16" },
      { name: "snapshotURI", type: "string" },
    ],
    outputs: [],
  },
  {
    name: "finalize",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [{ name: "id", type: "bytes32" }],
    outputs: [],
  },
  {
    name: "challengeResolution",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [{ name: "id", type: "bytes32" }],
    outputs: [],
  },
  {
    name: "registerAgent",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "agentId", type: "uint256" },
      { name: "signer", type: "address" },
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
    name: "pendingCount",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },
  {
    name: "getPending",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "offset", type: "uint256" },
      { name: "limit", type: "uint256" },
    ],
    outputs: [{ type: "bytes32[]" }],
  },
  {
    name: "verdictIds",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "", type: "uint256" }],
    outputs: [{ type: "bytes32" }],
  },
  {
    name: "agentSigner",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "", type: "uint256" }],
    outputs: [{ type: "address" }],
  },
  {
    name: "signerAgentId",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "", type: "address" }],
    outputs: [{ type: "uint256" }],
  },
  {
    name: "agentRegisteredAt",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "", type: "uint256" }],
    outputs: [{ type: "uint40" }],
  },
  {
    name: "verdicts",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "", type: "bytes32" }],
    outputs: [
      { name: "agentId", type: "uint256" },
      { name: "agent", type: "address" },
      { name: "token", type: "address" },
      { name: "rating", type: "uint8" },
      { name: "ruleVersion", type: "uint16" },
      { name: "stake", type: "uint96" },
      { name: "committedAt", type: "uint40" },
      { name: "resolvedAt", type: "uint40" },
      { name: "challengeDeadline", type: "uint40" },
      { name: "status", type: "uint8" },
      { name: "proposedCorrect", type: "bool" },
      { name: "challenger", type: "address" },
      { name: "challengeBond", type: "uint96" },
      { name: "proofHash", type: "bytes32" },
      { name: "snapshotURI", type: "string" },
    ],
  },
  {
    name: "getAgentStats",
    type: "function",
    stateMutability: "view",
    inputs: [{ name: "agentId", type: "uint256" }],
    outputs: [
      { name: "totalVerdicts", type: "uint256" },
      { name: "totalStaked", type: "uint256" },
      { name: "totalSlashed", type: "uint256" },
      { name: "totalReturned", type: "uint256" },
      { name: "correct", type: "uint256" },
      { name: "wrong", type: "uint256" },
      { name: "accuracyBps", type: "uint256" },
      { name: "totalAtRisk", type: "uint256" },
      { name: "slashRateBps", type: "uint256" },
      { name: "identityAgeSeconds", type: "uint256" },
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
  Proposed: 2,
  Challenged: 3,
  Correct: 4,
  Wrong: 5,
} as const

export type OnchainAgentStats = {
  totalVerdicts: number
  totalStakedUsd: number
  totalSlashedUsd: number
  totalReturnedUsd: number
  correct: number
  wrong: number
  accuracyBps: number
  totalAtRiskUsd: number
  slashRateBps: number
  identityAgeSeconds: number
}

const USDC_DECIMALS = 6n

function toUsd(units: bigint): number {
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

/** Keyless read of an agent's on-chain reputation (by ERC-8004 agentId). */
export async function readAgentStats(
  agentId: number = config.agentId,
): Promise<OnchainAgentStats> {
  const client = publicClient()
  const r = (await client.readContract({
    address: getAddress(config.riskStakeAddress),
    abi: riskStakeAbi,
    functionName: "getAgentStats",
    args: [BigInt(agentId)],
  })) as readonly bigint[]
  return {
    totalVerdicts: Number(r[0]),
    totalStakedUsd: toUsd(r[1]),
    totalSlashedUsd: toUsd(r[2]),
    totalReturnedUsd: toUsd(r[3]),
    correct: Number(r[4]),
    wrong: Number(r[5]),
    accuracyBps: Number(r[6]),
    totalAtRiskUsd: toUsd(r[7]),
    slashRateBps: Number(r[8]),
    identityAgeSeconds: Number(r[9]),
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
  const hash = await wallet.writeContract({
    address: getAddress(config.usdcAddress),
    abi: erc20Abi,
    functionName: "approve",
    args: [getAddress(config.riskStakeAddress), 100_000_000n],
    dataSuffix: BUILDER_CODE_SUFFIX,
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
  agentId: number
  agent: Address
  token: Address
  rating: number
  ruleVersion: number
  stake: bigint
  committedAt: number
  resolvedAt: number
  challengeDeadline: number
  status: number
  proposedCorrect: boolean
  challenger: Address
  challengeBond: bigint
  proofHash: Hex
  snapshotURI: string
}

export async function getVerdict(id: Hex): Promise<OnchainVerdict> {
  const client = publicClient()
  const r = (await client.readContract({
    address: getAddress(config.riskStakeAddress),
    abi: riskStakeAbi,
    functionName: "verdicts",
    args: [id],
  })) as readonly [
    bigint, Address, Address, number, number, bigint, number, number,
    number, number, boolean, Address, bigint, Hex, string,
  ]
  return {
    id,
    agentId: Number(r[0]),
    agent: r[1],
    token: r[2],
    rating: Number(r[3]),
    ruleVersion: Number(r[4]),
    stake: r[5],
    committedAt: Number(r[6]),
    resolvedAt: Number(r[7]),
    challengeDeadline: Number(r[8]),
    status: Number(r[9]),
    proposedCorrect: r[10],
    challenger: r[11],
    challengeBond: r[12],
    proofHash: r[13],
    snapshotURI: r[14],
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

/** Number of still-unsettled (pending or proposed) verdicts. */
export async function pendingCount(): Promise<number> {
  const client = publicClient()
  const n = (await client.readContract({
    address: getAddress(config.riskStakeAddress),
    abi: riskStakeAbi,
    functionName: "pendingCount",
  })) as bigint
  return Number(n)
}

/** Page through unsettled verdict ids (O(1)-indexed). */
export async function getPending(
  offset: bigint = 0n,
  limit: bigint = 200n,
): Promise<Hex[]> {
  const client = publicClient()
  const ids = (await client.readContract({
    address: getAddress(config.riskStakeAddress),
    abi: riskStakeAbi,
    functionName: "getPending",
    args: [offset, limit],
  })) as readonly Hex[]
  return [...ids]
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
    dataSuffix: BUILDER_CODE_SUFFIX,
  })
  await client.waitForTransactionReceipt({ hash })
  return hash
}

/** Optimistically propose a resolution; opens the on-chain challenge window. */
export async function proposeResolution(
  id: Hex,
  correct: boolean,
  proofHash: Hex,
  ruleVersion: number,
  snapshotURI: string,
): Promise<Hex> {
  const { wallet } = agentWallet()
  const client = publicClient()
  const hash = await wallet.writeContract({
    address: getAddress(config.riskStakeAddress),
    abi: riskStakeAbi,
    functionName: "proposeResolution",
    args: [id, correct, proofHash, ruleVersion, snapshotURI],
    dataSuffix: BUILDER_CODE_SUFFIX,
  })
  await client.waitForTransactionReceipt({ hash })
  return hash
}

/** Finalize a proposed verdict whose challenge window has elapsed unchallenged. */
export async function finalize(id: Hex): Promise<Hex> {
  const { wallet } = agentWallet()
  const client = publicClient()
  const hash = await wallet.writeContract({
    address: getAddress(config.riskStakeAddress),
    abi: riskStakeAbi,
    functionName: "finalize",
    args: [id],
    dataSuffix: BUILDER_CODE_SUFFIX,
  })
  await client.waitForTransactionReceipt({ hash })
  return hash
}

/** Resolve a signer address to its registered ERC-8004 agentId (0 if none). */
export async function agentIdOf(address: string): Promise<number> {
  const client = publicClient()
  const id = (await client.readContract({
    address: getAddress(config.riskStakeAddress),
    abi: riskStakeAbi,
    functionName: "signerAgentId",
    args: [getAddress(address)],
  })) as bigint
  return Number(id)
}

/** Keyless reputation read for a signer address (resolves address -> agentId). */
export async function readAgentStatsByAddress(
  address: string,
): Promise<OnchainAgentStats & { agentId: number; registered: boolean }> {
  const agentId = await agentIdOf(address)
  if (agentId === 0) {
    return {
      agentId: 0,
      registered: false,
      totalVerdicts: 0,
      totalStakedUsd: 0,
      totalSlashedUsd: 0,
      totalReturnedUsd: 0,
      correct: 0,
      wrong: 0,
      accuracyBps: 0,
      totalAtRiskUsd: 0,
      slashRateBps: 0,
      identityAgeSeconds: 0,
    }
  }
  const stats = await readAgentStats(agentId)
  return { agentId, registered: true, ...stats }
}
