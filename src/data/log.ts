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
	"updatedAt": "2026-09-13T02:56:08.170Z",
	"tokensScored": 17235,
	"verdictsIssued": 17235,
	"safe": 14605,
	"risky": 1264,
	"likelyRug": 1366,
	"ticks": 985
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "5db271f94b45",
		"ts": "2026-09-13T02:56:03.803Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120346135.52,
		"hash": "5db271f94b454e2d61ff115a5a5b3c6f4c99231a707cde77305bbb803b10caf6"
	},
	{
		"id": "179145e60fe1",
		"ts": "2026-09-13T02:56:04.068Z",
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
		"liquidityUsd": 12335709.93,
		"hash": "179145e60fe111bf2496868468bf43dd6f21300168cd5891e45e09b3372a1379"
	},
	{
		"id": "16de04f2bc59",
		"ts": "2026-09-13T02:56:04.297Z",
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
		"liquidityUsd": 984482.18,
		"hash": "16de04f2bc5940dac4242c0a15cb59c05b7a531759e6f3df428736306a3961f3"
	},
	{
		"id": "cbd82800bf5f",
		"ts": "2026-09-13T02:56:04.549Z",
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
		"liquidityUsd": 34016425.54,
		"hash": "cbd82800bf5f59e6918bf7eca3209a7e60db1c30192ba183cbd07233487b14c5"
	},
	{
		"id": "e12f6dfd5beb",
		"ts": "2026-09-13T02:56:04.788Z",
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
		"liquidityUsd": 3950627.73,
		"hash": "e12f6dfd5beb2a3e998f59ad7053d515a4659f9b8dc9c11b2794aa37950b546d"
	},
	{
		"id": "62df2f993031",
		"ts": "2026-09-13T02:56:05.039Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1184779.34,
		"hash": "62df2f993031f0399409b8bba352f21c6902b072d4eebe6693ccfd718c535212"
	},
	{
		"id": "789455e15e54",
		"ts": "2026-09-13T02:56:05.284Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1706412.24,
		"hash": "789455e15e54751572e754b50c36ddd47d80d7cf0d9c89e69f85d5ad72f76d8a"
	},
	{
		"id": "6c239246eb62",
		"ts": "2026-09-13T02:56:05.536Z",
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
		"liquidityUsd": 2334887.01,
		"hash": "6c239246eb62215b731fcdc01342c6aa5fbdb55a95e36098c80d2fe190efb085"
	},
	{
		"id": "b0423f29036e",
		"ts": "2026-09-13T02:56:05.766Z",
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
		"liquidityUsd": 1624147.17,
		"hash": "b0423f29036e617267085dcca57f3a75ec45ff86de48f04b8fdb2eb7bb7fea33"
	},
	{
		"id": "ac969262c1f7",
		"ts": "2026-09-13T02:56:06.063Z",
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
		"liquidityUsd": 14437363.79,
		"hash": "ac969262c1f7b64e1fb55c8e994809b1fa23e25413a3cab50ece6638acda2338"
	},
	{
		"id": "d3cd4bccdbee",
		"ts": "2026-09-13T02:56:06.297Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 554145.33,
		"hash": "d3cd4bccdbeec1643f060cadf3885918724763bba3fc4c90cc2e9627e9ab9704"
	},
	{
		"id": "d58edf618364",
		"ts": "2026-09-13T02:56:06.532Z",
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
		"liquidityUsd": 1616149.67,
		"hash": "d58edf61836428c8035feab870a688bcee44d436ded065286e2975c03a4f6326"
	},
	{
		"id": "e6a7dd839606",
		"ts": "2026-09-13T02:56:06.752Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1521654.35,
		"hash": "e6a7dd839606ddeb56d7f1ae40ac9aad22e733a470eb4130a3f1b35ef519b8cb"
	},
	{
		"id": "75a47c16df48",
		"ts": "2026-09-13T02:56:07.002Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 565712.11,
		"hash": "75a47c16df483cb6f94420aa467830d58362f79a62ae5dd6b5585e219feafd40"
	},
	{
		"id": "9dfd63435177",
		"ts": "2026-09-13T02:56:07.218Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263680.5,
		"hash": "9dfd63435177da148c6c0e4494d9581eed30132fcf687d4af0b6b5779a31b047"
	},
	{
		"id": "fd5f309ad714",
		"ts": "2026-09-13T02:56:07.440Z",
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
		"liquidityUsd": 748287.59,
		"hash": "fd5f309ad7148d07131f5b9e23a68c74b366a9a4ca1fbda045fd0c7141c1cf3f"
	},
	{
		"id": "509e40b17957",
		"ts": "2026-09-13T02:56:07.667Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66465.27,
		"hash": "509e40b17957352c80159a5d6ff76a154ed86360597bc743dd223f6c81043fdf"
	},
	{
		"id": "fe020bb600be",
		"ts": "2026-09-13T02:56:07.940Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 197253.91,
		"hash": "fe020bb600beee002602eb2d93c2ad36fe194826c58f37d0c49cbf613ee14456"
	},
	{
		"id": "821eae37ef30",
		"ts": "2026-09-13T02:56:08.169Z",
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
		"liquidityUsd": 532205.33,
		"hash": "821eae37ef30529e3666ca4fd58c3f8cff0741306e824a90a4f96736fe83af9b"
	},
	{
		"id": "9e628ff47684",
		"ts": "2026-09-12T23:41:32.958Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120345386.55,
		"hash": "9e628ff476846cf9853493f93778ca55ffac1f4959dae8acc60e5c484ae9b081"
	},
	{
		"id": "8237cd0fca9a",
		"ts": "2026-09-12T23:41:33.418Z",
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
		"liquidityUsd": 16246462.65,
		"hash": "8237cd0fca9ac93cd232e97590ed5f3ac998cc460b5cf24e840734df601a6e4a"
	},
	{
		"id": "5e220e68746f",
		"ts": "2026-09-12T23:41:33.665Z",
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
		"liquidityUsd": 987150.78,
		"hash": "5e220e68746f241fcb36b3becb2d48aa84ee2c89d0c4500846d475618ac27d22"
	},
	{
		"id": "77727045bc7f",
		"ts": "2026-09-12T23:41:33.907Z",
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
		"liquidityUsd": 33953843.35,
		"hash": "77727045bc7f4371ad7333e20ef454fc7822d788d30c5a08664a9c0dca150b50"
	},
	{
		"id": "818b07c52203",
		"ts": "2026-09-12T23:41:34.147Z",
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
		"liquidityUsd": 3963765.52,
		"hash": "818b07c522031bc961449b6811a707fb9d5472f19e26536fb5e12c10fd4d59ac"
	},
	{
		"id": "d7d799657a86",
		"ts": "2026-09-12T23:41:34.391Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1184375.28,
		"hash": "d7d799657a866647de605f83979c685bc370f53f388255581d90774168d08520"
	},
	{
		"id": "b3f800c60c16",
		"ts": "2026-09-12T23:41:34.632Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1604853.15,
		"hash": "b3f800c60c1661d919ab6cfff81c30603ef5e06371bc2e5b3b0852ca69b5ddf5"
	},
	{
		"id": "5f96d7556641",
		"ts": "2026-09-12T23:41:34.872Z",
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
		"liquidityUsd": 1150528.87,
		"hash": "5f96d75566411cb46e2cbd0913b33614d6726c39aad5b1ed76a07e3511d11b61"
	},
	{
		"id": "5919865fac72",
		"ts": "2026-09-12T23:41:35.128Z",
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
		"liquidityUsd": 1604853.15,
		"hash": "5919865fac72a17dd11be025f8f5ffd5986d309891f59790f1f93c81b05dc9eb"
	},
	{
		"id": "311d7be92a71",
		"ts": "2026-09-12T23:41:35.642Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 557849.16,
		"hash": "311d7be92a71519ddc2a9734f353a9f68fb191f13b709e3b3a2cfb643248388f"
	},
	{
		"id": "aeccfdddaeb3",
		"ts": "2026-09-12T23:41:35.868Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14503982.48,
		"hash": "aeccfdddaeb319ddffb1937878813977832b0d86b48b6a35a1fee97a4670aee1"
	},
	{
		"id": "ecc7f312cf90",
		"ts": "2026-09-12T23:41:36.098Z",
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
		"liquidityUsd": 1598716.66,
		"hash": "ecc7f312cf909163fae7bea79b11c6973f197562aa8e8630d48737ab3806e2df"
	},
	{
		"id": "71bff5ee0f27",
		"ts": "2026-09-12T23:41:36.323Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 259029.47,
		"hash": "71bff5ee0f27f278a43b7cacc5c92953c7973fc19091a9878163ac433d31a0c1"
	},
	{
		"id": "56ac4d43aea6",
		"ts": "2026-09-12T23:41:36.547Z",
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
		"liquidityUsd": 705267.37,
		"hash": "56ac4d43aea6843990a72de33b4ad209a18fd32ad68e0572121dea246121a7d1"
	},
	{
		"id": "bbec1aebf272",
		"ts": "2026-09-12T23:41:36.776Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 588664.77,
		"hash": "bbec1aebf272bed7804da1f01a112c3f90c796acd501a81264d0cc8f881e8ccb"
	},
	{
		"id": "08a7e78343ee",
		"ts": "2026-09-12T23:41:37.004Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1527446.84,
		"hash": "08a7e78343ee6118ac9643c600ca590e1e5f2ec6d89dad186892d5e1a3f3da81"
	},
	{
		"id": "f5c8bf4c35d7",
		"ts": "2026-09-12T23:41:37.227Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 64973.54,
		"hash": "f5c8bf4c35d7530785b090b6a7489f1cf463c0bd4c229641171971a97fa836da"
	},
	{
		"id": "f233750fa9ac",
		"ts": "2026-09-12T23:41:37.456Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 200010,
		"hash": "f233750fa9acfdbc82090ca9b25916561b2f57faf4e809b59e08af49d4b40938"
	},
	{
		"id": "e44c368b1571",
		"ts": "2026-09-12T23:41:37.680Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4855359.24,
		"hash": "e44c368b1571b8c08c8ac63e2a98c8580bbc3727e420750dab7f0a23bb172d16"
	},
	{
		"id": "2c46622ef99a",
		"ts": "2026-09-12T21:10:14.950Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120337825.6,
		"hash": "2c46622ef99a08740b73b85b7df4ed16d06fca545eb76fb84987f2dd19c1e065"
	},
	{
		"id": "00d6de3987bb",
		"ts": "2026-09-12T21:10:15.306Z",
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
		"liquidityUsd": 16241649.06,
		"hash": "00d6de3987bbc94e5637abe2c8e8d7990eab36efd2c7a2b34c753580a246c885"
	},
	{
		"id": "f477e2db7bb7",
		"ts": "2026-09-12T21:10:15.504Z",
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
		"liquidityUsd": 990066.28,
		"hash": "f477e2db7bb7e119e123c7e66b38e85744b667c45888466827342951f5f99b16"
	},
	{
		"id": "9cd0153cccdc",
		"ts": "2026-09-12T21:10:15.709Z",
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
		"liquidityUsd": 33736792.73,
		"hash": "9cd0153cccdc2c5ff8f004e1772310782899b1a4b69df380ed5dcc16891d7acb"
	},
	{
		"id": "21d8e707fb36",
		"ts": "2026-09-12T21:10:15.907Z",
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
		"liquidityUsd": 3980932.87,
		"hash": "21d8e707fb361c82800cc8b72be3cb38ab2ba3ed9cc23ee3f6c1f8ebb5b44320"
	},
	{
		"id": "d6ab29339e22",
		"ts": "2026-09-12T21:10:16.110Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1184046.29,
		"hash": "d6ab29339e227b2f850c9660209ff1b5d5aa7c9757eafd5042d4ee77abb29656"
	},
	{
		"id": "f9f0cbaba49e",
		"ts": "2026-09-12T21:10:16.304Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1537697.65,
		"hash": "f9f0cbaba49e9bf1e2ea048b8acdbd220a29fccc83d7ed61b90b563f05f0f653"
	},
	{
		"id": "5b8a3e9ae40d",
		"ts": "2026-09-12T21:10:16.523Z",
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
		"liquidityUsd": 1151360.61,
		"hash": "5b8a3e9ae40d2f80f12309cba4b5efc4bebffa06d33a69055b7e4292c97b637f"
	},
	{
		"id": "6c279f80f3b7",
		"ts": "2026-09-12T21:10:16.727Z",
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
		"liquidityUsd": 1621148.4,
		"hash": "6c279f80f3b7fe4ec67ce9845c404b2047d3369ae761dffcca23221b698af9f8"
	},
	{
		"id": "b73ace8c5566",
		"ts": "2026-09-12T21:10:16.924Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 520671.9,
		"hash": "b73ace8c5566cf3355f3369c3ebe1d64b613fd20ed0ead716ec502fac793785e"
	},
	{
		"id": "674fd1ef1cce",
		"ts": "2026-09-12T21:10:17.113Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14427406.72,
		"hash": "674fd1ef1ccef439f3b43fa02d9c09aaaab2d2c20345f9619cf92bdb8c4a9771"
	},
	{
		"id": "481ec4fdef52",
		"ts": "2026-09-12T21:10:17.298Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 587176.08,
		"hash": "481ec4fdef52b5751999435b284d8506f0bfc6efee9b1bc83951f3ef0d35ef6f"
	},
	{
		"id": "facfda2e5a5c",
		"ts": "2026-09-12T21:10:17.487Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266268.49,
		"hash": "facfda2e5a5c00a99e9b9a9e6b58b0d89378994e8b23286983c10be7fd71fbb2"
	},
	{
		"id": "6389ea3c4470",
		"ts": "2026-09-12T21:10:17.672Z",
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
		"liquidityUsd": 704335.44,
		"hash": "6389ea3c44705dde236d5c6c3978782542f3e50a84607888857d761c59ed1099"
	},
	{
		"id": "f6dddc5d62b5",
		"ts": "2026-09-12T21:10:17.862Z",
		"symbol": "ELON",
		"token": "0xA3d353743164972B37C8E5358fb1E76f0Be8abA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 119174.59,
		"hash": "f6dddc5d62b5f2a4ebe56dddb6f6b7a13d3f894267d967ff7a21fc617062de81"
	},
	{
		"id": "be5c56268421",
		"ts": "2026-09-12T21:10:18.046Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1509624.81,
		"hash": "be5c562684211fae3af912367aacbcd2b689823a85249528da1e0a85b4727e5a"
	},
	{
		"id": "ff273c72be81",
		"ts": "2026-09-12T21:10:18.236Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69788.5,
		"hash": "ff273c72be814f8bf352c3ad905af1aa323dd4101e284611e15c310892f004b1"
	},
	{
		"id": "ddf571b96cc9",
		"ts": "2026-09-12T21:10:18.425Z",
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
		"liquidityUsd": 1537697.65,
		"hash": "ddf571b96cc9be24c13cc7d4a30733e8c2a90c9b65423dacb47b4150d5a8607a"
	},
	{
		"id": "f46034048582",
		"ts": "2026-09-12T21:10:18.622Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 199831.02,
		"hash": "f46034048582201468927f4889ffb4508918cae07944667911fb89422d2d14e3"
	},
	{
		"id": "34fa595b3be9",
		"ts": "2026-09-12T18:54:48.286Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120441596.88,
		"hash": "34fa595b3be98cdb5ba826085a50da4c0c4908d8f8c12e3505793ec67139c638"
	},
	{
		"id": "6f7196baa51c",
		"ts": "2026-09-12T18:54:48.536Z",
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
		"liquidityUsd": 12211697.71,
		"hash": "6f7196baa51c8681f69e718461b48965659616dbfb682e902a90207426be8b83"
	},
	{
		"id": "49c4582e8838",
		"ts": "2026-09-12T18:54:48.774Z",
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
		"liquidityUsd": 990177.26,
		"hash": "49c4582e88382e6cfc2a3548f1c1a26c0f51dae2a3bcd1989a70e7448535ee8c"
	},
	{
		"id": "f80d89ed131c",
		"ts": "2026-09-12T18:54:49.027Z",
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
		"liquidityUsd": 33648636.59,
		"hash": "f80d89ed131c5792b8e5e8d09696cb90b64acb7428366a72734239ad8f07b4ba"
	},
	{
		"id": "a96fd5664c1f",
		"ts": "2026-09-12T18:54:49.266Z",
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
		"liquidityUsd": 3979503.66,
		"hash": "a96fd5664c1f61deb1d8e2c9e0a7f422e80cf6374bfb8073d7a32195d0d7a222"
	},
	{
		"id": "13523892b953",
		"ts": "2026-09-12T18:54:49.519Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1184807.12,
		"hash": "13523892b95310f5d9a5247963dd61e4895959512fcca4a1a5ef4abd50798e63"
	},
	{
		"id": "34dcef07f73a",
		"ts": "2026-09-12T18:54:49.757Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1633491.3,
		"hash": "34dcef07f73a5bc28eef196a37b9f43a04cd4e731b227a8717f457c2ee1b9f88"
	},
	{
		"id": "342b95fcfb66",
		"ts": "2026-09-12T18:54:49.993Z",
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
		"liquidityUsd": 1149724.3,
		"hash": "342b95fcfb66a4b0680856bf96f32fd916c28980f9b1c191a5d74ce32e0ce04b"
	},
	{
		"id": "7d6a34d067ff",
		"ts": "2026-09-12T18:54:50.250Z",
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
		"liquidityUsd": 1633491.3,
		"hash": "7d6a34d067ff6bb4615bb23739d2b87330a7dcd25989468f755e524cb86b58da"
	},
	{
		"id": "b27c35793b43",
		"ts": "2026-09-12T18:54:50.500Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 558458.51,
		"hash": "b27c35793b43a935b594fd2c786729a403453f1b7e18adb095945fac2f9c115c"
	},
	{
		"id": "3ad18b0fc583",
		"ts": "2026-09-12T18:54:50.727Z",
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
		"liquidityUsd": 14255233.04,
		"hash": "3ad18b0fc5832536f841496a975f9cd5f183e52e4235774698e85804dd71022c"
	},
	{
		"id": "6f6852f03eb5",
		"ts": "2026-09-12T18:54:50.944Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 574881.25,
		"hash": "6f6852f03eb5a4777092f24e02d26ca150caba8c51fdd85c04b97202ae9a8513"
	},
	{
		"id": "d9fe2c122fc8",
		"ts": "2026-09-12T18:54:51.176Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 271836.97,
		"hash": "d9fe2c122fc86b07037895021b4afd0044bb2c344013ad5b40997afce40ca727"
	},
	{
		"id": "2484b6d81a7d",
		"ts": "2026-09-12T18:54:51.397Z",
		"symbol": "ELON",
		"token": "0xA3d353743164972B37C8E5358fb1E76f0Be8abA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 93449.46,
		"hash": "2484b6d81a7dabd15e865d2b8a8088b8ae56db4e32e305a9a0e57708544f965e"
	},
	{
		"id": "9b283c082f70",
		"ts": "2026-09-12T18:54:51.628Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1544341.18,
		"hash": "9b283c082f70d4e1647ec3ea9395b790f4573d9d002cf742d9b75dd9cf3772d5"
	},
	{
		"id": "a08946133f02",
		"ts": "2026-09-12T18:54:51.854Z",
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
		"liquidityUsd": 711408.9,
		"hash": "a08946133f0205bd782d544a8c500e271f25a5a181027d1340427951f7b6e5a5"
	},
	{
		"id": "0c27c88fd5c6",
		"ts": "2026-09-12T18:54:52.076Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73041.07,
		"hash": "0c27c88fd5c6791cc1a12938c94b96c57d43be5c3c23eedc9204533a18e8fafd"
	},
	{
		"id": "a35c75ec7bca",
		"ts": "2026-09-12T18:54:52.309Z",
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
		"liquidityUsd": 1522135.65,
		"hash": "a35c75ec7bca6b3ea1cfab2445e09edfce4bdc54eb351a2c01662f63a47be00f"
	},
	{
		"id": "a499612f8d0c",
		"ts": "2026-09-12T18:54:52.529Z",
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
		"liquidityUsd": 492077.54,
		"hash": "a499612f8d0c4f0df6889a10731cfa90d9b220af7ee332e08ffd4ef7894a57be"
	},
	{
		"id": "edc7c9aab945",
		"ts": "2026-09-12T16:42:42.257Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120650736.68,
		"hash": "edc7c9aab9452b7cc46c6d70f39d4e4d2ad944dfb4545b0f52fe445d8a21dd79"
	},
	{
		"id": "9424e29ba295",
		"ts": "2026-09-12T16:42:42.509Z",
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
		"liquidityUsd": 12518122.62,
		"hash": "9424e29ba29527ba1f1b02fd2add05e35e20597870cc97b8fc8e64be9953eba7"
	},
	{
		"id": "d533568ccc45",
		"ts": "2026-09-12T16:42:42.745Z",
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
		"liquidityUsd": 994890.49,
		"hash": "d533568ccc45159819c6cd9f6d3cdef3cdd41a8143ab9f7de616128280776768"
	},
	{
		"id": "245e0bac6e30",
		"ts": "2026-09-12T16:42:42.981Z",
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
		"liquidityUsd": 33811293.64,
		"hash": "245e0bac6e3058dd79328c857569c534a1c43a36ee03abbd31d1d2aa0e98a564"
	},
	{
		"id": "c9fe2ce3272d",
		"ts": "2026-09-12T16:42:43.230Z",
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
		"liquidityUsd": 4006766.71,
		"hash": "c9fe2ce3272d65a5ccfc2b2fbd58bc6b4b5c344e0b30854723d37855567dd48a"
	},
	{
		"id": "b79c2171e5f4",
		"ts": "2026-09-12T16:42:43.497Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1189839.15,
		"hash": "b79c2171e5f4e883db1380f8fda66f7afe161d1dd4f273a7cd3a9f82aaae6237"
	},
	{
		"id": "72fbc4b875d2",
		"ts": "2026-09-12T16:42:43.745Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1608326.85,
		"hash": "72fbc4b875d270a963340161144ec1041728acfed8da2e8a3d55536324505052"
	},
	{
		"id": "5a2472361fb1",
		"ts": "2026-09-12T16:42:44.040Z",
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
		"liquidityUsd": 1154002.21,
		"hash": "5a2472361fb1ac06236433131a18e24dbb08949d0f0001d478e85bfed3c9a181"
	},
	{
		"id": "793aa54650f2",
		"ts": "2026-09-12T16:42:44.281Z",
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
		"liquidityUsd": 1608326.85,
		"hash": "793aa54650f28890dcff0b70979e1f19cd8a035c006b3c92c6543df9f4516970"
	},
	{
		"id": "0efdab2b4489",
		"ts": "2026-09-12T16:42:44.532Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 610293.32,
		"hash": "0efdab2b4489925936ffc3510c5b0250ce5960717666fd5d7cdd92491f326ed4"
	},
	{
		"id": "01f361d76823",
		"ts": "2026-09-12T16:42:44.754Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14243910.39,
		"hash": "01f361d768239b8ceb7a829d9a7514aabf0780e55e743c59b4800e91fd3b6384"
	},
	{
		"id": "d51dbb4772da",
		"ts": "2026-09-12T16:42:44.974Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 564414.73,
		"hash": "d51dbb4772dacc0132ade5d2451d2812021f8a68c491e56f42f53c2c54f44006"
	},
	{
		"id": "175d2f36d09c",
		"ts": "2026-09-12T16:42:45.685Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266778.2,
		"hash": "175d2f36d09cd7ceb7fb0e2943d3ff06dbfd39502afccef487bc57334dc2a5b3"
	},
	{
		"id": "33bd1928b21a",
		"ts": "2026-09-12T16:42:45.911Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1566727.17,
		"hash": "33bd1928b21af94b0f7df8189367349dd2286cdfcbf87c05bec7381580510215"
	},
	{
		"id": "227244ba40df",
		"ts": "2026-09-12T16:42:46.145Z",
		"symbol": "ELON",
		"token": "0xA3d353743164972B37C8E5358fb1E76f0Be8abA3",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 89652.7,
		"hash": "227244ba40df818311d0863f557b18430fa9d22611e8a02eff29b1ed844bf454"
	},
	{
		"id": "11dbe6ca97da",
		"ts": "2026-09-12T16:42:46.365Z",
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
		"liquidityUsd": 716435.18,
		"hash": "11dbe6ca97dab2f8973451170957f30be43bc3acd752a3acfd953ad8f47b5f02"
	},
	{
		"id": "00106d9cc3ba",
		"ts": "2026-09-12T16:42:46.584Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 75908.5,
		"hash": "00106d9cc3baf9253a724eef4953c76503e6cc0ce3946e91baeaf523ca606926"
	},
	{
		"id": "48e4a3a0ba8d",
		"ts": "2026-09-12T16:42:46.815Z",
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
		"liquidityUsd": 503118.53,
		"hash": "48e4a3a0ba8d8198028f9dd061f2b86ee6f44637a6e4b27db2ecb63ae749a40f"
	},
	{
		"id": "329c6a7ed457",
		"ts": "2026-09-12T16:42:47.037Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 350281.2,
		"hash": "329c6a7ed457959c87f45a95a7f133e1cac7292af1e998e46dc656b98fc64fe9"
	},
	{
		"id": "a5d389a985c4",
		"ts": "2026-09-12T13:31:18.131Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 120050242.14,
		"hash": "a5d389a985c488a1b22f6f489a316fcf25585fce86ada5bfbffae1c2eebe74a1"
	},
	{
		"id": "14f7dcb553ab",
		"ts": "2026-09-12T13:31:18.375Z",
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
		"liquidityUsd": 16115168.67,
		"hash": "14f7dcb553ab90972bfddc894273e32addc5e8dbb77dc61cd5552c63bda83bac"
	},
	{
		"id": "bc352cb8be28",
		"ts": "2026-09-12T13:31:18.617Z",
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
		"liquidityUsd": 999547.65,
		"hash": "bc352cb8be287f6a7465828494c8bdef39ef6cb5ea20b43f7ac55d9f8560da4d"
	},
	{
		"id": "4b0da0d4fbab",
		"ts": "2026-09-12T13:31:19.092Z",
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
		"liquidityUsd": 33939793.61,
		"hash": "4b0da0d4fbab9bab239f3a9c216fde469c78140fc224fac6e8fba8e1ea21cd54"
	},
	{
		"id": "27644dc0c8ad",
		"ts": "2026-09-12T13:31:19.559Z",
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
		"liquidityUsd": 4111814.34,
		"hash": "27644dc0c8adb65b7f3aee98d34c6c9a89dbc2bfb4c7a89a0e6aba6a6d9b5db2"
	},
	{
		"id": "ba36f5569aca",
		"ts": "2026-09-12T13:31:19.795Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1194783.76,
		"hash": "ba36f5569aca7ca8675f4e709f9aeed76ca629af9107481257432441e80b05eb"
	},
	{
		"id": "926a166b9243",
		"ts": "2026-09-12T13:31:20.029Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1638911.16,
		"hash": "926a166b9243d18cad849e3e5a831ee1d696809888ff5b8d085ce086981ff618"
	},
	{
		"id": "7b2517a88b06",
		"ts": "2026-09-12T13:31:20.266Z",
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
		"liquidityUsd": 2605938.52,
		"hash": "7b2517a88b062f6949dd143a5032428752e8d0ca7c715a4ea81f1db604d73324"
	},
	{
		"id": "91f7a4c9de18",
		"ts": "2026-09-12T13:31:20.504Z",
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
		"liquidityUsd": 1638911.16,
		"hash": "91f7a4c9de18ec7a7394ad7bd30dd4164063d434b146e91a3ecb9164a7610e00"
	},
	{
		"id": "e44907f185a4",
		"ts": "2026-09-12T13:31:20.754Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 663862.73,
		"hash": "e44907f185a46d00667f8c40a28c6e23c1d57b32cfe996abe3d428249cc96f6d"
	},
	{
		"id": "cf3944c715cf",
		"ts": "2026-09-12T13:31:20.987Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14188510.34,
		"hash": "cf3944c715cfb8cc1dcec62ae3d72318052af9aebdf4b3fb21f3ef0f3f3d84be"
	},
	{
		"id": "53567df730f4",
		"ts": "2026-09-12T13:31:21.206Z",
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
		"liquidityUsd": 743085.09,
		"hash": "53567df730f49986a43a529aac6ae61caa065598d73ae081efe341eed311b7c6"
	},
	{
		"id": "ed7d1d10a61b",
		"ts": "2026-09-12T13:31:21.431Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264585.41,
		"hash": "ed7d1d10a61b5ce7e81f8fd4be2ce35d62d3290d8a11445f689614f91c278437"
	},
	{
		"id": "fc1ff6dbdf03",
		"ts": "2026-09-12T13:31:21.651Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 559718.58,
		"hash": "fc1ff6dbdf037549e52b1719e903907826a9b3c005b5507b90f0db2505255e0f"
	},
	{
		"id": "1f807c52d5ef",
		"ts": "2026-09-12T13:31:21.870Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1527579.43,
		"hash": "1f807c52d5efbba5121fa390e318651c71cf1e741c7d6b6a2e3a1b09071298a5"
	},
	{
		"id": "16a8ba64b1c9",
		"ts": "2026-09-12T13:31:22.499Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149847.97,
		"hash": "16a8ba64b1c93563f60f48aa0b8e0d5caa51706ad2e5aac6e4993bfbd1468fd6"
	},
	{
		"id": "8d75e8aa7931",
		"ts": "2026-09-12T13:31:22.720Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 90531.41,
		"hash": "8d75e8aa7931af806f78afcf4540b9cea6b4a6f1bcda61522e9064f5ce5106f0"
	},
	{
		"id": "53d231bfca46",
		"ts": "2026-09-12T13:31:22.972Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1808619,
		"hash": "53d231bfca4658150c35a99b97acf5cdc6a66ff4d2f006ecb411d0c24a5a35e0"
	},
	{
		"id": "7b3397f8be2d",
		"ts": "2026-09-12T13:31:23.278Z",
		"symbol": "ELON",
		"token": "0xA3d353743164972B37C8E5358fb1E76f0Be8abA3",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 123209.03,
		"hash": "7b3397f8be2df740b46439bfefd12efb288ac3d319539ea1e64a3c13c112e35a"
	},
	{
		"id": "92af01aeb3f5",
		"ts": "2026-09-12T13:31:23.497Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1173687.45,
		"hash": "92af01aeb3f5c4f677b61659e3069196ed1c2fe648e3326824f5cb98e09f5422"
	},
	{
		"id": "1c9c00e98556",
		"ts": "2026-09-12T10:00:12.061Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119650780.78,
		"hash": "1c9c00e98556956ad5148f720c236b80e36a30fde6094522db1b2b7a60321703"
	},
	{
		"id": "658247ac1ca5",
		"ts": "2026-09-12T10:00:12.747Z",
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
		"liquidityUsd": 16047979.59,
		"hash": "658247ac1ca55d96ac9ae9935cd54fe23e204ff8851c1589a59f0de89f980a4a"
	},
	{
		"id": "edaa5edd9ca7",
		"ts": "2026-09-12T10:00:13.324Z",
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
		"liquidityUsd": 998805.62,
		"hash": "edaa5edd9ca7cdc53ec5869dfd765696680c4a0be24f8a9370889664c29a417d"
	},
	{
		"id": "65a001608d60",
		"ts": "2026-09-12T10:00:13.807Z",
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
		"liquidityUsd": 33898258.76,
		"hash": "65a001608d60120e08fd6dd773cce6f7be5d07c12ed4ec794a931a62de4c0c14"
	},
	{
		"id": "c9691f89bf2f",
		"ts": "2026-09-12T10:00:14.103Z",
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
		"liquidityUsd": 4095826.75,
		"hash": "c9691f89bf2f073c3d53dae897c4d363bdcf3559b91b6341fe56176f03c59532"
	},
	{
		"id": "a33664d9f579",
		"ts": "2026-09-12T10:00:14.385Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1192905.5,
		"hash": "a33664d9f57982722ea8de7b8ab8ae4dfb892f3d9167120b8d68a3472786ced7"
	},
	{
		"id": "503914343f4d",
		"ts": "2026-09-12T10:00:14.659Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1614996.51,
		"hash": "503914343f4d82405d0a5ba6f70fc620ef39dcd84025b30b35f2f6a4ac857c88"
	},
	{
		"id": "e503bc81c24e",
		"ts": "2026-09-12T10:00:15.123Z",
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
		"liquidityUsd": 1153296.11,
		"hash": "e503bc81c24e33d097c91535043543ad2752f973fbaaef2d6b0e3a21829f894f"
	},
	{
		"id": "efa26abc6b09",
		"ts": "2026-09-12T10:00:15.620Z",
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
		"liquidityUsd": 1614996.51,
		"hash": "efa26abc6b0911dc868b02dcf9377f377e0094d9cfb57b0002aff843f4b6b6c4"
	},
	{
		"id": "6ea9c2ce5b9f",
		"ts": "2026-09-12T10:00:15.882Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 609616.7,
		"hash": "6ea9c2ce5b9fa7f8678ae1de5f8ae252cd12550ae7b12da775238d648a50dff1"
	},
	{
		"id": "0fcb65dae5b9",
		"ts": "2026-09-12T10:00:16.123Z",
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
		"liquidityUsd": 726305.34,
		"hash": "0fcb65dae5b9af6717adb0c9eaa8f5e3921728ec2e2ff2d93679e2ed33186f20"
	},
	{
		"id": "3750be42f3a3",
		"ts": "2026-09-12T10:00:16.365Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14174053.94,
		"hash": "3750be42f3a360205292cc61c610ec4508ed7df07394cedf4e3c2ce42a9e1e5a"
	},
	{
		"id": "a365228e874f",
		"ts": "2026-09-12T10:00:16.607Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149253.68,
		"hash": "a365228e874f36966c0918406cb753b5120967e5bc517fe457a0c760ccb02812"
	},
	{
		"id": "deb922a50943",
		"ts": "2026-09-12T10:00:16.851Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1499931.32,
		"hash": "deb922a509439676f64518f008e28ad3f815ed79561942dd8d48ee5bf37f1e4e"
	},
	{
		"id": "eb2f527c063e",
		"ts": "2026-09-12T10:00:17.092Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261886.7,
		"hash": "eb2f527c063e5ca0a7e4358e834de6fbd4946cf144022032036e7cb6aae4d3f6"
	},
	{
		"id": "4d312e2f5c20",
		"ts": "2026-09-12T10:00:17.334Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 537765.17,
		"hash": "4d312e2f5c20a9b372f47d72d1aafff7ac7ee4ff0c728ddb4fb880775ab5d184"
	},
	{
		"id": "7bd864fde641",
		"ts": "2026-09-12T10:00:17.576Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1808517.04,
		"hash": "7bd864fde641985da7d212434b8adf85acd72b692e66e4f74e6a7b4c1156a0cf"
	},
	{
		"id": "70dc1af710be",
		"ts": "2026-09-12T10:00:17.819Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 78107,
		"hash": "70dc1af710be0dd3e20262564dcd517ee3f45be5f3002cdb8197587364d47de5"
	},
	{
		"id": "2aabe1c68c86",
		"ts": "2026-09-12T10:00:18.060Z",
		"symbol": "ELON",
		"token": "0xA3d353743164972B37C8E5358fb1E76f0Be8abA3",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 116288.07,
		"hash": "2aabe1c68c86b0c9cd3d2efd93b39f6997ff9aa339b47ca3b9c22a81eb690eb2"
	},
	{
		"id": "b8d0aa4dd72a",
		"ts": "2026-09-12T10:00:18.301Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1174493.48,
		"hash": "b8d0aa4dd72a9f4009acae4bf4b725abbbe6c9af78dc418871635b88a00974b0"
	},
	{
		"id": "8bdd4ba13123",
		"ts": "2026-09-12T05:21:25.903Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119165241.05,
		"hash": "8bdd4ba13123baac89e55ba7308c6545a67ad323a0c9475d3975608dbd1b8342"
	},
	{
		"id": "6e1a9965250f",
		"ts": "2026-09-12T05:21:26.357Z",
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
		"liquidityUsd": 16143863.18,
		"hash": "6e1a9965250fe0d8fff704603f48909f8a7a5891ab2bc5e393dc4f6712c7509b"
	},
	{
		"id": "ce4b150e6692",
		"ts": "2026-09-12T05:21:26.603Z",
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
		"liquidityUsd": 993077.58,
		"hash": "ce4b150e669295ea012585cc592f7b4430cf69f3a78c6ef5297cf6f62ca35975"
	},
	{
		"id": "a17db334687e",
		"ts": "2026-09-12T05:21:26.862Z",
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
		"liquidityUsd": 33702481.56,
		"hash": "a17db334687ef7c999d525dec52db94f0e850165c5fe1b6120ddcbb851a07344"
	},
	{
		"id": "5bdeb9aaa2de",
		"ts": "2026-09-12T05:21:27.103Z",
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
		"liquidityUsd": 4066636.3,
		"hash": "5bdeb9aaa2ded3de0067e2d53d93a6c8046953bb4da7dd32ef85317ce6ff0a7c"
	},
	{
		"id": "f3fb4b30071c",
		"ts": "2026-09-12T05:21:27.350Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1183215.41,
		"hash": "f3fb4b30071c5d6dd8ab5b6a85dea78cfab0bafb5aa16ad74ee6cbc3fd8dc78b"
	},
	{
		"id": "fffa1b33cb23",
		"ts": "2026-09-12T05:21:27.605Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1584045.26,
		"hash": "fffa1b33cb236fcddc34c41f580381217bd863242fcd6e13680cc8dcb0f07af9"
	},
	{
		"id": "a0a5e730faa0",
		"ts": "2026-09-12T05:21:27.849Z",
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
		"liquidityUsd": 1142061.06,
		"hash": "a0a5e730faa08a1a5ce9b2f0c548ec2596cddb179e6b972e7c3726ed75d69f51"
	},
	{
		"id": "781bc720c618",
		"ts": "2026-09-12T05:21:28.303Z",
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
		"liquidityUsd": 1586678.1,
		"hash": "781bc720c6180e9481b20de52c4c10c8aec11af636785af381259dbff6fff6d3"
	},
	{
		"id": "6f7a5dc69fd7",
		"ts": "2026-09-12T05:21:28.545Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 620029.5,
		"hash": "6f7a5dc69fd7831f3fe5108bcbb2acb9163ce25e3f373109a54f2f326be5e539"
	},
	{
		"id": "b7e4bf7ef74b",
		"ts": "2026-09-12T05:21:28.775Z",
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
		"liquidityUsd": 728314.45,
		"hash": "b7e4bf7ef74b422263a317f3a439ade610576eafedcf6f602faaf2739ae701f3"
	},
	{
		"id": "ee6e4b76cdb0",
		"ts": "2026-09-12T05:21:29.002Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1505210.13,
		"hash": "ee6e4b76cdb0bc0887202db2fa66d6a1b983d06f99bcfc6c714b7516e8c8fbef"
	},
	{
		"id": "8bf84d18f2d7",
		"ts": "2026-09-12T05:21:29.241Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14239730.49,
		"hash": "8bf84d18f2d758f22bd1be3d1b05853a3af145b4c4fe9631249ec93cf930efc1"
	},
	{
		"id": "7547447c4b3e",
		"ts": "2026-09-12T05:21:29.470Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 274881.22,
		"hash": "7547447c4b3e77ef05400c5a58ef7c5355ce41a36782c36da87131a99f3047df"
	},
	{
		"id": "95afd2a223c1",
		"ts": "2026-09-12T05:21:29.698Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 157363.39,
		"hash": "95afd2a223c1321b0e7d805ee671ab042af5c8b175d93aacf3fb0909ae7a5170"
	},
	{
		"id": "90abe8c6f4c7",
		"ts": "2026-09-12T05:21:29.941Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 506770.45,
		"hash": "90abe8c6f4c7bc790e40a9b4145d4ccd7836018ef890e2a508aca49b42275c4d"
	},
	{
		"id": "69f1d2b15662",
		"ts": "2026-09-12T05:21:30.168Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 373218.38,
		"hash": "69f1d2b15662f39e70dce09980055bd1df516508177e0fdaa953b396bbb3364d"
	},
	{
		"id": "bf9362162106",
		"ts": "2026-09-12T05:21:30.395Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74097.46,
		"hash": "bf93621621065e7bb4fb0afcec848aba1f8aca8a597731206301cc7ee88f41d6"
	},
	{
		"id": "c4a7de5afd34",
		"ts": "2026-09-12T05:21:30.636Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4684131.93,
		"hash": "c4a7de5afd34e64f741110483ee5175496ce0c8a14e6d0e28f7bc0d4a91b2050"
	},
	{
		"id": "8dfa604ceaf0",
		"ts": "2026-09-12T00:52:02.933Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119181172.65,
		"hash": "8dfa604ceaf0d8c57a705250e7837dfb310e59016522c3e1a056de49d66f4912"
	},
	{
		"id": "ec8df7daeca7",
		"ts": "2026-09-12T00:52:03.264Z",
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
		"liquidityUsd": 12438092.41,
		"hash": "ec8df7daeca7f257c17a1c66453d6e92907eae340b93696f1ea7f5b127b25c8a"
	},
	{
		"id": "e911bec94fb1",
		"ts": "2026-09-12T00:52:03.517Z",
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
		"liquidityUsd": 993396.7,
		"hash": "e911bec94fb1265bb64e956e948ad8114339c39ce20dfc1fdbb6402907a44672"
	},
	{
		"id": "8681cef775b6",
		"ts": "2026-09-12T00:52:03.771Z",
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
		"liquidityUsd": 33803407.21,
		"hash": "8681cef775b64cd325c87729023286dd28442cf929d8ac41861f9fe0cd0a6188"
	},
	{
		"id": "0eeadb8a1816",
		"ts": "2026-09-12T00:52:04.018Z",
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
		"liquidityUsd": 4043688.05,
		"hash": "0eeadb8a1816400e634649f6b6f186bae34576016537d5b807253b04f0cb0fc9"
	},
	{
		"id": "a6335f5679ad",
		"ts": "2026-09-12T00:52:04.263Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1179164.56,
		"hash": "a6335f5679adcc32938beefad4aee6cb65defd05770d346938f12091b604f456"
	},
	{
		"id": "19a1dbb5eead",
		"ts": "2026-09-12T00:52:04.577Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1619947.38,
		"hash": "19a1dbb5eeade72686fa57f50bd8864014986fb945df9b4f0aee8e89bf300781"
	},
	{
		"id": "f942e04adf9b",
		"ts": "2026-09-12T00:52:04.826Z",
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
		"liquidityUsd": 1145224.38,
		"hash": "f942e04adf9bc92ddd8248dcb4d22a0c2650de3ed57d101b3f4b6cf4f6601e22"
	},
	{
		"id": "0b530ac2f085",
		"ts": "2026-09-12T00:52:05.082Z",
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
		"liquidityUsd": 1619947.38,
		"hash": "0b530ac2f085d18f6a763e05304f2eae8c7dd45b67da8d0d6150b3fdd6d2b406"
	},
	{
		"id": "348d8e991bf0",
		"ts": "2026-09-12T00:52:05.324Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 627789.84,
		"hash": "348d8e991bf0209bde21d951cff881062b796b3e213af4edd9a312071808fb36"
	},
	{
		"id": "13f81afc6a05",
		"ts": "2026-09-12T00:52:05.558Z",
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
		"liquidityUsd": 694495.82,
		"hash": "13f81afc6a055f9fe7bec0b99ff3d95e80f3b7b8a126af3a38d1ab48912331b7"
	},
	{
		"id": "09fb831413ac",
		"ts": "2026-09-12T00:52:05.788Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1507292.01,
		"hash": "09fb831413ac631d7b8d2b6647e2bbd2146da90ec0ece839af894ff60cacd590"
	},
	{
		"id": "f4b25b4eb35e",
		"ts": "2026-09-12T00:52:06.016Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14185789.79,
		"hash": "f4b25b4eb35e87b3c2ce84477ebb857b6d861067e73afb9a13669ded9f09a964"
	},
	{
		"id": "30f94dec2cb9",
		"ts": "2026-09-12T00:52:06.250Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 152680.17,
		"hash": "30f94dec2cb9ba49854bd3d0a1bb18985aeb09446cbce180a5cf855753caa04f"
	},
	{
		"id": "8b3778f98edb",
		"ts": "2026-09-12T00:52:06.479Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 296627.05,
		"hash": "8b3778f98edb301f8fc56b0c9ae70f8de8b88c62c15f3a9b32111d87b5357983"
	},
	{
		"id": "54ff6ffa57e3",
		"ts": "2026-09-12T00:52:06.709Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 385561.74,
		"hash": "54ff6ffa57e34f4943fcfb7f7a038bc14ee5ad8fc45d3d63c2553f9824fc85f4"
	},
	{
		"id": "85113c81a4aa",
		"ts": "2026-09-12T00:52:06.938Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 503259.99,
		"hash": "85113c81a4aa379dbe0c435409a53f70d009763d3636bd3f53d028e7b7700c9a"
	},
	{
		"id": "6df54045e28c",
		"ts": "2026-09-12T00:52:07.170Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 451177.32,
		"hash": "6df54045e28ce09b0acb91e40a3d328dc38fc9eed15345a0ee324f224560ec2a"
	},
	{
		"id": "5c485ab6ba34",
		"ts": "2026-09-12T00:52:07.401Z",
		"symbol": "ELON",
		"token": "0xA3d353743164972B37C8E5358fb1E76f0Be8abA3",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 192779.94,
		"hash": "5c485ab6ba34fd34b86aaacb0b8078e748a725c57368a3d68b51d65baab587a3"
	},
	{
		"id": "94a63e63447c",
		"ts": "2026-09-11T22:12:04.904Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119159206.5,
		"hash": "94a63e63447c740e51714a582c5c05757f18e7572f39ed38401ae2fbd17dce78"
	},
	{
		"id": "b64ec042dcad",
		"ts": "2026-09-11T22:12:05.544Z",
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
		"liquidityUsd": 18012465.83,
		"hash": "b64ec042dcad7995802429949692969ad8ae5f6ecfb7ba55b156389b857ad668"
	},
	{
		"id": "7d16b07226be",
		"ts": "2026-09-11T22:12:05.992Z",
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
		"liquidityUsd": 994339.84,
		"hash": "7d16b07226be7f8607b43611f647c67b9dd47b994208b43e7ac2a11382eea9e6"
	},
	{
		"id": "900f06ebda46",
		"ts": "2026-09-11T22:12:06.296Z",
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
		"liquidityUsd": 33845538.16,
		"hash": "900f06ebda46cccfddc8380d23069c9bcbf87750e2d545c6d3a83ca3572df063"
	},
	{
		"id": "025d7719f24e",
		"ts": "2026-09-11T22:12:06.544Z",
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
		"liquidityUsd": 4049251.59,
		"hash": "025d7719f24ee2ae1c0c93f92d46551d9d8c2e5c0611faeb032267f8f760cfa8"
	},
	{
		"id": "b1da67df81cc",
		"ts": "2026-09-11T22:12:06.789Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1173887.05,
		"hash": "b1da67df81cc15080e78fc09a0c43c7d8d52bae874b85ee4bb2897839e523335"
	},
	{
		"id": "5e52c732fe4b",
		"ts": "2026-09-11T22:12:07.044Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1610825.82,
		"hash": "5e52c732fe4bf209328e9f4e5ad54cc6090e062cbd2067456172b527684bc81d"
	},
	{
		"id": "2425cad16cde",
		"ts": "2026-09-11T22:12:07.297Z",
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
		"liquidityUsd": 1145799.06,
		"hash": "2425cad16cdef4f662bf2275fb2af4881acd0b02ce8ebd99adb8bdc07f49a3dd"
	},
	{
		"id": "0d2744a4a5b1",
		"ts": "2026-09-11T22:12:07.811Z",
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
		"liquidityUsd": 1611369.2,
		"hash": "0d2744a4a5b147304f08c212a6298e18fa502878d0d1e62f606dce3aa0c28087"
	},
	{
		"id": "0b28dacb19a0",
		"ts": "2026-09-11T22:12:08.061Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 560491.22,
		"hash": "0b28dacb19a0810f0c212f9fb249807f0f6917ce2f5cd43a15ccf7366547f6b4"
	},
	{
		"id": "14df6c830fe2",
		"ts": "2026-09-11T22:12:08.293Z",
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
		"liquidityUsd": 716532.07,
		"hash": "14df6c830fe219b4a96bdb5e000f6b14e8ddf600e07fa5e08ee86d70ef691268"
	},
	{
		"id": "1d8028648be2",
		"ts": "2026-09-11T22:12:08.529Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1622128.71,
		"hash": "1d8028648be2b4524d19741981040af516295a29ffeaeeb75a9923faf3dbed59"
	},
	{
		"id": "404b889428e2",
		"ts": "2026-09-11T22:12:08.765Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14422252.01,
		"hash": "404b889428e266f0a6a99a5aebf00fe3886f6183233a9b0a776bcbe072306fed"
	},
	{
		"id": "9f31af612422",
		"ts": "2026-09-11T22:12:08.995Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 159374.48,
		"hash": "9f31af6124220421a97d8ad1b391b709cfe6d072380f452f0751f7873f8861ef"
	},
	{
		"id": "299b135c79f4",
		"ts": "2026-09-11T22:12:09.224Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280127.89,
		"hash": "299b135c79f4760836ebf1b3eec1d26f65972dfd56994964d76b018becfd4fb1"
	},
	{
		"id": "8ec3c05f5abc",
		"ts": "2026-09-11T22:12:09.457Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 387851.36,
		"hash": "8ec3c05f5abcd79aa3e4fc9f77bde42e6589ec627341a1d9d06da321b8a5a830"
	},
	{
		"id": "e9393faecc2c",
		"ts": "2026-09-11T22:12:09.685Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 461262.36,
		"hash": "e9393faecc2c257d52084ed913b6db9df3552eacd4dddd97ce1d0cbd827ebd75"
	},
	{
		"id": "7418d09a4a65",
		"ts": "2026-09-11T22:12:09.915Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1826706.3,
		"hash": "7418d09a4a65e6c84d2db95cc0f917856331710d2a4438e4f40c51df0e9f4e46"
	},
	{
		"id": "c0d577d231b2",
		"ts": "2026-09-11T22:12:10.145Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1175314.66,
		"hash": "c0d577d231b209f1d0094ee2847170ae8fc8b84a50b51785fac27dacec68e956"
	},
	{
		"id": "e54672455765",
		"ts": "2026-09-11T19:25:09.626Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119275123.44,
		"hash": "e54672455765369076059227e1cc58c100c63139dd5d278d03274a578a92fcaf"
	},
	{
		"id": "c4a9d85059be",
		"ts": "2026-09-11T19:25:09.838Z",
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
		"liquidityUsd": 17885725.8,
		"hash": "c4a9d85059be4ffdd5f7f320f6ac6e151edfd03c96ac4fe8ac285e0aa273752e"
	},
	{
		"id": "0094f0759f18",
		"ts": "2026-09-11T19:25:10.042Z",
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
		"liquidityUsd": 1004620.48,
		"hash": "0094f0759f182f69c604ed6cbbf5902ba5c0a66454ecbedae3fbed354e2ef9da"
	},
	{
		"id": "bc1fd98a28c9",
		"ts": "2026-09-11T19:25:10.255Z",
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
		"liquidityUsd": 33305652.58,
		"hash": "bc1fd98a28c939d5b0210d8d2f54650b28f633a820d16332bdcb6b961784f8db"
	},
	{
		"id": "30c48b8c067a",
		"ts": "2026-09-11T19:25:10.475Z",
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
		"liquidityUsd": 4093784.18,
		"hash": "30c48b8c067a520df1370662b69e587c7f67742097c5c53bc973479aa7305978"
	},
	{
		"id": "8e2eefb8a37a",
		"ts": "2026-09-11T19:25:10.694Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1185979.65,
		"hash": "8e2eefb8a37a7974913a71293d3c4ca4755bfd342adb61ea6051fdc17ef440ff"
	},
	{
		"id": "41368d826c96",
		"ts": "2026-09-11T19:25:10.897Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1369937.69,
		"hash": "41368d826c96988582c5e48ff5f9db7a7d7ad51bcf8fd11e3ede4e47e706c828"
	},
	{
		"id": "d5e0a37a2e8a",
		"ts": "2026-09-11T19:25:11.126Z",
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
		"liquidityUsd": 1156802.05,
		"hash": "d5e0a37a2e8a5e7c6c95961f4ce1e47faced5a2218922a8caa8158c086314ab4"
	}
]
