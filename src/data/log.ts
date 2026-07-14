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
	"updatedAt": "2026-07-14T02:06:36.824Z",
	"tokensScored": 3127,
	"verdictsIssued": 3127,
	"safe": 2765,
	"risky": 269,
	"likelyRug": 93,
	"ticks": 197
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "94d8b8928d52",
		"ts": "2026-07-14T02:06:32.428Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107246203.54,
		"hash": "94d8b8928d5247cf45fb8738994ec6084d53e9d07c62ab6e96f6dbe8fd13b882"
	},
	{
		"id": "167d7350d2ae",
		"ts": "2026-07-14T02:06:32.871Z",
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
		"liquidityUsd": 15257991.02,
		"hash": "167d7350d2aeda6bb7e2306737965db6264f48bee2dcc1162e6a6eea3890fb68"
	},
	{
		"id": "877fd0fe2baf",
		"ts": "2026-07-14T02:06:33.327Z",
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
		"liquidityUsd": 1208911.52,
		"hash": "877fd0fe2baf4a55f0113360d67be8e03a8df1f670bf90e373e5ce5bd582deaf"
	},
	{
		"id": "173ce752cb44",
		"ts": "2026-07-14T02:06:33.567Z",
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
		"liquidityUsd": 29706355.86,
		"hash": "173ce752cb449060ccb6b58fb9b3800c013dfe4433172a58d68649c02c2315ea"
	},
	{
		"id": "e829b1411821",
		"ts": "2026-07-14T02:06:33.806Z",
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
		"liquidityUsd": 4363517.13,
		"hash": "e829b14118214d2f3c3056e061b49627b57f160961cd35d655aca5eee7667714"
	},
	{
		"id": "912558f69c59",
		"ts": "2026-07-14T02:06:34.047Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 954423.39,
		"hash": "912558f69c59285662fd5abb9b49950d6d1e191cb0c48990830458f76032389d"
	},
	{
		"id": "e9eefc846de5",
		"ts": "2026-07-14T02:06:34.289Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29706355.86,
		"hash": "e9eefc846de538de0d29166c065535c215ef1d781872213f71c79ded39554d74"
	},
	{
		"id": "cf82915d6509",
		"ts": "2026-07-14T02:06:34.540Z",
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
		"liquidityUsd": 2685404.65,
		"hash": "cf82915d6509a4a580af3b86a72353708a6ac825d97b5a9c44e57b29e43b458f"
	},
	{
		"id": "7dbd1db195f5",
		"ts": "2026-07-14T02:06:34.782Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4120539.38,
		"hash": "7dbd1db195f57e4a3c95e0ec18c3238fc073ff2e1b3fd172c1cbb6238aceed51"
	},
	{
		"id": "e791ed13cb18",
		"ts": "2026-07-14T02:06:35.017Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1498495.89,
		"hash": "e791ed13cb18bb55da7283038a0c5f3d25b597bdd9bb0437bd8a9372b1f54705"
	},
	{
		"id": "507c1e9c0ec3",
		"ts": "2026-07-14T02:06:35.252Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1828168.01,
		"hash": "507c1e9c0ec3036c5a4f523bc5e2ad3320ccc077f6e5f0975b4b243890089abc"
	},
	{
		"id": "c99e4a2cf987",
		"ts": "2026-07-14T02:06:35.477Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 489049,
		"hash": "c99e4a2cf987e3f4588f7cbe05d0ef947a811ce6d7718e0c9ce6e214ce8c8ee1"
	},
	{
		"id": "250f7392216f",
		"ts": "2026-07-14T02:06:35.696Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263632.42,
		"hash": "250f7392216f8ab5c409244c6e6a5f096944c4a8f041bda1668dbc5bbcd5e160"
	},
	{
		"id": "44d9936dd95c",
		"ts": "2026-07-14T02:06:35.922Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1992967.4,
		"hash": "44d9936dd95ced351dc99fb1e9b20a8ada064c347bda395143945bcf32bee3de"
	},
	{
		"id": "687c7349ed64",
		"ts": "2026-07-14T02:06:36.141Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 49034.03,
		"hash": "687c7349ed64e315f3c901266e91fa69a4f6e1c7f87cd87b56450afced49b688"
	},
	{
		"id": "af90f4e90911",
		"ts": "2026-07-14T02:06:36.374Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8516403.25,
		"hash": "af90f4e909111382586b59f4e05b28c97b92ef533520d51266cbf9fed7867c17"
	},
	{
		"id": "fc69109a650e",
		"ts": "2026-07-14T02:06:36.601Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1842271.82,
		"hash": "fc69109a650ea06abafa14d67a469a25fc99eba27c7d223fb7af54aeb996f327"
	},
	{
		"id": "11d66c804346",
		"ts": "2026-07-14T02:06:36.823Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 977668.81,
		"hash": "11d66c8043463b56729f9c153a0b573c1fdc0587de259c457442d84e91b6d11e"
	},
	{
		"id": "6c1ac3f7d596",
		"ts": "2026-07-13T23:51:29.191Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106679069.03,
		"hash": "6c1ac3f7d596aee288d4e28473b40f453137cc742712413fc790019747cea2fd"
	},
	{
		"id": "ea9da757ec21",
		"ts": "2026-07-13T23:51:29.646Z",
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
		"liquidityUsd": 13174959.99,
		"hash": "ea9da757ec21bfdb135063b68ad2d3b66c9d1b94f2713ab9999d5044c0b1f4f4"
	},
	{
		"id": "7d5ae0d44062",
		"ts": "2026-07-13T23:51:29.894Z",
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
		"liquidityUsd": 1204429.86,
		"hash": "7d5ae0d44062e7047528ca8db3985b6c54d2632dd86ab61753f8b81eca945626"
	},
	{
		"id": "f12a7af2078a",
		"ts": "2026-07-13T23:51:30.145Z",
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
		"liquidityUsd": 29624310.24,
		"hash": "f12a7af2078a4cefbf995b6f9ccabb598cc556a63e0f4ca9984b43d1f54cec8d"
	},
	{
		"id": "fde317f05b48",
		"ts": "2026-07-13T23:51:30.392Z",
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
		"liquidityUsd": 4336218.8,
		"hash": "fde317f05b48da3461841026a841de93e15ac707ea6e6e8abb415c6739b36e17"
	},
	{
		"id": "2eba37fb4764",
		"ts": "2026-07-13T23:51:30.639Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 954458.45,
		"hash": "2eba37fb476475acefb90f6714efdbb3141d6905e0c575992442772a530ad647"
	},
	{
		"id": "65c1d5038761",
		"ts": "2026-07-13T23:51:30.887Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29624310.24,
		"hash": "65c1d50387611673436aeeac92d0600b985962ad5238a136c7252be6284980fb"
	},
	{
		"id": "fcdb80ac3d46",
		"ts": "2026-07-13T23:51:33.005Z",
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
		"liquidityUsd": 2583257.45,
		"hash": "fcdb80ac3d465dd47de8ead8f4a5b98fd6c935d1a9c096a3a8dc0a606a2c31e9"
	},
	{
		"id": "512251207392",
		"ts": "2026-07-13T23:51:33.781Z",
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
		"liquidityUsd": 4027428.56,
		"hash": "5122512073923216f1a0857d782556aed73ec72a009413b365796ea634039a6f"
	},
	{
		"id": "469c4b597d68",
		"ts": "2026-07-13T23:51:34.028Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1490512.59,
		"hash": "469c4b597d68093ad1896715a9de55b7286e3e2abfb7bd61c4f1b2fdb7954eed"
	},
	{
		"id": "6f96e3d979b6",
		"ts": "2026-07-13T23:51:34.261Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1810891.17,
		"hash": "6f96e3d979b6b5f4dbad57ab5e886f71dd1cc188a9c86d1da1b65ad21d8c58cf"
	},
	{
		"id": "c450d4194d48",
		"ts": "2026-07-13T23:51:34.496Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1986672.48,
		"hash": "c450d4194d4885f9fa85fcef34bc2ebe4b7b43cddc2d2897eb6bcfecfa9bbf08"
	},
	{
		"id": "821c352bb4a8",
		"ts": "2026-07-13T23:51:34.728Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280507.68,
		"hash": "821c352bb4a84f5abf8d62c5b5ec55b6e9c29446b0e7cb1df893a6415eb0cef0"
	},
	{
		"id": "036c7df1dcff",
		"ts": "2026-07-13T23:51:34.968Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1901887.81,
		"hash": "036c7df1dcff2c70488adcaefe9ef960a82e7b85a57f2dd50b18dc43ff7a9091"
	},
	{
		"id": "d2af45bf0149",
		"ts": "2026-07-13T23:51:35.199Z",
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
		"liquidityUsd": 1066244.7,
		"hash": "d2af45bf01498ff2db2c04527945304dd58c3fe6ba251601a2e1fd286ee7e515"
	},
	{
		"id": "d12f782f258e",
		"ts": "2026-07-13T23:51:35.524Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 62242.18,
		"hash": "d12f782f258e6169ace44d592875a53ad7c720a1052d3f2ad5b75cd4d5486eb2"
	},
	{
		"id": "ae2ab2be86cb",
		"ts": "2026-07-13T22:53:15.790Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106412684.1,
		"hash": "ae2ab2be86cbaaa326a3dd27b1b671c2bf84a7e08113ea40ff7bce618237a49f"
	},
	{
		"id": "5b156e88e278",
		"ts": "2026-07-13T22:53:16.233Z",
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
		"liquidityUsd": 15309937.12,
		"hash": "5b156e88e27840fe92b423bf0ebecc4c40de0ac7392514e2c32cfe63d25660aa"
	},
	{
		"id": "1d5ff026dfc8",
		"ts": "2026-07-13T22:53:16.471Z",
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
		"liquidityUsd": 1193242.89,
		"hash": "1d5ff026dfc8ef2c37b31c3e98601b6d5c10007463a37246a30abfc4f052b68b"
	},
	{
		"id": "54c9d1576e8e",
		"ts": "2026-07-13T22:53:16.763Z",
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
		"liquidityUsd": 29618626.16,
		"hash": "54c9d1576e8ec9b9139b1de96fc9537b8ba044d13d857bb267822fd3deae6b64"
	},
	{
		"id": "31220bb51a9b",
		"ts": "2026-07-13T22:53:17.018Z",
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
		"liquidityUsd": 4322817.4,
		"hash": "31220bb51a9bbb700f6a2b1da7a1e6968d30681f16ffe5102532e6b43e113f31"
	},
	{
		"id": "6079d8a9526a",
		"ts": "2026-07-13T22:53:17.287Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 954458.45,
		"hash": "6079d8a9526a1ebde8354aa031885210ffd1104e5fdb8c1ac26b5bf20858194f"
	},
	{
		"id": "35ec06bfa5fd",
		"ts": "2026-07-13T22:53:17.522Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29618626.16,
		"hash": "35ec06bfa5fddc9571da6390e7f6292699d0a0b95f5f6a877f29c463919980cb"
	},
	{
		"id": "e88ce76bb772",
		"ts": "2026-07-13T22:53:17.758Z",
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
		"liquidityUsd": 2586779.42,
		"hash": "e88ce76bb7721a7a846e01933c2dc30c24cdebbd9f5ed31914bf45bce5ac9d14"
	},
	{
		"id": "d243e2dad401",
		"ts": "2026-07-13T22:53:17.996Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3995728.68,
		"hash": "d243e2dad401afc428506b809966f786f73ca957abbc3f9048b6321df6533dc4"
	},
	{
		"id": "fb9dbc2cb8a8",
		"ts": "2026-07-13T22:53:18.232Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1487934.86,
		"hash": "fb9dbc2cb8a86c037009f49b6354f810332a43a08a43d263c2c0149945d3a292"
	},
	{
		"id": "73676b748103",
		"ts": "2026-07-13T22:53:18.449Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1849334.3,
		"hash": "73676b74810395356ae7798b1a5822d4bac226a2f23ed24e3b8c7c483a04f5cc"
	},
	{
		"id": "dbadc1c07c5f",
		"ts": "2026-07-13T22:53:18.668Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1974144.44,
		"hash": "dbadc1c07c5f1558dd5ad9f3a1f146df2586784cf085eb016dcc5d27d8e7f87a"
	},
	{
		"id": "fd00d4e75287",
		"ts": "2026-07-13T22:53:18.887Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 289355.89,
		"hash": "fd00d4e7528767ea161e3fe32e5dcc573e7bdb6543526916bb952167b6661e18"
	},
	{
		"id": "99e87e855040",
		"ts": "2026-07-13T22:53:19.307Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1831067.85,
		"hash": "99e87e85504051ac88ce4d9e1fa1898b2afe7f293cc33c57b706357a75f7a6ec"
	},
	{
		"id": "bb75b9726b5c",
		"ts": "2026-07-13T22:53:19.524Z",
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
		"liquidityUsd": 1064679.35,
		"hash": "bb75b9726b5c1ce9eaec444a3fda5bfb9e4c492e33a7198b0b91bde837d7d9f2"
	},
	{
		"id": "0abea69ff4e9",
		"ts": "2026-07-13T22:53:19.742Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 504672.5,
		"hash": "0abea69ff4e9779fca2d2059028145256654984afd8f10ddc9dfd8814523039d"
	},
	{
		"id": "ce4a7e1eb220",
		"ts": "2026-07-13T21:53:17.753Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106266065.55,
		"hash": "ce4a7e1eb220cdba149451918716236440e7a98020307104fa1e384338deebc1"
	},
	{
		"id": "aa9b6db01eba",
		"ts": "2026-07-13T21:53:18.206Z",
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
		"liquidityUsd": 15021654.03,
		"hash": "aa9b6db01eba94d29cdd129c5ab447f2d36dc7681cf5cc2c3591405df9b9e3ed"
	},
	{
		"id": "d26f98381ec1",
		"ts": "2026-07-13T21:53:18.449Z",
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
		"liquidityUsd": 1176284.75,
		"hash": "d26f98381ec14b60ce053b57a79f7a8ae2dcf55a5dff52bc76fe0bc1f50e569e"
	},
	{
		"id": "b9a83ecd390b",
		"ts": "2026-07-13T21:53:18.697Z",
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
		"liquidityUsd": 29552113.46,
		"hash": "b9a83ecd390b828acb11a2a8d071d47791a1c976752f502da329a325d677ae14"
	},
	{
		"id": "42835cf970bb",
		"ts": "2026-07-13T21:53:18.948Z",
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
		"liquidityUsd": 4307895.29,
		"hash": "42835cf970bb75ba2a004090e83162957830ae2b437e8e24d717d0357230872a"
	},
	{
		"id": "d24853e415cb",
		"ts": "2026-07-13T21:53:19.189Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 958048.54,
		"hash": "d24853e415cbbccfb62e623e6d318d72fe575ef36cf50e63088c43522c0208bc"
	},
	{
		"id": "4034fb12a592",
		"ts": "2026-07-13T21:53:19.450Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29552113.64,
		"hash": "4034fb12a592cdbfddf4fa12f9fdb51a3ace23b0245eec0e33338a3ab2a8db16"
	},
	{
		"id": "96e4dca0d050",
		"ts": "2026-07-13T21:53:19.693Z",
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
		"liquidityUsd": 2573004.18,
		"hash": "96e4dca0d0502bb2417c60e6ba4c5a22f1ea3b3381b90325f9de885e451156af"
	},
	{
		"id": "1d83cd41ce54",
		"ts": "2026-07-13T21:53:19.942Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3964817.11,
		"hash": "1d83cd41ce54e9649a424092df09ae3754fee089ba5cbb8f022e322aa0a600aa"
	},
	{
		"id": "cdf91eac7fa3",
		"ts": "2026-07-13T21:53:20.191Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1502408.88,
		"hash": "cdf91eac7fa382f2069d4ac20d6364f12436a74155670f20fc394181d1d615c1"
	},
	{
		"id": "739b6495834f",
		"ts": "2026-07-13T21:53:20.419Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1840745.77,
		"hash": "739b6495834fb4b04eebe38bbbe51764d8d2de468904848a974236812a600584"
	},
	{
		"id": "3825ac183f7f",
		"ts": "2026-07-13T21:53:20.928Z",
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
		"liquidityUsd": 1972242.3,
		"hash": "3825ac183f7fdb61337ba23f16a0a98c3f53d40fff8455cb22273155de4dd52b"
	},
	{
		"id": "579500cbd61e",
		"ts": "2026-07-13T21:53:21.163Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1896914.21,
		"hash": "579500cbd61e5053a4a7c53fb6af88ae31babacfd001d3f4dbd34458fe0d4c74"
	},
	{
		"id": "f58e8672b216",
		"ts": "2026-07-13T21:53:21.395Z",
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
		"liquidityUsd": 1077731.76,
		"hash": "f58e8672b216ebd90267b0bb155a16af3ec6e7864b01538bc64f20ff4bbeee5a"
	},
	{
		"id": "f2547c7976e5",
		"ts": "2026-07-13T21:53:21.625Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 249818.52,
		"hash": "f2547c7976e5860ac2ee7692e2958f2f6510a442c3dd6442ddaa920d9e43dee0"
	},
	{
		"id": "1bae41d06582",
		"ts": "2026-07-13T21:53:21.866Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 503109.49,
		"hash": "1bae41d0658254e349a809ba0501893d19bee8cb723546cf0e5e041ab488f389"
	},
	{
		"id": "6f560b21f76f",
		"ts": "2026-07-13T20:11:44.290Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106762174.31,
		"hash": "6f560b21f76f66a4bc89246b0d4f6eb85449e4f8f6aab26eef819ad8645d4ecd"
	},
	{
		"id": "828f2ded1228",
		"ts": "2026-07-13T20:11:44.733Z",
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
		"liquidityUsd": 16250582.57,
		"hash": "828f2ded1228d94677a725db866ce7edcebe5c66e113984eb4d083805262ee01"
	},
	{
		"id": "5323841782ad",
		"ts": "2026-07-13T20:11:44.995Z",
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
		"liquidityUsd": 1190042.18,
		"hash": "5323841782ad80582e5672c6d14d75fa049221c733f4291d1959fa36b5aa0e89"
	},
	{
		"id": "c03e22f6c255",
		"ts": "2026-07-13T20:11:45.441Z",
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
		"liquidityUsd": 29720566.51,
		"hash": "c03e22f6c255d9ceb9ebf3b0f80d325046710eecd6b6a4c1987843b3c35fc67a"
	},
	{
		"id": "0178b9ae8b2c",
		"ts": "2026-07-13T20:11:45.879Z",
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
		"liquidityUsd": 4365670.81,
		"hash": "0178b9ae8b2c15ea71ec0def9efb3967838d2e68a7e1d6fa39f4731ad18efe14"
	},
	{
		"id": "0b3f38674329",
		"ts": "2026-07-13T20:11:46.118Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 950193.99,
		"hash": "0b3f38674329a005f7d851a702e2c0811c0ab641a9a8078d16d26dd5f28013a5"
	},
	{
		"id": "1055e45bfc23",
		"ts": "2026-07-13T20:11:46.358Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29720620.44,
		"hash": "1055e45bfc23344524f473f4cd6e15f274fa66fb8bb77769d97ec1fc3108c16a"
	},
	{
		"id": "e2d8050b698d",
		"ts": "2026-07-13T20:11:46.597Z",
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
		"liquidityUsd": 2579668.08,
		"hash": "e2d8050b698de63b7e8bf542cef1ae3135a7379e6c4011dec494eac0e4ab48ec"
	},
	{
		"id": "0d3c635c0ea2",
		"ts": "2026-07-13T20:11:46.833Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4033292.39,
		"hash": "0d3c635c0ea2c91a38c36c3155db56b550ffe337c67e2acb6f5707d56b9ad7f1"
	},
	{
		"id": "9a6c5002c4e9",
		"ts": "2026-07-13T20:11:47.295Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1547886.21,
		"hash": "9a6c5002c4e901e1a3d9327c35f6ba3e5cdb68eaa12e86f67356e5f48b7bdd5e"
	},
	{
		"id": "4cf4acb7c4ea",
		"ts": "2026-07-13T20:11:47.519Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1855733.59,
		"hash": "4cf4acb7c4ea6f9bb04482b6ab0999cb7927567c8e4e43be7544e43d6133c9d5"
	},
	{
		"id": "b7d64dea9335",
		"ts": "2026-07-13T20:11:47.747Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1976922.41,
		"hash": "b7d64dea9335fedb90caf297ec8dd76b8488ec657456f49c176c1cc9e57fb004"
	},
	{
		"id": "58b246a0b74b",
		"ts": "2026-07-13T20:11:47.972Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1868482.95,
		"hash": "58b246a0b74b030b7a250cb46baf19edabf08591a1f9f9c096bfe4962c540ee2"
	},
	{
		"id": "6dc2745203ef",
		"ts": "2026-07-13T20:11:48.198Z",
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
		"liquidityUsd": 1108525.17,
		"hash": "6dc2745203ef2ebff73e52d1f22ef7349baab402b46bda670f95acec6a3c1869"
	},
	{
		"id": "fcc693d0e010",
		"ts": "2026-07-13T20:11:48.427Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260247.09,
		"hash": "fcc693d0e0107ff848e048fad2be65cbe598e0924975b69abc33f485083770d9"
	},
	{
		"id": "348c4d67df48",
		"ts": "2026-07-13T20:11:48.653Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 507834.2,
		"hash": "348c4d67df4866941db43999f5365edcfd6e7bcd997ab9fb88c7088b36ef235f"
	},
	{
		"id": "b9df869b73ad",
		"ts": "2026-07-13T20:11:48.877Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8444070.23,
		"hash": "b9df869b73ad02f0a8f71c3ddcd3801a35a9195605dde8dfa93d5d795d5f6cac"
	},
	{
		"id": "d3ff93bcc85e",
		"ts": "2026-07-13T18:41:18.664Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106131355.99,
		"hash": "d3ff93bcc85e813988a1472586212818b6fb177f23f699fd14434f3c7661ce74"
	},
	{
		"id": "38d6377dfd4d",
		"ts": "2026-07-13T18:41:19.048Z",
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
		"liquidityUsd": 16469001.36,
		"hash": "38d6377dfd4d90a778d7a1cb9c4be681335d8f808b2cc069bf4cbf362b2c47ce"
	},
	{
		"id": "b1010938316a",
		"ts": "2026-07-13T18:41:19.259Z",
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
		"liquidityUsd": 1199286.14,
		"hash": "b1010938316a9a28f04a384cc3d37212e2e375a70e8f13268cd9f3ddce9e8eff"
	},
	{
		"id": "f24b7634712d",
		"ts": "2026-07-13T18:41:19.471Z",
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
		"liquidityUsd": 29721054.74,
		"hash": "f24b7634712d8a0935dedf4d282888e4060d11faac200823bc6b7e10b89c0b90"
	},
	{
		"id": "aaff7500aae8",
		"ts": "2026-07-13T18:41:19.703Z",
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
		"liquidityUsd": 4336913.19,
		"hash": "aaff7500aae8764cdfdbf8c56fc91d54fdf342327b04e76b9ac01cbad8cb3071"
	},
	{
		"id": "2dc10cb9c580",
		"ts": "2026-07-13T18:41:19.947Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 952143.87,
		"hash": "2dc10cb9c5803419b88ba769a8d8f25e44e9130950d94b8e219167bcaf125a22"
	},
	{
		"id": "f9c4ed90eb07",
		"ts": "2026-07-13T18:41:20.283Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29721054.74,
		"hash": "f9c4ed90eb07b222192effca32f401c6362b63eb826b9f404c031e7f076e2aad"
	},
	{
		"id": "92647ace1981",
		"ts": "2026-07-13T18:41:20.502Z",
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
		"liquidityUsd": 2562817.07,
		"hash": "92647ace19818ae81bfdfdd759fd8938639f3a2401803b8bc9769f7a019b2544"
	},
	{
		"id": "5441d8db1502",
		"ts": "2026-07-13T18:41:20.717Z",
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
		"liquidityUsd": 3956719.87,
		"hash": "5441d8db15028b9ac24191188b6080050c87bb3be3c2eebcb7c3141f1a107e73"
	},
	{
		"id": "8574193febd3",
		"ts": "2026-07-13T18:41:20.939Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1516952.73,
		"hash": "8574193febd3a0b69d7b7acb2ad802f9d18916b05527237fa3c11552e4cbcbed"
	},
	{
		"id": "35019eee6b76",
		"ts": "2026-07-13T18:41:21.138Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1841030.87,
		"hash": "35019eee6b76e34e5f0b73276f383b2c051f8d5306a91a7a40e62fb2efb563a1"
	},
	{
		"id": "e26acbb8ecd4",
		"ts": "2026-07-13T18:41:21.333Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1965077.59,
		"hash": "e26acbb8ecd4e6685dbb1225c1efc0342d51ca8b29d8d8bdef5ba6e0bfe1ba64"
	},
	{
		"id": "209a90834155",
		"ts": "2026-07-13T18:41:21.527Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1895609.81,
		"hash": "209a908341551f90ac4745ab5732bf1c2df96a19db65985fe0416da99707a205"
	},
	{
		"id": "eb4ddef13a32",
		"ts": "2026-07-13T18:41:21.722Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 503258.01,
		"hash": "eb4ddef13a32d454fc4459e5c15f6e5a4921ded193cad478abc1d0c902ae143e"
	},
	{
		"id": "1f8ecf7b4625",
		"ts": "2026-07-13T18:41:21.911Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 240901.19,
		"hash": "1f8ecf7b4625f7ca7afa79e5a548b9578742c9cb7ecdc2a8f1a216dd0e673111"
	},
	{
		"id": "97e07274663f",
		"ts": "2026-07-13T18:41:22.101Z",
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
		"liquidityUsd": 1157092.35,
		"hash": "97e07274663f421ad1b2ea0018366b3a71e1ce6399423a11f7cbe226ec9f3f22"
	},
	{
		"id": "c8ae7eb8a63b",
		"ts": "2026-07-13T18:41:22.293Z",
		"symbol": "SOSO",
		"token": "0x624e2e7fDc8903165F64891672267AB0FCB98831",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261441.96,
		"hash": "c8ae7eb8a63be54c309f378ee51f6a6273637dd814fc53617c16ba924820b7cd"
	},
	{
		"id": "54f324ee198a",
		"ts": "2026-07-13T16:29:02.464Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106864838.04,
		"hash": "54f324ee198ad66f9f30bd9139fab321d6b2cb4eabb7d3984e48b163906ae5d5"
	},
	{
		"id": "5b93984dbdc5",
		"ts": "2026-07-13T16:29:03.110Z",
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
		"liquidityUsd": 16961216.65,
		"hash": "5b93984dbdc5969a04536c2817ddae62aac8a8f63390a2395f87293fb4cfd466"
	},
	{
		"id": "6a518f56792a",
		"ts": "2026-07-13T16:29:03.487Z",
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
		"liquidityUsd": 1211865.71,
		"hash": "6a518f56792ae84973fa423e449ee020761f84f88347f0d5ba173b095d04fe86"
	},
	{
		"id": "317e53c896f7",
		"ts": "2026-07-13T16:29:03.916Z",
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
		"liquidityUsd": 29816702.73,
		"hash": "317e53c896f7e6d90c07b9cb6905f67966403d05532e99d868daed772b83e03a"
	},
	{
		"id": "a42412f96745",
		"ts": "2026-07-13T16:29:04.156Z",
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
		"liquidityUsd": 4390026.38,
		"hash": "a42412f96745c815fb2472d52d91b5a4bb5167992c87b79e27eeab6936653942"
	},
	{
		"id": "99f2bb31642c",
		"ts": "2026-07-13T16:29:04.432Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 967746.66,
		"hash": "99f2bb31642ce3c2cd47b8d3ece407b2d09edca7299a5ab6db1f2e856bbe4e33"
	},
	{
		"id": "8307e6267d2c",
		"ts": "2026-07-13T16:29:04.697Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29816702.73,
		"hash": "8307e6267d2cb7c96a929663c0b121e2bccbbf2b4f629746959cbcfb1c050ffb"
	},
	{
		"id": "41c82dea66f8",
		"ts": "2026-07-13T16:29:04.938Z",
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
		"liquidityUsd": 2535872.36,
		"hash": "41c82dea66f8e5982b190d047241229aa1b0d7acf4a1969fc4de9bcc8ec72799"
	},
	{
		"id": "e06343aefdf9",
		"ts": "2026-07-13T16:29:05.174Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3869398.52,
		"hash": "e06343aefdf91a10fb77b313646205898e798a2638e5b8556ff7d976292089f8"
	},
	{
		"id": "bc7be17a6a3c",
		"ts": "2026-07-13T16:29:05.418Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1552781.1,
		"hash": "bc7be17a6a3cb70d05d284cb8300f7506432ef439749f997f9b7aeb9bd724be3"
	},
	{
		"id": "78ef7be718c1",
		"ts": "2026-07-13T16:29:05.641Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1874855.81,
		"hash": "78ef7be718c1caeda960e40bd582e9d988efac7b49ecd7cc038ea6e512081305"
	},
	{
		"id": "bfee409e29eb",
		"ts": "2026-07-13T16:29:05.859Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2017547.25,
		"hash": "bfee409e29ebb194c31eddc67d53f071d4181b88ad9fda431615710187739c58"
	},
	{
		"id": "2ca2bdb381fe",
		"ts": "2026-07-13T16:29:06.082Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2007454.66,
		"hash": "2ca2bdb381fe6ad9d4ca65c269efeb0a2c4a15a1f4532db39d5f87963ee0d8f2"
	},
	{
		"id": "e63d60ee3099",
		"ts": "2026-07-13T16:29:06.305Z",
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
		"liquidityUsd": 1158971.21,
		"hash": "e63d60ee3099068fd2cc813f8a58daa131a11987285cd038f04fdb3205325d0e"
	},
	{
		"id": "0cac9d67abf9",
		"ts": "2026-07-13T16:29:06.529Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 268070.02,
		"hash": "0cac9d67abf971a6470ed48813acae7ca09bcb85ea060e2ecdb6c6a621b105f7"
	},
	{
		"id": "af4de4f01f31",
		"ts": "2026-07-13T16:29:06.750Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8469726.71,
		"hash": "af4de4f01f31e199d42f752f9299ed50f68fce04d8357e871e11a6813cf28b71"
	},
	{
		"id": "e3f8c0366153",
		"ts": "2026-07-13T13:20:33.616Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106084787.02,
		"hash": "e3f8c036615331ca1a3f54f9b8d373af96d48c10b17a962313ec19c9a35de957"
	},
	{
		"id": "e8bc2ed06b99",
		"ts": "2026-07-13T13:20:33.974Z",
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
		"liquidityUsd": 16726640.93,
		"hash": "e8bc2ed06b9996ba7a4ad952496a0fcdd3c9f77b454a1f1048aa8f9e7fb22f7c"
	},
	{
		"id": "e0618964a0e1",
		"ts": "2026-07-13T13:20:35.209Z",
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
		"liquidityUsd": 1257293.14,
		"hash": "e0618964a0e1a8c51e0b2f982fe50cac52be23814eae96bddd602bc013ca17ca"
	},
	{
		"id": "a0bed1b77b6a",
		"ts": "2026-07-13T13:20:35.405Z",
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
		"liquidityUsd": 29818426.65,
		"hash": "a0bed1b77b6a7685cbfd05f2c0fb2bcfc5ae2a5ad038342f2bce29277467adfd"
	},
	{
		"id": "a59b6cc03cbe",
		"ts": "2026-07-13T13:20:35.599Z",
		"symbol": "VIRTUAL",
		"token": "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
		"score": 41,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.18,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable"
		],
		"liquidityUsd": 4368750.54,
		"hash": "a59b6cc03cbe097b8897ea7cf61899a3caf40cfa70cf1cb66902fd4e2d308ef4"
	},
	{
		"id": "09e62469fd61",
		"ts": "2026-07-13T13:20:35.827Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 963427.69,
		"hash": "09e62469fd61882665f5e7a4dfa63ac6c51018db0d9407af94eec5574aa8a5a9"
	},
	{
		"id": "56afa8c373ce",
		"ts": "2026-07-13T13:20:36.025Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29818426.65,
		"hash": "56afa8c373ce0becd5776f15de3cebdfe8c7aa4406f264909ea2c659e6e986c1"
	},
	{
		"id": "645dc22a7ae4",
		"ts": "2026-07-13T13:20:36.219Z",
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
		"liquidityUsd": 2556701.68,
		"hash": "645dc22a7ae4a8e77290f824f18eaa5c26f72f6cc80c7eece9d009d19c82a1c9"
	},
	{
		"id": "3a39616e1bf7",
		"ts": "2026-07-13T13:20:36.410Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3999083.45,
		"hash": "3a39616e1bf7208bf3c2afb2849a3d86e7a1f6430efff84c5dcde3b1742f308e"
	},
	{
		"id": "ea27f22a1ffc",
		"ts": "2026-07-13T13:20:36.602Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1514232.16,
		"hash": "ea27f22a1ffc98d67211c96e3180b2b860e960738abe27e4684b4bbb7781b044"
	},
	{
		"id": "e7e80d326be2",
		"ts": "2026-07-13T13:20:36.787Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1850451.82,
		"hash": "e7e80d326be2f9adb5555aa3edeb7a66c6686b4611058beb9ab4da062a3cb9c2"
	},
	{
		"id": "73ce7cffb47c",
		"ts": "2026-07-13T13:20:36.969Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2005107.85,
		"hash": "73ce7cffb47c4f6aa32d3fd0aa8c95e9e6e7350e6372da835d4d5083eda40370"
	},
	{
		"id": "f989e1360d71",
		"ts": "2026-07-13T13:20:37.152Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8383988.37,
		"hash": "f989e1360d712d086a65ae25449c3812beaf87fce2e91f488afdb448527db320"
	},
	{
		"id": "f875e7afced6",
		"ts": "2026-07-13T13:20:37.337Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266331.2,
		"hash": "f875e7afced6a14160f9782fde5108e9e0e4f2c059dff9b268e313b3d054f10d"
	},
	{
		"id": "1d81f817d531",
		"ts": "2026-07-13T13:20:37.764Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4525867.89,
		"hash": "1d81f817d531c9c81fad11ba6a2639a79e116dc2a93e3946b678555e223c584d"
	},
	{
		"id": "89e63ce9c758",
		"ts": "2026-07-13T13:20:37.949Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 309315.24,
		"hash": "89e63ce9c7581877e98d0b68621928a154b838ce5921a7a594567776729ed4d6"
	},
	{
		"id": "37a370147184",
		"ts": "2026-07-13T10:21:55.466Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105959350.65,
		"hash": "37a3701471842914d59c1d7b0519907a2ca11df9aea87f102b9b39489e598a84"
	},
	{
		"id": "f334ac521928",
		"ts": "2026-07-13T10:21:55.811Z",
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
		"liquidityUsd": 16747952.83,
		"hash": "f334ac521928a9e33bc0c78d1a0c4af8d9258be11b44a448e048be26acf58d24"
	},
	{
		"id": "230f41cbe011",
		"ts": "2026-07-13T10:21:56.006Z",
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
		"liquidityUsd": 1271468,
		"hash": "230f41cbe011e1daf1888cba694615b3d9b618a6ae5ec340e45b1391453321f2"
	},
	{
		"id": "e994af8e6b23",
		"ts": "2026-07-13T10:21:56.904Z",
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
		"liquidityUsd": 30010132.08,
		"hash": "e994af8e6b2357053067e79f4c4b92b3e9379632cd72b412c3c2edcdd3644f80"
	},
	{
		"id": "7c83196af96c",
		"ts": "2026-07-13T10:21:57.094Z",
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
		"liquidityUsd": 4404496.44,
		"hash": "7c83196af96cd5f0db89306e05b0c9be7045ee6b0aa0c63f89c86792fd4ee5ec"
	},
	{
		"id": "94734617478e",
		"ts": "2026-07-13T10:21:57.329Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 977839.04,
		"hash": "94734617478e38551490b0d8280cb53f298bb4b866fd269c9ff437cd6e0b5e32"
	},
	{
		"id": "974a6bf8ecc5",
		"ts": "2026-07-13T10:21:57.517Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30010132.08,
		"hash": "974a6bf8ecc52ed358f62c26e021f574012d60307c87af2545231d85e335821d"
	},
	{
		"id": "2a4895ff5a86",
		"ts": "2026-07-13T10:21:57.722Z",
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
		"liquidityUsd": 2580450.79,
		"hash": "2a4895ff5a8647d20595fef9f2ab419dc3bff9219ea112f55071955128a7e0b6"
	},
	{
		"id": "f2f2608d5610",
		"ts": "2026-07-13T10:21:57.911Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1551454.86,
		"hash": "f2f2608d56108ee9170658b2dd27038091a1ea8242e5d35164cbbcbf5de8c5c1"
	},
	{
		"id": "a07c9148acbb",
		"ts": "2026-07-13T10:21:58.100Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1880382.79,
		"hash": "a07c9148acbbe844a4d6330c08c60b5e4810ffeee483a1f184a0d7a6fb2755ea"
	},
	{
		"id": "5037da69fabc",
		"ts": "2026-07-13T10:21:58.286Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2016402.21,
		"hash": "5037da69fabc0aacb48a18a0ddfeff2636b5dafd1fb04e0ffcdf5dc144666478"
	},
	{
		"id": "c5300224b66a",
		"ts": "2026-07-13T10:21:58.469Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4062396.3,
		"hash": "c5300224b66a892d9346f69f554faabd28e8ffb7e5ba8e2038de4fa937f10467"
	},
	{
		"id": "edbc24021932",
		"ts": "2026-07-13T10:21:58.696Z",
		"symbol": "Base",
		"token": "0x3Fa0587dE2DF913Ad4F0b5726a1434A4955fFb07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 385966.11,
		"hash": "edbc24021932b728c760a40c04c1b1a3cc83b2545cedf3f68d6a745c05e0f3c7"
	},
	{
		"id": "fffa781cb85d",
		"ts": "2026-07-13T10:21:58.877Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8406267.67,
		"hash": "fffa781cb85d171300aff9fd9a02f495cc15acc1442ddd569473eb43e2dbfc64"
	},
	{
		"id": "8e66c9973d72",
		"ts": "2026-07-13T10:21:59.068Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 275883.33,
		"hash": "8e66c9973d72c0c345fdfe0f79a84ed4eb817fdce5aac7053dcb4456fda8f50b"
	},
	{
		"id": "7c9a297553b6",
		"ts": "2026-07-13T10:21:59.251Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 396618.41,
		"hash": "7c9a297553b6d2d956ec04b7f94955da365aa90116af781c6b2c107d4c3ecc93"
	},
	{
		"id": "720965197076",
		"ts": "2026-07-13T06:13:10.294Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105532059.65,
		"hash": "7209651970766726d17066ba675d49315442499c87b154bfdcb7cc61fb576f1e"
	},
	{
		"id": "202ddb6bdb0e",
		"ts": "2026-07-13T06:13:10.689Z",
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
		"liquidityUsd": 17313497.49,
		"hash": "202ddb6bdb0efc9ea7b1bccc90c6f76e555930652edd2702c95f9020aab13e72"
	},
	{
		"id": "efa32edca95a",
		"ts": "2026-07-13T06:13:11.000Z",
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
		"liquidityUsd": 1267259.5,
		"hash": "efa32edca95a3de085306d80cd83a9cfc332677d52faa603ebad4f509e478cb2"
	},
	{
		"id": "f762cdd55186",
		"ts": "2026-07-13T06:13:11.216Z",
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
		"liquidityUsd": 30131604.83,
		"hash": "f762cdd55186ac46b6eb0726342ff3e62f57c0949772b89ea39dc7a444e4d824"
	},
	{
		"id": "a98880587226",
		"ts": "2026-07-13T06:13:11.517Z",
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
		"liquidityUsd": 4388997.91,
		"hash": "a988805872262a58b388fe46479505cfe58134a346e7b0991b6d7e3b6e227a1d"
	},
	{
		"id": "9dfb125fb8c7",
		"ts": "2026-07-13T06:13:11.789Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 977911.06,
		"hash": "9dfb125fb8c7e499d442e8d5c2f82c4147999c713eb872098a7fa38f859c0784"
	},
	{
		"id": "4271e4b3a950",
		"ts": "2026-07-13T06:13:12.190Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30131604.83,
		"hash": "4271e4b3a950c2f2d5b532fa325821eb91a57d0b4696be2e4bbcbe0af8f45d89"
	},
	{
		"id": "107c5bc2df6b",
		"ts": "2026-07-13T06:13:12.425Z",
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
		"liquidityUsd": 2422948.17,
		"hash": "107c5bc2df6b45ab6661a476fd610d2b5fdc9c91ce8fce534394f6de10794c55"
	},
	{
		"id": "a587ef342c03",
		"ts": "2026-07-13T06:13:12.628Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2011889.77,
		"hash": "a587ef342c0361560c279d66b0c113c73a2af2e2b9136d35196c157665b1c8a4"
	},
	{
		"id": "545408f244b9",
		"ts": "2026-07-13T06:13:12.919Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3770940.24,
		"hash": "545408f244b93732f274d902c94e754f9a6fec53e153555d8adfddac23db2669"
	},
	{
		"id": "cf720734f8bd",
		"ts": "2026-07-13T06:13:14.203Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1885478.61,
		"hash": "cf720734f8bd03a152f93fa31bc515c16dfc29d8370ffe44a8023a98d13ab720"
	},
	{
		"id": "b27e950dedec",
		"ts": "2026-07-13T06:13:14.417Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1616080.59,
		"hash": "b27e950dedec6e0c3bd75db6153a4b25318356882ed85f6a01a861627683374b"
	},
	{
		"id": "213119560f0e",
		"ts": "2026-07-13T06:13:14.604Z",
		"symbol": "Base",
		"token": "0x3Fa0587dE2DF913Ad4F0b5726a1434A4955fFb07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 432134.01,
		"hash": "213119560f0e457e5d2d50b9bd815626a5925c589e42741fe7a9d4cb35706b56"
	},
	{
		"id": "c432244fb66f",
		"ts": "2026-07-13T06:13:14.806Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8342284.44,
		"hash": "c432244fb66f876569ff7ffb5a8552384ecc1b9fd7b679c5db5b2a9786ab2370"
	},
	{
		"id": "b3b13252c410",
		"ts": "2026-07-13T06:13:14.999Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279604.73,
		"hash": "b3b13252c41017dca66dd9190a440e8575813f0de4b39d951bca8b9fcd93f466"
	},
	{
		"id": "98c2430bece6",
		"ts": "2026-07-13T06:13:15.195Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 324134.65,
		"hash": "98c2430bece67b00b0a2cd3ae71e044903ca8faa6b6e6fadfdf0bd35a8fc831f"
	},
	{
		"id": "2021d88dddca",
		"ts": "2026-07-13T02:26:55.220Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106061724.82,
		"hash": "2021d88dddca329b9dab729990d72570bc9bbe12da59a049445020e95bbcabe3"
	},
	{
		"id": "7927354970d7",
		"ts": "2026-07-13T02:26:55.432Z",
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
		"liquidityUsd": 17319443.4,
		"hash": "7927354970d7888564fbd533e6a5fd175f880d28bf4cf720f40de39cf739c594"
	},
	{
		"id": "fbebf991dbfe",
		"ts": "2026-07-13T02:26:55.825Z",
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
		"liquidityUsd": 1283185.96,
		"hash": "fbebf991dbfebb85ad2a23a32640b3eba5a42b109ae6da5cc8b7931874697c02"
	},
	{
		"id": "5868e380ed0f",
		"ts": "2026-07-13T02:26:56.021Z",
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
		"liquidityUsd": 30295399.9,
		"hash": "5868e380ed0f5885436f81e1c942506764896e7d7cfbcb76493bfbdc24ea3cfd"
	},
	{
		"id": "3c2ea64a4a05",
		"ts": "2026-07-13T02:26:56.209Z",
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
		"liquidityUsd": 4465227.06,
		"hash": "3c2ea64a4a055babe4dcdf4102e1c465fa9f7abbd94de849bfd238e56866980e"
	},
	{
		"id": "c5792738dc93",
		"ts": "2026-07-13T02:26:56.401Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 978196.02,
		"hash": "c5792738dc9319fdbd61168d3e440815afbc1cb3667058517190245bee7931ef"
	},
	{
		"id": "edfce1b604d2",
		"ts": "2026-07-13T02:26:56.605Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30295399.9,
		"hash": "edfce1b604d265f79422d37b6e6ec1187a602b311c4231f7afbef9f2176aed81"
	},
	{
		"id": "a9ea25d2ef35",
		"ts": "2026-07-13T02:26:56.819Z",
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
		"liquidityUsd": 2489924.86,
		"hash": "a9ea25d2ef35e5b8974846c092d9c9d1a774a7377dcaf4bd479e68602a046e98"
	},
	{
		"id": "d2052edd7795",
		"ts": "2026-07-13T02:26:57.004Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3590748.53,
		"hash": "d2052edd779577c13c05ff08852e9e6885b843527ebf5ab35cd41c04312d1b38"
	},
	{
		"id": "9fb9fc7b3625",
		"ts": "2026-07-13T02:26:57.197Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2075425.92,
		"hash": "9fb9fc7b362559603b2bcda3047fb22e42706aba60d2ec59546b866273af7c75"
	},
	{
		"id": "21933db19d46",
		"ts": "2026-07-13T02:26:57.398Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1913170.14,
		"hash": "21933db19d46e525bc8584bdc28e1248a42c9629a2e5e481eedb2f6a7adb8d6a"
	},
	{
		"id": "2953f6c9ca34",
		"ts": "2026-07-13T02:26:57.593Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1646934.4,
		"hash": "2953f6c9ca34eb973374aeeb653c46584c81513a1639c86705ab5a8f72f05e0f"
	},
	{
		"id": "3f3f09357501",
		"ts": "2026-07-13T02:26:57.764Z",
		"symbol": "Base",
		"token": "0x3Fa0587dE2DF913Ad4F0b5726a1434A4955fFb07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 424541.06,
		"hash": "3f3f0935750134f34dd139cd5707bd684f7d9cae716c36e6c1482f4c87c1f766"
	},
	{
		"id": "82b6fa984c6e",
		"ts": "2026-07-13T02:26:57.990Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 262959.13,
		"hash": "82b6fa984c6ed9ac6270b111eb80bb03bfd12c09d579506ed19fd97620cb68ab"
	},
	{
		"id": "2852482d00bf",
		"ts": "2026-07-13T02:26:58.215Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8436265.63,
		"hash": "2852482d00bfab60eeaa5d778fdae1df23df88c3b7957f68d95b09cffd957bd7"
	},
	{
		"id": "8c6d0de22fcd",
		"ts": "2026-07-13T02:26:58.427Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 308581.46,
		"hash": "8c6d0de22fcd6cd6a3cc8acea7fa3516eea94cc4834fc5008f31ebdf6f3529aa"
	},
	{
		"id": "b275e108d326",
		"ts": "2026-07-13T02:26:58.628Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 512477.93,
		"hash": "b275e108d326afd7470db068ba248bf9270bf42d78638fbf768fe6a48b84a7d3"
	},
	{
		"id": "03d5e413c5a5",
		"ts": "2026-07-12T23:50:19.588Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105987960.03,
		"hash": "03d5e413c5a5188b237ec9a38d1e1e5e952469f338ff69f74c69b00a635a48e0"
	},
	{
		"id": "6d7c50073500",
		"ts": "2026-07-12T23:50:20.052Z",
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
		"liquidityUsd": 17272721.58,
		"hash": "6d7c50073500b2a9991fdf10da1110cd51e2e5575084820a1a23cc75c692da20"
	},
	{
		"id": "53e17e664569",
		"ts": "2026-07-12T23:50:20.310Z",
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
		"liquidityUsd": 1297366,
		"hash": "53e17e664569714f42e3b620568f72fc792b8baff154f2bf1e6dad1c0c398ba0"
	},
	{
		"id": "a266479acb2d",
		"ts": "2026-07-12T23:50:20.566Z",
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
		"liquidityUsd": 30401749,
		"hash": "a266479acb2d28488201da9bed8158338c6ffdd0c0018d3f8673e994e27083d1"
	},
	{
		"id": "ffd423282f66",
		"ts": "2026-07-12T23:50:20.823Z",
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
		"liquidityUsd": 4502761.9,
		"hash": "ffd423282f66f86f4cfcb34bbc14d8fd10f9ee56129a5f222056da933f4d720c"
	},
	{
		"id": "61b23314487f",
		"ts": "2026-07-12T23:50:21.077Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 984973.08,
		"hash": "61b23314487f92f86f6b99624b131048997c3949a6b4454022b0db5002d55594"
	},
	{
		"id": "8a89534aeeee",
		"ts": "2026-07-12T23:50:21.330Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30401749,
		"hash": "8a89534aeeeec976c3624e631c8ed85aa5406b89eff2cefb0064f11c11a86e23"
	},
	{
		"id": "4b8a9494fdb0",
		"ts": "2026-07-12T23:50:21.589Z",
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
		"liquidityUsd": 2491574.87,
		"hash": "4b8a9494fdb032dd2ce5bf115952d416398a87e1f825b1f08f09f7dc127db43e"
	},
	{
		"id": "b36c79e274bf",
		"ts": "2026-07-12T23:50:21.845Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2102074.77,
		"hash": "b36c79e274bfc6befd04e3a0ef0ab3d4a33afe357fe322b2e09b8dcc390630fb"
	},
	{
		"id": "3611e3732735",
		"ts": "2026-07-12T23:50:22.099Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3377752.88,
		"hash": "3611e3732735b46131dd2b3c8f1aba373d01fd1976f07f77b4e129ef2dda3c1e"
	},
	{
		"id": "feea13c4aed7",
		"ts": "2026-07-12T23:50:22.337Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1947481.63,
		"hash": "feea13c4aed706c3d3d72436d921af7ffb9a184f3040f68a75b399958bcb9c30"
	},
	{
		"id": "3f5fefa34b07",
		"ts": "2026-07-12T23:50:22.798Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8424694.93,
		"hash": "3f5fefa34b07e2faca962455227ad846e5bdf964d4187287d9c0e48123924151"
	},
	{
		"id": "68f6d4b38dde",
		"ts": "2026-07-12T23:50:23.042Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 271861.91,
		"hash": "68f6d4b38dde65dffebc7ae8b18ebd54883eb7eb18c926b2790c1f8d003b29ad"
	},
	{
		"id": "b6d6ffe43df6",
		"ts": "2026-07-12T23:50:23.285Z",
		"symbol": "Base",
		"token": "0x3Fa0587dE2DF913Ad4F0b5726a1434A4955fFb07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 730376.62,
		"hash": "b6d6ffe43df656f13827edf00a8d4d21bd5a31974150a77e3ae1ce056721aacf"
	},
	{
		"id": "7776a88d5017",
		"ts": "2026-07-12T23:50:23.529Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 515385.48,
		"hash": "7776a88d5017ea002e619573ca88235b2af7b995be683d50ea65c4886fbe20ce"
	},
	{
		"id": "b34611e3a521",
		"ts": "2026-07-12T23:50:23.772Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 449265.89,
		"hash": "b34611e3a521c17df7cad45b93e13b05eca9029f10ac5b4c8cca49c3a75cc283"
	},
	{
		"id": "b28e9c487899",
		"ts": "2026-07-12T22:42:55.689Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105972715.2,
		"hash": "b28e9c4878997c08b48963840d63fcd10d5ca56cddc8b65c81b46ad2b6703722"
	},
	{
		"id": "628e7eb761e2",
		"ts": "2026-07-12T22:42:56.136Z",
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
		"liquidityUsd": 17041614.13,
		"hash": "628e7eb761e2b860cb415d41b525da1c059b3d556924802e23ebed5f690f5998"
	},
	{
		"id": "fb3448ad4d88",
		"ts": "2026-07-12T22:42:56.579Z",
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
		"liquidityUsd": 1297106.23,
		"hash": "fb3448ad4d883818bbc2a7a224090f1e69f1e8183ab23be2e6245172eb77a173"
	}
]
