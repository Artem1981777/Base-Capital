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
	"updatedAt": "2026-07-30T03:54:05.123Z",
	"tokensScored": 6342,
	"verdictsIssued": 6342,
	"safe": 5534,
	"risky": 491,
	"likelyRug": 317,
	"ticks": 386
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "036322bcb8a2",
		"ts": "2026-07-30T03:54:01.129Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111842126.41,
		"hash": "036322bcb8a248b5dacc287d5363593793f70a4805a80d50719173d288876bb7"
	},
	{
		"id": "dad81ab264bf",
		"ts": "2026-07-30T03:54:01.575Z",
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
		"liquidityUsd": 15784323.71,
		"hash": "dad81ab264bf39492bcfaaaa7be24fb02ce51e2f17f8961fb88ea877b4e358e2"
	},
	{
		"id": "dd304b5bf361",
		"ts": "2026-07-30T03:54:01.830Z",
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
		"liquidityUsd": 1127792.96,
		"hash": "dd304b5bf36124a8b1ca228db8a310e5260ba8b4a412af5796119ca392e8f8bc"
	},
	{
		"id": "9ec0cd7de69a",
		"ts": "2026-07-30T03:54:02.296Z",
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
		"liquidityUsd": 25629290.87,
		"hash": "9ec0cd7de69a3b1dc9c455a4eec11cd0e2d91ebbaecef5985d53d40cf9cf19ef"
	},
	{
		"id": "703c2516b40f",
		"ts": "2026-07-30T03:54:02.542Z",
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
		"liquidityUsd": 4876110.65,
		"hash": "703c2516b40faf0671747437dab68fd6e1a72ce9f0a57fca16e1a93d4fc29835"
	},
	{
		"id": "36ebeb00cccb",
		"ts": "2026-07-30T03:54:02.775Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 919556.08,
		"hash": "36ebeb00cccb87804ed9af6a13574288f606e438e10dcf6e1283ea873038de80"
	},
	{
		"id": "b1aba7dc06a9",
		"ts": "2026-07-30T03:54:03.007Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25629290.87,
		"hash": "b1aba7dc06a9f9a03e833da5cacd0d73a61ee295720fc0ef23f98b076675f12b"
	},
	{
		"id": "37f3d24cda0f",
		"ts": "2026-07-30T03:54:03.291Z",
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
		"liquidityUsd": 2438833,
		"hash": "37f3d24cda0fa274ed549c5768cd97f78ac3bdf5d374614511740c570fa390db"
	},
	{
		"id": "42355664b1ca",
		"ts": "2026-07-30T03:54:03.530Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1928319.57,
		"hash": "42355664b1ca9675e81b6b1f8b049f777848bfe1c90ec6a45f833d4b17fde01c"
	},
	{
		"id": "542d2c6d394b",
		"ts": "2026-07-30T03:54:03.777Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 641628.49,
		"hash": "542d2c6d394bef5ed27fa01728a0a115169450141857bec7b516d70984048b28"
	},
	{
		"id": "85ae0d6603f0",
		"ts": "2026-07-30T03:54:04.003Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1798139.49,
		"hash": "85ae0d6603f0bff778c05f7b49f31e58c9d2a4fdaaa97886c29630292abb2403"
	},
	{
		"id": "39f5670f6dae",
		"ts": "2026-07-30T03:54:04.223Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 702486.53,
		"hash": "39f5670f6dae11334460bf723673e462d4f9bfb2b93e00bbac8eab6c28f35e9d"
	},
	{
		"id": "6c0b2b93a806",
		"ts": "2026-07-30T03:54:04.443Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4435176.49,
		"hash": "6c0b2b93a806a4e9055618aa5525b9e5d9fa69e1a55f3b15f83e2fbfa683bcaa"
	},
	{
		"id": "a922ddcd1a2d",
		"ts": "2026-07-30T03:54:04.664Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 463719.87,
		"hash": "a922ddcd1a2d1149e721c3c76866e6b8e9d55cc6bef29d041b3a7d601ded3ba4"
	},
	{
		"id": "f2da82f77377",
		"ts": "2026-07-30T03:54:04.893Z",
		"symbol": "Totem",
		"token": "0x0F8ac22B85076F9BfE0b93Cc49FB6426CB150F88",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 86478.14,
		"hash": "f2da82f7737724240ec180983b3c69aede350660d4cb1617692e1447279b3026"
	},
	{
		"id": "4b272f8005e8",
		"ts": "2026-07-30T03:54:05.123Z",
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
		"liquidityUsd": 1300513.71,
		"hash": "4b272f8005e8ce41c54b077fc700e00b28298ffea40a6e74d76adc7517dacfd8"
	},
	{
		"id": "ad8d43d8dbf4",
		"ts": "2026-07-30T00:05:41.079Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111832965.78,
		"hash": "ad8d43d8dbf4d842695dff2808f40e8a75172cd8adb68f3433260215b41a4446"
	},
	{
		"id": "696217f6c483",
		"ts": "2026-07-30T00:05:41.552Z",
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
		"liquidityUsd": 15773294.22,
		"hash": "696217f6c483c2ad15df4fd60b88b805b47342062f7e6d2bb2a29e34cbb09817"
	},
	{
		"id": "b0e9c88ed1a8",
		"ts": "2026-07-30T00:05:41.800Z",
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
		"liquidityUsd": 1105725.29,
		"hash": "b0e9c88ed1a8ff03e279860bab01ac37eb3d4d92261518a490c5a5027186219f"
	},
	{
		"id": "43b819a07663",
		"ts": "2026-07-30T00:05:42.040Z",
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
		"liquidityUsd": 25236659.54,
		"hash": "43b819a07663ac848536258e87dce53f869764b7a5454dfc3621129cde37cd9f"
	},
	{
		"id": "5da676f6c57a",
		"ts": "2026-07-30T00:05:42.278Z",
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
		"liquidityUsd": 4911588.58,
		"hash": "5da676f6c57a7ce10f6303edfe7f9006f6dfbd897aa1c06e90af23f727ced8b1"
	},
	{
		"id": "1305ce44eef2",
		"ts": "2026-07-30T00:05:42.521Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 908892.61,
		"hash": "1305ce44eef292c03518f865f17263a3e7409eaf29be0dab79e4f07def642a82"
	},
	{
		"id": "db011fe04019",
		"ts": "2026-07-30T00:05:42.761Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25236659.54,
		"hash": "db011fe0401951647dccc7dc28005184cc00542db629c34f826d1a717d559a1c"
	},
	{
		"id": "c0420beef9ff",
		"ts": "2026-07-30T00:05:42.997Z",
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
		"liquidityUsd": 2423852.36,
		"hash": "c0420beef9ff87f4f6e58bd801338bb3ec36caf372f3ffcb87a74b6c5c6bf272"
	},
	{
		"id": "74aeea368414",
		"ts": "2026-07-30T00:05:43.257Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1816176.34,
		"hash": "74aeea36841439e87afbda1c46cd7e8043dc1abd184124a6c8f3545c082fcce3"
	},
	{
		"id": "b0ce36cb4f01",
		"ts": "2026-07-30T00:05:43.499Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 641061.49,
		"hash": "b0ce36cb4f013bfe8958565ada18eac27751c3327c1f23e2a3787685d7a8dde5"
	},
	{
		"id": "0f78346bbbb6",
		"ts": "2026-07-30T00:05:43.716Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1924654.84,
		"hash": "0f78346bbbb6aa4c5f13cf22c348ed4d7e845668debeace89bd726ff31481ea3"
	},
	{
		"id": "178aea4adffa",
		"ts": "2026-07-30T00:05:43.936Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 698948.59,
		"hash": "178aea4adffa6c435e6d5a4b8ca1906362d8dd3e456b5493b253f115b8c5aa03"
	},
	{
		"id": "a4b7d2432a51",
		"ts": "2026-07-30T00:05:44.151Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 464777.69,
		"hash": "a4b7d2432a51fba84c0e8fce0d3e2b7acf2d6e51e870ae30724c4b396e163674"
	},
	{
		"id": "4d7a9e78dae9",
		"ts": "2026-07-30T00:05:44.373Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4401184.15,
		"hash": "4d7a9e78dae975cf1296f1563a7ab8687052270fd08c567df000226bab34bcb8"
	},
	{
		"id": "2ef48e8ceb5d",
		"ts": "2026-07-30T00:05:44.591Z",
		"symbol": "Totem",
		"token": "0x0F8ac22B85076F9BfE0b93Cc49FB6426CB150F88",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 86258.13,
		"hash": "2ef48e8ceb5d5ca04fd6b32861d8705be099c72a94dd678344e38a7ae6c73926"
	},
	{
		"id": "101837cae90f",
		"ts": "2026-07-30T00:05:44.812Z",
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
		"liquidityUsd": 1300274.73,
		"hash": "101837cae90f9c94c49db768b2add790f21739cdf33ef3392e4851c600457267"
	},
	{
		"id": "dae1d4c2222e",
		"ts": "2026-07-30T00:05:45.028Z",
		"symbol": "PIPEDOG",
		"token": "0xde2b3D68B593C1c9e0Cb6E55Cbf289CdF5a5CB07",
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
		"hash": "dae1d4c2222ef614acded821a6dc81d972e9c50e26ee5c21fde36584f2af6132"
	},
	{
		"id": "827e2f82f910",
		"ts": "2026-07-29T22:59:45.042Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111552509.13,
		"hash": "827e2f82f91065e66fd73d8de518e7a3911325c355715f13a41a88285e3b7a54"
	},
	{
		"id": "246bc46a4166",
		"ts": "2026-07-29T22:59:45.486Z",
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
		"liquidityUsd": 14792034.67,
		"hash": "246bc46a416680bf3e4f5b8605af151a2aa02f6b5b37f58189dea16a38a3ef0f"
	},
	{
		"id": "e5917ee22649",
		"ts": "2026-07-29T22:59:45.955Z",
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
		"liquidityUsd": 1112941.99,
		"hash": "e5917ee22649b0b8b37cbcb5c04b46db1210425bce756b42e9d9303554c94d39"
	},
	{
		"id": "2848612eebc3",
		"ts": "2026-07-29T22:59:46.229Z",
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
		"liquidityUsd": 25435959.45,
		"hash": "2848612eebc3defe3ba1511a91fd623eeb84c30e21fec8e73af76ed9ed4ce1cd"
	},
	{
		"id": "7e69dd9c9029",
		"ts": "2026-07-29T22:59:46.471Z",
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
		"liquidityUsd": 4903440.02,
		"hash": "7e69dd9c9029ed5b27db37e6f827c272cca31eb247c2b01348a6bdfcc09daf99"
	},
	{
		"id": "66e75e077f94",
		"ts": "2026-07-29T22:59:46.709Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 903565.58,
		"hash": "66e75e077f94a3f776edca9dd2eb79e14656339e21daf945678aaa45bea5899e"
	},
	{
		"id": "f31f38920572",
		"ts": "2026-07-29T22:59:46.949Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25435959.45,
		"hash": "f31f389205723a2cc4aed55cc9b6cba1b3f5316d4d1b8cf164e0fc2eadd9f659"
	},
	{
		"id": "9bd56566c94f",
		"ts": "2026-07-29T22:59:47.200Z",
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
		"liquidityUsd": 2420910.21,
		"hash": "9bd56566c94f3e8261163deef6b150d61b8c44006906e27d2f48a0e466d11899"
	},
	{
		"id": "fc67d8068bd7",
		"ts": "2026-07-29T22:59:47.436Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1828425.45,
		"hash": "fc67d8068bd777d842878f6b45322e49ef331c11b7f0919faf083b48eca59c2d"
	},
	{
		"id": "00a98cf8b9e9",
		"ts": "2026-07-29T22:59:47.675Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1922588.88,
		"hash": "00a98cf8b9e93f8eaf121bc8235108b15905e4bfacfc4e56103b6b0459f3a751"
	},
	{
		"id": "784dd6445f0f",
		"ts": "2026-07-29T22:59:47.900Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 640099.37,
		"hash": "784dd6445f0fb41f9f7aa0ae04c56d42be0139e4954522ee52bd8324abb165d5"
	},
	{
		"id": "448c2f455eb8",
		"ts": "2026-07-29T22:59:48.122Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 702261.78,
		"hash": "448c2f455eb8d9524a1dbad21726ef5b7d202e3780f7dd68ed9015224161e8c5"
	},
	{
		"id": "11558c8be618",
		"ts": "2026-07-29T22:59:48.345Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4395705.34,
		"hash": "11558c8be6181bded5a4b8fd686ffc39973e3d8dcbb02af011bdc601287c4cbd"
	},
	{
		"id": "11155163c65e",
		"ts": "2026-07-29T22:59:48.569Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 417695.95,
		"hash": "11155163c65ecd10fda666425142f0f672965593aca9ba1e25a04317d435cbfb"
	},
	{
		"id": "e4b584e42276",
		"ts": "2026-07-29T22:59:48.791Z",
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
		"liquidityUsd": 1313979.54,
		"hash": "e4b584e4227652b041997c191bc75f0d0cccba940499b90a57329a73ca3df205"
	},
	{
		"id": "4d5440e633a8",
		"ts": "2026-07-29T22:59:49.014Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 527370.75,
		"hash": "4d5440e633a8760d64bdc581b624d7ac3a6d7eb1a1431299811f9c0d546dd146"
	},
	{
		"id": "0d06d7f1dc92",
		"ts": "2026-07-29T21:57:23.980Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111002692.43,
		"hash": "0d06d7f1dc92f4872edf3a21f43365457f6d678fe1cdf6c94d68b1b3ea8ab30f"
	},
	{
		"id": "2075a4143086",
		"ts": "2026-07-29T21:57:24.522Z",
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
		"liquidityUsd": 16863926.16,
		"hash": "2075a41430866dc185a17e8e3cd452b7ec7162ec4b83d502541222f8ceea3810"
	},
	{
		"id": "f6bea9a1fc88",
		"ts": "2026-07-29T21:57:24.894Z",
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
		"liquidityUsd": 1112741.08,
		"hash": "f6bea9a1fc883647266054a2085fdfdaac9f48ae2d1734f8770bc727efb26ff6"
	},
	{
		"id": "1c9a0d95b7aa",
		"ts": "2026-07-29T21:57:25.273Z",
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
		"liquidityUsd": 25262940.51,
		"hash": "1c9a0d95b7aa1f25874ace3739a0919cb6b8b7126064fcbe77f8dae4a814380e"
	},
	{
		"id": "2412860af47f",
		"ts": "2026-07-29T21:57:25.645Z",
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
		"liquidityUsd": 4843623.73,
		"hash": "2412860af47feabb9c6d0298ca038c9a880b79e4b79a2b9bc032017e3a7964c7"
	},
	{
		"id": "363946b9ac68",
		"ts": "2026-07-29T21:57:25.861Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904192.51,
		"hash": "363946b9ac68b1223c6deeba48bac227739289ab269c17f921445b99634e95bf"
	},
	{
		"id": "eee9ffb92182",
		"ts": "2026-07-29T21:57:26.068Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25262940.51,
		"hash": "eee9ffb92182d4f29eb7ccf99744290ba216d8e4325b78b4ec418a1ee823b800"
	},
	{
		"id": "1dd15ee4d000",
		"ts": "2026-07-29T21:57:26.446Z",
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
		"liquidityUsd": 2421075.38,
		"hash": "1dd15ee4d000a3a00b4cb1365d73e590f6206756f7d3c8d4289d6bc8faa4529a"
	},
	{
		"id": "1da5f924ca60",
		"ts": "2026-07-29T21:57:26.818Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 687083.72,
		"hash": "1da5f924ca600751e81b2d760fbcbee5adf38e5588f116e65805c6f781fa777a"
	},
	{
		"id": "1392ece5a017",
		"ts": "2026-07-29T21:57:27.023Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1898394.22,
		"hash": "1392ece5a017d6528080b0118a6cbcc30e9c02b8cf8ee6f46f9953a92de81ea2"
	},
	{
		"id": "f53f5e97861e",
		"ts": "2026-07-29T21:57:27.236Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1816884.94,
		"hash": "f53f5e97861eaec54e4bd4ea9512b4cdc20dd339d12fe35ab3f55d1ed7101919"
	},
	{
		"id": "b827660eb26b",
		"ts": "2026-07-29T21:57:27.442Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 635467.41,
		"hash": "b827660eb26bc4174202ca6c6cc03e3f357dfee71fb2ef73bdd6bccb65f21ca0"
	},
	{
		"id": "89db2c72e762",
		"ts": "2026-07-29T21:57:27.650Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1035953.91,
		"hash": "89db2c72e762c664c2660a07eccf8cd4fb76830f7e8ad6f9d229a856989fb262"
	},
	{
		"id": "19d9c8accada",
		"ts": "2026-07-29T21:57:27.859Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 414528.8,
		"hash": "19d9c8accada53ddb269679d3cfd24a45429e215381a555bd15f93867c91206e"
	},
	{
		"id": "3fceef69ade1",
		"ts": "2026-07-29T21:57:28.277Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4371459.82,
		"hash": "3fceef69ade1efbd1234890fe40a7e17125f910abfd423da72597649c4982879"
	},
	{
		"id": "3465a55dadb5",
		"ts": "2026-07-29T21:57:28.487Z",
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
		"liquidityUsd": 1283969.48,
		"hash": "3465a55dadb5583b41ad5226d69754f06915cdd5861058c5771b43a0302c6c10"
	},
	{
		"id": "b1a031aeec88",
		"ts": "2026-07-29T20:09:48.862Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111141827.43,
		"hash": "b1a031aeec883ffc4a149054a4d7f9125fe12d5b7bebba30c531cad06d6251c6"
	},
	{
		"id": "b284fa2b0111",
		"ts": "2026-07-29T20:09:49.107Z",
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
		"liquidityUsd": 16458994.72,
		"hash": "b284fa2b01119ca88807a9c25060bc7214ade1a4f38faa8ea59ad3d995eac208"
	},
	{
		"id": "aacc6c07595a",
		"ts": "2026-07-29T20:09:49.344Z",
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
		"liquidityUsd": 1109413.17,
		"hash": "aacc6c07595a26649d2454d6b62f35d43fc1d4c15e2ee866cfe4e5af9e5517ba"
	},
	{
		"id": "9384fa209fe8",
		"ts": "2026-07-29T20:09:49.585Z",
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
		"liquidityUsd": 25349956.46,
		"hash": "9384fa209fe8e27babff7b1e64d53d4309c47311c67df7505dac1c594bd2e43a"
	},
	{
		"id": "70676a3c01f4",
		"ts": "2026-07-29T20:09:50.031Z",
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
		"liquidityUsd": 4897786.13,
		"hash": "70676a3c01f4548be3f2b2d85673530ed08209ae4e7118a52e02338e88406cc4"
	},
	{
		"id": "aa00a6909e33",
		"ts": "2026-07-29T20:09:50.269Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 902610.18,
		"hash": "aa00a6909e33db841ec5e65a64f2f942965b09e6dc0208da14d4a4a677ad7ca3"
	},
	{
		"id": "6a8a0167fa31",
		"ts": "2026-07-29T20:09:50.530Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25349956.46,
		"hash": "6a8a0167fa31c72f42e61d7ec69d575d33b11bc91782007580b326a5a875ef83"
	},
	{
		"id": "a21896773285",
		"ts": "2026-07-29T20:09:50.769Z",
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
		"liquidityUsd": 2407313.48,
		"hash": "a21896773285322980f6a0d3fed79e10a74ab49c538b271e480c298b7fb81715"
	},
	{
		"id": "77910471a0ea",
		"ts": "2026-07-29T20:09:51.000Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 672537.21,
		"hash": "77910471a0ea9a4f845c5103515da80c0b938df52d8350b69314d13d923f4dc1"
	},
	{
		"id": "3d60efd8f020",
		"ts": "2026-07-29T20:09:51.238Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"modifiable_tax",
			"has_blacklist",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 441282.83,
		"hash": "3d60efd8f020da287aed9922a219f6d6f485a4da9e12c3113e12e83cb9a9b50a"
	},
	{
		"id": "b28d873fa428",
		"ts": "2026-07-29T20:09:51.460Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1808716.83,
		"hash": "b28d873fa42856d5b6d36c5b29f67b34d73002bc4233e79fb61de1126790db75"
	},
	{
		"id": "66eca6d54529",
		"ts": "2026-07-29T20:09:51.679Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 632472.08,
		"hash": "66eca6d545291e3924537a8f6b7ff05b033d478bad1bcd8ff2247d9f91316f6f"
	},
	{
		"id": "214780038a86",
		"ts": "2026-07-29T20:09:51.902Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1893066.47,
		"hash": "214780038a86fc482c85de51e505e2af6adf5427e8698fabfe50f5cfc8182bf8"
	},
	{
		"id": "ef673fdbf40e",
		"ts": "2026-07-29T20:09:52.122Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1041323.51,
		"hash": "ef673fdbf40e67daecb7c3dece45fa7fbeb336f6488354869fbc997ea3ed3eed"
	},
	{
		"id": "44a1759bf8a9",
		"ts": "2026-07-29T20:09:52.344Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4354600.89,
		"hash": "44a1759bf8a9b17285d087056ac21920caf92d9473c2f4045b38d542be9ed743"
	},
	{
		"id": "7527b4e4326b",
		"ts": "2026-07-29T18:04:05.489Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112272074.15,
		"hash": "7527b4e4326b7039273059645cdbcf71ece8df04de86ef2d68707889e370c356"
	},
	{
		"id": "6c0625fcbb68",
		"ts": "2026-07-29T18:04:05.781Z",
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
		"liquidityUsd": 13371317.07,
		"hash": "6c0625fcbb681b89bd5bdba939510a0c8769a20b2f6890d14048bc4caccca40d"
	},
	{
		"id": "4f2d84d46038",
		"ts": "2026-07-29T18:04:06.029Z",
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
		"liquidityUsd": 1136436.12,
		"hash": "4f2d84d460386796c75597a7c08229dafd9b782dbcc0ac8ab0071944f83a20ff"
	},
	{
		"id": "1041e45d8d0d",
		"ts": "2026-07-29T18:04:06.271Z",
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
		"liquidityUsd": 25697591.82,
		"hash": "1041e45d8d0d18502c16243a7440c734b19dc1553637e77501f4c5ebbdea8788"
	},
	{
		"id": "49a0974fec7d",
		"ts": "2026-07-29T18:04:06.512Z",
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
		"liquidityUsd": 4884725.94,
		"hash": "49a0974fec7d77e2ca724cd3e2a447ba841801dba4f4f6ec3c63fb97bca197b3"
	},
	{
		"id": "72b7724db30e",
		"ts": "2026-07-29T18:04:06.751Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 928301.23,
		"hash": "72b7724db30e6c76984cc618641a64555377f3333a1b703d92c0282d629820e7"
	},
	{
		"id": "fc9b938dc4e5",
		"ts": "2026-07-29T18:04:07.014Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25697591.82,
		"hash": "fc9b938dc4e5632a9e17154c25ca837353ba3349af0f1716dbd8acc94d98b6c4"
	},
	{
		"id": "cfaf8b54432e",
		"ts": "2026-07-29T18:04:07.256Z",
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
		"liquidityUsd": 2460482.4,
		"hash": "cfaf8b54432e18add0c31c25353190fc339e7d6f9ed6a304617aa67a0ff30d43"
	},
	{
		"id": "c184bf7b9070",
		"ts": "2026-07-29T18:04:07.497Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1844112.63,
		"hash": "c184bf7b90705bb8fb5a04e034c2dd4ab0cef4963c3d31be65c0b36d117e00d5"
	},
	{
		"id": "5134124a11cf",
		"ts": "2026-07-29T18:04:07.728Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 523723.9,
		"hash": "5134124a11cfa6c8c26ee60cba950972786aabf39366cb129c922b4d64106175"
	},
	{
		"id": "b3e8ea63aacc",
		"ts": "2026-07-29T18:04:07.951Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 677931.54,
		"hash": "b3e8ea63aacc1df88d2eccc49a2151925f424140f62be80f860d16a24dc8d2b6"
	},
	{
		"id": "a9cf7193808d",
		"ts": "2026-07-29T18:04:08.220Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1054589.93,
		"hash": "a9cf7193808d607e45a4fa234088afcb67779d5b830c7a417ea38cc1917e7f31"
	},
	{
		"id": "c206d8b3ab30",
		"ts": "2026-07-29T18:04:08.443Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 644477.37,
		"hash": "c206d8b3ab3040a028d8736b06a15346ece258036002d2873f3875b4aadf9185"
	},
	{
		"id": "faecb85968a9",
		"ts": "2026-07-29T18:04:08.666Z",
		"symbol": "Fren",
		"token": "0xFF0C532FDB8Cd566Ae169C1CB157ff2Bdc83E105",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 439186.44,
		"hash": "faecb85968a90af007c78f1b333b0645dcf04337f8225b41c3882a24506455f3"
	},
	{
		"id": "2cc1077936f4",
		"ts": "2026-07-29T18:04:08.886Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9899549.17,
		"hash": "2cc1077936f41808c4e11bbd9b871b8b578b2e84752c34508c36ee6b503de1c4"
	},
	{
		"id": "9761a4eb78a2",
		"ts": "2026-07-29T16:18:28.695Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111212611.94,
		"hash": "9761a4eb78a22d375950f0756fdca0c22a08be59fd586cee895e93c8a2040dae"
	},
	{
		"id": "99b170ec479e",
		"ts": "2026-07-29T16:18:29.019Z",
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
		"liquidityUsd": 16841863,
		"hash": "99b170ec479e21a9d5f5266bf15998f1a7beb85220793c712ac3fbc170a937ab"
	},
	{
		"id": "90ee3b7e258e",
		"ts": "2026-07-29T16:18:29.258Z",
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
		"liquidityUsd": 1102290.05,
		"hash": "90ee3b7e258e43225d7ccc85a83c5d5331adf3844862206a483a40855a91aa47"
	},
	{
		"id": "fc934bff07f0",
		"ts": "2026-07-29T16:18:29.492Z",
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
		"liquidityUsd": 25428538.17,
		"hash": "fc934bff07f0a73ad5b504eeb475ef3f88f154f2c61fc111a3052d38dedfa234"
	},
	{
		"id": "5bdb52c26a78",
		"ts": "2026-07-29T16:18:29.728Z",
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
		"liquidityUsd": 4878022.61,
		"hash": "5bdb52c26a7862d762e66c1b8dc6b1b791fe2044b237968a6f5b20061fa11bb7"
	},
	{
		"id": "179261fa8e54",
		"ts": "2026-07-29T16:18:29.962Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 908904.94,
		"hash": "179261fa8e5472db897e97e1581c274c938c106cb5c3290d3234a63de5bacf1c"
	},
	{
		"id": "d6e2f439a07c",
		"ts": "2026-07-29T16:18:30.194Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25428538.17,
		"hash": "d6e2f439a07c25b345590ccfeaa34f14a3ebb19bc896c1379e714ff068d9e8c6"
	},
	{
		"id": "893cb613f9e6",
		"ts": "2026-07-29T16:18:30.432Z",
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
		"liquidityUsd": 2403085.49,
		"hash": "893cb613f9e63b7257409cc251ad18669e9092aad556a2cf45bda50c71936c0e"
	},
	{
		"id": "6ecceee763d9",
		"ts": "2026-07-29T16:18:30.675Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1825507.26,
		"hash": "6ecceee763d9178cf8a3640e3af95e684744c8d59b31819b78a1efba45a57719"
	},
	{
		"id": "450b04db80cb",
		"ts": "2026-07-29T16:18:30.912Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 518853.14,
		"hash": "450b04db80cb057f8bd4af26d1b8ab44f541474117878da64c8541b9975f8b68"
	},
	{
		"id": "f4e5e91e3039",
		"ts": "2026-07-29T16:18:31.133Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 643016.92,
		"hash": "f4e5e91e3039cc26446f85287a7227b0bb22a92202a051b83d408749fa507c10"
	},
	{
		"id": "bdae1b47b3cb",
		"ts": "2026-07-29T16:18:31.354Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 635765.2,
		"hash": "bdae1b47b3cb3eaa5aca8558a1ecc43ba959d7ac97d8b20f85cb06cd1f627877"
	},
	{
		"id": "cc2f9357ec42",
		"ts": "2026-07-29T16:18:31.577Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1042820.24,
		"hash": "cc2f9357ec424425fdf6651a46939aedecfb3e73e3a7226f56b36198138f62c7"
	},
	{
		"id": "dbbf18be9f50",
		"ts": "2026-07-29T16:18:31.798Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9735311.35,
		"hash": "dbbf18be9f5000056e6ba0b3c6098907ea1afeb8299d92cfe4bda156c9427771"
	},
	{
		"id": "0d13c214ecd2",
		"ts": "2026-07-29T16:18:32.018Z",
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
		"liquidityUsd": 1373598.38,
		"hash": "0d13c214ecd2606fd3afaf06024b84423e30f7654b68a51af25efbd4f9ac2b6d"
	},
	{
		"id": "2153239c4c59",
		"ts": "2026-07-29T16:18:32.238Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4455653.71,
		"hash": "2153239c4c599fda2d9d6a11293a97348b9aca44ed60c1aaa1575b0da0c6e70b"
	},
	{
		"id": "7d11eac0286a",
		"ts": "2026-07-29T14:01:33.938Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111828503.97,
		"hash": "7d11eac0286ac097ca17426d066cdc0df67474ef90c75b6ce5147d92cf1a776d"
	},
	{
		"id": "d4cbf6a9fea5",
		"ts": "2026-07-29T14:01:34.398Z",
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
		"liquidityUsd": 15995417.01,
		"hash": "d4cbf6a9fea55594b974ead1ef5453d2e716d5b9058795857b37cee299515171"
	},
	{
		"id": "0d6344306bb8",
		"ts": "2026-07-29T14:01:34.728Z",
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
		"liquidityUsd": 1107398.82,
		"hash": "0d6344306bb8396abff6c572bd962ccda22a1a066cb26909cdba60844f775150"
	},
	{
		"id": "b06d1354fc7a",
		"ts": "2026-07-29T14:01:34.970Z",
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
		"liquidityUsd": 25473877.73,
		"hash": "b06d1354fc7a7d18e912f6fce8ffd6ff042d7c33d128524a0d9d86dc62e8ad3b"
	},
	{
		"id": "ed287076d2cd",
		"ts": "2026-07-29T14:01:35.212Z",
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
		"liquidityUsd": 4904904.53,
		"hash": "ed287076d2cd0ec9042e3ceae5ff3f62954e8f49d9ca4bc93ed1e4a51785d33d"
	},
	{
		"id": "015ef333142d",
		"ts": "2026-07-29T14:01:35.453Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 913851.87,
		"hash": "015ef333142ddc11a47f0d5069f30f0245eb2691598ba7383271e02e380031d2"
	},
	{
		"id": "2c09e2fa9a48",
		"ts": "2026-07-29T14:01:35.694Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25473877.73,
		"hash": "2c09e2fa9a482cd5fd7c90e70334dc525c2789d50a74489fa85de9a00e804ae8"
	},
	{
		"id": "1824e965fc1c",
		"ts": "2026-07-29T14:01:35.963Z",
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
		"liquidityUsd": 2363472.46,
		"hash": "1824e965fc1c178bf7d10a957d3930cef596d13d86d9b920f40133a615109fe1"
	},
	{
		"id": "3442cf6f1e16",
		"ts": "2026-07-29T14:01:36.203Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 516269.98,
		"hash": "3442cf6f1e16f40b48766ef91b84c368d3577d13e7350d3497b9f93970648a5a"
	},
	{
		"id": "a92dd15da117",
		"ts": "2026-07-29T14:01:36.446Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1797582.55,
		"hash": "a92dd15da1176a0ecc2d2a0939993f0f35b1b8dbb4867d5a72a18fae3c7cabdc"
	},
	{
		"id": "98197d3de7fd",
		"ts": "2026-07-29T14:01:36.669Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 642004.54,
		"hash": "98197d3de7fdfa0594edbad9052626d7f258705ee7ae92ce0b9a2167a8df76d9"
	},
	{
		"id": "c1ed0a776a78",
		"ts": "2026-07-29T14:01:36.894Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 671451.4,
		"hash": "c1ed0a776a78d6e0693c9fb03fa0dbab59c64969ea86d4307ea34d4d77f43c54"
	},
	{
		"id": "06a3903e376d",
		"ts": "2026-07-29T14:01:37.117Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1059490.93,
		"hash": "06a3903e376d8570afef374409b2b9b80f87d5efafa162bbddfb7e50c0521cee"
	},
	{
		"id": "651f3d2117fd",
		"ts": "2026-07-29T14:01:37.340Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9864081.96,
		"hash": "651f3d2117fd69c5631e9f81f86189bb898f5fcf25b2c07255a66c4002877d42"
	},
	{
		"id": "e80a1c5184c4",
		"ts": "2026-07-29T14:01:37.563Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4467138.94,
		"hash": "e80a1c5184c43414dbb56e44aa395b950fa4bab6f00fbfc0545c401c40835ff0"
	},
	{
		"id": "947a005b580b",
		"ts": "2026-07-29T14:01:37.785Z",
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
		"liquidityUsd": 1359525.36,
		"hash": "947a005b580b98011a1b145791cc98f77361f7e2100661080be47b0b562081ce"
	},
	{
		"id": "a89669a2bb42",
		"ts": "2026-07-29T11:22:26.618Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112352030.39,
		"hash": "a89669a2bb4254125dd432b54989365d38518ce471cff88c651cf70d7696efeb"
	},
	{
		"id": "bdd211d177d8",
		"ts": "2026-07-29T11:22:27.057Z",
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
		"liquidityUsd": 14001831.19,
		"hash": "bdd211d177d82a1da659a5147f0ba6b76dc7db6e929a0bb244cad2223a79d085"
	},
	{
		"id": "a9a30a932ba3",
		"ts": "2026-07-29T11:22:27.292Z",
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
		"liquidityUsd": 1111759.51,
		"hash": "a9a30a932ba36fdbe85faaea94e4d62056d3adac2a8c861b6f2d5b8f91c951f4"
	},
	{
		"id": "d731c851ec76",
		"ts": "2026-07-29T11:22:27.522Z",
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
		"liquidityUsd": 25724119.83,
		"hash": "d731c851ec76290942a75492eade66407da69c2f78925212f049dd8db8ed12b3"
	},
	{
		"id": "ad0077c8927c",
		"ts": "2026-07-29T11:22:27.756Z",
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
		"liquidityUsd": 4933043.93,
		"hash": "ad0077c8927c5bf8fe3c643d0464a36c2213140f2eb003e4edf89d7a2769e57a"
	},
	{
		"id": "a21c2585f6b8",
		"ts": "2026-07-29T11:22:27.986Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 932885.64,
		"hash": "a21c2585f6b873545ff1d6d3f1b6fbf6642dca5f36ead0796f4716bc903bb3c2"
	},
	{
		"id": "84485a889bac",
		"ts": "2026-07-29T11:22:28.224Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25724119.83,
		"hash": "84485a889bac72f0b6ccf93109c9574f908a12c10778f354ed01101d0e7ce0ad"
	},
	{
		"id": "408200ce2b09",
		"ts": "2026-07-29T11:22:28.458Z",
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
		"liquidityUsd": 2384753.93,
		"hash": "408200ce2b0997a543e22eeac120c823a4b53eb49be6c0e3e075cf69d99e1f9c"
	},
	{
		"id": "d3d352671cbf",
		"ts": "2026-07-29T11:22:28.691Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 526753.87,
		"hash": "d3d352671cbf0f3b6924e9d3c3e50c4c3f57e91a5aef0af2160b90b22b47c8da"
	},
	{
		"id": "d42920955b05",
		"ts": "2026-07-29T11:22:28.923Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1807611.71,
		"hash": "d42920955b05afaa1ea90763b536d3f436881f7ed41b3d2d4c7c1f19ac2095d4"
	},
	{
		"id": "e4bbfc329266",
		"ts": "2026-07-29T11:22:29.142Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 667365.46,
		"hash": "e4bbfc329266681fa5653d8cd593df712d4520688c1366d59eec349e0316a0e8"
	},
	{
		"id": "32cc236b3333",
		"ts": "2026-07-29T11:22:29.357Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9978727.27,
		"hash": "32cc236b333372a136634f478a899c2baf7dd71f808a7267cbf2821973781c8b"
	},
	{
		"id": "49d3d809a253",
		"ts": "2026-07-29T11:22:29.576Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 644053.2,
		"hash": "49d3d809a2537965da9f94f446747f1044f09c1ee88f87f5af7840659e9a1210"
	},
	{
		"id": "d8b80b0d106d",
		"ts": "2026-07-29T11:22:29.791Z",
		"symbol": "MOLT",
		"token": "0xB695559b26BB2c9703ef1935c37AeaE9526bab07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1059892.01,
		"hash": "d8b80b0d106db611e2c26e7020f44211b2353ad2e1d51d9562ac305a6e38074f"
	},
	{
		"id": "d51841035706",
		"ts": "2026-07-29T11:22:30.008Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4487965.82,
		"hash": "d518410357069aeb6ffbb5618884ba330d510753c3903c926287518486aa0ba0"
	},
	{
		"id": "b01e6123a3b6",
		"ts": "2026-07-29T11:22:30.222Z",
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
		"liquidityUsd": 1966167.14,
		"hash": "b01e6123a3b6ea8fbcdfe2c6aaf6c1da74ee0ed604124c611663bb15823ad84e"
	},
	{
		"id": "1f9b666dee96",
		"ts": "2026-07-29T08:33:55.874Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112285610.83,
		"hash": "1f9b666dee9614f75c980c018ae1e2d2cd9f441f29755626bd2ece91791873d8"
	},
	{
		"id": "2658123219e6",
		"ts": "2026-07-29T08:33:56.225Z",
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
		"liquidityUsd": 16234167.73,
		"hash": "2658123219e6e3684895b6a5bc179ac866bdbfbd8339d06f3a51443603874103"
	},
	{
		"id": "feed9abc6d12",
		"ts": "2026-07-29T08:33:56.438Z",
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
		"liquidityUsd": 1080543.85,
		"hash": "feed9abc6d126b7dcbca8b3a03aa56e3181b1dbdafee542c630392086c322532"
	},
	{
		"id": "6727bf13cf2c",
		"ts": "2026-07-29T08:33:56.638Z",
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
		"liquidityUsd": 25727983.25,
		"hash": "6727bf13cf2ca4b321ecb5e9d3706f2160b11763e9cc66c9dd48955bd70a2b9c"
	},
	{
		"id": "2b8440830e9d",
		"ts": "2026-07-29T08:33:56.836Z",
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
		"liquidityUsd": 4937832.23,
		"hash": "2b8440830e9d6a0d72f9079e295af83c9bf5ad964319e2405028b352bab9c057"
	},
	{
		"id": "b966743e8685",
		"ts": "2026-07-29T08:33:57.035Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 930533.06,
		"hash": "b966743e868523209664e97d58614e7c74e898f199e6495e6ff2335a16258a9b"
	},
	{
		"id": "53020e4f0ddf",
		"ts": "2026-07-29T08:33:57.233Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25727983.25,
		"hash": "53020e4f0ddf553343abd800e2826faf7db4c09ef43f4d2f16e0723c40f863ef"
	},
	{
		"id": "3226d05f444a",
		"ts": "2026-07-29T08:33:57.442Z",
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
		"liquidityUsd": 2434037.52,
		"hash": "3226d05f444a4339a897c7114b63c46873509839866414997c12ee9b2716ad9e"
	},
	{
		"id": "ac4e92d6714d",
		"ts": "2026-07-29T08:33:57.649Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 528053.48,
		"hash": "ac4e92d6714df4e5996a0423946ecbe04162800abf093a11073ccb9559461317"
	},
	{
		"id": "cf3f7c18a858",
		"ts": "2026-07-29T08:33:57.846Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1851911.7,
		"hash": "cf3f7c18a8589c88f2585469caf21087a6ba0fced71fbe77a0e65af2343c1da9"
	},
	{
		"id": "4f6db6004716",
		"ts": "2026-07-29T08:33:58.032Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 274524.06,
		"hash": "4f6db600471671c985577d953875559c625253fab47da76eca1999d82ef406bb"
	},
	{
		"id": "83b7a590cfff",
		"ts": "2026-07-29T08:33:58.229Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9864164.99,
		"hash": "83b7a590cffff1fa06de856930d1163d9a5979ea4e5e766a1f1ddb5999c3f499"
	},
	{
		"id": "b8055301ddd9",
		"ts": "2026-07-29T08:33:58.419Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4476141.53,
		"hash": "b8055301ddd9317295047bcc372deeadc8e103b8b665d0fe938afe84a94e3a28"
	},
	{
		"id": "1222fae5c32b",
		"ts": "2026-07-29T08:33:58.618Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 743461.26,
		"hash": "1222fae5c32b49a88420093bfb1290d703c4850d38724de34819fda82cad6871"
	},
	{
		"id": "894c48a7e735",
		"ts": "2026-07-29T08:33:58.809Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1968368.5,
		"hash": "894c48a7e735fa77e28ea2e4c0d5217cd1e745ae1b16a44501bb791be08da105"
	},
	{
		"id": "48afc9ad0734",
		"ts": "2026-07-29T08:33:59.007Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 670179.61,
		"hash": "48afc9ad073472c0e085723bd4e2fd86c482ab869a481aa6de137c7dda189399"
	},
	{
		"id": "73ef477141bd",
		"ts": "2026-07-29T05:48:03.619Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111729267.89,
		"hash": "73ef477141bd6885f46c4af5d6ea40d2f276f984f826ead74bc1eec8f627ab26"
	},
	{
		"id": "015c5ac97a1b",
		"ts": "2026-07-29T05:48:04.060Z",
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
		"liquidityUsd": 16135806.09,
		"hash": "015c5ac97a1b7ffd04dba7c8b4d64ae65d5d3af485b7d1c9a9ed4be005c7bb4c"
	},
	{
		"id": "59bb3d0b9838",
		"ts": "2026-07-29T05:48:04.300Z",
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
		"liquidityUsd": 1079586.98,
		"hash": "59bb3d0b98385db1685d797c17ee6ffd203628822f3daeb96448f361baa4aa52"
	},
	{
		"id": "44d6986ab3f2",
		"ts": "2026-07-29T05:48:04.536Z",
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
		"liquidityUsd": 25772973.33,
		"hash": "44d6986ab3f2a9112c8dabb03bd5ced86420e5da56de585d15ac3441c5732a5e"
	},
	{
		"id": "9bb787d07243",
		"ts": "2026-07-29T05:48:04.773Z",
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
		"liquidityUsd": 4945760.69,
		"hash": "9bb787d0724360d181a29823d27b2eb2fe5b8d7bc6f15dc007cde3955b4a23ab"
	},
	{
		"id": "801d9456ad1d",
		"ts": "2026-07-29T05:48:05.042Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 929827.57,
		"hash": "801d9456ad1da4ce978fde99531b146258bbf7738efbdeda21c530306ab6074a"
	},
	{
		"id": "d061eaec13d5",
		"ts": "2026-07-29T05:48:05.398Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25772969,
		"hash": "d061eaec13d5c366c46931e57cd6331a15033ba7f30a09610bd6e887007aa382"
	},
	{
		"id": "efeba483c812",
		"ts": "2026-07-29T05:48:05.638Z",
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
		"liquidityUsd": 2434052.61,
		"hash": "efeba483c8125af8498f3349d3a7236178b7ab5f9bf9be810e30750618b6ff99"
	},
	{
		"id": "12f1f3743f8f",
		"ts": "2026-07-29T05:48:05.905Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 525089.68,
		"hash": "12f1f3743f8f2bd7e79142919e19bb48df53b00a58c47ded3023ff32b73787f9"
	},
	{
		"id": "1b923d145922",
		"ts": "2026-07-29T05:48:06.158Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 283767.27,
		"hash": "1b923d1459223d59e676c79133c54bc1b7fe63ebb45dedf29dc770b81c3654ad"
	},
	{
		"id": "54f925f1a379",
		"ts": "2026-07-29T05:48:06.380Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1832226.94,
		"hash": "54f925f1a37990c5adc62a3263db2b76302cc663e6c5a8cd1fd7f826099f5db8"
	},
	{
		"id": "60c1a25bcfc0",
		"ts": "2026-07-29T05:48:06.599Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 743902.54,
		"hash": "60c1a25bcfc07a87dcc499296738aa7b014d8cd6e918b21fd6799d23f429c095"
	},
	{
		"id": "4935eca0b530",
		"ts": "2026-07-29T05:48:06.818Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9874146.14,
		"hash": "4935eca0b53005eb3b4cefe553322328f39ac7c51fbec252a814dfbe2fcd2c9f"
	},
	{
		"id": "eb093241a4d1",
		"ts": "2026-07-29T05:48:07.039Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2953532.42,
		"hash": "eb093241a4d17cf9d3947a1ba368ae4474260b34f4ade2cc4184c2a9156c1f5c"
	},
	{
		"id": "7f53f610cb28",
		"ts": "2026-07-29T05:48:07.260Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1907911.26,
		"hash": "7f53f610cb2805295e764d553c61f880232bd7571ea3fcd0ff726c11c6c99991"
	},
	{
		"id": "0f6b93a7f033",
		"ts": "2026-07-29T05:48:07.480Z",
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
		"liquidityUsd": 473036.51,
		"hash": "0f6b93a7f0332b222dbfea11f9b5cbdf9f314bd4f58ef9a7bad8b395f9b027f3"
	},
	{
		"id": "63418fdd6788",
		"ts": "2026-07-29T05:48:07.703Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1968900.38,
		"hash": "63418fdd6788556e19352ed211ec8658b0a9cbed5ce455d188911a94d6fc7a49"
	},
	{
		"id": "e41ffb52e9b0",
		"ts": "2026-07-29T02:13:20.233Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111605455.96,
		"hash": "e41ffb52e9b0de181395124adf32dd5a6f813b345953f7d17520f828bfc6c01a"
	},
	{
		"id": "8d90464f62c6",
		"ts": "2026-07-29T02:13:20.432Z",
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
		"liquidityUsd": 16506443.39,
		"hash": "8d90464f62c6f85a9b1794c87ec007cc7896bdc196a7b3fbd1e5d6b651511499"
	},
	{
		"id": "c9492fc380ec",
		"ts": "2026-07-29T02:13:20.624Z",
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
		"liquidityUsd": 1083151.65,
		"hash": "c9492fc380ece0cd2d260cef8f5fcb2fba71dd07b24f3c634d67892ab276fdbc"
	},
	{
		"id": "83efc96c68d2",
		"ts": "2026-07-29T02:13:20.847Z",
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
		"liquidityUsd": 25744036.13,
		"hash": "83efc96c68d213630eb9460252a7e06108265e5853e4735e418559a0504f513c"
	},
	{
		"id": "1722c6093159",
		"ts": "2026-07-29T02:13:21.038Z",
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
		"liquidityUsd": 4936880.61,
		"hash": "1722c6093159b2bcc328ce32a68e638591a29a826a5ee129218f5decfe648a5e"
	},
	{
		"id": "d073e6c01358",
		"ts": "2026-07-29T02:13:21.227Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 948710.39,
		"hash": "d073e6c0135811643bc6f35a4fb34b42991b470e602a55b1858d7cf4f9f77484"
	},
	{
		"id": "55f1b6f473e1",
		"ts": "2026-07-29T02:13:21.417Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25744036.13,
		"hash": "55f1b6f473e1247145255086b15c4e8dd866ea60cc22b1d5b6360b9d5b46f997"
	},
	{
		"id": "46ed7bbab2fd",
		"ts": "2026-07-29T02:13:21.632Z",
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
		"liquidityUsd": 2284711.84,
		"hash": "46ed7bbab2fdea136d660938a0c8a80ddf8455f1f517ea0614a80d04bd3e14e7"
	},
	{
		"id": "500c7b471bd1",
		"ts": "2026-07-29T02:13:21.827Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 526964.8,
		"hash": "500c7b471bd1190cf8cb1be265a95fda39e5b858df3e3af6bb0ac0cc896b1f01"
	},
	{
		"id": "73317fde1827",
		"ts": "2026-07-29T02:13:22.018Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 293932.79,
		"hash": "73317fde1827ae6512145126c32778bc3209a787bcb52be05543de7869505994"
	},
	{
		"id": "d4596745953d",
		"ts": "2026-07-29T02:13:22.201Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1825833.05,
		"hash": "d4596745953d85e6074922f0c30b472158d732ca1248576366b091e30d80ce5b"
	},
	{
		"id": "1a9a63cfcd8f",
		"ts": "2026-07-29T02:13:22.393Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 167012.48,
		"hash": "1a9a63cfcd8fc9f1f2fb7429297c89b004740548438356c43c1fba06f2a544ef"
	},
	{
		"id": "65fdfbf88a38",
		"ts": "2026-07-29T02:13:22.588Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1884627.36,
		"hash": "65fdfbf88a380262991eb2e114ad0cf7b0e7916fd60785e3d4a0baac4cd17db1"
	},
	{
		"id": "0dd2630302cd",
		"ts": "2026-07-29T02:13:22.788Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 707014.87,
		"hash": "0dd2630302cd9f08f6f36f7459925a1a933c495a08b33d1aad8a1af5c5532c38"
	},
	{
		"id": "10dd862e3e7c",
		"ts": "2026-07-29T02:13:22.967Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9835057.49,
		"hash": "10dd862e3e7c8374e4be05599406107380b8547731016bc8340d544a7f66ed23"
	},
	{
		"id": "f01d949f7922",
		"ts": "2026-07-29T02:13:23.253Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2924451.73,
		"hash": "f01d949f7922ae429a4c94b7054ebac2235c337b61aa693194cd00f49fb346b1"
	},
	{
		"id": "272a44bea62c",
		"ts": "2026-07-29T02:13:23.454Z",
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
		"liquidityUsd": 474400.71,
		"hash": "272a44bea62ccf887acab66557f0e95cc5f1d82c8e0b3622a703fe501a2af65f"
	},
	{
		"id": "6b0d1b965476",
		"ts": "2026-07-28T23:55:24.524Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111851168.85,
		"hash": "6b0d1b965476396a7553bff2e852657a6f24c7b547267845b2a98fe3b83c52eb"
	},
	{
		"id": "cb2be85de563",
		"ts": "2026-07-28T23:55:25.029Z",
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
		"liquidityUsd": 16884427.08,
		"hash": "cb2be85de563fa55e90e3683e0540b9bb368663063c2436a3a0e00e098b36285"
	},
	{
		"id": "e0405c90cd75",
		"ts": "2026-07-28T23:55:25.218Z",
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
		"liquidityUsd": 1082829.08,
		"hash": "e0405c90cd757607295dad408031ec5ebd17a6f52b07fc4f4a16ced3e19b8049"
	},
	{
		"id": "882949287ddb",
		"ts": "2026-07-28T23:55:25.609Z",
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
		"liquidityUsd": 26068349.39,
		"hash": "882949287ddbee962ef0e6b17424716dc3ac175a2c32ff258078ccff74c087c9"
	},
	{
		"id": "00c712f735e3",
		"ts": "2026-07-28T23:55:25.797Z",
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
		"liquidityUsd": 4953671.42,
		"hash": "00c712f735e343a430681744a7509811c73ab72d9167eb6c9b29b324bad1afef"
	},
	{
		"id": "521d969b1b8c",
		"ts": "2026-07-28T23:55:25.984Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 946579.74,
		"hash": "521d969b1b8ca6a629d01724149ee2540e519e083e16d56f98b871c8bb6bc934"
	},
	{
		"id": "eb47e26564a4",
		"ts": "2026-07-28T23:55:26.178Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26068349.39,
		"hash": "eb47e26564a4308540b937a29c29867d97400b1cf5ddade004619992ad8e7888"
	}
]
