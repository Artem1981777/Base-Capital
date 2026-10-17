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
	"updatedAt": "2026-10-17T20:02:05.467Z",
	"tokensScored": 20536,
	"verdictsIssued": 20536,
	"safe": 17502,
	"risky": 1458,
	"likelyRug": 1576,
	"ticks": 1161
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "cb5c733d8c56",
		"ts": "2026-10-17T20:01:59.676Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146229956.6,
		"hash": "cb5c733d8c563086d5b5cd92e909df91a5e5d1db0de09c879ca4636992b1449a"
	},
	{
		"id": "872ec5de95d1",
		"ts": "2026-10-17T20:02:00.163Z",
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
		"liquidityUsd": 18237675.07,
		"hash": "872ec5de95d1fa5de5e4df409412e1d91808559f1f1cb58de5bd11865e52c3c1"
	},
	{
		"id": "6d3169e469e4",
		"ts": "2026-10-17T20:02:00.445Z",
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
		"liquidityUsd": 763710.98,
		"hash": "6d3169e469e4541e87f4a3f290fd08bf710605c1c9824cf59dfe18e21f58248b"
	},
	{
		"id": "779888357888",
		"ts": "2026-10-17T20:02:00.709Z",
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
		"liquidityUsd": 43101171.46,
		"hash": "77988835788887e659a8f1fbba6b45f14feba03d062a798c6787397e43852127"
	},
	{
		"id": "f57c3d02bdd1",
		"ts": "2026-10-17T20:02:00.962Z",
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
		"liquidityUsd": 4641861.77,
		"hash": "f57c3d02bdd15f0673358f93a06006ca619460aab6f2dba234c9242319e67ea5"
	},
	{
		"id": "b07da78b167b",
		"ts": "2026-10-17T20:02:01.232Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1138430.95,
		"hash": "b07da78b167bbb78a50def626b1adec2570760934aec5c1a502f9f331606d7c9"
	},
	{
		"id": "c08e1cfe0845",
		"ts": "2026-10-17T20:02:01.876Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43101171.46,
		"hash": "c08e1cfe08454102660d8afe1c6543a10f29687fca18465d3a07ba700aee3e75"
	},
	{
		"id": "bd81bff28aad",
		"ts": "2026-10-17T20:02:02.132Z",
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
		"liquidityUsd": 2917258.45,
		"hash": "bd81bff28aadc252691f044180029470c5518e3814873bc333469501401c33e2"
	},
	{
		"id": "bfaa62f85f28",
		"ts": "2026-10-17T20:02:02.457Z",
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
		"liquidityUsd": 1742840.96,
		"hash": "bfaa62f85f28a1b65db5e0e6231b685f089bfbdc9b6d457d1909770c079c5b23"
	},
	{
		"id": "007bc00f9e27",
		"ts": "2026-10-17T20:02:02.713Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3295777.2,
		"hash": "007bc00f9e27db4d3de29a6ebb003329d905612461b8078844316ad19737c3b9"
	},
	{
		"id": "fd699900a7ac",
		"ts": "2026-10-17T20:02:03.217Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 4422591.89,
		"hash": "fd699900a7ac582f1a7b3dbf1d2e555392b892ef0d5445792d122d3f94a81b97"
	},
	{
		"id": "499615892b99",
		"ts": "2026-10-17T20:02:03.857Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1346905.35,
		"hash": "499615892b9981578267ec9851f3758ae76546006756066173352541bd1b6bda"
	},
	{
		"id": "c15507349509",
		"ts": "2026-10-17T20:02:04.086Z",
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
		"liquidityUsd": 16924218.57,
		"hash": "c15507349509fca81726be036abbf4b8e59b17a780c682b45ad2a6ffebfc57e0"
	},
	{
		"id": "dc51d3e6a914",
		"ts": "2026-10-17T20:02:04.310Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 220979.83,
		"hash": "dc51d3e6a91453f23022352adee1ca8089585f8e4dc78a6b0cf48e71a42e843b"
	},
	{
		"id": "31ca4a4419a6",
		"ts": "2026-10-17T20:02:04.547Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 191299.69,
		"hash": "31ca4a4419a663721aa1adbcf76629cda31fac8469fa5c3ea2ad118a52d8ff8e"
	},
	{
		"id": "2a34e8bdd4eb",
		"ts": "2026-10-17T20:02:04.775Z",
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
		"liquidityUsd": 1064630.68,
		"hash": "2a34e8bdd4eb2c3b9c66ecfdc9bf5ab419f9a89094e773eba1165b4d4791c9ef"
	},
	{
		"id": "6e1c33f5feeb",
		"ts": "2026-10-17T20:02:05.008Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 96162.49,
		"hash": "6e1c33f5feeba77da2edb98e9c3ec97e57b4ce73ddee38eab1329fc63310d37d"
	},
	{
		"id": "e804b2dfb21f",
		"ts": "2026-10-17T20:02:05.234Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4112508.56,
		"hash": "e804b2dfb21ffb3c9b0e0af4dd535c9eace9439fcc4b8a54fba6013fa1066bfe"
	},
	{
		"id": "12bc6a235cb9",
		"ts": "2026-10-17T20:02:05.466Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 480195.82,
		"hash": "12bc6a235cb99ec968fa8b83259aa13fe8982e7195ed4d9152a195dd9cda63bb"
	},
	{
		"id": "ff77b0c58ff6",
		"ts": "2026-10-17T17:44:14.219Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145896152.3,
		"hash": "ff77b0c58ff625335a1b02e72fe78916b2bab974e11f6a7333def1e43db0c79f"
	},
	{
		"id": "b0cd4149aaf6",
		"ts": "2026-10-17T17:44:14.499Z",
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
		"liquidityUsd": 18874767.93,
		"hash": "b0cd4149aaf6e7260cd5b4066e537992b4279b063e711eed967c4b8daee7ccf3"
	},
	{
		"id": "26b775427d93",
		"ts": "2026-10-17T17:44:14.768Z",
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
		"liquidityUsd": 770296.95,
		"hash": "26b775427d93f43fa03a69bfa67ccbc67eeb66b182f3708ec00124f25264667b"
	},
	{
		"id": "cee7ab59f6e1",
		"ts": "2026-10-17T17:44:15.043Z",
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
		"liquidityUsd": 42083829.95,
		"hash": "cee7ab59f6e177c30bde409e8a75ea275b17ba44cbb82f65f9b1eeb2bbfbeb45"
	},
	{
		"id": "a0c137c16b8e",
		"ts": "2026-10-17T17:44:15.287Z",
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
		"liquidityUsd": 4623675.18,
		"hash": "a0c137c16b8e8df666729f6a17c314d93bba4314e78654904e2b1ba3757a34e0"
	},
	{
		"id": "96c733d0c6f4",
		"ts": "2026-10-17T17:44:15.533Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1134448.1,
		"hash": "96c733d0c6f4e52b4e7256244e04856c051acd68c3d6de9c01074faa6e535e8e"
	},
	{
		"id": "ee2cf3449a3e",
		"ts": "2026-10-17T17:44:15.786Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42083829.95,
		"hash": "ee2cf3449a3ec8d965153f08ec3f80755889d73fafc90e79d08dd09b09b6073a"
	},
	{
		"id": "ae820cc7db0b",
		"ts": "2026-10-17T17:44:16.078Z",
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
		"liquidityUsd": 2904774.11,
		"hash": "ae820cc7db0b29a590399d96f490b7685bf0b9e49b6bdc8fa427dd8b73adcc51"
	},
	{
		"id": "c6783cab7e66",
		"ts": "2026-10-17T17:44:16.333Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3270411.39,
		"hash": "c6783cab7e66ef680f723b0f7f375dd7f5e11b7075945ab86c1fca5293328bdc"
	},
	{
		"id": "3489106700f2",
		"ts": "2026-10-17T17:44:16.581Z",
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
		"liquidityUsd": 1733055.68,
		"hash": "3489106700f2ad8a90381f47097876bb2a0d17d932a7fcfbdeb136e82d491b9d"
	},
	{
		"id": "c231bce44b8c",
		"ts": "2026-10-17T17:44:16.807Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4509165.43,
		"hash": "c231bce44b8cf74de1c1ff9ef1c65b9a92601f08abe6acfb083a89f71c99284c"
	},
	{
		"id": "a4eec7aca776",
		"ts": "2026-10-17T17:44:17.034Z",
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
		"liquidityUsd": 16807097.33,
		"hash": "a4eec7aca776c8db4bb836dab6e95c71b367057c397e3c510cc9815e689e67f1"
	},
	{
		"id": "be95736e8603",
		"ts": "2026-10-17T17:44:17.254Z",
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
		"liquidityUsd": 1051099.08,
		"hash": "be95736e8603abce335cf90fb4886dd1b36adbbdb5c1bb310a31069401b8159f"
	},
	{
		"id": "b117ae6593e3",
		"ts": "2026-10-17T17:44:17.476Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 193090.08,
		"hash": "b117ae6593e35a7bc22a4d4d7eec98cd08361312e788e2c71ed89a6085e8d542"
	},
	{
		"id": "1bd3075fdeca",
		"ts": "2026-10-17T17:44:17.702Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 97833.25,
		"hash": "1bd3075fdecaf419cf2cb939d4135979c99a31d1fc48ed58397fbc8662ad7ddc"
	},
	{
		"id": "762175985a9b",
		"ts": "2026-10-17T17:44:17.926Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4019371.51,
		"hash": "762175985a9bc779aa87af78825be69e9835c8076b7add97586456228fd831cc"
	},
	{
		"id": "1804592a47e4",
		"ts": "2026-10-17T17:44:18.150Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 166805.75,
		"hash": "1804592a47e4f1801993277aecd3497dc59644f8337001732de95c2b90483487"
	},
	{
		"id": "cda8ee25d3d3",
		"ts": "2026-10-17T17:44:18.380Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1091095.18,
		"hash": "cda8ee25d3d3d6f24947a72fac4a8b7f0e41ce5d4f86edb4eccdc8d9f6256bf0"
	},
	{
		"id": "409fea96b460",
		"ts": "2026-10-17T17:44:18.602Z",
		"symbol": "TRUST",
		"token": "0x6cd905dF2Ed214b22e0d48FF17CD4200C1C6d8A3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 262635.47,
		"hash": "409fea96b460d17836602bb4d63b5f7e1b4365a52e83dfb22c15bc3458f26e61"
	},
	{
		"id": "7b44a274c33c",
		"ts": "2026-10-17T14:02:34.725Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146760472.17,
		"hash": "7b44a274c33cfd73d31aaaf3bfa3a8d78abdfbf41c4a5fa401190b0a3e2faa18"
	},
	{
		"id": "3e655626eed1",
		"ts": "2026-10-17T14:02:34.971Z",
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
		"liquidityUsd": 18257387.46,
		"hash": "3e655626eed1f0677ef148bfdb1e389b260e09a24be9960909c09568201a396a"
	},
	{
		"id": "b39cd6ef0ac6",
		"ts": "2026-10-17T14:02:35.231Z",
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
		"liquidityUsd": 770296.95,
		"hash": "b39cd6ef0ac67a7b7465a69464f6828770e956cea649ccac90a80ada57f96a68"
	},
	{
		"id": "a7ca21aa2044",
		"ts": "2026-10-17T14:02:35.475Z",
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
		"liquidityUsd": 42440897.49,
		"hash": "a7ca21aa204419c05380ea3d697d5120ce73016641ded81643ad052fff4aa12e"
	},
	{
		"id": "fd855dd9e665",
		"ts": "2026-10-17T14:02:35.726Z",
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
		"liquidityUsd": 4663567.86,
		"hash": "fd855dd9e66503355335425349c0a74f92f0796d774f919508210dabee78b8f6"
	},
	{
		"id": "41e79c2734e0",
		"ts": "2026-10-17T14:02:35.979Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1145478.77,
		"hash": "41e79c2734e03eb4bb34dfc28d5d83c6001d8cbbedd6cb1c4b82e89cad07f364"
	},
	{
		"id": "e1e6068b34cf",
		"ts": "2026-10-17T14:02:36.216Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42440900.8,
		"hash": "e1e6068b34cfc689c62a8e6b553805631be6b92dd430753e8c8db8bea9d87e04"
	},
	{
		"id": "e2147b9dc2df",
		"ts": "2026-10-17T14:02:36.492Z",
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
		"liquidityUsd": 2918673.7,
		"hash": "e2147b9dc2df803f8ca0763ee4cf28135d4d30fbfa943e678706bea79a8f2736"
	},
	{
		"id": "063634fbd25d",
		"ts": "2026-10-17T14:02:36.732Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3300740.89,
		"hash": "063634fbd25d38d36982ef8e76c6d0fb68b2a5fc2aaa843847d5e135157dc963"
	},
	{
		"id": "b97bce552411",
		"ts": "2026-10-17T14:02:36.982Z",
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
		"liquidityUsd": 1758374.23,
		"hash": "b97bce5524118001d57f71c15e9420f7b9b5f2a188cc5c436059702a8caca1f3"
	},
	{
		"id": "094857845645",
		"ts": "2026-10-17T14:02:37.217Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1364734.22,
		"hash": "094857845645b54da84ffd11cb847a228125c0c0af6a359626ad93c948d2aa88"
	},
	{
		"id": "7544a12c3b7a",
		"ts": "2026-10-17T14:02:37.438Z",
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
		"liquidityUsd": 1050183.6,
		"hash": "7544a12c3b7a91f6221486b4381806ee59ac987c3230576e8d08b271cf8fe55d"
	},
	{
		"id": "ea9f6721bc15",
		"ts": "2026-10-17T14:02:37.673Z",
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
		"liquidityUsd": 15910734.32,
		"hash": "ea9f6721bc156d4a26d8aec747be500cf24323a86881465f49961850ad7fc50c"
	},
	{
		"id": "38a2ad26029f",
		"ts": "2026-10-17T14:02:37.908Z",
		"symbol": "TRUST",
		"token": "0x6cd905dF2Ed214b22e0d48FF17CD4200C1C6d8A3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 264904.15,
		"hash": "38a2ad26029f2e4c2ccc037aae22237e3c382d4c1695fdd6f6f01cbaaa7342fd"
	},
	{
		"id": "81b7dfde440d",
		"ts": "2026-10-17T14:02:38.127Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 177208.26,
		"hash": "81b7dfde440d5c82dd499f7ca07e7b5ab48654774919e2c8f138e5707684dc83"
	},
	{
		"id": "693667bb91e4",
		"ts": "2026-10-17T14:02:38.365Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4621907.17,
		"hash": "693667bb91e492587f184a498bbedc8b5953ea1d12887bbf92cbd4b4d80c18a7"
	},
	{
		"id": "261d1f541247",
		"ts": "2026-10-17T14:02:38.603Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4044617.54,
		"hash": "261d1f5412472c7a48469f1c3ee24ea0f878172f9351ef6a1b0e5e6b60e33883"
	},
	{
		"id": "713c763f01b4",
		"ts": "2026-10-17T14:02:38.832Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1097782.05,
		"hash": "713c763f01b46b4751cafe67d45e12d1c90bbc419fca3c8363952b0e002fc411"
	},
	{
		"id": "951750fb0999",
		"ts": "2026-10-17T14:02:39.066Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 87980.76,
		"hash": "951750fb0999d94a5f4c2589343fb5d51085531ca0f72b237db2b01fa7457230"
	},
	{
		"id": "043d9099c36e",
		"ts": "2026-10-17T10:05:45.542Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146547790.11,
		"hash": "043d9099c36e7d57a0e0c9cc50c98953a20bf6a449e3edb00a8fd8df5f0cc623"
	},
	{
		"id": "ecc1e6fe585c",
		"ts": "2026-10-17T10:05:45.775Z",
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
		"liquidityUsd": 18300262.95,
		"hash": "ecc1e6fe585cdc90d73f8b43200ec108ee78048202c6b9944111c41981980fcf"
	},
	{
		"id": "cb39827d9936",
		"ts": "2026-10-17T10:05:45.988Z",
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
		"liquidityUsd": 769977.56,
		"hash": "cb39827d9936cf74ad21b59199fc8413dbb3c574d12d5ab298d9262460fa8422"
	},
	{
		"id": "a56fb22a0d7b",
		"ts": "2026-10-17T10:05:46.201Z",
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
		"liquidityUsd": 43192716.48,
		"hash": "a56fb22a0d7b1d67e9279be9502d8eb091152e85edf0796a9aaf640e80e79980"
	},
	{
		"id": "1c422ee82ec1",
		"ts": "2026-10-17T10:05:46.410Z",
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
		"liquidityUsd": 4710094.61,
		"hash": "1c422ee82ec1c816c9b311c066c38b7d4b3737920f169d416dbaedae337ecd4f"
	},
	{
		"id": "142b70fc55e3",
		"ts": "2026-10-17T10:05:46.618Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1154765.87,
		"hash": "142b70fc55e3d08e60344fc499a0a25835d449595bea6aa2e94f2aeee6cfaafd"
	},
	{
		"id": "40e8eace53ec",
		"ts": "2026-10-17T10:05:46.857Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 43192697.3,
		"hash": "40e8eace53ec7651f4c5164cb5f641d255a026b81aa3a502eeefd53e68c8adef"
	},
	{
		"id": "f14a4f4b5127",
		"ts": "2026-10-17T10:05:47.076Z",
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
		"liquidityUsd": 2929649.44,
		"hash": "f14a4f4b51273b3fd341a36d71db736e74eb11c45561db9f502e27ec20331003"
	},
	{
		"id": "9fd476d07e30",
		"ts": "2026-10-17T10:05:47.288Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3336213.79,
		"hash": "9fd476d07e30a14dd29d45acd51eac4b05638b64a8bb22282f0608c42276c349"
	},
	{
		"id": "5ffcf2eee39a",
		"ts": "2026-10-17T10:05:47.507Z",
		"symbol": "Paper",
		"token": "0x8b996930FCdE8260145fb0C0445DB5a9E8293B07",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5114791.86,
		"hash": "5ffcf2eee39ab652e8484983dd229f688e3609dd24eeae152ed72868bb9bf91a"
	},
	{
		"id": "02132ae22e93",
		"ts": "2026-10-17T10:05:47.807Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1772359.79,
		"hash": "02132ae22e93a47f226b611c1ad841acccbd0bd5376ddebbcc2693ffdeb04f7b"
	},
	{
		"id": "ce5aab94ea99",
		"ts": "2026-10-17T10:05:47.984Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 181694.24,
		"hash": "ce5aab94ea9936889681ba4a5a5da2b0a0c06a55d8ce7425e8d1b55b637133cd"
	},
	{
		"id": "fb9fd65db09e",
		"ts": "2026-10-17T10:05:48.179Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1367489.51,
		"hash": "fb9fd65db09eaa4800219fff25b65f305b990d5ca8a4bf5364875e9487282829"
	},
	{
		"id": "1208f86cfcd4",
		"ts": "2026-10-17T10:05:48.356Z",
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
		"liquidityUsd": 16147054.6,
		"hash": "1208f86cfcd48def91043f19d425f16b9802faa9baebb6b6df5c8c05fc8e7cdb"
	},
	{
		"id": "1baa82e2d8e2",
		"ts": "2026-10-17T10:05:48.541Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4078696.57,
		"hash": "1baa82e2d8e25529161aee42d6608772396c52edd24101f25b369494a2f42e6f"
	},
	{
		"id": "bfab502ace77",
		"ts": "2026-10-17T10:05:48.729Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4845340.09,
		"hash": "bfab502ace770886746ea8e1b920b3ac439b56e03cd0a15eb22a2dda6203fe96"
	},
	{
		"id": "9022bddf7292",
		"ts": "2026-10-17T10:05:48.944Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4506193.13,
		"hash": "9022bddf72925a3d5d5ae814e6ecb0d64cda1c50a51b350b9b8661fd564c2aed"
	},
	{
		"id": "5928b48fc1e6",
		"ts": "2026-10-17T10:05:49.125Z",
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
		"liquidityUsd": 1051000.66,
		"hash": "5928b48fc1e64c232d2d6b7a2e9a9579fd428844d063c2a78846e655877e665a"
	},
	{
		"id": "8da4d4002efd",
		"ts": "2026-10-17T10:05:49.315Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1105476.22,
		"hash": "8da4d4002efd5f52ac9aaace6097775e0a75f5ff5f2a9335b134e07982e16f35"
	},
	{
		"id": "d3a45ef140c2",
		"ts": "2026-10-17T05:29:16.861Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146174446.31,
		"hash": "d3a45ef140c2ec13a2cd0575db05eef27602282af70410a9b1aebb4aea89e3e5"
	},
	{
		"id": "1c612f005643",
		"ts": "2026-10-17T05:29:17.131Z",
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
		"liquidityUsd": 19661021.61,
		"hash": "1c612f0056433a7a6be181c93c4c5a330f3917d327ae99425df742839e53fdbc"
	},
	{
		"id": "9b40d90aeb47",
		"ts": "2026-10-17T05:29:17.380Z",
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
		"liquidityUsd": 769040.48,
		"hash": "9b40d90aeb476c1ff81969238eb117e3848d65d65d61a96f87f60f7a12f5128b"
	},
	{
		"id": "bd0dd73c9dd3",
		"ts": "2026-10-17T05:29:17.617Z",
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
		"liquidityUsd": 42970147.05,
		"hash": "bd0dd73c9dd3fdb0baf5456c60693eed0bc570ce4b7da839620370ce3721edbc"
	},
	{
		"id": "acf38248d1bd",
		"ts": "2026-10-17T05:29:17.876Z",
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
		"liquidityUsd": 4701560.41,
		"hash": "acf38248d1bd058248edf3889948f376eaf56b0e18200ac4146ffd7f7eb70f08"
	},
	{
		"id": "cdf6c5b39c87",
		"ts": "2026-10-17T05:29:18.116Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1151917.26,
		"hash": "cdf6c5b39c870746a80a9dab71ba790a9a52e6ca86b76f2c5281ed8090dc6997"
	},
	{
		"id": "755d47e894cd",
		"ts": "2026-10-17T05:29:18.357Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42970134.87,
		"hash": "755d47e894cd79870a7858407c3a1c61ebac22693407efcceb76610fbdf9b292"
	},
	{
		"id": "fcf6f964cecd",
		"ts": "2026-10-17T05:29:18.634Z",
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
		"liquidityUsd": 2921749.52,
		"hash": "fcf6f964cecd628ee63db1499c668c7a5f4567f2081cb27bb1cb47cbae4fcb21"
	},
	{
		"id": "271916a3ab43",
		"ts": "2026-10-17T05:29:18.870Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3378626.81,
		"hash": "271916a3ab430e64ec8f74518d1c9b4c8652b6461bf49621c32a0b76708c3bdd"
	},
	{
		"id": "93d8b6ce8251",
		"ts": "2026-10-17T05:29:19.102Z",
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
		"liquidityUsd": 1788321.88,
		"hash": "93d8b6ce82515a9e315ff4b14ea8d26be0686aef178a9ff1fcbf4e8e32f997e3"
	},
	{
		"id": "9b7f4a74d857",
		"ts": "2026-10-17T05:29:19.324Z",
		"symbol": "Paper",
		"token": "0x8b996930FCdE8260145fb0C0445DB5a9E8293B07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 5128555.26,
		"hash": "9b7f4a74d857d4f29ce308dd9840db816fabbb612d78b7358d0cafc74f03e81f"
	},
	{
		"id": "c6f895333f2d",
		"ts": "2026-10-17T05:29:19.547Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1359357.67,
		"hash": "c6f895333f2da21e47edc19a5207927ff02d02ab4f60946df29dbc9cbf8bda33"
	},
	{
		"id": "4ae1f9d8fbd6",
		"ts": "2026-10-17T05:29:19.771Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 179695.56,
		"hash": "4ae1f9d8fbd665dfa7255aeecb04ad96bedb46b5dd4d66d0ed9dfb1542e87eb6"
	},
	{
		"id": "4fe04f82ddfe",
		"ts": "2026-10-17T05:29:20.005Z",
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
		"liquidityUsd": 16050727.6,
		"hash": "4fe04f82ddfe2fd32de58b2a0509cc94efdf5d319659c8694f136ec2b72083fa"
	},
	{
		"id": "5ad11a906d4b",
		"ts": "2026-10-17T05:29:20.222Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4062424.37,
		"hash": "5ad11a906d4bc3b85c9b332897339ac26c7adad8b41fcec558fc1775e88c1e24"
	},
	{
		"id": "d900da45946d",
		"ts": "2026-10-17T05:29:20.440Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4830260.78,
		"hash": "d900da45946d05ca932fd97b588249e80d3f3ae7ea05a00cfb93f02b8f54e971"
	},
	{
		"id": "78bea480f1dd",
		"ts": "2026-10-17T05:29:20.662Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 509229.22,
		"hash": "78bea480f1ddffcd2610ee9d14a0e3b2bcff4ce81056dda1e0f961f6dc0d0b00"
	},
	{
		"id": "ef2356b8b8f2",
		"ts": "2026-10-17T05:29:20.881Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1105582.82,
		"hash": "ef2356b8b8f20e57a825fb11406b8126cfe7e1f24458d7c052fb8172fba87b82"
	},
	{
		"id": "410bc0054d29",
		"ts": "2026-10-17T05:29:21.101Z",
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
		"liquidityUsd": 1010393.74,
		"hash": "410bc0054d299d014f9009bc85138ec6aefb21764a280fc063e5dfe83e1836d9"
	},
	{
		"id": "21a7d613c335",
		"ts": "2026-10-17T01:00:09.219Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146391033.62,
		"hash": "21a7d613c335851ba62218dbb905c187548d8a39c596014c9c631a0e1e37ef7b"
	},
	{
		"id": "89d12c9f9439",
		"ts": "2026-10-17T01:00:09.434Z",
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
		"liquidityUsd": 18260675.12,
		"hash": "89d12c9f94395f497882dba86a8d680f448185292852c7231ccc7dd05305b7a7"
	},
	{
		"id": "ec8c0877d4eb",
		"ts": "2026-10-17T01:00:09.649Z",
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
		"liquidityUsd": 770433.64,
		"hash": "ec8c0877d4ebdab0870575096b54631a232fe106fa0d4df42706f900bdf1365d"
	},
	{
		"id": "a703ae8809e4",
		"ts": "2026-10-17T01:00:10.038Z",
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
		"liquidityUsd": 42645510.79,
		"hash": "a703ae8809e4aeb72dd957b25bd1b08b2edf4165332ac6fbbf0a52cb24a3f3dc"
	},
	{
		"id": "336bfecb63fc",
		"ts": "2026-10-17T01:00:10.248Z",
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
		"liquidityUsd": 4685651.08,
		"hash": "336bfecb63fcada13f7e03186dc465400715d508461c3fafb2b2e88305d24b56"
	},
	{
		"id": "e47119f9769d",
		"ts": "2026-10-17T01:00:10.462Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1146509.92,
		"hash": "e47119f9769d047d5d91d8c93fdc40140bb74ac8e951753d345132ea5ad92b55"
	},
	{
		"id": "1cead5b955ef",
		"ts": "2026-10-17T01:00:10.691Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42645510.79,
		"hash": "1cead5b955ef0cb49dcce5e81d5baf89d17d72f0452752899662bef1829dc242"
	},
	{
		"id": "e29e035ea702",
		"ts": "2026-10-17T01:00:10.899Z",
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
		"liquidityUsd": 2998325.64,
		"hash": "e29e035ea7023447a3856080b3195566936dcc152d49ee7f6d11086742399751"
	},
	{
		"id": "78a1925c7663",
		"ts": "2026-10-17T01:00:11.184Z",
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
		"liquidityUsd": 1771517.52,
		"hash": "78a1925c7663b97456ff897ec4302bad83dc7aa39e84e649d31bd2aaa3691f32"
	},
	{
		"id": "9ee388ca6207",
		"ts": "2026-10-17T01:00:11.438Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3310073.51,
		"hash": "9ee388ca6207dc99896e5d1e7e7f28c9f4acadc76eec30f925af08b7f8c110c2"
	},
	{
		"id": "7e39cd3879fa",
		"ts": "2026-10-17T01:00:11.645Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1350233.39,
		"hash": "7e39cd3879fadb5e68ec183c954268076fe67e0b0f6dbfa04b543d0a0b8d1bcf"
	},
	{
		"id": "a42e07f868f9",
		"ts": "2026-10-17T01:00:11.917Z",
		"symbol": "Paper",
		"token": "0x8b996930FCdE8260145fb0C0445DB5a9E8293B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10202039.97,
		"hash": "a42e07f868f93f119e5bd34beaafce5d31cbbd2c32e0a4f2dc72eec216323859"
	},
	{
		"id": "7caa3c48df0d",
		"ts": "2026-10-17T01:00:12.113Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 194111.91,
		"hash": "7caa3c48df0dd84e29a022228cc42c897424e883067c881fb7be9c01927dd972"
	},
	{
		"id": "d6c957ac51b5",
		"ts": "2026-10-17T01:00:12.310Z",
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
		"liquidityUsd": 15893289.24,
		"hash": "d6c957ac51b5801e2ae32a946402a3900bc2d737e1f53c59ea21adc191d9c649"
	},
	{
		"id": "1f6529517f2f",
		"ts": "2026-10-17T01:00:12.687Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4042778.13,
		"hash": "1f6529517f2ff21f7a953bec5853cce2b2fb40d8dfdb49b477e3e536ef5df77f"
	},
	{
		"id": "54052f28ab3a",
		"ts": "2026-10-17T01:00:12.879Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4466972.93,
		"hash": "54052f28ab3a6d4594f8bdfbd3eb087c7a20b09da9f08b08fc1f5932d0b18885"
	},
	{
		"id": "f1b963f443c7",
		"ts": "2026-10-17T01:00:13.099Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 515788.39,
		"hash": "f1b963f443c7a46e654b08c1d1cd34d25fba5e25b78b44ddbd8a81e046f52da0"
	},
	{
		"id": "834c92dbbd9c",
		"ts": "2026-10-17T01:00:13.296Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1098641.63,
		"hash": "834c92dbbd9c9eaa8b726f8b54bf0c7396d2f152185945de7b9f69a7358db236"
	},
	{
		"id": "7b6ed2fb18dc",
		"ts": "2026-10-17T01:00:13.497Z",
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
		"liquidityUsd": 1088529.89,
		"hash": "7b6ed2fb18dc5a2f1024806922c3a4b72c5d2464a649659b076958c9b8eef3cf"
	},
	{
		"id": "ff0d144ae100",
		"ts": "2026-10-16T22:27:33.086Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146304939.39,
		"hash": "ff0d144ae100287c112d4570fade1c7fb8e7d07439f0751bc4d96fae6f71f4a3"
	},
	{
		"id": "39e4a2078b44",
		"ts": "2026-10-16T22:27:33.347Z",
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
		"liquidityUsd": 20512250.6,
		"hash": "39e4a2078b44b7874dd581367d94d9321a1eaf24609b3ec6eb17fc98697d0b2f"
	},
	{
		"id": "5314096df566",
		"ts": "2026-10-16T22:27:33.590Z",
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
		"liquidityUsd": 767996.63,
		"hash": "5314096df56635f12e4ec234d50a3cfdbf5defbc243012637391dbe5453976ce"
	},
	{
		"id": "fb5f3558476c",
		"ts": "2026-10-16T22:27:33.842Z",
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
		"liquidityUsd": 46095659.27,
		"hash": "fb5f3558476ca02d1afb72bf9efb24f64f347789b27a9b53df425a504a193299"
	},
	{
		"id": "01e7db467c00",
		"ts": "2026-10-16T22:27:34.093Z",
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
		"liquidityUsd": 4685224.26,
		"hash": "01e7db467c007d955440d061bbfd924a5eee79dd9b40ba83451c6d698364782b"
	},
	{
		"id": "73bbb756c068",
		"ts": "2026-10-16T22:27:34.341Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1142346.27,
		"hash": "73bbb756c068430b0e167908f750027a4024f790396eef0f8ad36b6878fef40e"
	},
	{
		"id": "d46899ff2044",
		"ts": "2026-10-16T22:27:34.594Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 46095659.27,
		"hash": "d46899ff2044cc884020192c397f510ba6073be6ccae81664cbed8e568e4ca97"
	},
	{
		"id": "af217e1741b3",
		"ts": "2026-10-16T22:27:34.842Z",
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
		"liquidityUsd": 3002018.97,
		"hash": "af217e1741b398ae2181fe3be0678457cb38ff31f4f711589959deded4db6f6f"
	},
	{
		"id": "27784a39909b",
		"ts": "2026-10-16T22:27:35.107Z",
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
		"liquidityUsd": 1792577.41,
		"hash": "27784a39909b154c8b7354fb95bf7c5cde2bfb71c1a7f83314f6d85dd6ecd755"
	},
	{
		"id": "94aa171c9366",
		"ts": "2026-10-16T22:27:35.365Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3338925.86,
		"hash": "94aa171c936605ea5c1127bd713c8f34b7ce65087084701533e75ee30d0a4b10"
	},
	{
		"id": "ee67f489e0fc",
		"ts": "2026-10-16T22:27:35.677Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1355754.57,
		"hash": "ee67f489e0fcbdba14a2e1281e982b8b116a4e034c9df4afac36d701cea9bc86"
	},
	{
		"id": "153b80bebb9f",
		"ts": "2026-10-16T22:27:36.033Z",
		"symbol": "Paper",
		"token": "0x8b996930FCdE8260145fb0C0445DB5a9E8293B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10202524.1,
		"hash": "153b80bebb9f8479f5a48d0f45cf3939d1682e2fe6794ad0272df6bacf22ad88"
	},
	{
		"id": "19337da2d89f",
		"ts": "2026-10-16T22:27:36.257Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 197271.27,
		"hash": "19337da2d89ff49c1c8ade9b632e93c725454bd0e2e235508de63fb0975366c2"
	},
	{
		"id": "de099653b0cc",
		"ts": "2026-10-16T22:27:36.478Z",
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
		"liquidityUsd": 15994046.83,
		"hash": "de099653b0cce36668d6a8798c8692cb7ed04f41d699ffc82e7004430023bf73"
	},
	{
		"id": "a0f3f6cda696",
		"ts": "2026-10-16T22:27:36.717Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4033164.07,
		"hash": "a0f3f6cda6964b4f3a8a295b4888fc7b21bb87dbf81d36a9ea79cd0f18b65f90"
	},
	{
		"id": "65227b857ae1",
		"ts": "2026-10-16T22:27:36.958Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1101114.76,
		"hash": "65227b857ae129727cbebdbfef0588b74d0563959d85278d668804859e3dd5da"
	},
	{
		"id": "085f62cd7932",
		"ts": "2026-10-16T22:27:37.186Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5032965.88,
		"hash": "085f62cd7932568d546e6592e17fe67adeaede064b642a75e88059c529cdd82d"
	},
	{
		"id": "32262aaa7c45",
		"ts": "2026-10-16T22:27:37.421Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4258649.16,
		"hash": "32262aaa7c4555f75902df62c01f234e8a3a3ba3caa379e2a17359955f4f9115"
	},
	{
		"id": "47fcc22f351c",
		"ts": "2026-10-16T22:27:37.645Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 504814.06,
		"hash": "47fcc22f351cd60d47d616718a4fd06df273e219991061ce3a5427393cc66be2"
	},
	{
		"id": "2588d5df7267",
		"ts": "2026-10-16T19:15:05.878Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 145914600.65,
		"hash": "2588d5df7267d23e0a3ef3f6b014eb49225f9d5d00fe27e440bf5746c227db36"
	},
	{
		"id": "7f20c65553d5",
		"ts": "2026-10-16T19:15:06.195Z",
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
		"liquidityUsd": 18140495.27,
		"hash": "7f20c65553d521d9a19a51b58332922c696093b59c631bd2188e6386cbcfd41d"
	},
	{
		"id": "b37bae18f7e1",
		"ts": "2026-10-16T19:15:06.480Z",
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
		"liquidityUsd": 779330.07,
		"hash": "b37bae18f7e117fd24bb8859bd9ed20c8555e8f6a208f132cdec0d87657e1c83"
	},
	{
		"id": "94bb35a0725b",
		"ts": "2026-10-16T19:15:06.762Z",
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
		"liquidityUsd": 45670843.15,
		"hash": "94bb35a0725bf00f62456623f69186bb8dbcb50887e9bcc2d897963524a03edb"
	},
	{
		"id": "d7519281eb59",
		"ts": "2026-10-16T19:15:06.994Z",
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
		"liquidityUsd": 4642304.14,
		"hash": "d7519281eb59753737c192eef04080ad9e8f43b98cf0972b52fe2dedb48aa61a"
	},
	{
		"id": "c9c3d968fb9f",
		"ts": "2026-10-16T19:15:07.271Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1139729.29,
		"hash": "c9c3d968fb9f3922ac45fc42e0e4c9650431fa234efd149a36263650eae4887d"
	},
	{
		"id": "5c75e78322f8",
		"ts": "2026-10-16T19:15:07.527Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 45607885.28,
		"hash": "5c75e78322f8af7584f394a96719fbb599683c6052bd50d95185bf128807e540"
	},
	{
		"id": "5656801ca60b",
		"ts": "2026-10-16T19:15:07.760Z",
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
		"liquidityUsd": 2976267.03,
		"hash": "5656801ca60bebec66a9c0749e06544d57f35e89599d713b2aab2c920567447c"
	},
	{
		"id": "6515315289ec",
		"ts": "2026-10-16T19:15:08.059Z",
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
		"liquidityUsd": 1760738.38,
		"hash": "6515315289ecf59869420dfc16062b90198315a17b85adcf35a15f3441d5a8a3"
	},
	{
		"id": "f35c2223d044",
		"ts": "2026-10-16T19:15:08.329Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3309969.7,
		"hash": "f35c2223d044bb397c30a5441fe39225a94c8f7cea5d665bb5a88c5f1a5731f4"
	},
	{
		"id": "eb70e031d7e1",
		"ts": "2026-10-16T19:15:08.542Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1342398.9,
		"hash": "eb70e031d7e1a60a058bf7ddbb151d1d0bd72a16ef08605f1b83f9926ad3232c"
	},
	{
		"id": "79afbbd0f648",
		"ts": "2026-10-16T19:15:08.752Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 195112.14,
		"hash": "79afbbd0f6481425f2548e3491f2e42a2c7d01907d915add641afc8d316bf9d0"
	},
	{
		"id": "aec6058d56ff",
		"ts": "2026-10-16T19:15:08.952Z",
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
		"liquidityUsd": 15871923.33,
		"hash": "aec6058d56fffb253c56660b62bb4833a97a6c900db9c995dff78f9839e78958"
	},
	{
		"id": "f5cd5e356928",
		"ts": "2026-10-16T19:15:09.173Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4979530.02,
		"hash": "f5cd5e356928f8c36d36d648e655ae3c9f6dd29dd2266ea3634e6c7854aeec48"
	},
	{
		"id": "00864d6cbe11",
		"ts": "2026-10-16T19:15:09.365Z",
		"symbol": "Paper",
		"token": "0x8b996930FCdE8260145fb0C0445DB5a9E8293B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10202128.58,
		"hash": "00864d6cbe11e74bec1d16d6e151db8d85473d6bc246b1be9ffd594c1324e69d"
	},
	{
		"id": "4370646f7a7a",
		"ts": "2026-10-16T19:15:09.555Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3994029.5,
		"hash": "4370646f7a7a49b6bb8896beb555a189f3608c7e4b6dea9e80f7e676fb692ebc"
	},
	{
		"id": "0dc3d6493c18",
		"ts": "2026-10-16T19:15:09.744Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1086057.14,
		"hash": "0dc3d6493c18c9f857bdf71e50e5f1786b71b9c0ee7dd10216344cf359782b1e"
	},
	{
		"id": "6f7ec45d5686",
		"ts": "2026-10-16T19:15:09.952Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 490042.44,
		"hash": "6f7ec45d5686703448a4f18e2c11bd7c18e91d9d9ef9209bf236af4f02e2435e"
	},
	{
		"id": "cba7cfd0f50f",
		"ts": "2026-10-16T19:15:10.289Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1477127.49,
		"hash": "cba7cfd0f50ff0eeb41e3c09708442f625d4a0af68d10cce57d94c450c983c3c"
	},
	{
		"id": "0742c011a79d",
		"ts": "2026-10-16T15:09:26.072Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147091505.93,
		"hash": "0742c011a79d1d86a43c27dc58abe8519754ebc2e29c16915027d9c1ebefe24a"
	},
	{
		"id": "cab2878482cb",
		"ts": "2026-10-16T15:09:26.356Z",
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
		"liquidityUsd": 18538516.38,
		"hash": "cab2878482cbbe47ace3ac758b7d3d31f0157171605ce30de766e3b36ba6d0b5"
	},
	{
		"id": "07547d01ea6a",
		"ts": "2026-10-16T15:09:26.582Z",
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
		"liquidityUsd": 779330.07,
		"hash": "07547d01ea6aff06bd7bc2f1cfe7199206907ba61d8f9afe8f7f0047c46fec15"
	},
	{
		"id": "156f6d390dbe",
		"ts": "2026-10-16T15:09:26.804Z",
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
		"liquidityUsd": 46218797.6,
		"hash": "156f6d390dbecc005f62bca4f02883d3909fcf3b3e3a5687768d1d842c68fe98"
	},
	{
		"id": "8d7022e11cba",
		"ts": "2026-10-16T15:09:27.014Z",
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
		"liquidityUsd": 4734568.28,
		"hash": "8d7022e11cba10c7a537400ba8c6c5aae459306a11242b091c7dca322a08fac9"
	},
	{
		"id": "b3ed29c68b07",
		"ts": "2026-10-16T15:09:27.227Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1171878.69,
		"hash": "b3ed29c68b079dddb3473a1e12bdd9639d7895e7767147d3ae20df2e169ec5fd"
	},
	{
		"id": "8cc66e893b58",
		"ts": "2026-10-16T15:09:27.444Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 46218797.6,
		"hash": "8cc66e893b585264b6e34563c3acecdeb5dfc27019fb5dab39be73733d25ed64"
	},
	{
		"id": "52c166a64abb",
		"ts": "2026-10-16T15:09:27.650Z",
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
		"liquidityUsd": 3042914.37,
		"hash": "52c166a64abb07f6e4a35905c3faa2be1dd8d8f0c548e67c79eb54f948a1eadd"
	},
	{
		"id": "f6b9e451095b",
		"ts": "2026-10-16T15:09:27.857Z",
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
		"liquidityUsd": 1763124.01,
		"hash": "f6b9e451095bb6f104ba3bb2942e0c24ab6c6e39f1f621e70a8d65f8a1cf930a"
	},
	{
		"id": "2d47f8a89362",
		"ts": "2026-10-16T15:09:28.061Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1378967.65,
		"hash": "2d47f8a893624cac120ff5c669d9016143541174f49b5bfdbe581a95ac596e77"
	},
	{
		"id": "2d8f270a4dd4",
		"ts": "2026-10-16T15:09:28.248Z",
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
		"liquidityUsd": 3386585.14,
		"hash": "2d8f270a4dd442fd0391abae96012dc3a73b04b2381e523dd2dec673f005bc29"
	},
	{
		"id": "5cb1816297be",
		"ts": "2026-10-16T15:09:28.452Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 164803.55,
		"hash": "5cb1816297be838f83a1873feafa74abcd04ea69ea82214291a16499bae1787e"
	},
	{
		"id": "735d2a76b9bc",
		"ts": "2026-10-16T15:09:28.645Z",
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
		"liquidityUsd": 16263990.57,
		"hash": "735d2a76b9bc41f4664bcdf724a507243303858bdcfea1d9ce8026c5b5d5232c"
	},
	{
		"id": "98d710566e8b",
		"ts": "2026-10-16T15:09:28.834Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4036683.61,
		"hash": "98d710566e8ba597d9931343370c88ed01001a91163daed5381a000326ac72ed"
	},
	{
		"id": "e4e73754ab9d",
		"ts": "2026-10-16T15:09:29.067Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 508305.65,
		"hash": "e4e73754ab9db8cba7b3229db094958c1060c6087646ac60e9f23277704e1790"
	},
	{
		"id": "fd6bcd7c48ac",
		"ts": "2026-10-16T15:09:29.301Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1101992.83,
		"hash": "fd6bcd7c48accda7877350923c67bd16801e45e2fe3a77b34f3d9b9c41fba5d5"
	},
	{
		"id": "fed4a9abe245",
		"ts": "2026-10-16T15:09:29.489Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1981791.42,
		"hash": "fed4a9abe2459a4ccca67087da603bae7a5406e2e73bb32844a9f7988a01d9ea"
	},
	{
		"id": "2c376dd874c9",
		"ts": "2026-10-16T15:09:29.677Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5046009.41,
		"hash": "2c376dd874c931f767a789aa1720b007004e9985d5afad9465a45aa99d0d7ab1"
	},
	{
		"id": "ce3c2c5c424b",
		"ts": "2026-10-16T15:09:29.869Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4724651.57,
		"hash": "ce3c2c5c424bb3b6425e2f5a41df3999d21e7d3aac1e9d5ba864b1d6ece159f2"
	},
	{
		"id": "6b1e91fb7977",
		"ts": "2026-10-16T10:36:34.108Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147376384.26,
		"hash": "6b1e91fb79778df0f8b16ccf90aac73f47bea1d6a19714f7635b91d6a7e41b64"
	},
	{
		"id": "2c579d2d9fd4",
		"ts": "2026-10-16T10:36:34.370Z",
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
		"liquidityUsd": 18504452.37,
		"hash": "2c579d2d9fd48849b0211da7673828191f3bcf911e2ab25d97bdc1487605cedd"
	},
	{
		"id": "e5b0f9872fbc",
		"ts": "2026-10-16T10:36:34.586Z",
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
		"liquidityUsd": 779330.07,
		"hash": "e5b0f9872fbc07bab4bbf601ea8d3b56041b5c2cacaa7832ec8a8060ce4e4dd9"
	},
	{
		"id": "dc9d685588e5",
		"ts": "2026-10-16T10:36:34.800Z",
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
		"liquidityUsd": 47037099.48,
		"hash": "dc9d685588e562f4b4402e8ea518ae11a8f7f007a92f5415dfcac5710b758d62"
	},
	{
		"id": "a4410e0b27bd",
		"ts": "2026-10-16T10:36:35.024Z",
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
		"liquidityUsd": 4761160.8,
		"hash": "a4410e0b27bda6eae5dd2a78a07ae50fe8bc1c0273e1eb17b5da53232cbd4a9c"
	},
	{
		"id": "d501eec9c707",
		"ts": "2026-10-16T10:36:35.270Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1174300.57,
		"hash": "d501eec9c707547f15117a15600ad974b18f898f1324c00fbb0249312975247d"
	},
	{
		"id": "ea6214505f2a",
		"ts": "2026-10-16T10:36:35.487Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 47037099.48,
		"hash": "ea6214505f2a8d170e90196b9ba0d79dca8d30efaedde417628bac9fa8619bfc"
	},
	{
		"id": "57d50fc82484",
		"ts": "2026-10-16T10:36:35.718Z",
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
		"liquidityUsd": 2362905.23,
		"hash": "57d50fc82484920cb3d70ae45173936a35f86751f259453d21200321e91cfcf0"
	},
	{
		"id": "97f3cc708b10",
		"ts": "2026-10-16T10:36:36.032Z",
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
		"liquidityUsd": 1786059.99,
		"hash": "97f3cc708b108084f980c17240a2794b41c6374925ef5ae28ec8596be58d89dc"
	},
	{
		"id": "ab64e51ffbd6",
		"ts": "2026-10-16T10:36:36.242Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1373171.53,
		"hash": "ab64e51ffbd666202c2c0112a6d8c0ca3ed6a12e71448042e0384b5bc606820a"
	},
	{
		"id": "05e8241ae78a",
		"ts": "2026-10-16T10:36:36.457Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 176906.58,
		"hash": "05e8241ae78a2ac95681d251c770cb0013ae246d5bb21cfe97c516d064034261"
	},
	{
		"id": "b5c09ef7167b",
		"ts": "2026-10-16T10:36:36.665Z",
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
		"liquidityUsd": 3078472.9,
		"hash": "b5c09ef7167b8ed79ee135b0fb85521615a41ecc4b58e3255cae7cb33fe52717"
	},
	{
		"id": "72e67fe066a6",
		"ts": "2026-10-16T10:36:36.862Z",
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
		"liquidityUsd": 16589236.94,
		"hash": "72e67fe066a68bee404094de316b93575f8c626d55adc1464e0d1f4de1532e09"
	},
	{
		"id": "cf38fcf9a471",
		"ts": "2026-10-16T10:36:37.058Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 176524.35,
		"hash": "cf38fcf9a4714eb3b3458d95efcad071a6a0b3b68fd5ebb5bce3c6aef6d5e731"
	},
	{
		"id": "2a7abd8d234e",
		"ts": "2026-10-16T10:36:37.263Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1117900.59,
		"hash": "2a7abd8d234ed72ad3145ae908a541e031953c7bc8afca9c3c95cf783fc63723"
	},
	{
		"id": "6965c388d2db",
		"ts": "2026-10-16T10:36:37.468Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4072127.36,
		"hash": "6965c388d2db2e27a5aec9d0a2e388a70b4cf317532efcf43ff6571babded56d"
	},
	{
		"id": "8d1b08c10366",
		"ts": "2026-10-16T10:36:37.658Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2110097.13,
		"hash": "8d1b08c103669b18c51de840174af170dc6c98f153bc9a1e5d928c3368ec4120"
	},
	{
		"id": "507dcc0d80a9",
		"ts": "2026-10-16T10:36:37.852Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4572965.19,
		"hash": "507dcc0d80a9005c60047441be2b7bb8f4e3547f745ad8f970b1d4390b2460f9"
	},
	{
		"id": "5cddb0d576cc",
		"ts": "2026-10-16T10:36:38.062Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5110254.8,
		"hash": "5cddb0d576cc409660a3845de894c3daa582af5c98cf6ae1037c2a31f41cfe5f"
	},
	{
		"id": "1de0a8801b6e",
		"ts": "2026-10-16T05:23:18.755Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146897245.63,
		"hash": "1de0a8801b6e35adf951aaa254a849136714d86e8994c93adc5d437e2f010ebe"
	},
	{
		"id": "2a75a4971989",
		"ts": "2026-10-16T05:23:18.999Z",
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
		"liquidityUsd": 18499519.78,
		"hash": "2a75a4971989e23935384ddb22691cbfc4f1525097329308dda39b94365fb546"
	},
	{
		"id": "ee287501e28f",
		"ts": "2026-10-16T05:23:19.218Z",
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
		"liquidityUsd": 775496.35,
		"hash": "ee287501e28f165246226ae2c1e78a9f90165ec3def2ca9e182a45f1f37071a6"
	},
	{
		"id": "9723747827dd",
		"ts": "2026-10-16T05:23:19.473Z",
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
		"liquidityUsd": 47449897.2,
		"hash": "9723747827ddb495f371911ace3175673503f69aa2644441004f3851b671d372"
	},
	{
		"id": "951308dd7fff",
		"ts": "2026-10-16T05:23:19.692Z",
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
		"liquidityUsd": 4763873,
		"hash": "951308dd7fff9cf273e1936ec16a8a09698ad9da06ff32a7a16c30127ac6e75e"
	},
	{
		"id": "52810655b215",
		"ts": "2026-10-16T05:23:19.896Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1174784.27,
		"hash": "52810655b21510dd3bd78b6029128da1e3728401ae78bf2b4cb87d3475f9bf13"
	},
	{
		"id": "e7280c09dceb",
		"ts": "2026-10-16T05:23:20.110Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 47449897.2,
		"hash": "e7280c09dceb055d3a8add26d0b193719bf22642b4c1b05d5d7af0e07ddea895"
	},
	{
		"id": "4ee9e43562f7",
		"ts": "2026-10-16T05:23:20.335Z",
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
		"liquidityUsd": 3043956.49,
		"hash": "4ee9e43562f75d09481f23bd506e8a831fed9a99adb402b66179b32d1800aad8"
	},
	{
		"id": "0464a5e0158d",
		"ts": "2026-10-16T05:23:20.561Z",
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
		"liquidityUsd": 1805450.31,
		"hash": "0464a5e0158de1b91e0eb47870b83f5fc30dcce7f19cdfaabdfcad20ff3e622c"
	},
	{
		"id": "7cbdcdf92b74",
		"ts": "2026-10-16T05:23:20.784Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1374977.76,
		"hash": "7cbdcdf92b746a9beef83a7d663526eaf0a2849e6cf669a6bb7767609829c94c"
	}
]
