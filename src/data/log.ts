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
	"updatedAt": "2026-09-20T17:16:04.451Z",
	"tokensScored": 18064,
	"verdictsIssued": 18064,
	"safe": 15312,
	"risky": 1315,
	"likelyRug": 1437,
	"ticks": 1030
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "c3655de1bb9a",
		"ts": "2026-09-20T17:15:59.972Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129512870.27,
		"hash": "c3655de1bb9a944a77235e9de2d7239be70a0590f65d93943be690d36a56f145"
	},
	{
		"id": "a95b9f9efc9a",
		"ts": "2026-09-20T17:16:00.235Z",
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
		"liquidityUsd": 15691062.73,
		"hash": "a95b9f9efc9acaf9e143cadd21e00285ee46e8d22880b4b4cda2ed8b37add37c"
	},
	{
		"id": "5b380706b1df",
		"ts": "2026-09-20T17:16:00.507Z",
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
		"liquidityUsd": 870729.88,
		"hash": "5b380706b1dfe1e074070c76773e75164353093207675e57084c147babce8b11"
	},
	{
		"id": "c14f59a32e32",
		"ts": "2026-09-20T17:16:00.783Z",
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
		"liquidityUsd": 34617690.9,
		"hash": "c14f59a32e32f968afe6e802a6feb406299cfc71fc74f8ecae905fb900423eed"
	},
	{
		"id": "0ea8b085977d",
		"ts": "2026-09-20T17:16:01.041Z",
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
		"liquidityUsd": 4402903.73,
		"hash": "0ea8b085977d31b881b3d6e629a05f19019a9a938dfbd2d16a7f4f0c595f74ca"
	},
	{
		"id": "1d8f46f7b3ef",
		"ts": "2026-09-20T17:16:01.478Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1258543.42,
		"hash": "1d8f46f7b3efac08d805f5d607a969e15e65b3678e26cad0808125189aaa1fe3"
	},
	{
		"id": "6bd0cd9516d8",
		"ts": "2026-09-20T17:16:01.730Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34617690.9,
		"hash": "6bd0cd9516d84d93eb0d2f4da5a019ccb69977e36a6d956beca874602811d40b"
	},
	{
		"id": "69137cfa625a",
		"ts": "2026-09-20T17:16:02.002Z",
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
		"liquidityUsd": 2033514.62,
		"hash": "69137cfa625a2a2b3637a4d02b25789f1a0dd20a77cca5353d683c9eb552db5c"
	},
	{
		"id": "cd56b709d566",
		"ts": "2026-09-20T17:16:02.261Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"mintable",
			"owner_not_renounced"
		],
		"liquidityUsd": 745107.36,
		"hash": "cd56b709d566a15459d17e488b30258e39928aeb79e7c3fa46756cdb85b17b5e"
	},
	{
		"id": "0a3f33722a82",
		"ts": "2026-09-20T17:16:02.518Z",
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
		"liquidityUsd": 17222548.46,
		"hash": "0a3f33722a828152655bf868e0eafc9c9818b3cede069442d419795032a4a04b"
	},
	{
		"id": "0a8d5052f042",
		"ts": "2026-09-20T17:16:02.776Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 609192.87,
		"hash": "0a8d5052f042a476e6682e81472a4450a032e7b55f62fbb2c1d16d4f0824d851"
	},
	{
		"id": "c53c99ecc5d9",
		"ts": "2026-09-20T17:16:03.015Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1587093.39,
		"hash": "c53c99ecc5d9d8ba8b6b694ca91713811fc3f7f015ececd5fef5f381800c9a4a"
	},
	{
		"id": "4f62fdf84afd",
		"ts": "2026-09-20T17:16:03.254Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1142480.23,
		"hash": "4f62fdf84afd00ad4250a93a24ee9535a4d2f74b0439accdf9c5e38fb758ac75"
	},
	{
		"id": "46788cf818f9",
		"ts": "2026-09-20T17:16:03.495Z",
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
		"liquidityUsd": 665401.26,
		"hash": "46788cf818f9badab160cf350a69517b252f0fea1ff480d6cf23b246a88646ec"
	},
	{
		"id": "ce29d98b2a86",
		"ts": "2026-09-20T17:16:03.736Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4648507.1,
		"hash": "ce29d98b2a863376d7e38616319174c14bd42870515e2b97161aa81518a65221"
	},
	{
		"id": "b5c953a39e77",
		"ts": "2026-09-20T17:16:03.972Z",
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
		"liquidityUsd": 461193.93,
		"hash": "b5c953a39e77a9997beb79ec5392e630c796deea31cac4f84c1ac3e7f4bdc030"
	},
	{
		"id": "3df8c5205723",
		"ts": "2026-09-20T17:16:04.212Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1435130.69,
		"hash": "3df8c5205723881ecbd10fdc5d8d80b2e2c8cdb5b2cd6a6f8b5877cb6580ef94"
	},
	{
		"id": "e8127c1a5578",
		"ts": "2026-09-20T17:16:04.451Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1906023.06,
		"hash": "e8127c1a557894ff5f94dcb6e5c14af6b3cfa38e424cf0f3f12df7fed8468f32"
	},
	{
		"id": "fbe858bad072",
		"ts": "2026-09-20T13:54:54.015Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128925663.37,
		"hash": "fbe858bad0724ab9ab3b59ec679ca8553383accbfc20a0a9fafcbd14177da995"
	},
	{
		"id": "6dc147b8f890",
		"ts": "2026-09-20T13:54:54.277Z",
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
		"liquidityUsd": 16809759.45,
		"hash": "6dc147b8f8909f5a8c839c329734b3cf01ba6139730b8ea8e042803ec716aae1"
	},
	{
		"id": "42ae7d8a509d",
		"ts": "2026-09-20T13:54:54.533Z",
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
		"liquidityUsd": 852274.4,
		"hash": "42ae7d8a509d2d3b5c5180ea045afdca7c8b0b2ef4eefa951168c5905ac2ccf9"
	},
	{
		"id": "696af54bb21c",
		"ts": "2026-09-20T13:54:55.005Z",
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
		"liquidityUsd": 34308449.11,
		"hash": "696af54bb21c4a716df928b7b73c6c6e0eca48b533570facaddf0938d1e49b19"
	},
	{
		"id": "a9e4a99e164c",
		"ts": "2026-09-20T13:54:55.267Z",
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
		"liquidityUsd": 4268311.01,
		"hash": "a9e4a99e164cdf553b22c181c93964e02d59ca40a4bd3fc410d83c5ef5d202a5"
	},
	{
		"id": "60ae98b7644f",
		"ts": "2026-09-20T13:54:55.530Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1217911.55,
		"hash": "60ae98b7644fde888631bceb789749e82ad7d17eee0f6976a798d92fae2b83fd"
	},
	{
		"id": "a78ff92fb07b",
		"ts": "2026-09-20T13:54:55.783Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34308449.11,
		"hash": "a78ff92fb07bc47331da31e1a2a2fd3a19869e7f35ee7dc000882d7ae8e2aa4c"
	},
	{
		"id": "a793f1b654aa",
		"ts": "2026-09-20T13:54:56.042Z",
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
		"liquidityUsd": 1072385.76,
		"hash": "a793f1b654aa417c753daff4e2fc5fe3439a438c5762f32d4672efe52d88521b"
	},
	{
		"id": "0a3f259d880d",
		"ts": "2026-09-20T13:54:56.306Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 620095.12,
		"hash": "0a3f259d880dfc381ed6ce22de019229510b58dce9705a1fa4f4710ebec112c7"
	},
	{
		"id": "a0fe9aa94e1a",
		"ts": "2026-09-20T13:54:56.569Z",
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
		"liquidityUsd": 17274030.14,
		"hash": "a0fe9aa94e1ae568127e2e7589175e94427638eb9545eb5406dc8700f808a050"
	},
	{
		"id": "c4826ed99536",
		"ts": "2026-09-20T13:54:56.809Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1530679.61,
		"hash": "c4826ed99536567f0beae17537140608d9887806dab79e7f6a698565f95bcfa8"
	},
	{
		"id": "6d223d42d155",
		"ts": "2026-09-20T13:54:57.048Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 808020.17,
		"hash": "6d223d42d155ff12897c8843980c5b937f649ca37e33dd07a143e7f2c1ebdaed"
	},
	{
		"id": "e7e5e758d1d8",
		"ts": "2026-09-20T13:54:57.285Z",
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
		"liquidityUsd": 627691.32,
		"hash": "e7e5e758d1d8f27fbdceca1f04f9ecdc599fec71482cda5f4874f6f37a925910"
	},
	{
		"id": "7f3f41aa8044",
		"ts": "2026-09-20T13:54:57.529Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1200112.06,
		"hash": "7f3f41aa804442e197e97c805b14d0f8638c846a90da3a1d7c1fa2378e78d10d"
	},
	{
		"id": "91f803b3e36d",
		"ts": "2026-09-20T13:54:57.768Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4507635.38,
		"hash": "91f803b3e36dd2444205e22e59d7d26085e090c03a19bed9870a33da7e251c43"
	},
	{
		"id": "db87c5e9eac4",
		"ts": "2026-09-20T13:54:58.006Z",
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
		"liquidityUsd": 450642.64,
		"hash": "db87c5e9eac470b0bbfe46fd131200468ca5dd2385d0cac989fc1c1902915498"
	},
	{
		"id": "dc4a36749ba0",
		"ts": "2026-09-20T13:54:58.243Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1861582.9,
		"hash": "dc4a36749ba0f0e727c5776555440578b3765b040713d50a22d65f1f469a3a22"
	},
	{
		"id": "e0cbe7eaa426",
		"ts": "2026-09-20T13:54:58.483Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3211856.39,
		"hash": "e0cbe7eaa426479df367aaef415925d05ce8890ede1ab5054398666f03ce1b04"
	},
	{
		"id": "004833e9c107",
		"ts": "2026-09-20T09:01:03.084Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128797581.89,
		"hash": "004833e9c107c63fc6b64aa75caf3aa984caee9923d8a47b100dc386ebefd837"
	},
	{
		"id": "a6a325ba8028",
		"ts": "2026-09-20T09:01:03.387Z",
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
		"liquidityUsd": 16777428.68,
		"hash": "a6a325ba8028a3d47b0fd69bca022c4b95dadd3e2afdc2544bfd79c96246710f"
	},
	{
		"id": "853fd1dd8e46",
		"ts": "2026-09-20T09:01:03.647Z",
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
		"liquidityUsd": 850772.59,
		"hash": "853fd1dd8e46b2fda0d9c94c465e3e2697b6a9f3bf40f2c7e31284f39ac2d1cc"
	},
	{
		"id": "67ec884b6f85",
		"ts": "2026-09-20T09:01:03.974Z",
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
		"liquidityUsd": 34205452.89,
		"hash": "67ec884b6f85c876414585fb8065132176bc4431826a7d7fdfea443f89a0d0d0"
	},
	{
		"id": "523373b00bd8",
		"ts": "2026-09-20T09:01:04.278Z",
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
		"liquidityUsd": 4261199.3,
		"hash": "523373b00bd88fb9fa832e903db29bcff4bc58f4ab543840bf635d4a33e8bf2d"
	},
	{
		"id": "5a0f747c0f00",
		"ts": "2026-09-20T09:01:04.536Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1221393.05,
		"hash": "5a0f747c0f0014db751b141f14ac64560937f6e53cca6a064e1d51f0c242cd00"
	},
	{
		"id": "a45e91bcb833",
		"ts": "2026-09-20T09:01:04.800Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34205454.18,
		"hash": "a45e91bcb8333c46ac0819e2cecc1e1120b43b45285fa23e37a3002bbde1b935"
	},
	{
		"id": "bcd223fe2353",
		"ts": "2026-09-20T09:01:05.049Z",
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
		"liquidityUsd": 1068522,
		"hash": "bcd223fe2353e02cb0e206d20402a503f6bc022e1c454b459f4c99ac22c0ff5f"
	},
	{
		"id": "5f8c64542638",
		"ts": "2026-09-20T09:01:05.301Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 617973.56,
		"hash": "5f8c64542638204e6e431f1b9c5034b1b5d2c6d8b2e194b687f8865a9ebee27e"
	},
	{
		"id": "9b6a25cb6b1d",
		"ts": "2026-09-20T09:01:05.553Z",
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
		"liquidityUsd": 17107748.46,
		"hash": "9b6a25cb6b1d70ace49029ff64d15b9ace63d2ba7a12c490f539355329d6e0ae"
	},
	{
		"id": "1af06308bf6e",
		"ts": "2026-09-20T09:01:05.787Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1540217.79,
		"hash": "1af06308bf6e51a85cc454a3594ee8ee51adc4cc0151352e49f8bd2f5281b797"
	},
	{
		"id": "ac1e3604f408",
		"ts": "2026-09-20T09:01:06.024Z",
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
		"liquidityUsd": 630594.33,
		"hash": "ac1e3604f408c86ae98c799554834c67228595ec7a5f226b30c3d7a8454a4552"
	},
	{
		"id": "be32237eb1b5",
		"ts": "2026-09-20T09:01:06.261Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 646899.62,
		"hash": "be32237eb1b541c97f9e621db8c760dcfc8fd366d5294515971d7e13f9306327"
	},
	{
		"id": "a7af09e0a600",
		"ts": "2026-09-20T09:01:06.494Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1564438.91,
		"hash": "a7af09e0a600f76f05afaa33f2c3500bd98a57d52d93b9b9474737b39b0bb226"
	},
	{
		"id": "d916977d2280",
		"ts": "2026-09-20T09:01:06.731Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3239031.25,
		"hash": "d916977d2280b9c8059d9fd831ed0e218109e4efc18e2eba097bbc2299bec525"
	},
	{
		"id": "053fb64916e6",
		"ts": "2026-09-20T09:01:06.965Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4481041.76,
		"hash": "053fb64916e6e566c71011b00c63e69eee2d896f8849d034e6a2f393a96f1829"
	},
	{
		"id": "ac00c845e7a5",
		"ts": "2026-09-20T09:01:07.202Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1880246.79,
		"hash": "ac00c845e7a5039ea6e0339fb3b54a5c26b282eb95daeb6d2788b87aaf2f14a4"
	},
	{
		"id": "fa346558fb26",
		"ts": "2026-09-20T09:01:07.443Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 980836.53,
		"hash": "fa346558fb2634d453f42bb6ca022854abaacf6ec3d2baf8ca4fac6c7a9074da"
	},
	{
		"id": "24aaf5ac05f4",
		"ts": "2026-09-20T03:10:54.744Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128007277.79,
		"hash": "24aaf5ac05f449dcdab357f1a5859dbe696e2bb34c76b42b7539e969bad45d55"
	},
	{
		"id": "ad0e9d71adbe",
		"ts": "2026-09-20T03:10:55.120Z",
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
		"liquidityUsd": 16451741.53,
		"hash": "ad0e9d71adbedeef3d082e44eea3039ae257077b081380931c607210cd4f7822"
	},
	{
		"id": "53aa1184f166",
		"ts": "2026-09-20T03:10:55.335Z",
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
		"liquidityUsd": 865863.2,
		"hash": "53aa1184f166f265e8ed29af893502a8286ef392ba2a2f919a6669e996024f1a"
	},
	{
		"id": "b44f74d1969c",
		"ts": "2026-09-20T03:10:55.540Z",
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
		"liquidityUsd": 34089120.94,
		"hash": "b44f74d1969c420e27a04338393128c93ea257a6347719240cad6791c11788d3"
	},
	{
		"id": "7a20e8633c97",
		"ts": "2026-09-20T03:10:55.809Z",
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
		"liquidityUsd": 4281814.11,
		"hash": "7a20e8633c97eb07b89327b9570acf31446f2e9ffd6b28a330ca4353197d8997"
	},
	{
		"id": "8c9c09f10854",
		"ts": "2026-09-20T03:10:56.024Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1219612.03,
		"hash": "8c9c09f108548e1102196114cdb76f06e7fc77228931c90575c6971084bf56f4"
	},
	{
		"id": "afde297ad56f",
		"ts": "2026-09-20T03:10:56.226Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34089120.94,
		"hash": "afde297ad56f815e69baf33f0f0d13c9340a2b61e5dbd8d4ee46777554339614"
	},
	{
		"id": "0cd62815a664",
		"ts": "2026-09-20T03:10:56.597Z",
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
		"liquidityUsd": 1194189.84,
		"hash": "0cd62815a6640a6bc678d0aecaff0cd580c8ebff28aafeebe1bf333cb877d4c5"
	},
	{
		"id": "db5b20551ba8",
		"ts": "2026-09-20T03:10:56.807Z",
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
		"liquidityUsd": 16544165.49,
		"hash": "db5b20551ba8c64ff77c8f3f87132cc8ab46f19c3dcb0a438cb66836284a4182"
	},
	{
		"id": "be7b6754340b",
		"ts": "2026-09-20T03:10:57.024Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3432476.22,
		"hash": "be7b6754340bcb2480196f69a5ccf1d50f745c93625a74f3d00ad4839ab565ce"
	},
	{
		"id": "4f49a2eb34df",
		"ts": "2026-09-20T03:10:57.217Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1596945.05,
		"hash": "4f49a2eb34df2f06b2b06598a76e25846062a00298e241e7c39582682dfa623d"
	},
	{
		"id": "c21ab08a937c",
		"ts": "2026-09-20T03:10:57.413Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 554934.84,
		"hash": "c21ab08a937c2e37e3607294ecfde0f3ba3ea152d20c09b3638e0992b69e58e9"
	},
	{
		"id": "1c9c0df58651",
		"ts": "2026-09-20T03:10:57.657Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1558237.8,
		"hash": "1c9c0df58651558025d14ca6e16afc25216954ff21e5557205a6e0ed0a1530e0"
	},
	{
		"id": "ca6feef5c2ba",
		"ts": "2026-09-20T03:10:57.849Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4553639.75,
		"hash": "ca6feef5c2ba7539d8fce112d16396f035a670ebbf0dbf75c874949794da7977"
	},
	{
		"id": "38f1c9724742",
		"ts": "2026-09-20T03:10:58.049Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1337827.2,
		"hash": "38f1c9724742fbd451e4a1d0048475e801ba3293785de3a10705fdc19f0ea6bf"
	},
	{
		"id": "9d1a0fde9190",
		"ts": "2026-09-20T03:10:58.239Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1882488.32,
		"hash": "9d1a0fde91901d762fe3071d2e33bf66383fb1dc8bebbca6844c89defaafd6a2"
	},
	{
		"id": "90ea27c1c6fc",
		"ts": "2026-09-20T03:10:58.430Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579953.46,
		"hash": "90ea27c1c6fcfb471e694f47eb07c00b7db024188756d62311a8263ecfea2a33"
	},
	{
		"id": "fa94bd0c247e",
		"ts": "2026-09-20T03:10:58.623Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2927243.36,
		"hash": "fa94bd0c247ec1ee82b3e914a82abe017b504f35cd81894b514e4b81fa7e85e8"
	},
	{
		"id": "e32f1d05336b",
		"ts": "2026-09-19T23:51:41.704Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129248855.48,
		"hash": "e32f1d05336b9344828f6f0841103bc07bfae3fecd53ffd9aa6aef36b87a15a6"
	},
	{
		"id": "320c064763ac",
		"ts": "2026-09-19T23:51:42.168Z",
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
		"liquidityUsd": 17424981.94,
		"hash": "320c064763ac7f93a04cbe6264566ab03ee67f93be39ca67ff17c964ca46f570"
	},
	{
		"id": "4981a36fa96a",
		"ts": "2026-09-19T23:51:42.417Z",
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
		"liquidityUsd": 883035.78,
		"hash": "4981a36fa96a12d36ab21985ce9952325b73488cbb8eecc017fbc44188366d19"
	},
	{
		"id": "e23ea780563c",
		"ts": "2026-09-19T23:51:42.664Z",
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
		"liquidityUsd": 34507652.89,
		"hash": "e23ea780563c16acde9d3fbf6beed47f3cffe8e107baae2d1f99c6495fd418e3"
	},
	{
		"id": "c5a73bd0a4fd",
		"ts": "2026-09-19T23:51:42.908Z",
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
		"liquidityUsd": 4425393.83,
		"hash": "c5a73bd0a4fd72cc035422c2bd2407229a87a99a45b6605eca8f981b723d4d99"
	},
	{
		"id": "6c4bb6c0cebf",
		"ts": "2026-09-19T23:51:43.153Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1261997.35,
		"hash": "6c4bb6c0cebf503e1e0d1cfefde11951cc7014abc28835c45ab86b67a5bf9ce6"
	},
	{
		"id": "14aa47083c1a",
		"ts": "2026-09-19T23:51:43.398Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34507652.89,
		"hash": "14aa47083c1a7c955d081e31f489408c56f51d6e96587ea41385408b7da9d04c"
	},
	{
		"id": "56b65e3dfe10",
		"ts": "2026-09-19T23:51:43.670Z",
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
		"liquidityUsd": 1959278.78,
		"hash": "56b65e3dfe105a614e22c8d7b4cd7d94ff70790d29e3f7d6a6fefd97a6b180d3"
	},
	{
		"id": "e684cbf17917",
		"ts": "2026-09-19T23:51:43.915Z",
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
		"liquidityUsd": 16569402.28,
		"hash": "e684cbf179177a2be0d4c9565930d23e1fbd042f23d0e356cbaf1952c9447c4b"
	},
	{
		"id": "b4abc8034e5f",
		"ts": "2026-09-19T23:51:44.166Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 3564413.78,
		"hash": "b4abc8034e5fe7f400a2a78aeb835b73ea3402d101dd812b298376e7d7faa4ba"
	},
	{
		"id": "202093715fac",
		"ts": "2026-09-19T23:51:44.395Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1631182.75,
		"hash": "202093715fac620b7484b40ddcbfebbba1087d406f8add9519669106e82bfe94"
	},
	{
		"id": "c4d4f71794a9",
		"ts": "2026-09-19T23:51:44.621Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1514202.23,
		"hash": "c4d4f71794a9dbae5f580f9748ce9e82cb82b6d47caae60495b6350295350c7c"
	},
	{
		"id": "00426ecafd22",
		"ts": "2026-09-19T23:51:44.846Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 525812.47,
		"hash": "00426ecafd22e4c5ecebf5d7678f5bb8302f6e8fbd7c1198d448f1b3b1b2dc05"
	},
	{
		"id": "d78445cde837",
		"ts": "2026-09-19T23:51:45.074Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 915206.56,
		"hash": "d78445cde837a772a3bea5bc1ffc2a1bddd5e6ac55325f28a596150316cafe58"
	},
	{
		"id": "9c874370681c",
		"ts": "2026-09-19T23:51:45.302Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 945212.45,
		"hash": "9c874370681cf04e84f9aa05514dd3ed51c10c2b869ea057902e9f7888128eea"
	},
	{
		"id": "80dfc6554167",
		"ts": "2026-09-19T23:51:45.527Z",
		"symbol": "VCAT",
		"token": "0xFDCC845c048Ad96B5C80b6A55D65C20A98d37777",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 190020.93,
		"hash": "80dfc6554167184d3bd7302f2a1c8e261b8d327ec1c4ec101c9b3dcb2ebcaa36"
	},
	{
		"id": "374beec81432",
		"ts": "2026-09-19T23:51:45.754Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4687492.01,
		"hash": "374beec81432f591307d726b5fcc867317e1a73ac5df14dd05ac9031a61d7326"
	},
	{
		"id": "d9f5d5e86f34",
		"ts": "2026-09-19T23:51:45.982Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1930149.04,
		"hash": "d9f5d5e86f34da16fb5bdbde268589b8ccc8fee4631052bdf054c2c15b00c630"
	},
	{
		"id": "2ffc533aec9d",
		"ts": "2026-09-19T21:15:12.263Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129306899.6,
		"hash": "2ffc533aec9d7d0bdbb2263c01c73c50f539d26de6dcf87626cf17306a13adeb"
	},
	{
		"id": "5eaa1df2ea22",
		"ts": "2026-09-19T21:15:12.740Z",
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
		"liquidityUsd": 17676847.48,
		"hash": "5eaa1df2ea22f373cb70ed13865b0834296a613c1b905562f5073c282fb0ed47"
	},
	{
		"id": "06e93eb13dea",
		"ts": "2026-09-19T21:15:13.003Z",
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
		"liquidityUsd": 881478.58,
		"hash": "06e93eb13deaca6de9adda1a985d174c38ab0c3ed62819ad0c55ffb938e91fcc"
	},
	{
		"id": "25ba154f8c03",
		"ts": "2026-09-19T21:15:13.268Z",
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
		"liquidityUsd": 34448262.35,
		"hash": "25ba154f8c032c9cf5017d74ba02ac80637c2f50d063cf0be15f0af11e9d1c21"
	},
	{
		"id": "b5c164f4ec6b",
		"ts": "2026-09-19T21:15:13.737Z",
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
		"liquidityUsd": 4428402.9,
		"hash": "b5c164f4ec6b80bbca39b7050789dfc92cae14fecd84d5f87175338bc74133c8"
	},
	{
		"id": "c6ce4ffd789d",
		"ts": "2026-09-19T21:15:14.006Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1261810.48,
		"hash": "c6ce4ffd789df8e9a2f16d3322dad2a6198972cb2b310b9167ebcbda74ba5ea7"
	},
	{
		"id": "a8508fb34f7c",
		"ts": "2026-09-19T21:15:14.260Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34443409.72,
		"hash": "a8508fb34f7ce74b71f3737b134899aac9a9508dd6965eedc72f7a6bcccb980e"
	},
	{
		"id": "0819da94f17e",
		"ts": "2026-09-19T21:15:14.515Z",
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
		"liquidityUsd": 1952168.78,
		"hash": "0819da94f17ea9b24ad0cd03091a90fde21f4e47774fa5d9dc358aea5f4c899a"
	},
	{
		"id": "98ef8848f4a4",
		"ts": "2026-09-19T21:15:14.771Z",
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
		"liquidityUsd": 16527864.82,
		"hash": "98ef8848f4a46c86d97f40ba86b6e65875a8ef183ad9acb2acdb4b590a53e294"
	},
	{
		"id": "b7705e7132d1",
		"ts": "2026-09-19T21:15:15.036Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 3251477.03,
		"hash": "b7705e7132d143fd2a4e99990b8479febf4ab9a74b9844089352d2fb33e66dac"
	},
	{
		"id": "edf9910f7945",
		"ts": "2026-09-19T21:15:15.283Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1634739.36,
		"hash": "edf9910f794551c5f734f20a8ca86a549965051f693164ad46899906908866ac"
	},
	{
		"id": "0e43f046b310",
		"ts": "2026-09-19T21:15:15.524Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1537505.6,
		"hash": "0e43f046b310e5161578ca8ab610a8427e486f4b69c006fc3383c7a92ec7f4f8"
	},
	{
		"id": "416e351eca6d",
		"ts": "2026-09-19T21:15:15.771Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4695736.02,
		"hash": "416e351eca6d4dd25c346b790a490c3fcfc0c75473789d8570103a19aa768d9f"
	},
	{
		"id": "2077e20d84da",
		"ts": "2026-09-19T21:15:16.007Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 888212.45,
		"hash": "2077e20d84daa917a3f6e6be35a439933b52aeeb9f14960839e9d293a88efc70"
	},
	{
		"id": "166a0847a1c3",
		"ts": "2026-09-19T21:15:16.243Z",
		"symbol": "VCAT",
		"token": "0xFDCC845c048Ad96B5C80b6A55D65C20A98d37777",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 203486.2,
		"hash": "166a0847a1c3c0c1bee4bc70e79b85933ca3d64f498aa36e49ce50e5310eb674"
	},
	{
		"id": "7b1a3605c8f2",
		"ts": "2026-09-19T21:15:16.480Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1930622.26,
		"hash": "7b1a3605c8f26e9be03980e3fb9ba6701dfa422af5c1d1fac56fa84f3e3c47e2"
	},
	{
		"id": "efd57e9f37ef",
		"ts": "2026-09-19T21:15:16.726Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 930324.57,
		"hash": "efd57e9f37efc546acc79af6c5dd15e9363575bb2ecfa4ea3ee09a254139ad27"
	},
	{
		"id": "9059b4ded8e4",
		"ts": "2026-09-19T21:15:16.973Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1447027.28,
		"hash": "9059b4ded8e47bfae35758d92f2f9346e87a8cd1cf5a62ebd24d0b7a174e8b34"
	},
	{
		"id": "69f502c65a9d",
		"ts": "2026-09-19T18:22:42.137Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129281744.92,
		"hash": "69f502c65a9d3ffe7c1868be2ca75c885454991117af4f4fd88fae32cbef0e9c"
	},
	{
		"id": "977e14fa54fa",
		"ts": "2026-09-19T18:22:42.614Z",
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
		"liquidityUsd": 12765916.58,
		"hash": "977e14fa54fa1d06d0069da8c582182d7b8ad15bf0173e679d04c2308eed9a39"
	},
	{
		"id": "9aed855dc56f",
		"ts": "2026-09-19T18:22:42.879Z",
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
		"liquidityUsd": 886353.02,
		"hash": "9aed855dc56f53b1cb8d6936ebd83c4fd24d598e7a8bcfce150f5eb8d4740798"
	},
	{
		"id": "7c5b7b20dc4c",
		"ts": "2026-09-19T18:22:43.138Z",
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
		"liquidityUsd": 34564838.74,
		"hash": "7c5b7b20dc4c060eeb21b964e73309ca090b9426765340a274cd0d550720f69c"
	},
	{
		"id": "06b708053f5a",
		"ts": "2026-09-19T18:22:43.462Z",
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
		"liquidityUsd": 4455000.24,
		"hash": "06b708053f5a9b0368b09d052a267bcdc13a8125fc96cba9519621a854da70f1"
	},
	{
		"id": "1f59db2f8f0a",
		"ts": "2026-09-19T18:22:43.718Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1260483.56,
		"hash": "1f59db2f8f0aadedaa6f52a5b50e71b89545678a954b85b901a15fb0b46d7a0f"
	},
	{
		"id": "0f131b951f16",
		"ts": "2026-09-19T18:22:43.977Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34564319.91,
		"hash": "0f131b951f16a8aed9b7b6001da9dac9189c20415ff9d2142e62b18c10695172"
	},
	{
		"id": "012623c770ce",
		"ts": "2026-09-19T18:22:44.238Z",
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
		"liquidityUsd": 1963216.23,
		"hash": "012623c770ceb91cc30c9faeab18072d80c764334c07f045e7ba4615c8b4bff5"
	},
	{
		"id": "f01098c81294",
		"ts": "2026-09-19T18:22:44.499Z",
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
		"liquidityUsd": 16965349.98,
		"hash": "f01098c812942f1b9c7b336bacd9379c8d8773ab8021bf2f0cf358306a41f70a"
	},
	{
		"id": "3be40654e419",
		"ts": "2026-09-19T18:22:44.755Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 3174634.08,
		"hash": "3be40654e419d08416f54f7babea305c90223f990e580ff27dcf016c5824d285"
	},
	{
		"id": "0738764dabec",
		"ts": "2026-09-19T18:22:44.996Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1725899.48,
		"hash": "0738764dabecb287733d4bacdec58a2623655dd14b42932dd564d24189cdb5d7"
	},
	{
		"id": "20e524788b63",
		"ts": "2026-09-19T18:22:45.238Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1524730.97,
		"hash": "20e524788b63f24adf4304daf527e71919e810a7b310c6e563920b6986056d3f"
	},
	{
		"id": "f519b648721e",
		"ts": "2026-09-19T18:22:45.481Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1450441.15,
		"hash": "f519b648721ee0e6a6426c2fc8e39719278feca9488ecd38df3e28fc4f19d2db"
	},
	{
		"id": "31f6fcf73456",
		"ts": "2026-09-19T18:22:45.723Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 944910.91,
		"hash": "31f6fcf73456e2949ffcb8dea378afbdcc468e5ca06f8b6d943b93d064ba8a08"
	},
	{
		"id": "faaf4a64ab7b",
		"ts": "2026-09-19T18:22:45.963Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2395242.56,
		"hash": "faaf4a64ab7b82f841b6e315c79c34b80644ff1f3cd2a9b55ab45530de54578c"
	},
	{
		"id": "3872f83247fa",
		"ts": "2026-09-19T18:22:46.202Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3101217.35,
		"hash": "3872f83247faa2d65622feaca390bc7cea3f20fd041804e4321c55aff8be4dd7"
	},
	{
		"id": "6951a288cf5d",
		"ts": "2026-09-19T18:22:46.509Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1931974.71,
		"hash": "6951a288cf5da9d894b1fb2f6fc6717d452200c9d770c73d0a3bc010d65448e4"
	},
	{
		"id": "20f77b6e3e5d",
		"ts": "2026-09-19T18:22:46.748Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4737324.19,
		"hash": "20f77b6e3e5d9492ad6cc6cbb4de470f13e30b8411ba9adf7f26e8a93cc3e67d"
	},
	{
		"id": "f8b38aabd49b",
		"ts": "2026-09-19T15:16:34.454Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128559632.28,
		"hash": "f8b38aabd49b4166f9e03b0807e66cfc44801ad39c545457860745be7ae5a8e5"
	},
	{
		"id": "776d87138611",
		"ts": "2026-09-19T15:16:34.932Z",
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
		"liquidityUsd": 13925231.61,
		"hash": "776d87138611c977b4dcffd218dcb49baaaf480f463e4479ae4d766dd6b567df"
	},
	{
		"id": "42ac18ac9a11",
		"ts": "2026-09-19T15:16:35.184Z",
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
		"liquidityUsd": 883922.91,
		"hash": "42ac18ac9a11c57ead522dcd24eab61a9821962c4fb2a82dff8ae8168950be42"
	},
	{
		"id": "41d5d62e5b0d",
		"ts": "2026-09-19T15:16:35.440Z",
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
		"liquidityUsd": 34931127.38,
		"hash": "41d5d62e5b0de19ca901d9127b97eb1f675426e924dd4aa8a51978158fbe9215"
	},
	{
		"id": "6d85439a27b1",
		"ts": "2026-09-19T15:16:35.693Z",
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
		"liquidityUsd": 4442886.27,
		"hash": "6d85439a27b1583ba05cb88d579457a0b9e39e796aa575603821669f7d5f61f6"
	},
	{
		"id": "5cea97b58ed6",
		"ts": "2026-09-19T15:16:35.944Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1239562.92,
		"hash": "5cea97b58ed67ed62d08f472800f2069234ea8ba6571a0c749291241559ad37e"
	},
	{
		"id": "a2ce0b02415b",
		"ts": "2026-09-19T15:16:36.282Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34931127.38,
		"hash": "a2ce0b02415bf6af8dd32db45cdaff6abe93c846f22a9e11939b4d4837acfc07"
	},
	{
		"id": "b57befc99022",
		"ts": "2026-09-19T15:16:36.539Z",
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
		"liquidityUsd": 1965292.99,
		"hash": "b57befc990228b54141a7a4771136ef12321b24963fb837fc5a4bae2ba3d191e"
	},
	{
		"id": "cd010041b50b",
		"ts": "2026-09-19T15:16:36.794Z",
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
		"liquidityUsd": 17424027.75,
		"hash": "cd010041b50b1cde018f004a3a0f8a99948c6bc15f4f4c37862fb9adeaf377d5"
	},
	{
		"id": "4220c14f7d90",
		"ts": "2026-09-19T15:16:37.046Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 3171536.37,
		"hash": "4220c14f7d90c68ae86dbc02905bbc7b666d15e76be134a0c19374f7a4a82ecd"
	},
	{
		"id": "51eaf8ac9648",
		"ts": "2026-09-19T15:16:37.279Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1660115.11,
		"hash": "51eaf8ac9648baddc52ea94b54211d0fca5d199d4a0e77ef95a288d164ad136f"
	},
	{
		"id": "050ba24e3022",
		"ts": "2026-09-19T15:16:37.515Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1490245.1,
		"hash": "050ba24e30226284d46d11842967d2c0902f08853b2bd69c27caa2d71b4a1c52"
	},
	{
		"id": "56d22cbf26a1",
		"ts": "2026-09-19T15:16:37.752Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 502312.33,
		"hash": "56d22cbf26a15d397d21ec785d25915a61553bcf8e27ffaaae87e2f78aaee57b"
	},
	{
		"id": "bbb4982caafc",
		"ts": "2026-09-19T15:16:37.987Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1462732.42,
		"hash": "bbb4982caafced6059b430e1f6827d4db89a1e6f4fcad10317ade52b41529803"
	},
	{
		"id": "57b1a436d294",
		"ts": "2026-09-19T15:16:38.221Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 951423.85,
		"hash": "57b1a436d294ffa3c96246c24404ca8115963f8ef2672eab8cb28b3009005cc6"
	},
	{
		"id": "46db82975a03",
		"ts": "2026-09-19T15:16:38.458Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3109276.05,
		"hash": "46db82975a03caa760887e56e8e6d19da63516cd5f34d9446f5cc068533acaf1"
	},
	{
		"id": "5b4822adabcf",
		"ts": "2026-09-19T15:16:38.693Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4762600.96,
		"hash": "5b4822adabcf9e36b86ff237c88f613122001970a756701ed1bb491ba6fb12ee"
	},
	{
		"id": "44cdf1cc4d70",
		"ts": "2026-09-19T15:16:38.927Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 488429.05,
		"hash": "44cdf1cc4d70d825a1cf5834cc39ce6a6c2707e2756be09afeef0e1ff1553549"
	},
	{
		"id": "e3c21e63e10e",
		"ts": "2026-09-19T11:51:17.140Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129613838.49,
		"hash": "e3c21e63e10e7510dbce110487ed014d45dc1fa9be6ab548c81ae6be41162e7d"
	},
	{
		"id": "daa3d32d36ce",
		"ts": "2026-09-19T11:51:17.888Z",
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
		"liquidityUsd": 17976221.51,
		"hash": "daa3d32d36ce56784faa18521843c1480ad11ed3334a1a84f2d1a756552daf11"
	},
	{
		"id": "54d20d6db43f",
		"ts": "2026-09-19T11:51:18.173Z",
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
		"liquidityUsd": 884011.29,
		"hash": "54d20d6db43fbb2306fdec25494665d295164ff8bade2f2aa8ac98765b908ee0"
	},
	{
		"id": "3f18a9c04c9d",
		"ts": "2026-09-19T11:51:18.682Z",
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
		"liquidityUsd": 34979909.03,
		"hash": "3f18a9c04c9d8f5d7aaff22c8de96cebbd73ede6baa0232605edc9756d7d1a9e"
	},
	{
		"id": "14970b69cb24",
		"ts": "2026-09-19T11:51:18.957Z",
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
		"liquidityUsd": 4438379.98,
		"hash": "14970b69cb2436c3551db8ee2de284d9e3dfdecb726b9fbccc9a92b7ba0905dc"
	},
	{
		"id": "dfe7aa1fcfe0",
		"ts": "2026-09-19T11:51:19.256Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1229135.19,
		"hash": "dfe7aa1fcfe089aa1dec9b001cf8fc78a947d17b46ec652280f5d6a98d0a6efb"
	},
	{
		"id": "93b818a41cb0",
		"ts": "2026-09-19T11:51:19.538Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34979909.03,
		"hash": "93b818a41cb003fcdb86e3f53a066a174ae4475d0d0eaba72c439248e2f46659"
	},
	{
		"id": "60fe7804aa0e",
		"ts": "2026-09-19T11:51:19.818Z",
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
		"liquidityUsd": 2171612.49,
		"hash": "60fe7804aa0e27db283563b216100e52d9c77f82af09a77719014990ed0e79a2"
	},
	{
		"id": "b8a06f6fd7af",
		"ts": "2026-09-19T11:51:20.091Z",
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
		"liquidityUsd": 17008868.68,
		"hash": "b8a06f6fd7af03a6a61b8e9bb805e93a1d8e197399d2f83df07c2a6e36ee1ba9"
	},
	{
		"id": "cf2e2766b90b",
		"ts": "2026-09-19T11:51:20.371Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 3189653.17,
		"hash": "cf2e2766b90b6f7544b77a646d4434b1b4c8cc6496df2c2ee83aef14a088cb70"
	},
	{
		"id": "07adf70bfa06",
		"ts": "2026-09-19T11:51:20.638Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1659806.75,
		"hash": "07adf70bfa067e838778fd3a48f84f65eb15137fa358167560c14d189d339bc5"
	},
	{
		"id": "b4bad0dcbcf8",
		"ts": "2026-09-19T11:51:20.910Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1508998.55,
		"hash": "b4bad0dcbcf81605beb72783e4c4c151c1b43947421743ea5b23c2cc6a35c846"
	},
	{
		"id": "ca0b9f1d7081",
		"ts": "2026-09-19T11:51:21.181Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1462895.98,
		"hash": "ca0b9f1d708145971b1dfb4657ab79b3e4695a724c03fa87064f01c121a969e4"
	},
	{
		"id": "c02bc802dffe",
		"ts": "2026-09-19T11:51:21.448Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4793554.05,
		"hash": "c02bc802dffe74e33d1aca7c7fffcdc2b3eb0f8a874f175d4556114a0d32df71"
	},
	{
		"id": "b2392df341c9",
		"ts": "2026-09-19T11:51:21.707Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 461758.16,
		"hash": "b2392df341c96b9d01f341ab451f836a9935442bbe0eb0134a11c6cbe3d694ed"
	},
	{
		"id": "230a82e62500",
		"ts": "2026-09-19T11:51:21.953Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3137455.71,
		"hash": "230a82e625004f974367be810970b63a3c0e412034febfe8ab3175cafbb030fe"
	},
	{
		"id": "5cbdf70e09f0",
		"ts": "2026-09-19T11:51:22.219Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 939832.55,
		"hash": "5cbdf70e09f05fc2426cc4c7cd3b8305f0e78c80fa21202902a2de99343bd465"
	},
	{
		"id": "57d2ba815137",
		"ts": "2026-09-19T11:51:22.575Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3314407.29,
		"hash": "57d2ba8151370ee93f9595ca53adf497a65a212ffbe75591173e07da0ae64715"
	},
	{
		"id": "cdabc7aea84a",
		"ts": "2026-09-19T06:58:29.913Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128290369.21,
		"hash": "cdabc7aea84acb576477fa3fc7aab670f1d498595b422c2ea332fd5ca3230cfb"
	},
	{
		"id": "11d00163a40e",
		"ts": "2026-09-19T06:58:30.592Z",
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
		"liquidityUsd": 17710225.32,
		"hash": "11d00163a40ef24bfb21666ff27ccf38d30f56ec12b9d59d69c6105b07b465c0"
	},
	{
		"id": "f7a926f4b050",
		"ts": "2026-09-19T06:58:31.077Z",
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
		"liquidityUsd": 878581.1,
		"hash": "f7a926f4b050bac720c2771df837d6fc02f2d4f3e33c068430cb1ac078227ad7"
	},
	{
		"id": "7d7b8e378af8",
		"ts": "2026-09-19T06:58:31.548Z",
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
		"liquidityUsd": 34813467.25,
		"hash": "7d7b8e378af82f24b73a0ed453695688f5794a51ca93fc08c06fb7330010e7da"
	},
	{
		"id": "74a03421f1a7",
		"ts": "2026-09-19T06:58:31.816Z",
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
		"liquidityUsd": 4406828.18,
		"hash": "74a03421f1a703c274e8368a127745d9b960aabe72dbf385c85ac38417920983"
	},
	{
		"id": "6a03d98b80d7",
		"ts": "2026-09-19T06:58:32.087Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1210379.47,
		"hash": "6a03d98b80d7f12ce70be778aa10c86d212221c7752055ed1f03a55548c01fcb"
	},
	{
		"id": "224faae5130d",
		"ts": "2026-09-19T06:58:32.356Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34813467.25,
		"hash": "224faae5130d14c03f09cdaa359fa5456894e50e93b9a2502120781d8b5fb355"
	},
	{
		"id": "32c91191abad",
		"ts": "2026-09-19T06:58:32.696Z",
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
		"liquidityUsd": 2065403.15,
		"hash": "32c91191abadaf9d94296a64b07d0f4d0b81958f70fa9c882509af287f4137a4"
	},
	{
		"id": "6bc1589d169d",
		"ts": "2026-09-19T06:58:32.982Z",
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
		"liquidityUsd": 17093547.92,
		"hash": "6bc1589d169d8dcb85b8138fc4173c1248c19fd58574a43299679711121a14fa"
	},
	{
		"id": "74f1e747bace",
		"ts": "2026-09-19T06:58:33.261Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3007036.93,
		"hash": "74f1e747bace66dce626f84a3d5d49724e96168b8be7b334999744f0b289c1bd"
	},
	{
		"id": "9c6982c0051b",
		"ts": "2026-09-19T06:58:33.500Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 751635.09,
		"hash": "9c6982c0051bfe3866bb43157ae7c70c8f2dcf6ec8b69338346370405934e819"
	},
	{
		"id": "6280f8f52bcb",
		"ts": "2026-09-19T06:58:33.744Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1605618.05,
		"hash": "6280f8f52bcbca1a9453f6489aa1d56f8f94e24ef4a813148b041dbcc83ddc94"
	},
	{
		"id": "6749ae06ec92",
		"ts": "2026-09-19T06:58:33.989Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1459909.65,
		"hash": "6749ae06ec928ef98f57276e08b078cd1ad7371906fea1279d95bab20f751ed1"
	},
	{
		"id": "eaafee7589fe",
		"ts": "2026-09-19T06:58:34.229Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3087169.18,
		"hash": "eaafee7589fef779ad9a026c5267637a67b50b0515405bc9458df326d8d4bec8"
	},
	{
		"id": "0587b434f825",
		"ts": "2026-09-19T06:58:34.465Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4746279.31,
		"hash": "0587b434f825bcec26fc9bc5b662d7336ed29cdc8efcc227a17cbc0d6bb83d26"
	},
	{
		"id": "fa674fee27f6",
		"ts": "2026-09-19T06:58:34.700Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 450770.79,
		"hash": "fa674fee27f6c4ae54909432f9d0e3f63b9df05aa24adceff5dbcb61e6b6ddee"
	},
	{
		"id": "2b92c1d5baff",
		"ts": "2026-09-19T06:58:34.940Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 962266.37,
		"hash": "2b92c1d5baff74a2218c19f7185bba7a216d54a534ac5df7aea2fea8a9e74047"
	},
	{
		"id": "eb31901ef752",
		"ts": "2026-09-19T06:58:35.185Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3359313.22,
		"hash": "eb31901ef7524860e102a06b8acbf4667e9e951318814493cf3a43f6e72fa614"
	},
	{
		"id": "b88a2cd54eee",
		"ts": "2026-09-19T01:04:37.893Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129562327.09,
		"hash": "b88a2cd54eee3f2e0ca14cb095e15dc0f20b6de91a17fcdbeb9f576f19326e8a"
	},
	{
		"id": "fc04d3ffef16",
		"ts": "2026-09-19T01:04:38.533Z",
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
		"liquidityUsd": 12618350.52,
		"hash": "fc04d3ffef1639072f8f15c518fc4f6d1d149abe06c167575be92b1cf03a1fa3"
	},
	{
		"id": "3a31f19f445f",
		"ts": "2026-09-19T01:04:38.781Z",
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
		"liquidityUsd": 878145.94,
		"hash": "3a31f19f445f1621d8926f8ecf57a7b190be8a4fb374c0afb83329b35fc4e4e9"
	},
	{
		"id": "c31a4da9d071",
		"ts": "2026-09-19T01:04:39.031Z",
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
		"liquidityUsd": 34251158.7,
		"hash": "c31a4da9d0715859312fdbcd611bd250cb3e0ff428c18ac14ac1c75c1572bbee"
	},
	{
		"id": "d80fc02b574b",
		"ts": "2026-09-19T01:04:39.278Z",
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
		"liquidityUsd": 4384667.84,
		"hash": "d80fc02b574b103650fa6ef1e58f6dd7e9c126dc0980c68a966956035b71acbd"
	},
	{
		"id": "473ba3faffac",
		"ts": "2026-09-19T01:04:39.526Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1229864.75,
		"hash": "473ba3faffac212b7d842ef16b570375440bfbfe2700a91ab77841d8307e02c9"
	},
	{
		"id": "056f90702d79",
		"ts": "2026-09-19T01:04:39.770Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34250190.78,
		"hash": "056f90702d79710f2f6ec911f0b6b6fac036bbc6665bcaa3eb408f95a2fbe480"
	},
	{
		"id": "323f466dd6e9",
		"ts": "2026-09-19T01:04:40.033Z",
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
		"liquidityUsd": 2061273.57,
		"hash": "323f466dd6e97108f609d7f1bd9d1451ac17971a9a421cc2ba6883e997336572"
	},
	{
		"id": "23eb93d5b819",
		"ts": "2026-09-19T01:04:40.279Z",
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
		"liquidityUsd": 70592.98,
		"hash": "23eb93d5b8197c450548a751302cdc9ce4ff48ceb6017d2e87a1210e6cd233cc"
	},
	{
		"id": "399eb5607543",
		"ts": "2026-09-19T01:04:40.530Z",
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
		"liquidityUsd": 17487801.49,
		"hash": "399eb5607543dee6b600435cecd2a6a0a41be2d92816a3b8a1dbc045cd1e89a2"
	},
	{
		"id": "4f5cd20a5868",
		"ts": "2026-09-19T01:04:40.759Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1491597.92,
		"hash": "4f5cd20a586815662f987047ae380da995227ab4d26b528171e88282d5f22e86"
	},
	{
		"id": "84ec265a3384",
		"ts": "2026-09-19T01:04:40.987Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1925195.22,
		"hash": "84ec265a338435e1f6e5044be2218d5700a57c670d5d588d074399bbfaea8c0f"
	},
	{
		"id": "32ff9efcb743",
		"ts": "2026-09-19T01:04:41.215Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1484743.27,
		"hash": "32ff9efcb743c72f3fdecba3cc74bf81e040ea01697c64296e8841947ec6ff41"
	},
	{
		"id": "62e0803abf10",
		"ts": "2026-09-19T01:04:41.444Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3132944.63,
		"hash": "62e0803abf10b9a2ae7ce75e1bc3cb58d54d894c129b4db2084a5afeec7a45ad"
	},
	{
		"id": "bce24d31a654",
		"ts": "2026-09-19T01:04:41.671Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4771017.59,
		"hash": "bce24d31a6546b996217a9b13980de7a42c7ee27ad54f66bdef9dd8dd613655a"
	},
	{
		"id": "b0d90ea95a3a",
		"ts": "2026-09-19T01:04:41.899Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 469212.01,
		"hash": "b0d90ea95a3a2844419943b9dd4d1666abdb41883661b4f57a1c825e5c400165"
	},
	{
		"id": "25b6136c56a0",
		"ts": "2026-09-19T01:04:42.127Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3380718.23,
		"hash": "25b6136c56a0435ea9df3067e3df1db1c74ad326942940ac48cd322cf31a3aac"
	},
	{
		"id": "1343a64d297e",
		"ts": "2026-09-19T01:04:42.355Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 972603.41,
		"hash": "1343a64d297e3c32563c7765f85becd6d50d9889f5d201a604cc25acf2f0e258"
	},
	{
		"id": "ce7de5c4e47c",
		"ts": "2026-09-18T22:59:18.178Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129575573.8,
		"hash": "ce7de5c4e47c2d103a61638b871149186ec93e2d7546c435f13d273c004d6bf7"
	},
	{
		"id": "2361ccedbb7e",
		"ts": "2026-09-18T22:59:18.448Z",
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
		"liquidityUsd": 18552337.63,
		"hash": "2361ccedbb7efd111688829fb08a71c41fdeb7190b5173fa63d35c065bd802b8"
	}
]
