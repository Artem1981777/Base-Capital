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
	"updatedAt": "2026-08-16T14:18:03.645Z",
	"tokensScored": 10875,
	"verdictsIssued": 10875,
	"safe": 9472,
	"risky": 819,
	"likelyRug": 584,
	"ticks": 651
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "0f89f137c2f2",
		"ts": "2026-08-16T14:17:57.880Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111311996.2,
		"hash": "0f89f137c2f24c159e1a26b3c537cc00ff517d754085b7080b31436d3bcb6a1b"
	},
	{
		"id": "ed5e17547424",
		"ts": "2026-08-16T14:17:58.410Z",
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
		"liquidityUsd": 17004638.19,
		"hash": "ed5e17547424e62a55b86725dd1c06ac5f2c73c5a6920bddc29c9a1e9b6307f9"
	},
	{
		"id": "cfafcb7c5ed1",
		"ts": "2026-08-16T14:17:58.624Z",
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
		"liquidityUsd": 800682.26,
		"hash": "cfafcb7c5ed143acd7852602f27557957f15d683fb14e4b606fba5cb9ce5d5c7"
	},
	{
		"id": "88e111c5f6d2",
		"ts": "2026-08-16T14:17:59.010Z",
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
		"liquidityUsd": 26669282.3,
		"hash": "88e111c5f6d2c4026d165dd386f2a93c4e387117862099835a2d0483bc859fdc"
	},
	{
		"id": "03d790723e78",
		"ts": "2026-08-16T14:17:59.374Z",
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
		"liquidityUsd": 4148514.01,
		"hash": "03d790723e78bc286262208e82db54572b0d3625ef646e27a27d16a76958e55e"
	},
	{
		"id": "88fc07f5485a",
		"ts": "2026-08-16T14:17:59.586Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887055.07,
		"hash": "88fc07f5485a46b558e79432abe884cd2a2e7a7e3b9f8ef549e012f3228597ec"
	},
	{
		"id": "0bfa04f6fc8d",
		"ts": "2026-08-16T14:17:59.791Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6003511.48,
		"hash": "0bfa04f6fc8d1f60197713c9dbe229e6f798976c8f10377a42ae1c80e668fd32"
	},
	{
		"id": "af41ac785ed1",
		"ts": "2026-08-16T14:18:00.171Z",
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
		"liquidityUsd": 3608882.24,
		"hash": "af41ac785ed14faa063a45f81e42826fe0d4b76b6a244e59203b3c0867d33548"
	},
	{
		"id": "305875be5cdf",
		"ts": "2026-08-16T14:18:00.387Z",
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
		"liquidityUsd": 266764.05,
		"hash": "305875be5cdf831ff5a142d50d1e06022404858b972a62e3f132779ce0b0584a"
	},
	{
		"id": "c446ba51f373",
		"ts": "2026-08-16T14:18:00.593Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2531874.12,
		"hash": "c446ba51f3732305a69f64bae464f4286ac55db1024ff0fce6b4da9475895ba1"
	},
	{
		"id": "d085869e85e4",
		"ts": "2026-08-16T14:18:01.371Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 7.25,
		"hash": "d085869e85e4523d80ba506244fbb687aaa0f0bbb09b9191a48319dec4f54fb6"
	},
	{
		"id": "eb325a6c9fe9",
		"ts": "2026-08-16T14:18:01.568Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 149442.33,
		"hash": "eb325a6c9fe93b62a116cb3e94bcb7431c58616c0b9ad32e8e118b367d159262"
	},
	{
		"id": "3c5758ff955f",
		"ts": "2026-08-16T14:18:01.764Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6017874.4,
		"hash": "3c5758ff955f1f7a11a6887e5610e0ee1d008c87505c60e39d096212ca241aa0"
	},
	{
		"id": "5511b0d19640",
		"ts": "2026-08-16T14:18:02.385Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 55762.93,
		"hash": "5511b0d19640e7693e46afa4d2fa5565b657b572697ed0759119ad7b6113bdb8"
	},
	{
		"id": "08ce0dc441cc",
		"ts": "2026-08-16T14:18:02.591Z",
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
		"liquidityUsd": 890434.38,
		"hash": "08ce0dc441cc3b5fa04805647bd733fee136d1234e2dd0619a95b77dfdd9c377"
	},
	{
		"id": "156b89634f3b",
		"ts": "2026-08-16T14:18:02.808Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1043228.96,
		"hash": "156b89634f3ba8c5670b0bb6424d32a599df09174c36776eca92c6eaed45f5ff"
	},
	{
		"id": "6bee055999d5",
		"ts": "2026-08-16T14:18:03.019Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 362529.22,
		"hash": "6bee055999d5287ae471388c452dc1131d4b5a3638921fc6eccb99297540d534"
	},
	{
		"id": "b4be4674da3b",
		"ts": "2026-08-16T14:18:03.442Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 103690.69,
		"hash": "b4be4674da3bd1d5e4be509210a278910fa27a1f7c225231241dcca0dc6b9d09"
	},
	{
		"id": "e39082f365a4",
		"ts": "2026-08-16T14:18:03.645Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9449085.96,
		"hash": "e39082f365a42495367471da8fafd6621fa4f401e0ee3d4f6d2a70b7fbabbb62"
	},
	{
		"id": "d6ce2a9da4f0",
		"ts": "2026-08-16T13:27:38.529Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111315751.87,
		"hash": "d6ce2a9da4f0e0b72a2b2185157b8cc4bc45e3a1553badb259a345646be4073e"
	},
	{
		"id": "bfd65df8b29e",
		"ts": "2026-08-16T13:27:39.041Z",
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
		"liquidityUsd": 16990743.12,
		"hash": "bfd65df8b29e526d61f31ba93c8e393a2f43d1754220eebb1182b01ba79cc27b"
	},
	{
		"id": "f34fc184c62a",
		"ts": "2026-08-16T13:27:39.246Z",
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
		"liquidityUsd": 800682.26,
		"hash": "f34fc184c62adbd620d78aef7c62ba2193a790c1b7baa1b3b6b66fc4f9c6726b"
	},
	{
		"id": "bd4e41731c35",
		"ts": "2026-08-16T13:27:39.438Z",
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
		"liquidityUsd": 26635028.92,
		"hash": "bd4e41731c35ab4934b3ad3dcbb26b7a29cafd547f0ed8d04a163a6fa81c6354"
	},
	{
		"id": "0597d82db951",
		"ts": "2026-08-16T13:27:39.629Z",
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
		"liquidityUsd": 4148675.02,
		"hash": "0597d82db9517e162688d82cd6599c7bc09566b852078d51c463d49962022005"
	},
	{
		"id": "7b9757f4ad18",
		"ts": "2026-08-16T13:27:39.820Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887055.07,
		"hash": "7b9757f4ad18aa75fda6af3abfab962c1a00acf7e618aac4dbc02001101cdff1"
	},
	{
		"id": "5eef4f25f50b",
		"ts": "2026-08-16T13:27:40.016Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6216043.4,
		"hash": "5eef4f25f50b67478e1af6df2b751c43ad432959ecb9269662ff5f69b2ce9b76"
	},
	{
		"id": "fc30cfb6c3f1",
		"ts": "2026-08-16T13:27:40.212Z",
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
		"liquidityUsd": 3557304.17,
		"hash": "fc30cfb6c3f17b6ded8eac5671d15a6cfb586a2f88044e0b2cbec74ea1943883"
	},
	{
		"id": "caa39c8089bc",
		"ts": "2026-08-16T13:27:40.411Z",
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
		"liquidityUsd": 266648.39,
		"hash": "caa39c8089bc7d04e731cf61a758e10a9b335b5885d463aeb0ce837261c8f381"
	},
	{
		"id": "b6fa23b2c6fd",
		"ts": "2026-08-16T13:27:40.611Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2534033.06,
		"hash": "b6fa23b2c6fdf721e4eeff22cac2fc57687bd238c68b05d3efe2879e669592ab"
	},
	{
		"id": "70c070e9e881",
		"ts": "2026-08-16T13:27:40.790Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 8.58,
		"hash": "70c070e9e8819f34169aa47ab504d507469d7d4f16eeddb9571ddce06332e04f"
	},
	{
		"id": "50c9b47a65dd",
		"ts": "2026-08-16T13:27:40.967Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6225330.64,
		"hash": "50c9b47a65dd05f72fd0df03b23e68fc540697efe3cd2e692fcd5514e86aa510"
	},
	{
		"id": "924457a50e3e",
		"ts": "2026-08-16T13:27:41.142Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 157904.69,
		"hash": "924457a50e3eb47b72c58947d111e24b93f1783c05011fc9927529c4e3e6a0dc"
	},
	{
		"id": "d09333cd1d77",
		"ts": "2026-08-16T13:27:41.324Z",
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
		"liquidityUsd": 58999.31,
		"hash": "d09333cd1d772771c2d3612a0519b071e80903c8e216e571b62ec8f205a891a5"
	},
	{
		"id": "9cf6fd15e6ac",
		"ts": "2026-08-16T13:27:41.505Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 890949.11,
		"hash": "9cf6fd15e6ac915a187f1004531ba889cc9de9e54fbadabc2c1c00b83a2fc9e4"
	},
	{
		"id": "67ab13e18e36",
		"ts": "2026-08-16T13:27:41.691Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1043963.69,
		"hash": "67ab13e18e36c231c4b71f4ce1cc717356465ecfd2283db5d82d2ccf037767b0"
	},
	{
		"id": "c08770118a03",
		"ts": "2026-08-16T13:27:41.887Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 363152.68,
		"hash": "c08770118a03f62963dbd51d196a2c16debc40e1b604615e7a817a335b35a1ca"
	},
	{
		"id": "a92d0943e916",
		"ts": "2026-08-16T13:27:42.072Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 87983.86,
		"hash": "a92d0943e916f0404c14d04ad16fa90ed63d9feee1e5f49902c86e3f3081b3d8"
	},
	{
		"id": "fb7a08546608",
		"ts": "2026-08-16T13:27:42.255Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9433003.18,
		"hash": "fb7a08546608b1e281ff1639b7d82b8b77d83e21320cbaa220c01b178811a2b8"
	},
	{
		"id": "2f6151d28884",
		"ts": "2026-08-16T12:31:01.257Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111338187.27,
		"hash": "2f6151d288840c1e4a57b0be3702d86b4ebe7b5b12072a9d7f2f3092ba0b496a"
	},
	{
		"id": "1ed258108e65",
		"ts": "2026-08-16T12:31:01.700Z",
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
		"liquidityUsd": 16983539.35,
		"hash": "1ed258108e656ca751627742844cb3e9942103183a56594bb163188a7d872743"
	},
	{
		"id": "9249846f8f8b",
		"ts": "2026-08-16T12:31:02.237Z",
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
		"liquidityUsd": 800682.26,
		"hash": "9249846f8f8b5d96210b6f193e693567a3f8218395308e4531dd20503e5ee309"
	},
	{
		"id": "49524729d78e",
		"ts": "2026-08-16T12:31:02.487Z",
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
		"liquidityUsd": 26619975.8,
		"hash": "49524729d78e71c34c5e16c006ca5e39c6499436220209b0f4ca8cefa676b9db"
	},
	{
		"id": "c4582f4fb0d9",
		"ts": "2026-08-16T12:31:02.742Z",
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
		"liquidityUsd": 4148675.02,
		"hash": "c4582f4fb0d9995c9b81b81d6befcb39bf2d404a928ebeb8b25a939627d472f7"
	},
	{
		"id": "5bd4055caede",
		"ts": "2026-08-16T12:31:02.971Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887120.85,
		"hash": "5bd4055caede0dd5df88ccdb9d398608ce7adbbf9f26228aabaad334d6b495cf"
	},
	{
		"id": "65a776bb1fa6",
		"ts": "2026-08-16T12:31:03.223Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6133056.33,
		"hash": "65a776bb1fa6e542a5360c98a4768421cdc375d970e37ec518c2d3c647e93360"
	},
	{
		"id": "03bc90f39c78",
		"ts": "2026-08-16T12:31:03.519Z",
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
		"liquidityUsd": 3556850.05,
		"hash": "03bc90f39c789532976f9544059bb5dd279ddcdcc31374f25173fd2e4a981cf4"
	},
	{
		"id": "6fcb63aa9a0c",
		"ts": "2026-08-16T12:31:03.831Z",
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
		"liquidityUsd": 266317.65,
		"hash": "6fcb63aa9a0c9ad89f5c5f4127e1fae2daefa7e909c8e4288e7b6fe2f16d62b1"
	},
	{
		"id": "79bf79e7ba1c",
		"ts": "2026-08-16T12:31:04.101Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2575857.72,
		"hash": "79bf79e7ba1cb84f911ce576105fd5c8c61e284033c20341f2cbce791a46bdbb"
	},
	{
		"id": "91d782d5555a",
		"ts": "2026-08-16T12:31:04.311Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 8.51,
		"hash": "91d782d5555a195d3b8940fd17a1a4748ad107d1704a17f58a9d9fb5a5f940c3"
	},
	{
		"id": "c8db0a61e821",
		"ts": "2026-08-16T12:31:04.518Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 173236.02,
		"hash": "c8db0a61e82178e2ab703c4837783eb452b5950d349bfc14ef15d59af84fba9e"
	},
	{
		"id": "4d7e831afb4f",
		"ts": "2026-08-16T12:31:04.728Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6160991.7,
		"hash": "4d7e831afb4f66c13dfa9b068367385640b42ec8eaac577cfa461e25932b7055"
	},
	{
		"id": "3fd8d36165c3",
		"ts": "2026-08-16T12:31:04.952Z",
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
		"liquidityUsd": 75295.25,
		"hash": "3fd8d36165c3b3f7e4e8e366db28458adbc6c76eb60be4dd6b1e3c8e78ec1d4e"
	},
	{
		"id": "5dbd66771550",
		"ts": "2026-08-16T12:31:05.174Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 895186.32,
		"hash": "5dbd6677155042077719d05a6e82246f3a42547e987bda8af55757e70850896c"
	},
	{
		"id": "42fc11290bae",
		"ts": "2026-08-16T12:31:05.388Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1032769.58,
		"hash": "42fc11290bae08dc8aabe0525b5499b2455e4eb50bea0a32e99b891c7524ccfe"
	},
	{
		"id": "b2ab9d0c8c4e",
		"ts": "2026-08-16T12:31:05.596Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 367435.53,
		"hash": "b2ab9d0c8c4e6d679cf785f0f8e1ba1dc8936105a273ac8b80548dd6027a8058"
	},
	{
		"id": "dbf7f71f12ab",
		"ts": "2026-08-16T12:31:05.805Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 75184.17,
		"hash": "dbf7f71f12abc2a0d42bb561cc8cf77caf3e98494b7503350c0b7c6edc2d5f28"
	},
	{
		"id": "bcda5f2bc345",
		"ts": "2026-08-16T12:31:06.016Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9430803.72,
		"hash": "bcda5f2bc345556294695ab8d782e8b6ea9026797e4577f6014b90a46e1ba567"
	},
	{
		"id": "5f8bddf3925d",
		"ts": "2026-08-16T11:16:21.486Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111335310.53,
		"hash": "5f8bddf3925da7f653981a2bc42b6126c1f69ee70083ad704a15585f30838788"
	},
	{
		"id": "56d40644d662",
		"ts": "2026-08-16T11:16:21.958Z",
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
		"liquidityUsd": 16994191.45,
		"hash": "56d40644d66276a9cd354675bcce1c5b9b01e9aeacc86d34beca7fe8ae624516"
	},
	{
		"id": "47d26073e2cb",
		"ts": "2026-08-16T11:16:22.254Z",
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
		"liquidityUsd": 803901.89,
		"hash": "47d26073e2cb49b706989f4ea19c70c40e787fd4b819240e7e1c4d87e1e8f73f"
	},
	{
		"id": "6b0aef20edde",
		"ts": "2026-08-16T11:16:22.507Z",
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
		"liquidityUsd": 26620336.65,
		"hash": "6b0aef20edde7f5a8bd648ab2883532f546c96ede9328bec13881d218de425c5"
	},
	{
		"id": "068048cdee29",
		"ts": "2026-08-16T11:16:22.785Z",
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
		"liquidityUsd": 4148675.02,
		"hash": "068048cdee29d7695dd00ed42bcb6784fe0efc80742ae63ee719f5fe5f49abd7"
	},
	{
		"id": "7af044c41f6c",
		"ts": "2026-08-16T11:16:23.062Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887120.85,
		"hash": "7af044c41f6c3a81074341c2ada026e853a404ce06400e5d1e3d300ca4c58da6"
	},
	{
		"id": "e1fee48f363d",
		"ts": "2026-08-16T11:16:23.316Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6172217.99,
		"hash": "e1fee48f363db42ab1f0a40f3053ba13371c88ecd9e4980eede70209846d2aca"
	},
	{
		"id": "9f6c6ecbc693",
		"ts": "2026-08-16T11:16:23.561Z",
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
		"liquidityUsd": 3557247.01,
		"hash": "9f6c6ecbc6936951e62d37acbaf17831b61e4ef09d4cd34df0c194cabac0a160"
	},
	{
		"id": "5accc803e0a9",
		"ts": "2026-08-16T11:16:23.809Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2568012,
		"hash": "5accc803e0a9ab7caef5cd5d215b5e685d334840d466ca727b968a473b2847b6"
	},
	{
		"id": "dc0c6b5a25b4",
		"ts": "2026-08-16T11:16:24.062Z",
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
		"liquidityUsd": 265775.1,
		"hash": "dc0c6b5a25b474b0b4fb37e06b0a157b3ae474bafcbf5a338171a5f84e37c0b0"
	},
	{
		"id": "bce4367b062b",
		"ts": "2026-08-16T11:16:24.294Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 168426.67,
		"hash": "bce4367b062b1667a0f68fa38089cdb57445dddecfbc9110ebcf909e7defa4a1"
	},
	{
		"id": "b41d7253c558",
		"ts": "2026-08-16T11:16:24.525Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 894509.25,
		"hash": "b41d7253c5582ca870fa62b4387ba307266cfb04cf72f9ddfad7574ae225fc9b"
	},
	{
		"id": "810915e82484",
		"ts": "2026-08-16T11:16:24.758Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6168427.66,
		"hash": "810915e82484ede9227fc66f886bde35be2884c7fd7be7639606d706f0525437"
	},
	{
		"id": "a4e421516189",
		"ts": "2026-08-16T11:16:24.989Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 8.23,
		"hash": "a4e421516189c42d8a7588a633468bf8826893281ed0f5e49af8314f7057d96f"
	},
	{
		"id": "ad8bdfb3e8d0",
		"ts": "2026-08-16T11:16:25.220Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1014006.37,
		"hash": "ad8bdfb3e8d09fbfcaf229e6a53578d81ae8352af53eafd49ba209917165c4c3"
	},
	{
		"id": "2f8838b505ca",
		"ts": "2026-08-16T11:16:25.452Z",
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
		"liquidityUsd": 93309.69,
		"hash": "2f8838b505ca163f110ce0b189adcf9151598e6f0fb15e74366ec3f1ca55e790"
	},
	{
		"id": "a6ca830691d8",
		"ts": "2026-08-16T11:16:25.682Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 369063.69,
		"hash": "a6ca830691d8f31bb6f5de1e450c586cb9e793e1ed1ab2ec991450aae9d05392"
	},
	{
		"id": "ed9c131ca51f",
		"ts": "2026-08-16T11:16:25.915Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77691.93,
		"hash": "ed9c131ca51f37a0de673154442bcf2b16de474e1c096afc875aacbddb9f908c"
	},
	{
		"id": "3fef16c04c4d",
		"ts": "2026-08-16T11:16:26.147Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9442019.1,
		"hash": "3fef16c04c4d336646802aea7cecfa580dc8703a9372ab0ea2209224825c9e0b"
	},
	{
		"id": "16a85a6bf9ba",
		"ts": "2026-08-16T10:19:04.079Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111395114.33,
		"hash": "16a85a6bf9ba6561d181bb3ac2460a4bb3db57afe09ff5ad752c3842324f97f4"
	},
	{
		"id": "f9dd7daafee4",
		"ts": "2026-08-16T10:19:04.590Z",
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
		"liquidityUsd": 16986159.22,
		"hash": "f9dd7daafee43de7f838617ed870eb447f7db11344345a02d227c5b63a9f9145"
	},
	{
		"id": "3b88fc0c6e1c",
		"ts": "2026-08-16T10:19:04.847Z",
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
		"liquidityUsd": 806073.68,
		"hash": "3b88fc0c6e1c950b83ecd1c140abc6e5898bcf308b6d47a6d6edd85b621210bb"
	},
	{
		"id": "8e4eaeb275f5",
		"ts": "2026-08-16T10:19:05.140Z",
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
		"liquidityUsd": 26620286.53,
		"hash": "8e4eaeb275f5d352cb0900675a6fd42400a439427b46fd0329aaac5f829fcca1"
	},
	{
		"id": "416258c5b097",
		"ts": "2026-08-16T10:19:05.368Z",
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
		"liquidityUsd": 4150679.59,
		"hash": "416258c5b09729f0753b21ac72cb64ed293040d4d4885acd6493a82b5a4ee6c4"
	},
	{
		"id": "da93054f8eae",
		"ts": "2026-08-16T10:19:05.710Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887120.85,
		"hash": "da93054f8eae45b24a3e8d1057b53f866b5c4d16c87c2ee5d91d7c6f6b25f5e1"
	},
	{
		"id": "f6d809777485",
		"ts": "2026-08-16T10:19:05.969Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6206819.33,
		"hash": "f6d8097774850d9abdd46177f8d06faeb1164b54505cb314a21b6218fda253e9"
	},
	{
		"id": "f211666e928f",
		"ts": "2026-08-16T10:19:06.205Z",
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
		"liquidityUsd": 3555298.84,
		"hash": "f211666e928f6d6d2cf9b92423be19e9c808cbd56d572c3e7fc75a541f058aea"
	},
	{
		"id": "6cee0a1fc362",
		"ts": "2026-08-16T10:19:06.431Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2569736.77,
		"hash": "6cee0a1fc3629578db8f3218848106db0fc7eeb2eeacedfb7f9b64f572e94422"
	},
	{
		"id": "a7afff919797",
		"ts": "2026-08-16T10:19:06.662Z",
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
		"liquidityUsd": 264236.93,
		"hash": "a7afff9197978363c214feb3bf6d8f4f7d3ed90bae491f330033a6a023b4ba17"
	},
	{
		"id": "40f49953c0fa",
		"ts": "2026-08-16T10:19:06.875Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148341.51,
		"hash": "40f49953c0fa62ecb28b22e8f2820912ab7d1c65c417446f8ce084dcf8be2ef2"
	},
	{
		"id": "542a56ef6b04",
		"ts": "2026-08-16T10:19:07.087Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 894227.13,
		"hash": "542a56ef6b0413a81d34525c1dc5d5db0ff4689f22762650f6013682795456c9"
	},
	{
		"id": "81f73c36cc3e",
		"ts": "2026-08-16T10:19:07.304Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6207331.49,
		"hash": "81f73c36cc3e5f95427b67ebca74e7c534516beddcad540d8989310d6716c934"
	},
	{
		"id": "24539a19fb56",
		"ts": "2026-08-16T10:19:07.517Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 8.32,
		"hash": "24539a19fb56c0801ad3b663c7d3485d7f9c70c96f7ae8c1c05c43a459d9fe8e"
	},
	{
		"id": "f5b379c05584",
		"ts": "2026-08-16T10:19:07.729Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1026155.89,
		"hash": "f5b379c055845ced08a80aef72f398a354953f05d4b975563eacc9483f64dbe8"
	},
	{
		"id": "ddd1aa1f383c",
		"ts": "2026-08-16T10:19:07.945Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 367401.48,
		"hash": "ddd1aa1f383c5de50c9b77369b4cd2d7c2b7104a8973752e536e6f18dddf781e"
	},
	{
		"id": "d6a773826aff",
		"ts": "2026-08-16T10:19:08.178Z",
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
		"liquidityUsd": 81105.98,
		"hash": "d6a773826affa0ef7b3cbba395a9cfd2972584d88c01a6ad776543844d8d6f2f"
	},
	{
		"id": "f04e17e93557",
		"ts": "2026-08-16T10:19:08.391Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9435914.35,
		"hash": "f04e17e935576dd0bdae2e8514d0bc72989a4a0be514e12ca8d25cd5992146ac"
	},
	{
		"id": "b06ed54699b3",
		"ts": "2026-08-16T10:19:08.604Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 89569.89,
		"hash": "b06ed54699b3d5ed66ba460c5624b2eebc63ccbe1e2254242eac793cf882267d"
	},
	{
		"id": "c1a9088df69f",
		"ts": "2026-08-16T09:23:17.570Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111438319.95,
		"hash": "c1a9088df69fedd23171cd16840b41e2adef6d8099699375a28f5b9b159a6acd"
	},
	{
		"id": "4d4c229adf4c",
		"ts": "2026-08-16T09:23:18.247Z",
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
		"liquidityUsd": 17004167.27,
		"hash": "4d4c229adf4cd2db76c0f38392f17089371317e9ecf8ff6837e7fe95105108a8"
	},
	{
		"id": "c142aad22836",
		"ts": "2026-08-16T09:23:18.670Z",
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
		"liquidityUsd": 804850.35,
		"hash": "c142aad2283683f0cd87e9b17aad6077fa71d4732a10dd7dfaf31718f93ff885"
	},
	{
		"id": "219259d73d46",
		"ts": "2026-08-16T09:23:19.133Z",
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
		"liquidityUsd": 26620450.43,
		"hash": "219259d73d46820c02419a7635c12264a5a11812459442ed5c329e785282f1f6"
	},
	{
		"id": "25c0a42617fd",
		"ts": "2026-08-16T09:23:19.556Z",
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
		"liquidityUsd": 4149806.87,
		"hash": "25c0a42617fdf7be26549dabff6aad8b86b8b26c944f323af3a62bf3ef184b0a"
	},
	{
		"id": "e922ef796c35",
		"ts": "2026-08-16T09:23:19.800Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887120.85,
		"hash": "e922ef796c35adb36212f5e8d590955ea8a8741084b2387829650c435c0ae000"
	},
	{
		"id": "985b55e0d6ef",
		"ts": "2026-08-16T09:23:20.027Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26620450.43,
		"hash": "985b55e0d6ef86fcacc95d9a289c330a0301888200777d4d459deef89bf58aab"
	},
	{
		"id": "e82402dbb1b2",
		"ts": "2026-08-16T09:23:20.487Z",
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
		"liquidityUsd": 3889347.03,
		"hash": "e82402dbb1b2067798debfe4efffa7264dfeb35abcdfaf7acfa6c51d594b2758"
	},
	{
		"id": "1c4de4d72020",
		"ts": "2026-08-16T09:23:20.720Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2591326.11,
		"hash": "1c4de4d72020e4ff44894dd1a3d509c06da26e73ce9f4ea96769d03f0588020a"
	},
	{
		"id": "e9d1135619d4",
		"ts": "2026-08-16T09:23:20.968Z",
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
		"liquidityUsd": 264137.8,
		"hash": "e9d1135619d4c8e7a8260f3a399a937472cecdb7d3c88301ebcaadb9653f74f2"
	},
	{
		"id": "652c359eb8f2",
		"ts": "2026-08-16T09:23:21.180Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 146741.84,
		"hash": "652c359eb8f20a65094572f98ace08f43f217fd23a13dcbe5a9ec6787560eb8b"
	},
	{
		"id": "e9bff36f163e",
		"ts": "2026-08-16T09:23:21.408Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 894059.22,
		"hash": "e9bff36f163efff2aa231f2f05f35cbe4c22856ae14447c1054343dec5ff5f72"
	},
	{
		"id": "3c30d8435990",
		"ts": "2026-08-16T09:23:21.619Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1039225.59,
		"hash": "3c30d84359905b1a08e700d166d4bfae69e41ba9a9df348c9cffd667904cf461"
	},
	{
		"id": "6f01acc9ad4f",
		"ts": "2026-08-16T09:23:21.849Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 365094.44,
		"hash": "6f01acc9ad4f44e71f5acfcc94d05bbb4668ad0c896cce00e77f2570bc6eddfc"
	},
	{
		"id": "3577d8703b4b",
		"ts": "2026-08-16T09:23:22.059Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 8.61,
		"hash": "3577d8703b4b1aa1443fcc462a6c619a43dd5f06bd37f4459efee11adf857aac"
	},
	{
		"id": "b09801977a2e",
		"ts": "2026-08-16T09:23:22.288Z",
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
		"liquidityUsd": 84693.08,
		"hash": "b09801977a2ea2538ef796bf2d0052a49f8d7316a670c13fa4bf1d9690edc5f2"
	},
	{
		"id": "d7d8a714300e",
		"ts": "2026-08-16T09:23:22.498Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6633374.51,
		"hash": "d7d8a714300e84fb26e7faf3265a5a1c5fbadf55e668296c44f2d85db038c144"
	},
	{
		"id": "0eb7f538c71f",
		"ts": "2026-08-16T09:23:22.727Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9449072.57,
		"hash": "0eb7f538c71f8c0d75c7750eab5d9d49bb967d675825d3cae2c555803c3946d5"
	},
	{
		"id": "cc48ff9daede",
		"ts": "2026-08-16T09:23:22.937Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 621925.58,
		"hash": "cc48ff9daede4ecf3d4dcd1a1ff2fc5626a75850cb9ded4eb6844e8d898ef725"
	},
	{
		"id": "cff36f002ab8",
		"ts": "2026-08-16T08:23:35.684Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111452530,
		"hash": "cff36f002ab86bee73767ae8046c51131c31f701edab633e7e2ccae15d5a630c"
	},
	{
		"id": "731bd179a78b",
		"ts": "2026-08-16T08:23:36.135Z",
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
		"liquidityUsd": 16994074.52,
		"hash": "731bd179a78b40d6804cc9c7aea0634b84d3e6ab5b30ad77c6ca86532c545500"
	},
	{
		"id": "a6f34c8fbe8d",
		"ts": "2026-08-16T08:23:36.407Z",
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
		"liquidityUsd": 804850.35,
		"hash": "a6f34c8fbe8dd912055ff59a8d283c115258574487d90bab7d7e330c3dc759f7"
	},
	{
		"id": "6049e68c0d46",
		"ts": "2026-08-16T08:23:36.640Z",
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
		"liquidityUsd": 26606523.71,
		"hash": "6049e68c0d46ec24b854592e2d005cc2c30eb9dac45300fefaa02de0c74e91c0"
	},
	{
		"id": "82cab0bfabee",
		"ts": "2026-08-16T08:23:36.902Z",
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
		"liquidityUsd": 4145922.19,
		"hash": "82cab0bfabeeb2e504e80e3fd55745db6c800c49d641cf7f983e24b41c4d8efc"
	},
	{
		"id": "c6aad0bdf8e0",
		"ts": "2026-08-16T08:23:37.210Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887120.85,
		"hash": "c6aad0bdf8e04a708a9d355908c97edbdb88a11c4d11b221ce3143a99c1d383c"
	},
	{
		"id": "195de1075a12",
		"ts": "2026-08-16T08:23:37.451Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26606523.71,
		"hash": "195de1075a1234916c11d7c7581bbc8f1c86a9cb5272c249abea3ec17b704dcf"
	},
	{
		"id": "f017fe35caaa",
		"ts": "2026-08-16T08:23:37.694Z",
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
		"liquidityUsd": 3886598.34,
		"hash": "f017fe35caaaf99471ff0d9ee9c23457dd9ad102b290bc5bed0030939931bca2"
	},
	{
		"id": "1f0b9b853295",
		"ts": "2026-08-16T08:23:37.925Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2588104.47,
		"hash": "1f0b9b85329576fc6fff9be5d0a56b1876ddf8a721ef4d050399d0fe9463f6ca"
	},
	{
		"id": "4d557e0bb09b",
		"ts": "2026-08-16T08:23:38.164Z",
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
		"liquidityUsd": 271605.7,
		"hash": "4d557e0bb09bba5403483ffdabc48be176039faed92169e4e153a4dee487c848"
	},
	{
		"id": "f176e3c7e122",
		"ts": "2026-08-16T08:23:38.382Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 147785.69,
		"hash": "f176e3c7e122f6350f6ee560f74a04c31fcd640356bf7ff5e82ce1760dbab27d"
	},
	{
		"id": "991caee94837",
		"ts": "2026-08-16T08:23:38.602Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 895145.53,
		"hash": "991caee94837c0e15ae9c52e101bde802d5f766f55fded56ae57c07ec5b4741b"
	},
	{
		"id": "415d030ba838",
		"ts": "2026-08-16T08:23:38.824Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1075263.96,
		"hash": "415d030ba83839008c4dd3606216b487768579d3ea5f5072ecb7fb105cf4076a"
	},
	{
		"id": "a9deeac41769",
		"ts": "2026-08-16T08:23:39.046Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 361461.38,
		"hash": "a9deeac417691cb3d0bf3a46e7d6aa398f6086a0e06faa66dc652b2daabd5309"
	},
	{
		"id": "4cc0c3a8015c",
		"ts": "2026-08-16T08:23:39.263Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 146589.43,
		"hash": "4cc0c3a8015c061fba03232afa17a172d20ec2cc2b8e7c4b9f11e48c7be563f7"
	},
	{
		"id": "90b99aafcb7a",
		"ts": "2026-08-16T08:23:39.484Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6323710.96,
		"hash": "90b99aafcb7a627781ae6b4d110b527c4e440ba1cc700061d2fbc2f6d6ea6e17"
	},
	{
		"id": "51b3b691eaac",
		"ts": "2026-08-16T08:23:39.702Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9440217.3,
		"hash": "51b3b691eaac3f457817d9fdb2801125272ce1921ece3759aaeb91f995af622e"
	},
	{
		"id": "296c83b24d2b",
		"ts": "2026-08-16T08:23:39.994Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 8.35,
		"hash": "296c83b24d2b9b54821eebb308d70b0d8d0aa6be81658a4031dfa1f3a0adf547"
	},
	{
		"id": "66284e1f8852",
		"ts": "2026-08-16T08:23:40.209Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 620825.07,
		"hash": "66284e1f8852e1c063e0104109c0be116fdd97f85936293972926dc377ab411d"
	},
	{
		"id": "9152f4c3e086",
		"ts": "2026-08-16T07:27:18.609Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111444563.54,
		"hash": "9152f4c3e08693b45a5936f93d7d65901b8e7251e96d4300062a49fcb9e5c06f"
	},
	{
		"id": "02c152ca3926",
		"ts": "2026-08-16T07:27:19.053Z",
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
		"liquidityUsd": 16549155.07,
		"hash": "02c152ca39266c90be5d125ccf98e9dd1a889cb39b8430d6e6730c736f2bfebc"
	},
	{
		"id": "fe9fc37a2bb7",
		"ts": "2026-08-16T07:27:19.300Z",
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
		"liquidityUsd": 804850.35,
		"hash": "fe9fc37a2bb7a4e6a20878d40c20389fedc4c316efd4efcae76b25411a922d9d"
	},
	{
		"id": "d135370f44c7",
		"ts": "2026-08-16T07:27:19.542Z",
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
		"liquidityUsd": 26604961.43,
		"hash": "d135370f44c7576912be71a4e7e8db9340af23988de82b5370b4d7d9d239dcdc"
	},
	{
		"id": "37433444498d",
		"ts": "2026-08-16T07:27:19.792Z",
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
		"liquidityUsd": 4145922.19,
		"hash": "37433444498dc7b3da6810706094815ed920f7de511abb0bc3628195590a20ab"
	},
	{
		"id": "66eefb20fa01",
		"ts": "2026-08-16T07:27:20.024Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887120.85,
		"hash": "66eefb20fa016975091cce1d1ea5f8e1b34f16040d1cab95371971966464d9aa"
	},
	{
		"id": "82615a85e60f",
		"ts": "2026-08-16T07:27:20.270Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26604961.43,
		"hash": "82615a85e60f41f61d5030929977e306c1167e48b298fdf1135ae45adabc451e"
	},
	{
		"id": "bda36a2740fb",
		"ts": "2026-08-16T07:27:20.510Z",
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
		"liquidityUsd": 3887937.68,
		"hash": "bda36a2740fb01aefb68e48218ed77d5bf593c45d166c26123f9673c4f8ee20c"
	},
	{
		"id": "7a0546cf4781",
		"ts": "2026-08-16T07:27:20.754Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2580234.65,
		"hash": "7a0546cf478189cfdece04116ee86d7d09d88bf210e57b9f22e0a72143027efd"
	},
	{
		"id": "e9776784a294",
		"ts": "2026-08-16T07:27:20.991Z",
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
		"liquidityUsd": 275448.73,
		"hash": "e9776784a2941f9a2026a7d07f804d652bb13abb6262797a7e72443eea651068"
	},
	{
		"id": "fed88b765087",
		"ts": "2026-08-16T07:27:21.219Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 897257.01,
		"hash": "fed88b765087b86818bb65bdc84c2a587be83c433f2cef36c7cd19628a70fb70"
	},
	{
		"id": "6358016c71df",
		"ts": "2026-08-16T07:27:21.569Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 151953.26,
		"hash": "6358016c71df66209d2dc71a6d86f1ae1d1fd59bb7a60896129d0a0f09331e08"
	},
	{
		"id": "ada8bc9cfa0a",
		"ts": "2026-08-16T07:27:21.796Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1003630.28,
		"hash": "ada8bc9cfa0a1cdf2a6d6fbbb28f1d88c4dffc9d69367a87e62c19b542a70328"
	},
	{
		"id": "6ae11d3b5cad",
		"ts": "2026-08-16T07:27:22.017Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5421373.46,
		"hash": "6ae11d3b5cad0506a899ca680f90bb12f49b4c0bc00f341e462d0a23deef5f09"
	},
	{
		"id": "badb2a5ea67f",
		"ts": "2026-08-16T07:27:22.245Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9440542.69,
		"hash": "badb2a5ea67fd41811aeff800640a3fd110d3b739c4e1f7bbddfe5eed96dc68a"
	},
	{
		"id": "b57b3655140e",
		"ts": "2026-08-16T07:27:22.467Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 362527.82,
		"hash": "b57b3655140ef99b3da5497e00142e7a925aabf0e9b08203919282f07117a038"
	},
	{
		"id": "91168564e28f",
		"ts": "2026-08-16T07:27:22.697Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 43299.38,
		"hash": "91168564e28fd5fe8bbbc8062affb8a8230a1e197d33801b1d4995166f8e0c44"
	},
	{
		"id": "1189988716ab",
		"ts": "2026-08-16T07:27:22.921Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 4.68,
		"hash": "1189988716ab3c9e8eea78a216bb8ebacb70523e464efae45ad40a45eb429183"
	},
	{
		"id": "b77dd1511ab4",
		"ts": "2026-08-16T07:27:23.149Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 378029.22,
		"hash": "b77dd1511ab4c890ff7851ac3dbeb026dffd04af5428d9cfd0f7d2237472b68f"
	},
	{
		"id": "48a940827aab",
		"ts": "2026-08-16T06:33:27.091Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111434158.31,
		"hash": "48a940827aabb6ed8bcaeb3dc6e2f742d9d30afda19c6cbb03f519d8866ad027"
	},
	{
		"id": "be44c518fe03",
		"ts": "2026-08-16T06:33:27.439Z",
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
		"liquidityUsd": 17066256.58,
		"hash": "be44c518fe034d64169f94072c41e571341bf4e3567bfffbaef50260a730ddd8"
	},
	{
		"id": "2b8644ad01ca",
		"ts": "2026-08-16T06:33:27.636Z",
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
		"liquidityUsd": 804850.35,
		"hash": "2b8644ad01ca83bb59ea4e2ec23a0b3a5a0ef1ffaf6b1fb37bc9f63604481269"
	},
	{
		"id": "c129e5a205fe",
		"ts": "2026-08-16T06:33:27.880Z",
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
		"liquidityUsd": 26605599.48,
		"hash": "c129e5a205fe43dcff7d859b7b764d2046913ac5493c42e2a06900a79f94c9fe"
	},
	{
		"id": "e7e3f4e7db7a",
		"ts": "2026-08-16T06:33:28.086Z",
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
		"liquidityUsd": 4149266.52,
		"hash": "e7e3f4e7db7af4484054dc69da55db33a256a58d3e98777eea48aa96c92cfaa5"
	},
	{
		"id": "a98d4001e1ea",
		"ts": "2026-08-16T06:33:28.297Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887831.66,
		"hash": "a98d4001e1ea9e8411d1fbf953e13c19564852909bdc0bc881135dfde2cbf500"
	},
	{
		"id": "6766d60d1289",
		"ts": "2026-08-16T06:33:28.500Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26605599.48,
		"hash": "6766d60d1289dd1760e42d1c3c0abddb8daf349873c63bd5f747b5ea94fc8dcc"
	},
	{
		"id": "8bd1f53abea0",
		"ts": "2026-08-16T06:33:28.707Z",
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
		"liquidityUsd": 3884233.88,
		"hash": "8bd1f53abea004c67ad7bd4bb5766f269752d42ac04b5b10777107017809262a"
	},
	{
		"id": "78f111532f25",
		"ts": "2026-08-16T06:33:28.898Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2587075.63,
		"hash": "78f111532f25164de9f7c1a84df9f2f53d4ad7a00aead41ac14a6527ad821a0d"
	},
	{
		"id": "d732b6413eb7",
		"ts": "2026-08-16T06:33:29.097Z",
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
		"liquidityUsd": 278234.49,
		"hash": "d732b6413eb780d925f4441a7849df908be6a8c5df62dafb6ea035e627dafa66"
	},
	{
		"id": "2a478c9dd71c",
		"ts": "2026-08-16T06:33:29.286Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 895147.8,
		"hash": "2a478c9dd71cce32bce2da7f6d9e2bbef05ec1909a0e4aceafb6c65d0b303f9d"
	},
	{
		"id": "32db63533b11",
		"ts": "2026-08-16T06:33:29.467Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 157454.64,
		"hash": "32db63533b11d4acf74917c85672ec528a133c47d5fb4b24606a58f733d2848d"
	},
	{
		"id": "136ce22f96dd",
		"ts": "2026-08-16T06:33:29.653Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5448436.18,
		"hash": "136ce22f96dde39739669d856bb3d459fe26ae6abcbb3771895458ad8e4c4535"
	},
	{
		"id": "1bf72ade29c9",
		"ts": "2026-08-16T06:33:29.859Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9432249.6,
		"hash": "1bf72ade29c9fff8bd85398c194c9ae9cd1905ccb020db650d0117d3a157ac46"
	},
	{
		"id": "3d59a477a00b",
		"ts": "2026-08-16T06:33:30.052Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 357443.06,
		"hash": "3d59a477a00b83c66d7dc04e6a488d19d119109cba9d821624040e320e111664"
	},
	{
		"id": "4f4fb951f824",
		"ts": "2026-08-16T06:33:30.544Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 41153.67,
		"hash": "4f4fb951f8246e9da6738c40b6e40148407ef775af2b072ee5b089c92d53ddb5"
	},
	{
		"id": "6e9854cc851e",
		"ts": "2026-08-16T06:33:30.738Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 999305.22,
		"hash": "6e9854cc851e2515de240cbd58c851c349fc640250e774552447ab385e5c8e2a"
	},
	{
		"id": "3983827be083",
		"ts": "2026-08-16T06:33:30.932Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 50,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 4.68,
		"hash": "3983827be083983eed3c4f80bbb50157f9b6bdf0343a5eeeb45540d3a2caff56"
	},
	{
		"id": "7876ad579225",
		"ts": "2026-08-16T06:33:31.119Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 377318.4,
		"hash": "7876ad579225f4988bac8e242ce3aaa76886c410e248a1e4e85998d1823dc545"
	},
	{
		"id": "3e626d0317b4",
		"ts": "2026-08-16T05:23:46.682Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111385577.79,
		"hash": "3e626d0317b42d98a564eb0f6e35bdfc1a6501444d984316355a2fd03055523d"
	},
	{
		"id": "37a1dcb85723",
		"ts": "2026-08-16T05:23:47.191Z",
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
		"liquidityUsd": 17066000.21,
		"hash": "37a1dcb857237ea5a0ab577e8d7296a47fe1640c2920ad2d1a4b11404a2c979c"
	},
	{
		"id": "2a05ee02a7bf",
		"ts": "2026-08-16T05:23:47.484Z",
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
		"liquidityUsd": 804850.35,
		"hash": "2a05ee02a7bf604d0178607e7d6c55c7d5bcdde645fea8215a86396d883b908d"
	},
	{
		"id": "1bd0c32d64e6",
		"ts": "2026-08-16T05:23:47.758Z",
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
		"liquidityUsd": 26632437.87,
		"hash": "1bd0c32d64e61382e5fb82c1d470650dedcf7fe7f77390ce28731b926d102f47"
	},
	{
		"id": "c3367b03356e",
		"ts": "2026-08-16T05:23:48.036Z",
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
		"liquidityUsd": 4154428.41,
		"hash": "c3367b03356edc8bdf8b47862537de283da67628d26277303989d9cefb1873b6"
	},
	{
		"id": "623caa0ca28e",
		"ts": "2026-08-16T05:23:48.313Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890706.6,
		"hash": "623caa0ca28e8d25d72d0698041ade99d777b90b5605b5f70217cb168e50ae4c"
	},
	{
		"id": "53ae93767a70",
		"ts": "2026-08-16T05:23:48.593Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26632437.87,
		"hash": "53ae93767a70ba7efc1c67f10a5b628c7415f4201a200bc9730203f5a4af0ffc"
	},
	{
		"id": "44c70bed895d",
		"ts": "2026-08-16T05:23:48.884Z",
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
		"liquidityUsd": 4035397.83,
		"hash": "44c70bed895db08852feaf8aadc8aae7bb366d17fc9ea4c2ec0f9b10b4dff32c"
	},
	{
		"id": "57c4ff81ac18",
		"ts": "2026-08-16T05:23:49.166Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2594058.01,
		"hash": "57c4ff81ac1899441df862a038b3d4d5178a38d39e6a0d3f6c93d2e5548dd566"
	},
	{
		"id": "342d7e5799c9",
		"ts": "2026-08-16T05:23:49.446Z",
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
		"liquidityUsd": 278406.95,
		"hash": "342d7e5799c9d7329b9aa7b2ea628c95fa34a5e13a4b50c62b941b5dae4d6f55"
	},
	{
		"id": "95a119995990",
		"ts": "2026-08-16T05:23:49.709Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 897729.85,
		"hash": "95a119995990e418cf00059527c81bca7681aed611eaa9209cad1be016c99404"
	},
	{
		"id": "ce4df6b296a5",
		"ts": "2026-08-16T05:23:49.973Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 130278.07,
		"hash": "ce4df6b296a5b368468e9aa970d28751d01177f82d730f7f99d64bb90a8d1a38"
	},
	{
		"id": "b8a17d8b588f",
		"ts": "2026-08-16T05:23:50.307Z",
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
		"liquidityUsd": 5450550.12,
		"hash": "b8a17d8b588f0f8adf7db94063b596eabcdac8b2717e2f2bd201f3bc9aaf1098"
	},
	{
		"id": "9790a8cfd42e",
		"ts": "2026-08-16T05:23:50.564Z",
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
		"liquidityUsd": 9435738.88,
		"hash": "9790a8cfd42ebe5253ece11b792e38977f81ca44c18ee933350836a273e8a2c3"
	},
	{
		"id": "37d1a5ea09a5",
		"ts": "2026-08-16T05:23:50.828Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 362396.68,
		"hash": "37d1a5ea09a55fd741cb1eee48e92e975af644ac80b0807617b9e58b4a8710f5"
	},
	{
		"id": "ad0ac4c42a8e",
		"ts": "2026-08-16T05:23:51.089Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 379284.8,
		"hash": "ad0ac4c42a8e3d549a411d56cc106660bfeec28e6d955deee00c21b693773ad8"
	},
	{
		"id": "81c6e925c6d1",
		"ts": "2026-08-16T05:23:51.361Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1001167.32,
		"hash": "81c6e925c6d1ab5d6b1adbdc1365125cb2563e9533764060aa10ebc0459eb442"
	},
	{
		"id": "13a86154053a",
		"ts": "2026-08-16T05:23:51.620Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 2182.12,
		"hash": "13a86154053a62d9ae6f7462e42d2f7b4d419d81c083a4163cdb50a143b707d2"
	},
	{
		"id": "3e116d7dc543",
		"ts": "2026-08-16T05:23:51.910Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 626599.98,
		"hash": "3e116d7dc5438161848e76aef51780c7fb503e289f59d9b0b80e563470ef78f0"
	},
	{
		"id": "5daaf1efedcb",
		"ts": "2026-08-16T04:31:12.423Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111376219.15,
		"hash": "5daaf1efedcb47c130c0090f50793fd9971730e0f6dcfb86c4c6555372235f00"
	},
	{
		"id": "9fa624439d5e",
		"ts": "2026-08-16T04:31:13.085Z",
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
		"liquidityUsd": 16561033.63,
		"hash": "9fa624439d5ef4a94cf99fe16975ef88fce8c714a27220a2174fe24fb5294004"
	},
	{
		"id": "acdebc6a66e0",
		"ts": "2026-08-16T04:31:13.535Z",
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
		"liquidityUsd": 804850.35,
		"hash": "acdebc6a66e07f76ce280b52bf9f4d3f4a9f78783e111a8d84eafe8add8269c8"
	},
	{
		"id": "91b3d3b64adf",
		"ts": "2026-08-16T04:31:13.985Z",
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
		"liquidityUsd": 26675414.95,
		"hash": "91b3d3b64adf453c71988d73c0c82dde7028e03580f27af795ce1dfbef328ed1"
	},
	{
		"id": "ad8b7490185d",
		"ts": "2026-08-16T04:31:14.226Z",
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
		"liquidityUsd": 4154428.41,
		"hash": "ad8b7490185d9fa3ea70aa08530291bfe5960bc54fcebeaf2878c79849150180"
	},
	{
		"id": "9c1d34dfc489",
		"ts": "2026-08-16T04:31:14.461Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891595.58,
		"hash": "9c1d34dfc4892186b47e7a410b17b9758c859ce0870092a302b912619b689d8b"
	},
	{
		"id": "f6690c696692",
		"ts": "2026-08-16T04:31:14.699Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26675414.95,
		"hash": "f6690c6966921677d4aeb24c8e208c289436d316b4f2f72982d6d59ed19f8dfc"
	},
	{
		"id": "0b97b708dd83",
		"ts": "2026-08-16T04:31:15.199Z",
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
		"liquidityUsd": 4038064.37,
		"hash": "0b97b708dd837ba54e5b7374143c2196d663c7eca8b166fe777781a0553696ec"
	},
	{
		"id": "f60e28d83c4c",
		"ts": "2026-08-16T04:31:15.438Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2593765.53,
		"hash": "f60e28d83c4cc1bfd518fdf83263057f8c7687f096f2c1a35bbb98f06283d517"
	},
	{
		"id": "8f34cc533a07",
		"ts": "2026-08-16T04:31:15.673Z",
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
		"liquidityUsd": 278679.16,
		"hash": "8f34cc533a07dea7bf3ac5e17536419e6552f9bfe6fa49fb77d47fcf4a2a718e"
	}
]
