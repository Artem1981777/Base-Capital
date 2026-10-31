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
	"updatedAt": "2026-10-31T14:58:28.099Z",
	"tokensScored": 21918,
	"verdictsIssued": 21918,
	"safe": 18698,
	"risky": 1548,
	"likelyRug": 1672,
	"ticks": 1234
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "644b25882ca5",
		"ts": "2026-10-31T14:58:24.246Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 150565613.08,
		"hash": "644b25882ca5815a6f2220a121f0e0a2f58c36f640219dab197e81ef890c25b3"
	},
	{
		"id": "06e386946cba",
		"ts": "2026-10-31T14:58:24.504Z",
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
		"liquidityUsd": 16021921.77,
		"hash": "06e386946cbacf086dbf36ca6c00c31e5ada66a683f7172eec86b9a3ca5bd8a9"
	},
	{
		"id": "8ba173219947",
		"ts": "2026-10-31T14:58:24.729Z",
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
		"liquidityUsd": 251026.81,
		"hash": "8ba173219947935e6e1f53d19bf6209754b92ba8967b6a062eefd7b0b53b4eae"
	},
	{
		"id": "1724b5b426b9",
		"ts": "2026-10-31T14:58:24.958Z",
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
		"liquidityUsd": 5863183.72,
		"hash": "1724b5b426b96050280f44b0ea25f34cd6f90d3e7374e1259e2a9e2df6808487"
	},
	{
		"id": "f25a312d8a69",
		"ts": "2026-10-31T14:58:25.167Z",
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
		"liquidityUsd": 852072.83,
		"hash": "f25a312d8a69c2f2cc29ac2281fd2e99cd964293924014ae267a6f79ea6b161a"
	},
	{
		"id": "88c10886ede6",
		"ts": "2026-10-31T14:58:25.386Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1059038.19,
		"hash": "88c10886ede6196510e97f7f74466a06caa1eaf428b11f1399e6033db28e45b4"
	},
	{
		"id": "acaf73d2f6f8",
		"ts": "2026-10-31T14:58:25.604Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2435574.75,
		"hash": "acaf73d2f6f8502fe53ec86e238958bb60b3a6b6a4a6cf49d42a006a12957327"
	},
	{
		"id": "330d23b6dd9a",
		"ts": "2026-10-31T14:58:25.813Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1374824.79,
		"hash": "330d23b6dd9a62f45b1dd73f55c6f5503620e7b274d38bdeb8878aaa60fe0788"
	},
	{
		"id": "5d5709a331eb",
		"ts": "2026-10-31T14:58:26.025Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 241670.08,
		"hash": "5d5709a331eb04d5df45ad1c27ae604cb266a0227769bf1c4f097dc5dca83106"
	},
	{
		"id": "389412779518",
		"ts": "2026-10-31T14:58:26.226Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1034666.59,
		"hash": "389412779518d15429dd6d6836aa65680505a5b29c0a045c7d2876ffefd23deb"
	},
	{
		"id": "507ffb2db1f9",
		"ts": "2026-10-31T14:58:26.479Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1723035.72,
		"hash": "507ffb2db1f9e332c24aa25068dc84bf3c1dd564486a71efeedca3b820a9a387"
	},
	{
		"id": "700e053177cd",
		"ts": "2026-10-31T14:58:26.702Z",
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
		"liquidityUsd": 1247051.65,
		"hash": "700e053177cdc911fa9859c0acc4d2b48ed0653004588841877e5e60d1138bc5"
	},
	{
		"id": "d07d7eea9465",
		"ts": "2026-10-31T14:58:26.902Z",
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
		"liquidityUsd": 2887596.19,
		"hash": "d07d7eea94658d5bd517f8c6dd816688c0192334af7900fbd265c70ef001c77e"
	},
	{
		"id": "163ecbe624a0",
		"ts": "2026-10-31T14:58:27.091Z",
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
		"liquidityUsd": 7776735.04,
		"hash": "163ecbe624a0a1e92c99a7f08db06e46162cd1575769ed04d59ab86563483b49"
	},
	{
		"id": "c0a918b3addd",
		"ts": "2026-10-31T14:58:27.307Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 162374.61,
		"hash": "c0a918b3adddedf3c3491310a27a4073bf43003fefb47b9a73e224523486718d"
	},
	{
		"id": "88261441128d",
		"ts": "2026-10-31T14:58:27.499Z",
		"symbol": "ATLAS",
		"token": "0xB462A5039a540883508Ee37b5cF3999647557ba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 95806.04,
		"hash": "88261441128d2e0b3040effcbdab6ebe218155a41b4fd41010e8040305a8f45b"
	},
	{
		"id": "0c8f7755221e",
		"ts": "2026-10-31T14:58:27.691Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 804502.8,
		"hash": "0c8f7755221e241038c36dbab1464a9842c752fd585adfa96119281838d04b60"
	},
	{
		"id": "a12d82ab08e7",
		"ts": "2026-10-31T14:58:27.902Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1757458.31,
		"hash": "a12d82ab08e7e181a5fff134b47c1615eab0315eabcfca2bf7ca341b6d26adff"
	},
	{
		"id": "78664e2d464e",
		"ts": "2026-10-31T14:58:28.099Z",
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
		"liquidityUsd": 963624.88,
		"hash": "78664e2d464e8a2cd5c113baa25907c077a7a73dc237e2e48272cf4c3000b4d1"
	},
	{
		"id": "0c5a6f004b1c",
		"ts": "2026-10-31T08:09:45.695Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150037189.25,
		"hash": "0c5a6f004b1cb54cfcb1cf356dea9a357b062a2775559c348b243de92e2baf98"
	},
	{
		"id": "88dbb17d424c",
		"ts": "2026-10-31T08:09:46.164Z",
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
		"liquidityUsd": 15993530.17,
		"hash": "88dbb17d424c7bb0e2d72d39ee68efce8211fe867c239237edd0d8f8e432e5cf"
	},
	{
		"id": "064042cbfdc2",
		"ts": "2026-10-31T08:09:46.417Z",
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
		"liquidityUsd": 248081.93,
		"hash": "064042cbfdc2a21d997797cded77abf995d560311cd8cfee0c341b9bdf5fdcf1"
	},
	{
		"id": "7b176e174200",
		"ts": "2026-10-31T08:09:46.662Z",
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
		"liquidityUsd": 5897143.57,
		"hash": "7b176e1742002a8446624e9f133ff33af461929edbdc807691286fb770097da2"
	},
	{
		"id": "dd61d7b87360",
		"ts": "2026-10-31T08:09:46.942Z",
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
		"liquidityUsd": 953971.77,
		"hash": "dd61d7b873601ed79a1a07b01be0817ac5be7efd60d4d664235edca607557e31"
	},
	{
		"id": "015feadc36bb",
		"ts": "2026-10-31T08:09:47.214Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1058723.35,
		"hash": "015feadc36bbf7d89f4406adcde32aad5fdb4620cc3c5c6f059bd4d9df55efed"
	},
	{
		"id": "c9420ccb3472",
		"ts": "2026-10-31T08:09:47.461Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5897143.57,
		"hash": "c9420ccb34722acf20ed89f78748ff170e5c7fe17284331d6873cd74f44e621e"
	},
	{
		"id": "dc7a0da0ad03",
		"ts": "2026-10-31T08:09:47.711Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1571234.24,
		"hash": "dc7a0da0ad03d8db96f19c352cae901db9d5f147e5223b85c20aa05e38175f90"
	},
	{
		"id": "83262d968427",
		"ts": "2026-10-31T08:09:47.959Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 292757.81,
		"hash": "83262d968427b1c46e265485cb0ac325d43d95c440e5ea8c486be58ee6abaff4"
	},
	{
		"id": "88c26a9913d7",
		"ts": "2026-10-31T08:09:48.219Z",
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
		"liquidityUsd": 1710624.51,
		"hash": "88c26a9913d70d49aba89d4e415943367d9460841e0136e16751d2ac3c79d77a"
	},
	{
		"id": "62f805530c85",
		"ts": "2026-10-31T08:09:48.449Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 962227.47,
		"hash": "62f805530c85ce9b57f9ae680aeb1fbeb72388ceb8fd6c46b59ea1cefff94b48"
	},
	{
		"id": "c78433143bf9",
		"ts": "2026-10-31T08:09:48.680Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55564.69,
		"hash": "c78433143bf9b134700732adb17b4da15f4cfd1d90afe5a9f9f25bbd9eb134d6"
	},
	{
		"id": "de0abe4d556c",
		"ts": "2026-10-31T08:09:48.914Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 172150.05,
		"hash": "de0abe4d556cb202abf7e57abdc934651861faa9b3e655d2cf450e1947443a8c"
	},
	{
		"id": "3ab05766b3e0",
		"ts": "2026-10-31T08:09:49.146Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 686393.03,
		"hash": "3ab05766b3e09083e2b0b2b41837004f9b128036a35278565e7d452cef8e12ea"
	},
	{
		"id": "75e289805669",
		"ts": "2026-10-31T08:09:49.378Z",
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
		"liquidityUsd": 7695612.38,
		"hash": "75e28980566914f7d15e4d8bd3d2353945ea0af2344f1e3ca836013dcbee9406"
	},
	{
		"id": "9c0213f79e88",
		"ts": "2026-10-31T08:09:49.609Z",
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
		"liquidityUsd": 2908268.75,
		"hash": "9c0213f79e888a6ab2a1afabed347e6e1b0824b668bd84dd0b4c13f4199f9d27"
	},
	{
		"id": "cf7d157a3c8c",
		"ts": "2026-10-31T08:09:49.842Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1751386.56,
		"hash": "cf7d157a3c8c66669cc4a95fca432a78b5caf8a4dfc270e1c5b0fee2f4c212cf"
	},
	{
		"id": "595d993cbc75",
		"ts": "2026-10-31T08:09:50.074Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 501705.68,
		"hash": "595d993cbc752212d85f4d14260e6a18347b9d4da62289e69fe8506000e88302"
	},
	{
		"id": "46a900f19715",
		"ts": "2026-10-31T08:09:50.305Z",
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
		"liquidityUsd": 218358.71,
		"hash": "46a900f197159af046d4892b27f7e04fb2e253250e5f3649ec399f0fe5be9bab"
	},
	{
		"id": "ab026f59a318",
		"ts": "2026-10-31T01:58:08.697Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150425799.54,
		"hash": "ab026f59a318a24978a8363734ab16d644e11b6692f0d92c6d4b0ce6f88c4a05"
	},
	{
		"id": "98f789f06553",
		"ts": "2026-10-31T01:58:08.984Z",
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
		"liquidityUsd": 15981998.45,
		"hash": "98f789f06553e00a7ee21e6326aa8aa7f1034845c83a17433440e911f267095c"
	},
	{
		"id": "1deddad0d84e",
		"ts": "2026-10-31T01:58:09.353Z",
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
		"liquidityUsd": 244316.73,
		"hash": "1deddad0d84e54801f07f2f982ec2e45e1886a07c38e62bc3f872744665b3f8a"
	},
	{
		"id": "b5aeb1f44f45",
		"ts": "2026-10-31T01:58:09.575Z",
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
		"liquidityUsd": 5939543.33,
		"hash": "b5aeb1f44f451524d9356180a7a1964fdc03628382fce1c5bf76cb52bd4b50f8"
	},
	{
		"id": "5dc3b6aa6d8f",
		"ts": "2026-10-31T01:58:09.813Z",
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
		"liquidityUsd": 741924.35,
		"hash": "5dc3b6aa6d8fdc75525e5073b167ca8f463b06289ee704c6e1bf3f23995c5db8"
	},
	{
		"id": "b75a06b7fd32",
		"ts": "2026-10-31T01:58:10.026Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1059096.96,
		"hash": "b75a06b7fd3281cfc24aff5ebc5842599133464672308e05e696168515eea90f"
	},
	{
		"id": "d11a15b05b86",
		"ts": "2026-10-31T01:58:10.246Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5939543.33,
		"hash": "d11a15b05b862b9e277f5fd5dfc4645df13df9ddfd7089ddf1fe58d234b2ac62"
	},
	{
		"id": "74225fff8942",
		"ts": "2026-10-31T01:58:10.463Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1451088.23,
		"hash": "74225fff894293e0a3f730a8a21bb3067270ad3cc42e54ce5ceb1b68c2ff2d86"
	},
	{
		"id": "e523154077cc",
		"ts": "2026-10-31T01:58:10.684Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 272897,
		"hash": "e523154077cc8c657c03219e9bf44928d639cc20d13aa1b81d6a46a1ceb3a6a8"
	},
	{
		"id": "cc684c8491f5",
		"ts": "2026-10-31T01:58:10.895Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1014233.54,
		"hash": "cc684c8491f5518daa7fde649e288ae2b89b8b044ddfb2db4bec33ab56a9ce7f"
	},
	{
		"id": "fbe8f4404435",
		"ts": "2026-10-31T01:58:11.089Z",
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
		"liquidityUsd": 1726613.38,
		"hash": "fbe8f4404435a84713def811d25ef0961b136757981a0c0da51a236ea4984528"
	},
	{
		"id": "2220a438824f",
		"ts": "2026-10-31T01:58:11.335Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 159460.24,
		"hash": "2220a438824ffb1dc9afcc2cff4f87618eef7253a65d505ed048928a17527f8e"
	},
	{
		"id": "17e8ccbb2d0f",
		"ts": "2026-10-31T01:58:11.592Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55642.05,
		"hash": "17e8ccbb2d0f924956e7d7d5ab196d2a9530db2c0c05dc61a48697d699c64bd6"
	},
	{
		"id": "5786812ce4b8",
		"ts": "2026-10-31T01:58:11.786Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3551292.59,
		"hash": "5786812ce4b84630670e08f4e4d0e17f1b410b7ca19629595ce91f96d38a6fb5"
	},
	{
		"id": "6812bcafeef8",
		"ts": "2026-10-31T01:58:12.022Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 691234.65,
		"hash": "6812bcafeef8838874d5f9606134e1bded5c27e5a6a95c52b4d501943de2cecf"
	},
	{
		"id": "eb92ac7e6120",
		"ts": "2026-10-31T01:58:12.213Z",
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
		"liquidityUsd": 7768982.14,
		"hash": "eb92ac7e6120357c454c89cb93f19e7384f160b80234fa43d1037d8821b20cf6"
	},
	{
		"id": "1aa989e8e448",
		"ts": "2026-10-31T01:58:12.431Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3019484.02,
		"hash": "1aa989e8e44846ff1c605bd0eec575da604b2de2f48630e7952d7cf4ca5f6931"
	},
	{
		"id": "0721d4b7e4c4",
		"ts": "2026-10-31T01:58:12.639Z",
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
		"liquidityUsd": 224858.49,
		"hash": "0721d4b7e4c439e8640c4769c60f52d0d2f05b118cb430d51b3d1705bea1743e"
	},
	{
		"id": "85cdd53c69d0",
		"ts": "2026-10-31T01:58:12.861Z",
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
		"liquidityUsd": 2920863.03,
		"hash": "85cdd53c69d01a23b456b4dc239cfded5d6fe74c7814ce148da794e037f35b09"
	},
	{
		"id": "271cf41fc43c",
		"ts": "2026-10-30T22:49:41.955Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 150098240.32,
		"hash": "271cf41fc43c21b4013345b913bd27d2025ef8baa20349d8cd6b36ca8fb379f3"
	},
	{
		"id": "4675dd99a289",
		"ts": "2026-10-30T22:49:42.315Z",
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
		"liquidityUsd": 15916662.1,
		"hash": "4675dd99a2891d938ae0c14b22151eb059d6d875295c7be2db03f1696be002fd"
	},
	{
		"id": "734cdb8e71a1",
		"ts": "2026-10-30T22:49:42.540Z",
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
		"liquidityUsd": 246517.11,
		"hash": "734cdb8e71a1c9887aa23da667610eaf9f6263d9a002386ae4aa12842e07e084"
	},
	{
		"id": "d414f53f73ba",
		"ts": "2026-10-30T22:49:42.735Z",
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
		"liquidityUsd": 5885798.99,
		"hash": "d414f53f73badb836049dbb8f3016919711f618244526fccdd8a2160542cfc86"
	},
	{
		"id": "06f53edc9f2d",
		"ts": "2026-10-30T22:49:42.943Z",
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
		"liquidityUsd": 784347.98,
		"hash": "06f53edc9f2d5c2c5a65f0d7d6e9a94d015baff2ee3c15f818edc9bdea8266a1"
	},
	{
		"id": "11ea15c78268",
		"ts": "2026-10-30T22:49:43.153Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1055875.42,
		"hash": "11ea15c7826862ba1e613abb04e1f4b4e7136d6cd19403bcab873a28e07bc9c7"
	},
	{
		"id": "460f67073e2f",
		"ts": "2026-10-30T22:49:43.364Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5885798.99,
		"hash": "460f67073e2f98f37edb9fcc2605b1a43ae192aec2907d054d1e116e11e2dcaa"
	},
	{
		"id": "58219e4e5e5d",
		"ts": "2026-10-30T22:49:43.573Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1443618.23,
		"hash": "58219e4e5e5d5388e4428a253d2aa64a91fcf2470a25b3d37b1729da25e1cb00"
	},
	{
		"id": "a57930294f98",
		"ts": "2026-10-30T22:49:43.794Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 264215.29,
		"hash": "a57930294f98371a5b699d18e5c6234b3ab1553dd848cb32f4d9070c55e7bf6d"
	},
	{
		"id": "3e2a4d7712de",
		"ts": "2026-10-30T22:49:43.997Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1018980.49,
		"hash": "3e2a4d7712dea06be5b7c0873bc1c43bc440e6af1476ede14caaf80260fb095e"
	},
	{
		"id": "204e813c6636",
		"ts": "2026-10-30T22:49:44.196Z",
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
		"liquidityUsd": 1728387.48,
		"hash": "204e813c6636752ebf56970225108325fccafe0ecaf7720ff999d4e9de3e808d"
	},
	{
		"id": "1e695dff464d",
		"ts": "2026-10-30T22:49:44.407Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 169063.59,
		"hash": "1e695dff464d062a9c29455149da1580db6bb60b38f9f7d597dfdf5c439e5ec6"
	},
	{
		"id": "8951a204cb9f",
		"ts": "2026-10-30T22:49:44.611Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55560.75,
		"hash": "8951a204cb9f6a227eb1326e70cfcb9b2b95d79facc6685e97b73cd05b9d058a"
	},
	{
		"id": "04195cbdb663",
		"ts": "2026-10-30T22:49:44.830Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3535655.79,
		"hash": "04195cbdb66366201715e8bae2eea0b070fe67f03c7deb854abbc872a35b307d"
	},
	{
		"id": "11850a5940ae",
		"ts": "2026-10-30T22:49:45.070Z",
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
		"liquidityUsd": 213372.37,
		"hash": "11850a5940ae4211b3fccf52a4529b924ac7a7d858629f0517c9cf45468613f6"
	},
	{
		"id": "10cf1e9fbc0f",
		"ts": "2026-10-30T22:49:45.276Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 687100.93,
		"hash": "10cf1e9fbc0f19230202c0bb55d25ab4c6c333938349550b986601ac9c937459"
	},
	{
		"id": "cf0b9c52601a",
		"ts": "2026-10-30T22:49:45.464Z",
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
		"liquidityUsd": 7687398.4,
		"hash": "cf0b9c52601a1878070b7fe7b75b72c9eb884e49997a08d32701e9d0244b551f"
	},
	{
		"id": "6f843d0b634a",
		"ts": "2026-10-30T22:49:45.670Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2437311.84,
		"hash": "6f843d0b634a0b9600787ab0c0aacdd054cf6e2d305d79a4021e48e567790e2d"
	},
	{
		"id": "feac6da3e32d",
		"ts": "2026-10-30T22:49:45.868Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3200638.46,
		"hash": "feac6da3e32dbba34bf3901b5880187588747e45535eaf33b737ffc9a62dfde6"
	},
	{
		"id": "bf0388211a16",
		"ts": "2026-10-30T18:57:29.862Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 149949640.95,
		"hash": "bf0388211a1678e5dcfe4d94936c66b132e66b3a84e968a190f9439a39bbd146"
	},
	{
		"id": "c0b6842cff2d",
		"ts": "2026-10-30T18:57:30.135Z",
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
		"liquidityUsd": 15825958.83,
		"hash": "c0b6842cff2d8a4365405f2acca8585dbe2edb4eb45ec0f71f869d2bbc66b136"
	},
	{
		"id": "58571800cbb3",
		"ts": "2026-10-30T18:57:30.398Z",
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
		"liquidityUsd": 245548.64,
		"hash": "58571800cbb3bcb9bf74e7b9b904697abc44266fc6b99abd0bfb2028be94795c"
	},
	{
		"id": "77d4d3a05a16",
		"ts": "2026-10-30T18:57:30.622Z",
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
		"liquidityUsd": 5838277.95,
		"hash": "77d4d3a05a166e0ca8c5cc2f25e47d928adac2d6074b7b09b2bff5e2e3619190"
	},
	{
		"id": "ee31341a5c70",
		"ts": "2026-10-30T18:57:30.840Z",
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
		"liquidityUsd": 732633.97,
		"hash": "ee31341a5c7067cf8e0511283923ecc0e90cbcf0f965374f6e944d55a00fc5be"
	},
	{
		"id": "091f7744b9e5",
		"ts": "2026-10-30T18:57:31.109Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1047953.48,
		"hash": "091f7744b9e58d7b5a4a5f08f46bd1a49fb234c893cb44d931b320fc0169b9ee"
	},
	{
		"id": "312874ccbf12",
		"ts": "2026-10-30T18:57:31.358Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5838277.95,
		"hash": "312874ccbf122ac15f6f9dddfecc4ea0ea8fe2361ce1ebb4a1b4d66649f7fa96"
	},
	{
		"id": "4f01310a712a",
		"ts": "2026-10-30T18:57:31.582Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 982734.46,
		"hash": "4f01310a712adcf4cfbd59d7afa63575a502e9bac2048b386f8c07f5a369d20a"
	},
	{
		"id": "e214db328cae",
		"ts": "2026-10-30T18:57:31.816Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 288393.94,
		"hash": "e214db328cae3e59e24ca818b8eadc6c80ff70318f59a3376dac951bb70a0503"
	},
	{
		"id": "8790954e25d0",
		"ts": "2026-10-30T18:57:32.085Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1013165.06,
		"hash": "8790954e25d0a06383ba0df62a078f86fc656eac23414a2c77c11df68f1abf0a"
	},
	{
		"id": "82d2cd522b53",
		"ts": "2026-10-30T18:57:32.339Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2434044,
		"hash": "82d2cd522b53f141d19d371f39a339ff93df17677ef3bf2bbe8c6a9243d58054"
	},
	{
		"id": "e4a29762f4e1",
		"ts": "2026-10-30T18:57:32.550Z",
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
		"liquidityUsd": 1709028.03,
		"hash": "e4a29762f4e1e235f921ebb1663d3bcfd29567bef0f9932c11a014eb81b63f04"
	},
	{
		"id": "275bfdb2a691",
		"ts": "2026-10-30T18:57:32.788Z",
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
		"liquidityUsd": 2870982.71,
		"hash": "275bfdb2a691246ca634e959b55299f350b2d3ca10c8981581bbe76b4a15c6ef"
	},
	{
		"id": "a02711e0ab98",
		"ts": "2026-10-30T18:57:33.057Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56703.14,
		"hash": "a02711e0ab98ab5d59ee9ee93de445af28c6ba04323bb8486c0ac0163b4c9868"
	},
	{
		"id": "5cee6df9b02e",
		"ts": "2026-10-30T18:57:33.294Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 172770.43,
		"hash": "5cee6df9b02e20823ec0747fbd34678912dbe41a4159d96882bf66f14c37d5e9"
	},
	{
		"id": "af337fe2a658",
		"ts": "2026-10-30T18:57:33.513Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1749183.43,
		"hash": "af337fe2a658e41954b347ad55c319a66546d1ed226e4c562bb3cc3d719bf92f"
	},
	{
		"id": "98710a4527fa",
		"ts": "2026-10-30T18:57:33.737Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3528643.93,
		"hash": "98710a4527fa0625e413d9c01625d552b2ca4e42bf5b70ceb52019db20eb30c9"
	},
	{
		"id": "d2b1712713a5",
		"ts": "2026-10-30T18:57:33.946Z",
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
		"liquidityUsd": 208909.44,
		"hash": "d2b1712713a52d7999e7106878ef63304e72d1f2aae552f7c09dd77b0e230990"
	},
	{
		"id": "1af071f3168f",
		"ts": "2026-10-30T18:57:34.159Z",
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
		"liquidityUsd": 7641325.54,
		"hash": "1af071f3168f318e363b3a6c03fa11a0823dd050e6cbee7c0b603a45d3d5b80d"
	},
	{
		"id": "8450c366e34e",
		"ts": "2026-10-30T13:47:24.743Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 149491927.29,
		"hash": "8450c366e34e68025d77fb6f5d1f4d68a96cc0a3ca37b04fa2044c9af37df0c6"
	},
	{
		"id": "8c40b7843837",
		"ts": "2026-10-30T13:47:24.953Z",
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
		"liquidityUsd": 16020239.28,
		"hash": "8c40b7843837a6666da239f500554f317c483d61454a897c12aa080f4ffd2a3d"
	},
	{
		"id": "90d47ab1177c",
		"ts": "2026-10-30T13:47:25.198Z",
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
		"liquidityUsd": 242131.39,
		"hash": "90d47ab1177c5574501b403702ce0b7e1b9e8e500c09ded0d5c3f82078608507"
	},
	{
		"id": "874fe4a7c593",
		"ts": "2026-10-30T13:47:25.410Z",
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
		"liquidityUsd": 6050133.94,
		"hash": "874fe4a7c593e19f19364092a6d6e261350ed91fa35e5d4a2bdbc3d58c7bea92"
	},
	{
		"id": "6b3c2d41367a",
		"ts": "2026-10-30T13:47:25.654Z",
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
		"liquidityUsd": 729137.39,
		"hash": "6b3c2d41367a4c60c39a6e55b1de7e6985e2eece2def69be2ec9322c7b4f24cb"
	},
	{
		"id": "8eb73a5ebe60",
		"ts": "2026-10-30T13:47:25.866Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1046845.69,
		"hash": "8eb73a5ebe60ec7f337763ea675506ab836a0f41ecc86cfe1d3da1267889f92a"
	},
	{
		"id": "c669a4e84732",
		"ts": "2026-10-30T13:47:26.116Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6050133.94,
		"hash": "c669a4e84732e9b499c1a980b4e608e204fd43dca739807d995e9f518065b8fc"
	},
	{
		"id": "71360c5a7e0e",
		"ts": "2026-10-30T13:47:26.327Z",
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
		"liquidityUsd": 1900428.55,
		"hash": "71360c5a7e0e153e65d6da9cbcf636b6c29a8c8628c98af3652e6c3657d63f62"
	},
	{
		"id": "5e648d7d3c49",
		"ts": "2026-10-30T13:47:26.535Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 305467.91,
		"hash": "5e648d7d3c49cb920cae1cac94cf556323c8c7e2e96956702464686bebdbd3a8"
	},
	{
		"id": "b0ce6d38fa85",
		"ts": "2026-10-30T13:47:26.763Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2435621.7,
		"hash": "b0ce6d38fa8536a98b161e0cea29d01bf70a8af712c6d3fe018385e02513a185"
	},
	{
		"id": "0cd30a098910",
		"ts": "2026-10-30T13:47:26.964Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 995829.35,
		"hash": "0cd30a09891056a290da01b94b473b1fc88d0cf3df8675b86c708008018d5f5c"
	},
	{
		"id": "5c46c630f960",
		"ts": "2026-10-30T13:47:27.148Z",
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
		"liquidityUsd": 1773035.1,
		"hash": "5c46c630f960af2f12941fe0cfbae91ccbcfbbe12d59ae6f079e8ef60bf08d5b"
	},
	{
		"id": "f7a41b5e127e",
		"ts": "2026-10-30T13:47:27.356Z",
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
		"liquidityUsd": 2860735.87,
		"hash": "f7a41b5e127e4554f7443fe7e5e905ca38f127b6785b641370a8da59d064ef6a"
	},
	{
		"id": "0a8481c1f273",
		"ts": "2026-10-30T13:47:27.563Z",
		"symbol": "toby",
		"token": "0xb8D98a102b0079B69FFbc760C8d857A31653e56e",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 94735.26,
		"hash": "0a8481c1f2731cd0d05c70f078d52c97af7d41830e2dbbba613996c69a7ebac4"
	},
	{
		"id": "80a178997b85",
		"ts": "2026-10-30T13:47:27.765Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55736.77,
		"hash": "80a178997b85a013cb8788cb56ae00a3d9de4b8f5a7f123805f7dd07391170f9"
	},
	{
		"id": "078943469321",
		"ts": "2026-10-30T13:47:27.957Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 141206.56,
		"hash": "07894346932127216fbf2794279078660dbfd584dde6c7611438737105fe9557"
	},
	{
		"id": "7edb65997031",
		"ts": "2026-10-30T13:47:28.142Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3534845.32,
		"hash": "7edb659970316367262a416a5601b8afe889ffe9b37b398c914581fde5e3a1e9"
	},
	{
		"id": "2e0de2b3df7a",
		"ts": "2026-10-30T13:47:28.336Z",
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
		"liquidityUsd": 197653.52,
		"hash": "2e0de2b3df7a83a3d798c8f51b1a76fa0019cd693d10881cd5605fc91e7d9888"
	},
	{
		"id": "6d7ded5f4843",
		"ts": "2026-10-30T13:47:28.546Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1693659.95,
		"hash": "6d7ded5f4843c1ceefde34edf54852eec613a8e03365318abc627f0db37d016d"
	},
	{
		"id": "41e001367b89",
		"ts": "2026-10-30T06:44:26.176Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 149792480.44,
		"hash": "41e001367b8934bbaf386aa2020798cad89e8c670883ec0b27efacec7b0fb32f"
	},
	{
		"id": "09b1b0aa4396",
		"ts": "2026-10-30T06:44:26.914Z",
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
		"liquidityUsd": 16217174.25,
		"hash": "09b1b0aa4396236d9e62c9e8314b68cad4ea3c57c437a01d4c44be2983569c20"
	},
	{
		"id": "2021c5ab6f09",
		"ts": "2026-10-30T06:44:27.182Z",
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
		"liquidityUsd": 247320.18,
		"hash": "2021c5ab6f0912e24b2b0b0aea477ba4f74340bd892f7423070554b87feb1304"
	},
	{
		"id": "9d7f75812bb9",
		"ts": "2026-10-30T06:44:27.466Z",
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
		"liquidityUsd": 6106727.68,
		"hash": "9d7f75812bb9286e0daa546f14994689a84b57cc2cf1ffb6ebba993c23065849"
	},
	{
		"id": "1883e9d8a14c",
		"ts": "2026-10-30T06:44:27.732Z",
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
		"liquidityUsd": 734720.37,
		"hash": "1883e9d8a14ceed00a14c48f2c4140c6999faa672ab074c59a4b4b2d4f8b21a6"
	},
	{
		"id": "cf968bddd525",
		"ts": "2026-10-30T06:44:28.004Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1058177.65,
		"hash": "cf968bddd525d9cad838fb064c51d08b50518c1a3685a07b866f166df195f030"
	},
	{
		"id": "692665d018b4",
		"ts": "2026-10-30T06:44:28.272Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6106727.68,
		"hash": "692665d018b4ed9118475fc99401f1a7fb57cfc23da0c485a95f1ffb16d5cc9d"
	},
	{
		"id": "ffd65718317a",
		"ts": "2026-10-30T06:44:28.539Z",
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
		"liquidityUsd": 1742435.32,
		"hash": "ffd65718317a468be2628e4c72eb79bf7daf57e6c76acc34d597a0411f7bde93"
	},
	{
		"id": "47c920a7e378",
		"ts": "2026-10-30T06:44:28.805Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 312380.87,
		"hash": "47c920a7e3782a3cd0948655dafdb7c9b698c0f931b74be0b799a4370aadf665"
	},
	{
		"id": "a08150e7f053",
		"ts": "2026-10-30T06:44:29.075Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2434660.11,
		"hash": "a08150e7f0532172af32d95a3653ae2dcf83f3d4e7e9aba98456a3f0a71b5f51"
	},
	{
		"id": "87e4a0bbf63c",
		"ts": "2026-10-30T06:44:29.327Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1003110.02,
		"hash": "87e4a0bbf63c0ce582e70cbfebbcd46296b03c7b49548b013d0a5e321c2c5569"
	},
	{
		"id": "6b6c1ec23997",
		"ts": "2026-10-30T06:44:29.581Z",
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
		"liquidityUsd": 2890064.31,
		"hash": "6b6c1ec239974f24a636f2e4133756d270b900c36463cf0fed3d4e9dde1f5f79"
	},
	{
		"id": "d83c3b47b5bd",
		"ts": "2026-10-30T06:44:29.843Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1637741.08,
		"hash": "d83c3b47b5bd72f6cca900b992239e1f2b2d889e7cdfd0bec2723610e3f686e2"
	},
	{
		"id": "619c43e6cc0a",
		"ts": "2026-10-30T06:44:30.092Z",
		"symbol": "toby",
		"token": "0xb8D98a102b0079B69FFbc760C8d857A31653e56e",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 100119.43,
		"hash": "619c43e6cc0a482fa3059142149b428ad6bc1a6e3cc0abb20032341e8a4bc0d2"
	},
	{
		"id": "37d0f9b4b0b9",
		"ts": "2026-10-30T06:44:30.342Z",
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
		"liquidityUsd": 1771220.14,
		"hash": "37d0f9b4b0b91f0f05a954f1588eba67597b1c13cde06630de83dae68c5fd33a"
	},
	{
		"id": "af65c66a04a3",
		"ts": "2026-10-30T06:44:30.595Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3596872.95,
		"hash": "af65c66a04a308a9ca1cbb15b040f2ea8456ea1496f09af65d21d68222b69b75"
	},
	{
		"id": "8b417cd114ca",
		"ts": "2026-10-30T06:44:30.847Z",
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
		"liquidityUsd": 7964585.99,
		"hash": "8b417cd114ca58242d69e95dd9f5fad11307d99ea5bee8def77dda2679854c5d"
	},
	{
		"id": "1a2285fed4a1",
		"ts": "2026-10-30T06:44:31.096Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149963.14,
		"hash": "1a2285fed4a14a2b4bd729fab331319521d7a7c5201503ea56e0c13bfb1e7213"
	},
	{
		"id": "c1c7b8bdfec5",
		"ts": "2026-10-30T06:44:31.345Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 252114.54,
		"hash": "c1c7b8bdfec5cc9f0888a3c19220a6e58f4f8a8228f440d74c382f7fc3882a60"
	},
	{
		"id": "f54e72a692a4",
		"ts": "2026-10-30T00:33:41.071Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 150772095.56,
		"hash": "f54e72a692a402d1051daff9f88095f411e8184eb81467a05978407d6de944ce"
	},
	{
		"id": "8b7c532b3e51",
		"ts": "2026-10-30T00:33:41.305Z",
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
		"liquidityUsd": 15758513.65,
		"hash": "8b7c532b3e51608f84496a90eb32f64a2d2e39ad725761d1d25353aa198c49ea"
	},
	{
		"id": "ef6580d6dddd",
		"ts": "2026-10-30T00:33:41.547Z",
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
		"liquidityUsd": 242885.54,
		"hash": "ef6580d6ddddb7c1df85ce80845dd0a624970fe226d6e1886fc22767163ae161"
	},
	{
		"id": "4f26e18f476b",
		"ts": "2026-10-30T00:33:41.763Z",
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
		"liquidityUsd": 6028668.92,
		"hash": "4f26e18f476bb55f82a96fda5fb5b4898794b2d887690fbfe49c7d5299644e8f"
	},
	{
		"id": "6a25936fb495",
		"ts": "2026-10-30T00:33:41.983Z",
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
		"liquidityUsd": 1155370.03,
		"hash": "6a25936fb495798960d338b4bede159f04a3011d8c00b3a0849b4ed6e9e350a0"
	},
	{
		"id": "7f018ae5ae5b",
		"ts": "2026-10-30T00:33:42.200Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1024273.76,
		"hash": "7f018ae5ae5bf7a1d288e3914c6d4430bbf1570a9548e6b19b0fc3c45a3d5270"
	},
	{
		"id": "4d2038ee8436",
		"ts": "2026-10-30T00:33:42.417Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6023845.55,
		"hash": "4d2038ee8436640110dee3c076f3b92757d1eb0d76e84bd39ea8acff3d50d248"
	},
	{
		"id": "fa1ef726bad3",
		"ts": "2026-10-30T00:33:42.635Z",
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
		"liquidityUsd": 1773962.68,
		"hash": "fa1ef726bad3e0e2ee5c1c2aefe49516e1f640ac7f90d04a92f1e8f0d9eda328"
	},
	{
		"id": "6e8dbfea1b56",
		"ts": "2026-10-30T00:33:42.852Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 333646.42,
		"hash": "6e8dbfea1b5665e447497a8f85b328e5e6ba828318ed708d9c0162ac290eeed3"
	},
	{
		"id": "1e45af878587",
		"ts": "2026-10-30T00:33:43.089Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2439895.44,
		"hash": "1e45af878587416c72735b245aae30d4ab886acc9ccd1e9d5874f1f60a47a188"
	},
	{
		"id": "05a69941e8ca",
		"ts": "2026-10-30T00:33:43.283Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 951256.5,
		"hash": "05a69941e8ca0db82fa8677e1f9d4348fc23f8aa878008a1daa5cd1435e61283"
	},
	{
		"id": "55f316a4feb7",
		"ts": "2026-10-30T00:33:43.522Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1610746.43,
		"hash": "55f316a4feb77899f85b7600730fbce639ebf794e41ba71d724cc2591689b6b5"
	},
	{
		"id": "99d6b8ab8ede",
		"ts": "2026-10-30T00:33:43.751Z",
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
		"liquidityUsd": 2705396.21,
		"hash": "99d6b8ab8edeeb5ccbb503d6b25b9a5ed8f4fbe586728703503c1eb7b4289244"
	},
	{
		"id": "89397c2a8217",
		"ts": "2026-10-30T00:33:43.946Z",
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
		"liquidityUsd": 1759951.48,
		"hash": "89397c2a821724155862717f8c84f3f8fe36c8d57091bec0935d2938a8144a8e"
	},
	{
		"id": "e7bc2d274f29",
		"ts": "2026-10-30T00:33:44.224Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55845.94,
		"hash": "e7bc2d274f29045fd0bed4fd4750e0312b619217979553aba10f21b1ada36da0"
	},
	{
		"id": "850680d0a429",
		"ts": "2026-10-30T00:33:44.444Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3490566.39,
		"hash": "850680d0a4293fb4a13e737f6dc4f1dfd0bc01da8274220db152adc4da5ae22c"
	},
	{
		"id": "20b3ac5f9dc2",
		"ts": "2026-10-30T00:33:44.821Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246940.71,
		"hash": "20b3ac5f9dc250d7922fcc5647ff8d19ce0f896c313ba3a3bf49eaf71cdcea12"
	},
	{
		"id": "6930586a173b",
		"ts": "2026-10-30T00:33:45.021Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 132366.35,
		"hash": "6930586a173b146d02d78a773c684394b8732adc6b25f92e92016d6549d72216"
	},
	{
		"id": "658c2d55f310",
		"ts": "2026-10-30T00:33:45.242Z",
		"symbol": "toby",
		"token": "0xb8D98a102b0079B69FFbc760C8d857A31653e56e",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 93141.86,
		"hash": "658c2d55f3105d64c92c1942cc101f05b8ff7482a96fad2b315435607d0fc022"
	},
	{
		"id": "48a54dc4d34e",
		"ts": "2026-10-29T20:10:48.351Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 156971313.67,
		"hash": "48a54dc4d34e40228ec25180c56e2d2ae3a77c21764882b9695412b6b8f065d2"
	},
	{
		"id": "008ed600e401",
		"ts": "2026-10-29T20:10:49.042Z",
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
		"liquidityUsd": 16323185.55,
		"hash": "008ed600e40180d96acf415598af838381560e91e2d65a30ca993eb3ef5c6f29"
	},
	{
		"id": "ca987087353d",
		"ts": "2026-10-29T20:10:49.311Z",
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
		"liquidityUsd": 256152.29,
		"hash": "ca987087353d8d6ec66e7479141224938edc2c966f8220759edd34cd7c0fb1f3"
	},
	{
		"id": "d69170d188fb",
		"ts": "2026-10-29T20:10:49.593Z",
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
		"liquidityUsd": 6308807.42,
		"hash": "d69170d188fb4aeab64a7d8b7367bac4eccd450d8699c612e18f623d23c17677"
	},
	{
		"id": "ef4a3bcb210f",
		"ts": "2026-10-29T20:10:49.850Z",
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
		"liquidityUsd": 1252943.78,
		"hash": "ef4a3bcb210f3f6dc814c3f714d8f42dedfdea6de6696648d9b605c0dc1e12cc"
	},
	{
		"id": "aa4356a26698",
		"ts": "2026-10-29T20:10:50.107Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1096941.13,
		"hash": "aa4356a2669855f645baa09bd43a28c116837d2f5cf5e4f556640f7a7571739f"
	},
	{
		"id": "0731548d73c9",
		"ts": "2026-10-29T20:10:50.364Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6308807.42,
		"hash": "0731548d73c9b208955d8bcc6d4b7e530789fbd50c891ff31142f13940674250"
	},
	{
		"id": "686c6f03b8ae",
		"ts": "2026-10-29T20:10:50.654Z",
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
		"liquidityUsd": 2241167.11,
		"hash": "686c6f03b8aeef200f5c65c23e64c57e2707e0cfbe6e237d086cc3944e4a0e14"
	},
	{
		"id": "8b3150d3af15",
		"ts": "2026-10-29T20:10:50.914Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 379132.01,
		"hash": "8b3150d3af1596e15348fb819232304a3a4365cac67027373c448e2307236ca8"
	},
	{
		"id": "9b579c1cafbb",
		"ts": "2026-10-29T20:10:51.177Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2438183.5,
		"hash": "9b579c1cafbbb7940001cc09a7697964bbab1b0087f54fcaab73450ccd99c93c"
	},
	{
		"id": "73759168d63b",
		"ts": "2026-10-29T20:10:51.415Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1514366.99,
		"hash": "73759168d63b16c7c6d370a5b05e48e58dc3d97b4ca91e27ee7e4f95014b2860"
	},
	{
		"id": "864cb84a7c7c",
		"ts": "2026-10-29T20:10:51.654Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1057808.81,
		"hash": "864cb84a7c7c0bd59b2c42407612ba842dfbfe859d4e6a624b29f64b021dd966"
	},
	{
		"id": "d890be9a3b07",
		"ts": "2026-10-29T20:10:51.894Z",
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
		"liquidityUsd": 2930805.72,
		"hash": "d890be9a3b0777773bdd78ebc16d830417c25fbf2977c033120038eae2a767f5"
	},
	{
		"id": "b3947bbb70cd",
		"ts": "2026-10-29T20:10:52.133Z",
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
		"liquidityUsd": 1771560.37,
		"hash": "b3947bbb70cd79f5ee9c27e17c40be467d15239520cb6e3dabbc23db70f6aae7"
	},
	{
		"id": "18709178719d",
		"ts": "2026-10-29T20:10:52.371Z",
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
		"liquidityUsd": 8303114.05,
		"hash": "18709178719d1156e3ce8bf1bff3bcb359c763960b0ee7ecedb4eba9541f4e9d"
	},
	{
		"id": "28fd5af495ce",
		"ts": "2026-10-29T20:10:52.607Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 252630.15,
		"hash": "28fd5af495ce5a2d1ca82fd80c12b2dec6d335fa543aaf6fff2385868d6a8dea"
	},
	{
		"id": "d260fbf8a814",
		"ts": "2026-10-29T20:10:52.844Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57420.39,
		"hash": "d260fbf8a8148b4f28eb54c5c7fe6a2a14976481f5449bd22106a5678729bd2c"
	},
	{
		"id": "861ae6c5a2bb",
		"ts": "2026-10-29T20:10:53.081Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3650854.95,
		"hash": "861ae6c5a2bb0a315cc0161f46e8a00477406820c044ef8493df5dd369d6f538"
	},
	{
		"id": "c3dada8e1723",
		"ts": "2026-10-29T20:10:53.318Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 161059.74,
		"hash": "c3dada8e1723d927ea99dd74245dc38c812c11999f03ab6e9c2ef1a9cc5c7165"
	},
	{
		"id": "1070ec3c7eb3",
		"ts": "2026-10-29T14:59:53.543Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157988094.02,
		"hash": "1070ec3c7eb30338bf4ee912a4973e0ca564b7dd80416862a8ff74fc10eb7a4c"
	},
	{
		"id": "49873e28b82a",
		"ts": "2026-10-29T14:59:53.907Z",
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
		"liquidityUsd": 16553877.56,
		"hash": "49873e28b82a3c3ff3cab0e449f9c611108895e4612806b695d0a2af4ccd251c"
	},
	{
		"id": "d4da10a92b3d",
		"ts": "2026-10-29T14:59:54.148Z",
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
		"liquidityUsd": 258888.33,
		"hash": "d4da10a92b3db1140e91333a46c64535e83a8d6f29f9d6f7652bc3eb9f543786"
	},
	{
		"id": "2eb6e3c4a7ad",
		"ts": "2026-10-29T14:59:54.368Z",
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
		"liquidityUsd": 6529723.39,
		"hash": "2eb6e3c4a7add8099e1f20dd14fbaf72d881507af804fad5786f01c85f41cc2c"
	},
	{
		"id": "329325eeaba9",
		"ts": "2026-10-29T14:59:54.593Z",
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
		"liquidityUsd": 1288622.1,
		"hash": "329325eeaba92e332236f3970caf0bb9348b6f32ac2e6479498c8d1a24aa8e7c"
	},
	{
		"id": "5ad1a67c796f",
		"ts": "2026-10-29T14:59:54.829Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1113094.41,
		"hash": "5ad1a67c796fca47f482485671d790b5bfbc87f6d57222b1aaaca318ac074750"
	},
	{
		"id": "a346b64734d6",
		"ts": "2026-10-29T14:59:55.032Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6529723.39,
		"hash": "a346b64734d6ac02577c8b1750ab2a94aa4306de69c8256c796b068594ca4d91"
	},
	{
		"id": "363d852cca97",
		"ts": "2026-10-29T14:59:55.240Z",
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
		"liquidityUsd": 2180209.18,
		"hash": "363d852cca978ff704aec9d0e345b18cadf7ccc05996d130236ac2f32ca986ce"
	},
	{
		"id": "6113b43e71fe",
		"ts": "2026-10-29T14:59:55.500Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2443855.02,
		"hash": "6113b43e71fe14d0d6f546a21a527797a8fa77a2fee2339411bb207c915cc0f6"
	},
	{
		"id": "82566f461200",
		"ts": "2026-10-29T14:59:55.714Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1105870.52,
		"hash": "82566f4612006091c2e998c0e2f84140e89d57cb91e5651e67584f03378b7483"
	},
	{
		"id": "916fa3f13afc",
		"ts": "2026-10-29T14:59:55.917Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1417432.69,
		"hash": "916fa3f13afc26f0f4bdb35f3edd8160d1ea27f69779095b12d24d42506595d8"
	},
	{
		"id": "33204cb2530f",
		"ts": "2026-10-29T14:59:56.126Z",
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
		"liquidityUsd": 8339979.8,
		"hash": "33204cb2530f6460d7ef7556ddb77006d32651d32d66626e94de5221f7b895c3"
	},
	{
		"id": "6f9922855819",
		"ts": "2026-10-29T14:59:56.326Z",
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
		"liquidityUsd": 1788884.04,
		"hash": "6f9922855819e494dd6cb995cb5ea37480313870d8c82ef9a952e775ea5de3fa"
	},
	{
		"id": "1397f12822e3",
		"ts": "2026-10-29T14:59:56.544Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 275084.02,
		"hash": "1397f12822e33d3c8dd436888b154c772f02c0c75d5cc6eb9cae3fb6caf65450"
	},
	{
		"id": "f41e0cf7c677",
		"ts": "2026-10-29T14:59:56.752Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 145494.66,
		"hash": "f41e0cf7c677aabd53eeaf74db1c2a340f6850df0e78c93a9d6dcecc997f7e07"
	},
	{
		"id": "56a69e02f450",
		"ts": "2026-10-29T14:59:56.961Z",
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
		"liquidityUsd": 3028079.88,
		"hash": "56a69e02f4507ba9dda829c5a9befb82c10908c81f13588c77e6edd1dfae1bd4"
	},
	{
		"id": "14fc59237eec",
		"ts": "2026-10-29T14:59:57.163Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3702410.5,
		"hash": "14fc59237eece3797fdd08efbb08b0aa30038187b4ace3cf7e7d5e1af8752024"
	},
	{
		"id": "76d157dc1732",
		"ts": "2026-10-29T14:59:57.406Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4233246.73,
		"hash": "76d157dc173237a3bc23b9a33bc651dafa3a46cb6710a096b709d45423bc4fd1"
	},
	{
		"id": "9818b6aca205",
		"ts": "2026-10-29T14:59:57.605Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1782236.93,
		"hash": "9818b6aca205aedb29216e3e6211ff4b6a276d0ecb15cca7a82bc019aa09c814"
	},
	{
		"id": "0dbdfaa38960",
		"ts": "2026-10-29T07:57:24.128Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 156627381.65,
		"hash": "0dbdfaa3896045f5768fc2c4c69dd930d3a9d04e5aa9825958b7074311ceece4"
	},
	{
		"id": "f0b332e161f8",
		"ts": "2026-10-29T07:57:24.398Z",
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
		"liquidityUsd": 16296492.05,
		"hash": "f0b332e161f820462476feb246f1410b1026e12fdefc2716cdba43d1bb70db63"
	},
	{
		"id": "933e154c093d",
		"ts": "2026-10-29T07:57:24.617Z",
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
		"liquidityUsd": 255457.87,
		"hash": "933e154c093df108288c064a9173178447c52473b8b8520d35553396eee1d2b7"
	},
	{
		"id": "8abc1f495e56",
		"ts": "2026-10-29T07:57:24.834Z",
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
		"liquidityUsd": 6565809.39,
		"hash": "8abc1f495e568df3411c59b6d3f4322c9e8a7641bb0a218faa4af23c91983c71"
	},
	{
		"id": "dfb2d4b98384",
		"ts": "2026-10-29T07:57:25.047Z",
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
		"liquidityUsd": 1263000.01,
		"hash": "dfb2d4b98384a1d2118ed05f0bb1651a72a24690d47d76d4035df5b9fa84b3ab"
	},
	{
		"id": "fbfd384e8a9b",
		"ts": "2026-10-29T07:57:25.268Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1094191.87,
		"hash": "fbfd384e8a9bad15ec7a13c662d8c4306ebf660a41c9076ed35fc9dc67e04efb"
	},
	{
		"id": "e075c05390ac",
		"ts": "2026-10-29T07:57:25.485Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6565809.39,
		"hash": "e075c05390ac347cde3fb66a76586971e02517af9350a612073962d8bcc5a6d4"
	},
	{
		"id": "c16595e792e5",
		"ts": "2026-10-29T07:57:25.701Z",
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
		"liquidityUsd": 1807860.91,
		"hash": "c16595e792e58b2ae0105ec4949a81b79a9196a6be9e82a6872a867494c989cb"
	},
	{
		"id": "bc5511246530",
		"ts": "2026-10-29T07:57:25.900Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2437793.28,
		"hash": "bc5511246530aa2b11a68433aef6adc118050348521944a35fb4156ad70b634e"
	},
	{
		"id": "8030ee7ab672",
		"ts": "2026-10-29T07:57:26.113Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1086273.69,
		"hash": "8030ee7ab672a03ee770b6af474a71e81b3590173fcf1c950a792567964fb84a"
	}
]
