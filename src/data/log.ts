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
	"updatedAt": "2026-08-26T07:41:52.478Z",
	"tokensScored": 15127,
	"verdictsIssued": 15127,
	"safe": 12906,
	"risky": 1114,
	"likelyRug": 1107,
	"ticks": 873
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "83cf1f60a8e0",
		"ts": "2026-08-26T07:41:48.126Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115082696.98,
		"hash": "83cf1f60a8e0185b244ad38ad880496e051a9e7b407adcbacbe1a9d1a64838a9"
	},
	{
		"id": "8f69f2263d3a",
		"ts": "2026-08-26T07:41:48.647Z",
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
		"liquidityUsd": 19389299.08,
		"hash": "8f69f2263d3ac1fe8e78a061e46115422c95bb00c60d7f18949f41e262b92532"
	},
	{
		"id": "91fe56a9deac",
		"ts": "2026-08-26T07:41:49.013Z",
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
		"liquidityUsd": 972453.91,
		"hash": "91fe56a9deac9c46798f3fb3151c4c8792ad9f9a47bc279e1d62f582d0b34f23"
	},
	{
		"id": "a91e72089cab",
		"ts": "2026-08-26T07:41:49.362Z",
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
		"liquidityUsd": 29826213.82,
		"hash": "a91e72089cababe6c2fd300f73f8ae0342f1dab3150fecaff025240c774bc847"
	},
	{
		"id": "153a5c1401e0",
		"ts": "2026-08-26T07:41:49.710Z",
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
		"liquidityUsd": 4698301.44,
		"hash": "153a5c1401e0fe763a7663f450f9e77c699cda1cec4e38616f52da51359e4ca1"
	},
	{
		"id": "1a5662f7361b",
		"ts": "2026-08-26T07:41:49.924Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192795.73,
		"hash": "1a5662f7361b8ada09579da1e3f1aaac10bef4e985364bf5fbc60e89e6c77ac0"
	},
	{
		"id": "5f4849e933d3",
		"ts": "2026-08-26T07:41:50.151Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.75,
		"hash": "5f4849e933d3c6873e7d794e4d492f152a6e9a5b57177d8dc7ce50aa0b800092"
	},
	{
		"id": "44c994af430d",
		"ts": "2026-08-26T07:41:50.366Z",
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
		"liquidityUsd": 1914051.65,
		"hash": "44c994af430dcd7dc9c7a9b98277eddc1c54596e1ad8ffe42ad00467da7474d7"
	},
	{
		"id": "e66d0c00969b",
		"ts": "2026-08-26T07:41:50.555Z",
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
		"liquidityUsd": 1496868.79,
		"hash": "e66d0c00969bb88be4de15f87d6f996f679df85f286c19fbfa1ab996cf8260de"
	},
	{
		"id": "9c95e9d66ffc",
		"ts": "2026-08-26T07:41:50.742Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1222479.86,
		"hash": "9c95e9d66ffcfdb432479481b874a6645b19f3402e0f35f347b370a1520e4f8a"
	},
	{
		"id": "46883f826b21",
		"ts": "2026-08-26T07:41:50.920Z",
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
		"liquidityUsd": 748555.29,
		"hash": "46883f826b21a94399ba7c2efdb5de0bd7f1c00ede515fd0422269e06c8048f3"
	},
	{
		"id": "04d6f98446bc",
		"ts": "2026-08-26T07:41:51.100Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4136609.58,
		"hash": "04d6f98446bc0eceb8f107f09623f0b08a8e33e7e699f60c75ec7b305af4f62b"
	},
	{
		"id": "70c4fbce1e00",
		"ts": "2026-08-26T07:41:51.276Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97427.58,
		"hash": "70c4fbce1e00019956a25137462c18aa55516a846e95172173423157bf69da95"
	},
	{
		"id": "19394576ccd2",
		"ts": "2026-08-26T07:41:51.474Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544095.68,
		"hash": "19394576ccd29acb655a2874a97a3a97232535feefab0e197a7af147bd704ce5"
	},
	{
		"id": "f4ef4502bb2a",
		"ts": "2026-08-26T07:41:51.658Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3436780.07,
		"hash": "f4ef4502bb2a11e0315f8d58a1f687e73bc6867f97536d71bfa7392a84228ef3"
	},
	{
		"id": "a37517661809",
		"ts": "2026-08-26T07:41:51.838Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 545631.78,
		"hash": "a3751766180979cc0100b4115bee5ef156bb1b64c0afd959fd57bfb572b43f70"
	},
	{
		"id": "2e812323bb2f",
		"ts": "2026-08-26T07:41:52.021Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11578361.24,
		"hash": "2e812323bb2fcb61258c33ad336a43b9ae70cb23e964a5dfd50b9bf7a5820a1d"
	},
	{
		"id": "c1a59a26f244",
		"ts": "2026-08-26T07:41:52.235Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1855928.15,
		"hash": "c1a59a26f2449138bb929b2cdef582159687d457de0c92d696feb7a31d36802b"
	},
	{
		"id": "3b470824c206",
		"ts": "2026-08-26T07:41:52.477Z",
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
		"liquidityUsd": 848509.74,
		"hash": "3b470824c206509909974f5a5d388c2296ee52e8365d540601f88169d47d1f87"
	},
	{
		"id": "54a2b2dea05c",
		"ts": "2026-08-26T06:40:47.285Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115064386.7,
		"hash": "54a2b2dea05cf575686fd62fc89a844ac176690189511c5e5efde1637109674f"
	},
	{
		"id": "c356e8f591bc",
		"ts": "2026-08-26T06:40:47.759Z",
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
		"liquidityUsd": 19470450.21,
		"hash": "c356e8f591bc36ad2fab29799509c95916f575b47027afa479dc984ecae76df1"
	},
	{
		"id": "84b5560e206e",
		"ts": "2026-08-26T06:40:48.032Z",
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
		"liquidityUsd": 966557.61,
		"hash": "84b5560e206e9dc113e9ca6d2779145bc264c9c753fe41dc7657485e2682d1be"
	},
	{
		"id": "30f5a9fe3e7a",
		"ts": "2026-08-26T06:40:48.357Z",
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
		"liquidityUsd": 29784841.32,
		"hash": "30f5a9fe3e7a147f13066682343ddaddba3ca42dc0393bc83285e018dd93c1fc"
	},
	{
		"id": "440ba6c16101",
		"ts": "2026-08-26T06:40:48.603Z",
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
		"liquidityUsd": 4678282.48,
		"hash": "440ba6c16101338f8606d0562d30294768cd14a86de5d935d5a0b6009d46aa1b"
	},
	{
		"id": "f85244aa74d2",
		"ts": "2026-08-26T06:40:48.853Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192795.73,
		"hash": "f85244aa74d2ec8cd4d48fad05fe673a649e59ad26fd7faeb62c514bb5546c78"
	},
	{
		"id": "e1a7c5fc7c33",
		"ts": "2026-08-26T06:40:49.102Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.48,
		"hash": "e1a7c5fc7c33c06e281214e85c3865a03b90f229f653ba2fe454023fdd1d13f0"
	},
	{
		"id": "ce6e536cd19b",
		"ts": "2026-08-26T06:40:49.360Z",
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
		"liquidityUsd": 1907021.77,
		"hash": "ce6e536cd19b9df4ea9714ef3448c366922f7a73b893f904a8f7853c02ff2a79"
	},
	{
		"id": "4273941cf284",
		"ts": "2026-08-26T06:40:49.592Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1468223.94,
		"hash": "4273941cf2845b139562674c65bde15704686e29a1936a43aee4e6e20e7cfac4"
	},
	{
		"id": "e90b464a521a",
		"ts": "2026-08-26T06:40:49.841Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1210778.57,
		"hash": "e90b464a521ac6e983af294ecf5b0bc32fc25db8eecbbae6742eb6dc6cfa9ac8"
	},
	{
		"id": "5a26e596f622",
		"ts": "2026-08-26T06:40:50.076Z",
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
		"liquidityUsd": 745503.36,
		"hash": "5a26e596f6220056b4ca4af505f1149698169d185ff9b869408acab072221f4d"
	},
	{
		"id": "9b8348f4fe17",
		"ts": "2026-08-26T06:40:50.307Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4123197.45,
		"hash": "9b8348f4fe1703908ea5bea1fb4a44f0dcc445e3b70e755a73ec3e933ad78c15"
	},
	{
		"id": "056a310f6536",
		"ts": "2026-08-26T06:40:50.527Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 91647.83,
		"hash": "056a310f6536b98233e4867a783d48e430b3361590767ac2f8e112810d6fb031"
	},
	{
		"id": "127276c3624b",
		"ts": "2026-08-26T06:40:50.744Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 542011.22,
		"hash": "127276c3624bf928f1098b284cea55cdc772b6986061ea116148f1eec07b8cd1"
	},
	{
		"id": "77d4294c5ecd",
		"ts": "2026-08-26T06:40:50.974Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3419802.28,
		"hash": "77d4294c5ecdd1c16863a1e672a16119d6d50178cf5d818f6f673e9e712e1311"
	},
	{
		"id": "20b8d46f0410",
		"ts": "2026-08-26T06:40:51.205Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544470.85,
		"hash": "20b8d46f041046a5b49e8087372ccf40bc6d4bb418f85a30713ce53b9ff9e531"
	},
	{
		"id": "dab2fa73e3b1",
		"ts": "2026-08-26T06:40:51.437Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11434925.44,
		"hash": "dab2fa73e3b1e27c976fc616703ec9cca4905ce3c777acc82c99d4c9781e779d"
	},
	{
		"id": "0fb958d96af9",
		"ts": "2026-08-26T06:40:51.668Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1858522.34,
		"hash": "0fb958d96af93d0c7730a5f71d9c1790efbe6eb1f3365b0aa54cd763d7f1131b"
	},
	{
		"id": "59a3680bc122",
		"ts": "2026-08-26T06:40:51.889Z",
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
		"liquidityUsd": 859242.23,
		"hash": "59a3680bc1222445b7facfdcd49e09733e88beae45c7aea473e447ac52b67b96"
	},
	{
		"id": "563ce21a0cf8",
		"ts": "2026-08-26T05:30:08.808Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114968133.08,
		"hash": "563ce21a0cf85f5d28de9c982903397c455eb4351180e2de4a2ab6a1d6741449"
	},
	{
		"id": "8270b9ae0c45",
		"ts": "2026-08-26T05:30:09.216Z",
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
		"liquidityUsd": 18728627.1,
		"hash": "8270b9ae0c458b62c595eb74435c8a640c1a37fd98ffd46d8e90394375263103"
	},
	{
		"id": "78bcb331b5c0",
		"ts": "2026-08-26T05:30:09.426Z",
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
		"liquidityUsd": 967190.83,
		"hash": "78bcb331b5c02e85e75be6d1819aa18785e16ea29f579d9ff8cee99d639c127b"
	},
	{
		"id": "2f4ef5563064",
		"ts": "2026-08-26T05:30:09.605Z",
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
		"liquidityUsd": 29787938.67,
		"hash": "2f4ef5563064be0317a2733c92bdaba5d489cf892a8a531d8070779ddc57b730"
	},
	{
		"id": "cc54b46c709a",
		"ts": "2026-08-26T05:30:09.804Z",
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
		"liquidityUsd": 4684394.09,
		"hash": "cc54b46c709a026fd527cdc83a781ec2be2db8f5780ace4f7eac85570a526733"
	},
	{
		"id": "9a8fbf3dffa3",
		"ts": "2026-08-26T05:30:09.999Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192138.63,
		"hash": "9a8fbf3dffa310c14f628bafd814de77063ca58a16b885c43c822ab38b0179c1"
	},
	{
		"id": "20c219ed5c80",
		"ts": "2026-08-26T05:30:10.204Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.45,
		"hash": "20c219ed5c80c71f0c1a642c75662591f7fea0e7eba9d2f0eea921e882ec09e4"
	},
	{
		"id": "5145a650865a",
		"ts": "2026-08-26T05:30:10.423Z",
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
		"liquidityUsd": 1908001.56,
		"hash": "5145a650865abbc2b2556c19b55c3f61122fcf892025179bf4fa1cd3706f52f2"
	},
	{
		"id": "02727890a9cb",
		"ts": "2026-08-26T05:30:10.709Z",
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
		"liquidityUsd": 1471335.57,
		"hash": "02727890a9cbd10487858b266f69e3c0a135868fb34a3f778901d473bb6db51e"
	},
	{
		"id": "a3aee1060f67",
		"ts": "2026-08-26T05:30:10.903Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1211197.66,
		"hash": "a3aee1060f675bd5c316fca13e02240a2f1d744b47a7b4b107dcbe29613f306a"
	},
	{
		"id": "843dbe9604fe",
		"ts": "2026-08-26T05:30:11.081Z",
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
		"liquidityUsd": 728785.58,
		"hash": "843dbe9604feede49a0a92165166d57d7cfc5114f9ab866ad544d900270dd2ae"
	},
	{
		"id": "6b383a83f756",
		"ts": "2026-08-26T05:30:11.280Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4129430,
		"hash": "6b383a83f756e025d8d070e8de3cef01e723e8663c23a931e1690673fc3fdd98"
	},
	{
		"id": "f32851291436",
		"ts": "2026-08-26T05:30:11.471Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 98213.14,
		"hash": "f32851291436c0dae6c93c9c6ede48a1836c4a6b27787ffd5b95768894cae1ba"
	},
	{
		"id": "aa4c3677f743",
		"ts": "2026-08-26T05:30:11.669Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 542462.1,
		"hash": "aa4c3677f743704e1f1ac42b57573cb2432ad00db132b9dadf731a20adb26f72"
	},
	{
		"id": "dbd5c3807fdf",
		"ts": "2026-08-26T05:30:11.846Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1847674.87,
		"hash": "dbd5c3807fdfcc0db35db74e8b26bc144f0467d106bf7e8c19efd3015665cafa"
	},
	{
		"id": "44231df6975c",
		"ts": "2026-08-26T05:30:12.044Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3388316.59,
		"hash": "44231df6975c7dcd2ca3665dae5382f5cb43dbe89780034424c2e0f05f9d46fc"
	},
	{
		"id": "535d8100d955",
		"ts": "2026-08-26T05:30:12.234Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 546781.2,
		"hash": "535d8100d9553988943894ed3e6aa23d71a2f0e973c1eae1f8841530f1efd91e"
	},
	{
		"id": "896f4fe5b4ec",
		"ts": "2026-08-26T05:30:12.513Z",
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
		"liquidityUsd": 851686.65,
		"hash": "896f4fe5b4ec35f3191b4a6d305e41a0065fd5ec1d2191f9cacc1c832248596d"
	},
	{
		"id": "3940c1a56eb9",
		"ts": "2026-08-26T05:30:12.728Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11481242.49,
		"hash": "3940c1a56eb966d7ffddae860d58c17742a2c650c76390ca55af8f540f0d7f44"
	},
	{
		"id": "d2a4609ab203",
		"ts": "2026-08-26T04:35:25.376Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115055991.21,
		"hash": "d2a4609ab20396620d262541166683821a7027e5c8ecae861ebb5e850522ba99"
	},
	{
		"id": "ca443d34cdcb",
		"ts": "2026-08-26T04:35:25.648Z",
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
		"liquidityUsd": 16837998.29,
		"hash": "ca443d34cdcb83c1e62e4f62dbfdb17af0dc235096c1489c57f3351df2c32c36"
	},
	{
		"id": "fb24663e13b7",
		"ts": "2026-08-26T04:35:25.903Z",
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
		"liquidityUsd": 969781.75,
		"hash": "fb24663e13b7db18c3b363a78d6fe8a2e87641e5e7286c5adafaf49b30a63ab6"
	},
	{
		"id": "0cf2ccd99307",
		"ts": "2026-08-26T04:35:26.152Z",
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
		"liquidityUsd": 29867819.03,
		"hash": "0cf2ccd9930708a84d2cc8146434533477f0346f44157a2a3fd62324ef06b3ec"
	},
	{
		"id": "2d9789be08be",
		"ts": "2026-08-26T04:35:26.431Z",
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
		"liquidityUsd": 4689179.64,
		"hash": "2d9789be08bee0c74df40575b7c788df8ed921e6bf16c0134af55cbfcc83cd76"
	},
	{
		"id": "3507b04927d4",
		"ts": "2026-08-26T04:35:26.775Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192138.63,
		"hash": "3507b04927d43617f34bf136a91d5b509663dcd55ce1c5eeacb16f7948f90702"
	},
	{
		"id": "a5f8087bd556",
		"ts": "2026-08-26T04:35:27.024Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.44,
		"hash": "a5f8087bd5563c67e48c37d4614eb2298d32a699864df8b71626d66a9ac6d5bd"
	},
	{
		"id": "142536f137f7",
		"ts": "2026-08-26T04:35:27.280Z",
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
		"liquidityUsd": 1915330.45,
		"hash": "142536f137f709e59d73bcc6aa75d84a52bbf52aa82141f7637b26ca0979bb02"
	},
	{
		"id": "a4f5bc456ffb",
		"ts": "2026-08-26T04:35:27.532Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1477320.53,
		"hash": "a4f5bc456ffbc456d0c1a1bd3bb5b7487bd882997a3039099a36422c6a21fa53"
	},
	{
		"id": "c1b6cff5a002",
		"ts": "2026-08-26T04:35:27.781Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1204596.24,
		"hash": "c1b6cff5a00269c44ecede6775d3f68ab365df6753e1d0019ab63b5eb97a2f5d"
	},
	{
		"id": "0666073ad534",
		"ts": "2026-08-26T04:35:28.012Z",
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
		"liquidityUsd": 729805.99,
		"hash": "0666073ad534a787c22335e7f7269d096d4bc3f5c94fffe331a0ef33b5ce7d32"
	},
	{
		"id": "27069fe04bb3",
		"ts": "2026-08-26T04:35:28.242Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4144996.76,
		"hash": "27069fe04bb33f9c94383f2db68280e73f6d4018762083ff2a3121c66ac3c698"
	},
	{
		"id": "701463a6817a",
		"ts": "2026-08-26T04:35:28.475Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 93805.72,
		"hash": "701463a6817acc4a49933089c2e1a7bfb1b9a95bc22b9bf15399bc9aba918613"
	},
	{
		"id": "18d403df205d",
		"ts": "2026-08-26T04:35:28.707Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544222.13,
		"hash": "18d403df205d7a93ac72afb8b3fadcbc2f7e82f505c228d2fc1e21b76aae90e6"
	},
	{
		"id": "397f24699911",
		"ts": "2026-08-26T04:35:28.939Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1866870.86,
		"hash": "397f24699911f9fa6f54dc7a5bf151d72f2d1b04b05d0fa36211e05ae80711c3"
	},
	{
		"id": "4fcecbbd3df5",
		"ts": "2026-08-26T04:35:29.173Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 551704.33,
		"hash": "4fcecbbd3df5b9b2f7a6452fe51e7c1e4407c6c5fe1230c5469be2c700caa3df"
	},
	{
		"id": "420aeb72cf74",
		"ts": "2026-08-26T04:35:29.405Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3396756.94,
		"hash": "420aeb72cf741e5c71e6cd869ac934abe1398938e92cd4cb74af925a50e15af4"
	},
	{
		"id": "031340ee7ed8",
		"ts": "2026-08-26T04:35:29.640Z",
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
		"liquidityUsd": 854096.61,
		"hash": "031340ee7ed8fcb4deed6578cd24a03233f693ab1e31cfa2dfe8810a0efae2ac"
	},
	{
		"id": "267c7c7b0c9d",
		"ts": "2026-08-26T04:35:29.872Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11496715.86,
		"hash": "267c7c7b0c9d5b773bccae56d577b32be06eaa21db87dda81a9e892ae589ff1b"
	},
	{
		"id": "68763bed1e63",
		"ts": "2026-08-26T03:00:32.188Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115061742.12,
		"hash": "68763bed1e632897d21bfb2106159e1852ee721f70c005e58d8d1be6a406305c"
	},
	{
		"id": "3b6ca7d690dc",
		"ts": "2026-08-26T03:00:32.558Z",
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
		"liquidityUsd": 18717935.72,
		"hash": "3b6ca7d690dc9f23aaef4af74831fa1149ea3e39226d15545be6ee13918ae369"
	},
	{
		"id": "678fcf5ff952",
		"ts": "2026-08-26T03:00:32.746Z",
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
		"liquidityUsd": 970792.14,
		"hash": "678fcf5ff952a500fa118abd0a87779ec73ba45c4c844497c44552e229debec4"
	},
	{
		"id": "9ee644e04af9",
		"ts": "2026-08-26T03:00:32.940Z",
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
		"liquidityUsd": 30038395.15,
		"hash": "9ee644e04af904ebaf4e3880b4c615aa4274ab59604751623094dd2973de104e"
	},
	{
		"id": "a64e0107e7dc",
		"ts": "2026-08-26T03:00:33.129Z",
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
		"liquidityUsd": 4720967.02,
		"hash": "a64e0107e7dcd1925bdca547bac7a19ce73ab7028873dd6a5c456c0a0726b14a"
	},
	{
		"id": "6e7b27c60c10",
		"ts": "2026-08-26T03:00:33.322Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1186569.78,
		"hash": "6e7b27c60c10418aeffc8e3d4159d8b7798311162712306815d81e9d5ffee456"
	},
	{
		"id": "2b757e5d63a1",
		"ts": "2026-08-26T03:00:33.526Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.42,
		"hash": "2b757e5d63a1e6edc925331dc036de368760f335237fc89fe68dd92e0323ea77"
	},
	{
		"id": "41cdd21bf35e",
		"ts": "2026-08-26T03:00:33.735Z",
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
		"liquidityUsd": 1916446.13,
		"hash": "41cdd21bf35e3891829906f7e138b5bcafee75af5301a9acd4f1921255a42202"
	},
	{
		"id": "cb891639fd8b",
		"ts": "2026-08-26T03:00:33.947Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1484268.59,
		"hash": "cb891639fd8b437a9d1ab7bb9a571022ff2b7b77afa5f790fce0fb21a4e8a4b9"
	},
	{
		"id": "8e799592f4aa",
		"ts": "2026-08-26T03:00:34.150Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1175583.27,
		"hash": "8e799592f4aac24691db48a1936546e50e28b9de8ba25993b0a3e4b4d402a85d"
	},
	{
		"id": "07516a6b4093",
		"ts": "2026-08-26T03:00:34.330Z",
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
		"liquidityUsd": 740768.32,
		"hash": "07516a6b4093d9d7c937bbe7d0cc286948e95fbeb49ecc32e86287bb4e5cf170"
	},
	{
		"id": "15914bb454df",
		"ts": "2026-08-26T03:00:34.510Z",
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
		"liquidityUsd": 1372110.2,
		"hash": "15914bb454df30669d37fd07c0e263efffc8cf32b7ecbe5f0b6c495bf731103a"
	},
	{
		"id": "fde11b64046e",
		"ts": "2026-08-26T03:00:34.716Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4140052.51,
		"hash": "fde11b64046efd547d96cbef82d50a4fef19acef3c20a7b476badbc2bd96a624"
	},
	{
		"id": "a7250825ef30",
		"ts": "2026-08-26T03:00:34.898Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84951.69,
		"hash": "a7250825ef300e877b081c0d443a29fe6e6627226efe0119919cc14c5456cd3b"
	},
	{
		"id": "1db84c81765b",
		"ts": "2026-08-26T03:00:35.088Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549689.7,
		"hash": "1db84c81765bf6c10dfac763ef6323a7120b7c61427e2d4096838e7778bd3d30"
	},
	{
		"id": "d12a0036c204",
		"ts": "2026-08-26T03:00:35.284Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1863723.55,
		"hash": "d12a0036c20484d9334826b8e8fe6c4af1317b14e4732f246ee7f391d2eea501"
	},
	{
		"id": "83cdb4e64e5a",
		"ts": "2026-08-26T03:00:35.469Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 559970.39,
		"hash": "83cdb4e64e5a123a2876614963fb19aa036d8437e7587697e9fca2b4d2b29586"
	},
	{
		"id": "37d5f4f42f2d",
		"ts": "2026-08-26T03:00:35.697Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3429580.25,
		"hash": "37d5f4f42f2dafb11f008b3809e9d1977e75033920b97f7236ce9a38f65415fe"
	},
	{
		"id": "96a6e7a7097b",
		"ts": "2026-08-26T03:00:35.880Z",
		"symbol": "PrinterInkCoin",
		"token": "0x6CB927b413068609853A539016F31DEff6E9AbA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 120807.55,
		"hash": "96a6e7a7097bed4b44fcdfe1c5129e8086cb2f16c2bf53e6cb5ee786a5f4fd81"
	},
	{
		"id": "1ffe94034b23",
		"ts": "2026-08-26T01:04:04.019Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114703785.78,
		"hash": "1ffe94034b23a842cdf0938b42327c383b04eca92c4ed54aa57eadbc26ea2682"
	},
	{
		"id": "920383fca7be",
		"ts": "2026-08-26T01:04:04.484Z",
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
		"liquidityUsd": 17040093.42,
		"hash": "920383fca7beb64d8bc2b65e4f29249bf0177602ba8f3dd977a6cf1bf9a6de34"
	},
	{
		"id": "de3c861feda9",
		"ts": "2026-08-26T01:04:04.723Z",
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
		"liquidityUsd": 964286.13,
		"hash": "de3c861feda9b58b3453e9636505cf090f32e9d31d2247aef85d2a28dae52227"
	},
	{
		"id": "d4bbdbf76a7f",
		"ts": "2026-08-26T01:04:05.199Z",
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
		"liquidityUsd": 29850656.83,
		"hash": "d4bbdbf76a7f9199d44df00116981129fd1c3941f15f1fa2864c72e579d3dd12"
	},
	{
		"id": "8add135cbda2",
		"ts": "2026-08-26T01:04:05.458Z",
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
		"liquidityUsd": 4622807.03,
		"hash": "8add135cbda28f20b95edce0db4a13573f36f4531872995dade140f677009f84"
	},
	{
		"id": "29413d34a3af",
		"ts": "2026-08-26T01:04:05.724Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1179255.81,
		"hash": "29413d34a3af8edc47a708ff27987bcd8e096d3d13fdf7380ddac311592b9c07"
	},
	{
		"id": "662778f44a17",
		"ts": "2026-08-26T01:04:05.989Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.42,
		"hash": "662778f44a176207d277119d41c9b984c99c46e3e10cf13c0439ee2c9fb00548"
	},
	{
		"id": "f31c8bba4805",
		"ts": "2026-08-26T01:04:06.235Z",
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
		"liquidityUsd": 1902582.27,
		"hash": "f31c8bba4805496955d7bbcd9cc1de0d1a61809dc7c828cd959b9fd718955be4"
	},
	{
		"id": "ff0ea0cd5c68",
		"ts": "2026-08-26T01:04:06.483Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1492195.11,
		"hash": "ff0ea0cd5c686b9db710c2e1a01edbeba717895bbdfee496e55f446f9f4aab9d"
	},
	{
		"id": "f7af54583c8e",
		"ts": "2026-08-26T01:04:06.944Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 730237.4,
		"hash": "f7af54583c8e16ce071d8ba249199336e08d414f217259c58bfc1960c78f894f"
	},
	{
		"id": "bdbf43301a02",
		"ts": "2026-08-26T01:04:07.176Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1204052.51,
		"hash": "bdbf43301a02b7f594f17d9058c65ab6000891fe62035903f6348ab5bb4f526f"
	},
	{
		"id": "93dac27b6c63",
		"ts": "2026-08-26T01:04:07.405Z",
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
		"liquidityUsd": 1376448.89,
		"hash": "93dac27b6c635ba3bbf5cc830c9cdd1290b9d61ce004690c918639e0addd18da"
	},
	{
		"id": "fa87075e222a",
		"ts": "2026-08-26T01:04:07.638Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 540144.33,
		"hash": "fa87075e222ae2c392ad962af3499071bdfce71d09adaff942c5760981ae18a7"
	},
	{
		"id": "5a56ac4141f5",
		"ts": "2026-08-26T01:04:07.863Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 92223.07,
		"hash": "5a56ac4141f52d14aa05865ba2ea77c36ed49f3cec46d03e92fe6248dfbae781"
	},
	{
		"id": "4345d0b750ca",
		"ts": "2026-08-26T01:04:08.102Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4062132.9,
		"hash": "4345d0b750cad4fc35fed5ec4e6516bd543cfcfcdadb827c875d4ca5f211240d"
	},
	{
		"id": "b054bd129e9d",
		"ts": "2026-08-26T01:04:08.325Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11556398.1,
		"hash": "b054bd129e9daaa9d6e17fd97f82b4ed92755454482c5fb6bd7403df821e2dec"
	},
	{
		"id": "e4e1f4914876",
		"ts": "2026-08-26T01:04:08.556Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1852878.53,
		"hash": "e4e1f4914876729db9d631c6112aaa7b3e54735e3229938dc8004f14b432221f"
	},
	{
		"id": "590b8709903f",
		"ts": "2026-08-26T01:04:08.779Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3343577.11,
		"hash": "590b8709903f9cb54ff6ce552c5644cbf18e661695fdec33615394d7da0118ae"
	},
	{
		"id": "cfb2d35524c3",
		"ts": "2026-08-26T01:04:09.003Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 570130.19,
		"hash": "cfb2d35524c37feba77c256f7d80572aa3c31426cf55db46af36d05764161b9f"
	},
	{
		"id": "995aee312c16",
		"ts": "2026-08-25T23:21:21.171Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114654252.79,
		"hash": "995aee312c168cc35767afe01624b3880c816848a30b83d0d5cba2522e0b8a2a"
	},
	{
		"id": "8d29b702868f",
		"ts": "2026-08-25T23:21:21.671Z",
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
		"liquidityUsd": 14552513.37,
		"hash": "8d29b702868fd35d488bc6cd648cf69856dfd881a75ca1cc8631438713bdd1de"
	},
	{
		"id": "3c4ff65db221",
		"ts": "2026-08-25T23:21:21.962Z",
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
		"liquidityUsd": 971035.64,
		"hash": "3c4ff65db2219482e1ff0a65fafe4a54c950db034ed94d75b0531e6a3acb64bf"
	},
	{
		"id": "deeb3b258511",
		"ts": "2026-08-25T23:21:22.245Z",
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
		"liquidityUsd": 29853804.95,
		"hash": "deeb3b258511ab91a779bec88cf5f903e3ddb2a644e72605d1c39df29e958937"
	},
	{
		"id": "98349e25b300",
		"ts": "2026-08-25T23:21:22.516Z",
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
		"liquidityUsd": 4626630.54,
		"hash": "98349e25b300b6e69add96283f470fd4d5aa6675777065cf0580718ca86e4cf9"
	},
	{
		"id": "275788f4c6a9",
		"ts": "2026-08-25T23:21:22.777Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1179431.96,
		"hash": "275788f4c6a9de02566267f367914a5d0a469cbeb0aed54b339ec887fe66b416"
	},
	{
		"id": "28210d4df78f",
		"ts": "2026-08-25T23:21:23.112Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1307342.35,
		"hash": "28210d4df78f10e63c668e8428e99dc23d168c89a2d142e92ec5fa601696753f"
	},
	{
		"id": "bbd39018043d",
		"ts": "2026-08-25T23:21:23.382Z",
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
		"liquidityUsd": 1904493.74,
		"hash": "bbd39018043d03f619c95f13d4dd2cd0f44d646c30f80c3724f679fabe77fa28"
	},
	{
		"id": "a97102300e7a",
		"ts": "2026-08-25T23:21:23.656Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1487915.3,
		"hash": "a97102300e7a71d72e68e2d806fe468cbd5d4c337de402921a4444cd9acc7e13"
	},
	{
		"id": "bf3dc2fb0159",
		"ts": "2026-08-25T23:21:23.936Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 744210.88,
		"hash": "bf3dc2fb015978c28dc6c2c393420364de53df1ad66396d4ebbd6256233e2c39"
	},
	{
		"id": "f57480a815a0",
		"ts": "2026-08-25T23:21:24.175Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1243024.86,
		"hash": "f57480a815a00b0e770d5f551415776b699dbd6cc273794062805ba935f8ba38"
	},
	{
		"id": "b116cad83428",
		"ts": "2026-08-25T23:21:24.414Z",
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
		"liquidityUsd": 1307387.95,
		"hash": "b116cad83428c58a13aa3534b88b63d65da6553544b06bfe434d4f9b1d2064a2"
	},
	{
		"id": "053e656df054",
		"ts": "2026-08-25T23:21:24.655Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94522.16,
		"hash": "053e656df05427507491d1e1cb8311d05c0d04c321257b83e11531315f315ad6"
	},
	{
		"id": "36ff74156f4c",
		"ts": "2026-08-25T23:21:24.896Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11511441.56,
		"hash": "36ff74156f4c2433b2fe2c6fd4f30c50a75a2fa96e64f822cc539a3e0580c020"
	},
	{
		"id": "49ec7dd68cdd",
		"ts": "2026-08-25T23:21:25.142Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4055130.6,
		"hash": "49ec7dd68cdd977e0d9c9ce4de0965542c478ca7dbbd3c1e4a3ef8f41764ffeb"
	},
	{
		"id": "ef52dd767a63",
		"ts": "2026-08-25T23:21:25.388Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 531303.09,
		"hash": "ef52dd767a63f110973987d61dafc8c0f547635fef11821194ec16876d2816ef"
	},
	{
		"id": "aee754700d21",
		"ts": "2026-08-25T23:21:25.638Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3345365.48,
		"hash": "aee754700d21e6d539b73549fc8dc25f91c29698cb8d99ca662e6adb37046e2f"
	},
	{
		"id": "385529d8c994",
		"ts": "2026-08-25T23:21:25.879Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1878092.69,
		"hash": "385529d8c99441adfb2fdf98372674a58a57a338e27bf43254f5f43e0ba0eeee"
	},
	{
		"id": "a510c7474dfe",
		"ts": "2026-08-25T23:21:26.119Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 553673,
		"hash": "a510c7474dfe5031be98620072e8ce5429b2273f684b5dce38f08d4a5ec63186"
	},
	{
		"id": "f016f0ff9aca",
		"ts": "2026-08-25T22:22:01.522Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114542485.98,
		"hash": "f016f0ff9aca5362d2525c745e78b97e35ef59a30f46f02d7092b17201b1f548"
	},
	{
		"id": "dd9940637c13",
		"ts": "2026-08-25T22:22:02.002Z",
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
		"liquidityUsd": 17544999.26,
		"hash": "dd9940637c13cfc09fc5da42790be6ffa3e4da5df0524315c006de2a3939cf02"
	},
	{
		"id": "bbc575031a01",
		"ts": "2026-08-25T22:22:02.257Z",
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
		"liquidityUsd": 970561.96,
		"hash": "bbc575031a01bf5555a557253d41f8aa1266b834490b6404b6d08387712752f4"
	},
	{
		"id": "6e03a2dbe6ab",
		"ts": "2026-08-25T22:22:02.521Z",
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
		"liquidityUsd": 29798587.88,
		"hash": "6e03a2dbe6ab1bcc263d170653f5020c04d152c2e55adf84ad3add59fa0498f5"
	},
	{
		"id": "35ca0729aa11",
		"ts": "2026-08-25T22:22:02.765Z",
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
		"liquidityUsd": 4624339.8,
		"hash": "35ca0729aa1189e2d876e7c444012687ee538201a8aec4bc5488000ca71df75c"
	},
	{
		"id": "24289cde5c39",
		"ts": "2026-08-25T22:22:03.035Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1175591.65,
		"hash": "24289cde5c39f98e8e1b79b641b7a46aaffb36279c29cdc52176873c2bba81a7"
	},
	{
		"id": "18a1927be820",
		"ts": "2026-08-25T22:22:03.277Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1310007.66,
		"hash": "18a1927be820dbd94f9c0a5803eaf9e399f6d36e1f33f7c7769090a45ba93e7b"
	},
	{
		"id": "36bd1738db57",
		"ts": "2026-08-25T22:22:03.558Z",
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
		"liquidityUsd": 1901386.06,
		"hash": "36bd1738db57cd96c8eb2a4c77e4e82f22bb38f6b7a70bcf04792d24257e3311"
	},
	{
		"id": "485d40e26ca5",
		"ts": "2026-08-25T22:22:03.829Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1502810.21,
		"hash": "485d40e26ca58ce74678e25759ed1321fc1679363c7763e2de3aa872f03a830b"
	},
	{
		"id": "a9f46bab094f",
		"ts": "2026-08-25T22:22:04.083Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 777371.98,
		"hash": "a9f46bab094f48bca8d74e8bbd5e991c1ed1139ed2db898f4e9e920034429827"
	},
	{
		"id": "07fd09aaf84f",
		"ts": "2026-08-25T22:22:04.303Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1257963.65,
		"hash": "07fd09aaf84fa9c180699f560a1299c97e1e0e7b9f3bf464f585e95dd88a4df6"
	},
	{
		"id": "8d3b4256b971",
		"ts": "2026-08-25T22:22:04.534Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 529727.95,
		"hash": "8d3b4256b9717af64bbaa3882626a7d807c5eed8fa4cd94f2af9d594aeb2ee59"
	},
	{
		"id": "758d9ba7e778",
		"ts": "2026-08-25T22:22:04.754Z",
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
		"liquidityUsd": 1310011.05,
		"hash": "758d9ba7e7783a9292d8e3eb5f1d1f0c4bdabd902e1492da46d36ffab4fca5fc"
	},
	{
		"id": "32f326db6f42",
		"ts": "2026-08-25T22:22:04.984Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4042358.92,
		"hash": "32f326db6f420efe9a042f8785d768c4f746d1e39112a545728b263e480605aa"
	},
	{
		"id": "1f9d61d76a8a",
		"ts": "2026-08-25T22:22:05.211Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11552664.77,
		"hash": "1f9d61d76a8a846e1a21d096af3cb8ddb42e56e711544438886b50fc1c5e76c0"
	},
	{
		"id": "ee1ba9af184b",
		"ts": "2026-08-25T22:22:05.436Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 89619.47,
		"hash": "ee1ba9af184b68aa3f87de0cd31f340647eacfd659b7b78c283977415f2af6c2"
	},
	{
		"id": "5e445d590bd0",
		"ts": "2026-08-25T22:22:05.678Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3351626.72,
		"hash": "5e445d590bd092be6def81042416ffbc1e73af39cd2b0ff7a340e23f759cf6c3"
	},
	{
		"id": "16cb8cf97505",
		"ts": "2026-08-25T22:22:05.917Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1872021.96,
		"hash": "16cb8cf9750592ea3e8af596d13b11d0f7fc902b1f2d5aafeb28a3aadbde09cb"
	},
	{
		"id": "5ae37a18f70e",
		"ts": "2026-08-25T22:22:06.146Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 560461.36,
		"hash": "5ae37a18f70e670cdb3ad5c56fe50e7ecdea51f6928fb787fe29eaac6a98d8fe"
	},
	{
		"id": "e394ba72cb27",
		"ts": "2026-08-25T21:23:33.589Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114169894.33,
		"hash": "e394ba72cb27bd3b36069b3636ccd0a078e28beee721b964b358c1983bedde21"
	},
	{
		"id": "4e319f3a24db",
		"ts": "2026-08-25T21:23:34.195Z",
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
		"liquidityUsd": 13455856.88,
		"hash": "4e319f3a24db6fb1c9d367142b2befa80da5f2dbb6e65ed53adfee773c9f6ed2"
	},
	{
		"id": "bc96cd8e2527",
		"ts": "2026-08-25T21:23:34.466Z",
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
		"liquidityUsd": 962168.55,
		"hash": "bc96cd8e25273fa784abd08a7da3dc00597b71a0c409a41bdc58ca083c28bc0c"
	},
	{
		"id": "267b25b5f5bc",
		"ts": "2026-08-25T21:23:34.740Z",
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
		"liquidityUsd": 28684501.02,
		"hash": "267b25b5f5bc14e5334c3098068c079c6787003b82d8804505fe6db15e5977d3"
	},
	{
		"id": "47586b0a8cc4",
		"ts": "2026-08-25T21:23:34.991Z",
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
		"liquidityUsd": 4576137.68,
		"hash": "47586b0a8cc4ba797862d231faca08be1c5388798610a272d32ceab93e5943e1"
	},
	{
		"id": "e93a9c377d75",
		"ts": "2026-08-25T21:23:35.237Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1162540.56,
		"hash": "e93a9c377d759c4da31a0bae2062e479c391ecbcf02f12ea3cad2da7578bb036"
	},
	{
		"id": "d7dbbee1c200",
		"ts": "2026-08-25T21:23:35.530Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1331092.6,
		"hash": "d7dbbee1c200dc426088c7ce79091d48f40b1740517761705b082059c984feca"
	},
	{
		"id": "52f4348d5df2",
		"ts": "2026-08-25T21:23:35.778Z",
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
		"liquidityUsd": 1883946.63,
		"hash": "52f4348d5df2dd0fc102ba2d178fab1d4af4c66fc6b7776c815be3a6b04a5f1b"
	},
	{
		"id": "77d65608cc51",
		"ts": "2026-08-25T21:23:36.037Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1526251.47,
		"hash": "77d65608cc51a1f1083a2266d6cb5d1ae74ac92731af9c1c6bdf44b8d87061b7"
	},
	{
		"id": "e0d143d9218e",
		"ts": "2026-08-25T21:23:36.350Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 788382.45,
		"hash": "e0d143d9218eb460e9d04722bc0acca5389e6e0a7c6a19a93379b955f39035d7"
	},
	{
		"id": "7c37c46b10c9",
		"ts": "2026-08-25T21:23:36.631Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1237136.44,
		"hash": "7c37c46b10c9ce966615394179471f6af6a8e4032db07930e12b8531e227ed15"
	},
	{
		"id": "cb2117e4271c",
		"ts": "2026-08-25T21:23:36.859Z",
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
		"liquidityUsd": 1330090.9,
		"hash": "cb2117e4271cc6263ae8a7b95f1b68bcf7926f5ac23bbf47b0892b2022158acd"
	},
	{
		"id": "6708f49c313c",
		"ts": "2026-08-25T21:23:37.116Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4004544.64,
		"hash": "6708f49c313cb570c81ac627dc7573b2ffb2d88d8606d814796e0aee45ff1d21"
	},
	{
		"id": "fa13769c19e3",
		"ts": "2026-08-25T21:23:37.379Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 91268.76,
		"hash": "fa13769c19e3d1711b2538d20f2e912c9f81394949db0ae403d307e7f2b15518"
	},
	{
		"id": "5e1394f31543",
		"ts": "2026-08-25T21:23:37.614Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 476908.94,
		"hash": "5e1394f31543c6bc04187ad1397bd61d092e05d3b786dfa53ca88782f9b03462"
	},
	{
		"id": "4592aa2dd9dd",
		"ts": "2026-08-25T21:23:37.849Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11379922.33,
		"hash": "4592aa2dd9ddc836b63b140625ed9c5b0d85af566a469e542af25dfe5651a515"
	},
	{
		"id": "807692c5703b",
		"ts": "2026-08-25T21:23:38.074Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3300952.99,
		"hash": "807692c5703bfcf9e902992d2e225af56b56336c44a8f36818f7c972cffec1d0"
	},
	{
		"id": "b4c53cbc3740",
		"ts": "2026-08-25T21:23:38.303Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1843720.95,
		"hash": "b4c53cbc37407534d631fb7064533f47b866ac18120fcc37957b08b8c6b8b998"
	},
	{
		"id": "1d786d431340",
		"ts": "2026-08-25T21:23:38.546Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 545747.59,
		"hash": "1d786d431340a27cf222bc0e86ebc3a538cdb2f1f87e517e07e9d56d6bb153b1"
	},
	{
		"id": "83d0a1a2e59b",
		"ts": "2026-08-25T20:23:57.080Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114741246.49,
		"hash": "83d0a1a2e59bd68a7afc980acfd0f82acf3087b915d156ab3e5eda905f50c15e"
	},
	{
		"id": "a7c388b7b94e",
		"ts": "2026-08-25T20:23:57.336Z",
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
		"liquidityUsd": 18255206.81,
		"hash": "a7c388b7b94e393f0d6ce0e35432b75f310d70fdd6366599e802a79280da7fbe"
	},
	{
		"id": "26b6e97a086d",
		"ts": "2026-08-25T20:23:57.550Z",
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
		"liquidityUsd": 973943.18,
		"hash": "26b6e97a086df51232357486eb7e8a53900241ad036306936f9d72864abf46f8"
	},
	{
		"id": "5beb8704d166",
		"ts": "2026-08-25T20:23:57.762Z",
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
		"liquidityUsd": 29683168.35,
		"hash": "5beb8704d1669870d597b4a4eec44f57efa97256466f16618a8a0dddceac646c"
	},
	{
		"id": "99ab1dd84296",
		"ts": "2026-08-25T20:23:57.969Z",
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
		"liquidityUsd": 4654879.62,
		"hash": "99ab1dd84296412c934a0d1e2a3ac80d1d0cd57dce9b54695c7a1c8926a09348"
	},
	{
		"id": "cd07ca4f3274",
		"ts": "2026-08-25T20:23:58.193Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180577.78,
		"hash": "cd07ca4f3274f9c10544d744b62c93310d997a36377530126025a4fa6c885489"
	},
	{
		"id": "687e7ecdb5ef",
		"ts": "2026-08-25T20:23:58.407Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29683168.35,
		"hash": "687e7ecdb5efe67024a2d3c05d02ab631fa09fee91ec1f6a2160c4ac96cb3c2e"
	},
	{
		"id": "08acf8bb52b9",
		"ts": "2026-08-25T20:23:58.629Z",
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
		"liquidityUsd": 1907419.67,
		"hash": "08acf8bb52b92874a1534b3185416913a26158d394d4ac918693c126c4c3c154"
	},
	{
		"id": "880de4c52209",
		"ts": "2026-08-25T20:23:58.841Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1509852.73,
		"hash": "880de4c5220993fbb695fe501b83877de4d05a03c0bcd17a9198754df76ff1b7"
	},
	{
		"id": "b707f6e12939",
		"ts": "2026-08-25T20:23:59.053Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 805787.86,
		"hash": "b707f6e12939903edbf3646b5c7d718a68b1934d417cf9e676361b02b6fbad31"
	},
	{
		"id": "9d35e4651a0b",
		"ts": "2026-08-25T20:23:59.260Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1218860.42,
		"hash": "9d35e4651a0b8ee8217970851372dd52fc10147ffa4f66bd24bec91f0bfaed34"
	},
	{
		"id": "4359f38afb2b",
		"ts": "2026-08-25T20:23:59.643Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11646114.63,
		"hash": "4359f38afb2b4ed7ada0829512f0919317e4abb89bf6fb13dde09f2d2d8da6f7"
	},
	{
		"id": "7387bd12bf1b",
		"ts": "2026-08-25T20:23:59.847Z",
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
		"liquidityUsd": 1298360.24,
		"hash": "7387bd12bf1bdffaac98d683da90e1dcf7ac89e6c4c6e928afde745de4abd3b6"
	},
	{
		"id": "497e5ae04e78",
		"ts": "2026-08-25T20:24:00.062Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4222151.34,
		"hash": "497e5ae04e786ed2a56925414f364c01c7a9e4542e61855d2347da5914f7a41a"
	},
	{
		"id": "75cfc7427d66",
		"ts": "2026-08-25T20:24:00.269Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 85448.7,
		"hash": "75cfc7427d66727d1614058e48e662e81fe5a94845bb9991badb8a4550c4a909"
	},
	{
		"id": "0858f759489c",
		"ts": "2026-08-25T20:24:00.569Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1873069.41,
		"hash": "0858f759489ce1ef8ae870f65d58f6695e40817c5e1b702b6b7e35995aac40b3"
	},
	{
		"id": "088a6d97a70b",
		"ts": "2026-08-25T20:24:01.038Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3385108.23,
		"hash": "088a6d97a70b0bc13c3c5a4d6d87d216955a152822cbe96296adc7e5954fce6b"
	},
	{
		"id": "6aa0c4106a40",
		"ts": "2026-08-25T20:24:01.280Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 553228.33,
		"hash": "6aa0c4106a40471b138e72eadb43805019c6eb06b53670dd4c5c042db0184b93"
	},
	{
		"id": "402614539f2b",
		"ts": "2026-08-25T20:24:01.490Z",
		"symbol": "KEYCAT",
		"token": "0x9a26F5433671751C3276a065f57e5a02D2817973",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 874413.37,
		"hash": "402614539f2b1db0732028da8ff153ffcc476fb49eb302800015fde4461e36c5"
	},
	{
		"id": "66132c1123c8",
		"ts": "2026-08-25T19:27:44.937Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114869420.54,
		"hash": "66132c1123c8b22b74f1a3e075b5c9cdeead12cab2fa561341d7c7994e120fbd"
	},
	{
		"id": "1c29dcc9b510",
		"ts": "2026-08-25T19:27:45.220Z",
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
		"liquidityUsd": 18950791.18,
		"hash": "1c29dcc9b51025725c0a03b39e873addec3bd3c500909de7bcc198bcdd9bbaad"
	},
	{
		"id": "03eb4f31e658",
		"ts": "2026-08-25T19:27:45.496Z",
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
		"liquidityUsd": 976753.38,
		"hash": "03eb4f31e658a19b91eae6403c06f0d97bc2f4884476ca42a0a005853d98c87e"
	},
	{
		"id": "72e9ea61dff4",
		"ts": "2026-08-25T19:27:45.781Z",
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
		"liquidityUsd": 30159313.3,
		"hash": "72e9ea61dff420e12f1906c410917ea75b18d4349ab249ff91a04990aa4e28f6"
	},
	{
		"id": "cf19580471d0",
		"ts": "2026-08-25T19:27:46.055Z",
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
		"liquidityUsd": 4674329.9,
		"hash": "cf19580471d0b3cdeabdca923112406d68ecaa31e042c09ae1143f93c15db7f5"
	},
	{
		"id": "fe7207dca33e",
		"ts": "2026-08-25T19:27:46.335Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1187972.02,
		"hash": "fe7207dca33ee4388fc1d57ddbbc1a2a11fa0e8ab45ffb13057755fec921bb6f"
	},
	{
		"id": "bd3d4b1dec76",
		"ts": "2026-08-25T19:27:46.603Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1265819.36,
		"hash": "bd3d4b1dec76cb74c886ce37a0330deb3e9b61eae135fd8317526d3174486998"
	},
	{
		"id": "e64063e61efc",
		"ts": "2026-08-25T19:27:46.874Z",
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
		"liquidityUsd": 1915696.61,
		"hash": "e64063e61efca230b1204235f0dec15ac092371d6d773fc840f68263107305e8"
	},
	{
		"id": "2770d3f80e5f",
		"ts": "2026-08-25T19:27:47.168Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1491859.37,
		"hash": "2770d3f80e5fe9a771e78007912cd68564b397679a204760a48e9c9cbed4e981"
	},
	{
		"id": "9ea333078e63",
		"ts": "2026-08-25T19:27:47.470Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 775125.97,
		"hash": "9ea333078e636b3260d1864f736cb88ee4515884e141f2c9abc57cf2dc761370"
	}
]
