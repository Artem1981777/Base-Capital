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
	"updatedAt": "2026-08-15T19:19:08.689Z",
	"tokensScored": 10533,
	"verdictsIssued": 10533,
	"safe": 9171,
	"risky": 794,
	"likelyRug": 568,
	"ticks": 633
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "d98a59387ac0",
		"ts": "2026-08-15T19:19:04.917Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111416903.68,
		"hash": "d98a59387ac05b9d2b022eb776b2ee087d92db40db5e7d5fc5e76c5999451b90"
	},
	{
		"id": "030d0773e242",
		"ts": "2026-08-15T19:19:05.176Z",
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
		"liquidityUsd": 15908041.06,
		"hash": "030d0773e242e913018032d4772ed244c5017fb41e341b9f513f315143e0ae5e"
	},
	{
		"id": "1efaf953ce08",
		"ts": "2026-08-15T19:19:05.418Z",
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
		"liquidityUsd": 813220.62,
		"hash": "1efaf953ce08972ae903d1b3bf5aa2a161541becbaa93ef9a6146e761fc8c525"
	},
	{
		"id": "2296f04a2a10",
		"ts": "2026-08-15T19:19:05.661Z",
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
		"liquidityUsd": 26618699.05,
		"hash": "2296f04a2a103984127d9dcfe26d9857da8a983a97148f95cf690714bd139c2d"
	},
	{
		"id": "7e432ea787d2",
		"ts": "2026-08-15T19:19:05.870Z",
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
		"liquidityUsd": 4167911.81,
		"hash": "7e432ea787d221996f38dd6bfeae99d4497ccff7d8a5039129e754967c8a3ab0"
	},
	{
		"id": "384099fbf6dc",
		"ts": "2026-08-15T19:19:06.079Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896981.25,
		"hash": "384099fbf6dcd054e3fe3cd9444ac26df3c2fa0174c724b1e50f64c26b612438"
	},
	{
		"id": "1145c2f9032f",
		"ts": "2026-08-15T19:19:06.265Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26618699.05,
		"hash": "1145c2f9032f3d6a8ac0e534df1681aed534466dc8afebb2f5bf2a1f453feeee"
	},
	{
		"id": "e9f595e221da",
		"ts": "2026-08-15T19:19:06.484Z",
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
		"liquidityUsd": 4345066.25,
		"hash": "e9f595e221dafa488292cbaf0a3c838260e3cbcdfb80cbf7e52c0444f8846dad"
	},
	{
		"id": "bf4de147c4c6",
		"ts": "2026-08-15T19:19:06.684Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2557767.1,
		"hash": "bf4de147c4c63ea3bb5916668df39bc2c8677b2e0eb899da4c185e0c86b863e6"
	},
	{
		"id": "5868819bc8c3",
		"ts": "2026-08-15T19:19:06.888Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5142951.44,
		"hash": "5868819bc8c38edc4b06bf22f7ec0b08bfe7c0fb761826e4e14f4b52b50cda3c"
	},
	{
		"id": "157294728fcf",
		"ts": "2026-08-15T19:19:07.069Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272816.32,
		"hash": "157294728fcf1e55fbac27c8ca6c01451e9fe99642e8abc61d44d4a90d3edff1"
	},
	{
		"id": "0f2e85806aa9",
		"ts": "2026-08-15T19:19:07.288Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 895812.04,
		"hash": "0f2e85806aa9a2f079bc49bac2141ce1f52d8aecf48420018a2b6a1ed867fdfc"
	},
	{
		"id": "69279ea02b7b",
		"ts": "2026-08-15T19:19:07.522Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "69279ea02b7bad0cba96cb0eb56715d85dc91f91fb46beadc76319363d5d88d0"
	},
	{
		"id": "187f26b299f7",
		"ts": "2026-08-15T19:19:07.708Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 386014.28,
		"hash": "187f26b299f71d14450381e58319f072d20ddd6c7746b34974552717e0d6a7b2"
	},
	{
		"id": "6b4acce8c760",
		"ts": "2026-08-15T19:19:07.912Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9496663.45,
		"hash": "6b4acce8c76023095a16e6242ebbe384754a825b7f1045005df1adb61bf5c481"
	},
	{
		"id": "b454dde68147",
		"ts": "2026-08-15T19:19:08.106Z",
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
		"liquidityUsd": 641295.03,
		"hash": "b454dde68147eeef35497ecd79ef90b4d0e2dc1af25d31cb286c86a0571811b5"
	},
	{
		"id": "5393640b137a",
		"ts": "2026-08-15T19:19:08.293Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 626198.54,
		"hash": "5393640b137a3b93550c5e35697063de963a439767228692e2485a39183e4b1d"
	},
	{
		"id": "8ebc86e31366",
		"ts": "2026-08-15T19:19:08.484Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1491142.8,
		"hash": "8ebc86e313665a5ac44dce7587531ac061020036d5a740c2baa305dfefbb66fe"
	},
	{
		"id": "2ef25ba94b7e",
		"ts": "2026-08-15T19:19:08.689Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4196368.5,
		"hash": "2ef25ba94b7e2ba47852279d97edba9c5222cd50696778f198c45d905bdd2505"
	},
	{
		"id": "699706bbd7b8",
		"ts": "2026-08-15T18:22:27.393Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111418638.71,
		"hash": "699706bbd7b8e81698e1dd001e1f2fe038372756dc1a31824059d7edb9e8d343"
	},
	{
		"id": "124f9529509b",
		"ts": "2026-08-15T18:22:27.639Z",
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
		"liquidityUsd": 15825061.21,
		"hash": "124f9529509bb9b29465b74c4e15665a2ffe1964ad1319fd4066f28d3a61aaef"
	},
	{
		"id": "ccd2041d8470",
		"ts": "2026-08-15T18:22:27.921Z",
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
		"liquidityUsd": 811923.65,
		"hash": "ccd2041d8470b867da04247b241b9713511945ff8b1cf5153f30f4b3634f1717"
	},
	{
		"id": "52328d9fb3b9",
		"ts": "2026-08-15T18:22:28.175Z",
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
		"liquidityUsd": 26629963.19,
		"hash": "52328d9fb3b9a79b617ac5d62d296990a8b5f3bb5e59fe1fba7278ffeb0ab465"
	},
	{
		"id": "82c66d21b6d2",
		"ts": "2026-08-15T18:22:28.418Z",
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
		"liquidityUsd": 4167911.81,
		"hash": "82c66d21b6d2c9e6cc0a170fbd29789d093b774a22780c158e785311938f5e88"
	},
	{
		"id": "fd4d32b77633",
		"ts": "2026-08-15T18:22:28.679Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896981.25,
		"hash": "fd4d32b77633ebaa1e319bd4d7a0c2fc2884720aa51de0ba9a2d062094d5a9a4"
	},
	{
		"id": "775b1b461c74",
		"ts": "2026-08-15T18:22:28.918Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26629963.19,
		"hash": "775b1b461c74447d42d2db64cc7857024cd293917ee2bdb7c9a156776d0a62cd"
	},
	{
		"id": "7a26383e6813",
		"ts": "2026-08-15T18:22:29.192Z",
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
		"liquidityUsd": 4348536.45,
		"hash": "7a26383e6813e3155fb51e039983057b2d2d3031d69a1af7e6c9030f9dfa1d6e"
	},
	{
		"id": "662f2bca10d6",
		"ts": "2026-08-15T18:22:29.422Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2580554.32,
		"hash": "662f2bca10d6e539ad188bd20c3a54e96e069ff6c1372ad14eb3a0deda613555"
	},
	{
		"id": "2fd301171ffd",
		"ts": "2026-08-15T18:22:29.662Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5434122.11,
		"hash": "2fd301171ffdc9358eaceed1f83cc4f725124d498dd398d752c12254ed398775"
	},
	{
		"id": "e31cbc282ac0",
		"ts": "2026-08-15T18:22:29.917Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272765.72,
		"hash": "e31cbc282ac0e6e7dd28da839c7b2a239a5dbc4f581954f51437f11fc18c400d"
	},
	{
		"id": "c0c47f513737",
		"ts": "2026-08-15T18:22:30.136Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 895910.37,
		"hash": "c0c47f513737c094de4724b83129f2bdedbafe57f4632abfafeee095b0a2cd12"
	},
	{
		"id": "da2c9611d17c",
		"ts": "2026-08-15T18:22:30.360Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "da2c9611d17cd96efcb05776ef8da4742840f5c9a56fe96c61dff803038a1497"
	},
	{
		"id": "a9fbff11ef71",
		"ts": "2026-08-15T18:22:30.579Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 389901.36,
		"hash": "a9fbff11ef71c001090299c6bd182fb7806debc10584d4dd94bfc5d7b22cc012"
	},
	{
		"id": "15d280866880",
		"ts": "2026-08-15T18:22:30.806Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 641058.98,
		"hash": "15d280866880999803ae763170eabe64666e5f73eedd229cd214ecf2f51f2eb2"
	},
	{
		"id": "4cebab357be0",
		"ts": "2026-08-15T18:22:31.033Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9492656.97,
		"hash": "4cebab357be0b443694bc6a00159e9db00db1b6d724549f4212e14acaa3ebc73"
	},
	{
		"id": "8df72ea5bd2a",
		"ts": "2026-08-15T18:22:31.252Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 622439.46,
		"hash": "8df72ea5bd2aa2b64dbe6502059c34a4a481df8550f221fffd3f5a25b5c61aa9"
	},
	{
		"id": "22f8cc427f74",
		"ts": "2026-08-15T18:22:31.483Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1496126.12,
		"hash": "22f8cc427f74f7bb861a5b91fecce0cd030087f06d0df9cdff1adbe5c87d3739"
	},
	{
		"id": "4588150e9134",
		"ts": "2026-08-15T18:22:31.698Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4210945.62,
		"hash": "4588150e91348750577f71bfcec3b080f5fd2e7dabdefc32eaed484fe4f393c1"
	},
	{
		"id": "9c3bf94d53e1",
		"ts": "2026-08-15T17:17:08.041Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111436465.95,
		"hash": "9c3bf94d53e1adcb017ef13cce559899a5d9da73e9cea9e9b1a166b619319f56"
	},
	{
		"id": "29bf2c79b5af",
		"ts": "2026-08-15T17:17:08.409Z",
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
		"liquidityUsd": 15721767.59,
		"hash": "29bf2c79b5afcb296a178f181bedbb83d81b6f5d0b4794a793c8ee15caa54c0c"
	},
	{
		"id": "b0434934b9a4",
		"ts": "2026-08-15T17:17:08.740Z",
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
		"liquidityUsd": 807943.57,
		"hash": "b0434934b9a4eb27324774c0789180cfb7f28ecf0defe6ce98d6f6d052b01672"
	},
	{
		"id": "8b80bbe0b4e4",
		"ts": "2026-08-15T17:17:09.054Z",
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
		"liquidityUsd": 26562958.48,
		"hash": "8b80bbe0b4e4c0725b31b285274df5cb20be492986741114aba9a9643d29d817"
	},
	{
		"id": "5a2204ca3cc2",
		"ts": "2026-08-15T17:17:09.243Z",
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
		"liquidityUsd": 4166685.24,
		"hash": "5a2204ca3cc25590645b45cc230885bce3913a494971ac01634a832a8894d3e3"
	},
	{
		"id": "cacbdd61ec37",
		"ts": "2026-08-15T17:17:09.445Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896981.25,
		"hash": "cacbdd61ec3715949e4b992598c5f896416ca6baa284ce5696ae04baa2d1bc79"
	},
	{
		"id": "d42db649450b",
		"ts": "2026-08-15T17:17:09.647Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26562958.48,
		"hash": "d42db649450b62f12a24cc2ae093bb22206f95f0935d877e2ec9f5dff96c3490"
	},
	{
		"id": "c8bc67ca6cb3",
		"ts": "2026-08-15T17:17:09.868Z",
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
		"liquidityUsd": 4350968.44,
		"hash": "c8bc67ca6cb3fd7d2f3e96add28e8dcc7e9ed701c76c3cd7378eea63ee4e92b9"
	},
	{
		"id": "34ae325819ca",
		"ts": "2026-08-15T17:17:10.054Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2643787.53,
		"hash": "34ae325819ca3def87f44cf7b0adc53c4b3ab981f64da18805891de7327337a4"
	},
	{
		"id": "75e155b61077",
		"ts": "2026-08-15T17:17:10.240Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 5345327.85,
		"hash": "75e155b610776b00b16691f7c7d3e8c6078fa660f096d91c0b89e44a433ec469"
	},
	{
		"id": "c9fbeb2e3f97",
		"ts": "2026-08-15T17:17:10.434Z",
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
		"liquidityUsd": 271734.19,
		"hash": "c9fbeb2e3f972492f19677ecc210b7aca4c11cb4f020a28994eb21114612a0ce"
	},
	{
		"id": "1a2d80e73de1",
		"ts": "2026-08-15T17:17:10.644Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 896532.3,
		"hash": "1a2d80e73de1e1a78ce7d8bb066e7beee6d1d402e754fd15cec7af8652f26d85"
	},
	{
		"id": "83d51e5012ae",
		"ts": "2026-08-15T17:17:10.819Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "83d51e5012ae7ca7d520e731fcf2a7f6104ec622b50d98727b5b132e1fdb7529"
	},
	{
		"id": "eaa784d0f90b",
		"ts": "2026-08-15T17:17:11.042Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 384166.68,
		"hash": "eaa784d0f90bcad031b06ab4f14137628d8adec51e2b62d7aaa827d062241201"
	},
	{
		"id": "f7f95fd33b99",
		"ts": "2026-08-15T17:17:11.241Z",
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
		"liquidityUsd": 639963.05,
		"hash": "f7f95fd33b9952f85b313fff31713a1312ac6ee425bbfadf87bafcc24ebea6f8"
	},
	{
		"id": "e9ff04377a9f",
		"ts": "2026-08-15T17:17:11.465Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9500618.22,
		"hash": "e9ff04377a9fe402eca88818d4575e55be80afe60bf794588dd9e90406bee50d"
	},
	{
		"id": "872bb8f17342",
		"ts": "2026-08-15T17:17:11.657Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1497119.34,
		"hash": "872bb8f17342228eb1a79c6c1048f3e781cbc2a136ed0d6e7f4b6622f97ac3b8"
	},
	{
		"id": "5870a5fdf210",
		"ts": "2026-08-15T17:17:11.846Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4193328.31,
		"hash": "5870a5fdf210553f1ee34fbee624434db4fc9f48cff21c4864b4147a54e41bb7"
	},
	{
		"id": "3df52746fc81",
		"ts": "2026-08-15T16:18:54.749Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111532630.85,
		"hash": "3df52746fc8177788d0ddeae55ce2ffff4afe563540c6418dcf41499527affa1"
	},
	{
		"id": "ea5786b218a8",
		"ts": "2026-08-15T16:18:55.198Z",
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
		"liquidityUsd": 15831815.26,
		"hash": "ea5786b218a841f70a7a479d6714a1fa504c28c1ae3cc759739406a0623b1930"
	},
	{
		"id": "451940d29d23",
		"ts": "2026-08-15T16:18:55.507Z",
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
		"liquidityUsd": 803239.12,
		"hash": "451940d29d238af0238f825521a63b70bd8b64f7a579d2be57240cdde80375aa"
	},
	{
		"id": "195ce6cd408f",
		"ts": "2026-08-15T16:18:55.690Z",
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
		"liquidityUsd": 26562654.18,
		"hash": "195ce6cd408f26d9027c1cc0b45d7ff04b991b8e877e4f953e7165efcf9c4e74"
	},
	{
		"id": "e27b48daacbb",
		"ts": "2026-08-15T16:18:55.899Z",
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
		"liquidityUsd": 4156751.26,
		"hash": "e27b48daacbb35dc1461b6e8101d6ca06c3e665fe699767a37243af83567c0a2"
	},
	{
		"id": "8004b390220a",
		"ts": "2026-08-15T16:18:56.122Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895826.69,
		"hash": "8004b390220a80eddc7f16ddd822ba524fb00dd87cc6542989e3d8e676b38291"
	},
	{
		"id": "c363f017c42e",
		"ts": "2026-08-15T16:18:56.318Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26562654.18,
		"hash": "c363f017c42e5360d7c21d7cc2bf125a36a80697986888499c9f786a8223acdc"
	},
	{
		"id": "225c5ac7e0a8",
		"ts": "2026-08-15T16:18:56.530Z",
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
		"liquidityUsd": 4348706.56,
		"hash": "225c5ac7e0a81f381dba9928d88becdea0328c8fc20b5ba84687f6690ad5eb09"
	},
	{
		"id": "b5bbb3ff3d73",
		"ts": "2026-08-15T16:18:56.720Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2591283.16,
		"hash": "b5bbb3ff3d73d2c0cd2d9dc53ca20b9e15dcb01747a373572ddbd76e26662fff"
	},
	{
		"id": "bba377075ec2",
		"ts": "2026-08-15T16:18:56.906Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 5472921.9,
		"hash": "bba377075ec20e977a6410d14338722b7b510b70682c5eb0770a262544be6e0b"
	},
	{
		"id": "f37c25bcbae3",
		"ts": "2026-08-15T16:18:57.097Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 268426.2,
		"hash": "f37c25bcbae3818fbab0555795369c92ffd5a8df417b29787c11b2c89a53d567"
	},
	{
		"id": "b45b822a51e7",
		"ts": "2026-08-15T16:18:57.289Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 895825.81,
		"hash": "b45b822a51e7b4ce3f806519b4da5bee19739567af982b428c59cffaa215658e"
	},
	{
		"id": "f7829f01481d",
		"ts": "2026-08-15T16:18:57.475Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "f7829f01481d6f7b26763acb1cfca03ce33e45d5cf5aafab9da442deef5845df"
	},
	{
		"id": "88e54db53488",
		"ts": "2026-08-15T16:18:57.676Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 378238.96,
		"hash": "88e54db534881c3304338fcaa60e57faa638eb0196e476aa62e896f94550b8e3"
	},
	{
		"id": "48b6933d0e08",
		"ts": "2026-08-15T16:18:57.866Z",
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
		"liquidityUsd": 639864.29,
		"hash": "48b6933d0e0874bf9ccc730635218c49671eeca775ace4890e13575719ffdf80"
	},
	{
		"id": "7d03ed56ffcc",
		"ts": "2026-08-15T16:18:58.050Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9487436.61,
		"hash": "7d03ed56ffcc72e4577e44041852d484757aaaedc5ed7bbace21ea7cd6de306d"
	},
	{
		"id": "d25a91afe1d2",
		"ts": "2026-08-15T16:18:58.237Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1496689.14,
		"hash": "d25a91afe1d2eac08e10c5acbaa0316f2ad747458679477735fa9128da69c620"
	},
	{
		"id": "9932d16757f4",
		"ts": "2026-08-15T16:18:58.456Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 852084.43,
		"hash": "9932d16757f44a24d1b5ad349735a834eb3184005be6ccc50b04084b5e097303"
	},
	{
		"id": "730442712406",
		"ts": "2026-08-15T15:16:08.047Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111512934.31,
		"hash": "730442712406a6ba17c8176b26464a57e96d23858831d4a2c220bcea8ddf697f"
	},
	{
		"id": "f1cd0e582e25",
		"ts": "2026-08-15T15:16:08.288Z",
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
		"liquidityUsd": 15800328.13,
		"hash": "f1cd0e582e25551d0ee0a727d6a98f361e4637f3506040efa8b82233ef2ee58d"
	},
	{
		"id": "c532901f4932",
		"ts": "2026-08-15T15:16:08.522Z",
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
		"liquidityUsd": 798767.04,
		"hash": "c532901f4932cb61ccef453f41a4ffa8136de52d0d2ed94e49e290eb1b6924ca"
	},
	{
		"id": "3e2d4d615284",
		"ts": "2026-08-15T15:16:08.749Z",
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
		"liquidityUsd": 26486962.41,
		"hash": "3e2d4d61528484956de5fb22957c0454def7dc31305c1386808cb94e8e9b933a"
	},
	{
		"id": "ae7f5e39e140",
		"ts": "2026-08-15T15:16:08.985Z",
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
		"liquidityUsd": 4155192.14,
		"hash": "ae7f5e39e140c8b9171dae089bc69c97626fb729d9df1b8682c5da6b42252df6"
	},
	{
		"id": "d011068b7114",
		"ts": "2026-08-15T15:16:09.213Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894594.44,
		"hash": "d011068b7114a9719c907003ef793d26eda3c47a8aff8379d2fa862a0125f7b5"
	},
	{
		"id": "998cccf6c4f4",
		"ts": "2026-08-15T15:16:09.444Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26487962.41,
		"hash": "998cccf6c4f42a756ca0b5ea48309d074722cc3782193000ea83a9d57bd1cf79"
	},
	{
		"id": "9b906134602a",
		"ts": "2026-08-15T15:16:09.674Z",
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
		"liquidityUsd": 3798348.86,
		"hash": "9b906134602a726cb3992d8af903712cdf605d0b9f2b3215fe46ece1c7caf8a2"
	},
	{
		"id": "895d85fb8e1e",
		"ts": "2026-08-15T15:16:09.906Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2567350.64,
		"hash": "895d85fb8e1ee68390cd9491e8c515af6bccfdfc5ef071c735a06399304b48db"
	},
	{
		"id": "89b0fa162705",
		"ts": "2026-08-15T15:16:10.140Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6442501.52,
		"hash": "89b0fa162705bfc8613bfb1edcdd26575ecfaea0bc4dfa5208a8b4997791cf96"
	},
	{
		"id": "cc99d629f2c6",
		"ts": "2026-08-15T15:16:10.353Z",
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
		"liquidityUsd": 273775.77,
		"hash": "cc99d629f2c687b4ca37f2a285b60347ed6504feeca9943837f66748b1e35170"
	},
	{
		"id": "d92ca0ba46e7",
		"ts": "2026-08-15T15:16:10.571Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 893261.63,
		"hash": "d92ca0ba46e7dfe7c293e3c05d5f7583f950a400741de61132cc199096d1e162"
	},
	{
		"id": "2bff0499c7d1",
		"ts": "2026-08-15T15:16:10.785Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "2bff0499c7d1d41ee9742f849c9f4b64736b2a7c359e52b320b8203f7806b778"
	},
	{
		"id": "4f8c058ad404",
		"ts": "2026-08-15T15:16:11.006Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 375414.97,
		"hash": "4f8c058ad40490b407b88c25451e12159c1c83931088f15c2f00aa1f649dc506"
	},
	{
		"id": "e0b71a463144",
		"ts": "2026-08-15T15:16:11.219Z",
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
		"liquidityUsd": 648356.7,
		"hash": "e0b71a463144c2cc5bc1b075ce09aad415418b6da0ad8894b48139d1fff32f9b"
	},
	{
		"id": "97364625b43c",
		"ts": "2026-08-15T15:16:11.438Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9474382.55,
		"hash": "97364625b43cab11d7e58d71374f59694c23d3dce4a7e460032fa1f1dfe6851d"
	},
	{
		"id": "6023635dd0f2",
		"ts": "2026-08-15T15:16:11.651Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1492636.49,
		"hash": "6023635dd0f225301e3fa5142afa13cc864a63a18278487b92bc4e5a0fed659f"
	},
	{
		"id": "58cba53578a0",
		"ts": "2026-08-15T15:16:11.871Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 485257.53,
		"hash": "58cba53578a012eaebc086e5675ecc13efaf648f41de35eb217a8e17041c2318"
	},
	{
		"id": "0e526d43df42",
		"ts": "2026-08-15T14:18:03.769Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111498911.16,
		"hash": "0e526d43df4275859fe733aa570bb3cc36d825c491921270bdb1da2099ea3ae0"
	},
	{
		"id": "98531f092822",
		"ts": "2026-08-15T14:18:04.227Z",
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
		"liquidityUsd": 15816369.39,
		"hash": "98531f092822bc8abadce5001774ba51b453a4e0e4f5a9c0b2d6c35c19cabc97"
	},
	{
		"id": "103bdc72a683",
		"ts": "2026-08-15T14:18:04.669Z",
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
		"liquidityUsd": 798767.04,
		"hash": "103bdc72a683f0c6b93af411026bc15f27a03ba924887c44ba8ed616e567acaa"
	},
	{
		"id": "3c8be2dc1653",
		"ts": "2026-08-15T14:18:05.064Z",
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
		"liquidityUsd": 26487608.93,
		"hash": "3c8be2dc16538847c2e4d53d263ced8b40f698ef17d0c5bc9449a8432d5b6196"
	},
	{
		"id": "8b6bc41dffae",
		"ts": "2026-08-15T14:18:05.312Z",
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
		"liquidityUsd": 4156137.97,
		"hash": "8b6bc41dffaeeb6af4f66405e493cca3852b6817e3d5c4677f3f8dfbdfa6a4ef"
	},
	{
		"id": "984f71b8fed0",
		"ts": "2026-08-15T14:18:05.535Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 897375.52,
		"hash": "984f71b8fed0b6d79fc033780cef95071f5a22f25cb025a0f8a8b27ab27b9842"
	},
	{
		"id": "f3e205dfaf98",
		"ts": "2026-08-15T14:18:05.766Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26487608.93,
		"hash": "f3e205dfaf987155261f67a848f0d2cab333aac6afed93dbfea3c1d3c65e1404"
	},
	{
		"id": "046535775833",
		"ts": "2026-08-15T14:18:06.008Z",
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
		"liquidityUsd": 4102850.27,
		"hash": "046535775833f271f5a579c0084871cac5a3e027c7a626ba476dd62682dd6c29"
	},
	{
		"id": "1f3c2741ddac",
		"ts": "2026-08-15T14:18:06.229Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2615464.44,
		"hash": "1f3c2741ddac81036ad507fee0a3bee88db676ed6a2790423c0a53343421e955"
	},
	{
		"id": "5c49695050b8",
		"ts": "2026-08-15T14:18:06.461Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6712601.86,
		"hash": "5c49695050b826e63bb5ac7dce8f7cf8f60499f25bcf4e7f2eeed5bd3863e549"
	},
	{
		"id": "87cdd109544b",
		"ts": "2026-08-15T14:18:06.689Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 277001.21,
		"hash": "87cdd109544b725b83e678a2c81127a092d2f2b8ea159e89f2c9e8ebd98065f9"
	},
	{
		"id": "d6640838d93d",
		"ts": "2026-08-15T14:18:06.895Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 888477.23,
		"hash": "d6640838d93db06611f71583d9b9c23d23dee7f50fa4cb49eac2a06dd5b676a7"
	},
	{
		"id": "7878941bf639",
		"ts": "2026-08-15T14:18:07.114Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "7878941bf639f4b827013a3b61f9217e435f47ae1820fd10ca25947876e4d004"
	},
	{
		"id": "4e6ec139ca2f",
		"ts": "2026-08-15T14:18:07.342Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 376938.08,
		"hash": "4e6ec139ca2f85bfc83e6739b2af57c82636f92592b59b40f20505c0aa1a3de2"
	},
	{
		"id": "e02b0ccb6ba7",
		"ts": "2026-08-15T14:18:07.548Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9473602.16,
		"hash": "e02b0ccb6ba7ebeae92ccc61444cd89b29292c2ca7a2978991cee1b3fabac79f"
	},
	{
		"id": "6b4816fc8918",
		"ts": "2026-08-15T14:18:07.768Z",
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
		"liquidityUsd": 648794.62,
		"hash": "6b4816fc89187df6bba640f907c58da5089ca649ef14fdab3dbff619372bbaa3"
	},
	{
		"id": "caeca6b59c6e",
		"ts": "2026-08-15T14:18:07.998Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1486990.54,
		"hash": "caeca6b59c6e98b01ffd02f459531274a81b5b48e95f16a9326f3deaeac1a11a"
	},
	{
		"id": "2f1bf53e3bea",
		"ts": "2026-08-15T14:18:08.205Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 852273.57,
		"hash": "2f1bf53e3bea0a369615c999fe5ce884538e737d62750ab2439c32afadefd41f"
	},
	{
		"id": "a945e3418172",
		"ts": "2026-08-15T13:26:36.760Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111510913.33,
		"hash": "a945e341817227eb758c61ad3d8b28553dd0bdd29f97cec21307579bda01e964"
	},
	{
		"id": "b6443d8d77e4",
		"ts": "2026-08-15T13:26:37.187Z",
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
		"liquidityUsd": 15821796.81,
		"hash": "b6443d8d77e4320984c8992aea09bd1cc7ac34c741f2dda8eace0049464ffc03"
	},
	{
		"id": "de8ca89ad176",
		"ts": "2026-08-15T13:26:37.436Z",
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
		"liquidityUsd": 798767.04,
		"hash": "de8ca89ad1763b822e60b08818fce866944244abee5cbfe4ed6608f1478c2a8f"
	},
	{
		"id": "064a5b845594",
		"ts": "2026-08-15T13:26:37.663Z",
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
		"liquidityUsd": 26449479.67,
		"hash": "064a5b8455945246c8e2c31db633edaf038846e3517feeb69e1e08977636ea80"
	},
	{
		"id": "173e7f9bb628",
		"ts": "2026-08-15T13:26:37.887Z",
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
		"liquidityUsd": 4154304.7,
		"hash": "173e7f9bb62861b13538e033be8ed7337387caafed11c4609563f236436af97d"
	},
	{
		"id": "4c512e97f489",
		"ts": "2026-08-15T13:26:38.177Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895475.76,
		"hash": "4c512e97f489ab6a9cb6b336886c1dbfb1e31f248545f8288cd929cce579a6b1"
	},
	{
		"id": "79a213a86328",
		"ts": "2026-08-15T13:26:38.420Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26449479.67,
		"hash": "79a213a8632840c1f77d025665bbada65104335d41854c934357c9e696b9932c"
	},
	{
		"id": "23b4fbd6c21f",
		"ts": "2026-08-15T13:26:38.652Z",
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
		"liquidityUsd": 4096285.09,
		"hash": "23b4fbd6c21f6ac33fc54e0a2486b20837252df41c5187d765c93f8586d0d37b"
	},
	{
		"id": "50f4b4f4d406",
		"ts": "2026-08-15T13:26:38.927Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2581817.89,
		"hash": "50f4b4f4d406dd8abf47d252dd4fa29651bbe0ccecf5961ce8c0f3864b19f27a"
	},
	{
		"id": "4bc437c3d39b",
		"ts": "2026-08-15T13:26:39.296Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6837050.34,
		"hash": "4bc437c3d39b0fe21740c3d44dfc7400ac5c707452c67716934c4e50358f5237"
	},
	{
		"id": "88172f239704",
		"ts": "2026-08-15T13:26:39.507Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 888823.23,
		"hash": "88172f2397048f71cee3e84544b52a35d78aaed8c7c64c4bdcd7c577df785d8a"
	},
	{
		"id": "fa4097ff9e4e",
		"ts": "2026-08-15T13:26:39.736Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272042.82,
		"hash": "fa4097ff9e4e7f7c466d02b32b9b03a23347771140dc1961036c4e6111be4daa"
	},
	{
		"id": "816146c1af5b",
		"ts": "2026-08-15T13:26:39.949Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "816146c1af5b7c0822839002737945575b2df74f9f48851cf7c3549451474d98"
	},
	{
		"id": "da2f3e3a4e19",
		"ts": "2026-08-15T13:26:40.159Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 381629.03,
		"hash": "da2f3e3a4e19399807a314f66da9a9fc17d66dc98849108278d401870ef19909"
	},
	{
		"id": "363b3950cb87",
		"ts": "2026-08-15T13:26:40.385Z",
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
		"liquidityUsd": 9421221.99,
		"hash": "363b3950cb87758aa1a68d0a54da006c3a5068e6ddd9f8b59fb38f8f78bf55a6"
	},
	{
		"id": "49eba1f9f7f7",
		"ts": "2026-08-15T13:26:40.596Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 652283.47,
		"hash": "49eba1f9f7f779af3c343b568710490ff378b14179b74077ad119f87348e6117"
	},
	{
		"id": "5bf373b35d0d",
		"ts": "2026-08-15T13:26:40.807Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1487738.72,
		"hash": "5bf373b35d0d4bfa2c7aef6ec122744c14d20f85b598fc8b6aacfb32c0206ef4"
	},
	{
		"id": "ffa88b73b25e",
		"ts": "2026-08-15T13:26:41.035Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 850508.33,
		"hash": "ffa88b73b25edbf9bc569021c9ee40930ddc8f633cbf4fc797afc5557fa36c31"
	},
	{
		"id": "656dcfe03ebd",
		"ts": "2026-08-15T12:29:48.625Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111635072.31,
		"hash": "656dcfe03ebdae564f2c9b78ae117c786c10dcf5cf77c0846a99088416b5d543"
	},
	{
		"id": "4dc12e0fbcb8",
		"ts": "2026-08-15T12:29:49.124Z",
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
		"liquidityUsd": 15848654.66,
		"hash": "4dc12e0fbcb88a8f7b027eab6547a473f4571610feb1e3fad733dd61717ad426"
	},
	{
		"id": "38c9ae699300",
		"ts": "2026-08-15T12:29:49.409Z",
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
		"liquidityUsd": 798767.04,
		"hash": "38c9ae699300652d2ede68c7fedf7cba1dd0c357fa3c70b15ad29d2cb1df360f"
	},
	{
		"id": "365e038d7775",
		"ts": "2026-08-15T12:29:49.701Z",
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
		"liquidityUsd": 26446699.25,
		"hash": "365e038d7775f6c0659d5fd503ff935a0e06cec0beb06177e6b2ee832348b311"
	},
	{
		"id": "a6efe2a939d4",
		"ts": "2026-08-15T12:29:50.002Z",
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
		"liquidityUsd": 4145145.2,
		"hash": "a6efe2a939d416eb96d9ad16c673bdd9c7590746121b14cdc321af626853dc7c"
	},
	{
		"id": "0ac50a136b94",
		"ts": "2026-08-15T12:29:50.305Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895475.76,
		"hash": "0ac50a136b946d57b4b63d70eceb06278224dd0e8bc61c3bd229e2a3c3c0a1b1"
	},
	{
		"id": "89d9fe021691",
		"ts": "2026-08-15T12:29:50.581Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26446643.19,
		"hash": "89d9fe0216919a77c8079b941793dc81ea77c2c49e5787170e6b34d2691d898e"
	},
	{
		"id": "cba8f10a78d1",
		"ts": "2026-08-15T12:29:50.873Z",
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
		"liquidityUsd": 4106032.21,
		"hash": "cba8f10a78d1572843575fb0a88a8d25585585aa449b965f5f189cd565479c9d"
	},
	{
		"id": "6da73c39c3f3",
		"ts": "2026-08-15T12:29:51.158Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2540257.04,
		"hash": "6da73c39c3f334f0e3023c9567892d0a5c2cee58a8e905f3bb8a860366e999cb"
	},
	{
		"id": "c4fdd51d2acf",
		"ts": "2026-08-15T12:29:51.439Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6722703.69,
		"hash": "c4fdd51d2acf95e120d7329a5c3d84814e2ea72c69f2895c5306a3495f6f8298"
	},
	{
		"id": "e6b58cd946c1",
		"ts": "2026-08-15T12:29:51.703Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 897995.56,
		"hash": "e6b58cd946c10b7c81a19c2744e92bf3573f741a9203d120abe9976c9dfdc30b"
	},
	{
		"id": "47f49ee7468a",
		"ts": "2026-08-15T12:29:51.966Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 271753.54,
		"hash": "47f49ee7468ace1894d215b6bc02656bbcc17585fb2b85107d36b6e0c0dadc00"
	},
	{
		"id": "143bbd5096e0",
		"ts": "2026-08-15T12:29:52.230Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 849955.52,
		"hash": "143bbd5096e06205041c0cddb0a46e11ed8395fb2ba08a46c611b45ece8f00a9"
	},
	{
		"id": "ec31ab9d4253",
		"ts": "2026-08-15T12:29:52.526Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "ec31ab9d42534ad6c951f1cb0f7eea62a0fd497e7c0882e5ead15df81fa5fa04"
	},
	{
		"id": "97b2a4aed272",
		"ts": "2026-08-15T12:29:52.789Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9392543.97,
		"hash": "97b2a4aed2721c9d94668382347e72785d6b1ce23e85d8c1a771561b42450137"
	},
	{
		"id": "10d166744c55",
		"ts": "2026-08-15T12:29:53.052Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 392035.04,
		"hash": "10d166744c557814b96b33291e90312b320b9993b9b0c51f9d0e17648618be9a"
	},
	{
		"id": "274db4e83e67",
		"ts": "2026-08-15T12:29:53.314Z",
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
		"liquidityUsd": 653973.48,
		"hash": "274db4e83e671efdd4eda42ef156248d69da57a3301b476d5be3450dec8e2f4a"
	},
	{
		"id": "024a8180d53f",
		"ts": "2026-08-15T12:29:53.576Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1490278.87,
		"hash": "024a8180d53f51ae132b32dd0b1445dbe68f539c6305be87c8d54f1d2e5d2593"
	},
	{
		"id": "9307baa61378",
		"ts": "2026-08-15T11:16:22.275Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111655177.66,
		"hash": "9307baa61378e6f2b221b758adae3724be294f54a828309687cfb9ad1320c670"
	},
	{
		"id": "8a454d877f92",
		"ts": "2026-08-15T11:16:22.768Z",
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
		"liquidityUsd": 16342882.48,
		"hash": "8a454d877f923c02f36377a3baad91cafdb5f3f74957893b2d26ffcdc0c041d1"
	},
	{
		"id": "9b1236c7d4d1",
		"ts": "2026-08-15T11:16:22.967Z",
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
		"liquidityUsd": 798767.04,
		"hash": "9b1236c7d4d1919ff2decfc671ad19bfb7bd31c52dd48f9d30bf893370bd357a"
	},
	{
		"id": "c9834d8c602b",
		"ts": "2026-08-15T11:16:23.163Z",
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
		"liquidityUsd": 26490035.44,
		"hash": "c9834d8c602b7517b54d0e830856793119bf087dbbdb4e3960dff63835a7b203"
	},
	{
		"id": "9c3193f010b0",
		"ts": "2026-08-15T11:16:23.503Z",
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
		"liquidityUsd": 4148656.22,
		"hash": "9c3193f010b038620f3f9ad8dac63d7c215bfcdd8ce22f9d045487f4e4188c48"
	},
	{
		"id": "84d2c77da907",
		"ts": "2026-08-15T11:16:23.700Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895475.76,
		"hash": "84d2c77da90755051eb624ea83663b0cd48ec959c3334e37e3255b5396230f22"
	},
	{
		"id": "f6ac6b766889",
		"ts": "2026-08-15T11:16:23.902Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26490035.44,
		"hash": "f6ac6b7668893b3bebe6c9b660b51fc10376abde8d35e8fd26674987cc563064"
	},
	{
		"id": "fb9dee29342e",
		"ts": "2026-08-15T11:16:24.106Z",
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
		"liquidityUsd": 3970702.74,
		"hash": "fb9dee29342edf6e6de57b4aa9858915ece505908ee9466d8237c7c08e1f0c97"
	},
	{
		"id": "44f7b7a54aad",
		"ts": "2026-08-15T11:16:24.295Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2492889.11,
		"hash": "44f7b7a54aadf197d5159d4980b4284970ef5cb58e3ec12e1434473644148a3d"
	},
	{
		"id": "726db27695f2",
		"ts": "2026-08-15T11:16:24.491Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6686702.47,
		"hash": "726db27695f2bd0161804c01551a7cc51e0648f0df399d765f8f802dab58069a"
	},
	{
		"id": "e8a1fa04c2be",
		"ts": "2026-08-15T11:16:24.676Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 891447.1,
		"hash": "e8a1fa04c2be813323a8aa2ae6270c6904812736385e4a1c46ee160c780413e7"
	},
	{
		"id": "a0a7683f3937",
		"ts": "2026-08-15T11:16:24.926Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263810.48,
		"hash": "a0a7683f39370589590eac9693e19ff64445eb88640533b06b847e7ebc6bb7fa"
	},
	{
		"id": "983311c186c9",
		"ts": "2026-08-15T11:16:25.113Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9398649.03,
		"hash": "983311c186c9a11a825257fee182dfcb05ff26f1ba600209b29893f63bda51dc"
	},
	{
		"id": "a7720a224bc3",
		"ts": "2026-08-15T11:16:25.309Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 849799.04,
		"hash": "a7720a224bc339733e64fd6db5268b89ce362c8017d152875fbb0a5bf912b21d"
	},
	{
		"id": "dd399e087785",
		"ts": "2026-08-15T11:16:25.486Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "dd399e087785959b9050bd48c001bcf1fc6132e5548c46e13f740f232309d447"
	},
	{
		"id": "dd5a212953ba",
		"ts": "2026-08-15T11:16:25.706Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1509165.31,
		"hash": "dd5a212953bab8e290abbecd5c6dbc439527cf724a07d8423f0a7f4d036658f8"
	},
	{
		"id": "5043c83c39a3",
		"ts": "2026-08-15T11:16:25.888Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 474701.21,
		"hash": "5043c83c39a3fd0f3438b6ef50bc066585af7e07109aa569a48e9a9c5ce8afbd"
	},
	{
		"id": "172098e47df0",
		"ts": "2026-08-15T11:16:26.100Z",
		"symbol": "ROBO",
		"token": "0x407A5fb66CB1b3d50004f7091c08A27B42ba6d6F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 443656.45,
		"hash": "172098e47df09daa62dd33a7b000e92dc92cb0e3d23ca26ac2299424dc5b1aa9"
	},
	{
		"id": "c20bcbae65f5",
		"ts": "2026-08-15T10:18:06.366Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111626337.45,
		"hash": "c20bcbae65f5f05b1e3ee66fcf744d5c084052f7552487d2aef069b28a03cc00"
	},
	{
		"id": "083d679eaae2",
		"ts": "2026-08-15T10:18:06.790Z",
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
		"liquidityUsd": 15847208.9,
		"hash": "083d679eaae24c411200a0ddd44ba9ec054325d04bca40b7effb42b99a435edf"
	},
	{
		"id": "b01184506c9b",
		"ts": "2026-08-15T10:18:07.152Z",
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
		"liquidityUsd": 798767.04,
		"hash": "b01184506c9b9ff7b149189ec27e53fe444d7151d14087717325573ccaa53daa"
	},
	{
		"id": "b9a7a18c5e49",
		"ts": "2026-08-15T10:18:07.498Z",
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
		"liquidityUsd": 26491406.54,
		"hash": "b9a7a18c5e490f8d3efae081125fd714259e43a91c05800f196d1c9ff77a6195"
	},
	{
		"id": "423bdb0ecd12",
		"ts": "2026-08-15T10:18:07.700Z",
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
		"liquidityUsd": 4147058.76,
		"hash": "423bdb0ecd12a980728012cd5ec27b0a79d81b1a6e434bd13d2b9b25c28a89dd"
	},
	{
		"id": "9dc7d0604c5d",
		"ts": "2026-08-15T10:18:07.908Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 895475.76,
		"hash": "9dc7d0604c5dab266f22f10298f5ee2943f06919a9e228fad68460da0c7fb5ad"
	},
	{
		"id": "7fa05e2bb539",
		"ts": "2026-08-15T10:18:08.115Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6597460.25,
		"hash": "7fa05e2bb539b6c0716942e8c6efa12103eae5d018bffedbcd733cca132c9af3"
	},
	{
		"id": "e429858dff52",
		"ts": "2026-08-15T10:18:08.318Z",
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
		"liquidityUsd": 3761127.42,
		"hash": "e429858dff528d2816fdce088d6bc3e786eb5e0e8404212b1d204fe466cc34cc"
	},
	{
		"id": "9e490aa640bd",
		"ts": "2026-08-15T10:18:08.521Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6597460.25,
		"hash": "9e490aa640bd281a7194db6f3f4c01356d831e2b42187cd564e8a1c1449913ce"
	},
	{
		"id": "1bc822f9f3c7",
		"ts": "2026-08-15T10:18:08.713Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2484018.33,
		"hash": "1bc822f9f3c784079328b287c54a63531821a55cadb1df41707d879596a5964f"
	},
	{
		"id": "b3534b2a120a",
		"ts": "2026-08-15T10:18:08.899Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 886428.84,
		"hash": "b3534b2a120a41beb08c43ff5b285e98fc55bb740e2fd52ec6e0cab6e6efca94"
	},
	{
		"id": "a083f0980167",
		"ts": "2026-08-15T10:18:09.115Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 262794.98,
		"hash": "a083f0980167d54f9b7c5b1d861218a0522fd44376bfb570a350e87fe6f5bfac"
	},
	{
		"id": "34e4f576dfff",
		"ts": "2026-08-15T10:18:09.333Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9395066.51,
		"hash": "34e4f576dfff24a928034c0c09edb61d39909a2a9293d58c49378737e8d19b5c"
	},
	{
		"id": "142d4ed6d182",
		"ts": "2026-08-15T10:18:09.534Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 848899.33,
		"hash": "142d4ed6d182f5eb3f83ea16a409f3c5cd164a8cf1befac8e478cd356430d2f4"
	},
	{
		"id": "6f316147a555",
		"ts": "2026-08-15T10:18:09.720Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "6f316147a555752142d99e86ebacfdcb95799cb4ebd8e7a4275aaa62b23e6941"
	},
	{
		"id": "435e43998b66",
		"ts": "2026-08-15T10:18:09.929Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1508123.36,
		"hash": "435e43998b66ab2a832c4ecc056586d2f06a864b5219ec25eb0f027be0c3e585"
	},
	{
		"id": "c24d960e0e41",
		"ts": "2026-08-15T10:18:10.129Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 624657.04,
		"hash": "c24d960e0e4125e818dc618ff830830cca73dcf049ab2486a1d0eb962bca69b8"
	},
	{
		"id": "1736867bacde",
		"ts": "2026-08-15T10:18:10.325Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 561553.96,
		"hash": "1736867bacdeb0de4faeb21ba45197c96611d7f8a7a7c7de99b149e891226e59"
	},
	{
		"id": "a683067dc3d9",
		"ts": "2026-08-15T09:21:09.971Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111688246.73,
		"hash": "a683067dc3d9f43f2f7fa83a042b1ab33d70507ec5fc9b2be5416e4cef95c3a3"
	},
	{
		"id": "6efacef0a5dd",
		"ts": "2026-08-15T09:21:10.205Z",
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
		"liquidityUsd": 16386447.27,
		"hash": "6efacef0a5dd5822fc81d54491e744f1042211353a9dff177a8e1be40911c5ac"
	},
	{
		"id": "620df42546b6",
		"ts": "2026-08-15T09:21:10.451Z",
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
		"liquidityUsd": 798767.04,
		"hash": "620df42546b64792b98561e59faa2b2d9110aaa180f69b0cb7600c3c30474b2b"
	},
	{
		"id": "5d98820c4b96",
		"ts": "2026-08-15T09:21:10.681Z",
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
		"liquidityUsd": 26491721.46,
		"hash": "5d98820c4b96833e4b7fd9cd78b0f4689199b5b671f2016243fba4e40ad41092"
	},
	{
		"id": "fc0f076dc482",
		"ts": "2026-08-15T09:21:10.932Z",
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
		"liquidityUsd": 4145815.26,
		"hash": "fc0f076dc482d893628a66cd71d25edc00fd3756066f444199539706ad8f32aa"
	},
	{
		"id": "ce9f0d93e66d",
		"ts": "2026-08-15T09:21:11.160Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893704.17,
		"hash": "ce9f0d93e66db45bf57a93e0a7b3b3524027d72f517203f72d3f90c64d90bc9c"
	},
	{
		"id": "8e49c890d5a2",
		"ts": "2026-08-15T09:21:11.384Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 6522256.47,
		"hash": "8e49c890d5a289f4df26cc50e31d2599cfa018254a5fb8cc7fefe12e1e57568a"
	},
	{
		"id": "dea71236987f",
		"ts": "2026-08-15T09:21:11.622Z",
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
		"liquidityUsd": 3804508.43,
		"hash": "dea71236987f61f9155c462657b2c3a496906ab31b4cc7c8de21304516672edc"
	},
	{
		"id": "764c92f6c845",
		"ts": "2026-08-15T09:21:11.854Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 6517776.18,
		"hash": "764c92f6c845c9c495250402e0cb6edae87d32c2b211cc7da02acd175dab6502"
	},
	{
		"id": "ef2eda1a8362",
		"ts": "2026-08-15T09:21:12.077Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2446598.56,
		"hash": "ef2eda1a836297cbf74ca89bddf1307974c2e2b5f34e82f054e33914e27a39ed"
	},
	{
		"id": "a8fcdeb6ab28",
		"ts": "2026-08-15T09:21:12.287Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 887417.52,
		"hash": "a8fcdeb6ab28d68a1330bf8d4075f1125f92d59b0a7cfeeba2b715760e309efa"
	},
	{
		"id": "a615257450c7",
		"ts": "2026-08-15T09:21:12.498Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260877.34,
		"hash": "a615257450c7ebba1b76c98cd3ea6b3a689ce3f37c6f2cac3f062bc2e49e0f53"
	},
	{
		"id": "edfc31718af4",
		"ts": "2026-08-15T09:21:12.721Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9394931.53,
		"hash": "edfc31718af4591d12fcabcafc6ddf710e3d78fc7f832e04e31cfcb300546920"
	},
	{
		"id": "b72a882a7fad",
		"ts": "2026-08-15T09:21:12.936Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 847557.38,
		"hash": "b72a882a7fad3636e79ad3d2089330a6a967e8f2e6c94e95c55bef48396de93a"
	},
	{
		"id": "798ac7e45893",
		"ts": "2026-08-15T09:21:13.143Z",
		"symbol": "QSAVE",
		"token": "0xAa8319bFF7898f24780B6f80839B1eA13F02A4b8",
		"score": 60,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 0,
		"hash": "798ac7e458938d0f00d31ebee7ef9e117213ad6790abd0dd3e0f2af61ed139ed"
	},
	{
		"id": "746b82e95e7a",
		"ts": "2026-08-15T09:21:13.353Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1508270.2,
		"hash": "746b82e95e7a20023ff99edbfa1dbe9fa177685e0096780c617143774565cc2e"
	},
	{
		"id": "afeeed0a1c17",
		"ts": "2026-08-15T09:21:13.618Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 619883.04,
		"hash": "afeeed0a1c17906ea1b0a1320f89db71570cf15df7e386fec479b4b6c03ca4f0"
	},
	{
		"id": "d34b4f684f5d",
		"ts": "2026-08-15T09:21:13.841Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 558338.92,
		"hash": "d34b4f684f5d6583578a15263130047727f58bc5cb15b71fd8795e0f1798a391"
	}
]
