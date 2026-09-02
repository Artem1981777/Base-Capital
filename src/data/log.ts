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
	"updatedAt": "2026-09-02T10:32:15.868Z",
	"tokensScored": 15852,
	"verdictsIssued": 15852,
	"safe": 13479,
	"risky": 1171,
	"likelyRug": 1202,
	"ticks": 912
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "c31ba071cc6c",
		"ts": "2026-09-02T10:32:11.417Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114205676.65,
		"hash": "c31ba071cc6cf81f3aa3c76c927d0c8ec121f1cd2d5248f96a042ee913435828"
	},
	{
		"id": "eff0fffb1953",
		"ts": "2026-09-02T10:32:11.876Z",
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
		"liquidityUsd": 13332946.85,
		"hash": "eff0fffb19535f742d8c70a28627fe5d1a080dd0d1e82c716133bcf029ab0ce2"
	},
	{
		"id": "c98e25ad3de5",
		"ts": "2026-09-02T10:32:12.138Z",
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
		"liquidityUsd": 919394.64,
		"hash": "c98e25ad3de58656a7ca60b9b57a690137728b8c180eeed98f05800f6df01088"
	},
	{
		"id": "c18230c831b5",
		"ts": "2026-09-02T10:32:12.395Z",
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
		"liquidityUsd": 28152274.61,
		"hash": "c18230c831b55a90de6822483f02472858b564ff2cf165f9ac2643207b928993"
	},
	{
		"id": "29264aad037f",
		"ts": "2026-09-02T10:32:12.645Z",
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
		"liquidityUsd": 4034872.2,
		"hash": "29264aad037f42f1495671b8d55b55fe3a094c405b91b8137a0ddbb41db0a3df"
	},
	{
		"id": "cd307c4b23ae",
		"ts": "2026-09-02T10:32:12.885Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1128051.23,
		"hash": "cd307c4b23aec7797a15968f625bfe773588e5b6ffb5288190fd70d5401466b5"
	},
	{
		"id": "e3c91484ff68",
		"ts": "2026-09-02T10:32:13.143Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1667407.55,
		"hash": "e3c91484ff68605ebbbddf0e8c8961541b479731a2f40abd265e9dcd00ef7252"
	},
	{
		"id": "61d92388dd1b",
		"ts": "2026-09-02T10:32:13.385Z",
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
		"liquidityUsd": 1128982.88,
		"hash": "61d92388dd1b9e1eb3bcf65f0a1613db8d66f97815ac46f777d695811848d08d"
	},
	{
		"id": "200186131032",
		"ts": "2026-09-02T10:32:13.672Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 775185.01,
		"hash": "2001861310329addddbf3497a87cdbea43eb3f6f822110a9492aeaef4adf301d"
	},
	{
		"id": "b447aae7d663",
		"ts": "2026-09-02T10:32:13.927Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1284067.45,
		"hash": "b447aae7d6630a3624630d5b9a733bf5730f711eacc1b5b49b2e126a21fb2556"
	},
	{
		"id": "1917767106f2",
		"ts": "2026-09-02T10:32:14.154Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3997049.77,
		"hash": "1917767106f2d6e176b68210daad6c461a7cdcbf0488d657020c7414514fbc32"
	},
	{
		"id": "e3149d21d1fe",
		"ts": "2026-09-02T10:32:14.381Z",
		"symbol": "VIBES",
		"token": "0xefFC8815487084a97edfdfF968b56Ea123421Acb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69209.03,
		"hash": "e3149d21d1fedc253fa88fe5a6fc80e6475fbfb6350b5f4cc9699c848ba8037c"
	},
	{
		"id": "d24448b948d9",
		"ts": "2026-09-02T10:32:14.608Z",
		"symbol": "RIPE",
		"token": "0x2A0a59d6B975828e781EcaC125dBA40d7ee5dDC0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 102037.34,
		"hash": "d24448b948d96f55f25c7939e3822ea59d773b1c3bf71f4a7e52d80a82081140"
	},
	{
		"id": "6f983c0daad1",
		"ts": "2026-09-02T10:32:14.834Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1127743.76,
		"hash": "6f983c0daad1a719717ffa9d921e5357adca822ef76beb6934c47fa176addff9"
	},
	{
		"id": "baae11c55de5",
		"ts": "2026-09-02T10:32:15.187Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3106605.1,
		"hash": "baae11c55de5ce5393d27ab1f956c8a866d186daa886b4a2542ff038094b757b"
	},
	{
		"id": "522b26d0cc55",
		"ts": "2026-09-02T10:32:15.414Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 273743.95,
		"hash": "522b26d0cc55e29cec7d56f75d8cb71056cf14bf95da3a4d1ca84cf7cab4789c"
	},
	{
		"id": "0889a28ff04d",
		"ts": "2026-09-02T10:32:15.641Z",
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
		"liquidityUsd": 465362.19,
		"hash": "0889a28ff04d3bd16718616be5f0735fb2ab12dc88cc81f5b235fa5cb22c0f71"
	},
	{
		"id": "83f06502d580",
		"ts": "2026-09-02T10:32:15.867Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11990198.52,
		"hash": "83f06502d580533890d6760b393424afdebc57b7897896136a1b50676a4220fc"
	},
	{
		"id": "9ea667f97efb",
		"ts": "2026-09-02T05:24:13.936Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115254408.32,
		"hash": "9ea667f97efb7eef5be9b0cfc6cf32a5603c8af1fdc29ed1cff103e792d6675c"
	},
	{
		"id": "0a6a49e6b497",
		"ts": "2026-09-02T05:24:14.433Z",
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
		"liquidityUsd": 19603062.84,
		"hash": "0a6a49e6b497a342049388c5185e003acd9887842311b53f01721eebf7e2a861"
	},
	{
		"id": "8ac406b97de3",
		"ts": "2026-09-02T05:24:14.912Z",
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
		"liquidityUsd": 935289.09,
		"hash": "8ac406b97de3c17ddfbd7aacdf734d30a4129f2494d4e8293b6054508d4610c1"
	},
	{
		"id": "ae13c5c0c29e",
		"ts": "2026-09-02T05:24:15.154Z",
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
		"liquidityUsd": 28541263.9,
		"hash": "ae13c5c0c29ea5878ab68302e61088300278ef213df412d6d90846abb0d9650e"
	},
	{
		"id": "e1545ac35adb",
		"ts": "2026-09-02T05:24:15.406Z",
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
		"liquidityUsd": 4120059.76,
		"hash": "e1545ac35adb0e5877e74974225073a3aea4fdb4306271d6533d924a16ce5b69"
	},
	{
		"id": "6f4f01148062",
		"ts": "2026-09-02T05:24:15.650Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1151964.24,
		"hash": "6f4f011480629ed630761e9621743d1a901aae20f917d17a2abc4a7ecd8ea51e"
	},
	{
		"id": "7dd91194d881",
		"ts": "2026-09-02T05:24:15.920Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28541263.9,
		"hash": "7dd91194d881857372eabf6d35a840d249214dfb689a0be9e478b0a9cce1a254"
	},
	{
		"id": "e0f8c191a3df",
		"ts": "2026-09-02T05:24:16.184Z",
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
		"liquidityUsd": 1632475.38,
		"hash": "e0f8c191a3dfe59c893ce52f1c35ae51554a9205518a5026566163f997c378cc"
	},
	{
		"id": "7f16881b4c6a",
		"ts": "2026-09-02T05:24:16.467Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 815564.02,
		"hash": "7f16881b4c6a0e223a9c05b37b18cab86c3819ee102452c46e985c47d190edc0"
	},
	{
		"id": "a9c8358f6a3f",
		"ts": "2026-09-02T05:24:16.714Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1324754.7,
		"hash": "a9c8358f6a3f750e89503b578940b222000a8b074f41ef6dda954e0cfc1fb8db"
	},
	{
		"id": "d63396e1e82b",
		"ts": "2026-09-02T05:24:16.949Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4074508.7,
		"hash": "d63396e1e82b849e1512db0a20cdefd3cc9734e4674c27eaef3d0ec4a66063c1"
	},
	{
		"id": "2f1e9bdab435",
		"ts": "2026-09-02T05:24:17.175Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1150195.19,
		"hash": "2f1e9bdab4356358ad6559c53c240b24b552d7658bc46b05b6ca36b2add19f19"
	},
	{
		"id": "569d016cd041",
		"ts": "2026-09-02T05:24:17.410Z",
		"symbol": "RIPE",
		"token": "0x2A0a59d6B975828e781EcaC125dBA40d7ee5dDC0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 116274.05,
		"hash": "569d016cd04121ce78cc264795b1362640a0a188e01f5dc26ebe97cda445c1c4"
	},
	{
		"id": "58a3f42c0e02",
		"ts": "2026-09-02T05:24:17.643Z",
		"symbol": "VIBES",
		"token": "0xefFC8815487084a97edfdfF968b56Ea123421Acb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73435.16,
		"hash": "58a3f42c0e025c0efcd1d43ad521585a11651504a689e666f0e3317d571cb996"
	},
	{
		"id": "3fdd91283f15",
		"ts": "2026-09-02T05:24:17.879Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3267104.68,
		"hash": "3fdd91283f1503b5303f5db4e72dc0c6065ff8a901126b935db8c5d98a44e343"
	},
	{
		"id": "c74843d2d84f",
		"ts": "2026-09-02T05:24:18.106Z",
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
		"liquidityUsd": 425951.67,
		"hash": "c74843d2d84f082ad59f560bb5f53633d9a50975aeb9c52d2557774bf97bacc7"
	},
	{
		"id": "7de68817d78f",
		"ts": "2026-09-02T05:24:18.343Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12424344.28,
		"hash": "7de68817d78f0b98e2e2602c70e6d77cee050241b4c41b6faa67f7117d5a0227"
	},
	{
		"id": "eeb19f579d34",
		"ts": "2026-09-02T05:24:18.568Z",
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
		"liquidityUsd": 582044.12,
		"hash": "eeb19f579d34de9e40d54b7dc2914bf450fa9b876f15e3d201e7c9e7ddab38a5"
	},
	{
		"id": "1e1793df66e9",
		"ts": "2026-09-02T00:53:38.705Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115084490.69,
		"hash": "1e1793df66e98eea0cf7bf5538ae099373efc7cd8b8fccdd5d1da7bfecb7917c"
	},
	{
		"id": "836a75bf230b",
		"ts": "2026-09-02T00:53:38.955Z",
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
		"liquidityUsd": 14843719.33,
		"hash": "836a75bf230b3d04bdef9dff271b57963be8f331ef1e221db08e84c7fd5617f0"
	},
	{
		"id": "ff87b7a2fdd1",
		"ts": "2026-09-02T00:53:39.231Z",
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
		"liquidityUsd": 929207.38,
		"hash": "ff87b7a2fdd16c1f6f74e0ac1814b49a3d62c9313409a3a261fb42cb92911cdb"
	},
	{
		"id": "04ceea7f4302",
		"ts": "2026-09-02T00:53:39.472Z",
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
		"liquidityUsd": 28394353.91,
		"hash": "04ceea7f4302bcdbc924738ebc738e7e4c178a94423e18240b0bd349597f3637"
	},
	{
		"id": "67e74a9d3d3a",
		"ts": "2026-09-02T00:53:40.092Z",
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
		"liquidityUsd": 4094854.59,
		"hash": "67e74a9d3d3ad0c75b986aef176c73ecd6c5ffa65f763b0eb562690daed049f9"
	},
	{
		"id": "af9bec9cbb72",
		"ts": "2026-09-02T00:53:40.349Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1143029.29,
		"hash": "af9bec9cbb72efe1f7519793f58ab08205106c693b6b19f1aa61f59c3bc32534"
	},
	{
		"id": "818636ce3db7",
		"ts": "2026-09-02T00:53:40.619Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28394353.91,
		"hash": "818636ce3db7107a01d09b6969a60f8fffec453f79c7aefe3a58724ed6d9efa0"
	},
	{
		"id": "5ef887d340ff",
		"ts": "2026-09-02T00:53:40.863Z",
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
		"liquidityUsd": 1652858.01,
		"hash": "5ef887d340ffa914a59b48e0ff58d3c16642a2bfbb39b282ededd1dc76f3651a"
	},
	{
		"id": "3ed6784b7c74",
		"ts": "2026-09-02T00:53:41.113Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1309359.35,
		"hash": "3ed6784b7c740dd0125e9542ef75c293cef222475ed3934a35ee40b0fbb9f9f2"
	},
	{
		"id": "29c204fc54df",
		"ts": "2026-09-02T00:53:41.367Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 784160.91,
		"hash": "29c204fc54df6f72d15911be5c69b62c7569a4da60323da60664e3573ec2aa94"
	},
	{
		"id": "93265e3890c3",
		"ts": "2026-09-02T00:53:41.651Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4043831.48,
		"hash": "93265e3890c3124ab469a4645fe8f059761d6a2ac67afaf71f1243cc409282a8"
	},
	{
		"id": "3d1a58af03b0",
		"ts": "2026-09-02T00:53:41.871Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1144925.98,
		"hash": "3d1a58af03b08c9517a5d1a279db5fe8c6824853982a97f8809ef62d2c427578"
	},
	{
		"id": "0660e6009516",
		"ts": "2026-09-02T00:53:42.090Z",
		"symbol": "VIBES",
		"token": "0xefFC8815487084a97edfdfF968b56Ea123421Acb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66864.23,
		"hash": "0660e600951600acd149ce3227b911ea7e240e2217a97c04a2ca435ae95fca46"
	},
	{
		"id": "608af206fa6c",
		"ts": "2026-09-02T00:53:42.312Z",
		"symbol": "RIPE",
		"token": "0x2A0a59d6B975828e781EcaC125dBA40d7ee5dDC0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 122827.96,
		"hash": "608af206fa6c94bf469674be3c757252baf278dd4dea977214d9b82816983040"
	},
	{
		"id": "7460a1126d86",
		"ts": "2026-09-02T00:53:42.531Z",
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
		"liquidityUsd": 609085.49,
		"hash": "7460a1126d86d6a678a91019266525db0779c474edb7e3ec63ff8b41caeeba51"
	},
	{
		"id": "1062ba95debb",
		"ts": "2026-09-02T00:53:42.752Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3256807.27,
		"hash": "1062ba95debb56781de708f7974b533fe90377e616fde3eaba430fa7e64a8c45"
	},
	{
		"id": "56219daeb169",
		"ts": "2026-09-02T00:53:42.969Z",
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
		"liquidityUsd": 433313.33,
		"hash": "56219daeb169969499679f15387c4aa8968f48ed0247a9bf6b5857e4d1e1ca70"
	},
	{
		"id": "1dddf5f72b38",
		"ts": "2026-09-02T00:53:43.188Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 334587.07,
		"hash": "1dddf5f72b38d5eb27fe29703731420f469103234f33e4b631ad2e5d3d46c554"
	},
	{
		"id": "ed6ede73e8a0",
		"ts": "2026-09-01T22:58:00.419Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114995588.29,
		"hash": "ed6ede73e8a04bc27f2509e3794ffcf58c0138012a56a9b8e302424056f1c718"
	},
	{
		"id": "85604562328d",
		"ts": "2026-09-01T22:58:01.110Z",
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
		"liquidityUsd": 17958147.32,
		"hash": "85604562328d5df16d039bf4c8620c557b1c665549b66f71fe668c947a487d07"
	},
	{
		"id": "be2d99e90f3b",
		"ts": "2026-09-01T22:58:01.592Z",
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
		"liquidityUsd": 930533.99,
		"hash": "be2d99e90f3b058d6d831d9ada95aceaa361bf5f4a710cab892b8d29a2eba967"
	},
	{
		"id": "97726b99f59b",
		"ts": "2026-09-01T22:58:01.857Z",
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
		"liquidityUsd": 28417265.67,
		"hash": "97726b99f59b17989bd258c3a8b31f6e4c69a6ccda527dc52b181206acea7914"
	},
	{
		"id": "cae89de71e3b",
		"ts": "2026-09-01T22:58:02.106Z",
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
		"liquidityUsd": 4088460.59,
		"hash": "cae89de71e3ba94b0b75454b53222f518c1006e667a2c20a6a4929ee162e6d66"
	},
	{
		"id": "e1882ec0acc6",
		"ts": "2026-09-01T22:58:02.357Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1145566.56,
		"hash": "e1882ec0acc660c7d624730ca89f5321eb5864b0d19556d6c494c3e7648c79be"
	},
	{
		"id": "a9e0021b549e",
		"ts": "2026-09-01T22:58:02.634Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28417265.67,
		"hash": "a9e0021b549e78be226761d71fbaac5319a9f14242a9011c78167a91f943d6fd"
	},
	{
		"id": "4c4db2d6f311",
		"ts": "2026-09-01T22:58:03.125Z",
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
		"liquidityUsd": 1653486.93,
		"hash": "4c4db2d6f31137e8472f3bfc9d4f767be2e8a8d6e3c310af1b69653bf3525a19"
	},
	{
		"id": "e9e6b0c2b247",
		"ts": "2026-09-01T22:58:03.870Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1280844.55,
		"hash": "e9e6b0c2b247b0a72b85cbcde3dc9e875a26b8842520d9befe0b4345587baaf0"
	},
	{
		"id": "9407d506979b",
		"ts": "2026-09-01T22:58:04.340Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 748671.58,
		"hash": "9407d506979b9bdf6a67837f31144d7063c087212881dc3eaa51d078af918ec8"
	},
	{
		"id": "2d3fd294d524",
		"ts": "2026-09-01T22:58:04.573Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4055657.03,
		"hash": "2d3fd294d524a7cdb043dc11092eb653bd470b1e0dea14e9d83b01e7f9f2f0d8"
	},
	{
		"id": "8eed1e1907de",
		"ts": "2026-09-01T22:58:04.805Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1153666.16,
		"hash": "8eed1e1907dea1dafa7593e603a9bb2ab310c557f4b04c3cb9b3f47812cdce9a"
	},
	{
		"id": "3d4642c1b17f",
		"ts": "2026-09-01T22:58:05.051Z",
		"symbol": "VIBES",
		"token": "0xefFC8815487084a97edfdfF968b56Ea123421Acb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 68125.86,
		"hash": "3d4642c1b17feee84fb7d9228f07d980e3687f4441c846ed6b1423628daaecb1"
	},
	{
		"id": "5e3aff03f6d2",
		"ts": "2026-09-01T22:58:05.287Z",
		"symbol": "RIPE",
		"token": "0x2A0a59d6B975828e781EcaC125dBA40d7ee5dDC0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 124567.39,
		"hash": "5e3aff03f6d2aba3268c6e23c1710a8fe085b6124881eccca826d07975ff56ef"
	},
	{
		"id": "8e7b72b4b0b5",
		"ts": "2026-09-01T22:58:05.520Z",
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
		"liquidityUsd": 606551.38,
		"hash": "8e7b72b4b0b5e68cea582be797e4a1036de8cda33a93daa28f3bc1cb029c9d21"
	},
	{
		"id": "7210323a9b0b",
		"ts": "2026-09-01T22:58:05.751Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3248208.39,
		"hash": "7210323a9b0be790154bcb6465451349b594dfc7429eb34a7f0799abc318fc4d"
	},
	{
		"id": "535704bfba56",
		"ts": "2026-09-01T22:58:06.003Z",
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
		"liquidityUsd": 448545.25,
		"hash": "535704bfba5645c1ba2b60b7d5f579b48b694a5aacafb0fcdad7b558fb8825c6"
	},
	{
		"id": "674d688a0bcb",
		"ts": "2026-09-01T22:58:06.254Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 351549.85,
		"hash": "674d688a0bcbe0a1d182ef4a298dc31e107e6604fc2f6143d782b4d92f1aa1d0"
	},
	{
		"id": "7fe64ccecc63",
		"ts": "2026-09-01T20:28:44.837Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115173292.9,
		"hash": "7fe64ccecc635cb586bf14ea82ea242788fc08570c2c9194f2f3ed2e0ed83d93"
	},
	{
		"id": "ac911c5a7884",
		"ts": "2026-09-01T20:28:45.191Z",
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
		"liquidityUsd": 17790576.7,
		"hash": "ac911c5a7884fbb5f37f9934f32a05bc73f35aea67a40be9626c213fdf892457"
	},
	{
		"id": "72482cf25180",
		"ts": "2026-09-01T20:28:45.480Z",
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
		"liquidityUsd": 932827.82,
		"hash": "72482cf25180f3d2d70a4694582ed710ca2b91cf686e57b492ca47424be95176"
	},
	{
		"id": "a318583c4183",
		"ts": "2026-09-01T20:28:45.673Z",
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
		"liquidityUsd": 28560195.81,
		"hash": "a318583c4183fa574958e68062f5be56b9d8ee46b31e4d3accfd828b20c3ee76"
	},
	{
		"id": "d4173bc7374b",
		"ts": "2026-09-01T20:28:45.860Z",
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
		"liquidityUsd": 4106372.55,
		"hash": "d4173bc7374b0f563a51e50082a6eba317e0b68fb50b677eb763965fbd52c22a"
	},
	{
		"id": "ae4aab3632e3",
		"ts": "2026-09-01T20:28:46.050Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1141707.27,
		"hash": "ae4aab3632e36a2fe9be4b4b34983d885aa785cb7cb64e6953a3c55ebc49bab1"
	},
	{
		"id": "0d9d747c94c5",
		"ts": "2026-09-01T20:28:46.252Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28560195.81,
		"hash": "0d9d747c94c5a17ad555de805136ded8a5da46b97bc4918b5ea7665246e57c1e"
	},
	{
		"id": "30c82ba87566",
		"ts": "2026-09-01T20:28:46.458Z",
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
		"liquidityUsd": 1658286.66,
		"hash": "30c82ba8756607b2f7d77342691e18cb912250975540d9a7b59fa1ea52a2a1b7"
	},
	{
		"id": "0d6116927daa",
		"ts": "2026-09-01T20:28:46.663Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1297475.56,
		"hash": "0d6116927daa1fd4a4941334dbc9151a274881c6e98d8836756c9b200b843d96"
	},
	{
		"id": "cfb7af5d1ddd",
		"ts": "2026-09-01T20:28:46.853Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4105956.22,
		"hash": "cfb7af5d1ddd9741efea2730401319a417dcc6539b143d2be23548aeae579bd0"
	},
	{
		"id": "436d0243abe2",
		"ts": "2026-09-01T20:28:47.035Z",
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
		"liquidityUsd": 733124.77,
		"hash": "436d0243abe2f0f32c6403de178f1c6f7f20f2b7b4e1b85f4228d6e3d67a0353"
	},
	{
		"id": "9b7d80a4c8bb",
		"ts": "2026-09-01T20:28:47.228Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1158158.47,
		"hash": "9b7d80a4c8bbc940f06b5ea4076a0c8928966fa3c3b15dfb3cdd88d9ea96f6ad"
	},
	{
		"id": "106aeb16567e",
		"ts": "2026-09-01T20:28:47.415Z",
		"symbol": "VIBES",
		"token": "0xefFC8815487084a97edfdfF968b56Ea123421Acb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69134.95,
		"hash": "106aeb16567e37dc4bf086f6709f9ed992bd78568c292a9db47373db5a83c921"
	},
	{
		"id": "5b64869a536b",
		"ts": "2026-09-01T20:28:47.619Z",
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
		"liquidityUsd": 627698.72,
		"hash": "5b64869a536b4a2cd2e77862343c41b86c547cf97b2fa51f5828cba3ab280407"
	},
	{
		"id": "780b33ab457e",
		"ts": "2026-09-01T20:28:47.816Z",
		"symbol": "RIPE",
		"token": "0x2A0a59d6B975828e781EcaC125dBA40d7ee5dDC0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 96681.85,
		"hash": "780b33ab457e2d4a05c9626b39b9f2d6531d30343f2964e92542929df8c039fb"
	},
	{
		"id": "37e3730c3778",
		"ts": "2026-09-01T20:28:48.004Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3273877.29,
		"hash": "37e3730c377861481eb04d4c43b11452b09dbd939f6abbc7a0ae7e754fa54b21"
	},
	{
		"id": "cb92a46aa76e",
		"ts": "2026-09-01T20:28:48.186Z",
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
		"liquidityUsd": 490909.25,
		"hash": "cb92a46aa76e1199dfaf3606063420bdd70390784fd21a386cc4fdf4e55e2169"
	},
	{
		"id": "cec36724d793",
		"ts": "2026-09-01T20:28:48.437Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 367559.11,
		"hash": "cec36724d7933341988ab1d50f42a9dea327c51d969e3cc32e1ce1fd69e9aa40"
	},
	{
		"id": "683045f2b953",
		"ts": "2026-09-01T17:33:17.735Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115287123.79,
		"hash": "683045f2b953006c5a95fdb44e39c50aab24663074944f015e17644f6eaf8763"
	},
	{
		"id": "04a1c20c260e",
		"ts": "2026-09-01T17:33:18.071Z",
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
		"liquidityUsd": 19650925.39,
		"hash": "04a1c20c260ef648a29a00a337dfed9859169d264e88e747cb523e00631d90de"
	},
	{
		"id": "18d1d2259fc8",
		"ts": "2026-09-01T17:33:18.366Z",
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
		"liquidityUsd": 943023.24,
		"hash": "18d1d2259fc8ab8cb35c4dbd264e6c13c088eb1b572fe79a7b04a03d77d31d31"
	},
	{
		"id": "3baada4635ff",
		"ts": "2026-09-01T17:33:18.627Z",
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
		"liquidityUsd": 28699739.35,
		"hash": "3baada4635ffd35a280cda0fc1fd1fe61adfff72345dd412d36e3c5c2561ba08"
	},
	{
		"id": "ebdc58e01164",
		"ts": "2026-09-01T17:33:18.882Z",
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
		"liquidityUsd": 4148301.49,
		"hash": "ebdc58e01164baeb9f1897d9fc47b71af540c7a22e78cc87b1e462d29e922b47"
	},
	{
		"id": "f3bc7758d3c8",
		"ts": "2026-09-01T17:33:22.529Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1155523.1,
		"hash": "f3bc7758d3c83037295e4049d43f8b1d549529c6d569951ae7415505b07cf5ae"
	},
	{
		"id": "b0861e263483",
		"ts": "2026-09-01T17:33:22.783Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28699739.35,
		"hash": "b0861e263483c28fd9e2c6317f8e00428964214d38476eb362005a0fb3905705"
	},
	{
		"id": "9eae3b82d3a4",
		"ts": "2026-09-01T17:33:23.041Z",
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
		"liquidityUsd": 1668695.38,
		"hash": "9eae3b82d3a4e7fb95217366ac51803e6fcbf1d1d7e41c4cfbf179aad73951d1"
	},
	{
		"id": "6fe8cb221fa4",
		"ts": "2026-09-01T17:33:23.298Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 745624.26,
		"hash": "6fe8cb221fa45f0e7dad4a2053b459a86f3d103e2cb5e510aad6a79b19421624"
	},
	{
		"id": "5ae856921588",
		"ts": "2026-09-01T17:33:23.567Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1313444.91,
		"hash": "5ae856921588b345f0188cf1dbfed340c6685494f1d73ecee3ac547d0059099b"
	},
	{
		"id": "733612b9aa36",
		"ts": "2026-09-01T17:33:23.802Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4208740.88,
		"hash": "733612b9aa366ce9acc029cd8255dea544a279b996822181995b96627d4b16ff"
	},
	{
		"id": "76262272e012",
		"ts": "2026-09-01T17:33:24.036Z",
		"symbol": "VIBES",
		"token": "0xefFC8815487084a97edfdfF968b56Ea123421Acb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 76953.18,
		"hash": "76262272e012c402a2a97433ebab3fcf8c39900d01acdca3bc3b0fd25bf11c08"
	},
	{
		"id": "b7754d554f5d",
		"ts": "2026-09-01T17:33:24.270Z",
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
		"liquidityUsd": 649636.42,
		"hash": "b7754d554f5d3e89e2cb2a5398625c6ad4966b5ca65c27334f9a4c97ba213ee4"
	},
	{
		"id": "78207adef984",
		"ts": "2026-09-01T17:33:24.506Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1169591.68,
		"hash": "78207adef98453c5a6e115cb4a661fbc58acff4ec3841fa94f936e7eb05e50ec"
	},
	{
		"id": "77cc69d355d5",
		"ts": "2026-09-01T17:33:24.741Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3265093.92,
		"hash": "77cc69d355d503dd3fa552f6cbff9790112dfc2f99148f3cc3f6543a41e5ed47"
	},
	{
		"id": "cd450ea5b9a9",
		"ts": "2026-09-01T17:33:24.977Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12391720.05,
		"hash": "cd450ea5b9a930d1803be0ecc8ce5039b010f040fb5c4975414631418f34423f"
	},
	{
		"id": "028319d3170d",
		"ts": "2026-09-01T17:33:25.212Z",
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
		"liquidityUsd": 421176.94,
		"hash": "028319d3170da915ab71d98e3951cbb0a00309bd904e43527e02fa9937f0281e"
	},
	{
		"id": "704b9d5d14aa",
		"ts": "2026-09-01T17:33:25.446Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 205239.92,
		"hash": "704b9d5d14aa38966aeb8db99c376632e308b6ac0b4a03f5334520dcf012d01a"
	},
	{
		"id": "e5fd6f219dc0",
		"ts": "2026-09-01T13:01:20.746Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115612352.32,
		"hash": "e5fd6f219dc035dc691653d475e550fc2c9b8a3cbaf8a2f0631585248b9fb2ea"
	},
	{
		"id": "f4818787a50a",
		"ts": "2026-09-01T13:01:21.006Z",
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
		"liquidityUsd": 13659368.53,
		"hash": "f4818787a50a975c246bf9d7a930b69b4c8468e065cea744c59b9c5bd984cb57"
	},
	{
		"id": "e968f7170efa",
		"ts": "2026-09-01T13:01:21.490Z",
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
		"liquidityUsd": 949376.27,
		"hash": "e968f7170efaec6c968ac3838d76880b23c20464ece7fc5f027ee257a196cce6"
	},
	{
		"id": "a87dad37ca9f",
		"ts": "2026-09-01T13:01:21.743Z",
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
		"liquidityUsd": 28906827.71,
		"hash": "a87dad37ca9f5c3c8d8d4aa1d1c89dd18cd0126de443c9b3193909ae3b1676e8"
	},
	{
		"id": "6bb421d5ed3b",
		"ts": "2026-09-01T13:01:21.989Z",
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
		"liquidityUsd": 4171010.51,
		"hash": "6bb421d5ed3bd4745652215723e281da04717994542e5d3c2796a1303451dd79"
	},
	{
		"id": "41ab95d805a8",
		"ts": "2026-09-01T13:01:22.250Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1162371.72,
		"hash": "41ab95d805a84ef23fe75593ecb487f96d4cc226ccfbcb059bd60f19a28a771f"
	},
	{
		"id": "c4d768cfc303",
		"ts": "2026-09-01T13:01:22.501Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28906827.71,
		"hash": "c4d768cfc30341e5804acc126463a446f83d5f8ded36ac222fb45250dad7536a"
	},
	{
		"id": "05b762c7c57e",
		"ts": "2026-09-01T13:01:22.742Z",
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
		"liquidityUsd": 1678725.58,
		"hash": "05b762c7c57eb9b7bc28fa6b304f899f925c420fbb2721a564f4aa230dc46d57"
	},
	{
		"id": "402e705cc344",
		"ts": "2026-09-01T13:01:23.222Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 788820.22,
		"hash": "402e705cc344cf29c1ab99b7769b2eae8fd3705417871ffd62bbff188b094825"
	},
	{
		"id": "8334b36dcfb7",
		"ts": "2026-09-01T13:01:23.473Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 219382.21,
		"hash": "8334b36dcfb73db969464d8cdd8dc6e1afab2343a778be28b19e9d39c5cf1cda"
	},
	{
		"id": "82b44cbfd3f2",
		"ts": "2026-09-01T13:01:23.697Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1368694.5,
		"hash": "82b44cbfd3f2efdcd296657131618a41d19b60d61b3c7225517d47e2e88ff5e5"
	},
	{
		"id": "21680edf162d",
		"ts": "2026-09-01T13:01:23.943Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4277903.98,
		"hash": "21680edf162ddaf6f8c46f42bc9955926be9fab47d567946df8afed5a3086d33"
	},
	{
		"id": "c7392a06d910",
		"ts": "2026-09-01T13:01:24.180Z",
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
		"liquidityUsd": 687449.75,
		"hash": "c7392a06d9106389048bf51e0d2e00bbb2d62fa19a9510fc5951c1a84b0ac1d6"
	},
	{
		"id": "409e0f38d5d8",
		"ts": "2026-09-01T13:01:24.410Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100103.82,
		"hash": "409e0f38d5d871de71e2fde076a4feb3e6cae20f873629d4713ffaa646b8df14"
	},
	{
		"id": "35abc728601c",
		"ts": "2026-09-01T13:01:24.658Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 400935.98,
		"hash": "35abc728601cfc7d17d3d8a2fbce92986ed6aa16cb86b98ead0bf426fda1ee5b"
	},
	{
		"id": "2d041675f959",
		"ts": "2026-09-01T13:01:24.894Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1170873.38,
		"hash": "2d041675f959a00cdebe7d330a8fc7b4e68e9ecb633a357a28206dd306f490b7"
	},
	{
		"id": "38dce30d1450",
		"ts": "2026-09-01T13:01:25.116Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12499660.38,
		"hash": "38dce30d1450a88b865ddf83e5c6e8d5122f4ea13bb73d6fcc1a2912a1facb58"
	},
	{
		"id": "9b5e032181c6",
		"ts": "2026-09-01T13:01:25.357Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3345597.8,
		"hash": "9b5e032181c6734b1ad5c8e149cf1ca58260003c10005586a2ae2d9e87c75b83"
	},
	{
		"id": "ec87187a763d",
		"ts": "2026-09-01T07:10:53.257Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115534731.39,
		"hash": "ec87187a763d663ee6fd09618fd51c81e4bf83e676bbac5640aaedd9bef4d809"
	},
	{
		"id": "3217957f6566",
		"ts": "2026-09-01T07:10:53.502Z",
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
		"liquidityUsd": 19946500.15,
		"hash": "3217957f6566705e7886e8b2819a6b0ff04ae566d69306124bef6a59796971b3"
	},
	{
		"id": "dd3c6b1c97aa",
		"ts": "2026-09-01T07:10:53.757Z",
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
		"liquidityUsd": 962135.97,
		"hash": "dd3c6b1c97aa1852599b197408779050d316a3f3b67374aadd051694ce843587"
	},
	{
		"id": "8eae7d1a12c7",
		"ts": "2026-09-01T07:10:53.995Z",
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
		"liquidityUsd": 29085440.27,
		"hash": "8eae7d1a12c79718d98a6b2118e2f69f8ff21d94ebb4eb5588c5cf9fb7d29761"
	},
	{
		"id": "9ceb840c1761",
		"ts": "2026-09-01T07:10:54.250Z",
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
		"liquidityUsd": 4267638.73,
		"hash": "9ceb840c17613c290e8ce0ce69a5feb5c722c82f7669bfa528d373fa2cdf4ce9"
	},
	{
		"id": "d330603452c3",
		"ts": "2026-09-01T07:10:54.501Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180626.11,
		"hash": "d330603452c396a47dc11ef8f48dcc654fe144e9c9bfb1726e510f730128701d"
	},
	{
		"id": "8f1d87c70585",
		"ts": "2026-09-01T07:10:54.752Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29085440.27,
		"hash": "8f1d87c70585463a299a5a9ca0e5980bac283455da88ab24fefc3669126b0e0b"
	},
	{
		"id": "28c63308cdd0",
		"ts": "2026-09-01T07:10:55.007Z",
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
		"liquidityUsd": 3184056.99,
		"hash": "28c63308cdd078efe698d15de86bc28961f41d76e647d0e7d1405f70e7b9affd"
	},
	{
		"id": "1e47f93f0a37",
		"ts": "2026-09-01T07:10:55.263Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 736924.38,
		"hash": "1e47f93f0a372451939904f502928993aa3b5561aaf17065691bbbdb4922768c"
	},
	{
		"id": "4709393746bd",
		"ts": "2026-09-01T07:10:55.513Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1364494.03,
		"hash": "4709393746bd6a5fce356f00ac0302c50a2d2a289a7f2b1961413e25724df1ca"
	},
	{
		"id": "460667e0ae63",
		"ts": "2026-09-01T07:10:55.735Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207117.94,
		"hash": "460667e0ae639b8ef51a3043cb8ffc3db7d5f4de0bc59ed54d8c0b5e0910d999"
	},
	{
		"id": "1b6b5f69cb37",
		"ts": "2026-09-01T07:10:55.972Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 412302.14,
		"hash": "1b6b5f69cb37a9a25c0c96248ee14540f41b6baa0d5184f3950a5d930bd25af9"
	},
	{
		"id": "5de53f3b8d99",
		"ts": "2026-09-01T07:10:56.208Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4261745.68,
		"hash": "5de53f3b8d9961f7cd129dec065e684c4e00d2bb5795a742ffec6b6dc9db5a3b"
	},
	{
		"id": "58eff7cd1059",
		"ts": "2026-09-01T07:10:56.430Z",
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
		"liquidityUsd": 710360.22,
		"hash": "58eff7cd1059300a425559399378308c25cba9c2dca8659dda31f0469525e7ed"
	},
	{
		"id": "49007ff0bb87",
		"ts": "2026-09-01T07:10:56.669Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94336.97,
		"hash": "49007ff0bb87e8a1e529db6071fb388d0d2c2f59d765e8595b640da943b65081"
	},
	{
		"id": "3b211ae40032",
		"ts": "2026-09-01T07:10:56.904Z",
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
		"liquidityUsd": 484639.38,
		"hash": "3b211ae4003277fdfe2a342b385395b2d9773cc636baf41d08b99fdaf23df31e"
	},
	{
		"id": "592ba24865b6",
		"ts": "2026-09-01T07:10:57.126Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1195857.12,
		"hash": "592ba24865b68b4d6d060cf4555b777339b4079f936d1811093fc64c82ec6537"
	},
	{
		"id": "6659d56c3364",
		"ts": "2026-09-01T07:10:57.363Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3403038.29,
		"hash": "6659d56c336456f983786dd922ded46a806e732da90789cf84ce3bb16c0fe96f"
	},
	{
		"id": "431f45e8e339",
		"ts": "2026-09-01T01:35:23.487Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115011105.38,
		"hash": "431f45e8e339338840e7a48a93d639ab09770f796d20590d8aa060af8c832164"
	},
	{
		"id": "e92507a83a84",
		"ts": "2026-09-01T01:35:23.801Z",
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
		"liquidityUsd": 19955737.33,
		"hash": "e92507a83a840fe46ea18da403fc5b182a7130669012a88168be47a8ead882f9"
	},
	{
		"id": "a828815c1936",
		"ts": "2026-09-01T01:35:24.264Z",
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
		"liquidityUsd": 960650.88,
		"hash": "a828815c1936a503abae402f1d41551cbe01b469a7b83e659bc7ce7de0fddf38"
	},
	{
		"id": "dac6ad9b4603",
		"ts": "2026-09-01T01:35:24.458Z",
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
		"liquidityUsd": 28477534.39,
		"hash": "dac6ad9b460335103fa39994f8360a6a6e67d4bced1e51d682def93415a0f98a"
	},
	{
		"id": "94850ac69807",
		"ts": "2026-09-01T01:35:24.658Z",
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
		"liquidityUsd": 4190474.71,
		"hash": "94850ac69807637819cc093ae30740048403fa88b1fadf91d8b141f969cb91d2"
	},
	{
		"id": "8131994799d2",
		"ts": "2026-09-01T01:35:24.846Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1173865.14,
		"hash": "8131994799d2338a05fe9a4af40782a93395292c1fbe7dfa5df2a63cec55785d"
	},
	{
		"id": "89aa2ba451bb",
		"ts": "2026-09-01T01:35:25.053Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 826445.98,
		"hash": "89aa2ba451bbee097ad18ccd136dbd44edd2be1177ed372a6be7195946af85f7"
	},
	{
		"id": "5bb0a809d787",
		"ts": "2026-09-01T01:35:25.254Z",
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
		"liquidityUsd": 1688423.92,
		"hash": "5bb0a809d787ecfd0083b031ae37e3f5882b44892fb96e9bd69e36c338319c9c"
	},
	{
		"id": "b585210f0604",
		"ts": "2026-09-01T01:35:25.440Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 754844.98,
		"hash": "b585210f0604cb3215d4cbaf87b5a5f1834e366a939e105ee2b339a1ca5d288f"
	},
	{
		"id": "18c2b5b59b26",
		"ts": "2026-09-01T01:35:25.629Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1383461.18,
		"hash": "18c2b5b59b26f3ae4a2494ce05d2d2dcf3941b5441a3b46c0dd127e953a0e252"
	},
	{
		"id": "e25b203654ec",
		"ts": "2026-09-01T01:35:25.818Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 92185.01,
		"hash": "e25b203654eca3feea3e2cca5a6e1b856f160f60592e03e449b8b480fcd5bbea"
	},
	{
		"id": "beb3fc71113f",
		"ts": "2026-09-01T01:35:26.076Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 198988.85,
		"hash": "beb3fc71113fa9454d190c5b2e119387524114423e864630a04dce3539e8e45b"
	},
	{
		"id": "4361c7e9df2a",
		"ts": "2026-09-01T01:35:26.265Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 424057.71,
		"hash": "4361c7e9df2aba6063680c0cd9c00a6d070fe7b3dffdfa6bc9f53b989b03755a"
	},
	{
		"id": "6734373733ba",
		"ts": "2026-09-01T01:35:26.458Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4382142.83,
		"hash": "6734373733ba15d39cfa38d0cce484153775f7ca9290be1f4654e32bc8c9b890"
	},
	{
		"id": "dcbc2a8138c6",
		"ts": "2026-09-01T01:35:26.646Z",
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
		"liquidityUsd": 444207.77,
		"hash": "dcbc2a8138c68b5c24565df205709ab46826c8b2000b477606cc781e6732ce4d"
	},
	{
		"id": "f763a9b74094",
		"ts": "2026-09-01T01:35:26.839Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1823385.97,
		"hash": "f763a9b74094cbe3e494e5ba59abf7d2dd8308cb95ffc521f9d9a5f9f1448ed1"
	},
	{
		"id": "6e4cedd5730b",
		"ts": "2026-09-01T01:35:27.029Z",
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
		"liquidityUsd": 709369.31,
		"hash": "6e4cedd5730b5e4e277ed6ad26f4f9db550b503a5348d53b5b3e0ff66f6f27cd"
	},
	{
		"id": "16f309afb0aa",
		"ts": "2026-09-01T01:35:27.215Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1189664.5,
		"hash": "16f309afb0aa38cc7d79d1065991ee54f6e7db1f52999d7e6014dba443f50196"
	},
	{
		"id": "687805bf7b59",
		"ts": "2026-08-31T22:22:26.606Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115194556.14,
		"hash": "687805bf7b599282570f55ddeb6e677ae7f27b162ff9d32e73deafeca6eabe29"
	},
	{
		"id": "0c80856bcb25",
		"ts": "2026-08-31T22:22:26.812Z",
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
		"liquidityUsd": 18613703.99,
		"hash": "0c80856bcb2508b47d770c790e63db46a88512e55aa48a8ca107914873168e52"
	},
	{
		"id": "88cc80871133",
		"ts": "2026-08-31T22:22:27.007Z",
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
		"liquidityUsd": 966718.43,
		"hash": "88cc8087113373ea9c4f34792cfcb2c496b0e056be22c376db05ccae860d9f89"
	},
	{
		"id": "6c8f7bcfae8f",
		"ts": "2026-08-31T22:22:27.200Z",
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
		"liquidityUsd": 28652719.27,
		"hash": "6c8f7bcfae8f762170427bac7d04b25b7e77ccc073649b3959915fd15087bb49"
	},
	{
		"id": "8f2d5b83aebd",
		"ts": "2026-08-31T22:22:27.412Z",
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
		"liquidityUsd": 4193665.49,
		"hash": "8f2d5b83aebd59198c767397502ae347f72ea5561d39b72549d8725ca0bc7324"
	},
	{
		"id": "53107e6a06cd",
		"ts": "2026-08-31T22:22:27.604Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1173940.88,
		"hash": "53107e6a06cd91eb1d04cea4b20e42867db1ba94ccf29c601e939a3ba41b9996"
	},
	{
		"id": "2cc8c5f34637",
		"ts": "2026-08-31T22:22:27.796Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 830503.34,
		"hash": "2cc8c5f34637333a640e4ab93a9bb00be2a35fe1de69395d5a040c41bd487ddc"
	},
	{
		"id": "73acb52a1ecb",
		"ts": "2026-08-31T22:22:27.999Z",
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
		"liquidityUsd": 1695456.86,
		"hash": "73acb52a1ecb39189ec5ddcca6b05e3e643a8c0f7103ac562eca49e17c31cc50"
	},
	{
		"id": "4429461d5139",
		"ts": "2026-08-31T22:22:28.199Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 782571.6,
		"hash": "4429461d51398ef642374560fe2a3aaf388432f46862da6d5a5f42329323004e"
	},
	{
		"id": "784c11cab102",
		"ts": "2026-08-31T22:22:28.411Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1412762.9,
		"hash": "784c11cab1024b835cbcbb53616862fbad96f25729bb1667bb3fb025bfed23ae"
	},
	{
		"id": "8362a66e5b60",
		"ts": "2026-08-31T22:22:28.657Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 94167.46,
		"hash": "8362a66e5b60149a200601173bfd742691f03781506e60c9d016701e9a7679b9"
	},
	{
		"id": "7ce231aff3a9",
		"ts": "2026-08-31T22:22:28.850Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 441408.31,
		"hash": "7ce231aff3a94d5fb277a503ab7446ef7bf3f000f547a191b59d20cba586667c"
	},
	{
		"id": "470668ccc09e",
		"ts": "2026-08-31T22:22:29.032Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 206197.34,
		"hash": "470668ccc09e4cd946019d25ec4cfb16490c32b286187441b6d4c3164dc8c08b"
	},
	{
		"id": "f21cb1d166f9",
		"ts": "2026-08-31T22:22:29.230Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4708849.91,
		"hash": "f21cb1d166f9a923216b251004ecca883bd7f40d14cfcbedd90995e24a5f49d9"
	},
	{
		"id": "a057148869cc",
		"ts": "2026-08-31T22:22:29.428Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1196680.06,
		"hash": "a057148869cc30aebaa3fe627a8845365c44d5b36ebd548b3ffcd319c5954d50"
	},
	{
		"id": "127df8a5f032",
		"ts": "2026-08-31T22:22:29.637Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1842667.05,
		"hash": "127df8a5f032987be9ab413c85e45b6a638c66c928af30f2b4d7eec50ac9374a"
	},
	{
		"id": "bcc327b3301d",
		"ts": "2026-08-31T22:22:29.818Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 136888.63,
		"hash": "bcc327b3301d7aa5fe6e6ef0bff159ea660e220aae88d0a7a7b981c07a416b84"
	},
	{
		"id": "82b6a9f6583c",
		"ts": "2026-08-31T22:22:30.016Z",
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
		"liquidityUsd": 712183.99,
		"hash": "82b6a9f6583cc1ae7d3fc2e5749aca3f92dceecc3b00c777b568719e04c7fdf4"
	},
	{
		"id": "e1f78ba54755",
		"ts": "2026-08-31T17:50:20.473Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115072117.42,
		"hash": "e1f78ba54755ccdc012045f5adf844164bc4c294f2c04f516ad937301aa7b43f"
	},
	{
		"id": "539324050498",
		"ts": "2026-08-31T17:50:20.739Z",
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
		"liquidityUsd": 14664042.93,
		"hash": "53932405049807cac7940f235c4ac78916178088f13f8cae8bb56a62511faa67"
	},
	{
		"id": "7abee4334570",
		"ts": "2026-08-31T17:50:20.987Z",
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
		"liquidityUsd": 971889.5,
		"hash": "7abee4334570e74c85e6c9eeed5bb37c35e1721d854e16de6cfa270a54ee8e82"
	},
	{
		"id": "c4ab7c11dc82",
		"ts": "2026-08-31T17:50:21.209Z",
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
		"liquidityUsd": 28620135.03,
		"hash": "c4ab7c11dc8291bd355ab1cee4b31f47406d6c35aa709c8a0dd9136a570b2cf7"
	},
	{
		"id": "76a1c5975d01",
		"ts": "2026-08-31T17:50:21.597Z",
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
		"liquidityUsd": 4156989,
		"hash": "76a1c5975d01fbbb731302760bb9440cd8212a407fcab9e7a693ac11e43684e9"
	},
	{
		"id": "168998fdbcdb",
		"ts": "2026-08-31T17:50:21.808Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1160137.27,
		"hash": "168998fdbcdb0ca4b6f8a31faafe5c971a8426a0ba8aba33909b615f44b6e536"
	},
	{
		"id": "34bc81d76dbe",
		"ts": "2026-08-31T17:50:22.015Z",
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
		"liquidityUsd": 424860.34,
		"hash": "34bc81d76dbe7712218a8bed4f1d19904cb031a2e62d5d5910970c8e858b0942"
	},
	{
		"id": "d80f69e4b602",
		"ts": "2026-08-31T17:50:22.255Z",
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
		"liquidityUsd": 1695793.01,
		"hash": "d80f69e4b60299f9779c3e129a551067f0f5316ee47b35490085d9d676def39a"
	},
	{
		"id": "cfc69ceb3866",
		"ts": "2026-08-31T17:50:22.488Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 835631.66,
		"hash": "cfc69ceb38668ff02f904944c11cf54db381095a55812588a907f805bb1be1b1"
	},
	{
		"id": "dbc0e57d4a96",
		"ts": "2026-08-31T17:50:22.852Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1415801.7,
		"hash": "dbc0e57d4a961fe5f101aca9f8140846c059b3d6c7f5951896e1044f8195a193"
	},
	{
		"id": "71b921f6df9f",
		"ts": "2026-08-31T17:50:23.046Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 89887.55,
		"hash": "71b921f6df9f9e05717cfd0c8f21fcb35809b1c1befae56e70eaadca0d33ecb8"
	},
	{
		"id": "25d01ee969f3",
		"ts": "2026-08-31T17:50:23.251Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 501045.96,
		"hash": "25d01ee969f31f6056a8ecc4f413754e37389fbe3abd63cdbd0fe8f7903b3d6a"
	},
	{
		"id": "c282473181b4",
		"ts": "2026-08-31T17:50:23.454Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1196375.85,
		"hash": "c282473181b46b6a5cf108570b5f378f57b0418acff122c47ab075fb68ea0a8a"
	},
	{
		"id": "7f5e55f4694d",
		"ts": "2026-08-31T17:50:23.644Z",
		"symbol": "EVE",
		"token": "0xe7D192e52Fa418236d6EEcf7D5Eb38dA9Dd11ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 167691.64,
		"hash": "7f5e55f4694dc3cc0bb8a7833e46ad41e3f25911f72b3f757dd2239e934575a8"
	},
	{
		"id": "5bb453d6c1cd",
		"ts": "2026-08-31T17:50:23.853Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12876938.12,
		"hash": "5bb453d6c1cd4c3febd9f13bbf5079ddce55983cacb799e2bf0f0cacd4cbb309"
	},
	{
		"id": "6ea4c5c7ba7f",
		"ts": "2026-08-31T17:50:24.048Z",
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
		"liquidityUsd": 699620.59,
		"hash": "6ea4c5c7ba7f84cb1e85f64b82fbc1a8e8af180e1836428602f8764cf4ea284f"
	},
	{
		"id": "6aec6c2ee48a",
		"ts": "2026-08-31T17:50:24.244Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1811725.37,
		"hash": "6aec6c2ee48ac05adbb58e28827a71e73e26fce4160170e0047532ed1fc02e4c"
	},
	{
		"id": "a24d68f8c56e",
		"ts": "2026-08-31T17:50:24.457Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 139757.28,
		"hash": "a24d68f8c56ef100889f000594fdfd41023ccecf85112aa3eb0c80fec03348e9"
	},
	{
		"id": "da6d2c0ae636",
		"ts": "2026-08-31T10:27:02.041Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114555617.24,
		"hash": "da6d2c0ae636c981981e8d0fd9dcaca921d968fa6a5164f5a15a6f5176cd3197"
	},
	{
		"id": "b51146d09d56",
		"ts": "2026-08-31T10:27:02.396Z",
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
		"liquidityUsd": 17990560.16,
		"hash": "b51146d09d56c1f8ce215247710ebed41f33737ab1fa40824a44dfa583177347"
	}
]
