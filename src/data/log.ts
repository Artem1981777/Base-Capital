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
	"updatedAt": "2026-10-02T08:03:57.824Z",
	"tokensScored": 19176,
	"verdictsIssued": 19176,
	"safe": 16323,
	"risky": 1378,
	"likelyRug": 1475,
	"ticks": 1089
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "bafd39c771f5",
		"ts": "2026-10-02T08:03:53.681Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 164063103.65,
		"hash": "bafd39c771f5d0d261e4389b785894da23a635e79e605a805ef0ca9e5ec551df"
	},
	{
		"id": "1f27e821584d",
		"ts": "2026-10-02T08:03:53.922Z",
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
		"liquidityUsd": 16635562.08,
		"hash": "1f27e821584db540e1da8a69cafeb4bde65d02c0c8b730253031e26c714439bc"
	},
	{
		"id": "b5be8552921a",
		"ts": "2026-10-02T08:03:54.158Z",
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
		"liquidityUsd": 878056.41,
		"hash": "b5be8552921a7340d461bf2873986a6abaef6dc87540a9082aef870426e9a721"
	},
	{
		"id": "0f7173fcc23a",
		"ts": "2026-10-02T08:03:54.422Z",
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
		"liquidityUsd": 41149937.68,
		"hash": "0f7173fcc23a4101c5a73408fa7283df9f1ef8ff97892e4aa4c1bf56d150b620"
	},
	{
		"id": "d0fc4286f28e",
		"ts": "2026-10-02T08:03:54.660Z",
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
		"liquidityUsd": 4657369.89,
		"hash": "d0fc4286f28e60c730413885c86434f806281f483dfcf13a1efa841cde4f30fd"
	},
	{
		"id": "5dccf52d8bad",
		"ts": "2026-10-02T08:03:54.900Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1347782.15,
		"hash": "5dccf52d8bad2a66a75b3661bf638a5d8efa40da042e7a1dcc5f875e002141de"
	},
	{
		"id": "ae915e09e08b",
		"ts": "2026-10-02T08:03:55.138Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41180961.52,
		"hash": "ae915e09e08bfc008dac6969cda42e4ab6461142942b0c4dea7b7506e9000793"
	},
	{
		"id": "bdbb97fbbf33",
		"ts": "2026-10-02T08:03:55.376Z",
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
		"liquidityUsd": 2192192.02,
		"hash": "bdbb97fbbf33d1625df1f24095ade1c6cc1b917dce1fa48bc485096b982046b6"
	},
	{
		"id": "a6188d4e746c",
		"ts": "2026-10-02T08:03:55.611Z",
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
		"liquidityUsd": 1775396,
		"hash": "a6188d4e746cc9a358dcddb95a14f8d2d9b2093699a5b7c452eb18fc5894fd85"
	},
	{
		"id": "d7b16b0c1a70",
		"ts": "2026-10-02T08:03:55.847Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 242895.98,
		"hash": "d7b16b0c1a70882d4bd2a267a76dd697f1bfdb55c5e7bb299933abed35bae41a"
	},
	{
		"id": "e418e20fd942",
		"ts": "2026-10-02T08:03:56.067Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1234209.17,
		"hash": "e418e20fd94226eb0b28a653d88f1c7beea6daabdd23c8ef437c04709b489c8c"
	},
	{
		"id": "54ea671d795c",
		"ts": "2026-10-02T08:03:56.285Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 300301.95,
		"hash": "54ea671d795c0aff84e62b0f982b8a7b675b2b64ebbb3778d0589c12e161375e"
	},
	{
		"id": "4fa03ab037c0",
		"ts": "2026-10-02T08:03:56.506Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 489944.38,
		"hash": "4fa03ab037c0a5f60025c537c29001146325aec085f6fdf022b59b803620c0bf"
	},
	{
		"id": "c4261ae0eba0",
		"ts": "2026-10-02T08:03:56.725Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1799468.6,
		"hash": "c4261ae0eba0944ea6eb3f4c041b826080d4bed758664aae51c7dab497860d0e"
	},
	{
		"id": "a68459952ed1",
		"ts": "2026-10-02T08:03:56.947Z",
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
		"liquidityUsd": 400313.31,
		"hash": "a68459952ed101b747870ab77bb6f56276f78b423cf42cc4bd9dba17b531582f"
	},
	{
		"id": "7960878f9112",
		"ts": "2026-10-02T08:03:57.163Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6105725.93,
		"hash": "7960878f9112191d620f91a9ad006fc4d7a4dd8c6869c313bfc1419eb2e4f23d"
	},
	{
		"id": "0d3fbc5d6587",
		"ts": "2026-10-02T08:03:57.382Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3879719.78,
		"hash": "0d3fbc5d6587a7e2b2eb56bdbcdcdb98c979ec8e02d8a620aceb4982d5a62f9e"
	},
	{
		"id": "57e4d98ab902",
		"ts": "2026-10-02T08:03:57.608Z",
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
		"liquidityUsd": 544138.72,
		"hash": "57e4d98ab90270b78038bdd2d0fbaa8e79202f9f368a329726ba76a15d3bf587"
	},
	{
		"id": "421f28ce5b67",
		"ts": "2026-10-02T08:03:57.823Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 623846.06,
		"hash": "421f28ce5b674247f4eff80bcb502fef59dd3d4b7686ffb77feaa3388c4f4aba"
	},
	{
		"id": "6128c92f9c30",
		"ts": "2026-10-02T01:57:25.083Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 163186136.22,
		"hash": "6128c92f9c30522cc89aa34edc23f8190df619e882d6ec5a42db2160da1461a2"
	},
	{
		"id": "15f02e0badc3",
		"ts": "2026-10-02T01:57:25.562Z",
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
		"liquidityUsd": 13974100.47,
		"hash": "15f02e0badc37316f53a6278ab687673d41c6d6ab702278abffabeea1f265721"
	},
	{
		"id": "c0e38139c0a1",
		"ts": "2026-10-02T01:57:25.829Z",
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
		"liquidityUsd": 873369.95,
		"hash": "c0e38139c0a1338382bc67fee221ef2fe69deb29a6737151b5b7e48853355208"
	},
	{
		"id": "9adc60968896",
		"ts": "2026-10-02T01:57:26.105Z",
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
		"liquidityUsd": 41220607.93,
		"hash": "9adc609688960b070e65986badf94c726ae53f6cef1cc9e7b199b68c94cfda34"
	},
	{
		"id": "33e1baee784d",
		"ts": "2026-10-02T01:57:26.380Z",
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
		"liquidityUsd": 4564611.22,
		"hash": "33e1baee784d2448e12c1456723a554d9709ec4432711000cf5a93a2c820a65f"
	},
	{
		"id": "ea531baaab3b",
		"ts": "2026-10-02T01:57:26.641Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1298078.08,
		"hash": "ea531baaab3b9d1e1b1fda57eb70c5a5279fd650fc891b205791fb419353e868"
	},
	{
		"id": "6a48d950a75e",
		"ts": "2026-10-02T01:57:26.896Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41220607.93,
		"hash": "6a48d950a75e12b72ca948050dd589344e243b623fa5fd43a8f6a2c5389fb5a8"
	},
	{
		"id": "e40d07c2a299",
		"ts": "2026-10-02T01:57:27.140Z",
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
		"liquidityUsd": 2136886.4,
		"hash": "e40d07c2a2994e8e89aba40dc763ff586aa196156816566b20bb4d1dc6a844ed"
	},
	{
		"id": "3440b67ebdfe",
		"ts": "2026-10-02T01:57:27.396Z",
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
		"liquidityUsd": 1710911.61,
		"hash": "3440b67ebdfed9d3606d17eca6c9f5c4998134fbb7d3b7c299d0817d7dc3d6d4"
	},
	{
		"id": "72f898a696fc",
		"ts": "2026-10-02T01:57:27.647Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 231915.16,
		"hash": "72f898a696fc13cff2f328bb4a6f079b2dc72c61cc559e01b940ff56fff1994a"
	},
	{
		"id": "c3253020a7d6",
		"ts": "2026-10-02T01:57:27.872Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 307046.71,
		"hash": "c3253020a7d6a44addf7a85e1bdc2f4a096cb18c5ecbcc0e1140a47f253288d8"
	},
	{
		"id": "584a32697e83",
		"ts": "2026-10-02T01:57:28.108Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3713262.99,
		"hash": "584a32697e83eb3de9a6856d824b118647cc1e7282b6eb17f1bdf2cb086927da"
	},
	{
		"id": "366e6160d32c",
		"ts": "2026-10-02T01:57:28.331Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1185314.89,
		"hash": "366e6160d32cd9053f477fed328e61d0a470ea0eea4abd8ae669b331dadd540f"
	},
	{
		"id": "2822a6e9a0e7",
		"ts": "2026-10-02T01:57:28.576Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1840434.08,
		"hash": "2822a6e9a0e704c59a477754fd15b12485188bee23190eae3c3dc2fc8888270d"
	},
	{
		"id": "8d433fe235f9",
		"ts": "2026-10-02T01:57:28.811Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 500393.75,
		"hash": "8d433fe235f9dcafed18b03c5790aafa320a24af61313e22464700d02ed6de9d"
	},
	{
		"id": "484c2d6c503e",
		"ts": "2026-10-02T01:57:29.033Z",
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
		"liquidityUsd": 409771.45,
		"hash": "484c2d6c503e796039a228443aa6f2dbe469235e5e38552b44b024dd7906cc32"
	},
	{
		"id": "22a996a03d36",
		"ts": "2026-10-02T01:57:29.279Z",
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
		"liquidityUsd": 526014.82,
		"hash": "22a996a03d36719f59da6665d600a5e3301a998821c9d1afab9891c6c4c11690"
	},
	{
		"id": "9956c1fdac9f",
		"ts": "2026-10-02T01:57:29.513Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 688345.47,
		"hash": "9956c1fdac9f07d89030435dee6b957ed260d68bf513ab5e4d65e83941a9883a"
	},
	{
		"id": "02e47013b5d6",
		"ts": "2026-10-02T01:57:29.735Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17893898.16,
		"hash": "02e47013b5d6105d310742f0fa0d46e6d377922f9918f8059f8f20262dd67d0d"
	},
	{
		"id": "0dd444b1e34c",
		"ts": "2026-10-01T22:17:31.418Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162747026.76,
		"hash": "0dd444b1e34c433f10edb3e3e595b92a29805e6b78f15c00ca5ed75910fc4e24"
	},
	{
		"id": "22f4c4c1bbd0",
		"ts": "2026-10-01T22:17:31.723Z",
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
		"liquidityUsd": 16788858.09,
		"hash": "22f4c4c1bbd099c1fff9dd75f2182af9e87a023493dd3523ea199a5225c4d2ee"
	},
	{
		"id": "1e16595ef4ca",
		"ts": "2026-10-01T22:17:31.998Z",
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
		"liquidityUsd": 868474.82,
		"hash": "1e16595ef4ca433d19ea26111dbec5c55f227539bad2502f66ea069cab0c1dae"
	},
	{
		"id": "8a67b06683e2",
		"ts": "2026-10-01T22:17:32.284Z",
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
		"liquidityUsd": 40964696.68,
		"hash": "8a67b06683e2a770f5ce18df22029b7fb5457c2271111a2b87abc107b6932570"
	},
	{
		"id": "1aedd15fa4d7",
		"ts": "2026-10-01T22:17:32.559Z",
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
		"liquidityUsd": 4542807.23,
		"hash": "1aedd15fa4d77281611e847bf6a7e5b1b5789648388620cf3925f66560d14345"
	},
	{
		"id": "37f52153de9c",
		"ts": "2026-10-01T22:17:32.832Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1299511.8,
		"hash": "37f52153de9c1909e87ab4552a30a5e2affc6e39956eb6dca2876524c4379c33"
	},
	{
		"id": "1a81c16e6045",
		"ts": "2026-10-01T22:17:33.085Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 40964696.68,
		"hash": "1a81c16e6045ac7abda0cffdd140a2511b1df5c923818d4633b8a966bb4ccb9e"
	},
	{
		"id": "79706762f697",
		"ts": "2026-10-01T22:17:33.360Z",
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
		"liquidityUsd": 1923435.91,
		"hash": "79706762f69797fc4dd28e8424dcc8e21ef9589797a3ff0416cb90fec27f2c98"
	},
	{
		"id": "44a10e5fdf19",
		"ts": "2026-10-01T22:17:33.625Z",
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
		"liquidityUsd": 1737784.72,
		"hash": "44a10e5fdf19c3092a394de5900e4a5e34a312101d338ad090783e1e6e3e6300"
	},
	{
		"id": "931c7a7e7089",
		"ts": "2026-10-01T22:17:33.871Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 347125.86,
		"hash": "931c7a7e7089caa7e723bbe40855a8cb7c345a71014e6d85cee193c09a5b3d58"
	},
	{
		"id": "426b1dc026b8",
		"ts": "2026-10-01T22:17:34.109Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3765040.53,
		"hash": "426b1dc026b8d37d5d932404f580d7b5b470d140f739f9dc8099fed4f13d36c5"
	},
	{
		"id": "8c1606f746bb",
		"ts": "2026-10-01T22:17:34.348Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 242856.02,
		"hash": "8c1606f746bbb35acc43a508c73ad99b1426124c9a073c1e476e394598513c47"
	},
	{
		"id": "1c693703b37d",
		"ts": "2026-10-01T22:17:34.581Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1205660.27,
		"hash": "1c693703b37dd6a814076ccd7c765869f2dfb59c06412150f82f5fad155e33b7"
	},
	{
		"id": "abea3c2ff6c3",
		"ts": "2026-10-01T22:17:34.815Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1757382.21,
		"hash": "abea3c2ff6c306880b21cd7b19338bc9844ed1a6701c871aa1f75eb0104fa6d0"
	},
	{
		"id": "60b0914c60e1",
		"ts": "2026-10-01T22:17:35.049Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 498975.89,
		"hash": "60b0914c60e19d7483a8b907f9669af11a53ba0d7327a2c0ac788e1061914282"
	},
	{
		"id": "94fbeb87f984",
		"ts": "2026-10-01T22:17:35.267Z",
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
		"liquidityUsd": 382843.19,
		"hash": "94fbeb87f984fe121c5453fdfcdb8216ad277dc65f1b55d5891b19091d361906"
	},
	{
		"id": "1f9d7c00058d",
		"ts": "2026-10-01T22:17:35.497Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182246.51,
		"hash": "1f9d7c00058d4acbf394c808ffbf97f7830356100a447136d2291125622eaeb0"
	},
	{
		"id": "33a749b7b2c5",
		"ts": "2026-10-01T22:17:35.730Z",
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
		"liquidityUsd": 540049.87,
		"hash": "33a749b7b2c59d29e0281f70805b2ae1b47f0d0e1b9b0a6eb9a4f2baf17ffd56"
	},
	{
		"id": "01602f5eb331",
		"ts": "2026-10-01T22:17:35.958Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 687673.19,
		"hash": "01602f5eb3318a4b5dc724486baf462aa2dbfc68217920fb6bcd8713e984b962"
	},
	{
		"id": "028f6de41e25",
		"ts": "2026-10-01T17:15:08.915Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162437700.75,
		"hash": "028f6de41e25c0cb61a22c6674a21c2bf49f0885de354ebc3d38e1fc43b4654b"
	},
	{
		"id": "ab710145bc43",
		"ts": "2026-10-01T17:15:09.319Z",
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
		"liquidityUsd": 16808859.88,
		"hash": "ab710145bc43c11e011ad0b0cd43f8a0b182c0192bb2274ac91b1aa5ca9204e5"
	},
	{
		"id": "5997b4965507",
		"ts": "2026-10-01T17:15:09.565Z",
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
		"liquidityUsd": 869716.36,
		"hash": "5997b4965507c60073471cfbcd93194ad005cce2e75fb56272085d1bd65c9ed4"
	},
	{
		"id": "c6280dc716ec",
		"ts": "2026-10-01T17:15:09.795Z",
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
		"liquidityUsd": 40846678.6,
		"hash": "c6280dc716ec7edc25666926a7d6212a864669b2a02b96f9280325ebb0e8ac36"
	},
	{
		"id": "720b46fdec6a",
		"ts": "2026-10-01T17:15:10.021Z",
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
		"liquidityUsd": 4517075.45,
		"hash": "720b46fdec6acd7704632e9d0358a35c886e14ae3c253058ea94e5c39e2a2e07"
	},
	{
		"id": "b5e6b68ded88",
		"ts": "2026-10-01T17:15:10.255Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1304775.31,
		"hash": "b5e6b68ded889bcc17fef0b28342afdc4c9fd4325e73c68d58f2b0e59bb0c061"
	},
	{
		"id": "bc9531c68cb5",
		"ts": "2026-10-01T17:15:10.498Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 40846678.6,
		"hash": "bc9531c68cb5e022ac8b53fe28a46b5947a23441d980aa6bf4cc144bf723f16d"
	},
	{
		"id": "c142a46c3c2e",
		"ts": "2026-10-01T17:15:10.732Z",
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
		"liquidityUsd": 2113586.19,
		"hash": "c142a46c3c2e7e1f2b481b4ad3ebb0dd36c091c7e3c4017b4fd7d3884c3a4f3b"
	},
	{
		"id": "2f30f7511adc",
		"ts": "2026-10-01T17:15:10.966Z",
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
		"liquidityUsd": 1734373.02,
		"hash": "2f30f7511adca248c7c54956a63fb4215efa35d2a8f43469692fa3968f7a1267"
	},
	{
		"id": "f3133199144e",
		"ts": "2026-10-01T17:15:11.180Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1807392.19,
		"hash": "f3133199144e455832780780ba81ff912c15a9a43ce938164317c29e786a23d1"
	},
	{
		"id": "bd16eb4b806b",
		"ts": "2026-10-01T17:15:11.379Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 346974.72,
		"hash": "bd16eb4b806b42d87bbb3d774afe9b13c169e07093437eba11575e5a9f225512"
	},
	{
		"id": "09bed536de72",
		"ts": "2026-10-01T17:15:11.584Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3754464.02,
		"hash": "09bed536de72780d8fa9aa87067824eb760ed5ed18692b952817d86b543d4316"
	},
	{
		"id": "1135f88d9560",
		"ts": "2026-10-01T17:15:11.848Z",
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
		"liquidityUsd": 527844.14,
		"hash": "1135f88d9560cfe7a5d10d7598c2365e9e3e630ac14bb52efd2d2f4c85c01af8"
	},
	{
		"id": "2c34a7076158",
		"ts": "2026-10-01T17:15:12.268Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1206106.59,
		"hash": "2c34a7076158f8b025bcce97813cdb0b0ffb4ce8eec67cded9cce1d458740681"
	},
	{
		"id": "8149ff35a95e",
		"ts": "2026-10-01T17:15:12.480Z",
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
		"liquidityUsd": 365438.06,
		"hash": "8149ff35a95eecd3bea1f03b872900c55e61fa42500686fdbb4cc7b2ede65e72"
	},
	{
		"id": "405f401f139f",
		"ts": "2026-10-01T17:15:12.677Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18006907.38,
		"hash": "405f401f139faad703edad5910d6b21f61ad93e9881fb8847aaa741d2687cb59"
	},
	{
		"id": "820ca3d9ba4e",
		"ts": "2026-10-01T17:15:12.895Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 467550.66,
		"hash": "820ca3d9ba4eb75a89bbadb6b88884ab85658d6f7b0e723c5d120d3a21aa8195"
	},
	{
		"id": "4020344f7274",
		"ts": "2026-10-01T17:15:13.117Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 164435.52,
		"hash": "4020344f7274f633fbfb29ca8b192eb9d57579bc9d53cae21fc5ca81a2a5368d"
	},
	{
		"id": "c17b5944a89b",
		"ts": "2026-10-01T17:15:13.319Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 206176.77,
		"hash": "c17b5944a89be22be09750724ed3a9fecd733f7c1cbe5fd38ba29b4603900faf"
	},
	{
		"id": "000ad355aa24",
		"ts": "2026-10-01T10:41:46.322Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 162021639.62,
		"hash": "000ad355aa24a9af232389762e05599dfdbb46f2e4c6a9701c250aaba7d49910"
	},
	{
		"id": "0cb75b540d7b",
		"ts": "2026-10-01T10:41:46.596Z",
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
		"liquidityUsd": 17486975.68,
		"hash": "0cb75b540d7bf1566e693790eacab1172d5c896e870d850806c855dad186e9e4"
	},
	{
		"id": "e9e0b02745d1",
		"ts": "2026-10-01T10:41:46.891Z",
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
		"liquidityUsd": 870156.7,
		"hash": "e9e0b02745d16342efb090d252cca51d2d1d90a66cf53b3de448612e68c08718"
	},
	{
		"id": "1fcf407b7bba",
		"ts": "2026-10-01T10:41:47.148Z",
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
		"liquidityUsd": 41781077.53,
		"hash": "1fcf407b7bba053a19c7d3bfefca210922550a92cee74a41c4360019af17fdfa"
	},
	{
		"id": "ea201bbfb621",
		"ts": "2026-10-01T10:41:47.404Z",
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
		"liquidityUsd": 4573486.69,
		"hash": "ea201bbfb621fde0795eef5401813a63f1d3baa49f55559273bf9fc5a135fd74"
	},
	{
		"id": "c5ba2f74b03c",
		"ts": "2026-10-01T10:41:47.663Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1308283.04,
		"hash": "c5ba2f74b03cfde0b9cbdebb72b1d325d2d5f7ebe84574bd892cc147ecbcedd4"
	},
	{
		"id": "99cb8f1d879d",
		"ts": "2026-10-01T10:41:47.906Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41781077.53,
		"hash": "99cb8f1d879d1901139d4179cffb62cbf7f2e6aac4e0cf51968cf387983769a7"
	},
	{
		"id": "88af168d1050",
		"ts": "2026-10-01T10:41:48.164Z",
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
		"liquidityUsd": 2261392.62,
		"hash": "88af168d10509c1031c376b7dd02d2389790e6dc237da127abfecf2fbfd5082a"
	},
	{
		"id": "55f8c8b414ac",
		"ts": "2026-10-01T10:41:48.441Z",
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
		"liquidityUsd": 1699398.78,
		"hash": "55f8c8b414ac3ccc4b893076fa5db01ae32411756659074f099a0f95f6ab1ee7"
	},
	{
		"id": "d082e3f1d57e",
		"ts": "2026-10-01T10:41:48.684Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3752111.25,
		"hash": "d082e3f1d57ed45c32977ca33a865ed0ac2af4c5bd2e651b7f068f479a852064"
	},
	{
		"id": "4b31036421fd",
		"ts": "2026-10-01T10:41:48.922Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1719422.63,
		"hash": "4b31036421fd33e1d87ff864de8a1c20a5cb6daedbcced706dac0073bb1655a1"
	},
	{
		"id": "15902876b318",
		"ts": "2026-10-01T10:41:49.152Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 304189.72,
		"hash": "15902876b318dd2b1b33574caf9db8f964a18af54be8bf5b33b46764751d9d1c"
	},
	{
		"id": "de0fae24022e",
		"ts": "2026-10-01T10:41:49.373Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 663213.52,
		"hash": "de0fae24022e988088b807a5b2d25f315e2402f88342f4e0e905c195b189ae66"
	},
	{
		"id": "bb1225a47910",
		"ts": "2026-10-01T10:41:49.605Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 390740.52,
		"hash": "bb1225a47910457d693111a4e89434e5074e42346820ab2086e7efdb08827422"
	},
	{
		"id": "853642a9c6bb",
		"ts": "2026-10-01T10:41:49.836Z",
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
		"liquidityUsd": 369333.77,
		"hash": "853642a9c6bb4d5b062a182c63a162345e3c99d12e48c5f8531eebb0c8032689"
	},
	{
		"id": "bb0a4e962ae9",
		"ts": "2026-10-01T10:41:50.057Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 158585.54,
		"hash": "bb0a4e962ae92dbd6855cd831d5853721e383e06afa0f79e0303e0496527ffb5"
	},
	{
		"id": "063f24a7b8c2",
		"ts": "2026-10-01T10:41:50.287Z",
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
		"liquidityUsd": 510931.28,
		"hash": "063f24a7b8c2c449b13dcbb8b72f0c195183ea9bd9f1641273d74d43846db722"
	},
	{
		"id": "6d083dff703c",
		"ts": "2026-10-01T10:41:50.522Z",
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
		"liquidityUsd": 18185363.12,
		"hash": "6d083dff703c7d9a83cb44b2ae628151fd5c2c6238dcad432aa5339e14810623"
	},
	{
		"id": "52f0d2da5091",
		"ts": "2026-10-01T10:41:50.742Z",
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
		"liquidityUsd": 549536.24,
		"hash": "52f0d2da5091a56032074e0015e962930beb2a7571f1aa058abd901e6f3d5357"
	},
	{
		"id": "3b5920bcf4b2",
		"ts": "2026-10-01T03:55:11.019Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 161313674.46,
		"hash": "3b5920bcf4b29eb66a365756a458cacac8436693d60be2fcade731ca0f02d2d6"
	},
	{
		"id": "b150103359f5",
		"ts": "2026-10-01T03:55:11.501Z",
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
		"liquidityUsd": 17402834.46,
		"hash": "b150103359f5c462d3e0d3126af448dcc2d0b3d977ab5b8b2dfa9c94e8caa84e"
	},
	{
		"id": "f924c69af309",
		"ts": "2026-10-01T03:55:11.778Z",
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
		"liquidityUsd": 874693.34,
		"hash": "f924c69af3090a47779219db61b06a75ce2a514c7250dde77bf9c767bbe558ca"
	},
	{
		"id": "37dc9d8a5a9f",
		"ts": "2026-10-01T03:55:12.040Z",
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
		"liquidityUsd": 42047368.18,
		"hash": "37dc9d8a5a9fc4db5f11dce5b5444963ac7864ba212c0f6c6bedf0eb791eac8d"
	},
	{
		"id": "5472ee50c111",
		"ts": "2026-10-01T03:55:12.295Z",
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
		"liquidityUsd": 4595495.8,
		"hash": "5472ee50c111815180fccda493f96c1bd65524eb30c9f79b6040438d387e6710"
	},
	{
		"id": "815231f38438",
		"ts": "2026-10-01T03:55:12.554Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1319854.53,
		"hash": "815231f38438193f4312f1ed18266a2c67bf1dd57d786926d6dcc2d5b4a21752"
	},
	{
		"id": "027904e49878",
		"ts": "2026-10-01T03:55:12.801Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2422631.21,
		"hash": "027904e49878855269101415c010e6edb43489f579aaf6d14c471d24ae448f58"
	},
	{
		"id": "05027c33dda9",
		"ts": "2026-10-01T03:55:13.081Z",
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
		"liquidityUsd": 2310444.37,
		"hash": "05027c33dda94a734a7082ff21c8ce7b7ec595a689ae320ff5840927bc615017"
	},
	{
		"id": "ed290cda8541",
		"ts": "2026-10-01T03:55:13.333Z",
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
		"liquidityUsd": 1731046.89,
		"hash": "ed290cda85411cd3db6c0fcfe09332f5fd4d0fd0ac1ea68dad367891456fc59f"
	},
	{
		"id": "605648fd3d95",
		"ts": "2026-10-01T03:55:13.591Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3770730.71,
		"hash": "605648fd3d955404ceaca6e4c86dec60fe478eef73e45f4323d6984162f1ab90"
	},
	{
		"id": "3e54f3122eaa",
		"ts": "2026-10-01T03:55:13.820Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1692208.28,
		"hash": "3e54f3122eaada4e3f03a7942a45bd4db2b79ea672f681333049a5c08126ee34"
	},
	{
		"id": "5bbb2ca61aa3",
		"ts": "2026-10-01T03:55:14.050Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 164311.45,
		"hash": "5bbb2ca61aa332ae6db4ae9599e72d5d0a9b5b2bf61df1cf28609df6a8a63a5a"
	},
	{
		"id": "0c8e1cf1ca03",
		"ts": "2026-10-01T03:55:14.276Z",
		"symbol": "ICP",
		"token": "0x00f3C42833C3170159af4E92dbb451Fb3F708917",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 719416.18,
		"hash": "0c8e1cf1ca0394bcf70b26516d872d0e59433503b13aa5cdb92b6b23c067a438"
	},
	{
		"id": "c0c65d948f2c",
		"ts": "2026-10-01T03:55:14.503Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4241053.37,
		"hash": "c0c65d948f2cd3f4f5a5710ac6a757e804c61642a74a2c2e25c8b76d4b0cb242"
	},
	{
		"id": "c53395a5969a",
		"ts": "2026-10-01T03:55:14.732Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 495754.18,
		"hash": "c53395a5969a6d4c1920b90ddb6bc0a7baffbd2d4fc5b8450990024765296c3e"
	},
	{
		"id": "a9c0ee065b8f",
		"ts": "2026-10-01T03:55:14.959Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2726171.2,
		"hash": "a9c0ee065b8fc86f17db815bc1429e4103921e1c8922a6a0a577746f9ef8c951"
	},
	{
		"id": "d416d0b91f2d",
		"ts": "2026-10-01T03:55:15.183Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17927495.95,
		"hash": "d416d0b91f2d6cba92fd992e851fb733b4d4973759da1a7f7a1ff5e778220d2e"
	},
	{
		"id": "71f5628d7be0",
		"ts": "2026-10-01T03:55:15.491Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 662495.9,
		"hash": "71f5628d7be013f2be253bcb2b818d67894fd35298f0de589c8a38a93c6fa248"
	},
	{
		"id": "a98ff0fb5a3a",
		"ts": "2026-10-01T03:55:15.715Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1091931.71,
		"hash": "a98ff0fb5a3a533276c40c46c55dc96de29cac7c61cfef8db02bdde4f276dbab"
	},
	{
		"id": "d85dc0e8feaf",
		"ts": "2026-09-30T23:24:47.199Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 161399096.52,
		"hash": "d85dc0e8feaf1ea8ce03ce46baddadf913cf62d49d1313b704d33eac8e8060e1"
	},
	{
		"id": "47ff31e1e939",
		"ts": "2026-09-30T23:24:47.455Z",
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
		"liquidityUsd": 16559286.4,
		"hash": "47ff31e1e93929f45a74370113d6456f5fb5e9e4729c9eb0f8d34d514d69c10b"
	},
	{
		"id": "b815dfd7f1c9",
		"ts": "2026-09-30T23:24:47.668Z",
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
		"liquidityUsd": 875061.55,
		"hash": "b815dfd7f1c98054cb77b916968a19651429984e14e131ecee1d80a8efd2ae70"
	},
	{
		"id": "f08311481496",
		"ts": "2026-09-30T23:24:47.873Z",
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
		"liquidityUsd": 42030732.63,
		"hash": "f08311481496228eb95965c8fb32188a7898d63264279075425c8058503cace5"
	},
	{
		"id": "e166bde29e1e",
		"ts": "2026-09-30T23:24:48.086Z",
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
		"liquidityUsd": 4601106.31,
		"hash": "e166bde29e1e57a19657eca1eb0845d96d4b366835054ade7efb598557861264"
	},
	{
		"id": "e4ad472e1806",
		"ts": "2026-09-30T23:24:48.295Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1324860.69,
		"hash": "e4ad472e1806d08f7707ee3753865ae14e9f20141dc607121b49b4d3b9358725"
	},
	{
		"id": "201f04eab385",
		"ts": "2026-09-30T23:24:48.497Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42030732.63,
		"hash": "201f04eab3852d120f7d5e2fdb0130956427bd898e95b2f742aa1243fff8e094"
	},
	{
		"id": "518ca2ff7a63",
		"ts": "2026-09-30T23:24:48.710Z",
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
		"liquidityUsd": 2309372.64,
		"hash": "518ca2ff7a63432b436d7e20ab00451878cf969c7feb94c3952d4a92d88b730a"
	},
	{
		"id": "8c02763cf165",
		"ts": "2026-09-30T23:24:49.013Z",
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
		"liquidityUsd": 1759445.27,
		"hash": "8c02763cf16543a0d7efd24a29cb3c83f46c860b0f48e7cbbce5feb70a911134"
	},
	{
		"id": "50a0f8eea18c",
		"ts": "2026-09-30T23:24:49.216Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4016117.35,
		"hash": "50a0f8eea18c601fddfada1d54f3b2d7709ee4aa6179742ec8fe932f1571be79"
	},
	{
		"id": "86ecd7e729de",
		"ts": "2026-09-30T23:24:49.405Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1641165.78,
		"hash": "86ecd7e729de5fda707923ed7752997433292981fccbe711502a79bce85b7fd7"
	},
	{
		"id": "ca523406d3d4",
		"ts": "2026-09-30T23:24:49.608Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 174687.39,
		"hash": "ca523406d3d46c9cf910f6bc0826945aaeb37be6acc3c57316665c11192c8526"
	},
	{
		"id": "c07c2afd183f",
		"ts": "2026-09-30T23:24:49.797Z",
		"symbol": "ICP",
		"token": "0x00f3C42833C3170159af4E92dbb451Fb3F708917",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 713994.04,
		"hash": "c07c2afd183fe87f1d5ea9b00f6255a727ce7c8d46632d5ec5946cd128b7b774"
	},
	{
		"id": "cb1dc1bf87a3",
		"ts": "2026-09-30T23:24:49.988Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 499574.19,
		"hash": "cb1dc1bf87a3d0ef4fdc997cc7fb83e704a1c17af284f7e75a967915f4f0213d"
	},
	{
		"id": "f790b70295c3",
		"ts": "2026-09-30T23:24:50.183Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 626157.22,
		"hash": "f790b70295c36ca51a2662e173f389e18a0403ac5c374e14f08321f5ce8a5920"
	},
	{
		"id": "5417642d09de",
		"ts": "2026-09-30T23:24:50.376Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4277769.05,
		"hash": "5417642d09decd707e8855aa1f9288a84d21a0a217f88447d395171ffca3281a"
	},
	{
		"id": "fe7598c5c1a8",
		"ts": "2026-09-30T23:24:50.580Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1090118.1,
		"hash": "fe7598c5c1a8360e8a861f17a192a3965e2a8c7a66bcd8fcf2344222731551a4"
	},
	{
		"id": "f030db137c71",
		"ts": "2026-09-30T23:24:50.767Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2720346.46,
		"hash": "f030db137c71a9e7dae275d2d9953e7bdb7c29532e528e8e138270ffde8beb9b"
	},
	{
		"id": "2119bfdc5b23",
		"ts": "2026-09-30T23:24:50.963Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18052743.24,
		"hash": "2119bfdc5b2358ea8be417cda6feed168542a599565b42d0d5ec812d2f8a90d7"
	},
	{
		"id": "19069de25927",
		"ts": "2026-09-30T19:46:55.665Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 160898324.49,
		"hash": "19069de259278a0362280d08e450f6cc6af54953c47b0c3456702b121485fcac"
	},
	{
		"id": "ae6ad9d10f68",
		"ts": "2026-09-30T19:46:55.984Z",
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
		"liquidityUsd": 16184800.84,
		"hash": "ae6ad9d10f680d97cc904069dd78e0655e2acd4a6ed4c46246dd2309e16b1dc8"
	},
	{
		"id": "09c5197a9a06",
		"ts": "2026-09-30T19:46:56.192Z",
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
		"liquidityUsd": 875142.97,
		"hash": "09c5197a9a0655a466850b036753a5c46c6675d2ee7be3427a9890b0bde8a957"
	},
	{
		"id": "03f4edd4201f",
		"ts": "2026-09-30T19:46:56.393Z",
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
		"liquidityUsd": 41736363.51,
		"hash": "03f4edd4201f469411061336c3b8791eb18d6d6b689a46acc7d4181161721076"
	},
	{
		"id": "23ebe3c12ea6",
		"ts": "2026-09-30T19:46:56.579Z",
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
		"liquidityUsd": 4564514.29,
		"hash": "23ebe3c12ea63ef062a176c06f544cb154f468657fd85e9db98bcbae6b502da1"
	},
	{
		"id": "0793a972bc79",
		"ts": "2026-09-30T19:46:56.774Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1324949.74,
		"hash": "0793a972bc799b1477409be86217068acd7a696ed767b760cecd6dfd8924c6f8"
	},
	{
		"id": "ae0043ea1577",
		"ts": "2026-09-30T19:46:57.033Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41736363.51,
		"hash": "ae0043ea1577dcca3922fe11b5710740db311fc53d42349ac484eee7cc047200"
	},
	{
		"id": "7dbb934a1139",
		"ts": "2026-09-30T19:46:57.241Z",
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
		"liquidityUsd": 2298986.13,
		"hash": "7dbb934a11396e6518428bb1a5c5c252b303fa89cda942bbe301c1f164390076"
	},
	{
		"id": "7fedc783bcbc",
		"ts": "2026-09-30T19:46:57.441Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3898245.77,
		"hash": "7fedc783bcbc730e92c68d127ba2bcc9e9c70778a82057d54e6f0368230e852e"
	},
	{
		"id": "9e384f7f3a84",
		"ts": "2026-09-30T19:46:57.633Z",
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
		"liquidityUsd": 1784857.81,
		"hash": "9e384f7f3a844aa7f1245126e872b4b15d044bec3fcab3f0fba48da5eaa4d59d"
	},
	{
		"id": "4a5e8642ecc7",
		"ts": "2026-09-30T19:46:57.830Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1631245.12,
		"hash": "4a5e8642ecc7b3c40f42728115ba9bf7d49af8d250d68bc932b992f4ab857496"
	},
	{
		"id": "9b531e11e0f2",
		"ts": "2026-09-30T19:46:58.032Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 234877.87,
		"hash": "9b531e11e0f2971809ac0d35733b664713e08f239f6715b794e2093761426a2b"
	},
	{
		"id": "1c5f3d80c8bf",
		"ts": "2026-09-30T19:46:58.218Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 495162.85,
		"hash": "1c5f3d80c8bf6c1a5d616ac9b41dd65c6e7617fd03ec586e08bb489a4f3f6d71"
	},
	{
		"id": "530b4cc94722",
		"ts": "2026-09-30T19:46:58.411Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 643516.88,
		"hash": "530b4cc94722ed0d2879fc333b8bc3a39c0011159f1f363b1f4d418512531ac7"
	},
	{
		"id": "d83d325940a1",
		"ts": "2026-09-30T19:46:58.604Z",
		"symbol": "ICP",
		"token": "0x00f3C42833C3170159af4E92dbb451Fb3F708917",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 720172.45,
		"hash": "d83d325940a17f0d747ff9d3c5c893f6dd51c1b196a68f935ff9d82959c249b6"
	},
	{
		"id": "d213a42ae882",
		"ts": "2026-09-30T19:46:58.814Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1127332.84,
		"hash": "d213a42ae882752f91b17cde72f29e06e131308d2e97b5f5515a6384a91d0d68"
	},
	{
		"id": "d25d51ef2da1",
		"ts": "2026-09-30T19:46:59.013Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1086319.52,
		"hash": "d25d51ef2da1e086d158d993840d088ce54c6ce43e2e1ff0b7c311d0c41a8a7d"
	},
	{
		"id": "3955cb15b78b",
		"ts": "2026-09-30T19:46:59.194Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 383893.8,
		"hash": "3955cb15b78b6bcb53a9c780740e3c2962a180abd42844ed5cce42ab053f3767"
	},
	{
		"id": "3e43538ec7f2",
		"ts": "2026-09-30T19:46:59.401Z",
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
		"liquidityUsd": 369174.78,
		"hash": "3e43538ec7f2a6ed8ceed0c70c1b4ed9023e1d9dccfeea46a3bcd4a324350b56"
	},
	{
		"id": "a7e6d3e8e88e",
		"ts": "2026-09-30T14:33:25.224Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 161453531.76,
		"hash": "a7e6d3e8e88e5c08363e0bd0c33ba213684e9e5df815333e1f271c0a77f4d878"
	},
	{
		"id": "41a1dffcf7e2",
		"ts": "2026-09-30T14:33:26.639Z",
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
		"liquidityUsd": 16989873.2,
		"hash": "41a1dffcf7e2f5aa9cdcf9dde928ec23ef86a4432ba97b197af68608a280871e"
	},
	{
		"id": "6e46482b1b7b",
		"ts": "2026-09-30T14:33:26.927Z",
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
		"liquidityUsd": 892891.48,
		"hash": "6e46482b1b7ba6333f7c95dc13979b49ef3a33997727f277bf7a584c0877fb49"
	},
	{
		"id": "d972bdc2a21b",
		"ts": "2026-09-30T14:33:27.228Z",
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
		"liquidityUsd": 41810373.28,
		"hash": "d972bdc2a21bc68f216c677794c3a1851bb9735276364d5f42cc02ca2cb86d5f"
	},
	{
		"id": "4c9ee76355df",
		"ts": "2026-09-30T14:33:27.514Z",
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
		"liquidityUsd": 4568890.67,
		"hash": "4c9ee76355df9058cc0c12755cebe18f745744ff7e6e3295396283c70e4ded65"
	},
	{
		"id": "983d9bc87df3",
		"ts": "2026-09-30T14:33:27.775Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1327075.92,
		"hash": "983d9bc87df3288e1872b27fdbea499d4473a603db14b9f97e516304275fc0f8"
	},
	{
		"id": "796c14b169d5",
		"ts": "2026-09-30T14:33:28.095Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41772244.3,
		"hash": "796c14b169d5039c3e4e8a79f4857f9cd76a246f2099eeaf92ed9c29ed85ee49"
	},
	{
		"id": "999b303562db",
		"ts": "2026-09-30T14:33:28.398Z",
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
		"liquidityUsd": 2451419.54,
		"hash": "999b303562db64a5e6a5afc165fb9b396302031b97da508be7b6c61acd4ba7ed"
	},
	{
		"id": "7844c1143b96",
		"ts": "2026-09-30T14:33:28.681Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3850069.36,
		"hash": "7844c1143b96a25b86e80152ef7fffb828584715b0868ebcb6c180b6839425f2"
	},
	{
		"id": "a97393920c79",
		"ts": "2026-09-30T14:33:28.960Z",
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
		"liquidityUsd": 1787546.47,
		"hash": "a97393920c793b59d8d728255af6ab0c59c12afe9272d6c9f167b167a9b56d21"
	},
	{
		"id": "21ec1c70447a",
		"ts": "2026-09-30T14:33:29.210Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1649115.67,
		"hash": "21ec1c70447a3def9b9939a4c10341c0975196a28af03221d3a025fc9710109a"
	},
	{
		"id": "cb4b4fdadffa",
		"ts": "2026-09-30T14:33:29.446Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 269471.08,
		"hash": "cb4b4fdadffa86f41883cac78518827ec00eee7020f9b9f68bdc6150109112ab"
	},
	{
		"id": "a63bc001cb46",
		"ts": "2026-09-30T14:33:29.686Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 534341.73,
		"hash": "a63bc001cb46df50d22cd5891cdc9ed7f8b3170803c6f85e073f52809de57b49"
	},
	{
		"id": "6bdb3e66aeed",
		"ts": "2026-09-30T14:33:29.926Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 276114.66,
		"hash": "6bdb3e66aeed66fa1fb9dd844a0146c394662641cf636d9c1eebaff0ba325981"
	},
	{
		"id": "a7357457d5fb",
		"ts": "2026-09-30T14:33:30.163Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17949447.25,
		"hash": "a7357457d5fbc631968ddfb52cc3d7f4175fbb9637cab7ea2267006acf584981"
	},
	{
		"id": "9bb03fd2b56b",
		"ts": "2026-09-30T14:33:30.406Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 632881.94,
		"hash": "9bb03fd2b56bca33275b72e04aa2128fc44c240c17dbe16f9db680fd94e96fc4"
	},
	{
		"id": "f7850699c286",
		"ts": "2026-09-30T14:33:30.645Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1097552.78,
		"hash": "f7850699c2861d2f6516cecdbf406db8fba5bf8dd140959f0be571869e906e51"
	},
	{
		"id": "8864e5e118ed",
		"ts": "2026-09-30T14:33:30.890Z",
		"symbol": "ICP",
		"token": "0x00f3C42833C3170159af4E92dbb451Fb3F708917",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 720349.3,
		"hash": "8864e5e118ed4eee1770b45fa5d22e26f662da1d74ec2a80dd8aea17a495d592"
	},
	{
		"id": "9535888aa62f",
		"ts": "2026-09-30T14:33:31.132Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4215183.9,
		"hash": "9535888aa62f48c3b6ecda1a25371ee9c796c5e21a302230a5f603eeb3a8341a"
	},
	{
		"id": "b43c9132f8cf",
		"ts": "2026-09-30T07:53:17.703Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 160314641.6,
		"hash": "b43c9132f8cf9b875438ca9a4091bbd82404968ef99d44fb86883428d4febb80"
	},
	{
		"id": "0205bcf5622c",
		"ts": "2026-09-30T07:53:17.961Z",
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
		"liquidityUsd": 17216354.6,
		"hash": "0205bcf5622cb6dc7b7483c8117a31f936df631e07a3a288bd4c0cccefc774ac"
	},
	{
		"id": "477b2555c091",
		"ts": "2026-09-30T07:53:18.202Z",
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
		"liquidityUsd": 880484.15,
		"hash": "477b2555c091d640c9148d85216c4fb1a053c1b04dacb5396ec1d73c568d9288"
	},
	{
		"id": "a55f9dd895c7",
		"ts": "2026-09-30T07:53:18.448Z",
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
		"liquidityUsd": 41945664.04,
		"hash": "a55f9dd895c7e06107d648cd39746288ed0b68ab9a80a5885a857aa6696bf3ea"
	},
	{
		"id": "c20f1e79acfd",
		"ts": "2026-09-30T07:53:18.690Z",
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
		"liquidityUsd": 4524099.01,
		"hash": "c20f1e79acfde92be8dc35a8591d59d3821e6220bcb9fe3603bde6daf552415f"
	},
	{
		"id": "6ff0baaf90a5",
		"ts": "2026-09-30T07:53:18.920Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1300252.97,
		"hash": "6ff0baaf90a58e616045909b24caecd737bd076e968ab55b627c285b98f26ddc"
	},
	{
		"id": "85d8dd78259a",
		"ts": "2026-09-30T07:53:19.163Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41954526.44,
		"hash": "85d8dd78259a036046aa25ef669157d64d7c4faaed128c20e20d810130077427"
	},
	{
		"id": "8f6bcfcaef77",
		"ts": "2026-09-30T07:53:19.411Z",
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
		"liquidityUsd": 2445803.78,
		"hash": "8f6bcfcaef77884e1b868b923070ba78dc1b837629736f5ae92b4dc214b866a9"
	},
	{
		"id": "e18dbad74afd",
		"ts": "2026-09-30T07:53:19.648Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4066316.47,
		"hash": "e18dbad74afd46c98f4d0f27704a1a91e810797d16fa612d598271d6b0fec9d5"
	},
	{
		"id": "14032aeaa08b",
		"ts": "2026-09-30T07:53:19.880Z",
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
		"liquidityUsd": 1902368.55,
		"hash": "14032aeaa08b62b869b61c5f7d82856d3dd37c1156073a0a633027608d995dbe"
	},
	{
		"id": "2d0a5374e095",
		"ts": "2026-09-30T07:53:20.099Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265319.16,
		"hash": "2d0a5374e095b5936500a4d51bc56d0b2dad71f5ae5a071cbd09050fbfa37bfc"
	},
	{
		"id": "eb97fdd43a85",
		"ts": "2026-09-30T07:53:20.325Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1593925.51,
		"hash": "eb97fdd43a8528c7632236012e429ead25ecb2d987e41b9600ed9d88e381f9e2"
	},
	{
		"id": "acf8671b78b1",
		"ts": "2026-09-30T07:53:20.548Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 297103.83,
		"hash": "acf8671b78b17e211a643ad9bdcae68c87df36f42d891314196857f9ab9ac15d"
	},
	{
		"id": "98d01976e8ef",
		"ts": "2026-09-30T07:53:20.770Z",
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
		"liquidityUsd": 556671.9,
		"hash": "98d01976e8ef4739a64f06104a83c1c6f38c530a7050e40faf1f12dfcd0af8cc"
	},
	{
		"id": "712d575b6661",
		"ts": "2026-09-30T07:53:20.986Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2769078.42,
		"hash": "712d575b666142c7262489c7a6161f75d6af708da5c6369465d2d6ae69392b7f"
	},
	{
		"id": "cc8b3ee041cc",
		"ts": "2026-09-30T07:53:21.210Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17808199.15,
		"hash": "cc8b3ee041cca29348b8518fdcebf3b706635e3180ddd4a8a6c1e22357fd6d71"
	},
	{
		"id": "2944df9ffd01",
		"ts": "2026-09-30T07:53:21.431Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1045726.56,
		"hash": "2944df9ffd01afc584a29cde83cd2a53e42b5eb4352f075e266f0d08534196ea"
	},
	{
		"id": "eb06e0f5daa8",
		"ts": "2026-09-30T07:53:21.652Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 627888.3,
		"hash": "eb06e0f5daa820362e11fb205cfa81973c066e5fa365e0caa32b44cbfc680856"
	},
	{
		"id": "e513fb784cde",
		"ts": "2026-09-30T07:53:21.868Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1023128.13,
		"hash": "e513fb784cde26a90a85d5d4682843997f0d64d61f50e06ef0debeae21a2060e"
	},
	{
		"id": "d17a094facf0",
		"ts": "2026-09-30T01:00:40.549Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 160777842.54,
		"hash": "d17a094facf0d9a26dc3460a9db2b6e694462a30aa7ec57066485a187c52e65f"
	},
	{
		"id": "915af5f89d41",
		"ts": "2026-09-30T01:00:40.932Z",
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
		"liquidityUsd": 17123338.77,
		"hash": "915af5f89d415c7a66128d26455b61024482cf0f75ce58cba069723e4e493583"
	},
	{
		"id": "ef08bb98168f",
		"ts": "2026-09-30T01:00:41.144Z",
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
		"liquidityUsd": 872795.95,
		"hash": "ef08bb98168f8bca6110069d911eb26d9b4f78ad334edf158977deed038b6eff"
	},
	{
		"id": "7f1ace2ca43b",
		"ts": "2026-09-30T01:00:41.343Z",
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
		"liquidityUsd": 41922771.33,
		"hash": "7f1ace2ca43b3f39420f03e03f63113fb98405358285b31985af547612d23770"
	},
	{
		"id": "1fae72559291",
		"ts": "2026-09-30T01:00:41.546Z",
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
		"liquidityUsd": 4479335.68,
		"hash": "1fae72559291e5db0632c97c0cd32e6396d60572408b6faf4a148dd8ab3ed353"
	},
	{
		"id": "8c2a7b5a6930",
		"ts": "2026-09-30T01:00:41.893Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1301144.86,
		"hash": "8c2a7b5a69300b51a555beb4ad61558eb584d716b031f607ec41e1786d1da4aa"
	},
	{
		"id": "f0f2a1a27ed7",
		"ts": "2026-09-30T01:00:42.089Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41922771.33,
		"hash": "f0f2a1a27ed7ccf5403a688e10b4842a0cbbee5c91a4283296cbfa8bc1d9688a"
	},
	{
		"id": "44cc83b626cb",
		"ts": "2026-09-30T01:00:42.284Z",
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
		"liquidityUsd": 665569.31,
		"hash": "44cc83b626cb1104b65d46925aa927ab774fcd5b40891e87853cc44830e9a13c"
	},
	{
		"id": "5a485fcd1e4a",
		"ts": "2026-09-30T01:00:42.501Z",
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
		"liquidityUsd": 1830440.67,
		"hash": "5a485fcd1e4ac5e2e91efac12e62e35a92132ac7aff9a63cca59bb01a0497059"
	},
	{
		"id": "fcef7bbf395e",
		"ts": "2026-09-30T01:00:42.704Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3964544.01,
		"hash": "fcef7bbf395e5a5423d709d7502ded3221e958e84e2a7359717375ed0868af24"
	}
]
