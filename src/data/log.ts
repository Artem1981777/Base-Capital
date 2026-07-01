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
	"updatedAt": "2026-07-01T19:49:17.144Z",
	"tokensScored": 913,
	"verdictsIssued": 913,
	"safe": 806,
	"risky": 86,
	"likelyRug": 21,
	"ticks": 68
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "29d3d5d5df53",
		"ts": "2026-06-30T23:08:28.426Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 79827.66,
		"hash": "29d3d5d5df535c29b94ad812c146440b2cdfaaedf1a3424ca7838b9e45785abf"
	},
	{
		"id": "aa4f12625e10",
		"ts": "2026-06-30T23:08:28.733Z",
		"symbol": "CX",
		"token": "0x000000000000012DeF132E61759048bE5b5C6033",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 457884.44,
		"hash": "aa4f12625e10caca1274fd4c60d627fba1518f637986fae7c2d2911a4526999a"
	},
	{
		"id": "8df4f0f17e86",
		"ts": "2026-06-30T23:08:28.967Z",
		"symbol": "OpenClaw",
		"token": "0x9ccd163a68e56D1079D16B25fBd69d464f657b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 215587.75,
		"hash": "8df4f0f17e866fb90927d245af0ffbee1a035e9edc3c0253813c8002e060b98e"
	},
	{
		"id": "6e9d47f83036",
		"ts": "2026-06-30T23:08:29.205Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 971068.98,
		"hash": "6e9d47f8303634cecef9bf9ab47455192ae689a397bf00c2aa3294e2215f987e"
	},
	{
		"id": "a61e4d4fff4a",
		"ts": "2026-06-30T23:08:29.439Z",
		"symbol": "$OLIVIA2.0",
		"token": "0x8185Eaf46136a3f095C60FaCD97ecA1bfC2f38F6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4586892.77,
		"hash": "a61e4d4fff4ae608a6b193bc4ed42fff754b2abb3c690f6de236f1bb1a1792bd"
	},
	{
		"id": "d4d165901f12",
		"ts": "2026-06-30T23:08:29.689Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 928534.26,
		"hash": "d4d165901f1244922d76fdb79406fa040cce68e5ba8198bcfe159bda5b64436d"
	},
	{
		"id": "dbd1e86809b2",
		"ts": "2026-06-30T23:08:29.931Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 366785.32,
		"hash": "dbd1e86809b22a1e35449290b9bff4ec3ca39eaa88a8419a167a15522ce59935"
	},
	{
		"id": "27d82344cb99",
		"ts": "2026-06-30T21:25:39.366Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95787348.6,
		"hash": "27d82344cb99754c8df135acfac31dd05aa8d19660da6d63ded736b6de86246e"
	},
	{
		"id": "86ce4d30a226",
		"ts": "2026-06-30T21:25:39.865Z",
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
		"liquidityUsd": 12893119.93,
		"hash": "86ce4d30a226daded1b76bc940ea7c387c61fcc01ea9f347e70ba3295105babd"
	},
	{
		"id": "17c61e2e5820",
		"ts": "2026-06-30T21:25:40.135Z",
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
		"liquidityUsd": 1327381.18,
		"hash": "17c61e2e5820d6e8a0989457f33b574bee029ca63a5cc294a95de0ba09bf6041"
	},
	{
		"id": "1eb9c09873a9",
		"ts": "2026-06-30T21:25:40.391Z",
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
		"liquidityUsd": 26010679.18,
		"hash": "1eb9c09873a9d21ea002fb20303ab7eb40a72ff6a57cddb714595e144818b197"
	},
	{
		"id": "089100115df1",
		"ts": "2026-06-30T21:25:40.656Z",
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
		"liquidityUsd": 4005363.07,
		"hash": "089100115df11d383dd35a789e49e0db4c5b0e0fddbe15467e4f4eaa747c0827"
	},
	{
		"id": "1513babd4818",
		"ts": "2026-06-30T21:25:40.924Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 898789.88,
		"hash": "1513babd4818fddf8c4d38bcebbf8785218c084721b261a665e2b6c6fb047176"
	},
	{
		"id": "ef47cace2462",
		"ts": "2026-06-30T21:25:41.198Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26010679.18,
		"hash": "ef47cace2462fa76d7563712ccefcfc5f4366134d4ca5aa7f609dce921aed16e"
	},
	{
		"id": "39fb550e1f20",
		"ts": "2026-06-30T21:25:41.449Z",
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
		"liquidityUsd": 2163449.29,
		"hash": "39fb550e1f20306320080c4e50564fcf22c9fec81517648433bbf3920a84c750"
	},
	{
		"id": "17b6b5984f56",
		"ts": "2026-06-30T21:25:41.714Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9243137.32,
		"hash": "17b6b5984f56c55b72ae53885bdf95a41d9935a15ac03e1401d8abb14d02e5b5"
	},
	{
		"id": "f7490f3a1a6e",
		"ts": "2026-06-30T21:25:41.983Z",
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
		"liquidityUsd": 74292.77,
		"hash": "f7490f3a1a6e0742762fd61ed6e6639f9d41aa2d7eaa39d3eca2024200e2135d"
	},
	{
		"id": "e632852048e6",
		"ts": "2026-06-30T21:25:42.242Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4343349.78,
		"hash": "e632852048e6ecb068e1d82d6f08bc08c9ef052deff3e1668e265d2bafed8868"
	},
	{
		"id": "97c64b187fd1",
		"ts": "2026-06-30T21:25:42.481Z",
		"symbol": "CX",
		"token": "0x000000000000012DeF132E61759048bE5b5C6033",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 454978.02,
		"hash": "97c64b187fd1fca21cac6ac8abde0d05ace29b2f0b5c71578db00c1204b178f7"
	},
	{
		"id": "279d939319e4",
		"ts": "2026-06-30T21:25:42.730Z",
		"symbol": "OpenClaw",
		"token": "0x9ccd163a68e56D1079D16B25fBd69d464f657b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 111655.94,
		"hash": "279d939319e4b27a105a1af0d3747bf973f38cc12743d0901b875fd5c31bcb82"
	},
	{
		"id": "6cea3b9fbdb0",
		"ts": "2026-06-30T21:25:42.982Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 943032.79,
		"hash": "6cea3b9fbdb0f9976a39ab011acf460e418ca8e1867b9955e94dfa5b0f94ad24"
	},
	{
		"id": "551055470f1b",
		"ts": "2026-06-30T21:25:43.244Z",
		"symbol": "$OLIVIA2.0",
		"token": "0x8185Eaf46136a3f095C60FaCD97ecA1bfC2f38F6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4545932.53,
		"hash": "551055470f1bb24ad1d857da9192a143315c7820ad6d522cd11185c236674346"
	},
	{
		"id": "a4a6ec79de1f",
		"ts": "2026-06-30T21:25:43.484Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 366464.72,
		"hash": "a4a6ec79de1f57ae84df277be8269bd0886978df752298ce8d48b7294c27bec7"
	},
	{
		"id": "cceb4d2c57e4",
		"ts": "2026-06-30T21:25:43.735Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 944133.81,
		"hash": "cceb4d2c57e4d86d5015b22e6159fb395ba2d5ad18e1cb4fe937471e840e1ffd"
	},
	{
		"id": "52e2119cb040",
		"ts": "2026-06-30T19:50:34.538Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95958396.77,
		"hash": "52e2119cb0400da901d075a0a84658adc5003593a3664867130eece01f103047"
	},
	{
		"id": "9499da101712",
		"ts": "2026-06-30T19:50:34.802Z",
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
		"liquidityUsd": 13264974.14,
		"hash": "9499da101712af7699780f8ba83c9d9470d5b38f5f8ebe1dff80a3de79842451"
	},
	{
		"id": "d664a5e5a640",
		"ts": "2026-06-30T19:50:35.286Z",
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
		"liquidityUsd": 1332843.25,
		"hash": "d664a5e5a640955b3894d41d528a9f1c2e269298e95385b36d82b2351d7b6747"
	},
	{
		"id": "ae225f24a2b1",
		"ts": "2026-06-30T19:50:35.559Z",
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
		"liquidityUsd": 25924926.48,
		"hash": "ae225f24a2b1084a7ee308eec36f09a99e9a6c6bbf02ee52f089c3176d61c170"
	},
	{
		"id": "2e79a359b293",
		"ts": "2026-06-30T19:50:35.818Z",
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
		"liquidityUsd": 4026097.43,
		"hash": "2e79a359b293631335b46f6b6fc461043bad38b115fafa0f025d7fe49308f782"
	},
	{
		"id": "d96fb1c58d36",
		"ts": "2026-06-30T19:50:36.076Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 898496.4,
		"hash": "d96fb1c58d366e998346f6bd828500266212786f25e72ddf118c7cf4af0da5d1"
	},
	{
		"id": "57111d3fd064",
		"ts": "2026-06-30T19:50:36.348Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25924926.48,
		"hash": "57111d3fd06451bda6d65d51e97ebed7c27bfa609773b481f7815a99b10413b1"
	},
	{
		"id": "64ae18adfd4e",
		"ts": "2026-06-30T19:50:36.610Z",
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
		"liquidityUsd": 2173652.1,
		"hash": "64ae18adfd4e52834558f5d51c8898c7e0837c93491cbffd58e925d71bfc5c47"
	},
	{
		"id": "ad2fbc704c6a",
		"ts": "2026-06-30T19:50:36.870Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 8842240.33,
		"hash": "ad2fbc704c6a0aa478cfbd06ef90356c0c5de9cb1e6c417d565c180c90e6e931"
	},
	{
		"id": "26f597fed80b",
		"ts": "2026-06-30T19:50:37.129Z",
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
		"liquidityUsd": 74888.72,
		"hash": "26f597fed80b180b50737fe281140b7d5f987ee8cdd4765fdc0ca6b65b52b5fb"
	},
	{
		"id": "9c9358d35797",
		"ts": "2026-06-30T19:50:37.372Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4316578.13,
		"hash": "9c9358d357970b429b59864e33319aaf03cf2470c9712076de7949f940b0b2a0"
	},
	{
		"id": "9a87fffd31d6",
		"ts": "2026-06-30T19:50:37.616Z",
		"symbol": "CX",
		"token": "0x000000000000012DeF132E61759048bE5b5C6033",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 450961.04,
		"hash": "9a87fffd31d63c82c93b8a5c24544a81f97230bf1f0bbab1e8ae8caae11a03d9"
	},
	{
		"id": "114c20397eab",
		"ts": "2026-06-30T19:50:37.855Z",
		"symbol": "OpenClaw",
		"token": "0x9ccd163a68e56D1079D16B25fBd69d464f657b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 491827.55,
		"hash": "114c20397eabd48a8b93a4e9f65e5fd29b76f862f2fb69cdf4fb7a96bbf5dd99"
	},
	{
		"id": "a9cfd7408548",
		"ts": "2026-06-30T19:50:38.098Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 945283.15,
		"hash": "a9cfd7408548d5e509a021460597a70b1038615bca36ed9b0f53f1d8aeac5da3"
	},
	{
		"id": "b0fe33e45e84",
		"ts": "2026-06-30T19:50:38.339Z",
		"symbol": "$OLIVIA2.0",
		"token": "0x8185Eaf46136a3f095C60FaCD97ecA1bfC2f38F6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4547568.34,
		"hash": "b0fe33e45e84b0ea67c1954fb6eefc406af2d14e77a1af79b00ac139cb0a32d7"
	},
	{
		"id": "78a1bdf16626",
		"ts": "2026-06-30T19:50:38.578Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 942778.67,
		"hash": "78a1bdf1662695bf10228b393560a7dce23c79e6eb92a3ac429e6ebd0e24ad84"
	},
	{
		"id": "8d3c33b6c01f",
		"ts": "2026-06-30T19:50:38.819Z",
		"symbol": "HANDL",
		"token": "0x3BBCb624CB9A1f73163A886F460f47603E5E4425",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88586.65,
		"hash": "8d3c33b6c01ff99f4cc4b99117dec47786f4801f85bab0afd2bf77dd8fe5777b"
	},
	{
		"id": "8204815cadc5",
		"ts": "2026-06-30T17:03:49.437Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95683603.1,
		"hash": "8204815cadc5408fe080a67e102c442872e75b7554095839d41bd8d009d0d768"
	},
	{
		"id": "b5f15b697a6e",
		"ts": "2026-06-30T17:03:49.648Z",
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
		"liquidityUsd": 13080389.43,
		"hash": "b5f15b697a6e543053f1e3b3149061845ac8be08b723d3a469abbe927fd2817f"
	},
	{
		"id": "942598f0ae57",
		"ts": "2026-06-30T17:03:49.852Z",
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
		"liquidityUsd": 1315844.08,
		"hash": "942598f0ae57a8d46c3b3ace8aae4c03293c5c25b8c098c9c019b19c819427d9"
	},
	{
		"id": "1768f548cca4",
		"ts": "2026-06-30T17:03:50.055Z",
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
		"liquidityUsd": 26009803.28,
		"hash": "1768f548cca44dfb4c1c6e4536c631407484aa9c952c6aacee7cda9514b09803"
	},
	{
		"id": "c2251557d571",
		"ts": "2026-06-30T17:03:50.259Z",
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
		"liquidityUsd": 3998731.31,
		"hash": "c2251557d57125aac359ef59057209b3d8fc4984f8165e3cabf93c6da5aa3545"
	},
	{
		"id": "5079c8486cfb",
		"ts": "2026-06-30T17:03:50.466Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896433.33,
		"hash": "5079c8486cfb1e82b1764ca06da1adc514d79088bbedb540282fd888deea774f"
	},
	{
		"id": "e112891457dc",
		"ts": "2026-06-30T17:03:50.672Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26009803.28,
		"hash": "e112891457dc927231c615415bff5abbeb116bea2b3aec2b5d94902575c6d7f0"
	},
	{
		"id": "a5b04a32eb12",
		"ts": "2026-06-30T17:03:50.880Z",
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
		"liquidityUsd": 2164181.1,
		"hash": "a5b04a32eb122ca63c43b7b3c23f98bbb8a9143f82ef37d1654883287ad4ffc2"
	},
	{
		"id": "676e029b899f",
		"ts": "2026-06-30T17:03:51.135Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9201967.76,
		"hash": "676e029b899fc91c3ef6646f0c7f9b4c0fb52be6ec1b11325cd38132c06a9c66"
	},
	{
		"id": "3b721f0bef53",
		"ts": "2026-06-30T17:03:51.334Z",
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
		"liquidityUsd": 77963.21,
		"hash": "3b721f0bef536c16267f10ef2cde66a3be87b6cf6ad806bb0fe97ec50f8c84de"
	},
	{
		"id": "6b88c39953a5",
		"ts": "2026-06-30T17:03:51.524Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4270582.39,
		"hash": "6b88c39953a5816b32513ff8eefa86b8fb554f16c3130d2a4b62d8f854eb1f52"
	},
	{
		"id": "1ce3f880be7d",
		"ts": "2026-06-30T17:03:51.712Z",
		"symbol": "CX",
		"token": "0x000000000000012DeF132E61759048bE5b5C6033",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 461563.24,
		"hash": "1ce3f880be7d6839aad4d802dd2c65bccae4c669914c6d3c710872004b2cd2c1"
	},
	{
		"id": "7b0f16488d6f",
		"ts": "2026-06-30T17:03:51.901Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1766862.79,
		"hash": "7b0f16488d6f1f6aa97d07e2b8d2e617a6f3fd2c75de084f741fbf3cd4d4037b"
	},
	{
		"id": "1b6871317921",
		"ts": "2026-06-30T17:03:52.090Z",
		"symbol": "OpenClaw",
		"token": "0x9ccd163a68e56D1079D16B25fBd69d464f657b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 491895.04,
		"hash": "1b68713179212558b8c0156bd479d0b50761864534adf5c2ea5a2c1d7cd85aa3"
	},
	{
		"id": "9bcd5a72718f",
		"ts": "2026-06-30T17:03:52.293Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 954208.96,
		"hash": "9bcd5a72718f062e3d8dbb8ccec3622f5710c7a0f34c5557539406e2482e6257"
	},
	{
		"id": "278893e57ab2",
		"ts": "2026-06-30T17:03:52.502Z",
		"symbol": "$OLIVIA2.0",
		"token": "0x8185Eaf46136a3f095C60FaCD97ecA1bfC2f38F6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4551924.64,
		"hash": "278893e57ab22e8f63cdbff33a82eb5763f6f8f4fc405491a0627ed85d13123c"
	},
	{
		"id": "0cc82ab986d0",
		"ts": "2026-06-30T17:03:52.701Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 951738.66,
		"hash": "0cc82ab986d0ec76dec084519e0005ce8972a31f474e86d28715f2afa83195d2"
	},
	{
		"id": "4d5a1fa3b47d",
		"ts": "2026-06-30T17:03:52.910Z",
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
		"hash": "4d5a1fa3b47de9763582049639162ed233a242dfc93a106ba2c3cea42572e325"
	},
	{
		"id": "8698621e4c8b",
		"ts": "2026-06-30T14:11:26.908Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95736351.34,
		"hash": "8698621e4c8b48e0b3dc8f3460b4c45f1180e3f5a21d2a02f95e6ef7a6363513"
	},
	{
		"id": "9a437b38e2f7",
		"ts": "2026-06-30T14:11:27.258Z",
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
		"liquidityUsd": 12903983.57,
		"hash": "9a437b38e2f78ef1350756eb140b4a91948d15e601e0dcd3801d528368f342c0"
	},
	{
		"id": "601e9eb62a60",
		"ts": "2026-06-30T14:11:27.470Z",
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
		"liquidityUsd": 1316554.47,
		"hash": "601e9eb62a604ebb2f08eaca9cae5bcb344dbe064777d51524e629122705a1a2"
	},
	{
		"id": "1d12a3b29df2",
		"ts": "2026-06-30T14:11:27.664Z",
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
		"liquidityUsd": 25725192.97,
		"hash": "1d12a3b29df230b47e27709231c3e26cd06e7901bd703971555a23bb9f558ff3"
	},
	{
		"id": "4c97c9453193",
		"ts": "2026-06-30T14:11:27.861Z",
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
		"liquidityUsd": 3990029.2,
		"hash": "4c97c94531935c97a17f7181f0044d07b532f42a0fffee9e9ac4f7bd34862dab"
	},
	{
		"id": "ece2a48fd2f8",
		"ts": "2026-06-30T14:11:28.059Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 902239.54,
		"hash": "ece2a48fd2f818c81005649928835142e4f2f0a7f9fe0dbf56279b1d4b498089"
	},
	{
		"id": "f6fc42cb9a78",
		"ts": "2026-06-30T14:11:28.257Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25725202.17,
		"hash": "f6fc42cb9a78400ff2a2c324aab24e27b0539fbf3b8615274c1f847cd1349f10"
	},
	{
		"id": "4815716b46d4",
		"ts": "2026-06-30T14:11:28.452Z",
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
		"liquidityUsd": 2222102.42,
		"hash": "4815716b46d4d673e50f38f5f68db84d3ac92adbd789e56a4925661a271ffb3b"
	},
	{
		"id": "be9ae2853fad",
		"ts": "2026-06-30T14:11:28.646Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 8933291.63,
		"hash": "be9ae2853fad3241f5a54c206dfbd8e0f2afb4b6d5780dbe020221a9018a96a4"
	},
	{
		"id": "95725acf937c",
		"ts": "2026-06-30T14:11:29.300Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 73,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.46,
		"flags": [
			"new_pair_under_24h",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 75134.86,
		"hash": "95725acf937c40402fa643385237adb66956c7cdda59e61ec9cba50c2a68bb0a"
	},
	{
		"id": "8d42e6b2e4d6",
		"ts": "2026-06-30T14:11:29.486Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4300853.81,
		"hash": "8d42e6b2e4d6aeaa33dcd72c55ef8ebc17a60781b8f5dc2fa8ac1e384884bb84"
	},
	{
		"id": "9f02a89ece55",
		"ts": "2026-06-30T14:11:29.709Z",
		"symbol": "CX",
		"token": "0x000000000000012DeF132E61759048bE5b5C6033",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 467126.18,
		"hash": "9f02a89ece55ca0115b17cd79a66a62a125b5051a46fbaa5698c502124e9c40f"
	},
	{
		"id": "d001f9b233b8",
		"ts": "2026-06-30T14:11:29.919Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1724935.98,
		"hash": "d001f9b233b8cd48c30f6144628994d4c8980bf25366ea27fc4138a2158c7b90"
	},
	{
		"id": "568d73b0bb2f",
		"ts": "2026-06-30T14:11:30.100Z",
		"symbol": "OpenClaw",
		"token": "0x9ccd163a68e56D1079D16B25fBd69d464f657b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 491869.97,
		"hash": "568d73b0bb2f2bd71d9cac8b24baaf1a03d352f4117d8281ed1ba5c1a794f079"
	},
	{
		"id": "0b051a612fa4",
		"ts": "2026-06-30T14:11:30.278Z",
		"symbol": "$OLIVIA2.0",
		"token": "0x8185Eaf46136a3f095C60FaCD97ecA1bfC2f38F6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4552640.86,
		"hash": "0b051a612fa42dae0c67bfac7c079d1af34136d11a68df65119d091982c612a7"
	},
	{
		"id": "fd68a66b50fb",
		"ts": "2026-06-30T14:11:30.482Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 952610.11,
		"hash": "fd68a66b50fb1462bdb85aa30c0c9178c0f38d7cf8e0c9950116d3cfef46e4cf"
	},
	{
		"id": "2c38dcc9aa8c",
		"ts": "2026-06-30T14:11:30.664Z",
		"symbol": "Claude",
		"token": "0x0e7d4bDfe24aa679F9903F10414A25F56CBEBB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 319536.4,
		"hash": "2c38dcc9aa8cd3d493f128bb4584a5e2e50a1daee2c3b1b45a903dd2f9ed493c"
	},
	{
		"id": "f3325e6e89a0",
		"ts": "2026-06-30T14:11:30.852Z",
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
		"hash": "f3325e6e89a07dc892a8b4921eb514ec06214b00601d4dd73e16d82b625852f2"
	},
	{
		"id": "fb331230cfec",
		"ts": "2026-06-30T11:43:20.320Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95946441.12,
		"hash": "fb331230cfec04b6da114ed77038368e2c37623a0fbd34c75e953f5acc1e88a9"
	},
	{
		"id": "2cb7862b2ae3",
		"ts": "2026-06-30T11:43:20.754Z",
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
		"liquidityUsd": 13160752.02,
		"hash": "2cb7862b2ae349f58fca02f995d875af5aee5b3579d9712bf16820a697bcd95e"
	},
	{
		"id": "5035bc754c31",
		"ts": "2026-06-30T11:43:20.984Z",
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
		"liquidityUsd": 1318448.48,
		"hash": "5035bc754c31792da0e67bcd50e59f899ff71b9bdcca33c0d01340a44b8598bb"
	},
	{
		"id": "adfad1354435",
		"ts": "2026-06-30T11:43:21.213Z",
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
		"liquidityUsd": 25722584.62,
		"hash": "adfad1354435acba23bcab7b983bdd86331834ec869ef620251b274d9fa50139"
	},
	{
		"id": "c91940badc64",
		"ts": "2026-06-30T11:43:21.442Z",
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
		"liquidityUsd": 4018944.32,
		"hash": "c91940badc6441d74ee16f8c8235417e1db59910f761fad909fdaf2b8a6146c3"
	},
	{
		"id": "9ac9076dab33",
		"ts": "2026-06-30T11:43:21.687Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 910158.41,
		"hash": "9ac9076dab33bc6fb3ef8a072a984216fb70d0e787099f526c685eada1ca8a10"
	},
	{
		"id": "bd2ccbf76326",
		"ts": "2026-06-30T11:43:21.921Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25722584.62,
		"hash": "bd2ccbf763265fd772ffcec83df123aa79ef13b010073bb100882da95f2f825d"
	},
	{
		"id": "eb379a55e9c2",
		"ts": "2026-06-30T11:43:23.029Z",
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
		"liquidityUsd": 2237563.84,
		"hash": "eb379a55e9c2032e9278cb614956fb9008de134c1647e19f8f86c5e0b25358fb"
	},
	{
		"id": "658cfae7cd12",
		"ts": "2026-06-30T11:43:23.270Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 8905648.08,
		"hash": "658cfae7cd1257c394b325600d74826565b8b82c44472027f0e57dd3ec266f4b"
	},
	{
		"id": "d08b7e1652f7",
		"ts": "2026-06-30T11:43:23.499Z",
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
		"liquidityUsd": 4460711.11,
		"hash": "d08b7e1652f7a539a98901d4664d93adfaf94c9a80be8c741c05ad8f26405c98"
	},
	{
		"id": "fdbcf4ee999a",
		"ts": "2026-06-30T11:43:23.713Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 64773.35,
		"hash": "fdbcf4ee999ab560164c422f0be333063c8097cd9ee152eabe0bba5027fb56a7"
	}
]
