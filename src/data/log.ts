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
	"updatedAt": "2026-07-18T05:21:42.790Z",
	"tokensScored": 4007,
	"verdictsIssued": 4007,
	"safe": 3538,
	"risky": 327,
	"likelyRug": 142,
	"ticks": 246
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "2280479d928c",
		"ts": "2026-07-18T05:21:38.543Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106071193.89,
		"hash": "2280479d928c58e9f49481b6fd37cb79afd76207bb2878a811163f8e253153e6"
	},
	{
		"id": "72fafd2552ef",
		"ts": "2026-07-18T05:21:38.992Z",
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
		"liquidityUsd": 15195055.48,
		"hash": "72fafd2552efc5b14c05aeb8a77127b0cf016ef41236468614a2f87a698c2764"
	},
	{
		"id": "93e21f447fd4",
		"ts": "2026-07-18T05:21:39.236Z",
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
		"liquidityUsd": 794614.9,
		"hash": "93e21f447fd4f8b011e9c90b0ea7364f3b7b3df0fc3773c368bd5c23ba5bf9a1"
	},
	{
		"id": "1e0133a35034",
		"ts": "2026-07-18T05:21:39.481Z",
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
		"liquidityUsd": 27228313.63,
		"hash": "1e0133a3503452191efaac988989240c6c252765d69fbd319c2970238265c1ec"
	},
	{
		"id": "52187f6e4fd2",
		"ts": "2026-07-18T05:21:39.729Z",
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
		"liquidityUsd": 5100109.47,
		"hash": "52187f6e4fd25f7779a8a6aee56b408c98daaabd09dcf78f03148c5aedfa389a"
	},
	{
		"id": "033fbd68b702",
		"ts": "2026-07-18T05:21:39.979Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 984638.41,
		"hash": "033fbd68b702006951a4f4eac988870d5d7dc27add121319bfcd9fa961913970"
	},
	{
		"id": "dc0a8e7661fa",
		"ts": "2026-07-18T05:21:40.222Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27228313.63,
		"hash": "dc0a8e7661fa49569813d97f4a3c9032edf949ff1587ba8e4298b593f5cd82ac"
	},
	{
		"id": "5b8600f99097",
		"ts": "2026-07-18T05:21:40.468Z",
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
		"liquidityUsd": 2472757.63,
		"hash": "5b8600f99097c94cae8838b1a208a920628d9cebff3b06487a46b339a47541c1"
	},
	{
		"id": "56d6a79c507a",
		"ts": "2026-07-18T05:21:40.720Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 152507.09,
		"hash": "56d6a79c507ae3ab42ac4319487cf20e3056b5f208b7e1a93d097112d8eaa185"
	},
	{
		"id": "28a78149d78a",
		"ts": "2026-07-18T05:21:40.965Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 209898.24,
		"hash": "28a78149d78a3f2ded2afe153a6d06470a3097b11e7561f955fa75ec70b8dffd"
	},
	{
		"id": "1d3d731619a7",
		"ts": "2026-07-18T05:21:41.194Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 466818.8,
		"hash": "1d3d731619a71271af56d36ffdb4fff8cb8c6c3c683de6440cf06ad7d35da882"
	},
	{
		"id": "43ebf90c052a",
		"ts": "2026-07-18T05:21:41.421Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 57419.36,
		"hash": "43ebf90c052a52cc5506f7cb611329282da19c555441bbc93430adfd4360f653"
	},
	{
		"id": "c31c707b153c",
		"ts": "2026-07-18T05:21:41.647Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 626360.69,
		"hash": "c31c707b153ca58753104804c25d4c13f235c88516b5227dfe7ddcf6946cc2af"
	},
	{
		"id": "272a9fa403ac",
		"ts": "2026-07-18T05:21:41.874Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94067.18,
		"hash": "272a9fa403aceebe606ba7b9e69f059df868814a578f2b42a042387b94761f04"
	},
	{
		"id": "0fab84a14d4c",
		"ts": "2026-07-18T05:21:42.102Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3529194.8,
		"hash": "0fab84a14d4c3e284279f7971737938850cf4720222be038d7d04f8c39fe1744"
	},
	{
		"id": "4ee987a301ff",
		"ts": "2026-07-18T05:21:42.332Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1787626.39,
		"hash": "4ee987a301ffe383b500faab8f5935a39da24f2bf3e3d8caa876cd344ed97e2e"
	},
	{
		"id": "ecfdbd004952",
		"ts": "2026-07-18T05:21:42.561Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1271828.31,
		"hash": "ecfdbd004952ac6b3daaea35d6ba113c79a856771c07ea366aaa7c83035f62e0"
	},
	{
		"id": "5de4fb5a903f",
		"ts": "2026-07-18T05:21:42.790Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 663951.46,
		"hash": "5de4fb5a903f3585d94c4458e86f033d6e6cf93851ffd2c6b2ba832e98c784ab"
	},
	{
		"id": "c65f4e684b97",
		"ts": "2026-07-18T02:05:41.661Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106022113.71,
		"hash": "c65f4e684b97fcf99dea31d9b97490e182c4ea0095daca268df01aa26c716d88"
	},
	{
		"id": "aad3e5324ae9",
		"ts": "2026-07-18T02:05:42.099Z",
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
		"liquidityUsd": 15292147.7,
		"hash": "aad3e5324ae9a45fd80ff06656f53ea8633f57da373c529e2f7c6f73b55c3ff9"
	},
	{
		"id": "38c1e214e251",
		"ts": "2026-07-18T02:05:42.335Z",
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
		"liquidityUsd": 795467.62,
		"hash": "38c1e214e2515ddd001f6998de00ea079f42c38dbacfce61933cba22023b42a2"
	},
	{
		"id": "d0fd4f1efd93",
		"ts": "2026-07-18T02:05:42.567Z",
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
		"liquidityUsd": 27142271.45,
		"hash": "d0fd4f1efd93e54812c8ddb91a76f7898fb72b81232cfc1c13d60cac860749d4"
	},
	{
		"id": "36fd277db608",
		"ts": "2026-07-18T02:05:42.803Z",
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
		"liquidityUsd": 5158534.25,
		"hash": "36fd277db608d464aef73326e02300a9b239a5514867338305af47a27d169d5c"
	},
	{
		"id": "2d9fe5df7c46",
		"ts": "2026-07-18T02:05:43.036Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 980434.84,
		"hash": "2d9fe5df7c46247d8d2d505b92172d30feacb1c60d6687d51d0f168f4f17ff68"
	},
	{
		"id": "fc6963fd6227",
		"ts": "2026-07-18T02:05:43.267Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27142271.45,
		"hash": "fc6963fd62276248c84e6ab4f7d2746ceb6e1a46c0bb6e7f0d9a78ffcb381617"
	},
	{
		"id": "db65e8214a12",
		"ts": "2026-07-18T02:05:43.501Z",
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
		"liquidityUsd": 2781041.65,
		"hash": "db65e8214a12c5405b97af25f1395feb01dac865e36e998d5cfbf136331fbead"
	},
	{
		"id": "42672c10588a",
		"ts": "2026-07-18T02:05:43.734Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 157817.46,
		"hash": "42672c10588adbcb7531717173277d287eca16988a42f848a2786fda7c06c30c"
	},
	{
		"id": "84190ff7b07e",
		"ts": "2026-07-18T02:05:43.969Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 241031.47,
		"hash": "84190ff7b07e251d320a2e911907726c50a194fbc290eb95ca6ba94006f7ea37"
	},
	{
		"id": "783465ed58e4",
		"ts": "2026-07-18T02:05:44.187Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 491963.5,
		"hash": "783465ed58e43abe6dfb6ffa24d468ec1f148baa0f3efd87b924e12b0726b532"
	},
	{
		"id": "d9c38d9095ba",
		"ts": "2026-07-18T02:05:44.407Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 726885.21,
		"hash": "d9c38d9095ba7eb55e884ab73927c1fdece99a59e3fd58a0ece656c26aa5d466"
	},
	{
		"id": "56bfe5d38b3b",
		"ts": "2026-07-18T02:05:44.624Z",
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
		"liquidityUsd": 1261825.22,
		"hash": "56bfe5d38b3b87227ba9df75b33b4fe14938d4332cc6ce7913c23cb8fa5468b1"
	},
	{
		"id": "dabc01c21621",
		"ts": "2026-07-18T02:05:44.842Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3603964.27,
		"hash": "dabc01c216219465e7dae280058e10f653ac5b5e6931c731a1f86c4b3525d5f6"
	},
	{
		"id": "8c4bf6ccbb0a",
		"ts": "2026-07-18T02:05:45.060Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94648.55,
		"hash": "8c4bf6ccbb0a0529b584fee35f200d9372367ed1be129a9d248a0f6430ae13fd"
	},
	{
		"id": "c46307c6ceca",
		"ts": "2026-07-18T02:05:45.279Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 700743.23,
		"hash": "c46307c6ceca9d4ff7cd2f1ae50ed33b36a680a731540549c8665d51e337ed21"
	},
	{
		"id": "19eb782699cb",
		"ts": "2026-07-18T02:05:45.497Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 318768.35,
		"hash": "19eb782699cb5f65c1b3540606473e6bfca8e50ea8373ec3aba27942ba3c7667"
	},
	{
		"id": "43962d050e80",
		"ts": "2026-07-18T02:05:45.714Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1287957.96,
		"hash": "43962d050e8099e75d900b50b356009308e0862958f2d972c8ab29c1060cc2e2"
	},
	{
		"id": "81bef5b3ece4",
		"ts": "2026-07-17T23:49:03.218Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106228453.24,
		"hash": "81bef5b3ece4f6f01b3801723e569db8983bb90199875661db4920dfa9e53beb"
	},
	{
		"id": "6366057e82d0",
		"ts": "2026-07-17T23:49:03.480Z",
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
		"liquidityUsd": 14444033.63,
		"hash": "6366057e82d0e7796e318fb8acb7ca36aca0c3c9fb155bc51574ae48ecda477b"
	},
	{
		"id": "37d4328085a3",
		"ts": "2026-07-17T23:49:03.925Z",
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
		"liquidityUsd": 797988.08,
		"hash": "37d4328085a3247ec7ca842302e38602d850711c3edd1f9090fc5513fc4aa6ad"
	},
	{
		"id": "5dec96389fb4",
		"ts": "2026-07-17T23:49:04.164Z",
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
		"liquidityUsd": 27341351.4,
		"hash": "5dec96389fb48948b59514e8cde25ad081f85477d3f812fdb491b294724c1ee2"
	},
	{
		"id": "58795b4c7c26",
		"ts": "2026-07-17T23:49:04.415Z",
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
		"liquidityUsd": 5103047.21,
		"hash": "58795b4c7c265adccd42d3dd2c08979475bf1c455b590595149b579ddcfe9b4e"
	},
	{
		"id": "e8cf63296229",
		"ts": "2026-07-17T23:49:04.656Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 975007.88,
		"hash": "e8cf6329622935690efbc3abded643c2daffb6e684ac0fc2e8a87f26f26692be"
	},
	{
		"id": "f97b2590d5a0",
		"ts": "2026-07-17T23:49:04.895Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27341352.27,
		"hash": "f97b2590d5a0893cfd2cd8d0d23ce20f364008a72f492947ad087d8e5ad0ccc9"
	},
	{
		"id": "eda14351afc6",
		"ts": "2026-07-17T23:49:05.135Z",
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
		"liquidityUsd": 2780687.14,
		"hash": "eda14351afc66ff427b7b7aa1ce86fa0f015af6f310edbec35ed32a6baeff67a"
	},
	{
		"id": "061706f2cb7b",
		"ts": "2026-07-17T23:49:05.377Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 340800.06,
		"hash": "061706f2cb7b68a64d16290ecd7ee1678c38efc1d8b13b57d894b4ce73cc2781"
	},
	{
		"id": "e83f324aff4d",
		"ts": "2026-07-17T23:49:05.651Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 501657.68,
		"hash": "e83f324aff4dea0d19eb13805f086213590cde73728597dabf3d76eb3e422f21"
	},
	{
		"id": "0de7c6532fc3",
		"ts": "2026-07-17T23:49:05.875Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 288800.27,
		"hash": "0de7c6532fc3ab39f9ed4fcd5c46c5ef7cf6704de5154c24a653a9d3243b52c8"
	},
	{
		"id": "45c1e903caa9",
		"ts": "2026-07-17T23:49:06.098Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 747378.76,
		"hash": "45c1e903caa968d94fea06e056f7c79e5f270d1a8183499616c2cfe5bb15d51c"
	},
	{
		"id": "b36725bb8cd2",
		"ts": "2026-07-17T23:49:06.317Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 328522.73,
		"hash": "b36725bb8cd2241d63390d210563e64437bebefa24c9dfa9483cecbf512e37b5"
	},
	{
		"id": "c404bac9114f",
		"ts": "2026-07-17T23:49:06.538Z",
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
		"liquidityUsd": 1320467.14,
		"hash": "c404bac9114fb8a14c94c232941d269773ef96ad523761a12cb0e7b4d208b04c"
	},
	{
		"id": "d6ef49d8d194",
		"ts": "2026-07-17T23:49:06.760Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 693879.17,
		"hash": "d6ef49d8d19433daf64249171297a8f94d6151dd66f445e3b60cd51506290de4"
	},
	{
		"id": "745114747f9a",
		"ts": "2026-07-17T23:49:07.000Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3577530.04,
		"hash": "745114747f9aa1515608b038acd3efa66b96efa3d3ec44bd7f10410b64e2d57a"
	},
	{
		"id": "023bb79b83d0",
		"ts": "2026-07-17T23:49:07.222Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 507754.14,
		"hash": "023bb79b83d0d547459978d00c96f041e7031c12a1ff65b5ae852f149a30347b"
	},
	{
		"id": "37bdf1f9216d",
		"ts": "2026-07-17T23:49:07.445Z",
		"symbol": "ARMSTRONG",
		"token": "0xE2d5Bd0D349057D77Fcd2fa5B690161336ebE999",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 73565.11,
		"hash": "37bdf1f9216d451e7755ca169d480a3ce43631b5ad4fac14f12df462d0ad2515"
	},
	{
		"id": "381dc965256e",
		"ts": "2026-07-17T23:49:07.669Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 96349.37,
		"hash": "381dc965256e1cd85d83673842b493a522f6e6eb0a1f50cc67d9e69ea332be16"
	},
	{
		"id": "f9f0fa526090",
		"ts": "2026-07-17T22:44:49.655Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106727773.46,
		"hash": "f9f0fa526090ba0d2a2e941ff380b2b0c2079c96811d610fd79a3dea5f64d175"
	},
	{
		"id": "4e6b9fc2c1ae",
		"ts": "2026-07-17T22:44:49.904Z",
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
		"liquidityUsd": 15176049.32,
		"hash": "4e6b9fc2c1aee85ffc94977632c92a486c42ba0b2024f8809decf94d674878c7"
	},
	{
		"id": "96e4787e7c61",
		"ts": "2026-07-17T22:44:50.354Z",
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
		"liquidityUsd": 796339.55,
		"hash": "96e4787e7c612ee42e0909515674b26237033dc7563719aaf643414499c291ad"
	},
	{
		"id": "09980cd96a02",
		"ts": "2026-07-17T22:44:50.809Z",
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
		"liquidityUsd": 27361826.46,
		"hash": "09980cd96a02a8c505ffdc298c31b50ea4d510b9af8b33cdc57ef955149d7668"
	},
	{
		"id": "6bd6a0d4f186",
		"ts": "2026-07-17T22:44:51.056Z",
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
		"liquidityUsd": 5097698.88,
		"hash": "6bd6a0d4f18638eb060aa6daa9bc9f1824b216c0579b078435e3a9bfc7074e3e"
	},
	{
		"id": "8b7b0dface7e",
		"ts": "2026-07-17T22:44:51.307Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 979870.89,
		"hash": "8b7b0dface7e220669dbd9ef9db357297183d6e5ddbe44425456eefcfa83ec7f"
	},
	{
		"id": "5066c6475f22",
		"ts": "2026-07-17T22:44:51.548Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27361826.46,
		"hash": "5066c6475f22320d150f92fc257fa365a5c2957331883e5724ff1c639c10b86f"
	},
	{
		"id": "1a639b25baf6",
		"ts": "2026-07-17T22:44:51.792Z",
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
		"liquidityUsd": 2768780.61,
		"hash": "1a639b25baf68e7c019b01d1065dd3d20f971d963b685c890daab490369deae6"
	},
	{
		"id": "67499b5f8054",
		"ts": "2026-07-17T22:44:52.044Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 387072.71,
		"hash": "67499b5f805411954dd36bf8c794d219c36398964b20d3b62e9e3e3e77477452"
	},
	{
		"id": "a47f68242026",
		"ts": "2026-07-17T22:44:52.288Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 507320.79,
		"hash": "a47f6824202661ba1a0d2f6f62fa4b2dac6d322468eb697fb38645311f31b0b5"
	},
	{
		"id": "97875215601e",
		"ts": "2026-07-17T22:44:52.523Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 307529.64,
		"hash": "97875215601ed6a167e84097cb18b157f016781b621ca599162bf29e299c4e6c"
	},
	{
		"id": "46d210001809",
		"ts": "2026-07-17T22:44:52.751Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 755487.32,
		"hash": "46d21000180959315825a1eeb1be962e55703f9c4c667d4aa148d8a0b90ea42e"
	},
	{
		"id": "178d50199c21",
		"ts": "2026-07-17T22:44:52.980Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 338302.42,
		"hash": "178d50199c21807cb6040ecbbf47d1c7ff39c45fbeaeb9c37b8d73968041a483"
	},
	{
		"id": "94b935f68862",
		"ts": "2026-07-17T22:44:53.214Z",
		"symbol": "COBIE",
		"token": "0x02C4347ECE55Fe108c9A29e96221615f13070791",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 26158.64,
		"hash": "94b935f6886241598293526b05e09cbeb39834fd875cafeb606e7b69bac5ddf2"
	},
	{
		"id": "50a2d255cf30",
		"ts": "2026-07-17T22:44:53.448Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692384.72,
		"hash": "50a2d255cf30bd5b173cec2dd47803f0db5b675cf7b09dc0310b4d3cce7d2998"
	},
	{
		"id": "92afb68d5234",
		"ts": "2026-07-17T22:44:53.684Z",
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
		"liquidityUsd": 1324250.2,
		"hash": "92afb68d52347c2c10409abe2cf18ba8b72d71e1f2c8b65aa5ea72c84ebd5e34"
	},
	{
		"id": "6ce71d93db71",
		"ts": "2026-07-17T22:44:53.915Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3590780.52,
		"hash": "6ce71d93db71f064f2cb0036858611bdff04b8b22b9a27302f32734151088619"
	},
	{
		"id": "fc658fcba3d0",
		"ts": "2026-07-17T22:44:54.143Z",
		"symbol": "ARMSTRONG",
		"token": "0xE2d5Bd0D349057D77Fcd2fa5B690161336ebE999",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 120803.15,
		"hash": "fc658fcba3d09a6cc4c0d7b6e79db22ada1c1ac05f2f3b72f876093fc7887990"
	},
	{
		"id": "b5de4e3c4a2c",
		"ts": "2026-07-17T21:49:16.912Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106729936.36,
		"hash": "b5de4e3c4a2c2550a02295badd9eaccc7a993c411bfe69b83d922df90f732f87"
	},
	{
		"id": "7c4bed507615",
		"ts": "2026-07-17T21:49:17.158Z",
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
		"liquidityUsd": 15244811.45,
		"hash": "7c4bed507615084c72f76503c17be9c459cc75b2e52c69a1147a5d2040da2f1b"
	},
	{
		"id": "b4af0eac84ab",
		"ts": "2026-07-17T21:49:17.402Z",
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
		"liquidityUsd": 797629.73,
		"hash": "b4af0eac84ab06294845703b6291deac98807f475ea945f2384c5274eff65a95"
	},
	{
		"id": "3bb542281d02",
		"ts": "2026-07-17T21:49:17.637Z",
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
		"liquidityUsd": 27537517.12,
		"hash": "3bb542281d0298fe05dd7ecc4d96138a9c817af6dddca97c8a7d96b49c562fb8"
	},
	{
		"id": "25367623c06a",
		"ts": "2026-07-17T21:49:18.105Z",
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
		"liquidityUsd": 5120072.38,
		"hash": "25367623c06a620db711f6e72f6581aebb304e2fda58dfe72ccebaee7a94865e"
	},
	{
		"id": "7969cb453c39",
		"ts": "2026-07-17T21:49:18.346Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 979865.21,
		"hash": "7969cb453c393069ca41ec21112716a9342c1bbcf5b9e782aee2e141011af3d2"
	},
	{
		"id": "f3fea8aaee42",
		"ts": "2026-07-17T21:49:18.585Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27537517.12,
		"hash": "f3fea8aaee4292f1b973337b8583f8a0e791deb341baa2aa185971000814861f"
	},
	{
		"id": "b1dd393377ae",
		"ts": "2026-07-17T21:49:18.842Z",
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
		"liquidityUsd": 2769095.22,
		"hash": "b1dd393377ae02365aac10baaaefcd18b2670b48776026dd6da95556f2bd49dc"
	},
	{
		"id": "cc002fd8016e",
		"ts": "2026-07-17T21:49:19.095Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 409834.93,
		"hash": "cc002fd8016e0b1864e3b59ba09c772449d75c8aa5671f1815b3bcf46975b98e"
	},
	{
		"id": "0100dd3d5099",
		"ts": "2026-07-17T21:49:19.332Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 497313.78,
		"hash": "0100dd3d50992b54626ab268d14add4170f89866de116397cdd0dc019fa245ce"
	},
	{
		"id": "5c6bee1dfda1",
		"ts": "2026-07-17T21:49:19.558Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 296443.08,
		"hash": "5c6bee1dfda1e78a982d0a05e27e391c199f6bd2a59684f3d9c1e3686b2287aa"
	},
	{
		"id": "8d5bf3fe1c35",
		"ts": "2026-07-17T21:49:19.781Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 756006.91,
		"hash": "8d5bf3fe1c35b812afcde94945d146ad4712189f6c682d8a496661bd77cdc528"
	},
	{
		"id": "bfd9f51748af",
		"ts": "2026-07-17T21:49:20.018Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 335126.18,
		"hash": "bfd9f51748afa2c3f97393f766feb4bcc81d4ceacca83ab98cf062721da73408"
	},
	{
		"id": "1c9d66f06d63",
		"ts": "2026-07-17T21:49:20.247Z",
		"symbol": "COBIE",
		"token": "0x02C4347ECE55Fe108c9A29e96221615f13070791",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 27442.57,
		"hash": "1c9d66f06d632cc6246fe06612136c7642e1524c0c739a85b481a96d0cb508c7"
	},
	{
		"id": "9a31099059bf",
		"ts": "2026-07-17T21:49:20.475Z",
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
		"liquidityUsd": 694728.32,
		"hash": "9a31099059bf42e58f24a110aa6928282ed408372d2d9c37360e91d4d0691194"
	},
	{
		"id": "1495d8f4833b",
		"ts": "2026-07-17T21:49:20.694Z",
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
		"liquidityUsd": 1320302.71,
		"hash": "1495d8f4833bf4c5d2b15b23dbd19a7a44fcb0e9426b84e5c304ba725dc7ef8e"
	},
	{
		"id": "64fed15fd635",
		"ts": "2026-07-17T21:49:20.930Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3584013.79,
		"hash": "64fed15fd635ba0ed456874335b7d2f24ae2e6bcb9eda3093148ebc9858c7587"
	},
	{
		"id": "ea1195323cfe",
		"ts": "2026-07-17T21:49:21.155Z",
		"symbol": "ARMSTRONG",
		"token": "0xE2d5Bd0D349057D77Fcd2fa5B690161336ebE999",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121047.68,
		"hash": "ea1195323cfe4774ecb0851f8b414acce58fbbe016e4d789eb6f10b6b083ad87"
	},
	{
		"id": "d9258acb9644",
		"ts": "2026-07-17T20:02:57.977Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106690995.22,
		"hash": "d9258acb964496af37dac0cb6f484336c111d75ca1242829ffe67e025d43bc62"
	},
	{
		"id": "b55954093568",
		"ts": "2026-07-17T20:02:58.449Z",
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
		"liquidityUsd": 16082433.45,
		"hash": "b55954093568832693b4fbb12037500d9d2c3aed81b0841b477ad7cd522992c5"
	},
	{
		"id": "18319962f2b6",
		"ts": "2026-07-17T20:02:58.888Z",
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
		"liquidityUsd": 792793.71,
		"hash": "18319962f2b62dc829ddea25bdbeb1f80a19edb8630053b931b7bbef06553d70"
	},
	{
		"id": "d6d4f580eeb2",
		"ts": "2026-07-17T20:02:59.141Z",
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
		"liquidityUsd": 28184303.14,
		"hash": "d6d4f580eeb2867c8cdd432b2dd13f0141a7070ea544feed7809f8594ba44d5a"
	},
	{
		"id": "2af65573934e",
		"ts": "2026-07-17T20:02:59.374Z",
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
		"liquidityUsd": 5144441.06,
		"hash": "2af65573934edc6e63f17ec4491fbd0191cfe519ec4f8cc0890accba8c0785cf"
	},
	{
		"id": "f5b207d468ac",
		"ts": "2026-07-17T20:02:59.623Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 976933.38,
		"hash": "f5b207d468ac34d000ea545f8de2c58cd623bc0a9208b3d6e59de75068fda141"
	},
	{
		"id": "02cfb42cbb02",
		"ts": "2026-07-17T20:02:59.856Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28184303.14,
		"hash": "02cfb42cbb02cb29ff351fd8793cdec019b2dec5b0efcaafe137e05d2ee86520"
	},
	{
		"id": "7aa3c2f31ea4",
		"ts": "2026-07-17T20:03:00.107Z",
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
		"liquidityUsd": 2771950.4,
		"hash": "7aa3c2f31ea43c4e3947e5c03a035567b3179bc4406e6276d9c841f3869a4801"
	},
	{
		"id": "dc632d365c1d",
		"ts": "2026-07-17T20:03:00.345Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 377189.74,
		"hash": "dc632d365c1d00876c4385928a80a737f9811565948eeec4694a5d4df489a245"
	},
	{
		"id": "da06f6f27ac6",
		"ts": "2026-07-17T20:03:00.596Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 352927.93,
		"hash": "da06f6f27ac6830c958e920b3600a23febf839ad2f46d4857f1f64dac8acdbf2"
	},
	{
		"id": "7ce96a43007e",
		"ts": "2026-07-17T20:03:00.832Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 492960.12,
		"hash": "7ce96a43007e1402a54ec395341ae162ee5635fa9cfa3625c7f2d1835ee4a62e"
	},
	{
		"id": "b70e9242b722",
		"ts": "2026-07-17T20:03:01.282Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 735387.74,
		"hash": "b70e9242b7220a2bebbed16524ab5e736d9dc108dd7ab299cb3d81fdeb9b7970"
	},
	{
		"id": "55d25726c8eb",
		"ts": "2026-07-17T20:03:01.576Z",
		"symbol": "COBIE",
		"token": "0x02C4347ECE55Fe108c9A29e96221615f13070791",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 31335.44,
		"hash": "55d25726c8eb1ffcbc7fc14118ce8232719451d3c71447f83a1dd7426f93c2c8"
	},
	{
		"id": "2c178a529411",
		"ts": "2026-07-17T20:03:01.829Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 339806.51,
		"hash": "2c178a529411fe27f169a237dbf30c9a46763a36b60ee9c66d213d85361bbee9"
	},
	{
		"id": "c7b3dffcfdaf",
		"ts": "2026-07-17T20:03:02.160Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 522383.28,
		"hash": "c7b3dffcfdafea2366893948ce9acf547629f7a82e3ec233efc19e7b801c5105"
	},
	{
		"id": "9de4730690ba",
		"ts": "2026-07-17T20:03:02.416Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 761618.33,
		"hash": "9de4730690baa058c7e798b7505a79938d45606f5031a1d2aeeaf4ee93deee05"
	},
	{
		"id": "3dc20d1ee5a5",
		"ts": "2026-07-17T20:03:02.778Z",
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
		"liquidityUsd": 1333785.14,
		"hash": "3dc20d1ee5a50b283b818927bf1b48c989887c6e4a1d2477356eaa4548c6aad7"
	},
	{
		"id": "531c2977e2e0",
		"ts": "2026-07-17T20:03:03.095Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1289131.35,
		"hash": "531c2977e2e0f7393cbe32494a46adaf6ebeaf39ff16d80f7ee76ff66c7715e8"
	},
	{
		"id": "a9781f17118c",
		"ts": "2026-07-17T20:03:03.333Z",
		"symbol": "BaseShake",
		"token": "0x885a590198e5F0947f4c92DB815cF2a2147980B8",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 413942.47,
		"hash": "a9781f17118c5da927c4eaed97c6b25eea2589f06c0588be225af48ad7e39b21"
	},
	{
		"id": "b6808f246ed8",
		"ts": "2026-07-17T18:02:35.466Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106915183.12,
		"hash": "b6808f246ed86ce0459810092e743ad47c85ffaec3797452a250ab42b277aaf1"
	},
	{
		"id": "e487aa782eb9",
		"ts": "2026-07-17T18:02:36.133Z",
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
		"liquidityUsd": 14923635.51,
		"hash": "e487aa782eb9cac0a268015fffbdc99e4d4a3cf9632df81f2a8cc5de9dabc799"
	},
	{
		"id": "14b5149c23df",
		"ts": "2026-07-17T18:02:36.582Z",
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
		"liquidityUsd": 1112831.85,
		"hash": "14b5149c23df0f96b615982a78f26b6721dd37fa93b628cf6176a92e4af56535"
	},
	{
		"id": "eaa030698b65",
		"ts": "2026-07-17T18:02:36.876Z",
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
		"liquidityUsd": 28497818.74,
		"hash": "eaa030698b657cc6917c4400f9e487875390bacbe9931b663a35fa514f1866a7"
	},
	{
		"id": "343724d3e885",
		"ts": "2026-07-17T18:02:37.315Z",
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
		"liquidityUsd": 5160524.4,
		"hash": "343724d3e885731469370011275cad38313f3e5dc6b666f842752ed08ef039e0"
	},
	{
		"id": "af24d6305f13",
		"ts": "2026-07-17T18:02:37.565Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 976933.38,
		"hash": "af24d6305f134380d0ab651f026e9b4f6c9e55fbca60fa299db377107fb768e2"
	},
	{
		"id": "50921298e3a1",
		"ts": "2026-07-17T18:02:37.806Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28367113.66,
		"hash": "50921298e3a1faa328a411275927abdc25c248fb8f42ab885da857e674fe95dd"
	},
	{
		"id": "c5be05f1dee2",
		"ts": "2026-07-17T18:02:38.077Z",
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
		"liquidityUsd": 2699792.21,
		"hash": "c5be05f1dee2cdf69aefe802b6d134be725a17f1e7631ef4f0fe0d57e38e0ff9"
	},
	{
		"id": "7c7a61c8c002",
		"ts": "2026-07-17T18:02:38.515Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 354640.22,
		"hash": "7c7a61c8c00219f183ac52dd78b63f0993729e99a03cd6d313cb62beee55bef0"
	},
	{
		"id": "21186bd84b4e",
		"ts": "2026-07-17T18:02:38.768Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 319316.63,
		"hash": "21186bd84b4eb59839b589775d30e6814aac6e7e5945f4c9b58c4fa6989fdaf7"
	},
	{
		"id": "1fe35ee2c8ba",
		"ts": "2026-07-17T18:02:38.989Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 523731.9,
		"hash": "1fe35ee2c8ba2fea104e84b5c68da84bffce7b6409c890b26bb878040a800ca3"
	},
	{
		"id": "a28487cb8150",
		"ts": "2026-07-17T18:02:39.217Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 731662.22,
		"hash": "a28487cb8150d98c4f30c2da3d9fc2ec06b732e0dc237a6c3a0a321ff374ed4f"
	},
	{
		"id": "ec45aea84a87",
		"ts": "2026-07-17T18:02:39.433Z",
		"symbol": "COBIE",
		"token": "0x02C4347ECE55Fe108c9A29e96221615f13070791",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 26062.81,
		"hash": "ec45aea84a873af4dc22edc9ae0fd328c6840e0ca8d48de2cc657c5124c84536"
	},
	{
		"id": "f523dbbdd152",
		"ts": "2026-07-17T18:02:39.651Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 350942.94,
		"hash": "f523dbbdd152a34a8a0cc5ece8305d71d5c37e487e036b0416c496b852b6af2d"
	},
	{
		"id": "adc6ad85f2f0",
		"ts": "2026-07-17T18:02:39.872Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3734743.87,
		"hash": "adc6ad85f2f0ee3bdbace85d836fb8d9178ee14258a40fd75d7aa144ced5221b"
	},
	{
		"id": "b1fbae9efd71",
		"ts": "2026-07-17T18:02:40.100Z",
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
		"liquidityUsd": 1336220.8,
		"hash": "b1fbae9efd715c42b1be7ec52acc9fc774fa22c7123f3aa3b8733e87a41753b7"
	},
	{
		"id": "564dbe762826",
		"ts": "2026-07-17T18:02:40.319Z",
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
		"liquidityUsd": 690381.79,
		"hash": "564dbe762826f8485fd2fb847cfc45db4f61110af01c78ab178311ca5041ec63"
	},
	{
		"id": "98db1efacfd8",
		"ts": "2026-07-17T18:02:40.540Z",
		"symbol": "ARMSTRONG",
		"token": "0xE2d5Bd0D349057D77Fcd2fa5B690161336ebE999",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 99043.86,
		"hash": "98db1efacfd89c782fb11699cc81aa287215a4d1b931d788c3518e786e714747"
	},
	{
		"id": "dc9d28378c2f",
		"ts": "2026-07-17T16:12:01.008Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106153136.54,
		"hash": "dc9d28378c2f11368d71f36a7f830f8da50f870e1c6cbe7a694089c245e6183c"
	},
	{
		"id": "4b28bf348c78",
		"ts": "2026-07-17T16:12:01.354Z",
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
		"liquidityUsd": 15643607.77,
		"hash": "4b28bf348c786e77b9c866316fcd1445f46c75c9d7fee8ed3cf41fcd0925de2f"
	},
	{
		"id": "d6a933b7354d",
		"ts": "2026-07-17T16:12:01.712Z",
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
		"liquidityUsd": 1107808.35,
		"hash": "d6a933b7354d00e16728113d18e5b2182ec2a77827a526533d5a05e1a03045d4"
	},
	{
		"id": "eeb6dc31f1b0",
		"ts": "2026-07-17T16:12:01.902Z",
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
		"liquidityUsd": 28590690.79,
		"hash": "eeb6dc31f1b0140d2f69b12c1b0b17b2ca643a0968ff93c206d1ee7e30cca99a"
	},
	{
		"id": "55ad8b1c4968",
		"ts": "2026-07-17T16:12:02.270Z",
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
		"liquidityUsd": 5119546.89,
		"hash": "55ad8b1c4968f7b826560ce74724d85414ce4e8c8ee636de4f4dbfc78f8ce82e"
	},
	{
		"id": "42604777d068",
		"ts": "2026-07-17T16:12:02.497Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 976933.49,
		"hash": "42604777d068521b5bce3540767f4f8787a4b7a70c36bfb60439b1bd5b300b26"
	},
	{
		"id": "464f73189cb2",
		"ts": "2026-07-17T16:12:02.713Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28590690.79,
		"hash": "464f73189cb210d827c5ddaccf35c51b287e34bfe51c8824baf4d44992b776cb"
	},
	{
		"id": "fbb987ad968e",
		"ts": "2026-07-17T16:12:02.922Z",
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
		"liquidityUsd": 2459367.09,
		"hash": "fbb987ad968e5cfe6ab51f79e9eaa4058e2a6126e8105ce836690b58ad0ccb61"
	},
	{
		"id": "fe00236aeeac",
		"ts": "2026-07-17T16:12:03.126Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 392211.78,
		"hash": "fe00236aeeac4d6d0fc3c817311e95aece8b886f827cf27da893258a0b97373f"
	},
	{
		"id": "6671211f71cd",
		"ts": "2026-07-17T16:12:03.320Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 840793.72,
		"hash": "6671211f71cd7240a7fea710eb21ca321ae59277b3c2e2248fa4d7e99ea87624"
	},
	{
		"id": "429d54164c9e",
		"ts": "2026-07-17T16:12:03.507Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 521525.9,
		"hash": "429d54164c9e94f1e274d72f6055d277ad71732173b0fc92837fea762ba8a0fe"
	},
	{
		"id": "a375edf468ee",
		"ts": "2026-07-17T16:12:03.688Z",
		"symbol": "COBIE",
		"token": "0x02C4347ECE55Fe108c9A29e96221615f13070791",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 26660.31,
		"hash": "a375edf468ee07203e80dac86099a548fd4b5bb1586dcf9f77c5e4c3951188cb"
	},
	{
		"id": "96bcc82948e6",
		"ts": "2026-07-17T16:12:03.889Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348010.49,
		"hash": "96bcc82948e6db3bf6ec5c30a67ecca55cb117def024f23a3de77eaafc0535ac"
	},
	{
		"id": "da89b3724fae",
		"ts": "2026-07-17T16:12:04.082Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 293842.06,
		"hash": "da89b3724fae44ca60722c609eaf7964ef037c7434d5a27e27a79f0678623678"
	},
	{
		"id": "eb22a58ebc2b",
		"ts": "2026-07-17T16:12:04.268Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3766083.14,
		"hash": "eb22a58ebc2b296d621b3c4aa619b1e959dee3affeed73aa47b66a771587b480"
	},
	{
		"id": "014bb380e018",
		"ts": "2026-07-17T16:12:04.449Z",
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
		"liquidityUsd": 1293097.65,
		"hash": "014bb380e018fdbb7db01a20bf16c1a3669ccc63471f5152a451641f6921ccc6"
	},
	{
		"id": "61d5c9aede8b",
		"ts": "2026-07-17T16:12:04.644Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 60179.48,
		"hash": "61d5c9aede8b1337ab8af010c0bf8af8cc69b4fd72e4b122c4cf14d66f75ad6b"
	},
	{
		"id": "f7982c0d7b03",
		"ts": "2026-07-17T14:40:24.538Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105774634.62,
		"hash": "f7982c0d7b0340f2bc0fe82555fd3b58fb8ac5cf9c7b991a960cda175403668a"
	},
	{
		"id": "44e6953cb486",
		"ts": "2026-07-17T14:40:24.791Z",
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
		"liquidityUsd": 15037847.95,
		"hash": "44e6953cb4863836751199086a2f572e3b4f296b8cdf5eff78526cd889c8954a"
	},
	{
		"id": "deb74eacfa73",
		"ts": "2026-07-17T14:40:25.079Z",
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
		"liquidityUsd": 1105623.29,
		"hash": "deb74eacfa7374f09dbb6fc40f13d9ead74c94a7785d84efa5ff77b570101b0e"
	},
	{
		"id": "6432a1d977da",
		"ts": "2026-07-17T14:40:25.326Z",
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
		"liquidityUsd": 28112886.93,
		"hash": "6432a1d977daf826d6c8cbec6a43ae7d966b33620d2d295313ff4a5a5c741fbb"
	},
	{
		"id": "19becce40cc0",
		"ts": "2026-07-17T14:40:25.571Z",
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
		"liquidityUsd": 4681720.46,
		"hash": "19becce40cc0349d4f6d159f9bd446b8897e790391bfb1c229d9c21c68c9f5b8"
	},
	{
		"id": "d8d9d02a38e7",
		"ts": "2026-07-17T14:40:25.822Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 976507.9,
		"hash": "d8d9d02a38e7af15698598381386ba4117b559aa8a7e4946706ec88c6ece18c4"
	},
	{
		"id": "23e5692f3721",
		"ts": "2026-07-17T14:40:26.073Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28112886.93,
		"hash": "23e5692f3721444b2a3be0bc2ff8ae02bef4453716ec0d1a2140dad2b24639a1"
	},
	{
		"id": "5d41e987a82c",
		"ts": "2026-07-17T14:40:26.334Z",
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
		"liquidityUsd": 2448145.84,
		"hash": "5d41e987a82c039210317285620125cfe45198e3a5ee4f04df064f8f83d44686"
	},
	{
		"id": "e6c31fdc6d93",
		"ts": "2026-07-17T14:40:26.593Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 438831.87,
		"hash": "e6c31fdc6d9320879875fe4da290d159a26454b5442cb8ca2e6f85b7c3cfbe9a"
	},
	{
		"id": "095e6328f5ee",
		"ts": "2026-07-17T14:40:26.842Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 836719.9,
		"hash": "095e6328f5ee3b87215576fd25fcdc0e67987eeaaa60fd08546947f6414784ed"
	},
	{
		"id": "9eafcf227985",
		"ts": "2026-07-17T14:40:27.070Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 515375.86,
		"hash": "9eafcf2279859c13e46852ce5506db129f5e05ad5cb9fdaa47f5efc90f53537a"
	},
	{
		"id": "2eccfc9680f1",
		"ts": "2026-07-17T14:40:27.301Z",
		"symbol": "COBIE",
		"token": "0x02C4347ECE55Fe108c9A29e96221615f13070791",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 28293.14,
		"hash": "2eccfc9680f11121e575870978c6e20ce81252efd56c526902b7fbdd786f9ce4"
	},
	{
		"id": "3c987ad965a5",
		"ts": "2026-07-17T14:40:27.529Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 347001.57,
		"hash": "3c987ad965a574994f14e6c4cbc19026842cfc0dd5b6f0d99fd60b2751b78c92"
	},
	{
		"id": "300ba6cbaadd",
		"ts": "2026-07-17T14:40:27.761Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 372676.17,
		"hash": "300ba6cbaadd02620e216bceb97b24560edc1958923c262748e61a762586a484"
	},
	{
		"id": "fe3cc35e617d",
		"ts": "2026-07-17T14:40:27.998Z",
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
		"liquidityUsd": 1271343.81,
		"hash": "fe3cc35e617dc4260dc13a5569050eca6a3a5ae90037ccd9de01dd4b6438b2fe"
	},
	{
		"id": "e0fdd845b858",
		"ts": "2026-07-17T14:40:28.225Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 61339.08,
		"hash": "e0fdd845b8580961510fb0149cf46646e5482c3cf8e8d1e6e0de505d77a73f32"
	},
	{
		"id": "9a34ece7a0d4",
		"ts": "2026-07-17T14:40:28.461Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 96972.27,
		"hash": "9a34ece7a0d46f6d930e350def0c672ccbdb88bf88e30f4c983bcb46636fce01"
	},
	{
		"id": "2ddf37ed2f53",
		"ts": "2026-07-17T12:06:13.683Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105370342.99,
		"hash": "2ddf37ed2f53d6ed02cf2a84ce1bc19f6a977987195f88ba9e97d3f8cdf2eef0"
	},
	{
		"id": "95b474d2dbe1",
		"ts": "2026-07-17T12:06:14.041Z",
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
		"liquidityUsd": 13026386.85,
		"hash": "95b474d2dbe13f205106133f9aea0139e9ded5698468acd7d493487211be7cc2"
	},
	{
		"id": "e00f758b248d",
		"ts": "2026-07-17T12:06:14.268Z",
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
		"liquidityUsd": 1117765.79,
		"hash": "e00f758b248d031594d1e0e736477682a93bf10cdef39642dc4357126a574638"
	},
	{
		"id": "c3f5e2d5a0d4",
		"ts": "2026-07-17T12:06:14.459Z",
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
		"liquidityUsd": 29116882.09,
		"hash": "c3f5e2d5a0d460a01dcbfc3866592376f41ef28a0ed401320a1b70981d0babec"
	},
	{
		"id": "742a66ed420f",
		"ts": "2026-07-17T12:06:14.677Z",
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
		"liquidityUsd": 4678110.39,
		"hash": "742a66ed420f5179ec08a29c57fe7ca2f6edb8ca5aef029cd5d2610fd087e9a1"
	},
	{
		"id": "e9d127cceb34",
		"ts": "2026-07-17T12:06:14.886Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 973733.49,
		"hash": "e9d127cceb343da95bb76321578f59d76ea42ba5f4d704c0b355cdd03d6cb68e"
	},
	{
		"id": "1035f0adc996",
		"ts": "2026-07-17T12:06:15.093Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29116882.09,
		"hash": "1035f0adc996229496e82da1e85dd3f8b2cf1c443de7b0a2434966075cf70551"
	},
	{
		"id": "203e4c4408a3",
		"ts": "2026-07-17T12:06:15.317Z",
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
		"liquidityUsd": 2465085.86,
		"hash": "203e4c4408a3b256fc78765d8aae3d0eb044fad67fe777d5f994dbffffdca622"
	},
	{
		"id": "c95b1d335648",
		"ts": "2026-07-17T12:06:15.510Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 460316.33,
		"hash": "c95b1d3356488a1252f2958e2d16dba1fc66c1582d6252018dc113f5db5be21a"
	},
	{
		"id": "692d5987a765",
		"ts": "2026-07-17T12:06:15.702Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 958887.84,
		"hash": "692d5987a7658d6f019939ff003333ef1b0b1adb056c467d1547ebe925988849"
	},
	{
		"id": "b969ad6a7fd5",
		"ts": "2026-07-17T12:06:15.883Z",
		"symbol": "COBIE",
		"token": "0x02C4347ECE55Fe108c9A29e96221615f13070791",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 29313.37,
		"hash": "b969ad6a7fd5522baba36b1a9fcfbdf5449008398cf8d6472e6d9d51340076d5"
	},
	{
		"id": "4559cc1f847e",
		"ts": "2026-07-17T12:06:16.088Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 342670.33,
		"hash": "4559cc1f847e088b50ab1ebb683e54e8f0314f64189639702e79042e8a5a0843"
	},
	{
		"id": "38537bf27093",
		"ts": "2026-07-17T12:06:16.278Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 109843.02,
		"hash": "38537bf27093257b208ae99a398016f0dd98cf43b6d1008d5859724f72699fa7"
	},
	{
		"id": "c36366ea2aba",
		"ts": "2026-07-17T12:06:16.574Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 66972.39,
		"hash": "c36366ea2aba3dbf6cfa4804b3196ce07b9c92b3a99d36238eab6a0c8f7af79e"
	},
	{
		"id": "51c3e359e434",
		"ts": "2026-07-17T12:06:16.878Z",
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
		"liquidityUsd": 1284133.54,
		"hash": "51c3e359e4346d303b02b7b04e01b5f80e14ba168fb169b2c59e46bd583eadde"
	},
	{
		"id": "770a320899fb",
		"ts": "2026-07-17T12:06:17.354Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 718942.58,
		"hash": "770a320899fbb6d779335dcf5dda206b0860d2583ce9c1fbc6d5772e5a9a421e"
	},
	{
		"id": "3db31c97b6ba",
		"ts": "2026-07-17T12:06:17.544Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 57239.2,
		"hash": "3db31c97b6bab23e26ab58b2305f0c32c088940b7ce57727b532ee9f78d6a696"
	},
	{
		"id": "e1e10aaef850",
		"ts": "2026-07-17T10:43:42.900Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105255057.54,
		"hash": "e1e10aaef850c5d9bf65dbce605d60e85313918b9ad5bdb9dd6cf07d3097945c"
	},
	{
		"id": "cd9f809b17e7",
		"ts": "2026-07-17T10:43:43.387Z",
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
		"liquidityUsd": 15019553.95,
		"hash": "cd9f809b17e7626f21eb41b1b20b2d3ae4678e22b973eab31e2d06311542febb"
	},
	{
		"id": "bb52283a4e9e",
		"ts": "2026-07-17T10:43:43.702Z",
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
		"liquidityUsd": 1114987.74,
		"hash": "bb52283a4e9eac5e693f84390b87da2d426d91ee5fb7bbe9bbe832ed56d3f47e"
	},
	{
		"id": "978fda3a6ec2",
		"ts": "2026-07-17T10:43:43.951Z",
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
		"liquidityUsd": 29221856.64,
		"hash": "978fda3a6ec2f60d566df8948d6112419e0e089368ac4ca8614b3f846722d7ca"
	},
	{
		"id": "b38dcb068dff",
		"ts": "2026-07-17T10:43:44.229Z",
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
		"liquidityUsd": 4685299.65,
		"hash": "b38dcb068dff623116eab7ef6e49c19ec98dc0a86c50adc9aec3c340997197f3"
	},
	{
		"id": "f5fc0d076138",
		"ts": "2026-07-17T10:43:44.476Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 973739.08,
		"hash": "f5fc0d076138685460bcd58a8fb3cfbbd7053947e9e716f27ec5ea1ed5be0135"
	},
	{
		"id": "31eae958978e",
		"ts": "2026-07-17T10:43:44.724Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29221856.64,
		"hash": "31eae958978ee89dd97753702766ba7a96154cd554e1b9d4af65efceaf51b0ce"
	},
	{
		"id": "fa362c930415",
		"ts": "2026-07-17T10:43:44.976Z",
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
		"liquidityUsd": 2466728.98,
		"hash": "fa362c93041575b700ac38e901864f3cd45688dc07529af5ebe0feb01b3da1a2"
	},
	{
		"id": "b537548b721d",
		"ts": "2026-07-17T10:43:45.241Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 456413.9,
		"hash": "b537548b721d0dc1abe9549b9106caf3f75847c2f0048d2454936170c767b3e4"
	},
	{
		"id": "3bbc71a3ca39",
		"ts": "2026-07-17T10:43:45.539Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 962651.3,
		"hash": "3bbc71a3ca3923f068a2eb715f1c7dac7c55c43e4348af7097a5b7e8e797f768"
	},
	{
		"id": "e89dcc69cc6e",
		"ts": "2026-07-17T10:43:45.780Z",
		"symbol": "COBIE",
		"token": "0x02C4347ECE55Fe108c9A29e96221615f13070791",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 30416.3,
		"hash": "e89dcc69cc6e3473ccba5449ef1bf8543f8ea35e99cfdd6d596908654d92e668"
	},
	{
		"id": "a086888d9736",
		"ts": "2026-07-17T10:43:46.016Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348931.69,
		"hash": "a086888d9736036b5a9a0220fc1f060c913fc1f738a67b54e907c668e427c6b2"
	},
	{
		"id": "bad6fa4cc622",
		"ts": "2026-07-17T10:43:46.250Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 113496.02,
		"hash": "bad6fa4cc62204dce9869578c1f62830e57546fbad00299e304d82066e27410c"
	},
	{
		"id": "b8367e96637a",
		"ts": "2026-07-17T10:43:46.487Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 72519.07,
		"hash": "b8367e96637ab8e68a77ad38e23ebd7beaba0555b2685a1dc6847cb2cccfea21"
	},
	{
		"id": "59da25ba7dc5",
		"ts": "2026-07-17T10:43:46.723Z",
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
		"liquidityUsd": 1341575.95,
		"hash": "59da25ba7dc571109679f63118b9096bf2d1e3f853beee23261bbb516ef7d8d4"
	},
	{
		"id": "c26a57e7c5d6",
		"ts": "2026-07-17T10:43:46.955Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 718693.02,
		"hash": "c26a57e7c5d6f62fc1810e1cb78a891445c8c52a3ca963eca87995ffa8a40282"
	},
	{
		"id": "9960ad016213",
		"ts": "2026-07-17T10:43:47.199Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 563918.04,
		"hash": "9960ad016213babe229fe9000a81fe61a8e8246c02ccdfe478d905fe749efa56"
	},
	{
		"id": "26227a0358f2",
		"ts": "2026-07-17T08:03:38.386Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105014408.58,
		"hash": "26227a0358f2815868c1d824f4d4d7bb8ad7638b9910c93f50ce2a2a4710d9ce"
	},
	{
		"id": "1a9450157ce1",
		"ts": "2026-07-17T08:03:38.840Z",
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
		"liquidityUsd": 15600672.9,
		"hash": "1a9450157ce1ffcfe64ee6be9df202d92ed1f76e51d0784146f42aef6fb92478"
	},
	{
		"id": "2df4ed0975b7",
		"ts": "2026-07-17T08:03:39.074Z",
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
		"liquidityUsd": 1109181.44,
		"hash": "2df4ed0975b7167ebadd0780baebb37d6c971de93fa388ca6f1477bd7e33903b"
	},
	{
		"id": "7a3879175097",
		"ts": "2026-07-17T08:03:39.523Z",
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
		"liquidityUsd": 29145083,
		"hash": "7a3879175097aedfd472f0b9204a3c286b5d0c509ef5d6d519ff48946dc606d5"
	}
]
