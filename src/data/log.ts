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
	"updatedAt": "2026-08-17T12:35:43.891Z",
	"tokensScored": 11293,
	"verdictsIssued": 11293,
	"safe": 9823,
	"risky": 839,
	"likelyRug": 631,
	"ticks": 672
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "13dd6fee954e",
		"ts": "2026-08-17T12:35:39.692Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111638660.24,
		"hash": "13dd6fee954e01aefb2392490edb377122b7258e4f1e2e314b425912df2d0420"
	},
	{
		"id": "f4684aedbac6",
		"ts": "2026-08-17T12:35:40.114Z",
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
		"liquidityUsd": 18437900.08,
		"hash": "f4684aedbac6ab57461133a7195b71ecedd1dfde1731c7e8d6b92355a8cb4f85"
	},
	{
		"id": "39a268d8f07a",
		"ts": "2026-08-17T12:35:40.343Z",
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
		"liquidityUsd": 799274.44,
		"hash": "39a268d8f07a3a581c65660500f7b40ae9697b7f66edd73d785b76133c4f1312"
	},
	{
		"id": "a1b571f95334",
		"ts": "2026-08-17T12:35:40.573Z",
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
		"liquidityUsd": 27028944.78,
		"hash": "a1b571f953347f4849b583681fb11c78836ed6bbe26289c8c76993deade9b570"
	},
	{
		"id": "c380e11a40ec",
		"ts": "2026-08-17T12:35:40.830Z",
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
		"liquidityUsd": 4187758.99,
		"hash": "c380e11a40ecc5d5c4e4d957ded55272a4f8f220af7d44f5710d2db432bffbe3"
	},
	{
		"id": "e70723277552",
		"ts": "2026-08-17T12:35:41.110Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894708.9,
		"hash": "e7072327755234777d6733ef929b7d7224f905193a8e4a2debfe6f6783110be7"
	},
	{
		"id": "760c9d4c9f74",
		"ts": "2026-08-17T12:35:41.331Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4581304.58,
		"hash": "760c9d4c9f748c1db94c8d96957a7446edbbc17b8e024d2bb91850f2532e295f"
	},
	{
		"id": "cc5b9f0eb0c2",
		"ts": "2026-08-17T12:35:41.556Z",
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
		"liquidityUsd": 3305298.91,
		"hash": "cc5b9f0eb0c2f6a79fb3107fc83bc4ab8f4ea924a06c9687dc0e69c6209cb5cb"
	},
	{
		"id": "7975f453f526",
		"ts": "2026-08-17T12:35:41.783Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 92954.57,
		"hash": "7975f453f526fb14319431e3991e022cc187c8b3663c51d6e250aa09335dafd3"
	},
	{
		"id": "5ff5ad490f6f",
		"ts": "2026-08-17T12:35:42.006Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 75421.66,
		"hash": "5ff5ad490f6f687fa46a659ae51df254acb3f046f05d76ba45a02cb46d2bd3bc"
	},
	{
		"id": "b766a92f217a",
		"ts": "2026-08-17T12:35:42.216Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 428895.09,
		"hash": "b766a92f217ae75ecaed490e1fc14bd2f30d6a80327c285d87164408f390118a"
	},
	{
		"id": "b557ba8d1fc0",
		"ts": "2026-08-17T12:35:42.427Z",
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
		"liquidityUsd": 1483895.07,
		"hash": "b557ba8d1fc07b9f3e2749f52eac86f9fd11be610f23ebeea9025c75bcd05f92"
	},
	{
		"id": "533ba66cf460",
		"ts": "2026-08-17T12:35:42.635Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 704691.48,
		"hash": "533ba66cf4609989c0499a78426b2797ac83ef38572a74509e8dd637f32933df"
	},
	{
		"id": "e8910b1764b4",
		"ts": "2026-08-17T12:35:42.845Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4581304.58,
		"hash": "e8910b1764b41f03aab179fa29e04242dadd6a67536b18062ef2ead2cfa63209"
	},
	{
		"id": "60894f5335c8",
		"ts": "2026-08-17T12:35:43.054Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 994763.47,
		"hash": "60894f5335c8b9fbb499df19263c913a6f520c3dcd0133eb32a76b64d38004a0"
	},
	{
		"id": "528454aac82b",
		"ts": "2026-08-17T12:35:43.262Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9612202.37,
		"hash": "528454aac82b663fb2f2fd5ff2bebfd4fa9d5a222f73c77d1535d0e6f7eadfc0"
	},
	{
		"id": "34958b092921",
		"ts": "2026-08-17T12:35:43.471Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246368.73,
		"hash": "34958b0929211f4a12e16bd355fe45873ea1faf9181a3fcb0145ddc3b0acbb6b"
	},
	{
		"id": "3dee2d98bfa3",
		"ts": "2026-08-17T12:35:43.681Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2576564.51,
		"hash": "3dee2d98bfa3178db6fc69cad052fb1951c5415b865b96d38bf7c72378cd07e2"
	},
	{
		"id": "f5df58660278",
		"ts": "2026-08-17T12:35:43.890Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 639518.03,
		"hash": "f5df586602780118227a8e265526a87f48f90ba3bc65e3174505f34b7bf946c2"
	},
	{
		"id": "28a745337cea",
		"ts": "2026-08-17T11:20:38.467Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111650343.65,
		"hash": "28a745337cea800b6a5c7a3c5806c929545d629568634d307b1ffcf9e984e62a"
	},
	{
		"id": "d6fe7e4e4c45",
		"ts": "2026-08-17T11:20:38.693Z",
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
		"liquidityUsd": 18770173.4,
		"hash": "d6fe7e4e4c45df4c1c742b99e08b9177f45645cece89e16cd5650d6d25b0f43f"
	},
	{
		"id": "27992584a7dd",
		"ts": "2026-08-17T11:20:38.903Z",
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
		"liquidityUsd": 808305.45,
		"hash": "27992584a7ddcf821714b58cfc1750ae77a562d097141b6e316df27545d1bd56"
	},
	{
		"id": "14e7acb8b0dd",
		"ts": "2026-08-17T11:20:39.111Z",
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
		"liquidityUsd": 27010957.68,
		"hash": "14e7acb8b0dd6cc80c14adf75bc3055a76c9d222012e3a7cee7a0023a7223244"
	},
	{
		"id": "36181e1566fb",
		"ts": "2026-08-17T11:20:39.305Z",
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
		"liquidityUsd": 4192759.79,
		"hash": "36181e1566fbeb73f03b35a80b205f60153e27b8660104ff6ed43b59fcde883e"
	},
	{
		"id": "e7255cd7d122",
		"ts": "2026-08-17T11:20:39.528Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890524.48,
		"hash": "e7255cd7d122af976adac1575005735fa2f8e650ab2b63b541e50e60692db890"
	},
	{
		"id": "cb9e10d7f552",
		"ts": "2026-08-17T11:20:39.721Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4627565.72,
		"hash": "cb9e10d7f552d41e8b0a7401f41844710299f3f8a903bbcdcba7ff03c07b7cd3"
	},
	{
		"id": "588445116ba7",
		"ts": "2026-08-17T11:20:39.924Z",
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
		"liquidityUsd": 3637690.93,
		"hash": "588445116ba7ded37e8bc5f5e649e7aa1494ca2d77638b5b53bac9cb2132e146"
	},
	{
		"id": "007406b15321",
		"ts": "2026-08-17T11:20:40.183Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 89828.55,
		"hash": "007406b15321d822748ecdeae2cdc65e4810e8e36ea476df2890d32b26d8d044"
	},
	{
		"id": "8b9dd9a9015e",
		"ts": "2026-08-17T11:20:40.377Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 81957.42,
		"hash": "8b9dd9a9015e81ef6b2ffcc98862f697c1b5caf95c81e0e398322313c7e4c377"
	},
	{
		"id": "e3854576662b",
		"ts": "2026-08-17T11:20:40.563Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 460002.38,
		"hash": "e3854576662bf8c641a3bddbce4d6a402e34f9e6bfbf81f12a3a7f1fef56ee84"
	},
	{
		"id": "066dc4c494b9",
		"ts": "2026-08-17T11:20:40.744Z",
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
		"liquidityUsd": 1468162.23,
		"hash": "066dc4c494b9f202f7f24c4d0fd506993fa800707d05a1b9edf152276123746b"
	},
	{
		"id": "c0571b8e75a2",
		"ts": "2026-08-17T11:20:40.950Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4638619.35,
		"hash": "c0571b8e75a2072dc73b8b71190d4f18114b741541d8215736cf131aa2e4a869"
	},
	{
		"id": "e5edd291211f",
		"ts": "2026-08-17T11:20:41.140Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 747223.78,
		"hash": "e5edd291211ff0faf33a1f73b6a6e4f03ea738c18f0aba212501a2a70af3ead8"
	},
	{
		"id": "d5093fe12f72",
		"ts": "2026-08-17T11:20:41.344Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1003998.64,
		"hash": "d5093fe12f7237bf3e4d1fe0fca4279d465fb6ec01c5b550dc86812c099563a6"
	},
	{
		"id": "f3d77a336ba1",
		"ts": "2026-08-17T11:20:41.534Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9677646.65,
		"hash": "f3d77a336ba146e6448b1cf877deb90a916a901f5d242591a7b14d01de23accd"
	},
	{
		"id": "b976bf094902",
		"ts": "2026-08-17T11:20:41.743Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 254577.99,
		"hash": "b976bf094902ab82bd2faa7a279165106cdbf85e65328376cac1fb0b2621d448"
	},
	{
		"id": "1915eb26b320",
		"ts": "2026-08-17T11:20:41.925Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2584367.54,
		"hash": "1915eb26b320b96fe5a28a6c21f5a2c9d94d603d61b1eeb1d0ca64be39f41b0c"
	},
	{
		"id": "460d8a9e9123",
		"ts": "2026-08-17T11:20:42.174Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 659977.06,
		"hash": "460d8a9e9123a50852fd666cb3da60d93d7568e68f492432fdd1ef98eb41aa07"
	},
	{
		"id": "bcd0453e5745",
		"ts": "2026-08-17T10:27:37.327Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111495309.69,
		"hash": "bcd0453e5745c15be0b440907b1b450c90aaf537f71b6cefbc944c410354c4c4"
	},
	{
		"id": "98000ffad7d8",
		"ts": "2026-08-17T10:27:38.003Z",
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
		"liquidityUsd": 18006869.81,
		"hash": "98000ffad7d8afc431f2b14ef7f61f4d1b748a10425c3d0574ef9c4066f872f5"
	},
	{
		"id": "9d907de30bac",
		"ts": "2026-08-17T10:27:38.463Z",
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
		"liquidityUsd": 803712.06,
		"hash": "9d907de30bac5101d4177b27e33d3524f84102ff6cdd72e7865a9a242c4ac35e"
	},
	{
		"id": "e691dd6880cb",
		"ts": "2026-08-17T10:27:38.710Z",
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
		"liquidityUsd": 26960204.04,
		"hash": "e691dd6880cb0618b8da13c31074d8034b3edb7e0b76a21811ac57d0cca60302"
	},
	{
		"id": "b1909d4549a9",
		"ts": "2026-08-17T10:27:39.166Z",
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
		"liquidityUsd": 4163027.34,
		"hash": "b1909d4549a9c2c0b795755436d045877d81d5ebd8415785736f381cb82c2cbb"
	},
	{
		"id": "cd8de56b54f9",
		"ts": "2026-08-17T10:27:39.411Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890524.48,
		"hash": "cd8de56b54f9d6f920b740c1d314c0c1f0149e553aae2422d015f793964e6c4d"
	},
	{
		"id": "37dfb3a84d94",
		"ts": "2026-08-17T10:27:39.654Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5098845.99,
		"hash": "37dfb3a84d94c3ed1701985a367506ddb007e286ea70ece809f768e8c485b148"
	},
	{
		"id": "343c1614b0e3",
		"ts": "2026-08-17T10:27:39.899Z",
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
		"liquidityUsd": 3310341.94,
		"hash": "343c1614b0e3572acb91938d30fd59a14a4329d48319a8c67cb8e4e9ead15bb8"
	},
	{
		"id": "e7b997c0a0a9",
		"ts": "2026-08-17T10:27:40.573Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 83025.13,
		"hash": "e7b997c0a0a971505835c45d7413a5752cd14b54273798476dc0373d188b31d6"
	},
	{
		"id": "75d0c09edafa",
		"ts": "2026-08-17T10:27:40.816Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 81900.96,
		"hash": "75d0c09edafaf41093f45507652a479ca5f46c945fa5f3d73a639dcf10c1a741"
	},
	{
		"id": "a01612f630f1",
		"ts": "2026-08-17T10:27:41.048Z",
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
		"liquidityUsd": 5098845.99,
		"hash": "a01612f630f1f4f59b58377870b69d91b68ebec184d391352256930f0f6a1418"
	},
	{
		"id": "7014b549933b",
		"ts": "2026-08-17T10:27:41.277Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 480746.62,
		"hash": "7014b549933b42173f7c210f82c29d4fce7d2cda9b8a4cface7e5a425f2dcecf"
	},
	{
		"id": "0d6e5877b62d",
		"ts": "2026-08-17T10:27:41.508Z",
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
		"liquidityUsd": 1425669.46,
		"hash": "0d6e5877b62dcc59fc70db62c22c93ca95bc4b5659b387f6e9ac6481aa917976"
	},
	{
		"id": "c3d9b243007d",
		"ts": "2026-08-17T10:27:41.738Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 995243.47,
		"hash": "c3d9b243007d07525739837e612be1d6aa0d4290aa5ca6a5b3b8a2036232bc7d"
	},
	{
		"id": "3d5a9d76644d",
		"ts": "2026-08-17T10:27:41.969Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 702917.81,
		"hash": "3d5a9d76644dd5e893d4b04920da7118d7fbf660164a269a3bf80d10ccc81537"
	},
	{
		"id": "266b246fd1e6",
		"ts": "2026-08-17T10:27:42.198Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9599019.39,
		"hash": "266b246fd1e6b08cf56e954356e52023980e12cb9690f5d2f4263e4b840e9c77"
	},
	{
		"id": "1552b2567547",
		"ts": "2026-08-17T10:27:42.427Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2563569.62,
		"hash": "1552b25675479a590057be6699e1e341cf4b3212ab163a2c27fffe04340df21d"
	},
	{
		"id": "4a9d676b0667",
		"ts": "2026-08-17T10:27:42.655Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 256060.15,
		"hash": "4a9d676b06671ec47a88c6e0bec080c4f3cee70fb88951edec06dff98be53386"
	},
	{
		"id": "eca8dbc693e2",
		"ts": "2026-08-17T10:27:42.885Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 590132.48,
		"hash": "eca8dbc693e2ec2d5408749c84a3b0bdb7fe553e8a33211d26f385f8c5fcc782"
	},
	{
		"id": "7716612a38e7",
		"ts": "2026-08-17T10:27:43.113Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 73269.45,
		"hash": "7716612a38e7221f19a1a1b31708b13ffc49f259c4e2096838d6e65bcc5781a2"
	},
	{
		"id": "b6906d6300ec",
		"ts": "2026-08-17T09:36:30.550Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111520771.7,
		"hash": "b6906d6300ec7c71d8187814a6f262f1a52b2710a85785cac128fd6cf488d7d4"
	},
	{
		"id": "ab0232295362",
		"ts": "2026-08-17T09:36:31.050Z",
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
		"liquidityUsd": 17795396.14,
		"hash": "ab023229536239e927848f17261cfa15228fd16db28949bac4c4945aead18e5a"
	},
	{
		"id": "8580b99cea72",
		"ts": "2026-08-17T09:36:31.328Z",
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
		"liquidityUsd": 803712.06,
		"hash": "8580b99cea72e05d851ef59b749cd35f736b9a28c994a3b2d88fb8f884d0c1a3"
	},
	{
		"id": "0961d9afa657",
		"ts": "2026-08-17T09:36:31.606Z",
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
		"liquidityUsd": 26987038.66,
		"hash": "0961d9afa65743f47ac7400e524a8f4e08cf71ceefda76d0f703a50c0f73aff4"
	},
	{
		"id": "e742b3e468c7",
		"ts": "2026-08-17T09:36:31.884Z",
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
		"liquidityUsd": 4170646.72,
		"hash": "e742b3e468c759139387822ce4b9bcb2873c63617fbf25cb1ec17ac93f14aafa"
	},
	{
		"id": "58b5483a0b64",
		"ts": "2026-08-17T09:36:32.197Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890524.48,
		"hash": "58b5483a0b64a2b959fe84d66a00d821147ac38ed1d11bb89d0d0aec935b7a37"
	},
	{
		"id": "7c0dbcc560b8",
		"ts": "2026-08-17T09:36:32.518Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5162758.44,
		"hash": "7c0dbcc560b84f3a0fca290db02b9d1fb1a9c8276d8d9191e418c2ddde1edab9"
	},
	{
		"id": "39e7e457ba7c",
		"ts": "2026-08-17T09:36:32.810Z",
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
		"liquidityUsd": 3312895.22,
		"hash": "39e7e457ba7ca4e83d83244ccc484540bebe784ff51fcb3bfd3835cfaa76a601"
	},
	{
		"id": "fd0c4e239196",
		"ts": "2026-08-17T09:36:33.090Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 85721.28,
		"hash": "fd0c4e2391964ad019bf9da8995ac8d6f5a9e81374fa5b98f4aaeb801954e834"
	},
	{
		"id": "56c20b9a9b9f",
		"ts": "2026-08-17T09:36:33.367Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 85031.05,
		"hash": "56c20b9a9b9f2b4c2962eab24327617985e66eb53d47f9ef0fa100c703dd11cb"
	},
	{
		"id": "c507c7ef9c30",
		"ts": "2026-08-17T09:36:33.630Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5162772.31,
		"hash": "c507c7ef9c30ec8d47cc7291bb47a42c08b9bf67b4842f60fcb1b7622fb0fc14"
	},
	{
		"id": "2316529dc86a",
		"ts": "2026-08-17T09:36:34.022Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 517439.59,
		"hash": "2316529dc86ad6397a837012974a9e18df35e064b4117152b1b1f46e6b0c457b"
	},
	{
		"id": "4565f0842758",
		"ts": "2026-08-17T09:36:34.283Z",
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
		"liquidityUsd": 1496358.51,
		"hash": "4565f0842758a6b7f44a8a7b7e5e51f56a0b78f167f4c99ef6747186f1252a3e"
	},
	{
		"id": "5e23a433e0e7",
		"ts": "2026-08-17T09:36:34.544Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1002887.23,
		"hash": "5e23a433e0e7e40b2eeac07eb2f9c8205beb0e2bebf95cc5d3f92c7e17e13920"
	},
	{
		"id": "395831ae7b2c",
		"ts": "2026-08-17T09:36:34.805Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9606162.81,
		"hash": "395831ae7b2cc027372a6c5ced641457a1ad259ca5f03bff9e9ca7c4696a9d46"
	},
	{
		"id": "4466ce2d575e",
		"ts": "2026-08-17T09:36:35.066Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2575781.08,
		"hash": "4466ce2d575e44a9df617e63707f682d633b8cd8eb21e239fb1336812f646b8c"
	},
	{
		"id": "ec909929b081",
		"ts": "2026-08-17T09:36:35.327Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 691439.23,
		"hash": "ec909929b08188be804614bb5e34641ab435ff52c843d0545a13ecbbd729ecde"
	},
	{
		"id": "eddf0be0b4b6",
		"ts": "2026-08-17T09:36:35.588Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 80392.81,
		"hash": "eddf0be0b4b682cb675ebc02d2a198dcc94c7d314fd75d697bf28d42364e112f"
	},
	{
		"id": "5c8a0e366f88",
		"ts": "2026-08-17T09:36:35.849Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 256127.89,
		"hash": "5c8a0e366f884e6b33b6199b93ce228a9be5b12a769ad6bd6ae8914b7328923f"
	},
	{
		"id": "574e92b9fc4e",
		"ts": "2026-08-17T09:36:36.110Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 591526.85,
		"hash": "574e92b9fc4ef65fe9acd87a67ee02e327d57e88a295cc84bae4d98ee795036c"
	},
	{
		"id": "a3960a3fdb9f",
		"ts": "2026-08-17T08:38:15.363Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 111488552.53,
		"hash": "a3960a3fdb9f7b21394e69801e28418f6838add8162e11b913c1ffc5b45b4aa5"
	},
	{
		"id": "51b2ab17ecb5",
		"ts": "2026-08-17T08:38:34.067Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 18332827.73,
		"hash": "51b2ab17ecb5d87955106a065795affb5fda696bb1206bc2b88cc72ec7a889cb"
	},
	{
		"id": "09dcdc8bf7f4",
		"ts": "2026-08-17T08:38:47.409Z",
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
		"liquidityUsd": 805079.16,
		"hash": "09dcdc8bf7f4b4c1f0e0bfcaa5c75751d835affb3f81517f77651b9f768b7f40"
	},
	{
		"id": "35418af15255",
		"ts": "2026-08-17T08:38:49.904Z",
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
		"liquidityUsd": 27003872.51,
		"hash": "35418af152557812ab566d38e7208e33c0eba60313658b706961d5f15cbba87e"
	},
	{
		"id": "6612de16b943",
		"ts": "2026-08-17T08:38:56.342Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4164709.63,
		"hash": "6612de16b943dc2d7bbbd63d08052624d1ad43107f1b5aca7a622216ac9000b2"
	},
	{
		"id": "12db05a68e3d",
		"ts": "2026-08-17T08:38:56.565Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 892142.03,
		"hash": "12db05a68e3d4c8e9b659dfa23efb53bc9d8adabff5ab3743e6086a172055d2d"
	},
	{
		"id": "726a0a889f3a",
		"ts": "2026-08-17T08:38:56.778Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 5401129.26,
		"hash": "726a0a889f3a6115b2986e6e7d0eab24db10d8901d2949a22b6e21273200bceb"
	},
	{
		"id": "af90253b5d0c",
		"ts": "2026-08-17T08:38:56.995Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3312630.64,
		"hash": "af90253b5d0c0bc1cb3025b617d7e4a79b0d81949a1f1b406cc232f08954ac90"
	},
	{
		"id": "9e9325f90fe4",
		"ts": "2026-08-17T08:38:57.206Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 80530.15,
		"hash": "9e9325f90fe45d13b62d85d3fdabeda8448dde98225171262c1319136d8b927a"
	},
	{
		"id": "6ea4a9e22113",
		"ts": "2026-08-17T08:38:57.428Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 80069.44,
		"hash": "6ea4a9e22113b04608828496a4bdb8792862eed64483a303ebc4198107e2b5c0"
	},
	{
		"id": "2825101b3abe",
		"ts": "2026-08-17T08:38:57.651Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5419883.12,
		"hash": "2825101b3abe5a1dd7fc71e650f456a90ce419f49f3feeafd0473cb2fe0f0615"
	},
	{
		"id": "f44fce6122dc",
		"ts": "2026-08-17T08:38:57.876Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 554729.86,
		"hash": "f44fce6122dc08e9987088e1a798d7606bd9f56e8908dc2cb36eeb27d0e907e6"
	},
	{
		"id": "d5b95cf546a0",
		"ts": "2026-08-17T08:38:58.095Z",
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
		"liquidityUsd": 1516238.34,
		"hash": "d5b95cf546a03edaf9a90fac1511ebc76b69bce21299c217ae2c855b6591b0ad"
	},
	{
		"id": "93c7cac99088",
		"ts": "2026-08-17T08:38:58.307Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 998059.25,
		"hash": "93c7cac99088e6e81ee0d96f1a0fd7d2b54ef8c498bb3c2b72d19591dc3f2d8c"
	},
	{
		"id": "d91374d1cbd0",
		"ts": "2026-08-17T08:38:58.525Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9600535.33,
		"hash": "d91374d1cbd04a460fc7f5c1b52b272ca6a56b9b70579278a24e9accf73095c3"
	},
	{
		"id": "7cc0d2fe386e",
		"ts": "2026-08-17T08:38:58.736Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 87277.54,
		"hash": "7cc0d2fe386eff418a1e794c1d07d6b5c428edf3b78b006b2122ed2fd126ec51"
	},
	{
		"id": "50759fadaf15",
		"ts": "2026-08-17T08:38:58.985Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2576494.51,
		"hash": "50759fadaf151155291cb4daa3970a5babd1a3804570f377b7c4bc9a7e5cf1a8"
	},
	{
		"id": "563c84b45900",
		"ts": "2026-08-17T08:38:59.209Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 674029.94,
		"hash": "563c84b459009a910843d05243b627d9de75630c6de800b219b44df7cb182a52"
	},
	{
		"id": "681453579249",
		"ts": "2026-08-17T08:38:59.428Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263144.42,
		"hash": "6814535792497f777a0965ed1336a90d1be412206bd815195ef68d2e7894de11"
	},
	{
		"id": "915464c45d41",
		"ts": "2026-08-17T08:38:59.640Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 589533.25,
		"hash": "915464c45d416ee9a506ad718d3a1f56d156e6934683541cd2dea04d2c5971d7"
	},
	{
		"id": "1d55eaaa8eb6",
		"ts": "2026-08-17T07:49:09.390Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111703683.58,
		"hash": "1d55eaaa8eb66aeb39102c6ced74ef4708d12dc91ada94910204c10a5939f5b6"
	},
	{
		"id": "b1ef3b582a69",
		"ts": "2026-08-17T07:49:09.622Z",
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
		"liquidityUsd": 17949561.78,
		"hash": "b1ef3b582a69b685fab9912d4c003df45ee9a915ad9c9d86f80d62176a921c25"
	},
	{
		"id": "ef9570063c65",
		"ts": "2026-08-17T07:49:09.858Z",
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
		"liquidityUsd": 805079.16,
		"hash": "ef9570063c652c462d0870c94419a84f9470af0a8f032df76ba6887c39772af4"
	},
	{
		"id": "d66449ab1f22",
		"ts": "2026-08-17T07:49:10.089Z",
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
		"liquidityUsd": 27035663.52,
		"hash": "d66449ab1f22bf0e27297251fa86d0222aa723d510cab08c509b0d59d63a3b43"
	},
	{
		"id": "93d415dc2234",
		"ts": "2026-08-17T07:49:10.319Z",
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
		"liquidityUsd": 4197609.19,
		"hash": "93d415dc22342c2b84e0afddbb921a4e07292c4697a5ef0d787b989056606cc9"
	},
	{
		"id": "fd8d4985bee0",
		"ts": "2026-08-17T07:49:10.575Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894118.81,
		"hash": "fd8d4985bee00eb189c24d16fd65253ba1a0a6a719ab6c6b0bb5c3c49a01ab4d"
	},
	{
		"id": "4ab4e207d856",
		"ts": "2026-08-17T07:49:10.799Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5594188.8,
		"hash": "4ab4e207d85640c669908609b79dd413deec807699c1cfbd9dc50c3a57334bff"
	},
	{
		"id": "e68349713166",
		"ts": "2026-08-17T07:49:11.027Z",
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
		"liquidityUsd": 3326807.15,
		"hash": "e6834971316666a4a663870eca78608ea5dd531f1fd38522f3940cc8381759ee"
	},
	{
		"id": "0daede8274a9",
		"ts": "2026-08-17T07:49:11.273Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 84263.34,
		"hash": "0daede8274a9feb34a198bde2a3c7546dfb648c2923542f8789d33bcf2cfb4ec"
	},
	{
		"id": "660d6285a11a",
		"ts": "2026-08-17T07:49:11.500Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 81132.14,
		"hash": "660d6285a11ae4f1848457113235f1aeaf598f1399506861f7c40368072a547a"
	},
	{
		"id": "fbcd6ab8699d",
		"ts": "2026-08-17T07:49:11.717Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5594188.8,
		"hash": "fbcd6ab8699dbf12b440f67c03caf9f0669c52a5623699801d82e58d894d177b"
	},
	{
		"id": "f1078e3c1faf",
		"ts": "2026-08-17T07:49:11.927Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1004588.71,
		"hash": "f1078e3c1faf1847d2457c0ab1dfe2aefed800d350a4f429093b8ec5cd05eb50"
	},
	{
		"id": "dad887957cb0",
		"ts": "2026-08-17T07:49:12.146Z",
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
		"liquidityUsd": 1549271.69,
		"hash": "dad887957cb0b983bf284e450c18f0b275d377de441852658d59d6ef898321d3"
	},
	{
		"id": "4d80e971ce69",
		"ts": "2026-08-17T07:49:12.365Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 556462.1,
		"hash": "4d80e971ce693861cd9330b57a9f13f24302f800293de7d70aad057d21590d96"
	},
	{
		"id": "09e35e4a09a3",
		"ts": "2026-08-17T07:49:12.594Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263356.73,
		"hash": "09e35e4a09a3bd446b3cf2425971673206181f5494dd5e253b05c40f26b609e4"
	},
	{
		"id": "2bcc6f48d033",
		"ts": "2026-08-17T07:49:12.805Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9643174.79,
		"hash": "2bcc6f48d033c21bd421ffa0ddacab42b54c4eee74a73658ecb4cb615f18bcb3"
	},
	{
		"id": "67c82471230b",
		"ts": "2026-08-17T07:49:13.018Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77071.38,
		"hash": "67c82471230b65ca305ad7ba910049e4de17df0a6e76be6f5c3d52896f7ac344"
	},
	{
		"id": "79e04f2ce751",
		"ts": "2026-08-17T07:49:13.231Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2566493.46,
		"hash": "79e04f2ce751c2f81c7f7ce769ebcaebc3c69bdf992a569fb579fafaa179bf56"
	},
	{
		"id": "8484a42b8f11",
		"ts": "2026-08-17T07:49:13.448Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 700391.3,
		"hash": "8484a42b8f112b83fa9b4ea8bcad7c21b152263c9ef2f0d5b11d6ffc87480ce6"
	},
	{
		"id": "774394140d95",
		"ts": "2026-08-17T07:49:13.662Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 601127.58,
		"hash": "774394140d95e61da45780adf6e13eb95b0d0063bc65153d6c3ec44cacd2dea3"
	},
	{
		"id": "14cdd6ec0128",
		"ts": "2026-08-17T06:45:38.536Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111588283.58,
		"hash": "14cdd6ec012802f909d6bc5c7c599de457e7ae5fbd0a374ccd8891f9727ba3ca"
	},
	{
		"id": "b43c8f4af463",
		"ts": "2026-08-17T06:45:38.753Z",
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
		"liquidityUsd": 17956905.07,
		"hash": "b43c8f4af46338b01ca544ba2d4cbcab9490a322f9331b3d70873abefd754252"
	},
	{
		"id": "1ea20b7f1b3a",
		"ts": "2026-08-17T06:45:39.089Z",
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
		"liquidityUsd": 805079.16,
		"hash": "1ea20b7f1b3aac217fb7ab302972bf0f3ec59cd5a481982c64b3859cd6b650d9"
	},
	{
		"id": "0ea953c19b8f",
		"ts": "2026-08-17T06:45:39.276Z",
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
		"liquidityUsd": 27034853.54,
		"hash": "0ea953c19b8fc58746a929421bea4184cabf79398b76e480e7c207f442664559"
	},
	{
		"id": "c6f626d5e00b",
		"ts": "2026-08-17T06:45:39.670Z",
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
		"liquidityUsd": 4177751.49,
		"hash": "c6f626d5e00b05a9d0bea27c0a548310406e90cdc9051c6b04000a6eb4e87c6d"
	},
	{
		"id": "e38afe62ff95",
		"ts": "2026-08-17T06:45:39.851Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894118.81,
		"hash": "e38afe62ff95ea2fd74a6106356b593b361a16132927ceb01a1621316f760ec2"
	},
	{
		"id": "c52f96ee324e",
		"ts": "2026-08-17T06:45:40.039Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5793279.11,
		"hash": "c52f96ee324e4f2abd72b86e3c2ecac76e49c4086e0025d9eb61165fcc14845a"
	},
	{
		"id": "2af9e2f7721b",
		"ts": "2026-08-17T06:45:40.247Z",
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
		"liquidityUsd": 3327311.41,
		"hash": "2af9e2f7721b9256a0e93c278d87fa1f2b9eea165c03f0cee50f6d4a61997e73"
	},
	{
		"id": "9825acab9db1",
		"ts": "2026-08-17T06:45:40.585Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 88810.3,
		"hash": "9825acab9db1f97cf5cb0e10dc6c551d86e61db3f35225ad7ffb32ad851ddec3"
	},
	{
		"id": "b6ddce299fde",
		"ts": "2026-08-17T06:45:40.779Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 82132.41,
		"hash": "b6ddce299fde62e32e308dd789b82482461856542e9026aadc0048ae284badd3"
	},
	{
		"id": "1ae06518f43f",
		"ts": "2026-08-17T06:45:40.976Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1013313.57,
		"hash": "1ae06518f43fc78cb6531ad6999f55b27bd024e0d073a0692f08e49be62ef9d8"
	},
	{
		"id": "a10ffd9acb24",
		"ts": "2026-08-17T06:45:41.190Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5779073.5,
		"hash": "a10ffd9acb24affb0d023fecd4ed31691a417fb8d18e21c4a7e6373fa122400e"
	},
	{
		"id": "7eec4fe8bf7d",
		"ts": "2026-08-17T06:45:41.361Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 643618.91,
		"hash": "7eec4fe8bf7dd283bbc63f6eb013d5b58070dce1cf8080d2e7165a2a31a384c8"
	},
	{
		"id": "47fd286dc6c6",
		"ts": "2026-08-17T06:45:41.556Z",
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
		"liquidityUsd": 1426809.57,
		"hash": "47fd286dc6c6d06514c73cb2527d87232fa1e035723df5a594eced18f82533cb"
	},
	{
		"id": "eb0ceea64dce",
		"ts": "2026-08-17T06:45:41.747Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263408.65,
		"hash": "eb0ceea64dcebf9149ff1c8bd163ed8d6cf90c818bbf3317a545f74982307a84"
	},
	{
		"id": "373d1b92bc25",
		"ts": "2026-08-17T06:45:41.945Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2595432.01,
		"hash": "373d1b92bc25748e390f57df8348a7f9f33baac0a3dc62f12ccae4b0f8d5dbbd"
	},
	{
		"id": "2f5895dfd333",
		"ts": "2026-08-17T06:45:42.146Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9638146.97,
		"hash": "2f5895dfd3335aa43ed2a94986f2961a1f2dccb45beab0194983f2ecd2736096"
	},
	{
		"id": "acb09385f999",
		"ts": "2026-08-17T06:45:42.331Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 88970.53,
		"hash": "acb09385f999af066954681e45d20a89cb034d02e0515bda879d2969d12c32d6"
	},
	{
		"id": "c0ae4c14c9ae",
		"ts": "2026-08-17T06:45:42.539Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 590502.6,
		"hash": "c0ae4c14c9ae8492607d5ab9875b6a738487f042ff2f4395701ebc799ed85316"
	},
	{
		"id": "3c468c0ee8f9",
		"ts": "2026-08-17T06:45:42.717Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 727525.17,
		"hash": "3c468c0ee8f9064ca8a5f467e6983d692a7941cb8834bafccae0442b00c18d01"
	},
	{
		"id": "efd8bb35b347",
		"ts": "2026-08-17T05:31:32.565Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111602756.78,
		"hash": "efd8bb35b347b020805ca536fb49523512a6cb1dfe7fe45a47a964979d11db73"
	},
	{
		"id": "d0104f2b6a30",
		"ts": "2026-08-17T05:31:32.800Z",
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
		"liquidityUsd": 18091242.35,
		"hash": "d0104f2b6a3051cf406c9f683edb07276e01e6fef61d1d31648dcb9a141e1cfc"
	},
	{
		"id": "6a7b056fb6f5",
		"ts": "2026-08-17T05:31:33.034Z",
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
		"liquidityUsd": 805905.66,
		"hash": "6a7b056fb6f538287d63740eb8931b628738fc593323d1af41243dab21fce4b7"
	},
	{
		"id": "95f0f97d341f",
		"ts": "2026-08-17T05:31:33.296Z",
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
		"liquidityUsd": 27035272.23,
		"hash": "95f0f97d341f311dff22cfc7e42036df13e200ada8b81c21a52371fe08e9f181"
	},
	{
		"id": "cbf4edffeec2",
		"ts": "2026-08-17T05:31:33.521Z",
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
		"liquidityUsd": 4180799.38,
		"hash": "cbf4edffeec23b1c210b5c35252cc65a441f200adba97a4a7224aaca503f59df"
	},
	{
		"id": "c3a92a96e6ea",
		"ts": "2026-08-17T05:31:33.786Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894118.81,
		"hash": "c3a92a96e6eadb93387774eef5cc0804b7d84bbcdc6e7aa8e72fc312de6e6acb"
	},
	{
		"id": "1414bc4cfc6e",
		"ts": "2026-08-17T05:31:34.059Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5905236.84,
		"hash": "1414bc4cfc6eff0488fe16f9670217e3b7f38992ef415aaa2fcd48ab2aa1edce"
	},
	{
		"id": "ce8f5133f89c",
		"ts": "2026-08-17T05:31:34.310Z",
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
		"liquidityUsd": 3410694.88,
		"hash": "ce8f5133f89cd874e606ef83c0d1635556351cdb1228c9e159de66e95c9a9508"
	},
	{
		"id": "75a60f510e62",
		"ts": "2026-08-17T05:31:34.604Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 55497.31,
		"hash": "75a60f510e629cb968299be8916b1e6074b2e0e2280e20eb925429f448290f1a"
	},
	{
		"id": "a13a392c5475",
		"ts": "2026-08-17T05:31:34.841Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 94313.46,
		"hash": "a13a392c54755ae853fa1046859164fe7299b91217348cf272c6d133cb9ccedb"
	},
	{
		"id": "86ff670c43b2",
		"ts": "2026-08-17T05:31:35.050Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1027232.92,
		"hash": "86ff670c43b22116aef006134e9dfbd24dc3f7f11ccc2db901268e1c0d2f5d4d"
	},
	{
		"id": "3aac362b6853",
		"ts": "2026-08-17T05:31:35.265Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5892167.93,
		"hash": "3aac362b6853fceff4158d0f6b655e204b04b823387e4d8721e1ba59eb338d0a"
	},
	{
		"id": "db482427f709",
		"ts": "2026-08-17T05:31:35.484Z",
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
		"liquidityUsd": 1378064.25,
		"hash": "db482427f709b0feb9192a36367becd68896f084b55bbed5884c8a9e737a0b8c"
	},
	{
		"id": "f7d901be4e23",
		"ts": "2026-08-17T05:31:35.694Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 262808.91,
		"hash": "f7d901be4e234df51e405ac4bfe1a104d97050e287262f8306520e0acc74c95d"
	},
	{
		"id": "a1b14f0da404",
		"ts": "2026-08-17T05:31:35.912Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2599133.79,
		"hash": "a1b14f0da40434ee4932584d7cc3b9eafa51ad3361c20cfc3c75e221957b09af"
	},
	{
		"id": "e892bd191174",
		"ts": "2026-08-17T05:31:36.135Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 515955.85,
		"hash": "e892bd191174b7010c26c5c12cf75da200de18608a3e10afb4a2e2fe69c30186"
	},
	{
		"id": "57ac811cdc5f",
		"ts": "2026-08-17T05:31:36.344Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9615162.07,
		"hash": "57ac811cdc5ff4a4ffe836197ad45bb2d3346481f4aad95c5ced0b5d3fb592e1"
	},
	{
		"id": "ba1401802e37",
		"ts": "2026-08-17T05:31:36.558Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77610.67,
		"hash": "ba1401802e3714bda19c73b4373e4ea60a374a7bb2c69837bdfaa453a663b336"
	},
	{
		"id": "fa57b14e9549",
		"ts": "2026-08-17T05:31:36.775Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 655367.17,
		"hash": "fa57b14e954935d72d00174e9131555ff879ca0f5c691e22b4aa2093ce6092ba"
	},
	{
		"id": "8b6564251131",
		"ts": "2026-08-17T05:31:36.985Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 590405.84,
		"hash": "8b6564251131c100de2448c52d31a3eec306c7a19506fd749dc14f672be5d8c3"
	},
	{
		"id": "1cf94adce8ae",
		"ts": "2026-08-17T04:36:59.939Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111591573.21,
		"hash": "1cf94adce8ae659db1cfbad7537bbf725ed646d5b223ed5604286229f8d05393"
	},
	{
		"id": "012ac02e602a",
		"ts": "2026-08-17T04:37:00.203Z",
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
		"liquidityUsd": 17603232.73,
		"hash": "012ac02e602a2d3b3062205d9b98309ca4efbe18ba4ff513346b6a820bfedbbc"
	},
	{
		"id": "c6f4e15cbfad",
		"ts": "2026-08-17T04:37:00.424Z",
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
		"liquidityUsd": 805905.66,
		"hash": "c6f4e15cbfad9de174e9d74922295d085204c4a64647285ea33ef227dc0f5dc8"
	},
	{
		"id": "944b7bbedb94",
		"ts": "2026-08-17T04:37:00.748Z",
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
		"liquidityUsd": 27032996.61,
		"hash": "944b7bbedb94331af2fd25d96387d2bb0dd33307a070f8fdb4b10a800139e860"
	},
	{
		"id": "96f221278c4c",
		"ts": "2026-08-17T04:37:00.967Z",
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
		"liquidityUsd": 4182971.4,
		"hash": "96f221278c4c2d037a1f2814f52c30e71e4f99fdfe55d45ec597961946cfd34e"
	},
	{
		"id": "599065985218",
		"ts": "2026-08-17T04:37:01.207Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894118.81,
		"hash": "5990659852185df0b3cb61c76c87142351c16eb345f694266c172de4b5ac90a7"
	},
	{
		"id": "8f46c961b81c",
		"ts": "2026-08-17T04:37:01.474Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5969079.74,
		"hash": "8f46c961b81c6557ebeb04b0204077f0905e59e3aa31bc9035dc691f19a1958b"
	},
	{
		"id": "e98058b0de99",
		"ts": "2026-08-17T04:37:01.699Z",
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
		"liquidityUsd": 3406777.26,
		"hash": "e98058b0de99e37363c48209ee6958e5afdd6c9fad2d2e829b3c6fd6d14098d9"
	},
	{
		"id": "c7553b08ef20",
		"ts": "2026-08-17T04:37:01.985Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 53741.9,
		"hash": "c7553b08ef204345e2e26a0ac2cfc2013b7c3624cc398690922f9d30a8efccf3"
	},
	{
		"id": "c1ad3090a708",
		"ts": "2026-08-17T04:37:02.253Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 80849.54,
		"hash": "c1ad3090a70855bb9c604b93a11c7c3b8d27872700654ef4938ab06b9a066657"
	},
	{
		"id": "f3a96714637e",
		"ts": "2026-08-17T04:37:02.579Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5969079.74,
		"hash": "f3a96714637e38af32a095b1510032f4dff6404ef1aaed00ab63c85bd79eb833"
	},
	{
		"id": "d3724058cfae",
		"ts": "2026-08-17T04:37:02.787Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1043278.73,
		"hash": "d3724058cfaed6f7afc8b97a02f47c7d9accc70f5bc7717c32b278c7031f6392"
	},
	{
		"id": "8914fed4a936",
		"ts": "2026-08-17T04:37:02.999Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266996.84,
		"hash": "8914fed4a936dc1a6c542c6ea74a436657bf2ecd13cc84262085c2edbddc108e"
	},
	{
		"id": "14c381ee66c9",
		"ts": "2026-08-17T04:37:03.205Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2581428.79,
		"hash": "14c381ee66c9aa3c16a6f606d0b0d032ba25303aeee850807300601a784af057"
	},
	{
		"id": "7fa5820dbbc5",
		"ts": "2026-08-17T04:37:03.428Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 547821.99,
		"hash": "7fa5820dbbc522c286e21fc9a0875cd15a349a82679b4257a59dc38230a9ba97"
	},
	{
		"id": "02631a224c5f",
		"ts": "2026-08-17T04:37:03.640Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 91111.11,
		"hash": "02631a224c5f8f77ddeb998260c0bb62f9425fd782b5157f0b1d7277e572249b"
	},
	{
		"id": "9502ef51ac3c",
		"ts": "2026-08-17T04:37:03.867Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 576162.32,
		"hash": "9502ef51ac3c8ef8c05a11d5fe371a524f0c51621bdc5dc290bbea88297b8157"
	},
	{
		"id": "8f6efe4330e3",
		"ts": "2026-08-17T04:37:04.069Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 652653.62,
		"hash": "8f6efe4330e3fc0bf74dc7a43668bf100728e34ad275c863746fc064c776c92d"
	},
	{
		"id": "192a2503c1f1",
		"ts": "2026-08-17T04:37:04.267Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348663.4,
		"hash": "192a2503c1f1667f8f4ad9dce441bc75c3be67121b99c496d69a1a1b5ded3e9f"
	},
	{
		"id": "1cd834b6b918",
		"ts": "2026-08-17T04:37:04.479Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 898599.38,
		"hash": "1cd834b6b9188875543d2009de39f53ac3357396f863d06af0270c045a9b4206"
	},
	{
		"id": "92ff5b92aa65",
		"ts": "2026-08-17T03:47:24.199Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111727024.59,
		"hash": "92ff5b92aa65eabf14d1ca10cab1ad9369aa9ce5c973a366f44798ac25ad4c83"
	},
	{
		"id": "2d6353be0e0c",
		"ts": "2026-08-17T03:47:24.633Z",
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
		"liquidityUsd": 17564342.62,
		"hash": "2d6353be0e0c22c5843f3814e5dd8ed799c3dd5ed51acfb55e42877688637442"
	},
	{
		"id": "6811273929dc",
		"ts": "2026-08-17T03:47:24.868Z",
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
		"liquidityUsd": 804937.44,
		"hash": "6811273929dc4226f94ee6ee62f62241785658569959c673a5d50e4da0c255c5"
	},
	{
		"id": "133a6e6b3a65",
		"ts": "2026-08-17T03:47:25.096Z",
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
		"liquidityUsd": 27033145.13,
		"hash": "133a6e6b3a65ef0ffa772e3ab0d11c40ea6b2ca65883db0f7855386103e152ed"
	},
	{
		"id": "a83c6bb14640",
		"ts": "2026-08-17T03:47:25.343Z",
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
		"liquidityUsd": 4176524.28,
		"hash": "a83c6bb146409e351090ae989dcf0d569e106dc9e86aa5fc1c901dc0aaf2e0e1"
	},
	{
		"id": "804a8cf68d94",
		"ts": "2026-08-17T03:47:25.579Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888345.83,
		"hash": "804a8cf68d948778589df5422200a228c9d72844bbe781291687a08ebd7402e2"
	},
	{
		"id": "ffc7085abefe",
		"ts": "2026-08-17T03:47:25.816Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6046471.79,
		"hash": "ffc7085abefe8989d63547702974530e9e30b6bc192b98f7c12bac8744f75426"
	},
	{
		"id": "52177255585f",
		"ts": "2026-08-17T03:47:26.050Z",
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
		"liquidityUsd": 3403390.67,
		"hash": "52177255585f6cb456ed73f2ca9b2e024907e899a6535fc71932714042dfe6f3"
	},
	{
		"id": "1f65d68a5e2b",
		"ts": "2026-08-17T03:47:26.289Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 50622.84,
		"hash": "1f65d68a5e2b6405f5c3a8155d82809c7adcb34e2a3f5c0cbff708cd53334e45"
	},
	{
		"id": "3684427da58a",
		"ts": "2026-08-17T03:47:26.553Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 75706.44,
		"hash": "3684427da58a52c59597a634b36d7ec7d59f402e9250388191acce4487136b7a"
	},
	{
		"id": "0f5e3a879690",
		"ts": "2026-08-17T03:47:26.775Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6042662.44,
		"hash": "0f5e3a879690cb53976f00c8d5cb57b56e162021f4aa43fe46c3e2ec0eae9e83"
	},
	{
		"id": "6e26621a998d",
		"ts": "2026-08-17T03:47:26.988Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1042243.44,
		"hash": "6e26621a998d49dab31ce8fc5fdf237e15d54f37c9d5e20fddfd6e9650e70f42"
	},
	{
		"id": "98d0e05c0569",
		"ts": "2026-08-17T03:47:27.206Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 270168.01,
		"hash": "98d0e05c056925435b0bd8879568e375a47d4414308b6c03dc567a552eee4cdd"
	},
	{
		"id": "a1966a952cfb",
		"ts": "2026-08-17T03:47:27.422Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2502363.56,
		"hash": "a1966a952cfbc4938927a249ff42956e9f90bc690739b5fd720397a6ad481f32"
	},
	{
		"id": "9d9b0269c30a",
		"ts": "2026-08-17T03:47:27.642Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 482999.63,
		"hash": "9d9b0269c30a2dc0581b4e591ebf82bc6bd739423455fb43b97cd5c20e728321"
	},
	{
		"id": "27e8c0b58e37",
		"ts": "2026-08-17T03:47:27.860Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 76234.86,
		"hash": "27e8c0b58e37513d111bdd3c6baad81a8b0bb2ca8163f826b0658b078d03e083"
	},
	{
		"id": "b36d625090f7",
		"ts": "2026-08-17T03:47:28.075Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 577254.22,
		"hash": "b36d625090f73e52fef0d314f370f86d261bbd8e16cb75cff60a40fea8c1dfca"
	},
	{
		"id": "6daa20fb471d",
		"ts": "2026-08-17T03:47:28.296Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 648288.37,
		"hash": "6daa20fb471d75dd0368009e8574190295c945ff6c13ca57d9571d6b38c5a18c"
	},
	{
		"id": "1fe4661fefab",
		"ts": "2026-08-17T03:47:28.509Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348252.79,
		"hash": "1fe4661fefab5101d38516e04fe8e42b364db94d235e88403fcd9e9d00a07666"
	},
	{
		"id": "a19a621f5271",
		"ts": "2026-08-17T03:47:28.726Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 895647.08,
		"hash": "a19a621f527127064132d82b81424d32f6b06cab5cd1102a45e964a63cab3c60"
	},
	{
		"id": "23598193efc7",
		"ts": "2026-08-17T02:55:57.655Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111975249.42,
		"hash": "23598193efc7b6d286a3c61e586dded237a843f9813ecbee58adc31b3e738b45"
	},
	{
		"id": "4273787751cb",
		"ts": "2026-08-17T02:55:58.136Z",
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
		"liquidityUsd": 17284627.93,
		"hash": "4273787751cbe495bebec96aebcdac70d01edca4a9768d1c93c9f595968c101d"
	}
]
