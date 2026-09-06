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
	"updatedAt": "2026-09-06T17:28:58.401Z",
	"tokensScored": 16417,
	"verdictsIssued": 16417,
	"safe": 13943,
	"risky": 1214,
	"likelyRug": 1260,
	"ticks": 942
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "621c7133150a",
		"ts": "2026-09-06T17:28:53.790Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117003327.22,
		"hash": "621c7133150ac33e2dac0172340e4acc3ea877d5e6200592139c266da9d7a421"
	},
	{
		"id": "a200ce56d4ba",
		"ts": "2026-09-06T17:28:54.290Z",
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
		"liquidityUsd": 17996206.42,
		"hash": "a200ce56d4bab933d2d90955ef061f5ce2e009567e0cc77316880f61c9857057"
	},
	{
		"id": "1f3396022ff6",
		"ts": "2026-09-06T17:28:54.535Z",
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
		"liquidityUsd": 1036878.15,
		"hash": "1f3396022ff641a9ea5feb6a365c15122f89a09c6cde5cf90fd24b9bac918e71"
	},
	{
		"id": "766ee5c21e12",
		"ts": "2026-09-06T17:28:54.825Z",
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
		"liquidityUsd": 30425464.59,
		"hash": "766ee5c21e122f5eeef9a026421f4fafda1a8bf45fcef67de23f7707f30ea0d1"
	},
	{
		"id": "e5c1c7af7e10",
		"ts": "2026-09-06T17:28:55.084Z",
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
		"liquidityUsd": 4307495.6,
		"hash": "e5c1c7af7e108a952f780ba70ce17d11cf17893fe1f41a55f8d597949427dfe6"
	},
	{
		"id": "3130b083ab7f",
		"ts": "2026-09-06T17:28:55.336Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1214485.59,
		"hash": "3130b083ab7f5df3e307a612fafb561f02a70b413b5c30a3519a918a40774d11"
	},
	{
		"id": "78fe60a4ea60",
		"ts": "2026-09-06T17:28:55.634Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3555687.34,
		"hash": "78fe60a4ea6078be8a0a4ed792a882b0ac32218497225ab3b7895ea2a6f3643c"
	},
	{
		"id": "9db574a37f18",
		"ts": "2026-09-06T17:28:55.917Z",
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
		"liquidityUsd": 1721225.63,
		"hash": "9db574a37f18ef8218a0d79325b61af8c69b784352e7ef08b11e35fefd1cd1ed"
	},
	{
		"id": "9450e7eba74a",
		"ts": "2026-09-06T17:28:56.251Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 916000.74,
		"hash": "9450e7eba74a5d1ec33cad3781c96badb32f95f11a11cb460f05ede45225f0de"
	},
	{
		"id": "18cf7b6740b4",
		"ts": "2026-09-06T17:28:56.535Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1132967.45,
		"hash": "18cf7b6740b4f7bcf50fbc02ee34820c6d3998d396c3f3f1a82ea3a08ee4056d"
	},
	{
		"id": "16be48eaeed1",
		"ts": "2026-09-06T17:28:56.756Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245959.68,
		"hash": "16be48eaeed11e594ed1ebd86fe70111ff858ec69d95e2f9018d8483e9bb0d7c"
	},
	{
		"id": "5ebafd05c034",
		"ts": "2026-09-06T17:28:56.999Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1517186.64,
		"hash": "5ebafd05c03489b019dbcf0a969d4e9b1953d75442963c4b50603f5866466b08"
	},
	{
		"id": "0a4555af7af1",
		"ts": "2026-09-06T17:28:57.227Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 144210.96,
		"hash": "0a4555af7af19851c3c1882db401564297878f3632d89c7dbd66aa59b8f2eb26"
	},
	{
		"id": "9f86b966481f",
		"ts": "2026-09-06T17:28:57.467Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 289310.58,
		"hash": "9f86b966481fddd3231b94b7b74034bed6927060b76e124c7ff6bd1e07c2734e"
	},
	{
		"id": "7d1ac5f178b5",
		"ts": "2026-09-06T17:28:57.693Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3346796.46,
		"hash": "7d1ac5f178b5e1c9e1063d4dfe9b9314164900bf4251410913b4f43d69b0b40c"
	},
	{
		"id": "a3033b49363c",
		"ts": "2026-09-06T17:28:57.916Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1038067.99,
		"hash": "a3033b49363cfd81e50cc5a427944678ef01748f7d93da9e1a1fe0308c97c417"
	},
	{
		"id": "34a8b1e7ff3d",
		"ts": "2026-09-06T17:28:58.179Z",
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
		"liquidityUsd": 531930.87,
		"hash": "34a8b1e7ff3dd7e7962234e5386e10bb2fc5b95b8e3f333a105c9aa4baafdfcd"
	},
	{
		"id": "b29db8ffcc08",
		"ts": "2026-09-06T17:28:58.400Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 194413.17,
		"hash": "b29db8ffcc0873907b60746d267892b1e4d79e48554a0444ca804d75caf9a308"
	},
	{
		"id": "a32658ecc640",
		"ts": "2026-09-06T14:51:35.248Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116630218.45,
		"hash": "a32658ecc64099ac58fe7a3e7c93b5a0ac97ed6927d8ecd2a322f95fd5392e68"
	},
	{
		"id": "8c6af46a5ce3",
		"ts": "2026-09-06T14:51:35.681Z",
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
		"liquidityUsd": 21381379.93,
		"hash": "8c6af46a5ce3a4a44909f1c04e471d6ee61713263fd82e82b6c813b8527eccdf"
	},
	{
		"id": "8fff98c4d4bd",
		"ts": "2026-09-06T14:51:35.918Z",
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
		"liquidityUsd": 1021854.94,
		"hash": "8fff98c4d4bd9a342790e8e0011f9fcaba6efb1e6cdf31371bfde0043502bb4e"
	},
	{
		"id": "e52bfc907158",
		"ts": "2026-09-06T14:51:36.125Z",
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
		"liquidityUsd": 30400671.42,
		"hash": "e52bfc907158541c67a4c6ca5f2b4ab0a4fe60bc3252d44d041d3284b3979968"
	},
	{
		"id": "918f08e80141",
		"ts": "2026-09-06T14:51:36.342Z",
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
		"liquidityUsd": 4288946.78,
		"hash": "918f08e801411f0a5180bf56052c7f35d8bc8e87e6f9e0063bc0b836e224405d"
	},
	{
		"id": "2a4fea3a46bd",
		"ts": "2026-09-06T14:51:36.565Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1210336.71,
		"hash": "2a4fea3a46bd365ff6a52ecc51a6c5953a36eaa385bb11be335772ab16aa0acf"
	},
	{
		"id": "7453346c2823",
		"ts": "2026-09-06T14:51:36.805Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3486890.32,
		"hash": "7453346c2823150000621ccf134fd8489b121bfae2b463316c628e21eb73976a"
	},
	{
		"id": "6e22446ed6d2",
		"ts": "2026-09-06T14:51:37.022Z",
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
		"liquidityUsd": 1718563.07,
		"hash": "6e22446ed6d25ad77369cde9efeebceda7896199370c69e9c1ec099d3d558e1b"
	},
	{
		"id": "d721fdb5d1e0",
		"ts": "2026-09-06T14:51:37.235Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 946934.67,
		"hash": "d721fdb5d1e09f3ae492b26f7449edb8ef079bf28fd1d2bad209325994098ef3"
	},
	{
		"id": "873d97501da5",
		"ts": "2026-09-06T14:51:37.456Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1117352.04,
		"hash": "873d97501da5f3b009a564498637efb17758759f415ece069fdd09d858e34658"
	},
	{
		"id": "9748596690fe",
		"ts": "2026-09-06T14:51:37.655Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 239528.58,
		"hash": "9748596690fe42d9b58163416e574663a286cb3576e2a474dff2f5a48c1c11cc"
	},
	{
		"id": "c65a32479d0d",
		"ts": "2026-09-06T14:51:37.849Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1503571.55,
		"hash": "c65a32479d0d2e24ca55054d0692c3d36f299596a1f6a0f449b7d2601e862575"
	},
	{
		"id": "0bfeaf0c64b6",
		"ts": "2026-09-06T14:51:38.046Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 131318.24,
		"hash": "0bfeaf0c64b6bca76e96fba0ff3c3af6da5de5ad9f3daaef01af425bd7aa3aee"
	},
	{
		"id": "4d0cb3790b33",
		"ts": "2026-09-06T14:51:38.239Z",
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
		"liquidityUsd": 528436.75,
		"hash": "4d0cb3790b33ba81efe6aed7f98c52f5bc3641d41cc5577e006b5e7a72746cbe"
	},
	{
		"id": "6cf2919f27fb",
		"ts": "2026-09-06T14:51:38.442Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3318268.65,
		"hash": "6cf2919f27fb7c62d14159f5b93d18cdc8607de2e9714847b01826d0bbc3272e"
	},
	{
		"id": "abf04b43f470",
		"ts": "2026-09-06T14:51:38.634Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1036444.06,
		"hash": "abf04b43f4701dcfeacdcf4a6f0ec7bc2256e413f1100656ff612cb2e3c2015b"
	},
	{
		"id": "4b958c693ed6",
		"ts": "2026-09-06T14:51:38.830Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1176035.82,
		"hash": "4b958c693ed65571ddb45ced77fdc8f27f3ffd79ccd0b71e4b366576ac2ce5bc"
	},
	{
		"id": "9f5d62ca48d3",
		"ts": "2026-09-06T14:51:39.062Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13066247.43,
		"hash": "9f5d62ca48d3dc91ff3ffee1cfeee7b5b0c90ee2ff317dc5f8a29867f04b89b2"
	},
	{
		"id": "c091a1d2ee64",
		"ts": "2026-09-06T11:55:04.282Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116902055.33,
		"hash": "c091a1d2ee64ecbe1f0f30fb5d329808d6e8ae04520cd353f4b8bb34ab5a9fd7"
	},
	{
		"id": "146a38528c03",
		"ts": "2026-09-06T11:55:04.949Z",
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
		"liquidityUsd": 18738727.72,
		"hash": "146a38528c03dfdf3301c40ae42a4d868d0a9f5d493d2a6054cfbf2218505758"
	},
	{
		"id": "cbc643d513ec",
		"ts": "2026-09-06T11:55:05.359Z",
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
		"liquidityUsd": 1031526.39,
		"hash": "cbc643d513eccab9ba2797f831c5f8cd067c304e916b20c32f909e682e524c64"
	},
	{
		"id": "166972c9ea35",
		"ts": "2026-09-06T11:55:05.740Z",
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
		"liquidityUsd": 30880203.48,
		"hash": "166972c9ea3512699895fa96b631f2af10ca64a50084fe5e3ac53b33a740c990"
	},
	{
		"id": "70104c2d197c",
		"ts": "2026-09-06T11:55:06.252Z",
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
		"liquidityUsd": 4282632.21,
		"hash": "70104c2d197ced89e976f995e54331e333d9ceaddce3621da85e2475bf85f8b1"
	},
	{
		"id": "bc7ae79ad26a",
		"ts": "2026-09-06T11:55:06.713Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1231708.34,
		"hash": "bc7ae79ad26a8b054ed4b70822e9cf824567c9e127b0b16b68f91ff06c218882"
	},
	{
		"id": "f31bfc0eeb42",
		"ts": "2026-09-06T11:55:07.112Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3517213.72,
		"hash": "f31bfc0eeb4216cbf5dd7c0dfe7c193cad0625483e885588faae4cd0bc351781"
	},
	{
		"id": "675c8a278698",
		"ts": "2026-09-06T11:55:07.437Z",
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
		"liquidityUsd": 2822179.18,
		"hash": "675c8a278698f738f2730b511e46b7b21f9e6fb487b12085d79a32839268708d"
	},
	{
		"id": "a51dd57f804b",
		"ts": "2026-09-06T11:55:07.817Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 826731.56,
		"hash": "a51dd57f804bcc1e7446061947975239b4b67a9c98a6b8fed383ea442d8baccc"
	},
	{
		"id": "eb1bd12bc1ab",
		"ts": "2026-09-06T11:55:08.192Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 260582.84,
		"hash": "eb1bd12bc1abe735a01566bb5a6dea0e72b1d88062658aca8067fcfb78df19f6"
	},
	{
		"id": "89e9a177a601",
		"ts": "2026-09-06T11:55:08.419Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1248035.12,
		"hash": "89e9a177a601508da3fcf8693dc1f40a0949f3315c95633f706974f2c6be79cb"
	},
	{
		"id": "8cc547651d36",
		"ts": "2026-09-06T11:55:08.644Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1517731.35,
		"hash": "8cc547651d36b28c30f0767c665f846173cabd736ae93531a67904075756c186"
	},
	{
		"id": "6a27e8c4e952",
		"ts": "2026-09-06T11:55:08.870Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 139882.07,
		"hash": "6a27e8c4e952149b9618abc7cb8cf309d79c250288a39316a16cb4772077837e"
	},
	{
		"id": "8e53fda90b60",
		"ts": "2026-09-06T11:55:09.099Z",
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
		"liquidityUsd": 563545.78,
		"hash": "8e53fda90b60ae7f1897073f11590970a064bd7a21ffd4f42f288a6ddd6d0ea9"
	},
	{
		"id": "fc4f29499a21",
		"ts": "2026-09-06T11:55:09.326Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3345625.39,
		"hash": "fc4f29499a21020590a60a8b6afd7feaa57b9ed51cf8adfc8cc153c9401bb931"
	},
	{
		"id": "a82b1170958e",
		"ts": "2026-09-06T11:55:09.553Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13113256.49,
		"hash": "a82b1170958ec45a2867b76908c33030773aa87971ca5e6148e459a99c93d04d"
	},
	{
		"id": "e6356307f594",
		"ts": "2026-09-06T11:55:09.779Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1203816.23,
		"hash": "e6356307f594b2354bbf6ec79363032b3400f0ed0c31830c35ba354feffe6af3"
	},
	{
		"id": "8dc6b6d44654",
		"ts": "2026-09-06T11:55:10.006Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1179479.32,
		"hash": "8dc6b6d446548bcb997320e5e13b7387cbb85ea2de3329a16ed3fd15a8bd4b6f"
	},
	{
		"id": "152c93d617a2",
		"ts": "2026-09-06T11:55:10.232Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 201968.45,
		"hash": "152c93d617a26e3392d1671c5675ad5a72266d7daae611ea8f6cccd7f4f800a0"
	},
	{
		"id": "2822db6f5732",
		"ts": "2026-09-06T07:34:35.931Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116787654.01,
		"hash": "2822db6f5732d9ee0009e1ac4747d9542f625908b84cbcc679dac9fb5408e1fe"
	},
	{
		"id": "c0d6bbc07f2c",
		"ts": "2026-09-06T07:34:36.460Z",
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
		"liquidityUsd": 18277654.94,
		"hash": "c0d6bbc07f2c71ee15e174f7fda62d392b7ab6d0e735aea7d8f9343f0d6b3aa8"
	},
	{
		"id": "457ce24608c4",
		"ts": "2026-09-06T07:34:36.648Z",
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
		"liquidityUsd": 1031486.81,
		"hash": "457ce24608c45600c704b0f729dfd22613847019814d097b02d4355efe81ffbd"
	},
	{
		"id": "122634023cf7",
		"ts": "2026-09-06T07:34:36.838Z",
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
		"liquidityUsd": 30389867.27,
		"hash": "122634023cf75989f9d0d4f4051e32646a12f72bc8d51627acf39cdc28a45467"
	},
	{
		"id": "beb67585711b",
		"ts": "2026-09-06T07:34:37.057Z",
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
		"liquidityUsd": 4257117.16,
		"hash": "beb67585711baeb9f21c4f2e1c5445deaface9daa7a7b4aeffa6fbfb6085ed62"
	},
	{
		"id": "1ab1f6023555",
		"ts": "2026-09-06T07:34:37.269Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1215317.1,
		"hash": "1ab1f60235558e03a46b18777662164cf5a58da1d16eda5e0e869866797d604e"
	},
	{
		"id": "23638656211d",
		"ts": "2026-09-06T07:34:37.541Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30389866.92,
		"hash": "23638656211dab60ba7b7119e2e744e0872618eea2f89409fb8251ee3084a466"
	},
	{
		"id": "090a21c9000e",
		"ts": "2026-09-06T07:34:37.731Z",
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
		"liquidityUsd": 1776481.95,
		"hash": "090a21c9000e947bfd134c713e978d723b0c109126bab83412ad5935383e9817"
	},
	{
		"id": "c52ac8e5d7c8",
		"ts": "2026-09-06T07:34:37.921Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 665630.08,
		"hash": "c52ac8e5d7c84f5cbbf8ca7a6d763a5c8e569fb55d11c8d45650f0159a6432e6"
	},
	{
		"id": "3d3a0c04458f",
		"ts": "2026-09-06T07:34:38.111Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 255963.32,
		"hash": "3d3a0c04458ff4cf8efb80501b6bf4ca6c9817878ad4853aa7c0b5e326792e4e"
	},
	{
		"id": "2118b61fcddd",
		"ts": "2026-09-06T07:34:38.287Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1229561.47,
		"hash": "2118b61fcdddbb1556fcc5928ee7068ead5de5cdf4286b8d806d8d6b871d4f99"
	},
	{
		"id": "b81bc80d8ceb",
		"ts": "2026-09-06T07:34:38.478Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1422876.16,
		"hash": "b81bc80d8ceba2b09b99de22a958147830e20af6dd758b4a1759f55113e73987"
	},
	{
		"id": "6b09fadd2217",
		"ts": "2026-09-06T07:34:38.653Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 130469.26,
		"hash": "6b09fadd2217f5d6d6e249e5671c536c92842290da62de69eac0fd2dce598da1"
	},
	{
		"id": "36656b903b19",
		"ts": "2026-09-06T07:34:38.834Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3295890,
		"hash": "36656b903b19952e000fa16e999bbc551fd31a655c497934cee25b5966635e9a"
	},
	{
		"id": "832063c1a155",
		"ts": "2026-09-06T07:34:39.011Z",
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
		"liquidityUsd": 583596.01,
		"hash": "832063c1a1559444020bf6435d08933a8fb5ddc6a23b3c22be71702571e70d90"
	},
	{
		"id": "1d9a930bd436",
		"ts": "2026-09-06T07:34:39.193Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 142224.34,
		"hash": "1d9a930bd436946c27f07c23020fc0b0308777cb9ad47d17358e0230a2decf32"
	},
	{
		"id": "6c2ffdd72801",
		"ts": "2026-09-06T07:34:39.371Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 188261.21,
		"hash": "6c2ffdd7280141b790d5eea7563e45917a524b59322d04ed39fdf1df574aeac1"
	},
	{
		"id": "b0ff0be12840",
		"ts": "2026-09-06T07:34:39.552Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 58128.29,
		"hash": "b0ff0be128409e637ba4c9142c0097522bfb06e13272bfc9582b60c463d2da69"
	},
	{
		"id": "f9bd12281688",
		"ts": "2026-09-06T07:34:39.729Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1877058.61,
		"hash": "f9bd1228168827d0fbe9517256d82c432d323f7c67d2d2589fdcbb8a9a118646"
	},
	{
		"id": "302357f53478",
		"ts": "2026-09-06T02:43:06.412Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116850676.98,
		"hash": "302357f53478c571424d685b3cea3c21585a58a51c8b77d86834884e8ef0bfe5"
	},
	{
		"id": "0272af286fe3",
		"ts": "2026-09-06T02:43:06.689Z",
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
		"liquidityUsd": 18418616.62,
		"hash": "0272af286fe3b1cc8e3504d49e3b17ad13c58b7f437b6f62c574cb72c0fd5629"
	},
	{
		"id": "6250fb624a38",
		"ts": "2026-09-06T02:43:06.962Z",
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
		"liquidityUsd": 1043530.68,
		"hash": "6250fb624a38d8ab9a0ad8f469cc345757a7ba1897d644706ea26a4dfb325fd2"
	},
	{
		"id": "eabc02d4b2e7",
		"ts": "2026-09-06T02:43:07.235Z",
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
		"liquidityUsd": 30487046.97,
		"hash": "eabc02d4b2e75d47e0e903603fa696ee713535954cbb236f9a08636ea2db8e33"
	},
	{
		"id": "0d8680f1a4d3",
		"ts": "2026-09-06T02:43:07.484Z",
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
		"liquidityUsd": 4277573.85,
		"hash": "0d8680f1a4d3dedd5d6030276df950bf58243fa80101f4032bf22db91d24e4c4"
	},
	{
		"id": "474e2eeedbf7",
		"ts": "2026-09-06T02:43:07.740Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1212982.58,
		"hash": "474e2eeedbf7cc7c9360157a3f30ca1597319f8a8bf2b8e5142c04ac2d249b26"
	},
	{
		"id": "9f91a4515a13",
		"ts": "2026-09-06T02:43:08.224Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30487046.97,
		"hash": "9f91a4515a13f36f64e138d591666c7977bb2894bae4d7a214ec0943acd5ec02"
	},
	{
		"id": "222a3412d3a0",
		"ts": "2026-09-06T02:43:08.517Z",
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
		"liquidityUsd": 1775414.06,
		"hash": "222a3412d3a02bbdf4d0227121c2e18244fc74a179a970ec53723272d2c0c332"
	},
	{
		"id": "0ee05ab99f89",
		"ts": "2026-09-06T02:43:08.785Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 478932.21,
		"hash": "0ee05ab99f8984521aacd27a4eab03db45abe8ee03107f50de679a1df468164b"
	},
	{
		"id": "234b6fed43a1",
		"ts": "2026-09-06T02:43:09.077Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 234877.96,
		"hash": "234b6fed43a1f47c928c4ee45eefc1a51f72a314a9615f2e081ea17224253a9b"
	},
	{
		"id": "166c3ce72d51",
		"ts": "2026-09-06T02:43:09.310Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1290653.53,
		"hash": "166c3ce72d51466ff7622a80f79685832fcfba816cc6a3f58e9d63b46654a5a7"
	},
	{
		"id": "965ebbe12321",
		"ts": "2026-09-06T02:43:09.543Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1461229.47,
		"hash": "965ebbe12321d44c6f7b594a76a06551188953f64a26231d12e37ccd227e567a"
	},
	{
		"id": "736b09fbdc51",
		"ts": "2026-09-06T02:43:09.777Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121586.19,
		"hash": "736b09fbdc5195bea0455f30477a8ec25774a1bae6ba4071ac7501dcc4bb9fae"
	},
	{
		"id": "67016b580512",
		"ts": "2026-09-06T02:43:10.010Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3329655.61,
		"hash": "67016b58051286b6912b20a11b8a5ebd4d22a5b1f3086407865fea2121f3d8ae"
	},
	{
		"id": "efecd2ef7bdd",
		"ts": "2026-09-06T02:43:10.242Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 53761.81,
		"hash": "efecd2ef7bdd34b554db9119200d370c8858bd0ee8c44d853890e17c21182fdf"
	},
	{
		"id": "d1fd5bba3dff",
		"ts": "2026-09-06T02:43:10.475Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 181470.33,
		"hash": "d1fd5bba3dff72b6ae311a36500679b14b7472b6246107c3bfa8711c110f66f9"
	},
	{
		"id": "b99141e53ef3",
		"ts": "2026-09-06T02:43:10.707Z",
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
		"liquidityUsd": 602443.74,
		"hash": "b99141e53ef397563f3a6de1a1cf0f32cdfe0886631f4fefbe93769edd37367c"
	},
	{
		"id": "1877d52185e8",
		"ts": "2026-09-06T02:43:10.940Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 131633.04,
		"hash": "1877d52185e88ab9b04bb2fa4ac178b047d2f76da4c1a1653a78144e6e9e0215"
	},
	{
		"id": "763d57640cec",
		"ts": "2026-09-06T02:43:11.174Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1879023.26,
		"hash": "763d57640cec06d2451c026e4e541ca0f9d9944743a622a0923fbb6e3c64c57e"
	},
	{
		"id": "64e315258da6",
		"ts": "2026-09-05T23:31:24.894Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116674120.36,
		"hash": "64e315258da6ffcf549c76e8b83ea5b6eee045c4b754243c1a6372cb11a28ba5"
	},
	{
		"id": "44ac4595cca9",
		"ts": "2026-09-05T23:31:25.522Z",
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
		"liquidityUsd": 19685395.81,
		"hash": "44ac4595cca9e247cf6003c208f8155f6625d86bf9d064cb1d3d54400888ac86"
	},
	{
		"id": "b01ed3a70157",
		"ts": "2026-09-05T23:31:25.776Z",
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
		"liquidityUsd": 1027570.44,
		"hash": "b01ed3a701579b8c8d919db661f7aaf86ca900324b9a74db41435cc0317d747f"
	},
	{
		"id": "18d618362ba7",
		"ts": "2026-09-05T23:31:26.020Z",
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
		"liquidityUsd": 30627753.82,
		"hash": "18d618362ba720092d8a63c0342960e7b796928807297c8f924387ea1eb02349"
	},
	{
		"id": "28c2ce7ea784",
		"ts": "2026-09-05T23:31:26.228Z",
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
		"liquidityUsd": 4265501.24,
		"hash": "28c2ce7ea7843aaa6b11aca70e46af5851689d46fa2b2b0d3f4dfa88a098296c"
	},
	{
		"id": "c90464a20625",
		"ts": "2026-09-05T23:31:26.435Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1201784.47,
		"hash": "c90464a206257ab73c375f0898bd41a98c2be3d38b7e4c8b77ea9d9762d186a1"
	},
	{
		"id": "677f6ec520ea",
		"ts": "2026-09-05T23:31:26.860Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30627753.82,
		"hash": "677f6ec520ea132b5a145e499d7f072c00919320dffa210affb45b02af4d9582"
	},
	{
		"id": "e652469130ee",
		"ts": "2026-09-05T23:31:27.118Z",
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
		"liquidityUsd": 2592862.29,
		"hash": "e652469130ee60e3d7bf4b549bc187d3e153cba2d85a5a3b3b5d6ca9c4168ce4"
	},
	{
		"id": "567a78d6bcb4",
		"ts": "2026-09-05T23:31:27.373Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 220807.04,
		"hash": "567a78d6bcb4878c85a6114561d2b9e5886a3902aeab91f8b555b8be4abde4f7"
	},
	{
		"id": "dc0081b1ff4c",
		"ts": "2026-09-05T23:31:27.617Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 336990.42,
		"hash": "dc0081b1ff4c2732f2178751957b72976a76f7402a3cebffb8aa2e589d9ccc3f"
	},
	{
		"id": "542266f17827",
		"ts": "2026-09-05T23:31:27.823Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1264002.96,
		"hash": "542266f1782716b0b776fadb2cbe4c33d96114de274cc41c6976b3f4b30472bf"
	},
	{
		"id": "d8cfd1ab97fc",
		"ts": "2026-09-05T23:31:28.028Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1377400.58,
		"hash": "d8cfd1ab97fc0bf2065fd2a004a2b615a7d97989f7f150391556d6535efed72d"
	},
	{
		"id": "97cbcd05a112",
		"ts": "2026-09-05T23:31:28.208Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3309073.75,
		"hash": "97cbcd05a112d002c1486fd8c2eb5560eb553097f6c2bb49e9e0517cc36e5024"
	},
	{
		"id": "ce87833b4688",
		"ts": "2026-09-05T23:31:28.403Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 178161.48,
		"hash": "ce87833b468878183a9ec4a3ef1b406eeb92767641e489c14b765e118ecbc5fa"
	},
	{
		"id": "31fc39e77253",
		"ts": "2026-09-05T23:31:28.578Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55474.99,
		"hash": "31fc39e772536b0234aedeb4f8a05d22ff6c59db077e8080145ceea35c657659"
	},
	{
		"id": "f97795aeef4b",
		"ts": "2026-09-05T23:31:28.784Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121703.2,
		"hash": "f97795aeef4b0a4e28b2146f5dcfb60510d83ddc3e53f066d26ff2fd87cd59d6"
	},
	{
		"id": "de51241b4d3f",
		"ts": "2026-09-05T23:31:28.970Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 142164.39,
		"hash": "de51241b4d3fc74a04975f816430209f3d7d27930f9a21dee56d5a83863d8c69"
	},
	{
		"id": "06084167bbd1",
		"ts": "2026-09-05T23:31:29.167Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 963809.74,
		"hash": "06084167bbd1c9ff01f3ea43a5e270bdc3661bd4eae21f0e02f6bafb6bf7f016"
	},
	{
		"id": "f615ffa787a5",
		"ts": "2026-09-05T23:31:29.341Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1233733.34,
		"hash": "f615ffa787a503a01df68bf8d777d5146c21a5725cce2693a6161ef027004083"
	},
	{
		"id": "5305a8ffa554",
		"ts": "2026-09-05T21:53:09.732Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116724235.04,
		"hash": "5305a8ffa5542e0bc81406aacdbc95d5ba2646f6bbc558fd35d05ca14b2106d8"
	},
	{
		"id": "ee9106f8a276",
		"ts": "2026-09-05T21:53:10.216Z",
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
		"liquidityUsd": 14973404.31,
		"hash": "ee9106f8a2761eb7089cefb04d305edfa43b10714ebdbee42a6d7e844d116ee4"
	},
	{
		"id": "2f83dbca6dca",
		"ts": "2026-09-05T21:53:10.573Z",
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
		"liquidityUsd": 1030791.71,
		"hash": "2f83dbca6dcac64ecadd8f0a9fac6bae19c83ca8a021c81dc30bf81697b11783"
	},
	{
		"id": "d17954f2f594",
		"ts": "2026-09-05T21:53:10.844Z",
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
		"liquidityUsd": 30427633.22,
		"hash": "d17954f2f594a48eef417d7743a924f4b870072a556545f135f7378221424c78"
	},
	{
		"id": "e67564055bb5",
		"ts": "2026-09-05T21:53:11.130Z",
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
		"liquidityUsd": 4282024.14,
		"hash": "e67564055bb5483447d36d0c69c6a56ecae19f22ce45e21a4c6248621cb426f5"
	},
	{
		"id": "1fcbd9fd5dc2",
		"ts": "2026-09-05T21:53:11.392Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1200229.96,
		"hash": "1fcbd9fd5dc2c5e890fdcc3037c0158715e22a352034f7e9871175aa0c381f3b"
	},
	{
		"id": "c8ea3eff0850",
		"ts": "2026-09-05T21:53:11.681Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30427633.22,
		"hash": "c8ea3eff0850f42cd3905d9ebd6709ef09027a7b34fb79d95a34c3c13709e607"
	},
	{
		"id": "905f31a0e2e4",
		"ts": "2026-09-05T21:53:11.997Z",
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
		"liquidityUsd": 3022718.7,
		"hash": "905f31a0e2e486e0fc475a22f709db99418422b7ba32954794f90a02da74e965"
	},
	{
		"id": "7b36ec00f09b",
		"ts": "2026-09-05T21:53:12.262Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1211141.89,
		"hash": "7b36ec00f09bc1f6cac05089ecdb1aee45d80f57f8936b38093c507fb82b33ef"
	},
	{
		"id": "649cef5ed36c",
		"ts": "2026-09-05T21:53:12.512Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 337162.41,
		"hash": "649cef5ed36c42935fd6771bf23267a661d9c5dfb44fc9e39079f4eadf875b1f"
	},
	{
		"id": "2d3883fdaf81",
		"ts": "2026-09-05T21:53:12.739Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 236418.32,
		"hash": "2d3883fdaf819051cc2c60acad622d4ca88e9367c68e1961046f0518e1652451"
	},
	{
		"id": "1ca7f61f340c",
		"ts": "2026-09-05T21:53:12.970Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1364063.75,
		"hash": "1ca7f61f340c6e80ea531c6d3536dae46ee20d35ed01b69c9c519e9752d1c520"
	},
	{
		"id": "4e8f7baccae7",
		"ts": "2026-09-05T21:53:13.197Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3325924.89,
		"hash": "4e8f7baccae726e241709ed73264161fc0f4b4e7d34d77737e49f9641b8f322c"
	},
	{
		"id": "f3679c69e9f7",
		"ts": "2026-09-05T21:53:13.424Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 176791.41,
		"hash": "f3679c69e9f7c9a7f427639cf07557236f762053d45fa9b621e7649599ec1ffc"
	},
	{
		"id": "1e43ea4ce381",
		"ts": "2026-09-05T21:53:13.652Z",
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
		"liquidityUsd": 544041.67,
		"hash": "1e43ea4ce381e3a78d05b8ef8bfc1b291a0467980bd9c19a884271bb4139c905"
	},
	{
		"id": "6b262c5460bd",
		"ts": "2026-09-05T21:53:13.882Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1858342.72,
		"hash": "6b262c5460bda1893d7bb6d6ae8fb4281dae250506a6f72748af08a172622849"
	},
	{
		"id": "f227793e150d",
		"ts": "2026-09-05T21:53:14.110Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 52429.43,
		"hash": "f227793e150dcb9214dbc8d9453e3a1ec9b9b8b50145aed1b6a72748dd9c3559"
	},
	{
		"id": "5b504e9ecfec",
		"ts": "2026-09-05T21:53:14.336Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 114122.09,
		"hash": "5b504e9ecfec95d1788b1b51e583a32959c2b4723fc9835db34d10250543512d"
	},
	{
		"id": "fe6abd096772",
		"ts": "2026-09-05T21:53:14.563Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 848071.4,
		"hash": "fe6abd096772dbc5e048fe5526709d814c57ec0c61fac63f3eb1f06af12a4f04"
	},
	{
		"id": "b2a409561d36",
		"ts": "2026-09-05T19:52:31.729Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116591749.01,
		"hash": "b2a409561d36f9116cecd9df8ca3a9f78e44d88553334aaa6a7f3f96737e1c54"
	},
	{
		"id": "9db8b600ded8",
		"ts": "2026-09-05T19:52:32.224Z",
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
		"liquidityUsd": 17987936.82,
		"hash": "9db8b600ded813548930e85087f1abb751c8f767189ee388cc48e89382580549"
	},
	{
		"id": "a09f6ae409b2",
		"ts": "2026-09-05T19:52:32.469Z",
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
		"liquidityUsd": 1025453.17,
		"hash": "a09f6ae409b2e85a92d5fda16440b35c4767341873d00e45bd34321da875b87d"
	},
	{
		"id": "5d6925707a6c",
		"ts": "2026-09-05T19:52:32.919Z",
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
		"liquidityUsd": 29659829.05,
		"hash": "5d6925707a6c00a4f338134b5ea791ede6abe9f8302ae31d21ce95bb45179733"
	},
	{
		"id": "1b639ab5a879",
		"ts": "2026-09-05T19:52:33.356Z",
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
		"liquidityUsd": 4259835.04,
		"hash": "1b639ab5a879b153c586e6baf967e686e0d705ded01ed3d128b19f723cb83173"
	},
	{
		"id": "1a1170401c7a",
		"ts": "2026-09-05T19:52:33.604Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1197392.57,
		"hash": "1a1170401c7a83833dfbf6c48d262ff1176e0f5bf48efd91fd4507911b034bf1"
	},
	{
		"id": "060d7dbcaa0c",
		"ts": "2026-09-05T19:52:33.957Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1153373.15,
		"hash": "060d7dbcaa0caaa43554be659c081409d613412e3fcf6d3c1f4a66d5c617be91"
	},
	{
		"id": "faf692238996",
		"ts": "2026-09-05T19:52:34.205Z",
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
		"liquidityUsd": 3008151.35,
		"hash": "faf692238996f8efd8dd60b3c3be2750c05ba664fc02e8aa7cfb30b068d8b2a6"
	},
	{
		"id": "fe0ea1c49ae3",
		"ts": "2026-09-05T19:52:34.465Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1224769.62,
		"hash": "fe0ea1c49ae33033e8d56ebda1e9973755157b9123ebf4c9b1aef5302a3a20f1"
	},
	{
		"id": "cee88ae014f9",
		"ts": "2026-09-05T19:52:34.732Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 290610.37,
		"hash": "cee88ae014f9bee42d304c865ec6f48d1af37fc6634659ac7051e90e4702a878"
	},
	{
		"id": "243ff88f1d16",
		"ts": "2026-09-05T19:52:34.953Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247745.62,
		"hash": "243ff88f1d1677e23d712dea586bbe1e69fdc429cd6af3f5c01e04c44065a435"
	},
	{
		"id": "3e587dbe04a1",
		"ts": "2026-09-05T19:52:35.183Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1374645.58,
		"hash": "3e587dbe04a1ad33fccac3cc11d7e63de22bd7ffb59d0e659ee1b514f622c67f"
	},
	{
		"id": "61dde5124a0b",
		"ts": "2026-09-05T19:52:35.410Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3296076.14,
		"hash": "61dde5124a0b12fa97f4c0447b28ff04732150a2d4b3a3b4ac109b24222ed07c"
	},
	{
		"id": "8c1a7966fe65",
		"ts": "2026-09-05T19:52:35.635Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 175107.16,
		"hash": "8c1a7966fe65f4a46df443fe02ee6a68a9fe1fc516634e98ab73884747fb55e1"
	},
	{
		"id": "f8af6f3ab96a",
		"ts": "2026-09-05T19:52:35.861Z",
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
		"liquidityUsd": 556776.01,
		"hash": "f8af6f3ab96a1c03278855eb8b1069e756c7f7566f065ebd49763ffff0b68dee"
	},
	{
		"id": "c47b6ba97de9",
		"ts": "2026-09-05T19:52:36.091Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 858593.59,
		"hash": "c47b6ba97de9cb2a6ea4180fe0167e1710ee69a8bc194bec453191359d95dd26"
	},
	{
		"id": "78d148a8ba19",
		"ts": "2026-09-05T19:52:36.312Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 111567.93,
		"hash": "78d148a8ba195221d2dae13842a0220d60ae959718f14c0ffc3db636578bb9d7"
	},
	{
		"id": "93b8d0052b34",
		"ts": "2026-09-05T19:52:36.542Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59715.26,
		"hash": "93b8d0052b34de1024c264e6f35c1f85bc24c604d5780bbf80d9e3236bf42cac"
	},
	{
		"id": "4de2a1000efe",
		"ts": "2026-09-05T19:52:36.766Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 153143.97,
		"hash": "4de2a1000efefa8f725d1fce89835144142b242b4cd267d112b1ea2390955dd7"
	},
	{
		"id": "4b5a67e68ff5",
		"ts": "2026-09-05T19:52:36.989Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 139353.39,
		"hash": "4b5a67e68ff5bace8f4f9df027ce8708691dcef608e11eeb5a58d7489d31c230"
	},
	{
		"id": "53828e6a2fc9",
		"ts": "2026-09-05T17:06:03.957Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116628069.25,
		"hash": "53828e6a2fc97462a3c14941c3c06bdb3e0f5596a5195fcea3d19126f2465203"
	},
	{
		"id": "87c4d8c1d75f",
		"ts": "2026-09-05T17:06:04.486Z",
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
		"liquidityUsd": 16984941.79,
		"hash": "87c4d8c1d75fddf45a734a4e8ed387032422682d9c03663ef721a4cedfaf77b3"
	},
	{
		"id": "05609b14b80e",
		"ts": "2026-09-05T17:06:04.862Z",
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
		"liquidityUsd": 1030845.5,
		"hash": "05609b14b80e590ec9362436c17c3ec78c3fde8c847d3aba18166c387a34cb72"
	},
	{
		"id": "218cea509d3f",
		"ts": "2026-09-05T17:06:05.134Z",
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
		"liquidityUsd": 29790395.06,
		"hash": "218cea509d3f21b0c629307b196ba18b01124170fd72fb949f82d22e5dd65c5a"
	},
	{
		"id": "d5969d8901a1",
		"ts": "2026-09-05T17:06:05.496Z",
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
		"liquidityUsd": 4263725.38,
		"hash": "d5969d8901a1d6a1f097234c7bce41e2d055da70562a5dfaca7f9ac971aa7932"
	},
	{
		"id": "d2ff57f37691",
		"ts": "2026-09-05T17:06:05.791Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1186382.69,
		"hash": "d2ff57f376915def68abd6436f818bd9cf9102fa3dc0abd330dbd4720e83731e"
	},
	{
		"id": "97234977c0fb",
		"ts": "2026-09-05T17:06:06.079Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1153862.75,
		"hash": "97234977c0fbbc99bbe2e0a7cc3343648fcd9c7f68f3c441633dadeda1257c24"
	},
	{
		"id": "fc3152fa7bce",
		"ts": "2026-09-05T17:06:06.433Z",
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
		"liquidityUsd": 3082506.46,
		"hash": "fc3152fa7bce0b411a33070f884938823af6faf1cf2fd49e91f95aa4d593dacc"
	},
	{
		"id": "16548b2f72b6",
		"ts": "2026-09-05T17:06:06.725Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1184695.66,
		"hash": "16548b2f72b6b8eb9fc73bd6e081655169968155dc1890a06579f92b08b9688d"
	},
	{
		"id": "bc0c8fde345e",
		"ts": "2026-09-05T17:06:06.973Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 263982.4,
		"hash": "bc0c8fde345ec3f9bf70ab3c1387f0daf1cc632451e9408050a0daec78213e12"
	},
	{
		"id": "8423ea7111b2",
		"ts": "2026-09-05T17:06:07.207Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 213468.96,
		"hash": "8423ea7111b2a939b028302ee21a160095c2203710d81accb77547fb641f7afc"
	},
	{
		"id": "064ce890f29c",
		"ts": "2026-09-05T17:06:07.437Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1315506.13,
		"hash": "064ce890f29cc9a16c7ebdc0e82a493df7acd212325b5f3e5ceef0c44fd38a38"
	},
	{
		"id": "08c0b4dbbe97",
		"ts": "2026-09-05T17:06:07.669Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3305096.4,
		"hash": "08c0b4dbbe97787f482ef542a1f8378235ddab7cc8019b2a1bca25a09ee2aeae"
	},
	{
		"id": "399a16a3203f",
		"ts": "2026-09-05T17:06:07.907Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 857288.59,
		"hash": "399a16a3203f23be21eb1487813fab3d47e6539ebd91379ddc190b44d6a3d022"
	},
	{
		"id": "9c7188513ef4",
		"ts": "2026-09-05T17:06:08.143Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 177218.6,
		"hash": "9c7188513ef4d51b8000e6b71f0e4e5fd6391a0db3d77b330d51cb425d834802"
	},
	{
		"id": "d16d05c19c1e",
		"ts": "2026-09-05T17:06:08.378Z",
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
		"liquidityUsd": 563351.31,
		"hash": "d16d05c19c1e9c38d44ab192a6d430936bb9931618fb6fb2a57ff98ba4b33415"
	},
	{
		"id": "79b4b75213b9",
		"ts": "2026-09-05T17:06:08.611Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54092.54,
		"hash": "79b4b75213b9bfb2fcff6183f07f10fbadd18c75b8816fa698c51afb3293c7f4"
	},
	{
		"id": "369b38dbd3bd",
		"ts": "2026-09-05T17:06:08.911Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 142468.6,
		"hash": "369b38dbd3bd37cb040ee008b3da35414a7ef0196a90f4e1ae8d5caf33189853"
	},
	{
		"id": "c554844011d1",
		"ts": "2026-09-05T17:06:09.144Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1853651.96,
		"hash": "c554844011d157b59b196710e4fe9ade58f3ea0aa75894f8a740681d179cd773"
	},
	{
		"id": "d8d5c7cd0f45",
		"ts": "2026-09-05T17:06:09.377Z",
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
		"liquidityUsd": 916546.54,
		"hash": "d8d5c7cd0f458b20f2232abcae35c14d7ff5d9c37893d60af6d1cfbeb2b792be"
	},
	{
		"id": "2dd2ac508401",
		"ts": "2026-09-05T14:29:48.538Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116265438.71,
		"hash": "2dd2ac50840182f965087c97dc8ce04a3de0ab931f5de6d420bf031af16ce1da"
	},
	{
		"id": "cf4e7b7252e4",
		"ts": "2026-09-05T14:29:49.039Z",
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
		"liquidityUsd": 19128589.48,
		"hash": "cf4e7b7252e41cfc1dbb4b6e4da1cd8965d11b7e0d53fe47bfe778616a993cba"
	},
	{
		"id": "6570e54912b1",
		"ts": "2026-09-05T14:29:49.300Z",
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
		"liquidityUsd": 1025752.24,
		"hash": "6570e54912b1372de4ac1589202469d9c4e8f55bb7124e4eb53db8cec6932d37"
	},
	{
		"id": "f18586e0c400",
		"ts": "2026-09-05T14:29:49.558Z",
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
		"liquidityUsd": 29761534.69,
		"hash": "f18586e0c4002ce2f3f5d5806b535eaa2ddfd2d9212c4197b4034e89f37bc5bc"
	},
	{
		"id": "0446f0e8c2b8",
		"ts": "2026-09-05T14:29:49.808Z",
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
		"liquidityUsd": 4249277.29,
		"hash": "0446f0e8c2b84d643e957e72ca7db9fe4c7ab3a9b96294673a4b8cfacd32a41d"
	},
	{
		"id": "b5ac7f66a72e",
		"ts": "2026-09-05T14:29:50.083Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180818.57,
		"hash": "b5ac7f66a72e6e10db17e9d3c0de75975a45705d5e69246d9dbd606e1c2d9005"
	},
	{
		"id": "fa0280b3a928",
		"ts": "2026-09-05T14:29:50.336Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1182783.44,
		"hash": "fa0280b3a9287da03a72ff00a79617138ef21aa4cf56256081d6bb5b9059b31a"
	},
	{
		"id": "f16528949360",
		"ts": "2026-09-05T14:29:50.604Z",
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
		"liquidityUsd": 3055756.58,
		"hash": "f16528949360967bd46c017978c389a431eeaf8e4d0e6222f4304cc207a30339"
	},
	{
		"id": "f0c815fc2e3c",
		"ts": "2026-09-05T14:29:50.857Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1198046.34,
		"hash": "f0c815fc2e3c2dc8c6bd5a972f6bfc610faeb750d6b52437dfd859fde80ef604"
	},
	{
		"id": "932fac0dd28a",
		"ts": "2026-09-05T14:29:51.193Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 240496.01,
		"hash": "932fac0dd28abf1cefdd08252dda70197f4ca0af54a66d4cc4d4ecff80996753"
	},
	{
		"id": "de0c7fc59671",
		"ts": "2026-09-05T14:29:51.422Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 224642.18,
		"hash": "de0c7fc596717f29e79066dfa738a0c081906e13e733bdf6b933941897ccbb1c"
	},
	{
		"id": "6e829eb551b7",
		"ts": "2026-09-05T14:29:51.649Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3300452.75,
		"hash": "6e829eb551b7aad43eb2c6530edca517671b5620c6baf70b6735579852b31e58"
	},
	{
		"id": "d57e9249ed0b",
		"ts": "2026-09-05T14:29:51.875Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 175958.82,
		"hash": "d57e9249ed0b379a2e07215f5f97b13206d66c955950dc6e1c1317b152567421"
	},
	{
		"id": "7e0105208a98",
		"ts": "2026-09-05T14:29:52.102Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 857987.56,
		"hash": "7e0105208a9828a7f5972a64666863604492f26f357a94a31363dd6fdb624645"
	},
	{
		"id": "02a7f091f12e",
		"ts": "2026-09-05T14:29:52.330Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1282043.19,
		"hash": "02a7f091f12e1576111cbf92d7bf668ad223a5bcc7ec8c007a4a7fa39ff120bc"
	},
	{
		"id": "3dacdff27657",
		"ts": "2026-09-05T14:29:52.554Z",
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
		"liquidityUsd": 921907.18,
		"hash": "3dacdff27657db547160b4bdb5f4bbe8bbe906e53530730f75715e8a2a7adb64"
	},
	{
		"id": "9ecb3d70e307",
		"ts": "2026-09-05T14:29:52.783Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 154280.51,
		"hash": "9ecb3d70e3077c5250c9740abdba81551c6f67906374bb7737817c8615a3cc5c"
	},
	{
		"id": "4aa693c6aae7",
		"ts": "2026-09-05T14:29:53.008Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 147389.69,
		"hash": "4aa693c6aae7ea15191ff7ae98d8f0534510ab8de0e9fef51997ec101e70f79a"
	},
	{
		"id": "2904c993f790",
		"ts": "2026-09-05T14:29:53.234Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 990614.58,
		"hash": "2904c993f79043124d5f909ee7c472bc6e61fa1ea4d157cb3d91150a8a2e56d9"
	},
	{
		"id": "3f9cdc4b4c72",
		"ts": "2026-09-05T14:29:53.460Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 45473.73,
		"hash": "3f9cdc4b4c72b276e010787f25f671cdcc09159bc7abda94bf494d0c22d1741e"
	},
	{
		"id": "2991ee3c626b",
		"ts": "2026-09-05T11:35:02.332Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116248320.48,
		"hash": "2991ee3c626b283b95b0a74d9f7c05c7f872d6385c950c7309913ea15cfe639f"
	},
	{
		"id": "f75cc4566d1e",
		"ts": "2026-09-05T11:35:02.578Z",
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
		"liquidityUsd": 18698211.49,
		"hash": "f75cc4566d1e5a4f978d7f573f022f101bd80e2a8617e2f895262b3ab83aa61d"
	},
	{
		"id": "69ee592e9933",
		"ts": "2026-09-05T11:35:02.833Z",
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
		"liquidityUsd": 1025013.84,
		"hash": "69ee592e9933ed753d3f5043f648040215e505dca4c309966ce1392b03b5edfa"
	},
	{
		"id": "6f6821652866",
		"ts": "2026-09-05T11:35:03.084Z",
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
		"liquidityUsd": 29791602.58,
		"hash": "6f6821652866885e4ae390831e206be0a91318e882fff5e6be21a793d7545b00"
	},
	{
		"id": "467cd72d3e16",
		"ts": "2026-09-05T11:35:03.323Z",
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
		"liquidityUsd": 4220323.1,
		"hash": "467cd72d3e16aa986e81346cd7dbed51aab46cacc15ca2b5fd747895b0d28438"
	},
	{
		"id": "597ced5c46ac",
		"ts": "2026-09-05T11:35:03.610Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1171949.69,
		"hash": "597ced5c46ac8e565684d61fadfa8f78f8a644aa83f878e586964b67aed5bf9a"
	},
	{
		"id": "348202aec2f2",
		"ts": "2026-09-05T11:35:03.849Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2696046.62,
		"hash": "348202aec2f20d6bdd4ad7e29c2dc68f22344db5dedff6f9c31818358e90a07c"
	},
	{
		"id": "a183ca704c70",
		"ts": "2026-09-05T11:35:04.132Z",
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
		"liquidityUsd": 1531980.64,
		"hash": "a183ca704c703c0104b746adc72bb9112f5e244094773ca9a541b3a328f57ddb"
	},
	{
		"id": "2c5eba77da20",
		"ts": "2026-09-05T11:35:04.426Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1177880.74,
		"hash": "2c5eba77da2075ba3374af2ac4588b6e19a9115515fc55e793048c6185efb75f"
	}
]
