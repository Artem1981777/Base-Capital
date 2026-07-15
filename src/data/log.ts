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
	"updatedAt": "2026-07-15T05:27:04.420Z",
	"tokensScored": 3379,
	"verdictsIssued": 3379,
	"safe": 2989,
	"risky": 283,
	"likelyRug": 107,
	"ticks": 211
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "4054d97ea967",
		"ts": "2026-07-15T05:27:00.270Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106210142.19,
		"hash": "4054d97ea967b67bcf6c783cffc85ff8242969350be6d6653003ae79d231339c"
	},
	{
		"id": "bfc729fd0fe6",
		"ts": "2026-07-15T05:27:00.513Z",
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
		"liquidityUsd": 16399843.77,
		"hash": "bfc729fd0fe65584b264b6a43c7f02fb92f99374b671b18f0ae5f0632906fc47"
	},
	{
		"id": "71600d491616",
		"ts": "2026-07-15T05:27:00.759Z",
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
		"liquidityUsd": 1198373.56,
		"hash": "71600d4916167c58b1b0cb9a6bef676125d32df2a0a590ce0039a21fb4ce9972"
	},
	{
		"id": "6235045300cc",
		"ts": "2026-07-15T05:27:01.205Z",
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
		"liquidityUsd": 30386528.57,
		"hash": "6235045300ccc2eb86246c78d328375a8c2ba56085f00ba30b2c8062aeefb00f"
	},
	{
		"id": "6b673bb41e39",
		"ts": "2026-07-15T05:27:01.442Z",
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
		"liquidityUsd": 4601289.51,
		"hash": "6b673bb41e397b2e8705ee6a94e5cc3d94a3ceef27d8b742147f2846e91ca001"
	},
	{
		"id": "3c99c9efa88b",
		"ts": "2026-07-15T05:27:01.691Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1007765,
		"hash": "3c99c9efa88b540f83029f65b4944d82c3494d44a83d146f6e84c7ff2929e0eb"
	},
	{
		"id": "d4e6f1e39116",
		"ts": "2026-07-15T05:27:01.922Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30386528.57,
		"hash": "d4e6f1e391163b3e6e86b72200ceb180a77cc3c71d786aacf8992577cfebb308"
	},
	{
		"id": "a217a77fa6c9",
		"ts": "2026-07-15T05:27:02.159Z",
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
		"liquidityUsd": 2799260.34,
		"hash": "a217a77fa6c9a0b2e4acb9ed2601e06c02985105f45e7de7bc857ab3210afadf"
	},
	{
		"id": "ec6889258aa3",
		"ts": "2026-07-15T05:27:02.397Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 446825.45,
		"hash": "ec6889258aa30b45d90214fd30f1431eecde67940d806a9da60ce2fc4b5fcf2a"
	},
	{
		"id": "be947f59a31d",
		"ts": "2026-07-15T05:27:02.634Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3766246.3,
		"hash": "be947f59a31d42985370aa7bb11c65f50ab05424c2dbc4880154fe9e22d51bed"
	},
	{
		"id": "9d7fa727064f",
		"ts": "2026-07-15T05:27:02.854Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 82932.64,
		"hash": "9d7fa727064f45de570fece0e8c6ecf2531bfe5d3d8d43b228cc4a828a0f4af2"
	},
	{
		"id": "b1b72f1d0f94",
		"ts": "2026-07-15T05:27:03.078Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 390772.03,
		"hash": "b1b72f1d0f94d01b1f8eb28c8c0292fe1f32d843f6d67ba052f7fbcd8f16a1b6"
	},
	{
		"id": "78414fa6ff21",
		"ts": "2026-07-15T05:27:03.295Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1437402.97,
		"hash": "78414fa6ff213ee7f91c93a0ad5b0246fdd709c129928bd6ad1777d6849fa9ba"
	},
	{
		"id": "584e4b64a441",
		"ts": "2026-07-15T05:27:03.514Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94321.41,
		"hash": "584e4b64a4412695678fb5ef7d76a7f6cfb62d22555fe920b2f55aa93b0260bd"
	},
	{
		"id": "67b25396a80a",
		"ts": "2026-07-15T05:27:03.739Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 108120.35,
		"hash": "67b25396a80ab71af75f86acc5a2f57e6424bcf9b5a4ee444e54ea4554c94a2c"
	},
	{
		"id": "61a0a01f5de3",
		"ts": "2026-07-15T05:27:03.955Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 524934.45,
		"hash": "61a0a01f5de3fc82fde2c64953a0081448b77d41b44fd2ff68cce452b817e2eb"
	},
	{
		"id": "f7311b23893b",
		"ts": "2026-07-15T05:27:04.174Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 590200.58,
		"hash": "f7311b23893b32dc4ec355f9a15e737ea50f273564522cb0e87eddd2a8d4d7db"
	},
	{
		"id": "e8ea3df420a6",
		"ts": "2026-07-15T05:27:04.419Z",
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
		"liquidityUsd": 1236826.52,
		"hash": "e8ea3df420a6608421c171d687ce34a714aa62c95a9ddc111cebe12faac95acb"
	},
	{
		"id": "d72220cf862f",
		"ts": "2026-07-15T02:54:11.046Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105369067.83,
		"hash": "d72220cf862ff632a30e9b4686ad941293b2f61bf2b0cef690e93efaaaaef436"
	},
	{
		"id": "bd6f9fade876",
		"ts": "2026-07-15T02:54:11.709Z",
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
		"liquidityUsd": 16901317.64,
		"hash": "bd6f9fade8763372bcdf9f80b63de5e1173f7942e50b3a77a9ce9ae459cf9c03"
	},
	{
		"id": "51a170858ddc",
		"ts": "2026-07-15T02:54:12.186Z",
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
		"liquidityUsd": 1199466.57,
		"hash": "51a170858ddc9d055a3ef3e9e688f642f151d22f62c1989b4c899b12b5f4d82a"
	},
	{
		"id": "c8fff0f7eb77",
		"ts": "2026-07-15T02:54:12.633Z",
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
		"liquidityUsd": 30220203.85,
		"hash": "c8fff0f7eb77093ea40f7beebfe5cd5ac06696ca52464dcb8a259cf8c9d42c2e"
	},
	{
		"id": "c1b97724a884",
		"ts": "2026-07-15T02:54:13.084Z",
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
		"liquidityUsd": 4586137.48,
		"hash": "c1b97724a8840dcf75eacbea765ce3c4ca1c48851ad66f09a81df1603b375058"
	},
	{
		"id": "cfc7f167f632",
		"ts": "2026-07-15T02:54:13.326Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1008122.45,
		"hash": "cfc7f167f6328b9b377b26d039c3d34c58b812e9515b145d5d5b5a33d9c268ff"
	},
	{
		"id": "16ab10e6726f",
		"ts": "2026-07-15T02:54:13.564Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30220203.85,
		"hash": "16ab10e6726f807b1c7235c978452421f93e231fdce55372455f9e92c1a59422"
	},
	{
		"id": "fd0b3d0940c4",
		"ts": "2026-07-15T02:54:14.075Z",
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
		"liquidityUsd": 2706332.41,
		"hash": "fd0b3d0940c484fb2c8b26d98eba6f42b92f8ff50559928f2bf8fdac1e663505"
	},
	{
		"id": "04a6d62218d3",
		"ts": "2026-07-15T02:54:14.313Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 417284.38,
		"hash": "04a6d62218d356b383cbfa1c63d3ebcb596062a35a3ef4f5a0ae46c8e4e57328"
	},
	{
		"id": "d4579659eb00",
		"ts": "2026-07-15T02:54:14.552Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3959414.86,
		"hash": "d4579659eb00a19c2cad7a00bec81486c7cdf8cd6fc69660cef4e9b8b3c1c145"
	},
	{
		"id": "1ec2820f516c",
		"ts": "2026-07-15T02:54:14.778Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 83071.33,
		"hash": "1ec2820f516c0fef3fdd809267013efd9c0b69ad4dac6cb3acb961eea76dc168"
	},
	{
		"id": "e8a1b6bc8415",
		"ts": "2026-07-15T02:54:15.004Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 389359.13,
		"hash": "e8a1b6bc8415c2e4ed4958005a878e21972452c9b629f86ef2fc5199d43a8d54"
	},
	{
		"id": "db6a12de205c",
		"ts": "2026-07-15T02:54:15.226Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 523603.35,
		"hash": "db6a12de205c8c7db69066b3b136c3ab57632697754a175b72d44764644bffc8"
	},
	{
		"id": "d0972d4e4d07",
		"ts": "2026-07-15T02:54:15.453Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1421909.49,
		"hash": "d0972d4e4d076ee2d152077d02c568faf2aafc0f5921b2e9785b9bd0d9ec2fdd"
	},
	{
		"id": "a2bdec3b61c5",
		"ts": "2026-07-15T02:54:15.676Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97389.92,
		"hash": "a2bdec3b61c50ff307a3a90e2c3fa580a165c50a46411ca19bf60a65b65261d8"
	},
	{
		"id": "4db7331c42b7",
		"ts": "2026-07-15T02:54:15.899Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 547192.41,
		"hash": "4db7331c42b7dd48fefc0bc288d03a8d7559cced25cfb83de2084bcad86b8199"
	},
	{
		"id": "c7a6ec5a4b72",
		"ts": "2026-07-15T02:54:16.123Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8657522.48,
		"hash": "c7a6ec5a4b7298eb17bc3c6e8fc7f5878db097f53daded5214719d2894fc1983"
	},
	{
		"id": "9ea7829dcf51",
		"ts": "2026-07-15T02:54:16.347Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1929233.34,
		"hash": "9ea7829dcf5139e0746bcaad8e12f1cf2d9620cdac0923f434a0f75debd72cf0"
	},
	{
		"id": "f4c647b7f52a",
		"ts": "2026-07-14T23:58:51.582Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106658133.72,
		"hash": "f4c647b7f52a2fb090f4ad92d5081b7125e1857c4abf632ab4b51f546262eb0c"
	},
	{
		"id": "735431d044a3",
		"ts": "2026-07-14T23:58:52.025Z",
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
		"liquidityUsd": 16250956.86,
		"hash": "735431d044a32e47e3273550c2da73285a309248d22ae8614252b5afdfaa6658"
	},
	{
		"id": "ac51eebfa86e",
		"ts": "2026-07-14T23:58:52.469Z",
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
		"liquidityUsd": 1223161.38,
		"hash": "ac51eebfa86e9b3ceec2b643f6ffbb06f78c57bc37f1dd262df05090326f45c2"
	},
	{
		"id": "e528f974be32",
		"ts": "2026-07-14T23:58:52.907Z",
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
		"liquidityUsd": 30195238.28,
		"hash": "e528f974be32c00191eca67a10dbffbebf675327b45d0798bdc45fc0563428b5"
	},
	{
		"id": "88432c054e4c",
		"ts": "2026-07-14T23:58:53.145Z",
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
		"liquidityUsd": 4649732.14,
		"hash": "88432c054e4c5039f4803a4a23191c29621913187dee73fb265704930969b7d7"
	},
	{
		"id": "e55f90ba5895",
		"ts": "2026-07-14T23:58:53.382Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1014680.82,
		"hash": "e55f90ba5895d272a31366e6bc6d1632137fc364888a9bcd7f63565760182993"
	},
	{
		"id": "8b298301e0d9",
		"ts": "2026-07-14T23:58:53.619Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30195238.28,
		"hash": "8b298301e0d94d9ee7921c455d50c715bcc33ed69a6ba76e4db32064287c1a27"
	},
	{
		"id": "620fb8af2b52",
		"ts": "2026-07-14T23:58:53.854Z",
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
		"liquidityUsd": 2837164.45,
		"hash": "620fb8af2b52a3f384576f46de647b56ffe78ccf3343705c145c54ce0d748f19"
	},
	{
		"id": "4d9cbbe73e0c",
		"ts": "2026-07-14T23:58:54.086Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 399545.32,
		"hash": "4d9cbbe73e0cc11971e8af2c7df92fe26b2524ab264413885f6d8ecf837deee7"
	},
	{
		"id": "9512e9f399b4",
		"ts": "2026-07-14T23:58:54.319Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3945182.61,
		"hash": "9512e9f399b4163900c3535e2609944aaf3e0fe2fe122a60aab6b450182a4575"
	},
	{
		"id": "6fe1d6c2bf31",
		"ts": "2026-07-14T23:58:54.541Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 423259.16,
		"hash": "6fe1d6c2bf3174253e2d77f97fd3494a9c01057a957e5882a2f27c8a4653a223"
	},
	{
		"id": "4b1b01906fe9",
		"ts": "2026-07-14T23:58:54.760Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1426243.31,
		"hash": "4b1b01906fe916890de36ae877d2f4045f36b4e0645cacac1ba1ade225b177b2"
	},
	{
		"id": "024b051a9e98",
		"ts": "2026-07-14T23:58:54.978Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 533294.7,
		"hash": "024b051a9e98b4a18e489755d3dcacaf1ddc21b311d06cc675190ad31ebb368a"
	},
	{
		"id": "6ebd3abe4a7f",
		"ts": "2026-07-14T23:58:55.197Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 72888.74,
		"hash": "6ebd3abe4a7f19609d90be3d2e16207ef7ef4695c6f3e8e93bbf622c0a7c93a9"
	},
	{
		"id": "ba9a91bf4c8e",
		"ts": "2026-07-14T23:58:55.419Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 131507,
		"hash": "ba9a91bf4c8ee011abff356239487c7e3acd47a792c1d807be901a852c066fd4"
	},
	{
		"id": "ff9bef19f975",
		"ts": "2026-07-14T23:58:55.638Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8915002.02,
		"hash": "ff9bef19f9758f0942a1546e25cc4c3dca32b3562780bf6cef96166288e3edae"
	},
	{
		"id": "1458feffc219",
		"ts": "2026-07-14T23:58:55.856Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 581336.29,
		"hash": "1458feffc219c72190e1711eec4455bf69cff38295be66616273d5b215548b5f"
	},
	{
		"id": "b26f124453ea",
		"ts": "2026-07-14T23:58:56.076Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1978690.52,
		"hash": "b26f124453eaf4dc3678980fdd4f530a58f67dd29711e92e6a104dc93a7de03d"
	},
	{
		"id": "2c26d0e80182",
		"ts": "2026-07-14T22:59:24.632Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106752138.58,
		"hash": "2c26d0e80182326ba04bd537af1f6a3cbcdc040af8d31198b46d176f48d9eb48"
	},
	{
		"id": "e0fa898d5def",
		"ts": "2026-07-14T22:59:25.138Z",
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
		"liquidityUsd": 14562050.37,
		"hash": "e0fa898d5defc44ed80012e30070e4127528c023fd8bd2036165d8a88b495efe"
	},
	{
		"id": "1f32d461705b",
		"ts": "2026-07-14T22:59:25.427Z",
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
		"liquidityUsd": 1221186.09,
		"hash": "1f32d461705b4276af34eb49467aa8330f055ca00d1452927feb20e062c14ad6"
	},
	{
		"id": "f64cb0dbd894",
		"ts": "2026-07-14T22:59:25.713Z",
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
		"liquidityUsd": 30179263.12,
		"hash": "f64cb0dbd89473f434f8bc3537e50416947fecd56525d7468ac9b6da539d1479"
	},
	{
		"id": "0752ef67ce49",
		"ts": "2026-07-14T22:59:26.001Z",
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
		"liquidityUsd": 4653578.75,
		"hash": "0752ef67ce4934626d07e3415f4d8b7640a04c5648e9771705f8914898593557"
	},
	{
		"id": "9e780383d948",
		"ts": "2026-07-14T22:59:26.283Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1008389.43,
		"hash": "9e780383d948ce6222940807a5b8c0ba67a31aaaecf63fe64bc452ae42d55f66"
	},
	{
		"id": "c3cc046deb3f",
		"ts": "2026-07-14T22:59:26.564Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30179263.12,
		"hash": "c3cc046deb3ff577a998f514a97738cfbc605642c4537b7fd95151958e6e2a87"
	},
	{
		"id": "70697d41fb92",
		"ts": "2026-07-14T22:59:26.848Z",
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
		"liquidityUsd": 2708228.28,
		"hash": "70697d41fb92c5c5369a0c169c1426cf67ae22971ee24065b212674b5a6252af"
	},
	{
		"id": "0ec91273ed15",
		"ts": "2026-07-14T22:59:27.131Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 401305.32,
		"hash": "0ec91273ed15b82b1c763bbf223bb35d95e99e0ade27b88f5e7ea8d26ea2fddd"
	},
	{
		"id": "09522630630f",
		"ts": "2026-07-14T22:59:27.413Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3964916.14,
		"hash": "09522630630f9872697afa73384a78615e0a9730b6eb2ba0f05b34e836d2930b"
	},
	{
		"id": "9eb887431d58",
		"ts": "2026-07-14T22:59:27.681Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 418608.53,
		"hash": "9eb887431d58438c34da454b59bcfbcfa33d92d02dc094dbd1b4cca3dd144b57"
	},
	{
		"id": "e9830e3ece94",
		"ts": "2026-07-14T22:59:27.948Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1397088.33,
		"hash": "e9830e3ece949b440bec4cd67cfd110b91ed038cdd035e9b5ed85da72f69fce6"
	},
	{
		"id": "54c2fc3f9a66",
		"ts": "2026-07-14T22:59:28.214Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 531460.63,
		"hash": "54c2fc3f9a667fe2c3e325a485774cb8752686711e8e52824f31ce9be38b8546"
	},
	{
		"id": "1dc81eeaac13",
		"ts": "2026-07-14T22:59:28.482Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8856831.32,
		"hash": "1dc81eeaac13407c5312f578a5ab82cd30c11f31563bcf82dd299a1dcd7b7f73"
	},
	{
		"id": "a27e320c77c9",
		"ts": "2026-07-14T22:59:28.748Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 107939.29,
		"hash": "a27e320c77c9bcda436c369b9ceea9303f839847609c832a42b4c40603465ec4"
	},
	{
		"id": "9f6b331b95fd",
		"ts": "2026-07-14T22:59:29.017Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 76421.7,
		"hash": "9f6b331b95fd12b58b09d819bf422cc57540be963ce86848885592b993a8a747"
	},
	{
		"id": "6290807f1a47",
		"ts": "2026-07-14T22:59:29.285Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 596290.08,
		"hash": "6290807f1a47dee5aee0e2186fc8a31ba43091dbb0aa43113006ef073a94dc37"
	},
	{
		"id": "30400d5f3caa",
		"ts": "2026-07-14T22:59:29.552Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1097287.62,
		"hash": "30400d5f3caa8fc38bca3153ddb01b20970c00d31acdf7b14dcf80faa76e1789"
	},
	{
		"id": "d32aaf01a66e",
		"ts": "2026-07-14T21:58:12.848Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106587677.73,
		"hash": "d32aaf01a66eb248e6d10cfe5ba04c6f38938199f396a6878e0337ea54a36f03"
	},
	{
		"id": "1c6a3f02de91",
		"ts": "2026-07-14T21:58:13.294Z",
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
		"liquidityUsd": 16550253.49,
		"hash": "1c6a3f02de917f78e73b92948147ddb5a647c4dc332d5c49fc8b8719badc95b9"
	},
	{
		"id": "224373403d71",
		"ts": "2026-07-14T21:58:13.537Z",
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
		"liquidityUsd": 1215591.17,
		"hash": "224373403d718bf0aa80f0cdeecc66ba7eea41a213e42b42d6c58239f7ba9430"
	},
	{
		"id": "acd334b739ec",
		"ts": "2026-07-14T21:58:13.779Z",
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
		"liquidityUsd": 30074775.94,
		"hash": "acd334b739ecbaf34d4fd2eabb72f230647434ba180ebddbc856bbd216d9b75b"
	},
	{
		"id": "4d862ad2a953",
		"ts": "2026-07-14T21:58:14.030Z",
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
		"liquidityUsd": 4611022.63,
		"hash": "4d862ad2a953553813b041542363f40ca67bd4a68c291433178410ddf715393d"
	},
	{
		"id": "af6510f1bcaf",
		"ts": "2026-07-14T21:58:14.600Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1008387.51,
		"hash": "af6510f1bcaf8340c8955f87cb38fd3887ec7bb1689ac71a592679a0796c80ea"
	},
	{
		"id": "dc210875002e",
		"ts": "2026-07-14T21:58:14.837Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30074775.07,
		"hash": "dc210875002e05b226a3614def4eed2828a9af5ad695fbee4b4088b3efd9634f"
	},
	{
		"id": "0999123c2936",
		"ts": "2026-07-14T21:58:15.611Z",
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
		"liquidityUsd": 2685007.46,
		"hash": "0999123c29360bc4dbb8fb6b4a236375fdb4f4ed5b0d1d604bdb70b1b086fe82"
	},
	{
		"id": "1aa787b74680",
		"ts": "2026-07-14T21:58:15.862Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 405802.16,
		"hash": "1aa787b74680a92e38796eb5d40b9b2ec18f92409946093a321efa9d4c56b8db"
	},
	{
		"id": "935e116f2f97",
		"ts": "2026-07-14T21:58:16.109Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3785859.01,
		"hash": "935e116f2f97b7ac4fa22c2e686471aaaec60acfbdfee912f89f6c293bba92dd"
	},
	{
		"id": "9aba5c784556",
		"ts": "2026-07-14T21:58:16.345Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 418766.03,
		"hash": "9aba5c7845564cb608bc88e459228933c8331ad149317e69b3a117065bb2c799"
	},
	{
		"id": "9ef1d3e798f3",
		"ts": "2026-07-14T21:58:16.578Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 528812.36,
		"hash": "9ef1d3e798f36d3a2c3cc462717b993a3f98807818a4fdac5660d4926ba272cb"
	},
	{
		"id": "8e7ac0bdcedd",
		"ts": "2026-07-14T21:58:16.804Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1350413.89,
		"hash": "8e7ac0bdcedd688a72f9f7318299b8bb8338bd82635eca30bf5b748c75c78494"
	},
	{
		"id": "e06613940afa",
		"ts": "2026-07-14T21:58:17.025Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8833687.98,
		"hash": "e06613940afa400d692bcebb07e991c5889ea8c25da1db95557c1112f29cd7d1"
	},
	{
		"id": "98460a37e351",
		"ts": "2026-07-14T21:58:17.258Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77437.04,
		"hash": "98460a37e351c2ad9d28bba26b91a85c08abb7e4deeec54c01b8f97f645a92fb"
	},
	{
		"id": "ec44d682b17f",
		"ts": "2026-07-14T21:58:17.481Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 576545.95,
		"hash": "ec44d682b17f8c2c4b258d2d25e1299aeb2271075f00f1eea70dc8bf5bb7582a"
	},
	{
		"id": "4266a4c95e0f",
		"ts": "2026-07-14T21:58:17.708Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 132647.35,
		"hash": "4266a4c95e0f1ca4a9483b9478c8e8ff7a0f6c8a6db5583af26f41b5d29f3930"
	},
	{
		"id": "c33c74f37b22",
		"ts": "2026-07-14T21:58:17.933Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1098332.31,
		"hash": "c33c74f37b224d952be0718d607e89511418fa5f2f1b5e2ee06677459b603fee"
	},
	{
		"id": "e4d659548d38",
		"ts": "2026-07-14T20:56:59.773Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106570072.04,
		"hash": "e4d659548d38fa8fb943026e5d2bfca4ba5f40a200e82eee710b29363bae1bf4"
	},
	{
		"id": "0d849c3043e9",
		"ts": "2026-07-14T20:57:00.252Z",
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
		"liquidityUsd": 16817853.32,
		"hash": "0d849c3043e9858e746087602243bbe34b3c03812c73b876af67dc8d67bce273"
	},
	{
		"id": "cdb686120c1b",
		"ts": "2026-07-14T20:57:00.691Z",
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
		"liquidityUsd": 1219887.01,
		"hash": "cdb686120c1b1f01e0072d05dfe49cda0a8f4473abaae5c863dfe1e4c5ed17b1"
	},
	{
		"id": "3b09b1baa5f7",
		"ts": "2026-07-14T20:57:00.955Z",
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
		"liquidityUsd": 30067026.97,
		"hash": "3b09b1baa5f77048db0ddf3dd2a5aff41cfe23020b9f58282ada62840ae2e2ef"
	},
	{
		"id": "cca61d050208",
		"ts": "2026-07-14T20:57:01.361Z",
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
		"liquidityUsd": 4609761.93,
		"hash": "cca61d0502083c9721aa051e60d7c46459408019847ee173a28803cc6f9c4489"
	},
	{
		"id": "880ed79d3b4b",
		"ts": "2026-07-14T20:57:01.611Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1007507.65,
		"hash": "880ed79d3b4baacfe8bccfa72b311cf35254164bb130357c3e906d082c164a21"
	},
	{
		"id": "0cabbcde8aa9",
		"ts": "2026-07-14T20:57:01.846Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30067026.97,
		"hash": "0cabbcde8aa955859b02950723676a18bb8f22ef46b78c4ca2e77f5e300014e7"
	},
	{
		"id": "bc579dc27a81",
		"ts": "2026-07-14T20:57:02.094Z",
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
		"liquidityUsd": 2692749.97,
		"hash": "bc579dc27a81bbbc4ea712414449c6bda9c1b1de34ae6dd72d1f69dfcff7d154"
	},
	{
		"id": "f827cd47ee1c",
		"ts": "2026-07-14T20:57:02.338Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 414022.82,
		"hash": "f827cd47ee1c7526ae7ddf52501f9e8dbf63101b560275f6bd4957bc8cd74beb"
	},
	{
		"id": "01b896ad7211",
		"ts": "2026-07-14T20:57:02.590Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3831922.88,
		"hash": "01b896ad7211c7e1b9edfcf246580472c7d9f0237121d23d7a694e0f163e9c12"
	},
	{
		"id": "310d7fd44a50",
		"ts": "2026-07-14T20:57:02.835Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 421484.11,
		"hash": "310d7fd44a507053e2b8e808e8826a2d750bc614d857791ae6877f5d0c721230"
	},
	{
		"id": "ab3fbc0b6e2b",
		"ts": "2026-07-14T20:57:03.494Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 530090.47,
		"hash": "ab3fbc0b6e2bf09f45f6fec1916658efa47a5714356af7aae5a67dc8bfa0243c"
	},
	{
		"id": "9fb588402b23",
		"ts": "2026-07-14T20:57:03.733Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1389497.66,
		"hash": "9fb588402b23d6bc9e5a2f06be42f6bd27deda8e14ed0116b93f3ee9aadf9f2e"
	},
	{
		"id": "de220bf7eed7",
		"ts": "2026-07-14T20:57:03.956Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8861292.93,
		"hash": "de220bf7eed79d61e090f9c232209fe6ca479df4601216625eb5866f7fa748a6"
	},
	{
		"id": "6842f17a07ba",
		"ts": "2026-07-14T20:57:04.181Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 581411.31,
		"hash": "6842f17a07ba1ad96285531849f726c96b3aadd36f27f24fb3595289330c6592"
	},
	{
		"id": "a2c01fa849d4",
		"ts": "2026-07-14T20:57:04.417Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 79327.54,
		"hash": "a2c01fa849d45f4866d42b4890a3c1dccf3dbbce3172bce8404c9d54cc791842"
	},
	{
		"id": "61f2dc1adc3e",
		"ts": "2026-07-14T20:57:04.639Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 64428.05,
		"hash": "61f2dc1adc3eceaf3058e4291e58fe4bf186189318ea95908579116acef7a5da"
	},
	{
		"id": "12b198b6298e",
		"ts": "2026-07-14T20:57:04.866Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1113486.53,
		"hash": "12b198b6298e301684f873664ffb07f5d4343a4d21eb189f6ef5033d74e1520b"
	},
	{
		"id": "a6fb3ab2f1de",
		"ts": "2026-07-14T19:13:52.309Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106391842.11,
		"hash": "a6fb3ab2f1dee763ca8d8a1cb078150af15efd656439906616d9be01bbe5ad56"
	},
	{
		"id": "9db926bab2da",
		"ts": "2026-07-14T19:13:52.572Z",
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
		"liquidityUsd": 14735430.57,
		"hash": "9db926bab2da1ff6e11382b6663fb636667bc3ab4801d6dde414708e7ca67a49"
	},
	{
		"id": "94a04ab7fb45",
		"ts": "2026-07-14T19:13:52.816Z",
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
		"liquidityUsd": 1221038.62,
		"hash": "94a04ab7fb45b5b938450a7e11c6ae4fdf1c57b1c25a39521b4fff3ff415dc25"
	},
	{
		"id": "ef706a0ba5e6",
		"ts": "2026-07-14T19:13:53.061Z",
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
		"liquidityUsd": 30139541.32,
		"hash": "ef706a0ba5e6dc15c1ba5d074d05a5bf12f459de58e873b693b7ff81de9897dd"
	},
	{
		"id": "396588fb735a",
		"ts": "2026-07-14T19:13:53.300Z",
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
		"liquidityUsd": 4619878.48,
		"hash": "396588fb735aea855802f38dcef6cf85a2c457c61c43ffde3de5ff2cd76f5a70"
	},
	{
		"id": "def3d59ad099",
		"ts": "2026-07-14T19:13:53.651Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1001754.93,
		"hash": "def3d59ad099c5ae7bb3dd5345e1b08261ce1d65d3797373365f2a71033e24c1"
	},
	{
		"id": "2ed50144f384",
		"ts": "2026-07-14T19:13:53.887Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30139541.32,
		"hash": "2ed50144f3848eebc99fb42f833211e54bd3b2a26415c552d639bbab191e47ad"
	},
	{
		"id": "1715401fc105",
		"ts": "2026-07-14T19:13:54.131Z",
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
		"liquidityUsd": 2692727.06,
		"hash": "1715401fc105a93107c1cf7bf6bb5580225db5f754cb0ad52730fe1e922da0d3"
	},
	{
		"id": "36d0519ea791",
		"ts": "2026-07-14T19:13:54.368Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 413731.93,
		"hash": "36d0519ea7916f0209515d1b22eb432c6a2039d7431bc56ff069863e68f506d5"
	},
	{
		"id": "e1fc34045154",
		"ts": "2026-07-14T19:13:54.611Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3796404.52,
		"hash": "e1fc34045154791fa08d06d3d94dbcc2ff2b243f4dc829c2bcef89946fe4d546"
	},
	{
		"id": "42d5772dfbc8",
		"ts": "2026-07-14T19:13:54.835Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 416231.81,
		"hash": "42d5772dfbc81de66e5be565f51052d60894985a71647f7da92c349693c9de64"
	},
	{
		"id": "88da6fdd9600",
		"ts": "2026-07-14T19:13:55.063Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 528059.15,
		"hash": "88da6fdd9600d2e10a06e54f76870f9a0860a74ea968d841addc1125938cb036"
	},
	{
		"id": "53ff8998b458",
		"ts": "2026-07-14T19:13:55.285Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1431973.72,
		"hash": "53ff8998b458737fa67254139dfee97121a7accd8cfd33d4bfa9b42c3fdf323a"
	},
	{
		"id": "a9915e304b84",
		"ts": "2026-07-14T19:13:55.514Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8891963.4,
		"hash": "a9915e304b84c005221757ccdc4b660fbcdc63b38c82f5082e8abca6dc3d37ea"
	},
	{
		"id": "d8bf5a061e27",
		"ts": "2026-07-14T19:13:55.743Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 62784.12,
		"hash": "d8bf5a061e270e5cbce2ff714603ddee0112f075dbf88648e4b89b2c297f9b0b"
	},
	{
		"id": "0b1cd1f76dad",
		"ts": "2026-07-14T19:13:55.975Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 559190.11,
		"hash": "0b1cd1f76dada499443a26a7a816c706ded6dfed161aa1a04bb644bf5c567e16"
	},
	{
		"id": "7f61e7c51edd",
		"ts": "2026-07-14T19:13:56.199Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 621400.33,
		"hash": "7f61e7c51edd7a14e0a9d9acbb1579db2bbe6a41c8dd91a72da3e770c76e80ec"
	},
	{
		"id": "ca9fa09294bd",
		"ts": "2026-07-14T19:13:56.429Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1952127.75,
		"hash": "ca9fa09294bdc20c7188b66d702d0d23a99dcf248afc6ba8618d9f995565b370"
	},
	{
		"id": "b5b3445180cd",
		"ts": "2026-07-14T17:11:39.092Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106318790.8,
		"hash": "b5b3445180cd14f384a13f45f8d7249c582ab2672237f4a4ced55f98112bd58a"
	},
	{
		"id": "a25bd83cfb60",
		"ts": "2026-07-14T17:11:39.346Z",
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
		"liquidityUsd": 15203292.99,
		"hash": "a25bd83cfb60872b880711cd06a0524e3c6b875d7632d3459bc41ef4e561603d"
	},
	{
		"id": "0235962bc26a",
		"ts": "2026-07-14T17:11:39.604Z",
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
		"liquidityUsd": 1226206,
		"hash": "0235962bc26a60219cecb32feb44644c11ba64563113b38c5d41794ce16c1d6d"
	},
	{
		"id": "d75f9f19731c",
		"ts": "2026-07-14T17:11:40.783Z",
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
		"liquidityUsd": 30199537.51,
		"hash": "d75f9f19731cc400cdaf1bd3a7987e2f7a423a0944cb81541e3e5f6b24230571"
	},
	{
		"id": "4a2f98e12a51",
		"ts": "2026-07-14T17:11:41.037Z",
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
		"liquidityUsd": 4549569.27,
		"hash": "4a2f98e12a51f5034010a365f489eda18d7130ba475dd2e07c0b28876b89eb4d"
	},
	{
		"id": "8a596e1595f1",
		"ts": "2026-07-14T17:11:41.284Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1001754.93,
		"hash": "8a596e1595f155f1840183a53b861a69991014b7cbe955887774cdf8e4208f10"
	},
	{
		"id": "424b43d4eeef",
		"ts": "2026-07-14T17:11:41.544Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30199537.51,
		"hash": "424b43d4eeef952e692503396bb5a69012d20b1db1632fc27a379b74421905f0"
	},
	{
		"id": "cde476910ef4",
		"ts": "2026-07-14T17:11:41.797Z",
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
		"liquidityUsd": 2682713.65,
		"hash": "cde476910ef48aea3a9a48b917ebc3a0601fad657caaca7ae0b369ed6b67b89c"
	},
	{
		"id": "8eaa1590772c",
		"ts": "2026-07-14T17:11:42.116Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 387836.82,
		"hash": "8eaa1590772c0379a594d21c3c527ff3e5dfd5d998a3dd15a91913fe3a00a72a"
	},
	{
		"id": "659f377632a3",
		"ts": "2026-07-14T17:11:42.372Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3693300.7,
		"hash": "659f377632a33f0088d55c593535bf4f696996141b26ed10faffe378dfbc57c2"
	},
	{
		"id": "2a2a272b1c34",
		"ts": "2026-07-14T17:11:42.857Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 414517.81,
		"hash": "2a2a272b1c34f96108ed8abfd3b192b961fbd2257f31e21ef0d33e4abd1f4e5f"
	},
	{
		"id": "a7127f1c1fff",
		"ts": "2026-07-14T17:11:43.089Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 524550.6,
		"hash": "a7127f1c1fff9d054af5dddf354cff09d785c6bcabf534f10cf5e2e3854d067d"
	},
	{
		"id": "1c0e386fc785",
		"ts": "2026-07-14T17:11:43.324Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1412800.36,
		"hash": "1c0e386fc785f3b8b40ad6986057b810d209c7fba53d21736ce34d7a6471a18c"
	},
	{
		"id": "a1958754689b",
		"ts": "2026-07-14T17:11:43.562Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8841639.46,
		"hash": "a1958754689b9ffd34f190413fca13245def5c0f4b93b6c2f42641b4ab06c223"
	},
	{
		"id": "a05c421423d9",
		"ts": "2026-07-14T17:11:43.795Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 62222.65,
		"hash": "a05c421423d94839cb1e8eb4ea2014bfade0e3e8ec4b2760f969618a2791feb8"
	},
	{
		"id": "fd0f40bdb7e9",
		"ts": "2026-07-14T17:11:44.034Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1943604.91,
		"hash": "fd0f40bdb7e9bc1665e96bb44c37a447936fe36427e022ea3186b1a6b1267af9"
	},
	{
		"id": "c412a41ff4dc",
		"ts": "2026-07-14T17:11:44.276Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 634551.47,
		"hash": "c412a41ff4dce24222b9f7e639cf291a61962ae7e5a40b4d6881fd8ce2eb785b"
	},
	{
		"id": "590773d35966",
		"ts": "2026-07-14T17:11:44.523Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 275835.77,
		"hash": "590773d35966d4173a88ffa0238c014b77439b71bc8f5a796e4ccddb5a644c09"
	},
	{
		"id": "2fd06ad3c49c",
		"ts": "2026-07-14T15:21:31.884Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107545729.46,
		"hash": "2fd06ad3c49c268f9e5fe023107cd816812e09a65c7021831fc84e0029923d26"
	},
	{
		"id": "1ec2382631d5",
		"ts": "2026-07-14T15:21:32.268Z",
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
		"liquidityUsd": 15249461.62,
		"hash": "1ec2382631d5133948e797c09dc2f6338c10212918d2fcdff4e301f99c12b752"
	},
	{
		"id": "226b3b401ce4",
		"ts": "2026-07-14T15:21:32.658Z",
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
		"liquidityUsd": 1230450.19,
		"hash": "226b3b401ce41d891f217ececf7989ec45979ca1d5bde8a3ac212f70b33342f3"
	},
	{
		"id": "7498a1e850e0",
		"ts": "2026-07-14T15:21:32.874Z",
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
		"liquidityUsd": 30539419.12,
		"hash": "7498a1e850e0697f2a2a6aa728b43419ed1e6ef7739a25070aa76632a5b73f30"
	},
	{
		"id": "6c7ff0a0fa0c",
		"ts": "2026-07-14T15:21:33.088Z",
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
		"liquidityUsd": 4597488.07,
		"hash": "6c7ff0a0fa0c76fb931a91a6726dbb91e545e79cbc5c43f9446de85df3263829"
	},
	{
		"id": "31a372937686",
		"ts": "2026-07-14T15:21:33.461Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1010428.01,
		"hash": "31a3729376866e4b1cf73723f6e3fcc4d1a9a502825c0b583fce716ae76e0e42"
	},
	{
		"id": "7cbf97e39815",
		"ts": "2026-07-14T15:21:33.671Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30539419.12,
		"hash": "7cbf97e39815d7e49e96ede3671961fa504942fc7944658de6da6c215c1838aa"
	},
	{
		"id": "611030c63164",
		"ts": "2026-07-14T15:21:33.894Z",
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
		"liquidityUsd": 2695515.23,
		"hash": "611030c6316421fe97ce92eeeacbbb5537d286026949b78df340898233b7ce72"
	},
	{
		"id": "8ec915458eb2",
		"ts": "2026-07-14T15:21:34.101Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3654529.21,
		"hash": "8ec915458eb2c0d71b0b377d8354550236d0c8f1dc91e50140c2d74c4c91b5df"
	},
	{
		"id": "371ea41453a7",
		"ts": "2026-07-14T15:21:34.308Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 389078.03,
		"hash": "371ea41453a72482a99797b0e9f5977355d83867b9b1c4b6c9eab47cfd9b13d1"
	},
	{
		"id": "6c17c0faeb51",
		"ts": "2026-07-14T15:21:34.505Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 410311.58,
		"hash": "6c17c0faeb5121ae08c659be2b9ca2e5fe0806e61478b35b0d2e9a8cc2e6e17c"
	},
	{
		"id": "7f5e6c261a8f",
		"ts": "2026-07-14T15:21:34.700Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1410819.68,
		"hash": "7f5e6c261a8f8b52e625a71da550c05734fe7b29cad46045592dc2b853461a94"
	},
	{
		"id": "d0f6bb29590f",
		"ts": "2026-07-14T15:21:34.956Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 510565.71,
		"hash": "d0f6bb29590f337f4fa5c9e72cff185ff43e72f5f30ea8cb2542e82e6d1ba4f0"
	},
	{
		"id": "47f008fbc75b",
		"ts": "2026-07-14T15:21:35.165Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8804471.6,
		"hash": "47f008fbc75b3fe0292b2ad8dbaf62a4bd6a4c94679c890fb5c74709e4b07b78"
	},
	{
		"id": "a27c42737a3b",
		"ts": "2026-07-14T15:21:35.364Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 288341.47,
		"hash": "a27c42737a3be2cbcf0144051175b4d34f0103a10fa54702d6e3c61035d4caba"
	},
	{
		"id": "1da82febdab3",
		"ts": "2026-07-14T15:21:35.557Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55493.59,
		"hash": "1da82febdab39805370df7376a0ed3f1f294ea7599f504cb25cdf55d6bdb7908"
	},
	{
		"id": "50c15d88816a",
		"ts": "2026-07-14T15:21:35.753Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1944471.2,
		"hash": "50c15d88816a6c4b80035acd0301070fc3a109030607ba93b8bd47783786d658"
	},
	{
		"id": "1060cb425a94",
		"ts": "2026-07-14T15:21:35.979Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 581704.09,
		"hash": "1060cb425a943fcb5768d6110226b76d663a094d92c3165e9e73e6cd2b4aa3cc"
	},
	{
		"id": "22599d4ab9d6",
		"ts": "2026-07-14T13:27:05.392Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108456604.1,
		"hash": "22599d4ab9d6368d0b9641b8956690cdc2bd665bb4247f773e07eb9d29f232e9"
	},
	{
		"id": "360bc0ddfb19",
		"ts": "2026-07-14T13:27:05.851Z",
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
		"liquidityUsd": 13706178.08,
		"hash": "360bc0ddfb19478e8befc88abded03886a98af67283fef3ff6a594e99a9fad36"
	},
	{
		"id": "8c8e741d9064",
		"ts": "2026-07-14T13:27:06.301Z",
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
		"liquidityUsd": 1237835.06,
		"hash": "8c8e741d9064f6fbe5775cbd5c9f8c1bea24ba54c229dc70b5b5b9541b214a07"
	},
	{
		"id": "a14fe2520e17",
		"ts": "2026-07-14T13:27:06.549Z",
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
		"liquidityUsd": 30602421.06,
		"hash": "a14fe2520e17fd6c7d7916c434cac0877984a42c54b41251acd0098d7029832b"
	},
	{
		"id": "2de08cb1381c",
		"ts": "2026-07-14T13:27:06.796Z",
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
		"liquidityUsd": 4542693.71,
		"hash": "2de08cb1381c14bfd4dcf36a8d79bd2e37ce86d69736907dc143ba517180e375"
	},
	{
		"id": "4c124c54dca9",
		"ts": "2026-07-14T13:27:07.038Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1002652.11,
		"hash": "4c124c54dca9f2da77efb69526dd31d6da1c68859337c5dc2caa0608aeeb9690"
	},
	{
		"id": "831297fc91d4",
		"ts": "2026-07-14T13:27:07.281Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30602421.24,
		"hash": "831297fc91d4937f46face977976e4e368913440c2a867977499a135058c9a55"
	},
	{
		"id": "d2570ca53a60",
		"ts": "2026-07-14T13:27:07.532Z",
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
		"liquidityUsd": 2697547.15,
		"hash": "d2570ca53a6093434722a32d8597d43a3765a855e5a55eb53daf2f0ad894c682"
	},
	{
		"id": "284527695fa7",
		"ts": "2026-07-14T13:27:07.991Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3601381.64,
		"hash": "284527695fa76ed34f3d5dc63efdfacee3e833bec83591bc59db407daeb0cb0b"
	},
	{
		"id": "abb190bcef82",
		"ts": "2026-07-14T13:27:08.233Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 612276.87,
		"hash": "abb190bcef8236c976e8f2ea36698ffa1b95452dadd41038370aa9c3f71fd5b5"
	},
	{
		"id": "d9de820a4259",
		"ts": "2026-07-14T13:27:08.468Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 394329.56,
		"hash": "d9de820a4259d4239fc3167a6a6b2e0ce25d93acf00068a079bee21d8be55242"
	},
	{
		"id": "fffcd34d1e7b",
		"ts": "2026-07-14T13:27:08.699Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8914699.94,
		"hash": "fffcd34d1e7b2f36a8c025c5d651c7e42f3470271e83b151e12683539f6c3b15"
	},
	{
		"id": "86543865985f",
		"ts": "2026-07-14T13:27:08.936Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 509031.95,
		"hash": "86543865985fce12e10c1a78c8d74366e7ed2a068687279261c4dde6c84f5bf3"
	},
	{
		"id": "9f595157d6ad",
		"ts": "2026-07-14T13:27:09.165Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59381.67,
		"hash": "9f595157d6ad7ca59ad829185f2a61576a351e091a589c630491cc6c3951ab23"
	},
	{
		"id": "ccb09d54383c",
		"ts": "2026-07-14T13:27:09.399Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 275407.26,
		"hash": "ccb09d54383c3ca8e613ae4beb0f785ab60fa8fec697fa5fbf2e015e8dde22a0"
	},
	{
		"id": "1c62c095c437",
		"ts": "2026-07-14T13:27:09.634Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1935269.95,
		"hash": "1c62c095c437333ccdca9afbcb09f85f8c65b5ba8b21c53d3e91569335caf405"
	},
	{
		"id": "d2feb1172217",
		"ts": "2026-07-14T13:27:09.866Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1432386.23,
		"hash": "d2feb1172217015c1671fadc4033319da6e5e57697e89973918f3e8ba07f05df"
	},
	{
		"id": "d73ab0f89557",
		"ts": "2026-07-14T13:27:10.097Z",
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
		"liquidityUsd": 1221068.76,
		"hash": "d73ab0f89557e0de0279975139da9c745b110755d10f1477904edcbcc817926c"
	},
	{
		"id": "8ea564c73988",
		"ts": "2026-07-14T11:37:48.791Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107831955.48,
		"hash": "8ea564c73988947922a9fd602466c66d085e4f02e904117b06070f3f762243dc"
	},
	{
		"id": "fd235e4c3dee",
		"ts": "2026-07-14T11:37:49.251Z",
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
		"liquidityUsd": 15247023.9,
		"hash": "fd235e4c3dee7656da9daa0ca90ca295fd74d92b6a84537e862a4b3904e38018"
	},
	{
		"id": "dccf5e448643",
		"ts": "2026-07-14T11:37:49.496Z",
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
		"liquidityUsd": 1207934.86,
		"hash": "dccf5e44864352f32364cd17098ea64999781f8ccd13f2c96398dad0644f1f61"
	},
	{
		"id": "9afdb93a7378",
		"ts": "2026-07-14T11:37:49.735Z",
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
		"liquidityUsd": 29826625.95,
		"hash": "9afdb93a737806bc338794ac73c704a78570fb7a70646c30443385ab631210d8"
	},
	{
		"id": "15c9ee1e8b00",
		"ts": "2026-07-14T11:37:49.976Z",
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
		"liquidityUsd": 4394218.31,
		"hash": "15c9ee1e8b00d728b11e7116911360210fd76b477c918032a51e5ecb93fde1ea"
	},
	{
		"id": "5774b2617f06",
		"ts": "2026-07-14T11:37:50.216Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 967278.84,
		"hash": "5774b2617f060b568be75cfed69725aa1f8e0eb2e42acfad226277a034e0d500"
	},
	{
		"id": "fb6ecda46476",
		"ts": "2026-07-14T11:37:50.452Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29826625.76,
		"hash": "fb6ecda46476626d068fc367e6d4340de24cd9fa87acab5b244762def06ad4d4"
	},
	{
		"id": "ff4e4cad6d34",
		"ts": "2026-07-14T11:37:50.693Z",
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
		"liquidityUsd": 2635784.11,
		"hash": "ff4e4cad6d34a371026e239e3700e76937790996e6e241903873770c259f1122"
	},
	{
		"id": "9126b926895a",
		"ts": "2026-07-14T11:37:50.934Z",
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
		"liquidityUsd": 3706161.47,
		"hash": "9126b926895a004520286d7341d0c0ca18541bd167533b5e2c73004e8f2b84ed"
	},
	{
		"id": "69b27ab2ccb4",
		"ts": "2026-07-14T11:37:51.174Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 887831.83,
		"hash": "69b27ab2ccb4ec25dfdb172f559fd1c65fae3317e25c138541d5eeb9efbab132"
	},
	{
		"id": "9fc00fcf2875",
		"ts": "2026-07-14T11:37:51.397Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 404842.49,
		"hash": "9fc00fcf2875b1adc0c8c28e98b016239f4efe4cfdd69015f48e32fdb4978509"
	},
	{
		"id": "3b703a7ea38f",
		"ts": "2026-07-14T11:37:51.621Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55768.88,
		"hash": "3b703a7ea38f4f927b33a3d7ebd3c65f28dd86d56329962b1a209bb94b709076"
	},
	{
		"id": "eb964893b4c7",
		"ts": "2026-07-14T11:37:51.843Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1850029.95,
		"hash": "eb964893b4c7b51818ca41f6a7fedab512f9b8746f8ce896ccf3c4d07784f978"
	},
	{
		"id": "c4cd57f9fc92",
		"ts": "2026-07-14T11:37:52.071Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266906.52,
		"hash": "c4cd57f9fc92cc2d7e7cb1c530181885a0bcb6be6517a3a6fc860b4a1bb61e28"
	},
	{
		"id": "20f360db7e88",
		"ts": "2026-07-14T11:37:52.292Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 481077.44,
		"hash": "20f360db7e887e88c710e24b3c22f5ce498d2852b5dfd5ecd467601ddf030843"
	},
	{
		"id": "0bd932b6bc73",
		"ts": "2026-07-14T11:37:52.515Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8610276.73,
		"hash": "0bd932b6bc73a85e8b5ea46c58bab7988edb76fefdb8a752d2e57b5a8e2d8ad3"
	},
	{
		"id": "3cd4c38e2634",
		"ts": "2026-07-14T11:37:52.741Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1443099.21,
		"hash": "3cd4c38e26344836358a10cee6ebb2d5ded38e808070c4bd26a088db37355943"
	},
	{
		"id": "b5eceacb5797",
		"ts": "2026-07-14T11:37:52.963Z",
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
		"liquidityUsd": 1189618.23,
		"hash": "b5eceacb579733bc4095473ba19e024cc4f8ce462be661fc4758ac8fb501ab8e"
	},
	{
		"id": "5b6a66572e3d",
		"ts": "2026-07-14T09:59:32.301Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107260517.07,
		"hash": "5b6a66572e3d8e9a8c8b923723c6589785da77be92e98bbc860774997606a530"
	},
	{
		"id": "fb00e726ed97",
		"ts": "2026-07-14T09:59:32.749Z",
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
		"liquidityUsd": 16216275.51,
		"hash": "fb00e726ed973a8a6d2cc26b22382a4f0d8afa4750b045a08a298c0adabab62a"
	}
]
