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
	"updatedAt": "2026-08-07T08:54:49.472Z",
	"tokensScored": 7749,
	"verdictsIssued": 7749,
	"safe": 6743,
	"risky": 594,
	"likelyRug": 412,
	"ticks": 471
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "dc22656e97e3",
		"ts": "2026-08-07T08:54:45.587Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115118753.6,
		"hash": "dc22656e97e3058fafc84ee2b5bdb18aa95c3d1bc93e396e560c6e271a2a1b7e"
	},
	{
		"id": "f399a318332a",
		"ts": "2026-08-07T08:54:45.851Z",
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
		"liquidityUsd": 17988663.88,
		"hash": "f399a318332a4f153f04bcc652337c252a23ea9804a5f7d5ebfeba012f9dfc12"
	},
	{
		"id": "06247458dd29",
		"ts": "2026-08-07T08:54:46.120Z",
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
		"liquidityUsd": 1052180.42,
		"hash": "06247458dd297d7311daeaad010da95e663103535defadc0237c5baffcdffe40"
	},
	{
		"id": "897f73352f27",
		"ts": "2026-08-07T08:54:46.387Z",
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
		"liquidityUsd": 26690012.92,
		"hash": "897f73352f27a02b5e725e05debc573868f21f48158743f73588e49e6890f1f8"
	},
	{
		"id": "4a41150e726d",
		"ts": "2026-08-07T08:54:46.648Z",
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
		"liquidityUsd": 4434715.12,
		"hash": "4a41150e726d6a2491ea544d1cfa53f1ef5f7c4ec48a30e68a90c42b1deba450"
	},
	{
		"id": "6def0282bc35",
		"ts": "2026-08-07T08:54:46.911Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922118.71,
		"hash": "6def0282bc353317a5d79f2ecae00f5bed84af4f57f65841a8ff2a4d884b0631"
	},
	{
		"id": "6a245428ddfc",
		"ts": "2026-08-07T08:54:47.178Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26690012.92,
		"hash": "6a245428ddfc1e387fe5cf37cf2ecd70d2fc684573429109d7595d496b4278e2"
	},
	{
		"id": "07fd295df463",
		"ts": "2026-08-07T08:54:47.452Z",
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
		"liquidityUsd": 4546867.09,
		"hash": "07fd295df463ae4ff167efcaf14c6cce088937b65162b2dee6283995156a2eeb"
	},
	{
		"id": "87f2b42e4cf5",
		"ts": "2026-08-07T08:54:47.717Z",
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
		"liquidityUsd": 981201.54,
		"hash": "87f2b42e4cf5130631866eb44d79df355a9535983ce0f5d23e934a1eef639f91"
	},
	{
		"id": "519b55b193c8",
		"ts": "2026-08-07T08:54:47.984Z",
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
		"liquidityUsd": 9435876.94,
		"hash": "519b55b193c8282c4f064e5fa3d08f7ec802e1e2654b3e48d2756a4487da7d8a"
	},
	{
		"id": "deb5262271ac",
		"ts": "2026-08-07T08:54:48.226Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 623689.65,
		"hash": "deb5262271ac02bcaecd857d378ec04857c23028c9cea6ef79919ad12150ef07"
	},
	{
		"id": "c1036e04a41c",
		"ts": "2026-08-07T08:54:48.474Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 297849.91,
		"hash": "c1036e04a41c346572825b6556dcb177f0d08ff1d2a6b405ff5bf41deb2918f4"
	},
	{
		"id": "cfca30efaecf",
		"ts": "2026-08-07T08:54:48.726Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4123963.69,
		"hash": "cfca30efaecf4082ca6c4ef3af8740c3b35d6a7f04997910ee3852145993d563"
	},
	{
		"id": "b084e009a9fd",
		"ts": "2026-08-07T08:54:48.970Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1996501.68,
		"hash": "b084e009a9fd6eddd46d56629c898ca8e0654180eecd82b867117ab4c9bc7ad3"
	},
	{
		"id": "3a50244422ed",
		"ts": "2026-08-07T08:54:49.219Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1900797.13,
		"hash": "3a50244422eda136361dc955a9352349ec8dd3c6ee2060cdec83570e58bf6af5"
	},
	{
		"id": "4d8c6f490dde",
		"ts": "2026-08-07T08:54:49.472Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4656305.91,
		"hash": "4d8c6f490dde36c6e8afcc7d6dc9689677b8d0d2664d1aa109791e1598c15cd0"
	},
	{
		"id": "7c35e20501ec",
		"ts": "2026-08-07T07:08:57.741Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114844981.56,
		"hash": "7c35e20501ecef827b8547c190b9f6f13446b04bae13e9355ff2f1e2f8fd130a"
	},
	{
		"id": "6045209b8708",
		"ts": "2026-08-07T07:08:58.220Z",
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
		"liquidityUsd": 18634155.77,
		"hash": "6045209b87087d1fdee73450f06c61a5194b7177e498677df4067a9bdc80253a"
	},
	{
		"id": "c08b8b4c10fe",
		"ts": "2026-08-07T07:08:58.412Z",
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
		"liquidityUsd": 1050534.5,
		"hash": "c08b8b4c10fe1dfa2491a27ca8c3012f9ff818352a218fff39b2d504eb632ee9"
	},
	{
		"id": "8ec767ea25d2",
		"ts": "2026-08-07T07:08:58.759Z",
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
		"liquidityUsd": 26636564.35,
		"hash": "8ec767ea25d274bbb3d2197ce21c3edf0cfcd86a4c58fce365276f2deafd03a0"
	},
	{
		"id": "249088b76a73",
		"ts": "2026-08-07T07:08:58.965Z",
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
		"liquidityUsd": 4426040.95,
		"hash": "249088b76a739fe190911f815491381077d471d45f6289976720e9f7bf1e8832"
	},
	{
		"id": "8481f99c0ee2",
		"ts": "2026-08-07T07:08:59.169Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922118.71,
		"hash": "8481f99c0ee2f4faa336a7e5bb419652daa6119d241a20b09a1a5c2185b6e091"
	},
	{
		"id": "3423c1b29b6f",
		"ts": "2026-08-07T07:08:59.368Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26636564.35,
		"hash": "3423c1b29b6ff345b52706ba6231127f5dde8fbcd5ddea3a27037738a5f27a17"
	},
	{
		"id": "5c0223b3c231",
		"ts": "2026-08-07T07:08:59.701Z",
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
		"liquidityUsd": 4531183.15,
		"hash": "5c0223b3c231048a89eb428b11e5a1faaff2ecb9a337cc7c01dd9e1422d1b06a"
	},
	{
		"id": "85fd5c2ea997",
		"ts": "2026-08-07T07:08:59.890Z",
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
		"liquidityUsd": 974136.67,
		"hash": "85fd5c2ea997962deca196308eb187d57d60b7d3f5ffcb7c1dbf94c2c6bfec8a"
	},
	{
		"id": "a535a053f64c",
		"ts": "2026-08-07T07:09:00.241Z",
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
		"liquidityUsd": 9420584.02,
		"hash": "a535a053f64c965fdb8f5a75db3fcc72f96b2dba45ad3fee6e3dcf7aefca49c5"
	},
	{
		"id": "aad1765d9d9c",
		"ts": "2026-08-07T07:09:00.432Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 620260.01,
		"hash": "aad1765d9d9c615e18d6595437e00baf3b818cc5d158846f15c0d62eb25aa11d"
	},
	{
		"id": "2c0698c0368c",
		"ts": "2026-08-07T07:09:00.615Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 297772.61,
		"hash": "2c0698c0368cbc1bca15200f2aa8f0654750d370b04743ec32f0df055a8ecd4a"
	},
	{
		"id": "16fd387e6470",
		"ts": "2026-08-07T07:09:00.890Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4120224.64,
		"hash": "16fd387e64709576a02b5ed79bc3cb8a6d3e8588d5548315be85db01b79d7a72"
	},
	{
		"id": "93f75f3ce0d6",
		"ts": "2026-08-07T07:09:01.141Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1984363.95,
		"hash": "93f75f3ce0d6f3f0c54f3b63d7c4047bbda74a9bc49f737f7f86d17dd9eacb58"
	},
	{
		"id": "06d0e7d3e9d0",
		"ts": "2026-08-07T07:09:01.336Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1899251.24,
		"hash": "06d0e7d3e9d05ddb4078ba9f72e4724c481ee5993544f0064b5b22049c8a4a1e"
	},
	{
		"id": "e51ebbc90eab",
		"ts": "2026-08-07T07:09:01.529Z",
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
		"liquidityUsd": 4648281.72,
		"hash": "e51ebbc90eabdb0b1b2c3cca1f217f0c80924f59f313fe92c0e5c5dfbd00fc7e"
	},
	{
		"id": "2fe866ecde78",
		"ts": "2026-08-07T05:37:23.649Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114756526.13,
		"hash": "2fe866ecde78579cb7d37468c599d3df9fd8f98ae4936a59a2dd53576f2e1da0"
	},
	{
		"id": "e34c5c6772f2",
		"ts": "2026-08-07T05:37:24.196Z",
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
		"liquidityUsd": 17536156.98,
		"hash": "e34c5c6772f298c7eab6e980308b431028f4ef01097312d6d666ab4a62414565"
	},
	{
		"id": "a32491f6921a",
		"ts": "2026-08-07T05:37:24.544Z",
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
		"liquidityUsd": 1047175.26,
		"hash": "a32491f6921a8fe250f724b16a342fdd9b4cf2b37c558c66408e0a068e82be40"
	},
	{
		"id": "1e2e2bde4ef6",
		"ts": "2026-08-07T05:37:24.900Z",
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
		"liquidityUsd": 26459016.15,
		"hash": "1e2e2bde4ef63f3a2e9def4034576a12ca013f942243918d21cac90a035e6408"
	},
	{
		"id": "5a31634bae19",
		"ts": "2026-08-07T05:37:25.246Z",
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
		"liquidityUsd": 4432577.85,
		"hash": "5a31634bae19cf37d9b8d2b73215b9c29f4353771eade8a1d4041cace98ce446"
	},
	{
		"id": "fc8e20861cab",
		"ts": "2026-08-07T05:37:25.596Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 915820.59,
		"hash": "fc8e20861cabe3320dd8ac94ed247df4ea264ea5dd9cdcad5ce7a8d1149f1e82"
	},
	{
		"id": "6beeb1c4642c",
		"ts": "2026-08-07T05:37:25.940Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26459016.15,
		"hash": "6beeb1c4642c4016acca35e92eadc4bce0d5785d0c19d96e7c7b9be4358cd7e3"
	},
	{
		"id": "d320fc91ef99",
		"ts": "2026-08-07T05:37:26.283Z",
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
		"liquidityUsd": 4512028.25,
		"hash": "d320fc91ef9900ce4cb3f9be04d94be3488120e8ef5ca6f1b3eabc901e8fc088"
	},
	{
		"id": "4c1c1a1258a2",
		"ts": "2026-08-07T05:37:26.989Z",
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
		"liquidityUsd": 979555.68,
		"hash": "4c1c1a1258a22376b248d9d7a2d6566f2f94391313ca202054e9cc3baaef8b52"
	},
	{
		"id": "50a6ed6f748f",
		"ts": "2026-08-07T05:37:27.336Z",
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
		"liquidityUsd": 9338947.64,
		"hash": "50a6ed6f748f34d8056c96cef569534800dd2920ef87b9e38595877f292ae986"
	},
	{
		"id": "55c2e995a473",
		"ts": "2026-08-07T05:37:27.665Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 618196.32,
		"hash": "55c2e995a473dc99af8e508103da5997609bc4b26e67cb85ecc079596f9172ea"
	},
	{
		"id": "41bf0c4da01c",
		"ts": "2026-08-07T05:37:27.995Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4099803.18,
		"hash": "41bf0c4da01cc123464c0beee56eaab8a34cd51ff01bd8ff5de24489e0fed60c"
	},
	{
		"id": "3b7d36e657f7",
		"ts": "2026-08-07T05:37:28.323Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1984363.95,
		"hash": "3b7d36e657f7ee8ab5b4ea54510ba379c06d1fe1681432b47d1bc8e27ad35482"
	},
	{
		"id": "ba5cd29d7c4d",
		"ts": "2026-08-07T05:37:28.652Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 283994.89,
		"hash": "ba5cd29d7c4d3645d3b51d4c779ca44195fe1cd654b83df66406ebf116f29730"
	},
	{
		"id": "091f53343b50",
		"ts": "2026-08-07T05:37:28.980Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3221632.88,
		"hash": "091f53343b5094d32d644dfaeee83cd010299be7c749d743f8d921f545b7edda"
	},
	{
		"id": "ff7c9aa3cdf1",
		"ts": "2026-08-07T05:37:29.311Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4635043.48,
		"hash": "ff7c9aa3cdf16cc05363d1ce2c5116d941d0db9cf850f5f9910acbfd21d99989"
	},
	{
		"id": "ace96222df8c",
		"ts": "2026-08-07T05:37:29.640Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1902570.46,
		"hash": "ace96222df8c732fd29b0c9948731d8ae509a5f1945cca9d15faaff9af8dc74b"
	},
	{
		"id": "45015f750458",
		"ts": "2026-08-07T03:47:16.795Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114878178.84,
		"hash": "45015f750458455968eba84bc59d8e22b82b700fd27bc800ece4aee33c5391c3"
	},
	{
		"id": "11d1feda20a1",
		"ts": "2026-08-07T03:47:17.169Z",
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
		"liquidityUsd": 18336642.94,
		"hash": "11d1feda20a152f341c73ece26d277181fd018c65ec4f32ff28d019940ab6b6a"
	},
	{
		"id": "d5ee2aebcd0d",
		"ts": "2026-08-07T03:47:17.356Z",
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
		"liquidityUsd": 1050999.76,
		"hash": "d5ee2aebcd0d250e1363c057d4caf5d7f780b569f4c5f1e803a0522ca0ce502a"
	},
	{
		"id": "af414a7d0c0f",
		"ts": "2026-08-07T03:47:17.559Z",
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
		"liquidityUsd": 26541769.91,
		"hash": "af414a7d0c0f7e40d8f06fbc3d7a257814e7957ba95cd7be188970ec9db5254f"
	},
	{
		"id": "9956af51999f",
		"ts": "2026-08-07T03:47:17.750Z",
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
		"liquidityUsd": 4436225.94,
		"hash": "9956af51999fe494ba21ea07efba51071ab1754a90e2f7227c15b86461d5e6d8"
	},
	{
		"id": "8ce5892a680f",
		"ts": "2026-08-07T03:47:17.953Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 919492.59,
		"hash": "8ce5892a680f700f28aa6f80ac61dd01fdb682bf559aa09cb9b80e7205d128c6"
	},
	{
		"id": "3a2ea2191294",
		"ts": "2026-08-07T03:47:18.136Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26541769.91,
		"hash": "3a2ea2191294ed9ffc4adf376c98dd20f1a5b1242d093752e57dd9a7e81208c1"
	},
	{
		"id": "fb8b409c38a5",
		"ts": "2026-08-07T03:47:18.321Z",
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
		"liquidityUsd": 4519922.02,
		"hash": "fb8b409c38a54fe9a182a82c1f6e245003ae982cf5243a8c6116b22eb960c394"
	},
	{
		"id": "1153b5131481",
		"ts": "2026-08-07T03:47:18.534Z",
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
		"liquidityUsd": 979193.86,
		"hash": "1153b51314817cdaee00aaa834613bc8f225f1aa717b05112bd61ec37b29aa13"
	},
	{
		"id": "71d840389c9c",
		"ts": "2026-08-07T03:47:18.712Z",
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
		"liquidityUsd": 9356234.4,
		"hash": "71d840389c9cda886be01c9f350b6c66fca5aea6562e1357c1295623862f9440"
	},
	{
		"id": "c798a98b3f37",
		"ts": "2026-08-07T03:47:18.905Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 618536.16,
		"hash": "c798a98b3f37046b24edcfd406aa8aec19783b1f4dc32087c901a90f2d0b302d"
	},
	{
		"id": "32733422cd4c",
		"ts": "2026-08-07T03:47:19.078Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4112114.99,
		"hash": "32733422cd4ce86c162210fdcb369387787ca7031e82a48a7344acfb495d9152"
	},
	{
		"id": "62045d93ddb5",
		"ts": "2026-08-07T03:47:19.272Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1984363.95,
		"hash": "62045d93ddb542947d9e28e7d7a4adf38fa419394d5aa57448907682f01c74d6"
	},
	{
		"id": "8f5e3b74e736",
		"ts": "2026-08-07T03:47:19.567Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4641478.89,
		"hash": "8f5e3b74e736e49bd70569b5ee999194f1a51b87af4e076ec20c52b1291ecf7f"
	},
	{
		"id": "1cae6dd11e95",
		"ts": "2026-08-07T03:47:19.752Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3255961.67,
		"hash": "1cae6dd11e958a3972892b43172694606695d47f03efcc9f62c879cd1a599303"
	},
	{
		"id": "5101feeb4595",
		"ts": "2026-08-07T03:47:19.922Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1727213.65,
		"hash": "5101feeb45953cb27fd2e347b6b2f8b197d92e44567bd2013e9a4c89102374b0"
	},
	{
		"id": "6fc79a5b319b",
		"ts": "2026-08-07T03:47:20.125Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1914952.76,
		"hash": "6fc79a5b319b0296fea3cadf2fb137b5a1ae7ff2430a2fa7fb52057c63a02fa5"
	},
	{
		"id": "2df145eac063",
		"ts": "2026-08-07T00:39:10.672Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114824113.09,
		"hash": "2df145eac063da3e03b4733b8909e2bde6808aa598fd0ce2d646f332b4f19709"
	},
	{
		"id": "dfc319c25838",
		"ts": "2026-08-07T00:39:11.102Z",
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
		"liquidityUsd": 18300955.94,
		"hash": "dfc319c258382897007f0c5c158cb99383e60782577d86b7015d78e141e55692"
	},
	{
		"id": "9b9fd1d3acf4",
		"ts": "2026-08-07T00:39:11.540Z",
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
		"liquidityUsd": 1046597.4,
		"hash": "9b9fd1d3acf44bbabb887cc66ae8b727f4343a6219e42f047399c3b7cba10404"
	},
	{
		"id": "f7960cf0dd7c",
		"ts": "2026-08-07T00:39:11.772Z",
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
		"liquidityUsd": 26608765.85,
		"hash": "f7960cf0dd7ccee726f9317d624878117f342838a5ff4d6bd18fc78dd0502b3d"
	},
	{
		"id": "e378a646e385",
		"ts": "2026-08-07T00:39:12.243Z",
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
		"liquidityUsd": 4463622.14,
		"hash": "e378a646e38583a3bc18b0b75492b932be895e94fe61f9d47911bbba8aa5411f"
	},
	{
		"id": "9197f0a3859c",
		"ts": "2026-08-07T00:39:12.472Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 920078.99,
		"hash": "9197f0a3859c8f60fb97c2db7358dc1e34cd7fd0cd54feb928a6fe25d742de2e"
	},
	{
		"id": "1964ceb9af37",
		"ts": "2026-08-07T00:39:12.705Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26608765.85,
		"hash": "1964ceb9af37862075c516252630bc1bc3bf0b0815ba519e9cdb3dc00a06b432"
	},
	{
		"id": "eca6703ea9ce",
		"ts": "2026-08-07T00:39:12.948Z",
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
		"liquidityUsd": 2133488.39,
		"hash": "eca6703ea9ce5e60e58a256edf30d6c238632698c07f25a0f56bd005a65b784e"
	},
	{
		"id": "9e0b0840a0ae",
		"ts": "2026-08-07T00:39:13.180Z",
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
		"liquidityUsd": 1009037.82,
		"hash": "9e0b0840a0ae27020b9cc715e4773ca7bebfe147d585bfadec6cb0ddde6dda31"
	},
	{
		"id": "3ffa2fcf3352",
		"ts": "2026-08-07T00:39:13.705Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4117043.1,
		"hash": "3ffa2fcf335264683715f5f3543af7724d2a0a1545f36d53d6872918d90a0d6c"
	},
	{
		"id": "e816588f393f",
		"ts": "2026-08-07T00:39:13.924Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9340174.44,
		"hash": "e816588f393f7744d73d570b519af5f4fd8de054e156e845f375086a412768f4"
	},
	{
		"id": "224985fc8d8f",
		"ts": "2026-08-07T00:39:14.362Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 611167.12,
		"hash": "224985fc8d8fe8be419ee51ca94e0e3c2ae3cc1f8b28a8971cfaad126ccf366d"
	},
	{
		"id": "bfebf7df6a50",
		"ts": "2026-08-07T00:39:14.581Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 316528.89,
		"hash": "bfebf7df6a509170c5c37a018253ce895737c7e3b14b359f1dd53c2647879ec3"
	},
	{
		"id": "76d9cd502c0d",
		"ts": "2026-08-07T00:39:14.801Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3328282.4,
		"hash": "76d9cd502c0d42a33103d95c00339cbae1948f18406406260e9e455f00b0fd0c"
	},
	{
		"id": "2962f2a86488",
		"ts": "2026-08-07T00:39:15.017Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2002047.67,
		"hash": "2962f2a86488ff92a71e37dd081b504b5c44356b1dbf26b160c2bf755978a3b9"
	},
	{
		"id": "dcfcec253910",
		"ts": "2026-08-07T00:39:15.234Z",
		"symbol": "SOSO",
		"token": "0x624e2e7fDc8903165F64891672267AB0FCB98831",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 304979.42,
		"hash": "dcfcec253910eb68a81ed295c42b6e1d6646faa619ff6f3ab90d31bd8c10d14b"
	},
	{
		"id": "3811cd3dbf61",
		"ts": "2026-08-07T00:39:15.447Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1920434.78,
		"hash": "3811cd3dbf61cadb987c1f20988704314c7a0efbbbc56ede988a5a8199478bf8"
	},
	{
		"id": "d1ff8750b785",
		"ts": "2026-08-06T13:57:34.686Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114571086.44,
		"hash": "d1ff8750b7857774adf88219ba7fcc3b2201e51108f6a90ce096f3bb65dadd8a"
	},
	{
		"id": "30ea84dab642",
		"ts": "2026-08-06T13:57:34.959Z",
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
		"liquidityUsd": 13964340.79,
		"hash": "30ea84dab6428dfd895c095c9300b3bfeada174e920b9c89d8e28d7e5a35f46d"
	},
	{
		"id": "15e0bb52aca3",
		"ts": "2026-08-06T13:57:35.301Z",
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
		"liquidityUsd": 1052143.38,
		"hash": "15e0bb52aca35b8c6bf399399d1fd6697f1156c741a1a13b80d6726b0bbb7a15"
	},
	{
		"id": "b53d46f01e39",
		"ts": "2026-08-06T13:57:35.658Z",
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
		"liquidityUsd": 25862999.12,
		"hash": "b53d46f01e39ffba6b952c3f5e6fba692e96df4be7dd041df195e5b24804ac79"
	},
	{
		"id": "70660194588b",
		"ts": "2026-08-06T13:57:36.161Z",
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
		"liquidityUsd": 4425651.1,
		"hash": "70660194588b4b81206f888ed03e60ac72680f6ab15dc5a242160d38a3f31825"
	},
	{
		"id": "0f746570f499",
		"ts": "2026-08-06T13:57:36.428Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927918.18,
		"hash": "0f746570f499719e5e332b3ffa20ebb59d07f867f99480c6b2f4b6934d24657a"
	},
	{
		"id": "43cf89c11f88",
		"ts": "2026-08-06T13:57:36.689Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25862999.12,
		"hash": "43cf89c11f889a9de64400b491b798d7c5c82c84cae6b11249669fb0f275fc52"
	},
	{
		"id": "42e5c1b1b677",
		"ts": "2026-08-06T13:57:36.964Z",
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
		"liquidityUsd": 4225022.76,
		"hash": "42e5c1b1b677f83ccd9e3eb8c1e03dd4796ea97bed67e34bb295e2f7d319be5d"
	},
	{
		"id": "7c4b75656527",
		"ts": "2026-08-06T13:57:37.232Z",
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
		"liquidityUsd": 1019581.83,
		"hash": "7c4b75656527b8f0cac45e9f1e879feea3c379d8af4efb050699f1a2ab55be10"
	},
	{
		"id": "14db88f3e46a",
		"ts": "2026-08-06T13:57:37.498Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4107630.16,
		"hash": "14db88f3e46ae3adc7590574519502981b5a5d813f5ef8e4dd299860f1ebd72f"
	},
	{
		"id": "4b11690e53f3",
		"ts": "2026-08-06T13:57:37.747Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 656482.51,
		"hash": "4b11690e53f36bc94003cd1efaf5c614e66b25cd755dc5c5c3ae53db7884eafe"
	},
	{
		"id": "af4e7fa91c4d",
		"ts": "2026-08-06T13:57:37.995Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279728.77,
		"hash": "af4e7fa91c4d5b6d7cb3273fdf64339e59f86e7fd269782917da9cb60e22c682"
	},
	{
		"id": "d1fed2bbf338",
		"ts": "2026-08-06T13:57:38.251Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 615701.22,
		"hash": "d1fed2bbf338c6b8cf56c55aac4acea6748c00d3654d904a441f25748afcd729"
	},
	{
		"id": "a4bbb4bab5e2",
		"ts": "2026-08-06T13:57:38.507Z",
		"symbol": "SOSO",
		"token": "0x624e2e7fDc8903165F64891672267AB0FCB98831",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 307063.57,
		"hash": "a4bbb4bab5e2fd1d95b305354056a7c03159ca91c37868bffcc21dd902069f62"
	},
	{
		"id": "9439e05ae168",
		"ts": "2026-08-06T13:57:38.755Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4499556.76,
		"hash": "9439e05ae168fb66c4512cb05b5c7527416fe7062359c26ca83738eee58d1cd0"
	},
	{
		"id": "a9d47f3fef4a",
		"ts": "2026-08-06T13:57:39.003Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1961476.39,
		"hash": "a9d47f3fef4a8271b04a270c1c399c1a6ba2dc6208d19304fb96fe6d75f28a9e"
	},
	{
		"id": "993bfa1dfefa",
		"ts": "2026-08-06T13:57:39.253Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3319072.17,
		"hash": "993bfa1dfefaf07f1555b3e31de31a4bf8648baef969caf15d1b1e612627afb6"
	},
	{
		"id": "7719d6bde665",
		"ts": "2026-08-06T13:57:39.508Z",
		"symbol": "msETH",
		"token": "0x7Ba6F01772924a82D9626c126347A28299E98c98",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13870133.01,
		"hash": "7719d6bde6652d23c58e620875d64e55d7fec58e7eacfa034def9c899dd5b4d4"
	},
	{
		"id": "e4468954e3ff",
		"ts": "2026-08-06T11:19:12.376Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114512576.24,
		"hash": "e4468954e3ffb8fa38bfe2bb4e481978ffbb2c7ea7e5f1c3fd3b8d14ddbfd5bd"
	},
	{
		"id": "451333bbcf7e",
		"ts": "2026-08-06T11:19:12.686Z",
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
		"liquidityUsd": 17458823.72,
		"hash": "451333bbcf7e1e1b5a05f37a41462a09bee9ebae72ff80a6cfa0a0f3ea12ac76"
	},
	{
		"id": "346ebeb80385",
		"ts": "2026-08-06T11:19:12.954Z",
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
		"liquidityUsd": 1030186.95,
		"hash": "346ebeb8038543c57e46014bc372a88944d1e8da9140be5e92f5543ba84374ff"
	},
	{
		"id": "f69f45a06522",
		"ts": "2026-08-06T11:19:13.226Z",
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
		"liquidityUsd": 25796460.06,
		"hash": "f69f45a0652271c08e2f1bf3672ca1af3e7277565691330642cf8174f1cea150"
	},
	{
		"id": "6c65109af9a3",
		"ts": "2026-08-06T11:19:13.494Z",
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
		"liquidityUsd": 4446287.22,
		"hash": "6c65109af9a3f7acae8ddffe3981caededbd7e90a8362d9561b5f99f59e21f84"
	},
	{
		"id": "a0c481b8736c",
		"ts": "2026-08-06T11:19:13.767Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 930386.95,
		"hash": "a0c481b8736c82fb66a1284d2c0248a0e849503bc49d70eada00f8b8da40572e"
	},
	{
		"id": "83492ebda314",
		"ts": "2026-08-06T11:19:14.031Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25796460.06,
		"hash": "83492ebda3141c0c6860c411be43a4452bdf0f707c3b810235518ed27f8ee15c"
	},
	{
		"id": "2735073859a7",
		"ts": "2026-08-06T11:19:14.302Z",
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
		"liquidityUsd": 3883196.5,
		"hash": "2735073859a798d286db0f7b400b1a011513ef366e5de9a89597a2e54194b53c"
	},
	{
		"id": "265fb7711e02",
		"ts": "2026-08-06T11:19:14.573Z",
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
		"liquidityUsd": 1024902.82,
		"hash": "265fb7711e02e4138f716655b5eab7ce2e681e6b8e966dfef7f175c99246e5a0"
	},
	{
		"id": "e800b45766fb",
		"ts": "2026-08-06T11:19:14.842Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4118751.11,
		"hash": "e800b45766fbbf1a2497689a1aeea01a6b598d2d774831cb3ebda55146d6f612"
	},
	{
		"id": "dcd8ab48990c",
		"ts": "2026-08-06T11:19:15.092Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 677309.18,
		"hash": "dcd8ab48990c767cf76a0d342ea1f7c1dad54bbf4b36f257d61a7db7b8591fbf"
	},
	{
		"id": "0d62d942114e",
		"ts": "2026-08-06T11:19:15.340Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 617122.61,
		"hash": "0d62d942114e8a6ed939dfb69a2a1873672afa1d3bb6520ab4f19c9d1f97a195"
	},
	{
		"id": "9600e1d65df5",
		"ts": "2026-08-06T11:19:15.594Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 276370.4,
		"hash": "9600e1d65df5f1c56d63e6d57a711ae1c61380391b3e9074e740c7bc08cdd26f"
	},
	{
		"id": "e769b2dbb900",
		"ts": "2026-08-06T11:19:15.853Z",
		"symbol": "SOSO",
		"token": "0x624e2e7fDc8903165F64891672267AB0FCB98831",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 307957.03,
		"hash": "e769b2dbb90061bbe5dafe74dd32f72ed8bf28800b8c723a5151efefb3807b03"
	},
	{
		"id": "502aa38c4ad0",
		"ts": "2026-08-06T11:19:16.103Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1956641.25,
		"hash": "502aa38c4ad0025714a2933147e12827337e93e4af287d4bd6615fb4c7f5bac2"
	},
	{
		"id": "cb20db49ced2",
		"ts": "2026-08-06T11:19:16.351Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3326380.82,
		"hash": "cb20db49ced2672cac1acfaea46601d08c4145599f8a04aa8f7ae898f1857279"
	},
	{
		"id": "dece2034e237",
		"ts": "2026-08-06T11:19:16.604Z",
		"symbol": "msETH",
		"token": "0x7Ba6F01772924a82D9626c126347A28299E98c98",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13837309.06,
		"hash": "dece2034e2375c08464166c80dac47e9145b31a1908c9abd2217832da4e5c4fc"
	},
	{
		"id": "9daf5011cb9e",
		"ts": "2026-08-06T11:19:16.857Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4520124.89,
		"hash": "9daf5011cb9e578c1df4cceedff2193a7707c97dff572543a766a106d6139096"
	},
	{
		"id": "6bd2828d6445",
		"ts": "2026-08-06T08:29:03.145Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114719540.62,
		"hash": "6bd2828d6445d868e7d9fdde12fa75cc47de771303b70a17b01f4c54fcb8fc90"
	},
	{
		"id": "5df36ea2ddf7",
		"ts": "2026-08-06T08:29:03.493Z",
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
		"liquidityUsd": 16848462.13,
		"hash": "5df36ea2ddf7617146d9f13d5d6acdffb619da45b2bc73a90baec29168c84988"
	},
	{
		"id": "4f82efd1e915",
		"ts": "2026-08-06T08:29:03.845Z",
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
		"liquidityUsd": 1041774.77,
		"hash": "4f82efd1e9151acfe857ad50c1b93a06ebeae9095ee133ebd83784b3990b6c4a"
	},
	{
		"id": "86a3d64c5328",
		"ts": "2026-08-06T08:29:04.072Z",
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
		"liquidityUsd": 25799426.54,
		"hash": "86a3d64c532863b76893312bcd04a69cd8dcc43badccb13dd673b404b931d93a"
	},
	{
		"id": "b6e0d896d506",
		"ts": "2026-08-06T08:29:04.284Z",
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
		"liquidityUsd": 4478274.59,
		"hash": "b6e0d896d506414fb159c0183287b85908d5c022c8ceaf516c344601336d6f83"
	},
	{
		"id": "8e2e5023cc5d",
		"ts": "2026-08-06T08:29:04.491Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 927494.09,
		"hash": "8e2e5023cc5d8e9304f69ec8f32f48d50da5fd6f9f19598dd053851db91a4e9e"
	},
	{
		"id": "38ce44477ca0",
		"ts": "2026-08-06T08:29:04.698Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25799426.34,
		"hash": "38ce44477ca0f34027a8972820cc621bb4ffe71132aaddeac9f44a30ab5bd282"
	},
	{
		"id": "3e61169a0f81",
		"ts": "2026-08-06T08:29:04.914Z",
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
		"liquidityUsd": 4008068.18,
		"hash": "3e61169a0f819f29ddf8934e695654478a6ba93337a4cd2b43e5932087814dd3"
	},
	{
		"id": "85064c3ed77d",
		"ts": "2026-08-06T08:29:05.111Z",
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
		"liquidityUsd": 1032063.66,
		"hash": "85064c3ed77d5e1a0c6009c5d24c78ba7ca10e0c4a3cddac90840289c2b04fff"
	},
	{
		"id": "89596450a503",
		"ts": "2026-08-06T08:29:05.303Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3308697.83,
		"hash": "89596450a503b338b11c4877daf6422aaab54ae5d541caff486f60b3616a12e3"
	},
	{
		"id": "f92a08cfaa1b",
		"ts": "2026-08-06T08:29:05.682Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4142068.7,
		"hash": "f92a08cfaa1b4811699e106d5f19ac26d7b3dd482f02e11b3e6d4cd0736c252b"
	},
	{
		"id": "675eed2fdf35",
		"ts": "2026-08-06T08:29:05.896Z",
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
		"liquidityUsd": 282701.28,
		"hash": "675eed2fdf355c87ffc707772966dd85cbf54bfd86ebd155294f95a2a10c3a87"
	},
	{
		"id": "ae1bfb80225f",
		"ts": "2026-08-06T08:29:06.106Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 800653.63,
		"hash": "ae1bfb80225f6b8046a8cda8b58a7264f2e3a4da5503063247da290c7d237087"
	},
	{
		"id": "817668d69492",
		"ts": "2026-08-06T08:29:06.310Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2004355.04,
		"hash": "817668d69492a079ca6f5231d81b60dcde95e4b0eb6c6b50a978fcb2f14dfe96"
	},
	{
		"id": "1bfa25eeae56",
		"ts": "2026-08-06T08:29:06.539Z",
		"symbol": "SOSO",
		"token": "0x624e2e7fDc8903165F64891672267AB0FCB98831",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 304485.55,
		"hash": "1bfa25eeae56ad3a22ead5e98d65e1daeb6a9cc2229dc86478489f4b3d8a15ac"
	},
	{
		"id": "7bdef0346dec",
		"ts": "2026-08-06T08:29:06.757Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 478261.77,
		"hash": "7bdef0346deca18d857b0727c00daa4740f8bbbfa06d8082f255874a28d8ba3c"
	},
	{
		"id": "2f5f5e3239c7",
		"ts": "2026-08-06T08:29:06.979Z",
		"symbol": "msETH",
		"token": "0x7Ba6F01772924a82D9626c126347A28299E98c98",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13886458.52,
		"hash": "2f5f5e3239c7ccf5f93d66a0956bf9ef607776a493e05bb0d966d7a69d86a2fb"
	},
	{
		"id": "28fd9679c47b",
		"ts": "2026-08-06T08:29:07.186Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4606336.96,
		"hash": "28fd9679c47b43a30d06a67c37272195b91add24b3f4ad12dad0fc5294fd1279"
	},
	{
		"id": "9de30ebc3151",
		"ts": "2026-08-06T05:45:09.504Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114377117.76,
		"hash": "9de30ebc315180699b50bd725d2041e172cf9b4830716710b626822916f5ba93"
	},
	{
		"id": "82504ed1127b",
		"ts": "2026-08-06T05:45:09.973Z",
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
		"liquidityUsd": 17421739.43,
		"hash": "82504ed1127b2cec7410b80b7ac200762be4384f7654a3b6da803f4266389917"
	},
	{
		"id": "231b8093334e",
		"ts": "2026-08-06T05:45:10.227Z",
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
		"liquidityUsd": 1036709.8,
		"hash": "231b8093334e0a7f5cd7075d3ee08621a5fbfc9aa7bbe350988209ae60c4f926"
	},
	{
		"id": "b8651989a91e",
		"ts": "2026-08-06T05:45:10.496Z",
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
		"liquidityUsd": 25795736.12,
		"hash": "b8651989a91e0483b0cb470b00a84f69daf24f938576424c8d8a0e3ef2f6cfc7"
	},
	{
		"id": "c56c8c1a29e3",
		"ts": "2026-08-06T05:45:10.739Z",
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
		"liquidityUsd": 4478369.52,
		"hash": "c56c8c1a29e396289363567c414e798c82167f2d243b657aa66204b703fe6cc8"
	},
	{
		"id": "1ff57d9e6e16",
		"ts": "2026-08-06T05:45:11.006Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 917733.26,
		"hash": "1ff57d9e6e164f1554023b98eb2c59f7f34f46e65d009862e22e4ef8f50c458a"
	},
	{
		"id": "ab39be54e377",
		"ts": "2026-08-06T05:45:11.245Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25795736.12,
		"hash": "ab39be54e37774900a184d761a0cb087170436a94221d58a5335f23b8582149d"
	},
	{
		"id": "3d7b673197af",
		"ts": "2026-08-06T05:45:11.492Z",
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
		"liquidityUsd": 1968268.76,
		"hash": "3d7b673197af0c2769fb91c37e353be6d769edbe6ce4d9f22f8ff83107857864"
	},
	{
		"id": "78a1cee50be5",
		"ts": "2026-08-06T05:45:11.737Z",
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
		"liquidityUsd": 1044872.15,
		"hash": "78a1cee50be5cbfc17a2967e5e5afecb216611f31f1d681c076601efbfb4e7a2"
	},
	{
		"id": "af51a2ca14e2",
		"ts": "2026-08-06T05:45:11.980Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3422767.91,
		"hash": "af51a2ca14e24a345c8a51f80b501f1d29226175322037c782045b5d51835a2c"
	},
	{
		"id": "702ab3166a19",
		"ts": "2026-08-06T05:45:12.211Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 283136.6,
		"hash": "702ab3166a195ed1a0353a77b55d6a161cdec96ce9b7119124a4801ed428a8cd"
	},
	{
		"id": "84d4c7bf6471",
		"ts": "2026-08-06T05:45:12.452Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 770714.88,
		"hash": "84d4c7bf6471111fe68d899d4d57880057420aa1dcb2b7b47eb6fb9c93cac49d"
	},
	{
		"id": "d354b790a249",
		"ts": "2026-08-06T05:45:12.676Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4138694.92,
		"hash": "d354b790a249da13821eee40746d2afa13db5c1ed8b47f7ed129a338b2cf69f5"
	},
	{
		"id": "9142d21a7eae",
		"ts": "2026-08-06T05:45:12.905Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2003720.78,
		"hash": "9142d21a7eaeaf63a144bd3f11b758056930df7d7556e19aee3cd9e8c7c82351"
	},
	{
		"id": "30372b2966e0",
		"ts": "2026-08-06T05:45:13.132Z",
		"symbol": "SOSO",
		"token": "0x624e2e7fDc8903165F64891672267AB0FCB98831",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 305335.91,
		"hash": "30372b2966e06f3172563ec6d5b57601b8645c0e6595d1da1d63ae8ec4eb1ef4"
	},
	{
		"id": "d6dcedb64291",
		"ts": "2026-08-06T05:45:13.358Z",
		"symbol": "msETH",
		"token": "0x7Ba6F01772924a82D9626c126347A28299E98c98",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13899439.94,
		"hash": "d6dcedb642917da9b36b9182fe1cb7203e97dd6164140f49704964c7e0923185"
	},
	{
		"id": "7fd75f72f4b8",
		"ts": "2026-08-06T05:45:13.584Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 480033.88,
		"hash": "7fd75f72f4b81303a0c1edde4684d5c963a6bf87cdd3f21df85511a8081329a0"
	},
	{
		"id": "8300fbf58c7c",
		"ts": "2026-08-06T05:45:13.809Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1118007.53,
		"hash": "8300fbf58c7cc7884a38f359eb0746a5994bd74d3442ccead112a7a592823749"
	},
	{
		"id": "1bc0b2d6b1ef",
		"ts": "2026-08-06T02:36:21.136Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113943942.07,
		"hash": "1bc0b2d6b1efbd2c479d08d89a5256c40b0bc4b1493c1c53d003f9bcaba23e56"
	},
	{
		"id": "fe30261e4594",
		"ts": "2026-08-06T02:36:21.335Z",
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
		"liquidityUsd": 16394653.43,
		"hash": "fe30261e459454a000569f2fe9444b9b3f2007f737002c7c708f891253da48c5"
	},
	{
		"id": "99480da41a1e",
		"ts": "2026-08-06T02:36:21.532Z",
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
		"liquidityUsd": 1045085.85,
		"hash": "99480da41a1e3129d967ffb6539b64bbd556665481dd07ff1cd0de7ed99360f3"
	},
	{
		"id": "312fa8d29642",
		"ts": "2026-08-06T02:36:21.726Z",
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
		"liquidityUsd": 25681222.79,
		"hash": "312fa8d296422897d26ad29e70d55dfc3e08d16d5d1e4817149726eb0634b6ac"
	},
	{
		"id": "b21e8085578f",
		"ts": "2026-08-06T02:36:22.074Z",
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
		"liquidityUsd": 4458274.27,
		"hash": "b21e8085578f46aa36e626c8a1958ef810320aa3193d75ef4fdc5c9206f3eef5"
	},
	{
		"id": "51a7e56ffe6f",
		"ts": "2026-08-06T02:36:22.273Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 917720.58,
		"hash": "51a7e56ffe6ff45cd49b740d855fe7f67e4e3713e7efddc43b69428ce421cc44"
	},
	{
		"id": "9ec1d247634f",
		"ts": "2026-08-06T02:36:22.465Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25681222.79,
		"hash": "9ec1d247634ff38fd3c5aa7389d6f682a9bd49258b249d615aae92bd72d16e3f"
	},
	{
		"id": "0ce0efe91a67",
		"ts": "2026-08-06T02:36:22.657Z",
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
		"liquidityUsd": 1955333.38,
		"hash": "0ce0efe91a672c1963b70f0c156745febb04e93b1c4a2e0608c36d9f0fd60e3a"
	},
	{
		"id": "1c9751c13236",
		"ts": "2026-08-06T02:36:22.854Z",
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
		"liquidityUsd": 1052567.2,
		"hash": "1c9751c13236aa95733b3874ad3dc03307f570925fd8df2cd982705225dcef88"
	},
	{
		"id": "9d0fe3ed90bb",
		"ts": "2026-08-06T02:36:23.046Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 741374.23,
		"hash": "9d0fe3ed90bb6632d7e05ace2e405a8314fcc2f410a1e5bde03390fde0c7e6ea"
	},
	{
		"id": "8972a4b72695",
		"ts": "2026-08-06T02:36:23.226Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 283776.57,
		"hash": "8972a4b726957e785489b91929b1acd9766801d996fbdfe80830644879b6e7b2"
	},
	{
		"id": "f6d8c242c3ec",
		"ts": "2026-08-06T02:36:23.403Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3242419.94,
		"hash": "f6d8c242c3ec30216c02e1a5e33f48b3201ec50ccd6bd520b15234c130ecb7a5"
	},
	{
		"id": "2b9d4bc24a85",
		"ts": "2026-08-06T02:36:23.584Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4132597.65,
		"hash": "2b9d4bc24a859028a67933e95f8a0c4d6c230148429b15f384a9821407ca19c4"
	},
	{
		"id": "3199fc20e049",
		"ts": "2026-08-06T02:36:23.762Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1979860.24,
		"hash": "3199fc20e04918e9e81dd896119c85b3736bb30db28a4d53099c0b4abbe4738b"
	},
	{
		"id": "0b2c88e4a8d9",
		"ts": "2026-08-06T02:36:23.957Z",
		"symbol": "msETH",
		"token": "0x7Ba6F01772924a82D9626c126347A28299E98c98",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13807645.74,
		"hash": "0b2c88e4a8d92f49a8a6041b69b060cb81cbcd846aaa5f5a34809af831a4a12c"
	},
	{
		"id": "5347608d05eb",
		"ts": "2026-08-06T02:36:24.159Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 478551.86,
		"hash": "5347608d05eb9b18a78a1ff6a060d21e1d8081ca38c997421c44cc3a313d72f7"
	},
	{
		"id": "341dd94e80cb",
		"ts": "2026-08-06T02:36:24.343Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71370.39,
		"hash": "341dd94e80cb33fc1b53d65bf4060573c957653ef3e3757208a8835d445bf27b"
	},
	{
		"id": "a438234fd9af",
		"ts": "2026-08-05T23:57:01.372Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114116739.11,
		"hash": "a438234fd9af33218d3e13b0a437cc056c3df127324d7cac9380223cceb6d62a"
	},
	{
		"id": "ba2bc62befe4",
		"ts": "2026-08-05T23:57:01.825Z",
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
		"liquidityUsd": 16618307.56,
		"hash": "ba2bc62befe419891a8a6f08e646ff8189ac59c1d6eb38398a93c407608579a2"
	},
	{
		"id": "104309a678c5",
		"ts": "2026-08-05T23:57:02.071Z",
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
		"liquidityUsd": 1047081.42,
		"hash": "104309a678c5eaf4c7a461a23dccceefe584995e16e33d7b4399b1dd88116f0f"
	},
	{
		"id": "7cc42e5a1ff4",
		"ts": "2026-08-05T23:57:02.328Z",
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
		"liquidityUsd": 25709515.3,
		"hash": "7cc42e5a1ff4ac3c6ae8dd60a77ed546191baed4c229f632a3bc38f0036fdfb3"
	},
	{
		"id": "2cdfa6594579",
		"ts": "2026-08-05T23:57:02.660Z",
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
		"liquidityUsd": 4481439.49,
		"hash": "2cdfa6594579a39c2016b697788f7bc2abebcb818b55023ed4e834b778896d7a"
	},
	{
		"id": "ee146f160ffc",
		"ts": "2026-08-05T23:57:02.902Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922530.37,
		"hash": "ee146f160ffc383e8026acd2f7954a2523867a7714d778fc9006db1c75d5c26d"
	},
	{
		"id": "6b1121997800",
		"ts": "2026-08-05T23:57:03.136Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25709515.3,
		"hash": "6b1121997800e8d4910e1a9ca257c80f489653c520e347ed06a32b270938aeed"
	},
	{
		"id": "afecf2c8cc6a",
		"ts": "2026-08-05T23:57:03.413Z",
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
		"liquidityUsd": 2118414.79,
		"hash": "afecf2c8cc6a5a29248bd3bc383b412137d3659bc3f6723a533a2f13f7ebd8b1"
	},
	{
		"id": "d554b692c47e",
		"ts": "2026-08-05T23:57:03.648Z",
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
		"liquidityUsd": 1055346.48,
		"hash": "d554b692c47ea777f80851697222e9a95ce1d4c76c92cb0b862cad6c3bcfca27"
	},
	{
		"id": "ad56cdeea855",
		"ts": "2026-08-05T23:57:03.884Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 760051,
		"hash": "ad56cdeea855f3cccf714f850f4f293bf5c5930d7abc40813d191c1ee2d10f31"
	},
	{
		"id": "3ce4b740aeb5",
		"ts": "2026-08-05T23:57:04.107Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279984.5,
		"hash": "3ce4b740aeb5062c74bfd7d42884c3708cb52d15d474ab57bb155f15c30f1102"
	},
	{
		"id": "59afb992de5e",
		"ts": "2026-08-05T23:57:04.329Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3262856.66,
		"hash": "59afb992de5e026c1f5515958578238613a2a47d599e3c3374be085c1fd9a9d4"
	},
	{
		"id": "24905eb5c662",
		"ts": "2026-08-05T23:57:04.550Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1993513.35,
		"hash": "24905eb5c6629655caa331b372ee69bee577a721e0cdfd08194bd62a80e56ab8"
	},
	{
		"id": "89286d38ae07",
		"ts": "2026-08-05T23:57:04.774Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 482216.29,
		"hash": "89286d38ae07e2ec877b135c927635fc90f84ec232d885288db6449fc13aad36"
	},
	{
		"id": "9877edc659dc",
		"ts": "2026-08-05T23:57:04.993Z",
		"symbol": "msETH",
		"token": "0x7Ba6F01772924a82D9626c126347A28299E98c98",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13894893.26,
		"hash": "9877edc659dcd41ba80934492bcdc8ad2ab6bd0e2647f73667155f5fb6cbe546"
	},
	{
		"id": "06dd5b6884e2",
		"ts": "2026-08-05T23:57:05.215Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4153793.3,
		"hash": "06dd5b6884e2f2056809187cf61900eb0747b43c6d8d5d0f301a4a3f91608a92"
	},
	{
		"id": "078bd66420ba",
		"ts": "2026-08-05T23:57:05.435Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100493.79,
		"hash": "078bd66420bace8d73b4edc15480c65b91434e414018ea622c3f3ade085af873"
	},
	{
		"id": "9092d5a1fb15",
		"ts": "2026-08-05T22:09:16.314Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114152192.09,
		"hash": "9092d5a1fb15f8dce6fdd0d12b858f355e5f50f0d39f7f29ef8370567ba9cf7b"
	},
	{
		"id": "0f86499e73a7",
		"ts": "2026-08-05T22:09:16.758Z",
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
		"liquidityUsd": 16853224.32,
		"hash": "0f86499e73a7190af9bbe71a30208b6a28ce5d6a50a9b027001cdc8d150f0312"
	},
	{
		"id": "7d0306aa0332",
		"ts": "2026-08-05T22:09:17.007Z",
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
		"liquidityUsd": 1049310.32,
		"hash": "7d0306aa03324ad54e5e12b3f328fbc18d0c0fc7022928d7cb4633e85f37b5f9"
	},
	{
		"id": "a17cdb922fc3",
		"ts": "2026-08-05T22:09:17.257Z",
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
		"liquidityUsd": 25694913.23,
		"hash": "a17cdb922fc30f98e8b560c9363e8483a9caa85c69abe899884d766bfe799d68"
	},
	{
		"id": "2e4ca16a5456",
		"ts": "2026-08-05T22:09:17.529Z",
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
		"liquidityUsd": 4498629.4,
		"hash": "2e4ca16a5456b0e94b469aa714c4cc8763eaf9101e9addf8183cb3c02c05da25"
	},
	{
		"id": "e6d87cc892db",
		"ts": "2026-08-05T22:09:17.774Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 922530.37,
		"hash": "e6d87cc892dbf637a1d71347d75afbbd97907ea331eaae7cf3668d5e23920281"
	},
	{
		"id": "0d97a9e3e10a",
		"ts": "2026-08-05T22:09:18.012Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25694913.23,
		"hash": "0d97a9e3e10a9b2bd4c9c91f0072e3a7c6f1e6579f36312d6831301ff70b4cd8"
	},
	{
		"id": "062514e223ed",
		"ts": "2026-08-05T22:09:18.286Z",
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
		"liquidityUsd": 2128361.05,
		"hash": "062514e223ed3ec2aa38391a014903a4bf1decac4c28e9cf34d57e84a6a4b2b9"
	},
	{
		"id": "1cd6009189e7",
		"ts": "2026-08-05T22:09:18.539Z",
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
		"liquidityUsd": 1050541.02,
		"hash": "1cd6009189e73a7b665a5e7c26396944815f39bea4e761809305550650138ead"
	},
	{
		"id": "99cbacc0ff4f",
		"ts": "2026-08-05T22:09:18.809Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 766705.98,
		"hash": "99cbacc0ff4fcd72841e5716d686f6cb5da1d76b70ea07b1e379118fbff499b1"
	},
	{
		"id": "75b75de507e8",
		"ts": "2026-08-05T22:09:19.039Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3414515.38,
		"hash": "75b75de507e8fe9e4c7adc120d90b009b5d02b0b727d6b5570615aa5377a14c9"
	}
]
