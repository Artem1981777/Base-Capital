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
	"updatedAt": "2026-09-05T17:06:09.377Z",
	"tokensScored": 16266,
	"verdictsIssued": 16266,
	"safe": 13815,
	"risky": 1206,
	"likelyRug": 1245,
	"ticks": 934
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "53828e6a2fc9",
		"ts": "2026-09-05T17:06:03.957Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116628069.25,
		"hash": "53828e6a2fc97462a3c14941c3c06bdb3e0f5596a5195fcea3d19126f2465203"
	},
	{
		"id": "87c4d8c1d75f",
		"ts": "2026-09-05T17:06:04.486Z",
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
		"liquidityUsd": 16984941.79,
		"hash": "87c4d8c1d75fddf45a734a4e8ed387032422682d9c03663ef721a4cedfaf77b3"
	},
	{
		"id": "05609b14b80e",
		"ts": "2026-09-05T17:06:04.862Z",
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
		"liquidityUsd": 1030845.5,
		"hash": "05609b14b80e590ec9362436c17c3ec78c3fde8c847d3aba18166c387a34cb72"
	},
	{
		"id": "218cea509d3f",
		"ts": "2026-09-05T17:06:05.134Z",
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
		"liquidityUsd": 29790395.06,
		"hash": "218cea509d3f21b0c629307b196ba18b01124170fd72fb949f82d22e5dd65c5a"
	},
	{
		"id": "d5969d8901a1",
		"ts": "2026-09-05T17:06:05.496Z",
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
		"liquidityUsd": 4263725.38,
		"hash": "d5969d8901a1d6a1f097234c7bce41e2d055da70562a5dfaca7f9ac971aa7932"
	},
	{
		"id": "d2ff57f37691",
		"ts": "2026-09-05T17:06:05.791Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1186382.69,
		"hash": "d2ff57f376915def68abd6436f818bd9cf9102fa3dc0abd330dbd4720e83731e"
	},
	{
		"id": "97234977c0fb",
		"ts": "2026-09-05T17:06:06.079Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1153862.75,
		"hash": "97234977c0fbbc99bbe2e0a7cc3343648fcd9c7f68f3c441633dadeda1257c24"
	},
	{
		"id": "fc3152fa7bce",
		"ts": "2026-09-05T17:06:06.433Z",
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
		"liquidityUsd": 3082506.46,
		"hash": "fc3152fa7bce0b411a33070f884938823af6faf1cf2fd49e91f95aa4d593dacc"
	},
	{
		"id": "16548b2f72b6",
		"ts": "2026-09-05T17:06:06.725Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1184695.66,
		"hash": "16548b2f72b6b8eb9fc73bd6e081655169968155dc1890a06579f92b08b9688d"
	},
	{
		"id": "bc0c8fde345e",
		"ts": "2026-09-05T17:06:06.973Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 263982.4,
		"hash": "bc0c8fde345ec3f9bf70ab3c1387f0daf1cc632451e9408050a0daec78213e12"
	},
	{
		"id": "8423ea7111b2",
		"ts": "2026-09-05T17:06:07.207Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 213468.96,
		"hash": "8423ea7111b2a939b028302ee21a160095c2203710d81accb77547fb641f7afc"
	},
	{
		"id": "064ce890f29c",
		"ts": "2026-09-05T17:06:07.437Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1315506.13,
		"hash": "064ce890f29cc9a16c7ebdc0e82a493df7acd212325b5f3e5ceef0c44fd38a38"
	},
	{
		"id": "08c0b4dbbe97",
		"ts": "2026-09-05T17:06:07.669Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3305096.4,
		"hash": "08c0b4dbbe97787f482ef542a1f8378235ddab7cc8019b2a1bca25a09ee2aeae"
	},
	{
		"id": "399a16a3203f",
		"ts": "2026-09-05T17:06:07.907Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 857288.59,
		"hash": "399a16a3203f23be21eb1487813fab3d47e6539ebd91379ddc190b44d6a3d022"
	},
	{
		"id": "9c7188513ef4",
		"ts": "2026-09-05T17:06:08.143Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 177218.6,
		"hash": "9c7188513ef4d51b8000e6b71f0e4e5fd6391a0db3d77b330d51cb425d834802"
	},
	{
		"id": "d16d05c19c1e",
		"ts": "2026-09-05T17:06:08.378Z",
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
		"liquidityUsd": 563351.31,
		"hash": "d16d05c19c1e9c38d44ab192a6d430936bb9931618fb6fb2a57ff98ba4b33415"
	},
	{
		"id": "79b4b75213b9",
		"ts": "2026-09-05T17:06:08.611Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54092.54,
		"hash": "79b4b75213b9bfb2fcff6183f07f10fbadd18c75b8816fa698c51afb3293c7f4"
	},
	{
		"id": "369b38dbd3bd",
		"ts": "2026-09-05T17:06:08.911Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 142468.6,
		"hash": "369b38dbd3bd37cb040ee008b3da35414a7ef0196a90f4e1ae8d5caf33189853"
	},
	{
		"id": "c554844011d1",
		"ts": "2026-09-05T17:06:09.144Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1853651.96,
		"hash": "c554844011d157b59b196710e4fe9ade58f3ea0aa75894f8a740681d179cd773"
	},
	{
		"id": "d8d5c7cd0f45",
		"ts": "2026-09-05T17:06:09.377Z",
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
		"liquidityUsd": 916546.54,
		"hash": "d8d5c7cd0f458b20f2232abcae35c14d7ff5d9c37893d60af6d1cfbeb2b792be"
	},
	{
		"id": "2dd2ac508401",
		"ts": "2026-09-05T14:29:48.538Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116265438.71,
		"hash": "2dd2ac50840182f965087c97dc8ce04a3de0ab931f5de6d420bf031af16ce1da"
	},
	{
		"id": "cf4e7b7252e4",
		"ts": "2026-09-05T14:29:49.039Z",
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
		"liquidityUsd": 19128589.48,
		"hash": "cf4e7b7252e41cfc1dbb4b6e4da1cd8965d11b7e0d53fe47bfe778616a993cba"
	},
	{
		"id": "6570e54912b1",
		"ts": "2026-09-05T14:29:49.300Z",
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
		"liquidityUsd": 1025752.24,
		"hash": "6570e54912b1372de4ac1589202469d9c4e8f55bb7124e4eb53db8cec6932d37"
	},
	{
		"id": "f18586e0c400",
		"ts": "2026-09-05T14:29:49.558Z",
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
		"liquidityUsd": 29761534.69,
		"hash": "f18586e0c4002ce2f3f5d5806b535eaa2ddfd2d9212c4197b4034e89f37bc5bc"
	},
	{
		"id": "0446f0e8c2b8",
		"ts": "2026-09-05T14:29:49.808Z",
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
		"liquidityUsd": 4249277.29,
		"hash": "0446f0e8c2b84d643e957e72ca7db9fe4c7ab3a9b96294673a4b8cfacd32a41d"
	},
	{
		"id": "b5ac7f66a72e",
		"ts": "2026-09-05T14:29:50.083Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180818.57,
		"hash": "b5ac7f66a72e6e10db17e9d3c0de75975a45705d5e69246d9dbd606e1c2d9005"
	},
	{
		"id": "fa0280b3a928",
		"ts": "2026-09-05T14:29:50.336Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1182783.44,
		"hash": "fa0280b3a9287da03a72ff00a79617138ef21aa4cf56256081d6bb5b9059b31a"
	},
	{
		"id": "f16528949360",
		"ts": "2026-09-05T14:29:50.604Z",
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
		"liquidityUsd": 3055756.58,
		"hash": "f16528949360967bd46c017978c389a431eeaf8e4d0e6222f4304cc207a30339"
	},
	{
		"id": "f0c815fc2e3c",
		"ts": "2026-09-05T14:29:50.857Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1198046.34,
		"hash": "f0c815fc2e3c2dc8c6bd5a972f6bfc610faeb750d6b52437dfd859fde80ef604"
	},
	{
		"id": "932fac0dd28a",
		"ts": "2026-09-05T14:29:51.193Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 240496.01,
		"hash": "932fac0dd28abf1cefdd08252dda70197f4ca0af54a66d4cc4d4ecff80996753"
	},
	{
		"id": "de0c7fc59671",
		"ts": "2026-09-05T14:29:51.422Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 224642.18,
		"hash": "de0c7fc596717f29e79066dfa738a0c081906e13e733bdf6b933941897ccbb1c"
	},
	{
		"id": "6e829eb551b7",
		"ts": "2026-09-05T14:29:51.649Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3300452.75,
		"hash": "6e829eb551b7aad43eb2c6530edca517671b5620c6baf70b6735579852b31e58"
	},
	{
		"id": "d57e9249ed0b",
		"ts": "2026-09-05T14:29:51.875Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 175958.82,
		"hash": "d57e9249ed0b379a2e07215f5f97b13206d66c955950dc6e1c1317b152567421"
	},
	{
		"id": "7e0105208a98",
		"ts": "2026-09-05T14:29:52.102Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 857987.56,
		"hash": "7e0105208a9828a7f5972a64666863604492f26f357a94a31363dd6fdb624645"
	},
	{
		"id": "02a7f091f12e",
		"ts": "2026-09-05T14:29:52.330Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1282043.19,
		"hash": "02a7f091f12e1576111cbf92d7bf668ad223a5bcc7ec8c007a4a7fa39ff120bc"
	},
	{
		"id": "3dacdff27657",
		"ts": "2026-09-05T14:29:52.554Z",
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
		"liquidityUsd": 921907.18,
		"hash": "3dacdff27657db547160b4bdb5f4bbe8bbe906e53530730f75715e8a2a7adb64"
	},
	{
		"id": "9ecb3d70e307",
		"ts": "2026-09-05T14:29:52.783Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 154280.51,
		"hash": "9ecb3d70e3077c5250c9740abdba81551c6f67906374bb7737817c8615a3cc5c"
	},
	{
		"id": "4aa693c6aae7",
		"ts": "2026-09-05T14:29:53.008Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 147389.69,
		"hash": "4aa693c6aae7ea15191ff7ae98d8f0534510ab8de0e9fef51997ec101e70f79a"
	},
	{
		"id": "2904c993f790",
		"ts": "2026-09-05T14:29:53.234Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 990614.58,
		"hash": "2904c993f79043124d5f909ee7c472bc6e61fa1ea4d157cb3d91150a8a2e56d9"
	},
	{
		"id": "3f9cdc4b4c72",
		"ts": "2026-09-05T14:29:53.460Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 45473.73,
		"hash": "3f9cdc4b4c72b276e010787f25f671cdcc09159bc7abda94bf494d0c22d1741e"
	},
	{
		"id": "2991ee3c626b",
		"ts": "2026-09-05T11:35:02.332Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116248320.48,
		"hash": "2991ee3c626b283b95b0a74d9f7c05c7f872d6385c950c7309913ea15cfe639f"
	},
	{
		"id": "f75cc4566d1e",
		"ts": "2026-09-05T11:35:02.578Z",
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
		"liquidityUsd": 18698211.49,
		"hash": "f75cc4566d1e5a4f978d7f573f022f101bd80e2a8617e2f895262b3ab83aa61d"
	},
	{
		"id": "69ee592e9933",
		"ts": "2026-09-05T11:35:02.833Z",
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
		"liquidityUsd": 1025013.84,
		"hash": "69ee592e9933ed753d3f5043f648040215e505dca4c309966ce1392b03b5edfa"
	},
	{
		"id": "6f6821652866",
		"ts": "2026-09-05T11:35:03.084Z",
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
		"liquidityUsd": 29791602.58,
		"hash": "6f6821652866885e4ae390831e206be0a91318e882fff5e6be21a793d7545b00"
	},
	{
		"id": "467cd72d3e16",
		"ts": "2026-09-05T11:35:03.323Z",
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
		"liquidityUsd": 4220323.1,
		"hash": "467cd72d3e16aa986e81346cd7dbed51aab46cacc15ca2b5fd747895b0d28438"
	},
	{
		"id": "597ced5c46ac",
		"ts": "2026-09-05T11:35:03.610Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1171949.69,
		"hash": "597ced5c46ac8e565684d61fadfa8f78f8a644aa83f878e586964b67aed5bf9a"
	},
	{
		"id": "348202aec2f2",
		"ts": "2026-09-05T11:35:03.849Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2696046.62,
		"hash": "348202aec2f20d6bdd4ad7e29c2dc68f22344db5dedff6f9c31818358e90a07c"
	},
	{
		"id": "a183ca704c70",
		"ts": "2026-09-05T11:35:04.132Z",
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
		"liquidityUsd": 1531980.64,
		"hash": "a183ca704c703c0104b746adc72bb9112f5e244094773ca9a541b3a328f57ddb"
	},
	{
		"id": "2c5eba77da20",
		"ts": "2026-09-05T11:35:04.426Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1177880.74,
		"hash": "2c5eba77da2075ba3374af2ac4588b6e19a9115515fc55e793048c6185efb75f"
	},
	{
		"id": "04d1e518ee21",
		"ts": "2026-09-05T11:35:04.665Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 234963.54,
		"hash": "04d1e518ee21219cd96e73f7c2406845ea92001c196a62be5b52929751aa80c2"
	},
	{
		"id": "af0385a9831a",
		"ts": "2026-09-05T11:35:04.904Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3317639.52,
		"hash": "af0385a9831a3ca183ce632016d6ae36f15b9aaaf4c12feb8aee3eb4a2ec2dbe"
	},
	{
		"id": "281bbb7dd8ef",
		"ts": "2026-09-05T11:35:05.129Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 171749.43,
		"hash": "281bbb7dd8efa6092c974965ba04ea213e643703015713a8e305d0d6040de736"
	},
	{
		"id": "91c791bac062",
		"ts": "2026-09-05T11:35:05.353Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 851068.43,
		"hash": "91c791bac062142eeffab785eacae5ee10087257bce63d5061855acf4ccd73f5"
	},
	{
		"id": "591f678be33e",
		"ts": "2026-09-05T11:35:05.591Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1285784.38,
		"hash": "591f678be33ec4b421848d625d27a665c3bec2ce956b612433eee5a9275cd072"
	},
	{
		"id": "eaf8b7df0e36",
		"ts": "2026-09-05T11:35:05.816Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 195647.19,
		"hash": "eaf8b7df0e3614c4e1c838f9318b7907132c98c27141abfcfd21bedcdf775554"
	},
	{
		"id": "49d2095b2b3f",
		"ts": "2026-09-05T11:35:06.041Z",
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
		"liquidityUsd": 934306.03,
		"hash": "49d2095b2b3fe68ceedb1658e8f05e42ef5914cd80b8465f73e8a9748346a056"
	},
	{
		"id": "94be3f46fbba",
		"ts": "2026-09-05T11:35:06.280Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1844712.81,
		"hash": "94be3f46fbbad924be0f7561ca58b50c506ff082244b583ec0da33b8814718b9"
	},
	{
		"id": "d6ea7d6381fd",
		"ts": "2026-09-05T11:35:06.504Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 147968.81,
		"hash": "d6ea7d6381fd92744ba4bdfd714a6c7c51d9bc13761e91e096f3c3ac3b82bdd2"
	},
	{
		"id": "3c1a2b457954",
		"ts": "2026-09-05T11:35:06.740Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1012546.5,
		"hash": "3c1a2b457954b084b7c755ecb887dbe274f85f2e6b4a2989fa3a949c25e9b6e8"
	},
	{
		"id": "51623e5f25fe",
		"ts": "2026-09-05T07:21:35.103Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117410441.35,
		"hash": "51623e5f25fecf59578073da7a20c8ef8aa0ad7282289b08ab57b45e35b4c586"
	},
	{
		"id": "9b1c0c604261",
		"ts": "2026-09-05T07:21:35.372Z",
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
		"liquidityUsd": 18689934.08,
		"hash": "9b1c0c60426136e1db65b4da120ba005f3e28c963ca969b3da91e991c05fb304"
	},
	{
		"id": "750338f7c5dd",
		"ts": "2026-09-05T07:21:35.617Z",
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
		"liquidityUsd": 1030580.9,
		"hash": "750338f7c5dd00e62748c62df90c57e78d1cccfe4e517458f653456c7acc06ee"
	},
	{
		"id": "3f74cb2468bd",
		"ts": "2026-09-05T07:21:35.872Z",
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
		"liquidityUsd": 29964790.53,
		"hash": "3f74cb2468bd8206b1e1a03d65ffba7bd0185c6778c09c990c0aec0ccfe4e5de"
	},
	{
		"id": "86af9f7ad831",
		"ts": "2026-09-05T07:21:36.131Z",
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
		"liquidityUsd": 4205015.58,
		"hash": "86af9f7ad831febdbaa74dfc62e6820274e007a5468c95f4d806edf99d378322"
	},
	{
		"id": "6f878732c178",
		"ts": "2026-09-05T07:21:36.387Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1162851.01,
		"hash": "6f878732c1786e622f089c6f201a0245111b742ad25af45849489fc60c6d9303"
	},
	{
		"id": "51e8a75cc20e",
		"ts": "2026-09-05T07:21:36.908Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29964790.53,
		"hash": "51e8a75cc20e9f6a59978781851f371c079b467a5adc0e854d9e0d2215bee974"
	},
	{
		"id": "ca5282f1a6c0",
		"ts": "2026-09-05T07:21:37.168Z",
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
		"liquidityUsd": 1532664.18,
		"hash": "ca5282f1a6c0d8d0fe42026d2f41e1e095b4dfabf49a40e4bb814edd568dedb2"
	},
	{
		"id": "e5d19ab7f65d",
		"ts": "2026-09-05T07:21:37.463Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1100552.68,
		"hash": "e5d19ab7f65dd48ec4ef3c04ed2724954d924aff08b3c8431434aeecc4ac5cde"
	},
	{
		"id": "eb885eaa38f0",
		"ts": "2026-09-05T07:21:37.777Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1287220.73,
		"hash": "eb885eaa38f0c4bac9c2d9428ebc6b15a82ba37999520eb7b2ac53ddd6dffb45"
	},
	{
		"id": "53169719ced0",
		"ts": "2026-09-05T07:21:38.016Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 850861.07,
		"hash": "53169719ced046b57c8e1579fee72a5ef9886f5af7ff8fa4ddf70892d84d129a"
	},
	{
		"id": "7bfac9cfa9d0",
		"ts": "2026-09-05T07:21:38.243Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 190507.79,
		"hash": "7bfac9cfa9d00e7b87cf7e8ab12a3794edbaaa7e58c8834a68b0b1bac8a5d50a"
	},
	{
		"id": "838152875e09",
		"ts": "2026-09-05T07:21:38.479Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1845850.21,
		"hash": "838152875e09d6cfbebb8d28468240a7f43894928ea0a61ce9bb4f63d27f7f0a"
	},
	{
		"id": "8c8b404fb914",
		"ts": "2026-09-05T07:21:38.720Z",
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
		"liquidityUsd": 914218.49,
		"hash": "8c8b404fb9141059e3c20505ade4b88682909a45ee1e0a6f9743f34bd9b4d176"
	},
	{
		"id": "091b092ea8e6",
		"ts": "2026-09-05T07:21:38.947Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3296931.4,
		"hash": "091b092ea8e6447216ff6b8eb80a13fe9dc12b18b1d51ab2895ddce3ea67b51d"
	},
	{
		"id": "c60893cd94a4",
		"ts": "2026-09-05T07:21:39.183Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 136252.68,
		"hash": "c60893cd94a4629ba17ec58b09af5c75d6a6ad378a37615be6cb3d37ebdc3c0b"
	},
	{
		"id": "82bbf20a61d0",
		"ts": "2026-09-05T07:21:39.422Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 509010.55,
		"hash": "82bbf20a61d04f15470111f3f5581d6be9f47601bcc42eaa053771454a30b30b"
	},
	{
		"id": "9a09bd79ee94",
		"ts": "2026-09-05T02:45:23.161Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117476340.79,
		"hash": "9a09bd79ee944c52573a50584a9b3faf82e08093592c8d4998432c980c3639c0"
	},
	{
		"id": "504ac4943edb",
		"ts": "2026-09-05T02:45:23.422Z",
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
		"liquidityUsd": 18689145.97,
		"hash": "504ac4943edb490acf8476db0089c616b02778afca6a76edceb61db14a221505"
	},
	{
		"id": "8de5e4b25fd7",
		"ts": "2026-09-05T02:45:23.679Z",
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
		"liquidityUsd": 1032294.65,
		"hash": "8de5e4b25fd701ddfc26253d731495a06488d5662254740648e70266177ae735"
	},
	{
		"id": "2decb676f436",
		"ts": "2026-09-05T02:45:23.936Z",
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
		"liquidityUsd": 29664233.47,
		"hash": "2decb676f43677cd6eb2e7702271fef513b0b9dc85ee2d8bbb52220097d910a4"
	},
	{
		"id": "f8451df8e945",
		"ts": "2026-09-05T02:45:24.193Z",
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
		"liquidityUsd": 4176632.48,
		"hash": "f8451df8e945968cb42385d47d093935f8321eddcf6cef4202ec5726617336e6"
	},
	{
		"id": "8a69273b2263",
		"ts": "2026-09-05T02:45:24.446Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1151380.51,
		"hash": "8a69273b2263e3c5e283521ebddcda852e8d4cf233cd5977cd7aece878f0f07b"
	},
	{
		"id": "ae70b0c43134",
		"ts": "2026-09-05T02:45:24.703Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2405132.57,
		"hash": "ae70b0c43134bdd40bba510447a01962a334754ac95c0ea8d0d3fc593ece64a8"
	},
	{
		"id": "e5a0766f56f8",
		"ts": "2026-09-05T02:45:24.965Z",
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
		"liquidityUsd": 1466224.89,
		"hash": "e5a0766f56f84e4330f9ef17e1d8516a751a07c1158a1651bbafdbe65e64fec8"
	},
	{
		"id": "fb1275b52ed5",
		"ts": "2026-09-05T02:45:25.229Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1079746.31,
		"hash": "fb1275b52ed516a778184a2b379802aff4aa8e1f534349f863bf00b9c7042216"
	},
	{
		"id": "d803fad1595c",
		"ts": "2026-09-05T02:45:25.483Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1284823.84,
		"hash": "d803fad1595cf9157324ea38633f04aadf3044a6e6c858f453e456a29261d28d"
	},
	{
		"id": "dd8d768f0e92",
		"ts": "2026-09-05T02:45:25.719Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 846139.48,
		"hash": "dd8d768f0e92accba8ef2149740ce73cbf7b01688dad46285d6e0d75522304a6"
	},
	{
		"id": "bbf960c023f3",
		"ts": "2026-09-05T02:45:25.956Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 160889.28,
		"hash": "bbf960c023f31138436190b3452e5b5661a024154d99d3a50ad2f90ed9f54ee9"
	},
	{
		"id": "2ab817397196",
		"ts": "2026-09-05T02:45:26.194Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1850790.5,
		"hash": "2ab817397196ba9d60bcece2b86d89510757b42214cae037810bf94d4f3e34bd"
	},
	{
		"id": "c8e8e31b04e2",
		"ts": "2026-09-05T02:45:26.432Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 142332.71,
		"hash": "c8e8e31b04e25076d447e89987cb9d1b8f2bef0f730fe8e15d08ad6b70033d89"
	},
	{
		"id": "db82f937f402",
		"ts": "2026-09-05T02:45:26.671Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3276947.5,
		"hash": "db82f937f4023251ae247c941a03b8a5664ca594fbccd4bf164902747403dc98"
	},
	{
		"id": "59f9ec97cd55",
		"ts": "2026-09-05T02:45:26.909Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1328438.54,
		"hash": "59f9ec97cd55b320182107e311688a0cc03063fdb634fb01d3bb5d6c7609e1df"
	},
	{
		"id": "f3a444e1e19a",
		"ts": "2026-09-05T02:45:27.147Z",
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
		"liquidityUsd": 922108.7,
		"hash": "f3a444e1e19ac10042ac380604e7ddad5351a1e7a6c51152f09af099afac73a1"
	},
	{
		"id": "09a9516ad8fa",
		"ts": "2026-09-05T02:45:27.386Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 506590.03,
		"hash": "09a9516ad8faa9d09738724242e795d72ee373f3cadf3195c1cfb9d471f169d7"
	},
	{
		"id": "a2326da37fbc",
		"ts": "2026-09-04T23:40:35.426Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117503509.35,
		"hash": "a2326da37fbc216395fc6f03743ea41fdf3af2de38109b972e9b9d8a7039db94"
	},
	{
		"id": "b5648bc1d07b",
		"ts": "2026-09-04T23:40:35.672Z",
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
		"liquidityUsd": 18630351.31,
		"hash": "b5648bc1d07b511099b6c8852eddb15b2c5e42e468e95a61e9ac19b8f6627f3e"
	},
	{
		"id": "27526d0b1865",
		"ts": "2026-09-04T23:40:35.904Z",
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
		"liquidityUsd": 1025694.52,
		"hash": "27526d0b1865935a0e8ba92cebc523b38b7b4babef7d1eab902acadec654dd35"
	},
	{
		"id": "a1896c757241",
		"ts": "2026-09-04T23:40:36.118Z",
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
		"liquidityUsd": 29251695.4,
		"hash": "a1896c757241a46015015dd8eb6a6dfe7a238b6c51f18f2611cc2a28f58094c1"
	},
	{
		"id": "b0d9dd4d249a",
		"ts": "2026-09-04T23:40:36.346Z",
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
		"liquidityUsd": 4144212.32,
		"hash": "b0d9dd4d249a856a58deeb354b2936fa25dd9179ac4f2e57ea34f05c86400dc1"
	},
	{
		"id": "ad5310828f45",
		"ts": "2026-09-04T23:40:36.564Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1148707.33,
		"hash": "ad5310828f455d0d9961b03e5677a83bba5b9c2e3b51e6fd34d9041d2a9ceaae"
	},
	{
		"id": "e1389ad0e641",
		"ts": "2026-09-04T23:40:36.777Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2383305.59,
		"hash": "e1389ad0e6415864a9adf9f7980ed68d3895beb7683cfe88bdb88551fff698d4"
	},
	{
		"id": "4f4c0a47ac57",
		"ts": "2026-09-04T23:40:36.995Z",
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
		"liquidityUsd": 1466848.21,
		"hash": "4f4c0a47ac57fbeb13c34c0f23e1bb5320f0a4c8cb6ccb17a3f947c029449a73"
	},
	{
		"id": "a85f34d828cb",
		"ts": "2026-09-04T23:40:37.391Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1095253.68,
		"hash": "a85f34d828cb0be0927795d1f085d88fee0a1ad53c75e29318ba05baf8a63cf7"
	},
	{
		"id": "62ca63acc518",
		"ts": "2026-09-04T23:40:37.605Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 845296.95,
		"hash": "62ca63acc518eb60a4d4e6507309519f07491064de3fbfabac9a8dc43d5f4cee"
	},
	{
		"id": "b2c61120c686",
		"ts": "2026-09-04T23:40:37.803Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1285542.92,
		"hash": "b2c61120c68621f6210c8ca89cdc4fab439280b93a9fb534e42a5ef9155f64b2"
	},
	{
		"id": "b54648d4d40c",
		"ts": "2026-09-04T23:40:37.999Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 179517.36,
		"hash": "b54648d4d40cab719e6fedd01170de8af98455b7ac20a0ccdc58167734761189"
	},
	{
		"id": "517d404b1559",
		"ts": "2026-09-04T23:40:38.211Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1859304.43,
		"hash": "517d404b1559c87fea0407adcaa503cdc300fb1daff98062ec952b27af5dd671"
	},
	{
		"id": "9c393d5e8e6f",
		"ts": "2026-09-04T23:40:38.410Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3243607.21,
		"hash": "9c393d5e8e6fe34abb799c47d579937e191769d22efa4a724b09c837a11b9174"
	},
	{
		"id": "0c14bf8e1241",
		"ts": "2026-09-04T23:40:38.617Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1334480.37,
		"hash": "0c14bf8e12414eab13601faf72d50d851c8f30a977bdbcc327431be7815221a1"
	},
	{
		"id": "5e22ca52f00c",
		"ts": "2026-09-04T23:40:38.811Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 139912.28,
		"hash": "5e22ca52f00c895f05ae05fbc4eabd23741fb76b640b7316880a55a4f4df609c"
	},
	{
		"id": "e6b4a72cc255",
		"ts": "2026-09-04T23:40:39.048Z",
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
		"liquidityUsd": 931274.4,
		"hash": "e6b4a72cc255548c0a0e0a9cd43c35d5b13845772a77cbffd72beb600bd59953"
	},
	{
		"id": "d27ed4eeb883",
		"ts": "2026-09-04T21:12:03.190Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117488271.08,
		"hash": "d27ed4eeb883d8358919d468b074378ab7dfd8d12c9e3d24cdb1a736f4506139"
	},
	{
		"id": "d175d525aba0",
		"ts": "2026-09-04T21:12:03.691Z",
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
		"liquidityUsd": 18442144.85,
		"hash": "d175d525aba08edc8eb0f43d280ad6988db34e7a34a0de99884fea621ba3ebf0"
	},
	{
		"id": "f8bf56bfaebc",
		"ts": "2026-09-04T21:12:03.957Z",
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
		"liquidityUsd": 1034376.16,
		"hash": "f8bf56bfaebcc9e12bdce75165d702904aba0aad992c2caf41f368a228888d0f"
	},
	{
		"id": "dc4b19ad6e96",
		"ts": "2026-09-04T21:12:04.236Z",
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
		"liquidityUsd": 29307490.73,
		"hash": "dc4b19ad6e96a4253fc5f5881df37fe2708d9b5a0af0e80ef2ecc6ba9e2a2a5b"
	},
	{
		"id": "0a72395a80a3",
		"ts": "2026-09-04T21:12:04.488Z",
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
		"liquidityUsd": 4148238.04,
		"hash": "0a72395a80a3779af8b2e134e741449abda21df34fa29cd16aa51b55b792bc7b"
	},
	{
		"id": "5d50dd0abc90",
		"ts": "2026-09-04T21:12:04.740Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1147442.43,
		"hash": "5d50dd0abc902566a57be1509dbc8dcc0fc9e275c180762731e931dacae18194"
	},
	{
		"id": "af84f7fa8c9f",
		"ts": "2026-09-04T21:12:05.001Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2256869.22,
		"hash": "af84f7fa8c9f0815f70db567eaceefe8548c8e621c41b8931824184bcf63fc95"
	},
	{
		"id": "6b4e5ef6ac8a",
		"ts": "2026-09-04T21:12:05.251Z",
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
		"liquidityUsd": 1466306.14,
		"hash": "6b4e5ef6ac8a7ffee6862d48c1174511eb1fae6003f598db579a2f98d7716a66"
	},
	{
		"id": "84c0bf9164d9",
		"ts": "2026-09-04T21:12:05.506Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1183633.63,
		"hash": "84c0bf9164d95f7ad933f52656f5884846608f6746c45c82405c21fcd2c489fd"
	},
	{
		"id": "5d448eacd937",
		"ts": "2026-09-04T21:12:05.753Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 831099.96,
		"hash": "5d448eacd9376141b5bb65797e342a42ca773f3a74b690ac62a0ecdf3ac1ee8f"
	},
	{
		"id": "2ba44c6376e7",
		"ts": "2026-09-04T21:12:05.988Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 202299.02,
		"hash": "2ba44c6376e7d2b73a98f1a22f4f66cffcf68b92aeb9b0421633699ba5080460"
	},
	{
		"id": "f4007ada140c",
		"ts": "2026-09-04T21:12:06.228Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1302958.01,
		"hash": "f4007ada140c6f6dcdb0cc8e1871a270d7ce3a401217e2f59a12644d979ba1fd"
	},
	{
		"id": "c0dc5c5104a2",
		"ts": "2026-09-04T21:12:06.464Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1848370.18,
		"hash": "c0dc5c5104a2b6814f0c671af174b9115693f742bedb225fc3ae710c1475b4ed"
	},
	{
		"id": "57cbf04b88e1",
		"ts": "2026-09-04T21:12:06.695Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3243879.63,
		"hash": "57cbf04b88e12b042ceac9a2659b3dd11aada427c354e21f096c0d5c6eda731e"
	},
	{
		"id": "dea5b24102a3",
		"ts": "2026-09-04T21:12:06.926Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1322736.26,
		"hash": "dea5b24102a3f97cfdfc0b403365632fbc9e0af203b911db00ddcd633a31f695"
	},
	{
		"id": "a06e1d387873",
		"ts": "2026-09-04T21:12:07.271Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13418842.18,
		"hash": "a06e1d387873119ed6f2db8504ea243ef998ddcb4513755bbfb17b509c13cc47"
	},
	{
		"id": "ce8285236747",
		"ts": "2026-09-04T21:12:07.506Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 795117.49,
		"hash": "ce82852367479bb01e93c336e293c15be42145b2483805ea9148c500086d00f7"
	},
	{
		"id": "29c9e6cf0e42",
		"ts": "2026-09-04T18:02:24.919Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117498682.33,
		"hash": "29c9e6cf0e423dfe932e6270561afd2364ea44824fced9fc40ad39b3659506f7"
	},
	{
		"id": "133381e6519f",
		"ts": "2026-09-04T18:02:25.272Z",
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
		"liquidityUsd": 15016181.26,
		"hash": "133381e6519f576324a18feeda85a86f86dab87ac7a491406d67e13fa2800b8d"
	},
	{
		"id": "39cd7f020036",
		"ts": "2026-09-04T18:02:25.573Z",
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
		"liquidityUsd": 1030343.8,
		"hash": "39cd7f020036ef3c0c3401f9bdbddd6193814bf97a1f32c9060a244e30fa1fcf"
	},
	{
		"id": "7a015618feee",
		"ts": "2026-09-04T18:02:25.890Z",
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
		"liquidityUsd": 29240654.38,
		"hash": "7a015618feeef422e0b4d73b573d7ac677493d654a37251da59a72e8a52e5ee7"
	},
	{
		"id": "1b614dc1f84f",
		"ts": "2026-09-04T18:02:26.323Z",
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
		"liquidityUsd": 4147904.49,
		"hash": "1b614dc1f84feba5949c849663eb70cb9b4fd979aa2af05df9e1b2890b7ea374"
	},
	{
		"id": "80522a11c893",
		"ts": "2026-09-04T18:02:26.627Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1144856.06,
		"hash": "80522a11c893f790df41af5e682b8377dbd2f1eb6eb0ddbab780c607abcb6af2"
	},
	{
		"id": "6b84703c4046",
		"ts": "2026-09-04T18:02:26.893Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2117241.41,
		"hash": "6b84703c4046eaf9c7727d36bd77c674ae73262aaaf0ca1a4521844fe53dd20e"
	},
	{
		"id": "c84f79356d6e",
		"ts": "2026-09-04T18:02:27.129Z",
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
		"liquidityUsd": 1462930.23,
		"hash": "c84f79356d6e4932aea0403cc5494846c9f5270c03786ebd10143cd0eb8cf650"
	},
	{
		"id": "f44577963a80",
		"ts": "2026-09-04T18:02:27.428Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1024948.82,
		"hash": "f44577963a80ab970caeb5dfcd408d3d199880e91a91b0044f09d175f8a5b3e3"
	},
	{
		"id": "50f301746b19",
		"ts": "2026-09-04T18:02:27.700Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 845853.77,
		"hash": "50f301746b19bbf4690c7397255af0f5b4ae67e11370b5159dae1057092e46e9"
	},
	{
		"id": "b56a2f708682",
		"ts": "2026-09-04T18:02:27.922Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1261884.24,
		"hash": "b56a2f708682cacfb1ea32ea1ca08f888b6e6183772eeb8470691218ad875e30"
	},
	{
		"id": "5d1b799c829a",
		"ts": "2026-09-04T18:02:28.156Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 183068.62,
		"hash": "5d1b799c829a754b953e56252be027fb6bf98833d50cb76612f409c1d0c11c0d"
	},
	{
		"id": "4c5f688c052f",
		"ts": "2026-09-04T18:02:28.394Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1843216.17,
		"hash": "4c5f688c052f8539470605632b24dcf96e4a9e3f83c3ef031daef09271f85016"
	},
	{
		"id": "e1b7174947f8",
		"ts": "2026-09-04T18:02:28.614Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3250032.02,
		"hash": "e1b7174947f8b4b67114a6ab0a41f8779f55e97a9c582624a7a718b48a9d4baa"
	},
	{
		"id": "70db56d41022",
		"ts": "2026-09-04T18:02:28.850Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 153964.33,
		"hash": "70db56d41022c8551a3af507ca655c8395fcff287b27fc2ff8de638a47926f43"
	},
	{
		"id": "dfa54e185e16",
		"ts": "2026-09-04T18:02:29.088Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1330281.27,
		"hash": "dfa54e185e1643f9e69aee3c54211c0fed40e3b0fe36eae06e99abbb969f4f8b"
	},
	{
		"id": "f70dd6f62d06",
		"ts": "2026-09-04T18:02:29.307Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3943416.03,
		"hash": "f70dd6f62d06e6baa01ece67b824991bbbe20073bf771930fd29f2858761a85f"
	},
	{
		"id": "9e837c5ac4a5",
		"ts": "2026-09-04T18:02:29.548Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1142743.91,
		"hash": "9e837c5ac4a5cbcf57726fc9b62d623fa5e6d2129b299b1489bfddd75af92a55"
	},
	{
		"id": "535e42adc6e3",
		"ts": "2026-09-04T14:44:38.172Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117452340.32,
		"hash": "535e42adc6e37dddfcf755b97f54ba8919e5dda9f821e0ed18ad81b54eddcf6f"
	},
	{
		"id": "5ac497a0a8a5",
		"ts": "2026-09-04T14:44:38.442Z",
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
		"liquidityUsd": 18816683.81,
		"hash": "5ac497a0a8a58c2a80c6cecc5e154881dbe1fb63c05b1137e3a16f89c1dac6f4"
	},
	{
		"id": "77a0973a2a62",
		"ts": "2026-09-04T14:44:38.814Z",
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
		"liquidityUsd": 1058003.23,
		"hash": "77a0973a2a62e6bebda9ad66df1e01d566024326f0163e51cae694de0190dcdf"
	},
	{
		"id": "98de0adb3856",
		"ts": "2026-09-04T14:44:39.030Z",
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
		"liquidityUsd": 29093412.52,
		"hash": "98de0adb3856744d26a2347128f88cf631f0e65bc1f7169a000c77a7bfb0dfcd"
	},
	{
		"id": "0f5b4ef1f222",
		"ts": "2026-09-04T14:44:39.284Z",
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
		"liquidityUsd": 4145548.74,
		"hash": "0f5b4ef1f22235d50933b51bfd6f6fe97ebe9be2bfcd665b1d272d8a85ae3e3b"
	},
	{
		"id": "1a9979da50c0",
		"ts": "2026-09-04T14:44:39.509Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1145776.72,
		"hash": "1a9979da50c0ae736f727e14c4601e716568bd0a3fa4168addf0ab499271901f"
	},
	{
		"id": "4ddb4ab3641d",
		"ts": "2026-09-04T14:44:39.737Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1105206.05,
		"hash": "4ddb4ab3641d835d6bf6c61aa501bafa6c0ac8330ca4cfc68e92fe2db066a31f"
	},
	{
		"id": "7dddc5fbea28",
		"ts": "2026-09-04T14:44:39.958Z",
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
		"liquidityUsd": 1462147.49,
		"hash": "7dddc5fbea283962fe87d4c39da50ea80476fcb4553ba1dbd2b446f88c0013b7"
	},
	{
		"id": "ca172b78afb8",
		"ts": "2026-09-04T14:44:40.174Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1327432.95,
		"hash": "ca172b78afb8b70c9ef7fad588bdc0c77a5ce0a5687297845bec21ac68c74611"
	},
	{
		"id": "b74747b0f318",
		"ts": "2026-09-04T14:44:40.397Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 846368.4,
		"hash": "b74747b0f318d308ca3c39ea0bc8773fa3bff88df830f0d2c128359431be7cab"
	},
	{
		"id": "dc5ff36d6303",
		"ts": "2026-09-04T14:44:40.615Z",
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
		"liquidityUsd": 965824.81,
		"hash": "dc5ff36d6303d7468138241eda0f4f0d121b88912d4a96a4d3f1b7e1d504be18"
	},
	{
		"id": "edc484d58526",
		"ts": "2026-09-04T14:44:40.835Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1863806.07,
		"hash": "edc484d58526c086cc7b30df35acde9249aa47e3aeb1e68c13fd1ecd65f0e963"
	},
	{
		"id": "510808adcebf",
		"ts": "2026-09-04T14:44:41.046Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3309081.78,
		"hash": "510808adcebfad24e5fa143283a47034cb83c31b21e232a1d497533549b9b06d"
	},
	{
		"id": "029a3cb9088f",
		"ts": "2026-09-04T14:44:41.270Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 751762.42,
		"hash": "029a3cb9088fbdb003fcc1cef6b1c489c0178a3cfbd923b0b62925b5523deb43"
	},
	{
		"id": "142c361b42e6",
		"ts": "2026-09-04T14:44:41.474Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 139229.59,
		"hash": "142c361b42e62fc27e32710afc0f4c3568327c1a1c5793a7d915476d856c4713"
	},
	{
		"id": "3e1b7e754815",
		"ts": "2026-09-04T14:44:41.694Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1330744.37,
		"hash": "3e1b7e754815971781db960af27b851df143f38139120863d30d0b000fac3522"
	},
	{
		"id": "7194fe769ca7",
		"ts": "2026-09-04T14:44:41.894Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1138533.69,
		"hash": "7194fe769ca74722b06f1962f00e4db6624dcb8a60363b9c4af04e44e0621814"
	},
	{
		"id": "15001224ee08",
		"ts": "2026-09-04T14:44:42.119Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3979487.88,
		"hash": "15001224ee083f8ac20f625612d70e463a812a9921f013e1f77d02cd34c11101"
	},
	{
		"id": "17dce5ed7ead",
		"ts": "2026-09-04T10:36:59.013Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118604913.25,
		"hash": "17dce5ed7ead503bd04bcf794bd1df3f486406570bd1eab4ac07e6a85ecadd80"
	},
	{
		"id": "5e713dd784bd",
		"ts": "2026-09-04T10:36:59.224Z",
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
		"liquidityUsd": 18599063.77,
		"hash": "5e713dd784bd256a92088c5bcfd64468345e2b251736c4087a914ce95de28b03"
	},
	{
		"id": "fef19b729002",
		"ts": "2026-09-04T10:36:59.433Z",
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
		"liquidityUsd": 1059745.29,
		"hash": "fef19b7290027fd9a05f2ac2f4969fba15e44f9e742930fe2db20ff8cc22bc6b"
	},
	{
		"id": "9732584ee056",
		"ts": "2026-09-04T10:36:59.646Z",
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
		"liquidityUsd": 29478413.01,
		"hash": "9732584ee056f8aa46497fe1b9ba34aff59e861a1234b97d0a4d7370280f1993"
	},
	{
		"id": "15816ba870c1",
		"ts": "2026-09-04T10:36:59.850Z",
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
		"liquidityUsd": 4279039.48,
		"hash": "15816ba870c123eade2229631586e2333c6491d7c6ebcdab6ae2e4ec45336d94"
	},
	{
		"id": "fcecda494079",
		"ts": "2026-09-04T10:37:00.093Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1176407.73,
		"hash": "fcecda49407963242bc79e8f7c14720d22682fcd6bcb1e93bb178213cff1dccc"
	},
	{
		"id": "9ef4776b19bc",
		"ts": "2026-09-04T10:37:00.333Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1888547.85,
		"hash": "9ef4776b19bc6e26f641294d85edadf03af70ea2d2d538a2a209ae580dc89258"
	},
	{
		"id": "872d2787c3e1",
		"ts": "2026-09-04T10:37:00.595Z",
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
		"liquidityUsd": 2649718.91,
		"hash": "872d2787c3e18af8e90a64d8751dee7c0077708488090141fce7f19291f29c40"
	},
	{
		"id": "3ad307a97a26",
		"ts": "2026-09-04T10:37:00.803Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1089208.23,
		"hash": "3ad307a97a2644729a32605cad451bf233e26ed8869ad12094b5201dd09d2568"
	},
	{
		"id": "28b4d8ce416f",
		"ts": "2026-09-04T10:37:01.006Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1338604.7,
		"hash": "28b4d8ce416f7e41910f77cb30b82b104fa688af1d7d545b97c89e16cdf3b950"
	},
	{
		"id": "0b4f21d94f87",
		"ts": "2026-09-04T10:37:01.238Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 865228.73,
		"hash": "0b4f21d94f87b27b89efdfb58519af63df988e0db87a45edf14575922bf08982"
	},
	{
		"id": "80839690fe90",
		"ts": "2026-09-04T10:37:01.713Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 116389.32,
		"hash": "80839690fe90d5a108f871e0e8fa3435949cb987e501a40823189420754db485"
	},
	{
		"id": "f042f70dc57f",
		"ts": "2026-09-04T10:37:02.017Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 90030.69,
		"hash": "f042f70dc57f76e830307006ad56754046127ad987510ee7a6bd0dc388649716"
	},
	{
		"id": "8c9e525129a1",
		"ts": "2026-09-04T10:37:02.220Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 144179.53,
		"hash": "8c9e525129a1e07f8e248fdcd5d78f93d7f8ba3dcdd470635e4ac3b7d1550c0c"
	},
	{
		"id": "daadf9fa5c11",
		"ts": "2026-09-04T10:37:02.576Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3282471.18,
		"hash": "daadf9fa5c11423a50a7a104e9256dc1b061c3e7c2e6e9fcaabda74c06e5513e"
	},
	{
		"id": "966b5d49a33e",
		"ts": "2026-09-04T10:37:02.779Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 520034.66,
		"hash": "966b5d49a33e043eb94b95faad40f11c6aa8ed11760d09930eb5faad833b870b"
	},
	{
		"id": "f1d43ad11b10",
		"ts": "2026-09-04T10:37:02.974Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1926477.5,
		"hash": "f1d43ad11b103357cc49825932d5caa55f5683c9b0f9070ce2242ac0fa69d9b7"
	},
	{
		"id": "87d55ec704cd",
		"ts": "2026-09-04T10:37:03.165Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1172279.92,
		"hash": "87d55ec704cd4425a4c5d210991381ec08f027cbc14d9205d8a69db2e036fe0c"
	},
	{
		"id": "630e666008bc",
		"ts": "2026-09-04T10:37:03.361Z",
		"symbol": "REPPO",
		"token": "0xFf8104251E7761163faC3211eF5583FB3F8583d6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 882994.62,
		"hash": "630e666008bcd258e6706688668eaab95fd3c304b96828bc45d111e87b48ff9a"
	},
	{
		"id": "fb930b96aaba",
		"ts": "2026-09-04T05:32:41.184Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118498146.79,
		"hash": "fb930b96aaba5c7dff317d0a2b17ecde2c1c35ff672074ef94761299289a3821"
	},
	{
		"id": "56b4e6bac223",
		"ts": "2026-09-04T05:32:41.648Z",
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
		"liquidityUsd": 18237501.47,
		"hash": "56b4e6bac223e6cf07035733e23b232f166ac429e180bf8bccd2ad80b7eb6275"
	},
	{
		"id": "12b2979dba98",
		"ts": "2026-09-04T05:32:41.897Z",
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
		"liquidityUsd": 1001763.31,
		"hash": "12b2979dba98c431e4dd9a02481474aa4ff7c0d074e699e108caece11d37024f"
	},
	{
		"id": "1f51b8bd64fb",
		"ts": "2026-09-04T05:32:42.147Z",
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
		"liquidityUsd": 29482708.32,
		"hash": "1f51b8bd64fbd67f1d84da1e44dba63e329327b8406b95f7ed971818ea38b288"
	},
	{
		"id": "d0bf4ed18dc0",
		"ts": "2026-09-04T05:32:42.394Z",
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
		"liquidityUsd": 4297451.54,
		"hash": "d0bf4ed18dc0f30975587c938589bd542353d8c71a07180fed76b8face760b44"
	},
	{
		"id": "15d0a4a16e11",
		"ts": "2026-09-04T05:32:42.652Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1171006.03,
		"hash": "15d0a4a16e11fc1c667507979f8554412b5495b227aa3fc787615070c5470e60"
	},
	{
		"id": "f7b3a1402136",
		"ts": "2026-09-04T05:32:42.894Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3088063.3,
		"hash": "f7b3a1402136e947aa3813e33f9542d39ae54499f009e0649f848ebfb92d95f6"
	},
	{
		"id": "2f261a931ed3",
		"ts": "2026-09-04T05:32:43.143Z",
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
		"liquidityUsd": 2858202.92,
		"hash": "2f261a931ed339046651164617b052740fea84f968d5d8fe98f570bc0dc503b8"
	},
	{
		"id": "89478956aab0",
		"ts": "2026-09-04T05:32:43.396Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1047859.35,
		"hash": "89478956aab0f3316bc0123689b4d1e0cb1177d7be63f09e841fef4cb2485208"
	},
	{
		"id": "701f6886020e",
		"ts": "2026-09-04T05:32:43.647Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1334251.65,
		"hash": "701f6886020e75c5cd99d047489c190f1ec04a97710607c3e9e76b61381606ec"
	},
	{
		"id": "3de554a2664a",
		"ts": "2026-09-04T05:32:43.877Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 124364.49,
		"hash": "3de554a2664adc9695cf653ebe0a9ae4794ba325517e74b1351b9b9cfd6838a5"
	},
	{
		"id": "e58e46304783",
		"ts": "2026-09-04T05:32:44.104Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 911527.4,
		"hash": "e58e4630478371975606707517fd0e31bffd10bd16ef343c0a6a2600d89b1d51"
	},
	{
		"id": "5c4ebfdbf4ce",
		"ts": "2026-09-04T05:32:44.331Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100867.36,
		"hash": "5c4ebfdbf4cefd46689dc471cc735a00ca4ea0d73c238189c5ca802499faccaf"
	},
	{
		"id": "2ed26f7cf109",
		"ts": "2026-09-04T05:32:44.558Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1916241.63,
		"hash": "2ed26f7cf1098924e8fce59c472f522e2ce58735524e8fc606ef98a8ebb0b7c3"
	},
	{
		"id": "6aefe723c488",
		"ts": "2026-09-04T05:32:44.785Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 152657.2,
		"hash": "6aefe723c48887b1ca10210ba7aeb76a251738e0232752b148d9152af3479fab"
	},
	{
		"id": "6879f6de5925",
		"ts": "2026-09-04T05:32:45.012Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3292196.99,
		"hash": "6879f6de592549a84c1f5da9aa3ad7c3e2a24d2723a9daf25202065e62a5098e"
	},
	{
		"id": "5dd9096563f1",
		"ts": "2026-09-04T05:32:45.240Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1170310.99,
		"hash": "5dd9096563f1a0ea82109b33b55fd6162e5e5fc5c189aef204015b692708376b"
	}
]
