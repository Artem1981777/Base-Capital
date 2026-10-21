import type { AgentVerdict } from "../lib/verdict.js"

export type AgentStats = {
	updatedAt: string
	tokensScored: number
	verdictsIssued: number
	safe: number
	risky: number
	likelyRug: number
	ticks: number
}

export const stats: AgentStats = {
	"updatedAt": "2026-10-21T12:50:01.242Z",
	"tokensScored": 20929,
	"verdictsIssued": 20929,
	"safe": 17842,
	"risky": 1480,
	"likelyRug": 1607,
	"ticks": 1182
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "647ab42aa64d",
		"ts": "2026-10-21T12:49:56.945Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 149584220.03,
		"hash": "647ab42aa64d20b7aa947147178a95059cfb2699cacd1e6bf1632c2f236aa6fc"
	},
	{
		"id": "f26dad0e111b",
		"ts": "2026-10-21T12:49:57.319Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 18454249.16,
		"hash": "f26dad0e111bd95df9f0ece4eb07686630c08f0a1ac9ee36d135ee3290fcbb4f"
	},
	{
		"id": "fe15e28b7baf",
		"ts": "2026-10-21T12:49:57.551Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 276327.68,
		"hash": "fe15e28b7baf9cf3d8458ba50a3297257669bc4f7d4ac095b99bbb6790a4b195"
	},
	{
		"id": "bb4561e4e197",
		"ts": "2026-10-21T12:49:57.774Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 38398085.6,
		"hash": "bb4561e4e1974b5380d7d426ed24f3c0ce642edacbc5f39077a4e9eea142dedc"
	},
	{
		"id": "42f6a756e90a",
		"ts": "2026-10-21T12:49:57.998Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4287014.48,
		"hash": "42f6a756e90a3696f3beccd459187c6858dc3fbf906a8fb613f785fb4e393a16"
	},
	{
		"id": "d08999b02627",
		"ts": "2026-10-21T12:49:58.215Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1189241.06,
		"hash": "d08999b026275fd67ecce85326956dae8631caf76c1d55027cecb4dec6d027e8"
	},
	{
		"id": "6c6666bd0405",
		"ts": "2026-10-21T12:49:58.430Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 38398085.6,
		"hash": "6c6666bd04054c17ea5cd11073ef8e2913b9ff048569615e88c5fb2e17680865"
	},
	{
		"id": "cba756d38322",
		"ts": "2026-10-21T12:49:58.664Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2551408.56,
		"hash": "cba756d3832203a023f2996b1ed0afdeabc0d197ee372a53950612589e7ba5e9"
	},
	{
		"id": "21c2aac0c931",
		"ts": "2026-10-21T12:49:58.899Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2481135.08,
		"hash": "21c2aac0c9319cb2f113061fdeed297f383288af4d61fd6c3cf994a9af73d64d"
	},
	{
		"id": "dfcf865f3526",
		"ts": "2026-10-21T12:49:59.105Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1358523.11,
		"hash": "dfcf865f35265ba8a297ef4859270c95110fbff3190bc1f5813119c27b6e0d53"
	},
	{
		"id": "f6b1ee48f2ae",
		"ts": "2026-10-21T12:49:59.308Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 3506316.17,
		"hash": "f6b1ee48f2ae75d6c36e12cb58faa34a6ba32687fbf4fddc6e31bcef2720dee5"
	},
	{
		"id": "f12fe0ea08d1",
		"ts": "2026-10-21T12:49:59.636Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1807688.79,
		"hash": "f12fe0ea08d17d6c8a8fd365db41413ef3240ec48b42894a8d2a482eb63f7b76"
	},
	{
		"id": "7d85d784fbc7",
		"ts": "2026-10-21T12:49:59.825Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1334932.78,
		"hash": "7d85d784fbc73cd6d7957529f3ffafc07ff2ce7ebfa0f9ecf038b148274e5d29"
	},
	{
		"id": "cbbb58cf7ca9",
		"ts": "2026-10-21T12:50:00.047Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1965201.08,
		"hash": "cbbb58cf7ca90f148a0e962703c651f401eb74513ff63974ba91f89e274767ba"
	},
	{
		"id": "7484648c62ce",
		"ts": "2026-10-21T12:50:00.284Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 348431.06,
		"hash": "7484648c62ce07879dafe5f6004c29f3e2f42fe2d7e7ac6dfa1c13c84b3a24b7"
	},
	{
		"id": "223d5339aef3",
		"ts": "2026-10-21T12:50:00.540Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 579504.85,
		"hash": "223d5339aef3112e76a1ab20e1be834e8c4e3a3fc5a495bd9805c86a8ed867ce"
	},
	{
		"id": "dbf50c216b35",
		"ts": "2026-10-21T12:50:00.766Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 4,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.92,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 653464.07,
		"hash": "dbf50c216b355ed28eb3cbc8b0f2d86ce22253a5456cda4472f2b8c91cab3007"
	},
	{
		"id": "dc356b404f8e",
		"ts": "2026-10-21T12:50:00.985Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 208235.47,
		"hash": "dc356b404f8ee506f017fc838bc6f9ae615541f48e8a00d8014a85a5631bd894"
	},
	{
		"id": "1c5252746e7a",
		"ts": "2026-10-21T12:50:01.242Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 18034011.35,
		"hash": "1c5252746e7a88a5358fbc434c7bd67797a21435a5cbd910f32d1fee07d3f325"
	},
	{
		"id": "8b9146beb6a5",
		"ts": "2026-10-21T06:58:56.951Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148435216.66,
		"hash": "8b9146beb6a559bf85a2bdf2bf8e7e88bb5fed8ad203f3d1d3e7962b7139a473"
	},
	{
		"id": "975f9e926d5a",
		"ts": "2026-10-21T06:58:57.332Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 16442842.12,
		"hash": "975f9e926d5a7e7d486eb1da46b5361a76f59372633e67b2b4ad1c5bea229ded"
	},
	{
		"id": "4011d4317c4a",
		"ts": "2026-10-21T06:58:57.562Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 271533.49,
		"hash": "4011d4317c4a039ab9f01d1632ebeb4498b4253d4b37bf398d012d64fe21bc6c"
	},
	{
		"id": "3ee0a1d80ebc",
		"ts": "2026-10-21T06:58:57.779Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 38470599.14,
		"hash": "3ee0a1d80ebc740ea3934bfa75baf51c8b14d9db46dee815b05446b714b258e5"
	},
	{
		"id": "d68a856a02ba",
		"ts": "2026-10-21T06:58:57.990Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4689311,
		"hash": "d68a856a02bae420d3842e9022d88e6ae6dc14603ea420cb5615b49a7c3a837b"
	},
	{
		"id": "1783a47c5468",
		"ts": "2026-10-21T06:58:58.227Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1178659.19,
		"hash": "1783a47c546895a168ed21e01c72ed1db35199a4b642828eb22e35274f485b04"
	},
	{
		"id": "aa6b7ebc5eb8",
		"ts": "2026-10-21T06:58:58.461Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 38470599.39,
		"hash": "aa6b7ebc5eb8945e40c096f0de8c9450026bcf8ef0e6a4235e5bad339906bac2"
	},
	{
		"id": "76d28b6261ca",
		"ts": "2026-10-21T06:58:58.718Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2526145.85,
		"hash": "76d28b6261ca899de05976227b783bd1401594224cd018d5265ab7a4185d4c7b"
	},
	{
		"id": "b9af790046a4",
		"ts": "2026-10-21T06:58:58.975Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1418827.88,
		"hash": "b9af790046a49170d2914d98e19c9edf631d08eb6a8b624fc66a263cae161e25"
	},
	{
		"id": "99b7c59eb052",
		"ts": "2026-10-21T06:58:59.235Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 356488.52,
		"hash": "99b7c59eb052e6b779750e45a2b15f865a589ad854b0f1c7705d8f5db781ec77"
	},
	{
		"id": "17916614085c",
		"ts": "2026-10-21T06:58:59.541Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1858741.51,
		"hash": "17916614085c93301df78285ca8703a646260c9242317a3899f8e81b0f19b1a0"
	},
	{
		"id": "0276e995d414",
		"ts": "2026-10-21T06:58:59.971Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 3461523.03,
		"hash": "0276e995d414f09310e832184d778e43e55da54e8b1b771e74682af6fe631a83"
	},
	{
		"id": "51f8ebf2db18",
		"ts": "2026-10-21T06:59:00.218Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1322908.32,
		"hash": "51f8ebf2db18573f5008fd157f42652171069bd2c634a5cef47e8045fc830d12"
	},
	{
		"id": "f59f63133c76",
		"ts": "2026-10-21T06:59:01.088Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1943102.4,
		"hash": "f59f63133c76aae50c58f2b7da3b04e06c15948dcd8149dd8e60a7fb4d2f57f3"
	},
	{
		"id": "39e8b9fff6ae",
		"ts": "2026-10-21T06:59:01.308Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 4,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.92,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 692637.67,
		"hash": "39e8b9fff6aeee9e1d7aa665f4af8ea27df5f629a137aeee450e734e6a9f3f8c"
	},
	{
		"id": "f0c4ade768a9",
		"ts": "2026-10-21T06:59:01.534Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 557667.12,
		"hash": "f0c4ade768a9d6dc971c6cbd2131c2109077e6a00026e4512baae01d3cc0f800"
	},
	{
		"id": "b9078ca7572a",
		"ts": "2026-10-21T06:59:01.837Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 205606.39,
		"hash": "b9078ca7572afca2f7690533533083525f2de177717dbc77ff9804713f3b6ad3"
	},
	{
		"id": "0616acc3d2e3",
		"ts": "2026-10-21T06:59:02.203Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 17981161.33,
		"hash": "0616acc3d2e3efef6875dd900c6ee952101fd6b9a1127fa8ffcac30819d910e0"
	},
	{
		"id": "b4e78089df2b",
		"ts": "2026-10-21T06:59:02.411Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4897580.63,
		"hash": "b4e78089df2b310d9da7399f382471e9bb0277ac036e151402ca133b49e842ae"
	},
	{
		"id": "4434c1ed161c",
		"ts": "2026-10-21T01:14:03.503Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148514266.87,
		"hash": "4434c1ed161cce60591dcc92580cfde8604a223c32c8595d7d7e10b7f3e71518"
	},
	{
		"id": "18df0cec4136",
		"ts": "2026-10-21T01:14:03.974Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 16445931.96,
		"hash": "18df0cec4136d91517212e977cb1cc6a2d1c8d1ee04a8840c75d1a1260e2dc79"
	},
	{
		"id": "dff1d335cd39",
		"ts": "2026-10-21T01:14:04.259Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 270935.58,
		"hash": "dff1d335cd3903716b28c0072237a3a3311725ba7ed3eb37d96babf6c7b4256b"
	},
	{
		"id": "1a974d6f6265",
		"ts": "2026-10-21T01:14:04.549Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 39681046.48,
		"hash": "1a974d6f6265ddeb6585c9395718c5d4ce8b0dd577dc6f065342b8bcd2a874ea"
	},
	{
		"id": "c40df3fd5f56",
		"ts": "2026-10-21T01:14:04.844Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4742704.23,
		"hash": "c40df3fd5f564105edbc954e6938685c85154dc0819278f5ff62e2d555ae5a79"
	},
	{
		"id": "11d06fe8592f",
		"ts": "2026-10-21T01:14:05.117Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1172936.38,
		"hash": "11d06fe8592f464d596ea7a707d352324e789c9b511b10a352da6eb6bf0476e0"
	},
	{
		"id": "ca9fdb9a79ce",
		"ts": "2026-10-21T01:14:05.395Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 39681051.77,
		"hash": "ca9fdb9a79ce24c51e889351e829f17b6e55f61c7e9ed8f0ecfbdd55efd35169"
	},
	{
		"id": "c4195753d6e2",
		"ts": "2026-10-21T01:14:05.715Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2534079.39,
		"hash": "c4195753d6e26d25ba6241f71031f73500d0dfb5ddc1a5d6055fc11799b43a94"
	},
	{
		"id": "92a2071f6224",
		"ts": "2026-10-21T01:14:06.018Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1440285.44,
		"hash": "92a2071f62241bb258203546aed7ca26d31ed0484b251522763d57639567f52f"
	},
	{
		"id": "7539e99ef4da",
		"ts": "2026-10-21T01:14:06.296Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 378465.51,
		"hash": "7539e99ef4dade45c2092e98c969cc484e78278d2d8a0ab607c90c0a2ecc849d"
	},
	{
		"id": "d6a2d3578df3",
		"ts": "2026-10-21T01:14:06.526Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 3416114.44,
		"hash": "d6a2d3578df3655ccb3a191c07eea83fcaba14cce7633716bab5d0a5e608695b"
	},
	{
		"id": "0ec296441699",
		"ts": "2026-10-21T01:14:06.771Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1940723.24,
		"hash": "0ec296441699853a95f4cdafdd84ca6e15a246319dc2d101a46f096ae231f37c"
	},
	{
		"id": "6beac1307522",
		"ts": "2026-10-21T01:14:07.025Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1819502.99,
		"hash": "6beac1307522ab0c3c2daaa93f35f4e83000365ab34c4071fdeea73f40531534"
	},
	{
		"id": "53fd763e6038",
		"ts": "2026-10-21T01:14:07.262Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1347042.71,
		"hash": "53fd763e6038252e9dcdab7ac0cb2d329acecfe516f5a0855c3081acca34626c"
	},
	{
		"id": "142cdbb42841",
		"ts": "2026-10-21T01:14:07.484Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 16,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.68,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 685798.45,
		"hash": "142cdbb4284195aebedd0105b0abdc2a9a6c597b61106575d1c7a8b2630435ce"
	},
	{
		"id": "2712177f4c46",
		"ts": "2026-10-21T01:14:07.718Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4999035.4,
		"hash": "2712177f4c46941785ff2db5685446d7183aa4168ef8fae1adf710d0789ebd50"
	},
	{
		"id": "5a43b09f0443",
		"ts": "2026-10-21T01:14:07.966Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 195466.17,
		"hash": "5a43b09f044333dd7550278d4a3d30612562f4ef5056793b348576933bc42977"
	},
	{
		"id": "8bd8c2df03c8",
		"ts": "2026-10-21T01:14:08.201Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 209117.09,
		"hash": "8bd8c2df03c804703b3384100b72f19434aafc6ce0d45626d95aba43310d92f8"
	},
	{
		"id": "798df9d7176d",
		"ts": "2026-10-20T22:03:03.549Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148506970.97,
		"hash": "798df9d7176de932d975e57be781e05f89190e635e04a00b2a538c842010cd28"
	},
	{
		"id": "b1d462d6ce70",
		"ts": "2026-10-20T22:03:03.869Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 16434071.08,
		"hash": "b1d462d6ce70621353c85615adae91d6993bb0ab6572ad4f462ce39c56cbfd22"
	},
	{
		"id": "99a4fc6b4629",
		"ts": "2026-10-20T22:03:04.129Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 271069.94,
		"hash": "99a4fc6b4629cd53e31c0a2e560d8b5163718d0926d9f6c6667639f5b1a87e2d"
	},
	{
		"id": "fc22b0311b7f",
		"ts": "2026-10-20T22:03:04.402Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 40863574.06,
		"hash": "fc22b0311b7ffea672a1c7280446c9b809e2ccc959dcec19316056d5783ac20f"
	},
	{
		"id": "d5c902ce68e9",
		"ts": "2026-10-20T22:03:04.648Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4744468.67,
		"hash": "d5c902ce68e97ebe2ce7f3c6c4aa7a79fa9327be63dcf9d30a64fe5ab3db64be"
	},
	{
		"id": "23f8688ed32b",
		"ts": "2026-10-20T22:03:04.902Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1170516.91,
		"hash": "23f8688ed32bb66b54b11ed9aae19aac48ff24637ce469c1f8037ba5182d9f27"
	},
	{
		"id": "fff23f632d9f",
		"ts": "2026-10-20T22:03:05.140Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 40863574.06,
		"hash": "fff23f632d9f3ae09b0a11061bbaf5719dd107343d226734e60c8c03a876eb2b"
	},
	{
		"id": "035eb3cb1026",
		"ts": "2026-10-20T22:03:05.384Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2542540.47,
		"hash": "035eb3cb102614f9c64810dfdef1e46398c214c6a535187430622a91f4c7e720"
	},
	{
		"id": "5a9040330b73",
		"ts": "2026-10-20T22:03:05.624Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1460288.6,
		"hash": "5a9040330b7333623c6ae3288b7d26e2ad4fe9bf9e0aef71e4b2f7cad3ad2996"
	},
	{
		"id": "18caef6aa37c",
		"ts": "2026-10-20T22:03:05.882Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 376854.29,
		"hash": "18caef6aa37cc44c24b415fec43ebbe8b8cc40ea0761cc70c554b04992f6c5f1"
	},
	{
		"id": "6baa0b7b8971",
		"ts": "2026-10-20T22:03:06.110Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1816719.97,
		"hash": "6baa0b7b897171c29fb9d990fb1317006d7ee655ae107298d68406de2e65c152"
	},
	{
		"id": "5ab4a3ebcd10",
		"ts": "2026-10-20T22:03:06.332Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1967890.17,
		"hash": "5ab4a3ebcd10b2aacfbe4aac1c5e71b407c23318dcd97adfa0ed0e6b49b7c165"
	},
	{
		"id": "736ff17222e9",
		"ts": "2026-10-20T22:03:06.583Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 3426605.22,
		"hash": "736ff17222e94d62b6832898420a04db639922e28ecc8d2a11cc82f9f34beb61"
	},
	{
		"id": "982344391f5f",
		"ts": "2026-10-20T22:03:06.805Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1348482.67,
		"hash": "982344391f5f5af9d2e37a9113f3df68b4e5684a24db2c183bca5cf2ab9dc5bf"
	},
	{
		"id": "38dc45597b91",
		"ts": "2026-10-20T22:03:07.029Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 16,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.68,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 675893.33,
		"hash": "38dc45597b91442d1894d959c4b026708aee3a2d6c3fd2af97cad5a71006b96b"
	},
	{
		"id": "eb87f414cb66",
		"ts": "2026-10-20T22:03:07.256Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 447316.41,
		"hash": "eb87f414cb66569df5e63510aa1aac56b297bf401f66ebf8f93dba09c2848dd3"
	},
	{
		"id": "711720493521",
		"ts": "2026-10-20T22:03:07.479Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 195577.55,
		"hash": "711720493521f3911b25c4a3c8ab690828235194427e0913182ef37702f7ea5b"
	},
	{
		"id": "a305769e831f",
		"ts": "2026-10-20T22:03:07.705Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4970477.44,
		"hash": "a305769e831f4b7681e6251ec080e9a30327c9f1c04b010348bbb184188c5cf0"
	},
	{
		"id": "cfacd7394a31",
		"ts": "2026-10-20T22:03:07.994Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 201584.35,
		"hash": "cfacd7394a31350407328b8a148006e6c6586c37a241d540c004f21f5738481a"
	},
	{
		"id": "47c1ee9f04fc",
		"ts": "2026-10-20T18:17:36.460Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148545761.6,
		"hash": "47c1ee9f04fc931cc92f394d1ceee8d27faa6a1ed0cd90b1925a04fb539f4acf"
	},
	{
		"id": "55d9e9563a2a",
		"ts": "2026-10-20T18:17:36.767Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 16354335.54,
		"hash": "55d9e9563a2a833c2687daff1c50ebc7cd0fe6cdb95d274fefe5ebbbf8c7735b"
	},
	{
		"id": "bbaaeb0463e4",
		"ts": "2026-10-20T18:17:37.020Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 270222.33,
		"hash": "bbaaeb0463e4e281b804f070a5c0b65c3e0262bca4af8186a340d761ccbcbeb3"
	},
	{
		"id": "f8bf5ef895b0",
		"ts": "2026-10-20T18:17:37.508Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 40073105.54,
		"hash": "f8bf5ef895b0c3d84d4a4532f0d4d25604987135c7d77702762a3416cfd1aee4"
	},
	{
		"id": "5b9f1f5fe81b",
		"ts": "2026-10-20T18:17:37.815Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4722802.81,
		"hash": "5b9f1f5fe81b348e0d691f8eb3c62035616d0e686711eead8cb9ff512a49d7d8"
	},
	{
		"id": "6406184d4a3a",
		"ts": "2026-10-20T18:17:38.091Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1163416.18,
		"hash": "6406184d4a3a7b69dd2e258d4b41661ebdb38279f1fa08c75d3521398ecaf454"
	},
	{
		"id": "d0f464e3d99b",
		"ts": "2026-10-20T18:17:38.343Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 40073105.54,
		"hash": "d0f464e3d99bfa1460bb11f2a08460aa4ca70327c7d3b08c267b5a994a545ca5"
	},
	{
		"id": "3903a899ca93",
		"ts": "2026-10-20T18:17:38.585Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2976623.24,
		"hash": "3903a899ca931077c164c54b2b486a85394824270f50439fc0d08afade161920"
	},
	{
		"id": "99d49677d1c0",
		"ts": "2026-10-20T18:17:38.842Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1462937.89,
		"hash": "99d49677d1c0e8ae0e9406a3492e40a25152fe89715ff57089fc997eb5bd20cf"
	},
	{
		"id": "f6e93e40d8a8",
		"ts": "2026-10-20T18:17:39.118Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1816262.97,
		"hash": "f6e93e40d8a89ccf46cd156e8a463397faa8a94a86cbc72448c287fbc5acdbfe"
	},
	{
		"id": "8d6c78f03ffe",
		"ts": "2026-10-20T18:17:39.333Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 372277.74,
		"hash": "8d6c78f03ffec1b25e2c5e0e47fa23870bd3cbac9b25b024aac26e5851fc3e16"
	},
	{
		"id": "fdf5f513b242",
		"ts": "2026-10-20T18:17:39.556Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 16,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.68,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 663322.53,
		"hash": "fdf5f513b242058c10e04f3fc7a20ced753d3a96fad0b29a6cf44f17b016754b"
	},
	{
		"id": "022b241cd931",
		"ts": "2026-10-20T18:17:39.961Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5056428.84,
		"hash": "022b241cd931a590903e1855df5dec018b1d354956cf41bc152cecdbb31ff8c8"
	},
	{
		"id": "16b22b460b7b",
		"ts": "2026-10-20T18:17:40.231Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1343091.91,
		"hash": "16b22b460b7b8f2dfcf4fcf09a9bac91776a4d194180dc2b4591eb544f01eb4c"
	},
	{
		"id": "0b132e4e5af2",
		"ts": "2026-10-20T18:17:40.467Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 3454370.16,
		"hash": "0b132e4e5af2c34074f072294e9144962008627146bc2a881f50af2c7c96b4a5"
	},
	{
		"id": "e434dc513bbc",
		"ts": "2026-10-20T18:17:40.721Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 196220.53,
		"hash": "e434dc513bbcfced8c04519d6985adbeb33ec8ba82fda1f6bb78fcde2eba5300"
	},
	{
		"id": "1e35c7ca75bc",
		"ts": "2026-10-20T18:17:40.941Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 455505.71,
		"hash": "1e35c7ca75bca9c8d66302bb6944195b1fa726df29f992cc09b0d31380580260"
	},
	{
		"id": "a54c9876b23c",
		"ts": "2026-10-20T18:17:41.173Z",
		"symbol": "PRXVT",
		"token": "0x4b5D32A07b8d3eC5D6928cAa30196f8dd6a7C5A9",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 291125.99,
		"hash": "a54c9876b23ca7a3417a0cc51d547c765fda2524f968f355ef56fead00b13c3c"
	},
	{
		"id": "c2e240f10566",
		"ts": "2026-10-20T18:17:41.402Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 18029921.73,
		"hash": "c2e240f1056623e631d18192c443cefc910e0e60ca4e095f16597b5b162bbe80"
	},
	{
		"id": "a28d10500256",
		"ts": "2026-10-20T13:16:43.649Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146346628.2,
		"hash": "a28d10500256112a793561719d270125d559a0ea00c88394ddd1159697e26b59"
	},
	{
		"id": "3bbb9781c39e",
		"ts": "2026-10-20T13:16:44.208Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 16039725.93,
		"hash": "3bbb9781c39ecf0ec2ae84727e5868cc9070d065b0b0e57baf6858bd99757b0b"
	},
	{
		"id": "594bdc6e13fc",
		"ts": "2026-10-20T13:16:44.651Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 265568.84,
		"hash": "594bdc6e13fc658db9af99d25bc2bd3d3c559ccfbbd7eb4a75af1560616bbcfc"
	},
	{
		"id": "5e8c7cee0fb8",
		"ts": "2026-10-20T13:16:44.897Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 38204915.98,
		"hash": "5e8c7cee0fb8b35e27ff665d73fd9bb3f322dc8294ed86462482be991f1ac08f"
	},
	{
		"id": "f3380bc659e3",
		"ts": "2026-10-20T13:16:45.103Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4617379.85,
		"hash": "f3380bc659e3552cffbb243def523542126cb1278a32decc7d4656fe1359f31f"
	},
	{
		"id": "d523b90699ff",
		"ts": "2026-10-20T13:16:45.317Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1130158.32,
		"hash": "d523b90699ffc4a50838651bc745b42d69c9d29c5813941af5bd09ff888fd837"
	},
	{
		"id": "1492b1c924e3",
		"ts": "2026-10-20T13:16:45.598Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 38204915.22,
		"hash": "1492b1c924e37db9bf633e7dabe4ae1f42c53e4539b27189614ff499e8d01a32"
	},
	{
		"id": "44db69404568",
		"ts": "2026-10-20T13:16:45.836Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2736443.26,
		"hash": "44db69404568a2757df1c376abfc416b1ba543ed97aa8fb23886c7878b85c9c6"
	},
	{
		"id": "6c9c60a5815b",
		"ts": "2026-10-20T13:16:46.049Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1292238.26,
		"hash": "6c9c60a5815bcd76665993f85a786de047b901e817e382b4c2398e89ce38ba98"
	},
	{
		"id": "f0f0152b082c",
		"ts": "2026-10-20T13:16:46.290Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1805619.36,
		"hash": "f0f0152b082c98a583cc1d393d9e9e4ff402991b410e6e47e56c377f9dee7264"
	},
	{
		"id": "c7914c2480df",
		"ts": "2026-10-20T13:16:46.484Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 16,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.68,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 623556.94,
		"hash": "c7914c2480df8cb5b341dff413ecc3c6ac25c39c6d5b90aa3149faee4eae4f1f"
	},
	{
		"id": "9be0ebd0f006",
		"ts": "2026-10-20T13:16:46.679Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 454941.3,
		"hash": "9be0ebd0f00603caaf2e08a06f72400cb26e4ebc66080cf99e1013652f6d56c9"
	},
	{
		"id": "6ef820b030ca",
		"ts": "2026-10-20T13:16:46.871Z",
		"symbol": "PRXVT",
		"token": "0x4b5D32A07b8d3eC5D6928cAa30196f8dd6a7C5A9",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 285819.07,
		"hash": "6ef820b030ca6e7d5b0d78d2f14218fd338111947e00755eeec697b2e2f45e49"
	},
	{
		"id": "93090828e350",
		"ts": "2026-10-20T13:16:47.067Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 446821.43,
		"hash": "93090828e35077047b45130bec40ba9e3956395cb6fc0e06d67777b75c859f7d"
	},
	{
		"id": "bb8ea2e2353e",
		"ts": "2026-10-20T13:16:47.271Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 3271482.98,
		"hash": "bb8ea2e2353e198c4305bbd63056901b8b1b70f09836a5e5dc2815ca0e04fe25"
	},
	{
		"id": "0b45a7cf5b34",
		"ts": "2026-10-20T13:16:47.478Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 200545.48,
		"hash": "0b45a7cf5b34e1b158112a7f9f46e3d8929d5f8ac8688f65d70c98a26459fa82"
	},
	{
		"id": "d84ad041946b",
		"ts": "2026-10-20T13:16:47.677Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1300069.58,
		"hash": "d84ad041946b874049c51fda8fb1291a9bc594068452a62d869c2ba34847d811"
	},
	{
		"id": "10a87615526a",
		"ts": "2026-10-20T13:16:47.880Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 197412.17,
		"hash": "10a87615526a269e788be2a2078b579dff927bb8db72a8ea058d9b388b7dd6f7"
	},
	{
		"id": "4c1d69bee507",
		"ts": "2026-10-20T13:16:48.078Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5012319.54,
		"hash": "4c1d69bee50741c2772c1481201e1081e79c673dbac8aeb8ee1bbd864a2d03fc"
	},
	{
		"id": "6d08bc0fa116",
		"ts": "2026-10-20T07:05:36.284Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146151944.83,
		"hash": "6d08bc0fa1162a412d9840aa0b2e06101e18b769b29d3f0b71dcff30e31fa97f"
	},
	{
		"id": "57f18495244b",
		"ts": "2026-10-20T07:05:36.545Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 18162805.04,
		"hash": "57f18495244b3ee2eb0972ba920d88482f96e785bda9e32f9eb0af0a407647a1"
	},
	{
		"id": "cc314d2586af",
		"ts": "2026-10-20T07:05:36.800Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 772926.1,
		"hash": "cc314d2586af37406015db7c8ae77de976636b47e027d5525f8c6364400f3593"
	},
	{
		"id": "a0b41fad3ada",
		"ts": "2026-10-20T07:05:37.076Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 34583512.49,
		"hash": "a0b41fad3ada656a567f3dbfc411de88805d88afe16319a76b9fb48ceb926052"
	},
	{
		"id": "2cef2e3fb4c4",
		"ts": "2026-10-20T07:05:37.352Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4613256.24,
		"hash": "2cef2e3fb4c4347dee2abe943b4f4a25aed108dbb25c4f83a588f3c0a8ff74cb"
	},
	{
		"id": "a7017bc6460c",
		"ts": "2026-10-20T07:05:37.622Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1135015.74,
		"hash": "a7017bc6460c2916e8ff953ed92a01f10eceb898a395680144aff953c98bf373"
	},
	{
		"id": "f06524437044",
		"ts": "2026-10-20T07:05:37.868Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34583512.49,
		"hash": "f065244370443a83fa29521c743eda25fa7d029b96589bb82b84b3021ce7514b"
	},
	{
		"id": "fb9124243ab8",
		"ts": "2026-10-20T07:05:38.147Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2740895.24,
		"hash": "fb9124243ab829818c522a503831c70e197590b0bf409e6c0ea6971c5980b4aa"
	},
	{
		"id": "ea5fa9c13b53",
		"ts": "2026-10-20T07:05:38.448Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1331342.3,
		"hash": "ea5fa9c13b53b3ed37e824d488b91c000c00543925eea60c16f6ed6e4e0a9ee1"
	},
	{
		"id": "ac8bc273c7c4",
		"ts": "2026-10-20T07:05:38.724Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1800058.62,
		"hash": "ac8bc273c7c449e1e8672ecae295be4a68c1a4f78cc427697889146f9e33414b"
	},
	{
		"id": "b6f47b904857",
		"ts": "2026-10-20T07:05:38.955Z",
		"symbol": "PRXVT",
		"token": "0x4b5D32A07b8d3eC5D6928cAa30196f8dd6a7C5A9",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 285613.65,
		"hash": "b6f47b904857110211e56a5063ba477d8ad83551f34700ca72715c1e9f82fbde"
	},
	{
		"id": "78ca0978331a",
		"ts": "2026-10-20T07:05:39.197Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 3344477.23,
		"hash": "78ca0978331a44d52219e7283c2f89e2768b532ff93575c7a1f0acc4ed208055"
	},
	{
		"id": "f7967e5aee8a",
		"ts": "2026-10-20T07:05:39.438Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1936155.82,
		"hash": "f7967e5aee8a334833105d4297e9ff428a3acb6b7b4e01b01ac443affd47afef"
	},
	{
		"id": "9a7cb8f3a5dc",
		"ts": "2026-10-20T07:05:39.669Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1305393,
		"hash": "9a7cb8f3a5dc90492eeed61c854c46f634644481d56313f54b255665ad69cf7f"
	},
	{
		"id": "ee2119ce3367",
		"ts": "2026-10-20T07:05:39.900Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 200768.71,
		"hash": "ee2119ce33672ab9a3639ebf724956b8230908dbf836a67a312e0d8cd58453f1"
	},
	{
		"id": "1b977a655a83",
		"ts": "2026-10-20T07:05:40.138Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 449582.18,
		"hash": "1b977a655a8349fe12672ccc613a23545a7191e63fd70e6ae6a3c730b7d6a228"
	},
	{
		"id": "871b90089122",
		"ts": "2026-10-20T07:05:40.368Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 16,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.68,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 615042.39,
		"hash": "871b90089122a04a34e16dd98f1d1210e9552afb3ee04b0cd712d5e3c38ed333"
	},
	{
		"id": "337eca8f1e74",
		"ts": "2026-10-20T07:05:40.599Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4963277.55,
		"hash": "337eca8f1e7429fa5878da87041e0f204d3801696f3c4636dea412256404613f"
	},
	{
		"id": "53ba8c2cbafe",
		"ts": "2026-10-20T07:05:40.828Z",
		"symbol": "MSTRc",
		"token": "0xb2000000000000000000004884b426556b92883d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1492357.69,
		"hash": "53ba8c2cbafef445a393e814dca0b268003de0d751e06b87063785de6c57427c"
	},
	{
		"id": "ce88991e8f6b",
		"ts": "2026-10-20T01:31:25.669Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145412453.21,
		"hash": "ce88991e8f6bc51df01f5cea56006876ca1fd0a1a7a1539584daf2475ae4c549"
	},
	{
		"id": "b9acc4c2ebc7",
		"ts": "2026-10-20T01:31:26.174Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 18122805.19,
		"hash": "b9acc4c2ebc755a5d8a6487e87726054714b6fb8f88b015debed8e2a32e2fcdd"
	},
	{
		"id": "8c9679ff4dab",
		"ts": "2026-10-20T01:31:26.458Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 770718.31,
		"hash": "8c9679ff4dab2564fd20118192d0c92a7e2966469c785acdf336923da03dacef"
	},
	{
		"id": "75280ce4c2d6",
		"ts": "2026-10-20T01:31:26.751Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 33983269.93,
		"hash": "75280ce4c2d65a51b882691873922f3bafb93f8dfa2f1de767389d5d2816ca6b"
	},
	{
		"id": "396e2023953f",
		"ts": "2026-10-20T01:31:27.021Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4584441.97,
		"hash": "396e2023953f5cb7a4fc25864759145f065033ba6d64655d4baa5a2fca1cadac"
	},
	{
		"id": "836989b5b5f5",
		"ts": "2026-10-20T01:31:27.289Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1125669.82,
		"hash": "836989b5b5f52ecf606a0a73b195886ed66497bdf38bd0d8ba08cdf70dc884f1"
	},
	{
		"id": "c7bce83a2a94",
		"ts": "2026-10-20T01:31:27.546Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33983269.68,
		"hash": "c7bce83a2a94a5a656cc10687b17eb1d1c807023a46be9abe2e71732d4340fc5"
	},
	{
		"id": "60b355e64eab",
		"ts": "2026-10-20T01:31:27.840Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2618287.74,
		"hash": "60b355e64eab5ade17d421b2ccdac0ad39714756bd4a82d715dcba8bdf6f20de"
	},
	{
		"id": "2380415eae0d",
		"ts": "2026-10-20T01:31:28.085Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1384937.18,
		"hash": "2380415eae0dfd5068b8305608b31c66229f5bfaa01013f95bf3bc04b3bcb7bc"
	},
	{
		"id": "27c3b6bf88b0",
		"ts": "2026-10-20T01:31:28.339Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1811757.5,
		"hash": "27c3b6bf88b0e40f8b07a2dc749412539ffcee4167edf2e36e904326dff96bf3"
	},
	{
		"id": "f8b4cecbf739",
		"ts": "2026-10-20T01:31:28.559Z",
		"symbol": "PRXVT",
		"token": "0x4b5D32A07b8d3eC5D6928cAa30196f8dd6a7C5A9",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 289873.59,
		"hash": "f8b4cecbf7399009154a7879e8b48ee5a2ba1cd29f4d08b2661341c127ea8937"
	},
	{
		"id": "63da129fa6d4",
		"ts": "2026-10-20T01:31:28.796Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 3353022.14,
		"hash": "63da129fa6d483a55c6b371972d3f4f2f60fd00ff2d6ea2a715aa078eadce153"
	},
	{
		"id": "01bc483a59a0",
		"ts": "2026-10-20T01:31:29.018Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1993184.09,
		"hash": "01bc483a59a0d3bdd9d81384801b5a8b4d5491bdfd285aeec38ec2062a62d462"
	},
	{
		"id": "9d4c5fed30cf",
		"ts": "2026-10-20T01:31:29.266Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 220412.62,
		"hash": "9d4c5fed30cfb479cfddc190454a1e6199d8b2fef29088128ea037ff6722f1a6"
	},
	{
		"id": "bf51d3482d3a",
		"ts": "2026-10-20T01:31:29.519Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 17342417.93,
		"hash": "bf51d3482d3af396409a8fa67ce5f3ce5fc6796bae314028104c85eccb2a5d81"
	},
	{
		"id": "9f638b837e7f",
		"ts": "2026-10-20T01:31:29.784Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1299808.04,
		"hash": "9f638b837e7fce1cc4bb242f8b290ee2d3672d17989b8ef3adb334b5cd2341a0"
	},
	{
		"id": "533bb90a7c63",
		"ts": "2026-10-20T01:31:30.008Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 323254.91,
		"hash": "533bb90a7c63a02911cfdfe3f4e47bb4fc0947a4bb4e8487cc504d85d0562c53"
	},
	{
		"id": "b1e47f634c1a",
		"ts": "2026-10-20T01:31:30.246Z",
		"symbol": "Paper",
		"token": "0x6aeDAbF7D4E0302d776FbF8EB11CFB1993764b07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10302060.84,
		"hash": "b1e47f634c1add195c4ea0c9ba825c22d8413c59a842d556b78e05560783ca7e"
	},
	{
		"id": "04822d0c6e2a",
		"ts": "2026-10-20T01:31:30.468Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3991335.68,
		"hash": "04822d0c6e2abb79202b2d5f6896ed1e8e02c8cba3f89cdecfc67329e39021da"
	},
	{
		"id": "7de0f2f98625",
		"ts": "2026-10-19T22:47:27.188Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146562885.38,
		"hash": "7de0f2f98625076b446ca796cb58962c1ef3143e6e15ffa0f83d21494eebab61"
	},
	{
		"id": "02dc06f39e83",
		"ts": "2026-10-19T22:47:27.502Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 18513858.01,
		"hash": "02dc06f39e834eac1b1814d30a498af1d949945dc7543c6a71f9700e2dd49a0b"
	},
	{
		"id": "67d83b256a1f",
		"ts": "2026-10-19T22:47:27.809Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 785036.34,
		"hash": "67d83b256a1f909cbcc185d175679f67d8f2001f057901bfa6ec18676b31e917"
	},
	{
		"id": "2b337d691f1d",
		"ts": "2026-10-19T22:47:28.087Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 34209888.06,
		"hash": "2b337d691f1dd621d2bcb0d7d4b3de3334b9ad460af30a9311569fa9a67412f6"
	},
	{
		"id": "9cba91440842",
		"ts": "2026-10-19T22:47:28.351Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4641628.19,
		"hash": "9cba91440842e3eca231f84e1db65ba9b3e9b184404de241c6c797350465804d"
	},
	{
		"id": "1f5487cd9bf9",
		"ts": "2026-10-19T22:47:28.617Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1141683.03,
		"hash": "1f5487cd9bf9e78ea52743727c35099729891170f95780b912dd73b26c2bcf8c"
	},
	{
		"id": "0406020c9cd8",
		"ts": "2026-10-19T22:47:28.880Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34209887.34,
		"hash": "0406020c9cd86e7c6dc6ef01f88d2b3106a522da7bf2d9a5a0715522424be63c"
	},
	{
		"id": "a22f5ff7b021",
		"ts": "2026-10-19T22:47:29.350Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2721333.33,
		"hash": "a22f5ff7b021d68e08d6f23bfe8c381e92744922c07c1c721ddc2018a9d8bf15"
	},
	{
		"id": "60329c84df93",
		"ts": "2026-10-19T22:47:29.616Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1301758.12,
		"hash": "60329c84df93fca445d77e8728285d9c88ec1e8674f034901152b52d0bb068a2"
	},
	{
		"id": "8ae05d7b2a14",
		"ts": "2026-10-19T22:47:29.887Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1806524.76,
		"hash": "8ae05d7b2a1481065f7e368ec8af4f17ac1e35c920daf82c16bbf3657997e923"
	},
	{
		"id": "6e76b7106d20",
		"ts": "2026-10-19T22:47:30.142Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 3402656.28,
		"hash": "6e76b7106d20639e9225a0b326bad0717ae5d84eabad51f96693fe580a4207b9"
	},
	{
		"id": "898454c0a9a6",
		"ts": "2026-10-19T22:47:30.387Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 17398689.29,
		"hash": "898454c0a9a682096a25b268f8149d8c237251de546bf43aa972df165da96e50"
	},
	{
		"id": "e792779711a9",
		"ts": "2026-10-19T22:47:30.630Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2019424.52,
		"hash": "e792779711a92ca6ccedb384fb5442f6d1dcca976affe4ac77b11e2132e30eba"
	},
	{
		"id": "48da883ba004",
		"ts": "2026-10-19T22:47:30.914Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1318734.49,
		"hash": "48da883ba004b42e37a6b370b6f9b010ea00b3b08c8a1d20de4cb540aa8c9028"
	},
	{
		"id": "0d25b09012e9",
		"ts": "2026-10-19T22:47:31.199Z",
		"symbol": "PRXVT",
		"token": "0x4b5D32A07b8d3eC5D6928cAa30196f8dd6a7C5A9",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 308659.36,
		"hash": "0d25b09012e92b6fb7651a316583697657dbdffec03b040f2179ab2850273c5e"
	},
	{
		"id": "d97d620aeb47",
		"ts": "2026-10-19T22:47:31.477Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 202142.01,
		"hash": "d97d620aeb472460b3c6155722ae6890aeee8b6ce7b6be8838fe1d6282a0182e"
	},
	{
		"id": "8fac6bed0b8d",
		"ts": "2026-10-19T22:47:31.723Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4038525.29,
		"hash": "8fac6bed0b8d56666577a7c6d5fb0802e7d5b585deae6d042323cc740b7fef49"
	},
	{
		"id": "e21a3d593805",
		"ts": "2026-10-19T22:47:31.977Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 327559.47,
		"hash": "e21a3d5938050edd04ee7e13ac4388448202c55ccc12d6087ad40473a03f5aee"
	},
	{
		"id": "99334d62b106",
		"ts": "2026-10-19T22:47:32.222Z",
		"symbol": "MSTRc",
		"token": "0xb2000000000000000000004884b426556b92883d",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1135990.16,
		"hash": "99334d62b1066ffa5ecac3c9687aafaa794ba495146ed18db25e36f477e180ab"
	},
	{
		"id": "24ac067774ee",
		"ts": "2026-10-19T18:39:07.597Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146358671.02,
		"hash": "24ac067774ee4d7c50fe7628826b80ff5bf662bd172d2ef79155bec0269983e0"
	},
	{
		"id": "e7c9b86416be",
		"ts": "2026-10-19T18:39:08.076Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 18178138.87,
		"hash": "e7c9b86416beb52aaaba00648e56d68aba4cbbdbf4e90f965b66e01cbd535651"
	},
	{
		"id": "6f6fb014b19f",
		"ts": "2026-10-19T18:39:08.656Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 779298.88,
		"hash": "6f6fb014b19f4ac523f677e85f6b98b8447df56939cbfd19de9759acf47ef49a"
	},
	{
		"id": "4887438c626b",
		"ts": "2026-10-19T18:39:09.031Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 33802399.05,
		"hash": "4887438c626b7520dbce64ff31fe2319cf141ef2c3c52290859cf5c646bc6658"
	},
	{
		"id": "f93bcb5e38c5",
		"ts": "2026-10-19T18:39:09.401Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4606151.73,
		"hash": "f93bcb5e38c553054c054f8bc69624a60ad294425c4bc9ec7f7a7dea66268f8a"
	},
	{
		"id": "a5d43d350afa",
		"ts": "2026-10-19T18:39:09.772Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1127948.62,
		"hash": "a5d43d350afaac9e170bbbe125ea58d0b6b3d7cfb63b8dd5e45afb84da6fe700"
	},
	{
		"id": "1834a1ad8b50",
		"ts": "2026-10-19T18:39:10.194Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33802399.05,
		"hash": "1834a1ad8b5070140f31aba9075617ecd7ea4e1833e6c74043832db03adfd200"
	},
	{
		"id": "8cfc87e2fafc",
		"ts": "2026-10-19T18:39:10.612Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2691219.95,
		"hash": "8cfc87e2fafc79c66ee445443bb2dd0d6899aac9c6bd1310f0020629ea07f381"
	},
	{
		"id": "cdb57c5facb0",
		"ts": "2026-10-19T18:39:11.115Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1784120.77,
		"hash": "cdb57c5facb0e6bfcc1d1a1d43195087f5536f5b4217485df735d53d99d217f2"
	},
	{
		"id": "5afc468dd00e",
		"ts": "2026-10-19T18:39:11.543Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1340956.5,
		"hash": "5afc468dd00e57ec185031e78976342ccbefa9dc96b7f8bf719e637e1e4628b8"
	},
	{
		"id": "0f1a3b30a235",
		"ts": "2026-10-19T18:39:11.894Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 3246703.83,
		"hash": "0f1a3b30a235500e4c0baeae8680d724222bebc0be4c24d0fd7cb770cb0ab514"
	},
	{
		"id": "65444e10621c",
		"ts": "2026-10-19T18:39:12.271Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1312296.69,
		"hash": "65444e10621c024d4534a211d2d0471b060d9ee6d9f2f3f3fbe1ab19d29889ac"
	},
	{
		"id": "7165149a70db",
		"ts": "2026-10-19T18:39:12.642Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2021762.89,
		"hash": "7165149a70db6f12d4c06c76898bf0095da9da8aacfce9aae957bebe9692a44c"
	},
	{
		"id": "51da378dec0a",
		"ts": "2026-10-19T18:39:13.004Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 17274316.02,
		"hash": "51da378dec0ab5365ccbcb25538ee18599449b096a23f6ee5f448e39512b2174"
	},
	{
		"id": "1d42dcd651f4",
		"ts": "2026-10-19T18:39:13.471Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 203269.43,
		"hash": "1d42dcd651f420181a1719c2f5e298e736f7818bf19ad191bf741e3cc4f40854"
	},
	{
		"id": "aaa95ff9e1b4",
		"ts": "2026-10-19T18:39:13.821Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4013217.3,
		"hash": "aaa95ff9e1b43cf25a93fffdbc2161b938d22f05469ada8a11d8b13bd6c9749f"
	},
	{
		"id": "fbc46e5ec2a8",
		"ts": "2026-10-19T18:39:14.170Z",
		"symbol": "Paper",
		"token": "0x6aeDAbF7D4E0302d776FbF8EB11CFB1993764b07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10302246.84,
		"hash": "fbc46e5ec2a85bbda238443abf9c9563a0d60b86da27898ca403fc2060debf52"
	},
	{
		"id": "eb9ae40299d0",
		"ts": "2026-10-19T18:39:14.546Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 194922.85,
		"hash": "eb9ae40299d093d6e2cebbc93724be67f470cd9d1a7862e0d5789be3e8c7e70e"
	},
	{
		"id": "c13193ba5f71",
		"ts": "2026-10-19T18:39:14.918Z",
		"symbol": "MSTRc",
		"token": "0xb2000000000000000000004884b426556b92883d",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1081340.55,
		"hash": "c13193ba5f7134072c2c35c77bad37f657d4e7f6644e4e987ca6609fd8d3ce1c"
	},
	{
		"id": "313216786e5f",
		"ts": "2026-10-19T11:59:35.279Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147777172.49,
		"hash": "313216786e5f5b1e67652863c32447c389795d3454c50d43ce0d5aa4d11fda1a"
	},
	{
		"id": "dde7bf191b4c",
		"ts": "2026-10-19T11:59:35.647Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 18345011.89,
		"hash": "dde7bf191b4cdc5bde77c65f1c0b65529bd2e24aadee9e5ca3c75f91754c3437"
	},
	{
		"id": "0495139d1f42",
		"ts": "2026-10-19T11:59:35.848Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 789013.05,
		"hash": "0495139d1f4253645ef4ae27676d83db10d5de693012718ec0c2528c712fc468"
	},
	{
		"id": "50f0eafc96a4",
		"ts": "2026-10-19T11:59:36.051Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 35031603.69,
		"hash": "50f0eafc96a4424b00d6dff479b64c37d2312b88e519927a8725519454df95f3"
	},
	{
		"id": "fa5f542ec4fb",
		"ts": "2026-10-19T11:59:36.244Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4644483.74,
		"hash": "fa5f542ec4fb725b4fcc50f9a12fc61d417f2e57247fe58076b4a6d6147c35d7"
	},
	{
		"id": "4fe0941dd540",
		"ts": "2026-10-19T11:59:36.459Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1146495.35,
		"hash": "4fe0941dd540584500b38919a09ee47e82b0feb94c6acabf6e3b04d47a9919bd"
	},
	{
		"id": "2bd972f678fd",
		"ts": "2026-10-19T11:59:36.658Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35031603.69,
		"hash": "2bd972f678fdf6e7b42db2758329dae08c35134b9ef34d9eec676057eb9b97f1"
	},
	{
		"id": "fc7bcd2b6200",
		"ts": "2026-10-19T11:59:36.877Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2737069,
		"hash": "fc7bcd2b620046265bf7cfff02ced6867bb54cf9797c77e7d489b81cccd10360"
	},
	{
		"id": "4b2bd24b7160",
		"ts": "2026-10-19T11:59:37.178Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1758115.6,
		"hash": "4b2bd24b7160623f68b736604589eca3f1d0216cde7041f3860fcd16d554ccad"
	},
	{
		"id": "1c9de4582de7",
		"ts": "2026-10-19T11:59:37.392Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1324973.22,
		"hash": "1c9de4582de7d3579dc9eab3a5c2d7e84bde2ec3d658c1f2d6063e39f0c0c1b0"
	},
	{
		"id": "a352dcd81fcf",
		"ts": "2026-10-19T11:59:37.600Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 17249694.01,
		"hash": "a352dcd81fcf8b813ad812c8219a328cdd5fa249e0ba727e6db4b3f90d40065b"
	}
]
