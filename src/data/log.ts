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
	"updatedAt": "2026-08-05T20:23:32.148Z",
	"tokensScored": 7544,
	"verdictsIssued": 7544,
	"safe": 6552,
	"risky": 581,
	"likelyRug": 411,
	"ticks": 459
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "a84d7f3ebaba",
		"ts": "2026-08-05T20:23:27.865Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114439392.99,
		"hash": "a84d7f3ebaba7e8f8fa3d8c460ab8451e4f78a794832c12b999aa6946704db19"
	},
	{
		"id": "38be43cd3cd5",
		"ts": "2026-08-05T20:23:28.317Z",
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
		"liquidityUsd": 17342601.31,
		"hash": "38be43cd3cd524ea624ac0c0adfeec1c8973766a37de7d7e94ca9902de6f0e9e"
	},
	{
		"id": "a3495e0289e0",
		"ts": "2026-08-05T20:23:29.006Z",
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
		"liquidityUsd": 1049310.32,
		"hash": "a3495e0289e07311ad69ac8eee48cc7ccd1242719b71902a1cb110bff6e2a47f"
	},
	{
		"id": "8a53725fc16b",
		"ts": "2026-08-05T20:23:29.249Z",
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
		"liquidityUsd": 25785648.09,
		"hash": "8a53725fc16b2626a6a5a2544858d2dc7f34f8c06061486956f0b482386182c9"
	},
	{
		"id": "998dc27b0f0b",
		"ts": "2026-08-05T20:23:29.504Z",
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
		"liquidityUsd": 4498582.53,
		"hash": "998dc27b0f0b705764801e01f46f0294ae6825f4c3505d474b671c1434274439"
	},
	{
		"id": "d5c4a96393ae",
		"ts": "2026-08-05T20:23:29.749Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 921884.59,
		"hash": "d5c4a96393aecc8af67edafff3ccc3367f1dc2c5710bb840456bc839f05ed688"
	},
	{
		"id": "93ce39520476",
		"ts": "2026-08-05T20:23:29.994Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25785647.89,
		"hash": "93ce39520476c45cab2cac0b36de0363b05a8efc06fd014e4293b663d6b15bef"
	},
	{
		"id": "13d672e574ad",
		"ts": "2026-08-05T20:23:30.241Z",
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
		"liquidityUsd": 2139423.48,
		"hash": "13d672e574ad2cafea93d343be0c33761a399bfe83ffc02604ba506c3b335270"
	},
	{
		"id": "33f3b44f506f",
		"ts": "2026-08-05T20:23:30.540Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1062815.9,
		"hash": "33f3b44f506f9342d9a8a57ebf8e1b470505782bc0464c8d0a879b7dbea6f9a1"
	},
	{
		"id": "35fc3d504165",
		"ts": "2026-08-05T20:23:30.779Z",
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
		"liquidityUsd": 3430768.83,
		"hash": "35fc3d504165b84e4ae8173a92043ed7d8e040c0a7ce3df7df148b04431b73c6"
	},
	{
		"id": "863d73f18396",
		"ts": "2026-08-05T20:23:31.005Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 739030.47,
		"hash": "863d73f18396686ad9bcadae83eb879fb3d677e264d19cf2ae9a311b99748c1a"
	},
	{
		"id": "56381998ebde",
		"ts": "2026-08-05T20:23:31.231Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279433.22,
		"hash": "56381998ebde5406a934a11d149d4b3734d748d67b589ba3d0976656cce9d96a"
	},
	{
		"id": "6f7c0c072ce0",
		"ts": "2026-08-05T20:23:31.467Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1997055.31,
		"hash": "6f7c0c072ce0d66140ae04427c4e9328ce828383c74e5cad47b1ed3140b02a9f"
	},
	{
		"id": "5abd16589a51",
		"ts": "2026-08-05T20:23:31.693Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 482623.13,
		"hash": "5abd16589a518192cd6ffde890dff148bf09e36ee25cacddf8df282705b3f833"
	},
	{
		"id": "f2165b44f0d1",
		"ts": "2026-08-05T20:23:31.919Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4256582.97,
		"hash": "f2165b44f0d1bcd8897f0715e8275e60e862096c8bcea9bf8f572a641251a1a2"
	},
	{
		"id": "177c2e44ebe4",
		"ts": "2026-08-05T20:23:32.148Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 85254.85,
		"hash": "177c2e44ebe446e2cf08473c3e02bab681b25c184feed2bc9d03a8ecb5577578"
	},
	{
		"id": "e8ca0539f9c8",
		"ts": "2026-08-05T18:17:55.062Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113588742.37,
		"hash": "e8ca0539f9c8ffb8a722c2a16fac058992002b1c840d58fa07b3030ec66874ed"
	},
	{
		"id": "e4fbbd3b02bb",
		"ts": "2026-08-05T18:17:55.273Z",
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
		"liquidityUsd": 13935032.4,
		"hash": "e4fbbd3b02bbf187f962f38e09d4c34a577537cf5231b5c1a8b9f0f512be2b5c"
	},
	{
		"id": "04845c9737d2",
		"ts": "2026-08-05T18:17:55.493Z",
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
		"liquidityUsd": 1051562.57,
		"hash": "04845c9737d27e734a7c0de44b4da8635150b5c4b1e9ddcaec6634e22f6fd34d"
	},
	{
		"id": "409a599ce5a2",
		"ts": "2026-08-05T18:17:55.676Z",
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
		"liquidityUsd": 25857645.93,
		"hash": "409a599ce5a2e7ae5c2a83493eb8547ede6f25829891216f7367bb2d1e1e51ae"
	},
	{
		"id": "372ebec55cf0",
		"ts": "2026-08-05T18:17:55.864Z",
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
		"liquidityUsd": 4491937.9,
		"hash": "372ebec55cf07578f7f50fb3354d5544122cfa42e277e94911d1ea7184778398"
	},
	{
		"id": "2508030ed1c8",
		"ts": "2026-08-05T18:17:56.047Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 923175.11,
		"hash": "2508030ed1c809a341aaa5aabe06f2ed8b2a94063319073a783609da088df526"
	},
	{
		"id": "33d19d0f17a5",
		"ts": "2026-08-05T18:17:56.230Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25857645.93,
		"hash": "33d19d0f17a5e04e9eb7de22fb0976b571d4a78b22b1c0cc2b893601ea597308"
	},
	{
		"id": "d82e1c5bad42",
		"ts": "2026-08-05T18:17:56.409Z",
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
		"liquidityUsd": 2138417.4,
		"hash": "d82e1c5bad42efc045598493af9b24e06e4b8ae1fb4159c250df9e3c8ed3eb51"
	},
	{
		"id": "e41496e1f013",
		"ts": "2026-08-05T18:17:56.589Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1059641.52,
		"hash": "e41496e1f013e1d9035cd43e4e03181718f07561b145f4b4b139a40eaa140c3e"
	},
	{
		"id": "9446d146ccd5",
		"ts": "2026-08-05T18:17:56.771Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3706775.54,
		"hash": "9446d146ccd56e5ff64eef001145cd92806032bdf072dc19a2dfdc1b2c001429"
	},
	{
		"id": "9c1e4a47a08e",
		"ts": "2026-08-05T18:17:56.974Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279796.48,
		"hash": "9c1e4a47a08ea73f272a9a928bc3d3762d1154909934f0f6afb9939aef294f89"
	},
	{
		"id": "6e351f393c2e",
		"ts": "2026-08-05T18:17:57.167Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2008966.46,
		"hash": "6e351f393c2ed5a9a394e516a72d2d247e21bdbc22a4d471b2f496ad46400956"
	},
	{
		"id": "5cb0fc1afb35",
		"ts": "2026-08-05T18:17:57.358Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 832392.06,
		"hash": "5cb0fc1afb35f987f56fe43d98a54e4bb7357969e4bda1becebbe7eed105c138"
	},
	{
		"id": "9a73a6dbcb6f",
		"ts": "2026-08-05T18:17:57.567Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 480467.54,
		"hash": "9a73a6dbcb6f2656672d781051333ba48db5d908bf342f656f3ef47e761fdded"
	},
	{
		"id": "2d8567aecfd4",
		"ts": "2026-08-05T18:17:57.757Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4329941.68,
		"hash": "2d8567aecfd43269fa19d7de24678fd21624dcfc7c9dbe500763c8560d9869ba"
	},
	{
		"id": "e6507eab9655",
		"ts": "2026-08-05T18:17:57.934Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 77244.01,
		"hash": "e6507eab9655fba176322480ccc18f4a2da757ec9932d678264872d7c6ea6add"
	},
	{
		"id": "96019033712a",
		"ts": "2026-08-05T16:29:14.938Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113605309.31,
		"hash": "96019033712a59e25b37fc7eacf5fb1f585654ea46a40df45e20ff00e53d0d6d"
	},
	{
		"id": "d29afb9cc44a",
		"ts": "2026-08-05T16:29:15.285Z",
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
		"liquidityUsd": 13849043.72,
		"hash": "d29afb9cc44a68ebae2401f0001fb833c260185ad042cc1ca19bf5fa49765c78"
	},
	{
		"id": "4fe1f5b928e1",
		"ts": "2026-08-05T16:29:15.632Z",
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
		"liquidityUsd": 1033298.87,
		"hash": "4fe1f5b928e1d1619b5e51df0893341a86cb4f329757472a9e2770f6a6c890ad"
	},
	{
		"id": "38d0b6861db7",
		"ts": "2026-08-05T16:29:15.820Z",
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
		"liquidityUsd": 25414812.92,
		"hash": "38d0b6861db7b68509611a011fc7eb473cfd59fcb4a79bd5186fc1551c944fcb"
	},
	{
		"id": "7bf1a1695333",
		"ts": "2026-08-05T16:29:16.007Z",
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
		"liquidityUsd": 4434521.5,
		"hash": "7bf1a16953331fb8b7a8875e0945abd7ebd1c6fed04bdc210a6fe51f57c2284b"
	},
	{
		"id": "cfa0528fe89f",
		"ts": "2026-08-05T16:29:16.208Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 914065.64,
		"hash": "cfa0528fe89f3791ebca5c2e260f73345f5edb5c5a958703f65b1236872569a0"
	},
	{
		"id": "c0afbba84524",
		"ts": "2026-08-05T16:29:16.400Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25414812.92,
		"hash": "c0afbba84524703675999c3c4697a9394687d2c711651c10cf233bc8cfb23c22"
	},
	{
		"id": "d37ea801effc",
		"ts": "2026-08-05T16:29:16.764Z",
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
		"liquidityUsd": 3658295.9,
		"hash": "d37ea801effc9150016674395262bdf360f0bff48af47a52c09c38e4dfa39017"
	},
	{
		"id": "46dfa0029811",
		"ts": "2026-08-05T16:29:16.953Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1051870.09,
		"hash": "46dfa0029811bcf92b7afae104fea183385237e0861d9ad884237369495aff85"
	},
	{
		"id": "5c9509752c88",
		"ts": "2026-08-05T16:29:17.143Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 279973.31,
		"hash": "5c9509752c883429f64ae0b0922de7d04ff323f3a3f73f9e712813f8b37a0967"
	},
	{
		"id": "737a60bcbea1",
		"ts": "2026-08-05T16:29:17.323Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3545219.31,
		"hash": "737a60bcbea10277c4438a0fb3c5fc27b08fb27f6ba4a347ce3c92b314e87b58"
	},
	{
		"id": "51e0a0c85c55",
		"ts": "2026-08-05T16:29:17.528Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1973453.84,
		"hash": "51e0a0c85c55157a8c758d4aa0afb2281fcc92799666dce2f1fe31e1b4cdd227"
	},
	{
		"id": "c69734fbec94",
		"ts": "2026-08-05T16:29:17.704Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69839.77,
		"hash": "c69734fbec940332c053edb95907ecb63089f6831f8d15235c0036a86b53fbb1"
	},
	{
		"id": "f1a0f26cda6d",
		"ts": "2026-08-05T16:29:17.910Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 846231.86,
		"hash": "f1a0f26cda6d851771b605a21a414f9c5483c9c385237a62300221ae67525b1c"
	},
	{
		"id": "252a345f0832",
		"ts": "2026-08-05T16:29:18.116Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 475398.33,
		"hash": "252a345f0832c0d78f6d312c1c18481bc7a02733a603819e62315c170614c92c"
	},
	{
		"id": "0a08a2fdfb8a",
		"ts": "2026-08-05T16:29:18.309Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4284794.2,
		"hash": "0a08a2fdfb8ac193adc9427d71dd016b6f3678764ff869a30bfed00e39ac360e"
	},
	{
		"id": "e1222b92fad3",
		"ts": "2026-08-05T16:29:18.488Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 79351.49,
		"hash": "e1222b92fad34fc9a4d10ff053972d0ffd4958690c2071a1196d71bb4bab1edd"
	},
	{
		"id": "499294a98877",
		"ts": "2026-08-05T14:07:23.906Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113190885.78,
		"hash": "499294a98877313f4a9245fcb5f28d32af2ceca0fb9658505f799dd5f6366b24"
	},
	{
		"id": "fc599b3a60d1",
		"ts": "2026-08-05T14:07:24.377Z",
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
		"liquidityUsd": 17660412.88,
		"hash": "fc599b3a60d103df45fbe832bcaf0e4dcd32ac760c7ff490cee9c5fd90342d3a"
	},
	{
		"id": "c52a5e2e45b7",
		"ts": "2026-08-05T14:07:24.625Z",
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
		"liquidityUsd": 1033298.87,
		"hash": "c52a5e2e45b799982e823b5c6ae69aad775a35bf672b2fc0d2d43a0f7d8de97d"
	},
	{
		"id": "5b6028c5d2da",
		"ts": "2026-08-05T14:07:24.867Z",
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
		"liquidityUsd": 25392665.31,
		"hash": "5b6028c5d2da298bc4a84f84ce041a57d54168bbe12ebdf091fbe3948bfd8c82"
	},
	{
		"id": "ad4808ba643f",
		"ts": "2026-08-05T14:07:25.110Z",
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
		"liquidityUsd": 4401416.49,
		"hash": "ad4808ba643fe4622ae41a72066895c13b88b34b2c7ceb729ec1d1ba9465f1b9"
	},
	{
		"id": "a469ba4dfef4",
		"ts": "2026-08-05T14:07:25.370Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 920856.33,
		"hash": "a469ba4dfef41bbf798ac8818da6e5ab484cb310db1cd5caeeba66e4d06c66d0"
	},
	{
		"id": "f0ca2d5389d4",
		"ts": "2026-08-05T14:07:25.609Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25392665.31,
		"hash": "f0ca2d5389d467914b4f0caa5e2886d4a4b416dd1744c748c33e5cf81be9420e"
	},
	{
		"id": "217e45cf71da",
		"ts": "2026-08-05T14:07:25.850Z",
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
		"liquidityUsd": 3622106.07,
		"hash": "217e45cf71da64fcd6dadb6e229789cf8b8e444f53e8395ee719a582514f12c8"
	},
	{
		"id": "e9ffa29e3ee7",
		"ts": "2026-08-05T14:07:26.091Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1053997.57,
		"hash": "e9ffa29e3ee782d1922ba2c8b0c39233f58cd02e99a0e26bcf9a09391b11a7e3"
	},
	{
		"id": "08ef266202ab",
		"ts": "2026-08-05T14:07:26.332Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 280765.33,
		"hash": "08ef266202ab7181a15ac11d763c93611d4f896e9e7ffb36ee65f291f23b177f"
	},
	{
		"id": "19e24f7920e7",
		"ts": "2026-08-05T14:07:26.560Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3548810.76,
		"hash": "19e24f7920e7e9f65bd2f75b2146900b0786045815a8de56ed9c04de955ba386"
	},
	{
		"id": "e7a31031c925",
		"ts": "2026-08-05T14:07:26.788Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1963102.38,
		"hash": "e7a31031c925c9499299eb19af6204d56f170f946f085f75cbc8609af22a0350"
	},
	{
		"id": "1654dd78eb25",
		"ts": "2026-08-05T14:07:27.013Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71697.65,
		"hash": "1654dd78eb252b0c0c613884136f48713efe7e0141217f7b82f3857318ba9be6"
	},
	{
		"id": "e7fe522687d5",
		"ts": "2026-08-05T14:07:27.304Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 933228.3,
		"hash": "e7fe522687d59d1c1a999ba758904629c551daecc8063c2c36f9f9b291309f14"
	},
	{
		"id": "7ae1c6c81c45",
		"ts": "2026-08-05T14:07:27.608Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2039951.27,
		"hash": "7ae1c6c81c45b86c1723a49a9ce08ab24cd0aea5dc33b013fb459bac92ab505f"
	},
	{
		"id": "e4d000b6bf15",
		"ts": "2026-08-05T14:07:27.834Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4269629.6,
		"hash": "e4d000b6bf155e24d6a7b7a8ba9ef3c330b1c6e8bdf098f2f5d1aa15964cf188"
	},
	{
		"id": "03293ced3996",
		"ts": "2026-08-05T14:07:28.064Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9206071.52,
		"hash": "03293ced3996d4acc95977d709d99c2a740820a24021d9bd260a1bb3507f499c"
	},
	{
		"id": "b2940b90a07f",
		"ts": "2026-08-05T11:56:32.850Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112922692.81,
		"hash": "b2940b90a07fcd083bb45e3d278028440ffbd9f20b583b1e3656f84e76d1ef2d"
	},
	{
		"id": "536e9b0dcd4a",
		"ts": "2026-08-05T11:56:33.197Z",
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
		"liquidityUsd": 17729870.79,
		"hash": "536e9b0dcd4a4002d130cbeaf57be53022dae053dc0636c3f3136a3520125c53"
	},
	{
		"id": "b6a42f882d61",
		"ts": "2026-08-05T11:56:33.393Z",
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
		"liquidityUsd": 1030836.18,
		"hash": "b6a42f882d61c2f7a109cf35745a4f5e82099c753894a09b646056757403afb9"
	},
	{
		"id": "7301aff350e1",
		"ts": "2026-08-05T11:56:33.598Z",
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
		"liquidityUsd": 25365309.44,
		"hash": "7301aff350e12eabd9ebef4b7827a4884fcdd1668cdf5cf02afd2310700556f9"
	},
	{
		"id": "7dbef1da2a24",
		"ts": "2026-08-05T11:56:33.790Z",
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
		"liquidityUsd": 4383513.16,
		"hash": "7dbef1da2a247849e5e4e9c8e9b5690573a9d81ba05e337669eb602b31f053cb"
	},
	{
		"id": "e35713bdde97",
		"ts": "2026-08-05T11:56:33.991Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916519.08,
		"hash": "e35713bdde972ed7890d32678bb9e9dd70738d1bbc185bbbe86069f209952174"
	},
	{
		"id": "a4215aaddb6a",
		"ts": "2026-08-05T11:56:34.183Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25365309.44,
		"hash": "a4215aaddb6a70d57dcbf333fc8c27db479cd9ed274f5d36829fad9e65de8b4f"
	},
	{
		"id": "a56fa6d9cb8b",
		"ts": "2026-08-05T11:56:34.405Z",
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
		"liquidityUsd": 3605040.27,
		"hash": "a56fa6d9cb8baec605ff02c33089e8f04eb163cc7ca9df63ef3ce01950e323fe"
	},
	{
		"id": "f51e29958400",
		"ts": "2026-08-05T11:56:34.595Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1031926.25,
		"hash": "f51e299584006abbb4c514719ab492dc0c009c2803335b380237b578d0db439a"
	},
	{
		"id": "5552b85d1ccb",
		"ts": "2026-08-05T11:56:34.794Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 69908.17,
		"hash": "5552b85d1ccb201a0585f4d2e11e8e114eafa4e84528529f1473aeeea917877a"
	},
	{
		"id": "756d9c044957",
		"ts": "2026-08-05T11:56:34.984Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3409733.11,
		"hash": "756d9c044957f58a8eaf286687badd2080f09b5c99240ce0a883679461a29fc7"
	},
	{
		"id": "e6caf857186c",
		"ts": "2026-08-05T11:56:35.190Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1982882.68,
		"hash": "e6caf857186c08899f7348a39fbb540a24d22e618ab8101c2ee139021571ac62"
	},
	{
		"id": "c6f1133396c6",
		"ts": "2026-08-05T11:56:35.380Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 277547.35,
		"hash": "c6f1133396c6a63332934a0ca68faf1bacd8c9087c51f95e7346d33cfb0edac1"
	},
	{
		"id": "0f38b8d854d0",
		"ts": "2026-08-05T11:56:35.585Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1980471.11,
		"hash": "0f38b8d854d0f94fd6fd479eedad3663499f9f89a26019142fee0988d0f25ede"
	},
	{
		"id": "795189e807ca",
		"ts": "2026-08-05T11:56:35.771Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4261133.89,
		"hash": "795189e807ca3fafd0b486742344beb35ba96d9a3715b9ee0d441d928705fe8d"
	},
	{
		"id": "17e8e6ce788b",
		"ts": "2026-08-05T11:56:35.972Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9150516.38,
		"hash": "17e8e6ce788b15a616b1df0dd8efe33d1aa20069efab9f0206fdf735d74b640f"
	},
	{
		"id": "f62d3b083bdc",
		"ts": "2026-08-05T11:56:36.161Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 951826.5,
		"hash": "f62d3b083bdcd9c44e098b5c4d7a9cc2185e068da49fb3c69065d91c5a941e95"
	},
	{
		"id": "deae67206f5c",
		"ts": "2026-08-05T09:34:09.816Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112885400.15,
		"hash": "deae67206f5c2c4a2d2af88d2846332ad867aac539695cc888e64114ae503b0a"
	},
	{
		"id": "b51215a65f4f",
		"ts": "2026-08-05T09:34:10.283Z",
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
		"liquidityUsd": 14850332.16,
		"hash": "b51215a65f4f771b670b437592d1a892185cc68eb81c5dd64062c4d4af615ce7"
	},
	{
		"id": "58627f364331",
		"ts": "2026-08-05T09:34:10.533Z",
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
		"liquidityUsd": 1029068.18,
		"hash": "58627f36433163f45dd87349a797aee0bafd7485eee174f7cc37f00d4410f778"
	},
	{
		"id": "34afb71e63bb",
		"ts": "2026-08-05T09:34:10.809Z",
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
		"liquidityUsd": 25330498.44,
		"hash": "34afb71e63bbd9a4664b8f4d2b56636e2c129524d44cae2dac9cab060b94837a"
	},
	{
		"id": "cb6cf79c92ff",
		"ts": "2026-08-05T09:34:11.060Z",
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
		"liquidityUsd": 4392680.8,
		"hash": "cb6cf79c92ff4ede5adabcfc1072e6843713557cf2d1b3432835a20174056ce1"
	},
	{
		"id": "dc0d66b6e352",
		"ts": "2026-08-05T09:34:11.310Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 923892.18,
		"hash": "dc0d66b6e352f021dbabee054846c1a8e20b61ba6753e2b20a50e7292135748b"
	},
	{
		"id": "281ecf02324b",
		"ts": "2026-08-05T09:34:11.555Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25330498.44,
		"hash": "281ecf02324b6658f31515addc8afd2e6d6128c1b2b0f8de8e0b43ebd97b0aec"
	},
	{
		"id": "cbfa08420286",
		"ts": "2026-08-05T09:34:11.805Z",
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
		"liquidityUsd": 3613549.62,
		"hash": "cbfa084202864c45aa35fe01c1a761acfdf82b21e95fce531c60cb2f3db71134"
	},
	{
		"id": "68c747033b24",
		"ts": "2026-08-05T09:34:12.059Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1028794.33,
		"hash": "68c747033b24c3dfdc274c8990a0e325bcbc995e846d30fc3841c84775d3fb4b"
	},
	{
		"id": "9e53942c895f",
		"ts": "2026-08-05T09:34:12.312Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 72827.31,
		"hash": "9e53942c895f84c260092fefc2d13cfe67d1499764ad0df368d3487a65760c3c"
	},
	{
		"id": "d5c083661c50",
		"ts": "2026-08-05T09:34:12.544Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1936797.48,
		"hash": "d5c083661c502f1425102b92d1ab470e980122d0657cddd23df5fa6a32727429"
	},
	{
		"id": "be732233c2cd",
		"ts": "2026-08-05T09:34:12.780Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 278203.42,
		"hash": "be732233c2cd3f5c30e66993daa32eb0289598104d5e97d5010a7f1286d6c634"
	},
	{
		"id": "d42f07f60708",
		"ts": "2026-08-05T09:34:13.012Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3334789.03,
		"hash": "d42f07f60708fa1b6c3d42e4acbbb3efd14919c827ab76da551be4d8793fc45c"
	},
	{
		"id": "e684cb0909a8",
		"ts": "2026-08-05T09:34:13.246Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1916079.6,
		"hash": "e684cb0909a8a2150b9994364312d5b51d7452a053fbc80d0c74c476b450602a"
	},
	{
		"id": "943d16e48dc1",
		"ts": "2026-08-05T09:34:13.478Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 922136.1,
		"hash": "943d16e48dc191baf2f914a4b709633a29cb08c0b3fde7ad9393cd229b70c6ba"
	},
	{
		"id": "90c98629b17d",
		"ts": "2026-08-05T09:34:13.711Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4278320.4,
		"hash": "90c98629b17d51ada44661891ed2e3a256ae5b4c7d53a35af6ac61d49450dd42"
	},
	{
		"id": "02a204426c66",
		"ts": "2026-08-05T09:34:13.944Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9323295.86,
		"hash": "02a204426c66d599930d2feab4612b0169bf2946aeb289325136bdbed3649dd1"
	},
	{
		"id": "ff5b676c394d",
		"ts": "2026-08-05T06:29:16.390Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112911458.66,
		"hash": "ff5b676c394d2d4cc3b7cd4ff44807d0c2a782ea999cfffeb55c1c8a6c001bcf"
	},
	{
		"id": "3c126d8ebeae",
		"ts": "2026-08-05T06:29:16.897Z",
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
		"liquidityUsd": 17228104.84,
		"hash": "3c126d8ebeaee72257ecb913dde55343c610355192d41d7b7209721c0cdd8bba"
	},
	{
		"id": "3a31fa6af00f",
		"ts": "2026-08-05T06:29:17.388Z",
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
		"liquidityUsd": 1024234.24,
		"hash": "3a31fa6af00fe2b9aaaa2f991b7507e017e3df61f96d7ba08faeed843d77f8b1"
	},
	{
		"id": "b2ad44fc9997",
		"ts": "2026-08-05T06:29:17.655Z",
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
		"liquidityUsd": 25333155.13,
		"hash": "b2ad44fc999756290f70feffff317e5a55d4beb5987eff9fd8e300baf5cff089"
	},
	{
		"id": "d568f8931528",
		"ts": "2026-08-05T06:29:18.155Z",
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
		"liquidityUsd": 4394798.78,
		"hash": "d568f8931528a018134498f1a322980506c998fc4e18e7402900c87da50467f4"
	},
	{
		"id": "1b588922163e",
		"ts": "2026-08-05T06:29:18.424Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 925141.04,
		"hash": "1b588922163e0c629e4b35eec3787cf20f3e88abfb22c52e53a9f51026f8e830"
	},
	{
		"id": "1de74004ba50",
		"ts": "2026-08-05T06:29:18.690Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25333155.13,
		"hash": "1de74004ba507b55e3e91d3b68a0e7d70da6ba3613ab4baa3afd141d3bb25d8b"
	},
	{
		"id": "2ad9b064f85f",
		"ts": "2026-08-05T06:29:18.975Z",
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
		"liquidityUsd": 3467666.09,
		"hash": "2ad9b064f85fa1d94685fe507f5748b51decc1fcfdd3129835ac844b99c8cb2e"
	},
	{
		"id": "33e84d0fbdb1",
		"ts": "2026-08-05T06:29:19.250Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1053420.33,
		"hash": "33e84d0fbdb1a1a0301478a9938da247bac8188cce8ddf1973fbfe87ec3af022"
	},
	{
		"id": "88dea84e6cbc",
		"ts": "2026-08-05T06:29:19.537Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 71541.79,
		"hash": "88dea84e6cbc13d9ffaec9c4e1e25bc15f39d35024f04322975311694af777e5"
	},
	{
		"id": "fc633aa9deca",
		"ts": "2026-08-05T06:29:19.788Z",
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
		"liquidityUsd": 283405.22,
		"hash": "fc633aa9deca141f98f62f1ab17ada942a9585acbada15b3914bdb5608cbb016"
	},
	{
		"id": "b43688c85985",
		"ts": "2026-08-05T06:29:20.040Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 888934.56,
		"hash": "b43688c85985da287e31a8519736b6251b0ca9c899a5c046bffb12435f498aae"
	},
	{
		"id": "62ebe582f7fa",
		"ts": "2026-08-05T06:29:20.289Z",
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
		"liquidityUsd": 1929107.19,
		"hash": "62ebe582f7fad86516822415d1ae8d37c1e106fde465df05f48227bedc64c66d"
	},
	{
		"id": "a905e269ea71",
		"ts": "2026-08-05T06:29:20.542Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1450838.11,
		"hash": "a905e269ea71671c14aecaca9de725b19114b0da2fedf3de59bcabc16fbce0e3"
	},
	{
		"id": "5826c9b37ad0",
		"ts": "2026-08-05T06:29:20.791Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4266988.12,
		"hash": "5826c9b37ad07be6916659d3a20d880154f2de7257c45b1c2fb1580db2f997bd"
	},
	{
		"id": "40ce6e02b041",
		"ts": "2026-08-05T06:29:21.041Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1914058.06,
		"hash": "40ce6e02b0417fafaa9e00f8849dab26958e39fe9b309c18e72ab97a835c9d41"
	},
	{
		"id": "cb4e29fd5a63",
		"ts": "2026-08-05T06:29:21.285Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 456460.09,
		"hash": "cb4e29fd5a635a8d07a01c919b634488df47a9acb8370898bd1f2102a72f31cb"
	},
	{
		"id": "934a64c1c8e6",
		"ts": "2026-08-05T03:57:19.843Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112756838.18,
		"hash": "934a64c1c8e6815f37214b9d712357601918d180006bf99d619d23e24c66f2d6"
	},
	{
		"id": "05dc918be429",
		"ts": "2026-08-05T03:57:20.344Z",
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
		"liquidityUsd": 16815441.21,
		"hash": "05dc918be429fee3da2eb5304e877dc5c6b08ebde4a1d5fa7bbd615e6af0d2c2"
	},
	{
		"id": "26efd6a393c5",
		"ts": "2026-08-05T03:57:20.624Z",
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
		"liquidityUsd": 1023756.33,
		"hash": "26efd6a393c5b6d6514a730ac07db81b52f51e87cca6379ec61728ee493610bf"
	},
	{
		"id": "575c414085af",
		"ts": "2026-08-05T03:57:20.887Z",
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
		"liquidityUsd": 25135692.49,
		"hash": "575c414085afec1377dbb1ecb764ae581fd56782106af7af43cad3479bbb6a52"
	},
	{
		"id": "a3c25ca6603d",
		"ts": "2026-08-05T03:57:21.163Z",
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
		"liquidityUsd": 4364794.67,
		"hash": "a3c25ca6603d15f1ae1cd3b82f8d3ca86c4c767c6d9ea10793a4b59bc1db9c32"
	},
	{
		"id": "f23609815ece",
		"ts": "2026-08-05T03:57:21.426Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 907442.74,
		"hash": "f23609815ece6742042062eac018c2599fecf2cbc1c36679757717cb3876fd47"
	},
	{
		"id": "d8d4d34aebf1",
		"ts": "2026-08-05T03:57:21.687Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25135692.49,
		"hash": "d8d4d34aebf17cfb8944556e08284eaad2e2729c169b46cd731957ebcdf6333a"
	},
	{
		"id": "73b5afe2c690",
		"ts": "2026-08-05T03:57:21.954Z",
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
		"liquidityUsd": 3462955.33,
		"hash": "73b5afe2c6909c2f9078c5b6ff3ab078217384d5bb10646cb63cb1f6bab552e3"
	},
	{
		"id": "8cecdfe09752",
		"ts": "2026-08-05T03:57:22.216Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1063338.82,
		"hash": "8cecdfe097529fc44047078ea5377bdd3181d3495b689ab490399020eec484ad"
	},
	{
		"id": "0b2ef8c77ba7",
		"ts": "2026-08-05T03:57:22.477Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 73698.61,
		"hash": "0b2ef8c77ba78e8b72268a7c433965de7c2ad5626f367ed6ccd51f516cc7bef6"
	},
	{
		"id": "f490c4772d39",
		"ts": "2026-08-05T03:57:22.725Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1908588.77,
		"hash": "f490c4772d398a0129b88d4d59ed8782a7786061009b1521675a0c97e6e1079a"
	},
	{
		"id": "cf6957756ffe",
		"ts": "2026-08-05T03:57:22.971Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280668.95,
		"hash": "cf6957756ffefc5fc67d6680b860dac77f8a7d523d8b55c3d2f1de8ded58acb7"
	},
	{
		"id": "1fe17b848202",
		"ts": "2026-08-05T03:57:23.216Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1943743.46,
		"hash": "1fe17b848202b1cd9ca75ea34ed391cbf5fd28239a32532db7e43b48396e45c0"
	},
	{
		"id": "2ddf4abfaef5",
		"ts": "2026-08-05T03:57:23.463Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4262409.12,
		"hash": "2ddf4abfaef57532ed08290ea283b1238295897a548e4c27c89a4d6fe36a8231"
	},
	{
		"id": "afefb84779b4",
		"ts": "2026-08-05T03:57:23.707Z",
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
		"liquidityUsd": 1493450.42,
		"hash": "afefb84779b44a09bf4fe6156a40aecf2ba868da4b0fa92614dd110a64e4413a"
	},
	{
		"id": "18054d8a9731",
		"ts": "2026-08-05T03:57:23.955Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3214147.36,
		"hash": "18054d8a9731244a049eb4dc474bc6d5f191757704cdd102b698462a1942b3ff"
	},
	{
		"id": "ed9a30801a62",
		"ts": "2026-08-05T03:57:24.203Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 457259.37,
		"hash": "ed9a30801a62aedebda92b95a1425fe959f47007de15a7912fce2ef42788694b"
	},
	{
		"id": "bb3c6be562bf",
		"ts": "2026-08-05T00:11:12.219Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112920340.26,
		"hash": "bb3c6be562bf71184e1d2745ba38dddd6e4d22849cd0b2480f7e24933accbbe6"
	},
	{
		"id": "a52cc9a0b6d3",
		"ts": "2026-08-05T00:11:12.623Z",
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
		"liquidityUsd": 17807128.72,
		"hash": "a52cc9a0b6d38de69a84eb88e11a2e4ff8b12d3586df008c5a607e91981bc507"
	},
	{
		"id": "6b0a3a77bf24",
		"ts": "2026-08-05T00:11:13.008Z",
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
		"liquidityUsd": 1029420.85,
		"hash": "6b0a3a77bf245b005fc7cfb794928cb6c6768223f340be6bf222766aa6483b3c"
	},
	{
		"id": "0a9df6f56fe7",
		"ts": "2026-08-05T00:11:13.402Z",
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
		"liquidityUsd": 25180546.6,
		"hash": "0a9df6f56fe710a2d7318184c7af8bc2059ecbe0ac98a120ce79a1845f617044"
	},
	{
		"id": "2449a3c072fe",
		"ts": "2026-08-05T00:11:13.787Z",
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
		"liquidityUsd": 4387190.62,
		"hash": "2449a3c072fe611c4b28f8070f4e1ed48f6216316a85dea12a84564c7d388146"
	},
	{
		"id": "66f8dca72f4b",
		"ts": "2026-08-05T00:11:14.005Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916611.1,
		"hash": "66f8dca72f4bb7b662069f7b551f587b3cfd0bf9801d1c912e77576562bbd929"
	},
	{
		"id": "f457bd5e55e6",
		"ts": "2026-08-05T00:11:14.230Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25180546.6,
		"hash": "f457bd5e55e66b6421f78459bb8e9e6ffd978d023fb80cf1482ee93e9a5ef5be"
	},
	{
		"id": "fcddce93768d",
		"ts": "2026-08-05T00:11:14.465Z",
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
		"liquidityUsd": 3464521.79,
		"hash": "fcddce93768d2d6645a6acdf6f7f8397500e570d07e3c480af0e84e5412c08fa"
	},
	{
		"id": "a24ed42dec68",
		"ts": "2026-08-05T00:11:14.723Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1110325.98,
		"hash": "a24ed42dec68477b079f6d936c92f12b53b3bde4a12adff5fcac0f2ffa132d68"
	},
	{
		"id": "8f19ec350b9b",
		"ts": "2026-08-05T00:11:14.966Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 77844.84,
		"hash": "8f19ec350b9b3e3340173051d0f4137fda57ec5284869f19be0d5bfb7011014b"
	},
	{
		"id": "f6d036051188",
		"ts": "2026-08-05T00:11:15.194Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280572.01,
		"hash": "f6d036051188bfbc99d016be6a375b90b3f0f508947ab7046c5800d37d845220"
	},
	{
		"id": "7f0f2c636bd9",
		"ts": "2026-08-05T00:11:15.423Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1897390.75,
		"hash": "7f0f2c636bd98234b7b54249feb25e528e402fc00220128587fc198c444396e2"
	},
	{
		"id": "50aa3568257d",
		"ts": "2026-08-05T00:11:15.672Z",
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
		"liquidityUsd": 1499848.65,
		"hash": "50aa3568257dfcf2adeec0b67e03888c2d161377230d3b651e2109dce7c0a891"
	},
	{
		"id": "e16eea7e0e25",
		"ts": "2026-08-05T00:11:15.878Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2001248.27,
		"hash": "e16eea7e0e25bb3881cf08825faa314c9ae2074491015298db9548209072afdc"
	},
	{
		"id": "8426b2df2303",
		"ts": "2026-08-05T00:11:16.088Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4296229.59,
		"hash": "8426b2df2303d38134f7f6d5d026dcb2d19f042b154e4603e18ac0f218bbb440"
	},
	{
		"id": "78a812ca269d",
		"ts": "2026-08-05T00:11:16.310Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3130078.94,
		"hash": "78a812ca269df1787ddf2b3cdd90251cebeea77674067221ab40ac80bf1815ad"
	},
	{
		"id": "e7cb4d5d4a17",
		"ts": "2026-08-05T00:11:16.529Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9309727.49,
		"hash": "e7cb4d5d4a1735a6c3e8e2042a9c34d3170129eea4bbd5c016c82d1b302802de"
	},
	{
		"id": "c98b9a3dc84f",
		"ts": "2026-08-04T22:59:35.747Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112936481.61,
		"hash": "c98b9a3dc84f18216ae6f94e6d89bec0fa4440cef9a9bd7d4428bbbc38f61659"
	},
	{
		"id": "e31f54c470f7",
		"ts": "2026-08-04T22:59:36.023Z",
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
		"liquidityUsd": 17481708.29,
		"hash": "e31f54c470f749251bb2551d3b2e331ee2bbe4167cf0f2ed007f463cfb717af1"
	},
	{
		"id": "644ef1bc5eec",
		"ts": "2026-08-04T22:59:36.296Z",
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
		"liquidityUsd": 1031562.72,
		"hash": "644ef1bc5eec969484d2ee44301a509cbee8e2f7f092eaa8bb509f9e98a87353"
	},
	{
		"id": "844d3250df45",
		"ts": "2026-08-04T22:59:36.586Z",
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
		"liquidityUsd": 25239472.08,
		"hash": "844d3250df4551bb0c3c61d7c02d79a27435f92b403de2bb5cff012b68542d6b"
	},
	{
		"id": "ccbb76ef7717",
		"ts": "2026-08-04T22:59:36.852Z",
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
		"liquidityUsd": 4387190.62,
		"hash": "ccbb76ef7717c145104f1dde3bbff0f4b4801605beb2857d846c360478be1d1b"
	},
	{
		"id": "85368f0d5323",
		"ts": "2026-08-04T22:59:37.122Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 921697.89,
		"hash": "85368f0d53238547812dc433998a86905df7358119fc430be79d6dc3c46a37a3"
	},
	{
		"id": "78d3e02a081f",
		"ts": "2026-08-04T22:59:37.385Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25239472.08,
		"hash": "78d3e02a081ffed385dd1e0fadaca1843b7758cc4d72d4ba788f2b232deea91a"
	},
	{
		"id": "18896d8e53d2",
		"ts": "2026-08-04T22:59:37.658Z",
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
		"liquidityUsd": 3477257.34,
		"hash": "18896d8e53d22a33034b13c531311055cccf7366c8c48fafb2e9958eae24f9e3"
	},
	{
		"id": "d5bf5bdf18b6",
		"ts": "2026-08-04T22:59:37.930Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1108778.39,
		"hash": "d5bf5bdf18b6f24a4f0fc9fd32e77b2a8e1f65c896543b5c1abf386308207047"
	},
	{
		"id": "c16d5d4d3811",
		"ts": "2026-08-04T22:59:38.207Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 79127.43,
		"hash": "c16d5d4d38119afc94cbfa0e5d91c069910e85003cce8843e75b9f69d5a31f68"
	},
	{
		"id": "dfb62574af60",
		"ts": "2026-08-04T22:59:38.455Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 278323.78,
		"hash": "dfb62574af608fe2a5fd0c28484a4c396e3932d94f33caafd390d3020e89e417"
	},
	{
		"id": "fc12762d1b87",
		"ts": "2026-08-04T22:59:38.704Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1912365.5,
		"hash": "fc12762d1b879ef741d0ab659823f20db8facabf362ff8c9a8a2bd254a772f76"
	},
	{
		"id": "e22f464cd4dd",
		"ts": "2026-08-04T22:59:38.957Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 963645.8,
		"hash": "e22f464cd4dded2e1287a3179c2f2f0bf92f13af303f98caaf71558afb5cb4fb"
	},
	{
		"id": "3eda84a32fba",
		"ts": "2026-08-04T22:59:39.212Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2120412.54,
		"hash": "3eda84a32fba3560610932d1cff21928e7b8a67dc7b5b55e0e6722891ea59164"
	},
	{
		"id": "549099a2b575",
		"ts": "2026-08-04T22:59:39.463Z",
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
		"liquidityUsd": 1468893.77,
		"hash": "549099a2b5751b5abb5f6ee84e4a9b3673623129164f84105797f5975a197b5b"
	},
	{
		"id": "e955014b885b",
		"ts": "2026-08-04T22:59:39.714Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3131521.62,
		"hash": "e955014b885b4095cacc7184857b52d3d50e5aa245bdc6cac47793be9eb864b6"
	},
	{
		"id": "18e8028f7574",
		"ts": "2026-08-04T22:59:39.964Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 693988.18,
		"hash": "18e8028f7574cab495f0cb4c5177dd726af8d9c2b9b344c5aca28450d0f6b1d1"
	},
	{
		"id": "1206583e2ed9",
		"ts": "2026-08-04T21:08:12.543Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112927754.36,
		"hash": "1206583e2ed9ddeb3412c97e30dd6654c1af7c44a6b749493e200299fb1775f2"
	},
	{
		"id": "d7655aa4abbd",
		"ts": "2026-08-04T21:08:12.896Z",
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
		"liquidityUsd": 15561021.68,
		"hash": "d7655aa4abbd1823b4524d2500934ffa5d49006ec841c5e3c0e03083db1714bd"
	},
	{
		"id": "70da9d5d4b18",
		"ts": "2026-08-04T21:08:13.106Z",
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
		"liquidityUsd": 1031562.72,
		"hash": "70da9d5d4b188ef0b70323343edbe871a4eb7b581cdbbfa1db04acc274d0f384"
	},
	{
		"id": "f9a1b7b78529",
		"ts": "2026-08-04T21:08:13.307Z",
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
		"liquidityUsd": 25236699.01,
		"hash": "f9a1b7b78529263451263c208f326a520da9788661afff4397ac91aaaafae072"
	},
	{
		"id": "a8e140e949bb",
		"ts": "2026-08-04T21:08:13.518Z",
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
		"liquidityUsd": 4383011.59,
		"hash": "a8e140e949bbb3bdf05cfe7a820c98f8523a94463efa6aacd247595b7098fd46"
	},
	{
		"id": "833cf1fb6b1c",
		"ts": "2026-08-04T21:08:13.835Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 921697.89,
		"hash": "833cf1fb6b1c7c7e107304d406aa43d4c9b93b86592fef0bdba7e4f0a716d0bf"
	},
	{
		"id": "15b96846437d",
		"ts": "2026-08-04T21:08:14.034Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25236699.01,
		"hash": "15b96846437d4c1645dbe08ca83d46ff925115805eac08dbd8b129b627c35fee"
	},
	{
		"id": "44bf23215e21",
		"ts": "2026-08-04T21:08:14.253Z",
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
		"liquidityUsd": 3479146.83,
		"hash": "44bf23215e21f0c1f29d41180d212ba161204a67201bdff25b0756dec627026f"
	},
	{
		"id": "9fede506f972",
		"ts": "2026-08-04T21:08:14.454Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1076888.74,
		"hash": "9fede506f9729729ea59fc3f788449755d31cff56fab2681288bae63191439a6"
	},
	{
		"id": "870ca622b4bf",
		"ts": "2026-08-04T21:08:14.652Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 79823.65,
		"hash": "870ca622b4bf6e5be05d83c3178630f2c2583b95300170733693d676f63ca8d9"
	},
	{
		"id": "b5c11222f945",
		"ts": "2026-08-04T21:08:15.001Z",
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
		"liquidityUsd": 283287.61,
		"hash": "b5c11222f94583a3a85e4793fc5133e927708758f4061772701d7dbedb8d17c1"
	},
	{
		"id": "d98524fc016d",
		"ts": "2026-08-04T21:08:15.202Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1891825.61,
		"hash": "d98524fc016d633f60caf09471656f38636a5fc1c6144f53184574a7e4002331"
	},
	{
		"id": "9a5e3f565f16",
		"ts": "2026-08-04T21:08:15.411Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 990648.34,
		"hash": "9a5e3f565f1617598d445fe3dfc55a8bf17e9f16bccdd198c87a9a28a4ccecf8"
	},
	{
		"id": "e1626956ce26",
		"ts": "2026-08-04T21:08:15.606Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2083045.79,
		"hash": "e1626956ce268bc28c45aa1a396406134d1efc4cf44532e937a41e1e736f8b33"
	},
	{
		"id": "270467e5b36e",
		"ts": "2026-08-04T21:08:15.802Z",
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
		"liquidityUsd": 1447527.95,
		"hash": "270467e5b36e6bfa5b11e0ce2f6c297f4c612c319554ed7e054fccf8e7d1eb2d"
	},
	{
		"id": "d36545e92f40",
		"ts": "2026-08-04T21:08:16.278Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 689663.74,
		"hash": "d36545e92f40760b8df9c50fb295ad49b43f7f2b13b227d82096b3afeb9c9a62"
	},
	{
		"id": "598dd012aa0a",
		"ts": "2026-08-04T21:08:16.488Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3140532.21,
		"hash": "598dd012aa0aea353df14641c350cb343ca2058dc610a60d38c5e599ddc5304b"
	},
	{
		"id": "b952efb4ed80",
		"ts": "2026-08-04T19:26:22.566Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112976163.59,
		"hash": "b952efb4ed8074f64b318633f883e7aab9eb151584e9463c34a9891cc27952bb"
	},
	{
		"id": "8d21f6d0ccab",
		"ts": "2026-08-04T19:26:22.838Z",
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
		"liquidityUsd": 17016433.18,
		"hash": "8d21f6d0ccab9cbf51bc5a1677562ecc9dcc7d34c596dc34560e1f2ec292caf0"
	},
	{
		"id": "fcf6c9c689e3",
		"ts": "2026-08-04T19:26:23.332Z",
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
		"liquidityUsd": 1031562.72,
		"hash": "fcf6c9c689e35b0d7b0a9246b8c702217190c6c3034796106328ee6e2d32296b"
	},
	{
		"id": "13b1979a70ff",
		"ts": "2026-08-04T19:26:23.614Z",
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
		"liquidityUsd": 25185190.91,
		"hash": "13b1979a70ff43e69e9718e82d5ea3b5df242e1da275c41693797d72544563e9"
	},
	{
		"id": "287757020c33",
		"ts": "2026-08-04T19:26:23.875Z",
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
		"liquidityUsd": 4397196.76,
		"hash": "287757020c33859baac1323aae04cd72c15aa63fc3241af27b36f01f562b3dc7"
	},
	{
		"id": "fe3a0b2dae05",
		"ts": "2026-08-04T19:26:24.139Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 915470.11,
		"hash": "fe3a0b2dae05d02e4041f162f84aaa0b763104d162cb4afc32de64618951ff6e"
	},
	{
		"id": "d9108283f2d5",
		"ts": "2026-08-04T19:26:24.407Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25185190.91,
		"hash": "d9108283f2d5d2e64025ec479d027e06c5c79b2baa4df7b03e6797845e19d9de"
	},
	{
		"id": "4a9337f6f3a8",
		"ts": "2026-08-04T19:26:24.669Z",
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
		"liquidityUsd": 3481623.04,
		"hash": "4a9337f6f3a8ed3ac6fd13a15112b8b9f35ec3dedf73738ccc2c94777a3e1a99"
	},
	{
		"id": "70f7bc4da954",
		"ts": "2026-08-04T19:26:24.934Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1068454.74,
		"hash": "70f7bc4da954d49ef3347e3c579c7b385593bee11b6a8cba23367b50f6749f48"
	},
	{
		"id": "65644e3bb9c3",
		"ts": "2026-08-04T19:26:25.198Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 80221.68,
		"hash": "65644e3bb9c3448fc0d063bf59a8c4b527e76b35b4b7cefc541353de8ef66319"
	},
	{
		"id": "1268bfa48dda",
		"ts": "2026-08-04T19:26:25.447Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 970206.55,
		"hash": "1268bfa48ddada8d07884ae4abbfe3dd095dd06b8bd5f88563856e80b17e9502"
	},
	{
		"id": "3c903ae9f0d1",
		"ts": "2026-08-04T19:26:25.698Z",
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
		"liquidityUsd": 284756.85,
		"hash": "3c903ae9f0d10432102f0d64ecc45b9aaaa7c2ac06b9109c539a2e3b5aae8f44"
	},
	{
		"id": "76f57c9d5d74",
		"ts": "2026-08-04T19:26:25.943Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1890372.86,
		"hash": "76f57c9d5d74b5c2c379880614200414444108bdae574120c8b8da8c1d96aaef"
	},
	{
		"id": "0cd5317bf950",
		"ts": "2026-08-04T19:26:26.192Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1959788.92,
		"hash": "0cd5317bf950592b570f1cc094d5fd5e2c1d3a762640876851803c6eacc5ad17"
	},
	{
		"id": "7a5512f57ef2",
		"ts": "2026-08-04T19:26:26.776Z",
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
		"liquidityUsd": 1450861.06,
		"hash": "7a5512f57ef28ccbc1492ff74eff10012a970967a6d9270c9408077e7fc9c435"
	}
]
