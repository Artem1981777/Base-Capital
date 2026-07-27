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
	"updatedAt": "2026-07-27T08:27:11.519Z",
	"tokensScored": 5870,
	"verdictsIssued": 5870,
	"safe": 5137,
	"risky": 461,
	"likelyRug": 272,
	"ticks": 357
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "0fb1f9f7963f",
		"ts": "2026-07-27T08:27:07.169Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112854549.46,
		"hash": "0fb1f9f7963f19131ee0dc027b82282bc258439356f008101f8e6119df1f8b5f"
	},
	{
		"id": "23aee9a10d7d",
		"ts": "2026-07-27T08:27:07.659Z",
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
		"liquidityUsd": 16032232.65,
		"hash": "23aee9a10d7da94c8ce92526b9096e31d416a8d027ba8be61cb1bc1dc966d37c"
	},
	{
		"id": "c6212fb48ede",
		"ts": "2026-07-27T08:27:07.957Z",
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
		"liquidityUsd": 1133100.55,
		"hash": "c6212fb48ede125c5ba2e996de22a9216a6554851b1e464418d5d1e278ea250b"
	},
	{
		"id": "f58568a4256f",
		"ts": "2026-07-27T08:27:08.231Z",
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
		"liquidityUsd": 25673911.21,
		"hash": "f58568a4256f7f40167d09bbeee716a6f5f4aa7ba083699b9f422344f1198238"
	},
	{
		"id": "40f84e9f4f77",
		"ts": "2026-07-27T08:27:08.481Z",
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
		"liquidityUsd": 5190968.23,
		"hash": "40f84e9f4f779fda5e7742239b17319c9d76b7a444979e914523bdda22e6bb62"
	},
	{
		"id": "e40102512ffa",
		"ts": "2026-07-27T08:27:08.732Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 993683.38,
		"hash": "e40102512ffa6ece8578ad1e97b43f5565b78eb7c164e9ca8f927b862f08039f"
	},
	{
		"id": "5f66ee614ed8",
		"ts": "2026-07-27T08:27:09.226Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25673911.18,
		"hash": "5f66ee614ed8afab6014c858061b3de77e4250ef5049eb205d450ae699409826"
	},
	{
		"id": "c9a637d75d23",
		"ts": "2026-07-27T08:27:09.456Z",
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
		"liquidityUsd": 2510794.66,
		"hash": "c9a637d75d231d18b12b0ac6e003e6ab039b44c9ef7447d506020845840ae8c3"
	},
	{
		"id": "605cb71e80d8",
		"ts": "2026-07-27T08:27:09.726Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 594347.99,
		"hash": "605cb71e80d84b0793f130ecf1c868e6bc3c9151d01a54b03df83cd9a32f1a9d"
	},
	{
		"id": "edd53f4a20bd",
		"ts": "2026-07-27T08:27:09.989Z",
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
		"liquidityUsd": 10557045.11,
		"hash": "edd53f4a20bddf56a265f348ea8c86c2d1240c6a5bd3fd9e5a5c7e6686785462"
	},
	{
		"id": "e3d15ab35f2f",
		"ts": "2026-07-27T08:27:10.204Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 275949.58,
		"hash": "e3d15ab35f2fb10b68b45fab68e5f79eb907df8cf4f95c96f3961eed1b0bd261"
	},
	{
		"id": "db53d962116a",
		"ts": "2026-07-27T08:27:10.425Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1817859.39,
		"hash": "db53d962116aa4209b22f41e321a0fa5bbb3c2d505c45fe91a7557dfdd2aed75"
	},
	{
		"id": "aa07d15d8299",
		"ts": "2026-07-27T08:27:10.641Z",
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
		"liquidityUsd": 2042784.74,
		"hash": "aa07d15d829985986de1d2f0eed22094ed092c22114f2efb6e42f226b07842b8"
	},
	{
		"id": "9c8edac55745",
		"ts": "2026-07-27T08:27:10.861Z",
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
		"liquidityUsd": 1414913.68,
		"hash": "9c8edac557459a1390e56591de000732882db6534d6651394786053e97a9940a"
	},
	{
		"id": "441f4817ffd2",
		"ts": "2026-07-27T08:27:11.077Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4784356.56,
		"hash": "441f4817ffd20a967a49eadbb6bcaebfc266303e78616d0968bb3fbe5c8f73c4"
	},
	{
		"id": "74038a64387a",
		"ts": "2026-07-27T08:27:11.299Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5966973.54,
		"hash": "74038a64387aee5fd41681c621f0e6e0ad074e366b7248e8043e56884f98953f"
	},
	{
		"id": "9e1dd68c8bbb",
		"ts": "2026-07-27T08:27:11.519Z",
		"symbol": "BEAN",
		"token": "0x5c72992b83E74c4D5200A8E8920fB946214a5A5D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 259901.54,
		"hash": "9e1dd68c8bbb29bcfb5eb30861a832bf2c19a79a83af45da84219b4f7e3cf7e5"
	},
	{
		"id": "5636e2e12bcc",
		"ts": "2026-07-27T04:33:45.877Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112499072.78,
		"hash": "5636e2e12bcc9a009a8ffc45115d8b542c0092e57297425c07014c357ce911a0"
	},
	{
		"id": "0aae382acb6b",
		"ts": "2026-07-27T04:33:46.363Z",
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
		"liquidityUsd": 18120885.16,
		"hash": "0aae382acb6b0846b57aaf3f2ca31ca7d23011003493952d6f97049add05273e"
	},
	{
		"id": "62dd9645246c",
		"ts": "2026-07-27T04:33:46.615Z",
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
		"liquidityUsd": 1126232.53,
		"hash": "62dd9645246ce31c25dfc2f9c54e6cfee2cf3c679ad6938bc1d35060b09dd281"
	},
	{
		"id": "72ce887edcac",
		"ts": "2026-07-27T04:33:46.877Z",
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
		"liquidityUsd": 25623014.07,
		"hash": "72ce887edcacd0ce8da5aff710b442e1603fc3583b802f45eaedd969b87d8eb6"
	},
	{
		"id": "ee9907ce8d9b",
		"ts": "2026-07-27T04:33:47.137Z",
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
		"liquidityUsd": 5196921.77,
		"hash": "ee9907ce8d9b1ce7f7f4142a93b20f758c852cf874bc2fe0a9c77dc5e2f9d15a"
	},
	{
		"id": "d86f7a279d38",
		"ts": "2026-07-27T04:33:47.390Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 990931.06,
		"hash": "d86f7a279d38fe36ff6588121cbfc1c04cd1b12f8c08e964bea1037248bc4893"
	},
	{
		"id": "624654c7da63",
		"ts": "2026-07-27T04:33:47.637Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25623014.07,
		"hash": "624654c7da6379764a3050120d0939c5402a50ca01fba48587eca72e849a4165"
	},
	{
		"id": "f8db9d8e1a09",
		"ts": "2026-07-27T04:33:47.907Z",
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
		"liquidityUsd": 2495611.98,
		"hash": "f8db9d8e1a09b0e4421c61bce4b14a6bea5efab84bf5a1100ffce36ffcfda260"
	},
	{
		"id": "31a7fdccc239",
		"ts": "2026-07-27T04:33:48.170Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 533703.06,
		"hash": "31a7fdccc2390736485ddce1d0b5c9cb53af26f4cdcc97777787979ea1e18da0"
	},
	{
		"id": "46e6c653c9ab",
		"ts": "2026-07-27T04:33:48.517Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1818301.59,
		"hash": "46e6c653c9ab6d51407d2846a04f176120d1f682cc1f38cde24176975d79e25f"
	},
	{
		"id": "5f735f360bf1",
		"ts": "2026-07-27T04:33:48.751Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272690.96,
		"hash": "5f735f360bf14b133fb1e70ec422a239ab0d19d216ca64869698d89ebab081a7"
	},
	{
		"id": "a443c62e9eae",
		"ts": "2026-07-27T04:33:48.984Z",
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
		"liquidityUsd": 1428534.52,
		"hash": "a443c62e9eae1ca350c5840b33baab82495a3e4b47b04a8c02746f7fcd12330a"
	},
	{
		"id": "ea6f32dbf280",
		"ts": "2026-07-27T04:33:49.215Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10513596.55,
		"hash": "ea6f32dbf280890f71e598449a10373b072f66c7fb302dba301fb8dde05c8c90"
	},
	{
		"id": "5370ae652715",
		"ts": "2026-07-27T04:33:49.448Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5924984.24,
		"hash": "5370ae652715075d3aa4f1dc764cadf74c325465652e60214a0297234ac50dc4"
	},
	{
		"id": "d7ba886aaba6",
		"ts": "2026-07-27T04:33:49.680Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4779246.52,
		"hash": "d7ba886aaba6911fde264c372a54aac7615b2afb859e51eead624787cffb82b7"
	},
	{
		"id": "959c8a8a81e5",
		"ts": "2026-07-27T04:33:49.918Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 368463.94,
		"hash": "959c8a8a81e5d60c4660fa97aac7009c10105935d97a30d68c14e960f66bf43d"
	},
	{
		"id": "9eb404fc7472",
		"ts": "2026-07-27T04:33:50.158Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2071475.86,
		"hash": "9eb404fc7472bdf63b0da8d157243ac30084286b5ec56fb96f8480c1df720e98"
	},
	{
		"id": "792899327972",
		"ts": "2026-07-27T00:02:09.914Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112439088.62,
		"hash": "792899327972e65df256a5456dab766b904f911f248a17f39edb7ec3e6e3ff72"
	},
	{
		"id": "95b293d8a70b",
		"ts": "2026-07-27T00:02:10.255Z",
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
		"liquidityUsd": 17752320.58,
		"hash": "95b293d8a70b7f635269450598a7dae2eb1449a251bddd6a02822c7899de7715"
	},
	{
		"id": "ed27adacd637",
		"ts": "2026-07-27T00:02:10.451Z",
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
		"liquidityUsd": 1119498.5,
		"hash": "ed27adacd6374242c0371f72fd4d195be181ff8ea287e7ea613812d65d555e18"
	},
	{
		"id": "3ada7c85ddf2",
		"ts": "2026-07-27T00:02:10.646Z",
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
		"liquidityUsd": 25409395.56,
		"hash": "3ada7c85ddf2ddbf01fd12fbe4f4ada4d34831b4ac916a3e9a67e93cb4f4829e"
	},
	{
		"id": "6a34c4a4ad80",
		"ts": "2026-07-27T00:02:10.837Z",
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
		"liquidityUsd": 5184590.32,
		"hash": "6a34c4a4ad80428a45bd2f61db0fc3a22704d51f0b17e3de1ccf01563b5e7129"
	},
	{
		"id": "aa683f5b7e93",
		"ts": "2026-07-27T00:02:11.038Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 994223.32,
		"hash": "aa683f5b7e9340e43961e8888b5005879543a42caa9c32d1a13a160bed73bf5f"
	},
	{
		"id": "73c0162ac728",
		"ts": "2026-07-27T00:02:11.241Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25409395.56,
		"hash": "73c0162ac728aee48756f6b1ebe6ebe17042fea4e0964472f032e850808df3da"
	},
	{
		"id": "15652d99d30c",
		"ts": "2026-07-27T00:02:11.452Z",
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
		"liquidityUsd": 2481387.6,
		"hash": "15652d99d30ce153fce5c1be2fd3208e8c6b5a9f1f0eab506bd6ff182cc46f26"
	},
	{
		"id": "840bcdfb2646",
		"ts": "2026-07-27T00:02:11.644Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1846547.3,
		"hash": "840bcdfb2646149364f04020571ca22ec448cba638cd42a0974aa3de4f2fd24f"
	},
	{
		"id": "bd20d711022f",
		"ts": "2026-07-27T00:02:11.850Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 447924.25,
		"hash": "bd20d711022fd5af781d5ad178b8cf75d30cdff1a330fbe0bb82c60ad2ace04a"
	},
	{
		"id": "214f45f7d9fc",
		"ts": "2026-07-27T00:02:12.036Z",
		"symbol": "OpenAI",
		"token": "0x1cB0f168A71F5319EaAE5E1765B4C76cfaD57b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 3180469.42,
		"hash": "214f45f7d9fc175fd084ce4ae34cee51041ca2f488ac9ab7d7de4b625491a1c3"
	},
	{
		"id": "7a412bacb4da",
		"ts": "2026-07-27T00:02:12.239Z",
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
		"liquidityUsd": 1381107.38,
		"hash": "7a412bacb4da2bebebffffdeb2c832b9170a8a53f1cfb2aa83c565f8cd513491"
	},
	{
		"id": "7cdb019786d2",
		"ts": "2026-07-27T00:02:12.425Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 274457.97,
		"hash": "7cdb019786d29d19d7f8f942f65edf94da2a9c4fa85c7ac572004250054a4483"
	},
	{
		"id": "300d8cbab4b3",
		"ts": "2026-07-27T00:02:12.628Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1116989.37,
		"hash": "300d8cbab4b3a549fa0dca4a5372cb795106c5db7ee70cda1329889cd0fec1f6"
	},
	{
		"id": "b2ff16476b28",
		"ts": "2026-07-27T00:02:12.835Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10468155.9,
		"hash": "b2ff16476b28c37c98f1cec3c9be2b45ae0186b3b82975647a8760c087bfd7b2"
	},
	{
		"id": "88c4794c3a0a",
		"ts": "2026-07-27T00:02:13.034Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4775525.5,
		"hash": "88c4794c3a0a234065b8fa38ae47d1ff5f2a458f8c735c3d381d94c0578a6242"
	},
	{
		"id": "5e2739789863",
		"ts": "2026-07-27T00:02:13.235Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6112933.44,
		"hash": "5e273978986379ef4f9a0b0e3434af692fbbb3407cd70b16a532a2cc636a8eb0"
	},
	{
		"id": "e11ab593576e",
		"ts": "2026-07-26T22:57:22.207Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112350520.83,
		"hash": "e11ab593576e72d046e0dfe825dc92d0bcdf27508188ab88271ab4b8ed353aab"
	},
	{
		"id": "816e06f97c8d",
		"ts": "2026-07-26T22:57:22.648Z",
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
		"liquidityUsd": 15102207.37,
		"hash": "816e06f97c8d3886ebc5912c47613b83e38bd9d06456b73e1eaefa3159ec9d65"
	},
	{
		"id": "b48461066ead",
		"ts": "2026-07-26T22:57:23.092Z",
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
		"liquidityUsd": 1120390.68,
		"hash": "b48461066ead66e3dcd6402eb233abc33d95ffad031d2d9cd7c9fbd1b52f4afb"
	},
	{
		"id": "444cef4a5a46",
		"ts": "2026-07-26T22:57:23.342Z",
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
		"liquidityUsd": 25243814.22,
		"hash": "444cef4a5a46610b7533c1a765663e6c4369da3d6518c87ead597c5b52dd2e94"
	},
	{
		"id": "848a822dfa52",
		"ts": "2026-07-26T22:57:23.585Z",
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
		"liquidityUsd": 5162788.43,
		"hash": "848a822dfa5238a4cc6629dca1ea5c73f0945c5cdebed2702989c71868a78fe1"
	},
	{
		"id": "bab997bd51a3",
		"ts": "2026-07-26T22:57:23.825Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 982020.84,
		"hash": "bab997bd51a3cee99db6a050627813f82a9d3161afe10655af19800c331aca5e"
	},
	{
		"id": "aee672bd4d40",
		"ts": "2026-07-26T22:57:24.087Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25243814.22,
		"hash": "aee672bd4d40a1ad7177b3e9746f02a2335e66d92dcd19929ed6e8163d63da1c"
	},
	{
		"id": "ee1d2c2fce34",
		"ts": "2026-07-26T22:57:24.327Z",
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
		"liquidityUsd": 2468142.6,
		"hash": "ee1d2c2fce341b43dc7e1631a68410bc3841757486748ce0e1da7d72e4876cc3"
	},
	{
		"id": "85ea81bad1ed",
		"ts": "2026-07-26T22:57:24.571Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1824905.85,
		"hash": "85ea81bad1ed7c6081bc183ad9e64075c4cbbf012edd64444c99bf8257a70c15"
	},
	{
		"id": "25f7d09cc9b9",
		"ts": "2026-07-26T22:57:24.815Z",
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
		"liquidityUsd": 1381107.38,
		"hash": "25f7d09cc9b915f1289955044ef1a1bf86070d8c92c433024ed38611907b6050"
	},
	{
		"id": "51caede181cc",
		"ts": "2026-07-26T22:57:25.042Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 433673.3,
		"hash": "51caede181cc243c0a5a48c426aaabbfae12ee04776e1695f5360c1ec153a57a"
	},
	{
		"id": "bc2143467979",
		"ts": "2026-07-26T22:57:25.266Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261854.91,
		"hash": "bc2143467979116f7987d6bc5b2d1f35d901db9483aaf83901ed449ed0478826"
	},
	{
		"id": "0be7c146a1f2",
		"ts": "2026-07-26T22:57:25.490Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1113022.7,
		"hash": "0be7c146a1f25336069a08f769578a539d94e849d5e1ab250a9bcfbdf015c1d3"
	},
	{
		"id": "254d4c973033",
		"ts": "2026-07-26T22:57:25.716Z",
		"symbol": "OpenAI",
		"token": "0x1cB0f168A71F5319EaAE5E1765B4C76cfaD57b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 3182378.66,
		"hash": "254d4c97303314c04b47773dff3aa9ae0ba3d527c2d8cb48eec4ad15ae06a6ee"
	},
	{
		"id": "90946c21304d",
		"ts": "2026-07-26T22:57:25.941Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10475493.94,
		"hash": "90946c21304daf960700b25186b489968d80261b6aabc72452956a6714872fa6"
	},
	{
		"id": "d87cc0e84654",
		"ts": "2026-07-26T22:57:26.302Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6107545.34,
		"hash": "d87cc0e84654f5ff1e8f42195ea469f27cba93c934e4e8f937184985f81f9667"
	},
	{
		"id": "636ac8913696",
		"ts": "2026-07-26T22:57:26.553Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4761671.92,
		"hash": "636ac8913696e3dbc56afa37bb7fc39b16a8e6b4b1f75f9fb0d3b9ab1d7e678d"
	},
	{
		"id": "3f41470308ab",
		"ts": "2026-07-26T21:55:53.032Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111826417.82,
		"hash": "3f41470308abbc3f09c2e39c84a7e5312d42a4a890f3d6f516bf40697029f386"
	},
	{
		"id": "967bacf46565",
		"ts": "2026-07-26T21:55:53.379Z",
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
		"liquidityUsd": 15958692.82,
		"hash": "967bacf46565b57c51389760d9afe88d2443bad2503dc548034b26d9a23d992f"
	},
	{
		"id": "7865ce56fc14",
		"ts": "2026-07-26T21:55:53.577Z",
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
		"liquidityUsd": 1109948.68,
		"hash": "7865ce56fc14b514b222b80decaef4b44524adff10c6ece40ee9b667ac9d7581"
	},
	{
		"id": "2e83dd1d90e5",
		"ts": "2026-07-26T21:55:53.779Z",
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
		"liquidityUsd": 24978438.13,
		"hash": "2e83dd1d90e577796041abe06c523ecfcc6445c4837e053a2ca06751f4fbcf68"
	},
	{
		"id": "e460c286a3c1",
		"ts": "2026-07-26T21:55:53.980Z",
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
		"liquidityUsd": 5069838.83,
		"hash": "e460c286a3c16db3b2d13c9a5d93384047f2f3766ff901479aab74024e03254b"
	},
	{
		"id": "105bdbd104fc",
		"ts": "2026-07-26T21:55:54.198Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 980491.45,
		"hash": "105bdbd104fc6989caa048040164aef989899fffe62a3d13f3cc31c9e33c000e"
	},
	{
		"id": "400141cda48a",
		"ts": "2026-07-26T21:55:54.391Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24978438.13,
		"hash": "400141cda48aba177d888568df90634c6301d90737e665553fed71e389e35d89"
	},
	{
		"id": "d0b3748d83e7",
		"ts": "2026-07-26T21:55:54.599Z",
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
		"liquidityUsd": 2445649.87,
		"hash": "d0b3748d83e74f05f90f193aaf30f8c61eaea0a89ad8c4358435d38d28a9e389"
	},
	{
		"id": "879cab1bfdd6",
		"ts": "2026-07-26T21:55:54.793Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1803950.01,
		"hash": "879cab1bfdd6d72bc2b4dda522086f2da7217a78eda456b3b1e31a409d4bfbcf"
	},
	{
		"id": "514acef00c21",
		"ts": "2026-07-26T21:55:55.067Z",
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
		"liquidityUsd": 1369869.33,
		"hash": "514acef00c21b6723fd4c40375ea128b287b130ae03384dd272bedcd96b2b63d"
	},
	{
		"id": "a6cae39abda3",
		"ts": "2026-07-26T21:55:55.274Z",
		"symbol": "OTHQ",
		"token": "0x0b2558bdBC7FFEC0f327fB3579c23daBD1699706",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 448449.61,
		"hash": "a6cae39abda38ab29efbcc662e7fcdf4ffc949b31080a720854f3845bcef4474"
	},
	{
		"id": "6e3daefa851d",
		"ts": "2026-07-26T21:55:55.464Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261486.36,
		"hash": "6e3daefa851d1013f3c8833e74ab11a188b6e5dbf83120e7920ec05a41ec84f0"
	},
	{
		"id": "7cf3f87de1ea",
		"ts": "2026-07-26T21:55:55.664Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10419503.74,
		"hash": "7cf3f87de1eabc5de0167a08abd9c1fc64b58a08a1402441ac0cffb169e7300f"
	},
	{
		"id": "5ad27ce3f965",
		"ts": "2026-07-26T21:55:55.872Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1072311.57,
		"hash": "5ad27ce3f965ecf1caffcb1068e4608781c3da6ba2936393d5c7b49d94d56964"
	},
	{
		"id": "e5c30025b47b",
		"ts": "2026-07-26T21:55:56.066Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4709250.64,
		"hash": "e5c30025b47bd91c9deff7548dce74175644747fee5423ff656228577992fdbb"
	},
	{
		"id": "047da0b110e8",
		"ts": "2026-07-26T21:55:56.271Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6027536.38,
		"hash": "047da0b110e88138418d8ad3b2ffbd393d44333fd6a51e6a1d7a852548b9c6a2"
	},
	{
		"id": "8e461c50f3b3",
		"ts": "2026-07-26T21:55:56.451Z",
		"symbol": "OpenAI",
		"token": "0x1cB0f168A71F5319EaAE5E1765B4C76cfaD57b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 3182378.58,
		"hash": "8e461c50f3b37cf3ee91ea3a1027e57c307ecacae9549b6b580635a1f9678be4"
	},
	{
		"id": "ae3b7a816e2a",
		"ts": "2026-07-26T20:54:13.577Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111607754.59,
		"hash": "ae3b7a816e2ab1de0f545914c69e8829309640d00d413d93b4c1c089e624249f"
	},
	{
		"id": "0be9d79c535e",
		"ts": "2026-07-26T20:54:13.836Z",
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
		"liquidityUsd": 16579867.91,
		"hash": "0be9d79c535e93d011881edd03d10ee935b66a0df64761f99178f85cb689b115"
	},
	{
		"id": "fc1183e6a5c2",
		"ts": "2026-07-26T20:54:14.076Z",
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
		"liquidityUsd": 1100046.62,
		"hash": "fc1183e6a5c21d292bb7b9eb7b61641ca1b2578c6ebb4e992a2e30e54d186316"
	},
	{
		"id": "2fd086d304a6",
		"ts": "2026-07-26T20:54:14.316Z",
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
		"liquidityUsd": 24968916.5,
		"hash": "2fd086d304a6083bdb1bb7aee484021df31b133dbeefaa79c5d4654d17ca71e7"
	},
	{
		"id": "8b3044b84980",
		"ts": "2026-07-26T20:54:14.554Z",
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
		"liquidityUsd": 5063068.77,
		"hash": "8b3044b8498052bd9c080e4df5276521ca3d8fb202a818855b6a542c7098079f"
	},
	{
		"id": "b2d683005860",
		"ts": "2026-07-26T20:54:14.799Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 977934.14,
		"hash": "b2d68300586014e72b16b71bb213b04c7ae06676e703e55aea8d48d898a54ba0"
	},
	{
		"id": "bd4a246a1815",
		"ts": "2026-07-26T20:54:15.058Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24968916.5,
		"hash": "bd4a246a1815a5c22f38f4ff14029b9bb737519445eb98b8458e9827cd05856f"
	},
	{
		"id": "0d03a965b557",
		"ts": "2026-07-26T20:54:15.327Z",
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
		"liquidityUsd": 2423299.26,
		"hash": "0d03a965b5572887ab89b111fef59d6bfd7b0c9098d25622df55c89a3ead613d"
	},
	{
		"id": "4a04f7496a45",
		"ts": "2026-07-26T20:54:15.567Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1802771.55,
		"hash": "4a04f7496a450557c3416f1d5d2592b3865d310ce251c7ceeee687a1800b1116"
	},
	{
		"id": "420d51ce6300",
		"ts": "2026-07-26T20:54:15.806Z",
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
		"liquidityUsd": 1364407.09,
		"hash": "420d51ce63003038433d0cd4a50ac6f3ada1ef1d9fbc81a685c545dbf960dd79"
	},
	{
		"id": "9d8fd94de3f4",
		"ts": "2026-07-26T20:54:16.031Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10330531.37,
		"hash": "9d8fd94de3f4b3cf181cfe4f4e8bd2b2abcd650418ca4364d2b742e854cd90f0"
	},
	{
		"id": "786d4043b2dd",
		"ts": "2026-07-26T20:54:16.258Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265786.26,
		"hash": "786d4043b2ddf0be177a078ddfcc97fe3facc202bc01b57904e49b58020a326d"
	},
	{
		"id": "2211f6333d1e",
		"ts": "2026-07-26T20:54:16.480Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1063281.49,
		"hash": "2211f6333d1e6de9c39a828917279b05a3a1164a298190e2fe846b65901bc980"
	},
	{
		"id": "202c4d00b002",
		"ts": "2026-07-26T20:54:16.703Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6009274.91,
		"hash": "202c4d00b002680f6db880e22b0051fed646190f2920685c144e04136c09ee6b"
	},
	{
		"id": "8c54765f5d2c",
		"ts": "2026-07-26T20:54:16.928Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4687653.26,
		"hash": "8c54765f5d2c716a611898f598c160f301f06582441578fd0abb2d73799b5b13"
	},
	{
		"id": "7a5d4b2d5154",
		"ts": "2026-07-26T20:54:17.151Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 850452.74,
		"hash": "7a5d4b2d51548e55c0d93865399f103a805716c4a43c460f6ff471addd12577e"
	},
	{
		"id": "77c591762c0b",
		"ts": "2026-07-26T19:21:43.930Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111574657.3,
		"hash": "77c591762c0b89e281a81bdd8393bcfb07bb498250645a765880713e71b1e351"
	},
	{
		"id": "5d9c0b004938",
		"ts": "2026-07-26T19:21:44.593Z",
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
		"liquidityUsd": 16636270.25,
		"hash": "5d9c0b004938ad69ec8717b41cbc4c54363e7aa765e599e9837ef535a647e30e"
	},
	{
		"id": "f6e551107161",
		"ts": "2026-07-26T19:21:44.846Z",
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
		"liquidityUsd": 1099893.71,
		"hash": "f6e551107161d69df2846a16b2bc74f875f9b2b2952f078239d6384e5c63fb78"
	},
	{
		"id": "13f57856369d",
		"ts": "2026-07-26T19:21:45.083Z",
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
		"liquidityUsd": 24964510.5,
		"hash": "13f57856369d80e47d04c01ad6dfa3e45e1f06ec4cfbb47fb771474fdcfdca64"
	},
	{
		"id": "5818037225c7",
		"ts": "2026-07-26T19:21:45.323Z",
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
		"liquidityUsd": 5070565.73,
		"hash": "5818037225c7b259498ca28652209aee7e2ddb9e0e7b2346381e9186ce0e5bff"
	},
	{
		"id": "b2eccafe7bdf",
		"ts": "2026-07-26T19:21:45.573Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 977986.95,
		"hash": "b2eccafe7bdf2c3bcf8d424bfd5a53aba88e4b60d7f93c1ace29925a7f2d0c05"
	},
	{
		"id": "094024a6a815",
		"ts": "2026-07-26T19:21:45.814Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24964510.5,
		"hash": "094024a6a815b0bb134262745a2cd5855b8867df1b5f2c124e04613ae0d52844"
	},
	{
		"id": "c801be3eeef2",
		"ts": "2026-07-26T19:21:46.068Z",
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
		"liquidityUsd": 2422603.19,
		"hash": "c801be3eeef2ee7ee741603a07e1730221830b91905ab22b3873888ed46d631c"
	},
	{
		"id": "63d7acb772d6",
		"ts": "2026-07-26T19:21:46.315Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1805013.25,
		"hash": "63d7acb772d6bab0a737659e003c0ef4ab619c7164a23ceca9d4445d882b111c"
	},
	{
		"id": "b72513080ae3",
		"ts": "2026-07-26T19:21:46.552Z",
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
		"liquidityUsd": 1365950.69,
		"hash": "b72513080ae342cb408ce5d8c41b434f9b1ba83d288f47d773a76b4d5f1139ca"
	},
	{
		"id": "9e192ff4721f",
		"ts": "2026-07-26T19:21:46.776Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10280555.19,
		"hash": "9e192ff4721f258d9b81614c1fe09137d7c61c5be1995953cb896a45297f69eb"
	},
	{
		"id": "3a5b0947c510",
		"ts": "2026-07-26T19:21:47.011Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1066902.88,
		"hash": "3a5b0947c51058e7370bf88619f2e850eaf046d52d444b91a1f6a6cf2865aa90"
	},
	{
		"id": "cd34ecf5a868",
		"ts": "2026-07-26T19:21:47.229Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261118.79,
		"hash": "cd34ecf5a86825bc36e38d614a210018a4c7c764fe0b32699a2912669da7dc41"
	},
	{
		"id": "99dcc3032003",
		"ts": "2026-07-26T19:21:47.452Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4697942.53,
		"hash": "99dcc30320039b144fad4fd7c3285fc1e0978e9873daec9e82095a963d5cee0b"
	},
	{
		"id": "339ad921a193",
		"ts": "2026-07-26T19:21:47.686Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6010406.98,
		"hash": "339ad921a193261c9ab75d32a90bd6d221bef3494f09f600a767b134b9603a89"
	},
	{
		"id": "75cdfac7154f",
		"ts": "2026-07-26T19:21:47.902Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 852460.83,
		"hash": "75cdfac7154f33ad6448cf2f4ddf111da3439a59f96aac3607822b4f4dcd7147"
	},
	{
		"id": "4f3e207e2874",
		"ts": "2026-07-26T17:59:23.566Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111488713.04,
		"hash": "4f3e207e287434feab91902f7ef685ae964101145b622947d0e61a88f6fa539f"
	},
	{
		"id": "002a2a2d52c0",
		"ts": "2026-07-26T17:59:23.918Z",
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
		"liquidityUsd": 16855486.83,
		"hash": "002a2a2d52c065c08e25f4c5cc4a94b924e7852539886f031a987ccefce69a4f"
	},
	{
		"id": "427f647ff65b",
		"ts": "2026-07-26T17:59:24.127Z",
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
		"liquidityUsd": 1100468.24,
		"hash": "427f647ff65b00eb435eee318d262c4ebbdbaaad4d86a0e691d1993ac69f51bf"
	},
	{
		"id": "a346b54174a9",
		"ts": "2026-07-26T17:59:24.328Z",
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
		"liquidityUsd": 25071445.7,
		"hash": "a346b54174a97cd63ce1e0753010a604fae423506b4194d0644bb3bbc55bc3f2"
	},
	{
		"id": "8f46a8350934",
		"ts": "2026-07-26T17:59:24.625Z",
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
		"liquidityUsd": 5077451.93,
		"hash": "8f46a8350934982eb012f541432997203dce6aaedede50af815dab68de64a83f"
	},
	{
		"id": "a334320e43aa",
		"ts": "2026-07-26T17:59:24.838Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 977989.45,
		"hash": "a334320e43aa54ab7623a20ad96d069f78ca928460088e983009cc63c8811162"
	},
	{
		"id": "8ac65c372b6d",
		"ts": "2026-07-26T17:59:25.231Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25071445.7,
		"hash": "8ac65c372b6dcad94c4c12f68b1b413ecc343d6de3cbf54563eea08cbd96fb43"
	},
	{
		"id": "80f183806f41",
		"ts": "2026-07-26T17:59:25.459Z",
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
		"liquidityUsd": 2422126.18,
		"hash": "80f183806f41f56fcf33d3f2a676b29bef6dcb76a4f8b01d48b1da81501a0ed1"
	},
	{
		"id": "16838b3a5864",
		"ts": "2026-07-26T17:59:25.654Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1801439.01,
		"hash": "16838b3a5864d43f74d93b8bd56b0abeffcc54202e744baf45295f2dbe27e356"
	},
	{
		"id": "842c473f7bb1",
		"ts": "2026-07-26T17:59:25.885Z",
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
		"liquidityUsd": 1364158.45,
		"hash": "842c473f7bb178c7fb8028e6f11da92cf2a726359b7448a7c311bef1e1a12162"
	},
	{
		"id": "a77d55c41b35",
		"ts": "2026-07-26T17:59:26.094Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10293665.36,
		"hash": "a77d55c41b35c32a73a42eb64cff80396c82dffbb093c46f6154e2a1e15fa711"
	},
	{
		"id": "72fa2957a462",
		"ts": "2026-07-26T17:59:26.301Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1070412.29,
		"hash": "72fa2957a462a12ad15ddeda4adeda837f2effe04af507d1d23bbd62c2e3b2e4"
	},
	{
		"id": "187e78ffb0eb",
		"ts": "2026-07-26T17:59:26.491Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 254800.16,
		"hash": "187e78ffb0ebe88df066f86f1b5b0bd5a538feea524c86c1cfea965317a38b04"
	},
	{
		"id": "b8db1c47e9c2",
		"ts": "2026-07-26T17:59:26.686Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4670739.05,
		"hash": "b8db1c47e9c2152d6c6a7cd7e16429a5d7ad653a3e41a85ff96eedf5bdd9d605"
	},
	{
		"id": "00159c0a6cf7",
		"ts": "2026-07-26T17:59:26.891Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6010406.98,
		"hash": "00159c0a6cf71c7bf77826108aa0ea1d31bec34a6a6d17a4a6b61f469224c723"
	},
	{
		"id": "4401b9a50749",
		"ts": "2026-07-26T17:59:27.107Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 866915.35,
		"hash": "4401b9a5074954aff1bc175eb97d5d6bc992dc975eea8c80e22b6a232e2bcf17"
	},
	{
		"id": "92492158498b",
		"ts": "2026-07-26T17:59:27.303Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 654760.86,
		"hash": "92492158498bf70509e4106953b00b2810015301fd544fbe1a2febb47edf7e86"
	},
	{
		"id": "9947f511526c",
		"ts": "2026-07-26T16:55:26.363Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111589175.59,
		"hash": "9947f511526c07023396f887630fd658eee8ed7d9cedbd09bd58fab547439d8b"
	},
	{
		"id": "f5d8b5e2a5ec",
		"ts": "2026-07-26T16:55:26.902Z",
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
		"liquidityUsd": 17474748.53,
		"hash": "f5d8b5e2a5eccc7e6e0144e4d4db273476d55462839e8e927723d7f6c0238f49"
	},
	{
		"id": "38aad41619cf",
		"ts": "2026-07-26T16:55:27.272Z",
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
		"liquidityUsd": 1098738.66,
		"hash": "38aad41619cf4e978e5c85306bf87566ced403e11a3507d895bc614a2f65a7a2"
	},
	{
		"id": "57251a19d377",
		"ts": "2026-07-26T16:55:27.639Z",
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
		"liquidityUsd": 25144727.09,
		"hash": "57251a19d37784bfb1779b98dd0fd2d60ad7e0a4ce9e0297d3bbfd5312de0fbd"
	},
	{
		"id": "9efda858440c",
		"ts": "2026-07-26T16:55:28.010Z",
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
		"liquidityUsd": 5077451.93,
		"hash": "9efda858440c452e63336f9f80f35388ec01193c0f117cca79a68024d74c7edd"
	},
	{
		"id": "c0da0b983d18",
		"ts": "2026-07-26T16:55:28.247Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 971755.61,
		"hash": "c0da0b983d1897fd2c924ef73409f717e07105cde9e98fbf3c2304009f80ad8b"
	},
	{
		"id": "8e653bc3923c",
		"ts": "2026-07-26T16:55:28.447Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25144727.09,
		"hash": "8e653bc3923c5685388aea3d9504e76ba7067d97c45465d7388491ce1d68a822"
	},
	{
		"id": "6f9eed5ac21a",
		"ts": "2026-07-26T16:55:28.691Z",
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
		"liquidityUsd": 2435078.25,
		"hash": "6f9eed5ac21ae0545635494250dceb830941e2792fbbd4c9d3ac333bd7cdf7d6"
	},
	{
		"id": "1b825b47f3e7",
		"ts": "2026-07-26T16:55:28.893Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1811669.18,
		"hash": "1b825b47f3e7f62619f19465ab473dad7ff81482cb8e7cfc559db991f514d92a"
	},
	{
		"id": "29050321ad3f",
		"ts": "2026-07-26T16:55:29.096Z",
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
		"liquidityUsd": 1386338.59,
		"hash": "29050321ad3fd36496b837579a49e9cde983ba421b4b9edd560be2f65d6a0ee9"
	},
	{
		"id": "5a322c9d1158",
		"ts": "2026-07-26T16:55:29.292Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10372471.76,
		"hash": "5a322c9d115835f666e845a8ba8d6f2c94c5cc76d48ad01176148a9391338738"
	},
	{
		"id": "fd7b90acbce4",
		"ts": "2026-07-26T16:55:29.481Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 130727.58,
		"hash": "fd7b90acbce45d65113706c027537b8e0fecac70fab371aa558047ada836044e"
	},
	{
		"id": "095924df336b",
		"ts": "2026-07-26T16:55:29.675Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1067710.07,
		"hash": "095924df336bfd6c9fde1e65f83e6ea11f9fae724282ea554a21e98e251f97b6"
	},
	{
		"id": "f444641aec3c",
		"ts": "2026-07-26T16:55:29.860Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4700154.14,
		"hash": "f444641aec3cc51804e6c379a0dffee800ef9413a6fbc346a125d8d26cbd9af7"
	},
	{
		"id": "be1b5c4fccc0",
		"ts": "2026-07-26T16:55:30.049Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 253809.3,
		"hash": "be1b5c4fccc0917cd1173ecfaa9660aa9caf893383235b26ca98e271166a9cd0"
	},
	{
		"id": "afb68a7b01a8",
		"ts": "2026-07-26T16:55:30.236Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6033697.23,
		"hash": "afb68a7b01a85456c8c378fb80114507f44aa1d22afac550efd1f5df5db12ace"
	},
	{
		"id": "78173be64bf7",
		"ts": "2026-07-26T16:55:30.426Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 862579.35,
		"hash": "78173be64bf7ea6245e099ccae07e5e3fedda3ae73c5427efee025a1faabe592"
	},
	{
		"id": "1fdd51cee60e",
		"ts": "2026-07-26T15:01:37.775Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110708085.41,
		"hash": "1fdd51cee60e5cf286ba4ee405894aff7bd12a2340c425cf7ad86abf8bc5811e"
	},
	{
		"id": "27feb55d2b0e",
		"ts": "2026-07-26T15:01:38.128Z",
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
		"liquidityUsd": 14998692.27,
		"hash": "27feb55d2b0e81d400692cf34df3f57eaa793e3600d3dfa40cdabc6682dbd8a9"
	},
	{
		"id": "5164bfab94d3",
		"ts": "2026-07-26T15:01:38.329Z",
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
		"liquidityUsd": 1092883.37,
		"hash": "5164bfab94d3c44fd66bb7a199caf99462fc0d95d18ab8e7a090ba64490a8d41"
	},
	{
		"id": "1f1e8bcf98ac",
		"ts": "2026-07-26T15:01:38.703Z",
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
		"liquidityUsd": 24980075.65,
		"hash": "1f1e8bcf98acccc5dd203076c3223099d7d12356c88298504f47d3a3aa95c54e"
	},
	{
		"id": "fc05d3a1dd8f",
		"ts": "2026-07-26T15:01:38.899Z",
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
		"liquidityUsd": 4987507.15,
		"hash": "fc05d3a1dd8f0dfdc87139aca79a3c9dec06c585fa935764970f74326e6d4965"
	},
	{
		"id": "27ec874c8c6e",
		"ts": "2026-07-26T15:01:39.093Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 966600.44,
		"hash": "27ec874c8c6e3e33fc9c88e0c04c0953c19ef507ba73f72c8e389e3c1836e014"
	},
	{
		"id": "d8ef7aa75bd0",
		"ts": "2026-07-26T15:01:39.297Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 24980075.65,
		"hash": "d8ef7aa75bd0ebf61c1196c28989886e55d40be23b2bbd4a7ac26b6acb136c06"
	},
	{
		"id": "142f680597ca",
		"ts": "2026-07-26T15:01:39.495Z",
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
		"liquidityUsd": 2409928.82,
		"hash": "142f680597cad0843f46bc6240646e41439b5643859212a58b807221e0deee18"
	},
	{
		"id": "c6b5a88017c8",
		"ts": "2026-07-26T15:01:39.694Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1779285.84,
		"hash": "c6b5a88017c8ace16440fd18c25eb6fde34fece7306ff7e8b41981b4538e355b"
	},
	{
		"id": "9ed1a6d7e663",
		"ts": "2026-07-26T15:01:39.889Z",
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
		"liquidityUsd": 10362754.95,
		"hash": "9ed1a6d7e663f0241a95c4f6b2fd05fe4d147bf6e315b1877cb75bcd6a75f39d"
	},
	{
		"id": "8e0980baea8b",
		"ts": "2026-07-26T15:01:40.087Z",
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
		"liquidityUsd": 1368742.51,
		"hash": "8e0980baea8b3ccc84214ebc41e67e1c3f6cdc2ffadc11629603ed0b875ded28"
	},
	{
		"id": "08346500a834",
		"ts": "2026-07-26T15:01:40.275Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4626634.01,
		"hash": "08346500a83493fb01d1f7b20ec5e09bcb710733f64e889c986f246e096a2ae3"
	},
	{
		"id": "3d7649675ea9",
		"ts": "2026-07-26T15:01:40.471Z",
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
		"liquidityUsd": 1066173.04,
		"hash": "3d7649675ea9c74b7a310927c8d7783a7a9f4cced4ef7980293939391fb779d9"
	},
	{
		"id": "c3515f705a7c",
		"ts": "2026-07-26T15:01:40.655Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 127523.49,
		"hash": "c3515f705a7ceaee45e8d0934a7ead6b3f1661884be53061221dd9c1347da1a0"
	},
	{
		"id": "ee02594c82d8",
		"ts": "2026-07-26T15:01:40.846Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 222487.36,
		"hash": "ee02594c82d8456cd8d27ff58cb9b4c66f116dfb2f353157cb4ad7956e6a51e9"
	},
	{
		"id": "caa212ab22f2",
		"ts": "2026-07-26T15:01:41.033Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 857510.69,
		"hash": "caa212ab22f2374781c0766a53314bfa44253635c59322a65c36604077729875"
	},
	{
		"id": "f895aa998d00",
		"ts": "2026-07-26T15:01:41.232Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 6013995.19,
		"hash": "f895aa998d008f155bf07ba1e2a455b6d19e69821a3110b2359828ca7f1928e9"
	},
	{
		"id": "6296d4c053f7",
		"ts": "2026-07-26T13:46:55.047Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110459597.63,
		"hash": "6296d4c053f70d0e3d66e9f9652673d7471045fb289cd6d8fae289e0668eadda"
	},
	{
		"id": "09e31dc65d57",
		"ts": "2026-07-26T13:46:55.421Z",
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
		"liquidityUsd": 15672486.67,
		"hash": "09e31dc65d57e2836de93b374d05111d74cbc455f619bcf48e99a7fbf25a563f"
	},
	{
		"id": "e62a2aba3438",
		"ts": "2026-07-26T13:46:55.625Z",
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
		"liquidityUsd": 1086147.94,
		"hash": "e62a2aba343811adf5432e418838d680ff320475fa01de2ec03944ba635ffe2f"
	},
	{
		"id": "862eeb8e7d91",
		"ts": "2026-07-26T13:46:55.830Z",
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
		"liquidityUsd": 25057662,
		"hash": "862eeb8e7d911fb7c50facb11e3750e82a3f6e7b51b8d8d2f659e7ef76bb6fad"
	},
	{
		"id": "06f4ef199f40",
		"ts": "2026-07-26T13:46:56.036Z",
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
		"liquidityUsd": 4998623.07,
		"hash": "06f4ef199f40e31d416a27748d5cff7a943653d20ad332a44b16568b226ac4bb"
	},
	{
		"id": "4cf57e0e17a2",
		"ts": "2026-07-26T13:46:56.244Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 965952.41,
		"hash": "4cf57e0e17a216d03eb75b214ec14b8932fba5afac0da019c4d93c9a22dcef61"
	},
	{
		"id": "c3e80848bf78",
		"ts": "2026-07-26T13:46:56.477Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25057662,
		"hash": "c3e80848bf782b4c9dce7d68847b96e38ca0595772611a384e9b497fd9d790f0"
	},
	{
		"id": "71aa184f0b03",
		"ts": "2026-07-26T13:46:56.690Z",
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
		"liquidityUsd": 2393633.12,
		"hash": "71aa184f0b0346724d3425abab4e1b75e417158c7e1263404b2c9c998a381df4"
	},
	{
		"id": "66f07b97bf73",
		"ts": "2026-07-26T13:46:56.895Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1802213.36,
		"hash": "66f07b97bf731e512721074b712c6437779a9a70aff23c1ee3be8c2895bb0c46"
	},
	{
		"id": "2d5f96f4f1af",
		"ts": "2026-07-26T13:46:57.102Z",
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
		"liquidityUsd": 10316759.69,
		"hash": "2d5f96f4f1af1cef6fb0ae7ced542cfe68aa1992c9797418576f8a1454fbf23f"
	},
	{
		"id": "869bcfa4a6e3",
		"ts": "2026-07-26T13:46:57.292Z",
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
		"liquidityUsd": 1372077.08,
		"hash": "869bcfa4a6e3604af7e9504fad88e7cdac83030d9f698a1b0c608f1b0b4b6de9"
	},
	{
		"id": "bdd579cb1f45",
		"ts": "2026-07-26T13:46:57.480Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4606596.88,
		"hash": "bdd579cb1f45f60dea6f5462894d384c5f613315747675c2eed98bfe429972a1"
	},
	{
		"id": "be152d4888e5",
		"ts": "2026-07-26T13:46:57.671Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1058374.29,
		"hash": "be152d4888e5207f8aceb49e9426ec4bab3041ad24dbc55f94271dc4b51ea1c4"
	},
	{
		"id": "e4f5c74515ef",
		"ts": "2026-07-26T13:46:57.858Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 125294.75,
		"hash": "e4f5c74515ef7ce956b97b0e4da36f07a388c80cf10cd28e9cc2e01d2e3f619f"
	},
	{
		"id": "b5834a14c7de",
		"ts": "2026-07-26T13:46:58.050Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 219599.55,
		"hash": "b5834a14c7deca57479aafb14ea5965ea8b5d056e181345db966b91c45703a77"
	},
	{
		"id": "bd421dd21005",
		"ts": "2026-07-26T13:46:58.250Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 854056.82,
		"hash": "bd421dd21005033896b93a40fb65c3b835eb31ed4f42e088ce07793d6d503e83"
	},
	{
		"id": "8e0d95c2a4b0",
		"ts": "2026-07-26T13:46:58.438Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5717987.95,
		"hash": "8e0d95c2a4b0ca3de825be907f00a26a14d64b6efbbd334c9ac9ad5fffd2f136"
	},
	{
		"id": "9f3a283c3aa8",
		"ts": "2026-07-26T11:59:56.876Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110296921.88,
		"hash": "9f3a283c3aa8029eb3ff13655dcf01c3ebe3728703467ead7597205cf8f668b3"
	},
	{
		"id": "ac724f6aab47",
		"ts": "2026-07-26T11:59:57.089Z",
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
		"liquidityUsd": 15646625.18,
		"hash": "ac724f6aab478ea633261673a4076e22455b5fa94e2dc7129ea7a112fa3880e3"
	},
	{
		"id": "795074b8c4f6",
		"ts": "2026-07-26T11:59:57.310Z",
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
		"liquidityUsd": 1090124.71,
		"hash": "795074b8c4f6bbeadae15929c87b1e248cef555aa33b2dd6e585ad8f94ee05c5"
	},
	{
		"id": "694ce36378ad",
		"ts": "2026-07-26T11:59:57.521Z",
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
		"liquidityUsd": 25429317.44,
		"hash": "694ce36378ad30e7ec0db276684d555687285cdf66ea46dad2b8b728ebb8a045"
	},
	{
		"id": "8af378e5c044",
		"ts": "2026-07-26T11:59:57.728Z",
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
		"liquidityUsd": 4991317.94,
		"hash": "8af378e5c0447063022ff28b6cb345f6b3f919bb68ef1ec9b00d0f2b1ed998ed"
	},
	{
		"id": "6b1e01195bd5",
		"ts": "2026-07-26T11:59:58.058Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 965571.66,
		"hash": "6b1e01195bd57f584006d78518c0bf5851c1836221a6a884062a34c6929f8619"
	},
	{
		"id": "54b3bc680fea",
		"ts": "2026-07-26T11:59:58.260Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25429317.44,
		"hash": "54b3bc680feae3e7425190a7d4ff9b97f9048dbfe702f2fc6f5551315cfd752b"
	},
	{
		"id": "f476b3f56317",
		"ts": "2026-07-26T11:59:58.487Z",
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
		"liquidityUsd": 2396222.1,
		"hash": "f476b3f5631755426f243d91453eac640a21d4406e529b4428401eada8df9b9b"
	},
	{
		"id": "7e62910a1e62",
		"ts": "2026-07-26T11:59:58.697Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1802807.35,
		"hash": "7e62910a1e629abe98e3b10059bd5bec2c02eca8f30ae5c95e83d0313ead6019"
	},
	{
		"id": "e8a0c78decf2",
		"ts": "2026-07-26T11:59:58.906Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 123382.23,
		"hash": "e8a0c78decf267514856ab3ba5868bbc806fe8492b781fa847ef6f33a20e2b6d"
	},
	{
		"id": "1572066a76c6",
		"ts": "2026-07-26T11:59:59.127Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10428366.12,
		"hash": "1572066a76c67877d1d037cc2b3d53be038619c0c47283aff721ce46634ca1f5"
	},
	{
		"id": "ca1be70a707f",
		"ts": "2026-07-26T11:59:59.394Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 854289.41,
		"hash": "ca1be70a707f7e5f1d08dcd63594342cec0edd0b2fbd424ab015bcedbc8ccaea"
	},
	{
		"id": "cacf9151e84e",
		"ts": "2026-07-26T11:59:59.583Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 77430.52,
		"hash": "cacf9151e84edf4738ed8f0ee1c5a89f94a1408043101474d429992e41743f3b"
	},
	{
		"id": "05d784613b0d",
		"ts": "2026-07-26T11:59:59.780Z",
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
		"liquidityUsd": 1339764.87,
		"hash": "05d784613b0d2b79b31b11855500911c4ef9b30107effb247655507c9bc56160"
	},
	{
		"id": "49e84bab6808",
		"ts": "2026-07-26T11:59:59.969Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4603019.9,
		"hash": "49e84bab68082a7622b9b2df748fa741d67dc1bc220e1677cd0d2e383b3f4f44"
	}
]
