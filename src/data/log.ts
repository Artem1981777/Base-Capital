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
	"updatedAt": "2026-10-30T06:44:31.346Z",
	"tokensScored": 21804,
	"verdictsIssued": 21804,
	"safe": 18597,
	"risky": 1537,
	"likelyRug": 1670,
	"ticks": 1228
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "4ced1164ab5f",
		"ts": "2026-10-29T07:57:26.319Z",
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
		"liquidityUsd": 8111453.68,
		"hash": "4ced1164ab5fc5de565987f0881d04d1aef3386dda74be3903e7d594414a2208"
	},
	{
		"id": "9bfee4eed83e",
		"ts": "2026-10-29T07:57:26.522Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 160428.4,
		"hash": "9bfee4eed83e8802871d8947268d3c6bc07c666a43fe8a76abf9b60894e68949"
	},
	{
		"id": "f748e4b004ea",
		"ts": "2026-10-29T07:57:26.718Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1832798.8,
		"hash": "f748e4b004ea419c75ecce9c953a32b25fb779bacbe20397b6e7e4fe48204d79"
	},
	{
		"id": "457977e32f00",
		"ts": "2026-10-29T07:57:26.936Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 236102.86,
		"hash": "457977e32f00c3fa548b775bf75961e33e681cf4bfebb986583593b7910e075d"
	},
	{
		"id": "91d2c77602da",
		"ts": "2026-10-29T07:57:27.148Z",
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
		"liquidityUsd": 2936574.97,
		"hash": "91d2c77602da90ec57ce2ae72e85ba77a5ffdd45d153ac08f6092e458fa6381f"
	},
	{
		"id": "448bd8faa8fa",
		"ts": "2026-10-29T07:57:27.348Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3604058.65,
		"hash": "448bd8faa8fa5be68376c24f81a5506a7a8ca6fc6e74a364db1dda7731b11019"
	},
	{
		"id": "952ab1f6475d",
		"ts": "2026-10-29T07:57:27.544Z",
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
		"liquidityUsd": 1041670.67,
		"hash": "952ab1f6475d3d6b1954a47014517cdb1fdefd22b94e829f526655b49c2689ac"
	},
	{
		"id": "200dbd88f0c7",
		"ts": "2026-10-29T07:57:27.741Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4153853.07,
		"hash": "200dbd88f0c7f5357840a0d91e154ec916827312178ccade0e0a853205aefcba"
	},
	{
		"id": "df0c31fdec2a",
		"ts": "2026-10-29T07:57:27.936Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1743448.97,
		"hash": "df0c31fdec2abdadfe4f2fb57bc47956eda680a0ea4239d97e0f3255c7864bcb"
	},
	{
		"id": "fc49fbc0f3e1",
		"ts": "2026-10-29T01:29:38.115Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 158242131.55,
		"hash": "fc49fbc0f3e1845e8d71f4215442742eb04e7c3280af55a4bdb05aac7c89e1e9"
	},
	{
		"id": "60801bbd01f0",
		"ts": "2026-10-29T01:29:38.560Z",
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
		"liquidityUsd": 16525668.57,
		"hash": "60801bbd01f073b0203a1c2b68ce4ae4dec079f47da283e3416cb879270f180b"
	},
	{
		"id": "1e1ca52bd2a0",
		"ts": "2026-10-29T01:29:38.804Z",
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
		"liquidityUsd": 260152.28,
		"hash": "1e1ca52bd2a0b3cf81c5cfc4effd54bfc6c20f577d9c0ea5a90f96bedfa1c39b"
	},
	{
		"id": "22ea81d53257",
		"ts": "2026-10-29T01:29:39.050Z",
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
		"liquidityUsd": 6640280.19,
		"hash": "22ea81d5325703ff5f53d6a17def9118b3714b50b76f3ff1a3dd62ccfb401728"
	},
	{
		"id": "324164cce250",
		"ts": "2026-10-29T01:29:39.306Z",
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
		"liquidityUsd": 1292394.1,
		"hash": "324164cce25050f48993059d797b3ae9784e62b325ca9853fea0b3a710b6fd8f"
	},
	{
		"id": "5e58cda1da25",
		"ts": "2026-10-29T01:29:39.566Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1129930.39,
		"hash": "5e58cda1da257de86b1b4fea5e696f8196197144ae8ad3cc88c788eec243f361"
	},
	{
		"id": "56e0266ea41f",
		"ts": "2026-10-29T01:29:39.809Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6640280.19,
		"hash": "56e0266ea41f7b5cdffd39f464fc27594f426ccdf5f9b266bc516ca3c870b52f"
	},
	{
		"id": "d4c2deb15ba7",
		"ts": "2026-10-29T01:29:40.059Z",
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
		"liquidityUsd": 1837716.56,
		"hash": "d4c2deb15ba71ec6663321c285a7f20f9d75f4b9e73abee133c7aa4cf839fecf"
	},
	{
		"id": "c1bea0ffd733",
		"ts": "2026-10-29T01:29:40.326Z",
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
		"liquidityUsd": 2447332.04,
		"hash": "c1bea0ffd7335a48e78b3823b3c09ac64fd9ff74b2e91e7e18eb1bc1db15cdda"
	},
	{
		"id": "8fa00b2386f8",
		"ts": "2026-10-29T01:29:40.576Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1109486.11,
		"hash": "8fa00b2386f8244eedc6ab1cd085f867f9d8a6d901fcd71c21995f265cff2ff9"
	},
	{
		"id": "14c7101cd1e0",
		"ts": "2026-10-29T01:29:40.801Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 152450.62,
		"hash": "14c7101cd1e0e603eeb00a0ccb6451da9fe46eddf121b4807e1b5712c0c13f08"
	},
	{
		"id": "c42ab0f863d0",
		"ts": "2026-10-29T01:29:41.060Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1822885.45,
		"hash": "c42ab0f863d04e4c2d5de19ec27cf73bb080093b632748c7ed8e4853d438caa6"
	},
	{
		"id": "2256184ecca3",
		"ts": "2026-10-29T01:29:41.296Z",
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
		"liquidityUsd": 8243195.18,
		"hash": "2256184ecca326156fc24a09d37b7d3ece81c616d49f81bb4a9e8c20752c8f6a"
	},
	{
		"id": "7a236f0410fe",
		"ts": "2026-10-29T01:29:41.521Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246347.09,
		"hash": "7a236f0410fecda0638a87676c74344aa0ed0b63a7982b7f62b0e2ce931e3ea5"
	},
	{
		"id": "02c3574f7700",
		"ts": "2026-10-29T01:29:41.744Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1772219.95,
		"hash": "02c3574f7700f6e9f109e74554571798f85edd729d06cf24b5395f682823f43c"
	},
	{
		"id": "8fec7bf47025",
		"ts": "2026-10-29T01:29:41.967Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3647965.13,
		"hash": "8fec7bf47025f7ee398011daec3fe68f9edcf2e3153cae86949269a297760407"
	},
	{
		"id": "5ff3524e32fb",
		"ts": "2026-10-29T01:29:42.191Z",
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
		"liquidityUsd": 1054980.17,
		"hash": "5ff3524e32fbc5ea010cea94a9cf3df24f8d25d9aa5e60a230b4c985a2fc3136"
	},
	{
		"id": "4009a9fd7d8b",
		"ts": "2026-10-29T01:29:42.414Z",
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
		"liquidityUsd": 3028136.38,
		"hash": "4009a9fd7d8bda5d076c4f8ef22fcc8a01b554921aa25f582044f3c62196b204"
	},
	{
		"id": "ed1fc42a9030",
		"ts": "2026-10-29T01:29:42.642Z",
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
		"liquidityUsd": 223454.6,
		"hash": "ed1fc42a9030d2acfddd3163d086aa95cbf132eba91d8c882ca4bb7bc66e00a6"
	},
	{
		"id": "2cecb4265f0f",
		"ts": "2026-10-28T21:31:09.259Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 158655444.69,
		"hash": "2cecb4265f0f8c98d56a7e0f9eb1019fcfcc4d1fc50238d5776ffa199b9cb6ee"
	},
	{
		"id": "c9b2e294ab1e",
		"ts": "2026-10-28T21:31:09.502Z",
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
		"liquidityUsd": 16698428.56,
		"hash": "c9b2e294ab1e4d6422f6c9b90da65ac196c2f6078922d8a1fe6d76df32c57f21"
	},
	{
		"id": "57692d550247",
		"ts": "2026-10-28T21:31:10.081Z",
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
		"liquidityUsd": 261585.5,
		"hash": "57692d5502476fb30697cc82520e7d007bad41e80f89d5af4957dac9edfd5e93"
	},
	{
		"id": "d054d6cf5556",
		"ts": "2026-10-28T21:31:10.319Z",
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
		"liquidityUsd": 6716831.45,
		"hash": "d054d6cf55565f3dcafa1e9e5058b15fb31d69e4fa0dcefef91e77f7492aa20d"
	},
	{
		"id": "196089db8cfd",
		"ts": "2026-10-28T21:31:10.551Z",
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
		"liquidityUsd": 1296883.63,
		"hash": "196089db8cfd3c70526bfebacc89ed3a2f6a38fdde924ffd6fce4c619dc41462"
	},
	{
		"id": "2652dd7c5254",
		"ts": "2026-10-28T21:31:10.820Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1134601.02,
		"hash": "2652dd7c52545dc783ea5c7b6e3d52b828dfca862c89219a195e798969619462"
	},
	{
		"id": "cb9586dce690",
		"ts": "2026-10-28T21:31:11.028Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6716831.45,
		"hash": "cb9586dce690f2ee3274dd393f8d41c7c371cf29729dbf3c4781d5a10705dc40"
	},
	{
		"id": "957800063f02",
		"ts": "2026-10-28T21:31:11.261Z",
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
		"liquidityUsd": 1810443.07,
		"hash": "957800063f028a5e6c0f48e6fcb51003b6a830c9421dea4b6e6ed2fb3932a55a"
	},
	{
		"id": "9612025a85a6",
		"ts": "2026-10-28T21:31:11.500Z",
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
		"liquidityUsd": 2452270.19,
		"hash": "9612025a85a688c8de90a2c316bdf69210f14d5e51946c5863a78910e413cc12"
	},
	{
		"id": "e86d0f511d94",
		"ts": "2026-10-28T21:31:11.712Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 158676.26,
		"hash": "e86d0f511d9493e12007f038c199ffca35c2c1109199e01540b1042cd278241b"
	},
	{
		"id": "4c2101f03da1",
		"ts": "2026-10-28T21:31:11.943Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1131599.32,
		"hash": "4c2101f03da1f4ae746b93cfc31abdcd8b348244c388d49a8546daced820a496"
	},
	{
		"id": "36e1f8696767",
		"ts": "2026-10-28T21:31:12.151Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1829378.2,
		"hash": "36e1f8696767abf1d315cd35fadbb58d7a165c73898c3989145e01b479fe138f"
	},
	{
		"id": "7d758798aaa7",
		"ts": "2026-10-28T21:31:12.375Z",
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
		"liquidityUsd": 8272524.96,
		"hash": "7d758798aaa70c07b28bf4990bb2a4f5a4e4fdb4c6a5016a86a26778cfb5dcfe"
	},
	{
		"id": "dd62e2e19b60",
		"ts": "2026-10-28T21:31:12.574Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1784858.07,
		"hash": "dd62e2e19b60a97e2431f2f1ea3eb6dfd136a1041e761605c09ec4587594201f"
	},
	{
		"id": "80fc717e4a14",
		"ts": "2026-10-28T21:31:12.784Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244485.55,
		"hash": "80fc717e4a14a7bc7eef75a28a9418308cd125d483a29f310ecd9952607b2c08"
	},
	{
		"id": "3c81dfa9c8d9",
		"ts": "2026-10-28T21:31:13.015Z",
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
		"liquidityUsd": 3076818.93,
		"hash": "3c81dfa9c8d91c41b289fef0f8fdad99c5a8d64e2e36b6adf9b1be1b22169bb9"
	},
	{
		"id": "6238f1602a01",
		"ts": "2026-10-28T21:31:13.217Z",
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
		"liquidityUsd": 1057169.55,
		"hash": "6238f1602a01710482deac03c14ab71c70aeaa823b7d8347f8824238f8b286f4"
	},
	{
		"id": "7c12077d9d7f",
		"ts": "2026-10-28T21:31:13.415Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3659658.3,
		"hash": "7c12077d9d7f81c4090c955fa8eb169851df1dc42661937f357e8516b994147b"
	},
	{
		"id": "a7042b23e934",
		"ts": "2026-10-28T21:31:13.641Z",
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
		"liquidityUsd": 224796.68,
		"hash": "a7042b23e934cf61ea397c1e256ab06a316b6abe6ff0d85150cdb49e5a933390"
	},
	{
		"id": "d4b73ea02190",
		"ts": "2026-10-28T16:56:48.999Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157268500.12,
		"hash": "d4b73ea02190de19b3685696848fe2ff4d692877a2f3b2218783c725e5d30921"
	},
	{
		"id": "01fff72d5bb0",
		"ts": "2026-10-28T16:56:49.218Z",
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
		"liquidityUsd": 16415621.05,
		"hash": "01fff72d5bb058b762303460d5e45c6c75c5d9be20a53bba3c7c7498b408ce64"
	},
	{
		"id": "72d87609cfcb",
		"ts": "2026-10-28T16:56:49.442Z",
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
		"liquidityUsd": 262673.4,
		"hash": "72d87609cfcbdf97ca9d491296adca6ef534c015a638e1c4a88a4d4fbd2b72d2"
	},
	{
		"id": "6c13c746536a",
		"ts": "2026-10-28T16:56:49.662Z",
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
		"liquidityUsd": 6794821.37,
		"hash": "6c13c746536ace08ebcbdd52b740f3cd5a2773f8996a47f4d8ceb944c958284f"
	},
	{
		"id": "2beee66868e9",
		"ts": "2026-10-28T16:56:49.884Z",
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
		"liquidityUsd": 1269954.6,
		"hash": "2beee66868e9723c122b066effbde68a3c1911052ebbad50658322433393533e"
	},
	{
		"id": "c794ccd5140c",
		"ts": "2026-10-28T16:56:50.115Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1104988.85,
		"hash": "c794ccd5140cc6c15e99b239048b35d6f96d7e29d88bdc1653c240f4dd617d9d"
	},
	{
		"id": "7a4cc59433dd",
		"ts": "2026-10-28T16:56:50.356Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6794139.75,
		"hash": "7a4cc59433dd64b2fa9419753abb5a99dce7560e793d1040abac9697eb4173f8"
	},
	{
		"id": "a3fe75375751",
		"ts": "2026-10-28T16:56:50.568Z",
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
		"liquidityUsd": 1726611.23,
		"hash": "a3fe75375751e94b539a4187e7d1c70a9a68ac79e1bd76d73d8df4064994228b"
	},
	{
		"id": "e5d6c5629e36",
		"ts": "2026-10-28T16:56:50.775Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h"
		],
		"liquidityUsd": 256025.23,
		"hash": "e5d6c5629e368122ec9c8930c31d2e95e344b7d31d3152196622213d4f1f39c8"
	},
	{
		"id": "03b00b076815",
		"ts": "2026-10-28T16:56:50.991Z",
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
		"liquidityUsd": 2454509.96,
		"hash": "03b00b076815c1f6fc1cb8791614f6ed1abfe87859df2344af6136e108aad11c"
	},
	{
		"id": "65b509304ece",
		"ts": "2026-10-28T16:56:51.189Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1110376.03,
		"hash": "65b509304eceaf9fbd3eaf599951e06c2f457f636ac2d5a46bcdad4f30ed3e23"
	},
	{
		"id": "9212081d548d",
		"ts": "2026-10-28T16:56:51.387Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1825946.81,
		"hash": "9212081d548d7dcbd0a91ede2048f44237cd4cc514ab530ded715a9263fc85a5"
	},
	{
		"id": "edd0ef0fe96c",
		"ts": "2026-10-28T16:56:51.592Z",
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
		"liquidityUsd": 470646.76,
		"hash": "edd0ef0fe96cd566f33af37d4476eae891f398bd2f7d655fce26dd4c806b3223"
	},
	{
		"id": "04533e00a7d4",
		"ts": "2026-10-28T16:56:51.798Z",
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
		"liquidityUsd": 1053045.48,
		"hash": "04533e00a7d494686a5de77fd6b48d4f4f27167fabb2f299581aae367100d216"
	},
	{
		"id": "fcfc72450217",
		"ts": "2026-10-28T16:56:51.996Z",
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
		"liquidityUsd": 8239810.22,
		"hash": "fcfc724502172298ecb00497f9445574ac66b23c70f7a98b82191b847b5f723d"
	},
	{
		"id": "c7f0f265356f",
		"ts": "2026-10-28T16:56:52.225Z",
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
		"liquidityUsd": 3001717.21,
		"hash": "c7f0f265356fa8888a24d8a5f420e045d92e19299e97cc1aea01c30fbf51124c"
	},
	{
		"id": "f5fa53de2054",
		"ts": "2026-10-28T16:56:52.432Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4583495.46,
		"hash": "f5fa53de2054ee1b383777267d467aec1b685d8dc504a7acb085ce2aaa66ed6f"
	},
	{
		"id": "7959c541429a",
		"ts": "2026-10-28T16:56:52.638Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1772355.86,
		"hash": "7959c541429a0a55115ea4216d865b6be98e1b81fc1de49bc064d4681cede3c7"
	},
	{
		"id": "3df17b8a1b1c",
		"ts": "2026-10-28T16:56:52.844Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3691041.22,
		"hash": "3df17b8a1b1c79f14801420d640680ca613ddc6468fd22edc39d0d5f05b43464"
	},
	{
		"id": "e81e3aad08f7",
		"ts": "2026-10-28T10:17:45.936Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 158524828.06,
		"hash": "e81e3aad08f7850a4ad00ba6a7351e7b950f6e85c8cce52a5f43472662066dd9"
	},
	{
		"id": "05583700a1c5",
		"ts": "2026-10-28T10:17:46.254Z",
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
		"liquidityUsd": 16761967.04,
		"hash": "05583700a1c5f0e5dfc19827d8f6eb72eb6f22abd9782f57ae60d324a973cfc0"
	},
	{
		"id": "1ffe7ea1d94d",
		"ts": "2026-10-28T10:17:46.497Z",
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
		"liquidityUsd": 266528.7,
		"hash": "1ffe7ea1d94d4fd16125ee4bd4908e82539a519fe02db43393ad994589df08f6"
	},
	{
		"id": "a9bd94c412c5",
		"ts": "2026-10-28T10:17:46.697Z",
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
		"liquidityUsd": 7235654.87,
		"hash": "a9bd94c412c54bef31a7a4b556e2c72d62cd1d79fe95903d5184dbc98bde7826"
	},
	{
		"id": "ba757b4edd4c",
		"ts": "2026-10-28T10:17:46.905Z",
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
		"liquidityUsd": 1264787.95,
		"hash": "ba757b4edd4ca156ce6ce049065ba976e5d832a3c809c1a492ec35e5ca7723bd"
	},
	{
		"id": "fbedbd63699a",
		"ts": "2026-10-28T10:17:47.089Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1130100.16,
		"hash": "fbedbd63699a018da8d16e55df64c720e15e587b21ae8d780073ff3c6ae67e9c"
	},
	{
		"id": "435133c2ad16",
		"ts": "2026-10-28T10:17:47.285Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 7235654.87,
		"hash": "435133c2ad164d66766f9a5f4e7432b4e133fe60dc8bc989aad58801df80d870"
	},
	{
		"id": "a13019f091ca",
		"ts": "2026-10-28T10:17:47.482Z",
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
		"liquidityUsd": 1737789.19,
		"hash": "a13019f091caa961dd99af9aee91db52fe6539c644223104638081b832c89f72"
	},
	{
		"id": "0685a3a84ce8",
		"ts": "2026-10-28T10:17:47.678Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h"
		],
		"liquidityUsd": 256025.23,
		"hash": "0685a3a84ce89f14c49ced9c835d28c45eab01cf892e20fa1dfa821d636202a4"
	},
	{
		"id": "fe6af7399ac0",
		"ts": "2026-10-28T10:17:47.878Z",
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
		"liquidityUsd": 2493749.1,
		"hash": "fe6af7399ac0fbae21f916d7a248e9a04134012c3cf597e5ff231dc70c58e3e3"
	},
	{
		"id": "9721f4f1ee4e",
		"ts": "2026-10-28T10:17:48.076Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1168170.85,
		"hash": "9721f4f1ee4e0a49868326a6f7c584906dbe6a2d7629d946dd899ec97af561e0"
	},
	{
		"id": "6ba8a9e205ac",
		"ts": "2026-10-28T10:17:48.260Z",
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
		"liquidityUsd": 492179.92,
		"hash": "6ba8a9e205ac5c866705ce13e528abd936bd45a47a37d2e03a4154df17377022"
	},
	{
		"id": "8200f954a856",
		"ts": "2026-10-28T10:17:48.471Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1842996.79,
		"hash": "8200f954a856833080a0f7984ab2f440742a721dd0896a1d5653d564707b6ab7"
	},
	{
		"id": "2009ff21bd26",
		"ts": "2026-10-28T10:17:48.677Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4677631.01,
		"hash": "2009ff21bd26672ca942cc5fb508055294b79d6d788b126aee5cade7be97ff3d"
	},
	{
		"id": "8a79ac77203b",
		"ts": "2026-10-28T10:17:48.865Z",
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
		"liquidityUsd": 8366525.83,
		"hash": "8a79ac77203bcbddc5610172a3d54123f65fce49a02e9a62e21138c55d4d0d74"
	},
	{
		"id": "769c5671ef4b",
		"ts": "2026-10-28T10:17:49.076Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 507646.32,
		"hash": "769c5671ef4b190e2774ac7e7ca1c6ed6d899b4a36ecedb014d2e8faf9551fb0"
	},
	{
		"id": "bb026477b7a5",
		"ts": "2026-10-28T10:17:49.267Z",
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
		"liquidityUsd": 1051196.21,
		"hash": "bb026477b7a51f3bb1d776281845138c0ec2ecb4bc5d3e2f7e746b80db762421"
	},
	{
		"id": "9534628bc933",
		"ts": "2026-10-28T10:17:49.463Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 531704.91,
		"hash": "9534628bc93325e885bb64dece697775121f1bc9eae09c9e42f4fc28b0118aac"
	},
	{
		"id": "9faf2fd49c5e",
		"ts": "2026-10-28T10:17:49.663Z",
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
		"liquidityUsd": 3046869.62,
		"hash": "9faf2fd49c5e86e308b3f96cf6d8daf961985e9abd6294e64f35454af00d9e49"
	},
	{
		"id": "1cc39e942bc5",
		"ts": "2026-10-28T03:48:36.044Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 158236587.77,
		"hash": "1cc39e942bc5dc86be85c907d65bf0d6b2a67d41207fbf429dd0b155e0155a8a"
	},
	{
		"id": "e2d91ce788bc",
		"ts": "2026-10-28T03:48:36.258Z",
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
		"liquidityUsd": 16721716.44,
		"hash": "e2d91ce788bce4b8c632f56b849a7806d993296c8a71993baa4e9fb0bbd01d5b"
	},
	{
		"id": "989004b0ad53",
		"ts": "2026-10-28T03:48:36.470Z",
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
		"liquidityUsd": 262873.5,
		"hash": "989004b0ad53e9be94c3c835bf6ee5e10abdaa3965a34f646c9d8e8aecc7ddbd"
	},
	{
		"id": "4daed4289e34",
		"ts": "2026-10-28T03:48:36.736Z",
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
		"liquidityUsd": 6950197.06,
		"hash": "4daed4289e34469e9d8b4cf4b56d9b983d72294eeda381c5b35e992a7f1fbb3d"
	},
	{
		"id": "6e77088cb6ec",
		"ts": "2026-10-28T03:48:36.932Z",
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
		"liquidityUsd": 1263694.1,
		"hash": "6e77088cb6ecdb5e37ad529877e357963ad89cbc8da6fea2bb42127624a88d33"
	},
	{
		"id": "413fda8653bf",
		"ts": "2026-10-28T03:48:37.150Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1133076.61,
		"hash": "413fda8653bfb7e663e61eb875e3b9ade05288c2a3ce27b470c1c90975fc0d13"
	},
	{
		"id": "4fa7a9c66d0d",
		"ts": "2026-10-28T03:48:37.344Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6950197.06,
		"hash": "4fa7a9c66d0d0c1d5a09fd7d0566acd1d43087ef899b9a01c4cbe7a85a36ceeb"
	},
	{
		"id": "cef443fc5549",
		"ts": "2026-10-28T03:48:37.553Z",
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
		"liquidityUsd": 1732903.59,
		"hash": "cef443fc554956184ea7fb7f07fbd57dfaa624e6a8c3d16825fac658934b77d0"
	},
	{
		"id": "31392f230180",
		"ts": "2026-10-28T03:48:37.745Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h"
		],
		"liquidityUsd": 256025.23,
		"hash": "31392f230180b4940f65beba81f5fe167be5f8800334afafaf6fb716db0eab31"
	},
	{
		"id": "59704ea35d8f",
		"ts": "2026-10-28T03:48:37.968Z",
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
		"liquidityUsd": 2465654.86,
		"hash": "59704ea35d8fac877c5875539658f44cb6f79ebb7f78159b145aec13ec75dd38"
	},
	{
		"id": "76dcf520a781",
		"ts": "2026-10-28T03:48:38.176Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1837603.19,
		"hash": "76dcf520a78119e0aa221640c71ef1892254847c68397581b33eade310610a45"
	},
	{
		"id": "aae619d12a84",
		"ts": "2026-10-28T03:48:38.375Z",
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
		"liquidityUsd": 505003.25,
		"hash": "aae619d12a844f273493a9162e7622da8b79d1f6caae3aa5c9ecec44f89eb1fb"
	},
	{
		"id": "1164ed0c8832",
		"ts": "2026-10-28T03:48:38.575Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1136139.3,
		"hash": "1164ed0c8832c3837bcfacbc86fc1bd1a4d89b6ade49d31ad2583774add5968d"
	},
	{
		"id": "a94090c46983",
		"ts": "2026-10-28T03:48:38.788Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4673899.93,
		"hash": "a94090c46983357273dd4ae1b8f7b240f1d1256277d3b7fc59b92ed5f5d3f7d2"
	},
	{
		"id": "aab8d746c267",
		"ts": "2026-10-28T03:48:38.987Z",
		"symbol": "wIRON",
		"token": "0x166e70941262AE7cBf9df5c8897A6242c546457d",
		"score": 5,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.9,
		"flags": [
			"low_liquidity",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 3250.34,
		"hash": "aab8d746c2672119f91d8cfac5c73290943a6629fb8f143160d798b9dc451528"
	},
	{
		"id": "0b3560e0f276",
		"ts": "2026-10-28T03:48:39.196Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 513080.06,
		"hash": "0b3560e0f276f23e76c8c77e0fb3ee64c3d3455ce13b7f88e30d5c4f3af8dd2c"
	},
	{
		"id": "35dc0214cef2",
		"ts": "2026-10-28T03:48:39.391Z",
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
		"liquidityUsd": 8523930.13,
		"hash": "35dc0214cef2b3c2590670341a1bdd69b5bbd8c68a9dd89c071c2c0c5fc8d224"
	},
	{
		"id": "3cf2d34241b9",
		"ts": "2026-10-28T03:48:39.608Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3775909.08,
		"hash": "3cf2d34241b9a19027120c3b2e950aee14c726dfb0e1e8a0d56e47a3e88a299a"
	},
	{
		"id": "77ea593431d9",
		"ts": "2026-10-28T03:48:39.794Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 523770.17,
		"hash": "77ea593431d9250a5ff4a782ad16ec3979420039fa82f0724afc5c24b6a476fb"
	},
	{
		"id": "3cdb2a518fa6",
		"ts": "2026-10-27T23:26:09.706Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157670484.08,
		"hash": "3cdb2a518fa6fb6f0204748cdb778764a7187e7ca7ec83ff192a0c344b13caa0"
	},
	{
		"id": "fdc27b045a97",
		"ts": "2026-10-27T23:26:10.402Z",
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
		"liquidityUsd": 16620623.51,
		"hash": "fdc27b045a97f3638c2b6567e2007d4f6f560cee67565512e44693faddb812da"
	},
	{
		"id": "e29a710bbf60",
		"ts": "2026-10-27T23:26:10.681Z",
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
		"liquidityUsd": 260885.4,
		"hash": "e29a710bbf602d57bcbe5d4124808c22c607730d996beb4603dec67dbdf4a987"
	},
	{
		"id": "266a4f39f86e",
		"ts": "2026-10-27T23:26:10.961Z",
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
		"liquidityUsd": 6957513.68,
		"hash": "266a4f39f86e625c43ca796bd7d8ccb498211931c35b9e72556b5591555be997"
	},
	{
		"id": "3f9211f165ad",
		"ts": "2026-10-27T23:26:11.234Z",
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
		"liquidityUsd": 2154541.73,
		"hash": "3f9211f165ad5243251d3321de007815779b4d8783a33220c4c94ecef76952a6"
	},
	{
		"id": "53426d0689d1",
		"ts": "2026-10-27T23:26:11.493Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1115595.79,
		"hash": "53426d0689d121c9b27a17c4968cec9bc6631ad161ca953254680005588671c4"
	},
	{
		"id": "bc7789536192",
		"ts": "2026-10-27T23:26:11.758Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6957513.68,
		"hash": "bc77895361924f9b28dd12e259a8e844f329ce163db41e54e1221247478f89e1"
	},
	{
		"id": "a73cd1ea6ce0",
		"ts": "2026-10-27T23:26:12.026Z",
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
		"liquidityUsd": 1723658.89,
		"hash": "a73cd1ea6ce05e3b2b0612a74d381e3d9c08f05daa39a998c0de95d3a1600b6a"
	},
	{
		"id": "4da21c4e370e",
		"ts": "2026-10-27T23:26:12.294Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h"
		],
		"liquidityUsd": 256025.23,
		"hash": "4da21c4e370ea27631c84499a4183d400ec4d3b57c3c7416c1e530062ba35266"
	},
	{
		"id": "70a850a0eee9",
		"ts": "2026-10-27T23:26:12.557Z",
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
		"liquidityUsd": 2471447.99,
		"hash": "70a850a0eee9c62784c6932d105d1b0c01878730eae337c6c2000f5b8bf38e3d"
	}
]
