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
	"updatedAt": "2026-07-10T23:02:05.773Z",
	"tokensScored": 2477,
	"verdictsIssued": 2477,
	"safe": 2163,
	"risky": 229,
	"likelyRug": 85,
	"ticks": 157
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "616d94aa649f",
		"ts": "2026-07-10T23:02:01.716Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105117606,
		"hash": "616d94aa649fd6918e2f30299b862db8351d77e01a275a06796bdd818c8d40d6"
	},
	{
		"id": "8d28dffc5422",
		"ts": "2026-07-10T23:02:02.190Z",
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
		"liquidityUsd": 15820614.48,
		"hash": "8d28dffc54225e8bf3b188f89901256b8bb0de98bcb3c03452b3e8859a04e2d5"
	},
	{
		"id": "7d46b2513328",
		"ts": "2026-07-10T23:02:02.440Z",
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
		"liquidityUsd": 1370809.29,
		"hash": "7d46b2513328886993e086866e900f2d82785316f30b168a7aade8454dc2981b"
	},
	{
		"id": "281f2e80d20b",
		"ts": "2026-07-10T23:02:02.697Z",
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
		"liquidityUsd": 30576053.53,
		"hash": "281f2e80d20b9e0d616a4a0fe1258875701b6bc27166dcda9cf6ff7f42f7051e"
	},
	{
		"id": "1c4f8b7071c6",
		"ts": "2026-07-10T23:02:02.987Z",
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
		"liquidityUsd": 4317297.35,
		"hash": "1c4f8b7071c69e5db8ffd7d67f133de0e3a75862e847603f38036ecade84bbc1"
	},
	{
		"id": "2a9dd2d2804b",
		"ts": "2026-07-10T23:02:03.235Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 985029.69,
		"hash": "2a9dd2d2804bb5c6c199f7c17dfd18644f1ddc7daf9671010c2a0f375e450ab8"
	},
	{
		"id": "f09b3ad523d6",
		"ts": "2026-07-10T23:02:03.491Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30576053.53,
		"hash": "f09b3ad523d69a2da9095158c837d983f624a61868a01d3480a48b992370d09c"
	},
	{
		"id": "f17dc143b170",
		"ts": "2026-07-10T23:02:03.731Z",
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
		"liquidityUsd": 2543513.59,
		"hash": "f17dc143b170f6c5d5fa782dcdc68ea5cb1d47bfeda68d3a0ba38fe276ef8c8b"
	},
	{
		"id": "ed8f08d04ac3",
		"ts": "2026-07-10T23:02:03.971Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3502327.71,
		"hash": "ed8f08d04ac3b23be99d98f3771515d749e9073db2b535b7fe5b856237bbd31f"
	},
	{
		"id": "52e04209a41d",
		"ts": "2026-07-10T23:02:04.215Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1807760.43,
		"hash": "52e04209a41d1a57d470ed950254eac13fabc16693f322dbaf0ef959c3bdbd23"
	},
	{
		"id": "ac8189893021",
		"ts": "2026-07-10T23:02:04.437Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263996.69,
		"hash": "ac8189893021b2673a58fcbb7439e550f1393097a0a033f5dd43e4ada02d70a5"
	},
	{
		"id": "f2c9527a20f8",
		"ts": "2026-07-10T23:02:04.659Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 400304.21,
		"hash": "f2c9527a20f8a3598d85e9a5faff59195e7257a2891973664b9d6a3cbf09901b"
	},
	{
		"id": "ced0a2359776",
		"ts": "2026-07-10T23:02:04.883Z",
		"symbol": "Claude",
		"token": "0x932dDc710C39dF4838958553E8f2Da8331CBcB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 187027.15,
		"hash": "ced0a235977643589c125758d816ac813c7116a94f7e014fd2c643e0115a4ddb"
	},
	{
		"id": "fc6bae2a1b79",
		"ts": "2026-07-10T23:02:05.109Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2291141.78,
		"hash": "fc6bae2a1b795423e7360128dca56b7fe2c69f3a5a417477e6aa5e83ca397213"
	},
	{
		"id": "2ff955d3d696",
		"ts": "2026-07-10T23:02:05.329Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8494958.14,
		"hash": "2ff955d3d6964aefa26287d43b86435ecd0a68e29d3fc80a827f1f077fdd14fe"
	},
	{
		"id": "7d7e4be20aea",
		"ts": "2026-07-10T23:02:05.552Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 836679.85,
		"hash": "7d7e4be20aead1fd3bf48e3bc39a43e6d1c8ffa8355a40c074098816a1c1b1e1"
	},
	{
		"id": "151abe88f1e9",
		"ts": "2026-07-10T23:02:05.773Z",
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
		"liquidityUsd": 1241667.08,
		"hash": "151abe88f1e9a318d0978be287d6a14dacf55cee4fbf9f94ea600ef9d0da9454"
	},
	{
		"id": "228c5068d3f8",
		"ts": "2026-07-10T21:58:24.439Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105118255.41,
		"hash": "228c5068d3f8423a2fba7bb8f364d95b332e936299fbef40d53c93cf03461a50"
	},
	{
		"id": "030311fd3487",
		"ts": "2026-07-10T21:58:24.697Z",
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
		"liquidityUsd": 15754411.64,
		"hash": "030311fd34874fe36aa5d3ce037102e80cfe7e86d435dcc6e0648578f75a0623"
	},
	{
		"id": "4b17d432eb1d",
		"ts": "2026-07-10T21:58:25.142Z",
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
		"liquidityUsd": 1370344.28,
		"hash": "4b17d432eb1d47c721475432b6ddd0e4a3c10565c9bf6b9edfc109df68d94a81"
	},
	{
		"id": "5cabe5905028",
		"ts": "2026-07-10T21:58:25.392Z",
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
		"liquidityUsd": 30516626.19,
		"hash": "5cabe59050286df207d3632f0783a7c4970f26f6577d7308626367b01f2e0f36"
	},
	{
		"id": "236266767a2a",
		"ts": "2026-07-10T21:58:25.631Z",
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
		"liquidityUsd": 4315207.76,
		"hash": "236266767a2a395c9563a0e4c6423af1c6e044a07859325018ca4778df5648d6"
	},
	{
		"id": "516ea52e06f7",
		"ts": "2026-07-10T21:58:25.899Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 977592.98,
		"hash": "516ea52e06f74ec9b4b0f9a5962628a91faccea10677ad3b7f76e79888575f30"
	},
	{
		"id": "52955e917bd1",
		"ts": "2026-07-10T21:58:26.147Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30516626.19,
		"hash": "52955e917bd1dda1ea4abef71fc485366f5f732b699ba51fd85aade3908127aa"
	},
	{
		"id": "6018c73e0c4b",
		"ts": "2026-07-10T21:58:26.384Z",
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
		"liquidityUsd": 2542156.48,
		"hash": "6018c73e0c4bf73d22dafdca899d8028834364552b794b16ee8ebb70b3f4c49a"
	},
	{
		"id": "e84e178a3af4",
		"ts": "2026-07-10T21:58:26.621Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3579481.44,
		"hash": "e84e178a3af4a95ee7195f12235e0c6735a74d9a1d521b8fd1119fd84c94630a"
	},
	{
		"id": "9ed92aba4865",
		"ts": "2026-07-10T21:58:26.867Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1833578.8,
		"hash": "9ed92aba4865b06da88b2de1f9d6f39b8abeb8c996576eded0c228eb7270a4cc"
	},
	{
		"id": "75d976eb7222",
		"ts": "2026-07-10T21:58:27.087Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265274.94,
		"hash": "75d976eb722286a1e2e60c9cdbc63a107faeedc43dd75fd8b9156076983a3708"
	},
	{
		"id": "d7746832cb4a",
		"ts": "2026-07-10T21:58:27.311Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 334309.35,
		"hash": "d7746832cb4a3b94a85b89044c72d79836f1a304f2e31e1ed91f2c72658197e1"
	},
	{
		"id": "00d33e22bcec",
		"ts": "2026-07-10T21:58:27.539Z",
		"symbol": "Claude",
		"token": "0x932dDc710C39dF4838958553E8f2Da8331CBcB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 187027.4,
		"hash": "00d33e22bceccc5ad49413fe937b072511b7ac4c6829ba66239fb4dc2768a2ff"
	},
	{
		"id": "b6e034e1c66f",
		"ts": "2026-07-10T21:58:27.761Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2264952.16,
		"hash": "b6e034e1c66f860fbb12977e90437447e0133728bfb21f14f3f2e6110b1e6959"
	},
	{
		"id": "9210047288a2",
		"ts": "2026-07-10T21:58:27.984Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8434029.59,
		"hash": "9210047288a27bba5365b3d3190fa1b1257c65197b78583266900ee896b3d196"
	},
	{
		"id": "d40cdfa2130c",
		"ts": "2026-07-10T21:58:28.215Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 850655.44,
		"hash": "d40cdfa2130c591207d97477a76f354106bc835a072717077488e9ae9eca18d0"
	},
	{
		"id": "5557cd12f7f1",
		"ts": "2026-07-10T21:58:28.435Z",
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
		"liquidityUsd": 1250680.75,
		"hash": "5557cd12f7f18e5b4e68644cc0750a964d1f4f6dd411042cab46494fe697f09f"
	},
	{
		"id": "e6ed75710821",
		"ts": "2026-07-10T20:19:51.363Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105112955.97,
		"hash": "e6ed75710821d2b1ac292513f92942e08010c34ade6dd76e943da02874cd72e4"
	},
	{
		"id": "f4465473cd02",
		"ts": "2026-07-10T20:19:51.591Z",
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
		"liquidityUsd": 15018497.13,
		"hash": "f4465473cd02539ad726f4aa459e169cd18bf1aebc6596b21fe982b00b8582a5"
	},
	{
		"id": "baccd7650634",
		"ts": "2026-07-10T20:19:51.957Z",
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
		"liquidityUsd": 1369361.27,
		"hash": "baccd76506344acfa6a6db737a13bb51d2e04a7eef2df6d90c53abc141681634"
	},
	{
		"id": "d8e08d6f8672",
		"ts": "2026-07-10T20:19:53.704Z",
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
		"liquidityUsd": 30393914.14,
		"hash": "d8e08d6f8672c07816fc1d4737657639dcb9fd635f5d624823c8d8f2a1ade6c9"
	},
	{
		"id": "45b3676923e1",
		"ts": "2026-07-10T20:19:53.917Z",
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
		"liquidityUsd": 4241476.55,
		"hash": "45b3676923e1ffea43dfec674f9f3c7b7f671dcc9ab148d0789fa89788077a6f"
	},
	{
		"id": "2d780fc578b4",
		"ts": "2026-07-10T20:19:54.127Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 977597.08,
		"hash": "2d780fc578b41bfa14272b01937f629191e4a130f073d6c12168b637d2b3c035"
	},
	{
		"id": "255f059d077c",
		"ts": "2026-07-10T20:19:54.349Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30393914.14,
		"hash": "255f059d077cfded16edd8ae3b9a90e11082b59b4a43e951b2380e9b98a5fa18"
	},
	{
		"id": "49979bf3e87d",
		"ts": "2026-07-10T20:19:54.561Z",
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
		"liquidityUsd": 2544118.58,
		"hash": "49979bf3e87dcfb7491e265201dd5fefe3d7b449144a8ec7eb644a45e0b2abd4"
	},
	{
		"id": "f4d83b84b505",
		"ts": "2026-07-10T20:19:54.769Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3521182.22,
		"hash": "f4d83b84b5054546243fe093d61ae33fc6b223d0bf8e123a20c1c2bd77a92f59"
	},
	{
		"id": "8f4c04fcdf1d",
		"ts": "2026-07-10T20:19:54.980Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1826777.88,
		"hash": "8f4c04fcdf1d4d3fdc88e17f08ed357ab1d5886745f7bc1bb6394d97de209e56"
	},
	{
		"id": "dff023f70bab",
		"ts": "2026-07-10T20:19:58.437Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 251616.46,
		"hash": "dff023f70babe4fd22fb4e8850f068a915c26be8fa9a4089a9939e0bc733a2e4"
	},
	{
		"id": "15e733dc68f6",
		"ts": "2026-07-10T20:20:00.357Z",
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
		"liquidityUsd": 343877.6,
		"hash": "15e733dc68f6e6c6e3cbe800f38f62e660f148d418fdb77a0cec45a2bf9805eb"
	},
	{
		"id": "185989ce04df",
		"ts": "2026-07-10T20:20:00.614Z",
		"symbol": "Claude",
		"token": "0x932dDc710C39dF4838958553E8f2Da8331CBcB07",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 187027.38,
		"hash": "185989ce04df220484273475efc27212cf7f140598f8bd18a7a9aa6b9b04b035"
	},
	{
		"id": "17799f00fe27",
		"ts": "2026-07-10T20:20:00.979Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2176923.85,
		"hash": "17799f00fe27dc9e9a2cb0c9f03f1fd2e14449a53368ddf9e4e740f694e8a1ff"
	},
	{
		"id": "4c6180487250",
		"ts": "2026-07-10T20:20:02.301Z",
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
		"liquidityUsd": 8409065.45,
		"hash": "4c61804872509563d2bee41d1597d534584bd3eb91d597d00aa200f3875dc6fa"
	},
	{
		"id": "180a86e6dab4",
		"ts": "2026-07-10T20:20:02.515Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 827848.31,
		"hash": "180a86e6dab4e1ca58ef3ba62ab452aa1e9855c2d2c569c42d8256a27b37c392"
	},
	{
		"id": "679e4ab8d4c9",
		"ts": "2026-07-10T20:20:02.831Z",
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
		"liquidityUsd": 1276791.32,
		"hash": "679e4ab8d4c94e4034a07f172ad0ec594dae34bcfcc74f3ba31f946de9d459a6"
	},
	{
		"id": "bdea86cc719b",
		"ts": "2026-07-10T18:20:44.323Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105140176.81,
		"hash": "bdea86cc719b6e8d88e239227a7dda26ecfb95ef25ae512edc70a80d9747394b"
	},
	{
		"id": "67da9ef15909",
		"ts": "2026-07-10T18:20:45.036Z",
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
		"liquidityUsd": 15823003.16,
		"hash": "67da9ef15909c3f962acf4d47e6c56d64b88490dc8e9e0f231cf4af3bec47eeb"
	},
	{
		"id": "eaaebe9a34fb",
		"ts": "2026-07-10T18:20:45.541Z",
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
		"liquidityUsd": 1367948.5,
		"hash": "eaaebe9a34fb4c02ea1daa74f67d2c9222cfef700801e0d03484ec7662592b7d"
	},
	{
		"id": "781a4cdba43c",
		"ts": "2026-07-10T18:20:46.048Z",
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
		"liquidityUsd": 30313908.83,
		"hash": "781a4cdba43c4062a93005bb0ed38f2c5ab422330a745c2d7652fcc2c90ad60a"
	},
	{
		"id": "0756a3ea9f9d",
		"ts": "2026-07-10T18:20:46.315Z",
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
		"liquidityUsd": 4198308.05,
		"hash": "0756a3ea9f9d616a03ce17294efe9a97b47ee63021036149a71e526aad216647"
	},
	{
		"id": "5d73332103e3",
		"ts": "2026-07-10T18:20:46.605Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 977746.63,
		"hash": "5d73332103e37cd1950c73393796b459a16c5aa8f0fb0d8deb4e027c5b04322e"
	},
	{
		"id": "59f2c90b5c48",
		"ts": "2026-07-10T18:20:46.879Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30313908.83,
		"hash": "59f2c90b5c482f48aaa1389d7e4b6e5990d0d0d36129fe28596abca866d33dc8"
	},
	{
		"id": "65da1675cab0",
		"ts": "2026-07-10T18:20:47.355Z",
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
		"liquidityUsd": 2549617.69,
		"hash": "65da1675cab0bba94ed2aeb79994d4c618df4fc2e5fce2c19a8083f8c85aaac0"
	},
	{
		"id": "7d30fe2d669a",
		"ts": "2026-07-10T18:20:47.614Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3499179.4,
		"hash": "7d30fe2d669ab707b5097cf2f6eec75ca5c1c2ee9f57f06a4679b8a6d92ed90f"
	},
	{
		"id": "c7fa60deca30",
		"ts": "2026-07-10T18:20:47.887Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1956840.89,
		"hash": "c7fa60deca30bb58ed68ca1a4bb7ce186b15402c4b21a57424cb1e48d51f4b9b"
	},
	{
		"id": "5f00d0ba0f8a",
		"ts": "2026-07-10T18:20:48.156Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 414677.44,
		"hash": "5f00d0ba0f8afdee6fcee45e8955b592548daf5340daa2ce7c47157887650820"
	},
	{
		"id": "4bcce77121d0",
		"ts": "2026-07-10T18:20:48.398Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 294427.33,
		"hash": "4bcce77121d0de17ee49d6c0808e00a92ed1ca7c5f910a62a29613c48f8d5536"
	},
	{
		"id": "46e9513ed126",
		"ts": "2026-07-10T18:20:48.645Z",
		"symbol": "Claude",
		"token": "0x932dDc710C39dF4838958553E8f2Da8331CBcB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 187026.27,
		"hash": "46e9513ed1267df25b77e9e9bb972c005024173f9f941e1f808279a418307e6e"
	},
	{
		"id": "ecd537580c3b",
		"ts": "2026-07-10T18:20:48.900Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8309107.06,
		"hash": "ecd537580c3b1af0b14a95d70dc59c73ff7bd69205de4935e4b4698ad60ff463"
	},
	{
		"id": "c5d7645ca717",
		"ts": "2026-07-10T18:20:49.154Z",
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
		"liquidityUsd": 1279673.6,
		"hash": "c5d7645ca71718964d5cf37cbed2bc1572fe96c84b65ccb7a8d47fbccf8152cd"
	},
	{
		"id": "96904d97d3bb",
		"ts": "2026-07-10T18:20:49.400Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 874847.1,
		"hash": "96904d97d3bb07b03af77d29e61c954388567746b331ed6b42d585cca2e8c838"
	},
	{
		"id": "04d9b19002a0",
		"ts": "2026-07-10T18:20:49.642Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2146192.9,
		"hash": "04d9b19002a0fbc4c5a0a0895615c64f82c9f6f7e716a4ad208f3e7bd347b69e"
	},
	{
		"id": "f00bc1396429",
		"ts": "2026-07-10T16:22:37.362Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105098195.83,
		"hash": "f00bc1396429c0eb7e9bec7ca1310a30d7b11172722231a77a6c9cb816a3ff87"
	},
	{
		"id": "a87cb22f64e8",
		"ts": "2026-07-10T16:22:38.870Z",
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
		"liquidityUsd": 16251606.94,
		"hash": "a87cb22f64e8ef0889668bdbf1c96a1e63c53d00cb6ba3fd432c6c12ddb4bb33"
	},
	{
		"id": "66e76bbd0e09",
		"ts": "2026-07-10T16:22:39.367Z",
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
		"liquidityUsd": 1372307.48,
		"hash": "66e76bbd0e09fe7c7bd1469fc8c52e3ef5a9ae9b41cdcbacedd4991569652136"
	},
	{
		"id": "b71941f425ad",
		"ts": "2026-07-10T16:22:40.933Z",
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
		"liquidityUsd": 30313688.37,
		"hash": "b71941f425ad817222ab8a128d30c87cf7de3f48b80c442ab8201c50e2d785f8"
	},
	{
		"id": "b2770be7f297",
		"ts": "2026-07-10T16:22:41.409Z",
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
		"liquidityUsd": 4062337.02,
		"hash": "b2770be7f2976311acc4181eb8f10f038a3ae92fdeaad7b2eeb7f1eee3f8eeb3"
	},
	{
		"id": "5b3090a6c83d",
		"ts": "2026-07-10T16:22:41.678Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 977746.63,
		"hash": "5b3090a6c83d2847f35a7c20078e825d90c3c34262c4521bd2c2172f7b27c63e"
	},
	{
		"id": "a556351b6324",
		"ts": "2026-07-10T16:22:41.954Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30313688.37,
		"hash": "a556351b6324f21c3d1f5c2b01e301c85ce32ae6ccaff1ac5b52865e1190ec7f"
	},
	{
		"id": "9f909a36ea15",
		"ts": "2026-07-10T16:22:42.933Z",
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
		"liquidityUsd": 2554819.56,
		"hash": "9f909a36ea15c174badda22ec356c6f46b380465512459d749309843b477fbd4"
	},
	{
		"id": "eab010163af8",
		"ts": "2026-07-10T16:22:43.454Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3526738.92,
		"hash": "eab010163af8b44ac84355841ad4604b8a52873327f7eb4ef43e52c37e3a0531"
	},
	{
		"id": "d2818223a9be",
		"ts": "2026-07-10T16:22:43.709Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2029811.87,
		"hash": "d2818223a9bed8ed1962956ed198ab34d043afa7c8462874a053db0261dc7f7d"
	},
	{
		"id": "0d8620af5ea4",
		"ts": "2026-07-10T16:22:43.958Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 322151.35,
		"hash": "0d8620af5ea4444e7b27c972c8e5855e51f0f902eee06fa0b5ef3d2552dd126d"
	},
	{
		"id": "674a3d8e3218",
		"ts": "2026-07-10T16:22:44.215Z",
		"symbol": "Claude",
		"token": "0x932dDc710C39dF4838958553E8f2Da8331CBcB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 187025.84,
		"hash": "674a3d8e32185ef9637fa01d7e35e8cc8ddf40208f9cf8dbf13f659e580765a3"
	},
	{
		"id": "fa530d9320dd",
		"ts": "2026-07-10T16:22:44.465Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 282025.91,
		"hash": "fa530d9320dda433fc337725320a3b5f6f38babe768b9b2157a42fc3125ff57c"
	},
	{
		"id": "874c461b3545",
		"ts": "2026-07-10T16:22:44.731Z",
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
		"liquidityUsd": 1239697.51,
		"hash": "874c461b35458ec0af57fa365421219d832a3c01634e8d3fb61b27fc31bd6ec8"
	},
	{
		"id": "dc9f2b4256d4",
		"ts": "2026-07-10T16:22:44.972Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2021272.96,
		"hash": "dc9f2b4256d4c7cb4fe017220cf3d49057f1ac49a66d1bfe0094cb1595bfdeb1"
	},
	{
		"id": "32aa2057e842",
		"ts": "2026-07-10T16:22:45.251Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 828999.22,
		"hash": "32aa2057e84293c8754ff2ac8f7563c9d1d6da3e3d1b434acd7b73d48c8073be"
	},
	{
		"id": "7fdafd5aeb36",
		"ts": "2026-07-10T16:22:45.508Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8241117.84,
		"hash": "7fdafd5aeb36e03bc226e6b38058c596af046b7b824f49e5ecacb79f0281caac"
	},
	{
		"id": "0a8d8aeb8501",
		"ts": "2026-07-10T13:09:29.879Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105238607.05,
		"hash": "0a8d8aeb8501fa0078c969a606d5007676f84b01884337808421a0604276ef34"
	},
	{
		"id": "d686870c0a18",
		"ts": "2026-07-10T13:09:30.341Z",
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
		"liquidityUsd": 16177891.68,
		"hash": "d686870c0a18c5fee004be8dab6fbf5c7b4d15383dcdcac7d2b0e36652d14cc8"
	},
	{
		"id": "286ca3041ae5",
		"ts": "2026-07-10T13:09:30.584Z",
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
		"liquidityUsd": 1365114.9,
		"hash": "286ca3041ae58fc7c7e2b991be8203e919a000c1e5bfe9b8053cdacb507264a4"
	},
	{
		"id": "420e75c6c115",
		"ts": "2026-07-10T13:09:30.825Z",
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
		"liquidityUsd": 31009191.53,
		"hash": "420e75c6c1159b40d5b8cda7a3f4e94d0fb994c4d499de6911062af74a40b415"
	},
	{
		"id": "e12fb17b0ef9",
		"ts": "2026-07-10T13:09:31.073Z",
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
		"liquidityUsd": 4082469.59,
		"hash": "e12fb17b0ef9681c2a49dc26185228ca73f0441badaf77eb3c92f5c3a6828ed4"
	},
	{
		"id": "d1b3cd9e11a2",
		"ts": "2026-07-10T13:09:31.317Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996514.22,
		"hash": "d1b3cd9e11a2bf888d2553a7fd822a4ce20794d03abe3a931d37c499cea4481b"
	},
	{
		"id": "dfaa5fad770f",
		"ts": "2026-07-10T13:09:31.560Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31009191.53,
		"hash": "dfaa5fad770f59bd36da7466b48f9ac3cfb6f1209122f9675e79fbc34012f592"
	},
	{
		"id": "7ccbcfbdfcea",
		"ts": "2026-07-10T13:09:31.803Z",
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
		"liquidityUsd": 2559940.25,
		"hash": "7ccbcfbdfcea8a01516e8b90a38be8f68df8dc761256e8c4978d46bc3b9c9235"
	},
	{
		"id": "ae66127c6b7b",
		"ts": "2026-07-10T13:09:32.043Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1935805.68,
		"hash": "ae66127c6b7bee761f160e9607f059c68a2886b87609417e279b9098603ee181"
	},
	{
		"id": "2499de404ab6",
		"ts": "2026-07-10T13:09:32.285Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3535940.21,
		"hash": "2499de404ab6953513896726f73dfe5fc9a16e83194112bdacdbf09d0551dbb2"
	},
	{
		"id": "832d2470fae0",
		"ts": "2026-07-10T13:09:32.511Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 347125.8,
		"hash": "832d2470fae09fd84d09ef1a8df3b01601db49056b4c04eda5097c7db6e97ef1"
	},
	{
		"id": "0f6ecb18dfcb",
		"ts": "2026-07-10T13:09:32.737Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 315156.74,
		"hash": "0f6ecb18dfcbf3a08c5d4b9e2b00d865ebbc146385dc66498783dce3a2a198fa"
	},
	{
		"id": "a96fd8ca3c49",
		"ts": "2026-07-10T13:09:33.169Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 816921.83,
		"hash": "a96fd8ca3c498cf383efeb8495a7e88b5144727c84ee67dade1928309a8df3ee"
	},
	{
		"id": "72db5a6ef2ac",
		"ts": "2026-07-10T13:09:33.389Z",
		"symbol": "Claude",
		"token": "0x932dDc710C39dF4838958553E8f2Da8331CBcB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 180690.86,
		"hash": "72db5a6ef2aced2b2f5f37161a9c351dee1ec39d11220af20bfc0a4a6f409bf1"
	},
	{
		"id": "f4c85678c59c",
		"ts": "2026-07-10T13:09:33.608Z",
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
		"liquidityUsd": 1240736.56,
		"hash": "f4c85678c59c2d046cfa72b5a457de595d9f1299c589d8f0d90c9b58be20c99a"
	},
	{
		"id": "7a2370ecf804",
		"ts": "2026-07-10T13:09:33.827Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8253410.77,
		"hash": "7a2370ecf804a409c30bd62fd2a00b42f6b1be6ade077ec2316cbe88c7577717"
	},
	{
		"id": "c099fbbefe44",
		"ts": "2026-07-10T13:09:34.046Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 48226.19,
		"hash": "c099fbbefe44acdcc583c1f9dff49ff97bc8ddcb92bc7e2d15b6143749148c21"
	},
	{
		"id": "522779118562",
		"ts": "2026-07-10T13:09:34.263Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 531315.78,
		"hash": "522779118562524b7284fe3b7c6565a16ad3f818c31dc1d33342e8e29d55d254"
	},
	{
		"id": "e20e209886c4",
		"ts": "2026-07-10T13:09:34.481Z",
		"symbol": "Totem",
		"token": "0x0F8ac22B85076F9BfE0b93Cc49FB6426CB150F88",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59319.05,
		"hash": "e20e209886c439e9a6a39c993de4fb0789f4bdd825bff621d42715c17a6e0993"
	},
	{
		"id": "8cad56a2de4f",
		"ts": "2026-07-10T10:21:21.338Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 104844174.33,
		"hash": "8cad56a2de4fbc16e8e12d91a8f20d6f524ff2fd91cfb334802dd9bbb83701ce"
	},
	{
		"id": "d4dc8477e65f",
		"ts": "2026-07-10T10:21:22.735Z",
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
		"liquidityUsd": 15549969.69,
		"hash": "d4dc8477e65fd47e0fbc5b279c7eee925cd50e1263b3b8177e589dc151451084"
	},
	{
		"id": "0b5b24265a0e",
		"ts": "2026-07-10T10:21:22.987Z",
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
		"liquidityUsd": 1363359.46,
		"hash": "0b5b24265a0eb09efc66f46c5344221778c3f9d990bc40b1a705d166a934c0f6"
	},
	{
		"id": "3dcf266f631e",
		"ts": "2026-07-10T10:21:23.357Z",
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
		"liquidityUsd": 30726068.08,
		"hash": "3dcf266f631e853c8a28995cd08401c7889c9dc8e9b330bce6275e4f83534a16"
	},
	{
		"id": "8026466351fb",
		"ts": "2026-07-10T10:21:23.579Z",
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
		"liquidityUsd": 4058522.72,
		"hash": "8026466351fb2398924b13410a8ba5986c72e08cefaf72aeef26934ba75f5bb1"
	},
	{
		"id": "c7b2cd373283",
		"ts": "2026-07-10T10:21:23.792Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 987246.61,
		"hash": "c7b2cd3732833bb4e35437ab96918f4a17b8d4355136e83c1170df3d407e7e9c"
	},
	{
		"id": "78e0af185950",
		"ts": "2026-07-10T10:21:24.003Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30726068.08,
		"hash": "78e0af18595089fe9811a5743e75a85e88a300a6df2745bcffe7809ee87792ec"
	},
	{
		"id": "b38e4e9ab5c7",
		"ts": "2026-07-10T10:21:24.211Z",
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
		"liquidityUsd": 2554146.23,
		"hash": "b38e4e9ab5c7ab07330aae800f0e16bd249a6d2516938ece04331c9e34424d54"
	},
	{
		"id": "4c65be56caa5",
		"ts": "2026-07-10T10:21:24.420Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2031208.11,
		"hash": "4c65be56caa5e8ab845e4e7d04a5a9ac969178f73d910439e434a878a3b6472d"
	},
	{
		"id": "1fb6d1d7eb68",
		"ts": "2026-07-10T10:21:24.627Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4452929.58,
		"hash": "1fb6d1d7eb683fd22c938d544b02a2ff07aa25ad71258bfa853fa025d93f4141"
	},
	{
		"id": "566946f765d0",
		"ts": "2026-07-10T10:21:24.823Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 440759.34,
		"hash": "566946f765d0e8155dfc5d528b385ac7fe88cc64563d75e6968ea725f85e539c"
	},
	{
		"id": "83d63c37bfd2",
		"ts": "2026-07-10T10:21:25.030Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 322855.22,
		"hash": "83d63c37bfd278a1a1e55f1dbc5dc338aa821648ceb340fdd9dc0c915fdfb565"
	},
	{
		"id": "da9a40ea8f2f",
		"ts": "2026-07-10T10:21:25.391Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 47716.45,
		"hash": "da9a40ea8f2f1b4884c1c17ff6eb143ddbcb3ca3908d4b4b64d124983e4dc647"
	},
	{
		"id": "e69781ed3685",
		"ts": "2026-07-10T10:21:26.570Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 812841.93,
		"hash": "e69781ed36853425d535853b4032834ef5ff5ec557cb13b079aca1d900529af5"
	},
	{
		"id": "a78d3be73720",
		"ts": "2026-07-10T10:21:26.762Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8233245.87,
		"hash": "a78d3be737200916bc5612a82bcc4152f95bcdee6a0a9a599304ffda556a34e6"
	},
	{
		"id": "c7ce283fde20",
		"ts": "2026-07-10T10:21:26.955Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 542722.25,
		"hash": "c7ce283fde203ea5c7f7686727daae42d94117e7bb6a5279a3af1bff48ec810a"
	},
	{
		"id": "d0c1f6ad4549",
		"ts": "2026-07-10T10:21:27.849Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1952697.64,
		"hash": "d0c1f6ad45494b691aa6994885840071b70999c6a6d9d42c08b5c56608763809"
	},
	{
		"id": "e969bd9618ca",
		"ts": "2026-07-10T10:21:28.042Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 464737.91,
		"hash": "e969bd9618ca7105e9ada8d58c98d1dd73a959015fc22cb9f44c8ab520e0ead2"
	},
	{
		"id": "082c3aa8e52c",
		"ts": "2026-07-10T10:21:28.306Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 735952.13,
		"hash": "082c3aa8e52c67268e2956e8fa9f35e11a2cc9eb34f18cdd2c5b5a82bcb49fa5"
	},
	{
		"id": "f92d548120f5",
		"ts": "2026-07-10T06:41:38.730Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 104874850.48,
		"hash": "f92d548120f59f45181c4bc5bcf9f8c4f06aa8fac72803e84905d3f3551f5205"
	},
	{
		"id": "0b9a6e59ee66",
		"ts": "2026-07-10T06:41:39.238Z",
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
		"liquidityUsd": 15933572.53,
		"hash": "0b9a6e59ee6632e0c41fc4e7f647827317807bdecffd1149e87cf63a2ea0a412"
	},
	{
		"id": "84c58153098c",
		"ts": "2026-07-10T06:41:39.514Z",
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
		"liquidityUsd": 1355050.69,
		"hash": "84c58153098c2fed2495b0de05c450ecc56a15d4bde959ec908004dad1527de6"
	},
	{
		"id": "3ce0f2545457",
		"ts": "2026-07-10T06:41:39.804Z",
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
		"liquidityUsd": 30649915.68,
		"hash": "3ce0f254545713f79f50e677ac6c4793f104ff4b0f33c8624f547e5209fc3d9d"
	},
	{
		"id": "f540d2b788c3",
		"ts": "2026-07-10T06:41:40.302Z",
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
		"liquidityUsd": 4043399.96,
		"hash": "f540d2b788c3a81fb843b8bf2a919c00601477ec99a6baaebfb963592e5686b5"
	},
	{
		"id": "ec35ff761350",
		"ts": "2026-07-10T06:41:40.581Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 978395.89,
		"hash": "ec35ff7613507384bbd0650bbf034ceac5e523e0c8fa10a2348edf892aa8791c"
	},
	{
		"id": "7ecd8d636f4d",
		"ts": "2026-07-10T06:41:40.844Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30649915.68,
		"hash": "7ecd8d636f4de7e6226c562c8f27bacfc19ff36cf717987b4d3455c2a6ab24b3"
	},
	{
		"id": "62ae1ec32311",
		"ts": "2026-07-10T06:41:41.116Z",
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
		"liquidityUsd": 2513052.89,
		"hash": "62ae1ec32311ccfdc289f0e64282bb48e48709a9a20b8588eec13abfb179a050"
	},
	{
		"id": "15e973aa110a",
		"ts": "2026-07-10T06:41:41.379Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2058435.71,
		"hash": "15e973aa110ad9d174e34716bd009e10a6b339a678a251a4ec5c378d4781326c"
	},
	{
		"id": "c9ecccedfd4a",
		"ts": "2026-07-10T06:41:41.664Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 103006.18,
		"hash": "c9ecccedfd4a6ad8ba758388b662e9e0107f20085c49329ffa20ea483f501ee8"
	},
	{
		"id": "c26d293f8476",
		"ts": "2026-07-10T06:41:41.922Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3517712.53,
		"hash": "c26d293f8476a33cb53f3af33ba3edebdc809072daf2dcd4c5c551415b501f4b"
	},
	{
		"id": "9f49bca14e17",
		"ts": "2026-07-10T06:41:42.185Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 322874.36,
		"hash": "9f49bca14e17e18aef5bceb202ad1fe91618395da7f72e4740a5daac40abb0f4"
	},
	{
		"id": "8bcac09cdbba",
		"ts": "2026-07-10T06:41:42.434Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 45819.86,
		"hash": "8bcac09cdbba64f7dd20905b2256f88adfb4c7d2c665a284e37a509fc05249e7"
	},
	{
		"id": "4512e6f88cac",
		"ts": "2026-07-10T06:41:42.694Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 380429.95,
		"hash": "4512e6f88cac2aec8380b9484845c3a3d5be385d53777c4b56ef9a29e6a74d03"
	},
	{
		"id": "3b5f6c8629f7",
		"ts": "2026-07-10T06:41:42.941Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8069187.7,
		"hash": "3b5f6c8629f7f4525a87af46db795319feb88f3481950a62645ccc0cb5195e6e"
	},
	{
		"id": "ecf203d3fb4b",
		"ts": "2026-07-10T06:41:43.204Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 792311.96,
		"hash": "ecf203d3fb4bd0dcbcf4becd5012d0c32deb8513c33bfb8603fb3a29c1320d0b"
	},
	{
		"id": "d02bc9254e63",
		"ts": "2026-07-10T06:41:43.465Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 725891.08,
		"hash": "d02bc9254e6389da1136312c0fa243e98eac5ac273dd1c41f5a795edf2bb1033"
	},
	{
		"id": "0c552690ffdd",
		"ts": "2026-07-10T06:41:43.723Z",
		"symbol": "cc0company",
		"token": "0x67c5F00491c09cbCF6359f95690574E6106bb3CF",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 46235.83,
		"hash": "0c552690ffdde1a97b97744b6fb10501a7ae79975e11790c33500d7c0542fa35"
	},
	{
		"id": "063bfe4036df",
		"ts": "2026-07-10T06:41:43.972Z",
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
		"liquidityUsd": 1294409.18,
		"hash": "063bfe4036dfc7ac0e6489eede87b63ed81b4d6d5ac8d8f47bcbbbb228fd08af"
	},
	{
		"id": "c45037ba1792",
		"ts": "2026-07-10T02:39:30.241Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105030225.17,
		"hash": "c45037ba179251d324209aff7f87df54e7a84fce2e701144353aa805dbea3d34"
	},
	{
		"id": "8853dbad2b39",
		"ts": "2026-07-10T02:39:30.721Z",
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
		"liquidityUsd": 15955174.34,
		"hash": "8853dbad2b39fde5256430adba66842b9c8e3e11712825461b134c9779e34347"
	},
	{
		"id": "f08c4b88a32c",
		"ts": "2026-07-10T02:39:31.211Z",
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
		"liquidityUsd": 1356366.81,
		"hash": "f08c4b88a32ceca9b89051d4ef3f41d1cb023e5de1ab8c5ab8058db932b1dd04"
	},
	{
		"id": "990e7a7c02f2",
		"ts": "2026-07-10T02:39:31.465Z",
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
		"liquidityUsd": 30647896.25,
		"hash": "990e7a7c02f21b43168dac6dce49bf2ab1a1036ba837aacb6477f37a69fa1212"
	},
	{
		"id": "4ec286f0c26c",
		"ts": "2026-07-10T02:39:31.724Z",
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
		"liquidityUsd": 4020470.48,
		"hash": "4ec286f0c26cf5e568d89ee0549dfb5e954464fa9bd55cebf1c9cf991653ee7d"
	},
	{
		"id": "690bea49dcf2",
		"ts": "2026-07-10T02:39:31.996Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 961559.29,
		"hash": "690bea49dcf219c0ecdbafa5f4dff4a0c0ff50d95adca2f508056d1ec3e0141d"
	},
	{
		"id": "88bfaf6471ea",
		"ts": "2026-07-10T02:39:32.247Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30647896.25,
		"hash": "88bfaf6471eaf3f96e9f6689b7a21d7efccc973b2e6a99d616403a2aef7a8d0e"
	},
	{
		"id": "ecd5c88146b9",
		"ts": "2026-07-10T02:39:32.519Z",
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
		"liquidityUsd": 2522146.09,
		"hash": "ecd5c88146b92d5a18b74ff862d960fb8de08d5d72a13287622a428709a3118c"
	},
	{
		"id": "962d81f27756",
		"ts": "2026-07-10T02:39:32.772Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 121052.27,
		"hash": "962d81f27756ed4f3361bf5f8463dd0ff1c227a5872d19cd2d2c217c9c1b5245"
	},
	{
		"id": "305dd569c8bf",
		"ts": "2026-07-10T02:39:33.024Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2187681.67,
		"hash": "305dd569c8bf7f09241859a95bd0daa5748a6efee548b02813ac8838acff9684"
	},
	{
		"id": "f7fbeab3431f",
		"ts": "2026-07-10T02:39:33.264Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 43921.39,
		"hash": "f7fbeab3431fe1618d0171f555bec683390413ab1e767ba9fb3b3ca2912b001f"
	},
	{
		"id": "54d7df1f696c",
		"ts": "2026-07-10T02:39:33.519Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 296661.74,
		"hash": "54d7df1f696c2150dd276664636bac1a7c037bc00c725e1fe8a19baa57f001b8"
	},
	{
		"id": "19229c70dc0a",
		"ts": "2026-07-10T02:39:33.756Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3489645.68,
		"hash": "19229c70dc0aed0b4988cbc8fee56688370f6b9ba948b75fd0e42c4eb04dcb0d"
	},
	{
		"id": "5aeaf37fddfe",
		"ts": "2026-07-10T02:39:33.993Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8183016.19,
		"hash": "5aeaf37fddfe33c62960e451c319a94a211a2b534ce49f56f8b5cd8845c572c9"
	},
	{
		"id": "63f19c73761e",
		"ts": "2026-07-10T02:39:34.236Z",
		"symbol": "cc0company",
		"token": "0x67c5F00491c09cbCF6359f95690574E6106bb3CF",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 44786.2,
		"hash": "63f19c73761e39fb01cb0e8286d6b45ee2929b97d5ff767b3cb61c561f09cf41"
	},
	{
		"id": "e7eafb5700e3",
		"ts": "2026-07-10T02:39:34.474Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 372224.04,
		"hash": "e7eafb5700e31e485b305593ea8b5f2769f127afac7feed82832323d247ee374"
	},
	{
		"id": "371a14432e36",
		"ts": "2026-07-10T02:39:34.729Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 806583.18,
		"hash": "371a14432e36f2e1edcf56de5dd07f7fd30d4090a7ffbe2df0c6abc8a77fc92f"
	},
	{
		"id": "7d35aedcfe80",
		"ts": "2026-07-10T02:39:34.965Z",
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
		"liquidityUsd": 1246067.79,
		"hash": "7d35aedcfe80adc3633f70eb36903588e1b703fa57bc0b7fd1a335a47d2b0a8f"
	},
	{
		"id": "72bf197e7518",
		"ts": "2026-07-10T02:39:35.202Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 573137.23,
		"hash": "72bf197e751844f905e52bf7c7b1f7cdc7cb30915fe1dacf97e8dde9204124a4"
	},
	{
		"id": "35d4548c10e9",
		"ts": "2026-07-09T23:08:17.074Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 104336537.84,
		"hash": "35d4548c10e98579b1c08ecddce4f9d5ababf6c976dcb52946ea69fd51c5ed82"
	},
	{
		"id": "259305ec7f96",
		"ts": "2026-07-09T23:08:17.583Z",
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
		"liquidityUsd": 15976482.35,
		"hash": "259305ec7f96d29775fa3c6399c55aa1cdf703c14cbc2a21895db755fdfc2953"
	},
	{
		"id": "df41ecdcbfda",
		"ts": "2026-07-09T23:08:18.095Z",
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
		"liquidityUsd": 1350736.35,
		"hash": "df41ecdcbfda9df7c51f740d52fa10224391623bf1c76c346f5e67fd56e67bc6"
	},
	{
		"id": "1a506a31ab62",
		"ts": "2026-07-09T23:08:18.355Z",
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
		"liquidityUsd": 30729532.85,
		"hash": "1a506a31ab6235a958b61f6b50ea4d14ec456c805f81f2d038928b5369196cd8"
	},
	{
		"id": "dab645d96732",
		"ts": "2026-07-09T23:08:18.631Z",
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
		"liquidityUsd": 3972049.34,
		"hash": "dab645d96732c9c2390fdebd81e9feb0d105525839efa0c671972c65194b3c26"
	},
	{
		"id": "3c4f8f5bc086",
		"ts": "2026-07-09T23:08:18.901Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 959137.81,
		"hash": "3c4f8f5bc086a880cea114ea0947a6b5ab68574a86d74deb6f11ef4cfb6e1c0d"
	},
	{
		"id": "4a5a9b14d8e3",
		"ts": "2026-07-09T23:08:19.169Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30729532.85,
		"hash": "4a5a9b14d8e39736bec8987539d3dd2db14dd759e699184674300e16ce745501"
	},
	{
		"id": "1ec113c8001a",
		"ts": "2026-07-09T23:08:19.428Z",
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
		"liquidityUsd": 2488877.01,
		"hash": "1ec113c8001a326d89051db0867e8e8fc045fa72b6ee33975525663b0c5b4326"
	},
	{
		"id": "dfd344e06076",
		"ts": "2026-07-09T23:08:19.697Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 113548.33,
		"hash": "dfd344e060764f1a6a1355b1b5e175672176803de0ea323f6f947ee647fd303e"
	},
	{
		"id": "327b8e9971d6",
		"ts": "2026-07-09T23:08:19.998Z",
		"symbol": "B20",
		"token": "0xB2000000000000000000003deF83e24a9A000b20",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 28232.58,
		"hash": "327b8e9971d622629ac2bb70abaf2573dd3a17954e02b027def200a9627f1c5b"
	},
	{
		"id": "a97a7f7b86a3",
		"ts": "2026-07-09T23:08:20.252Z",
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
		"liquidityUsd": 1911396.35,
		"hash": "a97a7f7b86a3a1890024e43113c523443064d507d6ed5a4f3d87f9295d0f6213"
	},
	{
		"id": "71902bf9cb8a",
		"ts": "2026-07-09T23:08:20.495Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 63648.94,
		"hash": "71902bf9cb8a2c487b9768f0a2822cdad9e186fa3de857f3547563e63102351d"
	},
	{
		"id": "592d6f2e7022",
		"ts": "2026-07-09T23:08:20.747Z",
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
		"liquidityUsd": 272325.19,
		"hash": "592d6f2e7022905c0ac78df360107f808e35a026262af19ae65097e8ad4c55c3"
	},
	{
		"id": "9a51fd9dac6b",
		"ts": "2026-07-09T23:08:20.999Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8098245.21,
		"hash": "9a51fd9dac6b2b0c6c24717b791433d43af89078b9f5b3bc0f5e60ac56a8c4c5"
	},
	{
		"id": "ddf36027915c",
		"ts": "2026-07-09T23:08:21.252Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3277154.59,
		"hash": "ddf36027915c2d6c1a86b90fa12a2dd92a0f47f4e2462b5eea5612826dd9c30d"
	},
	{
		"id": "559c3cb861cd",
		"ts": "2026-07-09T23:08:21.496Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 802948.02,
		"hash": "559c3cb861cd352c8801a6b333ecc33095d7405fd854f8ae3d7bbc4542da4dfc"
	},
	{
		"id": "75c9fc7197ff",
		"ts": "2026-07-09T23:08:21.756Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 350689.01,
		"hash": "75c9fc7197ff84f5669b1e3de23dee8492dbccd6badf841bb849870d74b2cb64"
	},
	{
		"id": "47ceaa883c31",
		"ts": "2026-07-09T23:08:22.015Z",
		"symbol": "cc0company",
		"token": "0x67c5F00491c09cbCF6359f95690574E6106bb3CF",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54836.2,
		"hash": "47ceaa883c31ce2a8118388ada914e32dbd473d0a454a9c30b51fe12634eb764"
	},
	{
		"id": "08d37628ca00",
		"ts": "2026-07-09T23:08:22.275Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 585907.02,
		"hash": "08d37628ca00f2e4a3caab25d1dfa35ebba1d5f1deccf4529e00801566793222"
	},
	{
		"id": "f0a708eb72fc",
		"ts": "2026-07-09T21:20:10.321Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 104198983.23,
		"hash": "f0a708eb72fc2873833de99c2737c3dbff0720540e34c55b302808e16ae4c6bb"
	},
	{
		"id": "e6b030c89182",
		"ts": "2026-07-09T21:20:10.828Z",
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
		"liquidityUsd": 15159220.35,
		"hash": "e6b030c89182cc4df1cc43af37fd5c397f32280290ce4a440c1b10b5cfdc712e"
	},
	{
		"id": "d5c17324973a",
		"ts": "2026-07-09T21:20:11.152Z",
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
		"liquidityUsd": 1349892.46,
		"hash": "d5c17324973a95d0b0e3407b152d39740a84006c0acf31f02ef78c6d556ad57f"
	},
	{
		"id": "4ac26a8911e3",
		"ts": "2026-07-09T21:20:12.040Z",
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
		"liquidityUsd": 30795073.55,
		"hash": "4ac26a8911e3ae5f34b13cb6cb21f60ee02e002807041703c2ae89d201eb9f91"
	},
	{
		"id": "d77b97c25083",
		"ts": "2026-07-09T21:20:12.315Z",
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
		"liquidityUsd": 3971077.91,
		"hash": "d77b97c25083d0a8ca1392f40b25ff61df89ca267c46eb71b4790e3d24efd682"
	},
	{
		"id": "40256338f09f",
		"ts": "2026-07-09T21:20:12.615Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 961563.61,
		"hash": "40256338f09f270e5cef098441ce62089e46923308f11d06bde182951bd3ac31"
	},
	{
		"id": "2f2f65d94c7a",
		"ts": "2026-07-09T21:20:12.899Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30795073.55,
		"hash": "2f2f65d94c7a36216fb14f33a2f2480061199437cadaea7747c95bd99e4fecea"
	},
	{
		"id": "f30611ee5a0c",
		"ts": "2026-07-09T21:20:13.202Z",
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
		"liquidityUsd": 2516689.86,
		"hash": "f30611ee5a0cca8ea7e6a4d3c73ccfdabf4d31376d1dcd82563844dc71a1ed29"
	},
	{
		"id": "a9c5259939ef",
		"ts": "2026-07-09T21:20:14.379Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 118924.16,
		"hash": "a9c5259939efd3ebed4aa1ea34acf9b4aa4aa3d1b0f4047599b97295eec2bd34"
	},
	{
		"id": "094b1d1c0b58",
		"ts": "2026-07-09T21:20:14.639Z",
		"symbol": "B20",
		"token": "0xB2000000000000000000003deF83e24a9A000b20",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"medium_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 25336.75,
		"hash": "094b1d1c0b589045970d11d2f7edaf3475508a467e38da9357e92bb893580a29"
	},
	{
		"id": "e00881316fd3",
		"ts": "2026-07-09T21:20:15.527Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1727414.46,
		"hash": "e00881316fd3016dea4890482e00f12cbaf408b101939e547f64649c01030011"
	},
	{
		"id": "b7098ec1cc11",
		"ts": "2026-07-09T21:20:15.768Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 66606.33,
		"hash": "b7098ec1cc11bdcc7e28812a54ea68433092b25a523b918d002706fb07d30604"
	},
	{
		"id": "add82d4f775a",
		"ts": "2026-07-09T21:20:16.020Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 270813.08,
		"hash": "add82d4f775abf88e10487ae5457dee59b825c4244de5def35935d5a44d393db"
	},
	{
		"id": "be98ac636f7d",
		"ts": "2026-07-09T21:20:16.263Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8059432.81,
		"hash": "be98ac636f7d98eb3f09a8bdd10b93bb1da53e99cfbcef02aade93b978b4aedf"
	},
	{
		"id": "201864fd37db",
		"ts": "2026-07-09T21:20:16.510Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 805691,
		"hash": "201864fd37dbbe3d9e15c3b06e7d2a1dc8329ee24874286a03f9c46d2296be3b"
	},
	{
		"id": "1f890d0b46c6",
		"ts": "2026-07-09T21:20:16.749Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 581071.96,
		"hash": "1f890d0b46c6f904d9de02c0198cb08ef76e690c177b851c95c98909efa3ee93"
	},
	{
		"id": "25ec3b7384f1",
		"ts": "2026-07-09T21:20:16.988Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 631214.58,
		"hash": "25ec3b7384f17156f9a89259df8949a65163343d15ceb7f2267f1434a2813a1e"
	},
	{
		"id": "3c06773d8f5b",
		"ts": "2026-07-09T21:20:17.227Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1880127.89,
		"hash": "3c06773d8f5b0efab7395fdead7f4e233e746f87fd693487635d76b205ed153c"
	},
	{
		"id": "af487adeabe4",
		"ts": "2026-07-09T19:39:40.968Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 104272250.03,
		"hash": "af487adeabe44701901af1fffff0692497e0e081efcebc9c8ca89a036c3a8cc2"
	},
	{
		"id": "54ead4c87c27",
		"ts": "2026-07-09T19:39:41.317Z",
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
		"liquidityUsd": 15646581.51,
		"hash": "54ead4c87c274fcf6958844bca4eec57567f3f2e72ea473227e3133ebc2a78dd"
	}
]
