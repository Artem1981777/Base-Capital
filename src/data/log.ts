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
	"updatedAt": "2026-08-19T16:26:27.319Z",
	"tokensScored": 12265,
	"verdictsIssued": 12265,
	"safe": 10625,
	"risky": 890,
	"likelyRug": 750,
	"ticks": 722
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "702cfb35b61c",
		"ts": "2026-08-19T16:26:21.983Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113119599.07,
		"hash": "702cfb35b61ca074442792405889d1be0a26298b20291fd0832a6560b487d849"
	},
	{
		"id": "ed296a71c385",
		"ts": "2026-08-19T16:26:22.650Z",
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
		"liquidityUsd": 14043706.55,
		"hash": "ed296a71c385991560e2040f57a7da959bd8f51455507ff8a6a1155c9bd6b135"
	},
	{
		"id": "599aeec9af9a",
		"ts": "2026-08-19T16:26:23.060Z",
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
		"liquidityUsd": 805467.21,
		"hash": "599aeec9af9a1f2b1a01321185566c00b96e7d91f71d1ec3f925a30877e12191"
	},
	{
		"id": "92f9df522b90",
		"ts": "2026-08-19T16:26:23.567Z",
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
		"liquidityUsd": 26860048.48,
		"hash": "92f9df522b908832c7733e96e8bb248083469e0276cc16a5a6c89f661ace546f"
	},
	{
		"id": "cc349442f1d4",
		"ts": "2026-08-19T16:26:23.969Z",
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
		"liquidityUsd": 2309298.74,
		"hash": "cc349442f1d45eab2fce746552fc07a91c2f238c66c1fe6af65d0275cdc5e3ea"
	},
	{
		"id": "a71d2de57a11",
		"ts": "2026-08-19T16:26:24.214Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 957441.06,
		"hash": "a71d2de57a118cf3732bf36026ea9038ed1ce364a66319cc9b3504b681aac9af"
	},
	{
		"id": "7bde1ed8be59",
		"ts": "2026-08-19T16:26:24.430Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4118554.79,
		"hash": "7bde1ed8be597d860ac6d5d2d834ff2da78d36a313e7d3413312e1909cab961c"
	},
	{
		"id": "e5e9bb9df5fd",
		"ts": "2026-08-19T16:26:24.679Z",
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
		"liquidityUsd": 1580099.84,
		"hash": "e5e9bb9df5fd9c3eb2422ea519abb8238a737c5bfecc2853f2b30d708f5566f0"
	},
	{
		"id": "e469058d4cd4",
		"ts": "2026-08-19T16:26:24.899Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3011464.75,
		"hash": "e469058d4cd44f8181af6d14a6ff05fe3662a81c0ea82deee52470d7d234411b"
	},
	{
		"id": "54e433ac8d9e",
		"ts": "2026-08-19T16:26:25.355Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 388271.31,
		"hash": "54e433ac8d9e800b227dc9adff9d6f91c178f385aeaa1ebf77e710b8dfa0c368"
	},
	{
		"id": "3376d857e5ee",
		"ts": "2026-08-19T16:26:25.562Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 584926.14,
		"hash": "3376d857e5ee0ec942fdd7f943e6da4c841c24ade3faa2163f683587a26024bd"
	},
	{
		"id": "9b6cbd6a5a8b",
		"ts": "2026-08-19T16:26:25.789Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3730472.64,
		"hash": "9b6cbd6a5a8baefc091bf4e22e3e65f7b752280ad0e8d5c9816175eaa5597af6"
	},
	{
		"id": "ddc05b2b84eb",
		"ts": "2026-08-19T16:26:25.990Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4133504.99,
		"hash": "ddc05b2b84ebe05ce43cbd07b2a48963fab6af4e811c58b2bce7a363e179ecf0"
	},
	{
		"id": "92d376e2ced2",
		"ts": "2026-08-19T16:26:26.220Z",
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
		"liquidityUsd": 526052.98,
		"hash": "92d376e2ced26848d12d541a8324f0d2614016d1a1b87ce0d9a4f19546e05bd0"
	},
	{
		"id": "08556c6216ab",
		"ts": "2026-08-19T16:26:26.425Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10827822.7,
		"hash": "08556c6216ab207475039e8bb3dabe55343334ca8fcd6e164ed056a02de088a9"
	},
	{
		"id": "84a3745a79a4",
		"ts": "2026-08-19T16:26:26.659Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 45297.02,
		"hash": "84a3745a79a4214208e00f8fdd6ea8e4902a2fcaca6aca8024c3d52d0d169f11"
	},
	{
		"id": "2c321302fc19",
		"ts": "2026-08-19T16:26:26.860Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 40103.14,
		"hash": "2c321302fc1947ee8a8818899614efaaebbb4fed6925003277a4c7772ebb4345"
	},
	{
		"id": "ca15227e3f46",
		"ts": "2026-08-19T16:26:27.097Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3175601.76,
		"hash": "ca15227e3f468d51ae2475025ae714c209c92ae0617b5ece1ebdb4fa4920582d"
	},
	{
		"id": "bdde8917c264",
		"ts": "2026-08-19T16:26:27.318Z",
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
		"liquidityUsd": 857036.26,
		"hash": "bdde8917c2647cd494ee46211a27692e9d73272185586c47a9480005cb5d8302"
	},
	{
		"id": "b7f646b620a4",
		"ts": "2026-08-19T15:26:42.019Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113678172.85,
		"hash": "b7f646b620a42b7c4fa021e70cd1ae2249dc8bbce9b4ad9e1c90aa102c804d88"
	},
	{
		"id": "4a0dc580c18f",
		"ts": "2026-08-19T15:26:42.637Z",
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
		"liquidityUsd": 12746117.37,
		"hash": "4a0dc580c18f8f3161369307115507c8bc149f920a41f2ea2064403797bf1dcd"
	},
	{
		"id": "ef0e752cfe88",
		"ts": "2026-08-19T15:26:43.066Z",
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
		"liquidityUsd": 772258.91,
		"hash": "ef0e752cfe88b6b6a5c30557e84e8029b00a1f1aaaa71aae76ee1e634650a859"
	},
	{
		"id": "748bd60e0a29",
		"ts": "2026-08-19T15:26:43.523Z",
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
		"liquidityUsd": 27254881.48,
		"hash": "748bd60e0a29bb4b5290749d4d6d01424afecf4c6f15c64d88b70eaf9493f684"
	},
	{
		"id": "4abc56af6152",
		"ts": "2026-08-19T15:26:43.977Z",
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
		"liquidityUsd": 2278715.8,
		"hash": "4abc56af6152fc564311ed974715558c4860738841de4065bb711f9c7f54a12c"
	},
	{
		"id": "caede6f9548e",
		"ts": "2026-08-19T15:26:44.231Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 908651.99,
		"hash": "caede6f9548ebd1102054a9a71b92e9dbcae0aaa573dcac288ec57f359042e96"
	},
	{
		"id": "42a725b1d78e",
		"ts": "2026-08-19T15:26:44.479Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4379375.42,
		"hash": "42a725b1d78e0da85d4f7aff2f94fd6f263ff3b9faf8cda77f81e8cee541d3f0"
	},
	{
		"id": "06692ac9d6ba",
		"ts": "2026-08-19T15:26:44.889Z",
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
		"liquidityUsd": 1529456.14,
		"hash": "06692ac9d6bab6fa872682cbf7e5d07d1c48383cb611f9f02bbdb4ab4be8e26e"
	},
	{
		"id": "bbbb0fd47708",
		"ts": "2026-08-19T15:26:45.122Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3007418.73,
		"hash": "bbbb0fd477081cff4e1c6f9f5cb134f75c52bc0ba79f731cd246bc9031bf83b8"
	},
	{
		"id": "3cdb8425c0d0",
		"ts": "2026-08-19T15:26:45.579Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 395236.34,
		"hash": "3cdb8425c0d02537a16e5b745cdb120575f7b76bf4393fbc9aef82a1db6507d6"
	},
	{
		"id": "d3fe17a79060",
		"ts": "2026-08-19T15:26:45.805Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 560364.82,
		"hash": "d3fe17a790601c4657039f87aa9a583e5201deb8846cb8735a60b39ce83937e8"
	},
	{
		"id": "458dbf8ed074",
		"ts": "2026-08-19T15:26:46.126Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3705359.85,
		"hash": "458dbf8ed074179739652e9990646d59f3156494ef86e35845ea8bbe0e8b33ab"
	},
	{
		"id": "99c8e35c6331",
		"ts": "2026-08-19T15:26:46.357Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4379375.42,
		"hash": "99c8e35c6331714cebe9a96c7851be701c4bc6b20efb38fadfbc00efdf62edb8"
	},
	{
		"id": "94887b531ab5",
		"ts": "2026-08-19T15:26:46.590Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 34685.65,
		"hash": "94887b531ab5a20204998f260cc8ca82c6c67486c23850f461d2f18e3dd3d491"
	},
	{
		"id": "904a0b17fbc2",
		"ts": "2026-08-19T15:26:46.809Z",
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
		"liquidityUsd": 508952.6,
		"hash": "904a0b17fbc2580523d7a49583c72ac4896d685d856c29787cb00ab161893be6"
	},
	{
		"id": "712cef50246e",
		"ts": "2026-08-19T15:26:47.021Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10691566.58,
		"hash": "712cef50246e1f2575d115624fef34dd45526b862e7674352dcb3b22721fd7b6"
	},
	{
		"id": "2fb283ff63f2",
		"ts": "2026-08-19T15:26:47.329Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 52702.39,
		"hash": "2fb283ff63f27b2907f5ed7d62aade97397ac7046ad03df7d433bac69ff1c667"
	},
	{
		"id": "97669dbafe21",
		"ts": "2026-08-19T15:26:47.545Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3059359.1,
		"hash": "97669dbafe2112ed9b8f9e23664533dde878fd4b43ac4e7b8956e1793d1df0d1"
	},
	{
		"id": "95322ea5c6cc",
		"ts": "2026-08-19T15:26:47.768Z",
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
		"liquidityUsd": 860406.39,
		"hash": "95322ea5c6cc7912f35822c7e8e6e8640ee0b79b973f70740b044a3fd50d92d3"
	},
	{
		"id": "5f55253710f8",
		"ts": "2026-08-19T15:26:48.004Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 608535.79,
		"hash": "5f55253710f8dc02d92a80ebcf5d00c7124f28c2aaea36cb6546ca83256a6302"
	},
	{
		"id": "6e40f46404e0",
		"ts": "2026-08-19T14:28:44.067Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112398952.42,
		"hash": "6e40f46404e0179750f4231e46e90572c084cb257dfffcfd21ab1fc8bab89498"
	},
	{
		"id": "9003d4e27bd7",
		"ts": "2026-08-19T14:28:44.707Z",
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
		"liquidityUsd": 13422088.55,
		"hash": "9003d4e27bd791683cfb883e20f7977b54f6063d819dbd5d3c9a9405018c1a98"
	},
	{
		"id": "c7d797d049bc",
		"ts": "2026-08-19T14:28:45.147Z",
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
		"liquidityUsd": 747453.61,
		"hash": "c7d797d049bc97f5b17cf60fb0f8558296ecf769df463d8145dae63a6fe0339e"
	},
	{
		"id": "350ecf73682f",
		"ts": "2026-08-19T14:28:45.586Z",
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
		"liquidityUsd": 26904357.59,
		"hash": "350ecf73682f2cc3456aca0ffe00b6b63c48b05d81e82196f1c1a83cf14617e1"
	},
	{
		"id": "8e05debc30d0",
		"ts": "2026-08-19T14:28:46.018Z",
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
		"liquidityUsd": 4275345.29,
		"hash": "8e05debc30d034be6c4657cd20207887af9983dcc0c3f5f681e5b8c1be689cb0"
	},
	{
		"id": "725a3b77b85e",
		"ts": "2026-08-19T14:28:46.264Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 909548.8,
		"hash": "725a3b77b85e93ffd87b4260fac1c48d3c7600970792bbef205904d690d8a710"
	},
	{
		"id": "2b5dea9e3338",
		"ts": "2026-08-19T14:28:46.609Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4430844.02,
		"hash": "2b5dea9e333846a1d77034b97d69ebe4bb988dbfb0c9383f4cfc9eb3eac80d58"
	},
	{
		"id": "0d30de64abf3",
		"ts": "2026-08-19T14:28:47.045Z",
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
		"liquidityUsd": 1461277.79,
		"hash": "0d30de64abf325793593cb196253f5c05980ccf78b144be28c9c557aa03307c0"
	},
	{
		"id": "2a570f02483d",
		"ts": "2026-08-19T14:28:47.327Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2921138.79,
		"hash": "2a570f02483d0c386e3d121ab4cbf5fb3f54b2d57cda3dcf817a5aae039cee2b"
	},
	{
		"id": "b9e6bb0bad9b",
		"ts": "2026-08-19T14:28:47.764Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 362020,
		"hash": "b9e6bb0bad9bb85b07683d70a91f67d60a47ee15e3ad8c82f1331da7687a2d82"
	},
	{
		"id": "8958bcfb3dab",
		"ts": "2026-08-19T14:28:47.978Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 538219.43,
		"hash": "8958bcfb3dab7e5c1cf5d08cc623223318ec07c97bca5b4fa8f5ce68d00633b0"
	},
	{
		"id": "97e93562a71e",
		"ts": "2026-08-19T14:28:48.188Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3517915.12,
		"hash": "97e93562a71eb25dafe0d9662225be815f54576faf93e31e8924a5d23d0eade1"
	},
	{
		"id": "33f96b9238aa",
		"ts": "2026-08-19T14:28:48.406Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4430840.83,
		"hash": "33f96b9238aabc8405ad6a0c3e1a4c08bc52e92a9d997f9be7030d35e67bd225"
	},
	{
		"id": "1a630d470be2",
		"ts": "2026-08-19T14:28:48.612Z",
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
		"liquidityUsd": 496729.6,
		"hash": "1a630d470be2cb05430464e57ac77dc4476e55b748fd8ecb223a15f7d1068d35"
	},
	{
		"id": "8a83f9303568",
		"ts": "2026-08-19T14:28:48.827Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 38156.58,
		"hash": "8a83f93035684965f8c08a00c7ce8c72643e77a8d3c86afbc05d60f404c7580e"
	},
	{
		"id": "6efa7a2fa328",
		"ts": "2026-08-19T14:28:49.037Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10341600.43,
		"hash": "6efa7a2fa328b41fd0914b2472a970a0c6d3e795ccc1116cc7cdd6cec9647a5d"
	},
	{
		"id": "56333fcd74d2",
		"ts": "2026-08-19T14:28:49.253Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 52821.7,
		"hash": "56333fcd74d23fd81736d8fe112cccb97d15b9a17a411a28a65c91ac0a4e3aaf"
	},
	{
		"id": "7461cc8a71f3",
		"ts": "2026-08-19T14:28:49.470Z",
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
		"liquidityUsd": 862617.99,
		"hash": "7461cc8a71f3cc44b0241f55df72df2e956bad983e745ce2c3c7cecc6f59928e"
	},
	{
		"id": "1c669d3274a7",
		"ts": "2026-08-19T14:28:49.686Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2937773.84,
		"hash": "1c669d3274a7842eaa8e3d24a0b71727a293f0b6dd03e690b7be48bea14868c6"
	},
	{
		"id": "e83544c5d98a",
		"ts": "2026-08-19T14:28:49.899Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 602156.06,
		"hash": "e83544c5d98a8a4ee1091770ed268202e2bd26d532bcfe7af48c0328f3c70421"
	},
	{
		"id": "ae2024ac4459",
		"ts": "2026-08-19T13:40:20.766Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112175780.73,
		"hash": "ae2024ac4459640016d1a2579967d821b5dd0bba20f04a1e4b0948e7eb5dd2be"
	},
	{
		"id": "0adf7987385f",
		"ts": "2026-08-19T13:40:21.003Z",
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
		"liquidityUsd": 14323466.95,
		"hash": "0adf7987385f99268d0593a469ea0b31f183da228748c78c0365c2b6a67949e1"
	},
	{
		"id": "9a3e069898ac",
		"ts": "2026-08-19T13:40:21.234Z",
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
		"liquidityUsd": 749486.63,
		"hash": "9a3e069898aca07266c581087ff41a04b0529e0679358914462891bd9debc519"
	},
	{
		"id": "3ee7df1daec0",
		"ts": "2026-08-19T13:40:21.461Z",
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
		"liquidityUsd": 26881038.26,
		"hash": "3ee7df1daec08a5cdfc40f64a23777cb1ca1e4d2df12b47cc6d5a4cd38aab73d"
	},
	{
		"id": "7c24415bcc9c",
		"ts": "2026-08-19T13:40:21.701Z",
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
		"liquidityUsd": 4291913.93,
		"hash": "7c24415bcc9c23b572bc88bac690fe54e81aa7926fe06a28d1d537db4faa771f"
	},
	{
		"id": "776734b8730d",
		"ts": "2026-08-19T13:40:21.931Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900564.77,
		"hash": "776734b8730dfb0d0c9c1b1ae43530da55fefc79108f7d0ab347c0b2edf5c956"
	},
	{
		"id": "5d9d6bb2e5ef",
		"ts": "2026-08-19T13:40:22.158Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4307029.84,
		"hash": "5d9d6bb2e5ef3917c420fab92fcb6ad82b6d7f8cbcd93208262b7f37913e70ad"
	},
	{
		"id": "590054aa0704",
		"ts": "2026-08-19T13:40:22.393Z",
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
		"liquidityUsd": 3379579.27,
		"hash": "590054aa07049ae671a4b8a7b71fd5383d57fcea7add8388ae3e432caa60c524"
	},
	{
		"id": "002e3655661d",
		"ts": "2026-08-19T13:40:22.660Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2939347.09,
		"hash": "002e3655661d58abf546b8833374d48f2bffe6a99051a5770b318cbf13d27abe"
	},
	{
		"id": "a67170ed7f49",
		"ts": "2026-08-19T13:40:22.928Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 385802.55,
		"hash": "a67170ed7f49f758354403445079ce51d427f06501ffb5106e54b938cc3c9488"
	},
	{
		"id": "277fa52394c1",
		"ts": "2026-08-19T13:40:23.143Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 540949.7,
		"hash": "277fa52394c196902bd379f1b813b7c3de3b88a0fafc9bc9feb77a99048e60ee"
	},
	{
		"id": "f1d438655c56",
		"ts": "2026-08-19T13:40:23.360Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4308038.48,
		"hash": "f1d438655c56c3d3292f2c6ae9be1adfc23562eb24bfffce1dd03fe673b7bd62"
	},
	{
		"id": "673151fd35cc",
		"ts": "2026-08-19T13:40:23.573Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3491639.21,
		"hash": "673151fd35ccda29c0ab90a4cd412eb3be59552d03b02e9b940b3c632615c1a6"
	},
	{
		"id": "b6b35509d9c7",
		"ts": "2026-08-19T13:40:23.788Z",
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
		"liquidityUsd": 494995.4,
		"hash": "b6b35509d9c76f0ce89e958c9574d88efc07c12b2165cde7bea68215a338a5f5"
	},
	{
		"id": "0ada395095fb",
		"ts": "2026-08-19T13:40:24.001Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 42240.1,
		"hash": "0ada395095fbbea39f0359a90f1e77272535289ddbccb86ded3bf7602961780b"
	},
	{
		"id": "0c01b28df4d6",
		"ts": "2026-08-19T13:40:24.263Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55023.77,
		"hash": "0c01b28df4d64da3f39ec5f304a7f2071e8a0395998613a7beb26422f52fdb02"
	},
	{
		"id": "f39954b47c2a",
		"ts": "2026-08-19T13:40:24.478Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10358256.76,
		"hash": "f39954b47c2a13474ba9d8999481f332fc0c88e8d832a9e42330c6c572b58209"
	},
	{
		"id": "c02c0051130a",
		"ts": "2026-08-19T13:40:24.692Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2937590.32,
		"hash": "c02c0051130ac0a4689f70040275797e7c21965477a0778ee1551be20d7653c0"
	},
	{
		"id": "22c64d642096",
		"ts": "2026-08-19T13:40:24.905Z",
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
		"liquidityUsd": 858047.97,
		"hash": "22c64d642096c59c8ed58cab1c3e871497270c6196608da829c9dfb61fb30f8c"
	},
	{
		"id": "edb16effd9dc",
		"ts": "2026-08-19T12:38:21.238Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111891478.85,
		"hash": "edb16effd9dc36722e90833cef700a1e0d461794b3eb803be6c513e2e472c048"
	},
	{
		"id": "924d9439adc7",
		"ts": "2026-08-19T12:38:21.459Z",
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
		"liquidityUsd": 16952213.22,
		"hash": "924d9439adc78150d905395b9cce83abc94a77eb8cc3035d5d9bfb20fc4a6729"
	},
	{
		"id": "f7c9a6b4d9e5",
		"ts": "2026-08-19T12:38:21.822Z",
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
		"liquidityUsd": 746509.56,
		"hash": "f7c9a6b4d9e5bd3bdc8be1bf4b42bfcc29bd56c718f302fda503247820af0e66"
	},
	{
		"id": "0c9b1f8fef7d",
		"ts": "2026-08-19T12:38:22.026Z",
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
		"liquidityUsd": 26737286.74,
		"hash": "0c9b1f8fef7d91c6278291e57b9a0c589da1cbe2ebe10d1e7d7e1457677a8dbd"
	},
	{
		"id": "fa92cd75470d",
		"ts": "2026-08-19T12:38:22.222Z",
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
		"liquidityUsd": 4260685.37,
		"hash": "fa92cd75470de36c0ed8be4c2c4a1be7f664a4303cd6bf768c2adfa059ac10b5"
	},
	{
		"id": "06801e4892a2",
		"ts": "2026-08-19T12:38:22.432Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900709.99,
		"hash": "06801e4892a26b68eae50e6d0033d52267a733e2fcf2532e4e5a25e728db772c"
	},
	{
		"id": "960052b703cc",
		"ts": "2026-08-19T12:38:22.777Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4363933.87,
		"hash": "960052b703cc66cc4e473853389168109fe61cfba04b14b11ff5b3ca3476c215"
	},
	{
		"id": "b2d71d24c14a",
		"ts": "2026-08-19T12:38:22.985Z",
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
		"liquidityUsd": 3366250.74,
		"hash": "b2d71d24c14a8d8eaf5826c920711ab375aef4db20550e32d759126e86924ef7"
	},
	{
		"id": "73880cec5bc0",
		"ts": "2026-08-19T12:38:23.178Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2961880.42,
		"hash": "73880cec5bc0ca90e841b4e8e6f9611304816d5513a1d5220f8d834a017350a8"
	},
	{
		"id": "90f65070ad0b",
		"ts": "2026-08-19T12:38:23.367Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 392834.42,
		"hash": "90f65070ad0b2bba89fe00afef837c546e4551d873c398f4a392961fbb54796e"
	},
	{
		"id": "4b200a2b632a",
		"ts": "2026-08-19T12:38:23.554Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4371369.6,
		"hash": "4b200a2b632a974002e96e828f1a086d0a706a0d9c8e3182dc444372b6bed9b2"
	},
	{
		"id": "83301ae83baf",
		"ts": "2026-08-19T12:38:23.736Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3586273.13,
		"hash": "83301ae83bafce4ef56002140d0bc0ad321a21b2a07406462248cb4b3cf11860"
	},
	{
		"id": "bb41d777b48e",
		"ts": "2026-08-19T12:38:23.931Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 536820.14,
		"hash": "bb41d777b48e65ed609ebf371c12f58b8fb1664f29e1db8551f3e2c0cbbb3ad0"
	},
	{
		"id": "c849d51a2cfd",
		"ts": "2026-08-19T12:38:25.742Z",
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
		"liquidityUsd": 490483.72,
		"hash": "c849d51a2cfd4fd286a442ca8aa2ef2627b78a5f8c72559cfaf8552fd3d73026"
	},
	{
		"id": "910d21072e02",
		"ts": "2026-08-19T12:38:25.917Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 60840.13,
		"hash": "910d21072e02a5802a50adeef24c5a0828900fcae327c0643ddc502d969569a1"
	},
	{
		"id": "0dc410538dfc",
		"ts": "2026-08-19T12:38:26.099Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 53143.62,
		"hash": "0dc410538dfc15bb509e7611b49cd5a9858f0ccbd52b1a0747a64301a6069e84"
	},
	{
		"id": "29c56c19a007",
		"ts": "2026-08-19T12:38:26.280Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10321516.23,
		"hash": "29c56c19a0073a688de9d2848f9d0119f7660229baf4db74678da6b159fba8db"
	},
	{
		"id": "d9ca9421b72f",
		"ts": "2026-08-19T12:38:26.458Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2931328.94,
		"hash": "d9ca9421b72f742e8dd7ece4c23fe61827e15b46f7d1230990d634728e4f094f"
	},
	{
		"id": "b36326f5dc52",
		"ts": "2026-08-19T12:38:26.643Z",
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
		"liquidityUsd": 865640.23,
		"hash": "b36326f5dc52f97153091c2a9e6a40c2fd450b2b3bd13dbd0908b322d8b3b7fc"
	},
	{
		"id": "ceb1c2871e4f",
		"ts": "2026-08-19T11:20:55.001Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111914402.71,
		"hash": "ceb1c2871e4f1645472c826d01647633b8a908b3152642615d1e8b1454fbca17"
	},
	{
		"id": "e10792ad7c7c",
		"ts": "2026-08-19T11:20:55.666Z",
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
		"liquidityUsd": 16422266.49,
		"hash": "e10792ad7c7c5ba307871de88b741948c9aa3f0d52255eeead0fb84c6a20e941"
	},
	{
		"id": "d69bced9cc02",
		"ts": "2026-08-19T11:20:56.143Z",
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
		"liquidityUsd": 745705.93,
		"hash": "d69bced9cc02b69b321ba00cab70b8b659f4848c2b07c09501739385d3862faf"
	},
	{
		"id": "1354617727ac",
		"ts": "2026-08-19T11:20:56.597Z",
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
		"liquidityUsd": 26761573.85,
		"hash": "1354617727ac067ebb6cf610d57be0cd0ed44d0bbe771394f53c9f9b3a20bb23"
	},
	{
		"id": "765898598263",
		"ts": "2026-08-19T11:20:56.854Z",
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
		"liquidityUsd": 4258054.94,
		"hash": "7658985982636738af07f2e68f5bb89ab612c5ab965fd701f5d374731e16bb65"
	},
	{
		"id": "73466b093a79",
		"ts": "2026-08-19T11:20:57.102Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900709.99,
		"hash": "73466b093a794e5aa95be51da082fc381862ba29e3ee29b5dbdb3060248f80ff"
	},
	{
		"id": "3ce7af43b36e",
		"ts": "2026-08-19T11:20:57.406Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4280417.27,
		"hash": "3ce7af43b36e3965ac573c424777fa7d7294aab272bdc9be063df41c2207aea8"
	},
	{
		"id": "8ec9a09a6a77",
		"ts": "2026-08-19T11:20:57.853Z",
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
		"liquidityUsd": 3361000.95,
		"hash": "8ec9a09a6a7781b5a2452457a1c6f942176582791007b0d2aa043aa9092fa17e"
	},
	{
		"id": "5c26841d4390",
		"ts": "2026-08-19T11:20:58.322Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 396831.82,
		"hash": "5c26841d439006113a50d6fd1d2a728f1ab7ab4e7b7bffe684590e7c5f1e89aa"
	},
	{
		"id": "1616367e3db7",
		"ts": "2026-08-19T11:20:58.570Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2931287.62,
		"hash": "1616367e3db7439fafc529f51357f50729219665adf543f53930d56948427741"
	},
	{
		"id": "ecdb9409500d",
		"ts": "2026-08-19T11:20:58.812Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3555183.47,
		"hash": "ecdb9409500d174467b7298c12ec91734e32de7471ed117aa163de7c13b7423a"
	},
	{
		"id": "2cc381d4649e",
		"ts": "2026-08-19T11:20:59.040Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 545502,
		"hash": "2cc381d4649e90057df77cc35482c69e669909d6cebc26e971c5ebfe6248a2b4"
	},
	{
		"id": "93423afa682d",
		"ts": "2026-08-19T11:20:59.277Z",
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
		"liquidityUsd": 488991.11,
		"hash": "93423afa682d03305de2058ce238ba128f847694370c9198df4d9dc5e5be246a"
	},
	{
		"id": "2e14a3009c8b",
		"ts": "2026-08-19T11:20:59.516Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4280417.27,
		"hash": "2e14a3009c8bc3100b254b8e685534ae939812a1f70000b002a5ff6001a23f7e"
	},
	{
		"id": "7f3f3e433d1c",
		"ts": "2026-08-19T11:20:59.746Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 67725.22,
		"hash": "7f3f3e433d1cad2f01fdc82effa93bbd8f9a274fe23480bd62bf6acc8b6abc02"
	},
	{
		"id": "5af6e2769bf2",
		"ts": "2026-08-19T11:20:59.982Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57406.59,
		"hash": "5af6e2769bf256b5245cd892f7be985cbe1dd8ef23227473ae57d7d7d17ee4f9"
	},
	{
		"id": "a402817100ac",
		"ts": "2026-08-19T11:21:00.323Z",
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
		"liquidityUsd": 10296575.46,
		"hash": "a402817100ac511dc47684db8b8a84905d675d39c9587bf7727b9f1b0f4eecb4"
	},
	{
		"id": "e873ea6d5833",
		"ts": "2026-08-19T11:21:00.673Z",
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
		"liquidityUsd": 2926221.32,
		"hash": "e873ea6d58333c28dd97f6ea9914a7bcfe183d9b74e3d0ac911065ef8c01caf3"
	},
	{
		"id": "4bd8b8e57cda",
		"ts": "2026-08-19T11:21:00.969Z",
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
		"liquidityUsd": 869102.71,
		"hash": "4bd8b8e57cdafe892c114340d3ff3e0b4dbb4f01e14d124f3a7fd8b0b6dd6771"
	},
	{
		"id": "50be8b7c3936",
		"ts": "2026-08-19T10:23:26.313Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111942935.6,
		"hash": "50be8b7c3936a3e4015003bfcdc999be389dbc360ff5cbb6216d12c9d1a3b887"
	},
	{
		"id": "e75a5098a100",
		"ts": "2026-08-19T10:23:26.662Z",
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
		"liquidityUsd": 16902665.97,
		"hash": "e75a5098a100aff0133e6be41835b68e6e730e3513dda06d7974c008e48124eb"
	},
	{
		"id": "390282f33f7a",
		"ts": "2026-08-19T10:23:26.848Z",
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
		"liquidityUsd": 744864.22,
		"hash": "390282f33f7a6d56054a7104ca6ceb149dcb1e2ae9f569a9b46208168ff901f5"
	},
	{
		"id": "a3d686f26914",
		"ts": "2026-08-19T10:23:27.221Z",
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
		"liquidityUsd": 26779012.78,
		"hash": "a3d686f26914d4b60e6d5f4583b4570c10d182a6452f80228a2e6294c56276a4"
	},
	{
		"id": "b26175806a50",
		"ts": "2026-08-19T10:23:27.435Z",
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
		"liquidityUsd": 4247986.16,
		"hash": "b26175806a50ccee7708fad2daac5ea29bfc2a1d0fa5c58440b83bd27c1dcec3"
	},
	{
		"id": "0cf0b91f702e",
		"ts": "2026-08-19T10:23:27.669Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900653.75,
		"hash": "0cf0b91f702ee406f302e039442e6bb9c62fc0b5037782b793d34117f7a0112b"
	},
	{
		"id": "ab168e86bdcc",
		"ts": "2026-08-19T10:23:27.861Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4229992.91,
		"hash": "ab168e86bdcc17dc0979712a02989e8042a2795d6b3e30fa85b832f87978ece3"
	},
	{
		"id": "f265fffaf265",
		"ts": "2026-08-19T10:23:28.053Z",
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
		"liquidityUsd": 3358357.28,
		"hash": "f265fffaf265104cdebbcc547b0552639b011f1136481e96699b5a1ebcc30309"
	},
	{
		"id": "a68fb1d69bd6",
		"ts": "2026-08-19T10:23:28.233Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 395932.32,
		"hash": "a68fb1d69bd6eba916835f08cd098bfa637d312c478b14bae5a8846c28990876"
	},
	{
		"id": "8da30168d1e2",
		"ts": "2026-08-19T10:23:28.429Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2965766.86,
		"hash": "8da30168d1e28d440ed20290702c7ff95836f722e5ce42661eaeb53617df4372"
	},
	{
		"id": "30cc33f297e2",
		"ts": "2026-08-19T10:23:28.616Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3543392.34,
		"hash": "30cc33f297e2ae7a199aaf58780e3e9eb524ccac100b7c5927f69d36e0b65242"
	},
	{
		"id": "c0263df73488",
		"ts": "2026-08-19T10:23:28.811Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 546049.53,
		"hash": "c0263df73488f105af74d96dc4aced6284d619f0ff0e0756d867268afe23cda7"
	},
	{
		"id": "64ac93b8c37c",
		"ts": "2026-08-19T10:23:29.006Z",
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
		"liquidityUsd": 489341.34,
		"hash": "64ac93b8c37c04d214efd2ad6a18dff1e6e4e9eee8de37553638e4d5637e8142"
	},
	{
		"id": "e78551a38ffe",
		"ts": "2026-08-19T10:23:29.185Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4229992.91,
		"hash": "e78551a38ffe2bd0d8bd3d5c2c95272fe1076b1af4ab9dceb2242e72b2702b6f"
	},
	{
		"id": "c38caf22915d",
		"ts": "2026-08-19T10:23:29.352Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 81201.44,
		"hash": "c38caf22915d6e25648cd341d5a8b783beb588aa2f0a20ebb05e75d781d56e5c"
	},
	{
		"id": "98e1a72a21d3",
		"ts": "2026-08-19T10:23:29.609Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9939621.56,
		"hash": "98e1a72a21d37699804488b375dc27636191573c0e4a1a042f3ada721810e0e2"
	},
	{
		"id": "5a965fd71cc1",
		"ts": "2026-08-19T10:23:29.797Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57858.46,
		"hash": "5a965fd71cc1ce086dc9b5e8f6aefbd9b00a0d67731dbfdcf9f538c19e1923c9"
	},
	{
		"id": "0a4996190c81",
		"ts": "2026-08-19T10:23:29.987Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2925913.55,
		"hash": "0a4996190c81b19bcdbdb486d7f8acbef568874c2f21d6a0deded08f88af7d90"
	},
	{
		"id": "ad4c3ad29ad5",
		"ts": "2026-08-19T10:23:30.171Z",
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
		"liquidityUsd": 875668.89,
		"hash": "ad4c3ad29ad528fd12fc21b6c0ec0f94e5312f5c3300eff77bb99a9eea61ccd6"
	},
	{
		"id": "887b2699a814",
		"ts": "2026-08-19T09:29:00.350Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111953735.58,
		"hash": "887b2699a8146754ada940187bf71adc1963ae5d5f9d02b175fc74640f294f1b"
	},
	{
		"id": "417e7261b780",
		"ts": "2026-08-19T09:29:00.566Z",
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
		"liquidityUsd": 16292459.31,
		"hash": "417e7261b78013fc010068ff85d79496ba2e3a2002811c0305f1f43fe9e7ddf9"
	},
	{
		"id": "e9cae17ce6b8",
		"ts": "2026-08-19T09:29:00.928Z",
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
		"liquidityUsd": 744493.06,
		"hash": "e9cae17ce6b8d38b97bc6eb69aff962ee8e654f65742981fafd76a423cccb0bc"
	},
	{
		"id": "3ca90c60af61",
		"ts": "2026-08-19T09:29:01.139Z",
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
		"liquidityUsd": 26787778.8,
		"hash": "3ca90c60af6182c8c493c972293a2d8dc1c23c5e22786f912d1e84c27bd96654"
	},
	{
		"id": "558a6c5d2581",
		"ts": "2026-08-19T09:29:01.344Z",
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
		"liquidityUsd": 4255266.84,
		"hash": "558a6c5d2581668c513032dc944c54e6417e2e8652cd364979d85cf146078bab"
	},
	{
		"id": "b86c654c447f",
		"ts": "2026-08-19T09:29:01.653Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900653.75,
		"hash": "b86c654c447f2b4f96a77c1cba02ea8aec8e33b18a2b3f6b2ac75aea84cf45ad"
	},
	{
		"id": "e099eb141bb5",
		"ts": "2026-08-19T09:29:01.924Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4373559.1,
		"hash": "e099eb141bb566fcc890a3ee740979d45eb5d2320fd9827afe42554d00b95afd"
	},
	{
		"id": "57592d991f23",
		"ts": "2026-08-19T09:29:02.123Z",
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
		"liquidityUsd": 3364107.05,
		"hash": "57592d991f23757e62cd045148c2c4fc9def40c4ab07b4644d7ee1ff5db5e397"
	},
	{
		"id": "062dac5ad23f",
		"ts": "2026-08-19T09:29:02.390Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 412389.73,
		"hash": "062dac5ad23f0d2265afdbbcad6c15da5e87ffd406b342af37e192741a214c69"
	},
	{
		"id": "fcb93740b54e",
		"ts": "2026-08-19T09:29:02.583Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2970343.81,
		"hash": "fcb93740b54ec4b1fad16a50e263e220c1e6cd98fac43b8c3d20f0ffaefc5c52"
	},
	{
		"id": "debf43d11202",
		"ts": "2026-08-19T09:29:02.769Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3538778.7,
		"hash": "debf43d112023b03c55ddfc1b417cf46e4bbe39f7cb0d6a6683ad65f42ae4fff"
	},
	{
		"id": "0138bdef6226",
		"ts": "2026-08-19T09:29:02.951Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 548421.78,
		"hash": "0138bdef6226598f92ef4300ed498f642a4468616e5a4709865d8c43c33828c4"
	},
	{
		"id": "13530f440691",
		"ts": "2026-08-19T09:29:03.132Z",
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
		"liquidityUsd": 490716.2,
		"hash": "13530f440691841e76df9abce1e8d6f78d12907cc3f85a374991a3101b8474f6"
	},
	{
		"id": "0dabc7728bce",
		"ts": "2026-08-19T09:29:03.316Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4373559.1,
		"hash": "0dabc7728bce7f59172bb20c661f37b9e6aea1503b7bfa2375588dc072130d01"
	},
	{
		"id": "2c5097e745e2",
		"ts": "2026-08-19T09:29:03.501Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77186.16,
		"hash": "2c5097e745e21114dd1a26b5192ef2343cdb984e7baf5987b92d3efd6d7f7ae5"
	},
	{
		"id": "b496113eca04",
		"ts": "2026-08-19T09:29:03.824Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9954897.86,
		"hash": "b496113eca0443070837de46ca7e9d18ad4121b17cf23e64195eae849cfc6bf1"
	},
	{
		"id": "b956e5de96f6",
		"ts": "2026-08-19T09:29:04.011Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56412.82,
		"hash": "b956e5de96f6190c66a9840665cf096e2c981968a021dd63f30a72213086db4a"
	},
	{
		"id": "1e7858f5cc5b",
		"ts": "2026-08-19T09:29:04.198Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2917110.9,
		"hash": "1e7858f5cc5b177f1b6719f4ddae6ecda8054e59b3c87c6258eb391b96fcdf7a"
	},
	{
		"id": "c9ffa92865c0",
		"ts": "2026-08-19T09:29:04.379Z",
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
		"liquidityUsd": 870767.64,
		"hash": "c9ffa92865c09088e54b54948c61919cc6d0ca546e06b8afd9cf69c18b2d050d"
	},
	{
		"id": "7a233aca3699",
		"ts": "2026-08-19T08:32:31.902Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111749896.56,
		"hash": "7a233aca369962ea16b8fc6d24b89acd316003fddd248ce00c07bb9748af3cc1"
	},
	{
		"id": "a6d44a737499",
		"ts": "2026-08-19T08:32:32.231Z",
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
		"liquidityUsd": 15406896.62,
		"hash": "a6d44a73749922c20b5c4fde4781cc31e921733cb4a5ca4a960b5947baa02a4a"
	},
	{
		"id": "801c956db930",
		"ts": "2026-08-19T08:32:32.444Z",
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
		"liquidityUsd": 739045.04,
		"hash": "801c956db93075403c45f6fde9dd0452119cff5541892e1e492674b159cffe70"
	},
	{
		"id": "2ec045f76377",
		"ts": "2026-08-19T08:32:32.641Z",
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
		"liquidityUsd": 26744906.82,
		"hash": "2ec045f763775d1cac352f13491e7876abc38a45208d499c4e956ae92a355a60"
	},
	{
		"id": "f6e54f16f164",
		"ts": "2026-08-19T08:32:32.824Z",
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
		"liquidityUsd": 4255266.84,
		"hash": "f6e54f16f164309ae41d3a7ec508c276a0dbf8564fc13b6faa2f90210a96ea2f"
	},
	{
		"id": "41bc592c8f87",
		"ts": "2026-08-19T08:32:33.024Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 881490.76,
		"hash": "41bc592c8f870dbb04a913132d1f8ed26565e5b392e953ede8bc1d01e643ae80"
	},
	{
		"id": "9466e38b7da4",
		"ts": "2026-08-19T08:32:33.216Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4205009.84,
		"hash": "9466e38b7da473b61db41c868a47b5d42c15082a79afb19c9591cb2619c8b82a"
	},
	{
		"id": "74e3e050a372",
		"ts": "2026-08-19T08:32:33.430Z",
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
		"liquidityUsd": 3355934.89,
		"hash": "74e3e050a372c8e0631bf5dec72cd066c2356391bbfef569576be4187af0a41e"
	},
	{
		"id": "e867241bf164",
		"ts": "2026-08-19T08:32:33.622Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 380040.43,
		"hash": "e867241bf16489dda50d78cb1c331304b8f3893484f2441e08a4e9912e928125"
	},
	{
		"id": "ef27cd02db0b",
		"ts": "2026-08-19T08:32:33.806Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2910944.22,
		"hash": "ef27cd02db0bcecb4e00a39cea8489b676baa2c3083984d7ab586756e1dbaeba"
	},
	{
		"id": "b75634c058b6",
		"ts": "2026-08-19T08:32:34.006Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3570684.1,
		"hash": "b75634c058b6f5538be7d923538a71b28c04493875a7877284786730905990c3"
	},
	{
		"id": "5ba116bfa0de",
		"ts": "2026-08-19T08:32:34.192Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549175.37,
		"hash": "5ba116bfa0de77333894c5e96fde25c45855e4e973a0ba6b255294971746ed60"
	},
	{
		"id": "3fa2b32f7e37",
		"ts": "2026-08-19T08:32:34.390Z",
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
		"liquidityUsd": 488998.97,
		"hash": "3fa2b32f7e370232fc698da592ff2ed4beee94e2ccd0fa4f6ca83e82fd9bdca1"
	},
	{
		"id": "52d63165623e",
		"ts": "2026-08-19T08:32:34.577Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4205009.84,
		"hash": "52d63165623e38b347dff52117c441bf940d77ed68932344c1015d3b428e460c"
	},
	{
		"id": "716571286468",
		"ts": "2026-08-19T08:32:34.802Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9953785.63,
		"hash": "716571286468e3c7b5ec61ba0f93b07d437f6f76a5bebd123455fce6174fe627"
	},
	{
		"id": "07a4e0ce6c8e",
		"ts": "2026-08-19T08:32:34.991Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2919232.53,
		"hash": "07a4e0ce6c8eb7b0ef5437dfd3b5b981ca8eeb26fd432c5fc3243bed00148c05"
	},
	{
		"id": "2545975ad6e7",
		"ts": "2026-08-19T08:32:35.191Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59887.48,
		"hash": "2545975ad6e7f3263bd513430b9d8b7ada002db3e21b02937fbd0207c8a998f3"
	},
	{
		"id": "07c431c6a00a",
		"ts": "2026-08-19T08:32:35.373Z",
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
		"liquidityUsd": 870814.83,
		"hash": "07c431c6a00acc166d3a91592180af7ad2050558c50a794edb4abd704485fa04"
	},
	{
		"id": "76f689941800",
		"ts": "2026-08-19T08:32:35.563Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 74430.9,
		"hash": "76f689941800df6ccc5dc064a0b8e3094a6af773e0c0480cdad4c6bc34b09942"
	},
	{
		"id": "da7a1f486d79",
		"ts": "2026-08-19T07:34:09.211Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111738538.69,
		"hash": "da7a1f486d79da350b590d76c172e6cd12621753734d73ca9d34f8b668830c6f"
	},
	{
		"id": "2e32b22dc219",
		"ts": "2026-08-19T07:34:09.640Z",
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
		"liquidityUsd": 15415134.84,
		"hash": "2e32b22dc219a2d9cdfde3fd6daa2b3b0ecfebb06f5a595b29f1ac095162576e"
	},
	{
		"id": "e7d13d7c0ed4",
		"ts": "2026-08-19T07:34:10.089Z",
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
		"liquidityUsd": 739045.04,
		"hash": "e7d13d7c0ed45b05c22da2eeb3f07278386e49bed2b625c135dc624f296c4067"
	},
	{
		"id": "1b6c6d21e10d",
		"ts": "2026-08-19T07:34:10.517Z",
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
		"liquidityUsd": 26704810.44,
		"hash": "1b6c6d21e10d8a544be82cfc27b2fadb64a07b5942f415dc280126c3794321e3"
	},
	{
		"id": "cb32d3b842c6",
		"ts": "2026-08-19T07:34:10.784Z",
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
		"liquidityUsd": 4255872.91,
		"hash": "cb32d3b842c64f53a5c1f99bea657c7946e54b911c75b25286bcb4f69fc04720"
	},
	{
		"id": "b9bc5986da33",
		"ts": "2026-08-19T07:34:11.031Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891945.82,
		"hash": "b9bc5986da33c0906cf58935a78a770f668cd60649e31f9225638cac657c9dd2"
	},
	{
		"id": "5e6d82f1cb84",
		"ts": "2026-08-19T07:34:11.265Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4281069.33,
		"hash": "5e6d82f1cb84a866b25b98850d454d4d74056d0ef3ff53560efebe7de4a34d37"
	},
	{
		"id": "6198b9670088",
		"ts": "2026-08-19T07:34:11.497Z",
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
		"liquidityUsd": 3555778.48,
		"hash": "6198b96700881f7d59af42d19e18b9ac17229c4758aa7c74cb25df0ecaa3bd26"
	},
	{
		"id": "a29a98eeefa5",
		"ts": "2026-08-19T07:34:11.742Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 399230.57,
		"hash": "a29a98eeefa52cbf12a5bb89efd4a2a018cbc046cebba5dc0f033c3c9ba0f6fa"
	},
	{
		"id": "fc56ab1868de",
		"ts": "2026-08-19T07:34:11.988Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3544658.84,
		"hash": "fc56ab1868de954f9d0e390074db8db7bd801d7b303d6b3d1fe0abb81a6824ed"
	},
	{
		"id": "dbca3e336e53",
		"ts": "2026-08-19T07:34:12.203Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2894358.13,
		"hash": "dbca3e336e539c6bae06b21d17b48a834b632d281645a5ecd44140aa93e96b7e"
	},
	{
		"id": "e9760291bbf9",
		"ts": "2026-08-19T07:34:12.427Z",
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
		"liquidityUsd": 492209.89,
		"hash": "e9760291bbf9d554c3fd2edb9dca0578efb7f4d595800fbb6a5b2d50eac0a082"
	},
	{
		"id": "d60875f5aef1",
		"ts": "2026-08-19T07:34:12.640Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544675.36,
		"hash": "d60875f5aef1cc7bd953d1339f857901f2e95cbec70e348c02013a6406adc3f8"
	},
	{
		"id": "cefdf3241f26",
		"ts": "2026-08-19T07:34:12.854Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4281068.77,
		"hash": "cefdf3241f260b9594698bd43eca25b835a7dbe7f3cd6507520294b23e3f1fac"
	},
	{
		"id": "c8c790b66719",
		"ts": "2026-08-19T07:34:13.081Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9881655.94,
		"hash": "c8c790b6671951f70363fd2ed26fd30a7bdc6cb46b4ef25c63d21518347212cf"
	},
	{
		"id": "6ce5b6afe497",
		"ts": "2026-08-19T07:34:13.295Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2924362.44,
		"hash": "6ce5b6afe49722344287b7ccf9dab6a7d0c9205eda75b68cc6817274229d9ebb"
	},
	{
		"id": "ee4f11a3001a",
		"ts": "2026-08-19T07:34:13.508Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 60488.83,
		"hash": "ee4f11a3001a4dd4630d480e03d670b25703df0de05f2d4181c709435b219534"
	},
	{
		"id": "ad65014a59b7",
		"ts": "2026-08-19T07:34:13.734Z",
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
		"liquidityUsd": 867332.49,
		"hash": "ad65014a59b75f3b7f7e30182c9b7da066df9d2bffa31e18b42290443882db85"
	},
	{
		"id": "3abd8b05a78b",
		"ts": "2026-08-19T07:34:13.948Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 69233.25,
		"hash": "3abd8b05a78bc6561a078e24e2577a300f086434e14d065ddd8fd27864d7210d"
	},
	{
		"id": "e63c7a91f139",
		"ts": "2026-08-19T06:36:40.432Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111722408.97,
		"hash": "e63c7a91f139550bd3c4f06ed02b4f72d11bf80c275b8ca04aef8eb44cf6ab28"
	},
	{
		"id": "7f00232e6e6e",
		"ts": "2026-08-19T06:36:40.675Z",
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
		"liquidityUsd": 16950992.02,
		"hash": "7f00232e6e6e12956ee0b7efab1376e9b0c0c62252ebbd26090ae73bcf77d08e"
	},
	{
		"id": "4f75479c7b8f",
		"ts": "2026-08-19T06:36:40.918Z",
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
		"liquidityUsd": 739045.04,
		"hash": "4f75479c7b8f1dca1f9c793cb4f82b0efce0da86308321b1d3a2fd27a4ec546b"
	},
	{
		"id": "fa25b4ddaa2f",
		"ts": "2026-08-19T06:36:41.163Z",
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
		"liquidityUsd": 26635215.78,
		"hash": "fa25b4ddaa2f87287457a8be0c15c9923ee36655282a79a0f75761b198594fc5"
	},
	{
		"id": "33345314694d",
		"ts": "2026-08-19T06:36:41.401Z",
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
		"liquidityUsd": 4237754.78,
		"hash": "33345314694d90befb45858083dffa495ebfce757baec32223fa127fbe8a5d20"
	},
	{
		"id": "bc3f46b968ec",
		"ts": "2026-08-19T06:36:41.660Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891945.82,
		"hash": "bc3f46b968ec499dc895c6895ab6f4490212fbc12ff66200f482fee127127617"
	},
	{
		"id": "0c0eac6f7ba3",
		"ts": "2026-08-19T06:36:41.894Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4191042.05,
		"hash": "0c0eac6f7ba3632be199f5a689ac28b9cc39d6910424dab6b9c7a38964b7be2a"
	},
	{
		"id": "f69ca32c9755",
		"ts": "2026-08-19T06:36:42.130Z",
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
		"liquidityUsd": 3543660.52,
		"hash": "f69ca32c97559b0727d2495f41dbb6a471b053b53149ae3584e02173ca15bb3e"
	}
]
