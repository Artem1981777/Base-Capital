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
	"updatedAt": "2026-08-09T23:26:58.509Z",
	"tokensScored": 8699,
	"verdictsIssued": 8699,
	"safe": 7604,
	"risky": 651,
	"likelyRug": 444,
	"ticks": 528
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "6b28cf25a969",
		"ts": "2026-08-09T23:26:54.564Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114996350.02,
		"hash": "6b28cf25a969234af32df812682e04308ccd2325888b3ac308b98b60c512771a"
	},
	{
		"id": "6383744c04b7",
		"ts": "2026-08-09T23:26:54.863Z",
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
		"liquidityUsd": 17135900.04,
		"hash": "6383744c04b747e28823a0ea5aa1ea58348f9719be1be617089b2b966fcb8ebf"
	},
	{
		"id": "6ab80bc888a1",
		"ts": "2026-08-09T23:26:55.157Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "6ab80bc888a175c4c96af4f2ca9c19ee91d806cfe860a63212a2f325964024db"
	},
	{
		"id": "eeb16b4b4841",
		"ts": "2026-08-09T23:26:55.406Z",
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
		"liquidityUsd": 26807283.29,
		"hash": "eeb16b4b48418d0d1a232cb41d4bf99fed92932bb189031203ac899e390b6516"
	},
	{
		"id": "395a5196bbdb",
		"ts": "2026-08-09T23:26:55.652Z",
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
		"liquidityUsd": 4397335.47,
		"hash": "395a5196bbdb70686893c60cb6a1b7eb722269a5f0f39a43c7d63850fc87f5a6"
	},
	{
		"id": "f74c945bf7cd",
		"ts": "2026-08-09T23:26:55.901Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 947871.95,
		"hash": "f74c945bf7cd0726302c92d6f45c97559db48b999b2882949f6663a05acdb3b8"
	},
	{
		"id": "5c4d413b10bf",
		"ts": "2026-08-09T23:26:56.149Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26807283.29,
		"hash": "5c4d413b10bfed27b243888d072de61b1d2106ca6147c780578de246d7fd08ff"
	},
	{
		"id": "4a96e0f3e0aa",
		"ts": "2026-08-09T23:26:56.393Z",
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
		"liquidityUsd": 4819434.26,
		"hash": "4a96e0f3e0aaf37535cf24cfdc3e8aae6e60e10a1858baf354fa0101ccd9017f"
	},
	{
		"id": "8a6edbd82fee",
		"ts": "2026-08-09T23:26:56.645Z",
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
		"liquidityUsd": 76190.12,
		"hash": "8a6edbd82fee9f955bc523314a88c6f5b9e544b2c9a3ce0c9754ffbe31943570"
	},
	{
		"id": "b70ca353f395",
		"ts": "2026-08-09T23:26:56.895Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 294654.59,
		"hash": "b70ca353f3950833ef08f3c04489fabb0003546f3b9e2a010cac458351495522"
	},
	{
		"id": "29dad6bd90f5",
		"ts": "2026-08-09T23:26:57.124Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4210148.2,
		"hash": "29dad6bd90f54d7851f4644593605f3ebf2204cc4d4a1fb9611c622a183aba08"
	},
	{
		"id": "bf4a989659f6",
		"ts": "2026-08-09T23:26:57.356Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 974151.71,
		"hash": "bf4a989659f65fdb93e561da80343c89c00c8b529500cb3aedd36ba9d21a4ad8"
	},
	{
		"id": "0ec34f7791bf",
		"ts": "2026-08-09T23:26:57.588Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9432074.27,
		"hash": "0ec34f7791bfe80af30af5418893e4d57e654a7deff865a9e900b0e51ac4ed13"
	},
	{
		"id": "fd221d025f77",
		"ts": "2026-08-09T23:26:57.816Z",
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
		"liquidityUsd": 1332086.01,
		"hash": "fd221d025f770c80cd7af779c38c73a9fc49b88c6d4d2050ff6e5f0877b9d29b"
	},
	{
		"id": "48e25a883dfa",
		"ts": "2026-08-09T23:26:58.048Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 80389.03,
		"hash": "48e25a883dfa684726734d4624802e1fb048e22178eb0477a78f4707c02e354a"
	},
	{
		"id": "4236372f6546",
		"ts": "2026-08-09T23:26:58.281Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 442293.07,
		"hash": "4236372f654654fbd201d1e1dafb2d5aac03c76ffcfa648bf5eb2433f0037bfe"
	},
	{
		"id": "6412ab6a90c3",
		"ts": "2026-08-09T23:26:58.509Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1741686.56,
		"hash": "6412ab6a90c30ada563b17b8574fb65339c776311e8bbeb6772a56a4734d8116"
	},
	{
		"id": "cc1e280f3e8c",
		"ts": "2026-08-09T22:25:57.828Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115319050.24,
		"hash": "cc1e280f3e8c74916392e7453555c4e21a40fa404e9faed21277af2872d99fb2"
	},
	{
		"id": "16ab8fd3f285",
		"ts": "2026-08-09T22:25:58.139Z",
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
		"liquidityUsd": 18098632.9,
		"hash": "16ab8fd3f285f5b1395a285ce14d9fe1a7920f24cc3acdc6145a461c477c025b"
	},
	{
		"id": "27b12ea5bcfe",
		"ts": "2026-08-09T22:25:58.380Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "27b12ea5bcfef014c167c8c36a84e48bdfef00206362a77e9b848a92b00fda7d"
	},
	{
		"id": "305d3eb4453c",
		"ts": "2026-08-09T22:25:58.633Z",
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
		"liquidityUsd": 26959679.07,
		"hash": "305d3eb4453cdb2a309babc3addc4b0c0370b672327fb8965f852fd55b5c4f59"
	},
	{
		"id": "2dde02be29c6",
		"ts": "2026-08-09T22:25:58.870Z",
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
		"liquidityUsd": 4400651.35,
		"hash": "2dde02be29c6e88599452ed0505c24fdba778ce3ee4827a0329a0c3f1f68d291"
	},
	{
		"id": "1578090dcaa8",
		"ts": "2026-08-09T22:25:59.122Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 949996.51,
		"hash": "1578090dcaa8df58320f59fe9ed7d7b84a396abf0defa6c3fa6c7f4ec155ac53"
	},
	{
		"id": "63bff5ecf4ab",
		"ts": "2026-08-09T22:25:59.373Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26959679.07,
		"hash": "63bff5ecf4ab887c6add1069d80f46a2a135a017a2e97da9219a6cdf206c9598"
	},
	{
		"id": "805dd5198b85",
		"ts": "2026-08-09T22:25:59.608Z",
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
		"liquidityUsd": 4849106.09,
		"hash": "805dd5198b85d60e8c11cbd8618c387322feed0df85cac5b64e8c480be4a9869"
	},
	{
		"id": "3022e898783e",
		"ts": "2026-08-09T22:25:59.861Z",
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
		"liquidityUsd": 77764.79,
		"hash": "3022e898783e90305e0ef52f31c54bcd3fafe4df2312313473e620fe5845b415"
	},
	{
		"id": "579a64d4a38d",
		"ts": "2026-08-09T22:26:00.296Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 292875.17,
		"hash": "579a64d4a38d7317a99c7a84c77f9731399f79d5490d2e42a750685dfd7cc8c7"
	},
	{
		"id": "d0cf823712ac",
		"ts": "2026-08-09T22:26:00.546Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4245722.52,
		"hash": "d0cf823712ac10c02ca15d75dc18f4e316ea52c2d71c63798471401707355210"
	},
	{
		"id": "fcde13252a59",
		"ts": "2026-08-09T22:26:00.780Z",
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
		"liquidityUsd": 9551794.58,
		"hash": "fcde13252a59a1d17c8fdd5aeeed35d482b684cdc14f6fa2a4842fb0c0f1729c"
	},
	{
		"id": "b6eadfe00db3",
		"ts": "2026-08-09T22:26:01.126Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 975917.2,
		"hash": "b6eadfe00db3c1cff9f318d1023eb1b9d8a84506766d29b7dd24caa4162f4449"
	},
	{
		"id": "2fb54b874cfa",
		"ts": "2026-08-09T22:26:01.766Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1399252.12,
		"hash": "2fb54b874cfa3607dff96adda9010583a01eaaa872f9090210fb6c1fc8d5f34f"
	},
	{
		"id": "4e9fc8281c3f",
		"ts": "2026-08-09T22:26:02.021Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 93507.39,
		"hash": "4e9fc8281c3f0e6e19cc216dba9633a1c599824bc18e621222c733bb3672a96d"
	},
	{
		"id": "b4196e6f04c3",
		"ts": "2026-08-09T22:26:02.275Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 439360.59,
		"hash": "b4196e6f04c37b0754e2d87bb0cb55bb5f574b9b7415a081cd4aa6ad3716d090"
	},
	{
		"id": "3a6e653ead16",
		"ts": "2026-08-09T22:26:02.509Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1747954.81,
		"hash": "3a6e653ead1694432c95862b501237ed05bdeb3c73a25cbbb41802e06edc9531"
	},
	{
		"id": "14ea7d49fdf7",
		"ts": "2026-08-09T21:27:38.432Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115041043.33,
		"hash": "14ea7d49fdf78f871f06c7b8a4815461b26db5c4383270143a8d11cfc7d0aa2b"
	},
	{
		"id": "bf6251d98379",
		"ts": "2026-08-09T21:27:38.866Z",
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
		"liquidityUsd": 18154259.61,
		"hash": "bf6251d98379168e2da79409cb8cbbd64cc6c3f746be768f5ab9bc47f2cea695"
	},
	{
		"id": "ae6ced83bb09",
		"ts": "2026-08-09T21:27:39.118Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "ae6ced83bb09c744d0d623d488c7bb48cb2cebed22f9fc1908985f4e5bf14d6d"
	},
	{
		"id": "26dbe7e6f174",
		"ts": "2026-08-09T21:27:39.356Z",
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
		"liquidityUsd": 26862601.69,
		"hash": "26dbe7e6f174e882349a72e1ffa36d10986fd783fc16eae352f2defd383f51a3"
	},
	{
		"id": "60c1c224b1a7",
		"ts": "2026-08-09T21:27:39.609Z",
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
		"liquidityUsd": 4400635.52,
		"hash": "60c1c224b1a74b09a01b4b9704ccd21e7b9fc411456dbcd6f517dea4ec4c91f7"
	},
	{
		"id": "116d4f0647c6",
		"ts": "2026-08-09T21:27:39.849Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 950012.5,
		"hash": "116d4f0647c69df93600de1601d2624d1441d86fe47b2ef808aff554be458b81"
	},
	{
		"id": "87065473ca91",
		"ts": "2026-08-09T21:27:40.097Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26862601.69,
		"hash": "87065473ca918d0a487d6e9da41143f06550449e89d3477fb3c16fcd3df05418"
	},
	{
		"id": "8e2c13991a49",
		"ts": "2026-08-09T21:27:40.352Z",
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
		"liquidityUsd": 4830253.78,
		"hash": "8e2c13991a49eda7cab704d5167ee46a3724078105cd1ac2ac4578ce1efaf0a5"
	},
	{
		"id": "cbe0bccb82f6",
		"ts": "2026-08-09T21:27:40.599Z",
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
		"liquidityUsd": 77196.3,
		"hash": "cbe0bccb82f6e7db2f2c362ca5ea438d3f44d8fc5bbc5db9a457f476fdbce92c"
	},
	{
		"id": "b7c11a4d80af",
		"ts": "2026-08-09T21:27:40.860Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 291183.5,
		"hash": "b7c11a4d80affe1cb866a78bd4fac6db3dbc034e3f9b647d30de520c29cac56c"
	},
	{
		"id": "96ca568fefb8",
		"ts": "2026-08-09T21:27:41.080Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4220442.74,
		"hash": "96ca568fefb83203bec008892792949fd236de6f405020f2887247a58b6f460d"
	},
	{
		"id": "10d4fdef4c00",
		"ts": "2026-08-09T21:27:41.314Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9493358,
		"hash": "10d4fdef4c00e69b4acbf5171646422b786fad4d8d691bb932ed7777841f3f5d"
	},
	{
		"id": "5cf22e236ceb",
		"ts": "2026-08-09T21:27:41.538Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 975852.92,
		"hash": "5cf22e236ceb27145e18455a6faa5cf0a35ef1626caa37a83341aa530898ffac"
	},
	{
		"id": "ac55ff533bbc",
		"ts": "2026-08-09T21:27:41.773Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 79742.56,
		"hash": "ac55ff533bbc20c421db0624aa325977dd6011e31372b0f3d2cadf3ec80a3b57"
	},
	{
		"id": "d3c95e5e3285",
		"ts": "2026-08-09T21:27:41.995Z",
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
		"liquidityUsd": 1430560.16,
		"hash": "d3c95e5e3285720b2ce91b0e4529524e917752c43ab27e9e5664aeb25452088a"
	},
	{
		"id": "ec72a2f8efbc",
		"ts": "2026-08-09T21:27:42.230Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1743142.25,
		"hash": "ec72a2f8efbcdde176b81358c94b2da8c3aadade028f768d55a379dc3d279eba"
	},
	{
		"id": "98145c0c0870",
		"ts": "2026-08-09T21:27:42.452Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 415595.42,
		"hash": "98145c0c08703f821d54f1f87295ff526aced5cc94e992b317d97f3aad66f255"
	},
	{
		"id": "672203716996",
		"ts": "2026-08-09T20:26:45.723Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115035343.37,
		"hash": "672203716996765a9d3abeeb6ceb4c9807237ff7665482b935e4d02c86176be2"
	},
	{
		"id": "1db42d6521b6",
		"ts": "2026-08-09T20:26:46.149Z",
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
		"liquidityUsd": 14721661.82,
		"hash": "1db42d6521b67547c7da7e08a928956e4b1c5a225c13b7fb55d18c63b0533c05"
	},
	{
		"id": "2b656601db6d",
		"ts": "2026-08-09T20:26:46.387Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "2b656601db6dc2582ed9b648c0647b0885b7702340cc7fd6d167eeff3f660d13"
	},
	{
		"id": "3078a2404455",
		"ts": "2026-08-09T20:26:46.652Z",
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
		"liquidityUsd": 26862673.49,
		"hash": "3078a240445583f95bed2bb9988bce28e4d429b5849a2d430e04ae1d2fa8b0a9"
	},
	{
		"id": "e9dabe66af07",
		"ts": "2026-08-09T20:26:46.900Z",
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
		"liquidityUsd": 4404818.25,
		"hash": "e9dabe66af078227884833ef945674a048bf5a91154d7ab3869c252dad885bde"
	},
	{
		"id": "8381d30b0998",
		"ts": "2026-08-09T20:26:47.128Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 950012.5,
		"hash": "8381d30b0998a5bf4b2c16635e4389024f384e4654ca009d85b4242bb066dbd5"
	},
	{
		"id": "f53175bb7715",
		"ts": "2026-08-09T20:26:47.362Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26862673.49,
		"hash": "f53175bb7715cf464997d63a903e174c7a605d8eb3544eef0d141eb10ec032c3"
	},
	{
		"id": "ee738a5514a9",
		"ts": "2026-08-09T20:26:48.013Z",
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
		"liquidityUsd": 4826232.07,
		"hash": "ee738a5514a9254f190900d21f29fb05517eebc49a58d0b5664350faff0c4517"
	},
	{
		"id": "6d5922475e8d",
		"ts": "2026-08-09T20:26:48.245Z",
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
		"liquidityUsd": 75949.52,
		"hash": "6d5922475e8d9af1d1b8d2745e29e0b3dc9befa0f96263c0fa43e68e600265ac"
	},
	{
		"id": "8afcd1253e97",
		"ts": "2026-08-09T20:26:48.474Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4202079.28,
		"hash": "8afcd1253e97e228a4f28fcca81b0fe0383523eeecbafd85e5681df0b42d2616"
	},
	{
		"id": "bddd1e48ac45",
		"ts": "2026-08-09T20:26:48.693Z",
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
		"liquidityUsd": 291491.11,
		"hash": "bddd1e48ac451fca3b1bc3512390dd010eb68edefa8b91af4b05b7658502cef7"
	},
	{
		"id": "4f598d0eb670",
		"ts": "2026-08-09T20:26:48.915Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9508850.96,
		"hash": "4f598d0eb670571631a5f5cc313802127967ad499a4982057bf3a434d4afa68f"
	},
	{
		"id": "b935459659c7",
		"ts": "2026-08-09T20:26:49.132Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 974842.52,
		"hash": "b935459659c75103cb8eb2ad2ad07f8b0d4bfb8d543b9b749434c1800408ac23"
	},
	{
		"id": "67e72c501395",
		"ts": "2026-08-09T20:26:49.343Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94803.42,
		"hash": "67e72c501395f3d3ce301391dced8b27a4f6867ecf8d2a3a96c299c3a480ae90"
	},
	{
		"id": "1cd826cf7da2",
		"ts": "2026-08-09T20:26:49.561Z",
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
		"liquidityUsd": 1432887.15,
		"hash": "1cd826cf7da2a9e0961132f9ddd9ba9448182745acff665312eca0b090875114"
	},
	{
		"id": "33dd3886479e",
		"ts": "2026-08-09T20:26:49.783Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1742623.91,
		"hash": "33dd3886479ea85ccfff1dc9ad0a4bd7798016dfdd0b513990a4f3aa4653f9bd"
	},
	{
		"id": "9ac11c2436ed",
		"ts": "2026-08-09T20:26:50.000Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 357970.69,
		"hash": "9ac11c2436edfef53f748dceece6ea6d4d80dc9c17f69ad0a2575974cd0c97da"
	},
	{
		"id": "e395da93ef30",
		"ts": "2026-08-09T19:29:39.486Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115047000.24,
		"hash": "e395da93ef3067351cf0f889d09825639ac1c9fe5d34cd4e5e6b5041c0aac363"
	},
	{
		"id": "3c539e420310",
		"ts": "2026-08-09T19:29:39.739Z",
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
		"liquidityUsd": 17051654.67,
		"hash": "3c539e4203103caa9e9f5fe65a8f06748d428a7ade9e14fd19641eda65fef003"
	},
	{
		"id": "f960c0fa4368",
		"ts": "2026-08-09T19:29:39.980Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "f960c0fa4368f5f36280697ac6abfbf6314fa9d444c90bee46195ae855a48975"
	},
	{
		"id": "e34e1d59e0a1",
		"ts": "2026-08-09T19:29:40.237Z",
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
		"liquidityUsd": 26859277,
		"hash": "e34e1d59e0a12ef2de3605ff8d348a5888ed8c07a5d5930c87b675e3d4e72096"
	},
	{
		"id": "8a4d85d45ad7",
		"ts": "2026-08-09T19:29:40.476Z",
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
		"liquidityUsd": 4404818.25,
		"hash": "8a4d85d45ad7e7ddd4d72d6df8619fd049e3807ce9f82b573f86df53d7cdc273"
	},
	{
		"id": "1cb644ceb185",
		"ts": "2026-08-09T19:29:40.749Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 950682.67,
		"hash": "1cb644ceb185a2079f9a809df1aefd4cea2990715df97786920c02cb757465cf"
	},
	{
		"id": "89f2351911ef",
		"ts": "2026-08-09T19:29:41.008Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26859277,
		"hash": "89f2351911ef7e6e4a72304b227b79360e08616fbfa87872b62bd50ee4acc249"
	},
	{
		"id": "39a87a60f3dd",
		"ts": "2026-08-09T19:29:41.250Z",
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
		"liquidityUsd": 4831986.98,
		"hash": "39a87a60f3dd4c6d8e480e8f6c3a00d9e65614c53a701027ae0b5f438ac9b7d5"
	},
	{
		"id": "b90d00e29091",
		"ts": "2026-08-09T19:29:41.491Z",
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
		"liquidityUsd": 78225.29,
		"hash": "b90d00e290917995bc0ab67e77c4c0255f9d44e87b45bf038f419097016c5ae7"
	},
	{
		"id": "12401e0b8187",
		"ts": "2026-08-09T19:29:41.746Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4210882.23,
		"hash": "12401e0b818715da09cc46f03b158d3c481c994815f7c7595c79b1d27a03bbb4"
	},
	{
		"id": "d81a65221ea4",
		"ts": "2026-08-09T19:29:41.976Z",
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
		"liquidityUsd": 291223.8,
		"hash": "d81a65221ea466b3c6dfefe6ee293bc0b2791c3545f14d516a9f497e6521f996"
	},
	{
		"id": "39a21318b3a4",
		"ts": "2026-08-09T19:29:42.198Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 974136.84,
		"hash": "39a21318b3a46242daca1d954ac42e9a822850f8d0d6506038a3385656737b1a"
	},
	{
		"id": "8079451adddb",
		"ts": "2026-08-09T19:29:42.430Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9527367.6,
		"hash": "8079451adddb338cbd177b1d74146a7f57d7f9d23f42c9f4a2c04cbec78df720"
	},
	{
		"id": "97f2af92538c",
		"ts": "2026-08-09T19:29:42.653Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 98081.94,
		"hash": "97f2af92538c08466a74ef102ac69b9a0d41b1337ab1e502e10e03cfdc95dec0"
	},
	{
		"id": "1b9934d34233",
		"ts": "2026-08-09T19:29:42.878Z",
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
		"liquidityUsd": 1433132.69,
		"hash": "1b9934d34233639035478a3a8674db939d4bc0d1e6e1689162f27537677245a4"
	},
	{
		"id": "00742b2f60ce",
		"ts": "2026-08-09T19:29:43.100Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1735363.47,
		"hash": "00742b2f60ce012814b6e0116a551345d5ddd9cfbc77d352b774c1fa4dd1e9d1"
	},
	{
		"id": "e76009a138d0",
		"ts": "2026-08-09T19:29:43.333Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 340631.52,
		"hash": "e76009a138d03f0f878f83b440944ddcdbcb4a8ddf0eb219395909eb473147d2"
	},
	{
		"id": "4f9ea55952df",
		"ts": "2026-08-09T18:34:42.926Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115038741.2,
		"hash": "4f9ea55952df86470865cf3c3dcc819b45f339daab6d51d7f53123e539b29415"
	},
	{
		"id": "b34a21089ee0",
		"ts": "2026-08-09T18:34:43.238Z",
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
		"liquidityUsd": 16459766.02,
		"hash": "b34a21089ee04aa62191b38f67945a5c56f5b461b36826818c9cfe69a52f3eab"
	},
	{
		"id": "9da2f77e6988",
		"ts": "2026-08-09T18:34:43.479Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "9da2f77e6988e3e76b01a852d97dc07af1cf33e27179cb637327b00911e683af"
	},
	{
		"id": "3d9ee9e97cba",
		"ts": "2026-08-09T18:34:43.719Z",
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
		"liquidityUsd": 26859292.18,
		"hash": "3d9ee9e97cba4e4d4b071f68079e9ae05bde7fcca90ad3e03476478c7d527ca4"
	},
	{
		"id": "a6d28a7441d7",
		"ts": "2026-08-09T18:34:43.964Z",
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
		"liquidityUsd": 4409855.39,
		"hash": "a6d28a7441d7cf6ad553dadcf9150bb45a3dcf03f0a0dd9708591b548513e8cb"
	},
	{
		"id": "c9a2450fffc3",
		"ts": "2026-08-09T18:34:44.202Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 952266.08,
		"hash": "c9a2450fffc3abdae5abc42d67bcbdeb57a2ae9b87b11810d8b1c32051bf54ca"
	},
	{
		"id": "d0593de52926",
		"ts": "2026-08-09T18:34:44.439Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26859292.18,
		"hash": "d0593de5292698079d0d38fb4a74706a90183094f6df5129ed56d6dcf6132001"
	},
	{
		"id": "a24de16d5647",
		"ts": "2026-08-09T18:34:44.678Z",
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
		"liquidityUsd": 4830227.26,
		"hash": "a24de16d5647e567fcc089e4a9e92a5f1d62332cf6738c2c20d8a532e0cbce99"
	},
	{
		"id": "929233cd6571",
		"ts": "2026-08-09T18:34:44.920Z",
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
		"liquidityUsd": 76970.77,
		"hash": "929233cd65715367d708ef6d872cb5b23eebc1d02910f449cc6ab76577d37d2f"
	},
	{
		"id": "f60b034b9732",
		"ts": "2026-08-09T18:34:45.160Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4224777.27,
		"hash": "f60b034b9732983123cb0df39e58091513865887085b69bfcc318cce751806f1"
	},
	{
		"id": "1878ba43fd11",
		"ts": "2026-08-09T18:34:45.383Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 290843.52,
		"hash": "1878ba43fd11667633fe299983aa05e81a0c5cc93641cc298f77c00990e91470"
	},
	{
		"id": "ae0fb564d385",
		"ts": "2026-08-09T18:34:45.608Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 974486.21,
		"hash": "ae0fb564d3854e5ca4a8d7b84b5c49c8043885eae4ac2e79a30e365fa88c7559"
	},
	{
		"id": "c7d2ff8d0061",
		"ts": "2026-08-09T18:34:45.833Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9621441.81,
		"hash": "c7d2ff8d0061d91de56d00ab55ee4c02c084766a764c49e809dbefe9342e0bae"
	},
	{
		"id": "84f03a6bd934",
		"ts": "2026-08-09T18:34:46.058Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 86747.66,
		"hash": "84f03a6bd93430f8ec6d1b09efd199fc54782a27d1b5a0caca0afc1d30e4c773"
	},
	{
		"id": "85de1c8f8a81",
		"ts": "2026-08-09T18:34:46.281Z",
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
		"liquidityUsd": 1438564.91,
		"hash": "85de1c8f8a8193b9e519f5643b70765caa0fb6fdc4ebe0e8bc5007fd4bfacd58"
	},
	{
		"id": "5291e47a283a",
		"ts": "2026-08-09T18:34:46.505Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1736946.21,
		"hash": "5291e47a283a076dd4fbd05de88fb4fccbb32548c7d5c152d6312f388a5a8df9"
	},
	{
		"id": "039990c4a162",
		"ts": "2026-08-09T18:34:46.728Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 338178.03,
		"hash": "039990c4a162abc55f8df3d4163bc5b153b07be5a5bfb5ddf3a3b3c9c6d4e9bb"
	},
	{
		"id": "b28d09d44351",
		"ts": "2026-08-09T18:34:46.953Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73628.07,
		"hash": "b28d09d443512c7be175ecc4ba0dba5f8014dcffbcbcbc483642dcd5e0cbe75d"
	},
	{
		"id": "1f61e7295d23",
		"ts": "2026-08-09T17:27:17.937Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115035012.83,
		"hash": "1f61e7295d23bd5fc22594a7009ad920742932a459d4caf9ea200d2fbc7b50ea"
	},
	{
		"id": "36f5dfbb3b2e",
		"ts": "2026-08-09T17:27:18.177Z",
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
		"liquidityUsd": 17874230.95,
		"hash": "36f5dfbb3b2ef57355cf739714fa4e3cda8189893b055a608017dce40d7d5457"
	},
	{
		"id": "7d1f449e66a7",
		"ts": "2026-08-09T17:27:18.383Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "7d1f449e66a73cee82b2563966140be3225530bf7246f5e8b065d12e84817fdb"
	},
	{
		"id": "f454d3c3dc64",
		"ts": "2026-08-09T17:27:18.583Z",
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
		"liquidityUsd": 26966630.59,
		"hash": "f454d3c3dc647cf817138d431f74db4f9a258aafe25784cb040d9766173b7ff2"
	},
	{
		"id": "0f0358dabea6",
		"ts": "2026-08-09T17:27:18.775Z",
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
		"liquidityUsd": 4420114.94,
		"hash": "0f0358dabea61a1eb3105d0bd8e2accb32c69dab4bb2d0dd72791b6e33b9d8b0"
	},
	{
		"id": "687d3f2c6276",
		"ts": "2026-08-09T17:27:18.983Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 951120.12,
		"hash": "687d3f2c62768650435c31d5efedb9ebd5216a25b42d20362c9a4dc8c73c82d5"
	},
	{
		"id": "249921e2be8f",
		"ts": "2026-08-09T17:27:19.174Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26966630.59,
		"hash": "249921e2be8f9d7a4e6cd5923be667ce1ab9412b1f4e991ccd72ee042c6c3c29"
	},
	{
		"id": "3f5fdd556d2d",
		"ts": "2026-08-09T17:27:19.368Z",
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
		"liquidityUsd": 4837389.27,
		"hash": "3f5fdd556d2d49a5e16ffee37c3c3831373162f760b8dba2acf3d4c1962314a4"
	},
	{
		"id": "854bf124592e",
		"ts": "2026-08-09T17:27:19.571Z",
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
		"liquidityUsd": 71043.71,
		"hash": "854bf124592e5b119e67a53b4dab573ed74d7068ea7ff5410841b65f355c9fb9"
	},
	{
		"id": "6be8cb4369f3",
		"ts": "2026-08-09T17:27:19.768Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4227544.77,
		"hash": "6be8cb4369f34ba4293b3cb019f4d70de487821bbbb1f73a3c0cc77ad436dd8c"
	},
	{
		"id": "345deb09e790",
		"ts": "2026-08-09T17:27:20.361Z",
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
		"liquidityUsd": 290927.36,
		"hash": "345deb09e790f23c7fe61990e37ca2756bff0319e5d968b045404e75a45d1cdc"
	},
	{
		"id": "32571033dde0",
		"ts": "2026-08-09T17:27:20.541Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 974489.52,
		"hash": "32571033dde0401af66d407d238122ef4bc719fb0b9f868b89696b4cc2509051"
	},
	{
		"id": "14f0217b130b",
		"ts": "2026-08-09T17:27:20.729Z",
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
		"liquidityUsd": 9471581.04,
		"hash": "14f0217b130bfba3594434b44ce46394bab4cbfd47b8ccfbd0f3d89ac0881943"
	},
	{
		"id": "d2df0a69c769",
		"ts": "2026-08-09T17:27:20.922Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 80960.39,
		"hash": "d2df0a69c769d735ae48f5aac92d0b4b407c63baac9b4f4b3c54ad1fff6be764"
	},
	{
		"id": "4839b0c195c9",
		"ts": "2026-08-09T17:27:21.109Z",
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
		"liquidityUsd": 1438461.73,
		"hash": "4839b0c195c9a0c4b0054e80b5c60a3b98e307a56e59b0b92e0a107bf5cedc1d"
	},
	{
		"id": "e6a3980f6cbc",
		"ts": "2026-08-09T17:27:21.307Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1737794.83,
		"hash": "e6a3980f6cbc7c9ae96ddc52a5e4902d4c8cc3cc561712664d3b2ea5e6a0dd3d"
	},
	{
		"id": "552f9630df76",
		"ts": "2026-08-09T17:27:21.487Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 339477.16,
		"hash": "552f9630df76eea196ee8d6b4b1a8dd0398a071693d9f13c8306e5d26841fe3e"
	},
	{
		"id": "8d6ed147172a",
		"ts": "2026-08-09T17:27:21.678Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72480.09,
		"hash": "8d6ed147172aa648e264b0acd26f30edf8a73849e57d638efada13111a5f12eb"
	},
	{
		"id": "6a5fee78170f",
		"ts": "2026-08-09T16:29:27.574Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114973726.97,
		"hash": "6a5fee78170f28747b07b7c928ed830da20f94c88eb5c8ffdf6ffcc1f93026c8"
	},
	{
		"id": "fd5454e3b791",
		"ts": "2026-08-09T16:29:27.940Z",
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
		"liquidityUsd": 15444435.74,
		"hash": "fd5454e3b7919f4b6ddb74de77ad0d91246c41d79dcda81de904719c743ebe03"
	},
	{
		"id": "ebbe44af4176",
		"ts": "2026-08-09T16:29:28.121Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "ebbe44af4176b58120346a9b8fc98d7e8bd060f44034f72d098fdfe12bd136ad"
	},
	{
		"id": "6037ae0f114b",
		"ts": "2026-08-09T16:29:28.307Z",
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
		"liquidityUsd": 26994105.89,
		"hash": "6037ae0f114beccc619ad44e088f5b9099c38a8362b6239c12724ed890e79f75"
	},
	{
		"id": "04a69204f0da",
		"ts": "2026-08-09T16:29:28.488Z",
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
		"liquidityUsd": 4429136.39,
		"hash": "04a69204f0dae235271fa53129e29d8de24308f8ce847bbb0518e76cdd03a9f5"
	},
	{
		"id": "18a7b24bc8f0",
		"ts": "2026-08-09T16:29:28.675Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932958.47,
		"hash": "18a7b24bc8f0fee9ad602a42b62ce7b8905b57e0896c76aabbf22095e00bb445"
	},
	{
		"id": "faba0241bace",
		"ts": "2026-08-09T16:29:28.858Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26994105.89,
		"hash": "faba0241bace325d220a1756be53e75503fe9823efa1326f719937e4b965de91"
	},
	{
		"id": "6d05c5287198",
		"ts": "2026-08-09T16:29:29.043Z",
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
		"liquidityUsd": 4830150.17,
		"hash": "6d05c528719894b11d8974733d59768145507ea3c14152a67da00f1203553597"
	},
	{
		"id": "c4a1c17446db",
		"ts": "2026-08-09T16:29:29.227Z",
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
		"liquidityUsd": 69749.56,
		"hash": "c4a1c17446db63d56701c73f48de8816502dd988078b30bd4d8a22f95d4a3a8b"
	},
	{
		"id": "34e3aa6d065d",
		"ts": "2026-08-09T16:29:29.410Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4230755.38,
		"hash": "34e3aa6d065d1167e1ccafbdd4399604a9a06380606f5f5898033044e24ef818"
	},
	{
		"id": "82bd968c0fdf",
		"ts": "2026-08-09T16:29:29.594Z",
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
		"liquidityUsd": 291717.51,
		"hash": "82bd968c0fdf5e499cd52178a1acc7483fba305b71fd0bf00c12cfe73f56fc97"
	},
	{
		"id": "30f09a95270f",
		"ts": "2026-08-09T16:29:29.787Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 974249.86,
		"hash": "30f09a95270f0ef977a498bedae519986f9f3e99e1e83175003b84d8c5b6e370"
	},
	{
		"id": "42b35b8f6e75",
		"ts": "2026-08-09T16:29:29.972Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9501321.74,
		"hash": "42b35b8f6e75b80adecfe73e4c657cbd6ee53026f836a8250f3fc8b32bc5e754"
	},
	{
		"id": "90013cf09307",
		"ts": "2026-08-09T16:29:30.217Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 81361.33,
		"hash": "90013cf093075266b8b14ef5c57df596b712a61e4b28f8d3b65da0f6ed654f80"
	},
	{
		"id": "ce5fd0007c03",
		"ts": "2026-08-09T16:29:30.403Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1739002.81,
		"hash": "ce5fd0007c036ddb22af31587f1b78b68a53a1bd7c9b0f1d74505be2af4b7ba0"
	},
	{
		"id": "336d5aaa9e47",
		"ts": "2026-08-09T16:29:30.594Z",
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
		"liquidityUsd": 1432388.64,
		"hash": "336d5aaa9e473ee167f9ab9160ee5d620d5a1132f5362894c9bf23186c95ebab"
	},
	{
		"id": "20c5c87155e5",
		"ts": "2026-08-09T16:29:30.769Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 345030.67,
		"hash": "20c5c87155e525442370d2c2c1bc560a460ab0df6a013c847ac629ad48d88233"
	},
	{
		"id": "fe0ce940d209",
		"ts": "2026-08-09T16:29:30.960Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72585.45,
		"hash": "fe0ce940d209926414f35db26daed31fe36627b3db4a78eff357289cbceb6ee9"
	},
	{
		"id": "0c8d94e87f05",
		"ts": "2026-08-09T15:26:48.520Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115175783.98,
		"hash": "0c8d94e87f0522ac8263b6e289160853fb1adfde635e5f68a881f68c399e3da4"
	},
	{
		"id": "c015c2dd8d03",
		"ts": "2026-08-09T15:26:48.762Z",
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
		"liquidityUsd": 16583517.62,
		"hash": "c015c2dd8d03c464760fccba18f81a4e5d25d57b5ba2db838e2a2d115feee650"
	},
	{
		"id": "2b75577e37d9",
		"ts": "2026-08-09T15:26:49.239Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "2b75577e37d99d74e60d43eb0bea52b5db4c73ac40a5000ba0ed34dff247f06e"
	},
	{
		"id": "b725b0c402e2",
		"ts": "2026-08-09T15:26:49.427Z",
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
		"liquidityUsd": 26994686.37,
		"hash": "b725b0c402e276e33e37b769febd9ef55021b15d6eab48ebbfeb19c3dc02f674"
	},
	{
		"id": "ac46e3910575",
		"ts": "2026-08-09T15:26:49.603Z",
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
		"liquidityUsd": 4422851.34,
		"hash": "ac46e3910575f340c062c14cde11a2d3a9b493e5bc087d0058e4feca64eea416"
	},
	{
		"id": "4d6681bbf63b",
		"ts": "2026-08-09T15:26:49.815Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 928924.01,
		"hash": "4d6681bbf63b52a3088da89ffb5055638a317b88ac308ea02da05b0d9ed990a8"
	},
	{
		"id": "1cf57c93270c",
		"ts": "2026-08-09T15:26:50.000Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26994686.37,
		"hash": "1cf57c93270ce7218d2a5ea3b04366c1d3c6096a8dc61c9391e15ab0efb5c419"
	},
	{
		"id": "75edce6c4ad4",
		"ts": "2026-08-09T15:26:50.187Z",
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
		"liquidityUsd": 4843747.25,
		"hash": "75edce6c4ad43fd9c3ee4372a2be6ec345be1c7880592c7df256ada0c81bbe6e"
	},
	{
		"id": "53e18aa5e012",
		"ts": "2026-08-09T15:26:50.368Z",
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
		"liquidityUsd": 69570.29,
		"hash": "53e18aa5e01249a5077660d23c14a9cce3698245968cb41869413bad8e68a15e"
	},
	{
		"id": "27b50c9369f6",
		"ts": "2026-08-09T15:26:50.557Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4229864.66,
		"hash": "27b50c9369f6239b4f528708365fda175c681e308a6f450295254d6055e5a7e9"
	},
	{
		"id": "343658c9def4",
		"ts": "2026-08-09T15:26:50.750Z",
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
		"liquidityUsd": 294401.69,
		"hash": "343658c9def420c9a5d232c24cbef1ac3510d6774a1e80a24a480bc3c112f9fc"
	},
	{
		"id": "863aa5470f09",
		"ts": "2026-08-09T15:26:50.938Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 974790.26,
		"hash": "863aa5470f091d48febdff96271e0fdf304b7681e4582ac2e749cece2cffcecd"
	},
	{
		"id": "beae8a832e8b",
		"ts": "2026-08-09T15:26:51.133Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9417319.82,
		"hash": "beae8a832e8b34b8d78fc52c4df956271d3bd1edd92b22357f5f96817422d3c6"
	},
	{
		"id": "7cc6aec6e626",
		"ts": "2026-08-09T15:26:51.324Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88513.36,
		"hash": "7cc6aec6e626348fea701b8ad841a07ad781b453c06d75d65401e4a6e29a67a6"
	},
	{
		"id": "ed077c2bcebd",
		"ts": "2026-08-09T15:26:51.499Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1739394.58,
		"hash": "ed077c2bcebd753062c67030ba47d17285de0ee12a392a26448fed289f28645b"
	},
	{
		"id": "60e83bc6392a",
		"ts": "2026-08-09T15:26:51.694Z",
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
		"liquidityUsd": 1450254.49,
		"hash": "60e83bc6392a6087824891750f62134be0e95e7cf47dfa7ac1d5739f9845c9b1"
	},
	{
		"id": "f238a017b87d",
		"ts": "2026-08-09T15:26:51.964Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 320161.13,
		"hash": "f238a017b87d4cc3df8e3fa94012b929628e2c15f3a318bc49b471224fc2c1e8"
	},
	{
		"id": "b4cddeef651a",
		"ts": "2026-08-09T15:26:52.221Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72162.04,
		"hash": "b4cddeef651a7549b5b56506caca2f06bd1321de3e697052ebcb31feb12776d3"
	},
	{
		"id": "ee568d7384ad",
		"ts": "2026-08-09T14:30:29.772Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115219231.78,
		"hash": "ee568d7384ad5d51f8c984d9b5a5352fe97f169f34c1f36b04a33660353730b6"
	},
	{
		"id": "872bae616a65",
		"ts": "2026-08-09T14:30:30.077Z",
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
		"liquidityUsd": 17597210.1,
		"hash": "872bae616a65a7e71ea326500436bc2453d3fa41c242d1496c508a028a5988b7"
	},
	{
		"id": "4dc42b59e182",
		"ts": "2026-08-09T14:30:30.321Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "4dc42b59e182378d7ba049c5dd8efb66de5eb93be60bb0150de04927aa181c37"
	},
	{
		"id": "a1ac2d28068b",
		"ts": "2026-08-09T14:30:30.585Z",
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
		"liquidityUsd": 26955898.53,
		"hash": "a1ac2d28068be78cc72ec5f6bf74cc142b5dc8d48e2881854adfdbc8aa3ae11c"
	},
	{
		"id": "52e684c60e18",
		"ts": "2026-08-09T14:30:30.821Z",
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
		"liquidityUsd": 4408915.56,
		"hash": "52e684c60e1844137304dddb15fc32ae44f95a3d57dd987573e7b839a546604b"
	},
	{
		"id": "43459cabc754",
		"ts": "2026-08-09T14:30:31.061Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 933073.72,
		"hash": "43459cabc754f4ee1d210597f5f3280b08b36e09a81fbc557385480703645467"
	},
	{
		"id": "b9470ef44f75",
		"ts": "2026-08-09T14:30:31.313Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26955898.53,
		"hash": "b9470ef44f756e1b00a004745020da68cb797acfd06e52e39550f415201f0442"
	},
	{
		"id": "771eba7a4a3c",
		"ts": "2026-08-09T14:30:31.551Z",
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
		"liquidityUsd": 4834671.26,
		"hash": "771eba7a4a3c195b1d308eb01bead7edd5c577691c700688d25c08bb1be14273"
	},
	{
		"id": "071592ddee55",
		"ts": "2026-08-09T14:30:31.790Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 976762.2,
		"hash": "071592ddee552567f8f57009d05124bf104b22d841aa411dfbf88dcb2d7c99f3"
	},
	{
		"id": "e0579505cfda",
		"ts": "2026-08-09T14:30:32.070Z",
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
		"liquidityUsd": 70067.46,
		"hash": "e0579505cfda2a52637deb0060d10a23fa6adf45b4525493c1c3ed0735831938"
	},
	{
		"id": "105411999a40",
		"ts": "2026-08-09T14:30:32.287Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4217473.57,
		"hash": "105411999a40db45815fa49d2ced5b11a0e74b6633023ff20e74f8c41cad2590"
	},
	{
		"id": "42355be1f71e",
		"ts": "2026-08-09T14:30:32.509Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9427497.8,
		"hash": "42355be1f71e54a882e0dab34d38f8a8c6e59787fb3b815b54b9d92437572f23"
	},
	{
		"id": "527edaf21d13",
		"ts": "2026-08-09T14:30:32.748Z",
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
		"liquidityUsd": 294272.13,
		"hash": "527edaf21d13d3293f0cf05875994368d1f78ba10f1813add9b1d26ca883f19e"
	},
	{
		"id": "07ef920485c3",
		"ts": "2026-08-09T14:30:32.965Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 67573.63,
		"hash": "07ef920485c33044705db95e05e7f675f2b76f9bcdbf221d270f4603c53f594a"
	},
	{
		"id": "444a4102fc5c",
		"ts": "2026-08-09T14:30:33.186Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1730728.32,
		"hash": "444a4102fc5c0d070d096f18b2502d93d0f3180ea24117bf1da8bff620df2254"
	},
	{
		"id": "2f579803d7b1",
		"ts": "2026-08-09T14:30:33.424Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 317663.06,
		"hash": "2f579803d7b158cb367a71e81eef298ec4f0509f2cbd0d43b1a1c7571f07624f"
	},
	{
		"id": "0f49362d2a17",
		"ts": "2026-08-09T14:30:33.639Z",
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
		"liquidityUsd": 1449819.26,
		"hash": "0f49362d2a174c4ffdd462d86ffd76d73fb4ea34ca3d916d58adf44622423db7"
	},
	{
		"id": "2f72596fa2a3",
		"ts": "2026-08-09T14:30:33.861Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1908360.05,
		"hash": "2f72596fa2a3327b266a4494001db4032b392a3debf37c85c35cbb0df7b8fae9"
	},
	{
		"id": "f6b6355d572f",
		"ts": "2026-08-09T13:45:39.463Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115229891.9,
		"hash": "f6b6355d572f9bf0c68a72d615117fcd5d3643b605e900a052c6f09a4264f785"
	},
	{
		"id": "12d60a25e770",
		"ts": "2026-08-09T13:45:39.911Z",
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
		"liquidityUsd": 15317482.53,
		"hash": "12d60a25e770b6b552cb740345c2f85707cb033a12f6e4f77c6178c154f350e9"
	},
	{
		"id": "1ec4164de532",
		"ts": "2026-08-09T13:45:40.151Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "1ec4164de532fd29554daeff38766370669a6f3bed1cfa8324e5fd13b53ef34b"
	},
	{
		"id": "13c32dc4abf9",
		"ts": "2026-08-09T13:45:40.395Z",
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
		"liquidityUsd": 26958926.52,
		"hash": "13c32dc4abf9eae7a1c38c3f4678e77e6dfee458f04c902b2d1955e120c3395e"
	},
	{
		"id": "e0cbd918b92e",
		"ts": "2026-08-09T13:45:40.634Z",
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
		"liquidityUsd": 4408915.56,
		"hash": "e0cbd918b92ec03c36ae97bdcf18e03ed91fc999b11c886ee883f8ae6d9f815f"
	},
	{
		"id": "4d8e789bc03f",
		"ts": "2026-08-09T13:45:40.874Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932091.2,
		"hash": "4d8e789bc03f7e9e17172127e72ed5f51d7241d2f607c7475435cd8148587259"
	},
	{
		"id": "c8e016a77a44",
		"ts": "2026-08-09T13:45:41.112Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26958926.38,
		"hash": "c8e016a77a4499bbec07587ebdf4fb72b198e32180bc769c4091a2f573ee4491"
	},
	{
		"id": "f77b6a1e049f",
		"ts": "2026-08-09T13:45:41.355Z",
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
		"liquidityUsd": 4831652.82,
		"hash": "f77b6a1e049fba31b0fd50347a8c9a0fc668f02c1e03d5450ef1e5fd01dc4bfe"
	},
	{
		"id": "553d5f1d22cb",
		"ts": "2026-08-09T13:45:41.593Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 976802.71,
		"hash": "553d5f1d22cb10427193a16f60859389e77b7f5bbe805b9f91dee5e995e54915"
	},
	{
		"id": "17850c646925",
		"ts": "2026-08-09T13:45:41.836Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4217755.15,
		"hash": "17850c6469251ae426fb186975811950b87b9ea4f36f60458467861a7f7185e5"
	},
	{
		"id": "75a1d57bc1ea",
		"ts": "2026-08-09T13:45:42.060Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 70463.14,
		"hash": "75a1d57bc1eae8367fa66dd97fc1e9b4a72648ccca80a45cb8afdfdf882cf0ac"
	},
	{
		"id": "d259d30c6c29",
		"ts": "2026-08-09T13:45:42.287Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9430516.6,
		"hash": "d259d30c6c29b54d283e8a6f9176a36f07bbe5d8d3058f0ce190069d7bba4dc4"
	},
	{
		"id": "cd5fe16907cf",
		"ts": "2026-08-09T13:45:42.509Z",
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
		"liquidityUsd": 294643.04,
		"hash": "cd5fe16907cf0214931fb28895cb49e97f87f82e623b353a6be1e19eb2e8262b"
	},
	{
		"id": "3a8aa38efa69",
		"ts": "2026-08-09T13:45:42.736Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 75149.9,
		"hash": "3a8aa38efa69bc5569c6460f553bbe9a3a425929b18c86b8b935b64baf9b72cf"
	},
	{
		"id": "7a6b21329cf6",
		"ts": "2026-08-09T13:45:42.960Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1729394.42,
		"hash": "7a6b21329cf66edd4a5d366bfa1347d481e67b915f5f2fbb1b2abd3b70c818fa"
	},
	{
		"id": "30a8d56ce481",
		"ts": "2026-08-09T13:45:43.187Z",
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
		"liquidityUsd": 1491257.51,
		"hash": "30a8d56ce481f70d6b8999fa8a1eeba852f4ab4678f0e62c5241b00671dddc3b"
	},
	{
		"id": "6e5ea5769a8f",
		"ts": "2026-08-09T13:45:43.614Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 320110.28,
		"hash": "6e5ea5769a8f0f9038e5853b2c3f595dd7e8706c2cc94f8140c93a84ca8b3a4a"
	},
	{
		"id": "e021fa58636a",
		"ts": "2026-08-09T13:45:43.841Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1904295.53,
		"hash": "e021fa58636a2cbcd1658413962d0bfc120156035a368baf7b032462dc439dc2"
	},
	{
		"id": "580cdf6ecb41",
		"ts": "2026-08-09T12:41:35.895Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115212263.09,
		"hash": "580cdf6ecb414a4b64019a6f15e8bbd83feffcd8b3f7acea0bf5751f999fdd22"
	},
	{
		"id": "122580596f13",
		"ts": "2026-08-09T12:41:36.229Z",
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
		"liquidityUsd": 18099813.31,
		"hash": "122580596f13ad50b2c4eb5bb82c3f36d69bc5458e83d8b7d888b227200756fe"
	},
	{
		"id": "7bbe58977c9f",
		"ts": "2026-08-09T12:41:36.428Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "7bbe58977c9fa16f199c5d8a78a4ab41b8718f04470cb6792d2e32d9e5aa72e2"
	},
	{
		"id": "9af9fcad555f",
		"ts": "2026-08-09T12:41:36.614Z",
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
		"liquidityUsd": 26915938.66,
		"hash": "9af9fcad555fc0f0e4c8e6d0615bdb955b148073d8c446136424077529616b10"
	},
	{
		"id": "2319c1b6fe9b",
		"ts": "2026-08-09T12:41:36.805Z",
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
		"liquidityUsd": 4410363.15,
		"hash": "2319c1b6fe9b10ee8789ba97ffe9ee779260816149044e6d1355e84b056da52a"
	},
	{
		"id": "175e3f953648",
		"ts": "2026-08-09T12:41:37.000Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 930792.26,
		"hash": "175e3f9536484372ed1c0c54cf918246e768a638442910662a90e2ccc2215c0e"
	},
	{
		"id": "70a1d9bfbf2c",
		"ts": "2026-08-09T12:41:37.183Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26915938.66,
		"hash": "70a1d9bfbf2c992839137973be1f4ec4d63498edb6fa7732455dfa479d23d314"
	}
]
