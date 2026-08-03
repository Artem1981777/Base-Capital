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
	"updatedAt": "2026-08-03T20:24:38.866Z",
	"tokensScored": 7198,
	"verdictsIssued": 7198,
	"safe": 6269,
	"risky": 552,
	"likelyRug": 377,
	"ticks": 439
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "672a0f38d266",
		"ts": "2026-08-03T20:24:34.632Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112447569.42,
		"hash": "672a0f38d266643dd72214696a6ee6b5168b3f02dd4643390a83e5e3312c242e"
	},
	{
		"id": "3d77c63cbff8",
		"ts": "2026-08-03T20:24:34.874Z",
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
		"liquidityUsd": 17201168.96,
		"hash": "3d77c63cbff8f62ca8bcf11693439712b41566e7c8731eb6ba8fa23f5a0ee31e"
	},
	{
		"id": "fb905a3332fe",
		"ts": "2026-08-03T20:24:35.123Z",
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
		"liquidityUsd": 1118417.3,
		"hash": "fb905a3332fe1a6dac325a0c759f7823aff0f00d76b77931225695617837395c"
	},
	{
		"id": "4623928ce53d",
		"ts": "2026-08-03T20:24:35.411Z",
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
		"liquidityUsd": 24878324.22,
		"hash": "4623928ce53dd193dcc62d650f71a376a775bb08de7ea0a05ca94b84bf65f2c5"
	},
	{
		"id": "531a9bf4d295",
		"ts": "2026-08-03T20:24:35.743Z",
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
		"liquidityUsd": 4411334.23,
		"hash": "531a9bf4d2959b0111f4503597a3dd3cae687a95fc9a2264cc4c1a256ddefa34"
	},
	{
		"id": "9cb3acd24d32",
		"ts": "2026-08-03T20:24:36.049Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 903843.31,
		"hash": "9cb3acd24d3224843354d6207855751fa606373984e40f9af23ecc47e06b20f3"
	},
	{
		"id": "309e732f9b78",
		"ts": "2026-08-03T20:24:36.308Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24878324.22,
		"hash": "309e732f9b78f92e6292eca89695fc4e078afb3f985a58461082809a72bc65b2"
	},
	{
		"id": "524ef0fb1d43",
		"ts": "2026-08-03T20:24:36.564Z",
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
		"liquidityUsd": 3852354.7,
		"hash": "524ef0fb1d43029f5e0f59dcdc2d0ea0b35fa294e2f145f5cba429bac4c0aa05"
	},
	{
		"id": "6766338cc816",
		"ts": "2026-08-03T20:24:36.802Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 846381.67,
		"hash": "6766338cc8169d172f9b301d57769b8c8d507943cc6de15ad66e6b28794c5465"
	},
	{
		"id": "334c0867ad7f",
		"ts": "2026-08-03T20:24:37.047Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 303780.27,
		"hash": "334c0867ad7f14113f8ee91021f526b8e2bd1ddf5f925a3c79d6a97c5f0dd619"
	},
	{
		"id": "794286424639",
		"ts": "2026-08-03T20:24:37.271Z",
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
		"liquidityUsd": 1724929.67,
		"hash": "794286424639ab04a8ec028d6042aa4955e762bdc82452109c1df4ee3cb8e000"
	},
	{
		"id": "569758697731",
		"ts": "2026-08-03T20:24:37.488Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 262680.65,
		"hash": "569758697731015f774be75fb9dff579d24df344cc2ee1cea69c58c61bcdeaaa"
	},
	{
		"id": "185bd5e31f79",
		"ts": "2026-08-03T20:24:37.707Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 176560.35,
		"hash": "185bd5e31f793339e943c158da659079d6e2edb23faee4abbb8cc1f8a5063b12"
	},
	{
		"id": "6327dc36e1ef",
		"ts": "2026-08-03T20:24:37.932Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 290996.84,
		"hash": "6327dc36e1ef0b61f92405ef4201758f4409d496309ff6d7be2e74665fc1597f"
	},
	{
		"id": "d1228f04fa4e",
		"ts": "2026-08-03T20:24:38.153Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1688924.9,
		"hash": "d1228f04fa4e34a237635c4962c6c1ad1e058d8e722045e5edbe7a783273d98a"
	},
	{
		"id": "837995338719",
		"ts": "2026-08-03T20:24:38.423Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9651559.57,
		"hash": "83799533871972bc60d03e30a451b04a7c6ed05f273b73df3dd2aac5e139100f"
	},
	{
		"id": "f1f5042081b0",
		"ts": "2026-08-03T20:24:38.647Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1242481.77,
		"hash": "f1f5042081b029f1d508fa45e20eea4edb7ef9c0e0e1dcc841912de802edd358"
	},
	{
		"id": "824b19f24cae",
		"ts": "2026-08-03T20:24:38.866Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 370814.3,
		"hash": "824b19f24cae04d30a4921da3d3edbda6dcb7934743a4f4e3c67a86208ae336f"
	},
	{
		"id": "a7582d9b7e65",
		"ts": "2026-08-03T18:48:21.674Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112370607.66,
		"hash": "a7582d9b7e65299449b08278c79c912cfabd917377c1621d7a547a9056499ba6"
	},
	{
		"id": "5822c411a46d",
		"ts": "2026-08-03T18:48:22.027Z",
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
		"liquidityUsd": 18012935.5,
		"hash": "5822c411a46d9f027dd00fa8824f61ab43515b83bb7bb135fd2b010dca77d04c"
	},
	{
		"id": "b0cab70d068b",
		"ts": "2026-08-03T18:48:22.233Z",
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
		"liquidityUsd": 1117257.62,
		"hash": "b0cab70d068bdbaba249d2e21b2cbe59be8d24ece032f353d03c35fd78959d41"
	},
	{
		"id": "ca33136f68de",
		"ts": "2026-08-03T18:48:22.423Z",
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
		"liquidityUsd": 24875880.57,
		"hash": "ca33136f68deb6155826155bf909ea5bbae86d988a43c409a38c2ee6d10360cd"
	},
	{
		"id": "07414e3aa75d",
		"ts": "2026-08-03T18:48:22.627Z",
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
		"liquidityUsd": 4404006.76,
		"hash": "07414e3aa75de01590b772f11012314c2525a436a323d322c42ff670a75f7cfb"
	},
	{
		"id": "dde713a3784d",
		"ts": "2026-08-03T18:48:22.818Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 898554.49,
		"hash": "dde713a3784df97154d1b7cb522dba589275810ba2c91f7aaf3ecb124e75c5c5"
	},
	{
		"id": "985d73e949f8",
		"ts": "2026-08-03T18:48:23.017Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24875880.57,
		"hash": "985d73e949f816c4d1d52d7a7c8a375fcb38531ad995dd7c61139bc2db1c4a72"
	},
	{
		"id": "68de0b487976",
		"ts": "2026-08-03T18:48:23.207Z",
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
		"liquidityUsd": 3839823.09,
		"hash": "68de0b487976e9e7c81d29d5677856b9ed3de2d5ed4a2ffa877320db1d8be94d"
	},
	{
		"id": "433a7dfac240",
		"ts": "2026-08-03T18:48:23.408Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 835068.49,
		"hash": "433a7dfac24077eb6837f2fe16ec0034d7a8b3fa2a2e4b5445ccc084b4fd272a"
	},
	{
		"id": "f01bc8279c6a",
		"ts": "2026-08-03T18:48:23.603Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 305838.1,
		"hash": "f01bc8279c6af4c6a703bbc5c2a20741a2d8b59b98342035cff4ac6433bf5ce1"
	},
	{
		"id": "421ef8fdb542",
		"ts": "2026-08-03T18:48:23.803Z",
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
		"liquidityUsd": 1700493.5,
		"hash": "421ef8fdb542b25f054e5e2adce13b5c5cd9ab4508f26c0cd139719751a40071"
	},
	{
		"id": "ca2793030cd7",
		"ts": "2026-08-03T18:48:23.996Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 253192.71,
		"hash": "ca2793030cd715e831871625187fdba830f4abb978aaa1fb765c9c33c821e24c"
	},
	{
		"id": "3788ca111b85",
		"ts": "2026-08-03T18:48:24.211Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 186334.79,
		"hash": "3788ca111b85908931479f1d91f1622e8d6917fc8e2d89a74e1dc2c29462585e"
	},
	{
		"id": "4dfcef41cd04",
		"ts": "2026-08-03T18:48:24.387Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 294202.28,
		"hash": "4dfcef41cd0414a4e2a5942e07fec261603747fe2f3c395ef3899f5dded88a87"
	},
	{
		"id": "d4a82633051a",
		"ts": "2026-08-03T18:48:24.589Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 54438.65,
		"hash": "d4a82633051afec37639dbbd209bf1834f441c4a7eba9e08fa21e745fddf4838"
	},
	{
		"id": "22555ae4945f",
		"ts": "2026-08-03T18:48:24.770Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1251884.7,
		"hash": "22555ae4945f3ca14bc93de941e8db23697c7c29bac41acc8a1303a407ab286a"
	},
	{
		"id": "1d28d3dca051",
		"ts": "2026-08-03T18:48:24.977Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9593250.92,
		"hash": "1d28d3dca05103e8685531892a2e692c536fc7f226dee7bc9e1a263b72e5ca2c"
	},
	{
		"id": "d42341842e0b",
		"ts": "2026-08-03T18:48:25.159Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 373167.93,
		"hash": "d42341842e0b00605829d09a750f44432a4af77fac2be897d2a0222ce194ec53"
	},
	{
		"id": "067699354fe0",
		"ts": "2026-08-03T16:20:36.862Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112161121.13,
		"hash": "067699354fe0a1a7d7d6916708e348fdb190964fe9303cfdbefd9497e1e51ef1"
	},
	{
		"id": "62a78264139b",
		"ts": "2026-08-03T16:20:37.133Z",
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
		"liquidityUsd": 17399860.79,
		"hash": "62a78264139b910f33ef75ee6574b88a391f9b2c1deb2e51e2e2e3aa08d0e932"
	},
	{
		"id": "2a3baac37db9",
		"ts": "2026-08-03T16:20:37.388Z",
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
		"liquidityUsd": 1114284.24,
		"hash": "2a3baac37db965816f03286ef51df7c4e4bb2ce18a34ffe4ad8d03d2fabff3ba"
	},
	{
		"id": "ee2dcac94d37",
		"ts": "2026-08-03T16:20:37.644Z",
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
		"liquidityUsd": 24784543.1,
		"hash": "ee2dcac94d37e9cbeed858826e6886aa273f492d5136eda6a277f506fdfc5c6c"
	},
	{
		"id": "6afc7c569258",
		"ts": "2026-08-03T16:20:37.911Z",
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
		"liquidityUsd": 4405359.41,
		"hash": "6afc7c569258bc267252283471033a88aa89704e8b403b30f34eb7a44654e0a9"
	},
	{
		"id": "eff496f55a89",
		"ts": "2026-08-03T16:20:38.167Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894071.53,
		"hash": "eff496f55a89fc96b56a06ae334d8a7c60bfd0199aaae95635d193e8c1399eac"
	},
	{
		"id": "5473b1a9dd6f",
		"ts": "2026-08-03T16:20:38.427Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24784543.1,
		"hash": "5473b1a9dd6f2d754251093aef3e18cf51605c6270d55ced6865ad9d889f90d0"
	},
	{
		"id": "7e745eac5b53",
		"ts": "2026-08-03T16:20:38.688Z",
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
		"liquidityUsd": 3871170.75,
		"hash": "7e745eac5b53774f411ee33012a650a8c608575308a105a860c316bafeadeee3"
	},
	{
		"id": "28ead189bba3",
		"ts": "2026-08-03T16:20:38.949Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 989536.08,
		"hash": "28ead189bba33d62b4b64010d30a07ebc344252c1b45e93bda3a0820df53604f"
	},
	{
		"id": "c96b038f188b",
		"ts": "2026-08-03T16:20:39.207Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 301043.87,
		"hash": "c96b038f188bfa6c4efadac348ab98c078be1838927b2b56964e460bc6ce4ca7"
	},
	{
		"id": "de9496af15b4",
		"ts": "2026-08-03T16:20:39.448Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 267592.79,
		"hash": "de9496af15b49840dbe3ae6d9aed0353fd5ae92b6d9323d60a43d5f89971bf95"
	},
	{
		"id": "daa1018db7fa",
		"ts": "2026-08-03T16:20:39.685Z",
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
		"liquidityUsd": 1694510.25,
		"hash": "daa1018db7fa14c7ab6ffbc5b7a1bb93aa4f41dd50814e5f75b12fbdee758dde"
	},
	{
		"id": "d703e0bee5a4",
		"ts": "2026-08-03T16:20:39.924Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185916.61,
		"hash": "d703e0bee5a428674a0030aa59e4031fa5bc92cda94339662e7fe2b87ff16555"
	},
	{
		"id": "961f233b7de7",
		"ts": "2026-08-03T16:20:40.164Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 56057.6,
		"hash": "961f233b7de7971eea10601340e095d3fd3b4db37038a25e24eec5ee0cb81b9b"
	},
	{
		"id": "3f19e9e71906",
		"ts": "2026-08-03T16:20:40.401Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 284795.68,
		"hash": "3f19e9e71906a5cac9915acac009aa62920e836dd2fbcd957946c3c9299f8f76"
	},
	{
		"id": "9a91b7718060",
		"ts": "2026-08-03T16:20:40.639Z",
		"symbol": "BASEMATE",
		"token": "0x07E61D8a4e197dfC269e90D7ECe1dF0D26702bA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 131062.56,
		"hash": "9a91b77180602529fdc106846335fae4c58dd3f3e13f34405b0ce46aea76aa65"
	},
	{
		"id": "1079e10e3288",
		"ts": "2026-08-03T16:20:40.877Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1240809.4,
		"hash": "1079e10e3288cc6c8813ec966b75faf8f8f5b87f129315054763efc4bfe01da4"
	},
	{
		"id": "09bf2845c519",
		"ts": "2026-08-03T16:20:41.116Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9434017.69,
		"hash": "09bf2845c519727c50616fcccdcf678f362719e96e5cd75dc5c767a3cbbaf41e"
	},
	{
		"id": "e16b702eef57",
		"ts": "2026-08-03T13:38:03.234Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111347562.77,
		"hash": "e16b702eef570aeff639903dc648d8235b2b821021af381582b37241fc814258"
	},
	{
		"id": "0709db066e34",
		"ts": "2026-08-03T13:38:03.568Z",
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
		"liquidityUsd": 17743175.45,
		"hash": "0709db066e34901ddfae4334bdeb6499a9a6bd07635aa75e5094be379c106d45"
	},
	{
		"id": "aa564690d602",
		"ts": "2026-08-03T13:38:03.950Z",
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
		"liquidityUsd": 1102496.82,
		"hash": "aa564690d6025ef553a7f5a09fd8fa5a46849ae2163f2309900771c1a0feefae"
	},
	{
		"id": "a8b200596bb4",
		"ts": "2026-08-03T13:38:04.185Z",
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
		"liquidityUsd": 24571339.87,
		"hash": "a8b200596bb432570d02bb69b6fc947826acaf9b0017c48bcc82e50e5a62c840"
	},
	{
		"id": "7aefe1ee108f",
		"ts": "2026-08-03T13:38:04.369Z",
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
		"liquidityUsd": 4345962.77,
		"hash": "7aefe1ee108f13839f59c1dfe8d8693857c3b965cc65a6a08fcf59204a8206bc"
	},
	{
		"id": "5a845f9e815a",
		"ts": "2026-08-03T13:38:04.574Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890046.48,
		"hash": "5a845f9e815a653730fc98c1b700b3775d31c0e37287e46778485644b71c8a1a"
	},
	{
		"id": "70620334ae2c",
		"ts": "2026-08-03T13:38:04.773Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24571339.87,
		"hash": "70620334ae2c743c6c9fb0cb162d6650a196afb7a5e2c323882ac5843527588a"
	},
	{
		"id": "55f0b91ac2bb",
		"ts": "2026-08-03T13:38:04.985Z",
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
		"liquidityUsd": 4057000.19,
		"hash": "55f0b91ac2bbcb38542f8d29ea23e92179a10bb8d6e4b0454ba4c6c94b439bfe"
	},
	{
		"id": "33aba2399e7b",
		"ts": "2026-08-03T13:38:05.170Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1033867.74,
		"hash": "33aba2399e7b62cd040bed77bb8096d5a7bf366ec5b631e7c681df36af27ee9b"
	},
	{
		"id": "535aa619ad27",
		"ts": "2026-08-03T13:38:05.360Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 301005.64,
		"hash": "535aa619ad276a18f9b746f1aebdc5ee116fdda7f68559901077a69746cbef15"
	},
	{
		"id": "6279510eb965",
		"ts": "2026-08-03T13:38:05.544Z",
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
		"liquidityUsd": 1637400.67,
		"hash": "6279510eb9652f495460a7b1b462b201a0326bd798b1ab0396941f034d2e3ba5"
	},
	{
		"id": "0a066014f342",
		"ts": "2026-08-03T13:38:05.730Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 271905.96,
		"hash": "0a066014f3423534116ac252ec19926022036782f6c5adf70b532bf2ef9eefd1"
	},
	{
		"id": "d19a9b54fe61",
		"ts": "2026-08-03T13:38:05.929Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 194957.34,
		"hash": "d19a9b54fe61d646a68b4dc6652f708bade3d087f724af3dee7a3e31a762c280"
	},
	{
		"id": "c207fc329b67",
		"ts": "2026-08-03T13:38:06.133Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 57924,
		"hash": "c207fc329b67891bf51c8cd0131216e79c0a404a494109903d37da602d57d1a8"
	},
	{
		"id": "43b6f50580bb",
		"ts": "2026-08-03T13:38:06.318Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9293068.41,
		"hash": "43b6f50580bb7b7c4d8707c71c2b976efbefb206c51926c18655e05c4ef27d8b"
	},
	{
		"id": "0434ae65ca28",
		"ts": "2026-08-03T13:38:06.498Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 281284.85,
		"hash": "0434ae65ca28ea7270477cb45273b55e02a5b3659fbe87bb1f75096de176b114"
	},
	{
		"id": "9766f7c67add",
		"ts": "2026-08-03T13:38:06.697Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1695010.37,
		"hash": "9766f7c67add9f556552bc5fcbd0447f067ab0b1f6d034213e2aaca4596e91ce"
	},
	{
		"id": "6f418dbe4d37",
		"ts": "2026-08-03T13:38:06.878Z",
		"symbol": "BASEMATE",
		"token": "0x07E61D8a4e197dfC269e90D7ECe1dF0D26702bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 127271.62,
		"hash": "6f418dbe4d37d5358b4e958448325c724007f9ed2a53d9e96f85fb957332d995"
	},
	{
		"id": "59974d38256c",
		"ts": "2026-08-03T10:38:58.262Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111066146.75,
		"hash": "59974d38256ceefebf529f10563a5193f0433e469f3d554601b63f85b49f18fe"
	},
	{
		"id": "0fd95bd7cf36",
		"ts": "2026-08-03T10:38:58.752Z",
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
		"liquidityUsd": 16806139.71,
		"hash": "0fd95bd7cf36c131d4ca95596ed9cd8a574eadbba135dcd0fdf2aca899277bd1"
	},
	{
		"id": "4cfb29d82fc4",
		"ts": "2026-08-03T10:38:59.017Z",
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
		"liquidityUsd": 1097673.01,
		"hash": "4cfb29d82fc4a03bdbec65ad4fbf9d238405b017e0aed950f1edd458da1448b6"
	},
	{
		"id": "44a54e218878",
		"ts": "2026-08-03T10:38:59.278Z",
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
		"liquidityUsd": 24641813.09,
		"hash": "44a54e218878eed0bc2d648a880ffea9aafe2050139929934e01367775cae9d2"
	},
	{
		"id": "ec5a10c1747d",
		"ts": "2026-08-03T10:38:59.538Z",
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
		"liquidityUsd": 4377195.63,
		"hash": "ec5a10c1747dae5eb4576b23d74cbd9d0bf0e6bc8198f953b2a4973b45326fbb"
	},
	{
		"id": "8218890ce7a7",
		"ts": "2026-08-03T10:38:59.798Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889990.85,
		"hash": "8218890ce7a788709c8cdd32731deda5676664e81903ae6b34ee3079b6faa513"
	},
	{
		"id": "3afeddabe015",
		"ts": "2026-08-03T10:39:00.057Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24641813.09,
		"hash": "3afeddabe0151bee1d1e64606f0955fff14e38e6687c3ae4d17fdb7a8477369e"
	},
	{
		"id": "ffdcc87d09ed",
		"ts": "2026-08-03T10:39:00.440Z",
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
		"liquidityUsd": 4334948.69,
		"hash": "ffdcc87d09ed8cf3387612cd12d43f28eb88f770d6c3ea30038e079452c55f0a"
	},
	{
		"id": "32535387018a",
		"ts": "2026-08-03T10:39:00.940Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1118313.66,
		"hash": "32535387018a77b5e89adbbf2ffd38e59da420caafae704bb2bf90b592b7a4e2"
	},
	{
		"id": "2ac492be7a93",
		"ts": "2026-08-03T10:39:01.247Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 298872.42,
		"hash": "2ac492be7a934c84a37c69ef1e6bebefaa670ac778df30bf0e510eeef6aae62b"
	},
	{
		"id": "053719ed5b8b",
		"ts": "2026-08-03T10:39:01.713Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1651335.05,
		"hash": "053719ed5b8b9c0781171faea20687135de3e081dddf1f6ec02d3a500ab96981"
	},
	{
		"id": "487f8948f5a8",
		"ts": "2026-08-03T10:39:02.073Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 284509.08,
		"hash": "487f8948f5a821511fd0c729b5e24eb7abaa828c51e68344d3ec7980f0f79e31"
	},
	{
		"id": "6a6ff25027ee",
		"ts": "2026-08-03T10:39:02.574Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 187259.67,
		"hash": "6a6ff25027ee0afc9e9e32afb11d97a6797f5e1e3cc0f49f01e27db5f50cd2ee"
	},
	{
		"id": "e0f8b91c8a0c",
		"ts": "2026-08-03T10:39:02.834Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"volume_liquidity_anomaly",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 59516.11,
		"hash": "e0f8b91c8a0c256c94db77735bfe39eb3a7a241979443dda50825dc9253821f5"
	},
	{
		"id": "97ef26bc17b5",
		"ts": "2026-08-03T10:39:03.148Z",
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
		"liquidityUsd": 9320527.71,
		"hash": "97ef26bc17b53a2e535fa9ac1baa5ebca06f8d9f658111505bb20426962dbe78"
	},
	{
		"id": "f7c77deb9eb9",
		"ts": "2026-08-03T10:39:03.440Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 282373.57,
		"hash": "f7c77deb9eb922baacce9cbdbc1209db5451517a430d0921034ff3b741e35072"
	},
	{
		"id": "6546f4152b9f",
		"ts": "2026-08-03T10:39:03.732Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"medium_liquidity",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 48709.99,
		"hash": "6546f4152b9fe25c7d8babbf4d5bd38d17a167c02368d1a23d21fdc46aba0249"
	},
	{
		"id": "1f44f960257c",
		"ts": "2026-08-03T10:39:03.985Z",
		"symbol": "KAITO",
		"token": "0x98d0baa52b2D063E780DE12F615f963Fe8537553",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 44788.45,
		"hash": "1f44f960257caf32f885a29674748e030ccf3e8fe5fd1f8d66311ca858cbadff"
	},
	{
		"id": "97a3b38c101a",
		"ts": "2026-08-03T06:18:29.563Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111357231.38,
		"hash": "97a3b38c101a1348eeb57b81beaa687197d6ba049b5ea7a9ca0ea9a1f1baaffb"
	},
	{
		"id": "8558cd3ac6c0",
		"ts": "2026-08-03T06:18:29.894Z",
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
		"liquidityUsd": 16991783.33,
		"hash": "8558cd3ac6c09dd8bc46b7ec3936576270eee715f5105e6842b34e3c56da9802"
	},
	{
		"id": "d0ef65f6b1c1",
		"ts": "2026-08-03T06:18:30.095Z",
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
		"liquidityUsd": 1108192.01,
		"hash": "d0ef65f6b1c15d9738e695150117a5604e1d8450dcd3e825568d5857eb6960e9"
	},
	{
		"id": "7fb7a4996e75",
		"ts": "2026-08-03T06:18:30.282Z",
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
		"liquidityUsd": 24705023.87,
		"hash": "7fb7a4996e75ed244d2dee56f3f8b6b5de605e4b4f696e2dd926455329d62ee2"
	},
	{
		"id": "95040d15c037",
		"ts": "2026-08-03T06:18:30.496Z",
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
		"liquidityUsd": 4390139.46,
		"hash": "95040d15c0377578896f032a2d8c77c2def6b20a34025b910785ed01be8b8182"
	},
	{
		"id": "b348f45138ff",
		"ts": "2026-08-03T06:18:30.712Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 886273.56,
		"hash": "b348f45138ff04d26918b961752573fd87641c77fde06c7f74adf5dd7b9d9b5f"
	},
	{
		"id": "6b85064e5e11",
		"ts": "2026-08-03T06:18:30.897Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24705023.87,
		"hash": "6b85064e5e113096774c215299746a39a3ec71ce08ff6e92a2827ed7dc118321"
	},
	{
		"id": "c2d646210b9d",
		"ts": "2026-08-03T06:18:31.091Z",
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
		"liquidityUsd": 4449352.48,
		"hash": "c2d646210b9dae6252de51f89aae468e47577dfe54d92cf4a1105ccc5784f110"
	},
	{
		"id": "fc74e9b3adef",
		"ts": "2026-08-03T06:18:31.277Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1031826.01,
		"hash": "fc74e9b3adefc16f6c85aebf5cab4b268906b4b2e8ac58eeb49a04af78017454"
	},
	{
		"id": "7c5673fff68a",
		"ts": "2026-08-03T06:18:31.465Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1638933.9,
		"hash": "7c5673fff68ad2ad125f9159c2e5a5ad02e420f44bee33c1d05761bd608cdf6b"
	},
	{
		"id": "7586d8800452",
		"ts": "2026-08-03T06:18:31.653Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 316913.94,
		"hash": "7586d88004527b2569ab87de0b55cba05cef435d89be09bc7cce66b032637b8b"
	},
	{
		"id": "284a029eb1ef",
		"ts": "2026-08-03T06:18:31.840Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185439.48,
		"hash": "284a029eb1efd2d8be8128dafe1e0e456fc77e0f1d8391c4de5991c0bc24a1a4"
	},
	{
		"id": "403d4005b9d6",
		"ts": "2026-08-03T06:18:32.027Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9315788.36,
		"hash": "403d4005b9d6fac15595bad5d4620f3741352fd79d2ebafea59268fb75492ede"
	},
	{
		"id": "22ba6bb09ba0",
		"ts": "2026-08-03T06:18:32.212Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 48694.73,
		"hash": "22ba6bb09ba04d95ddf34380bfcd79e3bfdd3b55cb56a9ed9fcce7baa6252172"
	},
	{
		"id": "55fd3d065f47",
		"ts": "2026-08-03T06:18:32.400Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 296705.63,
		"hash": "55fd3d065f4722cbef527eea0df71d553f9ecb56d104b67fb2a9b61e40174b14"
	},
	{
		"id": "94675b25f3d5",
		"ts": "2026-08-03T06:18:32.580Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 283848.22,
		"hash": "94675b25f3d58cd87eea2bc173894a5d2006d8b311851cdd0c05a60b67429bd9"
	},
	{
		"id": "2683476b11b0",
		"ts": "2026-08-03T06:18:32.769Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 365461.54,
		"hash": "2683476b11b095d3efd5d393bfc8770f8525835797ca706826206d8a2d68fe77"
	},
	{
		"id": "75cf1cc53973",
		"ts": "2026-08-03T06:18:32.970Z",
		"symbol": "KAITO",
		"token": "0x98d0baa52b2D063E780DE12F615f963Fe8537553",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 42877.03,
		"hash": "75cf1cc53973e623745e0d7b7cb85bd83fd151a9399038f80c0a1b3631588810"
	},
	{
		"id": "4f2a7b92bf1b",
		"ts": "2026-08-03T02:28:28.082Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111744931.9,
		"hash": "4f2a7b92bf1ba870629a19f3b33b20c07e018f6802f0d0283c3d8317016d8632"
	},
	{
		"id": "2f4a86268256",
		"ts": "2026-08-03T02:28:28.531Z",
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
		"liquidityUsd": 17088313.01,
		"hash": "2f4a8626825698b5dd6c307133ea1cb9b30efe918fe413ebe07e85e9129855a2"
	},
	{
		"id": "b5db1965bc52",
		"ts": "2026-08-03T02:28:28.974Z",
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
		"liquidityUsd": 1109703.7,
		"hash": "b5db1965bc526ec684c1ce588a070e15b71a46bd8f28908f305f60f886cee174"
	},
	{
		"id": "67bf5fe5ba31",
		"ts": "2026-08-03T02:28:29.208Z",
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
		"liquidityUsd": 24809013.4,
		"hash": "67bf5fe5ba31499b3eee88da26258b88e3a3b97d56a12e493c1a20b638a30a52"
	},
	{
		"id": "944ab4e5b8b0",
		"ts": "2026-08-03T02:28:29.467Z",
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
		"liquidityUsd": 4413339.54,
		"hash": "944ab4e5b8b0372af2f58c844f42f0eb91450fffc25ec6d3c427b1bb827c2b26"
	},
	{
		"id": "de01e9c6497b",
		"ts": "2026-08-03T02:28:29.707Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893916.87,
		"hash": "de01e9c6497b479d6241bec93da85a2be5ef53bd761b874906190936ee54bf18"
	},
	{
		"id": "f2c5ddec073b",
		"ts": "2026-08-03T02:28:29.941Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24809013.4,
		"hash": "f2c5ddec073b83f54f4b651c3c50110bdd30b521c6b637af36a35b83ed46783f"
	},
	{
		"id": "500c12c1c612",
		"ts": "2026-08-03T02:28:30.175Z",
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
		"liquidityUsd": 1959173.73,
		"hash": "500c12c1c61261b5d18b6afaca00ac34e03d2c64c784f670f226356008f45050"
	},
	{
		"id": "5a65fd8be74c",
		"ts": "2026-08-03T02:28:30.410Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 962070.37,
		"hash": "5a65fd8be74c2d2fc2801a564ea7e75dc808e37215048b6eb55914f20f980d1b"
	},
	{
		"id": "f1e2f0d36430",
		"ts": "2026-08-03T02:28:30.644Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1611065.89,
		"hash": "f1e2f0d364308c12a633b81eb52c0d9c24f255ef232c4f6a564f5bf995f2918e"
	},
	{
		"id": "6d7337645252",
		"ts": "2026-08-03T02:28:30.871Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 273925.95,
		"hash": "6d733764525241a7401c4c9486792e3f5d6bf6c710ca78c04ff6309969cd571f"
	},
	{
		"id": "9794416a08e5",
		"ts": "2026-08-03T02:28:31.105Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9353828.81,
		"hash": "9794416a08e52bea872075baae207c2f43294d9d28d0ae7027b8f4297973ace6"
	},
	{
		"id": "fbc3e1afc869",
		"ts": "2026-08-03T02:28:31.329Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 399578.31,
		"hash": "fbc3e1afc8698d1145e3c81c566940cd094d50486772d9c68968c20fb0019a5c"
	},
	{
		"id": "c4df897f865e",
		"ts": "2026-08-03T02:28:31.549Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 177095.77,
		"hash": "c4df897f865e777cce6899897f1923008663bf32ef9f45b17090a79c3b0e3762"
	},
	{
		"id": "7a46700b52fd",
		"ts": "2026-08-03T02:28:31.770Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 50592.9,
		"hash": "7a46700b52fdb9a1107b2e19490897a80da8a66273fb87820c74ee6e2b599dad"
	},
	{
		"id": "6222c3e347e4",
		"ts": "2026-08-03T02:28:31.993Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 288395.16,
		"hash": "6222c3e347e4d2ad20513217dec98e0f60d3252f41dc9bb838a992959cac3f08"
	},
	{
		"id": "0b91a62f03bd",
		"ts": "2026-08-03T02:28:32.209Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 292441.19,
		"hash": "0b91a62f03bd513e7d8cb2063bb3614b9b61ea4de807c752668d4152a9d0084a"
	},
	{
		"id": "48bb815d3308",
		"ts": "2026-08-03T02:28:32.439Z",
		"symbol": "KAITO",
		"token": "0x98d0baa52b2D063E780DE12F615f963Fe8537553",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 45887.73,
		"hash": "48bb815d3308daa9318e69eb4dda539591a95fba5bb06a81ee66780512854241"
	},
	{
		"id": "ac84c7f463e1",
		"ts": "2026-08-02T23:55:24.967Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112257902.07,
		"hash": "ac84c7f463e1aa2cce70aaeac8936f7636e542cc5ceb892285abfb07aaa03a76"
	},
	{
		"id": "2c3772be5758",
		"ts": "2026-08-02T23:55:25.408Z",
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
		"liquidityUsd": 18141332.32,
		"hash": "2c3772be5758807ce825d8cf92a595ba3b4dc3a13634eb763875d08024ac050b"
	},
	{
		"id": "633e51dad9ae",
		"ts": "2026-08-02T23:55:25.650Z",
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
		"liquidityUsd": 1115626.45,
		"hash": "633e51dad9aeda04e95125a03626d59bdf7787dc65c1da34f0e48e65c4292345"
	},
	{
		"id": "8730582ba0cf",
		"ts": "2026-08-02T23:55:26.098Z",
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
		"liquidityUsd": 24889841.71,
		"hash": "8730582ba0cf327ed672d0acd10ef9835c7e92640343cb909948a9d3f700b929"
	},
	{
		"id": "e1558b5342a2",
		"ts": "2026-08-02T23:55:26.538Z",
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
		"liquidityUsd": 4434632.75,
		"hash": "e1558b5342a29d0f0202b250b9eb29397a14812d462cb3cab376439908ca2873"
	},
	{
		"id": "8e0618dfc056",
		"ts": "2026-08-02T23:55:26.773Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 898399.82,
		"hash": "8e0618dfc056bd85b6f67e127e31df644a12be6791c8282de3a3484c00ef1a94"
	},
	{
		"id": "8370d89f5b4d",
		"ts": "2026-08-02T23:55:27.233Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24889842.49,
		"hash": "8370d89f5b4de26c50852a19cbc3a4eb9b66c022e367b01d915b1a4e80ae3b46"
	},
	{
		"id": "6739f912c82f",
		"ts": "2026-08-02T23:55:27.464Z",
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
		"liquidityUsd": 2123554.07,
		"hash": "6739f912c82f7755e6c7d2403b0b7dfc23c857ede06adc34873d01d4dc71c67e"
	},
	{
		"id": "2e6cc9caec84",
		"ts": "2026-08-02T23:55:27.694Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1113067.37,
		"hash": "2e6cc9caec84ed7ab0f65637de00339c8a22fc620f656464fa7c7b1b0c6faf9f"
	},
	{
		"id": "382963b09e84",
		"ts": "2026-08-02T23:55:27.929Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1612162.56,
		"hash": "382963b09e84e41ab4ca82511a6d8c926275b3b017a1fc1091ba94309facd22f"
	},
	{
		"id": "f02c308fed16",
		"ts": "2026-08-02T23:55:28.153Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 374120.93,
		"hash": "f02c308fed1643c5c3ff315d158dc4ba6e59978167442a306cea44999e51cdc7"
	},
	{
		"id": "28c36a3585cd",
		"ts": "2026-08-02T23:55:28.370Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 281421.26,
		"hash": "28c36a3585cd8eda187815642bd6546ad001ac2ebe90f528e8363f6cc40b1192"
	},
	{
		"id": "a1ad0219fa85",
		"ts": "2026-08-02T23:55:28.587Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9427602.31,
		"hash": "a1ad0219fa854ff20a33060ba7c3da8a2258b67732f57775d84d84b44ff4fe71"
	},
	{
		"id": "1e17cff49e97",
		"ts": "2026-08-02T23:55:28.812Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54932.5,
		"hash": "1e17cff49e97bed8740c080ff8e7dc29cd19f68aa203e343a0c2d8e8314a70d1"
	},
	{
		"id": "7efc4d3efd5f",
		"ts": "2026-08-02T23:55:29.040Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 184371.4,
		"hash": "7efc4d3efd5f8f295cde30f987db2648bed610663f719a1b0d09daf277493d48"
	},
	{
		"id": "3904b8f75b9d",
		"ts": "2026-08-02T23:55:29.257Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 285452.6,
		"hash": "3904b8f75b9dedd74c18fdf96e63de0c1aad0ad89ba136216655fea509631dc7"
	},
	{
		"id": "460d414bee9f",
		"ts": "2026-08-02T23:55:29.474Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1840745.52,
		"hash": "460d414bee9f7531af1ae94413bcbbb35b6957f43737a3a546c7c47ef712d86f"
	},
	{
		"id": "8b2ecf7924ec",
		"ts": "2026-08-02T22:52:29.168Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112412492.14,
		"hash": "8b2ecf7924ecc8ae7589ff5098d0dd5b3e09fc76b974a22795ce678c276ec4ef"
	},
	{
		"id": "2694eab8a4e2",
		"ts": "2026-08-02T22:52:29.539Z",
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
		"liquidityUsd": 18273048.73,
		"hash": "2694eab8a4e2e4147729c41101584354d09a448f9f9c9e7246fed73b6a5ab366"
	},
	{
		"id": "a8cab90986cb",
		"ts": "2026-08-02T22:52:29.910Z",
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
		"liquidityUsd": 1119792.16,
		"hash": "a8cab90986cb98ad10ab4f52beaca2e909ef77d31cdd690f2e0feac75931948c"
	},
	{
		"id": "73a59f545458",
		"ts": "2026-08-02T22:52:30.316Z",
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
		"liquidityUsd": 24932792.96,
		"hash": "73a59f545458379f847ba6134a530a9a3a30be0b85790fd9d157f8981824ce0a"
	},
	{
		"id": "434a07c5aa70",
		"ts": "2026-08-02T22:52:30.521Z",
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
		"liquidityUsd": 4445267.68,
		"hash": "434a07c5aa70b9b968acd0055c52e666687aac3d9e79520c1b507b07a16f154c"
	},
	{
		"id": "8fcb142c1599",
		"ts": "2026-08-02T22:52:30.721Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 899356.97,
		"hash": "8fcb142c1599c0c2e0c2c0d6996b670e44ebd3cbc76dcdcaa1ffff29dfa3e6fb"
	},
	{
		"id": "fa5d02abb9bf",
		"ts": "2026-08-02T22:52:30.926Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24932792.98,
		"hash": "fa5d02abb9bf422c5e2e0fdf242ad41e9c5cb6b2e7c4b01f60efb9d813536cdb"
	},
	{
		"id": "45f4ad2aefc0",
		"ts": "2026-08-02T22:52:31.128Z",
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
		"liquidityUsd": 2124576.23,
		"hash": "45f4ad2aefc0df81ac638706f33162f6a74d171a0bc5485a7c0f4658a6cbae8a"
	},
	{
		"id": "280df1a5084e",
		"ts": "2026-08-02T22:52:31.332Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1071113,
		"hash": "280df1a5084e7b30d61b7b3d94a30c55055ae2b01a3bab0bd4000324a7d8586e"
	},
	{
		"id": "c0767aaa2eb0",
		"ts": "2026-08-02T22:52:31.536Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1593556.12,
		"hash": "c0767aaa2eb01a0895b3d826b8237eb831a22186d233fbb86fa171bdebd95c06"
	},
	{
		"id": "b7cbe9583056",
		"ts": "2026-08-02T22:52:31.724Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 376623.23,
		"hash": "b7cbe9583056b14179960225574061d599bf498aedc0c39bb8df4a133615f216"
	},
	{
		"id": "bd6219dc63c8",
		"ts": "2026-08-02T22:52:31.913Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9419966.87,
		"hash": "bd6219dc63c853d456c1bf10741f5549d68d7d9ab9d0d682b8245a325df5d59f"
	},
	{
		"id": "6dba8fb14c46",
		"ts": "2026-08-02T22:52:32.099Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55915.03,
		"hash": "6dba8fb14c46395420d15f15c18e1c8e31b89a9a57532db3354188ed7ea91030"
	},
	{
		"id": "a1f300b27a94",
		"ts": "2026-08-02T22:52:32.287Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 281313.19,
		"hash": "a1f300b27a94cf394452b5fc158523c28b170e18ed6bb9b5ab3f28423ce59ecc"
	},
	{
		"id": "8c3056a5f516",
		"ts": "2026-08-02T22:52:32.495Z",
		"symbol": "BLOCKTRONICS",
		"token": "0x7afE438411ee3959C7De6f7fB76bf9C769320bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185980.27,
		"hash": "8c3056a5f5165658c4f8704cae39cc99c96ac4608f4d8f7a9f17b93f61504682"
	},
	{
		"id": "0b799f833db8",
		"ts": "2026-08-02T22:52:32.681Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 286907.61,
		"hash": "0b799f833db8c33a4568bf679ba47521aa89457dcd0a9e3de7f3c70b80128241"
	},
	{
		"id": "d26924c26a40",
		"ts": "2026-08-02T22:52:32.895Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1851666.48,
		"hash": "d26924c26a4022c7c78a5d2f124f69807c28e244b22378a5157cf08c740c8c80"
	},
	{
		"id": "ad2d2ba18e2f",
		"ts": "2026-08-02T21:51:50.566Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112652361.91,
		"hash": "ad2d2ba18e2fc722dbcb62f766afa2c2308e48f12c8c3647af00260086433c57"
	},
	{
		"id": "9120f9165ce7",
		"ts": "2026-08-02T21:51:51.017Z",
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
		"liquidityUsd": 18001640.07,
		"hash": "9120f9165ce746de337f49b27908d131009f65cb238f5247dea90744c59285d9"
	},
	{
		"id": "af67836f9a1f",
		"ts": "2026-08-02T21:51:51.463Z",
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
		"liquidityUsd": 1123351.84,
		"hash": "af67836f9a1f90b402d934daa4c1ce2d8bc714be7ad43af745f62043b6af7e51"
	},
	{
		"id": "69136883eaad",
		"ts": "2026-08-02T21:51:51.702Z",
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
		"liquidityUsd": 25159532.08,
		"hash": "69136883eaad8d5b1803f3766bdc803ccc8bf094fa610c41a509cbb3257f46d7"
	},
	{
		"id": "299b2bdcea86",
		"ts": "2026-08-02T21:51:51.957Z",
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
		"liquidityUsd": 4442824.31,
		"hash": "299b2bdcea86d18b1399ac3224efb558adb4a1aea42fffda365552b0cc306e34"
	},
	{
		"id": "c51232bd2978",
		"ts": "2026-08-02T21:51:52.188Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 909858,
		"hash": "c51232bd2978d9a5cc149b9d45e985eef27600d2b6c18ea78f407e50694a6bb7"
	},
	{
		"id": "3ff84e52e943",
		"ts": "2026-08-02T21:51:52.456Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25159532.08,
		"hash": "3ff84e52e943f18d60d933e2b1a9e7ff82362c1ef947dcba49f0cd0ce1b13f63"
	},
	{
		"id": "fbeb20b13032",
		"ts": "2026-08-02T21:51:52.695Z",
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
		"liquidityUsd": 2131791.94,
		"hash": "fbeb20b130320af350f25ece384c1df7b689be9e2009f77f0b10de8d364b695d"
	},
	{
		"id": "d041853658d4",
		"ts": "2026-08-02T21:51:52.929Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1131861.2,
		"hash": "d041853658d4df1ab34dba27663a526f418675429f5e6918a739a54af25eb90c"
	},
	{
		"id": "5876e04034c2",
		"ts": "2026-08-02T21:51:53.164Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1684834.94,
		"hash": "5876e04034c26824ea29c6ff56dc3a679ea1fef6417bc978480f4c11e844905a"
	},
	{
		"id": "e206c922f777",
		"ts": "2026-08-02T21:51:53.387Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 378729.65,
		"hash": "e206c922f777763f7e0a12bda7c82cb384d0a8b93306e88accaa762375e71221"
	},
	{
		"id": "23e8189b41e3",
		"ts": "2026-08-02T21:51:53.609Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9504436.32,
		"hash": "23e8189b41e309e7aac9465e9075198117efc4b9087c4aaa02c47ee72fe411a9"
	},
	{
		"id": "f082134db75a",
		"ts": "2026-08-02T21:51:53.827Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55772.48,
		"hash": "f082134db75adb2763205c23eff1197cd2f7840eff57cd7f54533d3b910f6525"
	},
	{
		"id": "1e791f358422",
		"ts": "2026-08-02T21:51:54.049Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 298786.08,
		"hash": "1e791f35842218ddb07b0b6415d8e5677f4ad22bead31f401f0616b5707063c2"
	},
	{
		"id": "d578677aa8f1",
		"ts": "2026-08-02T21:51:54.266Z",
		"symbol": "MiroShark",
		"token": "0xd7bc6a05a56655FB2052F742B012d1DFD66e1BA3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 288167.62,
		"hash": "d578677aa8f1da0a92782adfd5f63e71ec68e8c42c989c1badefee2ca688315a"
	},
	{
		"id": "0c6770eafdf5",
		"ts": "2026-08-02T21:51:54.490Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 293717.75,
		"hash": "0c6770eafdf5cca3fae90b62004089a4eb896c21c8f819cd56c9a5c55d085718"
	},
	{
		"id": "fd7822fdb258",
		"ts": "2026-08-02T21:51:54.711Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1853893.4,
		"hash": "fd7822fdb258bd0ba89fc3445e547dbc771d8cea1709d6972ece2a59b998aeb0"
	},
	{
		"id": "e67c0be14dc4",
		"ts": "2026-08-02T20:50:32.697Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112230983.18,
		"hash": "e67c0be14dc469c47252ad408c1c68986caf1f78f9d7204ef83e19195f01c11c"
	},
	{
		"id": "6ccf36924f9e",
		"ts": "2026-08-02T20:50:32.941Z",
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
		"liquidityUsd": 14319579.04,
		"hash": "6ccf36924f9e7fbc2b96117ecba7ea4f5c5c8894dd28ac0180a58766814116d3"
	},
	{
		"id": "51ba412a101a",
		"ts": "2026-08-02T20:50:33.390Z",
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
		"liquidityUsd": 1118062.85,
		"hash": "51ba412a101a81b5e48eee21006ecdc5e4fa103c0d0f7963458abb8c44582360"
	},
	{
		"id": "6d5fb4c83d4b",
		"ts": "2026-08-02T20:50:33.627Z",
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
		"liquidityUsd": 24947335.85,
		"hash": "6d5fb4c83d4b5b25971cab6086e73e221036e9e315941a1759a17ca8c96a5dad"
	},
	{
		"id": "a48e7959a3bd",
		"ts": "2026-08-02T20:50:33.869Z",
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
		"liquidityUsd": 4442824.31,
		"hash": "a48e7959a3bda1ac6e4c256e213911425d27fb10b98369bb7c0b2fee2e4269af"
	},
	{
		"id": "221b36815612",
		"ts": "2026-08-02T20:50:34.105Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 906642.32,
		"hash": "221b36815612683268e045c7677a8354180e2f71623e12a05ef425be5e5cca18"
	},
	{
		"id": "f23abf24e42b",
		"ts": "2026-08-02T20:50:34.339Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24947335.85,
		"hash": "f23abf24e42be03c79f8f82e96e0c7bfb68fde4fff62d5c2bcb97a0fbc4cdca6"
	},
	{
		"id": "b913d8861ef0",
		"ts": "2026-08-02T20:50:34.575Z",
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
		"liquidityUsd": 2122835.74,
		"hash": "b913d8861ef07e195595eed79dd26a0c1eef997b484234e7b8063af6de8bddc0"
	},
	{
		"id": "d1eabc2e0237",
		"ts": "2026-08-02T20:50:34.810Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 973857.07,
		"hash": "d1eabc2e0237c8dc5ddce3473d2b8a5f41538c39dad716a93cd15988ce280c5f"
	},
	{
		"id": "e94324cdd446",
		"ts": "2026-08-02T20:50:35.051Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 368511.07,
		"hash": "e94324cdd4461a3798362e942da3dbeaadd71d321ac0b8ad8da503ea1dd63905"
	},
	{
		"id": "0f8d9f54ca88",
		"ts": "2026-08-02T20:50:35.271Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9458697.35,
		"hash": "0f8d9f54ca88c21afee3530b162ba09937225b64dd33818307ba85198aa7dfe1"
	},
	{
		"id": "7a522a98d032",
		"ts": "2026-08-02T20:50:35.496Z",
		"symbol": "HOME",
		"token": "0x4BfAa776991E85e5f8b1255461cbbd216cFc714f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55546.89,
		"hash": "7a522a98d03247145a6f34b688f1dd0b76e4c4545940aa9cdffc874e384f2bc8"
	},
	{
		"id": "3a0a03d2e0c4",
		"ts": "2026-08-02T20:50:35.717Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 298818.93,
		"hash": "3a0a03d2e0c4af4cee8c355eb3ae4ce0f21ea44494438f6c367a4d9143651437"
	},
	{
		"id": "6e5b5fdba772",
		"ts": "2026-08-02T20:50:35.940Z",
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
		"liquidityUsd": 1628600.08,
		"hash": "6e5b5fdba7723b8878f9e11cde3023c6fe6dbeefb307a1b496a5e859c3fc6ab6"
	},
	{
		"id": "2abf7bc0c495",
		"ts": "2026-08-02T20:50:36.163Z",
		"symbol": "KAITO",
		"token": "0x98d0baa52b2D063E780DE12F615f963Fe8537553",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 45423.08,
		"hash": "2abf7bc0c4957a8f24015270b77c85d691e1404fc77a400e1e32998bfaf44859"
	},
	{
		"id": "1add7080d037",
		"ts": "2026-08-02T20:50:36.385Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 284324.26,
		"hash": "1add7080d037bf4bc14c7cfa5413fc3e2cc40b7deaa9b5428a7fdbd283c9c1a7"
	},
	{
		"id": "c46650de7b55",
		"ts": "2026-08-02T20:50:36.635Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1847267.13,
		"hash": "c46650de7b5599f182de62a829b145e404ff79e72f65b0741820aece4328f674"
	},
	{
		"id": "f60f32077299",
		"ts": "2026-08-02T19:17:03.530Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112152976.66,
		"hash": "f60f32077299020f1caf2e66ec95f3410af7ffbad755bf5f01e2643d67649914"
	},
	{
		"id": "b4596d842c9e",
		"ts": "2026-08-02T19:17:04.212Z",
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
		"liquidityUsd": 16659867.78,
		"hash": "b4596d842c9ed7803f1ebfd16bf4c1a7c496f72ff9c42c92d2564af59cf64499"
	},
	{
		"id": "3229eda16246",
		"ts": "2026-08-02T19:17:04.778Z",
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
		"liquidityUsd": 1116095.37,
		"hash": "3229eda1624607c85a0744dc6ff157ee818154b2ba5d07d323e2f2428e77c3f7"
	},
	{
		"id": "97f7e7a15606",
		"ts": "2026-08-02T19:17:05.074Z",
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
		"liquidityUsd": 24788656.63,
		"hash": "97f7e7a156061ee2fce5f0cd517142d23d2dc93cb364eacdaa8c6318317d2727"
	},
	{
		"id": "3a72b9811fbb",
		"ts": "2026-08-02T19:17:05.467Z",
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
		"liquidityUsd": 4429215.71,
		"hash": "3a72b9811fbbf2dfb625cbbc8348efa2636769e650ec900cb337b97dd7213d2d"
	},
	{
		"id": "81a875657dc3",
		"ts": "2026-08-02T19:17:05.776Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 899872.45,
		"hash": "81a875657dc3c17fe6d9fe6b6762a8d622d8a50674b7dcdfaa84476431127524"
	}
]
