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
	"updatedAt": "2026-06-27T14:26:59.449Z",
	"tokensScored": 249,
	"verdictsIssued": 249,
	"safe": 221,
	"risky": 28,
	"likelyRug": 0,
	"ticks": 30
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "0b0c1c74908c",
		"ts": "2026-06-27T14:26:55.315Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93949310.9,
		"hash": "0b0c1c74908c8034320ede67e417f0c956bee7a6a794bd3ca4bde49b145b82ed"
	},
	{
		"id": "94db63147316",
		"ts": "2026-06-27T14:26:55.559Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12979176.74,
		"hash": "94db6314731638579a1037ec4ab7dfe6ce55fe4de04e62c493fcc111a7c4dfaa"
	},
	{
		"id": "70a905e928ec",
		"ts": "2026-06-27T14:26:56.196Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1368201.84,
		"hash": "70a905e928ec1a0ddb1fe13e0118d06c85f53e3012e67ff95f413801550dafad"
	},
	{
		"id": "cb5457f2b274",
		"ts": "2026-06-27T14:26:56.437Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25183415.7,
		"hash": "cb5457f2b274b0fd5b69ef967e75b448fe5ee2a3042f7e28e092d6716d17a5a4"
	},
	{
		"id": "a177db3903ea",
		"ts": "2026-06-27T14:26:56.678Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4100156.82,
		"hash": "a177db3903ea97bffabecfe8c8b17bbeda3df920796fd6532585abac6500a873"
	},
	{
		"id": "752cb7c38da1",
		"ts": "2026-06-27T14:26:56.915Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931108.67,
		"hash": "752cb7c38da19ddd261b927219edfb05b72d8e5ddf0fe1807260d4da6df05ea8"
	},
	{
		"id": "89b4dc3ea6e0",
		"ts": "2026-06-27T14:26:57.148Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25183415.7,
		"hash": "89b4dc3ea6e0463c3803b55b161ceb14f768b3997b4ebafab7ac314cec7de0de"
	},
	{
		"id": "ce8d17f41958",
		"ts": "2026-06-27T14:26:57.429Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2042349.32,
		"hash": "ce8d17f419589937d937015ac7628e2e28982b297beced351d88e0bcfed94f5c"
	},
	{
		"id": "ee35a2e03eb4",
		"ts": "2026-06-27T14:26:57.662Z",
		"symbol": "Claude",
		"token": "0x30EC37E22FF8865e2E439d84E7d2ffD58296DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 489284.45,
		"hash": "ee35a2e03eb42bd78255cc342d5cf6fb153991b3fa4605d3c3c2377dc4597acf"
	},
	{
		"id": "0f05a26b304e",
		"ts": "2026-06-27T14:26:57.911Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 7915930.17,
		"hash": "0f05a26b304e95977e08517debe9559b0287649f9ad51609b645b71332a1af8e"
	},
	{
		"id": "c94ada00df5b",
		"ts": "2026-06-27T14:26:58.131Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121815.08,
		"hash": "c94ada00df5b36de48e856d438eef326432eefd8137c1277601cdf3ce75f4216"
	},
	{
		"id": "dcda7f6e8336",
		"ts": "2026-06-27T14:26:58.351Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 213287.96,
		"hash": "dcda7f6e83362375a736a9c1e56195703e090d145cc07d5c43d198668d7024cc"
	},
	{
		"id": "3c583c5b7d02",
		"ts": "2026-06-27T14:26:58.573Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 524114.93,
		"hash": "3c583c5b7d02302fa30c1ed0df41a4e10a465340378606d0307f067d27e7fd34"
	},
	{
		"id": "d35e0942cea2",
		"ts": "2026-06-27T14:26:58.793Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1630885.8,
		"hash": "d35e0942cea2d6fcb66213157ac7c1680c341abc5c3f33fca7affe356324a9a7"
	},
	{
		"id": "05b9a59e76b1",
		"ts": "2026-06-27T14:26:59.012Z",
		"symbol": "YAPPR",
		"token": "0x8C3E96713977E61C4180a5f0a6B02Fab86fb5bA3",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 65167.03,
		"hash": "05b9a59e76b1806da6568b2668c476943d8071168f368e3a74be196809620af2"
	},
	{
		"id": "35e5a222f990",
		"ts": "2026-06-27T14:26:59.231Z",
		"symbol": "VU",
		"token": "0x511ef9Ad5E645E533D15DF605B4628e3D0d0Ff53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95813.02,
		"hash": "35e5a222f990e9c7a43708c1b4439a4043ab2ab5a9aaa62f8b3042d11ac1bfcf"
	},
	{
		"id": "ae395d42623e",
		"ts": "2026-06-27T14:26:59.449Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1310672.06,
		"hash": "ae395d42623e129fe19408530213056137329cd2c6370fb5f8f2ce6cf38edcac"
	},
	{
		"id": "9229792cf0d7",
		"ts": "2026-06-27T12:07:15.812Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93561704.49,
		"hash": "9229792cf0d71207605300ba194d885dc72abdcc875299b45068774014816c93"
	},
	{
		"id": "1c9c7b88f118",
		"ts": "2026-06-27T12:07:16.258Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13013710.31,
		"hash": "1c9c7b88f118e69b463a773a91bde76238e24f54e1d3607154da02e4bab0b1c2"
	},
	{
		"id": "550f245a74ce",
		"ts": "2026-06-27T12:07:16.525Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1357279.52,
		"hash": "550f245a74ce0004156fe48dcdb0435ae5e367c639318307c9d445742cd1364c"
	},
	{
		"id": "4edaa698a681",
		"ts": "2026-06-27T12:07:16.782Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24855685.9,
		"hash": "4edaa698a6817b0ccfb060f4455379c134b13e5928940411fc77ec7e69990287"
	},
	{
		"id": "c701eaa234d0",
		"ts": "2026-06-27T12:07:17.025Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3828267.16,
		"hash": "c701eaa234d0af5af08e309a21feb1430dcafb5d0a08cc5bbc99e93c6f0a3721"
	},
	{
		"id": "e05c4f0f0c10",
		"ts": "2026-06-27T12:07:17.268Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922344.44,
		"hash": "e05c4f0f0c10a2b4fabe88da14f19988b8242fe7ada0379a82b6d79998cd4965"
	},
	{
		"id": "4e163ef34030",
		"ts": "2026-06-27T12:07:17.511Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24855685.9,
		"hash": "4e163ef3403096d6b2b273f16d70b08c7af8cb933863fce603ef0c5da200d53d"
	},
	{
		"id": "55d7a6ac1c18",
		"ts": "2026-06-27T12:07:17.754Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2029642.97,
		"hash": "55d7a6ac1c1887a29da9653c56ba104cadcbe25cfffd72a30f76cf33ff0aeaea"
	},
	{
		"id": "7b368767cde8",
		"ts": "2026-06-27T10:03:49.520Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93545281.97,
		"hash": "7b368767cde8dd463183a2c943b0f4ae59c6254c00188066fadcbe5b5b19dc20"
	},
	{
		"id": "a792366b9084",
		"ts": "2026-06-27T10:03:49.866Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12747895,
		"hash": "a792366b90846d142761368c2a03d264f7047d3b785e4e0c697caa9d029a6ea5"
	},
	{
		"id": "e3f1fdec8658",
		"ts": "2026-06-27T10:03:50.056Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1358721.25,
		"hash": "e3f1fdec8658948570af340145e82353bdd62304aca3f4f13e41d2ad1606c42a"
	},
	{
		"id": "3dc2b3a7ffac",
		"ts": "2026-06-27T10:03:50.242Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24687974.52,
		"hash": "3dc2b3a7ffacd65a7440d928bb8a98bae36fc1bc696794c070d2890393a3a81a"
	},
	{
		"id": "667f53b84095",
		"ts": "2026-06-27T10:03:50.427Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3822413.28,
		"hash": "667f53b84095e8309aa2cefde9e1f564c0de05cf73257775c873cce9fc9b74c6"
	},
	{
		"id": "d2f50d63f9bf",
		"ts": "2026-06-27T10:03:50.617Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 928597.92,
		"hash": "d2f50d63f9bfb4d2436b0e5c174dfc0707656330076816cd27b1aa3cb8a0758e"
	},
	{
		"id": "12f56ed35289",
		"ts": "2026-06-27T10:03:50.804Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24687974.52,
		"hash": "12f56ed352894c5eb8ba34b29e78f2587ec11148d44572a807b47b1efe38bb4e"
	},
	{
		"id": "d2de2ad395fa",
		"ts": "2026-06-27T10:03:51.011Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2028858.84,
		"hash": "d2de2ad395fa0595ae85d2bfacb14286f56c462052a9f7beeb50e1dbe0418c72"
	},
	{
		"id": "fe67bef5f884",
		"ts": "2026-06-27T07:46:50.595Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93320149.64,
		"hash": "fe67bef5f884cecee893d9dd667f31b1db0ca9870f344e53c5117718a8637e9d"
	},
	{
		"id": "e99ce8776f1f",
		"ts": "2026-06-27T07:46:50.838Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12663267.87,
		"hash": "e99ce8776f1f9a2462efc6c52c46b77be636ff941133fe9fd4c3a99db839fb33"
	},
	{
		"id": "d04afd423880",
		"ts": "2026-06-27T07:46:51.077Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1391702.46,
		"hash": "d04afd42388034afc0c279fe8834b4e2f20e024031114eef890451db84afd77f"
	},
	{
		"id": "a04a8ac24310",
		"ts": "2026-06-27T07:46:51.318Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24719677.55,
		"hash": "a04a8ac24310017879c7ab5231ab2cc7810adc5e6ef08b7aba13aa917e86eea1"
	},
	{
		"id": "60b6c0e8acd8",
		"ts": "2026-06-27T07:46:51.765Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3774439.81,
		"hash": "60b6c0e8acd8c0f60899b8d754faf5f2aa6f8a995ee37c5216f06e5ce8996957"
	},
	{
		"id": "2417a49e8940",
		"ts": "2026-06-27T07:46:52.018Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 925747.39,
		"hash": "2417a49e89407c98170889347603d617c22a5d898ece3627d498c05b3c2acdcf"
	},
	{
		"id": "ee4a065276ae",
		"ts": "2026-06-27T07:46:52.251Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24719677.55,
		"hash": "ee4a065276aeed9644694c375b22dbc6da621f5cde1eba396a6e61c0224fda05"
	},
	{
		"id": "c79be796553e",
		"ts": "2026-06-27T07:46:52.511Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2030011.32,
		"hash": "c79be796553e6762103d3e5bd77b06ee7eeab2d57edcfb95776b671d01fcfd89"
	},
	{
		"id": "60b8433e54c5",
		"ts": "2026-06-27T04:51:03.883Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93320747.3,
		"hash": "60b8433e54c516779c38abdc8fd5c3a5a1a0ad4e736b1e49b8e1ccdcadf4e29f"
	},
	{
		"id": "330a9d9b2d7e",
		"ts": "2026-06-27T04:51:04.326Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12520697.85,
		"hash": "330a9d9b2d7edc8251ef7b004e98e5a8644e4e6f65d5b8435a236f2a5183d88c"
	},
	{
		"id": "3fe49348127d",
		"ts": "2026-06-27T04:51:04.584Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1363061.99,
		"hash": "3fe49348127de26f71ec993e9ae908016189b5c718eeae60aea77cfd4c1d487a"
	},
	{
		"id": "3279b48dd1ed",
		"ts": "2026-06-27T04:51:04.826Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24862035.36,
		"hash": "3279b48dd1ed2bc6e540e51b5a62c87580f0f0efb2d66558bb50d55bfd89371c"
	},
	{
		"id": "13c955c7d960",
		"ts": "2026-06-27T04:51:05.090Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3771614.87,
		"hash": "13c955c7d9602b0bb076e8e0bf6a191ccb47c82379e314a35b93e0409a2cb74d"
	},
	{
		"id": "21037a815fef",
		"ts": "2026-06-27T04:51:05.325Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 925337.76,
		"hash": "21037a815fefcd46bfdbad12ae61465932bed81fd9f4f0c54fde7b049c7b79a6"
	},
	{
		"id": "961ce74603e6",
		"ts": "2026-06-27T04:51:05.570Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24862035.36,
		"hash": "961ce74603e67dc68a469d7bb77bfd1a5db5d05a6ab6d303bd266fad343f78ea"
	},
	{
		"id": "d28a172a984f",
		"ts": "2026-06-27T04:51:05.800Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2073920.65,
		"hash": "d28a172a984f1d6c158215c02db573693ba6744543a195f8c932072cc6d936d4"
	},
	{
		"id": "bbc4375fc1ee",
		"ts": "2026-06-27T00:03:20.821Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93133160.82,
		"hash": "bbc4375fc1eeb0a567078e5b8a709ac5b401ac7d5e5a52e6586fd9e81ee63a1e"
	},
	{
		"id": "3d963c7ea87e",
		"ts": "2026-06-27T00:03:21.196Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12843340.02,
		"hash": "3d963c7ea87ec7a0f0829ab307eaff1d4e54102770826a7ff50c066fe8d8e762"
	},
	{
		"id": "2637f764a6ce",
		"ts": "2026-06-27T00:03:21.408Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1347233.76,
		"hash": "2637f764a6ce7cd62bf294a51374f3bea630baae71ed5bddc52939bf9011694d"
	},
	{
		"id": "96ba539e8e70",
		"ts": "2026-06-27T00:03:21.651Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24656738.96,
		"hash": "96ba539e8e7090b10bfc0543a25b37316d1f21f71c9c047a7449a348de788d00"
	},
	{
		"id": "c871df9bcf89",
		"ts": "2026-06-27T00:03:21.876Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3768480.79,
		"hash": "c871df9bcf8949621e340c856c11105fc7201b4656299bbcb41c96694cabcc15"
	},
	{
		"id": "31eda563fc70",
		"ts": "2026-06-27T00:03:22.080Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922086.77,
		"hash": "31eda563fc705742d58cd3e19c2b7fc17711d494d2c0f1fd3a987075cdcb41dc"
	},
	{
		"id": "34136f393243",
		"ts": "2026-06-27T00:03:22.298Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4474478.56,
		"hash": "34136f39324375cfa056a545db51f1ba36fd982020c428ab37bbee675a2ebc84"
	},
	{
		"id": "24317cdeebc9",
		"ts": "2026-06-27T00:03:22.502Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2070534.96,
		"hash": "24317cdeebc9dd139a3e4b355d7ac0753056fe62a29c1f7a8b5ca15bcb42820d"
	},
	{
		"id": "15368c04bf35",
		"ts": "2026-06-26T22:09:26.174Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93031957.32,
		"hash": "15368c04bf35c0ce6b53775419c3e0c5ab52afceb5355adb24e14a06f8ba104d"
	},
	{
		"id": "2a3492d78285",
		"ts": "2026-06-26T22:09:26.815Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13046441.38,
		"hash": "2a3492d78285d32260a2abed8e669dfd8d40591561cfb919bffae56821bc2e5e"
	},
	{
		"id": "f1f7d13a4180",
		"ts": "2026-06-26T22:09:27.246Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1339012.48,
		"hash": "f1f7d13a418004241d73f125b384fa20eb723f95ebc7379c3280d76993203a0a"
	},
	{
		"id": "2397e3871901",
		"ts": "2026-06-26T22:09:27.680Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24679163.51,
		"hash": "2397e38719019541d83f2b75e5205342c0561d210d5f30f148db3df51b05c334"
	},
	{
		"id": "d6210c3efa35",
		"ts": "2026-06-26T22:09:28.113Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3748702.54,
		"hash": "d6210c3efa3544dfec7449f7dfb06f62d0fb36b7ecccab2e92dd2c8d44d0066e"
	},
	{
		"id": "a677fa136121",
		"ts": "2026-06-26T22:09:28.361Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 915994.78,
		"hash": "a677fa1361219d0123055d5e321a9a31297daa69d38005610b67567a2dd44e69"
	},
	{
		"id": "e50ff971a13a",
		"ts": "2026-06-26T22:09:28.614Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4383488.89,
		"hash": "e50ff971a13a21865567dd716cc0850c1daa456996927d3b4dd6f73197e480ee"
	},
	{
		"id": "847c01abde20",
		"ts": "2026-06-26T22:09:28.868Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2064370.16,
		"hash": "847c01abde20f1cb142b5f50bb86aee6b85bc8c190b793ff11e0a0fa0ab058ae"
	},
	{
		"id": "2f134db9a8a6",
		"ts": "2026-06-26T20:44:57.242Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 92960468.06,
		"hash": "2f134db9a8a65f568e68690ae446fcf7d74a9bf8d507da7e7d87649b479feb53"
	},
	{
		"id": "c63ec3d13d8d",
		"ts": "2026-06-26T20:44:57.636Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12310002.35,
		"hash": "c63ec3d13d8da6e4022916274139bd312991e2cf6ec28e5f97d26d15a2e30921"
	},
	{
		"id": "99c8f93d16e5",
		"ts": "2026-06-26T20:44:57.827Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1341355.3,
		"hash": "99c8f93d16e5cb3ef130ccaf4cb80aad5cb7920b17e4423151f0fca2bb0d06e3"
	},
	{
		"id": "2aca4a50185b",
		"ts": "2026-06-26T20:44:58.017Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24616290.62,
		"hash": "2aca4a50185bea4cbd22e1968ac189b2a6537bffafd0e74cc0f8e99cf55a49c6"
	},
	{
		"id": "83188da1f81c",
		"ts": "2026-06-26T20:44:58.486Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3748035.23,
		"hash": "83188da1f81c352785fe85bd37f3124805587dc4a289bf71d108e97c92f7dcf7"
	},
	{
		"id": "ea77e8e36a6b",
		"ts": "2026-06-26T20:44:58.677Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 915249.79,
		"hash": "ea77e8e36a6bb10aa4de9aa8c59db6890d0da86aec8572eb8cb1259085d57993"
	},
	{
		"id": "c59d78f52830",
		"ts": "2026-06-26T20:44:58.868Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4560777.87,
		"hash": "c59d78f528309f872c2b147dac36a3bad335d723ab5551a5c5d6e9ab41cc12e1"
	},
	{
		"id": "0b5a9029503f",
		"ts": "2026-06-26T20:44:59.056Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2058612.88,
		"hash": "0b5a9029503f1ce28eb901d271cca58662a0e9810b799f0772066f944e7d0704"
	},
	{
		"id": "206d36a98007",
		"ts": "2026-06-26T18:29:18.611Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93272751.4,
		"hash": "206d36a98007cdc68b9341069eac3578eed59fcedba867cdf52cd390acc156ce"
	},
	{
		"id": "d7ee9300e3aa",
		"ts": "2026-06-26T18:29:19.063Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13220872.67,
		"hash": "d7ee9300e3aafb7885ab0dd54a53ee576e0c5499efaaebfa9aa06f53cc4e388e"
	},
	{
		"id": "59338cb54ead",
		"ts": "2026-06-26T18:29:19.317Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1350538.63,
		"hash": "59338cb54ead6d21d35be5c74e4bc6220cb1f368393511a582049aae33372915"
	},
	{
		"id": "517f9b7cf3be",
		"ts": "2026-06-26T18:29:19.569Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24768895.28,
		"hash": "517f9b7cf3be6dd3749da1d7b0a5e77547584f8dbe60cf6590cbb0b94060e211"
	},
	{
		"id": "373660b1c53c",
		"ts": "2026-06-26T18:29:19.822Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3760087.35,
		"hash": "373660b1c53c06ebc23dd0cab6fdcfb8c867be88b1b61872892676d35bf8b9a4"
	},
	{
		"id": "9b247d26a91e",
		"ts": "2026-06-26T18:29:20.083Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 919458.92,
		"hash": "9b247d26a91e0e8ae4d25042c44a7fa999c67e9962ea941617be8c5b06f1a1f4"
	},
	{
		"id": "2a03a2087189",
		"ts": "2026-06-26T18:29:20.331Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24768895.28,
		"hash": "2a03a208718953750143d8b41c7f3a35d84bb4822ce96921b23ddf094c243f32"
	},
	{
		"id": "b002a8397213",
		"ts": "2026-06-26T18:29:20.776Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2070431.81,
		"hash": "b002a8397213bd955c3de7352e8474f73193052627aae5e31ed552aac3994a36"
	},
	{
		"id": "aa3b295dc12e",
		"ts": "2026-06-26T16:13:24.104Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 93292276.57,
		"hash": "aa3b295dc12e4aa2e4eaf85d21140981ecaaad9ae2db935e320fb5c5a900f138"
	},
	{
		"id": "fbc56a22b0c4",
		"ts": "2026-06-26T16:13:24.553Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12390025.37,
		"hash": "fbc56a22b0c4673f9993f55e64b43e6031c67f07d44c345addca8b8876c4c2fc"
	},
	{
		"id": "99063f830563",
		"ts": "2026-06-26T16:13:24.791Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1343568.39,
		"hash": "99063f830563321a49b530c9ac9a4586b43ec87bbc357f6e3b2065afff35076e"
	},
	{
		"id": "18d00b88f548",
		"ts": "2026-06-26T16:13:25.028Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25326940.39,
		"hash": "18d00b88f548d540006f64b451d2a9fe3909b1938a6229763f10ce5d65c953c2"
	},
	{
		"id": "6fe61599d948",
		"ts": "2026-06-26T16:13:25.268Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3727488.52,
		"hash": "6fe61599d94890a3e0dcfbf21a039fe8b8baf0b2831d177aea88129c92d7a1a7"
	},
	{
		"id": "d92babb94463",
		"ts": "2026-06-26T16:13:25.522Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900108.19,
		"hash": "d92babb94463499ae169aaa66fe6ce8f5de908150865d724aea28fadb1e9ff0a"
	},
	{
		"id": "fab3bbda68bb",
		"ts": "2026-06-26T16:13:25.756Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25326940.39,
		"hash": "fab3bbda68bb2b9504e22f1a95bff3a98ffc68faaa5e032286e5b20400d5ae13"
	},
	{
		"id": "1900be65f37e",
		"ts": "2026-06-26T16:13:25.991Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2024804.6,
		"hash": "1900be65f37ea732064ec464c7fae987a0a30247a3d4767a52baf9a1d99cb650"
	},
	{
		"id": "549e27f0ae50",
		"ts": "2026-06-26T13:08:47.222Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 91161670.47,
		"hash": "549e27f0ae50c713846fdfd490cd53c19920e7f29463e6290d5f7d3a7e48b7d2"
	},
	{
		"id": "67aa655ab170",
		"ts": "2026-06-26T13:08:47.570Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12548310.79,
		"hash": "67aa655ab17082790f899cdc3d2e600312082c401eb793420e014990abd1f88c"
	},
	{
		"id": "13c56a9317a2",
		"ts": "2026-06-26T13:08:47.757Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1314105.74,
		"hash": "13c56a9317a2177e9d9cb34564965f624b136186b2b96d753a31cf31470c57bb"
	},
	{
		"id": "308ce12fdf18",
		"ts": "2026-06-26T13:08:47.946Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24462878.5,
		"hash": "308ce12fdf1882c8b453790da4ae17ceba437c3bd129e9e1cf12a13abca21b38"
	},
	{
		"id": "03c49b5d0aca",
		"ts": "2026-06-26T13:08:48.138Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3664619.89,
		"hash": "03c49b5d0aca54c7d2d5948210743ed78954475dfcbd91ad2fe2affe22c136db"
	},
	{
		"id": "b379335b3f1f",
		"ts": "2026-06-26T13:08:48.326Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890158.97,
		"hash": "b379335b3f1fe40f672cbc7b83de6078f87cd9d526f2b0b44463b323bcb50700"
	},
	{
		"id": "51e6bcd9b73c",
		"ts": "2026-06-26T13:08:48.510Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24462878.5,
		"hash": "51e6bcd9b73cddea9cc8ed5d915232d186ce43752a164983ad0eaa49d31ad4ea"
	},
	{
		"id": "3c2e519aa011",
		"ts": "2026-06-26T13:08:48.723Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1995876.72,
		"hash": "3c2e519aa01117a209d1fed9276541dd9a837498f67c739cf81e418f1221a18b"
	},
	{
		"id": "bbbe36c9187b",
		"ts": "2026-06-26T10:25:56.967Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 91754590.73,
		"hash": "bbbe36c9187bb6f19a59ba76f9353769ce5e9568bda9aec5c06b0991325aff9d"
	},
	{
		"id": "0bd856eb59fb",
		"ts": "2026-06-26T10:25:57.599Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13205814.02,
		"hash": "0bd856eb59fbec7319a484fc13f359ce429bbd7f1b8dc6228fe0993265f77523"
	},
	{
		"id": "f9a888e6851c",
		"ts": "2026-06-26T10:25:58.034Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1347854.09,
		"hash": "f9a888e6851c536900854a12a242691af6555c1851774f049d48cf6b67b012ca"
	},
	{
		"id": "1731f6e3eb50",
		"ts": "2026-06-26T10:25:58.509Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24531675.64,
		"hash": "1731f6e3eb50fef2c64ab9c3912afd1dfe6e63e896047a0cf36917bd2e76d78a"
	},
	{
		"id": "0e17ade44631",
		"ts": "2026-06-26T10:25:58.936Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3710213.54,
		"hash": "0e17ade4463116117384e8a2ce5070297104472f7108ab21918f610cc3ceb3de"
	},
	{
		"id": "ba59962c062e",
		"ts": "2026-06-26T10:25:59.167Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 906092.13,
		"hash": "ba59962c062e54758c48347f4c97172a484ebc62c373b1c66f4bf3c4fad0312c"
	},
	{
		"id": "3bd32c27b6ff",
		"ts": "2026-06-26T10:25:59.405Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24531675.64,
		"hash": "3bd32c27b6ff18a7fe9b352c872918d17346bf4c1ea27ef052a7ba2ce7647a52"
	},
	{
		"id": "fcd52b9bfe4b",
		"ts": "2026-06-26T10:26:00.279Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1994329.48,
		"hash": "fcd52b9bfe4be5a0d1eec7e606a466eeb369302855b060f60421d63194629e1f"
	},
	{
		"id": "02f4cbf28509",
		"ts": "2026-06-26T06:58:50.099Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 91934558.6,
		"hash": "02f4cbf28509628a88e61fb34e2ed7c8fd591fb9da488ac4f2b093f1b2574ef6"
	},
	{
		"id": "ecc60e1c9bea",
		"ts": "2026-06-26T06:58:50.314Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12962198.94,
		"hash": "ecc60e1c9beac9b893913dff6ddbe24415793b2370112b03020a56447edd5b19"
	},
	{
		"id": "4422311139ea",
		"ts": "2026-06-26T06:58:50.537Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1349089.76,
		"hash": "4422311139eaec9e392ae9bb51718eb227f8f6cc7de16039826640e6dcb422bb"
	},
	{
		"id": "b1ae904ac4cf",
		"ts": "2026-06-26T06:58:50.743Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24802001.59,
		"hash": "b1ae904ac4cfc1a128b6c14c2654e0b11a54cab46853f1db4c63fd3313ad4b48"
	},
	{
		"id": "c8b50de605ad",
		"ts": "2026-06-26T06:58:50.947Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3730987.88,
		"hash": "c8b50de605ad3528f2f580b696164032f2700bc7d1994169ce5a7b6604d8592e"
	},
	{
		"id": "e5850534c52b",
		"ts": "2026-06-26T06:58:51.158Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891452.46,
		"hash": "e5850534c52be92554ff09f4e2f82212e36997080221b605e40ac941a863df61"
	},
	{
		"id": "54e708ba9eac",
		"ts": "2026-06-26T06:58:51.384Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24802001.59,
		"hash": "54e708ba9eacf63ba933f348d919208da6cce30c34f629c1b1accbfc7b5a9085"
	},
	{
		"id": "a2f15c88740c",
		"ts": "2026-06-26T06:58:51.593Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2016739.94,
		"hash": "a2f15c88740c0f8adb6dcd462d61fa3a969a59238aed2fe1456d67a433c65e39"
	},
	{
		"id": "7979b51dfee5",
		"ts": "2026-06-26T02:58:28.808Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 89984283.94,
		"hash": "7979b51dfee5b780faa7b19847c36eeeea231fc310090ca0926f19ae6de740c5"
	},
	{
		"id": "b23091f2e7a4",
		"ts": "2026-06-26T02:58:29.009Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12572403.36,
		"hash": "b23091f2e7a401ae46823e90857a781b58ad0918f0c03e1f7fab1eb7706d487e"
	},
	{
		"id": "a6bc0d3c1b66",
		"ts": "2026-06-26T02:58:29.198Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1293266.96,
		"hash": "a6bc0d3c1b669ff61b003a3d9de2661db15b3b29529b59026d885ca085fbe422"
	},
	{
		"id": "75120b822589",
		"ts": "2026-06-26T02:58:29.389Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24478830.5,
		"hash": "75120b8225894876f59293911181c2692f79e8df054344233dabdaa31e8698bb"
	},
	{
		"id": "fdb7d3ca5424",
		"ts": "2026-06-26T02:58:29.578Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3620058.34,
		"hash": "fdb7d3ca54249f66418b5b696ca71b9a99288f53d990708679ec3df4cd025947"
	},
	{
		"id": "6f4b3386f749",
		"ts": "2026-06-26T02:58:29.763Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 867239.45,
		"hash": "6f4b3386f749546317abeaac91cbc45a98331d93c1dcdb2d8cfd87cc9d8899f7"
	},
	{
		"id": "f28d70a5bab3",
		"ts": "2026-06-26T02:58:29.967Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24478830.5,
		"hash": "f28d70a5bab341f97330da1936003354435b151af4c74f95e53a2fd1337204a2"
	},
	{
		"id": "0c59ad5bcf4e",
		"ts": "2026-06-26T02:58:30.157Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1956342.21,
		"hash": "0c59ad5bcf4e154c1295851d099045c19683e66311510c65830be275396dbb88"
	},
	{
		"id": "19c1be7a1860",
		"ts": "2026-06-25T23:14:56.575Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 91755058.68,
		"hash": "19c1be7a1860ddf51c5105a43dba9c248943873b32931dffeb6dd9c2e545e67d"
	},
	{
		"id": "2aadb8bce8dc",
		"ts": "2026-06-25T23:14:57.268Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13119943.71,
		"hash": "2aadb8bce8dcfae89a25bfa421ba92e3836b89b94f9078a6171f144aaed957fb"
	},
	{
		"id": "8aee3834ffc8",
		"ts": "2026-06-25T23:14:57.739Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1333191.52,
		"hash": "8aee3834ffc8f10b81fd0fca0364a1fa45b86d5ea5317508413b6a948dbe0da7"
	},
	{
		"id": "1bfd9d12059a",
		"ts": "2026-06-25T23:14:58.230Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24753095.02,
		"hash": "1bfd9d12059af3698ce38e0312b86e0bb9828b664b3788b5793e3be3071f89e2"
	},
	{
		"id": "5ea219623da1",
		"ts": "2026-06-25T23:14:59.181Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3720381.98,
		"hash": "5ea219623da19569966c222a928e18669443515a569995a876faf4ad3c5ab08f"
	},
	{
		"id": "b68fd3ad0a48",
		"ts": "2026-06-25T23:14:59.435Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 901022.61,
		"hash": "b68fd3ad0a4882eb445f35803130b585b03de0a8c3cc23725898b4772149bec5"
	},
	{
		"id": "f57df64719e6",
		"ts": "2026-06-25T23:14:59.708Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24753095.02,
		"hash": "f57df64719e6e71be685959574774d9d9877e1d379ba0d70b59e08ce30d41ad1"
	},
	{
		"id": "83cb850f7aad",
		"ts": "2026-06-25T23:14:59.993Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2016350.45,
		"hash": "83cb850f7aad1517f3ce433b46e12a35ad651403dcf4a7d4c0308ab85a6b8c2d"
	},
	{
		"id": "b6128c3c091a",
		"ts": "2026-06-25T21:29:21.217Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 91317264.33,
		"hash": "b6128c3c091aaed12f65bd6917074d86692b59e6fcb9e5d15b16ae71d26d7f17"
	},
	{
		"id": "ccfbd8ca5c6f",
		"ts": "2026-06-25T21:29:21.903Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13211206.14,
		"hash": "ccfbd8ca5c6fada7b65dac34af11f9ec954c89f79f53000ecbbdd55b724f03e0"
	},
	{
		"id": "d2ce3e702c0a",
		"ts": "2026-06-25T21:29:22.622Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1332824.46,
		"hash": "d2ce3e702c0aec057251fd9092266680b4a78d9ed52e74fd0e53f5b7e5ba8f3e"
	},
	{
		"id": "523423273b6e",
		"ts": "2026-06-25T21:29:22.882Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24656459.4,
		"hash": "523423273b6eddcb7ef559c9ce4675fa4417343806891ecf08d293012f827c90"
	},
	{
		"id": "727f74f621af",
		"ts": "2026-06-25T21:29:23.356Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3713220.53,
		"hash": "727f74f621af478b5b710aa08933574bd637a958cb127cc316f2af22912cc808"
	},
	{
		"id": "a644d766372a",
		"ts": "2026-06-25T21:29:23.843Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 892713.16,
		"hash": "a644d766372a74ac240e2dfebe0be63281040870c85fb1a6ea66e6c3f0676f70"
	},
	{
		"id": "1dbfa6387694",
		"ts": "2026-06-25T21:29:24.101Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24656458.71,
		"hash": "1dbfa63876941bcaa7677c9910474c29947296d989e06375d60234583eecf812"
	},
	{
		"id": "53770969a458",
		"ts": "2026-06-25T21:29:24.358Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2011417.23,
		"hash": "53770969a4581512e18cf930ee4a8b64d1bb31bf526e2ab2b5f8d45c77103e01"
	},
	{
		"id": "2e297517b928",
		"ts": "2026-06-25T19:04:07.287Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 91791984.4,
		"hash": "2e297517b928172ac9898a832c929e0d0a6a34fc9c226889f400082a4122252e"
	},
	{
		"id": "ce74e51dde97",
		"ts": "2026-06-25T19:04:08.566Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12585000.72,
		"hash": "ce74e51dde97d178c71ade8b426a90fdd1a957e0daa76749851e131177c7f61b"
	},
	{
		"id": "213d079b2831",
		"ts": "2026-06-25T19:04:08.811Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1331548.99,
		"hash": "213d079b2831cdee5100418bd664888e09b0ee32f067d5b9b9a918c5f87aa765"
	},
	{
		"id": "27ecd2600ea0",
		"ts": "2026-06-25T19:04:09.061Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24297343.66,
		"hash": "27ecd2600ea033ec296edccef69feee94c6b301993f2a7de8210d4d89199202f"
	},
	{
		"id": "695dad33abc9",
		"ts": "2026-06-25T19:04:09.310Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3692528.61,
		"hash": "695dad33abc90b05d843e47d99d8eeb220f22c22f33747b93f7ee655e8d59001"
	},
	{
		"id": "edad7ecd3f98",
		"ts": "2026-06-25T19:04:09.557Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888286.65,
		"hash": "edad7ecd3f98c75b8d36d8a73dece2fbbdd82e441fda3af7b9408c4cbf55aedc"
	},
	{
		"id": "80ee0d247f08",
		"ts": "2026-06-25T19:04:09.806Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24297343.66,
		"hash": "80ee0d247f088070aa63e6941ed08e20b6fd4f537b48d40e134d2b1b6450e4ac"
	},
	{
		"id": "e3fcc77c31fc",
		"ts": "2026-06-25T19:04:10.058Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2011206.78,
		"hash": "e3fcc77c31fccf713f6b4b932e425810e866d5f59b71bd8b8f6c83281e32d121"
	},
	{
		"id": "b5f838b523dc",
		"ts": "2026-06-25T16:21:30.864Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 92294211.32,
		"hash": "b5f838b523dcdb00ee51fb99d5bbb0087be8dce3e3110cdad1f7024d0e917b2c"
	},
	{
		"id": "2cee59db98d7",
		"ts": "2026-06-25T16:21:31.236Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13215211.58,
		"hash": "2cee59db98d785c2de6a23b8ace24777df6b0c71f43189f1a7e397ddf0f12563"
	},
	{
		"id": "5067530fbf39",
		"ts": "2026-06-25T16:21:31.442Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1330226.85,
		"hash": "5067530fbf399b004e23d20add2f75c5a2b6fc4c477823c330aa3bf2a57523f4"
	},
	{
		"id": "d64d1ef40141",
		"ts": "2026-06-25T16:21:31.654Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24404717.47,
		"hash": "d64d1ef4014184c7a0ce6e484ef4b2bfe8926c9958a022987bec7ae138dc3ccd"
	},
	{
		"id": "942c077b4ef7",
		"ts": "2026-06-25T16:21:31.866Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3684879.3,
		"hash": "942c077b4ef7a266011693c617bf7b4a67a84a375a56388c99d369417d954733"
	},
	{
		"id": "6b7877c49e86",
		"ts": "2026-06-25T16:21:32.092Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 888286.65,
		"hash": "6b7877c49e86a2634df6f70ea9ad7a1c4932663773b8370ba422dd221e3f88b2"
	},
	{
		"id": "f83806551708",
		"ts": "2026-06-25T16:21:32.311Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24404717.47,
		"hash": "f83806551708887c688eed03e9766463fde49f04f4f41193c1ecd533f9292834"
	},
	{
		"id": "48019886a786",
		"ts": "2026-06-25T16:21:32.522Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2004159.07,
		"hash": "48019886a7864a8add59d0f401d12ca872356f33c509d578f6cff69a27c06787"
	},
	{
		"id": "863feb800932",
		"ts": "2026-06-25T13:14:22.051Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 96446824.04,
		"hash": "863feb800932899c3e11fe9a9832c184f3a67fe7afb6adca1f5df13d167a4455"
	},
	{
		"id": "e824f4cdc157",
		"ts": "2026-06-25T13:14:22.429Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13504464.79,
		"hash": "e824f4cdc157c37e0aded534b333895bc5ffda3d3abc571a3c84d57391216d2b"
	},
	{
		"id": "9c89703bf268",
		"ts": "2026-06-25T13:14:22.640Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1420562.25,
		"hash": "9c89703bf268c9536c3a640d047353c0dfdfd5404c24b9425768963901d1e55f"
	},
	{
		"id": "7b622ea2b023",
		"ts": "2026-06-25T13:14:22.853Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25577966.78,
		"hash": "7b622ea2b02389f000fd47e21dde896230160a95e63f1cd8b60903046aa325f6"
	},
	{
		"id": "6f7ba0a959a6",
		"ts": "2026-06-25T13:14:23.060Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3881789.83,
		"hash": "6f7ba0a959a669dba142d3f194a8247ac1d6590c74974fb8100a84ffd521b3ab"
	},
	{
		"id": "dbecff89b196",
		"ts": "2026-06-25T13:14:23.269Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922773.39,
		"hash": "dbecff89b196f58305302f884c90d2beca2cc03f0bd070e1d144f1b5b168b44d"
	},
	{
		"id": "0e7a70b4850d",
		"ts": "2026-06-25T13:14:23.496Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25577966.09,
		"hash": "0e7a70b4850d5699bdecca00e1afcc45bfe94f73dbade935540aed40c17e0e13"
	},
	{
		"id": "43d4d5bcfa78",
		"ts": "2026-06-25T13:14:23.706Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2047112.82,
		"hash": "43d4d5bcfa782e4ef4b9b3a369cc2d23776ef4788cbc6f5aa4e62ed1de4f7ddd"
	},
	{
		"id": "a22308bc1051",
		"ts": "2026-06-25T10:13:57.916Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 96653407.26,
		"hash": "a22308bc10513d97b071a6fd8d59f79ea49b061644389c37c1cd4309b02bd1d6"
	},
	{
		"id": "326637362df0",
		"ts": "2026-06-25T10:13:58.402Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13389321.69,
		"hash": "326637362df04d8474e57d4b4c868f6259eb9c017667f821b8d26130451fb35b"
	},
	{
		"id": "7057e5380182",
		"ts": "2026-06-25T10:13:58.657Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1429679.12,
		"hash": "7057e5380182f9968a5e8b886e4c0adec1d5a96342d785d916b290f12b1a610c"
	},
	{
		"id": "e012c562d5bd",
		"ts": "2026-06-25T10:13:58.907Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 26004827.32,
		"hash": "e012c562d5bd44f64353f6f9457adce7b3996015cd5ef7ae0a77a9788b282324"
	},
	{
		"id": "18277d11e3c1",
		"ts": "2026-06-25T10:13:59.169Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3947591.59,
		"hash": "18277d11e3c1fcf3fa22e756f8e5b921df7c5d83a6020ccf96112e7534c54d54"
	},
	{
		"id": "7c87b340b781",
		"ts": "2026-06-25T10:13:59.425Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 935075.67,
		"hash": "7c87b340b7811b7822cb83a596657ff0cad842681d7f26f8be369cf96cc022b1"
	},
	{
		"id": "287cb52744c8",
		"ts": "2026-06-25T10:13:59.681Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26004827.32,
		"hash": "287cb52744c82a776fc67a0038e3f932b407a18920ca8a5ea19f43a76780f29d"
	},
	{
		"id": "e056df7c72be",
		"ts": "2026-06-25T10:13:59.946Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2060153.79,
		"hash": "e056df7c72be823af411d07d4c22abee3bc6efd4c8ce59f3db49946daa29362c"
	},
	{
		"id": "4ad5973e6cd6",
		"ts": "2026-06-25T06:45:29.682Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 96367159.26,
		"hash": "4ad5973e6cd6bdd4ade79e3423a6259d1609e7ce60835a276f69a7da0d5a603b"
	},
	{
		"id": "af352cbd5c5e",
		"ts": "2026-06-25T06:45:32.998Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13093157,
		"hash": "af352cbd5c5ea6cd2fa65e60ce64bbe7782c96b5560ac14f545d95a4b1d2da58"
	},
	{
		"id": "9d81c4734765",
		"ts": "2026-06-25T06:45:33.470Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1447768.01,
		"hash": "9d81c4734765135f060852a33276d2750576dee5cad68489fe7c4af419317b3d"
	},
	{
		"id": "6c7b859791bb",
		"ts": "2026-06-25T06:45:33.952Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 25539109.64,
		"hash": "6c7b859791bbb12f0bf701ed7ab6e948df3d60a925455a4dc306bd7f43117c1a"
	},
	{
		"id": "bb7af4e95f69",
		"ts": "2026-06-25T06:45:34.440Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3977589.4,
		"hash": "bb7af4e95f691c3fc5c342b64abb1541f9c0dc314944c6b0337419fe347c34cb"
	},
	{
		"id": "49cd5e8f8927",
		"ts": "2026-06-25T06:45:34.708Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 920814.82,
		"hash": "49cd5e8f89276657e5fbcdae9ebcd3d55c502fb65b93e2beeca6d263e0eb250d"
	},
	{
		"id": "5c09c3a9cd06",
		"ts": "2026-06-25T06:45:34.957Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25550445.86,
		"hash": "5c09c3a9cd069ac62e93050eb0e7bd3574da1609d740e462282499788af13b5c"
	},
	{
		"id": "283c35b0124a",
		"ts": "2026-06-25T06:45:35.213Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2068093.84,
		"hash": "283c35b0124ab0bb8674d299c61062c6b87f267489383e5162391c611dfed28a"
	},
	{
		"id": "43b292722913",
		"ts": "2026-06-25T02:52:45.581Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 95109701.53,
		"hash": "43b292722913897cd14134daf3ed14dd436bdbd3b95270bb03f385a6a2fa39f1"
	},
	{
		"id": "7e5307df3456",
		"ts": "2026-06-25T02:52:45.828Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13035215.25,
		"hash": "7e5307df34568254205f389d356f3bf587122f2e68c3adba211c01d75599e91d"
	},
	{
		"id": "34c17dd2cddd",
		"ts": "2026-06-25T02:52:46.070Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1449144.93,
		"hash": "34c17dd2cddddf440983bf9db35f8e143fe37a633ba4f0d87345a65c5a20c891"
	},
	{
		"id": "9bb5283c6867",
		"ts": "2026-06-25T02:52:46.313Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24759513.07,
		"hash": "9bb5283c68678997404dd8be4cb9e309c03d4e39c22759f702bf92f0232e0e72"
	},
	{
		"id": "0f5697f65990",
		"ts": "2026-06-25T02:52:46.554Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3908813.65,
		"hash": "0f5697f659902f8911a0d0c6dd45a1fa1b7fcfa05b168fd4b353536967605564"
	},
	{
		"id": "a31744fe2637",
		"ts": "2026-06-25T02:52:46.800Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922898.43,
		"hash": "a31744fe263769af150d39582bc431216acc6e391b914f573ddd2e6f7cd77a71"
	},
	{
		"id": "7318d9b067e7",
		"ts": "2026-06-25T02:52:47.038Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24759513.07,
		"hash": "7318d9b067e75d11d392b28c5eafb2ca854df5532d82fb5b6d9b5b6aa96addc6"
	},
	{
		"id": "f812ad434682",
		"ts": "2026-06-25T02:52:47.279Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2020906.33,
		"hash": "f812ad4346829045b3b48ea9fcb312dd7148e1c5c805ad9532ed11aa7389c660"
	},
	{
		"id": "1ed05cc49f02",
		"ts": "2026-06-24T23:01:54.696Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 95153650.56,
		"hash": "1ed05cc49f0276158701318c1711a1cda2e8da6e5f4e57f86d800ef0725cc01c"
	},
	{
		"id": "5a803e07a115",
		"ts": "2026-06-24T23:01:55.040Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 13356739.22,
		"hash": "5a803e07a11564daaaec09eea7bc9832bae57a39d45d59d2314c59dbba43c6c4"
	},
	{
		"id": "3064f23b2af5",
		"ts": "2026-06-24T23:01:55.242Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1426027.43,
		"hash": "3064f23b2af5ce78bf4a371abba82c2c3f71e6bf7dd68e67da7c61159b8e045b"
	},
	{
		"id": "889d448df508",
		"ts": "2026-06-24T23:01:55.439Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24978521.5,
		"hash": "889d448df5080816000c7039afdab925615202e38f3c4da94b4aede946060f8a"
	},
	{
		"id": "f7048e8e0683",
		"ts": "2026-06-24T23:01:55.628Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3926271.49,
		"hash": "f7048e8e068340b8dd22df1e601f400d824e021ea75c05f9dd40a23d5273715e"
	},
	{
		"id": "447120e66fd6",
		"ts": "2026-06-24T23:01:55.823Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 924013.53,
		"hash": "447120e66fd6a827e143cd8e8c69825a3544cb8e57f4a1021f6b62c4f2ad47e1"
	},
	{
		"id": "12d3fa3996c3",
		"ts": "2026-06-24T23:01:56.014Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24978521.5,
		"hash": "12d3fa3996c3d0a648b8828c29449d10a575e88d0de998a82c75f1e577d148d1"
	},
	{
		"id": "06f3c92edf42",
		"ts": "2026-06-24T23:01:56.209Z",
		"symbol": "cbETH",
		"token": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2168056.12,
		"hash": "06f3c92edf42821fac702263f671d6a386372bffbd2ac59d63ba6ef97a95c7d3"
	},
	{
		"id": "34550cfc50da",
		"ts": "2026-06-24T21:20:35.068Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 95034049.96,
		"hash": "34550cfc50da414c83c9c9c28c5962cb592acbb94af29544c2d31801be967070"
	},
	{
		"id": "491e16113fc2",
		"ts": "2026-06-24T21:20:35.447Z",
		"symbol": "cbBTC",
		"token": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 12779282.82,
		"hash": "491e16113fc207a2e75a60b79a9329dfac84dfbc0a394ce6d9259a1d7ae41f5f"
	},
	{
		"id": "fa06fb6d9d80",
		"ts": "2026-06-24T21:20:35.826Z",
		"symbol": "DEGEN",
		"token": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1409635.61,
		"hash": "fa06fb6d9d80b8bbfd38a4c443dceb0d782c3719faf7c0c653f2fa3fb9c5daa6"
	},
	{
		"id": "fb2646692ef2",
		"ts": "2026-06-24T21:20:36.218Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"mintable"
		],
		"liquidityUsd": 24847919.86,
		"hash": "fb2646692ef27063b230a040dbf377da2fb5ddb1bb2f6056ad5f8adae89d6fd5"
	},
	{
		"id": "d68d3298fc72",
		"ts": "2026-06-24T21:20:36.433Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 3901502.61,
		"hash": "d68d3298fc7257f918b2381203789c6d2a7a0b519c3ef501b853e3945e17768e"
	},
	{
		"id": "135f17452564",
		"ts": "2026-06-24T21:20:36.650Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 905262.48,
		"hash": "135f17452564c9e9d077abfaeafdef2735259f96d44af4b287f334cceeeadb7e"
	},
	{
		"id": "58ec7ebd40e4",
		"ts": "2026-06-24T21:20:36.869Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24847919.86,
		"hash": "58ec7ebd40e49e332336d1d2b157a48918b0e929a346d55e3ec99478f8621171"
	}
]
