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
	"updatedAt": "2026-07-02T10:08:06.332Z",
	"tokensScored": 1001,
	"verdictsIssued": 1001,
	"safe": 882,
	"risky": 94,
	"likelyRug": 25,
	"ticks": 73
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "282fe29fb8db",
		"ts": "2026-07-01T17:11:42.584Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 204797.62,
		"hash": "282fe29fb8dbf0185af845afd866c77864d20a0b6f84414f0389ab9066307176"
	},
	{
		"id": "3320de0019a3",
		"ts": "2026-07-01T17:11:42.802Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 204189.92,
		"hash": "3320de0019a30585232b3c59c057ef6904801cf6f0ff3eb25ddc732ec0dfa83e"
	},
	{
		"id": "f3b154a3281b",
		"ts": "2026-07-01T17:11:43.019Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1589184.11,
		"hash": "f3b154a3281b43ed9a429d4a349a2330d86685b4e817db1277a23d9dae874f3d"
	},
	{
		"id": "02fd7a716b9f",
		"ts": "2026-07-01T17:11:43.236Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 797234.4,
		"hash": "02fd7a716b9f52b42cb3a192bade4a1e0294829c63c7cb0542da3fb047b33a83"
	},
	{
		"id": "70d7ef691443",
		"ts": "2026-07-01T14:46:33.507Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 96883161.71,
		"hash": "70d7ef69144377fe0656c63d34df20cb176b0da3bdb49e6906ad484f809b73b7"
	},
	{
		"id": "79e11de698c8",
		"ts": "2026-07-01T14:46:33.949Z",
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
		"liquidityUsd": 13330723.12,
		"hash": "79e11de698c8a797675e2818dd269543af74e7ed56967e4ef5c9b6a2367c6360"
	},
	{
		"id": "9ba952402566",
		"ts": "2026-07-01T14:46:34.198Z",
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
		"liquidityUsd": 1313711.95,
		"hash": "9ba952402566e11a79bf34266d393110753705d5c3ae8665159df6d953c63071"
	},
	{
		"id": "d103b4c80ad6",
		"ts": "2026-07-01T14:46:34.443Z",
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
		"liquidityUsd": 26314557.47,
		"hash": "d103b4c80ad6b048bed923f28ac9a78c76993de9f164c345ed6fd2d2b3e92662"
	},
	{
		"id": "9d3ccc801cd7",
		"ts": "2026-07-01T14:46:34.688Z",
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
		"liquidityUsd": 4280519.94,
		"hash": "9d3ccc801cd7caf014cd4bb9bf82fe33385bb65e9189c0ea88e88ea8cc61f315"
	},
	{
		"id": "077ff9ff4222",
		"ts": "2026-07-01T14:46:34.932Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 919073.29,
		"hash": "077ff9ff42221635eaa704fdfd881283e39725804be92d8c8392560ccc000ebf"
	},
	{
		"id": "ff684fef3252",
		"ts": "2026-07-01T14:46:35.177Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26314556.29,
		"hash": "ff684fef3252ec855973a0ff0c6bf56f06c4451185c01830fa3099536b45d1a6"
	},
	{
		"id": "cabe006eb73e",
		"ts": "2026-07-01T14:46:35.424Z",
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
		"liquidityUsd": 2178271.89,
		"hash": "cabe006eb73ecbd4cbf09baeb292eba886817a86f1cf20cfc6b002002c308142"
	},
	{
		"id": "c27808bce88e",
		"ts": "2026-07-01T14:46:35.679Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 8394566.16,
		"hash": "c27808bce88e50e50b70094acc82700dfb8bc676c1f379ce5a7cf2e8f24019a0"
	},
	{
		"id": "3ef7af22473f",
		"ts": "2026-07-01T14:46:35.926Z",
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
		"liquidityUsd": 492879.92,
		"hash": "3ef7af22473f5196f96e877811da8bde71a3759401af1becf021c87b906b7f52"
	},
	{
		"id": "5374ccb91e12",
		"ts": "2026-07-01T14:46:36.154Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 281482.61,
		"hash": "5374ccb91e125a1a2d3dae99173b5caeea5c75f867d832b14a2c8e89937b60f6"
	},
	{
		"id": "30e689d22fe1",
		"ts": "2026-07-01T14:46:36.386Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 196399.36,
		"hash": "30e689d22fe1c2c38e4dba0180ffd8fef0a44a741704ef955bcedaa8ea5f27de"
	},
	{
		"id": "c04e4378b37e",
		"ts": "2026-07-01T14:46:36.663Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4439970.91,
		"hash": "c04e4378b37eacf3bcb494bc1911c21209eace32b7be477a2b3fd53f673e2689"
	},
	{
		"id": "d41ce58f24aa",
		"ts": "2026-07-01T14:46:36.894Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 981667.7,
		"hash": "d41ce58f24aaf2237ee8e6e3f01c0cd1199b39e6c3b7774f37ee1551de38b41a"
	},
	{
		"id": "0c8f6240f353",
		"ts": "2026-07-01T14:46:37.123Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 202726.88,
		"hash": "0c8f6240f353ec1c2ed740f23dc47ca362b5a0d47c04f9870fb17a234bb2c41f"
	},
	{
		"id": "205dc447719c",
		"ts": "2026-07-01T14:46:38.462Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 69722.27,
		"hash": "205dc447719ca23526fc78f926b116e5ef1eceb5963b4881c5ad31a05a3e98c1"
	},
	{
		"id": "46a88db4a610",
		"ts": "2026-07-01T14:46:39.641Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8459958.37,
		"hash": "46a88db4a610fc9a5a5dc4b7a98ffae6aee9cdee017bb661d10305bb7228acb6"
	},
	{
		"id": "7d967f92d78d",
		"ts": "2026-07-01T11:58:20.744Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95643998.43,
		"hash": "7d967f92d78dde24e2f7528bdc35fba2b0e21a33d18b6a39c74c8d6cf4590026"
	},
	{
		"id": "009d9f812bce",
		"ts": "2026-07-01T11:58:21.118Z",
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
		"liquidityUsd": 12869687.71,
		"hash": "009d9f812bce30cefbb3161681a888e2c9f11a988c7639966e2c0fafd4d3f319"
	},
	{
		"id": "57426d187a9d",
		"ts": "2026-07-01T11:58:21.485Z",
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
		"liquidityUsd": 1287505.33,
		"hash": "57426d187a9d9c7150f9e171af4f2f3e5c57d095ad1767608d6ee27f170dd017"
	},
	{
		"id": "c00b33fdd97b",
		"ts": "2026-07-01T11:58:21.721Z",
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
		"liquidityUsd": 26050080.74,
		"hash": "c00b33fdd97b9d8384cb781ec8daf595dc2c73be79231c12c2fc15fc1b46bca6"
	},
	{
		"id": "b8a4e0ed9850",
		"ts": "2026-07-01T11:58:21.925Z",
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
		"liquidityUsd": 4012110.09,
		"hash": "b8a4e0ed9850baf25f603d08b81669245e92d5390f137a64279d5301c3398a71"
	},
	{
		"id": "4e8327217bbe",
		"ts": "2026-07-01T11:58:22.128Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900825.1,
		"hash": "4e8327217bbe7e9c969d217d04f58aa6788e84e54f14164dc0e0fbfb3f7e7f18"
	},
	{
		"id": "fdb70285889a",
		"ts": "2026-07-01T11:58:22.347Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26050080.74,
		"hash": "fdb70285889a5376e8550663494ccb54a74fd580b22a7ca9a12b0a28cfeb4c43"
	},
	{
		"id": "4303f7da387b",
		"ts": "2026-07-01T11:58:22.552Z",
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
		"liquidityUsd": 2136420.67,
		"hash": "4303f7da387be18068481208b20bf2e7e807ca0bbed8495ef0b9c44b03d7d315"
	},
	{
		"id": "aa3df11d3e5f",
		"ts": "2026-07-01T11:58:22.756Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 8144766.81,
		"hash": "aa3df11d3e5f58ddc0df982824d4dad51b4fd4ce165e98a080787b6eda807a11"
	},
	{
		"id": "b85f8cb73553",
		"ts": "2026-07-01T11:58:22.970Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 68438.24,
		"hash": "b85f8cb735538c601c832d91123d135c24e2546b8dff5a7b6a72296f48cd4095"
	},
	{
		"id": "9e0ccb195f99",
		"ts": "2026-07-01T11:58:23.159Z",
		"symbol": "OpenAI",
		"token": "0x7C797DA3704b6F682917005b01C89710Ec17db07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 493123.94,
		"hash": "9e0ccb195f99d872af49d5ec0a62c21d9fcd523e8dfb84655b22ac58a4ccca1a"
	},
	{
		"id": "d468a97796f7",
		"ts": "2026-07-01T11:58:23.348Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4161747.76,
		"hash": "d468a97796f76af6e2070242d167034cbf444df2b36fd9e15058d04668b63cae"
	},
	{
		"id": "dcb980d0738d",
		"ts": "2026-07-01T11:58:23.537Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207766.93,
		"hash": "dcb980d0738db970db874bdd80c3f78f137e6ebdae63d92edf2fcc0e4cabf336"
	},
	{
		"id": "9a12c1104420",
		"ts": "2026-07-01T11:58:23.730Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 206869.99,
		"hash": "9a12c11044208750a05fb037bdd5c02d4904ab1cea066156a0cba64ccda568e0"
	},
	{
		"id": "dea37fba2e08",
		"ts": "2026-07-01T11:58:23.922Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 958513.42,
		"hash": "dea37fba2e0838c666142f918056eb0954763733256e8a76d901e4e4f9ee639f"
	},
	{
		"id": "547666fb4b2f",
		"ts": "2026-07-01T11:58:24.139Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 256563.7,
		"hash": "547666fb4b2fbdf407fdb8676b428815788dc77ae9319cb6c436d43fc911de66"
	},
	{
		"id": "b93841ce392d",
		"ts": "2026-07-01T11:58:24.333Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1555433.81,
		"hash": "b93841ce392d9665f1f36acd73993fd3270e172b45fdc07db3193672e371433f"
	},
	{
		"id": "ae7d70bd22d3",
		"ts": "2026-07-01T08:08:47.561Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95629909.21,
		"hash": "ae7d70bd22d390b07f741811a212b0a9809650d35a6ee33184eba7f022c9f853"
	},
	{
		"id": "1a7e7d14dd3d",
		"ts": "2026-07-01T08:08:47.815Z",
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
		"liquidityUsd": 12894395.04,
		"hash": "1a7e7d14dd3d58075af5fb97425ce693294752587da1456691800a9e1aa874d2"
	},
	{
		"id": "6140f4f4fab9",
		"ts": "2026-07-01T08:08:48.054Z",
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
		"liquidityUsd": 1307805.46,
		"hash": "6140f4f4fab92fac37cceeee7437f2f9c59610faa35e50b4a72040ef6d81689b"
	},
	{
		"id": "6082f0bf9198",
		"ts": "2026-07-01T08:08:48.297Z",
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
		"liquidityUsd": 26080726.23,
		"hash": "6082f0bf919847d61815c3b55e4a16863c2a28bf23f2b70e64ea63315e9a0bdb"
	},
	{
		"id": "04ade5875cea",
		"ts": "2026-07-01T08:08:48.539Z",
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
		"liquidityUsd": 4018690.39,
		"hash": "04ade5875cea24adcad2485ca268c6fc7d2a41449088b18753bc8e9066c77038"
	},
	{
		"id": "0824489aba07",
		"ts": "2026-07-01T08:08:48.773Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 903902.66,
		"hash": "0824489aba0710e4af37fc63449ac1eb5087d950625006628de6bad4612dfc73"
	},
	{
		"id": "7f3b4f75113b",
		"ts": "2026-07-01T08:08:49.011Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26080726.23,
		"hash": "7f3b4f75113b9341537eaa2b7ea1ef5177b4a282ea8e5b724bc3f280baa9f966"
	},
	{
		"id": "a4ff7ca6aef4",
		"ts": "2026-07-01T08:08:49.249Z",
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
		"liquidityUsd": 2144693.4,
		"hash": "a4ff7ca6aef45505959e6ac000de416b2526fc8d152b526c447a18797bbf14cf"
	},
	{
		"id": "0f09cd21ecde",
		"ts": "2026-07-01T08:08:49.500Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 8747289.37,
		"hash": "0f09cd21ecde147bf3feb2be1d03a53584d6b8eabcd5a5f95ef01eb47153c519"
	},
	{
		"id": "ed438666965b",
		"ts": "2026-07-01T08:08:49.763Z",
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
		"liquidityUsd": 4175100.75,
		"hash": "ed438666965b0c1507536dd81ecfc94df4594e2efdf412688c33555dd7d6937e"
	},
	{
		"id": "68e762a3a6ff",
		"ts": "2026-07-01T08:08:49.982Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 67151.25,
		"hash": "68e762a3a6ffc8278934132f51e3622c2b1e1e67084b4fcad490af9728837df3"
	},
	{
		"id": "d09ea728d94d",
		"ts": "2026-07-01T08:08:50.244Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 207766.93,
		"hash": "d09ea728d94dafa6ab53cbc5cf44ffee99906a995b0dc82e5df9038c573f5e1f"
	},
	{
		"id": "18f27fce1333",
		"ts": "2026-07-01T08:08:50.649Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 966506.83,
		"hash": "18f27fce1333b732c12ec3f25c003df56edf8c59c6c8820ffb62cfc1fad0e607"
	},
	{
		"id": "03044afb9e5e",
		"ts": "2026-07-01T08:08:50.877Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 277372.46,
		"hash": "03044afb9e5ecb85e05c535db30890ffed8204c85b75d15efac62da29818166c"
	},
	{
		"id": "961dfd82ba2b",
		"ts": "2026-07-01T08:08:51.097Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 213538.74,
		"hash": "961dfd82ba2ba707cb8d27f758efced43c1dfa265ea45d81c6790bb16f0c0930"
	},
	{
		"id": "8a62bd4c0a1f",
		"ts": "2026-07-01T08:08:51.323Z",
		"symbol": "BIO",
		"token": "0x226A2FA2556C48245E57cd1cbA4C6c9e67077DD2",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 342132.04,
		"hash": "8a62bd4c0a1fee38899f2f98a08d84d213859155508cf8be78157388360c38af"
	},
	{
		"id": "2bb97669791c",
		"ts": "2026-07-01T08:08:51.544Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 379743.97,
		"hash": "2bb97669791c1c492888543dc544983da43daabf16de6df0a92fdb00460272de"
	},
	{
		"id": "d5140c20b394",
		"ts": "2026-07-01T03:28:45.616Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95715963.47,
		"hash": "d5140c20b394cf45bdd3ec1cf0fe57dc4ccaa9dfdc29cd4f8d2c66f2a215dc2a"
	},
	{
		"id": "50922b632670",
		"ts": "2026-07-01T03:28:46.315Z",
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
		"liquidityUsd": 13054444.49,
		"hash": "50922b6326701a980228c3ab6a496291ed5eaf3b6a1fc871a98094bd4bc5c48c"
	},
	{
		"id": "dd47bc854a76",
		"ts": "2026-07-01T03:28:47.066Z",
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
		"liquidityUsd": 1306690.32,
		"hash": "dd47bc854a76a0f8c267e84bdae82ef6c7f98c6d5bb4e95ca5efeca38e14df46"
	},
	{
		"id": "6b03867d51cc",
		"ts": "2026-07-01T03:28:47.556Z",
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
		"liquidityUsd": 26289466.44,
		"hash": "6b03867d51cc3f4bcccefdabbd711fb40403cb42db7947de90bcb50c72ebbe4f"
	},
	{
		"id": "d1b42e2c3517",
		"ts": "2026-07-01T03:28:48.041Z",
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
		"liquidityUsd": 4034902.83,
		"hash": "d1b42e2c3517ab944f1a1921893e469fb2554d1af8b402c36e3b25bd6107b79e"
	},
	{
		"id": "4831e5951ca9",
		"ts": "2026-07-01T03:28:48.291Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900916.06,
		"hash": "4831e5951ca9cf5ddf2345e21b446db8f431f25b868637c8eefb701a7a5ca1ec"
	},
	{
		"id": "7fede46c214d",
		"ts": "2026-07-01T03:28:48.538Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26289466.44,
		"hash": "7fede46c214d1cc10c6804b669fb5ef7857b0ee7022e4b8003d77ddf63326e0e"
	},
	{
		"id": "bf197ae0c93a",
		"ts": "2026-07-01T03:28:49.049Z",
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
		"liquidityUsd": 2155392.11,
		"hash": "bf197ae0c93a9c19c186f4d13ec4d333953780ccf4f410f0e1ef55547fcee4db"
	},
	{
		"id": "0675fa0c7baf",
		"ts": "2026-07-01T03:28:49.324Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 8900955.98,
		"hash": "0675fa0c7baf1e06d2d45c9589395cb8a43731f957ce4e2afeb2825237f03535"
	},
	{
		"id": "feb02b2cc0b3",
		"ts": "2026-07-01T03:28:49.580Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 72370.31,
		"hash": "feb02b2cc0b30b8caa6ab349217f0f8f2326599bc1fc49eda6a94cfdcb5a6dd9"
	},
	{
		"id": "a44425b845a6",
		"ts": "2026-07-01T03:28:49.815Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4089435.12,
		"hash": "a44425b845a6c45a380ab7cdee487ed965e38f543585a203d08ab22546d6b65b"
	},
	{
		"id": "3c01d49b0dd9",
		"ts": "2026-07-01T03:28:50.051Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207766.93,
		"hash": "3c01d49b0dd9b78422d99f41db9c12abad8087dade4df1df3695d2d8e1c1f1c9"
	},
	{
		"id": "3c2a07061d5e",
		"ts": "2026-07-01T03:28:50.298Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 960536.6,
		"hash": "3c2a07061d5ea92970ebbd3a5ec75d039c660f5485d09ae763111cd242ae297b"
	},
	{
		"id": "026a9406ae9e",
		"ts": "2026-07-01T03:28:50.556Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 289569.09,
		"hash": "026a9406ae9e40a24101146473f339435d16bdbfe8953b51757da8557dacb03e"
	},
	{
		"id": "706222ab53d6",
		"ts": "2026-07-01T03:28:50.797Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 378932.01,
		"hash": "706222ab53d693eaebe28a38bde7e33a9c410a7f3a82838015726fd98f5c7463"
	},
	{
		"id": "46115ccf81a2",
		"ts": "2026-07-01T03:28:51.038Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 242769.28,
		"hash": "46115ccf81a284f7a9371e46d497ed1f086d7f90ca07c4b0a17dcb1e42782738"
	},
	{
		"id": "ddaae7e3dd4b",
		"ts": "2026-07-01T03:28:51.273Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7759570.79,
		"hash": "ddaae7e3dd4bad223da0581052191bab5443f18de4f37fac802770c2d1c843b3"
	},
	{
		"id": "c11026611fff",
		"ts": "2026-06-30T23:08:24.406Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95802342.47,
		"hash": "c11026611fff746adf9c14ccbf31bd069f5688a16ce7e8bd506b2e68a7ed347e"
	},
	{
		"id": "4640daf9130e",
		"ts": "2026-06-30T23:08:25.130Z",
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
		"liquidityUsd": 12868633.99,
		"hash": "4640daf9130e3bf676593fd868a7ab672da3ac25e00d1ba03fb20dda4a01738b"
	},
	{
		"id": "d080fa0f3657",
		"ts": "2026-06-30T23:08:25.676Z",
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
		"liquidityUsd": 1301530.04,
		"hash": "d080fa0f36570b2b5b8979542ef3e396ce6958d47ddaa6d91da42e7cc64d505e"
	},
	{
		"id": "3b86fd1d512d",
		"ts": "2026-06-30T23:08:26.160Z",
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
		"liquidityUsd": 26044279.86,
		"hash": "3b86fd1d512dec302c06d78a320248e4f4f3cf5001918a037b79b48beec51139"
	},
	{
		"id": "1e45f919282a",
		"ts": "2026-06-30T23:08:26.663Z",
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
		"liquidityUsd": 3992781.61,
		"hash": "1e45f919282aad873d2cfe2aa731c6d1dfd8c18ef7f5e2f9949aeacaf014e611"
	},
	{
		"id": "cdd3626a4203",
		"ts": "2026-06-30T23:08:26.925Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 898764.06,
		"hash": "cdd3626a420371fa34ca1c491548b6441f3304a5fb14de13ab16d5585b961506"
	},
	{
		"id": "a5627b1dfc44",
		"ts": "2026-06-30T23:08:27.188Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26044279.86,
		"hash": "a5627b1dfc4444d76efefff12058f5442ad3d7cb9a36c5ed7241f7d69b69a6e8"
	},
	{
		"id": "5805393a591b",
		"ts": "2026-06-30T23:08:27.677Z",
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
		"liquidityUsd": 2158658,
		"hash": "5805393a591bb733516a51be7d8dd7d4bd09f7fe08fc3b0bd25dde54a36cfda6"
	},
	{
		"id": "b43e332e2660",
		"ts": "2026-06-30T23:08:27.936Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9171823.95,
		"hash": "b43e332e2660722088e1c8e4b7981824c8442257ef63b0180de87bbc747180a9"
	},
	{
		"id": "db566fab7ccb",
		"ts": "2026-06-30T23:08:28.188Z",
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
		"liquidityUsd": 4236804.75,
		"hash": "db566fab7ccb702f883b55497db73b3fa1239bce73f1cb15e16ca8b047eb7311"
	}
]
