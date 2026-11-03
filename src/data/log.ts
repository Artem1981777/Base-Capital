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
	"updatedAt": "2026-11-03T01:57:54.163Z",
	"tokensScored": 22108,
	"verdictsIssued": 22108,
	"safe": 18867,
	"risky": 1559,
	"likelyRug": 1682,
	"ticks": 1244
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "566c7f5717d7",
		"ts": "2026-11-03T01:57:50.263Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 149987507.45,
		"hash": "566c7f5717d7e84b4059a32109de66a514eee7bb0a2a4b0281857be3e9ac6baa"
	},
	{
		"id": "6dad85b594d4",
		"ts": "2026-11-03T01:57:50.657Z",
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
		"liquidityUsd": 16205454.03,
		"hash": "6dad85b594d4bac6326d4edf7778e1ed95a8a5e6a2bffa01289d04b688750672"
	},
	{
		"id": "e08556235eb1",
		"ts": "2026-11-03T01:57:50.871Z",
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
		"liquidityUsd": 248344.14,
		"hash": "e08556235eb15a3247ad452c409cdef31b6fa1add410af1ce5e4d603b0bc0ffc"
	},
	{
		"id": "1babd843452a",
		"ts": "2026-11-03T01:57:51.089Z",
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
		"liquidityUsd": 5355216.03,
		"hash": "1babd843452a942572145929a63fa35b820c4a4e6bab362bf996867fa2f99c8f"
	},
	{
		"id": "7f892f0b1439",
		"ts": "2026-11-03T01:57:51.316Z",
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
		"liquidityUsd": 897911.1,
		"hash": "7f892f0b143929123ee9c642d5627b3c75cbc5e105615b9e09b200f60b5c1c59"
	},
	{
		"id": "87979b810285",
		"ts": "2026-11-03T01:57:51.540Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1047314.28,
		"hash": "87979b8102852d32d2d68b34670dd199a52c937b72f8ff7e230b7c6b1d74e405"
	},
	{
		"id": "ff4ec87a74ef",
		"ts": "2026-11-03T01:57:51.751Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5355216.03,
		"hash": "ff4ec87a74ef67a4d9571205c5dc39ee9552d1580b00b76d81878fd7cf1ef26a"
	},
	{
		"id": "c074b984a178",
		"ts": "2026-11-03T01:57:51.967Z",
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
		"liquidityUsd": 2039082.42,
		"hash": "c074b984a1786d115a667f58757e52f3343c023016872a9524bfee02b61e0bdf"
	},
	{
		"id": "099cb5e0886c",
		"ts": "2026-11-03T01:57:52.178Z",
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
		"liquidityUsd": 302381.06,
		"hash": "099cb5e0886c78fcf05ab6796aa97a3fb7ff770421d7f0be02508205d97fb9cd"
	},
	{
		"id": "0dd0d5d271f6",
		"ts": "2026-11-03T01:57:52.407Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1747659.68,
		"hash": "0dd0d5d271f6285047411de3b8f10a4ef75078d2f681b183fb4bdf77edfee496"
	},
	{
		"id": "f6cffbe0cda0",
		"ts": "2026-11-03T01:57:52.602Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1008451.13,
		"hash": "f6cffbe0cda0b22533abd1c67c7efe20fe996be0ae6bf22020a3ea07d906c5ea"
	},
	{
		"id": "3c708340229d",
		"ts": "2026-11-03T01:57:52.796Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3504272.1,
		"hash": "3c708340229dd678ee88a98e250a2b56fe8fdc930bf66eea64feff8f4149bfe5"
	},
	{
		"id": "11bacf80e4a7",
		"ts": "2026-11-03T01:57:52.990Z",
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
		"liquidityUsd": 2427257.36,
		"hash": "11bacf80e4a77c29df9d3cc88fc65d4fb2888605b1b6dbe727883f826a6afd5d"
	},
	{
		"id": "aa0ec7cf829a",
		"ts": "2026-11-03T01:57:53.185Z",
		"symbol": "SNDKc",
		"token": "0xb200000000000000000000397293Cb8cda9a10c5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 973578.83,
		"hash": "aa0ec7cf829a325763b3cce2684d2fe20a0d3a7edd41716fa25fcbc0277fe1bb"
	},
	{
		"id": "8089e406ffb7",
		"ts": "2026-11-03T01:57:53.377Z",
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
		"liquidityUsd": 7606312.04,
		"hash": "8089e406ffb7bfe07ea5d9cf93c8961fd2a21a3fc84233942e7bed3a043f34a5"
	},
	{
		"id": "9d0afe98a990",
		"ts": "2026-11-03T01:57:53.570Z",
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
		"liquidityUsd": 227699.7,
		"hash": "9d0afe98a9906ef036a960f1db131c0aa68270551e4ff5cb05f37c7929be0957"
	},
	{
		"id": "f96c2e831b7b",
		"ts": "2026-11-03T01:57:53.765Z",
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
		"liquidityUsd": 779574.01,
		"hash": "f96c2e831b7bf2dea00d0fb4e1dc3dbb58d85b953054289cd13e9265a81392a2"
	},
	{
		"id": "cf8bc38ab77e",
		"ts": "2026-11-03T01:57:53.968Z",
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
		"liquidityUsd": 2738779.81,
		"hash": "cf8bc38ab77e3118e8e96eb422d83f93d5d0cc1b32436ac82c687a2cff3475fc"
	},
	{
		"id": "1346cfff2530",
		"ts": "2026-11-03T01:57:54.162Z",
		"symbol": "MSTRc",
		"token": "0xb2000000000000000000004884b426556b92883d",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 1050187.56,
		"hash": "1346cfff2530176031fca94c538c6e4358423500c78b6d5cf47b12c42aae5e7a"
	},
	{
		"id": "b4a1f4277bde",
		"ts": "2026-11-02T19:06:18.837Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 149288227.7,
		"hash": "b4a1f4277bdedcdfae18be83e5ccc4893a5ad0b6ad55aa23e758066143db3a04"
	},
	{
		"id": "92bb123c3810",
		"ts": "2026-11-02T19:06:19.080Z",
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
		"liquidityUsd": 16132974.28,
		"hash": "92bb123c381070d52411df0188f9662ae41e161dbaf382341cae817854949840"
	},
	{
		"id": "86623ef6b2c4",
		"ts": "2026-11-02T19:06:19.311Z",
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
		"liquidityUsd": 245050.64,
		"hash": "86623ef6b2c479c198127763088c7dcc0ec629e5012303a3a9f83e6068762d53"
	},
	{
		"id": "9ee3244a6beb",
		"ts": "2026-11-02T19:06:19.530Z",
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
		"liquidityUsd": 5384220.43,
		"hash": "9ee3244a6beb717a9d659042d12327834ac9bc89a25975e185001d5bb57b9252"
	},
	{
		"id": "63be0a506a69",
		"ts": "2026-11-02T19:06:19.776Z",
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
		"liquidityUsd": 863898.03,
		"hash": "63be0a506a69c8fae8af1d43242cb33060251cf9afa9b14a9e153ee0eb708a25"
	},
	{
		"id": "375526742cfe",
		"ts": "2026-11-02T19:06:20.005Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1047391.14,
		"hash": "375526742cfed0e768f8d57d33ff08c39459c98135ec9fadde1d23554ef203f7"
	},
	{
		"id": "a5eec9769e03",
		"ts": "2026-11-02T19:06:20.241Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5384655.08,
		"hash": "a5eec9769e03a810177ab696a906111500817477a1f834d2f41443063453f4d0"
	},
	{
		"id": "044fd637c89a",
		"ts": "2026-11-02T19:06:20.476Z",
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
		"liquidityUsd": 1992175.94,
		"hash": "044fd637c89a603d2d53a0760e8c7bf1f49f3e58af0d4b64aea264f56dd2ccab"
	},
	{
		"id": "8d5a431f9964",
		"ts": "2026-11-02T19:06:20.726Z",
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
		"liquidityUsd": 284066.55,
		"hash": "8d5a431f9964b95b5826cc9fcc8f412f6a16e1a7d515d4b9a3595e1ff4ba106a"
	},
	{
		"id": "7fd11600b845",
		"ts": "2026-11-02T19:06:20.953Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1728007.94,
		"hash": "7fd11600b84565a166a5dbae40cced9ffb14016399d33206db9239dfb1f39def"
	},
	{
		"id": "df4ef68c66a4",
		"ts": "2026-11-02T19:06:21.154Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3500054.79,
		"hash": "df4ef68c66a4d1465f3d6d4247ad099bebac77d230b55cdd497eeed62c4b6dad"
	},
	{
		"id": "2bd5bbf04939",
		"ts": "2026-11-02T19:06:21.371Z",
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
		"liquidityUsd": 768139.15,
		"hash": "2bd5bbf04939ed09da6c726dc8b4dc8068ec1e841417e65e7891163d7e471f8e"
	},
	{
		"id": "8946a2e17087",
		"ts": "2026-11-02T19:06:21.584Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 994659.27,
		"hash": "8946a2e170870c406b5e42e613eab4b7cf90d89b5c55cd3115dc3f89c973c3b0"
	},
	{
		"id": "3180742253d5",
		"ts": "2026-11-02T19:06:21.798Z",
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
		"liquidityUsd": 226593.15,
		"hash": "3180742253d5c9aba7ba762d5c99b702c9bea6f34860e3918845a1b3e6d983c3"
	},
	{
		"id": "5fb906bd734c",
		"ts": "2026-11-02T19:06:21.993Z",
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
		"liquidityUsd": 2426187.43,
		"hash": "5fb906bd734c74f2c1bfb5aad3b8bdaf96f302ca57de9c858dc919015f297a07"
	},
	{
		"id": "73ac18ff6e0c",
		"ts": "2026-11-02T19:06:22.189Z",
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
		"liquidityUsd": 945884.9,
		"hash": "73ac18ff6e0c487ff287834ac7c0440709dbc0acb058d9cd3fce9c7361f299f0"
	},
	{
		"id": "611c7cd0f80f",
		"ts": "2026-11-02T19:06:22.404Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247689.14,
		"hash": "611c7cd0f80fb19a3b363b7cf10d64cb28ef4e1a13e1d1a2d30e87fd11ba7cc8"
	},
	{
		"id": "70b7f8effbd0",
		"ts": "2026-11-02T19:06:22.596Z",
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
		"liquidityUsd": 7521597.05,
		"hash": "70b7f8effbd0cacef1f2095890a1f4d3de2d1df68a4b1a251dd90cb5b4fc2ba9"
	},
	{
		"id": "3afa4994cbb3",
		"ts": "2026-11-02T19:06:22.789Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 637455.71,
		"hash": "3afa4994cbb35bc359ece419525266d0d793daeaafae24827755e469fd0c0aa3"
	},
	{
		"id": "472020a192d1",
		"ts": "2026-11-02T08:48:46.643Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 151703055.3,
		"hash": "472020a192d171f5bd40a656b3b16f244994553b34a30a4f22912c57f6dfdb12"
	},
	{
		"id": "0eef5aec5c2f",
		"ts": "2026-11-02T08:48:47.112Z",
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
		"liquidityUsd": 16401596.96,
		"hash": "0eef5aec5c2f2c68bd9aae22c8ba54215c3ce114193d7062fe98b288d9f08e97"
	},
	{
		"id": "dc9d02cc17cb",
		"ts": "2026-11-02T08:48:47.358Z",
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
		"liquidityUsd": 245737.7,
		"hash": "dc9d02cc17cb0d75a3c7f6a8d5bc3e03b01318128206ed33db56ec499de97cc5"
	},
	{
		"id": "f69e2e4ff780",
		"ts": "2026-11-02T08:48:47.607Z",
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
		"liquidityUsd": 5503489.11,
		"hash": "f69e2e4ff78081d25b0cdfd4cf871efa1f94545f8b8b18d282c732a4c7ed1f1d"
	},
	{
		"id": "67644210e481",
		"ts": "2026-11-02T08:48:47.855Z",
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
		"liquidityUsd": 882530.53,
		"hash": "67644210e48144474f3c8983e8456982b552c027543b8f34a60b26b7dd6cd355"
	},
	{
		"id": "652e861ecefa",
		"ts": "2026-11-02T08:48:48.095Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1072325.33,
		"hash": "652e861ecefa5ef98f2b052420998c9cd12723a51b757395a20e063219759f8e"
	},
	{
		"id": "d0aa9c5065b8",
		"ts": "2026-11-02T08:48:48.343Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5503489.11,
		"hash": "d0aa9c5065b8671cc967dd8127bdf97ee5b71af23618d430d7a82d661fd81cfd"
	},
	{
		"id": "5d419cc9d4da",
		"ts": "2026-11-02T08:48:48.595Z",
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
		"liquidityUsd": 1504765.88,
		"hash": "5d419cc9d4dae441ba718d21366e4fa22c3c90701a03d6e6684d169b7ed6f34a"
	},
	{
		"id": "8a4dfa8dd7e7",
		"ts": "2026-11-02T08:48:48.833Z",
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
		"liquidityUsd": 288207.22,
		"hash": "8a4dfa8dd7e7f7bbf60f8293a731d409bd8d69be584effc9c9b145bf52493fb7"
	},
	{
		"id": "c12b2616cbd0",
		"ts": "2026-11-02T08:48:49.080Z",
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
		"liquidityUsd": 1749386.67,
		"hash": "c12b2616cbd0469e034480fb4616eb8ba9e5cdcac762b14c9eb76b9cbfa07f66"
	},
	{
		"id": "b122e417fab5",
		"ts": "2026-11-02T08:48:49.316Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3599789.69,
		"hash": "b122e417fab5b453cacbe9719ac9e4a96e0345718c3dd9567c6b3c720858f371"
	},
	{
		"id": "707c572546b0",
		"ts": "2026-11-02T08:48:49.537Z",
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
		"liquidityUsd": 778897.98,
		"hash": "707c572546b0c43d763d3dad98e177c17ff46b5ca58c3c0129d17253b6903523"
	},
	{
		"id": "92a79d7f12f7",
		"ts": "2026-11-02T08:48:49.770Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 562940.22,
		"hash": "92a79d7f12f7c966ed818da454359accafae4f902ede153a94ab102b60ea0d50"
	},
	{
		"id": "c5895137f83d",
		"ts": "2026-11-02T08:48:50.001Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 256837.19,
		"hash": "c5895137f83d7ffb9cd3a3c0d41d7bdeaff8d96f5d92d43cf8dae90c0611027c"
	},
	{
		"id": "e283da4d69ef",
		"ts": "2026-11-02T08:48:50.223Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1074136.09,
		"hash": "e283da4d69ef2dc2ba3e9ddc42e6314c0b992a80f35df8b6208466a169b600a3"
	},
	{
		"id": "4d22f589b0bb",
		"ts": "2026-11-02T08:48:50.467Z",
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
		"liquidityUsd": 2824550.73,
		"hash": "4d22f589b0bb1de79dcab427a7478f2ec247bc6efe6bb8b6d31877b49e7ffa9b"
	},
	{
		"id": "f9d7a9664f57",
		"ts": "2026-11-02T08:48:50.699Z",
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
		"liquidityUsd": 965213.6,
		"hash": "f9d7a9664f570be8e75047b81ad3d1e372291b787486e42da041e65697076641"
	},
	{
		"id": "5c260dd81ff6",
		"ts": "2026-11-02T08:48:50.947Z",
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
		"liquidityUsd": 222633.16,
		"hash": "5c260dd81ff6cdcfc15a9a116a2503059a7f5a5d95f2d0806942c0596998f9e9"
	},
	{
		"id": "079546444a06",
		"ts": "2026-11-02T08:48:51.179Z",
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
		"liquidityUsd": 7821918.74,
		"hash": "079546444a06c4f98ed188c7378d1dbcbf842d11dbdbd2e99dd4ba3b9c0b1a6e"
	},
	{
		"id": "37abca44f151",
		"ts": "2026-11-02T01:12:19.512Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 151321777.68,
		"hash": "37abca44f151a1d0fa35eaace01c1c1c636d9bc9e221f78d433d8ddf3d682ba4"
	},
	{
		"id": "f25fb715e74f",
		"ts": "2026-11-02T01:12:19.777Z",
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
		"liquidityUsd": 16225258.29,
		"hash": "f25fb715e74fd84dfd9a114a8e4ecd170bffbdb01108fc36b0ef1e50e4b59d0c"
	},
	{
		"id": "eebc6fd458f8",
		"ts": "2026-11-02T01:12:20.050Z",
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
		"liquidityUsd": 247899.27,
		"hash": "eebc6fd458f867ac6635df34b97adc6c44336e635d68d17ac1dbf3c65a252551"
	},
	{
		"id": "35b5a3f1b74d",
		"ts": "2026-11-02T01:12:20.301Z",
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
		"liquidityUsd": 5529520.72,
		"hash": "35b5a3f1b74d13cd77c10f4de3d60f57b0474aec89cfdf37f963bd4bcf4b36f9"
	},
	{
		"id": "474fb5cd6917",
		"ts": "2026-11-02T01:12:20.548Z",
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
		"liquidityUsd": 881001.9,
		"hash": "474fb5cd6917b9d7bb3a8af5d4e764cb34d5ca9927652489f5c3e0d4553ce40b"
	},
	{
		"id": "1d7e2d0d6849",
		"ts": "2026-11-02T01:12:20.783Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1069587.48,
		"hash": "1d7e2d0d684953447e5d21dcd8691a6ca02a324b6c5e854323537f10b9f9272a"
	},
	{
		"id": "3d1e9f1fff0c",
		"ts": "2026-11-02T01:12:21.017Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5529520.72,
		"hash": "3d1e9f1fff0ca16f4adbfa03c56ba3d936757353aa86999c39ed897c49b75a6b"
	},
	{
		"id": "f5edc6e93f85",
		"ts": "2026-11-02T01:12:21.278Z",
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
		"liquidityUsd": 1498557.97,
		"hash": "f5edc6e93f857ff27a0b1d4a54a89297c07d8b76ca96eafe7cc1809f3082822d"
	},
	{
		"id": "7a1c048502ab",
		"ts": "2026-11-02T01:12:21.532Z",
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
		"liquidityUsd": 301229.17,
		"hash": "7a1c048502ab3b78f39a8ec5032ed417bfa5ced461f9ab8bb5c3046fc65e5564"
	},
	{
		"id": "04276730ee2d",
		"ts": "2026-11-02T01:12:21.783Z",
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
		"liquidityUsd": 1751005.56,
		"hash": "04276730ee2d5c980b852526a1ff47f2885b725b150397ac0bfd1bc9a598ce1f"
	},
	{
		"id": "59db5a8f9e28",
		"ts": "2026-11-02T01:12:22.024Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3565459.88,
		"hash": "59db5a8f9e28f8dafa0a485671592ade0827a209df48a721b027560212e7e2bf"
	},
	{
		"id": "9e2d37183cb2",
		"ts": "2026-11-02T01:12:22.261Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 251049.63,
		"hash": "9e2d37183cb23d1f2bf4c5d1443b37d3788ff7385622abf2fd49cb5da9d5b983"
	},
	{
		"id": "00f72016b69b",
		"ts": "2026-11-02T01:12:22.483Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567791.29,
		"hash": "00f72016b69b948dd1788d58874996d0b54a83cf67ea8c33ab332b00b2eda17f"
	},
	{
		"id": "1cb3e73a631c",
		"ts": "2026-11-02T01:12:22.708Z",
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
		"liquidityUsd": 801284.5,
		"hash": "1cb3e73a631c6649d894f3dce8933c69374d795dab7424a8f81844a3d6f14cda"
	},
	{
		"id": "109fcfe47f6f",
		"ts": "2026-11-02T01:12:22.943Z",
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
		"liquidityUsd": 2840375.73,
		"hash": "109fcfe47f6fe74e1ac338e7a493774b331b880ce49558adf098f89b0d60a7c7"
	},
	{
		"id": "1a574a63aba1",
		"ts": "2026-11-02T01:12:23.174Z",
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
		"liquidityUsd": 7873507.62,
		"hash": "1a574a63aba1e38a53ed3ddfd8ca8299be137dacfad4225fe63dd546517e7074"
	},
	{
		"id": "231c385b4ca5",
		"ts": "2026-11-02T01:12:23.397Z",
		"symbol": "GULD",
		"token": "0x14D6C649292c5c9790c5196D1a9EA039307947a1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1379714.28,
		"hash": "231c385b4ca531cfdd7705167445b2f2550d126d00926ef36feb67bc356b93be"
	},
	{
		"id": "68c7cc9330f5",
		"ts": "2026-11-02T01:12:23.617Z",
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
		"liquidityUsd": 224463.35,
		"hash": "68c7cc9330f5fdc79c3ec3237ee575fd8d07a3af7a67022bdc670a28d523e002"
	},
	{
		"id": "86c35198548f",
		"ts": "2026-11-02T01:12:23.851Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 276553.31,
		"hash": "86c35198548f1a93c459d55e4799ad10037207f02d59c5b25d607b28b12450f8"
	},
	{
		"id": "54cdcef747c7",
		"ts": "2026-11-01T21:38:28.890Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150410073.96,
		"hash": "54cdcef747c79a1be876d032bbcb2a4020262c5d9989c360211948d6d7612e99"
	},
	{
		"id": "06ed43e2be13",
		"ts": "2026-11-01T21:38:29.372Z",
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
		"liquidityUsd": 16162081.74,
		"hash": "06ed43e2be13c4f1b43bdefce3eacf42b51d706ca108de6ac0a40d271b8da5b0"
	},
	{
		"id": "0ff261bb38c2",
		"ts": "2026-11-01T21:38:29.626Z",
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
		"liquidityUsd": 246867.37,
		"hash": "0ff261bb38c25b8120b8093217fe2f41bd1612fb1d8bd590dee0da4a45321c9a"
	},
	{
		"id": "26a7a544b630",
		"ts": "2026-11-01T21:38:29.865Z",
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
		"liquidityUsd": 5554065.57,
		"hash": "26a7a544b6302907ec0cd5c084f48f14d5667793399542d701c6170dc147f336"
	},
	{
		"id": "2cdb95c7172d",
		"ts": "2026-11-01T21:38:30.117Z",
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
		"liquidityUsd": 965275.02,
		"hash": "2cdb95c7172d7a7ac318ad18b3c244f4663ef90c48b6fa6e7afe8613bc085ad7"
	},
	{
		"id": "37110cc0c104",
		"ts": "2026-11-01T21:38:30.375Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1064446.26,
		"hash": "37110cc0c1046270d07b847c80259d83f69de039493f34ba21afaa8ddc22a964"
	},
	{
		"id": "f1e5fc80fe72",
		"ts": "2026-11-01T21:38:30.639Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5554065.57,
		"hash": "f1e5fc80fe72c16774a78e382f12aa04ce9e65852652ef6531de71f7e773d3cf"
	},
	{
		"id": "b5b87d366b7c",
		"ts": "2026-11-01T21:38:30.904Z",
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
		"liquidityUsd": 1637074.46,
		"hash": "b5b87d366b7c3f05248e08a7e7330dcaa5360c1c11b4700f37deacd0da6e9af7"
	},
	{
		"id": "6f6d3bc90f86",
		"ts": "2026-11-01T21:38:31.165Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1760161.99,
		"hash": "6f6d3bc90f86b7d1547add6d03879fe29e0ac08860c3bca6f4faa0a81bf8d74d"
	},
	{
		"id": "95a92ff8693c",
		"ts": "2026-11-01T21:38:31.421Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3540987.71,
		"hash": "95a92ff8693c0deffa8f25fecf2393ff92aa1bb8991166796831068d5c3741a4"
	},
	{
		"id": "39b301a5a562",
		"ts": "2026-11-01T21:38:31.647Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 273850.19,
		"hash": "39b301a5a5628ddec3976f307dce72fb59c5a6e22295050869bbe601fc001ac6"
	},
	{
		"id": "3c8ff1f73060",
		"ts": "2026-11-01T21:38:31.870Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246245.3,
		"hash": "3c8ff1f7306035b8f363b72d18acb970bd399ed726c6677bcefa61eba3bd3b73"
	},
	{
		"id": "3094723f79c8",
		"ts": "2026-11-01T21:38:32.119Z",
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
		"liquidityUsd": 833812.8,
		"hash": "3094723f79c8485b44f7774f3d21916031f9ef278c89561d9a469141c366814d"
	},
	{
		"id": "fb180e7c9ec1",
		"ts": "2026-11-01T21:38:32.357Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 572277.89,
		"hash": "fb180e7c9ec17fcf3c6dcaea06f41543fcd123485324774c76b975fb17e4f872"
	},
	{
		"id": "73efd388d5e5",
		"ts": "2026-11-01T21:38:32.579Z",
		"symbol": "GULD",
		"token": "0x14D6C649292c5c9790c5196D1a9EA039307947a1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1370989.54,
		"hash": "73efd388d5e53e3917b94fad90462ec843d4b7f60f19a35dbbb5f8794f537c2a"
	},
	{
		"id": "1d94f210af6c",
		"ts": "2026-11-01T21:38:32.799Z",
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
		"liquidityUsd": 7842745.09,
		"hash": "1d94f210af6c70227f687cba1db7954804ad953d9c3120054a6be511e1743b68"
	},
	{
		"id": "71234f116e1e",
		"ts": "2026-11-01T21:38:33.038Z",
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
		"liquidityUsd": 2842081.9,
		"hash": "71234f116e1ec8afef26f103c998d8ec3e1a313099dcc500401c85fdac7c1af4"
	},
	{
		"id": "b296e035bf1b",
		"ts": "2026-11-01T21:38:33.276Z",
		"symbol": "SPCXc",
		"token": "0xb2000000000000000000007b9fcbd005511aCBd5",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 830282.73,
		"hash": "b296e035bf1b1e1bac443ec4768dc7b93adeb7ab3dba1a950728f2e6856f317c"
	},
	{
		"id": "3b836830f549",
		"ts": "2026-11-01T21:38:33.498Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 275359.74,
		"hash": "3b836830f549e86fdd8189845b2f276e47f31f862886e3777756c56b117634f5"
	},
	{
		"id": "6dde588e0d9a",
		"ts": "2026-11-01T17:34:45.663Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150685642.93,
		"hash": "6dde588e0d9aa36b64f6951513f9312313b2766ecb5a1b17ba88c961afeb34a8"
	},
	{
		"id": "a6435cf817fe",
		"ts": "2026-11-01T17:34:45.891Z",
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
		"liquidityUsd": 16189611.34,
		"hash": "a6435cf817feb118fe91a26d144d82a5abd3706564ae4ce2ab2505a845d48bf0"
	},
	{
		"id": "f8c022f8ca94",
		"ts": "2026-11-01T17:34:46.123Z",
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
		"liquidityUsd": 248455.72,
		"hash": "f8c022f8ca946cd55b2c9df80c0007a18566eb3520987353c55d23b60f1e0fa2"
	},
	{
		"id": "f38dbc6f36e5",
		"ts": "2026-11-01T17:34:46.343Z",
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
		"liquidityUsd": 5625906.1,
		"hash": "f38dbc6f36e521295ae4797ae2dbd5cba0abc2c0f3590a36957a150505ce5e3e"
	},
	{
		"id": "83a176dbd244",
		"ts": "2026-11-01T17:34:46.570Z",
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
		"liquidityUsd": 888911.84,
		"hash": "83a176dbd2447b123d8a9752d96c3f528dfd71150b4be0cc9e440f32faa409ab"
	},
	{
		"id": "0196eb2e2fef",
		"ts": "2026-11-01T17:34:46.774Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1074147.7,
		"hash": "0196eb2e2fefc3180797cee06adf8133a27ed34b39357f8f5cf7db17cc2482f3"
	},
	{
		"id": "4559e8648116",
		"ts": "2026-11-01T17:34:47.002Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5625906.1,
		"hash": "4559e864811640e22952bdb69913641e5ad876cbef1d39c8afbd4cc0b48f26a2"
	},
	{
		"id": "efdb06d171eb",
		"ts": "2026-11-01T17:34:47.251Z",
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
		"liquidityUsd": 2089569.32,
		"hash": "efdb06d171eb0b907b92033420425d2da2a35037feb290ddf459ba62e03b86e6"
	},
	{
		"id": "380126e50f78",
		"ts": "2026-11-01T17:34:47.480Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1056042.24,
		"hash": "380126e50f788bdc949875b90b43eb617e15c05cb7d3cc42d66c7a7fe1f6843b"
	},
	{
		"id": "fed93cccb928",
		"ts": "2026-11-01T17:34:47.712Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1778833.81,
		"hash": "fed93cccb928ba8de7920f26b0149536f4c670b62e41765c402dbb47cbbf3819"
	},
	{
		"id": "3e7ea1022056",
		"ts": "2026-11-01T17:34:47.917Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 279326.27,
		"hash": "3e7ea10220561b23f8d6f5df59e8623d4b62d68e4b485d523b57777ca4bcd0f0"
	},
	{
		"id": "48e620f5e7cd",
		"ts": "2026-11-01T17:34:48.131Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3556697.28,
		"hash": "48e620f5e7cd5d2f43f4cf4f20220ae3fc02c0921ece64b6e141c9c2902d3206"
	},
	{
		"id": "22a3566e22a7",
		"ts": "2026-11-01T17:34:48.317Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246916.11,
		"hash": "22a3566e22a7959a27d929d7e7ad55404e4ad9141456d87531588281972e580c"
	},
	{
		"id": "2406a31ae5dd",
		"ts": "2026-11-01T17:34:48.537Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 331701.21,
		"hash": "2406a31ae5dd4e3ccb7b82bc97f376828cdf26814b255d0142a6c3e3df731546"
	},
	{
		"id": "f5f37347b2cf",
		"ts": "2026-11-01T17:34:48.752Z",
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
		"liquidityUsd": 825443.42,
		"hash": "f5f37347b2cf984cd498540c12ccc727bf33c6b41d82a94908bfdaabdf92cd16"
	},
	{
		"id": "562437552112",
		"ts": "2026-11-01T17:34:48.949Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 585005.91,
		"hash": "5624375521128b2182e8ffd1261f69c788e7bc622514cc3fea76cce138c32934"
	},
	{
		"id": "a800af736e1c",
		"ts": "2026-11-01T17:34:49.135Z",
		"symbol": "GULD",
		"token": "0x14D6C649292c5c9790c5196D1a9EA039307947a1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1356198.78,
		"hash": "a800af736e1c15595221cbca8ce5d012041c3bc7abdded13a81fa25c1fdab5c2"
	},
	{
		"id": "afd4bd058d46",
		"ts": "2026-11-01T17:34:49.344Z",
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
		"liquidityUsd": 7885491.78,
		"hash": "afd4bd058d46b20fe95d7b92a556f622ef2e307b7c0be002adf7d813188f3970"
	},
	{
		"id": "1632fa427a62",
		"ts": "2026-11-01T17:34:49.567Z",
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
		"liquidityUsd": 2854951.91,
		"hash": "1632fa427a62c8207c54a0ba2745f32ce1b8ecd4f024b171c345862bd09726ef"
	},
	{
		"id": "2dad49f01615",
		"ts": "2026-11-01T11:38:18.264Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150958113.12,
		"hash": "2dad49f016152ef009d05b5f4a39cd78fe41c7d4a7fc33a509d1224cd5b7ec08"
	},
	{
		"id": "16aa0534c98a",
		"ts": "2026-11-01T11:38:18.652Z",
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
		"liquidityUsd": 16150285.43,
		"hash": "16aa0534c98ae6a7219d40cc6a8c8c04188bdbb5264eda5474c59683b9efacb6"
	},
	{
		"id": "8b4688c5febd",
		"ts": "2026-11-01T11:38:18.870Z",
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
		"liquidityUsd": 249031.35,
		"hash": "8b4688c5febda3ea5031785d3d45bf1a170b50c48f8b7cb4f777ae1bb7c6e450"
	},
	{
		"id": "3b57793b6b60",
		"ts": "2026-11-01T11:38:19.077Z",
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
		"liquidityUsd": 5711931.18,
		"hash": "3b57793b6b6087c15848dc3a4603d28c9905ba721dfdd94eb3a2efd218fa4ea1"
	},
	{
		"id": "1906f6b97438",
		"ts": "2026-11-01T11:38:19.297Z",
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
		"liquidityUsd": 866906.46,
		"hash": "1906f6b974384e527b8426ab82e1ae7ff9d2080815609c4c33b1a394e237a2b2"
	},
	{
		"id": "e7dcb6f7795a",
		"ts": "2026-11-01T11:38:19.499Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1080765.11,
		"hash": "e7dcb6f7795a1e03f3194421dc97bf79f1564ea8e9d48b94ed4f5efc2c8c12af"
	},
	{
		"id": "eb692ec27043",
		"ts": "2026-11-01T11:38:19.705Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2432684.31,
		"hash": "eb692ec27043078d5781a2a6f753f6ac739d3c6bf00ebfbc17cdcf22b359a9b4"
	},
	{
		"id": "59b13a54f156",
		"ts": "2026-11-01T11:38:19.913Z",
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
		"liquidityUsd": 1898906.57,
		"hash": "59b13a54f156e35a0d2d18c2a45a416290539b18b6fdf5f7f202772caf37fd3c"
	},
	{
		"id": "cc516a72538e",
		"ts": "2026-11-01T11:38:20.143Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1722664.3,
		"hash": "cc516a72538e9fa59731c6719e1a7edd0c1a167f41c1a957ff2448840314b2a7"
	},
	{
		"id": "af698e9a16b3",
		"ts": "2026-11-01T11:38:20.357Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1065672.06,
		"hash": "af698e9a16b32d7540d958a9c583af4efe43631d26d82d5ca2482994bf377ce9"
	},
	{
		"id": "7bc4f095cfcc",
		"ts": "2026-11-01T11:38:20.573Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 287466.05,
		"hash": "7bc4f095cfcc36815b32e16462f2a4132da2e578d3c2928c48bfa35c430933a1"
	},
	{
		"id": "f5141f1ed6f9",
		"ts": "2026-11-01T11:38:20.776Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3571739.53,
		"hash": "f5141f1ed6f9e43a1f0c3765b13c9971aab8ef819504ea68b117733f4d5938ee"
	},
	{
		"id": "90be33261fa4",
		"ts": "2026-11-01T11:38:20.976Z",
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
		"liquidityUsd": 826501.11,
		"hash": "90be33261fa4c790c86eaa2bb4bf906474ae1efeb41a4a0bc5860e258d97c593"
	},
	{
		"id": "687670ea01c8",
		"ts": "2026-11-01T11:38:21.183Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261472.84,
		"hash": "687670ea01c86fbac27f6e55a41d68e8a3d8d8e77589aa065bdceff0aafdd2fd"
	},
	{
		"id": "8b7bc584c359",
		"ts": "2026-11-01T11:38:21.375Z",
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
		"liquidityUsd": 7929980.72,
		"hash": "8b7bc584c359ea9296e679f27b654d20c1b72396c8df320d1c9e692d538a18e8"
	},
	{
		"id": "c7a632a68210",
		"ts": "2026-11-01T11:38:21.563Z",
		"symbol": "Anthropic",
		"token": "0xf7B9cf4DAB32ce42f1e08c05f561Ccc0E7B44CEA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10322072.34,
		"hash": "c7a632a68210517f970deaf2a289fce500743a1371d11ac0778bc698028516b2"
	},
	{
		"id": "e3367ada0476",
		"ts": "2026-11-01T11:38:21.755Z",
		"symbol": "GULD",
		"token": "0x14D6C649292c5c9790c5196D1a9EA039307947a1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1396772.44,
		"hash": "e3367ada04765f1e3270f69f1d5c22fd43dd556e1f4e2145422c9388f25f704f"
	},
	{
		"id": "472ca7b2899e",
		"ts": "2026-11-01T11:38:21.941Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 298811.58,
		"hash": "472ca7b2899ebbabc977a116b51ac37f3e276846bad316d8c1883bd7874f5c55"
	},
	{
		"id": "3552384194a4",
		"ts": "2026-11-01T11:38:22.156Z",
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
		"liquidityUsd": 1602857.73,
		"hash": "3552384194a4a3052cc460f658efc9411b93548a6d4e17743d1019757b4b8b71"
	},
	{
		"id": "d03978d6189c",
		"ts": "2026-11-01T04:05:58.466Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150903069.21,
		"hash": "d03978d6189c40052effcb06b8477d22fb22bb8745327bb29f83d680d103d367"
	},
	{
		"id": "82d95d62b7eb",
		"ts": "2026-11-01T04:05:58.839Z",
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
		"liquidityUsd": 16132276.2,
		"hash": "82d95d62b7eb6a8f322926a1e55405329a02ff778de1b7edd1c64dbd63c5bbf6"
	},
	{
		"id": "9823626356d3",
		"ts": "2026-11-01T04:05:59.058Z",
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
		"liquidityUsd": 248575.1,
		"hash": "9823626356d35e91d4e4325c6f157dbac68fc9ebc9a3365f7c20910e19b6f097"
	},
	{
		"id": "31a951e9e62a",
		"ts": "2026-11-01T04:05:59.265Z",
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
		"liquidityUsd": 5753987.79,
		"hash": "31a951e9e62a6cac793ac7ff31f6f52f5f2bc85a3fe8848e7a2d7c771b59c433"
	},
	{
		"id": "98a7fbbc2826",
		"ts": "2026-11-01T04:05:59.496Z",
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
		"liquidityUsd": 874326.08,
		"hash": "98a7fbbc2826c54d012746a726420c2d2529db28a0abdb88f79047ac61fbe7ef"
	},
	{
		"id": "5f5b20a9d878",
		"ts": "2026-11-01T04:05:59.702Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1070330.74,
		"hash": "5f5b20a9d8787f3ccc36abcc158c4189d661bd091a8f77c12983ceb77a3e5144"
	},
	{
		"id": "a7a32a023897",
		"ts": "2026-11-01T04:05:59.920Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2433021.29,
		"hash": "a7a32a0238970c87f0702a993191822c87edd22b4651c97a77cd01cdcee20376"
	},
	{
		"id": "794824f76d91",
		"ts": "2026-11-01T04:06:00.147Z",
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
		"liquidityUsd": 1036518.06,
		"hash": "794824f76d915b7c401fc056039d9a99bef9529356d79895a568fa9004b02e4f"
	},
	{
		"id": "e09c42cff6ec",
		"ts": "2026-11-01T04:06:00.361Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1054941.07,
		"hash": "e09c42cff6ecf0508dbae85120491bc542bebc1e6269917316268dd49091d53e"
	},
	{
		"id": "872b3414a117",
		"ts": "2026-11-01T04:06:00.589Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2903182.84,
		"hash": "872b3414a117491fbc4146c62fa82fe73e827a76bdd7acc418a079c3d1863895"
	},
	{
		"id": "9f5e0674eb01",
		"ts": "2026-11-01T04:06:00.801Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1713339.08,
		"hash": "9f5e0674eb0162623e16d869f262d5083fdf631bd9f5916c358e1c4b1dc6fcda"
	},
	{
		"id": "57b553a7b1de",
		"ts": "2026-11-01T04:06:01.001Z",
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
		"liquidityUsd": 318043.51,
		"hash": "57b553a7b1de09bb33b0aad2198cbab7afff8cce51a8f0ba7c53ac725b179d8c"
	},
	{
		"id": "7c1c1963a6a3",
		"ts": "2026-11-01T04:06:01.202Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 845643.19,
		"hash": "7c1c1963a6a3ecff5d81fcc90cc506b7e42abb3781dd9e17d20667ff6a351a62"
	},
	{
		"id": "e18cc2c92351",
		"ts": "2026-11-01T04:06:01.711Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3568866.24,
		"hash": "e18cc2c923517a6138bb175f786dee033d018fbac420d895fa0a37028ad811aa"
	},
	{
		"id": "2c91681569ff",
		"ts": "2026-11-01T04:06:01.910Z",
		"symbol": "Anthropic",
		"token": "0xf7B9cf4DAB32ce42f1e08c05f561Ccc0E7B44CEA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 10322122.73,
		"hash": "2c91681569fff5fdb45a216d1a28d6dcac5f89eea2fc45b6f95e8f932884b9ee"
	},
	{
		"id": "34dc4bd087de",
		"ts": "2026-11-01T04:06:02.126Z",
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
		"liquidityUsd": 7935285.56,
		"hash": "34dc4bd087decfd8ba7e9657e0da8531a4166056e34f637421bc5d45ade7429a"
	},
	{
		"id": "365cf6bebdca",
		"ts": "2026-11-01T04:06:02.339Z",
		"symbol": "LMTS",
		"token": "0x9EadbE35F3Ee3bF3e28180070C429298a1b02F93",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 244130.82,
		"hash": "365cf6bebdca4a0890474b626411d208121d2f48ac0a4a6ca480e9f382931862"
	},
	{
		"id": "42e9eaaf153b",
		"ts": "2026-11-01T04:06:02.528Z",
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
		"liquidityUsd": 1274649.21,
		"hash": "42e9eaaf153b3824c777ba96d3828be7f3dc44b4e73f05f67446d524d2147c31"
	},
	{
		"id": "720bf9779398",
		"ts": "2026-11-01T04:06:02.728Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 271918.21,
		"hash": "720bf9779398aad767e263499aaf33eea471cacf7e9e95d72c809219a3801ee4"
	},
	{
		"id": "86c47a2ba3c2",
		"ts": "2026-10-31T23:01:09.560Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150555807.24,
		"hash": "86c47a2ba3c2a4253b2820a977a5b84ca6caeee566a36cbd9cf7ee0f0e7a7afa"
	},
	{
		"id": "d22d46ba0fbc",
		"ts": "2026-10-31T23:01:09.922Z",
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
		"liquidityUsd": 16066766.19,
		"hash": "d22d46ba0fbce1dd605e5516af2fe4245dfc3bfbd4ce47d826aa99a337a8a452"
	},
	{
		"id": "d17360d6774a",
		"ts": "2026-10-31T23:01:10.140Z",
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
		"liquidityUsd": 247695.71,
		"hash": "d17360d6774af1ac438e672ea11e77397ffe255a781b76d2f40e2022db2ce3ee"
	},
	{
		"id": "243b33c6328b",
		"ts": "2026-10-31T23:01:10.341Z",
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
		"liquidityUsd": 5763603.95,
		"hash": "243b33c6328be38e4838abc743fb4458ccc026fac33e86075c87de237bf08f08"
	},
	{
		"id": "29ec4b69afb9",
		"ts": "2026-10-31T23:01:10.575Z",
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
		"liquidityUsd": 870229.19,
		"hash": "29ec4b69afb92a72ea2fc66a73762139687511087aa3e1a59622e8dc5b3173a9"
	},
	{
		"id": "3c2433d26ffe",
		"ts": "2026-10-31T23:01:10.774Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1064632.09,
		"hash": "3c2433d26ffe4b7fba0d4d0db8437e16468877db2ee03c771efffddbf01ea009"
	},
	{
		"id": "0158989f4b14",
		"ts": "2026-10-31T23:01:10.994Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2436116.28,
		"hash": "0158989f4b14c818dc5e2d525a319cbb6859b1041d683549dca7de3f822bed9b"
	},
	{
		"id": "43ddca5af619",
		"ts": "2026-10-31T23:01:11.206Z",
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
		"liquidityUsd": 1678705.63,
		"hash": "43ddca5af6195e113a9e589b1fc2576be395ed05c9f3ac7d1b932d8498916e8b"
	},
	{
		"id": "853ebc3120d8",
		"ts": "2026-10-31T23:01:11.407Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1043916,
		"hash": "853ebc3120d82a8a501505fddf477fc22ac0d00fdf254c7867923fa0eccd7048"
	},
	{
		"id": "23f0aaf3d598",
		"ts": "2026-10-31T23:01:11.615Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2902223.67,
		"hash": "23f0aaf3d598aa9c95f83a82cefc2b0eb2647c60bb2b165ce959c4aa8ff79927"
	},
	{
		"id": "248bb6cabc36",
		"ts": "2026-10-31T23:01:11.837Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 313058.27,
		"hash": "248bb6cabc36efe5bf78a2d3a4aadef7644bede4a3b2862b7bce4f9522f92756"
	},
	{
		"id": "c42b16aff6f3",
		"ts": "2026-10-31T23:01:12.048Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1712916.19,
		"hash": "c42b16aff6f3df17ffd3efb662d63090dc0376e5051a1c08d68b9822909cbb76"
	},
	{
		"id": "38ca37716979",
		"ts": "2026-10-31T23:01:12.249Z",
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
		"liquidityUsd": 855720.46,
		"hash": "38ca37716979ac22bd070b21d91f513621f95d0461099c6536a8e57a144da21c"
	},
	{
		"id": "9f66f8034766",
		"ts": "2026-10-31T23:01:12.428Z",
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
		"liquidityUsd": 115159.94,
		"hash": "9f66f80347661c8f8a7301cad7c70279a263935bf6594b93d11ee1f94ccc0773"
	},
	{
		"id": "fce6a139ce99",
		"ts": "2026-10-31T23:01:12.630Z",
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
		"liquidityUsd": 1271198.68,
		"hash": "fce6a139ce996286eb1ce98653067cf99e8498b644728874dbfe2a4a7c6b2f16"
	},
	{
		"id": "58bb9c951a0f",
		"ts": "2026-10-31T23:01:12.825Z",
		"symbol": "Anthropic",
		"token": "0xf7B9cf4DAB32ce42f1e08c05f561Ccc0E7B44CEA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10322065.27,
		"hash": "58bb9c951a0fca37ffaa955fab0a64d43c3ce3035b87dbd563e4230136b32dc5"
	},
	{
		"id": "928de1eee731",
		"ts": "2026-10-31T23:01:13.019Z",
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
		"liquidityUsd": 7868656.97,
		"hash": "928de1eee731339c243e84d5b65724588170bb31e1e5353020886b89376ee2db"
	},
	{
		"id": "36a5afa18a5a",
		"ts": "2026-10-31T23:01:13.207Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3541063.49,
		"hash": "36a5afa18a5afa7029c225695eb0086c12f769912352823fff0823fc68ac8b99"
	},
	{
		"id": "5869cb808da6",
		"ts": "2026-10-31T23:01:13.395Z",
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
		"liquidityUsd": 1907762.06,
		"hash": "5869cb808da60154db34b51089f1b8bd3929e6f633f5b650395aa4a47cfe6113"
	},
	{
		"id": "7ba95ad194f9",
		"ts": "2026-10-31T19:10:37.966Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150277619.51,
		"hash": "7ba95ad194f9db709637a2b98d727c43ed8675c40bba1566cf6b3f15ab480684"
	},
	{
		"id": "db34d253419e",
		"ts": "2026-10-31T19:10:38.673Z",
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
		"liquidityUsd": 16077422.24,
		"hash": "db34d253419e279e16fefff632264194bb881fd2c7dc5b035182701c3e0d9eec"
	},
	{
		"id": "a6ea3f9cabaf",
		"ts": "2026-10-31T19:10:38.949Z",
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
		"liquidityUsd": 251306.09,
		"hash": "a6ea3f9cabafa53b72969e4ac7baf49f07b93424b2b19e4c2c0cb7c3506cc5a1"
	},
	{
		"id": "dcbfe3ac1b6c",
		"ts": "2026-10-31T19:10:39.239Z",
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
		"liquidityUsd": 5789330.85,
		"hash": "dcbfe3ac1b6c4c8776bc4fb27e27e03e6a21699d6d5baaf836c52dafab62b9d0"
	},
	{
		"id": "96cbd5398bb7",
		"ts": "2026-10-31T19:10:39.519Z",
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
		"liquidityUsd": 866052.34,
		"hash": "96cbd5398bb73185977a218d508e2a8451e8ab544c7f58c407116111a14950b3"
	},
	{
		"id": "40a0aa55ac68",
		"ts": "2026-10-31T19:10:40.372Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1063564,
		"hash": "40a0aa55ac68fec44c6a70750d52c85412d1270e62883c3907c5bfad6672d7f0"
	},
	{
		"id": "bfc8860a5e78",
		"ts": "2026-10-31T19:10:40.662Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2435815.56,
		"hash": "bfc8860a5e7889c6e9a2836a61860b9ad885942082cb7db6cd5394199e820e73"
	},
	{
		"id": "936a47fd4572",
		"ts": "2026-10-31T19:10:40.956Z",
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
		"liquidityUsd": 1578457.44,
		"hash": "936a47fd4572ca2ae20d1b7887205f16bac0e42dd6c7d1b55010b71b63c1f2f9"
	},
	{
		"id": "2d69a0b44e12",
		"ts": "2026-10-31T19:10:41.213Z",
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
		"liquidityUsd": 235274.34,
		"hash": "2d69a0b44e125d19b72ae9a6602a71ad7a0f6af967b1b64fc2a82fe89a4f8b9c"
	},
	{
		"id": "1ec00b74691f",
		"ts": "2026-10-31T19:10:41.484Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1047707.82,
		"hash": "1ec00b74691fc05bc3db523081faf59b55c54e097d7570bdfaee8e17a6b2d45d"
	},
	{
		"id": "8af8522fcaff",
		"ts": "2026-10-31T19:10:41.723Z",
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
		"liquidityUsd": 2915327.13,
		"hash": "8af8522fcaff618e9ba16134dfa9582f84ccb37faa817048f57065720bc8e749"
	},
	{
		"id": "f886102c52dd",
		"ts": "2026-10-31T19:10:42.001Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1722003.67,
		"hash": "f886102c52dd17449d96edfaf4a2713cf1adcfbb1376518c1a29c7bc7135f60d"
	},
	{
		"id": "23bf2b46b578",
		"ts": "2026-10-31T19:10:42.244Z",
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
		"liquidityUsd": 109140.79,
		"hash": "23bf2b46b578fa3aa89374d1680a6f6e3e85089c3221a9f487c9f778c7b28536"
	},
	{
		"id": "d0889108651d",
		"ts": "2026-10-31T19:10:42.513Z",
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
		"liquidityUsd": 812921.46,
		"hash": "d0889108651d6530f829d8a3cf3d2ee6d532e90f57038686cd9ddee1bde707f7"
	},
	{
		"id": "c8254ffe4ed7",
		"ts": "2026-10-31T19:10:42.750Z",
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
		"liquidityUsd": 1277917.98,
		"hash": "c8254ffe4ed74df6edcfcf76039ce902c5e99e5cdbf0457405c91b3377cc5fe2"
	},
	{
		"id": "c02e78f9e73b",
		"ts": "2026-10-31T19:10:43.021Z",
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
		"liquidityUsd": 7870567.32,
		"hash": "c02e78f9e73b285dc427c2f2b9f86d8a9926cd7acd939fda33f8fcbe8432a35c"
	},
	{
		"id": "82b69533fdfe",
		"ts": "2026-10-31T19:10:43.264Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3552418.22,
		"hash": "82b69533fdfe6773ae15d3e91ab52579693e9efeb0ae67d6ea86bc5996e17076"
	},
	{
		"id": "51bf7760715e",
		"ts": "2026-10-31T19:10:43.516Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 500047.45,
		"hash": "51bf7760715e84172ff185e23eb7d70d5ce39cded43e1aea9fa240b7fc9a49d6"
	},
	{
		"id": "30f5d7995e22",
		"ts": "2026-10-31T19:10:43.758Z",
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
		"liquidityUsd": 1745317.12,
		"hash": "30f5d7995e2285e5454a19cf0274191eed51c9722d1c5d57c7be7cc35915b449"
	},
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
	}
]
