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
	"updatedAt": "2026-08-17T03:47:28.726Z",
	"tokensScored": 11115,
	"verdictsIssued": 11115,
	"safe": 9679,
	"risky": 831,
	"likelyRug": 605,
	"ticks": 663
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "92ff5b92aa65",
		"ts": "2026-08-17T03:47:24.199Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111727024.59,
		"hash": "92ff5b92aa65eabf14d1ca10cab1ad9369aa9ce5c973a366f44798ac25ad4c83"
	},
	{
		"id": "2d6353be0e0c",
		"ts": "2026-08-17T03:47:24.633Z",
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
		"liquidityUsd": 17564342.62,
		"hash": "2d6353be0e0c22c5843f3814e5dd8ed799c3dd5ed51acfb55e42877688637442"
	},
	{
		"id": "6811273929dc",
		"ts": "2026-08-17T03:47:24.868Z",
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
		"liquidityUsd": 804937.44,
		"hash": "6811273929dc4226f94ee6ee62f62241785658569959c673a5d50e4da0c255c5"
	},
	{
		"id": "133a6e6b3a65",
		"ts": "2026-08-17T03:47:25.096Z",
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
		"liquidityUsd": 27033145.13,
		"hash": "133a6e6b3a65ef0ffa772e3ab0d11c40ea6b2ca65883db0f7855386103e152ed"
	},
	{
		"id": "a83c6bb14640",
		"ts": "2026-08-17T03:47:25.343Z",
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
		"liquidityUsd": 4176524.28,
		"hash": "a83c6bb146409e351090ae989dcf0d569e106dc9e86aa5fc1c901dc0aaf2e0e1"
	},
	{
		"id": "804a8cf68d94",
		"ts": "2026-08-17T03:47:25.579Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888345.83,
		"hash": "804a8cf68d948778589df5422200a228c9d72844bbe781291687a08ebd7402e2"
	},
	{
		"id": "ffc7085abefe",
		"ts": "2026-08-17T03:47:25.816Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6046471.79,
		"hash": "ffc7085abefe8989d63547702974530e9e30b6bc192b98f7c12bac8744f75426"
	},
	{
		"id": "52177255585f",
		"ts": "2026-08-17T03:47:26.050Z",
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
		"liquidityUsd": 3403390.67,
		"hash": "52177255585f6cb456ed73f2ca9b2e024907e899a6535fc71932714042dfe6f3"
	},
	{
		"id": "1f65d68a5e2b",
		"ts": "2026-08-17T03:47:26.289Z",
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
		"liquidityUsd": 50622.84,
		"hash": "1f65d68a5e2b6405f5c3a8155d82809c7adcb34e2a3f5c0cbff708cd53334e45"
	},
	{
		"id": "3684427da58a",
		"ts": "2026-08-17T03:47:26.553Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 75706.44,
		"hash": "3684427da58a52c59597a634b36d7ec7d59f402e9250388191acce4487136b7a"
	},
	{
		"id": "0f5e3a879690",
		"ts": "2026-08-17T03:47:26.775Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6042662.44,
		"hash": "0f5e3a879690cb53976f00c8d5cb57b56e162021f4aa43fe46c3e2ec0eae9e83"
	},
	{
		"id": "6e26621a998d",
		"ts": "2026-08-17T03:47:26.988Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1042243.44,
		"hash": "6e26621a998d49dab31ce8fc5fdf237e15d54f37c9d5e20fddfd6e9650e70f42"
	},
	{
		"id": "98d0e05c0569",
		"ts": "2026-08-17T03:47:27.206Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 270168.01,
		"hash": "98d0e05c056925435b0bd8879568e375a47d4414308b6c03dc567a552eee4cdd"
	},
	{
		"id": "a1966a952cfb",
		"ts": "2026-08-17T03:47:27.422Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2502363.56,
		"hash": "a1966a952cfbc4938927a249ff42956e9f90bc690739b5fd720397a6ad481f32"
	},
	{
		"id": "9d9b0269c30a",
		"ts": "2026-08-17T03:47:27.642Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 482999.63,
		"hash": "9d9b0269c30a2dc0581b4e591ebf82bc6bd739423455fb43b97cd5c20e728321"
	},
	{
		"id": "27e8c0b58e37",
		"ts": "2026-08-17T03:47:27.860Z",
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
		"liquidityUsd": 76234.86,
		"hash": "27e8c0b58e37513d111bdd3c6baad81a8b0bb2ca8163f826b0658b078d03e083"
	},
	{
		"id": "b36d625090f7",
		"ts": "2026-08-17T03:47:28.075Z",
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
		"liquidityUsd": 577254.22,
		"hash": "b36d625090f73e52fef0d314f370f86d261bbd8e16cb75cff60a40fea8c1dfca"
	},
	{
		"id": "6daa20fb471d",
		"ts": "2026-08-17T03:47:28.296Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 648288.37,
		"hash": "6daa20fb471d75dd0368009e8574190295c945ff6c13ca57d9571d6b38c5a18c"
	},
	{
		"id": "1fe4661fefab",
		"ts": "2026-08-17T03:47:28.509Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348252.79,
		"hash": "1fe4661fefab5101d38516e04fe8e42b364db94d235e88403fcd9e9d00a07666"
	},
	{
		"id": "a19a621f5271",
		"ts": "2026-08-17T03:47:28.726Z",
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
		"liquidityUsd": 895647.08,
		"hash": "a19a621f527127064132d82b81424d32f6b06cab5cd1102a45e964a63cab3c60"
	},
	{
		"id": "23598193efc7",
		"ts": "2026-08-17T02:55:57.655Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111975249.42,
		"hash": "23598193efc7b6d286a3c61e586dded237a843f9813ecbee58adc31b3e738b45"
	},
	{
		"id": "4273787751cb",
		"ts": "2026-08-17T02:55:58.136Z",
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
		"liquidityUsd": 17284627.93,
		"hash": "4273787751cbe495bebec96aebcdac70d01edca4a9768d1c93c9f595968c101d"
	},
	{
		"id": "6bab56e4635d",
		"ts": "2026-08-17T02:55:58.426Z",
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
		"liquidityUsd": 810392.21,
		"hash": "6bab56e4635d8ac3bfabb24c2bf5676809a8eef331ec44a9ce01a1ac6ad8d357"
	},
	{
		"id": "1040c839e3d3",
		"ts": "2026-08-17T02:55:58.714Z",
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
		"liquidityUsd": 26990821.43,
		"hash": "1040c839e3d30029f8d09af183b4cf84b414fa6eddba608deca19eb8de77c6f7"
	},
	{
		"id": "2d8e0a4001a8",
		"ts": "2026-08-17T02:55:59.009Z",
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
		"liquidityUsd": 4166242.37,
		"hash": "2d8e0a4001a8e8c555c76c4308894825d77802d9fa408001eede82dd04678bf9"
	},
	{
		"id": "0f1ce239aa89",
		"ts": "2026-08-17T02:55:59.289Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888345.83,
		"hash": "0f1ce239aa899ae74f82e030733a292a1e2d5bc4fdd8a1a280d85264ed2185af"
	},
	{
		"id": "a9ab74e9c588",
		"ts": "2026-08-17T02:55:59.566Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6043442.82,
		"hash": "a9ab74e9c588140aca94dbdfc1f992f70efefba10d36051a52d85726bdbe3e6e"
	},
	{
		"id": "60de93e54e56",
		"ts": "2026-08-17T02:55:59.887Z",
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
		"liquidityUsd": 3410948.03,
		"hash": "60de93e54e5601f7e222db652f433e6b52dc397e87e6a3014d7f3edd853ff524"
	},
	{
		"id": "b9861fa12ed7",
		"ts": "2026-08-17T02:56:00.183Z",
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
		"liquidityUsd": 51867.8,
		"hash": "b9861fa12ed7217803236e0138919622f4723bf3167a75e2207ba157e36e06a3"
	},
	{
		"id": "d42d835648d9",
		"ts": "2026-08-17T02:56:00.467Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 87582.46,
		"hash": "d42d835648d90bea9d0b49f5224d3aebe1b7e32cf6ad0a221f4caad3f5a6da9c"
	},
	{
		"id": "bf994654cfc5",
		"ts": "2026-08-17T02:56:00.863Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 6043442.82,
		"hash": "bf994654cfc5654f194ff0cd1fe72c07febcf8084cdb6802789dbc56412b798d"
	},
	{
		"id": "c082005b27df",
		"ts": "2026-08-17T02:56:01.186Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1046941.35,
		"hash": "c082005b27dfb69af8d2b493210db1fe3a62597cf90d12d274ff4ba13a029113"
	},
	{
		"id": "ab1b1ec2b721",
		"ts": "2026-08-17T02:56:01.590Z",
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
		"liquidityUsd": 270466.82,
		"hash": "ab1b1ec2b7211394e887b3160eb686328c0f457e95a137e53de4c02b73376626"
	},
	{
		"id": "d963246c1ccd",
		"ts": "2026-08-17T02:56:01.950Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2486451.41,
		"hash": "d963246c1ccd4a5d57270eb98b17f4dcef616ff567fb75e6aca9a6e11eadf96f"
	},
	{
		"id": "a9074c2f480e",
		"ts": "2026-08-17T02:56:02.277Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 74253.56,
		"hash": "a9074c2f480ef96b0d756ea9ce1907cbfa0d90154e33841e03f14c32c9ba9bf2"
	},
	{
		"id": "1c1e30f4146a",
		"ts": "2026-08-17T02:56:02.559Z",
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
		"liquidityUsd": 436647.58,
		"hash": "1c1e30f4146a911eadac39d724dae43ee650c55786b4f13962113d81f6830d70"
	},
	{
		"id": "796dad6e4d5f",
		"ts": "2026-08-17T02:56:02.860Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 582635.3,
		"hash": "796dad6e4d5f2267c41645977b98743d44dfdf80a7b0f33344747fc36f063468"
	},
	{
		"id": "04902440675e",
		"ts": "2026-08-17T02:56:03.138Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 344114.78,
		"hash": "04902440675e871d886b72e0f2fb8aa2c027a47702e57b8c7d5749f337f1b908"
	},
	{
		"id": "b08c640fb1c1",
		"ts": "2026-08-17T02:56:03.399Z",
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
		"liquidityUsd": 895541.47,
		"hash": "b08c640fb1c1080f746a7b02a4a7c15e97854364e480446d056d95d706fc350f"
	},
	{
		"id": "6c64e2db6c98",
		"ts": "2026-08-17T02:56:03.662Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 641488.99,
		"hash": "6c64e2db6c987df970a468eddc095c320321018ff5320e82b9d140fa8030530d"
	},
	{
		"id": "5d7f3dea6725",
		"ts": "2026-08-17T01:01:23.794Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111091512.95,
		"hash": "5d7f3dea672538e2a14e7140bb37be80d02b5ecc929a07aa2331a8bc0073af09"
	},
	{
		"id": "96e50342c461",
		"ts": "2026-08-17T01:01:24.217Z",
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
		"liquidityUsd": 16450473.33,
		"hash": "96e50342c4615f22cb65c955ede6fb1c9291fbb075eff6ec07745eaf341c8714"
	},
	{
		"id": "4e6a23718eac",
		"ts": "2026-08-17T01:01:24.450Z",
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
		"liquidityUsd": 803717.78,
		"hash": "4e6a23718eac58ed809e945bc16c2123037fc44e9ab7023cc5ae7da3d835829b"
	},
	{
		"id": "1a87457a0ce9",
		"ts": "2026-08-17T01:01:24.681Z",
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
		"liquidityUsd": 26785066.55,
		"hash": "1a87457a0ce955dc4fe4a705c12d7a012b76e898b2293503f844071c8b287d99"
	},
	{
		"id": "ed113859c2b3",
		"ts": "2026-08-17T01:01:24.909Z",
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
		"liquidityUsd": 4125102.59,
		"hash": "ed113859c2b34d42f499609307739fd6e6875dcae9422402594d1dec4b19a0bf"
	},
	{
		"id": "498239607826",
		"ts": "2026-08-17T01:01:25.137Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 878021.89,
		"hash": "498239607826d10ad67b4914e09ec0adec7512ed94aa65a729862503be990f5f"
	},
	{
		"id": "e79af0c978ca",
		"ts": "2026-08-17T01:01:25.369Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6163850.52,
		"hash": "e79af0c978ca84a8efe5c2a2a050e76304f0b5d5fca575c977103fa00652cbac"
	},
	{
		"id": "596cf4a13f6a",
		"ts": "2026-08-17T01:01:25.597Z",
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
		"liquidityUsd": 3372931.2,
		"hash": "596cf4a13f6a246bc8573259d11245906549c7de416f40cbbb2b6b9dedbf3c25"
	},
	{
		"id": "e49d25a29906",
		"ts": "2026-08-17T01:01:25.855Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 47740.33,
		"hash": "e49d25a2990638686e805b6fcd78e768bc74cad693a54322b19db2ed675f938a"
	},
	{
		"id": "facb4f57810a",
		"ts": "2026-08-17T01:01:26.103Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 91977.66,
		"hash": "facb4f57810a8e62c2bb28dff9ffb708cd73d955f5a6845b25ce8b110b6473ff"
	},
	{
		"id": "202fe9d65903",
		"ts": "2026-08-17T01:01:26.315Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 270329.57,
		"hash": "202fe9d6590387c567d52f0b265bd9ccb72868b26cf8f70762278e5d0f6fe0c9"
	},
	{
		"id": "66cbb6e982a5",
		"ts": "2026-08-17T01:01:26.527Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6163783.8,
		"hash": "66cbb6e982a5802cedd50d691a86ec606c5ee1140b20560e6a743a45db830169"
	},
	{
		"id": "5268da0e0cca",
		"ts": "2026-08-17T01:01:26.740Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1080166.59,
		"hash": "5268da0e0cca3fb5ac94934dcfc6dc72853320714234d9ab781afa1aec3ae6c3"
	},
	{
		"id": "96bc05f944e9",
		"ts": "2026-08-17T01:01:26.951Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2456265.44,
		"hash": "96bc05f944e97e99b005e9914c1df85971484933e194d2da996ff4986e7676c7"
	},
	{
		"id": "78ff187c795c",
		"ts": "2026-08-17T01:01:27.162Z",
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
		"liquidityUsd": 92933.23,
		"hash": "78ff187c795c2476be4dc3d74b41a55cb22476210adc091ec4cc5adcf913374c"
	},
	{
		"id": "f0c2e19d0fc5",
		"ts": "2026-08-17T01:01:27.372Z",
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
		"liquidityUsd": 584640.91,
		"hash": "f0c2e19d0fc51a695b8bb9d0baa63035c33ec66388dc099a01d5d5743679e623"
	},
	{
		"id": "289f18ef1451",
		"ts": "2026-08-17T01:01:27.583Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 562689.17,
		"hash": "289f18ef145166ba7273ecda154165a39106ba18b28578087f8df522098a54f2"
	},
	{
		"id": "843296f69553",
		"ts": "2026-08-17T01:01:27.795Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 345884.43,
		"hash": "843296f695532aac6f6b6e33aab47984e0c7e40d624bcde205413bf6c6cf980e"
	},
	{
		"id": "43ac6c82d63d",
		"ts": "2026-08-17T01:01:28.082Z",
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
		"liquidityUsd": 893065.39,
		"hash": "43ac6c82d63dbd3e97f3352c639d98e627f5c74abd04196b324b3330f57f9432"
	},
	{
		"id": "a6bdc9129801",
		"ts": "2026-08-17T01:01:28.297Z",
		"symbol": "DINO",
		"token": "0xb200000000000000000000245F3EEc9CB5522F01",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"low_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "a6bdc912980139b807d4ec67df84f67c9aa0bf483829d6dbb4812ddd3594a4b6"
	},
	{
		"id": "cb22a22d8955",
		"ts": "2026-08-16T23:15:36.189Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111092145.42,
		"hash": "cb22a22d895524809493d93781bf7e5ca8e2f886d03ceaab2b0a7aeafe2ad5c5"
	},
	{
		"id": "640b25cc3d81",
		"ts": "2026-08-16T23:15:36.539Z",
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
		"liquidityUsd": 17552429.19,
		"hash": "640b25cc3d813fb6d89781509e56cc6ca6684e3ba2aab35683ffd0829bca31c9"
	},
	{
		"id": "eb10e9def77f",
		"ts": "2026-08-16T23:15:36.880Z",
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
		"liquidityUsd": 804305.11,
		"hash": "eb10e9def77f7acb4c3530308bdb2349167fb79571cfe3937ccddd9bf5a071d7"
	},
	{
		"id": "0772475332a8",
		"ts": "2026-08-16T23:15:37.081Z",
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
		"liquidityUsd": 26771908.03,
		"hash": "0772475332a850acaad17b3f634fcdb4d2ff9aaa13aa907a7d7b17fbcd585de5"
	},
	{
		"id": "dc65f20e7637",
		"ts": "2026-08-16T23:15:37.274Z",
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
		"liquidityUsd": 4122221.54,
		"hash": "dc65f20e7637168b6e82d430b5a51de9a08b1459748bc3ca0432fea0d78ab9ec"
	},
	{
		"id": "287f8d66c578",
		"ts": "2026-08-16T23:15:37.468Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 875863.13,
		"hash": "287f8d66c5785bf936f053228ded73bb4c01e942700c4f2e6f9f4a54b74bd28e"
	},
	{
		"id": "dccf2c38c029",
		"ts": "2026-08-16T23:15:37.676Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6167707.27,
		"hash": "dccf2c38c029f449c9ca1a939f2b4fa7f9b1e38dfbf5f8608b6c33c152835849"
	},
	{
		"id": "d0ef7a59e3af",
		"ts": "2026-08-16T23:15:37.878Z",
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
		"liquidityUsd": 3366991.63,
		"hash": "d0ef7a59e3af7878c0438d0f90f755b227f36b6b85bba721a2847d76765f5068"
	},
	{
		"id": "343f7254b297",
		"ts": "2026-08-16T23:15:38.146Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 12343.17,
		"hash": "343f7254b2971e73aa9fc369a1efe79a58ce444bd081a4d4e599ff7b81d60500"
	},
	{
		"id": "542cd38b8202",
		"ts": "2026-08-16T23:15:38.341Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 90238.5,
		"hash": "542cd38b82021ae95ea37dc98d9c8c32ff4b89205a24dc07e513e65ca7fb1b83"
	},
	{
		"id": "f79570413ac7",
		"ts": "2026-08-16T23:15:38.526Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 273005.11,
		"hash": "f79570413ac79fcd5661676b36adf68c5234697155a0427244212f61aba1e17a"
	},
	{
		"id": "cd85d9d13a0e",
		"ts": "2026-08-16T23:15:38.716Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1022143.82,
		"hash": "cd85d9d13a0e14f89a3f4b6506f526ca2f3e79ce6ab65cbcba1c0fa34e5d7453"
	},
	{
		"id": "81785fc057bd",
		"ts": "2026-08-16T23:15:38.931Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6167707.33,
		"hash": "81785fc057bd86819418186fb49fd183839600587fdd6c970411947e1dcd41d1"
	},
	{
		"id": "bdb203db85d7",
		"ts": "2026-08-16T23:15:39.124Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2466077.54,
		"hash": "bdb203db85d7c31261a6aa831b0d0dec95221d259d46feab787ca69e87bc2f8f"
	},
	{
		"id": "580a9e83da04",
		"ts": "2026-08-16T23:15:39.344Z",
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
		"liquidityUsd": 120056.91,
		"hash": "580a9e83da04cca3dd554663ba36cee7664b0042c111ab6c7a453bccd7207d54"
	},
	{
		"id": "45913088627a",
		"ts": "2026-08-16T23:15:39.529Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 468909.9,
		"hash": "45913088627a84eb3feed9741a3960ca44b65ff06b51f69167614d5af18e1ef4"
	},
	{
		"id": "e27678b4051a",
		"ts": "2026-08-16T23:15:39.748Z",
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
		"liquidityUsd": 568785.86,
		"hash": "e27678b4051a42d3246b040eb8f9d6f4d22f6048882ce5ca926e5ed23c5cecda"
	},
	{
		"id": "2d66e314be5d",
		"ts": "2026-08-16T23:15:39.928Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 350948.02,
		"hash": "2d66e314be5dec1ce17061bc56427f203f4ea6ed391dfeafb886d6b6d22dc260"
	},
	{
		"id": "6ef78333eaa2",
		"ts": "2026-08-16T23:15:40.118Z",
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
		"liquidityUsd": 893999.01,
		"hash": "6ef78333eaa2fa0bb3e7f632a28bc63c384c0672fb04870bbaa958a71b8b53ca"
	},
	{
		"id": "60f17f9f78db",
		"ts": "2026-08-16T23:15:40.327Z",
		"symbol": "DINO",
		"token": "0xb200000000000000000000245F3EEc9CB5522F01",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"low_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "60f17f9f78db4fe51d6c62bb57aa22b025b322d7147b8692e9606d513d4d317c"
	},
	{
		"id": "f3edbdd469b7",
		"ts": "2026-08-16T22:16:11.688Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111090224.77,
		"hash": "f3edbdd469b7a330c60a3594e81710fda92de9160b8a1ee2abbdb1e8ae1450de"
	},
	{
		"id": "c126f35f5629",
		"ts": "2026-08-16T22:16:12.161Z",
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
		"liquidityUsd": 16489753.47,
		"hash": "c126f35f5629430c1ead5b7f5744b608b0b82e980ca4cc4c824522faf0e501c1"
	},
	{
		"id": "a98fdfee8b12",
		"ts": "2026-08-16T22:16:12.612Z",
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
		"liquidityUsd": 804432.73,
		"hash": "a98fdfee8b12ac2d4cca3446fbfded76b8d6df770e61505a94401b593af785b7"
	},
	{
		"id": "571ed2eb6d36",
		"ts": "2026-08-16T22:16:13.075Z",
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
		"liquidityUsd": 26701291.65,
		"hash": "571ed2eb6d36b4585591aa8a5ae846b00477f3d05dda6bec8debecab7520c353"
	},
	{
		"id": "06d51e085caa",
		"ts": "2026-08-16T22:16:13.311Z",
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
		"liquidityUsd": 4136727.22,
		"hash": "06d51e085caa43cad4f04841481eb75b0f7524647106864fb782f1fca208d6ba"
	},
	{
		"id": "1b145a0471ef",
		"ts": "2026-08-16T22:16:13.548Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 875863.83,
		"hash": "1b145a0471ef6117f77cd9454f4779aeda5332747d853f00f17750fb7412060c"
	},
	{
		"id": "3f69dbec3d0d",
		"ts": "2026-08-16T22:16:13.806Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6167509.23,
		"hash": "3f69dbec3d0d9b1bb62e0d04fea5eb44019c3a2cdffd796b36bc630a0ad8a160"
	},
	{
		"id": "d1b10739d0a2",
		"ts": "2026-08-16T22:16:14.046Z",
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
		"liquidityUsd": 3368247.67,
		"hash": "d1b10739d0a29668e1e69d9a347132407939831cb13e5f87941c31c321582b31"
	},
	{
		"id": "7687c3d05868",
		"ts": "2026-08-16T22:16:14.289Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 63069.02,
		"hash": "7687c3d05868adfd3c1122191c61d2fc9ed035de6b730bfa08c4e2f7dabfa558"
	},
	{
		"id": "68c01efa79ec",
		"ts": "2026-08-16T22:16:14.531Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 1235.08,
		"hash": "68c01efa79ec5665e81aa5dd64f1573aeef3ce50fb9c2c4271481491428c5eea"
	},
	{
		"id": "cdafa88282cb",
		"ts": "2026-08-16T22:16:14.746Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 274425.07,
		"hash": "cdafa88282cb2a6a6aeaf66b62b97d07a01c96ab93b37a4e9e7e1318f0b7cf57"
	},
	{
		"id": "b4e7af8661d5",
		"ts": "2026-08-16T22:16:14.964Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1006179.6,
		"hash": "b4e7af8661d5ded98ee77600279b4f69eeb213b1996ce58c1b187c2c3b5ef004"
	},
	{
		"id": "590869ebc21a",
		"ts": "2026-08-16T22:16:15.175Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6167509.23,
		"hash": "590869ebc21a73da24d85cf3974779813d9256c731057d2fc198bd5d999ece11"
	},
	{
		"id": "37be6e335466",
		"ts": "2026-08-16T22:16:15.394Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2461316.18,
		"hash": "37be6e33546636b6ff3fbfe91204accce5198c87be9a4b232aa00c880eb2a73a"
	},
	{
		"id": "e92fb0bfa466",
		"ts": "2026-08-16T22:16:15.607Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 294264.77,
		"hash": "e92fb0bfa4667bc990bb4a61eb02534ac71f40f16de67514bfe0b14d6b4ceddf"
	},
	{
		"id": "066f2c64df0b",
		"ts": "2026-08-16T22:16:15.826Z",
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
		"liquidityUsd": 77203.28,
		"hash": "066f2c64df0bee64c84ab9ebaf14f3527b610be73356d4dca2ef88f8677793c7"
	},
	{
		"id": "61000bd84c23",
		"ts": "2026-08-16T22:16:16.040Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 349845.49,
		"hash": "61000bd84c234c0ca9d8b8a223445da99e5a75fd19a67688861ca0b81ca96c46"
	},
	{
		"id": "1f1a41485346",
		"ts": "2026-08-16T22:16:16.258Z",
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
		"liquidityUsd": 574619.51,
		"hash": "1f1a414853465abada90401de90f99a83a8d834ebd87c3fcd393c56439f15516"
	},
	{
		"id": "71aca94590c0",
		"ts": "2026-08-16T22:16:16.497Z",
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
		"liquidityUsd": 893500.13,
		"hash": "71aca94590c0b3e7f9f06aa33090d95dd8569e25539da1e21a669a9f372a8d2c"
	},
	{
		"id": "590bc77df3bc",
		"ts": "2026-08-16T22:16:16.715Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 627380.87,
		"hash": "590bc77df3bc4678b6681e6a40e3011ad41f12a90c7d985a487892e3b75e425e"
	},
	{
		"id": "9103b5b0655e",
		"ts": "2026-08-16T21:15:30.361Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111482219.68,
		"hash": "9103b5b0655e10673708e3f63880c996fe8913a3534c049a5ba0ccf0d908ec2b"
	},
	{
		"id": "718c9f58fc5f",
		"ts": "2026-08-16T21:15:30.827Z",
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
		"liquidityUsd": 17060439.51,
		"hash": "718c9f58fc5f83b4e79820c9beb9536f7f1e63501f0d291e266c345a1c76b964"
	},
	{
		"id": "69bcaddfa213",
		"ts": "2026-08-16T21:15:31.084Z",
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
		"hash": "69bcaddfa213e00cb4e71a764a4f275b2f9d896d6a9b1b61da37155221b64bae"
	},
	{
		"id": "afe025b20032",
		"ts": "2026-08-16T21:15:31.334Z",
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
		"liquidityUsd": 26793472.45,
		"hash": "afe025b20032d30861e720210f4bca2c89b190642f38531321e7e72861b49595"
	},
	{
		"id": "60d2d9dd5fd3",
		"ts": "2026-08-16T21:15:31.585Z",
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
		"liquidityUsd": 4146703.11,
		"hash": "60d2d9dd5fd3a4e0fccf90f98fddca8b461aa89bba723630870d20dfaf9e331b"
	},
	{
		"id": "c72f415d0940",
		"ts": "2026-08-16T21:15:31.833Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 882779.09,
		"hash": "c72f415d0940faffde8230f82c20a549abb5d36fdb3e8dd0e7c8713d6e4f08c8"
	},
	{
		"id": "925b22e4c7ea",
		"ts": "2026-08-16T21:15:32.078Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6204940.58,
		"hash": "925b22e4c7ea21c790cc30d64851389fa1b7c7df16db9a2f8206e9bbc848cc16"
	},
	{
		"id": "0bb978ebd909",
		"ts": "2026-08-16T21:15:32.490Z",
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
		"liquidityUsd": 3379225.99,
		"hash": "0bb978ebd9096d1e64022402ca2e04cf1c09e8de0a20f4472b0d98593307bf1d"
	},
	{
		"id": "6622f2fd0d31",
		"ts": "2026-08-16T21:15:32.740Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 85340.67,
		"hash": "6622f2fd0d31f49ebe243182fe5664de79966630e907005b236fa3a8a9f22a8d"
	},
	{
		"id": "5b3afbe39a6c",
		"ts": "2026-08-16T21:15:32.972Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 79.74,
		"hash": "5b3afbe39a6c1fa9fbef6e7e418844e4fef97ddf0bb6ba3c03c1964c61fc7aea"
	},
	{
		"id": "6e29eb0237dd",
		"ts": "2026-08-16T21:15:33.205Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 273521.95,
		"hash": "6e29eb0237dd63efb0ab105a396f1177de31f5439f65de60e10f09fa98812c9e"
	},
	{
		"id": "ce03ba6162de",
		"ts": "2026-08-16T21:15:33.428Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1029910.13,
		"hash": "ce03ba6162de89e42e424d0ba3c7a564278f8eba60ab07b30ce00b5786fec424"
	},
	{
		"id": "b191d0e0907f",
		"ts": "2026-08-16T21:15:33.661Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6197675.24,
		"hash": "b191d0e0907fbcedfa6f7985b2cad18c66ec5767a11488d2d16148f6a8d6d3c0"
	},
	{
		"id": "dd873521a89e",
		"ts": "2026-08-16T21:15:33.878Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2476282.12,
		"hash": "dd873521a89ea2f190976938896efeeee0e2082ac1b40931334a8969d4b34895"
	},
	{
		"id": "dba5e365ed88",
		"ts": "2026-08-16T21:15:34.121Z",
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
		"liquidityUsd": 69857.12,
		"hash": "dba5e365ed886818323e8cc3bf94033dcbe77624e560ebd7a12885ef3ded19eb"
	},
	{
		"id": "ff523ae32d96",
		"ts": "2026-08-16T21:15:34.345Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 293376.85,
		"hash": "ff523ae32d960b218ab4322f44ade69afa1f33fb728b9d6f80cbc6191feb7383"
	},
	{
		"id": "0c0457617637",
		"ts": "2026-08-16T21:15:34.613Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 351824.84,
		"hash": "0c045761763714672e929d4071a342a288c3e12e67507a0e664db5571af30b9f"
	},
	{
		"id": "ae645359fd52",
		"ts": "2026-08-16T21:15:34.833Z",
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
		"liquidityUsd": 579081.96,
		"hash": "ae645359fd52d67e9c93ad40fb32a1dbdeea624f0d6ae538b1095f4b8f54ac45"
	},
	{
		"id": "94b2ab37ddfd",
		"ts": "2026-08-16T21:15:35.072Z",
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
		"liquidityUsd": 895529.85,
		"hash": "94b2ab37ddfd2ca9b886d2af13f8cc5938c47b2a30a204a9ea623569e0786547"
	},
	{
		"id": "bffc7f3b5971",
		"ts": "2026-08-16T21:15:35.288Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 627463.98,
		"hash": "bffc7f3b59716023d02c9740e07a59cf055e594ef4ac241f252d3d5fbd2406fd"
	},
	{
		"id": "c25cc079b205",
		"ts": "2026-08-16T20:16:44.803Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111503346.5,
		"hash": "c25cc079b205a59899ed0204a92dc44250acfdf0266d723a867bda835f98cc93"
	},
	{
		"id": "0b954572663d",
		"ts": "2026-08-16T20:16:45.132Z",
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
		"liquidityUsd": 17013506.03,
		"hash": "0b954572663d70329a320064df9571544f468f0a252082dc140fbb23dc6f3f26"
	},
	{
		"id": "c53d437d4734",
		"ts": "2026-08-16T20:16:45.320Z",
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
		"hash": "c53d437d4734e9a2b0e73fde0daf50f31254940cc9b3aec84034e1df44364f42"
	},
	{
		"id": "d62b13dcfe7a",
		"ts": "2026-08-16T20:16:45.517Z",
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
		"liquidityUsd": 26878911.17,
		"hash": "d62b13dcfe7a82f36b350d8d7ef40e8285e9b4c5f9f53f480a86e3479cf61542"
	},
	{
		"id": "0bcfb9a25f10",
		"ts": "2026-08-16T20:16:45.700Z",
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
		"liquidityUsd": 4160385.02,
		"hash": "0bcfb9a25f10ac8274998846d14d4887b756e47eacf5f088bf1088bbfa54738a"
	},
	{
		"id": "17474c8fe42e",
		"ts": "2026-08-16T20:16:46.001Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889238.88,
		"hash": "17474c8fe42e0c99ac97deafc01c25b192afe37aed67b2f99782f059186507a6"
	},
	{
		"id": "0adb0866601b",
		"ts": "2026-08-16T20:16:46.183Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6172997.74,
		"hash": "0adb0866601b4b299617431fbc0827ad5983bf713b3381c622d44da190e7fdcb"
	},
	{
		"id": "78c6ce4eb37f",
		"ts": "2026-08-16T20:16:46.405Z",
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
		"liquidityUsd": 3645319.48,
		"hash": "78c6ce4eb37f6e8251626931f60fc8861dc7aa308d5d88d1bebaca274eefefc1"
	},
	{
		"id": "b6d07102ec01",
		"ts": "2026-08-16T20:16:46.583Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 106425.37,
		"hash": "b6d07102ec018a7442c956fd235a7b348cf61ae982191684395938ebbd0eb191"
	},
	{
		"id": "fc59f8dc3e8c",
		"ts": "2026-08-16T20:16:46.773Z",
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
		"liquidityUsd": 43.7,
		"hash": "fc59f8dc3e8c2ef83e1b9d2c2b8ea4d9c397bd57d6fb0dc3df8ab420ddddca14"
	},
	{
		"id": "0147d9012595",
		"ts": "2026-08-16T20:16:46.960Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 274254.21,
		"hash": "0147d9012595ec46ae110381acf0cc5d9bb1c1cac5b81cda065db25531ea1340"
	},
	{
		"id": "3225ee2ba44b",
		"ts": "2026-08-16T20:16:47.175Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1031318.43,
		"hash": "3225ee2ba44bd5fee85d1c451b9dee62946cfb5e3a70ad40d91019dc02771831"
	},
	{
		"id": "e127c57aa210",
		"ts": "2026-08-16T20:16:47.425Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6173285.4,
		"hash": "e127c57aa210654a3235d96cd25d84e1f3747b69c1bcb037704dd61130c5b8c3"
	},
	{
		"id": "985b5d173f62",
		"ts": "2026-08-16T20:16:47.610Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2468711.84,
		"hash": "985b5d173f622496659a471f40a561bc68ca04c66a4fe36ac1b67dc957423215"
	},
	{
		"id": "e659d86ff09c",
		"ts": "2026-08-16T20:16:47.801Z",
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
		"liquidityUsd": 64018.58,
		"hash": "e659d86ff09ca9b96ef86881dba30149a2d00cb3a206ea8fbe73d5c595953edc"
	},
	{
		"id": "994222e71cc7",
		"ts": "2026-08-16T20:16:47.987Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 350925.61,
		"hash": "994222e71cc76a0c4eed04529e535d7d66cdf16aec3be5060804fca5bc436653"
	},
	{
		"id": "3c05bc6bd24f",
		"ts": "2026-08-16T20:16:48.178Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 241547.32,
		"hash": "3c05bc6bd24f3fe2282ad11cb0413c7c483b220ffea848057143c3c0859f4566"
	},
	{
		"id": "ec9ab224a5db",
		"ts": "2026-08-16T20:16:48.353Z",
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
		"liquidityUsd": 895396.88,
		"hash": "ec9ab224a5dbb1c1aaed9348c82e80065d039a8d24d16f5d28a6016553bc041e"
	},
	{
		"id": "588761628bda",
		"ts": "2026-08-16T20:16:48.556Z",
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
		"liquidityUsd": 603784.97,
		"hash": "588761628bdad9ce09e5c7817180d0b272fa3d283fc56ed164921023e03d2421"
	},
	{
		"id": "7f0604f42f50",
		"ts": "2026-08-16T20:16:48.731Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 632435.07,
		"hash": "7f0604f42f50e90865f53dd8c21a1074dc0080086663c684ab5e557954452286"
	},
	{
		"id": "feb2bd33757f",
		"ts": "2026-08-16T19:18:13.638Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111502951.75,
		"hash": "feb2bd33757f4b3ffa85beb140fff231e3656e67112395fc9792c8fef5e6fee4"
	},
	{
		"id": "619d2bfb7d47",
		"ts": "2026-08-16T19:18:13.948Z",
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
		"liquidityUsd": 17019207.87,
		"hash": "619d2bfb7d47bb025c09f19a8d844c0e709a2c6e842a52e6f965c80541fcbcf2"
	},
	{
		"id": "07a588d62234",
		"ts": "2026-08-16T19:18:14.158Z",
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
		"hash": "07a588d62234c5bade72a3df085164c5d96d6b9a95199fc9f8cc151e736c1484"
	},
	{
		"id": "08a540bf2001",
		"ts": "2026-08-16T19:18:14.564Z",
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
		"liquidityUsd": 26840138.61,
		"hash": "08a540bf2001bfb1a25ddb718fcdc06247bb3b533560eafc7e0141c9ad3dd467"
	},
	{
		"id": "8ae470759463",
		"ts": "2026-08-16T19:18:14.768Z",
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
		"liquidityUsd": 4160385.02,
		"hash": "8ae4707594631ffec229e99e5a35fe9aed17afea1f1d863d5fee989e8a7fca15"
	},
	{
		"id": "7a986a51e993",
		"ts": "2026-08-16T19:18:14.977Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888375.78,
		"hash": "7a986a51e99351aa887f8958c8406a578ca99806c3f945d48588ae06944417dc"
	},
	{
		"id": "a9f60178d3bf",
		"ts": "2026-08-16T19:18:15.195Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6199365.94,
		"hash": "a9f60178d3bf37cf7484c9a359da24a707d5d11877430226c8cedc32e4162ef0"
	},
	{
		"id": "d4c556e3270c",
		"ts": "2026-08-16T19:18:15.395Z",
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
		"liquidityUsd": 3646440.21,
		"hash": "d4c556e3270cc6770122c6a33db333bb66973f98bf511bc17d7d957f14bdfc0f"
	},
	{
		"id": "8510abc71137",
		"ts": "2026-08-16T19:18:15.595Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 97903.77,
		"hash": "8510abc711374167693bca234a354889d062c6c51df577f665469b7e4d32c81d"
	},
	{
		"id": "f90e7db3a26f",
		"ts": "2026-08-16T19:18:15.945Z",
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
		"liquidityUsd": 48.28,
		"hash": "f90e7db3a26f7b98a3fb57e408b95b949606cec9f48b7176b2a7e337d759242d"
	},
	{
		"id": "4aaa9100fd1b",
		"ts": "2026-08-16T19:18:16.150Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 270897.68,
		"hash": "4aaa9100fd1bba8c32d8b46516e434568c5141993aa1c6c3a7609eae1afb56b5"
	},
	{
		"id": "c8aea9e62a24",
		"ts": "2026-08-16T19:18:16.334Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6206206.01,
		"hash": "c8aea9e62a24d9fbe3c75ea17c9f1cad1eb61cea9d8b68271a52f905f106d284"
	},
	{
		"id": "b65d9e49b62a",
		"ts": "2026-08-16T19:18:16.540Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1021229.92,
		"hash": "b65d9e49b62a025f1aea1e2e5cd13e108af76da576f36c485299843c550b9985"
	},
	{
		"id": "c761a2e53295",
		"ts": "2026-08-16T19:18:16.727Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2465420.4,
		"hash": "c761a2e532956570665718054e33ca8f539bb04ef2bbdf3824b8aebf17652796"
	},
	{
		"id": "e6fb7558768a",
		"ts": "2026-08-16T19:18:16.924Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245904.63,
		"hash": "e6fb7558768afeb6eb750e94124df7ce6ed9fbac99137b178a6effdb64238fde"
	},
	{
		"id": "ae59af45fef4",
		"ts": "2026-08-16T19:18:17.110Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 349007.14,
		"hash": "ae59af45fef4bf649373a746f11c327284915eb23e6dcf7f49edcff77f6c041e"
	},
	{
		"id": "9f7c956c7578",
		"ts": "2026-08-16T19:18:17.313Z",
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
		"liquidityUsd": 69974.49,
		"hash": "9f7c956c7578b975b0b40fb9e763ceb163b93cb875fc893c19732ed10406c83d"
	},
	{
		"id": "47eb1a3eb65c",
		"ts": "2026-08-16T19:18:17.498Z",
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
		"liquidityUsd": 895704.36,
		"hash": "47eb1a3eb65cffdb635758dbce771c30862f8345d4650f95136dfed273071c0a"
	},
	{
		"id": "89e0de5dcc93",
		"ts": "2026-08-16T19:18:17.701Z",
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
		"liquidityUsd": 602254.65,
		"hash": "89e0de5dcc931dae9c4d27bcb82930bfca8f3aba2b7ff2b5edbd4dcef7b90bc6"
	},
	{
		"id": "f108654842c1",
		"ts": "2026-08-16T19:18:17.888Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 632632.8,
		"hash": "f108654842c1c6f68fe68b5fd2aad1a723241ee041c41e955ef1447ec2252a35"
	},
	{
		"id": "aa383210754d",
		"ts": "2026-08-16T18:22:20.072Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111502563.52,
		"hash": "aa383210754d6ffd9e12f6d31e5232067da408e3861c0eb361aa74eb25fe2e4e"
	},
	{
		"id": "504417ddae4d",
		"ts": "2026-08-16T18:22:20.447Z",
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
		"liquidityUsd": 17745730.93,
		"hash": "504417ddae4d8a4438d07e2307b45fdfa3cdfaa344332a6d7b4794f2dc076b36"
	},
	{
		"id": "94475f958f19",
		"ts": "2026-08-16T18:22:20.678Z",
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
		"hash": "94475f958f1958f9ee5a4b50e23fbb2a134691b5cd41914e891e533e709ab82b"
	},
	{
		"id": "fd08dd6d9346",
		"ts": "2026-08-16T18:22:20.869Z",
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
		"liquidityUsd": 26831997.97,
		"hash": "fd08dd6d93461ff2ff927331d4af34fb488ab29d313cbb05e8c7f398b9c3096a"
	},
	{
		"id": "a7c9a9c3ac62",
		"ts": "2026-08-16T18:22:21.068Z",
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
		"liquidityUsd": 4160376.27,
		"hash": "a7c9a9c3ac629fa9ae6146c664fbf735894fc9d146c9694d8d130758f9841e02"
	},
	{
		"id": "8839b2507a5a",
		"ts": "2026-08-16T18:22:21.261Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888460.6,
		"hash": "8839b2507a5ab862b87941d33341791945bf0e18d4b40fa97f1e65b2a9b2e628"
	},
	{
		"id": "f6b579dc61c4",
		"ts": "2026-08-16T18:22:21.462Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6160292.11,
		"hash": "f6b579dc61c4c8ae9e64dfca3533dcaa5adc481f4f9666c809d1cd40387424a9"
	},
	{
		"id": "a54daff1b852",
		"ts": "2026-08-16T18:22:21.667Z",
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
		"liquidityUsd": 3645009.97,
		"hash": "a54daff1b8524bc21df38aa76a40967d3d6dea5e7c4cb7a26ef9a5f64438e567"
	},
	{
		"id": "70409454c588",
		"ts": "2026-08-16T18:22:21.871Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 114953.31,
		"hash": "70409454c58808588e938b104006447a6b9add406d8fe2d1d0708bc889083ce3"
	},
	{
		"id": "45a6250143ea",
		"ts": "2026-08-16T18:22:22.052Z",
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
		"liquidityUsd": 56.7,
		"hash": "45a6250143ea2e6ed163bf5e8c5cbb8a8d21e501c99e18c03d458c6ae9933770"
	},
	{
		"id": "086c0c31e089",
		"ts": "2026-08-16T18:22:22.245Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 273396.89,
		"hash": "086c0c31e089a699bac7180417d928a2dc97bc77b95c640f55c0cc152abbc11c"
	},
	{
		"id": "61996e6d9a11",
		"ts": "2026-08-16T18:22:22.433Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6160292.11,
		"hash": "61996e6d9a1125043472da899d693355503874223ffe3fbdabb2e85e97d69f34"
	},
	{
		"id": "e444015df0e0",
		"ts": "2026-08-16T18:22:22.635Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1026097.09,
		"hash": "e444015df0e028263b3a2907fdfc9562cca619f65f2df517a4f842e3a105ac17"
	},
	{
		"id": "5a3da7206281",
		"ts": "2026-08-16T18:22:22.822Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2475247.8,
		"hash": "5a3da720628178e375b2543090e761a137bea67cdaa480317e403e4cb50bf6fe"
	},
	{
		"id": "ad6470b54284",
		"ts": "2026-08-16T18:22:23.026Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 350795.66,
		"hash": "ad6470b54284a9b4b94e7effc3ad6dc0d927e6b1194355c09b85aaadc9cc301c"
	},
	{
		"id": "97032d47d1fc",
		"ts": "2026-08-16T18:22:23.203Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261609.94,
		"hash": "97032d47d1fc346c1a1c4d4fffe65821f2244ece5d16d892114ba5f54dce18b1"
	},
	{
		"id": "bcb08a35d2ab",
		"ts": "2026-08-16T18:22:23.414Z",
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
		"liquidityUsd": 894803.82,
		"hash": "bcb08a35d2ab9a85bccca21d5c8ab672ffb8a1cd1c3c779bbe5b72b68a85dabe"
	},
	{
		"id": "5ef7bba76473",
		"ts": "2026-08-16T18:22:23.621Z",
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
		"liquidityUsd": 86514.35,
		"hash": "5ef7bba76473680baf9dbad6be0104d852f1a1a3ba7a37597d5789ab82f9198d"
	},
	{
		"id": "ea696da72158",
		"ts": "2026-08-16T18:22:23.829Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9475561.22,
		"hash": "ea696da72158203698676ca10245fcecf9168e33285bd799aeacb0d10c058113"
	},
	{
		"id": "231f9aeaf359",
		"ts": "2026-08-16T18:22:24.022Z",
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
		"liquidityUsd": 590677.83,
		"hash": "231f9aeaf359744e476171eb1592f16c8f165e366df328a2b4af1a25535a2da5"
	},
	{
		"id": "d656398a98c6",
		"ts": "2026-08-16T17:15:42.533Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111503546.92,
		"hash": "d656398a98c6eafc98aee7171b7b1d0d14e5c6704e7deec7363637f3efa4a09d"
	},
	{
		"id": "4e21773c6f7b",
		"ts": "2026-08-16T17:15:42.733Z",
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
		"liquidityUsd": 17083126.4,
		"hash": "4e21773c6f7b91727303e17ced81a28083fec2f754231e2152c7b14429c876bd"
	},
	{
		"id": "4dcb3036269c",
		"ts": "2026-08-16T17:15:42.928Z",
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
		"hash": "4dcb3036269c44be6733e741b9936d2da6006473ce2185ca46c237ac820768b1"
	},
	{
		"id": "92153ec44f16",
		"ts": "2026-08-16T17:15:43.123Z",
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
		"liquidityUsd": 26845175.72,
		"hash": "92153ec44f166d513bd1395ffa060cbfa8846056ea02d780f412010d6b2c39e8"
	},
	{
		"id": "8fd6eb2061fa",
		"ts": "2026-08-16T17:15:43.321Z",
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
		"liquidityUsd": 4165934.22,
		"hash": "8fd6eb2061fa644f0b0d0005d32d7a5dc7878e33c4d1e8e7c8f76f625d4341fa"
	},
	{
		"id": "786cd4684fc5",
		"ts": "2026-08-16T17:15:43.514Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888460.6,
		"hash": "786cd4684fc52e450d30a468f35091908c4ff92eb281fa86fb3a203b6f02e534"
	},
	{
		"id": "ac040fcb5373",
		"ts": "2026-08-16T17:15:43.708Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5990185.09,
		"hash": "ac040fcb53737fd113a1c622c2a72f3722f4acc558080da442cc600fafe102f5"
	},
	{
		"id": "94afe4cd4ccf",
		"ts": "2026-08-16T17:15:43.908Z",
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
		"liquidityUsd": 3649579.85,
		"hash": "94afe4cd4ccf00bfc9e22c6fcc84a1b7d2ddd1435352c872107be0991fb091be"
	},
	{
		"id": "abf3b3441462",
		"ts": "2026-08-16T17:15:44.281Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 75009.91,
		"hash": "abf3b3441462c6dd5148084faadad04340166fac5eb9dae6008c9783f9198709"
	},
	{
		"id": "1c3e8b42f3fb",
		"ts": "2026-08-16T17:15:44.473Z",
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
		"liquidityUsd": 267991.34,
		"hash": "1c3e8b42f3fb923b18bebe1ffc6cfcdf0c8c3a82454a28eaf3f20d4b00395dd9"
	},
	{
		"id": "6659680f62d9",
		"ts": "2026-08-16T17:15:44.653Z",
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
		"liquidityUsd": 9.15,
		"hash": "6659680f62d906f7e855f0a4a375e29fb41e17ecbf331755ffa1da55cf266bfe"
	},
	{
		"id": "230d03fba534",
		"ts": "2026-08-16T17:15:44.831Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2501487.92,
		"hash": "230d03fba534d4afba497ad47cd9769dd481abe7e824ce0ab4d8ba086ac9ea95"
	},
	{
		"id": "1d6e8425e0bd",
		"ts": "2026-08-16T17:15:45.014Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5990185.09,
		"hash": "1d6e8425e0bd60d05e038ea66eb29ad2b8aa7ca04b1509f49699742622f1bdeb"
	},
	{
		"id": "9c8c8cd23fbd",
		"ts": "2026-08-16T17:15:45.192Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1026254.72,
		"hash": "9c8c8cd23fbdbba134647a9c7af6ea5600ed3fa1e9b505250d59abfba619ee89"
	},
	{
		"id": "ff2992a79e14",
		"ts": "2026-08-16T17:15:45.371Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260251.3,
		"hash": "ff2992a79e14f0c6b6ed96414f567486de227135ae06a171bf96d85f237ec79c"
	},
	{
		"id": "80c7abc2adbc",
		"ts": "2026-08-16T17:15:45.553Z",
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
		"liquidityUsd": 895263.8,
		"hash": "80c7abc2adbc4c1d957ddaebc075edc0986d3375fc204a185de9ca333a150364"
	},
	{
		"id": "6015bc413e93",
		"ts": "2026-08-16T17:15:45.735Z",
		"symbol": "FUN",
		"token": "0x16EE7ecAc70d1028E7712751E2Ee6BA808a7dd92",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 349199.4,
		"hash": "6015bc413e935e38f7c74668382c7f26d4f58cf54e9c2dcb3595fa91d030db5f"
	},
	{
		"id": "5ba07ee99f80",
		"ts": "2026-08-16T17:15:45.918Z",
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
		"liquidityUsd": 68339.37,
		"hash": "5ba07ee99f800cf62ec9e5c5ad82053fb0e29092ec3de0d2c8d766ed232a98fd"
	},
	{
		"id": "8ede86f9c6d1",
		"ts": "2026-08-16T17:15:46.098Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9486186.76,
		"hash": "8ede86f9c6d1590c9012d1e330574e7a7b60fc8c4244c7f98b8051a354480e29"
	},
	{
		"id": "b27700b98691",
		"ts": "2026-08-16T17:15:46.281Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 624095.67,
		"hash": "b27700b986918ae84dc7a6861e92c60131b380767905959d2680c00d6ed46260"
	}
]
