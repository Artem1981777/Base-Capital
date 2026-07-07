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
	"updatedAt": "2026-07-07T16:07:39.783Z",
	"tokensScored": 1901,
	"verdictsIssued": 1901,
	"safe": 1675,
	"risky": 176,
	"likelyRug": 50,
	"ticks": 125
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "52440840d206",
		"ts": "2026-07-07T16:07:35.300Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102861614.74,
		"hash": "52440840d20633dd018960061ec16c9b2bd9b1b79b18578ae35fc81d0412f3a3"
	},
	{
		"id": "0d4d88e67c1a",
		"ts": "2026-07-07T16:07:35.743Z",
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
		"liquidityUsd": 16549543.95,
		"hash": "0d4d88e67c1ab2123b62b55e6838a6f61b0fec03a22a2faca05adb62f2bf26d6"
	},
	{
		"id": "e62a6cb0b95a",
		"ts": "2026-07-07T16:07:35.978Z",
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
		"liquidityUsd": 1412820.26,
		"hash": "e62a6cb0b95a4716265f76fc3d4ce0528f148d400fda844838e7de3bdebb2c69"
	},
	{
		"id": "e05aa4709a72",
		"ts": "2026-07-07T16:07:36.220Z",
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
		"liquidityUsd": 35308635.76,
		"hash": "e05aa4709a72478c2740fa2ae2e606720cd641d4345b441b00651b7465742d78"
	},
	{
		"id": "f07184a5d232",
		"ts": "2026-07-07T16:07:36.525Z",
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
		"liquidityUsd": 4101181.51,
		"hash": "f07184a5d232865d24ec51932ce5e77044d29396338faad277b7217939851759"
	},
	{
		"id": "3c38c4ee7a29",
		"ts": "2026-07-07T16:07:36.758Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1008836.84,
		"hash": "3c38c4ee7a299bb1aeb14562f362fdc8a2f3f8f2c891a5112d0833deee8bffde"
	},
	{
		"id": "c2fbfafa1823",
		"ts": "2026-07-07T16:07:36.991Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35308630.81,
		"hash": "c2fbfafa182301e5280595957ebceeea06dd9af46d29d586f21019a3ddacd749"
	},
	{
		"id": "589ecaee16d5",
		"ts": "2026-07-07T16:07:37.227Z",
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
		"liquidityUsd": 2525737.21,
		"hash": "589ecaee16d53214730f15606afb7c0193f6bcc5b82afade90a27a2614704f5b"
	},
	{
		"id": "493bdb585f44",
		"ts": "2026-07-07T16:07:37.461Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 127838.08,
		"hash": "493bdb585f44b5d0c97dd072be030410a42efb79b6019589fe9a2e2433abdc80"
	},
	{
		"id": "8becb6ce33ec",
		"ts": "2026-07-07T16:07:37.694Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 66,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.32,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 179948.57,
		"hash": "8becb6ce33ece56dd0f8045bde74365edf2f18c4a75b0b6731a004657ac17515"
	},
	{
		"id": "e90483129e3b",
		"ts": "2026-07-07T16:07:37.913Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 191582.08,
		"hash": "e90483129e3b9dc71db6c49a0504051120493a7cd39de15db311e320004e89f9"
	},
	{
		"id": "63a5693be75d",
		"ts": "2026-07-07T16:07:38.418Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7535399.41,
		"hash": "63a5693be75de0d9d296bdbab8de84d25894b20fd2ac15de2423fa6001982a28"
	},
	{
		"id": "a5a1b0a14f21",
		"ts": "2026-07-07T16:07:38.639Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2097519.41,
		"hash": "a5a1b0a14f21c8e5089269ede92602867cd11863c438b858a0ad5f21c0858cb6"
	},
	{
		"id": "1a07ced889cf",
		"ts": "2026-07-07T16:07:38.857Z",
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
		"liquidityUsd": 1444755.56,
		"hash": "1a07ced889cf7354ed69ea97baae327a4fffb0079f45a99b54da8872d386fbd3"
	},
	{
		"id": "519b02544f3d",
		"ts": "2026-07-07T16:07:39.077Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1952629.95,
		"hash": "519b02544f3dd33b84205123abdcf794ec401a2a519329186ef182912119bfc5"
	},
	{
		"id": "cfb6659bcdbd",
		"ts": "2026-07-07T16:07:39.298Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3072771.07,
		"hash": "cfb6659bcdbdd5147d5ba57553baa7eaf8931dfc727974e53a4fe8cbfacb1caa"
	},
	{
		"id": "76f8cf2a0a9b",
		"ts": "2026-07-07T16:07:39.565Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 566882.28,
		"hash": "76f8cf2a0a9bea9fcea63fdc56c8c5a2190f5adab1767b20736adb2e0a766e39"
	},
	{
		"id": "ee6eb85f4efa",
		"ts": "2026-07-07T16:07:39.783Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5402764.06,
		"hash": "ee6eb85f4efa96fc1d4b05e53888bebb63f020668a4dc1b09856fb5cb27ba7d5"
	},
	{
		"id": "a03a1bb04137",
		"ts": "2026-07-07T14:24:13.167Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102062767.25,
		"hash": "a03a1bb04137985be1b1a140c7ce1a65a3c813ef83163d48dd22c35c315f6ef6"
	},
	{
		"id": "bcb67ee2949c",
		"ts": "2026-07-07T14:24:13.505Z",
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
		"liquidityUsd": 16306334.64,
		"hash": "bcb67ee2949cd909278e0115299f07d9c86ac1250fdb1073062891f0dd1bf828"
	},
	{
		"id": "3330c093bb9b",
		"ts": "2026-07-07T14:24:13.742Z",
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
		"liquidityUsd": 1390403.24,
		"hash": "3330c093bb9b5d58305d101b529c347f9807d029541565c928bff05c48b6c61a"
	},
	{
		"id": "e7dd693f0d35",
		"ts": "2026-07-07T14:24:13.975Z",
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
		"liquidityUsd": 35199906.28,
		"hash": "e7dd693f0d35a62ac2486ab7eaf73db885cbacb9a59154616fa0afec4b4e41e1"
	},
	{
		"id": "c95b0aef88bd",
		"ts": "2026-07-07T14:24:14.221Z",
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
		"liquidityUsd": 4040993.95,
		"hash": "c95b0aef88bd66098f0330a958a1ef278136b172f31079ed12a7a6e37bddf595"
	},
	{
		"id": "d9c245edf683",
		"ts": "2026-07-07T14:24:14.461Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1002199.34,
		"hash": "d9c245edf68382aafbb5e8761830bf208b409c4ee065849ec3107518c4fd9d3d"
	},
	{
		"id": "3a73d5ab8b4f",
		"ts": "2026-07-07T14:24:14.694Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35199906.28,
		"hash": "3a73d5ab8b4f980d18572c52288601267e3b1473deef5664844ff26e30a9ad9a"
	},
	{
		"id": "9685bd56d340",
		"ts": "2026-07-07T14:24:14.930Z",
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
		"liquidityUsd": 2469318.52,
		"hash": "9685bd56d340a1bfb48d0934c6c886c77e1eca5326a3650b9c501f17a7d12d43"
	},
	{
		"id": "3664c08bbb10",
		"ts": "2026-07-07T14:24:15.163Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 135671.24,
		"hash": "3664c08bbb10fbd4e4da250c439cfae92bba915859fd3bda4e5909984fbb3b7f"
	},
	{
		"id": "56a3625aae16",
		"ts": "2026-07-07T14:24:15.397Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 66,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.32,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 176174.94,
		"hash": "56a3625aae16496e704d14e6b1cbda3e75fe95309b4fc614a1ba89c117653c8a"
	},
	{
		"id": "f5f57e9897e5",
		"ts": "2026-07-07T14:24:15.615Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 186885.8,
		"hash": "f5f57e9897e558877904230b0c1f6a6e234507137d3ae902edbba6c392c36084"
	},
	{
		"id": "d75ae15c2ef5",
		"ts": "2026-07-07T14:24:15.834Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7479358.43,
		"hash": "d75ae15c2ef55b2976a111b31ae55064f8beb206516723de1246a09b9df9de5b"
	},
	{
		"id": "b73faaedc5af",
		"ts": "2026-07-07T14:24:16.053Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2064162.6,
		"hash": "b73faaedc5af99290b675c4f8ae781d584a6db3c0fe3a5402ba606aed4f22b8e"
	},
	{
		"id": "4870e0d1eb4a",
		"ts": "2026-07-07T14:24:16.271Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1913365.98,
		"hash": "4870e0d1eb4ac87dac694b2e4d1ebbb48573346262687bd1340ac845c8c2ebaa"
	},
	{
		"id": "c7c916b31eb2",
		"ts": "2026-07-07T14:24:16.490Z",
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
		"liquidityUsd": 1403347.33,
		"hash": "c7c916b31eb2be7de8dac0ea44d344cac6fd1dd180f331d32640efc8f2017503"
	},
	{
		"id": "21a9d0eb2f47",
		"ts": "2026-07-07T14:24:16.726Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 561508.31,
		"hash": "21a9d0eb2f4704734bceb9a8fc448bfe4744e6135b9c266bc62c8084cf297be0"
	},
	{
		"id": "ca9593572741",
		"ts": "2026-07-07T14:24:16.947Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3170166.21,
		"hash": "ca959357274186caa00839bd654b2b63f2b82156039f67d9bf2e3491d9cbdbde"
	},
	{
		"id": "44bc6b0337db",
		"ts": "2026-07-07T14:24:17.296Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5232682.02,
		"hash": "44bc6b0337db20e3395a626409be1a63c7e62d80a3c56801d73bcacf350326f5"
	},
	{
		"id": "34da2520535e",
		"ts": "2026-07-07T11:45:17.854Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102124853.36,
		"hash": "34da2520535ee63fb1c6a18db05957a7b3b95befc7fd0ada6e220794cff016d6"
	},
	{
		"id": "aaf13e045ca9",
		"ts": "2026-07-07T11:45:18.865Z",
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
		"liquidityUsd": 15442188.65,
		"hash": "aaf13e045ca9ee88cdd1f7930307adf4314f34dc96a988a55701de3e8af28d48"
	},
	{
		"id": "62496e5a89d1",
		"ts": "2026-07-07T11:45:19.125Z",
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
		"liquidityUsd": 1405700.24,
		"hash": "62496e5a89d14fce8ccc7c4bc4a64fee20705c5c1f82d4463c18e944b8d573ba"
	},
	{
		"id": "350931471790",
		"ts": "2026-07-07T11:45:19.366Z",
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
		"liquidityUsd": 34821031.99,
		"hash": "3509314717904d864fd8a62b8b085a5bcbb79657371a84c75fe6c497600a34aa"
	},
	{
		"id": "01dae1ab9df8",
		"ts": "2026-07-07T11:45:19.606Z",
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
		"liquidityUsd": 4068212.05,
		"hash": "01dae1ab9df88d4acbadabf9f49a7ce3a080be1b2d2cd83e4b481a8039751eab"
	},
	{
		"id": "1fc7cc289836",
		"ts": "2026-07-07T11:45:21.510Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1002199.34,
		"hash": "1fc7cc289836e6b155fd4b7af17d7c3181ef592f34bd1001c9876ca86e134736"
	},
	{
		"id": "bd6ddadfa03b",
		"ts": "2026-07-07T11:45:22.402Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34821031.99,
		"hash": "bd6ddadfa03b967924a5e5e19028f576db5704b822a9afc5b09547b767e0693f"
	},
	{
		"id": "907d717e0bb7",
		"ts": "2026-07-07T11:45:22.653Z",
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
		"liquidityUsd": 2441872.96,
		"hash": "907d717e0bb75680ab2f561b69ea85ff45464efd463fd81716ec3f6fa9c3ad4b"
	},
	{
		"id": "8d1557e93226",
		"ts": "2026-07-07T11:45:24.070Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 123769.06,
		"hash": "8d1557e93226d727d09e98243471c48ae0299869a8888158d22890112896f4d4"
	},
	{
		"id": "14399493d9b4",
		"ts": "2026-07-07T11:45:24.311Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 66,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.32,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 175374.39,
		"hash": "14399493d9b4ed71bcbeb059fff1039d4cb98a6eeb7723eff1ee1c812b74a3f6"
	},
	{
		"id": "aa2c1f0948be",
		"ts": "2026-07-07T11:45:24.538Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 193092.91,
		"hash": "aa2c1f0948bebd4df3c997d9ea4db2426129e3d29224087e4dbd0c63a8f27a9d"
	},
	{
		"id": "9c910b590833",
		"ts": "2026-07-07T11:45:24.777Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7522103.96,
		"hash": "9c910b590833c465f6218713da40254cfa7168941b60f0a1460e1445d4438d44"
	},
	{
		"id": "b4cede985fe3",
		"ts": "2026-07-07T11:45:25.006Z",
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
		"liquidityUsd": 1417614.93,
		"hash": "b4cede985fe3b3242aa0268b651f51567313f48c9b29d4fed356ad0497fb50aa"
	},
	{
		"id": "31b8a74c0628",
		"ts": "2026-07-07T11:45:25.273Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 563184.89,
		"hash": "31b8a74c0628ed95755067680f8449af64608fb4276de8572be45a83d6976a47"
	},
	{
		"id": "3b1b5c734558",
		"ts": "2026-07-07T11:45:25.517Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1866530.44,
		"hash": "3b1b5c7345581bc2295d03921b54c75184581ce244ebdbf3d22c7acbf9d29013"
	},
	{
		"id": "acd845d73db1",
		"ts": "2026-07-07T11:45:28.171Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3299731.65,
		"hash": "acd845d73db1011334932357b0db4d53f3f011d76bc03e79199b48314df93bbd"
	},
	{
		"id": "3b11c5a78a89",
		"ts": "2026-07-07T11:45:28.401Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 445644.15,
		"hash": "3b11c5a78a8962a21fd521de206e5ca50c893594a005aa2f15cab1eccf7bb8a2"
	},
	{
		"id": "b62231ae9085",
		"ts": "2026-07-07T11:45:29.359Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2071523.43,
		"hash": "b62231ae9085882f8e8b2ba39a04fef447aa9ff78ab9b6bc9af23102b64a9b16"
	},
	{
		"id": "f0b6c26b1b60",
		"ts": "2026-07-07T08:20:05.974Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101933304.5,
		"hash": "f0b6c26b1b60ebb3410903db13805773186891735e24890e9202f4de7388a5f1"
	},
	{
		"id": "a616a7534fd3",
		"ts": "2026-07-07T08:20:06.499Z",
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
		"liquidityUsd": 16263098.92,
		"hash": "a616a7534fd36a3967ba48ed7a37b46f086e3afe6a6aeab716f8cbc4001aa27d"
	},
	{
		"id": "8aa791bf5078",
		"ts": "2026-07-07T08:20:06.991Z",
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
		"liquidityUsd": 1400670.81,
		"hash": "8aa791bf5078308715561fa07f50326b017793a0210dde911c461d9a323e4c4f"
	},
	{
		"id": "1ba8dc5d5ce0",
		"ts": "2026-07-07T08:20:07.245Z",
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
		"liquidityUsd": 34328477.64,
		"hash": "1ba8dc5d5ce00e3ee3fe2fbfb3075970bd490cddccda55597d6d44351063a3ef"
	},
	{
		"id": "84ef583b18fb",
		"ts": "2026-07-07T08:20:07.512Z",
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
		"liquidityUsd": 4058431.42,
		"hash": "84ef583b18fbc9957ab3a841763d30d90d312140a40c9560285fe4111fafb92c"
	},
	{
		"id": "7b8a1a79305b",
		"ts": "2026-07-07T08:20:07.791Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1004316.4,
		"hash": "7b8a1a79305ba3fe5014ddc6206ab2ce050ef8ccf3d99cc8d7bcb9c48520ae8e"
	},
	{
		"id": "8a06a5b9e865",
		"ts": "2026-07-07T08:20:08.052Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34328477.64,
		"hash": "8a06a5b9e865770aa94a68300ad1b1cdffef943141cbd592cce5020caf6b7469"
	},
	{
		"id": "98239c05fd69",
		"ts": "2026-07-07T08:20:08.306Z",
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
		"liquidityUsd": 2335819.18,
		"hash": "98239c05fd69f201ecbe83e1dc5dd948e202d979713eb457239844f4efc751aa"
	},
	{
		"id": "155c0611496b",
		"ts": "2026-07-07T08:20:08.571Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119746.64,
		"hash": "155c0611496b434db1d45517daa5c27df505997b2e8ab597a68d5b913f2342c6"
	},
	{
		"id": "2eecc75f0b11",
		"ts": "2026-07-07T08:20:08.826Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 66,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.32,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 179135.08,
		"hash": "2eecc75f0b116e6eb9f68e4c3d03bb347cf6e920007af35b2e97fd8c23d8a034"
	},
	{
		"id": "b797633de184",
		"ts": "2026-07-07T08:20:09.071Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 448663.72,
		"hash": "b797633de1840bf5f7c73546991e6bed8fad20b49a2c8d4d90fadbb1801e5f30"
	},
	{
		"id": "95f51b430754",
		"ts": "2026-07-07T08:20:09.315Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182345.18,
		"hash": "95f51b4307541189060fbc63d71ef905eefda8a3890add0a18310cea3d02970f"
	},
	{
		"id": "37699c9439db",
		"ts": "2026-07-07T08:20:09.559Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4677370.93,
		"hash": "37699c9439db9f798668ffe83754da0862d94cd6384d0a024e3fa80d0854328d"
	},
	{
		"id": "b59f0f599554",
		"ts": "2026-07-07T08:20:09.798Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7555781.38,
		"hash": "b59f0f599554b339b6a45305581f1cde60a1f135ae1d3dd7dfac7ce9f43630bc"
	},
	{
		"id": "2e9c5b50737c",
		"ts": "2026-07-07T08:20:10.043Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 118539.49,
		"hash": "2e9c5b50737c1927f78a7847d05ba9ce5bbc5344df503ac216933ca11909cddc"
	},
	{
		"id": "a5b120275302",
		"ts": "2026-07-07T08:20:10.282Z",
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
		"liquidityUsd": 1491058.93,
		"hash": "a5b120275302643a0c43554e4b382dcb930a14099555de3d4e88fef66c0de0f6"
	},
	{
		"id": "9a6eab11770e",
		"ts": "2026-07-07T08:20:10.528Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 562087.64,
		"hash": "9a6eab11770e7c00dea80562675e5b05c43cd25a67d4c9db48d597200facafe8"
	},
	{
		"id": "c4c6ac9c5a51",
		"ts": "2026-07-07T08:20:10.769Z",
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
		"liquidityUsd": 3396077.28,
		"hash": "c4c6ac9c5a51330f64c3281892ab179ddd5069daf585206eaa4e0f467c65c8c3"
	},
	{
		"id": "2f4e382b6cbe",
		"ts": "2026-07-07T04:48:37.007Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101562253.4,
		"hash": "2f4e382b6cbeff205fd63496effe80b2f6898af9d72e15789b6593716065ff4a"
	},
	{
		"id": "ea69a42806f2",
		"ts": "2026-07-07T04:48:37.276Z",
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
		"liquidityUsd": 15148946.6,
		"hash": "ea69a42806f27d909da18850684406be8a48e1e45eca4f9f6ea61a24a5c3ca90"
	},
	{
		"id": "1b0eba4c3a55",
		"ts": "2026-07-07T04:48:37.783Z",
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
		"liquidityUsd": 1388917.14,
		"hash": "1b0eba4c3a55785d4498db65ac634587ed442f40f1d022873aafd9f4e4ac206d"
	},
	{
		"id": "d50b999194bc",
		"ts": "2026-07-07T04:48:38.041Z",
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
		"liquidityUsd": 34114945.95,
		"hash": "d50b999194bcb779fdd705725fdcc1fb0c65a4a27d266fea8073fc626308cad6"
	},
	{
		"id": "18c052afafbe",
		"ts": "2026-07-07T04:48:38.291Z",
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
		"liquidityUsd": 4046984.29,
		"hash": "18c052afafbe7233df63c83884f06d7cffd5e67ee8eb5956cb45dbc8cc51e916"
	},
	{
		"id": "95fc777b5c06",
		"ts": "2026-07-07T04:48:38.546Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1001918.65,
		"hash": "95fc777b5c06b53487f4432101f027d22f34d0b87345ca116cfbb0509ae616de"
	},
	{
		"id": "ab1bbb58d4f9",
		"ts": "2026-07-07T04:48:38.807Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34114945.91,
		"hash": "ab1bbb58d4f927e5b423cfad98fab4f0a5437272958aaadd661d9faef2e6f1b8"
	},
	{
		"id": "c1c732df4eed",
		"ts": "2026-07-07T04:48:39.058Z",
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
		"liquidityUsd": 2326458.42,
		"hash": "c1c732df4eedf7a94c4e921f2b7c737921f6fe36a1d2c46aafa504935517abd3"
	},
	{
		"id": "5e0162609181",
		"ts": "2026-07-07T04:48:39.314Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 175781,
		"hash": "5e0162609181e136b0252d51631ee98a8db5b5021ea8e5c6ec967a5b6ef64961"
	},
	{
		"id": "9c50c87bc926",
		"ts": "2026-07-07T04:48:39.564Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 415750.16,
		"hash": "9c50c87bc926f08bb7349648ea4d17958fbc2e99b321464376e412f845f6d9a8"
	},
	{
		"id": "63159cdc872f",
		"ts": "2026-07-07T04:48:39.813Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182773.69,
		"hash": "63159cdc872f9e1376b580b26c3179774e1bccb89307e19833b29ddece14d346"
	},
	{
		"id": "fe3df7789a7e",
		"ts": "2026-07-07T04:48:40.051Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 129424.4,
		"hash": "fe3df7789a7e282c99f0695e0ac067cf37ce79427f888aa2b14d51507fbbd6df"
	},
	{
		"id": "7608b964dc5b",
		"ts": "2026-07-07T04:48:40.286Z",
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
		"liquidityUsd": 7679100.27,
		"hash": "7608b964dc5b6d75b7dddd4dd165b8873406c7e7efbcd1977bb625e17012dfd6"
	},
	{
		"id": "45556238181b",
		"ts": "2026-07-07T04:48:40.528Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4656108.54,
		"hash": "45556238181b476a647c7f335359e810d95e90029b5a5f0e31d42e3dbdba6297"
	},
	{
		"id": "2316f1dad8d3",
		"ts": "2026-07-07T04:48:40.763Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 193931.91,
		"hash": "2316f1dad8d3bd32ea48ffdc101221137803a2d50158c2882f06221983795d2b"
	},
	{
		"id": "f52be5939659",
		"ts": "2026-07-07T04:48:41.013Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3331941.66,
		"hash": "f52be59396595ad25d45dc6ff766dc1255003566500afa24d028b4527a998d4f"
	},
	{
		"id": "fd84d6487130",
		"ts": "2026-07-07T04:48:41.258Z",
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
		"liquidityUsd": 1530978.17,
		"hash": "fd84d64871303f5e0bc721c6495b43fb51c78e1f5ddc967032b5be0bd19b1fe2"
	},
	{
		"id": "d8db65246e01",
		"ts": "2026-07-07T04:48:41.510Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1808500.63,
		"hash": "d8db65246e01bb78d63bdb87f26d7507272dea1925d7736a14f075a5f397ee9c"
	},
	{
		"id": "1e3dc1119527",
		"ts": "2026-07-07T00:04:51.719Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102042187.7,
		"hash": "1e3dc11195273d5e0b7004a1e98fea2d97bed38bc06ad8fb701ec8ab3d4aa74c"
	},
	{
		"id": "bbfc82cdda11",
		"ts": "2026-07-07T00:04:51.968Z",
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
		"liquidityUsd": 15893231.84,
		"hash": "bbfc82cdda11f741dc3117a22e7681cc7e5e6e65926661aee26f99f9ba300f24"
	},
	{
		"id": "dd5dbdbcfb2c",
		"ts": "2026-07-07T00:04:52.211Z",
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
		"liquidityUsd": 1414452.88,
		"hash": "dd5dbdbcfb2cfbb80609245078b4385827b4e9f791898f318fa987b873b590e4"
	},
	{
		"id": "4140591557c8",
		"ts": "2026-07-07T00:04:52.458Z",
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
		"liquidityUsd": 34137808.42,
		"hash": "4140591557c84c79bb337cae518cfc2e0848cce3fd947334ff1b7470ea0dfbc6"
	},
	{
		"id": "caf346f8b02a",
		"ts": "2026-07-07T00:04:52.701Z",
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
		"liquidityUsd": 4121011.38,
		"hash": "caf346f8b02a6f1a4e11a1160e34e8c5145a22706e905a44cfd15d1071811bc7"
	},
	{
		"id": "c0df0ba9bee0",
		"ts": "2026-07-07T00:04:52.965Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1026213.12,
		"hash": "c0df0ba9bee02404b65b0868ba05ef0f3a45827705ad79a3a51fdfd497f4fe26"
	},
	{
		"id": "fc23302d26ae",
		"ts": "2026-07-07T00:04:53.213Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34137808.42,
		"hash": "fc23302d26ae411ae6d19c32ec4f30c4ed15292e21f7573d3c1bd866a593773a"
	},
	{
		"id": "26ad798944c8",
		"ts": "2026-07-07T00:04:53.460Z",
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
		"liquidityUsd": 2370297.13,
		"hash": "26ad798944c86255d6e373e8dcfa25d269bb3b44012de2b1bc9ee2623da4391f"
	},
	{
		"id": "6d082d9002ef",
		"ts": "2026-07-07T00:04:53.699Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 180354.09,
		"hash": "6d082d9002efb544b3961ce44d908a44dcc280d05bc0c4210092bc73f2f879f3"
	},
	{
		"id": "c6e90fe4c101",
		"ts": "2026-07-07T00:04:53.941Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 454311.35,
		"hash": "c6e90fe4c101388d5c4b88163c23a4f007f4feee97fccf99b583bb12486bb892"
	},
	{
		"id": "9b10485c06af",
		"ts": "2026-07-07T00:04:54.175Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 557337.94,
		"hash": "9b10485c06afdae083a3372b7cd61dafd97905ddf0f82cb65033d2d1bbb416e8"
	},
	{
		"id": "3d9413d2f17d",
		"ts": "2026-07-07T00:04:54.411Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 123453.03,
		"hash": "3d9413d2f17dbdd3309f03ad0d644315d166e955126be4bdde54ce10a71ffc45"
	},
	{
		"id": "68409b14e6ac",
		"ts": "2026-07-07T00:04:54.642Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 191994.76,
		"hash": "68409b14e6ac0899b5b24f12ff9ec2c6d5cc22543b32c0c8882ff958e2d49ee6"
	},
	{
		"id": "56ec7995c918",
		"ts": "2026-07-07T00:04:54.872Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 33868.77,
		"hash": "56ec7995c9188e3b00039a1ae6df118d9b5aabe670c185dc3acd307d455f954a"
	},
	{
		"id": "c5385018a43f",
		"ts": "2026-07-07T00:04:55.101Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7828630,
		"hash": "c5385018a43f2f9eb80906045f3ae75516fca2bc893c0199c42130e7260339ef"
	},
	{
		"id": "01d623183823",
		"ts": "2026-07-07T00:04:55.328Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4740634.4,
		"hash": "01d623183823ba431ad2a7f42cbade8f81222c85d90d86b7d35bde25e89f40f1"
	},
	{
		"id": "0a0818ae101b",
		"ts": "2026-07-07T00:04:55.553Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1794891.35,
		"hash": "0a0818ae101b2b5f255c1f0f087d3c7615f0b4b73687bfeeac513ff37454a3c9"
	},
	{
		"id": "e9e4b85fde0e",
		"ts": "2026-07-07T00:04:55.781Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 574967.68,
		"hash": "e9e4b85fde0e31126d1d206c612f0604bca151685a89b85541b22ba2428bd3bf"
	},
	{
		"id": "cfa1063a2dbe",
		"ts": "2026-07-06T22:11:05.463Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102531978.94,
		"hash": "cfa1063a2dbed3341a246e2136fdd8a08485d39d20d32e090faa0cfe44d86daa"
	},
	{
		"id": "6e87f7dc0a82",
		"ts": "2026-07-06T22:11:06.367Z",
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
		"liquidityUsd": 16665244.8,
		"hash": "6e87f7dc0a82e1d73cfb5a9b74d75f851a423481603e4c4663d983ea930f3fed"
	},
	{
		"id": "e66ab1d7d02f",
		"ts": "2026-07-06T22:11:06.873Z",
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
		"liquidityUsd": 1428559.44,
		"hash": "e66ab1d7d02fcba84bdacc3fc492d6b54e17d4663fad2f4a3efdc9601b651d6d"
	},
	{
		"id": "57ab7342e534",
		"ts": "2026-07-06T22:11:07.143Z",
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
		"liquidityUsd": 34109119.86,
		"hash": "57ab7342e5343be91a7adfb926ec1b42a6758dc35b40a77846005e4391ffb3bd"
	},
	{
		"id": "89013140ab64",
		"ts": "2026-07-06T22:11:07.407Z",
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
		"liquidityUsd": 4152462.58,
		"hash": "89013140ab6499b7ed23ee32e22ecece97706c6e603de7161e4851e15d8617bc"
	},
	{
		"id": "b91c9b3849bf",
		"ts": "2026-07-06T22:11:07.677Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1026213.12,
		"hash": "b91c9b3849bfb81fe2c9a17fdd0bf003ded6093b5549bbad12ac5c69be7dc077"
	},
	{
		"id": "3e911563407e",
		"ts": "2026-07-06T22:11:08.107Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34109119.86,
		"hash": "3e911563407e5a05476d81b6a66319ff1e8df4a39b41c16722a95e78f55bf1f8"
	},
	{
		"id": "7f75e0c2d90e",
		"ts": "2026-07-06T22:11:08.379Z",
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
		"liquidityUsd": 2390936.88,
		"hash": "7f75e0c2d90eebbe92d97f8b68211a28e9a7de8d4f634c00e78b12dac2fb17fb"
	},
	{
		"id": "7b084efbdb22",
		"ts": "2026-07-06T22:11:08.650Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 183060.01,
		"hash": "7b084efbdb226d7800a744e6a84b644c801ad15f87945dacab109304383e4c66"
	},
	{
		"id": "ca136c4194fc",
		"ts": "2026-07-06T22:11:08.928Z",
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
		"liquidityUsd": 119031.13,
		"hash": "ca136c4194fc60b847f30db94f9857a2d96fd9bf4098bdf3982895d38bd7d241"
	},
	{
		"id": "1c8dee5ca5e1",
		"ts": "2026-07-06T22:11:09.180Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 458931.49,
		"hash": "1c8dee5ca5e1ee112a718cb3a16f395ed41e094a2d71f94729acfd05ea194291"
	},
	{
		"id": "34ef9afd2976",
		"ts": "2026-07-06T22:11:09.441Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 564595.65,
		"hash": "34ef9afd2976e77066ca6b82a3ba2df32c876b1dbd0daf86d104c6b38b24fbf2"
	},
	{
		"id": "113fcb8bc59e",
		"ts": "2026-07-06T22:11:09.693Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 36779.53,
		"hash": "113fcb8bc59e148b72e610159d71e679567ad97c8cd878f7784879e343a8ec3f"
	},
	{
		"id": "4f515975d1c0",
		"ts": "2026-07-06T22:11:09.939Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 189357.13,
		"hash": "4f515975d1c0224b52b31313fde80e98f648e067443a489cd2db17472b8e0c82"
	},
	{
		"id": "4703bf76a84e",
		"ts": "2026-07-06T22:11:10.188Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4766122.55,
		"hash": "4703bf76a84e5ecbcc7022394b45d12505f761ea71608eef982c35cc9e51351e"
	},
	{
		"id": "89a9fc951dc6",
		"ts": "2026-07-06T22:11:11.239Z",
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
		"liquidityUsd": 7878465.73,
		"hash": "89a9fc951dc681b5811dc7d8786ca87729254b858045a57529289ee83b7553ea"
	},
	{
		"id": "b87dd96059d4",
		"ts": "2026-07-06T22:11:11.487Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 581054.19,
		"hash": "b87dd96059d477f4dca09795c4229c7232dd0bac6963c02ec4c3fd7e80291a5a"
	},
	{
		"id": "fdb6f0dff14b",
		"ts": "2026-07-06T22:11:11.739Z",
		"symbol": "PLAY",
		"token": "0x853a7c99227499DbA9dB8C3A02aA691aFDeBf841",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 453224.99,
		"hash": "fdb6f0dff14b9dc9d38368aae794b1b263fd6d83a7dec2df7dc2ddc37f9c5ff4"
	},
	{
		"id": "f25eb2bc2463",
		"ts": "2026-07-06T20:50:47.600Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102142400.3,
		"hash": "f25eb2bc2463db3174ea80880f7262a11e2ddec3355e2f40850f2d1044164191"
	},
	{
		"id": "02a0651b339a",
		"ts": "2026-07-06T20:50:48.048Z",
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
		"liquidityUsd": 16695473.31,
		"hash": "02a0651b339a60016cb1e8b795ad4dc3611efe58ee82fb70e8d929105c6042ba"
	},
	{
		"id": "05f74b259876",
		"ts": "2026-07-06T20:50:48.486Z",
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
		"liquidityUsd": 1416762.71,
		"hash": "05f74b25987603f9f5bfe44a0567a03eaf734e3bda96603d4c51ae8709bbb6c5"
	},
	{
		"id": "e146fb97a6a2",
		"ts": "2026-07-06T20:50:48.731Z",
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
		"liquidityUsd": 33961589.24,
		"hash": "e146fb97a6a20232faf8616e557d0479159a7666d758d285a1664e1f47cbb33e"
	},
	{
		"id": "05e06bc0a1c0",
		"ts": "2026-07-06T20:50:48.966Z",
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
		"liquidityUsd": 4105097.57,
		"hash": "05e06bc0a1c09144ebfa012891513fed8f86b7da5eb7528e74baab68109ee0d5"
	},
	{
		"id": "2c76ce63238f",
		"ts": "2026-07-06T20:50:49.209Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1016643.7,
		"hash": "2c76ce63238fe3ddc70b417f6d1895a68957d7f86fa09fa52bfbfb24fc0d11cf"
	},
	{
		"id": "fd99adb286f6",
		"ts": "2026-07-06T20:50:49.441Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33961589.24,
		"hash": "fd99adb286f66482372a8d67374260e4de81cf58cba950511897c0c5389cd797"
	},
	{
		"id": "4fe675ae41ae",
		"ts": "2026-07-06T20:50:49.709Z",
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
		"liquidityUsd": 2363179.96,
		"hash": "4fe675ae41aeee67ea3a711108216d02c19f537dae14530006e6b37dc4e006df"
	},
	{
		"id": "2774579c14b0",
		"ts": "2026-07-06T20:50:49.942Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 432440.76,
		"hash": "2774579c14b0a1b7e6fb00d7fdd0724962d2f545f72291e2c07808ac5621230f"
	},
	{
		"id": "eebdb92322ed",
		"ts": "2026-07-06T20:50:50.183Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 183942.17,
		"hash": "eebdb92322ed0a347e679a4995e680b24e39b9e7bca1889cd50888e1dbdec20f"
	},
	{
		"id": "adcdd08f1c81",
		"ts": "2026-07-06T20:50:50.415Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 545890.83,
		"hash": "adcdd08f1c8115402c0d90644211aa6a07424babce87aba9c5b1f9f2480f12de"
	},
	{
		"id": "a9624e7ee0aa",
		"ts": "2026-07-06T20:50:50.641Z",
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
		"liquidityUsd": 121903.97,
		"hash": "a9624e7ee0aaae28ecadaae02fc00b0ad266433c8805e56ad9bca30d9f875bff"
	},
	{
		"id": "1ded43984295",
		"ts": "2026-07-06T20:50:50.858Z",
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
		"liquidityUsd": 2126428.56,
		"hash": "1ded43984295b953d79c8a84c632741ec2543897b7dc71c9396736179a06b6bd"
	},
	{
		"id": "a805869e46d9",
		"ts": "2026-07-06T20:50:51.330Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 39034.46,
		"hash": "a805869e46d9b971ecc5d5bb77a2401580318529ca2e88179fa8b27a4970ade2"
	},
	{
		"id": "f20647873c86",
		"ts": "2026-07-06T20:50:51.551Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4723775.75,
		"hash": "f20647873c86d09de69e7bbc0132fdcc1da89c7b544abf78f4e2d3cfe2ac5efb"
	},
	{
		"id": "9916e563139b",
		"ts": "2026-07-06T20:50:51.775Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 199321.57,
		"hash": "9916e563139bf5673f35fdd8d68e42d05ba49638352b8f47f4aecf5f7a318894"
	},
	{
		"id": "0372fe601368",
		"ts": "2026-07-06T20:50:51.994Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7925976.33,
		"hash": "0372fe601368e18d6a2304852f558b291c3478f60a1a860987877c5552bd9a28"
	},
	{
		"id": "d23fdc189ee2",
		"ts": "2026-07-06T20:50:52.218Z",
		"symbol": "PLAY",
		"token": "0x853a7c99227499DbA9dB8C3A02aA691aFDeBf841",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 449020.72,
		"hash": "d23fdc189ee2ec56eb8fe984e35611ccb4a65af4f573a2c6a4e6b5ea790a1bc0"
	},
	{
		"id": "b6b7aa494d9b",
		"ts": "2026-07-06T18:53:14.220Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102151403.64,
		"hash": "b6b7aa494d9b1ba8fe34ba8f456ea211bf96490e538be3162d4924125f462f1c"
	},
	{
		"id": "208dba7e7045",
		"ts": "2026-07-06T18:53:14.452Z",
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
		"liquidityUsd": 16733649.13,
		"hash": "208dba7e70457ce7e3ff598245c962745b640213d3a16c7cbc8f8db9de64840b"
	},
	{
		"id": "47ba210d6c48",
		"ts": "2026-07-06T18:53:14.837Z",
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
		"liquidityUsd": 1416260.39,
		"hash": "47ba210d6c48392569def5431d805505116f0630d3505462192c34d986ddfd2e"
	},
	{
		"id": "f3316b015052",
		"ts": "2026-07-06T18:53:15.928Z",
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
		"liquidityUsd": 33829282.17,
		"hash": "f3316b015052144e0889ce57298e951db9034b584737c1f600718df659745815"
	},
	{
		"id": "4b7dd540f2d0",
		"ts": "2026-07-06T18:53:16.123Z",
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
		"liquidityUsd": 4116596.89,
		"hash": "4b7dd540f2d0dc5a2de9ecf0ef608f9b8c78fd9d5de90f2bb6b2130db47fc4c0"
	},
	{
		"id": "696a697c20c7",
		"ts": "2026-07-06T18:53:16.316Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1016643.7,
		"hash": "696a697c20c733e9673dc50b6b9cf6bdf2c9625f358355308b9196b152415b9d"
	},
	{
		"id": "84ad7c8187e3",
		"ts": "2026-07-06T18:53:16.510Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33829282.17,
		"hash": "84ad7c8187e33de9bcc619299efb946bf797d77fcbb5ce1d3881545c37711cec"
	},
	{
		"id": "c1d1f47f7ecc",
		"ts": "2026-07-06T18:53:16.702Z",
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
		"liquidityUsd": 2364793.06,
		"hash": "c1d1f47f7eccaf0a9191028376740ab4f9ef5a07c129d8d2dde5178f73e2f97e"
	},
	{
		"id": "4dcbc28a3e47",
		"ts": "2026-07-06T18:53:16.891Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 469119.04,
		"hash": "4dcbc28a3e4710e39e807a7cde2636585b00502c6bc5d18b2dcd44d688efb621"
	},
	{
		"id": "58ab7ff24f16",
		"ts": "2026-07-06T18:53:17.096Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 539995.92,
		"hash": "58ab7ff24f169738b456b01cdb63c2a4c9b42d05c35162b59add23483acfe847"
	},
	{
		"id": "91cb86867c0e",
		"ts": "2026-07-06T18:53:17.286Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 124428.13,
		"hash": "91cb86867c0eddf123d66513b2bc56fd789bf1bb1b6f3733aeaaae28040586bc"
	},
	{
		"id": "a5170d5dbd30",
		"ts": "2026-07-06T18:53:18.173Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 198322.79,
		"hash": "a5170d5dbd3018edc6012b3176d2f18449f01c1bdd6facb95cfcdcad0bb5ba69"
	},
	{
		"id": "d5db7127716e",
		"ts": "2026-07-06T18:53:18.348Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2127163.1,
		"hash": "d5db7127716ec6c18ca85bfb6f6d9384d8b57099fd565f3a30d252c2b4d80009"
	},
	{
		"id": "e682bfa1d47f",
		"ts": "2026-07-06T18:53:18.525Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 40471.7,
		"hash": "e682bfa1d47f35e32160907fdec51ea7ff37a783704f078275a97e900ffe9c42"
	},
	{
		"id": "354397955a06",
		"ts": "2026-07-06T18:53:18.850Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 519504.4,
		"hash": "354397955a061efa1e44936af4ea421984ef70640eafd85801627234a17138d9"
	},
	{
		"id": "6f2faf6799db",
		"ts": "2026-07-06T18:53:19.237Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7959145.71,
		"hash": "6f2faf6799dbc6b66e1ba762726f9203c07ac5242bd9d53b726f23955c171ebd"
	},
	{
		"id": "93862ba8c6ab",
		"ts": "2026-07-06T18:53:19.432Z",
		"symbol": "PLAY",
		"token": "0x853a7c99227499DbA9dB8C3A02aA691aFDeBf841",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 449456.46,
		"hash": "93862ba8c6abeec2767b7d753a858f4580106047763405246c4186c01f12e41f"
	},
	{
		"id": "c75b8c386461",
		"ts": "2026-07-06T18:53:20.215Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4688963.54,
		"hash": "c75b8c386461274bb2bf9b45d63d7af2c31a2dc3cb9d9cbfafb6db99ca60a7d0"
	},
	{
		"id": "3e6786bea2ab",
		"ts": "2026-07-06T16:17:49.429Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102229256.12,
		"hash": "3e6786bea2abe2700de1acc86ca387f651b8cd86dd1ad35adfa54ebc6926e3ad"
	},
	{
		"id": "6717b867e107",
		"ts": "2026-07-06T16:17:49.785Z",
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
		"liquidityUsd": 15256539.68,
		"hash": "6717b867e1077fef4b976e55d3a92b7cc915c832e0c6958f7b8557037cfaff79"
	},
	{
		"id": "06bd8e089056",
		"ts": "2026-07-06T16:17:50.131Z",
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
		"liquidityUsd": 1423954.34,
		"hash": "06bd8e08905613bcb4c4615ee6daebb144b7475918f250e1911db81a3c23794e"
	},
	{
		"id": "8b1028482099",
		"ts": "2026-07-06T16:17:50.478Z",
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
		"liquidityUsd": 33836351.27,
		"hash": "8b102848209922c5f8acd860755bd5d00da9a8ef90e1da6f326fb15e1177b20e"
	},
	{
		"id": "e245d96824e0",
		"ts": "2026-07-06T16:17:50.674Z",
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
		"liquidityUsd": 4098852.46,
		"hash": "e245d96824e054db0e5dab04d8a53d031d654c9b86038d6d7ea66713901e9223"
	},
	{
		"id": "af60ab69a6d3",
		"ts": "2026-07-06T16:17:50.878Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1016646.39,
		"hash": "af60ab69a6d3982e3c94e42dfbfeac9ae044a293feedfd698c79af397e77c52b"
	},
	{
		"id": "32297189e522",
		"ts": "2026-07-06T16:17:51.088Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33836351.27,
		"hash": "32297189e5229fea2c69e3ea70a2964a0f04793e96ed6a26d36f5f416f0d4af8"
	},
	{
		"id": "10ca3c64f5ed",
		"ts": "2026-07-06T16:17:51.292Z",
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
		"liquidityUsd": 2374530.45,
		"hash": "10ca3c64f5edcd8ecc40f8461540f66a748fc2913de68c935aff954866aec0b9"
	},
	{
		"id": "2aed7ea2b363",
		"ts": "2026-07-06T16:17:51.489Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 483615.15,
		"hash": "2aed7ea2b363dab73bdb51bc4058eb1c9d417b52eabebbd269ae325b1545e591"
	},
	{
		"id": "c1fdbc6df2ce",
		"ts": "2026-07-06T16:17:51.680Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 588835.24,
		"hash": "c1fdbc6df2ce7a04c7dd5c6963a65927d5e7c3b29460ed5b5b716557ba6ed73c"
	},
	{
		"id": "344196ad06a8",
		"ts": "2026-07-06T16:17:51.859Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 44332.77,
		"hash": "344196ad06a86b57edbd65a277581cff871c24289bc3c5472524a6a478e95358"
	},
	{
		"id": "c933fdb7a77a",
		"ts": "2026-07-06T16:17:52.050Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2104840.68,
		"hash": "c933fdb7a77a53d1bc0175a8680282a6b6f68f4bf287fce1e5150f6590f5ace9"
	},
	{
		"id": "fc9111ff2a14",
		"ts": "2026-07-06T16:17:52.241Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 522173.92,
		"hash": "fc9111ff2a14e1ad530d8418ba13173daf7e0912f83a7aeda387315ae3a2848c"
	},
	{
		"id": "51beb4a38ff0",
		"ts": "2026-07-06T16:17:52.419Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 108389.83,
		"hash": "51beb4a38ff004a901cced41fb45008ce4cbb1ee541097becfe19e8220eb2abf"
	},
	{
		"id": "aecb0586e55d",
		"ts": "2026-07-06T16:17:52.611Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8004138.12,
		"hash": "aecb0586e55db04b36c43ca77fbe2e985f1b1a21a1232ea4fadb9aa8dd9e07c5"
	},
	{
		"id": "8136c2af5fc0",
		"ts": "2026-07-06T16:17:52.805Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1983178.85,
		"hash": "8136c2af5fc086442f2c546b478fc27fe38c6485100538fdac104d65cd720eb5"
	},
	{
		"id": "a4d9abf397f5",
		"ts": "2026-07-06T16:17:52.985Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4826092.35,
		"hash": "a4d9abf397f5d24a7ed1f954ae9a43d329aa40c9e3b12f64fd4bb95c6c5523f3"
	},
	{
		"id": "6a7f17270da8",
		"ts": "2026-07-06T16:17:53.163Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3570583.51,
		"hash": "6a7f17270da8b3ee6126971051d9b8015e3a83bea525deff81144ed9ecf3cfe4"
	},
	{
		"id": "ffeacf1cdb57",
		"ts": "2026-07-06T12:02:10.680Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101030722.06,
		"hash": "ffeacf1cdb57afe92b77ef88750ae67f5e76c9176f28a1282958482483791622"
	},
	{
		"id": "3fdde4a0f649",
		"ts": "2026-07-06T12:02:11.163Z",
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
		"liquidityUsd": 16231841.95,
		"hash": "3fdde4a0f649fc58a125a5a4e3954ae7cb8e610f1ad36909c4515f65e8b5369d"
	},
	{
		"id": "82605f46e6cb",
		"ts": "2026-07-06T12:02:11.427Z",
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
		"liquidityUsd": 1394140.27,
		"hash": "82605f46e6cb14494239626b217be53d5301ba0d881cde7cc7d414dc8bce0967"
	},
	{
		"id": "939c3690c627",
		"ts": "2026-07-06T12:02:11.703Z",
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
		"liquidityUsd": 33276998.47,
		"hash": "939c3690c627d9b7b3697ff662f00a6f6671b227ff3199e46047fc1cfb0c2949"
	},
	{
		"id": "f2af51d7345a",
		"ts": "2026-07-06T12:02:12.082Z",
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
		"liquidityUsd": 4040313.32,
		"hash": "f2af51d7345ad0412e284e8318b44ffb9ef836b235b899b94adcc2dcdad97ed3"
	},
	{
		"id": "825d64caaf5e",
		"ts": "2026-07-06T12:02:12.359Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1003434.68,
		"hash": "825d64caaf5e22f80dc5764024e8b905ef61142260632cf2bb08f7c46f331783"
	},
	{
		"id": "e07b37338d0c",
		"ts": "2026-07-06T12:02:12.613Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33264049.02,
		"hash": "e07b37338d0c2a98d7350f3296f532c27d3ad6f4b7170ec16711f3fab66d588b"
	},
	{
		"id": "8b9ea526b7f5",
		"ts": "2026-07-06T12:02:12.952Z",
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
		"liquidityUsd": 2314933.73,
		"hash": "8b9ea526b7f543ad4abd3fc0ceef43b735280edc4f3e8fdd2b9a436a8cdd7753"
	},
	{
		"id": "ba032ba95bfd",
		"ts": "2026-07-06T12:02:13.231Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 68,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.36,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 42803.7,
		"hash": "ba032ba95bfdaeff9eb8b87c7bb249c283fee62b3a25e55d707d931c3fb1b204"
	},
	{
		"id": "5e1f2d112242",
		"ts": "2026-07-06T12:02:13.501Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 631733.01,
		"hash": "5e1f2d1122422ffe865cba7875697d03857fca8ea93548a138627ae5aa99b402"
	},
	{
		"id": "4f800a61e358",
		"ts": "2026-07-06T12:02:13.764Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 463056.73,
		"hash": "4f800a61e35886297086d07723d834937d29d836b7d0f1d9408f8dd78bf7db41"
	},
	{
		"id": "e21dad99864a",
		"ts": "2026-07-06T12:02:14.024Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2091287.32,
		"hash": "e21dad99864ac1ad1fa8fcef180674650ed0b8bd9836511bd4062db2bfc060c7"
	},
	{
		"id": "8ee252f77f78",
		"ts": "2026-07-06T12:02:14.268Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 556482.22,
		"hash": "8ee252f77f78255a3a97371f9dfcf39d87097f7b9bf51d3745dfb6c05e2c0c01"
	},
	{
		"id": "8fcc7e3f045f",
		"ts": "2026-07-06T12:02:14.508Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4750601.9,
		"hash": "8fcc7e3f045ffc3c88a7035ab331f40ff46bb661f0f6328a5da0156a65dae43e"
	},
	{
		"id": "0e31959a3c78",
		"ts": "2026-07-06T12:02:21.658Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1985957.05,
		"hash": "0e31959a3c7886aca18352afdf7df7c1ebb605b82df2bf9a50fa4728242ce9c1"
	},
	{
		"id": "4bb04febfe7b",
		"ts": "2026-07-06T12:02:22.609Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2025362.42,
		"hash": "4bb04febfe7b53c3f150dd9c33c858af50e01a9645ad48026c820b771d510316"
	},
	{
		"id": "61919081b557",
		"ts": "2026-07-06T12:02:22.981Z",
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
		"liquidityUsd": 7656345.91,
		"hash": "61919081b5574da593b7e40c012ed05f1e50d679f50adfc566a366a187918f05"
	},
	{
		"id": "07a2f8e837ce",
		"ts": "2026-07-06T12:02:23.226Z",
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
		"liquidityUsd": 3488951.54,
		"hash": "07a2f8e837ce16b4aecfc7748b2ea20b12dde5f26961b953ff6b91579e6330fa"
	},
	{
		"id": "25aace8c853f",
		"ts": "2026-07-06T07:09:45.788Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100951506.06,
		"hash": "25aace8c853f668954b15cad602dc5414c01775a7fa6ca5a5c709ef2a7049aa5"
	},
	{
		"id": "d24945b830dd",
		"ts": "2026-07-06T07:09:46.029Z",
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
		"liquidityUsd": 16045763.52,
		"hash": "d24945b830dd7200feaae5bd15d6aba75ae50790ee9b3abef537c1310ccf770c"
	}
]
