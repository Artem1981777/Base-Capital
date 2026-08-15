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
	"updatedAt": "2026-08-15T22:17:04.292Z",
	"tokensScored": 10590,
	"verdictsIssued": 10590,
	"safe": 9219,
	"risky": 800,
	"likelyRug": 571,
	"ticks": 636
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "150214941c52",
		"ts": "2026-08-15T22:17:00.491Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111401719.03,
		"hash": "150214941c52df470890d33fbbab24ecd83a1dee127256c1296168a81ac31bf3"
	},
	{
		"id": "187c8b3e5c1a",
		"ts": "2026-08-15T22:17:00.699Z",
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
		"liquidityUsd": 17098732.39,
		"hash": "187c8b3e5c1aba55f66764d63a9990f75f30cd83236a1a222685fe6fb4d08b52"
	},
	{
		"id": "295640bb4e58",
		"ts": "2026-08-15T22:17:01.005Z",
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
		"liquidityUsd": 813596.19,
		"hash": "295640bb4e5848289392bcc170b38f7ca9a713be2a9e31ad3d0931b0623ce990"
	},
	{
		"id": "4aebdf77ac3f",
		"ts": "2026-08-15T22:17:01.203Z",
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
		"liquidityUsd": 26638990.07,
		"hash": "4aebdf77ac3f6aa25b2e285c35b79a0621bae46d7804dd623bbc0b308ca80629"
	},
	{
		"id": "9d999d7605dc",
		"ts": "2026-08-15T22:17:01.435Z",
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
		"liquidityUsd": 4168311.94,
		"hash": "9d999d7605dc620dc3fa931b0d105e43a64f4827fd38d0b5e0aaeddbd84fc4cc"
	},
	{
		"id": "de1da093abdd",
		"ts": "2026-08-15T22:17:01.659Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896981.25,
		"hash": "de1da093abddc88c0ffa814fa8fe5d9286ebe65c132accc29e489dbea910558b"
	},
	{
		"id": "1ceaf5e9147f",
		"ts": "2026-08-15T22:17:01.888Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26638990.07,
		"hash": "1ceaf5e9147f4e5b097c7de1344e1f13260c01ef9f2ed4e3d6024d591c9c471e"
	},
	{
		"id": "9b9bd20c133c",
		"ts": "2026-08-15T22:17:02.087Z",
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
		"liquidityUsd": 4059059.17,
		"hash": "9b9bd20c133c2cdc52c9f03736d2b5bd55c3056b5b8f374e506631e4a02b9c38"
	},
	{
		"id": "0821f6a626e0",
		"ts": "2026-08-15T22:17:02.325Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2552491.52,
		"hash": "0821f6a626e0f8deb06246312898441efa1cc0926524a162ea3e6294ea0be5e9"
	},
	{
		"id": "d1efe9abba24",
		"ts": "2026-08-15T22:17:02.530Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5159797.71,
		"hash": "d1efe9abba24912b9b6b55c81f7122910f5ce95c7b9988d46d6a0740ef5264ff"
	},
	{
		"id": "f0b5cfe7f2a2",
		"ts": "2026-08-15T22:17:02.716Z",
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
		"liquidityUsd": 893702.66,
		"hash": "f0b5cfe7f2a296d3562760c0b5573fe40cd26baf41f3e8312498e8c32fe6a559"
	},
	{
		"id": "fde41a81b613",
		"ts": "2026-08-15T22:17:02.927Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 278081.21,
		"hash": "fde41a81b6136fb3a945205575f9087161bc74fdf19749c13e9a2194d01751f3"
	},
	{
		"id": "d7505d6f8336",
		"ts": "2026-08-15T22:17:03.105Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 128250.84,
		"hash": "d7505d6f8336e9771aa2c3f9af61fe12e4a3512bdad7e1730a4d1762f23f6b39"
	},
	{
		"id": "bdb0df01d3bb",
		"ts": "2026-08-15T22:17:03.298Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "bdb0df01d3bb9aae26bb2034a8b29b92fde356ff02d7a2543d1dd1f24b5464fa"
	},
	{
		"id": "ff821895ca68",
		"ts": "2026-08-15T22:17:03.486Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9507783.14,
		"hash": "ff821895ca68e550ceb70f40ef7d33793ac1a44c99c8e06b9ce0cdb080a3e8df"
	},
	{
		"id": "620a93cbe80f",
		"ts": "2026-08-15T22:17:03.704Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 384019.97,
		"hash": "620a93cbe80f491ba0b21a704d144db534ae43eca1b27fbd5d729b06d59e0b81"
	},
	{
		"id": "e44e9ed65f26",
		"ts": "2026-08-15T22:17:03.907Z",
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
		"liquidityUsd": 643401.56,
		"hash": "e44e9ed65f261d499ab5624351ff5c73268330029cc94de8ed7c94c6673cf1b7"
	},
	{
		"id": "9f6af03b50dd",
		"ts": "2026-08-15T22:17:04.106Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 628580.25,
		"hash": "9f6af03b50dd3fed70cf8b8224ce9956e7cc5ab4866060d0cde171a1816a814f"
	},
	{
		"id": "53139de393fd",
		"ts": "2026-08-15T22:17:04.292Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1483983.71,
		"hash": "53139de393fd374a738643a4167937bb3b98a051a299441f9b610bc05f84d9d3"
	},
	{
		"id": "fd3caf00a089",
		"ts": "2026-08-15T21:16:59.964Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111423145.41,
		"hash": "fd3caf00a089a55b0e0aa355898ef70b62a0792a6affc21126c7f3488401605d"
	},
	{
		"id": "9a96b748106b",
		"ts": "2026-08-15T21:17:00.666Z",
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
		"liquidityUsd": 15910190.58,
		"hash": "9a96b748106b426c7931f6c10d468d4b7b8a7fbc49774974001c9b1ac3ceabf9"
	},
	{
		"id": "159b66e87fe6",
		"ts": "2026-08-15T21:17:01.325Z",
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
		"liquidityUsd": 813220.62,
		"hash": "159b66e87fe6fa336a197dc9a358285b8c94bb4769bd740d20d218c59338a175"
	},
	{
		"id": "6df532be9ee1",
		"ts": "2026-08-15T21:17:01.750Z",
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
		"liquidityUsd": 26630897.09,
		"hash": "6df532be9ee1cd559e45969f57ba519f75ac60819a155cc617ae52210a6bd564"
	},
	{
		"id": "d23d6b630093",
		"ts": "2026-08-15T21:17:02.192Z",
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
		"liquidityUsd": 4167911.81,
		"hash": "d23d6b630093c503501a694e830efa555535bceba4d83f94594b225d41cb08ba"
	},
	{
		"id": "cefa723440ef",
		"ts": "2026-08-15T21:17:02.470Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896981.25,
		"hash": "cefa723440eff5ef1fe73aadbc698fc001ba1477785732395654c7d25deab0c6"
	},
	{
		"id": "c705ff2a211a",
		"ts": "2026-08-15T21:17:02.770Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26630897.09,
		"hash": "c705ff2a211a86860f7ff64b05ab7aa799eecd97e438df5ae222eb99672998c0"
	},
	{
		"id": "19606219f5f7",
		"ts": "2026-08-15T21:17:03.002Z",
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
		"liquidityUsd": 4056029.9,
		"hash": "19606219f5f7785496dc6ef756fd554d51a42276c381dd4320a26c4e818ef65e"
	},
	{
		"id": "bedb08c286f2",
		"ts": "2026-08-15T21:17:03.298Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2550211.5,
		"hash": "bedb08c286f2b22e6964a99b000e03c4d243fc37b2b0bcb93de08dfc27e08f6f"
	},
	{
		"id": "e190d095dfa4",
		"ts": "2026-08-15T21:17:03.530Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5324418.78,
		"hash": "e190d095dfa4fd0c058896183dcac3788d5986feb01751c8f1ab6ee845ea520a"
	},
	{
		"id": "2abf3e0ad933",
		"ts": "2026-08-15T21:17:03.791Z",
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
		"liquidityUsd": 892765.61,
		"hash": "2abf3e0ad9333b8522150acc28e8257370694ab51299aaf313053cb7eddf38cf"
	},
	{
		"id": "b81d1544caf0",
		"ts": "2026-08-15T21:17:04.007Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 273245.01,
		"hash": "b81d1544caf0bf0c4a9d2f479619f2f661cc0fc36c6a3e93cf3bdaeae0840742"
	},
	{
		"id": "4cd006fdb7dd",
		"ts": "2026-08-15T21:17:04.221Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "4cd006fdb7dde31d8884f1988962fc6801075b72d3daa00a093e0b2f04c75489"
	},
	{
		"id": "757a59191191",
		"ts": "2026-08-15T21:17:04.437Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9509372.51,
		"hash": "757a591911918fbddeb3704657ed0850762ee52c0180464d3d19dc4d63fe907c"
	},
	{
		"id": "501aedaf1927",
		"ts": "2026-08-15T21:17:04.654Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 384438.23,
		"hash": "501aedaf1927c61608c04cdab3cfaaf482a16b67dccbb32354d0c451b153eedc"
	},
	{
		"id": "31b924ccbe44",
		"ts": "2026-08-15T21:17:04.867Z",
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
		"liquidityUsd": 641915.29,
		"hash": "31b924ccbe44033b6a29b9e30766265dbe9b40bcacba6eed36e7217350eb0aaa"
	},
	{
		"id": "68822bf4a37a",
		"ts": "2026-08-15T21:17:05.087Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 632287.71,
		"hash": "68822bf4a37a827a72007c00cf8e2fd2335d538218d5fdc1e118d777cf86dcc9"
	},
	{
		"id": "5d714be57d02",
		"ts": "2026-08-15T21:17:05.303Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 127016.02,
		"hash": "5d714be57d022d7b7eb1085b669466033f286d74d8be579dddae0c6d05e84825"
	},
	{
		"id": "418e6e1302bc",
		"ts": "2026-08-15T21:17:05.519Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1483202.96,
		"hash": "418e6e1302bc1605373e10179cc7c9247d400f7ece17b9f7906d5da7758cd8f1"
	},
	{
		"id": "8d350f49362e",
		"ts": "2026-08-15T20:17:25.064Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111407388.64,
		"hash": "8d350f49362ea04831c997250848c8e5357658d08eaef2b1bb6ff3b2eadb93e8"
	},
	{
		"id": "1b199b869c8d",
		"ts": "2026-08-15T20:17:25.300Z",
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
		"liquidityUsd": 15914301.12,
		"hash": "1b199b869c8d2eabea2506b4b427331189c94650a6c3ba9c8c16584ec4bfff5d"
	},
	{
		"id": "218a4a2aa111",
		"ts": "2026-08-15T20:17:25.647Z",
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
		"liquidityUsd": 813220.62,
		"hash": "218a4a2aa1112b75f27133dbb226e5b46d847aeea15a152aa19dab61cb72aeff"
	},
	{
		"id": "a23c1aabf34f",
		"ts": "2026-08-15T20:17:25.881Z",
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
		"liquidityUsd": 26630598.71,
		"hash": "a23c1aabf34f6644a53d6765307a218c84797d99c04fd65f435d019e5d2a9ff7"
	},
	{
		"id": "16aa8cc7ce3b",
		"ts": "2026-08-15T20:17:26.110Z",
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
		"liquidityUsd": 4167911.81,
		"hash": "16aa8cc7ce3b991a59fdc599a1a2c6ed19c5b6bf4ec25d480fc513bacc546f02"
	},
	{
		"id": "96f1d6ca2b25",
		"ts": "2026-08-15T20:17:26.340Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896981.25,
		"hash": "96f1d6ca2b25e384fcc1cd72557aa12f140d6031e8ba828c82582e4e5aebea8c"
	},
	{
		"id": "814407190d68",
		"ts": "2026-08-15T20:17:26.596Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26630598.38,
		"hash": "814407190d6863b18675e12c14b51ba0a94d9d61b75c9cc317fc7914a998f3c3"
	},
	{
		"id": "931bcecc0707",
		"ts": "2026-08-15T20:17:26.826Z",
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
		"liquidityUsd": 4348042.79,
		"hash": "931bcecc070778d9bd83d097565a02de8d417dda7095867a1b1fadea9145581e"
	},
	{
		"id": "0194bedf92e9",
		"ts": "2026-08-15T20:17:27.056Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2551195.84,
		"hash": "0194bedf92e9579603d783a02cc0059b31d5bc502de71dbb80ddfd513e752abf"
	},
	{
		"id": "8064d6c681e5",
		"ts": "2026-08-15T20:17:27.289Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5332209.46,
		"hash": "8064d6c681e5ae60e2da9324899da05c710db788663cb1a27c8660a2ada45227"
	},
	{
		"id": "ca3b91ecbb0f",
		"ts": "2026-08-15T20:17:27.503Z",
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
		"liquidityUsd": 896279.87,
		"hash": "ca3b91ecbb0f359cb37fbc29721bf1b1c8857ddc44e761206ec4d426ef501113"
	},
	{
		"id": "4cdcb5e0867c",
		"ts": "2026-08-15T20:17:27.719Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272629.57,
		"hash": "4cdcb5e0867cbd12ff9c96fad758398cd88013f315378368436220702411ad97"
	},
	{
		"id": "b0a558ab82d0",
		"ts": "2026-08-15T20:17:27.934Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "b0a558ab82d0447e88e80600edfd2508b5fac253acf853f0c6d2654f62c83bfc"
	},
	{
		"id": "b62fb4db032e",
		"ts": "2026-08-15T20:17:28.152Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9490028.61,
		"hash": "b62fb4db032e8d48080a4141a94f40b770b07dbd9539c3fe3212f5664565d3dc"
	},
	{
		"id": "ef04383609dd",
		"ts": "2026-08-15T20:17:28.367Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 387523.09,
		"hash": "ef04383609ddcb4f41f6a80375ff1e7235dbdfc2e9dadc05caf573df0465d69d"
	},
	{
		"id": "d2f78d902487",
		"ts": "2026-08-15T20:17:28.581Z",
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
		"liquidityUsd": 641936.91,
		"hash": "d2f78d902487780101dfc80444cc323c107e2ce40502c7d201a8d3931f7be700"
	},
	{
		"id": "4716fd060180",
		"ts": "2026-08-15T20:17:28.797Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 628718.89,
		"hash": "4716fd0601802c69b6334a374dcdb6b5b6255469f9ef475792cedf196dd04031"
	},
	{
		"id": "2f03631d8fb8",
		"ts": "2026-08-15T20:17:29.010Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 134135.5,
		"hash": "2f03631d8fb8f900f2f5f45a64e2a183069b6b8451f7a354be23d6606c3ca139"
	},
	{
		"id": "2c7b845626df",
		"ts": "2026-08-15T20:17:29.227Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1491715.27,
		"hash": "2c7b845626df2bd6c2147f12853546957bed539da2d4d6fbd20a9aa5b677462e"
	},
	{
		"id": "d98a59387ac0",
		"ts": "2026-08-15T19:19:04.917Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111416903.68,
		"hash": "d98a59387ac05b9d2b022eb776b2ee087d92db40db5e7d5fc5e76c5999451b90"
	},
	{
		"id": "030d0773e242",
		"ts": "2026-08-15T19:19:05.176Z",
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
		"liquidityUsd": 15908041.06,
		"hash": "030d0773e242e913018032d4772ed244c5017fb41e341b9f513f315143e0ae5e"
	},
	{
		"id": "1efaf953ce08",
		"ts": "2026-08-15T19:19:05.418Z",
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
		"liquidityUsd": 813220.62,
		"hash": "1efaf953ce08972ae903d1b3bf5aa2a161541becbaa93ef9a6146e761fc8c525"
	},
	{
		"id": "2296f04a2a10",
		"ts": "2026-08-15T19:19:05.661Z",
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
		"liquidityUsd": 26618699.05,
		"hash": "2296f04a2a103984127d9dcfe26d9857da8a983a97148f95cf690714bd139c2d"
	},
	{
		"id": "7e432ea787d2",
		"ts": "2026-08-15T19:19:05.870Z",
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
		"liquidityUsd": 4167911.81,
		"hash": "7e432ea787d221996f38dd6bfeae99d4497ccff7d8a5039129e754967c8a3ab0"
	},
	{
		"id": "384099fbf6dc",
		"ts": "2026-08-15T19:19:06.079Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896981.25,
		"hash": "384099fbf6dcd054e3fe3cd9444ac26df3c2fa0174c724b1e50f64c26b612438"
	},
	{
		"id": "1145c2f9032f",
		"ts": "2026-08-15T19:19:06.265Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26618699.05,
		"hash": "1145c2f9032f3d6a8ac0e534df1681aed534466dc8afebb2f5bf2a1f453feeee"
	},
	{
		"id": "e9f595e221da",
		"ts": "2026-08-15T19:19:06.484Z",
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
		"liquidityUsd": 4345066.25,
		"hash": "e9f595e221dafa488292cbaf0a3c838260e3cbcdfb80cbf7e52c0444f8846dad"
	},
	{
		"id": "bf4de147c4c6",
		"ts": "2026-08-15T19:19:06.684Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2557767.1,
		"hash": "bf4de147c4c63ea3bb5916668df39bc2c8677b2e0eb899da4c185e0c86b863e6"
	},
	{
		"id": "5868819bc8c3",
		"ts": "2026-08-15T19:19:06.888Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5142951.44,
		"hash": "5868819bc8c38edc4b06bf22f7ec0b08bfe7c0fb761826e4e14f4b52b50cda3c"
	},
	{
		"id": "157294728fcf",
		"ts": "2026-08-15T19:19:07.069Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272816.32,
		"hash": "157294728fcf1e55fbac27c8ca6c01451e9fe99642e8abc61d44d4a90d3edff1"
	},
	{
		"id": "0f2e85806aa9",
		"ts": "2026-08-15T19:19:07.288Z",
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
		"liquidityUsd": 895812.04,
		"hash": "0f2e85806aa9a2f079bc49bac2141ce1f52d8aecf48420018a2b6a1ed867fdfc"
	},
	{
		"id": "69279ea02b7b",
		"ts": "2026-08-15T19:19:07.522Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "69279ea02b7bad0cba96cb0eb56715d85dc91f91fb46beadc76319363d5d88d0"
	},
	{
		"id": "187f26b299f7",
		"ts": "2026-08-15T19:19:07.708Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 386014.28,
		"hash": "187f26b299f71d14450381e58319f072d20ddd6c7746b34974552717e0d6a7b2"
	},
	{
		"id": "6b4acce8c760",
		"ts": "2026-08-15T19:19:07.912Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9496663.45,
		"hash": "6b4acce8c76023095a16e6242ebbe384754a825b7f1045005df1adb61bf5c481"
	},
	{
		"id": "b454dde68147",
		"ts": "2026-08-15T19:19:08.106Z",
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
		"liquidityUsd": 641295.03,
		"hash": "b454dde68147eeef35497ecd79ef90b4d0e2dc1af25d31cb286c86a0571811b5"
	},
	{
		"id": "5393640b137a",
		"ts": "2026-08-15T19:19:08.293Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 626198.54,
		"hash": "5393640b137a3b93550c5e35697063de963a439767228692e2485a39183e4b1d"
	},
	{
		"id": "8ebc86e31366",
		"ts": "2026-08-15T19:19:08.484Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1491142.8,
		"hash": "8ebc86e313665a5ac44dce7587531ac061020036d5a740c2baa305dfefbb66fe"
	},
	{
		"id": "2ef25ba94b7e",
		"ts": "2026-08-15T19:19:08.689Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4196368.5,
		"hash": "2ef25ba94b7e2ba47852279d97edba9c5222cd50696778f198c45d905bdd2505"
	},
	{
		"id": "699706bbd7b8",
		"ts": "2026-08-15T18:22:27.393Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111418638.71,
		"hash": "699706bbd7b8e81698e1dd001e1f2fe038372756dc1a31824059d7edb9e8d343"
	},
	{
		"id": "124f9529509b",
		"ts": "2026-08-15T18:22:27.639Z",
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
		"liquidityUsd": 15825061.21,
		"hash": "124f9529509bb9b29465b74c4e15665a2ffe1964ad1319fd4066f28d3a61aaef"
	},
	{
		"id": "ccd2041d8470",
		"ts": "2026-08-15T18:22:27.921Z",
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
		"liquidityUsd": 811923.65,
		"hash": "ccd2041d8470b867da04247b241b9713511945ff8b1cf5153f30f4b3634f1717"
	},
	{
		"id": "52328d9fb3b9",
		"ts": "2026-08-15T18:22:28.175Z",
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
		"liquidityUsd": 26629963.19,
		"hash": "52328d9fb3b9a79b617ac5d62d296990a8b5f3bb5e59fe1fba7278ffeb0ab465"
	},
	{
		"id": "82c66d21b6d2",
		"ts": "2026-08-15T18:22:28.418Z",
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
		"liquidityUsd": 4167911.81,
		"hash": "82c66d21b6d2c9e6cc0a170fbd29789d093b774a22780c158e785311938f5e88"
	},
	{
		"id": "fd4d32b77633",
		"ts": "2026-08-15T18:22:28.679Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896981.25,
		"hash": "fd4d32b77633ebaa1e319bd4d7a0c2fc2884720aa51de0ba9a2d062094d5a9a4"
	},
	{
		"id": "775b1b461c74",
		"ts": "2026-08-15T18:22:28.918Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26629963.19,
		"hash": "775b1b461c74447d42d2db64cc7857024cd293917ee2bdb7c9a156776d0a62cd"
	},
	{
		"id": "7a26383e6813",
		"ts": "2026-08-15T18:22:29.192Z",
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
		"liquidityUsd": 4348536.45,
		"hash": "7a26383e6813e3155fb51e039983057b2d2d3031d69a1af7e6c9030f9dfa1d6e"
	},
	{
		"id": "662f2bca10d6",
		"ts": "2026-08-15T18:22:29.422Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2580554.32,
		"hash": "662f2bca10d6e539ad188bd20c3a54e96e069ff6c1372ad14eb3a0deda613555"
	},
	{
		"id": "2fd301171ffd",
		"ts": "2026-08-15T18:22:29.662Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5434122.11,
		"hash": "2fd301171ffdc9358eaceed1f83cc4f725124d498dd398d752c12254ed398775"
	},
	{
		"id": "e31cbc282ac0",
		"ts": "2026-08-15T18:22:29.917Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272765.72,
		"hash": "e31cbc282ac0e6e7dd28da839c7b2a239a5dbc4f581954f51437f11fc18c400d"
	},
	{
		"id": "c0c47f513737",
		"ts": "2026-08-15T18:22:30.136Z",
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
		"liquidityUsd": 895910.37,
		"hash": "c0c47f513737c094de4724b83129f2bdedbafe57f4632abfafeee095b0a2cd12"
	},
	{
		"id": "da2c9611d17c",
		"ts": "2026-08-15T18:22:30.360Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "da2c9611d17cd96efcb05776ef8da4742840f5c9a56fe96c61dff803038a1497"
	},
	{
		"id": "a9fbff11ef71",
		"ts": "2026-08-15T18:22:30.579Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 389901.36,
		"hash": "a9fbff11ef71c001090299c6bd182fb7806debc10584d4dd94bfc5d7b22cc012"
	},
	{
		"id": "15d280866880",
		"ts": "2026-08-15T18:22:30.806Z",
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
		"liquidityUsd": 641058.98,
		"hash": "15d280866880999803ae763170eabe64666e5f73eedd229cd214ecf2f51f2eb2"
	},
	{
		"id": "4cebab357be0",
		"ts": "2026-08-15T18:22:31.033Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9492656.97,
		"hash": "4cebab357be0b443694bc6a00159e9db00db1b6d724549f4212e14acaa3ebc73"
	},
	{
		"id": "8df72ea5bd2a",
		"ts": "2026-08-15T18:22:31.252Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 622439.46,
		"hash": "8df72ea5bd2aa2b64dbe6502059c34a4a481df8550f221fffd3f5a25b5c61aa9"
	},
	{
		"id": "22f8cc427f74",
		"ts": "2026-08-15T18:22:31.483Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1496126.12,
		"hash": "22f8cc427f74f7bb861a5b91fecce0cd030087f06d0df9cdff1adbe5c87d3739"
	},
	{
		"id": "4588150e9134",
		"ts": "2026-08-15T18:22:31.698Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4210945.62,
		"hash": "4588150e91348750577f71bfcec3b080f5fd2e7dabdefc32eaed484fe4f393c1"
	},
	{
		"id": "9c3bf94d53e1",
		"ts": "2026-08-15T17:17:08.041Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111436465.95,
		"hash": "9c3bf94d53e1adcb017ef13cce559899a5d9da73e9cea9e9b1a166b619319f56"
	},
	{
		"id": "29bf2c79b5af",
		"ts": "2026-08-15T17:17:08.409Z",
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
		"liquidityUsd": 15721767.59,
		"hash": "29bf2c79b5afcb296a178f181bedbb83d81b6f5d0b4794a793c8ee15caa54c0c"
	},
	{
		"id": "b0434934b9a4",
		"ts": "2026-08-15T17:17:08.740Z",
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
		"liquidityUsd": 807943.57,
		"hash": "b0434934b9a4eb27324774c0789180cfb7f28ecf0defe6ce98d6f6d052b01672"
	},
	{
		"id": "8b80bbe0b4e4",
		"ts": "2026-08-15T17:17:09.054Z",
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
		"liquidityUsd": 26562958.48,
		"hash": "8b80bbe0b4e4c0725b31b285274df5cb20be492986741114aba9a9643d29d817"
	},
	{
		"id": "5a2204ca3cc2",
		"ts": "2026-08-15T17:17:09.243Z",
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
		"liquidityUsd": 4166685.24,
		"hash": "5a2204ca3cc25590645b45cc230885bce3913a494971ac01634a832a8894d3e3"
	},
	{
		"id": "cacbdd61ec37",
		"ts": "2026-08-15T17:17:09.445Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896981.25,
		"hash": "cacbdd61ec3715949e4b992598c5f896416ca6baa284ce5696ae04baa2d1bc79"
	},
	{
		"id": "d42db649450b",
		"ts": "2026-08-15T17:17:09.647Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26562958.48,
		"hash": "d42db649450b62f12a24cc2ae093bb22206f95f0935d877e2ec9f5dff96c3490"
	},
	{
		"id": "c8bc67ca6cb3",
		"ts": "2026-08-15T17:17:09.868Z",
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
		"liquidityUsd": 4350968.44,
		"hash": "c8bc67ca6cb3fd7d2f3e96add28e8dcc7e9ed701c76c3cd7378eea63ee4e92b9"
	},
	{
		"id": "34ae325819ca",
		"ts": "2026-08-15T17:17:10.054Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2643787.53,
		"hash": "34ae325819ca3def87f44cf7b0adc53c4b3ab981f64da18805891de7327337a4"
	},
	{
		"id": "75e155b61077",
		"ts": "2026-08-15T17:17:10.240Z",
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
		"liquidityUsd": 5345327.85,
		"hash": "75e155b610776b00b16691f7c7d3e8c6078fa660f096d91c0b89e44a433ec469"
	},
	{
		"id": "c9fbeb2e3f97",
		"ts": "2026-08-15T17:17:10.434Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 271734.19,
		"hash": "c9fbeb2e3f972492f19677ecc210b7aca4c11cb4f020a28994eb21114612a0ce"
	},
	{
		"id": "1a2d80e73de1",
		"ts": "2026-08-15T17:17:10.644Z",
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
		"liquidityUsd": 896532.3,
		"hash": "1a2d80e73de1e1a78ce7d8bb066e7beee6d1d402e754fd15cec7af8652f26d85"
	},
	{
		"id": "83d51e5012ae",
		"ts": "2026-08-15T17:17:10.819Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "83d51e5012ae7ca7d520e731fcf2a7f6104ec622b50d98727b5b132e1fdb7529"
	},
	{
		"id": "eaa784d0f90b",
		"ts": "2026-08-15T17:17:11.042Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 384166.68,
		"hash": "eaa784d0f90bcad031b06ab4f14137628d8adec51e2b62d7aaa827d062241201"
	},
	{
		"id": "f7f95fd33b99",
		"ts": "2026-08-15T17:17:11.241Z",
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
		"liquidityUsd": 639963.05,
		"hash": "f7f95fd33b9952f85b313fff31713a1312ac6ee425bbfadf87bafcc24ebea6f8"
	},
	{
		"id": "e9ff04377a9f",
		"ts": "2026-08-15T17:17:11.465Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9500618.22,
		"hash": "e9ff04377a9fe402eca88818d4575e55be80afe60bf794588dd9e90406bee50d"
	},
	{
		"id": "872bb8f17342",
		"ts": "2026-08-15T17:17:11.657Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1497119.34,
		"hash": "872bb8f17342228eb1a79c6c1048f3e781cbc2a136ed0d6e7f4b6622f97ac3b8"
	},
	{
		"id": "5870a5fdf210",
		"ts": "2026-08-15T17:17:11.846Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4193328.31,
		"hash": "5870a5fdf210553f1ee34fbee624434db4fc9f48cff21c4864b4147a54e41bb7"
	},
	{
		"id": "3df52746fc81",
		"ts": "2026-08-15T16:18:54.749Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111532630.85,
		"hash": "3df52746fc8177788d0ddeae55ce2ffff4afe563540c6418dcf41499527affa1"
	},
	{
		"id": "ea5786b218a8",
		"ts": "2026-08-15T16:18:55.198Z",
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
		"liquidityUsd": 15831815.26,
		"hash": "ea5786b218a841f70a7a479d6714a1fa504c28c1ae3cc759739406a0623b1930"
	},
	{
		"id": "451940d29d23",
		"ts": "2026-08-15T16:18:55.507Z",
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
		"liquidityUsd": 803239.12,
		"hash": "451940d29d238af0238f825521a63b70bd8b64f7a579d2be57240cdde80375aa"
	},
	{
		"id": "195ce6cd408f",
		"ts": "2026-08-15T16:18:55.690Z",
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
		"liquidityUsd": 26562654.18,
		"hash": "195ce6cd408f26d9027c1cc0b45d7ff04b991b8e877e4f953e7165efcf9c4e74"
	},
	{
		"id": "e27b48daacbb",
		"ts": "2026-08-15T16:18:55.899Z",
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
		"liquidityUsd": 4156751.26,
		"hash": "e27b48daacbb35dc1461b6e8101d6ca06c3e665fe699767a37243af83567c0a2"
	},
	{
		"id": "8004b390220a",
		"ts": "2026-08-15T16:18:56.122Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895826.69,
		"hash": "8004b390220a80eddc7f16ddd822ba524fb00dd87cc6542989e3d8e676b38291"
	},
	{
		"id": "c363f017c42e",
		"ts": "2026-08-15T16:18:56.318Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26562654.18,
		"hash": "c363f017c42e5360d7c21d7cc2bf125a36a80697986888499c9f786a8223acdc"
	},
	{
		"id": "225c5ac7e0a8",
		"ts": "2026-08-15T16:18:56.530Z",
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
		"liquidityUsd": 4348706.56,
		"hash": "225c5ac7e0a81f381dba9928d88becdea0328c8fc20b5ba84687f6690ad5eb09"
	},
	{
		"id": "b5bbb3ff3d73",
		"ts": "2026-08-15T16:18:56.720Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2591283.16,
		"hash": "b5bbb3ff3d73d2c0cd2d9dc53ca20b9e15dcb01747a373572ddbd76e26662fff"
	},
	{
		"id": "bba377075ec2",
		"ts": "2026-08-15T16:18:56.906Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5472921.9,
		"hash": "bba377075ec20e977a6410d14338722b7b510b70682c5eb0770a262544be6e0b"
	},
	{
		"id": "f37c25bcbae3",
		"ts": "2026-08-15T16:18:57.097Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 268426.2,
		"hash": "f37c25bcbae3818fbab0555795369c92ffd5a8df417b29787c11b2c89a53d567"
	},
	{
		"id": "b45b822a51e7",
		"ts": "2026-08-15T16:18:57.289Z",
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
		"liquidityUsd": 895825.81,
		"hash": "b45b822a51e7b4ce3f806519b4da5bee19739567af982b428c59cffaa215658e"
	},
	{
		"id": "f7829f01481d",
		"ts": "2026-08-15T16:18:57.475Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "f7829f01481d6f7b26763acb1cfca03ce33e45d5cf5aafab9da442deef5845df"
	},
	{
		"id": "88e54db53488",
		"ts": "2026-08-15T16:18:57.676Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 378238.96,
		"hash": "88e54db534881c3304338fcaa60e57faa638eb0196e476aa62e896f94550b8e3"
	},
	{
		"id": "48b6933d0e08",
		"ts": "2026-08-15T16:18:57.866Z",
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
		"liquidityUsd": 639864.29,
		"hash": "48b6933d0e0874bf9ccc730635218c49671eeca775ace4890e13575719ffdf80"
	},
	{
		"id": "7d03ed56ffcc",
		"ts": "2026-08-15T16:18:58.050Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9487436.61,
		"hash": "7d03ed56ffcc72e4577e44041852d484757aaaedc5ed7bbace21ea7cd6de306d"
	},
	{
		"id": "d25a91afe1d2",
		"ts": "2026-08-15T16:18:58.237Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1496689.14,
		"hash": "d25a91afe1d2eac08e10c5acbaa0316f2ad747458679477735fa9128da69c620"
	},
	{
		"id": "9932d16757f4",
		"ts": "2026-08-15T16:18:58.456Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 852084.43,
		"hash": "9932d16757f44a24d1b5ad349735a834eb3184005be6ccc50b04084b5e097303"
	},
	{
		"id": "730442712406",
		"ts": "2026-08-15T15:16:08.047Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111512934.31,
		"hash": "730442712406a6ba17c8176b26464a57e96d23858831d4a2c220bcea8ddf697f"
	},
	{
		"id": "f1cd0e582e25",
		"ts": "2026-08-15T15:16:08.288Z",
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
		"liquidityUsd": 15800328.13,
		"hash": "f1cd0e582e25551d0ee0a727d6a98f361e4637f3506040efa8b82233ef2ee58d"
	},
	{
		"id": "c532901f4932",
		"ts": "2026-08-15T15:16:08.522Z",
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
		"liquidityUsd": 798767.04,
		"hash": "c532901f4932cb61ccef453f41a4ffa8136de52d0d2ed94e49e290eb1b6924ca"
	},
	{
		"id": "3e2d4d615284",
		"ts": "2026-08-15T15:16:08.749Z",
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
		"liquidityUsd": 26486962.41,
		"hash": "3e2d4d61528484956de5fb22957c0454def7dc31305c1386808cb94e8e9b933a"
	},
	{
		"id": "ae7f5e39e140",
		"ts": "2026-08-15T15:16:08.985Z",
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
		"liquidityUsd": 4155192.14,
		"hash": "ae7f5e39e140c8b9171dae089bc69c97626fb729d9df1b8682c5da6b42252df6"
	},
	{
		"id": "d011068b7114",
		"ts": "2026-08-15T15:16:09.213Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894594.44,
		"hash": "d011068b7114a9719c907003ef793d26eda3c47a8aff8379d2fa862a0125f7b5"
	},
	{
		"id": "998cccf6c4f4",
		"ts": "2026-08-15T15:16:09.444Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26487962.41,
		"hash": "998cccf6c4f42a756ca0b5ea48309d074722cc3782193000ea83a9d57bd1cf79"
	},
	{
		"id": "9b906134602a",
		"ts": "2026-08-15T15:16:09.674Z",
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
		"liquidityUsd": 3798348.86,
		"hash": "9b906134602a726cb3992d8af903712cdf605d0b9f2b3215fe46ece1c7caf8a2"
	},
	{
		"id": "895d85fb8e1e",
		"ts": "2026-08-15T15:16:09.906Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2567350.64,
		"hash": "895d85fb8e1ee68390cd9491e8c515af6bccfdfc5ef071c735a06399304b48db"
	},
	{
		"id": "89b0fa162705",
		"ts": "2026-08-15T15:16:10.140Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6442501.52,
		"hash": "89b0fa162705bfc8613bfb1edcdd26575ecfaea0bc4dfa5208a8b4997791cf96"
	},
	{
		"id": "cc99d629f2c6",
		"ts": "2026-08-15T15:16:10.353Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 273775.77,
		"hash": "cc99d629f2c687b4ca37f2a285b60347ed6504feeca9943837f66748b1e35170"
	},
	{
		"id": "d92ca0ba46e7",
		"ts": "2026-08-15T15:16:10.571Z",
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
		"liquidityUsd": 893261.63,
		"hash": "d92ca0ba46e7dfe7c293e3c05d5f7583f950a400741de61132cc199096d1e162"
	},
	{
		"id": "2bff0499c7d1",
		"ts": "2026-08-15T15:16:10.785Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "2bff0499c7d1d41ee9742f849c9f4b64736b2a7c359e52b320b8203f7806b778"
	},
	{
		"id": "4f8c058ad404",
		"ts": "2026-08-15T15:16:11.006Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 375414.97,
		"hash": "4f8c058ad40490b407b88c25451e12159c1c83931088f15c2f00aa1f649dc506"
	},
	{
		"id": "e0b71a463144",
		"ts": "2026-08-15T15:16:11.219Z",
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
		"liquidityUsd": 648356.7,
		"hash": "e0b71a463144c2cc5bc1b075ce09aad415418b6da0ad8894b48139d1fff32f9b"
	},
	{
		"id": "97364625b43c",
		"ts": "2026-08-15T15:16:11.438Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9474382.55,
		"hash": "97364625b43cab11d7e58d71374f59694c23d3dce4a7e460032fa1f1dfe6851d"
	},
	{
		"id": "6023635dd0f2",
		"ts": "2026-08-15T15:16:11.651Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1492636.49,
		"hash": "6023635dd0f225301e3fa5142afa13cc864a63a18278487b92bc4e5a0fed659f"
	},
	{
		"id": "58cba53578a0",
		"ts": "2026-08-15T15:16:11.871Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 485257.53,
		"hash": "58cba53578a012eaebc086e5675ecc13efaf648f41de35eb217a8e17041c2318"
	},
	{
		"id": "0e526d43df42",
		"ts": "2026-08-15T14:18:03.769Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111498911.16,
		"hash": "0e526d43df4275859fe733aa570bb3cc36d825c491921270bdb1da2099ea3ae0"
	},
	{
		"id": "98531f092822",
		"ts": "2026-08-15T14:18:04.227Z",
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
		"liquidityUsd": 15816369.39,
		"hash": "98531f092822bc8abadce5001774ba51b453a4e0e4f5a9c0b2d6c35c19cabc97"
	},
	{
		"id": "103bdc72a683",
		"ts": "2026-08-15T14:18:04.669Z",
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
		"liquidityUsd": 798767.04,
		"hash": "103bdc72a683f0c6b93af411026bc15f27a03ba924887c44ba8ed616e567acaa"
	},
	{
		"id": "3c8be2dc1653",
		"ts": "2026-08-15T14:18:05.064Z",
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
		"liquidityUsd": 26487608.93,
		"hash": "3c8be2dc16538847c2e4d53d263ced8b40f698ef17d0c5bc9449a8432d5b6196"
	},
	{
		"id": "8b6bc41dffae",
		"ts": "2026-08-15T14:18:05.312Z",
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
		"liquidityUsd": 4156137.97,
		"hash": "8b6bc41dffaeeb6af4f66405e493cca3852b6817e3d5c4677f3f8dfbdfa6a4ef"
	},
	{
		"id": "984f71b8fed0",
		"ts": "2026-08-15T14:18:05.535Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 897375.52,
		"hash": "984f71b8fed0b6d79fc033780cef95071f5a22f25cb025a0f8a8b27ab27b9842"
	},
	{
		"id": "f3e205dfaf98",
		"ts": "2026-08-15T14:18:05.766Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26487608.93,
		"hash": "f3e205dfaf987155261f67a848f0d2cab333aac6afed93dbfea3c1d3c65e1404"
	},
	{
		"id": "046535775833",
		"ts": "2026-08-15T14:18:06.008Z",
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
		"liquidityUsd": 4102850.27,
		"hash": "046535775833f271f5a579c0084871cac5a3e027c7a626ba476dd62682dd6c29"
	},
	{
		"id": "1f3c2741ddac",
		"ts": "2026-08-15T14:18:06.229Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2615464.44,
		"hash": "1f3c2741ddac81036ad507fee0a3bee88db676ed6a2790423c0a53343421e955"
	},
	{
		"id": "5c49695050b8",
		"ts": "2026-08-15T14:18:06.461Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6712601.86,
		"hash": "5c49695050b826e63bb5ac7dce8f7cf8f60499f25bcf4e7f2eeed5bd3863e549"
	},
	{
		"id": "87cdd109544b",
		"ts": "2026-08-15T14:18:06.689Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 277001.21,
		"hash": "87cdd109544b725b83e678a2c81127a092d2f2b8ea159e89f2c9e8ebd98065f9"
	},
	{
		"id": "d6640838d93d",
		"ts": "2026-08-15T14:18:06.895Z",
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
		"liquidityUsd": 888477.23,
		"hash": "d6640838d93db06611f71583d9b9c23d23dee7f50fa4cb49eac2a06dd5b676a7"
	},
	{
		"id": "7878941bf639",
		"ts": "2026-08-15T14:18:07.114Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "7878941bf639f4b827013a3b61f9217e435f47ae1820fd10ca25947876e4d004"
	},
	{
		"id": "4e6ec139ca2f",
		"ts": "2026-08-15T14:18:07.342Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 376938.08,
		"hash": "4e6ec139ca2f85bfc83e6739b2af57c82636f92592b59b40f20505c0aa1a3de2"
	},
	{
		"id": "e02b0ccb6ba7",
		"ts": "2026-08-15T14:18:07.548Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9473602.16,
		"hash": "e02b0ccb6ba7ebeae92ccc61444cd89b29292c2ca7a2978991cee1b3fabac79f"
	},
	{
		"id": "6b4816fc8918",
		"ts": "2026-08-15T14:18:07.768Z",
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
		"liquidityUsd": 648794.62,
		"hash": "6b4816fc89187df6bba640f907c58da5089ca649ef14fdab3dbff619372bbaa3"
	},
	{
		"id": "caeca6b59c6e",
		"ts": "2026-08-15T14:18:07.998Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1486990.54,
		"hash": "caeca6b59c6e98b01ffd02f459531274a81b5b48e95f16a9326f3deaeac1a11a"
	},
	{
		"id": "2f1bf53e3bea",
		"ts": "2026-08-15T14:18:08.205Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 852273.57,
		"hash": "2f1bf53e3bea0a369615c999fe5ce884538e737d62750ab2439c32afadefd41f"
	},
	{
		"id": "a945e3418172",
		"ts": "2026-08-15T13:26:36.760Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111510913.33,
		"hash": "a945e341817227eb758c61ad3d8b28553dd0bdd29f97cec21307579bda01e964"
	},
	{
		"id": "b6443d8d77e4",
		"ts": "2026-08-15T13:26:37.187Z",
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
		"liquidityUsd": 15821796.81,
		"hash": "b6443d8d77e4320984c8992aea09bd1cc7ac34c741f2dda8eace0049464ffc03"
	},
	{
		"id": "de8ca89ad176",
		"ts": "2026-08-15T13:26:37.436Z",
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
		"liquidityUsd": 798767.04,
		"hash": "de8ca89ad1763b822e60b08818fce866944244abee5cbfe4ed6608f1478c2a8f"
	},
	{
		"id": "064a5b845594",
		"ts": "2026-08-15T13:26:37.663Z",
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
		"liquidityUsd": 26449479.67,
		"hash": "064a5b8455945246c8e2c31db633edaf038846e3517feeb69e1e08977636ea80"
	},
	{
		"id": "173e7f9bb628",
		"ts": "2026-08-15T13:26:37.887Z",
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
		"liquidityUsd": 4154304.7,
		"hash": "173e7f9bb62861b13538e033be8ed7337387caafed11c4609563f236436af97d"
	},
	{
		"id": "4c512e97f489",
		"ts": "2026-08-15T13:26:38.177Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895475.76,
		"hash": "4c512e97f489ab6a9cb6b336886c1dbfb1e31f248545f8288cd929cce579a6b1"
	},
	{
		"id": "79a213a86328",
		"ts": "2026-08-15T13:26:38.420Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26449479.67,
		"hash": "79a213a8632840c1f77d025665bbada65104335d41854c934357c9e696b9932c"
	},
	{
		"id": "23b4fbd6c21f",
		"ts": "2026-08-15T13:26:38.652Z",
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
		"liquidityUsd": 4096285.09,
		"hash": "23b4fbd6c21f6ac33fc54e0a2486b20837252df41c5187d765c93f8586d0d37b"
	},
	{
		"id": "50f4b4f4d406",
		"ts": "2026-08-15T13:26:38.927Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2581817.89,
		"hash": "50f4b4f4d406dd8abf47d252dd4fa29651bbe0ccecf5961ce8c0f3864b19f27a"
	},
	{
		"id": "4bc437c3d39b",
		"ts": "2026-08-15T13:26:39.296Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6837050.34,
		"hash": "4bc437c3d39b0fe21740c3d44dfc7400ac5c707452c67716934c4e50358f5237"
	},
	{
		"id": "88172f239704",
		"ts": "2026-08-15T13:26:39.507Z",
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
		"liquidityUsd": 888823.23,
		"hash": "88172f2397048f71cee3e84544b52a35d78aaed8c7c64c4bdcd7c577df785d8a"
	},
	{
		"id": "fa4097ff9e4e",
		"ts": "2026-08-15T13:26:39.736Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272042.82,
		"hash": "fa4097ff9e4e7f7c466d02b32b9b03a23347771140dc1961036c4e6111be4daa"
	},
	{
		"id": "816146c1af5b",
		"ts": "2026-08-15T13:26:39.949Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "816146c1af5b7c0822839002737945575b2df74f9f48851cf7c3549451474d98"
	},
	{
		"id": "da2f3e3a4e19",
		"ts": "2026-08-15T13:26:40.159Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 381629.03,
		"hash": "da2f3e3a4e19399807a314f66da9a9fc17d66dc98849108278d401870ef19909"
	},
	{
		"id": "363b3950cb87",
		"ts": "2026-08-15T13:26:40.385Z",
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
		"liquidityUsd": 9421221.99,
		"hash": "363b3950cb87758aa1a68d0a54da006c3a5068e6ddd9f8b59fb38f8f78bf55a6"
	},
	{
		"id": "49eba1f9f7f7",
		"ts": "2026-08-15T13:26:40.596Z",
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
		"liquidityUsd": 652283.47,
		"hash": "49eba1f9f7f779af3c343b568710490ff378b14179b74077ad119f87348e6117"
	},
	{
		"id": "5bf373b35d0d",
		"ts": "2026-08-15T13:26:40.807Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1487738.72,
		"hash": "5bf373b35d0d4bfa2c7aef6ec122744c14d20f85b598fc8b6aacfb32c0206ef4"
	},
	{
		"id": "ffa88b73b25e",
		"ts": "2026-08-15T13:26:41.035Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 850508.33,
		"hash": "ffa88b73b25edbf9bc569021c9ee40930ddc8f633cbf4fc797afc5557fa36c31"
	},
	{
		"id": "656dcfe03ebd",
		"ts": "2026-08-15T12:29:48.625Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111635072.31,
		"hash": "656dcfe03ebdae564f2c9b78ae117c786c10dcf5cf77c0846a99088416b5d543"
	},
	{
		"id": "4dc12e0fbcb8",
		"ts": "2026-08-15T12:29:49.124Z",
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
		"liquidityUsd": 15848654.66,
		"hash": "4dc12e0fbcb88a8f7b027eab6547a473f4571610feb1e3fad733dd61717ad426"
	},
	{
		"id": "38c9ae699300",
		"ts": "2026-08-15T12:29:49.409Z",
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
		"liquidityUsd": 798767.04,
		"hash": "38c9ae699300652d2ede68c7fedf7cba1dd0c357fa3c70b15ad29d2cb1df360f"
	},
	{
		"id": "365e038d7775",
		"ts": "2026-08-15T12:29:49.701Z",
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
		"liquidityUsd": 26446699.25,
		"hash": "365e038d7775f6c0659d5fd503ff935a0e06cec0beb06177e6b2ee832348b311"
	},
	{
		"id": "a6efe2a939d4",
		"ts": "2026-08-15T12:29:50.002Z",
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
		"liquidityUsd": 4145145.2,
		"hash": "a6efe2a939d416eb96d9ad16c673bdd9c7590746121b14cdc321af626853dc7c"
	},
	{
		"id": "0ac50a136b94",
		"ts": "2026-08-15T12:29:50.305Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895475.76,
		"hash": "0ac50a136b946d57b4b63d70eceb06278224dd0e8bc61c3bd229e2a3c3c0a1b1"
	},
	{
		"id": "89d9fe021691",
		"ts": "2026-08-15T12:29:50.581Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26446643.19,
		"hash": "89d9fe0216919a77c8079b941793dc81ea77c2c49e5787170e6b34d2691d898e"
	},
	{
		"id": "cba8f10a78d1",
		"ts": "2026-08-15T12:29:50.873Z",
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
		"liquidityUsd": 4106032.21,
		"hash": "cba8f10a78d1572843575fb0a88a8d25585585aa449b965f5f189cd565479c9d"
	},
	{
		"id": "6da73c39c3f3",
		"ts": "2026-08-15T12:29:51.158Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2540257.04,
		"hash": "6da73c39c3f334f0e3023c9567892d0a5c2cee58a8e905f3bb8a860366e999cb"
	},
	{
		"id": "c4fdd51d2acf",
		"ts": "2026-08-15T12:29:51.439Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6722703.69,
		"hash": "c4fdd51d2acf95e120d7329a5c3d84814e2ea72c69f2895c5306a3495f6f8298"
	},
	{
		"id": "e6b58cd946c1",
		"ts": "2026-08-15T12:29:51.703Z",
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
		"liquidityUsd": 897995.56,
		"hash": "e6b58cd946c10b7c81a19c2744e92bf3573f741a9203d120abe9976c9dfdc30b"
	},
	{
		"id": "47f49ee7468a",
		"ts": "2026-08-15T12:29:51.966Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 271753.54,
		"hash": "47f49ee7468ace1894d215b6bc02656bbcc17585fb2b85107d36b6e0c0dadc00"
	},
	{
		"id": "143bbd5096e0",
		"ts": "2026-08-15T12:29:52.230Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 849955.52,
		"hash": "143bbd5096e06205041c0cddb0a46e11ed8395fb2ba08a46c611b45ece8f00a9"
	},
	{
		"id": "ec31ab9d4253",
		"ts": "2026-08-15T12:29:52.526Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "ec31ab9d42534ad6c951f1cb0f7eea62a0fd497e7c0882e5ead15df81fa5fa04"
	},
	{
		"id": "97b2a4aed272",
		"ts": "2026-08-15T12:29:52.789Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9392543.97,
		"hash": "97b2a4aed2721c9d94668382347e72785d6b1ce23e85d8c1a771561b42450137"
	}
]
