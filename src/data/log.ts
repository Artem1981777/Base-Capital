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
	"updatedAt": "2026-07-10T06:41:43.972Z",
	"tokensScored": 2354,
	"verdictsIssued": 2354,
	"safe": 2054,
	"risky": 221,
	"likelyRug": 79,
	"ticks": 150
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "f92d548120f5",
		"ts": "2026-07-10T06:41:38.730Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 104874850.48,
		"hash": "f92d548120f59f45181c4bc5bcf9f8c4f06aa8fac72803e84905d3f3551f5205"
	},
	{
		"id": "0b9a6e59ee66",
		"ts": "2026-07-10T06:41:39.238Z",
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
		"liquidityUsd": 15933572.53,
		"hash": "0b9a6e59ee6632e0c41fc4e7f647827317807bdecffd1149e87cf63a2ea0a412"
	},
	{
		"id": "84c58153098c",
		"ts": "2026-07-10T06:41:39.514Z",
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
		"liquidityUsd": 1355050.69,
		"hash": "84c58153098c2fed2495b0de05c450ecc56a15d4bde959ec908004dad1527de6"
	},
	{
		"id": "3ce0f2545457",
		"ts": "2026-07-10T06:41:39.804Z",
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
		"liquidityUsd": 30649915.68,
		"hash": "3ce0f254545713f79f50e677ac6c4793f104ff4b0f33c8624f547e5209fc3d9d"
	},
	{
		"id": "f540d2b788c3",
		"ts": "2026-07-10T06:41:40.302Z",
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
		"liquidityUsd": 4043399.96,
		"hash": "f540d2b788c3a81fb843b8bf2a919c00601477ec99a6baaebfb963592e5686b5"
	},
	{
		"id": "ec35ff761350",
		"ts": "2026-07-10T06:41:40.581Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 978395.89,
		"hash": "ec35ff7613507384bbd0650bbf034ceac5e523e0c8fa10a2348edf892aa8791c"
	},
	{
		"id": "7ecd8d636f4d",
		"ts": "2026-07-10T06:41:40.844Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30649915.68,
		"hash": "7ecd8d636f4de7e6226c562c8f27bacfc19ff36cf717987b4d3455c2a6ab24b3"
	},
	{
		"id": "62ae1ec32311",
		"ts": "2026-07-10T06:41:41.116Z",
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
		"liquidityUsd": 2513052.89,
		"hash": "62ae1ec32311ccfdc289f0e64282bb48e48709a9a20b8588eec13abfb179a050"
	},
	{
		"id": "15e973aa110a",
		"ts": "2026-07-10T06:41:41.379Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2058435.71,
		"hash": "15e973aa110ad9d174e34716bd009e10a6b339a678a251a4ec5c378d4781326c"
	},
	{
		"id": "c9ecccedfd4a",
		"ts": "2026-07-10T06:41:41.664Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 103006.18,
		"hash": "c9ecccedfd4a6ad8ba758388b662e9e0107f20085c49329ffa20ea483f501ee8"
	},
	{
		"id": "c26d293f8476",
		"ts": "2026-07-10T06:41:41.922Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3517712.53,
		"hash": "c26d293f8476a33cb53f3af33ba3edebdc809072daf2dcd4c5c551415b501f4b"
	},
	{
		"id": "9f49bca14e17",
		"ts": "2026-07-10T06:41:42.185Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 322874.36,
		"hash": "9f49bca14e17e18aef5bceb202ad1fe91618395da7f72e4740a5daac40abb0f4"
	},
	{
		"id": "8bcac09cdbba",
		"ts": "2026-07-10T06:41:42.434Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 45819.86,
		"hash": "8bcac09cdbba64f7dd20905b2256f88adfb4c7d2c665a284e37a509fc05249e7"
	},
	{
		"id": "4512e6f88cac",
		"ts": "2026-07-10T06:41:42.694Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 380429.95,
		"hash": "4512e6f88cac2aec8380b9484845c3a3d5be385d53777c4b56ef9a29e6a74d03"
	},
	{
		"id": "3b5f6c8629f7",
		"ts": "2026-07-10T06:41:42.941Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8069187.7,
		"hash": "3b5f6c8629f7f4525a87af46db795319feb88f3481950a62645ccc0cb5195e6e"
	},
	{
		"id": "ecf203d3fb4b",
		"ts": "2026-07-10T06:41:43.204Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 792311.96,
		"hash": "ecf203d3fb4bd0dcbcf4becd5012d0c32deb8513c33bfb8603fb3a29c1320d0b"
	},
	{
		"id": "d02bc9254e63",
		"ts": "2026-07-10T06:41:43.465Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 725891.08,
		"hash": "d02bc9254e6389da1136312c0fa243e98eac5ac273dd1c41f5a795edf2bb1033"
	},
	{
		"id": "0c552690ffdd",
		"ts": "2026-07-10T06:41:43.723Z",
		"symbol": "cc0company",
		"token": "0x67c5F00491c09cbCF6359f95690574E6106bb3CF",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 46235.83,
		"hash": "0c552690ffdde1a97b97744b6fb10501a7ae79975e11790c33500d7c0542fa35"
	},
	{
		"id": "063bfe4036df",
		"ts": "2026-07-10T06:41:43.972Z",
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
		"liquidityUsd": 1294409.18,
		"hash": "063bfe4036dfc7ac0e6489eede87b63ed81b4d6d5ac8d8f47bcbbbb228fd08af"
	},
	{
		"id": "c45037ba1792",
		"ts": "2026-07-10T02:39:30.241Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105030225.17,
		"hash": "c45037ba179251d324209aff7f87df54e7a84fce2e701144353aa805dbea3d34"
	},
	{
		"id": "8853dbad2b39",
		"ts": "2026-07-10T02:39:30.721Z",
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
		"liquidityUsd": 15955174.34,
		"hash": "8853dbad2b39fde5256430adba66842b9c8e3e11712825461b134c9779e34347"
	},
	{
		"id": "f08c4b88a32c",
		"ts": "2026-07-10T02:39:31.211Z",
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
		"liquidityUsd": 1356366.81,
		"hash": "f08c4b88a32ceca9b89051d4ef3f41d1cb023e5de1ab8c5ab8058db932b1dd04"
	},
	{
		"id": "990e7a7c02f2",
		"ts": "2026-07-10T02:39:31.465Z",
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
		"liquidityUsd": 30647896.25,
		"hash": "990e7a7c02f21b43168dac6dce49bf2ab1a1036ba837aacb6477f37a69fa1212"
	},
	{
		"id": "4ec286f0c26c",
		"ts": "2026-07-10T02:39:31.724Z",
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
		"liquidityUsd": 4020470.48,
		"hash": "4ec286f0c26cf5e568d89ee0549dfb5e954464fa9bd55cebf1c9cf991653ee7d"
	},
	{
		"id": "690bea49dcf2",
		"ts": "2026-07-10T02:39:31.996Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 961559.29,
		"hash": "690bea49dcf219c0ecdbafa5f4dff4a0c0ff50d95adca2f508056d1ec3e0141d"
	},
	{
		"id": "88bfaf6471ea",
		"ts": "2026-07-10T02:39:32.247Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30647896.25,
		"hash": "88bfaf6471eaf3f96e9f6689b7a21d7efccc973b2e6a99d616403a2aef7a8d0e"
	},
	{
		"id": "ecd5c88146b9",
		"ts": "2026-07-10T02:39:32.519Z",
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
		"liquidityUsd": 2522146.09,
		"hash": "ecd5c88146b92d5a18b74ff862d960fb8de08d5d72a13287622a428709a3118c"
	},
	{
		"id": "962d81f27756",
		"ts": "2026-07-10T02:39:32.772Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 121052.27,
		"hash": "962d81f27756ed4f3361bf5f8463dd0ff1c227a5872d19cd2d2c217c9c1b5245"
	},
	{
		"id": "305dd569c8bf",
		"ts": "2026-07-10T02:39:33.024Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2187681.67,
		"hash": "305dd569c8bf7f09241859a95bd0daa5748a6efee548b02813ac8838acff9684"
	},
	{
		"id": "f7fbeab3431f",
		"ts": "2026-07-10T02:39:33.264Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 43921.39,
		"hash": "f7fbeab3431fe1618d0171f555bec683390413ab1e767ba9fb3b3ca2912b001f"
	},
	{
		"id": "54d7df1f696c",
		"ts": "2026-07-10T02:39:33.519Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 296661.74,
		"hash": "54d7df1f696c2150dd276664636bac1a7c037bc00c725e1fe8a19baa57f001b8"
	},
	{
		"id": "19229c70dc0a",
		"ts": "2026-07-10T02:39:33.756Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3489645.68,
		"hash": "19229c70dc0aed0b4988cbc8fee56688370f6b9ba948b75fd0e42c4eb04dcb0d"
	},
	{
		"id": "5aeaf37fddfe",
		"ts": "2026-07-10T02:39:33.993Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8183016.19,
		"hash": "5aeaf37fddfe33c62960e451c319a94a211a2b534ce49f56f8b5cd8845c572c9"
	},
	{
		"id": "63f19c73761e",
		"ts": "2026-07-10T02:39:34.236Z",
		"symbol": "cc0company",
		"token": "0x67c5F00491c09cbCF6359f95690574E6106bb3CF",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 44786.2,
		"hash": "63f19c73761e39fb01cb0e8286d6b45ee2929b97d5ff767b3cb61c561f09cf41"
	},
	{
		"id": "e7eafb5700e3",
		"ts": "2026-07-10T02:39:34.474Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 372224.04,
		"hash": "e7eafb5700e31e485b305593ea8b5f2769f127afac7feed82832323d247ee374"
	},
	{
		"id": "371a14432e36",
		"ts": "2026-07-10T02:39:34.729Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 806583.18,
		"hash": "371a14432e36f2e1edcf56de5dd07f7fd30d4090a7ffbe2df0c6abc8a77fc92f"
	},
	{
		"id": "7d35aedcfe80",
		"ts": "2026-07-10T02:39:34.965Z",
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
		"liquidityUsd": 1246067.79,
		"hash": "7d35aedcfe80adc3633f70eb36903588e1b703fa57bc0b7fd1a335a47d2b0a8f"
	},
	{
		"id": "72bf197e7518",
		"ts": "2026-07-10T02:39:35.202Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 573137.23,
		"hash": "72bf197e751844f905e52bf7c7b1f7cdc7cb30915fe1dacf97e8dde9204124a4"
	},
	{
		"id": "35d4548c10e9",
		"ts": "2026-07-09T23:08:17.074Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 104336537.84,
		"hash": "35d4548c10e98579b1c08ecddce4f9d5ababf6c976dcb52946ea69fd51c5ed82"
	},
	{
		"id": "259305ec7f96",
		"ts": "2026-07-09T23:08:17.583Z",
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
		"liquidityUsd": 15976482.35,
		"hash": "259305ec7f96d29775fa3c6399c55aa1cdf703c14cbc2a21895db755fdfc2953"
	},
	{
		"id": "df41ecdcbfda",
		"ts": "2026-07-09T23:08:18.095Z",
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
		"liquidityUsd": 1350736.35,
		"hash": "df41ecdcbfda9df7c51f740d52fa10224391623bf1c76c346f5e67fd56e67bc6"
	},
	{
		"id": "1a506a31ab62",
		"ts": "2026-07-09T23:08:18.355Z",
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
		"liquidityUsd": 30729532.85,
		"hash": "1a506a31ab6235a958b61f6b50ea4d14ec456c805f81f2d038928b5369196cd8"
	},
	{
		"id": "dab645d96732",
		"ts": "2026-07-09T23:08:18.631Z",
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
		"liquidityUsd": 3972049.34,
		"hash": "dab645d96732c9c2390fdebd81e9feb0d105525839efa0c671972c65194b3c26"
	},
	{
		"id": "3c4f8f5bc086",
		"ts": "2026-07-09T23:08:18.901Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 959137.81,
		"hash": "3c4f8f5bc086a880cea114ea0947a6b5ab68574a86d74deb6f11ef4cfb6e1c0d"
	},
	{
		"id": "4a5a9b14d8e3",
		"ts": "2026-07-09T23:08:19.169Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30729532.85,
		"hash": "4a5a9b14d8e39736bec8987539d3dd2db14dd759e699184674300e16ce745501"
	},
	{
		"id": "1ec113c8001a",
		"ts": "2026-07-09T23:08:19.428Z",
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
		"liquidityUsd": 2488877.01,
		"hash": "1ec113c8001a326d89051db0867e8e8fc045fa72b6ee33975525663b0c5b4326"
	},
	{
		"id": "dfd344e06076",
		"ts": "2026-07-09T23:08:19.697Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 10,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.8,
		"flags": [
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 113548.33,
		"hash": "dfd344e060764f1a6a1355b1b5e175672176803de0ea323f6f947ee647fd303e"
	},
	{
		"id": "327b8e9971d6",
		"ts": "2026-07-09T23:08:19.998Z",
		"symbol": "B20",
		"token": "0xB2000000000000000000003deF83e24a9A000b20",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 28232.58,
		"hash": "327b8e9971d622629ac2bb70abaf2573dd3a17954e02b027def200a9627f1c5b"
	},
	{
		"id": "a97a7f7b86a3",
		"ts": "2026-07-09T23:08:20.252Z",
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
		"liquidityUsd": 1911396.35,
		"hash": "a97a7f7b86a3a1890024e43113c523443064d507d6ed5a4f3d87f9295d0f6213"
	},
	{
		"id": "71902bf9cb8a",
		"ts": "2026-07-09T23:08:20.495Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 63648.94,
		"hash": "71902bf9cb8a2c487b9768f0a2822cdad9e186fa3de857f3547563e63102351d"
	},
	{
		"id": "592d6f2e7022",
		"ts": "2026-07-09T23:08:20.747Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 272325.19,
		"hash": "592d6f2e7022905c0ac78df360107f808e35a026262af19ae65097e8ad4c55c3"
	},
	{
		"id": "9a51fd9dac6b",
		"ts": "2026-07-09T23:08:20.999Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8098245.21,
		"hash": "9a51fd9dac6b2b0c6c24717b791433d43af89078b9f5b3bc0f5e60ac56a8c4c5"
	},
	{
		"id": "ddf36027915c",
		"ts": "2026-07-09T23:08:21.252Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3277154.59,
		"hash": "ddf36027915c2d6c1a86b90fa12a2dd92a0f47f4e2462b5eea5612826dd9c30d"
	},
	{
		"id": "559c3cb861cd",
		"ts": "2026-07-09T23:08:21.496Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 802948.02,
		"hash": "559c3cb861cd352c8801a6b333ecc33095d7405fd854f8ae3d7bbc4542da4dfc"
	},
	{
		"id": "75c9fc7197ff",
		"ts": "2026-07-09T23:08:21.756Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 350689.01,
		"hash": "75c9fc7197ff84f5669b1e3de23dee8492dbccd6badf841bb849870d74b2cb64"
	},
	{
		"id": "47ceaa883c31",
		"ts": "2026-07-09T23:08:22.015Z",
		"symbol": "cc0company",
		"token": "0x67c5F00491c09cbCF6359f95690574E6106bb3CF",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54836.2,
		"hash": "47ceaa883c31ce2a8118388ada914e32dbd473d0a454a9c30b51fe12634eb764"
	},
	{
		"id": "08d37628ca00",
		"ts": "2026-07-09T23:08:22.275Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 585907.02,
		"hash": "08d37628ca00f2e4a3caab25d1dfa35ebba1d5f1deccf4529e00801566793222"
	},
	{
		"id": "f0a708eb72fc",
		"ts": "2026-07-09T21:20:10.321Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 104198983.23,
		"hash": "f0a708eb72fc2873833de99c2737c3dbff0720540e34c55b302808e16ae4c6bb"
	},
	{
		"id": "e6b030c89182",
		"ts": "2026-07-09T21:20:10.828Z",
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
		"liquidityUsd": 15159220.35,
		"hash": "e6b030c89182cc4df1cc43af37fd5c397f32280290ce4a440c1b10b5cfdc712e"
	},
	{
		"id": "d5c17324973a",
		"ts": "2026-07-09T21:20:11.152Z",
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
		"liquidityUsd": 1349892.46,
		"hash": "d5c17324973a95d0b0e3407b152d39740a84006c0acf31f02ef78c6d556ad57f"
	},
	{
		"id": "4ac26a8911e3",
		"ts": "2026-07-09T21:20:12.040Z",
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
		"liquidityUsd": 30795073.55,
		"hash": "4ac26a8911e3ae5f34b13cb6cb21f60ee02e002807041703c2ae89d201eb9f91"
	},
	{
		"id": "d77b97c25083",
		"ts": "2026-07-09T21:20:12.315Z",
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
		"liquidityUsd": 3971077.91,
		"hash": "d77b97c25083d0a8ca1392f40b25ff61df89ca267c46eb71b4790e3d24efd682"
	},
	{
		"id": "40256338f09f",
		"ts": "2026-07-09T21:20:12.615Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 961563.61,
		"hash": "40256338f09f270e5cef098441ce62089e46923308f11d06bde182951bd3ac31"
	},
	{
		"id": "2f2f65d94c7a",
		"ts": "2026-07-09T21:20:12.899Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30795073.55,
		"hash": "2f2f65d94c7a36216fb14f33a2f2480061199437cadaea7747c95bd99e4fecea"
	},
	{
		"id": "f30611ee5a0c",
		"ts": "2026-07-09T21:20:13.202Z",
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
		"liquidityUsd": 2516689.86,
		"hash": "f30611ee5a0cca8ea7e6a4d3c73ccfdabf4d31376d1dcd82563844dc71a1ed29"
	},
	{
		"id": "a9c5259939ef",
		"ts": "2026-07-09T21:20:14.379Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 118924.16,
		"hash": "a9c5259939efd3ebed4aa1ea34acf9b4aa4aa3d1b0f4047599b97295eec2bd34"
	},
	{
		"id": "094b1d1c0b58",
		"ts": "2026-07-09T21:20:14.639Z",
		"symbol": "B20",
		"token": "0xB2000000000000000000003deF83e24a9A000b20",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"medium_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 25336.75,
		"hash": "094b1d1c0b589045970d11d2f7edaf3475508a467e38da9357e92bb893580a29"
	},
	{
		"id": "e00881316fd3",
		"ts": "2026-07-09T21:20:15.527Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1727414.46,
		"hash": "e00881316fd3016dea4890482e00f12cbaf408b101939e547f64649c01030011"
	},
	{
		"id": "b7098ec1cc11",
		"ts": "2026-07-09T21:20:15.768Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 66606.33,
		"hash": "b7098ec1cc11bdcc7e28812a54ea68433092b25a523b918d002706fb07d30604"
	},
	{
		"id": "add82d4f775a",
		"ts": "2026-07-09T21:20:16.020Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 270813.08,
		"hash": "add82d4f775abf88e10487ae5457dee59b825c4244de5def35935d5a44d393db"
	},
	{
		"id": "be98ac636f7d",
		"ts": "2026-07-09T21:20:16.263Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8059432.81,
		"hash": "be98ac636f7d98eb3f09a8bdd10b93bb1da53e99cfbcef02aade93b978b4aedf"
	},
	{
		"id": "201864fd37db",
		"ts": "2026-07-09T21:20:16.510Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 805691,
		"hash": "201864fd37dbbe3d9e15c3b06e7d2a1dc8329ee24874286a03f9c46d2296be3b"
	},
	{
		"id": "1f890d0b46c6",
		"ts": "2026-07-09T21:20:16.749Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 581071.96,
		"hash": "1f890d0b46c6f904d9de02c0198cb08ef76e690c177b851c95c98909efa3ee93"
	},
	{
		"id": "25ec3b7384f1",
		"ts": "2026-07-09T21:20:16.988Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 631214.58,
		"hash": "25ec3b7384f17156f9a89259df8949a65163343d15ceb7f2267f1434a2813a1e"
	},
	{
		"id": "3c06773d8f5b",
		"ts": "2026-07-09T21:20:17.227Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1880127.89,
		"hash": "3c06773d8f5b0efab7395fdead7f4e233e746f87fd693487635d76b205ed153c"
	},
	{
		"id": "af487adeabe4",
		"ts": "2026-07-09T19:39:40.968Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 104272250.03,
		"hash": "af487adeabe44701901af1fffff0692497e0e081efcebc9c8ca89a036c3a8cc2"
	},
	{
		"id": "54ead4c87c27",
		"ts": "2026-07-09T19:39:41.317Z",
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
		"liquidityUsd": 15646581.51,
		"hash": "54ead4c87c274fcf6958844bca4eec57567f3f2e72ea473227e3133ebc2a78dd"
	},
	{
		"id": "a06516b18fbb",
		"ts": "2026-07-09T19:39:41.661Z",
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
		"liquidityUsd": 1349291.48,
		"hash": "a06516b18fbbc8bd169644b8317cd0449858f7d3ad6708bdedd702a8ab623efd"
	},
	{
		"id": "f81f8b4620ba",
		"ts": "2026-07-09T19:39:42.004Z",
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
		"liquidityUsd": 31278834.05,
		"hash": "f81f8b4620bab7a2c983f08070de37d7c20d2df2aec1bb094304eb8d7e53e0a1"
	},
	{
		"id": "67708d64f1b3",
		"ts": "2026-07-09T19:39:42.350Z",
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
		"liquidityUsd": 3975525.8,
		"hash": "67708d64f1b3e5b1a5630fa87b4f349ae6e5434f337ba5f277098fcc9769a43f"
	},
	{
		"id": "293a86a8c0c6",
		"ts": "2026-07-09T19:39:42.539Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 961576.43,
		"hash": "293a86a8c0c69597f7b5f4b21c48a247ddcd2f746ec9e0867bb0e315d195a0f1"
	},
	{
		"id": "46b83c10ee35",
		"ts": "2026-07-09T19:39:43.145Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31278834.05,
		"hash": "46b83c10ee35d021f4f9db720d354759d80bd717a8244278f5a982b564dd98ec"
	},
	{
		"id": "3183663005e1",
		"ts": "2026-07-09T19:39:43.488Z",
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
		"liquidityUsd": 2525934.78,
		"hash": "3183663005e193f1189e7e890a547eef34a9dd8caefdf6fe9fccaabecce9737d"
	},
	{
		"id": "acda3384035c",
		"ts": "2026-07-09T19:39:43.839Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "acda3384035ccfa664b3a43bdb2788812a56c1fe76ffef0a99dc9dca1ff4c541"
	},
	{
		"id": "e62358aea449",
		"ts": "2026-07-09T19:39:44.029Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1749586.3,
		"hash": "e62358aea4495e2c4a86122402bb5da86566aefc48aa6b8cb58728586c748cfe"
	},
	{
		"id": "af09bde86dcb",
		"ts": "2026-07-09T19:39:44.213Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
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
		"hash": "af09bde86dcbf88ac1a7ffb0caf45fbe71a13c53d0fb728e701b3599e596ddb6"
	},
	{
		"id": "0f071b3d8a73",
		"ts": "2026-07-09T19:39:44.397Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7914903.48,
		"hash": "0f071b3d8a73c410a90d19046f8058106a1455bb952aff25338c6fc899b4d05f"
	},
	{
		"id": "7810353cce82",
		"ts": "2026-07-09T19:39:44.585Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 629668.29,
		"hash": "7810353cce825b2b63fa1f924018f6eff42fdce64e70cd59cdc8a8a954124b7a"
	},
	{
		"id": "ce5d53786dcb",
		"ts": "2026-07-09T19:39:44.768Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 574515.44,
		"hash": "ce5d53786dcbf61cc6a3a0c3462668de8fd7efba7db241a9430891acb511035a"
	},
	{
		"id": "02396b1bcc92",
		"ts": "2026-07-09T19:39:44.968Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 816072.69,
		"hash": "02396b1bcc92a0f85987d900546bf2de4fb19f4db79c23d3b190d3369be11595"
	},
	{
		"id": "231cb5cc2307",
		"ts": "2026-07-09T19:39:45.477Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 274768.58,
		"hash": "231cb5cc23079b5d646ff7bad38fc83b653ce386f5aea52e85c0836e811438b5"
	},
	{
		"id": "006e3a05c6c2",
		"ts": "2026-07-09T19:39:45.793Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1899294.32,
		"hash": "006e3a05c6c26dbb718884bd5a0c7236afdfcdc2cb01bb3b9602f1d764006bf6"
	},
	{
		"id": "ca3271e48ad2",
		"ts": "2026-07-09T19:39:45.976Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 325062.64,
		"hash": "ca3271e48ad250e6e66c93c678f47d09ae294443db87575bdd11796ca33cbb83"
	},
	{
		"id": "f16d19b97623",
		"ts": "2026-07-09T17:20:16.292Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 103680255.62,
		"hash": "f16d19b97623ba263ed25b1a908e62bb2aecc74ddacdd81a6dc07c96a00fb2d6"
	},
	{
		"id": "f17e41d16a7a",
		"ts": "2026-07-09T17:20:16.788Z",
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
		"liquidityUsd": 15710602.46,
		"hash": "f17e41d16a7aa47f31c21434b70abb85692678de781a716844e405b06dbe34ae"
	},
	{
		"id": "895b331462ab",
		"ts": "2026-07-09T17:20:17.064Z",
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
		"liquidityUsd": 1343723.47,
		"hash": "895b331462ab5e3e0199e05d32e220c259e879c6b332d839d9c072c14be25114"
	},
	{
		"id": "7306e8316288",
		"ts": "2026-07-09T17:20:17.335Z",
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
		"liquidityUsd": 31253736.74,
		"hash": "7306e831628807f10b5032a32116c9b1bc6acd38851490d9103c5d32f086d5a4"
	},
	{
		"id": "9ff9e11dd5bc",
		"ts": "2026-07-09T17:20:17.620Z",
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
		"liquidityUsd": 3943707.53,
		"hash": "9ff9e11dd5bccaf1776ef87494cf895a28b68997ea2bcd382dbf008375d2c55c"
	},
	{
		"id": "698c386ce4c6",
		"ts": "2026-07-09T17:20:17.888Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 967536.56,
		"hash": "698c386ce4c684139fd3d1cc84d05a529443fa92172173324233ff9b7481bd95"
	},
	{
		"id": "9072348c5fd9",
		"ts": "2026-07-09T17:20:18.161Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31253736.74,
		"hash": "9072348c5fd9d1c3cc34a8e02628a815d6ee6dcd2c83dee2471a40e4777a031f"
	},
	{
		"id": "fe5de3053d1a",
		"ts": "2026-07-09T17:20:18.478Z",
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
		"liquidityUsd": 2514569.11,
		"hash": "fe5de3053d1ac4f26f732f022b2d38bb8cbba5da2b8947e27a313aadad7eb302"
	},
	{
		"id": "14ff7af3e2a7",
		"ts": "2026-07-09T17:20:18.848Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "14ff7af3e2a7673a1fa6e6bfd2d67864a5a3d3812c99ee34e5c4797125b5da88"
	},
	{
		"id": "1789708f1066",
		"ts": "2026-07-09T17:20:19.111Z",
		"symbol": "B20",
		"token": "0xB2000000000000000000003deF83e24a9A000b20",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 44.14,
		"hash": "1789708f1066222e2a75012d3f38368e338df2b68d0d6e2cdb37f8555d25594f"
	},
	{
		"id": "3422272fd43c",
		"ts": "2026-07-09T17:20:19.365Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
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
		"hash": "3422272fd43c1166a248f81eb466d2ec12d951b840f84f8c6dec69921fa162ee"
	},
	{
		"id": "9280012c407c",
		"ts": "2026-07-09T17:20:19.610Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1654875.67,
		"hash": "9280012c407c4f493106bb891ff8be70cd90ed5f88265a5e595dee857c8ff4de"
	},
	{
		"id": "088d079fa40c",
		"ts": "2026-07-09T17:20:19.860Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 628379.62,
		"hash": "088d079fa40c8af83773838dfa9e6c5a5eeb9dea4ad94d140bfa99fdd2d4f59c"
	},
	{
		"id": "742b454ffb71",
		"ts": "2026-07-09T17:20:20.110Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7870105.23,
		"hash": "742b454ffb7177575570335c44797ca55e441bce4f516cc5aa9779bd2ddf21f0"
	},
	{
		"id": "c4d66adc1f57",
		"ts": "2026-07-09T17:20:20.366Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 571899.86,
		"hash": "c4d66adc1f5748d570209bd82df85823a51dd32fcea1aab84e4df28f6c7e8875"
	},
	{
		"id": "de045c450bb7",
		"ts": "2026-07-09T17:20:20.610Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 819646.17,
		"hash": "de045c450bb7a03c7c1749dba4f88476dad26ec711a09a526b5994451abe872a"
	},
	{
		"id": "3ab9885a7c7b",
		"ts": "2026-07-09T17:20:21.045Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1910276.43,
		"hash": "3ab9885a7c7ba7ee3284ab7263df86baed4a323810906694e6a28b5b80f6ca10"
	},
	{
		"id": "fe9b944d894e",
		"ts": "2026-07-09T17:20:21.292Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 346374.34,
		"hash": "fe9b944d894e125cf35b1293ca65dc2ced5a88d9ab9ef57508d34524cbeff455"
	},
	{
		"id": "08554d2d87b2",
		"ts": "2026-07-09T14:49:57.527Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 103733301.39,
		"hash": "08554d2d87b29df7da662ff3c55516a3e443719ff18c33b1ce047768e18959dc"
	},
	{
		"id": "fffeab7fe449",
		"ts": "2026-07-09T14:49:58.075Z",
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
		"liquidityUsd": 15017093.75,
		"hash": "fffeab7fe4491dfc51cf7020b759d615a2f4ef62e202dbcc8ed196272a234e66"
	},
	{
		"id": "4c8f96d93759",
		"ts": "2026-07-09T14:49:58.450Z",
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
		"liquidityUsd": 1344136.01,
		"hash": "4c8f96d937594579e29a27c1ecba10f04c0629d6861716130ceb4f9b3facea95"
	},
	{
		"id": "3b9d892f76f4",
		"ts": "2026-07-09T14:49:58.722Z",
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
		"liquidityUsd": 31338897.23,
		"hash": "3b9d892f76f4d20dbe328ac141397e89ed728888152ca0a97499f28165f02bc5"
	},
	{
		"id": "f2179e3f8240",
		"ts": "2026-07-09T14:49:58.933Z",
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
		"liquidityUsd": 3929194.13,
		"hash": "f2179e3f824054660437ee4ed8fdb41918e2a7797ffb6809bcc8b87bd040dfe7"
	},
	{
		"id": "3f5c6b8ac10e",
		"ts": "2026-07-09T14:49:59.141Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 967535.37,
		"hash": "3f5c6b8ac10e16a5a25dc9a0a6851a1ddf3a84ea0bcae88ed98a01b3ccd77608"
	},
	{
		"id": "eb693a2c4f69",
		"ts": "2026-07-09T14:49:59.344Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31338897.23,
		"hash": "eb693a2c4f69d813fcff849d9549a7ef02aa09b88f16299b3fd9246a4b6b9dbc"
	},
	{
		"id": "64adbea6881d",
		"ts": "2026-07-09T14:49:59.567Z",
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
		"liquidityUsd": 2518175.41,
		"hash": "64adbea6881dfe15212672a0acd052d40c6428b95470e295cc51876f4bcb2d6c"
	},
	{
		"id": "62d172ea9c80",
		"ts": "2026-07-09T14:49:59.775Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "62d172ea9c804d72ad542ef19e7e6419e0222f174d8ac7e67e6e0654e5adc12a"
	},
	{
		"id": "599dffcfcd5a",
		"ts": "2026-07-09T14:49:59.984Z",
		"symbol": "B20",
		"token": "0xB2000000000000000000003deF83e24a9A000b20",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 21.87,
		"hash": "599dffcfcd5a3f735738a9935332f6e31e95009fc7b5aec6b4b9e6768848faff"
	},
	{
		"id": "15c54174f7d1",
		"ts": "2026-07-09T14:50:00.195Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"not_open_source"
		],
		"liquidityUsd": 0,
		"hash": "15c54174f7d16f38694e2c1ab313251e844e1999d5371145afd7a52e0bb3e50b"
	},
	{
		"id": "dacd13b6dabf",
		"ts": "2026-07-09T14:50:00.451Z",
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
		"liquidityUsd": 629752.19,
		"hash": "dacd13b6dabfa12ad20d217c58f04189b4b2f31baa8dc4b28df453ac606ec51f"
	},
	{
		"id": "398ba8444595",
		"ts": "2026-07-09T14:50:00.738Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1915706.68,
		"hash": "398ba8444595bb18994be3d8c7c5a45cbef386e22b2b6500594652d615a5feba"
	},
	{
		"id": "059a2186db5f",
		"ts": "2026-07-09T14:50:00.951Z",
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
		"liquidityUsd": 7872654.99,
		"hash": "059a2186db5f6b9ea7c9696af0eff74523968afcaff1aba213d2cda674e4fccf"
	},
	{
		"id": "957637fbcebb",
		"ts": "2026-07-09T14:50:01.157Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1569787.24,
		"hash": "957637fbcebb9667cd70ab10bbfe2f292430381a5491dfc4374a2368e1ee3ee2"
	},
	{
		"id": "f9ab9810f35f",
		"ts": "2026-07-09T14:50:01.368Z",
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
		"liquidityUsd": 815744.6,
		"hash": "f9ab9810f35fe0964e9e3a38e51e4a879f57e7523ba051dce75497353433e25c"
	},
	{
		"id": "edec9a9ac448",
		"ts": "2026-07-09T14:50:01.575Z",
		"symbol": "cc0company",
		"token": "0x67c5F00491c09cbCF6359f95690574E6106bb3CF",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 72085.95,
		"hash": "edec9a9ac448b72bb41e75bb34010697936cc72da1d17982ad3605790b0e40ea"
	},
	{
		"id": "afd3b74e8e56",
		"ts": "2026-07-09T14:50:01.823Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 352831.9,
		"hash": "afd3b74e8e56d9701163a191a53fb4fbbb03a31d29737880055de88f6a076818"
	},
	{
		"id": "f80b68eafc85",
		"ts": "2026-07-09T11:53:59.272Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 103907636.31,
		"hash": "f80b68eafc85202329657a5bf38fd28b9a143643b1d77eed8776eebba1f6d6b6"
	},
	{
		"id": "a5ad31dfc400",
		"ts": "2026-07-09T11:53:59.758Z",
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
		"liquidityUsd": 15557043.45,
		"hash": "a5ad31dfc400ef206941b86b80d1d85bd8dbd38a7246506864642d25f7ae7f19"
	},
	{
		"id": "8f1041b1ef25",
		"ts": "2026-07-09T11:54:00.013Z",
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
		"liquidityUsd": 1341409.72,
		"hash": "8f1041b1ef25e42827e3878515bb50d4b859295ea617d58fbf106ccd4c2d96a3"
	},
	{
		"id": "90d1a2553528",
		"ts": "2026-07-09T11:54:00.474Z",
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
		"liquidityUsd": 31538080.58,
		"hash": "90d1a255352833c9e448811b26c8778845605b06773495a4071de1ae8a0658f4"
	},
	{
		"id": "6a29d6c1fba9",
		"ts": "2026-07-09T11:54:00.733Z",
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
		"liquidityUsd": 3927256.39,
		"hash": "6a29d6c1fba9fbd3096f2ac3b2eee91085c294c2730498689fc60f50bafca219"
	},
	{
		"id": "104588f44d16",
		"ts": "2026-07-09T11:54:00.988Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 967557.12,
		"hash": "104588f44d16a0e4f4440f8ec5948554d5a3b60eba1101fd7fe90db40cb47240"
	},
	{
		"id": "0b085832d50b",
		"ts": "2026-07-09T11:54:01.245Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31538080.58,
		"hash": "0b085832d50bc09b97dbe50a906347c7afe2c24654760023c0e0ec7aafbef13a"
	},
	{
		"id": "806620f3730d",
		"ts": "2026-07-09T11:54:01.554Z",
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
		"liquidityUsd": 2505748.46,
		"hash": "806620f3730db8df4041831935332d46892b7d6c0f5e0b9815d440db1db10520"
	},
	{
		"id": "1d5aab6734d6",
		"ts": "2026-07-09T11:54:01.813Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "1d5aab6734d6ae85b767dd09141851dc76fe61f5e6cd4cec61c81f243c701074"
	},
	{
		"id": "ebd3543df4e9",
		"ts": "2026-07-09T11:54:02.129Z",
		"symbol": "B20",
		"token": "0xB2000000000000000000003deF83e24a9A000b20",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 2732.18,
		"hash": "ebd3543df4e9fd16b6ee491e1cf8253d1388c488ca2dcf1317cfe275b9d93560"
	},
	{
		"id": "b9db262b5ad3",
		"ts": "2026-07-09T11:54:02.397Z",
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
		"liquidityUsd": 631953.3,
		"hash": "b9db262b5ad3199725b49d6bba47e830d1854089a78092b38857601d79939ffc"
	},
	{
		"id": "0351642aed44",
		"ts": "2026-07-09T11:54:02.655Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"not_open_source"
		],
		"liquidityUsd": 0,
		"hash": "0351642aed445ca336cae6d46a6c5cf3f9be6cf8938d1fb247c9da5daf56d42d"
	},
	{
		"id": "127078534cf5",
		"ts": "2026-07-09T11:54:02.910Z",
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
		"liquidityUsd": 7740866.6,
		"hash": "127078534cf5f9d66d4418fbbf03cf75089988e79b53d40c40a0529aa75b813d"
	},
	{
		"id": "ac8fb3bca839",
		"ts": "2026-07-09T11:54:03.151Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 311866.1,
		"hash": "ac8fb3bca839e0281a6a59112aaedb9ebec4e8c342ed193e1dbc7a6feb2d8b2b"
	},
	{
		"id": "994d21b1acfc",
		"ts": "2026-07-09T11:54:03.389Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1919490.4,
		"hash": "994d21b1acfc903805901f2c0dfd8633147ba646035e6cf1616cbd0fe14f4617"
	},
	{
		"id": "f9e199104682",
		"ts": "2026-07-09T11:54:03.626Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1592175.71,
		"hash": "f9e199104682400073d9d78724d443c02aef6a61fe96857686f8d0efde2b7fe0"
	},
	{
		"id": "75649efa66c9",
		"ts": "2026-07-09T11:54:03.866Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 815945.98,
		"hash": "75649efa66c9b551b568ddd5f2e01817ee01b076e3a05c0068f054ad049cdaeb"
	},
	{
		"id": "7d4fd7f5a8a8",
		"ts": "2026-07-09T11:54:04.105Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 513996.63,
		"hash": "7d4fd7f5a8a8f2eca24a114fde9630b189f3c8a6f1645e8299e54f3935655361"
	},
	{
		"id": "4d61e107fa35",
		"ts": "2026-07-09T08:24:39.614Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 104009078.18,
		"hash": "4d61e107fa352afbca10bae15e3c40cc3cbadc86af69e647b4e72cb9e4a4c86e"
	},
	{
		"id": "ee329cc3eb70",
		"ts": "2026-07-09T08:24:39.824Z",
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
		"liquidityUsd": 16304587.18,
		"hash": "ee329cc3eb700aa4d2feb88f2b73d1b9deb23792ad3ee74221579f67e0245a9d"
	},
	{
		"id": "d1ec85d8036d",
		"ts": "2026-07-09T08:24:40.034Z",
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
		"liquidityUsd": 1345627.39,
		"hash": "d1ec85d8036df9a4711c20d183ad24a6fc6b0c6a2311951da1cea4133e08c7d3"
	},
	{
		"id": "e30d9aee5fbb",
		"ts": "2026-07-09T08:24:40.392Z",
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
		"liquidityUsd": 31893430.95,
		"hash": "e30d9aee5fbb312a917b50478ff119acd081483d5b0e432503a21d13946463fd"
	},
	{
		"id": "50f7d31d9cbe",
		"ts": "2026-07-09T08:24:40.603Z",
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
		"liquidityUsd": 3945628.79,
		"hash": "50f7d31d9cbeaf4c693032d10279f3138a8b7cb616455846216d55580342b7ce"
	},
	{
		"id": "d4745eb6b232",
		"ts": "2026-07-09T08:24:40.810Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 967516.04,
		"hash": "d4745eb6b232d7ffef9fddeb504b2dfc8a1af5444b906ae77c0e922bfbc5034c"
	},
	{
		"id": "2db86f6b50a4",
		"ts": "2026-07-09T08:24:41.016Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31893430.95,
		"hash": "2db86f6b50a46d84a250736098d48d5860c065efb2681da611bb43b459f1d038"
	},
	{
		"id": "8386f26972bd",
		"ts": "2026-07-09T08:24:41.422Z",
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
		"liquidityUsd": 2537320.36,
		"hash": "8386f26972bd51bf3e53a45fc5a4ef3e53443ab40b770afe28a4b97cf30370d7"
	},
	{
		"id": "d68b4a4669d5",
		"ts": "2026-07-09T08:24:41.639Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "d68b4a4669d584ccbc08343535a656a6de366fc2a151cb937a52741625ce5ab4"
	},
	{
		"id": "0348f8ecea10",
		"ts": "2026-07-09T08:24:41.860Z",
		"symbol": "B20",
		"token": "0xB2000000000000000000003deF83e24a9A000b20",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 3269.78,
		"hash": "0348f8ecea10765bdf737cd5096e3f5de6125bb8a8a2213874bb02f25720c6c7"
	},
	{
		"id": "6049e865132a",
		"ts": "2026-07-09T08:24:42.057Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 630259.28,
		"hash": "6049e865132ad27083dec2e783024dc919d3f125b3632b464208e819c616aea8"
	},
	{
		"id": "3e3651cd1aa8",
		"ts": "2026-07-09T08:24:42.250Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
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
		"hash": "3e3651cd1aa8c8a7e6ecec7a4f64fa6c1f422a89f1631f15efac9d83362643f9"
	},
	{
		"id": "749500f401dd",
		"ts": "2026-07-09T08:24:42.441Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 326383.74,
		"hash": "749500f401dddca32d3a8b89cd665927f35b2a70a26ecb7ebb8f8b02a594ea28"
	},
	{
		"id": "31cd97b96665",
		"ts": "2026-07-09T08:24:42.639Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7801748.22,
		"hash": "31cd97b96665ed151800c80bf65e0f36e18392357273ffc019f68546ee2e716c"
	},
	{
		"id": "0a634dcc2ee2",
		"ts": "2026-07-09T08:24:42.847Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1932563,
		"hash": "0a634dcc2ee225524f95115173238d50da6a12ef070b2e0da89c12cf64b0f99a"
	},
	{
		"id": "65781a7778b4",
		"ts": "2026-07-09T08:24:43.045Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1617737.05,
		"hash": "65781a7778b409dcd6980a9cd98138e332f6fbcbb110510522584e3b85cff400"
	},
	{
		"id": "d3b9f994884f",
		"ts": "2026-07-09T08:24:43.267Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 418166.23,
		"hash": "d3b9f994884fbd0ea51c2c1f94ef9faf74a051037cf60d9a808174c99a7f0ae2"
	},
	{
		"id": "ffdd12c04b51",
		"ts": "2026-07-09T08:24:43.479Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 516058.88,
		"hash": "ffdd12c04b51c4424f0e59c99f66f1fb7bcfafc1e674c1274ac6312c49676995"
	},
	{
		"id": "a97f1778e08a",
		"ts": "2026-07-09T04:49:25.051Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 103244408.38,
		"hash": "a97f1778e08aa857b1935e1dcd791ceef5d618bb0a5be8a743c32007c6fbe8e9"
	},
	{
		"id": "ccebac377fdd",
		"ts": "2026-07-09T04:49:25.256Z",
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
		"liquidityUsd": 15860141.37,
		"hash": "ccebac377fdd25e6ce6eb660b868373487894626393be3e8d5ec6e2446780a6a"
	},
	{
		"id": "c6379b45d406",
		"ts": "2026-07-09T04:49:25.461Z",
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
		"liquidityUsd": 1333381.19,
		"hash": "c6379b45d40695d68a492af878cd59f569dd369e9ca8ccb59fc90a45a43e4526"
	},
	{
		"id": "44503363cd51",
		"ts": "2026-07-09T04:49:25.663Z",
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
		"liquidityUsd": 31914886.31,
		"hash": "44503363cd51b88b8de84ff59186bda49a5fd9f754803ed69a422a13161e0cc7"
	},
	{
		"id": "f5e18b5cf9d1",
		"ts": "2026-07-09T04:49:25.868Z",
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
		"liquidityUsd": 3891786.45,
		"hash": "f5e18b5cf9d11cef5e3bc331a20652266cff25572cc74426486faaf1e659158c"
	},
	{
		"id": "a0eabc17fa11",
		"ts": "2026-07-09T04:49:26.069Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 960537.39,
		"hash": "a0eabc17fa11cdb2aaa0c804acb42ff968de0a8c6bb00bfcdd05c4f828d4617a"
	},
	{
		"id": "1ea7833bb7ca",
		"ts": "2026-07-09T04:49:26.272Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31914886.31,
		"hash": "1ea7833bb7ca6c73fd9c633fa8a7380da352dc467a9a6bfa548e949739ead61f"
	},
	{
		"id": "c2a6cfc2c237",
		"ts": "2026-07-09T04:49:26.538Z",
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
		"liquidityUsd": 2542554.87,
		"hash": "c2a6cfc2c237bedd2601854b4f285f95871f51e4a09019cf052ee8a12a0e9582"
	},
	{
		"id": "0c2a98c87a2a",
		"ts": "2026-07-09T04:49:26.742Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 0,
		"hash": "0c2a98c87a2a272f44e0cef2c56e37ca64ff2233085ae3a78c0f98bbef8a580d"
	},
	{
		"id": "83741b02f1f3",
		"ts": "2026-07-09T04:49:26.955Z",
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
		"liquidityUsd": 617800.61,
		"hash": "83741b02f1f3cacd514803af7d95e925ed1da2af152f381e7b1c8803dc88dc48"
	},
	{
		"id": "6a64ca013bd6",
		"ts": "2026-07-09T04:49:27.222Z",
		"symbol": "B20",
		"token": "0xB2000000000000000000003deF83e24a9A000b20",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 2943.46,
		"hash": "6a64ca013bd69e134e72a83e4c8680be05fecab41e57276cee4baef5725827f4"
	},
	{
		"id": "f687de61432d",
		"ts": "2026-07-09T04:49:27.411Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 340132.05,
		"hash": "f687de61432d1ce9d9ca666c9e4ffbba24477baf3d272137ae759f4f1f47dbfb"
	},
	{
		"id": "5a1e7d4f7011",
		"ts": "2026-07-09T04:49:27.620Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1625699.11,
		"hash": "5a1e7d4f7011b378a73daaa89d396af6460a1dab418804b3db0e7193120782a5"
	},
	{
		"id": "fbd088ec5ca5",
		"ts": "2026-07-09T04:49:27.832Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 938121.89,
		"hash": "fbd088ec5ca510abf6c52327c5a120644f31c27bad240cd0351b73b17731d06c"
	},
	{
		"id": "53806e3953ba",
		"ts": "2026-07-09T04:49:28.029Z",
		"symbol": "B420",
		"token": "0xB200000000000000000000231d6C1F1CE455ba32",
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
		"hash": "53806e3953ba38a2f8f2ecb4999d32474adb82faec2fed7cfe458f3d2e8d2504"
	},
	{
		"id": "bf4ce5a97400",
		"ts": "2026-07-09T04:49:28.223Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 414291.65,
		"hash": "bf4ce5a97400b94cf32d71554a7a98416286ac9508f7b2d102dea70df3369f79"
	},
	{
		"id": "b7178fe5af92",
		"ts": "2026-07-09T04:49:28.445Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1916834.39,
		"hash": "b7178fe5af92afb822a575b8cdac83a0839504b72cd982c7dba57d0bc08eebc1"
	},
	{
		"id": "59096167ec8f",
		"ts": "2026-07-09T00:06:10.393Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102294219.18,
		"hash": "59096167ec8f3a280c619fc6c6ce3a8b909e31e41dd50dc95cad601dfb988c3b"
	},
	{
		"id": "c40ea19b3f77",
		"ts": "2026-07-09T00:06:10.595Z",
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
		"liquidityUsd": 15297072.78,
		"hash": "c40ea19b3f77838cd8ca1f83a5910535d5f3fba9853f1db06d0c0a2130ac1335"
	},
	{
		"id": "fa6fd7e5fc0e",
		"ts": "2026-07-09T00:06:10.943Z",
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
		"liquidityUsd": 1332654.69,
		"hash": "fa6fd7e5fc0e835eda67e5952bf238ba70018c42e7c1eb4900cd10daf0a4df2b"
	},
	{
		"id": "7005dee98fae",
		"ts": "2026-07-09T00:06:11.144Z",
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
		"liquidityUsd": 33212712.36,
		"hash": "7005dee98fae956187f9a46df4f89df1738e3b78d45db588cd2549cdea6af797"
	},
	{
		"id": "cbd35fde83cf",
		"ts": "2026-07-09T00:06:11.363Z",
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
		"liquidityUsd": 3921669.67,
		"hash": "cbd35fde83cf9e1fcadd02c0cc95be93a99f834604a48da781f892df5e230171"
	},
	{
		"id": "149f3ad33d0b",
		"ts": "2026-07-09T00:06:11.560Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 960533.88,
		"hash": "149f3ad33d0bd2c6ad192ab5e126e7ce3320bbbf2db7a9bc761bc60cd447431b"
	},
	{
		"id": "a7e0c8653417",
		"ts": "2026-07-09T00:06:11.763Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33212712.36,
		"hash": "a7e0c8653417c490ba48b9d39e07fa45e4be8886c9454bb6d62115e2568491db"
	},
	{
		"id": "99a4f95fb78e",
		"ts": "2026-07-09T00:06:11.971Z",
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
		"liquidityUsd": 2514331.11,
		"hash": "99a4f95fb78e0177cb3640ce77b2b67f4be617a0dcdcaadb8deb401cf5b1d842"
	},
	{
		"id": "8adb6dad94d3",
		"ts": "2026-07-09T00:06:12.331Z",
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
		"liquidityUsd": 626095.81,
		"hash": "8adb6dad94d359ef8584685c6d91138aacb215def37fec8e907bd4a7f61f1ddc"
	},
	{
		"id": "53f52ab8703d",
		"ts": "2026-07-09T00:06:12.531Z",
		"symbol": "RWAGMI",
		"token": "0xb200000000000000000000Bf0548AB2ebD00bA5e",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"low_liquidity",
			"new_pair_under_24h",
			"not_open_source",
			"sim_honeypot"
		],
		"liquidityUsd": 9369.94,
		"hash": "53f52ab8703d116393d08b5d0b8b6aace432bb7ec4f1f0d2cbd0936634387690"
	},
	{
		"id": "a514c9513142",
		"ts": "2026-07-09T00:06:12.707Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 352001.02,
		"hash": "a514c951314229d262b00e39937695924a536a7774b4449960c7dad320f57f84"
	},
	{
		"id": "5c62004c320f",
		"ts": "2026-07-09T00:06:12.898Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1596514.85,
		"hash": "5c62004c320fe7f4d222eaeb6412b572a3e662dff291a89856cf9fd01eb76c9a"
	},
	{
		"id": "ebd1d25c7403",
		"ts": "2026-07-09T00:06:13.086Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2976005.43,
		"hash": "ebd1d25c74034f474aa592423b16883e494d0158335209dc9e36daed6c87be7b"
	},
	{
		"id": "b6d82a2dde19",
		"ts": "2026-07-09T00:06:13.301Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 934186.33,
		"hash": "b6d82a2dde1981c0d313044ffcc22067bf5c1c0092851040caa24678974ee3bd"
	},
	{
		"id": "f2fc151b9265",
		"ts": "2026-07-09T00:06:13.497Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 515076.53,
		"hash": "f2fc151b9265489db0807b83aadc0092361a8989d36c45b873885738ce0c82d8"
	},
	{
		"id": "0751b4871d5c",
		"ts": "2026-07-09T00:06:13.690Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 254517.39,
		"hash": "0751b4871d5c4fc485ec34a5cab2e3ebcec85fd5eff74854cfd4acf608ccf1c0"
	},
	{
		"id": "d9de4a11d272",
		"ts": "2026-07-09T00:06:13.874Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1914472.62,
		"hash": "d9de4a11d272db583313443e99d1ace8c8ce27bbf7c4381fa6d4d3438149eab9"
	},
	{
		"id": "cf911e0b8c6d",
		"ts": "2026-07-09T00:06:14.053Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4625866.04,
		"hash": "cf911e0b8c6d4fe8653e963aac617e72b00768db993ff0a41a0fb7eb2aba6785"
	}
]
