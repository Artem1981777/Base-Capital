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
	"updatedAt": "2026-08-11T15:57:17.488Z",
	"tokensScored": 9167,
	"verdictsIssued": 9167,
	"safe": 8002,
	"risky": 681,
	"likelyRug": 484,
	"ticks": 556
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "97ae9eb4fd4e",
		"ts": "2026-08-11T15:57:12.511Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111183179.77,
		"hash": "97ae9eb4fd4e7c917775bf25f98ea1fa3b7c76a2c384e98fd4be27b222a2c0fb"
	},
	{
		"id": "25943f7f18de",
		"ts": "2026-08-11T15:57:12.773Z",
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
		"liquidityUsd": 18712605.5,
		"hash": "25943f7f18de6f9a6a65bcba0a4d0df9400cc93620431204d91b9dd5ad10a78d"
	},
	{
		"id": "0d8f134169b7",
		"ts": "2026-08-11T15:57:13.398Z",
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
		"liquidityUsd": 1028443.56,
		"hash": "0d8f134169b735af9b8b82109a8a80c1fbc4dc5ce80e20a4ab4687658d4203b7"
	},
	{
		"id": "57849e3f8c71",
		"ts": "2026-08-11T15:57:13.809Z",
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
		"liquidityUsd": 26714372.74,
		"hash": "57849e3f8c71e376279e971101d131910d0088330412e5922498e964d5b14511"
	},
	{
		"id": "5cfab412a950",
		"ts": "2026-08-11T15:57:14.113Z",
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
		"liquidityUsd": 4081374.72,
		"hash": "5cfab412a950cc1fdb7edc888a1213bd019a36cad8984d55d2b2e7c8a662f5ed"
	},
	{
		"id": "664b344a83ed",
		"ts": "2026-08-11T15:57:14.365Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 893968.42,
		"hash": "664b344a83ed243165c6183238bcf84d7ddd3febcb620bd298cd7f2edc345929"
	},
	{
		"id": "0f938c7ba18b",
		"ts": "2026-08-11T15:57:14.879Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26714372.74,
		"hash": "0f938c7ba18bfb4146f23ca703584cbab5de18081e0e452791446a24ce226d01"
	},
	{
		"id": "99e025ce7693",
		"ts": "2026-08-11T15:57:15.445Z",
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
		"liquidityUsd": 4421347.42,
		"hash": "99e025ce7693ed0f7cec154d8b7015e85132acc46f463d387ca6175e67e7bcfa"
	},
	{
		"id": "893fcf315e48",
		"ts": "2026-08-11T15:57:15.690Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4385991.18,
		"hash": "893fcf315e4884db89f6a1dd30cf3d3e400f690e8fb6851c4306a36d7f45fd01"
	},
	{
		"id": "21fe087515a7",
		"ts": "2026-08-11T15:57:15.934Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 980301.64,
		"hash": "21fe087515a750ca3e59ec8bc2f1dab05f5ab7fedadd064a1433075507467ff5"
	},
	{
		"id": "dfdeca05d868",
		"ts": "2026-08-11T15:57:16.158Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2088795.14,
		"hash": "dfdeca05d868cdf32d3be9fd3c3f6d02f60c66a13e0601be0a4a8df2dea7650d"
	},
	{
		"id": "309d0c30c2d2",
		"ts": "2026-08-11T15:57:16.378Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 251848.58,
		"hash": "309d0c30c2d226af70987a4f244d5d59fc083ff5dc7eb5b35cc83cd52cc78e84"
	},
	{
		"id": "e4af14267d60",
		"ts": "2026-08-11T15:57:16.600Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4322840.07,
		"hash": "e4af14267d6079ea1c320e7251b102412070eac602624b965edc0931172c2710"
	},
	{
		"id": "6207117752f1",
		"ts": "2026-08-11T15:57:16.821Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9170104.09,
		"hash": "6207117752f1347512c5d91eb63681f423098e4a355833bb85bae92d4e82c8e3"
	},
	{
		"id": "986667630c57",
		"ts": "2026-08-11T15:57:17.052Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 690616.45,
		"hash": "986667630c57101cd1574928332e4a16052f965aff160e384cafcbecca8420fe"
	},
	{
		"id": "d382ce0b0ea2",
		"ts": "2026-08-11T15:57:17.265Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 808157.66,
		"hash": "d382ce0b0ea2d19b9f01ec415885914353ca9d00de0eda4ba5ba02c3b60e2a15"
	},
	{
		"id": "d47f364cda25",
		"ts": "2026-08-11T15:57:17.487Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73904.49,
		"hash": "d47f364cda25fba7b77ad4bdb49d20be7300a1382366c566ee09b66f4fd541f6"
	},
	{
		"id": "6840ba46dca2",
		"ts": "2026-08-11T14:17:39.689Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112182883.42,
		"hash": "6840ba46dca200ae68544b08ec64d124b2b8206c2dc9d72be7fdfbf6aab9767e"
	},
	{
		"id": "a2e336bc255c",
		"ts": "2026-08-11T14:17:40.141Z",
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
		"liquidityUsd": 18450237.31,
		"hash": "a2e336bc255cc79b97528107db5062411d852294aaac0698f8d4d03e4ba17724"
	},
	{
		"id": "cfb5ba9f2a86",
		"ts": "2026-08-11T14:17:40.387Z",
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
		"liquidityUsd": 1034923.63,
		"hash": "cfb5ba9f2a861b2163c1ef1a363b3edbd8f6768763512094a0c674047150ee94"
	},
	{
		"id": "f70c43cc1630",
		"ts": "2026-08-11T14:17:40.637Z",
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
		"liquidityUsd": 26932916.77,
		"hash": "f70c43cc1630a06ca5ecbc771593ad379c139ff8c44a52a7a7aa389ce5810e44"
	},
	{
		"id": "b9390137f366",
		"ts": "2026-08-11T14:17:40.919Z",
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
		"liquidityUsd": 4216912.37,
		"hash": "b9390137f3669da8b02d46fb3357553a845a3510d21cd17210107bfd256dc927"
	},
	{
		"id": "2f3c9d63ca87",
		"ts": "2026-08-11T14:17:41.204Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 920648.76,
		"hash": "2f3c9d63ca873b0645b99cf2b02aab3fcf4aef5a707fe09cd714992f421352ee"
	},
	{
		"id": "6342135b9d2b",
		"ts": "2026-08-11T14:17:41.444Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26932916.77,
		"hash": "6342135b9d2b00cd5e66a2de4cb8ad413a4af384e1af0b3f138fc34d5b6b0896"
	},
	{
		"id": "29ccff8f7bae",
		"ts": "2026-08-11T14:17:41.690Z",
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
		"liquidityUsd": 4331549.57,
		"hash": "29ccff8f7baea4b7a8d127b4599342003f940e258d5419539817e049cdfca9a3"
	},
	{
		"id": "5563c0b32d2a",
		"ts": "2026-08-11T14:17:42.009Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4606390.7,
		"hash": "5563c0b32d2a060b0119e735c2a7aaa5cd08c09a07bd22078ceddb8b006dd8d1"
	},
	{
		"id": "ee9ccd229497",
		"ts": "2026-08-11T14:17:42.255Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2151367.29,
		"hash": "ee9ccd229497fdbb2b7e30ad2bc14c153f9043eeef24eedc22bfc98af9cf2360"
	},
	{
		"id": "9d462f2ef5ca",
		"ts": "2026-08-11T14:17:42.486Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 986262.54,
		"hash": "9d462f2ef5caf69548516478b27914c9d2fb6fb33dec146b003ad9d2cfb8528f"
	},
	{
		"id": "5b85656a43ea",
		"ts": "2026-08-11T14:17:42.715Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257602.06,
		"hash": "5b85656a43ea715db659c4e695ae5d45aade0c8fe102657c1db8a020df98f291"
	},
	{
		"id": "7c2afc1f6ffa",
		"ts": "2026-08-11T14:17:42.944Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9366498.32,
		"hash": "7c2afc1f6ffafb79980e9dbd29e4cfdc66767680a6470fa94a3837b07a86b010"
	},
	{
		"id": "a0b29aecf313",
		"ts": "2026-08-11T14:17:43.172Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4430821.8,
		"hash": "a0b29aecf313013467de384fcd4ba2b079ab212f778b9af198dfe8073dc71fe6"
	},
	{
		"id": "0694d7012d60",
		"ts": "2026-08-11T14:17:43.405Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 701285.29,
		"hash": "0694d7012d607efc863c699786347badc49e0cf0271750537cba64b936999b45"
	},
	{
		"id": "7a951774fb56",
		"ts": "2026-08-11T14:17:43.632Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 802953.81,
		"hash": "7a951774fb56e426cfaa43a6adef776dd3af0321c487efab70995b6428b07701"
	},
	{
		"id": "f95e0c6fae0a",
		"ts": "2026-08-11T14:17:43.862Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72758.57,
		"hash": "f95e0c6fae0ab54f5e2c1368f77f8f58189df31ca1caa5ce42fa2f973fcb8f3d"
	},
	{
		"id": "e0d6fb99076a",
		"ts": "2026-08-11T12:55:08.653Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112443933.01,
		"hash": "e0d6fb99076adad101598481cdabf9998b0138cf1b25115783b05f0ec5c901ea"
	},
	{
		"id": "fee193577e05",
		"ts": "2026-08-11T12:55:08.889Z",
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
		"liquidityUsd": 17650237.24,
		"hash": "fee193577e05fdb4d1a6462b1334881130e7e5e7db6b3b53508592e3e43aef8b"
	},
	{
		"id": "bb6d0330f4bb",
		"ts": "2026-08-11T12:55:09.125Z",
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
		"liquidityUsd": 1035489.6,
		"hash": "bb6d0330f4bb194de435471706a4d8c7ed61a81eb923576e8a8b7dba6f1764bb"
	},
	{
		"id": "0b00b5a3872b",
		"ts": "2026-08-11T12:55:09.366Z",
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
		"liquidityUsd": 26996218.04,
		"hash": "0b00b5a3872bbdc78aa8aee31bf8170cdd9c2df437b39ba4c157d705ce867355"
	},
	{
		"id": "7e59dcd3242c",
		"ts": "2026-08-11T12:55:09.606Z",
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
		"liquidityUsd": 4215671.5,
		"hash": "7e59dcd3242c639299faa1990ed099715d5f99c9e9fc77dc657c206a4f07a381"
	},
	{
		"id": "47d65cd4112e",
		"ts": "2026-08-11T12:55:09.839Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 921048.32,
		"hash": "47d65cd4112e1e4ebd6fc7f906372fc66d1929a5eaee1aa6ead0fc5a2ae7c81e"
	},
	{
		"id": "8f42b88310e7",
		"ts": "2026-08-11T12:55:10.073Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26996634.19,
		"hash": "8f42b88310e7ade64476fcaac0cf1788ad9b3f6419f1bc6fa669e9f3fbfa1144"
	},
	{
		"id": "7917d2a959e6",
		"ts": "2026-08-11T12:55:10.304Z",
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
		"liquidityUsd": 4354061.55,
		"hash": "7917d2a959e6d70898de39352bad9bd01be9bca37b3a2121e730593c51b7b853"
	},
	{
		"id": "7ec4f1803bd5",
		"ts": "2026-08-11T12:55:10.536Z",
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
		"liquidityUsd": 4347634.05,
		"hash": "7ec4f1803bd50aaaec3e1d983afbf922b5730e91476e06468cf67339721bb86f"
	},
	{
		"id": "11a0b8afd87c",
		"ts": "2026-08-11T12:55:10.764Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2157665.37,
		"hash": "11a0b8afd87cd54688c40886d7e50a021a9c0e15b03c0ec3a6a56586eb2f545e"
	},
	{
		"id": "13b4a8abeefb",
		"ts": "2026-08-11T12:55:10.976Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 256535.26,
		"hash": "13b4a8abeefb258d20e87c3778ddcd53984b078f46541de28aed9fabc7bce79f"
	},
	{
		"id": "38ec547ff876",
		"ts": "2026-08-11T12:55:11.192Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 988807.66,
		"hash": "38ec547ff8768ac37d3d974adb1437062a1297cb3d64a2eee0a170f164cc4275"
	},
	{
		"id": "3a9fba78fe17",
		"ts": "2026-08-11T12:55:11.405Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9342636.41,
		"hash": "3a9fba78fe17a84ab2e6db080a3a995122b22d73bd112b0f0e71212a3879cabb"
	},
	{
		"id": "10ec9a903471",
		"ts": "2026-08-11T12:55:11.617Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4425555.32,
		"hash": "10ec9a9034716e09361365187ca84b412bc771babe3c395e85927c2285215a2e"
	},
	{
		"id": "82f6029d3847",
		"ts": "2026-08-11T12:55:11.834Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 702746.4,
		"hash": "82f6029d38479cf95ac65fd7abc8c9faa2f0884832e5e72b3e7e5e90d6f1b155"
	},
	{
		"id": "a614fae726ce",
		"ts": "2026-08-11T12:55:12.052Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73044.71,
		"hash": "a614fae726ce77b99c4faab1e17d18a5b0e8442afac5b077de1269e7de066327"
	},
	{
		"id": "fb855badee2b",
		"ts": "2026-08-11T11:41:01.930Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112380189.59,
		"hash": "fb855badee2b49d5837eb5532b7b4b6444df8f807e7acdbbeeb62c5cbb08fbbc"
	},
	{
		"id": "0f6e506010ef",
		"ts": "2026-08-11T11:41:02.191Z",
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
		"liquidityUsd": 18070916.1,
		"hash": "0f6e506010efe04710378d434bc7954dc70d68f34b51c04d18973d8b59506e1d"
	},
	{
		"id": "7c363249f9d3",
		"ts": "2026-08-11T11:41:02.469Z",
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
		"liquidityUsd": 1039561.86,
		"hash": "7c363249f9d39d61c7a39e80dae9cfda261ced825117b752d02f6a9613762f81"
	},
	{
		"id": "329bf293aa11",
		"ts": "2026-08-11T11:41:02.758Z",
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
		"liquidityUsd": 27053938.46,
		"hash": "329bf293aa11ca86a2b576c0755f1be449128275557d987e91097439ee447d9c"
	},
	{
		"id": "880052111216",
		"ts": "2026-08-11T11:41:03.026Z",
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
		"liquidityUsd": 4222494.84,
		"hash": "880052111216ec4c991ac1787da14da48a84696397849bdb454a5e47785e1dbe"
	},
	{
		"id": "36c9dc1f7fd5",
		"ts": "2026-08-11T11:41:03.250Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 917048.83,
		"hash": "36c9dc1f7fd557c8ccd546a6738efff5adfb6ddfa44bbc83d3f025316721c25b"
	},
	{
		"id": "75408a3089ce",
		"ts": "2026-08-11T11:41:03.500Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27053938.46,
		"hash": "75408a3089ce217e9d7cb063b3ef3c46d0cfc335bc4945a8991f1f0a086f1f37"
	},
	{
		"id": "130ddb69793e",
		"ts": "2026-08-11T11:41:03.806Z",
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
		"liquidityUsd": 4401528.84,
		"hash": "130ddb69793e3d399fbcebe609b4ba9352fe44c13589ad9fafd58d4be5b7b67a"
	},
	{
		"id": "1b5f1eb918ad",
		"ts": "2026-08-11T11:41:04.043Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2157385.62,
		"hash": "1b5f1eb918ad5a4c944358ce7f2fa5670d37e47a65e9a94be9d3002969f4b6f3"
	},
	{
		"id": "7f4268b09c12",
		"ts": "2026-08-11T11:41:04.271Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4481329.29,
		"hash": "7f4268b09c129e1a798982065c6edf0b155dbc69306812cb1c2fbf19d6994ebc"
	},
	{
		"id": "4c8847fdc9ab",
		"ts": "2026-08-11T11:41:04.480Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 255137.61,
		"hash": "4c8847fdc9ab966dd5765874a65cffccb4887eaa5ae69b82f072a6780dc795ae"
	},
	{
		"id": "0cef0d4e077e",
		"ts": "2026-08-11T11:41:04.700Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 988140.89,
		"hash": "0cef0d4e077e9950a1817b788f59f35ee8708aa6bcc473c115d9edbb39644a86"
	},
	{
		"id": "0187d1744ee7",
		"ts": "2026-08-11T11:41:04.924Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9364148.08,
		"hash": "0187d1744ee74bf06a47862e252d0b8826101c31e4dd3b35c50c9370755a8db3"
	},
	{
		"id": "128d791b9a78",
		"ts": "2026-08-11T11:41:05.138Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4446997.52,
		"hash": "128d791b9a785b211ff1090a1305e5c11398d6bcd0ca73f13dcb5b75638c8e0b"
	},
	{
		"id": "e5eb544f25b1",
		"ts": "2026-08-11T11:41:05.348Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72803.55,
		"hash": "e5eb544f25b17b283aba7453290873c8100510cd1d51c618a70bc04c26db6592"
	},
	{
		"id": "99fa7707e205",
		"ts": "2026-08-11T11:41:05.569Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 802820.73,
		"hash": "99fa7707e205e71da852c2ebb9050d37b667663aab0ba075d2c98657d9b4c342"
	},
	{
		"id": "c2dc977db8c4",
		"ts": "2026-08-11T10:50:47.891Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112131562.88,
		"hash": "c2dc977db8c46fb6a572e58c963aab7e5ac39b8c0b582d95f85a0328684b89f1"
	},
	{
		"id": "aeac6685da58",
		"ts": "2026-08-11T10:50:48.133Z",
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
		"liquidityUsd": 14184200.89,
		"hash": "aeac6685da58dec5a8198df3af178597dc1d1cd88a930c4226d485af9c50678c"
	},
	{
		"id": "fb26d2934d6f",
		"ts": "2026-08-11T10:50:48.375Z",
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
		"liquidityUsd": 1036501.15,
		"hash": "fb26d2934d6f5bb601e80bd0b9881475393cf4385f96dca069c4a60ee601d2d0"
	},
	{
		"id": "db5ea388f3e5",
		"ts": "2026-08-11T10:50:48.624Z",
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
		"liquidityUsd": 26902882.86,
		"hash": "db5ea388f3e580f22aebc15db42edcfe6374b8db66da2b44c08f38a6e6ee701c"
	},
	{
		"id": "6080e04a60df",
		"ts": "2026-08-11T10:50:48.859Z",
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
		"liquidityUsd": 4203806.86,
		"hash": "6080e04a60df8ffd05c6d1167df3e0c311b3b497ac70e7f03e5ff9a22ab09856"
	},
	{
		"id": "a59ebfec46fb",
		"ts": "2026-08-11T10:50:49.094Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916234.15,
		"hash": "a59ebfec46fbdec24d930aaaab3262bd09a244188f681ff9ab3683e4962cfc6d"
	},
	{
		"id": "7885412b9dc5",
		"ts": "2026-08-11T10:50:49.334Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26902882.86,
		"hash": "7885412b9dc56ad4621530b88fff38f42e8fb6b027b0cd84edca69ce494757b5"
	},
	{
		"id": "49263447987e",
		"ts": "2026-08-11T10:50:49.580Z",
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
		"liquidityUsd": 4390036.3,
		"hash": "49263447987e75b2445fad29270b8b37895701b2fcd52b26d4fffa2838712d97"
	},
	{
		"id": "86eec256ceb6",
		"ts": "2026-08-11T10:50:49.865Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2145427.89,
		"hash": "86eec256ceb6e4523aca9e56889153e27967c98c3225d1ff08b0818d9caaef0d"
	},
	{
		"id": "8557cbe073c1",
		"ts": "2026-08-11T10:50:50.101Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 256209.32,
		"hash": "8557cbe073c109336b76917ab160fff65876ff6af409296d228ff59782be3326"
	},
	{
		"id": "2455668b95c8",
		"ts": "2026-08-11T10:50:50.331Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 989378.54,
		"hash": "2455668b95c8f8342edfd8375eb6fd9a09dfce71d359da24cbaf08a47dfc94bd"
	},
	{
		"id": "a004328c1fc9",
		"ts": "2026-08-11T10:50:50.551Z",
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
		"liquidityUsd": 9428323.68,
		"hash": "a004328c1fc9670dc3197536b220b5cd3cd856d83d4f32f66fe27e069b697168"
	},
	{
		"id": "13088a146bef",
		"ts": "2026-08-11T10:50:50.769Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 4604519.93,
		"hash": "13088a146befece15173715b207d40b3bd7c27d749b0f1a8b3af50f8c769cdcb"
	},
	{
		"id": "2218e02a51d8",
		"ts": "2026-08-11T10:50:50.992Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4366467.42,
		"hash": "2218e02a51d8e15a805e36a14e3b65ebc79e979d42ca71576b35279329e97a78"
	},
	{
		"id": "240d61a79f01",
		"ts": "2026-08-11T10:50:51.221Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 801269.27,
		"hash": "240d61a79f01ac4a36f71be6d6a86a4b5344a615ad97b4431a8e7fb20fc083aa"
	},
	{
		"id": "29a1369384cb",
		"ts": "2026-08-11T10:50:51.439Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72927.22,
		"hash": "29a1369384cb5638f9979e1e9853fda92c97e5146da6ac33317585b54c643320"
	},
	{
		"id": "cbb9d8beed50",
		"ts": "2026-08-11T09:57:14.924Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111926013.41,
		"hash": "cbb9d8beed50ab75c050b60caaad588f2829a2dae9c4318c9938d9eb945d3018"
	},
	{
		"id": "009d6d61a41b",
		"ts": "2026-08-11T09:57:15.122Z",
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
		"liquidityUsd": 18125312.49,
		"hash": "009d6d61a41b1496ab9c66d3399b8fe7fa39f94217df293f6ad9679a96028594"
	},
	{
		"id": "663e686a76eb",
		"ts": "2026-08-11T09:57:15.458Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "663e686a76ebc346c77b8f393a9686497ac99b19490a7190181a90d3bf52b611"
	},
	{
		"id": "ed08390acfaa",
		"ts": "2026-08-11T09:57:15.648Z",
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
		"liquidityUsd": 26809473.01,
		"hash": "ed08390acfaa0ce684c53e0cfed3221a1a261dad3e8f8037a4c5703f195b6339"
	},
	{
		"id": "fb1e5a59ba69",
		"ts": "2026-08-11T09:57:15.837Z",
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
		"liquidityUsd": 4194649.86,
		"hash": "fb1e5a59ba6998009f042264b8547bacdbef3a2936365c034315803c4b218fe4"
	},
	{
		"id": "e6f7a6b3343a",
		"ts": "2026-08-11T09:57:16.058Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916234.15,
		"hash": "e6f7a6b3343a31d11f7a64c48a3e5aefba8970c5812f124d9890bab9a459d234"
	},
	{
		"id": "4da3069adfbf",
		"ts": "2026-08-11T09:57:16.247Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26809473.01,
		"hash": "4da3069adfbfc96bb1f0df7ebc50063fffe4a39edc34e400c6243054484f7b38"
	},
	{
		"id": "9c99b3f9a83f",
		"ts": "2026-08-11T09:57:16.619Z",
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
		"liquidityUsd": 1929054.73,
		"hash": "9c99b3f9a83f0298fbcb26bc995d885fc4860a355ac95d0ebcdb25022663417b"
	},
	{
		"id": "08767682317c",
		"ts": "2026-08-11T09:57:16.818Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2149606.02,
		"hash": "08767682317cc7e8957cc7ad06a06f0db8ecbf8c3736dc07ebd60a89989f1988"
	},
	{
		"id": "ae2f8a759bd8",
		"ts": "2026-08-11T09:57:17.010Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 253834.86,
		"hash": "ae2f8a759bd8e576dcbe275d88e04350c61b1ba55e268e6fa56b3d11c9ddbe10"
	},
	{
		"id": "7c0f8c6ba084",
		"ts": "2026-08-11T09:57:17.221Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9416598.66,
		"hash": "7c0f8c6ba08458ce7cfce01dc1345178d00351b7fee4ba7c491fff0aa4aee120"
	},
	{
		"id": "ba725eef5a77",
		"ts": "2026-08-11T09:57:17.427Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 987722.38,
		"hash": "ba725eef5a77c207db81523933d8bc8cfa44dbd33dd39229944158acaaae7bb3"
	},
	{
		"id": "0f5c2c3ab7b3",
		"ts": "2026-08-11T09:57:17.621Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4350245.16,
		"hash": "0f5c2c3ab7b3e0d1f108b40db0d33d73ee5a29a565bcb6ae58c7f7521d7a2e9f"
	},
	{
		"id": "0d292364df6a",
		"ts": "2026-08-11T09:57:17.801Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73806.83,
		"hash": "0d292364df6a45d947158fc441efe95d8c21289a7c5b41b7934d30a0fda68ff2"
	},
	{
		"id": "3b5d8c677b7d",
		"ts": "2026-08-11T09:57:18.016Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 257322.53,
		"hash": "3b5d8c677b7d6f04dd3fbc178806ab4574b2ce6d3485fd812ca1c38c86614ed3"
	},
	{
		"id": "c8afb6817d99",
		"ts": "2026-08-11T09:57:18.212Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 799592.12,
		"hash": "c8afb6817d9924273af214fb7f98979204412ae13b617247f0ce25786d53abb3"
	},
	{
		"id": "1712a6783704",
		"ts": "2026-08-11T08:13:16.569Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112646012.07,
		"hash": "1712a67837044c5e8ed060a5cacc23a572069f0878c65b55620e8443ab6aec93"
	},
	{
		"id": "57bd2ca85378",
		"ts": "2026-08-11T08:13:17.013Z",
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
		"liquidityUsd": 18254692.36,
		"hash": "57bd2ca85378914483e4f6dc9f05d848c1956649bbe906d8b354bdd26bda3142"
	},
	{
		"id": "ea9ae5fd3ac5",
		"ts": "2026-08-11T08:13:17.263Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "ea9ae5fd3ac590ffa38a1cc0ad08e85c5501ec1688f791665d19c0a95a9d1577"
	},
	{
		"id": "9a97c50632c7",
		"ts": "2026-08-11T08:13:17.508Z",
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
		"liquidityUsd": 26804776.89,
		"hash": "9a97c50632c707001d8d6bb9e7f46c8aea1b2d4cb33adad8cfd9f7aad695a993"
	},
	{
		"id": "f732a3401ca9",
		"ts": "2026-08-11T08:13:17.751Z",
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
		"liquidityUsd": 4178322.73,
		"hash": "f732a3401ca9a64df41f3a0b4a96e656819c05b462b4d9904ae768c232ba50be"
	},
	{
		"id": "498a5dd952dd",
		"ts": "2026-08-11T08:13:17.996Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916234.15,
		"hash": "498a5dd952dd37691322833bd68ccd403d69569391ec2020962f5595007afc49"
	},
	{
		"id": "0044526e851d",
		"ts": "2026-08-11T08:13:18.242Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26804776.89,
		"hash": "0044526e851d746aeb3cbf0bdfa21f5c13e69e3cc31708bfc33e6d8897c399e6"
	},
	{
		"id": "a74dfbb7303f",
		"ts": "2026-08-11T08:13:18.483Z",
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
		"liquidityUsd": 1924061.46,
		"hash": "a74dfbb7303fe2d518f539523f8fda47e4badc02ee34390d783be9d9ca1fc257"
	},
	{
		"id": "0aecb341a876",
		"ts": "2026-08-11T08:13:18.722Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2147393.13,
		"hash": "0aecb341a876c13d0f65c0bab8d306364c7a9d41fd212a87c5a2cb9e95667c8b"
	},
	{
		"id": "46fdab6a5cd8",
		"ts": "2026-08-11T08:13:18.966Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 254401.1,
		"hash": "46fdab6a5cd8acf86896c986591dee1f4cb8252acd60c81700bdd0fa60207dd4"
	},
	{
		"id": "8ff345cf69e2",
		"ts": "2026-08-11T08:13:19.195Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9380179.35,
		"hash": "8ff345cf69e2e6dc50a0f2999aa3f2244a8ca58e1e89df1c067369a86bd3f259"
	},
	{
		"id": "bf7274649ede",
		"ts": "2026-08-11T08:13:19.421Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 990771.51,
		"hash": "bf7274649ededb868bfada4b756f030ffe54b84c4c55c7cc527597faff7a0b41"
	},
	{
		"id": "fae9b5d4a4f7",
		"ts": "2026-08-11T08:13:19.647Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 261571.68,
		"hash": "fae9b5d4a4f705661d49d67c1599851bf83a731034c0207a11ed7d355a9a78f8"
	},
	{
		"id": "95546e304bfe",
		"ts": "2026-08-11T08:13:19.875Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 287162.34,
		"hash": "95546e304bfe58b77d1a71e2a367e73a18de12c5fa1e8fb2a8928e8f8d347980"
	},
	{
		"id": "400f0f2a6aa8",
		"ts": "2026-08-11T08:13:20.103Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4338352.52,
		"hash": "400f0f2a6aa89a72ddff36abb433ac1bdca5960752ff8e44c7a93291fef9f25e"
	},
	{
		"id": "fc19d899753b",
		"ts": "2026-08-11T08:13:20.330Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 68127.15,
		"hash": "fc19d899753b5bcb4fb61b8b23810c461b440ff87ab94e2d7b11f1d20ed5de83"
	},
	{
		"id": "5313a99c67f1",
		"ts": "2026-08-11T08:13:20.556Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73127.11,
		"hash": "5313a99c67f1de43386f4325a168dcd496347de6cf548c84d6954dbeeb145782"
	},
	{
		"id": "cbd80f621cb0",
		"ts": "2026-08-11T06:59:57.519Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112598731.04,
		"hash": "cbd80f621cb0e3f2e7cfc8a6dc9ba109c91f8c7f6890efcad414beaa6c55a4a0"
	},
	{
		"id": "e1863e635aac",
		"ts": "2026-08-11T06:59:57.748Z",
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
		"liquidityUsd": 18132906.92,
		"hash": "e1863e635aac930cadd9d8cdcd5fa3f34b9b383120e63303945c208d65659e91"
	},
	{
		"id": "ee3a92a37fa8",
		"ts": "2026-08-11T06:59:57.976Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "ee3a92a37fa85c600f3d118372bfc8d303c2f8bd52880d0d761632f0f0d5617d"
	},
	{
		"id": "a4eb97c909a6",
		"ts": "2026-08-11T06:59:58.207Z",
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
		"liquidityUsd": 26787309.37,
		"hash": "a4eb97c909a60b167286a37c756933e857b843b0b427047e65fa0e22e636c839"
	},
	{
		"id": "043998e13433",
		"ts": "2026-08-11T06:59:58.626Z",
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
		"liquidityUsd": 4179242.67,
		"hash": "043998e13433e034d6ef9a2fd55d8ec543ae7956128cf0668fcb99affb29ea4f"
	},
	{
		"id": "5cc87c4d5c34",
		"ts": "2026-08-11T06:59:58.849Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 908742.83,
		"hash": "5cc87c4d5c3401baf1297dce6377880fc8970b2d276c2f28b559454288bd4282"
	},
	{
		"id": "dcf659b96a16",
		"ts": "2026-08-11T06:59:59.089Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26787309.37,
		"hash": "dcf659b96a16810171d926adfb256e2dd30ef9818b562d50b19c7e14386bbd64"
	},
	{
		"id": "9455a6e0433d",
		"ts": "2026-08-11T06:59:59.320Z",
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
		"liquidityUsd": 3685705.4,
		"hash": "9455a6e0433d4116773bd7dec3c3810d9adc75f6e4f6ad4181f8438bedc9a37d"
	},
	{
		"id": "58f4f44e42ec",
		"ts": "2026-08-11T06:59:59.607Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2143405.95,
		"hash": "58f4f44e42ec5a9919155ea32dea870e93247e87ce9d101c4d6f7707e2baa2e9"
	},
	{
		"id": "a74b7557afc8",
		"ts": "2026-08-11T06:59:59.835Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 254220.7,
		"hash": "a74b7557afc828ccdd0db51c7904fc6f7477893559ed42204fe2354e662d85a8"
	},
	{
		"id": "3d7e49b8a0c9",
		"ts": "2026-08-11T07:00:00.044Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9382518.35,
		"hash": "3d7e49b8a0c96ea076bda603e8d0d3feb72d2ac0dd8f528a919be20086397df4"
	},
	{
		"id": "674302d3428c",
		"ts": "2026-08-11T07:00:00.669Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1002187.9,
		"hash": "674302d3428c6c0ffceb61e528f7d41c044889c98765b415f55d11c1a68b1426"
	},
	{
		"id": "7f5dd2812cab",
		"ts": "2026-08-11T07:00:00.937Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 261571.68,
		"hash": "7f5dd2812cabed00c6de97f76f57c883a3a1f7ea1dee8aac9fd07cd78dd519fb"
	},
	{
		"id": "d4aa92aa7edf",
		"ts": "2026-08-11T07:00:01.183Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 285570.86,
		"hash": "d4aa92aa7edf4dadfc43496ab5853923d1d9ba4cdf3538c862c4b43dd0d94e37"
	},
	{
		"id": "9792b8ae08bb",
		"ts": "2026-08-11T07:00:01.459Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4331355.15,
		"hash": "9792b8ae08bba028bd8062ddbce829b9e5eda7b9a74309d30ed308b41545318f"
	},
	{
		"id": "0f4333872779",
		"ts": "2026-08-11T07:00:01.691Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 69383.08,
		"hash": "0f4333872779bf5655b8f0966eba9ae6c396885855db85c328ca6c117d7240d0"
	},
	{
		"id": "01f568dffc78",
		"ts": "2026-08-11T07:00:02.282Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1938240.32,
		"hash": "01f568dffc78aadf08482faf9c3fec31265e6f53fa60a24577cdbddf5662b836"
	},
	{
		"id": "54ab7b13d1ff",
		"ts": "2026-08-11T05:03:53.072Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112758811.41,
		"hash": "54ab7b13d1ffe6893e4853141f1d1a71740cf7c51ef9a1bb7f6924709548c181"
	},
	{
		"id": "e12bece35c92",
		"ts": "2026-08-11T05:03:53.418Z",
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
		"liquidityUsd": 18582586.06,
		"hash": "e12bece35c92cb206a00c8d5cb6ee6d4013b9854a956f0843f546f554a53da44"
	},
	{
		"id": "f54003438145",
		"ts": "2026-08-11T05:03:53.611Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "f540034381455610430b357c3ea13d9075496ff00c2ec90c3bf4f372c07d95cd"
	},
	{
		"id": "f8fc48fd2082",
		"ts": "2026-08-11T05:03:53.810Z",
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
		"liquidityUsd": 26809484.66,
		"hash": "f8fc48fd2082ec9a790d033cd8d0fdbb25eace25dc4e36b78100509cc761c4b9"
	},
	{
		"id": "c6f696ee9441",
		"ts": "2026-08-11T05:03:54.010Z",
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
		"liquidityUsd": 4182248.4,
		"hash": "c6f696ee944140bcacf4019b40d8f3aebadea850e88f69f87aaa5a3d613a93db"
	},
	{
		"id": "04d89dc21ec9",
		"ts": "2026-08-11T05:03:54.424Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 913407.93,
		"hash": "04d89dc21ec9df056f16cca8b44f6f67533098b2dfbcf9aa5467b56e99dd7bf5"
	},
	{
		"id": "3cf066e1abd8",
		"ts": "2026-08-11T05:03:54.618Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26809484.66,
		"hash": "3cf066e1abd8485e24520fd8dc24f6cfdaac3e41e1273b2b2f339b0fa1f841f1"
	},
	{
		"id": "9f7dfa1d8ac7",
		"ts": "2026-08-11T05:03:54.860Z",
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
		"liquidityUsd": 3796240.23,
		"hash": "9f7dfa1d8ac71b1c3b4ff00384347498d0f84289b98c901504f3d96ee4857728"
	},
	{
		"id": "0a1db69ab01c",
		"ts": "2026-08-11T05:03:55.049Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2155036.02,
		"hash": "0a1db69ab01c1cd69b8e741d9f35ebd194299529869e78882607c22cc7f60409"
	},
	{
		"id": "5d37a2e0cef9",
		"ts": "2026-08-11T05:03:55.265Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 256161.55,
		"hash": "5d37a2e0cef94605e62b89164d28b8556a8a8a08c18ec500e88fcabff9badc73"
	},
	{
		"id": "7acfcd0d1334",
		"ts": "2026-08-11T05:03:55.463Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1013332.95,
		"hash": "7acfcd0d133418976d7a0f7eac86d423a4581a70505a396b87dce0f653830f2e"
	},
	{
		"id": "742c815811a5",
		"ts": "2026-08-11T05:03:55.656Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9373880.96,
		"hash": "742c815811a5cd95039d4428350e9f0d14d89cce249498c2ae6571fd36231e6c"
	},
	{
		"id": "e4f692d3528d",
		"ts": "2026-08-11T05:03:55.840Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 262033.48,
		"hash": "e4f692d3528d6b10cf32c68d8aec1df5ee4b6d7126fa61d5e599928b4eae80e0"
	},
	{
		"id": "ec6697046e4f",
		"ts": "2026-08-11T05:03:56.035Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4352137.41,
		"hash": "ec6697046e4f67e6ec75991e39c7678c86cce7d7126943431121975d0167582f"
	},
	{
		"id": "a34682ace1bf",
		"ts": "2026-08-11T05:03:56.218Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69924.26,
		"hash": "a34682ace1bf7f8f98efab7158a31a9db3ba9bdde2a3c57fcfe6db5e56de884c"
	},
	{
		"id": "fa3ce751b94a",
		"ts": "2026-08-11T05:03:56.407Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1941709.95,
		"hash": "fa3ce751b94a4e68570747a99dce642f8aee15afae456f7a1bb57d7a261db22f"
	},
	{
		"id": "9bfd9b741e29",
		"ts": "2026-08-11T05:03:56.590Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4085397.9,
		"hash": "9bfd9b741e293e36e172ee472c0c42fa96aa6afd094a738c3a1947f0f5766e62"
	},
	{
		"id": "b4db16354e47",
		"ts": "2026-08-11T03:39:50.394Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112683534.95,
		"hash": "b4db16354e479fe5df6f4dbf5788f729cacbe74ef5146330cb8bc711374cc927"
	},
	{
		"id": "46dd65c6b628",
		"ts": "2026-08-11T03:39:50.826Z",
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
		"liquidityUsd": 18586125.29,
		"hash": "46dd65c6b6286b0fa46007d1ee19495a1de389e31784c605ded0480bab70e17b"
	},
	{
		"id": "a063a4af7326",
		"ts": "2026-08-11T03:39:51.068Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "a063a4af7326ac9740fd5eb8083a8993a5458a95e0b10ae83b1441a6d9c26262"
	},
	{
		"id": "e78bdc64c59b",
		"ts": "2026-08-11T03:39:51.302Z",
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
		"liquidityUsd": 26820837.41,
		"hash": "e78bdc64c59bd870c14bfe2c88eb118b67207bb5f7a5db383fb58d4648d548a0"
	},
	{
		"id": "5cb020e54fec",
		"ts": "2026-08-11T03:39:51.542Z",
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
		"liquidityUsd": 4209195.58,
		"hash": "5cb020e54fecf98aaa437007a4ed5d332b906c65782c4fc979b031e8f210f7ea"
	},
	{
		"id": "5b8effbdfade",
		"ts": "2026-08-11T03:39:51.774Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916453.01,
		"hash": "5b8effbdfade6d938d42d2e01c0945031a01ca56ac7b6c5638fd898e042d2e6f"
	},
	{
		"id": "89889cb7c5f8",
		"ts": "2026-08-11T03:39:52.010Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26820837.41,
		"hash": "89889cb7c5f8b80b11cf6fdf0f7552766222bbc8ee94c36401cfb2451a7782e2"
	},
	{
		"id": "42a21e3b4a7a",
		"ts": "2026-08-11T03:39:52.256Z",
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
		"liquidityUsd": 3804085.71,
		"hash": "42a21e3b4a7a5eb4d5da7f56ac494f775e4b3b09b9e859f63e59cfed87e06ce0"
	},
	{
		"id": "48ffb98f69ba",
		"ts": "2026-08-11T03:39:52.488Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2202193.73,
		"hash": "48ffb98f69ba6ba9adf02e7d46ff023bf0e0a1c54562bf0b479177008cc3f992"
	},
	{
		"id": "fafa7af09fc0",
		"ts": "2026-08-11T03:39:52.724Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 251006.95,
		"hash": "fafa7af09fc0987f5a79b9dd98df09b7ce3a61355cb0653b14e1c8fde319ecee"
	},
	{
		"id": "1470da4d7dda",
		"ts": "2026-08-11T03:39:52.949Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1022173.41,
		"hash": "1470da4d7ddaa9df03f4613870df6f92704430553c401ffcd6601ef3f9ba32b7"
	},
	{
		"id": "9e61e978fbb6",
		"ts": "2026-08-11T03:39:53.165Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9433086.65,
		"hash": "9e61e978fbb6334b66ac8c3aaab727d06cdc3213bc54f4ceff117c9ebca487a7"
	},
	{
		"id": "6d8c19400188",
		"ts": "2026-08-11T03:39:53.386Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265424.55,
		"hash": "6d8c1940018802fc6d9a68bd5d45078d9941c3cb31c8ffdde8b62a7de5d38194"
	},
	{
		"id": "4d9ce7247765",
		"ts": "2026-08-11T03:39:53.610Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4377162.76,
		"hash": "4d9ce724776555561b0fd80ff50954b4693cf8e76e0db22eb3c2f5550ce2f1b7"
	},
	{
		"id": "30fab41edb46",
		"ts": "2026-08-11T03:39:53.825Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 69743.74,
		"hash": "30fab41edb46ae6983286c796e73b73542eaf5888a66c7b7339c0c0273f7de5e"
	},
	{
		"id": "2ea80c29e9bb",
		"ts": "2026-08-11T03:39:54.053Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1942285.76,
		"hash": "2ea80c29e9bb04359ab2527a9a4569e428b8b63ef20c756e90d63be965891054"
	},
	{
		"id": "6773b74b9b4e",
		"ts": "2026-08-11T03:39:54.277Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4088835.64,
		"hash": "6773b74b9b4e19b8a47ba79e094c3581e2a4b646b7c9dbd74ddda88862a4ccb7"
	},
	{
		"id": "c44e16193a13",
		"ts": "2026-08-11T01:21:30.761Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112704471.24,
		"hash": "c44e16193a134f56a4bad8e345788a63ab3069851fa88c4e48108c46971ecf56"
	},
	{
		"id": "89d5d99d63d7",
		"ts": "2026-08-11T01:21:31.007Z",
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
		"liquidityUsd": 18478160.78,
		"hash": "89d5d99d63d7318570c7faa68915d09d7c41a36de3c7265f8c04460ea467dc07"
	},
	{
		"id": "669a86cb7438",
		"ts": "2026-08-11T01:21:31.249Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "669a86cb7438c826b8b42a28fcd0744cd148b1d3bda5cf5f2cab7329b6c5f15a"
	},
	{
		"id": "62dcd021550c",
		"ts": "2026-08-11T01:21:31.506Z",
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
		"liquidityUsd": 26770148.32,
		"hash": "62dcd021550c9a6295b8b9ab967abc972903eed0c4c44861aed5cbd6b53473fb"
	},
	{
		"id": "ad6bfa73b2f4",
		"ts": "2026-08-11T01:21:31.758Z",
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
		"liquidityUsd": 4195774.07,
		"hash": "ad6bfa73b2f4d278473de2b9f59b042ee4093a4d8583d845be87d0e97d627992"
	},
	{
		"id": "0f28c154bcdf",
		"ts": "2026-08-11T01:21:32.042Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 919443.41,
		"hash": "0f28c154bcdf1d3f91d617776502b068644b2713b16bf0b6326e1560c7ad3f1b"
	},
	{
		"id": "6b035b505a3d",
		"ts": "2026-08-11T01:21:32.296Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26770148.32,
		"hash": "6b035b505a3d176f7a3cfa963ef17c1b6977a1964860a44f962a18972756b1e8"
	},
	{
		"id": "f81667ac2b9d",
		"ts": "2026-08-11T01:21:32.559Z",
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
		"liquidityUsd": 3743736.29,
		"hash": "f81667ac2b9d34f519b23f8f22ed45ece64bd9ddffb0221d350892ab7ff728d3"
	},
	{
		"id": "95efeb56b6d2",
		"ts": "2026-08-11T01:21:32.823Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2207819.09,
		"hash": "95efeb56b6d2392d8ef496cfe6cc9bddf1ed5d450d1fb643011ab97d85c5b36c"
	},
	{
		"id": "f46925cc50f3",
		"ts": "2026-08-11T01:21:33.071Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 254952.3,
		"hash": "f46925cc50f309da75baafc62022c3b04237c7c56100bc6325cf008870b70782"
	},
	{
		"id": "1435b3eb2688",
		"ts": "2026-08-11T01:21:33.292Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1017170.99,
		"hash": "1435b3eb2688f1168fd6536dc74bfe4829847f2206506db6d7fb2715df680207"
	},
	{
		"id": "f67393a60ba0",
		"ts": "2026-08-11T01:21:33.511Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9382213.47,
		"hash": "f67393a60ba0eb25310e9e928dc78009091507b9317657d5c5e739d9693eab9e"
	},
	{
		"id": "9eae638dc9e4",
		"ts": "2026-08-11T01:21:33.730Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 264340.02,
		"hash": "9eae638dc9e488de5aa5368e6000676a584173090e2922588d10dcf0cf019700"
	},
	{
		"id": "fd390b782789",
		"ts": "2026-08-11T01:21:33.954Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 68231.68,
		"hash": "fd390b782789a7d987a64dd4ec0fe382ce348b35bbb1ae5ca6fc7929a46a3ffd"
	},
	{
		"id": "2cdc1b8069bf",
		"ts": "2026-08-11T01:21:34.174Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 646453.09,
		"hash": "2cdc1b8069bf1e6f357decc3af3b48cbfc98a28bd47a7c51ff83b0648bcf3a48"
	},
	{
		"id": "6396fac0e336",
		"ts": "2026-08-11T01:21:34.394Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4306788.34,
		"hash": "6396fac0e336a7c57b45a05f1572a67f18889bb23352b1f8a690ea920b672d59"
	},
	{
		"id": "261b3e294039",
		"ts": "2026-08-11T01:21:34.616Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1938575.23,
		"hash": "261b3e294039bbe92eacfc24e6a98ee902dd96018f11b790a2f87c87d394b430"
	},
	{
		"id": "3a6d9d0d0a50",
		"ts": "2026-08-10T23:31:01.492Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112515099.49,
		"hash": "3a6d9d0d0a503e34b0a447631659724db2d7b4cc0849b05df7e93415695e9b43"
	},
	{
		"id": "ad22c3762537",
		"ts": "2026-08-10T23:31:01.842Z",
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
		"liquidityUsd": 17224550.46,
		"hash": "ad22c3762537c4b994444c92a9da7d9ba4a495ed319d0e1df8c8b3a6a5982b93"
	},
	{
		"id": "4552a817a823",
		"ts": "2026-08-10T23:31:02.074Z",
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
		"liquidityUsd": 1027492.82,
		"hash": "4552a817a8232b86e80f23815c8f4c8a8336112c3cad2c3756a80ef2bb812027"
	},
	{
		"id": "6d1538b19e68",
		"ts": "2026-08-10T23:31:02.326Z",
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
		"liquidityUsd": 26705083.48,
		"hash": "6d1538b19e68abb1a48797c547b3decc5ac8ef72120342f4a55629393a5a625f"
	},
	{
		"id": "95c58a1ab956",
		"ts": "2026-08-10T23:31:02.606Z",
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
		"liquidityUsd": 4287668.91,
		"hash": "95c58a1ab95646b08dc09592dffebf81ccafd6091217dc9a0179df7f4e9c16ee"
	},
	{
		"id": "239250e59aa1",
		"ts": "2026-08-10T23:31:02.870Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 913530.11,
		"hash": "239250e59aa1734fdf47828bd5bf770eec290b2e8260de06223230a7cf57c292"
	},
	{
		"id": "6242e09ef988",
		"ts": "2026-08-10T23:31:03.169Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26705083.48,
		"hash": "6242e09ef9883e456efa7326349cb769487e2bcfe4671603c6e331fa68f08c48"
	},
	{
		"id": "25ba4f293acb",
		"ts": "2026-08-10T23:31:03.447Z",
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
		"liquidityUsd": 3328308.86,
		"hash": "25ba4f293acb0840a45a12bc83bb5d288e50651803d1c1d4edbea79b59525dc2"
	},
	{
		"id": "26acfcb7ea2f",
		"ts": "2026-08-10T23:31:03.652Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2130971.58,
		"hash": "26acfcb7ea2ffd297e592531ff9318daa36c407d6a41395099c33934a80ec8b9"
	},
	{
		"id": "7dfdfd1f4a91",
		"ts": "2026-08-10T23:31:03.857Z",
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
		"liquidityUsd": 264757.61,
		"hash": "7dfdfd1f4a919dc3c7f74e5102108a055ca92ecb6110e6922870e7844c71b94a"
	},
	{
		"id": "60da4160e4e9",
		"ts": "2026-08-10T23:31:04.066Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1007352.53,
		"hash": "60da4160e4e954c14648292662da45572e5cd2f4a0cf4c15b6c9f93212824fb5"
	},
	{
		"id": "6a93aa6d55cc",
		"ts": "2026-08-10T23:31:04.281Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66170.2,
		"hash": "6a93aa6d55cc257f14e0f5a54de0aec755e93270ff0ac3973d491c8fdac2b1d5"
	},
	{
		"id": "cab803a85b9f",
		"ts": "2026-08-10T23:31:04.494Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9381159.32,
		"hash": "cab803a85b9f850b31c72c04d480bb5ce690a3ba3203c33c7d48f87b9bd0d7da"
	},
	{
		"id": "5d7bc33dd183",
		"ts": "2026-08-10T23:31:04.683Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 323514.74,
		"hash": "5d7bc33dd1830226639345055948fa0f7a21938744553dd0e186c348007d5f06"
	},
	{
		"id": "952127a659fd",
		"ts": "2026-08-10T23:31:04.900Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 648131.61,
		"hash": "952127a659fdaad5ca36e5a6226cb280f4995e9af6948ca40649224fbbdd51fc"
	},
	{
		"id": "7b358171d5ea",
		"ts": "2026-08-10T23:31:05.103Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4323359.11,
		"hash": "7b358171d5ea3b45a04a765e18854c4840dee0fb5e8ea203fcbabc0f52d71dc5"
	},
	{
		"id": "e7f84c67e86d",
		"ts": "2026-08-10T23:31:05.298Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1900494.5,
		"hash": "e7f84c67e86d31697d06a5a5bd6d9cf2d8ac0aec57f080312ff5ae307d92e57f"
	}
]
