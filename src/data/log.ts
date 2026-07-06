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
	"updatedAt": "2026-07-06T16:17:53.163Z",
	"tokensScored": 1739,
	"verdictsIssued": 1739,
	"safe": 1531,
	"risky": 163,
	"likelyRug": 45,
	"ticks": 116
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "3e6786bea2ab",
		"ts": "2026-07-06T16:17:49.429Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102229256.12,
		"hash": "3e6786bea2abe2700de1acc86ca387f651b8cd86dd1ad35adfa54ebc6926e3ad"
	},
	{
		"id": "6717b867e107",
		"ts": "2026-07-06T16:17:49.785Z",
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
		"liquidityUsd": 15256539.68,
		"hash": "6717b867e1077fef4b976e55d3a92b7cc915c832e0c6958f7b8557037cfaff79"
	},
	{
		"id": "06bd8e089056",
		"ts": "2026-07-06T16:17:50.131Z",
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
		"liquidityUsd": 1423954.34,
		"hash": "06bd8e08905613bcb4c4615ee6daebb144b7475918f250e1911db81a3c23794e"
	},
	{
		"id": "8b1028482099",
		"ts": "2026-07-06T16:17:50.478Z",
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
		"liquidityUsd": 33836351.27,
		"hash": "8b102848209922c5f8acd860755bd5d00da9a8ef90e1da6f326fb15e1177b20e"
	},
	{
		"id": "e245d96824e0",
		"ts": "2026-07-06T16:17:50.674Z",
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
		"liquidityUsd": 4098852.46,
		"hash": "e245d96824e054db0e5dab04d8a53d031d654c9b86038d6d7ea66713901e9223"
	},
	{
		"id": "af60ab69a6d3",
		"ts": "2026-07-06T16:17:50.878Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1016646.39,
		"hash": "af60ab69a6d3982e3c94e42dfbfeac9ae044a293feedfd698c79af397e77c52b"
	},
	{
		"id": "32297189e522",
		"ts": "2026-07-06T16:17:51.088Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33836351.27,
		"hash": "32297189e5229fea2c69e3ea70a2964a0f04793e96ed6a26d36f5f416f0d4af8"
	},
	{
		"id": "10ca3c64f5ed",
		"ts": "2026-07-06T16:17:51.292Z",
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
		"liquidityUsd": 2374530.45,
		"hash": "10ca3c64f5edcd8ecc40f8461540f66a748fc2913de68c935aff954866aec0b9"
	},
	{
		"id": "2aed7ea2b363",
		"ts": "2026-07-06T16:17:51.489Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 483615.15,
		"hash": "2aed7ea2b363dab73bdb51bc4058eb1c9d417b52eabebbd269ae325b1545e591"
	},
	{
		"id": "c1fdbc6df2ce",
		"ts": "2026-07-06T16:17:51.680Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 588835.24,
		"hash": "c1fdbc6df2ce7a04c7dd5c6963a65927d5e7c3b29460ed5b5b716557ba6ed73c"
	},
	{
		"id": "344196ad06a8",
		"ts": "2026-07-06T16:17:51.859Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 44332.77,
		"hash": "344196ad06a86b57edbd65a277581cff871c24289bc3c5472524a6a478e95358"
	},
	{
		"id": "c933fdb7a77a",
		"ts": "2026-07-06T16:17:52.050Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2104840.68,
		"hash": "c933fdb7a77a53d1bc0175a8680282a6b6f68f4bf287fce1e5150f6590f5ace9"
	},
	{
		"id": "fc9111ff2a14",
		"ts": "2026-07-06T16:17:52.241Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 522173.92,
		"hash": "fc9111ff2a14e1ad530d8418ba13173daf7e0912f83a7aeda387315ae3a2848c"
	},
	{
		"id": "51beb4a38ff0",
		"ts": "2026-07-06T16:17:52.419Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 108389.83,
		"hash": "51beb4a38ff004a901cced41fb45008ce4cbb1ee541097becfe19e8220eb2abf"
	},
	{
		"id": "aecb0586e55d",
		"ts": "2026-07-06T16:17:52.611Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8004138.12,
		"hash": "aecb0586e55db04b36c43ca77fbe2e985f1b1a21a1232ea4fadb9aa8dd9e07c5"
	},
	{
		"id": "8136c2af5fc0",
		"ts": "2026-07-06T16:17:52.805Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1983178.85,
		"hash": "8136c2af5fc086442f2c546b478fc27fe38c6485100538fdac104d65cd720eb5"
	},
	{
		"id": "a4d9abf397f5",
		"ts": "2026-07-06T16:17:52.985Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4826092.35,
		"hash": "a4d9abf397f5d24a7ed1f954ae9a43d329aa40c9e3b12f64fd4bb95c6c5523f3"
	},
	{
		"id": "6a7f17270da8",
		"ts": "2026-07-06T16:17:53.163Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3570583.51,
		"hash": "6a7f17270da8b3ee6126971051d9b8015e3a83bea525deff81144ed9ecf3cfe4"
	},
	{
		"id": "ffeacf1cdb57",
		"ts": "2026-07-06T12:02:10.680Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101030722.06,
		"hash": "ffeacf1cdb57afe92b77ef88750ae67f5e76c9176f28a1282958482483791622"
	},
	{
		"id": "3fdde4a0f649",
		"ts": "2026-07-06T12:02:11.163Z",
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
		"liquidityUsd": 16231841.95,
		"hash": "3fdde4a0f649fc58a125a5a4e3954ae7cb8e610f1ad36909c4515f65e8b5369d"
	},
	{
		"id": "82605f46e6cb",
		"ts": "2026-07-06T12:02:11.427Z",
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
		"liquidityUsd": 1394140.27,
		"hash": "82605f46e6cb14494239626b217be53d5301ba0d881cde7cc7d414dc8bce0967"
	},
	{
		"id": "939c3690c627",
		"ts": "2026-07-06T12:02:11.703Z",
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
		"liquidityUsd": 33276998.47,
		"hash": "939c3690c627d9b7b3697ff662f00a6f6671b227ff3199e46047fc1cfb0c2949"
	},
	{
		"id": "f2af51d7345a",
		"ts": "2026-07-06T12:02:12.082Z",
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
		"liquidityUsd": 4040313.32,
		"hash": "f2af51d7345ad0412e284e8318b44ffb9ef836b235b899b94adcc2dcdad97ed3"
	},
	{
		"id": "825d64caaf5e",
		"ts": "2026-07-06T12:02:12.359Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1003434.68,
		"hash": "825d64caaf5e22f80dc5764024e8b905ef61142260632cf2bb08f7c46f331783"
	},
	{
		"id": "e07b37338d0c",
		"ts": "2026-07-06T12:02:12.613Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33264049.02,
		"hash": "e07b37338d0c2a98d7350f3296f532c27d3ad6f4b7170ec16711f3fab66d588b"
	},
	{
		"id": "8b9ea526b7f5",
		"ts": "2026-07-06T12:02:12.952Z",
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
		"liquidityUsd": 2314933.73,
		"hash": "8b9ea526b7f543ad4abd3fc0ceef43b735280edc4f3e8fdd2b9a436a8cdd7753"
	},
	{
		"id": "ba032ba95bfd",
		"ts": "2026-07-06T12:02:13.231Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 68,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.36,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 42803.7,
		"hash": "ba032ba95bfdaeff9eb8b87c7bb249c283fee62b3a25e55d707d931c3fb1b204"
	},
	{
		"id": "5e1f2d112242",
		"ts": "2026-07-06T12:02:13.501Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 631733.01,
		"hash": "5e1f2d1122422ffe865cba7875697d03857fca8ea93548a138627ae5aa99b402"
	},
	{
		"id": "4f800a61e358",
		"ts": "2026-07-06T12:02:13.764Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 463056.73,
		"hash": "4f800a61e35886297086d07723d834937d29d836b7d0f1d9408f8dd78bf7db41"
	},
	{
		"id": "e21dad99864a",
		"ts": "2026-07-06T12:02:14.024Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2091287.32,
		"hash": "e21dad99864ac1ad1fa8fcef180674650ed0b8bd9836511bd4062db2bfc060c7"
	},
	{
		"id": "8ee252f77f78",
		"ts": "2026-07-06T12:02:14.268Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 556482.22,
		"hash": "8ee252f77f78255a3a97371f9dfcf39d87097f7b9bf51d3745dfb6c05e2c0c01"
	},
	{
		"id": "8fcc7e3f045f",
		"ts": "2026-07-06T12:02:14.508Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4750601.9,
		"hash": "8fcc7e3f045ffc3c88a7035ab331f40ff46bb661f0f6328a5da0156a65dae43e"
	},
	{
		"id": "0e31959a3c78",
		"ts": "2026-07-06T12:02:21.658Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1985957.05,
		"hash": "0e31959a3c7886aca18352afdf7df7c1ebb605b82df2bf9a50fa4728242ce9c1"
	},
	{
		"id": "4bb04febfe7b",
		"ts": "2026-07-06T12:02:22.609Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2025362.42,
		"hash": "4bb04febfe7b53c3f150dd9c33c858af50e01a9645ad48026c820b771d510316"
	},
	{
		"id": "61919081b557",
		"ts": "2026-07-06T12:02:22.981Z",
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
		"liquidityUsd": 7656345.91,
		"hash": "61919081b5574da593b7e40c012ed05f1e50d679f50adfc566a366a187918f05"
	},
	{
		"id": "07a2f8e837ce",
		"ts": "2026-07-06T12:02:23.226Z",
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
		"liquidityUsd": 3488951.54,
		"hash": "07a2f8e837ce16b4aecfc7748b2ea20b12dde5f26961b953ff6b91579e6330fa"
	},
	{
		"id": "25aace8c853f",
		"ts": "2026-07-06T07:09:45.788Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100951506.06,
		"hash": "25aace8c853f668954b15cad602dc5414c01775a7fa6ca5a5c709ef2a7049aa5"
	},
	{
		"id": "d24945b830dd",
		"ts": "2026-07-06T07:09:46.029Z",
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
		"liquidityUsd": 16045763.52,
		"hash": "d24945b830dd7200feaae5bd15d6aba75ae50790ee9b3abef537c1310ccf770c"
	},
	{
		"id": "a5a82114c17b",
		"ts": "2026-07-06T07:09:46.265Z",
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
		"liquidityUsd": 1397536.8,
		"hash": "a5a82114c17b473c729b47567023e0d0d8df2f047923a95b30e060d4557e8e67"
	},
	{
		"id": "b8a5c5638403",
		"ts": "2026-07-06T07:09:46.501Z",
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
		"liquidityUsd": 33375592.02,
		"hash": "b8a5c5638403008abc63513a318d4835a5e709601e683f97f03c5a4a1a78b2fa"
	},
	{
		"id": "c92bb8aa9b07",
		"ts": "2026-07-06T07:09:46.734Z",
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
		"liquidityUsd": 4107305.45,
		"hash": "c92bb8aa9b0737cbfb7806a97e8ee02c93c4d87885bb2fb2da5d4e957e7226db"
	},
	{
		"id": "4f8e6423ed58",
		"ts": "2026-07-06T07:09:46.973Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1000874.75,
		"hash": "4f8e6423ed58c4f34cdc02522af7d7724e8c3e0a3eeaa0df4d9d02a4e45f15a8"
	},
	{
		"id": "20790e7682dd",
		"ts": "2026-07-06T07:09:47.295Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33375592.02,
		"hash": "20790e7682dd68b0633b7df4d08b9968de1351abab42917c986f3bd93f5894b1"
	},
	{
		"id": "e9d60227c0c3",
		"ts": "2026-07-06T07:09:47.527Z",
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
		"liquidityUsd": 2327235.76,
		"hash": "e9d60227c0c3289cc53ee41680d24c75c95936a14dbb9c614b858b1130815288"
	},
	{
		"id": "787827420711",
		"ts": "2026-07-06T07:09:47.761Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 50419.43,
		"hash": "7878274207117af74aea76d63f2531064ab8e9f8d6c0d6779d1512133101d5aa"
	},
	{
		"id": "e8d24e26f3f8",
		"ts": "2026-07-06T07:09:48.023Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 627873.64,
		"hash": "e8d24e26f3f85102aca3e839c33eed1f6c480c8b349a046e16c046fb4bb07615"
	},
	{
		"id": "daa2271b77f3",
		"ts": "2026-07-06T07:09:48.241Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 444585.09,
		"hash": "daa2271b77f3a30ae3635d80c4929ecacc7fe4f44c69987f7d997e788bc758c5"
	},
	{
		"id": "af26507b143b",
		"ts": "2026-07-06T07:09:48.455Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2118628.77,
		"hash": "af26507b143be126fcfbf01e178bef332845260202186155538d2d7b341c6703"
	},
	{
		"id": "d724b29f14dd",
		"ts": "2026-07-06T07:09:48.673Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 551662.91,
		"hash": "d724b29f14ddbbeb3c82179961196716b27559412a869ea563c72e8aac1c70c5"
	},
	{
		"id": "617b32e01f95",
		"ts": "2026-07-06T07:09:48.889Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4767050.96,
		"hash": "617b32e01f95beb50a1c46a1701b7e7f7f092a39ca4d37ed215c7c3f0f620cf1"
	},
	{
		"id": "7dd006080997",
		"ts": "2026-07-06T07:09:49.104Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2019320.14,
		"hash": "7dd006080997c0435f88ce2aa67e906ff5dbf47c663b73e6e32f80f9f6b5eb11"
	},
	{
		"id": "f9a288b60691",
		"ts": "2026-07-06T07:09:49.320Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3672409.46,
		"hash": "f9a288b606914b7cc771e912c78ad2b232195d24fec0489eb13e9a17d11efad9"
	},
	{
		"id": "44b5aadf5d7e",
		"ts": "2026-07-06T07:09:49.535Z",
		"symbol": "Crash",
		"token": "0x4DD9077269Dd08899f2A9E73507125962b5BC87f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100395.94,
		"hash": "44b5aadf5d7ea93e4c99b292b35eb489f9e02896f24b25c5ba74f0e58ece0f14"
	},
	{
		"id": "71083eaa2b85",
		"ts": "2026-07-06T07:09:49.753Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7820140.15,
		"hash": "71083eaa2b85ba36580c559ab1e220f2760d242d2e1a4bfd79ba6c652abbeb10"
	},
	{
		"id": "98f74d173bf1",
		"ts": "2026-07-06T02:50:09.516Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100907833.53,
		"hash": "98f74d173bf13c71112f4c3acfb4b52487a0397f331a3574fa6f1551b30e6b5d"
	},
	{
		"id": "706bc14ce284",
		"ts": "2026-07-06T02:50:09.865Z",
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
		"liquidityUsd": 16525876.76,
		"hash": "706bc14ce2842d4b760cbd75a8abfd7b5aebbc5ee4a5b1c9cf3ab10a0cb95364"
	},
	{
		"id": "4a0cbb5e764c",
		"ts": "2026-07-06T02:50:10.234Z",
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
		"liquidityUsd": 1354541,
		"hash": "4a0cbb5e764cf2bc837559c85be2d755e7d14f9da536ea1b03737b942bc10c27"
	},
	{
		"id": "32fb1c3cd2a9",
		"ts": "2026-07-06T02:50:10.614Z",
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
		"liquidityUsd": 33336787.86,
		"hash": "32fb1c3cd2a95886e786b871bec24e143a4965c928e64147ee91b347c85749c8"
	},
	{
		"id": "3b6f38b0445c",
		"ts": "2026-07-06T02:50:10.816Z",
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
		"liquidityUsd": 4153484.56,
		"hash": "3b6f38b0445c2592decdbb1cb6673d7555377db3e78659e7bb99740c771b6923"
	},
	{
		"id": "304a92ba99ec",
		"ts": "2026-07-06T02:50:11.014Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1012905.15,
		"hash": "304a92ba99ec0e3d1afe03f74b18f5571e4a6b8fef2a14c060917add69b3ef8e"
	},
	{
		"id": "d33fe78a8e1d",
		"ts": "2026-07-06T02:50:11.209Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33336787.86,
		"hash": "d33fe78a8e1d81fb64739dbf9d8cb0152f0ff4735feb20d1183513db17a70791"
	},
	{
		"id": "ca21cdecc1be",
		"ts": "2026-07-06T02:50:11.438Z",
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
		"liquidityUsd": 2328358.5,
		"hash": "ca21cdecc1be6b3f228cf08b028d02d7c75d720ee4f7f29bce6cb85ee4bc1b70"
	},
	{
		"id": "2a94cc66e674",
		"ts": "2026-07-06T02:50:12.278Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 53,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.06,
		"flags": [
			"medium_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 40936.1,
		"hash": "2a94cc66e6749d6a2ae048a5b2b06cfa3f0a2cb13f03efac0576c5bde842d088"
	},
	{
		"id": "35fbbd39c747",
		"ts": "2026-07-06T02:50:12.471Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 678145.62,
		"hash": "35fbbd39c747e757288c127b52ab26fd3d30fbe54f1a441c125a52b8fe9af603"
	},
	{
		"id": "c2a8835efe2c",
		"ts": "2026-07-06T02:50:12.645Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517201.49,
		"hash": "c2a8835efe2c3ef83f613ff6df5d70581235cf80e9099e9e360e0096c020b110"
	},
	{
		"id": "ccb91a7d3b7b",
		"ts": "2026-07-06T02:50:12.818Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 470724.05,
		"hash": "ccb91a7d3b7b6d5a0db4bcda6312f924053115939b4676999484f80f5874bf2d"
	},
	{
		"id": "029855587542",
		"ts": "2026-07-06T02:50:14.132Z",
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
		"liquidityUsd": 2162222.54,
		"hash": "0298555875429cb18d343679e234988933f59be3fe29d6b81614cb4177d996e2"
	},
	{
		"id": "51cc40a18eb8",
		"ts": "2026-07-06T02:50:14.310Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2115112.41,
		"hash": "51cc40a18eb8706c423a01fea067ed9105504e5163eaf213e0ed1cd849a0bad3"
	},
	{
		"id": "d9af671947c5",
		"ts": "2026-07-06T02:50:14.516Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4825866.77,
		"hash": "d9af671947c59503791093d53cbe50d7f9a0374435cfc43dacb6e03223683c77"
	},
	{
		"id": "6bb9b984b2ab",
		"ts": "2026-07-06T02:50:14.694Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3482018.21,
		"hash": "6bb9b984b2ab8270aeb1eb0f226e19b016d0f4c58771993ed856e63ca7a0888f"
	},
	{
		"id": "7a8442c29661",
		"ts": "2026-07-06T02:50:15.322Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 552529.86,
		"hash": "7a8442c29661c0076e59944c8055d4bb180e39b8d51076e1840d5c2be80c015e"
	},
	{
		"id": "9eb6a1af0653",
		"ts": "2026-07-06T02:50:15.502Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7920397.4,
		"hash": "9eb6a1af0653ed6057ce41bcc0d5587d40affcbdf32d69d7f5cb43abbad1599c"
	},
	{
		"id": "bfd12fd967d2",
		"ts": "2026-07-05T23:08:01.823Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100987523.7,
		"hash": "bfd12fd967d26aed6f58bf3aebdd97d26d19af36ec1647d73003e48f2a2c2463"
	},
	{
		"id": "123ac6f0f827",
		"ts": "2026-07-05T23:08:02.075Z",
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
		"liquidityUsd": 16491952.56,
		"hash": "123ac6f0f827104ddb9262ed377216a4a0151b99d0ba5db20c8143ab45e971bf"
	},
	{
		"id": "b65ad304195f",
		"ts": "2026-07-05T23:08:02.410Z",
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
		"liquidityUsd": 1354436.14,
		"hash": "b65ad304195facefc84630c3a8515e27cc2e109d44e793963a06a4fccfc094ee"
	},
	{
		"id": "493c947cd929",
		"ts": "2026-07-05T23:08:02.657Z",
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
		"liquidityUsd": 33259191.89,
		"hash": "493c947cd92994a2d9f309fcdda391ecf25f895aeb45abde9b9b7fdc4ebbcf86"
	},
	{
		"id": "7c56bfe8ad3f",
		"ts": "2026-07-05T23:08:03.149Z",
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
		"liquidityUsd": 4181439.72,
		"hash": "7c56bfe8ad3fb2f01becd839134b495040b97fda1527e408ce1045a5746d5524"
	},
	{
		"id": "90abbe25fd1a",
		"ts": "2026-07-05T23:08:03.421Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1012898.77,
		"hash": "90abbe25fd1a4604e29499287d8b388ef542261116bf940dc2f12740c12e60ea"
	},
	{
		"id": "8ce413363bca",
		"ts": "2026-07-05T23:08:03.775Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33259191.89,
		"hash": "8ce413363bcacc9b26cb7b2b43b045c6efcdaf01e1c9cd683549fe11706b6bdc"
	},
	{
		"id": "0af37a53ff70",
		"ts": "2026-07-05T23:08:04.052Z",
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
		"liquidityUsd": 2381636.65,
		"hash": "0af37a53ff70a09c9a23476ae794bbe7a730bfe643247c1ce4f0371d37b2f159"
	},
	{
		"id": "75228b446f69",
		"ts": "2026-07-05T23:08:04.413Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 50938.92,
		"hash": "75228b446f69fb1358a84ca5855cad0f9a2460916d9bd6a90c72bef6f48d9d94"
	},
	{
		"id": "169617558002",
		"ts": "2026-07-05T23:08:04.691Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 692559.69,
		"hash": "16961755800202bd276bc74db76500135752a195a0634c38213f16dd6f670a45"
	},
	{
		"id": "24c65a79db15",
		"ts": "2026-07-05T23:08:05.614Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517433.38,
		"hash": "24c65a79db153da42a8d11754fb14cf124a0a00b27b17e551ee7bf361b22603a"
	},
	{
		"id": "820d35088077",
		"ts": "2026-07-05T23:08:05.843Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 425091.53,
		"hash": "820d35088077ca5ed4edb23352f4b635b769165073f822bac382594840b2b79e"
	},
	{
		"id": "9ef3a6bd3642",
		"ts": "2026-07-05T23:08:06.078Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3575886.95,
		"hash": "9ef3a6bd3642e78d9ee81b35f7aa5506408f35b65dc6e8b983cc637926f5e788"
	},
	{
		"id": "4d5353d8cd02",
		"ts": "2026-07-05T23:08:06.306Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7972175.25,
		"hash": "4d5353d8cd0233808b3783798cecfca6dde8194eee8bf0c7cbedef7fd5a855f9"
	},
	{
		"id": "fa8637f7b288",
		"ts": "2026-07-05T23:08:06.535Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4847289.62,
		"hash": "fa8637f7b288bbd3f014188da1630c7a3a234e4bc914af6ca164d6bd2ec6233b"
	},
	{
		"id": "265582f49a3a",
		"ts": "2026-07-05T23:08:07.246Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2061171.42,
		"hash": "265582f49a3a3fe8a9d86a18c0abaf69bb7796dd797dea1a8076aeed069acacc"
	},
	{
		"id": "c9c6a29b2800",
		"ts": "2026-07-05T23:08:07.478Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2126401.2,
		"hash": "c9c6a29b28003ec484634fa7b15a81480c853f2174379f612693096ff69f5133"
	},
	{
		"id": "f362c2fec892",
		"ts": "2026-07-05T23:08:07.707Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 540351.32,
		"hash": "f362c2fec892d76dbb6217cdc88c35d7316ff3bae6dcbf9b4c96cf28476a8658"
	},
	{
		"id": "e1fe2ab05003",
		"ts": "2026-07-05T21:59:11.613Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100875415.19,
		"hash": "e1fe2ab05003886bb23f2fa1271238e948df403a7275a38f7e04235be2310cbb"
	},
	{
		"id": "551fe6a31428",
		"ts": "2026-07-05T21:59:12.207Z",
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
		"liquidityUsd": 15875428.13,
		"hash": "551fe6a31428542cb16cf84c546119f790fd70834160f76e394617d629355de1"
	},
	{
		"id": "1dea2c0d1c4e",
		"ts": "2026-07-05T21:59:12.474Z",
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
		"liquidityUsd": 1351030.63,
		"hash": "1dea2c0d1c4e47f0d4d615dca23cc68239b928a90c64e037f2d9049f70e7615e"
	},
	{
		"id": "06b8ef33317d",
		"ts": "2026-07-05T21:59:12.837Z",
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
		"liquidityUsd": 33139220.05,
		"hash": "06b8ef33317dd4af4413c43389fcacb89cf1a6432f12db2befe352254ec7fc3a"
	},
	{
		"id": "412d776018f1",
		"ts": "2026-07-05T21:59:13.475Z",
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
		"liquidityUsd": 4187594.01,
		"hash": "412d776018f12f849381d94fe4f93e5579ae7d6ea6f92e6387b995f07c9f51d5"
	},
	{
		"id": "803dd2d5d916",
		"ts": "2026-07-05T21:59:13.917Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1003977.66,
		"hash": "803dd2d5d916dc57d15ac3b6f9f6ec4eb37cb56608a7043cd59c3b001fc45c2b"
	},
	{
		"id": "8282540afdcc",
		"ts": "2026-07-05T21:59:14.227Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33139220.05,
		"hash": "8282540afdcc6a92e3526db154a8c8c235f28007baabe25fd51ff7f6bf570b3f"
	},
	{
		"id": "f02f86cca728",
		"ts": "2026-07-05T21:59:14.484Z",
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
		"liquidityUsd": 2369750.93,
		"hash": "f02f86cca728e4741fb2086d863894165bcf67f816f16918db91312d7f414017"
	},
	{
		"id": "d2477b3adccd",
		"ts": "2026-07-05T21:59:14.730Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 61337.06,
		"hash": "d2477b3adccdac8dd788d542b6cf4dabaf766b265d77fbf26d181c602be8b8bd"
	},
	{
		"id": "62683619d103",
		"ts": "2026-07-05T21:59:14.997Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 711077.84,
		"hash": "62683619d1037dfde1f61865435fc3ba8d12b0134489103ea83d3ba72c50cc39"
	},
	{
		"id": "54849db79137",
		"ts": "2026-07-05T21:59:15.238Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517399.6,
		"hash": "54849db79137c40dc6b6d3a2df3f9b38dcd31dfa7ca3aac2e9bb8c9f8461752b"
	},
	{
		"id": "b0d853b1797d",
		"ts": "2026-07-05T21:59:15.470Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 418138.47,
		"hash": "b0d853b1797d5f455d4d63ef7a36ec9fcf0d9d27ec1f766fda41db0cbc6c6ceb"
	},
	{
		"id": "971ea1908eb7",
		"ts": "2026-07-05T21:59:15.765Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7961806.81,
		"hash": "971ea1908eb787567883bb617e815922ea90fbc669a7f9db595ce4c56086aa28"
	},
	{
		"id": "c70f67675e44",
		"ts": "2026-07-05T21:59:16.650Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3749990.72,
		"hash": "c70f67675e449343af5e235aa6e99dbd80f68788a262c316ddd8e987d8ceb24d"
	},
	{
		"id": "48d14f5f69a9",
		"ts": "2026-07-05T21:59:16.890Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579203.45,
		"hash": "48d14f5f69a91d2170a8e54e67143b1a19923e1bad9d3c86e93fb746dcaae912"
	},
	{
		"id": "640ad95dc5b6",
		"ts": "2026-07-05T21:59:17.129Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4804819.82,
		"hash": "640ad95dc5b618f578fd44d05635b43674940cb344878a5f34cbc52de0dc7367"
	},
	{
		"id": "ea25acf5ea28",
		"ts": "2026-07-05T21:59:17.364Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2065135.13,
		"hash": "ea25acf5ea28f97aebeb1778262ad3c81aae29b24e0df8e0626194d0660774ed"
	},
	{
		"id": "1755526c97e4",
		"ts": "2026-07-05T21:59:17.595Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775757.81,
		"hash": "1755526c97e427d6cc5066791b88be897461e3989a055db76dba607e9c8690ab"
	},
	{
		"id": "642b04234085",
		"ts": "2026-07-05T20:55:42.222Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100784617.48,
		"hash": "642b04234085d6725e7d7e23e16f8810f75bf6f26642484d6f0197b9acf5b7cf"
	},
	{
		"id": "ee0329b13043",
		"ts": "2026-07-05T20:55:42.473Z",
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
		"liquidityUsd": 16286013.83,
		"hash": "ee0329b13043355a19e613f771b9d4b49b79888638c43d09da74277149f10dba"
	},
	{
		"id": "06b36aff9848",
		"ts": "2026-07-05T20:55:42.720Z",
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
		"liquidityUsd": 1342055.14,
		"hash": "06b36aff9848efdc270d530570aa6c231bee612ce202e4e91a8b21e3c9db50f6"
	},
	{
		"id": "20641c4de85f",
		"ts": "2026-07-05T20:55:42.961Z",
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
		"liquidityUsd": 33003278.6,
		"hash": "20641c4de85f05345473d354238df36dd1b6fc8d280f1f5693d3d91c682750fc"
	},
	{
		"id": "9412b0bf4626",
		"ts": "2026-07-05T20:55:43.212Z",
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
		"liquidityUsd": 4159015.14,
		"hash": "9412b0bf4626e5467cda528bfb354aebb9ac6f1a0e3c0457629765dce95ab9e7"
	},
	{
		"id": "247bfd2bdad7",
		"ts": "2026-07-05T20:55:43.456Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1004002.36,
		"hash": "247bfd2bdad771889718d981f135381581ec4f1a1c6468c5cb9420304588e728"
	},
	{
		"id": "fe0c6867dfdf",
		"ts": "2026-07-05T20:55:43.699Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33003278.6,
		"hash": "fe0c6867dfdfc7df075e41c8e129a76fb436bbe2e48401f6190dae07449f48ea"
	},
	{
		"id": "cace9949c6ed",
		"ts": "2026-07-05T20:55:43.942Z",
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
		"liquidityUsd": 2401682.05,
		"hash": "cace9949c6ed863741ac86e608e4becfc903f3559323f24023965f697fad4f0a"
	},
	{
		"id": "cb2540b029d1",
		"ts": "2026-07-05T20:55:44.207Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 53,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.06,
		"flags": [
			"medium_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 38336.64,
		"hash": "cb2540b029d1876622e92c3d2230d8987ea7d01e5eb24cd99d3a13f5cc4da17a"
	},
	{
		"id": "968ee7be2f5a",
		"ts": "2026-07-05T20:55:44.454Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 694511.92,
		"hash": "968ee7be2f5a280b88a4254e41a53d948e7dbb1b6ad28cb4e4e1f3f899ad24f7"
	},
	{
		"id": "22d8bf3434b6",
		"ts": "2026-07-05T20:55:44.682Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517294.4,
		"hash": "22d8bf3434b615424b2becc345281bdef6752d8ad05b986d49536f6513500402"
	},
	{
		"id": "95a21d2dde5f",
		"ts": "2026-07-05T20:55:44.909Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3720942.1,
		"hash": "95a21d2dde5ff5d4b5a730f4450a66c3cf61c891d368e1f2248af8c98b5fb2c1"
	},
	{
		"id": "3c50e80d96d3",
		"ts": "2026-07-05T20:55:45.138Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7899397.73,
		"hash": "3c50e80d96d34ffa611e0a99f6ab3fd3897f6effb6832029041dd31796b0c02b"
	},
	{
		"id": "69e192882d51",
		"ts": "2026-07-05T20:55:45.366Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 411416.37,
		"hash": "69e192882d5122816fd4f98c9ae37a5221e530b877abbab4a3156b1abea9d1f0"
	},
	{
		"id": "9e3cdc85bfd3",
		"ts": "2026-07-05T20:55:45.592Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4788002.15,
		"hash": "9e3cdc85bfd33187b0d20d8655f1e6fe61cac5b3e75b9ac1b466849f5658deb0"
	},
	{
		"id": "c0c652080ae7",
		"ts": "2026-07-05T20:55:45.822Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 578656.2,
		"hash": "c0c652080ae7e07adf1758b181507cd94b537126187381bde71cb91bff365509"
	},
	{
		"id": "713c78da8f43",
		"ts": "2026-07-05T20:55:46.048Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1995469.26,
		"hash": "713c78da8f4320b68aa3f6fe16063f3574d17a89fdbb3de42ec4045b81794578"
	},
	{
		"id": "0fe2fdda68a4",
		"ts": "2026-07-05T20:55:46.274Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775757.81,
		"hash": "0fe2fdda68a4aa46ecf25c54f65dcdb8d91d68c10355373df387e24ea1b9f2af"
	},
	{
		"id": "97fae90c4978",
		"ts": "2026-07-05T19:37:34.651Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100780994.93,
		"hash": "97fae90c4978bad8e74a8db61e4362b21bd663232a855ed6ea11d7ec7b43587d"
	},
	{
		"id": "99696f9024f8",
		"ts": "2026-07-05T19:37:35.003Z",
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
		"liquidityUsd": 16279460.57,
		"hash": "99696f9024f8388ff56ce405de0e1bb1a267b2de49d6007c78184cc516789e76"
	},
	{
		"id": "480fd5d8f566",
		"ts": "2026-07-05T19:37:35.191Z",
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
		"liquidityUsd": 1342310.57,
		"hash": "480fd5d8f56642dfd5e9cbe847e6f8c299ff564a4520c0b8d55287cf84b832c3"
	},
	{
		"id": "82bfa6ca9d6d",
		"ts": "2026-07-05T19:37:35.385Z",
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
		"liquidityUsd": 32990683.52,
		"hash": "82bfa6ca9d6d9244bb21b05cf8df83b352c74481fc12a84fc7ebbf6c87aeb3e3"
	},
	{
		"id": "486fc68e7d96",
		"ts": "2026-07-05T19:37:35.579Z",
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
		"liquidityUsd": 4168579.53,
		"hash": "486fc68e7d96b04b786b9a609ed86250ff59caf4b966d6d030d2dfeed3f09fc0"
	},
	{
		"id": "6829d10a781e",
		"ts": "2026-07-05T19:37:35.772Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1003994.85,
		"hash": "6829d10a781ea609451c62587805c690af1372e7be5a9125d4b1d6fcc3882aae"
	},
	{
		"id": "061ffceeaa8d",
		"ts": "2026-07-05T19:37:35.961Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32990683.52,
		"hash": "061ffceeaa8d129db7564307cc9e3ee6bed1d002f1bee6a34868c8f01a381be4"
	},
	{
		"id": "fda575cc7428",
		"ts": "2026-07-05T19:37:36.154Z",
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
		"liquidityUsd": 2406993.5,
		"hash": "fda575cc742829279d70a70fb0b3d754894e17b842497f04b6f683c4b517757a"
	},
	{
		"id": "92268271a18c",
		"ts": "2026-07-05T19:37:36.354Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 53,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.06,
		"flags": [
			"medium_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 38521.16,
		"hash": "92268271a18c8e4a3d21566000865c578674360f32aa3fc1efabffd6af1a391e"
	},
	{
		"id": "0d5a365023fe",
		"ts": "2026-07-05T19:37:36.544Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 715399.96,
		"hash": "0d5a365023feb684dc38827fa94e5d5e8be89900717cc6a1cd2272bbdab774ea"
	},
	{
		"id": "f8d83dbc914a",
		"ts": "2026-07-05T19:37:36.725Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517291.06,
		"hash": "f8d83dbc914abbc86b9999df9c518b4249f8fea621d6eeaeb6fff1ed9d817450"
	},
	{
		"id": "f5d721eff9d0",
		"ts": "2026-07-05T19:37:36.900Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3779406.79,
		"hash": "f5d721eff9d0ef5ec34f4e8288ff6fd67b265cb72eefa28207bbdf75f6905a0d"
	},
	{
		"id": "c7603bce5dcb",
		"ts": "2026-07-05T19:37:37.205Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8002107.02,
		"hash": "c7603bce5dcb322721dee42fecde7a1774c07aae3c8eee5524590064b275093f"
	},
	{
		"id": "52a99206f299",
		"ts": "2026-07-05T19:37:37.382Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579048.15,
		"hash": "52a99206f2999dfbb9e836bddfcff5ac18c6463c560cd8e2f363927271cc3cda"
	},
	{
		"id": "bb41d7fe508e",
		"ts": "2026-07-05T19:37:37.570Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4790554.56,
		"hash": "bb41d7fe508e3c9edb537b2bc48142e52290e88519d20c5fdb19de38e1c54ea3"
	},
	{
		"id": "6e3615856f6e",
		"ts": "2026-07-05T19:37:37.744Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775757.81,
		"hash": "6e3615856f6e8aee5bb6012f6fb2678540b958d2af657f38e740fc32dbd42eb4"
	},
	{
		"id": "db3f3dda20b2",
		"ts": "2026-07-05T19:37:37.925Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 425085.15,
		"hash": "db3f3dda20b259a31041652037c6c74e15733733a7e72bb0c78b361d4e449254"
	},
	{
		"id": "3a392bbad964",
		"ts": "2026-07-05T19:37:38.104Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1963079.39,
		"hash": "3a392bbad96478faff76f1a8acd3266dda8abc20caffb9f83c43d34208c909b5"
	},
	{
		"id": "4248fd54650e",
		"ts": "2026-07-05T17:59:44.969Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100779003.97,
		"hash": "4248fd54650e680e9cda985aa6f7cbae5d65365548d6bf825c39a4a10fd1d9b6"
	},
	{
		"id": "08a7c9fd16f2",
		"ts": "2026-07-05T17:59:45.351Z",
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
		"liquidityUsd": 15458388.54,
		"hash": "08a7c9fd16f2347eab616b5ecca63f04c728021741eb9794a859d7269641a41e"
	},
	{
		"id": "539ffc398bbf",
		"ts": "2026-07-05T17:59:45.708Z",
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
		"liquidityUsd": 1351218.32,
		"hash": "539ffc398bbf2dab402f591accd42823416844082a7c1a8c33cbdb175814aa63"
	},
	{
		"id": "9c4a9ee776c7",
		"ts": "2026-07-05T17:59:46.160Z",
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
		"liquidityUsd": 33216281.89,
		"hash": "9c4a9ee776c747668470c176314ddb60af0b4b06347e5100844c4f0eb0772c5d"
	},
	{
		"id": "ef1f5c21b84b",
		"ts": "2026-07-05T17:59:46.520Z",
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
		"liquidityUsd": 4164487.85,
		"hash": "ef1f5c21b84b107db9b187a200df3260f22225598a5937b95f018d67cb12b4b4"
	},
	{
		"id": "85b8dfd8a19e",
		"ts": "2026-07-05T17:59:46.723Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991625.31,
		"hash": "85b8dfd8a19ee832de109c3af8359b2b595da0d84e46d9b2a8103ca2871d31f0"
	},
	{
		"id": "d2ce9959b5a5",
		"ts": "2026-07-05T17:59:47.576Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33216281.89,
		"hash": "d2ce9959b5a5e86e5a304f7f085aec8b90ccb051771899e23337dfbcf541606b"
	},
	{
		"id": "c5b193811edf",
		"ts": "2026-07-05T17:59:47.775Z",
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
		"liquidityUsd": 2405499.11,
		"hash": "c5b193811edfe1112b17dafa62f899455380fc0d5c0d60a12845d2bc572af82b"
	},
	{
		"id": "df8bdfbbb2e5",
		"ts": "2026-07-05T17:59:47.975Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 61857.08,
		"hash": "df8bdfbbb2e5bafbb54c9de97f9fd828343e16daf553ec2d3d25b99ac40a0caf"
	},
	{
		"id": "eaf628ec3dd7",
		"ts": "2026-07-05T17:59:48.177Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 679978.04,
		"hash": "eaf628ec3dd7ce74b0f60cc8384745f073600b5392e8443641b9fc955995ef71"
	},
	{
		"id": "f5162bcbf052",
		"ts": "2026-07-05T17:59:48.365Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3624119.16,
		"hash": "f5162bcbf052c774c33186c387d0570195fb2798044501fcc06a5f3476419708"
	},
	{
		"id": "2ee96c6e74d4",
		"ts": "2026-07-05T17:59:48.549Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517297.22,
		"hash": "2ee96c6e74d4481016c03e7aaa48a376d1d1812201ad9f462606dddddf1eea64"
	},
	{
		"id": "301c2c9581d5",
		"ts": "2026-07-05T17:59:48.736Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7806916.08,
		"hash": "301c2c9581d5b1f0ebf712fe38e38251fe2850fd996020785f2e9b11775f3495"
	},
	{
		"id": "0d8a72bcf6be",
		"ts": "2026-07-05T17:59:48.921Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579007.63,
		"hash": "0d8a72bcf6be23916ec9ac05e0adb5822fd0166a2f361af36c74a1b1f2f963ec"
	},
	{
		"id": "dea54148787c",
		"ts": "2026-07-05T17:59:49.169Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4780997.22,
		"hash": "dea54148787c1ecc54b64cc70b212d4f0949305e714805f738552681c7308ace"
	},
	{
		"id": "809420376981",
		"ts": "2026-07-05T17:59:49.355Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775757.81,
		"hash": "8094203769810bc922e25a03f8ba3430e1c2e5674d2f87e405dcf45c032be915"
	},
	{
		"id": "2bb3bf361348",
		"ts": "2026-07-05T17:59:49.542Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 432294.09,
		"hash": "2bb3bf3613486e0c5579691f287eb4e4fd777e0486244a489809a2c25e8dbd49"
	},
	{
		"id": "d9fc55f1d57b",
		"ts": "2026-07-05T17:59:49.733Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4823798.11,
		"hash": "d9fc55f1d57b6e7ec174e357d4c4a8fdf6f7cb04d33df047622acf19a9f8af25"
	},
	{
		"id": "be63017f08cc",
		"ts": "2026-07-05T17:59:49.949Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2048217.7,
		"hash": "be63017f08ccaeaf8256a542d4faeeab631f687fa4afa508e05ec3ba0de96c84"
	},
	{
		"id": "154ed5271643",
		"ts": "2026-07-05T16:04:39.748Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100665564.37,
		"hash": "154ed5271643fc1471d940a1ffcc7fb35033ce591ba68b7fdec2d9beea5862b6"
	},
	{
		"id": "40ba2c5e2608",
		"ts": "2026-07-05T16:04:39.952Z",
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
		"liquidityUsd": 15036367.48,
		"hash": "40ba2c5e26081845da68d6f6be5ee0f4f1b9add20e058822d1f9c70a81b5e6c7"
	},
	{
		"id": "bc4525f59848",
		"ts": "2026-07-05T16:04:40.170Z",
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
		"liquidityUsd": 1354532.22,
		"hash": "bc4525f598482a147131fd5dd803ef58877e0f24ce90b1b83f056242a1777866"
	},
	{
		"id": "22b6a313f83a",
		"ts": "2026-07-05T16:04:40.361Z",
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
		"liquidityUsd": 33174488.83,
		"hash": "22b6a313f83adde3af9beec1a514dbbfef11e7f845cb1089769b6626dedbadb4"
	},
	{
		"id": "18a5234ea8a7",
		"ts": "2026-07-05T16:04:40.549Z",
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
		"liquidityUsd": 4160450.09,
		"hash": "18a5234ea8a701481e83b785a88dae85f75c61378653330552f04cf742762502"
	},
	{
		"id": "7cbc74669eaa",
		"ts": "2026-07-05T16:04:40.748Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991625.31,
		"hash": "7cbc74669eaaf44cf8da8ed6987b1427303dc28e03decb9a70cc207572f8ee5d"
	},
	{
		"id": "a28c17affb97",
		"ts": "2026-07-05T16:04:40.954Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33174488.83,
		"hash": "a28c17affb976b880787c34d654c1907926b08945892ab7ff68a09ec8b24d33b"
	},
	{
		"id": "0b9e4fb593f8",
		"ts": "2026-07-05T16:04:41.154Z",
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
		"liquidityUsd": 2413190.9,
		"hash": "0b9e4fb593f8ebc896c9b5b0509e54cce3fdd50dc0bc1717b1cfc8c6fc7951e7"
	},
	{
		"id": "808e490d76ce",
		"ts": "2026-07-05T16:04:41.340Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 75247.49,
		"hash": "808e490d76ce2b2f6d1129d923e91a6ba6cdd5acd3761aef6baca27aa8471cba"
	},
	{
		"id": "f3bb0555e2f4",
		"ts": "2026-07-05T16:04:41.529Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 704087.21,
		"hash": "f3bb0555e2f4ed2ef167d03b0b0d2ed5e3f9c685ba21156fb5ccf2569d0e9f78"
	},
	{
		"id": "7af16a7578a0",
		"ts": "2026-07-05T16:04:41.714Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7837668.4,
		"hash": "7af16a7578a00452b5588b36873b7356796291a11e7496039f4ab1f8cc846931"
	},
	{
		"id": "915e53e582d9",
		"ts": "2026-07-05T16:04:41.896Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3413471.63,
		"hash": "915e53e582d95ea400515a195fcfb60b298fbd0bdba3d1cc3f0db95ed431c4fd"
	},
	{
		"id": "8f7939bf2d1d",
		"ts": "2026-07-05T16:04:42.067Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517223.99,
		"hash": "8f7939bf2d1dcf320184863cb27416a32194c6890b213bda19460aaf831299c2"
	},
	{
		"id": "9a19d953d62c",
		"ts": "2026-07-05T16:04:42.292Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775757.81,
		"hash": "9a19d953d62c719fec1d400da74d8f36a32a1fb1265b49e7a4e152f83ed6ea64"
	},
	{
		"id": "5548655bd345",
		"ts": "2026-07-05T16:04:42.470Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4776245.15,
		"hash": "5548655bd3453c46be7968d7c34ea38b1f4dcad77989d2ba2c11cd25098e1ff3"
	},
	{
		"id": "6f6871649577",
		"ts": "2026-07-05T16:04:42.645Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4709000.17,
		"hash": "6f6871649577999bec8eef3d10424e7c10fc4a76522570b9800f0d0e067994ff"
	},
	{
		"id": "c35c43c5706f",
		"ts": "2026-07-05T16:04:42.819Z",
		"symbol": "deployer",
		"token": "0xaE7DC6559AeaAdd8A3c156fe695A650c7095C9cE",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 29901.55,
		"hash": "c35c43c5706f7caf6d4622db9e0131d10f19d0debff17e2e2a227b67c508cd8b"
	},
	{
		"id": "11e5b9a317b9",
		"ts": "2026-07-05T16:04:42.991Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 402191.93,
		"hash": "11e5b9a317b9d7894227beaff801f049a471d7072948a5baea61f06ed033e122"
	},
	{
		"id": "9762ba7c8574",
		"ts": "2026-07-05T16:04:43.174Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 580027.59,
		"hash": "9762ba7c8574a99560cdab9589f8cebcccc3b85e70e5f34e2bc5a29645636210"
	},
	{
		"id": "a430838e95bd",
		"ts": "2026-07-05T14:38:47.444Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100290883.23,
		"hash": "a430838e95bd6df9fbb9d7ee6d4bdf70a97655d30808abad81b5fd85dc111285"
	},
	{
		"id": "70a25eb51884",
		"ts": "2026-07-05T14:38:47.706Z",
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
		"liquidityUsd": 15857608.48,
		"hash": "70a25eb51884bd540a545cf4641e920c8e1b32dc078fa3ac14af22a35f35838c"
	},
	{
		"id": "4f516a55ea62",
		"ts": "2026-07-05T14:38:47.970Z",
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
		"liquidityUsd": 1350425.99,
		"hash": "4f516a55ea6248970c381927af7d01648b02ee79cd33727c8633b790e643e6dc"
	},
	{
		"id": "958091664e80",
		"ts": "2026-07-05T14:38:48.236Z",
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
		"liquidityUsd": 33124573.08,
		"hash": "958091664e80ae110b001399539189805902268acd01e0b32d8c64748ccca2cd"
	},
	{
		"id": "d76b43cb9b44",
		"ts": "2026-07-05T14:38:48.731Z",
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
		"liquidityUsd": 4136113.31,
		"hash": "d76b43cb9b44fc01eee1a8f4a9e31582d8342a1670f5c99b9f064fe4437a36b9"
	},
	{
		"id": "0f4543c6b20c",
		"ts": "2026-07-05T14:38:48.979Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991625.31,
		"hash": "0f4543c6b20ca095462c65e1f73c6830a5bd0edb0a3e5bf606dbde6ada6f3d09"
	},
	{
		"id": "205722250c7c",
		"ts": "2026-07-05T14:38:49.260Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33124573.08,
		"hash": "205722250c7ca42efe6ebf60ea42cf4252e6666d6fcbcc60a35c29dce82f2caa"
	},
	{
		"id": "faa07aa09830",
		"ts": "2026-07-05T14:38:49.523Z",
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
		"liquidityUsd": 2404799.21,
		"hash": "faa07aa098304ce00ec3b6959051561421bfbe1c7601fb63d0a9d0a7ae989114"
	},
	{
		"id": "28da1aae97c9",
		"ts": "2026-07-05T14:38:49.786Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 670043.12,
		"hash": "28da1aae97c9807d6a0ebb62b6eabdbf1aca2d8dec833e64aa75940f9992e21e"
	},
	{
		"id": "1c096ed0ab1b",
		"ts": "2026-07-05T14:38:50.043Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 82188.77,
		"hash": "1c096ed0ab1bb49f52a2f80b83c562c88225e4db195a9f2751f74f8d7fd3474b"
	},
	{
		"id": "56cf8e028b40",
		"ts": "2026-07-05T14:38:50.292Z",
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
		"liquidityUsd": 7804886.39,
		"hash": "56cf8e028b4035edad689cb4a0093c4b1c99a92a13e3a41c05cd0bcae68ba281"
	},
	{
		"id": "4752ae9e3aa3",
		"ts": "2026-07-05T14:38:50.541Z",
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
		"liquidityUsd": 3356079.9,
		"hash": "4752ae9e3aa3381b2fc3569e41194e6643abd946cd081de22144041ca5ad432e"
	},
	{
		"id": "114263b1b03d",
		"ts": "2026-07-05T14:38:50.790Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 383010.57,
		"hash": "114263b1b03d8cb5517f6d16bf312dd51677fbbbba4715432934e3d48b1f1358"
	},
	{
		"id": "527fb209cd35",
		"ts": "2026-07-05T14:38:51.031Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4754862.19,
		"hash": "527fb209cd350e43b1929357d94930f9cff93a3ec273f61caa29a30509f31132"
	},
	{
		"id": "a35df75c440c",
		"ts": "2026-07-05T14:38:51.282Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775367.1,
		"hash": "a35df75c440cca023ecbbe291aa6aa0369eaa0dd025352bb3cfba4874eb5a266"
	},
	{
		"id": "9ee2c12c8f48",
		"ts": "2026-07-05T14:38:51.526Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517212.19,
		"hash": "9ee2c12c8f4826a794dca3a6b0eebada393cf63234a2b34afc7b64a74905db60"
	},
	{
		"id": "88339fc1f53b",
		"ts": "2026-07-05T14:38:51.763Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 578086.38,
		"hash": "88339fc1f53befed8b508c1169d259aef99089a607b6cad252a44f93b8053b45"
	},
	{
		"id": "421974b0b1f3",
		"ts": "2026-07-05T14:38:52.004Z",
		"symbol": "AMETA",
		"token": "0x90eC58EF4cc9F37B96DE1e203b65bD4e6E79580E",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 115408.3,
		"hash": "421974b0b1f3db69f20008258740a5a15f2a72f0b141301dc54ea8914ac5c8da"
	}
]
