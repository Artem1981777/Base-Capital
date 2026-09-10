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
	"updatedAt": "2026-09-10T21:21:58.173Z",
	"tokensScored": 16926,
	"verdictsIssued": 16926,
	"safe": 14350,
	"risky": 1247,
	"likelyRug": 1329,
	"ticks": 969
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "f9024ff7e3d8",
		"ts": "2026-09-10T21:21:53.408Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117813651.93,
		"hash": "f9024ff7e3d8e8a7103202f77197fabe9cf95d102bdea1c45af7d1d53b23fcc3"
	},
	{
		"id": "52aa1688c3e1",
		"ts": "2026-09-10T21:21:53.668Z",
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
		"liquidityUsd": 17714279.23,
		"hash": "52aa1688c3e19694d35632bad243daaf31561e4f3396b3944aba22a3ab47259d"
	},
	{
		"id": "65bac7738389",
		"ts": "2026-09-10T21:21:53.919Z",
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
		"liquidityUsd": 989359.23,
		"hash": "65bac7738389265b13f2ccd4b7cb096d3706a0155826ad5e382a6a0ebcf9d2bf"
	},
	{
		"id": "3e8e2e8b47ac",
		"ts": "2026-09-10T21:21:54.170Z",
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
		"liquidityUsd": 32816310.74,
		"hash": "3e8e2e8b47ac424092b31e1fc308809a2ce5c331f55b0b63dadd5b8210513017"
	},
	{
		"id": "37abfc5b5de5",
		"ts": "2026-09-10T21:21:54.448Z",
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
		"liquidityUsd": 4039074.77,
		"hash": "37abfc5b5de54cf1c9410c3c60ee2b7207337269988df2c39edc34e4b2145b1c"
	},
	{
		"id": "efec0e22b294",
		"ts": "2026-09-10T21:21:54.728Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1151082.52,
		"hash": "efec0e22b294fbf5aa27937f1d63dc13aa62365f56e92cf9a52ee9f0ce0d7afa"
	},
	{
		"id": "4a9dd4828a70",
		"ts": "2026-09-10T21:21:54.992Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1727526.52,
		"hash": "4a9dd4828a7071d2be993c03452b63fd4282e9d5bc35c133a183122592e6a208"
	},
	{
		"id": "1caa948cf12d",
		"ts": "2026-09-10T21:21:55.251Z",
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
		"liquidityUsd": 1103075.25,
		"hash": "1caa948cf12db7f021c1874294bb553af93ab9aa0c04f682e009456a7f56c4d8"
	},
	{
		"id": "a108a9c438ee",
		"ts": "2026-09-10T21:21:55.516Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1727526.52,
		"hash": "a108a9c438eea0936017aa1c9abc7b1cb7cb69782b5778e5d96dc9696a3ff0ad"
	},
	{
		"id": "c96c33e50b54",
		"ts": "2026-09-10T21:21:55.774Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 575344.56,
		"hash": "c96c33e50b5403ffc24123436a640bb9e5d9cc7cdbdc264687f5c0909feb8564"
	},
	{
		"id": "105bd20f6876",
		"ts": "2026-09-10T21:21:56.020Z",
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
		"liquidityUsd": 509438.64,
		"hash": "105bd20f6876b3fe3cac1bf4c154a102439406915c976f8d5e3bfffb5b174e10"
	},
	{
		"id": "d8e21b603547",
		"ts": "2026-09-10T21:21:56.257Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1577178.12,
		"hash": "d8e21b6035476653ccb1eadd1dcca21055228daf74368431f8f14dd654d67e53"
	},
	{
		"id": "3ee115406a87",
		"ts": "2026-09-10T21:21:56.496Z",
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
		"liquidityUsd": 870399.95,
		"hash": "3ee115406a87424986eb2f14c8bf179bf060e9614346d31e83b9ddfca6f30025"
	},
	{
		"id": "fd36d0dad3d5",
		"ts": "2026-09-10T21:21:56.734Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 338350.76,
		"hash": "fd36d0dad3d5ac02a65ab634a8c4e4b0ddde3f2928f2585df75a91011fdbd8a6"
	},
	{
		"id": "6f87b9b5f83b",
		"ts": "2026-09-10T21:21:56.979Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14338064.48,
		"hash": "6f87b9b5f83b203c6b5859bc775ce44ad47894da3e67be0b8cf41d7bce5fa6b7"
	},
	{
		"id": "f628f05bae8b",
		"ts": "2026-09-10T21:21:57.216Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 429269.86,
		"hash": "f628f05bae8ba7d0208d855eb06dc4b7df69d2e92ca139c8f1876e5cd95b59dc"
	},
	{
		"id": "b3a25c386160",
		"ts": "2026-09-10T21:21:57.456Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244820.03,
		"hash": "b3a25c386160757fdd945c2349a685ef34358442b42da2b14647512ee088319c"
	},
	{
		"id": "cbc1b2027ace",
		"ts": "2026-09-10T21:21:57.694Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 225016.4,
		"hash": "cbc1b2027ace1efc2e5284bcb764f204fae24fcad4c67dc9b12fc6faf948aca3"
	},
	{
		"id": "bd94443bf041",
		"ts": "2026-09-10T21:21:57.934Z",
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
		"liquidityUsd": 773828.59,
		"hash": "bd94443bf04122202bdbf79d594e59e0dbe76fe1a02a10efcf32299369c3fce8"
	},
	{
		"id": "c3a7f799c192",
		"ts": "2026-09-10T21:21:58.172Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1004694.92,
		"hash": "c3a7f799c1922fbe169ca66faee9613a3d5247aa8ddd961debd8188771388314"
	},
	{
		"id": "a6e3eda9b4d7",
		"ts": "2026-09-10T18:02:23.020Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118082540.9,
		"hash": "a6e3eda9b4d7f1438c07a1b032e21511f7c57b454e1e284f5dfeb8b00b6f5443"
	},
	{
		"id": "a8fc1d6e27a7",
		"ts": "2026-09-10T18:02:23.500Z",
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
		"liquidityUsd": 17247331.4,
		"hash": "a8fc1d6e27a7f54f82f433e468adfe314b88d9d16b73ce1356d4c63cd21d1d09"
	},
	{
		"id": "c0ad3ff3fc01",
		"ts": "2026-09-10T18:02:23.961Z",
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
		"liquidityUsd": 993417.37,
		"hash": "c0ad3ff3fc01223ed5afaecc73db0d41e17099a9130b52ad58f7541f97e5a57f"
	},
	{
		"id": "4173fa5faf80",
		"ts": "2026-09-10T18:02:24.204Z",
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
		"liquidityUsd": 32879159.8,
		"hash": "4173fa5faf804c83dadb98dd6a1f92878dd0fdddd168e41be08e9f0d892eb0b7"
	},
	{
		"id": "b8d0ff5a1ea8",
		"ts": "2026-09-10T18:02:24.452Z",
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
		"liquidityUsd": 4086728.71,
		"hash": "b8d0ff5a1ea86deee188ed30dc69340324df06a388f4ad2479090f47508a4158"
	},
	{
		"id": "b12443328661",
		"ts": "2026-09-10T18:02:24.711Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1154586.73,
		"hash": "b12443328661cdaa6cdb3a41aaa869309b4549d419e5a43d6070ac72e7ddb5b5"
	},
	{
		"id": "8c8484937e0f",
		"ts": "2026-09-10T18:02:24.968Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1712893.22,
		"hash": "8c8484937e0f5c2a40886ef00471fdd2af8fbdcdfc6efd5d92e65679938c09ee"
	},
	{
		"id": "70e7cb222015",
		"ts": "2026-09-10T18:02:25.215Z",
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
		"liquidityUsd": 1104944.34,
		"hash": "70e7cb222015b881181a08a8f64370c44495a111a078eb3c2f7bb89f2b5e10fa"
	},
	{
		"id": "acbc4499b83f",
		"ts": "2026-09-10T18:02:25.676Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1710076.65,
		"hash": "acbc4499b83f7521dc3b49827ac9c5b3522759380b0ed6bc39102c9a56be9efb"
	},
	{
		"id": "5a78b7d8b95a",
		"ts": "2026-09-10T18:02:25.923Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 498379.85,
		"hash": "5a78b7d8b95a6b0832871156d1809c6d9aa1b1d03314ecae75fc12bb07e5d222"
	},
	{
		"id": "834e4f1e85af",
		"ts": "2026-09-10T18:02:26.155Z",
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
		"liquidityUsd": 521980.01,
		"hash": "834e4f1e85afed03064c1add302e819c8be747bc09d0ae7d8649dacea5e96b32"
	},
	{
		"id": "68ecf24490ea",
		"ts": "2026-09-10T18:02:26.383Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1644727.45,
		"hash": "68ecf24490eac8d655ed1db17118f1ffba7d192b0342587b8d7a35cc175e5c39"
	},
	{
		"id": "07a94edaa352",
		"ts": "2026-09-10T18:02:26.611Z",
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
		"liquidityUsd": 803396.8,
		"hash": "07a94edaa352407502233b0094b54746b8fcecf2d9c58d8b23e43d8f77f5a0c7"
	},
	{
		"id": "23055f526717",
		"ts": "2026-09-10T18:02:26.842Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14524138.71,
		"hash": "23055f5267174b5c8f4ce126c3e5186086af05cee64156fd1a658280b1023acd"
	},
	{
		"id": "49acd29a767d",
		"ts": "2026-09-10T18:02:27.080Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 337950.14,
		"hash": "49acd29a767d377e6e1e742419b988c982f3bd16c00fb3bbcf25fd8dda1ff2b4"
	},
	{
		"id": "ceef7eb80428",
		"ts": "2026-09-10T18:02:27.306Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1176909.47,
		"hash": "ceef7eb80428e26f82018c7fd87bfbd0991e9b6dbe3fb08b089226c45c690c0c"
	},
	{
		"id": "6f9f9e6fa7be",
		"ts": "2026-09-10T18:02:27.533Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 611239.79,
		"hash": "6f9f9e6fa7bef71d73226305f89df19988d3e1a9512d33429a11bf478bfe3e56"
	},
	{
		"id": "b43e747584cd",
		"ts": "2026-09-10T18:02:27.769Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 243077.04,
		"hash": "b43e747584cd9b62858fb88eae078c208b4711297d9a989c322a48c246f753d6"
	},
	{
		"id": "50031f967b6f",
		"ts": "2026-09-10T18:02:28.001Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 423318.97,
		"hash": "50031f967b6ffd91b4aa86be33724fedc54c3b7d5c4aa0baf67550a88b226deb"
	},
	{
		"id": "d2214824b3b1",
		"ts": "2026-09-10T14:46:20.166Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117489064.99,
		"hash": "d2214824b3b1654660016a24f22841ae46366a110507c62638b80fd42c62cd0f"
	},
	{
		"id": "4e0deced6be1",
		"ts": "2026-09-10T14:46:20.534Z",
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
		"liquidityUsd": 18718994.8,
		"hash": "4e0deced6be13d8821bc69041f03d659e1adcb9906e2d54130cb52c123faa47e"
	},
	{
		"id": "43197dd7ac4d",
		"ts": "2026-09-10T14:46:20.757Z",
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
		"liquidityUsd": 986006.41,
		"hash": "43197dd7ac4dee7edf42c6a1f56b53cddb90aac1c7cd91334a2dcae80999a7b5"
	},
	{
		"id": "b4a88e0b5da3",
		"ts": "2026-09-10T14:46:20.973Z",
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
		"liquidityUsd": 32714086.84,
		"hash": "b4a88e0b5da3658abb9b0967b617912881510059b9c0b1676258b37a4dd38494"
	},
	{
		"id": "232045a78eef",
		"ts": "2026-09-10T14:46:21.190Z",
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
		"liquidityUsd": 4065632.19,
		"hash": "232045a78eef51172474b14ada87c08a3ed3220e7b5cdbb14af43ade96778fd9"
	},
	{
		"id": "e7071f0463e7",
		"ts": "2026-09-10T14:46:21.400Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1148090.98,
		"hash": "e7071f0463e758139eab4a97c54bea84c64ea67885c4973b3277fb052efd8a60"
	},
	{
		"id": "9e64f21c32bc",
		"ts": "2026-09-10T14:46:21.616Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1673453.05,
		"hash": "9e64f21c32bcc8037ed9678854687480f7e6c6edbc4da8ad239448c62a015e51"
	},
	{
		"id": "54d1a11dd7f7",
		"ts": "2026-09-10T14:46:21.849Z",
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
		"liquidityUsd": 2504910.34,
		"hash": "54d1a11dd7f727bdbe7fa01c2637c3b3878657fbcdb6233c9db9cfaf58af1ebd"
	},
	{
		"id": "71ed855f33bc",
		"ts": "2026-09-10T14:46:22.243Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1673453.05,
		"hash": "71ed855f33bc2787a5f93a7bab91c36e60c12396a76e7d4a2ab413dac4984d4a"
	},
	{
		"id": "aa78ed5504bb",
		"ts": "2026-09-10T14:46:22.470Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 531703.35,
		"hash": "aa78ed5504bb2335032ae49387fca89db97bfb08296355ec8c0dfc0e8e111791"
	},
	{
		"id": "0a7d6242df46",
		"ts": "2026-09-10T14:46:22.673Z",
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
		"liquidityUsd": 512510.17,
		"hash": "0a7d6242df46d38811f36d24e5f4eec8270c2b1d85a173a4e47d27b4cbd979f7"
	},
	{
		"id": "1fc93bcd81df",
		"ts": "2026-09-10T14:46:22.883Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13988811.66,
		"hash": "1fc93bcd81dfcf6eb07efd3c2a22a88e1210f827f254e3c50fe5999e15ca0f56"
	},
	{
		"id": "b6b21b0dc315",
		"ts": "2026-09-10T14:46:23.097Z",
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
		"liquidityUsd": 776644.17,
		"hash": "b6b21b0dc315f2d9bb36ef89bc58ef8dd185ceb7f779f69173854073d7e8ed6d"
	},
	{
		"id": "72ca461541b0",
		"ts": "2026-09-10T14:46:23.302Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 237708.75,
		"hash": "72ca461541b0b431b94cd26077e28f42814c2cef1f5772395c23d7ddd333b7b4"
	},
	{
		"id": "b41f645392ce",
		"ts": "2026-09-10T14:46:23.510Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1520839.49,
		"hash": "b41f645392cefb3f4a16891af08d4f0e758dc71a5633f4e33740920a7fe9a3b7"
	},
	{
		"id": "dbf597c1317b",
		"ts": "2026-09-10T14:46:23.707Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 338281.22,
		"hash": "dbf597c1317b4509f1902da08b515c0db1200d10a63bd2fc8eb1da504c1bb345"
	},
	{
		"id": "498b6d7f37c4",
		"ts": "2026-09-10T14:46:23.911Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 615425.86,
		"hash": "498b6d7f37c49f5594823e163bd79cb36211e0285b577b682dc665cf09d35cd6"
	},
	{
		"id": "6f3005f154a0",
		"ts": "2026-09-10T14:46:24.112Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 418155.54,
		"hash": "6f3005f154a0066cdc8e991b3a8321abfaeb45d398edc62dcaaddfd0b9663cd3"
	},
	{
		"id": "745727c9a9ef",
		"ts": "2026-09-10T14:46:24.321Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1158953.96,
		"hash": "745727c9a9efd86136f798b8e25caec54bf2b53a3aa269ccc8c8ed5273a95ac9"
	},
	{
		"id": "ef24ca9b676f",
		"ts": "2026-09-10T10:31:04.800Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118416128.6,
		"hash": "ef24ca9b676f02b521e798a4d5e1c46f3b984a7927be9c47d38ec3f78648bbfa"
	},
	{
		"id": "12836e79f1f5",
		"ts": "2026-09-10T10:31:05.068Z",
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
		"liquidityUsd": 18083123.5,
		"hash": "12836e79f1f5edfbd40d79e8781b9a0905535ada20d6999abc6404dc6cddddd2"
	},
	{
		"id": "aa17c169bb76",
		"ts": "2026-09-10T10:31:05.316Z",
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
		"liquidityUsd": 1000555.17,
		"hash": "aa17c169bb76dc71f092b7ce880c47b54d0d37d12d426f72b806514131e655c1"
	},
	{
		"id": "4cd033510791",
		"ts": "2026-09-10T10:31:05.576Z",
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
		"liquidityUsd": 31659602.2,
		"hash": "4cd0335107918b09f35938b3a9117f3239c919853f6453c6d64f068d1f89e8a7"
	},
	{
		"id": "c031dcdfcb0a",
		"ts": "2026-09-10T10:31:05.839Z",
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
		"liquidityUsd": 4129712.69,
		"hash": "c031dcdfcb0aac735802db8551664e1af99a235da696e05060b20109e1f0e406"
	},
	{
		"id": "6c190f016cb3",
		"ts": "2026-09-10T10:31:06.099Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1167668.33,
		"hash": "6c190f016cb39d97091f157d1a27f41ed185521bff64dde80d38a85fb97bc2b3"
	},
	{
		"id": "9781b5d1242b",
		"ts": "2026-09-10T10:31:06.360Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 1718933.23,
		"hash": "9781b5d1242b2fa59ae958d0fc7ec556d872178da37e64caf0b331d136df8547"
	},
	{
		"id": "56a745bce291",
		"ts": "2026-09-10T10:31:06.622Z",
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
		"liquidityUsd": 2485344.33,
		"hash": "56a745bce291aa1c4c3b916ece73df49be2a626dbc7d659d0b3e1e16c6f94507"
	},
	{
		"id": "d33101b26996",
		"ts": "2026-09-10T10:31:06.903Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1719523.33,
		"hash": "d33101b26996872804ad9b4740e8a2e3a48667e5955fd762f99e19892d599737"
	},
	{
		"id": "88f2fca5ffd4",
		"ts": "2026-09-10T10:31:07.220Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 565801.26,
		"hash": "88f2fca5ffd4c126153219c9b39f56c29608a22a2e974f5626734e5a306e7eeb"
	},
	{
		"id": "112c37838f4c",
		"ts": "2026-09-10T10:31:07.452Z",
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
		"liquidityUsd": 537481.5,
		"hash": "112c37838f4c5c49193e29574250d8d62fbe01ba108d9a8e460cdd82db936204"
	},
	{
		"id": "eea9bbafd735",
		"ts": "2026-09-10T10:31:07.696Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14309211.29,
		"hash": "eea9bbafd735d706309722c08088c3a3006904b471bf55c325bd25dc3146f0e1"
	},
	{
		"id": "e50298f1b79e",
		"ts": "2026-09-10T10:31:07.928Z",
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
		"liquidityUsd": 800908.62,
		"hash": "e50298f1b79eaf07bb5eba938fb73818e787900fd1433c72f5181584cf52b927"
	},
	{
		"id": "4ca8e22b76f0",
		"ts": "2026-09-10T10:31:08.169Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1585309.29,
		"hash": "4ca8e22b76f0d65e8fb5a528287da3771cd5cf4b861139c9cfd1db49aa539f21"
	},
	{
		"id": "9a2d6b3bf405",
		"ts": "2026-09-10T10:31:08.400Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 239455.96,
		"hash": "9a2d6b3bf405f322f7f943cb4b0f7057a423bd94b786180197993c0b93605d14"
	},
	{
		"id": "1118e72b4e5b",
		"ts": "2026-09-10T10:31:08.644Z",
		"symbol": "KAI",
		"token": "0xca18A528Ea897040f715edC92e6e4572780c5ca1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 301807.98,
		"hash": "1118e72b4e5b2cdd682538f3d25a6000c08e8b8a1d22d98326057fbdf9c37d3e"
	},
	{
		"id": "5eb6306218a5",
		"ts": "2026-09-10T10:31:08.885Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 622764.74,
		"hash": "5eb6306218a57e14fb363a7d1c063a137f9c3f64b8a1c4c98cf6b9cea5d295c9"
	},
	{
		"id": "020a2b464e97",
		"ts": "2026-09-10T10:31:09.117Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 355707.81,
		"hash": "020a2b464e9719e1dfea42f24eed5618467d53166d3e98f3911e6f289b3d7dac"
	},
	{
		"id": "75e538657e30",
		"ts": "2026-09-10T10:31:09.364Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3268822.18,
		"hash": "75e538657e30ea0e9144ed01bff0e020f617a6679a9feb08ca37734e4d2b5890"
	},
	{
		"id": "ab1362f30c58",
		"ts": "2026-09-10T05:32:34.701Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118338024.86,
		"hash": "ab1362f30c58229373ae050972f30ce6d2c3b3bff48f9140fcf13edacbb55269"
	},
	{
		"id": "ee93314cdd13",
		"ts": "2026-09-10T05:32:35.019Z",
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
		"liquidityUsd": 18641223.8,
		"hash": "ee93314cdd13861a10c5bb060c80173ef0efda07b57fb69c6e141acf3e15cb21"
	},
	{
		"id": "a1cfe2d5238a",
		"ts": "2026-09-10T05:32:35.241Z",
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
		"liquidityUsd": 1003607.03,
		"hash": "a1cfe2d5238a11f7e0e1adcf330eb44f1603866baa51bc2825a4531ca97e0bf5"
	},
	{
		"id": "523a5527f57a",
		"ts": "2026-09-10T05:32:35.620Z",
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
		"liquidityUsd": 32050052.2,
		"hash": "523a5527f57aba760f28ccf1a090ac4ab3f628ae306e1f8652c3f4deadca0519"
	},
	{
		"id": "d9e92d7be6f5",
		"ts": "2026-09-10T05:32:35.838Z",
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
		"liquidityUsd": 4257480.92,
		"hash": "d9e92d7be6f5bee04578ffc3320424012575cdb4139151b3d37f6bb6e17ed2d9"
	},
	{
		"id": "63ebb434c806",
		"ts": "2026-09-10T05:32:36.051Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1176605.15,
		"hash": "63ebb434c80609d3abf7703f581eb5d73ab5af03213a95e55175fc91685d773c"
	},
	{
		"id": "417a8181a49f",
		"ts": "2026-09-10T05:32:36.277Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 1617091.31,
		"hash": "417a8181a49f434dda9d22e57d95f27ac9614a12c3f0447a9a2af60ca1b4937d"
	},
	{
		"id": "1501971660d2",
		"ts": "2026-09-10T05:32:36.665Z",
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
		"liquidityUsd": 1865787.99,
		"hash": "1501971660d22146c96c0a60e42c5bba94c15f2e247419ce107c609a630e11fa"
	},
	{
		"id": "1c524f3fdcae",
		"ts": "2026-09-10T05:32:36.902Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1617091.31,
		"hash": "1c524f3fdcaea5f2df2eb19f51413387fd79864adc688b9ae72032431bf1ff76"
	},
	{
		"id": "bb5695d9fdc3",
		"ts": "2026-09-10T05:32:37.112Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 592315.4,
		"hash": "bb5695d9fdc3c714bfa87bb3216747c9ecfd0804943d871484d1d0f8ec7bea02"
	},
	{
		"id": "644868071a10",
		"ts": "2026-09-10T05:32:37.325Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14537937.68,
		"hash": "644868071a10f53cea8bf396d116191f347b4df6fa74eac9c27442e59ef09ca8"
	},
	{
		"id": "cb504db50ab2",
		"ts": "2026-09-10T05:32:37.530Z",
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
		"liquidityUsd": 558337.66,
		"hash": "cb504db50ab2bba9eb8c31a6d2c5e6b3f6ea42f3c7ec7c3c8959c2fbe6af426c"
	},
	{
		"id": "0280344d9f22",
		"ts": "2026-09-10T05:32:37.749Z",
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
		"liquidityUsd": 849177.33,
		"hash": "0280344d9f2234d14101042b3df9a32821af3d87d76669b6a79b6ab51105cf97"
	},
	{
		"id": "09eec509836e",
		"ts": "2026-09-10T05:32:37.958Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1639035.26,
		"hash": "09eec509836ee1deb742989c473b9a540997508ae34c15e1907480b4bb7b3f53"
	},
	{
		"id": "52ffaae2318f",
		"ts": "2026-09-10T05:32:38.164Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 374206.19,
		"hash": "52ffaae2318f9608f94a8c3a5407712a015f2b599efb62972c7c0728a3f28eca"
	},
	{
		"id": "df1310174f6c",
		"ts": "2026-09-10T05:32:38.397Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261340.46,
		"hash": "df1310174f6cbc2a48993f8ac2093f62378066daf800cc773b6083e2aa7b6b6a"
	},
	{
		"id": "2b899db5fae2",
		"ts": "2026-09-10T05:32:38.585Z",
		"symbol": "KAI",
		"token": "0xca18A528Ea897040f715edC92e6e4572780c5ca1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 307709.11,
		"hash": "2b899db5fae2c3cec46e304dd7641160a9dce4a88e63bd2fb72cbc8684dd9ad7"
	},
	{
		"id": "575257216b73",
		"ts": "2026-09-10T05:32:38.786Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 622452.72,
		"hash": "575257216b734e663558f5ac28f26517024ffc04ac042220a73155a1010f0888"
	},
	{
		"id": "d922cdfe2f66",
		"ts": "2026-09-10T05:32:39.008Z",
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
		"liquidityUsd": 694482.78,
		"hash": "d922cdfe2f6677aa85df67c4a6185623e91fb5694a5150f08bc22dfe2e985192"
	},
	{
		"id": "28c14a5993df",
		"ts": "2026-09-10T00:47:47.765Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118157969.63,
		"hash": "28c14a5993dfdc2f612ad8fc131894bbb539a70d4ba7b10f88e022f94d029a63"
	},
	{
		"id": "bbf1222ede29",
		"ts": "2026-09-10T00:47:48.255Z",
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
		"liquidityUsd": 19426441.49,
		"hash": "bbf1222ede290a37257b6cc1d86d07e5ea69474d3dd13c41bd98327fd8bfece9"
	},
	{
		"id": "fe1d23928bc6",
		"ts": "2026-09-10T00:47:48.551Z",
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
		"liquidityUsd": 1006474.63,
		"hash": "fe1d23928bc6fb57a22770698e47f7ef3c0205a85395c777ce2889dc890ed350"
	},
	{
		"id": "a3fd0a43168e",
		"ts": "2026-09-10T00:47:48.826Z",
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
		"liquidityUsd": 31929134.11,
		"hash": "a3fd0a43168e1be40b0f36101184462ee49ddad6150d802637db8ef2b4b27eda"
	},
	{
		"id": "7327776a42af",
		"ts": "2026-09-10T00:47:49.300Z",
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
		"liquidityUsd": 4249423.88,
		"hash": "7327776a42af924106787e6f611278843c35a8b6b4467e801613b56df59baf97"
	},
	{
		"id": "11744d31c166",
		"ts": "2026-09-10T00:47:49.579Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1182776.59,
		"hash": "11744d31c1667ac96cbc3cbcd81ac7a01c7e0350bac4af4eeaa8ba3719a6fee6"
	},
	{
		"id": "24a29309cc3b",
		"ts": "2026-09-10T00:47:49.888Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 232615.54,
		"hash": "24a29309cc3b41d2c371ab6a1e9b91bb4dc6d881937379b1087132087603f157"
	},
	{
		"id": "4dc88558665b",
		"ts": "2026-09-10T00:47:50.181Z",
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
		"liquidityUsd": 2586876.32,
		"hash": "4dc88558665b8dac136cf076bd7d01f75120b72f84db51f5ba990ae0301dace2"
	},
	{
		"id": "6638862af083",
		"ts": "2026-09-10T00:47:51.479Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1612772.61,
		"hash": "6638862af0831abcaff3325798dbed511d8a3f4d3dcb956847a30389e271b562"
	},
	{
		"id": "e8d4ee1c8572",
		"ts": "2026-09-10T00:47:51.757Z",
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
		"liquidityUsd": 14116314.81,
		"hash": "e8d4ee1c85720e4fd17e053207b0b38caabd98de119d5f69da43497414de9333"
	},
	{
		"id": "c0bea6738ccc",
		"ts": "2026-09-10T00:47:52.015Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 619925,
		"hash": "c0bea6738cccb4444f4583c9b56ba98dcee44a123e6df2243f16e901ada4cba4"
	},
	{
		"id": "aa4adcf7646b",
		"ts": "2026-09-10T00:47:52.274Z",
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
		"liquidityUsd": 585210.49,
		"hash": "aa4adcf7646be3c2e30db7e4b03ec540be560acf6fad68bfdf1417b5889962fc"
	},
	{
		"id": "692ebde2d80f",
		"ts": "2026-09-10T00:47:52.535Z",
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
		"liquidityUsd": 851126.38,
		"hash": "692ebde2d80f2d87513abc98b14187d991ffdab7b0e4dff796f94a93225166b2"
	},
	{
		"id": "a5bccf1af828",
		"ts": "2026-09-10T00:47:52.795Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1596420.89,
		"hash": "a5bccf1af82867639b72cad971a4caae517c5448fcc37ba1096ad0e9ab5742e4"
	},
	{
		"id": "51592d10b8eb",
		"ts": "2026-09-10T00:47:53.051Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 317288.26,
		"hash": "51592d10b8eb179f7fa055793ddc302a653d2da0a9fc3dbe67dfe6941eb5097c"
	},
	{
		"id": "60a3a2b8cde4",
		"ts": "2026-09-10T00:47:53.310Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265359.15,
		"hash": "60a3a2b8cde40d9642cdd9928ab8049d7b0527e79205ce4dfbdef35704f9b55f"
	},
	{
		"id": "7948867ff476",
		"ts": "2026-09-10T00:47:53.571Z",
		"symbol": "KAI",
		"token": "0xca18A528Ea897040f715edC92e6e4572780c5ca1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 292914.15,
		"hash": "7948867ff47671c652be3d94c63d68423ebeeacab61be5927ec3d35c23e6e895"
	},
	{
		"id": "b3f6226f4d35",
		"ts": "2026-09-10T00:47:53.830Z",
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
		"liquidityUsd": 668664.53,
		"hash": "b3f6226f4d35222be07b407c4b2a143973e48414181ebd85d319a6e4d9cdab2e"
	},
	{
		"id": "e593963e71f1",
		"ts": "2026-09-09T22:13:36.988Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118013692.61,
		"hash": "e593963e71f14d425bbf82edf68d1d0e53ee87a46be12ba925bafe611e7d0735"
	},
	{
		"id": "0a391fe5e901",
		"ts": "2026-09-09T22:13:37.249Z",
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
		"liquidityUsd": 13989462,
		"hash": "0a391fe5e90125e00e958a106f8008959e2d3d3ecb4dd14a62b0c197123ae25d"
	},
	{
		"id": "0260b9241eed",
		"ts": "2026-09-09T22:13:37.538Z",
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
		"liquidityUsd": 1002455.41,
		"hash": "0260b9241eed806ab4cbd9a4782a72d5b0f8575cc1310a9100181f7eba5f97df"
	},
	{
		"id": "4f4b38bec33b",
		"ts": "2026-09-09T22:13:37.807Z",
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
		"liquidityUsd": 31755035.63,
		"hash": "4f4b38bec33bedd1b5be84d924dd32dbff393a413818efd96e70572fc0330e70"
	},
	{
		"id": "a80ff80a1828",
		"ts": "2026-09-09T22:13:38.060Z",
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
		"liquidityUsd": 4223064.76,
		"hash": "a80ff80a18285d78beafefa05601e4ce12ae38f5ec3fe63cc993eccf4b635269"
	},
	{
		"id": "bc213829d78f",
		"ts": "2026-09-09T22:13:38.343Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1169111.37,
		"hash": "bc213829d78f3e1a17e7ef60ed93c517829615712e0071324772cfbd08e79c1c"
	},
	{
		"id": "bdb4d36942be",
		"ts": "2026-09-09T22:13:38.605Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1454673.44,
		"hash": "bdb4d36942be9a2a3d15496e14b555be5306c110047fcb90feeedd10f26a6621"
	},
	{
		"id": "5fb9aedf7779",
		"ts": "2026-09-09T22:13:38.879Z",
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
		"liquidityUsd": 2574158.31,
		"hash": "5fb9aedf7779663f88af9a7fdf86a2cb6ba8a7a9e7395ccfde5b19fce6a76621"
	},
	{
		"id": "e1ed6be25dd9",
		"ts": "2026-09-09T22:13:39.152Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1455844.4,
		"hash": "e1ed6be25dd9a0034db38d90e8dbeae540aa68555996bb0a9d7c3d88120704ca"
	},
	{
		"id": "4bf89446b399",
		"ts": "2026-09-09T22:13:39.420Z",
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
		"liquidityUsd": 13949944.35,
		"hash": "4bf89446b3992b4b999195ec65461ff90dc4e1239c1ac282cc57fea5ef955c49"
	},
	{
		"id": "29a06fe99f45",
		"ts": "2026-09-09T22:13:39.667Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 587559.61,
		"hash": "29a06fe99f45caf22bf8990daf602e35ae4f7bb80c1d005c53be1950d2122ab3"
	},
	{
		"id": "3ca34248a6ba",
		"ts": "2026-09-09T22:13:39.897Z",
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
		"liquidityUsd": 551102.6,
		"hash": "3ca34248a6ba556dcfd79082bb9fa011828cda66ef51ffb4c0a70ebe8456403a"
	},
	{
		"id": "9960b849e17f",
		"ts": "2026-09-09T22:13:40.133Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1618201.54,
		"hash": "9960b849e17fa6da9c026aba3ec615f8483d8a7d9f1b35861d7ee9b69c043274"
	},
	{
		"id": "011a725856d8",
		"ts": "2026-09-09T22:13:40.380Z",
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
		"liquidityUsd": 837479.37,
		"hash": "011a725856d8245b37fd19b7c0ab13f66ab4f2601eb8b4e8c55d0990e6d6196c"
	},
	{
		"id": "91456207457d",
		"ts": "2026-09-09T22:13:40.618Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 334206.98,
		"hash": "91456207457d73b58733beaf564886eab4e5b7a3aa76fd6a22b02e58b7c3fe70"
	},
	{
		"id": "351358e90e17",
		"ts": "2026-09-09T22:13:40.868Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 268722.55,
		"hash": "351358e90e176c7c6ebd5c4a40a6a9867d34e70f16057c3c23ce6e8a46ea6979"
	},
	{
		"id": "61e30e79b4d6",
		"ts": "2026-09-09T22:13:41.099Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 631910.4,
		"hash": "61e30e79b4d69db0978cf61000123fa810851971964c47011a059afaea61dce2"
	},
	{
		"id": "5af24ea69c77",
		"ts": "2026-09-09T22:13:41.338Z",
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
		"liquidityUsd": 662323.22,
		"hash": "5af24ea69c77f9448cddab90137591ce409b782ae3a45d6171bcaa7d551c1dd7"
	},
	{
		"id": "87304e745913",
		"ts": "2026-09-09T22:13:41.578Z",
		"symbol": "KAI",
		"token": "0xca18A528Ea897040f715edC92e6e4572780c5ca1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279920.56,
		"hash": "87304e745913d910e5b6ae30178c033d418eb9fda7125ccec5bc78871fd32389"
	},
	{
		"id": "b739aada9bfe",
		"ts": "2026-09-09T19:40:58.154Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117942432.58,
		"hash": "b739aada9bfe0222da2de5d24a1cb2ec29768c2f38c3090aeddd820d8d28b71f"
	},
	{
		"id": "922a40a095b1",
		"ts": "2026-09-09T19:40:58.610Z",
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
		"liquidityUsd": 14549179.07,
		"hash": "922a40a095b17bec00bfe24870889812f8897e47f81642cb5d1365ca9ce36a3b"
	},
	{
		"id": "43ca09828648",
		"ts": "2026-09-09T19:40:58.880Z",
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
		"liquidityUsd": 1006387.61,
		"hash": "43ca09828648d8b409543fe68d23cc432a6cb866c630e71ca79f67ab03f0cf0b"
	},
	{
		"id": "61be097cc1d6",
		"ts": "2026-09-09T19:40:59.342Z",
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
		"liquidityUsd": 31986428.88,
		"hash": "61be097cc1d6e195bfb7edf5222cc63aabe872163eef0e48f183409c711cca5b"
	},
	{
		"id": "c2d5294155b3",
		"ts": "2026-09-09T19:40:59.592Z",
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
		"liquidityUsd": 4355014.99,
		"hash": "c2d5294155b3cd7332caaf0a77b631f2a4da67fdf1c8b4bfa77f5e56088e5262"
	},
	{
		"id": "7ec16ca0bec3",
		"ts": "2026-09-09T19:40:59.859Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1210540.51,
		"hash": "7ec16ca0bec3e80eede82140ba318436cff8fb77a93b9bd9279bc6fa4a50b7c6"
	},
	{
		"id": "957fd7c053d9",
		"ts": "2026-09-09T19:41:00.119Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 856099.47,
		"hash": "957fd7c053d95a3c149c2e9b1d9466928e57e23cbf12046f7a1e7c65ad9059c5"
	},
	{
		"id": "33315541a75e",
		"ts": "2026-09-09T19:41:00.448Z",
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
		"liquidityUsd": 2601948.8,
		"hash": "33315541a75e831ef61d562241b5e5c2da3649134cde8ef5981c2cfd25bc4049"
	},
	{
		"id": "79fc5e4691cf",
		"ts": "2026-09-09T19:41:01.307Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 856099.47,
		"hash": "79fc5e4691cf351d5428e222e2730dc909635585c48122b160d7c39cab419f5e"
	},
	{
		"id": "8cb8e7c8929a",
		"ts": "2026-09-09T19:41:01.758Z",
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
		"liquidityUsd": 14365987.54,
		"hash": "8cb8e7c8929a0cce2a5ec08de5bcf0cd75e0093bf766e1301657655f3b462fd8"
	},
	{
		"id": "23269b0a00ba",
		"ts": "2026-09-09T19:41:02.010Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 592627.63,
		"hash": "23269b0a00ba1aa272540a6e98b4779e2f338d8a21954747a957f4a2541780c7"
	},
	{
		"id": "5e41327d559f",
		"ts": "2026-09-09T19:41:02.260Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 269771.69,
		"hash": "5e41327d559f273d04ef883fe50b4e33794fac456f4b9c9a10f9b07d229d7099"
	},
	{
		"id": "7758690981a7",
		"ts": "2026-09-09T19:41:02.516Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1712749.06,
		"hash": "7758690981a7b0dd7247155a3f6acd090ec28832af10f752c9caf75a99a9f0a0"
	},
	{
		"id": "e3d3f9f889b6",
		"ts": "2026-09-09T19:41:02.768Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 401981.41,
		"hash": "e3d3f9f889b68c415ef9aa9f639ff6a5b373380c4da4c97e542cbd0182ee00e6"
	},
	{
		"id": "ff4627a39f01",
		"ts": "2026-09-09T19:41:03.236Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 902802.55,
		"hash": "ff4627a39f01b3ac6828122bf31a104bd7b5dbec7e4cbf19771fe6ff967adcad"
	},
	{
		"id": "3ca9160b5a4f",
		"ts": "2026-09-09T19:41:03.488Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 574231.58,
		"hash": "3ca9160b5a4f6bb48f202888a10a1c228d20043d98031ce9315884e38ab2bffe"
	},
	{
		"id": "14ad0ad4c644",
		"ts": "2026-09-09T19:41:03.768Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 702644.74,
		"hash": "14ad0ad4c644a11c0898d4a43bba420301c08a28470c41c43e9af9cf174e6727"
	},
	{
		"id": "b1c50a21acf6",
		"ts": "2026-09-09T19:41:04.001Z",
		"symbol": "KAI",
		"token": "0xca18A528Ea897040f715edC92e6e4572780c5ca1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 296739.69,
		"hash": "b1c50a21acf674f96e57c65d0791f609304274cb3f653d3c66444f740cf732e6"
	},
	{
		"id": "b5ccfc00f0a2",
		"ts": "2026-09-09T19:41:04.234Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 626219.73,
		"hash": "b5ccfc00f0a247775d3f817bc92f3c17a96483299678267816815059f9ff75ef"
	},
	{
		"id": "37e119ea80be",
		"ts": "2026-09-09T17:00:07.084Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118201233.69,
		"hash": "37e119ea80beb0a35c62d62f940a3147e9a266b14da5f0f2def8d423de1799f7"
	},
	{
		"id": "925a1c89b73a",
		"ts": "2026-09-09T17:00:07.455Z",
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
		"liquidityUsd": 19168474.46,
		"hash": "925a1c89b73aa56265e0035c9be4d27fbcabe48f659074cf3544f4f7a1c95451"
	},
	{
		"id": "634e96ebc506",
		"ts": "2026-09-09T17:00:07.826Z",
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
		"liquidityUsd": 1012918.58,
		"hash": "634e96ebc50660aafd342853a067044a3b349c676b252001de70bc0adf7e43b0"
	},
	{
		"id": "9da3402414f0",
		"ts": "2026-09-09T17:00:08.180Z",
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
		"liquidityUsd": 31663583.88,
		"hash": "9da3402414f0d1c31cad7c76982c3ae0ede109dcbff711b8d65ad3e4ff8db6f0"
	},
	{
		"id": "5cf78580ff92",
		"ts": "2026-09-09T17:00:08.531Z",
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
		"liquidityUsd": 4395222.25,
		"hash": "5cf78580ff929cde7f264a79cd30b77b2d54d7b389120349d0791c6ff489c6ae"
	},
	{
		"id": "c3ff4b770845",
		"ts": "2026-09-09T17:00:08.909Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1213389.15,
		"hash": "c3ff4b770845eab1078cec3f2add6bc9c5992b303cc8333673c30a9235dbac04"
	},
	{
		"id": "c7434bed7c80",
		"ts": "2026-09-09T17:00:09.283Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 906252.15,
		"hash": "c7434bed7c804aadeb5f6055634f41e5230bc45cdf7d2e4908f8614272765161"
	},
	{
		"id": "bb4b049eba30",
		"ts": "2026-09-09T17:00:09.640Z",
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
		"liquidityUsd": 2618997.19,
		"hash": "bb4b049eba30e7321ea71518438fab33977a5969b449164d95284341003afa7c"
	},
	{
		"id": "21bd6bf110ee",
		"ts": "2026-09-09T17:00:10.243Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 906252.15,
		"hash": "21bd6bf110ee41599e0e6de75e925cfe2e094eebb78948321b0b762ee8f94a37"
	},
	{
		"id": "fa9f298d2e77",
		"ts": "2026-09-09T17:00:10.596Z",
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
		"liquidityUsd": 14498246.56,
		"hash": "fa9f298d2e77a71d53755df1b4e3c4d6b2007096431fc3f071eb268741f8647a"
	},
	{
		"id": "29879098b810",
		"ts": "2026-09-09T17:00:10.931Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 614190.72,
		"hash": "29879098b8100a1ae4acf1baa40e791e896f88a0cf3d74ff364cafac51e1ecf5"
	},
	{
		"id": "ed87ca8d856c",
		"ts": "2026-09-09T17:00:11.254Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 262431.33,
		"hash": "ed87ca8d856c2d9b3458b83ad0bfe65131c8c0e2f15503191dbfe79b27bd0f94"
	},
	{
		"id": "7a357c5795f1",
		"ts": "2026-09-09T17:00:11.599Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 401192.69,
		"hash": "7a357c5795f1b7ed68767dfe277044336dfcd3666df1786aeb6c866d88ad899c"
	},
	{
		"id": "a07c93170caf",
		"ts": "2026-09-09T17:00:11.943Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1501234.85,
		"hash": "a07c93170caf621d143a0d4f6ee1d848cae60fdad85c64c04cf00214f6ee3cc0"
	},
	{
		"id": "ff0f4edda832",
		"ts": "2026-09-09T17:00:12.281Z",
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
		"liquidityUsd": 931411.54,
		"hash": "ff0f4edda8322752c84da13f73f748a466e32b02b8681d551c130ba2c25cb36e"
	},
	{
		"id": "c7e0f7e60054",
		"ts": "2026-09-09T17:00:12.623Z",
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
		"liquidityUsd": 711901.06,
		"hash": "c7e0f7e60054e97dbe312f1337083d65e5bc45603fc32999178ec38688d30d50"
	},
	{
		"id": "870beb54b7a7",
		"ts": "2026-09-09T17:00:12.957Z",
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
		"liquidityUsd": 609484.74,
		"hash": "870beb54b7a749b110aa858fb73154ebb82974560c933b641ecf076e35d6e203"
	},
	{
		"id": "0e083680c70c",
		"ts": "2026-09-09T17:00:13.278Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 644898.61,
		"hash": "0e083680c70c10a710c56723436bbdbaf5a20d1a9c8fb6f3a04f1f3fe4864460"
	},
	{
		"id": "73a5a59efc62",
		"ts": "2026-09-09T12:41:36.026Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118198617.46,
		"hash": "73a5a59efc62f00f8c62248d24c8837e7086fff829ed9d6176a95ac20a2d05c9"
	},
	{
		"id": "389a592bb583",
		"ts": "2026-09-09T12:41:36.310Z",
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
		"liquidityUsd": 19397194.61,
		"hash": "389a592bb583c30fae2029db2f5dfd48dea58a38225c2277853c8bafff8b59a4"
	},
	{
		"id": "b6a1b852e151",
		"ts": "2026-09-09T12:41:36.575Z",
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
		"liquidityUsd": 1018553.24,
		"hash": "b6a1b852e151a387e0e789e286a5774a31191e413fdac71d20d10baeb9e80fa3"
	},
	{
		"id": "47ddae3f4862",
		"ts": "2026-09-09T12:41:36.858Z",
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
		"liquidityUsd": 31907612.46,
		"hash": "47ddae3f4862d5d4f24d828383d89c2a3044c2c7ec8ea722939e0e9e7d093b39"
	},
	{
		"id": "c6351a169b6c",
		"ts": "2026-09-09T12:41:37.266Z",
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
		"liquidityUsd": 4447205.23,
		"hash": "c6351a169b6ccc5e1b5de41b20989b9fdfed6cf3b074e2c99c9610b1fd016750"
	},
	{
		"id": "bf095bed01b7",
		"ts": "2026-09-09T12:41:37.549Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1217367.57,
		"hash": "bf095bed01b7ff45036d6d206d2b7f861d028db6d4206a23b413d9fa7599b5d2"
	},
	{
		"id": "10e496315c4c",
		"ts": "2026-09-09T12:41:37.829Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1274253.44,
		"hash": "10e496315c4c066aab8a71779807100a6e47733adeac22ec1cae830a94742f1b"
	},
	{
		"id": "ffce15072772",
		"ts": "2026-09-09T12:41:38.326Z",
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
		"liquidityUsd": 2634373.05,
		"hash": "ffce150727729c7d3a2e3282b153948b0853e0dd1879a3799cf4686d866643d5"
	},
	{
		"id": "4537cebac095",
		"ts": "2026-09-09T12:41:38.582Z",
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
		"liquidityUsd": 15644822.06,
		"hash": "4537cebac0958dba1df0bd2955cc9734f417f2691e7be4ca22fbfb39a492cac1"
	},
	{
		"id": "db6f989461b3",
		"ts": "2026-09-09T12:41:38.884Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 74,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.48,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 812722.56,
		"hash": "db6f989461b3702d41904884b7d90ce7afbd5a2dac585983aae20b638beccb9e"
	},
	{
		"id": "318d462001d5",
		"ts": "2026-09-09T12:41:39.106Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 705451.25,
		"hash": "318d462001d598dadba701b1d818fdf0d6646fbf3e7f203dfd6184acc422e3b6"
	},
	{
		"id": "5dee62e94d29",
		"ts": "2026-09-09T12:41:39.342Z",
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
		"liquidityUsd": 1019299.74,
		"hash": "5dee62e94d29045d7d2a9c530ab92fb52191bcbe2c68260c48ad9b040d850b80"
	},
	{
		"id": "3222c0cb566d",
		"ts": "2026-09-09T12:41:39.589Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 375861.63,
		"hash": "3222c0cb566d4126cf204d6e00123283ed139bde4ed8f468cb91d1c5a82f8284"
	},
	{
		"id": "bb0662583571",
		"ts": "2026-09-09T12:41:39.825Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1521037.36,
		"hash": "bb06625835712822b5580747e039788a6e5286c880e06ac81ff9acdf3a2603b5"
	},
	{
		"id": "873acfed885d",
		"ts": "2026-09-09T12:41:40.051Z",
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
		"liquidityUsd": 750908.6,
		"hash": "873acfed885d9a9f8de57e25c90b23a84511a7c0a3607b2599174e82c034e1c2"
	},
	{
		"id": "bcf737ad56c4",
		"ts": "2026-09-09T12:41:40.312Z",
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
		"liquidityUsd": 277278.04,
		"hash": "bcf737ad56c4bc4a3181a26a7272a91c32cc5acccd2a86d66f88228d9974fd78"
	},
	{
		"id": "a3b3ba0b1a31",
		"ts": "2026-09-09T12:41:40.549Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 644392.18,
		"hash": "a3b3ba0b1a31ea88148b5e21de29d22bc3c705ec12efd010f951ad40b125c172"
	},
	{
		"id": "e7e989f94db0",
		"ts": "2026-09-09T12:41:40.787Z",
		"symbol": "LAPTOP",
		"token": "0xE8cFFACa7FbBbC78bcd4aBb0A8151707aF290B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5500207.6,
		"hash": "e7e989f94db0d878f567e6f40c44b55ce899679516877017bd660f0bc23837c7"
	},
	{
		"id": "ad9146504464",
		"ts": "2026-09-09T07:50:17.211Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117799095.5,
		"hash": "ad914650446458632bd6a168b782ec39f33fe937f563b311c10496b737024b16"
	},
	{
		"id": "a05ca41a8ef9",
		"ts": "2026-09-09T07:50:17.585Z",
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
		"liquidityUsd": 19692900.22,
		"hash": "a05ca41a8ef9ae0524939779409976aa9fcf89ca5aff1a3fd84fde3076292e56"
	},
	{
		"id": "94482dd4b523",
		"ts": "2026-09-09T07:50:17.810Z",
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
		"liquidityUsd": 1019642.75,
		"hash": "94482dd4b523207eb390a918d1924499a28c0222316d2a9ec61f1a9074c98462"
	},
	{
		"id": "0eebd6f1a313",
		"ts": "2026-09-09T07:50:18.022Z",
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
		"liquidityUsd": 32790059.03,
		"hash": "0eebd6f1a313df7c913b8d60869fe0599262ff65fd7ce667f6e5665adce2e095"
	},
	{
		"id": "b09af4e560f8",
		"ts": "2026-09-09T07:50:18.261Z",
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
		"liquidityUsd": 4452456.97,
		"hash": "b09af4e560f85d27d9c4645d571d00e36dd36a100d330a9780b16d8c84facd13"
	},
	{
		"id": "c78dadb7ce07",
		"ts": "2026-09-09T07:50:18.458Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1222726.13,
		"hash": "c78dadb7ce070662660ba5e2d1cedc78b1f0055f013a39ecc4380670f2055e4b"
	},
	{
		"id": "3b4ed24b5b52",
		"ts": "2026-09-09T07:50:18.649Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32790059.03,
		"hash": "3b4ed24b5b525d8d17b24a7f9fed7185c11712d54f3436dfcafa1da1e5b123cd"
	},
	{
		"id": "673cead5f3b1",
		"ts": "2026-09-09T07:50:18.877Z",
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
		"liquidityUsd": 2371951.25,
		"hash": "673cead5f3b16baf5335a2369d257fdfa3cdd26aa421bf3de036107d3434dfb4"
	},
	{
		"id": "c66b6bba3136",
		"ts": "2026-09-09T07:50:19.080Z",
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
		"liquidityUsd": 15863081.06,
		"hash": "c66b6bba3136e237197f8ef4ba31e0214fc432b69e5289f55a86101c2bdf988f"
	},
	{
		"id": "53c5d3149077",
		"ts": "2026-09-09T07:50:19.286Z",
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
		"liquidityUsd": 290978.97,
		"hash": "53c5d3149077fa04cd5506f54571d176e713c7a04fbb816c1e64be72198979a5"
	},
	{
		"id": "038af1c23c13",
		"ts": "2026-09-09T07:50:19.510Z",
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
		"liquidityUsd": 927837.3,
		"hash": "038af1c23c138dc5788ff6316e2bad5204e4020ec9f7ca644c04ee0d2a9cf091"
	},
	{
		"id": "8daa1b43bebb",
		"ts": "2026-09-09T07:50:19.705Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 425051.87,
		"hash": "8daa1b43bebb4c98c9bafd64192934d46996dd723ff531ad19941e9cd5be0463"
	}
]
