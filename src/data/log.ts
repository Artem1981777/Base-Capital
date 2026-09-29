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
	"updatedAt": "2026-09-29T11:02:18.206Z",
	"tokensScored": 18929,
	"verdictsIssued": 18929,
	"safe": 16100,
	"risky": 1365,
	"likelyRug": 1464,
	"ticks": 1076
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "9c60bc6db577",
		"ts": "2026-09-29T11:02:13.482Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 158106717.16,
		"hash": "9c60bc6db577c343379fe25cb0ff3f2e4e6628b51fc817aa1bc53a819cc06f91"
	},
	{
		"id": "6599987afd14",
		"ts": "2026-09-29T11:02:13.949Z",
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
		"liquidityUsd": 17710576.26,
		"hash": "6599987afd140df4c07333cb355794cb5077743d477a857c34183a58d821206a"
	},
	{
		"id": "d463742cdcb1",
		"ts": "2026-09-29T11:02:14.199Z",
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
		"liquidityUsd": 885179.61,
		"hash": "d463742cdcb1e218a5fbf0fe0bffd516048470c1fdf190dba756b5f9b713f45c"
	},
	{
		"id": "d810afe7b3ac",
		"ts": "2026-09-29T11:02:14.449Z",
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
		"liquidityUsd": 42248771.82,
		"hash": "d810afe7b3acbdd1ff5b3de494e3c4ba03bd217f68625205c22a29cbf1dd3db3"
	},
	{
		"id": "3da4c9578548",
		"ts": "2026-09-29T11:02:14.699Z",
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
		"liquidityUsd": 4660485.06,
		"hash": "3da4c95785485d787b12ecc99ada537ce0456ed7715a9dedf43234acc660dc9d"
	},
	{
		"id": "0a537c8f83dc",
		"ts": "2026-09-29T11:02:14.944Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1308146.97,
		"hash": "0a537c8f83dcd848dc2fb836f690f7237b63780b9772e82b27a0001f07d43983"
	},
	{
		"id": "eaacc4c27d75",
		"ts": "2026-09-29T11:02:15.201Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42248771.82,
		"hash": "eaacc4c27d7582b59aa7ee4ad81ceafa99ecf6dc6132c4781d9d8122df7215e1"
	},
	{
		"id": "3e6c7ddf75e1",
		"ts": "2026-09-29T11:02:15.449Z",
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
		"liquidityUsd": 694327,
		"hash": "3e6c7ddf75e1cf072e028088a48e5ccc1fd06df6ad8c2d1916f3bbdb152fba8f"
	},
	{
		"id": "c3f76c6e3745",
		"ts": "2026-09-29T11:02:15.704Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1802539.14,
		"hash": "c3f76c6e374579cee762b3ea9fd1c842c51866a76dcf06391b3288769591f2cc"
	},
	{
		"id": "a29abfa6ce87",
		"ts": "2026-09-29T11:02:15.962Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4262989.68,
		"hash": "a29abfa6ce87fa68438666c711c91c616149a3aaf076be720cdfa6bcb5c2f31d"
	},
	{
		"id": "c9bf46e6f030",
		"ts": "2026-09-29T11:02:16.194Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 435669.31,
		"hash": "c9bf46e6f030b8c1878ab8b60f1b38ed0b915a211bb0ffab679810dcb7ed1949"
	},
	{
		"id": "58b9ef7ec016",
		"ts": "2026-09-29T11:02:16.482Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2800156.8,
		"hash": "58b9ef7ec0166a9dc6df5eecad6e086f43c335bb5ccc004deb00b9d3e48b10be"
	},
	{
		"id": "f56dd55c1011",
		"ts": "2026-09-29T11:02:16.711Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 228164.3,
		"hash": "f56dd55c10113bef99826fe9c490055fc6b0348a5331da7d2d76deeda1d9bf8e"
	},
	{
		"id": "5e50224c3cb3",
		"ts": "2026-09-29T11:02:17.068Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1666400.78,
		"hash": "5e50224c3cb380205cbc2b6529111e5f8023f46c7671e835f0ae4e96659a884c"
	},
	{
		"id": "8bd9f893599a",
		"ts": "2026-09-29T11:02:17.291Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 840889.74,
		"hash": "8bd9f893599a868a8af881789abcd7ddbace7553855c1f0c2ecde3413b559a28"
	},
	{
		"id": "0c926d468776",
		"ts": "2026-09-29T11:02:17.523Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18284956.78,
		"hash": "0c926d46877614f39bd2875413fcc40febef12d53e1b4b9c720d262a33084d6c"
	},
	{
		"id": "865c2de17ec4",
		"ts": "2026-09-29T11:02:17.752Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 222062.37,
		"hash": "865c2de17ec47d1b022816c5c719f745e61dc5b0c707a8f22020570bc49034b2"
	},
	{
		"id": "38a5ff05275f",
		"ts": "2026-09-29T11:02:17.975Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1563146.29,
		"hash": "38a5ff05275faf8b2ae2863ef4cd35d626cf2e0effcc9bcfd4e53b5acc3a7dec"
	},
	{
		"id": "d6159df4b258",
		"ts": "2026-09-29T11:02:18.206Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 740106.38,
		"hash": "d6159df4b258f296f2e2b70f73c5a558b190d98c30d0353a471bc5a6a6c1e4b9"
	},
	{
		"id": "ad175238870e",
		"ts": "2026-09-29T04:00:31.836Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156225005.65,
		"hash": "ad175238870ec76c1c23671c8c83891ff7f5cf48d5777da7563cb66bf2fb1379"
	},
	{
		"id": "bf1ed66dabca",
		"ts": "2026-09-29T04:00:32.645Z",
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
		"liquidityUsd": 17078002.77,
		"hash": "bf1ed66dabca3a2fc6315008f79931a641d83bbdef84d5162ddbe71ffaa58ad6"
	},
	{
		"id": "f517e89a1072",
		"ts": "2026-09-29T04:00:32.912Z",
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
		"liquidityUsd": 875689.14,
		"hash": "f517e89a1072da294ddd71df8bbc3e294305bf0ea65cebdca38d3712abbd1fd4"
	},
	{
		"id": "ad73deb37368",
		"ts": "2026-09-29T04:00:33.171Z",
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
		"liquidityUsd": 42053252.24,
		"hash": "ad73deb37368509e02df29d90f923f18f107dc559c5478ad6d27b4c0d331b6fb"
	},
	{
		"id": "4af70472928d",
		"ts": "2026-09-29T04:00:33.417Z",
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
		"liquidityUsd": 4556252.95,
		"hash": "4af70472928dde3f2cd9d1ee5094945ee3c9658622bdbac8f2ac85064323d3bd"
	},
	{
		"id": "607ed86a278c",
		"ts": "2026-09-29T04:00:33.668Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1279090.9,
		"hash": "607ed86a278cb6cd36a17c91a6855ddbb4278f3909be2a2b773ae233ac0b43b1"
	},
	{
		"id": "e00f56d38391",
		"ts": "2026-09-29T04:00:33.906Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42053252.24,
		"hash": "e00f56d383915c69e2070631b11265a344d78d09464182f0da2aa960b09bd74a"
	},
	{
		"id": "786a65fd3ae0",
		"ts": "2026-09-29T04:00:34.176Z",
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
		"liquidityUsd": 1220306.08,
		"hash": "786a65fd3ae060b56117ca02b0383a0b52bcf33cfb8af5d665c0ff08bcd3627c"
	},
	{
		"id": "92bb9e7316a1",
		"ts": "2026-09-29T04:00:34.417Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1803351.36,
		"hash": "92bb9e7316a12bb5b56ef9f0eb767df8b8efd45c795948961dd2b11893e7fc5d"
	},
	{
		"id": "fb103320e9c1",
		"ts": "2026-09-29T04:00:34.736Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 415068.89,
		"hash": "fb103320e9c1a9b290f418ee42f16be240754f7f70943ba89ffe1e081d2fda7a"
	},
	{
		"id": "42331516027c",
		"ts": "2026-09-29T04:00:34.959Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4138403.41,
		"hash": "42331516027c6b60e2a98cd3d512e0b480db925d254b7997ca5734e6379cbaa0"
	},
	{
		"id": "cf6af8ce3178",
		"ts": "2026-09-29T04:00:35.182Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2740243.19,
		"hash": "cf6af8ce3178b0da83dbe9fa9eff3a8ebf292c678f4670c704f2f4b0a22345f0"
	},
	{
		"id": "eecfb4bbb2a4",
		"ts": "2026-09-29T04:00:35.510Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1542410.57,
		"hash": "eecfb4bbb2a451394f32047dc49ce251c2cc11456c571887e5495fa45b9805db"
	},
	{
		"id": "a2a096582c9c",
		"ts": "2026-09-29T04:00:35.733Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1638361.26,
		"hash": "a2a096582c9c1d9157aedf21d154554252414d4534addc1aec0de84dea9284a9"
	},
	{
		"id": "5dbe76fae1db",
		"ts": "2026-09-29T04:00:35.955Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 849806.05,
		"hash": "5dbe76fae1db86e3def35d0d674273e2db2d49db7d9b3563f258fdf1831e893e"
	},
	{
		"id": "26ae6c307e46",
		"ts": "2026-09-29T04:00:36.178Z",
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
		"liquidityUsd": 407744.32,
		"hash": "26ae6c307e46189c7d14766db0e5952725c532ec348a9e48388324c9b31b5b01"
	},
	{
		"id": "412781c0847b",
		"ts": "2026-09-29T04:00:36.408Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 235831.63,
		"hash": "412781c0847b3d07273b07c00e4eca5afc30ef12421e1a90a96127854de18115"
	},
	{
		"id": "a2018ee9d62f",
		"ts": "2026-09-29T04:00:36.630Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17653802.37,
		"hash": "a2018ee9d62f63c02acd9f98f02637c38629de47c1fb8a5908f0e81ab3ab99a7"
	},
	{
		"id": "71fd2134df33",
		"ts": "2026-09-29T04:00:36.853Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 735389.68,
		"hash": "71fd2134df3340107ca7f28fffa8e4166c19fb3958389bd6d354b89928effb77"
	},
	{
		"id": "e922e2b34c20",
		"ts": "2026-09-28T23:39:38.236Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157068980.54,
		"hash": "e922e2b34c20d189242ba6fc9dae93d83fb9c6984446e239eb55719ae312b687"
	},
	{
		"id": "2a622b077ca5",
		"ts": "2026-09-28T23:39:38.467Z",
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
		"liquidityUsd": 13554093.72,
		"hash": "2a622b077ca591710c53cb5e557e818c4d1900a64361f51d4e1490d3cef0940a"
	},
	{
		"id": "92ee1c4574e7",
		"ts": "2026-09-28T23:39:38.690Z",
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
		"liquidityUsd": 883897.12,
		"hash": "92ee1c4574e7b1fb6ce610f87412cbc4a7e48e5deb48e8f2ee2086c872267100"
	},
	{
		"id": "3a2a180aaaf1",
		"ts": "2026-09-28T23:39:38.883Z",
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
		"liquidityUsd": 41685558.52,
		"hash": "3a2a180aaaf16d88b1c1c8d2fa6089276f101eeac3d5c91c44ade53841102db9"
	},
	{
		"id": "517c02234752",
		"ts": "2026-09-28T23:39:39.098Z",
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
		"liquidityUsd": 4657545.33,
		"hash": "517c022347524caf68c68c782ce72f7548d6d61ba630d27fde6f76bbcfe3f129"
	},
	{
		"id": "0d8f4e14fe45",
		"ts": "2026-09-28T23:39:39.313Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1291836.4,
		"hash": "0d8f4e14fe45eae5e189787bcdbab1cf5b59c895f86f3eea89e6a825c29807a5"
	},
	{
		"id": "5779154fc393",
		"ts": "2026-09-28T23:39:39.537Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41685558.52,
		"hash": "5779154fc393af54b15a446740fcd318c9fd609cc0738f4d423f636b05a1e8d3"
	},
	{
		"id": "44a78134c54a",
		"ts": "2026-09-28T23:39:39.737Z",
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
		"liquidityUsd": 1209550.36,
		"hash": "44a78134c54acb08f0042898128706d3f6607046576867fddf9f1ffd39f56467"
	},
	{
		"id": "07e34a5c767f",
		"ts": "2026-09-28T23:39:39.953Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1732985.23,
		"hash": "07e34a5c767fab18d35fa2f2f2a26837bc0b1de2878f9f81f635fe3e7dfa7cbd"
	},
	{
		"id": "e802e55c84bb",
		"ts": "2026-09-28T23:39:40.149Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4011578.26,
		"hash": "e802e55c84bb0e2ae5246a6bfb3db168c5da6cb0e070277323b831c30204c4c7"
	},
	{
		"id": "a60a009edd1b",
		"ts": "2026-09-28T23:39:40.331Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2771751.8,
		"hash": "a60a009edd1b3c4623811196f4270275aa842008f6dd83e31c7b15e7476b8c73"
	},
	{
		"id": "caf710f53735",
		"ts": "2026-09-28T23:39:40.509Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 332199.89,
		"hash": "caf710f53735deb12c026608e8c3cabca520a497c0f1c215e0c2169ea44c9b30"
	},
	{
		"id": "f4bdc99f6d01",
		"ts": "2026-09-28T23:39:40.693Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1636805.77,
		"hash": "f4bdc99f6d01e1b1e80a27dbae59eb4d41fefdf5dfbb72c88cd3c90a3207d5f8"
	},
	{
		"id": "09e24536d700",
		"ts": "2026-09-28T23:39:40.886Z",
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
		"liquidityUsd": 435522.27,
		"hash": "09e24536d7005fe623abf0b599f124132bdc0b005f29b4ed29cc131179bff087"
	},
	{
		"id": "07521795d63a",
		"ts": "2026-09-28T23:39:41.085Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1555920.12,
		"hash": "07521795d63adc5c42dc7eed54b946a2200ef88e89cbd71480af1b2c5a1ecf71"
	},
	{
		"id": "8215448eb8b1",
		"ts": "2026-09-28T23:39:41.262Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 843978,
		"hash": "8215448eb8b1e395319df369d622201091823ec1b434d7ad5bf2ef3dac90df3f"
	},
	{
		"id": "75338c39fa43",
		"ts": "2026-09-28T23:39:41.443Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18082968.5,
		"hash": "75338c39fa43880a299992ff85169ad581ec7b002f1deb9dfad97052891d8822"
	},
	{
		"id": "f55407a83923",
		"ts": "2026-09-28T23:39:41.619Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 838413.55,
		"hash": "f55407a8392366054432b88c3ff2514d6b3311af758eb21542f6e72a66ec6e85"
	},
	{
		"id": "f6582a39fd2b",
		"ts": "2026-09-28T23:39:41.824Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 691160.78,
		"hash": "f6582a39fd2bac5babfa10c02d2e1bdbb705775e9f71f18df0f59588ca66e96a"
	},
	{
		"id": "974ea486e71a",
		"ts": "2026-09-28T18:23:37.730Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157501768.89,
		"hash": "974ea486e71a93f8289f528017d5a9270239c58c67db7cb8a1cb06131c9e5149"
	},
	{
		"id": "e7500d23dbc6",
		"ts": "2026-09-28T18:23:38.579Z",
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
		"liquidityUsd": 13587664.21,
		"hash": "e7500d23dbc67359a8e19d8992a7e792cabe3c4a006d15b5a559c87d7cd124af"
	},
	{
		"id": "12eacce44149",
		"ts": "2026-09-28T18:23:39.061Z",
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
		"liquidityUsd": 886516.56,
		"hash": "12eacce441499b859ea55365921b11664d0714c96755716f6de2ed47c6ef28cd"
	},
	{
		"id": "d61f68c870c7",
		"ts": "2026-09-28T18:23:39.520Z",
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
		"liquidityUsd": 41570338.73,
		"hash": "d61f68c870c7f1772dcdc2ea5abc48e5db33b60ee0f1c8571e95506f4643fb0c"
	},
	{
		"id": "b65f796fc331",
		"ts": "2026-09-28T18:23:39.980Z",
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
		"liquidityUsd": 4635623.7,
		"hash": "b65f796fc3314e934d4070505069a822f082706aef4a54ad42d0e3c49f99cff1"
	},
	{
		"id": "b046823463b2",
		"ts": "2026-09-28T18:23:40.270Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1306539.61,
		"hash": "b046823463b2542d3759ad1badbea04620aa20552e6bb8e9698dee4277605fad"
	},
	{
		"id": "9df26c59bd01",
		"ts": "2026-09-28T18:23:40.536Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41570338.73,
		"hash": "9df26c59bd01e959ce79ca8ca11f9276c05b91b93699697cd8007989a3cc1ed7"
	},
	{
		"id": "5a9b5d2faf7c",
		"ts": "2026-09-28T18:23:40.995Z",
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
		"liquidityUsd": 1308755.68,
		"hash": "5a9b5d2faf7c366e1bf265f4e6420782452d97c7b90ddfda1d42920ca78dd790"
	},
	{
		"id": "a623af81be67",
		"ts": "2026-09-28T18:23:41.262Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2816479.73,
		"hash": "a623af81be6734cedb836c7caa70a355ad49bacae20848854c3b30f6a2b601fb"
	},
	{
		"id": "644206e10ce7",
		"ts": "2026-09-28T18:23:41.534Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1635711.03,
		"hash": "644206e10ce7a9d6778163c35aaf5bbd4a72731befd010d49689f7288a3e7e94"
	},
	{
		"id": "f31d7a06707d",
		"ts": "2026-09-28T18:23:41.782Z",
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
		"liquidityUsd": 427103.06,
		"hash": "f31d7a06707d381eada277cba10684bff0c98ad364d2ee65cd0236b1689bb588"
	},
	{
		"id": "deadd13d6c72",
		"ts": "2026-09-28T18:23:42.030Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4001992.81,
		"hash": "deadd13d6c72434e32f209d0c5147b63de62d3820be098649f17e7ffb4dce340"
	},
	{
		"id": "80beb9d3b477",
		"ts": "2026-09-28T18:23:42.361Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 701198.23,
		"hash": "80beb9d3b47751d60710971dd4fd6b08259d436d3f3c9a92bbae7a9d2bf7b20d"
	},
	{
		"id": "f2a1496e705d",
		"ts": "2026-09-28T18:23:42.607Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1568992.47,
		"hash": "f2a1496e705d438cbc0008c5ef19440b6af4be02a8756d5c29d4b40034005cdc"
	},
	{
		"id": "236b6699e76a",
		"ts": "2026-09-28T18:23:42.851Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 301566.31,
		"hash": "236b6699e76aea31d57e81eeefd66dc7d5ae72e65221bab793ae96b69c174f82"
	},
	{
		"id": "0e7d4eafd25f",
		"ts": "2026-09-28T18:23:43.095Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1589103.76,
		"hash": "0e7d4eafd25f8150c300b806076a391226ed80225a6dc39f6c9b5fa2e300c156"
	},
	{
		"id": "7443e0644275",
		"ts": "2026-09-28T18:23:43.348Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2098494.9,
		"hash": "7443e064427575791dc6d30c41f34bab99c4d0b278a0471a5a893862197058f4"
	},
	{
		"id": "203aed9648f1",
		"ts": "2026-09-28T18:23:43.637Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 822053.88,
		"hash": "203aed9648f17fb82883d032fc7aaf19c22cf09d4739cbe376bc11c3335481e9"
	},
	{
		"id": "5d2a8b4ebf10",
		"ts": "2026-09-28T18:23:43.884Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 676599.97,
		"hash": "5d2a8b4ebf10fddc6132d81f1efb66da13b2c62e10de2476630e863c89c77ab1"
	},
	{
		"id": "efcdd8939b46",
		"ts": "2026-09-28T10:29:04.740Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155397751.91,
		"hash": "efcdd8939b461c4185f6a8dcc259b1a68f0bcc31f1a3c7889ca26e1b58087d12"
	},
	{
		"id": "0d2eae25ee9d",
		"ts": "2026-09-28T10:29:05.215Z",
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
		"liquidityUsd": 16850421.35,
		"hash": "0d2eae25ee9d4993dc77c5ae050fa9cab61db2634bcdc23a3008a8d39cedd013"
	},
	{
		"id": "29eafc3ff86b",
		"ts": "2026-09-28T10:29:05.466Z",
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
		"liquidityUsd": 882175.43,
		"hash": "29eafc3ff86bf99881b184a6083c2e7eea463f2e7741744d070e77be8cf9b0db"
	},
	{
		"id": "174ac8c5aeed",
		"ts": "2026-09-28T10:29:05.718Z",
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
		"liquidityUsd": 40258273.01,
		"hash": "174ac8c5aeed4508591ec28e861e0d0ec4bd8202230a241dbbb1fac4d21e3da6"
	},
	{
		"id": "af674b0cc403",
		"ts": "2026-09-28T10:29:05.983Z",
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
		"liquidityUsd": 4489867.73,
		"hash": "af674b0cc403e4e727c3270c401d45e3a7f06381227b0e7d728e71647d94a6dd"
	},
	{
		"id": "49f8b2ecc9a4",
		"ts": "2026-09-28T10:29:06.253Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1282768.39,
		"hash": "49f8b2ecc9a481ec6a8e73670e0010a586d0718accf00045eda537f0a5ec4f47"
	},
	{
		"id": "383cfdec15b6",
		"ts": "2026-09-28T10:29:06.502Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 40258273.01,
		"hash": "383cfdec15b697918825d767cd516d20a6a86142e5a776a4eab683510e892947"
	},
	{
		"id": "426077e964b0",
		"ts": "2026-09-28T10:29:06.757Z",
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
		"liquidityUsd": 2433480.44,
		"hash": "426077e964b003cf60390eaaef18e4b4ae5e8d495be7806f76b43fcb8f9a41aa"
	},
	{
		"id": "6ec4324a61f5",
		"ts": "2026-09-28T10:29:07.008Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2788808.87,
		"hash": "6ec4324a61f53a9ae2625795332f0d7a94829a850bbc70f581ae4ff7c9c9c40c"
	},
	{
		"id": "d8b7eeeea0db",
		"ts": "2026-09-28T10:29:07.264Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 437841.53,
		"hash": "d8b7eeeea0db24b32e4b23657be144ab0fe5e644f46a9498593e8ef15e99e060"
	},
	{
		"id": "e5150d4ac9ec",
		"ts": "2026-09-28T10:29:07.495Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 696698.62,
		"hash": "e5150d4ac9ec4f1e146f5b66e27b4db8ecb9c43f49a8ceaf1aab424211c8c812"
	},
	{
		"id": "6fc139286e52",
		"ts": "2026-09-28T10:29:07.728Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 341105.59,
		"hash": "6fc139286e524aa0ffa1e0c1f11ebd6712849b7855a498363c265c82751c43b9"
	},
	{
		"id": "34c5b0998db2",
		"ts": "2026-09-28T10:29:07.959Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1550360.48,
		"hash": "34c5b0998db21bb3e948b0791b6f7314f07cab056ccd9e2245d2fc4073764c17"
	},
	{
		"id": "6acf994e9a55",
		"ts": "2026-09-28T10:29:08.192Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3825600.79,
		"hash": "6acf994e9a55b9a1345ec58efe58e71d21be3ab0233f845e150ed3a6b3f08d40"
	},
	{
		"id": "648a5ab4b45c",
		"ts": "2026-09-28T10:29:08.423Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1546691.54,
		"hash": "648a5ab4b45ca12d0d3b14b17639e6adb570e6d4cbf848d6223f3c417c69351e"
	},
	{
		"id": "e9cc376c5717",
		"ts": "2026-09-28T10:29:08.656Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18407774.68,
		"hash": "e9cc376c5717c735d4d2a45da024f46e44750cbc16b26cc0dfcc3f93be32ccd1"
	},
	{
		"id": "b65211e1cad3",
		"ts": "2026-09-28T10:29:08.887Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 652544.85,
		"hash": "b65211e1cad3b266ccfddab5dafffe4dd9c3568faf4020825ec163c4e6f7ebc6"
	},
	{
		"id": "413c79b99672",
		"ts": "2026-09-28T10:29:09.119Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1156567.4,
		"hash": "413c79b99672bd47a70d7ffd5553f1a9dcd82789b547815d87a81cf16ede6456"
	},
	{
		"id": "03f753dc9253",
		"ts": "2026-09-28T10:29:09.353Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4398823.96,
		"hash": "03f753dc9253dda2655f78fbaf8eef8defddbad08224566dad940bee2f363939"
	},
	{
		"id": "5068419f9547",
		"ts": "2026-09-28T03:24:20.302Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155417296.59,
		"hash": "5068419f9547b9916c56f3e3adc3f5ef7ee809da9b8ad4ff7dca7f4b5fe4e1fd"
	},
	{
		"id": "112f8320aebe",
		"ts": "2026-09-28T03:24:20.554Z",
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
		"liquidityUsd": 15703012.83,
		"hash": "112f8320aebe64c2c4a0b595b9c2b5db977e2efbe071dab88276ecfbb37cec4d"
	},
	{
		"id": "654087dc53d3",
		"ts": "2026-09-28T03:24:20.783Z",
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
		"liquidityUsd": 883638.23,
		"hash": "654087dc53d3431642b9c6b2cdcdd498f387431c0b7a8f212ecdd39096dc66fd"
	},
	{
		"id": "b02c680cd5a9",
		"ts": "2026-09-28T03:24:21.006Z",
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
		"liquidityUsd": 41260532.64,
		"hash": "b02c680cd5a97addc08cea4884461e2fe0426b7052590f4f96387200c1325170"
	},
	{
		"id": "8d8384a55155",
		"ts": "2026-09-28T03:24:21.230Z",
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
		"liquidityUsd": 4586501.87,
		"hash": "8d8384a55155924ca9b5c1292294d750ce3e0f0fcf603c669a0316a94c15f60b"
	},
	{
		"id": "a9b8033761fc",
		"ts": "2026-09-28T03:24:21.447Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1316584.03,
		"hash": "a9b8033761fc795203e792f619a4393ada4188b40b9afbbf1bc9f2ae0a28cef5"
	},
	{
		"id": "a3d62b4c2d05",
		"ts": "2026-09-28T03:24:21.680Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41260532.64,
		"hash": "a3d62b4c2d05be5ef6a4b7208f9cf2904d5c1c92c42e853dc1fe390836214101"
	},
	{
		"id": "1e053491e0db",
		"ts": "2026-09-28T03:24:21.924Z",
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
		"liquidityUsd": 2437339.89,
		"hash": "1e053491e0db0d0433c2c6d3b1d3975eca2756c6125d62f79364d65227035c94"
	},
	{
		"id": "ce084559c403",
		"ts": "2026-09-28T03:24:22.152Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 714320.43,
		"hash": "ce084559c403bce73a13fc14ae2361ee255e64abe3db7c54e1818b223f51be6c"
	},
	{
		"id": "14b36a234c36",
		"ts": "2026-09-28T03:24:22.368Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2806749.39,
		"hash": "14b36a234c3685418adee2f4550180f7300d331ab6b522d67bd556ec5878daee"
	},
	{
		"id": "04f522142a6c",
		"ts": "2026-09-28T03:24:22.570Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 318190.75,
		"hash": "04f522142a6c81877533940c6f73882bab6f2c4f00bdb202c99391954490ef10"
	},
	{
		"id": "2b625698b007",
		"ts": "2026-09-28T03:24:22.773Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1567236.06,
		"hash": "2b625698b0075b4acc3244eb52f91db86a556a04a0caeef5ad54817d3d13af45"
	},
	{
		"id": "7d22cb844aeb",
		"ts": "2026-09-28T03:24:22.974Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4006970.32,
		"hash": "7d22cb844aebe8c4ad1fe35d33e8e68312e2360486c10541dfbca64eaa20a14f"
	},
	{
		"id": "fd799555f071",
		"ts": "2026-09-28T03:24:23.195Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1496250.01,
		"hash": "fd799555f0719073660a87c705bb37befa3715decafc74350756a896ff7fbada"
	},
	{
		"id": "775f1b1f5aff",
		"ts": "2026-09-28T03:24:23.423Z",
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
		"liquidityUsd": 443276.71,
		"hash": "775f1b1f5aff325bf8f084d504ada960222dc58c0eef45b3a1c3a70ce50f3349"
	},
	{
		"id": "0abda1f25885",
		"ts": "2026-09-28T03:24:23.660Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18588715.73,
		"hash": "0abda1f2588508055099c9180ccd8ef2a7f08e35e7aa3b283691368cfb567a82"
	},
	{
		"id": "b23107ed1f8f",
		"ts": "2026-09-28T03:24:23.863Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 670148.17,
		"hash": "b23107ed1f8f663c84067a44423865d26d66821316fade3a8dc6b1c55555e6f6"
	},
	{
		"id": "ae5a4bfd0881",
		"ts": "2026-09-28T03:24:24.080Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4476790.82,
		"hash": "ae5a4bfd088120112813cd2f83e351c4e778bba96032d65929f954193af2fcd2"
	},
	{
		"id": "0d65001c874d",
		"ts": "2026-09-28T03:24:24.285Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1232955.86,
		"hash": "0d65001c874d9accbbf354b089a6a1ec9cf7be0354f5bfcbf0a317ffeaee7899"
	},
	{
		"id": "5376727c01c6",
		"ts": "2026-09-27T23:35:29.490Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156359458.15,
		"hash": "5376727c01c6b196c1650dc3e33f4f55480a2aeedd91f122aae2d3b3c48aadcd"
	},
	{
		"id": "b19b95dbf61b",
		"ts": "2026-09-27T23:35:29.736Z",
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
		"liquidityUsd": 13358968.25,
		"hash": "b19b95dbf61b0dfe65e01a1886fffa2737fc5f15893e1270c12884a4c7a4c03e"
	},
	{
		"id": "4557114a366d",
		"ts": "2026-09-27T23:35:29.985Z",
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
		"liquidityUsd": 894862.42,
		"hash": "4557114a366dab883df6058ea80189f6192d7ab394b3a85b522cf03ca0526e72"
	},
	{
		"id": "7292c7418227",
		"ts": "2026-09-27T23:35:30.272Z",
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
		"liquidityUsd": 42059970.01,
		"hash": "7292c741822721ae3934337bffe3a3d4ddc8f44cb761d6657bd404a20a19f361"
	},
	{
		"id": "530e021339c4",
		"ts": "2026-09-27T23:35:30.533Z",
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
		"liquidityUsd": 4629545.8,
		"hash": "530e021339c4960dd5bc8858bb5b298a505de1ea45507e17c41160f230156212"
	},
	{
		"id": "97a8d491d92b",
		"ts": "2026-09-27T23:35:30.783Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1340622.56,
		"hash": "97a8d491d92be8e36628648574279ba7e8c90d9de6ba4f774ea2e7f2c2b26328"
	},
	{
		"id": "89654bcee520",
		"ts": "2026-09-27T23:35:31.030Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42059970.01,
		"hash": "89654bcee520e3a5f22360e046a1c328f5300958eacb5249b42452c8642e7739"
	},
	{
		"id": "e7c338df7fa3",
		"ts": "2026-09-27T23:35:31.275Z",
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
		"liquidityUsd": 2465357.3,
		"hash": "e7c338df7fa3708a92acb42d8429ec6942ce12e75181c93bded34ff00dfb6c5f"
	},
	{
		"id": "bcfd9b17c798",
		"ts": "2026-09-27T23:35:31.618Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 750184.55,
		"hash": "bcfd9b17c7988bda57630c5f9c67e8181c1936289785bdce6ab886a0404b6044"
	},
	{
		"id": "41c254a70fbb",
		"ts": "2026-09-27T23:35:31.889Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2912302.94,
		"hash": "41c254a70fbb1cec25a7d44f6d503f8d7e27d109afbd01c4b4a877424eab573f"
	},
	{
		"id": "64bc7fe52ec4",
		"ts": "2026-09-27T23:35:32.119Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 332983.79,
		"hash": "64bc7fe52ec4ddcc731ffb508a8ce11a2631d5497f4d58be4506298223cd7a5e"
	},
	{
		"id": "8eb21573b950",
		"ts": "2026-09-27T23:35:32.355Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1574600.2,
		"hash": "8eb21573b9501167fce75493263c22b671d70f1ee4c477fec69e0140f0afa081"
	},
	{
		"id": "649a1a52ea65",
		"ts": "2026-09-27T23:35:32.586Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4042224.47,
		"hash": "649a1a52ea658ade5288166b3048332631fddb65ed0780587269f3e24a06a59d"
	},
	{
		"id": "b9534989a944",
		"ts": "2026-09-27T23:35:32.811Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19019760.73,
		"hash": "b9534989a94450fee54321e99e590431af0aae9058ba9442dcfef94fff4e248d"
	},
	{
		"id": "b40bb8ffe6d9",
		"ts": "2026-09-27T23:35:33.040Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1597693.96,
		"hash": "b40bb8ffe6d946c08630d17864b58be2145209f1395ada83bbb09b0e4504cfa8"
	},
	{
		"id": "e6887cd016f4",
		"ts": "2026-09-27T23:35:33.268Z",
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
		"liquidityUsd": 402998.98,
		"hash": "e6887cd016f4633aadae177644819ad481092bee80e335207fd6176fa6edec21"
	},
	{
		"id": "1c2613dd96a2",
		"ts": "2026-09-27T23:35:33.496Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 669666.89,
		"hash": "1c2613dd96a204893af8efd444a86d7cf348f95f9f30e56f658c2d635b08aac0"
	},
	{
		"id": "855656fa444e",
		"ts": "2026-09-27T23:35:33.730Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4515659.81,
		"hash": "855656fa444e0dd81c42d1315908910aea1a3d84b92bb760f9ec93884fbb8ae9"
	},
	{
		"id": "60bab4bca16f",
		"ts": "2026-09-27T23:35:33.960Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1236298.26,
		"hash": "60bab4bca16f3d40602360a89c399e63f6f16c4c7f07cd85860b5763699e5409"
	},
	{
		"id": "48e3ee3bb739",
		"ts": "2026-09-27T20:48:09.848Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156712581.84,
		"hash": "48e3ee3bb739256fbb438aa83c5c4271759c09b45e38a91372e8bc05629a299f"
	},
	{
		"id": "1713b79411bf",
		"ts": "2026-09-27T20:48:10.119Z",
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
		"liquidityUsd": 18324318.63,
		"hash": "1713b79411bf84167a01e9d5164211e5a0809a0737878ede9edd37416a3a731d"
	},
	{
		"id": "5923e1eeb080",
		"ts": "2026-09-27T20:48:10.389Z",
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
		"liquidityUsd": 898365.84,
		"hash": "5923e1eeb080b01f70798a174914050e2a5b11568304867682e59115c8131795"
	},
	{
		"id": "5cc2079af7d1",
		"ts": "2026-09-27T20:48:10.645Z",
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
		"liquidityUsd": 42186607.38,
		"hash": "5cc2079af7d10c1b4bc8f7458ac8f35d142dbeac84532598a72ba6b3d0842f10"
	},
	{
		"id": "c26a44ad2b55",
		"ts": "2026-09-27T20:48:10.904Z",
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
		"liquidityUsd": 4604345.32,
		"hash": "c26a44ad2b55e7f708444cba306e7a7ad79988a1294c6ec800d4024a729c53cc"
	},
	{
		"id": "7b57f6a98325",
		"ts": "2026-09-27T20:48:11.161Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1346482.41,
		"hash": "7b57f6a9832527872a325b910633ecb0aa02465666db1912eeded55ebb9c68b8"
	},
	{
		"id": "de71a64d49c4",
		"ts": "2026-09-27T20:48:11.435Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42187084.09,
		"hash": "de71a64d49c4ed919d3fd6b90450b7e057f1fc15c75f141e3cb73a4b7f67dace"
	},
	{
		"id": "4bb9e55a4f26",
		"ts": "2026-09-27T20:48:11.694Z",
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
		"liquidityUsd": 2468522.05,
		"hash": "4bb9e55a4f269c613dad81a712e30479cabc92ba1337a8fdadb66dafdf031d16"
	},
	{
		"id": "573997ce6540",
		"ts": "2026-09-27T20:48:11.949Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2930767.57,
		"hash": "573997ce65406f305e1e11f2bd43c06991ce28e7c748fe9f9cca5e3a52073d9d"
	},
	{
		"id": "a743cbe2fabb",
		"ts": "2026-09-27T20:48:12.226Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 755251.44,
		"hash": "a743cbe2fabb938eb53b3d0690b06688690643af3abb79c25bbeafbb9c4bbfe2"
	},
	{
		"id": "c47b07f18fb4",
		"ts": "2026-09-27T20:48:12.474Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 365355.09,
		"hash": "c47b07f18fb44a909db1ac0bb43fe55651a4a22e891cfd969341293901c4daf9"
	},
	{
		"id": "ce582735c8c8",
		"ts": "2026-09-27T20:48:12.718Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1595369.73,
		"hash": "ce582735c8c8db52e54b884ae83c7f12a367bfab7c8b2c850bedb3a692ed8689"
	},
	{
		"id": "a1bda0a7973a",
		"ts": "2026-09-27T20:48:12.961Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3948191.9,
		"hash": "a1bda0a7973af5092c35986c3d9a67ccfedef07665d0fc4285cf6af94c60c7be"
	},
	{
		"id": "af180211b35e",
		"ts": "2026-09-27T20:48:13.193Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19262352.74,
		"hash": "af180211b35e90efde1f5d90a7d2b74807bdcf48a9b5bb1970c881756975a560"
	},
	{
		"id": "40356f8551f2",
		"ts": "2026-09-27T20:48:13.453Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 821899.2,
		"hash": "40356f8551f23b9a1ecda84067d2b6fd1ffceb0c32303e9cd122e365ff2cb2c9"
	},
	{
		"id": "8cd07c97d95d",
		"ts": "2026-09-27T20:48:13.689Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 688809.7,
		"hash": "8cd07c97d95d1e1dd2002fb6feecb8f0bc22b9b103945c4e142ddfc1c39a9510"
	},
	{
		"id": "d20f8eaaf6ce",
		"ts": "2026-09-27T20:48:13.934Z",
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
		"liquidityUsd": 423122.97,
		"hash": "d20f8eaaf6ce83d53734c985580a7bf28ba72b5afabdc1c1f3bc5c7e2baacb7b"
	},
	{
		"id": "df2389e3f92f",
		"ts": "2026-09-27T20:48:14.178Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1240529.12,
		"hash": "df2389e3f92fcad9ee7959359a3db91e2de757da28f54f6c261cc2b7738c1b57"
	},
	{
		"id": "7a69f3fe5737",
		"ts": "2026-09-27T20:48:14.411Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4497505.57,
		"hash": "7a69f3fe5737494bb049d7738b1d911d8aff56f34e572be7e45ec38ba9bba02d"
	},
	{
		"id": "1e19dcd7833c",
		"ts": "2026-09-27T17:26:21.422Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156557721.37,
		"hash": "1e19dcd7833cabeaf287e692b9ae7207dd702df7b9f5006638fc02deb18e91b7"
	},
	{
		"id": "1561df06f71a",
		"ts": "2026-09-27T17:26:21.801Z",
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
		"liquidityUsd": 17431118.94,
		"hash": "1561df06f71ac458e0d35e69b0bbc9654906d2e47f03c6a2370f235d5916b02c"
	},
	{
		"id": "e55ef90e4a8d",
		"ts": "2026-09-27T17:26:22.013Z",
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
		"liquidityUsd": 897321.68,
		"hash": "e55ef90e4a8dbfc466c60d8235e20bb47054096f3c61f13ca7b9e74b05622ac5"
	},
	{
		"id": "81eda5950e7f",
		"ts": "2026-09-27T17:26:22.208Z",
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
		"liquidityUsd": 41704413.94,
		"hash": "81eda5950e7fe336dd4b2e09cd3e7e9ca354fd432803191bdb27f30942dfd690"
	},
	{
		"id": "cc380d00b831",
		"ts": "2026-09-27T17:26:22.406Z",
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
		"liquidityUsd": 4573275.32,
		"hash": "cc380d00b831bd7c82c45bef5712aa19a9a148bba7f24c7c6e26ef6ccc877499"
	},
	{
		"id": "aabf3549de86",
		"ts": "2026-09-27T17:26:22.598Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1341045.73,
		"hash": "aabf3549de869f66a7d47c951ddf8e051f9eebc7b258532021fefd761a768f2f"
	},
	{
		"id": "d0af876ccfda",
		"ts": "2026-09-27T17:26:22.789Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41704413.94,
		"hash": "d0af876ccfdae331e8b3738a070d7958769e2d1f461a17f0ff0c5b6d4502dfb9"
	},
	{
		"id": "533f394618c8",
		"ts": "2026-09-27T17:26:22.989Z",
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
		"liquidityUsd": 2466585.26,
		"hash": "533f394618c82cca0cfc4cde5cf022bacccced7fcbaa0094b12223ab1e9b8e7e"
	},
	{
		"id": "aeeea326cffd",
		"ts": "2026-09-27T17:26:23.189Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 368080.55,
		"hash": "aeeea326cffdc800156d2ba03ca129169a9fc6985be8cfdb6c332ee13f534fb3"
	},
	{
		"id": "8176f66961e2",
		"ts": "2026-09-27T17:26:23.405Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 753680.83,
		"hash": "8176f66961e264405e883429656ecc145fda44659e869647400d7127fc4e9c59"
	},
	{
		"id": "6dd2bbba7649",
		"ts": "2026-09-27T17:26:23.626Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2949771.1,
		"hash": "6dd2bbba764917faa471d1733447201066f2c3dcbc5a8117a02e8165168c9fec"
	},
	{
		"id": "df952402bdc0",
		"ts": "2026-09-27T17:26:23.802Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1624911.61,
		"hash": "df952402bdc0e5d71bd7b576c63374dcf1e6e51eb42eb24472ff851f42239c67"
	},
	{
		"id": "eefa43e68215",
		"ts": "2026-09-27T17:26:23.988Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3916407.72,
		"hash": "eefa43e6821589f713b26a0b8dbb1f135043424ca0f820047614d471d0572108"
	},
	{
		"id": "330fac7f84b4",
		"ts": "2026-09-27T17:26:24.189Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19234113.17,
		"hash": "330fac7f84b426a83237779f3236e916c157714dc01a0692c34cf55d40f2dbf6"
	},
	{
		"id": "a9f3e23be9f2",
		"ts": "2026-09-27T17:26:24.370Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 681768.72,
		"hash": "a9f3e23be9f293a97b18331bd93c2694dba9e6dbee29e1473326c514375de289"
	},
	{
		"id": "43dbedf50fa8",
		"ts": "2026-09-27T17:26:24.558Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 673338.8,
		"hash": "43dbedf50fa8eff710c1d595ed8c43f065ed9dfdd5b7faaedfa16751e6205f5d"
	},
	{
		"id": "9fa5a5e82ca4",
		"ts": "2026-09-27T17:26:24.745Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1237175.83,
		"hash": "9fa5a5e82ca42c96cf32ce9662b3fc5de2203e79b702ae08d263a4e3198095d1"
	},
	{
		"id": "86b7ac999afb",
		"ts": "2026-09-27T17:26:24.943Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4476562.06,
		"hash": "86b7ac999afbad1faccdbc48703b143c99f0acd0f80fb6201c88bed77c7fe9a1"
	},
	{
		"id": "41c47ac6f0b0",
		"ts": "2026-09-27T17:26:25.124Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 965988.57,
		"hash": "41c47ac6f0b0743ef1f01e4f11cb1a868324d663ff1c7c963f01d8ab0cdcd6e7"
	},
	{
		"id": "2bd967af1755",
		"ts": "2026-09-27T12:41:34.184Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156847183.16,
		"hash": "2bd967af175543d81a33549f071cb34e7a329619d00fea3751607ffbfbc31f00"
	},
	{
		"id": "1a81f6faba30",
		"ts": "2026-09-27T12:41:34.431Z",
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
		"liquidityUsd": 18987990.13,
		"hash": "1a81f6faba30e66bd9ba3a404485527626405ba754f2ab5b2e44c0d82d8ced64"
	},
	{
		"id": "1eb38a21ed1f",
		"ts": "2026-09-27T12:41:34.819Z",
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
		"liquidityUsd": 896326.31,
		"hash": "1eb38a21ed1f96563962f87c2dbea227b7d96958c9c2575f8212bf7c08b6fe8e"
	},
	{
		"id": "e55a6e00fa97",
		"ts": "2026-09-27T12:41:35.037Z",
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
		"liquidityUsd": 42304955.98,
		"hash": "e55a6e00fa97dc37ef60ac4342b59e9839affdb6efcaa464c8be88e6aceccba1"
	},
	{
		"id": "001dc01e495e",
		"ts": "2026-09-27T12:41:35.258Z",
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
		"liquidityUsd": 4645323.54,
		"hash": "001dc01e495eb7dd6f723f20607f13c9b6ddc5031cd8faeafcbf9f6979fa4bc9"
	},
	{
		"id": "f4f75de5e064",
		"ts": "2026-09-27T12:41:35.498Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1364250.16,
		"hash": "f4f75de5e0648ba805a08c8093984eafd23ed8fa2856eaeecf9e77c05f547356"
	},
	{
		"id": "2ff62b0e150e",
		"ts": "2026-09-27T12:41:35.720Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42304955.98,
		"hash": "2ff62b0e150ec7f1a3b0a6df230dbe24a7f4fd54bef40dd54a2f5e7eddd9f364"
	},
	{
		"id": "5b8f6074ccbd",
		"ts": "2026-09-27T12:41:35.970Z",
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
		"liquidityUsd": 2448566.82,
		"hash": "5b8f6074ccbdfa91a74fdcc240df72d7240aa0055179b30891b6150a2b5a2ef7"
	},
	{
		"id": "b05061c0cc6e",
		"ts": "2026-09-27T12:41:36.217Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 499949.56,
		"hash": "b05061c0cc6e6ba0605cf0d5efa16ef649056389a401d9921f4cc0dc9b92ba8a"
	},
	{
		"id": "0f4474799e43",
		"ts": "2026-09-27T12:41:36.435Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2926983.63,
		"hash": "0f4474799e4310ab3b9140c8bdabc02005d5f8c080be0a2ce66a47c4a5150ca1"
	},
	{
		"id": "2ee3d8bf6f78",
		"ts": "2026-09-27T12:41:36.645Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 774352.54,
		"hash": "2ee3d8bf6f78b237168e49eb56ea2e5c7ba7b5a0aad3cf179c9589ec28f5a7c3"
	},
	{
		"id": "e02dc8171194",
		"ts": "2026-09-27T12:41:36.851Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4017903.12,
		"hash": "e02dc817119433094286ebaf24b71028b6da025595fe078da1315047389d701a"
	},
	{
		"id": "4f1ce68c87f5",
		"ts": "2026-09-27T12:41:37.086Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1615595.17,
		"hash": "4f1ce68c87f5344e2e40b09dec60c9f9655e403aadb707cfc2e244d65eaa17a0"
	},
	{
		"id": "34ebe3ddbf4e",
		"ts": "2026-09-27T12:41:37.312Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19851292.92,
		"hash": "34ebe3ddbf4e81fffd1abd94d9b12fb5868e4ff477c5a24b73675b0b99074a8c"
	},
	{
		"id": "a5bd726c547d",
		"ts": "2026-09-27T12:41:37.534Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 821040.81,
		"hash": "a5bd726c547d9f7441c122dbb55a315d8ab33ab3a86cb6dc435c61658e8a784a"
	},
	{
		"id": "c56fc502989e",
		"ts": "2026-09-27T12:41:37.764Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 786844.46,
		"hash": "c56fc502989ed71748ab7f96fada29244e89b4cd61a00e56877ba26d1416c9fc"
	},
	{
		"id": "24c27b270b30",
		"ts": "2026-09-27T12:41:37.997Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 724822.82,
		"hash": "24c27b270b3021ff54824dfffd062f09b5624d3f127a12a714f1ba718256ea44"
	},
	{
		"id": "548d83271b83",
		"ts": "2026-09-27T12:41:38.202Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 489059.56,
		"hash": "548d83271b83e637dd8f4fca3c6da3db5c879f37fe829116c35a76f3b6a2bdff"
	},
	{
		"id": "9ce020cb2024",
		"ts": "2026-09-27T12:41:38.420Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1160155.67,
		"hash": "9ce020cb20241216c2833476addd7bc800cbe42d56515a1b93304e9417ecc3e9"
	},
	{
		"id": "c54c35cab184",
		"ts": "2026-09-27T06:08:33.813Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156536195.45,
		"hash": "c54c35cab184e6187a12cc726f3f4050082f71ab0ce9ef1ed92999604a344f84"
	},
	{
		"id": "77c53783972f",
		"ts": "2026-09-27T06:08:34.071Z",
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
		"liquidityUsd": 14084646.82,
		"hash": "77c53783972f19307323d0c303da84ac137480d72eac827e10f82d9a8f3e5bb6"
	},
	{
		"id": "7fbb2467fed2",
		"ts": "2026-09-27T06:08:34.318Z",
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
		"liquidityUsd": 883781.68,
		"hash": "7fbb2467fed21012737ba1185f7de69363620441f3e93cdab09bbe2a2f12f6f3"
	},
	{
		"id": "51eae7e1aa5b",
		"ts": "2026-09-27T06:08:34.562Z",
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
		"liquidityUsd": 42451098.93,
		"hash": "51eae7e1aa5bd6b001c628cbdf61ce38f43e867c6f5d6f8a2535149dcf9fcd40"
	},
	{
		"id": "184ad804820c",
		"ts": "2026-09-27T06:08:34.815Z",
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
		"liquidityUsd": 4558808.38,
		"hash": "184ad804820cc389656934291a28e63effef533bacc7c95486ffedf33487a572"
	},
	{
		"id": "f3c3efc043cb",
		"ts": "2026-09-27T06:08:35.051Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1328591.78,
		"hash": "f3c3efc043cbafe354284a902d332ff55790e97858391180b020675acfd6d5e6"
	},
	{
		"id": "c99d0784ad5f",
		"ts": "2026-09-27T06:08:35.285Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42451098.93,
		"hash": "c99d0784ad5f478644fb4b6d9c05bb96c2970819fda892e1ae1a7126a2509cb3"
	},
	{
		"id": "8e55219efc33",
		"ts": "2026-09-27T06:08:35.558Z",
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
		"liquidityUsd": 2441338.59,
		"hash": "8e55219efc337d86d3925c5462af36d66ed1e6bc03c4708791039d26524e4887"
	},
	{
		"id": "8ae7d92e57c4",
		"ts": "2026-09-27T06:08:35.820Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 515579.63,
		"hash": "8ae7d92e57c405bc7cb15c50ae151404c169511969de3e2752a69f24240ed361"
	},
	{
		"id": "488bab5ee1c6",
		"ts": "2026-09-27T06:08:36.064Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3926540.32,
		"hash": "488bab5ee1c6705b537366de4f78e84d2055e8f4e12020af0fce256f2a63eb4e"
	}
]
