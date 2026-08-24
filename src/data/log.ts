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
	"updatedAt": "2026-08-24T19:25:41.619Z",
	"tokensScored": 14513,
	"verdictsIssued": 14513,
	"safe": 12422,
	"risky": 1061,
	"likelyRug": 1030,
	"ticks": 840
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "37c6ce9918a8",
		"ts": "2026-08-24T19:25:36.923Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112955334.26,
		"hash": "37c6ce9918a80c6f0bb2a2322cb28f5a245cb7a01746ffd5b68d2674aab83077"
	},
	{
		"id": "50c0d6770e1f",
		"ts": "2026-08-24T19:25:37.339Z",
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
		"liquidityUsd": 16273263.33,
		"hash": "50c0d6770e1f89536cabb7d1cf3173c396a8ca151fe1062ec20b83c435b34049"
	},
	{
		"id": "a6898d645717",
		"ts": "2026-08-24T19:25:37.592Z",
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
		"liquidityUsd": 939359.05,
		"hash": "a6898d645717b7484480a2c3dbfbbd559b38c47af80fa73d3bf8290a1b8c1e21"
	},
	{
		"id": "d752afe16a13",
		"ts": "2026-08-24T19:25:37.987Z",
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
		"liquidityUsd": 30076365.6,
		"hash": "d752afe16a13989ad92925b39e41209f084376a8bd1765f48f12a17a03f2912c"
	},
	{
		"id": "8ab593547a94",
		"ts": "2026-08-24T19:25:38.214Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "8ab593547a9463e65af0a376faaf83896b025fb6cbcb0f20140f65f77d0ab2b4"
	},
	{
		"id": "0c41e3ddf518",
		"ts": "2026-08-24T19:25:38.458Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1176219.3,
		"hash": "0c41e3ddf518b305b5a7837d8163b58392982a0c09df06168c98d821c14348e4"
	},
	{
		"id": "a16dd7364c9d",
		"ts": "2026-08-24T19:25:38.681Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2559285.21,
		"hash": "a16dd7364c9deaf825eaebc00e878945185a410aad08735ed4eca0fc5235df06"
	},
	{
		"id": "be0d8412393e",
		"ts": "2026-08-24T19:25:38.929Z",
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
		"liquidityUsd": 1911401.09,
		"hash": "be0d8412393ea3801af45415db4c088ca9607ecf69a1d2996a65d0e7ddbff488"
	},
	{
		"id": "bf28e01341e2",
		"ts": "2026-08-24T19:25:39.173Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "bf28e01341e2c759e33949b7f182c405908fea436ac455cb8a12edbe471927d8"
	},
	{
		"id": "c3b577edd43c",
		"ts": "2026-08-24T19:25:39.652Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "c3b577edd43cbc041f873577185a9b27cfde680400a89bc1fc9fec27b432f4b7"
	},
	{
		"id": "36d85638b26e",
		"ts": "2026-08-24T19:25:39.869Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2557941.88,
		"hash": "36d85638b26e9030faa9ba5ae59c9318c1e7e76c67b6bfde31200760f2dbc837"
	},
	{
		"id": "59cc49c1af69",
		"ts": "2026-08-24T19:25:40.079Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97885.78,
		"hash": "59cc49c1af69382b70b02cd9b006e6779a90bcacfb5148fe5a7accbf7fa15993"
	},
	{
		"id": "640655ae9870",
		"ts": "2026-08-24T19:25:40.312Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "640655ae9870822899a8e3d8fffdc7c105a13259e98061d2d019dd3ccc2cbf27"
	},
	{
		"id": "59b7f94ba1e9",
		"ts": "2026-08-24T19:25:40.534Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 959727.31,
		"hash": "59b7f94ba1e909492249b4268fa91ec3c8d345ca5b452b6a9afa4d6600bd0541"
	},
	{
		"id": "e2a49d5df957",
		"ts": "2026-08-24T19:25:40.750Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 528208.24,
		"hash": "e2a49d5df95779b23a411563381eb66ec277f01900959d7acccb01e80434fa53"
	},
	{
		"id": "a13ed3cad00d",
		"ts": "2026-08-24T19:25:40.967Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 385795.21,
		"hash": "a13ed3cad00de510d7a340cda70129e4e6d7c5ab73ee18398cc91797ead8e245"
	},
	{
		"id": "a63f0d4559b4",
		"ts": "2026-08-24T19:25:41.175Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3033700.3,
		"hash": "a63f0d4559b48eb503ba0451a8972b2f6c8d73bf0842a189994bdfeeb3aca533"
	},
	{
		"id": "e889d3d5836b",
		"ts": "2026-08-24T19:25:41.400Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1874126.69,
		"hash": "e889d3d5836be59124c7a1adaf5a2903b976fb0c278b1f39eefbadf4364dc344"
	},
	{
		"id": "265559ab3baf",
		"ts": "2026-08-24T19:25:41.618Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 285321.93,
		"hash": "265559ab3baff5020fa5ca2b74fa67aee73fd301bcdff403fb2113187c9f0833"
	},
	{
		"id": "c1d6d572e5b4",
		"ts": "2026-08-24T18:34:08.935Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113013906.1,
		"hash": "c1d6d572e5b4d3f5a3cf601b4aac00414743205b8c1f4d00da1270273c0d4a87"
	},
	{
		"id": "624874123d74",
		"ts": "2026-08-24T18:34:09.206Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "624874123d745ac5abebfe88109338455085d691df27c2997943881af38bfdf3"
	},
	{
		"id": "dbaff9221e37",
		"ts": "2026-08-24T18:34:09.470Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "dbaff9221e37c85c16e02da491b8ffb7e54af08c4208ceb4c3702393ffc126aa"
	},
	{
		"id": "4aba018a7c6d",
		"ts": "2026-08-24T18:34:09.717Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "4aba018a7c6dae2c7d05fdbf5300f4d67aaf6ddf79a359de6896153a5707d545"
	},
	{
		"id": "fc6070b16117",
		"ts": "2026-08-24T18:34:10.336Z",
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
		"liquidityUsd": 4803299.21,
		"hash": "fc6070b1611724b0684ed52bd7bbb2fb67d261befabe4ef10cf070b4569acbe0"
	},
	{
		"id": "5eed570830a8",
		"ts": "2026-08-24T18:34:10.588Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180055.21,
		"hash": "5eed570830a8c4aeca1413d92a93bd2623a476fd989b54ea1a0e7cd1c632c280"
	},
	{
		"id": "6644304da1ef",
		"ts": "2026-08-24T18:34:10.852Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2550829.94,
		"hash": "6644304da1ef648d0381c4f15174204adfbf7e78bcd0b3bec457e0614b8e8a62"
	},
	{
		"id": "3eb91d4f4c26",
		"ts": "2026-08-24T18:34:11.092Z",
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
		"liquidityUsd": 1899434.84,
		"hash": "3eb91d4f4c26cb68b094f804d80ebc4a9efa8a4ae1ae3b20d00865264fdd3373"
	},
	{
		"id": "d38a59b2be2f",
		"ts": "2026-08-24T18:34:11.343Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1441910.07,
		"hash": "d38a59b2be2fbe275a02744e6723508b2604f5f1b8674f2a64c8733636e0a251"
	},
	{
		"id": "db2028e96eb1",
		"ts": "2026-08-24T18:34:11.786Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 868898.69,
		"hash": "db2028e96eb1c23fc70375d9831c868a119c644f565576d2e0736feb33354e98"
	},
	{
		"id": "657ff55a56e2",
		"ts": "2026-08-24T18:34:12.007Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2555281.1,
		"hash": "657ff55a56e2f427b75c1584b4fa32107deb8566677097ef6031f548e2f3ae06"
	},
	{
		"id": "4f5a3f2f210d",
		"ts": "2026-08-24T18:34:12.344Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 102326.55,
		"hash": "4f5a3f2f210d90028a002b2b3115018baf8575d6e6e8d3c72e02954f976c320e"
	},
	{
		"id": "8b1482bf7fed",
		"ts": "2026-08-24T18:34:12.565Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 582946.82,
		"hash": "8b1482bf7fed5dad600e78466b38a1891e1f556aa01eb7acd4d02c0468c33a3a"
	},
	{
		"id": "7e2b4f524ffa",
		"ts": "2026-08-24T18:34:12.798Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544923.69,
		"hash": "7e2b4f524ffa258a42890d8d4b22acdda2715f8cde9d7bfc717515655899f101"
	},
	{
		"id": "e99d97c79635",
		"ts": "2026-08-24T18:34:13.025Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "e99d97c79635a9833b22686a7f618da49478d0be2c6ed6bf8c7f571c017a7603"
	},
	{
		"id": "707e7561c659",
		"ts": "2026-08-24T18:34:13.247Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 389047.64,
		"hash": "707e7561c6591b9c9ca06adbc7339d58a5dd09ddba797458387e7aa2342c80bb"
	},
	{
		"id": "e395f2895f04",
		"ts": "2026-08-24T18:34:13.481Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3078302.06,
		"hash": "e395f2895f04084fc5496a4b91f5bc160fd27c99c52571fe64d98fa98fce6039"
	},
	{
		"id": "c45617bbf1e8",
		"ts": "2026-08-24T18:34:13.703Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1896024.5,
		"hash": "c45617bbf1e88cd00e0828dead07f8922259bb2972562bc141401d3d60962d97"
	},
	{
		"id": "a35a2fb6e0c0",
		"ts": "2026-08-24T18:34:13.924Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 126212.74,
		"hash": "a35a2fb6e0c0c8ec6047be6cfc9f67ed51af3ac01cb8d8ba59e07289bddb9e06"
	},
	{
		"id": "adb935ca619b",
		"ts": "2026-08-24T17:26:54.176Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "adb935ca619b187889c3b0e9f8440d2165b221e338ae7f4ac8264dea126ab974"
	},
	{
		"id": "11123cf9ea1f",
		"ts": "2026-08-24T17:26:54.679Z",
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
		"liquidityUsd": 14274232.16,
		"hash": "11123cf9ea1f2cd64962fd61bb2fcd5bd490c2337b7ff825977a27273e29bca3"
	},
	{
		"id": "6d33c9558de6",
		"ts": "2026-08-24T17:26:54.966Z",
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
		"liquidityUsd": 930653.33,
		"hash": "6d33c9558de648e76a63b7e31c1027163051f215fd3e0e19b7987bd103ab9482"
	},
	{
		"id": "39fd136501c4",
		"ts": "2026-08-24T17:26:55.238Z",
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
		"liquidityUsd": 30127648.07,
		"hash": "39fd136501c43a1629572cb4943cf662ffacf87aa94c0d932595ef264d51f11e"
	},
	{
		"id": "4536bc178c13",
		"ts": "2026-08-24T17:26:55.622Z",
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
		"liquidityUsd": 4775379.61,
		"hash": "4536bc178c13f11be1d9ae713074409bbb8368ad53a9667ab8b6e11c3e7d7087"
	},
	{
		"id": "0b03d19f6fd5",
		"ts": "2026-08-24T17:26:55.900Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180874.53,
		"hash": "0b03d19f6fd5067f79fd0f6a1cf8f613de642e69e6633886ffddfbcc40279ee4"
	},
	{
		"id": "c4bc06d00c8b",
		"ts": "2026-08-24T17:26:56.177Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2800561.05,
		"hash": "c4bc06d00c8b3acf9fdeefe2c2c7ba9ce7d5d4a0283bbf7f7a8dee59dac200d2"
	},
	{
		"id": "3653ccb4f220",
		"ts": "2026-08-24T17:26:56.454Z",
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
		"liquidityUsd": 1882407.03,
		"hash": "3653ccb4f2204b5b65ce4bf4a50d81e5a2e1aa206ee8f66a5f03906bb021abac"
	},
	{
		"id": "19c4ba789dc2",
		"ts": "2026-08-24T17:26:56.926Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 811494.3,
		"hash": "19c4ba789dc2025f659c9d8303ba2880d74bd76f933b206f1f62fa5860661382"
	},
	{
		"id": "58b6039997f0",
		"ts": "2026-08-24T17:26:57.201Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1418616.73,
		"hash": "58b6039997f0c015308a49681ba0954d2efa919ed04e02a3f5c6b1da3e06774e"
	},
	{
		"id": "4f033c05067a",
		"ts": "2026-08-24T17:26:57.475Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2800561.05,
		"hash": "4f033c05067aa0a630593f6b137b8ac909b318426861a787310668eeeb4e5df8"
	},
	{
		"id": "6875126c1b1b",
		"ts": "2026-08-24T17:26:57.727Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100294.69,
		"hash": "6875126c1b1b2faff0c2a22e255bc8b1f6201dec60dd6ec7c93079a912efb088"
	},
	{
		"id": "e8af8eeca147",
		"ts": "2026-08-24T17:26:57.982Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 559868.18,
		"hash": "e8af8eeca147c8743b30720d6d27762a94f7d6cdf87838311d02463cd0b7e814"
	},
	{
		"id": "4df426f358a6",
		"ts": "2026-08-24T17:26:58.238Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 598786.72,
		"hash": "4df426f358a641ce4dcb43a530d32e95140220f72d56ca6d7667f4d522010167"
	},
	{
		"id": "52e7eed214fa",
		"ts": "2026-08-24T17:26:58.493Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 904718.99,
		"hash": "52e7eed214fab7bbb785d1b8898601f2d4a3f15801f7d6e8eeca230708c803c1"
	},
	{
		"id": "288268fe93f4",
		"ts": "2026-08-24T17:26:58.750Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 393182.52,
		"hash": "288268fe93f4c04b470f8b508c664c4431d9274c18bb21973d0de68fb9424994"
	},
	{
		"id": "7c5c0a58b5c6",
		"ts": "2026-08-24T17:26:59.007Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3092204.93,
		"hash": "7c5c0a58b5c650378fd34e645ced48883107bdbc82955e778789ea8e8f76c3db"
	},
	{
		"id": "2e43bf9dc287",
		"ts": "2026-08-24T17:26:59.271Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4261892.64,
		"hash": "2e43bf9dc287a77af1f11fd6401d7a097d7fe4b4947e01c5da91e177fda19b85"
	},
	{
		"id": "e31b66704e70",
		"ts": "2026-08-24T17:26:59.524Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 118708.61,
		"hash": "e31b66704e7023c21cdf8dd65038d2fb99884dcb1b2ce395d8204b32c690b8c3"
	},
	{
		"id": "8290527981a7",
		"ts": "2026-08-24T16:32:11.626Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113088336.62,
		"hash": "8290527981a7713e82802a3c0ac7ecede24495aed19102ccf8059a96b8cb672a"
	},
	{
		"id": "48c17e3c0941",
		"ts": "2026-08-24T16:32:12.063Z",
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
		"liquidityUsd": 16763651.34,
		"hash": "48c17e3c0941490035abe28e68df6eec523fe34bc6a2e5ac4289da31f484ec8e"
	},
	{
		"id": "362db9b52953",
		"ts": "2026-08-24T16:32:12.466Z",
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
		"liquidityUsd": 944991.29,
		"hash": "362db9b529535a41105a1c5713a161e82f7c3f88cf49766328a9be3023d7b9ea"
	},
	{
		"id": "1a4bb204b2d5",
		"ts": "2026-08-24T16:32:12.722Z",
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
		"liquidityUsd": 30434939.47,
		"hash": "1a4bb204b2d502e0c2423aba9fa96b6bb1dddc16e4b85412cfbeec4e5d3a52f8"
	},
	{
		"id": "b19266f7d8f7",
		"ts": "2026-08-24T16:32:13.231Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "b19266f7d8f7bda839d58479841b246405ab61a8d2cdf2a45cf0f0fa046efeae"
	},
	{
		"id": "316a0339b3b8",
		"ts": "2026-08-24T16:32:14.690Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"no_dex_pair",
			"modifiable_tax"
		],
		"liquidityUsd": 0,
		"hash": "316a0339b3b81fb042ae5bacb0248c780742be035046c9d19008bc97cbeeca16"
	},
	{
		"id": "071e32d12694",
		"ts": "2026-08-24T16:32:14.940Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "071e32d12694c9b25858ead8c963ecec3bfcd2e66d525745bcf3fb8a2cc78c3f"
	},
	{
		"id": "4975b1275e58",
		"ts": "2026-08-24T16:32:15.183Z",
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
		"liquidityUsd": 1921660.8,
		"hash": "4975b1275e58eb4d2cf785fff6fb3ed02558aeccc4fb40e5598fd11098646960"
	},
	{
		"id": "77069e194d0b",
		"ts": "2026-08-24T16:32:15.616Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 823911.66,
		"hash": "77069e194d0b9c58c9e2053b204057a382e817c677f72cba246fee4d8e9ab917"
	},
	{
		"id": "df20950a6f2e",
		"ts": "2026-08-24T16:32:15.848Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "df20950a6f2ea661d81ef698a4f02236c68278e3448fc827389d034e3eecb84e"
	},
	{
		"id": "dbfe66014296",
		"ts": "2026-08-24T16:32:16.061Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2885205.31,
		"hash": "dbfe66014296756573ba354e9adeaf24a0fb698bd0430612cd462f6ee1819522"
	},
	{
		"id": "5270cfca5379",
		"ts": "2026-08-24T16:32:16.294Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 590014.93,
		"hash": "5270cfca5379faa802dc3e2a153baebe438ea7ed7cb4cbc4ec0bafc9c50e28bc"
	},
	{
		"id": "9d7d63b3df6a",
		"ts": "2026-08-24T16:32:16.521Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 96269.73,
		"hash": "9d7d63b3df6a38c77af74a7f251c2367e750b8c7144c9acab6c7b679805f72bf"
	},
	{
		"id": "f629b2ce7c8c",
		"ts": "2026-08-24T16:32:16.751Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 593738.05,
		"hash": "f629b2ce7c8c13b957c160699c87c121e3213a14ff9d9d30c84b53c2c7ea3292"
	},
	{
		"id": "a0a7d9abe666",
		"ts": "2026-08-24T16:32:16.980Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 902438.29,
		"hash": "a0a7d9abe666029f672e9ad4d6a4120c895d957430694dc868408607ac65e989"
	},
	{
		"id": "c801715289f4",
		"ts": "2026-08-24T16:32:17.213Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3265870.56,
		"hash": "c801715289f4e872e1bd79063f25540477378d69bbc80a852271908aa1b73820"
	},
	{
		"id": "e09b966af428",
		"ts": "2026-08-24T16:32:17.443Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "e09b966af428182527c3d8820146a85bb6a4f2c7e317e406d5afcdafe22727bd"
	},
	{
		"id": "9a7f4f1f65a1",
		"ts": "2026-08-24T16:32:17.664Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 123955.74,
		"hash": "9a7f4f1f65a105b16b9714959f899bc46f2507355b78d6c3f0d396f308bd4e24"
	},
	{
		"id": "26d200650f14",
		"ts": "2026-08-24T16:32:17.866Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 275303.35,
		"hash": "26d200650f149684b63aff8cd716c590cc6a09e4bf4ae1078bbe90956e375745"
	},
	{
		"id": "eb9e03da50f4",
		"ts": "2026-08-24T15:35:02.257Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113102510.62,
		"hash": "eb9e03da50f4fb641d6c7387c73225b8b937a01b96e9719fd6c0046943ada41d"
	},
	{
		"id": "521cf1d29b3f",
		"ts": "2026-08-24T15:35:02.498Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "521cf1d29b3f95802544cd4ba3c53860939ba7726505989bc286217132098623"
	},
	{
		"id": "3b569f815bd6",
		"ts": "2026-08-24T15:35:02.736Z",
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
		"liquidityUsd": 946146.96,
		"hash": "3b569f815bd62e85e32ddd9512636b78cf0e3820bd8082792ca5b5f7d6587b67"
	},
	{
		"id": "731eb8bf7ee1",
		"ts": "2026-08-24T15:35:02.983Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "731eb8bf7ee1bae54afb6e96c108fdb94919175372a37311aa8bcb17ae85079a"
	},
	{
		"id": "7e77315e181d",
		"ts": "2026-08-24T15:35:03.226Z",
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
		"liquidityUsd": 4968533.48,
		"hash": "7e77315e181dac14eae097d6d57939fce58b3051fe9d56d6013f9fb40e0551da"
	},
	{
		"id": "b09022fb5b57",
		"ts": "2026-08-24T15:35:03.477Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1207752.34,
		"hash": "b09022fb5b57bc4ae79e728cb2252c0bf7673081c327bac910177cf167887adc"
	},
	{
		"id": "926641225916",
		"ts": "2026-08-24T15:35:03.712Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2966154.64,
		"hash": "926641225916c0cf82110a367e859fe1bb5548be19d30644ef3f0dc55dc2a09d"
	},
	{
		"id": "5cf47e4f8ece",
		"ts": "2026-08-24T15:35:03.990Z",
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
		"liquidityUsd": 1936912.98,
		"hash": "5cf47e4f8ecea19bef1282fb178bcbaffa7e353c7f3ff7c13572d16dce51d221"
	},
	{
		"id": "32d7ea124490",
		"ts": "2026-08-24T15:35:04.252Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 929822.39,
		"hash": "32d7ea1244901ea47fce99baf7de7d0475c4e641d5f719b482444601a4d04252"
	},
	{
		"id": "c51e044ae9c1",
		"ts": "2026-08-24T15:35:04.752Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "c51e044ae9c160f8675b421149a701604332331cf5db8fb5c78265483f115a6c"
	},
	{
		"id": "3af020c87985",
		"ts": "2026-08-24T15:35:04.986Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "3af020c87985533dd71b2bd1c3e78e562cfae42fbfac26093f03130a14899cc3"
	},
	{
		"id": "924c807d04d7",
		"ts": "2026-08-24T15:35:05.275Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2962036.22,
		"hash": "924c807d04d7ad9db5b33f292f5b2983e572b350a96cebdb5d8376270fd21c37"
	},
	{
		"id": "ff095dd7c001",
		"ts": "2026-08-24T15:35:05.506Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "ff095dd7c001b599a662dea0585bab5bbe6423a401c6dc2ddf4ad4019b801094"
	},
	{
		"id": "8acfd5d18005",
		"ts": "2026-08-24T15:35:05.725Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "8acfd5d1800570bbf92dd5a51347cfcc3d537ba8a38738ddfb04ac25cc0ed99f"
	},
	{
		"id": "aadbf83e6072",
		"ts": "2026-08-24T15:35:05.943Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 964033.88,
		"hash": "aadbf83e607239e5a0919ed1a94cba8cb756c892e17539f2e45ff196316bceae"
	},
	{
		"id": "045941ebd185",
		"ts": "2026-08-24T15:35:06.160Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3314614.81,
		"hash": "045941ebd18548ed016f50be7071c35b812f2d06f3f6379bdc970723cfafa258"
	},
	{
		"id": "1f55750bb047",
		"ts": "2026-08-24T15:35:06.379Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 409965.73,
		"hash": "1f55750bb0475b98cd28c57d87eb1b156dd26c3ea20d3251c5c1f771c6d50016"
	},
	{
		"id": "cbcb220aba84",
		"ts": "2026-08-24T15:35:06.595Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "cbcb220aba849b1eaa688bd6dca5cf003bd15062283b45460569c6891e1e8ca3"
	},
	{
		"id": "ee505d2c31f5",
		"ts": "2026-08-24T15:35:06.813Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 283233.97,
		"hash": "ee505d2c31f5336c5e2dbaefb44a2cf5ae5e67eac089fb2bcc76297ae6035114"
	},
	{
		"id": "d889b6b25eca",
		"ts": "2026-08-24T14:37:18.580Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113612884.67,
		"hash": "d889b6b25eca60e5ebeabc7dd86c252712c21832978c01d28ce84109a250992a"
	},
	{
		"id": "76626f02e01b",
		"ts": "2026-08-24T14:37:18.827Z",
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
		"liquidityUsd": 17423524.25,
		"hash": "76626f02e01b7eb73ad27fcd9111c7edb6b3403a1327109b72f24e671db333b7"
	},
	{
		"id": "9a47e0263a4a",
		"ts": "2026-08-24T14:37:19.069Z",
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
		"liquidityUsd": 930786.77,
		"hash": "9a47e0263a4a46f33197cbdea27aa78dc35c826503e9e9a4edf7cc88e8f3080e"
	},
	{
		"id": "88a590ccc46e",
		"ts": "2026-08-24T14:37:19.320Z",
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
		"liquidityUsd": 30352616.66,
		"hash": "88a590ccc46e9980fd9206318ae082d517e73046f97847a3528200b9a0e75fa5"
	},
	{
		"id": "3288f1b3f461",
		"ts": "2026-08-24T14:37:19.600Z",
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
		"liquidityUsd": 3642936.52,
		"hash": "3288f1b3f4618b92304403ed1bf65e48a1db85d08a6bc528c85129075ac6eded"
	},
	{
		"id": "6cc31d11a711",
		"ts": "2026-08-24T14:37:19.872Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1190677.93,
		"hash": "6cc31d11a711712cb3d452ff1d32d987eca85ddef9a38386394ae7ab9a2f3e65"
	},
	{
		"id": "edf4f7c37be4",
		"ts": "2026-08-24T14:37:20.105Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152798.3,
		"hash": "edf4f7c37be46c0caa5fb3b86df5568b1818c6117ba5f1ab29369fb73572da4a"
	},
	{
		"id": "df98dbb9d914",
		"ts": "2026-08-24T14:37:20.373Z",
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
		"liquidityUsd": 1939541.91,
		"hash": "df98dbb9d914de7e07d5ddb1c153603d9abf1f75d55a7f8a03cc46cd31545134"
	},
	{
		"id": "9a4abaf3d184",
		"ts": "2026-08-24T14:37:20.673Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 891066.22,
		"hash": "9a4abaf3d18469a68515462c09359a26e729fc3fec2b01936ef6574b53b311c0"
	},
	{
		"id": "114ff9ece417",
		"ts": "2026-08-24T14:37:20.931Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1436927.75,
		"hash": "114ff9ece4176d8738802e0983927cf5a0b8d180064b9bdc2ca2c18b0c44c930"
	},
	{
		"id": "12e9acdbd497",
		"ts": "2026-08-24T14:37:21.151Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 609894.9,
		"hash": "12e9acdbd497015391b9162061cb6a79043706339c0e6abac0adcfed8e6ee34e"
	},
	{
		"id": "288d194efd85",
		"ts": "2026-08-24T14:37:21.390Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2854122.76,
		"hash": "288d194efd85aec93e165605306ce551e332f44e1e02161ce84f57b8b611eddc"
	},
	{
		"id": "1aac977b346f",
		"ts": "2026-08-24T14:37:21.637Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 625604.59,
		"hash": "1aac977b346f37669c86e9065c01f7eabfd86ea2d1072943a8482b516e8ec2fd"
	},
	{
		"id": "dc67ecbcd539",
		"ts": "2026-08-24T14:37:21.877Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 124260.31,
		"hash": "dc67ecbcd539f8beeb53eedce71081ea1eaa5ed61eca57e5922d947ed537c7fd"
	},
	{
		"id": "c181803573d0",
		"ts": "2026-08-24T14:37:22.102Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 408678.65,
		"hash": "c181803573d0e6c1a8e20d360c8e6bb128dd6b89b01d78d4267d196fd10a9c23"
	},
	{
		"id": "62eb00557e36",
		"ts": "2026-08-24T14:37:22.349Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 133877.54,
		"hash": "62eb00557e36e324238f85a5f63c6bff676301c975da68dbd3b2e226072b5d1d"
	},
	{
		"id": "ab46136ee42f",
		"ts": "2026-08-24T14:37:22.582Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3141080.97,
		"hash": "ab46136ee42fc58a29d8f27ca1d57b218b68c4f9428d89ff1ba18f125d170919"
	},
	{
		"id": "3ee547b60bea",
		"ts": "2026-08-24T14:37:22.801Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272772.11,
		"hash": "3ee547b60bea926a999128f495b810f3cfbcb6caa201f6562665df08912edeaf"
	},
	{
		"id": "0f9374f7a4d7",
		"ts": "2026-08-24T14:37:23.017Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 893518.86,
		"hash": "0f9374f7a4d764bb0d9947b3f9886bee8cb04faf946f7022b41a21a156875dd9"
	},
	{
		"id": "d3000d97ceea",
		"ts": "2026-08-24T14:37:23.252Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4401050.46,
		"hash": "d3000d97ceead72350150ba1f5fadeac58f2e894236127b682546bbe0a3a1bcb"
	},
	{
		"id": "7b74d2c50052",
		"ts": "2026-08-24T13:47:46.321Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "7b74d2c50052a49051b39a963a1a7d6f2828c635a98ffbfafb976a3c69bebb74"
	},
	{
		"id": "e44f54ea327e",
		"ts": "2026-08-24T13:48:05.095Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "e44f54ea327e09c01e3957234e280a694e389853e119a934413f459e5543242e"
	},
	{
		"id": "93c307efa958",
		"ts": "2026-08-24T13:48:23.763Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "93c307efa9589421a9e4cba94dbbfdb0d992fa0383cea90f1d952afd213c1a8e"
	},
	{
		"id": "4a58d14c1de5",
		"ts": "2026-08-24T13:48:42.498Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "4a58d14c1de51af36b7c1fc9749015830c06f63e34c2c52d9d93f860a070368a"
	},
	{
		"id": "29fe14c7a6b1",
		"ts": "2026-08-24T13:48:42.719Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "29fe14c7a6b148860039d53c6222bcbe398f3626269c3642d110658fc5316682"
	},
	{
		"id": "4fb17263a576",
		"ts": "2026-08-24T13:48:42.932Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"no_dex_pair",
			"modifiable_tax"
		],
		"liquidityUsd": 0,
		"hash": "4fb17263a57654c1f44e60fedf465707d2b7a1fb96795ac4aced4b17d1799040"
	},
	{
		"id": "06b29f4da608",
		"ts": "2026-08-24T13:48:43.146Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "06b29f4da608528f24a55806f4593eecebcd0210d6818a71209fff4e09473e2b"
	},
	{
		"id": "b99af1a0fb51",
		"ts": "2026-08-24T13:48:43.348Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "b99af1a0fb519db904aeb0e55452c4d3a5a683f0cbfd07a7d8293ede97dee4e5"
	},
	{
		"id": "a7384e9e5d0a",
		"ts": "2026-08-24T13:48:43.681Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "a7384e9e5d0a720b45be7c3cf9ff49790258268faeb679babfc0d84f606b3edd"
	},
	{
		"id": "e27bf526ba34",
		"ts": "2026-08-24T13:48:43.883Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "e27bf526ba3445d5d828522d92795451ab2174739b48610d93a88d2499774e39"
	},
	{
		"id": "ec84f007642f",
		"ts": "2026-08-24T13:48:44.093Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "ec84f007642fafd83aa87508d574f9de65e093e8f0554b88cd77216cbdfa8562"
	},
	{
		"id": "c1437d6ea6fe",
		"ts": "2026-08-24T13:48:44.295Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "c1437d6ea6fe830811aaadf830415d11e6e64d61664a844143f4fb04b4e6b05a"
	},
	{
		"id": "3e660edfd840",
		"ts": "2026-08-24T13:48:44.500Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "3e660edfd84050f461fbed5469b3a2a037313d03cc7260429267e1a590ca2b14"
	},
	{
		"id": "46d096386329",
		"ts": "2026-08-24T13:48:44.704Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "46d09638632959b2084cbba34e184969ae67b866e288c1b3fa05c3d1a2b93e40"
	},
	{
		"id": "9d86c9e7fa81",
		"ts": "2026-08-24T13:48:44.921Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "9d86c9e7fa817c7af787d8f7365e071d2d69642d7ba479e1231724406001b6ba"
	},
	{
		"id": "8b9b6453458b",
		"ts": "2026-08-24T13:48:45.123Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "8b9b6453458b2736de0042d1e37f56686c531013e1def8e1ce7c5f5ff03c3344"
	},
	{
		"id": "d147e6568cd3",
		"ts": "2026-08-24T13:48:45.320Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "d147e6568cd316c9473afc60c1a3087f8f10f885beef6aa69f8ca04c8223a649"
	},
	{
		"id": "75ddc57dfb91",
		"ts": "2026-08-24T13:48:45.537Z",
		"symbol": "GAME",
		"token": "0x1C4CcA7C5DB003824208aDDA61Bd749e55F463a3",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "75ddc57dfb9104109d47c44452d30285cb78625f4937c5cba0dcee1e76457541"
	},
	{
		"id": "f1396c2c3c18",
		"ts": "2026-08-24T13:48:45.748Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "f1396c2c3c180377185c2666db55154abf8a697f8ee377d61192a1dc0a66be6e"
	},
	{
		"id": "00e98f0b9ce3",
		"ts": "2026-08-24T13:48:45.961Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "00e98f0b9ce363cea2c77ead07757905972ca7b73d72af445444a7fa02acf881"
	},
	{
		"id": "acb668029def",
		"ts": "2026-08-24T12:41:10.144Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "acb668029def37db2b96f8d09770d72cac6daa065a5fbe7f1142c7c31b96a411"
	},
	{
		"id": "a2a7bddd1268",
		"ts": "2026-08-24T12:41:28.828Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "a2a7bddd1268f15f98b4c306a124582dba58b2de252c753b085646054a241312"
	},
	{
		"id": "5802b8f34664",
		"ts": "2026-08-24T12:41:47.537Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "5802b8f346647ae8e6b1aeeea546b453fcce3acba1d12f1bea696e7452f91d83"
	},
	{
		"id": "d072bcc91e86",
		"ts": "2026-08-24T12:42:06.249Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 48,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.04,
		"flags": [
			"no_dex_pair",
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "d072bcc91e86cc1893c646ea3f29f28f7cdf2a5819ceec516fa886e046384893"
	},
	{
		"id": "17e906e7b3de",
		"ts": "2026-08-24T12:42:06.563Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "17e906e7b3de4d01b020ebc29436591c900ce2979be9cb043a597e28e70ff7f7"
	},
	{
		"id": "6077d6e6a1e8",
		"ts": "2026-08-24T12:42:06.797Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"no_dex_pair",
			"modifiable_tax"
		],
		"liquidityUsd": 0,
		"hash": "6077d6e6a1e8230c72e48358d65d9e45bc37e402234aeb33f5c31f4fccb1caee"
	},
	{
		"id": "3561cde65fe6",
		"ts": "2026-08-24T12:42:07.028Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "3561cde65fe617ad4943f479449fd5960b77b6b9150be2a5800d806509f68e33"
	},
	{
		"id": "3c79dd3fb1a0",
		"ts": "2026-08-24T12:42:07.262Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 44,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 0,
		"hash": "3c79dd3fb1a07995b49ffe2b9e04c800f882f08d20b4ad27bb0a882c238fe2c1"
	},
	{
		"id": "c3ab5b469d9d",
		"ts": "2026-08-24T12:42:07.507Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "c3ab5b469d9d50fa2dfaec142dadd152285683049155b4e3336bc0f560bacc3d"
	},
	{
		"id": "8255878561b0",
		"ts": "2026-08-24T12:42:07.743Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 56,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.12,
		"flags": [
			"no_dex_pair",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "8255878561b03261905451f5c16dca824f75a0c5f5598d35d6617e5305a0fac1"
	},
	{
		"id": "f9586d9d4c7e",
		"ts": "2026-08-24T12:42:07.988Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "f9586d9d4c7eb251db0a695b0269943464db383b9d9cb46ec41f15da05f58681"
	},
	{
		"id": "0e505295bdc6",
		"ts": "2026-08-24T12:42:08.223Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "0e505295bdc6c5bd6490a4f0f42e554df0b8604c8705383190c5f89af5694981"
	},
	{
		"id": "aa76b4600b8a",
		"ts": "2026-08-24T12:42:08.457Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "aa76b4600b8a66c6b19c5f04f45f6949db39b4a652301fc126af34ade892f599"
	},
	{
		"id": "0bad5e7c438e",
		"ts": "2026-08-24T12:42:08.696Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair"
		],
		"liquidityUsd": 0,
		"hash": "0bad5e7c438e383b650193b377b64a9b90e13806ab2135369c6ce6e2e1506459"
	},
	{
		"id": "be2b2440202a",
		"ts": "2026-08-24T12:42:08.916Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "be2b2440202a479e9fb220a450fb8eeea2337ea38f2e3dedd0a6468ef0124278"
	},
	{
		"id": "d547abfa7032",
		"ts": "2026-08-24T12:42:09.136Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "d547abfa7032b5f94faaf4c371aa8543a4d3532e285b733176b36b5809b392de"
	},
	{
		"id": "77031777254b",
		"ts": "2026-08-24T12:42:09.355Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "77031777254b44a4da7f1567fd161ae999594b34035e72e31d2a7b3ce7db21b2"
	},
	{
		"id": "00c6192b4ae6",
		"ts": "2026-08-24T12:42:09.576Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "00c6192b4ae63f98f9ef809da417dd9fb2543054d5ae553883d8c240fbb00e92"
	},
	{
		"id": "e7b6e1fc045d",
		"ts": "2026-08-24T12:42:09.793Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "e7b6e1fc045d10d7a1be0240bddb33e7ff709b3bf24aeb809144357501637032"
	},
	{
		"id": "3fb2270923b6",
		"ts": "2026-08-24T12:42:10.012Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"no_dex_pair",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "3fb2270923b6104e7656e4d49479ab0d72f85d3445af67a5822f9469ef0177bf"
	},
	{
		"id": "9749a678684a",
		"ts": "2026-08-24T11:23:34.272Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111859971.26,
		"hash": "9749a678684aa5966d8bcc5929245e444d4b10c6985924afdb87df1aea813dea"
	},
	{
		"id": "fc53026cbfbe",
		"ts": "2026-08-24T11:23:34.598Z",
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
		"liquidityUsd": 19844623.73,
		"hash": "fc53026cbfbe0d2d206bb7b6591472c391fb45ee9646de86621f66535ca46b1e"
	},
	{
		"id": "223f2af4e436",
		"ts": "2026-08-24T11:23:34.807Z",
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
		"liquidityUsd": 913950.17,
		"hash": "223f2af4e436d1860eaefcb7babfe0274ab2155360e905a66461715532d99113"
	},
	{
		"id": "77d95d5a3b74",
		"ts": "2026-08-24T11:23:35.003Z",
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
		"liquidityUsd": 29580302.8,
		"hash": "77d95d5a3b7420ff7e46eae75f372ba1d226ba46c2dcd9d737f86d3885486221"
	},
	{
		"id": "ee5757b43a3f",
		"ts": "2026-08-24T11:23:35.193Z",
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
		"liquidityUsd": 3547270.24,
		"hash": "ee5757b43a3f62d1de13f367ea48957333835ad279fe0099aa97a9d143013940"
	},
	{
		"id": "0afcd2913b54",
		"ts": "2026-08-24T11:23:35.390Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1183897.09,
		"hash": "0afcd2913b54cc6c81c7bf736b07a4d9de9c0a8129df3580beba17675a7a7df4"
	},
	{
		"id": "267a8491c8f3",
		"ts": "2026-08-24T11:23:35.583Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152797.27,
		"hash": "267a8491c8f3d183d549635070ddcb88a6f37a629ef58901ed02a9768abf78ce"
	},
	{
		"id": "2409bfa4da15",
		"ts": "2026-08-24T11:23:35.782Z",
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
		"liquidityUsd": 1895130.27,
		"hash": "2409bfa4da1506f6c365ea534b9a11d8ea9c941e49b83c10675043150783afd0"
	},
	{
		"id": "8d658392605e",
		"ts": "2026-08-24T11:23:35.999Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 620612.79,
		"hash": "8d658392605e035d6f85755c394e37f4421aa40328d7aef6386af88fc58747f5"
	},
	{
		"id": "7e16ce44e851",
		"ts": "2026-08-24T11:23:36.340Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1388353.61,
		"hash": "7e16ce44e85114ae9ff63b25d904c05d7e63a1bfd86edb5178387f1b8417aa76"
	},
	{
		"id": "ee21bc45ffbf",
		"ts": "2026-08-24T11:23:36.531Z",
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
		"liquidityUsd": 846845.05,
		"hash": "ee21bc45ffbfd241e109fe1596028f225263923c862de759aab818bd0ad88996"
	},
	{
		"id": "2c8336fd6bc7",
		"ts": "2026-08-24T11:23:36.810Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 636150.71,
		"hash": "2c8336fd6bc7062d23a825d07d5a9441f6a4075b3e9b6edc639681dd098697ac"
	},
	{
		"id": "6242f4430d87",
		"ts": "2026-08-24T11:23:37.028Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 109669.5,
		"hash": "6242f4430d8784456d105544495ccd060483ed84f5758375d3233ea954297963"
	},
	{
		"id": "def3cbc98eee",
		"ts": "2026-08-24T11:23:37.239Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 110524.5,
		"hash": "def3cbc98eeeab226888190ec0401a430975629bf9dc023606516dc39a75fb32"
	},
	{
		"id": "498b249d1ee6",
		"ts": "2026-08-24T11:23:37.475Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263300.15,
		"hash": "498b249d1ee66617beb1e1da005b8200ac2af2b61bdb32be0c0afb1a513547b3"
	},
	{
		"id": "f30bca376b3a",
		"ts": "2026-08-24T11:23:37.951Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 420895.67,
		"hash": "f30bca376b3afddc98c2a38100e538c781adf0344a6122133f1a21038c371966"
	},
	{
		"id": "ad1f403c8e70",
		"ts": "2026-08-24T11:23:38.943Z",
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
		"liquidityUsd": 669438.91,
		"hash": "ad1f403c8e70cb574abc183828918675600b35026b1fcd4a6747572a0b4a6646"
	},
	{
		"id": "917114f81c5e",
		"ts": "2026-08-24T11:23:39.214Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 852416.31,
		"hash": "917114f81c5e8e3fa79cd6bae9983cdef4ae2f30cb444af5486475c357f3f784"
	},
	{
		"id": "dd5584bcac72",
		"ts": "2026-08-24T11:23:39.637Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11218084.79,
		"hash": "dd5584bcac72d0fa5ccc4d7df2497cc56dc5413b545343a0d4ddcc4e1f2be7bb"
	},
	{
		"id": "0c80edda0344",
		"ts": "2026-08-24T11:23:40.210Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207177.57,
		"hash": "0c80edda0344a3d091f05b56563c7be28942281e70a1cfa8afa555074826849b"
	},
	{
		"id": "901528669c4d",
		"ts": "2026-08-24T10:33:31.170Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112013269.97,
		"hash": "901528669c4dc59d089031d9efd1deb8cfa47cc1544125e10ba46baf9dc132fe"
	},
	{
		"id": "e2f6649939bb",
		"ts": "2026-08-24T10:33:31.380Z",
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
		"liquidityUsd": 13472214.68,
		"hash": "e2f6649939bb3be3a420bc764d012f31118f88488c278b31dc15529ff2f0ab12"
	},
	{
		"id": "a3f88e6d0a72",
		"ts": "2026-08-24T10:33:31.578Z",
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
		"liquidityUsd": 920502.31,
		"hash": "a3f88e6d0a722467e055a661fb61c14b631146f02c02f6eb03a8e04649ce26ac"
	},
	{
		"id": "fdbf5b56a4f0",
		"ts": "2026-08-24T10:33:31.764Z",
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
		"liquidityUsd": 29580462.06,
		"hash": "fdbf5b56a4f068072012c8674e03ab143cae6e244852252d26eaf386cc5f4262"
	},
	{
		"id": "74e185edf305",
		"ts": "2026-08-24T10:33:31.964Z",
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
		"liquidityUsd": 3590375.45,
		"hash": "74e185edf305d63c836fb282d1f557b626d93fdc4cfd1aab80783ff0e08b438e"
	},
	{
		"id": "42f23351f657",
		"ts": "2026-08-24T10:33:32.144Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1171293.33,
		"hash": "42f23351f657e1fc39b03df15d22e603ef3f4532acc2e6be72e04b126306d30e"
	},
	{
		"id": "e7a772d994ae",
		"ts": "2026-08-24T10:33:32.349Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152797.38,
		"hash": "e7a772d994aeb65a51658c5e089d9fdfc55a624707b675ea755267c18ced9be4"
	},
	{
		"id": "002c2b6a722d",
		"ts": "2026-08-24T10:33:32.542Z",
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
		"liquidityUsd": 1901409.29,
		"hash": "002c2b6a722de234fd5eaf53484d6f7c733ec0a0fe7e4c28140216596c080037"
	},
	{
		"id": "384fd1a198fe",
		"ts": "2026-08-24T10:33:32.737Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 639937.97,
		"hash": "384fd1a198fe013b4f838af95f4b5b51f77e49921ff18d0ef9ab9ebf5e249916"
	},
	{
		"id": "451010b953fa",
		"ts": "2026-08-24T10:33:32.924Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 876769.75,
		"hash": "451010b953fa281c7ad54dc8bdac253f57afaab8fa8ecc3bba5f07e3a973e1bd"
	},
	{
		"id": "f773b4295f64",
		"ts": "2026-08-24T10:33:33.113Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1422943.01,
		"hash": "f773b4295f64e169e42991baf2366cdb3974958fa80602b8eeaca37866413ff5"
	},
	{
		"id": "e4314ce047e4",
		"ts": "2026-08-24T10:33:33.293Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 648588.83,
		"hash": "e4314ce047e45088cb5a6cf810248e29d4b2b19b97f93f13363ab6d58a95f097"
	},
	{
		"id": "6ddb02ecbfaf",
		"ts": "2026-08-24T10:33:34.035Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100886.81,
		"hash": "6ddb02ecbfaf216cdb8b3f772d56c1806edd3300aad80bfe9370a9d5f4a97706"
	},
	{
		"id": "889fb771eac7",
		"ts": "2026-08-24T10:33:34.781Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 115888.78,
		"hash": "889fb771eac7dd75cf8c20218e10ed931bd64be6af014b695f9c7cc3a1ba243b"
	},
	{
		"id": "4bd6615f7f5d",
		"ts": "2026-08-24T10:33:34.968Z",
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
		"liquidityUsd": 672319,
		"hash": "4bd6615f7f5d0f0876adea9fd0ad0a4790cde654ffa9478e0976835d7d0cd3e4"
	},
	{
		"id": "e327cafb7bcc",
		"ts": "2026-08-24T10:33:35.151Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266055.62,
		"hash": "e327cafb7bcc138c9d47d7dc29081851869794d734f64de92ed317db0e989ecf"
	},
	{
		"id": "3d8dd8aaa133",
		"ts": "2026-08-24T10:33:35.336Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 420922.7,
		"hash": "3d8dd8aaa13360f9fb48db06b01e438513b21088b82a79e0c6f2c3ae2fc3d634"
	},
	{
		"id": "f517318d5dc8",
		"ts": "2026-08-24T10:33:35.539Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4166609.92,
		"hash": "f517318d5dc8346b35279986af4a6fab8520fcfa4a2636d6771b9377fdf384c3"
	},
	{
		"id": "62665e199a61",
		"ts": "2026-08-24T10:33:35.777Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 867047.84,
		"hash": "62665e199a617467773cb21365ef9b45b9771ab5569c0d838502711152014b03"
	},
	{
		"id": "7d5c3ed320d4",
		"ts": "2026-08-24T10:33:35.967Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11281533.18,
		"hash": "7d5c3ed320d4801092aafcf3acd944be538c44b51a0cdf152b9b4679c3f04800"
	},
	{
		"id": "3eddd1469323",
		"ts": "2026-08-24T09:42:10.058Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111648713.59,
		"hash": "3eddd1469323bb03cd66fdeef431786952ea2dbc476f125566c05ee7b3b23a4a"
	},
	{
		"id": "157bb8dc7763",
		"ts": "2026-08-24T09:42:10.299Z",
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
		"liquidityUsd": 18849517.42,
		"hash": "157bb8dc7763c22ed006a7370168934d694ecb086ae1b15db094b2a187e9d976"
	},
	{
		"id": "a9468729601f",
		"ts": "2026-08-24T09:42:10.547Z",
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
		"liquidityUsd": 918999.13,
		"hash": "a9468729601f019658f5cf837cdf6eec1040f33617c4d2ae0961bad3df1243f6"
	},
	{
		"id": "bc69c55d9d17",
		"ts": "2026-08-24T09:42:10.795Z",
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
		"liquidityUsd": 29334222.03,
		"hash": "bc69c55d9d1712aa10b6814c916ce06c1043d9d9fc49ab3e8abd17a22586a4ba"
	},
	{
		"id": "a01ed6345d27",
		"ts": "2026-08-24T09:42:11.025Z",
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
		"liquidityUsd": 3488976.79,
		"hash": "a01ed6345d275b97bc9f65f19a1120280f75625bca6561229b3f68d61cda2a09"
	}
]
