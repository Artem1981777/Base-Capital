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
	"updatedAt": "2026-07-23T23:56:55.948Z",
	"tokensScored": 5209,
	"verdictsIssued": 5209,
	"safe": 4560,
	"risky": 412,
	"likelyRug": 237,
	"ticks": 317
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "2d87f77d7d6d",
		"ts": "2026-07-23T23:56:52.263Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109838251.55,
		"hash": "2d87f77d7d6d10218a6dc10760714e23baca40bc5143dab455f9427f51abcf4f"
	},
	{
		"id": "d5c40e575dd9",
		"ts": "2026-07-23T23:56:52.505Z",
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
		"liquidityUsd": 13741959.18,
		"hash": "d5c40e575dd9063b77e4f18e3d0551769120144a0b2d4e6fae80dcc43050e022"
	},
	{
		"id": "0912fc725ed5",
		"ts": "2026-07-23T23:56:52.746Z",
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
		"liquidityUsd": 805503.22,
		"hash": "0912fc725ed57d14d24497a683b933007479a241beca36912b3447fa964ae4fd"
	},
	{
		"id": "5843994d411c",
		"ts": "2026-07-23T23:56:52.982Z",
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
		"liquidityUsd": 25814100.58,
		"hash": "5843994d411c72d9beaa2f1968830112ac21cd5441f4c6fd8a120dbf13a14450"
	},
	{
		"id": "2f1497702cc8",
		"ts": "2026-07-23T23:56:53.220Z",
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
		"liquidityUsd": 5086400.66,
		"hash": "2f1497702cc8872d099b263e53b12ea863e9b33df9c4ce23fc00b0b2a55d2e6a"
	},
	{
		"id": "4047fd51c8ff",
		"ts": "2026-07-23T23:56:53.456Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 945539.04,
		"hash": "4047fd51c8ffa1598e951a50bd83ca16d4f7238bf5a14d64eb104ae92a517961"
	},
	{
		"id": "2c236b46126b",
		"ts": "2026-07-23T23:56:53.689Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25814100.58,
		"hash": "2c236b46126b222142ffac976c40ca96eb1dda37d5af3ff6184ec02a6f5806a3"
	},
	{
		"id": "0bbf35827c0c",
		"ts": "2026-07-23T23:56:53.928Z",
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
		"liquidityUsd": 2551341.86,
		"hash": "0bbf35827c0c488849777ec91de3e6cd03b7359eb6c884d63cfd4d19e617e503"
	},
	{
		"id": "8b5d243925b8",
		"ts": "2026-07-23T23:56:54.164Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 302379.3,
		"hash": "8b5d243925b8f57fbcd1968bef09761ea47f9af22b8e3f1c36d5d060a5b44fbb"
	},
	{
		"id": "2226aa83c16d",
		"ts": "2026-07-23T23:56:54.400Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1984745.72,
		"hash": "2226aa83c16dad4e92053db13b995689de4007d5f605ccc7ddaf722dafaf8337"
	},
	{
		"id": "33a8fe9fbcd0",
		"ts": "2026-07-23T23:56:54.619Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 673036.46,
		"hash": "33a8fe9fbcd02c24f439ebcfef4293ee0fb9f7c6e4636fc435e14246e6f161db"
	},
	{
		"id": "cf94bab24fbb",
		"ts": "2026-07-23T23:56:54.839Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4781878.7,
		"hash": "cf94bab24fbb91ae04466b8057c43b0da70d47b5ef7d9efb2822d691d7753f39"
	},
	{
		"id": "0b522052fc2b",
		"ts": "2026-07-23T23:56:55.061Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1004703.55,
		"hash": "0b522052fc2bf213af9a906e3440e9542cf68e28185095a1ceea2b40fb0c4e31"
	},
	{
		"id": "0c6fe2e0e677",
		"ts": "2026-07-23T23:56:55.282Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 85700.45,
		"hash": "0c6fe2e0e677e53898800ded338889c84d59121aca2268bf9a1e0a1942de6e89"
	},
	{
		"id": "0e8df98c259b",
		"ts": "2026-07-23T23:56:55.507Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 35220675.9,
		"hash": "0e8df98c259bf1fac23c2e5101209e6442da7e1b24dce9f8a96e18714060b08d"
	},
	{
		"id": "67a5cbe7ccf9",
		"ts": "2026-07-23T23:56:55.727Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2002520.67,
		"hash": "67a5cbe7ccf991d83010ec1dc903efb72ce1c7f45488caa1869223a2f52c8221"
	},
	{
		"id": "0f494a90509e",
		"ts": "2026-07-23T23:56:55.947Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2033990.41,
		"hash": "0f494a90509e121decb62b2f2c56a99b069d7ef21f0830336926d8bfab0c9f85"
	},
	{
		"id": "1e631ab401ba",
		"ts": "2026-07-23T22:09:58.893Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109929319.2,
		"hash": "1e631ab401ba721b1c8b6ae6c986f6fa727f1d8c8ec7af3dd7e3499835313d58"
	},
	{
		"id": "1c0d75649e18",
		"ts": "2026-07-23T22:09:59.139Z",
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
		"liquidityUsd": 16248812.14,
		"hash": "1c0d75649e1838e3fee2532c4fa0c3a727d7a01c1c0fc689b7770dbe7e59316a"
	},
	{
		"id": "74a5eea1f96a",
		"ts": "2026-07-23T22:09:59.374Z",
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
		"liquidityUsd": 809363.54,
		"hash": "74a5eea1f96a06a63376cec43db2be2b7f7774792fb963d2562894b45b80d31f"
	},
	{
		"id": "262bb619abf6",
		"ts": "2026-07-23T22:09:59.614Z",
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
		"liquidityUsd": 25815638.66,
		"hash": "262bb619abf6e93eff1eef759c14bec0701577288aa8f83f7b78362c9ea3d61f"
	},
	{
		"id": "1f7b5aa95fab",
		"ts": "2026-07-23T22:09:59.850Z",
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
		"liquidityUsd": 5100827.13,
		"hash": "1f7b5aa95fab38c66b940bc40bf2ee7723a5fb636481b3af6e27beea4bb14b9e"
	},
	{
		"id": "17904f4b423f",
		"ts": "2026-07-23T22:10:00.092Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 946342.95,
		"hash": "17904f4b423f61c015a21833262e1cbe386c99dbf26c4dcdc5d57dfdca425e1c"
	},
	{
		"id": "497c85b56041",
		"ts": "2026-07-23T22:10:00.325Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25815638.66,
		"hash": "497c85b56041618275b88ca99815633355cc2b95fa2c485530b23e76b2da073c"
	},
	{
		"id": "d2ff4b5e49c2",
		"ts": "2026-07-23T22:10:00.577Z",
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
		"liquidityUsd": 2559171.47,
		"hash": "d2ff4b5e49c24145fc7e70728bae7d9ba0ce660c5794c1671d0b9904d8bb73dd"
	},
	{
		"id": "fd8ae9171ce9",
		"ts": "2026-07-23T22:10:00.819Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 359301.15,
		"hash": "fd8ae9171ce9d25ad0721159a6a4ae56620c30aae86b9c97a8717ccf326ce421"
	},
	{
		"id": "578919fddedc",
		"ts": "2026-07-23T22:10:01.064Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1942954.05,
		"hash": "578919fddedcea4370110b9c056130b28ae827e172f33a31b52c9f15794edacf"
	},
	{
		"id": "f464af64b0ce",
		"ts": "2026-07-23T22:10:01.297Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 679201.33,
		"hash": "f464af64b0ce6de23e6e4cbfb3566bde0c1c49d84d8e492ab595d07573735820"
	},
	{
		"id": "3d8fc8e1eb62",
		"ts": "2026-07-23T22:10:01.664Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4782782.58,
		"hash": "3d8fc8e1eb620c69eaac094b4c145faea58d42381a295f5a9f24cc84a586726c"
	},
	{
		"id": "1fa8f1a2d9a3",
		"ts": "2026-07-23T22:10:02.129Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1987095.87,
		"hash": "1fa8f1a2d9a35544624e03cf3832f6d0a43855cb0c8aee38e122fe7868fbf14c"
	},
	{
		"id": "b9b062954a0c",
		"ts": "2026-07-23T22:10:02.625Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1009772.1,
		"hash": "b9b062954a0c8a986a1a1a505441c1fa20f9785667787371f90154a1f0ec8547"
	},
	{
		"id": "cf1cab394370",
		"ts": "2026-07-23T22:10:02.959Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 69,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.38,
		"flags": [
			"new_pair_under_24h",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 31748640.45,
		"hash": "cf1cab394370e8ac06c3da7bfa2152b9ebdf83521d1a7c890919f8e6c5c5afc9"
	},
	{
		"id": "c1a8405dea48",
		"ts": "2026-07-23T22:10:03.342Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 127034.21,
		"hash": "c1a8405dea48c9196aa2c614fad038fdb06f1c3ae2ef4468d8939eefb50a6368"
	},
	{
		"id": "aeef2f476618",
		"ts": "2026-07-23T22:10:03.561Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2071657.52,
		"hash": "aeef2f4766182140c6eb58b9dcd45e10d89c0c118c6e965f25c5741ecfad1a3c"
	},
	{
		"id": "28b1de8de53e",
		"ts": "2026-07-23T20:59:28.296Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109904238.12,
		"hash": "28b1de8de53e86797bbf89f5b2a00e7b218addc7fd2e049c879ae9c026eafa81"
	},
	{
		"id": "46b8b595dfc4",
		"ts": "2026-07-23T20:59:28.784Z",
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
		"liquidityUsd": 16804293.55,
		"hash": "46b8b595dfc42a497e131d2de1e71c125b9512e0e7587245121209952752879b"
	},
	{
		"id": "fc817d869c48",
		"ts": "2026-07-23T20:59:29.021Z",
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
		"liquidityUsd": 812137.19,
		"hash": "fc817d869c48437e3e99e01b929c6a44db26189ecb70389e82954a1487f5bc99"
	},
	{
		"id": "a3c75aea721e",
		"ts": "2026-07-23T20:59:29.270Z",
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
		"liquidityUsd": 25905830.01,
		"hash": "a3c75aea721e3630920392dbb7621e2e44d3c33bff8af3b22bcc4f451db3e0b3"
	},
	{
		"id": "98dd0b881002",
		"ts": "2026-07-23T20:59:29.521Z",
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
		"liquidityUsd": 5093468.35,
		"hash": "98dd0b881002da21c38bfa8a4931a3dbf7df22dc7c1b08afa136696a94442c31"
	},
	{
		"id": "426c045bff01",
		"ts": "2026-07-23T20:59:29.757Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 933184.64,
		"hash": "426c045bff019b3219580ea1591d9817b13b0e8d4b3b750074454a19a0dca565"
	},
	{
		"id": "9adaf2618b5c",
		"ts": "2026-07-23T20:59:30.002Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25905830.01,
		"hash": "9adaf2618b5c7b7672c429cb071d12add00c90a74c7c448b728613e8eb042e69"
	},
	{
		"id": "5685f982ec54",
		"ts": "2026-07-23T20:59:30.254Z",
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
		"liquidityUsd": 2562744.4,
		"hash": "5685f982ec54ac9a034850482e0728c04acebd4cd6b0749a3ee57c0dbd8783ed"
	},
	{
		"id": "1d275d7751ea",
		"ts": "2026-07-23T20:59:30.488Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 377205.58,
		"hash": "1d275d7751ea81eadc72e255185dfe12e403491db800224fc7ab19656e51544e"
	},
	{
		"id": "886daf84971c",
		"ts": "2026-07-23T20:59:30.739Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1950625.64,
		"hash": "886daf84971c7f1042754783bf65ccf933f1df3668fd0ef0f4bdbfe92b822597"
	},
	{
		"id": "f58270735c59",
		"ts": "2026-07-23T20:59:30.973Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 679888.82,
		"hash": "f58270735c59fe36178a66a17901ecb89edb15047d4c6154c1ed88ce9a9b5fb1"
	},
	{
		"id": "91f06e3dc2a4",
		"ts": "2026-07-23T20:59:31.190Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4763827.6,
		"hash": "91f06e3dc2a4c67738a08a53cec70dc34c5289e2eb22817056f7a28fee1315fc"
	},
	{
		"id": "ac73760b495b",
		"ts": "2026-07-23T20:59:31.422Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2001811.95,
		"hash": "ac73760b495bc5837e17e2e4a7fc4dfe4b1d33039353520028029a88f4f88994"
	},
	{
		"id": "7de610f6689e",
		"ts": "2026-07-23T20:59:31.656Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 117674.49,
		"hash": "7de610f6689e61d038d480fb1a2c17cb9e5463a9f4a9d942357f151b4ec1b42f"
	},
	{
		"id": "10a38b93d6b3",
		"ts": "2026-07-23T20:59:31.873Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 31748640.45,
		"hash": "10a38b93d6b3d3fe73e958ec27654cd52ba0a195ca94b6c37adce25c3a6bab1b"
	},
	{
		"id": "c64327eb381a",
		"ts": "2026-07-23T20:59:32.105Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1013550.46,
		"hash": "c64327eb381a0b6169ea9465260faa2491cd7b5a89103ddfbe68ac69e8772371"
	},
	{
		"id": "5ed4fd7a580d",
		"ts": "2026-07-23T20:59:32.338Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2050778.55,
		"hash": "5ed4fd7a580d772018596d5f3b50d60bf381c24f1b7357a1271c0138704eefd4"
	},
	{
		"id": "49b3affc24fa",
		"ts": "2026-07-23T19:09:49.170Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109873085.82,
		"hash": "49b3affc24fa2bda02ac730cfaec76e01a107fd3c6ee1c2f70decca7579f9860"
	},
	{
		"id": "716dbb80ed42",
		"ts": "2026-07-23T19:09:49.634Z",
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
		"liquidityUsd": 16022120.6,
		"hash": "716dbb80ed4204144e3ed64abe51956eb8d014244ff0871c5b8b48536062c385"
	},
	{
		"id": "ce512ecd69b6",
		"ts": "2026-07-23T19:09:49.889Z",
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
		"liquidityUsd": 810396.39,
		"hash": "ce512ecd69b60a7e79d3bbc8cfae1a011a55a671db0d15eca629d924125b23cf"
	},
	{
		"id": "127a6749c654",
		"ts": "2026-07-23T19:09:50.142Z",
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
		"liquidityUsd": 25708103.11,
		"hash": "127a6749c654952c57bc996774746a7378b005a04db0addf0b7ad480165346f7"
	},
	{
		"id": "22eb026fe93f",
		"ts": "2026-07-23T19:09:50.404Z",
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
		"liquidityUsd": 5067707.56,
		"hash": "22eb026fe93f52bd37686df6c689935e0a4f44fc475c61bff4f93ff574302c67"
	},
	{
		"id": "306015eed2b5",
		"ts": "2026-07-23T19:09:50.653Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931702.84,
		"hash": "306015eed2b560e51e37fd6f84e47d6efb5d8efc672f1f1fc92c6d197deaddf2"
	},
	{
		"id": "3a538547806f",
		"ts": "2026-07-23T19:09:50.905Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25708103.11,
		"hash": "3a538547806f00b09769fe794e074379b9ef4425878e9cfefe1452c1e712b36b"
	},
	{
		"id": "69e00d34a272",
		"ts": "2026-07-23T19:09:51.158Z",
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
		"liquidityUsd": 2558602.59,
		"hash": "69e00d34a272321f74030814273f39a73a2ded4bd7c3aeed326de22fcb7cba5c"
	},
	{
		"id": "6b8bdf1c58a0",
		"ts": "2026-07-23T19:09:51.412Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 352680.61,
		"hash": "6b8bdf1c58a0a702495a53f64d5d68a5ac8e760782367447537bf8751e7c0665"
	},
	{
		"id": "c51c4081c143",
		"ts": "2026-07-23T19:09:51.669Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1949204,
		"hash": "c51c4081c1432d3d8074faecfabd4a926d0735c18c1f1e30d293863027ce8772"
	},
	{
		"id": "85877c9ff6dc",
		"ts": "2026-07-23T19:09:51.905Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 679923.04,
		"hash": "85877c9ff6dcfdefa43c9618dd8b55a6fb2e42495193bb56aad8e7ec04e4e782"
	},
	{
		"id": "6850bde1638f",
		"ts": "2026-07-23T19:09:52.140Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4778758.84,
		"hash": "6850bde1638f09667623a372025c24e8f3e95cd0bb336c8abb118b5e4518bd7e"
	},
	{
		"id": "1e067a3ff742",
		"ts": "2026-07-23T19:09:52.375Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2007862.7,
		"hash": "1e067a3ff7422b43124ffcca7011ef22982bdc5880b9f56570b682914dde7274"
	},
	{
		"id": "7e120bf9d7e2",
		"ts": "2026-07-23T19:09:52.612Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 125810.06,
		"hash": "7e120bf9d7e28f341803b12854c2ced0e44f52d6edd39e7b667a9e1e4e86902d"
	},
	{
		"id": "bda7b187ec14",
		"ts": "2026-07-23T19:09:52.934Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 32937521.62,
		"hash": "bda7b187ec14416e618e58a53c128216c310eb16fcb10d8c4381bdde496a88a8"
	},
	{
		"id": "b19f8d814ac7",
		"ts": "2026-07-23T19:09:53.189Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1011119.17,
		"hash": "b19f8d814ac79cf17191bbe85bfe8032b91d3593b1d45bfcf8303c1927074ce8"
	},
	{
		"id": "f9d77021ac8c",
		"ts": "2026-07-23T19:09:53.423Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2063423.16,
		"hash": "f9d77021ac8cab2a1445722a0a99acbbe0b3cd0251cc515723a6a76d4e17fee8"
	},
	{
		"id": "a874bcc59e8b",
		"ts": "2026-07-23T17:17:11.606Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110228467.74,
		"hash": "a874bcc59e8b321410bfb94693bb26535623e2f7f928825fe0286d638c95ead6"
	},
	{
		"id": "3e6760210832",
		"ts": "2026-07-23T17:17:12.088Z",
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
		"liquidityUsd": 15972071.31,
		"hash": "3e67602108329e7c80a255aecf7957a52874b02372ddf6400b7fac00204da41f"
	},
	{
		"id": "a5e95ddc38de",
		"ts": "2026-07-23T17:17:12.329Z",
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
		"liquidityUsd": 813194.33,
		"hash": "a5e95ddc38de013bde8938563be0a44441c60ff0138c1992ad07ba7545499d34"
	},
	{
		"id": "c25c2682bdaf",
		"ts": "2026-07-23T17:17:12.573Z",
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
		"liquidityUsd": 25799473.59,
		"hash": "c25c2682bdaf37ee6d59351479d25e2be5f055bbbac0ad307128b010e02a1c6d"
	},
	{
		"id": "5ddbf489e1cc",
		"ts": "2026-07-23T17:17:12.814Z",
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
		"liquidityUsd": 5092062.96,
		"hash": "5ddbf489e1cc6056bd20dbf98a4224f5510252b9d70330218ecca6b37ad3d550"
	},
	{
		"id": "e9d2f7b6c18e",
		"ts": "2026-07-23T17:17:13.078Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 945691.55,
		"hash": "e9d2f7b6c18ef2dc68ebe0030bbc39e310745077d63b688aaa7efe50f074a7f4"
	},
	{
		"id": "124d73117b1e",
		"ts": "2026-07-23T17:17:13.339Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25799473.59,
		"hash": "124d73117b1e027fa4745161010c2804ab114e261405089c1e5524ec9bdf6c52"
	},
	{
		"id": "d7b4028e2dc7",
		"ts": "2026-07-23T17:17:13.586Z",
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
		"liquidityUsd": 2567685.93,
		"hash": "d7b4028e2dc737e4cd03c1a7ab0434864824e63d0c1827ccedbf8392deb6570d"
	},
	{
		"id": "96b0e36f62b1",
		"ts": "2026-07-23T17:17:13.861Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 336633.43,
		"hash": "96b0e36f62b11748bae3b2c6f751ff8baee002e41251d6eefc5eb33d6df8c4b9"
	},
	{
		"id": "ec5b09c573d3",
		"ts": "2026-07-23T17:17:14.119Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1956534.98,
		"hash": "ec5b09c573d337b1bae4291df4813ccb140f3ef62160c7af5d2e505917aced0f"
	},
	{
		"id": "f0ce2d8a4c68",
		"ts": "2026-07-23T17:17:14.341Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 679467.35,
		"hash": "f0ce2d8a4c686c48b2e7c955bf8e58fd0dd353a753b4f6d2c3d050f5ce432c9e"
	},
	{
		"id": "495ffd30ddb9",
		"ts": "2026-07-23T17:17:14.564Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4851040.78,
		"hash": "495ffd30ddb9eb1db1b7e0d21949ba4bbc9f364f29b8ffc0c6a28f5441a81008"
	},
	{
		"id": "35cf2ec775ee",
		"ts": "2026-07-23T17:17:14.787Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 352693.96,
		"hash": "35cf2ec775ee8d693232ac9873149bdca35ddb9f357a174b017b7d47207a03e3"
	},
	{
		"id": "9414653ef0c2",
		"ts": "2026-07-23T17:17:15.007Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2021436.16,
		"hash": "9414653ef0c222fb976fcb47928f39462754fb651ab59f0b41fbb1d630611d4a"
	},
	{
		"id": "04a3da38e9ef",
		"ts": "2026-07-23T17:17:15.227Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 122113.15,
		"hash": "04a3da38e9ef3c394a4252151f4435b01aa3ca4b27b4e4741c783703f72b719c"
	},
	{
		"id": "6a3524578333",
		"ts": "2026-07-23T17:17:15.449Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2088772.77,
		"hash": "6a3524578333610bd4473a8f7e174a86b5850e5cb1a2562dfbfdd043cdac6190"
	},
	{
		"id": "9e1c9b01a121",
		"ts": "2026-07-23T17:17:15.674Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 586086.49,
		"hash": "9e1c9b01a1218dfde97be18336df6afb95be07d3475d0c3d17187abdb544ffae"
	},
	{
		"id": "54cc97a11443",
		"ts": "2026-07-23T15:05:53.538Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110607140.18,
		"hash": "54cc97a114434b44eb904a8f0acef37f4accaece31bf3766fb3ff822c541e937"
	},
	{
		"id": "b9bde508e974",
		"ts": "2026-07-23T15:05:53.792Z",
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
		"liquidityUsd": 15933244.31,
		"hash": "b9bde508e9745f79ca5a20efad5e2ce89b623f58f490e2760bf86d431ce9f63c"
	},
	{
		"id": "9f63952054f4",
		"ts": "2026-07-23T15:05:54.045Z",
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
		"liquidityUsd": 818518.31,
		"hash": "9f63952054f49319aacfe82119afbb89c0dc1d800953ba32a57ecdbdd02db196"
	},
	{
		"id": "c3fa9f8c1cd9",
		"ts": "2026-07-23T15:05:54.311Z",
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
		"liquidityUsd": 25589336.61,
		"hash": "c3fa9f8c1cd9c443edd8f07bd35245f9b928df7d1dd16883f43ad95f3442ea0e"
	},
	{
		"id": "6248fdf9a6da",
		"ts": "2026-07-23T15:05:54.561Z",
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
		"liquidityUsd": 5129332.38,
		"hash": "6248fdf9a6da4391bb3557094745293a39ea152cee40d460549fe3c4c21cdfcb"
	},
	{
		"id": "4d89f824afa0",
		"ts": "2026-07-23T15:05:54.796Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 948305.85,
		"hash": "4d89f824afa073685199731ca3acd1950e2fa140dba55bf7dc8692a534bb3513"
	},
	{
		"id": "4e67159b5cf6",
		"ts": "2026-07-23T15:05:55.026Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25588674.58,
		"hash": "4e67159b5cf661bd7aa86b2279ade52d6e04d70f72b2f73c9f1ce08292ebca6f"
	},
	{
		"id": "986185869b19",
		"ts": "2026-07-23T15:05:55.279Z",
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
		"liquidityUsd": 2576418.67,
		"hash": "986185869b1940c3d74b7cff9980bbbc6ba1120ef774b864121755e680f65323"
	},
	{
		"id": "91842e174f15",
		"ts": "2026-07-23T15:05:55.516Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 354691.69,
		"hash": "91842e174f156064a544fc20317433f310ee4dc7741f5b1860805473f1f2b1b7"
	},
	{
		"id": "47d938952c25",
		"ts": "2026-07-23T15:05:56.164Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1989295.28,
		"hash": "47d938952c25a389f018ee031d526717b948d97b17e9ecd5ec18b6fac92a2000"
	},
	{
		"id": "5b0bdf069d20",
		"ts": "2026-07-23T15:05:56.396Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 680843.4,
		"hash": "5b0bdf069d20fd90255407a37f0d84b479d8c198d83ce32a2144aaec94437520"
	},
	{
		"id": "f8c45dda38e3",
		"ts": "2026-07-23T15:05:56.628Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4910887.58,
		"hash": "f8c45dda38e3fda8c1dc2b1b8c8f40c597e9e2858b7b74012fa7dd9b7dcc94ba"
	},
	{
		"id": "5c101dbb74f4",
		"ts": "2026-07-23T15:05:56.860Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2037488.3,
		"hash": "5c101dbb74f4471733ad035694c2d331b07b86027a7fc11e9ac2402fdff1f042"
	},
	{
		"id": "430aa58f404e",
		"ts": "2026-07-23T15:05:57.089Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 361281.26,
		"hash": "430aa58f404ee22f6eb40d22f03b6d001fae95ddb6db66729e9e8c5fb840c96d"
	},
	{
		"id": "8a1aa9acfa79",
		"ts": "2026-07-23T15:05:57.322Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2072973.47,
		"hash": "8a1aa9acfa79f52250e583d91f3b07a5c05cf3135d9741939e3b002f48c2ace8"
	},
	{
		"id": "c1a456e11b99",
		"ts": "2026-07-23T15:05:57.543Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 570081.37,
		"hash": "c1a456e11b999fe6f3074d3ae6bc3f0b9067a01268442ac3ad2ea8cf883f55b1"
	},
	{
		"id": "42bde761c503",
		"ts": "2026-07-23T15:05:57.763Z",
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
		"liquidityUsd": 1261096.38,
		"hash": "42bde761c503c8a7c9e2e4a3d0a64c94c03d09fad39cc29729bdf59511c26d05"
	},
	{
		"id": "58ed8434584f",
		"ts": "2026-07-23T12:21:44.551Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111311181.43,
		"hash": "58ed8434584ff7f01d7f48323f504c2b1e4ca1396fb56dbfea25f6d1bc865a26"
	},
	{
		"id": "9a8822276df5",
		"ts": "2026-07-23T12:21:44.803Z",
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
		"liquidityUsd": 17229346.06,
		"hash": "9a8822276df545a74b24ad3c346af0bd23ca2849543bb295e9b0157335a6cc97"
	},
	{
		"id": "ef27a3d3652f",
		"ts": "2026-07-23T12:21:45.056Z",
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
		"liquidityUsd": 829700.56,
		"hash": "ef27a3d3652f78ba97c17cd6652c5598640e1b6d6e00fd387ebc8ff427bcf950"
	},
	{
		"id": "b1ee9dcf4d71",
		"ts": "2026-07-23T12:21:45.298Z",
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
		"liquidityUsd": 25347918.94,
		"hash": "b1ee9dcf4d71d1f2e5e510abc077a435335b2f17f21eeaf0bbfde55b7d6b880c"
	},
	{
		"id": "b63759bc1a69",
		"ts": "2026-07-23T12:21:45.548Z",
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
		"liquidityUsd": 5171825.36,
		"hash": "b63759bc1a69fbc67a3eb984410988f710bf3fc5c0b96104b0588a1edd651e47"
	},
	{
		"id": "bddc69d5e9a5",
		"ts": "2026-07-23T12:21:45.795Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 962655.86,
		"hash": "bddc69d5e9a59e9baf1dd9ad6802a992def28f4e4f7a9f945c787caa638e7697"
	},
	{
		"id": "bf138fac165f",
		"ts": "2026-07-23T12:21:46.038Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25347918.94,
		"hash": "bf138fac165fc28c63e6ee4824f507deb8bb89f9f1866380a2e05cbc6a7b4ce4"
	},
	{
		"id": "df4df5b44028",
		"ts": "2026-07-23T12:21:46.289Z",
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
		"liquidityUsd": 2610939.75,
		"hash": "df4df5b44028dbcffa64d9a9adfa18cabd8843206f6dc2d6c273a12b24f225d9"
	},
	{
		"id": "da8a93fa8a9b",
		"ts": "2026-07-23T12:21:46.537Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 367494.2,
		"hash": "da8a93fa8a9b78f51ea524a8054ea2e465ba3fb40d08d44cbb609dec470310c4"
	},
	{
		"id": "06693e395855",
		"ts": "2026-07-23T12:21:46.776Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 712203.78,
		"hash": "06693e395855eb0c89b55a1af1419356830fef5a87d9646500aeb93501cb1202"
	},
	{
		"id": "b207afb33f6a",
		"ts": "2026-07-23T12:21:47.003Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1953026.42,
		"hash": "b207afb33f6a8f0524d7b40d5b0a7e089d48a9688af2f8cc2b854fc4f8b1438a"
	},
	{
		"id": "23a89646835b",
		"ts": "2026-07-23T12:21:47.224Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2066788.34,
		"hash": "23a89646835b2160bd472303ba232f436e35fff556a336429c6982106c5f23bc"
	},
	{
		"id": "473a9b300d47",
		"ts": "2026-07-23T12:21:47.451Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4790444.47,
		"hash": "473a9b300d4790cc0eccd851791a2b1b2d6a55f1a983a676c8ea612bf9242c90"
	},
	{
		"id": "5ee144297618",
		"ts": "2026-07-23T12:21:47.678Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 62942.01,
		"hash": "5ee144297618f81c1691ac4017d60fc8cfd3ff1f6f150cbadddfc83b6e25929e"
	},
	{
		"id": "23d17522574e",
		"ts": "2026-07-23T12:21:47.900Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2211119.28,
		"hash": "23d17522574e1088b72f36b6d99f963f5a6f1773eec7dc75010ca9c22b12faf4"
	},
	{
		"id": "089a5da4ef0c",
		"ts": "2026-07-23T12:21:48.127Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 603429.35,
		"hash": "089a5da4ef0ca2565bfef3ba4176812733a031e0d9b4f7e6df6a999819f2fbff"
	},
	{
		"id": "4c3f8ae3b0e3",
		"ts": "2026-07-23T12:21:48.348Z",
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
		"liquidityUsd": 812225.29,
		"hash": "4c3f8ae3b0e3e7034f609e6ea5b0f00fa00bed75473f417b716c05033f6af835"
	},
	{
		"id": "03a557a0d4f0",
		"ts": "2026-07-23T10:17:39.590Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111290759.92,
		"hash": "03a557a0d4f00d9a77401db140fd6a9a6bdd5008dbdac5fc1c5018d480c6f03f"
	},
	{
		"id": "464108508602",
		"ts": "2026-07-23T10:17:40.035Z",
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
		"liquidityUsd": 17160374.06,
		"hash": "464108508602abd900515b0f756ce3d52b9d298a577ab6659a16c3147d247b93"
	},
	{
		"id": "5725bbd8dc6f",
		"ts": "2026-07-23T10:17:40.282Z",
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
		"liquidityUsd": 834027.17,
		"hash": "5725bbd8dc6fd09c869cf3dd29286327caf69a70ae0944b654cfbc2d494c079f"
	},
	{
		"id": "e43557f6ce91",
		"ts": "2026-07-23T10:17:40.521Z",
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
		"liquidityUsd": 25621449.39,
		"hash": "e43557f6ce911f2be1f1b912c588b91565b80e96d58b63344d910807389b8042"
	},
	{
		"id": "2dd8c5f709c6",
		"ts": "2026-07-23T10:17:40.759Z",
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
		"liquidityUsd": 5187393.65,
		"hash": "2dd8c5f709c6a73ba155826873e9c2f0c03ddb3c1f6d191d392aa9670bf87546"
	},
	{
		"id": "4e81beca347b",
		"ts": "2026-07-23T10:17:41.000Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 961443.93,
		"hash": "4e81beca347b6799237bf1464426d7ded434027dbc808cb167b9d515a5461299"
	},
	{
		"id": "8aaf7c6616db",
		"ts": "2026-07-23T10:17:41.236Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25621449.43,
		"hash": "8aaf7c6616db662f4d90f66224e95d9cc198a904b41a725b9533bb7652baefd1"
	},
	{
		"id": "6d39ad460882",
		"ts": "2026-07-23T10:17:41.476Z",
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
		"liquidityUsd": 2591872.72,
		"hash": "6d39ad4608824700109658dd08f0ad545617cdeddc1c16105efa3831b6c5f4d6"
	},
	{
		"id": "2b7a1f99e96e",
		"ts": "2026-07-23T10:17:41.720Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1976447.57,
		"hash": "2b7a1f99e96e543beb25a0959e2b015ac53c1e8f6b3e34ba5ebae46370ba7f7c"
	},
	{
		"id": "e37cd3a1d421",
		"ts": "2026-07-23T10:17:41.955Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 713052.96,
		"hash": "e37cd3a1d421b5a165594c18751d01a8bb27b5bd7b688e70c3ef169e72aabca8"
	},
	{
		"id": "d29e657b9773",
		"ts": "2026-07-23T10:17:42.178Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 333258.07,
		"hash": "d29e657b977375a6fad9f64bcff9e6ccf1855d90cd0df71417f9d0a93d446a38"
	},
	{
		"id": "bc199363862c",
		"ts": "2026-07-23T10:17:42.409Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2043892.94,
		"hash": "bc199363862c5aff31dceea2e1bd0da657c7bd933bac883d14b477e60fb16c34"
	},
	{
		"id": "a7972bd0f91b",
		"ts": "2026-07-23T10:17:42.632Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4806241.96,
		"hash": "a7972bd0f91b81e1f524b6ff9020ffb20de975f46295fbd5548f0d36b19a90bf"
	},
	{
		"id": "c4e4e3eb313e",
		"ts": "2026-07-23T10:17:42.852Z",
		"symbol": "CHECK",
		"token": "0x9126236476eFBA9Ad8aB77855c60eB5BF37586Eb",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 67242.49,
		"hash": "c4e4e3eb313ef1ac307bc99eb8574a080f7377dc36fbed6edb5afea667558516"
	},
	{
		"id": "6e3718718725",
		"ts": "2026-07-23T10:17:43.081Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2347243.35,
		"hash": "6e37187187258d41ccdf02e9562a647f5758844e42758df3f66d53e8caa0a0b0"
	},
	{
		"id": "39d1e2ef1af5",
		"ts": "2026-07-23T10:17:43.303Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692364.49,
		"hash": "39d1e2ef1af5246c87c18b3a0c23af3159667ef49817a738cf6935da9bd1209b"
	},
	{
		"id": "db0fd6708829",
		"ts": "2026-07-23T10:17:43.522Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1343082.53,
		"hash": "db0fd6708829f4d842f862456b874d45837922f31ccfa96972d1495e222985c1"
	},
	{
		"id": "c06a6abf86cd",
		"ts": "2026-07-23T07:29:55.387Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111027045.63,
		"hash": "c06a6abf86cd06bcc16631f136f5d23a111d93c1c387451170cf6148e236a19a"
	},
	{
		"id": "b32ede900344",
		"ts": "2026-07-23T07:29:55.730Z",
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
		"liquidityUsd": 16858464.75,
		"hash": "b32ede9003446a6fabc054d3dac931e2531a85277b291ffa11268e2e2ae8308b"
	},
	{
		"id": "43cb51b07d95",
		"ts": "2026-07-23T07:29:55.945Z",
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
		"liquidityUsd": 829832.35,
		"hash": "43cb51b07d95430b2e25bb18d10cddee4be089993be73441d48c562392598088"
	},
	{
		"id": "cd085be28eee",
		"ts": "2026-07-23T07:29:56.143Z",
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
		"liquidityUsd": 25644612.29,
		"hash": "cd085be28eeecc136c49bcfe082ded0a03244226c20f834d92ca3a46883a7d6b"
	},
	{
		"id": "9f1bbdc3e7df",
		"ts": "2026-07-23T07:29:56.339Z",
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
		"liquidityUsd": 5207383.55,
		"hash": "9f1bbdc3e7dfda30e4efcdb90600f3eab629847ff99a6c7cddfc085c53969bd8"
	},
	{
		"id": "6477c5312e9a",
		"ts": "2026-07-23T07:29:56.536Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 954161.71,
		"hash": "6477c5312e9ae496d108cdd3df0f595f7151e8c919400e88fbcd5cbae408bc0d"
	},
	{
		"id": "6404c170e7ec",
		"ts": "2026-07-23T07:29:56.739Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25644612.29,
		"hash": "6404c170e7ec96caba4956f8ddce3540eff4253781db31e1952994128ad1f224"
	},
	{
		"id": "0a5401697a30",
		"ts": "2026-07-23T07:29:56.948Z",
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
		"liquidityUsd": 2572719.79,
		"hash": "0a5401697a305432585f92f270de532a9e6b87a081f576f4a136a6ad82ab33b1"
	},
	{
		"id": "f64a8a6c0c1d",
		"ts": "2026-07-23T07:29:57.149Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 706556.31,
		"hash": "f64a8a6c0c1dc6bad5b4d5d189328b8fbc72e5ab2ef82772bb8c5050af3c0cb3"
	},
	{
		"id": "5ea1bd912a94",
		"ts": "2026-07-23T07:29:57.344Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 346147.3,
		"hash": "5ea1bd912a9491210ac3a8992552657066187a8d5ec7cfe72bb76c59b7a8f3c4"
	},
	{
		"id": "ac57e5191332",
		"ts": "2026-07-23T07:29:57.554Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1954339.17,
		"hash": "ac57e5191332dd944b79be048aee77b3df547eeda533c63b08cb927724b3d8d4"
	},
	{
		"id": "eb7073da3170",
		"ts": "2026-07-23T07:29:57.752Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4801488.29,
		"hash": "eb7073da3170183aa817b41826383ce92ce2ad7e2bf3c31e0c624b0c7f2eb823"
	},
	{
		"id": "cca723a7bc7d",
		"ts": "2026-07-23T07:29:57.950Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2048710.95,
		"hash": "cca723a7bc7d20a1a2828cd1cab7228e58ecd89002017d660249c007dcf4f323"
	},
	{
		"id": "8ebefd255478",
		"ts": "2026-07-23T07:29:58.145Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2389652.08,
		"hash": "8ebefd255478d187bc45d761e95b1b8abd2fda22dd76ad992ea2bd1e7737dcc9"
	},
	{
		"id": "1dc2649c40c9",
		"ts": "2026-07-23T07:29:58.361Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 688652.26,
		"hash": "1dc2649c40c9e891d0982f7f2b88543443609620f2b8563ee082e6eb6eb3f30a"
	},
	{
		"id": "4a97a260669b",
		"ts": "2026-07-23T07:29:58.557Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1334539.93,
		"hash": "4a97a260669bcd0de006cda85a197f4718f66d4b69c68f04d67af4ce05011f98"
	},
	{
		"id": "fffea2b819ab",
		"ts": "2026-07-23T07:29:58.799Z",
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
		"liquidityUsd": 1314713.27,
		"hash": "fffea2b819abd39427ab7e79ebad90b8b400e18bc6fdf1574d26df2f590864f4"
	},
	{
		"id": "f1a2eb297409",
		"ts": "2026-07-23T04:12:28.984Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111124535.2,
		"hash": "f1a2eb2974097d4b3e33e2fe773f4282ffff3e768683d0c2bad16726c032d1b6"
	},
	{
		"id": "6b507f5be2ad",
		"ts": "2026-07-23T04:12:29.227Z",
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
		"liquidityUsd": 16958188.44,
		"hash": "6b507f5be2ad7ffd74aeae930399ea48681c3d4d77bd874b60da79f76be5d3bf"
	},
	{
		"id": "a1bbcb487002",
		"ts": "2026-07-23T04:12:29.471Z",
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
		"liquidityUsd": 829478.14,
		"hash": "a1bbcb48700248bdc1821ffbfda321baa4e36b097dfa9f14ed98b87bf042f63d"
	},
	{
		"id": "57792067e570",
		"ts": "2026-07-23T04:12:30.124Z",
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
		"liquidityUsd": 25763993.16,
		"hash": "57792067e5700d5bbd4d0c192a7bea18883b2b3f2a39aba2e591e8815cb03e22"
	},
	{
		"id": "51824d980e2a",
		"ts": "2026-07-23T04:12:30.366Z",
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
		"liquidityUsd": 5197856.06,
		"hash": "51824d980e2afac3307481bbb5aad1f001c37aec57e56bf72e8d09b43ca8e8df"
	},
	{
		"id": "11d217fe3bd0",
		"ts": "2026-07-23T04:12:30.611Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 949938.6,
		"hash": "11d217fe3bd093f68a0fd02471bc9c248876e910c262a4df76984e8f1c1b854c"
	},
	{
		"id": "5da6f6d03c91",
		"ts": "2026-07-23T04:12:30.872Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25763993.16,
		"hash": "5da6f6d03c911046240d8e55e23f0cb5880162d2a3757681995a5f712dd35aa6"
	},
	{
		"id": "7fb4aa85af4d",
		"ts": "2026-07-23T04:12:31.135Z",
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
		"liquidityUsd": 2576018.85,
		"hash": "7fb4aa85af4d203baa96a2fe2a5a60f9cffda2d5135be226c41257dcf853a088"
	},
	{
		"id": "47d9adc0d2f4",
		"ts": "2026-07-23T04:12:31.395Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 715714.92,
		"hash": "47d9adc0d2f4c02162dad6280b3e62e7fad0025bff77fa80d95e865c932fea83"
	},
	{
		"id": "d64dd780edcf",
		"ts": "2026-07-23T04:12:31.632Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 337622.63,
		"hash": "d64dd780edcf3c8e53fa691849473bd5677b2da25fdec198fbca7388ad9e5c89"
	},
	{
		"id": "13addba932e4",
		"ts": "2026-07-23T04:12:31.854Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692257.95,
		"hash": "13addba932e44e96552c8d91fabf68427642d688ecb1d709aa8cad7b39e1391d"
	},
	{
		"id": "94a020d51ee3",
		"ts": "2026-07-23T04:12:32.076Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2051379.27,
		"hash": "94a020d51ee37a5be12bb5f7d10b32d4487b1b193b7abd92ad99eb22d4194d9e"
	},
	{
		"id": "2a253250777f",
		"ts": "2026-07-23T04:12:32.303Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4836581.91,
		"hash": "2a253250777f336dfb161fd5e71bd455bd5c08323cffb9e9d672ae20ff692967"
	},
	{
		"id": "a6f57796d108",
		"ts": "2026-07-23T04:12:32.525Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1906832.33,
		"hash": "a6f57796d10840b773374ba1e012b54adf6e6bc1130c4e3c8588bc0c3e10e363"
	},
	{
		"id": "a033a93ea58a",
		"ts": "2026-07-23T04:12:32.743Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2372690.85,
		"hash": "a033a93ea58a588f10c462b306d18728c94c7503929c6e36879a75be9a5bf9dc"
	},
	{
		"id": "cb6ac39fd4be",
		"ts": "2026-07-23T04:12:32.965Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1346583.04,
		"hash": "cb6ac39fd4be847e4652f16b4515bdbd382e68a273817936ccf59dcf27720de4"
	},
	{
		"id": "42ed8554729a",
		"ts": "2026-07-23T04:12:33.188Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9883926.17,
		"hash": "42ed8554729aa5d9d7111898af263d1177175d92cda99cf1dec34a8f32476e84"
	},
	{
		"id": "6bd9a4bfb16b",
		"ts": "2026-07-23T00:04:24.352Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111311578.35,
		"hash": "6bd9a4bfb16b79b9a0e9be740577f07e9848ef7e2f8ba7648c9b3d88aee6383c"
	},
	{
		"id": "678a12d8858d",
		"ts": "2026-07-23T00:04:24.797Z",
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
		"liquidityUsd": 16350833,
		"hash": "678a12d8858dec07a2fe73fe2b192d797162b9924de7b429072b5a948b31f287"
	},
	{
		"id": "f231ed0dcd90",
		"ts": "2026-07-23T00:04:25.054Z",
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
		"liquidityUsd": 837115.87,
		"hash": "f231ed0dcd90f96cee3647dd608ecf02c8ed35b9c7544bff7f86526505b18106"
	},
	{
		"id": "cc42a64cb9e3",
		"ts": "2026-07-23T00:04:25.300Z",
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
		"liquidityUsd": 25947861.29,
		"hash": "cc42a64cb9e379e831cbe0a91f75554c842b1700b18e953774e5764adfa9f94e"
	},
	{
		"id": "44f401cfe3a9",
		"ts": "2026-07-23T00:04:25.563Z",
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
		"liquidityUsd": 5199990.42,
		"hash": "44f401cfe3a9013003715480ffdb6831e49cb75a4e6b9e044b242b8662046509"
	},
	{
		"id": "e0b189a9697e",
		"ts": "2026-07-23T00:04:25.815Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 961705.48,
		"hash": "e0b189a9697ed8e922dd88fc7fe534de3c28bc65ec691e8a8ef9da30713ffeca"
	},
	{
		"id": "379f7dc84ed3",
		"ts": "2026-07-23T00:04:26.060Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25947861.29,
		"hash": "379f7dc84ed399c633dce627c03439aa7240dfd92d9874a7393e97dd51986e17"
	},
	{
		"id": "1d97a87922b5",
		"ts": "2026-07-23T00:04:26.306Z",
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
		"liquidityUsd": 2595929.52,
		"hash": "1d97a87922b57537dc5ea49ed433864d2d3a2bb03add7bae5fc073140472e0bb"
	},
	{
		"id": "f5044ac4734c",
		"ts": "2026-07-23T00:04:26.554Z",
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
		"liquidityUsd": 696344.67,
		"hash": "f5044ac4734cb3a381aaedcc7fda5d51e442f29c50823119b98df94b49d38827"
	},
	{
		"id": "7ce124e2ee86",
		"ts": "2026-07-23T00:04:26.804Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 358355.22,
		"hash": "7ce124e2ee86794ef41ef56c06bd6d5fcb34ab8b3ca2c0a41167d728348131c9"
	},
	{
		"id": "3817c74c8a7f",
		"ts": "2026-07-23T00:04:27.034Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2070207.76,
		"hash": "3817c74c8a7fa2e3512a1d832659b5f346c753951ca8aea18b369c430355fc9d"
	},
	{
		"id": "50a5b59b76a2",
		"ts": "2026-07-23T00:04:27.263Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 653101.89,
		"hash": "50a5b59b76a238837294ab88d35120895d6789f9659f2e7b37a592c9bf80b0d3"
	},
	{
		"id": "5d7755ef1001",
		"ts": "2026-07-23T00:04:27.494Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5507705.55,
		"hash": "5d7755ef1001ad0ead2bc106442b0d6f8d0818c483a3e7f02b182405c9d40d49"
	},
	{
		"id": "aa64cbe1ec97",
		"ts": "2026-07-23T00:04:27.720Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 602006.91,
		"hash": "aa64cbe1ec971542ce30349adb6a6408a3a0c006073c5813d801c95b40c6a014"
	},
	{
		"id": "ea92835ab950",
		"ts": "2026-07-23T00:04:27.947Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4885523.17,
		"hash": "ea92835ab9505dc6f885a3e26cc1a44cc5347baa13f5a607b7f990c4c6082c4b"
	},
	{
		"id": "d6afbdeb9a87",
		"ts": "2026-07-23T00:04:28.176Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9881034.72,
		"hash": "d6afbdeb9a87ad767b9f3e184bd6694f9aa83994d3b55b94211fd3f604837777"
	},
	{
		"id": "20909fe05a26",
		"ts": "2026-07-23T00:04:28.403Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1355137.84,
		"hash": "20909fe05a265440e54c877da399f85e6c51fc63d64070141241f65a32efd18f"
	},
	{
		"id": "0c57d56749f9",
		"ts": "2026-07-22T22:58:32.928Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111404451.23,
		"hash": "0c57d56749f94f3e6ab9a76ecccf4f42d2404f3877445bb7ddaca27048e0690f"
	},
	{
		"id": "f0245290567c",
		"ts": "2026-07-22T22:58:33.368Z",
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
		"liquidityUsd": 14639963.56,
		"hash": "f0245290567cc6524930d03d6fe02237bff7c55c850f2d3f135e2f9d4521f67a"
	},
	{
		"id": "6dcc8c0ac092",
		"ts": "2026-07-22T22:58:33.605Z",
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
		"liquidityUsd": 837353.39,
		"hash": "6dcc8c0ac092fc7018fcc5e1ad23100b18d3c8c538218a9b07defcabadd6939f"
	},
	{
		"id": "bae00747b731",
		"ts": "2026-07-22T22:58:33.840Z",
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
		"liquidityUsd": 25994450.61,
		"hash": "bae00747b731d6e44f74abd4aafc5e21f1141da89393303fd9011a75a9d438e3"
	},
	{
		"id": "5b8195499426",
		"ts": "2026-07-22T22:58:34.073Z",
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
		"liquidityUsd": 5209367.34,
		"hash": "5b81954994269350a237b254088fe4635d716c808bfda460f5ed35792661ff5c"
	},
	{
		"id": "0b79706b3275",
		"ts": "2026-07-22T22:58:34.308Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 965560.84,
		"hash": "0b79706b3275baca44787d0de4db0613d21925b7a4d1b64d88400c1c3a763034"
	},
	{
		"id": "89548ad38fc9",
		"ts": "2026-07-22T22:58:34.540Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25994450.61,
		"hash": "89548ad38fc9131411d629f58f0577e57f94da05601b90fc2b1002874439cac9"
	},
	{
		"id": "c7510fc0567b",
		"ts": "2026-07-22T22:58:34.791Z",
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
		"liquidityUsd": 2601416.99,
		"hash": "c7510fc0567bf95f86c7ef71825259a67cc90c34d548b48e7b2dfe486a5b5611"
	},
	{
		"id": "bc6f77d87701",
		"ts": "2026-07-22T22:58:35.022Z",
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
		"liquidityUsd": 695417.77,
		"hash": "bc6f77d87701691fa769c563741974d335ea45825811da7d106af32d8a370969"
	},
	{
		"id": "ee040aa1d56d",
		"ts": "2026-07-22T22:58:35.256Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2068031.51,
		"hash": "ee040aa1d56d9e297493706307f0792701ee1580bdd8a51148a2321543de048b"
	},
	{
		"id": "d1f18edd2421",
		"ts": "2026-07-22T22:58:35.474Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 319696.99,
		"hash": "d1f18edd24212fe761940cb1958f4147784edfffcc99d7f864c631afcfa1c309"
	},
	{
		"id": "cc2f73056566",
		"ts": "2026-07-22T22:58:35.692Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5532748.54,
		"hash": "cc2f7305656642963f61b45aa848a7265492cac6a87853779675833b6d96fff8"
	},
	{
		"id": "e6d9273cb3e3",
		"ts": "2026-07-22T22:58:35.911Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 604375.47,
		"hash": "e6d9273cb3e35b7afc670f27ff8938cadbd0d7a1361fc9b7d35eed6de3b2beb5"
	}
]
