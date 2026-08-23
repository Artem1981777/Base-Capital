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
	"updatedAt": "2026-08-23T03:53:52.069Z",
	"tokensScored": 13750,
	"verdictsIssued": 13750,
	"safe": 11842,
	"risky": 970,
	"likelyRug": 938,
	"ticks": 801
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "74e288f6ad8f",
		"ts": "2026-08-23T03:53:47.080Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109867382.43,
		"hash": "74e288f6ad8fb154cc6ab0fd2c2d21584400bce36094de838b8ed0744ad5cb50"
	},
	{
		"id": "9ddc62250f21",
		"ts": "2026-08-23T03:53:47.686Z",
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
		"liquidityUsd": 17554694.6,
		"hash": "9ddc62250f21d94b08c89cf3e35db187bf2cfc3fe5e7f835b74730064a1caf7c"
	},
	{
		"id": "a4b2bbece5de",
		"ts": "2026-08-23T03:53:48.106Z",
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
		"liquidityUsd": 877519.41,
		"hash": "a4b2bbece5de8c5e104d5c619ae9636d2173389d2073622c83833f4f47df94b3"
	},
	{
		"id": "1d667c839825",
		"ts": "2026-08-23T03:53:48.531Z",
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
		"liquidityUsd": 27880248.58,
		"hash": "1d667c839825fa3e274c2ad000ccb185b03f0a94b8d2477f7bec1b7ec6c6104b"
	},
	{
		"id": "eff28864a280",
		"ts": "2026-08-23T03:53:48.765Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "eff28864a280f4910993693ca40f6c22454e8e32087818a96947e8bb6e8c11b3"
	},
	{
		"id": "b5fcc8f8f5ea",
		"ts": "2026-08-23T03:53:49.000Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1145297.47,
		"hash": "b5fcc8f8f5ea166e644ffeab1c38a9b613bcd0cd2002af20b87df54530862917"
	},
	{
		"id": "8bd1f9494888",
		"ts": "2026-08-23T03:53:49.239Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 906291.98,
		"hash": "8bd1f9494888ee94f466873e0490618c45d23b9d4a755ba35e2a5209fec1a72f"
	},
	{
		"id": "04eb8c1b57a7",
		"ts": "2026-08-23T03:53:49.472Z",
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
		"liquidityUsd": 1794265.2,
		"hash": "04eb8c1b57a7acede458a79004e148a56b10bd000752ca5194e0f57d48f38f65"
	},
	{
		"id": "fa030b22cedc",
		"ts": "2026-08-23T03:53:49.703Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1429802.33,
		"hash": "fa030b22cedc92a45aa98871648bc62dba6a5ddd9954858d2576af39790c9968"
	},
	{
		"id": "8e383599617e",
		"ts": "2026-08-23T03:53:50.131Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 791686.81,
		"hash": "8e383599617e831f5703efc6e4af5a99fb5f1e60a3c90aecc203285bfd03206d"
	},
	{
		"id": "fdc4f6956ef4",
		"ts": "2026-08-23T03:53:50.347Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 124022.81,
		"hash": "fdc4f6956ef4994c4f3e281149115f740ef9c18ed0e0ec4db554cafd1617caf1"
	},
	{
		"id": "e578552c8109",
		"ts": "2026-08-23T03:53:50.562Z",
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
		"liquidityUsd": 727197.25,
		"hash": "e578552c8109cf79713ee57bc296ec60b95782e4a154d0d0f972b94d9072d462"
	},
	{
		"id": "64939bf94c23",
		"ts": "2026-08-23T03:53:50.777Z",
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
		"liquidityUsd": 10894759.02,
		"hash": "64939bf94c23fe3cfc5df0e793c3d4ab7e94a1cda494af7bdb6035ddb6246281"
	},
	{
		"id": "c912d87154c7",
		"ts": "2026-08-23T03:53:50.993Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 584593.53,
		"hash": "c912d87154c7e5ddf0a428b1cda1084a1d5ce2a4935ae4bec18fe1f01f5d2ba3"
	},
	{
		"id": "4b457416dba9",
		"ts": "2026-08-23T03:53:51.209Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3229717.2,
		"hash": "4b457416dba9973385f7672e01a46cad8c5104f74b1b1a62d9aa00f937259e8d"
	},
	{
		"id": "8d15fa725fc5",
		"ts": "2026-08-23T03:53:51.424Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 882277.43,
		"hash": "8d15fa725fc5475fe86ac6f10d17f9acc4b84931164294cde67776104a515788"
	},
	{
		"id": "93c00b16e99f",
		"ts": "2026-08-23T03:53:51.638Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1801831.96,
		"hash": "93c00b16e99f69c5166c40492013edd90b1b4f41fa57ff0183688b80c65327b8"
	},
	{
		"id": "ec9eabdfcf4f",
		"ts": "2026-08-23T03:53:51.852Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 529307.44,
		"hash": "ec9eabdfcf4f32bb693ae7e9385f6e49af22b17ceb3f3602fa47291a2069a5e1"
	},
	{
		"id": "a8572a36bae3",
		"ts": "2026-08-23T03:53:52.069Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3956006.8,
		"hash": "a8572a36bae3c7b747aa7d12f06d8a06238c0921c6b60c364f64edfa4fb518d3"
	},
	{
		"id": "7a9a585a81a5",
		"ts": "2026-08-23T02:58:27.718Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109759421.25,
		"hash": "7a9a585a81a55fe9055d635016d48e25b0622befe1ab6564e84e365595cd8b8a"
	},
	{
		"id": "3c0adea393fa",
		"ts": "2026-08-23T02:58:28.394Z",
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
		"liquidityUsd": 16398976.07,
		"hash": "3c0adea393fa0654ec0414cd05fc09f9bfa79856792e2c3da0e6577b0e780223"
	},
	{
		"id": "01fcb582126a",
		"ts": "2026-08-23T02:58:28.889Z",
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
		"liquidityUsd": 885226.6,
		"hash": "01fcb582126abd2d4655f2bbcebeb76b83ddf917c0a8c5a384227a1c39b7edfd"
	},
	{
		"id": "e058259b113c",
		"ts": "2026-08-23T02:58:29.358Z",
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
		"liquidityUsd": 28009405.38,
		"hash": "e058259b113c68edc2fdb050c96bebc3e25be611db4c9be175ea8429318efa0a"
	},
	{
		"id": "5170a840bacc",
		"ts": "2026-08-23T02:58:29.614Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "5170a840bacca0ffb7556082a7f881f8516601d882cf853f06b905766b922ec6"
	},
	{
		"id": "1b80957015b3",
		"ts": "2026-08-23T02:58:29.872Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1152448.06,
		"hash": "1b80957015b30a8a093fb6c80722c592dd7ed0c4d99cd4acb8827ffce72ebc31"
	},
	{
		"id": "6d29714a1a19",
		"ts": "2026-08-23T02:58:30.125Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 903318.99,
		"hash": "6d29714a1a197108a466a4863a9818c0539cb5203c60c3b60823a4cda3a3eed8"
	},
	{
		"id": "be70eea4dfea",
		"ts": "2026-08-23T02:58:30.379Z",
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
		"liquidityUsd": 1798248.96,
		"hash": "be70eea4dfead27020f94e7666305fd58b0bdad0f6a27f9ffd85e59d2f7474e8"
	},
	{
		"id": "ab52a004741a",
		"ts": "2026-08-23T02:58:30.648Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1414393.31,
		"hash": "ab52a004741a61fc8649f06e901476ebf6fc6a50d619a8dc4d7e5faf06d1a48f"
	},
	{
		"id": "401900801727",
		"ts": "2026-08-23T02:58:31.339Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 787130.61,
		"hash": "401900801727a8fc3e1b2dd0f3b12eae7fef8aed850feb6fa9859702fb0ad4f8"
	},
	{
		"id": "15ed3923e8bf",
		"ts": "2026-08-23T02:58:31.577Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 125253.85,
		"hash": "15ed3923e8bff9ba9e44c20147029c564aca28ba6488322e63454881ed42aeb6"
	},
	{
		"id": "0115bac728d5",
		"ts": "2026-08-23T02:58:31.840Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 721398.14,
		"hash": "0115bac728d54111f21d5abd7508f8bbc3810d2cb02a7a7b02a18bd93986a8af"
	},
	{
		"id": "217e8a6b4247",
		"ts": "2026-08-23T02:58:32.078Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10971946.89,
		"hash": "217e8a6b42472ab641a8387cde79fcda25b35083eb80bc094c9f39667e34b0f0"
	},
	{
		"id": "f71dfa827e24",
		"ts": "2026-08-23T02:58:32.313Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 584667.22,
		"hash": "f71dfa827e245f01af0d4afbbb46d2b2378971f333817b218e445aa0327398d3"
	},
	{
		"id": "408ebb6a3494",
		"ts": "2026-08-23T02:58:32.550Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3281356.19,
		"hash": "408ebb6a34949de148786efc6d2352adacfccbabcc13593dc2667e369aa347f9"
	},
	{
		"id": "d5268c8eae0f",
		"ts": "2026-08-23T02:58:32.784Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 877906.97,
		"hash": "d5268c8eae0fed81889abd96643ed8dccbe161f16326417825a26d04133fc13e"
	},
	{
		"id": "55c88bcde3e9",
		"ts": "2026-08-23T02:58:33.022Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1814166.93,
		"hash": "55c88bcde3e9f73b306e695aafb91527784ca27a4678eedc4220f6c61b475fe6"
	},
	{
		"id": "851320d7e862",
		"ts": "2026-08-23T02:58:33.256Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3961499.53,
		"hash": "851320d7e86246cfb467e040f9fbbe15b9007bcc0b7e0303c23444d068e3eac9"
	},
	{
		"id": "6b3ea0a005de",
		"ts": "2026-08-23T02:58:33.494Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 529289.91,
		"hash": "6b3ea0a005de5db108304e24a635930fdf35687638f2f646a49d4206b251b000"
	},
	{
		"id": "14a88c3d6f2d",
		"ts": "2026-08-23T01:04:53.304Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110016311.68,
		"hash": "14a88c3d6f2d75a83bbc3e3f8e54e6e7c720fcf54e32a2e50d2a1ae340675378"
	},
	{
		"id": "e8b5a4f0d9b6",
		"ts": "2026-08-23T01:04:53.932Z",
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
		"liquidityUsd": 18702800.58,
		"hash": "e8b5a4f0d9b61efed2b8ffdff80ab3ecdd55229c6de403518327e7e145da3111"
	},
	{
		"id": "582caea67cb6",
		"ts": "2026-08-23T01:04:54.353Z",
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
		"liquidityUsd": 878886.48,
		"hash": "582caea67cb66c41ad63aa7ef20dc779ad97434456fd633751076c01acec3f5e"
	},
	{
		"id": "dd2fbac617f9",
		"ts": "2026-08-23T01:04:54.779Z",
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
		"liquidityUsd": 28161973.26,
		"hash": "dd2fbac617f911971a60b84e4ee357f3c48464b1e937f5efd78fd300ac570046"
	},
	{
		"id": "94189d23e5ac",
		"ts": "2026-08-23T01:04:55.034Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "94189d23e5ac9cea72a030061e5d721b74ac70dacf8c0243a0fc4f7bbf6c652a"
	},
	{
		"id": "80d9526e5989",
		"ts": "2026-08-23T01:04:55.283Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1164084.55,
		"hash": "80d9526e5989d5facf3c86fefdd4f10007b148e8419c9b7b1ed35abb520b77f3"
	},
	{
		"id": "7c250119e1d5",
		"ts": "2026-08-23T01:04:55.512Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 911498.66,
		"hash": "7c250119e1d52ff6c13462c516881127a61f91539b9293304f8b557707bc0c54"
	},
	{
		"id": "b903942b35c6",
		"ts": "2026-08-23T01:04:55.778Z",
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
		"liquidityUsd": 1808311.51,
		"hash": "b903942b35c6032398f51b8a389316c7d7b65c5883600b79cfb7281a78e4fa5e"
	},
	{
		"id": "67799058e98b",
		"ts": "2026-08-23T01:04:56.014Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1419057.1,
		"hash": "67799058e98ba5e0a3d0a17438148f50f4295d45676c23273592676f51f445e8"
	},
	{
		"id": "572301cd29c9",
		"ts": "2026-08-23T01:04:56.677Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 787158.13,
		"hash": "572301cd29c957b3a9039c9f03a677bbb95470a3c0725ebb4b1121230c6239c6"
	},
	{
		"id": "36b7217d5a35",
		"ts": "2026-08-23T01:04:56.903Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 133660.22,
		"hash": "36b7217d5a35978e0fdb8c5df9073a5357906efacdb37b57866340a447df4ed7"
	},
	{
		"id": "ce4b04243d67",
		"ts": "2026-08-23T01:04:57.121Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 698343.94,
		"hash": "ce4b04243d678bb3b8c2aa59221ea85d58dc4fb3d2a7c78aecb95d508890920c"
	},
	{
		"id": "93086d476ccc",
		"ts": "2026-08-23T01:04:57.334Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11092847.81,
		"hash": "93086d476cccffb49e203d265af838cc96558ccf6044f6e1ec1a1d13ce59506f"
	},
	{
		"id": "2c8375a95679",
		"ts": "2026-08-23T01:04:57.550Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 606818.29,
		"hash": "2c8375a95679869c82f5c707bef4cf0ca10ff4ba436b871539e8c3b1e557022f"
	},
	{
		"id": "52dfc9a1bd88",
		"ts": "2026-08-23T01:04:57.764Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 904179.11,
		"hash": "52dfc9a1bd88265da0ec35e46cb3941682d6e70db347ddce58f3cf3c1ed97421"
	},
	{
		"id": "9477a8a0eef8",
		"ts": "2026-08-23T01:04:57.999Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3341731.52,
		"hash": "9477a8a0eef8125a1a3e61f9d2c0daed47ce4544a29c43e28f86f85b72ef041a"
	},
	{
		"id": "4d19b7bf39a0",
		"ts": "2026-08-23T01:04:58.220Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 499116.56,
		"hash": "4d19b7bf39a0f6a66b0b69bd89bf172f703477196276871b75df5a7b9c05ed0e"
	},
	{
		"id": "27f9e22e68cb",
		"ts": "2026-08-23T01:04:58.446Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 570281.54,
		"hash": "27f9e22e68cbdbfd1860e1a1343ed6f1f9c4dcb99d17e52f075a4d35b287058b"
	},
	{
		"id": "e83792ebaa3c",
		"ts": "2026-08-23T01:04:58.665Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3877199.43,
		"hash": "e83792ebaa3c2baf42c05952f13b1e3a948bdb650077551629ebda647bb2c63d"
	},
	{
		"id": "5e19fe12f01c",
		"ts": "2026-08-22T23:16:49.798Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109794144.87,
		"hash": "5e19fe12f01cf02e7eb00462ec4ba6bf7d74461d240df890dbe70c858399ddb5"
	},
	{
		"id": "7b81667f8d8e",
		"ts": "2026-08-22T23:16:50.451Z",
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
		"liquidityUsd": 17638043.22,
		"hash": "7b81667f8d8ead283a376f43df924789acd78f47172f9aaffb0c19dcb03e5622"
	},
	{
		"id": "72b4cf1c1014",
		"ts": "2026-08-22T23:16:50.894Z",
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
		"liquidityUsd": 874276.82,
		"hash": "72b4cf1c1014639d5ab0a24d84d7967f5ad4757877f5502468467265734d03e1"
	},
	{
		"id": "d7a14872d19b",
		"ts": "2026-08-22T23:16:51.363Z",
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
		"liquidityUsd": 27989535.2,
		"hash": "d7a14872d19bac87e671a2a5e2e87e591d0ae4e86bb7411d460175bb4816bc2a"
	},
	{
		"id": "5ae44e936a71",
		"ts": "2026-08-22T23:16:51.807Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "5ae44e936a715737dea1f9b3072a9bb14868736c23919be889cb3d59c7c82b36"
	},
	{
		"id": "dc0274dfed10",
		"ts": "2026-08-22T23:16:52.126Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1154480.55,
		"hash": "dc0274dfed107640d4bb6c2cd0d2b5c25d256d097ff0d77f17fb153a537086be"
	},
	{
		"id": "d9cc7ac71037",
		"ts": "2026-08-22T23:16:52.376Z",
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
		"liquidityUsd": 408365.57,
		"hash": "d9cc7ac710377e88f6714a7181c20715009f0fbaf703a2f55fe83582435f17ef"
	},
	{
		"id": "864ee118a010",
		"ts": "2026-08-22T23:16:52.640Z",
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
		"liquidityUsd": 1681215.47,
		"hash": "864ee118a0107aad88824b4addfc945c82e97bb61aa951da76b8f99fafaee4c3"
	},
	{
		"id": "2a5777179ffb",
		"ts": "2026-08-22T23:16:53.353Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 797560.21,
		"hash": "2a5777179ffb18e643ed7ceaa708713fa7d1b856fe40abb9100318e7f2c66fac"
	},
	{
		"id": "490e31437d5d",
		"ts": "2026-08-22T23:16:53.665Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1305487.29,
		"hash": "490e31437d5df84f28c29b0b46bcb21489623f1503b83928125a1116312c3468"
	},
	{
		"id": "63de3cf3197e",
		"ts": "2026-08-22T23:16:53.892Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 138057.26,
		"hash": "63de3cf3197e5107f9b73bf7fbde756550a74edc9699ebfbc36709a9faf66e5e"
	},
	{
		"id": "90ae68071607",
		"ts": "2026-08-22T23:16:54.131Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10949566.34,
		"hash": "90ae6807160727953260d01c3700991efd1edc378865df3d07921db148402d0c"
	},
	{
		"id": "2203e4f903a9",
		"ts": "2026-08-22T23:16:54.357Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 715129.07,
		"hash": "2203e4f903a92f867795d151f5f16cab46009da343ffd85a02a5ecf0412baad5"
	},
	{
		"id": "c2ddc993f82c",
		"ts": "2026-08-22T23:16:54.596Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 618522.1,
		"hash": "c2ddc993f82c7fb8939afd90beda6b34f08d0fc5a8a43b7defe21ef57ac570c2"
	},
	{
		"id": "cefd8835661c",
		"ts": "2026-08-22T23:16:54.823Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 892615.1,
		"hash": "cefd8835661c0fee5dd27cbe2e94762179984180d5c8be84b5e2765f9f838eec"
	},
	{
		"id": "19eab432fdc8",
		"ts": "2026-08-22T23:16:55.048Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567608.79,
		"hash": "19eab432fdc8792b7c385b5db0f174c55b3e6b7c8ac7b945fd6781f7079761b7"
	},
	{
		"id": "719a397d1e86",
		"ts": "2026-08-22T23:16:55.287Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3328468.28,
		"hash": "719a397d1e8668f36f5cdedbe0b3e8e379ece5ddb2c6bfafb15a5b518da20e1a"
	},
	{
		"id": "12616769a0da",
		"ts": "2026-08-22T23:16:55.512Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 513448.92,
		"hash": "12616769a0dadf663b44f65ff1d353feb966a4ddd49d292f4b05fdee0365662c"
	},
	{
		"id": "051dd9f07fcf",
		"ts": "2026-08-22T22:17:13.602Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109781374.2,
		"hash": "051dd9f07fcf23eefcdae67bb3bc54644c26d00c8a06dee130b368e9f4ad2cc5"
	},
	{
		"id": "ff0245f1b5c3",
		"ts": "2026-08-22T22:17:13.952Z",
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
		"liquidityUsd": 17698256.12,
		"hash": "ff0245f1b5c392c2016a953ce27abbfd89fb7265725148d795f7738a09185ddd"
	},
	{
		"id": "378b9d1b88db",
		"ts": "2026-08-22T22:17:14.142Z",
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
		"liquidityUsd": 872503.21,
		"hash": "378b9d1b88db98b7bd0696d1023df542ea3c2e4e9f11c066e2025b78ff310792"
	},
	{
		"id": "2b5c77cac099",
		"ts": "2026-08-22T22:17:14.344Z",
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
		"liquidityUsd": 27967228.99,
		"hash": "2b5c77cac09905bde5a7db5a728e82db021d6c53c4df3ba9e0c98facba6bd5ff"
	},
	{
		"id": "23c3741c71a5",
		"ts": "2026-08-22T22:17:14.523Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "23c3741c71a58b4e61cf3a01dc3a15e8fabd898675ee5af912f7ec158aa38eb9"
	},
	{
		"id": "f3e9a898c119",
		"ts": "2026-08-22T22:17:14.733Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1150919.64,
		"hash": "f3e9a898c1197d7bbe3e24d9dae44258a21b36013c302af042a0098c0703403f"
	},
	{
		"id": "fd8025007cef",
		"ts": "2026-08-22T22:17:14.922Z",
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
		"liquidityUsd": 408182.33,
		"hash": "fd8025007cef293e6883054fb4c74b0a94815e7cc30f9745db40140020b1d9ea"
	},
	{
		"id": "9a6f65d7292c",
		"ts": "2026-08-22T22:17:15.132Z",
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
		"liquidityUsd": 1684071.46,
		"hash": "9a6f65d7292c04c80361b5b0324f565efe7eb1a2327cbcacc78a599bad00398a"
	},
	{
		"id": "4325b5b7b493",
		"ts": "2026-08-22T22:17:15.334Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 795541.63,
		"hash": "4325b5b7b493132f759b43db64b166a3f08365653e0c4f9d5ab1d6a3bc89b4fa"
	},
	{
		"id": "30e3b275bb7d",
		"ts": "2026-08-22T22:17:15.533Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1304748.81,
		"hash": "30e3b275bb7dd66ec91c6093628c14591a7eeb26f4f4181c1f4ae690a56a925f"
	},
	{
		"id": "aacba2821884",
		"ts": "2026-08-22T22:17:15.781Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 138543.96,
		"hash": "aacba2821884fb9227c0f56b1e92ab7d7b4761716d215664740629ddc42637f7"
	},
	{
		"id": "71d203b783e1",
		"ts": "2026-08-22T22:17:15.989Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10913012.3,
		"hash": "71d203b783e1b906c875666eab382f487b4f662b68135e513e8797de7539f4f3"
	},
	{
		"id": "bec41afa3588",
		"ts": "2026-08-22T22:17:16.178Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 738971.99,
		"hash": "bec41afa3588f6983c5b0ce6be85a31d98eb32fd3758e6ecdad6121b41911fc1"
	},
	{
		"id": "a0cadf344f32",
		"ts": "2026-08-22T22:17:16.381Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 622401.87,
		"hash": "a0cadf344f3209cfc06f25864696fc5569d370b12e163d522fad7f85d11b516a"
	},
	{
		"id": "8bd47052d297",
		"ts": "2026-08-22T22:17:16.593Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1845084.84,
		"hash": "8bd47052d297cbe2ccca1b44b51fb879f81e1f6d56bab87e5625460a3119f8ea"
	},
	{
		"id": "52da5a989edd",
		"ts": "2026-08-22T22:17:16.778Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 914562.66,
		"hash": "52da5a989edde04a1a2e4fa065590f8831afd8c3e35d9be6817584b618026c8d"
	},
	{
		"id": "27c077c6de0a",
		"ts": "2026-08-22T22:17:16.979Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3296132.57,
		"hash": "27c077c6de0ab95a981f5dbb7742bf81df9ac69697b3a7efec521f8ea67ecaa0"
	},
	{
		"id": "25cdb8e81d68",
		"ts": "2026-08-22T22:17:17.373Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 519256.74,
		"hash": "25cdb8e81d689041e952d939394974eb77968899922e94e01702fe63c8217810"
	},
	{
		"id": "89c0682ea6a8",
		"ts": "2026-08-22T21:17:20.099Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109803102.09,
		"hash": "89c0682ea6a8209cd414084d86430f2394f69712988cb687eeca4d81726b3246"
	},
	{
		"id": "86613d60fee5",
		"ts": "2026-08-22T21:17:20.561Z",
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
		"liquidityUsd": 15353383.15,
		"hash": "86613d60fee56bf88fb537428651efe95dea7cf2c1e6c45bb1038646063e6b79"
	},
	{
		"id": "4b06ded9bb44",
		"ts": "2026-08-22T21:17:21.013Z",
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
		"liquidityUsd": 871891.71,
		"hash": "4b06ded9bb440372c28df79a395a95c18ee85a57e8c74f72a989e85036f6116c"
	},
	{
		"id": "77ef6b9630d1",
		"ts": "2026-08-22T21:17:21.249Z",
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
		"liquidityUsd": 28019602.72,
		"hash": "77ef6b9630d1bcec05e3103a383ff7b56e7f72d8e0fe77fe35952af1dc908e88"
	},
	{
		"id": "c5d99153dab8",
		"ts": "2026-08-22T21:17:21.485Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "c5d99153dab87d70f4069165e609cc6625e81fba2480b67663827c5dbef93919"
	},
	{
		"id": "306a96258af8",
		"ts": "2026-08-22T21:17:21.722Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1162350.53,
		"hash": "306a96258af8d4268fef89e52500340fadabc0c6f037f081e63520fd56c64db3"
	},
	{
		"id": "3453572c3fb0",
		"ts": "2026-08-22T21:17:21.972Z",
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
		"liquidityUsd": 555552.87,
		"hash": "3453572c3fb018bfd76d99dd339ee5f86dc0ed61084aae3e624a0d98dfd042da"
	},
	{
		"id": "cf06a94efeb7",
		"ts": "2026-08-22T21:17:22.225Z",
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
		"liquidityUsd": 1682028.92,
		"hash": "cf06a94efeb75ca6ba606b23187c6769748ccebc84bad3cfbd51cec4a273c46e"
	},
	{
		"id": "f3e775d2b646",
		"ts": "2026-08-22T21:17:22.467Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 818282.22,
		"hash": "f3e775d2b64624f6b235b94a6b9c8b4a63a43389a937c56892e38a9d09c9ebe9"
	},
	{
		"id": "5befe827daa2",
		"ts": "2026-08-22T21:17:22.700Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1278410.85,
		"hash": "5befe827daa2e824960f632774c72c608b71700712a4798d777a726a42fa30d9"
	},
	{
		"id": "e09509ae1463",
		"ts": "2026-08-22T21:17:22.916Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 137200.29,
		"hash": "e09509ae1463654d4b88d880ee32abe469e8eb02ba150a0e4825485dfa9a9831"
	},
	{
		"id": "409fabef47d7",
		"ts": "2026-08-22T21:17:23.137Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11006710.16,
		"hash": "409fabef47d72d7d3defabfe786a0b6514068508b1b3a82553c8474b80432c89"
	},
	{
		"id": "c1995b46ee43",
		"ts": "2026-08-22T21:17:23.353Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 563658.51,
		"hash": "c1995b46ee43be032ffc3f1b961251f21035087913371e520df3aacf45d0e068"
	},
	{
		"id": "c4b84c0e9cdd",
		"ts": "2026-08-22T21:17:23.568Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 674206.91,
		"hash": "c4b84c0e9cdddd116e7acf9527e30a144a801cf1e4d901458eecfc95917bda81"
	},
	{
		"id": "53987f39e96f",
		"ts": "2026-08-22T21:17:23.787Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1855162.81,
		"hash": "53987f39e96f050819499e6e249ed1e2e3ac119d6bdd2648446f1b01f238b42c"
	},
	{
		"id": "35acf2f9756e",
		"ts": "2026-08-22T21:17:24.004Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3334751.71,
		"hash": "35acf2f9756ea567e9f147897620a4bc32098eef9ca44c3a68de6109ee44a3a7"
	},
	{
		"id": "22f86605773a",
		"ts": "2026-08-22T21:17:24.220Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 507953.66,
		"hash": "22f86605773aba95ea72826c3ef301710cf3eed26ec55617b3c3f62f2b4fb9f3"
	},
	{
		"id": "b7cc3072e393",
		"ts": "2026-08-22T21:17:24.441Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 843359.76,
		"hash": "b7cc3072e393c6a4909d9c1805ade0624390e71809333198920c862e925c79ca"
	},
	{
		"id": "fbdd5f7d93c3",
		"ts": "2026-08-22T20:17:48.051Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109852759.47,
		"hash": "fbdd5f7d93c3fff5323d355465edf81c45981863bdfe94c3336dfcc18cc3f745"
	},
	{
		"id": "d9a0aa2fb9b3",
		"ts": "2026-08-22T20:17:48.770Z",
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
		"liquidityUsd": 16596958.14,
		"hash": "d9a0aa2fb9b33c0faaf7fb5550db3d7ac6d45ce42fbe19d852a294c4fd99318f"
	},
	{
		"id": "c21128e7d671",
		"ts": "2026-08-22T20:17:49.198Z",
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
		"liquidityUsd": 881673.01,
		"hash": "c21128e7d671b8817d809c9503578c73432e27bae3ad222535bd8e79f290bb23"
	},
	{
		"id": "0011db8686a1",
		"ts": "2026-08-22T20:17:49.647Z",
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
		"liquidityUsd": 28115106.46,
		"hash": "0011db8686a1ee04dcbbec6ad6257c1f7b9d028b0df5cb621fb6bbc0ee1ebe56"
	},
	{
		"id": "174297b64046",
		"ts": "2026-08-22T20:17:49.879Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "174297b640466a489e690f280fa9cfd7a82269cc2e4de3e135a7466cb180429b"
	},
	{
		"id": "a619d734b3be",
		"ts": "2026-08-22T20:17:50.125Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180614.94,
		"hash": "a619d734b3be338e5a07114e1e8f81390dd7afd022fbf8a52ac776564986b8db"
	},
	{
		"id": "f507f082b7df",
		"ts": "2026-08-22T20:17:50.364Z",
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
		"liquidityUsd": 417063.29,
		"hash": "f507f082b7df891d0fee34e4708443a6ea1e04b37826984ca45126cdda63e086"
	},
	{
		"id": "1ea05978687f",
		"ts": "2026-08-22T20:17:50.619Z",
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
		"liquidityUsd": 1699818.26,
		"hash": "1ea05978687fef13822afb6645d27b1ec6473308c958fe2dd5822fc973879134"
	},
	{
		"id": "1941ed836d80",
		"ts": "2026-08-22T20:17:51.056Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 789140.88,
		"hash": "1941ed836d8051d9d2088f3fb38c22fcc0708355036d7b269c0a6f4606449fa9"
	},
	{
		"id": "211568152633",
		"ts": "2026-08-22T20:17:51.305Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1325765.98,
		"hash": "211568152633b76de5bbe799b494c12ffff6b68e5422debc935fcae2245298fa"
	},
	{
		"id": "2680b4d3e0b6",
		"ts": "2026-08-22T20:17:51.523Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 119003.25,
		"hash": "2680b4d3e0b63ae0a9bf3911247be686762153436f2c087cb246cda66d2f012e"
	},
	{
		"id": "55288a7914fa",
		"ts": "2026-08-22T20:17:51.882Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11240747.72,
		"hash": "55288a7914faa8b168f6aad6b2ecb0514b5a34f0de2ba4a223d83b427bcc271e"
	},
	{
		"id": "90ffc361b138",
		"ts": "2026-08-22T20:17:52.097Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 571412.47,
		"hash": "90ffc361b13820b7801d7de5dc6c8424c1570c0d0446c830f6cc59025ce11edd"
	},
	{
		"id": "bc19e1c0e248",
		"ts": "2026-08-22T20:17:52.324Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 682228.84,
		"hash": "bc19e1c0e248485a1f47295950e9c2534cf156760ad792f53e56e3cf697d70f3"
	},
	{
		"id": "011295d7a298",
		"ts": "2026-08-22T20:17:52.540Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1873749.95,
		"hash": "011295d7a298e84c52877ff8e238b130ff4183959dd5c59aa27270c88c48e447"
	},
	{
		"id": "b265b6ec1db7",
		"ts": "2026-08-22T20:17:52.786Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 545582.4,
		"hash": "b265b6ec1db79e2026b6346d0fcfe286478ce0896e4959a91898895e3144d2a8"
	},
	{
		"id": "8b925d29b22d",
		"ts": "2026-08-22T20:17:53.000Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3381093.18,
		"hash": "8b925d29b22d5a9cd0ffc7802a010e5bdd07bfbde9d761bbe04a234499691ff5"
	},
	{
		"id": "6b97d1c8c670",
		"ts": "2026-08-22T20:17:53.395Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 644573.34,
		"hash": "6b97d1c8c6707072e148e424798c8b9bbb7fa019854b4055450c21ac18760b50"
	},
	{
		"id": "595d43e209fa",
		"ts": "2026-08-22T19:19:42.266Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109693541.49,
		"hash": "595d43e209fa04ead952d0675b2cb951aa963d9c04b993b664f42112a9e5671f"
	},
	{
		"id": "b412791a36d4",
		"ts": "2026-08-22T19:19:42.520Z",
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
		"liquidityUsd": 17436243.96,
		"hash": "b412791a36d4e5b05217ef71411ea4441bc0c004ad0238499b4476f456f1cb49"
	},
	{
		"id": "65827535961e",
		"ts": "2026-08-22T19:19:42.766Z",
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
		"liquidityUsd": 877640.34,
		"hash": "65827535961e64bd6576ddbc655de8f37f2a9bade357ab009922de8f286ff19c"
	},
	{
		"id": "cea0c04ef423",
		"ts": "2026-08-22T19:19:42.969Z",
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
		"liquidityUsd": 28155670.22,
		"hash": "cea0c04ef42387f1bb9268c34666a4fb3b3e8a22084b7afef68357d4877d908e"
	},
	{
		"id": "683e44df908c",
		"ts": "2026-08-22T19:19:43.168Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "683e44df908ce41a2a850e2ed6894e8ea2cdc3507b42b7c656bbaa0b37f74bdf"
	},
	{
		"id": "8514960bc13d",
		"ts": "2026-08-22T19:19:43.385Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1175744.11,
		"hash": "8514960bc13db95119093f636cdcc0258109991ad743114044f084ac6c0601b1"
	},
	{
		"id": "8f173f44608c",
		"ts": "2026-08-22T19:19:43.592Z",
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
		"liquidityUsd": 379200.77,
		"hash": "8f173f44608cfb2d755ea6fcb36a66a61138461923d189df61e4a1f1532bd101"
	},
	{
		"id": "a36fe4db2608",
		"ts": "2026-08-22T19:19:43.804Z",
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
		"liquidityUsd": 1691281.52,
		"hash": "a36fe4db2608961c4db69014ba4ae4227d7d403518d8191640bc5c8d98537ee1"
	},
	{
		"id": "a471568b4c9a",
		"ts": "2026-08-22T19:19:44.030Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 794827.49,
		"hash": "a471568b4c9a73b2be0e9c21135cf3098c0163397d1310ac632fea041d7a3b87"
	},
	{
		"id": "3c7565287ca9",
		"ts": "2026-08-22T19:19:44.271Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1336664.27,
		"hash": "3c7565287ca978a7178a170b5ce17d1d05a5d07deaf75139f6fb2417cd2b463a"
	},
	{
		"id": "7434bf9fe857",
		"ts": "2026-08-22T19:19:44.553Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 122659.36,
		"hash": "7434bf9fe857f37c4e00336cab41afaa0f8cbe3b3ea135f7b213f9d5a9868e2b"
	},
	{
		"id": "475fefa61567",
		"ts": "2026-08-22T19:19:44.753Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1863061.32,
		"hash": "475fefa61567c924af744996c1b2e1c41a48efa0bae3aa3f00e9c69a25e9ab31"
	},
	{
		"id": "cbfc10638208",
		"ts": "2026-08-22T19:19:44.955Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 591223.45,
		"hash": "cbfc10638208f6e09322ad9b4631359de5536f709969ed7a45a96e523a6e6afc"
	},
	{
		"id": "f8b33677e723",
		"ts": "2026-08-22T19:19:45.156Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11279042.64,
		"hash": "f8b33677e723b230fad4d0141b8af6231feea517cfad20736ad03e9c909239a9"
	},
	{
		"id": "5dc2be54bc36",
		"ts": "2026-08-22T19:19:45.350Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 674680.96,
		"hash": "5dc2be54bc36ebe5f8419923dd84ca6337be05b47803b501460624f9e0569b62"
	},
	{
		"id": "2fd10b4c3e60",
		"ts": "2026-08-22T19:19:45.555Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 638411.17,
		"hash": "2fd10b4c3e600c7e4918347477e481ac9e32678ea11655aabf483874cdc92747"
	},
	{
		"id": "0727928201ae",
		"ts": "2026-08-22T19:19:45.768Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 557115.12,
		"hash": "0727928201aef7f62c85732f1012b5ec5617a23f72fcee9852647780d390f038"
	},
	{
		"id": "d859c35814a1",
		"ts": "2026-08-22T19:19:46.168Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 593422.6,
		"hash": "d859c35814a114d694b99d3d817526572af8fe35873f24b4e5ad9d9fe42e0f8a"
	},
	{
		"id": "bdf5c786f250",
		"ts": "2026-08-22T19:19:46.367Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3338774.83,
		"hash": "bdf5c786f250508e33af50d558f9459f1c38aceda17a069c738b052284569072"
	},
	{
		"id": "087ad977f0d8",
		"ts": "2026-08-22T18:23:07.308Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109652108.71,
		"hash": "087ad977f0d8c0eb39b7c2e58921ed3f29814501556295401053431181861070"
	},
	{
		"id": "fc7b84cc3353",
		"ts": "2026-08-22T18:23:07.777Z",
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
		"liquidityUsd": 15003843.82,
		"hash": "fc7b84cc33533062358b9a4e303301012fda82ce720854bb70fe3fdc9bf5963c"
	},
	{
		"id": "ec1a4c5fe537",
		"ts": "2026-08-22T18:23:08.031Z",
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
		"liquidityUsd": 877344.71,
		"hash": "ec1a4c5fe537f1608ef14d8931b653ffe19ca1e7ebf8410f1b32b55aeefd17c1"
	},
	{
		"id": "97d849d3ce0d",
		"ts": "2026-08-22T18:23:08.270Z",
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
		"liquidityUsd": 28060983.82,
		"hash": "97d849d3ce0d1e0bec8dba504b37d00ee9e6be40f5d85e41a10439b6c8d6ded9"
	},
	{
		"id": "3fcebf0b9206",
		"ts": "2026-08-22T18:23:08.727Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "3fcebf0b92067a56338473179d02829416cd43fa5f61613dba693d40f482e71f"
	},
	{
		"id": "5e6e37d371d6",
		"ts": "2026-08-22T18:23:08.976Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1175813.56,
		"hash": "5e6e37d371d6b5702e99611900d745ebe0004fbbbf78412b5819f56483684e0e"
	},
	{
		"id": "36b55f009b4f",
		"ts": "2026-08-22T18:23:09.206Z",
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
		"liquidityUsd": 574511.03,
		"hash": "36b55f009b4fd96dbe108bd9a0a8ce3e357b85d84490671b69d45cc12f18cb1a"
	},
	{
		"id": "607c6284eb88",
		"ts": "2026-08-22T18:23:09.485Z",
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
		"liquidityUsd": 1690236.91,
		"hash": "607c6284eb88df9182c0ecaef57efd568c2346e1564da3bc938c9c18c79794c0"
	},
	{
		"id": "726d05f28bf0",
		"ts": "2026-08-22T18:23:09.735Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 807130.87,
		"hash": "726d05f28bf0ca7649e158e2d665b609d2af103c44924a7f0276dfa806ee8ec7"
	},
	{
		"id": "d38fadc9fc07",
		"ts": "2026-08-22T18:23:09.971Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1344181.94,
		"hash": "d38fadc9fc071f835857a94273bc66158f7c8b6722cf592df72f8fd977ada520"
	},
	{
		"id": "be1bb44e679f",
		"ts": "2026-08-22T18:23:10.199Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 127528.34,
		"hash": "be1bb44e679f52214111a0399816264c29dddff865c76230899021dcd37797ae"
	},
	{
		"id": "3a8b5c479257",
		"ts": "2026-08-22T18:23:10.422Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1867000.68,
		"hash": "3a8b5c479257fce9257b5dc7a908c5ad95d9737d21a116d5a2861a764dd1e5bb"
	},
	{
		"id": "0b7df9e27bbc",
		"ts": "2026-08-22T18:23:10.648Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 614668.31,
		"hash": "0b7df9e27bbc25fa2f4e7eaec28bf48fc1ef5fe8a9bca6ac2dbf6c261895cf12"
	},
	{
		"id": "29ab088d9b25",
		"ts": "2026-08-22T18:23:10.862Z",
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
		"liquidityUsd": 11888505.66,
		"hash": "29ab088d9b251ada497d33430dbe9ea55eac4a4db2e263a46d08b8d021e756ea"
	},
	{
		"id": "099b993dfb59",
		"ts": "2026-08-22T18:23:11.090Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 682456.53,
		"hash": "099b993dfb59178b46ae7836fd5f4e5bc3a215acb1059de2a39818557a37c047"
	},
	{
		"id": "8012699afd3b",
		"ts": "2026-08-22T18:23:11.306Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 662436.43,
		"hash": "8012699afd3bc68e5bc5f6287e239aae8cd4aea0f7be55cedbb0f7cea3fd4bd6"
	},
	{
		"id": "c037ce86a409",
		"ts": "2026-08-22T18:23:11.528Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549292.99,
		"hash": "c037ce86a4091ba592d0e137e48c43ee27e51a31f15cbbe15f7d4cfdf226996f"
	},
	{
		"id": "338dd47821bc",
		"ts": "2026-08-22T18:23:11.758Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 597045.16,
		"hash": "338dd47821bceee5990056a85c4afc1f3c07c376f891d68b907eb90e641708bc"
	},
	{
		"id": "091ac41fc636",
		"ts": "2026-08-22T18:23:11.986Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3809479.85,
		"hash": "091ac41fc636e4f494407b51264d47b2e190c20c5f5a1508fa9984f71a4130ef"
	},
	{
		"id": "6a494053ed99",
		"ts": "2026-08-22T17:17:10.426Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109584326.07,
		"hash": "6a494053ed99f7563ad24bc089c94a593798107a285751e7e544af49a05c85ac"
	},
	{
		"id": "0449d38250f6",
		"ts": "2026-08-22T17:17:10.749Z",
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
		"liquidityUsd": 17521813.11,
		"hash": "0449d38250f603ac534b5dd285f1ae2b950ed5ab19bf2c43942a9ef343ff0af5"
	},
	{
		"id": "6235c9a5cd61",
		"ts": "2026-08-22T17:17:10.946Z",
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
		"liquidityUsd": 876776.83,
		"hash": "6235c9a5cd61f8ae1a783bf1ee6bcc4c8d0e2e9af918ac7b30ca430ce53b2aa5"
	},
	{
		"id": "e59109ed3de4",
		"ts": "2026-08-22T17:17:11.133Z",
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
		"liquidityUsd": 28131164.33,
		"hash": "e59109ed3de46cb5ee379d1fcf22818e0522de1dd3516813ce4418c051efb8ce"
	},
	{
		"id": "6a09d8c77382",
		"ts": "2026-08-22T17:17:11.329Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "6a09d8c7738292e70c548929e2242361da37324a5116cf8140af074d820c60a8"
	},
	{
		"id": "84924e2b9fbc",
		"ts": "2026-08-22T17:17:11.531Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1169130.62,
		"hash": "84924e2b9fbcc633faeb8045419b512ed5460b038d1e4f59d0cad0b6f2de121d"
	},
	{
		"id": "47a7a640a2fe",
		"ts": "2026-08-22T17:17:11.742Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152763.05,
		"hash": "47a7a640a2fe8cf1418ca0f4ae2faa0386f73b5ab720d47ac5c6a72bb328d840"
	},
	{
		"id": "8f06204db34f",
		"ts": "2026-08-22T17:17:11.938Z",
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
		"liquidityUsd": 1686713.69,
		"hash": "8f06204db34fbb4a11b04b09330c1ed98247050553ef4ec223da66305f272d94"
	},
	{
		"id": "40125a4bfd55",
		"ts": "2026-08-22T17:17:12.123Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 821489.88,
		"hash": "40125a4bfd5559545033bf99928c134f9ab92bea576d0bd526c586530ceef6ba"
	},
	{
		"id": "287ce5c88fc7",
		"ts": "2026-08-22T17:17:12.520Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1286984.31,
		"hash": "287ce5c88fc7620a0f858b7e9cc567e15b8f5eca03217c22ca97d80dd3b66ffb"
	},
	{
		"id": "3c72cab4babf",
		"ts": "2026-08-22T17:17:12.773Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 126399.8,
		"hash": "3c72cab4babf3739d81f3692a28804a206041a662bd1041df2133664feec9f51"
	},
	{
		"id": "19be75d51459",
		"ts": "2026-08-22T17:17:13.028Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1874523.43,
		"hash": "19be75d514596d471df058b41da4abe793626085fe2c2b4f6fa489e6911a53c4"
	},
	{
		"id": "4f7725b482b4",
		"ts": "2026-08-22T17:17:13.238Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 597194.24,
		"hash": "4f7725b482b4fe21dbc1fce57b0fbea67480148e8ed43ce2b1e67dd2a1cf4556"
	},
	{
		"id": "0783c3a84749",
		"ts": "2026-08-22T17:17:13.429Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11833536.73,
		"hash": "0783c3a84749cd502a9907f2d7d58273ef0bfe4f5a8e005746684f21a2017cbe"
	},
	{
		"id": "9a1dc7664f4e",
		"ts": "2026-08-22T17:17:13.615Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 684307.14,
		"hash": "9a1dc7664f4e995f4428843c32f5e621e59c71cb3f757ddd77f5f03462c794ad"
	},
	{
		"id": "87870dd07a2a",
		"ts": "2026-08-22T17:17:13.797Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 662795.53,
		"hash": "87870dd07a2a1d34418e8f9bb626c6dfb8947a321a1be06d518f5cecf26dd852"
	},
	{
		"id": "cd1ba6e0d215",
		"ts": "2026-08-22T17:17:14.169Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 585551.68,
		"hash": "cd1ba6e0d215995db7fbabf11ab807ef75d5da78c7307241cc348eba00724465"
	},
	{
		"id": "d6fcb1b53ffb",
		"ts": "2026-08-22T17:17:14.381Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544657.61,
		"hash": "d6fcb1b53ffb5715f0c280a8a39ebe74196f20224295b759594381eea500951e"
	},
	{
		"id": "4ea0a209873f",
		"ts": "2026-08-22T17:17:14.572Z",
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
		"liquidityUsd": 585709.52,
		"hash": "4ea0a209873fb5f4b9a26e813129bf65b2e57d8e9ff90ecfcb9043dbc80858c0"
	},
	{
		"id": "24e2c45f2baa",
		"ts": "2026-08-22T16:18:46.182Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109379391.82,
		"hash": "24e2c45f2baae5f321b43098bf52eb03b874a75a46e30461fe3bc5124e86f84a"
	},
	{
		"id": "4b9c5c6b01b4",
		"ts": "2026-08-22T16:18:46.839Z",
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
		"liquidityUsd": 16310906.99,
		"hash": "4b9c5c6b01b4d94c27f8c324a846585741f3c78465a01e05b4359ea7b65c8d2b"
	},
	{
		"id": "732ee5b4138e",
		"ts": "2026-08-22T16:18:47.296Z",
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
		"liquidityUsd": 873601.43,
		"hash": "732ee5b4138e03fcd71f5d4cf8e0c8c35e5cbcd698509bacefd849600299dc4e"
	},
	{
		"id": "1909a04ae7ed",
		"ts": "2026-08-22T16:18:47.734Z",
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
		"liquidityUsd": 28000156.61,
		"hash": "1909a04ae7ed4def875a30c3bf148d7203024aaf6b3234d22a3c9a8e32630f63"
	},
	{
		"id": "83d3001bd536",
		"ts": "2026-08-22T16:18:48.173Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "83d3001bd536c54fbd4c3747faba58ae479617e0f9fdb54b55022286ac88c831"
	},
	{
		"id": "e78e91e7fa89",
		"ts": "2026-08-22T16:18:48.426Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1182856.24,
		"hash": "e78e91e7fa899a0aebea65776dcbecef85d8565f0101a222324b9b075d59f65f"
	},
	{
		"id": "72f2d331152e",
		"ts": "2026-08-22T16:18:48.686Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152763.03,
		"hash": "72f2d331152e4d752a31f797bbdbf5e8793385c7ee02168c2c9cb9658433d680"
	},
	{
		"id": "7d8d05f59c2a",
		"ts": "2026-08-22T16:18:48.940Z",
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
		"liquidityUsd": 1681408.07,
		"hash": "7d8d05f59c2a5badb4287b1bad6c1391e2f590bf8315cd3780627dee1a902a68"
	},
	{
		"id": "adab9e7da3f3",
		"ts": "2026-08-22T16:18:49.567Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 859189.91,
		"hash": "adab9e7da3f3aa1c36c88555ac475c0b672951b42086506f41cf35f8ff41d5a4"
	},
	{
		"id": "f5d8a6b63e2e",
		"ts": "2026-08-22T16:18:49.820Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1294822.43,
		"hash": "f5d8a6b63e2eb1b428261369650bf991ac8a60b4c3f80bc8c8029bb5e0a26837"
	},
	{
		"id": "93668b9bdf08",
		"ts": "2026-08-22T16:18:50.066Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1871132.32,
		"hash": "93668b9bdf081a22ca174964f8ac1a50d35f431ea4c63cbc4825c0fa5eec247e"
	},
	{
		"id": "17ea62b9fc6c",
		"ts": "2026-08-22T16:18:50.298Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 128975.95,
		"hash": "17ea62b9fc6c45ce425b9bc6ece7b847061bc4cb2e7ccaf45080229085ae2cdd"
	},
	{
		"id": "258d022e9163",
		"ts": "2026-08-22T16:18:50.532Z",
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
		"liquidityUsd": 11798733.36,
		"hash": "258d022e9163349e79e9728d34da35426ccb9347129cad6258880efe41af87ae"
	},
	{
		"id": "d3bb99bb41cc",
		"ts": "2026-08-22T16:18:50.771Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 563592.06,
		"hash": "d3bb99bb41cca80c48edef338588437876bac3e099307710494b8fcf1ea18edc"
	}
]
