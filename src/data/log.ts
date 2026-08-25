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
	"updatedAt": "2026-08-25T12:39:25.890Z",
	"tokensScored": 14805,
	"verdictsIssued": 14805,
	"safe": 12641,
	"risky": 1097,
	"likelyRug": 1067,
	"ticks": 856
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "14b58e5af6ac",
		"ts": "2026-08-25T12:39:21.844Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113527046.05,
		"hash": "14b58e5af6ac1028b7cbab40b048f7e1978333bed3f05186b0613f2b6faac22d"
	},
	{
		"id": "3a498a6b38ed",
		"ts": "2026-08-25T12:39:22.048Z",
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
		"liquidityUsd": 17613899.21,
		"hash": "3a498a6b38edc9d5775b397ae2d720318b62885c2add8f70c6fff68f3ba8576b"
	},
	{
		"id": "fd35a35c15d3",
		"ts": "2026-08-25T12:39:22.248Z",
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
		"liquidityUsd": 1002548.66,
		"hash": "fd35a35c15d3f1b2f8cc64a21c8dc2cb04023c061afa609dbd6db8d4b3e3289d"
	},
	{
		"id": "37cd7a886570",
		"ts": "2026-08-25T12:39:22.597Z",
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
		"liquidityUsd": 30029889.33,
		"hash": "37cd7a88657014953ba95279db54fc4a30944bc0872472355959340d9e5c3e98"
	},
	{
		"id": "dd31363c15ce",
		"ts": "2026-08-25T12:39:22.806Z",
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
		"liquidityUsd": 4770720.27,
		"hash": "dd31363c15ce7aea06b8ea9d31fda05201c26818b5bfbd7be3a1ffdc4e2b46da"
	},
	{
		"id": "21fa6a98485f",
		"ts": "2026-08-25T12:39:23.001Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1198245.78,
		"hash": "21fa6a98485f47505b4fcf4c6427ed0a3fd40c39c2a304fdc1470a247a817ee2"
	},
	{
		"id": "f9f1e92a581a",
		"ts": "2026-08-25T12:39:23.208Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1109581.09,
		"hash": "f9f1e92a581a18ff408834ae9694957b969507f5b87b24e5dfc5cf55efcd52aa"
	},
	{
		"id": "ae556332b6bc",
		"ts": "2026-08-25T12:39:23.415Z",
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
		"liquidityUsd": 1915120.35,
		"hash": "ae556332b6bc2bb61ec6a97f315142fdd0cf728738ff14c0c51a8cca9dcc4992"
	},
	{
		"id": "119772e05b6f",
		"ts": "2026-08-25T12:39:24.165Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 769220,
		"hash": "119772e05b6f437c690cc4a062c071d522a00e96e6bc191fb6aefdcd43da5432"
	},
	{
		"id": "d91966b2453f",
		"ts": "2026-08-25T12:39:24.353Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1576105.97,
		"hash": "d91966b2453fdc9bf22be95cb17d644be4542b803c5480cc99f291e4d1cc904b"
	},
	{
		"id": "e207f5fb3265",
		"ts": "2026-08-25T12:39:24.529Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1194296.91,
		"hash": "e207f5fb3265d273ca98c3b346a7af32cd69781e9a4ee50ef0a2ca0850ac2fbe"
	},
	{
		"id": "e0ad3bd505f4",
		"ts": "2026-08-25T12:39:24.725Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1884465.46,
		"hash": "e0ad3bd505f4e1421440080ab8c973a5ba2b112dd82bae8fc41b7b778027ebea"
	},
	{
		"id": "cc52d90664a3",
		"ts": "2026-08-25T12:39:24.909Z",
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
		"liquidityUsd": 900083.56,
		"hash": "cc52d90664a3d0d3e2a8dd70c0d34d81304f4dbeadfea18d01cde6911c231c92"
	},
	{
		"id": "9a1592b52393",
		"ts": "2026-08-25T12:39:25.101Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 102621.78,
		"hash": "9a1592b5239353b29146998e566a832cbc00d10f4b5c8bb62d190cc8aa9a69af"
	},
	{
		"id": "8e488e2a9d00",
		"ts": "2026-08-25T12:39:25.281Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 554447.77,
		"hash": "8e488e2a9d00e90266dccf3b6833a92badbca62913504708ca01606f8b2b2122"
	},
	{
		"id": "5fbf377fac60",
		"ts": "2026-08-25T12:39:25.517Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3464385.03,
		"hash": "5fbf377fac60ac4b14cd50531d348b8ea7f98dab78f760055cc0b411d769d8c3"
	},
	{
		"id": "99fbb0ad790b",
		"ts": "2026-08-25T12:39:25.694Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11538693.13,
		"hash": "99fbb0ad790baf860ac520d165eb6e1ed16d4c8d1d0b4449a7891df06b64b394"
	},
	{
		"id": "8a5e28418082",
		"ts": "2026-08-25T12:39:25.889Z",
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
		"liquidityUsd": 1109581.09,
		"hash": "8a5e28418082162c2e326e7ed69a69f874c1cbec0f606b0b79d2f3a9da4eb5e4"
	},
	{
		"id": "ae2717001705",
		"ts": "2026-08-25T11:23:01.626Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113606093.51,
		"hash": "ae27170017059544f00819607a4348b79ef5c3166b117d985afd489082254733"
	},
	{
		"id": "c9f628f9c34a",
		"ts": "2026-08-25T11:23:01.886Z",
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
		"liquidityUsd": 18074763.37,
		"hash": "c9f628f9c34a868e681484ca20c59256d3faa3c2545c2c1eb9a39359c367bf5c"
	},
	{
		"id": "aea9e86c360e",
		"ts": "2026-08-25T11:23:02.152Z",
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
		"liquidityUsd": 1008826.91,
		"hash": "aea9e86c360e29d918743365d51a0b5b319d50238d398304121f71563252682c"
	},
	{
		"id": "063a4c5014f4",
		"ts": "2026-08-25T11:23:02.402Z",
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
		"liquidityUsd": 30319379.43,
		"hash": "063a4c5014f47e4daa591fa9a515bf29c01b3405099c3222b5828cda0e7e04f5"
	},
	{
		"id": "4a67b3ed7178",
		"ts": "2026-08-25T11:23:02.636Z",
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
		"liquidityUsd": 4808163.81,
		"hash": "4a67b3ed7178da55e465ac84fadd08004098a03d7049fac3781c678de9dbc656"
	},
	{
		"id": "8e13d400a090",
		"ts": "2026-08-25T11:23:02.885Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1208507.55,
		"hash": "8e13d400a09027d2a1dde02ad110fa3226c67f84101fdd59e442dd1366e0014f"
	},
	{
		"id": "df7fb7518495",
		"ts": "2026-08-25T11:23:03.141Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2222809.24,
		"hash": "df7fb75184959596f9d51fd1e65ad4386e0435b1a4c549caa8c1c9e48b8c8ef3"
	},
	{
		"id": "f84ec6a7dc95",
		"ts": "2026-08-25T11:23:03.383Z",
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
		"liquidityUsd": 1922239.07,
		"hash": "f84ec6a7dc95483784a4e1dbb189af45175be818094e0e0402691ceac34ef411"
	},
	{
		"id": "f3e81611bb69",
		"ts": "2026-08-25T11:23:03.642Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 771717,
		"hash": "f3e81611bb69c7317b5316811cfa1844dce0077f78df13dd6152a6eaaacae764"
	},
	{
		"id": "5748cfcf6ef2",
		"ts": "2026-08-25T11:23:03.875Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1236304.21,
		"hash": "5748cfcf6ef268d4ea7a400557fe107395a1ff1efba262f9b81be2d2efb52fcd"
	},
	{
		"id": "853dd25aad13",
		"ts": "2026-08-25T11:23:04.108Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2222811.26,
		"hash": "853dd25aad13b4951320552a79c6313fb9cdd415ea1a92ba7b4c4df945c9605c"
	},
	{
		"id": "0e511dcd067d",
		"ts": "2026-08-25T11:23:04.331Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 107257.14,
		"hash": "0e511dcd067d8b03cc07f97c6c560fccb1a2525e549c932c39cc26f36d931e98"
	},
	{
		"id": "14ea249ce489",
		"ts": "2026-08-25T11:23:04.554Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 561947.04,
		"hash": "14ea249ce4899bb63bff1005832a5f17b48753852bb45b2d966bff61d5f43a65"
	},
	{
		"id": "6ce8c7a69a26",
		"ts": "2026-08-25T11:23:04.783Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1878256.71,
		"hash": "6ce8c7a69a262189ea02922534e85ed1f3f4aee88cade08cc2e1582c0d537cc3"
	},
	{
		"id": "8ff3420e620e",
		"ts": "2026-08-25T11:23:05.001Z",
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
		"liquidityUsd": 928140.58,
		"hash": "8ff3420e620e62994bb585f797af61e8c8baa14d1da8c8473ad62361fee91b45"
	},
	{
		"id": "d52b823aef57",
		"ts": "2026-08-25T11:23:05.233Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3521227.81,
		"hash": "d52b823aef57b809da581815e3d8d149b7a4724f2c3070cb120f68be2b17318e"
	},
	{
		"id": "8ab8b9080535",
		"ts": "2026-08-25T11:23:05.460Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11448741.26,
		"hash": "8ab8b90805355f32413d88d56331fd4c08595500cabdea58990a45703ddb8080"
	},
	{
		"id": "f254a69ac20c",
		"ts": "2026-08-25T11:23:05.683Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549992.59,
		"hash": "f254a69ac20c95ba3b4708230ab4fb6a8304b9e1a75a4627903558acb3efe617"
	},
	{
		"id": "c57789ccfff4",
		"ts": "2026-08-25T10:27:15.928Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113377224.36,
		"hash": "c57789ccfff4df2227273f7114ae1d21b416755016d8f263fd8718790c2bf43a"
	},
	{
		"id": "833a85aead39",
		"ts": "2026-08-25T10:27:16.462Z",
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
		"liquidityUsd": 18453095.95,
		"hash": "833a85aead39b15c60f4f474a4b8c426401f011b0d617a67872b350d7e0ca7e7"
	},
	{
		"id": "ca8328536049",
		"ts": "2026-08-25T10:27:16.825Z",
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
		"liquidityUsd": 1008925.81,
		"hash": "ca8328536049972d25e0f8f9ed03c9c6845033f08b618f12d0e31f5dd283343f"
	},
	{
		"id": "61b9aed8c07a",
		"ts": "2026-08-25T10:27:17.200Z",
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
		"liquidityUsd": 30429686.59,
		"hash": "61b9aed8c07aff8ade15eaf47f89186d0e8b6dd8e9d218cb754dea37134f8aaa"
	},
	{
		"id": "7a38596186aa",
		"ts": "2026-08-25T10:27:17.579Z",
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
		"liquidityUsd": 4803830.56,
		"hash": "7a38596186aa961c7ad8f810dbe5788d69a4a6a867aa81c081beb1dfa5fe4197"
	},
	{
		"id": "8ff221675114",
		"ts": "2026-08-25T10:27:17.800Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1208507.55,
		"hash": "8ff221675114013c255c9042814b399f83b28195d20d511c4b4c757cca1757cd"
	},
	{
		"id": "3a0cd4685520",
		"ts": "2026-08-25T10:27:18.037Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2214146.34,
		"hash": "3a0cd468552062f8636cbe442ce23c5c5a6d7d666e79a5847c738104e7ad2439"
	},
	{
		"id": "faed09eb6ac0",
		"ts": "2026-08-25T10:27:18.267Z",
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
		"liquidityUsd": 1924474.46,
		"hash": "faed09eb6ac0de334265f1e7c4ff7904f46d80f2b6dd69b5167ea142911b3d9d"
	},
	{
		"id": "230e9073a330",
		"ts": "2026-08-25T10:27:18.798Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 752761.96,
		"hash": "230e9073a330f49c28559d9670218a976447d7614cd796ee1efb3109bb8d4d55"
	},
	{
		"id": "4adb18d95f41",
		"ts": "2026-08-25T10:27:19.015Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1205883.72,
		"hash": "4adb18d95f41994e5028b93d7e20d900e216874c6900e900438d8293d7c0cf3e"
	},
	{
		"id": "3b27881607fa",
		"ts": "2026-08-25T10:27:19.236Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2209329.61,
		"hash": "3b27881607fadc0838733fc8b8af31ca38e034effb04b630b646559cba24120e"
	},
	{
		"id": "2e7c6136192f",
		"ts": "2026-08-25T10:27:19.464Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 108403.62,
		"hash": "2e7c6136192f412786251c9519ec7e79f1ca57555378545e8734aa20470df6d7"
	},
	{
		"id": "b6b548de687e",
		"ts": "2026-08-25T10:27:19.677Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 563724.65,
		"hash": "b6b548de687e1b9134d256610ac51696d2636231e8db94a3dafdbd763f217fe8"
	},
	{
		"id": "ed6c2305f7ae",
		"ts": "2026-08-25T10:27:19.954Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1889068.91,
		"hash": "ed6c2305f7aed373f63e007cd473f24acd1d89a01ee076832e41b052a1ce4e82"
	},
	{
		"id": "71a080420e5a",
		"ts": "2026-08-25T10:27:20.182Z",
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
		"liquidityUsd": 923192.52,
		"hash": "71a080420e5a70f4a97946da899b925e7df67d5f4ab016901b5601e9664ba4f3"
	},
	{
		"id": "d90970644d7e",
		"ts": "2026-08-25T10:27:20.399Z",
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
		"liquidityUsd": 3518971.36,
		"hash": "d90970644d7e258605d4e50f18a1914b6b5ed4308743e5dbd1d58dc085d92234"
	},
	{
		"id": "cf56273bbe75",
		"ts": "2026-08-25T10:27:20.631Z",
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
		"liquidityUsd": 11454738.65,
		"hash": "cf56273bbe7576ac2565162cc9e4e8eb86b5a8ce8f777b79209d82dd80c33a57"
	},
	{
		"id": "fa5c82feea31",
		"ts": "2026-08-25T10:27:20.866Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549591.9,
		"hash": "fa5c82feea31d4f85b51f5c7d36ffffa20363b4a54070322502973f46496aff1"
	},
	{
		"id": "32aa00058070",
		"ts": "2026-08-25T09:31:16.482Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113658022.72,
		"hash": "32aa00058070694135edc2359e28432b1d61832fb0151ee4dd75a8805a17bd37"
	},
	{
		"id": "c83dd0fb1a96",
		"ts": "2026-08-25T09:31:16.957Z",
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
		"liquidityUsd": 15329325.56,
		"hash": "c83dd0fb1a96fed791262fc5a942630da4853e0e1b3015649b230242bb042e29"
	},
	{
		"id": "3b72f71cc140",
		"ts": "2026-08-25T09:31:17.225Z",
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
		"liquidityUsd": 1013852.75,
		"hash": "3b72f71cc14005c29cb39102625d51479da92b3dae1e9e9f77b5bea823a100de"
	},
	{
		"id": "be3ebdc500b4",
		"ts": "2026-08-25T09:31:17.481Z",
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
		"liquidityUsd": 30526110.67,
		"hash": "be3ebdc500b4b913ad0d75158d087557fb9faa5507aa550ebdc95e6b1704366c"
	},
	{
		"id": "1e22132ed1c6",
		"ts": "2026-08-25T09:31:17.732Z",
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
		"liquidityUsd": 4821804.87,
		"hash": "1e22132ed1c66016b70da2b9206dd4a6e8e6550d909385278bfbaa9ee42cc3a8"
	},
	{
		"id": "159994b14cff",
		"ts": "2026-08-25T09:31:17.979Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1221723.04,
		"hash": "159994b14cffd8710e1d3b8e064ab39c7d424dd2879bb19270551a83af1f1cbf"
	},
	{
		"id": "01d536b8d7f2",
		"ts": "2026-08-25T09:31:18.239Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2313321.81,
		"hash": "01d536b8d7f2d642b3be9690f2a22f5ed6f3cac85b8d95cdb1031aa8d5041545"
	},
	{
		"id": "cabfc6369256",
		"ts": "2026-08-25T09:31:18.488Z",
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
		"liquidityUsd": 1928898.81,
		"hash": "cabfc636925607ab62cdc90327c4d7b1b87f5dc3ff0156fbd84601d1583253a0"
	},
	{
		"id": "818f4d2556f7",
		"ts": "2026-08-25T09:31:18.765Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 794624.03,
		"hash": "818f4d2556f7311c80b4a3febe5bdf6124eb6321fd33dbc24ee4a4ad11ea56cc"
	},
	{
		"id": "1f277529e11b",
		"ts": "2026-08-25T09:31:19.015Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 2320575.93,
		"hash": "1f277529e11bb8da0d0abf1e5858387cdfb316494d8ce7c6b32cba47edc40572"
	},
	{
		"id": "64a6cbb4ec7b",
		"ts": "2026-08-25T09:31:19.252Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1299418.28,
		"hash": "64a6cbb4ec7b3cf4f7f86310a8af793b772e077b7d9f35fc731910a8fb2c4748"
	},
	{
		"id": "a814c245dfe1",
		"ts": "2026-08-25T09:31:19.487Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 108872.93,
		"hash": "a814c245dfe19e00f88481b2366b3fa8e9903a67d2d94c26d35c9200156e9bff"
	},
	{
		"id": "e90735070fda",
		"ts": "2026-08-25T09:31:19.720Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 577053.23,
		"hash": "e90735070fdaee2258017d718eae3573be1799f496bf1a6dcd9556191d71fd6a"
	},
	{
		"id": "abee46a9bb84",
		"ts": "2026-08-25T09:31:19.953Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1066247.32,
		"hash": "abee46a9bb84c04a33e71525b7bccc6c561b87aa06f78d3b4cb0d61a536a2f50"
	},
	{
		"id": "00b1c9fb5099",
		"ts": "2026-08-25T09:31:20.194Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1894176.89,
		"hash": "00b1c9fb50998ac69cedc4947cb44207af2abc208645073129d367fa582b30da"
	},
	{
		"id": "8ea3bcf1a737",
		"ts": "2026-08-25T09:31:20.429Z",
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
		"liquidityUsd": 932653.37,
		"hash": "8ea3bcf1a737f2a254c75994a166dc9ebe55233cfdd7b4aee39d6ddb704675a4"
	},
	{
		"id": "9970e792e903",
		"ts": "2026-08-25T09:31:20.666Z",
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
		"liquidityUsd": 3541611.19,
		"hash": "9970e792e903deb09b4fb3c5e08559b61bdb70d56cc756f74b27a8b24c85de23"
	},
	{
		"id": "ef92a06886c5",
		"ts": "2026-08-25T09:31:20.898Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11488917.37,
		"hash": "ef92a06886c552834b4d4ad64083b89517ec72f0f223c4ad282b7dfd522179e8"
	},
	{
		"id": "8b6cd1e9a416",
		"ts": "2026-08-25T08:36:54.246Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113666483.94,
		"hash": "8b6cd1e9a416f4bfd6a9e438e0f0557f274cd05308f1321c25be50233c22caf6"
	},
	{
		"id": "daa3ee18ce51",
		"ts": "2026-08-25T08:36:54.493Z",
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
		"liquidityUsd": 18689676.67,
		"hash": "daa3ee18ce51d9686834a62130ca5d9910f18a391c1aa3da0e4d622098e571dc"
	},
	{
		"id": "7c73e22bf298",
		"ts": "2026-08-25T08:36:54.770Z",
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
		"liquidityUsd": 1015337.81,
		"hash": "7c73e22bf298f112ee3dc7f76503ca31ec1aa6c39f985a506a1496ebdb93b456"
	},
	{
		"id": "7dcea0a33213",
		"ts": "2026-08-25T08:36:55.034Z",
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
		"liquidityUsd": 30558866.99,
		"hash": "7dcea0a33213a0427b573c175a5529865469dfd22028f7fb5ce7647ef0499ff3"
	},
	{
		"id": "5a0826bb68d9",
		"ts": "2026-08-25T08:36:55.272Z",
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
		"liquidityUsd": 4834484.94,
		"hash": "5a0826bb68d9b2aaacc06013b301b99099c05ca234ec343a760e1d138ee38b5b"
	},
	{
		"id": "9be7cc6489ae",
		"ts": "2026-08-25T08:36:55.545Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1216190.86,
		"hash": "9be7cc6489aeca42505d40555ddaa2590ea2a311474752a8d2862215e8e02bfc"
	},
	{
		"id": "0eb2c80d87d4",
		"ts": "2026-08-25T08:36:55.802Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2348520.6,
		"hash": "0eb2c80d87d493face7c806f86bbff36fdef80d574c51f1b55ff16e11ec6379a"
	},
	{
		"id": "75d89d80daeb",
		"ts": "2026-08-25T08:36:56.047Z",
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
		"liquidityUsd": 1936130.67,
		"hash": "75d89d80daebc2ec8fb3bd8389ee75cdb94def478d2ecb45a74c214d9d324a33"
	},
	{
		"id": "7c4fc6e4330a",
		"ts": "2026-08-25T08:36:56.297Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 810163.52,
		"hash": "7c4fc6e4330a8ef32ab03f1eacbbe3046350be67e8aff6a175227a536d53613e"
	},
	{
		"id": "f2435c8d916f",
		"ts": "2026-08-25T08:36:56.547Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1314934.68,
		"hash": "f2435c8d916ffa343767e108db34cc0b0635b87e6f4cee7415601ee91901128c"
	},
	{
		"id": "fd183665f44c",
		"ts": "2026-08-25T08:36:56.778Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2347574.75,
		"hash": "fd183665f44cf4a518394459477cf05d0973af9e5ddd8868e98675579a36c337"
	},
	{
		"id": "8d1dc846c285",
		"ts": "2026-08-25T08:36:57.008Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1908574.02,
		"hash": "8d1dc846c28545946d700ec129eba345abc46da93db10206c5890a8761fd4d0d"
	},
	{
		"id": "450ec985dc36",
		"ts": "2026-08-25T08:36:57.238Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579601.68,
		"hash": "450ec985dc36fdd06a6963a7dfd043ada72164ab23097048fe89e16b77956604"
	},
	{
		"id": "a38f73afe7d3",
		"ts": "2026-08-25T08:36:57.469Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1074561.03,
		"hash": "a38f73afe7d37f9a16b0c190b8e3971a7a6639740c5c78eb83105181ab8dfd32"
	},
	{
		"id": "2a9b17f71905",
		"ts": "2026-08-25T08:36:57.683Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97793.29,
		"hash": "2a9b17f719059a9e286659223ab1de45f186584feddccab94fc978d5f0387c91"
	},
	{
		"id": "f37528a2e1ca",
		"ts": "2026-08-25T08:36:57.913Z",
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
		"liquidityUsd": 928127.48,
		"hash": "f37528a2e1ca9a47ffd2bcda812d285086e37d2a549bf4a21a9aa7f4ab2923fd"
	},
	{
		"id": "30666e5fe8a5",
		"ts": "2026-08-25T08:36:58.145Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3542750.3,
		"hash": "30666e5fe8a535d7aa3e50b178cf6666cc2d0bb103d1e41d8c7c08ff8d2a28c5"
	},
	{
		"id": "4233cb575853",
		"ts": "2026-08-25T08:36:58.359Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11424781.63,
		"hash": "4233cb575853b814652bfc88ddf8e2ed091f010cb14b7477894e096383dc881a"
	},
	{
		"id": "23928e170e49",
		"ts": "2026-08-25T07:40:21.017Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113804788.18,
		"hash": "23928e170e49ae0d4788401338cb4b40e23732f39af1f285dc51a76e8ce91d69"
	},
	{
		"id": "d99ecf8ece77",
		"ts": "2026-08-25T07:40:21.467Z",
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
		"liquidityUsd": 18378269.18,
		"hash": "d99ecf8ece770dfaad609ef6a9062116df6e122b6673104fc3f6c8be0c4082fc"
	},
	{
		"id": "85cc14d9fe26",
		"ts": "2026-08-25T07:40:21.944Z",
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
		"liquidityUsd": 1020898.03,
		"hash": "85cc14d9fe26b4be2a62622ab9facaa9f5cacb76384286234f0f55b7df24f069"
	},
	{
		"id": "d405a0cc8690",
		"ts": "2026-08-25T07:40:22.227Z",
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
		"liquidityUsd": 30424590.59,
		"hash": "d405a0cc8690400773895173f23adcb6c38c3b16d9189474ca33d2708caa85c7"
	},
	{
		"id": "bf5bd9ba63b5",
		"ts": "2026-08-25T07:40:22.477Z",
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
		"liquidityUsd": 4868198.07,
		"hash": "bf5bd9ba63b569364baa4c3cba00840d8ff343923fb41f0248d68a5badbca639"
	},
	{
		"id": "75f1a0b02569",
		"ts": "2026-08-25T07:40:22.738Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1227716.97,
		"hash": "75f1a0b025694288ef72956fbd2e3befb973a2c1e958268f8448cbe53a7ceef6"
	},
	{
		"id": "fb5451bb49a6",
		"ts": "2026-08-25T07:40:22.985Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2310184.3,
		"hash": "fb5451bb49a6c7557cbe68d12700efe1d83f189d0286015015f1bc61f2705904"
	},
	{
		"id": "50a899c62310",
		"ts": "2026-08-25T07:40:23.306Z",
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
		"liquidityUsd": 1940574.53,
		"hash": "50a899c62310dd4abb329619859777dfe1a9d7db3f9a11c4754b5be9cfb9438b"
	},
	{
		"id": "7d5dc5f0663a",
		"ts": "2026-08-25T07:40:23.778Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 814879.08,
		"hash": "7d5dc5f0663a6dc0ccee6d4858e41d59a47b1153c4a4ef340014327b52a66061"
	},
	{
		"id": "da8edfa23ef5",
		"ts": "2026-08-25T07:40:24.057Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1353299.8,
		"hash": "da8edfa23ef578743db9ed680713044137894d3de306df08035db72173787ad2"
	},
	{
		"id": "93ac0fab3ad8",
		"ts": "2026-08-25T07:40:24.281Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2308977.73,
		"hash": "93ac0fab3ad879d91c71db9130810bd57ec02bafbef42e240a71c145ab68bf4b"
	},
	{
		"id": "81804d7ac6b9",
		"ts": "2026-08-25T07:40:24.512Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1924288.82,
		"hash": "81804d7ac6b9d7b67e9f50541e50b58f6591b28d3f08f4a66d37503c304a08e9"
	},
	{
		"id": "2076eed8d6f7",
		"ts": "2026-08-25T07:40:24.740Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1079597.65,
		"hash": "2076eed8d6f7124c5a8b2b6d9cfeb7a308ec3818fef5cd58b5b76fb5ef6a4c95"
	},
	{
		"id": "b928a4d4c331",
		"ts": "2026-08-25T07:40:24.971Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 580228.01,
		"hash": "b928a4d4c3317ecc36d6bf746e623c4c3ea15f03f06eb2b1c731ff1d166135b9"
	},
	{
		"id": "74a0a2241d87",
		"ts": "2026-08-25T07:40:25.192Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 107916.82,
		"hash": "74a0a2241d872b68c463948d7ed97ef25521564bc16e27980d519631aedef0be"
	},
	{
		"id": "c28d223b5456",
		"ts": "2026-08-25T07:40:25.425Z",
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
		"liquidityUsd": 960706.31,
		"hash": "c28d223b54564a7c2e09d1378c9621baac5a6b63d947f7a5475dbf8a108c5763"
	},
	{
		"id": "1a7e0e2c8468",
		"ts": "2026-08-25T07:40:25.657Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3532277.41,
		"hash": "1a7e0e2c84687c598c3fbfa9efb2c3a86b2a7919dcdf4cdb4a4e7049c24c3878"
	},
	{
		"id": "a7acc8201c0d",
		"ts": "2026-08-25T07:40:25.881Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11483221.96,
		"hash": "a7acc8201c0d9df2aa6ba6ed99fde5550fcf6bab1326924be3aef0812028ea01"
	},
	{
		"id": "09ce57643737",
		"ts": "2026-08-25T06:39:10.392Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113658204.75,
		"hash": "09ce57643737e1706a047977b829ecda0935e3d2c953b9a31c3daae8fd25c8e0"
	},
	{
		"id": "2e4404600305",
		"ts": "2026-08-25T06:39:10.609Z",
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
		"liquidityUsd": 18587603.24,
		"hash": "2e44046003055095b7b0dfac66015d33d8ffa856edf38665ed8a8c47c6d6a4d6"
	},
	{
		"id": "b9f2d6f88b0d",
		"ts": "2026-08-25T06:39:10.828Z",
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
		"liquidityUsd": 1021613.19,
		"hash": "b9f2d6f88b0d123ddae6023f6bd09c06cf352fe73f5dad377555c1bd3564cb49"
	},
	{
		"id": "00ba94234a27",
		"ts": "2026-08-25T06:39:11.167Z",
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
		"liquidityUsd": 30731113.37,
		"hash": "00ba94234a27d2ef99bd5862fd5407a7fc433c87e0741181bd36aa44823e82ef"
	},
	{
		"id": "fe93c032bd01",
		"ts": "2026-08-25T06:39:11.357Z",
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
		"liquidityUsd": 4888738.84,
		"hash": "fe93c032bd01d527d29f1bce8035682c4f0e0345e377632d77bb5495ec2e53fb"
	},
	{
		"id": "e5e821475e88",
		"ts": "2026-08-25T06:39:11.573Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1235785.77,
		"hash": "e5e821475e881874267ec69f8e7ba43e455443f5dc6fa0eb0dee635358f4eec8"
	},
	{
		"id": "0cc0a4bb8737",
		"ts": "2026-08-25T06:39:11.776Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2422863.32,
		"hash": "0cc0a4bb87378ee297c418ede67fb52234f88bf38c1f88af503793019c171db8"
	},
	{
		"id": "c5d59d11a610",
		"ts": "2026-08-25T06:39:11.965Z",
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
		"liquidityUsd": 1927134.22,
		"hash": "c5d59d11a61070642228caa2c58cd8b9d7d9f78788be12aa23bca8cbaf266bc8"
	},
	{
		"id": "80430a22c77e",
		"ts": "2026-08-25T06:39:12.162Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 799155.27,
		"hash": "80430a22c77e642d81584d656480137224324d86fe0b7a86b453e937cee1782e"
	},
	{
		"id": "8951f1912c9d",
		"ts": "2026-08-25T06:39:12.373Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1365129.87,
		"hash": "8951f1912c9d1b2509a29e3f4ddd1f6c56adeb3a259f439a8aa7df78b0e8a556"
	},
	{
		"id": "6ce9246fd6cf",
		"ts": "2026-08-25T06:39:12.548Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2421414.61,
		"hash": "6ce9246fd6cf2dc024da116612d44fcb4dd1bdf8393a95868f6e62fe70c8118a"
	},
	{
		"id": "8f75e5acb983",
		"ts": "2026-08-25T06:39:12.732Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1932535.8,
		"hash": "8f75e5acb9837301cfc85f1bddb5981fee056b0447c38041402893265dc3f952"
	},
	{
		"id": "959b52fa91a4",
		"ts": "2026-08-25T06:39:12.930Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 108044.15,
		"hash": "959b52fa91a45325baf81bdcdd4cecc8b315266fee04b8eedd9c0f1d66c40300"
	},
	{
		"id": "615d440dae8d",
		"ts": "2026-08-25T06:39:13.122Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 588611.28,
		"hash": "615d440dae8df3ae3470031b5a3d51cbe7fc300cf08bfd843cbcf2963fd45467"
	},
	{
		"id": "78c51962a76d",
		"ts": "2026-08-25T06:39:13.296Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1076872.75,
		"hash": "78c51962a76dda3e452eef488f3e471379c866486bb73433122f4dee11b74725"
	},
	{
		"id": "b22e033ad833",
		"ts": "2026-08-25T06:39:13.480Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11484553.79,
		"hash": "b22e033ad83309738557ba4616b46dc1deb5e4be0b782c3cf25ad27112393074"
	},
	{
		"id": "f1e9733a8312",
		"ts": "2026-08-25T06:39:13.668Z",
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
		"liquidityUsd": 960438.62,
		"hash": "f1e9733a8312b89c128006cf8be924b5e7859d634026fa5ac10922a9ef701598"
	},
	{
		"id": "7d12c9885e37",
		"ts": "2026-08-25T06:39:13.851Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3544102.09,
		"hash": "7d12c9885e37d4e2dbf1fe9d4535d1a534436652dbef8ff41b894ec3a7cd105e"
	},
	{
		"id": "a5c9b1e033fc",
		"ts": "2026-08-25T05:27:36.880Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113587273.37,
		"hash": "a5c9b1e033fcf0720e8d3aa69436a62bd6b86de8262dd5d855e6b6331950cd4c"
	},
	{
		"id": "f5fbd0ab441a",
		"ts": "2026-08-25T05:27:37.359Z",
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
		"liquidityUsd": 14539005.02,
		"hash": "f5fbd0ab441aa80ccd8fd35e4d22659f4aa5aa1488854904a4694bd6cfc5974d"
	},
	{
		"id": "cf823c77c8a2",
		"ts": "2026-08-25T05:27:37.611Z",
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
		"liquidityUsd": 1022829.15,
		"hash": "cf823c77c8a2978a51177b5bff6bc6a43c9529072c1ed4e05b6ed27889961aa5"
	},
	{
		"id": "a895b64d9466",
		"ts": "2026-08-25T05:27:37.850Z",
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
		"liquidityUsd": 31043898.26,
		"hash": "a895b64d94664442d6242a67ddb3593ce5862f0b117002ed4222fc0d152fa16d"
	},
	{
		"id": "29c6600caa66",
		"ts": "2026-08-25T05:27:38.102Z",
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
		"liquidityUsd": 4933158.93,
		"hash": "29c6600caa66a19aa7ec7f6397c51584a570a4b5d96777e8dc7ef77216470c44"
	},
	{
		"id": "03690fd026a9",
		"ts": "2026-08-25T05:27:38.349Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1214990.87,
		"hash": "03690fd026a9857e3ba9a02046b2e5d5ef3d7f0dca2979f87c95436d5181702a"
	},
	{
		"id": "8b8c10831bbc",
		"ts": "2026-08-25T05:27:38.615Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2354651.57,
		"hash": "8b8c10831bbc9252dbe063e9703c7248e468b57f54cdd227a711dae42bbdad26"
	},
	{
		"id": "7746b376f355",
		"ts": "2026-08-25T05:27:38.865Z",
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
		"liquidityUsd": 1932342.1,
		"hash": "7746b376f355a76d5dfb888547dfc8dfc42ab4895e18fc45db335847d7fb30d1"
	},
	{
		"id": "fbed1e2f07a3",
		"ts": "2026-08-25T05:27:39.131Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 795121.37,
		"hash": "fbed1e2f07a34c333301c96874b6780e87845d0884003c7453697b33a23adaa2"
	},
	{
		"id": "b3e7a6c4387f",
		"ts": "2026-08-25T05:27:39.381Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1369963.99,
		"hash": "b3e7a6c4387f3254237e0756f3bb6bcddda9b2e9de856ca6fc996dffc97f282b"
	},
	{
		"id": "f55adafb962d",
		"ts": "2026-08-25T05:27:39.617Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2354651.57,
		"hash": "f55adafb962df9f885e37e3390198a387b42f14245c3ae832b804a9f00cfe9ac"
	},
	{
		"id": "76a9e3daa391",
		"ts": "2026-08-25T05:27:39.842Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 111765.08,
		"hash": "76a9e3daa3913f026b7148f3bfc71f186e47c8431ab85e97d0491023e553d052"
	},
	{
		"id": "0f5fb9d0832c",
		"ts": "2026-08-25T05:27:40.058Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1927870.49,
		"hash": "0f5fb9d0832c18f69f4e5027326a5301ccf92cb55ccfd16052d8069a6fd3f68c"
	},
	{
		"id": "16982c7ef002",
		"ts": "2026-08-25T05:27:40.294Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 590269.99,
		"hash": "16982c7ef0028806055a345408dad329fc24df16302f24facedd1acd83e9042e"
	},
	{
		"id": "bb6f4b685a0f",
		"ts": "2026-08-25T05:27:40.518Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1084419.17,
		"hash": "bb6f4b685a0fc19e85ff4367edf8452a718b6b378faac5b15b79b951f2f395ab"
	},
	{
		"id": "da3b1f94537b",
		"ts": "2026-08-25T05:27:40.737Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11542230.66,
		"hash": "da3b1f94537beddae8e0cabb98146eaacaaa67dff8fe5317699dcc975f4590da"
	},
	{
		"id": "833b658eadd9",
		"ts": "2026-08-25T05:27:40.961Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3608429.19,
		"hash": "833b658eadd99a02a970f8d99c740c69b771e50a238e5847b8f634f6d534e4ce"
	},
	{
		"id": "b82ffb7ac62d",
		"ts": "2026-08-25T05:27:41.179Z",
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
		"liquidityUsd": 1000028.84,
		"hash": "b82ffb7ac62d8c453dc9f0ec6a75082f7d01d63bba6233c572181529e0afb9ac"
	},
	{
		"id": "a9819bcfc166",
		"ts": "2026-08-25T05:27:41.414Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247226.62,
		"hash": "a9819bcfc166c19095925f0b876bfbcbb63c144d698b5f052cbbf28060cebc31"
	},
	{
		"id": "bd2e316db6ef",
		"ts": "2026-08-25T04:34:34.219Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113459206,
		"hash": "bd2e316db6eff860d3050c8c5ff51251618e1bd81564a1529fa15968d4de65e4"
	},
	{
		"id": "27c8784285d0",
		"ts": "2026-08-25T04:34:34.470Z",
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
		"liquidityUsd": 18018515.29,
		"hash": "27c8784285d07ca3cdda1c0a2b8f83aaa926b0e6de413086ae3f7b6b6dc63e0a"
	},
	{
		"id": "c8fd7c875f24",
		"ts": "2026-08-25T04:34:34.726Z",
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
		"liquidityUsd": 1020324.14,
		"hash": "c8fd7c875f24a5f6ac60fe7a95c94a01bb655f71a2c6028e86aa742708bd2ea1"
	},
	{
		"id": "22fe237d78d1",
		"ts": "2026-08-25T04:34:34.971Z",
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
		"liquidityUsd": 30745749.27,
		"hash": "22fe237d78d17ddb2a521c89e4d8de6b09455c963075072b86b7e507d5b85df6"
	},
	{
		"id": "1f9c7c7a03ee",
		"ts": "2026-08-25T04:34:35.229Z",
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
		"liquidityUsd": 4898004.81,
		"hash": "1f9c7c7a03eed47d0f30fee444fe8a3957591624e3b9c146c0aa06fb73d11026"
	},
	{
		"id": "678efe9c9bc1",
		"ts": "2026-08-25T04:34:35.474Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1210814.71,
		"hash": "678efe9c9bc1c6a69aaec58b0a1168b3feb0026038b418a34342a8a923e67b1f"
	},
	{
		"id": "9c01d9731266",
		"ts": "2026-08-25T04:34:35.721Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2272876.93,
		"hash": "9c01d97312661c84e2fe1590d3fd76be375c8338d0695458ed3f6405e1673bcc"
	},
	{
		"id": "ceace9a4ee25",
		"ts": "2026-08-25T04:34:35.971Z",
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
		"liquidityUsd": 1920538.71,
		"hash": "ceace9a4ee25e6a846f601b356d257ffe794ec809ceb1fb068544c0df5ed1be1"
	},
	{
		"id": "b3584e24b906",
		"ts": "2026-08-25T04:34:36.441Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 805466.09,
		"hash": "b3584e24b906c2aa8fc45277da137ec589434ac832e1bbc2b91ac6bfe16c770a"
	},
	{
		"id": "87376b6413d9",
		"ts": "2026-08-25T04:34:36.681Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1366194.58,
		"hash": "87376b6413d9e37b31a75dd829b13758dd1a945c86f993ba7350b0bb010994b6"
	},
	{
		"id": "652232ef8bff",
		"ts": "2026-08-25T04:34:36.910Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2272876.93,
		"hash": "652232ef8bff52a448ba3b640f6e400f5c21991ca3f0d68214d4bf4701de351c"
	},
	{
		"id": "9fc12dc61126",
		"ts": "2026-08-25T04:34:37.129Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 112240.19,
		"hash": "9fc12dc611261bcad45784c71fc421ccddbbbee2eeb571ce7eaaa6dd61cfd24e"
	},
	{
		"id": "573a69cf3850",
		"ts": "2026-08-25T04:34:37.358Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1924833.93,
		"hash": "573a69cf385013ccb7ddf320d90244856b123e2660c3cab947c0d38331b690bd"
	},
	{
		"id": "6f982ad5a865",
		"ts": "2026-08-25T04:34:37.578Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 602959.75,
		"hash": "6f982ad5a865598d21f1a55c65deab1e8d738d51ff55782a8783c115c7b755ff"
	},
	{
		"id": "d9b4ad698554",
		"ts": "2026-08-25T04:34:37.809Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11386717.92,
		"hash": "d9b4ad698554a92bbac31322345cf8923b5cadfa34ad671a6c7601792678791a"
	},
	{
		"id": "2d85b65717e3",
		"ts": "2026-08-25T04:34:38.038Z",
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
		"liquidityUsd": 995340.6,
		"hash": "2d85b65717e3c29dce7a31000ed21dbef63da27c95668922e1fd60c17017bb81"
	},
	{
		"id": "3e10959f4368",
		"ts": "2026-08-25T04:34:38.259Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246808.9,
		"hash": "3e10959f4368b9a57e6ea393e8e31defcd16fa8be49107a72013c4b350b8f8c1"
	},
	{
		"id": "20365855472a",
		"ts": "2026-08-25T04:34:38.492Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3550658.64,
		"hash": "20365855472a6d71dc61726ea8d3f94fd4fee0188422081a2eb8d57e1dd0a6a1"
	},
	{
		"id": "33528b90d6b6",
		"ts": "2026-08-25T04:34:38.718Z",
		"symbol": "BITBANK",
		"token": "0xB200000000000000000000E83d09CF068e06365c",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 26645.44,
		"hash": "33528b90d6b667cadb6aad1396ee4b7779b7fed908491978cac46192790a530a"
	},
	{
		"id": "29f490a607f9",
		"ts": "2026-08-25T03:44:24.888Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113605055.3,
		"hash": "29f490a607f9f2091195f34db351db484932201feb0e27d6823c949c558904fa"
	},
	{
		"id": "821ce6d94d7b",
		"ts": "2026-08-25T03:44:25.157Z",
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
		"liquidityUsd": 14551521.43,
		"hash": "821ce6d94d7b662b66a008c43b3856387249d08c35672b9cf409abb9e25092e3"
	},
	{
		"id": "93c64767563b",
		"ts": "2026-08-25T03:44:25.401Z",
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
		"liquidityUsd": 1026543.31,
		"hash": "93c64767563bd98e9bc09ed21fcadce89c77df375b6ea9ac95744f9815571a46"
	},
	{
		"id": "a03c7b2b6f0c",
		"ts": "2026-08-25T03:44:25.655Z",
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
		"liquidityUsd": 30811483.89,
		"hash": "a03c7b2b6f0ca06ca88d238c53c2b493e7d79e6feef8c93e2f9b6ab1540f5e07"
	},
	{
		"id": "a46085384d20",
		"ts": "2026-08-25T03:44:25.917Z",
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
		"liquidityUsd": 4919962.08,
		"hash": "a46085384d2077481def61d37640c202e5280334efb2bcd6b74027a4b933fd13"
	},
	{
		"id": "fc601fa06063",
		"ts": "2026-08-25T03:44:26.162Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1225692.73,
		"hash": "fc601fa06063b9f26e70d53e8b166753fafdd412e58b9e5ba70820c25427a48c"
	},
	{
		"id": "d27c8f9c2fbb",
		"ts": "2026-08-25T03:44:26.403Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2407251.37,
		"hash": "d27c8f9c2fbb97682092ac4a016219048c132837a1bd59f9633de2034a6ef2fc"
	},
	{
		"id": "58f556ef2fe2",
		"ts": "2026-08-25T03:44:26.654Z",
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
		"liquidityUsd": 1941169.59,
		"hash": "58f556ef2fe2f50b54912536429664cb53b11b6d4083060a03d5951bfce9739c"
	},
	{
		"id": "2c3a4527659e",
		"ts": "2026-08-25T03:44:26.928Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 843518.56,
		"hash": "2c3a4527659e66ee0c80be35ada87406f03480cc35c32137166daad6d1ed2662"
	},
	{
		"id": "47e29e4fb0b6",
		"ts": "2026-08-25T03:44:27.636Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1382568.33,
		"hash": "47e29e4fb0b639c2cb45e93e7611d9c72f7de4558437308a26fa0c22494d6597"
	},
	{
		"id": "f52bcfc2a23d",
		"ts": "2026-08-25T03:44:28.147Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2409518.9,
		"hash": "f52bcfc2a23de48c41ea0e3c4535c5c5eb0e2c7c471d8771533844dcca498f02"
	},
	{
		"id": "b7b4c871f052",
		"ts": "2026-08-25T03:44:28.365Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 603930.07,
		"hash": "b7b4c871f0527e994b70439d029779cca309b9030fc3f297c580ef05f0ebda81"
	},
	{
		"id": "fc545dd01d45",
		"ts": "2026-08-25T03:44:28.594Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 116775.05,
		"hash": "fc545dd01d456a92eaa7b8b0d9dfa726ca6103e11b3c870e6ba5a89139952bc4"
	},
	{
		"id": "e2656f4277bc",
		"ts": "2026-08-25T03:44:28.811Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1929155.29,
		"hash": "e2656f4277bc57b21373434f9e88a5b8db1308b47ad2c62127c808a35c1a34a5"
	},
	{
		"id": "9c89edeafc1a",
		"ts": "2026-08-25T03:44:29.033Z",
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
		"liquidityUsd": 1004267.16,
		"hash": "9c89edeafc1a4958e690632e71e112d97d9f8ef9da5c365d34e447d61b35f387"
	},
	{
		"id": "840d9a91658b",
		"ts": "2026-08-25T03:44:29.253Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247531.7,
		"hash": "840d9a91658b77fcecaf96946bf87d5c60e68712aa1a9f9b5b95d4981840dfee"
	},
	{
		"id": "cf9c902146ed",
		"ts": "2026-08-25T03:44:29.473Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3577736.28,
		"hash": "cf9c902146edb5b034c6a7e801484a458f5cf935454fd93501e5fb3d177aa8ea"
	},
	{
		"id": "19610492bf73",
		"ts": "2026-08-25T03:44:29.693Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11388965.52,
		"hash": "19610492bf733d33229d7735fa25a90e2ba9645f95046c9c3a01e3e1d61f4224"
	},
	{
		"id": "dd0dd978af5f",
		"ts": "2026-08-25T03:44:29.925Z",
		"symbol": "BITBANK",
		"token": "0xB200000000000000000000E83d09CF068e06365c",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 25876.57,
		"hash": "dd0dd978af5fbabe00abe82cd648ff63f7e87d92af80b72bd2693bd6fc08d0f1"
	},
	{
		"id": "c9131dd1edc9",
		"ts": "2026-08-25T02:54:24.385Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113685555.41,
		"hash": "c9131dd1edc94508d58160c89d0a04c731cb47d7b0e94182b0b0e7ce2b5b616c"
	},
	{
		"id": "cd7d81e13c6a",
		"ts": "2026-08-25T02:54:24.672Z",
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
		"liquidityUsd": 16430252.36,
		"hash": "cd7d81e13c6a2dc04f16c8e019cc4be76620923913a8c93f1ab3b5f391d0de5f"
	},
	{
		"id": "93c2609e05cd",
		"ts": "2026-08-25T02:54:24.910Z",
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
		"liquidityUsd": 1027351.88,
		"hash": "93c2609e05cd4fe0e254f6a0e5097928d55cbcf5748ce436d40215aa32a321f8"
	},
	{
		"id": "9bb445f642b2",
		"ts": "2026-08-25T02:54:25.354Z",
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
		"liquidityUsd": 31064488.02,
		"hash": "9bb445f642b24d549e0ee84a579e51bcbfc8710966094028033a52611a422c16"
	},
	{
		"id": "f121736e67b4",
		"ts": "2026-08-25T02:54:25.596Z",
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
		"liquidityUsd": 4936596.13,
		"hash": "f121736e67b49dc849e5c740520ff8350533ed340c6d1d72ff798cc863fa81fc"
	},
	{
		"id": "6f77e97d6e59",
		"ts": "2026-08-25T02:54:25.833Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1225692.73,
		"hash": "6f77e97d6e59f1b372ef6f41f6cf434cef04483f92e6606eebbbc203bfd34c8c"
	},
	{
		"id": "b32653a93d84",
		"ts": "2026-08-25T02:54:26.068Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2523247.13,
		"hash": "b32653a93d848f9e73f950125ad1da8fd0053cf2c37320a4b5ca0bd5e93196a6"
	},
	{
		"id": "208fe2eb4b35",
		"ts": "2026-08-25T02:54:26.350Z",
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
		"liquidityUsd": 1943683.76,
		"hash": "208fe2eb4b3590d0d939b3f8e723746b1562aef1f9b933804570e285dbe1b34d"
	},
	{
		"id": "14147428d4a5",
		"ts": "2026-08-25T02:54:26.614Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 803243.18,
		"hash": "14147428d4a500d35cb963edf3b474f3b06fcb860168d70bd6c1c9b8dca86e4b"
	},
	{
		"id": "3f9897e2dfcd",
		"ts": "2026-08-25T02:54:26.849Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1360914.25,
		"hash": "3f9897e2dfcd5f53b159910c697680ecf966289a084295cadc95393b9e6dbcd9"
	},
	{
		"id": "2e3a390d1e38",
		"ts": "2026-08-25T02:54:27.078Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2521499.75,
		"hash": "2e3a390d1e3892589fc0c268aec1de3e8e1b98fe8fecb399fe6a230bffb56785"
	},
	{
		"id": "5de6897fea82",
		"ts": "2026-08-25T02:54:27.488Z",
		"symbol": "BAES",
		"token": "0xa9F6d9EcA1F803854A13CECad0f21d43e007DB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 114443.14,
		"hash": "5de6897fea822235461a16b43cf9fd5dfeb0f576ef48c37bd677c5c833181a55"
	},
	{
		"id": "21960ded57f1",
		"ts": "2026-08-25T02:54:27.708Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 608527.67,
		"hash": "21960ded57f1ad3a2d00a9ab58908aba3526aa56bce571e23bd483e4f89dc409"
	},
	{
		"id": "ca6764144fc9",
		"ts": "2026-08-25T02:54:27.924Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1915198.08,
		"hash": "ca6764144fc9ee273a6973bb9593e81d474f3c8ca2c67c1219be63540de956cb"
	},
	{
		"id": "b35fca8a4c7b",
		"ts": "2026-08-25T02:54:28.144Z",
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
		"liquidityUsd": 993726.3,
		"hash": "b35fca8a4c7b4a54f20810b7accb3b7f5477c1852b5ea10b25f22273eea40e76"
	},
	{
		"id": "8bbc95ab4a6f",
		"ts": "2026-08-25T02:54:28.366Z",
		"symbol": "TYBG",
		"token": "0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 252991.53,
		"hash": "8bbc95ab4a6f12d80744265d497d5f04a9d5f72cd07b96c4bfe90f1d6eb3b13a"
	},
	{
		"id": "c0d16cf6208c",
		"ts": "2026-08-25T02:54:28.597Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11369633.66,
		"hash": "c0d16cf6208c2b2467d1082d243b4fc68a1cb4fd33244df9deb375aa739d2779"
	}
]
