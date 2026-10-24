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
	"updatedAt": "2026-10-24T05:20:51.964Z",
	"tokensScored": 21214,
	"verdictsIssued": 21214,
	"safe": 18086,
	"risky": 1496,
	"likelyRug": 1632,
	"ticks": 1197
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "374c65d34308",
		"ts": "2026-10-24T05:20:47.988Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156350523.55,
		"hash": "374c65d3430897615c05b3af05f58b78e488eb9c6d2ea1d6a02415b02230c127"
	},
	{
		"id": "f92b428b8edb",
		"ts": "2026-10-24T05:20:48.246Z",
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
		"liquidityUsd": 16443819.63,
		"hash": "f92b428b8edb57bf2a8deeb4a5f180cc2f131aeaa347c9b744eb3778cf14ca57"
	},
	{
		"id": "11652f391676",
		"ts": "2026-10-24T05:20:48.457Z",
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
		"liquidityUsd": 263720.97,
		"hash": "11652f3916766ea8ec7eb90793e63268fb737ca957ee931cbedbe6f015bf00e5"
	},
	{
		"id": "cab797ca59b9",
		"ts": "2026-10-24T05:20:48.679Z",
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
		"liquidityUsd": 9785504.24,
		"hash": "cab797ca59b9f2682dcfe63dc2dc2b4964e066dbe81123ae7d65b2214cb1a866"
	},
	{
		"id": "c11b19b2d4ee",
		"ts": "2026-10-24T05:20:48.894Z",
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
		"liquidityUsd": 3339835.52,
		"hash": "c11b19b2d4ee55f167f8ed180ae53e6ff93324e923d32b2dc481a8a0f2a5e03d"
	},
	{
		"id": "d251c5ae37f6",
		"ts": "2026-10-24T05:20:49.119Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1141739.1,
		"hash": "d251c5ae37f63f90ccbe8c1ef0b113ffc593d392a15cfed8c700e0f57cebf077"
	},
	{
		"id": "83b1de24f48e",
		"ts": "2026-10-24T05:20:49.352Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2473330.59,
		"hash": "83b1de24f48ed36cd969b7ab8087f5f1a76b571c8e69f28ca149dbe0c43315c8"
	},
	{
		"id": "d4e59240a632",
		"ts": "2026-10-24T05:20:49.576Z",
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
		"liquidityUsd": 2401985.84,
		"hash": "d4e59240a6322f61d4f41742d4316297660353295e8b2e6981d7d42f26002298"
	},
	{
		"id": "09181b0559cd",
		"ts": "2026-10-24T05:20:49.813Z",
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
		"liquidityUsd": 2473330.59,
		"hash": "09181b0559cd04c44d44ff9fd21ec41186bf37a7c0ae28ed2907c5cf044009d7"
	},
	{
		"id": "5f03d9fd95b4",
		"ts": "2026-10-24T05:20:50.052Z",
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
		"liquidityUsd": 1753184.52,
		"hash": "5f03d9fd95b49ea59c5022cbbed01f2648dad7ced5dba6f80748c70f613604da"
	},
	{
		"id": "cf17ac89fde1",
		"ts": "2026-10-24T05:20:50.263Z",
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
		"liquidityUsd": 1033966.44,
		"hash": "cf17ac89fde163b0b818353973024a867a4cbb551feb9fb9e5eaae4b7e1a4204"
	},
	{
		"id": "7c52962c6f2c",
		"ts": "2026-10-24T05:20:50.456Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1208599,
		"hash": "7c52962c6f2cdcb8a119d00a9dfddc0e718c57440f52d9bc35614139643cd2a9"
	},
	{
		"id": "afe25998ea38",
		"ts": "2026-10-24T05:20:50.652Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 961253.04,
		"hash": "afe25998ea38b50d47552b66429ed20badf7b5c3ed927665733d1f379c14a718"
	},
	{
		"id": "13292fc27061",
		"ts": "2026-10-24T05:20:50.884Z",
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
		"liquidityUsd": 12453528.94,
		"hash": "13292fc270612a8c36e3061ab0e812cffdbf0cb8f3ced4d40d21951ee34c33b3"
	},
	{
		"id": "13999dfa4522",
		"ts": "2026-10-24T05:20:51.080Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4322364.15,
		"hash": "13999dfa45221cbe24efe5b99721bbe43bc052be87bca4128eff6cc62f90fbd3"
	},
	{
		"id": "5208c53b199d",
		"ts": "2026-10-24T05:20:51.287Z",
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
		"liquidityUsd": 3168903.07,
		"hash": "5208c53b199d44093f817d083750c1f8a9a17fc388507007c9125407068b3e3f"
	},
	{
		"id": "c0889c892a0b",
		"ts": "2026-10-24T05:20:51.548Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56007.55,
		"hash": "c0889c892a0be298b6267882052dc271a7666f6de503a930d162d9310fcf79db"
	},
	{
		"id": "6fe0352c6bdc",
		"ts": "2026-10-24T05:20:51.765Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3770610.46,
		"hash": "6fe0352c6bdc56ec60d3e12efce1e8e8bc204c72c9e9aab9ce30230f1ab053d5"
	},
	{
		"id": "d6590427e09c",
		"ts": "2026-10-24T05:20:51.964Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3978647.88,
		"hash": "d6590427e09c5c72c86be5eae06b399092e3b7389df8c1b756b0a1697267996b"
	},
	{
		"id": "8d02583b048b",
		"ts": "2026-10-24T00:13:18.559Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156505853.53,
		"hash": "8d02583b048be8a789b7cf14caac55319e36172f415c9f7f2832ba2482d2fe50"
	},
	{
		"id": "d9fbe06a5b93",
		"ts": "2026-10-24T00:13:18.779Z",
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
		"liquidityUsd": 16453708.17,
		"hash": "d9fbe06a5b93fc0a1ef3eac3d401f6177d62f59f53e750d23a524fc4389017d7"
	},
	{
		"id": "5267f94bd5de",
		"ts": "2026-10-24T00:13:19.029Z",
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
		"liquidityUsd": 265105.72,
		"hash": "5267f94bd5de51f5b63d40032a18c86fc8a54b96ed204662a639bf95fa6c895d"
	},
	{
		"id": "c9f4845f81e9",
		"ts": "2026-10-24T00:13:19.248Z",
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
		"liquidityUsd": 9869429.54,
		"hash": "c9f4845f81e92079f5120a02613149c4a2f04e9b6aae1f60a0a2ea7ee8d02f22"
	},
	{
		"id": "95da69680b80",
		"ts": "2026-10-24T00:13:19.460Z",
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
		"liquidityUsd": 3354998.99,
		"hash": "95da69680b80aadb157b23ac6add2601b5716bb504e1c39204f19eb1bf68164c"
	},
	{
		"id": "d17fd9c0d7e5",
		"ts": "2026-10-24T00:13:19.676Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1125393.32,
		"hash": "d17fd9c0d7e5d97227904d178f1988e429da550b340926d1e841a970da3182bf"
	},
	{
		"id": "e8dc168a458e",
		"ts": "2026-10-24T00:13:19.893Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 9869429.54,
		"hash": "e8dc168a458e11792575f8dc7abb49680f81c7050c8ceb11d0ecf6f6d09ece0b"
	},
	{
		"id": "346902a455f1",
		"ts": "2026-10-24T00:13:20.118Z",
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
		"liquidityUsd": 2419701.68,
		"hash": "346902a455f1520e427af7eb5ee277df510e16bcc69a0a81af29ebdb6e65a944"
	},
	{
		"id": "61be93190a9d",
		"ts": "2026-10-24T00:13:20.346Z",
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
		"liquidityUsd": 2473293.91,
		"hash": "61be93190a9dc2c1345cf372bf862ec3b557fda3e297985a9bc3994ed3093c5a"
	},
	{
		"id": "536d28797522",
		"ts": "2026-10-24T00:13:20.602Z",
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
		"liquidityUsd": 1726115.67,
		"hash": "536d287975224fa70aaa63179b928abc8a0dde718d78fc2a9396502c73ac8099"
	},
	{
		"id": "73233070693e",
		"ts": "2026-10-24T00:13:20.796Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1230199.74,
		"hash": "73233070693ec35ff527b5575b63646f4de6fecc74fe6d07e2f18dad5c7f449c"
	},
	{
		"id": "2dee5c430b59",
		"ts": "2026-10-24T00:13:20.999Z",
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
		"liquidityUsd": 1035920.49,
		"hash": "2dee5c430b59e5f68e406a7c8121457e3259726b21f86b52418d799b49401c27"
	},
	{
		"id": "27b67d92086b",
		"ts": "2026-10-24T00:13:21.210Z",
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
		"liquidityUsd": 12532315.94,
		"hash": "27b67d92086b4ea23a22a916a6a0d9ee266188dafc70801a49f127275a45b753"
	},
	{
		"id": "b95969836e44",
		"ts": "2026-10-24T00:13:21.420Z",
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
		"liquidityUsd": 3177261.01,
		"hash": "b95969836e44aad37f7e8ff3bc59fb495431dbd8637b9dfd3b7f45328485cb75"
	},
	{
		"id": "d669f57f8de6",
		"ts": "2026-10-24T00:13:21.631Z",
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
		"liquidityUsd": 969934.73,
		"hash": "d669f57f8de68cc3a7f1826d396910dd5ce76aaf88783e46147c49fa1e938a64"
	},
	{
		"id": "69bb9b151883",
		"ts": "2026-10-24T00:13:21.838Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4373521.74,
		"hash": "69bb9b1518830e794772f592348b45bd9ac20a3143bd1f7e70d74cab4438211d"
	},
	{
		"id": "876a6de3d707",
		"ts": "2026-10-24T00:13:22.040Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4393007.9,
		"hash": "876a6de3d70713b6b3ece5291f9fa11415205fe65628442ba6218831e210bb48"
	},
	{
		"id": "2d85f4403f90",
		"ts": "2026-10-24T00:13:22.240Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 69488.9,
		"hash": "2d85f4403f903d2d7c652678e50fa264af34044e544c14c3bf478390db8e7bc9"
	},
	{
		"id": "9564575d2b42",
		"ts": "2026-10-24T00:13:22.477Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55811.44,
		"hash": "9564575d2b42883e7840df2e1b21459caa4899ffdd1b07a36e86b05922deccf5"
	},
	{
		"id": "dcc81b3417b1",
		"ts": "2026-10-23T21:49:12.598Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157220436.02,
		"hash": "dcc81b3417b1350d1eb25087f33dc8e74b6c28c2c573cfea7eb8dac0f22a9b27"
	},
	{
		"id": "440fb6221ad6",
		"ts": "2026-10-23T21:49:13.087Z",
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
		"liquidityUsd": 16556461.38,
		"hash": "440fb6221ad61e6c1ea0ab02467d92acb4f86276787ec5e07a860a2bc6c7c0fd"
	},
	{
		"id": "5362dca6d720",
		"ts": "2026-10-23T21:49:13.366Z",
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
		"liquidityUsd": 267124.24,
		"hash": "5362dca6d720a90ccf846a5fead30d7675b39f7b2d793af954ca6b2c0d5c4473"
	},
	{
		"id": "79349efd331e",
		"ts": "2026-10-23T21:49:13.634Z",
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
		"liquidityUsd": 10324633.47,
		"hash": "79349efd331e29699cfd5f066bf46af0718b89ea38dcff703512647900ae8571"
	},
	{
		"id": "ccead4ce3b0c",
		"ts": "2026-10-23T21:49:13.893Z",
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
		"liquidityUsd": 3392527.94,
		"hash": "ccead4ce3b0c9564804133f7a37252d6bf1ae784fdcc02d5837ca553a21696f2"
	},
	{
		"id": "3455fc87065c",
		"ts": "2026-10-23T21:49:14.176Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1158205.78,
		"hash": "3455fc87065c1bf7c491c5944366373316b6ab3bf5e246814cbd50e3d7d5881d"
	},
	{
		"id": "3864cdc23234",
		"ts": "2026-10-23T21:49:14.447Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 10324633.47,
		"hash": "3864cdc232341fe97f9c97cbc63129521a54ea0fa0fac0c2f8dd14d1664bc2bf"
	},
	{
		"id": "082cabbc9ffa",
		"ts": "2026-10-23T21:49:14.747Z",
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
		"liquidityUsd": 1924731.69,
		"hash": "082cabbc9ffa09ffdd963ea6250f8ba205ab9387ac535d6816f07a49b328a5c1"
	},
	{
		"id": "7026981155e4",
		"ts": "2026-10-23T21:49:15.228Z",
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
		"liquidityUsd": 2467202.32,
		"hash": "7026981155e4cc8d3f10ade12bb267988135c4b28b013b6804232a67fa54a84b"
	},
	{
		"id": "1f461a697d55",
		"ts": "2026-10-23T21:49:15.499Z",
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
		"liquidityUsd": 1767570.96,
		"hash": "1f461a697d55bb128e560cb90b4c8797c6354313fd65d15831c0e12207fa8cc1"
	},
	{
		"id": "56ae4ff83053",
		"ts": "2026-10-23T21:49:15.794Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1255489.19,
		"hash": "56ae4ff8305353970468c66ac07779be2ed5fd8dcbffcc3da6979a757791b0dc"
	},
	{
		"id": "1efcd9ff3c86",
		"ts": "2026-10-23T21:49:16.030Z",
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
		"liquidityUsd": 1044226.35,
		"hash": "1efcd9ff3c86c981a434ac3cee104c6c42df97d50cdf2c5daf91f356838f0b33"
	},
	{
		"id": "da424c6f042c",
		"ts": "2026-10-23T21:49:16.258Z",
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
		"liquidityUsd": 3211135.18,
		"hash": "da424c6f042c033ee694f187e6e41e7c9f6bd25ae7589bde97adb09ae89754ec"
	},
	{
		"id": "9cf86b1bc43e",
		"ts": "2026-10-23T21:49:16.495Z",
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
		"liquidityUsd": 12577361.15,
		"hash": "9cf86b1bc43e6c2d417783b88ebdf92aa0aa4d6c3ae75752e4608945ffb7ec23"
	},
	{
		"id": "9e9ce8981f56",
		"ts": "2026-10-23T21:49:16.744Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4568205.1,
		"hash": "9e9ce8981f56cb34958ad72533fd11bc94f649409b42ac05a059491b419fe54c"
	},
	{
		"id": "0e23079546d0",
		"ts": "2026-10-23T21:49:16.976Z",
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
		"liquidityUsd": 973341.22,
		"hash": "0e23079546d05b3c7947d645ea4b076de0722698e9019cb69e2556bb1de06321"
	},
	{
		"id": "45758e0c4a38",
		"ts": "2026-10-23T21:49:17.207Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56440.77,
		"hash": "45758e0c4a3868cb4ac2d04905cc12333f16fb207834be604cd1189db635c29b"
	},
	{
		"id": "92fd814db35c",
		"ts": "2026-10-23T21:49:17.441Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1945673.27,
		"hash": "92fd814db35cdf3939d0e7285f96d7e68fbbdad394a3ce1702cf1a36e7448e5c"
	},
	{
		"id": "14e572b932a7",
		"ts": "2026-10-23T21:49:17.668Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 677733.61,
		"hash": "14e572b932a7eb314721bfd9199f90c6ed741fae53bb461ed3029271847e92f9"
	},
	{
		"id": "a96351e7ffdc",
		"ts": "2026-10-23T18:52:00.615Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157320750.92,
		"hash": "a96351e7ffdcb1fcc2d27d39a06a9a71159b03e5da6056558d2e633be192de54"
	},
	{
		"id": "f7d311587f13",
		"ts": "2026-10-23T18:52:01.180Z",
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
		"liquidityUsd": 16575384.87,
		"hash": "f7d311587f13c6b86b198757af22d69488c6b70ad9dc01587ce0e70087720e08"
	},
	{
		"id": "fec6b4dba803",
		"ts": "2026-10-23T18:52:01.456Z",
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
		"liquidityUsd": 270615.48,
		"hash": "fec6b4dba8032ffc811a982b78b813a537b7299c450c0b017085284441980c6b"
	},
	{
		"id": "d53588805909",
		"ts": "2026-10-23T18:52:01.713Z",
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
		"liquidityUsd": 10608610.94,
		"hash": "d53588805909468c03958f95431c1159244f4f46e74b88e69167028ae53d85c5"
	},
	{
		"id": "7119481d36a9",
		"ts": "2026-10-23T18:52:01.998Z",
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
		"liquidityUsd": 3421617.41,
		"hash": "7119481d36a9bfe7f149741cea03979473a1bfb8a049a4d27f73e8e9755e3108"
	},
	{
		"id": "a19f31133534",
		"ts": "2026-10-23T18:52:02.270Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1170009.9,
		"hash": "a19f311335349d7c17f23162f2d92de5bc0bc3207b9cad6e269056550fcdddc7"
	},
	{
		"id": "34df4df76171",
		"ts": "2026-10-23T18:52:02.529Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 10608610.94,
		"hash": "34df4df761715ea06563c52269392703e04d35bed4c638aa7cd3341a8f0440a2"
	},
	{
		"id": "38226cb8de78",
		"ts": "2026-10-23T18:52:02.815Z",
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
		"liquidityUsd": 1711777.98,
		"hash": "38226cb8de7854228679f749028b0646aed01c9f321923520c77193458697d1b"
	},
	{
		"id": "41b6b6288675",
		"ts": "2026-10-23T18:52:03.073Z",
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
		"liquidityUsd": 2467681.56,
		"hash": "41b6b62886757e1aa0c4cf2a8edd525f6fd33fdc859886fb915445ea52f2f7f7"
	},
	{
		"id": "287dba0503a2",
		"ts": "2026-10-23T18:52:03.331Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4729464.7,
		"hash": "287dba0503a2e4e68a130d26287a3766315e2d1c4284f0205893c3d4495d0b8b"
	},
	{
		"id": "ddda40d5d1d5",
		"ts": "2026-10-23T18:52:03.579Z",
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
		"liquidityUsd": 1770406.68,
		"hash": "ddda40d5d1d5c3d44c536e8373957afd903f23505ec8f59a9de43a3cd8bcbdcc"
	},
	{
		"id": "fa56fd6122e6",
		"ts": "2026-10-23T18:52:03.808Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1263081.49,
		"hash": "fa56fd6122e622dbde9a827b8ba0f5ace76c0ba344073f1e70119209621262ab"
	},
	{
		"id": "a65c15d59bb7",
		"ts": "2026-10-23T18:52:04.055Z",
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
		"liquidityUsd": 3242029.92,
		"hash": "a65c15d59bb7713d882758e7e6b9bc8869eddb18f2520aa5466c2dfb0fe6a182"
	},
	{
		"id": "2570f4782ae6",
		"ts": "2026-10-23T18:52:04.283Z",
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
		"liquidityUsd": 12631744.07,
		"hash": "2570f4782ae6f4cea99c789b6ae93fd21971ef1bbfe8c08bf919e4775e534abc"
	},
	{
		"id": "5698b6d3812a",
		"ts": "2026-10-23T18:52:04.587Z",
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
		"liquidityUsd": 1052387.94,
		"hash": "5698b6d3812aa6b27c68426c55a3bd4b58bd980a521c896036eb6f2a3098d712"
	},
	{
		"id": "2cacdbf913b3",
		"ts": "2026-10-23T18:52:04.830Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1946627.34,
		"hash": "2cacdbf913b3002eace2e793766190e9ec7b55886e23b789e02286d61a04799a"
	},
	{
		"id": "8baa5dc89a23",
		"ts": "2026-10-23T18:52:05.067Z",
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
		"liquidityUsd": 973461.58,
		"hash": "8baa5dc89a236025ccd2f0cb9f017df2e3511269d65781450ce14fed38f22dc1"
	},
	{
		"id": "079c4ba909f9",
		"ts": "2026-10-23T18:52:05.310Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56842.56,
		"hash": "079c4ba909f97e0c8f7612616fe874497f8507cdfd8ac2a094ec0e29c47f8899"
	},
	{
		"id": "9115d8cbaf7e",
		"ts": "2026-10-23T18:52:05.563Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 672453.37,
		"hash": "9115d8cbaf7e859da3bfe4a765af043c4fe9b02e7afa4c46862cf77e1f4f0f1e"
	},
	{
		"id": "7c4e65778f27",
		"ts": "2026-10-23T14:38:07.446Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156920114.89,
		"hash": "7c4e65778f2756857c18ccff2a129e5b0fdd2f0003015840ec09daf3e02d2621"
	},
	{
		"id": "327c731b79ac",
		"ts": "2026-10-23T14:38:07.914Z",
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
		"liquidityUsd": 16494873.75,
		"hash": "327c731b79ace70c2221434062b8604b4b06aa023ccd850e51170f6376061da3"
	},
	{
		"id": "faca2b0daa28",
		"ts": "2026-10-23T14:38:08.210Z",
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
		"liquidityUsd": 269034.79,
		"hash": "faca2b0daa28abf8f7715c9b98dd32b7a68e3942f153e33581b7e285db5806a8"
	},
	{
		"id": "a26b9fdf147c",
		"ts": "2026-10-23T14:38:08.474Z",
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
		"liquidityUsd": 10563727.71,
		"hash": "a26b9fdf147c4e758799a1124e8529915f83a560ff740a930476151689e6321a"
	},
	{
		"id": "64426c00f00e",
		"ts": "2026-10-23T14:38:08.742Z",
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
		"liquidityUsd": 3392098.3,
		"hash": "64426c00f00e3374873d85eb4088b85ebeba9e0d9b70892d07e4b0ede8cb0340"
	},
	{
		"id": "5c6c70dc172b",
		"ts": "2026-10-23T14:38:09.020Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1151357.37,
		"hash": "5c6c70dc172b3553eba95aecfddf8315ffef2c1fab63c607b33b596f7c89d523"
	},
	{
		"id": "7ee8fd0fa634",
		"ts": "2026-10-23T14:38:09.300Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 10563727.71,
		"hash": "7ee8fd0fa634d613a0136d25e11fca47829b70a1819492a3408a50919c104d62"
	},
	{
		"id": "51ad5cb13b46",
		"ts": "2026-10-23T14:38:09.599Z",
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
		"liquidityUsd": 1303121.55,
		"hash": "51ad5cb13b46c91dddbdfe9122d494f62337ad44e2aa8d04465f3a2f250c84f6"
	},
	{
		"id": "e8d3b4128455",
		"ts": "2026-10-23T14:38:09.892Z",
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
		"liquidityUsd": 2467281.27,
		"hash": "e8d3b41284555914d14ef3e142a08499e0cdac6a99d68f9dd680bc53352efa46"
	},
	{
		"id": "939e137d53a9",
		"ts": "2026-10-23T14:38:10.157Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2145302.47,
		"hash": "939e137d53a939e3c2a50e94db39a4f484e514d0a324e041bad169ad6c0a2946"
	},
	{
		"id": "225665dda7b9",
		"ts": "2026-10-23T14:38:10.405Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1264477.23,
		"hash": "225665dda7b90576281f71aaec4d4aeae04d0292cbaa31037275b53bac5212e2"
	},
	{
		"id": "17ae244396f9",
		"ts": "2026-10-23T14:38:10.707Z",
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
		"liquidityUsd": 1757367.24,
		"hash": "17ae244396f99ff417fa120e0d3a965e5b31c5715227d1220c97c3cfa94754a3"
	},
	{
		"id": "ff18aea4c81f",
		"ts": "2026-10-23T14:38:10.935Z",
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
		"liquidityUsd": 3265164.27,
		"hash": "ff18aea4c81f28465533bd1ec9efc9e06064f2d8b3fd13db42d7864260e4ca1c"
	},
	{
		"id": "373206e336c7",
		"ts": "2026-10-23T14:38:11.198Z",
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
		"liquidityUsd": 12908977.71,
		"hash": "373206e336c70fc7bfaa9ee6faff55a78fa3f6c12d4b1cead64105f64a4bac90"
	},
	{
		"id": "ddd31b8ee9d4",
		"ts": "2026-10-23T14:38:11.449Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1987871.52,
		"hash": "ddd31b8ee9d4c29d0721e0386d6a849f5f4db14221f351b27f382cfaf61ff120"
	},
	{
		"id": "5369a4870259",
		"ts": "2026-10-23T14:38:11.717Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55978.96,
		"hash": "5369a4870259ffd7bdc1c00c2d220257ceb8d89a7a5a890224849192ae7811dc"
	},
	{
		"id": "0d335cb3a37d",
		"ts": "2026-10-23T14:38:11.964Z",
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
		"liquidityUsd": 980980.72,
		"hash": "0d335cb3a37de380b7f608a890bd60d7eda425303c372226c916634519ececdc"
	},
	{
		"id": "fff60842288c",
		"ts": "2026-10-23T14:38:12.207Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257191.12,
		"hash": "fff60842288c2d2f70b935da4c8d3dd098517cb3ae33de88bab6d4434ac340d4"
	},
	{
		"id": "c704bb86c7ce",
		"ts": "2026-10-23T14:38:12.442Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 653070.69,
		"hash": "c704bb86c7ce834871cd293608f77dc05ef1e3beebc8b466c20c590bdb4eedb3"
	},
	{
		"id": "110a94e07fcc",
		"ts": "2026-10-23T09:03:13.185Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156751623.76,
		"hash": "110a94e07fcccf8ff203b766da438b9a842d61f21d79feb0b4b1889a6a09c297"
	},
	{
		"id": "238dc2aafb05",
		"ts": "2026-10-23T09:03:13.963Z",
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
		"liquidityUsd": 16465660.55,
		"hash": "238dc2aafb0579815f9a2b0fad8374a8f2552d0bbf1ac5f6621ade99d36edd7d"
	},
	{
		"id": "3775da0c8f2e",
		"ts": "2026-10-23T09:03:14.215Z",
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
		"liquidityUsd": 270361.83,
		"hash": "3775da0c8f2e2252fd24a702541539fa4b935f12d46f9ca3fdcd01a82abbcb0c"
	},
	{
		"id": "e0925ab3c515",
		"ts": "2026-10-23T09:03:14.470Z",
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
		"liquidityUsd": 11572673.29,
		"hash": "e0925ab3c5154f63fb41e940b6c5889a1dc7c660359780e7a6738e2f5cf598b3"
	},
	{
		"id": "88a1074c6964",
		"ts": "2026-10-23T09:03:14.724Z",
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
		"liquidityUsd": 3419346.19,
		"hash": "88a1074c6964e194843fdfd739e2ef2428bfda8f4796e17e254a4583123de0d6"
	},
	{
		"id": "540ddab36b68",
		"ts": "2026-10-23T09:03:14.982Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1152536.34,
		"hash": "540ddab36b685aa865c24237cad920039bbfcc1427b92d62e387ddfdf85f5907"
	},
	{
		"id": "b703bc00805e",
		"ts": "2026-10-23T09:03:15.246Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 11572673.29,
		"hash": "b703bc00805e4bdb1b5ac5d3fcd94e1be3a284ac86cc548bd2e78d76ceed98d9"
	},
	{
		"id": "78126fe4ffaa",
		"ts": "2026-10-23T09:03:15.498Z",
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
		"liquidityUsd": 1317553.05,
		"hash": "78126fe4ffaad9ddf0790227f082d3c78a4f988d17e9089cd88b1e89e0dbdf7e"
	},
	{
		"id": "8e1300497efa",
		"ts": "2026-10-23T09:03:15.773Z",
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
		"liquidityUsd": 2468808.62,
		"hash": "8e1300497efa1cf47f686dd29be166b61f12a28c5569b1867c7a971959ab8e32"
	},
	{
		"id": "5c4fc3993384",
		"ts": "2026-10-23T09:03:16.471Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1268592.81,
		"hash": "5c4fc3993384430ae33e1d9bfbc87954f3f3dba6986aa62ccc961514c39746d0"
	},
	{
		"id": "57d08a97dbbe",
		"ts": "2026-10-23T09:03:16.704Z",
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
		"liquidityUsd": 3262355.96,
		"hash": "57d08a97dbbedf53153ab41b93c0dbea1b47f64dae699c5319f9838419aaae2e"
	},
	{
		"id": "652fbf591160",
		"ts": "2026-10-23T09:03:16.935Z",
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
		"liquidityUsd": 1803969.52,
		"hash": "652fbf5911604756a870dcbed850e8cb8e9e6683f7087bc13f5bfec8bf200176"
	},
	{
		"id": "15bfc8bb2db2",
		"ts": "2026-10-23T09:03:17.175Z",
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
		"liquidityUsd": 13449634.6,
		"hash": "15bfc8bb2db282c7ff323a89fe714107ec283158943d1ba552dffd6ddd9a7200"
	},
	{
		"id": "abc0b2eed401",
		"ts": "2026-10-23T09:03:17.405Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4519908.72,
		"hash": "abc0b2eed401a2be9572612b598d1c2aed591bf53c92877dd653ccd119fffaaa"
	},
	{
		"id": "eeae17edf926",
		"ts": "2026-10-23T09:03:17.640Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2001833.83,
		"hash": "eeae17edf926c18c8520d13c7ae360f458e2d7f81e58a844ee67cf8289bb21c5"
	},
	{
		"id": "acabe09458de",
		"ts": "2026-10-23T09:03:17.890Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56605.12,
		"hash": "acabe09458de4daa8b8543c5475ad0a6a3d72e6f2d32a7143ac0c6abb73a32be"
	},
	{
		"id": "53d04698136e",
		"ts": "2026-10-23T09:03:18.124Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 528574.87,
		"hash": "53d04698136e3505fd95c1bba3bc5b6165e5ed656b51ff2c71c0e1397b8dce27"
	},
	{
		"id": "82d7ed8da07f",
		"ts": "2026-10-23T09:03:18.355Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 651214.8,
		"hash": "82d7ed8da07fc4c606a44edb72799afb2137af8f1ae632ee59e1924ecea0fa8f"
	},
	{
		"id": "ed2b594c26b8",
		"ts": "2026-10-23T09:03:18.598Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264698.27,
		"hash": "ed2b594c26b803cd40e1034ff279f2c5beb9c183600a1053dc39c7bb6fa4b4a9"
	},
	{
		"id": "fa410d4fb1fa",
		"ts": "2026-10-23T03:12:03.041Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157039262.97,
		"hash": "fa410d4fb1fa52427bfbb9caa228232ec3c3df12427282762e6690f1a83c7316"
	},
	{
		"id": "01f5da457a6d",
		"ts": "2026-10-23T03:12:03.383Z",
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
		"liquidityUsd": 16381933.18,
		"hash": "01f5da457a6da87aa91705611033fc3b634b10f892cae78055f006137860c07d"
	},
	{
		"id": "7bb2f9bf0383",
		"ts": "2026-10-23T03:12:03.649Z",
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
		"liquidityUsd": 271841.84,
		"hash": "7bb2f9bf03834f98b5ef937f5375f20983f8ff9e2edea297345a368c8dbdede4"
	},
	{
		"id": "f5bc8c5b4000",
		"ts": "2026-10-23T03:12:03.903Z",
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
		"liquidityUsd": 11964162.13,
		"hash": "f5bc8c5b4000431e8f7a41c61d3d76be14deda3323c4921c30c79165f4ad455d"
	},
	{
		"id": "599ac1d42e76",
		"ts": "2026-10-23T03:12:04.178Z",
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
		"liquidityUsd": 3438258.2,
		"hash": "599ac1d42e76cc4e745a3e41d27dab52ccb05e4dbd021f92c330b826964a4356"
	},
	{
		"id": "070c3a1c0c58",
		"ts": "2026-10-23T03:12:04.449Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1141212.69,
		"hash": "070c3a1c0c581ca5c703ec9d100970572974c20b9ced92fd03662c7ea72c64f8"
	},
	{
		"id": "095e2198e37c",
		"ts": "2026-10-23T03:12:04.719Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 11964162.13,
		"hash": "095e2198e37cf5e706ae74c55ead66665e10431381d446fbec9cb0046de44154"
	},
	{
		"id": "b4be8ee1485c",
		"ts": "2026-10-23T03:12:04.988Z",
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
		"liquidityUsd": 1128549.95,
		"hash": "b4be8ee1485ca78cfc4eab793053c6c73e1c315d29c9055d4c4dd3068c6ab860"
	},
	{
		"id": "bb4cf0f4542c",
		"ts": "2026-10-23T03:12:05.260Z",
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
		"liquidityUsd": 2467902.12,
		"hash": "bb4cf0f4542c601f783a934ccb37091569878c0d14e34fa53c2d8e92f2662a98"
	},
	{
		"id": "6b4673a95027",
		"ts": "2026-10-23T03:12:05.511Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1276278.73,
		"hash": "6b4673a950270dc6f0358f13b14844bb7afc3facdf83851e126330eca4c39337"
	},
	{
		"id": "768eaecdc891",
		"ts": "2026-10-23T03:12:05.753Z",
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
		"liquidityUsd": 1775583.69,
		"hash": "768eaecdc8911581d60e9d9cffa32d3cb0cd3db5aee8080aaa6155419cac1858"
	},
	{
		"id": "0ff0a84e1d38",
		"ts": "2026-10-23T03:12:05.996Z",
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
		"liquidityUsd": 3225582.06,
		"hash": "0ff0a84e1d38aa83e7c98383a1559af6a940a8e0f1460576412cd77d75bf939d"
	},
	{
		"id": "e4c3604636b0",
		"ts": "2026-10-23T03:12:06.224Z",
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
		"liquidityUsd": 13455727.84,
		"hash": "e4c3604636b09b9e23c898c1c8289f2d5edd453b3a2eb4984670ed72a6b9391a"
	},
	{
		"id": "ae8d94354fbd",
		"ts": "2026-10-23T03:12:06.450Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57371.07,
		"hash": "ae8d94354fbd5b3e9db42012cc5cc7e5d269adceab6cead23ee003d289ef4004"
	},
	{
		"id": "5612f2b950a7",
		"ts": "2026-10-23T03:12:06.812Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2015839.19,
		"hash": "5612f2b950a7cedf99bc8b2b3c05a200d73f083aa74d64da60788eb20d5cfcac"
	},
	{
		"id": "1668518adc7d",
		"ts": "2026-10-23T03:12:07.040Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 255333.59,
		"hash": "1668518adc7dc73209c4aad3b5a693aaec2ac7783ae6fdad1706668cccd62e54"
	},
	{
		"id": "2ff0e5fba107",
		"ts": "2026-10-23T03:12:07.281Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 560985.25,
		"hash": "2ff0e5fba107a7d54cdb294026c9fbe25077477d1c1eb0df83162a48e1e45559"
	},
	{
		"id": "106693f404b3",
		"ts": "2026-10-23T03:12:07.522Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 503501.98,
		"hash": "106693f404b3092def7cfde1132afd9bb5a6d0070c620dfb9ae60dceff418c83"
	},
	{
		"id": "e0a8693cbc16",
		"ts": "2026-10-23T03:12:07.757Z",
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
		"liquidityUsd": 1330558.7,
		"hash": "e0a8693cbc16ae60268f1a02380efcf488e5907bebedabf9dd74d848d58fb65a"
	},
	{
		"id": "2d9dc32eca5c",
		"ts": "2026-10-22T23:51:36.686Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156468211.38,
		"hash": "2d9dc32eca5c0625c32eff6397a93504aaeb9b5c2a68fa5c569c60cec2d5d904"
	},
	{
		"id": "c95447db5aaf",
		"ts": "2026-10-22T23:51:37.200Z",
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
		"liquidityUsd": 16208239.47,
		"hash": "c95447db5aaf0894a515b010234165a4d432d7960a87db22b96f8fe4f6716362"
	},
	{
		"id": "a8cc2018f4d8",
		"ts": "2026-10-22T23:51:37.484Z",
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
		"liquidityUsd": 266146.87,
		"hash": "a8cc2018f4d84001fdd17ba5c94ef6c00e44b063a62961401e9dd19f69ef2110"
	},
	{
		"id": "2251620c7fa7",
		"ts": "2026-10-22T23:51:37.784Z",
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
		"liquidityUsd": 11964567.1,
		"hash": "2251620c7fa7d35c46b112fe18309340917dfec9172907033c74a0611fe4da69"
	},
	{
		"id": "b0edab884676",
		"ts": "2026-10-22T23:51:38.058Z",
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
		"liquidityUsd": 3431758.48,
		"hash": "b0edab884676c6a142bb7620e53d9dcaed077075463a294f5cb73717b6ff26fa"
	},
	{
		"id": "52894570a9f6",
		"ts": "2026-10-22T23:51:38.332Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1143404.18,
		"hash": "52894570a9f6e2ca87df1fb384e728fae8ae38815e6ae12897ba1425a72f76e0"
	},
	{
		"id": "81676d29b897",
		"ts": "2026-10-22T23:51:38.680Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 11964567.1,
		"hash": "81676d29b897e6b2eba71c5f6966bd3ab1024a996a0406d2ffbfe7492a68dd13"
	},
	{
		"id": "224e5968900b",
		"ts": "2026-10-22T23:51:38.987Z",
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
		"liquidityUsd": 1236936.17,
		"hash": "224e5968900b1e6f6b8c3d56137c0756c83013631dac710074f48ea6bcd9ecf0"
	},
	{
		"id": "2291c208b072",
		"ts": "2026-10-22T23:51:39.288Z",
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
		"liquidityUsd": 2471174.44,
		"hash": "2291c208b072b0416ced85f054226b02d76c915bf245645f08ef0d678042096b"
	},
	{
		"id": "9543160f6fa3",
		"ts": "2026-10-22T23:51:39.611Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1272105.49,
		"hash": "9543160f6fa3b3633f48460a8047b79394d46d1981144cc22446f042660159c4"
	},
	{
		"id": "e55fa88c7b37",
		"ts": "2026-10-22T23:51:39.889Z",
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
		"liquidityUsd": 1824666.38,
		"hash": "e55fa88c7b37a727b07a6ba3599c0afd02baf03df6b7d0dc2fe5d7b0d3f12762"
	},
	{
		"id": "15f8629b33f6",
		"ts": "2026-10-22T23:51:40.149Z",
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
		"liquidityUsd": 13455707.36,
		"hash": "15f8629b33f6f55110fd559bc5bbaf8f08ac273b8832199d0fa09c5dda3317c3"
	},
	{
		"id": "b0dd8c6053b1",
		"ts": "2026-10-22T23:51:40.427Z",
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
		"liquidityUsd": 3238280.16,
		"hash": "b0dd8c6053b1f0d745e27038cc47b84fe2b127ca3a568da8a3ffe35101a408e2"
	},
	{
		"id": "8684d1c109fc",
		"ts": "2026-10-22T23:51:40.704Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 58012.93,
		"hash": "8684d1c109fc3f18e2fe60080888a0b87cae3c6024c580c3ab703acd2ee42823"
	},
	{
		"id": "fb0c38adadce",
		"ts": "2026-10-22T23:51:40.952Z",
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
		"liquidityUsd": 116831.83,
		"hash": "fb0c38adadce0c8fc54b14f9fae22dcf745320c15e10e8670042f983c2997398"
	},
	{
		"id": "1fdf00655e02",
		"ts": "2026-10-22T23:51:41.234Z",
		"symbol": "MSTRc",
		"token": "0xb2000000000000000000004884b426556b92883d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 885713.77,
		"hash": "1fdf00655e02ad65ca970073937e68d3c49f3cb9b8759cf26cb1ac78260a72c7"
	},
	{
		"id": "8d3b14a87529",
		"ts": "2026-10-22T23:51:41.488Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 480469.88,
		"hash": "8d3b14a87529c3e6b9b728a3aebe55b2bf732315ce9574166f558d57e7559e10"
	},
	{
		"id": "36360ce20846",
		"ts": "2026-10-22T23:51:41.738Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1975518.74,
		"hash": "36360ce20846cb6e400e866e2e73636245f3782068e0a1d8f03d041b545107dd"
	},
	{
		"id": "9d4ac79e684e",
		"ts": "2026-10-22T23:51:41.971Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246218.15,
		"hash": "9d4ac79e684e4b6cd44b1a456bf785e8c8496ef72907a4fd11b0eabf4e38b7d9"
	},
	{
		"id": "0b8fffb24656",
		"ts": "2026-10-22T20:24:04.898Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156188382.72,
		"hash": "0b8fffb24656b3b8a33634b356a871a19e052fcf3e0af493d7159d0c2111a5fc"
	},
	{
		"id": "4b0dde86793f",
		"ts": "2026-10-22T20:24:05.120Z",
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
		"liquidityUsd": 16179648.94,
		"hash": "4b0dde86793f8dbff730df14eda791141b69d6b9b7a279fe51d94d452eb47812"
	},
	{
		"id": "73326840e0cb",
		"ts": "2026-10-22T20:24:05.344Z",
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
		"liquidityUsd": 265146.06,
		"hash": "73326840e0cbb3a121b91c212cf9f33788c70d5a3dfc853a58cee65e20d399e5"
	},
	{
		"id": "9a21e0c28402",
		"ts": "2026-10-22T20:24:05.550Z",
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
		"liquidityUsd": 12194908.19,
		"hash": "9a21e0c284022f707473248c0b7f8d2ec6e486ef442f670299fa764639d9bc9e"
	},
	{
		"id": "56f1aa09536c",
		"ts": "2026-10-22T20:24:05.747Z",
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
		"liquidityUsd": 3430253.98,
		"hash": "56f1aa09536c4542a24f7ff53977c9c83340fffeb43cef02b92cbdbd38dcae22"
	},
	{
		"id": "fe92aaaf0716",
		"ts": "2026-10-22T20:24:05.939Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1139583.24,
		"hash": "fe92aaaf071600ea61a54bec88751166503d4e16298c49367ef0b95faf036331"
	},
	{
		"id": "c3f874cf25b8",
		"ts": "2026-10-22T20:24:06.131Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12194908.19,
		"hash": "c3f874cf25b82c71c9d8d340d4de2cfefdde2d6be29e9e8db56c1915096a4568"
	},
	{
		"id": "32869ee8bdfa",
		"ts": "2026-10-22T20:24:06.395Z",
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
		"liquidityUsd": 1237578.75,
		"hash": "32869ee8bdfa04dfc252ff42c9ba202d3f458550a8525441eee0ec5ee55c072c"
	},
	{
		"id": "eefbea1d7196",
		"ts": "2026-10-22T20:24:06.604Z",
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
		"liquidityUsd": 2470628.12,
		"hash": "eefbea1d719653d775273f400ee18567c66faae170104e2c4b7eb56c7b756fcb"
	},
	{
		"id": "7e506dfe0146",
		"ts": "2026-10-22T20:24:06.795Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1258560.45,
		"hash": "7e506dfe01467dfd451f859dac2e4f8428cf65adf6eb745d0c5cf371d0ba0b12"
	},
	{
		"id": "1eebfbcf8d6c",
		"ts": "2026-10-22T20:24:06.993Z",
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
		"liquidityUsd": 1824110.91,
		"hash": "1eebfbcf8d6c63586f22eee3df63033668481cf343edf2e3bb2d0f5611bdb138"
	},
	{
		"id": "dac92fdcc6a9",
		"ts": "2026-10-22T20:24:07.193Z",
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
		"liquidityUsd": 13462214.3,
		"hash": "dac92fdcc6a910926d7e998e1f21f619676263d8854231309af0211288b83a6e"
	},
	{
		"id": "33854496249d",
		"ts": "2026-10-22T20:24:07.974Z",
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
		"liquidityUsd": 3250590.11,
		"hash": "33854496249d834958f73c9e63cbe197d2c73c53b69bcd4d5d37e40c9d347eb2"
	},
	{
		"id": "99421986f518",
		"ts": "2026-10-22T20:24:08.175Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59416.03,
		"hash": "99421986f518d02b8b811067e1fb4c7ed3841348a6febe99fd932345ed72c128"
	},
	{
		"id": "d885aec7005e",
		"ts": "2026-10-22T20:24:08.384Z",
		"symbol": "PANGEA",
		"token": "0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 131467.4,
		"hash": "d885aec7005e3b25699c39d3f85282ce61c182e6f4fcf4d6e12c7a8c7e82af18"
	},
	{
		"id": "c7103306c797",
		"ts": "2026-10-22T20:24:09.193Z",
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
		"liquidityUsd": 93941.52,
		"hash": "c7103306c797e27b7c8a6e067a8fc77ed03aba48e582c0e24a33f9b2f2e6fe1e"
	},
	{
		"id": "f1b35d0ba14e",
		"ts": "2026-10-22T20:24:09.383Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 256613.62,
		"hash": "f1b35d0ba14e0f493c03c1c03a192fa0846c7d78630f5fcf10ce4e2c4cf062d1"
	},
	{
		"id": "61b51a0ae01b",
		"ts": "2026-10-22T20:24:09.560Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 481018.12,
		"hash": "61b51a0ae01bc3b8fd7bb144855043360abeece331aa0a74b0e93bfcb78859db"
	},
	{
		"id": "0c2f353324fc",
		"ts": "2026-10-22T20:24:09.797Z",
		"symbol": "MSTRc",
		"token": "0xb2000000000000000000004884b426556b92883d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1669107.72,
		"hash": "0c2f353324fc7e8eca3508c2bb4e229339a5b21bdaf84e6d070956092ee4b78f"
	},
	{
		"id": "8532d4797db6",
		"ts": "2026-10-22T16:33:24.571Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155956190.24,
		"hash": "8532d4797db640912f92e5fa06ea3892b929b5557034cbe6ac106f6686bd36ac"
	},
	{
		"id": "e3b8bba9edb2",
		"ts": "2026-10-22T16:33:25.037Z",
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
		"liquidityUsd": 16248609.5,
		"hash": "e3b8bba9edb2fc2b10480aa8d96bf9eecb4632786926d9062ab881c5cebc7830"
	},
	{
		"id": "df5a1e350c77",
		"ts": "2026-10-22T16:33:25.316Z",
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
		"liquidityUsd": 266908.8,
		"hash": "df5a1e350c772c077d91c673e6141a7c1b3bf5cabcdb1e392fb62b903fb1cd73"
	},
	{
		"id": "5a8751492de2",
		"ts": "2026-10-22T16:33:25.571Z",
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
		"liquidityUsd": 18196947.11,
		"hash": "5a8751492de20eb4ef25931eb5e772b9e04be249d54322d53fc5c117ec4183ae"
	},
	{
		"id": "1742aee620d0",
		"ts": "2026-10-22T16:33:25.853Z",
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
		"liquidityUsd": 3472138.17,
		"hash": "1742aee620d02bf6940310a6c78b973c8fcfadd75615da15599a1fe87ae69bb7"
	},
	{
		"id": "85f46042e0cf",
		"ts": "2026-10-22T16:33:26.130Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1144230.87,
		"hash": "85f46042e0cf067627a5ddc9bc9ed52f0357117ab644b260f3e4d652a4a256bc"
	},
	{
		"id": "4b87dc59a8ab",
		"ts": "2026-10-22T16:33:26.734Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 18196947.11,
		"hash": "4b87dc59a8ab91618e195b73294ac25dff98858bfb9eb7e8594df7ef1feb5f1a"
	},
	{
		"id": "2a8ed8472ef0",
		"ts": "2026-10-22T16:33:26.997Z",
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
		"liquidityUsd": 1160291.94,
		"hash": "2a8ed8472ef0b90855ef0764d3b74f326823d5652949539d275eb7aba9abe809"
	},
	{
		"id": "60175b00fdee",
		"ts": "2026-10-22T16:33:27.290Z",
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
		"liquidityUsd": 2469823.18,
		"hash": "60175b00fdeecded54139d95debd8cb475d4f12391b939916d2a5caa4762d9db"
	},
	{
		"id": "b177d573ce1e",
		"ts": "2026-10-22T16:33:27.577Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1278663.54,
		"hash": "b177d573ce1eb19852ab46a15f25c0dfcd56702dff5ea94151edd161c0781265"
	},
	{
		"id": "b33ffaa8fb9f",
		"ts": "2026-10-22T16:33:27.816Z",
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
		"liquidityUsd": 15421141.61,
		"hash": "b33ffaa8fb9fc00cfea77b895bd79fbdd15c22e47844c69889e74da28006afea"
	},
	{
		"id": "599b5ede5336",
		"ts": "2026-10-22T16:33:28.050Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57901.8,
		"hash": "599b5ede5336590874e04bbe07c2342472700c771ba2a9a05ee5c1efc9ddc965"
	},
	{
		"id": "f94e4cf3b466",
		"ts": "2026-10-22T16:33:28.343Z",
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
		"liquidityUsd": 1803627.25,
		"hash": "f94e4cf3b4663eb52ed114393a18444dd0ec7597713e17ccaf9c4775e7c99749"
	},
	{
		"id": "31bc1ab64031",
		"ts": "2026-10-22T16:33:28.580Z",
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
		"liquidityUsd": 96990.98,
		"hash": "31bc1ab64031bf9963077508bb8304ec68660fe0e34c38ecb18838cd29f565d9"
	},
	{
		"id": "f40896ca5c5f",
		"ts": "2026-10-22T16:33:28.815Z",
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
		"liquidityUsd": 3261566.9,
		"hash": "f40896ca5c5fbd0838604591320dfb3df5c0f41b5de50c7b180e991674c63b22"
	},
	{
		"id": "3d2fc091c2cc",
		"ts": "2026-10-22T16:33:29.047Z",
		"symbol": "PANGEA",
		"token": "0xA551dEF8a44ea423CaA58DA45b3F5764004286Ea",
		"score": 71,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.42,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 134912.47,
		"hash": "3d2fc091c2cc90658939dd8cc47860dcf6a43e52f03a93f072d6019f91bb5f40"
	},
	{
		"id": "4ba11ffd674d",
		"ts": "2026-10-22T16:33:29.284Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 262890.31,
		"hash": "4ba11ffd674d522626b0161e200104761f22b078f509bf355ca08499280e738d"
	},
	{
		"id": "98b9794727e2",
		"ts": "2026-10-22T16:33:29.520Z",
		"symbol": "MSTRc",
		"token": "0xb2000000000000000000004884b426556b92883d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1499445.81,
		"hash": "98b9794727e281d8c821ef1c407b0e39b41338875e04eaff9ec7071c7d4786fd"
	},
	{
		"id": "6a5b2a37c7b9",
		"ts": "2026-10-22T16:33:29.933Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3950534.82,
		"hash": "6a5b2a37c7b97f83c9485c1cac0af8e77afafd1dc811d522471f447fef09aed6"
	},
	{
		"id": "a1e96b97c78c",
		"ts": "2026-10-22T11:04:59.467Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155482444.78,
		"hash": "a1e96b97c78c877256a9ac867f967a1712d367aac6e5e00e3dd9ce5e21825ba8"
	},
	{
		"id": "f401f491ad75",
		"ts": "2026-10-22T11:05:00.203Z",
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
		"liquidityUsd": 16283801.51,
		"hash": "f401f491ad75f6b071cd40973fc7a23a18a12134d6c6acf1afa86ec1de997cee"
	},
	{
		"id": "5ce8ba756eb1",
		"ts": "2026-10-22T11:05:00.501Z",
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
		"liquidityUsd": 266086.31,
		"hash": "5ce8ba756eb1e82e1e3614e2c5055469fdeeec72b7db6f8a246af36258ceb11e"
	},
	{
		"id": "a8600a504310",
		"ts": "2026-10-22T11:05:01.090Z",
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
		"liquidityUsd": 21354131.02,
		"hash": "a8600a504310f183a2138b026615f6bcd78615b9e1e320952a99c6f919b495da"
	},
	{
		"id": "40c169c21f18",
		"ts": "2026-10-22T11:05:01.371Z",
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
		"liquidityUsd": 3943040.18,
		"hash": "40c169c21f189efa621f5d82f35fd71ca6ea50f9146aac72279ffdf2a413d82a"
	},
	{
		"id": "388de5c6c4f0",
		"ts": "2026-10-22T11:05:01.651Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1145468.75,
		"hash": "388de5c6c4f021e84bc8a821dcd4b1bf4eec3ca292757103bd0c4942975e9ea0"
	},
	{
		"id": "4db62cc4120f",
		"ts": "2026-10-22T11:05:01.918Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 21354131.02,
		"hash": "4db62cc4120fc9d83eabde223718a163dfe2ab149e8d11b550bc6a533125a4b2"
	},
	{
		"id": "299bb9d5f4d2",
		"ts": "2026-10-22T11:05:02.198Z",
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
		"liquidityUsd": 1317160.54,
		"hash": "299bb9d5f4d249e44a52116d58c12ab8b4d6ef2849adc2d4b52d60bf32e1a92e"
	},
	{
		"id": "fa566d584d39",
		"ts": "2026-10-22T11:05:02.467Z",
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
		"liquidityUsd": 2470591.43,
		"hash": "fa566d584d394d2aa311d5c0bc1e665449cc3d276a4da86b0cd6fe7962c42e3b"
	},
	{
		"id": "b01d5f897222",
		"ts": "2026-10-22T11:05:02.735Z",
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
		"liquidityUsd": 16092402.84,
		"hash": "b01d5f897222c1edd58dae87dfe757899908ddf9a1339534e8b6a67fa92318dc"
	}
]
