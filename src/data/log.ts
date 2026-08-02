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
	"updatedAt": "2026-08-02T22:52:32.895Z",
	"tokensScored": 7055,
	"verdictsIssued": 7055,
	"safe": 6158,
	"risky": 542,
	"likelyRug": 355,
	"ticks": 431
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "8b2ecf7924ec",
		"ts": "2026-08-02T22:52:29.168Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112412492.14,
		"hash": "8b2ecf7924ecc8ae7589ff5098d0dd5b3e09fc76b974a22795ce678c276ec4ef"
	},
	{
		"id": "2694eab8a4e2",
		"ts": "2026-08-02T22:52:29.539Z",
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
		"liquidityUsd": 18273048.73,
		"hash": "2694eab8a4e2e4147729c41101584354d09a448f9f9c9e7246fed73b6a5ab366"
	},
	{
		"id": "a8cab90986cb",
		"ts": "2026-08-02T22:52:29.910Z",
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
		"liquidityUsd": 1119792.16,
		"hash": "a8cab90986cb98ad10ab4f52beaca2e909ef77d31cdd690f2e0feac75931948c"
	},
	{
		"id": "73a59f545458",
		"ts": "2026-08-02T22:52:30.316Z",
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
		"liquidityUsd": 24932792.96,
		"hash": "73a59f545458379f847ba6134a530a9a3a30be0b85790fd9d157f8981824ce0a"
	},
	{
		"id": "434a07c5aa70",
		"ts": "2026-08-02T22:52:30.521Z",
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
		"liquidityUsd": 4445267.68,
		"hash": "434a07c5aa70b9b968acd0055c52e666687aac3d9e79520c1b507b07a16f154c"
	},
	{
		"id": "8fcb142c1599",
		"ts": "2026-08-02T22:52:30.721Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 899356.97,
		"hash": "8fcb142c1599c0c2e0c2c0d6996b670e44ebd3cbc76dcdcaa1ffff29dfa3e6fb"
	},
	{
		"id": "fa5d02abb9bf",
		"ts": "2026-08-02T22:52:30.926Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24932792.98,
		"hash": "fa5d02abb9bf422c5e2e0fdf242ad41e9c5cb6b2e7c4b01f60efb9d813536cdb"
	},
	{
		"id": "45f4ad2aefc0",
		"ts": "2026-08-02T22:52:31.128Z",
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
		"liquidityUsd": 2124576.23,
		"hash": "45f4ad2aefc0df81ac638706f33162f6a74d171a0bc5485a7c0f4658a6cbae8a"
	},
	{
		"id": "280df1a5084e",
		"ts": "2026-08-02T22:52:31.332Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1071113,
		"hash": "280df1a5084e7b30d61b7b3d94a30c55055ae2b01a3bab0bd4000324a7d8586e"
	},
	{
		"id": "c0767aaa2eb0",
		"ts": "2026-08-02T22:52:31.536Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1593556.12,
		"hash": "c0767aaa2eb01a0895b3d826b8237eb831a22186d233fbb86fa171bdebd95c06"
	},
	{
		"id": "b7cbe9583056",
		"ts": "2026-08-02T22:52:31.724Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 376623.23,
		"hash": "b7cbe9583056b14179960225574061d599bf498aedc0c39bb8df4a133615f216"
	},
	{
		"id": "bd6219dc63c8",
		"ts": "2026-08-02T22:52:31.913Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9419966.87,
		"hash": "bd6219dc63c853d456c1bf10741f5549d68d7d9ab9d0d682b8245a325df5d59f"
	},
	{
		"id": "6dba8fb14c46",
		"ts": "2026-08-02T22:52:32.099Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55915.03,
		"hash": "6dba8fb14c46395420d15f15c18e1c8e31b89a9a57532db3354188ed7ea91030"
	},
	{
		"id": "a1f300b27a94",
		"ts": "2026-08-02T22:52:32.287Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 281313.19,
		"hash": "a1f300b27a94cf394452b5fc158523c28b170e18ed6bb9b5ab3f28423ce59ecc"
	},
	{
		"id": "8c3056a5f516",
		"ts": "2026-08-02T22:52:32.495Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185980.27,
		"hash": "8c3056a5f5165658c4f8704cae39cc99c96ac4608f4d8f7a9f17b93f61504682"
	},
	{
		"id": "0b799f833db8",
		"ts": "2026-08-02T22:52:32.681Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 286907.61,
		"hash": "0b799f833db8c33a4568bf679ba47521aa89457dcd0a9e3de7f3c70b80128241"
	},
	{
		"id": "d26924c26a40",
		"ts": "2026-08-02T22:52:32.895Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1851666.48,
		"hash": "d26924c26a4022c7c78a5d2f124f69807c28e244b22378a5157cf08c740c8c80"
	},
	{
		"id": "ad2d2ba18e2f",
		"ts": "2026-08-02T21:51:50.566Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112652361.91,
		"hash": "ad2d2ba18e2fc722dbcb62f766afa2c2308e48f12c8c3647af00260086433c57"
	},
	{
		"id": "9120f9165ce7",
		"ts": "2026-08-02T21:51:51.017Z",
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
		"liquidityUsd": 18001640.07,
		"hash": "9120f9165ce746de337f49b27908d131009f65cb238f5247dea90744c59285d9"
	},
	{
		"id": "af67836f9a1f",
		"ts": "2026-08-02T21:51:51.463Z",
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
		"liquidityUsd": 1123351.84,
		"hash": "af67836f9a1f90b402d934daa4c1ce2d8bc714be7ad43af745f62043b6af7e51"
	},
	{
		"id": "69136883eaad",
		"ts": "2026-08-02T21:51:51.702Z",
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
		"liquidityUsd": 25159532.08,
		"hash": "69136883eaad8d5b1803f3766bdc803ccc8bf094fa610c41a509cbb3257f46d7"
	},
	{
		"id": "299b2bdcea86",
		"ts": "2026-08-02T21:51:51.957Z",
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
		"liquidityUsd": 4442824.31,
		"hash": "299b2bdcea86d18b1399ac3224efb558adb4a1aea42fffda365552b0cc306e34"
	},
	{
		"id": "c51232bd2978",
		"ts": "2026-08-02T21:51:52.188Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 909858,
		"hash": "c51232bd2978d9a5cc149b9d45e985eef27600d2b6c18ea78f407e50694a6bb7"
	},
	{
		"id": "3ff84e52e943",
		"ts": "2026-08-02T21:51:52.456Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25159532.08,
		"hash": "3ff84e52e943f18d60d933e2b1a9e7ff82362c1ef947dcba49f0cd0ce1b13f63"
	},
	{
		"id": "fbeb20b13032",
		"ts": "2026-08-02T21:51:52.695Z",
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
		"liquidityUsd": 2131791.94,
		"hash": "fbeb20b130320af350f25ece384c1df7b689be9e2009f77f0b10de8d364b695d"
	},
	{
		"id": "d041853658d4",
		"ts": "2026-08-02T21:51:52.929Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1131861.2,
		"hash": "d041853658d4df1ab34dba27663a526f418675429f5e6918a739a54af25eb90c"
	},
	{
		"id": "5876e04034c2",
		"ts": "2026-08-02T21:51:53.164Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1684834.94,
		"hash": "5876e04034c26824ea29c6ff56dc3a679ea1fef6417bc978480f4c11e844905a"
	},
	{
		"id": "e206c922f777",
		"ts": "2026-08-02T21:51:53.387Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 378729.65,
		"hash": "e206c922f777763f7e0a12bda7c82cb384d0a8b93306e88accaa762375e71221"
	},
	{
		"id": "23e8189b41e3",
		"ts": "2026-08-02T21:51:53.609Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9504436.32,
		"hash": "23e8189b41e309e7aac9465e9075198117efc4b9087c4aaa02c47ee72fe411a9"
	},
	{
		"id": "f082134db75a",
		"ts": "2026-08-02T21:51:53.827Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55772.48,
		"hash": "f082134db75adb2763205c23eff1197cd2f7840eff57cd7f54533d3b910f6525"
	},
	{
		"id": "1e791f358422",
		"ts": "2026-08-02T21:51:54.049Z",
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
		"liquidityUsd": 298786.08,
		"hash": "1e791f35842218ddb07b0b6415d8e5677f4ad22bead31f401f0616b5707063c2"
	},
	{
		"id": "d578677aa8f1",
		"ts": "2026-08-02T21:51:54.266Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 288167.62,
		"hash": "d578677aa8f1da0a92782adfd5f63e71ec68e8c42c989c1badefee2ca688315a"
	},
	{
		"id": "0c6770eafdf5",
		"ts": "2026-08-02T21:51:54.490Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 293717.75,
		"hash": "0c6770eafdf5cca3fae90b62004089a4eb896c21c8f819cd56c9a5c55d085718"
	},
	{
		"id": "fd7822fdb258",
		"ts": "2026-08-02T21:51:54.711Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1853893.4,
		"hash": "fd7822fdb258bd0ba89fc3445e547dbc771d8cea1709d6972ece2a59b998aeb0"
	},
	{
		"id": "e67c0be14dc4",
		"ts": "2026-08-02T20:50:32.697Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112230983.18,
		"hash": "e67c0be14dc469c47252ad408c1c68986caf1f78f9d7204ef83e19195f01c11c"
	},
	{
		"id": "6ccf36924f9e",
		"ts": "2026-08-02T20:50:32.941Z",
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
		"liquidityUsd": 14319579.04,
		"hash": "6ccf36924f9e7fbc2b96117ecba7ea4f5c5c8894dd28ac0180a58766814116d3"
	},
	{
		"id": "51ba412a101a",
		"ts": "2026-08-02T20:50:33.390Z",
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
		"liquidityUsd": 1118062.85,
		"hash": "51ba412a101a81b5e48eee21006ecdc5e4fa103c0d0f7963458abb8c44582360"
	},
	{
		"id": "6d5fb4c83d4b",
		"ts": "2026-08-02T20:50:33.627Z",
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
		"liquidityUsd": 24947335.85,
		"hash": "6d5fb4c83d4b5b25971cab6086e73e221036e9e315941a1759a17ca8c96a5dad"
	},
	{
		"id": "a48e7959a3bd",
		"ts": "2026-08-02T20:50:33.869Z",
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
		"liquidityUsd": 4442824.31,
		"hash": "a48e7959a3bda1ac6e4c256e213911425d27fb10b98369bb7c0b2fee2e4269af"
	},
	{
		"id": "221b36815612",
		"ts": "2026-08-02T20:50:34.105Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 906642.32,
		"hash": "221b36815612683268e045c7677a8354180e2f71623e12a05ef425be5e5cca18"
	},
	{
		"id": "f23abf24e42b",
		"ts": "2026-08-02T20:50:34.339Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24947335.85,
		"hash": "f23abf24e42be03c79f8f82e96e0c7bfb68fde4fff62d5c2bcb97a0fbc4cdca6"
	},
	{
		"id": "b913d8861ef0",
		"ts": "2026-08-02T20:50:34.575Z",
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
		"liquidityUsd": 2122835.74,
		"hash": "b913d8861ef07e195595eed79dd26a0c1eef997b484234e7b8063af6de8bddc0"
	},
	{
		"id": "d1eabc2e0237",
		"ts": "2026-08-02T20:50:34.810Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 973857.07,
		"hash": "d1eabc2e0237c8dc5ddce3473d2b8a5f41538c39dad716a93cd15988ce280c5f"
	},
	{
		"id": "e94324cdd446",
		"ts": "2026-08-02T20:50:35.051Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 368511.07,
		"hash": "e94324cdd4461a3798362e942da3dbeaadd71d321ac0b8ad8da503ea1dd63905"
	},
	{
		"id": "0f8d9f54ca88",
		"ts": "2026-08-02T20:50:35.271Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9458697.35,
		"hash": "0f8d9f54ca88c21afee3530b162ba09937225b64dd33818307ba85198aa7dfe1"
	},
	{
		"id": "7a522a98d032",
		"ts": "2026-08-02T20:50:35.496Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55546.89,
		"hash": "7a522a98d03247145a6f34b688f1dd0b76e4c4545940aa9cdffc874e384f2bc8"
	},
	{
		"id": "3a0a03d2e0c4",
		"ts": "2026-08-02T20:50:35.717Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 298818.93,
		"hash": "3a0a03d2e0c4af4cee8c355eb3ae4ce0f21ea44494438f6c367a4d9143651437"
	},
	{
		"id": "6e5b5fdba772",
		"ts": "2026-08-02T20:50:35.940Z",
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
		"liquidityUsd": 1628600.08,
		"hash": "6e5b5fdba7723b8878f9e11cde3023c6fe6dbeefb307a1b496a5e859c3fc6ab6"
	},
	{
		"id": "2abf7bc0c495",
		"ts": "2026-08-02T20:50:36.163Z",
		"symbol": "KAITO",
		"token": "0x98d0baa52b2D063E780DE12F615f963Fe8537553",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 45423.08,
		"hash": "2abf7bc0c4957a8f24015270b77c85d691e1404fc77a400e1e32998bfaf44859"
	},
	{
		"id": "1add7080d037",
		"ts": "2026-08-02T20:50:36.385Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 284324.26,
		"hash": "1add7080d037bf4bc14c7cfa5413fc3e2cc40b7deaa9b5428a7fdbd283c9c1a7"
	},
	{
		"id": "c46650de7b55",
		"ts": "2026-08-02T20:50:36.635Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1847267.13,
		"hash": "c46650de7b5599f182de62a829b145e404ff79e72f65b0741820aece4328f674"
	},
	{
		"id": "f60f32077299",
		"ts": "2026-08-02T19:17:03.530Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112152976.66,
		"hash": "f60f32077299020f1caf2e66ec95f3410af7ffbad755bf5f01e2643d67649914"
	},
	{
		"id": "b4596d842c9e",
		"ts": "2026-08-02T19:17:04.212Z",
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
		"liquidityUsd": 16659867.78,
		"hash": "b4596d842c9ed7803f1ebfd16bf4c1a7c496f72ff9c42c92d2564af59cf64499"
	},
	{
		"id": "3229eda16246",
		"ts": "2026-08-02T19:17:04.778Z",
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
		"liquidityUsd": 1116095.37,
		"hash": "3229eda1624607c85a0744dc6ff157ee818154b2ba5d07d323e2f2428e77c3f7"
	},
	{
		"id": "97f7e7a15606",
		"ts": "2026-08-02T19:17:05.074Z",
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
		"liquidityUsd": 24788656.63,
		"hash": "97f7e7a156061ee2fce5f0cd517142d23d2dc93cb364eacdaa8c6318317d2727"
	},
	{
		"id": "3a72b9811fbb",
		"ts": "2026-08-02T19:17:05.467Z",
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
		"liquidityUsd": 4429215.71,
		"hash": "3a72b9811fbbf2dfb625cbbc8348efa2636769e650ec900cb337b97dd7213d2d"
	},
	{
		"id": "81a875657dc3",
		"ts": "2026-08-02T19:17:05.776Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 899872.45,
		"hash": "81a875657dc3c17fe6d9fe6b6762a8d622d8a50674b7dcdfaa84476431127524"
	},
	{
		"id": "5fbff76d23a5",
		"ts": "2026-08-02T19:17:06.061Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24788656.63,
		"hash": "5fbff76d23a506d6c01b117c0b32b6945e79dbd04cd7499d98abd24f87bd7e33"
	},
	{
		"id": "c46b185337ab",
		"ts": "2026-08-02T19:17:06.325Z",
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
		"liquidityUsd": 2114888.31,
		"hash": "c46b185337ab2c067c827ca2f736a5abed5decd4f20d41463085b3ba232e1b64"
	},
	{
		"id": "441ec380cc9e",
		"ts": "2026-08-02T19:17:06.576Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 370476.38,
		"hash": "441ec380cc9e45c5f6021df2fd710c7ee662aba1d7cc4879139413e689ef8573"
	},
	{
		"id": "ceb4a3f79653",
		"ts": "2026-08-02T19:17:06.836Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1046943.14,
		"hash": "ceb4a3f7965372981a32ba509c3f32d6238f1dbaf13091c8fa47027d71de85a5"
	},
	{
		"id": "1085d7bc405e",
		"ts": "2026-08-02T19:17:07.054Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9388055.52,
		"hash": "1085d7bc405e73746e5d725019c6233a222b683fb67154e138d1e931360d206b"
	},
	{
		"id": "10b22b57f82f",
		"ts": "2026-08-02T19:17:07.270Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 298875.98,
		"hash": "10b22b57f82f7e00695785d8b7d14c51b5c70c475da7a9cb197693fba3bf1736"
	},
	{
		"id": "8e7a45033fa9",
		"ts": "2026-08-02T19:17:07.491Z",
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
		"liquidityUsd": 737139.78,
		"hash": "8e7a45033fa993cfae09ca808ad36fb076b94da0f93f51d2eb0d3618e303d55c"
	},
	{
		"id": "791fecdd9f21",
		"ts": "2026-08-02T19:17:07.705Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56784.72,
		"hash": "791fecdd9f21622eade5a2f8d1af387b3f5645d0655374ccd4425a66a01c2d81"
	},
	{
		"id": "b2cdc469ddfc",
		"ts": "2026-08-02T19:17:07.923Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1851884.45,
		"hash": "b2cdc469ddfc3d711fa43db0a5243822e2120479f0b5f31a4e03fde0e40ab984"
	},
	{
		"id": "c0cb91779c75",
		"ts": "2026-08-02T19:17:08.135Z",
		"symbol": "KAITO",
		"token": "0x98d0baa52b2D063E780DE12F615f963Fe8537553",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 46737.43,
		"hash": "c0cb91779c75ff81c2221847f4c264be5737142e4197a49b4993c9861a041888"
	},
	{
		"id": "443cd1098d40",
		"ts": "2026-08-02T19:17:08.353Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1950127.29,
		"hash": "443cd1098d4096f2cdbee565838acbe1016d6680de791940a9d0ded23119982f"
	},
	{
		"id": "c7517a941122",
		"ts": "2026-08-02T17:58:26.793Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111643711.97,
		"hash": "c7517a941122cd67dc0e93852b0d93e72013e1afbe7f18f43b82cc363ac9a4e1"
	},
	{
		"id": "afd233a8c32c",
		"ts": "2026-08-02T17:58:27.034Z",
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
		"liquidityUsd": 15796049.96,
		"hash": "afd233a8c32cd4e9e16637d4314e18d044b195b33192e6b1a5dedf98532c00c8"
	},
	{
		"id": "54dccdb9969e",
		"ts": "2026-08-02T17:58:27.270Z",
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
		"liquidityUsd": 1113190.27,
		"hash": "54dccdb9969e441218b23c1622fef487f6fe30dc654c28bab993003ff7b036b7"
	},
	{
		"id": "493cbbdff3c0",
		"ts": "2026-08-02T17:58:27.506Z",
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
		"liquidityUsd": 24699615.77,
		"hash": "493cbbdff3c04838317e48a807bf08672b7aef522d89e5ce486d39183ea8d89c"
	},
	{
		"id": "f921fdae202d",
		"ts": "2026-08-02T17:58:27.741Z",
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
		"liquidityUsd": 4403553.55,
		"hash": "f921fdae202df8e4adc793f29da39b1e000ebc6a9679f9178e812b131b22fefe"
	},
	{
		"id": "b0f60bdd44aa",
		"ts": "2026-08-02T17:58:27.982Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889506.41,
		"hash": "b0f60bdd44aa38cfe3dcb2276aa4db3bbd1fd04212e13d0874150907e9901a84"
	},
	{
		"id": "23e2ce64b5ab",
		"ts": "2026-08-02T17:58:28.212Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24699615.77,
		"hash": "23e2ce64b5abc0fa27913bd4aa693b82a2a14cb40483f7bc115da31dd087f1ea"
	},
	{
		"id": "7b2ac2efdf07",
		"ts": "2026-08-02T17:58:28.461Z",
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
		"liquidityUsd": 4215412.31,
		"hash": "7b2ac2efdf070cbf5b33e00f3f2a9b535df4c7d72fba79f1405cdf5a6b34800f"
	},
	{
		"id": "def93df381d6",
		"ts": "2026-08-02T17:58:28.696Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 374343.52,
		"hash": "def93df381d6e1918391aea40c75d0b7dbdf3d9c1740b45f1bc2439ac657fa1e"
	},
	{
		"id": "0cffd7d3d225",
		"ts": "2026-08-02T17:58:28.928Z",
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
		"liquidityUsd": 9343971.16,
		"hash": "0cffd7d3d22551ce0c2929026338ffe76f16189ccedf889fcbc1b2113b29facd"
	},
	{
		"id": "b7ffbd5532cb",
		"ts": "2026-08-02T17:58:29.144Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 298823.44,
		"hash": "b7ffbd5532cb9bb832ea18fd7aea9a40a32617fc241ca8feee7cb1a466279d14"
	},
	{
		"id": "9f3ffee6781d",
		"ts": "2026-08-02T17:58:29.361Z",
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
		"liquidityUsd": 734852.77,
		"hash": "9f3ffee6781dfe38d777fddcf7c86fe5276aa841e49ea6cf4b8cb5c962c4591c"
	},
	{
		"id": "68dd847b5aa0",
		"ts": "2026-08-02T17:58:29.579Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 60069.24,
		"hash": "68dd847b5aa08f833b3c88d36279235cc0932dcdf6da47a60325209e2732bf9c"
	},
	{
		"id": "90a26db43357",
		"ts": "2026-08-02T17:58:29.795Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1839004.76,
		"hash": "90a26db43357cb74b74be762320cf1b70e093e5d4e3fa50fe008d3e064073c28"
	},
	{
		"id": "bfa091aa67f9",
		"ts": "2026-08-02T17:58:30.009Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4654137.18,
		"hash": "bfa091aa67f9d742c537de705b66551a2d11e4d3ca33fbca74c8ca17325a9be6"
	},
	{
		"id": "2655b4b4d9d5",
		"ts": "2026-08-02T17:58:30.227Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1998500.41,
		"hash": "2655b4b4d9d56b183fb4e872edc2aeb43b24324bbb8190075a6bf86aa751eedc"
	},
	{
		"id": "b93bf23c6a50",
		"ts": "2026-08-02T17:58:30.445Z",
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
		"liquidityUsd": 1400242.16,
		"hash": "b93bf23c6a50ed4c2ec48920409546deb173c119223ca9b71e79fcf82ee6b2ce"
	},
	{
		"id": "753becb34a72",
		"ts": "2026-08-02T16:05:25.523Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111772041.18,
		"hash": "753becb34a72478a97fd494103395e1ab5548f6cbbf7526c193a20b23e212db8"
	},
	{
		"id": "fa9220de8b86",
		"ts": "2026-08-02T16:05:25.969Z",
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
		"liquidityUsd": 17676823.03,
		"hash": "fa9220de8b8687a15d811226b11859c635d1cf67d72c2bbb8e8fb0c021a09320"
	},
	{
		"id": "0de05bee9e7f",
		"ts": "2026-08-02T16:05:26.453Z",
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
		"liquidityUsd": 1107011.25,
		"hash": "0de05bee9e7f984ff3f480600c72a2f383acb3cd9b53c7d5f6fc56bedd7d5c94"
	},
	{
		"id": "3472fbd9913a",
		"ts": "2026-08-02T16:05:26.697Z",
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
		"liquidityUsd": 24730715.93,
		"hash": "3472fbd9913a2f64eee2744ab95169b87399160f2ee8f450a275a51c4fffe714"
	},
	{
		"id": "0b81d08e1537",
		"ts": "2026-08-02T16:05:26.941Z",
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
		"liquidityUsd": 4385120.68,
		"hash": "0b81d08e15371c2aeb5d0224a0035261912db974a17e78f51a2ec513bea2e292"
	},
	{
		"id": "83c5963fa753",
		"ts": "2026-08-02T16:05:27.177Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891278.41,
		"hash": "83c5963fa75360e4e454c21c39e01ff7c0bbfdb6345f20c4960d1f8802b65779"
	},
	{
		"id": "f9aa88c61dc3",
		"ts": "2026-08-02T16:05:27.409Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24730715.92,
		"hash": "f9aa88c61dc39adcc672e017865b0e5ed4b6d0054b311f48de5e3ba50f0785e8"
	},
	{
		"id": "6035af543dbd",
		"ts": "2026-08-02T16:05:27.649Z",
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
		"liquidityUsd": 4186410.77,
		"hash": "6035af543dbde5f7b4a73429576e694c723a044751f458f07618ea871fb25d86"
	},
	{
		"id": "26548ee444e9",
		"ts": "2026-08-02T16:05:27.919Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 382060.02,
		"hash": "26548ee444e9c814942a226288e0b569611b146445ad636fc7e81d537124b323"
	},
	{
		"id": "603ff07b0c79",
		"ts": "2026-08-02T16:05:28.152Z",
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
		"liquidityUsd": 9310989.9,
		"hash": "603ff07b0c795926b2b3845947a6b018533847e69c3c627b970b1f24b1e1438b"
	},
	{
		"id": "8ad98199f532",
		"ts": "2026-08-02T16:05:28.373Z",
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
		"liquidityUsd": 298655.83,
		"hash": "8ad98199f532689637020e9b01888f7cb7af7ae96bfba22f2bc57d4c10215ebb"
	},
	{
		"id": "c5628f31db97",
		"ts": "2026-08-02T16:05:28.595Z",
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
		"liquidityUsd": 730689.78,
		"hash": "c5628f31db97ac358ed9c50bbd4a77f88f359a5ebf21873355d5fcfa005db5da"
	},
	{
		"id": "4d6ec233e1d2",
		"ts": "2026-08-02T16:05:28.811Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1839575.54,
		"hash": "4d6ec233e1d24fdff84f8a7c8790395fe0652fcc142a96cd65cd9b1fe279f5e8"
	},
	{
		"id": "a02fd40d8bea",
		"ts": "2026-08-02T16:05:29.028Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4654056.02,
		"hash": "a02fd40d8bea1ad1c240185bf4f2e71bc43f9faf9ea25c750cd26dc5766aaf71"
	},
	{
		"id": "52cd7592f064",
		"ts": "2026-08-02T16:05:29.243Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57900.49,
		"hash": "52cd7592f064e1b74c022303b9e123b883428e15974a49a64cd84d6f6fc42585"
	},
	{
		"id": "28f639185e01",
		"ts": "2026-08-02T16:05:29.464Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1959605.58,
		"hash": "28f639185e01b658ecbd37744e1953fd690c9ce496d836cb6022cb612bf6932a"
	},
	{
		"id": "ac7a5882cd25",
		"ts": "2026-08-02T16:05:29.684Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4275156.8,
		"hash": "ac7a5882cd25d6913fb3dda0f62cae58774f6b08017c8bd887e1d1f75995b216"
	},
	{
		"id": "008b65b62801",
		"ts": "2026-08-02T14:59:10.624Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111683555.41,
		"hash": "008b65b62801d5da95529dbf9e425e364ad3af892e37b71bd0217815848c1b0e"
	},
	{
		"id": "86b828a7d302",
		"ts": "2026-08-02T14:59:10.877Z",
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
		"liquidityUsd": 17492194.36,
		"hash": "86b828a7d30210a01631a9cbaeb189a855741d668836c9752edc3c097b18b80f"
	},
	{
		"id": "6791cd8df284",
		"ts": "2026-08-02T14:59:11.155Z",
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
		"liquidityUsd": 1107581.9,
		"hash": "6791cd8df28440de4cf0097ba62c4e1cf7f9f93a9847ba9230d721e92a1decfe"
	},
	{
		"id": "d79d9de074b9",
		"ts": "2026-08-02T14:59:11.402Z",
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
		"liquidityUsd": 24732733.65,
		"hash": "d79d9de074b9b4ae46fdf1e43ba4a3daa7356655590e757955580c96688d583e"
	},
	{
		"id": "fc863f64ba61",
		"ts": "2026-08-02T14:59:11.670Z",
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
		"liquidityUsd": 4381303.08,
		"hash": "fc863f64ba615851cbb69e6a9fc4d78e14f0d94e34564aa02c24bed71568f915"
	},
	{
		"id": "b67f945bb8c6",
		"ts": "2026-08-02T14:59:11.922Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888804.9,
		"hash": "b67f945bb8c6e4ba9942c854f027d4a247de131da34baff3004d7728da721a6a"
	},
	{
		"id": "31cae416d951",
		"ts": "2026-08-02T14:59:12.162Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24732732.4,
		"hash": "31cae416d951623f3437a47b8fe40369da81865bb5a13b70a3b1f8be1f6872e0"
	},
	{
		"id": "4732d35e4925",
		"ts": "2026-08-02T14:59:12.413Z",
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
		"liquidityUsd": 4182012.43,
		"hash": "4732d35e4925881d8727a4f248333ac8de4024e371a55f20e0fccaf84f6abb18"
	},
	{
		"id": "c2bc37455f85",
		"ts": "2026-08-02T14:59:12.665Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 373670.74,
		"hash": "c2bc37455f853802921a0473e24867ed8d658980ea3d23eb5204d76c56d2e008"
	},
	{
		"id": "d26144f263ac",
		"ts": "2026-08-02T14:59:12.918Z",
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
		"liquidityUsd": 9324731.06,
		"hash": "d26144f263acab805f8f2d1d5c0637679ce9bfa92e5b089aa157a36842f3e0d3"
	},
	{
		"id": "ff9d96643895",
		"ts": "2026-08-02T14:59:13.149Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 298975.87,
		"hash": "ff9d96643895e9fdb1b890a4eb251f8adbde14818b04f60ec60e4cd131b3560d"
	},
	{
		"id": "d9046e74a975",
		"ts": "2026-08-02T14:59:13.384Z",
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
		"liquidityUsd": 744912.6,
		"hash": "d9046e74a97553636fbd6640e275673a8e85ac31c9b414c96c0e1aa064d761bc"
	},
	{
		"id": "dbed9225696f",
		"ts": "2026-08-02T14:59:13.611Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1839018.74,
		"hash": "dbed9225696f3cf356751857b142681fbfb75a16163e10704e9dd9b577b7abcf"
	},
	{
		"id": "13cad4d9d91b",
		"ts": "2026-08-02T14:59:13.840Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4653263.11,
		"hash": "13cad4d9d91ba3190816be475abb77ab7873f369f00edb227701a2dd64b4d4b1"
	},
	{
		"id": "771a42b05d1d",
		"ts": "2026-08-02T14:59:14.065Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1899960,
		"hash": "771a42b05d1dc9c14fcf995835c6640eef0e7e6cd16bc420ad3f63d40ab18e84"
	},
	{
		"id": "f80bc096af49",
		"ts": "2026-08-02T13:44:18.662Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111692335.98,
		"hash": "f80bc096af49c352f1b5732bb9be68cc020d60bb212eb273c782224f06f0805b"
	},
	{
		"id": "c4feea842477",
		"ts": "2026-08-02T13:44:19.029Z",
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
		"liquidityUsd": 17468854.37,
		"hash": "c4feea842477decccaed45f780b6996f6ef44aac7c2fd6ff2b1998d7bcf687e2"
	},
	{
		"id": "ff797022a517",
		"ts": "2026-08-02T13:44:19.402Z",
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
		"liquidityUsd": 1106560.04,
		"hash": "ff797022a517adeb38be94565e46cc929840b148488fe96e449dde9452c579c0"
	},
	{
		"id": "8a7f6540f1ef",
		"ts": "2026-08-02T13:44:19.639Z",
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
		"liquidityUsd": 24728668.75,
		"hash": "8a7f6540f1efcf2e6ca3725c7daa7965a55df24ba7e00d8de3d8f7add735af9e"
	},
	{
		"id": "4a3736beb1e0",
		"ts": "2026-08-02T13:44:19.869Z",
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
		"liquidityUsd": 4378094.68,
		"hash": "4a3736beb1e042ae5a350578882b90ea5bf14d79d2317308dd3f97f003bcda57"
	},
	{
		"id": "721ab4c7849d",
		"ts": "2026-08-02T13:44:20.077Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894811.86,
		"hash": "721ab4c7849df32a176ba343442ee69b3f535d258778f0bbdf10b8f0c646fe3a"
	},
	{
		"id": "ce1869ec4b2c",
		"ts": "2026-08-02T13:44:20.274Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24728668.75,
		"hash": "ce1869ec4b2cf89e77252afd9bfa7efacdec621e5e6d749b0ceced07fccddbdf"
	},
	{
		"id": "ad3a7f25bdf9",
		"ts": "2026-08-02T13:44:20.492Z",
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
		"liquidityUsd": 4182529.93,
		"hash": "ad3a7f25bdf99c8d33c52fa7b68bf91e660057e1e4bfc27c6c80f5853891b9d0"
	},
	{
		"id": "f06352cdac23",
		"ts": "2026-08-02T13:44:20.694Z",
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
		"liquidityUsd": 9327806.85,
		"hash": "f06352cdac23ff0129b09523370651d688c25f1def599ea76f37bb7481338762"
	},
	{
		"id": "2889f2b24d88",
		"ts": "2026-08-02T13:44:20.896Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 375730.65,
		"hash": "2889f2b24d884465078a8bcd312403becb12cc2b14d8d56685dd473aab72783f"
	},
	{
		"id": "fa8f2b0d3bd4",
		"ts": "2026-08-02T13:44:21.110Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4658047.63,
		"hash": "fa8f2b0d3bd484314910d659d5e6129f8010e782e9c55b8d55f9bee5d659f05f"
	},
	{
		"id": "46777fad1bac",
		"ts": "2026-08-02T13:44:21.367Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 290103.55,
		"hash": "46777fad1bac275a14036ac1dce7f740489c1aff22c80dd0ffca169efd8f97e4"
	},
	{
		"id": "1ba5540b8634",
		"ts": "2026-08-02T13:44:21.555Z",
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
		"liquidityUsd": 750326.98,
		"hash": "1ba5540b8634cdf6b82a1edc7cfc67b286bdc31816989d0d1e462f2f9da930db"
	},
	{
		"id": "93e5be78efc9",
		"ts": "2026-08-02T13:44:21.752Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1841272.26,
		"hash": "93e5be78efc9c4bc242f15c73651ccf73851e6670633b0d556d20b5eb406894c"
	},
	{
		"id": "0606bff16c8f",
		"ts": "2026-08-02T13:44:21.950Z",
		"symbol": "KAITO",
		"token": "0x98d0baa52b2D063E780DE12F615f963Fe8537553",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 48817.66,
		"hash": "0606bff16c8ff5c0058c2b93e7725c8e37dfca44039b94d2f269e9a763fe6245"
	},
	{
		"id": "2446771bc074",
		"ts": "2026-08-02T11:59:31.377Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111691808.34,
		"hash": "2446771bc0749e5b9c526ba40906233c03394eb60016840d7169a7225aa22abb"
	},
	{
		"id": "42abe283dd24",
		"ts": "2026-08-02T11:59:31.853Z",
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
		"liquidityUsd": 13827794.28,
		"hash": "42abe283dd244a4af5d7b3596e1ef5f27426a8dc7ca97bdb274722fde6c53a41"
	},
	{
		"id": "156b70fb9934",
		"ts": "2026-08-02T11:59:32.113Z",
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
		"liquidityUsd": 1109575.01,
		"hash": "156b70fb99349d5ed86400edbcc520fa85f8834eac93bf82038b53205c5b9b03"
	},
	{
		"id": "cea76b98e25c",
		"ts": "2026-08-02T11:59:32.368Z",
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
		"liquidityUsd": 24581476.31,
		"hash": "cea76b98e25c4a07b8ac45a27233595b0fa81d2ade53bf6705cb9aeb0fb7940e"
	},
	{
		"id": "e00697340d12",
		"ts": "2026-08-02T11:59:32.858Z",
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
		"liquidityUsd": 4411088.29,
		"hash": "e00697340d12dcb906530cf410a8634f20c886d495f261de84a5256011390b64"
	},
	{
		"id": "884cfb299cdc",
		"ts": "2026-08-02T11:59:33.110Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 899716.47,
		"hash": "884cfb299cdc1048099495c923e344ba49af0058a7118e238a91636ec41154ff"
	},
	{
		"id": "6cfdf028fef8",
		"ts": "2026-08-02T11:59:33.366Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 907362.05,
		"hash": "6cfdf028fef8fead57872f838f95b8f9f5f61efea2cab573fcc555f1fb796f40"
	},
	{
		"id": "615cc27218ea",
		"ts": "2026-08-02T11:59:33.623Z",
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
		"liquidityUsd": 4173508.65,
		"hash": "615cc27218ea7e6858dbf6f1f890ba7a17f0aba74415d828bef2c2245e07d6a4"
	},
	{
		"id": "0bfaf961744a",
		"ts": "2026-08-02T11:59:33.875Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 380309.73,
		"hash": "0bfaf961744a9c6b05ae78fb282d1862a3bc796863ca3e5914398913067eeec5"
	},
	{
		"id": "0546cc095b7f",
		"ts": "2026-08-02T11:59:34.130Z",
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
		"liquidityUsd": 9244613.72,
		"hash": "0546cc095b7fc1ce1ca0f24272af3644023493a8b601b5758fd78e3c65eba7d9"
	},
	{
		"id": "350ae1f4174b",
		"ts": "2026-08-02T11:59:34.369Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4653927.99,
		"hash": "350ae1f4174bf9f01912d8fc186540593bfa9d70b6be12fda1b7ef258e5165d0"
	},
	{
		"id": "89af271aabcb",
		"ts": "2026-08-02T11:59:34.607Z",
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
		"liquidityUsd": 741964.22,
		"hash": "89af271aabcba11c71e3f7cb6876d21beafb58300617ad3c21235624cd49cb63"
	},
	{
		"id": "520d195e5734",
		"ts": "2026-08-02T11:59:34.846Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 142986.46,
		"hash": "520d195e57348053dfa99ec793b1a5e1fa5142251fdb70e8de5cc3dbe302747e"
	},
	{
		"id": "50b926ce526f",
		"ts": "2026-08-02T11:59:35.083Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1994814.23,
		"hash": "50b926ce526fedeb373a5528bc89448130dd632b057fe89a03ec995b5dbdb481"
	},
	{
		"id": "ba9e752c95af",
		"ts": "2026-08-02T11:59:35.320Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1831787.16,
		"hash": "ba9e752c95afa67826a582a99ca346f2e6b201a9c6c9bb9c55b2217a94716e07"
	},
	{
		"id": "8381af22c0f5",
		"ts": "2026-08-02T10:37:45.309Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112149948.76,
		"hash": "8381af22c0f5b2b7abe2de1568d6e5b782d146660b185dd7aea21b6463ae5022"
	},
	{
		"id": "a528fc263f83",
		"ts": "2026-08-02T10:37:45.659Z",
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
		"liquidityUsd": 17425802.37,
		"hash": "a528fc263f838ab7ef1e236a30c689d8d9f3f5d923d10456d84e343b7a2c4b4e"
	},
	{
		"id": "8affce6cf09f",
		"ts": "2026-08-02T10:37:46.058Z",
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
		"liquidityUsd": 1117317.15,
		"hash": "8affce6cf09f510ee1ffbcdc4ac3f5fdd7024f84d4b8dc96c3129e233b467789"
	},
	{
		"id": "34af73752300",
		"ts": "2026-08-02T10:37:46.347Z",
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
		"liquidityUsd": 24583112.46,
		"hash": "34af73752300f9c9efb8072c5c09ad79d4fcf87f96fecfb0b1beb723e18d489e"
	},
	{
		"id": "6095f1738556",
		"ts": "2026-08-02T10:37:46.592Z",
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
		"liquidityUsd": 4411088.29,
		"hash": "6095f17385561a72567bd9e7781bd4b9b8344b3922ad61aa5176d7ec3d6a0998"
	},
	{
		"id": "c7575c13b1af",
		"ts": "2026-08-02T10:37:46.839Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895021.78,
		"hash": "c7575c13b1af82090c97243d6db440b257dcf95feefeb9f483ba49fbf5c196cc"
	},
	{
		"id": "1e2af34302ca",
		"ts": "2026-08-02T10:37:47.031Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 907362.05,
		"hash": "1e2af34302ca0db734e937a5b959284b624bed3472afa2321aaddf967b2dcf17"
	},
	{
		"id": "1d9c41f3623f",
		"ts": "2026-08-02T10:37:47.387Z",
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
		"liquidityUsd": 4208005.6,
		"hash": "1d9c41f3623ffe631561ac0bbc39b9940d7db166cc62dc8a6d5967bcdddff6d6"
	},
	{
		"id": "a917613460cc",
		"ts": "2026-08-02T10:37:47.632Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 382086.98,
		"hash": "a917613460cc5b9207c132363bb6932fd79fa2315baca8733012bf658fb3ca40"
	},
	{
		"id": "a6009563d58f",
		"ts": "2026-08-02T10:37:47.886Z",
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
		"liquidityUsd": 9310182.25,
		"hash": "a6009563d58f78549551b901b2180ed3dfc255ecc527c4e204799434eb1caa18"
	},
	{
		"id": "84c94799d61d",
		"ts": "2026-08-02T10:37:48.086Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4654143.89,
		"hash": "84c94799d61d08b75a115f2538715ab8466e019b7e73a1640b37922062046266"
	},
	{
		"id": "bf8fde02fd79",
		"ts": "2026-08-02T10:37:48.282Z",
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
		"liquidityUsd": 738632.52,
		"hash": "bf8fde02fd795cf2e83bb317b036957dc2cfb9e46c85b4b3dfebce3726b40bde"
	},
	{
		"id": "46c33344488d",
		"ts": "2026-08-02T10:37:48.755Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 288346.37,
		"hash": "46c33344488df91664298fa0b54117bd25e6922940456ca6e5e79c2825a9840c"
	},
	{
		"id": "56897552ee5d",
		"ts": "2026-08-02T10:37:48.948Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148084.06,
		"hash": "56897552ee5df3ee8bdba80d3fa2cbf4e5cef8be760c0a3f95ba9498c30a4d76"
	},
	{
		"id": "e8bba0fae313",
		"ts": "2026-08-02T10:37:49.144Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1912759.6,
		"hash": "e8bba0fae313cbed33e77a761c02e83debbced638baf6b279cb2cdf323c64e45"
	},
	{
		"id": "1182adac37db",
		"ts": "2026-08-02T08:16:50.107Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112454935.51,
		"hash": "1182adac37dbb2a33e3d34bce40a74dc175f8b07a1e82d44553833ee20d8bd77"
	},
	{
		"id": "3befe6d5cceb",
		"ts": "2026-08-02T08:16:50.558Z",
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
		"liquidityUsd": 17125851.86,
		"hash": "3befe6d5cceb5d810d9a14865a45812c5e7f517879c6752b429ab42b2008089d"
	},
	{
		"id": "9e8c2287468d",
		"ts": "2026-08-02T08:16:50.806Z",
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
		"liquidityUsd": 1127293.31,
		"hash": "9e8c2287468d49aaf2e49e29ba847721f1f68c3893c1dae620e724249db7b9d6"
	},
	{
		"id": "e430ae757686",
		"ts": "2026-08-02T08:16:51.069Z",
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
		"liquidityUsd": 24656204.21,
		"hash": "e430ae757686d8275795ee4582e6b21ef841290bd4262595648fd6f003eda134"
	},
	{
		"id": "8131a7d48eeb",
		"ts": "2026-08-02T08:16:51.312Z",
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
		"liquidityUsd": 4426978.5,
		"hash": "8131a7d48eeb4723a2401c95e888696b905506dcb8dd0329a5e46ba7fa7aa1ca"
	},
	{
		"id": "251dd0feff99",
		"ts": "2026-08-02T08:16:51.556Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 899652.51,
		"hash": "251dd0feff9948a6d9c03b944a72a268bcb2952c5b3ce97f4fc4796cd8f96cc5"
	},
	{
		"id": "d1c16be44142",
		"ts": "2026-08-02T08:16:51.794Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 907362.44,
		"hash": "d1c16be441424d567193669e019597d7f65dca3939e156d5f9eb50391cc2fd42"
	},
	{
		"id": "34c1444eb195",
		"ts": "2026-08-02T08:16:52.035Z",
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
		"liquidityUsd": 4232065.04,
		"hash": "34c1444eb195f7a39c5d56325c0ebac7c6f0a85ae094100c12149269290f2f93"
	},
	{
		"id": "0dd779c65603",
		"ts": "2026-08-02T08:16:52.278Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 550567.15,
		"hash": "0dd779c65603adab30ea8aa4e8c8b041d2c381aedd6426b7a3af39301325043c"
	},
	{
		"id": "14652632daa5",
		"ts": "2026-08-02T08:16:52.528Z",
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
		"liquidityUsd": 9384241.99,
		"hash": "14652632daa590094e9a29b736f0d270e2d504c1942c31a6091c5335201f47ac"
	},
	{
		"id": "7286cab1ba47",
		"ts": "2026-08-02T08:16:52.756Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 377324.78,
		"hash": "7286cab1ba47ac660f0e3420db3a555580ef301bc4ffb941bdd18d3959233aa8"
	},
	{
		"id": "b9bcafbda690",
		"ts": "2026-08-02T08:16:52.983Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4650104.12,
		"hash": "b9bcafbda6900ee489497d416da7ad5773bc7b4df140c002716266a702a9a321"
	},
	{
		"id": "fad68a0e0302",
		"ts": "2026-08-02T08:16:53.209Z",
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
		"liquidityUsd": 749271.37,
		"hash": "fad68a0e0302dd0ca35087e9f2cd986f6239b67a714cb861c83e802c2bb3f8e7"
	},
	{
		"id": "d7ea599aa818",
		"ts": "2026-08-02T08:16:53.437Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 286468.99,
		"hash": "d7ea599aa81880ff3ccec14af142e55973f425cdf9efec1a4152c2467a34f10d"
	},
	{
		"id": "b59dd5814953",
		"ts": "2026-08-02T08:16:53.664Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148283.13,
		"hash": "b59dd5814953d3854455f91b2e3d714dba7b2c1fe7b3b849e7f713c5a7b45ebd"
	},
	{
		"id": "e140e2a32ff3",
		"ts": "2026-08-02T08:16:53.889Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1863998.83,
		"hash": "e140e2a32ff3aa64732084fb20c2eac72bc463c7fa9707cf0d68a2148a5bd579"
	},
	{
		"id": "83ee6d348e8a",
		"ts": "2026-08-02T05:53:21.932Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112498832.49,
		"hash": "83ee6d348e8aeb646d1c4a5f525bf594cbac50ed195f1a64a05ea56710406b15"
	},
	{
		"id": "1e780b4e0c9b",
		"ts": "2026-08-02T05:53:22.377Z",
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
		"liquidityUsd": 17121031.79,
		"hash": "1e780b4e0c9b38478c446782b86a6d9fea252c8449beb4ce02a612b8b4d4ed55"
	},
	{
		"id": "2e15196807c8",
		"ts": "2026-08-02T05:53:22.621Z",
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
		"liquidityUsd": 1128691.44,
		"hash": "2e15196807c802c19a762a0942c5e87a365f39d7ab4f529b9e083060cae30a4a"
	},
	{
		"id": "acd558024653",
		"ts": "2026-08-02T05:53:23.080Z",
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
		"liquidityUsd": 24893468.71,
		"hash": "acd5580246530b81941fb32a8e668c138cb418068f60e9b326e69081c32bc5ea"
	},
	{
		"id": "13ddc80b0a9a",
		"ts": "2026-08-02T05:53:23.320Z",
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
		"liquidityUsd": 4391601.4,
		"hash": "13ddc80b0a9ad103ab4529d30476fb9f4f4579e3e8fc922c7dd0e4f3c5b20769"
	},
	{
		"id": "5e4ca6e2afda",
		"ts": "2026-08-02T05:53:23.566Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904762.09,
		"hash": "5e4ca6e2afda37777954cc4eb3d12b7c52e654872d040175240ad95a387f0d22"
	},
	{
		"id": "22854a4919d6",
		"ts": "2026-08-02T05:53:23.804Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 907362.44,
		"hash": "22854a4919d6b1b9e58abb1e5da6e036b02153f402fb6794ae143dfc9c610330"
	},
	{
		"id": "89294eed0b79",
		"ts": "2026-08-02T05:53:24.064Z",
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
		"liquidityUsd": 4229398.8,
		"hash": "89294eed0b790a2e5425d9943e459f0646275eaa3ef378d4e3bff2b7808d65a2"
	},
	{
		"id": "c60e1093c37d",
		"ts": "2026-08-02T05:53:24.307Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 550950.68,
		"hash": "c60e1093c37db395f0bda20bf39555d52a84563db1feb7294ec4bc9b76dc0c27"
	},
	{
		"id": "63d90e153c61",
		"ts": "2026-08-02T05:53:24.556Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 379757.95,
		"hash": "63d90e153c613a05cbee64dde73af9a629d5268a2ffdbedbd82ac4c8bd38f05a"
	},
	{
		"id": "946eac0685c8",
		"ts": "2026-08-02T05:53:24.780Z",
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
		"liquidityUsd": 758364.53,
		"hash": "946eac0685c8be9eb5b8d7f3e7bcceff9f8b1a35841aa69c50012610f1c4fc24"
	},
	{
		"id": "31c7a402066b",
		"ts": "2026-08-02T05:53:25.006Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9386685.59,
		"hash": "31c7a402066bcdb3f93ae8b6a8c81b805eb1c304d70929bfbc318f5862901dfb"
	},
	{
		"id": "21ab83cdf279",
		"ts": "2026-08-02T05:53:25.229Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 143324.62,
		"hash": "21ab83cdf279f3087136357332bdc9f6a85a9b64b50aa0eac0ded88ecd8977a9"
	},
	{
		"id": "4ba061b6d1b1",
		"ts": "2026-08-02T05:53:25.457Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1845487.12,
		"hash": "4ba061b6d1b1f873217702bcd01ecf72af1fdef54f881b1a53de1cd4a606e35d"
	},
	{
		"id": "a87007a577dd",
		"ts": "2026-08-02T05:53:25.682Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4326446.61,
		"hash": "a87007a577dd1ac00208bb07cf2b706e060b5b03c961fa6875ebb34d76dae35c"
	},
	{
		"id": "2505d38939ea",
		"ts": "2026-08-02T02:26:02.233Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112438223.91,
		"hash": "2505d38939ea32ef1a1240d2b85436d5f47f15652851e9aa5563692d0ebf6293"
	},
	{
		"id": "9447543775c2",
		"ts": "2026-08-02T02:26:02.525Z",
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
		"liquidityUsd": 14000825.34,
		"hash": "9447543775c21c9d206139da098820156a3dd98abf9a80731fd935347e9a6e74"
	},
	{
		"id": "76a28b4b5357",
		"ts": "2026-08-02T02:26:02.782Z",
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
		"liquidityUsd": 1123683.6,
		"hash": "76a28b4b53572627e63aaf703a97e7b28ed0fc66ff5c8ac3dc32f2db6eb48caa"
	},
	{
		"id": "d183911a03f6",
		"ts": "2026-08-02T02:26:03.041Z",
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
		"liquidityUsd": 24793689.21,
		"hash": "d183911a03f649d8b20b22d3193b1dd24e54afb29b950603c66b451bc4b153df"
	},
	{
		"id": "b8f8557661f2",
		"ts": "2026-08-02T02:26:03.312Z",
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
		"liquidityUsd": 4388827.51,
		"hash": "b8f8557661f2c5d9d6d7a36e2f564425406c7f1991d9524133c00682e4e9ac75"
	},
	{
		"id": "da4e4cab9e76",
		"ts": "2026-08-02T02:26:03.615Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904693.79,
		"hash": "da4e4cab9e76a9bea34cda97f3499c6662b4416e526267ad21e07dcad5ea19a4"
	},
	{
		"id": "ae8009a484e1",
		"ts": "2026-08-02T02:26:03.854Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24793689.21,
		"hash": "ae8009a484e1aec08ff5c519d83fc53add1054d1e2dd118fbdd2165abea6901e"
	}
]
