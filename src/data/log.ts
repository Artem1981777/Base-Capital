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
	"updatedAt": "2026-07-11T09:24:48.858Z",
	"tokensScored": 2541,
	"verdictsIssued": 2541,
	"safe": 2221,
	"risky": 233,
	"likelyRug": 87,
	"ticks": 161
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "249044f60c5f",
		"ts": "2026-07-11T09:24:45.412Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105216489.2,
		"hash": "249044f60c5f516380cbdff8bcedbdb72c71091737c30879961fd858a8d692b8"
	},
	{
		"id": "5dc8de8c7d5b",
		"ts": "2026-07-11T09:24:45.653Z",
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
		"liquidityUsd": 16162622.63,
		"hash": "5dc8de8c7d5b1a488a2c16d0b3b0dd21f862e82196f21a18274a7b1ca9ee56e9"
	},
	{
		"id": "afaafd7d80c3",
		"ts": "2026-07-11T09:24:45.889Z",
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
		"liquidityUsd": 1365628.48,
		"hash": "afaafd7d80c341298e73c88e1f8016957458060ef37f7bb8865603ad8b0eadd6"
	},
	{
		"id": "29ce29bcc265",
		"ts": "2026-07-11T09:24:46.123Z",
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
		"liquidityUsd": 30991952.47,
		"hash": "29ce29bcc265ebbb4b0d5934439c34f604103829917b429a6cd15e73fae2d5a5"
	},
	{
		"id": "67221a524685",
		"ts": "2026-07-11T09:24:46.366Z",
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
		"liquidityUsd": 4602493.41,
		"hash": "67221a524685bde191fafacb6cf7a2de7eea0f6ba5399952cce7c9ad2f0af047"
	},
	{
		"id": "5d29f4807929",
		"ts": "2026-07-11T09:24:46.594Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 999269.33,
		"hash": "5d29f480792954ed4fa3f07816f448cce01f3b72367243bcf77d1b0d91ebd440"
	},
	{
		"id": "cadcd7cc0425",
		"ts": "2026-07-11T09:24:46.826Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30991952.47,
		"hash": "cadcd7cc042585b4d682c4d593f5fa317f2e719c07a7b167b9fe629dd80f44b2"
	},
	{
		"id": "7d08fc4861a7",
		"ts": "2026-07-11T09:24:47.074Z",
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
		"liquidityUsd": 2501133.85,
		"hash": "7d08fc4861a73f6d3627023e7e2c9c84eef49968197c36e3a1ed4ca4709579b2"
	},
	{
		"id": "1478f8c5a78e",
		"ts": "2026-07-11T09:24:47.308Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2364621,
		"hash": "1478f8c5a78edb83672735dd4e299403e155bcf6cab1b2d9780c09e21426100d"
	},
	{
		"id": "572e1a60fda7",
		"ts": "2026-07-11T09:24:47.550Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3119231.83,
		"hash": "572e1a60fda754fe6b1115479fecd935be23954cd096270d7bcc99e841cf842b"
	},
	{
		"id": "5526a82a8694",
		"ts": "2026-07-11T09:24:47.764Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 248750.84,
		"hash": "5526a82a86944889511d5c3a371a7653630af42fae336f3e25f183f74b1e892e"
	},
	{
		"id": "49733e270746",
		"ts": "2026-07-11T09:24:47.982Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 314794.16,
		"hash": "49733e270746e0e882b12cae783c29d4e262574de89553559af885794ae1b923"
	},
	{
		"id": "93c46f20796e",
		"ts": "2026-07-11T09:24:48.200Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1797010.69,
		"hash": "93c46f20796e4673c13f838c808428a796bba512791efbf1d662df59099b54cc"
	},
	{
		"id": "b2546a4f364c",
		"ts": "2026-07-11T09:24:48.418Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 105495.74,
		"hash": "b2546a4f364c073e47a80e4b2dfd3d61818e2a4176f1ab361a56a1944ec8b3e7"
	},
	{
		"id": "74164c42fec9",
		"ts": "2026-07-11T09:24:48.644Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 807734.98,
		"hash": "74164c42fec9125b947594de3f3dbe475d054ff19db4665ec498a5ce370325b8"
	},
	{
		"id": "235dbc48e796",
		"ts": "2026-07-11T09:24:48.858Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 708558.88,
		"hash": "235dbc48e796bad85a1df12fa8cc1d9aa62164b65bc7d226af81c6157540dd83"
	},
	{
		"id": "1603c3ab316c",
		"ts": "2026-07-11T07:49:12.855Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105201728.56,
		"hash": "1603c3ab316c7465fe3c256701db34d8bd0ef366fc90d65a358790aaca64d0f9"
	},
	{
		"id": "1e2098d5e760",
		"ts": "2026-07-11T07:49:13.096Z",
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
		"liquidityUsd": 15760806.17,
		"hash": "1e2098d5e7608ed7a53e71864c961d733c6acf3394601db978b3556189a1a025"
	},
	{
		"id": "b3d2049546aa",
		"ts": "2026-07-11T07:49:13.533Z",
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
		"liquidityUsd": 1367032.42,
		"hash": "b3d2049546aad2ebd17d44bc240a059611f72de966ac5846600e75c4021bcdc9"
	},
	{
		"id": "2f0632381505",
		"ts": "2026-07-11T07:49:13.966Z",
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
		"liquidityUsd": 31011178.83,
		"hash": "2f063238150530554688273a6d9514aa55456683e73cbc09b7c7a71b432415ec"
	},
	{
		"id": "6c08ffc3d7ea",
		"ts": "2026-07-11T07:49:14.410Z",
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
		"liquidityUsd": 4607915.24,
		"hash": "6c08ffc3d7ea63646f389b949003f797bb6bc5908d2dd1db7869e5db10945988"
	},
	{
		"id": "9744ee7da18c",
		"ts": "2026-07-11T07:49:14.640Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 999593.89,
		"hash": "9744ee7da18cf407a0d4c888711e62b665cc28cffbcd5719f58e042358521017"
	},
	{
		"id": "870b4eb051d3",
		"ts": "2026-07-11T07:49:14.873Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31011178.83,
		"hash": "870b4eb051d35903306bf4e7deaf59b1dcd59e09a6e7cabd09f6c7b88b725734"
	},
	{
		"id": "6a9a4f134994",
		"ts": "2026-07-11T07:49:15.127Z",
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
		"liquidityUsd": 2503965.19,
		"hash": "6a9a4f134994a96d982b5ca24041211e175b9d26fa7e3b61466cc05dd068e329"
	},
	{
		"id": "697abb0caf85",
		"ts": "2026-07-11T07:49:15.371Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3112322.06,
		"hash": "697abb0caf85f3b17255a4d75bcbfddf7ed69bce1b3e992e8650290df555654c"
	},
	{
		"id": "6c37778b817d",
		"ts": "2026-07-11T07:49:15.603Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2373142.22,
		"hash": "6c37778b817d652527d10a1ef8489da64e66dcaab7dd279acf20154ac5f0dc23"
	},
	{
		"id": "531ee61a6b3a",
		"ts": "2026-07-11T07:49:15.820Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 237969.99,
		"hash": "531ee61a6b3a40d65ac1d117d46dc8c31cc3197901fcd505d9690fae63eaa379"
	},
	{
		"id": "e3fe97664386",
		"ts": "2026-07-11T07:49:16.037Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 468873.31,
		"hash": "e3fe97664386ac6df95370262db8ab13f73b3c2d116169133e5c3c76c2f94ee3"
	},
	{
		"id": "306c6d252137",
		"ts": "2026-07-11T07:49:16.253Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1797924.24,
		"hash": "306c6d252137d60cf46368adb1517fa55fab2c6d9116bcfa82eb28da303da55a"
	},
	{
		"id": "c1f57faaaccf",
		"ts": "2026-07-11T07:49:16.470Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 812632.03,
		"hash": "c1f57faaaccfa9ded829c6be6212e2a7e0d80bec754f5c9bfa836c41bbaa7111"
	},
	{
		"id": "7601a94d06c1",
		"ts": "2026-07-11T07:49:16.687Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8315190.31,
		"hash": "7601a94d06c145f5ed048776334d621b9218868e270cb9c5d543d0591a5d721a"
	},
	{
		"id": "51d87e3e0b18",
		"ts": "2026-07-11T07:49:16.901Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 651129.69,
		"hash": "51d87e3e0b18d1c578c53818877b3b643cb94a6a17ac51d501affb582bb61336"
	},
	{
		"id": "a13688b359e2",
		"ts": "2026-07-11T05:36:50.371Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105150952.08,
		"hash": "a13688b359e29261513cf9080f562576ea6034b492c34281cd7e03b007f78d91"
	},
	{
		"id": "145ca140df7a",
		"ts": "2026-07-11T05:36:50.844Z",
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
		"liquidityUsd": 16159868.88,
		"hash": "145ca140df7a1cae3ee426a91fa36f5e227e5fae98e1bf0955c5aae862b95ebd"
	},
	{
		"id": "8633425c85c8",
		"ts": "2026-07-11T05:36:51.100Z",
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
		"liquidityUsd": 1367614.43,
		"hash": "8633425c85c8b95fc282f4783721f756f667567753001b4bba86f2a4afa0f922"
	},
	{
		"id": "560a582fff45",
		"ts": "2026-07-11T05:36:51.356Z",
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
		"liquidityUsd": 30962078.43,
		"hash": "560a582fff45488278cf91568d70e9a8a16b820f34da2075b9fde5025f5af6ab"
	},
	{
		"id": "0b6a992afa5c",
		"ts": "2026-07-11T05:36:51.607Z",
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
		"liquidityUsd": 4688412.05,
		"hash": "0b6a992afa5cb667dd4c3c0883b04453e0bcb60d42355d9c0892fd494700eac4"
	},
	{
		"id": "6aed2bf33695",
		"ts": "2026-07-11T05:36:51.859Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 992597.73,
		"hash": "6aed2bf336952e150cf9eb18b14ebb3d34961d1088f2ef33773ddb7ea51f1610"
	},
	{
		"id": "06b68e92fdd7",
		"ts": "2026-07-11T05:36:52.112Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30962078.43,
		"hash": "06b68e92fdd7db1204482ad6afc71c7bf13f0416cf88cb4ef273620fcc0864a0"
	},
	{
		"id": "35f869389d10",
		"ts": "2026-07-11T05:36:52.387Z",
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
		"liquidityUsd": 2525495.84,
		"hash": "35f869389d10cb861435c5d16959ca02b43cf26cb09cbbaa31ba897b56471643"
	},
	{
		"id": "1cebfca3924a",
		"ts": "2026-07-11T05:36:52.641Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3147192.08,
		"hash": "1cebfca3924a4535abe940fb00166260c042e587a5de8ebc94b7ad91e1eaa7db"
	},
	{
		"id": "82b82cc2f360",
		"ts": "2026-07-11T05:36:52.895Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 237409.41,
		"hash": "82b82cc2f360832f0404801c724c704e4c7ee69766dda773159f9031cf5ac32f"
	},
	{
		"id": "94d727fa5329",
		"ts": "2026-07-11T05:36:53.135Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2474080.05,
		"hash": "94d727fa5329bc67b30686ffba2ffa05c65723bc49f6db6b1666b745963d3d95"
	},
	{
		"id": "13ff023d9bdf",
		"ts": "2026-07-11T05:36:53.374Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 840357.8,
		"hash": "13ff023d9bdffe7f5cf5d190ba804d656e5b2eca891a203a687a46947de3b5cd"
	},
	{
		"id": "de72596d5ca9",
		"ts": "2026-07-11T05:36:53.608Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 316006.88,
		"hash": "de72596d5ca948c63c7e2b7f2371bb0539ea1083aca8964b19babfca2bf5fcb7"
	},
	{
		"id": "bafa28e90f4c",
		"ts": "2026-07-11T05:36:53.844Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1758099.44,
		"hash": "bafa28e90f4c3a5b043b680c0025f648da4d4bad8b734c866469f089f3e0b366"
	},
	{
		"id": "738578f84be2",
		"ts": "2026-07-11T05:36:54.083Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8379290.75,
		"hash": "738578f84be2f5140bd7531468e60af615cc289d56874f5148bb24c323eac6e0"
	},
	{
		"id": "3d7e6b83615d",
		"ts": "2026-07-11T05:36:54.321Z",
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
		"liquidityUsd": 1201565.26,
		"hash": "3d7e6b83615d7d5deb904fffcb9e7de3a5c4df590220494076a73361c16d5bb4"
	},
	{
		"id": "327792b7595f",
		"ts": "2026-07-11T02:15:15.694Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105125606.98,
		"hash": "327792b7595f877fddfa134b3e143b8506b360944429cb2a705259c98d79c141"
	},
	{
		"id": "0de2a7d5e882",
		"ts": "2026-07-11T02:15:16.370Z",
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
		"liquidityUsd": 16497659.72,
		"hash": "0de2a7d5e8829cc9f6b5d7882b4e8265dbcd13ad6a1110bb794656572cb4cd2b"
	},
	{
		"id": "cb9eee31fe20",
		"ts": "2026-07-11T02:15:16.729Z",
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
		"liquidityUsd": 1366043.47,
		"hash": "cb9eee31fe2040f9a92d095c66bc4bd532ccc7191cbe39b9b19dc127d52b071a"
	},
	{
		"id": "d570f3961abe",
		"ts": "2026-07-11T02:15:17.248Z",
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
		"liquidityUsd": 30704016.41,
		"hash": "d570f3961abe7e30a53d1292025adb306dc2c05ff14edd14e9d04519f4605c79"
	},
	{
		"id": "4176041c4447",
		"ts": "2026-07-11T02:15:17.735Z",
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
		"liquidityUsd": 4374280.6,
		"hash": "4176041c4447ed98eeffbaff2ee942e66a60f00fc490554ede78a40effefb057"
	},
	{
		"id": "cfc771de41b4",
		"ts": "2026-07-11T02:15:18.529Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991683.47,
		"hash": "cfc771de41b48f628fbbd5b4e4867fc56e4ec88a80b6f3d51bfcf18ec4b4d9e1"
	},
	{
		"id": "b9a69e14f82b",
		"ts": "2026-07-11T02:15:18.829Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30704016.41,
		"hash": "b9a69e14f82be5776cb155fb490b36a9665097cf5d2754485926eb03f5b47ceb"
	},
	{
		"id": "6650820a43ec",
		"ts": "2026-07-11T02:15:19.112Z",
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
		"liquidityUsd": 2647789.62,
		"hash": "6650820a43ecc45ddc2f6071acc9afd92739a6718cb5b256b9a1a4ac00e19ee8"
	},
	{
		"id": "9592a2924b4b",
		"ts": "2026-07-11T02:15:19.366Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3236744.23,
		"hash": "9592a2924b4ba0a8254b487c2b4d34b3b67bbc55e235d2dad7fff94c9b2ce4df"
	},
	{
		"id": "4f8c359b5797",
		"ts": "2026-07-11T02:15:19.613Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1707587.37,
		"hash": "4f8c359b579705939833009933403dfd9b6934d648e9f845ea4289aee9922f97"
	},
	{
		"id": "d86456044a67",
		"ts": "2026-07-11T02:15:19.988Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260565.52,
		"hash": "d86456044a67d62321663c89c12348b3bb5c99db1da37ab5f59fe42ea174ebfe"
	},
	{
		"id": "d5ffb8e35045",
		"ts": "2026-07-11T02:15:20.250Z",
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
		"liquidityUsd": 324542.71,
		"hash": "d5ffb8e35045eae50e96df49abaca2e36765563154bda78335f3054c1b6e2d96"
	},
	{
		"id": "4087f07e57cf",
		"ts": "2026-07-11T02:15:20.489Z",
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
		"liquidityUsd": 847155.34,
		"hash": "4087f07e57cff9ccec0b7664aae8c3e95e899501eac8a4ecf36fcd7c5538629f"
	},
	{
		"id": "684bd28c3f79",
		"ts": "2026-07-11T02:15:20.720Z",
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
		"liquidityUsd": 2345433.16,
		"hash": "684bd28c3f797ff7f838c4264b4d1a1980964dfa409e7c213666bb2f13764a66"
	},
	{
		"id": "8c41bdd9c804",
		"ts": "2026-07-11T02:15:20.960Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8400605.13,
		"hash": "8c41bdd9c8043c91cfb30918e058f6a0e012857cbd9a4f7535dccdec9ca1fc41"
	},
	{
		"id": "72be6f1c7103",
		"ts": "2026-07-11T02:15:21.194Z",
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
		"liquidityUsd": 1214636.13,
		"hash": "72be6f1c71037ea0a569211ed8c4dc662779df32f7a5f4dccc32aa5891a926ea"
	},
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
	}
]
