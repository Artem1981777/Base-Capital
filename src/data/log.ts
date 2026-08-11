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
	"updatedAt": "2026-08-11T20:38:48.549Z",
	"tokensScored": 9237,
	"verdictsIssued": 9237,
	"safe": 8060,
	"risky": 685,
	"likelyRug": 492,
	"ticks": 560
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "ea5a32a86dac",
		"ts": "2026-08-11T20:38:44.577Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111985781.72,
		"hash": "ea5a32a86dac53bc966305ae796c13da765f7faab60bcd85b8cf9d3070e25943"
	},
	{
		"id": "e08034c3a911",
		"ts": "2026-08-11T20:38:45.028Z",
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
		"liquidityUsd": 17012689.39,
		"hash": "e08034c3a911108667cca04e191d66252d08cd382d41c35b03be796c74c30720"
	},
	{
		"id": "5fd813fa00c1",
		"ts": "2026-08-11T20:38:45.273Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 1021808.74,
		"hash": "5fd813fa00c13d7e4be8090201154067a577319b5c215e7fd2badc41e47c8772"
	},
	{
		"id": "946c9b931cec",
		"ts": "2026-08-11T20:38:45.514Z",
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
		"liquidityUsd": 26888150.8,
		"hash": "946c9b931cec5b56ab15cf6d9340790e2d2d4bb77769351be75d643c0b84e902"
	},
	{
		"id": "2b43b15e8aec",
		"ts": "2026-08-11T20:38:45.748Z",
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
		"liquidityUsd": 4043261.27,
		"hash": "2b43b15e8aec557e2b74ca358095d2867d518a8ca45b7d9ff81c65c18d2533e0"
	},
	{
		"id": "019940426d1f",
		"ts": "2026-08-11T20:38:45.989Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904051.78,
		"hash": "019940426d1f4f50014100c0cdfe812c55c91c86903a56c26064ede68e251720"
	},
	{
		"id": "35150e43d984",
		"ts": "2026-08-11T20:38:46.238Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26888150.8,
		"hash": "35150e43d98453d50c76f072ff9c2017a09baf4810ece36f94482f37205c59b3"
	},
	{
		"id": "8e56273fccab",
		"ts": "2026-08-11T20:38:46.481Z",
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
		"liquidityUsd": 4473985.7,
		"hash": "8e56273fccabdde0786dc0b1d363fc46a1ee2323250a446f008ed5eb556122a7"
	},
	{
		"id": "1e28f614b5c1",
		"ts": "2026-08-11T20:38:46.718Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4116319.62,
		"hash": "1e28f614b5c19b5b708aa24216c8e18f9b5dfbee833b824efa1549f127612a1a"
	},
	{
		"id": "e93cb2a542da",
		"ts": "2026-08-11T20:38:46.957Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 967101.63,
		"hash": "e93cb2a542dac9c9433450323a87e2e5b19f01e01c167d5387a2c32ff7761ebe"
	},
	{
		"id": "e3e8ff0cdc83",
		"ts": "2026-08-11T20:38:47.184Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2132546.55,
		"hash": "e3e8ff0cdc832173c80049c4635f2d75bc47d760e71ba356709eea699bc87ec5"
	},
	{
		"id": "600cc9bb053f",
		"ts": "2026-08-11T20:38:47.409Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9262119.94,
		"hash": "600cc9bb053f759bcdaa6d0b2c02b4acb157b8dfa166b320d84e1f8d20e3bef9"
	},
	{
		"id": "07f9256169ec",
		"ts": "2026-08-11T20:38:47.627Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 251821.3,
		"hash": "07f9256169ec304a9d823c82ecf2670fb1d2678f612cab382be1651f15daa212"
	},
	{
		"id": "35c7fecc38f9",
		"ts": "2026-08-11T20:38:47.881Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1832464.59,
		"hash": "35c7fecc38f9c9236d723beb10abadf8a9a6f1a076bd055b84333d7176c9dc1c"
	},
	{
		"id": "6002e1f76ca9",
		"ts": "2026-08-11T20:38:48.105Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 734410.08,
		"hash": "6002e1f76ca9525f07856370581f1744b3bcdbb287cf42821df727a796abb8be"
	},
	{
		"id": "89063422923c",
		"ts": "2026-08-11T20:38:48.324Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 228447.62,
		"hash": "89063422923c29bec882d4cee78dd8792ea2fba944333b9302335faa0e014475"
	},
	{
		"id": "a12ca79fba37",
		"ts": "2026-08-11T20:38:48.548Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4359815.35,
		"hash": "a12ca79fba37ee6f511c3120e83a55ab4fe5530ea9d132617b85865f5e0e8ce1"
	},
	{
		"id": "a2557a8ead70",
		"ts": "2026-08-11T19:08:40.081Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111339888.17,
		"hash": "a2557a8ead7085848448b5006342781c30422d5b2f274b67cb3cd9d2c1ddd4fd"
	},
	{
		"id": "e8bdc54cb9e2",
		"ts": "2026-08-11T19:08:40.334Z",
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
		"liquidityUsd": 13826471.8,
		"hash": "e8bdc54cb9e26e71584770475542bab031cc2656cd45b98104a66d3baf76eeca"
	},
	{
		"id": "40874f2dea7c",
		"ts": "2026-08-11T19:08:40.586Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 1021661.18,
		"hash": "40874f2dea7c4c45518c924323014005a10fbb1b7da48908f52b18c983112705"
	},
	{
		"id": "f07eadbb956b",
		"ts": "2026-08-11T19:08:40.832Z",
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
		"liquidityUsd": 26788466.56,
		"hash": "f07eadbb956bcd59f4bd6276485e2d60dd13e8b0fab959a14020a78b6558f43c"
	},
	{
		"id": "0c2f13040d74",
		"ts": "2026-08-11T19:08:41.286Z",
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
		"liquidityUsd": 4001432.02,
		"hash": "0c2f13040d74dd48780b2ef08e4f21fb3c00cf2bdacab07d4589f791804e06b8"
	},
	{
		"id": "d4ddfb335ed8",
		"ts": "2026-08-11T19:08:41.527Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904339.32,
		"hash": "d4ddfb335ed8560d43876a4b2e71f1bf003a2a6c867dd5a35749339ef597c102"
	},
	{
		"id": "bdb148d4a658",
		"ts": "2026-08-11T19:08:41.762Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26788466.56,
		"hash": "bdb148d4a658d36b67752933d4d915b06fc42caa53d658cdf27064f515d8517b"
	},
	{
		"id": "e3e264f33305",
		"ts": "2026-08-11T19:08:42.001Z",
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
		"liquidityUsd": 4436795.88,
		"hash": "e3e264f33305b09d21240d3578ffedcec56dfffb2402d3af765ee14e00514689"
	},
	{
		"id": "fc6aefcfb36e",
		"ts": "2026-08-11T19:08:42.246Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4110036.76,
		"hash": "fc6aefcfb36ea33582a108628a9d8548c3663b8894a8bc211f16544ce4eab13e"
	},
	{
		"id": "7c00b5660c15",
		"ts": "2026-08-11T19:08:42.482Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 967437.2,
		"hash": "7c00b5660c153d9f228af163124650ccc0c39ae449958908e1bf73853bdeca59"
	},
	{
		"id": "f7edf7dbfb68",
		"ts": "2026-08-11T19:08:42.698Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2085888.96,
		"hash": "f7edf7dbfb68ea06c4f1760fdc1c84c87f003425b9528533e7827f2aa6ba0727"
	},
	{
		"id": "9c3a990bf595",
		"ts": "2026-08-11T19:08:42.916Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 252161.51,
		"hash": "9c3a990bf5952ba6132f614c7b49c6fe96c4d90b8a5379cfd851c2050e885302"
	},
	{
		"id": "3e0dc2f5fd0a",
		"ts": "2026-08-11T19:08:43.139Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9179179.59,
		"hash": "3e0dc2f5fd0a49b25df81cf9518cbee2d70151b8cf2bf46340f124ba373e1d54"
	},
	{
		"id": "261e73c84d3c",
		"ts": "2026-08-11T19:08:43.366Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1824471.78,
		"hash": "261e73c84d3c81f4468bf0fc8b1c3b8434133366c7368b3fb9769170df1745ad"
	},
	{
		"id": "02ccf56e7edf",
		"ts": "2026-08-11T19:08:43.586Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 705064.32,
		"hash": "02ccf56e7edf3ee8236db3f3397c9a7386573011ebeca6115dcd34a387577244"
	},
	{
		"id": "cf89f3e00fcc",
		"ts": "2026-08-11T19:08:43.803Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4326322.53,
		"hash": "cf89f3e00fcc48c662b6baf68e67eb82a8f3e4d8aa13a1263b45ead627478ae8"
	},
	{
		"id": "e8849035d501",
		"ts": "2026-08-11T19:08:44.026Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 228135.43,
		"hash": "e8849035d501e3fc2137c329c04cf85d098cb58515f348083dba6b3c4d48b3bc"
	},
	{
		"id": "cda8658ea5ee",
		"ts": "2026-08-11T19:08:44.254Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 813259.52,
		"hash": "cda8658ea5ee6470cb53d16032d2099fa524b14f2025c975f8240e8e9e698d00"
	},
	{
		"id": "6d64c2b69d30",
		"ts": "2026-08-11T17:58:45.242Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111319798.21,
		"hash": "6d64c2b69d307875302e8e5ca959993960f6a6e652dc3cb13a6c23a4394f4284"
	},
	{
		"id": "2eb63a1face2",
		"ts": "2026-08-11T17:58:45.502Z",
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
		"liquidityUsd": 18082906.09,
		"hash": "2eb63a1face22ab063a8816c118df8c45c5b577b9caaa31aaeb10f9d8d1b20fe"
	},
	{
		"id": "3f76d203c9aa",
		"ts": "2026-08-11T17:58:45.705Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 1021661.18,
		"hash": "3f76d203c9aa6b11717fb0de3f04db72cc659a544122d325b3a46b2ada93331e"
	},
	{
		"id": "487ecd485c38",
		"ts": "2026-08-11T17:58:45.936Z",
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
		"liquidityUsd": 26759189.52,
		"hash": "487ecd485c38c02035592dca4b96b5007cf12e4a7dd2cf402e034fb285758dcc"
	},
	{
		"id": "c938d22badef",
		"ts": "2026-08-11T17:58:46.167Z",
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
		"liquidityUsd": 4039753.91,
		"hash": "c938d22badef085e713bc47d30c84c15e644a8c13419cd4f474fa7c14f68c30a"
	},
	{
		"id": "0b1ae22e6e59",
		"ts": "2026-08-11T17:58:46.366Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904339.32,
		"hash": "0b1ae22e6e596603293ecf56e17b1ab986c946f3510d9c0dc215c30f6041bd17"
	},
	{
		"id": "05a5ffc0a4ec",
		"ts": "2026-08-11T17:58:46.553Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26759189.52,
		"hash": "05a5ffc0a4ec11b95e40d97946489c6bee7765a69bfa6eff908534833cd51c12"
	},
	{
		"id": "891037469fc5",
		"ts": "2026-08-11T17:58:46.860Z",
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
		"liquidityUsd": 4437152.23,
		"hash": "891037469fc5f58d55a67abb17a6e39c9d44bfeaae39dbfceb0419546a98197f"
	},
	{
		"id": "045407bcf768",
		"ts": "2026-08-11T17:58:47.044Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4073614.91,
		"hash": "045407bcf768cb4ab8c9b9b4f263293bc9c587ece7a3b6f381f28b58896e62f2"
	},
	{
		"id": "e0ab083edd56",
		"ts": "2026-08-11T17:58:47.226Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 968961.44,
		"hash": "e0ab083edd563cb5a949ae8fb4897ed0d7d038b0f6143f2ca1e466a32f289217"
	},
	{
		"id": "f0e309779d49",
		"ts": "2026-08-11T17:58:47.404Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2091381.95,
		"hash": "f0e309779d490cff49a8e82c2a97bbe881309e3fdf79b8a2d1fd882c3224923d"
	},
	{
		"id": "e847289f74e9",
		"ts": "2026-08-11T17:58:47.647Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 252699.71,
		"hash": "e847289f74e95f98f17ffb785e60ad054a622c2b49b849eeffd0a69387a54b93"
	},
	{
		"id": "5e78418063e2",
		"ts": "2026-08-11T17:58:47.833Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1835408.55,
		"hash": "5e78418063e2b4c76867866294d5271b0b42db5d2d4fde26f67507bd5e1a42e6"
	},
	{
		"id": "6bee8fecad73",
		"ts": "2026-08-11T17:58:48.027Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4346952.88,
		"hash": "6bee8fecad73212d4fad6adb91e296fd5c165a6a3778c27839903fd9c947263f"
	},
	{
		"id": "ba36c883d059",
		"ts": "2026-08-11T17:58:48.208Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9193584.87,
		"hash": "ba36c883d05917bf62a2021189f3b1cce357df644e591e68a2893fff0e346841"
	},
	{
		"id": "6e6e30783dcb",
		"ts": "2026-08-11T17:58:48.390Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 714700.68,
		"hash": "6e6e30783dcb4713a891fdc6ec1d0fdda5285cd704e2e1a21fbadd2701c3dc1a"
	},
	{
		"id": "d504ceddf8a0",
		"ts": "2026-08-11T17:58:48.701Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 812119.59,
		"hash": "d504ceddf8a0722dbec8df3f67e6c43daf56044e661f62640d3047448023f72b"
	},
	{
		"id": "b428bc86efc8",
		"ts": "2026-08-11T17:58:48.894Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 465353.65,
		"hash": "b428bc86efc8e0d92a0e240ccb3d9d125f582591fcd6c256466238d1d7151c45"
	},
	{
		"id": "95b7e6ac31ec",
		"ts": "2026-08-11T16:58:11.935Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111024494.22,
		"hash": "95b7e6ac31ec85fbccb2d79651d56542c2b88d86e7093affe5c1fdece951c538"
	},
	{
		"id": "358eb067cda1",
		"ts": "2026-08-11T16:58:12.142Z",
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
		"liquidityUsd": 13835463.25,
		"hash": "358eb067cda14a722f595e4e4dbdfe9bbbf2d90cfbcabcec1121f53cd2645fbf"
	},
	{
		"id": "f249e1be7497",
		"ts": "2026-08-11T16:58:12.376Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 1028443.56,
		"hash": "f249e1be7497c28fda9a27f12f57e5ed3c57ff3b48ce0d08f0c197f306cee2a1"
	},
	{
		"id": "e78e8e91d374",
		"ts": "2026-08-11T16:58:12.585Z",
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
		"liquidityUsd": 26740534.07,
		"hash": "e78e8e91d374b507693cf3b1025e2659817d67579c9d6ebd037dde5a5e0b5604"
	},
	{
		"id": "811276b87df8",
		"ts": "2026-08-11T16:58:12.797Z",
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
		"liquidityUsd": 4042190.03,
		"hash": "811276b87df8f108b9a3ff1f27f54e1d35b00b7fb0f32c9084b040aa90d39654"
	},
	{
		"id": "ac26b31e3437",
		"ts": "2026-08-11T16:58:13.030Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904334.93,
		"hash": "ac26b31e3437a41ca674cf5b717d661e4e32e1e65e9e5f38761d6f430b24829f"
	},
	{
		"id": "1ef601d1d74d",
		"ts": "2026-08-11T16:58:13.239Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26740534.07,
		"hash": "1ef601d1d74d25629a8cea165c3d42349e73ca8e736b5dc9e1a0a97b25d024f4"
	},
	{
		"id": "2622bc553ede",
		"ts": "2026-08-11T16:58:13.446Z",
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
		"liquidityUsd": 4437127.57,
		"hash": "2622bc553ede23b0b80c6ad7c89dece4332771bf730c06e2b4ee93679f4944f8"
	},
	{
		"id": "1f4074887ee8",
		"ts": "2026-08-11T16:58:13.977Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4100980.71,
		"hash": "1f4074887ee8c4d5f9f3045189c6e9670e9018b5a1ac1a3602d17867a8b54618"
	},
	{
		"id": "c22e21bda075",
		"ts": "2026-08-11T16:58:14.194Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 974917.28,
		"hash": "c22e21bda075b7525f19e63bd1cd2675a6f811edae5813efda7ed5c3a36a38bf"
	},
	{
		"id": "d24ab3b6f4d8",
		"ts": "2026-08-11T16:58:14.402Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 251923.84,
		"hash": "d24ab3b6f4d8feb74aa2913de29ab7636fb43e1914df81e0a18d90ad096c04d7"
	},
	{
		"id": "34a040e68f3b",
		"ts": "2026-08-11T16:58:14.611Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2063725.18,
		"hash": "34a040e68f3b7b4fa3605ee8af0b02af00732570ce00e933277172402b5c17e3"
	},
	{
		"id": "1f28db87c975",
		"ts": "2026-08-11T16:58:14.823Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9212613.03,
		"hash": "1f28db87c97514e61169991640fcf643de11d809fc4bb99bb39e6d9cf8c98235"
	},
	{
		"id": "190728d7988e",
		"ts": "2026-08-11T16:58:15.038Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1829457.36,
		"hash": "190728d7988e7d6538674c81262d209cf8886a9df9892a60ddac8f8868689b7c"
	},
	{
		"id": "c08a2a4a41e5",
		"ts": "2026-08-11T16:58:15.255Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4342777.55,
		"hash": "c08a2a4a41e5ab140a05b9551d02b20ee3cc0ecaf17364359f31c6b1498f1922"
	},
	{
		"id": "e315607d335d",
		"ts": "2026-08-11T16:58:15.469Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 692475.56,
		"hash": "e315607d335d3acc826c19363d6391b4c04975922502023e36ffdfcda67dc5f0"
	},
	{
		"id": "9866cdaada48",
		"ts": "2026-08-11T16:58:15.687Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 809944.76,
		"hash": "9866cdaada480ce82fd062c37ca5c8ac8981497ed0c0e24e8e976e95621f1ce9"
	},
	{
		"id": "97ae9eb4fd4e",
		"ts": "2026-08-11T15:57:12.511Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111183179.77,
		"hash": "97ae9eb4fd4e7c917775bf25f98ea1fa3b7c76a2c384e98fd4be27b222a2c0fb"
	},
	{
		"id": "25943f7f18de",
		"ts": "2026-08-11T15:57:12.773Z",
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
		"liquidityUsd": 18712605.5,
		"hash": "25943f7f18de6f9a6a65bcba0a4d0df9400cc93620431204d91b9dd5ad10a78d"
	},
	{
		"id": "0d8f134169b7",
		"ts": "2026-08-11T15:57:13.398Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 1028443.56,
		"hash": "0d8f134169b735af9b8b82109a8a80c1fbc4dc5ce80e20a4ab4687658d4203b7"
	},
	{
		"id": "57849e3f8c71",
		"ts": "2026-08-11T15:57:13.809Z",
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
		"liquidityUsd": 26714372.74,
		"hash": "57849e3f8c71e376279e971101d131910d0088330412e5922498e964d5b14511"
	},
	{
		"id": "5cfab412a950",
		"ts": "2026-08-11T15:57:14.113Z",
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
		"liquidityUsd": 4081374.72,
		"hash": "5cfab412a950cc1fdb7edc888a1213bd019a36cad8984d55d2b2e7c8a662f5ed"
	},
	{
		"id": "664b344a83ed",
		"ts": "2026-08-11T15:57:14.365Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893968.42,
		"hash": "664b344a83ed243165c6183238bcf84d7ddd3febcb620bd298cd7f2edc345929"
	},
	{
		"id": "0f938c7ba18b",
		"ts": "2026-08-11T15:57:14.879Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26714372.74,
		"hash": "0f938c7ba18bfb4146f23ca703584cbab5de18081e0e452791446a24ce226d01"
	},
	{
		"id": "99e025ce7693",
		"ts": "2026-08-11T15:57:15.445Z",
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
		"liquidityUsd": 4421347.42,
		"hash": "99e025ce7693ed0f7cec154d8b7015e85132acc46f463d387ca6175e67e7bcfa"
	},
	{
		"id": "893fcf315e48",
		"ts": "2026-08-11T15:57:15.690Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4385991.18,
		"hash": "893fcf315e4884db89f6a1dd30cf3d3e400f690e8fb6851c4306a36d7f45fd01"
	},
	{
		"id": "21fe087515a7",
		"ts": "2026-08-11T15:57:15.934Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 980301.64,
		"hash": "21fe087515a750ca3e59ec8bc2f1dab05f5ab7fedadd064a1433075507467ff5"
	},
	{
		"id": "dfdeca05d868",
		"ts": "2026-08-11T15:57:16.158Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2088795.14,
		"hash": "dfdeca05d868cdf32d3be9fd3c3f6d02f60c66a13e0601be0a4a8df2dea7650d"
	},
	{
		"id": "309d0c30c2d2",
		"ts": "2026-08-11T15:57:16.378Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 251848.58,
		"hash": "309d0c30c2d226af70987a4f244d5d59fc083ff5dc7eb5b35cc83cd52cc78e84"
	},
	{
		"id": "e4af14267d60",
		"ts": "2026-08-11T15:57:16.600Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4322840.07,
		"hash": "e4af14267d6079ea1c320e7251b102412070eac602624b965edc0931172c2710"
	},
	{
		"id": "6207117752f1",
		"ts": "2026-08-11T15:57:16.821Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9170104.09,
		"hash": "6207117752f1347512c5d91eb63681f423098e4a355833bb85bae92d4e82c8e3"
	},
	{
		"id": "986667630c57",
		"ts": "2026-08-11T15:57:17.052Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 690616.45,
		"hash": "986667630c57101cd1574928332e4a16052f965aff160e384cafcbecca8420fe"
	},
	{
		"id": "d382ce0b0ea2",
		"ts": "2026-08-11T15:57:17.265Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 808157.66,
		"hash": "d382ce0b0ea2d19b9f01ec415885914353ca9d00de0eda4ba5ba02c3b60e2a15"
	},
	{
		"id": "d47f364cda25",
		"ts": "2026-08-11T15:57:17.487Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73904.49,
		"hash": "d47f364cda25fba7b77ad4bdb49d20be7300a1382366c566ee09b66f4fd541f6"
	},
	{
		"id": "6840ba46dca2",
		"ts": "2026-08-11T14:17:39.689Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112182883.42,
		"hash": "6840ba46dca200ae68544b08ec64d124b2b8206c2dc9d72be7fdfbf6aab9767e"
	},
	{
		"id": "a2e336bc255c",
		"ts": "2026-08-11T14:17:40.141Z",
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
		"liquidityUsd": 18450237.31,
		"hash": "a2e336bc255cc79b97528107db5062411d852294aaac0698f8d4d03e4ba17724"
	},
	{
		"id": "cfb5ba9f2a86",
		"ts": "2026-08-11T14:17:40.387Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 1034923.63,
		"hash": "cfb5ba9f2a861b2163c1ef1a363b3edbd8f6768763512094a0c674047150ee94"
	},
	{
		"id": "f70c43cc1630",
		"ts": "2026-08-11T14:17:40.637Z",
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
		"liquidityUsd": 26932916.77,
		"hash": "f70c43cc1630a06ca5ecbc771593ad379c139ff8c44a52a7a7aa389ce5810e44"
	},
	{
		"id": "b9390137f366",
		"ts": "2026-08-11T14:17:40.919Z",
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
		"liquidityUsd": 4216912.37,
		"hash": "b9390137f3669da8b02d46fb3357553a845a3510d21cd17210107bfd256dc927"
	},
	{
		"id": "2f3c9d63ca87",
		"ts": "2026-08-11T14:17:41.204Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 920648.76,
		"hash": "2f3c9d63ca873b0645b99cf2b02aab3fcf4aef5a707fe09cd714992f421352ee"
	},
	{
		"id": "6342135b9d2b",
		"ts": "2026-08-11T14:17:41.444Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26932916.77,
		"hash": "6342135b9d2b00cd5e66a2de4cb8ad413a4af384e1af0b3f138fc34d5b6b0896"
	},
	{
		"id": "29ccff8f7bae",
		"ts": "2026-08-11T14:17:41.690Z",
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
		"liquidityUsd": 4331549.57,
		"hash": "29ccff8f7baea4b7a8d127b4599342003f940e258d5419539817e049cdfca9a3"
	},
	{
		"id": "5563c0b32d2a",
		"ts": "2026-08-11T14:17:42.009Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4606390.7,
		"hash": "5563c0b32d2a060b0119e735c2a7aaa5cd08c09a07bd22078ceddb8b006dd8d1"
	},
	{
		"id": "ee9ccd229497",
		"ts": "2026-08-11T14:17:42.255Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2151367.29,
		"hash": "ee9ccd229497fdbb2b7e30ad2bc14c153f9043eeef24eedc22bfc98af9cf2360"
	},
	{
		"id": "9d462f2ef5ca",
		"ts": "2026-08-11T14:17:42.486Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 986262.54,
		"hash": "9d462f2ef5caf69548516478b27914c9d2fb6fb33dec146b003ad9d2cfb8528f"
	},
	{
		"id": "5b85656a43ea",
		"ts": "2026-08-11T14:17:42.715Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257602.06,
		"hash": "5b85656a43ea715db659c4e695ae5d45aade0c8fe102657c1db8a020df98f291"
	},
	{
		"id": "7c2afc1f6ffa",
		"ts": "2026-08-11T14:17:42.944Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9366498.32,
		"hash": "7c2afc1f6ffafb79980e9dbd29e4cfdc66767680a6470fa94a3837b07a86b010"
	},
	{
		"id": "a0b29aecf313",
		"ts": "2026-08-11T14:17:43.172Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4430821.8,
		"hash": "a0b29aecf313013467de384fcd4ba2b079ab212f778b9af198dfe8073dc71fe6"
	},
	{
		"id": "0694d7012d60",
		"ts": "2026-08-11T14:17:43.405Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 701285.29,
		"hash": "0694d7012d607efc863c699786347badc49e0cf0271750537cba64b936999b45"
	},
	{
		"id": "7a951774fb56",
		"ts": "2026-08-11T14:17:43.632Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 802953.81,
		"hash": "7a951774fb56e426cfaa43a6adef776dd3af0321c487efab70995b6428b07701"
	},
	{
		"id": "f95e0c6fae0a",
		"ts": "2026-08-11T14:17:43.862Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72758.57,
		"hash": "f95e0c6fae0ab54f5e2c1368f77f8f58189df31ca1caa5ce42fa2f973fcb8f3d"
	},
	{
		"id": "e0d6fb99076a",
		"ts": "2026-08-11T12:55:08.653Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112443933.01,
		"hash": "e0d6fb99076adad101598481cdabf9998b0138cf1b25115783b05f0ec5c901ea"
	},
	{
		"id": "fee193577e05",
		"ts": "2026-08-11T12:55:08.889Z",
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
		"liquidityUsd": 17650237.24,
		"hash": "fee193577e05fdb4d1a6462b1334881130e7e5e7db6b3b53508592e3e43aef8b"
	},
	{
		"id": "bb6d0330f4bb",
		"ts": "2026-08-11T12:55:09.125Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 1035489.6,
		"hash": "bb6d0330f4bb194de435471706a4d8c7ed61a81eb923576e8a8b7dba6f1764bb"
	},
	{
		"id": "0b00b5a3872b",
		"ts": "2026-08-11T12:55:09.366Z",
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
		"liquidityUsd": 26996218.04,
		"hash": "0b00b5a3872bbdc78aa8aee31bf8170cdd9c2df437b39ba4c157d705ce867355"
	},
	{
		"id": "7e59dcd3242c",
		"ts": "2026-08-11T12:55:09.606Z",
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
		"liquidityUsd": 4215671.5,
		"hash": "7e59dcd3242c639299faa1990ed099715d5f99c9e9fc77dc657c206a4f07a381"
	},
	{
		"id": "47d65cd4112e",
		"ts": "2026-08-11T12:55:09.839Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 921048.32,
		"hash": "47d65cd4112e1e4ebd6fc7f906372fc66d1929a5eaee1aa6ead0fc5a2ae7c81e"
	},
	{
		"id": "8f42b88310e7",
		"ts": "2026-08-11T12:55:10.073Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26996634.19,
		"hash": "8f42b88310e7ade64476fcaac0cf1788ad9b3f6419f1bc6fa669e9f3fbfa1144"
	},
	{
		"id": "7917d2a959e6",
		"ts": "2026-08-11T12:55:10.304Z",
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
		"liquidityUsd": 4354061.55,
		"hash": "7917d2a959e6d70898de39352bad9bd01be9bca37b3a2121e730593c51b7b853"
	},
	{
		"id": "7ec4f1803bd5",
		"ts": "2026-08-11T12:55:10.536Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 4347634.05,
		"hash": "7ec4f1803bd50aaaec3e1d983afbf922b5730e91476e06468cf67339721bb86f"
	},
	{
		"id": "11a0b8afd87c",
		"ts": "2026-08-11T12:55:10.764Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2157665.37,
		"hash": "11a0b8afd87cd54688c40886d7e50a021a9c0e15b03c0ec3a6a56586eb2f545e"
	},
	{
		"id": "13b4a8abeefb",
		"ts": "2026-08-11T12:55:10.976Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 256535.26,
		"hash": "13b4a8abeefb258d20e87c3778ddcd53984b078f46541de28aed9fabc7bce79f"
	},
	{
		"id": "38ec547ff876",
		"ts": "2026-08-11T12:55:11.192Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 988807.66,
		"hash": "38ec547ff8768ac37d3d974adb1437062a1297cb3d64a2eee0a170f164cc4275"
	},
	{
		"id": "3a9fba78fe17",
		"ts": "2026-08-11T12:55:11.405Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9342636.41,
		"hash": "3a9fba78fe17a84ab2e6db080a3a995122b22d73bd112b0f0e71212a3879cabb"
	},
	{
		"id": "10ec9a903471",
		"ts": "2026-08-11T12:55:11.617Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4425555.32,
		"hash": "10ec9a9034716e09361365187ca84b412bc771babe3c395e85927c2285215a2e"
	},
	{
		"id": "82f6029d3847",
		"ts": "2026-08-11T12:55:11.834Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 702746.4,
		"hash": "82f6029d38479cf95ac65fd7abc8c9faa2f0884832e5e72b3e7e5e90d6f1b155"
	},
	{
		"id": "a614fae726ce",
		"ts": "2026-08-11T12:55:12.052Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73044.71,
		"hash": "a614fae726ce77b99c4faab1e17d18a5b0e8442afac5b077de1269e7de066327"
	},
	{
		"id": "fb855badee2b",
		"ts": "2026-08-11T11:41:01.930Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112380189.59,
		"hash": "fb855badee2b49d5837eb5532b7b4b6444df8f807e7acdbbeeb62c5cbb08fbbc"
	},
	{
		"id": "0f6e506010ef",
		"ts": "2026-08-11T11:41:02.191Z",
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
		"liquidityUsd": 18070916.1,
		"hash": "0f6e506010efe04710378d434bc7954dc70d68f34b51c04d18973d8b59506e1d"
	},
	{
		"id": "7c363249f9d3",
		"ts": "2026-08-11T11:41:02.469Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 1039561.86,
		"hash": "7c363249f9d39d61c7a39e80dae9cfda261ced825117b752d02f6a9613762f81"
	},
	{
		"id": "329bf293aa11",
		"ts": "2026-08-11T11:41:02.758Z",
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
		"liquidityUsd": 27053938.46,
		"hash": "329bf293aa11ca86a2b576c0755f1be449128275557d987e91097439ee447d9c"
	},
	{
		"id": "880052111216",
		"ts": "2026-08-11T11:41:03.026Z",
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
		"liquidityUsd": 4222494.84,
		"hash": "880052111216ec4c991ac1787da14da48a84696397849bdb454a5e47785e1dbe"
	},
	{
		"id": "36c9dc1f7fd5",
		"ts": "2026-08-11T11:41:03.250Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 917048.83,
		"hash": "36c9dc1f7fd557c8ccd546a6738efff5adfb6ddfa44bbc83d3f025316721c25b"
	},
	{
		"id": "75408a3089ce",
		"ts": "2026-08-11T11:41:03.500Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27053938.46,
		"hash": "75408a3089ce217e9d7cb063b3ef3c46d0cfc335bc4945a8991f1f0a086f1f37"
	},
	{
		"id": "130ddb69793e",
		"ts": "2026-08-11T11:41:03.806Z",
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
		"liquidityUsd": 4401528.84,
		"hash": "130ddb69793e3d399fbcebe609b4ba9352fe44c13589ad9fafd58d4be5b7b67a"
	},
	{
		"id": "1b5f1eb918ad",
		"ts": "2026-08-11T11:41:04.043Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2157385.62,
		"hash": "1b5f1eb918ad5a4c944358ce7f2fa5670d37e47a65e9a94be9d3002969f4b6f3"
	},
	{
		"id": "7f4268b09c12",
		"ts": "2026-08-11T11:41:04.271Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4481329.29,
		"hash": "7f4268b09c129e1a798982065c6edf0b155dbc69306812cb1c2fbf19d6994ebc"
	},
	{
		"id": "4c8847fdc9ab",
		"ts": "2026-08-11T11:41:04.480Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 255137.61,
		"hash": "4c8847fdc9ab966dd5765874a65cffccb4887eaa5ae69b82f072a6780dc795ae"
	},
	{
		"id": "0cef0d4e077e",
		"ts": "2026-08-11T11:41:04.700Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 988140.89,
		"hash": "0cef0d4e077e9950a1817b788f59f35ee8708aa6bcc473c115d9edbb39644a86"
	},
	{
		"id": "0187d1744ee7",
		"ts": "2026-08-11T11:41:04.924Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9364148.08,
		"hash": "0187d1744ee74bf06a47862e252d0b8826101c31e4dd3b35c50c9370755a8db3"
	},
	{
		"id": "128d791b9a78",
		"ts": "2026-08-11T11:41:05.138Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4446997.52,
		"hash": "128d791b9a785b211ff1090a1305e5c11398d6bcd0ca73f13dcb5b75638c8e0b"
	},
	{
		"id": "e5eb544f25b1",
		"ts": "2026-08-11T11:41:05.348Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72803.55,
		"hash": "e5eb544f25b17b283aba7453290873c8100510cd1d51c618a70bc04c26db6592"
	},
	{
		"id": "99fa7707e205",
		"ts": "2026-08-11T11:41:05.569Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 802820.73,
		"hash": "99fa7707e205e71da852c2ebb9050d37b667663aab0ba075d2c98657d9b4c342"
	},
	{
		"id": "c2dc977db8c4",
		"ts": "2026-08-11T10:50:47.891Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112131562.88,
		"hash": "c2dc977db8c46fb6a572e58c963aab7e5ac39b8c0b582d95f85a0328684b89f1"
	},
	{
		"id": "aeac6685da58",
		"ts": "2026-08-11T10:50:48.133Z",
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
		"liquidityUsd": 14184200.89,
		"hash": "aeac6685da58dec5a8198df3af178597dc1d1cd88a930c4226d485af9c50678c"
	},
	{
		"id": "fb26d2934d6f",
		"ts": "2026-08-11T10:50:48.375Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 1036501.15,
		"hash": "fb26d2934d6f5bb601e80bd0b9881475393cf4385f96dca069c4a60ee601d2d0"
	},
	{
		"id": "db5ea388f3e5",
		"ts": "2026-08-11T10:50:48.624Z",
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
		"liquidityUsd": 26902882.86,
		"hash": "db5ea388f3e580f22aebc15db42edcfe6374b8db66da2b44c08f38a6e6ee701c"
	},
	{
		"id": "6080e04a60df",
		"ts": "2026-08-11T10:50:48.859Z",
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
		"liquidityUsd": 4203806.86,
		"hash": "6080e04a60df8ffd05c6d1167df3e0c311b3b497ac70e7f03e5ff9a22ab09856"
	},
	{
		"id": "a59ebfec46fb",
		"ts": "2026-08-11T10:50:49.094Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916234.15,
		"hash": "a59ebfec46fbdec24d930aaaab3262bd09a244188f681ff9ab3683e4962cfc6d"
	},
	{
		"id": "7885412b9dc5",
		"ts": "2026-08-11T10:50:49.334Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26902882.86,
		"hash": "7885412b9dc56ad4621530b88fff38f42e8fb6b027b0cd84edca69ce494757b5"
	},
	{
		"id": "49263447987e",
		"ts": "2026-08-11T10:50:49.580Z",
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
		"liquidityUsd": 4390036.3,
		"hash": "49263447987e75b2445fad29270b8b37895701b2fcd52b26d4fffa2838712d97"
	},
	{
		"id": "86eec256ceb6",
		"ts": "2026-08-11T10:50:49.865Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2145427.89,
		"hash": "86eec256ceb6e4523aca9e56889153e27967c98c3225d1ff08b0818d9caaef0d"
	},
	{
		"id": "8557cbe073c1",
		"ts": "2026-08-11T10:50:50.101Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 256209.32,
		"hash": "8557cbe073c109336b76917ab160fff65876ff6af409296d228ff59782be3326"
	},
	{
		"id": "2455668b95c8",
		"ts": "2026-08-11T10:50:50.331Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 989378.54,
		"hash": "2455668b95c8f8342edfd8375eb6fd9a09dfce71d359da24cbaf08a47dfc94bd"
	},
	{
		"id": "a004328c1fc9",
		"ts": "2026-08-11T10:50:50.551Z",
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
		"liquidityUsd": 9428323.68,
		"hash": "a004328c1fc9670dc3197536b220b5cd3cd856d83d4f32f66fe27e069b697168"
	},
	{
		"id": "13088a146bef",
		"ts": "2026-08-11T10:50:50.769Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4604519.93,
		"hash": "13088a146befece15173715b207d40b3bd7c27d749b0f1a8b3af50f8c769cdcb"
	},
	{
		"id": "2218e02a51d8",
		"ts": "2026-08-11T10:50:50.992Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4366467.42,
		"hash": "2218e02a51d8e15a805e36a14e3b65ebc79e979d42ca71576b35279329e97a78"
	},
	{
		"id": "240d61a79f01",
		"ts": "2026-08-11T10:50:51.221Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 801269.27,
		"hash": "240d61a79f01ac4a36f71be6d6a86a4b5344a615ad97b4431a8e7fb20fc083aa"
	},
	{
		"id": "29a1369384cb",
		"ts": "2026-08-11T10:50:51.439Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72927.22,
		"hash": "29a1369384cb5638f9979e1e9853fda92c97e5146da6ac33317585b54c643320"
	},
	{
		"id": "cbb9d8beed50",
		"ts": "2026-08-11T09:57:14.924Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111926013.41,
		"hash": "cbb9d8beed50ab75c050b60caaad588f2829a2dae9c4318c9938d9eb945d3018"
	},
	{
		"id": "009d6d61a41b",
		"ts": "2026-08-11T09:57:15.122Z",
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
		"liquidityUsd": 18125312.49,
		"hash": "009d6d61a41b1496ab9c66d3399b8fe7fa39f94217df293f6ad9679a96028594"
	},
	{
		"id": "663e686a76eb",
		"ts": "2026-08-11T09:57:15.458Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 1027492.82,
		"hash": "663e686a76ebc346c77b8f393a9686497ac99b19490a7190181a90d3bf52b611"
	},
	{
		"id": "ed08390acfaa",
		"ts": "2026-08-11T09:57:15.648Z",
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
		"liquidityUsd": 26809473.01,
		"hash": "ed08390acfaa0ce684c53e0cfed3221a1a261dad3e8f8037a4c5703f195b6339"
	},
	{
		"id": "fb1e5a59ba69",
		"ts": "2026-08-11T09:57:15.837Z",
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
		"liquidityUsd": 4194649.86,
		"hash": "fb1e5a59ba6998009f042264b8547bacdbef3a2936365c034315803c4b218fe4"
	},
	{
		"id": "e6f7a6b3343a",
		"ts": "2026-08-11T09:57:16.058Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916234.15,
		"hash": "e6f7a6b3343a31d11f7a64c48a3e5aefba8970c5812f124d9890bab9a459d234"
	},
	{
		"id": "4da3069adfbf",
		"ts": "2026-08-11T09:57:16.247Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26809473.01,
		"hash": "4da3069adfbfc96bb1f0df7ebc50063fffe4a39edc34e400c6243054484f7b38"
	},
	{
		"id": "9c99b3f9a83f",
		"ts": "2026-08-11T09:57:16.619Z",
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
		"liquidityUsd": 1929054.73,
		"hash": "9c99b3f9a83f0298fbcb26bc995d885fc4860a355ac95d0ebcdb25022663417b"
	},
	{
		"id": "08767682317c",
		"ts": "2026-08-11T09:57:16.818Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2149606.02,
		"hash": "08767682317cc7e8957cc7ad06a06f0db8ecbf8c3736dc07ebd60a89989f1988"
	},
	{
		"id": "ae2f8a759bd8",
		"ts": "2026-08-11T09:57:17.010Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 253834.86,
		"hash": "ae2f8a759bd8e576dcbe275d88e04350c61b1ba55e268e6fa56b3d11c9ddbe10"
	},
	{
		"id": "7c0f8c6ba084",
		"ts": "2026-08-11T09:57:17.221Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9416598.66,
		"hash": "7c0f8c6ba08458ce7cfce01dc1345178d00351b7fee4ba7c491fff0aa4aee120"
	},
	{
		"id": "ba725eef5a77",
		"ts": "2026-08-11T09:57:17.427Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 987722.38,
		"hash": "ba725eef5a77c207db81523933d8bc8cfa44dbd33dd39229944158acaaae7bb3"
	},
	{
		"id": "0f5c2c3ab7b3",
		"ts": "2026-08-11T09:57:17.621Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4350245.16,
		"hash": "0f5c2c3ab7b3e0d1f108b40db0d33d73ee5a29a565bcb6ae58c7f7521d7a2e9f"
	},
	{
		"id": "0d292364df6a",
		"ts": "2026-08-11T09:57:17.801Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73806.83,
		"hash": "0d292364df6a45d947158fc441efe95d8c21289a7c5b41b7934d30a0fda68ff2"
	},
	{
		"id": "3b5d8c677b7d",
		"ts": "2026-08-11T09:57:18.016Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257322.53,
		"hash": "3b5d8c677b7d6f04dd3fbc178806ab4574b2ce6d3485fd812ca1c38c86614ed3"
	},
	{
		"id": "c8afb6817d99",
		"ts": "2026-08-11T09:57:18.212Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 799592.12,
		"hash": "c8afb6817d9924273af214fb7f98979204412ae13b617247f0ce25786d53abb3"
	},
	{
		"id": "1712a6783704",
		"ts": "2026-08-11T08:13:16.569Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112646012.07,
		"hash": "1712a67837044c5e8ed060a5cacc23a572069f0878c65b55620e8443ab6aec93"
	},
	{
		"id": "57bd2ca85378",
		"ts": "2026-08-11T08:13:17.013Z",
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
		"liquidityUsd": 18254692.36,
		"hash": "57bd2ca85378914483e4f6dc9f05d848c1956649bbe906d8b354bdd26bda3142"
	},
	{
		"id": "ea9ae5fd3ac5",
		"ts": "2026-08-11T08:13:17.263Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 1027492.82,
		"hash": "ea9ae5fd3ac590ffa38a1cc0ad08e85c5501ec1688f791665d19c0a95a9d1577"
	},
	{
		"id": "9a97c50632c7",
		"ts": "2026-08-11T08:13:17.508Z",
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
		"liquidityUsd": 26804776.89,
		"hash": "9a97c50632c707001d8d6bb9e7f46c8aea1b2d4cb33adad8cfd9f7aad695a993"
	},
	{
		"id": "f732a3401ca9",
		"ts": "2026-08-11T08:13:17.751Z",
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
		"liquidityUsd": 4178322.73,
		"hash": "f732a3401ca9a64df41f3a0b4a96e656819c05b462b4d9904ae768c232ba50be"
	},
	{
		"id": "498a5dd952dd",
		"ts": "2026-08-11T08:13:17.996Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916234.15,
		"hash": "498a5dd952dd37691322833bd68ccd403d69569391ec2020962f5595007afc49"
	},
	{
		"id": "0044526e851d",
		"ts": "2026-08-11T08:13:18.242Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26804776.89,
		"hash": "0044526e851d746aeb3cbf0bdfa21f5c13e69e3cc31708bfc33e6d8897c399e6"
	},
	{
		"id": "a74dfbb7303f",
		"ts": "2026-08-11T08:13:18.483Z",
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
		"liquidityUsd": 1924061.46,
		"hash": "a74dfbb7303fe2d518f539523f8fda47e4badc02ee34390d783be9d9ca1fc257"
	},
	{
		"id": "0aecb341a876",
		"ts": "2026-08-11T08:13:18.722Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2147393.13,
		"hash": "0aecb341a876c13d0f65c0bab8d306364c7a9d41fd212a87c5a2cb9e95667c8b"
	},
	{
		"id": "46fdab6a5cd8",
		"ts": "2026-08-11T08:13:18.966Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 254401.1,
		"hash": "46fdab6a5cd8acf86896c986591dee1f4cb8252acd60c81700bdd0fa60207dd4"
	},
	{
		"id": "8ff345cf69e2",
		"ts": "2026-08-11T08:13:19.195Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9380179.35,
		"hash": "8ff345cf69e2e6dc50a0f2999aa3f2244a8ca58e1e89df1c067369a86bd3f259"
	},
	{
		"id": "bf7274649ede",
		"ts": "2026-08-11T08:13:19.421Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 990771.51,
		"hash": "bf7274649ededb868bfada4b756f030ffe54b84c4c55c7cc527597faff7a0b41"
	},
	{
		"id": "fae9b5d4a4f7",
		"ts": "2026-08-11T08:13:19.647Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261571.68,
		"hash": "fae9b5d4a4f705661d49d67c1599851bf83a731034c0207a11ed7d355a9a78f8"
	},
	{
		"id": "95546e304bfe",
		"ts": "2026-08-11T08:13:19.875Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 287162.34,
		"hash": "95546e304bfe58b77d1a71e2a367e73a18de12c5fa1e8fb2a8928e8f8d347980"
	},
	{
		"id": "400f0f2a6aa8",
		"ts": "2026-08-11T08:13:20.103Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4338352.52,
		"hash": "400f0f2a6aa89a72ddff36abb433ac1bdca5960752ff8e44c7a93291fef9f25e"
	},
	{
		"id": "fc19d899753b",
		"ts": "2026-08-11T08:13:20.330Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 68127.15,
		"hash": "fc19d899753b5bcb4fb61b8b23810c461b440ff87ab94e2d7b11f1d20ed5de83"
	},
	{
		"id": "5313a99c67f1",
		"ts": "2026-08-11T08:13:20.556Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73127.11,
		"hash": "5313a99c67f1de43386f4325a168dcd496347de6cf548c84d6954dbeeb145782"
	},
	{
		"id": "cbd80f621cb0",
		"ts": "2026-08-11T06:59:57.519Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112598731.04,
		"hash": "cbd80f621cb0e3f2e7cfc8a6dc9ba109c91f8c7f6890efcad414beaa6c55a4a0"
	},
	{
		"id": "e1863e635aac",
		"ts": "2026-08-11T06:59:57.748Z",
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
		"liquidityUsd": 18132906.92,
		"hash": "e1863e635aac930cadd9d8cdcd5fa3f34b9b383120e63303945c208d65659e91"
	},
	{
		"id": "ee3a92a37fa8",
		"ts": "2026-08-11T06:59:57.976Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 1027492.82,
		"hash": "ee3a92a37fa85c600f3d118372bfc8d303c2f8bd52880d0d761632f0f0d5617d"
	},
	{
		"id": "a4eb97c909a6",
		"ts": "2026-08-11T06:59:58.207Z",
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
		"liquidityUsd": 26787309.37,
		"hash": "a4eb97c909a60b167286a37c756933e857b843b0b427047e65fa0e22e636c839"
	},
	{
		"id": "043998e13433",
		"ts": "2026-08-11T06:59:58.626Z",
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
		"liquidityUsd": 4179242.67,
		"hash": "043998e13433e034d6ef9a2fd55d8ec543ae7956128cf0668fcb99affb29ea4f"
	},
	{
		"id": "5cc87c4d5c34",
		"ts": "2026-08-11T06:59:58.849Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 908742.83,
		"hash": "5cc87c4d5c3401baf1297dce6377880fc8970b2d276c2f28b559454288bd4282"
	},
	{
		"id": "dcf659b96a16",
		"ts": "2026-08-11T06:59:59.089Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26787309.37,
		"hash": "dcf659b96a16810171d926adfb256e2dd30ef9818b562d50b19c7e14386bbd64"
	},
	{
		"id": "9455a6e0433d",
		"ts": "2026-08-11T06:59:59.320Z",
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
		"liquidityUsd": 3685705.4,
		"hash": "9455a6e0433d4116773bd7dec3c3810d9adc75f6e4f6ad4181f8438bedc9a37d"
	},
	{
		"id": "58f4f44e42ec",
		"ts": "2026-08-11T06:59:59.607Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2143405.95,
		"hash": "58f4f44e42ec5a9919155ea32dea870e93247e87ce9d101c4d6f7707e2baa2e9"
	},
	{
		"id": "a74b7557afc8",
		"ts": "2026-08-11T06:59:59.835Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 254220.7,
		"hash": "a74b7557afc828ccdd0db51c7904fc6f7477893559ed42204fe2354e662d85a8"
	},
	{
		"id": "3d7e49b8a0c9",
		"ts": "2026-08-11T07:00:00.044Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9382518.35,
		"hash": "3d7e49b8a0c96ea076bda603e8d0d3feb72d2ac0dd8f528a919be20086397df4"
	},
	{
		"id": "674302d3428c",
		"ts": "2026-08-11T07:00:00.669Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1002187.9,
		"hash": "674302d3428c6c0ffceb61e528f7d41c044889c98765b415f55d11c1a68b1426"
	},
	{
		"id": "7f5dd2812cab",
		"ts": "2026-08-11T07:00:00.937Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 261571.68,
		"hash": "7f5dd2812cabed00c6de97f76f57c883a3a1f7ea1dee8aac9fd07cd78dd519fb"
	},
	{
		"id": "d4aa92aa7edf",
		"ts": "2026-08-11T07:00:01.183Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 285570.86,
		"hash": "d4aa92aa7edf4dadfc43496ab5853923d1d9ba4cdf3538c862c4b43dd0d94e37"
	},
	{
		"id": "9792b8ae08bb",
		"ts": "2026-08-11T07:00:01.459Z",
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
		"liquidityUsd": 4331355.15,
		"hash": "9792b8ae08bba028bd8062ddbce829b9e5eda7b9a74309d30ed308b41545318f"
	}
]
