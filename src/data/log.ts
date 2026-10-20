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
	"updatedAt": "2026-10-20T07:05:40.828Z",
	"tokensScored": 20816,
	"verdictsIssued": 20816,
	"safe": 17748,
	"risky": 1473,
	"likelyRug": 1595,
	"ticks": 1176
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "6d08bc0fa116",
		"ts": "2026-10-20T07:05:36.284Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146151944.83,
		"hash": "6d08bc0fa1162a412d9840aa0b2e06101e18b769b29d3f0b71dcff30e31fa97f"
	},
	{
		"id": "57f18495244b",
		"ts": "2026-10-20T07:05:36.545Z",
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
		"liquidityUsd": 18162805.04,
		"hash": "57f18495244b3ee2eb0972ba920d88482f96e785bda9e32f9eb0af0a407647a1"
	},
	{
		"id": "cc314d2586af",
		"ts": "2026-10-20T07:05:36.800Z",
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
		"liquidityUsd": 772926.1,
		"hash": "cc314d2586af37406015db7c8ae77de976636b47e027d5525f8c6364400f3593"
	},
	{
		"id": "a0b41fad3ada",
		"ts": "2026-10-20T07:05:37.076Z",
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
		"liquidityUsd": 34583512.49,
		"hash": "a0b41fad3ada656a567f3dbfc411de88805d88afe16319a76b9fb48ceb926052"
	},
	{
		"id": "2cef2e3fb4c4",
		"ts": "2026-10-20T07:05:37.352Z",
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
		"liquidityUsd": 4613256.24,
		"hash": "2cef2e3fb4c4347dee2abe943b4f4a25aed108dbb25c4f83a588f3c0a8ff74cb"
	},
	{
		"id": "a7017bc6460c",
		"ts": "2026-10-20T07:05:37.622Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1135015.74,
		"hash": "a7017bc6460c2916e8ff953ed92a01f10eceb898a395680144aff953c98bf373"
	},
	{
		"id": "f06524437044",
		"ts": "2026-10-20T07:05:37.868Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34583512.49,
		"hash": "f065244370443a83fa29521c743eda25fa7d029b96589bb82b84b3021ce7514b"
	},
	{
		"id": "fb9124243ab8",
		"ts": "2026-10-20T07:05:38.147Z",
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
		"liquidityUsd": 2740895.24,
		"hash": "fb9124243ab829818c522a503831c70e197590b0bf409e6c0ea6971c5980b4aa"
	},
	{
		"id": "ea5fa9c13b53",
		"ts": "2026-10-20T07:05:38.448Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1331342.3,
		"hash": "ea5fa9c13b53b3ed37e824d488b91c000c00543925eea60c16f6ed6e4e0a9ee1"
	},
	{
		"id": "ac8bc273c7c4",
		"ts": "2026-10-20T07:05:38.724Z",
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
		"liquidityUsd": 1800058.62,
		"hash": "ac8bc273c7c449e1e8672ecae295be4a68c1a4f78cc427697889146f9e33414b"
	},
	{
		"id": "b6f47b904857",
		"ts": "2026-10-20T07:05:38.955Z",
		"symbol": "PRXVT",
		"token": "0x4b5D32A07b8d3eC5D6928cAa30196f8dd6a7C5A9",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 285613.65,
		"hash": "b6f47b904857110211e56a5063ba477d8ad83551f34700ca72715c1e9f82fbde"
	},
	{
		"id": "78ca0978331a",
		"ts": "2026-10-20T07:05:39.197Z",
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
		"liquidityUsd": 3344477.23,
		"hash": "78ca0978331a44d52219e7283c2f89e2768b532ff93575c7a1f0acc4ed208055"
	},
	{
		"id": "f7967e5aee8a",
		"ts": "2026-10-20T07:05:39.438Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1936155.82,
		"hash": "f7967e5aee8a334833105d4297e9ff428a3acb6b7b4e01b01ac443affd47afef"
	},
	{
		"id": "9a7cb8f3a5dc",
		"ts": "2026-10-20T07:05:39.669Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1305393,
		"hash": "9a7cb8f3a5dc90492eeed61c854c46f634644481d56313f54b255665ad69cf7f"
	},
	{
		"id": "ee2119ce3367",
		"ts": "2026-10-20T07:05:39.900Z",
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
		"liquidityUsd": 200768.71,
		"hash": "ee2119ce33672ab9a3639ebf724956b8230908dbf836a67a312e0d8cd58453f1"
	},
	{
		"id": "1b977a655a83",
		"ts": "2026-10-20T07:05:40.138Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 449582.18,
		"hash": "1b977a655a8349fe12672ccc613a23545a7191e63fd70e6ae6a3c730b7d6a228"
	},
	{
		"id": "871b90089122",
		"ts": "2026-10-20T07:05:40.368Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 16,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.68,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 615042.39,
		"hash": "871b90089122a04a34e16dd98f1d1210e9552afb3ee04b0cd712d5e3c38ed333"
	},
	{
		"id": "337eca8f1e74",
		"ts": "2026-10-20T07:05:40.599Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4963277.55,
		"hash": "337eca8f1e7429fa5878da87041e0f204d3801696f3c4636dea412256404613f"
	},
	{
		"id": "53ba8c2cbafe",
		"ts": "2026-10-20T07:05:40.828Z",
		"symbol": "MSTRc",
		"token": "0xb2000000000000000000004884b426556b92883d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1492357.69,
		"hash": "53ba8c2cbafef445a393e814dca0b268003de0d751e06b87063785de6c57427c"
	},
	{
		"id": "ce88991e8f6b",
		"ts": "2026-10-20T01:31:25.669Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145412453.21,
		"hash": "ce88991e8f6bc51df01f5cea56006876ca1fd0a1a7a1539584daf2475ae4c549"
	},
	{
		"id": "b9acc4c2ebc7",
		"ts": "2026-10-20T01:31:26.174Z",
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
		"liquidityUsd": 18122805.19,
		"hash": "b9acc4c2ebc755a5d8a6487e87726054714b6fb8f88b015debed8e2a32e2fcdd"
	},
	{
		"id": "8c9679ff4dab",
		"ts": "2026-10-20T01:31:26.458Z",
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
		"liquidityUsd": 770718.31,
		"hash": "8c9679ff4dab2564fd20118192d0c92a7e2966469c785acdf336923da03dacef"
	},
	{
		"id": "75280ce4c2d6",
		"ts": "2026-10-20T01:31:26.751Z",
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
		"liquidityUsd": 33983269.93,
		"hash": "75280ce4c2d65a51b882691873922f3bafb93f8dfa2f1de767389d5d2816ca6b"
	},
	{
		"id": "396e2023953f",
		"ts": "2026-10-20T01:31:27.021Z",
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
		"liquidityUsd": 4584441.97,
		"hash": "396e2023953f5cb7a4fc25864759145f065033ba6d64655d4baa5a2fca1cadac"
	},
	{
		"id": "836989b5b5f5",
		"ts": "2026-10-20T01:31:27.289Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1125669.82,
		"hash": "836989b5b5f52ecf606a0a73b195886ed66497bdf38bd0d8ba08cdf70dc884f1"
	},
	{
		"id": "c7bce83a2a94",
		"ts": "2026-10-20T01:31:27.546Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33983269.68,
		"hash": "c7bce83a2a94a5a656cc10687b17eb1d1c807023a46be9abe2e71732d4340fc5"
	},
	{
		"id": "60b355e64eab",
		"ts": "2026-10-20T01:31:27.840Z",
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
		"liquidityUsd": 2618287.74,
		"hash": "60b355e64eab5ade17d421b2ccdac0ad39714756bd4a82d715dcba8bdf6f20de"
	},
	{
		"id": "2380415eae0d",
		"ts": "2026-10-20T01:31:28.085Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1384937.18,
		"hash": "2380415eae0dfd5068b8305608b31c66229f5bfaa01013f95bf3bc04b3bcb7bc"
	},
	{
		"id": "27c3b6bf88b0",
		"ts": "2026-10-20T01:31:28.339Z",
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
		"liquidityUsd": 1811757.5,
		"hash": "27c3b6bf88b0e40f8b07a2dc749412539ffcee4167edf2e36e904326dff96bf3"
	},
	{
		"id": "f8b4cecbf739",
		"ts": "2026-10-20T01:31:28.559Z",
		"symbol": "PRXVT",
		"token": "0x4b5D32A07b8d3eC5D6928cAa30196f8dd6a7C5A9",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 289873.59,
		"hash": "f8b4cecbf7399009154a7879e8b48ee5a2ba1cd29f4d08b2661341c127ea8937"
	},
	{
		"id": "63da129fa6d4",
		"ts": "2026-10-20T01:31:28.796Z",
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
		"liquidityUsd": 3353022.14,
		"hash": "63da129fa6d483a55c6b371972d3f4f2f60fd00ff2d6ea2a715aa078eadce153"
	},
	{
		"id": "01bc483a59a0",
		"ts": "2026-10-20T01:31:29.018Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1993184.09,
		"hash": "01bc483a59a0d3bdd9d81384801b5a8b4d5491bdfd285aeec38ec2062a62d462"
	},
	{
		"id": "9d4c5fed30cf",
		"ts": "2026-10-20T01:31:29.266Z",
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
		"liquidityUsd": 220412.62,
		"hash": "9d4c5fed30cfb479cfddc190454a1e6199d8b2fef29088128ea037ff6722f1a6"
	},
	{
		"id": "bf51d3482d3a",
		"ts": "2026-10-20T01:31:29.519Z",
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
		"liquidityUsd": 17342417.93,
		"hash": "bf51d3482d3af396409a8fa67ce5f3ce5fc6796bae314028104c85eccb2a5d81"
	},
	{
		"id": "9f638b837e7f",
		"ts": "2026-10-20T01:31:29.784Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1299808.04,
		"hash": "9f638b837e7fce1cc4bb242f8b290ee2d3672d17989b8ef3adb334b5cd2341a0"
	},
	{
		"id": "533bb90a7c63",
		"ts": "2026-10-20T01:31:30.008Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 323254.91,
		"hash": "533bb90a7c63a02911cfdfe3f4e47bb4fc0947a4bb4e8487cc504d85d0562c53"
	},
	{
		"id": "b1e47f634c1a",
		"ts": "2026-10-20T01:31:30.246Z",
		"symbol": "Paper",
		"token": "0x6aeDAbF7D4E0302d776FbF8EB11CFB1993764b07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10302060.84,
		"hash": "b1e47f634c1add195c4ea0c9ba825c22d8413c59a842d556b78e05560783ca7e"
	},
	{
		"id": "04822d0c6e2a",
		"ts": "2026-10-20T01:31:30.468Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3991335.68,
		"hash": "04822d0c6e2abb79202b2d5f6896ed1e8e02c8cba3f89cdecfc67329e39021da"
	},
	{
		"id": "7de0f2f98625",
		"ts": "2026-10-19T22:47:27.188Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146562885.38,
		"hash": "7de0f2f98625076b446ca796cb58962c1ef3143e6e15ffa0f83d21494eebab61"
	},
	{
		"id": "02dc06f39e83",
		"ts": "2026-10-19T22:47:27.502Z",
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
		"liquidityUsd": 18513858.01,
		"hash": "02dc06f39e834eac1b1814d30a498af1d949945dc7543c6a71f9700e2dd49a0b"
	},
	{
		"id": "67d83b256a1f",
		"ts": "2026-10-19T22:47:27.809Z",
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
		"liquidityUsd": 785036.34,
		"hash": "67d83b256a1f909cbcc185d175679f67d8f2001f057901bfa6ec18676b31e917"
	},
	{
		"id": "2b337d691f1d",
		"ts": "2026-10-19T22:47:28.087Z",
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
		"liquidityUsd": 34209888.06,
		"hash": "2b337d691f1dd621d2bcb0d7d4b3de3334b9ad460af30a9311569fa9a67412f6"
	},
	{
		"id": "9cba91440842",
		"ts": "2026-10-19T22:47:28.351Z",
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
		"liquidityUsd": 4641628.19,
		"hash": "9cba91440842e3eca231f84e1db65ba9b3e9b184404de241c6c797350465804d"
	},
	{
		"id": "1f5487cd9bf9",
		"ts": "2026-10-19T22:47:28.617Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1141683.03,
		"hash": "1f5487cd9bf9e78ea52743727c35099729891170f95780b912dd73b26c2bcf8c"
	},
	{
		"id": "0406020c9cd8",
		"ts": "2026-10-19T22:47:28.880Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34209887.34,
		"hash": "0406020c9cd86e7c6dc6ef01f88d2b3106a522da7bf2d9a5a0715522424be63c"
	},
	{
		"id": "a22f5ff7b021",
		"ts": "2026-10-19T22:47:29.350Z",
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
		"liquidityUsd": 2721333.33,
		"hash": "a22f5ff7b021d68e08d6f23bfe8c381e92744922c07c1c721ddc2018a9d8bf15"
	},
	{
		"id": "60329c84df93",
		"ts": "2026-10-19T22:47:29.616Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1301758.12,
		"hash": "60329c84df93fca445d77e8728285d9c88ec1e8674f034901152b52d0bb068a2"
	},
	{
		"id": "8ae05d7b2a14",
		"ts": "2026-10-19T22:47:29.887Z",
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
		"liquidityUsd": 1806524.76,
		"hash": "8ae05d7b2a1481065f7e368ec8af4f17ac1e35c920daf82c16bbf3657997e923"
	},
	{
		"id": "6e76b7106d20",
		"ts": "2026-10-19T22:47:30.142Z",
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
		"liquidityUsd": 3402656.28,
		"hash": "6e76b7106d20639e9225a0b326bad0717ae5d84eabad51f96693fe580a4207b9"
	},
	{
		"id": "898454c0a9a6",
		"ts": "2026-10-19T22:47:30.387Z",
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
		"liquidityUsd": 17398689.29,
		"hash": "898454c0a9a682096a25b268f8149d8c237251de546bf43aa972df165da96e50"
	},
	{
		"id": "e792779711a9",
		"ts": "2026-10-19T22:47:30.630Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2019424.52,
		"hash": "e792779711a92ca6ccedb384fb5442f6d1dcca976affe4ac77b11e2132e30eba"
	},
	{
		"id": "48da883ba004",
		"ts": "2026-10-19T22:47:30.914Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1318734.49,
		"hash": "48da883ba004b42e37a6b370b6f9b010ea00b3b08c8a1d20de4cb540aa8c9028"
	},
	{
		"id": "0d25b09012e9",
		"ts": "2026-10-19T22:47:31.199Z",
		"symbol": "PRXVT",
		"token": "0x4b5D32A07b8d3eC5D6928cAa30196f8dd6a7C5A9",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 308659.36,
		"hash": "0d25b09012e92b6fb7651a316583697657dbdffec03b040f2179ab2850273c5e"
	},
	{
		"id": "d97d620aeb47",
		"ts": "2026-10-19T22:47:31.477Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 202142.01,
		"hash": "d97d620aeb472460b3c6155722ae6890aeee8b6ce7b6be8838fe1d6282a0182e"
	},
	{
		"id": "8fac6bed0b8d",
		"ts": "2026-10-19T22:47:31.723Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4038525.29,
		"hash": "8fac6bed0b8d56666577a7c6d5fb0802e7d5b585deae6d042323cc740b7fef49"
	},
	{
		"id": "e21a3d593805",
		"ts": "2026-10-19T22:47:31.977Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 327559.47,
		"hash": "e21a3d5938050edd04ee7e13ac4388448202c55ccc12d6087ad40473a03f5aee"
	},
	{
		"id": "99334d62b106",
		"ts": "2026-10-19T22:47:32.222Z",
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
		"liquidityUsd": 1135990.16,
		"hash": "99334d62b1066ffa5ecac3c9687aafaa794ba495146ed18db25e36f477e180ab"
	},
	{
		"id": "24ac067774ee",
		"ts": "2026-10-19T18:39:07.597Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146358671.02,
		"hash": "24ac067774ee4d7c50fe7628826b80ff5bf662bd172d2ef79155bec0269983e0"
	},
	{
		"id": "e7c9b86416be",
		"ts": "2026-10-19T18:39:08.076Z",
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
		"liquidityUsd": 18178138.87,
		"hash": "e7c9b86416beb52aaaba00648e56d68aba4cbbdbf4e90f965b66e01cbd535651"
	},
	{
		"id": "6f6fb014b19f",
		"ts": "2026-10-19T18:39:08.656Z",
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
		"liquidityUsd": 779298.88,
		"hash": "6f6fb014b19f4ac523f677e85f6b98b8447df56939cbfd19de9759acf47ef49a"
	},
	{
		"id": "4887438c626b",
		"ts": "2026-10-19T18:39:09.031Z",
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
		"liquidityUsd": 33802399.05,
		"hash": "4887438c626b7520dbce64ff31fe2319cf141ef2c3c52290859cf5c646bc6658"
	},
	{
		"id": "f93bcb5e38c5",
		"ts": "2026-10-19T18:39:09.401Z",
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
		"liquidityUsd": 4606151.73,
		"hash": "f93bcb5e38c553054c054f8bc69624a60ad294425c4bc9ec7f7a7dea66268f8a"
	},
	{
		"id": "a5d43d350afa",
		"ts": "2026-10-19T18:39:09.772Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1127948.62,
		"hash": "a5d43d350afaac9e170bbbe125ea58d0b6b3d7cfb63b8dd5e45afb84da6fe700"
	},
	{
		"id": "1834a1ad8b50",
		"ts": "2026-10-19T18:39:10.194Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33802399.05,
		"hash": "1834a1ad8b5070140f31aba9075617ecd7ea4e1833e6c74043832db03adfd200"
	},
	{
		"id": "8cfc87e2fafc",
		"ts": "2026-10-19T18:39:10.612Z",
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
		"liquidityUsd": 2691219.95,
		"hash": "8cfc87e2fafc79c66ee445443bb2dd0d6899aac9c6bd1310f0020629ea07f381"
	},
	{
		"id": "cdb57c5facb0",
		"ts": "2026-10-19T18:39:11.115Z",
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
		"liquidityUsd": 1784120.77,
		"hash": "cdb57c5facb0e6bfcc1d1a1d43195087f5536f5b4217485df735d53d99d217f2"
	},
	{
		"id": "5afc468dd00e",
		"ts": "2026-10-19T18:39:11.543Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"mintable",
			"pausable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1340956.5,
		"hash": "5afc468dd00e57ec185031e78976342ccbefa9dc96b7f8bf719e637e1e4628b8"
	},
	{
		"id": "0f1a3b30a235",
		"ts": "2026-10-19T18:39:11.894Z",
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
		"liquidityUsd": 3246703.83,
		"hash": "0f1a3b30a235500e4c0baeae8680d724222bebc0be4c24d0fd7cb770cb0ab514"
	},
	{
		"id": "65444e10621c",
		"ts": "2026-10-19T18:39:12.271Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1312296.69,
		"hash": "65444e10621c024d4534a211d2d0471b060d9ee6d9f2f3f3fbe1ab19d29889ac"
	},
	{
		"id": "7165149a70db",
		"ts": "2026-10-19T18:39:12.642Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2021762.89,
		"hash": "7165149a70db6f12d4c06c76898bf0095da9da8aacfce9aae957bebe9692a44c"
	},
	{
		"id": "51da378dec0a",
		"ts": "2026-10-19T18:39:13.004Z",
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
		"liquidityUsd": 17274316.02,
		"hash": "51da378dec0ab5365ccbcb25538ee18599449b096a23f6ee5f448e39512b2174"
	},
	{
		"id": "1d42dcd651f4",
		"ts": "2026-10-19T18:39:13.471Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 203269.43,
		"hash": "1d42dcd651f420181a1719c2f5e298e736f7818bf19ad191bf741e3cc4f40854"
	},
	{
		"id": "aaa95ff9e1b4",
		"ts": "2026-10-19T18:39:13.821Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4013217.3,
		"hash": "aaa95ff9e1b43cf25a93fffdbc2161b938d22f05469ada8a11d8b13bd6c9749f"
	},
	{
		"id": "fbc46e5ec2a8",
		"ts": "2026-10-19T18:39:14.170Z",
		"symbol": "Paper",
		"token": "0x6aeDAbF7D4E0302d776FbF8EB11CFB1993764b07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10302246.84,
		"hash": "fbc46e5ec2a85bbda238443abf9c9563a0d60b86da27898ca403fc2060debf52"
	},
	{
		"id": "eb9ae40299d0",
		"ts": "2026-10-19T18:39:14.546Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 194922.85,
		"hash": "eb9ae40299d093d6e2cebbc93724be67f470cd9d1a7862e0d5789be3e8c7e70e"
	},
	{
		"id": "c13193ba5f71",
		"ts": "2026-10-19T18:39:14.918Z",
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
		"liquidityUsd": 1081340.55,
		"hash": "c13193ba5f7134072c2c35c77bad37f657d4e7f6644e4e987ca6609fd8d3ce1c"
	},
	{
		"id": "313216786e5f",
		"ts": "2026-10-19T11:59:35.279Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147777172.49,
		"hash": "313216786e5f5b1e67652863c32447c389795d3454c50d43ce0d5aa4d11fda1a"
	},
	{
		"id": "dde7bf191b4c",
		"ts": "2026-10-19T11:59:35.647Z",
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
		"liquidityUsd": 18345011.89,
		"hash": "dde7bf191b4cdc5bde77c65f1c0b65529bd2e24aadee9e5ca3c75f91754c3437"
	},
	{
		"id": "0495139d1f42",
		"ts": "2026-10-19T11:59:35.848Z",
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
		"liquidityUsd": 789013.05,
		"hash": "0495139d1f4253645ef4ae27676d83db10d5de693012718ec0c2528c712fc468"
	},
	{
		"id": "50f0eafc96a4",
		"ts": "2026-10-19T11:59:36.051Z",
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
		"liquidityUsd": 35031603.69,
		"hash": "50f0eafc96a4424b00d6dff479b64c37d2312b88e519927a8725519454df95f3"
	},
	{
		"id": "fa5f542ec4fb",
		"ts": "2026-10-19T11:59:36.244Z",
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
		"liquidityUsd": 4644483.74,
		"hash": "fa5f542ec4fb725b4fcc50f9a12fc61d417f2e57247fe58076b4a6d6147c35d7"
	},
	{
		"id": "4fe0941dd540",
		"ts": "2026-10-19T11:59:36.459Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1146495.35,
		"hash": "4fe0941dd540584500b38919a09ee47e82b0feb94c6acabf6e3b04d47a9919bd"
	},
	{
		"id": "2bd972f678fd",
		"ts": "2026-10-19T11:59:36.658Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35031603.69,
		"hash": "2bd972f678fdf6e7b42db2758329dae08c35134b9ef34d9eec676057eb9b97f1"
	},
	{
		"id": "fc7bcd2b6200",
		"ts": "2026-10-19T11:59:36.877Z",
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
		"liquidityUsd": 2737069,
		"hash": "fc7bcd2b620046265bf7cfff02ced6867bb54cf9797c77e7d489b81cccd10360"
	},
	{
		"id": "4b2bd24b7160",
		"ts": "2026-10-19T11:59:37.178Z",
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
		"liquidityUsd": 1758115.6,
		"hash": "4b2bd24b7160623f68b736604589eca3f1d0216cde7041f3860fcd16d554ccad"
	},
	{
		"id": "1c9de4582de7",
		"ts": "2026-10-19T11:59:37.392Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1324973.22,
		"hash": "1c9de4582de7d3579dc9eab3a5c2d7e84bde2ec3d658c1f2d6063e39f0c0c1b0"
	},
	{
		"id": "a352dcd81fcf",
		"ts": "2026-10-19T11:59:37.600Z",
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
		"liquidityUsd": 17249694.01,
		"hash": "a352dcd81fcf8b813ad812c8219a328cdd5fa249e0ba727e6db4b3f90d40065b"
	},
	{
		"id": "75339e1f00be",
		"ts": "2026-10-19T11:59:37.795Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2032058.19,
		"hash": "75339e1f00bef86f6fd6cc044bb7b8c6f6a126f7b37ef5a7abec9f897ac1a5d9"
	},
	{
		"id": "84d930c51f10",
		"ts": "2026-10-19T11:59:38.000Z",
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
		"liquidityUsd": 3243399.65,
		"hash": "84d930c51f103b51dd7aa3cbb93b31b57909eab36d8c03be15f3e2434a2591a3"
	},
	{
		"id": "3e4b179f1608",
		"ts": "2026-10-19T11:59:38.215Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 441284.09,
		"hash": "3e4b179f16083d1e57499968ca1aac4895115bc42851f593219630048f349ddb"
	},
	{
		"id": "552dd2065ad5",
		"ts": "2026-10-19T11:59:38.419Z",
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
		"liquidityUsd": 1303320.55,
		"hash": "552dd2065ad589f0c1dd4cf3f7e3de0a1a57c7efd326e3016f57bde74ad4f0ee"
	},
	{
		"id": "fadd0aa65009",
		"ts": "2026-10-19T11:59:38.659Z",
		"symbol": "Paper",
		"token": "0x3E199F015ea827F27C2671f8EaE516b8944FFB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10199548.68,
		"hash": "fadd0aa65009ff094d23196002f6aa8512d6ff1b6f8c9457ad19d82e04e815d9"
	},
	{
		"id": "cc8b4519e500",
		"ts": "2026-10-19T11:59:38.850Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 183802.4,
		"hash": "cc8b4519e5001386ec0cde8299b007b5161271d7f9f08bd5d2330d848417934b"
	},
	{
		"id": "162ade09ef90",
		"ts": "2026-10-19T11:59:39.059Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4016761.54,
		"hash": "162ade09ef9044089059ffa66da06a2e4118ec2691d94996a5de0278e29c5841"
	},
	{
		"id": "34e86adb5619",
		"ts": "2026-10-19T05:39:53.634Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147837866.92,
		"hash": "34e86adb5619cbb697152b6b58f615076ae78bc0cdb52c25f4fcdbf90c7d4115"
	},
	{
		"id": "b18f8f39ee9f",
		"ts": "2026-10-19T05:39:53.929Z",
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
		"liquidityUsd": 18647602.05,
		"hash": "b18f8f39ee9fd6d192d4386e0601ef2a00cf86755ab971d57210c4b2bf4ea047"
	},
	{
		"id": "c231f23dc11d",
		"ts": "2026-10-19T05:39:54.179Z",
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
		"liquidityUsd": 789953.84,
		"hash": "c231f23dc11dec2f3b4d6dd10aabac49843218676531f5307709341526d5468f"
	},
	{
		"id": "ec7e2d7687c0",
		"ts": "2026-10-19T05:39:54.454Z",
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
		"liquidityUsd": 35286923.12,
		"hash": "ec7e2d7687c0c151309ace1a66ad0b2b9d17d54bd7653983fe54c2edea2ae1b4"
	},
	{
		"id": "cf6f6e462c87",
		"ts": "2026-10-19T05:39:54.706Z",
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
		"liquidityUsd": 4661441.74,
		"hash": "cf6f6e462c87b741ec8f5c373d86ca7b41cbf63988bc44ceaa28ba4a5b8507d7"
	},
	{
		"id": "66576f031cbf",
		"ts": "2026-10-19T05:39:54.953Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1132981.41,
		"hash": "66576f031cbf3bac97f3a0a0f5baeeb67f9d75552b9ba521634fb23770f741b7"
	},
	{
		"id": "c0e107930b59",
		"ts": "2026-10-19T05:39:55.220Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35286923.38,
		"hash": "c0e107930b597ed61e42a5dff69e1bf97ce1c73d2c2225041654dae9ec1c36a2"
	},
	{
		"id": "eb7b0a29bacf",
		"ts": "2026-10-19T05:39:55.536Z",
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
		"liquidityUsd": 2925506.57,
		"hash": "eb7b0a29bacfdf7a31ea89c36c61246e4642a9b1e363e00e03cf1d1f566f52b4"
	},
	{
		"id": "7734628bd2d3",
		"ts": "2026-10-19T05:39:55.807Z",
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
		"liquidityUsd": 1758567.06,
		"hash": "7734628bd2d3cc86eacf400c1b542d928d9d3998e10da43fbfea87f05077b04f"
	},
	{
		"id": "44a415f6da1a",
		"ts": "2026-10-19T05:39:56.049Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1331944.7,
		"hash": "44a415f6da1a985100eae8596487e55e689beaa2a1f96b35bf7c890e3e63dabf"
	},
	{
		"id": "81e11b97dba2",
		"ts": "2026-10-19T05:39:56.278Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 446965.58,
		"hash": "81e11b97dba20a5c0ba346cf68ec51bf25f99a49e20e8f005c9c7e88e6c7464d"
	},
	{
		"id": "ef55269cea8c",
		"ts": "2026-10-19T05:39:56.511Z",
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
		"liquidityUsd": 3196968.17,
		"hash": "ef55269cea8c590cc7e592d008ca561f7116843be006d6563ca2c5a4303bf0d7"
	},
	{
		"id": "1bf956149095",
		"ts": "2026-10-19T05:39:56.743Z",
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
		"liquidityUsd": 17398307.59,
		"hash": "1bf956149095a687c8dddc5b672f0d5e7c7bbb526c1a1a6ebbdb1cd3cd116b16"
	},
	{
		"id": "149ef0e84963",
		"ts": "2026-10-19T05:39:56.970Z",
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
		"liquidityUsd": 1291504.02,
		"hash": "149ef0e84963a7ba23a03d6277384848a252d5cd2e35298b0f4e1ec0279c1409"
	},
	{
		"id": "eed8b4b860c6",
		"ts": "2026-10-19T05:39:57.208Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 186795.85,
		"hash": "eed8b4b860c6efd238914d731751ffe85e9b03d9a596c3bdffe151ba68cab9ff"
	},
	{
		"id": "a5a7dfccac63",
		"ts": "2026-10-19T05:39:57.439Z",
		"symbol": "Paper",
		"token": "0x3E199F015ea827F27C2671f8EaE516b8944FFB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10199548,
		"hash": "a5a7dfccac6379a860c871fa7c3f04ad094f5d7e6b11d20a6b23d2d6217aebee"
	},
	{
		"id": "bb7a6d10e446",
		"ts": "2026-10-19T05:39:57.666Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1996257.65,
		"hash": "bb7a6d10e4461fa46be74afef7f96c3ba91fab160a781a49f92afe21b6843e3b"
	},
	{
		"id": "24adb112778f",
		"ts": "2026-10-19T05:39:57.896Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1115767.88,
		"hash": "24adb112778ff9a16dec7f3492fbdedfae3dad6a0438bb780fb1bc0787ba506f"
	},
	{
		"id": "79f32fc46b61",
		"ts": "2026-10-19T00:45:11.704Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147268112.17,
		"hash": "79f32fc46b617e0017999a2e3d495c477fb60dc3b246994be4ec157503220692"
	},
	{
		"id": "63cd5cc5d217",
		"ts": "2026-10-19T00:45:12.024Z",
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
		"liquidityUsd": 18750242.32,
		"hash": "63cd5cc5d217f6a7691880bdd1135cb56728d718df2f8a376ec67083b7cd09b1"
	},
	{
		"id": "1707822c694e",
		"ts": "2026-10-19T00:45:12.233Z",
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
		"liquidityUsd": 783068.79,
		"hash": "1707822c694ed001c0d8843e606da5d5311601035d7acc8f2a21a725fdf1b953"
	},
	{
		"id": "fd9a08b159cb",
		"ts": "2026-10-19T00:45:12.442Z",
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
		"liquidityUsd": 35478640.8,
		"hash": "fd9a08b159cb789bdf44685289c0f65b3b2320684c8ed76ac94ba91f1f7595e2"
	},
	{
		"id": "34dc90e9d42e",
		"ts": "2026-10-19T00:45:12.662Z",
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
		"liquidityUsd": 4620301.46,
		"hash": "34dc90e9d42e6265f01308f844f2e09dd605e3f510526dea3d958d76068bc8dc"
	},
	{
		"id": "19a6f0f8a204",
		"ts": "2026-10-19T00:45:12.876Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1127808.47,
		"hash": "19a6f0f8a2046d788bd01ee442a0dfe89e2567525e3eef68e48283dc3bd13fd5"
	},
	{
		"id": "a6cde2c288d7",
		"ts": "2026-10-19T00:45:13.091Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35478640.8,
		"hash": "a6cde2c288d7ce12397f756efdb98264e87523bf480e915d1fc2fbca6df9a6f1"
	},
	{
		"id": "e39ebaa7e155",
		"ts": "2026-10-19T00:45:13.302Z",
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
		"liquidityUsd": 2902389.56,
		"hash": "e39ebaa7e15598f54f1e36dec265ab8565b04f060f36f6f019271f7a82a9b6d1"
	},
	{
		"id": "4d4b91296e26",
		"ts": "2026-10-19T00:45:13.500Z",
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
		"liquidityUsd": 1771655.7,
		"hash": "4d4b91296e26ea6249ae6c7a1eb76d5c656fcf61454b12becf7fb043700450d8"
	},
	{
		"id": "43d68d323318",
		"ts": "2026-10-19T00:45:13.700Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1336495.9,
		"hash": "43d68d323318ad9d2174a832264c9e1f2df0a51fd2b7ca93d327b664b9629601"
	},
	{
		"id": "6734fa431d55",
		"ts": "2026-10-19T00:45:13.919Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 468029.45,
		"hash": "6734fa431d55202b763bab8ac5d3c19b4b3d2536a0a0da66fa3fcf6736e5d36b"
	},
	{
		"id": "07e1314c3de0",
		"ts": "2026-10-19T00:45:14.125Z",
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
		"liquidityUsd": 3191006.87,
		"hash": "07e1314c3de012932bc077e6a5015ac078227985b230c494b9088da9f8185d37"
	},
	{
		"id": "8cb3279b3aab",
		"ts": "2026-10-19T00:45:14.333Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2001390.7,
		"hash": "8cb3279b3aabffa152268e08f448cde491a8d544d653a2764cf14e4985ec9968"
	},
	{
		"id": "407583d7bc90",
		"ts": "2026-10-19T00:45:14.548Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 171334.78,
		"hash": "407583d7bc90023d75c2b51b10fe192264ada0dc54ef542c724964b764256e3d"
	},
	{
		"id": "9f6efd54f393",
		"ts": "2026-10-19T00:45:14.775Z",
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
		"liquidityUsd": 16840119.24,
		"hash": "9f6efd54f3937cccf2529a65c6a8af3483dcafd1448ec51e1258d62a9c02e218"
	},
	{
		"id": "628fbffcc9f4",
		"ts": "2026-10-19T00:45:14.988Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 86102.8,
		"hash": "628fbffcc9f4c7e999a9b3c20eeee74cc355654d98cc7e804b30320561acaa4b"
	},
	{
		"id": "1f894904c1db",
		"ts": "2026-10-19T00:45:15.207Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1101841.41,
		"hash": "1f894904c1dbc6367c754f5fc8dd85d15e30c1f6054a1dd0555b0b6ae4623883"
	},
	{
		"id": "22f935c8b3ae",
		"ts": "2026-10-19T00:45:15.408Z",
		"symbol": "RSC",
		"token": "0xFbB75A59193A3525a8825BeBe7D4b56899E2f7e1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 175730.78,
		"hash": "22f935c8b3aee6d60eb72ff1fc4c662f372d2f70455497d9f4f230a4cdebef8f"
	},
	{
		"id": "08e72c148879",
		"ts": "2026-10-18T22:43:58.121Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146447390.25,
		"hash": "08e72c148879a0c73dabe5c04cf16ce8344f444520c518fc91d206f3f1de7aa8"
	},
	{
		"id": "6895f1b76261",
		"ts": "2026-10-18T22:43:58.507Z",
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
		"liquidityUsd": 18078739.46,
		"hash": "6895f1b76261ef3da00c21edf95ed0cb8971fce5901309efafd31db689a15df5"
	},
	{
		"id": "3a4f4c40c298",
		"ts": "2026-10-18T22:43:58.714Z",
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
		"liquidityUsd": 758506,
		"hash": "3a4f4c40c298dcdee1c449dfc0ccf4a58d9b4e40b93219d2be01f1f34e099df5"
	},
	{
		"id": "827db38ab4b9",
		"ts": "2026-10-18T22:43:58.918Z",
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
		"liquidityUsd": 35381856.63,
		"hash": "827db38ab4b9ebd3c18d49feb0e90342034e725b4ba88cc052c51a5d684d932c"
	},
	{
		"id": "56e0c057cfba",
		"ts": "2026-10-18T22:43:59.133Z",
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
		"liquidityUsd": 4570301.17,
		"hash": "56e0c057cfba2b4e80e2e673cb495e344d61e411984437dbf5124776a88c17c6"
	},
	{
		"id": "e6e1e3f10200",
		"ts": "2026-10-18T22:43:59.339Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1114384.67,
		"hash": "e6e1e3f10200de8f40106c52ba46ea5a2dd5f3cf6dd3b986e080293108170a03"
	},
	{
		"id": "305cd9a63dc1",
		"ts": "2026-10-18T22:43:59.534Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35381856.63,
		"hash": "305cd9a63dc1a9737f3a4a23749d73f1e59c99606ac1d7346e8d16f9b8973867"
	},
	{
		"id": "e08571d08229",
		"ts": "2026-10-18T22:43:59.752Z",
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
		"liquidityUsd": 2878444.13,
		"hash": "e08571d08229b9abe62d7fd4c72ac7dc675ce23d570e3e7b9eb2dca2cc0a4c5a"
	},
	{
		"id": "d86b67bb6b18",
		"ts": "2026-10-18T22:44:00.113Z",
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
		"liquidityUsd": 1764697.02,
		"hash": "d86b67bb6b181ea9620306674d810ae4b53a104e30d844a9ca3816e2effe002f"
	},
	{
		"id": "ec7120407efc",
		"ts": "2026-10-18T22:44:00.330Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1314589.29,
		"hash": "ec7120407efcc1aaa798c93dc3c0b1ea9c4bb4bf90577fa2f811d6a425d23a97"
	},
	{
		"id": "60a0f05f2943",
		"ts": "2026-10-18T22:44:00.556Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 474805.04,
		"hash": "60a0f05f2943226e4619f6680750bf0fadf3ecaee4fc690243f8bebf598b41e6"
	},
	{
		"id": "a127492ff352",
		"ts": "2026-10-18T22:44:01.128Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3123862.81,
		"hash": "a127492ff352eda180f306cb06bf8c0cf5260d5ce857b3050cb49b41d0061b9b"
	},
	{
		"id": "7cb5dc76bdaa",
		"ts": "2026-10-18T22:44:01.398Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1961018.36,
		"hash": "7cb5dc76bdaac798fad014a514f1652f40f62a5aec48a5d8dba13e0fcca6e636"
	},
	{
		"id": "9dfaf081e0b8",
		"ts": "2026-10-18T22:44:01.632Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 169537.72,
		"hash": "9dfaf081e0b8e27d7ca2f79abd91a12d692dc6478ad61009ae2e49178603e548"
	},
	{
		"id": "413bf56d12a8",
		"ts": "2026-10-18T22:44:01.880Z",
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
		"liquidityUsd": 16708929.9,
		"hash": "413bf56d12a8af7624286afe879c1172de430f35a1b182c2129ed0109ce0442e"
	},
	{
		"id": "e31d91ab8ee6",
		"ts": "2026-10-18T22:44:02.132Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"volume_liquidity_anomaly",
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 89551.19,
		"hash": "e31d91ab8ee6c9619f93dadce7d063f23a795a8791b9cdcb250f78bc146da359"
	},
	{
		"id": "58ca413347ef",
		"ts": "2026-10-18T22:44:02.414Z",
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
		"liquidityUsd": 1092642.8,
		"hash": "58ca413347efbbbbd5d4e4dbee2bd46385fcb238ae406bc7926c7a547c197293"
	},
	{
		"id": "5b4a00903f43",
		"ts": "2026-10-18T22:44:02.666Z",
		"symbol": "Paper",
		"token": "0x3E199F015ea827F27C2671f8EaE516b8944FFB07",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 10202176.06,
		"hash": "5b4a00903f432b37bcefce5791e771fdf3c8f4f7a320be87385d4d41bee02599"
	},
	{
		"id": "acab457ec9fb",
		"ts": "2026-10-18T20:01:35.140Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 143892589.96,
		"hash": "acab457ec9fb06dc5a82fb9fef503550e329e7d349509b441b5be21073645897"
	},
	{
		"id": "10bb0b9aca28",
		"ts": "2026-10-18T20:01:35.633Z",
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
		"liquidityUsd": 17676094.45,
		"hash": "10bb0b9aca2801e1e2f902a51eb0c26f183377127ba89c8ad835f400fc97e914"
	},
	{
		"id": "297c09827a8a",
		"ts": "2026-10-18T20:01:35.904Z",
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
		"liquidityUsd": 758506,
		"hash": "297c09827a8abc071b115fc022725a44ae63dc3cbab851c002ad1f0abfcf5511"
	},
	{
		"id": "637e6a142551",
		"ts": "2026-10-18T20:01:36.152Z",
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
		"liquidityUsd": 40432710.56,
		"hash": "637e6a142551fc7e589740c1e49993bdadcefde655671d2ab37f72afead78528"
	},
	{
		"id": "7a2a95779dae",
		"ts": "2026-10-18T20:01:36.399Z",
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
		"liquidityUsd": 4456354.02,
		"hash": "7a2a95779daefb0d7b639fc885d33b6623c6df6b88f013276729d7d4af02389f"
	},
	{
		"id": "f34c1c1035cb",
		"ts": "2026-10-18T20:01:36.636Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1092481.45,
		"hash": "f34c1c1035cb672f22829c5f0b67efa22feaae15d6364b21a81b78588b5912d1"
	},
	{
		"id": "2bb021ef3931",
		"ts": "2026-10-18T20:01:36.938Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 40432721.51,
		"hash": "2bb021ef3931d53a53a6844bf36087d4a0c4ae68283ae90739205d4c66528f8e"
	},
	{
		"id": "6281d3fdd045",
		"ts": "2026-10-18T20:01:37.206Z",
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
		"liquidityUsd": 2814824.49,
		"hash": "6281d3fdd045f3d4b31529fe905c45a03dd9e7b7586e99f7330830799a64279c"
	},
	{
		"id": "b750acd14c4b",
		"ts": "2026-10-18T20:01:37.461Z",
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
		"liquidityUsd": 1728521.77,
		"hash": "b750acd14c4b0fecb0602b0d21188b5cb4132aa637537a3ce7b155a8a1ad7c47"
	},
	{
		"id": "2a4f07ebe031",
		"ts": "2026-10-18T20:01:37.700Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1284656.8,
		"hash": "2a4f07ebe031d19991c831dcfe26fc2acdb3dd06ec4ea1692935aab0f54c38d6"
	},
	{
		"id": "c1abffa50266",
		"ts": "2026-10-18T20:01:37.936Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 477575.77,
		"hash": "c1abffa502661d2037707030eadceb50a8a3acc8a5ddb80a752e7085bb198891"
	},
	{
		"id": "4a5f00e7eb80",
		"ts": "2026-10-18T20:01:38.173Z",
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
		"liquidityUsd": 3110458.66,
		"hash": "4a5f00e7eb80bb9e81374274bf0f250df23b4586e1e5d28801a9312b7b18275d"
	},
	{
		"id": "c26790536f96",
		"ts": "2026-10-18T20:01:38.394Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1942932.8,
		"hash": "c26790536f96ca9c62ab72e93aea3a8e4133ba0095aa17f3157a53ea0403c4f6"
	},
	{
		"id": "f649af8f4d84",
		"ts": "2026-10-18T20:01:38.619Z",
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
		"liquidityUsd": 16042811.7,
		"hash": "f649af8f4d84bc96b09c0b4efef5e3fb728d89093d6eee3ddebe0a3032c072ad"
	},
	{
		"id": "92e38b88f29e",
		"ts": "2026-10-18T20:01:38.845Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3946680.76,
		"hash": "92e38b88f29e8004f4d9be70c3d9edb66abf1467eaf7a2e541849006852271fb"
	},
	{
		"id": "8c181283b084",
		"ts": "2026-10-18T20:01:39.180Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 171343.2,
		"hash": "8c181283b08496e787070f80073cdd724ca142aed7eec612bedd37a016b641f0"
	},
	{
		"id": "e1210ebb2bbb",
		"ts": "2026-10-18T20:01:39.403Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 89910.56,
		"hash": "e1210ebb2bbb9cfe8d18423a6efa61ee45d37c62419bbc5812efccfe58b210c5"
	},
	{
		"id": "e25a012a31ae",
		"ts": "2026-10-18T20:01:39.624Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1066963.61,
		"hash": "e25a012a31ae3743193635b02218b98cbacf9e3bea6843bf977a098ec184ab09"
	},
	{
		"id": "4dd2b7a80c9d",
		"ts": "2026-10-18T17:45:58.920Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145388088.24,
		"hash": "4dd2b7a80c9d11ff5de3a0c4f13a85b0b5023715caf0079d50c1917b7226d19a"
	},
	{
		"id": "ceee7e717de4",
		"ts": "2026-10-18T17:45:59.201Z",
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
		"liquidityUsd": 17898821.86,
		"hash": "ceee7e717de4bd052f24caebd25cb93a395e8dd12da415a18df660b0c633479d"
	},
	{
		"id": "9e9dbad67622",
		"ts": "2026-10-18T17:45:59.462Z",
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
		"liquidityUsd": 765663.62,
		"hash": "9e9dbad676225ce21ff0747fb0f9a35c29737cf2b49e3cae93b368cda83cacfd"
	},
	{
		"id": "47437ae8dc85",
		"ts": "2026-10-18T17:45:59.762Z",
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
		"liquidityUsd": 41874316.26,
		"hash": "47437ae8dc859975e2bbd308413086f1573fc6864e2e2c32c86caf141cb574f5"
	},
	{
		"id": "237e16915812",
		"ts": "2026-10-18T17:46:00.032Z",
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
		"liquidityUsd": 4542193.55,
		"hash": "237e16915812aa870c01a49ee8807fac660457560a3b4c834265a4de078631dc"
	},
	{
		"id": "53009586bbbb",
		"ts": "2026-10-18T17:46:00.435Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1131883.84,
		"hash": "53009586bbbb912a8f764a1b76126d8e9c6734f58978cc3a9bc5b96c61344675"
	},
	{
		"id": "90d7e499936b",
		"ts": "2026-10-18T17:46:00.765Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41874316.26,
		"hash": "90d7e499936b3b05da4ada5c31cca139a35ffc334bb2912561b06dddaac24a3b"
	},
	{
		"id": "64be355c7cc1",
		"ts": "2026-10-18T17:46:01.374Z",
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
		"liquidityUsd": 2853610.17,
		"hash": "64be355c7cc1d9affa6a1abd204989d1e15b58fafb29ab67ce65f3c73586ed8e"
	},
	{
		"id": "087d72a82c6d",
		"ts": "2026-10-18T17:46:01.701Z",
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
		"liquidityUsd": 1754506.84,
		"hash": "087d72a82c6da2b82f0986bc44e0382a4a479da15a4a9f160e0505f08140d965"
	},
	{
		"id": "fc5779488392",
		"ts": "2026-10-18T17:46:02.005Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1303876.6,
		"hash": "fc5779488392594eaf66ba1942a3a3337a7d88c783bed959ee16f8d12a4688c2"
	},
	{
		"id": "ac7f6e34350a",
		"ts": "2026-10-18T17:46:02.317Z",
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
		"liquidityUsd": 16294619.47,
		"hash": "ac7f6e34350ae8336961934e72611d74edf8b8d6e45976977bd75b7b9c94edb4"
	},
	{
		"id": "3c29816043b9",
		"ts": "2026-10-18T17:46:02.586Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3123518.29,
		"hash": "3c29816043b9f3066e2f6c569bc97fc0c61631de3389310fd5a129fcfd6b0dfb"
	},
	{
		"id": "1a493fe9ae2c",
		"ts": "2026-10-18T17:46:02.862Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 471885.26,
		"hash": "1a493fe9ae2ccb8fb6d0f9cb63e1f75623d373bb7c212caf3131e2ff375a310a"
	},
	{
		"id": "af53e145ed60",
		"ts": "2026-10-18T17:46:03.220Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1901442.54,
		"hash": "af53e145ed60d49b3b5858433e8578b23527a79496b5efea7e91d2ae4231c859"
	},
	{
		"id": "0bcd5382fc98",
		"ts": "2026-10-18T17:46:03.514Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 191344.12,
		"hash": "0bcd5382fc98cc1a09fcb65540ac33b59d4bae7f0d38897a69fc206e3b0e88b5"
	},
	{
		"id": "e708cb804846",
		"ts": "2026-10-18T17:46:03.752Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4008077.35,
		"hash": "e708cb804846f3bb117c71316eb07a0b878a5c2503c640b81e309e64a8d44db4"
	},
	{
		"id": "dce738e8b820",
		"ts": "2026-10-18T17:46:03.987Z",
		"symbol": "ICNT",
		"token": "0xE0Cd4cAcDdcBF4f36e845407CE53E87717b6601d",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 88003.45,
		"hash": "dce738e8b8202a21321562f4c45c35ccd59555adcada06cf64205f4a07cf320f"
	},
	{
		"id": "61b3ee447594",
		"ts": "2026-10-18T17:46:04.218Z",
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
		"liquidityUsd": 2295736.53,
		"hash": "61b3ee447594d77fc862e46031aefb9287ac4ae8348e73312bfaea8ad01f8d52"
	},
	{
		"id": "f1ad65552b10",
		"ts": "2026-10-18T17:46:04.449Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1078189.44,
		"hash": "f1ad65552b10d26b240527d891dba4ac82f50b9c1f69205b84ece912e229ad15"
	},
	{
		"id": "1ba5d0a5eea7",
		"ts": "2026-10-18T14:15:59.507Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 145460401.23,
		"hash": "1ba5d0a5eea78e16395e2b1931548185e86e95428ad39afbb1db3cc26b3bbd52"
	},
	{
		"id": "83638099d4bb",
		"ts": "2026-10-18T14:15:59.971Z",
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
		"liquidityUsd": 18040527.43,
		"hash": "83638099d4bb13fc41b394e770ee87488a7943b9436756112a3ea6fbe0045190"
	},
	{
		"id": "2aafa8ad9383",
		"ts": "2026-10-18T14:16:00.498Z",
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
		"liquidityUsd": 783231.79,
		"hash": "2aafa8ad93839860be1a50f42daac02f4463298499fb460cced85686fd87a9c4"
	},
	{
		"id": "08da5409d412",
		"ts": "2026-10-18T14:16:01.412Z",
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
		"liquidityUsd": 42075226.04,
		"hash": "08da5409d412cfc1531e57475d38899ed1ad5ce90d1a059cb6846a2acf77935c"
	},
	{
		"id": "aec46413c4ec",
		"ts": "2026-10-18T14:16:01.684Z",
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
		"liquidityUsd": 4578279.8,
		"hash": "aec46413c4ec0c86795d94d1ea0b8f9b9abe538254d2e434180d0e23214b8720"
	},
	{
		"id": "be0cbeb07990",
		"ts": "2026-10-18T14:16:01.939Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1119297.6,
		"hash": "be0cbeb07990a4ca4e354a35e37d988d941ffcec960aab9e258963eb6978215f"
	},
	{
		"id": "360253082e43",
		"ts": "2026-10-18T14:16:02.193Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42075226.04,
		"hash": "360253082e43d5acdaf1d1b466ed342503d324887fe86c09df3d343505373516"
	},
	{
		"id": "2af6ad288b1f",
		"ts": "2026-10-18T14:16:02.476Z",
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
		"liquidityUsd": 2877611.55,
		"hash": "2af6ad288b1fcbf2d0ea3cbee1103f041f5c5f13b377bacb67ae0d7684bb1db8"
	},
	{
		"id": "3b4e7ce6f2f2",
		"ts": "2026-10-18T14:16:02.965Z",
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
		"liquidityUsd": 1758814.65,
		"hash": "3b4e7ce6f2f2bad9688339841625f2a9cdfb76c4387a494b48fa6ec99cc11dfd"
	},
	{
		"id": "37878e112ab5",
		"ts": "2026-10-18T14:16:03.301Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1309737.52,
		"hash": "37878e112ab560ab5d30fcf73bfada106a95a1125594f9dce9e1da504e60a15a"
	},
	{
		"id": "7a4d5fb05e3a",
		"ts": "2026-10-18T14:16:03.762Z",
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
		"liquidityUsd": 16514961.11,
		"hash": "7a4d5fb05e3ad15d704690c6537c9dc8059eb7f1d33106829ef263877a16ffe3"
	},
	{
		"id": "95c49be71d75",
		"ts": "2026-10-18T14:16:04.008Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3147955.12,
		"hash": "95c49be71d75b86a3df4f31313826006f4aa511b273c7b5130dfe94f1cd9ebd7"
	},
	{
		"id": "876d93d6543f",
		"ts": "2026-10-18T14:16:04.238Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 187645.53,
		"hash": "876d93d6543f1d0839e7e0b0606998c703acba297844e733cdedad4c49ebbfaf"
	},
	{
		"id": "9574ba1d9b76",
		"ts": "2026-10-18T14:16:04.471Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4023094.46,
		"hash": "9574ba1d9b765572ea9c29b707f1f90a0ad70383231f15ee36a4d0750049491b"
	},
	{
		"id": "39dee32cd5a2",
		"ts": "2026-10-18T14:16:04.698Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4280594.31,
		"hash": "39dee32cd5a2fe635188ef14176b683ec28312593e88f99d7576be71f748dfc0"
	}
]
