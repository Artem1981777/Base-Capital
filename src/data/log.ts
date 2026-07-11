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
	"updatedAt": "2026-07-11T20:06:03.051Z",
	"tokensScored": 2673,
	"verdictsIssued": 2673,
	"safe": 2345,
	"risky": 241,
	"likelyRug": 87,
	"ticks": 169
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "17f07c220384",
		"ts": "2026-07-11T20:05:57.272Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105978358.06,
		"hash": "17f07c220384fcb0d6583d369eeb20721f93a2ec8962f21492e5f1f5cfcd91e7"
	},
	{
		"id": "797c5e80b7b6",
		"ts": "2026-07-11T20:05:57.618Z",
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
		"liquidityUsd": 16605149.34,
		"hash": "797c5e80b7b6a8ea884b6c890d35661794a021dc4af18c73f74076dfd4c84178"
	},
	{
		"id": "c00cf16caf0c",
		"ts": "2026-07-11T20:05:58.691Z",
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
		"liquidityUsd": 1379071.38,
		"hash": "c00cf16caf0c6b6f1f6a1e678275cf071d1dcbf6bf7f6f0baa2435afc1433f06"
	},
	{
		"id": "c6e2d8f58b6b",
		"ts": "2026-07-11T20:05:59.302Z",
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
		"liquidityUsd": 31142573.54,
		"hash": "c6e2d8f58b6b5d012b7a82e851e41ca64c2d56c6a3f0e3f18313f9b6747cf097"
	},
	{
		"id": "6ae78f97180d",
		"ts": "2026-07-11T20:05:59.487Z",
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
		"liquidityUsd": 4625800.48,
		"hash": "6ae78f97180d84b671749b1f5457f9d9e3daf8e961efa3b4b17ea74634a9760c"
	},
	{
		"id": "808338d69b88",
		"ts": "2026-07-11T20:05:59.688Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1016305.16,
		"hash": "808338d69b8848437328e522a95db3c86abd799143ea901d594c86b23738e0cd"
	},
	{
		"id": "a8ae06afc773",
		"ts": "2026-07-11T20:05:59.879Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31142573.54,
		"hash": "a8ae06afc77330c221ed33d4690f471007a1215ea4a64bdc3271d171d79d087b"
	},
	{
		"id": "a740d7970f01",
		"ts": "2026-07-11T20:06:00.066Z",
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
		"liquidityUsd": 2453639.65,
		"hash": "a740d7970f01b30ae886f0e3a43bd618c00fced80e8b49cf65d8087e13b04560"
	},
	{
		"id": "132975c49fa0",
		"ts": "2026-07-11T20:06:00.365Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2326963.53,
		"hash": "132975c49fa0d698bcb64e464a43f030147b39d0376d962299ef0e42ca0bcb26"
	},
	{
		"id": "4e4d8c01a1b1",
		"ts": "2026-07-11T20:06:01.026Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 264009.82,
		"hash": "4e4d8c01a1b1236d20ea398585f8458aedb83aa7225b6df079bffa4ceea24de4"
	},
	{
		"id": "c72a3f30a3a9",
		"ts": "2026-07-11T20:06:01.384Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3252391.9,
		"hash": "c72a3f30a3a911868bcd6be22d7e5bc41e37c3fd42b4dc2ecaeabd18b0b3414d"
	},
	{
		"id": "b825aa22885d",
		"ts": "2026-07-11T20:06:01.611Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1651681.38,
		"hash": "b825aa22885d29c497b3c4626278b20092c3ccc939c6dc5f78d159f27dca31fe"
	},
	{
		"id": "aef0b2934844",
		"ts": "2026-07-11T20:06:01.975Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 702616.43,
		"hash": "aef0b29348445171ccdd14ccbf65392e87e24c02c678ec8d368e69ad67c9d0c6"
	},
	{
		"id": "04e805fa8f4c",
		"ts": "2026-07-11T20:06:02.233Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 524843.09,
		"hash": "04e805fa8f4cba55c5c46190de5345f21f46a75e14dd4de05816a43dbd0786dc"
	},
	{
		"id": "818c873b1c76",
		"ts": "2026-07-11T20:06:02.470Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 379604.36,
		"hash": "818c873b1c7641b513b953fc582f9b96c822e7d21336ebbb3e2a0c22ea54e65d"
	},
	{
		"id": "61e08060c5a7",
		"ts": "2026-07-11T20:06:02.668Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1946986.54,
		"hash": "61e08060c5a737eb0830d84d4885b5ef5a39973cafc3453d7a94b65c51a185e5"
	},
	{
		"id": "ba1d8a7a160d",
		"ts": "2026-07-11T20:06:02.865Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 991122.66,
		"hash": "ba1d8a7a160dd0300bd50b97d935856c9caa8976e6bd9cddbf1fe7080fe5fd6a"
	},
	{
		"id": "44bd5c2b8535",
		"ts": "2026-07-11T20:06:03.051Z",
		"symbol": "EUR",
		"token": "0x832BCceD5bD431b31663576490344EA1c0Bea295",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 83787.16,
		"hash": "44bd5c2b8535d0ca844e657e65bc4cfc30e529f2abd9d7157af779e51caa0fe7"
	},
	{
		"id": "22cf694cfbe8",
		"ts": "2026-07-11T18:56:53.917Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105952044.79,
		"hash": "22cf694cfbe823cbf667c73b1e03841761a075ce32bd3404e160b4d642e1eb47"
	},
	{
		"id": "1f87a6f5e3e6",
		"ts": "2026-07-11T18:56:54.359Z",
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
		"liquidityUsd": 16389679.26,
		"hash": "1f87a6f5e3e6a09c91525d2659a0e276a7224e678c449dba9b0adb63d23ece18"
	},
	{
		"id": "e0da22a8bec0",
		"ts": "2026-07-11T18:56:54.610Z",
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
		"liquidityUsd": 1381877.14,
		"hash": "e0da22a8bec0a2a04ba43a630117ddceeed081a23a50828f676c2d3bdc74544c"
	},
	{
		"id": "164238466c08",
		"ts": "2026-07-11T18:56:54.843Z",
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
		"liquidityUsd": 31209583.51,
		"hash": "164238466c08fd647729c7d57ebf7f9e7e23e6c01b6dffdb12da835a19501bcb"
	},
	{
		"id": "4ebd884bf5a1",
		"ts": "2026-07-11T18:56:55.076Z",
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
		"liquidityUsd": 4630392.52,
		"hash": "4ebd884bf5a1814ae6b1b0b928e431bab67a3e172285c698ab58122515102a15"
	},
	{
		"id": "7aedb9142d85",
		"ts": "2026-07-11T18:56:55.321Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1010624.17,
		"hash": "7aedb9142d852520ba41b773be8a381b5e20110bab2c25378ab6f845fec8b565"
	},
	{
		"id": "ceeebc77539c",
		"ts": "2026-07-11T18:56:55.592Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31209583.51,
		"hash": "ceeebc77539c42e2d07b11f4cc634ab04228039e7a8682fe77e0e87376e0ba8a"
	},
	{
		"id": "2a04092dd14a",
		"ts": "2026-07-11T18:56:55.824Z",
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
		"liquidityUsd": 2451547.13,
		"hash": "2a04092dd14affea68ef319aad2c708a2dbf80b87cfc27669d8597fb7337fa0b"
	},
	{
		"id": "40d967c6c7fd",
		"ts": "2026-07-11T18:56:56.071Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2317515.69,
		"hash": "40d967c6c7fd1660468644accdd1bbd3aa89db96a09cd7e06045452d41be61fb"
	},
	{
		"id": "7791eab54fca",
		"ts": "2026-07-11T18:56:56.305Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 299196.4,
		"hash": "7791eab54fcabac27ffe382c7f0f2869624be5ee84e84f409362e43621d755fd"
	},
	{
		"id": "7a69ccfe5b49",
		"ts": "2026-07-11T18:56:56.523Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1653421.1,
		"hash": "7a69ccfe5b49a64d309cc7fcbce407807674067dc773c58a88a54e3e377b65ff"
	},
	{
		"id": "e3a232e5e4b0",
		"ts": "2026-07-11T18:56:56.742Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 706970.36,
		"hash": "e3a232e5e4b01a4e7cc13a8cf2d1a6487e00e9d9bc34c880dfe3089415869273"
	},
	{
		"id": "2b1523266be9",
		"ts": "2026-07-11T18:56:56.975Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 442252.63,
		"hash": "2b1523266be95cfcec94fd90abc8027bde67038bf18b9031fd2377b2fb599ba3"
	},
	{
		"id": "fe84aff3ca47",
		"ts": "2026-07-11T18:56:57.192Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3203187.92,
		"hash": "fe84aff3ca47e6ca7d08394b3598166012296afdbcb1882a1380ee519ba07671"
	},
	{
		"id": "3cb0a8e4a421",
		"ts": "2026-07-11T18:56:57.411Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 524829.16,
		"hash": "3cb0a8e4a4211a6e739723a24af20d09baf9b786feb1aae41c57a1c117a00136"
	},
	{
		"id": "04261f6ecac0",
		"ts": "2026-07-11T18:56:57.643Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 982016.1,
		"hash": "04261f6ecac0b186a7de5ee4f9a69c9f024249f4b0aa6f6da51b031c123f05ad"
	},
	{
		"id": "9d368bc0906e",
		"ts": "2026-07-11T17:52:58.132Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105800109.76,
		"hash": "9d368bc0906e859460b11a0313b1dc6da7615270060f8837de80428f0dab8d51"
	},
	{
		"id": "f4128ac3aef0",
		"ts": "2026-07-11T17:52:59.179Z",
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
		"liquidityUsd": 16486060.2,
		"hash": "f4128ac3aef0f0492d189acea612751dc9b142a8c18f8e30309718c2be936e66"
	},
	{
		"id": "9f56a32b1b86",
		"ts": "2026-07-11T17:52:59.520Z",
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
		"liquidityUsd": 1381696.11,
		"hash": "9f56a32b1b86d1da5410ee1cc2b3bc8ee26d69e2988d8511337ad3cde1d1c85a"
	},
	{
		"id": "9091f6f88aa1",
		"ts": "2026-07-11T17:52:59.861Z",
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
		"liquidityUsd": 31292777.88,
		"hash": "9091f6f88aa194ea8cf08e7adf1affdf8860e704da5bb5460a912f78313b5e6d"
	},
	{
		"id": "2d15ffd23d52",
		"ts": "2026-07-11T17:53:00.048Z",
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
		"liquidityUsd": 4638623.69,
		"hash": "2d15ffd23d5287695b5e8371a3efe86658e2ebc1f1800d24ea3e22036a724557"
	},
	{
		"id": "a177fbc468b0",
		"ts": "2026-07-11T17:53:00.367Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1009523.23,
		"hash": "a177fbc468b08ba4512309dfa9f86ff07db00ff2c1dd2483489a86a91a564d30"
	},
	{
		"id": "89479748d07f",
		"ts": "2026-07-11T17:53:00.555Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31292777.88,
		"hash": "89479748d07f3f8e0c39720cc1d4f72c7227b4546306b87c81d7c7976aba3b23"
	},
	{
		"id": "17b8bff3d8ee",
		"ts": "2026-07-11T17:53:00.750Z",
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
		"liquidityUsd": 2450357.21,
		"hash": "17b8bff3d8ee0c079f1e17a79fe51eb970887180b9e29408dc703a06f2f5a713"
	},
	{
		"id": "ff0f83d3e211",
		"ts": "2026-07-11T17:53:00.948Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2349226.24,
		"hash": "ff0f83d3e2116ae89fbc67efac987b264b9d9ab5e062c3126a74e224142beafe"
	},
	{
		"id": "c008052fa77b",
		"ts": "2026-07-11T17:53:01.189Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 315467.83,
		"hash": "c008052fa77bb1247635affabaf154720198077cc5be6ecfc74c895d4f5fd2d9"
	},
	{
		"id": "f600f11f4603",
		"ts": "2026-07-11T17:53:01.541Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1660257.12,
		"hash": "f600f11f4603fbba02eb936c709420642cb04ac6153674972383815d534c349a"
	},
	{
		"id": "aa91620a993b",
		"ts": "2026-07-11T17:53:01.781Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 719992.85,
		"hash": "aa91620a993bfacfeb992ebf32f8787e1712ad28489b3fba815ffdd6aec5b614"
	},
	{
		"id": "66e7071dc592",
		"ts": "2026-07-11T17:53:01.983Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 320134.58,
		"hash": "66e7071dc5920f67c58f3599ff831bdc36167e65fd1f8321f06e391129961328"
	},
	{
		"id": "d3bea7d3b821",
		"ts": "2026-07-11T17:53:02.178Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3139147.64,
		"hash": "d3bea7d3b821c8c29bb1cf4a3216b3cd9879ddcec2907c885ef559b65aa88505"
	},
	{
		"id": "6b9a8294ea9f",
		"ts": "2026-07-11T17:53:02.388Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1940566.03,
		"hash": "6b9a8294ea9fb6171f8c809093bf6a187b577546f2d614deb58b3a0ca0d7b027"
	},
	{
		"id": "4b421b282513",
		"ts": "2026-07-11T17:53:02.593Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 521846.93,
		"hash": "4b421b282513eb1bd4f100b0d208365d722794c04c8b01372d93fdc8be23087b"
	},
	{
		"id": "2f16a6886db1",
		"ts": "2026-07-11T16:53:27.606Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105790896.82,
		"hash": "2f16a6886db120c80c909bf63ef97a94c3a736d2625c56d040a2b6423fc13327"
	},
	{
		"id": "e93cbd0c7695",
		"ts": "2026-07-11T16:53:28.064Z",
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
		"liquidityUsd": 16604402.05,
		"hash": "e93cbd0c7695049c53d31e64afa32ee4ceaaae142e97421fe5e4db372e51b044"
	},
	{
		"id": "46d21a4b1e09",
		"ts": "2026-07-11T16:53:28.314Z",
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
		"liquidityUsd": 1379125.32,
		"hash": "46d21a4b1e09529961ecc05391b9c68affe15eb977a743e187b7841176fab3b4"
	},
	{
		"id": "8daa27a52141",
		"ts": "2026-07-11T16:53:28.638Z",
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
		"liquidityUsd": 31132643.33,
		"hash": "8daa27a52141fe3e1a6f30a050768723582947947dee109511bd0dc299361134"
	},
	{
		"id": "0a8cf4f5ff64",
		"ts": "2026-07-11T16:53:28.894Z",
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
		"liquidityUsd": 4622967.15,
		"hash": "0a8cf4f5ff645cc189c9e2427a7fbe7793ef90247d05e66fd411b23fb6b6d65f"
	},
	{
		"id": "104f25a94c2d",
		"ts": "2026-07-11T16:53:29.143Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1009523.23,
		"hash": "104f25a94c2d3f338d23573dd102e866852926630966e318045b75f4ff5a109a"
	},
	{
		"id": "6a51bb5751a0",
		"ts": "2026-07-11T16:53:29.403Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31132643.55,
		"hash": "6a51bb5751a005adabfa83739542de374d0ba400d34d06ce8253b786a7046e4a"
	},
	{
		"id": "7cca4b7296df",
		"ts": "2026-07-11T16:53:29.650Z",
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
		"liquidityUsd": 2445359.08,
		"hash": "7cca4b7296df4f07783346a6d1dee83c3d4c9cfd1e41fc11c214aafb90327da6"
	},
	{
		"id": "5da69193c5e4",
		"ts": "2026-07-11T16:53:29.928Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2352626.29,
		"hash": "5da69193c5e47bbda957d40cd3257293c2002637cb181bb4b3cdc745dab04991"
	},
	{
		"id": "c82fff19180f",
		"ts": "2026-07-11T16:53:30.179Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 289054.28,
		"hash": "c82fff19180fe5778d1460728394463c4fea62f86e797961220b768a8df8c07e"
	},
	{
		"id": "c44b2b508679",
		"ts": "2026-07-11T16:53:30.408Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1618053.06,
		"hash": "c44b2b50867973e72670c4f2bbdc827e92f17cde6daca3a456eb55e685fd183e"
	},
	{
		"id": "a3c385566c0e",
		"ts": "2026-07-11T16:53:30.640Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 726143.52,
		"hash": "a3c385566c0ed2f41f6a937b945a1392159e4bc6f0e96e69ce56a9cf35308d94"
	},
	{
		"id": "880b8ce2b32b",
		"ts": "2026-07-11T16:53:30.870Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 354410.97,
		"hash": "880b8ce2b32b1c172a2188852034ce83bafe3a41ddaa08eda2d143905e68c195"
	},
	{
		"id": "7d350122632d",
		"ts": "2026-07-11T16:53:31.103Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3150007.08,
		"hash": "7d350122632d16dc4ffb8d952a0cac525f7931da67af6afb58db20756cea9c30"
	},
	{
		"id": "bf2320ddd651",
		"ts": "2026-07-11T16:53:31.336Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1929329.61,
		"hash": "bf2320ddd651b95cc3352f108a89fd7a8c78398bdd0b0e3d0d39f110a3a7ae36"
	},
	{
		"id": "d268846bcfee",
		"ts": "2026-07-11T16:53:31.567Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 119276.18,
		"hash": "d268846bcfee87013630fb619ebe9c86b3b7233c87bc8ee9d5c5a55bffab4afd"
	},
	{
		"id": "c5c509bf7b73",
		"ts": "2026-07-11T15:52:28.811Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105583979.31,
		"hash": "c5c509bf7b73b1730052b491f7767fcccac7f54ed3a2368aed9c9e11b51b5ca2"
	},
	{
		"id": "829e6bb853a4",
		"ts": "2026-07-11T15:52:29.018Z",
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
		"liquidityUsd": 16541677.25,
		"hash": "829e6bb853a42f8c54745b2c8817ac4a77268b0c9058b0423f1968c9bd0cbd5c"
	},
	{
		"id": "8b243ab97826",
		"ts": "2026-07-11T15:52:29.224Z",
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
		"liquidityUsd": 1375418,
		"hash": "8b243ab97826be091c6d59e1bbc8349dde0897cd5a05a2484a53d3d825d80103"
	},
	{
		"id": "76dd777e5d65",
		"ts": "2026-07-11T15:52:29.421Z",
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
		"liquidityUsd": 31182966.16,
		"hash": "76dd777e5d65323d131e468dc11f8fdb5ffd0ab6d6f07b790e17f5f003187986"
	},
	{
		"id": "e1390a0b364b",
		"ts": "2026-07-11T15:52:29.616Z",
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
		"liquidityUsd": 4655569.27,
		"hash": "e1390a0b364bc58a843a1e4bcbae14132a251323e18f013fbf407be4db27b7c6"
	},
	{
		"id": "40cb06745322",
		"ts": "2026-07-11T15:52:29.808Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1009523.23,
		"hash": "40cb06745322fef38d68a85dad9c5ecffacf709d6a3e26c256a7b3095f473b52"
	},
	{
		"id": "bc32768e9780",
		"ts": "2026-07-11T15:52:30.005Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3181521.91,
		"hash": "bc32768e9780e56a8db786e9258e6a26ca7d082f990d3c8e70475adbefa66aaf"
	},
	{
		"id": "e530987daf98",
		"ts": "2026-07-11T15:52:30.237Z",
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
		"liquidityUsd": 2430189.15,
		"hash": "e530987daf987df8eff82921b89d1c08169aab573182c3700ec3721c633477ec"
	},
	{
		"id": "a5140e765fd6",
		"ts": "2026-07-11T15:52:30.430Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 288030.67,
		"hash": "a5140e765fd6efa11d935856668882b357870516f94f5f86e4aa6d352fdd5b80"
	},
	{
		"id": "7456091ca067",
		"ts": "2026-07-11T15:52:30.629Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2369098.08,
		"hash": "7456091ca067a0041ffb2c237cf8513b093c2306526869bcb361610aed0b7691"
	},
	{
		"id": "abcf37074b24",
		"ts": "2026-07-11T15:52:30.825Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1776162.69,
		"hash": "abcf37074b2426da90ebbe187d2a6e1fe311cb56607edf1491e7c0d335c47b0a"
	},
	{
		"id": "3663c326d479",
		"ts": "2026-07-11T15:52:31.032Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 323540.59,
		"hash": "3663c326d47972369316cd80d7646140f8593ffa6e2e89cf7fa395fdcad81667"
	},
	{
		"id": "3dfc00edfa53",
		"ts": "2026-07-11T15:52:31.235Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 721577.7,
		"hash": "3dfc00edfa53bd28967e51ae017ab88af75bb800c8e6e790d05294f701c6d491"
	},
	{
		"id": "20a8664f1736",
		"ts": "2026-07-11T15:52:31.423Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3181521.57,
		"hash": "20a8664f17367f85371c53f5de8ba3f191af293786e0c7eaacdc22fea8c64fd8"
	},
	{
		"id": "639af0693f5c",
		"ts": "2026-07-11T15:52:31.620Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1920545.17,
		"hash": "639af0693f5c5ee8b9577cafa7eeb9f652b9547d81d3bfef82853cde0e2d717e"
	},
	{
		"id": "9582250b7c70",
		"ts": "2026-07-11T15:52:31.864Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88009.11,
		"hash": "9582250b7c70c0716c9a04604f83d70af4a3c9f35c4f2cbcc0c6cd4de7de8d70"
	},
	{
		"id": "5c4813318b9c",
		"ts": "2026-07-11T14:49:21.464Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105601256.58,
		"hash": "5c4813318b9c31a7e3ab0da4f3e7604493a28a392e96882489fc0fac5edaba5c"
	},
	{
		"id": "c7e99378b4ac",
		"ts": "2026-07-11T14:49:21.709Z",
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
		"liquidityUsd": 16692530.03,
		"hash": "c7e99378b4ace45aa4d61d43a0ce51c4ad290b9a2dea01fd3f841f30db0c5f91"
	},
	{
		"id": "3165533c90fd",
		"ts": "2026-07-11T14:49:21.984Z",
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
		"liquidityUsd": 1369491.07,
		"hash": "3165533c90fd00eb7facd38732e46b157ea283a613b0bbaa0965e5b4942abd56"
	},
	{
		"id": "4e72a94903f8",
		"ts": "2026-07-11T14:49:22.226Z",
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
		"liquidityUsd": 31209858.03,
		"hash": "4e72a94903f87963c048136996f0446f20d39fc15ac2226d4adaceb0864d7ac9"
	},
	{
		"id": "e967a11bc007",
		"ts": "2026-07-11T14:49:22.473Z",
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
		"liquidityUsd": 4664127.2,
		"hash": "e967a11bc007ee6e883af82f163153dc5d1b1eff996717a416a281c5a706a6ee"
	},
	{
		"id": "3914fbc69344",
		"ts": "2026-07-11T14:49:22.711Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1009531.39,
		"hash": "3914fbc6934492b680af24dfb09d82c2efe6978102077cae8707f91c8fc39f17"
	},
	{
		"id": "1b8557789b7a",
		"ts": "2026-07-11T14:49:22.950Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3129507.18,
		"hash": "1b8557789b7ac5dcceaa220e7907100083c2fc9bb71db9bf2ef72788e30b662f"
	},
	{
		"id": "3486f70c9641",
		"ts": "2026-07-11T14:49:23.189Z",
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
		"liquidityUsd": 2470846.84,
		"hash": "3486f70c9641c0cdaa9f576834973b5bf459b2ff9e26326885e43a38a8a80ac4"
	},
	{
		"id": "59ba8df56b62",
		"ts": "2026-07-11T14:49:23.423Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2374242.25,
		"hash": "59ba8df56b6216b5d041cc9bcf359070330c3375df62970b3882333f0e18c9d5"
	},
	{
		"id": "2ae68923de02",
		"ts": "2026-07-11T14:49:23.668Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 274064.8,
		"hash": "2ae68923de029e864c006cb857a8534c964990e8645af7de1e1dd7d66ffa2cac"
	},
	{
		"id": "a9899cc626ba",
		"ts": "2026-07-11T14:49:23.890Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 302989.57,
		"hash": "a9899cc626ba992c954879f2da0b087872cee6fed343b24306e985dceab10612"
	},
	{
		"id": "eef132dd37a6",
		"ts": "2026-07-11T14:49:24.110Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3128582.14,
		"hash": "eef132dd37a6521fa37a46834a7ac239b6e104ad847e58e0855813de3b5eb987"
	},
	{
		"id": "8fc209639850",
		"ts": "2026-07-11T14:49:24.333Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 719779.97,
		"hash": "8fc209639850b08ca03ac961d67387c75e7b2015d077c22331e8f97bf12f3d8d"
	},
	{
		"id": "12880969715e",
		"ts": "2026-07-11T14:49:24.556Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1759044.13,
		"hash": "12880969715e2b4e368bd4d9b4bd22d41038beadfcd105f5ddcb7c5e497fff3c"
	},
	{
		"id": "8fe0b994160d",
		"ts": "2026-07-11T14:49:24.776Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88237.79,
		"hash": "8fe0b994160d0051e1d039d39c686a7d9d4342318b98317b0482fd10257c0925"
	},
	{
		"id": "d2c15cf73ded",
		"ts": "2026-07-11T14:49:24.999Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1939814.92,
		"hash": "d2c15cf73ded4374f70e40e5c16818643375b499716ed8628e52485178dc97f9"
	},
	{
		"id": "92d0e79d6789",
		"ts": "2026-07-11T13:10:21.273Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105246183.19,
		"hash": "92d0e79d67890b95807b537418ae191fb22d89b8cf994b47507192156b660c0a"
	},
	{
		"id": "c34835f44ea5",
		"ts": "2026-07-11T13:10:21.752Z",
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
		"liquidityUsd": 16454068.77,
		"hash": "c34835f44ea58503af383fa4dae46931bd0dd335a79d0b96734eff07aa0fa653"
	},
	{
		"id": "a54f7fa818b0",
		"ts": "2026-07-11T13:10:22.250Z",
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
		"liquidityUsd": 1367247.01,
		"hash": "a54f7fa818b007436350efaf8873360d6d172011d5e92a15069223033fb780ba"
	},
	{
		"id": "1db1e83761c9",
		"ts": "2026-07-11T13:10:22.929Z",
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
		"liquidityUsd": 31073410.03,
		"hash": "1db1e83761c96918a83ad445b6c0bcfa58e7178cdb6e78e8f5d0bf537427a1b6"
	},
	{
		"id": "7c41f3c3129d",
		"ts": "2026-07-11T13:10:23.207Z",
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
		"liquidityUsd": 4646355.44,
		"hash": "7c41f3c3129d2151def3fe262011da980107b3aa27e793853eeb5159bd3245d6"
	},
	{
		"id": "08bad86d4eeb",
		"ts": "2026-07-11T13:10:23.469Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996801.98,
		"hash": "08bad86d4eebb37d2d41afd7f47a9f1c3fd3e4430e97f6ce9b52441061d3036c"
	},
	{
		"id": "104ad812e219",
		"ts": "2026-07-11T13:10:23.719Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3149955.87,
		"hash": "104ad812e2199bed16531a40e572b148228f0d2d7dd6be5072bc4a16b8ba65a2"
	},
	{
		"id": "ed89965c8295",
		"ts": "2026-07-11T13:10:24.678Z",
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
		"liquidityUsd": 2433160.19,
		"hash": "ed89965c8295141b53ea1a9f04b917d4c13ce887e4ae9d5bddf70aa5ca1e072c"
	},
	{
		"id": "9a583705bab4",
		"ts": "2026-07-11T13:10:24.939Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2380795.22,
		"hash": "9a583705bab4e21f777476df84c78793c1a8891903d250ce937a8edd5d1db4cf"
	},
	{
		"id": "e22c354de70f",
		"ts": "2026-07-11T13:10:25.193Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 255704.99,
		"hash": "e22c354de70f304b802d98a5e2f21ee9a3c72bf7d8b1c5815bb8d8a2a7c416bb"
	},
	{
		"id": "ccb68aa10909",
		"ts": "2026-07-11T13:10:25.437Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3149955.87,
		"hash": "ccb68aa109090b61e61fca1c85f05e4e863bec0ea60503b70fc3723673db9ab1"
	},
	{
		"id": "b3d683995030",
		"ts": "2026-07-11T13:10:25.684Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 397428.37,
		"hash": "b3d683995030e5b76c5f1196221084da732d556d3db826ec2ab19b2f3d224ebf"
	},
	{
		"id": "0bfbe52d131c",
		"ts": "2026-07-11T13:10:25.920Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1807371.9,
		"hash": "0bfbe52d131c1ec859878e824d36b31185e1a28f484e8fb5658c3c5b71a9c956"
	},
	{
		"id": "63ef4bfc4ab9",
		"ts": "2026-07-11T13:10:26.163Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 697493.33,
		"hash": "63ef4bfc4ab945e081b036b68834b4c97cc1331c73d478ddffa2079c8bc2ccd9"
	},
	{
		"id": "b925dbf17750",
		"ts": "2026-07-11T13:10:26.409Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94330.06,
		"hash": "b925dbf17750e38bc06215a97ae48ca4afa8de91988d05f52279400f7c89dd82"
	},
	{
		"id": "b8a0f7756c22",
		"ts": "2026-07-11T13:10:26.647Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74151.98,
		"hash": "b8a0f7756c2279716f481ba10f801b046b7c98cc1b21c65e259fbc0a21471b97"
	},
	{
		"id": "d3f2bfa78608",
		"ts": "2026-07-11T13:10:26.889Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1152849.89,
		"hash": "d3f2bfa78608a5a36e0144682a1683d2645f3ba8eb1da91569ac55a04529bdc9"
	},
	{
		"id": "0b4c467b3ed5",
		"ts": "2026-07-11T11:01:31.043Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105184951.54,
		"hash": "0b4c467b3ed55259994c50b7926894005b76358bc1fef565a82aa9fa428ccf9b"
	},
	{
		"id": "e70c9c68f48d",
		"ts": "2026-07-11T11:01:31.489Z",
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
		"liquidityUsd": 16744219.16,
		"hash": "e70c9c68f48d851684c0c9c6462333e838ecb0367cb192c76970d4e3c62da289"
	},
	{
		"id": "f904e558e5fd",
		"ts": "2026-07-11T11:01:31.947Z",
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
		"liquidityUsd": 1364528.12,
		"hash": "f904e558e5fd55b1b47ec295542918f4e7cdb201efd52c8513419b5d5bc7337d"
	},
	{
		"id": "f84246fa273a",
		"ts": "2026-07-11T11:01:32.192Z",
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
		"liquidityUsd": 30945344.12,
		"hash": "f84246fa273aa52b27b272c81d0bc91c85febbc0d1952bc99a5d27e64f16acd2"
	},
	{
		"id": "5ccc1e277f45",
		"ts": "2026-07-11T11:01:32.438Z",
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
		"liquidityUsd": 4625435.22,
		"hash": "5ccc1e277f45f812da7d1c2b25062e5e496d9f027991823cc7da424e1f670f6e"
	},
	{
		"id": "c38494b1ab2f",
		"ts": "2026-07-11T11:01:34.030Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 999269.83,
		"hash": "c38494b1ab2f50a6041dda87996a3a5daf28f3dcf38de12164b626c8f3887906"
	},
	{
		"id": "21fd8ddd0215",
		"ts": "2026-07-11T11:01:34.271Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3150482.73,
		"hash": "21fd8ddd02151c90dea439805b1ac68e96243a6e8cbafce6bd8eefc4a94eacb9"
	},
	{
		"id": "dd00a7dcc1cd",
		"ts": "2026-07-11T11:01:34.511Z",
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
		"liquidityUsd": 2446098.88,
		"hash": "dd00a7dcc1cd8f146d9da5dbef39a71a972dfa273a47f8d8c24c265266098ad6"
	},
	{
		"id": "52b7b87bc350",
		"ts": "2026-07-11T11:01:34.758Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2365661.86,
		"hash": "52b7b87bc350a907aa9bc32c5babc19dc86a03861047f1d51b5ed2f76d90de6a"
	},
	{
		"id": "5df57e2c7c77",
		"ts": "2026-07-11T11:01:35.601Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 253137.69,
		"hash": "5df57e2c7c777f26f40ad26d9d35d542807ecd2bbfee872a85b5c78099be88ce"
	},
	{
		"id": "6e6fc28ef42f",
		"ts": "2026-07-11T11:01:35.846Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3150482.73,
		"hash": "6e6fc28ef42f7e472a3bbdd051ee4e252e5ae450810026e424063dd1c3d50833"
	},
	{
		"id": "941f33e35e63",
		"ts": "2026-07-11T11:01:36.074Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 316333.12,
		"hash": "941f33e35e6338cf9d593628dff0a0e1fbe7c26c90602652fafa89eae59b0435"
	},
	{
		"id": "eaa3b28b5509",
		"ts": "2026-07-11T11:01:36.294Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1811062.23,
		"hash": "eaa3b28b55099fe1183de551b42bdf539f3691cf546f4b6d3818a6ec6320d277"
	},
	{
		"id": "80f8e822b273",
		"ts": "2026-07-11T11:01:36.520Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 87289.18,
		"hash": "80f8e822b273835be50be33e1c22eb09248874821858ca95c4f2577cbff9a692"
	},
	{
		"id": "8e3b660f77f1",
		"ts": "2026-07-11T11:01:36.741Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 686987.03,
		"hash": "8e3b660f77f1212b3d7ce15e9da0d23a1468609b5eac29b00960d4f85838e9c7"
	},
	{
		"id": "24a1f20473ff",
		"ts": "2026-07-11T11:01:36.969Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 812764.89,
		"hash": "24a1f20473ff1a9ddf9e46fc960a36ecdfae5a9a08eb2a6a93705a17f9821d81"
	},
	{
		"id": "a4dbd777ea82",
		"ts": "2026-07-11T11:01:37.190Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72944.38,
		"hash": "a4dbd777ea829977a7b882427cbdac40318d0166245b3c4421ec98ce69800375"
	},
	{
		"id": "249044f60c5f",
		"ts": "2026-07-11T09:24:45.412Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105216489.2,
		"hash": "249044f60c5f516380cbdff8bcedbdb72c71091737c30879961fd858a8d692b8"
	},
	{
		"id": "5dc8de8c7d5b",
		"ts": "2026-07-11T09:24:45.653Z",
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
		"liquidityUsd": 16162622.63,
		"hash": "5dc8de8c7d5b1a488a2c16d0b3b0dd21f862e82196f21a18274a7b1ca9ee56e9"
	},
	{
		"id": "afaafd7d80c3",
		"ts": "2026-07-11T09:24:45.889Z",
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
		"liquidityUsd": 1365628.48,
		"hash": "afaafd7d80c341298e73c88e1f8016957458060ef37f7bb8865603ad8b0eadd6"
	},
	{
		"id": "29ce29bcc265",
		"ts": "2026-07-11T09:24:46.123Z",
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
		"liquidityUsd": 30991952.47,
		"hash": "29ce29bcc265ebbb4b0d5934439c34f604103829917b429a6cd15e73fae2d5a5"
	},
	{
		"id": "67221a524685",
		"ts": "2026-07-11T09:24:46.366Z",
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
		"liquidityUsd": 4602493.41,
		"hash": "67221a524685bde191fafacb6cf7a2de7eea0f6ba5399952cce7c9ad2f0af047"
	},
	{
		"id": "5d29f4807929",
		"ts": "2026-07-11T09:24:46.594Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 999269.33,
		"hash": "5d29f480792954ed4fa3f07816f448cce01f3b72367243bcf77d1b0d91ebd440"
	},
	{
		"id": "cadcd7cc0425",
		"ts": "2026-07-11T09:24:46.826Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30991952.47,
		"hash": "cadcd7cc042585b4d682c4d593f5fa317f2e719c07a7b167b9fe629dd80f44b2"
	},
	{
		"id": "7d08fc4861a7",
		"ts": "2026-07-11T09:24:47.074Z",
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
		"liquidityUsd": 2501133.85,
		"hash": "7d08fc4861a73f6d3627023e7e2c9c84eef49968197c36e3a1ed4ca4709579b2"
	},
	{
		"id": "1478f8c5a78e",
		"ts": "2026-07-11T09:24:47.308Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2364621,
		"hash": "1478f8c5a78edb83672735dd4e299403e155bcf6cab1b2d9780c09e21426100d"
	},
	{
		"id": "572e1a60fda7",
		"ts": "2026-07-11T09:24:47.550Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3119231.83,
		"hash": "572e1a60fda754fe6b1115479fecd935be23954cd096270d7bcc99e841cf842b"
	},
	{
		"id": "5526a82a8694",
		"ts": "2026-07-11T09:24:47.764Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 248750.84,
		"hash": "5526a82a86944889511d5c3a371a7653630af42fae336f3e25f183f74b1e892e"
	},
	{
		"id": "49733e270746",
		"ts": "2026-07-11T09:24:47.982Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 314794.16,
		"hash": "49733e270746e0e882b12cae783c29d4e262574de89553559af885794ae1b923"
	},
	{
		"id": "93c46f20796e",
		"ts": "2026-07-11T09:24:48.200Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1797010.69,
		"hash": "93c46f20796e4673c13f838c808428a796bba512791efbf1d662df59099b54cc"
	},
	{
		"id": "b2546a4f364c",
		"ts": "2026-07-11T09:24:48.418Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 105495.74,
		"hash": "b2546a4f364c073e47a80e4b2dfd3d61818e2a4176f1ab361a56a1944ec8b3e7"
	},
	{
		"id": "74164c42fec9",
		"ts": "2026-07-11T09:24:48.644Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 807734.98,
		"hash": "74164c42fec9125b947594de3f3dbe475d054ff19db4665ec498a5ce370325b8"
	},
	{
		"id": "235dbc48e796",
		"ts": "2026-07-11T09:24:48.858Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 708558.88,
		"hash": "235dbc48e796bad85a1df12fa8cc1d9aa62164b65bc7d226af81c6157540dd83"
	},
	{
		"id": "1603c3ab316c",
		"ts": "2026-07-11T07:49:12.855Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105201728.56,
		"hash": "1603c3ab316c7465fe3c256701db34d8bd0ef366fc90d65a358790aaca64d0f9"
	},
	{
		"id": "1e2098d5e760",
		"ts": "2026-07-11T07:49:13.096Z",
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
		"liquidityUsd": 15760806.17,
		"hash": "1e2098d5e7608ed7a53e71864c961d733c6acf3394601db978b3556189a1a025"
	},
	{
		"id": "b3d2049546aa",
		"ts": "2026-07-11T07:49:13.533Z",
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
		"liquidityUsd": 1367032.42,
		"hash": "b3d2049546aad2ebd17d44bc240a059611f72de966ac5846600e75c4021bcdc9"
	},
	{
		"id": "2f0632381505",
		"ts": "2026-07-11T07:49:13.966Z",
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
		"liquidityUsd": 31011178.83,
		"hash": "2f063238150530554688273a6d9514aa55456683e73cbc09b7c7a71b432415ec"
	},
	{
		"id": "6c08ffc3d7ea",
		"ts": "2026-07-11T07:49:14.410Z",
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
		"liquidityUsd": 4607915.24,
		"hash": "6c08ffc3d7ea63646f389b949003f797bb6bc5908d2dd1db7869e5db10945988"
	},
	{
		"id": "9744ee7da18c",
		"ts": "2026-07-11T07:49:14.640Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 999593.89,
		"hash": "9744ee7da18cf407a0d4c888711e62b665cc28cffbcd5719f58e042358521017"
	},
	{
		"id": "870b4eb051d3",
		"ts": "2026-07-11T07:49:14.873Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31011178.83,
		"hash": "870b4eb051d35903306bf4e7deaf59b1dcd59e09a6e7cabd09f6c7b88b725734"
	},
	{
		"id": "6a9a4f134994",
		"ts": "2026-07-11T07:49:15.127Z",
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
		"liquidityUsd": 2503965.19,
		"hash": "6a9a4f134994a96d982b5ca24041211e175b9d26fa7e3b61466cc05dd068e329"
	},
	{
		"id": "697abb0caf85",
		"ts": "2026-07-11T07:49:15.371Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3112322.06,
		"hash": "697abb0caf85f3b17255a4d75bcbfddf7ed69bce1b3e992e8650290df555654c"
	},
	{
		"id": "6c37778b817d",
		"ts": "2026-07-11T07:49:15.603Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2373142.22,
		"hash": "6c37778b817d652527d10a1ef8489da64e66dcaab7dd279acf20154ac5f0dc23"
	},
	{
		"id": "531ee61a6b3a",
		"ts": "2026-07-11T07:49:15.820Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 237969.99,
		"hash": "531ee61a6b3a40d65ac1d117d46dc8c31cc3197901fcd505d9690fae63eaa379"
	},
	{
		"id": "e3fe97664386",
		"ts": "2026-07-11T07:49:16.037Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 468873.31,
		"hash": "e3fe97664386ac6df95370262db8ab13f73b3c2d116169133e5c3c76c2f94ee3"
	},
	{
		"id": "306c6d252137",
		"ts": "2026-07-11T07:49:16.253Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1797924.24,
		"hash": "306c6d252137d60cf46368adb1517fa55fab2c6d9116bcfa82eb28da303da55a"
	},
	{
		"id": "c1f57faaaccf",
		"ts": "2026-07-11T07:49:16.470Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 812632.03,
		"hash": "c1f57faaaccfa9ded829c6be6212e2a7e0d80bec754f5c9bfa836c41bbaa7111"
	},
	{
		"id": "7601a94d06c1",
		"ts": "2026-07-11T07:49:16.687Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8315190.31,
		"hash": "7601a94d06c145f5ed048776334d621b9218868e270cb9c5d543d0591a5d721a"
	},
	{
		"id": "51d87e3e0b18",
		"ts": "2026-07-11T07:49:16.901Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 651129.69,
		"hash": "51d87e3e0b18d1c578c53818877b3b643cb94a6a17ac51d501affb582bb61336"
	},
	{
		"id": "a13688b359e2",
		"ts": "2026-07-11T05:36:50.371Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105150952.08,
		"hash": "a13688b359e29261513cf9080f562576ea6034b492c34281cd7e03b007f78d91"
	},
	{
		"id": "145ca140df7a",
		"ts": "2026-07-11T05:36:50.844Z",
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
		"liquidityUsd": 16159868.88,
		"hash": "145ca140df7a1cae3ee426a91fa36f5e227e5fae98e1bf0955c5aae862b95ebd"
	},
	{
		"id": "8633425c85c8",
		"ts": "2026-07-11T05:36:51.100Z",
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
		"liquidityUsd": 1367614.43,
		"hash": "8633425c85c8b95fc282f4783721f756f667567753001b4bba86f2a4afa0f922"
	},
	{
		"id": "560a582fff45",
		"ts": "2026-07-11T05:36:51.356Z",
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
		"liquidityUsd": 30962078.43,
		"hash": "560a582fff45488278cf91568d70e9a8a16b820f34da2075b9fde5025f5af6ab"
	},
	{
		"id": "0b6a992afa5c",
		"ts": "2026-07-11T05:36:51.607Z",
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
		"liquidityUsd": 4688412.05,
		"hash": "0b6a992afa5cb667dd4c3c0883b04453e0bcb60d42355d9c0892fd494700eac4"
	},
	{
		"id": "6aed2bf33695",
		"ts": "2026-07-11T05:36:51.859Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 992597.73,
		"hash": "6aed2bf336952e150cf9eb18b14ebb3d34961d1088f2ef33773ddb7ea51f1610"
	},
	{
		"id": "06b68e92fdd7",
		"ts": "2026-07-11T05:36:52.112Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30962078.43,
		"hash": "06b68e92fdd7db1204482ad6afc71c7bf13f0416cf88cb4ef273620fcc0864a0"
	},
	{
		"id": "35f869389d10",
		"ts": "2026-07-11T05:36:52.387Z",
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
		"liquidityUsd": 2525495.84,
		"hash": "35f869389d10cb861435c5d16959ca02b43cf26cb09cbbaa31ba897b56471643"
	},
	{
		"id": "1cebfca3924a",
		"ts": "2026-07-11T05:36:52.641Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3147192.08,
		"hash": "1cebfca3924a4535abe940fb00166260c042e587a5de8ebc94b7ad91e1eaa7db"
	},
	{
		"id": "82b82cc2f360",
		"ts": "2026-07-11T05:36:52.895Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 237409.41,
		"hash": "82b82cc2f360832f0404801c724c704e4c7ee69766dda773159f9031cf5ac32f"
	},
	{
		"id": "94d727fa5329",
		"ts": "2026-07-11T05:36:53.135Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2474080.05,
		"hash": "94d727fa5329bc67b30686ffba2ffa05c65723bc49f6db6b1666b745963d3d95"
	},
	{
		"id": "13ff023d9bdf",
		"ts": "2026-07-11T05:36:53.374Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 840357.8,
		"hash": "13ff023d9bdffe7f5cf5d190ba804d656e5b2eca891a203a687a46947de3b5cd"
	},
	{
		"id": "de72596d5ca9",
		"ts": "2026-07-11T05:36:53.608Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 316006.88,
		"hash": "de72596d5ca948c63c7e2b7f2371bb0539ea1083aca8964b19babfca2bf5fcb7"
	},
	{
		"id": "bafa28e90f4c",
		"ts": "2026-07-11T05:36:53.844Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1758099.44,
		"hash": "bafa28e90f4c3a5b043b680c0025f648da4d4bad8b734c866469f089f3e0b366"
	},
	{
		"id": "738578f84be2",
		"ts": "2026-07-11T05:36:54.083Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8379290.75,
		"hash": "738578f84be2f5140bd7531468e60af615cc289d56874f5148bb24c323eac6e0"
	},
	{
		"id": "3d7e6b83615d",
		"ts": "2026-07-11T05:36:54.321Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1201565.26,
		"hash": "3d7e6b83615d7d5deb904fffcb9e7de3a5c4df590220494076a73361c16d5bb4"
	},
	{
		"id": "327792b7595f",
		"ts": "2026-07-11T02:15:15.694Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105125606.98,
		"hash": "327792b7595f877fddfa134b3e143b8506b360944429cb2a705259c98d79c141"
	},
	{
		"id": "0de2a7d5e882",
		"ts": "2026-07-11T02:15:16.370Z",
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
		"liquidityUsd": 16497659.72,
		"hash": "0de2a7d5e8829cc9f6b5d7882b4e8265dbcd13ad6a1110bb794656572cb4cd2b"
	},
	{
		"id": "cb9eee31fe20",
		"ts": "2026-07-11T02:15:16.729Z",
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
		"liquidityUsd": 1366043.47,
		"hash": "cb9eee31fe2040f9a92d095c66bc4bd532ccc7191cbe39b9b19dc127d52b071a"
	},
	{
		"id": "d570f3961abe",
		"ts": "2026-07-11T02:15:17.248Z",
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
		"liquidityUsd": 30704016.41,
		"hash": "d570f3961abe7e30a53d1292025adb306dc2c05ff14edd14e9d04519f4605c79"
	},
	{
		"id": "4176041c4447",
		"ts": "2026-07-11T02:15:17.735Z",
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
		"liquidityUsd": 4374280.6,
		"hash": "4176041c4447ed98eeffbaff2ee942e66a60f00fc490554ede78a40effefb057"
	},
	{
		"id": "cfc771de41b4",
		"ts": "2026-07-11T02:15:18.529Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991683.47,
		"hash": "cfc771de41b48f628fbbd5b4e4867fc56e4ec88a80b6f3d51bfcf18ec4b4d9e1"
	},
	{
		"id": "b9a69e14f82b",
		"ts": "2026-07-11T02:15:18.829Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30704016.41,
		"hash": "b9a69e14f82be5776cb155fb490b36a9665097cf5d2754485926eb03f5b47ceb"
	},
	{
		"id": "6650820a43ec",
		"ts": "2026-07-11T02:15:19.112Z",
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
		"liquidityUsd": 2647789.62,
		"hash": "6650820a43ecc45ddc2f6071acc9afd92739a6718cb5b256b9a1a4ac00e19ee8"
	},
	{
		"id": "9592a2924b4b",
		"ts": "2026-07-11T02:15:19.366Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3236744.23,
		"hash": "9592a2924b4ba0a8254b487c2b4d34b3b67bbc55e235d2dad7fff94c9b2ce4df"
	},
	{
		"id": "4f8c359b5797",
		"ts": "2026-07-11T02:15:19.613Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1707587.37,
		"hash": "4f8c359b579705939833009933403dfd9b6934d648e9f845ea4289aee9922f97"
	},
	{
		"id": "d86456044a67",
		"ts": "2026-07-11T02:15:19.988Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260565.52,
		"hash": "d86456044a67d62321663c89c12348b3bb5c99db1da37ab5f59fe42ea174ebfe"
	},
	{
		"id": "d5ffb8e35045",
		"ts": "2026-07-11T02:15:20.250Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 324542.71,
		"hash": "d5ffb8e35045eae50e96df49abaca2e36765563154bda78335f3054c1b6e2d96"
	},
	{
		"id": "4087f07e57cf",
		"ts": "2026-07-11T02:15:20.489Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 847155.34,
		"hash": "4087f07e57cff9ccec0b7664aae8c3e95e899501eac8a4ecf36fcd7c5538629f"
	},
	{
		"id": "684bd28c3f79",
		"ts": "2026-07-11T02:15:20.720Z",
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
		"liquidityUsd": 2345433.16,
		"hash": "684bd28c3f797ff7f838c4264b4d1a1980964dfa409e7c213666bb2f13764a66"
	},
	{
		"id": "8c41bdd9c804",
		"ts": "2026-07-11T02:15:20.960Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8400605.13,
		"hash": "8c41bdd9c8043c91cfb30918e058f6a0e012857cbd9a4f7535dccdec9ca1fc41"
	},
	{
		"id": "72be6f1c7103",
		"ts": "2026-07-11T02:15:21.194Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1214636.13,
		"hash": "72be6f1c71037ea0a569211ed8c4dc662779df32f7a5f4dccc32aa5891a926ea"
	},
	{
		"id": "616d94aa649f",
		"ts": "2026-07-10T23:02:01.716Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105117606,
		"hash": "616d94aa649fd6918e2f30299b862db8351d77e01a275a06796bdd818c8d40d6"
	},
	{
		"id": "8d28dffc5422",
		"ts": "2026-07-10T23:02:02.190Z",
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
		"liquidityUsd": 15820614.48,
		"hash": "8d28dffc54225e8bf3b188f89901256b8bb0de98bcb3c03452b3e8859a04e2d5"
	},
	{
		"id": "7d46b2513328",
		"ts": "2026-07-10T23:02:02.440Z",
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
		"liquidityUsd": 1370809.29,
		"hash": "7d46b2513328886993e086866e900f2d82785316f30b168a7aade8454dc2981b"
	},
	{
		"id": "281f2e80d20b",
		"ts": "2026-07-10T23:02:02.697Z",
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
		"liquidityUsd": 30576053.53,
		"hash": "281f2e80d20b9e0d616a4a0fe1258875701b6bc27166dcda9cf6ff7f42f7051e"
	}
]
