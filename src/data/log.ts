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
	"updatedAt": "2026-11-01T17:34:49.568Z",
	"tokensScored": 22013,
	"verdictsIssued": 22013,
	"safe": 18781,
	"risky": 1554,
	"likelyRug": 1678,
	"ticks": 1239
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "6dde588e0d9a",
		"ts": "2026-11-01T17:34:45.663Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150685642.93,
		"hash": "6dde588e0d9aa36b64f6951513f9312313b2766ecb5a1b17ba88c961afeb34a8"
	},
	{
		"id": "a6435cf817fe",
		"ts": "2026-11-01T17:34:45.891Z",
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
		"liquidityUsd": 16189611.34,
		"hash": "a6435cf817feb118fe91a26d144d82a5abd3706564ae4ce2ab2505a845d48bf0"
	},
	{
		"id": "f8c022f8ca94",
		"ts": "2026-11-01T17:34:46.123Z",
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
		"liquidityUsd": 248455.72,
		"hash": "f8c022f8ca946cd55b2c9df80c0007a18566eb3520987353c55d23b60f1e0fa2"
	},
	{
		"id": "f38dbc6f36e5",
		"ts": "2026-11-01T17:34:46.343Z",
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
		"liquidityUsd": 5625906.1,
		"hash": "f38dbc6f36e521295ae4797ae2dbd5cba0abc2c0f3590a36957a150505ce5e3e"
	},
	{
		"id": "83a176dbd244",
		"ts": "2026-11-01T17:34:46.570Z",
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
		"liquidityUsd": 888911.84,
		"hash": "83a176dbd2447b123d8a9752d96c3f528dfd71150b4be0cc9e440f32faa409ab"
	},
	{
		"id": "0196eb2e2fef",
		"ts": "2026-11-01T17:34:46.774Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1074147.7,
		"hash": "0196eb2e2fefc3180797cee06adf8133a27ed34b39357f8f5cf7db17cc2482f3"
	},
	{
		"id": "4559e8648116",
		"ts": "2026-11-01T17:34:47.002Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5625906.1,
		"hash": "4559e864811640e22952bdb69913641e5ad876cbef1d39c8afbd4cc0b48f26a2"
	},
	{
		"id": "efdb06d171eb",
		"ts": "2026-11-01T17:34:47.251Z",
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
		"liquidityUsd": 2089569.32,
		"hash": "efdb06d171eb0b907b92033420425d2da2a35037feb290ddf459ba62e03b86e6"
	},
	{
		"id": "380126e50f78",
		"ts": "2026-11-01T17:34:47.480Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1056042.24,
		"hash": "380126e50f788bdc949875b90b43eb617e15c05cb7d3cc42d66c7a7fe1f6843b"
	},
	{
		"id": "fed93cccb928",
		"ts": "2026-11-01T17:34:47.712Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1778833.81,
		"hash": "fed93cccb928ba8de7920f26b0149536f4c670b62e41765c402dbb47cbbf3819"
	},
	{
		"id": "3e7ea1022056",
		"ts": "2026-11-01T17:34:47.917Z",
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
		"liquidityUsd": 279326.27,
		"hash": "3e7ea10220561b23f8d6f5df59e8623d4b62d68e4b485d523b57777ca4bcd0f0"
	},
	{
		"id": "48e620f5e7cd",
		"ts": "2026-11-01T17:34:48.131Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3556697.28,
		"hash": "48e620f5e7cd5d2f43f4cf4f20220ae3fc02c0921ece64b6e141c9c2902d3206"
	},
	{
		"id": "22a3566e22a7",
		"ts": "2026-11-01T17:34:48.317Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246916.11,
		"hash": "22a3566e22a7959a27d929d7e7ad55404e4ad9141456d87531588281972e580c"
	},
	{
		"id": "2406a31ae5dd",
		"ts": "2026-11-01T17:34:48.537Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 331701.21,
		"hash": "2406a31ae5dd4e3ccb7b82bc97f376828cdf26814b255d0142a6c3e3df731546"
	},
	{
		"id": "f5f37347b2cf",
		"ts": "2026-11-01T17:34:48.752Z",
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
		"liquidityUsd": 825443.42,
		"hash": "f5f37347b2cf984cd498540c12ccc727bf33c6b41d82a94908bfdaabdf92cd16"
	},
	{
		"id": "562437552112",
		"ts": "2026-11-01T17:34:48.949Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 585005.91,
		"hash": "5624375521128b2182e8ffd1261f69c788e7bc622514cc3fea76cce138c32934"
	},
	{
		"id": "a800af736e1c",
		"ts": "2026-11-01T17:34:49.135Z",
		"symbol": "GULD",
		"token": "0x14D6C649292c5c9790c5196D1a9EA039307947a1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1356198.78,
		"hash": "a800af736e1c15595221cbca8ce5d012041c3bc7abdded13a81fa25c1fdab5c2"
	},
	{
		"id": "afd4bd058d46",
		"ts": "2026-11-01T17:34:49.344Z",
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
		"liquidityUsd": 7885491.78,
		"hash": "afd4bd058d46b20fe95d7b92a556f622ef2e307b7c0be002adf7d813188f3970"
	},
	{
		"id": "1632fa427a62",
		"ts": "2026-11-01T17:34:49.567Z",
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
		"liquidityUsd": 2854951.91,
		"hash": "1632fa427a62c8207c54a0ba2745f32ce1b8ecd4f024b171c345862bd09726ef"
	},
	{
		"id": "2dad49f01615",
		"ts": "2026-11-01T11:38:18.264Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150958113.12,
		"hash": "2dad49f016152ef009d05b5f4a39cd78fe41c7d4a7fc33a509d1224cd5b7ec08"
	},
	{
		"id": "16aa0534c98a",
		"ts": "2026-11-01T11:38:18.652Z",
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
		"liquidityUsd": 16150285.43,
		"hash": "16aa0534c98ae6a7219d40cc6a8c8c04188bdbb5264eda5474c59683b9efacb6"
	},
	{
		"id": "8b4688c5febd",
		"ts": "2026-11-01T11:38:18.870Z",
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
		"liquidityUsd": 249031.35,
		"hash": "8b4688c5febda3ea5031785d3d45bf1a170b50c48f8b7cb4f777ae1bb7c6e450"
	},
	{
		"id": "3b57793b6b60",
		"ts": "2026-11-01T11:38:19.077Z",
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
		"liquidityUsd": 5711931.18,
		"hash": "3b57793b6b6087c15848dc3a4603d28c9905ba721dfdd94eb3a2efd218fa4ea1"
	},
	{
		"id": "1906f6b97438",
		"ts": "2026-11-01T11:38:19.297Z",
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
		"liquidityUsd": 866906.46,
		"hash": "1906f6b974384e527b8426ab82e1ae7ff9d2080815609c4c33b1a394e237a2b2"
	},
	{
		"id": "e7dcb6f7795a",
		"ts": "2026-11-01T11:38:19.499Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1080765.11,
		"hash": "e7dcb6f7795a1e03f3194421dc97bf79f1564ea8e9d48b94ed4f5efc2c8c12af"
	},
	{
		"id": "eb692ec27043",
		"ts": "2026-11-01T11:38:19.705Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2432684.31,
		"hash": "eb692ec27043078d5781a2a6f753f6ac739d3c6bf00ebfbc17cdcf22b359a9b4"
	},
	{
		"id": "59b13a54f156",
		"ts": "2026-11-01T11:38:19.913Z",
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
		"liquidityUsd": 1898906.57,
		"hash": "59b13a54f156e35a0d2d18c2a45a416290539b18b6fdf5f7f202772caf37fd3c"
	},
	{
		"id": "cc516a72538e",
		"ts": "2026-11-01T11:38:20.143Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1722664.3,
		"hash": "cc516a72538e9fa59731c6719e1a7edd0c1a167f41c1a957ff2448840314b2a7"
	},
	{
		"id": "af698e9a16b3",
		"ts": "2026-11-01T11:38:20.357Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1065672.06,
		"hash": "af698e9a16b32d7540d958a9c583af4efe43631d26d82d5ca2482994bf377ce9"
	},
	{
		"id": "7bc4f095cfcc",
		"ts": "2026-11-01T11:38:20.573Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 287466.05,
		"hash": "7bc4f095cfcc36815b32e16462f2a4132da2e578d3c2928c48bfa35c430933a1"
	},
	{
		"id": "f5141f1ed6f9",
		"ts": "2026-11-01T11:38:20.776Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3571739.53,
		"hash": "f5141f1ed6f9e43a1f0c3765b13c9971aab8ef819504ea68b117733f4d5938ee"
	},
	{
		"id": "90be33261fa4",
		"ts": "2026-11-01T11:38:20.976Z",
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
		"liquidityUsd": 826501.11,
		"hash": "90be33261fa4c790c86eaa2bb4bf906474ae1efeb41a4a0bc5860e258d97c593"
	},
	{
		"id": "687670ea01c8",
		"ts": "2026-11-01T11:38:21.183Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261472.84,
		"hash": "687670ea01c86fbac27f6e55a41d68e8a3d8d8e77589aa065bdceff0aafdd2fd"
	},
	{
		"id": "8b7bc584c359",
		"ts": "2026-11-01T11:38:21.375Z",
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
		"liquidityUsd": 7929980.72,
		"hash": "8b7bc584c359ea9296e679f27b654d20c1b72396c8df320d1c9e692d538a18e8"
	},
	{
		"id": "c7a632a68210",
		"ts": "2026-11-01T11:38:21.563Z",
		"symbol": "Anthropic",
		"token": "0xf7B9cf4DAB32ce42f1e08c05f561Ccc0E7B44CEA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10322072.34,
		"hash": "c7a632a68210517f970deaf2a289fce500743a1371d11ac0778bc698028516b2"
	},
	{
		"id": "e3367ada0476",
		"ts": "2026-11-01T11:38:21.755Z",
		"symbol": "GULD",
		"token": "0x14D6C649292c5c9790c5196D1a9EA039307947a1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1396772.44,
		"hash": "e3367ada04765f1e3270f69f1d5c22fd43dd556e1f4e2145422c9388f25f704f"
	},
	{
		"id": "472ca7b2899e",
		"ts": "2026-11-01T11:38:21.941Z",
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
		"liquidityUsd": 298811.58,
		"hash": "472ca7b2899ebbabc977a116b51ac37f3e276846bad316d8c1883bd7874f5c55"
	},
	{
		"id": "3552384194a4",
		"ts": "2026-11-01T11:38:22.156Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1602857.73,
		"hash": "3552384194a4a3052cc460f658efc9411b93548a6d4e17743d1019757b4b8b71"
	},
	{
		"id": "d03978d6189c",
		"ts": "2026-11-01T04:05:58.466Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150903069.21,
		"hash": "d03978d6189c40052effcb06b8477d22fb22bb8745327bb29f83d680d103d367"
	},
	{
		"id": "82d95d62b7eb",
		"ts": "2026-11-01T04:05:58.839Z",
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
		"liquidityUsd": 16132276.2,
		"hash": "82d95d62b7eb6a8f322926a1e55405329a02ff778de1b7edd1c64dbd63c5bbf6"
	},
	{
		"id": "9823626356d3",
		"ts": "2026-11-01T04:05:59.058Z",
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
		"liquidityUsd": 248575.1,
		"hash": "9823626356d35e91d4e4325c6f157dbac68fc9ebc9a3365f7c20910e19b6f097"
	},
	{
		"id": "31a951e9e62a",
		"ts": "2026-11-01T04:05:59.265Z",
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
		"liquidityUsd": 5753987.79,
		"hash": "31a951e9e62a6cac793ac7ff31f6f52f5f2bc85a3fe8848e7a2d7c771b59c433"
	},
	{
		"id": "98a7fbbc2826",
		"ts": "2026-11-01T04:05:59.496Z",
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
		"liquidityUsd": 874326.08,
		"hash": "98a7fbbc2826c54d012746a726420c2d2529db28a0abdb88f79047ac61fbe7ef"
	},
	{
		"id": "5f5b20a9d878",
		"ts": "2026-11-01T04:05:59.702Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1070330.74,
		"hash": "5f5b20a9d8787f3ccc36abcc158c4189d661bd091a8f77c12983ceb77a3e5144"
	},
	{
		"id": "a7a32a023897",
		"ts": "2026-11-01T04:05:59.920Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2433021.29,
		"hash": "a7a32a0238970c87f0702a993191822c87edd22b4651c97a77cd01cdcee20376"
	},
	{
		"id": "794824f76d91",
		"ts": "2026-11-01T04:06:00.147Z",
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
		"liquidityUsd": 1036518.06,
		"hash": "794824f76d915b7c401fc056039d9a99bef9529356d79895a568fa9004b02e4f"
	},
	{
		"id": "e09c42cff6ec",
		"ts": "2026-11-01T04:06:00.361Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1054941.07,
		"hash": "e09c42cff6ecf0508dbae85120491bc542bebc1e6269917316268dd49091d53e"
	},
	{
		"id": "872b3414a117",
		"ts": "2026-11-01T04:06:00.589Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2903182.84,
		"hash": "872b3414a117491fbc4146c62fa82fe73e827a76bdd7acc418a079c3d1863895"
	},
	{
		"id": "9f5e0674eb01",
		"ts": "2026-11-01T04:06:00.801Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1713339.08,
		"hash": "9f5e0674eb0162623e16d869f262d5083fdf631bd9f5916c358e1c4b1dc6fcda"
	},
	{
		"id": "57b553a7b1de",
		"ts": "2026-11-01T04:06:01.001Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 318043.51,
		"hash": "57b553a7b1de09bb33b0aad2198cbab7afff8cce51a8f0ba7c53ac725b179d8c"
	},
	{
		"id": "7c1c1963a6a3",
		"ts": "2026-11-01T04:06:01.202Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 845643.19,
		"hash": "7c1c1963a6a3ecff5d81fcc90cc506b7e42abb3781dd9e17d20667ff6a351a62"
	},
	{
		"id": "e18cc2c92351",
		"ts": "2026-11-01T04:06:01.711Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3568866.24,
		"hash": "e18cc2c923517a6138bb175f786dee033d018fbac420d895fa0a37028ad811aa"
	},
	{
		"id": "2c91681569ff",
		"ts": "2026-11-01T04:06:01.910Z",
		"symbol": "Anthropic",
		"token": "0xf7B9cf4DAB32ce42f1e08c05f561Ccc0E7B44CEA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 10322122.73,
		"hash": "2c91681569fff5fdb45a216d1a28d6dcac5f89eea2fc45b6f95e8f932884b9ee"
	},
	{
		"id": "34dc4bd087de",
		"ts": "2026-11-01T04:06:02.126Z",
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
		"liquidityUsd": 7935285.56,
		"hash": "34dc4bd087decfd8ba7e9657e0da8531a4166056e34f637421bc5d45ade7429a"
	},
	{
		"id": "365cf6bebdca",
		"ts": "2026-11-01T04:06:02.339Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 244130.82,
		"hash": "365cf6bebdca4a0890474b626411d208121d2f48ac0a4a6ca480e9f382931862"
	},
	{
		"id": "42e9eaaf153b",
		"ts": "2026-11-01T04:06:02.528Z",
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
		"liquidityUsd": 1274649.21,
		"hash": "42e9eaaf153b3824c777ba96d3828be7f3dc44b4e73f05f67446d524d2147c31"
	},
	{
		"id": "720bf9779398",
		"ts": "2026-11-01T04:06:02.728Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 271918.21,
		"hash": "720bf9779398aad767e263499aaf33eea471cacf7e9e95d72c809219a3801ee4"
	},
	{
		"id": "86c47a2ba3c2",
		"ts": "2026-10-31T23:01:09.560Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150555807.24,
		"hash": "86c47a2ba3c2a4253b2820a977a5b84ca6caeee566a36cbd9cf7ee0f0e7a7afa"
	},
	{
		"id": "d22d46ba0fbc",
		"ts": "2026-10-31T23:01:09.922Z",
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
		"liquidityUsd": 16066766.19,
		"hash": "d22d46ba0fbce1dd605e5516af2fe4245dfc3bfbd4ce47d826aa99a337a8a452"
	},
	{
		"id": "d17360d6774a",
		"ts": "2026-10-31T23:01:10.140Z",
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
		"liquidityUsd": 247695.71,
		"hash": "d17360d6774af1ac438e672ea11e77397ffe255a781b76d2f40e2022db2ce3ee"
	},
	{
		"id": "243b33c6328b",
		"ts": "2026-10-31T23:01:10.341Z",
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
		"liquidityUsd": 5763603.95,
		"hash": "243b33c6328be38e4838abc743fb4458ccc026fac33e86075c87de237bf08f08"
	},
	{
		"id": "29ec4b69afb9",
		"ts": "2026-10-31T23:01:10.575Z",
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
		"liquidityUsd": 870229.19,
		"hash": "29ec4b69afb92a72ea2fc66a73762139687511087aa3e1a59622e8dc5b3173a9"
	},
	{
		"id": "3c2433d26ffe",
		"ts": "2026-10-31T23:01:10.774Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1064632.09,
		"hash": "3c2433d26ffe4b7fba0d4d0db8437e16468877db2ee03c771efffddbf01ea009"
	},
	{
		"id": "0158989f4b14",
		"ts": "2026-10-31T23:01:10.994Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2436116.28,
		"hash": "0158989f4b14c818dc5e2d525a319cbb6859b1041d683549dca7de3f822bed9b"
	},
	{
		"id": "43ddca5af619",
		"ts": "2026-10-31T23:01:11.206Z",
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
		"liquidityUsd": 1678705.63,
		"hash": "43ddca5af6195e113a9e589b1fc2576be395ed05c9f3ac7d1b932d8498916e8b"
	},
	{
		"id": "853ebc3120d8",
		"ts": "2026-10-31T23:01:11.407Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1043916,
		"hash": "853ebc3120d82a8a501505fddf477fc22ac0d00fdf254c7867923fa0eccd7048"
	},
	{
		"id": "23f0aaf3d598",
		"ts": "2026-10-31T23:01:11.615Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2902223.67,
		"hash": "23f0aaf3d598aa9c95f83a82cefc2b0eb2647c60bb2b165ce959c4aa8ff79927"
	},
	{
		"id": "248bb6cabc36",
		"ts": "2026-10-31T23:01:11.837Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 313058.27,
		"hash": "248bb6cabc36efe5bf78a2d3a4aadef7644bede4a3b2862b7bce4f9522f92756"
	},
	{
		"id": "c42b16aff6f3",
		"ts": "2026-10-31T23:01:12.048Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1712916.19,
		"hash": "c42b16aff6f3df17ffd3efb662d63090dc0376e5051a1c08d68b9822909cbb76"
	},
	{
		"id": "38ca37716979",
		"ts": "2026-10-31T23:01:12.249Z",
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
		"liquidityUsd": 855720.46,
		"hash": "38ca37716979ac22bd070b21d91f513621f95d0461099c6536a8e57a144da21c"
	},
	{
		"id": "9f66f8034766",
		"ts": "2026-10-31T23:01:12.428Z",
		"symbol": "ATLAS",
		"token": "0xB462A5039a540883508Ee37b5cF3999647557ba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 115159.94,
		"hash": "9f66f80347661c8f8a7301cad7c70279a263935bf6594b93d11ee1f94ccc0773"
	},
	{
		"id": "fce6a139ce99",
		"ts": "2026-10-31T23:01:12.630Z",
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
		"liquidityUsd": 1271198.68,
		"hash": "fce6a139ce996286eb1ce98653067cf99e8498b644728874dbfe2a4a7c6b2f16"
	},
	{
		"id": "58bb9c951a0f",
		"ts": "2026-10-31T23:01:12.825Z",
		"symbol": "Anthropic",
		"token": "0xf7B9cf4DAB32ce42f1e08c05f561Ccc0E7B44CEA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10322065.27,
		"hash": "58bb9c951a0fca37ffaa955fab0a64d43c3ce3035b87dbd563e4230136b32dc5"
	},
	{
		"id": "928de1eee731",
		"ts": "2026-10-31T23:01:13.019Z",
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
		"liquidityUsd": 7868656.97,
		"hash": "928de1eee731339c243e84d5b65724588170bb31e1e5353020886b89376ee2db"
	},
	{
		"id": "36a5afa18a5a",
		"ts": "2026-10-31T23:01:13.207Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3541063.49,
		"hash": "36a5afa18a5afa7029c225695eb0086c12f769912352823fff0823fc68ac8b99"
	},
	{
		"id": "5869cb808da6",
		"ts": "2026-10-31T23:01:13.395Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1907762.06,
		"hash": "5869cb808da60154db34b51089f1b8bd3929e6f633f5b650395aa4a47cfe6113"
	},
	{
		"id": "7ba95ad194f9",
		"ts": "2026-10-31T19:10:37.966Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150277619.51,
		"hash": "7ba95ad194f9db709637a2b98d727c43ed8675c40bba1566cf6b3f15ab480684"
	},
	{
		"id": "db34d253419e",
		"ts": "2026-10-31T19:10:38.673Z",
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
		"liquidityUsd": 16077422.24,
		"hash": "db34d253419e279e16fefff632264194bb881fd2c7dc5b035182701c3e0d9eec"
	},
	{
		"id": "a6ea3f9cabaf",
		"ts": "2026-10-31T19:10:38.949Z",
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
		"liquidityUsd": 251306.09,
		"hash": "a6ea3f9cabafa53b72969e4ac7baf49f07b93424b2b19e4c2c0cb7c3506cc5a1"
	},
	{
		"id": "dcbfe3ac1b6c",
		"ts": "2026-10-31T19:10:39.239Z",
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
		"liquidityUsd": 5789330.85,
		"hash": "dcbfe3ac1b6c4c8776bc4fb27e27e03e6a21699d6d5baaf836c52dafab62b9d0"
	},
	{
		"id": "96cbd5398bb7",
		"ts": "2026-10-31T19:10:39.519Z",
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
		"liquidityUsd": 866052.34,
		"hash": "96cbd5398bb73185977a218d508e2a8451e8ab544c7f58c407116111a14950b3"
	},
	{
		"id": "40a0aa55ac68",
		"ts": "2026-10-31T19:10:40.372Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1063564,
		"hash": "40a0aa55ac68fec44c6a70750d52c85412d1270e62883c3907c5bfad6672d7f0"
	},
	{
		"id": "bfc8860a5e78",
		"ts": "2026-10-31T19:10:40.662Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2435815.56,
		"hash": "bfc8860a5e7889c6e9a2836a61860b9ad885942082cb7db6cd5394199e820e73"
	},
	{
		"id": "936a47fd4572",
		"ts": "2026-10-31T19:10:40.956Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1578457.44,
		"hash": "936a47fd4572ca2ae20d1b7887205f16bac0e42dd6c7d1b55010b71b63c1f2f9"
	},
	{
		"id": "2d69a0b44e12",
		"ts": "2026-10-31T19:10:41.213Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 235274.34,
		"hash": "2d69a0b44e125d19b72ae9a6602a71ad7a0f6af967b1b64fc2a82fe89a4f8b9c"
	},
	{
		"id": "1ec00b74691f",
		"ts": "2026-10-31T19:10:41.484Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1047707.82,
		"hash": "1ec00b74691fc05bc3db523081faf59b55c54e097d7570bdfaee8e17a6b2d45d"
	},
	{
		"id": "8af8522fcaff",
		"ts": "2026-10-31T19:10:41.723Z",
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
		"liquidityUsd": 2915327.13,
		"hash": "8af8522fcaff618e9ba16134dfa9582f84ccb37faa817048f57065720bc8e749"
	},
	{
		"id": "f886102c52dd",
		"ts": "2026-10-31T19:10:42.001Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1722003.67,
		"hash": "f886102c52dd17449d96edfaf4a2713cf1adcfbb1376518c1a29c7bc7135f60d"
	},
	{
		"id": "23bf2b46b578",
		"ts": "2026-10-31T19:10:42.244Z",
		"symbol": "ATLAS",
		"token": "0xB462A5039a540883508Ee37b5cF3999647557ba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 109140.79,
		"hash": "23bf2b46b578fa3aa89374d1680a6f6e3e85089c3221a9f487c9f778c7b28536"
	},
	{
		"id": "d0889108651d",
		"ts": "2026-10-31T19:10:42.513Z",
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
		"liquidityUsd": 812921.46,
		"hash": "d0889108651d6530f829d8a3cf3d2ee6d532e90f57038686cd9ddee1bde707f7"
	},
	{
		"id": "c8254ffe4ed7",
		"ts": "2026-10-31T19:10:42.750Z",
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
		"liquidityUsd": 1277917.98,
		"hash": "c8254ffe4ed74df6edcfcf76039ce902c5e99e5cdbf0457405c91b3377cc5fe2"
	},
	{
		"id": "c02e78f9e73b",
		"ts": "2026-10-31T19:10:43.021Z",
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
		"liquidityUsd": 7870567.32,
		"hash": "c02e78f9e73b285dc427c2f2b9f86d8a9926cd7acd939fda33f8fcbe8432a35c"
	},
	{
		"id": "82b69533fdfe",
		"ts": "2026-10-31T19:10:43.264Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3552418.22,
		"hash": "82b69533fdfe6773ae15d3e91ab52579693e9efeb0ae67d6ea86bc5996e17076"
	},
	{
		"id": "51bf7760715e",
		"ts": "2026-10-31T19:10:43.516Z",
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
		"liquidityUsd": 500047.45,
		"hash": "51bf7760715e84172ff185e23eb7d70d5ce39cded43e1aea9fa240b7fc9a49d6"
	},
	{
		"id": "30f5d7995e22",
		"ts": "2026-10-31T19:10:43.758Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1745317.12,
		"hash": "30f5d7995e2285e5454a19cf0274191eed51c9722d1c5d57c7be7cc35915b449"
	},
	{
		"id": "644b25882ca5",
		"ts": "2026-10-31T14:58:24.246Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 150565613.08,
		"hash": "644b25882ca5815a6f2220a121f0e0a2f58c36f640219dab197e81ef890c25b3"
	},
	{
		"id": "06e386946cba",
		"ts": "2026-10-31T14:58:24.504Z",
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
		"liquidityUsd": 16021921.77,
		"hash": "06e386946cbacf086dbf36ca6c00c31e5ada66a683f7172eec86b9a3ca5bd8a9"
	},
	{
		"id": "8ba173219947",
		"ts": "2026-10-31T14:58:24.729Z",
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
		"liquidityUsd": 251026.81,
		"hash": "8ba173219947935e6e1f53d19bf6209754b92ba8967b6a062eefd7b0b53b4eae"
	},
	{
		"id": "1724b5b426b9",
		"ts": "2026-10-31T14:58:24.958Z",
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
		"liquidityUsd": 5863183.72,
		"hash": "1724b5b426b96050280f44b0ea25f34cd6f90d3e7374e1259e2a9e2df6808487"
	},
	{
		"id": "f25a312d8a69",
		"ts": "2026-10-31T14:58:25.167Z",
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
		"liquidityUsd": 852072.83,
		"hash": "f25a312d8a69c2f2cc29ac2281fd2e99cd964293924014ae267a6f79ea6b161a"
	},
	{
		"id": "88c10886ede6",
		"ts": "2026-10-31T14:58:25.386Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1059038.19,
		"hash": "88c10886ede6196510e97f7f74466a06caa1eaf428b11f1399e6033db28e45b4"
	},
	{
		"id": "acaf73d2f6f8",
		"ts": "2026-10-31T14:58:25.604Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2435574.75,
		"hash": "acaf73d2f6f8502fe53ec86e238958bb60b3a6b6a4a6cf49d42a006a12957327"
	},
	{
		"id": "330d23b6dd9a",
		"ts": "2026-10-31T14:58:25.813Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1374824.79,
		"hash": "330d23b6dd9a62f45b1dd73f55c6f5503620e7b274d38bdeb8878aaa60fe0788"
	},
	{
		"id": "5d5709a331eb",
		"ts": "2026-10-31T14:58:26.025Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 241670.08,
		"hash": "5d5709a331eb04d5df45ad1c27ae604cb266a0227769bf1c4f097dc5dca83106"
	},
	{
		"id": "389412779518",
		"ts": "2026-10-31T14:58:26.226Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1034666.59,
		"hash": "389412779518d15429dd6d6836aa65680505a5b29c0a045c7d2876ffefd23deb"
	},
	{
		"id": "507ffb2db1f9",
		"ts": "2026-10-31T14:58:26.479Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1723035.72,
		"hash": "507ffb2db1f9e332c24aa25068dc84bf3c1dd564486a71efeedca3b820a9a387"
	},
	{
		"id": "700e053177cd",
		"ts": "2026-10-31T14:58:26.702Z",
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
		"liquidityUsd": 1247051.65,
		"hash": "700e053177cdc911fa9859c0acc4d2b48ed0653004588841877e5e60d1138bc5"
	},
	{
		"id": "d07d7eea9465",
		"ts": "2026-10-31T14:58:26.902Z",
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
		"liquidityUsd": 2887596.19,
		"hash": "d07d7eea94658d5bd517f8c6dd816688c0192334af7900fbd265c70ef001c77e"
	},
	{
		"id": "163ecbe624a0",
		"ts": "2026-10-31T14:58:27.091Z",
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
		"liquidityUsd": 7776735.04,
		"hash": "163ecbe624a0a1e92c99a7f08db06e46162cd1575769ed04d59ab86563483b49"
	},
	{
		"id": "c0a918b3addd",
		"ts": "2026-10-31T14:58:27.307Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 162374.61,
		"hash": "c0a918b3adddedf3c3491310a27a4073bf43003fefb47b9a73e224523486718d"
	},
	{
		"id": "88261441128d",
		"ts": "2026-10-31T14:58:27.499Z",
		"symbol": "ATLAS",
		"token": "0xB462A5039a540883508Ee37b5cF3999647557ba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 95806.04,
		"hash": "88261441128d2e0b3040effcbdab6ebe218155a41b4fd41010e8040305a8f45b"
	},
	{
		"id": "0c8f7755221e",
		"ts": "2026-10-31T14:58:27.691Z",
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
		"liquidityUsd": 804502.8,
		"hash": "0c8f7755221e241038c36dbab1464a9842c752fd585adfa96119281838d04b60"
	},
	{
		"id": "a12d82ab08e7",
		"ts": "2026-10-31T14:58:27.902Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1757458.31,
		"hash": "a12d82ab08e7e181a5fff134b47c1615eab0315eabcfca2bf7ca341b6d26adff"
	},
	{
		"id": "78664e2d464e",
		"ts": "2026-10-31T14:58:28.099Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 963624.88,
		"hash": "78664e2d464e8a2cd5c113baa25907c077a7a73dc237e2e48272cf4c3000b4d1"
	},
	{
		"id": "0c5a6f004b1c",
		"ts": "2026-10-31T08:09:45.695Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150037189.25,
		"hash": "0c5a6f004b1cb54cfcb1cf356dea9a357b062a2775559c348b243de92e2baf98"
	},
	{
		"id": "88dbb17d424c",
		"ts": "2026-10-31T08:09:46.164Z",
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
		"liquidityUsd": 15993530.17,
		"hash": "88dbb17d424c7bb0e2d72d39ee68efce8211fe867c239237edd0d8f8e432e5cf"
	},
	{
		"id": "064042cbfdc2",
		"ts": "2026-10-31T08:09:46.417Z",
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
		"liquidityUsd": 248081.93,
		"hash": "064042cbfdc2a21d997797cded77abf995d560311cd8cfee0c341b9bdf5fdcf1"
	},
	{
		"id": "7b176e174200",
		"ts": "2026-10-31T08:09:46.662Z",
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
		"liquidityUsd": 5897143.57,
		"hash": "7b176e1742002a8446624e9f133ff33af461929edbdc807691286fb770097da2"
	},
	{
		"id": "dd61d7b87360",
		"ts": "2026-10-31T08:09:46.942Z",
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
		"liquidityUsd": 953971.77,
		"hash": "dd61d7b873601ed79a1a07b01be0817ac5be7efd60d4d664235edca607557e31"
	},
	{
		"id": "015feadc36bb",
		"ts": "2026-10-31T08:09:47.214Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1058723.35,
		"hash": "015feadc36bbf7d89f4406adcde32aad5fdb4620cc3c5c6f059bd4d9df55efed"
	},
	{
		"id": "c9420ccb3472",
		"ts": "2026-10-31T08:09:47.461Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5897143.57,
		"hash": "c9420ccb34722acf20ed89f78748ff170e5c7fe17284331d6873cd74f44e621e"
	},
	{
		"id": "dc7a0da0ad03",
		"ts": "2026-10-31T08:09:47.711Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1571234.24,
		"hash": "dc7a0da0ad03d8db96f19c352cae901db9d5f147e5223b85c20aa05e38175f90"
	},
	{
		"id": "83262d968427",
		"ts": "2026-10-31T08:09:47.959Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 292757.81,
		"hash": "83262d968427b1c46e265485cb0ac325d43d95c440e5ea8c486be58ee6abaff4"
	},
	{
		"id": "88c26a9913d7",
		"ts": "2026-10-31T08:09:48.219Z",
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
		"liquidityUsd": 1710624.51,
		"hash": "88c26a9913d70d49aba89d4e415943367d9460841e0136e16751d2ac3c79d77a"
	},
	{
		"id": "62f805530c85",
		"ts": "2026-10-31T08:09:48.449Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 962227.47,
		"hash": "62f805530c85ce9b57f9ae680aeb1fbeb72388ceb8fd6c46b59ea1cefff94b48"
	},
	{
		"id": "c78433143bf9",
		"ts": "2026-10-31T08:09:48.680Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55564.69,
		"hash": "c78433143bf9b134700732adb17b4da15f4cfd1d90afe5a9f9f25bbd9eb134d6"
	},
	{
		"id": "de0abe4d556c",
		"ts": "2026-10-31T08:09:48.914Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 172150.05,
		"hash": "de0abe4d556cb202abf7e57abdc934651861faa9b3e655d2cf450e1947443a8c"
	},
	{
		"id": "3ab05766b3e0",
		"ts": "2026-10-31T08:09:49.146Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 686393.03,
		"hash": "3ab05766b3e09083e2b0b2b41837004f9b128036a35278565e7d452cef8e12ea"
	},
	{
		"id": "75e289805669",
		"ts": "2026-10-31T08:09:49.378Z",
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
		"liquidityUsd": 7695612.38,
		"hash": "75e28980566914f7d15e4d8bd3d2353945ea0af2344f1e3ca836013dcbee9406"
	},
	{
		"id": "9c0213f79e88",
		"ts": "2026-10-31T08:09:49.609Z",
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
		"liquidityUsd": 2908268.75,
		"hash": "9c0213f79e888a6ab2a1afabed347e6e1b0824b668bd84dd0b4c13f4199f9d27"
	},
	{
		"id": "cf7d157a3c8c",
		"ts": "2026-10-31T08:09:49.842Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1751386.56,
		"hash": "cf7d157a3c8c66669cc4a95fca432a78b5caf8a4dfc270e1c5b0fee2f4c212cf"
	},
	{
		"id": "595d993cbc75",
		"ts": "2026-10-31T08:09:50.074Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 501705.68,
		"hash": "595d993cbc752212d85f4d14260e6a18347b9d4da62289e69fe8506000e88302"
	},
	{
		"id": "46a900f19715",
		"ts": "2026-10-31T08:09:50.305Z",
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
		"liquidityUsd": 218358.71,
		"hash": "46a900f197159af046d4892b27f7e04fb2e253250e5f3649ec399f0fe5be9bab"
	},
	{
		"id": "ab026f59a318",
		"ts": "2026-10-31T01:58:08.697Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150425799.54,
		"hash": "ab026f59a318a24978a8363734ab16d644e11b6692f0d92c6d4b0ce6f88c4a05"
	},
	{
		"id": "98f789f06553",
		"ts": "2026-10-31T01:58:08.984Z",
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
		"liquidityUsd": 15981998.45,
		"hash": "98f789f06553e00a7ee21e6326aa8aa7f1034845c83a17433440e911f267095c"
	},
	{
		"id": "1deddad0d84e",
		"ts": "2026-10-31T01:58:09.353Z",
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
		"liquidityUsd": 244316.73,
		"hash": "1deddad0d84e54801f07f2f982ec2e45e1886a07c38e62bc3f872744665b3f8a"
	},
	{
		"id": "b5aeb1f44f45",
		"ts": "2026-10-31T01:58:09.575Z",
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
		"liquidityUsd": 5939543.33,
		"hash": "b5aeb1f44f451524d9356180a7a1964fdc03628382fce1c5bf76cb52bd4b50f8"
	},
	{
		"id": "5dc3b6aa6d8f",
		"ts": "2026-10-31T01:58:09.813Z",
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
		"liquidityUsd": 741924.35,
		"hash": "5dc3b6aa6d8fdc75525e5073b167ca8f463b06289ee704c6e1bf3f23995c5db8"
	},
	{
		"id": "b75a06b7fd32",
		"ts": "2026-10-31T01:58:10.026Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1059096.96,
		"hash": "b75a06b7fd3281cfc24aff5ebc5842599133464672308e05e696168515eea90f"
	},
	{
		"id": "d11a15b05b86",
		"ts": "2026-10-31T01:58:10.246Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5939543.33,
		"hash": "d11a15b05b862b9e277f5fd5dfc4645df13df9ddfd7089ddf1fe58d234b2ac62"
	},
	{
		"id": "74225fff8942",
		"ts": "2026-10-31T01:58:10.463Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1451088.23,
		"hash": "74225fff894293e0a3f730a8a21bb3067270ad3cc42e54ce5ceb1b68c2ff2d86"
	},
	{
		"id": "e523154077cc",
		"ts": "2026-10-31T01:58:10.684Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 272897,
		"hash": "e523154077cc8c657c03219e9bf44928d639cc20d13aa1b81d6a46a1ceb3a6a8"
	},
	{
		"id": "cc684c8491f5",
		"ts": "2026-10-31T01:58:10.895Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1014233.54,
		"hash": "cc684c8491f5518daa7fde649e288ae2b89b8b044ddfb2db4bec33ab56a9ce7f"
	},
	{
		"id": "fbe8f4404435",
		"ts": "2026-10-31T01:58:11.089Z",
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
		"liquidityUsd": 1726613.38,
		"hash": "fbe8f4404435a84713def811d25ef0961b136757981a0c0da51a236ea4984528"
	},
	{
		"id": "2220a438824f",
		"ts": "2026-10-31T01:58:11.335Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 159460.24,
		"hash": "2220a438824ffb1dc9afcc2cff4f87618eef7253a65d505ed048928a17527f8e"
	},
	{
		"id": "17e8ccbb2d0f",
		"ts": "2026-10-31T01:58:11.592Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55642.05,
		"hash": "17e8ccbb2d0f924956e7d7d5ab196d2a9530db2c0c05dc61a48697d699c64bd6"
	},
	{
		"id": "5786812ce4b8",
		"ts": "2026-10-31T01:58:11.786Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3551292.59,
		"hash": "5786812ce4b84630670e08f4e4d0e17f1b410b7ca19629595ce91f96d38a6fb5"
	},
	{
		"id": "6812bcafeef8",
		"ts": "2026-10-31T01:58:12.022Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 691234.65,
		"hash": "6812bcafeef8838874d5f9606134e1bded5c27e5a6a95c52b4d501943de2cecf"
	},
	{
		"id": "eb92ac7e6120",
		"ts": "2026-10-31T01:58:12.213Z",
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
		"liquidityUsd": 7768982.14,
		"hash": "eb92ac7e6120357c454c89cb93f19e7384f160b80234fa43d1037d8821b20cf6"
	},
	{
		"id": "1aa989e8e448",
		"ts": "2026-10-31T01:58:12.431Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3019484.02,
		"hash": "1aa989e8e44846ff1c605bd0eec575da604b2de2f48630e7952d7cf4ca5f6931"
	},
	{
		"id": "0721d4b7e4c4",
		"ts": "2026-10-31T01:58:12.639Z",
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
		"liquidityUsd": 224858.49,
		"hash": "0721d4b7e4c439e8640c4769c60f52d0d2f05b118cb430d51b3d1705bea1743e"
	},
	{
		"id": "85cdd53c69d0",
		"ts": "2026-10-31T01:58:12.861Z",
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
		"liquidityUsd": 2920863.03,
		"hash": "85cdd53c69d01a23b456b4dc239cfded5d6fe74c7814ce148da794e037f35b09"
	},
	{
		"id": "271cf41fc43c",
		"ts": "2026-10-30T22:49:41.955Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 150098240.32,
		"hash": "271cf41fc43c21b4013345b913bd27d2025ef8baa20349d8cd6b36ca8fb379f3"
	},
	{
		"id": "4675dd99a289",
		"ts": "2026-10-30T22:49:42.315Z",
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
		"liquidityUsd": 15916662.1,
		"hash": "4675dd99a2891d938ae0c14b22151eb059d6d875295c7be2db03f1696be002fd"
	},
	{
		"id": "734cdb8e71a1",
		"ts": "2026-10-30T22:49:42.540Z",
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
		"liquidityUsd": 246517.11,
		"hash": "734cdb8e71a1c9887aa23da667610eaf9f6263d9a002386ae4aa12842e07e084"
	},
	{
		"id": "d414f53f73ba",
		"ts": "2026-10-30T22:49:42.735Z",
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
		"liquidityUsd": 5885798.99,
		"hash": "d414f53f73badb836049dbb8f3016919711f618244526fccdd8a2160542cfc86"
	},
	{
		"id": "06f53edc9f2d",
		"ts": "2026-10-30T22:49:42.943Z",
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
		"liquidityUsd": 784347.98,
		"hash": "06f53edc9f2d5c2c5a65f0d7d6e9a94d015baff2ee3c15f818edc9bdea8266a1"
	},
	{
		"id": "11ea15c78268",
		"ts": "2026-10-30T22:49:43.153Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1055875.42,
		"hash": "11ea15c7826862ba1e613abb04e1f4b4e7136d6cd19403bcab873a28e07bc9c7"
	},
	{
		"id": "460f67073e2f",
		"ts": "2026-10-30T22:49:43.364Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5885798.99,
		"hash": "460f67073e2f98f37edb9fcc2605b1a43ae192aec2907d054d1e116e11e2dcaa"
	},
	{
		"id": "58219e4e5e5d",
		"ts": "2026-10-30T22:49:43.573Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1443618.23,
		"hash": "58219e4e5e5d5388e4428a253d2aa64a91fcf2470a25b3d37b1729da25e1cb00"
	},
	{
		"id": "a57930294f98",
		"ts": "2026-10-30T22:49:43.794Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 264215.29,
		"hash": "a57930294f98371a5b699d18e5c6234b3ab1553dd848cb32f4d9070c55e7bf6d"
	},
	{
		"id": "3e2a4d7712de",
		"ts": "2026-10-30T22:49:43.997Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1018980.49,
		"hash": "3e2a4d7712dea06be5b7c0873bc1c43bc440e6af1476ede14caaf80260fb095e"
	},
	{
		"id": "204e813c6636",
		"ts": "2026-10-30T22:49:44.196Z",
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
		"liquidityUsd": 1728387.48,
		"hash": "204e813c6636752ebf56970225108325fccafe0ecaf7720ff999d4e9de3e808d"
	},
	{
		"id": "1e695dff464d",
		"ts": "2026-10-30T22:49:44.407Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 169063.59,
		"hash": "1e695dff464d062a9c29455149da1580db6bb60b38f9f7d597dfdf5c439e5ec6"
	},
	{
		"id": "8951a204cb9f",
		"ts": "2026-10-30T22:49:44.611Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55560.75,
		"hash": "8951a204cb9f6a227eb1326e70cfcb9b2b95d79facc6685e97b73cd05b9d058a"
	},
	{
		"id": "04195cbdb663",
		"ts": "2026-10-30T22:49:44.830Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3535655.79,
		"hash": "04195cbdb66366201715e8bae2eea0b070fe67f03c7deb854abbc872a35b307d"
	},
	{
		"id": "11850a5940ae",
		"ts": "2026-10-30T22:49:45.070Z",
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
		"liquidityUsd": 213372.37,
		"hash": "11850a5940ae4211b3fccf52a4529b924ac7a7d858629f0517c9cf45468613f6"
	},
	{
		"id": "10cf1e9fbc0f",
		"ts": "2026-10-30T22:49:45.276Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 687100.93,
		"hash": "10cf1e9fbc0f19230202c0bb55d25ab4c6c333938349550b986601ac9c937459"
	},
	{
		"id": "cf0b9c52601a",
		"ts": "2026-10-30T22:49:45.464Z",
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
		"liquidityUsd": 7687398.4,
		"hash": "cf0b9c52601a1878070b7fe7b75b72c9eb884e49997a08d32701e9d0244b551f"
	},
	{
		"id": "6f843d0b634a",
		"ts": "2026-10-30T22:49:45.670Z",
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
		"liquidityUsd": 2437311.84,
		"hash": "6f843d0b634a0b9600787ab0c0aacdd054cf6e2d305d79a4021e48e567790e2d"
	},
	{
		"id": "feac6da3e32d",
		"ts": "2026-10-30T22:49:45.868Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3200638.46,
		"hash": "feac6da3e32dbba34bf3901b5880187588747e45535eaf33b737ffc9a62dfde6"
	},
	{
		"id": "bf0388211a16",
		"ts": "2026-10-30T18:57:29.862Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 149949640.95,
		"hash": "bf0388211a1678e5dcfe4d94936c66b132e66b3a84e968a190f9439a39bbd146"
	},
	{
		"id": "c0b6842cff2d",
		"ts": "2026-10-30T18:57:30.135Z",
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
		"liquidityUsd": 15825958.83,
		"hash": "c0b6842cff2d8a4365405f2acca8585dbe2edb4eb45ec0f71f869d2bbc66b136"
	},
	{
		"id": "58571800cbb3",
		"ts": "2026-10-30T18:57:30.398Z",
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
		"liquidityUsd": 245548.64,
		"hash": "58571800cbb3bcb9bf74e7b9b904697abc44266fc6b99abd0bfb2028be94795c"
	},
	{
		"id": "77d4d3a05a16",
		"ts": "2026-10-30T18:57:30.622Z",
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
		"liquidityUsd": 5838277.95,
		"hash": "77d4d3a05a166e0ca8c5cc2f25e47d928adac2d6074b7b09b2bff5e2e3619190"
	},
	{
		"id": "ee31341a5c70",
		"ts": "2026-10-30T18:57:30.840Z",
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
		"liquidityUsd": 732633.97,
		"hash": "ee31341a5c7067cf8e0511283923ecc0e90cbcf0f965374f6e944d55a00fc5be"
	},
	{
		"id": "091f7744b9e5",
		"ts": "2026-10-30T18:57:31.109Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1047953.48,
		"hash": "091f7744b9e58d7b5a4a5f08f46bd1a49fb234c893cb44d931b320fc0169b9ee"
	},
	{
		"id": "312874ccbf12",
		"ts": "2026-10-30T18:57:31.358Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5838277.95,
		"hash": "312874ccbf122ac15f6f9dddfecc4ea0ea8fe2361ce1ebb4a1b4d66649f7fa96"
	},
	{
		"id": "4f01310a712a",
		"ts": "2026-10-30T18:57:31.582Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 982734.46,
		"hash": "4f01310a712adcf4cfbd59d7afa63575a502e9bac2048b386f8c07f5a369d20a"
	},
	{
		"id": "e214db328cae",
		"ts": "2026-10-30T18:57:31.816Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 288393.94,
		"hash": "e214db328cae3e59e24ca818b8eadc6c80ff70318f59a3376dac951bb70a0503"
	},
	{
		"id": "8790954e25d0",
		"ts": "2026-10-30T18:57:32.085Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1013165.06,
		"hash": "8790954e25d0a06383ba0df62a078f86fc656eac23414a2c77c11df68f1abf0a"
	},
	{
		"id": "82d2cd522b53",
		"ts": "2026-10-30T18:57:32.339Z",
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
		"liquidityUsd": 2434044,
		"hash": "82d2cd522b53f141d19d371f39a339ff93df17677ef3bf2bbe8c6a9243d58054"
	},
	{
		"id": "e4a29762f4e1",
		"ts": "2026-10-30T18:57:32.550Z",
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
		"liquidityUsd": 1709028.03,
		"hash": "e4a29762f4e1e235f921ebb1663d3bcfd29567bef0f9932c11a014eb81b63f04"
	},
	{
		"id": "275bfdb2a691",
		"ts": "2026-10-30T18:57:32.788Z",
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
		"liquidityUsd": 2870982.71,
		"hash": "275bfdb2a691246ca634e959b55299f350b2d3ca10c8981581bbe76b4a15c6ef"
	},
	{
		"id": "a02711e0ab98",
		"ts": "2026-10-30T18:57:33.057Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56703.14,
		"hash": "a02711e0ab98ab5d59ee9ee93de445af28c6ba04323bb8486c0ac0163b4c9868"
	},
	{
		"id": "5cee6df9b02e",
		"ts": "2026-10-30T18:57:33.294Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 172770.43,
		"hash": "5cee6df9b02e20823ec0747fbd34678912dbe41a4159d96882bf66f14c37d5e9"
	},
	{
		"id": "af337fe2a658",
		"ts": "2026-10-30T18:57:33.513Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1749183.43,
		"hash": "af337fe2a658e41954b347ad55c319a66546d1ed226e4c562bb3cc3d719bf92f"
	},
	{
		"id": "98710a4527fa",
		"ts": "2026-10-30T18:57:33.737Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3528643.93,
		"hash": "98710a4527fa0625e413d9c01625d552b2ca4e42bf5b70ceb52019db20eb30c9"
	},
	{
		"id": "d2b1712713a5",
		"ts": "2026-10-30T18:57:33.946Z",
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
		"liquidityUsd": 208909.44,
		"hash": "d2b1712713a52d7999e7106878ef63304e72d1f2aae552f7c09dd77b0e230990"
	},
	{
		"id": "1af071f3168f",
		"ts": "2026-10-30T18:57:34.159Z",
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
		"liquidityUsd": 7641325.54,
		"hash": "1af071f3168f318e363b3a6c03fa11a0823dd050e6cbee7c0b603a45d3d5b80d"
	},
	{
		"id": "8450c366e34e",
		"ts": "2026-10-30T13:47:24.743Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 149491927.29,
		"hash": "8450c366e34e68025d77fb6f5d1f4d68a96cc0a3ca37b04fa2044c9af37df0c6"
	},
	{
		"id": "8c40b7843837",
		"ts": "2026-10-30T13:47:24.953Z",
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
		"liquidityUsd": 16020239.28,
		"hash": "8c40b7843837a6666da239f500554f317c483d61454a897c12aa080f4ffd2a3d"
	},
	{
		"id": "90d47ab1177c",
		"ts": "2026-10-30T13:47:25.198Z",
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
		"liquidityUsd": 242131.39,
		"hash": "90d47ab1177c5574501b403702ce0b7e1b9e8e500c09ded0d5c3f82078608507"
	},
	{
		"id": "874fe4a7c593",
		"ts": "2026-10-30T13:47:25.410Z",
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
		"liquidityUsd": 6050133.94,
		"hash": "874fe4a7c593e19f19364092a6d6e261350ed91fa35e5d4a2bdbc3d58c7bea92"
	},
	{
		"id": "6b3c2d41367a",
		"ts": "2026-10-30T13:47:25.654Z",
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
		"liquidityUsd": 729137.39,
		"hash": "6b3c2d41367a4c60c39a6e55b1de7e6985e2eece2def69be2ec9322c7b4f24cb"
	},
	{
		"id": "8eb73a5ebe60",
		"ts": "2026-10-30T13:47:25.866Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1046845.69,
		"hash": "8eb73a5ebe60ec7f337763ea675506ab836a0f41ecc86cfe1d3da1267889f92a"
	},
	{
		"id": "c669a4e84732",
		"ts": "2026-10-30T13:47:26.116Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6050133.94,
		"hash": "c669a4e84732e9b499c1a980b4e608e204fd43dca739807d995e9f518065b8fc"
	},
	{
		"id": "71360c5a7e0e",
		"ts": "2026-10-30T13:47:26.327Z",
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
		"liquidityUsd": 1900428.55,
		"hash": "71360c5a7e0e153e65d6da9cbcf636b6c29a8c8628c98af3652e6c3657d63f62"
	},
	{
		"id": "5e648d7d3c49",
		"ts": "2026-10-30T13:47:26.535Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 305467.91,
		"hash": "5e648d7d3c49cb920cae1cac94cf556323c8c7e2e96956702464686bebdbd3a8"
	},
	{
		"id": "b0ce6d38fa85",
		"ts": "2026-10-30T13:47:26.763Z",
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
		"liquidityUsd": 2435621.7,
		"hash": "b0ce6d38fa8536a98b161e0cea29d01bf70a8af712c6d3fe018385e02513a185"
	}
]
