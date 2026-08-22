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
	"updatedAt": "2026-08-22T22:17:17.374Z",
	"tokensScored": 13675,
	"verdictsIssued": 13675,
	"safe": 11779,
	"risky": 966,
	"likelyRug": 930,
	"ticks": 797
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "051dd9f07fcf",
		"ts": "2026-08-22T22:17:13.602Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109781374.2,
		"hash": "051dd9f07fcf23eefcdae67bb3bc54644c26d00c8a06dee130b368e9f4ad2cc5"
	},
	{
		"id": "ff0245f1b5c3",
		"ts": "2026-08-22T22:17:13.952Z",
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
		"liquidityUsd": 17698256.12,
		"hash": "ff0245f1b5c392c2016a953ce27abbfd89fb7265725148d795f7738a09185ddd"
	},
	{
		"id": "378b9d1b88db",
		"ts": "2026-08-22T22:17:14.142Z",
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
		"liquidityUsd": 872503.21,
		"hash": "378b9d1b88db98b7bd0696d1023df542ea3c2e4e9f11c066e2025b78ff310792"
	},
	{
		"id": "2b5c77cac099",
		"ts": "2026-08-22T22:17:14.344Z",
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
		"liquidityUsd": 27967228.99,
		"hash": "2b5c77cac09905bde5a7db5a728e82db021d6c53c4df3ba9e0c98facba6bd5ff"
	},
	{
		"id": "23c3741c71a5",
		"ts": "2026-08-22T22:17:14.523Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "23c3741c71a58b4e61cf3a01dc3a15e8fabd898675ee5af912f7ec158aa38eb9"
	},
	{
		"id": "f3e9a898c119",
		"ts": "2026-08-22T22:17:14.733Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1150919.64,
		"hash": "f3e9a898c1197d7bbe3e24d9dae44258a21b36013c302af042a0098c0703403f"
	},
	{
		"id": "fd8025007cef",
		"ts": "2026-08-22T22:17:14.922Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 408182.33,
		"hash": "fd8025007cef293e6883054fb4c74b0a94815e7cc30f9745db40140020b1d9ea"
	},
	{
		"id": "9a6f65d7292c",
		"ts": "2026-08-22T22:17:15.132Z",
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
		"liquidityUsd": 1684071.46,
		"hash": "9a6f65d7292c04c80361b5b0324f565efe7eb1a2327cbcacc78a599bad00398a"
	},
	{
		"id": "4325b5b7b493",
		"ts": "2026-08-22T22:17:15.334Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 795541.63,
		"hash": "4325b5b7b493132f759b43db64b166a3f08365653e0c4f9d5ab1d6a3bc89b4fa"
	},
	{
		"id": "30e3b275bb7d",
		"ts": "2026-08-22T22:17:15.533Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1304748.81,
		"hash": "30e3b275bb7dd66ec91c6093628c14591a7eeb26f4f4181c1f4ae690a56a925f"
	},
	{
		"id": "aacba2821884",
		"ts": "2026-08-22T22:17:15.781Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 138543.96,
		"hash": "aacba2821884fb9227c0f56b1e92ab7d7b4761716d215664740629ddc42637f7"
	},
	{
		"id": "71d203b783e1",
		"ts": "2026-08-22T22:17:15.989Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10913012.3,
		"hash": "71d203b783e1b906c875666eab382f487b4f662b68135e513e8797de7539f4f3"
	},
	{
		"id": "bec41afa3588",
		"ts": "2026-08-22T22:17:16.178Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 738971.99,
		"hash": "bec41afa3588f6983c5b0ce6be85a31d98eb32fd3758e6ecdad6121b41911fc1"
	},
	{
		"id": "a0cadf344f32",
		"ts": "2026-08-22T22:17:16.381Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 622401.87,
		"hash": "a0cadf344f3209cfc06f25864696fc5569d370b12e163d522fad7f85d11b516a"
	},
	{
		"id": "8bd47052d297",
		"ts": "2026-08-22T22:17:16.593Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1845084.84,
		"hash": "8bd47052d297cbe2ccca1b44b51fb879f81e1f6d56bab87e5625460a3119f8ea"
	},
	{
		"id": "52da5a989edd",
		"ts": "2026-08-22T22:17:16.778Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 914562.66,
		"hash": "52da5a989edde04a1a2e4fa065590f8831afd8c3e35d9be6817584b618026c8d"
	},
	{
		"id": "27c077c6de0a",
		"ts": "2026-08-22T22:17:16.979Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3296132.57,
		"hash": "27c077c6de0ab95a981f5dbb7742bf81df9ac69697b3a7efec521f8ea67ecaa0"
	},
	{
		"id": "25cdb8e81d68",
		"ts": "2026-08-22T22:17:17.373Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 519256.74,
		"hash": "25cdb8e81d689041e952d939394974eb77968899922e94e01702fe63c8217810"
	},
	{
		"id": "89c0682ea6a8",
		"ts": "2026-08-22T21:17:20.099Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109803102.09,
		"hash": "89c0682ea6a8209cd414084d86430f2394f69712988cb687eeca4d81726b3246"
	},
	{
		"id": "86613d60fee5",
		"ts": "2026-08-22T21:17:20.561Z",
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
		"liquidityUsd": 15353383.15,
		"hash": "86613d60fee56bf88fb537428651efe95dea7cf2c1e6c45bb1038646063e6b79"
	},
	{
		"id": "4b06ded9bb44",
		"ts": "2026-08-22T21:17:21.013Z",
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
		"liquidityUsd": 871891.71,
		"hash": "4b06ded9bb440372c28df79a395a95c18ee85a57e8c74f72a989e85036f6116c"
	},
	{
		"id": "77ef6b9630d1",
		"ts": "2026-08-22T21:17:21.249Z",
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
		"liquidityUsd": 28019602.72,
		"hash": "77ef6b9630d1bcec05e3103a383ff7b56e7f72d8e0fe77fe35952af1dc908e88"
	},
	{
		"id": "c5d99153dab8",
		"ts": "2026-08-22T21:17:21.485Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "c5d99153dab87d70f4069165e609cc6625e81fba2480b67663827c5dbef93919"
	},
	{
		"id": "306a96258af8",
		"ts": "2026-08-22T21:17:21.722Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1162350.53,
		"hash": "306a96258af8d4268fef89e52500340fadabc0c6f037f081e63520fd56c64db3"
	},
	{
		"id": "3453572c3fb0",
		"ts": "2026-08-22T21:17:21.972Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 555552.87,
		"hash": "3453572c3fb018bfd76d99dd339ee5f86dc0ed61084aae3e624a0d98dfd042da"
	},
	{
		"id": "cf06a94efeb7",
		"ts": "2026-08-22T21:17:22.225Z",
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
		"liquidityUsd": 1682028.92,
		"hash": "cf06a94efeb75ca6ba606b23187c6769748ccebc84bad3cfbd51cec4a273c46e"
	},
	{
		"id": "f3e775d2b646",
		"ts": "2026-08-22T21:17:22.467Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 818282.22,
		"hash": "f3e775d2b64624f6b235b94a6b9c8b4a63a43389a937c56892e38a9d09c9ebe9"
	},
	{
		"id": "5befe827daa2",
		"ts": "2026-08-22T21:17:22.700Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1278410.85,
		"hash": "5befe827daa2e824960f632774c72c608b71700712a4798d777a726a42fa30d9"
	},
	{
		"id": "e09509ae1463",
		"ts": "2026-08-22T21:17:22.916Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 137200.29,
		"hash": "e09509ae1463654d4b88d880ee32abe469e8eb02ba150a0e4825485dfa9a9831"
	},
	{
		"id": "409fabef47d7",
		"ts": "2026-08-22T21:17:23.137Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11006710.16,
		"hash": "409fabef47d72d7d3defabfe786a0b6514068508b1b3a82553c8474b80432c89"
	},
	{
		"id": "c1995b46ee43",
		"ts": "2026-08-22T21:17:23.353Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 563658.51,
		"hash": "c1995b46ee43be032ffc3f1b961251f21035087913371e520df3aacf45d0e068"
	},
	{
		"id": "c4b84c0e9cdd",
		"ts": "2026-08-22T21:17:23.568Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 674206.91,
		"hash": "c4b84c0e9cdddd116e7acf9527e30a144a801cf1e4d901458eecfc95917bda81"
	},
	{
		"id": "53987f39e96f",
		"ts": "2026-08-22T21:17:23.787Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1855162.81,
		"hash": "53987f39e96f050819499e6e249ed1e2e3ac119d6bdd2648446f1b01f238b42c"
	},
	{
		"id": "35acf2f9756e",
		"ts": "2026-08-22T21:17:24.004Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3334751.71,
		"hash": "35acf2f9756ea567e9f147897620a4bc32098eef9ca44c3a68de6109ee44a3a7"
	},
	{
		"id": "22f86605773a",
		"ts": "2026-08-22T21:17:24.220Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 507953.66,
		"hash": "22f86605773aba95ea72826c3ef301710cf3eed26ec55617b3c3f62f2b4fb9f3"
	},
	{
		"id": "b7cc3072e393",
		"ts": "2026-08-22T21:17:24.441Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 843359.76,
		"hash": "b7cc3072e393c6a4909d9c1805ade0624390e71809333198920c862e925c79ca"
	},
	{
		"id": "fbdd5f7d93c3",
		"ts": "2026-08-22T20:17:48.051Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109852759.47,
		"hash": "fbdd5f7d93c3fff5323d355465edf81c45981863bdfe94c3336dfcc18cc3f745"
	},
	{
		"id": "d9a0aa2fb9b3",
		"ts": "2026-08-22T20:17:48.770Z",
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
		"liquidityUsd": 16596958.14,
		"hash": "d9a0aa2fb9b33c0faaf7fb5550db3d7ac6d45ce42fbe19d852a294c4fd99318f"
	},
	{
		"id": "c21128e7d671",
		"ts": "2026-08-22T20:17:49.198Z",
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
		"liquidityUsd": 881673.01,
		"hash": "c21128e7d671b8817d809c9503578c73432e27bae3ad222535bd8e79f290bb23"
	},
	{
		"id": "0011db8686a1",
		"ts": "2026-08-22T20:17:49.647Z",
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
		"liquidityUsd": 28115106.46,
		"hash": "0011db8686a1ee04dcbbec6ad6257c1f7b9d028b0df5cb621fb6bbc0ee1ebe56"
	},
	{
		"id": "174297b64046",
		"ts": "2026-08-22T20:17:49.879Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "174297b640466a489e690f280fa9cfd7a82269cc2e4de3e135a7466cb180429b"
	},
	{
		"id": "a619d734b3be",
		"ts": "2026-08-22T20:17:50.125Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180614.94,
		"hash": "a619d734b3be338e5a07114e1e8f81390dd7afd022fbf8a52ac776564986b8db"
	},
	{
		"id": "f507f082b7df",
		"ts": "2026-08-22T20:17:50.364Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 417063.29,
		"hash": "f507f082b7df891d0fee34e4708443a6ea1e04b37826984ca45126cdda63e086"
	},
	{
		"id": "1ea05978687f",
		"ts": "2026-08-22T20:17:50.619Z",
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
		"liquidityUsd": 1699818.26,
		"hash": "1ea05978687fef13822afb6645d27b1ec6473308c958fe2dd5822fc973879134"
	},
	{
		"id": "1941ed836d80",
		"ts": "2026-08-22T20:17:51.056Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 789140.88,
		"hash": "1941ed836d8051d9d2088f3fb38c22fcc0708355036d7b269c0a6f4606449fa9"
	},
	{
		"id": "211568152633",
		"ts": "2026-08-22T20:17:51.305Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1325765.98,
		"hash": "211568152633b76de5bbe799b494c12ffff6b68e5422debc935fcae2245298fa"
	},
	{
		"id": "2680b4d3e0b6",
		"ts": "2026-08-22T20:17:51.523Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 119003.25,
		"hash": "2680b4d3e0b63ae0a9bf3911247be686762153436f2c087cb246cda66d2f012e"
	},
	{
		"id": "55288a7914fa",
		"ts": "2026-08-22T20:17:51.882Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11240747.72,
		"hash": "55288a7914faa8b168f6aad6b2ecb0514b5a34f0de2ba4a223d83b427bcc271e"
	},
	{
		"id": "90ffc361b138",
		"ts": "2026-08-22T20:17:52.097Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 571412.47,
		"hash": "90ffc361b13820b7801d7de5dc6c8424c1570c0d0446c830f6cc59025ce11edd"
	},
	{
		"id": "bc19e1c0e248",
		"ts": "2026-08-22T20:17:52.324Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 682228.84,
		"hash": "bc19e1c0e248485a1f47295950e9c2534cf156760ad792f53e56e3cf697d70f3"
	},
	{
		"id": "011295d7a298",
		"ts": "2026-08-22T20:17:52.540Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1873749.95,
		"hash": "011295d7a298e84c52877ff8e238b130ff4183959dd5c59aa27270c88c48e447"
	},
	{
		"id": "b265b6ec1db7",
		"ts": "2026-08-22T20:17:52.786Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 545582.4,
		"hash": "b265b6ec1db79e2026b6346d0fcfe286478ce0896e4959a91898895e3144d2a8"
	},
	{
		"id": "8b925d29b22d",
		"ts": "2026-08-22T20:17:53.000Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3381093.18,
		"hash": "8b925d29b22d5a9cd0ffc7802a010e5bdd07bfbde9d761bbe04a234499691ff5"
	},
	{
		"id": "6b97d1c8c670",
		"ts": "2026-08-22T20:17:53.395Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 644573.34,
		"hash": "6b97d1c8c6707072e148e424798c8b9bbb7fa019854b4055450c21ac18760b50"
	},
	{
		"id": "595d43e209fa",
		"ts": "2026-08-22T19:19:42.266Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109693541.49,
		"hash": "595d43e209fa04ead952d0675b2cb951aa963d9c04b993b664f42112a9e5671f"
	},
	{
		"id": "b412791a36d4",
		"ts": "2026-08-22T19:19:42.520Z",
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
		"liquidityUsd": 17436243.96,
		"hash": "b412791a36d4e5b05217ef71411ea4441bc0c004ad0238499b4476f456f1cb49"
	},
	{
		"id": "65827535961e",
		"ts": "2026-08-22T19:19:42.766Z",
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
		"liquidityUsd": 877640.34,
		"hash": "65827535961e64bd6576ddbc655de8f37f2a9bade357ab009922de8f286ff19c"
	},
	{
		"id": "cea0c04ef423",
		"ts": "2026-08-22T19:19:42.969Z",
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
		"liquidityUsd": 28155670.22,
		"hash": "cea0c04ef42387f1bb9268c34666a4fb3b3e8a22084b7afef68357d4877d908e"
	},
	{
		"id": "683e44df908c",
		"ts": "2026-08-22T19:19:43.168Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "683e44df908ce41a2a850e2ed6894e8ea2cdc3507b42b7c656bbaa0b37f74bdf"
	},
	{
		"id": "8514960bc13d",
		"ts": "2026-08-22T19:19:43.385Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1175744.11,
		"hash": "8514960bc13db95119093f636cdcc0258109991ad743114044f084ac6c0601b1"
	},
	{
		"id": "8f173f44608c",
		"ts": "2026-08-22T19:19:43.592Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 379200.77,
		"hash": "8f173f44608cfb2d755ea6fcb36a66a61138461923d189df61e4a1f1532bd101"
	},
	{
		"id": "a36fe4db2608",
		"ts": "2026-08-22T19:19:43.804Z",
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
		"liquidityUsd": 1691281.52,
		"hash": "a36fe4db2608961c4db69014ba4ae4227d7d403518d8191640bc5c8d98537ee1"
	},
	{
		"id": "a471568b4c9a",
		"ts": "2026-08-22T19:19:44.030Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 794827.49,
		"hash": "a471568b4c9a73b2be0e9c21135cf3098c0163397d1310ac632fea041d7a3b87"
	},
	{
		"id": "3c7565287ca9",
		"ts": "2026-08-22T19:19:44.271Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1336664.27,
		"hash": "3c7565287ca978a7178a170b5ce17d1d05a5d07deaf75139f6fb2417cd2b463a"
	},
	{
		"id": "7434bf9fe857",
		"ts": "2026-08-22T19:19:44.553Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 122659.36,
		"hash": "7434bf9fe857f37c4e00336cab41afaa0f8cbe3b3ea135f7b213f9d5a9868e2b"
	},
	{
		"id": "475fefa61567",
		"ts": "2026-08-22T19:19:44.753Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1863061.32,
		"hash": "475fefa61567c924af744996c1b2e1c41a48efa0bae3aa3f00e9c69a25e9ab31"
	},
	{
		"id": "cbfc10638208",
		"ts": "2026-08-22T19:19:44.955Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 591223.45,
		"hash": "cbfc10638208f6e09322ad9b4631359de5536f709969ed7a45a96e523a6e6afc"
	},
	{
		"id": "f8b33677e723",
		"ts": "2026-08-22T19:19:45.156Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11279042.64,
		"hash": "f8b33677e723b230fad4d0141b8af6231feea517cfad20736ad03e9c909239a9"
	},
	{
		"id": "5dc2be54bc36",
		"ts": "2026-08-22T19:19:45.350Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 674680.96,
		"hash": "5dc2be54bc36ebe5f8419923dd84ca6337be05b47803b501460624f9e0569b62"
	},
	{
		"id": "2fd10b4c3e60",
		"ts": "2026-08-22T19:19:45.555Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 638411.17,
		"hash": "2fd10b4c3e600c7e4918347477e481ac9e32678ea11655aabf483874cdc92747"
	},
	{
		"id": "0727928201ae",
		"ts": "2026-08-22T19:19:45.768Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 557115.12,
		"hash": "0727928201aef7f62c85732f1012b5ec5617a23f72fcee9852647780d390f038"
	},
	{
		"id": "d859c35814a1",
		"ts": "2026-08-22T19:19:46.168Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 593422.6,
		"hash": "d859c35814a114d694b99d3d817526572af8fe35873f24b4e5ad9d9fe42e0f8a"
	},
	{
		"id": "bdf5c786f250",
		"ts": "2026-08-22T19:19:46.367Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3338774.83,
		"hash": "bdf5c786f250508e33af50d558f9459f1c38aceda17a069c738b052284569072"
	},
	{
		"id": "087ad977f0d8",
		"ts": "2026-08-22T18:23:07.308Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109652108.71,
		"hash": "087ad977f0d8c0eb39b7c2e58921ed3f29814501556295401053431181861070"
	},
	{
		"id": "fc7b84cc3353",
		"ts": "2026-08-22T18:23:07.777Z",
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
		"liquidityUsd": 15003843.82,
		"hash": "fc7b84cc33533062358b9a4e303301012fda82ce720854bb70fe3fdc9bf5963c"
	},
	{
		"id": "ec1a4c5fe537",
		"ts": "2026-08-22T18:23:08.031Z",
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
		"liquidityUsd": 877344.71,
		"hash": "ec1a4c5fe537f1608ef14d8931b653ffe19ca1e7ebf8410f1b32b55aeefd17c1"
	},
	{
		"id": "97d849d3ce0d",
		"ts": "2026-08-22T18:23:08.270Z",
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
		"liquidityUsd": 28060983.82,
		"hash": "97d849d3ce0d1e0bec8dba504b37d00ee9e6be40f5d85e41a10439b6c8d6ded9"
	},
	{
		"id": "3fcebf0b9206",
		"ts": "2026-08-22T18:23:08.727Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "3fcebf0b92067a56338473179d02829416cd43fa5f61613dba693d40f482e71f"
	},
	{
		"id": "5e6e37d371d6",
		"ts": "2026-08-22T18:23:08.976Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1175813.56,
		"hash": "5e6e37d371d6b5702e99611900d745ebe0004fbbbf78412b5819f56483684e0e"
	},
	{
		"id": "36b55f009b4f",
		"ts": "2026-08-22T18:23:09.206Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 574511.03,
		"hash": "36b55f009b4fd96dbe108bd9a0a8ce3e357b85d84490671b69d45cc12f18cb1a"
	},
	{
		"id": "607c6284eb88",
		"ts": "2026-08-22T18:23:09.485Z",
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
		"liquidityUsd": 1690236.91,
		"hash": "607c6284eb88df9182c0ecaef57efd568c2346e1564da3bc938c9c18c79794c0"
	},
	{
		"id": "726d05f28bf0",
		"ts": "2026-08-22T18:23:09.735Z",
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
		"liquidityUsd": 807130.87,
		"hash": "726d05f28bf0ca7649e158e2d665b609d2af103c44924a7f0276dfa806ee8ec7"
	},
	{
		"id": "d38fadc9fc07",
		"ts": "2026-08-22T18:23:09.971Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1344181.94,
		"hash": "d38fadc9fc071f835857a94273bc66158f7c8b6722cf592df72f8fd977ada520"
	},
	{
		"id": "be1bb44e679f",
		"ts": "2026-08-22T18:23:10.199Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 127528.34,
		"hash": "be1bb44e679f52214111a0399816264c29dddff865c76230899021dcd37797ae"
	},
	{
		"id": "3a8b5c479257",
		"ts": "2026-08-22T18:23:10.422Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1867000.68,
		"hash": "3a8b5c479257fce9257b5dc7a908c5ad95d9737d21a116d5a2861a764dd1e5bb"
	},
	{
		"id": "0b7df9e27bbc",
		"ts": "2026-08-22T18:23:10.648Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 614668.31,
		"hash": "0b7df9e27bbc25fa2f4e7eaec28bf48fc1ef5fe8a9bca6ac2dbf6c261895cf12"
	},
	{
		"id": "29ab088d9b25",
		"ts": "2026-08-22T18:23:10.862Z",
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
		"liquidityUsd": 11888505.66,
		"hash": "29ab088d9b251ada497d33430dbe9ea55eac4a4db2e263a46d08b8d021e756ea"
	},
	{
		"id": "099b993dfb59",
		"ts": "2026-08-22T18:23:11.090Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 682456.53,
		"hash": "099b993dfb59178b46ae7836fd5f4e5bc3a215acb1059de2a39818557a37c047"
	},
	{
		"id": "8012699afd3b",
		"ts": "2026-08-22T18:23:11.306Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 662436.43,
		"hash": "8012699afd3bc68e5bc5f6287e239aae8cd4aea0f7be55cedbb0f7cea3fd4bd6"
	},
	{
		"id": "c037ce86a409",
		"ts": "2026-08-22T18:23:11.528Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549292.99,
		"hash": "c037ce86a4091ba592d0e137e48c43ee27e51a31f15cbbe15f7d4cfdf226996f"
	},
	{
		"id": "338dd47821bc",
		"ts": "2026-08-22T18:23:11.758Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 597045.16,
		"hash": "338dd47821bceee5990056a85c4afc1f3c07c376f891d68b907eb90e641708bc"
	},
	{
		"id": "091ac41fc636",
		"ts": "2026-08-22T18:23:11.986Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3809479.85,
		"hash": "091ac41fc636e4f494407b51264d47b2e190c20c5f5a1508fa9984f71a4130ef"
	},
	{
		"id": "6a494053ed99",
		"ts": "2026-08-22T17:17:10.426Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109584326.07,
		"hash": "6a494053ed99f7563ad24bc089c94a593798107a285751e7e544af49a05c85ac"
	},
	{
		"id": "0449d38250f6",
		"ts": "2026-08-22T17:17:10.749Z",
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
		"liquidityUsd": 17521813.11,
		"hash": "0449d38250f603ac534b5dd285f1ae2b950ed5ab19bf2c43942a9ef343ff0af5"
	},
	{
		"id": "6235c9a5cd61",
		"ts": "2026-08-22T17:17:10.946Z",
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
		"liquidityUsd": 876776.83,
		"hash": "6235c9a5cd61f8ae1a783bf1ee6bcc4c8d0e2e9af918ac7b30ca430ce53b2aa5"
	},
	{
		"id": "e59109ed3de4",
		"ts": "2026-08-22T17:17:11.133Z",
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
		"liquidityUsd": 28131164.33,
		"hash": "e59109ed3de46cb5ee379d1fcf22818e0522de1dd3516813ce4418c051efb8ce"
	},
	{
		"id": "6a09d8c77382",
		"ts": "2026-08-22T17:17:11.329Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "6a09d8c7738292e70c548929e2242361da37324a5116cf8140af074d820c60a8"
	},
	{
		"id": "84924e2b9fbc",
		"ts": "2026-08-22T17:17:11.531Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1169130.62,
		"hash": "84924e2b9fbcc633faeb8045419b512ed5460b038d1e4f59d0cad0b6f2de121d"
	},
	{
		"id": "47a7a640a2fe",
		"ts": "2026-08-22T17:17:11.742Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152763.05,
		"hash": "47a7a640a2fe8cf1418ca0f4ae2faa0386f73b5ab720d47ac5c6a72bb328d840"
	},
	{
		"id": "8f06204db34f",
		"ts": "2026-08-22T17:17:11.938Z",
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
		"liquidityUsd": 1686713.69,
		"hash": "8f06204db34fbb4a11b04b09330c1ed98247050553ef4ec223da66305f272d94"
	},
	{
		"id": "40125a4bfd55",
		"ts": "2026-08-22T17:17:12.123Z",
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
		"liquidityUsd": 821489.88,
		"hash": "40125a4bfd5559545033bf99928c134f9ab92bea576d0bd526c586530ceef6ba"
	},
	{
		"id": "287ce5c88fc7",
		"ts": "2026-08-22T17:17:12.520Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1286984.31,
		"hash": "287ce5c88fc7620a0f858b7e9cc567e15b8f5eca03217c22ca97d80dd3b66ffb"
	},
	{
		"id": "3c72cab4babf",
		"ts": "2026-08-22T17:17:12.773Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 126399.8,
		"hash": "3c72cab4babf3739d81f3692a28804a206041a662bd1041df2133664feec9f51"
	},
	{
		"id": "19be75d51459",
		"ts": "2026-08-22T17:17:13.028Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1874523.43,
		"hash": "19be75d514596d471df058b41da4abe793626085fe2c2b4f6fa489e6911a53c4"
	},
	{
		"id": "4f7725b482b4",
		"ts": "2026-08-22T17:17:13.238Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 597194.24,
		"hash": "4f7725b482b4fe21dbc1fce57b0fbea67480148e8ed43ce2b1e67dd2a1cf4556"
	},
	{
		"id": "0783c3a84749",
		"ts": "2026-08-22T17:17:13.429Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11833536.73,
		"hash": "0783c3a84749cd502a9907f2d7d58273ef0bfe4f5a8e005746684f21a2017cbe"
	},
	{
		"id": "9a1dc7664f4e",
		"ts": "2026-08-22T17:17:13.615Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 684307.14,
		"hash": "9a1dc7664f4e995f4428843c32f5e621e59c71cb3f757ddd77f5f03462c794ad"
	},
	{
		"id": "87870dd07a2a",
		"ts": "2026-08-22T17:17:13.797Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 662795.53,
		"hash": "87870dd07a2a1d34418e8f9bb626c6dfb8947a321a1be06d518f5cecf26dd852"
	},
	{
		"id": "cd1ba6e0d215",
		"ts": "2026-08-22T17:17:14.169Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 585551.68,
		"hash": "cd1ba6e0d215995db7fbabf11ab807ef75d5da78c7307241cc348eba00724465"
	},
	{
		"id": "d6fcb1b53ffb",
		"ts": "2026-08-22T17:17:14.381Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544657.61,
		"hash": "d6fcb1b53ffb5715f0c280a8a39ebe74196f20224295b759594381eea500951e"
	},
	{
		"id": "4ea0a209873f",
		"ts": "2026-08-22T17:17:14.572Z",
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
		"liquidityUsd": 585709.52,
		"hash": "4ea0a209873fb5f4b9a26e813129bf65b2e57d8e9ff90ecfcb9043dbc80858c0"
	},
	{
		"id": "24e2c45f2baa",
		"ts": "2026-08-22T16:18:46.182Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109379391.82,
		"hash": "24e2c45f2baae5f321b43098bf52eb03b874a75a46e30461fe3bc5124e86f84a"
	},
	{
		"id": "4b9c5c6b01b4",
		"ts": "2026-08-22T16:18:46.839Z",
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
		"liquidityUsd": 16310906.99,
		"hash": "4b9c5c6b01b4d94c27f8c324a846585741f3c78465a01e05b4359ea7b65c8d2b"
	},
	{
		"id": "732ee5b4138e",
		"ts": "2026-08-22T16:18:47.296Z",
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
		"liquidityUsd": 873601.43,
		"hash": "732ee5b4138e03fcd71f5d4cf8e0c8c35e5cbcd698509bacefd849600299dc4e"
	},
	{
		"id": "1909a04ae7ed",
		"ts": "2026-08-22T16:18:47.734Z",
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
		"liquidityUsd": 28000156.61,
		"hash": "1909a04ae7ed4def875a30c3bf148d7203024aaf6b3234d22a3c9a8e32630f63"
	},
	{
		"id": "83d3001bd536",
		"ts": "2026-08-22T16:18:48.173Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "83d3001bd536c54fbd4c3747faba58ae479617e0f9fdb54b55022286ac88c831"
	},
	{
		"id": "e78e91e7fa89",
		"ts": "2026-08-22T16:18:48.426Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1182856.24,
		"hash": "e78e91e7fa899a0aebea65776dcbecef85d8565f0101a222324b9b075d59f65f"
	},
	{
		"id": "72f2d331152e",
		"ts": "2026-08-22T16:18:48.686Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152763.03,
		"hash": "72f2d331152e4d752a31f797bbdbf5e8793385c7ee02168c2c9cb9658433d680"
	},
	{
		"id": "7d8d05f59c2a",
		"ts": "2026-08-22T16:18:48.940Z",
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
		"liquidityUsd": 1681408.07,
		"hash": "7d8d05f59c2a5badb4287b1bad6c1391e2f590bf8315cd3780627dee1a902a68"
	},
	{
		"id": "adab9e7da3f3",
		"ts": "2026-08-22T16:18:49.567Z",
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
		"liquidityUsd": 859189.91,
		"hash": "adab9e7da3f3aa1c36c88555ac475c0b672951b42086506f41cf35f8ff41d5a4"
	},
	{
		"id": "f5d8a6b63e2e",
		"ts": "2026-08-22T16:18:49.820Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1294822.43,
		"hash": "f5d8a6b63e2eb1b428261369650bf991ac8a60b4c3f80bc8c8029bb5e0a26837"
	},
	{
		"id": "93668b9bdf08",
		"ts": "2026-08-22T16:18:50.066Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1871132.32,
		"hash": "93668b9bdf081a22ca174964f8ac1a50d35f431ea4c63cbc4825c0fa5eec247e"
	},
	{
		"id": "17ea62b9fc6c",
		"ts": "2026-08-22T16:18:50.298Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 128975.95,
		"hash": "17ea62b9fc6c45ce425b9bc6ece7b847061bc4cb2e7ccaf45080229085ae2cdd"
	},
	{
		"id": "258d022e9163",
		"ts": "2026-08-22T16:18:50.532Z",
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
		"liquidityUsd": 11798733.36,
		"hash": "258d022e9163349e79e9728d34da35426ccb9347129cad6258880efe41af87ae"
	},
	{
		"id": "d3bb99bb41cc",
		"ts": "2026-08-22T16:18:50.771Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 563592.06,
		"hash": "d3bb99bb41cca80c48edef338588437876bac3e099307710494b8fcf1ea18edc"
	},
	{
		"id": "f584f60a6e54",
		"ts": "2026-08-22T16:18:51.007Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 665290.18,
		"hash": "f584f60a6e547a8292698826b6d83e105f6ecc3e190b7495f4b575c31f92b7e8"
	},
	{
		"id": "c68bcf4dad2b",
		"ts": "2026-08-22T16:18:51.246Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 556602.79,
		"hash": "c68bcf4dad2bbd08ff0e13e6a3e58af6cf7502ecae8cdc4dd75196d7286a0a09"
	},
	{
		"id": "549545fdaa45",
		"ts": "2026-08-22T16:18:51.481Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 661651.71,
		"hash": "549545fdaa45b28d25d2acc02151e44aca337a85da3217140a3b4db7b846233e"
	},
	{
		"id": "9a068f2c3ecf",
		"ts": "2026-08-22T16:18:52.016Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 581808.61,
		"hash": "9a068f2c3ecf84fc5b4c5550fa15bb61fcd1b4cb430be164abed3cfe279cd32c"
	},
	{
		"id": "1287d3e3a266",
		"ts": "2026-08-22T16:18:52.279Z",
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
		"liquidityUsd": 591813.57,
		"hash": "1287d3e3a266aa22ae09d112c9254dc0b45c1a186ee70c13cdc3c137d5080014"
	},
	{
		"id": "5457d2f8dce8",
		"ts": "2026-08-22T15:16:04.060Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109342038.69,
		"hash": "5457d2f8dce81cd6083300b2e2045a6947d796f530977c6513a3242217ffa253"
	},
	{
		"id": "40140a208c49",
		"ts": "2026-08-22T15:16:04.894Z",
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
		"liquidityUsd": 13520578.99,
		"hash": "40140a208c4974b821a33ca576bc70c6a1156dda7367aa83a643f2d54b3e8eb0"
	},
	{
		"id": "875bd5c4cb26",
		"ts": "2026-08-22T15:16:05.432Z",
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
		"liquidityUsd": 881817.14,
		"hash": "875bd5c4cb263e82bf168c10ba9313c91141c04dedfb5ce279b57bc4d917bc96"
	},
	{
		"id": "7d12f78357e7",
		"ts": "2026-08-22T15:16:05.889Z",
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
		"liquidityUsd": 27996262.21,
		"hash": "7d12f78357e78bd1607bdcb48cfc194694988f2eabaf51c6fad3f1402265fefb"
	},
	{
		"id": "3c257d8fa203",
		"ts": "2026-08-22T15:16:06.354Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "3c257d8fa203a26dd101ce76c5e727ef9e39870b1251397d28e2f2c4d76d185d"
	},
	{
		"id": "957552095d50",
		"ts": "2026-08-22T15:16:06.602Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180999.49,
		"hash": "957552095d502e3770c34991a03f6db10c5c5aaf92ae0970d161cd8c8be49a01"
	},
	{
		"id": "a322b415e674",
		"ts": "2026-08-22T15:16:06.839Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152762.89,
		"hash": "a322b415e674afcedd8d31a7c2a1b014f316a190b723cf275e6df6c61cf87bbf"
	},
	{
		"id": "427c9c3a8872",
		"ts": "2026-08-22T15:16:07.086Z",
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
		"liquidityUsd": 1674622.88,
		"hash": "427c9c3a8872d64e9d3bd060dd6d2e230e1b2dbf212e908a3ea86c7af11520d5"
	},
	{
		"id": "bb3d6cd83379",
		"ts": "2026-08-22T15:16:07.721Z",
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
		"liquidityUsd": 856951.6,
		"hash": "bb3d6cd833792ef1125512c02e012f58d740c8e8f7a2cbf8cc001a10ea6ab47c"
	},
	{
		"id": "3c7e64f8e992",
		"ts": "2026-08-22T15:16:07.970Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1254619.6,
		"hash": "3c7e64f8e99248f4a09fcb8e69f866f6c50f85f7e2751288b493acd98383f6ab"
	},
	{
		"id": "a0d6d7014c14",
		"ts": "2026-08-22T15:16:08.195Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1867399.03,
		"hash": "a0d6d7014c1465a337e1976dc149a3ecd026a0641459f951a8a6d2769ba5fcd2"
	},
	{
		"id": "08e1ea9c57ea",
		"ts": "2026-08-22T15:16:08.426Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11645568.55,
		"hash": "08e1ea9c57eabb11f60a07c6f141b7f5e1ab0db863420e49ec990f42f1edb8ca"
	},
	{
		"id": "1e3631f529f9",
		"ts": "2026-08-22T15:16:08.650Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 532580.02,
		"hash": "1e3631f529f9bbb55c6bb03a8e1bfbc2e258c25fe9623d9494934a23ce8854a0"
	},
	{
		"id": "75613766ed27",
		"ts": "2026-08-22T15:16:08.883Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 119704.33,
		"hash": "75613766ed27abba2f0ab87192ac4f507003a926daa72f3e9eaecaa017f75091"
	},
	{
		"id": "c114e4a760f4",
		"ts": "2026-08-22T15:16:09.108Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 663292.81,
		"hash": "c114e4a760f4e4f8dd7d172d927ae205dcebe8be2fb442e58c64b43684e7165d"
	},
	{
		"id": "c9e10dc1ca07",
		"ts": "2026-08-22T15:16:09.601Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 652257.79,
		"hash": "c9e10dc1ca070bc644c600eda9809695d7d0af93e74dd7825986c92cd6b7483b"
	},
	{
		"id": "f2543b8c35b0",
		"ts": "2026-08-22T15:16:09.834Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 568648.22,
		"hash": "f2543b8c35b0304ba75783f8ed627184f7878b78e511211ae0854a6d8c011c40"
	},
	{
		"id": "252b3c4dba1f",
		"ts": "2026-08-22T15:16:10.369Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 582475.55,
		"hash": "252b3c4dba1f6a51b448fba73ca0913ee5a5ad74bdd8e0ba472da13547fc3fb6"
	},
	{
		"id": "d9785ea60b02",
		"ts": "2026-08-22T15:16:10.601Z",
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
		"liquidityUsd": 610656.41,
		"hash": "d9785ea60b02d5c8af6f90f5841ef4c0e2243d708b683ebd388c125888b1bd39"
	},
	{
		"id": "6ec4c68e3291",
		"ts": "2026-08-22T14:17:15.600Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109494330.72,
		"hash": "6ec4c68e3291b05202b3dd20334e6afa9cd76fca1a5958e1a9e31293e1e763cf"
	},
	{
		"id": "5f0eb7cab1fc",
		"ts": "2026-08-22T14:17:15.934Z",
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
		"liquidityUsd": 17623680.4,
		"hash": "5f0eb7cab1fc68de1096eacbdf1d9424fc8c3d753d89d97a0a4c896b024ad2fc"
	},
	{
		"id": "75007ae80b4d",
		"ts": "2026-08-22T14:17:16.136Z",
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
		"liquidityUsd": 891034.67,
		"hash": "75007ae80b4dd929bc9b619a320fabe7ee6ebdcf29e69ad93d9101e6eeb9fee4"
	},
	{
		"id": "fc7ad3a5ea8b",
		"ts": "2026-08-22T14:17:16.330Z",
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
		"liquidityUsd": 28207703.35,
		"hash": "fc7ad3a5ea8b2499783c2c48f767cc22f5e2903a21776d41bf81c0752833015d"
	},
	{
		"id": "14afcc6a3905",
		"ts": "2026-08-22T14:17:16.528Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "14afcc6a390514f7dd196365cc6c3bc520cc8aee2d63c608f3c6f526de0b15ff"
	},
	{
		"id": "64717dad774f",
		"ts": "2026-08-22T14:17:16.826Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180236.05,
		"hash": "64717dad774ff38b6a5c3041ee5040c35a1316bc6328bf6bc892965ae8066828"
	},
	{
		"id": "9a6ddd2d2502",
		"ts": "2026-08-22T14:17:17.016Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152762.94,
		"hash": "9a6ddd2d250219df21cf746df88a1a80665d537a3ca66a47c7bd27bec8cc5ba6"
	},
	{
		"id": "c0d5aa3dce36",
		"ts": "2026-08-22T14:17:17.211Z",
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
		"liquidityUsd": 3181090.76,
		"hash": "c0d5aa3dce361bc74ac232f91f1faf62dbbbde347dc51b856f88f8da5c3ca477"
	},
	{
		"id": "a4cd17452c17",
		"ts": "2026-08-22T14:17:17.411Z",
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
		"liquidityUsd": 847750.15,
		"hash": "a4cd17452c174db67a712425be1bc8fb062b678b73ae41a033bc5c5629765fb5"
	},
	{
		"id": "fe0a5ea0ddcc",
		"ts": "2026-08-22T14:17:17.597Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1343108.71,
		"hash": "fe0a5ea0ddcc3f40577942c98b3f92bc3c1da02b4533af6decca086f7797a597"
	},
	{
		"id": "4ad6159d351d",
		"ts": "2026-08-22T14:17:17.802Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1874856.98,
		"hash": "4ad6159d351d539c3166caebfa07e8f2b8caf29a1b0f4bf8bccf514cf9e000a0"
	},
	{
		"id": "9a19ae1bfbaa",
		"ts": "2026-08-22T14:17:17.999Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11718374.14,
		"hash": "9a19ae1bfbaa44449c2a9d479b45dcecdb1745e1ed70f03d9ea4892be6985d40"
	},
	{
		"id": "e87ca4bef5c0",
		"ts": "2026-08-22T14:17:18.257Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 115778.38,
		"hash": "e87ca4bef5c065803bd8c7af0b067eb6f9fd47a02f05325d3cf3071253059ee2"
	},
	{
		"id": "136fc8e490c9",
		"ts": "2026-08-22T14:17:18.446Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 545383.19,
		"hash": "136fc8e490c9fbde750019746156fe4218390c0f6d352293c54361e970bf9056"
	},
	{
		"id": "7b8f6bd05e99",
		"ts": "2026-08-22T14:17:18.636Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 657809.11,
		"hash": "7b8f6bd05e999018db107905dcf26898bc66bd2b283ea5c91693a5747cd28b17"
	},
	{
		"id": "963819e59fd8",
		"ts": "2026-08-22T14:17:18.825Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 590931.76,
		"hash": "963819e59fd82b475027737db1aa77fd2afcf211203b783823daf382a5dba223"
	},
	{
		"id": "1f0219a94fd6",
		"ts": "2026-08-22T14:17:19.035Z",
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
		"liquidityUsd": 622020.2,
		"hash": "1f0219a94fd60acd0f54dbad20945a2b025d7541be29a109565f29df45afedc2"
	},
	{
		"id": "529a9787ee23",
		"ts": "2026-08-22T14:17:19.218Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3816881.26,
		"hash": "529a9787ee2377c52d3131f862bf533dd4467023debc34b3f0f98612064cdb83"
	},
	{
		"id": "f27bb727c7a4",
		"ts": "2026-08-22T14:17:19.408Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3279564.66,
		"hash": "f27bb727c7a471deac5b1b732560da253547710acf7bb4b9e62f8f9341d6bee9"
	},
	{
		"id": "51b80914533f",
		"ts": "2026-08-22T13:28:03.208Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109918362.69,
		"hash": "51b80914533f8aae0318801273b452eda5bc563a4be0a0e0f631a577c2a5afaf"
	},
	{
		"id": "37809b4ddf2c",
		"ts": "2026-08-22T13:28:03.447Z",
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
		"liquidityUsd": 16910455.75,
		"hash": "37809b4ddf2ce9212ba13f30ce51bbbc27c9fb0766c3db68223ccb0dcd3aa96a"
	},
	{
		"id": "85d57b22896c",
		"ts": "2026-08-22T13:28:03.634Z",
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
		"liquidityUsd": 890628.07,
		"hash": "85d57b22896c51b8eadbe9c1f2f7cd127db2ddb59ea86e66601da6ac96cb51c8"
	},
	{
		"id": "f0538b0e5eeb",
		"ts": "2026-08-22T13:28:03.871Z",
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
		"liquidityUsd": 28275295.25,
		"hash": "f0538b0e5eebbcb44be3c7363062e05f093fa6bac9277622c455ec81e46855d7"
	},
	{
		"id": "14d1b1770e09",
		"ts": "2026-08-22T13:28:04.058Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "14d1b1770e09b5d56fc6ac05ffa002d5f934e08a5dbebecc62e81d201ed34f19"
	},
	{
		"id": "d1e0db6bda79",
		"ts": "2026-08-22T13:28:04.283Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1183028.94,
		"hash": "d1e0db6bda7971b077c68dfcfef6cbd942cd2d876513a747a738b39ea59614ba"
	},
	{
		"id": "9ba559f39f52",
		"ts": "2026-08-22T13:28:04.512Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152762.96,
		"hash": "9ba559f39f52dbc2d5960b951b8007334ef2359d0978b81b96cfc7f023ae882f"
	},
	{
		"id": "e75975788e62",
		"ts": "2026-08-22T13:28:04.783Z",
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
		"liquidityUsd": 3196114.26,
		"hash": "e75975788e62cea1edda90de68104f2359ad15588c154f145d78c14c3c660ef9"
	},
	{
		"id": "74402b51c0ea",
		"ts": "2026-08-22T13:28:04.977Z",
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
		"liquidityUsd": 862796.17,
		"hash": "74402b51c0eac45f7330c868f128afb263e8155ed42f7aae483455a5c74be52c"
	},
	{
		"id": "6becf51bc943",
		"ts": "2026-08-22T13:28:05.771Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1301495.17,
		"hash": "6becf51bc94329fe5ef854f136796c41b0c3bfca6a02adab2aef675c31388ab4"
	},
	{
		"id": "e4c7cb8f9534",
		"ts": "2026-08-22T13:28:05.969Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1867932.93,
		"hash": "e4c7cb8f9534fe08dbd9c33ff6f38a58312ef5c6549c9cba8b9f8b1321a8d215"
	},
	{
		"id": "adcf92205b4c",
		"ts": "2026-08-22T13:28:06.196Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12018850.85,
		"hash": "adcf92205b4cdc76e1357fa8ede3c334e2bc71a8936b8467cb999c0e4d4971e4"
	},
	{
		"id": "44369c254cda",
		"ts": "2026-08-22T13:28:06.452Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 123113.31,
		"hash": "44369c254cda35ff9f02f2987d89ff08c0d3b772520a1280d410fd6d8990e35d"
	},
	{
		"id": "2c89c3302ef2",
		"ts": "2026-08-22T13:28:06.651Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 526441.98,
		"hash": "2c89c3302ef2f7bbdb00ba54208bfc9111aadcba1779026c33b210b5a1b838bf"
	},
	{
		"id": "5d8554eb1bdc",
		"ts": "2026-08-22T13:28:06.873Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 656653.08,
		"hash": "5d8554eb1bdccaa4e56b34e4c6a9e74200d32d60bebbe16b9888583356c11955"
	},
	{
		"id": "13d602369ad1",
		"ts": "2026-08-22T13:28:07.154Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 85167.15,
		"hash": "13d602369ad16123fc19a13560d43040ef0a3f007d95825029314d86eecaeeb7"
	},
	{
		"id": "00d2611abc2c",
		"ts": "2026-08-22T13:28:07.672Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3307729.78,
		"hash": "00d2611abc2c8930b9361022ea179765b32321bcbd837660ab60ff194457cf76"
	},
	{
		"id": "f37268509b88",
		"ts": "2026-08-22T13:28:07.875Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3762241.71,
		"hash": "f37268509b88ea2fa6495c098887bcd532fedbd9064f592ea7cc2cdc8988073e"
	},
	{
		"id": "fd6e79a76f10",
		"ts": "2026-08-22T13:28:08.085Z",
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
		"liquidityUsd": 616363.12,
		"hash": "fd6e79a76f102e7bcaa726e065e4c4568dc1cfcb38ae38e8ba99957fb611b920"
	},
	{
		"id": "7202e8527f2d",
		"ts": "2026-08-22T12:30:42.978Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109979209.87,
		"hash": "7202e8527f2d10bf3a29f78d07000017a2fa27c3987519f045053d71b96e3171"
	},
	{
		"id": "9f76600ddf6b",
		"ts": "2026-08-22T12:30:43.741Z",
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
		"liquidityUsd": 17665412.53,
		"hash": "9f76600ddf6b90671319575400f36e6bfc2543f8305bc49fda863d74c21e2e15"
	},
	{
		"id": "0ce41b1151aa",
		"ts": "2026-08-22T12:30:44.009Z",
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
		"liquidityUsd": 891400.5,
		"hash": "0ce41b1151aa1a8525cc742499d3322a3c9acf12c85cd853b8465dcf4f79c31b"
	},
	{
		"id": "9fa630823b49",
		"ts": "2026-08-22T12:30:44.274Z",
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
		"liquidityUsd": 28230576.09,
		"hash": "9fa630823b49b4dd47572c7558c1f6cb52a58757b6f11c377732b321a465999a"
	},
	{
		"id": "fef7126de0fa",
		"ts": "2026-08-22T12:30:44.553Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "fef7126de0fa9b971b04099683826027d8008b15ace2aee761b7a13235e77abe"
	},
	{
		"id": "60db3134217f",
		"ts": "2026-08-22T12:30:44.814Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1167578.92,
		"hash": "60db3134217f2be9983c0d0020c36bd863ff5017ba44f1d275d34c8dd071b736"
	},
	{
		"id": "4f4d6aa9c9d2",
		"ts": "2026-08-22T12:30:45.083Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152763.19,
		"hash": "4f4d6aa9c9d2612a8a49d59831dbec02a434d540e6e9abcb57a899bc6857f3c3"
	},
	{
		"id": "0e491dd721b5",
		"ts": "2026-08-22T12:30:45.348Z",
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
		"liquidityUsd": 3206792.71,
		"hash": "0e491dd721b599139821f1a0d029e0db08258e1dcf492d4737581a638c3e488c"
	},
	{
		"id": "e59acecafe85",
		"ts": "2026-08-22T12:30:45.626Z",
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
		"liquidityUsd": 887846.01,
		"hash": "e59acecafe854251d1f97b073064541300e88bbcdf84110d984915bb6556dc04"
	},
	{
		"id": "0687df3ccb39",
		"ts": "2026-08-22T12:30:45.884Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1271553.54,
		"hash": "0687df3ccb39e2887896b81bec426327c60be511752ad52904d2b61d775dff37"
	},
	{
		"id": "7c6357435b27",
		"ts": "2026-08-22T12:30:46.125Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1875804.15,
		"hash": "7c6357435b2709dd6dbe5f9114792639feb8199cf9ebdc1c5162d892c3156470"
	},
	{
		"id": "82c8c1272459",
		"ts": "2026-08-22T12:30:46.366Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 125581.47,
		"hash": "82c8c12724595caeb859a1d32ebdd5c482fadd8cfc55a4a6a3822b01de2b47ee"
	},
	{
		"id": "92c1428cef33",
		"ts": "2026-08-22T12:30:46.612Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 86071.35,
		"hash": "92c1428cef335aed64c6d199d8d757da171e92aca3eb5fa81580b222665b3a11"
	}
]
