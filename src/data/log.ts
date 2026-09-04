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
	"updatedAt": "2026-09-04T05:32:45.698Z",
	"tokensScored": 16083,
	"verdictsIssued": 16083,
	"safe": 13664,
	"risky": 1191,
	"likelyRug": 1228,
	"ticks": 924
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "fb930b96aaba",
		"ts": "2026-09-04T05:32:41.184Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118498146.79,
		"hash": "fb930b96aaba5c7dff317d0a2b17ecde2c1c35ff672074ef94761299289a3821"
	},
	{
		"id": "56b4e6bac223",
		"ts": "2026-09-04T05:32:41.648Z",
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
		"liquidityUsd": 18237501.47,
		"hash": "56b4e6bac223e6cf07035733e23b232f166ac429e180bf8bccd2ad80b7eb6275"
	},
	{
		"id": "12b2979dba98",
		"ts": "2026-09-04T05:32:41.897Z",
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
		"liquidityUsd": 1001763.31,
		"hash": "12b2979dba98c431e4dd9a02481474aa4ff7c0d074e699e108caece11d37024f"
	},
	{
		"id": "1f51b8bd64fb",
		"ts": "2026-09-04T05:32:42.147Z",
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
		"liquidityUsd": 29482708.32,
		"hash": "1f51b8bd64fbd67f1d84da1e44dba63e329327b8406b95f7ed971818ea38b288"
	},
	{
		"id": "d0bf4ed18dc0",
		"ts": "2026-09-04T05:32:42.394Z",
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
		"liquidityUsd": 4297451.54,
		"hash": "d0bf4ed18dc0f30975587c938589bd542353d8c71a07180fed76b8face760b44"
	},
	{
		"id": "15d0a4a16e11",
		"ts": "2026-09-04T05:32:42.652Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1171006.03,
		"hash": "15d0a4a16e11fc1c667507979f8554412b5495b227aa3fc787615070c5470e60"
	},
	{
		"id": "f7b3a1402136",
		"ts": "2026-09-04T05:32:42.894Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3088063.3,
		"hash": "f7b3a1402136e947aa3813e33f9542d39ae54499f009e0649f848ebfb92d95f6"
	},
	{
		"id": "2f261a931ed3",
		"ts": "2026-09-04T05:32:43.143Z",
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
		"liquidityUsd": 2858202.92,
		"hash": "2f261a931ed339046651164617b052740fea84f968d5d8fe98f570bc0dc503b8"
	},
	{
		"id": "89478956aab0",
		"ts": "2026-09-04T05:32:43.396Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1047859.35,
		"hash": "89478956aab0f3316bc0123689b4d1e0cb1177d7be63f09e841fef4cb2485208"
	},
	{
		"id": "701f6886020e",
		"ts": "2026-09-04T05:32:43.647Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1334251.65,
		"hash": "701f6886020e75c5cd99d047489c190f1ec04a97710607c3e9e76b61381606ec"
	},
	{
		"id": "3de554a2664a",
		"ts": "2026-09-04T05:32:43.877Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 124364.49,
		"hash": "3de554a2664adc9695cf653ebe0a9ae4794ba325517e74b1351b9b9cfd6838a5"
	},
	{
		"id": "e58e46304783",
		"ts": "2026-09-04T05:32:44.104Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 911527.4,
		"hash": "e58e4630478371975606707517fd0e31bffd10bd16ef343c0a6a2600d89b1d51"
	},
	{
		"id": "5c4ebfdbf4ce",
		"ts": "2026-09-04T05:32:44.331Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100867.36,
		"hash": "5c4ebfdbf4cefd46689dc471cc735a00ca4ea0d73c238189c5ca802499faccaf"
	},
	{
		"id": "2ed26f7cf109",
		"ts": "2026-09-04T05:32:44.558Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1916241.63,
		"hash": "2ed26f7cf1098924e8fce59c472f522e2ce58735524e8fc606ef98a8ebb0b7c3"
	},
	{
		"id": "6aefe723c488",
		"ts": "2026-09-04T05:32:44.785Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 152657.2,
		"hash": "6aefe723c48887b1ca10210ba7aeb76a251738e0232752b148d9152af3479fab"
	},
	{
		"id": "6879f6de5925",
		"ts": "2026-09-04T05:32:45.012Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3292196.99,
		"hash": "6879f6de592549a84c1f5da9aa3ad7c3e2a24d2723a9daf25202065e62a5098e"
	},
	{
		"id": "5dd9096563f1",
		"ts": "2026-09-04T05:32:45.240Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1170310.99,
		"hash": "5dd9096563f1a0ea82109b33b55fd6162e5e5fc5c189aef204015b692708376b"
	},
	{
		"id": "541ed3263f17",
		"ts": "2026-09-04T05:32:45.470Z",
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
		"liquidityUsd": 1087484.13,
		"hash": "541ed3263f17f8e0aa4a81611515f7ed635f90526baab11ee22db654125c5811"
	},
	{
		"id": "6f656311ae01",
		"ts": "2026-09-04T05:32:45.698Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4120416.55,
		"hash": "6f656311ae0117133b3d628c9799c0be0ef9cddb49dce7033c2653a2bb1e6738"
	},
	{
		"id": "674aa60356ba",
		"ts": "2026-09-04T00:43:08.017Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118718638.97,
		"hash": "674aa60356ba9fd795eea1ce23938bde8d72fe6096e73b0c7d43bec83e00ecf8"
	},
	{
		"id": "804e51104d82",
		"ts": "2026-09-04T00:43:08.275Z",
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
		"liquidityUsd": 14162627.38,
		"hash": "804e51104d82787e39e8b36215e3a2cb5de92e9193c3fc7e4778eec10b0ace51"
	},
	{
		"id": "19aaa3821900",
		"ts": "2026-09-04T00:43:08.531Z",
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
		"liquidityUsd": 989901.11,
		"hash": "19aaa38219002478d92bc936a3031f0d50f82e30e7bacde97b9a5468b9bf8e1d"
	},
	{
		"id": "91f58585884e",
		"ts": "2026-09-04T00:43:08.819Z",
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
		"liquidityUsd": 29473499.79,
		"hash": "91f58585884efa8425e90bb9fa5f87460da1592ce0a8215760ad81cae1d53334"
	},
	{
		"id": "ec09993af88d",
		"ts": "2026-09-04T00:43:09.066Z",
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
		"liquidityUsd": 4334847.14,
		"hash": "ec09993af88dd1b2961f79d19e79842905d8a4044b15d748cf8d5cbc70ec4489"
	},
	{
		"id": "67974ea28ae4",
		"ts": "2026-09-04T00:43:09.330Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1184552.89,
		"hash": "67974ea28ae45a7fc402bdbe5f7f67b0787c1a0a1944d1d6308641c09d78860f"
	},
	{
		"id": "81163900b0ce",
		"ts": "2026-09-04T00:43:09.606Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3143499.02,
		"hash": "81163900b0cec32b39ef870d12a2576e8c19f2c5a94470b9e2e26ee2da701a1c"
	},
	{
		"id": "e84aedbb0edf",
		"ts": "2026-09-04T00:43:09.879Z",
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
		"liquidityUsd": 3280164.12,
		"hash": "e84aedbb0edf13b435423158227b88ceff3456dc38fef86e3d2fadb6c69bcb5b"
	},
	{
		"id": "f3ef5a4c067e",
		"ts": "2026-09-04T00:43:10.160Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1038708.23,
		"hash": "f3ef5a4c067ed734491e48366ab589d24e11b432652a08ee5d776779ad6abdbc"
	},
	{
		"id": "8a42b606808d",
		"ts": "2026-09-04T00:43:10.448Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1967435.47,
		"hash": "8a42b606808d9b96f0edcf4ab37ecd2039ba3222a7fecdc815832be9460ddba4"
	},
	{
		"id": "54ee236b6fff",
		"ts": "2026-09-04T00:43:10.685Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1373136.76,
		"hash": "54ee236b6fff813854d4916a1448e70f3782a9cc0d298a7539795034e0ec4ff9"
	},
	{
		"id": "8edc51165593",
		"ts": "2026-09-04T00:43:10.921Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 924930.93,
		"hash": "8edc511655932eb5e3e03aa08bb4ea20684f51deb4e236b73359dca4baf38f93"
	},
	{
		"id": "c23f7ab1e042",
		"ts": "2026-09-04T00:43:11.155Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 103026.84,
		"hash": "c23f7ab1e042836842457445e216dfe1d47f85a308d6021e35554dc17551e1bc"
	},
	{
		"id": "6d9ddffca9b1",
		"ts": "2026-09-04T00:43:11.389Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 133010.7,
		"hash": "6d9ddffca9b12db99d5735b92f4e80dfe4819606386ce0315580bcf3d5ce5ee8"
	},
	{
		"id": "06647bf4d820",
		"ts": "2026-09-04T00:43:11.622Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3409560.07,
		"hash": "06647bf4d820515f5fa9304b2e6ba137bdbe3124cfa97a2d7aa50063e20b780f"
	},
	{
		"id": "494a5d87880c",
		"ts": "2026-09-04T00:43:11.856Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 282226.55,
		"hash": "494a5d87880c740ad917a715e5f11b74f6e9a99e897f69704e6ff21724fddc0d"
	},
	{
		"id": "f741efe304b8",
		"ts": "2026-09-04T00:43:12.088Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1178908.69,
		"hash": "f741efe304b85ab7dc5532186fa89f8c22a646c991a3fd9c861c23921581e2d9"
	},
	{
		"id": "a3dccef25f62",
		"ts": "2026-09-04T00:43:12.321Z",
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
		"liquidityUsd": 1756147.92,
		"hash": "a3dccef25f62190201dd5e97a934fd387dceb635896d3aa42cbc6e8b6d864991"
	},
	{
		"id": "6b9229123ff7",
		"ts": "2026-09-04T00:43:12.555Z",
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
		"liquidityUsd": 1048688.75,
		"hash": "6b9229123ff7a250950cc80f0ac27bd1100c30cc356741bdaab1181b2d949b4f"
	},
	{
		"id": "e6991d33298e",
		"ts": "2026-09-03T22:15:55.687Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118853670.37,
		"hash": "e6991d33298e7b671b8e939832809d401f893d26407b43239e49478e5fc5828d"
	},
	{
		"id": "85d1b975605d",
		"ts": "2026-09-03T22:15:56.022Z",
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
		"liquidityUsd": 19255685.84,
		"hash": "85d1b975605d9793334b2a15ae6ee24f407133ca6866ff7743b20da2081b7d14"
	},
	{
		"id": "44abfb823da8",
		"ts": "2026-09-03T22:15:56.426Z",
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
		"liquidityUsd": 981392.6,
		"hash": "44abfb823da800e2592c63e5463a9afa2ff000804672c68b55d093d058ad2bf0"
	},
	{
		"id": "cd94c9b56f0d",
		"ts": "2026-09-03T22:15:56.837Z",
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
		"liquidityUsd": 29623059.67,
		"hash": "cd94c9b56f0db8939af4ab1abc12a948cd1d0c271ca4b6a6bb684c08b0501b52"
	},
	{
		"id": "42da65436eac",
		"ts": "2026-09-03T22:15:57.103Z",
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
		"liquidityUsd": 4330200.75,
		"hash": "42da65436eace0b5824525871e3175bc4dde62acea45f8bc01421490e7466ed4"
	},
	{
		"id": "32743857cbd5",
		"ts": "2026-09-03T22:15:57.372Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1181785.51,
		"hash": "32743857cbd5d0258ffde2e7dc397ce36d3064751cef718411e74db75350b5c9"
	},
	{
		"id": "483086e2d372",
		"ts": "2026-09-03T22:15:57.641Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29623059.67,
		"hash": "483086e2d37204034302b14874ab31313bae87f236919a083d15facd6dee2275"
	},
	{
		"id": "bb84b2cb1407",
		"ts": "2026-09-03T22:15:57.905Z",
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
		"liquidityUsd": 3483864.71,
		"hash": "bb84b2cb14073170a072956b9b19e37d1b3d5289115dd938f4b4f7176c957c14"
	},
	{
		"id": "ed667fa1576e",
		"ts": "2026-09-03T22:15:58.191Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1065204.33,
		"hash": "ed667fa1576ec734f9f1e4cbc355cf405745df15841eb5afba3d53c57d80abe3"
	},
	{
		"id": "e0d7d605dfe1",
		"ts": "2026-09-03T22:15:58.464Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1978097.75,
		"hash": "e0d7d605dfe14f28e7282b376dae04867ba2468354fd90429ce1201fa2fdf45d"
	},
	{
		"id": "8e45cbb4d452",
		"ts": "2026-09-03T22:15:58.717Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1398999.34,
		"hash": "8e45cbb4d452641a6c614b96d8e130389296dd3d056292f59d102da7cd42654b"
	},
	{
		"id": "7e41046d04ed",
		"ts": "2026-09-03T22:15:58.956Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 920807.17,
		"hash": "7e41046d04ed3efa0236d3053a4abc097c1bc9b2abd40d085007865f99073068"
	},
	{
		"id": "5cec937732c3",
		"ts": "2026-09-03T22:15:59.198Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3424841.21,
		"hash": "5cec937732c377e21f66c8043d8933b6eb9099212f877714fc5394c9802927e6"
	},
	{
		"id": "62f38da7f11f",
		"ts": "2026-09-03T22:15:59.434Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 112560.98,
		"hash": "62f38da7f11f9f9f4bf3409ec0d447df25ea947c1fe20b4109d64e46f56284a9"
	},
	{
		"id": "a2182adac6a7",
		"ts": "2026-09-03T22:15:59.667Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 139589.96,
		"hash": "a2182adac6a75fbba9f74e3140545502433d636ee80f4bf223cc4e05bdac5102"
	},
	{
		"id": "e73996ff81f4",
		"ts": "2026-09-03T22:15:59.904Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 282445.79,
		"hash": "e73996ff81f4ab914b770d522a5d5a088f5f19465bef78ecb7995cb9525896d7"
	},
	{
		"id": "fec33e4d1bfb",
		"ts": "2026-09-03T22:16:00.159Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1185348.98,
		"hash": "fec33e4d1bfb0f3f9a2d663a4244068261518f6214d394ce9155c2678a582716"
	},
	{
		"id": "be22def5d0ba",
		"ts": "2026-09-03T22:16:00.423Z",
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
		"liquidityUsd": 452857.88,
		"hash": "be22def5d0baa5eb5be2f14a5eabc86d989266339a8724f3def3464eb99b2209"
	},
	{
		"id": "2dc2a5a8ee14",
		"ts": "2026-09-03T22:16:00.708Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1062684.33,
		"hash": "2dc2a5a8ee1411c3b4b7c84f062a1133ab0f475c88c07b25469f041454e41272"
	},
	{
		"id": "0540b5e5941f",
		"ts": "2026-09-03T19:36:57.548Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118928964,
		"hash": "0540b5e5941fc5543b0cca9b2b4ae3162417a00e09524118a4ac3234aeb56f2d"
	},
	{
		"id": "6eaa8673484d",
		"ts": "2026-09-03T19:36:58.186Z",
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
		"liquidityUsd": 19022635.8,
		"hash": "6eaa8673484de661d34e593eb84ed5a98631a341182703c5e1215173da256466"
	},
	{
		"id": "6b9531b51918",
		"ts": "2026-09-03T19:36:58.626Z",
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
		"liquidityUsd": 976617.11,
		"hash": "6b9531b51918c9c286553bfa882aa1d5066a87b48a27d0d841f18e211fcdfc19"
	},
	{
		"id": "7445e0b9f5df",
		"ts": "2026-09-03T19:36:59.068Z",
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
		"liquidityUsd": 29560194.34,
		"hash": "7445e0b9f5dfd08ebff84b85819055ba482d44f11ccd0f30e484e3226491240f"
	},
	{
		"id": "3d9731502445",
		"ts": "2026-09-03T19:36:59.350Z",
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
		"liquidityUsd": 4346214.94,
		"hash": "3d9731502445db4db4554b3a8f20f537a466f2a5128e3ba8e1495a6c256a427c"
	},
	{
		"id": "8f8be7c4c449",
		"ts": "2026-09-03T19:36:59.595Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1182318.33,
		"hash": "8f8be7c4c449f5c095f052975efbd5eb726c0efaec4d1f2bedb75d97cd230009"
	},
	{
		"id": "4c07c89e2937",
		"ts": "2026-09-03T19:36:59.842Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29560194.34,
		"hash": "4c07c89e2937a0ae6f8d4c32a6ad9ec832bc8724f5f1e2b4da78866cbb538edc"
	},
	{
		"id": "6d555205408d",
		"ts": "2026-09-03T19:37:00.093Z",
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
		"liquidityUsd": 3484877.73,
		"hash": "6d555205408d995622a712723a22ba43d53a435fb2e9ff411aaf3182797827c4"
	},
	{
		"id": "2dc35ec4984e",
		"ts": "2026-09-03T19:37:00.727Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 985517.76,
		"hash": "2dc35ec4984e2de12c23dd96fd58610f7b12ad3f081f6f38f13b9448b5931b66"
	},
	{
		"id": "c14729b8aed8",
		"ts": "2026-09-03T19:37:01.281Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1986782.31,
		"hash": "c14729b8aed84681e75fe44209ab5a120b5ee457aee5700548ed5d293164d254"
	},
	{
		"id": "f994162401f4",
		"ts": "2026-09-03T19:37:01.843Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1391512.56,
		"hash": "f994162401f4763cfc478b7f9f22aa18289e3b6e5eb65a8fce80563f1986bc3d"
	},
	{
		"id": "1bc13d3fd26d",
		"ts": "2026-09-03T19:37:02.110Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 892457.19,
		"hash": "1bc13d3fd26dd45a67121cfa86bcef6c0ac90e6e45ef8bb5f4a4f310b64abcfb"
	},
	{
		"id": "e866aa6ed932",
		"ts": "2026-09-03T19:37:02.373Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3423934.36,
		"hash": "e866aa6ed932387419b6bdcd87737becf880b79aa56c6260d08c01ac5787126a"
	},
	{
		"id": "390968b268ec",
		"ts": "2026-09-03T19:37:02.638Z",
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
		"liquidityUsd": 281523.41,
		"hash": "390968b268eca8a28bf6fe245853f56c8d33685da57525f4ce116371558b40b8"
	},
	{
		"id": "78993d862285",
		"ts": "2026-09-03T19:37:02.921Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 85679.34,
		"hash": "78993d862285de8c9bbff4acae9f11d236218955130031785cea0049395636d6"
	},
	{
		"id": "e7ba2a6770cd",
		"ts": "2026-09-03T19:37:03.230Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 58,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.16,
		"flags": [
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3280313.34,
		"hash": "e7ba2a6770cdf4e2ce6963c6a1b7f609d8744affe7f8ad6ab43aa8fa70b8476d"
	},
	{
		"id": "cc0b9d6e1843",
		"ts": "2026-09-03T19:37:03.498Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 116109.36,
		"hash": "cc0b9d6e18431f7a5c18585d1e5d815dfd1b641e5db41d4d3cb9b9dda1479eba"
	},
	{
		"id": "849669cbfcd5",
		"ts": "2026-09-03T19:37:03.779Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1189780.95,
		"hash": "849669cbfcd58419db186919ef1a8fd28e50160094d95667d628823edab458bc"
	},
	{
		"id": "18a912d501f5",
		"ts": "2026-09-03T19:37:04.008Z",
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
		"liquidityUsd": 457750.97,
		"hash": "18a912d501f538d6d7ad6fe88a5876aa3a1c61c2c46181ad453c6a91a13444cf"
	},
	{
		"id": "1685794daad3",
		"ts": "2026-09-03T16:53:35.274Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117931985.19,
		"hash": "1685794daad3231817a379354d227703e4c45b31159b8de2aa32628720e14ccb"
	},
	{
		"id": "45b4c8ae21c4",
		"ts": "2026-09-03T16:53:35.631Z",
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
		"liquidityUsd": 14995585.53,
		"hash": "45b4c8ae21c46342a237ad724056feb7d79d72b0d8e48dbaa383d3c1919d5489"
	},
	{
		"id": "656a94eebabf",
		"ts": "2026-09-03T16:53:35.832Z",
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
		"liquidityUsd": 979212.62,
		"hash": "656a94eebabfa65d9329773ed74e1cdc854dcde32b5b8d1d0e609efcf0c8b4c9"
	},
	{
		"id": "e481b65208e8",
		"ts": "2026-09-03T16:53:36.042Z",
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
		"liquidityUsd": 29274135.54,
		"hash": "e481b65208e8b4801bf120844c43c61a38b052d421445e6766a6098a73ec7a6b"
	},
	{
		"id": "156498c8f18c",
		"ts": "2026-09-03T16:53:36.245Z",
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
		"liquidityUsd": 4325045.45,
		"hash": "156498c8f18c4c2628362887cf705f702f524f3bd5d3a602ff297acdf7e94b91"
	},
	{
		"id": "103d263e13cb",
		"ts": "2026-09-03T16:53:36.446Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1182318.33,
		"hash": "103d263e13cb7a4703ef49724e8b3dec93ae94619427b39975a34c1c7b3d400b"
	},
	{
		"id": "c7ece9b91207",
		"ts": "2026-09-03T16:53:36.646Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29274135.54,
		"hash": "c7ece9b9120783ca073735a6ce17ff358e034c07a8affa59a3fd05c22ca84fc5"
	},
	{
		"id": "afd80793a615",
		"ts": "2026-09-03T16:53:36.848Z",
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
		"liquidityUsd": 3415630.55,
		"hash": "afd80793a615f1e6e22ef3d4cb4956d92b78501b5f7163e577236f6725011fed"
	},
	{
		"id": "fd522807d956",
		"ts": "2026-09-03T16:53:37.051Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 949963.55,
		"hash": "fd522807d956f6bee7a3702ce1efd91e0b00afb99abed9e37ccfcfc772377898"
	},
	{
		"id": "d6f4832c8b96",
		"ts": "2026-09-03T16:53:37.251Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1989448.73,
		"hash": "d6f4832c8b96d7b1fd23e37083ec93fe6390bb4a7c9aa65e360f2ac1548e9e13"
	},
	{
		"id": "c7e44b35782b",
		"ts": "2026-09-03T16:53:37.436Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1396185.96,
		"hash": "c7e44b35782b8f0833186d070594f2eae2f8214f04b6b780d9fc141ada47c8f9"
	},
	{
		"id": "d1d08ff819a6",
		"ts": "2026-09-03T16:53:37.619Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3114289.2,
		"hash": "d1d08ff819a606acfbdbefe0582b7ce5f71c33eb7da205e284257083685255f5"
	},
	{
		"id": "b92bd08994c7",
		"ts": "2026-09-03T16:53:37.799Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 927213.02,
		"hash": "b92bd08994c72f4c5c41392250a9cb9d2e72593d64f1b717d6a7e5eae1790ac7"
	},
	{
		"id": "9466a32cc63c",
		"ts": "2026-09-03T16:53:37.982Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3222528.97,
		"hash": "9466a32cc63c3d1ef4527a1ec8fd71790cbc4bb2cf2b344f1abf46d25a52c2e8"
	},
	{
		"id": "dbed6df2ad84",
		"ts": "2026-09-03T16:53:38.169Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 282661.4,
		"hash": "dbed6df2ad8458c84f90242593bc52e34fa2a4177dd9e7915c77260099287e57"
	},
	{
		"id": "e5a7adf9ca31",
		"ts": "2026-09-03T16:53:38.355Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 87418.1,
		"hash": "e5a7adf9ca31531e49883affa7e075060aaefb8db9ab5488201c2e9bffd46e25"
	},
	{
		"id": "5bf297cbc8de",
		"ts": "2026-09-03T16:53:38.540Z",
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
		"liquidityUsd": 476386.97,
		"hash": "5bf297cbc8de85f8fe7db42e74d0a1ffef80160d30b154c8d1a5462ab5585b70"
	},
	{
		"id": "38d3e92ffb5a",
		"ts": "2026-09-03T16:53:38.724Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692234.23,
		"hash": "38d3e92ffb5ae65eb86e09d594eeccb269a15aab1990cb101c2f75c7895aeeeb"
	},
	{
		"id": "c439093d8447",
		"ts": "2026-09-03T16:53:38.908Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1183170.98,
		"hash": "c439093d8447c8e47de6e8bd5b05c3364d3900797d8e493a05e1cd545e6961ca"
	},
	{
		"id": "d3b22766516c",
		"ts": "2026-09-03T12:32:43.762Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116059346.42,
		"hash": "d3b22766516c6ebbf9ccb3aa6518136da72f2b1a0fce8793953896d754e17cad"
	},
	{
		"id": "1f1c1d649ac5",
		"ts": "2026-09-03T12:32:44.036Z",
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
		"liquidityUsd": 17912741.3,
		"hash": "1f1c1d649ac5ac7676556a7753413f1fd3d4ce5cae9b0ac24489ad1f868b7bd3"
	},
	{
		"id": "3989848245cc",
		"ts": "2026-09-03T12:32:44.331Z",
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
		"liquidityUsd": 919528.63,
		"hash": "3989848245ccbc6897ee413d27b85b9afe5b7bdf5c8748a3d96be09e6a58f3d9"
	},
	{
		"id": "6f3d5cf79da3",
		"ts": "2026-09-03T12:32:44.577Z",
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
		"liquidityUsd": 28903118.15,
		"hash": "6f3d5cf79da3761c1eaf6221257b4afafec4fa71d513b5d4a649b2f35fa34b98"
	},
	{
		"id": "0065c9d8ed61",
		"ts": "2026-09-03T12:32:44.831Z",
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
		"liquidityUsd": 4156820.52,
		"hash": "0065c9d8ed617971169220026e131f8f26494c4eb023268ee38a842b857c944f"
	},
	{
		"id": "1f6b7e946d30",
		"ts": "2026-09-03T12:32:45.075Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1139815.31,
		"hash": "1f6b7e946d3094f3f96de6cefbab290faed6d5d66fdcb5e5a8763f2fcd02ac5d"
	},
	{
		"id": "8e7f94d885af",
		"ts": "2026-09-03T12:32:45.365Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28903118.15,
		"hash": "8e7f94d885af0d2dae300f947ed17a900757c194c626fb41e36d0d4c95f5bfc2"
	},
	{
		"id": "cc65fbfdd19d",
		"ts": "2026-09-03T12:32:45.648Z",
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
		"liquidityUsd": 3950694.91,
		"hash": "cc65fbfdd19d47a62ff77b2664b6bc0507863987ea224e8ec6d6b32e351a5748"
	},
	{
		"id": "95a5334c7900",
		"ts": "2026-09-03T12:32:45.909Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 971716.25,
		"hash": "95a5334c7900a76517e3e10a2eb70b95113de8b4904cd2e1d0fc4a9207da7b42"
	},
	{
		"id": "fd526866b58f",
		"ts": "2026-09-03T12:32:46.171Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 58,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.16,
		"flags": [
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 2999036.07,
		"hash": "fd526866b58f82b2368e5c84b42bc2b01a143492f220600777c5a21e87aa4167"
	},
	{
		"id": "da1098d99b8c",
		"ts": "2026-09-03T12:32:46.406Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1900915.45,
		"hash": "da1098d99b8c66d12489f3dddc4429fe202b8dfbdacfb619c7f1700f1a8261f5"
	},
	{
		"id": "45ee9989a2cf",
		"ts": "2026-09-03T12:32:46.641Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 948592.74,
		"hash": "45ee9989a2cf5025705e80f5c819a5a68a154fff8ccf4665f462a75ca7cfec1e"
	},
	{
		"id": "0e483b85077f",
		"ts": "2026-09-03T12:32:46.873Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3135533.4,
		"hash": "0e483b85077f629ebcab411b8d873d2dc060aafc9da5405c2d7df229677529dd"
	},
	{
		"id": "a1f504a6e78a",
		"ts": "2026-09-03T12:32:47.109Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1310890.51,
		"hash": "a1f504a6e78a35a873bf920bbd00ba20df2f1859c9cabcbe773b7f156cdf41e6"
	},
	{
		"id": "d90d7f750260",
		"ts": "2026-09-03T12:32:47.345Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 281279.94,
		"hash": "d90d7f7502605d2738f3ef04dae6217338315424747d2f132603357f227c2768"
	},
	{
		"id": "01140406b9f7",
		"ts": "2026-09-03T12:32:47.576Z",
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
		"liquidityUsd": 505809.03,
		"hash": "01140406b9f7e43d254da5b9ad11e1b9a3431082f774af74b7f2055c60ffc03b"
	},
	{
		"id": "3bcf61c62c9b",
		"ts": "2026-09-03T12:32:47.814Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 733820.34,
		"hash": "3bcf61c62c9b81bdfad116c7be8000f91b6265e9c2d98b4c0d2971fdc0618fd2"
	},
	{
		"id": "84533dd516f1",
		"ts": "2026-09-03T12:32:48.062Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 92327.01,
		"hash": "84533dd516f18a0005c75c32ecebafe4999963acf84ed49308117cb2b1a3eb59"
	},
	{
		"id": "a7bd0ee53347",
		"ts": "2026-09-03T12:32:48.310Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1147244.99,
		"hash": "a7bd0ee53347dc54f0e58f56435a5c4893d267c490f65e2aab6627725e4eba71"
	},
	{
		"id": "e80f2444718e",
		"ts": "2026-09-03T07:43:13.893Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115726085.1,
		"hash": "e80f2444718e289930f66ba6f207cfb1647aa29c919d47659743ccaebd4973b0"
	},
	{
		"id": "c344b13356b6",
		"ts": "2026-09-03T07:43:14.132Z",
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
		"liquidityUsd": 18132140.54,
		"hash": "c344b13356b67e4c91988840ed72a5691f846d53029eb495fc07b28dd5576125"
	},
	{
		"id": "c3aebb25a300",
		"ts": "2026-09-03T07:43:14.356Z",
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
		"liquidityUsd": 929299.48,
		"hash": "c3aebb25a300f0be0fd34099e1d35e7f014d4a85ca5f8cab7a14aaeb6cda0f18"
	},
	{
		"id": "8ff4df3d047a",
		"ts": "2026-09-03T07:43:14.577Z",
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
		"liquidityUsd": 28762614.23,
		"hash": "8ff4df3d047af20248b3725006afaaa5735a6f9c11df62f1f555a770ffe61d76"
	},
	{
		"id": "ed74a22a1446",
		"ts": "2026-09-03T07:43:14.792Z",
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
		"liquidityUsd": 4147168.71,
		"hash": "ed74a22a1446513d2202cabe299158d178d5ca66fe941c8a18cb40a7ba573753"
	},
	{
		"id": "f2912d765e92",
		"ts": "2026-09-03T07:43:15.039Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1139780.52,
		"hash": "f2912d765e924273ab6d1985abac8b799112583533c1abd367e469c240e8ea31"
	},
	{
		"id": "76efdcd1adb1",
		"ts": "2026-09-03T07:43:15.265Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28762614.23,
		"hash": "76efdcd1adb1255bedb1765a6e7f7e319211bb0bde4a1018cf67c9db048b66e5"
	},
	{
		"id": "bf22061a32b5",
		"ts": "2026-09-03T07:43:15.473Z",
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
		"liquidityUsd": 3542143.53,
		"hash": "bf22061a32b5652e6a18c2c37a2624322815ac2bffb4217501da31f1cc975243"
	},
	{
		"id": "8b703e8b3694",
		"ts": "2026-09-03T07:43:15.841Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 957289.38,
		"hash": "8b703e8b3694b00fc46314191c94440529bb5af9b48a86e15911ec56594d9069"
	},
	{
		"id": "7e418c619645",
		"ts": "2026-09-03T07:43:16.052Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 43,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.14,
		"flags": [
			"new_pair_under_24h",
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3129318.68,
		"hash": "7e418c61964517b7bb54af700ed00a59b91d945180ca6af711e0e23ed39ef41f"
	},
	{
		"id": "e901798fa2eb",
		"ts": "2026-09-03T07:43:16.253Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1887812.51,
		"hash": "e901798fa2ebad0a61c0b631ce10998f6591e2eeb9390038e7e6d4fbe393bdcf"
	},
	{
		"id": "17fbd82cf744",
		"ts": "2026-09-03T07:43:16.449Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 977504.56,
		"hash": "17fbd82cf744678dd8c964235d43e914ef077907a6fb6ef3c41f6f36e3306012"
	},
	{
		"id": "a750456a0944",
		"ts": "2026-09-03T07:43:16.654Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3167217.95,
		"hash": "a750456a094458a9a82c69e25b4515f2b4f70a50c08e4b0732884b901af4fb65"
	},
	{
		"id": "9971b60e2a82",
		"ts": "2026-09-03T07:43:16.909Z",
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
		"liquidityUsd": 468548.25,
		"hash": "9971b60e2a82c3b50ecf9f887e03cdca19425efb01544dc490999d4b5bd5fa86"
	},
	{
		"id": "6fb6d997eeec",
		"ts": "2026-09-03T07:43:17.103Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280647.36,
		"hash": "6fb6d997eeec145a7834237639e4ac1a7bde690b5eb19ebae2677284624b2436"
	},
	{
		"id": "7cfbfdbdb230",
		"ts": "2026-09-03T07:43:17.299Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 764319.52,
		"hash": "7cfbfdbdb2309e5182eaf53e482f919fdb375e107a206965932205c1e9b52153"
	},
	{
		"id": "2f5a69874a27",
		"ts": "2026-09-03T07:43:17.494Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1286468.04,
		"hash": "2f5a69874a27a7b52f127487d4b47777545efc13f6da6815130acbf22409ec9d"
	},
	{
		"id": "2243387a52e6",
		"ts": "2026-09-03T07:43:17.690Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 89138.08,
		"hash": "2243387a52e685fbd4b14e76a136e9f3cf7f6ce91bd79e9356cd0fbcc08bf5fb"
	},
	{
		"id": "7ec783aa43ff",
		"ts": "2026-09-03T07:43:17.922Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1145431.3,
		"hash": "7ec783aa43ffda294dfd4454d993e31842535b44e7f964a503e437e99e0da23e"
	},
	{
		"id": "48b81c6278cb",
		"ts": "2026-09-03T02:45:51.127Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115345542.59,
		"hash": "48b81c6278cbd2bef22e72a33aa31844da4046ff5b1f13e00cc82aafe3f51500"
	},
	{
		"id": "36fea7f7bae9",
		"ts": "2026-09-03T02:45:51.398Z",
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
		"liquidityUsd": 17407584.72,
		"hash": "36fea7f7bae9bfe114a8576948c3a80e57734a7d1b76f02c01a0e057749dd319"
	},
	{
		"id": "144b99db5cc9",
		"ts": "2026-09-03T02:45:51.686Z",
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
		"liquidityUsd": 936187.59,
		"hash": "144b99db5cc9d9fd19ea233fbecdedb982e4c6a29c1e260dce29b245841e2867"
	},
	{
		"id": "90a77ae82afb",
		"ts": "2026-09-03T02:45:51.969Z",
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
		"liquidityUsd": 28603773.74,
		"hash": "90a77ae82afbf8922b1acbd31060ee72f271c91c5d49272f5ef9e9ee6524048f"
	},
	{
		"id": "59c913e2f9dc",
		"ts": "2026-09-03T02:45:52.234Z",
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
		"liquidityUsd": 4060717.47,
		"hash": "59c913e2f9dc0cfc1590e07cd2351f62f2887d344419d0c0ef1f965005cca592"
	},
	{
		"id": "1ea2e702b8b8",
		"ts": "2026-09-03T02:45:52.495Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1132574.69,
		"hash": "1ea2e702b8b8d9da2d9276df08862bac756f992b1c09466b4d8333817fca7eb0"
	},
	{
		"id": "ac0177038f7a",
		"ts": "2026-09-03T02:45:52.755Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28603774.27,
		"hash": "ac0177038f7a79d7ffed15ecda57d2aa867f6b06c3a3ac9d9e059a87fb867415"
	},
	{
		"id": "41c0f8d31262",
		"ts": "2026-09-03T02:45:53.036Z",
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
		"liquidityUsd": 3681786.44,
		"hash": "41c0f8d312627af00204f1d9db87d62e36134afba8ca0453cb3b49edb3449c97"
	},
	{
		"id": "2b72b378ca09",
		"ts": "2026-09-03T02:45:53.299Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 43,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.14,
		"flags": [
			"new_pair_under_24h",
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3150145.32,
		"hash": "2b72b378ca09ba6f5faf0a838f86ca46a4fd67944cf2d40211c9ea98a02bd8aa"
	},
	{
		"id": "8e91c0acdeca",
		"ts": "2026-09-03T02:45:53.578Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 837745.67,
		"hash": "8e91c0acdecab559c11ef33b64f27a0c90999043b65c14602d19546e25bde167"
	},
	{
		"id": "a5e07d304fad",
		"ts": "2026-09-03T02:45:53.822Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 997307.49,
		"hash": "a5e07d304fad35405f8f798a03b6d4d7ab0fd6129313e5243e2780b6e79f9b59"
	},
	{
		"id": "75681745a2af",
		"ts": "2026-09-03T02:45:54.066Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3166465.54,
		"hash": "75681745a2afec2d9a29814fa5553c2bd07f266b4a82c35458a724c8e6186c55"
	},
	{
		"id": "e0cdcdfeeec0",
		"ts": "2026-09-03T02:45:54.344Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1943043.51,
		"hash": "e0cdcdfeeec02dccb94144de23cf64e45f560212bf882606bf9c3b0f3b93ccf4"
	},
	{
		"id": "04daf224f1b3",
		"ts": "2026-09-03T02:45:54.589Z",
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
		"liquidityUsd": 409214.14,
		"hash": "04daf224f1b386866b90d46acfaaf270177d2787c81f852cfea4da15479f361a"
	},
	{
		"id": "b1b206f9ede2",
		"ts": "2026-09-03T02:45:54.830Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280055.73,
		"hash": "b1b206f9ede22459b6579e5ded34ccac52383c69771030ecb97d475507839f3a"
	},
	{
		"id": "eab3c68a1ce6",
		"ts": "2026-09-03T02:45:55.073Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1296435.52,
		"hash": "eab3c68a1ce602e6f0f5e65b742472c87f9dfe0c5ad76201f1c991f459129037"
	},
	{
		"id": "7dcdf2cafc12",
		"ts": "2026-09-03T02:45:55.314Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 698745.52,
		"hash": "7dcdf2cafc1242a7bfa4499d97b068295698a955b4a98de1b9c8a689e40de236"
	},
	{
		"id": "e540590ef12f",
		"ts": "2026-09-03T02:45:55.553Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 78965.99,
		"hash": "e540590ef12fe47cc3ea891ba1057cb5e9c993750416ace9cf98797f13b29b79"
	},
	{
		"id": "198911004956",
		"ts": "2026-09-03T02:45:55.796Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1015131.98,
		"hash": "198911004956388a6e2ab5867f31e659c1860541da8dc611b028fc3400771ba2"
	},
	{
		"id": "bec3df6ca389",
		"ts": "2026-09-03T02:45:56.044Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 656981.97,
		"hash": "bec3df6ca389b4979177c922625f21069984647c4c7658248b92948c2c7a1da9"
	},
	{
		"id": "bdc66192caa9",
		"ts": "2026-09-02T23:48:52.205Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115012491.86,
		"hash": "bdc66192caa957db1f5cc10de5334b8b59f03d2c8c4c2fa16f8c6174c4eab57f"
	},
	{
		"id": "e9d48ee8b68c",
		"ts": "2026-09-02T23:48:52.493Z",
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
		"liquidityUsd": 18930159.83,
		"hash": "e9d48ee8b68c28fa81c10260a1ab1cf1c915abf600b986a24c163ced8cd01917"
	},
	{
		"id": "eea1ac17ff08",
		"ts": "2026-09-02T23:48:52.984Z",
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
		"liquidityUsd": 930259.08,
		"hash": "eea1ac17ff08a1b8b7020982fab941db501bb06d7a5e3e0dd497c5e587969e59"
	},
	{
		"id": "40efa5d1f13b",
		"ts": "2026-09-02T23:48:53.239Z",
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
		"liquidityUsd": 28154403.86,
		"hash": "40efa5d1f13b9f75745dd77ebda46c5da626eb2e55ce10e742fd89b9f69921f3"
	},
	{
		"id": "0e1e23b683a6",
		"ts": "2026-09-02T23:48:53.489Z",
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
		"liquidityUsd": 4052986.74,
		"hash": "0e1e23b683a6d626a94a05b12138f515acff13689208685bfeaaddcc6cd7b229"
	},
	{
		"id": "fbc32c930b6b",
		"ts": "2026-09-02T23:48:53.763Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1124516.25,
		"hash": "fbc32c930b6baa25dd658250b761c9eb47b8393e4a313a1f3398003b115f11d2"
	},
	{
		"id": "d1f201a64691",
		"ts": "2026-09-02T23:48:54.090Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 81,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.62,
		"flags": [
			"new_pair_under_24h",
			"owner_not_renounced"
		],
		"liquidityUsd": 3213474.45,
		"hash": "d1f201a64691775739c27ee16b38e34127004fed21aabcf297d371bddf3b76d5"
	},
	{
		"id": "7559e8107aa2",
		"ts": "2026-09-02T23:48:54.383Z",
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
		"liquidityUsd": 3649728.22,
		"hash": "7559e8107aa24888e1cb0869e03386821205dd4eea25bd39359ad785accb7aac"
	},
	{
		"id": "6f66be4e1aed",
		"ts": "2026-09-02T23:48:54.653Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 43,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.14,
		"flags": [
			"new_pair_under_24h",
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3213474.45,
		"hash": "6f66be4e1aed5a0cd2e74e2d5574a6eb0ad311588c1c5c31539acafd12fdebbd"
	},
	{
		"id": "cfe527c48f8b",
		"ts": "2026-09-02T23:48:55.118Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 781593.1,
		"hash": "cfe527c48f8bf30f479f39eb658f35a028e0b82fb13af2a7a00b37b704b25b72"
	},
	{
		"id": "65975371353e",
		"ts": "2026-09-02T23:48:55.376Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 960146.61,
		"hash": "65975371353e8d960b06d8e6231d034f0df1e449cde598258581771725db7b52"
	},
	{
		"id": "b39d02ee19ff",
		"ts": "2026-09-02T23:48:55.636Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3113686.38,
		"hash": "b39d02ee19ff87acda37f5db677fd66ff9a1f32d21d07f83eebe8fd54d6bf057"
	},
	{
		"id": "8a6c1df521e9",
		"ts": "2026-09-02T23:48:55.874Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 67102.92,
		"hash": "8a6c1df521e905bdc7b7497e2789ed5c006cf30c6567071bb3f0167b24895397"
	},
	{
		"id": "e0bbc340c91e",
		"ts": "2026-09-02T23:48:56.119Z",
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
		"liquidityUsd": 388720.54,
		"hash": "e0bbc340c91eb2ef34ee22011bb333261e07b14cd6af34b9de1a599e41976115"
	},
	{
		"id": "5e622bf0fc27",
		"ts": "2026-09-02T23:48:56.371Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1484541.69,
		"hash": "5e622bf0fc271800f022407b46cf57013d00faeb3616e43f024982d3abf6f893"
	},
	{
		"id": "c3f418950831",
		"ts": "2026-09-02T23:48:56.625Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 281981.63,
		"hash": "c3f4189508319a11f041e6578be0ea30fcfefa4a8794d0a205bc6cb2c410e059"
	},
	{
		"id": "93860a5793d1",
		"ts": "2026-09-02T23:48:56.869Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 669421.69,
		"hash": "93860a5793d1f95d3657104ed77cdf6d153f61c198af22284d5b684522e12821"
	},
	{
		"id": "6c132086c8b2",
		"ts": "2026-09-02T23:48:57.120Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1237182.56,
		"hash": "6c132086c8b2c02e72b0755be9a1d545b8407a37e05482b6bb1554a89b80a31c"
	},
	{
		"id": "baf1caeaa5a0",
		"ts": "2026-09-02T23:48:57.357Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1141365.79,
		"hash": "baf1caeaa5a0fe2bdef58f92795babe47f0e553fac3badbd9663d956ff41694b"
	},
	{
		"id": "857d77522835",
		"ts": "2026-09-02T21:33:04.250Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115764422.45,
		"hash": "857d77522835651dbaa89510f971e960ab36db4b59eea800da580365a8f07cd8"
	},
	{
		"id": "f2898dadded5",
		"ts": "2026-09-02T21:33:04.491Z",
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
		"liquidityUsd": 17061472.36,
		"hash": "f2898dadded5a01df8f3057eaa075363f330ae1c7dba3dcda83b1d4b80505560"
	},
	{
		"id": "82a8a0b65935",
		"ts": "2026-09-02T21:33:04.998Z",
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
		"liquidityUsd": 933237.6,
		"hash": "82a8a0b659359f73d3ad90da16448b74f598e433bd950bbed513db3fbcdc18b0"
	},
	{
		"id": "c18856067cda",
		"ts": "2026-09-02T21:33:05.249Z",
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
		"liquidityUsd": 28118830.36,
		"hash": "c18856067cdaef080b5992a5860f3fd4428574442b6b6df87558d284d490d85e"
	},
	{
		"id": "39cac8868daa",
		"ts": "2026-09-02T21:33:05.550Z",
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
		"liquidityUsd": 4067272.7,
		"hash": "39cac8868daa50fdf5c5963faacb3e7f37c1a88a6fc777cf58ac2deaea5ab0fd"
	},
	{
		"id": "d6744ad8fe6d",
		"ts": "2026-09-02T21:33:05.784Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1131317.7,
		"hash": "d6744ad8fe6d77cca52b02f1f61e16cc9ea30fdce09055612aa619ad02102a46"
	},
	{
		"id": "246c102683b8",
		"ts": "2026-09-02T21:33:06.084Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 81,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.62,
		"flags": [
			"new_pair_under_24h",
			"owner_not_renounced"
		],
		"liquidityUsd": 3331485.25,
		"hash": "246c102683b824c48e5cb88e2d50d4163cea04b947d74852240cc98c572b3733"
	},
	{
		"id": "c0f375632f67",
		"ts": "2026-09-02T21:33:06.344Z",
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
		"liquidityUsd": 3661663.79,
		"hash": "c0f375632f679e6fbc56dce43a6eb531392ea1ce4a58e6988a594c750999fea6"
	},
	{
		"id": "f69591e01710",
		"ts": "2026-09-02T21:33:06.589Z",
		"symbol": "umia",
		"token": "0x56ab53b77F07DA3af732150E8aeC4783eB5BbA7D",
		"score": 43,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.14,
		"flags": [
			"new_pair_under_24h",
			"owner_can_change_balance",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3331485.25,
		"hash": "f69591e0171099cb572e645c00e2d106977fcde11f5230e9fdc0968bdd470a1b"
	},
	{
		"id": "573ee3f117a1",
		"ts": "2026-09-02T21:33:06.852Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 806587.37,
		"hash": "573ee3f117a1a82a772b440c0d6dbc24a22bb6b8aa68e897c0c559b7a4d7f443"
	},
	{
		"id": "b91e4acf0fc7",
		"ts": "2026-09-02T21:33:07.073Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3147810,
		"hash": "b91e4acf0fc704a7454442850e27aec7781f31a7c3c5cc3328f5f811997b15df"
	},
	{
		"id": "0f2fb34a7c4a",
		"ts": "2026-09-02T21:33:07.292Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 969148.43,
		"hash": "0f2fb34a7c4a549522a796a0b57dc24b4a9bc34aa0661e303d32e9453883ec51"
	},
	{
		"id": "740a33af7481",
		"ts": "2026-09-02T21:33:07.512Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 61560.31,
		"hash": "740a33af74818cac27664d73af74a17bad501bd75863cc30c36e5d05b5e4d01f"
	},
	{
		"id": "9306baef24ea",
		"ts": "2026-09-02T21:33:07.740Z",
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
		"liquidityUsd": 414684.14,
		"hash": "9306baef24ea41f157990311eb9fd51f9b9d5565d7f4e4502ba008beb6a39a37"
	},
	{
		"id": "7c32dfbbbce1",
		"ts": "2026-09-02T21:33:07.959Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 282095.27,
		"hash": "7c32dfbbbce1ed1a59325e5ff5b467f1fe25328d086c3f8a85d296343a56a82e"
	},
	{
		"id": "c03b9e48425f",
		"ts": "2026-09-02T21:33:08.195Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1627450.16,
		"hash": "c03b9e48425fc2337778555d91f61d1e61939ee0415ec82141089a697c48887c"
	},
	{
		"id": "903e95670577",
		"ts": "2026-09-02T21:33:08.415Z",
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
		"liquidityUsd": 610258.12,
		"hash": "903e956705772f840cc865af7cc0eff0cbc1755950847b8ae82c6713eee8756c"
	},
	{
		"id": "ac4182004ff3",
		"ts": "2026-09-02T21:33:08.677Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 693873.5,
		"hash": "ac4182004ff325022eab5e7a919b46b42e78e7b5d785ef035508fb6e3be7b842"
	},
	{
		"id": "00ba2bd4418e",
		"ts": "2026-09-02T21:33:08.902Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1224514.08,
		"hash": "00ba2bd4418e1b87bae4298fa35fec2c203c22075f1a2965fc768ec7b334199f"
	},
	{
		"id": "b96de50e8a98",
		"ts": "2026-09-02T21:33:09.122Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1140912.34,
		"hash": "b96de50e8a983501b440a09d232cf5d9b7b5d2b6b9fdb73a8bb5a8d33580645f"
	},
	{
		"id": "6a14e52e1d79",
		"ts": "2026-09-02T18:25:05.766Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115696709.76,
		"hash": "6a14e52e1d798aec7c1d7e432242c34791b826f69942193bc4c7febacfdeb302"
	},
	{
		"id": "61210cf6c7ec",
		"ts": "2026-09-02T18:25:06.334Z",
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
		"liquidityUsd": 18505498.61,
		"hash": "61210cf6c7ec4ecac4d50e165d7eaa6f25a5502bd577401b6763301721191efb"
	},
	{
		"id": "7bb6eb9bfea1",
		"ts": "2026-09-02T18:25:06.610Z",
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
		"liquidityUsd": 934876.1,
		"hash": "7bb6eb9bfea11aa24d66bf456a9d42b2c5c5a55581159a139a4248293e7fe54e"
	},
	{
		"id": "59036265fcf1",
		"ts": "2026-09-02T18:25:06.881Z",
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
		"liquidityUsd": 28088149.99,
		"hash": "59036265fcf1d32f845f9fc4e415bd22c71f1b3ba21266c87477b6b4fb47bde4"
	},
	{
		"id": "e791ad37bfb3",
		"ts": "2026-09-02T18:25:07.163Z",
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
		"liquidityUsd": 4066566.5,
		"hash": "e791ad37bfb3e289509fda2ed7947bca9342c8a0cc9729f8829a9b9003c7a625"
	},
	{
		"id": "c1f799eb2526",
		"ts": "2026-09-02T18:25:07.434Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1132263.42,
		"hash": "c1f799eb2526b669ea438110267577f672f433f64f5f4b08e6eaf3bc25f5eacf"
	},
	{
		"id": "06ec4ca42361",
		"ts": "2026-09-02T18:25:07.712Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 81,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.62,
		"flags": [
			"new_pair_under_24h",
			"owner_not_renounced"
		],
		"liquidityUsd": 3426018.31,
		"hash": "06ec4ca42361d92af066be63c19fca120cf019b1abc903a52fff18c5f3033e5a"
	},
	{
		"id": "fdd6805b9610",
		"ts": "2026-09-02T18:25:07.975Z",
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
		"liquidityUsd": 3665502.14,
		"hash": "fdd6805b9610feb8030585591e6fbb27683c80be398324b4f6400ca125f5eba1"
	}
]
