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
	"updatedAt": "2026-09-22T22:41:41.410Z",
	"tokensScored": 18302,
	"verdictsIssued": 18302,
	"safe": 15523,
	"risky": 1328,
	"likelyRug": 1451,
	"ticks": 1043
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "fe1f99acbfd6",
		"ts": "2026-09-22T22:41:36.786Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 153284766.91,
		"hash": "fe1f99acbfd624b6e9ae9b005208b8bf5ff070afbf23343d4ef3e4d950ce1c67"
	},
	{
		"id": "799b2ffc24ea",
		"ts": "2026-09-22T22:41:37.063Z",
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
		"liquidityUsd": 17253009.45,
		"hash": "799b2ffc24ea4bcf2f0da0401830bd89f1265777a9f91d03356d17e3eaeb2dcd"
	},
	{
		"id": "58ca10591af0",
		"ts": "2026-09-22T22:41:37.322Z",
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
		"liquidityUsd": 895693.43,
		"hash": "58ca10591af078d0f01790b5447ba4b55038cb61b75fae60f3156cded9cf1127"
	},
	{
		"id": "ecf5649e21a4",
		"ts": "2026-09-22T22:41:37.586Z",
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
		"liquidityUsd": 36133912.32,
		"hash": "ecf5649e21a44284c96a590ed3a9ff67f29c8b8e02b8176a6678de35714f5e1a"
	},
	{
		"id": "8d38168dc8bf",
		"ts": "2026-09-22T22:41:37.849Z",
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
		"liquidityUsd": 4666617.59,
		"hash": "8d38168dc8bf409a5cc8fc043e60121c5a7e5923b43d29fdb4f9b40382634447"
	},
	{
		"id": "90b295c9a1e2",
		"ts": "2026-09-22T22:41:38.123Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1329644.53,
		"hash": "90b295c9a1e23c16550f28b4c48dac29f17aa093c834a7cb4aac8a3a7b4cd619"
	},
	{
		"id": "54426be14303",
		"ts": "2026-09-22T22:41:38.384Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36133912.32,
		"hash": "54426be14303975afe91fc79b7833f82d93d58eb3b384559220c6117d205400b"
	},
	{
		"id": "5ac6e763edb5",
		"ts": "2026-09-22T22:41:38.643Z",
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
		"liquidityUsd": 1371277,
		"hash": "5ac6e763edb5cce9f5a8b589360462e4554d4f1ec30abffbb5914612a135e6c1"
	},
	{
		"id": "0bd7d86fcf4b",
		"ts": "2026-09-22T22:41:38.902Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 607041.82,
		"hash": "0bd7d86fcf4bd2cb0b263f738005d2e931c38a65123462668f6b7a765b5d5e00"
	},
	{
		"id": "ee2ed7cf81d4",
		"ts": "2026-09-22T22:41:39.164Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2826129.91,
		"hash": "ee2ed7cf81d409566fc03ffce6436838ccb743509b6de640ede4770fad374e49"
	},
	{
		"id": "89e005149849",
		"ts": "2026-09-22T22:41:39.418Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1138138.41,
		"hash": "89e00514984988d86ae029705566dcb46d1c8696fad14c94e1a055e1ae892e8a"
	},
	{
		"id": "d529e5e77640",
		"ts": "2026-09-22T22:41:39.662Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19153898.09,
		"hash": "d529e5e77640e7b8569976689f46bc1ae8119cb7f3b3845f618bf9d2b4ffd092"
	},
	{
		"id": "b41a49de3d3b",
		"ts": "2026-09-22T22:41:39.907Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 942562.29,
		"hash": "b41a49de3d3b21fd7bacf86ac590e3c3ed81803c87ffc342f2462d9d42bac407"
	},
	{
		"id": "6e2eed630bcb",
		"ts": "2026-09-22T22:41:40.151Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1602587.61,
		"hash": "6e2eed630bcb0f1fd52de1899f1b68db90edadbb970bef2b87168c1633ef4fd2"
	},
	{
		"id": "02856779ad0e",
		"ts": "2026-09-22T22:41:40.401Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 566995.85,
		"hash": "02856779ad0e01410b61a4a3ec95bbc50dae0dbd8a3f19f555e15969765ab5ac"
	},
	{
		"id": "494e770a69fa",
		"ts": "2026-09-22T22:41:40.658Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 1118780.78,
		"hash": "494e770a69fa53ee95fe34d36a9c95d6c0507777511af2462c680252341cb3e8"
	},
	{
		"id": "d3d0718cf55e",
		"ts": "2026-09-22T22:41:40.906Z",
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
		"liquidityUsd": 3612467.35,
		"hash": "d3d0718cf55e050efc8e8a61088c2a4bb354f92ff5e06fee13ea4cd59d54b840"
	},
	{
		"id": "502b809f2872",
		"ts": "2026-09-22T22:41:41.153Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567108.83,
		"hash": "502b809f28727d94a913d8a5bde845807b9af96e27876beb8d12bc80d84a6bce"
	},
	{
		"id": "aaa7657eab44",
		"ts": "2026-09-22T22:41:41.410Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1548501.4,
		"hash": "aaa7657eab445a9f21d137047b976482ca2b4e5737f224082578725247648c08"
	},
	{
		"id": "3c99ae398160",
		"ts": "2026-09-22T19:31:56.327Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 151543143.66,
		"hash": "3c99ae39816007111b5a1ad4a94771bc30b485849e20d61d14edf724db510098"
	},
	{
		"id": "2ba9e9a3900a",
		"ts": "2026-09-22T19:31:57.108Z",
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
		"liquidityUsd": 13316655.95,
		"hash": "2ba9e9a3900a60ae71af917453df40b801a41aafe5b8502a942a45e57a4b7c72"
	},
	{
		"id": "77daf013cb1e",
		"ts": "2026-09-22T19:31:57.404Z",
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
		"liquidityUsd": 899885.13,
		"hash": "77daf013cb1e8af98ae11ef0079343d436d7529847aa1f1ab23d053178af89aa"
	},
	{
		"id": "56b476bce1e1",
		"ts": "2026-09-22T19:31:57.708Z",
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
		"liquidityUsd": 36097149.44,
		"hash": "56b476bce1e146b97290cc565407644d8e7e962111229b3978458f15097dcb80"
	},
	{
		"id": "c2f4aab07988",
		"ts": "2026-09-22T19:31:58.013Z",
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
		"liquidityUsd": 4619042.92,
		"hash": "c2f4aab07988dbf6f919cc2ccb20483cf2c750af765175098d45dd92a9602e73"
	},
	{
		"id": "5c80c47422e4",
		"ts": "2026-09-22T19:31:58.316Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1331166.3,
		"hash": "5c80c47422e46d7d6403f23ccdd6ee58038fba53bad5b27519306ec8716d08c5"
	},
	{
		"id": "e9e811f08cff",
		"ts": "2026-09-22T19:31:58.613Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36097149.44,
		"hash": "e9e811f08cff30d53fe79d24a87ce075dca02b31ee3dda04bec12042586677f2"
	},
	{
		"id": "2836dfee6fcb",
		"ts": "2026-09-22T19:31:58.942Z",
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
		"liquidityUsd": 1372283.01,
		"hash": "2836dfee6fcbe539219b3c0309e060c9f58059d10911fc8e0394aa5225f8d9c5"
	},
	{
		"id": "36892a42ab2d",
		"ts": "2026-09-22T19:31:59.240Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 717072.01,
		"hash": "36892a42ab2d0e702f10260dfc8b6245b41e1cb8c547db9f10aac141f0cca221"
	},
	{
		"id": "b0b08b1a685a",
		"ts": "2026-09-22T19:31:59.541Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1165213.97,
		"hash": "b0b08b1a685a87e86cc50a7879047d68476b3b74716103a4597d03a175b80f19"
	},
	{
		"id": "f6b0b973a8ee",
		"ts": "2026-09-22T19:31:59.824Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2660668.73,
		"hash": "f6b0b973a8ee86816e68909d3c0cd77199dc2b8a135acbf007b3b6aa253680c6"
	},
	{
		"id": "69ff0134a8b0",
		"ts": "2026-09-22T19:32:00.106Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19207916.97,
		"hash": "69ff0134a8b0ec059db92e2781b71a698993334b08f07269c98b7291535ba118"
	},
	{
		"id": "6ed4a64403a0",
		"ts": "2026-09-22T19:32:00.402Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3578793.42,
		"hash": "6ed4a64403a02d23c9c09eeb4c7f7f284c4fb155260be10e660345ab75ef11ed"
	},
	{
		"id": "082425962516",
		"ts": "2026-09-22T19:32:00.705Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1615132.46,
		"hash": "082425962516491da2b597a537c91ff95b19e89885787d17015281d72d508d36"
	},
	{
		"id": "dd9b6f7b5e6f",
		"ts": "2026-09-22T19:32:01.001Z",
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
		"liquidityUsd": 933606.12,
		"hash": "dd9b6f7b5e6f96f16bfa1dbd18aff2281a7ac2802442c1a84c7b7d8753c7fcc3"
	},
	{
		"id": "9d3088dd330c",
		"ts": "2026-09-22T19:32:01.299Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 594768.81,
		"hash": "9d3088dd330cc2e74b44805d28a607ad46f185a226e95cc0682c2a8f80563eba"
	},
	{
		"id": "9d5f9610cd9b",
		"ts": "2026-09-22T19:32:01.601Z",
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
		"liquidityUsd": 1213828.53,
		"hash": "9d5f9610cd9ba879b45612727189b7cb62e7c3f94f1eb9e5351354c9811a6e22"
	},
	{
		"id": "f10ea6935c67",
		"ts": "2026-09-22T19:32:02.296Z",
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
		"liquidityUsd": 1551592.62,
		"hash": "f10ea6935c672f344b59d94f5e257968be1d41e07f9aaef4f590d57420172447"
	},
	{
		"id": "f4fe89f914e7",
		"ts": "2026-09-22T19:32:02.597Z",
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
		"liquidityUsd": 232019.4,
		"hash": "f4fe89f914e7dcd40b04bcb9efaaa072039d801cdc0e1cea7560aad19c111de0"
	},
	{
		"id": "d9928abe1eba",
		"ts": "2026-09-22T15:23:53.117Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 148439956.89,
		"hash": "d9928abe1eba576726362f247415eb93c68fb4ec2f5e2e652aad4a35e8d917d8"
	},
	{
		"id": "c5e4086870f4",
		"ts": "2026-09-22T15:23:53.575Z",
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
		"liquidityUsd": 15447751.95,
		"hash": "c5e4086870f4c93c96d9a50fea519b457ff6cfb3adb615fdd6f1754da61479fe"
	},
	{
		"id": "b5f72fe838cf",
		"ts": "2026-09-22T15:23:53.780Z",
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
		"liquidityUsd": 900466.6,
		"hash": "b5f72fe838cf2928a7968ca6a0e6838df45715110775606e182f7dd949e04218"
	},
	{
		"id": "02043b0da660",
		"ts": "2026-09-22T15:23:53.973Z",
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
		"liquidityUsd": 36217056.8,
		"hash": "02043b0da660421f47e8640a723e8f432ee91dffeebd5adaa26413f213301fd5"
	},
	{
		"id": "aef0f5c903cb",
		"ts": "2026-09-22T15:23:54.162Z",
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
		"liquidityUsd": 4678519.94,
		"hash": "aef0f5c903cb5f595ba497aa55b1211b297ca5d4355b117f0c4811cea9d19dc8"
	},
	{
		"id": "60059b34cf49",
		"ts": "2026-09-22T15:23:54.351Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1321100.95,
		"hash": "60059b34cf49a4d22e108593beaa8da3d3d37a5ec545ad317e03bec4937eae58"
	},
	{
		"id": "d7f32f5ee275",
		"ts": "2026-09-22T15:23:54.543Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36196397.86,
		"hash": "d7f32f5ee275303829d2f0e4be65b0c4a3f026385295bbef87869174004065d6"
	},
	{
		"id": "7c71118d5f03",
		"ts": "2026-09-22T15:23:54.732Z",
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
		"liquidityUsd": 1378897.53,
		"hash": "7c71118d5f039b1d659703fa990b7523c1c2165bbb74964dcfcdff711007afe6"
	},
	{
		"id": "1945b6c85140",
		"ts": "2026-09-22T15:23:54.929Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 702906.67,
		"hash": "1945b6c85140ee9baa14a40f86306bb84133cc7c65bec2b61c969f65136df3b9"
	},
	{
		"id": "dceadadbf250",
		"ts": "2026-09-22T15:23:55.126Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2625366.37,
		"hash": "dceadadbf2506b2e2fe91c8619dc602822850c841d3120790c3b9cb2dfed888f"
	},
	{
		"id": "c4a298784259",
		"ts": "2026-09-22T15:23:55.315Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1207306.81,
		"hash": "c4a298784259fae6acbdb6dace8281d3f33e2d9c1ddd2e92197f2ee7a9300eb6"
	},
	{
		"id": "33e4d5eb53f4",
		"ts": "2026-09-22T15:23:55.517Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18663168.43,
		"hash": "33e4d5eb53f4e68061c5ab022736b47010cb900491e5c37cd3553b257489e36c"
	},
	{
		"id": "7c8518977c57",
		"ts": "2026-09-22T15:23:55.714Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3521584.52,
		"hash": "7c8518977c57526fd917299209453498405e26c2cad157dc8d21dbc315494fe2"
	},
	{
		"id": "42a5eff14e2a",
		"ts": "2026-09-22T15:23:55.906Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1560821.83,
		"hash": "42a5eff14e2a790c71bccb0fd1286ee6a1aecece4d1c665ae0f08b4bddd31a40"
	},
	{
		"id": "1f4327537815",
		"ts": "2026-09-22T15:23:56.102Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 928746.36,
		"hash": "1f432753781556d99ecc41e94a166e375d8885eea5a00d60aeb8ed6b2ecb14ae"
	},
	{
		"id": "48da28f0f6fb",
		"ts": "2026-09-22T15:23:56.320Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1535684.26,
		"hash": "48da28f0f6fbb37f1d5d96372fcc144b7d74aed729b8d6b40f9d18282ec91f2e"
	},
	{
		"id": "32a5af4b3017",
		"ts": "2026-09-22T15:23:56.522Z",
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
		"liquidityUsd": 987734.27,
		"hash": "32a5af4b3017a76234b593b6f1eba87295f7f98158eead0cc0073818a04ce565"
	},
	{
		"id": "18a56babec1a",
		"ts": "2026-09-22T15:23:56.726Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 536853.7,
		"hash": "18a56babec1aed0544689bebc3d47ed647beea09e78a97d970cbe08e00861a3f"
	},
	{
		"id": "e25111a4048e",
		"ts": "2026-09-22T15:23:56.916Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 948657.11,
		"hash": "e25111a4048ebdcb9e7e6efa26be63934e64b9261a2173921542e2985e1806fb"
	},
	{
		"id": "bcb67f07af0a",
		"ts": "2026-09-22T10:53:36.917Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146068795.3,
		"hash": "bcb67f07af0af9d840ba7f44d8ac57cbce9ca6975468ee5ef6bc6b3ebc2c84b9"
	},
	{
		"id": "cc8f64d4c36a",
		"ts": "2026-09-22T10:53:37.168Z",
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
		"liquidityUsd": 17011281.62,
		"hash": "cc8f64d4c36a1b53a7bf87f58c3a3f07c1918ee9706f946df42016570c0a9189"
	},
	{
		"id": "aeac0a68cc30",
		"ts": "2026-09-22T10:53:37.429Z",
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
		"liquidityUsd": 902436.48,
		"hash": "aeac0a68cc30115f1e4ecd939248655f7bdc2bba3486e50eaeb3d9d380207b8c"
	},
	{
		"id": "b0e57918841e",
		"ts": "2026-09-22T10:53:37.682Z",
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
		"liquidityUsd": 36607709.24,
		"hash": "b0e57918841e50e8b984950b26268674550649c3b69d5d93606fec6bb2c3e3b4"
	},
	{
		"id": "3816f01275ac",
		"ts": "2026-09-22T10:53:37.942Z",
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
		"liquidityUsd": 4637571.36,
		"hash": "3816f01275ac8cb2096d8afea051d72fa6d0fe63bf60f8a6ce526e6fb0f2a5cc"
	},
	{
		"id": "9935e28b5036",
		"ts": "2026-09-22T10:53:38.191Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1314983.36,
		"hash": "9935e28b5036df5785c5fa93aa8d40075fa841ffc49447f27314a3d8dc0d0453"
	},
	{
		"id": "69ee4f0547d9",
		"ts": "2026-09-22T10:53:38.445Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36607709.24,
		"hash": "69ee4f0547d9d3af45e6f99374c47241eef4f8611f167977f56420b7ee9e96a6"
	},
	{
		"id": "f8d0b2ae7753",
		"ts": "2026-09-22T10:53:38.699Z",
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
		"liquidityUsd": 1312930.09,
		"hash": "f8d0b2ae775316fb890f9d249b5888c4939f33dbda37b5393887b75b50393083"
	},
	{
		"id": "b3add4821f9a",
		"ts": "2026-09-22T10:53:38.958Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 697739.5,
		"hash": "b3add4821f9ae2d780e8f55f41a0ba02a082d2de1b074740285730b5482253ad"
	},
	{
		"id": "7154c601c955",
		"ts": "2026-09-22T10:53:39.204Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2687186.31,
		"hash": "7154c601c955901788a6a5559874e6750288f18df1893fabecc9ba9621c27c23"
	},
	{
		"id": "f895a85a176b",
		"ts": "2026-09-22T10:53:39.445Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18942834.87,
		"hash": "f895a85a176bcdf96d211e98efeadfa00fc7525c6694ca7955e0888ee719cb63"
	},
	{
		"id": "445f2d47e64f",
		"ts": "2026-09-22T10:53:39.673Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1191371.93,
		"hash": "445f2d47e64f485222a7c18c7f114cd49021cf2cc2589ec80ca6c253f9f3de49"
	},
	{
		"id": "26d8132879e0",
		"ts": "2026-09-22T10:53:39.911Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1562794.31,
		"hash": "26d8132879e07fb424d649c11649a463f3ad9baa0c170598648fdf1a3a65c51c"
	},
	{
		"id": "b300fdaba57d",
		"ts": "2026-09-22T10:53:40.137Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3504194.37,
		"hash": "b300fdaba57de4d4df23a50825ff150415ead6df201434c619f3bed18f5b8fb1"
	},
	{
		"id": "2ca241e30736",
		"ts": "2026-09-22T10:53:40.380Z",
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
		"liquidityUsd": 1055609.57,
		"hash": "2ca241e30736c29b110bd714caeeaa4f7d6908a7bf42aa4132d249a842aa0ed0"
	},
	{
		"id": "726379cf5d71",
		"ts": "2026-09-22T10:53:40.607Z",
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
		"liquidityUsd": 914403.71,
		"hash": "726379cf5d71aca961cb508083da4773e344969b6b077ff32525240d9d984870"
	},
	{
		"id": "1f8cad6dae4f",
		"ts": "2026-09-22T10:53:40.848Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1525657.51,
		"hash": "1f8cad6dae4fdfb20c7bc090db7b4d8a1a2ff943924eaa68a49b1ab40809a896"
	},
	{
		"id": "12d089e553ec",
		"ts": "2026-09-22T10:53:41.077Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1345863.04,
		"hash": "12d089e553ec4cd36fe916e3a3468aae187fe21c24ac8a26352c658f599822a8"
	},
	{
		"id": "3e2ac62aa638",
		"ts": "2026-09-22T10:53:41.317Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4721171.73,
		"hash": "3e2ac62aa638a2ffca6f03d059e14353e0c52e2d3d83733b0308b8aa853acf0a"
	},
	{
		"id": "a8ccdbe6ae9d",
		"ts": "2026-09-22T05:48:51.088Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 144675108.57,
		"hash": "a8ccdbe6ae9d6c6c189a9ce49abcffacfb5a539a012bd4ca31272bfc98faf231"
	},
	{
		"id": "f4071d37cdcb",
		"ts": "2026-09-22T05:48:51.337Z",
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
		"liquidityUsd": 16832336.49,
		"hash": "f4071d37cdcb806faa47d0e5d6ff3262e97bd894243f4ad8dc23daf6e1dea7bc"
	},
	{
		"id": "33210e802efe",
		"ts": "2026-09-22T05:48:51.580Z",
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
		"liquidityUsd": 896564.37,
		"hash": "33210e802efe26e213c41e78f6cacc43318886f2e4e0c79b6532e8010b1dc78a"
	},
	{
		"id": "c84e2f7e18f1",
		"ts": "2026-09-22T05:48:51.841Z",
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
		"liquidityUsd": 36172677.73,
		"hash": "c84e2f7e18f1d41b898a501c88ef1c698cc6effb0dc2381b803a6f50ab67d96f"
	},
	{
		"id": "7595b18482b3",
		"ts": "2026-09-22T05:48:52.085Z",
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
		"liquidityUsd": 4604144.34,
		"hash": "7595b18482b3b7f12ed8b89c183bdd68206990140bd7c5b95bb76888e6c28f8e"
	},
	{
		"id": "2536158c8180",
		"ts": "2026-09-22T05:48:52.347Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1320513.35,
		"hash": "2536158c8180bc964cf1584ec46aaade458738868166301b97c80898fcd42e96"
	},
	{
		"id": "d880785721ab",
		"ts": "2026-09-22T05:48:52.598Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36172677.73,
		"hash": "d880785721ab55e8cc936c0a4b60f76454cf3da87c343272b3d1f0173e7c788a"
	},
	{
		"id": "3ba073eaf310",
		"ts": "2026-09-22T05:48:52.841Z",
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
		"liquidityUsd": 1374650.8,
		"hash": "3ba073eaf310360ed962a2e01d0ee2d8621dd2bb0d04eb97382b250d858f1c71"
	},
	{
		"id": "3d55b7ee56d8",
		"ts": "2026-09-22T05:48:53.307Z",
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
		"liquidityUsd": 18624995.4,
		"hash": "3d55b7ee56d8c452bc15bc237a4862f50f93e5d5e5b52a33e2d84e8953377eed"
	},
	{
		"id": "31d3385425ac",
		"ts": "2026-09-22T05:48:53.547Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 747039.63,
		"hash": "31d3385425ac4806e7cc664720725c75574e8574eef0e047677ae46b4e86fa4a"
	},
	{
		"id": "e0ac363b8c4a",
		"ts": "2026-09-22T05:48:53.781Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2694980.98,
		"hash": "e0ac363b8c4a548d7817b31ca31b7e83227402e75903c927915258fb595040d0"
	},
	{
		"id": "666f5e8fb08f",
		"ts": "2026-09-22T05:48:54.004Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1172730.21,
		"hash": "666f5e8fb08f6117bcb81e17b64bb10a65c0583e6e435c463afe51ec862439a9"
	},
	{
		"id": "439cb9e7f8a7",
		"ts": "2026-09-22T05:48:54.238Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1565451.83,
		"hash": "439cb9e7f8a7e149ea28a46f2cb677003533fe7938acee28a81009ae39dd8635"
	},
	{
		"id": "e3a0ceb3b336",
		"ts": "2026-09-22T05:48:54.460Z",
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
		"liquidityUsd": 959999.19,
		"hash": "e3a0ceb3b336d6115955cc41b8a265120813c514363a924189ca7566966a5ad6"
	},
	{
		"id": "a60233979a7c",
		"ts": "2026-09-22T05:48:54.694Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3480827.88,
		"hash": "a60233979a7c61cfa3dcdab7254731fbfa29784ac561c1321d3b541a33571878"
	},
	{
		"id": "0699dc49f557",
		"ts": "2026-09-22T05:48:54.916Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1529032.53,
		"hash": "0699dc49f557baa8e908e7c01ed26e01fd7deded7210c3c25c0dea73ec8cf46b"
	},
	{
		"id": "d6a1db4e7e9b",
		"ts": "2026-09-22T05:48:55.149Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 847674.08,
		"hash": "d6a1db4e7e9becd6d0ecd6b5dd88b9190e6cccefb1d23cb3cec39d8ca1b2ff65"
	},
	{
		"id": "56790627627a",
		"ts": "2026-09-22T05:48:55.373Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 522233.84,
		"hash": "56790627627a284e98c0b9110b4a58332d74148f973c10862e4b25f519c32906"
	},
	{
		"id": "f5b6bf680920",
		"ts": "2026-09-22T00:33:07.303Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 145442540.59,
		"hash": "f5b6bf6809207c191ab7c3d8f5a23458e31512259ef049a3615823084f2a5efb"
	},
	{
		"id": "dc31abf1e70b",
		"ts": "2026-09-22T00:33:07.563Z",
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
		"liquidityUsd": 17551213.3,
		"hash": "dc31abf1e70b0f8e1ca3d764d414f01bd7b77fa9e8887cc65cf4cc652550e5f2"
	},
	{
		"id": "8b2edfb12d01",
		"ts": "2026-09-22T00:33:07.778Z",
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
		"liquidityUsd": 918130.75,
		"hash": "8b2edfb12d016d4234cd7c8b261a8c74752714cc85790292661b2ce2c53d85fc"
	},
	{
		"id": "1512bf767227",
		"ts": "2026-09-22T00:33:07.988Z",
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
		"liquidityUsd": 36348494.62,
		"hash": "1512bf767227b67aaa10bd3486048cf21b52487e1e3513c7e3b3edcfdcbbfc22"
	},
	{
		"id": "9cd12d29385b",
		"ts": "2026-09-22T00:33:08.199Z",
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
		"liquidityUsd": 4708867.65,
		"hash": "9cd12d29385bc0b842ca789ad579decb2624fd013a55f7c9ec09139d6e877ec7"
	},
	{
		"id": "01bb1646bc4e",
		"ts": "2026-09-22T00:33:08.410Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1334960.46,
		"hash": "01bb1646bc4e7511d5f751cded8ce29fe04cdd83967535ce079aa135a149ecf8"
	},
	{
		"id": "7bcbeea1df35",
		"ts": "2026-09-22T00:33:08.627Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36348494.62,
		"hash": "7bcbeea1df35147d9d9e653bd01ff9a93ffc61e5e7332586c2708e14ebeb91c1"
	},
	{
		"id": "951179878fc9",
		"ts": "2026-09-22T00:33:08.839Z",
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
		"liquidityUsd": 1321525.99,
		"hash": "951179878fc9d68225c80eae3d564b7656eb587baf31381586b48dbcc3ffd957"
	},
	{
		"id": "6f1181a602bd",
		"ts": "2026-09-22T00:33:09.049Z",
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
		"liquidityUsd": 18927480,
		"hash": "6f1181a602bdeebbb437358e571ea1f3f33260927d7a322a52f373d26c54f0c4"
	},
	{
		"id": "0f5ccd489b63",
		"ts": "2026-09-22T00:33:09.256Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1157918.64,
		"hash": "0f5ccd489b635a7f523c0e5bc0281fa8ef69d859106d4c1f6f7a79c52dacec6b"
	},
	{
		"id": "324199f2abdb",
		"ts": "2026-09-22T00:33:09.455Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1593039,
		"hash": "324199f2abdb4764f70a76e1c3f828835abd40ba9b0eb69de0420a3561fbd7cb"
	},
	{
		"id": "2c8ebe292c5b",
		"ts": "2026-09-22T00:33:09.655Z",
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
		"liquidityUsd": 956836.92,
		"hash": "2c8ebe292c5bf3fa79bdf723753a1bf8219e263f16721768d61f8bf11747c733"
	},
	{
		"id": "8b0023973aab",
		"ts": "2026-09-22T00:33:09.855Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2274317.78,
		"hash": "8b0023973aab547ae5a45f0e154af32fe9ceb97db1f24098396829b2adf321b4"
	},
	{
		"id": "4fc5c7822954",
		"ts": "2026-09-22T00:33:10.051Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 556893.42,
		"hash": "4fc5c782295400e21026683b5827a9b6ba2d29b12eb7cae6cff37baf9cd20d61"
	},
	{
		"id": "1a70ad751c73",
		"ts": "2026-09-22T00:33:10.253Z",
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
		"liquidityUsd": 3552908.63,
		"hash": "1a70ad751c737bd457b89636450e91128f02535c5d0b0a4ecffa07a712aa78fd"
	},
	{
		"id": "edc88bfb1375",
		"ts": "2026-09-22T00:33:10.448Z",
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
		"liquidityUsd": 879667.17,
		"hash": "edc88bfb137520cd9b378b45226a1b2770cf607c8e05ab5927e0d3c11b9a1ca4"
	},
	{
		"id": "33b6b3529061",
		"ts": "2026-09-22T00:33:10.638Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 555565.64,
		"hash": "33b6b35290616feb2d0145629e78322a75b4936d22c814f476a2de9499070547"
	},
	{
		"id": "39cdc2ae74e9",
		"ts": "2026-09-22T00:33:10.840Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4810195.08,
		"hash": "39cdc2ae74e9fbb3c2669c70dc173687b4c4f84aecf7f7ad57a1b3059bc3bc31"
	},
	{
		"id": "b44ab4431782",
		"ts": "2026-09-21T21:39:16.692Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 145911974.15,
		"hash": "b44ab4431782ffed7564ac23fd1ff97ce12d068767b0ea6771c70c62b31fe556"
	},
	{
		"id": "6f5fc5d321d9",
		"ts": "2026-09-21T21:39:16.894Z",
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
		"liquidityUsd": 13801510.61,
		"hash": "6f5fc5d321d92c3a4f9e5c70bef308f1099bba089e101e1d860bdf4ca61d1896"
	},
	{
		"id": "a5d94c4128a1",
		"ts": "2026-09-21T21:39:17.255Z",
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
		"liquidityUsd": 922165.6,
		"hash": "a5d94c4128a1001796bfae5d626c67ac37320589300f79d02379b482402023f2"
	},
	{
		"id": "f40d6483341b",
		"ts": "2026-09-21T21:39:17.448Z",
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
		"liquidityUsd": 36125985.1,
		"hash": "f40d6483341b6e23284b6a9cc13aaaaa93ebb46e38004714cbdf77eff5b19336"
	},
	{
		"id": "4aad2f857976",
		"ts": "2026-09-21T21:39:17.647Z",
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
		"liquidityUsd": 4651887.29,
		"hash": "4aad2f857976f15ed84b11c090f19994b171aa881a2e27c8f5ae9a8ae919f71d"
	},
	{
		"id": "556eb9fc799a",
		"ts": "2026-09-21T21:39:17.841Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1333119.7,
		"hash": "556eb9fc799aeb8af624feab23a56bca0f0183f190ffd75b113b6873106e25e4"
	},
	{
		"id": "d87d68f3962a",
		"ts": "2026-09-21T21:39:18.034Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36125985.1,
		"hash": "d87d68f3962a97ea18b41c86917decb35d9f4c0710d6ec78e9360bafd3635a9c"
	},
	{
		"id": "c019a791a7c1",
		"ts": "2026-09-21T21:39:18.231Z",
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
		"liquidityUsd": 1327154.35,
		"hash": "c019a791a7c1f945cf7de15bed23bf28aa988c16cae5ad54ef1028243e75eb96"
	},
	{
		"id": "2acd1951c715",
		"ts": "2026-09-21T21:39:18.432Z",
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
		"liquidityUsd": 18919810.43,
		"hash": "2acd1951c715f8d23d371b158888a471a1856f9a67f0ae6b49ce14c40eff4d55"
	},
	{
		"id": "653e230d07ec",
		"ts": "2026-09-21T21:39:18.625Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1662010.43,
		"hash": "653e230d07ec47e6a30e4735c9fa60878f975a80514ee21871f6311b4b0074bd"
	},
	{
		"id": "af892a5c9084",
		"ts": "2026-09-21T21:39:18.811Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1173648.04,
		"hash": "af892a5c90842f84ebc4e7fca76b6e63b89300e23c886ba38039fc1f0b7b3ab1"
	},
	{
		"id": "76842e7ed2d7",
		"ts": "2026-09-21T21:39:19.011Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 555018.08,
		"hash": "76842e7ed2d779ba2de19a74ba4aa5d0b4d129906c473e4f80f873be8d19125e"
	},
	{
		"id": "1faf5fe0f56f",
		"ts": "2026-09-21T21:39:19.249Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3468491.41,
		"hash": "1faf5fe0f56f74876816a377f071c6a71e3a66741c6b25e7ddbd2542f2e10d72"
	},
	{
		"id": "4c2cc04b582a",
		"ts": "2026-09-21T21:39:19.438Z",
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
		"liquidityUsd": 1044452.81,
		"hash": "4c2cc04b582a13930a451dfe17a35d4ffde3434cbbb63ae2fa5af42acc7698ed"
	},
	{
		"id": "200095779393",
		"ts": "2026-09-21T21:39:19.632Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 765403.27,
		"hash": "200095779393f022c3605146144c187ff053f0637d3417121185ff8e801173da"
	},
	{
		"id": "f8ad6c9cae9f",
		"ts": "2026-09-21T21:39:19.827Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2168250.85,
		"hash": "f8ad6c9cae9f0d22b94004ec04b719a40369fc3974374b983e433bf38634fa64"
	},
	{
		"id": "b3925cc57232",
		"ts": "2026-09-21T21:39:20.019Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4727395.71,
		"hash": "b3925cc5723244e1f70efc20242577d0421fe107fa1ef5338e794451c9fb0a31"
	},
	{
		"id": "4f347862381e",
		"ts": "2026-09-21T21:39:20.216Z",
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
		"liquidityUsd": 2699676.14,
		"hash": "4f347862381efc4c00170314b1a90ac3855f38d8b0e63549fcfd042ad56adf70"
	},
	{
		"id": "2399954e4bac",
		"ts": "2026-09-21T17:47:43.540Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146260056.62,
		"hash": "2399954e4bace0a1af882ecbacfa43790ad5407cf5a9e19538d19d38c909898a"
	},
	{
		"id": "43c7a65b7380",
		"ts": "2026-09-21T17:47:43.803Z",
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
		"liquidityUsd": 13248419.36,
		"hash": "43c7a65b7380243fc77715e88a1e5ebb144b1e5ce10cff6ef1c2d51e2c001512"
	},
	{
		"id": "00dbc1f9af16",
		"ts": "2026-09-21T17:47:44.069Z",
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
		"liquidityUsd": 918062.58,
		"hash": "00dbc1f9af16f66e853cde77867c362ea831bdacd96a153c7d497375f12e429b"
	},
	{
		"id": "6afcb80741cd",
		"ts": "2026-09-21T17:47:44.335Z",
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
		"liquidityUsd": 36043112.07,
		"hash": "6afcb80741cd48553775d33722e0b341722da127576fb65e274cb425f18ab38c"
	},
	{
		"id": "016397e0d66b",
		"ts": "2026-09-21T17:47:44.597Z",
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
		"liquidityUsd": 4607411.87,
		"hash": "016397e0d66b0c4ba9627e4871ae5d6676eea43eac0da1b4eae9e1dc51d27a76"
	},
	{
		"id": "c0b7c7cb6584",
		"ts": "2026-09-21T17:47:44.857Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1334476.33,
		"hash": "c0b7c7cb6584ad7bd265b9a0fbca4d535147330c71b75aa748ac88082006c418"
	},
	{
		"id": "24a4cb8e33f7",
		"ts": "2026-09-21T17:47:45.111Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36043112.07,
		"hash": "24a4cb8e33f785ee78d89ac42f870a59d2fa8f1b427ded7a72759bd5db2763f4"
	},
	{
		"id": "c5c749ba7c93",
		"ts": "2026-09-21T17:47:45.370Z",
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
		"liquidityUsd": 1193276.27,
		"hash": "c5c749ba7c930e1213f7dc316384ae7d2f8963c396c652429282a2bcc0714c31"
	},
	{
		"id": "3162251b5203",
		"ts": "2026-09-21T17:47:45.622Z",
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
		"liquidityUsd": 18521510.97,
		"hash": "3162251b52035c24bfc71f21a186b177bd498c60b6ef4d2c9d819ba5a3370d83"
	},
	{
		"id": "b741efca1222",
		"ts": "2026-09-21T17:47:45.886Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1171816.21,
		"hash": "b741efca122230a3b51f45dfe95310498d74a6e5f89cb9c3fd6cf7962ba2d523"
	},
	{
		"id": "2bdd2d3f3d9d",
		"ts": "2026-09-21T17:47:46.126Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1678661.95,
		"hash": "2bdd2d3f3d9d7670ca3ad2ca4e67114d5033335dfd2b44a3f7b56c74db44b876"
	},
	{
		"id": "1aba02a825d2",
		"ts": "2026-09-21T17:47:46.367Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 756688.81,
		"hash": "1aba02a825d263f425c0f9d79bfe14d7774da6d84a1819b98a7d8fc6e45e1548"
	},
	{
		"id": "99d85f11d643",
		"ts": "2026-09-21T17:47:46.606Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 561189.25,
		"hash": "99d85f11d643b3cdf383000f4c9ab8ee7add2a7081a900865c82cbbb47fef4e6"
	},
	{
		"id": "86265c0dd932",
		"ts": "2026-09-21T17:47:46.847Z",
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
		"liquidityUsd": 908982.28,
		"hash": "86265c0dd932ccc271ec989b13a33dec1372c2fa60ec416159372202d2907713"
	},
	{
		"id": "756f2b9b74f8",
		"ts": "2026-09-21T17:47:47.088Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3390473.55,
		"hash": "756f2b9b74f831a3756d8bbca0ebc250c4d79c0ef9aa3bfb205b30ebc6339084"
	},
	{
		"id": "e3257f2d389f",
		"ts": "2026-09-21T17:47:47.326Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4699630.49,
		"hash": "e3257f2d389f4b1a0dc829c90761a11b51e1727066432aca193e7dbcf94940b9"
	},
	{
		"id": "e70bfe42c94e",
		"ts": "2026-09-21T17:47:47.566Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 516784.7,
		"hash": "e70bfe42c94e2fc497bd27f19cdd85e2e6b93312affd6e416644da94defa69ec"
	},
	{
		"id": "5c149acfc0aa",
		"ts": "2026-09-21T17:47:47.805Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1228169.08,
		"hash": "5c149acfc0aac9d43de5bcc2aa311987b38e1cbc46a55b928b8f016aecab41d0"
	},
	{
		"id": "e68f571e2c54",
		"ts": "2026-09-21T11:53:01.374Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128892116.38,
		"hash": "e68f571e2c54133520a069bd1b18c62a01b8395dd7e5483cce608d3754e27b7a"
	},
	{
		"id": "7890724ae1a3",
		"ts": "2026-09-21T11:53:01.858Z",
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
		"liquidityUsd": 13615427.64,
		"hash": "7890724ae1a38c2b9dda2e42185100820e557dbdcc77fdf37d0363fe5e94c6ab"
	},
	{
		"id": "b2ce34041a4d",
		"ts": "2026-09-21T11:53:02.126Z",
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
		"liquidityUsd": 902729.1,
		"hash": "b2ce34041a4dd188a77868b1151231d32f6c652e05201abb019765140b2c9b15"
	},
	{
		"id": "18fc7f42a3e6",
		"ts": "2026-09-21T11:53:02.604Z",
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
		"liquidityUsd": 36139382.32,
		"hash": "18fc7f42a3e69065c9750832b326adfa01e4ae19eab3c13e7777fdae56505c4b"
	},
	{
		"id": "dc89537cf608",
		"ts": "2026-09-21T11:53:02.856Z",
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
		"liquidityUsd": 4589831.39,
		"hash": "dc89537cf6084c6e4c18a98fb85f6ad8ca112304eff0feaaf36792151d056472"
	},
	{
		"id": "5c59a3fe8671",
		"ts": "2026-09-21T11:53:03.126Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1308282.38,
		"hash": "5c59a3fe86712f0d695ff121e997b263cb934582bf0537a011cd74f98d326859"
	},
	{
		"id": "e3719e40f365",
		"ts": "2026-09-21T11:53:03.389Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36139382.32,
		"hash": "e3719e40f365d4a112db4893bd895a3e8bbccacd5712a5268b182d449d2f41e7"
	},
	{
		"id": "e1abb5fbe157",
		"ts": "2026-09-21T11:53:03.643Z",
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
		"liquidityUsd": 1140160.25,
		"hash": "e1abb5fbe15791bc05569a1babd5159333e0e51a207a2ff4c86259a3a1e5dd96"
	},
	{
		"id": "c80cc305bb0b",
		"ts": "2026-09-21T11:53:03.956Z",
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
		"liquidityUsd": 19300970.7,
		"hash": "c80cc305bb0b6cba73d1934a515d2c93de76352448fb98230ae14bbca2da70de"
	},
	{
		"id": "55aef8d058fc",
		"ts": "2026-09-21T11:53:04.302Z",
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
		"liquidityUsd": 822253.21,
		"hash": "55aef8d058fc703453d8665f7c056eb36bb6ff55accc341b95af8d7b55a88380"
	},
	{
		"id": "a8bedbd0c991",
		"ts": "2026-09-21T11:53:04.541Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1134956.18,
		"hash": "a8bedbd0c991daa57678719accad8fe96bc5415f7cae9f90c9e85aba5d93b62a"
	},
	{
		"id": "042cc57f2165",
		"ts": "2026-09-21T11:53:04.775Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1665364.78,
		"hash": "042cc57f2165cdd0565425c6f775bf7d9784792f432a6437af951750aaf968c0"
	},
	{
		"id": "b5324f3cee31",
		"ts": "2026-09-21T11:53:05.010Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 546854.7,
		"hash": "b5324f3cee316a1da74a7a582b5f78c5899aefa9c91074a9b0fcc2e882f00d63"
	},
	{
		"id": "0009dec6540b",
		"ts": "2026-09-21T11:53:05.247Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3378731.43,
		"hash": "0009dec6540bb43652e1a6b842a438f5a1e4736091e7c2a15186d612efd33454"
	},
	{
		"id": "7b2030082132",
		"ts": "2026-09-21T11:53:05.483Z",
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
		"liquidityUsd": 1073382.5,
		"hash": "7b2030082132b62268272cdecb339abd67e7bafd980ca32b33b2520f718ba8ee"
	},
	{
		"id": "a82e77d06e8b",
		"ts": "2026-09-21T11:53:05.715Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1057453.13,
		"hash": "a82e77d06e8b8f10a32d6915032bd1f2a43212b53dd029505befbbcca92de21e"
	},
	{
		"id": "da2914d381b4",
		"ts": "2026-09-21T11:53:05.949Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1529744.38,
		"hash": "da2914d381b4ed1eac1c623825efd4fa2420778a209d3a70f9f5396a7beb51fd"
	},
	{
		"id": "feaabf03153f",
		"ts": "2026-09-21T11:53:06.184Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4772763.67,
		"hash": "feaabf03153f0161a915368577f58ec9cfb56f372b1494784577747df642ded7"
	},
	{
		"id": "bb50a6a2b989",
		"ts": "2026-09-21T05:50:52.410Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129431433.69,
		"hash": "bb50a6a2b9890509bf2527881cf7f051eabeac535c7cd9071387a803f7ce01e2"
	},
	{
		"id": "21179500a6a7",
		"ts": "2026-09-21T05:50:52.676Z",
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
		"liquidityUsd": 17172347.29,
		"hash": "21179500a6a7539f88a6950a107bce85ed49b33de9d470c31e29bb7daebbf1c6"
	},
	{
		"id": "58aea040a5f3",
		"ts": "2026-09-21T05:50:52.934Z",
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
		"liquidityUsd": 879680.18,
		"hash": "58aea040a5f396c5bbf8df303f9c431f478697efd53294abfcf3d89ff609753b"
	},
	{
		"id": "967247929a51",
		"ts": "2026-09-21T05:50:53.195Z",
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
		"liquidityUsd": 34908303.89,
		"hash": "967247929a5186c7a09ac12796fb2e228fa90a704dc665ab9010f29a111af3b6"
	},
	{
		"id": "8a3991a274fa",
		"ts": "2026-09-21T05:50:53.445Z",
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
		"liquidityUsd": 4463730.08,
		"hash": "8a3991a274fa1a0a348e3d8802a86e531970f88b7904f8bf4097421c44f95585"
	},
	{
		"id": "5be314c34c41",
		"ts": "2026-09-21T05:50:53.698Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1277154.19,
		"hash": "5be314c34c41042e6d77f95dcc49aba804d797d906ef87ebf05d85a38753bf1e"
	},
	{
		"id": "006a82252422",
		"ts": "2026-09-21T05:50:53.946Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34908302.66,
		"hash": "006a822524221f12138e2180bca56fa1f53d1f724e4de43f797264b67c7a4efb"
	},
	{
		"id": "b6e22221d032",
		"ts": "2026-09-21T05:50:54.199Z",
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
		"liquidityUsd": 1129702.13,
		"hash": "b6e22221d03209893645819a01dd3663e1c6d3b0ef7dc9a8e2076ca25ee480c4"
	},
	{
		"id": "2ef7b780cf12",
		"ts": "2026-09-21T05:50:54.454Z",
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
		"liquidityUsd": 785861.35,
		"hash": "2ef7b780cf12e4f72fd9e07daf97998358ae5d51235bfdee05926332706b67fc"
	},
	{
		"id": "e6efb3e6abe5",
		"ts": "2026-09-21T05:50:54.716Z",
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
		"liquidityUsd": 18730146.32,
		"hash": "e6efb3e6abe5a6c45ca223540b40ea87125549665f335f50a75a1065d203c18b"
	},
	{
		"id": "fa2fd00ad77f",
		"ts": "2026-09-21T05:50:54.949Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1105846.35,
		"hash": "fa2fd00ad77f05b0b49b140174241981dc91b8b23d702c042ac46a456c2c46fb"
	},
	{
		"id": "8afd8c60b9ae",
		"ts": "2026-09-21T05:50:55.187Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 547337.75,
		"hash": "8afd8c60b9ae6e9398454c7c82bbeb23d846011fdd98ef7d0fbc466e6be3f9dc"
	},
	{
		"id": "d274d7b253f0",
		"ts": "2026-09-21T05:50:55.418Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1590305.45,
		"hash": "d274d7b253f018903c164e8829b6677a2696a62acc1f7b257ef13e5dd6fe47e4"
	},
	{
		"id": "8c7ff9c76022",
		"ts": "2026-09-21T05:50:55.652Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1006725.2,
		"hash": "8c7ff9c76022c4d99e7ab230b4ac257fa3bc7535d8657338946fb09d2a0ae1f1"
	},
	{
		"id": "36d55008c6a0",
		"ts": "2026-09-21T05:50:55.888Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3268782.53,
		"hash": "36d55008c6a0264f6555ee8eaebffda8f9d7b955fca52930a1440faf06619a17"
	},
	{
		"id": "8d43294e7f8c",
		"ts": "2026-09-21T05:50:56.121Z",
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
		"liquidityUsd": 647379.56,
		"hash": "8d43294e7f8c72ed376ca636c6da6e9cc0f499cea2f184ccca50004e68054907"
	},
	{
		"id": "148fa2b06e73",
		"ts": "2026-09-21T05:50:56.355Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1461734.55,
		"hash": "148fa2b06e7343116039decbd2d4c5fb770efa49a409d1983592f030bf7ba8eb"
	},
	{
		"id": "35f3565a55a0",
		"ts": "2026-09-21T05:50:56.592Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 518376.84,
		"hash": "35f3565a55a07239ee7f7a13b666ae5712afc100acdc08f9e53dd29c3f947118"
	},
	{
		"id": "5a26d7690c87",
		"ts": "2026-09-21T00:49:42.388Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129776491.71,
		"hash": "5a26d7690c870c18dd82757cd85e1319d73aea43c19b1a3d8dbe5a0e23077c45"
	},
	{
		"id": "3fb1c371c518",
		"ts": "2026-09-21T00:49:42.842Z",
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
		"liquidityUsd": 12692393.93,
		"hash": "3fb1c371c5186279fd4d9362aaf15b937d4bcd3fbecd9a47b132a053115a37f4"
	},
	{
		"id": "1dcafbc52c0e",
		"ts": "2026-09-21T00:49:43.135Z",
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
		"liquidityUsd": 886553.85,
		"hash": "1dcafbc52c0e7170476a4edf50ae276297281ea18003af27b8173dcd92c22614"
	},
	{
		"id": "2d01eb41764b",
		"ts": "2026-09-21T00:49:43.382Z",
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
		"liquidityUsd": 35284991.46,
		"hash": "2d01eb41764bec37a44f33449e20177a84b1c07af95aea025c5c0588290cc4d6"
	},
	{
		"id": "d98a1317c205",
		"ts": "2026-09-21T00:49:43.634Z",
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
		"liquidityUsd": 4505035.18,
		"hash": "d98a1317c2058a403f47fee3bbe0c7fa7ba4276ffda70b40381be808f94aa85f"
	},
	{
		"id": "691c593ee205",
		"ts": "2026-09-21T00:49:43.882Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1284341.62,
		"hash": "691c593ee205f88020e5f1e761a74beb4f9a16f25a8dfd89384d1b28bf48a21e"
	},
	{
		"id": "d221d1ea9099",
		"ts": "2026-09-21T00:49:44.127Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1627935.68,
		"hash": "d221d1ea9099e3e66522cca95464ab92e4d915a11e0cc59bb8940659275211cb"
	},
	{
		"id": "0bd46905aa08",
		"ts": "2026-09-21T00:49:44.386Z",
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
		"liquidityUsd": 1143895.37,
		"hash": "0bd46905aa081cfeefb66dec8bca480d7b16bf729dc30ac6f5cef3ca058c1708"
	},
	{
		"id": "9330f6d44001",
		"ts": "2026-09-21T00:49:44.642Z",
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
		"liquidityUsd": 804036.87,
		"hash": "9330f6d4400177d8995b9a574c11db636cd905507804c36510603adf4f912e88"
	},
	{
		"id": "b4e58ee62b93",
		"ts": "2026-09-21T00:49:44.892Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 566783.97,
		"hash": "b4e58ee62b934008fef66308453206808bfb0c4929cdb9b2c997ea2d8e657762"
	},
	{
		"id": "edc4844563cd",
		"ts": "2026-09-21T00:49:45.122Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1562593.03,
		"hash": "edc4844563cd05a605f7617a935b176aec346a5a885013a6c5e3c414d00720ab"
	},
	{
		"id": "7fa41926c962",
		"ts": "2026-09-21T00:49:45.354Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18056241.86,
		"hash": "7fa41926c962b6b6d733b4cb98750c54d976eca5bc645d8f949a8411abb80f76"
	},
	{
		"id": "3458d933f290",
		"ts": "2026-09-21T00:49:45.581Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1146177.67,
		"hash": "3458d933f290875f699474b178c0ffdf4dc41e9d487a8c1c308b17caf1c57e31"
	},
	{
		"id": "9c33074d97f5",
		"ts": "2026-09-21T00:49:45.811Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1127715.13,
		"hash": "9c33074d97f534cb145d8993e62dec13787dafb958fd961423ddd6bd343408a7"
	},
	{
		"id": "2b16270c52c5",
		"ts": "2026-09-21T00:49:46.042Z",
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
		"liquidityUsd": 651931.74,
		"hash": "2b16270c52c5801faa2e63c97c6181086138e1ae45db8bddc679bb891525feb9"
	},
	{
		"id": "aeea36f09863",
		"ts": "2026-09-21T00:49:46.274Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3266035.7,
		"hash": "aeea36f098634aa6f938260852bede183591a57d105a533b9fefaf4858fab61c"
	}
]
