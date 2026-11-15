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
	"updatedAt": "2026-11-15T00:41:26.925Z",
	"tokensScored": 22892,
	"verdictsIssued": 22892,
	"safe": 19524,
	"risky": 1607,
	"likelyRug": 1761,
	"ticks": 1286
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "7a7d23ab1249",
		"ts": "2026-11-15T00:41:22.076Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 86950308.22,
		"hash": "7a7d23ab124914960d712f2c510f0bcb8cd12d3b58655c5659231a569486ea12"
	},
	{
		"id": "be3ac2a3c898",
		"ts": "2026-11-15T00:41:22.743Z",
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
		"liquidityUsd": 16250646.65,
		"hash": "be3ac2a3c89829a0bc9c0f975a79a68791d4728cb1532037c638a36fed3c88bf"
	},
	{
		"id": "cd2dd8c161fc",
		"ts": "2026-11-15T00:41:23.041Z",
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
		"liquidityUsd": 196962.3,
		"hash": "cd2dd8c161fc66e3813922ec57e00c6b6c1c4c551e8912692f53e9f86790ee25"
	},
	{
		"id": "d0d5091228e9",
		"ts": "2026-11-15T00:41:23.290Z",
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
		"liquidityUsd": 3704278.25,
		"hash": "d0d5091228e93579249f3b8a5cda810f6cb0006cec2c742bd784ab626732ff40"
	},
	{
		"id": "8b442cec8ca1",
		"ts": "2026-11-15T00:41:23.538Z",
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
		"liquidityUsd": 912788.91,
		"hash": "8b442cec8ca1ed0ebed6f2d161961dcecdc946041ff67c06657150686d08f5d9"
	},
	{
		"id": "a07c4e1ab799",
		"ts": "2026-11-15T00:41:23.791Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 809083.19,
		"hash": "a07c4e1ab7993d98b2ff3206b98d5668b3426320720e5c93b07cc5e4a52ac6a2"
	},
	{
		"id": "5b2f2eb34ca2",
		"ts": "2026-11-15T00:41:24.059Z",
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
		"liquidityUsd": 270467.14,
		"hash": "5b2f2eb34ca279a8092905ec14b229d81b3788cf58ae34aec78696aee8e71273"
	},
	{
		"id": "1a779b6d0b27",
		"ts": "2026-11-15T00:41:24.317Z",
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
		"liquidityUsd": 2021822.68,
		"hash": "1a779b6d0b276aff754c2e62f1b7c75d80a7a23f100ac23494c0135d57366f79"
	},
	{
		"id": "d70b22942a1a",
		"ts": "2026-11-15T00:41:24.576Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1334563.29,
		"hash": "d70b22942a1a1fb00e28315877b04fd4bd2834aff289dbab843c385c405d6883"
	},
	{
		"id": "a24d91861552",
		"ts": "2026-11-15T00:41:24.830Z",
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
		"liquidityUsd": 570532.61,
		"hash": "a24d918615521e1421fa83757db27634d82755f4cfb7b9f3236304c083d07872"
	},
	{
		"id": "3232468551a3",
		"ts": "2026-11-15T00:41:25.063Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 410910.59,
		"hash": "3232468551a3f934324e02a9fec36dfb7a8db77dec746f3f8574ffd4cc3aa103"
	},
	{
		"id": "2ab22382cc73",
		"ts": "2026-11-15T00:41:25.294Z",
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
		"liquidityUsd": 1989913.34,
		"hash": "2ab22382cc739a9d832a4db5908619ab82808d9060c36f50c1f639e4b463904d"
	},
	{
		"id": "98de77442dff",
		"ts": "2026-11-15T00:41:25.536Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 711156.93,
		"hash": "98de77442dffc9742e1252333d9b2c34405747931d682db1e8cdd67319c4725d"
	},
	{
		"id": "d3d6c05f1d55",
		"ts": "2026-11-15T00:41:25.767Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 306062.12,
		"hash": "d3d6c05f1d5576fd14b8775ef2b93c4c48c8d49eb373d1c9016c1d46827e958c"
	},
	{
		"id": "dd51d8ebcc5e",
		"ts": "2026-11-15T00:41:25.998Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2666088.69,
		"hash": "dd51d8ebcc5ee919e7645b641362cd70325f0799fd54d253ca7e24f41fff10a5"
	},
	{
		"id": "739bf9cbbad9",
		"ts": "2026-11-15T00:41:26.228Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 178168.38,
		"hash": "739bf9cbbad9666c5aa61db312d22eecb579f61a8267ad8e7841b5dc303a9a02"
	},
	{
		"id": "d2f71fcd6b6f",
		"ts": "2026-11-15T00:41:26.459Z",
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
		"liquidityUsd": 729528.18,
		"hash": "d2f71fcd6b6ffdc9ec8e4629b446d7c7068d656abae5b1d31afa8afc4ce71159"
	},
	{
		"id": "c083fb6f9bcd",
		"ts": "2026-11-15T00:41:26.695Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1442728.85,
		"hash": "c083fb6f9bcd2d7a8e6a8da30f2ab06a05a7673e749568a3fe131d5164af412b"
	},
	{
		"id": "b42fab6edfd6",
		"ts": "2026-11-15T00:41:26.925Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1682793.14,
		"hash": "b42fab6edfd6dc589a353a867d308464833de3fd75b195a1ef6b98c763a479a1"
	},
	{
		"id": "d4fde18d03e7",
		"ts": "2026-11-14T20:21:45.796Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 115109441.14,
		"hash": "d4fde18d03e7aadea8a98a7c996a45cd2d2a53992bfccfbaa41c2a9d37fbaa8e"
	},
	{
		"id": "9c100a6b1901",
		"ts": "2026-11-14T20:21:46.046Z",
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
		"liquidityUsd": 15960536.71,
		"hash": "9c100a6b1901315e8fe1f9b823da3482d8807f1d8443f5e1962f2514ad2e815e"
	},
	{
		"id": "6afab4f2b5eb",
		"ts": "2026-11-14T20:21:46.330Z",
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
		"liquidityUsd": 206289.44,
		"hash": "6afab4f2b5eb7a4586a627e284bccb17de0e45b85416d1a6ee8bf16eac4eaf5c"
	},
	{
		"id": "8b0753a0dac9",
		"ts": "2026-11-14T20:21:46.613Z",
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
		"liquidityUsd": 3739064.63,
		"hash": "8b0753a0dac99bd5ee114df159f4f87a1e5135d42c992ac58e262bcabb155791"
	},
	{
		"id": "452ebcd4cd08",
		"ts": "2026-11-14T20:21:46.868Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"volume_liquidity_anomaly",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 923675,
		"hash": "452ebcd4cd08bf98d2ba16d1b3ea6d2fcb012d0540f9399f2bf9b7a8b7ace6a7"
	},
	{
		"id": "9e77c1c398a3",
		"ts": "2026-11-14T20:21:47.120Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 833349.67,
		"hash": "9e77c1c398a3f51618ef7aa871b68fe14d4c69175b5155576bae1ebfeb0141f2"
	},
	{
		"id": "aa0f45fe4ec9",
		"ts": "2026-11-14T20:21:47.355Z",
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
		"liquidityUsd": 276462.58,
		"hash": "aa0f45fe4ec955d16daa2981ca61744b9f75ba821b167257f4e838af3433a879"
	},
	{
		"id": "be450da7dbef",
		"ts": "2026-11-14T20:21:47.599Z",
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
		"liquidityUsd": 1860399.66,
		"hash": "be450da7dbefed242b92245d5ede666dd90bc584cb4eb86a9017e482029e194e"
	},
	{
		"id": "c991a3f4b389",
		"ts": "2026-11-14T20:21:47.834Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1404803.24,
		"hash": "c991a3f4b3890cfe883ee90b0eb2c6f896ba274fa866e7ae1622395cf777bee2"
	},
	{
		"id": "a758163d12e0",
		"ts": "2026-11-14T20:21:48.070Z",
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
		"liquidityUsd": 587487.2,
		"hash": "a758163d12e0055a51045b440d0b64cf9af92fd9eb09175420ede0c84de561f9"
	},
	{
		"id": "465ce2ab9b75",
		"ts": "2026-11-14T20:21:48.291Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 411702.58,
		"hash": "465ce2ab9b758f19ab4c33b3bda8222dc9bfad311ebde68aac752ed84683e2cf"
	},
	{
		"id": "933362af1b19",
		"ts": "2026-11-14T20:21:48.515Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 720953.25,
		"hash": "933362af1b19886eab222bc192dbecfaf25bcd9411b36f1a23b5724e2d578fa3"
	},
	{
		"id": "7e054fd5ab94",
		"ts": "2026-11-14T20:21:48.737Z",
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
		"liquidityUsd": 2039078.32,
		"hash": "7e054fd5ab944577d68a97f737adee5ea607a6f5f9208a2eb265430c1167a189"
	},
	{
		"id": "c40beaa66c63",
		"ts": "2026-11-14T20:21:48.961Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 369328.31,
		"hash": "c40beaa66c63e24938341c91cdb62ff1fa7c5262585a5281d4410c782393e24b"
	},
	{
		"id": "13c2900ceafe",
		"ts": "2026-11-14T20:21:49.180Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185474.15,
		"hash": "13c2900ceafed5ed533b1ba8caa57a58d6ed847082d0773a2edc5497161304ed"
	},
	{
		"id": "b24bd158bbac",
		"ts": "2026-11-14T20:21:49.405Z",
		"symbol": "PONS",
		"token": "0x304B826A47a5E6CB2766aD9069f670651c9F847d",
		"score": 71,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.42,
		"flags": [
			"low_liquidity",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "b24bd158bbacea5f627e3bd00fa7388efd8a38a3cc47dcfddb847723ff6a55cf"
	},
	{
		"id": "647e6b673ab7",
		"ts": "2026-11-14T20:21:49.627Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1678133.09,
		"hash": "647e6b673ab75cba1c2a3759c30007be00a96834089a9c31dd54ed16f15a5c80"
	},
	{
		"id": "2ff40299e304",
		"ts": "2026-11-14T20:21:49.858Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2729840.13,
		"hash": "2ff40299e30412ddadd9c29dbe83403c7d976bb439ed21e299e49be985b12ea8"
	},
	{
		"id": "923bf58ce6e6",
		"ts": "2026-11-14T20:21:50.080Z",
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
		"liquidityUsd": 719104.49,
		"hash": "923bf58ce6e6dc8ac60bf0edd060ef5aaf3f6215d1b4c4a2361cd444caed42a9"
	},
	{
		"id": "dcab79c30716",
		"ts": "2026-11-14T15:30:15.374Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 115899574.75,
		"hash": "dcab79c3071661d14a6e85fbb7af0f890cc5e21cc24c3499e8957ed52e25de0f"
	},
	{
		"id": "2ef55b87aa5f",
		"ts": "2026-11-14T15:30:15.622Z",
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
		"liquidityUsd": 14142418.11,
		"hash": "2ef55b87aa5f6446a9576b4f5b54b9d46bab5948a43f975a8b0b8b5fb0f2200d"
	},
	{
		"id": "c991aaa60c67",
		"ts": "2026-11-14T15:30:15.882Z",
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
		"liquidityUsd": 205437.48,
		"hash": "c991aaa60c67d799c5e583415e06a797feabfff157dfa127c1ec4afea837cc29"
	},
	{
		"id": "8d414cb4ac95",
		"ts": "2026-11-14T15:30:16.122Z",
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
		"liquidityUsd": 3772148.84,
		"hash": "8d414cb4ac952ac6cb3e93569a75c0fc2ca34a068fd45f6bc5248db475669861"
	},
	{
		"id": "d8f7a41c3607",
		"ts": "2026-11-14T15:30:16.374Z",
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
		"liquidityUsd": 981500.98,
		"hash": "d8f7a41c36072e4bb35643a12ecdf2f4d4c2981ec34f38f004cd6a5ce9172321"
	},
	{
		"id": "88af50b1df28",
		"ts": "2026-11-14T15:30:16.637Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 848071.49,
		"hash": "88af50b1df28002e9fdb9a86121d0139f6658cdbb3f8c1ab15ddee83dd15cb42"
	},
	{
		"id": "4dae2fe764a9",
		"ts": "2026-11-14T15:30:16.877Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 588598.92,
		"hash": "4dae2fe764a93bd8baa48bc9c106bd306346930dd057656c53b05c57a27c4e6f"
	},
	{
		"id": "2fb48d89c52f",
		"ts": "2026-11-14T15:30:17.116Z",
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
		"liquidityUsd": 1946261.86,
		"hash": "2fb48d89c52f4ea0b04e940f1c043e5207276b1a7047228fbca4fb2f96329aad"
	},
	{
		"id": "0c9556422aeb",
		"ts": "2026-11-14T15:30:17.380Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1419191.57,
		"hash": "0c9556422aeb0165049dd25e02fe9380c0c2b90e42fd253aa1b2d5d229431b9e"
	},
	{
		"id": "124da0ccaab9",
		"ts": "2026-11-14T15:30:17.625Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 726176.37,
		"hash": "124da0ccaab94502f3dae57a28cff7e71a375dce70c748abab4b4be7d4f2bf0a"
	},
	{
		"id": "5fd5a624e9ae",
		"ts": "2026-11-14T15:30:17.850Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 597619.22,
		"hash": "5fd5a624e9aecebab167317123dd49e7b6fdaed9a3b3d85c629700ee5b4f0a54"
	},
	{
		"id": "41bc3505e04a",
		"ts": "2026-11-14T15:30:18.075Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 416879.23,
		"hash": "41bc3505e04abdd3216bf78289023c678d6c0a8f8fe8d6caf613fe762a1fcec9"
	},
	{
		"id": "53efec864ec6",
		"ts": "2026-11-14T15:30:18.297Z",
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
		"liquidityUsd": 2212118.01,
		"hash": "53efec864ec63be2f47c8b1542b4986a31b09551e1f704e568bfcbaa9b0ae697"
	},
	{
		"id": "dc5693d63219",
		"ts": "2026-11-14T15:30:18.519Z",
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
		"liquidityUsd": 735691.19,
		"hash": "dc5693d63219e4f81f630bc8a586d47530db522ed890877bb9400d6c3adb869c"
	},
	{
		"id": "ed2bf6410e00",
		"ts": "2026-11-14T15:30:18.740Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 155568.48,
		"hash": "ed2bf6410e00ec54a116e192077ea1fd34ea45d1ee288e6e59775daa2518ff25"
	},
	{
		"id": "a49e2990bd84",
		"ts": "2026-11-14T15:30:18.964Z",
		"symbol": "PONS",
		"token": "0x304B826A47a5E6CB2766aD9069f670651c9F847d",
		"score": 71,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.42,
		"flags": [
			"low_liquidity",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "a49e2990bd846243059e8af13e191c88d4c1f3fc55f06a6a3a9da0fa13de7590"
	},
	{
		"id": "b3e30fab4666",
		"ts": "2026-11-14T15:30:19.185Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1469376.3,
		"hash": "b3e30fab4666bc793b46180f6e5444f5ef3baac7f040573dc9c80105085a1655"
	},
	{
		"id": "229361f8c574",
		"ts": "2026-11-14T15:30:19.457Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2743121.3,
		"hash": "229361f8c57490e4e0c982b7629d339da27206b6e2d09c6ebbf38d56346766bd"
	},
	{
		"id": "e0d94554d4b0",
		"ts": "2026-11-14T15:30:19.689Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1695769.48,
		"hash": "e0d94554d4b01584ecba5eb72594483c405b6f97750b746ffd0f79c374415ccd"
	},
	{
		"id": "5e1a38191c52",
		"ts": "2026-11-14T08:31:07.857Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 123158379.84,
		"hash": "5e1a38191c52db5a24a4feab1cfe96baa350441f050044ef4700eaf25c158049"
	},
	{
		"id": "4c719243e20a",
		"ts": "2026-11-14T08:31:08.510Z",
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
		"liquidityUsd": 13509890.54,
		"hash": "4c719243e20a2779b90fbff4c3ead95385884e4c626f53a81e8512252f7e5835"
	},
	{
		"id": "3caa81014a5d",
		"ts": "2026-11-14T08:31:08.751Z",
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
		"liquidityUsd": 210584.37,
		"hash": "3caa81014a5d9db9258a5860c038dd87047eff3bb0cec77a42c732bb3b2239bc"
	},
	{
		"id": "6559578e1e0f",
		"ts": "2026-11-14T08:31:08.999Z",
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
		"liquidityUsd": 3825546.96,
		"hash": "6559578e1e0fabeb91654a4bf400ba7242e9270d5e2627b46c564f0dfa39c4e1"
	},
	{
		"id": "b98bfa4a111a",
		"ts": "2026-11-14T08:31:09.249Z",
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
		"liquidityUsd": 1025162.81,
		"hash": "b98bfa4a111a21932e6bb9ec93d0237db8481fc2cfc8956d8df56e44603c9c78"
	},
	{
		"id": "c2b7969049e4",
		"ts": "2026-11-14T08:31:09.502Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 881390.71,
		"hash": "c2b7969049e46633c8f0910d5154f5b773c25600c51bbb20522ed478d3293ca3"
	},
	{
		"id": "35ee79c6ad16",
		"ts": "2026-11-14T08:31:09.812Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3825546.96,
		"hash": "35ee79c6ad160c6919d1a69a4adef1a19c5c49af1c8a0738e65436c7b7015ae0"
	},
	{
		"id": "223f7f80c85e",
		"ts": "2026-11-14T08:31:10.057Z",
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
		"liquidityUsd": 1855770.34,
		"hash": "223f7f80c85e9ebed679bde9d0aad6725f50befd567561dd648d5b2cf99ebcb7"
	},
	{
		"id": "c0ab3e3a249a",
		"ts": "2026-11-14T08:31:10.319Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 746848.92,
		"hash": "c0ab3e3a249ade4cf3b351b5c3c1dfb4060e4362c1529e0116af4452a61bad07"
	},
	{
		"id": "21c51d20fac0",
		"ts": "2026-11-14T08:31:10.565Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1505049.95,
		"hash": "21c51d20fac0d1762312925b7e229df5628968b8213f47f73a7cd692837cdcec"
	},
	{
		"id": "5b36eb88740d",
		"ts": "2026-11-14T08:31:10.807Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1469579.02,
		"hash": "5b36eb88740ddd6e8869815c279e3f19913b726711419a6935c52007a8e5b8ae"
	},
	{
		"id": "9ab132c631c9",
		"ts": "2026-11-14T08:31:11.028Z",
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
		"liquidityUsd": 2281550.33,
		"hash": "9ab132c631c9d37df4e78321e081dca1b0f724343e5662e52d68112a439da806"
	},
	{
		"id": "1410c5dbd1fc",
		"ts": "2026-11-14T08:31:11.248Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 2002002.08,
		"hash": "1410c5dbd1fc5d00648bf584a7d289faac8ad776159b6d8161bf4d82388729a5"
	},
	{
		"id": "2597dff1ce9e",
		"ts": "2026-11-14T08:31:11.469Z",
		"symbol": "PONS",
		"token": "0x304B826A47a5E6CB2766aD9069f670651c9F847d",
		"score": 71,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.42,
		"flags": [
			"low_liquidity",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "2597dff1ce9ef642b4ebd69a2c5a4e8120ce8fc9eceecc615beb9374780fd59e"
	},
	{
		"id": "57f175ef4457",
		"ts": "2026-11-14T08:31:11.703Z",
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
		"liquidityUsd": 756489.03,
		"hash": "57f175ef4457d69c4d3e277aab2fca2fcf836484acd8c5f1fce850192044887f"
	},
	{
		"id": "19df3f7f4d03",
		"ts": "2026-11-14T08:31:11.926Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1669190,
		"hash": "19df3f7f4d03753400955a1030662220a5f704ada2611415c32209552ee315b0"
	},
	{
		"id": "f159caedad11",
		"ts": "2026-11-14T08:31:12.147Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 416344.3,
		"hash": "f159caedad113376dd6454f99c022cc7a2d4f6daf93b7e6c15d713cc5a742609"
	},
	{
		"id": "7317839bfcf1",
		"ts": "2026-11-14T08:31:12.368Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1817756.51,
		"hash": "7317839bfcf1fdfac232ce5df4d6f5942fe1384d8d8e03f20636ddf895b64951"
	},
	{
		"id": "ced3b0650e99",
		"ts": "2026-11-14T08:31:12.589Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 615251.45,
		"hash": "ced3b0650e99ee666d6aade591df00d04aee780998c8385baab113fd5079c2fc"
	},
	{
		"id": "a6d5e3279a35",
		"ts": "2026-11-14T01:13:53.308Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 124717712.64,
		"hash": "a6d5e3279a3502c37d5c88c66ff1aadc44d814c871f83c97fe177ffea924b129"
	},
	{
		"id": "b0110bcd037d",
		"ts": "2026-11-14T01:13:53.573Z",
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
		"liquidityUsd": 13564139.28,
		"hash": "b0110bcd037d8d7a121c98e3434b888b4d29ca2b03cdc0fed67c4443cca7b74c"
	},
	{
		"id": "5ceb81707a10",
		"ts": "2026-11-14T01:13:53.822Z",
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
		"liquidityUsd": 215559.99,
		"hash": "5ceb81707a10a50c0c116e0e2ab70fe06f3f89694aeb16c518882d83d1e1f586"
	},
	{
		"id": "935e6618bea7",
		"ts": "2026-11-14T01:13:54.072Z",
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
		"liquidityUsd": 3888589.04,
		"hash": "935e6618bea79ade7e0c925c772f7d364230b360213bb6eda6f5ac62693916fb"
	},
	{
		"id": "9e902e48fc77",
		"ts": "2026-11-14T01:13:54.313Z",
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
		"liquidityUsd": 1048166.76,
		"hash": "9e902e48fc77ef90d75a7a614b0e4d8a586e23b68c8722873853f548fc0df730"
	},
	{
		"id": "3a442aa4d831",
		"ts": "2026-11-14T01:13:54.598Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 897181.56,
		"hash": "3a442aa4d831e9ef6b194d613db54f6c532c4aa7f97948af12194db5c38ab476"
	},
	{
		"id": "557a822abd52",
		"ts": "2026-11-14T01:13:54.856Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3888589.04,
		"hash": "557a822abd52e649286502e04f0d0801c95cc4207b517113923269235367104a"
	},
	{
		"id": "c641e33292c7",
		"ts": "2026-11-14T01:13:55.104Z",
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
		"liquidityUsd": 1840003.46,
		"hash": "c641e33292c7304a5305403f8cf84249633468e906d8f68bc81e8179f03e43f0"
	},
	{
		"id": "65f70bd68d8e",
		"ts": "2026-11-14T01:13:55.355Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1454471.34,
		"hash": "65f70bd68d8ec38726dd02d6aba83e20ff84fb4c70c35fc8b5b0bfd6cd0f3b9d"
	},
	{
		"id": "a566c4cff10b",
		"ts": "2026-11-14T01:13:55.593Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 2061110.27,
		"hash": "a566c4cff10bee398aac0fe0fc88ce9a3797eab3b2a2e728bd74a0a2651a48f8"
	},
	{
		"id": "59958feb9fdd",
		"ts": "2026-11-14T01:13:55.814Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 756156.82,
		"hash": "59958feb9fdd03d7d50ccdc7998a87a7ee6c6006cf0633eb776c22e60f9be019"
	},
	{
		"id": "1a939c0c7c1b",
		"ts": "2026-11-14T01:13:56.042Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1449306.03,
		"hash": "1a939c0c7c1b24a65f2d7d3bfd914449868889bd238fb5bbe81071983c2571cb"
	},
	{
		"id": "b1bcd0804e0b",
		"ts": "2026-11-14T01:13:56.275Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3459582.48,
		"hash": "b1bcd0804e0bf02f182c45e2eab077c741268a644c43b80c224905ac065feefb"
	},
	{
		"id": "fb8c6a1e48e4",
		"ts": "2026-11-14T01:13:56.497Z",
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
		"liquidityUsd": 2353403.73,
		"hash": "fb8c6a1e48e4e0cc3923dfd0d202b0e8fda685430fa2a3176906d7c5745216d8"
	},
	{
		"id": "9c3a9f7d3753",
		"ts": "2026-11-14T01:13:56.716Z",
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
		"liquidityUsd": 761079.3,
		"hash": "9c3a9f7d3753ee76e69699afed1298a11502c15dd3b664abdefa39e6de44416e"
	},
	{
		"id": "855cac22bf75",
		"ts": "2026-11-14T01:13:56.945Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1660512.22,
		"hash": "855cac22bf750a4dba37afd11dc8e75faf961ff4ca15b772b6239d9e0a978201"
	},
	{
		"id": "9065b8a5805a",
		"ts": "2026-11-14T01:13:57.176Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3461946.96,
		"hash": "9065b8a5805a1e38a4e26223af10dbfff4fa1990ef0ec782940e2bf82c676fe0"
	},
	{
		"id": "37a562a906cb",
		"ts": "2026-11-14T01:13:57.394Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 311950.87,
		"hash": "37a562a906cb3567556676ac845b1005804dbc5c81d5ce9b7d0fe63de8199f07"
	},
	{
		"id": "b4175fcf3881",
		"ts": "2026-11-14T01:13:57.616Z",
		"symbol": "PONS",
		"token": "0x304B826A47a5E6CB2766aD9069f670651c9F847d",
		"score": 71,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.42,
		"flags": [
			"low_liquidity",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 0,
		"hash": "b4175fcf3881df15d403c420ef6b379506fca88ce5b3389abc5f94740a1ae75b"
	},
	{
		"id": "fabf4becb0f8",
		"ts": "2026-11-13T20:17:02.676Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 125852839.33,
		"hash": "fabf4becb0f89344d79dd775251387f1ecd78a5cdcabff73c36a5ee9328b3162"
	},
	{
		"id": "c64029e808cf",
		"ts": "2026-11-13T20:17:02.941Z",
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
		"liquidityUsd": 14823233.63,
		"hash": "c64029e808cf4962f560e8a1dac5092c4490996ebe42c3c7e9de9518ee7af4f6"
	},
	{
		"id": "4d7375e9227e",
		"ts": "2026-11-13T20:17:03.195Z",
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
		"liquidityUsd": 218117.75,
		"hash": "4d7375e9227e5d1c5f2034cc60de37318744c7cd1cdc9c525ac5dec61136ed86"
	},
	{
		"id": "9d5c110887cf",
		"ts": "2026-11-13T20:17:03.454Z",
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
		"liquidityUsd": 3926200.65,
		"hash": "9d5c110887cf09ebf9a5397413501495264291fe65483227070aca7d73f178e2"
	},
	{
		"id": "c8f5e3f2e553",
		"ts": "2026-11-13T20:17:03.768Z",
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
		"liquidityUsd": 1069935.47,
		"hash": "c8f5e3f2e5537d92fc81211fdd5885f9c9ee47aa0fc1e3673b7bd01ed7a28fb0"
	},
	{
		"id": "97900744be58",
		"ts": "2026-11-13T20:17:04.022Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 913632.51,
		"hash": "97900744be580dbdc61ceac830290b9bcd992990fec918bbb00fc95f867b58c0"
	},
	{
		"id": "fc5ae0ac2609",
		"ts": "2026-11-13T20:17:04.277Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3926200.65,
		"hash": "fc5ae0ac2609a46eb0e7663b5991d4074246b693db17d4a3c92d351078e0d879"
	},
	{
		"id": "bd4e03dbdd73",
		"ts": "2026-11-13T20:17:04.622Z",
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
		"liquidityUsd": 1865528.5,
		"hash": "bd4e03dbdd734b7e7e887affe5c8a328f912639bff2f7abe16d0415d175a47bc"
	},
	{
		"id": "f2a96ca060b7",
		"ts": "2026-11-13T20:17:04.893Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1418665.28,
		"hash": "f2a96ca060b7a1a7447821f87142616114612145d446635e1da6d1bbfb2bef58"
	},
	{
		"id": "6baf5f6de269",
		"ts": "2026-11-13T20:17:05.146Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1980190.31,
		"hash": "6baf5f6de269e55be93d09d9b9a80f143ac551495dbe3a92e383198919cd7319"
	},
	{
		"id": "9ff1d3551b73",
		"ts": "2026-11-13T20:17:05.425Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 785767.87,
		"hash": "9ff1d3551b735ac8c8d3bc94873db176db19acf00cd7275c4c1b6e368d798d1f"
	},
	{
		"id": "8a1ded84ebdc",
		"ts": "2026-11-13T20:17:05.671Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1467580.35,
		"hash": "8a1ded84ebdc749da30c2e4bfd04a86aef32f71180f3b831e83d7fa685fc0b59"
	},
	{
		"id": "ebf08ef2189f",
		"ts": "2026-11-13T20:17:05.912Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3493895.98,
		"hash": "ebf08ef2189f40d665a78532503547bce65c8cf1ab9e3b5d87731d8141ef8a62"
	},
	{
		"id": "d751b401475d",
		"ts": "2026-11-13T20:17:06.153Z",
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
		"liquidityUsd": 2403331.16,
		"hash": "d751b401475dfe543c99bdf3214d17611dced7df311a78fcbe5b8f068336b30e"
	},
	{
		"id": "5c9fb7710d63",
		"ts": "2026-11-13T20:17:06.391Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 418831.81,
		"hash": "5c9fb7710d634e5d41b8a775a09c412231bd22ebacb0505ea4b2260c017151fa"
	},
	{
		"id": "9c1b34b95c71",
		"ts": "2026-11-13T20:17:06.629Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1682630.58,
		"hash": "9c1b34b95c71b5fe0a9ce87a2c77e4412c7ca7df6f9ba89ded9e819bb8d0033c"
	},
	{
		"id": "d0b9f9ab2c97",
		"ts": "2026-11-13T20:17:06.868Z",
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
		"liquidityUsd": 764384.88,
		"hash": "d0b9f9ab2c9777ec5c35a50bae27c5ae65094d818a736bb3c8df75d7eeec00c5"
	},
	{
		"id": "2e46688aaff9",
		"ts": "2026-11-13T20:17:07.112Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2759188.62,
		"hash": "2e46688aaff9b4196ff93e2b98be9346d931987ac558897547d1b539bb6ddc12"
	},
	{
		"id": "ec2d101ec620",
		"ts": "2026-11-13T20:17:07.350Z",
		"symbol": "RSGP",
		"token": "0x44B63aF715D5ef02CC3646a6CE96875e11d69E85",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 180271.68,
		"hash": "ec2d101ec620ee812ef72dacdae957eab7412f844b20896f8c1433cee7421c07"
	},
	{
		"id": "495c888429f5",
		"ts": "2026-11-13T12:49:48.395Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 126699556.25,
		"hash": "495c888429f54690c18d53bec00453fdb97b736e732f8895ca1a3b51055f6a84"
	},
	{
		"id": "6504433f4135",
		"ts": "2026-11-13T12:49:48.871Z",
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
		"liquidityUsd": 15010633.45,
		"hash": "6504433f41352aa8fb44cd7434b735d77162a3fa7d409e45f226bc226e92c10d"
	},
	{
		"id": "fdd42c3b0a20",
		"ts": "2026-11-13T12:49:49.134Z",
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
		"liquidityUsd": 217059.6,
		"hash": "fdd42c3b0a20423c01bb4d7f76b4313bcca2db6159052eb37f290aaeec4397bd"
	},
	{
		"id": "e2f5bee77a49",
		"ts": "2026-11-13T12:49:49.387Z",
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
		"liquidityUsd": 3962104.27,
		"hash": "e2f5bee77a497454db3dff8c77ed9c446bd0a674f8cff2aa21cdae2bfaaac32e"
	},
	{
		"id": "f9c7bdd4b02e",
		"ts": "2026-11-13T12:49:49.641Z",
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
		"liquidityUsd": 1060660.37,
		"hash": "f9c7bdd4b02eb6db510c2abff5f836054837fbcbd5690810202124131cda4c9a"
	},
	{
		"id": "44fbcf186770",
		"ts": "2026-11-13T12:49:49.883Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 905414.04,
		"hash": "44fbcf186770ca9b8b467cd25145ec1c72af97e924165b166dfb11274ef04cf2"
	},
	{
		"id": "0fed463fca99",
		"ts": "2026-11-13T12:49:50.134Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3962104.27,
		"hash": "0fed463fca99e6fe20458f7ad167655d4d6456b2919620a61223738c05703d98"
	},
	{
		"id": "c590ceb44336",
		"ts": "2026-11-13T12:49:50.396Z",
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
		"liquidityUsd": 1476892.21,
		"hash": "c590ceb44336c7c76419467b0169120776ba135a42bc0ad0e3eb1bb92274339e"
	},
	{
		"id": "7d73143091e0",
		"ts": "2026-11-13T12:49:50.639Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 58209.03,
		"hash": "7d73143091e0b8493aa93102682c07306bd91b4284781bb6510bd087d7dce47b"
	},
	{
		"id": "26edae168606",
		"ts": "2026-11-13T12:49:50.892Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1406393.4,
		"hash": "26edae168606e5527ec0ee3545ae84244dd1068c403d3578d64c994691c045d2"
	},
	{
		"id": "5f4d500b6bf5",
		"ts": "2026-11-13T12:49:51.125Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1927557.01,
		"hash": "5f4d500b6bf558e772063901b729d14cbc383e79eda0b2e9f243aa652923a99a"
	},
	{
		"id": "1bc16bde579e",
		"ts": "2026-11-13T12:49:51.356Z",
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
		"liquidityUsd": 2301573.3,
		"hash": "1bc16bde579e8f14f654e9ee5383ad95f3a256a0f4a1b47822313ac08312bbcb"
	},
	{
		"id": "5eb842583989",
		"ts": "2026-11-13T12:49:51.602Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 793743.13,
		"hash": "5eb842583989c7b9a7d67a65a33fa7307abc03a2faad0a1dad15f8d2a810f18c"
	},
	{
		"id": "1c85e07ab77a",
		"ts": "2026-11-13T12:49:51.827Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3512218.88,
		"hash": "1c85e07ab77af459bf237db33d69a7e658ed3481ace03050f1e4f700b8f0b5b3"
	},
	{
		"id": "8d830f3c6f26",
		"ts": "2026-11-13T12:49:52.065Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3457298.04,
		"hash": "8d830f3c6f26678a748e4639503b665558c1433c0843c770c4d244428ad9391a"
	},
	{
		"id": "1ec3c0691978",
		"ts": "2026-11-13T12:49:52.289Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 627084.86,
		"hash": "1ec3c0691978575dc59ee44e4088e727f02c46385cfe6d9d5d0223e0e3342e45"
	},
	{
		"id": "caca8be18252",
		"ts": "2026-11-13T12:49:52.518Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 602585.56,
		"hash": "caca8be18252238f008d538c6dc4fcdf171d0a02425bed38d0d223917adbca8f"
	},
	{
		"id": "2a8a34198e60",
		"ts": "2026-11-13T12:49:52.755Z",
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
		"liquidityUsd": 6628769.74,
		"hash": "2a8a34198e60385179088aac3fc2a9f0f33c72e695cf0816d90e23e61bcb49e9"
	},
	{
		"id": "d67d522a1821",
		"ts": "2026-11-13T12:49:52.979Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1473119.98,
		"hash": "d67d522a1821f7f8f812616dc41a0e04c0f0f6d955ac4d5365e6272748fe9352"
	},
	{
		"id": "fb81b873ad4b",
		"ts": "2026-11-13T04:53:10.440Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 126799064.78,
		"hash": "fb81b873ad4b2d991df2128972cf7360e26016089235e016b472d15dd732415d"
	},
	{
		"id": "a689b31ef39f",
		"ts": "2026-11-13T04:53:10.703Z",
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
		"liquidityUsd": 14729738.13,
		"hash": "a689b31ef39fa0c0b5b0a95f685814e7d74e1f71048a204aaabb4a682f79d0f1"
	},
	{
		"id": "87f44978dcaa",
		"ts": "2026-11-13T04:53:10.927Z",
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
		"liquidityUsd": 216180.25,
		"hash": "87f44978dcaa99a05351f810b29f9920ab0342ca3a041d85feab62c3bfc64c31"
	},
	{
		"id": "991e5721d9a1",
		"ts": "2026-11-13T04:53:11.177Z",
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
		"liquidityUsd": 4025389.6,
		"hash": "991e5721d9a15d769d083dd9407dc55d1002a5d9a375231d289bd5c99c9f2b40"
	},
	{
		"id": "ee64c08f2247",
		"ts": "2026-11-13T04:53:11.430Z",
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
		"liquidityUsd": 1034673.14,
		"hash": "ee64c08f224756d6425ba96e2427dbfd388ec19953d83809afb10451120a2a99"
	},
	{
		"id": "4e8f4a766193",
		"ts": "2026-11-13T04:53:11.643Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 887582.63,
		"hash": "4e8f4a7661934535cd8d247c2ee64e0a8e98aa7748353e659bf176a0a899c078"
	},
	{
		"id": "1816acc5ae71",
		"ts": "2026-11-13T04:53:11.889Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 173760.53,
		"hash": "1816acc5ae7169aa8e5a20ad3bf2ce2215e2868c8f030fcd1fb1742e87a5ceb2"
	},
	{
		"id": "0f5fb069918f",
		"ts": "2026-11-13T04:53:12.113Z",
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
		"liquidityUsd": 1478507.87,
		"hash": "0f5fb069918f0690bd6ef3a3bb94f049fd0c79793e9eae9594d938a46ef83cc2"
	},
	{
		"id": "0e967bac6e6b",
		"ts": "2026-11-13T04:53:12.324Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1405005.24,
		"hash": "0e967bac6e6b2462fe15a6c6ad5a8b7d9d9f43954685cd0eb96ab7f5db06c527"
	},
	{
		"id": "f56435b94e62",
		"ts": "2026-11-13T04:53:12.619Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"high_holder_concentration"
		],
		"liquidityUsd": 58342.24,
		"hash": "f56435b94e6279d14c8fa1fce5be73c3344daf7446d81cfb8c25a2e065c54321"
	},
	{
		"id": "462f39c133c8",
		"ts": "2026-11-13T04:53:12.821Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 612471.49,
		"hash": "462f39c133c8ab2f2e7cb6b88763c24f30030c7b21726480374125a7829b9892"
	},
	{
		"id": "1572b1d64bc4",
		"ts": "2026-11-13T04:53:13.040Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2723848.63,
		"hash": "1572b1d64bc4a33834043e695fefb4b413d666a054328b28c66d4fab3c02df4c"
	},
	{
		"id": "d145724c54e5",
		"ts": "2026-11-13T04:53:13.231Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 769123.21,
		"hash": "d145724c54e5978a0725ecb5500d81739a0988e8f0a7fd998b4734b87c5b08b1"
	},
	{
		"id": "820a01433222",
		"ts": "2026-11-13T04:53:13.450Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1936513.37,
		"hash": "820a01433222502c549562150a2600273e938c9e84d37b6b63a8abfc4a014fab"
	},
	{
		"id": "67ad58622ddc",
		"ts": "2026-11-13T04:53:13.709Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1434104.66,
		"hash": "67ad58622ddc5675d741b803a6c9461514a2b1585bd09b9f004688c1b202eab7"
	},
	{
		"id": "c6b70145f221",
		"ts": "2026-11-13T04:53:13.936Z",
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
		"liquidityUsd": 2242063.93,
		"hash": "c6b70145f2217c8daeafd9a7baa9ffc324dcfdc054c95c3849a8e13e0804a3b4"
	},
	{
		"id": "cd01f9c40bad",
		"ts": "2026-11-13T04:53:14.164Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1630084.83,
		"hash": "cd01f9c40bad1df5a27e3797be15f70d59c751acf32272eb8e0f2d237b691c1b"
	},
	{
		"id": "bd4837438f91",
		"ts": "2026-11-13T04:53:14.365Z",
		"symbol": "Claude",
		"token": "0xAb35c8ec5E51E31A350AbA8fBFc9cA132bc05b07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10272205.91,
		"hash": "bd4837438f912bb230e3c262fb54910fa6893d1e49fe1a662781dd0dcbc4df18"
	},
	{
		"id": "5c96585ed523",
		"ts": "2026-11-13T04:53:14.592Z",
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
		"liquidityUsd": 6355201.48,
		"hash": "5c96585ed5233a3ed0dcba64bc8f8127b332ad4380997886ae2faecabbecce20"
	},
	{
		"id": "5cff348509a7",
		"ts": "2026-11-12T23:09:34.810Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 132566997.7,
		"hash": "5cff348509a7e3d0e09355bb1c247bfb985c0bef69cfd91fab17625bfb9f4e27"
	},
	{
		"id": "34e9e4e06508",
		"ts": "2026-11-12T23:09:35.481Z",
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
		"liquidityUsd": 15358742.63,
		"hash": "34e9e4e06508f42d5a8eb7b836f01a66acf22153a956d7f9154ed524ea972f87"
	},
	{
		"id": "361908276be7",
		"ts": "2026-11-12T23:09:35.745Z",
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
		"liquidityUsd": 222424.34,
		"hash": "361908276be7852a2414e4a81e8feef8ffc569e928211acf6489403119b8951f"
	},
	{
		"id": "dd4f9627ca40",
		"ts": "2026-11-12T23:09:36.012Z",
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
		"liquidityUsd": 4140197.88,
		"hash": "dd4f9627ca404c8d2011870e9170009d8c7faa8674e5c00da76c3893c574d358"
	},
	{
		"id": "48ed6cac9294",
		"ts": "2026-11-12T23:09:36.310Z",
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
		"liquidityUsd": 1082324.33,
		"hash": "48ed6cac92946822e6cff385230fb5c17fb9a3881e87b05dd60a80694b46f69d"
	},
	{
		"id": "d8c3adc3ba91",
		"ts": "2026-11-12T23:09:36.570Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 922230.88,
		"hash": "d8c3adc3ba91d0968e5968faee4b3d862fca64a31a622284756a793658599726"
	},
	{
		"id": "aeeefafe0344",
		"ts": "2026-11-12T23:09:36.841Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 778517.15,
		"hash": "aeeefafe0344bb6e247669cce976e7f67e0e4c1974e7bcf4b2bcf25b034efd7d"
	},
	{
		"id": "9593ff950e81",
		"ts": "2026-11-12T23:09:37.157Z",
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
		"liquidityUsd": 1445691.11,
		"hash": "9593ff950e81f2b647cd3cc650ab8eeda1e9ae6fb931df564604221216efb4be"
	},
	{
		"id": "a4af2975a642",
		"ts": "2026-11-12T23:09:37.437Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1409330.47,
		"hash": "a4af2975a642a2080670a1ff0e33b4dada0fc934d0f97b1e11a08a4470914e63"
	},
	{
		"id": "72116f9a453f",
		"ts": "2026-11-12T23:09:37.700Z",
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
		"liquidityUsd": 649113.55,
		"hash": "72116f9a453f6d4c1e53c03442b0e11a25bccddb927cdda2568a3d89c45507fc"
	},
	{
		"id": "915df8f2d0fa",
		"ts": "2026-11-12T23:09:37.944Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57939.57,
		"hash": "915df8f2d0faa4bb0e6bb61f14e2b6521d1ff17a26133d7297a66c8ea1efcd3d"
	},
	{
		"id": "58c69278fa4d",
		"ts": "2026-11-12T23:09:38.190Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 806912.23,
		"hash": "58c69278fa4d9c2971ea2fd275a93725a2b37263c7c5f346ed2deb69571ecb08"
	},
	{
		"id": "bdf6eb53d485",
		"ts": "2026-11-12T23:09:38.433Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1503674.4,
		"hash": "bdf6eb53d485cdd1ce8070e78136a63fbe4ca04366b9899e7ddd4308e027bda4"
	},
	{
		"id": "7998b4d4e37f",
		"ts": "2026-11-12T23:09:38.690Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3442267.86,
		"hash": "7998b4d4e37fdc2598f3255a4cd042bd65366bfd1488431adcb06a12c1e3b671"
	},
	{
		"id": "255831856b95",
		"ts": "2026-11-12T23:09:38.934Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1939999.89,
		"hash": "255831856b956556efc78f68062b3f18fb5dab4a60f7c0f700a4d109a367a2ce"
	},
	{
		"id": "90993f6b3306",
		"ts": "2026-11-12T23:09:39.194Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1645837.13,
		"hash": "90993f6b33064daa69789fe0e4fd8da1f2f8ed2fdde5a40821f321d105b3cedc"
	},
	{
		"id": "9704f74df47f",
		"ts": "2026-11-12T23:09:39.435Z",
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
		"liquidityUsd": 6683313.52,
		"hash": "9704f74df47f8da0864c5a57771eced3a714bbc594cef819284912dcca2adeb2"
	},
	{
		"id": "36064800eb96",
		"ts": "2026-11-12T23:09:39.685Z",
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
		"liquidityUsd": 488185.34,
		"hash": "36064800eb965672545a689ea326cd62ce0e9e75269f17bf5c270e797c94d22a"
	},
	{
		"id": "297d5ab6eb76",
		"ts": "2026-11-12T23:09:39.926Z",
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
		"liquidityUsd": 2284857.87,
		"hash": "297d5ab6eb76b14a7ce60b98c08065a6783d61af218009de9b419d138bdfecf1"
	},
	{
		"id": "43d8aba4b9dd",
		"ts": "2026-11-12T17:53:14.132Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 132744476.79,
		"hash": "43d8aba4b9dd16ddbcbbc9e2cc39678b42347f1ed2197c593eab6e6767bf4dfc"
	},
	{
		"id": "f82f39c8aa14",
		"ts": "2026-11-12T17:53:14.648Z",
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
		"liquidityUsd": 15278573.76,
		"hash": "f82f39c8aa14d29dc9d2d86adff613c5e7f6620d8341abfe1dd29e80549c9350"
	},
	{
		"id": "b9349b4e5239",
		"ts": "2026-11-12T17:53:14.906Z",
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
		"liquidityUsd": 219226.56,
		"hash": "b9349b4e5239da78bae85e5e3d686a772a2157d7b966920ee5738fe8b84ad234"
	},
	{
		"id": "77dab721d33b",
		"ts": "2026-11-12T17:53:15.164Z",
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
		"liquidityUsd": 4163065.24,
		"hash": "77dab721d33be06d9ec2d1af273aa3ffa617b8dedb4b4a3c1bedea1ce5d51731"
	},
	{
		"id": "b6ea8e5149eb",
		"ts": "2026-11-12T17:53:15.469Z",
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
		"liquidityUsd": 1063027.25,
		"hash": "b6ea8e5149eb72f5d34af9f53cab33217d51b6b630f080f64ae1f87216449707"
	},
	{
		"id": "3878a96a1e09",
		"ts": "2026-11-12T17:53:15.762Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 926005.39,
		"hash": "3878a96a1e098f81d2d7329ba47a063adf7363c226d47b225f29c9b709bdad0c"
	},
	{
		"id": "3833c46a0d45",
		"ts": "2026-11-12T17:53:16.012Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1306248.05,
		"hash": "3833c46a0d4593e67543571dc8b224b20c7c1d03ed246823ea74b7d441a1d893"
	},
	{
		"id": "a8d458db450b",
		"ts": "2026-11-12T17:53:16.313Z",
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
		"liquidityUsd": 1441464.63,
		"hash": "a8d458db450b4d0118488bc5e656b33eda7a598a5516b24330b64649849f658b"
	},
	{
		"id": "bf659d9fd4d9",
		"ts": "2026-11-12T17:53:16.566Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1305876.03,
		"hash": "bf659d9fd4d967fcaad5d61e0112f3edc6411c9303a12453d0ec25132d5351cd"
	},
	{
		"id": "caac8b9a4976",
		"ts": "2026-11-12T17:53:16.818Z",
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
		"liquidityUsd": 648277.18,
		"hash": "caac8b9a497618387c79023332128de71ff91c77cc600d954874f2a7664516b3"
	},
	{
		"id": "461cb8795717",
		"ts": "2026-11-12T17:53:17.060Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1522286.37,
		"hash": "461cb8795717b297ac443633fdcb1fe0b2a4a7be49e0320b1d998963ab19197d"
	},
	{
		"id": "ed1003d76b46",
		"ts": "2026-11-12T17:53:17.297Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2175037.09,
		"hash": "ed1003d76b46609b986499f8b4e6f3cb17fd455dcc6aab89dc63b7f05e5338f9"
	},
	{
		"id": "d8c0bfc33257",
		"ts": "2026-11-12T17:53:17.537Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1914849.41,
		"hash": "d8c0bfc33257d5508ce3d2d697444ec5cdb0cb74e2922d77abdfedfed40d1644"
	},
	{
		"id": "7e07d0a30579",
		"ts": "2026-11-12T17:53:17.775Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 823594.95,
		"hash": "7e07d0a30579925bee5a541aa38b14f89cb7392a2e19a8a05e451f853f9102bb"
	},
	{
		"id": "402f2694cf0e",
		"ts": "2026-11-12T17:53:18.012Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 57225.47,
		"hash": "402f2694cf0e32a806385168664c07b7d31d4224a68d02603855f3470fdf2d53"
	},
	{
		"id": "2d19ed770881",
		"ts": "2026-11-12T17:53:18.257Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1649429.91,
		"hash": "2d19ed770881e3512b730aea1c50ddd5391f8b332446649266db3233df4a98bd"
	},
	{
		"id": "f29af4b96590",
		"ts": "2026-11-12T17:53:18.495Z",
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
		"liquidityUsd": 6669993.39,
		"hash": "f29af4b96590669fb21c73f66351867176ec740367ce3e4ad27648703944c0a6"
	},
	{
		"id": "e921c310e7cc",
		"ts": "2026-11-12T17:53:18.733Z",
		"symbol": "REVVY",
		"token": "0x3441e8fCdD380c4e7F5C7F55CCd599B2a2afCcCC",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 57981.74,
		"hash": "e921c310e7cc3cf81b9d3144562fe5d66b499356a3595204273f964650e2511f"
	},
	{
		"id": "52d5287fb322",
		"ts": "2026-11-12T17:53:18.970Z",
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
		"liquidityUsd": 468141.95,
		"hash": "52d5287fb32221b42fc908d540486fe479fcd75bae0bc2e39ba33e43355fcb91"
	},
	{
		"id": "42ad0384068c",
		"ts": "2026-11-12T09:12:21.364Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 133853867.55,
		"hash": "42ad0384068c0dd29164b09a01b4ca0a87c89d154d604b1f0471d9bbb47db9e4"
	},
	{
		"id": "ba7b1d631956",
		"ts": "2026-11-12T09:12:21.888Z",
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
		"liquidityUsd": 15394452.71,
		"hash": "ba7b1d631956f5d3192d47a35ca0b05fa534344b271202173b2e1de4cd046668"
	},
	{
		"id": "fc5b8eef4ca1",
		"ts": "2026-11-12T09:12:22.138Z",
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
		"liquidityUsd": 229102.56,
		"hash": "fc5b8eef4ca10d04620d31a456e4922c39f7758324fed684c69ccde8a0db344b"
	},
	{
		"id": "0f0f7d163f2a",
		"ts": "2026-11-12T09:12:22.426Z",
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
		"liquidityUsd": 4209550.58,
		"hash": "0f0f7d163f2afd7785e1d702ad8f149c4826bac74293fd8a6b54c489734f95a9"
	},
	{
		"id": "567feed4d615",
		"ts": "2026-11-12T09:12:22.695Z",
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
		"liquidityUsd": 1188272.81,
		"hash": "567feed4d6159f6851e8df70c26a892262c5a751f54a0b178079ac9268174cfe"
	},
	{
		"id": "ffa9c9a0c746",
		"ts": "2026-11-12T09:12:22.939Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 931481.87,
		"hash": "ffa9c9a0c746826427552f61c1539f747e605590388bc2343f78d5d241bf1fa6"
	},
	{
		"id": "e0524b4ca4f3",
		"ts": "2026-11-12T09:12:23.205Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4209591.43,
		"hash": "e0524b4ca4f326f5dcd3b715a581535d99ce059c5f04a340b9145a1d0d94da21"
	},
	{
		"id": "1bc5b31203c9",
		"ts": "2026-11-12T09:12:23.484Z",
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
		"liquidityUsd": 1178674.21,
		"hash": "1bc5b31203c99febc8843746314207f71b480025a6f82cf2f132863e40d49678"
	},
	{
		"id": "daa345cb1a19",
		"ts": "2026-11-12T09:12:23.735Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1623777.47,
		"hash": "daa345cb1a190566f5013f01fc13c1d5afd7efa06b6cece61fea864f4fc93bd9"
	},
	{
		"id": "0fcf9455628e",
		"ts": "2026-11-12T09:12:24.029Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1559370.47,
		"hash": "0fcf9455628e9f86ab24d9b50fd67931c07cf9a793832316efc85bd13b7f24fa"
	}
]
