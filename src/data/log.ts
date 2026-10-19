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
	"updatedAt": "2026-10-19T18:39:14.919Z",
	"tokensScored": 20759,
	"verdictsIssued": 20759,
	"safe": 17698,
	"risky": 1470,
	"likelyRug": 1591,
	"ticks": 1173
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "24ac067774ee",
		"ts": "2026-10-19T18:39:07.597Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146358671.02,
		"hash": "24ac067774ee4d7c50fe7628826b80ff5bf662bd172d2ef79155bec0269983e0"
	},
	{
		"id": "e7c9b86416be",
		"ts": "2026-10-19T18:39:08.076Z",
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
		"liquidityUsd": 18178138.87,
		"hash": "e7c9b86416beb52aaaba00648e56d68aba4cbbdbf4e90f965b66e01cbd535651"
	},
	{
		"id": "6f6fb014b19f",
		"ts": "2026-10-19T18:39:08.656Z",
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
		"liquidityUsd": 779298.88,
		"hash": "6f6fb014b19f4ac523f677e85f6b98b8447df56939cbfd19de9759acf47ef49a"
	},
	{
		"id": "4887438c626b",
		"ts": "2026-10-19T18:39:09.031Z",
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
		"liquidityUsd": 33802399.05,
		"hash": "4887438c626b7520dbce64ff31fe2319cf141ef2c3c52290859cf5c646bc6658"
	},
	{
		"id": "f93bcb5e38c5",
		"ts": "2026-10-19T18:39:09.401Z",
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
		"liquidityUsd": 4606151.73,
		"hash": "f93bcb5e38c553054c054f8bc69624a60ad294425c4bc9ec7f7a7dea66268f8a"
	},
	{
		"id": "a5d43d350afa",
		"ts": "2026-10-19T18:39:09.772Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1127948.62,
		"hash": "a5d43d350afaac9e170bbbe125ea58d0b6b3d7cfb63b8dd5e45afb84da6fe700"
	},
	{
		"id": "1834a1ad8b50",
		"ts": "2026-10-19T18:39:10.194Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33802399.05,
		"hash": "1834a1ad8b5070140f31aba9075617ecd7ea4e1833e6c74043832db03adfd200"
	},
	{
		"id": "8cfc87e2fafc",
		"ts": "2026-10-19T18:39:10.612Z",
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
		"liquidityUsd": 2691219.95,
		"hash": "8cfc87e2fafc79c66ee445443bb2dd0d6899aac9c6bd1310f0020629ea07f381"
	},
	{
		"id": "cdb57c5facb0",
		"ts": "2026-10-19T18:39:11.115Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1784120.77,
		"hash": "cdb57c5facb0e6bfcc1d1a1d43195087f5536f5b4217485df735d53d99d217f2"
	},
	{
		"id": "5afc468dd00e",
		"ts": "2026-10-19T18:39:11.543Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1340956.5,
		"hash": "5afc468dd00e57ec185031e78976342ccbefa9dc96b7f8bf719e637e1e4628b8"
	},
	{
		"id": "0f1a3b30a235",
		"ts": "2026-10-19T18:39:11.894Z",
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
		"liquidityUsd": 3246703.83,
		"hash": "0f1a3b30a235500e4c0baeae8680d724222bebc0be4c24d0fd7cb770cb0ab514"
	},
	{
		"id": "65444e10621c",
		"ts": "2026-10-19T18:39:12.271Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1312296.69,
		"hash": "65444e10621c024d4534a211d2d0471b060d9ee6d9f2f3f3fbe1ab19d29889ac"
	},
	{
		"id": "7165149a70db",
		"ts": "2026-10-19T18:39:12.642Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2021762.89,
		"hash": "7165149a70db6f12d4c06c76898bf0095da9da8aacfce9aae957bebe9692a44c"
	},
	{
		"id": "51da378dec0a",
		"ts": "2026-10-19T18:39:13.004Z",
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
		"liquidityUsd": 17274316.02,
		"hash": "51da378dec0ab5365ccbcb25538ee18599449b096a23f6ee5f448e39512b2174"
	},
	{
		"id": "1d42dcd651f4",
		"ts": "2026-10-19T18:39:13.471Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 203269.43,
		"hash": "1d42dcd651f420181a1719c2f5e298e736f7818bf19ad191bf741e3cc4f40854"
	},
	{
		"id": "aaa95ff9e1b4",
		"ts": "2026-10-19T18:39:13.821Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4013217.3,
		"hash": "aaa95ff9e1b43cf25a93fffdbc2161b938d22f05469ada8a11d8b13bd6c9749f"
	},
	{
		"id": "fbc46e5ec2a8",
		"ts": "2026-10-19T18:39:14.170Z",
		"symbol": "Paper",
		"token": "0x6aeDAbF7D4E0302d776FbF8EB11CFB1993764b07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10302246.84,
		"hash": "fbc46e5ec2a85bbda238443abf9c9563a0d60b86da27898ca403fc2060debf52"
	},
	{
		"id": "eb9ae40299d0",
		"ts": "2026-10-19T18:39:14.546Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 194922.85,
		"hash": "eb9ae40299d093d6e2cebbc93724be67f470cd9d1a7862e0d5789be3e8c7e70e"
	},
	{
		"id": "c13193ba5f71",
		"ts": "2026-10-19T18:39:14.918Z",
		"symbol": "MSTRc",
		"token": "0xb2000000000000000000004884b426556b92883d",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1081340.55,
		"hash": "c13193ba5f7134072c2c35c77bad37f657d4e7f6644e4e987ca6609fd8d3ce1c"
	},
	{
		"id": "313216786e5f",
		"ts": "2026-10-19T11:59:35.279Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147777172.49,
		"hash": "313216786e5f5b1e67652863c32447c389795d3454c50d43ce0d5aa4d11fda1a"
	},
	{
		"id": "dde7bf191b4c",
		"ts": "2026-10-19T11:59:35.647Z",
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
		"liquidityUsd": 18345011.89,
		"hash": "dde7bf191b4cdc5bde77c65f1c0b65529bd2e24aadee9e5ca3c75f91754c3437"
	},
	{
		"id": "0495139d1f42",
		"ts": "2026-10-19T11:59:35.848Z",
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
		"liquidityUsd": 789013.05,
		"hash": "0495139d1f4253645ef4ae27676d83db10d5de693012718ec0c2528c712fc468"
	},
	{
		"id": "50f0eafc96a4",
		"ts": "2026-10-19T11:59:36.051Z",
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
		"liquidityUsd": 35031603.69,
		"hash": "50f0eafc96a4424b00d6dff479b64c37d2312b88e519927a8725519454df95f3"
	},
	{
		"id": "fa5f542ec4fb",
		"ts": "2026-10-19T11:59:36.244Z",
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
		"liquidityUsd": 4644483.74,
		"hash": "fa5f542ec4fb725b4fcc50f9a12fc61d417f2e57247fe58076b4a6d6147c35d7"
	},
	{
		"id": "4fe0941dd540",
		"ts": "2026-10-19T11:59:36.459Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1146495.35,
		"hash": "4fe0941dd540584500b38919a09ee47e82b0feb94c6acabf6e3b04d47a9919bd"
	},
	{
		"id": "2bd972f678fd",
		"ts": "2026-10-19T11:59:36.658Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35031603.69,
		"hash": "2bd972f678fdf6e7b42db2758329dae08c35134b9ef34d9eec676057eb9b97f1"
	},
	{
		"id": "fc7bcd2b6200",
		"ts": "2026-10-19T11:59:36.877Z",
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
		"liquidityUsd": 2737069,
		"hash": "fc7bcd2b620046265bf7cfff02ced6867bb54cf9797c77e7d489b81cccd10360"
	},
	{
		"id": "4b2bd24b7160",
		"ts": "2026-10-19T11:59:37.178Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1758115.6,
		"hash": "4b2bd24b7160623f68b736604589eca3f1d0216cde7041f3860fcd16d554ccad"
	},
	{
		"id": "1c9de4582de7",
		"ts": "2026-10-19T11:59:37.392Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1324973.22,
		"hash": "1c9de4582de7d3579dc9eab3a5c2d7e84bde2ec3d658c1f2d6063e39f0c0c1b0"
	},
	{
		"id": "a352dcd81fcf",
		"ts": "2026-10-19T11:59:37.600Z",
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
		"liquidityUsd": 17249694.01,
		"hash": "a352dcd81fcf8b813ad812c8219a328cdd5fa249e0ba727e6db4b3f90d40065b"
	},
	{
		"id": "75339e1f00be",
		"ts": "2026-10-19T11:59:37.795Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2032058.19,
		"hash": "75339e1f00bef86f6fd6cc044bb7b8c6f6a126f7b37ef5a7abec9f897ac1a5d9"
	},
	{
		"id": "84d930c51f10",
		"ts": "2026-10-19T11:59:38.000Z",
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
		"liquidityUsd": 3243399.65,
		"hash": "84d930c51f103b51dd7aa3cbb93b31b57909eab36d8c03be15f3e2434a2591a3"
	},
	{
		"id": "3e4b179f1608",
		"ts": "2026-10-19T11:59:38.215Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 441284.09,
		"hash": "3e4b179f16083d1e57499968ca1aac4895115bc42851f593219630048f349ddb"
	},
	{
		"id": "552dd2065ad5",
		"ts": "2026-10-19T11:59:38.419Z",
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
		"liquidityUsd": 1303320.55,
		"hash": "552dd2065ad589f0c1dd4cf3f7e3de0a1a57c7efd326e3016f57bde74ad4f0ee"
	},
	{
		"id": "fadd0aa65009",
		"ts": "2026-10-19T11:59:38.659Z",
		"symbol": "Paper",
		"token": "0x3E199F015ea827F27C2671f8EaE516b8944FFB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10199548.68,
		"hash": "fadd0aa65009ff094d23196002f6aa8512d6ff1b6f8c9457ad19d82e04e815d9"
	},
	{
		"id": "cc8b4519e500",
		"ts": "2026-10-19T11:59:38.850Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 183802.4,
		"hash": "cc8b4519e5001386ec0cde8299b007b5161271d7f9f08bd5d2330d848417934b"
	},
	{
		"id": "162ade09ef90",
		"ts": "2026-10-19T11:59:39.059Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4016761.54,
		"hash": "162ade09ef9044089059ffa66da06a2e4118ec2691d94996a5de0278e29c5841"
	},
	{
		"id": "34e86adb5619",
		"ts": "2026-10-19T05:39:53.634Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147837866.92,
		"hash": "34e86adb5619cbb697152b6b58f615076ae78bc0cdb52c25f4fcdbf90c7d4115"
	},
	{
		"id": "b18f8f39ee9f",
		"ts": "2026-10-19T05:39:53.929Z",
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
		"liquidityUsd": 18647602.05,
		"hash": "b18f8f39ee9fd6d192d4386e0601ef2a00cf86755ab971d57210c4b2bf4ea047"
	},
	{
		"id": "c231f23dc11d",
		"ts": "2026-10-19T05:39:54.179Z",
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
		"liquidityUsd": 789953.84,
		"hash": "c231f23dc11dec2f3b4d6dd10aabac49843218676531f5307709341526d5468f"
	},
	{
		"id": "ec7e2d7687c0",
		"ts": "2026-10-19T05:39:54.454Z",
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
		"liquidityUsd": 35286923.12,
		"hash": "ec7e2d7687c0c151309ace1a66ad0b2b9d17d54bd7653983fe54c2edea2ae1b4"
	},
	{
		"id": "cf6f6e462c87",
		"ts": "2026-10-19T05:39:54.706Z",
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
		"liquidityUsd": 4661441.74,
		"hash": "cf6f6e462c87b741ec8f5c373d86ca7b41cbf63988bc44ceaa28ba4a5b8507d7"
	},
	{
		"id": "66576f031cbf",
		"ts": "2026-10-19T05:39:54.953Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1132981.41,
		"hash": "66576f031cbf3bac97f3a0a0f5baeeb67f9d75552b9ba521634fb23770f741b7"
	},
	{
		"id": "c0e107930b59",
		"ts": "2026-10-19T05:39:55.220Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35286923.38,
		"hash": "c0e107930b597ed61e42a5dff69e1bf97ce1c73d2c2225041654dae9ec1c36a2"
	},
	{
		"id": "eb7b0a29bacf",
		"ts": "2026-10-19T05:39:55.536Z",
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
		"liquidityUsd": 2925506.57,
		"hash": "eb7b0a29bacfdf7a31ea89c36c61246e4642a9b1e363e00e03cf1d1f566f52b4"
	},
	{
		"id": "7734628bd2d3",
		"ts": "2026-10-19T05:39:55.807Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1758567.06,
		"hash": "7734628bd2d3cc86eacf400c1b542d928d9d3998e10da43fbfea87f05077b04f"
	},
	{
		"id": "44a415f6da1a",
		"ts": "2026-10-19T05:39:56.049Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1331944.7,
		"hash": "44a415f6da1a985100eae8596487e55e689beaa2a1f96b35bf7c890e3e63dabf"
	},
	{
		"id": "81e11b97dba2",
		"ts": "2026-10-19T05:39:56.278Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 446965.58,
		"hash": "81e11b97dba20a5c0ba346cf68ec51bf25f99a49e20e8f005c9c7e88e6c7464d"
	},
	{
		"id": "ef55269cea8c",
		"ts": "2026-10-19T05:39:56.511Z",
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
		"liquidityUsd": 3196968.17,
		"hash": "ef55269cea8c590cc7e592d008ca561f7116843be006d6563ca2c5a4303bf0d7"
	},
	{
		"id": "1bf956149095",
		"ts": "2026-10-19T05:39:56.743Z",
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
		"liquidityUsd": 17398307.59,
		"hash": "1bf956149095a687c8dddc5b672f0d5e7c7bbb526c1a1a6ebbdb1cd3cd116b16"
	},
	{
		"id": "149ef0e84963",
		"ts": "2026-10-19T05:39:56.970Z",
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
		"liquidityUsd": 1291504.02,
		"hash": "149ef0e84963a7ba23a03d6277384848a252d5cd2e35298b0f4e1ec0279c1409"
	},
	{
		"id": "eed8b4b860c6",
		"ts": "2026-10-19T05:39:57.208Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 186795.85,
		"hash": "eed8b4b860c6efd238914d731751ffe85e9b03d9a596c3bdffe151ba68cab9ff"
	},
	{
		"id": "a5a7dfccac63",
		"ts": "2026-10-19T05:39:57.439Z",
		"symbol": "Paper",
		"token": "0x3E199F015ea827F27C2671f8EaE516b8944FFB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10199548,
		"hash": "a5a7dfccac6379a860c871fa7c3f04ad094f5d7e6b11d20a6b23d2d6217aebee"
	},
	{
		"id": "bb7a6d10e446",
		"ts": "2026-10-19T05:39:57.666Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1996257.65,
		"hash": "bb7a6d10e4461fa46be74afef7f96c3ba91fab160a781a49f92afe21b6843e3b"
	},
	{
		"id": "24adb112778f",
		"ts": "2026-10-19T05:39:57.896Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1115767.88,
		"hash": "24adb112778ff9a16dec7f3492fbdedfae3dad6a0438bb780fb1bc0787ba506f"
	},
	{
		"id": "79f32fc46b61",
		"ts": "2026-10-19T00:45:11.704Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147268112.17,
		"hash": "79f32fc46b617e0017999a2e3d495c477fb60dc3b246994be4ec157503220692"
	},
	{
		"id": "63cd5cc5d217",
		"ts": "2026-10-19T00:45:12.024Z",
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
		"liquidityUsd": 18750242.32,
		"hash": "63cd5cc5d217f6a7691880bdd1135cb56728d718df2f8a376ec67083b7cd09b1"
	},
	{
		"id": "1707822c694e",
		"ts": "2026-10-19T00:45:12.233Z",
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
		"liquidityUsd": 783068.79,
		"hash": "1707822c694ed001c0d8843e606da5d5311601035d7acc8f2a21a725fdf1b953"
	},
	{
		"id": "fd9a08b159cb",
		"ts": "2026-10-19T00:45:12.442Z",
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
		"liquidityUsd": 35478640.8,
		"hash": "fd9a08b159cb789bdf44685289c0f65b3b2320684c8ed76ac94ba91f1f7595e2"
	},
	{
		"id": "34dc90e9d42e",
		"ts": "2026-10-19T00:45:12.662Z",
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
		"liquidityUsd": 4620301.46,
		"hash": "34dc90e9d42e6265f01308f844f2e09dd605e3f510526dea3d958d76068bc8dc"
	},
	{
		"id": "19a6f0f8a204",
		"ts": "2026-10-19T00:45:12.876Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1127808.47,
		"hash": "19a6f0f8a2046d788bd01ee442a0dfe89e2567525e3eef68e48283dc3bd13fd5"
	},
	{
		"id": "a6cde2c288d7",
		"ts": "2026-10-19T00:45:13.091Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35478640.8,
		"hash": "a6cde2c288d7ce12397f756efdb98264e87523bf480e915d1fc2fbca6df9a6f1"
	},
	{
		"id": "e39ebaa7e155",
		"ts": "2026-10-19T00:45:13.302Z",
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
		"liquidityUsd": 2902389.56,
		"hash": "e39ebaa7e15598f54f1e36dec265ab8565b04f060f36f6f019271f7a82a9b6d1"
	},
	{
		"id": "4d4b91296e26",
		"ts": "2026-10-19T00:45:13.500Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1771655.7,
		"hash": "4d4b91296e26ea6249ae6c7a1eb76d5c656fcf61454b12becf7fb043700450d8"
	},
	{
		"id": "43d68d323318",
		"ts": "2026-10-19T00:45:13.700Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1336495.9,
		"hash": "43d68d323318ad9d2174a832264c9e1f2df0a51fd2b7ca93d327b664b9629601"
	},
	{
		"id": "6734fa431d55",
		"ts": "2026-10-19T00:45:13.919Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 468029.45,
		"hash": "6734fa431d55202b763bab8ac5d3c19b4b3d2536a0a0da66fa3fcf6736e5d36b"
	},
	{
		"id": "07e1314c3de0",
		"ts": "2026-10-19T00:45:14.125Z",
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
		"liquidityUsd": 3191006.87,
		"hash": "07e1314c3de012932bc077e6a5015ac078227985b230c494b9088da9f8185d37"
	},
	{
		"id": "8cb3279b3aab",
		"ts": "2026-10-19T00:45:14.333Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2001390.7,
		"hash": "8cb3279b3aabffa152268e08f448cde491a8d544d653a2764cf14e4985ec9968"
	},
	{
		"id": "407583d7bc90",
		"ts": "2026-10-19T00:45:14.548Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 171334.78,
		"hash": "407583d7bc90023d75c2b51b10fe192264ada0dc54ef542c724964b764256e3d"
	},
	{
		"id": "9f6efd54f393",
		"ts": "2026-10-19T00:45:14.775Z",
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
		"liquidityUsd": 16840119.24,
		"hash": "9f6efd54f3937cccf2529a65c6a8af3483dcafd1448ec51e1258d62a9c02e218"
	},
	{
		"id": "628fbffcc9f4",
		"ts": "2026-10-19T00:45:14.988Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 86102.8,
		"hash": "628fbffcc9f4c7e999a9b3c20eeee74cc355654d98cc7e804b30320561acaa4b"
	},
	{
		"id": "1f894904c1db",
		"ts": "2026-10-19T00:45:15.207Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1101841.41,
		"hash": "1f894904c1dbc6367c754f5fc8dd85d15e30c1f6054a1dd0555b0b6ae4623883"
	},
	{
		"id": "22f935c8b3ae",
		"ts": "2026-10-19T00:45:15.408Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 175730.78,
		"hash": "22f935c8b3aee6d60eb72ff1fc4c662f372d2f70455497d9f4f230a4cdebef8f"
	},
	{
		"id": "08e72c148879",
		"ts": "2026-10-18T22:43:58.121Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146447390.25,
		"hash": "08e72c148879a0c73dabe5c04cf16ce8344f444520c518fc91d206f3f1de7aa8"
	},
	{
		"id": "6895f1b76261",
		"ts": "2026-10-18T22:43:58.507Z",
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
		"liquidityUsd": 18078739.46,
		"hash": "6895f1b76261ef3da00c21edf95ed0cb8971fce5901309efafd31db689a15df5"
	},
	{
		"id": "3a4f4c40c298",
		"ts": "2026-10-18T22:43:58.714Z",
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
		"liquidityUsd": 758506,
		"hash": "3a4f4c40c298dcdee1c449dfc0ccf4a58d9b4e40b93219d2be01f1f34e099df5"
	},
	{
		"id": "827db38ab4b9",
		"ts": "2026-10-18T22:43:58.918Z",
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
		"liquidityUsd": 35381856.63,
		"hash": "827db38ab4b9ebd3c18d49feb0e90342034e725b4ba88cc052c51a5d684d932c"
	},
	{
		"id": "56e0c057cfba",
		"ts": "2026-10-18T22:43:59.133Z",
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
		"liquidityUsd": 4570301.17,
		"hash": "56e0c057cfba2b4e80e2e673cb495e344d61e411984437dbf5124776a88c17c6"
	},
	{
		"id": "e6e1e3f10200",
		"ts": "2026-10-18T22:43:59.339Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1114384.67,
		"hash": "e6e1e3f10200de8f40106c52ba46ea5a2dd5f3cf6dd3b986e080293108170a03"
	},
	{
		"id": "305cd9a63dc1",
		"ts": "2026-10-18T22:43:59.534Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35381856.63,
		"hash": "305cd9a63dc1a9737f3a4a23749d73f1e59c99606ac1d7346e8d16f9b8973867"
	},
	{
		"id": "e08571d08229",
		"ts": "2026-10-18T22:43:59.752Z",
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
		"liquidityUsd": 2878444.13,
		"hash": "e08571d08229b9abe62d7fd4c72ac7dc675ce23d570e3e7b9eb2dca2cc0a4c5a"
	},
	{
		"id": "d86b67bb6b18",
		"ts": "2026-10-18T22:44:00.113Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1764697.02,
		"hash": "d86b67bb6b181ea9620306674d810ae4b53a104e30d844a9ca3816e2effe002f"
	},
	{
		"id": "ec7120407efc",
		"ts": "2026-10-18T22:44:00.330Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1314589.29,
		"hash": "ec7120407efcc1aaa798c93dc3c0b1ea9c4bb4bf90577fa2f811d6a425d23a97"
	},
	{
		"id": "60a0f05f2943",
		"ts": "2026-10-18T22:44:00.556Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 474805.04,
		"hash": "60a0f05f2943226e4619f6680750bf0fadf3ecaee4fc690243f8bebf598b41e6"
	},
	{
		"id": "a127492ff352",
		"ts": "2026-10-18T22:44:01.128Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3123862.81,
		"hash": "a127492ff352eda180f306cb06bf8c0cf5260d5ce857b3050cb49b41d0061b9b"
	},
	{
		"id": "7cb5dc76bdaa",
		"ts": "2026-10-18T22:44:01.398Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1961018.36,
		"hash": "7cb5dc76bdaac798fad014a514f1652f40f62a5aec48a5d8dba13e0fcca6e636"
	},
	{
		"id": "9dfaf081e0b8",
		"ts": "2026-10-18T22:44:01.632Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 169537.72,
		"hash": "9dfaf081e0b8e27d7ca2f79abd91a12d692dc6478ad61009ae2e49178603e548"
	},
	{
		"id": "413bf56d12a8",
		"ts": "2026-10-18T22:44:01.880Z",
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
		"liquidityUsd": 16708929.9,
		"hash": "413bf56d12a8af7624286afe879c1172de430f35a1b182c2129ed0109ce0442e"
	},
	{
		"id": "e31d91ab8ee6",
		"ts": "2026-10-18T22:44:02.132Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 89551.19,
		"hash": "e31d91ab8ee6c9619f93dadce7d063f23a795a8791b9cdcb250f78bc146da359"
	},
	{
		"id": "58ca413347ef",
		"ts": "2026-10-18T22:44:02.414Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1092642.8,
		"hash": "58ca413347efbbbbd5d4e4dbee2bd46385fcb238ae406bc7926c7a547c197293"
	},
	{
		"id": "5b4a00903f43",
		"ts": "2026-10-18T22:44:02.666Z",
		"symbol": "Paper",
		"token": "0x3E199F015ea827F27C2671f8EaE516b8944FFB07",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 10202176.06,
		"hash": "5b4a00903f432b37bcefce5791e771fdf3c8f4f7a320be87385d4d41bee02599"
	},
	{
		"id": "acab457ec9fb",
		"ts": "2026-10-18T20:01:35.140Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 143892589.96,
		"hash": "acab457ec9fb06dc5a82fb9fef503550e329e7d349509b441b5be21073645897"
	},
	{
		"id": "10bb0b9aca28",
		"ts": "2026-10-18T20:01:35.633Z",
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
		"liquidityUsd": 17676094.45,
		"hash": "10bb0b9aca2801e1e2f902a51eb0c26f183377127ba89c8ad835f400fc97e914"
	},
	{
		"id": "297c09827a8a",
		"ts": "2026-10-18T20:01:35.904Z",
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
		"liquidityUsd": 758506,
		"hash": "297c09827a8abc071b115fc022725a44ae63dc3cbab851c002ad1f0abfcf5511"
	},
	{
		"id": "637e6a142551",
		"ts": "2026-10-18T20:01:36.152Z",
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
		"liquidityUsd": 40432710.56,
		"hash": "637e6a142551fc7e589740c1e49993bdadcefde655671d2ab37f72afead78528"
	},
	{
		"id": "7a2a95779dae",
		"ts": "2026-10-18T20:01:36.399Z",
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
		"liquidityUsd": 4456354.02,
		"hash": "7a2a95779daefb0d7b639fc885d33b6623c6df6b88f013276729d7d4af02389f"
	},
	{
		"id": "f34c1c1035cb",
		"ts": "2026-10-18T20:01:36.636Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1092481.45,
		"hash": "f34c1c1035cb672f22829c5f0b67efa22feaae15d6364b21a81b78588b5912d1"
	},
	{
		"id": "2bb021ef3931",
		"ts": "2026-10-18T20:01:36.938Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 40432721.51,
		"hash": "2bb021ef3931d53a53a6844bf36087d4a0c4ae68283ae90739205d4c66528f8e"
	},
	{
		"id": "6281d3fdd045",
		"ts": "2026-10-18T20:01:37.206Z",
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
		"liquidityUsd": 2814824.49,
		"hash": "6281d3fdd045f3d4b31529fe905c45a03dd9e7b7586e99f7330830799a64279c"
	},
	{
		"id": "b750acd14c4b",
		"ts": "2026-10-18T20:01:37.461Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1728521.77,
		"hash": "b750acd14c4b0fecb0602b0d21188b5cb4132aa637537a3ce7b155a8a1ad7c47"
	},
	{
		"id": "2a4f07ebe031",
		"ts": "2026-10-18T20:01:37.700Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1284656.8,
		"hash": "2a4f07ebe031d19991c831dcfe26fc2acdb3dd06ec4ea1692935aab0f54c38d6"
	},
	{
		"id": "c1abffa50266",
		"ts": "2026-10-18T20:01:37.936Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 477575.77,
		"hash": "c1abffa502661d2037707030eadceb50a8a3acc8a5ddb80a752e7085bb198891"
	},
	{
		"id": "4a5f00e7eb80",
		"ts": "2026-10-18T20:01:38.173Z",
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
		"liquidityUsd": 3110458.66,
		"hash": "4a5f00e7eb80bb9e81374274bf0f250df23b4586e1e5d28801a9312b7b18275d"
	},
	{
		"id": "c26790536f96",
		"ts": "2026-10-18T20:01:38.394Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1942932.8,
		"hash": "c26790536f96ca9c62ab72e93aea3a8e4133ba0095aa17f3157a53ea0403c4f6"
	},
	{
		"id": "f649af8f4d84",
		"ts": "2026-10-18T20:01:38.619Z",
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
		"liquidityUsd": 16042811.7,
		"hash": "f649af8f4d84bc96b09c0b4efef5e3fb728d89093d6eee3ddebe0a3032c072ad"
	},
	{
		"id": "92e38b88f29e",
		"ts": "2026-10-18T20:01:38.845Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3946680.76,
		"hash": "92e38b88f29e8004f4d9be70c3d9edb66abf1467eaf7a2e541849006852271fb"
	},
	{
		"id": "8c181283b084",
		"ts": "2026-10-18T20:01:39.180Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 171343.2,
		"hash": "8c181283b08496e787070f80073cdd724ca142aed7eec612bedd37a016b641f0"
	},
	{
		"id": "e1210ebb2bbb",
		"ts": "2026-10-18T20:01:39.403Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 89910.56,
		"hash": "e1210ebb2bbb9cfe8d18423a6efa61ee45d37c62419bbc5812efccfe58b210c5"
	},
	{
		"id": "e25a012a31ae",
		"ts": "2026-10-18T20:01:39.624Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1066963.61,
		"hash": "e25a012a31ae3743193635b02218b98cbacf9e3bea6843bf977a098ec184ab09"
	},
	{
		"id": "4dd2b7a80c9d",
		"ts": "2026-10-18T17:45:58.920Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145388088.24,
		"hash": "4dd2b7a80c9d11ff5de3a0c4f13a85b0b5023715caf0079d50c1917b7226d19a"
	},
	{
		"id": "ceee7e717de4",
		"ts": "2026-10-18T17:45:59.201Z",
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
		"liquidityUsd": 17898821.86,
		"hash": "ceee7e717de4bd052f24caebd25cb93a395e8dd12da415a18df660b0c633479d"
	},
	{
		"id": "9e9dbad67622",
		"ts": "2026-10-18T17:45:59.462Z",
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
		"liquidityUsd": 765663.62,
		"hash": "9e9dbad676225ce21ff0747fb0f9a35c29737cf2b49e3cae93b368cda83cacfd"
	},
	{
		"id": "47437ae8dc85",
		"ts": "2026-10-18T17:45:59.762Z",
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
		"liquidityUsd": 41874316.26,
		"hash": "47437ae8dc859975e2bbd308413086f1573fc6864e2e2c32c86caf141cb574f5"
	},
	{
		"id": "237e16915812",
		"ts": "2026-10-18T17:46:00.032Z",
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
		"liquidityUsd": 4542193.55,
		"hash": "237e16915812aa870c01a49ee8807fac660457560a3b4c834265a4de078631dc"
	},
	{
		"id": "53009586bbbb",
		"ts": "2026-10-18T17:46:00.435Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1131883.84,
		"hash": "53009586bbbb912a8f764a1b76126d8e9c6734f58978cc3a9bc5b96c61344675"
	},
	{
		"id": "90d7e499936b",
		"ts": "2026-10-18T17:46:00.765Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41874316.26,
		"hash": "90d7e499936b3b05da4ada5c31cca139a35ffc334bb2912561b06dddaac24a3b"
	},
	{
		"id": "64be355c7cc1",
		"ts": "2026-10-18T17:46:01.374Z",
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
		"liquidityUsd": 2853610.17,
		"hash": "64be355c7cc1d9affa6a1abd204989d1e15b58fafb29ab67ce65f3c73586ed8e"
	},
	{
		"id": "087d72a82c6d",
		"ts": "2026-10-18T17:46:01.701Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1754506.84,
		"hash": "087d72a82c6da2b82f0986bc44e0382a4a479da15a4a9f160e0505f08140d965"
	},
	{
		"id": "fc5779488392",
		"ts": "2026-10-18T17:46:02.005Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1303876.6,
		"hash": "fc5779488392594eaf66ba1942a3a3337a7d88c783bed959ee16f8d12a4688c2"
	},
	{
		"id": "ac7f6e34350a",
		"ts": "2026-10-18T17:46:02.317Z",
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
		"liquidityUsd": 16294619.47,
		"hash": "ac7f6e34350ae8336961934e72611d74edf8b8d6e45976977bd75b7b9c94edb4"
	},
	{
		"id": "3c29816043b9",
		"ts": "2026-10-18T17:46:02.586Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3123518.29,
		"hash": "3c29816043b9f3066e2f6c569bc97fc0c61631de3389310fd5a129fcfd6b0dfb"
	},
	{
		"id": "1a493fe9ae2c",
		"ts": "2026-10-18T17:46:02.862Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 471885.26,
		"hash": "1a493fe9ae2ccb8fb6d0f9cb63e1f75623d373bb7c212caf3131e2ff375a310a"
	},
	{
		"id": "af53e145ed60",
		"ts": "2026-10-18T17:46:03.220Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1901442.54,
		"hash": "af53e145ed60d49b3b5858433e8578b23527a79496b5efea7e91d2ae4231c859"
	},
	{
		"id": "0bcd5382fc98",
		"ts": "2026-10-18T17:46:03.514Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 191344.12,
		"hash": "0bcd5382fc98cc1a09fcb65540ac33b59d4bae7f0d38897a69fc206e3b0e88b5"
	},
	{
		"id": "e708cb804846",
		"ts": "2026-10-18T17:46:03.752Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4008077.35,
		"hash": "e708cb804846f3bb117c71316eb07a0b878a5c2503c640b81e309e64a8d44db4"
	},
	{
		"id": "dce738e8b820",
		"ts": "2026-10-18T17:46:03.987Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 88003.45,
		"hash": "dce738e8b8202a21321562f4c45c35ccd59555adcada06cf64205f4a07cf320f"
	},
	{
		"id": "61b3ee447594",
		"ts": "2026-10-18T17:46:04.218Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 2295736.53,
		"hash": "61b3ee447594d77fc862e46031aefb9287ac4ae8348e73312bfaea8ad01f8d52"
	},
	{
		"id": "f1ad65552b10",
		"ts": "2026-10-18T17:46:04.449Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1078189.44,
		"hash": "f1ad65552b10d26b240527d891dba4ac82f50b9c1f69205b84ece912e229ad15"
	},
	{
		"id": "1ba5d0a5eea7",
		"ts": "2026-10-18T14:15:59.507Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145460401.23,
		"hash": "1ba5d0a5eea78e16395e2b1931548185e86e95428ad39afbb1db3cc26b3bbd52"
	},
	{
		"id": "83638099d4bb",
		"ts": "2026-10-18T14:15:59.971Z",
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
		"liquidityUsd": 18040527.43,
		"hash": "83638099d4bb13fc41b394e770ee87488a7943b9436756112a3ea6fbe0045190"
	},
	{
		"id": "2aafa8ad9383",
		"ts": "2026-10-18T14:16:00.498Z",
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
		"liquidityUsd": 783231.79,
		"hash": "2aafa8ad93839860be1a50f42daac02f4463298499fb460cced85686fd87a9c4"
	},
	{
		"id": "08da5409d412",
		"ts": "2026-10-18T14:16:01.412Z",
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
		"liquidityUsd": 42075226.04,
		"hash": "08da5409d412cfc1531e57475d38899ed1ad5ce90d1a059cb6846a2acf77935c"
	},
	{
		"id": "aec46413c4ec",
		"ts": "2026-10-18T14:16:01.684Z",
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
		"liquidityUsd": 4578279.8,
		"hash": "aec46413c4ec0c86795d94d1ea0b8f9b9abe538254d2e434180d0e23214b8720"
	},
	{
		"id": "be0cbeb07990",
		"ts": "2026-10-18T14:16:01.939Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1119297.6,
		"hash": "be0cbeb07990a4ca4e354a35e37d988d941ffcec960aab9e258963eb6978215f"
	},
	{
		"id": "360253082e43",
		"ts": "2026-10-18T14:16:02.193Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42075226.04,
		"hash": "360253082e43d5acdaf1d1b466ed342503d324887fe86c09df3d343505373516"
	},
	{
		"id": "2af6ad288b1f",
		"ts": "2026-10-18T14:16:02.476Z",
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
		"liquidityUsd": 2877611.55,
		"hash": "2af6ad288b1fcbf2d0ea3cbee1103f041f5c5f13b377bacb67ae0d7684bb1db8"
	},
	{
		"id": "3b4e7ce6f2f2",
		"ts": "2026-10-18T14:16:02.965Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1758814.65,
		"hash": "3b4e7ce6f2f2bad9688339841625f2a9cdfb76c4387a494b48fa6ec99cc11dfd"
	},
	{
		"id": "37878e112ab5",
		"ts": "2026-10-18T14:16:03.301Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1309737.52,
		"hash": "37878e112ab560ab5d30fcf73bfada106a95a1125594f9dce9e1da504e60a15a"
	},
	{
		"id": "7a4d5fb05e3a",
		"ts": "2026-10-18T14:16:03.762Z",
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
		"liquidityUsd": 16514961.11,
		"hash": "7a4d5fb05e3ad15d704690c6537c9dc8059eb7f1d33106829ef263877a16ffe3"
	},
	{
		"id": "95c49be71d75",
		"ts": "2026-10-18T14:16:04.008Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3147955.12,
		"hash": "95c49be71d75b86a3df4f31313826006f4aa511b273c7b5130dfe94f1cd9ebd7"
	},
	{
		"id": "876d93d6543f",
		"ts": "2026-10-18T14:16:04.238Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 187645.53,
		"hash": "876d93d6543f1d0839e7e0b0606998c703acba297844e733cdedad4c49ebbfaf"
	},
	{
		"id": "9574ba1d9b76",
		"ts": "2026-10-18T14:16:04.471Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4023094.46,
		"hash": "9574ba1d9b765572ea9c29b707f1f90a0ad70383231f15ee36a4d0750049491b"
	},
	{
		"id": "39dee32cd5a2",
		"ts": "2026-10-18T14:16:04.698Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4280594.31,
		"hash": "39dee32cd5a2fe635188ef14176b683ec28312593e88f99d7576be71f748dfc0"
	},
	{
		"id": "c1fb0f8b2d6e",
		"ts": "2026-10-18T14:16:04.917Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 444128.92,
		"hash": "c1fb0f8b2d6e7206645c5f18fa0cc178ba9bf0633d8b61e5962d46480ab85318"
	},
	{
		"id": "72e472cfebad",
		"ts": "2026-10-18T14:16:05.143Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1843852.42,
		"hash": "72e472cfebad49d12e1efde5286ef3c8f7f0e0f9c4e76b534f55d1af4d8e73be"
	},
	{
		"id": "66392ca80a1d",
		"ts": "2026-10-18T14:16:05.366Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 2175775.02,
		"hash": "66392ca80a1d73145ddfb23949fb39940560b81583d4f620b10d64d002aea82c"
	},
	{
		"id": "1631b2bba986",
		"ts": "2026-10-18T14:16:05.604Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 88204.75,
		"hash": "1631b2bba986900f7438f666b5ae685f91424086908beffcbcb93d81b43ddfc9"
	},
	{
		"id": "3efff5597a64",
		"ts": "2026-10-18T10:19:03.464Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146335708.4,
		"hash": "3efff5597a6435e3bfe8d5fea6abd4421f8b24b4d8c12ff0d7a63eaf67e464b7"
	},
	{
		"id": "af5e50a72976",
		"ts": "2026-10-18T10:19:04.013Z",
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
		"liquidityUsd": 18277165.09,
		"hash": "af5e50a729763ec356c5af4d0756c16ea92ed070c017f3196ca7c16f11c6ab84"
	},
	{
		"id": "a92904f3ff64",
		"ts": "2026-10-18T10:19:04.326Z",
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
		"liquidityUsd": 783231.79,
		"hash": "a92904f3ff6484661cd863032b9f7560ece6a19fa996c5e3dbd6adc1e56ea80b"
	},
	{
		"id": "1c07aecd3a0a",
		"ts": "2026-10-18T10:19:04.607Z",
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
		"liquidityUsd": 42038645.12,
		"hash": "1c07aecd3a0aca329196d508fb68c6ae6897821cf94e0b6880d536a10fc750f9"
	},
	{
		"id": "d355d78a06bc",
		"ts": "2026-10-18T10:19:05.032Z",
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
		"liquidityUsd": 4654542.97,
		"hash": "d355d78a06bc09fe27451f5edf19b442f58b8706221d00fbc19eb8257eb38546"
	},
	{
		"id": "97c007b294bd",
		"ts": "2026-10-18T10:19:05.496Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1160418.97,
		"hash": "97c007b294bd4b070cb665c5b3f28b41f97b918e6467240a9ef1889191997c41"
	},
	{
		"id": "aff6837b92e4",
		"ts": "2026-10-18T10:19:05.902Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42038645.12,
		"hash": "aff6837b92e43a0fa37b4207fd32220cd44f08d3e3e141d97225d0121b461767"
	},
	{
		"id": "a348b44ccf41",
		"ts": "2026-10-18T10:19:06.169Z",
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
		"liquidityUsd": 2916016.51,
		"hash": "a348b44ccf412765a1cd632c87168c39adea0fde89d4a42f9f6de3638cfdb049"
	},
	{
		"id": "45c2ba409fc5",
		"ts": "2026-10-18T10:19:06.418Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1758147.28,
		"hash": "45c2ba409fc5121537ed4a90a1abc4441f0a9428475589a3b6de763060f4eeed"
	},
	{
		"id": "23fbcc3f6a8f",
		"ts": "2026-10-18T10:19:06.673Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1332911.14,
		"hash": "23fbcc3f6a8fe3ecfe162b9cbe404d9d543df2892cc57957d3d58b77896fe965"
	},
	{
		"id": "3ab998b9dec9",
		"ts": "2026-10-18T10:19:06.892Z",
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
		"liquidityUsd": 16813629.8,
		"hash": "3ab998b9dec976336165433316fbdb38fb83b65fc9b72d11a8fc0ebbf7fd4ddd"
	},
	{
		"id": "737a9360d013",
		"ts": "2026-10-18T10:19:07.118Z",
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
		"liquidityUsd": 3199573.61,
		"hash": "737a9360d0134a9ddb7233a9d2611e747669673a001021fbee3d375f1eebc196"
	},
	{
		"id": "662c8ceeb202",
		"ts": "2026-10-18T10:19:07.344Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 197725.27,
		"hash": "662c8ceeb202bb1d4d49ec34a868dd61f45d017b93534742e7052779d4e627c0"
	},
	{
		"id": "5ee024615022",
		"ts": "2026-10-18T10:19:07.563Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4324923.21,
		"hash": "5ee024615022f379411b936d4715a03c69d031486eb3f824268b5aa787c4432c"
	},
	{
		"id": "9b1c6b46784a",
		"ts": "2026-10-18T10:19:07.796Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4085479.99,
		"hash": "9b1c6b46784a5d4cce680af8d2114ba0e121108993908158c30f52c54344acb5"
	},
	{
		"id": "b1b297bda690",
		"ts": "2026-10-18T10:19:08.023Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1872459,
		"hash": "b1b297bda6907c7449050d6fe133bb42a9be23edd5b72aca8af3489d9ef28358"
	},
	{
		"id": "327712ab8d06",
		"ts": "2026-10-18T10:19:08.246Z",
		"symbol": "Paper",
		"token": "0x85f316e96991e87b9EA960454723160f5ec92B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10621188.46,
		"hash": "327712ab8d062f69e4cddfef3b10608926c375e636300604a354d26f2c99a85e"
	},
	{
		"id": "d58750c7dbbf",
		"ts": "2026-10-18T10:19:08.477Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 2122504.86,
		"hash": "d58750c7dbbfc589d12253aafc486e8ae78d6241bb11a49889c19799ca9f2741"
	},
	{
		"id": "3715a1da9605",
		"ts": "2026-10-18T10:19:08.707Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 96409.37,
		"hash": "3715a1da9605c6408b17dce0eacc0b48bb7d9012fa7ddfa21237efa78252027c"
	},
	{
		"id": "1f3d8aeee34b",
		"ts": "2026-10-18T05:22:38.322Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146391327.53,
		"hash": "1f3d8aeee34b37ef0d0bb8800eb14256ce39ee30b789ee48138e00920c5c0ad2"
	},
	{
		"id": "3dcc8b2b1018",
		"ts": "2026-10-18T05:22:38.997Z",
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
		"liquidityUsd": 18752660.87,
		"hash": "3dcc8b2b101880f5ca16c1c5e25f15ac25ad309fdc84e4cb3dbf5dbd529b9d37"
	},
	{
		"id": "7d02269078d5",
		"ts": "2026-10-18T05:22:39.459Z",
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
		"liquidityUsd": 779875.45,
		"hash": "7d02269078d5fa3f89b18624d662ed1751fc2effc40aeb7b6014398d1046686a"
	},
	{
		"id": "bed0350b8b83",
		"ts": "2026-10-18T05:22:39.718Z",
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
		"liquidityUsd": 42733211.92,
		"hash": "bed0350b8b83729a273d87417c7b938ec5820c37afbb376d4a25e93adae4cde1"
	},
	{
		"id": "557e544ed705",
		"ts": "2026-10-18T05:22:39.982Z",
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
		"liquidityUsd": 4638924.95,
		"hash": "557e544ed705a93585140184860e2ff208bcc66ea42ca5e507334bd81babfac6"
	},
	{
		"id": "f6d412f1c78b",
		"ts": "2026-10-18T05:22:40.232Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1134164.65,
		"hash": "f6d412f1c78b2c91e7489b1e5b8a77737ed09ddb8b7309cd718e5069083a00a2"
	},
	{
		"id": "82cdccbc25e4",
		"ts": "2026-10-18T05:22:40.477Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42733211.13,
		"hash": "82cdccbc25e475e4a5ef0d9b9252efa9a8a1ce863b1bae75299053b3282bc118"
	},
	{
		"id": "cd39ecc3035a",
		"ts": "2026-10-18T05:22:40.733Z",
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
		"liquidityUsd": 2915075.76,
		"hash": "cd39ecc3035aff17ebba5cd0a3ecdbb09e179a55fcd6329c94333183ee514138"
	},
	{
		"id": "d6542f3fb7c8",
		"ts": "2026-10-18T05:22:40.996Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1721166.56,
		"hash": "d6542f3fb7c80d647c86ef69785422d3cf3645ea767ea23e37e8c2b7a828a52e"
	},
	{
		"id": "235570128cd9",
		"ts": "2026-10-18T05:22:41.263Z",
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
		"liquidityUsd": 16872160.84,
		"hash": "235570128cd9a95db2e8f2a63e380a6fbb193580a1452098bd61e63244a24d0a"
	},
	{
		"id": "e3977863d9f0",
		"ts": "2026-10-18T05:22:41.491Z",
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
		"liquidityUsd": 3214304.73,
		"hash": "e3977863d9f0a867b4c520b53b35abc99947fb1b2659c19668f5ec439f5363ed"
	},
	{
		"id": "4978e9db4c10",
		"ts": "2026-10-18T05:22:41.722Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4410188.39,
		"hash": "4978e9db4c10c69878d13e5dd169c47faaed47773d70578074e90596266ffd57"
	},
	{
		"id": "1b7d5db187a6",
		"ts": "2026-10-18T05:22:41.952Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1327631.07,
		"hash": "1b7d5db187a6d5c954b6e74518b7a7346cf0e016694f4538c843c11f7c3e00fd"
	},
	{
		"id": "33cf3d78b594",
		"ts": "2026-10-18T05:22:42.180Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 198712.89,
		"hash": "33cf3d78b594ef75561e64a23809ef01e92bb62453c0a9684f4ff0050c461c4b"
	},
	{
		"id": "5411d4895252",
		"ts": "2026-10-18T05:22:42.412Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4123460.13,
		"hash": "5411d4895252fb09f22048fe43c13606ca4f4201938bdee04a96f125482dc6c2"
	},
	{
		"id": "bfd1c9008137",
		"ts": "2026-10-18T05:22:42.642Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 188524.9,
		"hash": "bfd1c9008137038fad3abba2eb6fa24891a57b86ee42610a578474557ed6eeff"
	},
	{
		"id": "363ca58fc896",
		"ts": "2026-10-18T05:22:42.871Z",
		"symbol": "Paper",
		"token": "0x85f316e96991e87b9EA960454723160f5ec92B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10621187.81,
		"hash": "363ca58fc896b1ae456fbc5d70db27ff5797cf764c97dd15bf39fb848de4783a"
	},
	{
		"id": "7eb91c59e89e",
		"ts": "2026-10-18T05:22:43.103Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1869985.75,
		"hash": "7eb91c59e89eb8255587c2d65ab474bd420e4d14b86a8fb83ff5a1e2451d8713"
	},
	{
		"id": "468534c8a41d",
		"ts": "2026-10-18T05:22:43.333Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 87861.61,
		"hash": "468534c8a41d01985a9cc83df4c14a9a425a42a9623f7ad26221d58a4b6a4724"
	},
	{
		"id": "116433a6894c",
		"ts": "2026-10-18T00:35:55.020Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 145592242.79,
		"hash": "116433a6894c2f4aaadb2c5f433984e06df2a62a0d040000d4ad1cf59f0a0b73"
	},
	{
		"id": "7bd59bb2e5c1",
		"ts": "2026-10-18T00:35:55.288Z",
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
		"liquidityUsd": 18079145.48,
		"hash": "7bd59bb2e5c1e32137e5905bff8227e66b01dc40e60d3447ace09202a70dce1d"
	},
	{
		"id": "b0b81b8dd61d",
		"ts": "2026-10-18T00:35:55.504Z",
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
		"liquidityUsd": 754110.11,
		"hash": "b0b81b8dd61dbdac94c6dbe66af6e5e0d0bb5241438145b52ee408c482461a0b"
	},
	{
		"id": "fdc6c1986582",
		"ts": "2026-10-18T00:35:55.889Z",
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
		"liquidityUsd": 42769551.49,
		"hash": "fdc6c1986582f12dda600133c587b3e335155350e11257839cbd3e712350d448"
	},
	{
		"id": "ee9e39d80137",
		"ts": "2026-10-18T00:35:56.115Z",
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
		"liquidityUsd": 4607517.39,
		"hash": "ee9e39d8013702176b7ac27023f825e54a32768e63be8dc5d7cc23b1ccc98644"
	},
	{
		"id": "7bb36c628ec3",
		"ts": "2026-10-18T00:35:56.339Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1134335.88,
		"hash": "7bb36c628ec31d554c118d36728180606d44c0fa5342088425366c9de3bce90f"
	},
	{
		"id": "65be505be7c5",
		"ts": "2026-10-18T00:35:56.552Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42769551.49,
		"hash": "65be505be7c59fb3dadc43f5c1700205bf4d5838409fb42aff2bca2dd57b55f3"
	},
	{
		"id": "cd319b6beeaf",
		"ts": "2026-10-18T00:35:56.781Z",
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
		"liquidityUsd": 2893890.37,
		"hash": "cd319b6beeaf708bcbf958cfafbd4baf69dea2c97aeaf6afb2153682ec8670d2"
	},
	{
		"id": "de5fd825899c",
		"ts": "2026-10-18T00:35:57.050Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1724425,
		"hash": "de5fd825899c29a2a58ff6426542417a62336a691b6b0ba4ea8bf9b649ebf7a2"
	},
	{
		"id": "da4daf44493d",
		"ts": "2026-10-18T00:35:57.293Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3188627.29,
		"hash": "da4daf44493d3f93259df10c46148e70b22969ec4bde37761005fcd83cacd11e"
	},
	{
		"id": "facba9c1720b",
		"ts": "2026-10-18T00:35:57.507Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1324246.61,
		"hash": "facba9c1720b31189e7582649f4173f6c4bc4d6771f4a3f546e35ec932316b37"
	},
	{
		"id": "c6cdf92d7987",
		"ts": "2026-10-18T00:35:57.764Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4475265.9,
		"hash": "c6cdf92d7987b030525fddd172447f76f2868755db08c14eaa9ca86aa44fb202"
	},
	{
		"id": "cd0d41b9c4a2",
		"ts": "2026-10-18T00:35:57.956Z",
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
		"liquidityUsd": 16703855.61,
		"hash": "cd0d41b9c4a2d2a8ed28d3d0fee881f4dfee026189efc1469f1feb9eddcc3fe0"
	},
	{
		"id": "dfe8a354a471",
		"ts": "2026-10-18T00:35:58.192Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 218783.54,
		"hash": "dfe8a354a471fc8adc5e4e40d12ef98c37652e93cb4f7876125f5a9583dac09e"
	},
	{
		"id": "7c9c2e870fd8",
		"ts": "2026-10-18T00:35:58.401Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4062905.39,
		"hash": "7c9c2e870fd8801e4274e0c9b7333767b02786f1768d36aed9069f12c34a8bb0"
	}
]
