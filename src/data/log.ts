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
	"updatedAt": "2026-07-02T21:01:19.167Z",
	"tokensScored": 1083,
	"verdictsIssued": 1083,
	"safe": 954,
	"risky": 103,
	"likelyRug": 26,
	"ticks": 78
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "923fdee552e1",
		"ts": "2026-07-02T21:01:13.999Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 98030555.14,
		"hash": "923fdee552e105637d61145e22cfd075ae8761c5860430abdf5cbd42b2c886b1"
	},
	{
		"id": "fd93343011c3",
		"ts": "2026-07-02T21:01:14.479Z",
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
		"liquidityUsd": 14173071.41,
		"hash": "fd93343011c36bce98fdee723b558e6acfdb971158b7e31a67ee4b93a7ac3538"
	},
	{
		"id": "a2b8a65e610c",
		"ts": "2026-07-02T21:01:14.756Z",
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
		"liquidityUsd": 1394059.65,
		"hash": "a2b8a65e610c3a32f6ed745922ab15a9ea7d09067abc4ed79cebeb36a7d7b347"
	},
	{
		"id": "162aae8149ad",
		"ts": "2026-07-02T21:01:15.013Z",
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
		"liquidityUsd": 28704238.61,
		"hash": "162aae8149ad00ce0e9a5e8480732f198e1393925f3167472c72f1de630b9762"
	},
	{
		"id": "2727b3f0170f",
		"ts": "2026-07-02T21:01:15.266Z",
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
		"liquidityUsd": 4030003.7,
		"hash": "2727b3f0170f730046e0fe12aeac85ce0a8bdc34e8eb3ebe21f9f6ff8cfe121d"
	},
	{
		"id": "a89690bf4590",
		"ts": "2026-07-02T21:01:15.535Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 971878.27,
		"hash": "a89690bf45903214a895771c8b736abc137eed9dcec9ddbe0eeac8f61ce570ee"
	},
	{
		"id": "9d0da3aaff2c",
		"ts": "2026-07-02T21:01:15.787Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28704238.43,
		"hash": "9d0da3aaff2caa57bf11d64786ed33bb59d4016c4028126393167f18618c3345"
	},
	{
		"id": "df1290e0fc6e",
		"ts": "2026-07-02T21:01:16.044Z",
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
		"liquidityUsd": 2375462.16,
		"hash": "df1290e0fc6ec97521ee557bbe94621860c481ecc949e48442b09186319ff0d9"
	},
	{
		"id": "e3795dc6c4b3",
		"ts": "2026-07-02T21:01:16.311Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3494310.38,
		"hash": "e3795dc6c4b353e024b3e05527280f997b569c9b2a5bb953b9e1d265ff0f1c52"
	},
	{
		"id": "7474b1f295aa",
		"ts": "2026-07-02T21:01:16.562Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4816614.28,
		"hash": "7474b1f295aa25072c66a2a30d07a9538eaf4aacf9408c6d41a3725a08fcfeea"
	},
	{
		"id": "e2c12f7375f3",
		"ts": "2026-07-02T21:01:16.814Z",
		"symbol": "OpenAI",
		"token": "0x43D6e8F4e413028365E9cf83D1e6c2181e8e3b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 518476.05,
		"hash": "e2c12f7375f3d2c9cf99113add93c0ded6fd622f5ec67952cf469aeed5d4f392"
	},
	{
		"id": "4995ea76c96b",
		"ts": "2026-07-02T21:01:17.527Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8120658.13,
		"hash": "4995ea76c96b97114ae468a7ee500cd4c777e519e2410b0fb5810102417c38b0"
	},
	{
		"id": "ccd47718268f",
		"ts": "2026-07-02T21:01:18.439Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244082.78,
		"hash": "ccd47718268f8a960e56fe7afd7722b828f6026c93b80213c7aa6fff2bc5c169"
	},
	{
		"id": "5446c5433370",
		"ts": "2026-07-02T21:01:18.690Z",
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
		"liquidityUsd": 1499824.26,
		"hash": "5446c5433370558bd53bacae608681426b56bdf2b6b972fbf8e1510e255bf6b0"
	},
	{
		"id": "2f7b160dd7ce",
		"ts": "2026-07-02T21:01:18.926Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 543258.23,
		"hash": "2f7b160dd7cef8a674ac7343421ad880cf463c86eaf0d229a9d130a996c807b1"
	},
	{
		"id": "66766e3a14d1",
		"ts": "2026-07-02T21:01:19.166Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1699397.98,
		"hash": "66766e3a14d1636769dfc99e0b2d90c083d27b38e3747e96994437fad2f9564d"
	},
	{
		"id": "aa1cf61404ff",
		"ts": "2026-07-02T19:19:30.597Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 98030114.75,
		"hash": "aa1cf61404ff0cfe43126b029c1c7fef582523c1c84d6648edcc9414603d9242"
	},
	{
		"id": "a406b83f2d35",
		"ts": "2026-07-02T19:19:31.089Z",
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
		"liquidityUsd": 13890762.75,
		"hash": "a406b83f2d356718d648f96715d080fc1ce278d09e12b8f30bf72eedcc3d4922"
	},
	{
		"id": "cbaa702645c9",
		"ts": "2026-07-02T19:19:31.563Z",
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
		"liquidityUsd": 1385875.73,
		"hash": "cbaa702645c9953b800d214e778263878409de51f34a58654f45fc0aaf24273e"
	},
	{
		"id": "20d7ccd1e651",
		"ts": "2026-07-02T19:19:31.824Z",
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
		"liquidityUsd": 28744505.42,
		"hash": "20d7ccd1e6518b8d07f68680ee25048af16aa69a4addd9674006536c642589d0"
	},
	{
		"id": "2ac924d276b2",
		"ts": "2026-07-02T19:19:32.081Z",
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
		"liquidityUsd": 4037106.33,
		"hash": "2ac924d276b2f136619563e792bdec96bd5cd9c82590f4b9ed27aa3c9721d5a5"
	},
	{
		"id": "d1d7ef5d5b46",
		"ts": "2026-07-02T19:19:32.346Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 971875.93,
		"hash": "d1d7ef5d5b464c900eb7c3e8cbd26df2a9115b82c71a182c66fbd0c2d6a8ab97"
	},
	{
		"id": "5721b68f571e",
		"ts": "2026-07-02T19:19:32.628Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28744505.42,
		"hash": "5721b68f571ee945fb164f6240989eb126a03fedb384073916ac65e8a334e13e"
	},
	{
		"id": "4517af4ff338",
		"ts": "2026-07-02T19:19:32.906Z",
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
		"liquidityUsd": 2320391.41,
		"hash": "4517af4ff3388b2cdf593db8c05a4a0d96c376d812862f52dae196f386a426e6"
	},
	{
		"id": "72b871d09adf",
		"ts": "2026-07-02T19:19:33.169Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4847811.09,
		"hash": "72b871d09adff29bb47931f5b50f05cdd7b6e4dbe33d84aa0801b1bdd2ffa8d5"
	},
	{
		"id": "241cf66b04cc",
		"ts": "2026-07-02T19:19:33.433Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3494472.47,
		"hash": "241cf66b04cce8f599ecbb8d7828db17a32ca635ff8964da31f21db589fa3e4d"
	},
	{
		"id": "a0e58268b481",
		"ts": "2026-07-02T19:19:33.680Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8108606.76,
		"hash": "a0e58268b4819e8a0d94a3a128f8a4bd23db41629c4cd6914e98749795b88473"
	},
	{
		"id": "00ef534fcd1a",
		"ts": "2026-07-02T19:19:33.936Z",
		"symbol": "OpenAI",
		"token": "0x43D6e8F4e413028365E9cf83D1e6c2181e8e3b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 518317.85,
		"hash": "00ef534fcd1a9f04d11dd88311e453d141b7934fdb03e90001dd13ef8f08fce0"
	},
	{
		"id": "69c82b9dc0eb",
		"ts": "2026-07-02T19:19:34.191Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247523.52,
		"hash": "69c82b9dc0eba4b27361d58eb217a6be08feebc7de42382d22eb37da66efc36b"
	},
	{
		"id": "7aa482df3889",
		"ts": "2026-07-02T19:19:34.440Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 539726.99,
		"hash": "7aa482df3889939753eba618f7ad5644b46d903a78a778671e111f7508c0cfd5"
	},
	{
		"id": "7fe79c3e8064",
		"ts": "2026-07-02T19:19:34.682Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1943197.41,
		"hash": "7fe79c3e8064172c0ea87567df775825d9a457bcea3e3969b69a5133251b5dd8"
	},
	{
		"id": "461c69aa7e37",
		"ts": "2026-07-02T19:19:34.930Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1726456.74,
		"hash": "461c69aa7e37bd551a585a9cd5d2aa58b086f771e81179608f40a8c509494b5e"
	},
	{
		"id": "d743be0a3be8",
		"ts": "2026-07-02T17:43:19.289Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 98572910.6,
		"hash": "d743be0a3be8018bbaa40bc2c13719ece4310c329546ae72319cc6063cdf79ab"
	},
	{
		"id": "27c6f183d9c6",
		"ts": "2026-07-02T17:43:19.972Z",
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
		"liquidityUsd": 13164010.75,
		"hash": "27c6f183d9c60a9eceef5b6cc1de850d73b6a9d89ec80b426aae0d187391a902"
	},
	{
		"id": "eb102bd9da09",
		"ts": "2026-07-02T17:43:20.472Z",
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
		"liquidityUsd": 1387749.85,
		"hash": "eb102bd9da09d871c5d15a61f2dcb5dfe9ed6729b04e3bd9107537cc94174a90"
	},
	{
		"id": "5c253af13a90",
		"ts": "2026-07-02T17:43:20.937Z",
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
		"liquidityUsd": 28730435.34,
		"hash": "5c253af13a9074226d4760ca6cb24399ecca1d9a908fc40b26244a5e4c6d5030"
	},
	{
		"id": "45820f0d929a",
		"ts": "2026-07-02T17:43:21.400Z",
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
		"liquidityUsd": 4040355.78,
		"hash": "45820f0d929a66618a7a23ceace33a12b89345e5c573dcbcedc2d788951f063d"
	},
	{
		"id": "1bbcafc0aa8e",
		"ts": "2026-07-02T17:43:21.660Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 974545.1,
		"hash": "1bbcafc0aa8e6f989e0d6e78943272b4c84ffa91c811128f27ed907ae971d198"
	},
	{
		"id": "b8f7f8819b1f",
		"ts": "2026-07-02T17:43:21.921Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28730435.34,
		"hash": "b8f7f8819b1ffbad6667362519b4b99c3d9ce7d2feeaa78656f0cb972d9b91f1"
	},
	{
		"id": "c300433135c3",
		"ts": "2026-07-02T17:43:22.245Z",
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
		"liquidityUsd": 2344641.8,
		"hash": "c300433135c3adc86d7b228e84fbff038e32b4314c2f282c94b19491762ac600"
	},
	{
		"id": "43a25405cf39",
		"ts": "2026-07-02T17:43:22.500Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4848656.7,
		"hash": "43a25405cf39a626054d3e6014fe5c180411422e1765fd0dfe08c0a99550ce4d"
	},
	{
		"id": "4ffcd6e85ae4",
		"ts": "2026-07-02T17:43:22.788Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3646615.24,
		"hash": "4ffcd6e85ae4ccc0271ab920952a80322aff0ccc16182eea036d3904f9d7971b"
	},
	{
		"id": "1b1184309ebc",
		"ts": "2026-07-02T17:43:23.020Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8153228.01,
		"hash": "1b1184309ebcc0f6e5455efc9ad667f7d6717695c6467f61004c86c183d9c466"
	},
	{
		"id": "a6f58081a9b4",
		"ts": "2026-07-02T17:43:23.531Z",
		"symbol": "OpenAI",
		"token": "0x43D6e8F4e413028365E9cf83D1e6c2181e8e3b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 518227.19,
		"hash": "a6f58081a9b462d63303dd37c47e6097851a269a93e6c2b743ce6c3f42851d5a"
	},
	{
		"id": "6c1416bebcf2",
		"ts": "2026-07-02T17:43:23.777Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 249189.35,
		"hash": "6c1416bebcf29f2a2eca00cb12908427231bf0b1de32e05f67e1962210adc212"
	},
	{
		"id": "c5b70e3efbcf",
		"ts": "2026-07-02T17:43:24.010Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 539502.65,
		"hash": "c5b70e3efbcfcab987068ad14d3ce41f13d0f5fef68dbc88313fff247bec5088"
	},
	{
		"id": "96d2ba5e7991",
		"ts": "2026-07-02T17:43:24.256Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1923382.91,
		"hash": "96d2ba5e7991570b8441aea41f295cd10a81f21021e0de4b3865916cc87bcb03"
	},
	{
		"id": "9fd7f0b3c59e",
		"ts": "2026-07-02T17:43:24.488Z",
		"symbol": "OpenAI",
		"token": "0x7C797DA3704b6F682917005b01C89710Ec17db07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 22264.52,
		"hash": "9fd7f0b3c59efe3e070551ae14b6fc8c4eecd70a0d3a01ed19bbf77af24a7f2c"
	},
	{
		"id": "b07bb9099845",
		"ts": "2026-07-02T15:12:29.978Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 98395415.48,
		"hash": "b07bb9099845a2d60e45e89f02e0c3ff57cffae1daf2f893a1a26854d5dd26a8"
	},
	{
		"id": "eefe003c3171",
		"ts": "2026-07-02T15:12:31.336Z",
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
		"liquidityUsd": 13832277.3,
		"hash": "eefe003c3171a39c824004913c80b5c3a35066a76a4afe0d7871a68f0e4391f3"
	},
	{
		"id": "75f85dc49b1e",
		"ts": "2026-07-02T15:12:31.530Z",
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
		"liquidityUsd": 1385969.84,
		"hash": "75f85dc49b1ecdea480e221a188244f9e7488d705e5f2cd32ad0c030264eeb37"
	},
	{
		"id": "367d8f22d802",
		"ts": "2026-07-02T15:12:31.718Z",
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
		"liquidityUsd": 28789041.65,
		"hash": "367d8f22d802dcd26bc1fcf76d4449ff7853a839aaf9bfa81aa17483ccca0c22"
	},
	{
		"id": "cb0b2b757e2b",
		"ts": "2026-07-02T15:12:31.909Z",
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
		"liquidityUsd": 4028063.27,
		"hash": "cb0b2b757e2b7fbd6fabf5703dd41e9f353964181ff75fc03b52b7c5c395f06d"
	},
	{
		"id": "5c95cac499e9",
		"ts": "2026-07-02T15:12:32.098Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 967081.04,
		"hash": "5c95cac499e919130cdc14890ec09eed3bc1ce43a05a9e872ba5f9b094e427c8"
	},
	{
		"id": "1a32a1ba2a60",
		"ts": "2026-07-02T15:12:32.281Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28787472.91,
		"hash": "1a32a1ba2a6022b506fc5e0caee57991c8bafbc549e2584cd5f8b88243204c7b"
	},
	{
		"id": "690107cdf8af",
		"ts": "2026-07-02T15:12:32.469Z",
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
		"liquidityUsd": 2341743.44,
		"hash": "690107cdf8af4311dc01e5bd89cd659065c80ef85a94671a8273609df73e8878"
	},
	{
		"id": "484a0dae6b36",
		"ts": "2026-07-02T15:12:32.654Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5020762.88,
		"hash": "484a0dae6b36e454d19cdaadfc46e247045a6f19b7e5e7ccdacb73e1b2fbf7ff"
	},
	{
		"id": "369758d8d217",
		"ts": "2026-07-02T15:12:32.839Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3641647.14,
		"hash": "369758d8d217c4edc3f0cde2bc4c8ff7408bb384591a7bf78a8a2356423755ef"
	},
	{
		"id": "f53ae7a5142f",
		"ts": "2026-07-02T15:12:33.011Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8116573.03,
		"hash": "f53ae7a5142f27aad8104c18b265c0ca2f550763b0bde7a76fd9594f88c7da6f"
	},
	{
		"id": "1d4f8903d1f0",
		"ts": "2026-07-02T15:12:33.185Z",
		"symbol": "OpenAI",
		"token": "0x43D6e8F4e413028365E9cf83D1e6c2181e8e3b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517664.15,
		"hash": "1d4f8903d1f037706154d1cfd3f6f00557c3cb1ce6cf630b879862846e23b8ca"
	},
	{
		"id": "e5988ef778b7",
		"ts": "2026-07-02T15:12:33.359Z",
		"symbol": "OpenAI",
		"token": "0x7C797DA3704b6F682917005b01C89710Ec17db07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 22264.52,
		"hash": "e5988ef778b734e98c34267ec6037f71ebceaf58b1836345b99d90816936e702"
	},
	{
		"id": "ebd58a39ddcd",
		"ts": "2026-07-02T15:12:34.762Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 546034.83,
		"hash": "ebd58a39ddcd7fbff3c3438fb0aa8d2355cf7d6bc033184e6149e9b1de868e53"
	},
	{
		"id": "db68fcfa27d4",
		"ts": "2026-07-02T15:12:34.933Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 321524.35,
		"hash": "db68fcfa27d462ac76b209fabf0dfa510520a088457f30d7236e5ce13a3ff499"
	},
	{
		"id": "2cee79f89a54",
		"ts": "2026-07-02T15:12:35.118Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245366.08,
		"hash": "2cee79f89a54a9e5e90e0a0e5ab3ebe3607edd41f1753809a3f724b97f8801c6"
	},
	{
		"id": "f2c2bd3ce734",
		"ts": "2026-07-02T15:12:36.495Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2030420.15,
		"hash": "f2c2bd3ce7346c56212d0335e01a9d34b097ba91777f9b218d16a75410ee7155"
	},
	{
		"id": "249e20ba85a5",
		"ts": "2026-07-02T12:54:39.178Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 98598015.73,
		"hash": "249e20ba85a549a4d05ff33c4ebc17662226add4a647812cfcb3a72fc5198cc8"
	},
	{
		"id": "453e2d00c098",
		"ts": "2026-07-02T12:54:39.917Z",
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
		"liquidityUsd": 13590335.18,
		"hash": "453e2d00c0983051b9c3ad9f3969d9966c2550bc35cc2a1c8e9a0c527253f47b"
	},
	{
		"id": "dcb397a52977",
		"ts": "2026-07-02T12:54:40.398Z",
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
		"liquidityUsd": 1370765.24,
		"hash": "dcb397a52977cdcd6d4c9233abd4a4d8988a980277625e9689a34c3b812acf7f"
	},
	{
		"id": "b475b71a59be",
		"ts": "2026-07-02T12:54:40.876Z",
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
		"liquidityUsd": 29094862.68,
		"hash": "b475b71a59be7905fbb35b076b5a86ea3952be470e680d2b08406e8cd79c9e7e"
	},
	{
		"id": "7e1de2ccacbb",
		"ts": "2026-07-02T12:54:41.354Z",
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
		"liquidityUsd": 4006020.24,
		"hash": "7e1de2ccacbb6c924ed2f9aec4ff2c4919af3e623dd3357bccdd5633ef496e5f"
	},
	{
		"id": "3ee4e8b07e25",
		"ts": "2026-07-02T12:54:41.616Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 961235.43,
		"hash": "3ee4e8b07e254e7f127489a739a07a0f1c5cef6277ff53dadb1bcbacfcecbea0"
	},
	{
		"id": "4be87986e430",
		"ts": "2026-07-02T12:54:41.873Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29094862.68,
		"hash": "4be87986e4307f4b239149ab5ed5f1ef75443c5dfdb122a6b55b5999ef4cfad0"
	},
	{
		"id": "bb85224f8e05",
		"ts": "2026-07-02T12:54:42.133Z",
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
		"liquidityUsd": 2282980.03,
		"hash": "bb85224f8e0566902272677ece1818547e924af3bae258ea2096c2fa754ec1ca"
	},
	{
		"id": "02d069e027b1",
		"ts": "2026-07-02T12:54:42.393Z",
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
		"liquidityUsd": 8037183.62,
		"hash": "02d069e027b14acc4290731c072b426ff947fc989b961ed8cef1095f8c5c4293"
	},
	{
		"id": "8933effcafd0",
		"ts": "2026-07-02T12:54:42.647Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3672615.97,
		"hash": "8933effcafd0735983fb9b548a1b0ebdb0ad79c06312b4413659ad725cc5a6a8"
	},
	{
		"id": "5390ec1e8e91",
		"ts": "2026-07-02T12:54:42.889Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5044543.71,
		"hash": "5390ec1e8e916f21e31d841a2c6581ab7b35d6c3d854a99480d7a54326792a83"
	},
	{
		"id": "8806317542b0",
		"ts": "2026-07-02T12:54:43.133Z",
		"symbol": "OpenAI",
		"token": "0x7C797DA3704b6F682917005b01C89710Ec17db07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 22264.52,
		"hash": "8806317542b0c60812f2bb403a005dd39e4436a68a9854d1a8251da06191c940"
	},
	{
		"id": "3433a8343e51",
		"ts": "2026-07-02T12:54:43.377Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 294674.36,
		"hash": "3433a8343e51f0217a81a18392b0a3a0cb5feff1ab9692259ef44f3759a8b956"
	},
	{
		"id": "21d07da9d304",
		"ts": "2026-07-02T12:54:43.617Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 243654.06,
		"hash": "21d07da9d304c4ff11de1485ac4a058f04bb4106e3647bcaed8dd6dac5c5de27"
	},
	{
		"id": "92d8fad215ed",
		"ts": "2026-07-02T12:54:43.860Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 555089.82,
		"hash": "92d8fad215ed3c5c72c4ef6af7d992a019ec39f1453029ed1962d76959d5d75d"
	},
	{
		"id": "19594748cb6c",
		"ts": "2026-07-02T12:54:44.103Z",
		"symbol": "OpenAI",
		"token": "0x43D6e8F4e413028365E9cf83D1e6c2181e8e3b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517708.52,
		"hash": "19594748cb6c92ee9f367413b215472d0eea361ecbf147ec68ef573a5c99d30e"
	},
	{
		"id": "8fbde15bc14b",
		"ts": "2026-07-02T12:54:44.343Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1973138.8,
		"hash": "8fbde15bc14b8205c80d44b63f57a1101d5b8a114063f72bde1acdd829088f34"
	},
	{
		"id": "ec229f3f5e7c",
		"ts": "2026-07-02T10:08:00.016Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 98045215.34,
		"hash": "ec229f3f5e7c8d2e9fcd06b52cac4dc78381b536e5212104fdeff8f9fc40028b"
	},
	{
		"id": "92a9a1e891f9",
		"ts": "2026-07-02T10:08:00.939Z",
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
		"liquidityUsd": 13341734.26,
		"hash": "92a9a1e891f98ab733e659ce41e23330b800e1c745e302384f0e89d3a5b573ab"
	},
	{
		"id": "438962bc0188",
		"ts": "2026-07-02T10:08:01.530Z",
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
		"liquidityUsd": 1355397.3,
		"hash": "438962bc0188613b42e7213052fb74f1a7de54bb5e8e7972d13f2079f2c293b1"
	},
	{
		"id": "f34228ba7a2a",
		"ts": "2026-07-02T10:08:02.091Z",
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
		"liquidityUsd": 28190532.85,
		"hash": "f34228ba7a2a53189c405975cb03e4826f6103b915902e66224c9a08bb5a4ccb"
	},
	{
		"id": "8716025f7bed",
		"ts": "2026-07-02T10:08:02.598Z",
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
		"liquidityUsd": 4213609.91,
		"hash": "8716025f7bedc49521559bbbb8f181f358976fa953839a167fc8f692055545be"
	},
	{
		"id": "0339bfb7de4f",
		"ts": "2026-07-02T10:08:03.132Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 955680.3,
		"hash": "0339bfb7de4f5f46810458a88516347057e1522f17acc20e4ad42d81fc9587ca"
	},
	{
		"id": "bf7984428599",
		"ts": "2026-07-02T10:08:03.450Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28190532.85,
		"hash": "bf7984428599986519b83da34b66062053390061330b007a572a6e2c560ded1f"
	},
	{
		"id": "9a38fe3e7df8",
		"ts": "2026-07-02T10:08:03.846Z",
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
		"liquidityUsd": 2200612.2,
		"hash": "9a38fe3e7df8c8a208a355f29b382657acdba4cf4db990585b5691592e403b29"
	},
	{
		"id": "91741f17938e",
		"ts": "2026-07-02T10:08:04.323Z",
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
		"liquidityUsd": 7973859.3,
		"hash": "91741f17938efe2a6e5d498ef64f5301b72ca2b8bbe3131716dd2c6798622ba2"
	},
	{
		"id": "76d888883a71",
		"ts": "2026-07-02T10:08:04.586Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3534052.34,
		"hash": "76d888883a710317d19a8b30b0182acecb50ce6336438d13bb3e4460162eed90"
	},
	{
		"id": "f7c10b8ade37",
		"ts": "2026-07-02T10:08:04.865Z",
		"symbol": "OpenAI",
		"token": "0x7C797DA3704b6F682917005b01C89710Ec17db07",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"medium_liquidity",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 22264.52,
		"hash": "f7c10b8ade379ae7d9634b51086354bc83cad657e12a0a2d992a881a2df59291"
	},
	{
		"id": "20be8aba63a3",
		"ts": "2026-07-02T10:08:05.104Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4629804.09,
		"hash": "20be8aba63a3dd53b3c6dd34051168c0a70a595f97d22f281c68d381e42baa98"
	},
	{
		"id": "522418102c78",
		"ts": "2026-07-02T10:08:05.351Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 307143.71,
		"hash": "522418102c785e47837c810cf9622d8a3c18974a9fb202eff5dd340d6c5ac30e"
	},
	{
		"id": "ddbcc894dfd8",
		"ts": "2026-07-02T10:08:05.590Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246874.55,
		"hash": "ddbcc894dfd8483c5c8704d6d138099a3863089187c981f264100ef50677ecac"
	},
	{
		"id": "f4c489144bd5",
		"ts": "2026-07-02T10:08:05.845Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 554752.57,
		"hash": "f4c489144bd597f54bf0496726f2c7013666f3d651d1302b2b4eaad9afde983a"
	},
	{
		"id": "c282c9a08c3b",
		"ts": "2026-07-02T10:08:06.083Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1922405.03,
		"hash": "c282c9a08c3b4e3c3aa3c29c085176aee66ea4dea7cdf820f5a9b755ffd004b2"
	},
	{
		"id": "317533ab28e2",
		"ts": "2026-07-02T10:08:06.332Z",
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
		"liquidityUsd": 1310236.16,
		"hash": "317533ab28e25b5fd85db275d246143d42eab84956ca21f8178f6e3215294718"
	},
	{
		"id": "c8a395e4ce2a",
		"ts": "2026-07-02T06:38:54.938Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 97472599.01,
		"hash": "c8a395e4ce2a8f37a9946d08c782a0117a7c4f87990431990a6cb5bdec3ef958"
	},
	{
		"id": "19e32ba7e47f",
		"ts": "2026-07-02T06:38:55.644Z",
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
		"liquidityUsd": 13150273.44,
		"hash": "19e32ba7e47f8c774442e12c1a61c036678d0c1e13d5c1578f1d064aa738db26"
	},
	{
		"id": "b76ee5bcac77",
		"ts": "2026-07-02T06:38:56.083Z",
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
		"liquidityUsd": 1336674.33,
		"hash": "b76ee5bcac771c38a5f951da8f2389b2b5311dbcfb3af62c40f43d9afa43574a"
	},
	{
		"id": "d36894f0d48a",
		"ts": "2026-07-02T06:38:56.523Z",
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
		"liquidityUsd": 27624491.77,
		"hash": "d36894f0d48a5ca616a6783ab57980729b76c2dfb3dd1c526ae5d60e8ab01f31"
	},
	{
		"id": "2cea23fbee76",
		"ts": "2026-07-02T06:38:56.962Z",
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
		"liquidityUsd": 4184448.65,
		"hash": "2cea23fbee76c65ca0d4bb0f63255612b7bd0860c6b8a38649fdff380b3d57fd"
	},
	{
		"id": "c2061823f242",
		"ts": "2026-07-02T06:38:57.198Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 936846.97,
		"hash": "c2061823f242c532c3fcc258a66d7b633fd39a360d8bb52b180df9d32cf7a6e1"
	},
	{
		"id": "be05bd9ea168",
		"ts": "2026-07-02T06:38:57.431Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27624491.77,
		"hash": "be05bd9ea168b2898c4e222a4b8261956d315d4996c7646ad75047a70b78c3c0"
	},
	{
		"id": "358d768a8987",
		"ts": "2026-07-02T06:38:57.665Z",
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
		"liquidityUsd": 2179597.29,
		"hash": "358d768a89877b3ac0225b4a05e84ac90640a14e26361bd06376b03967edac96"
	},
	{
		"id": "fe26a6da7689",
		"ts": "2026-07-02T06:38:57.905Z",
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
		"liquidityUsd": 8023847.09,
		"hash": "fe26a6da76898a76b43ccf7ede967a4d39f9e285485800e0a3ff50f57b8d01e4"
	},
	{
		"id": "ad5454f172c5",
		"ts": "2026-07-02T06:38:58.140Z",
		"symbol": "OpenAI",
		"token": "0x7C797DA3704b6F682917005b01C89710Ec17db07",
		"score": 53,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.06,
		"flags": [
			"low_liquidity",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 8036.45,
		"hash": "ad5454f172c5a87d6a846be2baacce5246eda860d7380e9a04c45333e199f83b"
	},
	{
		"id": "f28952d0a536",
		"ts": "2026-07-02T06:38:58.361Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7155737.98,
		"hash": "f28952d0a536ec2dfe25cb8b18624f479c5f9c58f33c76eef03a44a11bbd59bb"
	},
	{
		"id": "7299d6161fc6",
		"ts": "2026-07-02T06:38:58.580Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 287832.74,
		"hash": "7299d6161fc6942b62f649b2b966a0fbdd6c0f809114a8c61136d64be841699a"
	},
	{
		"id": "64ab9ba046a1",
		"ts": "2026-07-02T06:38:58.800Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 559275.92,
		"hash": "64ab9ba046a1f112b07d7073822dbf0a009b6308e35dcd71bbccbe92e2312554"
	},
	{
		"id": "b65ffa047a55",
		"ts": "2026-07-02T06:38:59.019Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4348794.93,
		"hash": "b65ffa047a554d049dfae6b24a5a34026a0da65f3adeb926406701afb5c2252c"
	},
	{
		"id": "c930ae675a2d",
		"ts": "2026-07-02T06:38:59.240Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1879826.55,
		"hash": "c930ae675a2d8a520b160fa71778f00ea5fcd16e6c804f6399aa49c96c6a2278"
	},
	{
		"id": "29649f14e93a",
		"ts": "2026-07-02T06:38:59.460Z",
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
		"liquidityUsd": 1339296.63,
		"hash": "29649f14e93a863230386733adae3bd0795e1bb33f1243edfa006c26b466eee0"
	},
	{
		"id": "8d0e018f7f7e",
		"ts": "2026-07-02T06:38:59.679Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1594538.8,
		"hash": "8d0e018f7f7e37a95af6eda55581cb9e2ea98419df0aead921d792cd8bd77314"
	},
	{
		"id": "89a212b62554",
		"ts": "2026-07-02T02:53:52.619Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 97422298.39,
		"hash": "89a212b625544cc93e37305068c0309ea06999dde84b473856d9f91176ad034c"
	},
	{
		"id": "130e4c0d29d9",
		"ts": "2026-07-02T02:53:52.892Z",
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
		"liquidityUsd": 13276815.04,
		"hash": "130e4c0d29d9468cb677d185faba4e493454fd8eda8c618e01dc8e895ca14bfe"
	},
	{
		"id": "ab23936b8939",
		"ts": "2026-07-02T02:53:53.390Z",
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
		"liquidityUsd": 1343864.41,
		"hash": "ab23936b8939f625dfb8452f4e5fe2476806164507fc69580e133e2f1fe1bf5d"
	},
	{
		"id": "b4dc057ab2d6",
		"ts": "2026-07-02T02:53:53.873Z",
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
		"liquidityUsd": 26664583.49,
		"hash": "b4dc057ab2d692678cab70350e8a1ea771f5e65cca07a45b1a703ad815e43a8c"
	},
	{
		"id": "78424c551720",
		"ts": "2026-07-02T02:53:54.138Z",
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
		"liquidityUsd": 4170063.5,
		"hash": "78424c551720c3d61936b50870046d629304303418c9076c7a145426b0546809"
	},
	{
		"id": "1f7b2db2c46f",
		"ts": "2026-07-02T02:53:54.392Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 923098.92,
		"hash": "1f7b2db2c46fdaf55d47b7ce0c18bb3459473af9a8c1f4528976e2dee7741ec5"
	},
	{
		"id": "cf737c94c494",
		"ts": "2026-07-02T02:53:54.652Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26664583.49,
		"hash": "cf737c94c494acc321fd9e6a8b555b9c2a52830a1760ca2e3f3f689ec2f32195"
	},
	{
		"id": "3e3da6fdb5d8",
		"ts": "2026-07-02T02:53:55.147Z",
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
		"liquidityUsd": 2168508.6,
		"hash": "3e3da6fdb5d814ccd172a52f20ac31a0081591b6f28995197c9c2dd544614471"
	},
	{
		"id": "2880af77bcdb",
		"ts": "2026-07-02T02:53:55.639Z",
		"symbol": "OpenAI",
		"token": "0x7C797DA3704b6F682917005b01C89710Ec17db07",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 225812.13,
		"hash": "2880af77bcdbe2b1132f0a34dc5c0a45a1755489dccb71c19cd329d69d15d06d"
	},
	{
		"id": "8b18388de673",
		"ts": "2026-07-02T02:53:55.945Z",
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
		"liquidityUsd": 7935668.47,
		"hash": "8b18388de6734b3831bb82426601b8ae9e56f4434c0e9bb2e9da347114fb0356"
	},
	{
		"id": "b91adcd20e5c",
		"ts": "2026-07-02T02:53:56.196Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8318955.64,
		"hash": "b91adcd20e5c456d1ae990735dbd9413f75ccf1a7285d84c036eb7d8051f2635"
	},
	{
		"id": "443f4cee0c58",
		"ts": "2026-07-02T02:53:56.445Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 282505.78,
		"hash": "443f4cee0c5888cf8f09e665317c5696df0cfb5dce1e954582d5fed41717c241"
	},
	{
		"id": "c03a4041879c",
		"ts": "2026-07-02T02:53:56.688Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 566476.28,
		"hash": "c03a4041879c34c02d9cc422031fe258170530b95c30e01a203a0b8991b0d9c0"
	},
	{
		"id": "5202358d15c0",
		"ts": "2026-07-02T02:53:56.935Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4426718.98,
		"hash": "5202358d15c05c055fd67961e821370a9d8092355f5bb72209475569e120fed9"
	},
	{
		"id": "ad4bb825c147",
		"ts": "2026-07-02T02:53:57.172Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1857829.24,
		"hash": "ad4bb825c14757e9461b119e443891b316ee23af2e16dc9c3d6dedb52de85e2a"
	},
	{
		"id": "793d5b794894",
		"ts": "2026-07-02T02:53:57.418Z",
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
		"liquidityUsd": 1294083.61,
		"hash": "793d5b7948940e4d18d2bc874477d7cdda90fb57609796ceef1963542e473e32"
	},
	{
		"id": "deb3322a87aa",
		"ts": "2026-07-02T02:53:57.674Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 796546.73,
		"hash": "deb3322a87aa089414ee0455c69190f9fd75b06a7d9fc0ee8187805833def623"
	},
	{
		"id": "f4ec1215d3f1",
		"ts": "2026-07-02T02:53:57.922Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 190567.55,
		"hash": "f4ec1215d3f1ab502d30453dc54b1f9df590f46e851a3336b4da663943a08571"
	},
	{
		"id": "74ed5ba24af8",
		"ts": "2026-07-01T23:11:24.240Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 97557484.82,
		"hash": "74ed5ba24af882db136fd3283c32614ee6632f7269caa5cbc3654fe4f3d7bf5c"
	},
	{
		"id": "e5783892f234",
		"ts": "2026-07-01T23:11:24.735Z",
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
		"liquidityUsd": 13581045.55,
		"hash": "e5783892f234472d0f5139b1565b748180ac255e6fefeb58b8e5e369ed10956c"
	},
	{
		"id": "334fffdadeef",
		"ts": "2026-07-01T23:11:25.237Z",
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
		"liquidityUsd": 1343673.98,
		"hash": "334fffdadeefaef7c0913fb8c769671855cf69050b33e08ef86512845596db2b"
	},
	{
		"id": "27d45761f868",
		"ts": "2026-07-01T23:11:25.732Z",
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
		"liquidityUsd": 26133756.96,
		"hash": "27d45761f868625619dbe087810207889a14b7fdee795451260c1d6586311319"
	},
	{
		"id": "fea3c0decaee",
		"ts": "2026-07-01T23:11:26.218Z",
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
		"liquidityUsd": 4318094.25,
		"hash": "fea3c0decaeee0b98c4be445bc220e8a4246f1ce6417c229daa767c31bca5628"
	},
	{
		"id": "02f766bc540d",
		"ts": "2026-07-01T23:11:26.486Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 928611.07,
		"hash": "02f766bc540d9dd2c80ca4cc593d91467974b379ecfa93a672add6a0132582dc"
	},
	{
		"id": "9193f4eb494f",
		"ts": "2026-07-01T23:11:26.784Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26133756.96,
		"hash": "9193f4eb494f3099953dce9828da9f08c44809b9e556bba3adbcae2fc6192e77"
	},
	{
		"id": "759a377c38b6",
		"ts": "2026-07-01T23:11:27.276Z",
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
		"liquidityUsd": 2166646.31,
		"hash": "759a377c38b632612df6d32c5dfa59f1faa44ef32b14c1ec132ef52c26eb20b4"
	},
	{
		"id": "44cfcf5847fe",
		"ts": "2026-07-01T23:11:27.541Z",
		"symbol": "OpenAI",
		"token": "0x7C797DA3704b6F682917005b01C89710Ec17db07",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 493982.69,
		"hash": "44cfcf5847fe94a637bae408ad04f3af9601ada5d38b227b92d5d31943ae2f51"
	},
	{
		"id": "d8c8e43abeb5",
		"ts": "2026-07-01T23:11:27.803Z",
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
		"liquidityUsd": 8202005.01,
		"hash": "d8c8e43abeb501fd4be8e06c6bcab4c687acc989d51aa0edd52619cd556b4dea"
	},
	{
		"id": "b5f485547c89",
		"ts": "2026-07-01T23:11:28.050Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 274268.41,
		"hash": "b5f485547c89c110f29a0c12b86d72e2387fdf350bc2da42f2572f395147dca5"
	},
	{
		"id": "94b2e0f6ee77",
		"ts": "2026-07-01T23:11:28.293Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8632085.73,
		"hash": "94b2e0f6ee7733a4835899b438effcf363b9c4abd82500a638721c57a8871d56"
	},
	{
		"id": "c7300b1d8088",
		"ts": "2026-07-01T23:11:28.539Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 192392.56,
		"hash": "c7300b1d8088dd4eb1aff5fc1f1dcb996d8d29fd00d16a4ac805478265f27839"
	},
	{
		"id": "ee732b199b2c",
		"ts": "2026-07-01T23:11:28.789Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4461227.61,
		"hash": "ee732b199b2ce08053330e927096feb275750d19ff872c7f54378e66e7719671"
	},
	{
		"id": "8f5814d7d77a",
		"ts": "2026-07-01T23:11:29.036Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 577525.59,
		"hash": "8f5814d7d77a21c99f76df21ace568cdabd3e733e100006f63fb86f0af0020e0"
	},
	{
		"id": "c49cb5bc498a",
		"ts": "2026-07-01T23:11:29.278Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1926765.51,
		"hash": "c49cb5bc498a3ce9fde5c57ac5bff568b136ca773cefe002f43c645b2484efe6"
	},
	{
		"id": "b993c019c942",
		"ts": "2026-07-01T23:11:29.526Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 796433.53,
		"hash": "b993c019c942e381755ab3cf235be25528e94649dd95aa807a0e82182ddb4e5c"
	},
	{
		"id": "0d0f7ce95fb3",
		"ts": "2026-07-01T23:11:29.772Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1615835.65,
		"hash": "0d0f7ce95fb3167baba4d28303097a70532434c4fa95fffeb3f3eaec3c62d801"
	},
	{
		"id": "fc5b4b2bfb28",
		"ts": "2026-07-01T21:24:46.513Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 97478314.25,
		"hash": "fc5b4b2bfb2835740d2c90c866200158277e177b120276f81e175b8df4fdd077"
	},
	{
		"id": "7ed721a68773",
		"ts": "2026-07-01T21:24:46.781Z",
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
		"liquidityUsd": 12702560.7,
		"hash": "7ed721a6877371af544a40675a94c50eb95cb6a726d6fc17d9e059e562563e78"
	},
	{
		"id": "d0bc201c62b8",
		"ts": "2026-07-01T21:24:47.597Z",
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
		"liquidityUsd": 1350975.95,
		"hash": "d0bc201c62b87659e66a7764888dc571adc9e68e750ea66d7c6fd87608909a1d"
	},
	{
		"id": "42a1519170e9",
		"ts": "2026-07-01T21:24:48.036Z",
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
		"liquidityUsd": 26184869.66,
		"hash": "42a1519170e9b4b1270f479e6fd3e993a755a06f241abd390217eb1e8ebd13e9"
	},
	{
		"id": "6b3f6722ed8c",
		"ts": "2026-07-01T21:24:48.854Z",
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
		"liquidityUsd": 4319768.97,
		"hash": "6b3f6722ed8c2fda968efa678dabb0a146cbc57a0c903a6fb131ce7006d5bb9f"
	},
	{
		"id": "01f3c5b22146",
		"ts": "2026-07-01T21:24:49.119Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 928628.27,
		"hash": "01f3c5b22146ee9a8713bf6271807465e8bda39eabc860db84d535a656e013ea"
	},
	{
		"id": "d46d6934765f",
		"ts": "2026-07-01T21:24:49.506Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26184869.66,
		"hash": "d46d6934765f0bbafd66a61c776880316e1250a8c7aac6bab7338721121571ea"
	},
	{
		"id": "7d3ff2d8b388",
		"ts": "2026-07-01T21:24:50.352Z",
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
		"liquidityUsd": 2171874.19,
		"hash": "7d3ff2d8b3888101068ae24cbb2021c1069291253ed7af74661f70d0690a60cf"
	},
	{
		"id": "9d595446a8f0",
		"ts": "2026-07-01T21:24:50.620Z",
		"symbol": "OpenAI",
		"token": "0x7C797DA3704b6F682917005b01C89710Ec17db07",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 494585.62,
		"hash": "9d595446a8f065557c81867381ba681f780ed2afb97c014af329d7819bf027ca"
	},
	{
		"id": "33759f24dd17",
		"ts": "2026-07-01T21:24:50.884Z",
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
		"liquidityUsd": 8216302.23,
		"hash": "33759f24dd17c0c7e0a18f7a61256e23b3475fdaac995da3e888e8af3835b239"
	},
	{
		"id": "e5d78007bc30",
		"ts": "2026-07-01T21:24:51.133Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 291528.06,
		"hash": "e5d78007bc308985f66e27f87147ceb7db902575ee273acd5110ef131ee3b6b9"
	},
	{
		"id": "da1f07075792",
		"ts": "2026-07-01T21:24:51.563Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8511878.9,
		"hash": "da1f070757920dbfe20273a73b75ee6642f2b2977b33e5dd7fdbdf652bb39bb5"
	},
	{
		"id": "053d051ff6d9",
		"ts": "2026-07-01T21:24:51.985Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 195273.88,
		"hash": "053d051ff6d93bd2c2a2398a4ebf9737cb2d5ad404073fd5545e33ecb9ba40b6"
	},
	{
		"id": "de80ec765a3f",
		"ts": "2026-07-01T21:24:52.238Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4540748.4,
		"hash": "de80ec765a3fdf40dd64ec0cd56fa348c3d8e2e81dd10e2b1dedee3160fa7b92"
	},
	{
		"id": "41f32f022f0a",
		"ts": "2026-07-01T21:24:52.489Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1923889.43,
		"hash": "41f32f022f0a32a1b63b15744bd1d755240fb13cfd035afca2eedcd37e5c36b5"
	},
	{
		"id": "dc46b1d666bf",
		"ts": "2026-07-01T21:24:53.005Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 205875.43,
		"hash": "dc46b1d666bf0b82c27871fffa2b9aa5693582ed533e975ef6feae56ba9621cc"
	},
	{
		"id": "2ee7d84f31d6",
		"ts": "2026-07-01T21:24:53.413Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 764535.16,
		"hash": "2ee7d84f31d685e51e04256d3519449ad873b65f4a69a137738cbcd9d1a9ee12"
	},
	{
		"id": "e10e2fea56d0",
		"ts": "2026-07-01T21:24:53.810Z",
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
		"liquidityUsd": 1263626.91,
		"hash": "e10e2fea56d0e1266478e8d8c483c02b7496ff809ba701c3b68b744e41d6b780"
	},
	{
		"id": "ad46ea32a61c",
		"ts": "2026-07-01T19:49:11.947Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 97393689.8,
		"hash": "ad46ea32a61c652a8992c3747305c96f3269999bcd29eed1087159b24efaca61"
	},
	{
		"id": "4657e76b9ec1",
		"ts": "2026-07-01T19:49:12.401Z",
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
		"liquidityUsd": 13416200.22,
		"hash": "4657e76b9ec1beb0e0fd1d1a625decb415096f23c4cfc3c22b01d1bc2b32e05e"
	},
	{
		"id": "1483c3fdbc0a",
		"ts": "2026-07-01T19:49:12.669Z",
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
		"liquidityUsd": 1346444.34,
		"hash": "1483c3fdbc0a482ee6b5bbe9a9b726004ad6934e981a0dcd00620b0fc69a58cc"
	},
	{
		"id": "4e4fc3967738",
		"ts": "2026-07-01T19:49:13.113Z",
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
		"liquidityUsd": 26096121.8,
		"hash": "4e4fc39677385c7f96cec2f4a315b4fa4cefd756f635cfb5d0d630006ab1c301"
	},
	{
		"id": "a1eae8186e28",
		"ts": "2026-07-01T19:49:13.383Z",
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
		"liquidityUsd": 4315566.43,
		"hash": "a1eae8186e288e764ad373dac5812bd953911dbec899e408d7ff7745384070dc"
	},
	{
		"id": "eb8dc4c15946",
		"ts": "2026-07-01T19:49:13.681Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 928612.97,
		"hash": "eb8dc4c159460c35d832dc3850e39a54a516e3ca16fff00bc3f9b87c0c406b09"
	},
	{
		"id": "71b29015465d",
		"ts": "2026-07-01T19:49:14.461Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26096121.51,
		"hash": "71b29015465d3e9b845b8ed7b8a1eea31458ebf58d87bd8506846883b909a783"
	},
	{
		"id": "ea0bb27f48a9",
		"ts": "2026-07-01T19:49:14.719Z",
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
		"liquidityUsd": 2201837.35,
		"hash": "ea0bb27f48a93e24b42107288f0775524d03eb4f6258715204e1e6fc9bb0d0ac"
	},
	{
		"id": "582eb5a5835d",
		"ts": "2026-07-01T19:49:14.964Z",
		"symbol": "OpenAI",
		"token": "0x7C797DA3704b6F682917005b01C89710Ec17db07",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 494289.89,
		"hash": "582eb5a5835dbb6ba55147b018acc14cdfe18c5253a4e56de357a6d16b5ba9fb"
	},
	{
		"id": "6f977cf29cf4",
		"ts": "2026-07-01T19:49:15.224Z",
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
		"liquidityUsd": 8263302.8,
		"hash": "6f977cf29cf4bc4c3aa0f6472c78c428aac5b6c54f73230844420c5f5c038363"
	},
	{
		"id": "2223dd009fe1",
		"ts": "2026-07-01T19:49:15.452Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8645917.8,
		"hash": "2223dd009fe1729849401e0649b6f215662f1872d0015d4619c81db9bcfd1d57"
	},
	{
		"id": "4d9f76ddbfe9",
		"ts": "2026-07-01T19:49:15.683Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 283438.71,
		"hash": "4d9f76ddbfe92fb352c4872e609628f0f8ea41d30a8d4ad18e5a17bc257251f2"
	},
	{
		"id": "2c75e7959f6f",
		"ts": "2026-07-01T19:49:15.918Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 200537.71,
		"hash": "2c75e7959f6f9e5a10fa4ea5f1c8966a7fb857ab9a6a88cba42534352d4bb6f8"
	},
	{
		"id": "4445343f4c84",
		"ts": "2026-07-01T19:49:16.148Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 212868.01,
		"hash": "4445343f4c8441b7cf51ede4df8b7fc71ba1232ffb433616ed6ddb286b663c9f"
	},
	{
		"id": "21188293a70d",
		"ts": "2026-07-01T19:49:16.425Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1985710.71,
		"hash": "21188293a70d9ebbcde937df1b9f45e8373cc7235ff62b2370cb4eb0059c23f9"
	},
	{
		"id": "f768badd6b2c",
		"ts": "2026-07-01T19:49:16.657Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 773004.73,
		"hash": "f768badd6b2c0f191db047e3c637af480c9360141792b04269e83c84b9c01f61"
	},
	{
		"id": "e503fcc41495",
		"ts": "2026-07-01T19:49:16.897Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4587004.07,
		"hash": "e503fcc41495c1d09c74cecaa7f8c7475fc97ae47ab8c8202c0cdaf648247e3a"
	},
	{
		"id": "bd62f2f69043",
		"ts": "2026-07-01T19:49:17.144Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1590757.02,
		"hash": "bd62f2f69043abfe03320d0a2f82ca238a8f1ae2e762e66c9f9bb9bbb25ce5c7"
	},
	{
		"id": "c74c877adaf3",
		"ts": "2026-07-01T17:11:38.793Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 97134183.7,
		"hash": "c74c877adaf3a2ede5255f05ee8017c23dadc6420cad003445fc4e259d3bd396"
	},
	{
		"id": "90b4df7d1dab",
		"ts": "2026-07-01T17:11:39.439Z",
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
		"liquidityUsd": 13018326.75,
		"hash": "90b4df7d1dabd9b83c904a6b7cce6ac400c16d7c0304fd37733d913f35707686"
	},
	{
		"id": "da8d6f1cff55",
		"ts": "2026-07-01T17:11:39.877Z",
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
		"liquidityUsd": 1337521.79,
		"hash": "da8d6f1cff55d52bb23b2b36ebde34b4c945bdadae58e9bee31c2527cd45d5cc"
	},
	{
		"id": "50de6a1ae163",
		"ts": "2026-07-01T17:11:40.312Z",
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
		"liquidityUsd": 26432325.86,
		"hash": "50de6a1ae163c16dbf501ba947a7e763b30a1dd12947c56d9dbc61a04cf2398a"
	},
	{
		"id": "7b75aac61a24",
		"ts": "2026-07-01T17:11:40.748Z",
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
		"liquidityUsd": 4316101.83,
		"hash": "7b75aac61a2437dfedaeb524271a6266afcd5d8af5c55763dac31f5c5c55443b"
	},
	{
		"id": "287a319e5d4e",
		"ts": "2026-07-01T17:11:40.983Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931077.15,
		"hash": "287a319e5d4e477d72377e8dde222aec1f382c68bbf10c0abec58f9f12c246d9"
	},
	{
		"id": "18294d500229",
		"ts": "2026-07-01T17:11:41.216Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26432325.86,
		"hash": "18294d500229b847bb391d89eb87abc31d0082fe6fb78a1b6d20e207872f5f51"
	},
	{
		"id": "712822c60e26",
		"ts": "2026-07-01T17:11:41.450Z",
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
		"liquidityUsd": 2191717.23,
		"hash": "712822c60e2608ecc310d6d757924d0d4f4b4d021c8032fca5b577e20b36d4d3"
	},
	{
		"id": "bd44421842ad",
		"ts": "2026-07-01T17:11:41.684Z",
		"symbol": "OpenAI",
		"token": "0x7C797DA3704b6F682917005b01C89710Ec17db07",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 493419.3,
		"hash": "bd44421842ada5b19cd8888d69697d30e830f6668a8b94abb7dfb784033f43a7"
	},
	{
		"id": "873eecc08c6f",
		"ts": "2026-07-01T17:11:41.921Z",
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
		"liquidityUsd": 8423001.55,
		"hash": "873eecc08c6fa7cbc04705b631c95eb9eb66e6fc2beec2b9e958d980ebfdb3b7"
	},
	{
		"id": "ac3998276a57",
		"ts": "2026-07-01T17:11:42.149Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8223884.67,
		"hash": "ac3998276a57ed98fbf00fcd9fed801cb0576330b444bc636f6349be03b89530"
	},
	{
		"id": "d250e439dcd5",
		"ts": "2026-07-01T17:11:42.368Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 294844.06,
		"hash": "d250e439dcd5f9b5f7a16e75530611dfe5ea23f6439827d336db39e0c0ecd390"
	}
]
