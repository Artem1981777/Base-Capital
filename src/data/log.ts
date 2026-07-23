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
	"updatedAt": "2026-07-23T10:17:43.522Z",
	"tokensScored": 5090,
	"verdictsIssued": 5090,
	"safe": 4463,
	"risky": 397,
	"likelyRug": 230,
	"ticks": 310
}

export const verdicts: AgentVerdict[] = [
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
	},
	{
		"id": "788f6065b729",
		"ts": "2026-07-22T22:58:36.128Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9884068.35,
		"hash": "788f6065b729612fdb8e64c4520e033cdc13aaf90bc0835b39af1fa824c9199d"
	},
	{
		"id": "770af2bfc175",
		"ts": "2026-07-22T22:58:36.346Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 653155.33,
		"hash": "770af2bfc175393d23264b93faf4eaf77fd98630ffac94d5ff0cf4c09e3ff1bf"
	},
	{
		"id": "715a728d1bd6",
		"ts": "2026-07-22T22:58:36.562Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1357498.5,
		"hash": "715a728d1bd674383c002b56d36cb98d84a2503d48b94a5a9da0b3f4315269a0"
	},
	{
		"id": "a702346026f0",
		"ts": "2026-07-22T22:58:36.782Z",
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
		"liquidityUsd": 101799.99,
		"hash": "a702346026f051e6c763eda7eee09ca7d2b7b678d8f166a4530819b03c58e2bf"
	},
	{
		"id": "43d1cb386a0a",
		"ts": "2026-07-22T21:02:07.707Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111199780,
		"hash": "43d1cb386a0a8f9ed0ad13765b69d67d72b2ca1b91e1b7e3cbad356843d1be6a"
	},
	{
		"id": "f3c034bafc02",
		"ts": "2026-07-22T21:02:08.126Z",
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
		"liquidityUsd": 15760377.11,
		"hash": "f3c034bafc02a6da345863164712d73077afde218926bbe2a0db7fa211a85bf0"
	},
	{
		"id": "ec51a34722dc",
		"ts": "2026-07-22T21:02:08.355Z",
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
		"liquidityUsd": 840139.74,
		"hash": "ec51a34722dca0b9e794c7d34a0c4d4193cabd809b954ff0777e134e4a3e64d5"
	},
	{
		"id": "de4c68daf392",
		"ts": "2026-07-22T21:02:08.565Z",
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
		"liquidityUsd": 26094805.98,
		"hash": "de4c68daf392d894364580171af891168c8f82283d9a3e548dd47bc3172a8293"
	},
	{
		"id": "828e604b8c51",
		"ts": "2026-07-22T21:02:08.783Z",
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
		"liquidityUsd": 5201238.8,
		"hash": "828e604b8c51978e06ccdc2e239745561ac3a2796ee151ec9823c19f6643c0ca"
	},
	{
		"id": "c42bcaa8d72e",
		"ts": "2026-07-22T21:02:09.002Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 969361.94,
		"hash": "c42bcaa8d72eeb54319914c2595352b7ecc84dad4f3695a705fe027bf8e59704"
	},
	{
		"id": "dd41ee24ee8d",
		"ts": "2026-07-22T21:02:09.220Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26094805.98,
		"hash": "dd41ee24ee8d44891b1e937113d15bff771cdaac9001ba3e311b94921f409d42"
	},
	{
		"id": "e937fd34a6b2",
		"ts": "2026-07-22T21:02:09.432Z",
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
		"liquidityUsd": 2586563.9,
		"hash": "e937fd34a6b226e5b959f7ca86468f1ec5d236b796068fb76bdfe11f9595f7f1"
	},
	{
		"id": "5372f6e451ed",
		"ts": "2026-07-22T21:02:09.657Z",
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
		"liquidityUsd": 693849.2,
		"hash": "5372f6e451edf19d35fd08886ed05d804ca8d79f08437d619e0018e2831a79fe"
	},
	{
		"id": "f0c23c5d285b",
		"ts": "2026-07-22T21:02:09.868Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 341771.43,
		"hash": "f0c23c5d285b561fc80ab809ecb1bbb0a701cf30888ccd01124448f2e7ba6884"
	},
	{
		"id": "324ee10cc3fc",
		"ts": "2026-07-22T21:02:10.092Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2046229.67,
		"hash": "324ee10cc3fc6ec26d495e461831de5ce2a546ab67dca1dbf3fe59a1b2160bc4"
	},
	{
		"id": "50fdc493a253",
		"ts": "2026-07-22T21:02:10.304Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5530387.28,
		"hash": "50fdc493a2534b04c170da3e117a027f0ec1406cb7a5d25c82ec8b38a6e39e8e"
	},
	{
		"id": "e20570c65fa9",
		"ts": "2026-07-22T21:02:10.526Z",
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
		"liquidityUsd": 592557.09,
		"hash": "e20570c65fa9b340c26db7d79a1622a477c2e2d7d6f7750b6aa7d60128d237ba"
	},
	{
		"id": "52d5460a89b3",
		"ts": "2026-07-22T21:02:10.729Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 657212.21,
		"hash": "52d5460a89b353c3d9aa8d98925afcd1540a7bf8846ed22591bcf6339713b11d"
	},
	{
		"id": "8d9555a0a179",
		"ts": "2026-07-22T21:02:10.957Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9828442.53,
		"hash": "8d9555a0a179b9afde10a8e439a9a3c848396cf9970c672d698868685b98d6b6"
	},
	{
		"id": "f3c6e97cb028",
		"ts": "2026-07-22T21:02:11.177Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1343404.87,
		"hash": "f3c6e97cb0283196075fd95b50c21dbf4a9ddbbdedd5b6a36c6d53d3099c2ad1"
	},
	{
		"id": "85651cf86364",
		"ts": "2026-07-22T21:02:11.435Z",
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
		"liquidityUsd": 92672.58,
		"hash": "85651cf86364b616d7351c0fdef8b732b1019ae9f500afaa829a5335a38594be"
	},
	{
		"id": "00d4c72380a4",
		"ts": "2026-07-22T19:09:57.627Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111224818.56,
		"hash": "00d4c72380a441be9add1c74445dc5451da3cb8c75988049e2ef9933d25fff9f"
	},
	{
		"id": "b78add5af732",
		"ts": "2026-07-22T19:09:57.864Z",
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
		"liquidityUsd": 16581802.19,
		"hash": "b78add5af732cb4a2e6ad5455392831a66119a204540b4216e71e1f310af9e17"
	},
	{
		"id": "9468ffe74303",
		"ts": "2026-07-22T19:09:58.106Z",
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
		"liquidityUsd": 839995.19,
		"hash": "9468ffe743031eadcdab4dee58c36790b7612bcfdd5e98895b4ea60481da30e1"
	},
	{
		"id": "2644febffdcd",
		"ts": "2026-07-22T19:09:58.337Z",
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
		"liquidityUsd": 25945260.48,
		"hash": "2644febffdcdd69e09eeb67daabfbeff794947f29a8ef10a8f099a02161322b7"
	},
	{
		"id": "60571914ac2d",
		"ts": "2026-07-22T19:09:58.575Z",
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
		"liquidityUsd": 5227124.78,
		"hash": "60571914ac2d05380e1018454336c7d7ae0b9845991d81841eac2d549ccf8027"
	},
	{
		"id": "19b2ffb99fc9",
		"ts": "2026-07-22T19:09:58.808Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 981636.54,
		"hash": "19b2ffb99fc905cce2f6777afe1fb56af469096d4afd0adf1fad8d4399c47001"
	},
	{
		"id": "f4e72eaa2e51",
		"ts": "2026-07-22T19:09:59.041Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25945260.4,
		"hash": "f4e72eaa2e5140e0e3f40876e99c876f1b75931b9b0171487044fd4f7830cf40"
	},
	{
		"id": "6c8093d37013",
		"ts": "2026-07-22T19:09:59.283Z",
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
		"liquidityUsd": 2587968.81,
		"hash": "6c8093d370130554cdd51c236a2e65216e08bec038f97b508f9791342fef11e8"
	},
	{
		"id": "55e0a94acd1f",
		"ts": "2026-07-22T19:09:59.516Z",
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
		"liquidityUsd": 692041.27,
		"hash": "55e0a94acd1fb3e344c265d908ec355e2086b786c26d607941e413e9863e61c0"
	},
	{
		"id": "fdb25a8c47b3",
		"ts": "2026-07-22T19:09:59.749Z",
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
		"liquidityUsd": 9889249.33,
		"hash": "fdb25a8c47b3cb438d66800d9fcc7549467f3ef17dc5380f6ab31c914c959ecf"
	},
	{
		"id": "34e043b72c66",
		"ts": "2026-07-22T19:09:59.968Z",
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
		"liquidityUsd": 593908.63,
		"hash": "34e043b72c66669eb701ccd4e5690415fe0765e790f02ad24ca37ed6497d5ef9"
	},
	{
		"id": "8c227203d3c4",
		"ts": "2026-07-22T19:10:00.203Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1414034.95,
		"hash": "8c227203d3c4d90c5270be9b5d773ea9b9e0e90bb1d460db221beb32ae3af784"
	},
	{
		"id": "2a33c5fc59f9",
		"ts": "2026-07-22T19:10:00.486Z",
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
		"liquidityUsd": 5575143.86,
		"hash": "2a33c5fc59f96d1b383dc3c0f4c2f4ed4ee981536929522c201fdff622975f01"
	},
	{
		"id": "b9f466b37135",
		"ts": "2026-07-22T19:10:00.718Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 785770.02,
		"hash": "b9f466b371350a37f81fd00f42041cd49fc606b99c9cff4d6fea358718567a76"
	},
	{
		"id": "f8740e57fb29",
		"ts": "2026-07-22T19:10:01.012Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1348185.58,
		"hash": "f8740e57fb29058aba8a3e9e03d392edb535e533c31ac8ecc1c8eb7d1e64903f"
	},
	{
		"id": "76aa3f7640c2",
		"ts": "2026-07-22T19:10:01.796Z",
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
		"liquidityUsd": 1411380.64,
		"hash": "76aa3f7640c2c640d0745d0f31ff9bef5fe51c0a4fceb49ee7a3e42d6486505d"
	},
	{
		"id": "f76419162967",
		"ts": "2026-07-22T19:10:02.124Z",
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
		"liquidityUsd": 674667.04,
		"hash": "f76419162967f401aa5e162c77fd2c41593d9186e58cf9e856a3303502fba80d"
	},
	{
		"id": "31d5318e0e74",
		"ts": "2026-07-22T17:13:45.447Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111683239.71,
		"hash": "31d5318e0e747adb150a239e0b88f68bed6b74eea0e555a424cbf801472df58d"
	},
	{
		"id": "c0f59917b537",
		"ts": "2026-07-22T17:13:45.891Z",
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
		"liquidityUsd": 16718109.85,
		"hash": "c0f59917b5370de227aca1db331e8ac20c2ed8adaaaeaf9b7ae24b5052995915"
	},
	{
		"id": "235eb928cf8d",
		"ts": "2026-07-22T17:13:46.129Z",
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
		"liquidityUsd": 849298.66,
		"hash": "235eb928cf8d3c172c27e682c6dcf676258eb1bf1a726b494db1fcc915e0f1d3"
	},
	{
		"id": "be0777ad357e",
		"ts": "2026-07-22T17:13:46.367Z",
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
		"liquidityUsd": 25944759.94,
		"hash": "be0777ad357e32a7af0d89bb7ce08cde0f6436d1f22953c538d53ac1b611e92d"
	},
	{
		"id": "ac9fb31e027c",
		"ts": "2026-07-22T17:13:46.635Z",
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
		"liquidityUsd": 5235079.45,
		"hash": "ac9fb31e027c20afd9500da4b9fb9af4a25b13f1a1187708b43b92d80cb0d525"
	},
	{
		"id": "5e599f3b7d8a",
		"ts": "2026-07-22T17:13:46.893Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 994539.52,
		"hash": "5e599f3b7d8a972d3f7787dd31c3362ceaff9e6fcd52a4871a17386dcc8d2b53"
	},
	{
		"id": "6936b95abb4b",
		"ts": "2026-07-22T17:13:47.150Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25944759.94,
		"hash": "6936b95abb4b61090a9f2011c1dfd440fc589b073351ec3f6cd855d93a28ab94"
	},
	{
		"id": "3b1a938f0edd",
		"ts": "2026-07-22T17:13:47.393Z",
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
		"liquidityUsd": 2617222.95,
		"hash": "3b1a938f0edd584fc8d791ce69aa178f6e10e7b2d1e877c5e650e67246257aa4"
	},
	{
		"id": "19f8443e747d",
		"ts": "2026-07-22T17:13:47.633Z",
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
		"liquidityUsd": 10019828.17,
		"hash": "19f8443e747d2eed76a6017ae2faa665c450488e294217bcf393007492b17dde"
	},
	{
		"id": "ce8bb1923787",
		"ts": "2026-07-22T17:13:47.867Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1425951.48,
		"hash": "ce8bb1923787516872167028d68858613c90758187a5ec6d8ad17e5d3554b02f"
	},
	{
		"id": "2e1871f5a060",
		"ts": "2026-07-22T17:13:48.088Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 700381.48,
		"hash": "2e1871f5a060883e0d14bd6902a7c7263b6090fa7e50c46cdd131c0d35aa4454"
	},
	{
		"id": "6326433f4479",
		"ts": "2026-07-22T17:13:48.308Z",
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
		"liquidityUsd": 782268.49,
		"hash": "6326433f4479a49bfc5c29ab2e7c1081e9f5fab473dc47dc05abe5f9ca2280d1"
	},
	{
		"id": "819584259dc7",
		"ts": "2026-07-22T17:13:48.529Z",
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
		"liquidityUsd": 1408633.45,
		"hash": "819584259dc75a94726a010a2d1af8b27976241a9f5e90e56586dd2e40d5f6b9"
	},
	{
		"id": "bc6a2e436261",
		"ts": "2026-07-22T17:13:48.752Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 205387.6,
		"hash": "bc6a2e4362615b1db6d69366d9e4a418f139e10b0792b8819bd9e102bcd586c8"
	},
	{
		"id": "809e9920f510",
		"ts": "2026-07-22T17:13:48.970Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5658388.13,
		"hash": "809e9920f5107b6f610f089a327ea33e56b2ea128e930dc7a535228940ccbc87"
	},
	{
		"id": "6f33c7182ce2",
		"ts": "2026-07-22T17:13:49.188Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2079969.85,
		"hash": "6f33c7182ce2fc1a367e9d029a9d38563a5130512feccb4c2b9c54b4dbcfcf41"
	},
	{
		"id": "d1382696a048",
		"ts": "2026-07-22T17:13:49.408Z",
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
		"liquidityUsd": 599447.98,
		"hash": "d1382696a0489c199cb699625e95b077e3942a1be7c8be3ce3ea8ae499e5a71a"
	},
	{
		"id": "a9efef401944",
		"ts": "2026-07-22T15:37:20.609Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111543086.9,
		"hash": "a9efef4019441e78240657f1d4b42de557eba17be4c696848538e06ff3d4d7f6"
	},
	{
		"id": "8d6bef1b6bfe",
		"ts": "2026-07-22T15:37:21.153Z",
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
		"liquidityUsd": 16140572.05,
		"hash": "8d6bef1b6bfef14232c7cecde029e19a65f684aac2eb9f889642aa371d4343d3"
	},
	{
		"id": "94aceb3f56cf",
		"ts": "2026-07-22T15:37:21.528Z",
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
		"liquidityUsd": 848583.24,
		"hash": "94aceb3f56cff2f6f441474de730f586033e4c98eefe81d580931a35800c1ad4"
	},
	{
		"id": "da1d8489509e",
		"ts": "2026-07-22T15:37:21.904Z",
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
		"liquidityUsd": 25857112.59,
		"hash": "da1d8489509ef0fbdb724b27120f88866bdb0c05a4b3a7deab134781b7f699c0"
	},
	{
		"id": "03354f80547b",
		"ts": "2026-07-22T15:37:22.186Z",
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
		"liquidityUsd": 5292752.01,
		"hash": "03354f80547b8b0f7e03c105874e0efd4b700658588a08c4347b44998cd88a1a"
	},
	{
		"id": "a2d7a6c52e69",
		"ts": "2026-07-22T15:37:22.409Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 998155.56,
		"hash": "a2d7a6c52e691262f0ad19ea7bc0cbcb20cb1748a7f689875b07735b345a3a94"
	},
	{
		"id": "f5133095a361",
		"ts": "2026-07-22T15:37:22.627Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25854291.94,
		"hash": "f5133095a361a4c31803514587c83ea51a1fa9eb07dd1ff245fbac28a74c5902"
	},
	{
		"id": "8e7779325ae9",
		"ts": "2026-07-22T15:37:22.909Z",
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
		"liquidityUsd": 2607917.89,
		"hash": "8e7779325ae9a49139f3cd3ff82e657b8f2c8411ad9d4483dca939875495ba81"
	},
	{
		"id": "7777d6381712",
		"ts": "2026-07-22T15:37:23.141Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 520426.6,
		"hash": "7777d6381712f8afc90ab823d9a9c4aeb9b1d9be93bafd1c8c3e850286f3a208"
	},
	{
		"id": "9538bff53950",
		"ts": "2026-07-22T15:37:23.353Z",
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
		"liquidityUsd": 10061276.43,
		"hash": "9538bff539506a2e31237f9eb0cf3ec93d4fb2cb13cc64c5171b806dc21f1969"
	},
	{
		"id": "612098a01893",
		"ts": "2026-07-22T15:37:23.637Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1475152.02,
		"hash": "612098a018938aee71901204f0c066d8509cea52a2686ede5b1836f234fc789b"
	},
	{
		"id": "6ea18281528b",
		"ts": "2026-07-22T15:37:23.905Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 699819.11,
		"hash": "6ea18281528bf4fef38427a9899caad097ccffeb74b0370df497c9a2a3473552"
	},
	{
		"id": "56ed0dbd4c1a",
		"ts": "2026-07-22T15:37:24.186Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1351299.08,
		"hash": "56ed0dbd4c1aa5c27b3b2135f79fdc5678a63022faa06886168b9d6115d45d06"
	},
	{
		"id": "c7015a0538a7",
		"ts": "2026-07-22T15:37:24.463Z",
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
		"liquidityUsd": 1419339.55,
		"hash": "c7015a0538a7222f73eb1b64c71b890beced01d07cdb161185ae5d1d2ff308bd"
	},
	{
		"id": "ba5589098b3e",
		"ts": "2026-07-22T15:37:24.676Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1809955.27,
		"hash": "ba5589098b3ef6fc02b5f245e3098d4cda741bd645ffb5e2d21d84c2fdf7cf4f"
	},
	{
		"id": "c62ab9660822",
		"ts": "2026-07-22T15:37:24.870Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 205919.58,
		"hash": "c62ab9660822b29ee236b24b42e93ea1fe45a606ab256babdc7b80a70c327295"
	},
	{
		"id": "6655ce0e79ce",
		"ts": "2026-07-22T15:37:25.140Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2089837.06,
		"hash": "6655ce0e79ce0f20ade1583be467cc6db91e9eb6ebe9a6a3f998b3c9beb1a36d"
	},
	{
		"id": "93dc5993af3a",
		"ts": "2026-07-22T13:43:17.140Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111094285.01,
		"hash": "93dc5993af3aac838220765932be8c2e7f8ff11616997ff1164298ab4eb341dd"
	},
	{
		"id": "14045c5fb915",
		"ts": "2026-07-22T13:43:17.587Z",
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
		"liquidityUsd": 13592220.61,
		"hash": "14045c5fb915c7e2db74a34158ce193028fb888f2ae9485765a4c0ae505fb261"
	},
	{
		"id": "b679f350df4d",
		"ts": "2026-07-22T13:43:17.834Z",
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
		"liquidityUsd": 846347.78,
		"hash": "b679f350df4d7d12640ebbe016921dd5d6a69379b21d0a12bc5ef652dbd050a2"
	},
	{
		"id": "27cf88e8b534",
		"ts": "2026-07-22T13:43:18.082Z",
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
		"liquidityUsd": 25910634.37,
		"hash": "27cf88e8b5341dd11d3d7120fd5bb9d121f9617be9a612559a60bb9785a4c5c9"
	},
	{
		"id": "a206fe9b663e",
		"ts": "2026-07-22T13:43:18.337Z",
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
		"liquidityUsd": 5306219.26,
		"hash": "a206fe9b663e7793e38ba4f7e40b21a4709ac8728a1af947e0334aedaf033368"
	},
	{
		"id": "787363aff23d",
		"ts": "2026-07-22T13:43:18.578Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 994007.57,
		"hash": "787363aff23d8c1bf40fb9982130970b5f4f8b29fa955f9b5d3b7c0b25f06e1b"
	},
	{
		"id": "8cb6916ee103",
		"ts": "2026-07-22T13:43:18.827Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25910613.38,
		"hash": "8cb6916ee1036741dff44bbb9299a77910ff0d1c59cb1d9e96e81e0e48b3db6c"
	},
	{
		"id": "169c9126be79",
		"ts": "2026-07-22T13:43:19.072Z",
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
		"liquidityUsd": 2597517.76,
		"hash": "169c9126be79684175c9d84ba4e101b39ad87c744823ea07daa74e49a3e7f397"
	},
	{
		"id": "a3d13a84e987",
		"ts": "2026-07-22T13:43:19.393Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 510974.97,
		"hash": "a3d13a84e987ad0279ed1b2c30a8bcc22d172ddf706cce5cd3c1aad1eebf98bc"
	},
	{
		"id": "567272fc039d",
		"ts": "2026-07-22T13:43:19.635Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1478681.84,
		"hash": "567272fc039de2b28bdd8af4ce7be14e93f186ab7d2007802a153b7ebe22a65d"
	},
	{
		"id": "3c6d5f8d1f04",
		"ts": "2026-07-22T13:43:19.863Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10038483.03,
		"hash": "3c6d5f8d1f04af61718a2bcd476fa7cc334ad93de834bd4661f93f9251d92b3a"
	},
	{
		"id": "cfde108a60c3",
		"ts": "2026-07-22T13:43:20.090Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692229.04,
		"hash": "cfde108a60c330bc33cd29719445254310a6df3999f79b608e68be6c55ae52c5"
	},
	{
		"id": "f1f843095194",
		"ts": "2026-07-22T13:43:20.317Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1440499.65,
		"hash": "f1f8430951947a0de41dfacbcd83d3ca39c3f4c16ff65960c604ed3165f3726d"
	},
	{
		"id": "2bc538e3c13f",
		"ts": "2026-07-22T13:43:20.544Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5595663.76,
		"hash": "2bc538e3c13f80ebcfb19c6fbc07f91d14a540af66bda225f89c568ca82804c8"
	},
	{
		"id": "a275f08ada94",
		"ts": "2026-07-22T13:43:20.771Z",
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
		"liquidityUsd": 1346202.73,
		"hash": "a275f08ada94b23e8e37a6c8da2275212461fdb873b3c56fba580c215c0e86ff"
	},
	{
		"id": "3df4dbb75b3f",
		"ts": "2026-07-22T13:43:20.998Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2132634.98,
		"hash": "3df4dbb75b3fb3df4e512509043d882e2425dd3dc1c189bdedf93b7eba98e5a2"
	},
	{
		"id": "e1db6a4d8039",
		"ts": "2026-07-22T13:43:21.225Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 206404.64,
		"hash": "e1db6a4d80391659e88a4f100f45d2f4523a30bad4dc6a5950c3fb939dbb1f9d"
	},
	{
		"id": "3b360bac0db5",
		"ts": "2026-07-22T11:05:50.614Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111015355.14,
		"hash": "3b360bac0db51aa1881a5a4be363b6befa7f3af612937ae588f9c0d97af01219"
	},
	{
		"id": "a94f543fbe2e",
		"ts": "2026-07-22T11:05:51.011Z",
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
		"liquidityUsd": 16210419.47,
		"hash": "a94f543fbe2ec8a0c4be9f59edf003b540edb89a0739ed43b64ee2df8cebca5e"
	},
	{
		"id": "71f27b6e200b",
		"ts": "2026-07-22T11:05:51.359Z",
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
		"liquidityUsd": 852004.08,
		"hash": "71f27b6e200b941fce29a2c81c9accfa0f017c1cb83a5e8dfe4076287f1b268b"
	},
	{
		"id": "2cdfa7caa837",
		"ts": "2026-07-22T11:05:51.703Z",
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
		"liquidityUsd": 26173937.39,
		"hash": "2cdfa7caa837181111590bc48e7e46788298c28ce430bc1267605325ee04f2b6"
	},
	{
		"id": "43fd2f40c2b8",
		"ts": "2026-07-22T11:05:52.046Z",
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
		"liquidityUsd": 5301932.87,
		"hash": "43fd2f40c2b89e29c7a4bb805129b5acd39e2efc42adefddd5e15f5328f0f789"
	},
	{
		"id": "b2134de51c32",
		"ts": "2026-07-22T11:05:52.250Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991450.78,
		"hash": "b2134de51c323745058645b59f36ee71f36d9ed6294d40a63aa2d5d56837a24a"
	},
	{
		"id": "17738e599fa2",
		"ts": "2026-07-22T11:05:52.446Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26173937.39,
		"hash": "17738e599fa2e54fb9f144b0d221b33d73f375150dcca71a30eb350ce217251b"
	},
	{
		"id": "86338750d40f",
		"ts": "2026-07-22T11:05:52.653Z",
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
		"liquidityUsd": 2590018.89,
		"hash": "86338750d40f2a7756423dbe239367de8f54f7c130d6996fb7328e7868893b17"
	},
	{
		"id": "2a09fa89e729",
		"ts": "2026-07-22T11:05:52.849Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1467659.29,
		"hash": "2a09fa89e7291437415a94ad5b015cbc5624a72c488b29735adb0cfadc4d3965"
	},
	{
		"id": "134a862397cc",
		"ts": "2026-07-22T11:05:53.043Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 514167.64,
		"hash": "134a862397cc58aa6aa715c0bb8b2d80fbea0724483e7151792506359c8ffb6e"
	},
	{
		"id": "11c2da909625",
		"ts": "2026-07-22T11:05:53.233Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10055592.6,
		"hash": "11c2da909625b44652e792e83b6d063cc49527e1182fd4d72637e7851763f3b7"
	},
	{
		"id": "2b7e4e75cc05",
		"ts": "2026-07-22T11:05:53.430Z",
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
		"liquidityUsd": 1439396.56,
		"hash": "2b7e4e75cc05ad1ec7f08af129d97451cf720fe9afdc909e79adbf7868cc4d58"
	},
	{
		"id": "3b5263d1514c",
		"ts": "2026-07-22T11:05:53.615Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5622486.3,
		"hash": "3b5263d1514cb9d3a59bffe95f72b0c5e1c08a8c7f3398c650ae91f6f249d785"
	},
	{
		"id": "2b30dac902f0",
		"ts": "2026-07-22T11:05:53.813Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692509.95,
		"hash": "2b30dac902f0ee2cea6a9a4b1dbbdf637ccf5c2d2abc7b42af70889de716ce00"
	},
	{
		"id": "1f865bb868f8",
		"ts": "2026-07-22T11:05:54.009Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2112745.3,
		"hash": "1f865bb868f8299ee1e15825eaf3f8a22e049803854b1b51106a2ce9a382079e"
	},
	{
		"id": "af003de19519",
		"ts": "2026-07-22T11:05:54.197Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 211157.29,
		"hash": "af003de19519bbe04db2de89225a7e91bf8ff100da8e308b1a178c00d8d68c61"
	},
	{
		"id": "7a9891427a0d",
		"ts": "2026-07-22T11:05:54.397Z",
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
		"liquidityUsd": 587614.03,
		"hash": "7a9891427a0d23292727bd485f9dc732dd5c21ef25fc297f9154dc597e58afce"
	},
	{
		"id": "5747ab56f82c",
		"ts": "2026-07-22T08:22:25.047Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110579150.52,
		"hash": "5747ab56f82caa477c1bec3e4dffef6bef4bd9e2ac82eeb80191c8550a08cf46"
	},
	{
		"id": "7f88629f713a",
		"ts": "2026-07-22T08:22:25.420Z",
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
		"liquidityUsd": 15931281.34,
		"hash": "7f88629f713afc72845e638a35600148a835a61893c7481885baf7d92210736e"
	},
	{
		"id": "244caa2a82ac",
		"ts": "2026-07-22T08:22:25.626Z",
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
		"liquidityUsd": 852292.19,
		"hash": "244caa2a82ac4736f4c15c44b17855db5f17c360f2a9fb2676e51c3668741184"
	},
	{
		"id": "bd9fa0a1190f",
		"ts": "2026-07-22T08:22:25.825Z",
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
		"liquidityUsd": 26298454.25,
		"hash": "bd9fa0a1190f7b4484dea37286914cb4e6882797a4e1c312fbf1f7c99a8d0bec"
	},
	{
		"id": "148698750729",
		"ts": "2026-07-22T08:22:26.024Z",
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
		"liquidityUsd": 5264308.36,
		"hash": "148698750729b00cf3a3887258697180b4c02afa0c1c26e57620c720b759bdf2"
	},
	{
		"id": "ae0526db79d1",
		"ts": "2026-07-22T08:22:26.220Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991408.97,
		"hash": "ae0526db79d11f51522dca14ae399230bf7116c4decb6e3a08ad76ea9eec5aa3"
	},
	{
		"id": "f5d0e2fb4765",
		"ts": "2026-07-22T08:22:26.467Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26298454.25,
		"hash": "f5d0e2fb4765ac916b640ee802f32eb9bf0245a2dcacc617f68aad0d92fd1820"
	},
	{
		"id": "db11d37eef8f",
		"ts": "2026-07-22T08:22:26.685Z",
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
		"liquidityUsd": 2577591.72,
		"hash": "db11d37eef8f459654d347d05cb9743a62543a46fdcd9d1c872aa09c700a24f0"
	},
	{
		"id": "be23d9cab884",
		"ts": "2026-07-22T08:22:26.885Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1485761.42,
		"hash": "be23d9cab8843759b04bfb939d702335e765a245f565b544148801dba65aaf3f"
	},
	{
		"id": "5ecda0fa2a7c",
		"ts": "2026-07-22T08:22:27.084Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 508382.79,
		"hash": "5ecda0fa2a7c61ac1cc40f89cb03464b410776fc0868daad5e10781aac551fb5"
	},
	{
		"id": "9d0c8c1d919c",
		"ts": "2026-07-22T08:22:27.277Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9942575.64,
		"hash": "9d0c8c1d919cea3ee1a0d6cb1e22708781eeb9ac3cb9f9c52c26de6c0c1c8f39"
	},
	{
		"id": "eeccfa347971",
		"ts": "2026-07-22T08:22:27.485Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5627447.53,
		"hash": "eeccfa347971a14ecb5b4c6b9126ef196b6c6c2eca0a1837d28b31b2f878580c"
	},
	{
		"id": "cd60a7f2ed0e",
		"ts": "2026-07-22T08:22:27.686Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2082131.05,
		"hash": "cd60a7f2ed0e1177c3287157ad1f429c087f2b14ab0d15e45a89e7856e90151d"
	}
]
