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
	"updatedAt": "2026-07-29T05:48:07.703Z",
	"tokensScored": 6183,
	"verdictsIssued": 6183,
	"safe": 5393,
	"risky": 480,
	"likelyRug": 310,
	"ticks": 376
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "73ef477141bd",
		"ts": "2026-07-29T05:48:03.619Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111729267.89,
		"hash": "73ef477141bd6885f46c4af5d6ea40d2f276f984f826ead74bc1eec8f627ab26"
	},
	{
		"id": "015c5ac97a1b",
		"ts": "2026-07-29T05:48:04.060Z",
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
		"liquidityUsd": 16135806.09,
		"hash": "015c5ac97a1b7ffd04dba7c8b4d64ae65d5d3af485b7d1c9a9ed4be005c7bb4c"
	},
	{
		"id": "59bb3d0b9838",
		"ts": "2026-07-29T05:48:04.300Z",
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
		"liquidityUsd": 1079586.98,
		"hash": "59bb3d0b98385db1685d797c17ee6ffd203628822f3daeb96448f361baa4aa52"
	},
	{
		"id": "44d6986ab3f2",
		"ts": "2026-07-29T05:48:04.536Z",
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
		"liquidityUsd": 25772973.33,
		"hash": "44d6986ab3f2a9112c8dabb03bd5ced86420e5da56de585d15ac3441c5732a5e"
	},
	{
		"id": "9bb787d07243",
		"ts": "2026-07-29T05:48:04.773Z",
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
		"liquidityUsd": 4945760.69,
		"hash": "9bb787d0724360d181a29823d27b2eb2fe5b8d7bc6f15dc007cde3955b4a23ab"
	},
	{
		"id": "801d9456ad1d",
		"ts": "2026-07-29T05:48:05.042Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 929827.57,
		"hash": "801d9456ad1da4ce978fde99531b146258bbf7738efbdeda21c530306ab6074a"
	},
	{
		"id": "d061eaec13d5",
		"ts": "2026-07-29T05:48:05.398Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25772969,
		"hash": "d061eaec13d5c366c46931e57cd6331a15033ba7f30a09610bd6e887007aa382"
	},
	{
		"id": "efeba483c812",
		"ts": "2026-07-29T05:48:05.638Z",
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
		"liquidityUsd": 2434052.61,
		"hash": "efeba483c8125af8498f3349d3a7236178b7ab5f9bf9be810e30750618b6ff99"
	},
	{
		"id": "12f1f3743f8f",
		"ts": "2026-07-29T05:48:05.905Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 525089.68,
		"hash": "12f1f3743f8f2bd7e79142919e19bb48df53b00a58c47ded3023ff32b73787f9"
	},
	{
		"id": "1b923d145922",
		"ts": "2026-07-29T05:48:06.158Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 283767.27,
		"hash": "1b923d1459223d59e676c79133c54bc1b7fe63ebb45dedf29dc770b81c3654ad"
	},
	{
		"id": "54f925f1a379",
		"ts": "2026-07-29T05:48:06.380Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1832226.94,
		"hash": "54f925f1a37990c5adc62a3263db2b76302cc663e6c5a8cd1fd7f826099f5db8"
	},
	{
		"id": "60c1a25bcfc0",
		"ts": "2026-07-29T05:48:06.599Z",
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
		"liquidityUsd": 743902.54,
		"hash": "60c1a25bcfc07a87dcc499296738aa7b014d8cd6e918b21fd6799d23f429c095"
	},
	{
		"id": "4935eca0b530",
		"ts": "2026-07-29T05:48:06.818Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9874146.14,
		"hash": "4935eca0b53005eb3b4cefe553322328f39ac7c51fbec252a814dfbe2fcd2c9f"
	},
	{
		"id": "eb093241a4d1",
		"ts": "2026-07-29T05:48:07.039Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2953532.42,
		"hash": "eb093241a4d17cf9d3947a1ba368ae4474260b34f4ade2cc4184c2a9156c1f5c"
	},
	{
		"id": "7f53f610cb28",
		"ts": "2026-07-29T05:48:07.260Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1907911.26,
		"hash": "7f53f610cb2805295e764d553c61f880232bd7571ea3fcd0ff726c11c6c99991"
	},
	{
		"id": "0f6b93a7f033",
		"ts": "2026-07-29T05:48:07.480Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 473036.51,
		"hash": "0f6b93a7f0332b222dbfea11f9b5cbdf9f314bd4f58ef9a7bad8b395f9b027f3"
	},
	{
		"id": "63418fdd6788",
		"ts": "2026-07-29T05:48:07.703Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1968900.38,
		"hash": "63418fdd6788556e19352ed211ec8658b0a9cbed5ce455d188911a94d6fc7a49"
	},
	{
		"id": "e41ffb52e9b0",
		"ts": "2026-07-29T02:13:20.233Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111605455.96,
		"hash": "e41ffb52e9b0de181395124adf32dd5a6f813b345953f7d17520f828bfc6c01a"
	},
	{
		"id": "8d90464f62c6",
		"ts": "2026-07-29T02:13:20.432Z",
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
		"liquidityUsd": 16506443.39,
		"hash": "8d90464f62c6f85a9b1794c87ec007cc7896bdc196a7b3fbd1e5d6b651511499"
	},
	{
		"id": "c9492fc380ec",
		"ts": "2026-07-29T02:13:20.624Z",
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
		"liquidityUsd": 1083151.65,
		"hash": "c9492fc380ece0cd2d260cef8f5fcb2fba71dd07b24f3c634d67892ab276fdbc"
	},
	{
		"id": "83efc96c68d2",
		"ts": "2026-07-29T02:13:20.847Z",
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
		"liquidityUsd": 25744036.13,
		"hash": "83efc96c68d213630eb9460252a7e06108265e5853e4735e418559a0504f513c"
	},
	{
		"id": "1722c6093159",
		"ts": "2026-07-29T02:13:21.038Z",
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
		"liquidityUsd": 4936880.61,
		"hash": "1722c6093159b2bcc328ce32a68e638591a29a826a5ee129218f5decfe648a5e"
	},
	{
		"id": "d073e6c01358",
		"ts": "2026-07-29T02:13:21.227Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 948710.39,
		"hash": "d073e6c0135811643bc6f35a4fb34b42991b470e602a55b1858d7cf4f9f77484"
	},
	{
		"id": "55f1b6f473e1",
		"ts": "2026-07-29T02:13:21.417Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25744036.13,
		"hash": "55f1b6f473e1247145255086b15c4e8dd866ea60cc22b1d5b6360b9d5b46f997"
	},
	{
		"id": "46ed7bbab2fd",
		"ts": "2026-07-29T02:13:21.632Z",
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
		"liquidityUsd": 2284711.84,
		"hash": "46ed7bbab2fdea136d660938a0c8a80ddf8455f1f517ea0614a80d04bd3e14e7"
	},
	{
		"id": "500c7b471bd1",
		"ts": "2026-07-29T02:13:21.827Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 526964.8,
		"hash": "500c7b471bd1190cf8cb1be265a95fda39e5b858df3e3af6bb0ac0cc896b1f01"
	},
	{
		"id": "73317fde1827",
		"ts": "2026-07-29T02:13:22.018Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 293932.79,
		"hash": "73317fde1827ae6512145126c32778bc3209a787bcb52be05543de7869505994"
	},
	{
		"id": "d4596745953d",
		"ts": "2026-07-29T02:13:22.201Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1825833.05,
		"hash": "d4596745953d85e6074922f0c30b472158d732ca1248576366b091e30d80ce5b"
	},
	{
		"id": "1a9a63cfcd8f",
		"ts": "2026-07-29T02:13:22.393Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 167012.48,
		"hash": "1a9a63cfcd8fc9f1f2fb7429297c89b004740548438356c43c1fba06f2a544ef"
	},
	{
		"id": "65fdfbf88a38",
		"ts": "2026-07-29T02:13:22.588Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1884627.36,
		"hash": "65fdfbf88a380262991eb2e114ad0cf7b0e7916fd60785e3d4a0baac4cd17db1"
	},
	{
		"id": "0dd2630302cd",
		"ts": "2026-07-29T02:13:22.788Z",
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
		"liquidityUsd": 707014.87,
		"hash": "0dd2630302cd9f08f6f36f7459925a1a933c495a08b33d1aad8a1af5c5532c38"
	},
	{
		"id": "10dd862e3e7c",
		"ts": "2026-07-29T02:13:22.967Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9835057.49,
		"hash": "10dd862e3e7c8374e4be05599406107380b8547731016bc8340d544a7f66ed23"
	},
	{
		"id": "f01d949f7922",
		"ts": "2026-07-29T02:13:23.253Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2924451.73,
		"hash": "f01d949f7922ae429a4c94b7054ebac2235c337b61aa693194cd00f49fb346b1"
	},
	{
		"id": "272a44bea62c",
		"ts": "2026-07-29T02:13:23.454Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 474400.71,
		"hash": "272a44bea62ccf887acab66557f0e95cc5f1d82c8e0b3622a703fe501a2af65f"
	},
	{
		"id": "6b0d1b965476",
		"ts": "2026-07-28T23:55:24.524Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111851168.85,
		"hash": "6b0d1b965476396a7553bff2e852657a6f24c7b547267845b2a98fe3b83c52eb"
	},
	{
		"id": "cb2be85de563",
		"ts": "2026-07-28T23:55:25.029Z",
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
		"liquidityUsd": 16884427.08,
		"hash": "cb2be85de563fa55e90e3683e0540b9bb368663063c2436a3a0e00e098b36285"
	},
	{
		"id": "e0405c90cd75",
		"ts": "2026-07-28T23:55:25.218Z",
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
		"liquidityUsd": 1082829.08,
		"hash": "e0405c90cd757607295dad408031ec5ebd17a6f52b07fc4f4a16ced3e19b8049"
	},
	{
		"id": "882949287ddb",
		"ts": "2026-07-28T23:55:25.609Z",
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
		"liquidityUsd": 26068349.39,
		"hash": "882949287ddbee962ef0e6b17424716dc3ac175a2c32ff258078ccff74c087c9"
	},
	{
		"id": "00c712f735e3",
		"ts": "2026-07-28T23:55:25.797Z",
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
		"liquidityUsd": 4953671.42,
		"hash": "00c712f735e343a430681744a7509811c73ab72d9167eb6c9b29b324bad1afef"
	},
	{
		"id": "521d969b1b8c",
		"ts": "2026-07-28T23:55:25.984Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 946579.74,
		"hash": "521d969b1b8ca6a629d01724149ee2540e519e083e16d56f98b871c8bb6bc934"
	},
	{
		"id": "eb47e26564a4",
		"ts": "2026-07-28T23:55:26.178Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26068349.39,
		"hash": "eb47e26564a4308540b937a29c29867d97400b1cf5ddade004619992ad8e7888"
	},
	{
		"id": "ad69170f37ab",
		"ts": "2026-07-28T23:55:26.522Z",
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
		"liquidityUsd": 2451936.64,
		"hash": "ad69170f37ab9761cf00e0481de1bb5838430b176b1631e11b53a86058365c50"
	},
	{
		"id": "dc69e3d27ed7",
		"ts": "2026-07-28T23:55:26.716Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 529159.62,
		"hash": "dc69e3d27ed748509ce100c5470744f723e83efef8ac1cdd4f3698d6571a9529"
	},
	{
		"id": "e813247c0ea7",
		"ts": "2026-07-28T23:55:26.902Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 164247.49,
		"hash": "e813247c0ea725c2e9dec93d6ecdef0dc6882e53f578c1420b177d8036bbe6fa"
	},
	{
		"id": "da528eebcb02",
		"ts": "2026-07-28T23:55:27.090Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1830199.51,
		"hash": "da528eebcb0235e5a9ed587e25205ffece80ff3906a18faabbc3b5c573f4016b"
	},
	{
		"id": "6bb33d098c22",
		"ts": "2026-07-28T23:55:27.274Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1964354.64,
		"hash": "6bb33d098c226acfdd8f69cd33be66ae6291d2e38f9e551e3c12242a65e6c818"
	},
	{
		"id": "4abcd0b7bb67",
		"ts": "2026-07-28T23:55:27.452Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 291681.58,
		"hash": "4abcd0b7bb67e6337a6544ab63cb4f185417c6049efa0668b749ec6e6de024e5"
	},
	{
		"id": "ad82108517c2",
		"ts": "2026-07-28T23:55:27.637Z",
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
		"liquidityUsd": 720556.43,
		"hash": "ad82108517c2a20ad0e21bec810944a363284151ec39a23c114947a834116dd6"
	},
	{
		"id": "8e6ec6252a52",
		"ts": "2026-07-28T23:55:27.835Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9971979.8,
		"hash": "8e6ec6252a52b0cbe42f6c9dcfab303534e2ca1c644f89b4d54897be94036942"
	},
	{
		"id": "4d496b200735",
		"ts": "2026-07-28T23:55:28.055Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 641712.19,
		"hash": "4d496b20073599f3bc6fb30569f2a159e02f5a3e54a2538510d37d4f2f55d69b"
	},
	{
		"id": "fc1c4fd334b6",
		"ts": "2026-07-28T23:55:28.245Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2913164.7,
		"hash": "fc1c4fd334b6fa64b8ef2a67e5f466acfc137c9527e8779c6b7369a157040400"
	},
	{
		"id": "62244dd0c5f6",
		"ts": "2026-07-28T22:01:05.184Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111988337.94,
		"hash": "62244dd0c5f687fa150c5f85dc7b65bd86b103b061433323c8896e260bdea518"
	},
	{
		"id": "21f9a82db2dc",
		"ts": "2026-07-28T22:01:05.849Z",
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
		"liquidityUsd": 16411093.49,
		"hash": "21f9a82db2dc01263c10fdc74eee213239e451c7900decad7dde2a97b8375ca4"
	},
	{
		"id": "bfeb468b340b",
		"ts": "2026-07-28T22:01:06.334Z",
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
		"liquidityUsd": 1092522.46,
		"hash": "bfeb468b340b252f6424fb5f3b0234fab752116d7eb7be588555d0ad35a85266"
	},
	{
		"id": "973d33c3de58",
		"ts": "2026-07-28T22:01:06.757Z",
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
		"liquidityUsd": 26216646.99,
		"hash": "973d33c3de589f32cc2eadae22ab8d4792ce1dd2746972167a36c2d0d60a0063"
	},
	{
		"id": "563106feaeac",
		"ts": "2026-07-28T22:01:07.502Z",
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
		"liquidityUsd": 4996608.39,
		"hash": "563106feaeac75b0a29d3cbddcf631db02f4f7c1895d9f23a1d8f218410ba8f3"
	},
	{
		"id": "dde2aaef9cf6",
		"ts": "2026-07-28T22:01:07.896Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 955498.14,
		"hash": "dde2aaef9cf6ee4e9d7272b565a7d05c32adb5f35d1244285886eb6935bedb5a"
	},
	{
		"id": "ab5b478c5c59",
		"ts": "2026-07-28T22:01:08.558Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26216646.99,
		"hash": "ab5b478c5c59135bc8e29364fc74cfb026c761a07070b731fb0002a3f1f1c446"
	},
	{
		"id": "1260852249e5",
		"ts": "2026-07-28T22:01:08.991Z",
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
		"liquidityUsd": 2452043.78,
		"hash": "1260852249e50dd1d18d8bf7a0007d3818427ba09a3e0632244f14ed05533694"
	},
	{
		"id": "928989d97d3d",
		"ts": "2026-07-28T22:01:09.276Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 170331.37,
		"hash": "928989d97d3daa0bd632d71b2f3850f4c56f3fa10c438efa27b1f085ba5cf17f"
	},
	{
		"id": "c34eb4c4eb33",
		"ts": "2026-07-28T22:01:09.743Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 534841.09,
		"hash": "c34eb4c4eb33332867e0db2422a147a1a11fa476dc3bdec9f02b5523689c638a"
	},
	{
		"id": "92a284e5a8a5",
		"ts": "2026-07-28T22:01:10.403Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 296529.42,
		"hash": "92a284e5a8a55a0fc96c4eb4fdbe4e480d67ca6b4ad28780fa50001fef0e4758"
	},
	{
		"id": "bd379fcafcf3",
		"ts": "2026-07-28T22:01:10.661Z",
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
		"liquidityUsd": 10067333.91,
		"hash": "bd379fcafcf3485b4e1ae2a271ed0b8c008faf1b4196f6540d595760a56e2584"
	},
	{
		"id": "ef853e1430a1",
		"ts": "2026-07-28T22:01:11.111Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1874524.96,
		"hash": "ef853e1430a1ada7b5dd54502c9b7cf03f858172379fbf8b34cba759036609e4"
	},
	{
		"id": "b38e830ee787",
		"ts": "2026-07-28T22:01:11.430Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1916309.86,
		"hash": "b38e830ee787c72c2758c88b59bb4d98d0fc0f83df380060837ed5b4d64bfb27"
	},
	{
		"id": "2f2eb6a30a47",
		"ts": "2026-07-28T22:01:11.674Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 645495.46,
		"hash": "2f2eb6a30a4781c5739a53f87c357baa30bc91fd41e68a22279cc80f84e91aae"
	},
	{
		"id": "c2ce7b7625f7",
		"ts": "2026-07-28T22:01:11.938Z",
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
		"liquidityUsd": 736125.86,
		"hash": "c2ce7b7625f758d20237d7acb006fccd97e97599d3505d6e5d9b74aa7840713c"
	},
	{
		"id": "b6f78fe0b841",
		"ts": "2026-07-28T22:01:12.184Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 478285.23,
		"hash": "b6f78fe0b841aa99d3c7f4d1b8b4a2667db055a89bd3c80f0a5c63eed57f51ae"
	},
	{
		"id": "8119416eedad",
		"ts": "2026-07-28T20:14:00.292Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111835395.3,
		"hash": "8119416eedadd2f8af4f1669ff114b54efdbbb6c5051572113b0b89eedf5f61e"
	},
	{
		"id": "14589138311a",
		"ts": "2026-07-28T20:14:00.513Z",
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
		"liquidityUsd": 16477913.24,
		"hash": "14589138311a11903a1dfea32696182ac034841064dbd4505956af7f9e28ff3d"
	},
	{
		"id": "c8643c1e0f42",
		"ts": "2026-07-28T20:14:00.725Z",
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
		"liquidityUsd": 1089809.19,
		"hash": "c8643c1e0f423397151deea490abcb0798b93f86e81cd949e22493c11ee7b033"
	},
	{
		"id": "e525bd7e307b",
		"ts": "2026-07-28T20:14:01.071Z",
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
		"liquidityUsd": 26115839.64,
		"hash": "e525bd7e307b80fc5a5f5c44bfa6a6c2d93826fd0ac2f22e537f28a58b1de15a"
	},
	{
		"id": "d4bc165df941",
		"ts": "2026-07-28T20:14:01.342Z",
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
		"liquidityUsd": 5000617.57,
		"hash": "d4bc165df941c9bd81e7c7281bb8ed125bb82c1504870ae4c62f7ad6adf5e04d"
	},
	{
		"id": "a6d4877e95e1",
		"ts": "2026-07-28T20:14:01.541Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 955420.7,
		"hash": "a6d4877e95e1607cd447236646db9055fa8edf45b8787de0e3d21bde70fd6899"
	},
	{
		"id": "7fa4e173dcb9",
		"ts": "2026-07-28T20:14:01.744Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26115839.64,
		"hash": "7fa4e173dcb9f0a9d483a3619b4f925e8a90da4b374d74f7bbdb37675045aad9"
	},
	{
		"id": "e6dd6e20ee4a",
		"ts": "2026-07-28T20:14:01.941Z",
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
		"liquidityUsd": 2445515.46,
		"hash": "e6dd6e20ee4a5b4e1ee49b308ec66721c651d20e52b7c56aaef93985f48ba796"
	},
	{
		"id": "0455d66a7a92",
		"ts": "2026-07-28T20:14:02.142Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 534044.72,
		"hash": "0455d66a7a920ae4d34d78c39a218f525df9d912e5c8cbb1db6b6fc62ac03f18"
	},
	{
		"id": "702145e7a61c",
		"ts": "2026-07-28T20:14:02.335Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 180740.37,
		"hash": "702145e7a61cee6807ece404a5badaf7bb54fe11680f50e10c1c08c14893f6e6"
	},
	{
		"id": "fa35a90d38ef",
		"ts": "2026-07-28T20:14:02.537Z",
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
		"liquidityUsd": 760028.23,
		"hash": "fa35a90d38ef2c24b85e112b0f4ebace166c9faec6a80ec34c4ec835622e927f"
	},
	{
		"id": "16c170b1b2a8",
		"ts": "2026-07-28T20:14:02.732Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1879886.2,
		"hash": "16c170b1b2a82a2971ee40333f61c2815427b27da61d2cbae894f71449da9c68"
	},
	{
		"id": "69532541d12d",
		"ts": "2026-07-28T20:14:02.926Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 284715.96,
		"hash": "69532541d12dea128c7f183b8976aa9d7da050da38d345592faaac449595d862"
	},
	{
		"id": "38e856227f44",
		"ts": "2026-07-28T20:14:03.123Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1917420.69,
		"hash": "38e856227f445985f0cd2bbf5b0a66237e09358ab2ec913fbbee2fca702968fa"
	},
	{
		"id": "4578f337d39a",
		"ts": "2026-07-28T20:14:03.326Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 484494.46,
		"hash": "4578f337d39a45740460c21515ace9a27efbcb545a17431767927aa580060570"
	},
	{
		"id": "f506ce82bc99",
		"ts": "2026-07-28T20:14:03.528Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10046494.26,
		"hash": "f506ce82bc99493e8c54e9906f257439758b9c999655d0430869b49dfaac7431"
	},
	{
		"id": "37796d705d29",
		"ts": "2026-07-28T20:14:03.728Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 645490.57,
		"hash": "37796d705d291be2cf7f3db09fe41f2769fee307c39a2cab209252ced93f89c2"
	},
	{
		"id": "4076178a32b9",
		"ts": "2026-07-28T18:11:15.604Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111477946.13,
		"hash": "4076178a32b9d32859ce64aa005b96c3ad2ad07b4b7fd1305af7e83969c38d5a"
	},
	{
		"id": "bde0e6a3d433",
		"ts": "2026-07-28T18:11:16.261Z",
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
		"liquidityUsd": 15044800.5,
		"hash": "bde0e6a3d433509fe3265e8ab78186451b2a50d260000496f1c20b817890431c"
	},
	{
		"id": "cd6cc77fdaad",
		"ts": "2026-07-28T18:11:16.720Z",
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
		"liquidityUsd": 1084656.27,
		"hash": "cd6cc77fdaad5724ae98930312e3fe2e903f96a034104125a59da21743c90ef3"
	},
	{
		"id": "3eeba93ffe67",
		"ts": "2026-07-28T18:11:17.189Z",
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
		"liquidityUsd": 26082356.54,
		"hash": "3eeba93ffe67850dead44cda25f8d4562187512f5080dabc077584f279007608"
	},
	{
		"id": "0a9e616e99d5",
		"ts": "2026-07-28T18:11:17.649Z",
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
		"liquidityUsd": 4941395.37,
		"hash": "0a9e616e99d5f8ced95cea93dcb9221a5d1eb9b745df9d0f8c92ee3d4c145689"
	},
	{
		"id": "98cc7fafde59",
		"ts": "2026-07-28T18:11:17.912Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 949356.13,
		"hash": "98cc7fafde59790a3b24a7ca52eb18275e7676d1280c72b9eb24a8d95413a338"
	},
	{
		"id": "639db27227d2",
		"ts": "2026-07-28T18:11:18.172Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26082356.54,
		"hash": "639db27227d200cf7aa08f6683eb0d595a636ca7ab420e9f4f82c5a9a55fb874"
	},
	{
		"id": "89a58a8c1b00",
		"ts": "2026-07-28T18:11:18.447Z",
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
		"liquidityUsd": 2441215.77,
		"hash": "89a58a8c1b00c1e6049b58fbb6cc852f416443c51bd6353d54bbe8eee9e9d2cc"
	},
	{
		"id": "ba9962941951",
		"ts": "2026-07-28T18:11:18.715Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 200176.69,
		"hash": "ba99629419519c2a7dcd585aa70e933bed606ca805647ea6b26fd0266c378395"
	},
	{
		"id": "8d9a50000d88",
		"ts": "2026-07-28T18:11:19.008Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 531665.82,
		"hash": "8d9a50000d88b6e2e6fadee56bbc6b0c5c1e1e0ce0b304b92d23d219a3800c2d"
	},
	{
		"id": "098242cf901d",
		"ts": "2026-07-28T18:11:19.266Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 295314.58,
		"hash": "098242cf901d09fdbdd30345ad33464fcec96d49e1fc9a76b95afdc3902dab9f"
	},
	{
		"id": "62f57baa7014",
		"ts": "2026-07-28T18:11:19.511Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 483534.88,
		"hash": "62f57baa70143ba1cad317160cb12b1e6994ceb71e75b3eb1bf0be6ff0a8a7be"
	},
	{
		"id": "9bdba5badb21",
		"ts": "2026-07-28T18:11:19.760Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1859919.03,
		"hash": "9bdba5badb216d6670aa244a9ad2b2b76773bb610830924679d20956c104f212"
	},
	{
		"id": "0beea9cd69f6",
		"ts": "2026-07-28T18:11:20.009Z",
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
		"liquidityUsd": 777935.68,
		"hash": "0beea9cd69f6d883386650ad9b0e1fa664813c67bce04cc3afbfb28d7b0ec860"
	},
	{
		"id": "553d507ea519",
		"ts": "2026-07-28T18:11:20.261Z",
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
		"liquidityUsd": 9999306.33,
		"hash": "553d507ea5199c8e5bd2a174fdc1c9b7a50d63245121319c84fd6391c1b3d2f9"
	},
	{
		"id": "4e797f9663e5",
		"ts": "2026-07-28T18:11:20.509Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 643321.54,
		"hash": "4e797f9663e5334cead7674ac40fd5e5273bffbd0d267bb902e448861d8d286d"
	},
	{
		"id": "95620cb274ec",
		"ts": "2026-07-28T18:11:20.758Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1761048.17,
		"hash": "95620cb274ece872951a547fab579b09c9386c2b04c63be07f1e4717b82fa13b"
	},
	{
		"id": "571397a6c162",
		"ts": "2026-07-28T16:05:01.934Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111605827.44,
		"hash": "571397a6c162db1ae06392fb025200826c6f5b7f6c5da3e1315147f640ad796d"
	},
	{
		"id": "73deba0baad8",
		"ts": "2026-07-28T16:05:02.229Z",
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
		"liquidityUsd": 16186384.99,
		"hash": "73deba0baad8893233d3ae57c453bba3275f60dd2194c35240c4ecec3367b3e0"
	},
	{
		"id": "36e8bc839b83",
		"ts": "2026-07-28T16:05:02.479Z",
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
		"liquidityUsd": 1097659.5,
		"hash": "36e8bc839b83fa4bc6c066d56a12b75b28358c67d5ee78059427743708f201ef"
	},
	{
		"id": "e6d33d341e31",
		"ts": "2026-07-28T16:05:02.745Z",
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
		"liquidityUsd": 26295173.09,
		"hash": "e6d33d341e317fb1c0d93782f8adbba40f96881b154da96ba18ab89ee3d29c2f"
	},
	{
		"id": "69a52560e8e2",
		"ts": "2026-07-28T16:05:03.009Z",
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
		"liquidityUsd": 5004454.43,
		"hash": "69a52560e8e2469ab2a40c534b3a6b6e477bed199677a663d7810fa7e3d64f3d"
	},
	{
		"id": "99db2d46ea86",
		"ts": "2026-07-28T16:05:03.264Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 942602.23,
		"hash": "99db2d46ea86d8aeeaa77f7c20f15c141044e6d9fa19afdd759136d9f0a046dd"
	},
	{
		"id": "8fd5a4d7c999",
		"ts": "2026-07-28T16:05:03.532Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26295172.89,
		"hash": "8fd5a4d7c9997a66f482b18935fc89be8fec48f6e65c2492d0128b9ff34ba093"
	},
	{
		"id": "4c538e5e5442",
		"ts": "2026-07-28T16:05:03.776Z",
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
		"liquidityUsd": 2453084.72,
		"hash": "4c538e5e5442775516052453f6bad535e20fb81469e91fe7457023f9fddb0b22"
	},
	{
		"id": "6aa3a763e098",
		"ts": "2026-07-28T16:05:04.021Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 484854.04,
		"hash": "6aa3a763e09807ac4889e26dcbad6ed013dd635872bd8f12f380c4da58e35876"
	},
	{
		"id": "b0b0ae6f8c8c",
		"ts": "2026-07-28T16:05:04.272Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 525671.78,
		"hash": "b0b0ae6f8c8cd2b05205df8ad2e67cab93da790d2a021150f7542de17ed6e0d8"
	},
	{
		"id": "e04316a1360d",
		"ts": "2026-07-28T16:05:04.505Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 203074.08,
		"hash": "e04316a1360d67926e42c1cfa478b88d192b23ac79c9666723c653150816b6a0"
	},
	{
		"id": "da39855ba400",
		"ts": "2026-07-28T16:05:04.735Z",
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
		"liquidityUsd": 1328445.82,
		"hash": "da39855ba400c772ac89d364eb1fa32dccee98b985b0b7a19799ab2c37a80cb0"
	},
	{
		"id": "3da3d07b8218",
		"ts": "2026-07-28T16:05:04.969Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 294024.92,
		"hash": "3da3d07b8218f422ce5bfd99f016d582a4dfc7c22036f32a210d696107f08171"
	},
	{
		"id": "ba725356dbbe",
		"ts": "2026-07-28T16:05:05.201Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 515357.18,
		"hash": "ba725356dbbefbd838bbf0f1a4903fca60688065eb7d18898f53c173ec313011"
	},
	{
		"id": "c6f05ee29eb5",
		"ts": "2026-07-28T16:05:05.438Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1832171.59,
		"hash": "c6f05ee29eb5a71304144334ee2efb0d8e18758f5a4805323e55966faece9335"
	},
	{
		"id": "246991bb1d3a",
		"ts": "2026-07-28T16:05:05.669Z",
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
		"liquidityUsd": 744953.41,
		"hash": "246991bb1d3a8718da00e3fa1af4c0b4f9729b6482cb5ee06b147aa4c7cb01cc"
	},
	{
		"id": "b68464ec2a18",
		"ts": "2026-07-28T16:05:05.899Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10055221.54,
		"hash": "b68464ec2a18d141eb5a72ccf25001c586e0d1d803127e8ff042b4c1a7020aa8"
	},
	{
		"id": "1dd6c702df08",
		"ts": "2026-07-28T13:56:45.085Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110047701.03,
		"hash": "1dd6c702df086f33ec98cc2cb022d9a7aa79d6ee2c9c6637f9238acdedf50148"
	},
	{
		"id": "21bd31284e9c",
		"ts": "2026-07-28T13:56:45.344Z",
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
		"liquidityUsd": 14922172.03,
		"hash": "21bd31284e9c80ba1492e03b446e0c9cfecde4f99fb2bd979b3a00e651e64a01"
	},
	{
		"id": "9f393e4e988c",
		"ts": "2026-07-28T13:56:45.583Z",
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
		"liquidityUsd": 1075488.36,
		"hash": "9f393e4e988cb22f0cd23d87c2499f77ba3601a556b35fe118d9db468a3c9799"
	},
	{
		"id": "ad70a76b9f41",
		"ts": "2026-07-28T13:56:45.823Z",
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
		"liquidityUsd": 25847531.8,
		"hash": "ad70a76b9f416843097c98fa4d9528c98eaa618e4140ad1cf1836ad6a2ab8fcf"
	},
	{
		"id": "819115bd0885",
		"ts": "2026-07-28T13:56:46.075Z",
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
		"liquidityUsd": 4868881.73,
		"hash": "819115bd0885e47af5931a2dc7925e00b04bc8341236f326fc7beb512e2617fd"
	},
	{
		"id": "d5c60b4f87f5",
		"ts": "2026-07-28T13:56:46.305Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 949179.85,
		"hash": "d5c60b4f87f55f8c219b7a38f7eb4afa82a45ddf105bd7cdd66d8b02e7ce4f11"
	},
	{
		"id": "c5c150f671c3",
		"ts": "2026-07-28T13:56:46.538Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25847531.8,
		"hash": "c5c150f671c38a5f63990edb26343c8203400ca591a30c435e92ab930a1b760f"
	},
	{
		"id": "6d0d819e04ae",
		"ts": "2026-07-28T13:56:46.773Z",
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
		"liquidityUsd": 2402941.32,
		"hash": "6d0d819e04ae103d7036c9d8d7980aaa44a45c023842ad38393c2c9d94dfdcad"
	},
	{
		"id": "255bc7855734",
		"ts": "2026-07-28T13:56:47.024Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 487360.8,
		"hash": "255bc7855734a745aa9bfb9bb977bb6ef54bd28c6db803ef3f2bc7725e8721fd"
	},
	{
		"id": "f69d9358c2cd",
		"ts": "2026-07-28T13:56:47.270Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 507096.48,
		"hash": "f69d9358c2cdddd2613e71e0e662f57fb3bf41c0474e4d02a9ae0057e14399ce"
	},
	{
		"id": "280f94ce4730",
		"ts": "2026-07-28T13:56:47.491Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 283091.65,
		"hash": "280f94ce4730c385070323da5048cf6b3ebf1c3cabe90d1d71e391e8aff8fe8b"
	},
	{
		"id": "37046c6955e6",
		"ts": "2026-07-28T13:56:47.711Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 199348.39,
		"hash": "37046c6955e67ab02e0bd9ccc9401ebfcb983ef6be8922384aa06b93202a47ab"
	},
	{
		"id": "ffb5891d5d59",
		"ts": "2026-07-28T13:56:47.950Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 507091.43,
		"hash": "ffb5891d5d596584432b30081f9779eebb2f007dea2c223267b777a1304e7891"
	},
	{
		"id": "c19bc9926689",
		"ts": "2026-07-28T13:56:48.165Z",
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
		"liquidityUsd": 1299298.2,
		"hash": "c19bc99266892e01f2faace62a586a669689decb7b543efe4181a53be3713a82"
	},
	{
		"id": "bb1af9f06ae9",
		"ts": "2026-07-28T13:56:48.385Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1812147.35,
		"hash": "bb1af9f06ae9706120891536656b81d53992566b8a68cb21db9f8c0ad139e084"
	},
	{
		"id": "7d5f8d9710b6",
		"ts": "2026-07-28T13:56:48.610Z",
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
		"liquidityUsd": 729118.17,
		"hash": "7d5f8d9710b675fa3d2d8d44b4e03e3bb975c5c78fde40506455cdd47ecbc4eb"
	},
	{
		"id": "ddc75e250105",
		"ts": "2026-07-28T13:56:48.845Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 151361.82,
		"hash": "ddc75e250105627e96b4fe436e2e0607489c8fb2b777b5eb12fca6d9a5dafa47"
	},
	{
		"id": "a0b106f22985",
		"ts": "2026-07-28T11:54:25.807Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110308992.78,
		"hash": "a0b106f22985f19606c1292683543b62480c90ac65023aafc50cd1cbe5352acf"
	},
	{
		"id": "0440da04909a",
		"ts": "2026-07-28T11:54:26.121Z",
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
		"liquidityUsd": 15844885.36,
		"hash": "0440da04909a91d21d1195b163978e3a4bfd2b39bdbe61a436df9e0c1543fb12"
	},
	{
		"id": "99b42abe3aca",
		"ts": "2026-07-28T11:54:26.351Z",
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
		"liquidityUsd": 1077752.74,
		"hash": "99b42abe3aca9eb78a987a112fe5f07c51cd88a572cee5375819c44a0c79e264"
	},
	{
		"id": "02737ee9e683",
		"ts": "2026-07-28T11:54:26.553Z",
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
		"liquidityUsd": 26179691.61,
		"hash": "02737ee9e683400485bbca2076531d2a8d92103d319569c19e73aa0622b850a2"
	},
	{
		"id": "9e5207c739d7",
		"ts": "2026-07-28T11:54:26.778Z",
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
		"liquidityUsd": 4910497.51,
		"hash": "9e5207c739d737b60fdda4c9da82b034ce28bae09d078ff2f9bc83357ededaca"
	},
	{
		"id": "52c705a5755b",
		"ts": "2026-07-28T11:54:26.982Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 943715.72,
		"hash": "52c705a5755bb87e72deaa20c7292ba47ac8a00b1cc66c863821b3a4e78c3ec5"
	},
	{
		"id": "6d1306c59fe9",
		"ts": "2026-07-28T11:54:27.189Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26179691.61,
		"hash": "6d1306c59fe95c32435640c7997fc35a4b0dfbc2db01b8a39bdca50e78116ea1"
	},
	{
		"id": "9ffad13b1715",
		"ts": "2026-07-28T11:54:27.378Z",
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
		"liquidityUsd": 2406475.8,
		"hash": "9ffad13b17153ef2df18fc6db4d277a9344bf52c76a1e8b81751490a98789575"
	},
	{
		"id": "37a23be62a40",
		"ts": "2026-07-28T11:54:27.602Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 490227.36,
		"hash": "37a23be62a407c8576e7d6710487d50a78230b7ab61a154eb16151a137f98368"
	},
	{
		"id": "1e2c54b10ac8",
		"ts": "2026-07-28T11:54:27.794Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 520196.69,
		"hash": "1e2c54b10ac8ce7cb628c3f80e1c915950c7cf4a393a6bb6870ab01bae39c808"
	},
	{
		"id": "838af537d765",
		"ts": "2026-07-28T11:54:28.001Z",
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
		"liquidityUsd": 1299824.32,
		"hash": "838af537d765ea3661ad08d63df4f9c062e67813f192df10001f1c741c0364db"
	},
	{
		"id": "060f15719b27",
		"ts": "2026-07-28T11:54:28.205Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 181514.75,
		"hash": "060f15719b278ee020e812ca969c021ddf3e39fa55376ce61e7654355822c159"
	},
	{
		"id": "874b0405a2ea",
		"ts": "2026-07-28T11:54:28.404Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280439.69,
		"hash": "874b0405a2ea3165f8394a8059221631eab3ac3c972d9af2ba29ef9bc102c64b"
	},
	{
		"id": "4bd8d8e70c78",
		"ts": "2026-07-28T11:54:28.595Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 507221.65,
		"hash": "4bd8d8e70c78be0aec60c71bed519b082d2c7eb8e4c018522e0f3e569264f108"
	},
	{
		"id": "13f759345f18",
		"ts": "2026-07-28T11:54:28.773Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 200202.13,
		"hash": "13f759345f189434d594cff7c4f0b55e73ddd4715d492d1b5936f60bf6b4084e"
	},
	{
		"id": "a9150a5752cc",
		"ts": "2026-07-28T11:54:28.970Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1808897.69,
		"hash": "a9150a5752cc311905bd3a962a6a3c460c39e2308cc73de3bf6104fd5b4a247d"
	},
	{
		"id": "a6ad1ed2e519",
		"ts": "2026-07-28T11:54:29.160Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 150912.42,
		"hash": "a6ad1ed2e519c5b0e5014f447ffb0d53451a8f380485cd8c5222953d88bd1b71"
	},
	{
		"id": "02dd477b542f",
		"ts": "2026-07-28T09:33:56.430Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111167470.34,
		"hash": "02dd477b542f62350ba6e4183b2e7a696a65e511317f35263d13cb892e490e33"
	},
	{
		"id": "f74064c92cbc",
		"ts": "2026-07-28T09:33:56.879Z",
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
		"liquidityUsd": 15498347.41,
		"hash": "f74064c92cbc329f5345b5fb82df4e0ec0d0c8655357aea5917af83d11d1667e"
	},
	{
		"id": "76393b48c71d",
		"ts": "2026-07-28T09:33:57.122Z",
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
		"liquidityUsd": 1078135.94,
		"hash": "76393b48c71dfd5b7f132a7afaa26b9746c7d63d68c8eba430a90f3d5e02dba4"
	},
	{
		"id": "d76d972e6f0d",
		"ts": "2026-07-28T09:33:57.395Z",
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
		"liquidityUsd": 26496789.06,
		"hash": "d76d972e6f0d784d7923819273a9d1d390300edf663622e698a19649e5d130ab"
	},
	{
		"id": "83858045929a",
		"ts": "2026-07-28T09:33:57.638Z",
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
		"liquidityUsd": 4929316.76,
		"hash": "83858045929a7af3128fcd119f3e24f4bbbccbf3c77cc31baf07cadc88f8b87f"
	},
	{
		"id": "7a2021211b6c",
		"ts": "2026-07-28T09:33:57.883Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 947626.96,
		"hash": "7a2021211b6cb507cb1cbd3e81edfc529b1c9feae495fe9157470eaefe70e162"
	},
	{
		"id": "f5eb2d865295",
		"ts": "2026-07-28T09:33:58.148Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26496789.06,
		"hash": "f5eb2d8652956f0cc6d1fd1a98b7c167af6f091d060042c4bae86b394cd4ce1f"
	},
	{
		"id": "36d42c5ad019",
		"ts": "2026-07-28T09:33:58.389Z",
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
		"liquidityUsd": 2422145.02,
		"hash": "36d42c5ad01965fd614181a26e7f9792a5a8ebcd69cc2b2b2cf7065fa8053ff4"
	},
	{
		"id": "94aa1e3d6814",
		"ts": "2026-07-28T09:33:58.632Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 493516.09,
		"hash": "94aa1e3d6814fe212cc76d3006b9562f36c665a5accec19a1f6bff4b2662d657"
	},
	{
		"id": "d264156c8475",
		"ts": "2026-07-28T09:33:58.875Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 185043.05,
		"hash": "d264156c84753689ed33aa4b75d1414a5a663fab5bd3afee37f919a3ae84fdef"
	},
	{
		"id": "327d2efb58a2",
		"ts": "2026-07-28T09:33:59.102Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 522558.21,
		"hash": "327d2efb58a2d6334b3969fa957c3deb5ed8e07ada3a3fc9ab821ae28c780378"
	},
	{
		"id": "1233e165dfb9",
		"ts": "2026-07-28T09:33:59.328Z",
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
		"liquidityUsd": 1305723.35,
		"hash": "1233e165dfb95699daef1930e2df5ec994d60ada0ce443a4bf2e46bba50f0acc"
	},
	{
		"id": "5a26ad97f449",
		"ts": "2026-07-28T09:33:59.554Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 513320.76,
		"hash": "5a26ad97f449787c3d54fa47196f90f65f84a3e066a632a4bebf9f528777f4b3"
	},
	{
		"id": "3cecdfe06237",
		"ts": "2026-07-28T09:33:59.781Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1813989.55,
		"hash": "3cecdfe062375026bbfc82a59300eef482aab2b70047433fb817f88f7b52841c"
	},
	{
		"id": "3b971c5f1128",
		"ts": "2026-07-28T09:34:00.008Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1754047.86,
		"hash": "3b971c5f11285c5579f645fba19adf42c14be7ca0f6243f1f9da643042896400"
	},
	{
		"id": "e3d6108b9e80",
		"ts": "2026-07-28T09:34:00.256Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146352.11,
		"hash": "e3d6108b9e80853fc10c7aef07e23755f137552922964ba5cd8c2cfad91a2ff3"
	},
	{
		"id": "0bf7c683c246",
		"ts": "2026-07-28T06:29:18.983Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110968756.87,
		"hash": "0bf7c683c246af46be49a6fb35ffd2de526d7f50c6365930c37d585241964dbe"
	},
	{
		"id": "3c429eec2014",
		"ts": "2026-07-28T06:29:19.427Z",
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
		"liquidityUsd": 17359550.28,
		"hash": "3c429eec20147b84e33d4400eca3e418660df79c06effc5d0b6d358b791c6c20"
	},
	{
		"id": "7dc37d851982",
		"ts": "2026-07-28T06:29:19.676Z",
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
		"liquidityUsd": 1086590.18,
		"hash": "7dc37d851982e30d04fbf139e3e4fa3bc3a908603badc69405437f666b857e3d"
	},
	{
		"id": "afcec517b900",
		"ts": "2026-07-28T06:29:19.912Z",
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
		"liquidityUsd": 26217464.43,
		"hash": "afcec517b90076aca55eb33cce006aec4f856ed4e086742281f9ac67c98a6010"
	},
	{
		"id": "cc8c687bb7c5",
		"ts": "2026-07-28T06:29:20.149Z",
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
		"liquidityUsd": 4929968.77,
		"hash": "cc8c687bb7c50dc57001981ae2984050201c0486a4b6cc079d333839b8697e85"
	},
	{
		"id": "ce14de362d1d",
		"ts": "2026-07-28T06:29:20.382Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 947593.88,
		"hash": "ce14de362d1da909c7de064259a2db015c8cbea6ae4cd11d9b1bb7c82959fc01"
	},
	{
		"id": "cbbcc8acbe42",
		"ts": "2026-07-28T06:29:20.615Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26217464.43,
		"hash": "cbbcc8acbe42e8cf485b743c054253ba7afb42afd721269ba25c73eca68c8cf4"
	},
	{
		"id": "d50b97b23666",
		"ts": "2026-07-28T06:29:20.853Z",
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
		"liquidityUsd": 2406916.16,
		"hash": "d50b97b2366625e5bfafd385cefb09ead53a1d7a6fb8f3fb75f5639f65e87d0e"
	},
	{
		"id": "d4897a0565c6",
		"ts": "2026-07-28T06:29:21.086Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 492333.35,
		"hash": "d4897a0565c64a8fee0a0a4123e6fc4d3adbc98372c418f5709f82fff9f01f97"
	},
	{
		"id": "34a700f3a67c",
		"ts": "2026-07-28T06:29:21.326Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 176780.16,
		"hash": "34a700f3a67c339dfaa6775dadb00ab46d57809463845a984f158119d00bc1ed"
	},
	{
		"id": "8a0d8f397c34",
		"ts": "2026-07-28T06:29:21.545Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 520364.29,
		"hash": "8a0d8f397c34d3fed4f075045cfb91ffcb68769663bf4bebf1c8df56cfeda43c"
	},
	{
		"id": "d4d547bc063d",
		"ts": "2026-07-28T06:29:21.763Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9741483.37,
		"hash": "d4d547bc063dab00bb8912cce21f5bdab058b3f9d650e7a254aa2c64ce8b40a6"
	},
	{
		"id": "9580a8c3cd92",
		"ts": "2026-07-28T06:29:21.987Z",
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
		"liquidityUsd": 1314087.19,
		"hash": "9580a8c3cd92e213ecd7f16cab95ca4412387fd15fed0e591d15d86a41c444a6"
	},
	{
		"id": "56c14a29077e",
		"ts": "2026-07-28T06:29:22.209Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 506123.56,
		"hash": "56c14a29077ebe33dd9e6f6aaff196774d5e161b7c482e7831875d40478ae40b"
	},
	{
		"id": "cb368258c856",
		"ts": "2026-07-28T06:29:22.432Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1679384.88,
		"hash": "cb368258c8564dedfec469712305e24cbca73c560659e949f4b6e9259b5ccfef"
	},
	{
		"id": "ec4db0dd1894",
		"ts": "2026-07-28T06:29:22.650Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1754272.5,
		"hash": "ec4db0dd18946f48c4ac20019ae23bbb66475713bb9c0c2ba693e862d7da21b1"
	},
	{
		"id": "1b04768b753f",
		"ts": "2026-07-28T03:57:57.316Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110636563.41,
		"hash": "1b04768b753fedbf6be1a118b6ea8413bdc338938b137398b97bb98639ce2b23"
	},
	{
		"id": "9d96194b18d2",
		"ts": "2026-07-28T03:57:57.553Z",
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
		"liquidityUsd": 13526577.43,
		"hash": "9d96194b18d2a771072813d5e0f82ff068db4262385e962132176cb25e2d8653"
	},
	{
		"id": "cb6836282999",
		"ts": "2026-07-28T03:57:58.008Z",
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
		"liquidityUsd": 1088551.95,
		"hash": "cb6836282999c1322686330d1e9ecd9f44c27d559560e8273e54c4dffbe4acc3"
	},
	{
		"id": "6fdff45b12ef",
		"ts": "2026-07-28T03:57:58.449Z",
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
		"liquidityUsd": 26120868.68,
		"hash": "6fdff45b12ef513d20e11ee510f5ab9a442510d0c95235920d1cb8336f20c3ee"
	},
	{
		"id": "158d8f654098",
		"ts": "2026-07-28T03:57:58.683Z",
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
		"liquidityUsd": 4917720.15,
		"hash": "158d8f6540980dfb8fddd3063a26ec2d14dc8dc53b9ac37a37c40d9becd09e26"
	},
	{
		"id": "2414392253ee",
		"ts": "2026-07-28T03:57:58.918Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 946620.94,
		"hash": "2414392253ee164ff7f05d786095ae82400c3d7d625e91b15a921c6d79df87b7"
	},
	{
		"id": "a00b3279a7a7",
		"ts": "2026-07-28T03:57:59.158Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26120868.68,
		"hash": "a00b3279a7a7acff12081a308ae08c48168e29dc6eef42a42e119ebd8bcaf5be"
	},
	{
		"id": "d4ea82d89c68",
		"ts": "2026-07-28T03:57:59.392Z",
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
		"liquidityUsd": 2403090.36,
		"hash": "d4ea82d89c68d9e22b571c2d9e39019608e121c49d239312d3674d07da5ed310"
	},
	{
		"id": "f4007036de0f",
		"ts": "2026-07-28T03:57:59.624Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 492499.96,
		"hash": "f4007036de0ff379b1e73de1022465087bdf3ac34b4d6b524c68d583027198d7"
	},
	{
		"id": "2b7de5adf17c",
		"ts": "2026-07-28T03:57:59.857Z",
		"symbol": "$MFER",
		"token": "0xE3086852A4B125803C815a158249ae468A3254Ca",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 177400.68,
		"hash": "2b7de5adf17c875f22da3bf81bdb76923867f7f89ef14cc0cf94feedf4292455"
	},
	{
		"id": "dc0c6cb53844",
		"ts": "2026-07-28T03:58:00.084Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9782495,
		"hash": "dc0c6cb53844ca67cf020a662b62416aad40bd5beb343a48dc6c80bf6da06a51"
	},
	{
		"id": "dc8053e22cc4",
		"ts": "2026-07-28T03:58:00.321Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 514478.22,
		"hash": "dc8053e22cc48169262c3d68b4b0ebd2547ff32ac29504eae1aa40e3dd3bf23b"
	},
	{
		"id": "70450912ed85",
		"ts": "2026-07-28T03:58:00.556Z",
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
		"liquidityUsd": 1317978.23,
		"hash": "70450912ed85aef6bcaf78c590a43c15f29b010af4c6772e7eb01dfe67f41d8e"
	},
	{
		"id": "1ec213e0f0ce",
		"ts": "2026-07-28T03:58:00.937Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 511224.41,
		"hash": "1ec213e0f0ceeb2b111cb84b636859922133e22be49d26686d50822be68234ad"
	},
	{
		"id": "aa7408e32dfc",
		"ts": "2026-07-28T03:58:01.181Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1827339.53,
		"hash": "aa7408e32dfca84d47db4804f8109249a1e8ab24b98f6d8b3c88789340441b7a"
	}
]
