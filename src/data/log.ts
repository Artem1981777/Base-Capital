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
	"updatedAt": "2026-07-21T02:35:28.210Z",
	"tokensScored": 4680,
	"verdictsIssued": 4680,
	"safe": 4117,
	"risky": 368,
	"likelyRug": 195,
	"ticks": 286
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "bc14e2b28021",
		"ts": "2026-07-21T02:35:24.487Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109464467.63,
		"hash": "bc14e2b28021063e54a7ea9b6c2765f401b5e64adbb49791b8ac054e10b054c9"
	},
	{
		"id": "f6a95f69ddd4",
		"ts": "2026-07-21T02:35:24.731Z",
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
		"liquidityUsd": 14768921.75,
		"hash": "f6a95f69ddd41e5a0cfd3718a9469a68591ea3abce83f0fc0b72d37e370c73fb"
	},
	{
		"id": "ef587fa6a9a4",
		"ts": "2026-07-21T02:35:25.012Z",
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
		"liquidityUsd": 853816.09,
		"hash": "ef587fa6a9a43ee0cbab6da5e1b1dc56a2cd0116f3b8d8e1dd166cca768dc511"
	},
	{
		"id": "fb8ea9879580",
		"ts": "2026-07-21T02:35:25.252Z",
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
		"liquidityUsd": 25275600.29,
		"hash": "fb8ea9879580caf783c22c3bbb1dcd1a6183cc1652abfd9f5ed63cf02aeb6b86"
	},
	{
		"id": "e6a8431ce88d",
		"ts": "2026-07-21T02:35:25.492Z",
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
		"liquidityUsd": 5238127.04,
		"hash": "e6a8431ce88d73fadc64e903e312db3e45c697c2e341c2db4ab76aabd7a10d4c"
	},
	{
		"id": "5a345cfb0d7e",
		"ts": "2026-07-21T02:35:25.729Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1013977.34,
		"hash": "5a345cfb0d7edc49e0f32538bf237ec47454ab25b0ecfc929974cfc33441ba52"
	},
	{
		"id": "71152b639fbd",
		"ts": "2026-07-21T02:35:25.960Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25275600.29,
		"hash": "71152b639fbdda3c401cf1ab995440aad69c77dba50d6ef60c9bde00efbc656f"
	},
	{
		"id": "0f4f8bd8bf06",
		"ts": "2026-07-21T02:35:26.196Z",
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
		"liquidityUsd": 2552117.3,
		"hash": "0f4f8bd8bf068f9d1d06708a611a1042ed980820fb8c4c20f8786215ae3814d7"
	},
	{
		"id": "83ba81df7845",
		"ts": "2026-07-21T02:35:26.436Z",
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
		"liquidityUsd": 101506.93,
		"hash": "83ba81df7845aed6c5a8dbafba6a10f67fec65852bf9c36acda5307e2db4d176"
	},
	{
		"id": "f5ea7f7bec88",
		"ts": "2026-07-21T02:35:26.670Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3577767.05,
		"hash": "f5ea7f7bec8812524f1bc5530975da72d38d5f463264236ae4496a56d8297345"
	},
	{
		"id": "b4ca3a1d776e",
		"ts": "2026-07-21T02:35:26.891Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9564040.54,
		"hash": "b4ca3a1d776e742ad9012c7ac037f3ad57fe3107ec736eb9e86316046180088f"
	},
	{
		"id": "46224e2afcaa",
		"ts": "2026-07-21T02:35:27.110Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1253324.13,
		"hash": "46224e2afcaa90d4092c4bb3ec94f230149a1864eeec55343cd218a33f4ddaed"
	},
	{
		"id": "7fc365e0ea82",
		"ts": "2026-07-21T02:35:27.330Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2129868.39,
		"hash": "7fc365e0ea82233933897673b04f30d8d250531416059c4a7b67ec8351e4a6f5"
	},
	{
		"id": "4e49102be21c",
		"ts": "2026-07-21T02:35:27.551Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 51117.81,
		"hash": "4e49102be21c7434c56492fbb51c30e661e0849462de0ecd58b670d79c31ec26"
	},
	{
		"id": "1e7893ecb78c",
		"ts": "2026-07-21T02:35:27.769Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 294047.39,
		"hash": "1e7893ecb78c4090a74b3c163213fecd9d8231a6b0be784d506985623b7e5c9d"
	},
	{
		"id": "2517b3e62520",
		"ts": "2026-07-21T02:35:27.987Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 686347.49,
		"hash": "2517b3e625204ed486cbdad8d0eb94d0c5573d19876999daab5e9be79b478b79"
	},
	{
		"id": "ad7c7b9166e1",
		"ts": "2026-07-21T02:35:28.209Z",
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
		"liquidityUsd": 1291375.45,
		"hash": "ad7c7b9166e160bd352c78883e163f0729cd03faea8fa9ff2c59e76f14d48758"
	},
	{
		"id": "9c5431329c47",
		"ts": "2026-07-20T23:56:24.571Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109305872.25,
		"hash": "9c5431329c47eb12e76aba5860bc2bc16317a57736c4fa1d07f802e233d22279"
	},
	{
		"id": "d6d646aefa57",
		"ts": "2026-07-20T23:56:24.790Z",
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
		"liquidityUsd": 15218687.52,
		"hash": "d6d646aefa576aed4554fc6d8c84c279b72cbd6e73d1d49cef83be13f574f462"
	},
	{
		"id": "de3135937f13",
		"ts": "2026-07-20T23:56:25.008Z",
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
		"liquidityUsd": 854610.67,
		"hash": "de3135937f13076d47ca2b40dec4ba7a6dc96055730403ad67622067d0534278"
	},
	{
		"id": "0c4ac22301c5",
		"ts": "2026-07-20T23:56:25.221Z",
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
		"liquidityUsd": 25124057.16,
		"hash": "0c4ac22301c5fe4f99115d476c6e16ca6494ea62e494e00774fd43907782c363"
	},
	{
		"id": "07da0f4dba24",
		"ts": "2026-07-20T23:56:25.440Z",
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
		"liquidityUsd": 5206949.98,
		"hash": "07da0f4dba24ba459cf8d66e7ef86de47c3a1f82122c60bf8fc7a3542753ddf6"
	},
	{
		"id": "01bd27dc0c94",
		"ts": "2026-07-20T23:56:25.652Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1011644.96,
		"hash": "01bd27dc0c94b3d919309713a52c2156c06c3e85bd41d7f03621573cd3206d95"
	},
	{
		"id": "19631bff56ae",
		"ts": "2026-07-20T23:56:25.888Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25124057.16,
		"hash": "19631bff56ae9ddb08ae9d5d7be0e75da7e23f6863e17c25c44bf7473380eb60"
	},
	{
		"id": "7a6aa3fc5c25",
		"ts": "2026-07-20T23:56:26.105Z",
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
		"liquidityUsd": 2539770.76,
		"hash": "7a6aa3fc5c256d2b79f68ed9f452fd1debd5248976a254827f83e632aed77acf"
	},
	{
		"id": "5e38974e6304",
		"ts": "2026-07-20T23:56:26.315Z",
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
		"liquidityUsd": 98852.35,
		"hash": "5e38974e630454c30415063074f5f1ed7f0d036c24e143b20cead82c36e72381"
	},
	{
		"id": "aca91f7fa62c",
		"ts": "2026-07-20T23:56:26.524Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2115169.94,
		"hash": "aca91f7fa62cc9441577c6d9eb757dba2342a71123fa74f8bf6dc61facbd5d4b"
	},
	{
		"id": "9f57c5c4b716",
		"ts": "2026-07-20T23:56:26.720Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9450744.18,
		"hash": "9f57c5c4b7161066cd74e580d51c31d197e8d29500bb8765f301fe8bfbf27402"
	},
	{
		"id": "860db56ca7d7",
		"ts": "2026-07-20T23:56:26.916Z",
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
		"liquidityUsd": 1274825.64,
		"hash": "860db56ca7d71f35b7af3f1441f4895d4678474063f3b6b4059fbe7424496d50"
	},
	{
		"id": "d04466103a3c",
		"ts": "2026-07-20T23:56:27.117Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1256384.21,
		"hash": "d04466103a3c17883ac0f26752058de6379b7aff26e23f69aef91a4aa9d5a859"
	},
	{
		"id": "83db307a707a",
		"ts": "2026-07-20T23:56:27.315Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 686079.23,
		"hash": "83db307a707a0af1acacda06a178f30bd941b17e9d9784dd568735eda51f0377"
	},
	{
		"id": "ea5b37b42339",
		"ts": "2026-07-20T23:56:27.518Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 291527.15,
		"hash": "ea5b37b42339eb342ae234a1f9a9592dfdd8fb21f6a980e2f0645cb2036eb80e"
	},
	{
		"id": "f309dda050f6",
		"ts": "2026-07-20T23:56:27.724Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 49253.83,
		"hash": "f309dda050f61f75e1ed097dce2e8114adfedb85adfd1b859281588306be9e5b"
	},
	{
		"id": "3b6f1a00263d",
		"ts": "2026-07-20T23:56:27.918Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3694670.58,
		"hash": "3b6f1a00263d15a75dd30fc2b62e13382f6823d0ee9d13649fef63c6e4f48320"
	},
	{
		"id": "0c80ecca488d",
		"ts": "2026-07-20T22:56:45.183Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109315344.06,
		"hash": "0c80ecca488d64db4dde561c49be0974948bb0991fb728c4c53b59f359494c7d"
	},
	{
		"id": "212153de0d0c",
		"ts": "2026-07-20T22:56:45.569Z",
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
		"liquidityUsd": 15527763.87,
		"hash": "212153de0d0c9d93d99707361a67b3d23f8d1155e1d5c69514aa5159a38d1e09"
	},
	{
		"id": "ed1210fc1696",
		"ts": "2026-07-20T22:56:45.789Z",
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
		"liquidityUsd": 854439.62,
		"hash": "ed1210fc1696095fb525035d965359ae577eee00e2c83eff813506e9eef788d7"
	},
	{
		"id": "88148f1cf3bc",
		"ts": "2026-07-20T22:56:46.010Z",
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
		"liquidityUsd": 25072292.59,
		"hash": "88148f1cf3bc4531a1a6e09ebdaeebbf8223fa52e6a2cc17fe992ecf85e7f95b"
	},
	{
		"id": "56722bac6ab7",
		"ts": "2026-07-20T22:56:46.225Z",
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
		"liquidityUsd": 5205913.47,
		"hash": "56722bac6ab7c733572d0f85452813c1a91fbd49a13757bc64ec812c5b767d3c"
	},
	{
		"id": "63e1c4d47694",
		"ts": "2026-07-20T22:56:46.433Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1009256.9,
		"hash": "63e1c4d476945f3bdc87e38c23b33e9efac7897fee3069bdb1a437d6077037e1"
	},
	{
		"id": "9342e7baa805",
		"ts": "2026-07-20T22:56:46.641Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25072292.59,
		"hash": "9342e7baa805af7bc214f78752824b375bbccee51e2cb7a6c6c086b33046ae00"
	},
	{
		"id": "8c372b6d0fbb",
		"ts": "2026-07-20T22:56:46.886Z",
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
		"liquidityUsd": 2532094.46,
		"hash": "8c372b6d0fbb7be8cd5dd76df680feb3afd69c48ea7550125f84571a89c90b45"
	},
	{
		"id": "447a8a355b6a",
		"ts": "2026-07-20T22:56:47.097Z",
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
		"liquidityUsd": 101678.6,
		"hash": "447a8a355b6a674f83518d5b2575f20d5faf99f4adb3777c245d8f36763c01bd"
	},
	{
		"id": "fd94d543ec49",
		"ts": "2026-07-20T22:56:47.313Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2101598.68,
		"hash": "fd94d543ec496a543b6a713240fd8aaa61209e59c359ce3d4983688fe5f25b8c"
	},
	{
		"id": "6a7829255aa8",
		"ts": "2026-07-20T22:56:47.537Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1250223.39,
		"hash": "6a7829255aa81ae3d8aedecaf0170f16e6122421e41c7aa319462cbc5aff35b7"
	},
	{
		"id": "3bd5750fe2ae",
		"ts": "2026-07-20T22:56:47.729Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 683841.4,
		"hash": "3bd5750fe2aeeb6f9d340e09e904bd6d76dc50dfa442169a402dcdd9bc95ddcf"
	},
	{
		"id": "4b536b9125d6",
		"ts": "2026-07-20T22:56:48.093Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 52282.08,
		"hash": "4b536b9125d6792ef49374976914dbb8888c12788ec0e83389e885b9c2ac26c6"
	},
	{
		"id": "977b1ed56582",
		"ts": "2026-07-20T22:56:48.288Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3679383.02,
		"hash": "977b1ed565823d8c99c2b3aa02c185ff45117e675e4a0c503bfa2fcddd3ec476"
	},
	{
		"id": "faef92db9679",
		"ts": "2026-07-20T22:56:48.503Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9399839.16,
		"hash": "faef92db967965cf3dc4163f2a6bcb0bc18589f66cca3a1cdc154a771b87489f"
	},
	{
		"id": "7cc2fd4dae27",
		"ts": "2026-07-20T22:56:48.702Z",
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
		"liquidityUsd": 1263075.93,
		"hash": "7cc2fd4dae27a7ffaa79046f18f6f636530081cdef440e2a7dff41305b0cf49f"
	},
	{
		"id": "0823f0dd7948",
		"ts": "2026-07-20T22:56:48.899Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 792758.61,
		"hash": "0823f0dd79488cea5c374b47e6d70f852df9d9f57e6034396dcefe1bfa88ad4b"
	},
	{
		"id": "93b06da817dc",
		"ts": "2026-07-20T21:08:29.776Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109039690.76,
		"hash": "93b06da817dc26a7de61ab15a9326a127bab59fd767875625a8afbebe694a2bb"
	},
	{
		"id": "92448b1e2a32",
		"ts": "2026-07-20T21:08:30.135Z",
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
		"liquidityUsd": 15289912.02,
		"hash": "92448b1e2a323874913d28da244710936199fc7d74f9fce8e57159f86c8df5e7"
	},
	{
		"id": "9433aa893837",
		"ts": "2026-07-20T21:08:30.353Z",
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
		"liquidityUsd": 861506.9,
		"hash": "9433aa893837bf7396bd749d81c37a585e1e8561f1aa5583e812cfdc4467e6a1"
	},
	{
		"id": "1cced60e3f05",
		"ts": "2026-07-20T21:08:30.568Z",
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
		"liquidityUsd": 25238029.88,
		"hash": "1cced60e3f0500a08fbb581aac15f691ca6b7f09bb7b8fc3de21957d1520e6b4"
	},
	{
		"id": "0d5e982c3c7d",
		"ts": "2026-07-20T21:08:30.770Z",
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
		"liquidityUsd": 5233121.67,
		"hash": "0d5e982c3c7d2e2c609c6f0de4f7189c4622f1e7666fc088c663a7b2a54a9211"
	},
	{
		"id": "157a58147a97",
		"ts": "2026-07-20T21:08:30.976Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1011632.72,
		"hash": "157a58147a975dc95d90e89213b4d1d853377c54d2a6506207cc23526ab99bba"
	},
	{
		"id": "4043ec40d855",
		"ts": "2026-07-20T21:08:31.176Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25238029.89,
		"hash": "4043ec40d85566e042f086affd1933c3dd2be16b070dae3f1f3ca7e575f0c0d5"
	},
	{
		"id": "c468c835354e",
		"ts": "2026-07-20T21:08:31.369Z",
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
		"liquidityUsd": 2546567.88,
		"hash": "c468c835354e6c2036d92b53e4ffecde696d4576a71037fc94cb98c7ee9466e4"
	},
	{
		"id": "5b407ba8a47b",
		"ts": "2026-07-20T21:08:31.566Z",
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
		"liquidityUsd": 99304.31,
		"hash": "5b407ba8a47b580e813220d970d7a21de4001e31c78e4ad8bd603b5866fe77a4"
	},
	{
		"id": "47e5caacbca1",
		"ts": "2026-07-20T21:08:31.875Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2122517.65,
		"hash": "47e5caacbca139062f215d42215a01a0cbd247ce642a521c7043c1f6a41a0429"
	},
	{
		"id": "23e7d66b2061",
		"ts": "2026-07-20T21:08:32.065Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9514607.14,
		"hash": "23e7d66b2061636bb1f3a8f9034fbeb33a9aa80467d5af0426915716dfc9f994"
	},
	{
		"id": "0845b35e457e",
		"ts": "2026-07-20T21:08:32.257Z",
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
		"liquidityUsd": 1230320.68,
		"hash": "0845b35e457ea1f00f30a3eb671ed51a66c591855149dd753aa674fc890a0861"
	},
	{
		"id": "b9e9c890756c",
		"ts": "2026-07-20T21:08:32.455Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3733301.78,
		"hash": "b9e9c890756c5405ab41bb2e4256e22aa66b8396828f85fd3d041146386dbcda"
	},
	{
		"id": "e75bf24a3b6c",
		"ts": "2026-07-20T21:08:32.644Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 687812.79,
		"hash": "e75bf24a3b6c3c6a72dc3592173c458a607053949a80d71799df1c0316dd43b8"
	},
	{
		"id": "fcb39817c418",
		"ts": "2026-07-20T21:08:32.833Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 292146.8,
		"hash": "fcb39817c418781cee5202bec860fbc85792af24227dd4a2cf4636bcfb2bff12"
	},
	{
		"id": "70d8e99d61e2",
		"ts": "2026-07-20T21:08:33.024Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 48873.66,
		"hash": "70d8e99d61e2ea96fc6ffd5125352de80e2bbb92a09e9faf020d01910d8d0b12"
	},
	{
		"id": "fa450492a6ea",
		"ts": "2026-07-20T21:08:33.225Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5260891.02,
		"hash": "fa450492a6ea1b9fa1aa88f25ffdbeb4e97ade5e9a50cfdbf62f6a622eb304bf"
	},
	{
		"id": "080c58b6ef9b",
		"ts": "2026-07-20T19:47:34.697Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108870486.79,
		"hash": "080c58b6ef9bc3572244d6eb127403cd08d253a831db0c00515b13f7f689b71f"
	},
	{
		"id": "a2edba903886",
		"ts": "2026-07-20T19:47:35.080Z",
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
		"liquidityUsd": 15723919.95,
		"hash": "a2edba903886fdfaac0d97a5f73264a067bc6898548687590b72395dc6ea9154"
	},
	{
		"id": "e7513777c2d9",
		"ts": "2026-07-20T19:47:35.298Z",
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
		"liquidityUsd": 859033.9,
		"hash": "e7513777c2d949da7911eff048ea768e7b8af7225a3de3ea433a95f972e21e13"
	},
	{
		"id": "11e49dc2217b",
		"ts": "2026-07-20T19:47:35.521Z",
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
		"liquidityUsd": 25215801.39,
		"hash": "11e49dc2217b8feb0e08e84e548a0a95cba3db67028ceeec70e6a56dd2810bd4"
	},
	{
		"id": "c1ea836bcb15",
		"ts": "2026-07-20T19:47:35.756Z",
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
		"liquidityUsd": 5231734.7,
		"hash": "c1ea836bcb151de2c575e4d5ae2dfc6e7269e6f1f1b27cb42f4ba3f425a698c4"
	},
	{
		"id": "28f6b623b9ce",
		"ts": "2026-07-20T19:47:35.999Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1011174.65,
		"hash": "28f6b623b9cea01f65ab7910e72bbb8ef7389b89b367efe8d5f8f1a25b91a71d"
	},
	{
		"id": "5e1a298a64ee",
		"ts": "2026-07-20T19:47:36.212Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25215801.39,
		"hash": "5e1a298a64eedb605ce397e72bd911880196df45c2986ceef741f40f0a22969d"
	},
	{
		"id": "cf0cacf2b7ec",
		"ts": "2026-07-20T19:47:36.438Z",
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
		"liquidityUsd": 2529432.64,
		"hash": "cf0cacf2b7ecbd29f3eb7130d058e8fb12fd8f173d1755bd434efb8c1abb6412"
	},
	{
		"id": "ec8d621fddd0",
		"ts": "2026-07-20T19:47:36.659Z",
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
		"liquidityUsd": 104477.8,
		"hash": "ec8d621fddd0add6a660c70835fdc4c0e311eda80d93f9361b8a86c01f553a5f"
	},
	{
		"id": "ade2f2e9ad73",
		"ts": "2026-07-20T19:47:36.899Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2133482.97,
		"hash": "ade2f2e9ad73790d20d9fef1902033aabcb58f90e83f26a3fd2a112847417ece"
	},
	{
		"id": "d405422017d2",
		"ts": "2026-07-20T19:47:37.107Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9424185.5,
		"hash": "d405422017d2c9af9e5ac22d6d3d99ca842c89d4a02344d73d18c4cbdaee36aa"
	},
	{
		"id": "90b55946824c",
		"ts": "2026-07-20T19:47:37.309Z",
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
		"liquidityUsd": 1279181.21,
		"hash": "90b55946824cf4991917101d426d88d2a2a734c438d6a1d68e139fe817ce2042"
	},
	{
		"id": "e71042400524",
		"ts": "2026-07-20T19:47:37.504Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1255750.25,
		"hash": "e710424005240983f979d5469ca6e89b08d3e656ecbd37dea5808093a6d7eded"
	},
	{
		"id": "b92cc5794877",
		"ts": "2026-07-20T19:47:37.698Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3717916.28,
		"hash": "b92cc57948774737cea80913d2e01afe276ace82b11d9ed674baeb0cefb6ac1c"
	},
	{
		"id": "3ee22f297f15",
		"ts": "2026-07-20T19:47:37.891Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 683760.44,
		"hash": "3ee22f297f15c885df570089c5b06ae76b1696667c7093f1f05d1b95ca280cdb"
	},
	{
		"id": "6634e2852939",
		"ts": "2026-07-20T19:47:38.085Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 49734.71,
		"hash": "6634e2852939cdc1294a5b08ed45b4d4c851f5edac3472e730530505cc9849b2"
	},
	{
		"id": "218155794d1d",
		"ts": "2026-07-20T19:47:38.307Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 85273.42,
		"hash": "218155794d1d9bb12860df25b652c30d82af26ae2aaf10fb295768aa476370e2"
	},
	{
		"id": "ff3525d12fd6",
		"ts": "2026-07-20T17:58:14.618Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109014779.28,
		"hash": "ff3525d12fd6b0cbc38c9e17f6d6cba14591ebf0d5ee6aeea635189907d792b3"
	},
	{
		"id": "455f37510397",
		"ts": "2026-07-20T17:58:14.930Z",
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
		"liquidityUsd": 14172269.54,
		"hash": "455f37510397cf48ea7ff890d34ba06367e82a261f144180c415d23d2e45ce36"
	},
	{
		"id": "56f10fc7fab1",
		"ts": "2026-07-20T17:58:15.122Z",
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
		"liquidityUsd": 863926.14,
		"hash": "56f10fc7fab101f999e28638e575780984d1a3b9ff5f7336557b0b567095222a"
	},
	{
		"id": "752a72468627",
		"ts": "2026-07-20T17:58:15.322Z",
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
		"liquidityUsd": 25304467.34,
		"hash": "752a724686271137be23b137b5895ace04bb33cd080c0096654391432f17279a"
	},
	{
		"id": "fe9f91f898aa",
		"ts": "2026-07-20T17:58:15.512Z",
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
		"liquidityUsd": 5248630.37,
		"hash": "fe9f91f898aa9cc3f1f4989d92708544fb25448e605ab15456b5ca869983d133"
	},
	{
		"id": "c3f8e590a39a",
		"ts": "2026-07-20T17:58:15.703Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1011153.03,
		"hash": "c3f8e590a39aad875c56f3f68e708dd2e465c1ef81fad3f3957d4f985a197844"
	},
	{
		"id": "99b6f9d156d7",
		"ts": "2026-07-20T17:58:15.901Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25304467.34,
		"hash": "99b6f9d156d777da382da75d665c2c706fbc0907962c98d6cdcf70f3dc08eda3"
	},
	{
		"id": "554e1a069bc6",
		"ts": "2026-07-20T17:58:16.086Z",
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
		"liquidityUsd": 2543124.39,
		"hash": "554e1a069bc63a0c02bfe111fd0ec59da874e800de2c49f22433aff06e98ff0f"
	},
	{
		"id": "9571967ab7f2",
		"ts": "2026-07-20T17:58:16.466Z",
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
		"liquidityUsd": 104364.48,
		"hash": "9571967ab7f2e6c113a65d066ddb90b5e88496d26e8f083bca561ba45e22634d"
	},
	{
		"id": "c51227f5b5ed",
		"ts": "2026-07-20T17:58:16.658Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2154245.17,
		"hash": "c51227f5b5ed73d649faf3b8a87a7ebde8e47d5840ac6425f197e3c89d31436b"
	},
	{
		"id": "7588e46ef2a9",
		"ts": "2026-07-20T17:58:16.857Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9511905.08,
		"hash": "7588e46ef2a9f8c97c3597f3668e67a50554f601debc2628227800497a2adf6f"
	},
	{
		"id": "46d25240f9ab",
		"ts": "2026-07-20T17:58:17.056Z",
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
		"liquidityUsd": 1298735.37,
		"hash": "46d25240f9abe38658d75dcb8b7bc7eacc6add63ef8ab818010233c0b4443473"
	},
	{
		"id": "b48fb2498604",
		"ts": "2026-07-20T17:58:17.255Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 52604.82,
		"hash": "b48fb2498604d22468ee5c0f167e53ea527275ef4692949d3abd718cdd954a7e"
	},
	{
		"id": "b5371ef56e05",
		"ts": "2026-07-20T17:58:17.483Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 86800.54,
		"hash": "b5371ef56e05494ac5d44d4ea7217fd15909b2506f0acb5a7d4472aa580dc97d"
	},
	{
		"id": "c6a43a3ce657",
		"ts": "2026-07-20T17:58:17.682Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 685966.66,
		"hash": "c6a43a3ce657cf9bdc6c44077204657948c344eb0a11218ceb5052c1ef3f9368"
	},
	{
		"id": "2252c4f36743",
		"ts": "2026-07-20T17:58:17.874Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3673541.66,
		"hash": "2252c4f367432bf347d558b42d90df025736b658098b89d550161efac5617654"
	},
	{
		"id": "e2e336ebd077",
		"ts": "2026-07-20T17:58:18.072Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1241349.61,
		"hash": "e2e336ebd077bd4b3e580ce65d25e4b3c2983bfb47326351e5bf6d536a3b451d"
	},
	{
		"id": "42753379f717",
		"ts": "2026-07-20T15:08:48.670Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108854928.43,
		"hash": "42753379f717a07605c661601696be893a7d9facf3a45a1b351a481b0c4db8aa"
	},
	{
		"id": "0503131c5e4d",
		"ts": "2026-07-20T15:08:49.109Z",
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
		"liquidityUsd": 14549728.26,
		"hash": "0503131c5e4d22f03dd4e61cd2fd45479d0106d0d859fd4996037bc886833074"
	},
	{
		"id": "908a5522a2b4",
		"ts": "2026-07-20T15:08:49.344Z",
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
		"liquidityUsd": 866655.79,
		"hash": "908a5522a2b46cc7d7a1460fbc64f28fe84abd5cc8e4ca52ec6cc890359733aa"
	},
	{
		"id": "7b111dff6d89",
		"ts": "2026-07-20T15:08:49.585Z",
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
		"liquidityUsd": 25168373.45,
		"hash": "7b111dff6d895e7917a51f85e13b4be58a1e7a990667162a81fb4be12902f9c2"
	},
	{
		"id": "539e51cf832b",
		"ts": "2026-07-20T15:08:49.821Z",
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
		"liquidityUsd": 5205884.79,
		"hash": "539e51cf832bef7218f717644375b67599496737e75c564e3fee5ffc938aae21"
	},
	{
		"id": "1ebeb699916c",
		"ts": "2026-07-20T15:08:50.060Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1008165.97,
		"hash": "1ebeb699916c25fa21d9b4172ec36bf7e5dfbdac6913aa1cfd66ee3a720cad70"
	},
	{
		"id": "450f342ba58d",
		"ts": "2026-07-20T15:08:50.295Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25164395.64,
		"hash": "450f342ba58d01494dc08af8131023b6de01959153b3cd830f93d2ad08f30fe2"
	},
	{
		"id": "73e5436bfb4c",
		"ts": "2026-07-20T15:08:50.545Z",
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
		"liquidityUsd": 2500937.36,
		"hash": "73e5436bfb4ccfd53ee2f16a4e2cdfedbaab248a05956cdeaefb5e2affe67894"
	},
	{
		"id": "e23a71b99d4c",
		"ts": "2026-07-20T15:08:50.803Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 131544.53,
		"hash": "e23a71b99d4c67c0f28b96ceb3681933addef3ed4bc9ae5f9717cbce5a43c955"
	},
	{
		"id": "35d40623cf51",
		"ts": "2026-07-20T15:08:51.045Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2149263.82,
		"hash": "35d40623cf517204bce06070f9d7aa280621767b7dda2687b9efa83ae3977599"
	},
	{
		"id": "be0e253ca9ea",
		"ts": "2026-07-20T15:08:51.266Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9373741.69,
		"hash": "be0e253ca9ea02320c371dcaf50cdbd6fb8fd5f68009edc6e44cec87234c0652"
	},
	{
		"id": "3b7d52cf2412",
		"ts": "2026-07-20T15:08:51.486Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1222233.05,
		"hash": "3b7d52cf24120d3fb3d70f78725aacabf91b4bccf632c47da89a92852be3e0c4"
	},
	{
		"id": "c1c30fb452b4",
		"ts": "2026-07-20T15:08:51.708Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88182.91,
		"hash": "c1c30fb452b44cb9aecb0d1119e7850e497120eb2c5c72fb41df3b22f5a15abf"
	},
	{
		"id": "c5de789f7a04",
		"ts": "2026-07-20T15:08:51.925Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3706066.91,
		"hash": "c5de789f7a04a169b5a15372bc7a645fed1e2cc8b412be9d7e68301296465ae5"
	},
	{
		"id": "1c111f522477",
		"ts": "2026-07-20T15:08:52.142Z",
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
		"liquidityUsd": 1306575.95,
		"hash": "1c111f522477f450e253c1d1e79c1fe122a7c688c2f9d974554775403893a51e"
	},
	{
		"id": "61aa55ba64ec",
		"ts": "2026-07-20T15:08:52.389Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5227111.49,
		"hash": "61aa55ba64ecdabcf124c3316c0ffa0d66d78a8a32d8f2d50b635f090ff1d6a2"
	},
	{
		"id": "a8af5ec70fe9",
		"ts": "2026-07-20T15:08:52.607Z",
		"symbol": "JERRY",
		"token": "0xB200000000000000000000d9dAc57E31E1AcEB01",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 38497.69,
		"hash": "a8af5ec70fe98f1c0963f5033802ea181b0410fd0022af47248c66b358eeca97"
	},
	{
		"id": "2362d26a7658",
		"ts": "2026-07-20T12:16:55.997Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109171429.34,
		"hash": "2362d26a7658b6e1beba9233709de4931aa05e26e23b86f9c37c5f207583ec5d"
	},
	{
		"id": "4be7e9d98db7",
		"ts": "2026-07-20T12:16:56.253Z",
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
		"liquidityUsd": 13178478.49,
		"hash": "4be7e9d98db70c31bb94c6cdf242f63d3fb40bfb45b6d7f3657035522a699a47"
	},
	{
		"id": "16636bfa49f3",
		"ts": "2026-07-20T12:16:56.503Z",
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
		"liquidityUsd": 873566.31,
		"hash": "16636bfa49f3bb1a5f343def3c723969aa92b7da23ffec229e759f86034e531c"
	},
	{
		"id": "5459ede37726",
		"ts": "2026-07-20T12:16:56.749Z",
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
		"liquidityUsd": 25571157.62,
		"hash": "5459ede3772678319224b131768a6b295e10cd98dc7a23e2837ad1da288347ba"
	},
	{
		"id": "85afd7ebbc2b",
		"ts": "2026-07-20T12:16:56.997Z",
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
		"liquidityUsd": 5075623.98,
		"hash": "85afd7ebbc2beb663996451fb47695fa464064d34fcaa78e2a9e2b8346e4f601"
	},
	{
		"id": "475d876d2a24",
		"ts": "2026-07-20T12:16:57.241Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1008165.97,
		"hash": "475d876d2a24124174139e9a9777883590a07f0fccaecac31f10246e65f1c014"
	},
	{
		"id": "692e9cff99be",
		"ts": "2026-07-20T12:16:57.486Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25571157.62,
		"hash": "692e9cff99be78991ddf34a8a75bcb68155e8632a6456c7ad9bb9db7b0889c3e"
	},
	{
		"id": "e8573b77036f",
		"ts": "2026-07-20T12:16:57.734Z",
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
		"liquidityUsd": 2520964.62,
		"hash": "e8573b77036f9cb59212a9ade649438a5b030a246a7ecd22f0ff7478d2dd79c9"
	},
	{
		"id": "77d52a1ef568",
		"ts": "2026-07-20T12:16:57.981Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 143783.44,
		"hash": "77d52a1ef5685254ef926413ac5b94e872eabf6305a9638505c56209d89837f6"
	},
	{
		"id": "2f6c2033105a",
		"ts": "2026-07-20T12:16:58.219Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2102192,
		"hash": "2f6c2033105a42f7537ede6f1ff2eb4f00420a13446cc8cf227e65e6e0cdac8b"
	},
	{
		"id": "e02082eaf0cf",
		"ts": "2026-07-20T12:16:58.451Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1243585.47,
		"hash": "e02082eaf0cffc7569bd73e07230308a4f3b0fd33add15248b8d70d976e3ef66"
	},
	{
		"id": "ac38765c93e3",
		"ts": "2026-07-20T12:16:58.677Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 40921.39,
		"hash": "ac38765c93e346ee5ccd8a03ccc00f8c850ca4264edd924bf75f1572146d8f13"
	},
	{
		"id": "981f48030a0b",
		"ts": "2026-07-20T12:16:58.896Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 89177.93,
		"hash": "981f48030a0b03661d969869a7f896d1c36ed9bf45653b56c9b4c2ce44e5643c"
	},
	{
		"id": "48490385a7dc",
		"ts": "2026-07-20T12:16:59.122Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5328155.86,
		"hash": "48490385a7dc738c69056d428c377df41f5c50d4fff98cf5289dbd60ed16554b"
	},
	{
		"id": "820cca7d05d9",
		"ts": "2026-07-20T12:16:59.348Z",
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
		"liquidityUsd": 1312806.43,
		"hash": "820cca7d05d90c6ec71ef1d3662f94a0422e04cf9ea9904d7f4ff3957c50abcf"
	},
	{
		"id": "4ec64ecbae1d",
		"ts": "2026-07-20T12:16:59.568Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 184450.19,
		"hash": "4ec64ecbae1d896257a8591a6bd85f1a803572c423b7355ca40e25ec4cfcbae5"
	},
	{
		"id": "0da544144c04",
		"ts": "2026-07-20T09:56:46.897Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108367366.38,
		"hash": "0da544144c04229db2da6cdd55cdd2f7f9195ab639e58767bb4dde81ddc230fd"
	},
	{
		"id": "596179f24a1e",
		"ts": "2026-07-20T09:56:47.371Z",
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
		"liquidityUsd": 15649254.54,
		"hash": "596179f24a1e9b58c428431ff322c8be8da0b0ff95996a4ebbf8e113ceebdaf8"
	},
	{
		"id": "da6d7beb7cab",
		"ts": "2026-07-20T09:56:47.613Z",
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
		"liquidityUsd": 870264.1,
		"hash": "da6d7beb7cab21ad5a45a4d7d2f0c1ee6786c7550a82a7005992ac3028142a66"
	},
	{
		"id": "690af8ac8d1a",
		"ts": "2026-07-20T09:56:47.854Z",
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
		"liquidityUsd": 25430199.3,
		"hash": "690af8ac8d1aad65b7ea90744f6d01456d99b5b18d2703533f95c27f37722d17"
	},
	{
		"id": "73ab06350a26",
		"ts": "2026-07-20T09:56:48.092Z",
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
		"liquidityUsd": 5016103.57,
		"hash": "73ab06350a2699e904755e67cd785ecacc84a483bc7cdc2f5a8365e7b01c9ec1"
	},
	{
		"id": "2581ff93af5f",
		"ts": "2026-07-20T09:56:48.335Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993664.72,
		"hash": "2581ff93af5f27d6015e299463a30f0106bc3f5483bbcdfac3db73ab7300d7e1"
	},
	{
		"id": "ad0f6f8afeb7",
		"ts": "2026-07-20T09:56:48.576Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25430199.3,
		"hash": "ad0f6f8afeb7fb9c1c336595ee4457f1ca005f8cb9a8ba9fc6eb3c2984dea278"
	},
	{
		"id": "080d078499b8",
		"ts": "2026-07-20T09:56:48.825Z",
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
		"liquidityUsd": 2501732.52,
		"hash": "080d078499b8cefe8b3ca40c7228ddbd2f5762e2cb18adb1cb9b1f0b7d0762b4"
	},
	{
		"id": "2f3ee1731798",
		"ts": "2026-07-20T09:56:49.067Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 140399.96,
		"hash": "2f3ee17317988d645c3fccdefedf935c37a0c986719345c858ab04ed94acb102"
	},
	{
		"id": "b5e42c9e35dd",
		"ts": "2026-07-20T09:56:49.308Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2057711.28,
		"hash": "b5e42c9e35ddade9dd36ab078c7563ebd3483700f21f5af4f8c981a8bf685884"
	},
	{
		"id": "568682609242",
		"ts": "2026-07-20T09:56:49.531Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 40660.21,
		"hash": "5686826092423413f6097b09c702653d2023e2d9f247200422c564be4a29b1a6"
	},
	{
		"id": "f38e568db01e",
		"ts": "2026-07-20T09:56:49.755Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1208949.67,
		"hash": "f38e568db01e74b977a77f06c4f91340ea1fa7a5703f913e12f5ec2c1e5dc780"
	},
	{
		"id": "c8cf0426bb4e",
		"ts": "2026-07-20T09:56:49.979Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 675282.08,
		"hash": "c8cf0426bb4e03631cf9f6cb757cbf6a24bfd9d8235fd247d3bfac96afe23131"
	},
	{
		"id": "686696d8e136",
		"ts": "2026-07-20T09:56:50.203Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84577.4,
		"hash": "686696d8e136e7d0cc4fb51e5f00f4375b8aeb77e15e03c3e062230510188bb4"
	},
	{
		"id": "3681fd349379",
		"ts": "2026-07-20T09:56:50.428Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 183569.32,
		"hash": "3681fd349379bc4ad5619d224abdf1f25020342ce6551a210edff674d53facd7"
	},
	{
		"id": "d51e7ca2a6b6",
		"ts": "2026-07-20T09:56:50.654Z",
		"symbol": "JERRY",
		"token": "0xB200000000000000000000d9dAc57E31E1AcEB01",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 35437.72,
		"hash": "d51e7ca2a6b60f640461e654b4d6d866bb9ede2427e331b27ca314193b30d172"
	},
	{
		"id": "79584ad0f6a0",
		"ts": "2026-07-20T06:14:24.011Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107908552.52,
		"hash": "79584ad0f6a000e3b21f25bfbf970adaa6a85dd16df3227378282316a865e33c"
	},
	{
		"id": "9051f45d73ba",
		"ts": "2026-07-20T06:14:24.392Z",
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
		"liquidityUsd": 15851766.61,
		"hash": "9051f45d73baf341c21a605f559d795b18a6c947240eb99163c96cfd9d832317"
	},
	{
		"id": "5e149daefb3b",
		"ts": "2026-07-20T06:14:24.629Z",
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
		"liquidityUsd": 869877.96,
		"hash": "5e149daefb3b3c53bf69d266f720263cd18600a02c4c3eaa9d108dca9367f1e6"
	},
	{
		"id": "1b055a57d570",
		"ts": "2026-07-20T06:14:24.822Z",
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
		"liquidityUsd": 25442826.34,
		"hash": "1b055a57d570c41d995b6396eccbd40965145557d3aaa2073ee66c0835bf5306"
	},
	{
		"id": "f41d24ad819e",
		"ts": "2026-07-20T06:14:25.010Z",
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
		"liquidityUsd": 4994340.54,
		"hash": "f41d24ad819e201d7569703bc7b6c678cb1a3b07e4fb1a458308d0a93f398b4c"
	},
	{
		"id": "20754a3c23c2",
		"ts": "2026-07-20T06:14:25.209Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993642.42,
		"hash": "20754a3c23c248e97fe75bc3d321f13a161269b50e43e1bbc9fe3405079a1a70"
	},
	{
		"id": "e9c457be6e61",
		"ts": "2026-07-20T06:14:25.410Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25442826.34,
		"hash": "e9c457be6e617f4f45fbbaf38309971a73583c1afcf1bf5096aa35d5e0cc456e"
	},
	{
		"id": "28217b93f818",
		"ts": "2026-07-20T06:14:25.631Z",
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
		"liquidityUsd": 2482781.6,
		"hash": "28217b93f818aa1eb9f833c3e829706a49f79c244da3913a14442d7c8bc9427e"
	},
	{
		"id": "2404ad2062c2",
		"ts": "2026-07-20T06:14:25.831Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 142817,
		"hash": "2404ad2062c29f4cf41eed25c668ee53a6c58670e737595355ab5cb01b4f1e73"
	},
	{
		"id": "93e6ba05ecb9",
		"ts": "2026-07-20T06:14:26.028Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2036487.69,
		"hash": "93e6ba05ecb959e8b5032a4164978954954cbecb9974398db8c75ee5f139c825"
	},
	{
		"id": "67c2bf70afa9",
		"ts": "2026-07-20T06:14:26.233Z",
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
		"liquidityUsd": 1339435.16,
		"hash": "67c2bf70afa9ea9374a1651ed81d64ce01ed7a93277fdecfdcffdad43a09df72"
	},
	{
		"id": "bddbfc51fa72",
		"ts": "2026-07-20T06:14:26.425Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182757.71,
		"hash": "bddbfc51fa7271a5763c96e640bc34f4916985bcab55efcfee14e51a2b0c181b"
	},
	{
		"id": "31d41abfa311",
		"ts": "2026-07-20T06:14:26.633Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 41966.21,
		"hash": "31d41abfa311014421387adf9e236b6804e66573186a10604c8e80eaff388ffa"
	},
	{
		"id": "9b4b5cd9515d",
		"ts": "2026-07-20T06:14:26.840Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 670022.58,
		"hash": "9b4b5cd9515db4966ebf5060250cc8d4a6923657882a6373d93d2135df32c008"
	},
	{
		"id": "e3d117bb7198",
		"ts": "2026-07-20T06:14:27.031Z",
		"symbol": "JERRY",
		"token": "0xB200000000000000000000d9dAc57E31E1AcEB01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 35733.09,
		"hash": "e3d117bb7198c4ac6601104d4cc4c58ee1129a75eb8f7665a7dc79c3150513c9"
	},
	{
		"id": "683ea26a6591",
		"ts": "2026-07-20T06:14:27.223Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 411756.19,
		"hash": "683ea26a65914e5f0f1eb1f3e6a1d8849f92e1df5e7b67df728d078caf37312e"
	},
	{
		"id": "d816320e2f44",
		"ts": "2026-07-20T02:38:20.891Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108332705.17,
		"hash": "d816320e2f44992660081e3cfe56101def69e617627557e952dcb9c891f31078"
	},
	{
		"id": "550b07013f55",
		"ts": "2026-07-20T02:38:21.621Z",
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
		"liquidityUsd": 16054914.92,
		"hash": "550b07013f55b47b4cf28d09bb02c54d12351b8133ee0e5107e36894f99f4121"
	},
	{
		"id": "dcb9ee71434a",
		"ts": "2026-07-20T02:38:22.064Z",
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
		"liquidityUsd": 871415.49,
		"hash": "dcb9ee71434a7a08e7d549e5e18835b796afdaad712fda8d1853ad02afa948f1"
	},
	{
		"id": "ba1ab518489d",
		"ts": "2026-07-20T02:38:22.511Z",
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
		"liquidityUsd": 25605147.25,
		"hash": "ba1ab518489d8e4e76677dabd3b7554616de470a9e317d2fdb23297ac9296fc9"
	},
	{
		"id": "95e0023838a5",
		"ts": "2026-07-20T02:38:22.971Z",
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
		"liquidityUsd": 5073520.23,
		"hash": "95e0023838a5ae49aa4fef0375413c8cda5278d19ff3d58212ad5aadb2aa01b0"
	},
	{
		"id": "473cab7fe0e5",
		"ts": "2026-07-20T02:38:23.211Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993650.13,
		"hash": "473cab7fe0e51ec6cfe8f6c56c56bf55caec9fdbe829168ef970cf29752b4dd4"
	},
	{
		"id": "f08998911d6e",
		"ts": "2026-07-20T02:38:23.445Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25605147.25,
		"hash": "f08998911d6e250231f07c925de68274a28aaeef9631defcec8bf56b57cd90e2"
	},
	{
		"id": "d516dfba3fa1",
		"ts": "2026-07-20T02:38:23.693Z",
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
		"liquidityUsd": 2509069.48,
		"hash": "d516dfba3fa19c45727164bdb9d01c64e75815a7ee303055aa2b1ca9dc4ce584"
	},
	{
		"id": "6f0bc274ef4f",
		"ts": "2026-07-20T02:38:23.934Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 142678.11,
		"hash": "6f0bc274ef4fd9c41a29f51092528894eee6b8bde667b5d3f3c086d20557b234"
	},
	{
		"id": "62ba55a37fa9",
		"ts": "2026-07-20T02:38:24.181Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2043600.14,
		"hash": "62ba55a37fa904d8e07a26dcd322240e4725beb20270ac7b22274b4671133408"
	},
	{
		"id": "16a1876b4e7b",
		"ts": "2026-07-20T02:38:24.407Z",
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
		"liquidityUsd": 1352561.77,
		"hash": "16a1876b4e7b1d99fae8ac64bc6aa4d993c2d81bcccb747af98605ae7d18f432"
	},
	{
		"id": "6b101ed8382e",
		"ts": "2026-07-20T02:38:24.630Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 44584.18,
		"hash": "6b101ed8382eb87dbf0216cee29ce865b85c0fc5871fa31e0fd618d693e9732c"
	},
	{
		"id": "083a46df8afc",
		"ts": "2026-07-20T02:38:24.851Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 191943.16,
		"hash": "083a46df8afc0021a3d576088dae693c464024e1cb9f5ca6778aa1feaab615ae"
	},
	{
		"id": "939f78e74417",
		"ts": "2026-07-20T02:38:25.082Z",
		"symbol": "Claude",
		"token": "0x9385Bd6198EC6664567c456Db8cEE1C940D1cB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 731767.38,
		"hash": "939f78e744175adf08e0e66b3b79b977abbe5b293a9906d14d6c9efb2b0eacbb"
	},
	{
		"id": "b0ee13aa3e57",
		"ts": "2026-07-20T02:38:25.308Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1196828.03,
		"hash": "b0ee13aa3e573c55fdbfd5364575c945c4e52707d20827e2ca7299ec08bdc6a6"
	},
	{
		"id": "364092b835eb",
		"ts": "2026-07-20T02:38:25.533Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 616668.88,
		"hash": "364092b835eb75f013198e36709f225d946f2cd129b31606fa0bee38246b443a"
	},
	{
		"id": "3dc5f404dcef",
		"ts": "2026-07-19T23:53:54.215Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108143512.85,
		"hash": "3dc5f404dcefff8dcaee89c79b300565cd4d144301bc51bc6d1d440abbc647bf"
	},
	{
		"id": "3199e7a0ddc3",
		"ts": "2026-07-19T23:53:54.661Z",
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
		"liquidityUsd": 15436143.72,
		"hash": "3199e7a0ddc348cc3ac6d92a63b0229f6186eb42df7c80027a4bb3dde09032d4"
	},
	{
		"id": "aa4d239ef8af",
		"ts": "2026-07-19T23:53:55.098Z",
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
		"liquidityUsd": 864294.19,
		"hash": "aa4d239ef8af47e4b4facea5bea68f9085a6ec9d8cbe640cd88d77cd4706cfd7"
	},
	{
		"id": "aca6d93c9df3",
		"ts": "2026-07-19T23:53:55.334Z",
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
		"liquidityUsd": 25576149.95,
		"hash": "aca6d93c9df34c2b3e2cbecc8312fe99fa981d364038249c19dbfc49c865ad81"
	},
	{
		"id": "7aaff5e82619",
		"ts": "2026-07-19T23:53:55.570Z",
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
		"liquidityUsd": 5050110.52,
		"hash": "7aaff5e82619806433f97ae0bbc330f957ea210fc06681b7be5c485ffac5db02"
	},
	{
		"id": "2d716308969a",
		"ts": "2026-07-19T23:53:55.809Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991379.68,
		"hash": "2d716308969a8ba4058abf2cc75fd18cb8634a3467e949f37dcff9f48c6ee46a"
	},
	{
		"id": "b7c7bfe99311",
		"ts": "2026-07-19T23:53:56.041Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25576149.95,
		"hash": "b7c7bfe99311a52051a513e050ee796c48c1f791722a6a37959f02699272fe18"
	},
	{
		"id": "f7a4dda41331",
		"ts": "2026-07-19T23:53:56.274Z",
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
		"liquidityUsd": 2502238.42,
		"hash": "f7a4dda4133195e05b5ebe986deb8b48ba43253ae65ce12135d9d1e6ff261a8c"
	},
	{
		"id": "930dedb1af8d",
		"ts": "2026-07-19T23:53:56.519Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 148464.85,
		"hash": "930dedb1af8d017cca58de960717f7285ef247d18fc2146be462b9f04d68f394"
	},
	{
		"id": "90e68b9d8793",
		"ts": "2026-07-19T23:53:56.754Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity"
		],
		"liquidityUsd": 47833.35,
		"hash": "90e68b9d8793fdff6c26bfa10099230d1891e3ebb4256d92edfa8502bd329736"
	},
	{
		"id": "6d6f12a5eb61",
		"ts": "2026-07-19T23:53:56.973Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2066618.39,
		"hash": "6d6f12a5eb615a3ad5cfb59c3c880ec0f707246dc927eddcf219ac2bcda4f3ed"
	},
	{
		"id": "2539c9b28dad",
		"ts": "2026-07-19T23:53:57.191Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1266009.86,
		"hash": "2539c9b28dadb745504586aaba41bf9abac13a088e13c4efda864ee3eda6df29"
	},
	{
		"id": "21ff9a77e370",
		"ts": "2026-07-19T23:53:57.411Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 199888.15,
		"hash": "21ff9a77e370820f8fdf010372e13ed5a1019c5fa71e151cf52a7b203d05a701"
	},
	{
		"id": "186c39ebd37f",
		"ts": "2026-07-19T23:53:57.630Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 437473.4,
		"hash": "186c39ebd37ff0d7870a7597a37bfcbf9e2e10919dc87ac26f5c0b196dd908a5"
	},
	{
		"id": "047c281b6a90",
		"ts": "2026-07-19T23:53:57.849Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1210727.37,
		"hash": "047c281b6a90cb6ff7f65092b1f08a6d14a4c5e458f02f48ed0518c9dad16c19"
	},
	{
		"id": "af271a7ebaa1",
		"ts": "2026-07-19T23:53:58.069Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 620185.76,
		"hash": "af271a7ebaa1e82726d4f17985e27765cca698aa9fe2d64346555ceeb40388d8"
	},
	{
		"id": "9cc69cae83dd",
		"ts": "2026-07-19T23:53:58.289Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 532049.65,
		"hash": "9cc69cae83dd78ead4f09ddea6f394c9066f1ae98151169a4d22e65df38b882c"
	}
]
