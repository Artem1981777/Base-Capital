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
	"updatedAt": "2026-08-17T21:21:35.307Z",
	"tokensScored": 11473,
	"verdictsIssued": 11473,
	"safe": 9968,
	"risky": 848,
	"likelyRug": 657,
	"ticks": 681
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "c8fcc5a1123f",
		"ts": "2026-08-17T21:21:30.415Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112834115.05,
		"hash": "c8fcc5a1123fd7a3238029c3d8e814d84ce8d802f783befa94ed85e7b39c4101"
	},
	{
		"id": "bf7bd28c2827",
		"ts": "2026-08-17T21:21:30.873Z",
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
		"liquidityUsd": 18415216.02,
		"hash": "bf7bd28c28271a74418f43b45de021ddcd34cf39e6dcc9a6d6283f4ddbcaba99"
	},
	{
		"id": "032e30ebfe4d",
		"ts": "2026-08-17T21:21:31.107Z",
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
		"liquidityUsd": 786363.69,
		"hash": "032e30ebfe4d4fe5db9c5f6c0ca071f3a41a826cb737e26ac2bbab8e09bbc6d2"
	},
	{
		"id": "e8da5c629746",
		"ts": "2026-08-17T21:21:31.384Z",
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
		"liquidityUsd": 26958407.12,
		"hash": "e8da5c62974616e415817b9c4f9aeb9457b146ef5c9044eeb974456401f4a79c"
	},
	{
		"id": "38dd8e6c8385",
		"ts": "2026-08-17T21:21:31.642Z",
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
		"liquidityUsd": 4257200.77,
		"hash": "38dd8e6c83858cf6f4717c68bbb1576e74b5af1a2f269bc6a505f2782ef985d0"
	},
	{
		"id": "c30da9d56533",
		"ts": "2026-08-17T21:21:31.874Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889564.2,
		"hash": "c30da9d565332ab3e51a930d40d135de0fdf1793ccace4ee0673f9b4efeed89d"
	},
	{
		"id": "5b10e073632d",
		"ts": "2026-08-17T21:21:32.120Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3997868.45,
		"hash": "5b10e073632d0af14682bc3c6f1b0d3204a0845f7fa36df417f8cd0640e5f34e"
	},
	{
		"id": "884dcc074dd3",
		"ts": "2026-08-17T21:21:32.366Z",
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
		"liquidityUsd": 1261692.87,
		"hash": "884dcc074dd32efe72db7352e9da9ee3b8e9b3c540d63a1e6aa3d8aea5016b7a"
	},
	{
		"id": "af66784a4952",
		"ts": "2026-08-17T21:21:32.802Z",
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
		"liquidityUsd": 499677.92,
		"hash": "af66784a49521d887b1814fe4270286d586b7bd164efdd5702a2ad7e91b9347c"
	},
	{
		"id": "143a95f18d16",
		"ts": "2026-08-17T21:21:33.048Z",
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
		"liquidityUsd": 527833.39,
		"hash": "143a95f18d16e6f4c9efe2ea030ecf69d77393715c4fae37598e9c44ee86e739"
	},
	{
		"id": "a1503965e006",
		"ts": "2026-08-17T21:21:33.278Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 95640.7,
		"hash": "a1503965e0065472160a3f28ce4bde0b0ca6aefe0174f36ab2a9562a0da1a16f"
	},
	{
		"id": "d6da32c74cef",
		"ts": "2026-08-17T21:21:33.499Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 389751.09,
		"hash": "d6da32c74cefffada8fdef6e92464e02c8ef6686072d98fe44f7513f9114834a"
	},
	{
		"id": "aa278cfc8c9e",
		"ts": "2026-08-17T21:21:33.726Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9994797.15,
		"hash": "aa278cfc8c9e91624f1555aff69a946ddc83a256b45dfdb10b07de4d7d5b174b"
	},
	{
		"id": "c8d42638eacf",
		"ts": "2026-08-17T21:21:33.954Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245999.68,
		"hash": "c8d42638eacf0e46ad29542b957999782dea26a9dd2c6190e71c98f2b9c93805"
	},
	{
		"id": "4897104778b4",
		"ts": "2026-08-17T21:21:34.173Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 94396.62,
		"hash": "4897104778b4e0adf8f26c01bb3426df133c81329c1345f0d0ad57bea9b0b4d9"
	},
	{
		"id": "412c814f16be",
		"ts": "2026-08-17T21:21:34.400Z",
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
		"liquidityUsd": 44769.52,
		"hash": "412c814f16bee94a4397001a61f7be0695f45dd4ac2fec28087f4fedcc93c8fa"
	},
	{
		"id": "48fa5918d373",
		"ts": "2026-08-17T21:21:34.629Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1008668.72,
		"hash": "48fa5918d37329cdfe3c11ad5df11ebaed04ef65b48ea25d4ad18e923c762b9a"
	},
	{
		"id": "60f4115778fd",
		"ts": "2026-08-17T21:21:34.849Z",
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
		"liquidityUsd": 80363.85,
		"hash": "60f4115778fd0653ee467b906365d6967981559249d8127f411292eb1cb330c8"
	},
	{
		"id": "2f6390de2ca7",
		"ts": "2026-08-17T21:21:35.078Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2533130.6,
		"hash": "2f6390de2ca7a77691784e60cb3ee5bcadb183cb87fa3830817bde594ee6596d"
	},
	{
		"id": "4e5248fa2b18",
		"ts": "2026-08-17T21:21:35.307Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3997868.45,
		"hash": "4e5248fa2b18ec7e6365575642705ce0e29b2d491a212a6493ebc6b3b44114a6"
	},
	{
		"id": "5c56d773f15e",
		"ts": "2026-08-17T20:21:31.926Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112869476.04,
		"hash": "5c56d773f15e397cb0584b97a99e1d4437e075baa0a59e0bee33c2acae23b5b8"
	},
	{
		"id": "b22f65dd5f82",
		"ts": "2026-08-17T20:21:32.266Z",
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
		"liquidityUsd": 17657062.98,
		"hash": "b22f65dd5f82c320145ffb17bc81c4eb21a625c09db48c7c1aec86cd69664ecc"
	},
	{
		"id": "0bd81a8f337c",
		"ts": "2026-08-17T20:21:32.595Z",
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
		"liquidityUsd": 786363.69,
		"hash": "0bd81a8f337c8ca4d8d5e000a9c292fd33791182cd73abe2631d0f0671eb9ed5"
	},
	{
		"id": "cfed117aebd0",
		"ts": "2026-08-17T20:21:32.797Z",
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
		"liquidityUsd": 26938467.87,
		"hash": "cfed117aebd09a694d161baa93776ec2961cec222cdfaac160f499fcb6810b43"
	},
	{
		"id": "3aecde9b016b",
		"ts": "2026-08-17T20:21:33.006Z",
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
		"liquidityUsd": 4257684.34,
		"hash": "3aecde9b016b41564655eee346537f90bca1ae7a3ab8cda4a2895b39051d2ca3"
	},
	{
		"id": "c7f7b2b3b11b",
		"ts": "2026-08-17T20:21:33.197Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889564.2,
		"hash": "c7f7b2b3b11b551007c17d7602b6987ff9f8ee6570346650fb2432d5eba5242b"
	},
	{
		"id": "bd598da3141c",
		"ts": "2026-08-17T20:21:33.395Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3966827.78,
		"hash": "bd598da3141c8affb6666cc28508e359387d9ac3e9318365e03472d55eb19af7"
	},
	{
		"id": "eeac53e76fe0",
		"ts": "2026-08-17T20:21:33.595Z",
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
		"liquidityUsd": 1208459.78,
		"hash": "eeac53e76fe00058da75afe90fb3e5a8be3a71069cce1fc586ee6c475dc116bc"
	},
	{
		"id": "8f184de9dd41",
		"ts": "2026-08-17T20:21:33.927Z",
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
		"liquidityUsd": 486905.62,
		"hash": "8f184de9dd41ffbc6b08353b0f5ba3d9c5fac8d467db0bc72adfcc5a0f63f63f"
	},
	{
		"id": "726e45cbd950",
		"ts": "2026-08-17T20:21:34.116Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 402177.65,
		"hash": "726e45cbd950786c9221a5c5ff5f469dc497bd3ca1bf05e2c94ba2f01802f613"
	},
	{
		"id": "adeedaf486bc",
		"ts": "2026-08-17T20:21:34.311Z",
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
		"liquidityUsd": 526995.63,
		"hash": "adeedaf486bcf1806e2e6fab27728082a5ca97cbcafdf5c59f23787940118f08"
	},
	{
		"id": "48dc1bdc1eec",
		"ts": "2026-08-17T20:21:34.510Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 97548.24,
		"hash": "48dc1bdc1eec6353419148f60ea4849edf3ddd691ff8ada975c1a1b154a2c885"
	},
	{
		"id": "d47d2178a837",
		"ts": "2026-08-17T20:21:34.706Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9823839.57,
		"hash": "d47d2178a837d6d64143a1a4eb3ae043727df43c090254306e2647ed7f5ac916"
	},
	{
		"id": "c197be635a63",
		"ts": "2026-08-17T20:21:34.899Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244710.07,
		"hash": "c197be635a63e80110039a5b0f471dd77f29c077370b8cb24d4f7915bccd53b9"
	},
	{
		"id": "7692061a2774",
		"ts": "2026-08-17T20:21:35.089Z",
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
		"liquidityUsd": 43802.85,
		"hash": "7692061a27742722a615163b5e33da12268277da01eebc20130d645cfc4ae064"
	},
	{
		"id": "3cf04d31f98f",
		"ts": "2026-08-17T20:21:35.287Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77310.05,
		"hash": "3cf04d31f98fd1d4adf6f61217f36fa00f0d1fc141063468dc99e10eee860a49"
	},
	{
		"id": "d2a7681fbd57",
		"ts": "2026-08-17T20:21:35.487Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1009647.21,
		"hash": "d2a7681fbd57cc659b5271a5b1e5fd4bcea550d4d80212fdb3ef5a7bf4ee1d03"
	},
	{
		"id": "af28393c468b",
		"ts": "2026-08-17T20:21:35.685Z",
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
		"liquidityUsd": 93779.25,
		"hash": "af28393c468b8381bda16aef487dfe78ef83dc74c24df5d7e2ec1a453c464cb2"
	},
	{
		"id": "823e8a2cb7e0",
		"ts": "2026-08-17T20:21:35.881Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2533389.69,
		"hash": "823e8a2cb7e0c67622f14b69203b077c77357ee0246741780b365c0883c048f4"
	},
	{
		"id": "19890326c2ef",
		"ts": "2026-08-17T20:21:36.081Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3970051.88,
		"hash": "19890326c2ef7b0c125f431107ecc3b5df4e911b3709cca15b58c37bccdc2c1d"
	},
	{
		"id": "cbce9db83d1a",
		"ts": "2026-08-17T19:24:14.625Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112842831.38,
		"hash": "cbce9db83d1a91f57b6e9bb1ac621ba84dd647d80d02fd6aa7e02b8ed1b881ec"
	},
	{
		"id": "7ba4e99857fc",
		"ts": "2026-08-17T19:24:14.881Z",
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
		"liquidityUsd": 17915085.55,
		"hash": "7ba4e99857fc276827cb6205b69e5a74cec987fd74bed77f040946fcaa11719e"
	},
	{
		"id": "dc7d72efe0f8",
		"ts": "2026-08-17T19:24:15.252Z",
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
		"liquidityUsd": 786363.69,
		"hash": "dc7d72efe0f841da727c68c36b0db944d66e976dcafd511735db20d01a48aac2"
	},
	{
		"id": "b427aa4bfc70",
		"ts": "2026-08-17T19:24:15.461Z",
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
		"liquidityUsd": 26992639.01,
		"hash": "b427aa4bfc7043897ee9fc7b659684724fb369ad637f27e54b2bc0754c429937"
	},
	{
		"id": "97344650e0b6",
		"ts": "2026-08-17T19:24:15.666Z",
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
		"liquidityUsd": 4259531.73,
		"hash": "97344650e0b65a3d60ea7151d44c9a27a451c5d864b108f7c6c832476e064917"
	},
	{
		"id": "3a094a5123c4",
		"ts": "2026-08-17T19:24:15.884Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889564.2,
		"hash": "3a094a5123c44abb11146560496f4a5a68b876c9951f7d5cc079a77c3b747484"
	},
	{
		"id": "f86985551528",
		"ts": "2026-08-17T19:24:16.100Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4043456.2,
		"hash": "f869855515283a8966c7631883c0a290a8ec89610093e37b633fb733019878c8"
	},
	{
		"id": "6fde990d0462",
		"ts": "2026-08-17T19:24:16.309Z",
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
		"liquidityUsd": 1209134.63,
		"hash": "6fde990d04622c3936286392f0dd9e24f7f533a194eec1dc01ff768936555cfc"
	},
	{
		"id": "a9dedfd8c441",
		"ts": "2026-08-17T19:24:16.510Z",
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
		"liquidityUsd": 498086.76,
		"hash": "a9dedfd8c441671f26b5c7012836f20062d5b4686e7ab3e955462d9a85e67656"
	},
	{
		"id": "8fafd74aaa66",
		"ts": "2026-08-17T19:24:16.718Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118033.89,
		"hash": "8fafd74aaa663c2a671acde655665fe21e15d566c5c06dd4b7d01fc0a9901507"
	},
	{
		"id": "b980c9b188bf",
		"ts": "2026-08-17T19:24:16.941Z",
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
		"liquidityUsd": 526823.89,
		"hash": "b980c9b188bf2488a8b85f3ea05a3f00c4645a1f78018f7095242d71e93d829a"
	},
	{
		"id": "6e015303d6f4",
		"ts": "2026-08-17T19:24:17.131Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 415646.16,
		"hash": "6e015303d6f4cf19cb569161ebff9b065a818086431da1890825eca499188d1c"
	},
	{
		"id": "6881b2a10787",
		"ts": "2026-08-17T19:24:17.339Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9780468.94,
		"hash": "6881b2a10787d644e4feef539d63d33a9943df563c68057f724df1d6a06d71bc"
	},
	{
		"id": "f95f83d6c793",
		"ts": "2026-08-17T19:24:17.540Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 242294.07,
		"hash": "f95f83d6c79385ab9732c63e10776542f49b2684045a4e257959590635720007"
	},
	{
		"id": "7208c8ec8388",
		"ts": "2026-08-17T19:24:17.878Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1007938.3,
		"hash": "7208c8ec83883a867ab8c5daffd9ada95aa2345cbbf23d89108a8b551e945c1e"
	},
	{
		"id": "523d0a5fea6f",
		"ts": "2026-08-17T19:24:18.067Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 86038.58,
		"hash": "523d0a5fea6fc531a982f36cf789c27c4a97fba17677e74ec32ee01e3caa2858"
	},
	{
		"id": "b628675d513b",
		"ts": "2026-08-17T19:24:18.261Z",
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
		"liquidityUsd": 67769.42,
		"hash": "b628675d513b71e0c3dc8da2557b76ce4fa39d4e61596909c504d727fc123398"
	},
	{
		"id": "92eed6ad57f0",
		"ts": "2026-08-17T19:24:18.468Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2539393.99,
		"hash": "92eed6ad57f04b703d24ef43f7a4aa43494005a1184998ac0570ff94f1c609a2"
	},
	{
		"id": "53506ea6c8c3",
		"ts": "2026-08-17T19:24:18.658Z",
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
		"liquidityUsd": 39678.83,
		"hash": "53506ea6c8c3d7e37af1d5d4ede85e3dde166d062b11822e6c2dbdfa63fe5889"
	},
	{
		"id": "796ce071e939",
		"ts": "2026-08-17T19:24:18.855Z",
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
		"liquidityUsd": 587327.59,
		"hash": "796ce071e9399dc5ce1a4f069d99840e867b3f27368cd4fe81f1b0abdc4b8110"
	},
	{
		"id": "fc5b7db7d660",
		"ts": "2026-08-17T18:32:25.427Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112875116.05,
		"hash": "fc5b7db7d660820d1f3e7332e5103320d4119370415df9ce95d86fa7d26f5f78"
	},
	{
		"id": "b0f2afbf9268",
		"ts": "2026-08-17T18:32:25.666Z",
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
		"liquidityUsd": 13274050.85,
		"hash": "b0f2afbf9268d0d0c98f5f477c0ceada7009c497a8123cb95614d131c86b4342"
	},
	{
		"id": "b2154cd42dde",
		"ts": "2026-08-17T18:32:25.899Z",
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
		"liquidityUsd": 786363.69,
		"hash": "b2154cd42dde10988ee0cbdca7c434e0969e920038b340bfe72bb50ddcacdee8"
	},
	{
		"id": "bb5752e605af",
		"ts": "2026-08-17T18:32:26.164Z",
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
		"liquidityUsd": 27003064.72,
		"hash": "bb5752e605aff1de43cb69ba6694ee7bbf27a738fcd7248fa7f4cacb13a650fd"
	},
	{
		"id": "1ed8504fc4b6",
		"ts": "2026-08-17T18:32:26.392Z",
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
		"liquidityUsd": 4259005.41,
		"hash": "1ed8504fc4b6557eec4543d3533363a189f4ec71c84337404de0c90b774de482"
	},
	{
		"id": "a9b639e798f6",
		"ts": "2026-08-17T18:32:26.628Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889566.03,
		"hash": "a9b639e798f6841c0e9dbd0a3e012d9a8c234536ba673353c70194bbcb73d5b6"
	},
	{
		"id": "11ab42de374f",
		"ts": "2026-08-17T18:32:26.863Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3969089.17,
		"hash": "11ab42de374f0dcc93a9a390d7b0e835c97ebdebdcf7c7cb30282a81936bbd71"
	},
	{
		"id": "55c3662cfaad",
		"ts": "2026-08-17T18:32:27.099Z",
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
		"liquidityUsd": 1210711.79,
		"hash": "55c3662cfaad47de978bf1a224ffff2e276bc80d3ec7fcadcf6e7f524df32ddb"
	},
	{
		"id": "f1fcc1ec1d8a",
		"ts": "2026-08-17T18:32:27.330Z",
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
		"liquidityUsd": 498305.44,
		"hash": "f1fcc1ec1d8a68fa1d3a2e331bd3c04a7dcd8e024f5e4001ba5b1fafc8a929c9"
	},
	{
		"id": "61d82e379721",
		"ts": "2026-08-17T18:32:27.570Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109287.91,
		"hash": "61d82e3797212988ff8e284762ea2614fea8deff8ebc29f72ca969995c332436"
	},
	{
		"id": "f111c7335ceb",
		"ts": "2026-08-17T18:32:27.788Z",
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
		"liquidityUsd": 520377.84,
		"hash": "f111c7335ceb07bc68c2e6ba6c5df4fe342dde6ff458b02e6e85e39079eb76de"
	},
	{
		"id": "f3837b7d720e",
		"ts": "2026-08-17T18:32:28.009Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 413720.55,
		"hash": "f3837b7d720e10bc231b399df2dfda9a7670f765b8ac47b2e7263446c3203d83"
	},
	{
		"id": "73c404b1f326",
		"ts": "2026-08-17T18:32:28.220Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9832846.33,
		"hash": "73c404b1f326a4dc4e36b8bbcec3f79ba8c5b82de050f6902e19f3a0d0cc17d7"
	},
	{
		"id": "839ae404cf04",
		"ts": "2026-08-17T18:32:28.440Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 241860.08,
		"hash": "839ae404cf04a28df65c545d38f0113412b45346d1e2009dd0a8322b77824bbc"
	},
	{
		"id": "f09cd8160fd9",
		"ts": "2026-08-17T18:32:28.659Z",
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
		"liquidityUsd": 37515.05,
		"hash": "f09cd8160fd9e5142cf7d1bc417c03b41b2323a60bb95f091f18676ff0e89467"
	},
	{
		"id": "428e064cf2ae",
		"ts": "2026-08-17T18:32:28.880Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1008717.73,
		"hash": "428e064cf2aeb725b9d120a97e359f24c369a852e508056e72e5aaeaca035dbe"
	},
	{
		"id": "bf4c9564a227",
		"ts": "2026-08-17T18:32:29.091Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 94943.51,
		"hash": "bf4c9564a227a9a688fc0361edcbdca64c06f74499da8ca7d353f66024bcfd25"
	},
	{
		"id": "3d38a4c68641",
		"ts": "2026-08-17T18:32:29.309Z",
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
		"liquidityUsd": 53214.18,
		"hash": "3d38a4c68641d28828c6b33c600ebc72f91607c64c5b2203afa5f60804e9b741"
	},
	{
		"id": "b5814be14c70",
		"ts": "2026-08-17T18:32:29.526Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2565111.59,
		"hash": "b5814be14c703de9b6d84b857aa8d9f601e6b7d0b5934dd09e3647350bb648f6"
	},
	{
		"id": "50c4297a2777",
		"ts": "2026-08-17T18:32:29.747Z",
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
		"liquidityUsd": 583878.41,
		"hash": "50c4297a2777f61a2ee84ad6e406eaecc0b137d0751d689c0d8af957cf1dc5e1"
	},
	{
		"id": "d95dd82842a1",
		"ts": "2026-08-17T17:23:21.553Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111744605.2,
		"hash": "d95dd82842a111b779dc2f5027dbdb1233a39b8fa7c362ea02fb1dfa623fb82e"
	},
	{
		"id": "25638b647e64",
		"ts": "2026-08-17T17:23:22.041Z",
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
		"liquidityUsd": 13079346.89,
		"hash": "25638b647e6464b1ac44ad041335865b7e50b28b48a467d870b8b16f6b5cc835"
	},
	{
		"id": "ce11c84f09a7",
		"ts": "2026-08-17T17:23:22.305Z",
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
		"liquidityUsd": 786363.69,
		"hash": "ce11c84f09a7d0ecaee7c04bd2d596d22aae4fc843617254ca3dc8749e5966e0"
	},
	{
		"id": "68725b1b18b0",
		"ts": "2026-08-17T17:23:22.569Z",
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
		"liquidityUsd": 27036359.45,
		"hash": "68725b1b18b0d5ea9c1458102dce689979f97a1f9fb20d3adf8821acbd73c4a6"
	},
	{
		"id": "38b19c24ef16",
		"ts": "2026-08-17T17:23:22.831Z",
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
		"liquidityUsd": 4269424.13,
		"hash": "38b19c24ef16f2c0b3acf1f7ef2a99568eb7fdf3c16511166a0049273ba65543"
	},
	{
		"id": "9620b735e42c",
		"ts": "2026-08-17T17:23:23.092Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890725.61,
		"hash": "9620b735e42cc8685ffcf46d1a7fc33c280df12c7b4a0c20d5a480ea1ae895eb"
	},
	{
		"id": "50c17a207058",
		"ts": "2026-08-17T17:23:23.349Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4138209.37,
		"hash": "50c17a2070582e42f5ffa5bcd6f8d6d0b967143f46b69b23c605ba2d09d4343f"
	},
	{
		"id": "200b35eb53ec",
		"ts": "2026-08-17T17:23:23.610Z",
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
		"liquidityUsd": 1212703.14,
		"hash": "200b35eb53ec51886d528ce560a356814332ac52f0d778955baadaa3e39ac591"
	},
	{
		"id": "c51ea06aa5ce",
		"ts": "2026-08-17T17:23:23.913Z",
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
		"liquidityUsd": 480027.07,
		"hash": "c51ea06aa5ce8c5af562ea4b238944286ae8399ac2f33e9642494392af719e08"
	},
	{
		"id": "eb12ea7ef85f",
		"ts": "2026-08-17T17:23:24.176Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 89839.52,
		"hash": "eb12ea7ef85f9d6402a67153ba84a8b17bdb3ecb7c6189bb13a06b3138f6dcaa"
	},
	{
		"id": "b74cd2511e27",
		"ts": "2026-08-17T17:23:24.420Z",
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
		"liquidityUsd": 535578.21,
		"hash": "b74cd2511e279c5f0d32963b5e6340aa99670a51ef7ac1e44f239a9d0c7296af"
	},
	{
		"id": "6f94c7b90b45",
		"ts": "2026-08-17T17:23:24.667Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 414800.98,
		"hash": "6f94c7b90b45fec72112357fdac65f16f735cbc2aafb1c31bb96697dc18a79a3"
	},
	{
		"id": "4d6304795b2b",
		"ts": "2026-08-17T17:23:24.912Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 242026.98,
		"hash": "4d6304795b2bda29852c19d169cb9b1782685dfce0e463141dc0a73c702e55b3"
	},
	{
		"id": "b8cd90fafea3",
		"ts": "2026-08-17T17:23:25.156Z",
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
		"liquidityUsd": 44589.86,
		"hash": "b8cd90fafea394406d39b81af4c974c2217ea2ab289e7a226d8e30dd3778c69d"
	},
	{
		"id": "ec6eb9be7f5b",
		"ts": "2026-08-17T17:23:25.402Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9876523.53,
		"hash": "ec6eb9be7f5bbacf6c2f12dfe149831664b9c6be0ad137cc3e411d48cf995c7d"
	},
	{
		"id": "aef204824dc7",
		"ts": "2026-08-17T17:23:25.644Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1012707.62,
		"hash": "aef204824dc75a23e7443b4b3d2e6357db05ab5d31f9c24fccdc43e3a333ad66"
	},
	{
		"id": "3314b023d760",
		"ts": "2026-08-17T17:23:25.885Z",
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
		"liquidityUsd": 57263.89,
		"hash": "3314b023d760a0652a81ea0fde197a934c2d92e12d6082c329a61b9dc7590a2d"
	},
	{
		"id": "6ce95264dee6",
		"ts": "2026-08-17T17:23:26.128Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2580702.89,
		"hash": "6ce95264dee631b9c430bc530aca4d55ab94c5e4ac01fec6ff65097282d551e7"
	},
	{
		"id": "a2561f19aa8f",
		"ts": "2026-08-17T17:23:26.373Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 94500.29,
		"hash": "a2561f19aa8f7ecd1e00ba9096ac3896d369bfc60458d153e02ad8498da9bc2c"
	},
	{
		"id": "7c14e8142842",
		"ts": "2026-08-17T17:23:26.626Z",
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
		"liquidityUsd": 607480.93,
		"hash": "7c14e814284241a36d031e2f759bd50b56fc0d651ef62f8b1c8d14036338083e"
	},
	{
		"id": "e1dc85674f86",
		"ts": "2026-08-17T16:22:07.953Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111743659.7,
		"hash": "e1dc85674f863e04b3ae4686f690ae68e0e07a8bf349b90c2088f8c639d70294"
	},
	{
		"id": "039afecf0bc2",
		"ts": "2026-08-17T16:22:08.245Z",
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
		"liquidityUsd": 15111538.43,
		"hash": "039afecf0bc24ca4890dffb2789722f3b2e297c45352ba553fa68c8d70c453d7"
	},
	{
		"id": "dc39c3603c4b",
		"ts": "2026-08-17T16:22:08.438Z",
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
		"liquidityUsd": 795429.95,
		"hash": "dc39c3603c4b4faf9f3cf4eb9940915f25832ee21451a7a5d88b66e9e5011d5d"
	},
	{
		"id": "29ec2f594caa",
		"ts": "2026-08-17T16:22:08.641Z",
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
		"liquidityUsd": 27165053.13,
		"hash": "29ec2f594caa36c83bb962c8fab9fce169c612590914719b0490fe556ed8823f"
	},
	{
		"id": "4bedc123f561",
		"ts": "2026-08-17T16:22:09.005Z",
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
		"liquidityUsd": 4270058.43,
		"hash": "4bedc123f561acdaf323e00e92d3f5406c97a73c35bc57a936b0a0ad7611672a"
	},
	{
		"id": "0cad239f46e5",
		"ts": "2026-08-17T16:22:09.220Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890726.5,
		"hash": "0cad239f46e57b6d3bc7eddee940869b8a33149d303b3e3509c9dd3a69c78c1d"
	},
	{
		"id": "90dc5bc8cd10",
		"ts": "2026-08-17T16:22:09.407Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4106691.87,
		"hash": "90dc5bc8cd10846980b1cbc6e8c42d60032a9d8816fcf89b2185471f03a0246e"
	},
	{
		"id": "91ce7dd0109b",
		"ts": "2026-08-17T16:22:09.635Z",
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
		"liquidityUsd": 1210213.62,
		"hash": "91ce7dd0109bba15159db59e9d99d1df2ce43c2524b88a460695a9dc73b2a0c0"
	},
	{
		"id": "5c5c5ea0ab39",
		"ts": "2026-08-17T16:22:09.825Z",
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
		"liquidityUsd": 457892.82,
		"hash": "5c5c5ea0ab394fd295554465b176e42783f77bb6d73881a8ca78b5e73e08fce5"
	},
	{
		"id": "4e5c9dd35527",
		"ts": "2026-08-17T16:22:10.018Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 96372.99,
		"hash": "4e5c9dd35527259630575362424592f9d40222f435f40f2d3a343f8d7850f752"
	},
	{
		"id": "aacd19ef8057",
		"ts": "2026-08-17T16:22:10.199Z",
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
		"liquidityUsd": 44260.27,
		"hash": "aacd19ef80572aa2a429c0bbe3972ed0608089e0bc3f1c287da670d591ad9065"
	},
	{
		"id": "71ae6e7a4892",
		"ts": "2026-08-17T16:22:10.399Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 421311.28,
		"hash": "71ae6e7a4892b4d2f0660280ce7a513da6a8b6f5b62692e0a0e03b47da1567a4"
	},
	{
		"id": "83caeb2a4fe4",
		"ts": "2026-08-17T16:22:10.584Z",
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
		"liquidityUsd": 537407.61,
		"hash": "83caeb2a4fe4cbb8c099c121f0de0d69b45ce34f62bba4cdbc1a9ad82f6427c0"
	},
	{
		"id": "55cea0a30d37",
		"ts": "2026-08-17T16:22:10.771Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 240541.79,
		"hash": "55cea0a30d370d7239491ee00819688ed84256ebf1dabdb9b22d5d4a33d638bc"
	},
	{
		"id": "ce546fa6e10f",
		"ts": "2026-08-17T16:22:10.945Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1005610.4,
		"hash": "ce546fa6e10fdf0aca9d8a8edc9f7d2b10accd08065c467ab852a400cef10d7e"
	},
	{
		"id": "fc50e17a04cd",
		"ts": "2026-08-17T16:22:11.147Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9815989.29,
		"hash": "fc50e17a04cd95ce08034fc80173d3efe4d860512ee94038038b08887f04f9ab"
	},
	{
		"id": "8f03af76051d",
		"ts": "2026-08-17T16:22:11.331Z",
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
		"liquidityUsd": 54609.2,
		"hash": "8f03af76051d95ca305fd2d37de8187ccea91cce8da57007eb915da91c729321"
	},
	{
		"id": "e120822103de",
		"ts": "2026-08-17T16:22:11.583Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2617279.67,
		"hash": "e120822103de3dd4c9fba9483b1a36d7f4b3bb68dc741008ee511681bbc270fe"
	},
	{
		"id": "f9ad538ef83c",
		"ts": "2026-08-17T16:22:11.784Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 92721.88,
		"hash": "f9ad538ef83ceba51ef1083d21a608807e50db20577a4ab53cbd583068e4c902"
	},
	{
		"id": "92907c58003c",
		"ts": "2026-08-17T16:22:11.988Z",
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
		"liquidityUsd": 614924.55,
		"hash": "92907c58003c423542ef1dd2988145da881888a04c1fd3e44b99143b70c94bce"
	},
	{
		"id": "27fe35a46eb9",
		"ts": "2026-08-17T15:20:48.268Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111675434.51,
		"hash": "27fe35a46eb96ea34dfb6f6fa158b11068536cf2661ced653b9af1d65ea6df8e"
	},
	{
		"id": "c0a205a3f2c9",
		"ts": "2026-08-17T15:20:48.703Z",
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
		"liquidityUsd": 15969439.05,
		"hash": "c0a205a3f2c93ecc1aa4c5c2557549b1c8ab12b1a1d84a2954a26d879ef79841"
	},
	{
		"id": "676131eb4344",
		"ts": "2026-08-17T15:20:48.942Z",
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
		"liquidityUsd": 797158.49,
		"hash": "676131eb4344c05a0437840aabd4e67806e99fadd452db8994f53e393f9b6b2b"
	},
	{
		"id": "cebc0a7b3964",
		"ts": "2026-08-17T15:20:49.369Z",
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
		"liquidityUsd": 27143042.74,
		"hash": "cebc0a7b3964c495c5ae3d976c6eb71e88fe70fa831b485556d6e957ab33a242"
	},
	{
		"id": "f47f81c91876",
		"ts": "2026-08-17T15:20:49.602Z",
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
		"liquidityUsd": 4236552.73,
		"hash": "f47f81c91876421927d9d780b79b7a184d2da9a864806dc9a179870955bfa484"
	},
	{
		"id": "3f38139324a0",
		"ts": "2026-08-17T15:20:49.842Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889686.1,
		"hash": "3f38139324a044f6b19bacd8c40bbe27f3f1f6089fcc219c44a0612c755be165"
	},
	{
		"id": "1b1caaf810ce",
		"ts": "2026-08-17T15:20:50.067Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4469084.95,
		"hash": "1b1caaf810ce563ccf4c04d46dde661d7fd882295cb3f568b56a9774863d0d49"
	},
	{
		"id": "8e205091ab92",
		"ts": "2026-08-17T15:20:50.308Z",
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
		"liquidityUsd": 1351772.37,
		"hash": "8e205091ab923df42b5cfda2c1fe405618e5303873665174dc831d91578787fb"
	},
	{
		"id": "73b1024b13a3",
		"ts": "2026-08-17T15:20:50.555Z",
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
		"liquidityUsd": 539980.17,
		"hash": "73b1024b13a326a0a180f8b06508b06b3993e2a501753f300dfdb95064f5edec"
	},
	{
		"id": "39e123f623ca",
		"ts": "2026-08-17T15:20:50.783Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 138353.93,
		"hash": "39e123f623ca66d05e360e5becf11dd097199b96f12e202a0ab4d245fb07ac93"
	},
	{
		"id": "d05cc180e24a",
		"ts": "2026-08-17T15:20:50.999Z",
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
		"liquidityUsd": 56839.97,
		"hash": "d05cc180e24a2294f7c6f6e0e958089e6e9a55ab82fd117f94dc670680c02b43"
	},
	{
		"id": "484dda567379",
		"ts": "2026-08-17T15:20:51.222Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 424552.66,
		"hash": "484dda56737987709ccb742054f0ad7a3438b4c52693d9b3c7bd3c830ea46c8d"
	},
	{
		"id": "0734572b7eb7",
		"ts": "2026-08-17T15:20:51.434Z",
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
		"liquidityUsd": 568465.78,
		"hash": "0734572b7eb7c467e083a9ecbb2d3cead82810ba998ab88e8050e37f2a4b1ad2"
	},
	{
		"id": "8bda457585e7",
		"ts": "2026-08-17T15:20:52.310Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 239363.84,
		"hash": "8bda457585e7cb740e28244553a679a4abb77989b1be5987a6e059466ecb650a"
	},
	{
		"id": "7bd97eff1bc2",
		"ts": "2026-08-17T15:20:52.532Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1004237.8,
		"hash": "7bd97eff1bc26624b32f4ffddf3d3a525e40ba2ad134c691cb22dfbab7ab6de4"
	},
	{
		"id": "03735de1c7ca",
		"ts": "2026-08-17T15:20:52.745Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9606024.4,
		"hash": "03735de1c7ca040f97382fb3f32c77ac17cadbc6a27d108d953d850895bf65d9"
	},
	{
		"id": "4333002b4cb9",
		"ts": "2026-08-17T15:20:52.966Z",
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
		"liquidityUsd": 65170.31,
		"hash": "4333002b4cb96987a5372f9f4f7538ade951085055513406144007a05ec04297"
	},
	{
		"id": "611feab0e137",
		"ts": "2026-08-17T15:20:53.179Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2598007.28,
		"hash": "611feab0e13706c8342f4cb995ac9bd6d2a7aea79c3ed08685997bcbb37fd4e3"
	},
	{
		"id": "3a2eb2153810",
		"ts": "2026-08-17T15:20:53.395Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4469084.95,
		"hash": "3a2eb215381097a2cd2713bf63f7607d760d224929b205a44d192e5d8a165f53"
	},
	{
		"id": "9e152f0dc02b",
		"ts": "2026-08-17T15:20:53.618Z",
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
		"liquidityUsd": 603909.15,
		"hash": "9e152f0dc02b8c7098f1daa8877d7acc9c4e02a18f52f2ef838e3531191cf25c"
	},
	{
		"id": "a30a3fea5875",
		"ts": "2026-08-17T14:22:55.791Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111417032.3,
		"hash": "a30a3fea587539832d2e6e3f733a0891e0b3b6eec3c02865afde773eba6b1278"
	},
	{
		"id": "cd6dea2b3d5a",
		"ts": "2026-08-17T14:22:56.236Z",
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
		"liquidityUsd": 18118177.23,
		"hash": "cd6dea2b3d5ad248b25e20cc77f2d33e6f6a028c20698ef422b9eeb9fa15187d"
	},
	{
		"id": "63c8bd478aeb",
		"ts": "2026-08-17T14:22:56.467Z",
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
		"liquidityUsd": 800150.26,
		"hash": "63c8bd478aebf8b8bdc74f72783637ffd4924b2df3cc30548289cb491d89ea0d"
	},
	{
		"id": "d2f5728c6214",
		"ts": "2026-08-17T14:22:56.701Z",
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
		"liquidityUsd": 27161373.78,
		"hash": "d2f5728c62142039b91be54a67396d07955f4ff6c4fb196a54c852d35faeca44"
	},
	{
		"id": "2ae191beb019",
		"ts": "2026-08-17T14:22:56.948Z",
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
		"liquidityUsd": 4228725.62,
		"hash": "2ae191beb019fbde89e2b68b71451cc2f0d980b7f85a64da8e9153901543bbd2"
	},
	{
		"id": "adb724b96f84",
		"ts": "2026-08-17T14:22:57.184Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 892290.12,
		"hash": "adb724b96f844cf405a2a43cd69a9b79d051fa3bd4ecfec84f64f784a6d3c91f"
	},
	{
		"id": "f94611e66a51",
		"ts": "2026-08-17T14:22:57.407Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4592795.09,
		"hash": "f94611e66a51a097a9168a279b5d697dbea6684894812d8c4683616a0d9faa88"
	},
	{
		"id": "f45e0d1378f5",
		"ts": "2026-08-17T14:22:57.653Z",
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
		"liquidityUsd": 3601354.24,
		"hash": "f45e0d1378f5b7a4a919521b28c39c200993c4aa8cd56ea478f5db84f7ac84d5"
	},
	{
		"id": "95f09ed5a9bf",
		"ts": "2026-08-17T14:22:57.895Z",
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
		"liquidityUsd": 490808.32,
		"hash": "95f09ed5a9bf7641037000f314cc70656807b144c52255c40180e09d0d7d27f6"
	},
	{
		"id": "54f6314e3903",
		"ts": "2026-08-17T14:22:58.117Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140934.37,
		"hash": "54f6314e3903d21c133cf80cc95f4b657939f605ed62a4cf883b55f7cd060c07"
	},
	{
		"id": "1900aa26389a",
		"ts": "2026-08-17T14:22:58.328Z",
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
		"liquidityUsd": 72958.11,
		"hash": "1900aa26389afbc7d858dfc977a9ef2a9fe0ba1e6f93a94b84dd4e0615791ab6"
	},
	{
		"id": "56bba7bc6ada",
		"ts": "2026-08-17T14:22:58.557Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 427341.48,
		"hash": "56bba7bc6ada4c19002410e9e976c7393ad3c2e5d6f83b06c2cc8324c68d3cd2"
	},
	{
		"id": "5d140b0075a4",
		"ts": "2026-08-17T14:22:58.776Z",
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
		"liquidityUsd": 580787.35,
		"hash": "5d140b0075a4d06d0913459ac4df5ceeabad2e053405f4037de4b09f036c3b36"
	},
	{
		"id": "d241403b9dee",
		"ts": "2026-08-17T14:22:58.985Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 999041.5,
		"hash": "d241403b9dee210fe31cf38987fe80a65b9a29e1735505366e2aae61deb2b5e1"
	},
	{
		"id": "da0cb6816b0f",
		"ts": "2026-08-17T14:22:59.204Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9580621.86,
		"hash": "da0cb6816b0f2ef85fde41b3a9566f48e208f9cd46ffba5fef67a012baf00d1c"
	},
	{
		"id": "0225bedadc2c",
		"ts": "2026-08-17T14:22:59.427Z",
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
		"liquidityUsd": 60770.26,
		"hash": "0225bedadc2c73be0561f2198719ec02d68a6cb736785f6950c5b6f7d3b06f5e"
	},
	{
		"id": "ccfc17e64b18",
		"ts": "2026-08-17T14:22:59.647Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 241604.86,
		"hash": "ccfc17e64b1867a1c49902e7bad99fa80ed591ae1779abfe3c529eee7b4591ea"
	},
	{
		"id": "b25ea36fb811",
		"ts": "2026-08-17T14:22:59.857Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4602582.56,
		"hash": "b25ea36fb811008132e54b220784b8c598141eb5410b7bc466596e07e579ff2d"
	},
	{
		"id": "eecb13e705ec",
		"ts": "2026-08-17T14:23:00.074Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2612786.76,
		"hash": "eecb13e705ec2402e63768e089d6fa665baeefe0314d41f9af79c34c67efaee9"
	},
	{
		"id": "12a8a594a9f2",
		"ts": "2026-08-17T14:23:00.324Z",
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
		"liquidityUsd": 643720.55,
		"hash": "12a8a594a9f2ff20a83559fe069f5ba99920533d0dd6caac8d136906d102c215"
	},
	{
		"id": "ee41a825629b",
		"ts": "2026-08-17T13:36:12.631Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111562072.26,
		"hash": "ee41a825629b6888a78ca094406eb802a3a282717925db73cc07165ae8a3778a"
	},
	{
		"id": "5a52d51e78fa",
		"ts": "2026-08-17T13:36:13.070Z",
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
		"liquidityUsd": 19118180.33,
		"hash": "5a52d51e78fa6074af899f955a6de99bbd7315e4db1aaab93d6eb40e295fffe7"
	},
	{
		"id": "63732ed6a38f",
		"ts": "2026-08-17T13:36:13.323Z",
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
		"liquidityUsd": 800876.63,
		"hash": "63732ed6a38fe458f0c182c72ea206eadf831b039b9c0eab746513a328119554"
	},
	{
		"id": "11bba41fc257",
		"ts": "2026-08-17T13:36:13.572Z",
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
		"liquidityUsd": 27126596.91,
		"hash": "11bba41fc257407d433cff0a6d78a28c445af682689d0b594c9223bfc397a520"
	},
	{
		"id": "b777e6a4c1d9",
		"ts": "2026-08-17T13:36:13.820Z",
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
		"liquidityUsd": 4214456.32,
		"hash": "b777e6a4c1d931720a904c9891b86e5eb2e6feeaa1be979a86007098a9bf1bad"
	},
	{
		"id": "78e171658fe4",
		"ts": "2026-08-17T13:36:14.059Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889612.92,
		"hash": "78e171658fe49f4fc2bae940afdd2f0eb76f5b957fe042b47225714f2067a34a"
	},
	{
		"id": "2bbf92fa49c0",
		"ts": "2026-08-17T13:36:14.297Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4620833.83,
		"hash": "2bbf92fa49c00e51512f28facb5749ecd469fe16f39740e76898c785e574c02a"
	},
	{
		"id": "fbfe40720914",
		"ts": "2026-08-17T13:36:14.559Z",
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
		"liquidityUsd": 3596760.95,
		"hash": "fbfe407209140ad11a8e05b49001bc6fb17fa51183c55c6789476ac515ab64d5"
	},
	{
		"id": "c81342c0d140",
		"ts": "2026-08-17T13:36:14.895Z",
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
		"liquidityUsd": 84277.34,
		"hash": "c81342c0d1406b236ea6f232f7df3eefdcea6b5c7e7a8b9c79ea35d6a1908f5d"
	},
	{
		"id": "e499278be349",
		"ts": "2026-08-17T13:36:15.192Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 71994.49,
		"hash": "e499278be3493815979cb64a6632ddfaf5e884f27f32a612258d1f0b8ac33f5e"
	},
	{
		"id": "3980fe6f00c7",
		"ts": "2026-08-17T13:36:15.417Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 507427.17,
		"hash": "3980fe6f00c7b06ae0a7bfa60b98dd682d12fe52e02b4b2b48fb478822ab8c14"
	},
	{
		"id": "75bb1ca69cc0",
		"ts": "2026-08-17T13:36:15.643Z",
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
		"liquidityUsd": 1514022.49,
		"hash": "75bb1ca69cc0c05124330e455f07eca5868d4997cf4a0fc2e66b250ed09d947d"
	},
	{
		"id": "22a1a2c60cba",
		"ts": "2026-08-17T13:36:15.887Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 703977.69,
		"hash": "22a1a2c60cba49a75f9e23f49f0a16356ead4e9cdf8d774f495cd1bb6e9f5855"
	},
	{
		"id": "ec30fad18789",
		"ts": "2026-08-17T13:36:16.115Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4599648.17,
		"hash": "ec30fad18789ab938890d7001d10869bb08a77abbd723c06ae00e351c4f65890"
	},
	{
		"id": "352c3e1e412f",
		"ts": "2026-08-17T13:36:16.337Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 995106.91,
		"hash": "352c3e1e412f809ee1b25ed8a2b2a350a77d061e69e686e0400bb36b2c9e9873"
	},
	{
		"id": "a45583c6e0a3",
		"ts": "2026-08-17T13:36:16.560Z",
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
		"liquidityUsd": 77996,
		"hash": "a45583c6e0a30c466dd8f9619849d89a793b0f1b9c45ebed0308c5a7fcc1e3e4"
	},
	{
		"id": "48e81d0b29ac",
		"ts": "2026-08-17T13:36:16.782Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9607231.76,
		"hash": "48e81d0b29ac415883e300f831b1a3cbc0c38cda525f3a9e0cedd79ce4bd171a"
	},
	{
		"id": "ce66839d2ca3",
		"ts": "2026-08-17T13:36:17.006Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244167.35,
		"hash": "ce66839d2ca3895c820e942f8ac2a7e7f86fab1b5bcd501eb95a68808335fc2e"
	},
	{
		"id": "ce177daa5387",
		"ts": "2026-08-17T13:36:17.227Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2608454.69,
		"hash": "ce177daa5387d6daa8234ecb66fb247707d88820c15338a7d1bc5762d60f2542"
	},
	{
		"id": "f5e10ad12042",
		"ts": "2026-08-17T13:36:17.450Z",
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
		"liquidityUsd": 631056.27,
		"hash": "f5e10ad12042b9cbbd307d9fe6cdf26412ff8a7f6a824d54bd1d213b3bc64df1"
	},
	{
		"id": "13dd6fee954e",
		"ts": "2026-08-17T12:35:39.692Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111638660.24,
		"hash": "13dd6fee954e01aefb2392490edb377122b7258e4f1e2e314b425912df2d0420"
	},
	{
		"id": "f4684aedbac6",
		"ts": "2026-08-17T12:35:40.114Z",
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
		"liquidityUsd": 18437900.08,
		"hash": "f4684aedbac6ab57461133a7195b71ecedd1dfde1731c7e8d6b92355a8cb4f85"
	},
	{
		"id": "39a268d8f07a",
		"ts": "2026-08-17T12:35:40.343Z",
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
		"liquidityUsd": 799274.44,
		"hash": "39a268d8f07a3a581c65660500f7b40ae9697b7f66edd73d785b76133c4f1312"
	},
	{
		"id": "a1b571f95334",
		"ts": "2026-08-17T12:35:40.573Z",
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
		"liquidityUsd": 27028944.78,
		"hash": "a1b571f953347f4849b583681fb11c78836ed6bbe26289c8c76993deade9b570"
	},
	{
		"id": "c380e11a40ec",
		"ts": "2026-08-17T12:35:40.830Z",
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
		"liquidityUsd": 4187758.99,
		"hash": "c380e11a40ecc5d5c4e4d957ded55272a4f8f220af7d44f5710d2db432bffbe3"
	},
	{
		"id": "e70723277552",
		"ts": "2026-08-17T12:35:41.110Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894708.9,
		"hash": "e7072327755234777d6733ef929b7d7224f905193a8e4a2debfe6f6783110be7"
	},
	{
		"id": "760c9d4c9f74",
		"ts": "2026-08-17T12:35:41.331Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4581304.58,
		"hash": "760c9d4c9f748c1db94c8d96957a7446edbbc17b8e024d2bb91850f2532e295f"
	},
	{
		"id": "cc5b9f0eb0c2",
		"ts": "2026-08-17T12:35:41.556Z",
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
		"liquidityUsd": 3305298.91,
		"hash": "cc5b9f0eb0c2f6a79fb3107fc83bc4ab8f4ea924a06c9687dc0e69c6209cb5cb"
	},
	{
		"id": "7975f453f526",
		"ts": "2026-08-17T12:35:41.783Z",
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
		"liquidityUsd": 92954.57,
		"hash": "7975f453f526fb14319431e3991e022cc187c8b3663c51d6e250aa09335dafd3"
	},
	{
		"id": "5ff5ad490f6f",
		"ts": "2026-08-17T12:35:42.006Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 75421.66,
		"hash": "5ff5ad490f6f687fa46a659ae51df254acb3f046f05d76ba45a02cb46d2bd3bc"
	},
	{
		"id": "b766a92f217a",
		"ts": "2026-08-17T12:35:42.216Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 428895.09,
		"hash": "b766a92f217ae75ecaed490e1fc14bd2f30d6a80327c285d87164408f390118a"
	},
	{
		"id": "b557ba8d1fc0",
		"ts": "2026-08-17T12:35:42.427Z",
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
		"liquidityUsd": 1483895.07,
		"hash": "b557ba8d1fc07b9f3e2749f52eac86f9fd11be610f23ebeea9025c75bcd05f92"
	},
	{
		"id": "533ba66cf460",
		"ts": "2026-08-17T12:35:42.635Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 704691.48,
		"hash": "533ba66cf4609989c0499a78426b2797ac83ef38572a74509e8dd637f32933df"
	},
	{
		"id": "e8910b1764b4",
		"ts": "2026-08-17T12:35:42.845Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4581304.58,
		"hash": "e8910b1764b41f03aab179fa29e04242dadd6a67536b18062ef2ead2cfa63209"
	},
	{
		"id": "60894f5335c8",
		"ts": "2026-08-17T12:35:43.054Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 994763.47,
		"hash": "60894f5335c8b9fbb499df19263c913a6f520c3dcd0133eb32a76b64d38004a0"
	},
	{
		"id": "528454aac82b",
		"ts": "2026-08-17T12:35:43.262Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9612202.37,
		"hash": "528454aac82b663fb2f2fd5ff2bebfd4fa9d5a222f73c77d1535d0e6f7eadfc0"
	},
	{
		"id": "34958b092921",
		"ts": "2026-08-17T12:35:43.471Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246368.73,
		"hash": "34958b0929211f4a12e16bd355fe45873ea1faf9181a3fcb0145ddc3b0acbb6b"
	},
	{
		"id": "3dee2d98bfa3",
		"ts": "2026-08-17T12:35:43.681Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2576564.51,
		"hash": "3dee2d98bfa3178db6fc69cad052fb1951c5415b865b96d38bf7c72378cd07e2"
	},
	{
		"id": "f5df58660278",
		"ts": "2026-08-17T12:35:43.890Z",
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
		"liquidityUsd": 639518.03,
		"hash": "f5df586602780118227a8e265526a87f48f90ba3bc65e3174505f34b7bf946c2"
	},
	{
		"id": "28a745337cea",
		"ts": "2026-08-17T11:20:38.467Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111650343.65,
		"hash": "28a745337cea800b6a5c7a3c5806c929545d629568634d307b1ffcf9e984e62a"
	}
]
