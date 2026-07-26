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
	"updatedAt": "2026-07-26T08:30:35.677Z",
	"tokensScored": 5651,
	"verdictsIssued": 5651,
	"safe": 4950,
	"risky": 448,
	"likelyRug": 253,
	"ticks": 344
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "a7a441e90c4d",
		"ts": "2026-07-26T08:30:32.314Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110327495.2,
		"hash": "a7a441e90c4d9b98df70e7f0cb7c646d61a06ef90677088298f720d83ef18169"
	},
	{
		"id": "a2af945e0982",
		"ts": "2026-07-26T08:30:32.527Z",
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
		"liquidityUsd": 15233452.07,
		"hash": "a2af945e09827a8c3ef07873f10ab3445eeb545ddae242622b183bb38ae2ab98"
	},
	{
		"id": "33b6c9c3a0fd",
		"ts": "2026-07-26T08:30:32.743Z",
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
		"liquidityUsd": 1087538.28,
		"hash": "33b6c9c3a0fd8d313dca52dde67a439b7c9e82ca14db9e5cf354b21c3e03e678"
	},
	{
		"id": "bad03e5a9eae",
		"ts": "2026-07-26T08:30:32.949Z",
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
		"liquidityUsd": 25539868.08,
		"hash": "bad03e5a9eae232d581ac213c4c751af1bb55e8d5930ac56b4a9d1ebcebca027"
	},
	{
		"id": "dd43e283c2c8",
		"ts": "2026-07-26T08:30:33.151Z",
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
		"liquidityUsd": 4964479.98,
		"hash": "dd43e283c2c86d592a5c3f8f41116fbc83fda63de9d73dc8ef62dd321c20e8e6"
	},
	{
		"id": "3e5ccd008da6",
		"ts": "2026-07-26T08:30:33.353Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 965383.71,
		"hash": "3e5ccd008da6bf76d8cdc2b87465d540d48df9336ab4495c142e4bceef21aadd"
	},
	{
		"id": "ce0803c3d755",
		"ts": "2026-07-26T08:30:33.561Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25539868.08,
		"hash": "ce0803c3d755c6389c7e04571c356ee5a42c28ad5d9c4c55b565b374e7fd3d1a"
	},
	{
		"id": "aedce261758c",
		"ts": "2026-07-26T08:30:33.763Z",
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
		"liquidityUsd": 2387984.71,
		"hash": "aedce261758c8f913084be72f5641277e5cc596ea5f3b6a9b2375a34785330bb"
	},
	{
		"id": "823a98dab81a",
		"ts": "2026-07-26T08:30:33.965Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1771992.18,
		"hash": "823a98dab81a8427096d3e6e95203a00e54ccbddbf899f1e009911a9d6ef3eee"
	},
	{
		"id": "a1c82b5853dd",
		"ts": "2026-07-26T08:30:34.167Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 122754.45,
		"hash": "a1c82b5853dd7e9a140a9a6bdaa887dfb75b691b518c2a25b16a40e38189a38f"
	},
	{
		"id": "adfe524d20b2",
		"ts": "2026-07-26T08:30:34.356Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10447322.28,
		"hash": "adfe524d20b2a313096d0d4c76c5e94c8e22f5a25d9e611fe774213f2176d664"
	},
	{
		"id": "127924efa26e",
		"ts": "2026-07-26T08:30:34.548Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 854963.12,
		"hash": "127924efa26eb1d7a5e36402eb46cea74e250bd1e57063931ba8fd70ebb44794"
	},
	{
		"id": "e3e35631b8d0",
		"ts": "2026-07-26T08:30:34.735Z",
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
		"liquidityUsd": 1352727.32,
		"hash": "e3e35631b8d0ba68c2e302f0d7f4d41e6e1441757e311d2a80c86dfd416e78a6"
	},
	{
		"id": "147edc959150",
		"ts": "2026-07-26T08:30:34.925Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 77024.58,
		"hash": "147edc959150c7e6ce626dd040e28932be52569662b4dce04d5e3efe47554153"
	},
	{
		"id": "6436a0cc7d87",
		"ts": "2026-07-26T08:30:35.112Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 179828.4,
		"hash": "6436a0cc7d8788f776f5c3752029583f362f8d7adb86203d38923c022cf7c209"
	},
	{
		"id": "a723fd95b951",
		"ts": "2026-07-26T08:30:35.299Z",
		"symbol": "HAYLORD",
		"token": "0xb200000000000000000000DfEa18f58CD9ADBC01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 50755.17,
		"hash": "a723fd95b9512f646894d89ed06409e98d822ad0d359b1bc129c8d0379274f59"
	},
	{
		"id": "d4cd4e1d9cd3",
		"ts": "2026-07-26T08:30:35.486Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4599351.25,
		"hash": "d4cd4e1d9cd3fb0bbaffc2d692606563cff1108cffe99e58be31a95b0deb2209"
	},
	{
		"id": "3aaa8e9554c6",
		"ts": "2026-07-26T08:30:35.676Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 360505.33,
		"hash": "3aaa8e9554c67d77efa1ea62c9642c7cdf41eb91aa5e12519679c92e4a11b998"
	},
	{
		"id": "68f0505f8e37",
		"ts": "2026-07-26T05:57:49.832Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110318130.46,
		"hash": "68f0505f8e37674f1722a85e00bb533fbda46bec91f7f6cba04764010328a7d6"
	},
	{
		"id": "60a5657d0433",
		"ts": "2026-07-26T05:57:50.271Z",
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
		"liquidityUsd": 14497916.11,
		"hash": "60a5657d0433578f893e2fdf7a2071c4b9ec4ad1ac0c27ae494cf95c9e720fcb"
	},
	{
		"id": "be5ed8b6ee90",
		"ts": "2026-07-26T05:57:50.718Z",
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
		"liquidityUsd": 1100870.04,
		"hash": "be5ed8b6ee90f6933f570e8b24d3ff0bf9744ab5419964eba04d92f16a81d739"
	},
	{
		"id": "76e847034b7e",
		"ts": "2026-07-26T05:57:50.950Z",
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
		"liquidityUsd": 25617049.42,
		"hash": "76e847034b7ed5bb1fac01430f6c4388b0d11dd7afdd666588778db3089145ef"
	},
	{
		"id": "a794597e0bd6",
		"ts": "2026-07-26T05:57:51.382Z",
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
		"liquidityUsd": 4964922.97,
		"hash": "a794597e0bd60251aa472e4c419483e34daa2375fe1d9187224ba478f1aaff10"
	},
	{
		"id": "a8c3b55d913f",
		"ts": "2026-07-26T05:57:51.617Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 957001.87,
		"hash": "a8c3b55d913fa64af031fcdca5be55886e993b0a17a57151d807de2be6e433f7"
	},
	{
		"id": "bab44651d2bb",
		"ts": "2026-07-26T05:57:51.851Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25617049.42,
		"hash": "bab44651d2bb5b7605b646934432aecc61284b520ea92e5e150c2a90e2c08aa1"
	},
	{
		"id": "d6294b05017d",
		"ts": "2026-07-26T05:57:52.091Z",
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
		"liquidityUsd": 2394878.12,
		"hash": "d6294b05017dae61dc944467da7e4861912b6cc7342f1a2e32dcf08d4958e447"
	},
	{
		"id": "986e21437723",
		"ts": "2026-07-26T05:57:52.326Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1759574.9,
		"hash": "986e21437723f0270e2fdb2b3d25bf3af0a30a510a0f31b8051c6f7c35022c8f"
	},
	{
		"id": "1ee82e6f4b25",
		"ts": "2026-07-26T05:57:52.556Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 123880.67,
		"hash": "1ee82e6f4b250d465bb83d1a9599e73e878f2291f46f6c36aeb351a079b9337b"
	},
	{
		"id": "8207859f64fb",
		"ts": "2026-07-26T05:57:52.775Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10410490.9,
		"hash": "8207859f64fbf1d764f87ded1808a303b1dda9892014aaf22e6d7417bc5beb00"
	},
	{
		"id": "7ce60b7b14cd",
		"ts": "2026-07-26T05:57:52.993Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 851545.7,
		"hash": "7ce60b7b14cd8a39026a7d0c69f262f7e06d7260201647af069366d8e41b6664"
	},
	{
		"id": "72effe4daf68",
		"ts": "2026-07-26T05:57:53.216Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 77347.37,
		"hash": "72effe4daf68539317d7698bdfb416c319aaabf5287824d76a083d6525559b25"
	},
	{
		"id": "4f606f98fb7f",
		"ts": "2026-07-26T05:57:53.436Z",
		"symbol": "HAYLORD",
		"token": "0xb200000000000000000000DfEa18f58CD9ADBC01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 50670.99,
		"hash": "4f606f98fb7fb5d8ba50923c309cabfe13fb29812300aabb46b7cee81d001499"
	},
	{
		"id": "162a8f8bc7f6",
		"ts": "2026-07-26T05:57:53.652Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4631318.94,
		"hash": "162a8f8bc7f6e304c2e70a7029e39f6804d51605ff69acabe73b9bc703301258"
	},
	{
		"id": "395dca96e49e",
		"ts": "2026-07-26T05:57:53.871Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 180504.79,
		"hash": "395dca96e49eae9fc1c5c7a9bd7bd07376cfb31d86b8066a6a8ccd7c4f59455e"
	},
	{
		"id": "b4659a0dbee1",
		"ts": "2026-07-26T05:57:54.089Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1066821.23,
		"hash": "b4659a0dbee1f724daa00aa88ddb6087d1e96a9dc1d021dc09589fa530e79de5"
	},
	{
		"id": "83899faa1701",
		"ts": "2026-07-26T02:53:43.467Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110032109.72,
		"hash": "83899faa170148bc197e038fea652525f29285fdfd9804a12a67e8db815b8ed2"
	},
	{
		"id": "a707e4a361ac",
		"ts": "2026-07-26T02:53:43.974Z",
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
		"liquidityUsd": 15623626.48,
		"hash": "a707e4a361ac9d2eefc8f1554493929b40e0bd1949a3af3a3db4bc18139622eb"
	},
	{
		"id": "00972d7a3857",
		"ts": "2026-07-26T02:53:44.316Z",
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
		"liquidityUsd": 1094951.62,
		"hash": "00972d7a385756c2993906eb217016b40e029032aa499533b962dfd4889d971f"
	},
	{
		"id": "6eb61d2f21a3",
		"ts": "2026-07-26T02:53:44.663Z",
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
		"liquidityUsd": 25659414.15,
		"hash": "6eb61d2f21a359923ef8e55475c32683651b1ba380dff7c82cfe59f5ad508806"
	},
	{
		"id": "ad4a7ce56a77",
		"ts": "2026-07-26T02:53:44.864Z",
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
		"liquidityUsd": 4951755.67,
		"hash": "ad4a7ce56a77c6d6836d7b0c6fbc1cb79052c7375b35a089e26300524493dde7"
	},
	{
		"id": "73f468cbcef0",
		"ts": "2026-07-26T02:53:45.068Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 949448.46,
		"hash": "73f468cbcef0a216e86da192eecd4798c5fc53e75cc55d3e0e2b152c0b1f1564"
	},
	{
		"id": "bb8db4c80362",
		"ts": "2026-07-26T02:53:45.268Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25659414.15,
		"hash": "bb8db4c8036233f60aa5e582d103cd8f03f94182b41bc6070c65564d005f9893"
	},
	{
		"id": "79816f151e4d",
		"ts": "2026-07-26T02:53:45.524Z",
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
		"liquidityUsd": 2386990.19,
		"hash": "79816f151e4d2cbba0d0802a67ac409a369c385a6a7d53db4342eedc96a20dff"
	},
	{
		"id": "553db416d8e6",
		"ts": "2026-07-26T02:53:45.738Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1732341.24,
		"hash": "553db416d8e6f5dcad24c22c24684198e23a542746954189907920d98d10a28c"
	},
	{
		"id": "679ee262e0b8",
		"ts": "2026-07-26T02:53:45.931Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 76664.09,
		"hash": "679ee262e0b89b713f3ceab0118f6f121b7098a860079a8a0c2b07351eccde59"
	},
	{
		"id": "91e84e44ef1c",
		"ts": "2026-07-26T02:53:46.133Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10093692.19,
		"hash": "91e84e44ef1cfc1537b436661b663f9629281e3bbde2b985be267d62cf058a2b"
	},
	{
		"id": "58c5fbca4d51",
		"ts": "2026-07-26T02:53:46.325Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 812655.4,
		"hash": "58c5fbca4d514c5a59d45c459a71c809ce84bc6fc969e018e57cf0883dcdee2c"
	},
	{
		"id": "50dac8d3a385",
		"ts": "2026-07-26T02:53:46.521Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1059733.35,
		"hash": "50dac8d3a385f226cff5f0330bafdb0baa9d9b6eed916b668ee32e6ba2202093"
	},
	{
		"id": "d9887da55dbc",
		"ts": "2026-07-26T02:53:46.747Z",
		"symbol": "HAYLORD",
		"token": "0xb200000000000000000000DfEa18f58CD9ADBC01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 52233.31,
		"hash": "d9887da55dbc4c20435d0003c28b9f849218aac5805b64e3cb9a3f541be166d3"
	},
	{
		"id": "180c663f5a60",
		"ts": "2026-07-26T02:53:47.120Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1836203.41,
		"hash": "180c663f5a60fac67fb5139c381b6551d2557b30ff61c102c35df4efd99723f3"
	},
	{
		"id": "9182cb2b5139",
		"ts": "2026-07-26T02:53:47.307Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4635471.89,
		"hash": "9182cb2b51394753c00cc078a2823add294b7da8658ffc3bb8bad9d25b326637"
	},
	{
		"id": "99a7159e6d2b",
		"ts": "2026-07-26T02:53:47.540Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 184580.84,
		"hash": "99a7159e6d2bc8e57b1e953e65bb4266d60d320515070bcfd0523f4ddfc81e27"
	},
	{
		"id": "8843b40e7567",
		"ts": "2026-07-25T23:57:15.745Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109937299.89,
		"hash": "8843b40e7567f9adaa572b4173b9aae638257fcc4ecf7f2ab86b8726aa440c95"
	},
	{
		"id": "7fc0f747b73e",
		"ts": "2026-07-25T23:57:16.034Z",
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
		"liquidityUsd": 16290303.29,
		"hash": "7fc0f747b73efe5736d5694dfa556bc46e4ff5d435ee0a35d43092785abc1ae2"
	},
	{
		"id": "38b12d2fce9d",
		"ts": "2026-07-25T23:57:16.287Z",
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
		"liquidityUsd": 1093353.25,
		"hash": "38b12d2fce9dd0057a1327f564c8eecd3e99fceca16792ad644d78d0851d094f"
	},
	{
		"id": "b29b9113d5f3",
		"ts": "2026-07-25T23:57:16.550Z",
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
		"liquidityUsd": 25450785.75,
		"hash": "b29b9113d5f3fe28e1066f135aa0b4d6e1d15fd99d35dd89e7335d179cb148ce"
	},
	{
		"id": "0cc712ea95cf",
		"ts": "2026-07-25T23:57:16.801Z",
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
		"liquidityUsd": 4940773.27,
		"hash": "0cc712ea95cfddfbcc55bded1891addb3d0c626fb02dbedec745a1f471db1336"
	},
	{
		"id": "dd431098b872",
		"ts": "2026-07-25T23:57:17.044Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 950229.35,
		"hash": "dd431098b87266617fd524612be84247597d3f15a05a7927e35f37285345b96a"
	},
	{
		"id": "51f258604c5f",
		"ts": "2026-07-25T23:57:17.313Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25450785.75,
		"hash": "51f258604c5f10ebf75ed0a6463ecc3d4a29f64ef65e70a3cf2d28c8a855e2a2"
	},
	{
		"id": "f1ba805a5b79",
		"ts": "2026-07-25T23:57:17.561Z",
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
		"liquidityUsd": 2381660.93,
		"hash": "f1ba805a5b79587bcda1c80b70c9e15b7350f9df39a4b8cf2e528b7a2f57b4bd"
	},
	{
		"id": "8b9b11723e0f",
		"ts": "2026-07-25T23:57:17.808Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1749322.99,
		"hash": "8b9b11723e0f0e19c2089be30a4c937f900ef73e4bf8f487dcfad7e28f7383cf"
	},
	{
		"id": "be47c21c697f",
		"ts": "2026-07-25T23:57:18.055Z",
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
		"liquidityUsd": 10109897.46,
		"hash": "be47c21c697f61df94f154aa86b8712d636b8222d960fb4eeb25d4152eb83c47"
	},
	{
		"id": "829399252652",
		"ts": "2026-07-25T23:57:18.287Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 77593.57,
		"hash": "829399252652261110be42d6ed98b2709e8d30e9fb0fb7471575e946b91a0732"
	},
	{
		"id": "ab0d172210fe",
		"ts": "2026-07-25T23:57:18.520Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 815887.04,
		"hash": "ab0d172210fefeada7a727726c27ce7ec8f476ac502bb75d52c11571aa77847d"
	},
	{
		"id": "5b3cdd6e2a18",
		"ts": "2026-07-25T23:57:18.750Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1908058.78,
		"hash": "5b3cdd6e2a18f097d1f16b773e3215900da457fba3a5e71982ff9fba073c783b"
	},
	{
		"id": "4add57e0470b",
		"ts": "2026-07-25T23:57:18.982Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3311934.79,
		"hash": "4add57e0470b842d645a5f3adbeeae740f18e3d7c3241d769623b672035c1512"
	},
	{
		"id": "0d32d82daa09",
		"ts": "2026-07-25T23:57:19.214Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1072334.78,
		"hash": "0d32d82daa098942a8da6bae329bf073d6744a1bda7529a747013a21943c2d8b"
	},
	{
		"id": "5b208692d228",
		"ts": "2026-07-25T23:57:19.448Z",
		"symbol": "HAYLORD",
		"token": "0xb200000000000000000000DfEa18f58CD9ADBC01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55302.75,
		"hash": "5b208692d2286de831951102a0adfc70794c89223f8259a896a7df2c7aa554ae"
	},
	{
		"id": "78891c8a628d",
		"ts": "2026-07-25T23:57:19.678Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4619573.5,
		"hash": "78891c8a628d5f36809d2491a6c2c3161eece7da0e6fccd4661793ec06db0d7b"
	},
	{
		"id": "49b0656d0bde",
		"ts": "2026-07-25T22:51:48.145Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109840592.85,
		"hash": "49b0656d0bde6f0c09539e243a8dc7961caa9ab0dbf58fb187e928009bcef2db"
	},
	{
		"id": "4208721dec53",
		"ts": "2026-07-25T22:51:48.495Z",
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
		"liquidityUsd": 16216867.7,
		"hash": "4208721dec53ed11990bce9a8c428e0727c334738b2acba68c2564c319696908"
	},
	{
		"id": "150c80097d96",
		"ts": "2026-07-25T22:51:48.698Z",
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
		"liquidityUsd": 1093830.82,
		"hash": "150c80097d96d39d4758ac1ca4fc3d854f7f77344ef0c150c4f8d773defa5fe7"
	},
	{
		"id": "d8a6ce1f95bb",
		"ts": "2026-07-25T22:51:48.891Z",
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
		"liquidityUsd": 25451044.01,
		"hash": "d8a6ce1f95bba9c38a01ddfa8fc3f058cf767c9268d3c4e14275d112b4d58d04"
	},
	{
		"id": "499e6d55b003",
		"ts": "2026-07-25T22:51:49.092Z",
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
		"liquidityUsd": 4943359.17,
		"hash": "499e6d55b0036ee20bb915dfdcb0c83a42a998de60a8b02412cf13c400014860"
	},
	{
		"id": "420ce29c38fa",
		"ts": "2026-07-25T22:51:49.286Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 950225.07,
		"hash": "420ce29c38fa9dcddd35f8cc28c43bf556f25167a333088d7ade3b0641601c5d"
	},
	{
		"id": "d58980d6f2d8",
		"ts": "2026-07-25T22:51:49.480Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25451044.01,
		"hash": "d58980d6f2d899e326e06acf7e24bca19c20c096978e928b337f2ba82080e58b"
	},
	{
		"id": "bee2e57a2659",
		"ts": "2026-07-25T22:51:49.685Z",
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
		"liquidityUsd": 2382435.66,
		"hash": "bee2e57a2659e2c15dc3b5a978f9b6e9ad05dcc502b307176145476fb7453655"
	},
	{
		"id": "5e2b42b65795",
		"ts": "2026-07-25T22:51:49.887Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1724915.01,
		"hash": "5e2b42b6579534fb116b4cd04d037df7c813868448fbb2464bfee526146fba39"
	},
	{
		"id": "e63b90355608",
		"ts": "2026-07-25T22:51:50.093Z",
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
		"liquidityUsd": 10090050.57,
		"hash": "e63b90355608064ca73b8a8bc541251cbafe39475d0096064a0e82339b2a4822"
	},
	{
		"id": "73b3df3b301d",
		"ts": "2026-07-25T22:51:50.308Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 77577.64,
		"hash": "73b3df3b301de8c911806115a0667ac3ff014c8d224f8ebaeeefd11a212e63ba"
	},
	{
		"id": "1a24c9af2110",
		"ts": "2026-07-25T22:51:50.500Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 3337516.14,
		"hash": "1a24c9af2110dc2dcbd1a0f1864400f75bb64eff15370b8daf71647c8d30994a"
	},
	{
		"id": "a3de40ae4989",
		"ts": "2026-07-25T22:51:50.684Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1930937.01,
		"hash": "a3de40ae49896563858f8b387de9d0bdb1540020a1747809f9e58d524ff1809a"
	},
	{
		"id": "86d5d613728c",
		"ts": "2026-07-25T22:51:50.878Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4625162.77,
		"hash": "86d5d613728cb03cbd86543b8857a789d8301c3320eb91654389104ffefd9e6a"
	},
	{
		"id": "62a0d80ae8d1",
		"ts": "2026-07-25T22:51:51.069Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185640.43,
		"hash": "62a0d80ae8d1b8f14faf1bfac2f985bd10498d477d4b499d14d91fac07ffbd47"
	},
	{
		"id": "0996827ac4bf",
		"ts": "2026-07-25T22:51:51.256Z",
		"symbol": "HAYLORD",
		"token": "0xb200000000000000000000DfEa18f58CD9ADBC01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 49822.3,
		"hash": "0996827ac4bf648e53c72407ee859a3dfdc28bd8ef823e41e38278edf539db31"
	},
	{
		"id": "5fbd4a530f92",
		"ts": "2026-07-25T22:51:51.434Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121900.69,
		"hash": "5fbd4a530f92445641fa66cdd0a268c3a875bc04e637b1aef9c486be95f5e722"
	},
	{
		"id": "09b1b5542aa5",
		"ts": "2026-07-25T21:51:45.732Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109823361.33,
		"hash": "09b1b5542aa5b299362b7c04d58535c5bc4a52a45e32139985ac08a9ce5971ce"
	},
	{
		"id": "c5e5b9a4b9ec",
		"ts": "2026-07-25T21:51:46.117Z",
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
		"liquidityUsd": 16431739.61,
		"hash": "c5e5b9a4b9ec5ef13b2d48eea651f9d40211b68aaaf07318bcc71c9f418bfeb5"
	},
	{
		"id": "ae2b2673bd0b",
		"ts": "2026-07-25T21:51:46.496Z",
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
		"liquidityUsd": 1087154.96,
		"hash": "ae2b2673bd0b5d540ba4adcf3b25e65e6baf6fe35d65910d0cbd44cd310e3d5f"
	},
	{
		"id": "4efc9138b301",
		"ts": "2026-07-25T21:51:46.876Z",
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
		"liquidityUsd": 25493056.29,
		"hash": "4efc9138b301e676fc983d0ea3233c0bc9a0195d25e108999dfcf044509799b0"
	},
	{
		"id": "c43916bf5792",
		"ts": "2026-07-25T21:51:47.273Z",
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
		"liquidityUsd": 4932601.51,
		"hash": "c43916bf579238525c33964f7973d23b45ef88a8ae4f82e122d949be1648cea1"
	},
	{
		"id": "fc35d2c78ede",
		"ts": "2026-07-25T21:51:47.487Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 950237.38,
		"hash": "fc35d2c78ede6fa032f1aae1642086101904d751c0a8b1fd5df236dd8ab17efc"
	},
	{
		"id": "9b6bfb2e6621",
		"ts": "2026-07-25T21:51:47.695Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25493056.29,
		"hash": "9b6bfb2e66218e85a69c0deda1e9c86104527cc944dff60fcc2dc9583158f13c"
	},
	{
		"id": "f68dc3610714",
		"ts": "2026-07-25T21:51:47.906Z",
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
		"liquidityUsd": 3388214.12,
		"hash": "f68dc36107146bb4c4201fea255a6b04f7393200d913c104fcc071e346f1aa7f"
	},
	{
		"id": "4c2c52fd9066",
		"ts": "2026-07-25T21:51:48.284Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1711953.08,
		"hash": "4c2c52fd906685d007657f8bff910945d1c76b6d198b3bf186587b12fefb744a"
	},
	{
		"id": "50d30e177c37",
		"ts": "2026-07-25T21:51:48.517Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 77602.66,
		"hash": "50d30e177c37a32afcaf92b3e94ffa5168f70e9194f7c85eaf8943270f7aea8a"
	},
	{
		"id": "172705b46d93",
		"ts": "2026-07-25T21:51:48.723Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10075743.29,
		"hash": "172705b46d9383ef317c4df2a8c6457021747f8fd5cf49c94a660827fb0dfa62"
	},
	{
		"id": "8ca198087f90",
		"ts": "2026-07-25T21:51:48.919Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3368570.41,
		"hash": "8ca198087f906fe77f1806bddbdd537d2ea39479c860ad92a2be63d8d246dada"
	},
	{
		"id": "2b6766aa7847",
		"ts": "2026-07-25T21:51:49.116Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1895598.85,
		"hash": "2b6766aa7847471c6fb8b16cbbeabb6067b8fa4bd795f039ac2a58cd99a92f5c"
	},
	{
		"id": "de28fa64a13c",
		"ts": "2026-07-25T21:51:49.316Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4611010.35,
		"hash": "de28fa64a13c7553d5a64a58f51e5c62f328883e2b2f4856ed9b026cd889c8c6"
	},
	{
		"id": "eb12a4b8782d",
		"ts": "2026-07-25T21:51:49.546Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185673.81,
		"hash": "eb12a4b8782d9d72f433f68575c0c9e658d5aeb4ecee0d1b6ce36fcf0cb4c89a"
	},
	{
		"id": "bbce939e8940",
		"ts": "2026-07-25T21:51:49.741Z",
		"symbol": "HAYLORD",
		"token": "0xb200000000000000000000DfEa18f58CD9ADBC01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 50691.74,
		"hash": "bbce939e89408edcfe57df3976277e9e1e2dc61fb04fa767d596bd7c9a281268"
	},
	{
		"id": "3337ed08b1ed",
		"ts": "2026-07-25T20:45:52.937Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109863534.01,
		"hash": "3337ed08b1edb4ff896a4053017ea860cd0ada01ab6c6d57312ebb70fadee376"
	},
	{
		"id": "08e9625b5244",
		"ts": "2026-07-25T20:45:53.380Z",
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
		"liquidityUsd": 16177560.12,
		"hash": "08e9625b5244e74a3e6f3e9eb847b1117da7c54c5c830c1759f19773e0138dbe"
	},
	{
		"id": "5db92d27c7ba",
		"ts": "2026-07-25T20:45:53.623Z",
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
		"liquidityUsd": 810030,
		"hash": "5db92d27c7bab83b1e5859f80cf301303c6f6a67b63c05f239ae87885ae3a5fa"
	},
	{
		"id": "689d0e2ea6f2",
		"ts": "2026-07-25T20:45:53.865Z",
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
		"liquidityUsd": 25368998.21,
		"hash": "689d0e2ea6f27f3b430878ed64494fac5c95f4307232423fb90c6d605ee4c1bd"
	},
	{
		"id": "e6d36c62b353",
		"ts": "2026-07-25T20:45:54.105Z",
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
		"liquidityUsd": 4932199.28,
		"hash": "e6d36c62b35337b4694ef4f8691e5c73b0870b6a18777608460b10413618fefe"
	},
	{
		"id": "b3904bd36724",
		"ts": "2026-07-25T20:45:54.429Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 944099.2,
		"hash": "b3904bd36724202cb10270852589c871eda79de5923d97a4e09df90c12a3afb9"
	},
	{
		"id": "4db550536c42",
		"ts": "2026-07-25T20:45:54.671Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25368998.21,
		"hash": "4db550536c42c22982f71eceefe073ee5a253a5ddf05d876b40c27f708d1dd66"
	},
	{
		"id": "190f37e69203",
		"ts": "2026-07-25T20:45:54.910Z",
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
		"liquidityUsd": 3383062.2,
		"hash": "190f37e6920345937fa2418c3cd150a44134b304c0d04eceacb5bbd9ddaceda5"
	},
	{
		"id": "b99de2b9333a",
		"ts": "2026-07-25T20:45:55.151Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 76929.49,
		"hash": "b99de2b9333ab4dcd08ea3f887372590bccb58edd429ad2d7a3a214eca929086"
	},
	{
		"id": "1bb972c0104b",
		"ts": "2026-07-25T20:45:55.392Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3384858.38,
		"hash": "1bb972c0104bf399d9227535d9809d48e83a7909d743e4e356c20509730f232a"
	},
	{
		"id": "7b2f877aa580",
		"ts": "2026-07-25T20:45:55.614Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10113390.26,
		"hash": "7b2f877aa580abd57f8def37ad530cd671edf9bb6abc9121a0efc31abcbd35e1"
	},
	{
		"id": "739e5bc77efb",
		"ts": "2026-07-25T20:45:55.840Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1923018.38,
		"hash": "739e5bc77efba067709ba626232cb556bf10ff123feb2c985f1860215bb75541"
	},
	{
		"id": "3d6bf86bb0c0",
		"ts": "2026-07-25T20:45:56.066Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1810484.07,
		"hash": "3d6bf86bb0c03ac07362c91adb3dc6ea55bb27dd877ae6531ddcfc3450eb8237"
	},
	{
		"id": "510868574437",
		"ts": "2026-07-25T20:45:56.288Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4604475.14,
		"hash": "510868574437390ba2e53daa97e2f7ea58e393e5f33537569fc230478a8a1309"
	},
	{
		"id": "973db5b1c04d",
		"ts": "2026-07-25T20:45:56.514Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185488.8,
		"hash": "973db5b1c04d419e1da536cbdc42980c1bcea01d9570f593c117eff5f5a76387"
	},
	{
		"id": "3efe58c72564",
		"ts": "2026-07-25T20:45:56.741Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 15598616.23,
		"hash": "3efe58c72564a59a4d4cd815c727fcb97f1307b460bd0bdf5c297110d0d1258c"
	},
	{
		"id": "b336a86acd68",
		"ts": "2026-07-25T19:03:35.964Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109861647.06,
		"hash": "b336a86acd68046125ad992e30a3013318d5ef895cdae2d6bb3d21c01be97be4"
	},
	{
		"id": "a8ea84383ce5",
		"ts": "2026-07-25T19:03:36.210Z",
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
		"liquidityUsd": 16926242.38,
		"hash": "a8ea84383ce5cbfaa669846f26f688e93b5cda76ab1be60f1b8290457fb90a5c"
	},
	{
		"id": "21a78868ea99",
		"ts": "2026-07-25T19:03:36.461Z",
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
		"liquidityUsd": 811732.9,
		"hash": "21a78868ea993820de098714e89c59e68272ce68c6309c06554755f056ec3c88"
	},
	{
		"id": "9dacd3268e7b",
		"ts": "2026-07-25T19:03:36.706Z",
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
		"liquidityUsd": 25413321.74,
		"hash": "9dacd3268e7bce3f9e10be1ab400ad979f5fdf22b39a4db56b2acd49d454ad91"
	},
	{
		"id": "13454d60a2e6",
		"ts": "2026-07-25T19:03:36.948Z",
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
		"liquidityUsd": 4939060.09,
		"hash": "13454d60a2e64d07c77c2083f42326e637ad273d8c15cc897c262bfa0e923577"
	},
	{
		"id": "987eb32cb0d3",
		"ts": "2026-07-25T19:03:37.195Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 944282.35,
		"hash": "987eb32cb0d350237618623dbabffbfa2813104f0d7412ce1cf583c409227c8c"
	},
	{
		"id": "038b972a059c",
		"ts": "2026-07-25T19:03:37.435Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25413320.82,
		"hash": "038b972a059cac6c44a104cb3bc7da997d3ba29dc706528d901099ee087da533"
	},
	{
		"id": "82b42dddd26f",
		"ts": "2026-07-25T19:03:37.673Z",
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
		"liquidityUsd": 3408909.69,
		"hash": "82b42dddd26fb1419f8b8f851a2f842cf07d078528ef23b8af956a1aa81b0074"
	},
	{
		"id": "f19c024c5efa",
		"ts": "2026-07-25T19:03:37.915Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 77637.25,
		"hash": "f19c024c5efa0a517252c700cfa1ee8fbbcdf75d16ae5e44e2725838c143e313"
	},
	{
		"id": "0f9799068595",
		"ts": "2026-07-25T19:03:38.157Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 185650.05,
		"hash": "0f97990685952a52d9864d8ea5b50c00221dc2f647fe5a0081c38673efece5a0"
	},
	{
		"id": "c4672907b32a",
		"ts": "2026-07-25T19:03:38.385Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1904215.94,
		"hash": "c4672907b32a5c82c734f769aeb97abb2cbd22f4a2aa4b53a1cb1a1a68dcad52"
	},
	{
		"id": "cad907adf1cd",
		"ts": "2026-07-25T19:03:38.613Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3221768.46,
		"hash": "cad907adf1cd6689da322d0fa54c061a2e41093314b77bce01ef265535924223"
	},
	{
		"id": "7c318982e36a",
		"ts": "2026-07-25T19:03:38.838Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10194101.04,
		"hash": "7c318982e36ae8d4aba42412720df161b5ead6fc6bc71b7b93973c817b080043"
	},
	{
		"id": "0078c350f875",
		"ts": "2026-07-25T19:03:39.063Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 748360.64,
		"hash": "0078c350f875624b9ffd70df29591052918c6badf117c21f3e21aad1261de71d"
	},
	{
		"id": "501ceba9e75a",
		"ts": "2026-07-25T19:03:39.291Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1824873.21,
		"hash": "501ceba9e75abdc93820ad4369f8bd53cbaae0f8b2e1b68db3f405a716ec50b3"
	},
	{
		"id": "f9482dad3c6e",
		"ts": "2026-07-25T19:03:39.515Z",
		"symbol": "msUSD",
		"token": "0x526728DBc96689597F85ae4cd716d4f7fCcBAE9d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 15583965.96,
		"hash": "f9482dad3c6ecbc192825f64361186a79238d20bc47d606465c5e0305e7c0f31"
	},
	{
		"id": "365fa015491f",
		"ts": "2026-07-25T19:03:39.740Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1911591.17,
		"hash": "365fa015491f1c7ab7bf0d0fbcab8f5470afeea8fd8163987f6e85932606b99c"
	},
	{
		"id": "762a31b0a1c7",
		"ts": "2026-07-25T17:55:56.250Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109803465.88,
		"hash": "762a31b0a1c76f9ccf3af81fa7455957175f265ccbe8675f2e611e6c23c5f32e"
	},
	{
		"id": "ed82cea0ebf6",
		"ts": "2026-07-25T17:55:56.759Z",
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
		"liquidityUsd": 16765226.26,
		"hash": "ed82cea0ebf6f8690ee773a3f76047e7badc2a6dff0e175830e8daaa36d73fb5"
	},
	{
		"id": "699af543409c",
		"ts": "2026-07-25T17:55:56.956Z",
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
		"liquidityUsd": 810162.71,
		"hash": "699af543409c26b63ded04ded71a68c8ac149256736340656aeb2c3a96fa06c2"
	},
	{
		"id": "06002fe06e73",
		"ts": "2026-07-25T17:55:57.301Z",
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
		"liquidityUsd": 25304216.77,
		"hash": "06002fe06e739ed6839d5b2eda5d121c538e6b9154fd905eef169dc181503575"
	},
	{
		"id": "3d0fed7ff830",
		"ts": "2026-07-25T17:55:57.521Z",
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
		"liquidityUsd": 4921197.86,
		"hash": "3d0fed7ff830b1c5f831fa3336dc0061caecfc3d516679c032d37e3d14dc00d8"
	},
	{
		"id": "f106130cb604",
		"ts": "2026-07-25T17:55:57.714Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 944282.35,
		"hash": "f106130cb60495ac6c891dfde945d4b7d914319b0aec422478db131818d0d6fb"
	},
	{
		"id": "8a82a0fceeaa",
		"ts": "2026-07-25T17:55:57.903Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25304216.77,
		"hash": "8a82a0fceeaaa8fc3a9b1ce0877722deadf566c0a0300f21b50100319dd4ef5d"
	},
	{
		"id": "bf3004378b9f",
		"ts": "2026-07-25T17:55:58.105Z",
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
		"liquidityUsd": 3403541.58,
		"hash": "bf3004378b9fba4e875bf9a115cb4197a11846529c11ea667ec24a529479636c"
	},
	{
		"id": "fca8ed118a76",
		"ts": "2026-07-25T17:55:58.454Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 75729.17,
		"hash": "fca8ed118a763a273d4014bd5c08f12a3966bee313752ec1d787e4fdea5cea2d"
	},
	{
		"id": "c9aa436ca028",
		"ts": "2026-07-25T17:55:58.642Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 185590.33,
		"hash": "c9aa436ca028117cd9f73155108ec4712a02f8ff70e36cee5c4d4089d530bca6"
	},
	{
		"id": "8f2850869146",
		"ts": "2026-07-25T17:55:58.828Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10124431.21,
		"hash": "8f285086914617da44616809b74af57554387ccc99ca5b5c78c6926c975bf30d"
	},
	{
		"id": "e5c9ae186103",
		"ts": "2026-07-25T17:55:59.021Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1885655.42,
		"hash": "e5c9ae1861039eca29f7200ed7409bafeec6f335c392686ef0ecb779109a03e6"
	},
	{
		"id": "19e99777bcbd",
		"ts": "2026-07-25T17:55:59.246Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3194698.23,
		"hash": "19e99777bcbda707e03536c48c8a1ecf3b7842e1ea2129dbcf1a71bc014b309a"
	},
	{
		"id": "620343ed44bd",
		"ts": "2026-07-25T17:55:59.432Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1913721.18,
		"hash": "620343ed44bd0529abcdddb8ccf582a13efaa683155abfd7352f18d4f13eab12"
	},
	{
		"id": "6fc78080c287",
		"ts": "2026-07-25T17:55:59.623Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1817195.34,
		"hash": "6fc78080c28750e5adefad99031da117593e0eac07833d1cc0ff9932bee94ea0"
	},
	{
		"id": "537bbe73c4bf",
		"ts": "2026-07-25T17:55:59.802Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4599230.38,
		"hash": "537bbe73c4bff052aa25cef67e3eaf62712edfd5b6e8f8124c973559f46a7b39"
	},
	{
		"id": "59d819d1a570",
		"ts": "2026-07-25T17:56:00.001Z",
		"symbol": "SOSO",
		"token": "0x624e2e7fDc8903165F64891672267AB0FCB98831",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 304361.98,
		"hash": "59d819d1a570fbc6550dbd48bfef41eb634d919e13db59397aed9351853c5192"
	},
	{
		"id": "bd2e8d804248",
		"ts": "2026-07-25T16:01:37.948Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109821507.1,
		"hash": "bd2e8d804248bea862da0aba66b080b3881ed3898bcb3500b6ffa2a265f55b8e"
	},
	{
		"id": "a95647877cce",
		"ts": "2026-07-25T16:01:38.206Z",
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
		"liquidityUsd": 16787398.68,
		"hash": "a95647877cce970c70317b7ad34f86d5b676cbe6328aec1eb27d8c7d2f26c8a9"
	},
	{
		"id": "592c4e2ba1a4",
		"ts": "2026-07-25T16:01:38.445Z",
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
		"liquidityUsd": 808952.57,
		"hash": "592c4e2ba1a4abcbe8071124efbf20fb74671a1a51315bc40ce7bb409ae9c9c2"
	},
	{
		"id": "4bb7e7b57160",
		"ts": "2026-07-25T16:01:38.662Z",
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
		"liquidityUsd": 25413711.82,
		"hash": "4bb7e7b57160f2e93766502962b20bb1f4697e5c12191e179f808afe8d8efe88"
	},
	{
		"id": "03033fe9b2a3",
		"ts": "2026-07-25T16:01:38.873Z",
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
		"liquidityUsd": 4921197.86,
		"hash": "03033fe9b2a3289781d6c51b9fb8baecf97a780e481a5f9bef89bd34662fb458"
	},
	{
		"id": "69d28d41be76",
		"ts": "2026-07-25T16:01:39.093Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 940721.39,
		"hash": "69d28d41be7609a57822947ae22d830d414bb7ceda0942749b988f7a37548746"
	},
	{
		"id": "83dcb992f701",
		"ts": "2026-07-25T16:01:39.399Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25413711.82,
		"hash": "83dcb992f70132f327820bdf64ec15538cbb875117d809c5fd078fb1f86a8b33"
	},
	{
		"id": "74b8474f3172",
		"ts": "2026-07-25T16:01:39.681Z",
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
		"liquidityUsd": 3394671.12,
		"hash": "74b8474f31729b08187cd0ad9f6d59c9ea1795c95f3e353b7771f1e31f9d2c53"
	},
	{
		"id": "773462185c82",
		"ts": "2026-07-25T16:01:39.926Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4602733.35,
		"hash": "773462185c822490b83b59b46491ebefb8c8c4ec39b3e3ff453d3b7d63a25b64"
	},
	{
		"id": "b9c812bb65b0",
		"ts": "2026-07-25T16:01:40.173Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 185719.65,
		"hash": "b9c812bb65b008bf094d2666f736197ef84c9140f16ba023f643c7961a51e97e"
	},
	{
		"id": "47c0bc49c3f8",
		"ts": "2026-07-25T16:01:40.409Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 77986.14,
		"hash": "47c0bc49c3f8f53f53f38451dce7163975d5c2c4111b4d806e9371abaf5884b9"
	},
	{
		"id": "8236759cf998",
		"ts": "2026-07-25T16:01:40.622Z",
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
		"liquidityUsd": 10067324.19,
		"hash": "8236759cf9985719380d193cc232574c9abd1cf44b8d4a2fb47764199da64067"
	},
	{
		"id": "029e2bcc8d0b",
		"ts": "2026-07-25T16:01:40.835Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 724313.83,
		"hash": "029e2bcc8d0bf123a2234dede7111b93ff73c517c1d301f57b6a0925d1ea0352"
	},
	{
		"id": "52ccb1ddb734",
		"ts": "2026-07-25T16:01:41.034Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3116446.33,
		"hash": "52ccb1ddb734334eb8ed68942e6008005dcfdfc37e02964166e82e8bc68dd884"
	},
	{
		"id": "7210196423da",
		"ts": "2026-07-25T16:01:41.237Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1832558.18,
		"hash": "7210196423daf724659b8f7007f3f68df5c13f2a60d0d59b589d82a85011ba6d"
	},
	{
		"id": "1c944f1dc838",
		"ts": "2026-07-25T16:01:41.439Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1831440.65,
		"hash": "1c944f1dc838d1b154a5b1b0c8ca06b03370b2ea7c555ea93abb8ef04faf2829"
	},
	{
		"id": "e66e9b777e45",
		"ts": "2026-07-25T16:01:41.637Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1908187.49,
		"hash": "e66e9b777e452256a9f6e1a685a9699e457488d256685952d7447273187ebae0"
	},
	{
		"id": "b6d4218b127a",
		"ts": "2026-07-25T14:28:22.790Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109823919.03,
		"hash": "b6d4218b127aa387dbb44ddd92ee49eba80bec8026118ed1e6663b88f2d65723"
	},
	{
		"id": "efb0b4d3367e",
		"ts": "2026-07-25T14:28:23.172Z",
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
		"liquidityUsd": 17286863.52,
		"hash": "efb0b4d3367e460d688a330401b0cf3e6b72748d3c318d90b24f2ece01ea4815"
	},
	{
		"id": "5587197060ce",
		"ts": "2026-07-25T14:28:23.388Z",
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
		"liquidityUsd": 809057.65,
		"hash": "5587197060cece028b4e1550450518d1cafcb4a9984a36a04c308d2ee356866d"
	},
	{
		"id": "eb73c28617c4",
		"ts": "2026-07-25T14:28:23.640Z",
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
		"liquidityUsd": 25504261.95,
		"hash": "eb73c28617c45cb3b92f983985c0905f10d9840b06a4dee41b1933ee707c04d9"
	},
	{
		"id": "48b3ff654173",
		"ts": "2026-07-25T14:28:23.847Z",
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
		"liquidityUsd": 4931486.6,
		"hash": "48b3ff654173a768560a41510a8891b329b42e0c2d149ff8bbaa993b400045c9"
	},
	{
		"id": "547a4121e88b",
		"ts": "2026-07-25T14:28:24.060Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 929179.82,
		"hash": "547a4121e88bc252cb3411fb586caaa50b96bcdc91492d7a1e7d0c61cd4cb00d"
	},
	{
		"id": "6b2cb97eedd3",
		"ts": "2026-07-25T14:28:24.267Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25504261.95,
		"hash": "6b2cb97eedd3ff3ac0c71cce34f07884a7309f7947d7e64d4f778f2159390a5d"
	},
	{
		"id": "b9c2fc5001b1",
		"ts": "2026-07-25T14:28:24.477Z",
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
		"liquidityUsd": 2443989.39,
		"hash": "b9c2fc5001b1f3e0d0185749588d36ee2ca2119cb64afe353f8ecdab9cc31744"
	},
	{
		"id": "6fc622595060",
		"ts": "2026-07-25T14:28:24.681Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 185705.35,
		"hash": "6fc622595060790fe9c31b81dc1f921c2b5adcf68e22879baf28b2584717f605"
	},
	{
		"id": "7a7ae81cddd4",
		"ts": "2026-07-25T14:28:24.889Z",
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
		"liquidityUsd": 10109126.34,
		"hash": "7a7ae81cddd44e04546adc1c3092fc4d2e4d9489fe371301dfeb3aa1810fd368"
	},
	{
		"id": "396c9405b5af",
		"ts": "2026-07-25T14:28:25.094Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4603721.35,
		"hash": "396c9405b5aff2a363a1d6cce92203e736fa25fc3cb16502d72079006962e11d"
	},
	{
		"id": "ee9405be805a",
		"ts": "2026-07-25T14:28:25.289Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3086336.88,
		"hash": "ee9405be805a99a94ad6c149038f45514c7b746dd856111952340d119b305561"
	},
	{
		"id": "4f242935e601",
		"ts": "2026-07-25T14:28:25.490Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 721991.2,
		"hash": "4f242935e6016b920b66ec335adadeffab91bee1e4ead1665e01bd6b09876aff"
	},
	{
		"id": "88f6254f6581",
		"ts": "2026-07-25T14:28:25.684Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1837873.74,
		"hash": "88f6254f6581d0d4c061abc7e32bd1e16b2f096003eb090a8df11fcdd55605be"
	},
	{
		"id": "15d9126f520b",
		"ts": "2026-07-25T14:28:25.877Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1835143.07,
		"hash": "15d9126f520b8c8eb8d3fa2dd13235557dbbc759a64857a13ecf808b8ce808bf"
	},
	{
		"id": "1962dd7f9c2f",
		"ts": "2026-07-25T14:28:26.085Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1919292.15,
		"hash": "1962dd7f9c2ff15bdbec9778c4aacaf7cef469c2099fbf93e371d4895097559a"
	},
	{
		"id": "d17ab7ce641c",
		"ts": "2026-07-25T14:28:26.283Z",
		"symbol": "SOSO",
		"token": "0x624e2e7fDc8903165F64891672267AB0FCB98831",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 294875.53,
		"hash": "d17ab7ce641cb4baaec028e9709a2404d0c16b69d2a82f8d0ae8e50519f88ecb"
	},
	{
		"id": "87bb3acce9ea",
		"ts": "2026-07-25T12:02:10.393Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109442858.2,
		"hash": "87bb3acce9eaf0861c702cff1952ccf426aa893831681c384bd301c922d0c77c"
	},
	{
		"id": "ef59194e6bae",
		"ts": "2026-07-25T12:02:10.847Z",
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
		"liquidityUsd": 16621680.93,
		"hash": "ef59194e6baef3121732f9a9d6844ee29062970837a19d3fb176bd965d1a9c02"
	},
	{
		"id": "9a71e5eaf608",
		"ts": "2026-07-25T12:02:11.095Z",
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
		"liquidityUsd": 805009.26,
		"hash": "9a71e5eaf608e38b0b9ee48b5cbd1e67628c76e5e6cc72c31f8a559e1f56d2ae"
	},
	{
		"id": "694ff28dba20",
		"ts": "2026-07-25T12:02:11.356Z",
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
		"liquidityUsd": 25475206.76,
		"hash": "694ff28dba206a96156a45111ee17f8e55b2565583d35697f805b6eab13ae6b0"
	},
	{
		"id": "52f3c2fe476e",
		"ts": "2026-07-25T12:02:11.602Z",
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
		"liquidityUsd": 4921114.13,
		"hash": "52f3c2fe476e3496eeb6d6e3c3b5a4d4da8f6fe3a351e5fce95ac117fa6699d4"
	},
	{
		"id": "71f96f39aae2",
		"ts": "2026-07-25T12:02:11.842Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 929179.82,
		"hash": "71f96f39aae23ccd69002fd7411702da5dae40a17f03ea3ba90c78f1f5e715ba"
	},
	{
		"id": "607d328e4d2a",
		"ts": "2026-07-25T12:02:12.085Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25475206.76,
		"hash": "607d328e4d2aaa67d0cd58a0a3e22ba7c97e7a9f9ab30b6adaa19414ab562221"
	},
	{
		"id": "006cd07f7f27",
		"ts": "2026-07-25T12:02:12.330Z",
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
		"liquidityUsd": 2433608.72,
		"hash": "006cd07f7f2719d7e1f02144fde3edf79b626b47479d562d16fa7ef0e19bd6fe"
	},
	{
		"id": "5ae90211d5f1",
		"ts": "2026-07-25T12:02:12.569Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3144852.72,
		"hash": "5ae90211d5f121043478afdb83624a2e2d4e89fbb43d7fe0405b47ad7f23edc5"
	},
	{
		"id": "1d53e58b7de5",
		"ts": "2026-07-25T12:02:12.818Z",
		"symbol": "VCNT",
		"token": "0xdCf5130274753c8050aB061B1a1DCbf583f5bFd0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 186162.36,
		"hash": "1d53e58b7de5e11c883ed8f825e9ad748200510c4ad6d57d4dd21aefa2bf5e69"
	},
	{
		"id": "ecb77f0d8543",
		"ts": "2026-07-25T12:02:13.042Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4528469,
		"hash": "ecb77f0d85437a89df1f79e21c10185c21f6582f14ff109b3cabda9f977f2b8b"
	},
	{
		"id": "41481825d376",
		"ts": "2026-07-25T12:02:13.268Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9887074.58,
		"hash": "41481825d37687ab0a7dadf5ccd8bf0a43fc75854c302410437eaed2b0a2d42b"
	},
	{
		"id": "35b07880a475",
		"ts": "2026-07-25T12:02:13.497Z",
		"symbol": "AUTONO",
		"token": "0xB3D7e0c3C39A1D3F1B304663065A2F83Ddf56d8e",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 703980.5,
		"hash": "35b07880a4755d08c8c4dd2a2897a2e747d5e7acc95a86052d42cd0ad29868dc"
	},
	{
		"id": "a2ed01082f07",
		"ts": "2026-07-25T12:02:13.722Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 76550.57,
		"hash": "a2ed01082f07905844c059d92df681200df5d50776d91585c1170d4c8e9835e3"
	}
]
