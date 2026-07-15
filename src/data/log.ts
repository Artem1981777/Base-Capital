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
	"updatedAt": "2026-07-15T18:03:12.763Z",
	"tokensScored": 3489,
	"verdictsIssued": 3489,
	"safe": 3085,
	"risky": 292,
	"likelyRug": 112,
	"ticks": 217
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "bdf6f3d2e4a7",
		"ts": "2026-07-15T18:03:08.588Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105934030.93,
		"hash": "bdf6f3d2e4a74c81b90d0346438680232de5d6144fdfb2b9dfb05f2fd29a4a6c"
	},
	{
		"id": "86bb1a9288fb",
		"ts": "2026-07-15T18:03:09.037Z",
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
		"liquidityUsd": 14379772.67,
		"hash": "86bb1a9288fb2ecb7497ff245d6bd0494d5de84c21f4702076c3f1e4156dd69f"
	},
	{
		"id": "37a1e28f34f3",
		"ts": "2026-07-15T18:03:09.317Z",
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
		"liquidityUsd": 1183617.17,
		"hash": "37a1e28f34f3e591aaaa1aa8948658863171919c3c609687bfd9ebde6b57f4b2"
	},
	{
		"id": "0a37eebf4768",
		"ts": "2026-07-15T18:03:09.564Z",
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
		"liquidityUsd": 29619826.85,
		"hash": "0a37eebf4768a08e153013a71c02a68ed6831ca6364005249f15b12a1beed182"
	},
	{
		"id": "a602005db151",
		"ts": "2026-07-15T18:03:09.803Z",
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
		"liquidityUsd": 4840005.29,
		"hash": "a602005db15144ae16643a843bb95936bb7d505239f02fca057afaed5d3d4cd4"
	},
	{
		"id": "7f0ea5864646",
		"ts": "2026-07-15T18:03:10.038Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1024369.03,
		"hash": "7f0ea5864646d3332a487a7daca71e35854e12ed5caea17a3c107e26a21f3fd5"
	},
	{
		"id": "9f900d6f6d7d",
		"ts": "2026-07-15T18:03:10.274Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29619826.85,
		"hash": "9f900d6f6d7da5bdfc433a79e6118b0f469da80271a7d56e33f587cf35e3cd0e"
	},
	{
		"id": "b6fc741feefa",
		"ts": "2026-07-15T18:03:10.519Z",
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
		"liquidityUsd": 2890056.99,
		"hash": "b6fc741feefa0952b0e75e06f303bd5d87e31f198a9af9f92edb332f9d2bd28d"
	},
	{
		"id": "7d7c52b1f9b8",
		"ts": "2026-07-15T18:03:10.766Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1195915.7,
		"hash": "7d7c52b1f9b8a5a50b07da6d94fa47b3a6c68fc2395050527c06cd32d4307aeb"
	},
	{
		"id": "2530fdb93880",
		"ts": "2026-07-15T18:03:11.002Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 804642.68,
		"hash": "2530fdb93880f05c34e11512873e95d0f29401088a77b87d87504e05127a1dd8"
	},
	{
		"id": "7b6888c2fcb3",
		"ts": "2026-07-15T18:03:11.222Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 81866.4,
		"hash": "7b6888c2fcb3aceb0289849c7eacfaef444744a4e5fafaaa2584401191326b71"
	},
	{
		"id": "824f14b252b4",
		"ts": "2026-07-15T18:03:11.442Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121160.02,
		"hash": "824f14b252b4a3e26253fce93616378b1376ced923f708a9ac5a6efda0cc407b"
	},
	{
		"id": "c7eabdecd80d",
		"ts": "2026-07-15T18:03:11.664Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 481158.98,
		"hash": "c7eabdecd80df56244bf208f850062f19f472391a912974d87e22de8d8e2fa5a"
	},
	{
		"id": "bd79d571ffa3",
		"ts": "2026-07-15T18:03:11.885Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 154921.66,
		"hash": "bd79d571ffa363f2e858ee90ca2aeb7a735e65276f913fa0db90cff09ace5fc4"
	},
	{
		"id": "c790b036b261",
		"ts": "2026-07-15T18:03:12.104Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 521353.55,
		"hash": "c790b036b261b051bb136a16a077e48fe3271fbf1c46b9f06110deea673034cb"
	},
	{
		"id": "b384fa17d953",
		"ts": "2026-07-15T18:03:12.322Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3625949.54,
		"hash": "b384fa17d95376e4a124e52b562502984d351f26d77b75da5f35cb0519cf0212"
	},
	{
		"id": "72121c41b99a",
		"ts": "2026-07-15T18:03:12.540Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1443151.01,
		"hash": "72121c41b99a139724db095255efef512607320fab31f133e85a2f1a9a788b11"
	},
	{
		"id": "07fbfd885ce3",
		"ts": "2026-07-15T18:03:12.763Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1100861.37,
		"hash": "07fbfd885ce3d50dd35f11e18f63d55abc30a9c8d01740fe7d254ac4e3cc6de7"
	},
	{
		"id": "b2a8ec27ae44",
		"ts": "2026-07-15T16:18:12.273Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105936506.58,
		"hash": "b2a8ec27ae4463063027267e595560da008d7e46602f3037d75971d89809324c"
	},
	{
		"id": "0c0795bfc776",
		"ts": "2026-07-15T16:18:12.719Z",
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
		"liquidityUsd": 17044773.44,
		"hash": "0c0795bfc7764ad250f424ff34a1503058eb6bccff2086b27deefead04c86b1a"
	},
	{
		"id": "0c845525b04f",
		"ts": "2026-07-15T16:18:13.029Z",
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
		"liquidityUsd": 1188239.54,
		"hash": "0c845525b04febe0d1d80796a563544a5b0570e712154a8ffb4292439e4633dd"
	},
	{
		"id": "b8a8c4999212",
		"ts": "2026-07-15T16:18:13.272Z",
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
		"liquidityUsd": 30391078.81,
		"hash": "b8a8c4999212555ba9b7c833793d0b84653291ed5b6fd57af5afe97bb1315ccc"
	},
	{
		"id": "15f5c47c9a0a",
		"ts": "2026-07-15T16:18:13.516Z",
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
		"liquidityUsd": 4745616.41,
		"hash": "15f5c47c9a0a57b8ea8296d0a191644453d9493ef3faa55d7748948334e2da92"
	},
	{
		"id": "03bbf0bcf21a",
		"ts": "2026-07-15T16:18:13.766Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1024437.71,
		"hash": "03bbf0bcf21a5aaaea8117775a5f8a07717c2b26ccdb786cbcc2f67a85572cd9"
	},
	{
		"id": "39da4e9971aa",
		"ts": "2026-07-15T16:18:14.010Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30391078.81,
		"hash": "39da4e9971aafd85e8c6d7d592dbcf5e3cba07346f94c97f98b3df3d68c53ff6"
	},
	{
		"id": "dda393ab9a91",
		"ts": "2026-07-15T16:18:14.256Z",
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
		"liquidityUsd": 2876828.99,
		"hash": "dda393ab9a9179448e4c61769833393549d3563015d97a355abe395f0b5e7e76"
	},
	{
		"id": "c0429055588c",
		"ts": "2026-07-15T16:18:14.501Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 66,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.32,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 121159.99,
		"hash": "c0429055588c30ef850e1b7a91c3d1e8324439e6710f4a3af310879d96fbd3f7"
	},
	{
		"id": "8a78335a9202",
		"ts": "2026-07-15T16:18:14.748Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 848011.96,
		"hash": "8a78335a9202ad8cd607a1f7d0e33817c9c6168821ed1eef6aeda27a39c054bb"
	},
	{
		"id": "416447746cd7",
		"ts": "2026-07-15T16:18:14.976Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 466434.55,
		"hash": "416447746cd73bac725c48be347cd6268b65f562a695394c65094f8f54a3b702"
	},
	{
		"id": "97ccf7e0afab",
		"ts": "2026-07-15T16:18:15.205Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 92638.83,
		"hash": "97ccf7e0afab07f273de78af36d687cad021f923b70d18881938d85641cc962b"
	},
	{
		"id": "1bb68f75bb97",
		"ts": "2026-07-15T16:18:15.433Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 537860.72,
		"hash": "1bb68f75bb97d6c4c7e043d15c462e834ff4a1da1c14bdd74c13e56788e11329"
	},
	{
		"id": "03bc59b92d7f",
		"ts": "2026-07-15T16:18:15.662Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 156951.02,
		"hash": "03bc59b92d7f273d88a1e54cfc0b39edc70ddfce8723b8eee2053ee3b6c32ff1"
	},
	{
		"id": "14025556d6a2",
		"ts": "2026-07-15T16:18:15.891Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3514261.01,
		"hash": "14025556d6a2333a7ca84af7fd6d3875770e42b0534749e600026398cc144133"
	},
	{
		"id": "237611eccd99",
		"ts": "2026-07-15T16:18:16.121Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1570987.7,
		"hash": "237611eccd9966da5a67824a07be02318fd479e1ad2067c28006b2cead1eec0f"
	},
	{
		"id": "3dfd44a05f12",
		"ts": "2026-07-15T16:18:16.359Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1106927.9,
		"hash": "3dfd44a05f1261a51892b9a5a161c796fbc078fbdc970b44749e2095d7e420e6"
	},
	{
		"id": "81e70c3f4970",
		"ts": "2026-07-15T16:18:16.589Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 267901.41,
		"hash": "81e70c3f49708dd5634e93da0cd7e275dcc5f4eaf78bc31894e78b7fcae01019"
	},
	{
		"id": "508ec0b29009",
		"ts": "2026-07-15T14:46:15.255Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106147721.7,
		"hash": "508ec0b29009cb45ecaddd0a1a84bcc2c726c061506cdf31f86764d0856b4dd6"
	},
	{
		"id": "1d65e2c366d7",
		"ts": "2026-07-15T14:46:15.608Z",
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
		"liquidityUsd": 14817834.66,
		"hash": "1d65e2c366d7fe5be1e243405c2582b84b389867a993dfa2e626995623257920"
	},
	{
		"id": "996bc790a24c",
		"ts": "2026-07-15T14:46:15.804Z",
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
		"liquidityUsd": 1194932.03,
		"hash": "996bc790a24c86cddb3c51670b4c3f0b9f32a2f6a61c6736641de453dbe1397b"
	},
	{
		"id": "ce7d7fcf2fa3",
		"ts": "2026-07-15T14:46:16.001Z",
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
		"liquidityUsd": 30617958.01,
		"hash": "ce7d7fcf2fa3e6b0d1d67ea3fe82fac146976dc1298ce79207355e2ff97a48ef"
	},
	{
		"id": "1ce957b0046c",
		"ts": "2026-07-15T14:46:16.191Z",
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
		"liquidityUsd": 4775936.8,
		"hash": "1ce957b0046c258612e02d82170724791fd906f5afd360f5a42e506b50b211b9"
	},
	{
		"id": "5a446de77172",
		"ts": "2026-07-15T14:46:16.390Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1024438.4,
		"hash": "5a446de77172558c6f8280e01e73eabb6c73010ad27ee7b76dcd445379cdf641"
	},
	{
		"id": "b011ad774754",
		"ts": "2026-07-15T14:46:16.584Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30609232.36,
		"hash": "b011ad77475465419ce92480f1c0712f0d7073f2057dcd0dc5bdad90da8b1964"
	},
	{
		"id": "5698226193a5",
		"ts": "2026-07-15T14:46:16.773Z",
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
		"liquidityUsd": 2989830.95,
		"hash": "5698226193a5d2a1597cd93f732158e2863c9564082f831385c87db86e7891f6"
	},
	{
		"id": "94f6a212d55c",
		"ts": "2026-07-15T14:46:16.967Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 51,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.02,
		"flags": [
			"new_pair_under_24h",
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 121159.99,
		"hash": "94f6a212d55c5f4f56e4ff78a661d4ad8b12ea7a5b8df5d70549d2997a521ec7"
	},
	{
		"id": "4002f4f97385",
		"ts": "2026-07-15T14:46:17.160Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 487218.92,
		"hash": "4002f4f973852ed12e7478d424f48f99c2211098dc91d76bc23a53b06311e3bf"
	},
	{
		"id": "f4cf54a6ce59",
		"ts": "2026-07-15T14:46:17.405Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 541111.12,
		"hash": "f4cf54a6ce593f0b60228f42cc6ba89d26ff0a2bcd9728c3e740df0a1cac7dff"
	},
	{
		"id": "aca7dad13260",
		"ts": "2026-07-15T14:46:17.644Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 82423.65,
		"hash": "aca7dad13260aa2bd416d0d3470d43be7a045b02fb56ca804753e725c5454c2c"
	},
	{
		"id": "22b5ef16b2dc",
		"ts": "2026-07-15T14:46:17.845Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 844059.75,
		"hash": "22b5ef16b2dcd17e21f564e95dacb2632ba787de169f519142115c57545b5ce9"
	},
	{
		"id": "afabd1b44023",
		"ts": "2026-07-15T14:46:18.044Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1572265.05,
		"hash": "afabd1b44023a50983e3ab1d6adfbde29c2cc3fc84a6adb03bcc0e7d1123880e"
	},
	{
		"id": "433e02b045eb",
		"ts": "2026-07-15T14:46:18.231Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 128996.05,
		"hash": "433e02b045ebbbc663b59c36d71167e959ac55a8b28ae2ffeacb22d8c7316e92"
	},
	{
		"id": "d8a2820ef877",
		"ts": "2026-07-15T14:46:18.413Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3570105.95,
		"hash": "d8a2820ef8770b3a76f096a52d6a26c6cea8a69d0bad56f57a83157a23eaabae"
	},
	{
		"id": "bf45f9e19f00",
		"ts": "2026-07-15T14:46:18.638Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1128946.22,
		"hash": "bf45f9e19f00632db31a9e9f3e51e26e083aa4f832d1c2c2c61ec3490f86c1c8"
	},
	{
		"id": "3747d9f643d6",
		"ts": "2026-07-15T14:46:18.825Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279551.92,
		"hash": "3747d9f643d6c96171684d34ea465d8062670dbbe2e5a04e53ea1cafc960f621"
	},
	{
		"id": "84512718cb94",
		"ts": "2026-07-15T14:46:19.035Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 569128.78,
		"hash": "84512718cb94c3e1dfc2561f363c87494fb4919e48915fd3a7b0a6d0f190f1c2"
	},
	{
		"id": "f73aceb2d8af",
		"ts": "2026-07-15T12:12:28.969Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107057030.14,
		"hash": "f73aceb2d8af2dc5ec10eb94c3c10f89aa7d940718f85f0e39a3a4eccf00ebf8"
	},
	{
		"id": "5a8e36fcaa54",
		"ts": "2026-07-15T12:12:29.414Z",
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
		"liquidityUsd": 16816783.99,
		"hash": "5a8e36fcaa548e32ebd54858cc7d5378d2dca8efa6de6680f3dcd2fc6e697aa8"
	},
	{
		"id": "338c79155060",
		"ts": "2026-07-15T12:12:29.660Z",
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
		"liquidityUsd": 1179499.4,
		"hash": "338c79155060c5b0c57956fd1705bead7445d84c1538b42ea814288ba89a81a3"
	},
	{
		"id": "458d1f05574f",
		"ts": "2026-07-15T12:12:30.108Z",
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
		"liquidityUsd": 30429019.28,
		"hash": "458d1f05574f86d735b07d9086918e87d676a1aa24e46a22a1fd75f69d09d0b2"
	},
	{
		"id": "042aa60dea76",
		"ts": "2026-07-15T12:12:30.351Z",
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
		"liquidityUsd": 4681371.92,
		"hash": "042aa60dea76e65dabb8957d84603f394767393e3d94e6c21ecfe42cf620e6ce"
	},
	{
		"id": "69e0b0f4628b",
		"ts": "2026-07-15T12:12:30.604Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1000863.02,
		"hash": "69e0b0f4628be06562708ecbc04af14417b11774d26bd5627b510ca196795810"
	},
	{
		"id": "f67f3c5f73ff",
		"ts": "2026-07-15T12:12:30.854Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30429019.28,
		"hash": "f67f3c5f73ff183e51e41f64da0c5d0b995e788bcbfcd2ff61e8c242fd575beb"
	},
	{
		"id": "5c8eda0c602e",
		"ts": "2026-07-15T12:12:31.100Z",
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
		"liquidityUsd": 2813513.6,
		"hash": "5c8eda0c602e76d6e8375b2f0077c807b638a015f620c7b68b90243f5db8e8cc"
	},
	{
		"id": "3441fb8ed097",
		"ts": "2026-07-15T12:12:31.348Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 483322.96,
		"hash": "3441fb8ed097e28fe5f15c6880488cff2e6211ea4ff73b031f4b1198f31d7e90"
	},
	{
		"id": "8a46d553c662",
		"ts": "2026-07-15T12:12:31.604Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 51,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.02,
		"flags": [
			"new_pair_under_24h",
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 121160,
		"hash": "8a46d553c662e56ff03ac3c6e2c8509fda9ec1bc054f09c4dfb5515517df456e"
	},
	{
		"id": "e995c5664417",
		"ts": "2026-07-15T12:12:31.834Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 523256.07,
		"hash": "e995c56644175d636cee2cc8eebd096dc2a08b1d7d31c24fa2b8f580129c0a97"
	},
	{
		"id": "b859c05d0f39",
		"ts": "2026-07-15T12:12:32.071Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 67585.01,
		"hash": "b859c05d0f398d8c8cfe3c59847f70e8acd0a38fe3ff93fd0c4824bd37c275d2"
	},
	{
		"id": "32f46f028775",
		"ts": "2026-07-15T12:12:32.310Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1505270.01,
		"hash": "32f46f02877540d5610ed80773d35a7da6a305bad0f84fdf81b5f7fe592acc61"
	},
	{
		"id": "199fa739fa39",
		"ts": "2026-07-15T12:12:32.548Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3561635.78,
		"hash": "199fa739fa3990429c42b264b198d1f4ccd7f3ad069b3141e41a78ec06aa601a"
	},
	{
		"id": "9d089e8576db",
		"ts": "2026-07-15T12:12:33.102Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 116160.58,
		"hash": "9d089e8576dbb97648767f7387726eeeeb90446fa4140bd9fcfdadd49b84a26d"
	},
	{
		"id": "dbf93db3c12f",
		"ts": "2026-07-15T12:12:33.341Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 911854.92,
		"hash": "dbf93db3c12f4c717238394003c5f93e1dc946deaeb6f268d11744a685075cf0"
	},
	{
		"id": "6a9650198bca",
		"ts": "2026-07-15T12:12:33.572Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 575491.3,
		"hash": "6a9650198bcaad0460636f79e1139a2b1dbd4317ac5fef20e0dc77d018a7c3a4"
	},
	{
		"id": "c89f828ab3d2",
		"ts": "2026-07-15T12:12:34.053Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1140192.89,
		"hash": "c89f828ab3d25859bacccc8c9936fd2cee6a1bb0d5825dc20f2084ec0b5bcc7b"
	},
	{
		"id": "251ed0f0eb5c",
		"ts": "2026-07-15T12:12:34.293Z",
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
		"liquidityUsd": 1222247.49,
		"hash": "251ed0f0eb5c764036fd4de8b96f2e57c82327404055fd8265ca8c1c941e6cdf"
	},
	{
		"id": "bda1d1b677dd",
		"ts": "2026-07-15T10:45:54.922Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106862453.48,
		"hash": "bda1d1b677dda26534d5cb7a4c0bfddc4ccadd865b92a59d051bf84e6f9e5d33"
	},
	{
		"id": "c43ba5cbe185",
		"ts": "2026-07-15T10:45:55.397Z",
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
		"liquidityUsd": 16377441.16,
		"hash": "c43ba5cbe1858190c6e136be5604feb1a90cee31617c721b9b0b1dbdcab987bd"
	},
	{
		"id": "4db318aa5d5d",
		"ts": "2026-07-15T10:45:55.650Z",
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
		"liquidityUsd": 1182103.61,
		"hash": "4db318aa5d5d99c1ec32fbff9073c71061592c659219b8c654dc5bc518c4d6f0"
	},
	{
		"id": "c59967f4789f",
		"ts": "2026-07-15T10:45:55.903Z",
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
		"liquidityUsd": 30575849.64,
		"hash": "c59967f4789f71498211f977911a50a71299e9872783273e8134e368740c9912"
	},
	{
		"id": "6703de1fb43f",
		"ts": "2026-07-15T10:45:56.155Z",
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
		"liquidityUsd": 4661874.3,
		"hash": "6703de1fb43f2f8b727495e602597d6376fe7b1cd72f18bbdb98a7788dade63b"
	},
	{
		"id": "a980da9856c9",
		"ts": "2026-07-15T10:45:56.405Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1000856.22,
		"hash": "a980da9856c998354d439018f724df893a2460a41f5abf813107cd65676206be"
	},
	{
		"id": "6e9632fa8f96",
		"ts": "2026-07-15T10:45:56.655Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30575849.64,
		"hash": "6e9632fa8f96e56ce72cb80f559d3e1e1174c5c76e5adbfab3d257d533235ec3"
	},
	{
		"id": "8a8285cb7356",
		"ts": "2026-07-15T10:45:56.903Z",
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
		"liquidityUsd": 2669274.93,
		"hash": "8a8285cb7356ecc665a7cf9351c69b6022295c7c045d5972ede97f84859747e8"
	},
	{
		"id": "09574d5b5d80",
		"ts": "2026-07-15T10:45:57.150Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 502698.82,
		"hash": "09574d5b5d809dbc4b242f828577d79e04d1d5a5651ee4fab988f4daca729746"
	},
	{
		"id": "db391f60b35f",
		"ts": "2026-07-15T10:45:57.400Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 524133.42,
		"hash": "db391f60b35f74ffbb4039c9039accd76bfaf3ae226d482e949023057da56c56"
	},
	{
		"id": "994ae85e7e82",
		"ts": "2026-07-15T10:45:57.629Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3583931.36,
		"hash": "994ae85e7e82722680b745cf6455ca3a2ae10295c469ed579aba3ed9f19cb017"
	},
	{
		"id": "0e0ce517909d",
		"ts": "2026-07-15T10:45:57.864Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 81045.77,
		"hash": "0e0ce517909dcb2d5b14d8ab18c31524507961f8e368b9d9138b36b38ca16568"
	},
	{
		"id": "e05f31d6f668",
		"ts": "2026-07-15T10:45:58.091Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 93608.04,
		"hash": "e05f31d6f668cfb6190494267cd3fb140a664fc51a1970f4d7f38765a29e54fb"
	},
	{
		"id": "bec6c2091a31",
		"ts": "2026-07-15T10:45:58.329Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1455829.67,
		"hash": "bec6c2091a31ae6749a8e68b1ff89f5fd935f64f617241607a2f3c43e35b0e56"
	},
	{
		"id": "15c07f9e1454",
		"ts": "2026-07-15T10:45:58.774Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 111628.36,
		"hash": "15c07f9e14542a18bdd8162f9bfbb88fc6b53cb41b22c89daf8ab35f26b823d7"
	},
	{
		"id": "be2fd89b2021",
		"ts": "2026-07-15T10:45:59.008Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 581418.23,
		"hash": "be2fd89b20210490ead39ee0f1c8736ed4a47ade14e2f616115de885d1651ef6"
	},
	{
		"id": "210b47ed9459",
		"ts": "2026-07-15T10:45:59.237Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 792638.98,
		"hash": "210b47ed94598268bd31bc5417612656ea637bdc053f8a6cc4bd5f0dcd8f3941"
	},
	{
		"id": "d01d016b467d",
		"ts": "2026-07-15T10:45:59.472Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1129731.74,
		"hash": "d01d016b467d040c13573b2f9922d58f4829f0398dc59cf1f7b8983c7704812e"
	},
	{
		"id": "c3417a1db4b0",
		"ts": "2026-07-15T08:02:12.791Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106231769.06,
		"hash": "c3417a1db4b0ad959102fa0555ebd0b7012b569afe16c432855445d8052922f5"
	},
	{
		"id": "939c828ae581",
		"ts": "2026-07-15T08:02:13.076Z",
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
		"liquidityUsd": 15711663.71,
		"hash": "939c828ae58101939ceee948e0cda838c074e42a284a90f7bf0dca1dee844ee1"
	},
	{
		"id": "90683830a551",
		"ts": "2026-07-15T08:02:13.376Z",
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
		"liquidityUsd": 1189780.97,
		"hash": "90683830a551995424b4de8a82dfc26329f6b7d2064fa7caff3494613d275c7c"
	},
	{
		"id": "c865a5c66c26",
		"ts": "2026-07-15T08:02:13.745Z",
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
		"liquidityUsd": 30299828.96,
		"hash": "c865a5c66c265842ca3134be6264dda00ac1000651e59c671c0c98eb26cead02"
	},
	{
		"id": "bf0b7ef66396",
		"ts": "2026-07-15T08:02:14.033Z",
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
		"liquidityUsd": 4625139.56,
		"hash": "bf0b7ef6639683d8717bded32521fea2fa9aad9c97e5988f69440a4d0154e717"
	},
	{
		"id": "2333e05e41d1",
		"ts": "2026-07-15T08:02:14.293Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1004366.99,
		"hash": "2333e05e41d1425e7c2b4269ecb92043f4e8dac5df1ad4865a1d382919e9f85d"
	},
	{
		"id": "8845cbacd641",
		"ts": "2026-07-15T08:02:14.587Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3613068.07,
		"hash": "8845cbacd64100d67c0f04b78be2e994e6012fda58fca3c611a43094e3094970"
	},
	{
		"id": "6560623f56b1",
		"ts": "2026-07-15T08:02:14.834Z",
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
		"liquidityUsd": 2639996.66,
		"hash": "6560623f56b19b261c5f796abb4a2574e55c18ab547920abedc02fc02b2d9589"
	},
	{
		"id": "cb8f39deb9ce",
		"ts": "2026-07-15T08:02:15.084Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 509297.1,
		"hash": "cb8f39deb9ce8087692d3cb9ed0b0b1ecc2fd98919c303a82cb560f6af8e44cf"
	},
	{
		"id": "33f457fe9768",
		"ts": "2026-07-15T08:02:15.343Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3618282.64,
		"hash": "33f457fe9768e7aef04f36f1ea55583e5ab0bc6339ebfd1613ca0623f324f30a"
	},
	{
		"id": "3352b8bd0fc0",
		"ts": "2026-07-15T08:02:15.578Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 75193.96,
		"hash": "3352b8bd0fc0713d1d695a72aff4873e2d0b7f69cd80878a866275cdcbed773c"
	},
	{
		"id": "51647dc92c99",
		"ts": "2026-07-15T08:02:15.810Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1430895.26,
		"hash": "51647dc92c9924124ce8cf5f69acaad06a3c20aba0f7d9e9792a65d3f76335eb"
	},
	{
		"id": "3887d53b3ac9",
		"ts": "2026-07-15T08:02:16.040Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 103679.51,
		"hash": "3887d53b3ac9e72a44d248c1cc1d65aeb76440054af4946de66c848e941eb21c"
	},
	{
		"id": "15f635ac382b",
		"ts": "2026-07-15T08:02:16.270Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 522637.9,
		"hash": "15f635ac382b13173d4f2d785a0ca918df6823906e2aa972190632e18b20b9f3"
	},
	{
		"id": "540468dede63",
		"ts": "2026-07-15T08:02:16.499Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 564150.62,
		"hash": "540468dede637a269ac363f3199060f7ef9eaa431079ae70c4b6951587bc5fee"
	},
	{
		"id": "1e5c57a80e8c",
		"ts": "2026-07-15T08:02:16.730Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 399282.59,
		"hash": "1e5c57a80e8c91f1827a1dcc2cb7cdab2052b9247ff4d50dbcdde37c70886f9d"
	},
	{
		"id": "712218a20aa5",
		"ts": "2026-07-15T08:02:16.957Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 96133.4,
		"hash": "712218a20aa5900e1687407c72dd06c39b70efd31ae044df2db8b96a35fc2972"
	},
	{
		"id": "fed7189144a5",
		"ts": "2026-07-15T08:02:17.188Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1129757.83,
		"hash": "fed7189144a5ab7aea7a29596acf6921e5d1a4a65fae684ed7967612f0338252"
	},
	{
		"id": "4054d97ea967",
		"ts": "2026-07-15T05:27:00.270Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106210142.19,
		"hash": "4054d97ea967b67bcf6c783cffc85ff8242969350be6d6653003ae79d231339c"
	},
	{
		"id": "bfc729fd0fe6",
		"ts": "2026-07-15T05:27:00.513Z",
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
		"liquidityUsd": 16399843.77,
		"hash": "bfc729fd0fe65584b264b6a43c7f02fb92f99374b671b18f0ae5f0632906fc47"
	},
	{
		"id": "71600d491616",
		"ts": "2026-07-15T05:27:00.759Z",
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
		"liquidityUsd": 1198373.56,
		"hash": "71600d4916167c58b1b0cb9a6bef676125d32df2a0a590ce0039a21fb4ce9972"
	},
	{
		"id": "6235045300cc",
		"ts": "2026-07-15T05:27:01.205Z",
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
		"liquidityUsd": 30386528.57,
		"hash": "6235045300ccc2eb86246c78d328375a8c2ba56085f00ba30b2c8062aeefb00f"
	},
	{
		"id": "6b673bb41e39",
		"ts": "2026-07-15T05:27:01.442Z",
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
		"liquidityUsd": 4601289.51,
		"hash": "6b673bb41e397b2e8705ee6a94e5cc3d94a3ceef27d8b742147f2846e91ca001"
	},
	{
		"id": "3c99c9efa88b",
		"ts": "2026-07-15T05:27:01.691Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1007765,
		"hash": "3c99c9efa88b540f83029f65b4944d82c3494d44a83d146f6e84c7ff2929e0eb"
	},
	{
		"id": "d4e6f1e39116",
		"ts": "2026-07-15T05:27:01.922Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30386528.57,
		"hash": "d4e6f1e391163b3e6e86b72200ceb180a77cc3c71d786aacf8992577cfebb308"
	},
	{
		"id": "a217a77fa6c9",
		"ts": "2026-07-15T05:27:02.159Z",
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
		"liquidityUsd": 2799260.34,
		"hash": "a217a77fa6c9a0b2e4acb9ed2601e06c02985105f45e7de7bc857ab3210afadf"
	},
	{
		"id": "ec6889258aa3",
		"ts": "2026-07-15T05:27:02.397Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 446825.45,
		"hash": "ec6889258aa30b45d90214fd30f1431eecde67940d806a9da60ce2fc4b5fcf2a"
	},
	{
		"id": "be947f59a31d",
		"ts": "2026-07-15T05:27:02.634Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3766246.3,
		"hash": "be947f59a31d42985370aa7bb11c65f50ab05424c2dbc4880154fe9e22d51bed"
	},
	{
		"id": "9d7fa727064f",
		"ts": "2026-07-15T05:27:02.854Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 82932.64,
		"hash": "9d7fa727064f45de570fece0e8c6ecf2531bfe5d3d8d43b228cc4a828a0f4af2"
	},
	{
		"id": "b1b72f1d0f94",
		"ts": "2026-07-15T05:27:03.078Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 390772.03,
		"hash": "b1b72f1d0f94d01b1f8eb28c8c0292fe1f32d843f6d67ba052f7fbcd8f16a1b6"
	},
	{
		"id": "78414fa6ff21",
		"ts": "2026-07-15T05:27:03.295Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1437402.97,
		"hash": "78414fa6ff213ee7f91c93a0ad5b0246fdd709c129928bd6ad1777d6849fa9ba"
	},
	{
		"id": "584e4b64a441",
		"ts": "2026-07-15T05:27:03.514Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94321.41,
		"hash": "584e4b64a4412695678fb5ef7d76a7f6cfb62d22555fe920b2f55aa93b0260bd"
	},
	{
		"id": "67b25396a80a",
		"ts": "2026-07-15T05:27:03.739Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 108120.35,
		"hash": "67b25396a80ab71af75f86acc5a2f57e6424bcf9b5a4ee444e54ea4554c94a2c"
	},
	{
		"id": "61a0a01f5de3",
		"ts": "2026-07-15T05:27:03.955Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 524934.45,
		"hash": "61a0a01f5de3fc82fde2c64953a0081448b77d41b44fd2ff68cce452b817e2eb"
	},
	{
		"id": "f7311b23893b",
		"ts": "2026-07-15T05:27:04.174Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 590200.58,
		"hash": "f7311b23893b32dc4ec355f9a15e737ea50f273564522cb0e87eddd2a8d4d7db"
	},
	{
		"id": "e8ea3df420a6",
		"ts": "2026-07-15T05:27:04.419Z",
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
		"liquidityUsd": 1236826.52,
		"hash": "e8ea3df420a6608421c171d687ce34a714aa62c95a9ddc111cebe12faac95acb"
	},
	{
		"id": "d72220cf862f",
		"ts": "2026-07-15T02:54:11.046Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105369067.83,
		"hash": "d72220cf862ff632a30e9b4686ad941293b2f61bf2b0cef690e93efaaaaef436"
	},
	{
		"id": "bd6f9fade876",
		"ts": "2026-07-15T02:54:11.709Z",
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
		"liquidityUsd": 16901317.64,
		"hash": "bd6f9fade8763372bcdf9f80b63de5e1173f7942e50b3a77a9ce9ae459cf9c03"
	},
	{
		"id": "51a170858ddc",
		"ts": "2026-07-15T02:54:12.186Z",
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
		"liquidityUsd": 1199466.57,
		"hash": "51a170858ddc9d055a3ef3e9e688f642f151d22f62c1989b4c899b12b5f4d82a"
	},
	{
		"id": "c8fff0f7eb77",
		"ts": "2026-07-15T02:54:12.633Z",
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
		"liquidityUsd": 30220203.85,
		"hash": "c8fff0f7eb77093ea40f7beebfe5cd5ac06696ca52464dcb8a259cf8c9d42c2e"
	},
	{
		"id": "c1b97724a884",
		"ts": "2026-07-15T02:54:13.084Z",
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
		"liquidityUsd": 4586137.48,
		"hash": "c1b97724a8840dcf75eacbea765ce3c4ca1c48851ad66f09a81df1603b375058"
	},
	{
		"id": "cfc7f167f632",
		"ts": "2026-07-15T02:54:13.326Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1008122.45,
		"hash": "cfc7f167f6328b9b377b26d039c3d34c58b812e9515b145d5d5b5a33d9c268ff"
	},
	{
		"id": "16ab10e6726f",
		"ts": "2026-07-15T02:54:13.564Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30220203.85,
		"hash": "16ab10e6726f807b1c7235c978452421f93e231fdce55372455f9e92c1a59422"
	},
	{
		"id": "fd0b3d0940c4",
		"ts": "2026-07-15T02:54:14.075Z",
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
		"liquidityUsd": 2706332.41,
		"hash": "fd0b3d0940c484fb2c8b26d98eba6f42b92f8ff50559928f2bf8fdac1e663505"
	},
	{
		"id": "04a6d62218d3",
		"ts": "2026-07-15T02:54:14.313Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 417284.38,
		"hash": "04a6d62218d356b383cbfa1c63d3ebcb596062a35a3ef4f5a0ae46c8e4e57328"
	},
	{
		"id": "d4579659eb00",
		"ts": "2026-07-15T02:54:14.552Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3959414.86,
		"hash": "d4579659eb00a19c2cad7a00bec81486c7cdf8cd6fc69660cef4e9b8b3c1c145"
	},
	{
		"id": "1ec2820f516c",
		"ts": "2026-07-15T02:54:14.778Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 83071.33,
		"hash": "1ec2820f516c0fef3fdd809267013efd9c0b69ad4dac6cb3acb961eea76dc168"
	},
	{
		"id": "e8a1b6bc8415",
		"ts": "2026-07-15T02:54:15.004Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 389359.13,
		"hash": "e8a1b6bc8415c2e4ed4958005a878e21972452c9b629f86ef2fc5199d43a8d54"
	},
	{
		"id": "db6a12de205c",
		"ts": "2026-07-15T02:54:15.226Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 523603.35,
		"hash": "db6a12de205c8c7db69066b3b136c3ab57632697754a175b72d44764644bffc8"
	},
	{
		"id": "d0972d4e4d07",
		"ts": "2026-07-15T02:54:15.453Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1421909.49,
		"hash": "d0972d4e4d076ee2d152077d02c568faf2aafc0f5921b2e9785b9bd0d9ec2fdd"
	},
	{
		"id": "a2bdec3b61c5",
		"ts": "2026-07-15T02:54:15.676Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97389.92,
		"hash": "a2bdec3b61c50ff307a3a90e2c3fa580a165c50a46411ca19bf60a65b65261d8"
	},
	{
		"id": "4db7331c42b7",
		"ts": "2026-07-15T02:54:15.899Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 547192.41,
		"hash": "4db7331c42b7dd48fefc0bc288d03a8d7559cced25cfb83de2084bcad86b8199"
	},
	{
		"id": "c7a6ec5a4b72",
		"ts": "2026-07-15T02:54:16.123Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8657522.48,
		"hash": "c7a6ec5a4b7298eb17bc3c6e8fc7f5878db097f53daded5214719d2894fc1983"
	},
	{
		"id": "9ea7829dcf51",
		"ts": "2026-07-15T02:54:16.347Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1929233.34,
		"hash": "9ea7829dcf5139e0746bcaad8e12f1cf2d9620cdac0923f434a0f75debd72cf0"
	},
	{
		"id": "f4c647b7f52a",
		"ts": "2026-07-14T23:58:51.582Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106658133.72,
		"hash": "f4c647b7f52a2fb090f4ad92d5081b7125e1857c4abf632ab4b51f546262eb0c"
	},
	{
		"id": "735431d044a3",
		"ts": "2026-07-14T23:58:52.025Z",
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
		"liquidityUsd": 16250956.86,
		"hash": "735431d044a32e47e3273550c2da73285a309248d22ae8614252b5afdfaa6658"
	},
	{
		"id": "ac51eebfa86e",
		"ts": "2026-07-14T23:58:52.469Z",
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
		"liquidityUsd": 1223161.38,
		"hash": "ac51eebfa86e9b3ceec2b643f6ffbb06f78c57bc37f1dd262df05090326f45c2"
	},
	{
		"id": "e528f974be32",
		"ts": "2026-07-14T23:58:52.907Z",
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
		"liquidityUsd": 30195238.28,
		"hash": "e528f974be32c00191eca67a10dbffbebf675327b45d0798bdc45fc0563428b5"
	},
	{
		"id": "88432c054e4c",
		"ts": "2026-07-14T23:58:53.145Z",
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
		"liquidityUsd": 4649732.14,
		"hash": "88432c054e4c5039f4803a4a23191c29621913187dee73fb265704930969b7d7"
	},
	{
		"id": "e55f90ba5895",
		"ts": "2026-07-14T23:58:53.382Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1014680.82,
		"hash": "e55f90ba5895d272a31366e6bc6d1632137fc364888a9bcd7f63565760182993"
	},
	{
		"id": "8b298301e0d9",
		"ts": "2026-07-14T23:58:53.619Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30195238.28,
		"hash": "8b298301e0d94d9ee7921c455d50c715bcc33ed69a6ba76e4db32064287c1a27"
	},
	{
		"id": "620fb8af2b52",
		"ts": "2026-07-14T23:58:53.854Z",
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
		"liquidityUsd": 2837164.45,
		"hash": "620fb8af2b52a3f384576f46de647b56ffe78ccf3343705c145c54ce0d748f19"
	},
	{
		"id": "4d9cbbe73e0c",
		"ts": "2026-07-14T23:58:54.086Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 399545.32,
		"hash": "4d9cbbe73e0cc11971e8af2c7df92fe26b2524ab264413885f6d8ecf837deee7"
	},
	{
		"id": "9512e9f399b4",
		"ts": "2026-07-14T23:58:54.319Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3945182.61,
		"hash": "9512e9f399b4163900c3535e2609944aaf3e0fe2fe122a60aab6b450182a4575"
	},
	{
		"id": "6fe1d6c2bf31",
		"ts": "2026-07-14T23:58:54.541Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 423259.16,
		"hash": "6fe1d6c2bf3174253e2d77f97fd3494a9c01057a957e5882a2f27c8a4653a223"
	},
	{
		"id": "4b1b01906fe9",
		"ts": "2026-07-14T23:58:54.760Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1426243.31,
		"hash": "4b1b01906fe916890de36ae877d2f4045f36b4e0645cacac1ba1ade225b177b2"
	},
	{
		"id": "024b051a9e98",
		"ts": "2026-07-14T23:58:54.978Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 533294.7,
		"hash": "024b051a9e98b4a18e489755d3dcacaf1ddc21b311d06cc675190ad31ebb368a"
	},
	{
		"id": "6ebd3abe4a7f",
		"ts": "2026-07-14T23:58:55.197Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 72888.74,
		"hash": "6ebd3abe4a7f19609d90be3d2e16207ef7ef4695c6f3e8e93bbf622c0a7c93a9"
	},
	{
		"id": "ba9a91bf4c8e",
		"ts": "2026-07-14T23:58:55.419Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 131507,
		"hash": "ba9a91bf4c8ee011abff356239487c7e3acd47a792c1d807be901a852c066fd4"
	},
	{
		"id": "ff9bef19f975",
		"ts": "2026-07-14T23:58:55.638Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8915002.02,
		"hash": "ff9bef19f9758f0942a1546e25cc4c3dca32b3562780bf6cef96166288e3edae"
	},
	{
		"id": "1458feffc219",
		"ts": "2026-07-14T23:58:55.856Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 581336.29,
		"hash": "1458feffc219c72190e1711eec4455bf69cff38295be66616273d5b215548b5f"
	},
	{
		"id": "b26f124453ea",
		"ts": "2026-07-14T23:58:56.076Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1978690.52,
		"hash": "b26f124453eaf4dc3678980fdd4f530a58f67dd29711e92e6a104dc93a7de03d"
	},
	{
		"id": "2c26d0e80182",
		"ts": "2026-07-14T22:59:24.632Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106752138.58,
		"hash": "2c26d0e80182326ba04bd537af1f6a3cbcdc040af8d31198b46d176f48d9eb48"
	},
	{
		"id": "e0fa898d5def",
		"ts": "2026-07-14T22:59:25.138Z",
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
		"liquidityUsd": 14562050.37,
		"hash": "e0fa898d5defc44ed80012e30070e4127528c023fd8bd2036165d8a88b495efe"
	},
	{
		"id": "1f32d461705b",
		"ts": "2026-07-14T22:59:25.427Z",
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
		"liquidityUsd": 1221186.09,
		"hash": "1f32d461705b4276af34eb49467aa8330f055ca00d1452927feb20e062c14ad6"
	},
	{
		"id": "f64cb0dbd894",
		"ts": "2026-07-14T22:59:25.713Z",
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
		"liquidityUsd": 30179263.12,
		"hash": "f64cb0dbd89473f434f8bc3537e50416947fecd56525d7468ac9b6da539d1479"
	},
	{
		"id": "0752ef67ce49",
		"ts": "2026-07-14T22:59:26.001Z",
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
		"liquidityUsd": 4653578.75,
		"hash": "0752ef67ce4934626d07e3415f4d8b7640a04c5648e9771705f8914898593557"
	},
	{
		"id": "9e780383d948",
		"ts": "2026-07-14T22:59:26.283Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1008389.43,
		"hash": "9e780383d948ce6222940807a5b8c0ba67a31aaaecf63fe64bc452ae42d55f66"
	},
	{
		"id": "c3cc046deb3f",
		"ts": "2026-07-14T22:59:26.564Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30179263.12,
		"hash": "c3cc046deb3ff577a998f514a97738cfbc605642c4537b7fd95151958e6e2a87"
	},
	{
		"id": "70697d41fb92",
		"ts": "2026-07-14T22:59:26.848Z",
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
		"liquidityUsd": 2708228.28,
		"hash": "70697d41fb92c5c5369a0c169c1426cf67ae22971ee24065b212674b5a6252af"
	},
	{
		"id": "0ec91273ed15",
		"ts": "2026-07-14T22:59:27.131Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 401305.32,
		"hash": "0ec91273ed15b82b1c763bbf223bb35d95e99e0ade27b88f5e7ea8d26ea2fddd"
	},
	{
		"id": "09522630630f",
		"ts": "2026-07-14T22:59:27.413Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3964916.14,
		"hash": "09522630630f9872697afa73384a78615e0a9730b6eb2ba0f05b34e836d2930b"
	},
	{
		"id": "9eb887431d58",
		"ts": "2026-07-14T22:59:27.681Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 418608.53,
		"hash": "9eb887431d58438c34da454b59bcfbcfa33d92d02dc094dbd1b4cca3dd144b57"
	},
	{
		"id": "e9830e3ece94",
		"ts": "2026-07-14T22:59:27.948Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1397088.33,
		"hash": "e9830e3ece949b440bec4cd67cfd110b91ed038cdd035e9b5ed85da72f69fce6"
	},
	{
		"id": "54c2fc3f9a66",
		"ts": "2026-07-14T22:59:28.214Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 531460.63,
		"hash": "54c2fc3f9a667fe2c3e325a485774cb8752686711e8e52824f31ce9be38b8546"
	},
	{
		"id": "1dc81eeaac13",
		"ts": "2026-07-14T22:59:28.482Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8856831.32,
		"hash": "1dc81eeaac13407c5312f578a5ab82cd30c11f31563bcf82dd299a1dcd7b7f73"
	},
	{
		"id": "a27e320c77c9",
		"ts": "2026-07-14T22:59:28.748Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 107939.29,
		"hash": "a27e320c77c9bcda436c369b9ceea9303f839847609c832a42b4c40603465ec4"
	},
	{
		"id": "9f6b331b95fd",
		"ts": "2026-07-14T22:59:29.017Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 76421.7,
		"hash": "9f6b331b95fd12b58b09d819bf422cc57540be963ce86848885592b993a8a747"
	},
	{
		"id": "6290807f1a47",
		"ts": "2026-07-14T22:59:29.285Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 596290.08,
		"hash": "6290807f1a47dee5aee0e2186fc8a31ba43091dbb0aa43113006ef073a94dc37"
	},
	{
		"id": "30400d5f3caa",
		"ts": "2026-07-14T22:59:29.552Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1097287.62,
		"hash": "30400d5f3caa8fc38bca3153ddb01b20970c00d31acdf7b14dcf80faa76e1789"
	},
	{
		"id": "d32aaf01a66e",
		"ts": "2026-07-14T21:58:12.848Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106587677.73,
		"hash": "d32aaf01a66eb248e6d10cfe5ba04c6f38938199f396a6878e0337ea54a36f03"
	},
	{
		"id": "1c6a3f02de91",
		"ts": "2026-07-14T21:58:13.294Z",
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
		"liquidityUsd": 16550253.49,
		"hash": "1c6a3f02de917f78e73b92948147ddb5a647c4dc332d5c49fc8b8719badc95b9"
	},
	{
		"id": "224373403d71",
		"ts": "2026-07-14T21:58:13.537Z",
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
		"liquidityUsd": 1215591.17,
		"hash": "224373403d718bf0aa80f0cdeecc66ba7eea41a213e42b42d6c58239f7ba9430"
	},
	{
		"id": "acd334b739ec",
		"ts": "2026-07-14T21:58:13.779Z",
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
		"liquidityUsd": 30074775.94,
		"hash": "acd334b739ecbaf34d4fd2eabb72f230647434ba180ebddbc856bbd216d9b75b"
	},
	{
		"id": "4d862ad2a953",
		"ts": "2026-07-14T21:58:14.030Z",
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
		"liquidityUsd": 4611022.63,
		"hash": "4d862ad2a953553813b041542363f40ca67bd4a68c291433178410ddf715393d"
	},
	{
		"id": "af6510f1bcaf",
		"ts": "2026-07-14T21:58:14.600Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1008387.51,
		"hash": "af6510f1bcaf8340c8955f87cb38fd3887ec7bb1689ac71a592679a0796c80ea"
	},
	{
		"id": "dc210875002e",
		"ts": "2026-07-14T21:58:14.837Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30074775.07,
		"hash": "dc210875002e05b226a3614def4eed2828a9af5ad695fbee4b4088b3efd9634f"
	},
	{
		"id": "0999123c2936",
		"ts": "2026-07-14T21:58:15.611Z",
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
		"liquidityUsd": 2685007.46,
		"hash": "0999123c29360bc4dbb8fb6b4a236375fdb4f4ed5b0d1d604bdb70b1b086fe82"
	},
	{
		"id": "1aa787b74680",
		"ts": "2026-07-14T21:58:15.862Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 405802.16,
		"hash": "1aa787b74680a92e38796eb5d40b9b2ec18f92409946093a321efa9d4c56b8db"
	},
	{
		"id": "935e116f2f97",
		"ts": "2026-07-14T21:58:16.109Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3785859.01,
		"hash": "935e116f2f97b7ac4fa22c2e686471aaaec60acfbdfee912f89f6c293bba92dd"
	},
	{
		"id": "9aba5c784556",
		"ts": "2026-07-14T21:58:16.345Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 418766.03,
		"hash": "9aba5c7845564cb608bc88e459228933c8331ad149317e69b3a117065bb2c799"
	},
	{
		"id": "9ef1d3e798f3",
		"ts": "2026-07-14T21:58:16.578Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 528812.36,
		"hash": "9ef1d3e798f36d3a2c3cc462717b993a3f98807818a4fdac5660d4926ba272cb"
	},
	{
		"id": "8e7ac0bdcedd",
		"ts": "2026-07-14T21:58:16.804Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1350413.89,
		"hash": "8e7ac0bdcedd688a72f9f7318299b8bb8338bd82635eca30bf5b748c75c78494"
	},
	{
		"id": "e06613940afa",
		"ts": "2026-07-14T21:58:17.025Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8833687.98,
		"hash": "e06613940afa400d692bcebb07e991c5889ea8c25da1db95557c1112f29cd7d1"
	},
	{
		"id": "98460a37e351",
		"ts": "2026-07-14T21:58:17.258Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77437.04,
		"hash": "98460a37e351c2ad9d28bba26b91a85c08abb7e4deeec54c01b8f97f645a92fb"
	},
	{
		"id": "ec44d682b17f",
		"ts": "2026-07-14T21:58:17.481Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 576545.95,
		"hash": "ec44d682b17f8c2c4b258d2d25e1299aeb2271075f00f1eea70dc8bf5bb7582a"
	},
	{
		"id": "4266a4c95e0f",
		"ts": "2026-07-14T21:58:17.708Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 132647.35,
		"hash": "4266a4c95e0f1ca4a9483b9478c8e8ff7a0f6c8a6db5583af26f41b5d29f3930"
	},
	{
		"id": "c33c74f37b22",
		"ts": "2026-07-14T21:58:17.933Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1098332.31,
		"hash": "c33c74f37b224d952be0718d607e89511418fa5f2f1b5e2ee06677459b603fee"
	}
]
