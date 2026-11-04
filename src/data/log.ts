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
	"updatedAt": "2026-11-04T18:24:35.678Z",
	"tokensScored": 22222,
	"verdictsIssued": 22222,
	"safe": 18968,
	"risky": 1565,
	"likelyRug": 1689,
	"ticks": 1250
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "740909bf0c66",
		"ts": "2026-11-04T18:24:31.207Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155215678.8,
		"hash": "740909bf0c6603ec4811e81239d464f5d37e118fd266b822754f1da3c24f403f"
	},
	{
		"id": "11eb072f4222",
		"ts": "2026-11-04T18:24:31.489Z",
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
		"liquidityUsd": 16340192.76,
		"hash": "11eb072f42220eefa98def5bf8bc60b885f4aeb4e10fa681e02c32ed9aa5fe17"
	},
	{
		"id": "886534ef0d2a",
		"ts": "2026-11-04T18:24:31.751Z",
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
		"liquidityUsd": 248317.88,
		"hash": "886534ef0d2a94fc48e438dda1c8f798b716f690fb118a4c26246263d437eac6"
	},
	{
		"id": "69d5bcfe30d3",
		"ts": "2026-11-04T18:24:32.007Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5429876.8,
		"hash": "69d5bcfe30d30667c62796129296263400760f0cd2d28bbcf7df12d77bdf8974"
	},
	{
		"id": "d9633bebf48d",
		"ts": "2026-11-04T18:24:32.256Z",
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
		"liquidityUsd": 935495.04,
		"hash": "d9633bebf48da9123b5add30a8ef844ca4caad74109de07c645f04138f41e3b5"
	},
	{
		"id": "482af7518848",
		"ts": "2026-11-04T18:24:32.498Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1117659.95,
		"hash": "482af751884899d5b2a1c06efd9626dbd816b1e0ded6d36278db0f4ba043744a"
	},
	{
		"id": "66388f65901b",
		"ts": "2026-11-04T18:24:32.818Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5429876.8,
		"hash": "66388f65901b9e532d2087751fab4af3699d5646f35c8a4c28b2034c6633c7cb"
	},
	{
		"id": "546dd369213a",
		"ts": "2026-11-04T18:24:33.064Z",
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
		"liquidityUsd": 1869479.91,
		"hash": "546dd369213a1290dff2d1099f04b8071d8639301186bc6979705544193312b4"
	},
	{
		"id": "835790af577a",
		"ts": "2026-11-04T18:24:33.307Z",
		"symbol": "Reboot",
		"token": "0x6F18277E5566090Ad8Ab35e401ce9155739BFb07",
		"score": 77,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.54,
		"flags": [
			"new_pair_under_24h",
			"high_holder_concentration"
		],
		"liquidityUsd": 379714.77,
		"hash": "835790af577ae81697176417f2d0223d962d40b8a31e7132030be27b19a78a3f"
	},
	{
		"id": "1de3ad8483bf",
		"ts": "2026-11-04T18:24:33.561Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2193088.72,
		"hash": "1de3ad8483bf154e6a23dab96eefa812e9ee04139dde4f7d3b8ad70adbc5f7c5"
	},
	{
		"id": "8234296ff7f0",
		"ts": "2026-11-04T18:24:33.800Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1154150.98,
		"hash": "8234296ff7f0504ff2759a320f153842e417445a94d7c02e12fc6cd9a6c9c7bb"
	},
	{
		"id": "96e3ddd9c172",
		"ts": "2026-11-04T18:24:34.028Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1752734.18,
		"hash": "96e3ddd9c172a0492b8f53c238f47b53433aa4efc30d80d2f04645d4cf48c131"
	},
	{
		"id": "c7fb70f6eb0a",
		"ts": "2026-11-04T18:24:34.279Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59265.74,
		"hash": "c7fb70f6eb0a5945c4d5cd01239b850652975e2361f1986c06d408a55fd24e42"
	},
	{
		"id": "53544a12de94",
		"ts": "2026-11-04T18:24:34.520Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 408108.43,
		"hash": "53544a12de946c5bd77628abf77500313cbfe673ab651665796474a5f4ffaec1"
	},
	{
		"id": "047afba00092",
		"ts": "2026-11-04T18:24:34.755Z",
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
		"liquidityUsd": 2438006.84,
		"hash": "047afba000929b38ed58e48d9740be94e22353be0df55ae312d5dc85a4272944"
	},
	{
		"id": "c7fdcdd33afe",
		"ts": "2026-11-04T18:24:34.979Z",
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
		"liquidityUsd": 8047261.74,
		"hash": "c7fdcdd33afe112b8ce18eeeaabf2113ff42eef1e33f167e9d75ec6a8f10c902"
	},
	{
		"id": "0b9408a4fc19",
		"ts": "2026-11-04T18:24:35.221Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 98589.51,
		"hash": "0b9408a4fc195b5a0673af1c9bafc5bc15970ba611d6358e327cc5aca63ec61c"
	},
	{
		"id": "a7fe1c9fa10a",
		"ts": "2026-11-04T18:24:35.449Z",
		"symbol": "BOOTR",
		"token": "0xB1C3a6ac90E324c4072aD4B2a71c5d9382F9565c",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 89688.78,
		"hash": "a7fe1c9fa10ab194be4c5ff62d94358a6d2b68a61c2d1950bd0dbcb3ea81de71"
	},
	{
		"id": "43c0a028e1e1",
		"ts": "2026-11-04T18:24:35.678Z",
		"symbol": "DENIM",
		"token": "0x0BDdfA9a0a1Eb326593262c7aF47ee091dB9cB70",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 317389.52,
		"hash": "43c0a028e1e11de50e9b3da3bab3c72b4c8ea88ebf2289d8bf7b764941e0ba37"
	},
	{
		"id": "f0b4c7752092",
		"ts": "2026-11-04T10:23:16.753Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 152419056.45,
		"hash": "f0b4c7752092cbcb8b83f8870e357627fadc0d8d075989da26c916379dc02379"
	},
	{
		"id": "56f6a2c3b520",
		"ts": "2026-11-04T10:23:17.112Z",
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
		"liquidityUsd": 15947043.97,
		"hash": "56f6a2c3b5207db67bb39d3eaa05b7de8de78ef29dd4c1f16ec1bab3bd671a86"
	},
	{
		"id": "12a2125c65a3",
		"ts": "2026-11-04T10:23:17.326Z",
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
		"liquidityUsd": 241033.58,
		"hash": "12a2125c65a381ebb05995b9e6f924514fa393abe4bcdf06104acfaafd41e49c"
	},
	{
		"id": "159a09bd820b",
		"ts": "2026-11-04T10:23:17.531Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5410703.26,
		"hash": "159a09bd820baa69fe68ac34768c3827cc7d34439661f24aad4120e231321d44"
	},
	{
		"id": "0ddc9087100b",
		"ts": "2026-11-04T10:23:17.760Z",
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
		"liquidityUsd": 889675.44,
		"hash": "0ddc9087100bf3ca7c3423bb2e541f5312bbc06b919cbca8b9e5215f57f848fc"
	},
	{
		"id": "0028cf36d0ee",
		"ts": "2026-11-04T10:23:17.980Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1066912.9,
		"hash": "0028cf36d0eed6bce76490ed1c1222da26f30ac8114596f0594111788c77add0"
	},
	{
		"id": "f3d266ef1bdb",
		"ts": "2026-11-04T10:23:18.217Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5410703.26,
		"hash": "f3d266ef1bdb54f06a0911f2c2dd6d2e5208c25cc38176f78beaf2f4abd3b4b3"
	},
	{
		"id": "5fe8457b045f",
		"ts": "2026-11-04T10:23:18.411Z",
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
		"liquidityUsd": 1676969,
		"hash": "5fe8457b045f4e8eb1392c53b3479ea0e081c28434e7716d32bad9b1d93a978a"
	},
	{
		"id": "d044b1e963a3",
		"ts": "2026-11-04T10:23:18.629Z",
		"symbol": "Reboot",
		"token": "0x6F18277E5566090Ad8Ab35e401ce9155739BFb07",
		"score": 77,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.54,
		"flags": [
			"new_pair_under_24h",
			"high_holder_concentration"
		],
		"liquidityUsd": 519719.15,
		"hash": "d044b1e963a313364f787bc3c18f59a2ce64afb4f8003daa2a0d0ef1ecb4112d"
	},
	{
		"id": "4fc5a660ebe2",
		"ts": "2026-11-04T10:23:18.820Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1063435.88,
		"hash": "4fc5a660ebe25d3ea5c84e1fbf5ade6f83539011068a93074490d94b5174605e"
	},
	{
		"id": "f916d1ab1522",
		"ts": "2026-11-04T10:23:19.021Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3521570.39,
		"hash": "f916d1ab152278d2d177a483344ed86afe9ed6ba6e8ab3805907bd18b63740e1"
	},
	{
		"id": "b1832956e9b7",
		"ts": "2026-11-04T10:23:19.228Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 379412.11,
		"hash": "b1832956e9b73385f155c30acc79199ad7b9e7040996eb7056f48abc7e1e0478"
	},
	{
		"id": "fbf0117639e0",
		"ts": "2026-11-04T10:23:19.423Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1746110.04,
		"hash": "fbf0117639e040e86235bf2de98135c7be1fe947f80fae8ace77ffb9bc1b7462"
	},
	{
		"id": "671be74c6f8e",
		"ts": "2026-11-04T10:23:19.607Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 99471.63,
		"hash": "671be74c6f8e003bf95d490471af2c09d4a6cb1c378aa77a1049a79d115dcf97"
	},
	{
		"id": "399b6f9e8428",
		"ts": "2026-11-04T10:23:19.822Z",
		"symbol": "CLANKER",
		"token": "0x1bc0c42215582d5A085795f4baDbaC3ff36d1Bcb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1642863.98,
		"hash": "399b6f9e842883a34dcc880353d5b6500fbb4277e2eace5c95397674c6b0063c"
	},
	{
		"id": "4fc430080925",
		"ts": "2026-11-04T10:23:20.029Z",
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
		"liquidityUsd": 228383.13,
		"hash": "4fc43008092579285da65a82c82fa707d20f9f9c9ee88b5932e390178e125d92"
	},
	{
		"id": "822bd685128d",
		"ts": "2026-11-04T10:23:20.232Z",
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
		"liquidityUsd": 2775647.59,
		"hash": "822bd685128dffcd3ec79ce5046785439c318fc41ee026213505f9adbe2cdc8f"
	},
	{
		"id": "63986f33c70d",
		"ts": "2026-11-04T10:23:20.433Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 96992.64,
		"hash": "63986f33c70d22df464751aa30e3a9cf7ddd667b98bc610a72813ff0ffeca4dd"
	},
	{
		"id": "dc0590b6eb8a",
		"ts": "2026-11-04T10:23:20.651Z",
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
		"liquidityUsd": 8105511.57,
		"hash": "dc0590b6eb8a608585d189fb2bae00de4900dd63c3323fed8c58399f4619f36b"
	},
	{
		"id": "b24ab24e38ba",
		"ts": "2026-11-04T02:52:37.697Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 149623553.42,
		"hash": "b24ab24e38ba60b4bbd5b596458ad36201155b3620e5aa6e56bdc8ca7cb08856"
	},
	{
		"id": "f065976c1c6e",
		"ts": "2026-11-04T02:52:38.186Z",
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
		"liquidityUsd": 15509865.03,
		"hash": "f065976c1c6e7312f37e5d45e2ad88c33a9e3da41eaa99ab9edae09d34784846"
	},
	{
		"id": "9604cb77f6ab",
		"ts": "2026-11-04T02:52:38.653Z",
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
		"liquidityUsd": 231052.33,
		"hash": "9604cb77f6ab890aa29f027735a44b81b7b369db71d4dab07e7ce8aad11d920a"
	},
	{
		"id": "2bca49434d46",
		"ts": "2026-11-04T02:52:38.922Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5379443.28,
		"hash": "2bca49434d463c8e02df34bec12c575868afb1688fdf285c324133f85dac2db6"
	},
	{
		"id": "9b8b40212d30",
		"ts": "2026-11-04T02:52:39.192Z",
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
		"liquidityUsd": 872067.82,
		"hash": "9b8b40212d30b72cdad4d710d15dee024fbe65ea3a76ba85c8cdfb223490f5cc"
	},
	{
		"id": "442599c51e0d",
		"ts": "2026-11-04T02:52:39.448Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1037540.36,
		"hash": "442599c51e0de28c73d059b5661abc4e5be2dd21c7e4762d2f8675aab9bf1030"
	},
	{
		"id": "7723618bef20",
		"ts": "2026-11-04T02:52:39.711Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5379443.28,
		"hash": "7723618bef20573b5a102c16667fc5e65f706f8b34d3f040b1bc0ebf5852718c"
	},
	{
		"id": "c939a1ced0f0",
		"ts": "2026-11-04T02:52:39.965Z",
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
		"liquidityUsd": 920810.65,
		"hash": "c939a1ced0f066eda2b017cbaaead2486b47071ee1ddc9c792e07a4e90689a4f"
	},
	{
		"id": "13ff1e2652a5",
		"ts": "2026-11-04T02:52:40.224Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3400589.05,
		"hash": "13ff1e2652a5ddaea39b345fc691a293c6d02735831786ce4b6df2d66d95b68e"
	},
	{
		"id": "5a577843dbfd",
		"ts": "2026-11-04T02:52:40.485Z",
		"symbol": "Reboot",
		"token": "0x6F18277E5566090Ad8Ab35e401ce9155739BFb07",
		"score": 77,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.54,
		"flags": [
			"new_pair_under_24h",
			"high_holder_concentration"
		],
		"liquidityUsd": 568838.53,
		"hash": "5a577843dbfd79c85cc9fd5ac25da6868c7b47112927554912cb1bcbc945196d"
	},
	{
		"id": "b8f14dd780fa",
		"ts": "2026-11-04T02:52:40.717Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1719364.64,
		"hash": "b8f14dd780fa1bc408af75c85574519691cc7a9921fbdf8252be115919e29450"
	},
	{
		"id": "f9b4f0164a1d",
		"ts": "2026-11-04T02:52:40.969Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1038480.14,
		"hash": "f9b4f0164a1ddf29b06f50c9e07e48a372f2fec06a1fc9d0d2b3cf832771008e"
	},
	{
		"id": "93a1fc0a8424",
		"ts": "2026-11-04T02:52:41.214Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 378096.34,
		"hash": "93a1fc0a84240f32032ecf6adc4702074f7a57b3d4dd8f1f7543029c78da3797"
	},
	{
		"id": "3e51690a56f4",
		"ts": "2026-11-04T02:52:41.446Z",
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
		"liquidityUsd": 227170.72,
		"hash": "3e51690a56f42c240cf47e9f51f5191439250419bfb95b8416b2e4608eb9a870"
	},
	{
		"id": "aaec38f351b8",
		"ts": "2026-11-04T02:52:41.695Z",
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
		"liquidityUsd": 2438617.31,
		"hash": "aaec38f351b86b66978e5e64d91768d953f80470047a03c3cb61081849702c10"
	},
	{
		"id": "f98fe0a5116b",
		"ts": "2026-11-04T02:52:41.930Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 100817.12,
		"hash": "f98fe0a5116b5c9df3de2f6ff0a8ec86ff19d4b5d8753074e949b90442c6014b"
	},
	{
		"id": "3500214a525f",
		"ts": "2026-11-04T02:52:42.182Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55780.22,
		"hash": "3500214a525f2dc509012626981cf0adc79ca4234540eb1e37466f750344eaab"
	},
	{
		"id": "a42328e5fa91",
		"ts": "2026-11-04T02:52:42.430Z",
		"symbol": "worth",
		"token": "0xB200000000000000000000585fd80C20af698f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 91635.43,
		"hash": "a42328e5fa91ff2ea5e519005ac6b908a517025deb82c83fd7f5b8dfab292725"
	},
	{
		"id": "fc057fadd95f",
		"ts": "2026-11-04T02:52:42.664Z",
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
		"liquidityUsd": 2756914.65,
		"hash": "fc057fadd95fe04984229d473781445d7b357bb8d4a449cf6a6fafb5e2f5e848"
	},
	{
		"id": "b70c26974e2d",
		"ts": "2026-11-03T22:50:44.155Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150986680.07,
		"hash": "b70c26974e2d8488a34c5172a57a1cf54fd0a4cfe6e5590d08b62cc3a952008c"
	},
	{
		"id": "562f6f5ec71b",
		"ts": "2026-11-03T22:50:44.459Z",
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
		"liquidityUsd": 15757203.63,
		"hash": "562f6f5ec71b6a6e4c830ebe7a3af00b1c3e7f87d7be7c230ca0ec5e5fa3efc8"
	},
	{
		"id": "7a5b36f09e05",
		"ts": "2026-11-03T22:50:44.733Z",
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
		"liquidityUsd": 236652.76,
		"hash": "7a5b36f09e05280c021aebf23a221e38c4d957b19dda7fb9ccb34bf1a67d4562"
	},
	{
		"id": "c9e38bbd63ae",
		"ts": "2026-11-03T22:50:45.001Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5408318.12,
		"hash": "c9e38bbd63aef4d45435a712ce985e7c87d69d3f12d9b70c21a9eabfd86978f9"
	},
	{
		"id": "99bb56a0abaa",
		"ts": "2026-11-03T22:50:45.251Z",
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
		"liquidityUsd": 973717.12,
		"hash": "99bb56a0abaa8d8a39a51852a2e797b183b7179e7ee018c70caaa5514c089ab8"
	},
	{
		"id": "9fc179c3084f",
		"ts": "2026-11-03T22:50:45.524Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1060085.91,
		"hash": "9fc179c3084fd4a371081f89a29afc5766efc3c793217e66543ba6ff0aba63c4"
	},
	{
		"id": "aa20fad10b58",
		"ts": "2026-11-03T22:50:45.797Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5408318.12,
		"hash": "aa20fad10b58eb2a87bd1f56bd7347cafa8c52df7ff1dd8c4d823bab090a6999"
	},
	{
		"id": "01e9a45bed6f",
		"ts": "2026-11-03T22:50:46.058Z",
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
		"liquidityUsd": 1134539.56,
		"hash": "01e9a45bed6fd9c84aa652bffb736dda9a3a530cd53b17214fe73439f4266a2d"
	},
	{
		"id": "8336d57bffd0",
		"ts": "2026-11-03T22:50:46.316Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3455147.04,
		"hash": "8336d57bffd0b95240dcd6e8b3d2a8eaee9edaca90bba379e8e40bb0732cfede"
	},
	{
		"id": "c034797e03a0",
		"ts": "2026-11-03T22:50:46.598Z",
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
		"liquidityUsd": 1739906.49,
		"hash": "c034797e03a04d5699318bc72812dc6fcafc607fbefa26db87bc390ba6667111"
	},
	{
		"id": "681b65c10eec",
		"ts": "2026-11-03T22:50:47.020Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1062057.25,
		"hash": "681b65c10eec38202add4b9bc07dc69fcfd04da3b97a5fe0dddf08bf22279b23"
	},
	{
		"id": "947e4940628a",
		"ts": "2026-11-03T22:50:47.255Z",
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
		"liquidityUsd": 2436395.5,
		"hash": "947e4940628a0b2db29204b772a87470d032e71b36a0a2ef8667a8085fce0d4c"
	},
	{
		"id": "0531a87209e8",
		"ts": "2026-11-03T22:50:47.482Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 343728.98,
		"hash": "0531a87209e8b3ccb4491452b41216f05d47f49ba92685f4fdf8d8460b69474b"
	},
	{
		"id": "3af30ed1ab9c",
		"ts": "2026-11-03T22:50:47.719Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 104204.03,
		"hash": "3af30ed1ab9cff5e5614471f5199e3015d5b804d6104bcde7a999f857ff30549"
	},
	{
		"id": "5fffe6aad2d4",
		"ts": "2026-11-03T22:50:47.955Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55948.47,
		"hash": "5fffe6aad2d40fce5bddfe2bfea4414821849df4461e21ada56a2fa79107d325"
	},
	{
		"id": "2cd8a37c94ad",
		"ts": "2026-11-03T22:50:48.248Z",
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
		"liquidityUsd": 1134632.69,
		"hash": "2cd8a37c94ad4e0384c2e64400997189e87bf2963e9b0f8b3667eaab2705fe59"
	},
	{
		"id": "8ccb5fff07e7",
		"ts": "2026-11-03T22:50:48.503Z",
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
		"liquidityUsd": 227918.35,
		"hash": "8ccb5fff07e793ae4632db0db519e6d2a0c91dc1293a671eb2cb2f45ae23c953"
	},
	{
		"id": "622816a326d7",
		"ts": "2026-11-03T22:50:48.726Z",
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
		"liquidityUsd": 7815592.07,
		"hash": "622816a326d7ef2a5f49411380ae3e33aac6f8e1340dcc17d7e3baccad027f3e"
	},
	{
		"id": "f6d310668539",
		"ts": "2026-11-03T22:50:48.962Z",
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
		"liquidityUsd": 2808431.87,
		"hash": "f6d310668539f1a737c688a27cda6a01943c6254524761a17978304c64de8732"
	},
	{
		"id": "1c0e1135a45d",
		"ts": "2026-11-03T17:29:22.272Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 151585562.81,
		"hash": "1c0e1135a45d6cb54d6029f2b123214920727b2306a0bc346fa4fd0874e149b9"
	},
	{
		"id": "e19b8add3edd",
		"ts": "2026-11-03T17:29:22.511Z",
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
		"liquidityUsd": 16405624.32,
		"hash": "e19b8add3edd0a253176151eddcb1d37e9c8a336b356b8b1dd3e89263e264bf2"
	},
	{
		"id": "688ee50928ff",
		"ts": "2026-11-03T17:29:22.709Z",
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
		"liquidityUsd": 237926.2,
		"hash": "688ee50928ff0ca581a73260121700488e0f7377f80d5a2bb43a04257dd34c33"
	},
	{
		"id": "5551192e288c",
		"ts": "2026-11-03T17:29:22.921Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5464507.44,
		"hash": "5551192e288cc28d1a551cbd94f1aa8ae76cd5db2feb1cc6359d8c2e75012303"
	},
	{
		"id": "f6a05f10cbc5",
		"ts": "2026-11-03T17:29:23.118Z",
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
		"liquidityUsd": 949307.95,
		"hash": "f6a05f10cbc58092201c2962bca3202ecec0ed338a4161f8589904e93c1d4a0d"
	},
	{
		"id": "0f38ff31d0d6",
		"ts": "2026-11-03T17:29:23.333Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1064053.29,
		"hash": "0f38ff31d0d60ede61dc9657b49293d16e3452de2ac51f87fe1d493de9b966f7"
	},
	{
		"id": "ab7962c2ec08",
		"ts": "2026-11-03T17:29:23.555Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5464507.44,
		"hash": "ab7962c2ec08e214449c7d43f6dd44f4a786a34ebb4ff6587553955427e4b7ee"
	},
	{
		"id": "d7a732c0d734",
		"ts": "2026-11-03T17:29:23.768Z",
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
		"liquidityUsd": 1333774.4,
		"hash": "d7a732c0d73470ac32090d7f3ac83ea491b334dae867824622c36ea4de2684e9"
	},
	{
		"id": "5c9a6c317950",
		"ts": "2026-11-03T17:29:23.966Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3438817.63,
		"hash": "5c9a6c317950cdda1d6f0d43500c5ddd59146b121e27e5d151940f43942efad0"
	},
	{
		"id": "39120ce15b9d",
		"ts": "2026-11-03T17:29:24.175Z",
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
		"liquidityUsd": 1736981.57,
		"hash": "39120ce15b9ded04ee26c9242e91bb84013892e93bde39587518cc434463ddd4"
	},
	{
		"id": "f259090f9904",
		"ts": "2026-11-03T17:29:24.395Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1023834.42,
		"hash": "f259090f990473f04ea7e1f41c64d1c1c3f310f8067ff3cdaf7aeff2fa98fbb9"
	},
	{
		"id": "3ec12a376468",
		"ts": "2026-11-03T17:29:24.613Z",
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
		"liquidityUsd": 2432590.82,
		"hash": "3ec12a376468b814bd0ee8de686834df170a1ef17ffbc3dcda36e8d7aee92eb9"
	},
	{
		"id": "8f7b34873f51",
		"ts": "2026-11-03T17:29:24.801Z",
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
		"liquidityUsd": 7771801.07,
		"hash": "8f7b34873f514ababfdeb10dca9c6aaad50c1de19105aae1c2e870571e4edd00"
	},
	{
		"id": "99b129c81278",
		"ts": "2026-11-03T17:29:25.001Z",
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
		"liquidityUsd": 1062063.91,
		"hash": "99b129c81278f5cbb45384ff6e056ed56692c41e1be6e32c339c475294df9ff4"
	},
	{
		"id": "d3a86e232149",
		"ts": "2026-11-03T17:29:25.193Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 102611.39,
		"hash": "d3a86e232149e09f51c496c780a08f63b935d16a20d4974d6bc8200ebe3baaad"
	},
	{
		"id": "01a691c99b8e",
		"ts": "2026-11-03T17:29:25.392Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 346747.17,
		"hash": "01a691c99b8eb92a865996b89371a4be41887739a6c41c3dc7f5dfdb28601a7a"
	},
	{
		"id": "150d21b40708",
		"ts": "2026-11-03T17:29:25.594Z",
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
		"liquidityUsd": 2818999.97,
		"hash": "150d21b40708c3c3270f62231129325a25c190376759a6b898d06393de87602f"
	},
	{
		"id": "27fe746fa293",
		"ts": "2026-11-03T17:29:25.828Z",
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
		"liquidityUsd": 225308.15,
		"hash": "27fe746fa29352b9d8e3e34222d2fa0c32da14de66c74f1228a6497aa182304f"
	},
	{
		"id": "af13758615b9",
		"ts": "2026-11-03T17:29:26.055Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1687391.52,
		"hash": "af13758615b9d0efdc17df5782c5c6d124391fc3a60c87837eab3329d1fee198"
	},
	{
		"id": "74a725a55a6b",
		"ts": "2026-11-03T09:10:11.523Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 150152507.05,
		"hash": "74a725a55a6b7cf68935cce162e955316fb4949c54ea942fee609a2b703cd123"
	},
	{
		"id": "e5b87ada74da",
		"ts": "2026-11-03T09:10:11.982Z",
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
		"liquidityUsd": 16149966.36,
		"hash": "e5b87ada74dae00c3bc6ddbd267c8bed76a68e35b9c4828f577791b416f6fe24"
	},
	{
		"id": "2142cb64cc4f",
		"ts": "2026-11-03T09:10:12.230Z",
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
		"liquidityUsd": 248909.95,
		"hash": "2142cb64cc4f84a9b9264ecab8ee3a9afab54ff3ac444353c89220aacd0dfd77"
	},
	{
		"id": "f8715add509d",
		"ts": "2026-11-03T09:10:12.486Z",
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
		"liquidityUsd": 5342356.24,
		"hash": "f8715add509d5ba8483178ca1daadb304f241b8317d709ddf4b4f739bff98f63"
	},
	{
		"id": "b65be0faeb0c",
		"ts": "2026-11-03T09:10:12.738Z",
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
		"liquidityUsd": 874462.22,
		"hash": "b65be0faeb0c5dddb06bb1818a8df3c4eca453a304b30760c1e04eed4c0803fd"
	},
	{
		"id": "3711c4f904b7",
		"ts": "2026-11-03T09:10:13.007Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1042704.3,
		"hash": "3711c4f904b7e902b40b9cf183a34a073a152a4c049ce1447a669a361be57970"
	},
	{
		"id": "a39bdd81b339",
		"ts": "2026-11-03T09:10:13.373Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 5342356.24,
		"hash": "a39bdd81b3395813df129869624082d31b4ab8b164453851e7c9b13bd2ca2184"
	},
	{
		"id": "629991a1dec3",
		"ts": "2026-11-03T09:10:13.630Z",
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
		"liquidityUsd": 1987703.72,
		"hash": "629991a1dec3aff25e5ea59db8c0fb02d6552e66866649e5fcf4f7b0922ab53a"
	},
	{
		"id": "52dc5afe1b69",
		"ts": "2026-11-03T09:10:13.902Z",
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
		"liquidityUsd": 1759021.87,
		"hash": "52dc5afe1b696357fca2632b5a17fd3a4fffa0ebef7e84b9aa6980e3e2bc7c60"
	},
	{
		"id": "4ae904bcad7c",
		"ts": "2026-11-03T09:10:14.149Z",
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
		"liquidityUsd": 302435.69,
		"hash": "4ae904bcad7cbb5788421aeaeec3aefd3bf9056c2d43c2addb957030bdcf7f66"
	},
	{
		"id": "38a3bb4c6d16",
		"ts": "2026-11-03T09:10:14.378Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1007902.82,
		"hash": "38a3bb4c6d1629af86bad191827b5c2e052432c47247ef7220d1e2de53e3ad17"
	},
	{
		"id": "c82107523b22",
		"ts": "2026-11-03T09:10:14.602Z",
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
		"liquidityUsd": 2435462.76,
		"hash": "c82107523b22611a9b06cbac96a111777edf4acc2a39c669e1a4e589f449818c"
	},
	{
		"id": "20a2cd163a1c",
		"ts": "2026-11-03T09:10:14.825Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3482661.03,
		"hash": "20a2cd163a1ccc9a43caa255dab1102105bda0464d4f0e95596f75df7efd9804"
	},
	{
		"id": "908a05257ed8",
		"ts": "2026-11-03T09:10:15.045Z",
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
		"liquidityUsd": 1016661.6,
		"hash": "908a05257ed89e1f9c4540cf43825ce8fdb15423f233b81878f71197e4f44a7c"
	},
	{
		"id": "db9fd827e69e",
		"ts": "2026-11-03T09:10:15.266Z",
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
		"liquidityUsd": 7437114.36,
		"hash": "db9fd827e69e1fee8d366adcfea950c8b9a50b9e9f88e56d3dbfe3ef47c64e91"
	},
	{
		"id": "4a279614594d",
		"ts": "2026-11-03T09:10:15.488Z",
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
		"liquidityUsd": 225170.92,
		"hash": "4a279614594d9de04d43f1d9ac9383ade0cfb9371cf095784faa92a25f3f658b"
	},
	{
		"id": "391dd2c30ce6",
		"ts": "2026-11-03T09:10:15.740Z",
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
		"liquidityUsd": 2774207,
		"hash": "391dd2c30ce6079ff427efa24791b6b56d6473481983b845027e3a43ee55c758"
	},
	{
		"id": "ddc6dc243df4",
		"ts": "2026-11-03T09:10:15.960Z",
		"symbol": "wL1",
		"token": "0xE6522A891702Cd2E8CC2A5182638c9DA1DD44B22",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 407958.03,
		"hash": "ddc6dc243df410b5c6998fb71ec5891edd6fe7266e1f85a830a1efdebf3701a5"
	},
	{
		"id": "94226901470d",
		"ts": "2026-11-03T09:10:16.181Z",
		"symbol": "TSLAc",
		"token": "0xb2000000000000000000001e800a7f5189430cD0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 454357.19,
		"hash": "94226901470d8f027eb18fce904813606e406e0f34cd3e2fca9e67a38d07b049"
	},
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
	}
]
