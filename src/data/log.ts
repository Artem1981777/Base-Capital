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
	"updatedAt": "2026-09-10T00:47:53.830Z",
	"tokensScored": 16830,
	"verdictsIssued": 16830,
	"safe": 14275,
	"risky": 1240,
	"likelyRug": 1315,
	"ticks": 964
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "28c14a5993df",
		"ts": "2026-09-10T00:47:47.765Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118157969.63,
		"hash": "28c14a5993dfdc2f612ad8fc131894bbb539a70d4ba7b10f88e022f94d029a63"
	},
	{
		"id": "bbf1222ede29",
		"ts": "2026-09-10T00:47:48.255Z",
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
		"liquidityUsd": 19426441.49,
		"hash": "bbf1222ede290a37257b6cc1d86d07e5ea69474d3dd13c41bd98327fd8bfece9"
	},
	{
		"id": "fe1d23928bc6",
		"ts": "2026-09-10T00:47:48.551Z",
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
		"liquidityUsd": 1006474.63,
		"hash": "fe1d23928bc6fb57a22770698e47f7ef3c0205a85395c777ce2889dc890ed350"
	},
	{
		"id": "a3fd0a43168e",
		"ts": "2026-09-10T00:47:48.826Z",
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
		"liquidityUsd": 31929134.11,
		"hash": "a3fd0a43168e1be40b0f36101184462ee49ddad6150d802637db8ef2b4b27eda"
	},
	{
		"id": "7327776a42af",
		"ts": "2026-09-10T00:47:49.300Z",
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
		"liquidityUsd": 4249423.88,
		"hash": "7327776a42af924106787e6f611278843c35a8b6b4467e801613b56df59baf97"
	},
	{
		"id": "11744d31c166",
		"ts": "2026-09-10T00:47:49.579Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1182776.59,
		"hash": "11744d31c1667ac96cbc3cbcd81ac7a01c7e0350bac4af4eeaa8ba3719a6fee6"
	},
	{
		"id": "24a29309cc3b",
		"ts": "2026-09-10T00:47:49.888Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 232615.54,
		"hash": "24a29309cc3b41d2c371ab6a1e9b91bb4dc6d881937379b1087132087603f157"
	},
	{
		"id": "4dc88558665b",
		"ts": "2026-09-10T00:47:50.181Z",
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
		"liquidityUsd": 2586876.32,
		"hash": "4dc88558665b8dac136cf076bd7d01f75120b72f84db51f5ba990ae0301dace2"
	},
	{
		"id": "6638862af083",
		"ts": "2026-09-10T00:47:51.479Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1612772.61,
		"hash": "6638862af0831abcaff3325798dbed511d8a3f4d3dcb956847a30389e271b562"
	},
	{
		"id": "e8d4ee1c8572",
		"ts": "2026-09-10T00:47:51.757Z",
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
		"liquidityUsd": 14116314.81,
		"hash": "e8d4ee1c85720e4fd17e053207b0b38caabd98de119d5f69da43497414de9333"
	},
	{
		"id": "c0bea6738ccc",
		"ts": "2026-09-10T00:47:52.015Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 619925,
		"hash": "c0bea6738cccb4444f4583c9b56ba98dcee44a123e6df2243f16e901ada4cba4"
	},
	{
		"id": "aa4adcf7646b",
		"ts": "2026-09-10T00:47:52.274Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 585210.49,
		"hash": "aa4adcf7646be3c2e30db7e4b03ec540be560acf6fad68bfdf1417b5889962fc"
	},
	{
		"id": "692ebde2d80f",
		"ts": "2026-09-10T00:47:52.535Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 851126.38,
		"hash": "692ebde2d80f2d87513abc98b14187d991ffdab7b0e4dff796f94a93225166b2"
	},
	{
		"id": "a5bccf1af828",
		"ts": "2026-09-10T00:47:52.795Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1596420.89,
		"hash": "a5bccf1af82867639b72cad971a4caae517c5448fcc37ba1096ad0e9ab5742e4"
	},
	{
		"id": "51592d10b8eb",
		"ts": "2026-09-10T00:47:53.051Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 317288.26,
		"hash": "51592d10b8eb179f7fa055793ddc302a653d2da0a9fc3dbe67dfe6941eb5097c"
	},
	{
		"id": "60a3a2b8cde4",
		"ts": "2026-09-10T00:47:53.310Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265359.15,
		"hash": "60a3a2b8cde40d9642cdd9928ab8049d7b0527e79205ce4dfbdef35704f9b55f"
	},
	{
		"id": "7948867ff476",
		"ts": "2026-09-10T00:47:53.571Z",
		"symbol": "KAI",
		"token": "0xca18A528Ea897040f715edC92e6e4572780c5ca1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 292914.15,
		"hash": "7948867ff47671c652be3d94c63d68423ebeeacab61be5927ec3d35c23e6e895"
	},
	{
		"id": "b3f6226f4d35",
		"ts": "2026-09-10T00:47:53.830Z",
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
		"liquidityUsd": 668664.53,
		"hash": "b3f6226f4d35222be07b407c4b2a143973e48414181ebd85d319a6e4d9cdab2e"
	},
	{
		"id": "e593963e71f1",
		"ts": "2026-09-09T22:13:36.988Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118013692.61,
		"hash": "e593963e71f14d425bbf82edf68d1d0e53ee87a46be12ba925bafe611e7d0735"
	},
	{
		"id": "0a391fe5e901",
		"ts": "2026-09-09T22:13:37.249Z",
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
		"liquidityUsd": 13989462,
		"hash": "0a391fe5e90125e00e958a106f8008959e2d3d3ecb4dd14a62b0c197123ae25d"
	},
	{
		"id": "0260b9241eed",
		"ts": "2026-09-09T22:13:37.538Z",
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
		"liquidityUsd": 1002455.41,
		"hash": "0260b9241eed806ab4cbd9a4782a72d5b0f8575cc1310a9100181f7eba5f97df"
	},
	{
		"id": "4f4b38bec33b",
		"ts": "2026-09-09T22:13:37.807Z",
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
		"liquidityUsd": 31755035.63,
		"hash": "4f4b38bec33bedd1b5be84d924dd32dbff393a413818efd96e70572fc0330e70"
	},
	{
		"id": "a80ff80a1828",
		"ts": "2026-09-09T22:13:38.060Z",
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
		"liquidityUsd": 4223064.76,
		"hash": "a80ff80a18285d78beafefa05601e4ce12ae38f5ec3fe63cc993eccf4b635269"
	},
	{
		"id": "bc213829d78f",
		"ts": "2026-09-09T22:13:38.343Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1169111.37,
		"hash": "bc213829d78f3e1a17e7ef60ed93c517829615712e0071324772cfbd08e79c1c"
	},
	{
		"id": "bdb4d36942be",
		"ts": "2026-09-09T22:13:38.605Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1454673.44,
		"hash": "bdb4d36942be9a2a3d15496e14b555be5306c110047fcb90feeedd10f26a6621"
	},
	{
		"id": "5fb9aedf7779",
		"ts": "2026-09-09T22:13:38.879Z",
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
		"liquidityUsd": 2574158.31,
		"hash": "5fb9aedf7779663f88af9a7fdf86a2cb6ba8a7a9e7395ccfde5b19fce6a76621"
	},
	{
		"id": "e1ed6be25dd9",
		"ts": "2026-09-09T22:13:39.152Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1455844.4,
		"hash": "e1ed6be25dd9a0034db38d90e8dbeae540aa68555996bb0a9d7c3d88120704ca"
	},
	{
		"id": "4bf89446b399",
		"ts": "2026-09-09T22:13:39.420Z",
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
		"liquidityUsd": 13949944.35,
		"hash": "4bf89446b3992b4b999195ec65461ff90dc4e1239c1ac282cc57fea5ef955c49"
	},
	{
		"id": "29a06fe99f45",
		"ts": "2026-09-09T22:13:39.667Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 587559.61,
		"hash": "29a06fe99f45caf22bf8990daf602e35ae4f7bb80c1d005c53be1950d2122ab3"
	},
	{
		"id": "3ca34248a6ba",
		"ts": "2026-09-09T22:13:39.897Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 551102.6,
		"hash": "3ca34248a6ba556dcfd79082bb9fa011828cda66ef51ffb4c0a70ebe8456403a"
	},
	{
		"id": "9960b849e17f",
		"ts": "2026-09-09T22:13:40.133Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1618201.54,
		"hash": "9960b849e17fa6da9c026aba3ec615f8483d8a7d9f1b35861d7ee9b69c043274"
	},
	{
		"id": "011a725856d8",
		"ts": "2026-09-09T22:13:40.380Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 837479.37,
		"hash": "011a725856d8245b37fd19b7c0ab13f66ab4f2601eb8b4e8c55d0990e6d6196c"
	},
	{
		"id": "91456207457d",
		"ts": "2026-09-09T22:13:40.618Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 334206.98,
		"hash": "91456207457d73b58733beaf564886eab4e5b7a3aa76fd6a22b02e58b7c3fe70"
	},
	{
		"id": "351358e90e17",
		"ts": "2026-09-09T22:13:40.868Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 268722.55,
		"hash": "351358e90e176c7c6ebd5c4a40a6a9867d34e70f16057c3c23ce6e8a46ea6979"
	},
	{
		"id": "61e30e79b4d6",
		"ts": "2026-09-09T22:13:41.099Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 631910.4,
		"hash": "61e30e79b4d69db0978cf61000123fa810851971964c47011a059afaea61dce2"
	},
	{
		"id": "5af24ea69c77",
		"ts": "2026-09-09T22:13:41.338Z",
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
		"liquidityUsd": 662323.22,
		"hash": "5af24ea69c77f9448cddab90137591ce409b782ae3a45d6171bcaa7d551c1dd7"
	},
	{
		"id": "87304e745913",
		"ts": "2026-09-09T22:13:41.578Z",
		"symbol": "KAI",
		"token": "0xca18A528Ea897040f715edC92e6e4572780c5ca1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279920.56,
		"hash": "87304e745913d910e5b6ae30178c033d418eb9fda7125ccec5bc78871fd32389"
	},
	{
		"id": "b739aada9bfe",
		"ts": "2026-09-09T19:40:58.154Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117942432.58,
		"hash": "b739aada9bfe0222da2de5d24a1cb2ec29768c2f38c3090aeddd820d8d28b71f"
	},
	{
		"id": "922a40a095b1",
		"ts": "2026-09-09T19:40:58.610Z",
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
		"liquidityUsd": 14549179.07,
		"hash": "922a40a095b17bec00bfe24870889812f8897e47f81642cb5d1365ca9ce36a3b"
	},
	{
		"id": "43ca09828648",
		"ts": "2026-09-09T19:40:58.880Z",
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
		"liquidityUsd": 1006387.61,
		"hash": "43ca09828648d8b409543fe68d23cc432a6cb866c630e71ca79f67ab03f0cf0b"
	},
	{
		"id": "61be097cc1d6",
		"ts": "2026-09-09T19:40:59.342Z",
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
		"liquidityUsd": 31986428.88,
		"hash": "61be097cc1d6e195bfb7edf5222cc63aabe872163eef0e48f183409c711cca5b"
	},
	{
		"id": "c2d5294155b3",
		"ts": "2026-09-09T19:40:59.592Z",
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
		"liquidityUsd": 4355014.99,
		"hash": "c2d5294155b3cd7332caaf0a77b631f2a4da67fdf1c8b4bfa77f5e56088e5262"
	},
	{
		"id": "7ec16ca0bec3",
		"ts": "2026-09-09T19:40:59.859Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1210540.51,
		"hash": "7ec16ca0bec3e80eede82140ba318436cff8fb77a93b9bd9279bc6fa4a50b7c6"
	},
	{
		"id": "957fd7c053d9",
		"ts": "2026-09-09T19:41:00.119Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 856099.47,
		"hash": "957fd7c053d95a3c149c2e9b1d9466928e57e23cbf12046f7a1e7c65ad9059c5"
	},
	{
		"id": "33315541a75e",
		"ts": "2026-09-09T19:41:00.448Z",
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
		"liquidityUsd": 2601948.8,
		"hash": "33315541a75e831ef61d562241b5e5c2da3649134cde8ef5981c2cfd25bc4049"
	},
	{
		"id": "79fc5e4691cf",
		"ts": "2026-09-09T19:41:01.307Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 856099.47,
		"hash": "79fc5e4691cf351d5428e222e2730dc909635585c48122b160d7c39cab419f5e"
	},
	{
		"id": "8cb8e7c8929a",
		"ts": "2026-09-09T19:41:01.758Z",
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
		"liquidityUsd": 14365987.54,
		"hash": "8cb8e7c8929a0cce2a5ec08de5bcf0cd75e0093bf766e1301657655f3b462fd8"
	},
	{
		"id": "23269b0a00ba",
		"ts": "2026-09-09T19:41:02.010Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 592627.63,
		"hash": "23269b0a00ba1aa272540a6e98b4779e2f338d8a21954747a957f4a2541780c7"
	},
	{
		"id": "5e41327d559f",
		"ts": "2026-09-09T19:41:02.260Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 269771.69,
		"hash": "5e41327d559f273d04ef883fe50b4e33794fac456f4b9c9a10f9b07d229d7099"
	},
	{
		"id": "7758690981a7",
		"ts": "2026-09-09T19:41:02.516Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1712749.06,
		"hash": "7758690981a7b0dd7247155a3f6acd090ec28832af10f752c9caf75a99a9f0a0"
	},
	{
		"id": "e3d3f9f889b6",
		"ts": "2026-09-09T19:41:02.768Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 401981.41,
		"hash": "e3d3f9f889b68c415ef9aa9f639ff6a5b373380c4da4c97e542cbd0182ee00e6"
	},
	{
		"id": "ff4627a39f01",
		"ts": "2026-09-09T19:41:03.236Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 902802.55,
		"hash": "ff4627a39f01b3ac6828122bf31a104bd7b5dbec7e4cbf19771fe6ff967adcad"
	},
	{
		"id": "3ca9160b5a4f",
		"ts": "2026-09-09T19:41:03.488Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 574231.58,
		"hash": "3ca9160b5a4f6bb48f202888a10a1c228d20043d98031ce9315884e38ab2bffe"
	},
	{
		"id": "14ad0ad4c644",
		"ts": "2026-09-09T19:41:03.768Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 702644.74,
		"hash": "14ad0ad4c644a11c0898d4a43bba420301c08a28470c41c43e9af9cf174e6727"
	},
	{
		"id": "b1c50a21acf6",
		"ts": "2026-09-09T19:41:04.001Z",
		"symbol": "KAI",
		"token": "0xca18A528Ea897040f715edC92e6e4572780c5ca1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 296739.69,
		"hash": "b1c50a21acf674f96e57c65d0791f609304274cb3f653d3c66444f740cf732e6"
	},
	{
		"id": "b5ccfc00f0a2",
		"ts": "2026-09-09T19:41:04.234Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 626219.73,
		"hash": "b5ccfc00f0a247775d3f817bc92f3c17a96483299678267816815059f9ff75ef"
	},
	{
		"id": "37e119ea80be",
		"ts": "2026-09-09T17:00:07.084Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118201233.69,
		"hash": "37e119ea80beb0a35c62d62f940a3147e9a266b14da5f0f2def8d423de1799f7"
	},
	{
		"id": "925a1c89b73a",
		"ts": "2026-09-09T17:00:07.455Z",
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
		"liquidityUsd": 19168474.46,
		"hash": "925a1c89b73aa56265e0035c9be4d27fbcabe48f659074cf3544f4f7a1c95451"
	},
	{
		"id": "634e96ebc506",
		"ts": "2026-09-09T17:00:07.826Z",
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
		"liquidityUsd": 1012918.58,
		"hash": "634e96ebc50660aafd342853a067044a3b349c676b252001de70bc0adf7e43b0"
	},
	{
		"id": "9da3402414f0",
		"ts": "2026-09-09T17:00:08.180Z",
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
		"liquidityUsd": 31663583.88,
		"hash": "9da3402414f0d1c31cad7c76982c3ae0ede109dcbff711b8d65ad3e4ff8db6f0"
	},
	{
		"id": "5cf78580ff92",
		"ts": "2026-09-09T17:00:08.531Z",
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
		"liquidityUsd": 4395222.25,
		"hash": "5cf78580ff929cde7f264a79cd30b77b2d54d7b389120349d0791c6ff489c6ae"
	},
	{
		"id": "c3ff4b770845",
		"ts": "2026-09-09T17:00:08.909Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1213389.15,
		"hash": "c3ff4b770845eab1078cec3f2add6bc9c5992b303cc8333673c30a9235dbac04"
	},
	{
		"id": "c7434bed7c80",
		"ts": "2026-09-09T17:00:09.283Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 906252.15,
		"hash": "c7434bed7c804aadeb5f6055634f41e5230bc45cdf7d2e4908f8614272765161"
	},
	{
		"id": "bb4b049eba30",
		"ts": "2026-09-09T17:00:09.640Z",
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
		"liquidityUsd": 2618997.19,
		"hash": "bb4b049eba30e7321ea71518438fab33977a5969b449164d95284341003afa7c"
	},
	{
		"id": "21bd6bf110ee",
		"ts": "2026-09-09T17:00:10.243Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 906252.15,
		"hash": "21bd6bf110ee41599e0e6de75e925cfe2e094eebb78948321b0b762ee8f94a37"
	},
	{
		"id": "fa9f298d2e77",
		"ts": "2026-09-09T17:00:10.596Z",
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
		"liquidityUsd": 14498246.56,
		"hash": "fa9f298d2e77a71d53755df1b4e3c4d6b2007096431fc3f071eb268741f8647a"
	},
	{
		"id": "29879098b810",
		"ts": "2026-09-09T17:00:10.931Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 614190.72,
		"hash": "29879098b8100a1ae4acf1baa40e791e896f88a0cf3d74ff364cafac51e1ecf5"
	},
	{
		"id": "ed87ca8d856c",
		"ts": "2026-09-09T17:00:11.254Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 262431.33,
		"hash": "ed87ca8d856c2d9b3458b83ad0bfe65131c8c0e2f15503191dbfe79b27bd0f94"
	},
	{
		"id": "7a357c5795f1",
		"ts": "2026-09-09T17:00:11.599Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 401192.69,
		"hash": "7a357c5795f1b7ed68767dfe277044336dfcd3666df1786aeb6c866d88ad899c"
	},
	{
		"id": "a07c93170caf",
		"ts": "2026-09-09T17:00:11.943Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1501234.85,
		"hash": "a07c93170caf621d143a0d4f6ee1d848cae60fdad85c64c04cf00214f6ee3cc0"
	},
	{
		"id": "ff0f4edda832",
		"ts": "2026-09-09T17:00:12.281Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 931411.54,
		"hash": "ff0f4edda8322752c84da13f73f748a466e32b02b8681d551c130ba2c25cb36e"
	},
	{
		"id": "c7e0f7e60054",
		"ts": "2026-09-09T17:00:12.623Z",
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
		"liquidityUsd": 711901.06,
		"hash": "c7e0f7e60054e97dbe312f1337083d65e5bc45603fc32999178ec38688d30d50"
	},
	{
		"id": "870beb54b7a7",
		"ts": "2026-09-09T17:00:12.957Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 609484.74,
		"hash": "870beb54b7a749b110aa858fb73154ebb82974560c933b641ecf076e35d6e203"
	},
	{
		"id": "0e083680c70c",
		"ts": "2026-09-09T17:00:13.278Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 644898.61,
		"hash": "0e083680c70c10a710c56723436bbdbaf5a20d1a9c8fb6f3a04f1f3fe4864460"
	},
	{
		"id": "73a5a59efc62",
		"ts": "2026-09-09T12:41:36.026Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118198617.46,
		"hash": "73a5a59efc62f00f8c62248d24c8837e7086fff829ed9d6176a95ac20a2d05c9"
	},
	{
		"id": "389a592bb583",
		"ts": "2026-09-09T12:41:36.310Z",
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
		"liquidityUsd": 19397194.61,
		"hash": "389a592bb583c30fae2029db2f5dfd48dea58a38225c2277853c8bafff8b59a4"
	},
	{
		"id": "b6a1b852e151",
		"ts": "2026-09-09T12:41:36.575Z",
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
		"liquidityUsd": 1018553.24,
		"hash": "b6a1b852e151a387e0e789e286a5774a31191e413fdac71d20d10baeb9e80fa3"
	},
	{
		"id": "47ddae3f4862",
		"ts": "2026-09-09T12:41:36.858Z",
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
		"liquidityUsd": 31907612.46,
		"hash": "47ddae3f4862d5d4f24d828383d89c2a3044c2c7ec8ea722939e0e9e7d093b39"
	},
	{
		"id": "c6351a169b6c",
		"ts": "2026-09-09T12:41:37.266Z",
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
		"liquidityUsd": 4447205.23,
		"hash": "c6351a169b6ccc5e1b5de41b20989b9fdfed6cf3b074e2c99c9610b1fd016750"
	},
	{
		"id": "bf095bed01b7",
		"ts": "2026-09-09T12:41:37.549Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1217367.57,
		"hash": "bf095bed01b7ff45036d6d206d2b7f861d028db6d4206a23b413d9fa7599b5d2"
	},
	{
		"id": "10e496315c4c",
		"ts": "2026-09-09T12:41:37.829Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1274253.44,
		"hash": "10e496315c4c066aab8a71779807100a6e47733adeac22ec1cae830a94742f1b"
	},
	{
		"id": "ffce15072772",
		"ts": "2026-09-09T12:41:38.326Z",
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
		"liquidityUsd": 2634373.05,
		"hash": "ffce150727729c7d3a2e3282b153948b0853e0dd1879a3799cf4686d866643d5"
	},
	{
		"id": "4537cebac095",
		"ts": "2026-09-09T12:41:38.582Z",
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
		"liquidityUsd": 15644822.06,
		"hash": "4537cebac0958dba1df0bd2955cc9734f417f2691e7be4ca22fbfb39a492cac1"
	},
	{
		"id": "db6f989461b3",
		"ts": "2026-09-09T12:41:38.884Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 812722.56,
		"hash": "db6f989461b3702d41904884b7d90ce7afbd5a2dac585983aae20b638beccb9e"
	},
	{
		"id": "318d462001d5",
		"ts": "2026-09-09T12:41:39.106Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 705451.25,
		"hash": "318d462001d598dadba701b1d818fdf0d6646fbf3e7f203dfd6184acc422e3b6"
	},
	{
		"id": "5dee62e94d29",
		"ts": "2026-09-09T12:41:39.342Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1019299.74,
		"hash": "5dee62e94d29045d7d2a9c530ab92fb52191bcbe2c68260c48ad9b040d850b80"
	},
	{
		"id": "3222c0cb566d",
		"ts": "2026-09-09T12:41:39.589Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 375861.63,
		"hash": "3222c0cb566d4126cf204d6e00123283ed139bde4ed8f468cb91d1c5a82f8284"
	},
	{
		"id": "bb0662583571",
		"ts": "2026-09-09T12:41:39.825Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1521037.36,
		"hash": "bb06625835712822b5580747e039788a6e5286c880e06ac81ff9acdf3a2603b5"
	},
	{
		"id": "873acfed885d",
		"ts": "2026-09-09T12:41:40.051Z",
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
		"liquidityUsd": 750908.6,
		"hash": "873acfed885d9a9f8de57e25c90b23a84511a7c0a3607b2599174e82c034e1c2"
	},
	{
		"id": "bcf737ad56c4",
		"ts": "2026-09-09T12:41:40.312Z",
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
		"liquidityUsd": 277278.04,
		"hash": "bcf737ad56c4bc4a3181a26a7272a91c32cc5acccd2a86d66f88228d9974fd78"
	},
	{
		"id": "a3b3ba0b1a31",
		"ts": "2026-09-09T12:41:40.549Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 644392.18,
		"hash": "a3b3ba0b1a31ea88148b5e21de29d22bc3c705ec12efd010f951ad40b125c172"
	},
	{
		"id": "e7e989f94db0",
		"ts": "2026-09-09T12:41:40.787Z",
		"symbol": "LAPTOP",
		"token": "0xE8cFFACa7FbBbC78bcd4aBb0A8151707aF290B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5500207.6,
		"hash": "e7e989f94db0d878f567e6f40c44b55ce899679516877017bd660f0bc23837c7"
	},
	{
		"id": "ad9146504464",
		"ts": "2026-09-09T07:50:17.211Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117799095.5,
		"hash": "ad914650446458632bd6a168b782ec39f33fe937f563b311c10496b737024b16"
	},
	{
		"id": "a05ca41a8ef9",
		"ts": "2026-09-09T07:50:17.585Z",
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
		"liquidityUsd": 19692900.22,
		"hash": "a05ca41a8ef9ae0524939779409976aa9fcf89ca5aff1a3fd84fde3076292e56"
	},
	{
		"id": "94482dd4b523",
		"ts": "2026-09-09T07:50:17.810Z",
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
		"liquidityUsd": 1019642.75,
		"hash": "94482dd4b523207eb390a918d1924499a28c0222316d2a9ec61f1a9074c98462"
	},
	{
		"id": "0eebd6f1a313",
		"ts": "2026-09-09T07:50:18.022Z",
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
		"liquidityUsd": 32790059.03,
		"hash": "0eebd6f1a313df7c913b8d60869fe0599262ff65fd7ce667f6e5665adce2e095"
	},
	{
		"id": "b09af4e560f8",
		"ts": "2026-09-09T07:50:18.261Z",
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
		"liquidityUsd": 4452456.97,
		"hash": "b09af4e560f85d27d9c4645d571d00e36dd36a100d330a9780b16d8c84facd13"
	},
	{
		"id": "c78dadb7ce07",
		"ts": "2026-09-09T07:50:18.458Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1222726.13,
		"hash": "c78dadb7ce070662660ba5e2d1cedc78b1f0055f013a39ecc4380670f2055e4b"
	},
	{
		"id": "3b4ed24b5b52",
		"ts": "2026-09-09T07:50:18.649Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32790059.03,
		"hash": "3b4ed24b5b525d8d17b24a7f9fed7185c11712d54f3436dfcafa1da1e5b123cd"
	},
	{
		"id": "673cead5f3b1",
		"ts": "2026-09-09T07:50:18.877Z",
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
		"liquidityUsd": 2371951.25,
		"hash": "673cead5f3b16baf5335a2369d257fdfa3cdd26aa421bf3de036107d3434dfb4"
	},
	{
		"id": "c66b6bba3136",
		"ts": "2026-09-09T07:50:19.080Z",
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
		"liquidityUsd": 15863081.06,
		"hash": "c66b6bba3136e237197f8ef4ba31e0214fc432b69e5289f55a86101c2bdf988f"
	},
	{
		"id": "53c5d3149077",
		"ts": "2026-09-09T07:50:19.286Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 290978.97,
		"hash": "53c5d3149077fa04cd5506f54571d176e713c7a04fbb816c1e64be72198979a5"
	},
	{
		"id": "038af1c23c13",
		"ts": "2026-09-09T07:50:19.510Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 927837.3,
		"hash": "038af1c23c138dc5788ff6316e2bad5204e4020ec9f7ca644c04ee0d2a9cf091"
	},
	{
		"id": "8daa1b43bebb",
		"ts": "2026-09-09T07:50:19.705Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 425051.87,
		"hash": "8daa1b43bebb4c98c9bafd64192934d46996dd723ff531ad19941e9cd5be0463"
	},
	{
		"id": "82ecf5f7b5cb",
		"ts": "2026-09-09T07:50:19.886Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 768322.22,
		"hash": "82ecf5f7b5cb56e3a63e2901cffdac5bc94406d407715bdff908f361275c8767"
	},
	{
		"id": "9098fc9511dc",
		"ts": "2026-09-09T07:50:20.098Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3123776.05,
		"hash": "9098fc9511dc1432a14def140572612f24bed10140232db3d72a8453cbcca666"
	},
	{
		"id": "1127c8d6027f",
		"ts": "2026-09-09T07:50:20.282Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1527735.8,
		"hash": "1127c8d6027fdc4cfbc768f379345a1b1ac489081a51035e243daf31d09d9ecf"
	},
	{
		"id": "db6d6d6f177b",
		"ts": "2026-09-09T07:50:20.493Z",
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
		"liquidityUsd": 690723.96,
		"hash": "db6d6d6f177ba5c42022aaae46d16ace9897ce548f14e12328c40f29a5c472c6"
	},
	{
		"id": "1e5be1722423",
		"ts": "2026-09-09T07:50:20.685Z",
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
		"liquidityUsd": 415677.39,
		"hash": "1e5be17224239d62be59300f107da54f0223660b7df31a1c67013bfe52b93f73"
	},
	{
		"id": "45b354cfbb1a",
		"ts": "2026-09-09T07:50:20.886Z",
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
		"liquidityUsd": 1333441.01,
		"hash": "45b354cfbb1a7a42a02d31e413b647c7a6379e068b22241ebc681cd4bc07c6b0"
	},
	{
		"id": "2deeeaa48998",
		"ts": "2026-09-09T07:50:21.206Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182171.09,
		"hash": "2deeeaa489982758792c21ea9a8e65b88f10f28c7e2c7b8ae139318b78a76135"
	},
	{
		"id": "c28618d89061",
		"ts": "2026-09-09T02:52:54.815Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117520334.3,
		"hash": "c28618d89061a3f5efe4be023373e2f3e1640c113eb18d440f2639b0f0e49c1c"
	},
	{
		"id": "e5989d6a584b",
		"ts": "2026-09-09T02:52:55.064Z",
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
		"liquidityUsd": 19640508.44,
		"hash": "e5989d6a584b8477db3841dd1e787f2625cba177aaccb76a8c38217e167ebc2a"
	},
	{
		"id": "abe1a859beb0",
		"ts": "2026-09-09T02:52:55.511Z",
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
		"liquidityUsd": 1002949.8,
		"hash": "abe1a859beb0702fb5ed94480d90609972cd4fcad5ed5eead87401f13b4f71e5"
	},
	{
		"id": "9789bc3af458",
		"ts": "2026-09-09T02:52:55.792Z",
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
		"liquidityUsd": 32756818.11,
		"hash": "9789bc3af458353dc251d42936a853f1a0a7d7312dc41ddaf20a89c87998365f"
	},
	{
		"id": "25dabb17f152",
		"ts": "2026-09-09T02:52:56.038Z",
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
		"liquidityUsd": 4396329.07,
		"hash": "25dabb17f152ab198f8eab06f79a5f69458225ac2ec1e7b2f286895c381c6226"
	},
	{
		"id": "9b32f9c62737",
		"ts": "2026-09-09T02:52:56.273Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1208356.47,
		"hash": "9b32f9c62737a15d4e740544281527b1a3bf3914e098d20ac5dbc629c54db5d1"
	},
	{
		"id": "cc767079a328",
		"ts": "2026-09-09T02:52:56.529Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32756818.11,
		"hash": "cc767079a328914247c475494a039596e93747b22f9dd0214f63c4407f4d6751"
	},
	{
		"id": "b78fd82c6385",
		"ts": "2026-09-09T02:52:56.991Z",
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
		"liquidityUsd": 2356169.33,
		"hash": "b78fd82c63857f9ee0eaefb5d028487cb2b2b1e55e84f1424de3e8b5c536fac0"
	},
	{
		"id": "6905befffc33",
		"ts": "2026-09-09T02:52:57.261Z",
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
		"liquidityUsd": 15227341.3,
		"hash": "6905befffc33f3431cc560fd47db578e2762faa674527717798ccba00abda987"
	},
	{
		"id": "f5ca146eaf3c",
		"ts": "2026-09-09T02:52:57.518Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 291146.06,
		"hash": "f5ca146eaf3c4dc59c82efe660eb5636896ba9efc835968b333a28695b045a06"
	},
	{
		"id": "826c41363adb",
		"ts": "2026-09-09T02:52:57.742Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 922513.22,
		"hash": "826c41363adb1078f715af749be182987c47ff87141087a680261e010a1cbfe8"
	},
	{
		"id": "cb0590ad391a",
		"ts": "2026-09-09T02:52:57.976Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 570288.52,
		"hash": "cb0590ad391aa5aafc07a625d719c3d8af1d396d1317985d0babe224b98e147b"
	},
	{
		"id": "7ccc3d291033",
		"ts": "2026-09-09T02:52:58.199Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 320077.46,
		"hash": "7ccc3d29103323f0fe3b404c73c77b5908066df657b0be91dfd44e31f96800b7"
	},
	{
		"id": "8e1bb2bc6c5e",
		"ts": "2026-09-09T02:52:58.424Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1617173.34,
		"hash": "8e1bb2bc6c5efd008138f28c308b14aeb206e50b35021648ee60d9ae126bebab"
	},
	{
		"id": "2239210ad55b",
		"ts": "2026-09-09T02:52:58.648Z",
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
		"liquidityUsd": 1533211.29,
		"hash": "2239210ad55b015d639b9cc0c20996ce2ef1cfd820f1db219b753c6c971f9789"
	},
	{
		"id": "073e25c714e4",
		"ts": "2026-09-09T02:52:58.883Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3098060.33,
		"hash": "073e25c714e49dd916a33bf6a61c4370cfa92d9d5a9f2944ac4f05104fba4c46"
	},
	{
		"id": "d8bec3d3da63",
		"ts": "2026-09-09T02:52:59.104Z",
		"symbol": "LAPTOP",
		"token": "0xebE772bB43bD3166C4DFC968F1483472Ac756b07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5242145.44,
		"hash": "d8bec3d3da63305317a1de18ab17bc07ab8a4aecb847262de5f9511fea184bdd"
	},
	{
		"id": "22ad709c48ef",
		"ts": "2026-09-09T02:52:59.329Z",
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
		"liquidityUsd": 616606.07,
		"hash": "22ad709c48efae0b80d1bc3985dce9f7bc0a77bc9dd2a9b13b19e620bd27742e"
	},
	{
		"id": "d3fbc2c73300",
		"ts": "2026-09-09T02:52:59.553Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 400871.25,
		"hash": "d3fbc2c73300900e5bd55a7dec8e2c665af9a85870575e69e815258b034d55d9"
	},
	{
		"id": "dc78ac46c48f",
		"ts": "2026-09-08T23:09:17.958Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117461225.54,
		"hash": "dc78ac46c48f9989268b4a44b1263532a28908b46b60e6330e85c08ec1b1ac0a"
	},
	{
		"id": "9f170bbc7e85",
		"ts": "2026-09-08T23:09:18.520Z",
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
		"liquidityUsd": 19217820.34,
		"hash": "9f170bbc7e853664b3214479cec21e3f6625ed2409519de2d6cf34580773af8a"
	},
	{
		"id": "d28320bd177d",
		"ts": "2026-09-08T23:09:18.791Z",
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
		"liquidityUsd": 988725.8,
		"hash": "d28320bd177d8fd0ba63c10fcf9125062fe81ad5471e72f58bd4c8508ad2d854"
	},
	{
		"id": "136539a8b63a",
		"ts": "2026-09-08T23:09:19.061Z",
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
		"liquidityUsd": 32765891.28,
		"hash": "136539a8b63aadab5805e7357cb929aa60906da85035d120fe37bf090ad863f6"
	},
	{
		"id": "126a51e5baa1",
		"ts": "2026-09-08T23:09:19.356Z",
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
		"liquidityUsd": 4424705.05,
		"hash": "126a51e5baa1b8aee0d1c1dbc6a99cff496d9197056ac5e324347f3b3e40b189"
	},
	{
		"id": "5a89888e3e48",
		"ts": "2026-09-08T23:09:19.608Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1206401.45,
		"hash": "5a89888e3e48414a8492ea605956358478af78d4af40f351637038c69135856c"
	},
	{
		"id": "a5360f17aa80",
		"ts": "2026-09-08T23:09:19.876Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32765891.28,
		"hash": "a5360f17aa804050675c695213dd7b149d89bb6cfe237ce048084093833e756c"
	},
	{
		"id": "1185cbf787bd",
		"ts": "2026-09-08T23:09:20.126Z",
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
		"liquidityUsd": 2348051.98,
		"hash": "1185cbf787bde1b4e1e036af2bc68326e80e8da01f04c103287a05e517dceab1"
	},
	{
		"id": "2edaf75227a8",
		"ts": "2026-09-08T23:09:20.382Z",
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
		"liquidityUsd": 15094174.1,
		"hash": "2edaf75227a8414249c9c03457874f6304b4131344814a4eb61080d15c0cfabc"
	},
	{
		"id": "fb391b8c5a4b",
		"ts": "2026-09-08T23:09:20.649Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 294549.33,
		"hash": "fb391b8c5a4b27ab414d835b8b4651a3252b1a7cc2d476580479ab83a26df9b7"
	},
	{
		"id": "3f3994f8fc39",
		"ts": "2026-09-08T23:09:20.881Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 950768.13,
		"hash": "3f3994f8fc390605d4d11578445f74a196300ad3ae3cc8e5fc31d7fd3399d336"
	},
	{
		"id": "497c8a100777",
		"ts": "2026-09-08T23:09:21.130Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 646871.06,
		"hash": "497c8a1007775ed356398770c2563a266d2846260958f45a1d02f1822377de2a"
	},
	{
		"id": "bd5d1649efe3",
		"ts": "2026-09-08T23:09:21.363Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1674149.09,
		"hash": "bd5d1649efe3686559de10c89e1b43c61a53665e82c5699b741dfdea0771a850"
	},
	{
		"id": "3257a802fb8c",
		"ts": "2026-09-08T23:09:21.596Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 329604.61,
		"hash": "3257a802fb8c89a992094d260adb7fd91a9ad49402f170d1a4e20e29515d1346"
	},
	{
		"id": "735325636227",
		"ts": "2026-09-08T23:09:21.843Z",
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
		"liquidityUsd": 1508811.14,
		"hash": "735325636227e6c4666bbfd98046f3364d2fe182ac0bb7ac3fe85000d46a6749"
	},
	{
		"id": "9e209c6262eb",
		"ts": "2026-09-08T23:09:22.074Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3161621.39,
		"hash": "9e209c6262eba91e3b2d7e9e768c42a65257fb6fd87c8035b6d617374afa9d12"
	},
	{
		"id": "addbf8828b92",
		"ts": "2026-09-08T23:09:22.322Z",
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
		"liquidityUsd": 633341.54,
		"hash": "addbf8828b92c6df3344bb18ae4508f8d9a352b1011bf5ae72e42cb87fb9a0e0"
	},
	{
		"id": "5e245f287420",
		"ts": "2026-09-08T23:09:22.556Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148661.05,
		"hash": "5e245f287420790448b36a14fc50c5d8013c63dbfeeff7d8ac860827dfd0cbe9"
	},
	{
		"id": "0180be720253",
		"ts": "2026-09-08T23:09:22.792Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 437123.89,
		"hash": "0180be720253488189103255de6bc5d0d8949a493bb41f142a06325f529e61d4"
	},
	{
		"id": "8142bcbb3f5b",
		"ts": "2026-09-08T20:39:21.734Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117345400.72,
		"hash": "8142bcbb3f5b42ed607803fcdf255e55b63ef26cdfce3fa5473716594fe7d09d"
	},
	{
		"id": "f6aad872161c",
		"ts": "2026-09-08T20:39:22.380Z",
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
		"liquidityUsd": 16934786.29,
		"hash": "f6aad872161c9785bfde14d8a890a41a09869546c08052f43e9a0830b64aefcb"
	},
	{
		"id": "6c4d80b6953f",
		"ts": "2026-09-08T20:39:22.848Z",
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
		"liquidityUsd": 987331.98,
		"hash": "6c4d80b6953fc83dbd371b825dafbffb6e212c72d5e6ec9dcf3d07c89172ebeb"
	},
	{
		"id": "38232ff99acc",
		"ts": "2026-09-08T20:39:23.293Z",
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
		"liquidityUsd": 32606281.9,
		"hash": "38232ff99acc1db57be5c1ce1a6b7ea263869354389e27826a1feddd2e9af1ad"
	},
	{
		"id": "d482cf06170d",
		"ts": "2026-09-08T20:39:23.547Z",
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
		"liquidityUsd": 4424331.8,
		"hash": "d482cf06170dd531be699bafa6bc3cc92cc335cdd110eeecf5dea0792020509b"
	},
	{
		"id": "10fb4d87595d",
		"ts": "2026-09-08T20:39:23.808Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1210121.62,
		"hash": "10fb4d87595dca3f8edf726d90f7112b9769e15f23b2d3f3d30e55649d75a53b"
	},
	{
		"id": "149111d92feb",
		"ts": "2026-09-08T20:39:24.097Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32606281.9,
		"hash": "149111d92feb8b32625f83dcc26720692fc48f95883a227061e8dee0c0ce0236"
	},
	{
		"id": "47c2105c07cd",
		"ts": "2026-09-08T20:39:24.365Z",
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
		"liquidityUsd": 2342235.26,
		"hash": "47c2105c07cd639d0cce83d1992c5907c94fb043b2125fb37f807ae2b4aa2838"
	},
	{
		"id": "a29e478e1a0e",
		"ts": "2026-09-08T20:39:24.823Z",
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
		"liquidityUsd": 14769614.11,
		"hash": "a29e478e1a0e243ecf2603e07e3dc610dfb5395b6a83dff0a7e828ca559acc42"
	},
	{
		"id": "038a371828b3",
		"ts": "2026-09-08T20:39:25.080Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 296336.64,
		"hash": "038a371828b38e4ac2a00c2bedc35b960a28d1fff3a2f48a47f3118b86dbe476"
	},
	{
		"id": "6f091a106d3a",
		"ts": "2026-09-08T20:39:25.317Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 919466.67,
		"hash": "6f091a106d3a8fc1c9e4c48ab8f7d67711e604cdd2e65e53330f7fc020c337e6"
	},
	{
		"id": "f09c3169ca0e",
		"ts": "2026-09-08T20:39:25.553Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 325952.94,
		"hash": "f09c3169ca0ee13e7076f09a64da21a202d5c207d093ed2a7856c18c933ea9e6"
	},
	{
		"id": "544aebd2cf3d",
		"ts": "2026-09-08T20:39:25.788Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1574317.49,
		"hash": "544aebd2cf3d30ec4a48186dec04adef9d3740935bc014884dafd2fffc40830e"
	},
	{
		"id": "e7db2a5cd009",
		"ts": "2026-09-08T20:39:26.020Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 737259.9,
		"hash": "e7db2a5cd009353b3232fce912415f6c856a374ef1ba673c4068611cae4274d1"
	},
	{
		"id": "c375655a4182",
		"ts": "2026-09-08T20:39:26.253Z",
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
		"liquidityUsd": 1517062.58,
		"hash": "c375655a418272e43ae6d3b23c54d43ce44c4ada47d276aac2ba964be3ae498f"
	},
	{
		"id": "33fcfafe8db2",
		"ts": "2026-09-08T20:39:26.492Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3108765.2,
		"hash": "33fcfafe8db25359ec053f5093bb5bd79c34a59034ac599d6c8cdc6ef6020b07"
	},
	{
		"id": "6efbdc6bcadf",
		"ts": "2026-09-08T20:39:26.734Z",
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
		"liquidityUsd": 680595.76,
		"hash": "6efbdc6bcadf37a46c363a0a59c5d3a01ab47719e277469c2f648ba60a9142ff"
	},
	{
		"id": "b1ba6eed5568",
		"ts": "2026-09-08T20:39:26.973Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 179540.25,
		"hash": "b1ba6eed55687c690e54a9cdbf448aac675840d81077da0373a414bbd27ad865"
	},
	{
		"id": "130aad4fe8e4",
		"ts": "2026-09-08T20:39:27.211Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3137563.27,
		"hash": "130aad4fe8e448bd0b39d2f9c6f11837e3bc2427fbf62a339015c4f5386fcab7"
	},
	{
		"id": "1be723694271",
		"ts": "2026-09-08T17:43:20.441Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117558547.09,
		"hash": "1be7236942718e837fb1a7e307d4ffd2e61ab2ccf233d6820649fa2e57f46cbd"
	},
	{
		"id": "f63ea5ecf762",
		"ts": "2026-09-08T17:43:20.948Z",
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
		"liquidityUsd": 17820295.37,
		"hash": "f63ea5ecf762ac9bd75f3a3969ee51c4b055144d2ec29b98891dc495ab969adf"
	},
	{
		"id": "60e28cf7b984",
		"ts": "2026-09-08T17:43:21.209Z",
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
		"liquidityUsd": 986674.78,
		"hash": "60e28cf7b9841e4833948e67c4f578a476cf9466f3a617c205ad721d58914e63"
	},
	{
		"id": "7be752022396",
		"ts": "2026-09-08T17:43:21.683Z",
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
		"liquidityUsd": 32713305.52,
		"hash": "7be7520223969fdab2b8f9ba8e96b2d4b3e733c4b6109b9f7b2bf148127d9799"
	},
	{
		"id": "750cd73b39d4",
		"ts": "2026-09-08T17:43:21.953Z",
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
		"liquidityUsd": 4454753.21,
		"hash": "750cd73b39d4fe6cda4fe3c40854a39c2b3a2fd9963fa5659bafedd63f6d410d"
	},
	{
		"id": "e322896a99ce",
		"ts": "2026-09-08T17:43:22.229Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1214160.07,
		"hash": "e322896a99ce0b366ba1ecb8a1fd93fb69aae7266c9cfeb245f3ab90c47f0f74"
	},
	{
		"id": "ec584c79d48e",
		"ts": "2026-09-08T17:43:22.476Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32713305.52,
		"hash": "ec584c79d48ec35bf958d40eb8f7db17597f64894f20e8a41d446196e6e1e072"
	},
	{
		"id": "507fc47efe61",
		"ts": "2026-09-08T17:43:22.733Z",
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
		"liquidityUsd": 2350114.11,
		"hash": "507fc47efe6198b2b824c04d195245d709ab181581a5edbe39dac32543239079"
	},
	{
		"id": "5b11d1ac5bce",
		"ts": "2026-09-08T17:43:23.199Z",
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
		"liquidityUsd": 14476697.81,
		"hash": "5b11d1ac5bce14f8213ebf98e4e960f6ff0b48a6b0b1950dec73c5645c23f722"
	},
	{
		"id": "210e4eaece1b",
		"ts": "2026-09-08T17:43:23.454Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 746887.21,
		"hash": "210e4eaece1b1d9c927a63ff01d4c4ec509a8f4bf1f8f28888c4b4c69d3e0f34"
	},
	{
		"id": "ff63cf5fa5ca",
		"ts": "2026-09-08T17:43:23.690Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 979663.01,
		"hash": "ff63cf5fa5ca9a600b5722db458643f9b2f1b529b8bd974f6294c99fcebf6c31"
	},
	{
		"id": "0cc803aed5e9",
		"ts": "2026-09-08T17:43:23.927Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 296374.66,
		"hash": "0cc803aed5e9728a7bbf1ba840944618f48ee54fc0d9ef78cc2a51c97365c7ef"
	},
	{
		"id": "aa5a652b831d",
		"ts": "2026-09-08T17:43:24.570Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1600225.5,
		"hash": "aa5a652b831db3f72c57b81cd462fc982402b7bc595190039496761b0e0499ad"
	},
	{
		"id": "bfd107946ff9",
		"ts": "2026-09-08T17:43:24.809Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3191155.28,
		"hash": "bfd107946ff931776ef1f12dc7365e6530f3d7c60ec0d9ebb990418fc5b85188"
	},
	{
		"id": "34b3d281b51f",
		"ts": "2026-09-08T17:43:25.044Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 298876.54,
		"hash": "34b3d281b51f4773d866146b9f41e0f34bdf70314e11084fbb01e0b1a18b26f5"
	},
	{
		"id": "5fd57dddafc2",
		"ts": "2026-09-08T17:43:25.389Z",
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
		"liquidityUsd": 1536170.17,
		"hash": "5fd57dddafc2c07ded2d78c6a74443205f54cc78632b231b661d89d3c89f11ea"
	},
	{
		"id": "146b4e47f8d9",
		"ts": "2026-09-08T17:43:25.628Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 190860.17,
		"hash": "146b4e47f8d9ef0bb2d1d7a5b3130bcd5e3c6ee059ceacecd3925106f6821237"
	},
	{
		"id": "815fd3e2f415",
		"ts": "2026-09-08T17:43:25.872Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 163771.92,
		"hash": "815fd3e2f4151f62d6c57e2ea97086494e7da534dd83108b17ff72f77e9ad475"
	},
	{
		"id": "19b8012598f7",
		"ts": "2026-09-08T17:43:26.104Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3317961.59,
		"hash": "19b8012598f7bef4d14b09d06369281c871437210769969b475e4ac7920bdb13"
	},
	{
		"id": "fa385cae38bc",
		"ts": "2026-09-08T13:16:33.263Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116986457.56,
		"hash": "fa385cae38bce64aef4457ddf2d2ad192490e7f27fee33d1eee261418833645e"
	},
	{
		"id": "ecb0076e898e",
		"ts": "2026-09-08T13:16:33.547Z",
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
		"liquidityUsd": 14398305.56,
		"hash": "ecb0076e898ecc32b469e97d3a377d145d3f02d0eb0c557bdc3cc88a61e4927c"
	},
	{
		"id": "7c09ca8f39a5",
		"ts": "2026-09-08T13:16:33.792Z",
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
		"liquidityUsd": 995592.58,
		"hash": "7c09ca8f39a5152538ae7e3310b5909acd07f24b7375137017d53b8efea6c6d3"
	},
	{
		"id": "7ad95d18f5b2",
		"ts": "2026-09-08T13:16:34.060Z",
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
		"liquidityUsd": 33392075.96,
		"hash": "7ad95d18f5b247d5f437aedf54c2bd641bb91afcd290cc570c91ed67bc68b0b4"
	},
	{
		"id": "6e474296aa56",
		"ts": "2026-09-08T13:16:34.314Z",
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
		"liquidityUsd": 4413953.07,
		"hash": "6e474296aa56287ac77dfa0c65a9068ffcd1b86332b4f4eebc5e204f8e2fd7d8"
	},
	{
		"id": "70624ded1708",
		"ts": "2026-09-08T13:16:34.558Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1203323.75,
		"hash": "70624ded1708085d084b86d4ccdc972e07b51d73c6e89d256918fb941d2347c3"
	},
	{
		"id": "f55db0d84929",
		"ts": "2026-09-08T13:16:34.791Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33392075.96,
		"hash": "f55db0d849298d86db8920d8346fb97ba023c14109bee7c0c04cc5623ba2b8e9"
	},
	{
		"id": "f7bafc0eb820",
		"ts": "2026-09-08T13:16:35.051Z",
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
		"liquidityUsd": 2333100.37,
		"hash": "f7bafc0eb82074572a6678c60a9df5fcebb491b8ba4b11951b553d1e44c3acd9"
	},
	{
		"id": "f56be752e3f4",
		"ts": "2026-09-08T13:16:35.313Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 729738.89,
		"hash": "f56be752e3f4a5c02f5226d724c5dce63e5799103b95b7e69c5659b98e3515a3"
	},
	{
		"id": "6bbb30aff4cd",
		"ts": "2026-09-08T13:16:35.577Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 957832.17,
		"hash": "6bbb30aff4cd0f1eda5c6f8e913cbe4604a6930339efade3c5808fb6e3b78352"
	},
	{
		"id": "ad802bb3873c",
		"ts": "2026-09-08T13:16:35.808Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1586686.18,
		"hash": "ad802bb3873c11813d03fd5515ad3a944383215722ce51b8f6a224fa4b51beea"
	},
	{
		"id": "78d90629cec9",
		"ts": "2026-09-08T13:16:36.056Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 300419.8,
		"hash": "78d90629cec974fec734670595ceeeca4fc345eab06261f1be1717a6cd86f47f"
	},
	{
		"id": "8e4f9bd7b3f0",
		"ts": "2026-09-08T13:16:36.300Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3182590.84,
		"hash": "8e4f9bd7b3f0b4d2f80899150fe53942f359f7b1dad5cc59c241f613f964be99"
	}
]
