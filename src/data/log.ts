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
	"updatedAt": "2026-08-09T12:41:39.235Z",
	"tokensScored": 8506,
	"verdictsIssued": 8506,
	"safe": 7441,
	"risky": 640,
	"likelyRug": 425,
	"ticks": 517
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "580cdf6ecb41",
		"ts": "2026-08-09T12:41:35.895Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115212263.09,
		"hash": "580cdf6ecb414a4b64019a6f15e8bbd83feffcd8b3f7acea0bf5751f999fdd22"
	},
	{
		"id": "122580596f13",
		"ts": "2026-08-09T12:41:36.229Z",
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
		"liquidityUsd": 18099813.31,
		"hash": "122580596f13ad50b2c4eb5bb82c3f36d69bc5458e83d8b7d888b227200756fe"
	},
	{
		"id": "7bbe58977c9f",
		"ts": "2026-08-09T12:41:36.428Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "7bbe58977c9fa16f199c5d8a78a4ab41b8718f04470cb6792d2e32d9e5aa72e2"
	},
	{
		"id": "9af9fcad555f",
		"ts": "2026-08-09T12:41:36.614Z",
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
		"liquidityUsd": 26915938.66,
		"hash": "9af9fcad555fc0f0e4c8e6d0615bdb955b148073d8c446136424077529616b10"
	},
	{
		"id": "2319c1b6fe9b",
		"ts": "2026-08-09T12:41:36.805Z",
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
		"liquidityUsd": 4410363.15,
		"hash": "2319c1b6fe9b10ee8789ba97ffe9ee779260816149044e6d1355e84b056da52a"
	},
	{
		"id": "175e3f953648",
		"ts": "2026-08-09T12:41:37.000Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 930792.26,
		"hash": "175e3f9536484372ed1c0c54cf918246e768a638442910662a90e2ccc2215c0e"
	},
	{
		"id": "70a1d9bfbf2c",
		"ts": "2026-08-09T12:41:37.183Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26915938.66,
		"hash": "70a1d9bfbf2c992839137973be1f4ec4d63498edb6fa7732455dfa479d23d314"
	},
	{
		"id": "8b48e6e94524",
		"ts": "2026-08-09T12:41:37.377Z",
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
		"liquidityUsd": 4821847.36,
		"hash": "8b48e6e94524dae2b5c0972e77831ab8195a181b3667790077e136e4c92adaf3"
	},
	{
		"id": "22602e706b96",
		"ts": "2026-08-09T12:41:37.563Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4193229.16,
		"hash": "22602e706b9679f3232e96ac9a5d1d443d50c96407441ac077c4e6cb6ddd5fa6"
	},
	{
		"id": "014fa37080be",
		"ts": "2026-08-09T12:41:37.758Z",
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
		"liquidityUsd": 978285.04,
		"hash": "014fa37080beacdd5c1d5f3b25a47049fcc8009e1423aab91eb7730d2c522528"
	},
	{
		"id": "acf49ca4be4c",
		"ts": "2026-08-09T12:41:37.944Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71507.97,
		"hash": "acf49ca4be4cf3265fd2d3f27d557a298c3b1f013f6bcf1e3e870e907348472c"
	},
	{
		"id": "d444582bd7f8",
		"ts": "2026-08-09T12:41:38.127Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9392054.63,
		"hash": "d444582bd7f8e8807bb44c6032aa79605b49cfda6d9563f03a257cafd98def9d"
	},
	{
		"id": "9daa21826b77",
		"ts": "2026-08-09T12:41:38.315Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 290870.9,
		"hash": "9daa21826b775edf155532fa23056c148d5d4bcd64ae0dc98905d4d5cb786d6a"
	},
	{
		"id": "2aa2a1c12c1e",
		"ts": "2026-08-09T12:41:38.499Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1903355.22,
		"hash": "2aa2a1c12c1e4bbab3f19675ad84b2262e0a16f25be360cf1731750bd815539d"
	},
	{
		"id": "9917a688adf7",
		"ts": "2026-08-09T12:41:38.686Z",
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
		"liquidityUsd": 1495801.33,
		"hash": "9917a688adf769c994fc84e63432ebb645abab8307dcc7adfaa2ada4e03f9565"
	},
	{
		"id": "96937ae02a3d",
		"ts": "2026-08-09T12:41:38.865Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1724516.16,
		"hash": "96937ae02a3dfe78632ce8e330ea8defd35b30e70afb879ed34214d05cef8851"
	},
	{
		"id": "4e536fccf802",
		"ts": "2026-08-09T12:41:39.045Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 299562.43,
		"hash": "4e536fccf802703afe7bd377100f839957037424538a855acd90686ed41f03de"
	},
	{
		"id": "798ccc1bed5e",
		"ts": "2026-08-09T12:41:39.235Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 540393.14,
		"hash": "798ccc1bed5e5c0234dc308e6eb9d41b56670ac5b812a47407c4bf1f349c6978"
	},
	{
		"id": "ff452ef62932",
		"ts": "2026-08-09T11:24:47.166Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115219466.1,
		"hash": "ff452ef629328263b3a74b02bc1ca3bb6293dcd664190eec4cebe5dfb9f3ab8b"
	},
	{
		"id": "f7914d82e654",
		"ts": "2026-08-09T11:24:47.585Z",
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
		"liquidityUsd": 17757509.65,
		"hash": "f7914d82e65457e71a20f24281c0a63bfac8d9a8e051497084fe3a8ed29b5df0"
	},
	{
		"id": "e08b75c0cf03",
		"ts": "2026-08-09T11:24:47.817Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "e08b75c0cf030f34aa0d46438616d33eeb553843a27f633b77ac208fc20a0728"
	},
	{
		"id": "fef30565c9e9",
		"ts": "2026-08-09T11:24:48.062Z",
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
		"liquidityUsd": 26916833.01,
		"hash": "fef30565c9e940dbc3dfd0683ebadbb4e207046578d9da8fe20460bf2b2cbda5"
	},
	{
		"id": "1606c1f9f583",
		"ts": "2026-08-09T11:24:48.293Z",
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
		"liquidityUsd": 4420098.13,
		"hash": "1606c1f9f5834a2093948121a7b1ac5e0e89010d50aa02a97abe88db96e894c7"
	},
	{
		"id": "477ea3765fe3",
		"ts": "2026-08-09T11:24:48.523Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931089.13,
		"hash": "477ea3765fe3b75407b592095a3b5429c7bc496291cf2b0569c1077fbe6ed31b"
	},
	{
		"id": "f6bd2ea45adc",
		"ts": "2026-08-09T11:24:48.761Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26916833.01,
		"hash": "f6bd2ea45adc59fd8e08e587ed12170c8adbd963a22cbd53a457c4b18cc44867"
	},
	{
		"id": "3def4e394757",
		"ts": "2026-08-09T11:24:48.991Z",
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
		"liquidityUsd": 4827778.12,
		"hash": "3def4e3947577c4e0769f9b994dc26436845d719a01fd2b5be0cd7554331ab62"
	},
	{
		"id": "751debbcdf79",
		"ts": "2026-08-09T11:24:49.231Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4213239.6,
		"hash": "751debbcdf79c6665b3cd6c8d268cb5889dc22d62843e552c09d570127197f28"
	},
	{
		"id": "3b8abe3407fc",
		"ts": "2026-08-09T11:24:49.459Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 979133.29,
		"hash": "3b8abe3407fc7a4c2d1c71631aa49b72d9dea10ed1da8496862dc59648dd4ad9"
	},
	{
		"id": "462263dfec96",
		"ts": "2026-08-09T11:24:49.674Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71957.5,
		"hash": "462263dfec96fa13892515a15dba7763529348c19f0fc01d09fddaf1458f22e4"
	},
	{
		"id": "d65b8c90a6f2",
		"ts": "2026-08-09T11:24:49.890Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9423321.65,
		"hash": "d65b8c90a6f25aece25bb775b58995b21a9574c37892c2d5197d0a1639e7b856"
	},
	{
		"id": "9b3f2515b29c",
		"ts": "2026-08-09T11:24:50.106Z",
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
		"liquidityUsd": 290787.02,
		"hash": "9b3f2515b29c4a25f8ac579c9f533c229cbd55f07c8023c960b12544dff61b8c"
	},
	{
		"id": "4dec02efe7c8",
		"ts": "2026-08-09T11:24:50.322Z",
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
		"liquidityUsd": 1910984.2,
		"hash": "4dec02efe7c8eeb0a3c98b07fb38f6480f96c8b69d580a154f951858fdb50d77"
	},
	{
		"id": "8621068308c9",
		"ts": "2026-08-09T11:24:50.538Z",
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
		"liquidityUsd": 1497619.28,
		"hash": "8621068308c934c8f9bd80709411c8f0cdda6e674fba4d8fd09ccff5a123f6f6"
	},
	{
		"id": "3f2c49ca467f",
		"ts": "2026-08-09T11:24:50.754Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1729949.87,
		"hash": "3f2c49ca467f388f3383d007484a7dc2872931de759688da30a83fc2d4d67ef1"
	},
	{
		"id": "da2c24bd0a12",
		"ts": "2026-08-09T11:24:50.970Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 299798.66,
		"hash": "da2c24bd0a12e8d8dc84e6e373e16e3b89bfce92c43e9034f870e118f8b9ebfa"
	},
	{
		"id": "87be4f42a7c2",
		"ts": "2026-08-09T11:24:51.187Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 541278.56,
		"hash": "87be4f42a7c29605f64f9cd890aa02564999b4fa769e744d76a22bfb7f602921"
	},
	{
		"id": "058200b39123",
		"ts": "2026-08-09T10:30:05.196Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115215352.07,
		"hash": "058200b39123a57dcdf54f8fdcd86a6c7a08212d7656ab916e23836816856b63"
	},
	{
		"id": "458de95607c7",
		"ts": "2026-08-09T10:30:05.433Z",
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
		"liquidityUsd": 18134775.64,
		"hash": "458de95607c74576a6ee2187141ae60e96231ea926505d213aafe1ffe0a64e90"
	},
	{
		"id": "4c095a2e3dd2",
		"ts": "2026-08-09T10:30:05.675Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "4c095a2e3dd2f9a341336d36f6d3614a0f2dbc39e532b5d31716ff3a764fc4ba"
	},
	{
		"id": "d3d085017e72",
		"ts": "2026-08-09T10:30:05.905Z",
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
		"liquidityUsd": 26918804.83,
		"hash": "d3d085017e72e4448d4937d07d4c8322f8ae8577a61a797105911f27c7629a91"
	},
	{
		"id": "87d847e9f1a1",
		"ts": "2026-08-09T10:30:06.140Z",
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
		"liquidityUsd": 4422034.87,
		"hash": "87d847e9f1a1966500003df4044fd400b299338b3ceb3a3c4235d60da8ec384b"
	},
	{
		"id": "ce9f21dd95fb",
		"ts": "2026-08-09T10:30:06.379Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931529.09,
		"hash": "ce9f21dd95fbad8a519eaf3a4520bd2310ba0a50497496d8f122c50d375f97b1"
	},
	{
		"id": "28944ba9f95c",
		"ts": "2026-08-09T10:30:06.627Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26918804.83,
		"hash": "28944ba9f95c3b185d9ff1b1359e2a3f50605474bd02048e33355b22ec84a908"
	},
	{
		"id": "1d89519aefc0",
		"ts": "2026-08-09T10:30:06.896Z",
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
		"liquidityUsd": 4827928.93,
		"hash": "1d89519aefc064684325a0f050847d0765613aca44adae46a4957189b2874d92"
	},
	{
		"id": "372001329ccb",
		"ts": "2026-08-09T10:30:07.155Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 976784.02,
		"hash": "372001329ccb8194b4692658350500a09ed484ccb839594f027b8d086321d300"
	},
	{
		"id": "e32f0bc7305a",
		"ts": "2026-08-09T10:30:07.382Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4219780.62,
		"hash": "e32f0bc7305a045c01dc34080d261cadff603b83fdfc13f8852bcb4bf3917ddb"
	},
	{
		"id": "7e18241d8dc1",
		"ts": "2026-08-09T10:30:07.593Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71404.35,
		"hash": "7e18241d8dc1b3199b6ea36926740e1f4eab886f4dc402218752caf6fc6f41c7"
	},
	{
		"id": "f4298a80b46b",
		"ts": "2026-08-09T10:30:07.802Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9292612.9,
		"hash": "f4298a80b46b5bcb2cfb0bdb92d3a56ca57d5f54de76b9b482ccaeeb1bc60e99"
	},
	{
		"id": "dbb36701914f",
		"ts": "2026-08-09T10:30:08.016Z",
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
		"liquidityUsd": 292805.75,
		"hash": "dbb36701914f9e39df65e50709aaf00dbe58d05eb32da65d77dcfd773653c3a3"
	},
	{
		"id": "b798e06df52f",
		"ts": "2026-08-09T10:30:08.229Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 81128.43,
		"hash": "b798e06df52f27129d5ff612b06e6a4820f7a755c54da8c822cab5aa37ec4ac2"
	},
	{
		"id": "4ccb2cd941e3",
		"ts": "2026-08-09T10:30:08.438Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1910790.9,
		"hash": "4ccb2cd941e31efddb61f2b64bc9f59e1df6aa65b250bf421b26f22a45570dec"
	},
	{
		"id": "e52b696e4ccf",
		"ts": "2026-08-09T10:30:08.646Z",
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
		"liquidityUsd": 1497324.72,
		"hash": "e52b696e4ccf0bdb5cd6cb53d5f47289f11c4e2657259ac9b67fff73ea301dbc"
	},
	{
		"id": "dbe1a5584b8c",
		"ts": "2026-08-09T10:30:08.861Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 300106.26,
		"hash": "dbe1a5584b8c4908928a8cba2bb2868d7fefa6a20985b47b5c2f5be3f388567a"
	},
	{
		"id": "039020ea0a07",
		"ts": "2026-08-09T09:35:09.622Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115227848.19,
		"hash": "039020ea0a0782a915884e067631d9267cf10b71f01f5aeb61ec6d3235bcad04"
	},
	{
		"id": "36ef32cfc99e",
		"ts": "2026-08-09T09:35:09.862Z",
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
		"liquidityUsd": 18239773.36,
		"hash": "36ef32cfc99eba0cd93368edb4d8b7785c94d324cf4006b806312c31e651483c"
	},
	{
		"id": "21ddcfc1a6da",
		"ts": "2026-08-09T09:35:10.092Z",
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
		"liquidityUsd": 1044764.45,
		"hash": "21ddcfc1a6da62e7b47e44a3c2cf7505baf8eebb6669c9629375cec9e279cd70"
	},
	{
		"id": "ecb622763b4b",
		"ts": "2026-08-09T09:35:10.334Z",
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
		"liquidityUsd": 26940713.79,
		"hash": "ecb622763b4b3e051cb8534913e8be1e570b66ffb52b0b283d9dce2d51938f83"
	},
	{
		"id": "ad9651c69dfb",
		"ts": "2026-08-09T09:35:10.560Z",
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
		"liquidityUsd": 4413898.93,
		"hash": "ad9651c69dfb7e9504e867b54d03dbf892c608df059be41aff64638583c49e87"
	},
	{
		"id": "cf24f3a3de70",
		"ts": "2026-08-09T09:35:10.800Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 930656.63,
		"hash": "cf24f3a3de708923d29cc0bb37c385ff4fce030c6f2ab48b10cd549a97dce285"
	},
	{
		"id": "b52baad238a3",
		"ts": "2026-08-09T09:35:11.026Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26940713.79,
		"hash": "b52baad238a3a1fbd08ff842f0a8fed36c745b28918e80be23e1323e312a305a"
	},
	{
		"id": "f14d2bd2d192",
		"ts": "2026-08-09T09:35:11.265Z",
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
		"liquidityUsd": 4812067.85,
		"hash": "f14d2bd2d1925476b2f0502321ce8b0b521bebebd0b4c8bb6a03491ce433cedc"
	},
	{
		"id": "525d81c917e5",
		"ts": "2026-08-09T09:35:11.493Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 971846.09,
		"hash": "525d81c917e5a81298094afdc959b5f45d4bfc05e7d3e376d8ffbcbf2b772a99"
	},
	{
		"id": "4328719b5570",
		"ts": "2026-08-09T09:35:11.731Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4242612.07,
		"hash": "4328719b5570e1fc200e509b154ec6f39b2dd05c89030c618901283754f8adb0"
	},
	{
		"id": "99c28453a80f",
		"ts": "2026-08-09T09:35:11.955Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 68475.26,
		"hash": "99c28453a80f4ad4ef86d6bb28a4159f8505ca6d6cf2749b07e1b7be6b837fb7"
	},
	{
		"id": "a04b07882eec",
		"ts": "2026-08-09T09:35:12.170Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9249497.16,
		"hash": "a04b07882eec35be4edde150b7c0cfa59910f4f4083e9438335534017d6b150c"
	},
	{
		"id": "1806f9a1e316",
		"ts": "2026-08-09T09:35:12.455Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 293289.61,
		"hash": "1806f9a1e3165f2a31ed4ab691fd412c8debaa1f2e8faa1051ed7dc7bb5ef3a3"
	},
	{
		"id": "37181497b04d",
		"ts": "2026-08-09T09:35:12.693Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1908481.66,
		"hash": "37181497b04dbc6f8c86b06eb5dc6ad76983b013e23fe392477eb84fc1b0abf2"
	},
	{
		"id": "0fdf14fe84fd",
		"ts": "2026-08-09T09:35:12.917Z",
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
		"liquidityUsd": 1497608.28,
		"hash": "0fdf14fe84fd66c042137ea1677ce96fae6d6e66686588aded4ec0bd0114e5ca"
	},
	{
		"id": "41f1a41687ff",
		"ts": "2026-08-09T09:35:13.132Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 299954.82,
		"hash": "41f1a41687ffd14bde83611d7b25a886fcd5137c7b5645d61e069bb93564861c"
	},
	{
		"id": "696206f078dd",
		"ts": "2026-08-09T08:37:24.237Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115224263.51,
		"hash": "696206f078dda5d1dd4e124fd0cae7852db819fbf8f7e4e271583b6e65d4e506"
	},
	{
		"id": "7ee26bd49e8c",
		"ts": "2026-08-09T08:37:24.487Z",
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
		"liquidityUsd": 17423874.61,
		"hash": "7ee26bd49e8c42629344a5d93945b93bc0f61fcc6eea6f2c7a1f1b0087e04a0c"
	},
	{
		"id": "3e0c1a14e1b8",
		"ts": "2026-08-09T08:37:24.904Z",
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
		"liquidityUsd": 1044764.45,
		"hash": "3e0c1a14e1b8ea840fe839bb5be319cf95c4ad294bf4b6d7b2acceaf3e75fb47"
	},
	{
		"id": "a45ba2abe86d",
		"ts": "2026-08-09T08:37:25.132Z",
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
		"liquidityUsd": 27190784.19,
		"hash": "a45ba2abe86d1f56f67a56650d44a81684fa0f31f0b93228377ba0dfdefa79f6"
	},
	{
		"id": "d78a1551e3fa",
		"ts": "2026-08-09T08:37:25.371Z",
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
		"liquidityUsd": 4431463.11,
		"hash": "d78a1551e3fab2970d7871a79f3eb01c9608ec03cc6550df716e1bf68bb00726"
	},
	{
		"id": "8cdd5c34fe94",
		"ts": "2026-08-09T08:37:25.598Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927088.22,
		"hash": "8cdd5c34fe941d2ff555a151a72fc63923823e1be400c83ef846253956625388"
	},
	{
		"id": "1ca062a52e45",
		"ts": "2026-08-09T08:37:25.823Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27190784.19,
		"hash": "1ca062a52e4583b7f32b0d2649d11edb7dd76acfc025a954e3a8693715c8c31c"
	},
	{
		"id": "fe9bc83a26c1",
		"ts": "2026-08-09T08:37:26.062Z",
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
		"liquidityUsd": 4829963.12,
		"hash": "fe9bc83a26c1ea16f4d7c8ca65dea6694cd2b4428837029524e45e9b2abc9134"
	},
	{
		"id": "3406366d99c9",
		"ts": "2026-08-09T08:37:26.288Z",
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
		"liquidityUsd": 981511.64,
		"hash": "3406366d99c9d0e88d2545abcc559444ac6ccc4406e2c18a39e73692749fa130"
	},
	{
		"id": "2124bd96a55a",
		"ts": "2026-08-09T08:37:26.518Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4264193.35,
		"hash": "2124bd96a55a3e2c7918c66dc22de261c6b685a609b4798ce6426f91477cd44c"
	},
	{
		"id": "98977cd454a5",
		"ts": "2026-08-09T08:37:26.744Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 68366.39,
		"hash": "98977cd454a59977ed386db7b1da8199d14529f230802456ae4dd91dd55ea0dd"
	},
	{
		"id": "450864111b27",
		"ts": "2026-08-09T08:37:26.954Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9282169.34,
		"hash": "450864111b27b26af9eeebab40b0ca3d8b5c88c981a47c94fbfff970c8e89014"
	},
	{
		"id": "987128cfe1c8",
		"ts": "2026-08-09T08:37:27.166Z",
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
		"liquidityUsd": 292927.01,
		"hash": "987128cfe1c83fa1aa4cc1029d76b96ce0b50245cefc590c928fc2d8cf8b3918"
	},
	{
		"id": "23a6c9927b7f",
		"ts": "2026-08-09T08:37:27.390Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1911268.11,
		"hash": "23a6c9927b7f0c57ed1b13add403896f559c976b60166f57c99c51b4a024d45c"
	},
	{
		"id": "539d66db2a2d",
		"ts": "2026-08-09T08:37:27.603Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 301212.76,
		"hash": "539d66db2a2d53a533bb17501daf3eb0ec3e55cac74745119f1b92c7aa68c23c"
	},
	{
		"id": "ec7d21dbf40f",
		"ts": "2026-08-09T08:37:27.826Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 48451.81,
		"hash": "ec7d21dbf40f219949f722f6df54c7977464b19317275d4c292325cbd783ffdc"
	},
	{
		"id": "ca7d9c4cc10a",
		"ts": "2026-08-09T08:37:28.037Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 536775.17,
		"hash": "ca7d9c4cc10a8ceb0dffdd7d3170edab317d3395489c300e326ca6a42eab5603"
	},
	{
		"id": "e2b124b2c28a",
		"ts": "2026-08-09T08:37:28.260Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73388.37,
		"hash": "e2b124b2c28aa80179b29da9d1370954c3d8fd5a4336829ab24efd11dbf8750f"
	},
	{
		"id": "37abe430231d",
		"ts": "2026-08-09T07:51:09.255Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115156784.99,
		"hash": "37abe430231deab839728eddd35a0483544e8463d5008697b98474952b401564"
	},
	{
		"id": "5a2e3ccefd91",
		"ts": "2026-08-09T07:51:09.482Z",
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
		"liquidityUsd": 17359020.92,
		"hash": "5a2e3ccefd91ccb6b799ad5b20ce6de3baeb85df2dc341f4dbdd6c4a04ebc190"
	},
	{
		"id": "64f144814397",
		"ts": "2026-08-09T07:51:09.689Z",
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
		"liquidityUsd": 1044764.45,
		"hash": "64f14481439786fa734ea08797727c747f3df4572ab5f75f93333e0ab08b91c2"
	},
	{
		"id": "fdf5aab21230",
		"ts": "2026-08-09T07:51:09.892Z",
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
		"liquidityUsd": 27190924.14,
		"hash": "fdf5aab21230d4937b840f07ee775fcc446968c69c1b06161b3c68a986c60952"
	},
	{
		"id": "950d9b5d43e0",
		"ts": "2026-08-09T07:51:10.107Z",
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
		"liquidityUsd": 4422553.91,
		"hash": "950d9b5d43e069dc212d571894b6e078587e35120f6fca783ac8dbfbc17ed7b7"
	},
	{
		"id": "58e6c16cf62c",
		"ts": "2026-08-09T07:51:10.316Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927147.72,
		"hash": "58e6c16cf62cbae2f187be7aed0ceaba6f088127a2675e789279540df3929354"
	},
	{
		"id": "5734624c7c47",
		"ts": "2026-08-09T07:51:10.523Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27190924.14,
		"hash": "5734624c7c4733b0aa63cf85d67b278feb7c13de40e1ddc69ef3e4239b422734"
	},
	{
		"id": "a5409e60709a",
		"ts": "2026-08-09T07:51:10.734Z",
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
		"liquidityUsd": 4820838.25,
		"hash": "a5409e60709a1501d22f0b668534d7e5d5d31d0d5ed995520711a9643e619056"
	},
	{
		"id": "59ab5ee0227d",
		"ts": "2026-08-09T07:51:10.953Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4257680.94,
		"hash": "59ab5ee0227d30cee5eba7e5774f4d3e13be5a71c78da099bb79e52b4a9f7e13"
	},
	{
		"id": "d50a51199b2d",
		"ts": "2026-08-09T07:51:11.151Z",
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
		"liquidityUsd": 986805.28,
		"hash": "d50a51199b2ddb039e3e257d8c024e4aecc153b7fb6caa6ad0a766eeae7dd29d"
	},
	{
		"id": "b1539fdad20c",
		"ts": "2026-08-09T07:51:11.341Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 67665.96,
		"hash": "b1539fdad20c73de988db63cc5b0ce24e6edbe99e80707f339bcda36d8ce0456"
	},
	{
		"id": "9cd30106ef88",
		"ts": "2026-08-09T07:51:11.525Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9260497.67,
		"hash": "9cd30106ef886aa07c2c870c92c49de0ee3828fe803d40dd2009ed1594052c3d"
	},
	{
		"id": "895dbe10f76e",
		"ts": "2026-08-09T07:51:11.716Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 290610.58,
		"hash": "895dbe10f76eda2ac5932076074968915a239e4330c931ed270754660a40f5f0"
	},
	{
		"id": "0af055699fb5",
		"ts": "2026-08-09T07:51:11.899Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 300700.09,
		"hash": "0af055699fb52c73ca1039f5d4acb3abe3235883e6986462b6c637afded8299d"
	},
	{
		"id": "ef8a1f2f4025",
		"ts": "2026-08-09T07:51:12.090Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1912038.47,
		"hash": "ef8a1f2f40257685b51f4953eefce1777265675ff59617244ab77b0df18e48dd"
	},
	{
		"id": "4799be890957",
		"ts": "2026-08-09T07:51:12.289Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 535201.4,
		"hash": "4799be8909574809a37776e1c8a2e8476feefc6ed12440d87a9ef6de187c2155"
	},
	{
		"id": "1ec01faa98d1",
		"ts": "2026-08-09T07:51:12.542Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 48451.71,
		"hash": "1ec01faa98d1d3b660ae75a3a214f10fa57de8e1e2d838940b48de82402e5a75"
	},
	{
		"id": "041ed9c5a829",
		"ts": "2026-08-09T07:51:12.723Z",
		"symbol": "OpenAI",
		"token": "0x6B458b475695121b78b7ef8Fa88a73973c6bCb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4340826.34,
		"hash": "041ed9c5a8290835ada28f04237b389981075a66ce5fa281566718571f6ef9ea"
	},
	{
		"id": "284a5231f97d",
		"ts": "2026-08-09T06:49:59.757Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115128123.61,
		"hash": "284a5231f97d2bde6d0cae3aa1e6102a228541e152b0689730fda85e43212bc4"
	},
	{
		"id": "cfa2ce68e723",
		"ts": "2026-08-09T06:50:00.188Z",
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
		"liquidityUsd": 15117458.04,
		"hash": "cfa2ce68e723e84b894e6526ffa2edc0736ef0097292bed26da26ac57b1ab045"
	},
	{
		"id": "b0704b7d34b0",
		"ts": "2026-08-09T06:50:00.425Z",
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
		"liquidityUsd": 1045945.06,
		"hash": "b0704b7d34b0b804f6e47c3e4b0f103409bea2ef6ee4acc5f9c4b49a1c0e25ee"
	},
	{
		"id": "09e51bea35d2",
		"ts": "2026-08-09T06:50:00.658Z",
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
		"liquidityUsd": 27196932.91,
		"hash": "09e51bea35d2e4c3c7fe09c4cd520f4bb711d0f325532b47fe765a80c7b07278"
	},
	{
		"id": "09b4db1032b1",
		"ts": "2026-08-09T06:50:00.889Z",
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
		"liquidityUsd": 4410310.12,
		"hash": "09b4db1032b1a2635512c37b94478d94bb20354e1d529906aff77b9a21119d65"
	},
	{
		"id": "1ade62ffb5d0",
		"ts": "2026-08-09T06:50:01.121Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932207.19,
		"hash": "1ade62ffb5d01c62605cb415af8419229ea074843fb8dab0bb9f78886f13a37e"
	},
	{
		"id": "3138f43cecde",
		"ts": "2026-08-09T06:50:01.442Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27196932.91,
		"hash": "3138f43cecde1d205834e6a3ec7dbb673bc1efa65d9487e64fa9f73ee1d8505b"
	},
	{
		"id": "b3936704b6dc",
		"ts": "2026-08-09T06:50:01.683Z",
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
		"liquidityUsd": 4822974.34,
		"hash": "b3936704b6dc6275e35930c4901a758a1c60c83f512d989c8bf12a935747d130"
	},
	{
		"id": "57c600488b95",
		"ts": "2026-08-09T06:50:01.916Z",
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
		"liquidityUsd": 986853.06,
		"hash": "57c600488b95927dbec6a88e215fd21535196c3662c6c2798dbd3e44ccb1a4e0"
	},
	{
		"id": "436588121bb3",
		"ts": "2026-08-09T06:50:02.160Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4259056.68,
		"hash": "436588121bb3a42751e032a16ec1e9b652c90a67b7a0fbc49a8054156e9d89e4"
	},
	{
		"id": "73a17f6b3941",
		"ts": "2026-08-09T06:50:02.398Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 67859.22,
		"hash": "73a17f6b39417d576f5def474b480a35ae53738486d76f79514695a7fcfdf987"
	},
	{
		"id": "a9fdb940f90a",
		"ts": "2026-08-09T06:50:03.031Z",
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
		"liquidityUsd": 9263229.11,
		"hash": "a9fdb940f90a866b55f08dedecc553a4642541471a6abc6bcc7a6f0ec81feccf"
	},
	{
		"id": "a314538dea8f",
		"ts": "2026-08-09T06:50:03.250Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 48354.43,
		"hash": "a314538dea8ff31faf71433371047423e434ea36234ae7d04b3ad6430ef1edd9"
	},
	{
		"id": "1f44f74e174b",
		"ts": "2026-08-09T06:50:03.468Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1910887.67,
		"hash": "1f44f74e174be68d57406e65d6e45a49e02f3d774c1f9b9ecd1b1d5580cf3561"
	},
	{
		"id": "f4d569c78bfe",
		"ts": "2026-08-09T06:50:03.687Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 301196.95,
		"hash": "f4d569c78bfe66da650d0f9a825fb9d9a200e4dc41c67169bb030364f76d1aaf"
	},
	{
		"id": "ec220d7922e5",
		"ts": "2026-08-09T06:50:03.906Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1784129.45,
		"hash": "ec220d7922e56a1a0b015e46aa8037b9b06d3502dc87c0623ad4c52256461175"
	},
	{
		"id": "dc86e58e01de",
		"ts": "2026-08-09T05:00:37.471Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115121904.86,
		"hash": "dc86e58e01deb758f12294ad4eb1276a9b2e594a0cb0148e2792d21dcf972ef3"
	},
	{
		"id": "bba647774682",
		"ts": "2026-08-09T05:00:37.891Z",
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
		"liquidityUsd": 17080565.35,
		"hash": "bba64777468250e2ad0c2f3d500a9ba912dc0f270210c7d6da0c3f5b98bb7b1d"
	},
	{
		"id": "bd0d62e4a0c3",
		"ts": "2026-08-09T05:00:38.135Z",
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
		"liquidityUsd": 1045945.06,
		"hash": "bd0d62e4a0c38721953d836285e8273c641024d219fb3d39837b45046931d341"
	},
	{
		"id": "d16381e44ce2",
		"ts": "2026-08-09T05:00:38.376Z",
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
		"liquidityUsd": 27216146.75,
		"hash": "d16381e44ce2f4e7622aed292cf4521a0579fdb3511e1e294bd881c4237b4b62"
	},
	{
		"id": "136d9466a5f6",
		"ts": "2026-08-09T05:00:38.622Z",
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
		"liquidityUsd": 4410564.79,
		"hash": "136d9466a5f615be45fb2686d7cffbd616e26c3446c84f95b2b8a46b3a563809"
	},
	{
		"id": "2c067c985567",
		"ts": "2026-08-09T05:00:38.931Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932695.64,
		"hash": "2c067c9855676acfb42fb7644c3a8e1daef9ed1e2c27d41497bd76c9e9e2f506"
	},
	{
		"id": "fef6b633ed5f",
		"ts": "2026-08-09T05:00:39.172Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27216146.75,
		"hash": "fef6b633ed5fc9d67602ff7044eb4f57f9d0542e71ca4ebf9451b6266e19107e"
	},
	{
		"id": "2d75dc74681f",
		"ts": "2026-08-09T05:00:39.417Z",
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
		"liquidityUsd": 4750787.2,
		"hash": "2d75dc74681f0e47663d684ee9dab373a7f5f7bd8af7e355013b188e6db44e83"
	},
	{
		"id": "c4be9fd37fc5",
		"ts": "2026-08-09T05:00:39.645Z",
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
		"liquidityUsd": 986021.56,
		"hash": "c4be9fd37fc5b00380b3e3da875e9b2c53f73ff38909dfd3b7d9d53bebda30f1"
	},
	{
		"id": "733fba15f64b",
		"ts": "2026-08-09T05:00:39.869Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4242901.64,
		"hash": "733fba15f64b6e0dacf6eeab0dcb01657166b5ad30be7dcec05ae025ae593c21"
	},
	{
		"id": "3eba3bb71470",
		"ts": "2026-08-09T05:00:40.075Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66254.12,
		"hash": "3eba3bb71470c243dbadd2d717ec884d02c30b205818115ebf5f7031b0d98403"
	},
	{
		"id": "7bde597eff91",
		"ts": "2026-08-09T05:00:40.284Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 49201.67,
		"hash": "7bde597eff9139033ff7846748986c3559a8ede0d87aeca8ca8bc11ccfbee4c6"
	},
	{
		"id": "a176426b4cdb",
		"ts": "2026-08-09T05:00:40.493Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 349857.91,
		"hash": "a176426b4cdbdebd3eed4ff65626d2d815a6ed4f0a715cebe283aef4afed44ba"
	},
	{
		"id": "f633b489c01e",
		"ts": "2026-08-09T05:00:40.699Z",
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
		"liquidityUsd": 9235068.88,
		"hash": "f633b489c01e121b7ed19b29a8093292b6577ed4504f8e2f5f586f9084068d2f"
	},
	{
		"id": "1332d4beaccb",
		"ts": "2026-08-09T05:00:40.908Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1910308.74,
		"hash": "1332d4beaccbf4a1829496e500fb8af3d5820cf19556b0cb5ed1023c42100a88"
	},
	{
		"id": "a538fd4e63c3",
		"ts": "2026-08-09T05:00:41.115Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 298039.38,
		"hash": "a538fd4e63c3cff1838e0b4a90ccca1fb0913039140b6cd68118d6c058e05e6a"
	},
	{
		"id": "bdfb3fb710be",
		"ts": "2026-08-09T05:00:41.369Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 535331.12,
		"hash": "bdfb3fb710be5c992715d8d97eefb7e3e7366b8b7b3ad035fb81f49329edde96"
	},
	{
		"id": "c439d8a3063d",
		"ts": "2026-08-09T03:38:01.528Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115337881.52,
		"hash": "c439d8a3063d7106a3b532a6ee1de187ca6e6cddb1958098340fc441632a6318"
	},
	{
		"id": "5c9c8d883f3b",
		"ts": "2026-08-09T03:38:02.021Z",
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
		"liquidityUsd": 17620347.91,
		"hash": "5c9c8d883f3b51a8b038fa6d8870ba42cd963b9c4ffa2fda1c90462dd27b0794"
	},
	{
		"id": "4db92b1c94b2",
		"ts": "2026-08-09T03:38:02.279Z",
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
		"liquidityUsd": 1045945.06,
		"hash": "4db92b1c94b2d53cecf175be2ebad07eda60ec3e7536e85c92cdc87ca403b213"
	},
	{
		"id": "d25d84914e6c",
		"ts": "2026-08-09T03:38:02.602Z",
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
		"liquidityUsd": 27227493.99,
		"hash": "d25d84914e6ca3822ea92b792fbfc0a94ead1a0c7f141c375839b75a78c97df8"
	},
	{
		"id": "c768ce545f2d",
		"ts": "2026-08-09T03:38:02.850Z",
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
		"liquidityUsd": 4411946.37,
		"hash": "c768ce545f2dca8b14d8a6cb41d8c478a04f2cabec8b2a6fea0dbb73b4b94c92"
	},
	{
		"id": "37434d390d20",
		"ts": "2026-08-09T03:38:03.106Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932695.65,
		"hash": "37434d390d20425f0cd31dafa1cc8c30c446573d05e1ed37df0ba93bed7be653"
	},
	{
		"id": "2c7c13668b01",
		"ts": "2026-08-09T03:38:03.355Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27227493.99,
		"hash": "2c7c13668b012055709921206fc762e7bb6d906df8ef5f82170aa217cba68b08"
	},
	{
		"id": "0833178f00a6",
		"ts": "2026-08-09T03:38:03.598Z",
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
		"liquidityUsd": 4752922.95,
		"hash": "0833178f00a60af6b485ab1319766a7f1953865d1d3cfd1c529972e6ceb65e3d"
	},
	{
		"id": "6e99e2b9119d",
		"ts": "2026-08-09T03:38:03.942Z",
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
		"liquidityUsd": 985079.31,
		"hash": "6e99e2b9119d21a19edab7f8bcc2e20f385186f6d936b8eec7bd4d58caa6c8f9"
	},
	{
		"id": "bc6b02ab73c4",
		"ts": "2026-08-09T03:38:04.191Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4264921.31,
		"hash": "bc6b02ab73c44a13d0787841f4057abbea4d2bacb7e2fddb0822087edc33003d"
	},
	{
		"id": "ba5fe7f9a852",
		"ts": "2026-08-09T03:38:04.419Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 67214.81,
		"hash": "ba5fe7f9a852fe526e08fc4154a2c769081de4646564cf8d34f390932843eb5f"
	},
	{
		"id": "7f0edec62366",
		"ts": "2026-08-09T03:38:04.656Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 49221.43,
		"hash": "7f0edec62366d9da8d3fc7aba7c70d19412b028ee1cf71e81b3710ace0881dec"
	},
	{
		"id": "b681ea7717d0",
		"ts": "2026-08-09T03:38:04.940Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84248.14,
		"hash": "b681ea7717d002c96a1e59a16921a31955cfb4424f483235cbb96eb93800380a"
	},
	{
		"id": "7c9d1bfb0f82",
		"ts": "2026-08-09T03:38:05.170Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 350134.54,
		"hash": "7c9d1bfb0f82143f701dfe02b757432e56557ff2f8ec0c9c6a7a650209f5f8d0"
	},
	{
		"id": "7a6e9e5d75ac",
		"ts": "2026-08-09T03:38:05.408Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9240089.07,
		"hash": "7a6e9e5d75ac3d6c8c2c9ee29917f107766848895927f2a5356c7a04aa7cd0ec"
	},
	{
		"id": "ab1adea80403",
		"ts": "2026-08-09T03:38:05.639Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1908976.39,
		"hash": "ab1adea804031ef3d1a79bb3c44a281d43511871e8a4575a841cfcfb75b396ad"
	},
	{
		"id": "8669c5afd308",
		"ts": "2026-08-09T03:38:05.867Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74061.4,
		"hash": "8669c5afd308e2bdfcc8cd2f37f4ac9d6cf3716fd1a10e3ea9adbe2519868104"
	},
	{
		"id": "a8071867129b",
		"ts": "2026-08-09T01:21:36.139Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115344816.37,
		"hash": "a8071867129b71a14f676d0f6b4e4325316ccd4971c8c302bfbae11be10fc99f"
	},
	{
		"id": "4203acc8f663",
		"ts": "2026-08-09T01:21:36.350Z",
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
		"liquidityUsd": 16786091,
		"hash": "4203acc8f663e01ef00292273a9ee5f28b7f23ebd1b5f3a74bec96981b2d85a7"
	},
	{
		"id": "8e5d52b6b366",
		"ts": "2026-08-09T01:21:36.661Z",
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
		"liquidityUsd": 1045945.06,
		"hash": "8e5d52b6b366008be89d8b3157320ef770644575ace065439ab90710ba1ee8f9"
	},
	{
		"id": "2c9f2d81f3f5",
		"ts": "2026-08-09T01:21:36.862Z",
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
		"liquidityUsd": 27293705.75,
		"hash": "2c9f2d81f3f535693263732a0291330f0abe02fd5deae87959d12df38bc50267"
	},
	{
		"id": "2f09ad268521",
		"ts": "2026-08-09T01:21:37.058Z",
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
		"liquidityUsd": 4413036.81,
		"hash": "2f09ad2685214493e214709be111e1e78615dd5e009e1f48db1a7fb7b529e3f3"
	},
	{
		"id": "1f610a4da057",
		"ts": "2026-08-09T01:21:37.272Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 934084.48,
		"hash": "1f610a4da057a0897af3cd7d57981cbf67b75449f148751a99af8eaf7ebdf5ed"
	},
	{
		"id": "2049ca8b3a5c",
		"ts": "2026-08-09T01:21:37.469Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27293705.75,
		"hash": "2049ca8b3a5c3ab9ae1e0fcdc52a93fcbc35fa09ad539d12c012a7a7bc114791"
	},
	{
		"id": "571052352048",
		"ts": "2026-08-09T01:21:37.670Z",
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
		"liquidityUsd": 4493829.55,
		"hash": "571052352048810b552ffb00372033898b7a86e8fdfb2c265804806f354b54ae"
	},
	{
		"id": "493f6a4ca3cb",
		"ts": "2026-08-09T01:21:37.881Z",
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
		"liquidityUsd": 984363.94,
		"hash": "493f6a4ca3cbcc3bd0c54a079eee7a862a016bac12ebc58d5d58fc794a968f5c"
	},
	{
		"id": "2f3075ee9aab",
		"ts": "2026-08-09T01:21:38.077Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4450375.34,
		"hash": "2f3075ee9aabff3350201e0ac6ff7be71036cf146b306fdf8c385129227d1e55"
	},
	{
		"id": "873ac48492da",
		"ts": "2026-08-09T01:21:38.278Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 70397.24,
		"hash": "873ac48492dae4a674c96a067540b5ea4f826dcb7545c65abb9b3d1046d1390a"
	},
	{
		"id": "2258d4f47c5d",
		"ts": "2026-08-09T01:21:38.479Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 51724.23,
		"hash": "2258d4f47c5dd54255f9aa677e18f585ba41df08bb0c44ee229b2a83d92d68b5"
	},
	{
		"id": "b2059938703e",
		"ts": "2026-08-09T01:21:38.683Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 351262.17,
		"hash": "b2059938703ea19b517f2fdcb8e2432cc9e81e5392a0f883a3925b5e9f273986"
	},
	{
		"id": "4951753b56c5",
		"ts": "2026-08-09T01:21:38.940Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71763.91,
		"hash": "4951753b56c5eadc9adce3080b9b511fc0d29ecf80435ca12cd648120bf30a68"
	},
	{
		"id": "a23326e910ea",
		"ts": "2026-08-09T01:21:39.146Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 555534.41,
		"hash": "a23326e910ea520dda60ddd2961477a2ce238f65067bad50af2c9691fe1e75b5"
	},
	{
		"id": "e58287ddf6a8",
		"ts": "2026-08-09T01:21:39.358Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9309711.13,
		"hash": "e58287ddf6a87b8e028ced828882dcf5c289edbb52a080e5c52e631ac67d866a"
	},
	{
		"id": "aa0b9e9134ee",
		"ts": "2026-08-09T01:21:39.546Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1916827.43,
		"hash": "aa0b9e9134ee61cd44414e42cf64c153aa61393324b371b2f8ea11bc600ef025"
	},
	{
		"id": "7a97e696b211",
		"ts": "2026-08-09T01:21:39.733Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 332707.45,
		"hash": "7a97e696b2114e668166355fcdcc191ee0ac0d95136d364541d30df746a25020"
	},
	{
		"id": "3da243054950",
		"ts": "2026-08-08T23:24:02.820Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115322957.2,
		"hash": "3da243054950b2f35b3ccf0f1e7cabb8850c49f7f8f9df82bed4c5bc63c24027"
	},
	{
		"id": "1a0db131b792",
		"ts": "2026-08-08T23:24:03.276Z",
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
		"liquidityUsd": 16773032.66,
		"hash": "1a0db131b79260e3d8a2f954057ea96b7812f2cea3567adb5ce59f70154fa960"
	},
	{
		"id": "98ec1442d823",
		"ts": "2026-08-08T23:24:03.526Z",
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
		"liquidityUsd": 1047828.88,
		"hash": "98ec1442d823b1d5a4cff3a25dd80aa04f169cf475afa06ab1bbe15759e57acc"
	},
	{
		"id": "bb95ff24a5d6",
		"ts": "2026-08-08T23:24:03.775Z",
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
		"liquidityUsd": 27328202.5,
		"hash": "bb95ff24a5d6b079c2822c314a90585ea3310e1d07838cdc45624766e713e427"
	},
	{
		"id": "67d9a14c6b7f",
		"ts": "2026-08-08T23:24:04.024Z",
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
		"liquidityUsd": 4413036.81,
		"hash": "67d9a14c6b7fb6445de0079334f4630d75ef34e61c25452115e34ca4e72f8fc9"
	},
	{
		"id": "c02932aff3ba",
		"ts": "2026-08-08T23:24:04.271Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 935096.47,
		"hash": "c02932aff3ba5fba6ccc5700932842b4575e0d932f5d9f87b11ca4afee783f5c"
	},
	{
		"id": "9c889c468f14",
		"ts": "2026-08-08T23:24:04.521Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27328202.5,
		"hash": "9c889c468f14efd31339562020903bfa34752c7b6636739afe67092f2b042798"
	},
	{
		"id": "274ece7077ef",
		"ts": "2026-08-08T23:24:04.772Z",
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
		"liquidityUsd": 4489800.35,
		"hash": "274ece7077eff256b43773dcda678a125d32df998c387076d154c6f33e85102e"
	},
	{
		"id": "455a42ba2738",
		"ts": "2026-08-08T23:24:05.022Z",
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
		"liquidityUsd": 985254.62,
		"hash": "455a42ba273851d66c4a7a23cfee43956ea1971ffcd9b26b5873f116018b522d"
	},
	{
		"id": "04c6d318215a",
		"ts": "2026-08-08T23:24:05.302Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4250432.32,
		"hash": "04c6d318215a11e9cbc1865b6c2e980449d0b4cf7057d2ec1075aac6ebbeef98"
	},
	{
		"id": "74147380cad3",
		"ts": "2026-08-08T23:24:05.536Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 518942.64,
		"hash": "74147380cad389ea8e1aa37bd20681f0d97ca49cdc4642a01b40d2c2a6193f87"
	},
	{
		"id": "7760cc042fc3",
		"ts": "2026-08-08T23:24:05.839Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 51540.8,
		"hash": "7760cc042fc37f903c9db59f19a8716786b96fe8cc904cba177867b69ef6c308"
	},
	{
		"id": "c25909a97cd6",
		"ts": "2026-08-08T23:24:06.072Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 351305.92,
		"hash": "c25909a97cd68a3c37b7f8be2f3da4b06c15932150fd65a8366ea335bc90d565"
	},
	{
		"id": "24765c92fb32",
		"ts": "2026-08-08T23:24:06.305Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 68668.82,
		"hash": "24765c92fb329db79dbcad51073f77680dd7ac558ff3c778db104fda25aa64a7"
	},
	{
		"id": "def57b45b8db",
		"ts": "2026-08-08T23:24:06.542Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9276945.51,
		"hash": "def57b45b8dbae5c9e96fa96cb586761792ad2394dde763ee2df3ba80d47bb66"
	},
	{
		"id": "612dab58db37",
		"ts": "2026-08-08T23:24:06.774Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1911943.17,
		"hash": "612dab58db3793803e4efa65b7cd727a768fd0bccfe9892981235302a24addcf"
	},
	{
		"id": "b4e738eee641",
		"ts": "2026-08-08T23:24:07.015Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74041.24,
		"hash": "b4e738eee641e8447f28d89142001356b587ade4c1440738c44d9a2bd54d66f9"
	},
	{
		"id": "809f6d48f012",
		"ts": "2026-08-08T22:23:56.088Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115453585.1,
		"hash": "809f6d48f01249354e29216674c0cd16856c6cb879c1509acd4e67cbddc59a3b"
	},
	{
		"id": "9ca7d17fd813",
		"ts": "2026-08-08T22:23:56.278Z",
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
		"liquidityUsd": 16793877.12,
		"hash": "9ca7d17fd8138ded0eb358b7478a0b8a49f9b735aa9e4d1b7d7acf771cddaed6"
	},
	{
		"id": "e94e84564697",
		"ts": "2026-08-08T22:23:56.483Z",
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
		"liquidityUsd": 1048142.4,
		"hash": "e94e84564697b0f528c789491484341f5df7d4a852e67dccbc55c0e0ca8bb97e"
	},
	{
		"id": "1e05ee07de83",
		"ts": "2026-08-08T22:23:56.767Z",
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
		"liquidityUsd": 27348188.7,
		"hash": "1e05ee07de83fdb1a66fcb4c8faa0673b8c10181405cd764bb7946f48dfd7488"
	},
	{
		"id": "1eb766356c7e",
		"ts": "2026-08-08T22:23:56.970Z",
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
		"liquidityUsd": 4425250.99,
		"hash": "1eb766356c7eaf8e816d0c736b9b76f9ffa25908484e2a53a85029ce1084a2c2"
	},
	{
		"id": "b6301fc80863",
		"ts": "2026-08-08T22:23:57.182Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931785.19,
		"hash": "b6301fc80863cff0b79407492f9e02d485f52633d367629e3bfc568db887cbe2"
	},
	{
		"id": "e354baa79e1b",
		"ts": "2026-08-08T22:23:57.373Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27348188.7,
		"hash": "e354baa79e1b845a48e4cd89b1613b525c0a80864d5465522f0c6c38157481c4"
	},
	{
		"id": "dbc62e23de8c",
		"ts": "2026-08-08T22:23:57.577Z",
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
		"liquidityUsd": 4878965,
		"hash": "dbc62e23de8c5ddcdf5c4e18dd375056a3dcb729ac5f56239ac2f1003456610c"
	},
	{
		"id": "9bd8ab532360",
		"ts": "2026-08-08T22:23:57.767Z",
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
		"liquidityUsd": 985491.82,
		"hash": "9bd8ab532360eb294dc23ba551b98fb1b6f6935220c5ad749b310e64306e3663"
	},
	{
		"id": "5ac5ca8ed769",
		"ts": "2026-08-08T22:23:57.962Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4224656.83,
		"hash": "5ac5ca8ed769ee62a7c77d7da1fad50711bebd46a9979cd783ef38c311712c71"
	}
]
