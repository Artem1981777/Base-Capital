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
	"updatedAt": "2026-08-18T21:19:48.472Z",
	"tokensScored": 11921,
	"verdictsIssued": 11921,
	"safe": 10338,
	"risky": 871,
	"likelyRug": 712,
	"ticks": 704
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "2477dc6c2f4e",
		"ts": "2026-08-18T21:19:42.463Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112862923.93,
		"hash": "2477dc6c2f4e4c59bf88af9ddd9369110c420098c06df932b0d2f0abb9af61b0"
	},
	{
		"id": "fbd7950c1e7b",
		"ts": "2026-08-18T21:19:43.098Z",
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
		"liquidityUsd": 16637337.56,
		"hash": "fbd7950c1e7b14d28537627fce84603720bd9d83a8b54ef3189768c15d7967b4"
	},
	{
		"id": "cf3568719ba5",
		"ts": "2026-08-18T21:19:43.544Z",
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
		"liquidityUsd": 745089.89,
		"hash": "cf3568719ba539dd80a73000fd18a1c21b4e46b6fa7cdc30014cb806a432d4e6"
	},
	{
		"id": "777480a99de9",
		"ts": "2026-08-18T21:19:43.977Z",
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
		"liquidityUsd": 26797171.14,
		"hash": "777480a99de9f340d0bd842c7892719fe545798f676b5c346dafadcdc30ca0f1"
	},
	{
		"id": "231185241417",
		"ts": "2026-08-18T21:19:44.413Z",
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
		"liquidityUsd": 4278021.32,
		"hash": "231185241417c630501bc335da6c4d6ca64f94a6db1f325500b0e3ebe2565ce5"
	},
	{
		"id": "4d1cdd6c66e1",
		"ts": "2026-08-18T21:19:44.645Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889005.54,
		"hash": "4d1cdd6c66e187b91aef56028e6aedf0e2caa12303a96dfa9fb766ef09d55043"
	},
	{
		"id": "f49b0d154824",
		"ts": "2026-08-18T21:19:44.874Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4322894.23,
		"hash": "f49b0d1548246b54a3b7891855421d9b6ee857a320a294e145880bd97988701b"
	},
	{
		"id": "d8a6a5aed58f",
		"ts": "2026-08-18T21:19:45.317Z",
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
		"liquidityUsd": 3545409.16,
		"hash": "d8a6a5aed58f5d977094d1351433916379153fa3028fbef1d618f51b68fce9c3"
	},
	{
		"id": "f10cc036fbbf",
		"ts": "2026-08-18T21:19:45.948Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 438868.79,
		"hash": "f10cc036fbbf0d85d73945ee37a8f3fa9660dabe6b0c68a83fffb22e2d0dd73b"
	},
	{
		"id": "cf37bf34d69e",
		"ts": "2026-08-18T21:19:46.184Z",
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
		"liquidityUsd": 483373.56,
		"hash": "cf37bf34d69ed093b6a373ebc66757d90394fe07d449d946dc5d65092dbae25f"
	},
	{
		"id": "9012035bceac",
		"ts": "2026-08-18T21:19:46.399Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4330106.89,
		"hash": "9012035bceac9488e98b45e857410564fb69e2e3b6f7e002ec201e2c1de4b570"
	},
	{
		"id": "c7a13193bbd0",
		"ts": "2026-08-18T21:19:46.612Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2790965.84,
		"hash": "c7a13193bbd07b17c2470167a7d7f179191c68405ab32e272c4ffaeb0d1b2bed"
	},
	{
		"id": "274300251261",
		"ts": "2026-08-18T21:19:46.829Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 63039.71,
		"hash": "27430025126170ff8728de0e46c84d16019c3774e0eb8ef14595c4e98908e712"
	},
	{
		"id": "c5398c91f56b",
		"ts": "2026-08-18T21:19:47.178Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 851911.87,
		"hash": "c5398c91f56bf75657a1af180118805c24be42334fa329f9a7c73d20781f4bb9"
	},
	{
		"id": "101ebafc520b",
		"ts": "2026-08-18T21:19:47.393Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9289418.74,
		"hash": "101ebafc520b61e21ebde16f67f40421e3a57f8dec60d6553ac65a1520e37a16"
	},
	{
		"id": "7deceba978d3",
		"ts": "2026-08-18T21:19:47.606Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247298.46,
		"hash": "7deceba978d349d324bcab704211f847339ff94b75406d1ac989b2e2c3a092ac"
	},
	{
		"id": "7fdbd625d716",
		"ts": "2026-08-18T21:19:47.821Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2970038.51,
		"hash": "7fdbd625d716669c37753732d97abfabc2e28116936468165746ebfd086b0eb0"
	},
	{
		"id": "d6c7988ea8f9",
		"ts": "2026-08-18T21:19:48.036Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 344146.19,
		"hash": "d6c7988ea8f9af50d48dfc921fb835e4f704535fdd4881cfbc6d258b37c8ab97"
	},
	{
		"id": "3001a336a659",
		"ts": "2026-08-18T21:19:48.472Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1021366.36,
		"hash": "3001a336a659582766d90176de914698fbbfe4a0117637f8fefaab7c0d51d83a"
	},
	{
		"id": "5abccf619f0c",
		"ts": "2026-08-18T20:18:28.064Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112829487.13,
		"hash": "5abccf619f0cf8b1e754a086a42a7e951ebeadfce46beebc5c1e72023deddbc2"
	},
	{
		"id": "8735f4017c8e",
		"ts": "2026-08-18T20:18:28.710Z",
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
		"liquidityUsd": 17714508.97,
		"hash": "8735f4017c8e92d75697d50747b65e5a4ec62afbca3ffe0ae830beff4ad669a5"
	},
	{
		"id": "e096f1c6e27b",
		"ts": "2026-08-18T20:18:29.153Z",
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
		"liquidityUsd": 747034.3,
		"hash": "e096f1c6e27bbe26590a828eff2f292dc8fa12039a4220ff7729b303207741be"
	},
	{
		"id": "93b7dd6c344a",
		"ts": "2026-08-18T20:18:29.582Z",
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
		"liquidityUsd": 26824938.64,
		"hash": "93b7dd6c344a202b7b5ee3a0a1e8b5383e09266355d526a6682a43b2ebe7210d"
	},
	{
		"id": "9893529e961e",
		"ts": "2026-08-18T20:18:29.811Z",
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
		"liquidityUsd": 4281452.23,
		"hash": "9893529e961e28f3c0c258dfbc63fa0ea054c313a15c84468d43f13b51d7317d"
	},
	{
		"id": "23028cb1ee88",
		"ts": "2026-08-18T20:18:30.049Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 891239.39,
		"hash": "23028cb1ee885348d4057581602f6ba7992f95e252b07119675f65d2283027da"
	},
	{
		"id": "edf0e4de7062",
		"ts": "2026-08-18T20:18:30.284Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4344039.74,
		"hash": "edf0e4de706278029a8a8669d7f48f7ce7db1bf2faff6a985b1b5394e90fd806"
	},
	{
		"id": "d83931a43635",
		"ts": "2026-08-18T20:18:30.515Z",
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
		"liquidityUsd": 3161460.16,
		"hash": "d83931a4363506c5e2029341e53bc74c5f3db4210f19c11b327b306096ea191f"
	},
	{
		"id": "473e8e53fac1",
		"ts": "2026-08-18T20:18:30.959Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 437707.14,
		"hash": "473e8e53fac1dd3b40af694196d11bea5ff2044b849a48a57ef0ba8231fce8f7"
	},
	{
		"id": "f1d4bea6b29c",
		"ts": "2026-08-18T20:18:31.206Z",
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
		"liquidityUsd": 449549.98,
		"hash": "f1d4bea6b29c44ef283ffa8c9e37195b5a67a43ac2faeca2c68dc7f9a7937a36"
	},
	{
		"id": "461829092249",
		"ts": "2026-08-18T20:18:31.431Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4343666.92,
		"hash": "461829092249e040e363ba61e33a1ef70f739f1fcb8cd9237ed6d3f9e84a3653"
	},
	{
		"id": "fd13c4d6d160",
		"ts": "2026-08-18T20:18:31.651Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2796897.67,
		"hash": "fd13c4d6d1608e5abd5165041f86c7181d0594bea8082aeb94e7f895cb4ed3b4"
	},
	{
		"id": "3dbe35a89b53",
		"ts": "2026-08-18T20:18:31.875Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 64478.74,
		"hash": "3dbe35a89b53ac9b9e7b77b1510d65080aed6c37a2ddaba11ad9a95415aba9fc"
	},
	{
		"id": "ea3cbe430927",
		"ts": "2026-08-18T20:18:32.090Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 851805.21,
		"hash": "ea3cbe430927519934d5fd5f84828d0b9199b02ab2a7bd66ee104f5fde5f7c03"
	},
	{
		"id": "3654f04c1fdd",
		"ts": "2026-08-18T20:18:32.306Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9241094.28,
		"hash": "3654f04c1fddf0aa841751cb2bed26c64132c69846db85de9d35108f2f6d926e"
	},
	{
		"id": "558fa4315e86",
		"ts": "2026-08-18T20:18:32.524Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247462.29,
		"hash": "558fa4315e86ef4a964c771202d4e33ca7f18941273d964104b711dbcaa2386c"
	},
	{
		"id": "a4982323c0e7",
		"ts": "2026-08-18T20:18:32.739Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2960979.39,
		"hash": "a4982323c0e764d41bafd5e7a57db2522f1a6536d92f7a1eb642290bb89b6f17"
	},
	{
		"id": "abad31be39fd",
		"ts": "2026-08-18T20:18:32.958Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 343921.75,
		"hash": "abad31be39fda5e12b7d414bb617e00d9d7d6132bed57d8eece05f357bcc7951"
	},
	{
		"id": "90b3e2008981",
		"ts": "2026-08-18T20:18:33.216Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1025107.46,
		"hash": "90b3e2008981d98823475aeb0a06701f588e9943828b2a779841898383854db3"
	},
	{
		"id": "146855617169",
		"ts": "2026-08-18T19:23:57.459Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112826737.5,
		"hash": "146855617169ae2b7d5c5e7829d9c57fddb7a977fcd8f1083fd6f2e63a25b57a"
	},
	{
		"id": "3879510382ab",
		"ts": "2026-08-18T19:23:58.099Z",
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
		"liquidityUsd": 16715346.05,
		"hash": "3879510382ab394b5e9fa00f2283abb13d775bef9b9056541b2615d84494851d"
	},
	{
		"id": "fac8a0f43bce",
		"ts": "2026-08-18T19:23:58.538Z",
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
		"liquidityUsd": 747416.59,
		"hash": "fac8a0f43bceab41021a8f7101249b09877e05bafa7e0feba9c1377e9ffea3fc"
	},
	{
		"id": "e69f92099adf",
		"ts": "2026-08-18T19:24:02.013Z",
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
		"liquidityUsd": 26832412.98,
		"hash": "e69f92099adf9ff08cd422e9ba17458baeb978a83836e2091bb42663b6b30b57"
	},
	{
		"id": "7b6bc67de6a3",
		"ts": "2026-08-18T19:24:02.454Z",
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
		"liquidityUsd": 4289776.41,
		"hash": "7b6bc67de6a3c5b8ae3add708a9e0a7e2f7810195c45a030fa0c78a103416e9b"
	},
	{
		"id": "26ebfec80148",
		"ts": "2026-08-18T19:24:02.674Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893976.7,
		"hash": "26ebfec80148d3a62cb9f4f92547e53f9cc3663da8e6eeb17d615370f7b1f13e"
	},
	{
		"id": "4cb4aab812ee",
		"ts": "2026-08-18T19:24:02.990Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4252722.48,
		"hash": "4cb4aab812ee596458cfae83df87787635b5ee89564e425ec7f11acb9c928676"
	},
	{
		"id": "5821574e6bc7",
		"ts": "2026-08-18T19:24:03.456Z",
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
		"liquidityUsd": 3161360.25,
		"hash": "5821574e6bc7211087b565e5be8a47b4052eaad1da70a57fd603ddfa7f6fffa1"
	},
	{
		"id": "6e8e7ccd3942",
		"ts": "2026-08-18T19:24:04.158Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 447375.64,
		"hash": "6e8e7ccd394273fdc12eb2ef3c89523c76bd4aa263dcfc817b1ea0e436a02838"
	},
	{
		"id": "db5a7ca52b4a",
		"ts": "2026-08-18T19:24:04.387Z",
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
		"liquidityUsd": 450876.71,
		"hash": "db5a7ca52b4aeeabd1dfc56c29aa29c062cf0a124477d62f4936d7cde4c6d08b"
	},
	{
		"id": "ec312e63afa6",
		"ts": "2026-08-18T19:24:05.005Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4252722.48,
		"hash": "ec312e63afa69ddd5420e2b870e59e4a8f741b70059a7e0b39a768b01e6cfebd"
	},
	{
		"id": "1b36b7d3501d",
		"ts": "2026-08-18T19:24:05.688Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 59974.11,
		"hash": "1b36b7d3501d51585ce117601491085f27a98a87665f21d2fab65fec561ac604"
	},
	{
		"id": "ae7bfca15e5f",
		"ts": "2026-08-18T19:24:06.116Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2840711.9,
		"hash": "ae7bfca15e5ff8aaa233a2b147e72e971cc5df06776c23553c99132a424a965c"
	},
	{
		"id": "81032e384dc1",
		"ts": "2026-08-18T19:24:06.606Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity"
		],
		"liquidityUsd": 34819.95,
		"hash": "81032e384dc11a4187b4f26814e48f380588b68bd145f22645599ecac1d3c2a8"
	},
	{
		"id": "6827e16b0b16",
		"ts": "2026-08-18T19:24:06.824Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9331414.49,
		"hash": "6827e16b0b163bad9f434847f73e5991e662cff85f6382c5ce930c1922d5bb95"
	},
	{
		"id": "89611292fe2e",
		"ts": "2026-08-18T19:24:07.038Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 850815.26,
		"hash": "89611292fe2e63d441d295f7fcb7ce3e96bb62e81612a6896a2bedc5a5e57795"
	},
	{
		"id": "7f11cea3ff9a",
		"ts": "2026-08-18T19:24:07.341Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247003.99,
		"hash": "7f11cea3ff9ac791f6bc864289d4355be7fedc86b3ac93156270af3c6e47f796"
	},
	{
		"id": "609c5f85c2eb",
		"ts": "2026-08-18T19:24:07.559Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 345998.84,
		"hash": "609c5f85c2ebd0120d3086fa9749da7ca6dc549b930efb11ab18f5829152f463"
	},
	{
		"id": "8c8e41050587",
		"ts": "2026-08-18T19:24:07.761Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 63619.65,
		"hash": "8c8e41050587ed8f96a13e12cbbf2b39f5e9cb1c69e747e9a9e2123bbaf5e12c"
	},
	{
		"id": "65fc7890a8f8",
		"ts": "2026-08-18T18:32:01.972Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112761602.47,
		"hash": "65fc7890a8f8cf1004034e1de8189b11d56c739c617d9254b61947c818ae3104"
	},
	{
		"id": "68accb0e0d56",
		"ts": "2026-08-18T18:32:02.630Z",
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
		"liquidityUsd": 16727031.89,
		"hash": "68accb0e0d56dea5cc1f2979bb767b43688e04ed48b7ac1bdda702eac2d7ff74"
	},
	{
		"id": "bee9687b2fe6",
		"ts": "2026-08-18T18:32:03.081Z",
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
		"liquidityUsd": 747086.2,
		"hash": "bee9687b2fe65fc30576ff9b1cafccba3813dcd2a61c694f828188bacefba41f"
	},
	{
		"id": "126d225d0d65",
		"ts": "2026-08-18T18:32:03.579Z",
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
		"liquidityUsd": 26829209.63,
		"hash": "126d225d0d659f3364cf243ee2db709f8fe14296393a0f618b22f30b700f66d5"
	},
	{
		"id": "974257b39106",
		"ts": "2026-08-18T18:32:04.130Z",
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
		"liquidityUsd": 4290898.59,
		"hash": "974257b391063e2a3e8611bee3408c4444ffe749bea46cba2696960b963aa8a5"
	},
	{
		"id": "e58c68f26b6b",
		"ts": "2026-08-18T18:32:04.403Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 884261.53,
		"hash": "e58c68f26b6b31b43c7779554e3701cb8cf9fdda393c125a9c2e8c49242036ea"
	},
	{
		"id": "6439f8b11581",
		"ts": "2026-08-18T18:32:04.659Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4357033.71,
		"hash": "6439f8b115814e3b272da7db5911a2ebdca83ca589c682dd99a50b01f97579f8"
	},
	{
		"id": "dc67a4e22fbe",
		"ts": "2026-08-18T18:32:05.113Z",
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
		"liquidityUsd": 3161954.65,
		"hash": "dc67a4e22fbe009bae7643014676a713785597edd9584c930a3ca4d5b3cab4df"
	},
	{
		"id": "b1ce6339555e",
		"ts": "2026-08-18T18:32:05.566Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 451519.98,
		"hash": "b1ce6339555e8a69db796ba40d4d4a0659d17fe640ee2abaf60ec3932ce11f42"
	},
	{
		"id": "1648e60dbb85",
		"ts": "2026-08-18T18:32:05.817Z",
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
		"liquidityUsd": 429361.27,
		"hash": "1648e60dbb85f418f12b2890afc98651c23ca2c55004d5a0c779fed13b4a413d"
	},
	{
		"id": "24f51fda1a65",
		"ts": "2026-08-18T18:32:06.049Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4362146.7,
		"hash": "24f51fda1a6530f2befef9366dc626a0852267b177f03b3de494f4ed8b9ebe13"
	},
	{
		"id": "84f424d2d80c",
		"ts": "2026-08-18T18:32:06.280Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 61512.11,
		"hash": "84f424d2d80c99b48f567bf58bfff5c9148f914cf9c621271141cf2ade18b69a"
	},
	{
		"id": "55930cd07563",
		"ts": "2026-08-18T18:32:06.513Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 36124.89,
		"hash": "55930cd07563b7e7c65b42b146f7148e81d8c715dcf897a10e87a935407cd222"
	},
	{
		"id": "42123e795810",
		"ts": "2026-08-18T18:32:06.751Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2813907.14,
		"hash": "42123e7958106f66d3849d1fd6c787d7ca4fc1e9b67c5de25bba33cbead55d77"
	},
	{
		"id": "608efafe7c05",
		"ts": "2026-08-18T18:32:06.984Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 851325.85,
		"hash": "608efafe7c057da6c0012f905bf6c3ce17186a124f148a0914e0b09a0463fe23"
	},
	{
		"id": "1919877dd2f9",
		"ts": "2026-08-18T18:32:07.216Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9296984.52,
		"hash": "1919877dd2f938602db236f711966753b7f3412d462f135d6c786675e087af1f"
	},
	{
		"id": "a8ead309a7c8",
		"ts": "2026-08-18T18:32:07.493Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247303.94,
		"hash": "a8ead309a7c814dd8cdc582771f23fdac54567aea1f7a11fd6368c876bb00baa"
	},
	{
		"id": "09ac7860d6f3",
		"ts": "2026-08-18T18:32:07.724Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 346091.81,
		"hash": "09ac7860d6f3dbd0e7cee59d5de178bd0d9523be0305f2663485776ffe37103b"
	},
	{
		"id": "1f7bc8da2eae",
		"ts": "2026-08-18T18:32:07.958Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 59608.63,
		"hash": "1f7bc8da2eaedd5b625f4c8e6a7ccd3d6338c19ec390c68ae2cd4117e8c7c7d3"
	},
	{
		"id": "a9633190b287",
		"ts": "2026-08-18T17:22:39.221Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112710523.14,
		"hash": "a9633190b28777e5cd54b62a521d5a2ce11d640152be6e9a93cbdca3686082ae"
	},
	{
		"id": "2075a737163d",
		"ts": "2026-08-18T17:22:39.644Z",
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
		"liquidityUsd": 16762821.59,
		"hash": "2075a737163d184089382226bd8aba3aa3cad737f3810f7f46380e50637f25bb"
	},
	{
		"id": "4fc31248f8e5",
		"ts": "2026-08-18T17:22:39.889Z",
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
		"liquidityUsd": 746286.66,
		"hash": "4fc31248f8e5af44574c18f8237b32009d20fe91221b9b1ae666a76b0017af0f"
	},
	{
		"id": "92676d1d7a49",
		"ts": "2026-08-18T17:22:40.118Z",
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
		"liquidityUsd": 26859860.31,
		"hash": "92676d1d7a4930d3e781d44cde4027ae4e90401807b6443fc419d119ae9be774"
	},
	{
		"id": "b8803c2a7b1b",
		"ts": "2026-08-18T17:22:40.370Z",
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
		"liquidityUsd": 4292624.61,
		"hash": "b8803c2a7b1bb395ef5eb282a0e18512ff2add927fffc33f0acc457e662a9128"
	},
	{
		"id": "e24917213375",
		"ts": "2026-08-18T17:22:40.598Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 886700,
		"hash": "e2491721337550e0912e2dcf0570ed995cb9e063ec7d84678ae1db418bc70ff6"
	},
	{
		"id": "5c80a28f3249",
		"ts": "2026-08-18T17:22:40.836Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4017024.29,
		"hash": "5c80a28f324940af63fdcdefcd7c52027ba8a95574e12fc616832e7dd2eef1d6"
	},
	{
		"id": "d48268f0908c",
		"ts": "2026-08-18T17:22:41.076Z",
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
		"liquidityUsd": 3164430.52,
		"hash": "d48268f0908c935350ed18a7c21c37ccff24ac6e39b502b5881dec9604cafa42"
	},
	{
		"id": "a092129f069d",
		"ts": "2026-08-18T17:22:41.316Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 459054.2,
		"hash": "a092129f069d7b61610a0b430b36c4ebc82a8cb32f4cb2edbf2c69363c6f39ee"
	},
	{
		"id": "f25dcaef4260",
		"ts": "2026-08-18T17:22:41.556Z",
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
		"liquidityUsd": 440539.07,
		"hash": "f25dcaef426021b30b1b68a5739b7a1d05111aad0a782948f740bae756a71d01"
	},
	{
		"id": "424cb69b04e1",
		"ts": "2026-08-18T17:22:41.773Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4017024.29,
		"hash": "424cb69b04e14c975873c3ec0b615ab3d7745ce864b0f3ba4e26eef13c5b9408"
	},
	{
		"id": "ed5b83d02ccc",
		"ts": "2026-08-18T17:22:41.987Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 39746.79,
		"hash": "ed5b83d02cccf0651bf8836fc63813f553799de6b1611c03f9cb31ccd271ad7d"
	},
	{
		"id": "6635e9fbd1f5",
		"ts": "2026-08-18T17:22:42.213Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9412638.91,
		"hash": "6635e9fbd1f5753a58363d0b161e1edc8da1ed2660ecf7d9958918137f842f65"
	},
	{
		"id": "2110f1ad3685",
		"ts": "2026-08-18T17:22:42.431Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2813021.84,
		"hash": "2110f1ad3685163b530cff058eb039f88c51c4187c1a55e951b7fc2201881dc8"
	},
	{
		"id": "9797939337b8",
		"ts": "2026-08-18T17:22:42.770Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 849137.6,
		"hash": "9797939337b8a21f98292bdef78558b544599bdd5e87329d2a41383e0d42c3cb"
	},
	{
		"id": "47151b3d5084",
		"ts": "2026-08-18T17:22:43.051Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 56470.43,
		"hash": "47151b3d5084f14d34e79bce9b19fe862d2be6890aeda329a560cc2e2656a708"
	},
	{
		"id": "c59b716c715c",
		"ts": "2026-08-18T17:22:43.273Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247282.78,
		"hash": "c59b716c715c0c268e6e3921095d4ab24bf5854b17b1c67a718719bbf1fa1b6f"
	},
	{
		"id": "c6d4beeb861a",
		"ts": "2026-08-18T17:22:43.490Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 347355.29,
		"hash": "c6d4beeb861ae38b77ceeddd284a9c49dc8138cf6c420c0094f3cc16cf42fa3f"
	},
	{
		"id": "33a8070c5adc",
		"ts": "2026-08-18T17:22:43.709Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 68423.35,
		"hash": "33a8070c5adc441f1b06816f322a8189c2f57296d48583599bae0be419237066"
	},
	{
		"id": "33b209c1364b",
		"ts": "2026-08-18T16:26:08.398Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112627236.29,
		"hash": "33b209c1364b3dd7b79ce610898ffebac028b3b7d1af6ad66406c2ccb2e0d768"
	},
	{
		"id": "7dcabbff8bf1",
		"ts": "2026-08-18T16:26:08.794Z",
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
		"liquidityUsd": 16942761.24,
		"hash": "7dcabbff8bf1b451345f9a97fd8500310a85ff47c0f1fad7b791148823bf7948"
	},
	{
		"id": "d001490e2fd7",
		"ts": "2026-08-18T16:26:08.990Z",
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
		"liquidityUsd": 746286.66,
		"hash": "d001490e2fd7deec8704b90c33ced775c25f20829346cbc38ca5eab3e5fafed2"
	},
	{
		"id": "9ef0aac50ded",
		"ts": "2026-08-18T16:26:09.192Z",
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
		"liquidityUsd": 26887640.74,
		"hash": "9ef0aac50ded74983d7787033e6d721663920ab3a05febdda5fca5074f5b5fdb"
	},
	{
		"id": "6e9bb33ed364",
		"ts": "2026-08-18T16:26:09.383Z",
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
		"liquidityUsd": 4293024.55,
		"hash": "6e9bb33ed364a5c3db62256c467cb49b0357b19217eead9c1f752cff7758b0f3"
	},
	{
		"id": "ed2c7e4eed79",
		"ts": "2026-08-18T16:26:09.594Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887509.63,
		"hash": "ed2c7e4eed79c3ba027f8c22730cee14b06407c7ee704cca241b5b293315dcc4"
	},
	{
		"id": "281f8d000014",
		"ts": "2026-08-18T16:26:09.788Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4348705.45,
		"hash": "281f8d0000144d19f9b6857568850c597fbe7fcef5e5a6fb077b3947f0144438"
	},
	{
		"id": "f507f1b3abf7",
		"ts": "2026-08-18T16:26:10.042Z",
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
		"liquidityUsd": 3169252.79,
		"hash": "f507f1b3abf77f3bb2c7bee55cea3ef1ac24d13f143544bd3e4da50ba4c9afa7"
	},
	{
		"id": "c115d0829da9",
		"ts": "2026-08-18T16:26:10.382Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 437110.02,
		"hash": "c115d0829da99c306e4f704d4b5e8be7c315ef90c49d19eb1754b9a4e0f56d27"
	},
	{
		"id": "76d3d99ee0a0",
		"ts": "2026-08-18T16:26:10.586Z",
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
		"liquidityUsd": 437011.03,
		"hash": "76d3d99ee0a092ea64c0a228249d42c73884cc6f8b4d67106970318936fb36dc"
	},
	{
		"id": "77f4a5fe9d83",
		"ts": "2026-08-18T16:26:10.777Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4332823.98,
		"hash": "77f4a5fe9d8327ea74d167cc46fe808d7d2d44b46bed162716711d1c6a5b79d7"
	},
	{
		"id": "574f2712356e",
		"ts": "2026-08-18T16:26:11.022Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 39082.75,
		"hash": "574f2712356e6b5489208bb2b2f40c6a9d0246ee90358522e7a4d77b62240296"
	},
	{
		"id": "afa5466c4c04",
		"ts": "2026-08-18T16:26:11.232Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9419594.66,
		"hash": "afa5466c4c04c83989a078977e3871377d7c0a72914527654af9782d1ba8a7e9"
	},
	{
		"id": "afaf762afa82",
		"ts": "2026-08-18T16:26:11.464Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2818865.32,
		"hash": "afaf762afa824288638f4a68d7bacf1b74adb3814e98bdac1753ef440d6a9587"
	},
	{
		"id": "4e1d496c2236",
		"ts": "2026-08-18T16:26:11.743Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 852274.92,
		"hash": "4e1d496c2236b092fdaac288a9679891e37273797920c2f62f5e10dbf45d4781"
	},
	{
		"id": "77b3845982a7",
		"ts": "2026-08-18T16:26:11.952Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 46991.32,
		"hash": "77b3845982a79ff802d6233adce10ebeff077887e99f9cbc360cab4c09a228f0"
	},
	{
		"id": "fc6f879b1804",
		"ts": "2026-08-18T16:26:12.137Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247718.55,
		"hash": "fc6f879b180468390c0e0dd73bb50f80b8a05dcad8b29d26c398dddc477bc77e"
	},
	{
		"id": "3ec386a70517",
		"ts": "2026-08-18T16:26:12.318Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 347755.96,
		"hash": "3ec386a70517f06274b26142b28025a1baeb5b7a2635a44bee4b520d0ab1dcb6"
	},
	{
		"id": "b3e7a0d3ab2e",
		"ts": "2026-08-18T16:26:12.518Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 59772.82,
		"hash": "b3e7a0d3ab2ee291f2c169886e61e02a2789525ed0a0caef8f37c1cf6a2d82da"
	},
	{
		"id": "52a2670fd844",
		"ts": "2026-08-18T15:27:02.862Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112614658.29,
		"hash": "52a2670fd84496a065c89a63fcacd31053dd25690d78b1554ca12e1c1be463da"
	},
	{
		"id": "8646e0c620cb",
		"ts": "2026-08-18T15:27:03.223Z",
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
		"liquidityUsd": 18216589.16,
		"hash": "8646e0c620cb57e6d5d6c95d4065a79b22669fa6033689aa00634960b0f03f9a"
	},
	{
		"id": "9a30d802e52a",
		"ts": "2026-08-18T15:27:03.650Z",
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
		"liquidityUsd": 746286.66,
		"hash": "9a30d802e52af595ada1ce3c10c6eae8d829466dd6575bf77aa98b09d28148e4"
	},
	{
		"id": "1bf22617bebe",
		"ts": "2026-08-18T15:27:03.938Z",
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
		"liquidityUsd": 26887061.58,
		"hash": "1bf22617bebe5d29421194a85296f1a8c6cff877e95616884f4b380d3c698511"
	},
	{
		"id": "19b6791aa73f",
		"ts": "2026-08-18T15:27:04.183Z",
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
		"liquidityUsd": 4293073.51,
		"hash": "19b6791aa73f4ce0015d504be8e311498a515cfe6a61ff0395f00787bda08bca"
	},
	{
		"id": "15108ecb3b0f",
		"ts": "2026-08-18T15:27:04.558Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 887509.63,
		"hash": "15108ecb3b0fe57ac53c940e9502dd3a5e467b992898e39b07e393e84e4cb476"
	},
	{
		"id": "afab0af503b7",
		"ts": "2026-08-18T15:27:04.828Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4343226.16,
		"hash": "afab0af503b7f147a568f80654bc63f1b1986ac94cc12b6523661a60f9d56fb7"
	},
	{
		"id": "cd6baa0564ca",
		"ts": "2026-08-18T15:27:05.187Z",
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
		"liquidityUsd": 3195684.35,
		"hash": "cd6baa0564caada789be68df8b99c7a85ff51ac6b140cdb0019bf37a6a08d692"
	},
	{
		"id": "a82dd40b7304",
		"ts": "2026-08-18T15:27:05.451Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 443932.44,
		"hash": "a82dd40b7304dab5aec5d90b52624f5e933b525a4d517a5a06d590c02aed35ad"
	},
	{
		"id": "b3651dfb6fb3",
		"ts": "2026-08-18T15:27:05.689Z",
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
		"liquidityUsd": 459033.48,
		"hash": "b3651dfb6fb360eae7c588b53af52bd6f24d6f4ccacd33d062dfd56e75c2cfee"
	},
	{
		"id": "b0ad023498ca",
		"ts": "2026-08-18T15:27:05.907Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4344674.6,
		"hash": "b0ad023498caaa71d16a772d21e5b340129238fb92fe4e3c9d18f36e5c3c12e3"
	},
	{
		"id": "3533ce1a4740",
		"ts": "2026-08-18T15:27:06.121Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 37427.51,
		"hash": "3533ce1a4740e0a36443f5d420c76ab56a198b431b06a1e3c6ff50c637d0d3c2"
	},
	{
		"id": "2077c4855158",
		"ts": "2026-08-18T15:27:06.348Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247760.33,
		"hash": "2077c48551581fcff826a299708e3925103b62cebbbcb52b73fdf2e425f41027"
	},
	{
		"id": "97dd8d887ae1",
		"ts": "2026-08-18T15:27:06.567Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9388237.58,
		"hash": "97dd8d887ae17079614776af06d2a0cee83800648caa0bdf48d1ffe40e83b234"
	},
	{
		"id": "80215da7d556",
		"ts": "2026-08-18T15:27:06.778Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2775549.09,
		"hash": "80215da7d556d39c91300eaa0d12f7f1ac161122bca9b51fc28a33ef9a7d4674"
	},
	{
		"id": "1c8e5d573cfc",
		"ts": "2026-08-18T15:27:06.997Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 851675.77,
		"hash": "1c8e5d573cfc6cc06faf248bba2186bf3165dde6c413c37fe9e76f2856fcb6e2"
	},
	{
		"id": "485bf2802649",
		"ts": "2026-08-18T15:27:07.207Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 52661.97,
		"hash": "485bf2802649913c5aaa387e9c85ded8cc5399ec2cc91bcccec7b7aecb485e25"
	},
	{
		"id": "80757df11c22",
		"ts": "2026-08-18T15:27:07.428Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 51315.34,
		"hash": "80757df11c22822b7120bcf3fc74641afd77c0718dc2b4d9d4ac1e9be9b7d1cf"
	},
	{
		"id": "1087fd26ce7c",
		"ts": "2026-08-18T15:27:07.641Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348013.63,
		"hash": "1087fd26ce7cb8d836ebcffa6206e626052648c8c54bbc3f5ba46174fb30565d"
	},
	{
		"id": "e116d84a8e1d",
		"ts": "2026-08-18T14:28:51.619Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112719689.24,
		"hash": "e116d84a8e1d8f6f902ebed4770d0557ceeaca6096dfb5d44c12fc8a0a75e790"
	},
	{
		"id": "c6c6f4d6b8d5",
		"ts": "2026-08-18T14:28:52.263Z",
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
		"liquidityUsd": 18080972.66,
		"hash": "c6c6f4d6b8d577d22625c4cc11704067c62adbea3440b269f8ae4ec0b84a0609"
	},
	{
		"id": "10ec98241894",
		"ts": "2026-08-18T14:28:52.704Z",
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
		"liquidityUsd": 747751.45,
		"hash": "10ec9824189487c091bcc97aab28504cf61a7d95a9eb208864ffa0c8e9165c3b"
	},
	{
		"id": "93fc649cf122",
		"ts": "2026-08-18T14:28:53.141Z",
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
		"liquidityUsd": 26866257.3,
		"hash": "93fc649cf12228cba6b743fc05c461ab84e65ef3e2a554ce9abe40fda5159d41"
	},
	{
		"id": "d25ffcf67077",
		"ts": "2026-08-18T14:28:53.586Z",
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
		"liquidityUsd": 4246555.35,
		"hash": "d25ffcf67077c3c8807ea5fa95dee0d0f02289c432d96c8c40c355ee59652eb7"
	},
	{
		"id": "4adcf9f018bd",
		"ts": "2026-08-18T14:28:53.823Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 876470.81,
		"hash": "4adcf9f018bd4564dcbdc5da56fea4cab599fa31456feddd6610713cd94475fa"
	},
	{
		"id": "68b2891a3d7f",
		"ts": "2026-08-18T14:28:54.063Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4157136.64,
		"hash": "68b2891a3d7fa9d6751f8a697d91f431faa0d8e810237c19fdd349794cab9db9"
	},
	{
		"id": "e545f3980043",
		"ts": "2026-08-18T14:28:54.298Z",
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
		"liquidityUsd": 2637795.99,
		"hash": "e545f39800432adcb3ba4f7a39bc8ea44c0170fed3adebe701e785423b856d19"
	},
	{
		"id": "de81aee94a9d",
		"ts": "2026-08-18T14:28:54.736Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 448526.18,
		"hash": "de81aee94a9d1e9ee0c657e13cc052dfe424fc00a297f97974a473e35b3817e2"
	},
	{
		"id": "7db2266492aa",
		"ts": "2026-08-18T14:28:54.967Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4157137.95,
		"hash": "7db2266492aab76f421f0b8e902c16db1d63e8643a7b56d0b89156856b241c10"
	},
	{
		"id": "8c444c257aad",
		"ts": "2026-08-18T14:28:55.185Z",
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
		"liquidityUsd": 443860.14,
		"hash": "8c444c257aad870373227e8fbef4504514daabf38ed790d5b1715b04991a91a1"
	},
	{
		"id": "871b45658c5d",
		"ts": "2026-08-18T14:28:55.404Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 37243.87,
		"hash": "871b45658c5df7add5318d460c8d2d3d3804e76515dd2e253d08641a50175d3b"
	},
	{
		"id": "ca79bc4899d4",
		"ts": "2026-08-18T14:28:55.621Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244229.4,
		"hash": "ca79bc4899d40524dd7bb43c92f9eaf895efc57c27c822c2d4d154e399e52300"
	},
	{
		"id": "028fa77a5bb5",
		"ts": "2026-08-18T14:28:55.842Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 57444.19,
		"hash": "028fa77a5bb54c441c7b7ef18145f41fd52760b6a5183e4c768783ca9fed614d"
	},
	{
		"id": "bbab5dc95fe0",
		"ts": "2026-08-18T14:28:56.061Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9427411.66,
		"hash": "bbab5dc95fe00ebe7890afc8b46188d69b97bbd9476f364065580a1c03682698"
	},
	{
		"id": "a285341dbb17",
		"ts": "2026-08-18T14:28:56.285Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 54699.28,
		"hash": "a285341dbb1727f4ba88691129ada7309835fae9ba9fdba138c8b4b564c45872"
	},
	{
		"id": "8402ade93f5a",
		"ts": "2026-08-18T14:28:56.504Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 848105.1,
		"hash": "8402ade93f5a0e91535534e2765394f8b3225a7d801b6779059a9a60ae102bff"
	},
	{
		"id": "55d3f3c286a2",
		"ts": "2026-08-18T14:28:56.722Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2740856.23,
		"hash": "55d3f3c286a2a5abcdcc2acfcc317ae3f0da699522d9d61621a6fefcf7c41b52"
	},
	{
		"id": "e8e773f49574",
		"ts": "2026-08-18T14:28:56.941Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 341870.07,
		"hash": "e8e773f4957498a2a7f963f2e98ca2afae507a01af8f2cdc28cbeea05c1a45ee"
	},
	{
		"id": "98569ac46dc0",
		"ts": "2026-08-18T13:38:41.459Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112423428.58,
		"hash": "98569ac46dc07189c1165b457af86a6e8604d9b7765260e018736e1187fc38ad"
	},
	{
		"id": "2bec77d2d1d3",
		"ts": "2026-08-18T13:38:41.941Z",
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
		"liquidityUsd": 16929407.86,
		"hash": "2bec77d2d1d36da30b5c171c324453ec75612ad6698c79c995b85f599987ebc9"
	},
	{
		"id": "32ce58293ab4",
		"ts": "2026-08-18T13:38:42.129Z",
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
		"liquidityUsd": 744572.16,
		"hash": "32ce58293ab49c5bbb01dd25fbb0d8889854bc4b0fe0e8b58f9f7ddb9bffa7ca"
	},
	{
		"id": "63c9a99f787a",
		"ts": "2026-08-18T13:38:42.461Z",
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
		"liquidityUsd": 26726142.05,
		"hash": "63c9a99f787a6ada003a3394b47b684e888434ac6fb835d577ed0b5149f3c2ed"
	},
	{
		"id": "f880def2b9c4",
		"ts": "2026-08-18T13:38:42.639Z",
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
		"liquidityUsd": 4246555.35,
		"hash": "f880def2b9c44672ff0ef72b4a78b31eb6de41cf206f2647bab78ba771ba833f"
	},
	{
		"id": "00666ed4ce95",
		"ts": "2026-08-18T13:38:42.821Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 875959.71,
		"hash": "00666ed4ce9531f39c83310ed8385c3ebd235c07ef7cfaab0bf65f7ba2ceefca"
	},
	{
		"id": "40ecc9ed1156",
		"ts": "2026-08-18T13:38:43.013Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4174658.79,
		"hash": "40ecc9ed11566c7182377177346cc784df495db7ff2a3a62a8cf9e00495c89b6"
	},
	{
		"id": "de3589d9139b",
		"ts": "2026-08-18T13:38:43.343Z",
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
		"liquidityUsd": 3334048.23,
		"hash": "de3589d9139b871b77d265009df65411a088f369469b20c174cc7a817eae14e0"
	},
	{
		"id": "f212b011c99b",
		"ts": "2026-08-18T13:38:43.526Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 439471.17,
		"hash": "f212b011c99b9365601490e414d0a871a592d437d21d1b6108f2b64a37628589"
	},
	{
		"id": "767ed8dda7c0",
		"ts": "2026-08-18T13:38:43.728Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4174659.99,
		"hash": "767ed8dda7c0a46d51369e82d61c0d5091711e3f5897ac05e484ff162b53feb3"
	},
	{
		"id": "250ffaf122be",
		"ts": "2026-08-18T13:38:43.974Z",
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
		"liquidityUsd": 437271.12,
		"hash": "250ffaf122be4e6d6d3c30ed321b6cb6a2ab73cb88cd84b37fcd4e846fdf2a5a"
	},
	{
		"id": "75d503cb633a",
		"ts": "2026-08-18T13:38:44.529Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 37825.92,
		"hash": "75d503cb633a2c1b125cba58a65f3827df7f7a404c3962585fa46d67c208ee50"
	},
	{
		"id": "85f660696afb",
		"ts": "2026-08-18T13:38:44.706Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 54206.52,
		"hash": "85f660696afbf1fe13392de3ba3d3507cad811d268039c7644d78c6d9caf99a4"
	},
	{
		"id": "d89915b11cb7",
		"ts": "2026-08-18T13:38:44.882Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 243424.72,
		"hash": "d89915b11cb78cb17d93c6d322f696e4b83d8e017e3e4deb7c97b46445a1ec24"
	},
	{
		"id": "dea77a63f4ba",
		"ts": "2026-08-18T13:38:45.060Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9477344.34,
		"hash": "dea77a63f4bac00cb613372fb69f3f5bd269544c95ff926c61d7713882e34b81"
	},
	{
		"id": "f8a166b3bd92",
		"ts": "2026-08-18T13:38:45.242Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 59369.67,
		"hash": "f8a166b3bd9283b180809fc96a595d5652eca959edcf3792ee0623e660b9d606"
	},
	{
		"id": "584459d7ab2e",
		"ts": "2026-08-18T13:38:45.420Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 845191.52,
		"hash": "584459d7ab2eff2ab7e4b48e391cbbf936d2de5d668e21b0d3b2868820c1f18f"
	},
	{
		"id": "8337bfb0441f",
		"ts": "2026-08-18T13:38:45.619Z",
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
		"liquidityUsd": 596965.2,
		"hash": "8337bfb0441f69352cf74453b2bad7b1eea9a4d387be250002f8f26c4adc344d"
	},
	{
		"id": "e0d383540cfd",
		"ts": "2026-08-18T13:38:45.812Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 339846.9,
		"hash": "e0d383540cfdfd7bb0f8a707977e527832fcf68b1ee99ae92f5d8601db0cfdd6"
	},
	{
		"id": "86df19bac20f",
		"ts": "2026-08-18T12:36:57.194Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112450950.04,
		"hash": "86df19bac20f193cbf0c25aee66d8428b4735ba4270fc0964c403ed75792b10c"
	},
	{
		"id": "4015c539077c",
		"ts": "2026-08-18T12:36:57.429Z",
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
		"liquidityUsd": 16982100.44,
		"hash": "4015c539077c08bd7aeed26a4b44c8b18622fccc94dd2fdd544a462b84f96aec"
	},
	{
		"id": "382c5e36644b",
		"ts": "2026-08-18T12:36:57.678Z",
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
		"liquidityUsd": 750103.53,
		"hash": "382c5e36644b0c97142bdec6fe60d20615aca3f70a3fd628c3fc8f3923c0d1df"
	},
	{
		"id": "14757f932853",
		"ts": "2026-08-18T12:36:57.909Z",
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
		"liquidityUsd": 26771643.19,
		"hash": "14757f93285312ac7678c6193160458f354b98ad3430ff027a4424d09455b6ea"
	},
	{
		"id": "9625611e8bbb",
		"ts": "2026-08-18T12:36:58.147Z",
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
		"liquidityUsd": 4254925.42,
		"hash": "9625611e8bbb82c336df75d54cf8e4f6b88d873573e3948abc1297ba7203655a"
	},
	{
		"id": "4f6a69559a7a",
		"ts": "2026-08-18T12:36:58.375Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 878263.3,
		"hash": "4f6a69559a7a436c1f4dba88696778cf7ae7d7ae0aed969e30b45a16323fb726"
	},
	{
		"id": "93ed18a333f6",
		"ts": "2026-08-18T12:36:58.613Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4141996.24,
		"hash": "93ed18a333f641069804a798431fb7293454589dece07adb9b896e95fa28ba6b"
	},
	{
		"id": "e46873231ff5",
		"ts": "2026-08-18T12:36:58.844Z",
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
		"liquidityUsd": 3347477.54,
		"hash": "e46873231ff5412fc855aa04c0b8c1ceada1b6ef5d1f09b8ab01636f0a336255"
	},
	{
		"id": "bca37c8f906c",
		"ts": "2026-08-18T12:36:59.090Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 460447.83,
		"hash": "bca37c8f906c305f153866820bffc43dc7d8c8a5b9f73dc109fb9228c51d7601"
	},
	{
		"id": "034c3dcaae68",
		"ts": "2026-08-18T12:36:59.320Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 241847.22,
		"hash": "034c3dcaae68d7a71cd77df7e6efd0eff5c45b2bba5e8b30da2c59790fa94b89"
	},
	{
		"id": "ce1a044522a3",
		"ts": "2026-08-18T12:36:59.540Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 38051.98,
		"hash": "ce1a044522a3c8be8d5824141c47c3cfdc099c58097ea35077474566e3421b60"
	},
	{
		"id": "7b52bfbdfb8e",
		"ts": "2026-08-18T12:36:59.752Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 51515.67,
		"hash": "7b52bfbdfb8e84580ffba37a1f148675008cf5c60590b5618ec76784b08562f3"
	},
	{
		"id": "0e7da45d0ed2",
		"ts": "2026-08-18T12:36:59.980Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4141996.24,
		"hash": "0e7da45d0ed20e01e77af98f0c8d0208d58dc7e02dfe7f1a556574fdec2184de"
	},
	{
		"id": "e20e72b9d7a3",
		"ts": "2026-08-18T12:37:00.213Z",
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
		"liquidityUsd": 9511447.53,
		"hash": "e20e72b9d7a3a717f83cbdd41f7ec39055ec5164dd358533551e408837948373"
	},
	{
		"id": "0f3fb901bbd8",
		"ts": "2026-08-18T12:37:00.452Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 56494.32,
		"hash": "0f3fb901bbd8d510d670ffcadddf0823b157220e8d459af2c859e3b8a7efb9dd"
	},
	{
		"id": "6d3bcc0cabb8",
		"ts": "2026-08-18T12:37:00.682Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 8,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.84,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 852520.69,
		"hash": "6d3bcc0cabb8c71e00a287e95bf6de6e1a4d32bf42e0d2a3acb02994d6c6e331"
	},
	{
		"id": "2fdf58efeea4",
		"ts": "2026-08-18T12:37:01.146Z",
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
		"liquidityUsd": 473018.8,
		"hash": "2fdf58efeea47da26aa7bd59e854965a795ea27a086752ae77eff8855020f6eb"
	},
	{
		"id": "b3d72f385d5b",
		"ts": "2026-08-18T12:37:01.381Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 80611.38,
		"hash": "b3d72f385d5b6c4e7a9f5d1291c1cd7ed9175b29dc4db7d12480f09679912151"
	},
	{
		"id": "4d1ed97cb6a8",
		"ts": "2026-08-18T12:37:01.616Z",
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
		"liquidityUsd": 599745.42,
		"hash": "4d1ed97cb6a824ef282c200dc49e9e247fd8776c83cfe009ef3aa468f04aa4cf"
	},
	{
		"id": "9c6540ae64a4",
		"ts": "2026-08-18T12:37:01.851Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 338316.26,
		"hash": "9c6540ae64a4f730f4b80adf104006b82d83d4c972a7ada091f64a2cf57dfffd"
	},
	{
		"id": "95e650eb512a",
		"ts": "2026-08-18T11:21:09.937Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112438950.37,
		"hash": "95e650eb512a899a660d87c4e4d6dbd44e8fcc31d65e02381276c1827e3d8c3d"
	},
	{
		"id": "e1de2faccd0a",
		"ts": "2026-08-18T11:21:10.383Z",
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
		"liquidityUsd": 16941739.94,
		"hash": "e1de2faccd0ac2939a4cc0059b6984cb903631fab19b0d02c007f34f76965edc"
	},
	{
		"id": "7327f1bc2b6b",
		"ts": "2026-08-18T11:21:10.624Z",
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
		"liquidityUsd": 741731.31,
		"hash": "7327f1bc2b6b7a598aaec86c514a544027699351530a6fa0045f4b53931b74cc"
	},
	{
		"id": "c60df9ce9e72",
		"ts": "2026-08-18T11:21:10.865Z",
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
		"liquidityUsd": 26760023.65,
		"hash": "c60df9ce9e722c6fcd05ddf16057b044523edc461d751d3735e483cf21dd7dfb"
	},
	{
		"id": "ca15a8dc48d3",
		"ts": "2026-08-18T11:21:11.309Z",
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
		"liquidityUsd": 4245563.11,
		"hash": "ca15a8dc48d3f0f43d0a71590483f3e9fc0a9ca6f6ae52ca381d0d813d23d366"
	},
	{
		"id": "e5c95fb1d7a8",
		"ts": "2026-08-18T11:21:11.549Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 875805.8,
		"hash": "e5c95fb1d7a8a0875e1517e3bbf806f5a83bc70854dd490877a8d0fbac4970c7"
	},
	{
		"id": "a199a781600e",
		"ts": "2026-08-18T11:21:11.788Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3668519.77,
		"hash": "a199a781600ed5dc4c9f2b9e99236e7e911e83e42fb84659250e5817b99ec854"
	},
	{
		"id": "d37b50478a71",
		"ts": "2026-08-18T11:21:12.028Z",
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
		"liquidityUsd": 3383660.35,
		"hash": "d37b50478a71e157eadba82b3aecb2d92146347ba28a727c3bb749f01186cdea"
	},
	{
		"id": "968a78f86ee3",
		"ts": "2026-08-18T11:21:12.478Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 477938.31,
		"hash": "968a78f86ee31253706abd13d9609c815f2301d88f7c456425a56f16138e939b"
	}
]
