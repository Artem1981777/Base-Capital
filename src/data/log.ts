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
	"updatedAt": "2026-07-31T20:17:02.586Z",
	"tokensScored": 6609,
	"verdictsIssued": 6609,
	"safe": 5773,
	"risky": 513,
	"likelyRug": 323,
	"ticks": 403
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "c0ff02764c88",
		"ts": "2026-07-31T20:16:58.768Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110969817.71,
		"hash": "c0ff02764c88696f250fc515e82a5c56c4b926bea4bacb9271fdfab755b1b74a"
	},
	{
		"id": "e989fd67ac9c",
		"ts": "2026-07-31T20:16:59.407Z",
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
		"liquidityUsd": 16990591.63,
		"hash": "e989fd67ac9c5c47c57f19a43fc7e703eb7d0dfdc81fff2bb50065dc21a72e6d"
	},
	{
		"id": "5e6d2d15756f",
		"ts": "2026-07-31T20:16:59.641Z",
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
		"liquidityUsd": 1118568.02,
		"hash": "5e6d2d15756f3f6e54fd47a52f6f5d88c044d5f74a365662bd15cb9c10c5f112"
	},
	{
		"id": "4825290e36e6",
		"ts": "2026-07-31T20:16:59.878Z",
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
		"liquidityUsd": 25490248.69,
		"hash": "4825290e36e6adfceb79cea4a9fb23fa32f0f71d833b444a6aaf0b5015bedd7a"
	},
	{
		"id": "dee2f5a641fd",
		"ts": "2026-07-31T20:17:00.112Z",
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
		"liquidityUsd": 4646654,
		"hash": "dee2f5a641fdaa5db1d7bdc85badfa89e2466a5a31b9ace7503a8343a35aa53c"
	},
	{
		"id": "d8ecbc13ff77",
		"ts": "2026-07-31T20:17:00.348Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894018.71,
		"hash": "d8ecbc13ff778dbeef9ae20f7a06ddbc5cb6ef8f4e33ed8e080d963b24e27103"
	},
	{
		"id": "200100ad06b1",
		"ts": "2026-07-31T20:17:00.588Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25490248.69,
		"hash": "200100ad06b11168c1d01599468bb9179d109efb7931be13a2e20587b63f68f0"
	},
	{
		"id": "57e037ae9fec",
		"ts": "2026-07-31T20:17:00.920Z",
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
		"liquidityUsd": 4119691.95,
		"hash": "57e037ae9fece93084d42de81a2582ff01ea6798b96de04d0e262b0d1332c5ac"
	},
	{
		"id": "f33dda891447",
		"ts": "2026-07-31T20:17:01.156Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5414343.34,
		"hash": "f33dda891447b6a76116f417ab24a640b562fe1ac86c3ef9d8e55b52aa9d401e"
	},
	{
		"id": "25cfe5da4ec6",
		"ts": "2026-07-31T20:17:01.388Z",
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
		"liquidityUsd": 9351936.52,
		"hash": "25cfe5da4ec6ced86d7659288d65194a6c54ae4477d943ef0c78dcf30bf2460b"
	},
	{
		"id": "bac4f2a86f34",
		"ts": "2026-07-31T20:17:01.622Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1116936.79,
		"hash": "bac4f2a86f3491212ceebeae298824fc4e7eadfbdb25d66e54a8b83112aa2e28"
	},
	{
		"id": "22fb0cf43ffb",
		"ts": "2026-07-31T20:17:01.858Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4333199.78,
		"hash": "22fb0cf43ffb9869fc158dfb888c075f08923591d3ee773e792f920790b5a59d"
	},
	{
		"id": "ac55f8f99d36",
		"ts": "2026-07-31T20:17:02.097Z",
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
		"liquidityUsd": 4840563.74,
		"hash": "ac55f8f99d362b6c5009468ee4aacfa5370d1fe524a4690208dcd26daaf930b8"
	},
	{
		"id": "86a715183e27",
		"ts": "2026-07-31T20:17:02.367Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 181548.02,
		"hash": "86a715183e2759cd2849c64a588a577e19ed027c9a5b5e41977fc383595bbb25"
	},
	{
		"id": "fdf63eda30d3",
		"ts": "2026-07-31T20:17:02.586Z",
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
		"liquidityUsd": 730962.75,
		"hash": "fdf63eda30d3ea259824f0b0e0510d8d8a5d78667a358e7fb56e5de02697dd7d"
	},
	{
		"id": "d1d963b3004a",
		"ts": "2026-07-31T18:17:24.177Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111232523.83,
		"hash": "d1d963b3004a463041d4dcaed78a66a7d92cbc60bd8f62a4594d124d771764e7"
	},
	{
		"id": "b6d402db384f",
		"ts": "2026-07-31T18:17:24.631Z",
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
		"liquidityUsd": 14236531.07,
		"hash": "b6d402db384f493548b6dfecff4b712612e61c64a9e56b4f511dab26fa338742"
	},
	{
		"id": "50a94e100190",
		"ts": "2026-07-31T18:17:24.877Z",
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
		"liquidityUsd": 1126941.36,
		"hash": "50a94e100190ca7fe81600d4e9c555767564c1ec66fa3fa969b37f3001cc61c2"
	},
	{
		"id": "7ed8d50e408d",
		"ts": "2026-07-31T18:17:25.132Z",
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
		"liquidityUsd": 25508128.62,
		"hash": "7ed8d50e408d554139368bb1cde8af2f7d20ad9ee8ca9fe2ed246d3eda68fe36"
	},
	{
		"id": "6bdcb8b17d7c",
		"ts": "2026-07-31T18:17:25.586Z",
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
		"liquidityUsd": 4693597.3,
		"hash": "6bdcb8b17d7c0fe889fbabe6fcec8c425de4f2d0650a89287d6826cb111dcbad"
	},
	{
		"id": "daa8f8620182",
		"ts": "2026-07-31T18:17:25.840Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894304.26,
		"hash": "daa8f86201827b23bc89b6e33717011e5cc9d4d4cdcb967859f247dba62bb7a5"
	},
	{
		"id": "8963a560790b",
		"ts": "2026-07-31T18:17:26.087Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25508128.62,
		"hash": "8963a560790b3d226538b615a52216c72501f2e298250b8da385d9a915446285"
	},
	{
		"id": "cb135288702b",
		"ts": "2026-07-31T18:17:26.344Z",
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
		"liquidityUsd": 4127439.27,
		"hash": "cb135288702b9dff87b1849baa3515ac9439127e24605283a986d06d2320b828"
	},
	{
		"id": "443ef8f2928b",
		"ts": "2026-07-31T18:17:26.588Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5293246.21,
		"hash": "443ef8f2928b051f1a3ec814f081c55ce31e8babf315a918763f57f168a8f107"
	},
	{
		"id": "e146e7d2aa5e",
		"ts": "2026-07-31T18:17:26.839Z",
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
		"liquidityUsd": 9399873.83,
		"hash": "e146e7d2aa5ee08cbd0f6dab6970f6e512e6941cbf0bf3dfd57768452afb62bf"
	},
	{
		"id": "bce142eca6d3",
		"ts": "2026-07-31T18:17:27.068Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4350235.51,
		"hash": "bce142eca6d3e14f0575bdd69db9bffae3204eb087d834e41b6cd4b9219cd34c"
	},
	{
		"id": "1e638117f1c7",
		"ts": "2026-07-31T18:17:27.295Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 709650.6,
		"hash": "1e638117f1c7dd44207c5584167ab8568066594a4a991c24b79fa10d9e5dc52a"
	},
	{
		"id": "dc06097f3138",
		"ts": "2026-07-31T18:17:27.525Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4845023.81,
		"hash": "dc06097f313809f93db7fdfd4fea98ebfc04e51a97a74a0bdb2cd6bbc80cff7e"
	},
	{
		"id": "46220d96f254",
		"ts": "2026-07-31T18:17:27.755Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185472.43,
		"hash": "46220d96f254beee376af89613781a493e81490f79acc4f0b2232489212fa0cd"
	},
	{
		"id": "d7487ba0140c",
		"ts": "2026-07-31T18:17:27.983Z",
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
		"liquidityUsd": 721630.35,
		"hash": "d7487ba0140c36921d6d9d0e5a2c5c298c9d419fced7734f783d73d527a18bcf"
	},
	{
		"id": "0ccd28ff4528",
		"ts": "2026-07-31T18:17:28.219Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 974366.16,
		"hash": "0ccd28ff452836b762f9170350b5ddb0b95a5a7d57045708c94805ec59e6a1f3"
	},
	{
		"id": "b4e8d10d46e1",
		"ts": "2026-07-31T18:17:28.451Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 548681.31,
		"hash": "b4e8d10d46e1c95e140328dd658402ef965e4d4630d3d03f08019383aa332507"
	},
	{
		"id": "f5da6ca2c3d4",
		"ts": "2026-07-31T16:42:54.078Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110644714.85,
		"hash": "f5da6ca2c3d4ea480e56c21a1bfd7759e452aabe5230939d95d2edf44f5fe5cf"
	},
	{
		"id": "f49005a64db7",
		"ts": "2026-07-31T16:42:54.334Z",
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
		"liquidityUsd": 15497786.14,
		"hash": "f49005a64db7243f9233761b71457346a4de2ccd3a2e700ecc2f89d4badbcd9b"
	},
	{
		"id": "5551b8f20aed",
		"ts": "2026-07-31T16:42:54.590Z",
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
		"liquidityUsd": 1133152.88,
		"hash": "5551b8f20aedf125903293061908a8c41d12b5eb89ce26574711afa8fe8adc16"
	},
	{
		"id": "f30e0bd3ca2a",
		"ts": "2026-07-31T16:42:54.844Z",
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
		"liquidityUsd": 25512246.16,
		"hash": "f30e0bd3ca2ab61e1e39050bee0ea3583a54f90688b8198d16eb3a4760ebccf4"
	},
	{
		"id": "09ae8db2c048",
		"ts": "2026-07-31T16:42:55.090Z",
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
		"liquidityUsd": 4665052.25,
		"hash": "09ae8db2c04828647f7a0cc1be8fbe8842778bb0497cb40e048b7b1a75f954b3"
	},
	{
		"id": "c7d2332b4da7",
		"ts": "2026-07-31T16:42:55.352Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893148.3,
		"hash": "c7d2332b4da7eac82521e27c963eda4574a83dc91a8c55547251f34896cb7ac7"
	},
	{
		"id": "a3e1f89430bf",
		"ts": "2026-07-31T16:42:55.592Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25512246.16,
		"hash": "a3e1f89430bf35b8c66b04e2958c430b6b5ea5c08be2684007e40bca4b9212ce"
	},
	{
		"id": "e6140b1018a9",
		"ts": "2026-07-31T16:42:55.834Z",
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
		"liquidityUsd": 4107019.57,
		"hash": "e6140b1018a9e25878c959ea42ed1bedf9bb10bfc47e7a1ae58948c7acba57d5"
	},
	{
		"id": "ba0d137ddca8",
		"ts": "2026-07-31T16:42:56.087Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5284949.91,
		"hash": "ba0d137ddca88d2be03fd28a7b09791cd2250d235ee5057174600f199048e687"
	},
	{
		"id": "ac2eb71c8528",
		"ts": "2026-07-31T16:42:56.331Z",
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
		"liquidityUsd": 9331563.27,
		"hash": "ac2eb71c85283ee0da3f446f89a4f78c0e8f9c8b9b6e8bab63b1a73ebdd762b1"
	},
	{
		"id": "5b53d116edf9",
		"ts": "2026-07-31T16:42:56.571Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 703504.86,
		"hash": "5b53d116edf93d3dea5cd5a04df4e99c4c107ac69fdb8981d169aa0f16045e92"
	},
	{
		"id": "3329a18cdfd5",
		"ts": "2026-07-31T16:42:56.799Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 538285.16,
		"hash": "3329a18cdfd5db965e2eb0dc92c2dcfcdb1d64d2c3ed102e563979f02650a17d"
	},
	{
		"id": "585e2f42e448",
		"ts": "2026-07-31T16:42:57.025Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4305540.45,
		"hash": "585e2f42e4484877b392dd6905fdf09eb6b5248a7b06607f311335b8d1361f15"
	},
	{
		"id": "488b97f0fb10",
		"ts": "2026-07-31T16:42:57.267Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 734277.79,
		"hash": "488b97f0fb104be37221d5f319692389826da05b41ea970c415af26ed9df6031"
	},
	{
		"id": "26b9e27e7702",
		"ts": "2026-07-31T16:42:57.496Z",
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
		"liquidityUsd": 719023.32,
		"hash": "26b9e27e7702414030d588ba53869679d7273a5fa710a6dc5ee872f621e69176"
	},
	{
		"id": "b0da5dc4552f",
		"ts": "2026-07-31T16:42:57.723Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5068659.49,
		"hash": "b0da5dc4552fba892d9aa66564e0145d0a4f523e48b28dd58531bfddd76805e2"
	},
	{
		"id": "b023c0f70831",
		"ts": "2026-07-31T16:42:57.961Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185460.9,
		"hash": "b023c0f70831b4fc9c4263081b256f4ea693a470e3d8fbc23d8d73aa19b992e4"
	},
	{
		"id": "e9715de12853",
		"ts": "2026-07-31T14:01:43.446Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110754402.9,
		"hash": "e9715de12853490e59244aaeefca43ea19e84c814f6119bb548ce18b09f5ecbb"
	},
	{
		"id": "b95e6b7e799c",
		"ts": "2026-07-31T14:01:43.887Z",
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
		"liquidityUsd": 16416707.31,
		"hash": "b95e6b7e799c517e99c47f0e7bed5a9c0404d0d67f1fc6b5181fbeeb37563363"
	},
	{
		"id": "27c857d8deef",
		"ts": "2026-07-31T14:01:44.132Z",
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
		"liquidityUsd": 1140870.32,
		"hash": "27c857d8deeff849385b767656de20ef4869562eb943c478f3fc90a068003a41"
	},
	{
		"id": "c5c0fd44dd4d",
		"ts": "2026-07-31T14:01:44.374Z",
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
		"liquidityUsd": 25490952.35,
		"hash": "c5c0fd44dd4dfef644738af6f85440d0223cc869d25b3854c89c39ab41ad12c3"
	},
	{
		"id": "998b39fa86f6",
		"ts": "2026-07-31T14:01:44.617Z",
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
		"liquidityUsd": 4696523.66,
		"hash": "998b39fa86f68bc9e496bf7fc872836945a9c1a19c4d8c740568730a7f10f7fa"
	},
	{
		"id": "f7b88e152309",
		"ts": "2026-07-31T14:01:44.858Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895602.83,
		"hash": "f7b88e15230903676e63cf4709e1109610c75852e1a8b67883f93ef15d0f5fd4"
	},
	{
		"id": "373efbb16cf1",
		"ts": "2026-07-31T14:01:45.100Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25490952.35,
		"hash": "373efbb16cf17b13f3a3eb6d597416cd57501b1a89271316260992f879ea9be0"
	},
	{
		"id": "bb09573c5997",
		"ts": "2026-07-31T14:01:45.342Z",
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
		"liquidityUsd": 4122073.15,
		"hash": "bb09573c599777ab3bf0324d1d1ae56cb0d1e8c85b53a9791c90762c4e1d7463"
	},
	{
		"id": "5f24efa61c29",
		"ts": "2026-07-31T14:01:45.581Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5274364.16,
		"hash": "5f24efa61c29f1cf9c95ac0ec4e36ad366f1ee5636abaf88c97e35a67d9b0b58"
	},
	{
		"id": "ef8434beab04",
		"ts": "2026-07-31T14:01:45.821Z",
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
		"liquidityUsd": 9345911.51,
		"hash": "ef8434beab0454510fd127652ed634fdc0812a9fdaf1c31361fc4a74bda8c458"
	},
	{
		"id": "430bc0983c9d",
		"ts": "2026-07-31T14:01:46.048Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 639838.44,
		"hash": "430bc0983c9d67f96840ca1261865ef5dfb1ecc80753e83f2868ba143023e28f"
	},
	{
		"id": "963ceb7475cc",
		"ts": "2026-07-31T14:01:46.274Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 742951.65,
		"hash": "963ceb7475ccf99dcc8c39f4459e6fef3416e0721d4925f4699bccffb4447f0d"
	},
	{
		"id": "40a1cd22d832",
		"ts": "2026-07-31T14:01:46.501Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1758067.85,
		"hash": "40a1cd22d8329ad6f6124d3179b93a8b625c7fb539529c36fff8709932e43964"
	},
	{
		"id": "3821585960d6",
		"ts": "2026-07-31T14:01:46.730Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4278454.67,
		"hash": "3821585960d6f6aaf831ebf4f86753a9cf5f8aa8302cf6175f16eb9f8bcaccc0"
	},
	{
		"id": "78fe075f61e9",
		"ts": "2026-07-31T14:01:46.955Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 762004.79,
		"hash": "78fe075f61e9d6b66c82a5441a7b50ba501feb5a7317c914accb73c9f190ae39"
	},
	{
		"id": "7a0aae2caf38",
		"ts": "2026-07-31T14:01:47.184Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4970795.76,
		"hash": "7a0aae2caf38eea791ec36bd9518f6770eb3140bf0e253700ba7de981969eb60"
	},
	{
		"id": "77ccc92b6806",
		"ts": "2026-07-31T14:01:47.411Z",
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
		"liquidityUsd": 746670.34,
		"hash": "77ccc92b6806a1cea16f8b71992f474e5e311efdd4c568524776c177f79b4f0b"
	},
	{
		"id": "245648b70f0e",
		"ts": "2026-07-31T11:56:13.873Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111345865.44,
		"hash": "245648b70f0e94af09cc20e4b11f88b47e13161ed3d68645861235bc14e41920"
	},
	{
		"id": "f1309c71f5eb",
		"ts": "2026-07-31T11:56:14.308Z",
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
		"liquidityUsd": 15901310.51,
		"hash": "f1309c71f5ebbc4ea06ce9423561082bf07de21b2654fcd502232d982f506fff"
	},
	{
		"id": "caf33f29e33f",
		"ts": "2026-07-31T11:56:14.746Z",
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
		"liquidityUsd": 1118330.62,
		"hash": "caf33f29e33f77f1851cae90969f198407154d9369438b7cbc9eb9c7e859cbbe"
	},
	{
		"id": "b2e7fe6fe506",
		"ts": "2026-07-31T11:56:14.977Z",
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
		"liquidityUsd": 25558682.63,
		"hash": "b2e7fe6fe50658f376e6dedc63033f5c63d7ad1e6827ceefe2fefe9921f23fe6"
	},
	{
		"id": "462dd6fc26a6",
		"ts": "2026-07-31T11:56:15.213Z",
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
		"liquidityUsd": 4733407.73,
		"hash": "462dd6fc26a6bf03d649942b6e5010712a5433de20f10e0986b09930ed296d8c"
	},
	{
		"id": "b4b1b706e779",
		"ts": "2026-07-31T11:56:15.448Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 902499.74,
		"hash": "b4b1b706e779e6dad461f95855edd903818cf64b4136f0ba6d3fcc6a53307c3a"
	},
	{
		"id": "5c3374cd6c3f",
		"ts": "2026-07-31T11:56:15.683Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25558682.63,
		"hash": "5c3374cd6c3f81be544842aafe62302fb9bce08b6b23efeccd510087a0a32847"
	},
	{
		"id": "8337fa9c5046",
		"ts": "2026-07-31T11:56:15.916Z",
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
		"liquidityUsd": 4154976.43,
		"hash": "8337fa9c5046bd4d0a7c0ad64b488a081e4724ba859debbe9e6487ffc7588765"
	},
	{
		"id": "fad5e9420047",
		"ts": "2026-07-31T11:56:16.150Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5337008.76,
		"hash": "fad5e9420047de972cff987295b96fcf18206c3538f8fbee782f805fa9b97399"
	},
	{
		"id": "0daf3fb621b7",
		"ts": "2026-07-31T11:56:16.379Z",
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
		"liquidityUsd": 9446641.59,
		"hash": "0daf3fb621b78f8b76c5fedfc8b21071c99b897a1584b24aec4b041fb2634d98"
	},
	{
		"id": "02683b439769",
		"ts": "2026-07-31T11:56:16.598Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 664006.33,
		"hash": "02683b4397694218c20dac7a36f7fc3520af6dc3bebecbbc29cd47bfbc5eaf76"
	},
	{
		"id": "ffa09e98a01a",
		"ts": "2026-07-31T11:56:16.815Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 710878.97,
		"hash": "ffa09e98a01a1533c443d429b1ae674056c9896d5ce984343be4d484142c5c9f"
	},
	{
		"id": "443ad4e2f656",
		"ts": "2026-07-31T11:56:17.034Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1762657.65,
		"hash": "443ad4e2f656a8e22e26065c9541c4a0c5b230935db9d54b7db7b2071078f35e"
	},
	{
		"id": "528c8f0329d1",
		"ts": "2026-07-31T11:56:17.250Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4375016.22,
		"hash": "528c8f0329d12b76087367744adbbac1a2069e034e5319cbd2b659187952dc28"
	},
	{
		"id": "fd1377aae5c7",
		"ts": "2026-07-31T11:56:17.469Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4915377.07,
		"hash": "fd1377aae5c721fbb7f303cf0563b7f83e4e06cef8ce7e7e93aca82b741f00c6"
	},
	{
		"id": "93366e02d839",
		"ts": "2026-07-31T11:56:17.686Z",
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
		"liquidityUsd": 739008.78,
		"hash": "93366e02d839e778b68c3955cc33c32144c7e35b662c1906672ade9a8c8bf4e6"
	},
	{
		"id": "cd8aefda0a9c",
		"ts": "2026-07-31T11:56:17.905Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 878732.17,
		"hash": "cd8aefda0a9c3a7f3069c75fc9a9e76ea11cbda8d18bb8934e6f8c717fb6d41f"
	},
	{
		"id": "6dbac8b81c48",
		"ts": "2026-07-31T09:40:54.588Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111540430.49,
		"hash": "6dbac8b81c488aa79c21b569fde6fb1c893af6d09f095e74fa5c7c1fe10911c0"
	},
	{
		"id": "48fcda288902",
		"ts": "2026-07-31T09:40:55.063Z",
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
		"liquidityUsd": 15913158.09,
		"hash": "48fcda288902bed32d5493c46af413d444123778ae159bb79e8deca6da5c2e9f"
	},
	{
		"id": "11bf02b0b612",
		"ts": "2026-07-31T09:40:55.504Z",
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
		"liquidityUsd": 1120999.94,
		"hash": "11bf02b0b612a82d4fafd70d07d197a3738b3f61aec713aa0b91db9ed34fd7bf"
	},
	{
		"id": "7c363a875661",
		"ts": "2026-07-31T09:40:55.742Z",
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
		"liquidityUsd": 25573466.55,
		"hash": "7c363a875661010ef3d34975770dfec93ddd5ae39469e8f163f34ae1956e5ba7"
	},
	{
		"id": "cacc13720472",
		"ts": "2026-07-31T09:40:55.980Z",
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
		"liquidityUsd": 4714690.36,
		"hash": "cacc1372047278c1fd8f27594924e615d828700b9a831f3334cc75bd8ad4eadd"
	},
	{
		"id": "27e801457155",
		"ts": "2026-07-31T09:40:56.215Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 898812.98,
		"hash": "27e80145715576d81729f081f91f1e2b9a81308cabfb7e66aa604e03e21f51cd"
	},
	{
		"id": "8329ceaa7180",
		"ts": "2026-07-31T09:40:56.451Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25573466.55,
		"hash": "8329ceaa718068af00595ddb4a38e616e9398ae1ba3976d15a2c47b92bb48aab"
	},
	{
		"id": "07283fd0f7d6",
		"ts": "2026-07-31T09:40:56.690Z",
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
		"liquidityUsd": 4175143.26,
		"hash": "07283fd0f7d6646322ec7339db0ec4b2c9face1cc623554b744de3c3db54589b"
	},
	{
		"id": "e91cc20a349f",
		"ts": "2026-07-31T09:40:56.936Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5505258.88,
		"hash": "e91cc20a349faabf4dd00ff58eabc24fbc93dd22938d036e57ad0a57c6b33a4b"
	},
	{
		"id": "33c3dba0c47e",
		"ts": "2026-07-31T09:40:57.172Z",
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
		"liquidityUsd": 9501190.06,
		"hash": "33c3dba0c47e350cbce93ac00644e529b0afdc8b6440a1bf091f4aa472c6c697"
	},
	{
		"id": "157de4d213f6",
		"ts": "2026-07-31T09:40:57.394Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 633644.81,
		"hash": "157de4d213f69e92d3611fa5231d19b1c273784538ba0e2ee0dfc293d129eb6d"
	},
	{
		"id": "f2dcb6380c99",
		"ts": "2026-07-31T09:40:57.615Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 704920.54,
		"hash": "f2dcb6380c999539d66f2cde36f30581161f5878a6cd5c001c4eacf1f9f51d08"
	},
	{
		"id": "d12a9df72858",
		"ts": "2026-07-31T09:40:57.837Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1765619.88,
		"hash": "d12a9df72858a81cb08811e68a82a7009e4b1fe9c9bff4dc915476f4f2e839d6"
	},
	{
		"id": "7aeb9a643ea1",
		"ts": "2026-07-31T09:40:58.058Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4359127.89,
		"hash": "7aeb9a643ea1b912e370e636a7b6f873a166ff7eb79843b659dacb82772d30b9"
	},
	{
		"id": "e8ad46e615d1",
		"ts": "2026-07-31T09:40:58.296Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4858370.96,
		"hash": "e8ad46e615d17ac450eaff4b2258d72072e5c81124e7a4c5145c0461328a8c33"
	},
	{
		"id": "82fc2f22a529",
		"ts": "2026-07-31T09:40:58.516Z",
		"symbol": "msETH",
		"token": "0x7Ba6F01772924a82D9626c126347A28299E98c98",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14273735.46,
		"hash": "82fc2f22a529c4b48f2e3eccb1fd8cb0c9874092c42cbd0900784c0fa84a800c"
	},
	{
		"id": "ab99cf989b8c",
		"ts": "2026-07-31T09:40:58.739Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 746272.51,
		"hash": "ab99cf989b8cde0e81cfc7d516203639a1c1ac3f63261ee049e04bd357d6d926"
	},
	{
		"id": "ce6909d5a874",
		"ts": "2026-07-31T06:08:47.749Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111900683.85,
		"hash": "ce6909d5a874a830d8bf72414f7885cec491b9faf0d4883589450eb1f55938c7"
	},
	{
		"id": "ecffd00772cf",
		"ts": "2026-07-31T06:08:48.123Z",
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
		"liquidityUsd": 16355500.46,
		"hash": "ecffd00772cf46f44e78daccb8d15d65db3441c368b46b988070626976d43316"
	},
	{
		"id": "cd406154a2b1",
		"ts": "2026-07-31T06:08:48.331Z",
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
		"liquidityUsd": 1126784.49,
		"hash": "cd406154a2b15a9c7ceb71b9b6deb7dba286490ccbee3a3b712f3d7a62645849"
	},
	{
		"id": "d73515af1380",
		"ts": "2026-07-31T06:08:48.539Z",
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
		"liquidityUsd": 25734778.83,
		"hash": "d73515af13806c40db953f98672f2da2efa04b47e97310a23e4e4040531f009c"
	},
	{
		"id": "b7dd5d71e290",
		"ts": "2026-07-31T06:08:48.746Z",
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
		"liquidityUsd": 4757788.61,
		"hash": "b7dd5d71e2904b3b21a8fcce8a7a6dededca0dd453bc0f866ed1171310842560"
	},
	{
		"id": "911330acf06a",
		"ts": "2026-07-31T06:08:48.952Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 899046.83,
		"hash": "911330acf06a70dc59ebcf09615351a3493467522c8865bb9b5aaa540dd2d6f8"
	},
	{
		"id": "126f9b9b8cd2",
		"ts": "2026-07-31T06:08:49.173Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25734779.63,
		"hash": "126f9b9b8cd26d24c4c8ff73d3876e400d092938719d954a940f911b7d50903d"
	},
	{
		"id": "14c5570a4ac7",
		"ts": "2026-07-31T06:08:49.388Z",
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
		"liquidityUsd": 4232505.75,
		"hash": "14c5570a4ac7060270132b79fc9f91f6a75537257e2a1f7421d9c8890ec826ec"
	},
	{
		"id": "adbc9165f4dc",
		"ts": "2026-07-31T06:08:49.598Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5867991.06,
		"hash": "adbc9165f4dc8ff001f7c95f2b153b4dcdf3f1d64751c198d634117bb33cb7da"
	},
	{
		"id": "d0b19c4d2244",
		"ts": "2026-07-31T06:08:49.806Z",
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
		"liquidityUsd": 9596325.01,
		"hash": "d0b19c4d22446c776061d0856ec617fb0ff4bfdebcd5f5a8d24d826ab9209413"
	},
	{
		"id": "ab9da5a847b5",
		"ts": "2026-07-31T06:08:50.004Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579921.27,
		"hash": "ab9da5a847b5b3404a952ec79d9d46b610bad3281180c3c95b343a721087c206"
	},
	{
		"id": "18d3584a99a7",
		"ts": "2026-07-31T06:08:50.202Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1780790.09,
		"hash": "18d3584a99a79f619dc23dd2e72bb008b4a1c4c021531f51a42ece7ece3995c8"
	},
	{
		"id": "a056f7a568ab",
		"ts": "2026-07-31T06:08:50.396Z",
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
		"liquidityUsd": 739609.28,
		"hash": "a056f7a568ab52531a6cfa5d8f27e510c316c243d7096f035a57c09d0201d2d7"
	},
	{
		"id": "5d9a6e413251",
		"ts": "2026-07-31T06:08:50.591Z",
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
		"liquidityUsd": 1122648.07,
		"hash": "5d9a6e4132510bff40d021019102020a72d6a57df7565c03dac7b782f9660697"
	},
	{
		"id": "197814c65415",
		"ts": "2026-07-31T06:08:50.784Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4408960.72,
		"hash": "197814c65415385b400ad9d93020d413396938192a7cbfbaa9db71a0852ac677"
	},
	{
		"id": "2cf0d37ad6b7",
		"ts": "2026-07-31T02:28:02.801Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112182641.57,
		"hash": "2cf0d37ad6b77459307b06bd6d3eff610078353fbee5af682b589bc02b3e4b01"
	},
	{
		"id": "2dc175c290d9",
		"ts": "2026-07-31T02:28:03.250Z",
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
		"liquidityUsd": 16926175.65,
		"hash": "2dc175c290d91398a71ea1d91120b2877a472d491093e8e69013cc17d83a44d6"
	},
	{
		"id": "41147c16c85c",
		"ts": "2026-07-31T02:28:03.488Z",
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
		"liquidityUsd": 1135179.57,
		"hash": "41147c16c85c88c56785160fa7d04b31fb5beccd3dda3c2e52a8f4db2a2be97e"
	},
	{
		"id": "7315583e41c7",
		"ts": "2026-07-31T02:28:03.718Z",
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
		"liquidityUsd": 25493310.83,
		"hash": "7315583e41c701118f668bd27e875f14cb559fb1c4c6d9ce9a6d610810564bd1"
	},
	{
		"id": "342f34046ebf",
		"ts": "2026-07-31T02:28:04.168Z",
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
		"liquidityUsd": 4763469.1,
		"hash": "342f34046ebfeb3459b89ec248314d59438e60becb83ae1500167a45daa65146"
	},
	{
		"id": "9f6640dac568",
		"ts": "2026-07-31T02:28:04.404Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 910627.38,
		"hash": "9f6640dac568cf3ae26071ee0415fe3cd4df9c7ae1a21deb189b3704b4dab37d"
	},
	{
		"id": "fb6ddb878231",
		"ts": "2026-07-31T02:28:04.635Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25493310.83,
		"hash": "fb6ddb8782317cb0dfbb8b33c985ddb7717075e2476d025109a888399e33019d"
	},
	{
		"id": "2736ca9b2d09",
		"ts": "2026-07-31T02:28:04.868Z",
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
		"liquidityUsd": 4272468.59,
		"hash": "2736ca9b2d094ff10c66d41c9d540356aae5fc0c4eb49a4b107017e941919e16"
	},
	{
		"id": "d1a018149c97",
		"ts": "2026-07-31T02:28:05.107Z",
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
		"liquidityUsd": 9619938.3,
		"hash": "d1a018149c97e6e58ebc3f57c1304957c9c9536d39938c25f641d096731542df"
	},
	{
		"id": "39360eeb0276",
		"ts": "2026-07-31T02:28:05.345Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"modifiable_tax",
			"has_blacklist",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 604207.15,
		"hash": "39360eeb0276c1c349c6aa4a0b7ea38be81cf71570eed5a4def93542d298ea84"
	},
	{
		"id": "b10f26367904",
		"ts": "2026-07-31T02:28:05.562Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5958195.9,
		"hash": "b10f2636790437fc76af9bb215b829a21179bf5a0aabd2e08d30d0cd0e8ecef0"
	},
	{
		"id": "4dd9455b3074",
		"ts": "2026-07-31T02:28:05.780Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1777805.01,
		"hash": "4dd9455b307479fca028644b5ab50ae70676d63af8aff787dd4c129acbc8649e"
	},
	{
		"id": "7a527dfb3764",
		"ts": "2026-07-31T02:28:06.005Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 772460.19,
		"hash": "7a527dfb3764f38d4f70c4f2ba1053c864a12c364cdf1fe82bedb2cd67eb8489"
	},
	{
		"id": "60eb1843c35b",
		"ts": "2026-07-31T02:28:06.225Z",
		"symbol": "msETH",
		"token": "0x7Ba6F01772924a82D9626c126347A28299E98c98",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 15221769.92,
		"hash": "60eb1843c35bdc6b42569e766723fb7ee94b0018d7599e5245e5874b463117aa"
	},
	{
		"id": "5d013057bd2d",
		"ts": "2026-07-31T02:28:06.443Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4447718.76,
		"hash": "5d013057bd2dc5030672021182bfc2f00b72cfeed30aeb3e8c70d228ea539dc1"
	},
	{
		"id": "2f9c18dfff7f",
		"ts": "2026-07-30T23:01:56.071Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112611684.86,
		"hash": "2f9c18dfff7fff54f698d7f1778751e56d30fac665f5147e3e2f659d25b0e54d"
	},
	{
		"id": "a5e076ecb242",
		"ts": "2026-07-30T23:01:56.266Z",
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
		"liquidityUsd": 16973993.41,
		"hash": "a5e076ecb2421b7d57644db7d03a5c43cd97bffc2b6f860f47eb18fe0e49e503"
	},
	{
		"id": "4492526d7cca",
		"ts": "2026-07-30T23:01:56.612Z",
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
		"liquidityUsd": 1148857.63,
		"hash": "4492526d7cca1152dae92b404b9c7c4a253cc61067f12d1127bc13fc883849a4"
	},
	{
		"id": "b8b047f0aa84",
		"ts": "2026-07-30T23:01:56.800Z",
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
		"liquidityUsd": 25850500.97,
		"hash": "b8b047f0aa844bef89be63ecd610068271f6ae04a3da00a0d18b2653226ed096"
	},
	{
		"id": "3e41aa039caf",
		"ts": "2026-07-30T23:01:56.990Z",
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
		"liquidityUsd": 4830526.05,
		"hash": "3e41aa039caf0c08f851d223de29b4c05e257971a777cfae46001f4b1df6dc11"
	},
	{
		"id": "48983b2dbf21",
		"ts": "2026-07-30T23:01:57.233Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 907927.91,
		"hash": "48983b2dbf21ec1c9b1bf56be89314a9f825b9e53fab2e6de8c8f8be81ea38b8"
	},
	{
		"id": "003c4688e02f",
		"ts": "2026-07-30T23:01:57.426Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25850500.97,
		"hash": "003c4688e02f8e3dd2d4dc9419725117bceb8d657f95771ae0725717be7433bc"
	},
	{
		"id": "4f7c1785be5a",
		"ts": "2026-07-30T23:01:57.633Z",
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
		"liquidityUsd": 4169803.8,
		"hash": "4f7c1785be5aa7d9d283400aceeb498e37abc97b07dc5d88b477519833bf851d"
	},
	{
		"id": "437ba291acca",
		"ts": "2026-07-30T23:01:57.833Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"modifiable_tax",
			"has_blacklist",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 632192.11,
		"hash": "437ba291accaa208afbb9ca39fdfb32ac77e0d931997ce36d80e48a413ba55ad"
	},
	{
		"id": "0d625c717528",
		"ts": "2026-07-30T23:01:58.038Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1794813.79,
		"hash": "0d625c717528986c02b17eb25be5444713b287721e93a7f90e8feee6073135f6"
	},
	{
		"id": "a3fa4d63969d",
		"ts": "2026-07-30T23:01:58.231Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9643640.85,
		"hash": "a3fa4d63969d300523f25ea68c8bef8dc5480f19a7038e5f8c942cf6ac73a78c"
	},
	{
		"id": "fca0c56199a8",
		"ts": "2026-07-30T23:01:58.436Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 783679.13,
		"hash": "fca0c56199a8c532e45ca427ae6ea854dddec5692a25f24f2c649d0fd33fff91"
	},
	{
		"id": "f443bacb2baf",
		"ts": "2026-07-30T23:01:58.629Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6583433.03,
		"hash": "f443bacb2baffd18a7c1efe3a6bf3b621f2941fe55b82566465725ae470bdb3b"
	},
	{
		"id": "f2e0772fd689",
		"ts": "2026-07-30T23:01:58.826Z",
		"symbol": "msETH",
		"token": "0x7Ba6F01772924a82D9626c126347A28299E98c98",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 16041275.47,
		"hash": "f2e0772fd689c1fd3a4a9b8aa591f486936f7b3623a2361c912e5f2b2871471c"
	},
	{
		"id": "ed79ce0d6219",
		"ts": "2026-07-30T23:01:59.015Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4520471.1,
		"hash": "ed79ce0d6219961fd07d119ddb58aae7a0fcf29cc78691c3cb7b10e40076868f"
	},
	{
		"id": "856ed4fde59d",
		"ts": "2026-07-30T21:04:33.925Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112462860.26,
		"hash": "856ed4fde59d03911a8e506a1fe5b004cd9e2b1a2063745eea2bf215446d7824"
	},
	{
		"id": "79be82fb2b95",
		"ts": "2026-07-30T21:04:34.371Z",
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
		"liquidityUsd": 16686492.42,
		"hash": "79be82fb2b9541aef4d0830e95e00bc40ce29d623d14bb6ef7ed04bbfd703e3d"
	},
	{
		"id": "9816b96c7274",
		"ts": "2026-07-30T21:04:34.606Z",
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
		"liquidityUsd": 1146821.56,
		"hash": "9816b96c72740b6c4f591dded74f43b539374f8598c7bcc49bf18331360f0426"
	},
	{
		"id": "7979c2760bfa",
		"ts": "2026-07-30T21:04:34.850Z",
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
		"liquidityUsd": 25935247.05,
		"hash": "7979c2760bfaab7d1fa66903682110a80e5aaf5fa13d9699a2606ec1473408fb"
	},
	{
		"id": "014e57da49d3",
		"ts": "2026-07-30T21:04:35.086Z",
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
		"liquidityUsd": 4915847.69,
		"hash": "014e57da49d3277cf2269f461d617ee56f9bac545d5fab0a752877b741e655a4"
	},
	{
		"id": "3acfc66f8014",
		"ts": "2026-07-30T21:04:35.321Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 908536.17,
		"hash": "3acfc66f8014662e01036894cd61c83b726ad5c7fe064df0021f0cc197adce69"
	},
	{
		"id": "7e1586c3eff3",
		"ts": "2026-07-30T21:04:35.618Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25935247.05,
		"hash": "7e1586c3eff3e4bda5b4641b4fdf04ed8b4ae4bb29a1bcdde1ff994a93da002c"
	},
	{
		"id": "598e43e5d08b",
		"ts": "2026-07-30T21:04:35.854Z",
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
		"liquidityUsd": 3824430.06,
		"hash": "598e43e5d08baed4ab84fa397cac423430a1932eba4be2b07c0b8400e78a234b"
	},
	{
		"id": "28fd3b313aad",
		"ts": "2026-07-30T21:04:36.091Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"modifiable_tax",
			"has_blacklist",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 634462.69,
		"hash": "28fd3b313aad4f022570e48535e8bcc2c382a2b6cbb4e91d579f5fd18ac80f04"
	},
	{
		"id": "b2b4d56b36a8",
		"ts": "2026-07-30T21:04:36.327Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1793414.91,
		"hash": "b2b4d56b36a84db1676091dc3f04f6fbe7812f85dabd5bb6e6d27fe16dacfb05"
	},
	{
		"id": "ea8bd1a1d1a5",
		"ts": "2026-07-30T21:04:36.549Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 772838.25,
		"hash": "ea8bd1a1d1a56cf5ae1bd2bebd913b1a49a51740363c1efb3e2e1794b653d07e"
	},
	{
		"id": "a820160f2373",
		"ts": "2026-07-30T21:04:36.773Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7003947.13,
		"hash": "a820160f237335700dc8ea1cb1e5a1d90792e194df982a6d6111b4253fe48516"
	},
	{
		"id": "bf2eeb21c8ae",
		"ts": "2026-07-30T21:04:36.992Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4529035.16,
		"hash": "bf2eeb21c8ae4a6706066b044643ec7ed26b512a14824647aacfc62c7397cf98"
	},
	{
		"id": "5a9957f8a9b9",
		"ts": "2026-07-30T21:04:37.212Z",
		"symbol": "msETH",
		"token": "0x7Ba6F01772924a82D9626c126347A28299E98c98",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 16577394.48,
		"hash": "5a9957f8a9b97c5679e87e91879bdfa8bdf241476d05278162c3ee8e2622a9e9"
	},
	{
		"id": "be23471747ef",
		"ts": "2026-07-30T21:04:37.433Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5085679.85,
		"hash": "be23471747ef55b0db2093cefec70b61999b56d2e2155c46e3451c3e69057024"
	},
	{
		"id": "7ed55be47036",
		"ts": "2026-07-30T19:19:40.045Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112346788.78,
		"hash": "7ed55be470364969dbd14b4c3f5159579459b6ae71052c89f5093c94a0fbdc78"
	},
	{
		"id": "810ca685d23f",
		"ts": "2026-07-30T19:19:40.394Z",
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
		"liquidityUsd": 17018431.77,
		"hash": "810ca685d23f71d3a8340eef835c93f4378ec68be98ab2f6367c986daca1a9ea"
	},
	{
		"id": "c8623d7856c4",
		"ts": "2026-07-30T19:19:40.608Z",
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
		"liquidityUsd": 1147565.08,
		"hash": "c8623d7856c438c2a8b40a87dfda799569f051f0d5b30259a144b0a1e74ccd3a"
	},
	{
		"id": "5ad78267ef21",
		"ts": "2026-07-30T19:19:40.805Z",
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
		"liquidityUsd": 25919514.09,
		"hash": "5ad78267ef21169f8dc8f5336bafa1b0c2260d411ff4d77056c5dd9c06111a45"
	},
	{
		"id": "a79b32022de7",
		"ts": "2026-07-30T19:19:41.016Z",
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
		"liquidityUsd": 4899294.39,
		"hash": "a79b32022de7153c6b7a685c044afc8bb1a9ab58c6a542c2762b39041f80fd19"
	},
	{
		"id": "faee050c9de5",
		"ts": "2026-07-30T19:19:41.218Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 907428.46,
		"hash": "faee050c9de59139c5b1064d40dab86ec975c76884bf434163acaa822edd93db"
	},
	{
		"id": "ed920b58a1e5",
		"ts": "2026-07-30T19:19:41.425Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25919514.09,
		"hash": "ed920b58a1e58dbd57b2555d0c8d64f12f05ca63ee6f98f634fa5002c18cd878"
	},
	{
		"id": "6f1371f56ae1",
		"ts": "2026-07-30T19:19:42.050Z",
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
		"liquidityUsd": 3777230.68,
		"hash": "6f1371f56ae1c825d8dffac742253d448e6ef613156e666e5d68ba60f8cf044f"
	},
	{
		"id": "8aec92531a2f",
		"ts": "2026-07-30T19:19:42.257Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1790527.46,
		"hash": "8aec92531a2f75dc762eb33bb8e8fd4934e6c3acea2f20e54694cba5bbece3e1"
	},
	{
		"id": "36b6f50bd65d",
		"ts": "2026-07-30T19:19:42.453Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"modifiable_tax",
			"has_blacklist",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 703979.89,
		"hash": "36b6f50bd65ddb7f8b478f470ddc4be121df7d1a6b6bd03e62f59a18f7351258"
	},
	{
		"id": "eec28b3b2eb3",
		"ts": "2026-07-30T19:19:42.660Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 768617.27,
		"hash": "eec28b3b2eb3a7ed09c9d076dc026027bcb5876154f8e9c13e0fbaf5641df2e4"
	},
	{
		"id": "36474b067a4b",
		"ts": "2026-07-30T19:19:42.848Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7821592.31,
		"hash": "36474b067a4b7db920b28f15f94fdbf75eb4d3572f97bdc66a2eeab00b143d48"
	},
	{
		"id": "82635cf2fe5f",
		"ts": "2026-07-30T19:19:43.051Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4547200.09,
		"hash": "82635cf2fe5f273729a6603575d02dfb7b526aa5a8b767320775273e9c07228b"
	},
	{
		"id": "f529c2c34591",
		"ts": "2026-07-30T19:19:43.249Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1976159.16,
		"hash": "f529c2c34591e7080bcd9e15532fc4b819b3f0cca35d4e8dd8a5ac8d47f7fe9a"
	},
	{
		"id": "cc8abeb4d8b2",
		"ts": "2026-07-30T19:19:43.460Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5083532.34,
		"hash": "cc8abeb4d8b2ecb63bbadc2474aca2d46650f7e5b4898d3b40d7751f0d6c8b8b"
	},
	{
		"id": "5f8745cd06c4",
		"ts": "2026-07-30T17:22:32.373Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112320547.8,
		"hash": "5f8745cd06c43cc72d2415cd196fc182665577d5734f9b2efe9c4efbc8822707"
	},
	{
		"id": "00a93d6eb5d1",
		"ts": "2026-07-30T17:22:32.795Z",
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
		"liquidityUsd": 15521171.24,
		"hash": "00a93d6eb5d13eb25faeb4bc6e5d66c44c5e072d223427ff6882ce068bcbb1b1"
	},
	{
		"id": "27aa09a62186",
		"ts": "2026-07-30T17:22:33.217Z",
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
		"liquidityUsd": 1144047.16,
		"hash": "27aa09a621860c2613f597cf5637ff3d9129d44537d39222bcd58365ec733905"
	},
	{
		"id": "3cb359e23a42",
		"ts": "2026-07-30T17:22:33.473Z",
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
		"liquidityUsd": 25956652.52,
		"hash": "3cb359e23a42536cd4e4f0d918d5145be1d968ce23c4fd9ef479a7c43f71de86"
	},
	{
		"id": "fbbf701f2376",
		"ts": "2026-07-30T17:22:33.887Z",
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
		"liquidityUsd": 4894840.4,
		"hash": "fbbf701f237613f600b5e39c7daa2de8165798d2e3821bfea7d658b68bf71233"
	},
	{
		"id": "ba589b64020d",
		"ts": "2026-07-30T17:22:34.141Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 907832.7,
		"hash": "ba589b64020ddb89b906828f1725f4f3a449374a8f5e8cebc06905d58c0809cf"
	},
	{
		"id": "04669c175bcd",
		"ts": "2026-07-30T17:22:34.397Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25956652.52,
		"hash": "04669c175bcd1172221713cc5dad4779fb457a34c41edfa7e01ad31c9b79329d"
	},
	{
		"id": "c277ee257c0d",
		"ts": "2026-07-30T17:22:34.654Z",
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
		"liquidityUsd": 3774438.88,
		"hash": "c277ee257c0d26e8ff68e7e65d7f37683de1550ac73e2e1cf9215fb29ea5cb86"
	},
	{
		"id": "643d3b0f0220",
		"ts": "2026-07-30T17:22:35.027Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"modifiable_tax",
			"has_blacklist",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 727337.67,
		"hash": "643d3b0f02208cc106016e468dcebe385ec22fe25dccd24917f9087a77bbd193"
	},
	{
		"id": "5f5de0891e74",
		"ts": "2026-07-30T17:22:35.286Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1787889.24,
		"hash": "5f5de0891e743bf046c7ed11adbe2e48d733dcc2dc91c9f164e51dcbe6b3bb8c"
	},
	{
		"id": "77749387b03c",
		"ts": "2026-07-30T17:22:35.562Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1973990.93,
		"hash": "77749387b03c06d276f85cfc9c3cf4c2c39b85001094e6b0e4475149ba08811b"
	},
	{
		"id": "abada49df0a1",
		"ts": "2026-07-30T17:22:35.843Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8224515.94,
		"hash": "abada49df0a1dda493bc10c0aef5d47548643c5c7b4072ba565656dc0ec1858a"
	},
	{
		"id": "dc115a888435",
		"ts": "2026-07-30T17:22:36.095Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 755816.03,
		"hash": "dc115a888435bc2a0116455952d0e637b2e2c776948c01af17db54bb22b22f73"
	},
	{
		"id": "8e707f8033e0",
		"ts": "2026-07-30T17:22:36.359Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4569594.52,
		"hash": "8e707f8033e033e5fe2ee1990b19c66cefd8658e6394b46ca8b5d489fe8c0832"
	},
	{
		"id": "33a033c17a8b",
		"ts": "2026-07-30T17:22:36.601Z",
		"symbol": "msETH",
		"token": "0x7Ba6F01772924a82D9626c126347A28299E98c98",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17396058.97,
		"hash": "33a033c17a8bab67c2d4d29c652431b8728c918b4305aa9da1791ad8d28494c2"
	},
	{
		"id": "ffe9f66a2731",
		"ts": "2026-07-30T15:49:27.624Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112280811.15,
		"hash": "ffe9f66a2731bb328c2d06a1030916172c0934714d55d6597e60ebbfeaae4c45"
	},
	{
		"id": "f1a3db9b3723",
		"ts": "2026-07-30T15:49:27.934Z",
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
		"liquidityUsd": 16965123.13,
		"hash": "f1a3db9b372345536f0715275f6781a5cd495fcd1968ddc10a88ffd6e6d8e01f"
	},
	{
		"id": "b529fcba472a",
		"ts": "2026-07-30T15:49:28.129Z",
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
		"liquidityUsd": 1144225.9,
		"hash": "b529fcba472a6dcd0736dcd6ae98cfbcb868b8be12a114785463e89d6eef8aa1"
	},
	{
		"id": "a52bbdb85f8b",
		"ts": "2026-07-30T15:49:28.320Z",
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
		"liquidityUsd": 25962503.5,
		"hash": "a52bbdb85f8b6e7b73f5fc2a1dc4550ec3eb9c48b130e6053227759c55c53003"
	},
	{
		"id": "1e65a5fdefd0",
		"ts": "2026-07-30T15:49:28.510Z",
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
		"liquidityUsd": 4910205.82,
		"hash": "1e65a5fdefd01d8c48d31df7b51316771f694d9665f275f906c31f12c4a64466"
	},
	{
		"id": "bede0073ab64",
		"ts": "2026-07-30T15:49:28.716Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 909087.25,
		"hash": "bede0073ab64083b497d4fd1b3559d0871e2c4f07f5d5db1ff491ea212fc668e"
	},
	{
		"id": "4b851bdd6f11",
		"ts": "2026-07-30T15:49:28.906Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25962503.5,
		"hash": "4b851bdd6f11c20d3cea3288bf4d4875ae9379f5d3620b3cc33d0c67e34dc3ae"
	},
	{
		"id": "03769e1b63ed",
		"ts": "2026-07-30T15:49:29.111Z",
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
		"liquidityUsd": 2406458.94,
		"hash": "03769e1b63edb60d4df25be871680044cbbf592e6a4d938b2b1a98c21e76077f"
	},
	{
		"id": "6ecd333a313a",
		"ts": "2026-07-30T15:49:29.301Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"modifiable_tax",
			"has_blacklist",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 706892.48,
		"hash": "6ecd333a313a1cdeafcc7d7da326650dc8e183e3c5f36b51aeb24c29dc923b51"
	},
	{
		"id": "b221da6acf1e",
		"ts": "2026-07-30T15:49:29.488Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1790078.55,
		"hash": "b221da6acf1e0e57284878af2e482f4ab058b7d9442cbc7465b5f837659f0ad7"
	}
]
