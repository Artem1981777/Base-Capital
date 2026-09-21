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
	"updatedAt": "2026-09-21T05:50:56.592Z",
	"tokensScored": 18136,
	"verdictsIssued": 18136,
	"safe": 15373,
	"risky": 1319,
	"likelyRug": 1444,
	"ticks": 1034
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "bb50a6a2b989",
		"ts": "2026-09-21T05:50:52.410Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129431433.69,
		"hash": "bb50a6a2b9890509bf2527881cf7f051eabeac535c7cd9071387a803f7ce01e2"
	},
	{
		"id": "21179500a6a7",
		"ts": "2026-09-21T05:50:52.676Z",
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
		"liquidityUsd": 17172347.29,
		"hash": "21179500a6a7539f88a6950a107bce85ed49b33de9d470c31e29bb7daebbf1c6"
	},
	{
		"id": "58aea040a5f3",
		"ts": "2026-09-21T05:50:52.934Z",
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
		"liquidityUsd": 879680.18,
		"hash": "58aea040a5f396c5bbf8df303f9c431f478697efd53294abfcf3d89ff609753b"
	},
	{
		"id": "967247929a51",
		"ts": "2026-09-21T05:50:53.195Z",
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
		"liquidityUsd": 34908303.89,
		"hash": "967247929a5186c7a09ac12796fb2e228fa90a704dc665ab9010f29a111af3b6"
	},
	{
		"id": "8a3991a274fa",
		"ts": "2026-09-21T05:50:53.445Z",
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
		"liquidityUsd": 4463730.08,
		"hash": "8a3991a274fa1a0a348e3d8802a86e531970f88b7904f8bf4097421c44f95585"
	},
	{
		"id": "5be314c34c41",
		"ts": "2026-09-21T05:50:53.698Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1277154.19,
		"hash": "5be314c34c41042e6d77f95dcc49aba804d797d906ef87ebf05d85a38753bf1e"
	},
	{
		"id": "006a82252422",
		"ts": "2026-09-21T05:50:53.946Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34908302.66,
		"hash": "006a822524221f12138e2180bca56fa1f53d1f724e4de43f797264b67c7a4efb"
	},
	{
		"id": "b6e22221d032",
		"ts": "2026-09-21T05:50:54.199Z",
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
		"liquidityUsd": 1129702.13,
		"hash": "b6e22221d03209893645819a01dd3663e1c6d3b0ef7dc9a8e2076ca25ee480c4"
	},
	{
		"id": "2ef7b780cf12",
		"ts": "2026-09-21T05:50:54.454Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"mintable",
			"owner_not_renounced"
		],
		"liquidityUsd": 785861.35,
		"hash": "2ef7b780cf12e4f72fd9e07daf97998358ae5d51235bfdee05926332706b67fc"
	},
	{
		"id": "e6efb3e6abe5",
		"ts": "2026-09-21T05:50:54.716Z",
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
		"liquidityUsd": 18730146.32,
		"hash": "e6efb3e6abe5a6c45ca223540b40ea87125549665f335f50a75a1065d203c18b"
	},
	{
		"id": "fa2fd00ad77f",
		"ts": "2026-09-21T05:50:54.949Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1105846.35,
		"hash": "fa2fd00ad77f05b0b49b140174241981dc91b8b23d702c042ac46a456c2c46fb"
	},
	{
		"id": "8afd8c60b9ae",
		"ts": "2026-09-21T05:50:55.187Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 547337.75,
		"hash": "8afd8c60b9ae6e9398454c7c82bbeb23d846011fdd98ef7d0fbc466e6be3f9dc"
	},
	{
		"id": "d274d7b253f0",
		"ts": "2026-09-21T05:50:55.418Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1590305.45,
		"hash": "d274d7b253f018903c164e8829b6677a2696a62acc1f7b257ef13e5dd6fe47e4"
	},
	{
		"id": "8c7ff9c76022",
		"ts": "2026-09-21T05:50:55.652Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1006725.2,
		"hash": "8c7ff9c76022c4d99e7ab230b4ac257fa3bc7535d8657338946fb09d2a0ae1f1"
	},
	{
		"id": "36d55008c6a0",
		"ts": "2026-09-21T05:50:55.888Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3268782.53,
		"hash": "36d55008c6a0264f6555ee8eaebffda8f9d7b955fca52930a1440faf06619a17"
	},
	{
		"id": "8d43294e7f8c",
		"ts": "2026-09-21T05:50:56.121Z",
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
		"liquidityUsd": 647379.56,
		"hash": "8d43294e7f8c72ed376ca636c6da6e9cc0f499cea2f184ccca50004e68054907"
	},
	{
		"id": "148fa2b06e73",
		"ts": "2026-09-21T05:50:56.355Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1461734.55,
		"hash": "148fa2b06e7343116039decbd2d4c5fb770efa49a409d1983592f030bf7ba8eb"
	},
	{
		"id": "35f3565a55a0",
		"ts": "2026-09-21T05:50:56.592Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 518376.84,
		"hash": "35f3565a55a07239ee7f7a13b666ae5712afc100acdc08f9e53dd29c3f947118"
	},
	{
		"id": "5a26d7690c87",
		"ts": "2026-09-21T00:49:42.388Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129776491.71,
		"hash": "5a26d7690c870c18dd82757cd85e1319d73aea43c19b1a3d8dbe5a0e23077c45"
	},
	{
		"id": "3fb1c371c518",
		"ts": "2026-09-21T00:49:42.842Z",
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
		"liquidityUsd": 12692393.93,
		"hash": "3fb1c371c5186279fd4d9362aaf15b937d4bcd3fbecd9a47b132a053115a37f4"
	},
	{
		"id": "1dcafbc52c0e",
		"ts": "2026-09-21T00:49:43.135Z",
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
		"liquidityUsd": 886553.85,
		"hash": "1dcafbc52c0e7170476a4edf50ae276297281ea18003af27b8173dcd92c22614"
	},
	{
		"id": "2d01eb41764b",
		"ts": "2026-09-21T00:49:43.382Z",
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
		"liquidityUsd": 35284991.46,
		"hash": "2d01eb41764bec37a44f33449e20177a84b1c07af95aea025c5c0588290cc4d6"
	},
	{
		"id": "d98a1317c205",
		"ts": "2026-09-21T00:49:43.634Z",
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
		"liquidityUsd": 4505035.18,
		"hash": "d98a1317c2058a403f47fee3bbe0c7fa7ba4276ffda70b40381be808f94aa85f"
	},
	{
		"id": "691c593ee205",
		"ts": "2026-09-21T00:49:43.882Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1284341.62,
		"hash": "691c593ee205f88020e5f1e761a74beb4f9a16f25a8dfd89384d1b28bf48a21e"
	},
	{
		"id": "d221d1ea9099",
		"ts": "2026-09-21T00:49:44.127Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1627935.68,
		"hash": "d221d1ea9099e3e66522cca95464ab92e4d915a11e0cc59bb8940659275211cb"
	},
	{
		"id": "0bd46905aa08",
		"ts": "2026-09-21T00:49:44.386Z",
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
		"liquidityUsd": 1143895.37,
		"hash": "0bd46905aa081cfeefb66dec8bca480d7b16bf729dc30ac6f5cef3ca058c1708"
	},
	{
		"id": "9330f6d44001",
		"ts": "2026-09-21T00:49:44.642Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"mintable",
			"owner_not_renounced"
		],
		"liquidityUsd": 804036.87,
		"hash": "9330f6d4400177d8995b9a574c11db636cd905507804c36510603adf4f912e88"
	},
	{
		"id": "b4e58ee62b93",
		"ts": "2026-09-21T00:49:44.892Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 566783.97,
		"hash": "b4e58ee62b934008fef66308453206808bfb0c4929cdb9b2c997ea2d8e657762"
	},
	{
		"id": "edc4844563cd",
		"ts": "2026-09-21T00:49:45.122Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1562593.03,
		"hash": "edc4844563cd05a605f7617a935b176aec346a5a885013a6c5e3c414d00720ab"
	},
	{
		"id": "7fa41926c962",
		"ts": "2026-09-21T00:49:45.354Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18056241.86,
		"hash": "7fa41926c962b6b6d733b4cb98750c54d976eca5bc645d8f949a8411abb80f76"
	},
	{
		"id": "3458d933f290",
		"ts": "2026-09-21T00:49:45.581Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1146177.67,
		"hash": "3458d933f290875f699474b178c0ffdf4dc41e9d487a8c1c308b17caf1c57e31"
	},
	{
		"id": "9c33074d97f5",
		"ts": "2026-09-21T00:49:45.811Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1127715.13,
		"hash": "9c33074d97f534cb145d8993e62dec13787dafb958fd961423ddd6bd343408a7"
	},
	{
		"id": "2b16270c52c5",
		"ts": "2026-09-21T00:49:46.042Z",
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
		"liquidityUsd": 651931.74,
		"hash": "2b16270c52c5801faa2e63c97c6181086138e1ae45db8bddc679bb891525feb9"
	},
	{
		"id": "aeea36f09863",
		"ts": "2026-09-21T00:49:46.274Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3266035.7,
		"hash": "aeea36f098634aa6f938260852bede183591a57d105a533b9fefaf4858fab61c"
	},
	{
		"id": "036a486e72eb",
		"ts": "2026-09-21T00:49:46.519Z",
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
		"liquidityUsd": 471110.47,
		"hash": "036a486e72ebb698e4db431728a0706f071a9ff96ce91820dcd57aaf42d40c06"
	},
	{
		"id": "3a8cd788997e",
		"ts": "2026-09-21T00:49:46.843Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1474170.34,
		"hash": "3a8cd788997eb1f0867df3b69ad727b715619e30445193540988afdd9f790daa"
	},
	{
		"id": "805ac4a324d3",
		"ts": "2026-09-20T22:55:52.340Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129751749.51,
		"hash": "805ac4a324d30fa2f50ffbb9f4eb7c0df7178cd9d6fb1961a98143973a34eb49"
	},
	{
		"id": "db68b600862d",
		"ts": "2026-09-20T22:55:52.885Z",
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
		"liquidityUsd": 16398859.85,
		"hash": "db68b600862db7bfa2873fbe4ff71cfa41590f43956ce8861949596dacf1638d"
	},
	{
		"id": "7ff12858c04e",
		"ts": "2026-09-20T22:55:53.096Z",
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
		"liquidityUsd": 873198.1,
		"hash": "7ff12858c04eacd6b414d935cbb80e89ab6aae7341ed953d6bf33fc513b57ef5"
	},
	{
		"id": "3f461126129f",
		"ts": "2026-09-20T22:55:53.303Z",
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
		"liquidityUsd": 34408759.59,
		"hash": "3f461126129f60742ac8d3f94afc0c252fac01441f2d3852fbd7d8ddfdef0e94"
	},
	{
		"id": "af720af89b5a",
		"ts": "2026-09-20T22:55:53.514Z",
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
		"liquidityUsd": 4406029.55,
		"hash": "af720af89b5ab6738b0d9675cb608c3708582af6c90ebc1fb819daa7f21f37ed"
	},
	{
		"id": "bb29d736d000",
		"ts": "2026-09-20T22:55:53.724Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1260262.99,
		"hash": "bb29d736d0008fab910443d5283f6f8578810d4a1fe873548aa02bc738bd225c"
	},
	{
		"id": "c82bdd27fbfc",
		"ts": "2026-09-20T22:55:53.935Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1690286.82,
		"hash": "c82bdd27fbfcf57ef6d14c32b1f5749537484c5373f0c3c8d1d6ffbe6aaeff17"
	},
	{
		"id": "2274ec1f2d8d",
		"ts": "2026-09-20T22:55:54.148Z",
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
		"liquidityUsd": 1118215.14,
		"hash": "2274ec1f2d8d677057247a822c040471b56eece9c29eb1c1cd81a2441142b8b5"
	},
	{
		"id": "260926ebdde1",
		"ts": "2026-09-20T22:55:54.371Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"mintable",
			"owner_not_renounced"
		],
		"liquidityUsd": 786874.56,
		"hash": "260926ebdde1de0476f15c7c7660382e9bdb94f66a3fd03959f05aab7fd5756a"
	},
	{
		"id": "21178a298b15",
		"ts": "2026-09-20T22:55:54.581Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 556356.98,
		"hash": "21178a298b15d6d270f8671e973a64c37fc97435669b1d512a4f1aeb02b4055d"
	},
	{
		"id": "35348c908087",
		"ts": "2026-09-20T22:55:54.781Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1512265.17,
		"hash": "35348c908087b923899d13287385ae5dcba84efb08a07abdf438210ed884b0e1"
	},
	{
		"id": "f1c57a66848c",
		"ts": "2026-09-20T22:55:54.986Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17494556.75,
		"hash": "f1c57a66848ced8eede6c43d3e0a964ba719ac59b6f04c4f3eb86391196ad0fc"
	},
	{
		"id": "845b48068e9e",
		"ts": "2026-09-20T22:55:55.182Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1075731.95,
		"hash": "845b48068e9e4a354cba88065d6c364503ee9e3663ade3d5a7fb50262aa637c2"
	},
	{
		"id": "ddf685657132",
		"ts": "2026-09-20T22:55:55.399Z",
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
		"liquidityUsd": 626953.4,
		"hash": "ddf685657132150d761e4f00c58060e2b2e1144b009bcdd1bc7ba6de460bcaa5"
	},
	{
		"id": "3c22cc926daf",
		"ts": "2026-09-20T22:55:55.591Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1085150.87,
		"hash": "3c22cc926daf0317849ad5f2ab3309ad12601e166524944638cbfe45f26a3d30"
	},
	{
		"id": "eac77fe5c784",
		"ts": "2026-09-20T22:55:55.783Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3198771.33,
		"hash": "eac77fe5c784531669cbde87ec2f9cd1d4b05c964e6da7d3f07ec0a97adad400"
	},
	{
		"id": "1c77e478e244",
		"ts": "2026-09-20T22:55:56.044Z",
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
		"liquidityUsd": 460663.62,
		"hash": "1c77e478e244b26eae363884aa585edb0237dee276b6d8c24ef1fa93a7f45c6b"
	},
	{
		"id": "38b2357bb938",
		"ts": "2026-09-20T22:55:56.239Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1439675.19,
		"hash": "38b2357bb938aec303bba941a3e404517e094b37ad1a4ac321dae9c61ad81fff"
	},
	{
		"id": "41d064cbeee6",
		"ts": "2026-09-20T20:15:34.130Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129483992.92,
		"hash": "41d064cbeee60bfd2b702f4b1b273cd3646aa6a4838cb3a21928fc3a2cc15f4b"
	},
	{
		"id": "43eafdbad291",
		"ts": "2026-09-20T20:15:34.392Z",
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
		"liquidityUsd": 13158586.55,
		"hash": "43eafdbad2915e0b4ebe15c5b0964a1eebf24d3fe8b52a37cbbdc2a6ed38dd61"
	},
	{
		"id": "20f170875292",
		"ts": "2026-09-20T20:15:34.643Z",
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
		"liquidityUsd": 871426.37,
		"hash": "20f170875292b66df0f638f47bfd39d8da4b761484faf7f8690d1a29fcfe660e"
	},
	{
		"id": "4a082432a8b4",
		"ts": "2026-09-20T20:15:34.896Z",
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
		"liquidityUsd": 34528480.7,
		"hash": "4a082432a8b47c8cfec454124fa4f8b4621da25e992c6306737350088f9146bd"
	},
	{
		"id": "d4985109f4f4",
		"ts": "2026-09-20T20:15:35.146Z",
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
		"liquidityUsd": 4399517.13,
		"hash": "d4985109f4f48c114929a60c1db1ba1f3812fc8e6ae13a198d399d5e891282bd"
	},
	{
		"id": "5109e56f78ca",
		"ts": "2026-09-20T20:15:35.395Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1257979.34,
		"hash": "5109e56f78ca6e01cb9366b72bedaa474ac4a380222f496bab5a7950b0943a1b"
	},
	{
		"id": "e97d2d0b0ecf",
		"ts": "2026-09-20T20:15:35.656Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34528480.7,
		"hash": "e97d2d0b0ecfc780d825834021b67712884bdf8ba3d5d6873d28deb79520f2f9"
	},
	{
		"id": "56042cbb8092",
		"ts": "2026-09-20T20:15:35.949Z",
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
		"liquidityUsd": 1114400.51,
		"hash": "56042cbb80920a4759f9aeeb6cc49a8d41f2d8cd6adecc2d38885369455b0a98"
	},
	{
		"id": "5699f927c592",
		"ts": "2026-09-20T20:15:36.208Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"mintable",
			"owner_not_renounced"
		],
		"liquidityUsd": 809660.33,
		"hash": "5699f927c59230117736b586480030311fef592a47a3d5c251a13f30f94be0dc"
	},
	{
		"id": "76383460bf9b",
		"ts": "2026-09-20T20:15:36.456Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 593034.09,
		"hash": "76383460bf9b840c05de62ec4789088ecf0b903625d66080b0df218eec589f3b"
	},
	{
		"id": "e48b52ae8ce3",
		"ts": "2026-09-20T20:15:36.691Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17431782.26,
		"hash": "e48b52ae8ce34c30d49e01789717430c41a96bdab43e68c450833cd310425e38"
	},
	{
		"id": "3c908f91ddbb",
		"ts": "2026-09-20T20:15:36.924Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1578882.06,
		"hash": "3c908f91ddbba31f7e2713cef9a0682d24bd08eba30fe1e54e2618050ddbee77"
	},
	{
		"id": "43b5057d2985",
		"ts": "2026-09-20T20:15:37.159Z",
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
		"liquidityUsd": 637842.65,
		"hash": "43b5057d2985f69cf6b2e554e699883f92cf9acbb217291e722e73ab57ea92d0"
	},
	{
		"id": "ced938adec97",
		"ts": "2026-09-20T20:15:37.391Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1110650.33,
		"hash": "ced938adec97ae9d89d6b50a4c2b1d4f7712ae4b1945eb892d474ab5f6606fac"
	},
	{
		"id": "24c740a6f592",
		"ts": "2026-09-20T20:15:37.624Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1028508.39,
		"hash": "24c740a6f59284e807f7b230aee1c884244684da5cc34d521f225221543c476a"
	},
	{
		"id": "00b647eb99d6",
		"ts": "2026-09-20T20:15:37.855Z",
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
		"liquidityUsd": 456170.17,
		"hash": "00b647eb99d6142cf46a7c97aec04756b1e92805bfe616ece7d132042e923154"
	},
	{
		"id": "acd568f7eefb",
		"ts": "2026-09-20T20:15:38.089Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3135535.02,
		"hash": "acd568f7eefbf26ea8956839fe4230f24c27dfe3228eeec7b2f06bbf1e8506aa"
	},
	{
		"id": "fe70b7602308",
		"ts": "2026-09-20T20:15:38.320Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4665622.86,
		"hash": "fe70b76023082d5867262d203fad15b69d920ad2a4f95f80b152177da6e68c49"
	},
	{
		"id": "c3655de1bb9a",
		"ts": "2026-09-20T17:15:59.972Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129512870.27,
		"hash": "c3655de1bb9a944a77235e9de2d7239be70a0590f65d93943be690d36a56f145"
	},
	{
		"id": "a95b9f9efc9a",
		"ts": "2026-09-20T17:16:00.235Z",
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
		"liquidityUsd": 15691062.73,
		"hash": "a95b9f9efc9acaf9e143cadd21e00285ee46e8d22880b4b4cda2ed8b37add37c"
	},
	{
		"id": "5b380706b1df",
		"ts": "2026-09-20T17:16:00.507Z",
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
		"liquidityUsd": 870729.88,
		"hash": "5b380706b1dfe1e074070c76773e75164353093207675e57084c147babce8b11"
	},
	{
		"id": "c14f59a32e32",
		"ts": "2026-09-20T17:16:00.783Z",
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
		"liquidityUsd": 34617690.9,
		"hash": "c14f59a32e32f968afe6e802a6feb406299cfc71fc74f8ecae905fb900423eed"
	},
	{
		"id": "0ea8b085977d",
		"ts": "2026-09-20T17:16:01.041Z",
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
		"liquidityUsd": 4402903.73,
		"hash": "0ea8b085977d31b881b3d6e629a05f19019a9a938dfbd2d16a7f4f0c595f74ca"
	},
	{
		"id": "1d8f46f7b3ef",
		"ts": "2026-09-20T17:16:01.478Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1258543.42,
		"hash": "1d8f46f7b3efac08d805f5d607a969e15e65b3678e26cad0808125189aaa1fe3"
	},
	{
		"id": "6bd0cd9516d8",
		"ts": "2026-09-20T17:16:01.730Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34617690.9,
		"hash": "6bd0cd9516d84d93eb0d2f4da5a019ccb69977e36a6d956beca874602811d40b"
	},
	{
		"id": "69137cfa625a",
		"ts": "2026-09-20T17:16:02.002Z",
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
		"liquidityUsd": 2033514.62,
		"hash": "69137cfa625a2a2b3637a4d02b25789f1a0dd20a77cca5353d683c9eb552db5c"
	},
	{
		"id": "cd56b709d566",
		"ts": "2026-09-20T17:16:02.261Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"mintable",
			"owner_not_renounced"
		],
		"liquidityUsd": 745107.36,
		"hash": "cd56b709d566a15459d17e488b30258e39928aeb79e7c3fa46756cdb85b17b5e"
	},
	{
		"id": "0a3f33722a82",
		"ts": "2026-09-20T17:16:02.518Z",
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
		"liquidityUsd": 17222548.46,
		"hash": "0a3f33722a828152655bf868e0eafc9c9818b3cede069442d419795032a4a04b"
	},
	{
		"id": "0a8d5052f042",
		"ts": "2026-09-20T17:16:02.776Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 609192.87,
		"hash": "0a8d5052f042a476e6682e81472a4450a032e7b55f62fbb2c1d16d4f0824d851"
	},
	{
		"id": "c53c99ecc5d9",
		"ts": "2026-09-20T17:16:03.015Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1587093.39,
		"hash": "c53c99ecc5d9d8ba8b6b694ca91713811fc3f7f015ececd5fef5f381800c9a4a"
	},
	{
		"id": "4f62fdf84afd",
		"ts": "2026-09-20T17:16:03.254Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1142480.23,
		"hash": "4f62fdf84afd00ad4250a93a24ee9535a4d2f74b0439accdf9c5e38fb758ac75"
	},
	{
		"id": "46788cf818f9",
		"ts": "2026-09-20T17:16:03.495Z",
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
		"liquidityUsd": 665401.26,
		"hash": "46788cf818f9badab160cf350a69517b252f0fea1ff480d6cf23b246a88646ec"
	},
	{
		"id": "ce29d98b2a86",
		"ts": "2026-09-20T17:16:03.736Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4648507.1,
		"hash": "ce29d98b2a863376d7e38616319174c14bd42870515e2b97161aa81518a65221"
	},
	{
		"id": "b5c953a39e77",
		"ts": "2026-09-20T17:16:03.972Z",
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
		"liquidityUsd": 461193.93,
		"hash": "b5c953a39e77a9997beb79ec5392e630c796deea31cac4f84c1ac3e7f4bdc030"
	},
	{
		"id": "3df8c5205723",
		"ts": "2026-09-20T17:16:04.212Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1435130.69,
		"hash": "3df8c5205723881ecbd10fdc5d8d80b2e2c8cdb5b2cd6a6f8b5877cb6580ef94"
	},
	{
		"id": "e8127c1a5578",
		"ts": "2026-09-20T17:16:04.451Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1906023.06,
		"hash": "e8127c1a557894ff5f94dcb6e5c14af6b3cfa38e424cf0f3f12df7fed8468f32"
	},
	{
		"id": "fbe858bad072",
		"ts": "2026-09-20T13:54:54.015Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128925663.37,
		"hash": "fbe858bad0724ab9ab3b59ec679ca8553383accbfc20a0a9fafcbd14177da995"
	},
	{
		"id": "6dc147b8f890",
		"ts": "2026-09-20T13:54:54.277Z",
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
		"liquidityUsd": 16809759.45,
		"hash": "6dc147b8f8909f5a8c839c329734b3cf01ba6139730b8ea8e042803ec716aae1"
	},
	{
		"id": "42ae7d8a509d",
		"ts": "2026-09-20T13:54:54.533Z",
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
		"liquidityUsd": 852274.4,
		"hash": "42ae7d8a509d2d3b5c5180ea045afdca7c8b0b2ef4eefa951168c5905ac2ccf9"
	},
	{
		"id": "696af54bb21c",
		"ts": "2026-09-20T13:54:55.005Z",
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
		"liquidityUsd": 34308449.11,
		"hash": "696af54bb21c4a716df928b7b73c6c6e0eca48b533570facaddf0938d1e49b19"
	},
	{
		"id": "a9e4a99e164c",
		"ts": "2026-09-20T13:54:55.267Z",
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
		"liquidityUsd": 4268311.01,
		"hash": "a9e4a99e164cdf553b22c181c93964e02d59ca40a4bd3fc410d83c5ef5d202a5"
	},
	{
		"id": "60ae98b7644f",
		"ts": "2026-09-20T13:54:55.530Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1217911.55,
		"hash": "60ae98b7644fde888631bceb789749e82ad7d17eee0f6976a798d92fae2b83fd"
	},
	{
		"id": "a78ff92fb07b",
		"ts": "2026-09-20T13:54:55.783Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34308449.11,
		"hash": "a78ff92fb07bc47331da31e1a2a2fd3a19869e7f35ee7dc000882d7ae8e2aa4c"
	},
	{
		"id": "a793f1b654aa",
		"ts": "2026-09-20T13:54:56.042Z",
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
		"liquidityUsd": 1072385.76,
		"hash": "a793f1b654aa417c753daff4e2fc5fe3439a438c5762f32d4672efe52d88521b"
	},
	{
		"id": "0a3f259d880d",
		"ts": "2026-09-20T13:54:56.306Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 620095.12,
		"hash": "0a3f259d880dfc381ed6ce22de019229510b58dce9705a1fa4f4710ebec112c7"
	},
	{
		"id": "a0fe9aa94e1a",
		"ts": "2026-09-20T13:54:56.569Z",
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
		"liquidityUsd": 17274030.14,
		"hash": "a0fe9aa94e1ae568127e2e7589175e94427638eb9545eb5406dc8700f808a050"
	},
	{
		"id": "c4826ed99536",
		"ts": "2026-09-20T13:54:56.809Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1530679.61,
		"hash": "c4826ed99536567f0beae17537140608d9887806dab79e7f6a698565f95bcfa8"
	},
	{
		"id": "6d223d42d155",
		"ts": "2026-09-20T13:54:57.048Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 808020.17,
		"hash": "6d223d42d155ff12897c8843980c5b937f649ca37e33dd07a143e7f2c1ebdaed"
	},
	{
		"id": "e7e5e758d1d8",
		"ts": "2026-09-20T13:54:57.285Z",
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
		"liquidityUsd": 627691.32,
		"hash": "e7e5e758d1d8f27fbdceca1f04f9ecdc599fec71482cda5f4874f6f37a925910"
	},
	{
		"id": "7f3f41aa8044",
		"ts": "2026-09-20T13:54:57.529Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1200112.06,
		"hash": "7f3f41aa804442e197e97c805b14d0f8638c846a90da3a1d7c1fa2378e78d10d"
	},
	{
		"id": "91f803b3e36d",
		"ts": "2026-09-20T13:54:57.768Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4507635.38,
		"hash": "91f803b3e36dd2444205e22e59d7d26085e090c03a19bed9870a33da7e251c43"
	},
	{
		"id": "db87c5e9eac4",
		"ts": "2026-09-20T13:54:58.006Z",
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
		"liquidityUsd": 450642.64,
		"hash": "db87c5e9eac470b0bbfe46fd131200468ca5dd2385d0cac989fc1c1902915498"
	},
	{
		"id": "dc4a36749ba0",
		"ts": "2026-09-20T13:54:58.243Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1861582.9,
		"hash": "dc4a36749ba0f0e727c5776555440578b3765b040713d50a22d65f1f469a3a22"
	},
	{
		"id": "e0cbe7eaa426",
		"ts": "2026-09-20T13:54:58.483Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3211856.39,
		"hash": "e0cbe7eaa426479df367aaef415925d05ce8890ede1ab5054398666f03ce1b04"
	},
	{
		"id": "004833e9c107",
		"ts": "2026-09-20T09:01:03.084Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128797581.89,
		"hash": "004833e9c107c63fc6b64aa75caf3aa984caee9923d8a47b100dc386ebefd837"
	},
	{
		"id": "a6a325ba8028",
		"ts": "2026-09-20T09:01:03.387Z",
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
		"liquidityUsd": 16777428.68,
		"hash": "a6a325ba8028a3d47b0fd69bca022c4b95dadd3e2afdc2544bfd79c96246710f"
	},
	{
		"id": "853fd1dd8e46",
		"ts": "2026-09-20T09:01:03.647Z",
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
		"liquidityUsd": 850772.59,
		"hash": "853fd1dd8e46b2fda0d9c94c465e3e2697b6a9f3bf40f2c7e31284f39ac2d1cc"
	},
	{
		"id": "67ec884b6f85",
		"ts": "2026-09-20T09:01:03.974Z",
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
		"liquidityUsd": 34205452.89,
		"hash": "67ec884b6f85c876414585fb8065132176bc4431826a7d7fdfea443f89a0d0d0"
	},
	{
		"id": "523373b00bd8",
		"ts": "2026-09-20T09:01:04.278Z",
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
		"liquidityUsd": 4261199.3,
		"hash": "523373b00bd88fb9fa832e903db29bcff4bc58f4ab543840bf635d4a33e8bf2d"
	},
	{
		"id": "5a0f747c0f00",
		"ts": "2026-09-20T09:01:04.536Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1221393.05,
		"hash": "5a0f747c0f0014db751b141f14ac64560937f6e53cca6a064e1d51f0c242cd00"
	},
	{
		"id": "a45e91bcb833",
		"ts": "2026-09-20T09:01:04.800Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34205454.18,
		"hash": "a45e91bcb8333c46ac0819e2cecc1e1120b43b45285fa23e37a3002bbde1b935"
	},
	{
		"id": "bcd223fe2353",
		"ts": "2026-09-20T09:01:05.049Z",
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
		"liquidityUsd": 1068522,
		"hash": "bcd223fe2353e02cb0e206d20402a503f6bc022e1c454b459f4c99ac22c0ff5f"
	},
	{
		"id": "5f8c64542638",
		"ts": "2026-09-20T09:01:05.301Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 617973.56,
		"hash": "5f8c64542638204e6e431f1b9c5034b1b5d2c6d8b2e194b687f8865a9ebee27e"
	},
	{
		"id": "9b6a25cb6b1d",
		"ts": "2026-09-20T09:01:05.553Z",
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
		"liquidityUsd": 17107748.46,
		"hash": "9b6a25cb6b1d70ace49029ff64d15b9ace63d2ba7a12c490f539355329d6e0ae"
	},
	{
		"id": "1af06308bf6e",
		"ts": "2026-09-20T09:01:05.787Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1540217.79,
		"hash": "1af06308bf6e51a85cc454a3594ee8ee51adc4cc0151352e49f8bd2f5281b797"
	},
	{
		"id": "ac1e3604f408",
		"ts": "2026-09-20T09:01:06.024Z",
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
		"liquidityUsd": 630594.33,
		"hash": "ac1e3604f408c86ae98c799554834c67228595ec7a5f226b30c3d7a8454a4552"
	},
	{
		"id": "be32237eb1b5",
		"ts": "2026-09-20T09:01:06.261Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 646899.62,
		"hash": "be32237eb1b541c97f9e621db8c760dcfc8fd366d5294515971d7e13f9306327"
	},
	{
		"id": "a7af09e0a600",
		"ts": "2026-09-20T09:01:06.494Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1564438.91,
		"hash": "a7af09e0a600f76f05afaa33f2c3500bd98a57d52d93b9b9474737b39b0bb226"
	},
	{
		"id": "d916977d2280",
		"ts": "2026-09-20T09:01:06.731Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3239031.25,
		"hash": "d916977d2280b9c8059d9fd831ed0e218109e4efc18e2eba097bbc2299bec525"
	},
	{
		"id": "053fb64916e6",
		"ts": "2026-09-20T09:01:06.965Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4481041.76,
		"hash": "053fb64916e6e566c71011b00c63e69eee2d896f8849d034e6a2f393a96f1829"
	},
	{
		"id": "ac00c845e7a5",
		"ts": "2026-09-20T09:01:07.202Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1880246.79,
		"hash": "ac00c845e7a5039ea6e0339fb3b54a5c26b282eb95daeb6d2788b87aaf2f14a4"
	},
	{
		"id": "fa346558fb26",
		"ts": "2026-09-20T09:01:07.443Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 980836.53,
		"hash": "fa346558fb2634d453f42bb6ca022854abaacf6ec3d2baf8ca4fac6c7a9074da"
	},
	{
		"id": "24aaf5ac05f4",
		"ts": "2026-09-20T03:10:54.744Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128007277.79,
		"hash": "24aaf5ac05f449dcdab357f1a5859dbe696e2bb34c76b42b7539e969bad45d55"
	},
	{
		"id": "ad0e9d71adbe",
		"ts": "2026-09-20T03:10:55.120Z",
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
		"liquidityUsd": 16451741.53,
		"hash": "ad0e9d71adbedeef3d082e44eea3039ae257077b081380931c607210cd4f7822"
	},
	{
		"id": "53aa1184f166",
		"ts": "2026-09-20T03:10:55.335Z",
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
		"liquidityUsd": 865863.2,
		"hash": "53aa1184f166f265e8ed29af893502a8286ef392ba2a2f919a6669e996024f1a"
	},
	{
		"id": "b44f74d1969c",
		"ts": "2026-09-20T03:10:55.540Z",
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
		"liquidityUsd": 34089120.94,
		"hash": "b44f74d1969c420e27a04338393128c93ea257a6347719240cad6791c11788d3"
	},
	{
		"id": "7a20e8633c97",
		"ts": "2026-09-20T03:10:55.809Z",
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
		"liquidityUsd": 4281814.11,
		"hash": "7a20e8633c97eb07b89327b9570acf31446f2e9ffd6b28a330ca4353197d8997"
	},
	{
		"id": "8c9c09f10854",
		"ts": "2026-09-20T03:10:56.024Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1219612.03,
		"hash": "8c9c09f108548e1102196114cdb76f06e7fc77228931c90575c6971084bf56f4"
	},
	{
		"id": "afde297ad56f",
		"ts": "2026-09-20T03:10:56.226Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34089120.94,
		"hash": "afde297ad56f815e69baf33f0f0d13c9340a2b61e5dbd8d4ee46777554339614"
	},
	{
		"id": "0cd62815a664",
		"ts": "2026-09-20T03:10:56.597Z",
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
		"liquidityUsd": 1194189.84,
		"hash": "0cd62815a6640a6bc678d0aecaff0cd580c8ebff28aafeebe1bf333cb877d4c5"
	},
	{
		"id": "db5b20551ba8",
		"ts": "2026-09-20T03:10:56.807Z",
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
		"liquidityUsd": 16544165.49,
		"hash": "db5b20551ba8c64ff77c8f3f87132cc8ab46f19c3dcb0a438cb66836284a4182"
	},
	{
		"id": "be7b6754340b",
		"ts": "2026-09-20T03:10:57.024Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3432476.22,
		"hash": "be7b6754340bcb2480196f69a5ccf1d50f745c93625a74f3d00ad4839ab565ce"
	},
	{
		"id": "4f49a2eb34df",
		"ts": "2026-09-20T03:10:57.217Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1596945.05,
		"hash": "4f49a2eb34df2f06b2b06598a76e25846062a00298e241e7c39582682dfa623d"
	},
	{
		"id": "c21ab08a937c",
		"ts": "2026-09-20T03:10:57.413Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 554934.84,
		"hash": "c21ab08a937c2e37e3607294ecfde0f3ba3ea152d20c09b3638e0992b69e58e9"
	},
	{
		"id": "1c9c0df58651",
		"ts": "2026-09-20T03:10:57.657Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1558237.8,
		"hash": "1c9c0df58651558025d14ca6e16afc25216954ff21e5557205a6e0ed0a1530e0"
	},
	{
		"id": "ca6feef5c2ba",
		"ts": "2026-09-20T03:10:57.849Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4553639.75,
		"hash": "ca6feef5c2ba7539d8fce112d16396f035a670ebbf0dbf75c874949794da7977"
	},
	{
		"id": "38f1c9724742",
		"ts": "2026-09-20T03:10:58.049Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1337827.2,
		"hash": "38f1c9724742fbd451e4a1d0048475e801ba3293785de3a10705fdc19f0ea6bf"
	},
	{
		"id": "9d1a0fde9190",
		"ts": "2026-09-20T03:10:58.239Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1882488.32,
		"hash": "9d1a0fde91901d762fe3071d2e33bf66383fb1dc8bebbca6844c89defaafd6a2"
	},
	{
		"id": "90ea27c1c6fc",
		"ts": "2026-09-20T03:10:58.430Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579953.46,
		"hash": "90ea27c1c6fcfb471e694f47eb07c00b7db024188756d62311a8263ecfea2a33"
	},
	{
		"id": "fa94bd0c247e",
		"ts": "2026-09-20T03:10:58.623Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2927243.36,
		"hash": "fa94bd0c247ec1ee82b3e914a82abe017b504f35cd81894b514e4b81fa7e85e8"
	},
	{
		"id": "e32f1d05336b",
		"ts": "2026-09-19T23:51:41.704Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129248855.48,
		"hash": "e32f1d05336b9344828f6f0841103bc07bfae3fecd53ffd9aa6aef36b87a15a6"
	},
	{
		"id": "320c064763ac",
		"ts": "2026-09-19T23:51:42.168Z",
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
		"liquidityUsd": 17424981.94,
		"hash": "320c064763ac7f93a04cbe6264566ab03ee67f93be39ca67ff17c964ca46f570"
	},
	{
		"id": "4981a36fa96a",
		"ts": "2026-09-19T23:51:42.417Z",
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
		"liquidityUsd": 883035.78,
		"hash": "4981a36fa96a12d36ab21985ce9952325b73488cbb8eecc017fbc44188366d19"
	},
	{
		"id": "e23ea780563c",
		"ts": "2026-09-19T23:51:42.664Z",
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
		"liquidityUsd": 34507652.89,
		"hash": "e23ea780563c16acde9d3fbf6beed47f3cffe8e107baae2d1f99c6495fd418e3"
	},
	{
		"id": "c5a73bd0a4fd",
		"ts": "2026-09-19T23:51:42.908Z",
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
		"liquidityUsd": 4425393.83,
		"hash": "c5a73bd0a4fd72cc035422c2bd2407229a87a99a45b6605eca8f981b723d4d99"
	},
	{
		"id": "6c4bb6c0cebf",
		"ts": "2026-09-19T23:51:43.153Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1261997.35,
		"hash": "6c4bb6c0cebf503e1e0d1cfefde11951cc7014abc28835c45ab86b67a5bf9ce6"
	},
	{
		"id": "14aa47083c1a",
		"ts": "2026-09-19T23:51:43.398Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34507652.89,
		"hash": "14aa47083c1a7c955d081e31f489408c56f51d6e96587ea41385408b7da9d04c"
	},
	{
		"id": "56b65e3dfe10",
		"ts": "2026-09-19T23:51:43.670Z",
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
		"liquidityUsd": 1959278.78,
		"hash": "56b65e3dfe105a614e22c8d7b4cd7d94ff70790d29e3f7d6a6fefd97a6b180d3"
	},
	{
		"id": "e684cbf17917",
		"ts": "2026-09-19T23:51:43.915Z",
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
		"liquidityUsd": 16569402.28,
		"hash": "e684cbf179177a2be0d4c9565930d23e1fbd042f23d0e356cbaf1952c9447c4b"
	},
	{
		"id": "b4abc8034e5f",
		"ts": "2026-09-19T23:51:44.166Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 3564413.78,
		"hash": "b4abc8034e5fe7f400a2a78aeb835b73ea3402d101dd812b298376e7d7faa4ba"
	},
	{
		"id": "202093715fac",
		"ts": "2026-09-19T23:51:44.395Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1631182.75,
		"hash": "202093715fac620b7484b40ddcbfebbba1087d406f8add9519669106e82bfe94"
	},
	{
		"id": "c4d4f71794a9",
		"ts": "2026-09-19T23:51:44.621Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1514202.23,
		"hash": "c4d4f71794a9dbae5f580f9748ce9e82cb82b6d47caae60495b6350295350c7c"
	},
	{
		"id": "00426ecafd22",
		"ts": "2026-09-19T23:51:44.846Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 525812.47,
		"hash": "00426ecafd22e4c5ecebf5d7678f5bb8302f6e8fbd7c1198d448f1b3b1b2dc05"
	},
	{
		"id": "d78445cde837",
		"ts": "2026-09-19T23:51:45.074Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 915206.56,
		"hash": "d78445cde837a772a3bea5bc1ffc2a1bddd5e6ac55325f28a596150316cafe58"
	},
	{
		"id": "9c874370681c",
		"ts": "2026-09-19T23:51:45.302Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 945212.45,
		"hash": "9c874370681cf04e84f9aa05514dd3ed51c10c2b869ea057902e9f7888128eea"
	},
	{
		"id": "80dfc6554167",
		"ts": "2026-09-19T23:51:45.527Z",
		"symbol": "VCAT",
		"token": "0xFDCC845c048Ad96B5C80b6A55D65C20A98d37777",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 190020.93,
		"hash": "80dfc6554167184d3bd7302f2a1c8e261b8d327ec1c4ec101c9b3dcb2ebcaa36"
	},
	{
		"id": "374beec81432",
		"ts": "2026-09-19T23:51:45.754Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4687492.01,
		"hash": "374beec81432f591307d726b5fcc867317e1a73ac5df14dd05ac9031a61d7326"
	},
	{
		"id": "d9f5d5e86f34",
		"ts": "2026-09-19T23:51:45.982Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1930149.04,
		"hash": "d9f5d5e86f34da16fb5bdbde268589b8ccc8fee4631052bdf054c2c15b00c630"
	},
	{
		"id": "2ffc533aec9d",
		"ts": "2026-09-19T21:15:12.263Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129306899.6,
		"hash": "2ffc533aec9d7d0bdbb2263c01c73c50f539d26de6dcf87626cf17306a13adeb"
	},
	{
		"id": "5eaa1df2ea22",
		"ts": "2026-09-19T21:15:12.740Z",
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
		"liquidityUsd": 17676847.48,
		"hash": "5eaa1df2ea22f373cb70ed13865b0834296a613c1b905562f5073c282fb0ed47"
	},
	{
		"id": "06e93eb13dea",
		"ts": "2026-09-19T21:15:13.003Z",
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
		"liquidityUsd": 881478.58,
		"hash": "06e93eb13deaca6de9adda1a985d174c38ab0c3ed62819ad0c55ffb938e91fcc"
	},
	{
		"id": "25ba154f8c03",
		"ts": "2026-09-19T21:15:13.268Z",
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
		"liquidityUsd": 34448262.35,
		"hash": "25ba154f8c032c9cf5017d74ba02ac80637c2f50d063cf0be15f0af11e9d1c21"
	},
	{
		"id": "b5c164f4ec6b",
		"ts": "2026-09-19T21:15:13.737Z",
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
		"liquidityUsd": 4428402.9,
		"hash": "b5c164f4ec6b80bbca39b7050789dfc92cae14fecd84d5f87175338bc74133c8"
	},
	{
		"id": "c6ce4ffd789d",
		"ts": "2026-09-19T21:15:14.006Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1261810.48,
		"hash": "c6ce4ffd789df8e9a2f16d3322dad2a6198972cb2b310b9167ebcbda74ba5ea7"
	},
	{
		"id": "a8508fb34f7c",
		"ts": "2026-09-19T21:15:14.260Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34443409.72,
		"hash": "a8508fb34f7ce74b71f3737b134899aac9a9508dd6965eedc72f7a6bcccb980e"
	},
	{
		"id": "0819da94f17e",
		"ts": "2026-09-19T21:15:14.515Z",
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
		"liquidityUsd": 1952168.78,
		"hash": "0819da94f17ea9b24ad0cd03091a90fde21f4e47774fa5d9dc358aea5f4c899a"
	},
	{
		"id": "98ef8848f4a4",
		"ts": "2026-09-19T21:15:14.771Z",
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
		"liquidityUsd": 16527864.82,
		"hash": "98ef8848f4a46c86d97f40ba86b6e65875a8ef183ad9acb2acdb4b590a53e294"
	},
	{
		"id": "b7705e7132d1",
		"ts": "2026-09-19T21:15:15.036Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 3251477.03,
		"hash": "b7705e7132d143fd2a4e99990b8479febf4ab9a74b9844089352d2fb33e66dac"
	},
	{
		"id": "edf9910f7945",
		"ts": "2026-09-19T21:15:15.283Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1634739.36,
		"hash": "edf9910f794551c5f734f20a8ca86a549965051f693164ad46899906908866ac"
	},
	{
		"id": "0e43f046b310",
		"ts": "2026-09-19T21:15:15.524Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1537505.6,
		"hash": "0e43f046b310e5161578ca8ab610a8427e486f4b69c006fc3383c7a92ec7f4f8"
	},
	{
		"id": "416e351eca6d",
		"ts": "2026-09-19T21:15:15.771Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4695736.02,
		"hash": "416e351eca6d4dd25c346b790a490c3fcfc0c75473789d8570103a19aa768d9f"
	},
	{
		"id": "2077e20d84da",
		"ts": "2026-09-19T21:15:16.007Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 888212.45,
		"hash": "2077e20d84daa917a3f6e6be35a439933b52aeeb9f14960839e9d293a88efc70"
	},
	{
		"id": "166a0847a1c3",
		"ts": "2026-09-19T21:15:16.243Z",
		"symbol": "VCAT",
		"token": "0xFDCC845c048Ad96B5C80b6A55D65C20A98d37777",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 203486.2,
		"hash": "166a0847a1c3c0c1bee4bc70e79b85933ca3d64f498aa36e49ce50e5310eb674"
	},
	{
		"id": "7b1a3605c8f2",
		"ts": "2026-09-19T21:15:16.480Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1930622.26,
		"hash": "7b1a3605c8f26e9be03980e3fb9ba6701dfa422af5c1d1fac56fa84f3e3c47e2"
	},
	{
		"id": "efd57e9f37ef",
		"ts": "2026-09-19T21:15:16.726Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 930324.57,
		"hash": "efd57e9f37efc546acc79af6c5dd15e9363575bb2ecfa4ea3ee09a254139ad27"
	},
	{
		"id": "9059b4ded8e4",
		"ts": "2026-09-19T21:15:16.973Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1447027.28,
		"hash": "9059b4ded8e47bfae35758d92f2f9346e87a8cd1cf5a62ebd24d0b7a174e8b34"
	},
	{
		"id": "69f502c65a9d",
		"ts": "2026-09-19T18:22:42.137Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 129281744.92,
		"hash": "69f502c65a9d3ffe7c1868be2ca75c885454991117af4f4fd88fae32cbef0e9c"
	},
	{
		"id": "977e14fa54fa",
		"ts": "2026-09-19T18:22:42.614Z",
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
		"liquidityUsd": 12765916.58,
		"hash": "977e14fa54fa1d06d0069da8c582182d7b8ad15bf0173e679d04c2308eed9a39"
	},
	{
		"id": "9aed855dc56f",
		"ts": "2026-09-19T18:22:42.879Z",
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
		"liquidityUsd": 886353.02,
		"hash": "9aed855dc56f53b1cb8d6936ebd83c4fd24d598e7a8bcfce150f5eb8d4740798"
	},
	{
		"id": "7c5b7b20dc4c",
		"ts": "2026-09-19T18:22:43.138Z",
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
		"liquidityUsd": 34564838.74,
		"hash": "7c5b7b20dc4c060eeb21b964e73309ca090b9426765340a274cd0d550720f69c"
	},
	{
		"id": "06b708053f5a",
		"ts": "2026-09-19T18:22:43.462Z",
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
		"liquidityUsd": 4455000.24,
		"hash": "06b708053f5a9b0368b09d052a267bcdc13a8125fc96cba9519621a854da70f1"
	},
	{
		"id": "1f59db2f8f0a",
		"ts": "2026-09-19T18:22:43.718Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1260483.56,
		"hash": "1f59db2f8f0aadedaa6f52a5b50e71b89545678a954b85b901a15fb0b46d7a0f"
	},
	{
		"id": "0f131b951f16",
		"ts": "2026-09-19T18:22:43.977Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34564319.91,
		"hash": "0f131b951f16a8aed9b7b6001da9dac9189c20415ff9d2142e62b18c10695172"
	},
	{
		"id": "012623c770ce",
		"ts": "2026-09-19T18:22:44.238Z",
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
		"liquidityUsd": 1963216.23,
		"hash": "012623c770ceb91cc30c9faeab18072d80c764334c07f045e7ba4615c8b4bff5"
	},
	{
		"id": "f01098c81294",
		"ts": "2026-09-19T18:22:44.499Z",
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
		"liquidityUsd": 16965349.98,
		"hash": "f01098c812942f1b9c7b336bacd9379c8d8773ab8021bf2f0cf358306a41f70a"
	},
	{
		"id": "3be40654e419",
		"ts": "2026-09-19T18:22:44.755Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 3174634.08,
		"hash": "3be40654e419d08416f54f7babea305c90223f990e580ff27dcf016c5824d285"
	},
	{
		"id": "0738764dabec",
		"ts": "2026-09-19T18:22:44.996Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1725899.48,
		"hash": "0738764dabecb287733d4bacdec58a2623655dd14b42932dd564d24189cdb5d7"
	},
	{
		"id": "20e524788b63",
		"ts": "2026-09-19T18:22:45.238Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1524730.97,
		"hash": "20e524788b63f24adf4304daf527e71919e810a7b310c6e563920b6986056d3f"
	},
	{
		"id": "f519b648721e",
		"ts": "2026-09-19T18:22:45.481Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1450441.15,
		"hash": "f519b648721ee0e6a6426c2fc8e39719278feca9488ecd38df3e28fc4f19d2db"
	},
	{
		"id": "31f6fcf73456",
		"ts": "2026-09-19T18:22:45.723Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 944910.91,
		"hash": "31f6fcf73456e2949ffcb8dea378afbdcc468e5ca06f8b6d943b93d064ba8a08"
	},
	{
		"id": "faaf4a64ab7b",
		"ts": "2026-09-19T18:22:45.963Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2395242.56,
		"hash": "faaf4a64ab7b82f841b6e315c79c34b80644ff1f3cd2a9b55ab45530de54578c"
	},
	{
		"id": "3872f83247fa",
		"ts": "2026-09-19T18:22:46.202Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3101217.35,
		"hash": "3872f83247faa2d65622feaca390bc7cea3f20fd041804e4321c55aff8be4dd7"
	},
	{
		"id": "6951a288cf5d",
		"ts": "2026-09-19T18:22:46.509Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1931974.71,
		"hash": "6951a288cf5da9d894b1fb2f6fc6717d452200c9d770c73d0a3bc010d65448e4"
	},
	{
		"id": "20f77b6e3e5d",
		"ts": "2026-09-19T18:22:46.748Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4737324.19,
		"hash": "20f77b6e3e5d9492ad6cc6cbb4de470f13e30b8411ba9adf7f26e8a93cc3e67d"
	},
	{
		"id": "f8b38aabd49b",
		"ts": "2026-09-19T15:16:34.454Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128559632.28,
		"hash": "f8b38aabd49b4166f9e03b0807e66cfc44801ad39c545457860745be7ae5a8e5"
	},
	{
		"id": "776d87138611",
		"ts": "2026-09-19T15:16:34.932Z",
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
		"liquidityUsd": 13925231.61,
		"hash": "776d87138611c977b4dcffd218dcb49baaaf480f463e4479ae4d766dd6b567df"
	}
]
