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
	"updatedAt": "2026-08-13T21:40:47.219Z",
	"tokensScored": 9848,
	"verdictsIssued": 9848,
	"safe": 8581,
	"risky": 722,
	"likelyRug": 545,
	"ticks": 594
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "cbae4b60449e",
		"ts": "2026-08-13T21:40:43.442Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111712955.21,
		"hash": "cbae4b60449e23a1f8f80dea3839db73f935d2ba4c9dad1df8196769a1f4f8a7"
	},
	{
		"id": "3eac0e410b7c",
		"ts": "2026-08-13T21:40:43.771Z",
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
		"liquidityUsd": 17509565.24,
		"hash": "3eac0e410b7c3bdbf331facd17abbf9acac396c187b9800a60200f63544fa5dd"
	},
	{
		"id": "305fc11428f2",
		"ts": "2026-08-13T21:40:44.210Z",
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
		"liquidityUsd": 814498.05,
		"hash": "305fc11428f2b36ef489acd5054ea83afc2f0edd7172fafd10530dae40879c48"
	},
	{
		"id": "685718242d5b",
		"ts": "2026-08-13T21:40:44.401Z",
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
		"liquidityUsd": 26908985.68,
		"hash": "685718242d5bf22aa5d6e5e99f572bd9e02567937147006b90e18a733bfdb47d"
	},
	{
		"id": "3c98fd3c2449",
		"ts": "2026-08-13T21:40:44.595Z",
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
		"liquidityUsd": 4207222.8,
		"hash": "3c98fd3c24496a696ada1e9fb7bb8eae53326424b6b9377cee8ecc00be290d34"
	},
	{
		"id": "885293693467",
		"ts": "2026-08-13T21:40:44.799Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 899586.65,
		"hash": "8852936934678e663b4f587c6ee0b7fa171cd6b7070689143023333d5b7b484d"
	},
	{
		"id": "a4c59f65d356",
		"ts": "2026-08-13T21:40:44.998Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26908985.68,
		"hash": "a4c59f65d356748d73fc3a4cd717ff44a2b58a6ef55081ad90abef65ef392e29"
	},
	{
		"id": "03bd4707fa91",
		"ts": "2026-08-13T21:40:45.204Z",
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
		"liquidityUsd": 4102880.23,
		"hash": "03bd4707fa91eec56387f5f8c77cbcafe25e6b6fcd71fdd8de68af83bbd1f0c7"
	},
	{
		"id": "c0ba5acb13d3",
		"ts": "2026-08-13T21:40:45.424Z",
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
		"liquidityUsd": 913944.6,
		"hash": "c0ba5acb13d381a9bc6e51233fed7fdf48460223f937b505afc2fda2fddb18dc"
	},
	{
		"id": "92bef5b12b93",
		"ts": "2026-08-13T21:40:45.632Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 656094.04,
		"hash": "92bef5b12b93b9af10ceeba3aa8fa14602c341f24925f57e6f52cb0a8375f15e"
	},
	{
		"id": "b14abfa7bd25",
		"ts": "2026-08-13T21:40:45.832Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247839.29,
		"hash": "b14abfa7bd2595f9977b925d23a401a24a3303240ea3196b06270f471e94b821"
	},
	{
		"id": "86eabea334c5",
		"ts": "2026-08-13T21:40:46.022Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 728572.67,
		"hash": "86eabea334c572b661567561de6557a91d0fa5d227ee9a7e66ba434ef7e1f1ae"
	},
	{
		"id": "061c67dca829",
		"ts": "2026-08-13T21:40:46.211Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4546185.24,
		"hash": "061c67dca829321af50f4171c911d2512434289d03d28055c2d6e91f4c3456bd"
	},
	{
		"id": "297ee63cab9c",
		"ts": "2026-08-13T21:40:46.420Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2315953.94,
		"hash": "297ee63cab9c5c480b551c55f4ddc94d1e1560d8a87f1bdd661fcb1785806050"
	},
	{
		"id": "74ba8285eabc",
		"ts": "2026-08-13T21:40:46.631Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1616995.25,
		"hash": "74ba8285eabc4ce5533da71e237a16ad6c1b825c4e54431edded7ad61e108620"
	},
	{
		"id": "123ccd02b3e1",
		"ts": "2026-08-13T21:40:46.824Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84980.19,
		"hash": "123ccd02b3e1bf373afc73560439f9b305f576c9c0146b58cf641c01fae78730"
	},
	{
		"id": "b9ba32e73ba1",
		"ts": "2026-08-13T21:40:47.030Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9347578.17,
		"hash": "b9ba32e73ba118c1241bd4c5a6b94bd5e246747ddc54ef877e08333d3b80711c"
	},
	{
		"id": "23ea264117f8",
		"ts": "2026-08-13T21:40:47.219Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100948.8,
		"hash": "23ea264117f8d9f12591861e214ab68209017ed250bc7e70e1bad11c5bcfb38c"
	},
	{
		"id": "ac83b5a6a445",
		"ts": "2026-08-13T20:42:17.511Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111711601.5,
		"hash": "ac83b5a6a445f5c4c71b73c07c9ac30388489ea237de2f62cd79b5aa12e2409a"
	},
	{
		"id": "069e7f3e8d21",
		"ts": "2026-08-13T20:42:17.839Z",
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
		"liquidityUsd": 17427595.71,
		"hash": "069e7f3e8d219569d998ccbceb3248636612d0751d389730bd668e95b6607bb7"
	},
	{
		"id": "900cd30c0a56",
		"ts": "2026-08-13T20:42:18.037Z",
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
		"liquidityUsd": 813832.41,
		"hash": "900cd30c0a569f3fc25198c26011270514ea9113e51e7d114e769528b9084f06"
	},
	{
		"id": "05b6deed616d",
		"ts": "2026-08-13T20:42:18.420Z",
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
		"liquidityUsd": 26895600.11,
		"hash": "05b6deed616df8e093c7267cc3d73aaea724d3f49d77244b7648120a3ebd88c8"
	},
	{
		"id": "48e2c3e2f7d8",
		"ts": "2026-08-13T20:42:18.617Z",
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
		"liquidityUsd": 4218598.46,
		"hash": "48e2c3e2f7d8fefefb50e1357af66ea2a045d3ba23bfe025b16a4b7e34455d9f"
	},
	{
		"id": "9c0226e32a43",
		"ts": "2026-08-13T20:42:18.811Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896794.23,
		"hash": "9c0226e32a437166d65028bbaca29fd3d8cb98947120d1f6c574254a1e03f27f"
	},
	{
		"id": "7c9d43167611",
		"ts": "2026-08-13T20:42:19.008Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26895600.11,
		"hash": "7c9d4316761196431ffa3c325e63a2bcf4c724979a3c96e8c6175a5b1307b5a5"
	},
	{
		"id": "89a91d099a91",
		"ts": "2026-08-13T20:42:19.219Z",
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
		"liquidityUsd": 4090203.54,
		"hash": "89a91d099a91a73a80ef2e002234382217341b9579a74f2d2090e3a914036ea7"
	},
	{
		"id": "e1f71eeb181f",
		"ts": "2026-08-13T20:42:19.420Z",
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
		"liquidityUsd": 909504.17,
		"hash": "e1f71eeb181f6b91afa53650da925959b297eca14acd2da85e7633e1bbc74f6f"
	},
	{
		"id": "66ca8a2930c6",
		"ts": "2026-08-13T20:42:19.601Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"owner_can_change_balance",
			"has_blacklist",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 654441.45,
		"hash": "66ca8a2930c68f40c4f038410f5186c83b284da10df2a04d5a2859ccc5984a44"
	},
	{
		"id": "46291ec55772",
		"ts": "2026-08-13T20:42:19.804Z",
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
		"liquidityUsd": 247368.18,
		"hash": "46291ec5577276f58cf9df6c625ea7625c43947953e4efded8844c70cd36458f"
	},
	{
		"id": "197253add7e7",
		"ts": "2026-08-13T20:42:20.002Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 730064.71,
		"hash": "197253add7e770d8e40664bc80c7a040a39df49cb29584ee4857a075cfe4fedc"
	},
	{
		"id": "14482bf7861c",
		"ts": "2026-08-13T20:42:20.209Z",
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
		"liquidityUsd": 4478185.11,
		"hash": "14482bf7861cce5381094472c719904c1fca3f35ac128b3014f553f3ed02d70e"
	},
	{
		"id": "458a66d52109",
		"ts": "2026-08-13T20:42:20.461Z",
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
		"liquidityUsd": 2316551.09,
		"hash": "458a66d5210937cc0cf1799dabdb6ed35d0bf7fd7a7f4921d39b5ca0a1411022"
	},
	{
		"id": "9ba77f37f1f6",
		"ts": "2026-08-13T20:42:20.659Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1624628.42,
		"hash": "9ba77f37f1f6ad0b5d3976178e584e7d9aebb5c00d9d0cc0b04bb230062e8406"
	},
	{
		"id": "5118318cd951",
		"ts": "2026-08-13T20:42:20.838Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 85522.47,
		"hash": "5118318cd95168318e34699f2532c6eb253de1cdd034b6003873ef8464af6ca1"
	},
	{
		"id": "949bd2497620",
		"ts": "2026-08-13T20:42:21.037Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9345784.22,
		"hash": "949bd2497620d23e2b12a22f2c3c55da27f9046634ea93356ec44bd0c7972976"
	},
	{
		"id": "3e67646b012d",
		"ts": "2026-08-13T20:42:21.233Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100983.31,
		"hash": "3e67646b012d43d5c24fee575517b0715273069be006d87995a3c31744bef6d6"
	},
	{
		"id": "e22db644de09",
		"ts": "2026-08-13T20:42:21.428Z",
		"symbol": "KellyClaude",
		"token": "0x50D2280441372486BeecdD328c1854743EBaCb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 778744.89,
		"hash": "e22db644de099e20ea6c6e33a4ae182be35be65d0407d9dd784b2b2090ce45a1"
	},
	{
		"id": "07b161918921",
		"ts": "2026-08-13T19:56:45.027Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111706411.82,
		"hash": "07b161918921b9cb9a18e9839e129c9e369aaee2f70903851c622579558c6c60"
	},
	{
		"id": "87ddab77f673",
		"ts": "2026-08-13T19:56:45.445Z",
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
		"liquidityUsd": 17173062.99,
		"hash": "87ddab77f67314f67f73b4260dc997c9a34e54019a2c02feaf03971b2a650089"
	},
	{
		"id": "3ce41995f892",
		"ts": "2026-08-13T19:56:45.678Z",
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
		"liquidityUsd": 810311.55,
		"hash": "3ce41995f89216a53c0cc894a3a52467ed2ba00fc9432053ef660b9cae32b581"
	},
	{
		"id": "71a1f75bc31e",
		"ts": "2026-08-13T19:56:45.906Z",
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
		"liquidityUsd": 26848190.22,
		"hash": "71a1f75bc31e2fd3fee48582442e9d09c572c62c47bfb75f2dbed3270f0969dd"
	},
	{
		"id": "3a98de7a8060",
		"ts": "2026-08-13T19:56:46.132Z",
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
		"liquidityUsd": 4218598.46,
		"hash": "3a98de7a806030845461a4efe8252c8e186ecffd8601396d9e62ff6102d059d3"
	},
	{
		"id": "f86106298d38",
		"ts": "2026-08-13T19:56:46.356Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 899587.87,
		"hash": "f86106298d3822e0450b75b873d344a30a0445735fa910baa739ab9f0958e51a"
	},
	{
		"id": "21ac5ff51ad9",
		"ts": "2026-08-13T19:56:46.643Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4441689.49,
		"hash": "21ac5ff51ad9ba4d45c7be791fc5c833194972b64b08b3bab9526767d3c670dc"
	},
	{
		"id": "9ae864be77d9",
		"ts": "2026-08-13T19:56:46.869Z",
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
		"liquidityUsd": 3792890.91,
		"hash": "9ae864be77d95e4f285cf7dc023b6d3e5333a2625bda38a0d5b0cdfb818e891c"
	},
	{
		"id": "5c76b76bf389",
		"ts": "2026-08-13T19:56:47.099Z",
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
		"liquidityUsd": 909685.05,
		"hash": "5c76b76bf3892888a6491828bbb8476534cfaebfb3da5f4d91397a14e4f0be68"
	},
	{
		"id": "666b3b9daa17",
		"ts": "2026-08-13T19:56:47.323Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4441689.49,
		"hash": "666b3b9daa17646c4b5309c5739df3b4fb17371f6d93363e5b966d927ee47fed"
	},
	{
		"id": "5facd1f30de1",
		"ts": "2026-08-13T19:56:47.537Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 647805.96,
		"hash": "5facd1f30de115b88d5ae51a92cd0cf857226bf02d0124cee0f3596b76092b58"
	},
	{
		"id": "c70793e52b5e",
		"ts": "2026-08-13T19:56:47.745Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 738392.92,
		"hash": "c70793e52b5e725917e6af8459608961fd28762ea320e788402d9b208af5c43e"
	},
	{
		"id": "9edab16e2c80",
		"ts": "2026-08-13T19:56:47.956Z",
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
		"liquidityUsd": 246760.31,
		"hash": "9edab16e2c805ca06c13ba00c5149f887f70af6947d2131909beb5b2f474b795"
	},
	{
		"id": "5e82a19f695f",
		"ts": "2026-08-13T19:56:48.164Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1628225.86,
		"hash": "5e82a19f695fe7092e98a387136d77435a16d03e188f8842389c5f287f445dde"
	},
	{
		"id": "ec4258a2696c",
		"ts": "2026-08-13T19:56:48.374Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2305205.94,
		"hash": "ec4258a2696c3f947b85261140b0e0ebc362b9548a9da7f4813fea35fab2c4ec"
	},
	{
		"id": "dcdc28feb7b3",
		"ts": "2026-08-13T19:56:48.584Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 87113.26,
		"hash": "dcdc28feb7b353bee966abb8e33492845792ef6684f7e1310c9ca8ff46f4dbd5"
	},
	{
		"id": "a98aa553b03c",
		"ts": "2026-08-13T19:56:48.793Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9307167.19,
		"hash": "a98aa553b03c61896829061a40266eeaae3302923a988e240b1fe31109f40326"
	},
	{
		"id": "0d0befc5081f",
		"ts": "2026-08-13T19:56:49.002Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100983.31,
		"hash": "0d0befc5081f897b9f41111ac32fea0806b3f369c37cf9cccb318fe80e2aa777"
	},
	{
		"id": "8e979809d245",
		"ts": "2026-08-13T19:56:49.208Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 478777.07,
		"hash": "8e979809d24505d4614160d498aca55f5fc96300a4657f7524e8637baae9e82d"
	},
	{
		"id": "dc5ec526eb9f",
		"ts": "2026-08-13T18:58:21.327Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111468099.56,
		"hash": "dc5ec526eb9f4f2ceccdfe0aa43548e1a5796dec3a0bc993c7eaa27098fc5f6d"
	},
	{
		"id": "94fd68645fb9",
		"ts": "2026-08-13T18:58:21.595Z",
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
		"liquidityUsd": 14097117.76,
		"hash": "94fd68645fb97da8f2b186e78cdc36373ec87c5b41ff64988399df80759ff1d4"
	},
	{
		"id": "89da01b79802",
		"ts": "2026-08-13T18:58:21.836Z",
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
		"liquidityUsd": 806928.62,
		"hash": "89da01b7980201496fc4f644cb592e98cfa61b6c269306461f9133064b2a6b06"
	},
	{
		"id": "7cca8ae37f0c",
		"ts": "2026-08-13T18:58:22.069Z",
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
		"liquidityUsd": 26833523.53,
		"hash": "7cca8ae37f0c1aeb7768db749027d242387b45ad876c7e7b8c103f47de8d97af"
	},
	{
		"id": "d258788ec05b",
		"ts": "2026-08-13T18:58:23.740Z",
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
		"liquidityUsd": 4183140.31,
		"hash": "d258788ec05b5f18a67673bd25e398d70330932b6faefefecddcb862018980ab"
	},
	{
		"id": "86f6028573c7",
		"ts": "2026-08-13T18:58:23.996Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896034.07,
		"hash": "86f6028573c7cba0d2b5b70d756460b838194c807790592e80d46b293fb0fb1a"
	},
	{
		"id": "0d8816a9427a",
		"ts": "2026-08-13T18:58:24.248Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4475518.87,
		"hash": "0d8816a9427a0f843ac3cd4104c6403c11146d1202f4dffe2fd9acaa778b0b87"
	},
	{
		"id": "dc8fb594734f",
		"ts": "2026-08-13T18:58:24.487Z",
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
		"liquidityUsd": 4083290.16,
		"hash": "dc8fb594734f18151cf04de0e353109c119009009ae7572014ec4835abe32164"
	},
	{
		"id": "d0193aa33f10",
		"ts": "2026-08-13T18:58:24.721Z",
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
		"liquidityUsd": 908111.64,
		"hash": "d0193aa33f10e0a0c1965e6defc51b21e1f566d3d83f42b26bec31156a22aaf0"
	},
	{
		"id": "acf55016088f",
		"ts": "2026-08-13T18:58:24.971Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4480803.49,
		"hash": "acf55016088fa10bcf2c316e6e89cbe5d37612e0d7212786d8bd49d6746513fa"
	},
	{
		"id": "bd9a9225ae0a",
		"ts": "2026-08-13T18:58:25.193Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 735712.39,
		"hash": "bd9a9225ae0a13e97c079f92e6d37b12283bdbdb019758b9110eaed2a70c093e"
	},
	{
		"id": "fe3e81f49bad",
		"ts": "2026-08-13T18:58:26.261Z",
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
		"liquidityUsd": 246882.78,
		"hash": "fe3e81f49badcaf76566ea11acb066f6d52ec72f4f4a19fc534513d515a9b54f"
	},
	{
		"id": "95b10b44a025",
		"ts": "2026-08-13T18:58:26.475Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 639918.9,
		"hash": "95b10b44a025221c1ad38ba52c673f9a13602bc1cfe17c1c5eae84149865910c"
	},
	{
		"id": "457039589d11",
		"ts": "2026-08-13T18:58:26.740Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1629190.16,
		"hash": "457039589d1197564ab4e23145996d6ca3feb296f21938bfcbb1d0e1c860117c"
	},
	{
		"id": "fce5493b903e",
		"ts": "2026-08-13T18:58:27.026Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2321495.16,
		"hash": "fce5493b903e9c9d3311f1ecdd702439f76feb36529e0a6e62eed48644edeae8"
	},
	{
		"id": "bafa0cbd95dd",
		"ts": "2026-08-13T18:58:27.240Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84135.9,
		"hash": "bafa0cbd95ddbd62e7da18d6d7fb1814cae84a476e5c918fc0c4f586a5ef1a53"
	},
	{
		"id": "6897fe25b04c",
		"ts": "2026-08-13T18:58:27.478Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9417083.96,
		"hash": "6897fe25b04cc1402a17edd10f7516ef7838fbb279a472e3b5842b1bfe64a153"
	},
	{
		"id": "a8f77ebfab1f",
		"ts": "2026-08-13T18:58:27.692Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 99822.64,
		"hash": "a8f77ebfab1f1aab394c2b1778f49506fb159b3ad7ab02c6533326339a2071a5"
	},
	{
		"id": "a2fe5f8d1c28",
		"ts": "2026-08-13T18:58:27.908Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 478421.77,
		"hash": "a2fe5f8d1c28e3614adbe065fa816763dca8bdce326c6a90fef88e7a3b2b4e7f"
	},
	{
		"id": "07e7385211aa",
		"ts": "2026-08-13T17:54:51.646Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111239695.19,
		"hash": "07e7385211aa05aeb02c71e06727b4189e3d9dcbf82d094230afb18fac08d090"
	},
	{
		"id": "796a2da4ed76",
		"ts": "2026-08-13T17:54:51.926Z",
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
		"liquidityUsd": 17571218.09,
		"hash": "796a2da4ed76abb644a37076f5c592a57c3aaa1b81f02375a2d31b0ea2558160"
	},
	{
		"id": "0a1aafd2cf7a",
		"ts": "2026-08-13T17:54:52.161Z",
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
		"liquidityUsd": 801386.65,
		"hash": "0a1aafd2cf7adeaf478b16d86959921cc2fc38fb228d06019e91511fb0eaf647"
	},
	{
		"id": "023f6eaddd4f",
		"ts": "2026-08-13T17:54:52.393Z",
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
		"liquidityUsd": 26835394.15,
		"hash": "023f6eaddd4f1a84649a7487ce5a8add041b03561a140a7c386c410b3464be80"
	},
	{
		"id": "e2be55959989",
		"ts": "2026-08-13T17:54:52.648Z",
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
		"liquidityUsd": 4176683.26,
		"hash": "e2be559599890b0d6340c727f855175eae89d9c265c3a70c96ddd24b7985586a"
	},
	{
		"id": "4c81a6e0e4f1",
		"ts": "2026-08-13T17:54:52.878Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896865.33,
		"hash": "4c81a6e0e4f14e4707cff3a44862f9c33710978afb58d9d893edaeedace87384"
	},
	{
		"id": "56cf9803ab0b",
		"ts": "2026-08-13T17:54:53.121Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4615478.96,
		"hash": "56cf9803ab0b6bc0a02829a5a82687d050d7bbbd303ef8d7059570e022f04624"
	},
	{
		"id": "e94db3f368c0",
		"ts": "2026-08-13T17:54:53.360Z",
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
		"liquidityUsd": 4064408.44,
		"hash": "e94db3f368c0249d4fd4550c815305ab006128760203526b051a76c21fb49210"
	},
	{
		"id": "0fa201322007",
		"ts": "2026-08-13T17:54:53.590Z",
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
		"liquidityUsd": 907166.24,
		"hash": "0fa2013220075a75fdc7c4811243e06ff4766c8572d929af2c6434edbfc66ebc"
	},
	{
		"id": "5aacbb66593c",
		"ts": "2026-08-13T17:54:53.819Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4615379.65,
		"hash": "5aacbb66593cf007e4e8b9093af6726dfa4cc440458758d9e73c4f5aaaae02a2"
	},
	{
		"id": "46a47081e33a",
		"ts": "2026-08-13T17:54:54.036Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 736407.9,
		"hash": "46a47081e33a04d7cce5d6cc294477a8a2851c36dc9ee38829c9204acdd0d978"
	},
	{
		"id": "259cbff11383",
		"ts": "2026-08-13T17:54:54.253Z",
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
		"liquidityUsd": 246463.8,
		"hash": "259cbff11383d65f7010004e862fb36bc80507488e1ce87e8bb867d0c291bfeb"
	},
	{
		"id": "d7d7903bd095",
		"ts": "2026-08-13T17:54:54.470Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 661031.49,
		"hash": "d7d7903bd095a92862a6f522847ce26af1edfeb8268f3b6115700334999af5ad"
	},
	{
		"id": "6798cd38abd4",
		"ts": "2026-08-13T17:54:54.684Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2308319.57,
		"hash": "6798cd38abd4cad1f29bef74d0c7a54a81dc5c765bc6040a21128d8eb642bc63"
	},
	{
		"id": "ba643cb6ca07",
		"ts": "2026-08-13T17:54:54.899Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1668283.01,
		"hash": "ba643cb6ca07e91de582b3975dca5a34a1c18d90d0d78187c8310e82dc1e1112"
	},
	{
		"id": "aca3ff3f8dd4",
		"ts": "2026-08-13T17:54:55.116Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 86610.37,
		"hash": "aca3ff3f8dd47472d35f2479cd15e3f783f961b0fd980e658bb909a5a8ca1fe8"
	},
	{
		"id": "54dd82855121",
		"ts": "2026-08-13T17:54:55.331Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9329640.16,
		"hash": "54dd828551211985dadef21f06fb2db7b005ece1d61354d86286a0cba6099fb1"
	},
	{
		"id": "f349f6a4e89a",
		"ts": "2026-08-13T17:54:55.546Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 99125.89,
		"hash": "f349f6a4e89aa20e5b133c9db113278c98c416a2c42202389edb006bec85d087"
	},
	{
		"id": "724adbd3846a",
		"ts": "2026-08-13T17:54:55.762Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 478226.54,
		"hash": "724adbd3846a89e401a7e28a20f21004fd21a8f7c92d48801de5d74357f0c86a"
	},
	{
		"id": "3d6632be1d65",
		"ts": "2026-08-13T16:54:19.855Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111103511.92,
		"hash": "3d6632be1d653ca15c6b4a08eef0bef5ecf5cd0f1b0bdacadec0bbaca84ffd4d"
	},
	{
		"id": "c0c174bb4143",
		"ts": "2026-08-13T16:54:20.113Z",
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
		"liquidityUsd": 15928402.79,
		"hash": "c0c174bb4143e06dc88ab07017af9e8be0f2bad38b3f7e4351e488b4513ca462"
	},
	{
		"id": "b5e356948e44",
		"ts": "2026-08-13T16:54:20.362Z",
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
		"liquidityUsd": 794703.03,
		"hash": "b5e356948e44fd210e53e9175d7daafb98fe2e1b75997645bc654b737c86c249"
	},
	{
		"id": "c49c223727bc",
		"ts": "2026-08-13T16:54:20.598Z",
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
		"liquidityUsd": 26802390.07,
		"hash": "c49c223727bcd3ff74f28735588aca14ce4e3ebeaa3d2c8b0c411079b572c476"
	},
	{
		"id": "454b0fa67543",
		"ts": "2026-08-13T16:54:20.840Z",
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
		"liquidityUsd": 4187637.83,
		"hash": "454b0fa6754373031f5b3e048894214fbc6d15c053b950fe1626803bb7c7bec3"
	},
	{
		"id": "fdaa420adefb",
		"ts": "2026-08-13T16:54:21.065Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 892920.67,
		"hash": "fdaa420adefb45e24e47cb942b47598ddf8c73e0233aa54be2b9240943036c8f"
	},
	{
		"id": "40a943127208",
		"ts": "2026-08-13T16:54:21.302Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4583307.58,
		"hash": "40a943127208932b9e209fd16f8f01fbe986e8de731b3cf68053d4dfa71c8f1f"
	},
	{
		"id": "8dc1531970ca",
		"ts": "2026-08-13T16:54:21.749Z",
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
		"liquidityUsd": 4056288.1,
		"hash": "8dc1531970caff8a0532c14a23f5027f3c99bbe08f2ea9ac35bb47bf300851fa"
	},
	{
		"id": "47694339a6ea",
		"ts": "2026-08-13T16:54:21.979Z",
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
		"liquidityUsd": 915822.62,
		"hash": "47694339a6eab830738ab0cdc08677691c4c588b8c5b1330fd25738a19e88bc5"
	},
	{
		"id": "30ed6b83941c",
		"ts": "2026-08-13T16:54:22.213Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4582530.98,
		"hash": "30ed6b83941c7cd544e41120ff042403a70c59bae744aa4008a36c0ef1be5fe1"
	},
	{
		"id": "92d0ae7e381c",
		"ts": "2026-08-13T16:54:22.443Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2292888.91,
		"hash": "92d0ae7e381ccb551530ddf501a3c7b963bf480ee2c366db249ab1c060dbeefc"
	},
	{
		"id": "a087bf722510",
		"ts": "2026-08-13T16:54:22.656Z",
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
		"liquidityUsd": 244927.82,
		"hash": "a087bf72251070a43a9b0777a8373f1e4be586d66e8df715970be152289c5d84"
	},
	{
		"id": "388b5eff4aae",
		"ts": "2026-08-13T16:54:22.888Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1656735.84,
		"hash": "388b5eff4aae90bc3d27cfb4dafdde405359a0bef45c7f810fe349a83386e309"
	},
	{
		"id": "440069e69e1e",
		"ts": "2026-08-13T16:54:23.118Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 653461.97,
		"hash": "440069e69e1e28f5edcbb76337cec46b088ad1b1ce3f07eaa9627bb8631deda2"
	},
	{
		"id": "6580e3d5eb71",
		"ts": "2026-08-13T16:54:23.347Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 736407.9,
		"hash": "6580e3d5eb71d792d0a9f427d0dc46979161f9e72b554606438b2830fad41d29"
	},
	{
		"id": "b9063971d5c7",
		"ts": "2026-08-13T16:54:23.568Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 86350.72,
		"hash": "b9063971d5c7846a8b6b119b6437b11cd5a1f205dcdb2a0fce5e90656a58604d"
	},
	{
		"id": "ebc82cdab9b6",
		"ts": "2026-08-13T16:54:23.796Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9254051.43,
		"hash": "ebc82cdab9b62fe3316d8dbb8b8c2f968622eb22948ed28f0d57c1e751fbd5bd"
	},
	{
		"id": "a21b15898ce2",
		"ts": "2026-08-13T16:54:24.008Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 98393.8,
		"hash": "a21b15898ce2e08e94ebf79793486ad170e6128a11b36626d82c4a98970617aa"
	},
	{
		"id": "6e72c52f13f2",
		"ts": "2026-08-13T15:55:55.862Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111661399.05,
		"hash": "6e72c52f13f21361a63eecfc34b995753ab8d97e3d226e6506294d324a571258"
	},
	{
		"id": "628bb4655475",
		"ts": "2026-08-13T15:55:56.061Z",
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
		"liquidityUsd": 18545638.47,
		"hash": "628bb4655475ff08bd5a825e376fa5f06642121dc4d161f47b65d1a048ebdd2d"
	},
	{
		"id": "b51db2f2a778",
		"ts": "2026-08-13T15:55:56.264Z",
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
		"liquidityUsd": 786598.31,
		"hash": "b51db2f2a77806fd7ab5d0c24baefbb7bf31f2127f1811859d7bc1ded9b570e3"
	},
	{
		"id": "ebfc5e7d5845",
		"ts": "2026-08-13T15:55:56.460Z",
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
		"liquidityUsd": 26925957.51,
		"hash": "ebfc5e7d5845c5c2781186f721280b69e43c226f18b3368338fb3717ab084b9d"
	},
	{
		"id": "559b46debcae",
		"ts": "2026-08-13T15:55:56.847Z",
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
		"liquidityUsd": 4253099.53,
		"hash": "559b46debcaebde3c2f8d19339d6253457211ce07e19937e1aa4e6d289eb35df"
	},
	{
		"id": "5f47532dbc72",
		"ts": "2026-08-13T15:55:57.039Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900093.48,
		"hash": "5f47532dbc720e3696ab4357345d608607e54dc6c1c748437a481045cf6af59d"
	},
	{
		"id": "df9666061c31",
		"ts": "2026-08-13T15:55:57.239Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4524697.72,
		"hash": "df9666061c31fd99d29008eaa6d71540e0e14f9055cce610aa378293dce19dab"
	},
	{
		"id": "7eaa6abd68aa",
		"ts": "2026-08-13T15:55:57.450Z",
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
		"liquidityUsd": 4091297.81,
		"hash": "7eaa6abd68aa2fc5c69a4fc1eb9187485c0e9a2a082ad3c667474d76b9987a3c"
	},
	{
		"id": "b9a47262957d",
		"ts": "2026-08-13T15:55:57.648Z",
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
		"liquidityUsd": 917300.62,
		"hash": "b9a47262957d67ec18cd2bfdb9d252ae03b62815260c60c766fffba177fc0176"
	},
	{
		"id": "fe999c4b9250",
		"ts": "2026-08-13T15:55:57.847Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4521510.59,
		"hash": "fe999c4b9250a4eecda21b3680b2cc48f3277e4361e0b815f13e87252224bb16"
	},
	{
		"id": "1cd33ec58b68",
		"ts": "2026-08-13T15:55:58.037Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2340701.6,
		"hash": "1cd33ec58b68301150974601f0e4a3d876d7136426532f96edcf7c08afd4e17f"
	},
	{
		"id": "143c4dcc323d",
		"ts": "2026-08-13T15:55:58.239Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1667674.08,
		"hash": "143c4dcc323d3469110e516a90bb24dc7d34fd5fc0032bcfb7e1464b924c41a9"
	},
	{
		"id": "ea2652f1324c",
		"ts": "2026-08-13T15:55:58.438Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 753473.64,
		"hash": "ea2652f1324c656e81a84a1f012dbc695fdb180db3d41c166ad7267a267a9c13"
	},
	{
		"id": "3311de3df746",
		"ts": "2026-08-13T15:55:58.645Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 651458.23,
		"hash": "3311de3df7467ddcf6b1ac1cbad0a7aa35a26a7042b0aa31319cd4b8392f1df3"
	},
	{
		"id": "32c9ef49cb29",
		"ts": "2026-08-13T15:55:58.839Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84693.31,
		"hash": "32c9ef49cb295f9c298e6746f07c6f1188bf333189a87c62369a7f3c936a08cd"
	},
	{
		"id": "eb683d111b4d",
		"ts": "2026-08-13T15:55:59.043Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9380187.84,
		"hash": "eb683d111b4d2405bd6138ead7fcfbfb1aafd086313c49d31a88c915dfb97862"
	},
	{
		"id": "ae0ce2469bf5",
		"ts": "2026-08-13T15:55:59.235Z",
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
		"liquidityUsd": 243502.74,
		"hash": "ae0ce2469bf5f3ffa31eb9c9a4ae4fb1e666135acc330f4b4efb1a78543a81da"
	},
	{
		"id": "dd118f43f6d9",
		"ts": "2026-08-13T15:55:59.434Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 102011.28,
		"hash": "dd118f43f6d939fc8fa7d1c8a29c8236a41d471a377254beb6fbe1aee903a43b"
	},
	{
		"id": "978f9949bd8c",
		"ts": "2026-08-13T14:53:02.769Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111773578.18,
		"hash": "978f9949bd8c87777e17be3620296ac464e45baf964a6098aa2ce2c4f7cfffa3"
	},
	{
		"id": "15c54095ea12",
		"ts": "2026-08-13T14:53:03.132Z",
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
		"liquidityUsd": 17485017.89,
		"hash": "15c54095ea12ba8fb4dac5db5e035f10a0321f28240505cc44c2cd6102e0fef4"
	},
	{
		"id": "85acce308abe",
		"ts": "2026-08-13T14:53:03.328Z",
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
		"liquidityUsd": 848861.83,
		"hash": "85acce308abe475f8b1d8d6e7d2ae167e6f3674083297c4280cca618f76bda2d"
	},
	{
		"id": "e689fd6bf021",
		"ts": "2026-08-13T14:53:03.523Z",
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
		"liquidityUsd": 26990653.24,
		"hash": "e689fd6bf021dc7ce62608e89a0904a62b64ecf0df4aeb92eeddd8848984b847"
	},
	{
		"id": "57123c81d876",
		"ts": "2026-08-13T14:53:03.894Z",
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
		"liquidityUsd": 4272403.87,
		"hash": "57123c81d8760abb847317f1f5ae8dd775717acd515c47fb7a22e4fe978b2252"
	},
	{
		"id": "152365bad2bc",
		"ts": "2026-08-13T14:53:04.095Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 907905.55,
		"hash": "152365bad2bc22f2d5164be94ccccf96ef9c756b812a04c3361bc63ee558c4fb"
	},
	{
		"id": "703300c69fb3",
		"ts": "2026-08-13T14:53:04.308Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4531565.11,
		"hash": "703300c69fb3e9270ca4d062d3cbec5b2ee1165b8b520c7aa192cd50aa2b84c5"
	},
	{
		"id": "a1dec158e944",
		"ts": "2026-08-13T14:53:04.563Z",
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
		"liquidityUsd": 4100486.8,
		"hash": "a1dec158e9442d40dc843cc243dcf27fbf24dc8003262ae369429e90b7eaf2e5"
	},
	{
		"id": "f76218de1b7d",
		"ts": "2026-08-13T14:53:04.752Z",
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
		"liquidityUsd": 920433.78,
		"hash": "f76218de1b7d7f0c4b8099482c3d791608b93b4e3d2e5c9450a56e223e6a0675"
	},
	{
		"id": "4277daa61a38",
		"ts": "2026-08-13T14:53:04.946Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4510873.91,
		"hash": "4277daa61a385c0f7601bb77e16680d50833ea07995fce9ed6154f49f46b9ef6"
	},
	{
		"id": "e66eefbbb2e1",
		"ts": "2026-08-13T14:53:05.132Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2363475.9,
		"hash": "e66eefbbb2e10beaf872599cc4c28174ed72ada00bd29fcc6649947efab1865a"
	},
	{
		"id": "a61caa635754",
		"ts": "2026-08-13T14:53:05.314Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1642174.21,
		"hash": "a61caa6357548dd1522db8c83d05b4e78a4a5b5a8b333b31382a13fa7212d7a1"
	},
	{
		"id": "4e163536aea9",
		"ts": "2026-08-13T14:53:05.498Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 765455.75,
		"hash": "4e163536aea9860969ba91f24b1d3532141c0dbcafc19299ed2cbac4e82e4e1c"
	},
	{
		"id": "b690ab387df6",
		"ts": "2026-08-13T14:53:05.694Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9424440.05,
		"hash": "b690ab387df6f2b3aa1e397755c2c59d9b242ee7af20532100e5281a8846542c"
	},
	{
		"id": "482fe4ae375d",
		"ts": "2026-08-13T14:53:05.936Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 662623.66,
		"hash": "482fe4ae375d9b85da95562d95e97c77600556c8a52ed1996750278764a1500d"
	},
	{
		"id": "6e75adb890ad",
		"ts": "2026-08-13T14:53:06.160Z",
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
		"liquidityUsd": 244505.99,
		"hash": "6e75adb890ad23e001e23352a5ad1fe9975e7ffe16262e31ec3e41c7962058d2"
	},
	{
		"id": "211192dcf5c0",
		"ts": "2026-08-13T14:53:06.358Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 102265.32,
		"hash": "211192dcf5c02e2b8df05faa27d0698166e7211b581b7cd5c5e29225bb20969b"
	},
	{
		"id": "7b1840888844",
		"ts": "2026-08-13T14:53:06.538Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 86064.76,
		"hash": "7b18408888449eb697c871e34737759020ec9fb68d5041a073725b101a663c0c"
	},
	{
		"id": "dabbe2ab94c0",
		"ts": "2026-08-13T14:53:06.722Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 829161.08,
		"hash": "dabbe2ab94c02735c1d6108cc278ce41257fc61710066f269ab16a78fa53c389"
	},
	{
		"id": "bc46a66274c8",
		"ts": "2026-08-13T13:00:45.499Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112123269.99,
		"hash": "bc46a66274c8e5b587f68eda69c8441e2347a0fa2148a1083c8683f410d35d07"
	},
	{
		"id": "57327812fa94",
		"ts": "2026-08-13T13:00:45.933Z",
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
		"liquidityUsd": 18859732.53,
		"hash": "57327812fa940f1a94e2ab87a39d0d0c6729e5a6aa674d116e11f9818db7664c"
	},
	{
		"id": "6ba48f745124",
		"ts": "2026-08-13T13:00:46.167Z",
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
		"liquidityUsd": 857981.81,
		"hash": "6ba48f745124fed068fb002ace742b25660090c2c2ec64b43d76481dde483d68"
	},
	{
		"id": "310b44a101d2",
		"ts": "2026-08-13T13:00:46.648Z",
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
		"liquidityUsd": 26794326.9,
		"hash": "310b44a101d2b772f9a19c5d85e1e4c886a4b70a80f7680907b0cb6c373db59b"
	},
	{
		"id": "d980ea9ed3f2",
		"ts": "2026-08-13T13:00:46.903Z",
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
		"liquidityUsd": 4231415.56,
		"hash": "d980ea9ed3f2b97ae8c187ac56f5015ab2251ab9dac1e74a326eadb086455365"
	},
	{
		"id": "40ac9840f10f",
		"ts": "2026-08-13T13:00:47.137Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 898247.82,
		"hash": "40ac9840f10f854321eb517cdaee99756617a5e4ccc1c382c462ca7ab0e7d8fa"
	},
	{
		"id": "41fc1d64623d",
		"ts": "2026-08-13T13:00:47.378Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4478776.32,
		"hash": "41fc1d64623dc0f2ab6311872b68d40e02124b890a9f60560e7f6f0533c5c3a9"
	},
	{
		"id": "1cac0fe40d98",
		"ts": "2026-08-13T13:00:47.623Z",
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
		"liquidityUsd": 4087861.43,
		"hash": "1cac0fe40d98a5031bfd224d39414a7ac2b6801dfdb4cdc662c4460a684ec0bd"
	},
	{
		"id": "6c814569b3f6",
		"ts": "2026-08-13T13:00:47.857Z",
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
		"liquidityUsd": 926813.66,
		"hash": "6c814569b3f69f08ab15126194d88fe1955686e05fa42f61a0dc45fe2afc4930"
	},
	{
		"id": "67099918a2e8",
		"ts": "2026-08-13T13:00:48.084Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4480022.58,
		"hash": "67099918a2e8c28895d9f5626f7a2f3c3b58fa3c7c79248f57d81eb7d1e2480d"
	},
	{
		"id": "13d0e20473a4",
		"ts": "2026-08-13T13:00:48.310Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2338709.7,
		"hash": "13d0e20473a4c758145778b4102e327d97cfd07bf607a01930257755fecf28bc"
	},
	{
		"id": "20e314a964fc",
		"ts": "2026-08-13T13:00:48.526Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1632644.14,
		"hash": "20e314a964fc61ec14261280ca4fd0360b2b48facba3d0c526dd09602340d79b"
	},
	{
		"id": "e64128736fd6",
		"ts": "2026-08-13T13:00:48.739Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 759281.22,
		"hash": "e64128736fd62b1d2db37da1a749abc6559ce4921a5c9e236bd6379f0f9de883"
	},
	{
		"id": "744806774f48",
		"ts": "2026-08-13T13:00:48.956Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1919002.21,
		"hash": "744806774f48d476dd8de2bc7d00a12373679a194f32f38c57387a282a0bb3a9"
	},
	{
		"id": "7f937854a8c4",
		"ts": "2026-08-13T13:00:49.182Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 243916.17,
		"hash": "7f937854a8c43d89e59606e11a1399c6804953cce24f40149421ecb8d2e2620d"
	},
	{
		"id": "8598110a30d1",
		"ts": "2026-08-13T13:00:49.395Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 824153.06,
		"hash": "8598110a30d1430499b0a8869960fb5c0f35d2f02e48059b58646cc504ca373b"
	},
	{
		"id": "37eb878c6c89",
		"ts": "2026-08-13T13:00:49.613Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 481686.33,
		"hash": "37eb878c6c89a88c70109ef76331a26ca7dfc3a8b6a9c446bbce93c51b9766c0"
	},
	{
		"id": "67687b939438",
		"ts": "2026-08-13T13:00:49.850Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 637534.68,
		"hash": "67687b9394384da627cd53938872cf928cc40dbfeef4c8fe8dcc6f6f8caf1fac"
	},
	{
		"id": "a2a581efbbfa",
		"ts": "2026-08-13T13:00:50.062Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 99939.15,
		"hash": "a2a581efbbfa3a9af4d19c2f4440c4a5ddf120d6f17d2394d40352ebbfb895d9"
	},
	{
		"id": "9a1514e8b12c",
		"ts": "2026-08-13T11:05:58.769Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112202811,
		"hash": "9a1514e8b12cf1be1a6afa3115e02e59c5ce20610945b4282db71322957f852c"
	},
	{
		"id": "159bf51295ad",
		"ts": "2026-08-13T11:05:59.238Z",
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
		"liquidityUsd": 19136465.85,
		"hash": "159bf51295adc25141ec82c9e9fae02517de14cc8df5d65ba676528cd7f9e6ed"
	},
	{
		"id": "ce19a0f81322",
		"ts": "2026-08-13T11:05:59.642Z",
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
		"liquidityUsd": 862638.35,
		"hash": "ce19a0f81322cdb2d42a4aeb0490222ce345de0f20899fdca1a47ce03875e207"
	},
	{
		"id": "f865bccfba16",
		"ts": "2026-08-13T11:05:59.965Z",
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
		"liquidityUsd": 26833895.67,
		"hash": "f865bccfba163917afc40125b967bac8056ba68edc576dbfc24e9a3f530f224c"
	},
	{
		"id": "55dfd9e170e3",
		"ts": "2026-08-13T11:06:00.148Z",
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
		"liquidityUsd": 4228519.96,
		"hash": "55dfd9e170e3c34b46cb9009c0dec0de0568893562dc1e14a22e26a2a21135b0"
	},
	{
		"id": "96d29343b0a9",
		"ts": "2026-08-13T11:06:00.346Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896427.7,
		"hash": "96d29343b0a98bfaa5f9a85d640387392ef5be3d0b2f753b12d3f811dd9bf3b5"
	},
	{
		"id": "f96f35ab1d6e",
		"ts": "2026-08-13T11:06:00.532Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4531064.03,
		"hash": "f96f35ab1d6ecb15eaf8c5facd9d7ac95c4384656ed5f224d2fda312698cb8fc"
	},
	{
		"id": "e018903a4077",
		"ts": "2026-08-13T11:06:00.729Z",
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
		"liquidityUsd": 4076773.56,
		"hash": "e018903a40778db1271edd1aeee46536b462ebfcf55678df4792d7cdc64956c8"
	},
	{
		"id": "439de1e0e5f1",
		"ts": "2026-08-13T11:06:00.920Z",
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
		"liquidityUsd": 947270.45,
		"hash": "439de1e0e5f17b6c06a36963ef8c0c574e5ce8e1a7090c4217c8f8eb2d68a097"
	},
	{
		"id": "e91f358b7a10",
		"ts": "2026-08-13T11:06:01.103Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4538200.08,
		"hash": "e91f358b7a10e9ed1d234d23c12f27193fc83c1fb9543a285a5a67b4d1bf4d2f"
	},
	{
		"id": "f71e5065bac8",
		"ts": "2026-08-13T11:06:01.285Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 247562.65,
		"hash": "f71e5065bac84ec06db600439b2041f0e4e912b4fe9f269b63a9ce016b955135"
	},
	{
		"id": "fa4baa7900d1",
		"ts": "2026-08-13T11:06:01.742Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1708902.29,
		"hash": "fa4baa7900d13b466549186360d2699b9c0cc0a19e200b633e0413a788fc512b"
	},
	{
		"id": "583270c6ab97",
		"ts": "2026-08-13T11:06:01.960Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2329540.85,
		"hash": "583270c6ab97e9aa721e84d2b68269d639fac7e46c315637d8032cccba42d489"
	},
	{
		"id": "1ea690cf64ef",
		"ts": "2026-08-13T11:06:02.174Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 768202.42,
		"hash": "1ea690cf64efc74b85ab3993782fc877b9d12b6267f0fd7fbc3aca39b800e22c"
	},
	{
		"id": "63af63b047af",
		"ts": "2026-08-13T11:06:02.455Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1933968.32,
		"hash": "63af63b047af89251687a4a8df0ccbf45925a73584dfe8adb9b2e98839bcb6bd"
	},
	{
		"id": "f7eff4543dac",
		"ts": "2026-08-13T11:06:02.644Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 821911.1,
		"hash": "f7eff4543dacb50fd1a4375f860078431ef550d4b4fe57df32da21aee0b278a3"
	},
	{
		"id": "3de95c540006",
		"ts": "2026-08-13T11:06:02.832Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 105774.86,
		"hash": "3de95c540006781855aca3cd310a6206997294424d3397e9560309d87c23674f"
	},
	{
		"id": "00ba5faef875",
		"ts": "2026-08-13T11:06:03.015Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9400244.6,
		"hash": "00ba5faef87581393d39806c9581412cc19f4f4397b43eb6825f99ff9f125408"
	},
	{
		"id": "fcf477cf801f",
		"ts": "2026-08-13T10:00:21.421Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112200483.68,
		"hash": "fcf477cf801f4e4d599c9d8f53d39a7603f5f1f35c5a8650b5b003e53f90d209"
	},
	{
		"id": "3431ae680b04",
		"ts": "2026-08-13T10:00:21.619Z",
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
		"liquidityUsd": 19611741.1,
		"hash": "3431ae680b045fb2ac3348cf41df766a79ecd6d356b12b2fa2e012eff1b0015c"
	},
	{
		"id": "fe377e3ede54",
		"ts": "2026-08-13T10:00:21.809Z",
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
		"liquidityUsd": 862638.35,
		"hash": "fe377e3ede5415708a3b13ea4cc0e9b8404c337e2ef80d758f70b310ca48a0a3"
	},
	{
		"id": "4855e3486a89",
		"ts": "2026-08-13T10:00:22.001Z",
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
		"liquidityUsd": 26889186.52,
		"hash": "4855e3486a894707ff4d6767f7e4188168f692d9824c958a51cc0ff194ec463c"
	},
	{
		"id": "faa03d452b14",
		"ts": "2026-08-13T10:00:22.268Z",
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
		"liquidityUsd": 4228519.96,
		"hash": "faa03d452b145ccb62201fa98e4b307773dceac169fcf764a4bc53f5a32fdafb"
	},
	{
		"id": "d5819f95b4ba",
		"ts": "2026-08-13T10:00:22.482Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896427.7,
		"hash": "d5819f95b4ba1ac1e649597caeee455170fb7fda0bf0c4ab839255074d366f41"
	},
	{
		"id": "4d4046bf4767",
		"ts": "2026-08-13T10:00:22.675Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4382916.54,
		"hash": "4d4046bf4767fed772c6ff1642ad6cea1e37b522d415553069f208947ee3b7b8"
	},
	{
		"id": "096e5bb0f371",
		"ts": "2026-08-13T10:00:22.947Z",
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
		"liquidityUsd": 4093269.25,
		"hash": "096e5bb0f37189c49da789a02a3a2733276bab086f774e39e25830173f067533"
	},
	{
		"id": "c960ee081cfb",
		"ts": "2026-08-13T10:00:23.198Z",
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
		"liquidityUsd": 942389.81,
		"hash": "c960ee081cfbca82ed139be3ae52fe355420f4fd32f9b94ae06b7100df2a25a0"
	},
	{
		"id": "62864e16a524",
		"ts": "2026-08-13T10:00:23.386Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4382916.58,
		"hash": "62864e16a524f295e0758a3fb547ac0b3a38956d00ccd72eb35449549037d335"
	},
	{
		"id": "623490fe2fa4",
		"ts": "2026-08-13T10:00:23.730Z",
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
		"liquidityUsd": 249705.73,
		"hash": "623490fe2fa4f9a1b7d71e53f7cbc269a8b7eed46e59719a15518ea65242c488"
	},
	{
		"id": "93aefc7ee100",
		"ts": "2026-08-13T10:00:23.914Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2334882.49,
		"hash": "93aefc7ee1000e9a78b3cabf0fdafb732b7400431b3cb334ad546c42158b0245"
	},
	{
		"id": "fa1bdd1f94fb",
		"ts": "2026-08-13T10:00:24.107Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1622097.7,
		"hash": "fa1bdd1f94fb91dce09e0b14e4dac9ca639b2963b2c431b286bbdd99b12881ed"
	},
	{
		"id": "bfcb71d10c51",
		"ts": "2026-08-13T10:00:24.299Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 769991.34,
		"hash": "bfcb71d10c51323b23040dba531a967943d74da6ba8253c9fe3f85f908664ce9"
	}
]
