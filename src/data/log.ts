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
	"updatedAt": "2026-11-11T18:19:14.684Z",
	"tokensScored": 22664,
	"verdictsIssued": 22664,
	"safe": 19341,
	"risky": 1590,
	"likelyRug": 1733,
	"ticks": 1274
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "c27b8daa822c",
		"ts": "2026-11-11T18:19:10.218Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 135656095.9,
		"hash": "c27b8daa822c842a83976ec60f73cf84313a88bd4aae4eb926629a5d8f69c543"
	},
	{
		"id": "c6846de72f55",
		"ts": "2026-11-11T18:19:10.711Z",
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
		"liquidityUsd": 15646213.09,
		"hash": "c6846de72f5594fa1076006ba2368ce354e02679eb0ffa0f2a0a844471a2a558"
	},
	{
		"id": "220660fcf237",
		"ts": "2026-11-11T18:19:10.948Z",
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
		"liquidityUsd": 234737.31,
		"hash": "220660fcf2374e56bdb5e2f82a5a812e872dbb3d8e8a4d6f83c56b10581f6de4"
	},
	{
		"id": "349238d2e74a",
		"ts": "2026-11-11T18:19:11.206Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4313640.53,
		"hash": "349238d2e74a064606fcc49ac0da44e33088aa9871b77569d2938224eb7af21e"
	},
	{
		"id": "e66f25f922e0",
		"ts": "2026-11-11T18:19:11.448Z",
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
		"liquidityUsd": 1214457.51,
		"hash": "e66f25f922e0608f11452d79fa9abb524e153612d267a1db952742b686126144"
	},
	{
		"id": "5184cdfde411",
		"ts": "2026-11-11T18:19:11.694Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 957063.61,
		"hash": "5184cdfde41183835195b9860492ac7251fd3c87372e6f0eaae55eb1d5f6b326"
	},
	{
		"id": "f4e3225c71f1",
		"ts": "2026-11-11T18:19:11.941Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4313640.53,
		"hash": "f4e3225c71f1a832517f6f95f80b543f67f1394b570b21fc8eb2af9eb6138b1f"
	},
	{
		"id": "bea19b281076",
		"ts": "2026-11-11T18:19:12.194Z",
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
		"liquidityUsd": 1037448.28,
		"hash": "bea19b2810768b155f9fdb3a55dbf9339a93ed70519f04f3c4f7415c5ee45302"
	},
	{
		"id": "c2f0b8ef800c",
		"ts": "2026-11-11T18:19:12.434Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 145591.74,
		"hash": "c2f0b8ef800cb969797b721b59d5d81184b09b49ba5f9b964b640aff28b902ee"
	},
	{
		"id": "f94e44f7cb07",
		"ts": "2026-11-11T18:19:12.669Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1616144.24,
		"hash": "f94e44f7cb07cb838d5159e603876aff3b4bb576efe75ce87cc00edca1987b80"
	},
	{
		"id": "a85df102a2a9",
		"ts": "2026-11-11T18:19:12.893Z",
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
		"liquidityUsd": 2414158.44,
		"hash": "a85df102a2a9e15f84b671e8d0d15d0d220cc2112def5277987719e9e756e29f"
	},
	{
		"id": "06e6f461e380",
		"ts": "2026-11-11T18:19:13.112Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 868094.98,
		"hash": "06e6f461e380548efb1ced37ab985685c13c51e4929d47e11e009ec5b601fea0"
	},
	{
		"id": "eedaf71f0b22",
		"ts": "2026-11-11T18:19:13.338Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1767509.13,
		"hash": "eedaf71f0b229096fbf097c0581bcbc01536a9110c54e352a9da3fdb914f20e5"
	},
	{
		"id": "64d6a6fa6c26",
		"ts": "2026-11-11T18:19:13.557Z",
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
		"liquidityUsd": 7042657.55,
		"hash": "64d6a6fa6c26fbd620b6323fab3498ad5423916a6eaa9ca5783caf7940a27e7f"
	},
	{
		"id": "f0103bcf490b",
		"ts": "2026-11-11T18:19:13.792Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1572753.09,
		"hash": "f0103bcf490bf1a676622d55619e0427a1f648239c837dc173573f831056869a"
	},
	{
		"id": "155ce31c9139",
		"ts": "2026-11-11T18:19:14.013Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2378969.46,
		"hash": "155ce31c913974fa3c48b6b8f3980b83ef7d0eca2e6762984677f5391af4aca7"
	},
	{
		"id": "faef60715cb8",
		"ts": "2026-11-11T18:19:14.237Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 127094.66,
		"hash": "faef60715cb8fcef2d641c9afc54e5c3cf23d9dfdadf6863301964737fcbeb9c"
	},
	{
		"id": "e1a320f8a597",
		"ts": "2026-11-11T18:19:14.459Z",
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
		"liquidityUsd": 666446.91,
		"hash": "e1a320f8a5971c7e3e8ede3ddf73238c4a347042fb2da1a10e1678d416c9954a"
	},
	{
		"id": "5e46338bb064",
		"ts": "2026-11-11T18:19:14.684Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 641104.77,
		"hash": "5e46338bb06401c9fc57ca920e4d512601556ce6b6d7091bb71a7f0054bfa3c3"
	},
	{
		"id": "95aafc9a11b8",
		"ts": "2026-11-11T10:15:09.630Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 133795939.05,
		"hash": "95aafc9a11b86d58bcd1c59939e4c834f3c7ce101d6b19c9fd59ba7215ac6ea4"
	},
	{
		"id": "43acc10f534f",
		"ts": "2026-11-11T10:15:09.918Z",
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
		"liquidityUsd": 15443806.14,
		"hash": "43acc10f534f14c59de1f45b1ff24ddd4dbb3e3d1917d60abc04902cc20a2eae"
	},
	{
		"id": "e842ecd7ea76",
		"ts": "2026-11-11T10:15:10.217Z",
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
		"liquidityUsd": 232758.41,
		"hash": "e842ecd7ea76073e3d01575bb7e1153387847f4596c882df0b71152325eb9955"
	},
	{
		"id": "eb4022f8efa5",
		"ts": "2026-11-11T10:15:10.509Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4278046.22,
		"hash": "eb4022f8efa5908d80e93c116ac238ed058ad520233571d1e380008f476aebd7"
	},
	{
		"id": "cd1207a5d844",
		"ts": "2026-11-11T10:15:11.025Z",
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
		"liquidityUsd": 1356167.58,
		"hash": "cd1207a5d8442a67f3723bc3a499078016112dac7308cc99ae78cd19d57c6e81"
	},
	{
		"id": "d8f4e2f14c4e",
		"ts": "2026-11-11T10:15:11.341Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 942505.65,
		"hash": "d8f4e2f14c4e0e5cb3dfe44620204ac19f5493bd1347853bd0a030ebd243241f"
	},
	{
		"id": "6fd4abacd205",
		"ts": "2026-11-11T10:15:11.571Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 127783.81,
		"hash": "6fd4abacd20589dc295fefcda0018cdf9901499556e5bfbe215094cbff2aeebf"
	},
	{
		"id": "eaecce5e4136",
		"ts": "2026-11-11T10:15:11.841Z",
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
		"liquidityUsd": 1491212.02,
		"hash": "eaecce5e4136f5de8aba51059b08182f7173da0eee1f4ab43430700fca488a20"
	},
	{
		"id": "4d35e4dd9834",
		"ts": "2026-11-11T10:15:12.105Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148164.46,
		"hash": "4d35e4dd9834ef4df98649366cc123aa63ede8e1dda42631289d0b34ffe6878b"
	},
	{
		"id": "1dc829f1828c",
		"ts": "2026-11-11T10:15:12.367Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1607685.92,
		"hash": "1dc829f1828cafa4994813d98970dde5b3df9c8553e671129bcc5c75e9087daa"
	},
	{
		"id": "1a4d2d3b0c31",
		"ts": "2026-11-11T10:15:12.593Z",
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
		"liquidityUsd": 6738870.9,
		"hash": "1a4d2d3b0c31e186a5e3a7d1a755e2ab213374fbc179ddba4eaf4e27aa03ced9"
	},
	{
		"id": "72a5c91986f0",
		"ts": "2026-11-11T10:15:12.821Z",
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
		"liquidityUsd": 2377912.35,
		"hash": "72a5c91986f000c495ef8ed4d59df287d0e21968928b8c534849fa42bf76a9b1"
	},
	{
		"id": "b992aac63f4c",
		"ts": "2026-11-11T10:15:13.035Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 875871.72,
		"hash": "b992aac63f4cc047edd7d3db8dbfe3604c97002e2efe2beeaadcfcaa87829cf9"
	},
	{
		"id": "8339a3f2c65b",
		"ts": "2026-11-11T10:15:13.260Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 127767.66,
		"hash": "8339a3f2c65b708b58f5018a85ba8c07be940ecacdbce3b64b40c82fe420cb27"
	},
	{
		"id": "3f6d0779353e",
		"ts": "2026-11-11T10:15:13.493Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1620063.25,
		"hash": "3f6d0779353e57cafef7ea60ab07a4da8d0ebaa16b8a216be5e4a131f88e0876"
	},
	{
		"id": "0f2b2f796ce9",
		"ts": "2026-11-11T10:15:13.728Z",
		"symbol": "MUc",
		"token": "0xb200000000000000000000Fd2f87532B90095211",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 553641.67,
		"hash": "0f2b2f796ce9905ef7a12a6d3df9a12b458415452810746aef95cf82ce8b1c71"
	},
	{
		"id": "117355032171",
		"ts": "2026-11-11T10:15:13.956Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1552588.35,
		"hash": "1173550321718eefbf0b1206ff52cf07564084bed1291217a1612e1eb71dec1e"
	},
	{
		"id": "c19d66e02dc0",
		"ts": "2026-11-11T10:15:14.182Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 397930.07,
		"hash": "c19d66e02dc01600a2b1cd35d585928a402d74a80a3698f6f705a054ef06fe76"
	},
	{
		"id": "5ceaf0a439c5",
		"ts": "2026-11-11T02:29:32.461Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 133751324.07,
		"hash": "5ceaf0a439c5928ceb14e1b3b85b827886048efc0cd1a0ea49c7b10eaa4159df"
	},
	{
		"id": "5d4ddd612dbb",
		"ts": "2026-11-11T02:29:32.747Z",
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
		"liquidityUsd": 15334361.55,
		"hash": "5d4ddd612dbbed7f13b81cefb665e492f4e227eebf90c53b8343f265422849e1"
	},
	{
		"id": "1c2fb79a51e7",
		"ts": "2026-11-11T02:29:32.993Z",
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
		"liquidityUsd": 231376.31,
		"hash": "1c2fb79a51e7d465c8542defd44f73c6b2f4254674586587aada4d1b35541bfa"
	},
	{
		"id": "7da54f167805",
		"ts": "2026-11-11T02:29:33.253Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4253645.42,
		"hash": "7da54f167805ba0141498bfa0b85adec9e961a1fafdd1f2c2d614bed50e08b38"
	},
	{
		"id": "375816576801",
		"ts": "2026-11-11T02:29:33.521Z",
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
		"liquidityUsd": 1290292.03,
		"hash": "3758165768015f1c5c82964d906605fd18dba127569aacb9900e52613736dee0"
	},
	{
		"id": "db43c2e64fc1",
		"ts": "2026-11-11T02:29:33.772Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 942557.97,
		"hash": "db43c2e64fc186c3ff4c54d1a13fdcae8ea356b1eb03ae47aaedad7068da59ee"
	},
	{
		"id": "71e6619dc0cc",
		"ts": "2026-11-11T02:29:34.101Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 127780.64,
		"hash": "71e6619dc0cc965f3efa971ac8454046fe4463c825b4f6c0c188135384738f44"
	},
	{
		"id": "2d6e41740fb5",
		"ts": "2026-11-11T02:29:34.357Z",
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
		"liquidityUsd": 1462729,
		"hash": "2d6e41740fb55368fa7e64be0df801b810a0b85592df1eb13d8fef1a45f9dcb9"
	},
	{
		"id": "cda6f0cfa9dc",
		"ts": "2026-11-11T02:29:34.601Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1611758.94,
		"hash": "cda6f0cfa9dc6925053337d9903765521441e42a2ffb6a955b864fc037fc59e3"
	},
	{
		"id": "be2b1bc575f8",
		"ts": "2026-11-11T02:29:34.894Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 402793.33,
		"hash": "be2b1bc575f8f5ae4d7cc8542162d99302a7111c30cc71db050246013c02942a"
	},
	{
		"id": "4b535408764d",
		"ts": "2026-11-11T02:29:35.170Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 861054.21,
		"hash": "4b535408764ddf87b37328d0975ab83a734acb569bd9fe8ba7c64657d3567efb"
	},
	{
		"id": "f4556c4f21d7",
		"ts": "2026-11-11T02:29:35.546Z",
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
		"liquidityUsd": 6780554.67,
		"hash": "f4556c4f21d743a06e2459668f162a9c811865eb99ca786c15de7094e92ca18f"
	},
	{
		"id": "bf92b223bdcb",
		"ts": "2026-11-11T02:29:35.774Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 470062.55,
		"hash": "bf92b223bdcb240e8d32927764a02909aca43a1a2e6e3077dcb9d4e999700633"
	},
	{
		"id": "1f19bee2b74d",
		"ts": "2026-11-11T02:29:36.002Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 151551.44,
		"hash": "1f19bee2b74dd5d1bdf216c395ba153121c6245d563990bc0f811a9d9cdad425"
	},
	{
		"id": "095ce533dfe6",
		"ts": "2026-11-11T02:29:36.237Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3056617.25,
		"hash": "095ce533dfe6bf0dd422096009d5e51f2cee5488449235db6607c7fa8004b3c6"
	},
	{
		"id": "744136dfa841",
		"ts": "2026-11-11T02:29:36.486Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1577177.02,
		"hash": "744136dfa841d4ecd5b027d451cb7b2485a1bf4b8855a85acf9f5051de46beae"
	},
	{
		"id": "794e5abee1f8",
		"ts": "2026-11-11T02:29:36.736Z",
		"symbol": "MUc",
		"token": "0xb200000000000000000000Fd2f87532B90095211",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 603246.81,
		"hash": "794e5abee1f82a1617b85c314e12401770995996593a3889e449c026ff822b82"
	},
	{
		"id": "d5dee41ce54f",
		"ts": "2026-11-11T02:29:36.971Z",
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
		"liquidityUsd": 2399815.89,
		"hash": "d5dee41ce54fdeeb0e60dba6bc88a05b79acca41b1119afa79cd9c2e9fdd541a"
	},
	{
		"id": "0359eab9d9a5",
		"ts": "2026-11-10T22:46:37.465Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 133761808.6,
		"hash": "0359eab9d9a57b1c8e10971abbe8ac4371f3180bf6355cd8c9736f4550177c7a"
	},
	{
		"id": "fd953a8a9e35",
		"ts": "2026-11-10T22:46:37.711Z",
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
		"liquidityUsd": 15374788.01,
		"hash": "fd953a8a9e354a6dd20771fd32b33bc72b3a15b9302b419273ac6493aa182069"
	},
	{
		"id": "9011b216f18b",
		"ts": "2026-11-10T22:46:37.960Z",
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
		"liquidityUsd": 232574.4,
		"hash": "9011b216f18b76f5fcf6ab6faf0fc95fc4b4ec8ad794457460760140bcc89677"
	},
	{
		"id": "7e4e1d7af3e1",
		"ts": "2026-11-10T22:46:38.239Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4306738.34,
		"hash": "7e4e1d7af3e1c50905c2a303be1c4dbae44a403be38310aa41c4d94afa05b4ff"
	},
	{
		"id": "741b74314d6b",
		"ts": "2026-11-10T22:46:38.496Z",
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
		"liquidityUsd": 1290440.65,
		"hash": "741b74314d6b2ad914702360ceeaa2794f57f4b1a00854464459dfb8fa5c415c"
	},
	{
		"id": "4c889c5cb4e1",
		"ts": "2026-11-10T22:46:38.750Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 941138.22,
		"hash": "4c889c5cb4e1a3927551ad90ce9c11b1f6a92f89ac6b6fef44607d4ebbee2e38"
	},
	{
		"id": "208b2fdf1e50",
		"ts": "2026-11-10T22:46:39.003Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 127772.47,
		"hash": "208b2fdf1e5018d5ed366284fa8f6c88f409292097289bd67511b73073e6e919"
	},
	{
		"id": "c2e7792d11eb",
		"ts": "2026-11-10T22:46:39.280Z",
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
		"liquidityUsd": 1459202.75,
		"hash": "c2e7792d11ebeab65638c6e314ca954fa4054d91a89c4afa6f0dd128aebadc1f"
	},
	{
		"id": "97920df16c51",
		"ts": "2026-11-10T22:46:39.530Z",
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
		"liquidityUsd": 6804288.58,
		"hash": "97920df16c511ec71c408ef4af7ef7dd7b4a8d96a6699e9688d5a99cf78af2a2"
	},
	{
		"id": "72fbb79db8ca",
		"ts": "2026-11-10T22:46:39.792Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 480206.63,
		"hash": "72fbb79db8ca1cd7ebbb0fd7b5f1c9932a9fa79385d88da7815133325ff39b14"
	},
	{
		"id": "6c99c344a708",
		"ts": "2026-11-10T22:46:40.023Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 863085.7,
		"hash": "6c99c344a708f57665d253fd177b80f6007ebc55260ddac839fcd87c07197787"
	},
	{
		"id": "020a8bd33eeb",
		"ts": "2026-11-10T22:46:40.259Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 408831.14,
		"hash": "020a8bd33eeba083f998b80b93d27cbc4eebc7f3300609f1796ea90ae1ccd67d"
	},
	{
		"id": "e5be1d6f6d75",
		"ts": "2026-11-10T22:46:40.485Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1620410.02,
		"hash": "e5be1d6f6d754361340fb8e5b52950b9b61591dec7870fa326bb58f42c196c2c"
	},
	{
		"id": "bf4a2599de29",
		"ts": "2026-11-10T22:46:40.715Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1709862.6,
		"hash": "bf4a2599de2953cec47e8d1c64be35dad972585fa57769ff553934b331f91121"
	},
	{
		"id": "7a26de24fde8",
		"ts": "2026-11-10T22:46:40.944Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3046284.12,
		"hash": "7a26de24fde8f3726607b676e67b813e622aee057643a4336a204e118f09fda3"
	},
	{
		"id": "d8d1da537726",
		"ts": "2026-11-10T22:46:41.166Z",
		"symbol": "MUc",
		"token": "0xb200000000000000000000Fd2f87532B90095211",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 586221.73,
		"hash": "d8d1da537726512efa11c6d2f51fdf5928c899e01059bf1a9c6d5834a8d5ad9d"
	},
	{
		"id": "8f8b1c9e9bc0",
		"ts": "2026-11-10T22:46:41.393Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148455.56,
		"hash": "8f8b1c9e9bc02520733767c557098d20d9b3a171c0f6f836af7e4e940334e391"
	},
	{
		"id": "66f7bdba61a6",
		"ts": "2026-11-10T22:46:41.626Z",
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
		"liquidityUsd": 2393682.79,
		"hash": "66f7bdba61a6e7dd05fa36001a548de6a389bedd6901805b2f2e4f87f2d9318f"
	},
	{
		"id": "23feb78eeca1",
		"ts": "2026-11-10T17:26:48.869Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 132320396.85,
		"hash": "23feb78eeca14bbe0cb05306846d06714acef40bb00e333ca2624741a790d271"
	},
	{
		"id": "08be08b47849",
		"ts": "2026-11-10T17:26:49.157Z",
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
		"liquidityUsd": 15125814.64,
		"hash": "08be08b478493429930c8630339949e5384612cb3363f8c15b8a331d3156c031"
	},
	{
		"id": "b4100bc45e50",
		"ts": "2026-11-10T17:26:49.416Z",
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
		"liquidityUsd": 230593.59,
		"hash": "b4100bc45e5008b4c2a1257bc2f96fca095c1c0d9295e00f4172a99540e2ca67"
	},
	{
		"id": "ba1b0e96fd0d",
		"ts": "2026-11-10T17:26:49.677Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4262297.7,
		"hash": "ba1b0e96fd0d5b2230c27ffbd7a88836047dea265830e24e3053b9db2941670e"
	},
	{
		"id": "9a088c574d39",
		"ts": "2026-11-10T17:26:49.964Z",
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
		"liquidityUsd": 1277379.55,
		"hash": "9a088c574d39eef98416cf988d7211b438e5dd669468f1f6f232136caace195f"
	},
	{
		"id": "a5ee6e76169f",
		"ts": "2026-11-10T17:26:50.306Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 929356.06,
		"hash": "a5ee6e76169fc4c4fcc5f25b265e778c18a7b3e83557bbc7e9b82f17a740ccfe"
	},
	{
		"id": "1ed90e475c0f",
		"ts": "2026-11-10T17:26:50.603Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 127613.32,
		"hash": "1ed90e475c0f261b57aca8987c988f1bad95d3397522e0ca7b04b6480ff708e7"
	},
	{
		"id": "303afd7d5b4a",
		"ts": "2026-11-10T17:26:51.250Z",
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
		"liquidityUsd": 1439889.01,
		"hash": "303afd7d5b4aae4cb3b8b2f7ab1fa6b6b70539608d8a159f61af1107aff1ac8c"
	},
	{
		"id": "4255a3a7ba7d",
		"ts": "2026-11-10T17:26:51.520Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 853219.7,
		"hash": "4255a3a7ba7da968af5199a5a3a71a0fff68ca5129f662978c7cbb6d524e0e65"
	},
	{
		"id": "b841377bbe69",
		"ts": "2026-11-10T17:26:51.766Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 482541.47,
		"hash": "b841377bbe697940e00c6654b483a1ff5220e3f534b1d08880656e08f24c0d96"
	},
	{
		"id": "a3ae3775a802",
		"ts": "2026-11-10T17:26:52.005Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 330097.49,
		"hash": "a3ae3775a802c3e7e07182e6dc5c82e83094843b1ebc0f3274716b136598cec8"
	},
	{
		"id": "46e5869a022f",
		"ts": "2026-11-10T17:26:52.239Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1495747.18,
		"hash": "46e5869a022fefd35d2b875542126c8c3aec99eaf72024d720c410069cd8ec94"
	},
	{
		"id": "2c061dca2765",
		"ts": "2026-11-10T17:26:52.477Z",
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
		"liquidityUsd": 6670626.31,
		"hash": "2c061dca276508080ebe2ee3b17dddf0a1e71b2965c16b6fa449930ca81c18ac"
	},
	{
		"id": "f9a2ec2b1c44",
		"ts": "2026-11-10T17:26:52.709Z",
		"symbol": "MUc",
		"token": "0xb200000000000000000000Fd2f87532B90095211",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 554924.74,
		"hash": "f9a2ec2b1c440c77a79e848e98b70973c63377e4ad2e540ec8f64a4e3fdf0735"
	},
	{
		"id": "e2c1ab78154c",
		"ts": "2026-11-10T17:26:52.945Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1619267.68,
		"hash": "e2c1ab78154caa8cd94c9f6e14e82ddeb20fb9fccf6710fff25c1bfc85446cb3"
	},
	{
		"id": "c8da5b13b1cc",
		"ts": "2026-11-10T17:26:53.183Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2979893.2,
		"hash": "c8da5b13b1cc0901e1fc1aa4f18e06ed6860856987310aa9c0572c22f633e666"
	},
	{
		"id": "7371ee30d9aa",
		"ts": "2026-11-10T17:26:53.420Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 131452.39,
		"hash": "7371ee30d9aa45c7946ddb11c3d517fa067987ce7cac5b2e17167859dc8f758f"
	},
	{
		"id": "349bcbdee6c2",
		"ts": "2026-11-10T17:26:54.351Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 120064.16,
		"hash": "349bcbdee6c2623bdb7b4b0bcb62c47511eade224d661debdf724cfc52576038"
	},
	{
		"id": "9103950e3bea",
		"ts": "2026-11-10T17:26:54.588Z",
		"symbol": "KNTQ",
		"token": "0xb80194e3868511b8f43E1D5d6E255cD9e7c3e7dD",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 800746.83,
		"hash": "9103950e3beabbfd35db0db6f34ec3aea414cbaf45fd02004fac69811ca81fe1"
	},
	{
		"id": "d6e012d298cb",
		"ts": "2026-11-10T17:26:54.823Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 18353.84,
		"hash": "d6e012d298cb98d0709777ff7c51b68872cc880c3e4fda7c210af89bf739c884"
	},
	{
		"id": "af6f610e29c7",
		"ts": "2026-11-10T09:09:53.922Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 138345896.6,
		"hash": "af6f610e29c741b891ba35848ca55a8736e0d45e5958e8f37068a5f0d1fe1a8a"
	},
	{
		"id": "d154c4ffa2a1",
		"ts": "2026-11-10T09:09:54.630Z",
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
		"liquidityUsd": 15482862.81,
		"hash": "d154c4ffa2a1de601196d8ecddbc092dee238bbdb8a3a7f3952bc05bd8fc58f3"
	},
	{
		"id": "1ff547860956",
		"ts": "2026-11-10T09:09:54.921Z",
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
		"liquidityUsd": 241010.01,
		"hash": "1ff5478609568ad52bb3f6c9a9322c233b0e9e706a3902a6bfa9e6abf3f53f96"
	},
	{
		"id": "29aa3c4acd9b",
		"ts": "2026-11-10T09:09:55.203Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4381506.96,
		"hash": "29aa3c4acd9b1b6c7f279a997283ec3b759498f305b91a587e0894bffe85a8d7"
	},
	{
		"id": "3abb1b1980f9",
		"ts": "2026-11-10T09:09:55.472Z",
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
		"liquidityUsd": 1293526.47,
		"hash": "3abb1b1980f9e5a458bfdf042b144ad6df73891197e301270a567888e3fe1a0b"
	},
	{
		"id": "d2882f248272",
		"ts": "2026-11-10T09:09:55.729Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 960791.26,
		"hash": "d2882f2482727f2e069628536e1207c657e4c234d9a7c9d80f2b026966f5202d"
	},
	{
		"id": "51430349ea1d",
		"ts": "2026-11-10T09:09:55.982Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4381506.96,
		"hash": "51430349ea1d99a547e0027ff994c2e2f0d734755a670a05ba88d9ef838a80eb"
	},
	{
		"id": "5e53dd009608",
		"ts": "2026-11-10T09:09:56.237Z",
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
		"liquidityUsd": 1147472.12,
		"hash": "5e53dd009608ae8fcb4c1f952db8d65477e0f6f10126961a76527a36bfdb1080"
	},
	{
		"id": "fd59d26c6ce8",
		"ts": "2026-11-10T09:09:56.489Z",
		"symbol": "KNTQ",
		"token": "0xb80194e3868511b8f43E1D5d6E255cD9e7c3e7dD",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 866732.75,
		"hash": "fd59d26c6ce800ed126af6ba2697f76b8d3301c830edca44d9ef3995b19bf7fd"
	},
	{
		"id": "8c8471100b44",
		"ts": "2026-11-10T09:09:56.744Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 893627.05,
		"hash": "8c8471100b446a21e8815a39952afca6f4b960f42dc60d34e1e532afceec6fb8"
	},
	{
		"id": "0fad3ac74a84",
		"ts": "2026-11-10T09:09:56.991Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2417479.69,
		"hash": "0fad3ac74a849a9a2913c91d8d830c87572266c51c92dc284c2faa46070d37ab"
	},
	{
		"id": "9ce4111f22a1",
		"ts": "2026-11-10T09:09:57.232Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1833749.14,
		"hash": "9ce4111f22a1f5e21c25dacab6a34045327e22f61b8c4af5e46924b0629fea41"
	},
	{
		"id": "8dbc3cf813c9",
		"ts": "2026-11-10T09:09:57.492Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3110366.66,
		"hash": "8dbc3cf813c94aed6cacab7e8b8ac3770603e97ffad26672bc62f62133243cfe"
	},
	{
		"id": "47d6ace8a788",
		"ts": "2026-11-10T09:09:57.733Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 465745.4,
		"hash": "47d6ace8a788bc112ec477c029f7e9b0459205f08977452c57fae24dd0b4ff02"
	},
	{
		"id": "cbf1652d95e2",
		"ts": "2026-11-10T09:09:57.972Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 585216.69,
		"hash": "cbf1652d95e2c03154216f8733711cef648495d2060521a66c4524e20a908945"
	},
	{
		"id": "b8fd8f730f31",
		"ts": "2026-11-10T09:09:58.227Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 126849.51,
		"hash": "b8fd8f730f3138c73295241758f11512fd8da2b9046d165d3eb947efcf04f661"
	},
	{
		"id": "710c7699c77b",
		"ts": "2026-11-10T09:09:58.466Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1589812.8,
		"hash": "710c7699c77b657a4d57bf506e5e14d3ca3ded255e554ff609b461061b075642"
	},
	{
		"id": "d4df662d13cf",
		"ts": "2026-11-10T09:09:58.711Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 127789.49,
		"hash": "d4df662d13cf281b594aeed54c4aa9f4409e89dd3f85420dbe2b59399065a68c"
	},
	{
		"id": "43d3b88412ca",
		"ts": "2026-11-10T09:09:59.064Z",
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
		"liquidityUsd": 7230695.35,
		"hash": "43d3b88412cae9c3e785ac95c54ee23b9fb31550bb8a597cf6ffac3a6d08e8ee"
	},
	{
		"id": "50a4598490bd",
		"ts": "2026-11-10T01:51:34.160Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 140059089.56,
		"hash": "50a4598490bd68530480c422721c7310359f65febef6bc2cfa108f1a39c7cdb1"
	},
	{
		"id": "acfa57e444a2",
		"ts": "2026-11-10T01:51:34.387Z",
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
		"liquidityUsd": 15620711.74,
		"hash": "acfa57e444a2f63c5573943cd47bc34cc127d6235dd4b954abe2f415feee3871"
	},
	{
		"id": "7b04ef2e43fd",
		"ts": "2026-11-10T01:51:34.596Z",
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
		"liquidityUsd": 232758.28,
		"hash": "7b04ef2e43fddbde011e96b1c8cb1b9578b286037ef6ea3b1f285312180b16da"
	},
	{
		"id": "81873386a307",
		"ts": "2026-11-10T01:51:34.806Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4489479.8,
		"hash": "81873386a30712912b25d2e6e7a9919cc3d9536128bac6a5ba2dc797f238e373"
	},
	{
		"id": "2a8c41f863cf",
		"ts": "2026-11-10T01:51:35.005Z",
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
		"liquidityUsd": 1279507.24,
		"hash": "2a8c41f863cf3c966d974185a73f00a1d9893b7d67f06223ec927f89d72df97e"
	},
	{
		"id": "890b837d2c6f",
		"ts": "2026-11-10T01:51:35.205Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 966176.14,
		"hash": "890b837d2c6fd8c619605fbe962757be6664475f809e7777f993456ad0217f60"
	},
	{
		"id": "cd47a5dee73d",
		"ts": "2026-11-10T01:51:35.406Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4489479.8,
		"hash": "cd47a5dee73d7106a135f55535388bb4eacf6013be3e6bd74adce556d6161043"
	},
	{
		"id": "31f003233a4b",
		"ts": "2026-11-10T01:51:35.601Z",
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
		"liquidityUsd": 1161428.38,
		"hash": "31f003233a4bf4418618bcf128c19229a413275c5b61e47b44e7b70499127894"
	},
	{
		"id": "64c414ce24d1",
		"ts": "2026-11-10T01:51:35.786Z",
		"symbol": "KNTQ",
		"token": "0xb80194e3868511b8f43E1D5d6E255cD9e7c3e7dD",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 869804.7,
		"hash": "64c414ce24d1085f5733565b7a17ec244b794204ca26be8fcc9ab9a62415e9db"
	},
	{
		"id": "c26ab4855e61",
		"ts": "2026-11-10T01:51:35.980Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3120905.48,
		"hash": "c26ab4855e6147f22ba8e9dbc001a98e42534f1f49f22c8ef61da7ad30283fcc"
	},
	{
		"id": "04fa04a2bd26",
		"ts": "2026-11-10T01:51:36.181Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 896188.5,
		"hash": "04fa04a2bd26235bf11e0104774b40dc449cc8415e4f1352835336ae6d3b99d4"
	},
	{
		"id": "8d9d5bcb60a8",
		"ts": "2026-11-10T01:51:36.361Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 562780.3,
		"hash": "8d9d5bcb60a81f217a2c36f8855c8cd2cf2e4702e631fbc9c831c7a751793c9f"
	},
	{
		"id": "7fe23eab84e5",
		"ts": "2026-11-10T01:51:36.551Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 127888.34,
		"hash": "7fe23eab84e51e8e22a323ec63cc3c52bc4fa37c8576f8073f523df1d03bf8b6"
	},
	{
		"id": "3690878ac817",
		"ts": "2026-11-10T01:51:36.762Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1770662.12,
		"hash": "3690878ac817469417eeacbd26bd057d27cc57a23c85176971f9b0272d2bbfce"
	},
	{
		"id": "4ad40835568e",
		"ts": "2026-11-10T01:51:36.958Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 468231.55,
		"hash": "4ad40835568ea66ca7c4b3b6b150a96697679262e8ef9aa3f3051ef799491932"
	},
	{
		"id": "58ad45f0c8dd",
		"ts": "2026-11-10T01:51:37.148Z",
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
		"liquidityUsd": 7307685.17,
		"hash": "58ad45f0c8dd4a4d6cb0b5825a5930234204482578b3920be4f5297bf5d7defa"
	},
	{
		"id": "24eccbc34e8a",
		"ts": "2026-11-10T01:51:37.365Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 128423.33,
		"hash": "24eccbc34e8a33df30c8ad0c5d6efa8016a241c7b74f1db93a940634c269184d"
	},
	{
		"id": "5c8db520539e",
		"ts": "2026-11-10T01:51:37.552Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2419506.07,
		"hash": "5c8db520539ee27001b357737699a1cb393720b8e54b5c61274adce8a6abd1e2"
	},
	{
		"id": "05cd8da462f1",
		"ts": "2026-11-10T01:51:37.743Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1568750.1,
		"hash": "05cd8da462f1dcd8bbdcdc0216519fc06bf7fcdb65e2716c227b1244eb833b00"
	},
	{
		"id": "10a469e15d6e",
		"ts": "2026-11-09T07:35:42.709Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 137179704.01,
		"hash": "10a469e15d6e22710cd7d4ea4266013e0f3ada5952bdb1036a197b5b76455101"
	},
	{
		"id": "b2550978da66",
		"ts": "2026-11-09T07:35:42.936Z",
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
		"liquidityUsd": 15162256.59,
		"hash": "b2550978da669ccc5ec3c8e8ef5588ef1a9263640d3fde8ffc03e6a7df2c01a4"
	},
	{
		"id": "e7e2b068d735",
		"ts": "2026-11-09T07:35:43.149Z",
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
		"liquidityUsd": 229561.81,
		"hash": "e7e2b068d73535c215db7f1b510d6960a0b5496de7e4cb4d57ab2c9b1926cb3a"
	},
	{
		"id": "720a4583ecf0",
		"ts": "2026-11-09T07:35:43.360Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4528986.55,
		"hash": "720a4583ecf04188633934fc92666a217351df19b6b5e8e05415d20156014ed7"
	},
	{
		"id": "1a8bb4368356",
		"ts": "2026-11-09T07:35:43.588Z",
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
		"liquidityUsd": 1246651.15,
		"hash": "1a8bb43683561a06a2d448b25d48df41a18696a599d073959db3bfb9234d9bb1"
	},
	{
		"id": "79939dab576e",
		"ts": "2026-11-09T07:35:43.811Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 939231.23,
		"hash": "79939dab576e0084e7b2bda7ac1b7b6916641a41849457bfd9400ea90ffcf8bd"
	},
	{
		"id": "030cb1a60b41",
		"ts": "2026-11-09T07:35:44.014Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2418192.26,
		"hash": "030cb1a60b41656e6f7c12d518cba6d76e22cbf1691af15744e8b2904057e921"
	},
	{
		"id": "f0f63271bbff",
		"ts": "2026-11-09T07:35:44.216Z",
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
		"liquidityUsd": 1206254.2,
		"hash": "f0f63271bbff7a65c1a425b71e3901d3ef2cea0476cea27770f1f6568db65afe"
	},
	{
		"id": "24abb4ff49a1",
		"ts": "2026-11-09T07:35:44.420Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 133671.96,
		"hash": "24abb4ff49a13f7b258686503cc38212335f1c2bbf4c677753123d6863bc4b30"
	},
	{
		"id": "81b8de613987",
		"ts": "2026-11-09T07:35:44.608Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 553817.47,
		"hash": "81b8de6139870b4d4a8a241cb82029afc7ddd71bd3ca7c6d4e6ea9666678b12e"
	},
	{
		"id": "be617d2975d7",
		"ts": "2026-11-09T07:35:44.867Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1556376.88,
		"hash": "be617d2975d7886eec43b53d7283765e3e3d08ef203ff0d7c67477cea5e1f2d7"
	},
	{
		"id": "e41226c7fb6b",
		"ts": "2026-11-09T07:35:45.063Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3111437.81,
		"hash": "e41226c7fb6b4d8910e290e912810c132e55fe144e58003af7b65172e127ff38"
	},
	{
		"id": "71df5b6d96c0",
		"ts": "2026-11-09T07:35:45.266Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 895633.26,
		"hash": "71df5b6d96c04e8da8fd992354fed4d3c49b89ffe7dbed454b2d6afddf1dcd29"
	},
	{
		"id": "dcf0f9c4aae6",
		"ts": "2026-11-09T07:35:45.465Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 480141.35,
		"hash": "dcf0f9c4aae61104408faf20c85d60ed904cd5b02ab0dbeac74aed25e7ec9ec1"
	},
	{
		"id": "e47462664ba1",
		"ts": "2026-11-09T07:35:45.652Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1573947.39,
		"hash": "e47462664ba1afa94f31eada9854a7362d4c8c865b2a5cb9da73cc9b8b5c9421"
	},
	{
		"id": "0097c04abf7a",
		"ts": "2026-11-09T07:35:45.843Z",
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
		"liquidityUsd": 7007524.57,
		"hash": "0097c04abf7a5df627ee521233154e1cb8aeac49abcf368892020a3b01b5b407"
	},
	{
		"id": "60b331c6188d",
		"ts": "2026-11-09T07:35:46.034Z",
		"symbol": "KNTQ",
		"token": "0xb80194e3868511b8f43E1D5d6E255cD9e7c3e7dD",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 842572.74,
		"hash": "60b331c6188dd61f7cd351ff8b3f0c3cb12fc1d6ec7185b3895376c45a0ffc90"
	},
	{
		"id": "d1d2107d052c",
		"ts": "2026-11-09T07:35:46.219Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2418231.96,
		"hash": "d1d2107d052c67448ca6e3ab8036d3947785d9cd5e7be18c94f796a34ffefd15"
	},
	{
		"id": "9dfbe896a739",
		"ts": "2026-11-09T00:28:02.354Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 138651802.69,
		"hash": "9dfbe896a73983ac70ed4392fd89d51b94891ca311f6caa4fd5dfe2105c90a4b"
	},
	{
		"id": "f9f39ffc1106",
		"ts": "2026-11-09T00:28:02.552Z",
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
		"liquidityUsd": 15335731.97,
		"hash": "f9f39ffc1106a2e51787db89024bf3e469531a59a4670b3094a90f2881b87c6f"
	},
	{
		"id": "f1a29e770199",
		"ts": "2026-11-09T00:28:02.781Z",
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
		"liquidityUsd": 234519.45,
		"hash": "f1a29e770199d78dadbead7f9ea2e5a0d3a9c2d7dbdd998a326d75e600fd7810"
	},
	{
		"id": "6aea3e5fb668",
		"ts": "2026-11-09T00:28:02.990Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4628381.63,
		"hash": "6aea3e5fb6686490460d5571e5348dba6ba79f441102bbcbee342d15b1849eed"
	},
	{
		"id": "9b45654c4a9b",
		"ts": "2026-11-09T00:28:03.200Z",
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
		"liquidityUsd": 881230.99,
		"hash": "9b45654c4a9b7fb4e1290ca8c453300d98a711f617942245024f71905eb77096"
	},
	{
		"id": "387cdef41ebc",
		"ts": "2026-11-09T00:28:03.402Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 954233.57,
		"hash": "387cdef41ebc3df5ffa0311039eb13175428d2886e21a567154ff212d376d618"
	},
	{
		"id": "686b692a0569",
		"ts": "2026-11-09T00:28:03.618Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4628381.63,
		"hash": "686b692a0569af652eb61733063468384bf2ce0f804b220c1286af2c83ee067b"
	},
	{
		"id": "8ce263a34950",
		"ts": "2026-11-09T00:28:03.854Z",
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
		"liquidityUsd": 892592.66,
		"hash": "8ce263a34950993251421343afa2b0cbba1ad57d2dfa1a01a254c7c9832c9f0c"
	},
	{
		"id": "1630b0f4959a",
		"ts": "2026-11-09T00:28:04.072Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 134599.66,
		"hash": "1630b0f4959a426857fe223ecb01150a25480f0e06c12efb2bbcc872d190b69f"
	},
	{
		"id": "e8931b757237",
		"ts": "2026-11-09T00:28:04.258Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 906307.23,
		"hash": "e8931b757237e2396b94ced1b1909d2366cfe9176b3d641c5fc57f4d644456c5"
	},
	{
		"id": "f55e0344271e",
		"ts": "2026-11-09T00:28:04.451Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1532808.23,
		"hash": "f55e0344271e294827f0ecd1c9f78f8e198cfc980e752f9304ac809e0a72e5ac"
	},
	{
		"id": "3180995087a7",
		"ts": "2026-11-09T00:28:04.663Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 561670.58,
		"hash": "3180995087a71e4ef9e0423a987ddd60a22cbdeb52582f6ca24d41a8b4d76629"
	},
	{
		"id": "5659375ed218",
		"ts": "2026-11-09T00:28:04.871Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3168826.21,
		"hash": "5659375ed21824f072313220886100cc322f630d7ad7fb67650d29a12dac84ba"
	},
	{
		"id": "f71dcfb540b0",
		"ts": "2026-11-09T00:28:05.079Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1513275.37,
		"hash": "f71dcfb540b00b00cf23e40467d03ff63355a01207cb83f746b4abe22c27b8fb"
	},
	{
		"id": "2aa1dfa1f32b",
		"ts": "2026-11-09T00:28:05.269Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 502453.91,
		"hash": "2aa1dfa1f32bb5cb9a01c6deeeaf7a71e05ee738a6e3fd3e1b023dfee5d61032"
	},
	{
		"id": "49ad276aa614",
		"ts": "2026-11-09T00:28:05.466Z",
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
		"liquidityUsd": 7112626.93,
		"hash": "49ad276aa614e3174f0145f11678b51e35c6d206e06e5314080d5cc2fef1d0c6"
	},
	{
		"id": "669416e28a13",
		"ts": "2026-11-09T00:28:05.659Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2422442.95,
		"hash": "669416e28a13baf1679a9877c068450fc5a26d6eeb1add5fbf2bd1fdadb057bb"
	},
	{
		"id": "ad645f2f59d8",
		"ts": "2026-11-09T00:28:05.864Z",
		"symbol": "PROMPT",
		"token": "0x30c7235866872213F68cb1F08c37Cb9eCCB93452",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 62070.02,
		"hash": "ad645f2f59d8acdb273a2fa641284eaf9a0f3b5fc8b59f90f87eaaa44a798f14"
	},
	{
		"id": "2d6604fca124",
		"ts": "2026-11-08T20:07:38.834Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145147073.85,
		"hash": "2d6604fca124fbc4bf82cd643fa9196e1abcf212390ace58556a28664c169351"
	},
	{
		"id": "67095a50b88c",
		"ts": "2026-11-08T20:07:39.063Z",
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
		"liquidityUsd": 15839425.23,
		"hash": "67095a50b88c75ccb4af0b59d5a840fe0b1d7758529e64f75af08b4cf679fc35"
	},
	{
		"id": "9a767e26a572",
		"ts": "2026-11-08T20:07:39.281Z",
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
		"liquidityUsd": 239391.3,
		"hash": "9a767e26a572fbfbd419f8ef236a2b86875200c15536bd415958f989219c9ee5"
	},
	{
		"id": "0f19e7fcb74d",
		"ts": "2026-11-08T20:07:39.493Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4668845.67,
		"hash": "0f19e7fcb74db275a31fa72c31196e9991701b8aafce29116a7c208cc7e03d9e"
	},
	{
		"id": "4e5a948fe59d",
		"ts": "2026-11-08T20:07:39.725Z",
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
		"liquidityUsd": 863774.5,
		"hash": "4e5a948fe59d6329cc6276efe7e6ab82fb05a3de71eca7f631860f9128716873"
	},
	{
		"id": "92b7f4dd4860",
		"ts": "2026-11-08T20:07:39.931Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 993486.34,
		"hash": "92b7f4dd48605365aaa1ee161007d7fbdc5fd3b2773b425054e23dd2054071fa"
	},
	{
		"id": "ee4a953bf534",
		"ts": "2026-11-08T20:07:40.138Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4669641.72,
		"hash": "ee4a953bf5343f950e7c01336e16f2b052ebe731b6e974637dd68fdfdec37403"
	},
	{
		"id": "391c40879172",
		"ts": "2026-11-08T20:07:40.334Z",
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
		"liquidityUsd": 934625.32,
		"hash": "391c40879172742ea6afa8f3cfccc4d5a27e57004918d65fb13722da52159294"
	},
	{
		"id": "1dc008812488",
		"ts": "2026-11-08T20:07:40.583Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 137427.71,
		"hash": "1dc008812488fe8dff76caf8720e00fbad83b1cf519a75283bd0cb59fead17e7"
	},
	{
		"id": "0eb06b6acc4b",
		"ts": "2026-11-08T20:07:40.825Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1547417.54,
		"hash": "0eb06b6acc4bc58335470ee212508d5b266e510aaeab63de73c5bf0db2c198bd"
	},
	{
		"id": "f06619f37a3f",
		"ts": "2026-11-08T20:07:41.033Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3274608.02,
		"hash": "f06619f37a3f53b9f0c246f39ca7003e482ee8c23908f3fd3afa39d89061d01d"
	},
	{
		"id": "c58293577419",
		"ts": "2026-11-08T20:07:41.242Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 563997.68,
		"hash": "c5829357741983bf18abdc63a5395a9d486d82c92f173c8460d194921fdb928c"
	},
	{
		"id": "73b8537b60b5",
		"ts": "2026-11-08T20:07:41.459Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1707636.08,
		"hash": "73b8537b60b5985826d9a20dc1a164cd363b0dd71b4a52b29687ab315e3ed847"
	},
	{
		"id": "0f4e24e7736a",
		"ts": "2026-11-08T20:07:41.647Z",
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
		"liquidityUsd": 7356365.87,
		"hash": "0f4e24e7736aaa4fec8888e0eebde9eda133217e5f8ce5c4591feef45a2bdfbf"
	},
	{
		"id": "21ffc8f60484",
		"ts": "2026-11-08T20:07:41.877Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 511729.08,
		"hash": "21ffc8f60484a5e22347c22ef231fcee5a55478a84b4c56d22aa2a192e89d873"
	},
	{
		"id": "ddbc7d9871fc",
		"ts": "2026-11-08T20:07:42.090Z",
		"symbol": "PROMPT",
		"token": "0x30c7235866872213F68cb1F08c37Cb9eCCB93452",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 64550.41,
		"hash": "ddbc7d9871fcae96416272c2b9c5ee5c4d138bcd1a3c2ffab582ff27e28c25f5"
	},
	{
		"id": "77ccd8053400",
		"ts": "2026-11-08T20:07:42.280Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2427345.98,
		"hash": "77ccd8053400a8b164786b5b5e39829856679383b013b00c45afe775d5e9dbf2"
	},
	{
		"id": "0d4bbc268386",
		"ts": "2026-11-08T20:07:42.476Z",
		"symbol": "ZEN",
		"token": "0xf43eB8De897Fbc7F2502483B2Bef7Bb9EA179229",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1514972.72,
		"hash": "0d4bbc268386ddc943796b29cbb46681ef9cc37bc4b6fd41dad5e2ca267b5656"
	},
	{
		"id": "dc88a58b1d3e",
		"ts": "2026-11-08T15:44:44.089Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145504295.33,
		"hash": "dc88a58b1d3e60bee57b00c756ca978e25eb22fbd02f1209a4eb58011c588666"
	},
	{
		"id": "8b0d7f633edd",
		"ts": "2026-11-08T15:44:44.569Z",
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
		"liquidityUsd": 15902829.49,
		"hash": "8b0d7f633edd2e9298fdf627deeec3ba13f3ee6e16eacc204516f8cfc808c3a2"
	},
	{
		"id": "d1387f811fbb",
		"ts": "2026-11-08T15:44:44.825Z",
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
		"liquidityUsd": 245940.57,
		"hash": "d1387f811fbbe461361bdb009da301ff7ac93dc81bb58a822cfc72887ba0fa1e"
	},
	{
		"id": "97eedf2e7e0d",
		"ts": "2026-11-08T15:44:45.146Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4785242.76,
		"hash": "97eedf2e7e0d1a0ef4901ad259e18dde5b6496a76e9377f2aa009c7ef56a5d70"
	},
	{
		"id": "9a71617041ab",
		"ts": "2026-11-08T15:44:45.400Z",
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
		"liquidityUsd": 898100.77,
		"hash": "9a71617041ab424d07d825b5f8be42e8c0d9c6bdaff5022bffa3be6f25a404a9"
	},
	{
		"id": "fbdcc9176403",
		"ts": "2026-11-08T15:44:45.698Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1005864.14,
		"hash": "fbdcc9176403ed7d3c8af9bc819c7b2ad471a3c47c69cd340b171500dde04455"
	},
	{
		"id": "29d789e2b311",
		"ts": "2026-11-08T15:44:45.970Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4785242.76,
		"hash": "29d789e2b311ce47a9b46b130b880e7d19bdc41ba8bfa65d41b2db4b344ee821"
	},
	{
		"id": "d04739899b6a",
		"ts": "2026-11-08T15:44:46.232Z",
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
		"liquidityUsd": 1730618.2,
		"hash": "d04739899b6a6a195fa622e2af3199e83dd9293fe0ccd910e6bfdf43094e9374"
	},
	{
		"id": "3f4bb17fdb21",
		"ts": "2026-11-08T15:44:46.485Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 137086.62,
		"hash": "3f4bb17fdb21a7e1562f754fa7501222f320eca25faf188e0a664afba0671dd7"
	},
	{
		"id": "8c1aee862b40",
		"ts": "2026-11-08T15:44:46.743Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 964305.87,
		"hash": "8c1aee862b40e65036d6d00845bf24d5f318ff0cd2d791face45fed84ef36777"
	},
	{
		"id": "4bf1309f9ea5",
		"ts": "2026-11-08T15:44:46.986Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1556654.67,
		"hash": "4bf1309f9ea5a9dc2d698d41421c13cee008eaab420121f7073b656d1514c761"
	},
	{
		"id": "9dccbd0da6fb",
		"ts": "2026-11-08T15:44:47.226Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3286290.93,
		"hash": "9dccbd0da6fb55cb383b70d0a1d29ae4e54ab502cd45d4c9e231fd392d1872a6"
	},
	{
		"id": "bd17867e3b65",
		"ts": "2026-11-08T15:44:47.490Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 231224.28,
		"hash": "bd17867e3b65d7e97e496d0c6208494303ea00865d8955d4db8f030af3cc751b"
	},
	{
		"id": "6330a87eb46e",
		"ts": "2026-11-08T15:44:47.768Z",
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
		"liquidityUsd": 7377064.28,
		"hash": "6330a87eb46e2006ed2246278fa4d589f1f962e24978db6367581dd5e196a142"
	},
	{
		"id": "100d3870bf2e",
		"ts": "2026-11-08T15:44:48.048Z",
		"symbol": "PROMPT",
		"token": "0x30c7235866872213F68cb1F08c37Cb9eCCB93452",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 62020.98,
		"hash": "100d3870bf2e93d8a122429eb647180297782aa5add1ae8694daa7b4fc801e6c"
	}
]
