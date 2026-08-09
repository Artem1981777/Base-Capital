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
	"updatedAt": "2026-08-09T08:37:28.260Z",
	"tokensScored": 8437,
	"verdictsIssued": 8437,
	"safe": 7382,
	"risky": 636,
	"likelyRug": 419,
	"ticks": 513
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "696206f078dd",
		"ts": "2026-08-09T08:37:24.237Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115224263.51,
		"hash": "696206f078dda5d1dd4e124fd0cae7852db819fbf8f7e4e271583b6e65d4e506"
	},
	{
		"id": "7ee26bd49e8c",
		"ts": "2026-08-09T08:37:24.487Z",
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
		"liquidityUsd": 17423874.61,
		"hash": "7ee26bd49e8c42629344a5d93945b93bc0f61fcc6eea6f2c7a1f1b0087e04a0c"
	},
	{
		"id": "3e0c1a14e1b8",
		"ts": "2026-08-09T08:37:24.904Z",
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
		"liquidityUsd": 1044764.45,
		"hash": "3e0c1a14e1b8ea840fe839bb5be319cf95c4ad294bf4b6d7b2acceaf3e75fb47"
	},
	{
		"id": "a45ba2abe86d",
		"ts": "2026-08-09T08:37:25.132Z",
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
		"liquidityUsd": 27190784.19,
		"hash": "a45ba2abe86d1f56f67a56650d44a81684fa0f31f0b93228377ba0dfdefa79f6"
	},
	{
		"id": "d78a1551e3fa",
		"ts": "2026-08-09T08:37:25.371Z",
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
		"liquidityUsd": 4431463.11,
		"hash": "d78a1551e3fab2970d7871a79f3eb01c9608ec03cc6550df716e1bf68bb00726"
	},
	{
		"id": "8cdd5c34fe94",
		"ts": "2026-08-09T08:37:25.598Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927088.22,
		"hash": "8cdd5c34fe941d2ff555a151a72fc63923823e1be400c83ef846253956625388"
	},
	{
		"id": "1ca062a52e45",
		"ts": "2026-08-09T08:37:25.823Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27190784.19,
		"hash": "1ca062a52e4583b7f32b0d2649d11edb7dd76acfc025a954e3a8693715c8c31c"
	},
	{
		"id": "fe9bc83a26c1",
		"ts": "2026-08-09T08:37:26.062Z",
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
		"liquidityUsd": 4829963.12,
		"hash": "fe9bc83a26c1ea16f4d7c8ca65dea6694cd2b4428837029524e45e9b2abc9134"
	},
	{
		"id": "3406366d99c9",
		"ts": "2026-08-09T08:37:26.288Z",
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
		"liquidityUsd": 981511.64,
		"hash": "3406366d99c9d0e88d2545abcc559444ac6ccc4406e2c18a39e73692749fa130"
	},
	{
		"id": "2124bd96a55a",
		"ts": "2026-08-09T08:37:26.518Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4264193.35,
		"hash": "2124bd96a55a3e2c7918c66dc22de261c6b685a609b4798ce6426f91477cd44c"
	},
	{
		"id": "98977cd454a5",
		"ts": "2026-08-09T08:37:26.744Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 68366.39,
		"hash": "98977cd454a59977ed386db7b1da8199d14529f230802456ae4dd91dd55ea0dd"
	},
	{
		"id": "450864111b27",
		"ts": "2026-08-09T08:37:26.954Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9282169.34,
		"hash": "450864111b27b26af9eeebab40b0ca3d8b5c88c981a47c94fbfff970c8e89014"
	},
	{
		"id": "987128cfe1c8",
		"ts": "2026-08-09T08:37:27.166Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 292927.01,
		"hash": "987128cfe1c83fa1aa4cc1029d76b96ce0b50245cefc590c928fc2d8cf8b3918"
	},
	{
		"id": "23a6c9927b7f",
		"ts": "2026-08-09T08:37:27.390Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1911268.11,
		"hash": "23a6c9927b7f0c57ed1b13add403896f559c976b60166f57c99c51b4a024d45c"
	},
	{
		"id": "539d66db2a2d",
		"ts": "2026-08-09T08:37:27.603Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 301212.76,
		"hash": "539d66db2a2d53a533bb17501daf3eb0ec3e55cac74745119f1b92c7aa68c23c"
	},
	{
		"id": "ec7d21dbf40f",
		"ts": "2026-08-09T08:37:27.826Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 48451.81,
		"hash": "ec7d21dbf40f219949f722f6df54c7977464b19317275d4c292325cbd783ffdc"
	},
	{
		"id": "ca7d9c4cc10a",
		"ts": "2026-08-09T08:37:28.037Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 536775.17,
		"hash": "ca7d9c4cc10a8ceb0dffdd7d3170edab317d3395489c300e326ca6a42eab5603"
	},
	{
		"id": "e2b124b2c28a",
		"ts": "2026-08-09T08:37:28.260Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73388.37,
		"hash": "e2b124b2c28aa80179b29da9d1370954c3d8fd5a4336829ab24efd11dbf8750f"
	},
	{
		"id": "37abe430231d",
		"ts": "2026-08-09T07:51:09.255Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115156784.99,
		"hash": "37abe430231deab839728eddd35a0483544e8463d5008697b98474952b401564"
	},
	{
		"id": "5a2e3ccefd91",
		"ts": "2026-08-09T07:51:09.482Z",
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
		"liquidityUsd": 17359020.92,
		"hash": "5a2e3ccefd91ccb6b799ad5b20ce6de3baeb85df2dc341f4dbdd6c4a04ebc190"
	},
	{
		"id": "64f144814397",
		"ts": "2026-08-09T07:51:09.689Z",
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
		"liquidityUsd": 1044764.45,
		"hash": "64f14481439786fa734ea08797727c747f3df4572ab5f75f93333e0ab08b91c2"
	},
	{
		"id": "fdf5aab21230",
		"ts": "2026-08-09T07:51:09.892Z",
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
		"liquidityUsd": 27190924.14,
		"hash": "fdf5aab21230d4937b840f07ee775fcc446968c69c1b06161b3c68a986c60952"
	},
	{
		"id": "950d9b5d43e0",
		"ts": "2026-08-09T07:51:10.107Z",
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
		"liquidityUsd": 4422553.91,
		"hash": "950d9b5d43e069dc212d571894b6e078587e35120f6fca783ac8dbfbc17ed7b7"
	},
	{
		"id": "58e6c16cf62c",
		"ts": "2026-08-09T07:51:10.316Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927147.72,
		"hash": "58e6c16cf62cbae2f187be7aed0ceaba6f088127a2675e789279540df3929354"
	},
	{
		"id": "5734624c7c47",
		"ts": "2026-08-09T07:51:10.523Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27190924.14,
		"hash": "5734624c7c4733b0aa63cf85d67b278feb7c13de40e1ddc69ef3e4239b422734"
	},
	{
		"id": "a5409e60709a",
		"ts": "2026-08-09T07:51:10.734Z",
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
		"liquidityUsd": 4820838.25,
		"hash": "a5409e60709a1501d22f0b668534d7e5d5d31d0d5ed995520711a9643e619056"
	},
	{
		"id": "59ab5ee0227d",
		"ts": "2026-08-09T07:51:10.953Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4257680.94,
		"hash": "59ab5ee0227d30cee5eba7e5774f4d3e13be5a71c78da099bb79e52b4a9f7e13"
	},
	{
		"id": "d50a51199b2d",
		"ts": "2026-08-09T07:51:11.151Z",
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
		"liquidityUsd": 986805.28,
		"hash": "d50a51199b2ddb039e3e257d8c024e4aecc153b7fb6caa6ad0a766eeae7dd29d"
	},
	{
		"id": "b1539fdad20c",
		"ts": "2026-08-09T07:51:11.341Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 67665.96,
		"hash": "b1539fdad20c73de988db63cc5b0ce24e6edbe99e80707f339bcda36d8ce0456"
	},
	{
		"id": "9cd30106ef88",
		"ts": "2026-08-09T07:51:11.525Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9260497.67,
		"hash": "9cd30106ef886aa07c2c870c92c49de0ee3828fe803d40dd2009ed1594052c3d"
	},
	{
		"id": "895dbe10f76e",
		"ts": "2026-08-09T07:51:11.716Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 290610.58,
		"hash": "895dbe10f76eda2ac5932076074968915a239e4330c931ed270754660a40f5f0"
	},
	{
		"id": "0af055699fb5",
		"ts": "2026-08-09T07:51:11.899Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 300700.09,
		"hash": "0af055699fb52c73ca1039f5d4acb3abe3235883e6986462b6c637afded8299d"
	},
	{
		"id": "ef8a1f2f4025",
		"ts": "2026-08-09T07:51:12.090Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1912038.47,
		"hash": "ef8a1f2f40257685b51f4953eefce1777265675ff59617244ab77b0df18e48dd"
	},
	{
		"id": "4799be890957",
		"ts": "2026-08-09T07:51:12.289Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 535201.4,
		"hash": "4799be8909574809a37776e1c8a2e8476feefc6ed12440d87a9ef6de187c2155"
	},
	{
		"id": "1ec01faa98d1",
		"ts": "2026-08-09T07:51:12.542Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 48451.71,
		"hash": "1ec01faa98d1d3b660ae75a3a214f10fa57de8e1e2d838940b48de82402e5a75"
	},
	{
		"id": "041ed9c5a829",
		"ts": "2026-08-09T07:51:12.723Z",
		"symbol": "OpenAI",
		"token": "0x6B458b475695121b78b7ef8Fa88a73973c6bCb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4340826.34,
		"hash": "041ed9c5a8290835ada28f04237b389981075a66ce5fa281566718571f6ef9ea"
	},
	{
		"id": "284a5231f97d",
		"ts": "2026-08-09T06:49:59.757Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115128123.61,
		"hash": "284a5231f97d2bde6d0cae3aa1e6102a228541e152b0689730fda85e43212bc4"
	},
	{
		"id": "cfa2ce68e723",
		"ts": "2026-08-09T06:50:00.188Z",
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
		"liquidityUsd": 15117458.04,
		"hash": "cfa2ce68e723e84b894e6526ffa2edc0736ef0097292bed26da26ac57b1ab045"
	},
	{
		"id": "b0704b7d34b0",
		"ts": "2026-08-09T06:50:00.425Z",
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
		"liquidityUsd": 1045945.06,
		"hash": "b0704b7d34b0b804f6e47c3e4b0f103409bea2ef6ee4acc5f9c4b49a1c0e25ee"
	},
	{
		"id": "09e51bea35d2",
		"ts": "2026-08-09T06:50:00.658Z",
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
		"liquidityUsd": 27196932.91,
		"hash": "09e51bea35d2e4c3c7fe09c4cd520f4bb711d0f325532b47fe765a80c7b07278"
	},
	{
		"id": "09b4db1032b1",
		"ts": "2026-08-09T06:50:00.889Z",
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
		"liquidityUsd": 4410310.12,
		"hash": "09b4db1032b1a2635512c37b94478d94bb20354e1d529906aff77b9a21119d65"
	},
	{
		"id": "1ade62ffb5d0",
		"ts": "2026-08-09T06:50:01.121Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932207.19,
		"hash": "1ade62ffb5d01c62605cb415af8419229ea074843fb8dab0bb9f78886f13a37e"
	},
	{
		"id": "3138f43cecde",
		"ts": "2026-08-09T06:50:01.442Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27196932.91,
		"hash": "3138f43cecde1d205834e6a3ec7dbb673bc1efa65d9487e64fa9f73ee1d8505b"
	},
	{
		"id": "b3936704b6dc",
		"ts": "2026-08-09T06:50:01.683Z",
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
		"liquidityUsd": 4822974.34,
		"hash": "b3936704b6dc6275e35930c4901a758a1c60c83f512d989c8bf12a935747d130"
	},
	{
		"id": "57c600488b95",
		"ts": "2026-08-09T06:50:01.916Z",
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
		"liquidityUsd": 986853.06,
		"hash": "57c600488b95927dbec6a88e215fd21535196c3662c6c2798dbd3e44ccb1a4e0"
	},
	{
		"id": "436588121bb3",
		"ts": "2026-08-09T06:50:02.160Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4259056.68,
		"hash": "436588121bb3a42751e032a16ec1e9b652c90a67b7a0fbc49a8054156e9d89e4"
	},
	{
		"id": "73a17f6b3941",
		"ts": "2026-08-09T06:50:02.398Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 67859.22,
		"hash": "73a17f6b39417d576f5def474b480a35ae53738486d76f79514695a7fcfdf987"
	},
	{
		"id": "a9fdb940f90a",
		"ts": "2026-08-09T06:50:03.031Z",
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
		"liquidityUsd": 9263229.11,
		"hash": "a9fdb940f90a866b55f08dedecc553a4642541471a6abc6bcc7a6f0ec81feccf"
	},
	{
		"id": "a314538dea8f",
		"ts": "2026-08-09T06:50:03.250Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 48354.43,
		"hash": "a314538dea8ff31faf71433371047423e434ea36234ae7d04b3ad6430ef1edd9"
	},
	{
		"id": "1f44f74e174b",
		"ts": "2026-08-09T06:50:03.468Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1910887.67,
		"hash": "1f44f74e174be68d57406e65d6e45a49e02f3d774c1f9b9ecd1b1d5580cf3561"
	},
	{
		"id": "f4d569c78bfe",
		"ts": "2026-08-09T06:50:03.687Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 301196.95,
		"hash": "f4d569c78bfe66da650d0f9a825fb9d9a200e4dc41c67169bb030364f76d1aaf"
	},
	{
		"id": "ec220d7922e5",
		"ts": "2026-08-09T06:50:03.906Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1784129.45,
		"hash": "ec220d7922e56a1a0b015e46aa8037b9b06d3502dc87c0623ad4c52256461175"
	},
	{
		"id": "dc86e58e01de",
		"ts": "2026-08-09T05:00:37.471Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115121904.86,
		"hash": "dc86e58e01deb758f12294ad4eb1276a9b2e594a0cb0148e2792d21dcf972ef3"
	},
	{
		"id": "bba647774682",
		"ts": "2026-08-09T05:00:37.891Z",
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
		"liquidityUsd": 17080565.35,
		"hash": "bba64777468250e2ad0c2f3d500a9ba912dc0f270210c7d6da0c3f5b98bb7b1d"
	},
	{
		"id": "bd0d62e4a0c3",
		"ts": "2026-08-09T05:00:38.135Z",
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
		"liquidityUsd": 1045945.06,
		"hash": "bd0d62e4a0c38721953d836285e8273c641024d219fb3d39837b45046931d341"
	},
	{
		"id": "d16381e44ce2",
		"ts": "2026-08-09T05:00:38.376Z",
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
		"liquidityUsd": 27216146.75,
		"hash": "d16381e44ce2f4e7622aed292cf4521a0579fdb3511e1e294bd881c4237b4b62"
	},
	{
		"id": "136d9466a5f6",
		"ts": "2026-08-09T05:00:38.622Z",
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
		"liquidityUsd": 4410564.79,
		"hash": "136d9466a5f615be45fb2686d7cffbd616e26c3446c84f95b2b8a46b3a563809"
	},
	{
		"id": "2c067c985567",
		"ts": "2026-08-09T05:00:38.931Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932695.64,
		"hash": "2c067c9855676acfb42fb7644c3a8e1daef9ed1e2c27d41497bd76c9e9e2f506"
	},
	{
		"id": "fef6b633ed5f",
		"ts": "2026-08-09T05:00:39.172Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27216146.75,
		"hash": "fef6b633ed5fc9d67602ff7044eb4f57f9d0542e71ca4ebf9451b6266e19107e"
	},
	{
		"id": "2d75dc74681f",
		"ts": "2026-08-09T05:00:39.417Z",
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
		"liquidityUsd": 4750787.2,
		"hash": "2d75dc74681f0e47663d684ee9dab373a7f5f7bd8af7e355013b188e6db44e83"
	},
	{
		"id": "c4be9fd37fc5",
		"ts": "2026-08-09T05:00:39.645Z",
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
		"liquidityUsd": 986021.56,
		"hash": "c4be9fd37fc5b00380b3e3da875e9b2c53f73ff38909dfd3b7d9d53bebda30f1"
	},
	{
		"id": "733fba15f64b",
		"ts": "2026-08-09T05:00:39.869Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4242901.64,
		"hash": "733fba15f64b6e0dacf6eeab0dcb01657166b5ad30be7dcec05ae025ae593c21"
	},
	{
		"id": "3eba3bb71470",
		"ts": "2026-08-09T05:00:40.075Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66254.12,
		"hash": "3eba3bb71470c243dbadd2d717ec884d02c30b205818115ebf5f7031b0d98403"
	},
	{
		"id": "7bde597eff91",
		"ts": "2026-08-09T05:00:40.284Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 49201.67,
		"hash": "7bde597eff9139033ff7846748986c3559a8ede0d87aeca8ca8bc11ccfbee4c6"
	},
	{
		"id": "a176426b4cdb",
		"ts": "2026-08-09T05:00:40.493Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 349857.91,
		"hash": "a176426b4cdbdebd3eed4ff65626d2d815a6ed4f0a715cebe283aef4afed44ba"
	},
	{
		"id": "f633b489c01e",
		"ts": "2026-08-09T05:00:40.699Z",
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
		"liquidityUsd": 9235068.88,
		"hash": "f633b489c01e121b7ed19b29a8093292b6577ed4504f8e2f5f586f9084068d2f"
	},
	{
		"id": "1332d4beaccb",
		"ts": "2026-08-09T05:00:40.908Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1910308.74,
		"hash": "1332d4beaccbf4a1829496e500fb8af3d5820cf19556b0cb5ed1023c42100a88"
	},
	{
		"id": "a538fd4e63c3",
		"ts": "2026-08-09T05:00:41.115Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 298039.38,
		"hash": "a538fd4e63c3cff1838e0b4a90ccca1fb0913039140b6cd68118d6c058e05e6a"
	},
	{
		"id": "bdfb3fb710be",
		"ts": "2026-08-09T05:00:41.369Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 535331.12,
		"hash": "bdfb3fb710be5c992715d8d97eefb7e3e7366b8b7b3ad035fb81f49329edde96"
	},
	{
		"id": "c439d8a3063d",
		"ts": "2026-08-09T03:38:01.528Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115337881.52,
		"hash": "c439d8a3063d7106a3b532a6ee1de187ca6e6cddb1958098340fc441632a6318"
	},
	{
		"id": "5c9c8d883f3b",
		"ts": "2026-08-09T03:38:02.021Z",
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
		"liquidityUsd": 17620347.91,
		"hash": "5c9c8d883f3b51a8b038fa6d8870ba42cd963b9c4ffa2fda1c90462dd27b0794"
	},
	{
		"id": "4db92b1c94b2",
		"ts": "2026-08-09T03:38:02.279Z",
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
		"liquidityUsd": 1045945.06,
		"hash": "4db92b1c94b2d53cecf175be2ebad07eda60ec3e7536e85c92cdc87ca403b213"
	},
	{
		"id": "d25d84914e6c",
		"ts": "2026-08-09T03:38:02.602Z",
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
		"liquidityUsd": 27227493.99,
		"hash": "d25d84914e6ca3822ea92b792fbfc0a94ead1a0c7f141c375839b75a78c97df8"
	},
	{
		"id": "c768ce545f2d",
		"ts": "2026-08-09T03:38:02.850Z",
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
		"liquidityUsd": 4411946.37,
		"hash": "c768ce545f2dca8b14d8a6cb41d8c478a04f2cabec8b2a6fea0dbb73b4b94c92"
	},
	{
		"id": "37434d390d20",
		"ts": "2026-08-09T03:38:03.106Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932695.65,
		"hash": "37434d390d20425f0cd31dafa1cc8c30c446573d05e1ed37df0ba93bed7be653"
	},
	{
		"id": "2c7c13668b01",
		"ts": "2026-08-09T03:38:03.355Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27227493.99,
		"hash": "2c7c13668b012055709921206fc762e7bb6d906df8ef5f82170aa217cba68b08"
	},
	{
		"id": "0833178f00a6",
		"ts": "2026-08-09T03:38:03.598Z",
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
		"liquidityUsd": 4752922.95,
		"hash": "0833178f00a60af6b485ab1319766a7f1953865d1d3cfd1c529972e6ceb65e3d"
	},
	{
		"id": "6e99e2b9119d",
		"ts": "2026-08-09T03:38:03.942Z",
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
		"liquidityUsd": 985079.31,
		"hash": "6e99e2b9119d21a19edab7f8bcc2e20f385186f6d936b8eec7bd4d58caa6c8f9"
	},
	{
		"id": "bc6b02ab73c4",
		"ts": "2026-08-09T03:38:04.191Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4264921.31,
		"hash": "bc6b02ab73c44a13d0787841f4057abbea4d2bacb7e2fddb0822087edc33003d"
	},
	{
		"id": "ba5fe7f9a852",
		"ts": "2026-08-09T03:38:04.419Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 67214.81,
		"hash": "ba5fe7f9a852fe526e08fc4154a2c769081de4646564cf8d34f390932843eb5f"
	},
	{
		"id": "7f0edec62366",
		"ts": "2026-08-09T03:38:04.656Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 49221.43,
		"hash": "7f0edec62366d9da8d3fc7aba7c70d19412b028ee1cf71e81b3710ace0881dec"
	},
	{
		"id": "b681ea7717d0",
		"ts": "2026-08-09T03:38:04.940Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84248.14,
		"hash": "b681ea7717d002c96a1e59a16921a31955cfb4424f483235cbb96eb93800380a"
	},
	{
		"id": "7c9d1bfb0f82",
		"ts": "2026-08-09T03:38:05.170Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 350134.54,
		"hash": "7c9d1bfb0f82143f701dfe02b757432e56557ff2f8ec0c9c6a7a650209f5f8d0"
	},
	{
		"id": "7a6e9e5d75ac",
		"ts": "2026-08-09T03:38:05.408Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9240089.07,
		"hash": "7a6e9e5d75ac3d6c8c2c9ee29917f107766848895927f2a5356c7a04aa7cd0ec"
	},
	{
		"id": "ab1adea80403",
		"ts": "2026-08-09T03:38:05.639Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1908976.39,
		"hash": "ab1adea804031ef3d1a79bb3c44a281d43511871e8a4575a841cfcfb75b396ad"
	},
	{
		"id": "8669c5afd308",
		"ts": "2026-08-09T03:38:05.867Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74061.4,
		"hash": "8669c5afd308e2bdfcc8cd2f37f4ac9d6cf3716fd1a10e3ea9adbe2519868104"
	},
	{
		"id": "a8071867129b",
		"ts": "2026-08-09T01:21:36.139Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115344816.37,
		"hash": "a8071867129b71a14f676d0f6b4e4325316ccd4971c8c302bfbae11be10fc99f"
	},
	{
		"id": "4203acc8f663",
		"ts": "2026-08-09T01:21:36.350Z",
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
		"liquidityUsd": 16786091,
		"hash": "4203acc8f663e01ef00292273a9ee5f28b7f23ebd1b5f3a74bec96981b2d85a7"
	},
	{
		"id": "8e5d52b6b366",
		"ts": "2026-08-09T01:21:36.661Z",
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
		"liquidityUsd": 1045945.06,
		"hash": "8e5d52b6b366008be89d8b3157320ef770644575ace065439ab90710ba1ee8f9"
	},
	{
		"id": "2c9f2d81f3f5",
		"ts": "2026-08-09T01:21:36.862Z",
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
		"liquidityUsd": 27293705.75,
		"hash": "2c9f2d81f3f535693263732a0291330f0abe02fd5deae87959d12df38bc50267"
	},
	{
		"id": "2f09ad268521",
		"ts": "2026-08-09T01:21:37.058Z",
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
		"liquidityUsd": 4413036.81,
		"hash": "2f09ad2685214493e214709be111e1e78615dd5e009e1f48db1a7fb7b529e3f3"
	},
	{
		"id": "1f610a4da057",
		"ts": "2026-08-09T01:21:37.272Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 934084.48,
		"hash": "1f610a4da057a0897af3cd7d57981cbf67b75449f148751a99af8eaf7ebdf5ed"
	},
	{
		"id": "2049ca8b3a5c",
		"ts": "2026-08-09T01:21:37.469Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27293705.75,
		"hash": "2049ca8b3a5c3ab9ae1e0fcdc52a93fcbc35fa09ad539d12c012a7a7bc114791"
	},
	{
		"id": "571052352048",
		"ts": "2026-08-09T01:21:37.670Z",
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
		"liquidityUsd": 4493829.55,
		"hash": "571052352048810b552ffb00372033898b7a86e8fdfb2c265804806f354b54ae"
	},
	{
		"id": "493f6a4ca3cb",
		"ts": "2026-08-09T01:21:37.881Z",
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
		"liquidityUsd": 984363.94,
		"hash": "493f6a4ca3cbcc3bd0c54a079eee7a862a016bac12ebc58d5d58fc794a968f5c"
	},
	{
		"id": "2f3075ee9aab",
		"ts": "2026-08-09T01:21:38.077Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4450375.34,
		"hash": "2f3075ee9aabff3350201e0ac6ff7be71036cf146b306fdf8c385129227d1e55"
	},
	{
		"id": "873ac48492da",
		"ts": "2026-08-09T01:21:38.278Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 70397.24,
		"hash": "873ac48492dae4a674c96a067540b5ea4f826dcb7545c65abb9b3d1046d1390a"
	},
	{
		"id": "2258d4f47c5d",
		"ts": "2026-08-09T01:21:38.479Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 51724.23,
		"hash": "2258d4f47c5dd54255f9aa677e18f585ba41df08bb0c44ee229b2a83d92d68b5"
	},
	{
		"id": "b2059938703e",
		"ts": "2026-08-09T01:21:38.683Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 351262.17,
		"hash": "b2059938703ea19b517f2fdcb8e2432cc9e81e5392a0f883a3925b5e9f273986"
	},
	{
		"id": "4951753b56c5",
		"ts": "2026-08-09T01:21:38.940Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71763.91,
		"hash": "4951753b56c5eadc9adce3080b9b511fc0d29ecf80435ca12cd648120bf30a68"
	},
	{
		"id": "a23326e910ea",
		"ts": "2026-08-09T01:21:39.146Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 555534.41,
		"hash": "a23326e910ea520dda60ddd2961477a2ce238f65067bad50af2c9691fe1e75b5"
	},
	{
		"id": "e58287ddf6a8",
		"ts": "2026-08-09T01:21:39.358Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9309711.13,
		"hash": "e58287ddf6a87b8e028ced828882dcf5c289edbb52a080e5c52e631ac67d866a"
	},
	{
		"id": "aa0b9e9134ee",
		"ts": "2026-08-09T01:21:39.546Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1916827.43,
		"hash": "aa0b9e9134ee61cd44414e42cf64c153aa61393324b371b2f8ea11bc600ef025"
	},
	{
		"id": "7a97e696b211",
		"ts": "2026-08-09T01:21:39.733Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 332707.45,
		"hash": "7a97e696b2114e668166355fcdcc191ee0ac0d95136d364541d30df746a25020"
	},
	{
		"id": "3da243054950",
		"ts": "2026-08-08T23:24:02.820Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115322957.2,
		"hash": "3da243054950b2f35b3ccf0f1e7cabb8850c49f7f8f9df82bed4c5bc63c24027"
	},
	{
		"id": "1a0db131b792",
		"ts": "2026-08-08T23:24:03.276Z",
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
		"liquidityUsd": 16773032.66,
		"hash": "1a0db131b79260e3d8a2f954057ea96b7812f2cea3567adb5ce59f70154fa960"
	},
	{
		"id": "98ec1442d823",
		"ts": "2026-08-08T23:24:03.526Z",
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
		"liquidityUsd": 1047828.88,
		"hash": "98ec1442d823b1d5a4cff3a25dd80aa04f169cf475afa06ab1bbe15759e57acc"
	},
	{
		"id": "bb95ff24a5d6",
		"ts": "2026-08-08T23:24:03.775Z",
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
		"liquidityUsd": 27328202.5,
		"hash": "bb95ff24a5d6b079c2822c314a90585ea3310e1d07838cdc45624766e713e427"
	},
	{
		"id": "67d9a14c6b7f",
		"ts": "2026-08-08T23:24:04.024Z",
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
		"liquidityUsd": 4413036.81,
		"hash": "67d9a14c6b7fb6445de0079334f4630d75ef34e61c25452115e34ca4e72f8fc9"
	},
	{
		"id": "c02932aff3ba",
		"ts": "2026-08-08T23:24:04.271Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 935096.47,
		"hash": "c02932aff3ba5fba6ccc5700932842b4575e0d932f5d9f87b11ca4afee783f5c"
	},
	{
		"id": "9c889c468f14",
		"ts": "2026-08-08T23:24:04.521Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27328202.5,
		"hash": "9c889c468f14efd31339562020903bfa34752c7b6636739afe67092f2b042798"
	},
	{
		"id": "274ece7077ef",
		"ts": "2026-08-08T23:24:04.772Z",
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
		"liquidityUsd": 4489800.35,
		"hash": "274ece7077eff256b43773dcda678a125d32df998c387076d154c6f33e85102e"
	},
	{
		"id": "455a42ba2738",
		"ts": "2026-08-08T23:24:05.022Z",
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
		"liquidityUsd": 985254.62,
		"hash": "455a42ba273851d66c4a7a23cfee43956ea1971ffcd9b26b5873f116018b522d"
	},
	{
		"id": "04c6d318215a",
		"ts": "2026-08-08T23:24:05.302Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4250432.32,
		"hash": "04c6d318215a11e9cbc1865b6c2e980449d0b4cf7057d2ec1075aac6ebbeef98"
	},
	{
		"id": "74147380cad3",
		"ts": "2026-08-08T23:24:05.536Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 518942.64,
		"hash": "74147380cad389ea8e1aa37bd20681f0d97ca49cdc4642a01b40d2c2a6193f87"
	},
	{
		"id": "7760cc042fc3",
		"ts": "2026-08-08T23:24:05.839Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 51540.8,
		"hash": "7760cc042fc37f903c9db59f19a8716786b96fe8cc904cba177867b69ef6c308"
	},
	{
		"id": "c25909a97cd6",
		"ts": "2026-08-08T23:24:06.072Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 351305.92,
		"hash": "c25909a97cd68a3c37b7f8be2f3da4b06c15932150fd65a8366ea335bc90d565"
	},
	{
		"id": "24765c92fb32",
		"ts": "2026-08-08T23:24:06.305Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 68668.82,
		"hash": "24765c92fb329db79dbcad51073f77680dd7ac558ff3c778db104fda25aa64a7"
	},
	{
		"id": "def57b45b8db",
		"ts": "2026-08-08T23:24:06.542Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9276945.51,
		"hash": "def57b45b8dbae5c9e96fa96cb586761792ad2394dde763ee2df3ba80d47bb66"
	},
	{
		"id": "612dab58db37",
		"ts": "2026-08-08T23:24:06.774Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1911943.17,
		"hash": "612dab58db3793803e4efa65b7cd727a768fd0bccfe9892981235302a24addcf"
	},
	{
		"id": "b4e738eee641",
		"ts": "2026-08-08T23:24:07.015Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74041.24,
		"hash": "b4e738eee641e8447f28d89142001356b587ade4c1440738c44d9a2bd54d66f9"
	},
	{
		"id": "809f6d48f012",
		"ts": "2026-08-08T22:23:56.088Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115453585.1,
		"hash": "809f6d48f01249354e29216674c0cd16856c6cb879c1509acd4e67cbddc59a3b"
	},
	{
		"id": "9ca7d17fd813",
		"ts": "2026-08-08T22:23:56.278Z",
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
		"liquidityUsd": 16793877.12,
		"hash": "9ca7d17fd8138ded0eb358b7478a0b8a49f9b735aa9e4d1b7d7acf771cddaed6"
	},
	{
		"id": "e94e84564697",
		"ts": "2026-08-08T22:23:56.483Z",
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
		"liquidityUsd": 1048142.4,
		"hash": "e94e84564697b0f528c789491484341f5df7d4a852e67dccbc55c0e0ca8bb97e"
	},
	{
		"id": "1e05ee07de83",
		"ts": "2026-08-08T22:23:56.767Z",
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
		"liquidityUsd": 27348188.7,
		"hash": "1e05ee07de83fdb1a66fcb4c8faa0673b8c10181405cd764bb7946f48dfd7488"
	},
	{
		"id": "1eb766356c7e",
		"ts": "2026-08-08T22:23:56.970Z",
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
		"liquidityUsd": 4425250.99,
		"hash": "1eb766356c7eaf8e816d0c736b9b76f9ffa25908484e2a53a85029ce1084a2c2"
	},
	{
		"id": "b6301fc80863",
		"ts": "2026-08-08T22:23:57.182Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931785.19,
		"hash": "b6301fc80863cff0b79407492f9e02d485f52633d367629e3bfc568db887cbe2"
	},
	{
		"id": "e354baa79e1b",
		"ts": "2026-08-08T22:23:57.373Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27348188.7,
		"hash": "e354baa79e1b845a48e4cd89b1613b525c0a80864d5465522f0c6c38157481c4"
	},
	{
		"id": "dbc62e23de8c",
		"ts": "2026-08-08T22:23:57.577Z",
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
		"liquidityUsd": 4878965,
		"hash": "dbc62e23de8c5ddcdf5c4e18dd375056a3dcb729ac5f56239ac2f1003456610c"
	},
	{
		"id": "9bd8ab532360",
		"ts": "2026-08-08T22:23:57.767Z",
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
		"liquidityUsd": 985491.82,
		"hash": "9bd8ab532360eb294dc23ba551b98fb1b6f6935220c5ad749b310e64306e3663"
	},
	{
		"id": "5ac5ca8ed769",
		"ts": "2026-08-08T22:23:57.962Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4224656.83,
		"hash": "5ac5ca8ed769ee62a7c77d7da1fad50711bebd46a9979cd783ef38c311712c71"
	},
	{
		"id": "c3b96b2bae94",
		"ts": "2026-08-08T22:23:58.154Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 291084.3,
		"hash": "c3b96b2bae94575d81e889469d73f34000e9dc433467fe260bc566912c6e6457"
	},
	{
		"id": "2deaa1d9424e",
		"ts": "2026-08-08T22:23:58.343Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 523486.5,
		"hash": "2deaa1d9424e09e36075e9ec3ecbd2004e1541d24e1ac18ce3ba1be96f31df9c"
	},
	{
		"id": "01b21b7b5b96",
		"ts": "2026-08-08T22:23:58.537Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 51783.64,
		"hash": "01b21b7b5b9616b753b30162028f6b2de7b3bf7afb6e7c7211ca0d40ea9338f0"
	},
	{
		"id": "0c851ecb5205",
		"ts": "2026-08-08T22:23:58.723Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 352039.63,
		"hash": "0c851ecb520566f9b2cfcbd9b778db7e7a32843b2695719ca57adb710fe8c063"
	},
	{
		"id": "25249719fdad",
		"ts": "2026-08-08T22:23:58.914Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9285303.74,
		"hash": "25249719fdad2a0f155eb69c867929c5fab13755b2987a713b6d5c600ac3678e"
	},
	{
		"id": "55892f8574cc",
		"ts": "2026-08-08T22:23:59.110Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1917981.84,
		"hash": "55892f8574cc1e4bcb7765c84df6565ea9e0bf9bcaccda84624ef5d03d38636d"
	},
	{
		"id": "334ad683e429",
		"ts": "2026-08-08T22:23:59.345Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74161.46,
		"hash": "334ad683e429c63753c06037d4cb3dc83f1d53ccb9bfeda42b0020f7f3cb0255"
	},
	{
		"id": "d3f3e04b268a",
		"ts": "2026-08-08T22:23:59.545Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 527726.78,
		"hash": "d3f3e04b268a5f9e5caa1560a438d3e936b3fcb316f055f01cd451f4fb0fe3ce"
	},
	{
		"id": "c489a1e85dc7",
		"ts": "2026-08-08T21:25:51.559Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115452163.92,
		"hash": "c489a1e85dc7b9232e7e9632adc60f01b41dd2971582ee25efb388e8eb0fff60"
	},
	{
		"id": "678c5869cd26",
		"ts": "2026-08-08T21:25:51.801Z",
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
		"liquidityUsd": 16807800.84,
		"hash": "678c5869cd262a7c42836a2a479433260d14a9561027774246872034ce6ea6b9"
	},
	{
		"id": "e613d591859d",
		"ts": "2026-08-08T21:25:52.030Z",
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
		"liquidityUsd": 1048404.25,
		"hash": "e613d591859df288306ff840d9a3914baa32167b38679bec5e31c68e75811d0d"
	},
	{
		"id": "411f16083f84",
		"ts": "2026-08-08T21:25:52.271Z",
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
		"liquidityUsd": 27365210.11,
		"hash": "411f16083f84441a0f4a55e4b061b478ab1b8019a79aac487be36ede0653cb37"
	},
	{
		"id": "71431f826c7a",
		"ts": "2026-08-08T21:25:52.500Z",
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
		"liquidityUsd": 4422237.11,
		"hash": "71431f826c7a65e7d7c8212a0e9764e4d5319727b369b45ade1fe7b0d3a611e7"
	},
	{
		"id": "5bb2e9b4768d",
		"ts": "2026-08-08T21:25:52.738Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 943011.1,
		"hash": "5bb2e9b4768d551a1057605389163fe42af038d9d58436783b176b23c0c3aed2"
	},
	{
		"id": "4190a392aeec",
		"ts": "2026-08-08T21:25:52.964Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27365210.11,
		"hash": "4190a392aeecf7c668098720483d6f4c98c0908737a74caf771fbe92c8a96486"
	},
	{
		"id": "1efa94857d20",
		"ts": "2026-08-08T21:25:53.203Z",
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
		"liquidityUsd": 4881048.25,
		"hash": "1efa94857d201f2368ea3f5e14f225ba03280b6fd0db94e71f4b949aedc001b5"
	},
	{
		"id": "025e4304cb57",
		"ts": "2026-08-08T21:25:53.432Z",
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
		"liquidityUsd": 984207.58,
		"hash": "025e4304cb57c7a0d7e7369f2321c5f6f3d8170c4d299c280c7129bfeddf191f"
	},
	{
		"id": "4fe44f042b26",
		"ts": "2026-08-08T21:25:53.673Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4228085.25,
		"hash": "4fe44f042b261c0c6f475e40a7fe9a12e784d39f467d2a205dd74f48ee9ba46a"
	},
	{
		"id": "d1abc214ce65",
		"ts": "2026-08-08T21:25:53.889Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 290986.84,
		"hash": "d1abc214ce65fc72fad60299f51b275511cc64e91e9dd6f94409ad403c304da8"
	},
	{
		"id": "2a392188af6d",
		"ts": "2026-08-08T21:25:54.111Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 554485.66,
		"hash": "2a392188af6decd4ab6f4119eaae229506b53a9a5f73152d73b3c77173196be6"
	},
	{
		"id": "d15c2416af1a",
		"ts": "2026-08-08T21:25:54.321Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 351768.07,
		"hash": "d15c2416af1a83837c00b2f00f49e066b50be2e824dc5df55142eb8b3448c0e4"
	},
	{
		"id": "d9b1ba939c29",
		"ts": "2026-08-08T21:25:54.542Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 52908.68,
		"hash": "d9b1ba939c294fa587d594402dfb7d94da0e9912fe9dc20382644a63c24c22b8"
	},
	{
		"id": "ba7e985059e3",
		"ts": "2026-08-08T21:25:54.769Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1918258.06,
		"hash": "ba7e985059e3a4a7a055e4fd0827f5d5df635c4b88b41f556cbfcc33689db681"
	},
	{
		"id": "d49794a0b843",
		"ts": "2026-08-08T21:25:54.993Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9311757.01,
		"hash": "d49794a0b843fcb177001ca6175734e5b4c6722539251ced26989e85bcbb560e"
	},
	{
		"id": "48582ec527e0",
		"ts": "2026-08-08T21:25:55.204Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 527458.81,
		"hash": "48582ec527e023b3e5ac91e9ac5b89339e02dd61c8ff72fc121106128f748836"
	},
	{
		"id": "520bba3903ef",
		"ts": "2026-08-08T20:24:28.611Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115465621.33,
		"hash": "520bba3903ef7584723fa1a64ac8ad8fafab1945e5a65666dec370a5bcf18995"
	},
	{
		"id": "582e4cbfc217",
		"ts": "2026-08-08T20:24:29.046Z",
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
		"liquidityUsd": 16798874.03,
		"hash": "582e4cbfc217933695fe62bec94eef02b7d651b59c35edd78cea8be44c0c7a7b"
	},
	{
		"id": "92d71ac8cde0",
		"ts": "2026-08-08T20:24:29.281Z",
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
		"liquidityUsd": 1048372.31,
		"hash": "92d71ac8cde054a9cc342f86beab6ccbefe1703ad48cdcd538927d4e7b983277"
	},
	{
		"id": "895bb26e3357",
		"ts": "2026-08-08T20:24:29.517Z",
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
		"liquidityUsd": 27340360.35,
		"hash": "895bb26e33578040d1a6de74b25f31ddb290678b55240de2a27df7bbb368d381"
	},
	{
		"id": "586b0a530cd5",
		"ts": "2026-08-08T20:24:29.754Z",
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
		"liquidityUsd": 4431949.93,
		"hash": "586b0a530cd5eb26c423ac930e9602491e02fb3f3105738c26b1511807954ae2"
	},
	{
		"id": "9e9f2ad846db",
		"ts": "2026-08-08T20:24:29.990Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 943011.1,
		"hash": "9e9f2ad846db9d615cb04c0527aaa987ff99f3ab51ea05abe5d7b9c41313594b"
	},
	{
		"id": "698238891910",
		"ts": "2026-08-08T20:24:30.229Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27340360.35,
		"hash": "69823889191090be35d54439bb617cf44f275a50d6a86cc32088aa830f7cbd00"
	},
	{
		"id": "8d2e0f135312",
		"ts": "2026-08-08T20:24:30.462Z",
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
		"liquidityUsd": 4880057.22,
		"hash": "8d2e0f135312341baa53532d9aa0364e54f93ed85cac01dca1795552c6e184a1"
	},
	{
		"id": "5638da55655d",
		"ts": "2026-08-08T20:24:30.695Z",
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
		"liquidityUsd": 981340.41,
		"hash": "5638da55655d3d24615b383c9001a2a09a0116af0b1b42a34cee8caa44acaa8b"
	},
	{
		"id": "da9a380432b5",
		"ts": "2026-08-08T20:24:30.929Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4245739.04,
		"hash": "da9a380432b53ed1d2673d7320c5fa2d32d0fb2eba0aba79d29798b6a7420d9f"
	},
	{
		"id": "2c3f1fad8f7b",
		"ts": "2026-08-08T20:24:31.145Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 519051.7,
		"hash": "2c3f1fad8f7bf70918c20de250fc7223f65e5d325378bc2617893fc599b6650d"
	},
	{
		"id": "dbbb7230413f",
		"ts": "2026-08-08T20:24:31.362Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 350407.34,
		"hash": "dbbb7230413f45dccace60ac8acea5df3bf6c9c21de1463f10dde2dc4c864c7c"
	},
	{
		"id": "9a760cd6db90",
		"ts": "2026-08-08T20:24:31.577Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 53545.82,
		"hash": "9a760cd6db90e20abc7617b5144988dfaa2315f6930b67747043add051c0bdc5"
	},
	{
		"id": "4d7e8fe19d80",
		"ts": "2026-08-08T20:24:31.795Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9290814.62,
		"hash": "4d7e8fe19d80111c53b5b0746d1a7f7589bf534e34853e03d4cb95da9611c556"
	},
	{
		"id": "a0c128591e18",
		"ts": "2026-08-08T20:24:32.011Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1920596.88,
		"hash": "a0c128591e18a90bc4f9b243151c3cd530d40749cc2057b8326db8a5ed31de06"
	},
	{
		"id": "f0c5b3d00236",
		"ts": "2026-08-08T20:24:32.270Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74511.94,
		"hash": "f0c5b3d002360c926f5fa0a462e79a92bdf14c263ddc0811bf62515b62abfc56"
	},
	{
		"id": "9971e9d5beeb",
		"ts": "2026-08-08T19:25:57.557Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115499986.29,
		"hash": "9971e9d5beebbc23ccca98ab33d7e7370bb6498c6197e4f87565464be92a175e"
	},
	{
		"id": "2f922c37f6f2",
		"ts": "2026-08-08T19:25:57.806Z",
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
		"liquidityUsd": 17072912.97,
		"hash": "2f922c37f6f2c21ed9403b13e48aa5c2dfaf01868a60eb7f33a53460844647d3"
	},
	{
		"id": "6b86bb694c1c",
		"ts": "2026-08-08T19:25:58.062Z",
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
		"liquidityUsd": 1049188.77,
		"hash": "6b86bb694c1c11453333dd6cf391340ee22b6f8a859ea2dbe513690b27a65a6d"
	},
	{
		"id": "3dc7ae2eb2b8",
		"ts": "2026-08-08T19:25:58.295Z",
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
		"liquidityUsd": 27340781.35,
		"hash": "3dc7ae2eb2b8aa7e40cdcdba7ff97ad09becea6324eeea627595bfdb252b7feb"
	},
	{
		"id": "704d1afb878e",
		"ts": "2026-08-08T19:25:58.541Z",
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
		"liquidityUsd": 4431949.93,
		"hash": "704d1afb878e7665f384f4134bc7f75d878edb885df881d6e8d50ce0ea56feb4"
	},
	{
		"id": "1399135941e5",
		"ts": "2026-08-08T19:25:58.774Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 943011.1,
		"hash": "1399135941e56c0ab4ed01b21efbd7a76fe3d3b3c051d541e8e4a80d1eef00c1"
	},
	{
		"id": "e5b870a4c319",
		"ts": "2026-08-08T19:25:59.023Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27340781.35,
		"hash": "e5b870a4c31923136d79301f9d5d292a0c3b3da7a9a25a9accbfe32b0f752552"
	},
	{
		"id": "d3850a4f3af0",
		"ts": "2026-08-08T19:25:59.259Z",
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
		"liquidityUsd": 4882267.43,
		"hash": "d3850a4f3af08dd532cc5c6096392b24ece3d0857528278f9970da575193537a"
	},
	{
		"id": "306e49b92a96",
		"ts": "2026-08-08T19:25:59.495Z",
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
		"liquidityUsd": 983621.47,
		"hash": "306e49b92a96981bf3bfe352adb635d4f1ede08bba2af62d8b407bcce705fa05"
	},
	{
		"id": "d3d080fb1331",
		"ts": "2026-08-08T19:25:59.731Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 504950.4,
		"hash": "d3d080fb13314852ab36934507d1c540e88f3ea214b629b8eeb9827dc92bdb22"
	},
	{
		"id": "ecf4009d0704",
		"ts": "2026-08-08T19:25:59.967Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4253850.83,
		"hash": "ecf4009d0704e540792c5aea61946b8c0bb987e50d15ad88695d21d865ba6dad"
	},
	{
		"id": "747da8d9aa21",
		"ts": "2026-08-08T19:26:00.214Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 350957.08,
		"hash": "747da8d9aa21f7d34d3d1b56c27262ba275ad2c0eb565161cc73eea950366262"
	},
	{
		"id": "479002b6d12a",
		"ts": "2026-08-08T19:26:00.445Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 54871.79,
		"hash": "479002b6d12ae00110ac8f6891920a531e8a1c2b03856de043cbef6e62dbc8ff"
	},
	{
		"id": "858159cfe89e",
		"ts": "2026-08-08T19:26:00.852Z",
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
		"liquidityUsd": 9293731.82,
		"hash": "858159cfe89e81fceedd56fd43a497b4771009c916ee699877c8c2d478cb70a1"
	},
	{
		"id": "7b675828b35b",
		"ts": "2026-08-08T19:26:01.099Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1921938.43,
		"hash": "7b675828b35bca42fa2c73a85f6cc29e927574e2de4c26f511839b9b47770591"
	},
	{
		"id": "26c41ae5167c",
		"ts": "2026-08-08T18:31:23.375Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115497668.29,
		"hash": "26c41ae5167c0b53fd552cfd26e35282ad114de4af2296cc7732c3ea4fc5ba15"
	},
	{
		"id": "f5c1572cfb01",
		"ts": "2026-08-08T18:31:23.568Z",
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
		"liquidityUsd": 16979425.27,
		"hash": "f5c1572cfb0181a71bc3450e3719b99e6c6b1fcc2cafa968b7b35ad5cc1aeea7"
	},
	{
		"id": "902d5d7ef4dd",
		"ts": "2026-08-08T18:31:23.793Z",
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
		"liquidityUsd": 1050505.81,
		"hash": "902d5d7ef4ddf74d4bf4a2f8ba830df60d822b13930ac338a24be81860ca8cf1"
	},
	{
		"id": "08fcac324ffd",
		"ts": "2026-08-08T18:31:23.987Z",
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
		"liquidityUsd": 27339366.78,
		"hash": "08fcac324ffdfa78d6b118bfe72c13df5592135096c5afce74cab0f976d0ad2d"
	},
	{
		"id": "87681fc719dc",
		"ts": "2026-08-08T18:31:24.184Z",
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
		"liquidityUsd": 4435779.31,
		"hash": "87681fc719dc91cf6516fd3f8f3401858b111d35b76c4d20bbcd626009af47ac"
	},
	{
		"id": "4a689d859ab4",
		"ts": "2026-08-08T18:31:24.377Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 943011.1,
		"hash": "4a689d859ab49140edf29bdfe311206f52353d54399e91ea0b3b45d9f3b10538"
	},
	{
		"id": "24510bc7393b",
		"ts": "2026-08-08T18:31:24.589Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27339366.78,
		"hash": "24510bc7393bde2d65050003b0a7a7acc10e8858c641e4e7ca4751f23670bca0"
	},
	{
		"id": "5348c8f138a9",
		"ts": "2026-08-08T18:31:24.785Z",
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
		"liquidityUsd": 4880158.51,
		"hash": "5348c8f138a9adbd50dbdf118b8f0b3ba86d1d56dad0bc88f13014b2c66dcf7b"
	},
	{
		"id": "b45c69f15529",
		"ts": "2026-08-08T18:31:24.985Z",
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
		"liquidityUsd": 982518.76,
		"hash": "b45c69f15529a489d288c7d27c0d2516fb04c9e620c9a9214e363cfa1edcf592"
	},
	{
		"id": "fe504c5e1c0d",
		"ts": "2026-08-08T18:31:25.181Z",
		"symbol": "RECALL",
		"token": "0x1f16e03C1a5908818F47f6EE7bB16690b40D0671",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 504507.96,
		"hash": "fe504c5e1c0dee23061b60aae5c116a923a9cb83625f9c92f4976fd6f3e55ec5"
	},
	{
		"id": "0ab48b85735b",
		"ts": "2026-08-08T18:31:25.386Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4076846.56,
		"hash": "0ab48b85735bac956e1622841db0366425be6d41fba5d813dbec5474c1d63949"
	},
	{
		"id": "fbf883a9c51f",
		"ts": "2026-08-08T18:31:25.586Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 351337.77,
		"hash": "fbf883a9c51fe195e2a52824c1fbcba4e1cc2cc3e707a221b4f56ba02e1e5da1"
	},
	{
		"id": "0f102b704e67",
		"ts": "2026-08-08T18:31:25.788Z",
		"symbol": "AURA",
		"token": "0xdCaA5E062b2be18E52eA6ED7ba232538621dDC10",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54945.05,
		"hash": "0f102b704e6742c6d689a9f43497c37386ca4099bcd18046a18041e05d091c09"
	}
]
