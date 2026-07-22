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
	"updatedAt": "2026-07-22T15:37:25.141Z",
	"tokensScored": 4954,
	"verdictsIssued": 4954,
	"safe": 4352,
	"risky": 384,
	"likelyRug": 218,
	"ticks": 302
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "a9efef401944",
		"ts": "2026-07-22T15:37:20.609Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111543086.9,
		"hash": "a9efef4019441e78240657f1d4b42de557eba17be4c696848538e06ff3d4d7f6"
	},
	{
		"id": "8d6bef1b6bfe",
		"ts": "2026-07-22T15:37:21.153Z",
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
		"liquidityUsd": 16140572.05,
		"hash": "8d6bef1b6bfef14232c7cecde029e19a65f684aac2eb9f889642aa371d4343d3"
	},
	{
		"id": "94aceb3f56cf",
		"ts": "2026-07-22T15:37:21.528Z",
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
		"liquidityUsd": 848583.24,
		"hash": "94aceb3f56cff2f6f441474de730f586033e4c98eefe81d580931a35800c1ad4"
	},
	{
		"id": "da1d8489509e",
		"ts": "2026-07-22T15:37:21.904Z",
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
		"liquidityUsd": 25857112.59,
		"hash": "da1d8489509ef0fbdb724b27120f88866bdb0c05a4b3a7deab134781b7f699c0"
	},
	{
		"id": "03354f80547b",
		"ts": "2026-07-22T15:37:22.186Z",
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
		"liquidityUsd": 5292752.01,
		"hash": "03354f80547b8b0f7e03c105874e0efd4b700658588a08c4347b44998cd88a1a"
	},
	{
		"id": "a2d7a6c52e69",
		"ts": "2026-07-22T15:37:22.409Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 998155.56,
		"hash": "a2d7a6c52e691262f0ad19ea7bc0cbcb20cb1748a7f689875b07735b345a3a94"
	},
	{
		"id": "f5133095a361",
		"ts": "2026-07-22T15:37:22.627Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25854291.94,
		"hash": "f5133095a361a4c31803514587c83ea51a1fa9eb07dd1ff245fbac28a74c5902"
	},
	{
		"id": "8e7779325ae9",
		"ts": "2026-07-22T15:37:22.909Z",
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
		"liquidityUsd": 2607917.89,
		"hash": "8e7779325ae9a49139f3cd3ff82e657b8f2c8411ad9d4483dca939875495ba81"
	},
	{
		"id": "7777d6381712",
		"ts": "2026-07-22T15:37:23.141Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 520426.6,
		"hash": "7777d6381712f8afc90ab823d9a9c4aeb9b1d9be93bafd1c8c3e850286f3a208"
	},
	{
		"id": "9538bff53950",
		"ts": "2026-07-22T15:37:23.353Z",
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
		"liquidityUsd": 10061276.43,
		"hash": "9538bff539506a2e31237f9eb0cf3ec93d4fb2cb13cc64c5171b806dc21f1969"
	},
	{
		"id": "612098a01893",
		"ts": "2026-07-22T15:37:23.637Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1475152.02,
		"hash": "612098a018938aee71901204f0c066d8509cea52a2686ede5b1836f234fc789b"
	},
	{
		"id": "6ea18281528b",
		"ts": "2026-07-22T15:37:23.905Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 699819.11,
		"hash": "6ea18281528bf4fef38427a9899caad097ccffeb74b0370df497c9a2a3473552"
	},
	{
		"id": "56ed0dbd4c1a",
		"ts": "2026-07-22T15:37:24.186Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1351299.08,
		"hash": "56ed0dbd4c1aa5c27b3b2135f79fdc5678a63022faa06886168b9d6115d45d06"
	},
	{
		"id": "c7015a0538a7",
		"ts": "2026-07-22T15:37:24.463Z",
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
		"liquidityUsd": 1419339.55,
		"hash": "c7015a0538a7222f73eb1b64c71b890beced01d07cdb161185ae5d1d2ff308bd"
	},
	{
		"id": "ba5589098b3e",
		"ts": "2026-07-22T15:37:24.676Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1809955.27,
		"hash": "ba5589098b3ef6fc02b5f245e3098d4cda741bd645ffb5e2d21d84c2fdf7cf4f"
	},
	{
		"id": "c62ab9660822",
		"ts": "2026-07-22T15:37:24.870Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 205919.58,
		"hash": "c62ab9660822b29ee236b24b42e93ea1fe45a606ab256babdc7b80a70c327295"
	},
	{
		"id": "6655ce0e79ce",
		"ts": "2026-07-22T15:37:25.140Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2089837.06,
		"hash": "6655ce0e79ce0f20ade1583be467cc6db91e9eb6ebe9a6a3f998b3c9beb1a36d"
	},
	{
		"id": "93dc5993af3a",
		"ts": "2026-07-22T13:43:17.140Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111094285.01,
		"hash": "93dc5993af3aac838220765932be8c2e7f8ff11616997ff1164298ab4eb341dd"
	},
	{
		"id": "14045c5fb915",
		"ts": "2026-07-22T13:43:17.587Z",
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
		"liquidityUsd": 13592220.61,
		"hash": "14045c5fb915c7e2db74a34158ce193028fb888f2ae9485765a4c0ae505fb261"
	},
	{
		"id": "b679f350df4d",
		"ts": "2026-07-22T13:43:17.834Z",
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
		"liquidityUsd": 846347.78,
		"hash": "b679f350df4d7d12640ebbe016921dd5d6a69379b21d0a12bc5ef652dbd050a2"
	},
	{
		"id": "27cf88e8b534",
		"ts": "2026-07-22T13:43:18.082Z",
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
		"liquidityUsd": 25910634.37,
		"hash": "27cf88e8b5341dd11d3d7120fd5bb9d121f9617be9a612559a60bb9785a4c5c9"
	},
	{
		"id": "a206fe9b663e",
		"ts": "2026-07-22T13:43:18.337Z",
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
		"liquidityUsd": 5306219.26,
		"hash": "a206fe9b663e7793e38ba4f7e40b21a4709ac8728a1af947e0334aedaf033368"
	},
	{
		"id": "787363aff23d",
		"ts": "2026-07-22T13:43:18.578Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 994007.57,
		"hash": "787363aff23d8c1bf40fb9982130970b5f4f8b29fa955f9b5d3b7c0b25f06e1b"
	},
	{
		"id": "8cb6916ee103",
		"ts": "2026-07-22T13:43:18.827Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25910613.38,
		"hash": "8cb6916ee1036741dff44bbb9299a77910ff0d1c59cb1d9e96e81e0e48b3db6c"
	},
	{
		"id": "169c9126be79",
		"ts": "2026-07-22T13:43:19.072Z",
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
		"liquidityUsd": 2597517.76,
		"hash": "169c9126be79684175c9d84ba4e101b39ad87c744823ea07daa74e49a3e7f397"
	},
	{
		"id": "a3d13a84e987",
		"ts": "2026-07-22T13:43:19.393Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 510974.97,
		"hash": "a3d13a84e987ad0279ed1b2c30a8bcc22d172ddf706cce5cd3c1aad1eebf98bc"
	},
	{
		"id": "567272fc039d",
		"ts": "2026-07-22T13:43:19.635Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1478681.84,
		"hash": "567272fc039de2b28bdd8af4ce7be14e93f186ab7d2007802a153b7ebe22a65d"
	},
	{
		"id": "3c6d5f8d1f04",
		"ts": "2026-07-22T13:43:19.863Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10038483.03,
		"hash": "3c6d5f8d1f04af61718a2bcd476fa7cc334ad93de834bd4661f93f9251d92b3a"
	},
	{
		"id": "cfde108a60c3",
		"ts": "2026-07-22T13:43:20.090Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692229.04,
		"hash": "cfde108a60c330bc33cd29719445254310a6df3999f79b608e68be6c55ae52c5"
	},
	{
		"id": "f1f843095194",
		"ts": "2026-07-22T13:43:20.317Z",
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
		"liquidityUsd": 1440499.65,
		"hash": "f1f8430951947a0de41dfacbcd83d3ca39c3f4c16ff65960c604ed3165f3726d"
	},
	{
		"id": "2bc538e3c13f",
		"ts": "2026-07-22T13:43:20.544Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5595663.76,
		"hash": "2bc538e3c13f80ebcfb19c6fbc07f91d14a540af66bda225f89c568ca82804c8"
	},
	{
		"id": "a275f08ada94",
		"ts": "2026-07-22T13:43:20.771Z",
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
		"liquidityUsd": 1346202.73,
		"hash": "a275f08ada94b23e8e37a6c8da2275212461fdb873b3c56fba580c215c0e86ff"
	},
	{
		"id": "3df4dbb75b3f",
		"ts": "2026-07-22T13:43:20.998Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2132634.98,
		"hash": "3df4dbb75b3fb3df4e512509043d882e2425dd3dc1c189bdedf93b7eba98e5a2"
	},
	{
		"id": "e1db6a4d8039",
		"ts": "2026-07-22T13:43:21.225Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 206404.64,
		"hash": "e1db6a4d80391659e88a4f100f45d2f4523a30bad4dc6a5950c3fb939dbb1f9d"
	},
	{
		"id": "3b360bac0db5",
		"ts": "2026-07-22T11:05:50.614Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111015355.14,
		"hash": "3b360bac0db51aa1881a5a4be363b6befa7f3af612937ae588f9c0d97af01219"
	},
	{
		"id": "a94f543fbe2e",
		"ts": "2026-07-22T11:05:51.011Z",
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
		"liquidityUsd": 16210419.47,
		"hash": "a94f543fbe2ec8a0c4be9f59edf003b540edb89a0739ed43b64ee2df8cebca5e"
	},
	{
		"id": "71f27b6e200b",
		"ts": "2026-07-22T11:05:51.359Z",
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
		"liquidityUsd": 852004.08,
		"hash": "71f27b6e200b941fce29a2c81c9accfa0f017c1cb83a5e8dfe4076287f1b268b"
	},
	{
		"id": "2cdfa7caa837",
		"ts": "2026-07-22T11:05:51.703Z",
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
		"liquidityUsd": 26173937.39,
		"hash": "2cdfa7caa837181111590bc48e7e46788298c28ce430bc1267605325ee04f2b6"
	},
	{
		"id": "43fd2f40c2b8",
		"ts": "2026-07-22T11:05:52.046Z",
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
		"liquidityUsd": 5301932.87,
		"hash": "43fd2f40c2b89e29c7a4bb805129b5acd39e2efc42adefddd5e15f5328f0f789"
	},
	{
		"id": "b2134de51c32",
		"ts": "2026-07-22T11:05:52.250Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991450.78,
		"hash": "b2134de51c323745058645b59f36ee71f36d9ed6294d40a63aa2d5d56837a24a"
	},
	{
		"id": "17738e599fa2",
		"ts": "2026-07-22T11:05:52.446Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26173937.39,
		"hash": "17738e599fa2e54fb9f144b0d221b33d73f375150dcca71a30eb350ce217251b"
	},
	{
		"id": "86338750d40f",
		"ts": "2026-07-22T11:05:52.653Z",
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
		"liquidityUsd": 2590018.89,
		"hash": "86338750d40f2a7756423dbe239367de8f54f7c130d6996fb7328e7868893b17"
	},
	{
		"id": "2a09fa89e729",
		"ts": "2026-07-22T11:05:52.849Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1467659.29,
		"hash": "2a09fa89e7291437415a94ad5b015cbc5624a72c488b29735adb0cfadc4d3965"
	},
	{
		"id": "134a862397cc",
		"ts": "2026-07-22T11:05:53.043Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 514167.64,
		"hash": "134a862397cc58aa6aa715c0bb8b2d80fbea0724483e7151792506359c8ffb6e"
	},
	{
		"id": "11c2da909625",
		"ts": "2026-07-22T11:05:53.233Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10055592.6,
		"hash": "11c2da909625b44652e792e83b6d063cc49527e1182fd4d72637e7851763f3b7"
	},
	{
		"id": "2b7e4e75cc05",
		"ts": "2026-07-22T11:05:53.430Z",
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
		"liquidityUsd": 1439396.56,
		"hash": "2b7e4e75cc05ad1ec7f08af129d97451cf720fe9afdc909e79adbf7868cc4d58"
	},
	{
		"id": "3b5263d1514c",
		"ts": "2026-07-22T11:05:53.615Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5622486.3,
		"hash": "3b5263d1514cb9d3a59bffe95f72b0c5e1c08a8c7f3398c650ae91f6f249d785"
	},
	{
		"id": "2b30dac902f0",
		"ts": "2026-07-22T11:05:53.813Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692509.95,
		"hash": "2b30dac902f0ee2cea6a9a4b1dbbdf637ccf5c2d2abc7b42af70889de716ce00"
	},
	{
		"id": "1f865bb868f8",
		"ts": "2026-07-22T11:05:54.009Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2112745.3,
		"hash": "1f865bb868f8299ee1e15825eaf3f8a22e049803854b1b51106a2ce9a382079e"
	},
	{
		"id": "af003de19519",
		"ts": "2026-07-22T11:05:54.197Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 211157.29,
		"hash": "af003de19519bbe04db2de89225a7e91bf8ff100da8e308b1a178c00d8d68c61"
	},
	{
		"id": "7a9891427a0d",
		"ts": "2026-07-22T11:05:54.397Z",
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
		"liquidityUsd": 587614.03,
		"hash": "7a9891427a0d23292727bd485f9dc732dd5c21ef25fc297f9154dc597e58afce"
	},
	{
		"id": "5747ab56f82c",
		"ts": "2026-07-22T08:22:25.047Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110579150.52,
		"hash": "5747ab56f82caa477c1bec3e4dffef6bef4bd9e2ac82eeb80191c8550a08cf46"
	},
	{
		"id": "7f88629f713a",
		"ts": "2026-07-22T08:22:25.420Z",
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
		"liquidityUsd": 15931281.34,
		"hash": "7f88629f713afc72845e638a35600148a835a61893c7481885baf7d92210736e"
	},
	{
		"id": "244caa2a82ac",
		"ts": "2026-07-22T08:22:25.626Z",
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
		"liquidityUsd": 852292.19,
		"hash": "244caa2a82ac4736f4c15c44b17855db5f17c360f2a9fb2676e51c3668741184"
	},
	{
		"id": "bd9fa0a1190f",
		"ts": "2026-07-22T08:22:25.825Z",
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
		"liquidityUsd": 26298454.25,
		"hash": "bd9fa0a1190f7b4484dea37286914cb4e6882797a4e1c312fbf1f7c99a8d0bec"
	},
	{
		"id": "148698750729",
		"ts": "2026-07-22T08:22:26.024Z",
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
		"liquidityUsd": 5264308.36,
		"hash": "148698750729b00cf3a3887258697180b4c02afa0c1c26e57620c720b759bdf2"
	},
	{
		"id": "ae0526db79d1",
		"ts": "2026-07-22T08:22:26.220Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 991408.97,
		"hash": "ae0526db79d11f51522dca14ae399230bf7116c4decb6e3a08ad76ea9eec5aa3"
	},
	{
		"id": "f5d0e2fb4765",
		"ts": "2026-07-22T08:22:26.467Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26298454.25,
		"hash": "f5d0e2fb4765ac916b640ee802f32eb9bf0245a2dcacc617f68aad0d92fd1820"
	},
	{
		"id": "db11d37eef8f",
		"ts": "2026-07-22T08:22:26.685Z",
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
		"liquidityUsd": 2577591.72,
		"hash": "db11d37eef8f459654d347d05cb9743a62543a46fdcd9d1c872aa09c700a24f0"
	},
	{
		"id": "be23d9cab884",
		"ts": "2026-07-22T08:22:26.885Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1485761.42,
		"hash": "be23d9cab8843759b04bfb939d702335e765a245f565b544148801dba65aaf3f"
	},
	{
		"id": "5ecda0fa2a7c",
		"ts": "2026-07-22T08:22:27.084Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 508382.79,
		"hash": "5ecda0fa2a7c61ac1cc40f89cb03464b410776fc0868daad5e10781aac551fb5"
	},
	{
		"id": "9d0c8c1d919c",
		"ts": "2026-07-22T08:22:27.277Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9942575.64,
		"hash": "9d0c8c1d919cea3ee1a0d6cb1e22708781eeb9ac3cb9f9c52c26de6c0c1c8f39"
	},
	{
		"id": "eeccfa347971",
		"ts": "2026-07-22T08:22:27.485Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5627447.53,
		"hash": "eeccfa347971a14ecb5b4c6b9126ef196b6c6c2eca0a1837d28b31b2f878580c"
	},
	{
		"id": "cd60a7f2ed0e",
		"ts": "2026-07-22T08:22:27.686Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2082131.05,
		"hash": "cd60a7f2ed0e1177c3287157ad1f429c087f2b14ab0d15e45a89e7856e90151d"
	},
	{
		"id": "d859bd2a4a06",
		"ts": "2026-07-22T08:22:27.899Z",
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
		"liquidityUsd": 1457328.62,
		"hash": "d859bd2a4a06491196f35e01bd6d87035917594bb30366aa8e6f933fdb6d35b3"
	},
	{
		"id": "269b983f75a7",
		"ts": "2026-07-22T08:22:28.101Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 686897.59,
		"hash": "269b983f75a716820d2eccf3bd1e632752df3dc0a07428408b98b6bf0eb1fd0d"
	},
	{
		"id": "1f5508eb8ebc",
		"ts": "2026-07-22T08:22:28.293Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 208894.28,
		"hash": "1f5508eb8ebcaa262361510086419bdffeb33ad9b4d200a9348f1062c2aa6ab5"
	},
	{
		"id": "7c86ea09e620",
		"ts": "2026-07-22T08:22:28.490Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1817187.55,
		"hash": "7c86ea09e6208d0f7b921024c609809b27f6880c3df878a42142505f7fc45535"
	},
	{
		"id": "7d88addc22dd",
		"ts": "2026-07-22T05:46:04.587Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110765487.55,
		"hash": "7d88addc22dd267e0e6acd7ff9c5b78494b85e3bb020d23285478f237c1288ca"
	},
	{
		"id": "340467909e4c",
		"ts": "2026-07-22T05:46:05.130Z",
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
		"liquidityUsd": 16299872.28,
		"hash": "340467909e4c23958d55a1485b51496540e012f83916a3519bb09f721961b3c5"
	},
	{
		"id": "57a3be784854",
		"ts": "2026-07-22T05:46:05.436Z",
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
		"liquidityUsd": 850238.94,
		"hash": "57a3be7848548bc31bd1c8396e876147658e42b1c2191a396846837371ada013"
	},
	{
		"id": "0b018f8cf18c",
		"ts": "2026-07-22T05:46:05.700Z",
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
		"liquidityUsd": 26273390.06,
		"hash": "0b018f8cf18cd49d0423a10017b28fb51e587a3c93f26133c5ffa2be9122c8c1"
	},
	{
		"id": "8cdfaa9617e4",
		"ts": "2026-07-22T05:46:05.964Z",
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
		"liquidityUsd": 5308370.28,
		"hash": "8cdfaa9617e41458ed3913f1b0638e97e1d08a4b831ee6816b8fab0d22b35f88"
	},
	{
		"id": "da5b7160bd52",
		"ts": "2026-07-22T05:46:06.228Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1001089.15,
		"hash": "da5b7160bd52faa8e3ec2d070954ec4f7330da76fb2c3b4bf5900d3b0cc1949f"
	},
	{
		"id": "03432c01779b",
		"ts": "2026-07-22T05:46:06.515Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26273390.06,
		"hash": "03432c01779b13cbc879d00dfe7c880ed466318a39da401954f09095cb31973f"
	},
	{
		"id": "952b932f97cf",
		"ts": "2026-07-22T05:46:06.800Z",
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
		"liquidityUsd": 2577157.65,
		"hash": "952b932f97cf7f6c9a782d3a20f4f62d0f8b0fe4ffc9cef1150c059b873e9ccd"
	},
	{
		"id": "1a3d73a7af46",
		"ts": "2026-07-22T05:46:07.072Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1543018.47,
		"hash": "1a3d73a7af462d36aa43dbf7ac0fef7be91e2bab230c61e76d8ef95ec582529a"
	},
	{
		"id": "7fbd984808fe",
		"ts": "2026-07-22T05:46:07.334Z",
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
		"liquidityUsd": 9910611.5,
		"hash": "7fbd984808fea6367997ece6fe56aff27397faaacfeee286cfdd3663d898f1bc"
	},
	{
		"id": "49e43391bbf7",
		"ts": "2026-07-22T05:46:07.580Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 508399.3,
		"hash": "49e43391bbf7e9df49dc3b87b20e6de8b80f91f0e05c04fe746253f19ac7e23e"
	},
	{
		"id": "56a2e5f528e8",
		"ts": "2026-07-22T05:46:07.827Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5670351.31,
		"hash": "56a2e5f528e8370a4f64dc98662a5af09e88ed5c6bb069ed53b647bfd6368aea"
	},
	{
		"id": "98d07b69cc2c",
		"ts": "2026-07-22T05:46:08.071Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 690954,
		"hash": "98d07b69cc2c1a2ac50f7a12bc8f453e7bb2c0981ae593241f536c5e9958f4f9"
	},
	{
		"id": "21cee0693a94",
		"ts": "2026-07-22T05:46:08.324Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2089059.24,
		"hash": "21cee0693a9492404371776481dca6602ad57e297f6df9e1dda57e17e7fcf7cb"
	},
	{
		"id": "4b0b217a4602",
		"ts": "2026-07-22T05:46:08.574Z",
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
		"liquidityUsd": 1505125.74,
		"hash": "4b0b217a46025bb6ea134a038a702fe51850b0138425a4d226f7b002f0053b8c"
	},
	{
		"id": "e83d4630ced7",
		"ts": "2026-07-22T05:46:08.820Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 203300.16,
		"hash": "e83d4630ced7e93762f0db565b1e2442cbbbcf1b155ec44669ed5eceb2c75ad6"
	},
	{
		"id": "c88febe22a12",
		"ts": "2026-07-22T05:46:09.065Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1817870.39,
		"hash": "c88febe22a12d879f3e95c3ea4edc4c03b2172ead041e5fd6a72dd33779a5d56"
	},
	{
		"id": "06b6fb42d451",
		"ts": "2026-07-22T02:14:19.285Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110907937.82,
		"hash": "06b6fb42d4513119bf1d391e4da8b1f9b5f95cf3d34bebfc5c3fc0293b6eb656"
	},
	{
		"id": "93b844fe44a3",
		"ts": "2026-07-22T02:14:19.607Z",
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
		"liquidityUsd": 16687251.13,
		"hash": "93b844fe44a3b2b0e5bc87813e8075e4ddc6d153883d236dd08807d253ab9c04"
	},
	{
		"id": "fc18c52319bf",
		"ts": "2026-07-22T02:14:19.878Z",
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
		"liquidityUsd": 851347.26,
		"hash": "fc18c52319bf805203a55a85fc8cdb03a5fe5b696d2b8c5e76c6517051e79e0f"
	},
	{
		"id": "505bec3fe525",
		"ts": "2026-07-22T02:14:20.331Z",
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
		"liquidityUsd": 26626127.92,
		"hash": "505bec3fe525226bb19e8f6a7574ccc4e2ecee2078a23026eca6f2194fd9734c"
	},
	{
		"id": "d1e00d091748",
		"ts": "2026-07-22T02:14:20.589Z",
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
		"liquidityUsd": 5283952.65,
		"hash": "d1e00d091748df97e671b8c32bdd96d2a8d4a6844fdb1e71f1cc1392351a16d3"
	},
	{
		"id": "92b5cebc5b1a",
		"ts": "2026-07-22T02:14:20.842Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1011182.7,
		"hash": "92b5cebc5b1ae66fc4659d24e741882f190a76e0635b83b1fd064cc7cc5c6a86"
	},
	{
		"id": "c5283c5b3b2e",
		"ts": "2026-07-22T02:14:21.098Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26626127.65,
		"hash": "c5283c5b3b2e57b1b38f7559bd78679b02a08fc11a6751604307e6add90c3158"
	},
	{
		"id": "e877a8560199",
		"ts": "2026-07-22T02:14:21.354Z",
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
		"liquidityUsd": 2579927.77,
		"hash": "e877a8560199ff380dc58335dc927be041ebd57c2cdb4da62ef6e300f8825e71"
	},
	{
		"id": "36175373ba8e",
		"ts": "2026-07-22T02:14:21.624Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1518747.37,
		"hash": "36175373ba8e77818569adc8f4e98ea98bfe60df5933ed0ed8b3ee16b9bc9d7a"
	},
	{
		"id": "1643e3d85feb",
		"ts": "2026-07-22T02:14:21.874Z",
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
		"liquidityUsd": 9962556.34,
		"hash": "1643e3d85feb61c5b6504481a1fa5e986041a756c8251abe593a859c2a7c49c2"
	},
	{
		"id": "c17b92c3f0d6",
		"ts": "2026-07-22T02:14:22.107Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2113931.48,
		"hash": "c17b92c3f0d6d6a202de2a3c0f93d14fa2b268623c910d9e24c4a0e60647ff4d"
	},
	{
		"id": "9d44273f683f",
		"ts": "2026-07-22T02:14:22.345Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 195939.67,
		"hash": "9d44273f683ffc9e1b144292a709c28341022c9c2684766afe9c1cb15be5c742"
	},
	{
		"id": "6df690960a73",
		"ts": "2026-07-22T02:14:22.576Z",
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
		"liquidityUsd": 732633.5,
		"hash": "6df690960a7335b0848015b13f8e78344dfed4df0c07258ca5c9ab1f747fc6d4"
	},
	{
		"id": "90883da82114",
		"ts": "2026-07-22T02:14:22.815Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1836257.29,
		"hash": "90883da82114693af11d0bf6a6001d0057fd809e1615f75f7c2a9022c56fbc49"
	},
	{
		"id": "5ac554153bbc",
		"ts": "2026-07-22T02:14:23.057Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 81907.42,
		"hash": "5ac554153bbccd9f53c5c5548e8a7bca77e3cfb5dd5c0669f1ac62216b1d24e2"
	},
	{
		"id": "d6e36d0641ad",
		"ts": "2026-07-22T02:14:23.288Z",
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
		"liquidityUsd": 1495636.21,
		"hash": "d6e36d0641ad57d38db325e10241d8c3184f7fabcbe3cab2056e995a3868b23a"
	},
	{
		"id": "2d11ff36d5e4",
		"ts": "2026-07-22T02:14:23.528Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1288453.65,
		"hash": "2d11ff36d5e487ce90acaa496e11a142bc88d47c232ebe84ad97dd3b556aee55"
	},
	{
		"id": "b4164a6e0350",
		"ts": "2026-07-21T23:53:42.467Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110442642.64,
		"hash": "b4164a6e0350cd3b71dc63ace7ed50a6d8c39ee2d3eff9e7366c131ffae5bbe0"
	},
	{
		"id": "52f940cb169b",
		"ts": "2026-07-21T23:53:42.920Z",
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
		"liquidityUsd": 16199696.96,
		"hash": "52f940cb169b568bf91aea724a61f7cb73dfb24dcaf161fc6a905c1b005d32e8"
	},
	{
		"id": "a2b60a79b1a7",
		"ts": "2026-07-21T23:53:43.178Z",
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
		"liquidityUsd": 846035.7,
		"hash": "a2b60a79b1a7ed0b52de43a5e8bfee7460b90a0e693a0d10a00acb1e0e19cfca"
	},
	{
		"id": "f76719f880ff",
		"ts": "2026-07-21T23:53:43.440Z",
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
		"liquidityUsd": 26749968.99,
		"hash": "f76719f880ff35fa1c786e82ba927bd2149f1ff4f994a7529d675c7127d83881"
	},
	{
		"id": "36acea1de93f",
		"ts": "2026-07-21T23:53:43.685Z",
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
		"liquidityUsd": 5283952.65,
		"hash": "36acea1de93f4d58fa3a265124fa09686266c3e35812e60b60c934e3a6f1631f"
	},
	{
		"id": "1d0a526c4e31",
		"ts": "2026-07-21T23:53:43.941Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1011296.14,
		"hash": "1d0a526c4e312f37262475124d46b431c560f8ce15fbfc0254a7c2aedb7e8a5c"
	},
	{
		"id": "697469b70890",
		"ts": "2026-07-21T23:53:44.202Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26749968.99,
		"hash": "697469b708904ab09f1a027bee3d8de325bf846e2fa78679a29f47ce182353ce"
	},
	{
		"id": "034846056a00",
		"ts": "2026-07-21T23:53:44.448Z",
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
		"liquidityUsd": 2573004.06,
		"hash": "034846056a004f9e037b4fec92814e096e4d6d508b6d72d37f6391258f803795"
	},
	{
		"id": "6ae95ee1eed6",
		"ts": "2026-07-21T23:53:44.700Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1512268.13,
		"hash": "6ae95ee1eed6f6e30ef9fe0b33a950f19f34946470f11691ff6e1559f6bdbfd9"
	},
	{
		"id": "3ebf74272956",
		"ts": "2026-07-21T23:53:44.963Z",
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
		"liquidityUsd": 9866446.97,
		"hash": "3ebf74272956fef47e07d8f4f19f2b777ee33e5518219b85c2b4148bb3e6744c"
	},
	{
		"id": "17daa9df6a19",
		"ts": "2026-07-21T23:53:45.193Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 82888.93,
		"hash": "17daa9df6a199fe69a0505f52fc09a0a9fba8e621843ab3859fd6014a36d049e"
	},
	{
		"id": "cfab17b1bd68",
		"ts": "2026-07-21T23:53:45.433Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2129930.19,
		"hash": "cfab17b1bd68c740ac3337e2295198ec0c83adbda2b349306b4d9b038e626b74"
	},
	{
		"id": "c31224497d74",
		"ts": "2026-07-21T23:53:45.679Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 147318.84,
		"hash": "c31224497d74b4c0e42f192bdbe3325400d556cc7ffbcda414e4f63ae0309cdc"
	},
	{
		"id": "a91068564535",
		"ts": "2026-07-21T23:53:45.910Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3622277.84,
		"hash": "a910685645359f4e7fbe64ad01a86503970792cb77ec2c117df3cf58026729a5"
	},
	{
		"id": "e10f723ec3db",
		"ts": "2026-07-21T23:53:46.152Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 205750.8,
		"hash": "e10f723ec3db708bb99881f212dd4c72a762f259e96dcd2986efccd15cc9de1a"
	},
	{
		"id": "67713a8d04d2",
		"ts": "2026-07-21T23:53:46.401Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1826695.43,
		"hash": "67713a8d04d2892a808ed0378206db6cd61494372120b6414414ace39e4adfea"
	},
	{
		"id": "3bc1c49371e4",
		"ts": "2026-07-21T23:53:46.632Z",
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
		"liquidityUsd": 258773.79,
		"hash": "3bc1c49371e42c9b81664aa534d3894e0f15588a7733e3690601683c4d65442f"
	},
	{
		"id": "1340dd6281ba",
		"ts": "2026-07-21T22:52:37.002Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110410632.72,
		"hash": "1340dd6281ba8ac79de3c58df34a9ff3c635e68189d93da6bf4277c763a8cdd7"
	},
	{
		"id": "06da3a7df398",
		"ts": "2026-07-21T22:52:37.443Z",
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
		"liquidityUsd": 16091931.06,
		"hash": "06da3a7df398bc754ff3166b366343c77f6243df5fd950037acc7e8b233f748e"
	},
	{
		"id": "2a8dca6b5c3a",
		"ts": "2026-07-21T22:52:37.691Z",
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
		"liquidityUsd": 841796.83,
		"hash": "2a8dca6b5c3a4fa53c9ffe8e9187e7d219232d795710b049dd588d9f39d90cc5"
	},
	{
		"id": "7ce867f7e371",
		"ts": "2026-07-21T22:52:37.933Z",
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
		"liquidityUsd": 25877680.43,
		"hash": "7ce867f7e3716f8b542c36edbc4a1c3331d614fbe2a4d28655805bc4c31b6f86"
	},
	{
		"id": "8d1228dcaf9c",
		"ts": "2026-07-21T22:52:38.171Z",
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
		"liquidityUsd": 5295935.73,
		"hash": "8d1228dcaf9c0643a1e62b4b079bd4f500db169684082aaf9a4108a176b40cad"
	},
	{
		"id": "6e0bbb172eac",
		"ts": "2026-07-21T22:52:38.420Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1011296.14,
		"hash": "6e0bbb172eacb2d4c06648d5ee4c2da6d637b19de10926f9d6baf51e71e7270d"
	},
	{
		"id": "ab5ac4d3b933",
		"ts": "2026-07-21T22:52:38.685Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25877680.43,
		"hash": "ab5ac4d3b93396bb8b1cb2968524f84e8e98fd83f701e669330eff8848c01e38"
	},
	{
		"id": "60837d97292a",
		"ts": "2026-07-21T22:52:38.941Z",
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
		"liquidityUsd": 2564425.23,
		"hash": "60837d97292ad679a3e110d1a597b2799d6048d0d6007dc5ad5179d59e651fe3"
	},
	{
		"id": "b1e498c08239",
		"ts": "2026-07-21T22:52:39.191Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1520676.32,
		"hash": "b1e498c082394c3949ec4aeab4dbe47c330c97c5015b27bf692f29ef06a1f17a"
	},
	{
		"id": "d5a45fdfe341",
		"ts": "2026-07-21T22:52:39.434Z",
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
		"liquidityUsd": 9795050.86,
		"hash": "d5a45fdfe34189da775515cf5bcc57452961fb7e44db4d7e8517d4183ed1fc49"
	},
	{
		"id": "57c21fa022c9",
		"ts": "2026-07-21T22:52:39.653Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 82330.49,
		"hash": "57c21fa022c95fc8b1af7457774bc76b2f7191b7dfe96c569ff21e9cd9d67e99"
	},
	{
		"id": "81981bcf5b7d",
		"ts": "2026-07-21T22:52:39.882Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 146360.58,
		"hash": "81981bcf5b7da8dcfa94ab30f4fbcda3fd7cdfa8a9e9346fbf772fd17c23ec4e"
	},
	{
		"id": "4056c32c5958",
		"ts": "2026-07-21T22:52:40.108Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2132346.28,
		"hash": "4056c32c59589eca10a472ed8df8a967d00214f0b8a009fb7fee0cb2ada1b5fd"
	},
	{
		"id": "46f96930ad23",
		"ts": "2026-07-21T22:52:40.338Z",
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
		"liquidityUsd": 3643259.86,
		"hash": "46f96930ad23bcb7fc30e1bf4650e2c72556e83431eae2e9dc02039819678ac5"
	},
	{
		"id": "b1488b11dca0",
		"ts": "2026-07-21T22:52:40.565Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 198474.87,
		"hash": "b1488b11dca0279a8382e0ceda82edc43f2695a0a1acba3000f64c7e2fa9205b"
	},
	{
		"id": "bf92d5d69d95",
		"ts": "2026-07-21T22:52:40.790Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1829765.64,
		"hash": "bf92d5d69d9521d16e7e510f8f91132b42ef852563cd7797eb5daf007d211305"
	},
	{
		"id": "46e1cf4e8e8c",
		"ts": "2026-07-21T22:52:41.012Z",
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
		"liquidityUsd": 259207.37,
		"hash": "46e1cf4e8e8cd0e1ff5389cb195d853acd583f908ede69876c37f911308c9304"
	},
	{
		"id": "424c71c0111a",
		"ts": "2026-07-21T21:03:46.674Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110522605.87,
		"hash": "424c71c0111a00ef589acc316618c5fdd49d0d0115903b0cb870c2d171bb9b1e"
	},
	{
		"id": "e7f2dc05ea42",
		"ts": "2026-07-21T21:03:46.887Z",
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
		"liquidityUsd": 16032332.15,
		"hash": "e7f2dc05ea42466100772c5323931d93ebbdef0e921adf7472a3355fd3772ee6"
	},
	{
		"id": "a3ee023af629",
		"ts": "2026-07-21T21:03:47.079Z",
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
		"liquidityUsd": 847777.25,
		"hash": "a3ee023af62906d1ad8d3d5afb0eb127f18b1b6c9b3256e6788476b7a846155b"
	},
	{
		"id": "254448dce472",
		"ts": "2026-07-21T21:03:47.280Z",
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
		"liquidityUsd": 25978553.72,
		"hash": "254448dce47219b76dfa61e1ee30d1fb24fb149b79dce845be8f50b3a6ff69b7"
	},
	{
		"id": "df624b9e84c2",
		"ts": "2026-07-21T21:03:47.472Z",
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
		"liquidityUsd": 5303480.53,
		"hash": "df624b9e84c27a92765d959100189c2792ea9fea08a6c68367b296932474b580"
	},
	{
		"id": "9c4fa919066d",
		"ts": "2026-07-21T21:03:47.692Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1010725.3,
		"hash": "9c4fa919066d51e56035bc9b2df03e2373f354a6480e29d5d04b621ed2b270d2"
	},
	{
		"id": "7fa6e17634ae",
		"ts": "2026-07-21T21:03:47.888Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25978553.72,
		"hash": "7fa6e17634ae116ae0178f09663f54ac5a6ca239a4a366168563c44007e5da0c"
	},
	{
		"id": "bacf34ff1008",
		"ts": "2026-07-21T21:03:48.088Z",
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
		"liquidityUsd": 2570135,
		"hash": "bacf34ff1008839c70d4a6dadf287c9f308b7e0752c1978a6864160b178f74e1"
	},
	{
		"id": "f49987ff5181",
		"ts": "2026-07-21T21:03:48.279Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1590687.72,
		"hash": "f49987ff5181d6e83b7f0055586b2c6c88726c9b2f1d6be3cc49ad36df6f449f"
	},
	{
		"id": "e91b87f9ef3e",
		"ts": "2026-07-21T21:03:48.478Z",
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
		"liquidityUsd": 9846302.04,
		"hash": "e91b87f9ef3edbcf60e69ae05eb4f51ccd9310a20e8a4740ffa2ba50f89055f8"
	},
	{
		"id": "85a05ba58710",
		"ts": "2026-07-21T21:03:48.674Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2088220.35,
		"hash": "85a05ba58710469375df4d8a295a7c238678454dfcfe879cb2d2605ce6ce4b4b"
	},
	{
		"id": "e80838a52022",
		"ts": "2026-07-21T21:03:48.874Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 87435.41,
		"hash": "e80838a52022e61d5cc9217aa53628b73769432c65096aa826bf0767430700b3"
	},
	{
		"id": "0cc7b413010b",
		"ts": "2026-07-21T21:03:49.060Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 147348,
		"hash": "0cc7b413010bd3452b15d664d6643100f1fe76a3792e816ee7dc159a94a6e851"
	},
	{
		"id": "ea2f2757504d",
		"ts": "2026-07-21T21:03:49.264Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3666208.91,
		"hash": "ea2f2757504d2a3956761060ce18c267e5c0792fe75e2740821c419320a10637"
	},
	{
		"id": "37e0b18044af",
		"ts": "2026-07-21T21:03:49.444Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 185887.25,
		"hash": "37e0b18044afd13567b19151586c7a046d6884eb0a38c14ab31193064b222a77"
	},
	{
		"id": "7fea3cd4007e",
		"ts": "2026-07-21T21:03:49.662Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 287107.62,
		"hash": "7fea3cd4007e6c3df7e186647ed83871af8777c77a35689a22c283586a89bdff"
	},
	{
		"id": "59f2d3822f74",
		"ts": "2026-07-21T21:03:49.846Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1821318.03,
		"hash": "59f2d3822f74749a7d2ac08d1e2f1f300e9336c6f9256c897e9de4bc50cb26e8"
	},
	{
		"id": "36da1ff55d7c",
		"ts": "2026-07-21T21:03:50.090Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 42078.72,
		"hash": "36da1ff55d7cf5078cecba11fc121d60d2485a8f5d52726d324da72f34b906ad"
	},
	{
		"id": "f66f4fba5236",
		"ts": "2026-07-21T19:15:08.941Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110636819.57,
		"hash": "f66f4fba5236526fdb965453a309bfb4378076d753ff68968633a013fe8d69c7"
	},
	{
		"id": "2eeeac267b60",
		"ts": "2026-07-21T19:15:09.261Z",
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
		"liquidityUsd": 15948710.23,
		"hash": "2eeeac267b6054a8ad2a16916894683c09d9fb6a11a88968a6f12ea244db3d26"
	},
	{
		"id": "1f2bf00c2583",
		"ts": "2026-07-21T19:15:09.552Z",
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
		"liquidityUsd": 847413.58,
		"hash": "1f2bf00c2583975905a689b8442c0b76ecc84445a58c2232189fa7dff73ed6de"
	},
	{
		"id": "4775b8a29d02",
		"ts": "2026-07-21T19:15:09.815Z",
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
		"liquidityUsd": 25783160.73,
		"hash": "4775b8a29d0234f9a19736a86d3dbb1d9df04eafa48b888e1019ea4bc8a6af41"
	},
	{
		"id": "ff0e7393c404",
		"ts": "2026-07-21T19:15:10.090Z",
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
		"liquidityUsd": 5335586.74,
		"hash": "ff0e7393c40421d5c0743ec2068867531fff093b5471159576cec51fde57568c"
	},
	{
		"id": "09c857d8c08a",
		"ts": "2026-07-21T19:15:10.335Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1016320.97,
		"hash": "09c857d8c08ac59faef163594a4cdf3babcef5f7c1268c65f7234055a917b3ff"
	},
	{
		"id": "c16b30199f6f",
		"ts": "2026-07-21T19:15:10.587Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25783160.73,
		"hash": "c16b30199f6fa5c08b566e23469f0eee3a3e0ed74713a840bb146d45a309d1e6"
	},
	{
		"id": "898e9dbb3a0b",
		"ts": "2026-07-21T19:15:10.841Z",
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
		"liquidityUsd": 2567129.59,
		"hash": "898e9dbb3a0b0fa7616bee9a56b372f9ff3af525c56aa5e69a583999c825564a"
	},
	{
		"id": "a677cc87dfdc",
		"ts": "2026-07-21T19:15:11.090Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1608970.02,
		"hash": "a677cc87dfdc3ace8c26f1bbb99a9832ea29021773c87cf9f698ea806e1ccbd8"
	},
	{
		"id": "e426d1af1486",
		"ts": "2026-07-21T19:15:11.374Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2117717.61,
		"hash": "e426d1af1486d7684c74b84168526c920c8f87e62fcc03eac358e8156ce8b6ec"
	},
	{
		"id": "62f2558c3019",
		"ts": "2026-07-21T19:15:11.603Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9824930.06,
		"hash": "62f2558c3019a072ba4c754ed157ef02fe6cf8ce5033297a5e615c416f7134c1"
	},
	{
		"id": "6e453d541db9",
		"ts": "2026-07-21T19:15:11.836Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 85822.14,
		"hash": "6e453d541db9c278401c359e1d64338c3d6860eeb40b4e8c72eb43b2faba5da6"
	},
	{
		"id": "60be1b3d4220",
		"ts": "2026-07-21T19:15:12.073Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 146548.25,
		"hash": "60be1b3d4220328ee06a420964cef69bc3c9045c31f5932abd6a4bc66fc76c92"
	},
	{
		"id": "1f86fc69a9fa",
		"ts": "2026-07-21T19:15:12.304Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3673063.29,
		"hash": "1f86fc69a9faa4254faeedfc087e6e4cafdbfab92d2d54cc239427d62ce4e3d5"
	},
	{
		"id": "21f5baad937f",
		"ts": "2026-07-21T19:15:12.539Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 286314.29,
		"hash": "21f5baad937f86dcf04d1455bd4557488d674846cf36e6aad51762ca863e9bd1"
	},
	{
		"id": "e7ab013e52f8",
		"ts": "2026-07-21T19:15:12.775Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1829236.95,
		"hash": "e7ab013e52f8cbaaaefb6039c1986502ae59252a39f205fd9161b564ca9f6126"
	},
	{
		"id": "022f41a87180",
		"ts": "2026-07-21T19:15:13.033Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 191643.78,
		"hash": "022f41a871808d076728846b09bd14a09fc26863d1e9ae18fba6bd3646d6741f"
	},
	{
		"id": "e84988863a54",
		"ts": "2026-07-21T19:15:13.269Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 43480.99,
		"hash": "e84988863a54dd47bd0b75b469f77a5d4d4b9952c87d48aef9acb6267f814fe2"
	},
	{
		"id": "307164508ed9",
		"ts": "2026-07-21T17:13:52.956Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110891262.26,
		"hash": "307164508ed9cbdce269b95afd4155066548874fb0f2c69bdfaf65adf6c8c8ca"
	},
	{
		"id": "7df75d741c27",
		"ts": "2026-07-21T17:13:53.389Z",
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
		"liquidityUsd": 14925972.39,
		"hash": "7df75d741c270a1a342be3cb20f55aef610c2b7d35c4c4d16891decbb268842d"
	},
	{
		"id": "0e07863b8678",
		"ts": "2026-07-21T17:13:53.579Z",
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
		"liquidityUsd": 850599.6,
		"hash": "0e07863b8678bbf6a6c7945a6b79b54ae0fa580317ffb3a00ff611fafac5de01"
	},
	{
		"id": "176461a8a218",
		"ts": "2026-07-21T17:13:53.767Z",
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
		"liquidityUsd": 26022261.62,
		"hash": "176461a8a2181af6617811ef9c634f036d06324a0bf804b099217c1ce82b596e"
	},
	{
		"id": "4b6cc27dd985",
		"ts": "2026-07-21T17:13:53.993Z",
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
		"liquidityUsd": 5355142.71,
		"hash": "4b6cc27dd98551812c935e885a6aac0765e76e2e79d6dafa083c3540d305aec3"
	},
	{
		"id": "744855a1794e",
		"ts": "2026-07-21T17:13:54.185Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1026482.87,
		"hash": "744855a1794e228484350c2adfcd444bb9854e79b83897b6926f3a403e0344a8"
	},
	{
		"id": "4053d60071fb",
		"ts": "2026-07-21T17:13:54.373Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26043899.02,
		"hash": "4053d60071fbe9eb39e8767b94d375c28688c06dda005a5886016358c40bff30"
	},
	{
		"id": "8bf0483ca544",
		"ts": "2026-07-21T17:13:54.579Z",
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
		"liquidityUsd": 2574641.85,
		"hash": "8bf0483ca54499403aff9e08616c61555b7f2386e2444953cd510b1374f7ad17"
	},
	{
		"id": "24f64c31641a",
		"ts": "2026-07-21T17:13:54.774Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1591472.26,
		"hash": "24f64c31641a6cf6b07f7c689f7b2b3bc925f143c61caa0b8f4c892adcb768f3"
	},
	{
		"id": "2a5994bab9d6",
		"ts": "2026-07-21T17:13:54.974Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 78177.91,
		"hash": "2a5994bab9d6fe3f669be52804fc34f22c434db66c9e1f2c3c703a41d903a066"
	},
	{
		"id": "073ba747e07e",
		"ts": "2026-07-21T17:13:55.163Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2120690.74,
		"hash": "073ba747e07eae991da08e5f65dba293fca80c3e9c8c9b7a77a8bfa5b961bc24"
	},
	{
		"id": "f851e81fbdbf",
		"ts": "2026-07-21T17:13:55.382Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3646930.8,
		"hash": "f851e81fbdbf356de725ce75b120af8fff515ef162ecd0510fd29d45ec2c2cec"
	},
	{
		"id": "6c36704ab6f4",
		"ts": "2026-07-21T17:13:55.569Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 152279.2,
		"hash": "6c36704ab6f4288fcfc9025b33e326775da9f62af9b96c6deca3592ae84c7308"
	},
	{
		"id": "346b46a22c73",
		"ts": "2026-07-21T17:13:55.766Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 287302.66,
		"hash": "346b46a22c73dd524111951ea9f09bfd91064ba3651964020edb5cef98a5e928"
	},
	{
		"id": "56c579e45df4",
		"ts": "2026-07-21T17:13:55.975Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9829568.37,
		"hash": "56c579e45df4fd88290ed9096b97c2ac5e644555ec5f0fc474565c48a0afcab4"
	},
	{
		"id": "d8ce56688547",
		"ts": "2026-07-21T17:13:56.174Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1830760.98,
		"hash": "d8ce566885470b8b424e26681b7ce38b1885241a7777c02f45a9d1104860dafd"
	},
	{
		"id": "db1f183d7a61",
		"ts": "2026-07-21T17:13:56.407Z",
		"symbol": "BRIUN",
		"token": "0x8c81B4c816d66D36c4bF348BdeC01dBCbC70E987",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 42681.51,
		"hash": "db1f183d7a61caf9674b03f07b026b52cbf51ecf8940ebd61e08578dcc9dd411"
	},
	{
		"id": "3e3ab5a11cfd",
		"ts": "2026-07-21T15:40:23.264Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110652045.94,
		"hash": "3e3ab5a11cfd9a85357a728407579806431db7233e1449a57f4ca6e51c5e4a0a"
	},
	{
		"id": "680f8c8e1673",
		"ts": "2026-07-21T15:40:23.487Z",
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
		"liquidityUsd": 16271315.83,
		"hash": "680f8c8e16735c9461a2fbc739dd4431e4d5f95242ae372a7d43f061189e1922"
	},
	{
		"id": "25b4dac28630",
		"ts": "2026-07-21T15:40:23.678Z",
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
		"liquidityUsd": 847131.06,
		"hash": "25b4dac28630a861806594aa4c8557326d73d848f919cc1a3852ce9a52eec917"
	},
	{
		"id": "27428d48fff1",
		"ts": "2026-07-21T15:40:23.870Z",
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
		"liquidityUsd": 25715026.39,
		"hash": "27428d48fff10ae8930d75d7eb1187187378fe66b641e73f379c9651b658ff04"
	},
	{
		"id": "41bcf99c0119",
		"ts": "2026-07-21T15:40:24.058Z",
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
		"liquidityUsd": 5373395.68,
		"hash": "41bcf99c01193e225019e79ea5181c15685221941b19127195c44df683880174"
	},
	{
		"id": "929cd6b4262e",
		"ts": "2026-07-21T15:40:24.249Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1026517.79,
		"hash": "929cd6b4262ea65b515d02e03f2dc2d7213cf3ee3623dc72d0e1472212a2e81b"
	},
	{
		"id": "4b424120633a",
		"ts": "2026-07-21T15:40:24.458Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25715026.39,
		"hash": "4b424120633ae51ad0f798765d158bb41f11756c82b8ff52df04893f12551bc8"
	},
	{
		"id": "9f195d0aab62",
		"ts": "2026-07-21T15:40:24.644Z",
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
		"liquidityUsd": 2575312.79,
		"hash": "9f195d0aab626183bfbfe10d0d197df22a8ca02db28511757d8e2f1689de001d"
	},
	{
		"id": "4c08af5b54a0",
		"ts": "2026-07-21T15:40:24.829Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 82237.41,
		"hash": "4c08af5b54a0af5d6b5be2ccff0848a0a0a8dd7089e4d44adc84d6bb425d0ad5"
	},
	{
		"id": "86d12ee05989",
		"ts": "2026-07-21T15:40:25.023Z",
		"symbol": "ROLL",
		"token": "0xAb6363dA0C80cEF3Ae105Bd6241E30872355d021",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1580880.63,
		"hash": "86d12ee059897c4dad542051d70e232da7face19f7b964906ada738bc8d5fddd"
	},
	{
		"id": "711e85cd5a5b",
		"ts": "2026-07-21T15:40:25.206Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3678854.8,
		"hash": "711e85cd5a5b0c0afbdb4c962d6d09de243547477c7732a2f316b93ef0749bb9"
	}
]
