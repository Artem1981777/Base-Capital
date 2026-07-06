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
	"updatedAt": "2026-07-06T22:11:11.740Z",
	"tokensScored": 1793,
	"verdictsIssued": 1793,
	"safe": 1582,
	"risky": 166,
	"likelyRug": 45,
	"ticks": 119
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "cfa1063a2dbe",
		"ts": "2026-07-06T22:11:05.463Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102531978.94,
		"hash": "cfa1063a2dbed3341a246e2136fdd8a08485d39d20d32e090faa0cfe44d86daa"
	},
	{
		"id": "6e87f7dc0a82",
		"ts": "2026-07-06T22:11:06.367Z",
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
		"liquidityUsd": 16665244.8,
		"hash": "6e87f7dc0a82e1d73cfb5a9b74d75f851a423481603e4c4663d983ea930f3fed"
	},
	{
		"id": "e66ab1d7d02f",
		"ts": "2026-07-06T22:11:06.873Z",
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
		"liquidityUsd": 1428559.44,
		"hash": "e66ab1d7d02fcba84bdacc3fc492d6b54e17d4663fad2f4a3efdc9601b651d6d"
	},
	{
		"id": "57ab7342e534",
		"ts": "2026-07-06T22:11:07.143Z",
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
		"liquidityUsd": 34109119.86,
		"hash": "57ab7342e5343be91a7adfb926ec1b42a6758dc35b40a77846005e4391ffb3bd"
	},
	{
		"id": "89013140ab64",
		"ts": "2026-07-06T22:11:07.407Z",
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
		"liquidityUsd": 4152462.58,
		"hash": "89013140ab6499b7ed23ee32e22ecece97706c6e603de7161e4851e15d8617bc"
	},
	{
		"id": "b91c9b3849bf",
		"ts": "2026-07-06T22:11:07.677Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1026213.12,
		"hash": "b91c9b3849bfb81fe2c9a17fdd0bf003ded6093b5549bbad12ac5c69be7dc077"
	},
	{
		"id": "3e911563407e",
		"ts": "2026-07-06T22:11:08.107Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34109119.86,
		"hash": "3e911563407e5a05476d81b6a66319ff1e8df4a39b41c16722a95e78f55bf1f8"
	},
	{
		"id": "7f75e0c2d90e",
		"ts": "2026-07-06T22:11:08.379Z",
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
		"liquidityUsd": 2390936.88,
		"hash": "7f75e0c2d90eebbe92d97f8b68211a28e9a7de8d4f634c00e78b12dac2fb17fb"
	},
	{
		"id": "7b084efbdb22",
		"ts": "2026-07-06T22:11:08.650Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 183060.01,
		"hash": "7b084efbdb226d7800a744e6a84b644c801ad15f87945dacab109304383e4c66"
	},
	{
		"id": "ca136c4194fc",
		"ts": "2026-07-06T22:11:08.928Z",
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
		"liquidityUsd": 119031.13,
		"hash": "ca136c4194fc60b847f30db94f9857a2d96fd9bf4098bdf3982895d38bd7d241"
	},
	{
		"id": "1c8dee5ca5e1",
		"ts": "2026-07-06T22:11:09.180Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 458931.49,
		"hash": "1c8dee5ca5e1ee112a718cb3a16f395ed41e094a2d71f94729acfd05ea194291"
	},
	{
		"id": "34ef9afd2976",
		"ts": "2026-07-06T22:11:09.441Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 564595.65,
		"hash": "34ef9afd2976e77066ca6b82a3ba2df32c876b1dbd0daf86d104c6b38b24fbf2"
	},
	{
		"id": "113fcb8bc59e",
		"ts": "2026-07-06T22:11:09.693Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 36779.53,
		"hash": "113fcb8bc59e148b72e610159d71e679567ad97c8cd878f7784879e343a8ec3f"
	},
	{
		"id": "4f515975d1c0",
		"ts": "2026-07-06T22:11:09.939Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 189357.13,
		"hash": "4f515975d1c0224b52b31313fde80e98f648e067443a489cd2db17472b8e0c82"
	},
	{
		"id": "4703bf76a84e",
		"ts": "2026-07-06T22:11:10.188Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4766122.55,
		"hash": "4703bf76a84e5ecbcc7022394b45d12505f761ea71608eef982c35cc9e51351e"
	},
	{
		"id": "89a9fc951dc6",
		"ts": "2026-07-06T22:11:11.239Z",
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
		"liquidityUsd": 7878465.73,
		"hash": "89a9fc951dc681b5811dc7d8786ca87729254b858045a57529289ee83b7553ea"
	},
	{
		"id": "b87dd96059d4",
		"ts": "2026-07-06T22:11:11.487Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 581054.19,
		"hash": "b87dd96059d477f4dca09795c4229c7232dd0bac6963c02ec4c3fd7e80291a5a"
	},
	{
		"id": "fdb6f0dff14b",
		"ts": "2026-07-06T22:11:11.739Z",
		"symbol": "PLAY",
		"token": "0x853a7c99227499DbA9dB8C3A02aA691aFDeBf841",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 453224.99,
		"hash": "fdb6f0dff14b9dc9d38368aae794b1b263fd6d83a7dec2df7dc2ddc37f9c5ff4"
	},
	{
		"id": "f25eb2bc2463",
		"ts": "2026-07-06T20:50:47.600Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102142400.3,
		"hash": "f25eb2bc2463db3174ea80880f7262a11e2ddec3355e2f40850f2d1044164191"
	},
	{
		"id": "02a0651b339a",
		"ts": "2026-07-06T20:50:48.048Z",
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
		"liquidityUsd": 16695473.31,
		"hash": "02a0651b339a60016cb1e8b795ad4dc3611efe58ee82fb70e8d929105c6042ba"
	},
	{
		"id": "05f74b259876",
		"ts": "2026-07-06T20:50:48.486Z",
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
		"liquidityUsd": 1416762.71,
		"hash": "05f74b25987603f9f5bfe44a0567a03eaf734e3bda96603d4c51ae8709bbb6c5"
	},
	{
		"id": "e146fb97a6a2",
		"ts": "2026-07-06T20:50:48.731Z",
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
		"liquidityUsd": 33961589.24,
		"hash": "e146fb97a6a20232faf8616e557d0479159a7666d758d285a1664e1f47cbb33e"
	},
	{
		"id": "05e06bc0a1c0",
		"ts": "2026-07-06T20:50:48.966Z",
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
		"liquidityUsd": 4105097.57,
		"hash": "05e06bc0a1c09144ebfa012891513fed8f86b7da5eb7528e74baab68109ee0d5"
	},
	{
		"id": "2c76ce63238f",
		"ts": "2026-07-06T20:50:49.209Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1016643.7,
		"hash": "2c76ce63238fe3ddc70b417f6d1895a68957d7f86fa09fa52bfbfb24fc0d11cf"
	},
	{
		"id": "fd99adb286f6",
		"ts": "2026-07-06T20:50:49.441Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33961589.24,
		"hash": "fd99adb286f66482372a8d67374260e4de81cf58cba950511897c0c5389cd797"
	},
	{
		"id": "4fe675ae41ae",
		"ts": "2026-07-06T20:50:49.709Z",
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
		"liquidityUsd": 2363179.96,
		"hash": "4fe675ae41aeee67ea3a711108216d02c19f537dae14530006e6b37dc4e006df"
	},
	{
		"id": "2774579c14b0",
		"ts": "2026-07-06T20:50:49.942Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 432440.76,
		"hash": "2774579c14b0a1b7e6fb00d7fdd0724962d2f545f72291e2c07808ac5621230f"
	},
	{
		"id": "eebdb92322ed",
		"ts": "2026-07-06T20:50:50.183Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 183942.17,
		"hash": "eebdb92322ed0a347e679a4995e680b24e39b9e7bca1889cd50888e1dbdec20f"
	},
	{
		"id": "adcdd08f1c81",
		"ts": "2026-07-06T20:50:50.415Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 545890.83,
		"hash": "adcdd08f1c8115402c0d90644211aa6a07424babce87aba9c5b1f9f2480f12de"
	},
	{
		"id": "a9624e7ee0aa",
		"ts": "2026-07-06T20:50:50.641Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 121903.97,
		"hash": "a9624e7ee0aaae28ecadaae02fc00b0ad266433c8805e56ad9bca30d9f875bff"
	},
	{
		"id": "1ded43984295",
		"ts": "2026-07-06T20:50:50.858Z",
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
		"liquidityUsd": 2126428.56,
		"hash": "1ded43984295b953d79c8a84c632741ec2543897b7dc71c9396736179a06b6bd"
	},
	{
		"id": "a805869e46d9",
		"ts": "2026-07-06T20:50:51.330Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 39034.46,
		"hash": "a805869e46d9b971ecc5d5bb77a2401580318529ca2e88179fa8b27a4970ade2"
	},
	{
		"id": "f20647873c86",
		"ts": "2026-07-06T20:50:51.551Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4723775.75,
		"hash": "f20647873c86d09de69e7bbc0132fdcc1da89c7b544abf78f4e2d3cfe2ac5efb"
	},
	{
		"id": "9916e563139b",
		"ts": "2026-07-06T20:50:51.775Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 199321.57,
		"hash": "9916e563139bf5673f35fdd8d68e42d05ba49638352b8f47f4aecf5f7a318894"
	},
	{
		"id": "0372fe601368",
		"ts": "2026-07-06T20:50:51.994Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7925976.33,
		"hash": "0372fe601368e18d6a2304852f558b291c3478f60a1a860987877c5552bd9a28"
	},
	{
		"id": "d23fdc189ee2",
		"ts": "2026-07-06T20:50:52.218Z",
		"symbol": "PLAY",
		"token": "0x853a7c99227499DbA9dB8C3A02aA691aFDeBf841",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 449020.72,
		"hash": "d23fdc189ee2ec56eb8fe984e35611ccb4a65af4f573a2c6a4e6b5ea790a1bc0"
	},
	{
		"id": "b6b7aa494d9b",
		"ts": "2026-07-06T18:53:14.220Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102151403.64,
		"hash": "b6b7aa494d9b1ba8fe34ba8f456ea211bf96490e538be3162d4924125f462f1c"
	},
	{
		"id": "208dba7e7045",
		"ts": "2026-07-06T18:53:14.452Z",
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
		"liquidityUsd": 16733649.13,
		"hash": "208dba7e70457ce7e3ff598245c962745b640213d3a16c7cbc8f8db9de64840b"
	},
	{
		"id": "47ba210d6c48",
		"ts": "2026-07-06T18:53:14.837Z",
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
		"liquidityUsd": 1416260.39,
		"hash": "47ba210d6c48392569def5431d805505116f0630d3505462192c34d986ddfd2e"
	},
	{
		"id": "f3316b015052",
		"ts": "2026-07-06T18:53:15.928Z",
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
		"liquidityUsd": 33829282.17,
		"hash": "f3316b015052144e0889ce57298e951db9034b584737c1f600718df659745815"
	},
	{
		"id": "4b7dd540f2d0",
		"ts": "2026-07-06T18:53:16.123Z",
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
		"liquidityUsd": 4116596.89,
		"hash": "4b7dd540f2d0dc5a2de9ecf0ef608f9b8c78fd9d5de90f2bb6b2130db47fc4c0"
	},
	{
		"id": "696a697c20c7",
		"ts": "2026-07-06T18:53:16.316Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1016643.7,
		"hash": "696a697c20c733e9673dc50b6b9cf6bdf2c9625f358355308b9196b152415b9d"
	},
	{
		"id": "84ad7c8187e3",
		"ts": "2026-07-06T18:53:16.510Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33829282.17,
		"hash": "84ad7c8187e33de9bcc619299efb946bf797d77fcbb5ce1d3881545c37711cec"
	},
	{
		"id": "c1d1f47f7ecc",
		"ts": "2026-07-06T18:53:16.702Z",
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
		"liquidityUsd": 2364793.06,
		"hash": "c1d1f47f7eccaf0a9191028376740ab4f9ef5a07c129d8d2dde5178f73e2f97e"
	},
	{
		"id": "4dcbc28a3e47",
		"ts": "2026-07-06T18:53:16.891Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 469119.04,
		"hash": "4dcbc28a3e4710e39e807a7cde2636585b00502c6bc5d18b2dcd44d688efb621"
	},
	{
		"id": "58ab7ff24f16",
		"ts": "2026-07-06T18:53:17.096Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 539995.92,
		"hash": "58ab7ff24f169738b456b01cdb63c2a4c9b42d05c35162b59add23483acfe847"
	},
	{
		"id": "91cb86867c0e",
		"ts": "2026-07-06T18:53:17.286Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 124428.13,
		"hash": "91cb86867c0eddf123d66513b2bc56fd789bf1bb1b6f3733aeaaae28040586bc"
	},
	{
		"id": "a5170d5dbd30",
		"ts": "2026-07-06T18:53:18.173Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 198322.79,
		"hash": "a5170d5dbd3018edc6012b3176d2f18449f01c1bdd6facb95cfcdcad0bb5ba69"
	},
	{
		"id": "d5db7127716e",
		"ts": "2026-07-06T18:53:18.348Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2127163.1,
		"hash": "d5db7127716ec6c18ca85bfb6f6d9384d8b57099fd565f3a30d252c2b4d80009"
	},
	{
		"id": "e682bfa1d47f",
		"ts": "2026-07-06T18:53:18.525Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 40471.7,
		"hash": "e682bfa1d47f35e32160907fdec51ea7ff37a783704f078275a97e900ffe9c42"
	},
	{
		"id": "354397955a06",
		"ts": "2026-07-06T18:53:18.850Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 519504.4,
		"hash": "354397955a061efa1e44936af4ea421984ef70640eafd85801627234a17138d9"
	},
	{
		"id": "6f2faf6799db",
		"ts": "2026-07-06T18:53:19.237Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7959145.71,
		"hash": "6f2faf6799dbc6b66e1ba762726f9203c07ac5242bd9d53b726f23955c171ebd"
	},
	{
		"id": "93862ba8c6ab",
		"ts": "2026-07-06T18:53:19.432Z",
		"symbol": "PLAY",
		"token": "0x853a7c99227499DbA9dB8C3A02aA691aFDeBf841",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 449456.46,
		"hash": "93862ba8c6abeec2767b7d753a858f4580106047763405246c4186c01f12e41f"
	},
	{
		"id": "c75b8c386461",
		"ts": "2026-07-06T18:53:20.215Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4688963.54,
		"hash": "c75b8c386461274bb2bf9b45d63d7af2c31a2dc3cb9d9cbfafb6db99ca60a7d0"
	},
	{
		"id": "3e6786bea2ab",
		"ts": "2026-07-06T16:17:49.429Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102229256.12,
		"hash": "3e6786bea2abe2700de1acc86ca387f651b8cd86dd1ad35adfa54ebc6926e3ad"
	},
	{
		"id": "6717b867e107",
		"ts": "2026-07-06T16:17:49.785Z",
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
		"liquidityUsd": 15256539.68,
		"hash": "6717b867e1077fef4b976e55d3a92b7cc915c832e0c6958f7b8557037cfaff79"
	},
	{
		"id": "06bd8e089056",
		"ts": "2026-07-06T16:17:50.131Z",
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
		"liquidityUsd": 1423954.34,
		"hash": "06bd8e08905613bcb4c4615ee6daebb144b7475918f250e1911db81a3c23794e"
	},
	{
		"id": "8b1028482099",
		"ts": "2026-07-06T16:17:50.478Z",
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
		"liquidityUsd": 33836351.27,
		"hash": "8b102848209922c5f8acd860755bd5d00da9a8ef90e1da6f326fb15e1177b20e"
	},
	{
		"id": "e245d96824e0",
		"ts": "2026-07-06T16:17:50.674Z",
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
		"liquidityUsd": 4098852.46,
		"hash": "e245d96824e054db0e5dab04d8a53d031d654c9b86038d6d7ea66713901e9223"
	},
	{
		"id": "af60ab69a6d3",
		"ts": "2026-07-06T16:17:50.878Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1016646.39,
		"hash": "af60ab69a6d3982e3c94e42dfbfeac9ae044a293feedfd698c79af397e77c52b"
	},
	{
		"id": "32297189e522",
		"ts": "2026-07-06T16:17:51.088Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33836351.27,
		"hash": "32297189e5229fea2c69e3ea70a2964a0f04793e96ed6a26d36f5f416f0d4af8"
	},
	{
		"id": "10ca3c64f5ed",
		"ts": "2026-07-06T16:17:51.292Z",
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
		"liquidityUsd": 2374530.45,
		"hash": "10ca3c64f5edcd8ecc40f8461540f66a748fc2913de68c935aff954866aec0b9"
	},
	{
		"id": "2aed7ea2b363",
		"ts": "2026-07-06T16:17:51.489Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 483615.15,
		"hash": "2aed7ea2b363dab73bdb51bc4058eb1c9d417b52eabebbd269ae325b1545e591"
	},
	{
		"id": "c1fdbc6df2ce",
		"ts": "2026-07-06T16:17:51.680Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 588835.24,
		"hash": "c1fdbc6df2ce7a04c7dd5c6963a65927d5e7c3b29460ed5b5b716557ba6ed73c"
	},
	{
		"id": "344196ad06a8",
		"ts": "2026-07-06T16:17:51.859Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 44332.77,
		"hash": "344196ad06a86b57edbd65a277581cff871c24289bc3c5472524a6a478e95358"
	},
	{
		"id": "c933fdb7a77a",
		"ts": "2026-07-06T16:17:52.050Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2104840.68,
		"hash": "c933fdb7a77a53d1bc0175a8680282a6b6f68f4bf287fce1e5150f6590f5ace9"
	},
	{
		"id": "fc9111ff2a14",
		"ts": "2026-07-06T16:17:52.241Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 522173.92,
		"hash": "fc9111ff2a14e1ad530d8418ba13173daf7e0912f83a7aeda387315ae3a2848c"
	},
	{
		"id": "51beb4a38ff0",
		"ts": "2026-07-06T16:17:52.419Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 108389.83,
		"hash": "51beb4a38ff004a901cced41fb45008ce4cbb1ee541097becfe19e8220eb2abf"
	},
	{
		"id": "aecb0586e55d",
		"ts": "2026-07-06T16:17:52.611Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8004138.12,
		"hash": "aecb0586e55db04b36c43ca77fbe2e985f1b1a21a1232ea4fadb9aa8dd9e07c5"
	},
	{
		"id": "8136c2af5fc0",
		"ts": "2026-07-06T16:17:52.805Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1983178.85,
		"hash": "8136c2af5fc086442f2c546b478fc27fe38c6485100538fdac104d65cd720eb5"
	},
	{
		"id": "a4d9abf397f5",
		"ts": "2026-07-06T16:17:52.985Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4826092.35,
		"hash": "a4d9abf397f5d24a7ed1f954ae9a43d329aa40c9e3b12f64fd4bb95c6c5523f3"
	},
	{
		"id": "6a7f17270da8",
		"ts": "2026-07-06T16:17:53.163Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3570583.51,
		"hash": "6a7f17270da8b3ee6126971051d9b8015e3a83bea525deff81144ed9ecf3cfe4"
	},
	{
		"id": "ffeacf1cdb57",
		"ts": "2026-07-06T12:02:10.680Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101030722.06,
		"hash": "ffeacf1cdb57afe92b77ef88750ae67f5e76c9176f28a1282958482483791622"
	},
	{
		"id": "3fdde4a0f649",
		"ts": "2026-07-06T12:02:11.163Z",
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
		"liquidityUsd": 16231841.95,
		"hash": "3fdde4a0f649fc58a125a5a4e3954ae7cb8e610f1ad36909c4515f65e8b5369d"
	},
	{
		"id": "82605f46e6cb",
		"ts": "2026-07-06T12:02:11.427Z",
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
		"liquidityUsd": 1394140.27,
		"hash": "82605f46e6cb14494239626b217be53d5301ba0d881cde7cc7d414dc8bce0967"
	},
	{
		"id": "939c3690c627",
		"ts": "2026-07-06T12:02:11.703Z",
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
		"liquidityUsd": 33276998.47,
		"hash": "939c3690c627d9b7b3697ff662f00a6f6671b227ff3199e46047fc1cfb0c2949"
	},
	{
		"id": "f2af51d7345a",
		"ts": "2026-07-06T12:02:12.082Z",
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
		"liquidityUsd": 4040313.32,
		"hash": "f2af51d7345ad0412e284e8318b44ffb9ef836b235b899b94adcc2dcdad97ed3"
	},
	{
		"id": "825d64caaf5e",
		"ts": "2026-07-06T12:02:12.359Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1003434.68,
		"hash": "825d64caaf5e22f80dc5764024e8b905ef61142260632cf2bb08f7c46f331783"
	},
	{
		"id": "e07b37338d0c",
		"ts": "2026-07-06T12:02:12.613Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33264049.02,
		"hash": "e07b37338d0c2a98d7350f3296f532c27d3ad6f4b7170ec16711f3fab66d588b"
	},
	{
		"id": "8b9ea526b7f5",
		"ts": "2026-07-06T12:02:12.952Z",
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
		"liquidityUsd": 2314933.73,
		"hash": "8b9ea526b7f543ad4abd3fc0ceef43b735280edc4f3e8fdd2b9a436a8cdd7753"
	},
	{
		"id": "ba032ba95bfd",
		"ts": "2026-07-06T12:02:13.231Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 68,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.36,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 42803.7,
		"hash": "ba032ba95bfdaeff9eb8b87c7bb249c283fee62b3a25e55d707d931c3fb1b204"
	},
	{
		"id": "5e1f2d112242",
		"ts": "2026-07-06T12:02:13.501Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 631733.01,
		"hash": "5e1f2d1122422ffe865cba7875697d03857fca8ea93548a138627ae5aa99b402"
	},
	{
		"id": "4f800a61e358",
		"ts": "2026-07-06T12:02:13.764Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 463056.73,
		"hash": "4f800a61e35886297086d07723d834937d29d836b7d0f1d9408f8dd78bf7db41"
	},
	{
		"id": "e21dad99864a",
		"ts": "2026-07-06T12:02:14.024Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2091287.32,
		"hash": "e21dad99864ac1ad1fa8fcef180674650ed0b8bd9836511bd4062db2bfc060c7"
	},
	{
		"id": "8ee252f77f78",
		"ts": "2026-07-06T12:02:14.268Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 556482.22,
		"hash": "8ee252f77f78255a3a97371f9dfcf39d87097f7b9bf51d3745dfb6c05e2c0c01"
	},
	{
		"id": "8fcc7e3f045f",
		"ts": "2026-07-06T12:02:14.508Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4750601.9,
		"hash": "8fcc7e3f045ffc3c88a7035ab331f40ff46bb661f0f6328a5da0156a65dae43e"
	},
	{
		"id": "0e31959a3c78",
		"ts": "2026-07-06T12:02:21.658Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1985957.05,
		"hash": "0e31959a3c7886aca18352afdf7df7c1ebb605b82df2bf9a50fa4728242ce9c1"
	},
	{
		"id": "4bb04febfe7b",
		"ts": "2026-07-06T12:02:22.609Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2025362.42,
		"hash": "4bb04febfe7b53c3f150dd9c33c858af50e01a9645ad48026c820b771d510316"
	},
	{
		"id": "61919081b557",
		"ts": "2026-07-06T12:02:22.981Z",
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
		"liquidityUsd": 7656345.91,
		"hash": "61919081b5574da593b7e40c012ed05f1e50d679f50adfc566a366a187918f05"
	},
	{
		"id": "07a2f8e837ce",
		"ts": "2026-07-06T12:02:23.226Z",
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
		"liquidityUsd": 3488951.54,
		"hash": "07a2f8e837ce16b4aecfc7748b2ea20b12dde5f26961b953ff6b91579e6330fa"
	},
	{
		"id": "25aace8c853f",
		"ts": "2026-07-06T07:09:45.788Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100951506.06,
		"hash": "25aace8c853f668954b15cad602dc5414c01775a7fa6ca5a5c709ef2a7049aa5"
	},
	{
		"id": "d24945b830dd",
		"ts": "2026-07-06T07:09:46.029Z",
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
		"liquidityUsd": 16045763.52,
		"hash": "d24945b830dd7200feaae5bd15d6aba75ae50790ee9b3abef537c1310ccf770c"
	},
	{
		"id": "a5a82114c17b",
		"ts": "2026-07-06T07:09:46.265Z",
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
		"liquidityUsd": 1397536.8,
		"hash": "a5a82114c17b473c729b47567023e0d0d8df2f047923a95b30e060d4557e8e67"
	},
	{
		"id": "b8a5c5638403",
		"ts": "2026-07-06T07:09:46.501Z",
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
		"liquidityUsd": 33375592.02,
		"hash": "b8a5c5638403008abc63513a318d4835a5e709601e683f97f03c5a4a1a78b2fa"
	},
	{
		"id": "c92bb8aa9b07",
		"ts": "2026-07-06T07:09:46.734Z",
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
		"liquidityUsd": 4107305.45,
		"hash": "c92bb8aa9b0737cbfb7806a97e8ee02c93c4d87885bb2fb2da5d4e957e7226db"
	},
	{
		"id": "4f8e6423ed58",
		"ts": "2026-07-06T07:09:46.973Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1000874.75,
		"hash": "4f8e6423ed58c4f34cdc02522af7d7724e8c3e0a3eeaa0df4d9d02a4e45f15a8"
	},
	{
		"id": "20790e7682dd",
		"ts": "2026-07-06T07:09:47.295Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33375592.02,
		"hash": "20790e7682dd68b0633b7df4d08b9968de1351abab42917c986f3bd93f5894b1"
	},
	{
		"id": "e9d60227c0c3",
		"ts": "2026-07-06T07:09:47.527Z",
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
		"liquidityUsd": 2327235.76,
		"hash": "e9d60227c0c3289cc53ee41680d24c75c95936a14dbb9c614b858b1130815288"
	},
	{
		"id": "787827420711",
		"ts": "2026-07-06T07:09:47.761Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 50419.43,
		"hash": "7878274207117af74aea76d63f2531064ab8e9f8d6c0d6779d1512133101d5aa"
	},
	{
		"id": "e8d24e26f3f8",
		"ts": "2026-07-06T07:09:48.023Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 627873.64,
		"hash": "e8d24e26f3f85102aca3e839c33eed1f6c480c8b349a046e16c046fb4bb07615"
	},
	{
		"id": "daa2271b77f3",
		"ts": "2026-07-06T07:09:48.241Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 444585.09,
		"hash": "daa2271b77f3a30ae3635d80c4929ecacc7fe4f44c69987f7d997e788bc758c5"
	},
	{
		"id": "af26507b143b",
		"ts": "2026-07-06T07:09:48.455Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2118628.77,
		"hash": "af26507b143be126fcfbf01e178bef332845260202186155538d2d7b341c6703"
	},
	{
		"id": "d724b29f14dd",
		"ts": "2026-07-06T07:09:48.673Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 551662.91,
		"hash": "d724b29f14ddbbeb3c82179961196716b27559412a869ea563c72e8aac1c70c5"
	},
	{
		"id": "617b32e01f95",
		"ts": "2026-07-06T07:09:48.889Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4767050.96,
		"hash": "617b32e01f95beb50a1c46a1701b7e7f7f092a39ca4d37ed215c7c3f0f620cf1"
	},
	{
		"id": "7dd006080997",
		"ts": "2026-07-06T07:09:49.104Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2019320.14,
		"hash": "7dd006080997c0435f88ce2aa67e906ff5dbf47c663b73e6e32f80f9f6b5eb11"
	},
	{
		"id": "f9a288b60691",
		"ts": "2026-07-06T07:09:49.320Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3672409.46,
		"hash": "f9a288b606914b7cc771e912c78ad2b232195d24fec0489eb13e9a17d11efad9"
	},
	{
		"id": "44b5aadf5d7e",
		"ts": "2026-07-06T07:09:49.535Z",
		"symbol": "Crash",
		"token": "0x4DD9077269Dd08899f2A9E73507125962b5BC87f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100395.94,
		"hash": "44b5aadf5d7ea93e4c99b292b35eb489f9e02896f24b25c5ba74f0e58ece0f14"
	},
	{
		"id": "71083eaa2b85",
		"ts": "2026-07-06T07:09:49.753Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7820140.15,
		"hash": "71083eaa2b85ba36580c559ab1e220f2760d242d2e1a4bfd79ba6c652abbeb10"
	},
	{
		"id": "98f74d173bf1",
		"ts": "2026-07-06T02:50:09.516Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100907833.53,
		"hash": "98f74d173bf13c71112f4c3acfb4b52487a0397f331a3574fa6f1551b30e6b5d"
	},
	{
		"id": "706bc14ce284",
		"ts": "2026-07-06T02:50:09.865Z",
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
		"liquidityUsd": 16525876.76,
		"hash": "706bc14ce2842d4b760cbd75a8abfd7b5aebbc5ee4a5b1c9cf3ab10a0cb95364"
	},
	{
		"id": "4a0cbb5e764c",
		"ts": "2026-07-06T02:50:10.234Z",
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
		"liquidityUsd": 1354541,
		"hash": "4a0cbb5e764cf2bc837559c85be2d755e7d14f9da536ea1b03737b942bc10c27"
	},
	{
		"id": "32fb1c3cd2a9",
		"ts": "2026-07-06T02:50:10.614Z",
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
		"liquidityUsd": 33336787.86,
		"hash": "32fb1c3cd2a95886e786b871bec24e143a4965c928e64147ee91b347c85749c8"
	},
	{
		"id": "3b6f38b0445c",
		"ts": "2026-07-06T02:50:10.816Z",
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
		"liquidityUsd": 4153484.56,
		"hash": "3b6f38b0445c2592decdbb1cb6673d7555377db3e78659e7bb99740c771b6923"
	},
	{
		"id": "304a92ba99ec",
		"ts": "2026-07-06T02:50:11.014Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1012905.15,
		"hash": "304a92ba99ec0e3d1afe03f74b18f5571e4a6b8fef2a14c060917add69b3ef8e"
	},
	{
		"id": "d33fe78a8e1d",
		"ts": "2026-07-06T02:50:11.209Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33336787.86,
		"hash": "d33fe78a8e1d81fb64739dbf9d8cb0152f0ff4735feb20d1183513db17a70791"
	},
	{
		"id": "ca21cdecc1be",
		"ts": "2026-07-06T02:50:11.438Z",
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
		"liquidityUsd": 2328358.5,
		"hash": "ca21cdecc1be6b3f228cf08b028d02d7c75d720ee4f7f29bce6cb85ee4bc1b70"
	},
	{
		"id": "2a94cc66e674",
		"ts": "2026-07-06T02:50:12.278Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 53,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.06,
		"flags": [
			"medium_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 40936.1,
		"hash": "2a94cc66e6749d6a2ae048a5b2b06cfa3f0a2cb13f03efac0576c5bde842d088"
	},
	{
		"id": "35fbbd39c747",
		"ts": "2026-07-06T02:50:12.471Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 678145.62,
		"hash": "35fbbd39c747e757288c127b52ab26fd3d30fbe54f1a441c125a52b8fe9af603"
	},
	{
		"id": "c2a8835efe2c",
		"ts": "2026-07-06T02:50:12.645Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517201.49,
		"hash": "c2a8835efe2c3ef83f613ff6df5d70581235cf80e9099e9e360e0096c020b110"
	},
	{
		"id": "ccb91a7d3b7b",
		"ts": "2026-07-06T02:50:12.818Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 470724.05,
		"hash": "ccb91a7d3b7b6d5a0db4bcda6312f924053115939b4676999484f80f5874bf2d"
	},
	{
		"id": "029855587542",
		"ts": "2026-07-06T02:50:14.132Z",
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
		"liquidityUsd": 2162222.54,
		"hash": "0298555875429cb18d343679e234988933f59be3fe29d6b81614cb4177d996e2"
	},
	{
		"id": "51cc40a18eb8",
		"ts": "2026-07-06T02:50:14.310Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2115112.41,
		"hash": "51cc40a18eb8706c423a01fea067ed9105504e5163eaf213e0ed1cd849a0bad3"
	},
	{
		"id": "d9af671947c5",
		"ts": "2026-07-06T02:50:14.516Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4825866.77,
		"hash": "d9af671947c59503791093d53cbe50d7f9a0374435cfc43dacb6e03223683c77"
	},
	{
		"id": "6bb9b984b2ab",
		"ts": "2026-07-06T02:50:14.694Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3482018.21,
		"hash": "6bb9b984b2ab8270aeb1eb0f226e19b016d0f4c58771993ed856e63ca7a0888f"
	},
	{
		"id": "7a8442c29661",
		"ts": "2026-07-06T02:50:15.322Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 552529.86,
		"hash": "7a8442c29661c0076e59944c8055d4bb180e39b8d51076e1840d5c2be80c015e"
	},
	{
		"id": "9eb6a1af0653",
		"ts": "2026-07-06T02:50:15.502Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7920397.4,
		"hash": "9eb6a1af0653ed6057ce41bcc0d5587d40affcbdf32d69d7f5cb43abbad1599c"
	},
	{
		"id": "bfd12fd967d2",
		"ts": "2026-07-05T23:08:01.823Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100987523.7,
		"hash": "bfd12fd967d26aed6f58bf3aebdd97d26d19af36ec1647d73003e48f2a2c2463"
	},
	{
		"id": "123ac6f0f827",
		"ts": "2026-07-05T23:08:02.075Z",
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
		"liquidityUsd": 16491952.56,
		"hash": "123ac6f0f827104ddb9262ed377216a4a0151b99d0ba5db20c8143ab45e971bf"
	},
	{
		"id": "b65ad304195f",
		"ts": "2026-07-05T23:08:02.410Z",
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
		"liquidityUsd": 1354436.14,
		"hash": "b65ad304195facefc84630c3a8515e27cc2e109d44e793963a06a4fccfc094ee"
	},
	{
		"id": "493c947cd929",
		"ts": "2026-07-05T23:08:02.657Z",
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
		"liquidityUsd": 33259191.89,
		"hash": "493c947cd92994a2d9f309fcdda391ecf25f895aeb45abde9b9b7fdc4ebbcf86"
	},
	{
		"id": "7c56bfe8ad3f",
		"ts": "2026-07-05T23:08:03.149Z",
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
		"liquidityUsd": 4181439.72,
		"hash": "7c56bfe8ad3fb2f01becd839134b495040b97fda1527e408ce1045a5746d5524"
	},
	{
		"id": "90abbe25fd1a",
		"ts": "2026-07-05T23:08:03.421Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1012898.77,
		"hash": "90abbe25fd1a4604e29499287d8b388ef542261116bf940dc2f12740c12e60ea"
	},
	{
		"id": "8ce413363bca",
		"ts": "2026-07-05T23:08:03.775Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33259191.89,
		"hash": "8ce413363bcacc9b26cb7b2b43b045c6efcdaf01e1c9cd683549fe11706b6bdc"
	},
	{
		"id": "0af37a53ff70",
		"ts": "2026-07-05T23:08:04.052Z",
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
		"liquidityUsd": 2381636.65,
		"hash": "0af37a53ff70a09c9a23476ae794bbe7a730bfe643247c1ce4f0371d37b2f159"
	},
	{
		"id": "75228b446f69",
		"ts": "2026-07-05T23:08:04.413Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 50938.92,
		"hash": "75228b446f69fb1358a84ca5855cad0f9a2460916d9bd6a90c72bef6f48d9d94"
	},
	{
		"id": "169617558002",
		"ts": "2026-07-05T23:08:04.691Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 692559.69,
		"hash": "16961755800202bd276bc74db76500135752a195a0634c38213f16dd6f670a45"
	},
	{
		"id": "24c65a79db15",
		"ts": "2026-07-05T23:08:05.614Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517433.38,
		"hash": "24c65a79db153da42a8d11754fb14cf124a0a00b27b17e551ee7bf361b22603a"
	},
	{
		"id": "820d35088077",
		"ts": "2026-07-05T23:08:05.843Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 425091.53,
		"hash": "820d35088077ca5ed4edb23352f4b635b769165073f822bac382594840b2b79e"
	},
	{
		"id": "9ef3a6bd3642",
		"ts": "2026-07-05T23:08:06.078Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3575886.95,
		"hash": "9ef3a6bd3642e78d9ee81b35f7aa5506408f35b65dc6e8b983cc637926f5e788"
	},
	{
		"id": "4d5353d8cd02",
		"ts": "2026-07-05T23:08:06.306Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7972175.25,
		"hash": "4d5353d8cd0233808b3783798cecfca6dde8194eee8bf0c7cbedef7fd5a855f9"
	},
	{
		"id": "fa8637f7b288",
		"ts": "2026-07-05T23:08:06.535Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4847289.62,
		"hash": "fa8637f7b288bbd3f014188da1630c7a3a234e4bc914af6ca164d6bd2ec6233b"
	},
	{
		"id": "265582f49a3a",
		"ts": "2026-07-05T23:08:07.246Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2061171.42,
		"hash": "265582f49a3a3fe8a9d86a18c0abaf69bb7796dd797dea1a8076aeed069acacc"
	},
	{
		"id": "c9c6a29b2800",
		"ts": "2026-07-05T23:08:07.478Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2126401.2,
		"hash": "c9c6a29b28003ec484634fa7b15a81480c853f2174379f612693096ff69f5133"
	},
	{
		"id": "f362c2fec892",
		"ts": "2026-07-05T23:08:07.707Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 540351.32,
		"hash": "f362c2fec892d76dbb6217cdc88c35d7316ff3bae6dcbf9b4c96cf28476a8658"
	},
	{
		"id": "e1fe2ab05003",
		"ts": "2026-07-05T21:59:11.613Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100875415.19,
		"hash": "e1fe2ab05003886bb23f2fa1271238e948df403a7275a38f7e04235be2310cbb"
	},
	{
		"id": "551fe6a31428",
		"ts": "2026-07-05T21:59:12.207Z",
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
		"liquidityUsd": 15875428.13,
		"hash": "551fe6a31428542cb16cf84c546119f790fd70834160f76e394617d629355de1"
	},
	{
		"id": "1dea2c0d1c4e",
		"ts": "2026-07-05T21:59:12.474Z",
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
		"liquidityUsd": 1351030.63,
		"hash": "1dea2c0d1c4e47f0d4d615dca23cc68239b928a90c64e037f2d9049f70e7615e"
	},
	{
		"id": "06b8ef33317d",
		"ts": "2026-07-05T21:59:12.837Z",
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
		"liquidityUsd": 33139220.05,
		"hash": "06b8ef33317dd4af4413c43389fcacb89cf1a6432f12db2befe352254ec7fc3a"
	},
	{
		"id": "412d776018f1",
		"ts": "2026-07-05T21:59:13.475Z",
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
		"liquidityUsd": 4187594.01,
		"hash": "412d776018f12f849381d94fe4f93e5579ae7d6ea6f92e6387b995f07c9f51d5"
	},
	{
		"id": "803dd2d5d916",
		"ts": "2026-07-05T21:59:13.917Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1003977.66,
		"hash": "803dd2d5d916dc57d15ac3b6f9f6ec4eb37cb56608a7043cd59c3b001fc45c2b"
	},
	{
		"id": "8282540afdcc",
		"ts": "2026-07-05T21:59:14.227Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33139220.05,
		"hash": "8282540afdcc6a92e3526db154a8c8c235f28007baabe25fd51ff7f6bf570b3f"
	},
	{
		"id": "f02f86cca728",
		"ts": "2026-07-05T21:59:14.484Z",
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
		"liquidityUsd": 2369750.93,
		"hash": "f02f86cca728e4741fb2086d863894165bcf67f816f16918db91312d7f414017"
	},
	{
		"id": "d2477b3adccd",
		"ts": "2026-07-05T21:59:14.730Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 61337.06,
		"hash": "d2477b3adccdac8dd788d542b6cf4dabaf766b265d77fbf26d181c602be8b8bd"
	},
	{
		"id": "62683619d103",
		"ts": "2026-07-05T21:59:14.997Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 711077.84,
		"hash": "62683619d1037dfde1f61865435fc3ba8d12b0134489103ea83d3ba72c50cc39"
	},
	{
		"id": "54849db79137",
		"ts": "2026-07-05T21:59:15.238Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517399.6,
		"hash": "54849db79137c40dc6b6d3a2df3f9b38dcd31dfa7ca3aac2e9bb8c9f8461752b"
	},
	{
		"id": "b0d853b1797d",
		"ts": "2026-07-05T21:59:15.470Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 418138.47,
		"hash": "b0d853b1797d5f455d4d63ef7a36ec9fcf0d9d27ec1f766fda41db0cbc6c6ceb"
	},
	{
		"id": "971ea1908eb7",
		"ts": "2026-07-05T21:59:15.765Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7961806.81,
		"hash": "971ea1908eb787567883bb617e815922ea90fbc669a7f9db595ce4c56086aa28"
	},
	{
		"id": "c70f67675e44",
		"ts": "2026-07-05T21:59:16.650Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3749990.72,
		"hash": "c70f67675e449343af5e235aa6e99dbd80f68788a262c316ddd8e987d8ceb24d"
	},
	{
		"id": "48d14f5f69a9",
		"ts": "2026-07-05T21:59:16.890Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579203.45,
		"hash": "48d14f5f69a91d2170a8e54e67143b1a19923e1bad9d3c86e93fb746dcaae912"
	},
	{
		"id": "640ad95dc5b6",
		"ts": "2026-07-05T21:59:17.129Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4804819.82,
		"hash": "640ad95dc5b618f578fd44d05635b43674940cb344878a5f34cbc52de0dc7367"
	},
	{
		"id": "ea25acf5ea28",
		"ts": "2026-07-05T21:59:17.364Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2065135.13,
		"hash": "ea25acf5ea28f97aebeb1778262ad3c81aae29b24e0df8e0626194d0660774ed"
	},
	{
		"id": "1755526c97e4",
		"ts": "2026-07-05T21:59:17.595Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775757.81,
		"hash": "1755526c97e427d6cc5066791b88be897461e3989a055db76dba607e9c8690ab"
	},
	{
		"id": "642b04234085",
		"ts": "2026-07-05T20:55:42.222Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100784617.48,
		"hash": "642b04234085d6725e7d7e23e16f8810f75bf6f26642484d6f0197b9acf5b7cf"
	},
	{
		"id": "ee0329b13043",
		"ts": "2026-07-05T20:55:42.473Z",
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
		"liquidityUsd": 16286013.83,
		"hash": "ee0329b13043355a19e613f771b9d4b49b79888638c43d09da74277149f10dba"
	},
	{
		"id": "06b36aff9848",
		"ts": "2026-07-05T20:55:42.720Z",
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
		"liquidityUsd": 1342055.14,
		"hash": "06b36aff9848efdc270d530570aa6c231bee612ce202e4e91a8b21e3c9db50f6"
	},
	{
		"id": "20641c4de85f",
		"ts": "2026-07-05T20:55:42.961Z",
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
		"liquidityUsd": 33003278.6,
		"hash": "20641c4de85f05345473d354238df36dd1b6fc8d280f1f5693d3d91c682750fc"
	},
	{
		"id": "9412b0bf4626",
		"ts": "2026-07-05T20:55:43.212Z",
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
		"liquidityUsd": 4159015.14,
		"hash": "9412b0bf4626e5467cda528bfb354aebb9ac6f1a0e3c0457629765dce95ab9e7"
	},
	{
		"id": "247bfd2bdad7",
		"ts": "2026-07-05T20:55:43.456Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1004002.36,
		"hash": "247bfd2bdad771889718d981f135381581ec4f1a1c6468c5cb9420304588e728"
	},
	{
		"id": "fe0c6867dfdf",
		"ts": "2026-07-05T20:55:43.699Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33003278.6,
		"hash": "fe0c6867dfdfc7df075e41c8e129a76fb436bbe2e48401f6190dae07449f48ea"
	},
	{
		"id": "cace9949c6ed",
		"ts": "2026-07-05T20:55:43.942Z",
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
		"liquidityUsd": 2401682.05,
		"hash": "cace9949c6ed863741ac86e608e4becfc903f3559323f24023965f697fad4f0a"
	},
	{
		"id": "cb2540b029d1",
		"ts": "2026-07-05T20:55:44.207Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 53,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.06,
		"flags": [
			"medium_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 38336.64,
		"hash": "cb2540b029d1876622e92c3d2230d8987ea7d01e5eb24cd99d3a13f5cc4da17a"
	},
	{
		"id": "968ee7be2f5a",
		"ts": "2026-07-05T20:55:44.454Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 694511.92,
		"hash": "968ee7be2f5a280b88a4254e41a53d948e7dbb1b6ad28cb4e4e1f3f899ad24f7"
	},
	{
		"id": "22d8bf3434b6",
		"ts": "2026-07-05T20:55:44.682Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517294.4,
		"hash": "22d8bf3434b615424b2becc345281bdef6752d8ad05b986d49536f6513500402"
	},
	{
		"id": "95a21d2dde5f",
		"ts": "2026-07-05T20:55:44.909Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3720942.1,
		"hash": "95a21d2dde5ff5d4b5a730f4450a66c3cf61c891d368e1f2248af8c98b5fb2c1"
	},
	{
		"id": "3c50e80d96d3",
		"ts": "2026-07-05T20:55:45.138Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7899397.73,
		"hash": "3c50e80d96d34ffa611e0a99f6ab3fd3897f6effb6832029041dd31796b0c02b"
	},
	{
		"id": "69e192882d51",
		"ts": "2026-07-05T20:55:45.366Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 411416.37,
		"hash": "69e192882d5122816fd4f98c9ae37a5221e530b877abbab4a3156b1abea9d1f0"
	},
	{
		"id": "9e3cdc85bfd3",
		"ts": "2026-07-05T20:55:45.592Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4788002.15,
		"hash": "9e3cdc85bfd33187b0d20d8655f1e6fe61cac5b3e75b9ac1b466849f5658deb0"
	},
	{
		"id": "c0c652080ae7",
		"ts": "2026-07-05T20:55:45.822Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 578656.2,
		"hash": "c0c652080ae7e07adf1758b181507cd94b537126187381bde71cb91bff365509"
	},
	{
		"id": "713c78da8f43",
		"ts": "2026-07-05T20:55:46.048Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1995469.26,
		"hash": "713c78da8f4320b68aa3f6fe16063f3574d17a89fdbb3de42ec4045b81794578"
	},
	{
		"id": "0fe2fdda68a4",
		"ts": "2026-07-05T20:55:46.274Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775757.81,
		"hash": "0fe2fdda68a4aa46ecf25c54f65dcdb8d91d68c10355373df387e24ea1b9f2af"
	},
	{
		"id": "97fae90c4978",
		"ts": "2026-07-05T19:37:34.651Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100780994.93,
		"hash": "97fae90c4978bad8e74a8db61e4362b21bd663232a855ed6ea11d7ec7b43587d"
	},
	{
		"id": "99696f9024f8",
		"ts": "2026-07-05T19:37:35.003Z",
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
		"liquidityUsd": 16279460.57,
		"hash": "99696f9024f8388ff56ce405de0e1bb1a267b2de49d6007c78184cc516789e76"
	},
	{
		"id": "480fd5d8f566",
		"ts": "2026-07-05T19:37:35.191Z",
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
		"liquidityUsd": 1342310.57,
		"hash": "480fd5d8f56642dfd5e9cbe847e6f8c299ff564a4520c0b8d55287cf84b832c3"
	},
	{
		"id": "82bfa6ca9d6d",
		"ts": "2026-07-05T19:37:35.385Z",
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
		"liquidityUsd": 32990683.52,
		"hash": "82bfa6ca9d6d9244bb21b05cf8df83b352c74481fc12a84fc7ebbf6c87aeb3e3"
	},
	{
		"id": "486fc68e7d96",
		"ts": "2026-07-05T19:37:35.579Z",
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
		"liquidityUsd": 4168579.53,
		"hash": "486fc68e7d96b04b786b9a609ed86250ff59caf4b966d6d030d2dfeed3f09fc0"
	},
	{
		"id": "6829d10a781e",
		"ts": "2026-07-05T19:37:35.772Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1003994.85,
		"hash": "6829d10a781ea609451c62587805c690af1372e7be5a9125d4b1d6fcc3882aae"
	},
	{
		"id": "061ffceeaa8d",
		"ts": "2026-07-05T19:37:35.961Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32990683.52,
		"hash": "061ffceeaa8d129db7564307cc9e3ee6bed1d002f1bee6a34868c8f01a381be4"
	},
	{
		"id": "fda575cc7428",
		"ts": "2026-07-05T19:37:36.154Z",
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
		"liquidityUsd": 2406993.5,
		"hash": "fda575cc742829279d70a70fb0b3d754894e17b842497f04b6f683c4b517757a"
	},
	{
		"id": "92268271a18c",
		"ts": "2026-07-05T19:37:36.354Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 53,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.06,
		"flags": [
			"medium_liquidity",
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 38521.16,
		"hash": "92268271a18c8e4a3d21566000865c578674360f32aa3fc1efabffd6af1a391e"
	},
	{
		"id": "0d5a365023fe",
		"ts": "2026-07-05T19:37:36.544Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 715399.96,
		"hash": "0d5a365023feb684dc38827fa94e5d5e8be89900717cc6a1cd2272bbdab774ea"
	},
	{
		"id": "f8d83dbc914a",
		"ts": "2026-07-05T19:37:36.725Z",
		"symbol": "OpenAI",
		"token": "0x006b340bEE30F8425cf65f064712F57B2BC0bB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 517291.06,
		"hash": "f8d83dbc914abbc86b9999df9c518b4249f8fea621d6eeaeb6fff1ed9d817450"
	},
	{
		"id": "f5d721eff9d0",
		"ts": "2026-07-05T19:37:36.900Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3779406.79,
		"hash": "f5d721eff9d0ef5ec34f4e8288ff6fd67b265cb72eefa28207bbdf75f6905a0d"
	},
	{
		"id": "c7603bce5dcb",
		"ts": "2026-07-05T19:37:37.205Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8002107.02,
		"hash": "c7603bce5dcb322721dee42fecde7a1774c07aae3c8eee5524590064b275093f"
	},
	{
		"id": "52a99206f299",
		"ts": "2026-07-05T19:37:37.382Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 579048.15,
		"hash": "52a99206f2999dfbb9e836bddfcff5ac18c6463c560cd8e2f363927271cc3cda"
	},
	{
		"id": "bb41d7fe508e",
		"ts": "2026-07-05T19:37:37.570Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4790554.56,
		"hash": "bb41d7fe508e3c9edb537b2bc48142e52290e88519d20c5fdb19de38e1c54ea3"
	},
	{
		"id": "6e3615856f6e",
		"ts": "2026-07-05T19:37:37.744Z",
		"symbol": "Claude",
		"token": "0x7F42440C1E87187F523aE48980E7386508804B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 775757.81,
		"hash": "6e3615856f6e8aee5bb6012f6fb2678540b958d2af657f38e740fc32dbd42eb4"
	},
	{
		"id": "db3f3dda20b2",
		"ts": "2026-07-05T19:37:37.925Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 425085.15,
		"hash": "db3f3dda20b259a31041652037c6c74e15733733a7e72bb0c78b361d4e449254"
	},
	{
		"id": "3a392bbad964",
		"ts": "2026-07-05T19:37:38.104Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1963079.39,
		"hash": "3a392bbad96478faff76f1a8acd3266dda8abc20caffb9f83c43d34208c909b5"
	},
	{
		"id": "4248fd54650e",
		"ts": "2026-07-05T17:59:44.969Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 100779003.97,
		"hash": "4248fd54650e680e9cda985aa6f7cbae5d65365548d6bf825c39a4a10fd1d9b6"
	},
	{
		"id": "08a7c9fd16f2",
		"ts": "2026-07-05T17:59:45.351Z",
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
		"liquidityUsd": 15458388.54,
		"hash": "08a7c9fd16f2347eab616b5ecca63f04c728021741eb9794a859d7269641a41e"
	}
]
