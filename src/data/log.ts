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
	"updatedAt": "2026-09-26T21:47:12.912Z",
	"tokensScored": 18701,
	"verdictsIssued": 18701,
	"safe": 15895,
	"risky": 1349,
	"likelyRug": 1457,
	"ticks": 1064
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "e8419aa101e4",
		"ts": "2026-09-26T21:47:08.101Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155922930.04,
		"hash": "e8419aa101e4d9fa020b657b84e93aaed3a53e502a70bdaf6e8f1153ba5cbf76"
	},
	{
		"id": "b09720c2c55f",
		"ts": "2026-09-26T21:47:08.556Z",
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
		"liquidityUsd": 16546477.17,
		"hash": "b09720c2c55fd0daa23e8fc21d1877ee5cea8a3a2443990bdcbfd90519066317"
	},
	{
		"id": "e6ad456e75b4",
		"ts": "2026-09-26T21:47:08.822Z",
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
		"liquidityUsd": 887053.3,
		"hash": "e6ad456e75b4a56695ccc2008a448bcdcc71a88fdf960114edda9130fc67a7f2"
	},
	{
		"id": "4aaa2662e568",
		"ts": "2026-09-26T21:47:09.293Z",
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
		"liquidityUsd": 42599081.25,
		"hash": "4aaa2662e568bc61811278ee08faf80d531797006e2da8c26d464e48dc5af68c"
	},
	{
		"id": "b9481927cce9",
		"ts": "2026-09-26T21:47:09.538Z",
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
		"liquidityUsd": 4548398.82,
		"hash": "b9481927cce9f8450c0a310d0b4e44dffe3b1d3c968ef7e6a5673dc2a79317ea"
	},
	{
		"id": "c64c17f8b59a",
		"ts": "2026-09-26T21:47:09.795Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1326850.77,
		"hash": "c64c17f8b59a38fa0fa40566363cd1b16ea406cbc2361fd13b28d577e5e30008"
	},
	{
		"id": "ecd8a08e08d5",
		"ts": "2026-09-26T21:47:10.051Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42599081.25,
		"hash": "ecd8a08e08d5cb02a2799f7ebf5bb3162d7c56dec87284216cea9cd2d7a818d1"
	},
	{
		"id": "f25c4554573e",
		"ts": "2026-09-26T21:47:10.306Z",
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
		"liquidityUsd": 2420433.86,
		"hash": "f25c4554573e78db4f82b8af669b1e92bfecfb404621ebbb8987c16676b8d5a8"
	},
	{
		"id": "ddcac3dd42f2",
		"ts": "2026-09-26T21:47:10.558Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 453883.31,
		"hash": "ddcac3dd42f21dba44774ee1a9bac74bdfd93a50968a4a7e89e72196d6be7dd1"
	},
	{
		"id": "61afba5e8282",
		"ts": "2026-09-26T21:47:10.822Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1658491.15,
		"hash": "61afba5e82826965110e347a81c4d8efaef336c2d938fda333b5f7d72ab0289b"
	},
	{
		"id": "567818c730db",
		"ts": "2026-09-26T21:47:11.050Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2944722.46,
		"hash": "567818c730dbf94226539933f7984d6f36b63a5a96abda83efbf581515227c3d"
	},
	{
		"id": "3d43872aae84",
		"ts": "2026-09-26T21:47:11.279Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3848788.73,
		"hash": "3d43872aae84f1ff8af5e4df944ad216d81c331b0ee2e604fedff5f6a3658eb4"
	},
	{
		"id": "44b61851a919",
		"ts": "2026-09-26T21:47:11.513Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1589659.9,
		"hash": "44b61851a91939f024a0da3e6010ccc40fc229895ef7b118490812ca20c618b6"
	},
	{
		"id": "ba230e0a1c51",
		"ts": "2026-09-26T21:47:11.750Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 2490869.48,
		"hash": "ba230e0a1c51cd1b23ade23b6c1a174ef136df0fdd667bc5570c4c528eca413f"
	},
	{
		"id": "1b8ae4ecb916",
		"ts": "2026-09-26T21:47:11.977Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18930824.19,
		"hash": "1b8ae4ecb916a2180235f9f13bb85e909fc5f6937cfd25b2e686390de724b4ff"
	},
	{
		"id": "4169c89b3a39",
		"ts": "2026-09-26T21:47:12.213Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 747953.8,
		"hash": "4169c89b3a391102c3cc48833a90afbfd33b15729ef0c67fa84f33c7dc96b194"
	},
	{
		"id": "38e51bfc6807",
		"ts": "2026-09-26T21:47:12.443Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 696653.57,
		"hash": "38e51bfc68078d3cea5c8ec324094f8088ebe9f8d21d2b3512cb3128f8a70438"
	},
	{
		"id": "be861ade80b3",
		"ts": "2026-09-26T21:47:12.673Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 793319.27,
		"hash": "be861ade80b3f27cb606e2e09b311b3d48e466b669f4c2064a649269041fd074"
	},
	{
		"id": "aa11681e6e75",
		"ts": "2026-09-26T21:47:12.911Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1182762.92,
		"hash": "aa11681e6e75c6163553cafd1304c0b9f8257f4d8cbae38d69c32158c3670991"
	},
	{
		"id": "dd71d121d162",
		"ts": "2026-09-26T18:16:07.392Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155993818.54,
		"hash": "dd71d121d16284a3c865f62c753a641bbf2683d83cdea9f213883c5c2c827ab6"
	},
	{
		"id": "66454aa40c0d",
		"ts": "2026-09-26T18:16:07.658Z",
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
		"liquidityUsd": 17462294.43,
		"hash": "66454aa40c0de0e00c40181fa3e6093884b494c6e5e68dfb9fb34e4bf667ddcb"
	},
	{
		"id": "42dd2c0bbab8",
		"ts": "2026-09-26T18:16:07.908Z",
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
		"liquidityUsd": 885670.27,
		"hash": "42dd2c0bbab836b07bd48fa78bea8675d149523ca33ffe430e69d5887eb00bf4"
	},
	{
		"id": "cd947f9f7e3f",
		"ts": "2026-09-26T18:16:08.172Z",
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
		"liquidityUsd": 42902425.39,
		"hash": "cd947f9f7e3f7668263308fb68834803841475108508e73c04a07a98f10e7425"
	},
	{
		"id": "d854a7fc4f40",
		"ts": "2026-09-26T18:16:08.423Z",
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
		"liquidityUsd": 4611153.78,
		"hash": "d854a7fc4f406796556595e704dd36e229ae0eaee1034ffcbac772340a27b8de"
	},
	{
		"id": "fc554c224051",
		"ts": "2026-09-26T18:16:08.673Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1327350.09,
		"hash": "fc554c224051481d517ffe8e921a5e74c62621cd4137b16e4e0ab719f7f20be3"
	},
	{
		"id": "3be7ae9d8e33",
		"ts": "2026-09-26T18:16:08.918Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42902425.39,
		"hash": "3be7ae9d8e33027f0fd7bf3758be0ed2babc45f0ff49741dc2b412272ce60567"
	},
	{
		"id": "6df5dadd0938",
		"ts": "2026-09-26T18:16:09.171Z",
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
		"liquidityUsd": 2422737.48,
		"hash": "6df5dadd0938a017ee5a6ddca4fef9ffcb6ec4a5a48d6eda6f88871f8e861392"
	},
	{
		"id": "09affb2b8ac7",
		"ts": "2026-09-26T18:16:09.418Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 524292.51,
		"hash": "09affb2b8ac704481916b40f5b1fd1e0c3234defc1e3f7594e5fc663c821916f"
	},
	{
		"id": "9d27bbf8760b",
		"ts": "2026-09-26T18:16:09.673Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1662868,
		"hash": "9d27bbf8760b25bda03d17c510b70fce9ffd8705a142bab7e3082c2890da8852"
	},
	{
		"id": "875cd41e593b",
		"ts": "2026-09-26T18:16:09.909Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2948870.48,
		"hash": "875cd41e593bf49d8a1d9ed10dc62ddb44c4ef9c0f83bbc4ed759d93d8da14e8"
	},
	{
		"id": "75a8840e012f",
		"ts": "2026-09-26T18:16:10.137Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1589711.73,
		"hash": "75a8840e012fb022da22483fd20343c8adc0a8802f7c37068e10ecce8c6747ab"
	},
	{
		"id": "b1e5f02e9957",
		"ts": "2026-09-26T18:16:10.373Z",
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
		"liquidityUsd": 3842240.81,
		"hash": "b1e5f02e99579228fe210c599c87c2475ad1cc2581dcf62928f47c7c63dc5aab"
	},
	{
		"id": "a05887852b36",
		"ts": "2026-09-26T18:16:10.613Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 81,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.62,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2490869.48,
		"hash": "a05887852b36b7851a2e5300bf9eb23656f2414721875851319d5d21d23c2d9a"
	},
	{
		"id": "55411b09c43d",
		"ts": "2026-09-26T18:16:10.848Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3472028.27,
		"hash": "55411b09c43d83acb3526200e28819b307a1a820362a9a4b062bedef64f619fa"
	},
	{
		"id": "125128967538",
		"ts": "2026-09-26T18:16:11.081Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18816950.48,
		"hash": "125128967538e74d518f056943af83b1d0e2a7e3fa10898f99914111e2262d8d"
	},
	{
		"id": "6e79f0d95feb",
		"ts": "2026-09-26T18:16:11.308Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 748834.21,
		"hash": "6e79f0d95feb8e38a21a33076b5cd5d3535af627c0c711731e1d4eb01caba289"
	},
	{
		"id": "eefdb666b097",
		"ts": "2026-09-26T18:16:11.542Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 729650.48,
		"hash": "eefdb666b09793c905395a6cee6ba9bb714333e7eb0e9370e1b2a54cb3e08e1c"
	},
	{
		"id": "ea58f3297041",
		"ts": "2026-09-26T18:16:11.884Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1193668.41,
		"hash": "ea58f3297041d82f8b8730776d979276d7bca1406893c07d1b5b151ed2c9b88b"
	},
	{
		"id": "f9847c046615",
		"ts": "2026-09-26T14:02:42.652Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156077545.24,
		"hash": "f9847c046615cda61104444bf93ba0d8b78df60715a8f2b5be1d4e4bd1f19243"
	},
	{
		"id": "6fe4c65bd3c4",
		"ts": "2026-09-26T14:02:43.308Z",
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
		"liquidityUsd": 17949771.72,
		"hash": "6fe4c65bd3c4136cf5bff60cb15e498f2bd530e20b5d2da54a82c39522ccd1e0"
	},
	{
		"id": "dd8d66a8609f",
		"ts": "2026-09-26T14:02:43.559Z",
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
		"liquidityUsd": 870897.7,
		"hash": "dd8d66a8609f9cdd3d3d3f51fecc2c4cc1650ab23042d9de9046820146ff81d0"
	},
	{
		"id": "24c86dd5a0a8",
		"ts": "2026-09-26T14:02:43.814Z",
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
		"liquidityUsd": 39287656.13,
		"hash": "24c86dd5a0a89e1ccd9feff56a70e31a67740f01072098c80c8c8ab9a65eaefe"
	},
	{
		"id": "b473cbd26c05",
		"ts": "2026-09-26T14:02:44.263Z",
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
		"liquidityUsd": 4547405.51,
		"hash": "b473cbd26c05689f664a384784e98b1811c4c8e3368b654749240da928722b68"
	},
	{
		"id": "4fb221cdbbf1",
		"ts": "2026-09-26T14:02:44.534Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1338180.1,
		"hash": "4fb221cdbbf122818eb4c02e1831667c5da98bd43d077a1d9a4393c6d39fcaa6"
	},
	{
		"id": "558d243ddeef",
		"ts": "2026-09-26T14:02:44.787Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 39287656.13,
		"hash": "558d243ddeef53a49d69e57a3da691a8e7f40c46067999bcbd86c48173d7c50a"
	},
	{
		"id": "12d8a7cb909b",
		"ts": "2026-09-26T14:02:45.228Z",
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
		"liquidityUsd": 1326651.17,
		"hash": "12d8a7cb909bc1dde8aa1f85739140c2f8d51f2b524be1d779169d0a2be81e3b"
	},
	{
		"id": "1baab975ad95",
		"ts": "2026-09-26T14:02:45.506Z",
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
		"liquidityUsd": 1579430.5,
		"hash": "1baab975ad9508c9a154219801568e8b15fa42608030dc95e9ccfc97a49bec1e"
	},
	{
		"id": "9d02a9c03db8",
		"ts": "2026-09-26T14:02:45.751Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1659831.24,
		"hash": "9d02a9c03db8c60dca29b5f167ef887be3852f4ed86a01cc68450ec3ac1050ff"
	},
	{
		"id": "305d00cdcbaa",
		"ts": "2026-09-26T14:02:45.970Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2908347.07,
		"hash": "305d00cdcbaaca95570ca1b43e9253f260e74210c92becc47c7372f107c6f44d"
	},
	{
		"id": "963832bc1ae1",
		"ts": "2026-09-26T14:02:46.193Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3753011.56,
		"hash": "963832bc1ae128e7f16b1a5536f3fd9e9f6412fbdecc8228ab634e9711eac444"
	},
	{
		"id": "6f7dec526295",
		"ts": "2026-09-26T14:02:46.415Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18848847.72,
		"hash": "6f7dec52629574739fe4860f40eac49d5f02376f960fdacd9fc469c40f09086d"
	},
	{
		"id": "2eed546ac4aa",
		"ts": "2026-09-26T14:02:46.636Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1170131.94,
		"hash": "2eed546ac4aa67476545b211032f41aa6431914756736a83064363b7140975d5"
	},
	{
		"id": "c07f1f34b773",
		"ts": "2026-09-26T14:02:46.866Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3432101.99,
		"hash": "c07f1f34b773bfb98de2592a878b517dedbb073f59ee6214bcddf63cca39c22b"
	},
	{
		"id": "6517d442e339",
		"ts": "2026-09-26T14:02:47.086Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 2490869.48,
		"hash": "6517d442e339b0c5717995b69d6b94fbe836d1145436c358aceb5ce47f5874b9"
	},
	{
		"id": "8dbfcd73264d",
		"ts": "2026-09-26T14:02:47.314Z",
		"symbol": "AVNT",
		"token": "0x696F9436B67233384889472Cd7cD58A6fB5DF4f1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 754266.96,
		"hash": "8dbfcd73264d559b88e9601a99c6454beae7e7dab1e80e3fcfe715fc6c5d11e3"
	},
	{
		"id": "0bbcf4d4324e",
		"ts": "2026-09-26T14:02:47.532Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 729828.46,
		"hash": "0bbcf4d4324ec181de238bbd9847c9878c7d79b0ea4e46f79aac13b59e0077b1"
	},
	{
		"id": "86f12395ffa8",
		"ts": "2026-09-26T14:02:47.755Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 477416.16,
		"hash": "86f12395ffa8da51d34bdd2be64092647c6590671005e81c58ac12c3e839a69f"
	},
	{
		"id": "b3afdd1fa05e",
		"ts": "2026-09-26T09:02:43.796Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156041095.75,
		"hash": "b3afdd1fa05ead0fba2b03c3fd9f67c46172e233ffcf61c8ecd4c5b94e4ac5a0"
	},
	{
		"id": "89c57217bb3a",
		"ts": "2026-09-26T09:02:44.049Z",
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
		"liquidityUsd": 14134612.54,
		"hash": "89c57217bb3a9232ca2796265f709ffa6c2a7ecfedd8b7c9e9650b26309fe50a"
	},
	{
		"id": "ebf0268370b4",
		"ts": "2026-09-26T09:02:44.302Z",
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
		"liquidityUsd": 871262.69,
		"hash": "ebf0268370b4dddc06d960ae4ede0df4c3b5dfdb3f4736a41608f9007904c0ce"
	},
	{
		"id": "27129df5e3c8",
		"ts": "2026-09-26T09:02:44.554Z",
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
		"liquidityUsd": 39474360.77,
		"hash": "27129df5e3c839a310f0f1eb1a5f8cbde883993550a8045e8b3db8efbe8fbc0e"
	},
	{
		"id": "3f8a4f33ccf0",
		"ts": "2026-09-26T09:02:44.799Z",
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
		"liquidityUsd": 4539877.98,
		"hash": "3f8a4f33ccf0f09acd2394853ea2220e6af9c1ff2099e06e9962d21fba195e39"
	},
	{
		"id": "9a06aef6578b",
		"ts": "2026-09-26T09:02:45.042Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1308150.6,
		"hash": "9a06aef6578b2534de9eeb9eedcfd7409f98ad246d3f4555da8b03a7e7ae3479"
	},
	{
		"id": "e320366a0ca5",
		"ts": "2026-09-26T09:02:45.289Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 39474360.77,
		"hash": "e320366a0ca56cad4d4d803dd363ec601243567a9ab3718092da71c7cb75488c"
	},
	{
		"id": "f137a50a2ff5",
		"ts": "2026-09-26T09:02:45.548Z",
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
		"liquidityUsd": 1190523.22,
		"hash": "f137a50a2ff5e64365f365fb873b1ef0733c5ae5d0c7ed06fb06c89f5227f0df"
	},
	{
		"id": "a93ca04b8815",
		"ts": "2026-09-26T09:02:45.802Z",
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
		"liquidityUsd": 1579330.48,
		"hash": "a93ca04b88153b424e274ba7fb63fc39cc4ddd293e6362378cc6cdcbdaf51ce5"
	},
	{
		"id": "6dfd70c767f0",
		"ts": "2026-09-26T09:02:46.044Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1658268.45,
		"hash": "6dfd70c767f0cffc78c3e24e51efd0ec5285fb346021237df42a94d64d81dd8c"
	},
	{
		"id": "98608a146b58",
		"ts": "2026-09-26T09:02:46.270Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2932652.64,
		"hash": "98608a146b5859ffc43e4353d6498b20dfe3673fa612fa3dc8a12b2a2db4e237"
	},
	{
		"id": "1c9f144d6524",
		"ts": "2026-09-26T09:02:46.496Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3855169.79,
		"hash": "1c9f144d6524378b45c689eee355260cce6d6df568b6b51423b9ddebacc0535b"
	},
	{
		"id": "8d81055761f2",
		"ts": "2026-09-26T09:02:46.724Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18748198.98,
		"hash": "8d81055761f2049f45674dc2cf4b8066ca005341fe00a3534e2516d6ad0ff028"
	},
	{
		"id": "6e23a6e74422",
		"ts": "2026-09-26T09:02:46.952Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 479460.03,
		"hash": "6e23a6e744221b2572fc0c53942a53ba28f242bc9b44ecd1a86abe5d45cc1b6e"
	},
	{
		"id": "73ddc9f66422",
		"ts": "2026-09-26T09:02:47.179Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 2490869.48,
		"hash": "73ddc9f6642210571f4f0cae90e7290e253552587b6bb254776b6b08dc803df1"
	},
	{
		"id": "d47d9f8b3abc",
		"ts": "2026-09-26T09:02:47.406Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 761403.31,
		"hash": "d47d9f8b3abc0a7bfa89314bbffed7850a48b213636df21190edaa34626bf51a"
	},
	{
		"id": "b0b023d59139",
		"ts": "2026-09-26T09:02:47.632Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 122573.32,
		"hash": "b0b023d59139ffb95e80f46fc54767a58643210180136a5f6214a815fe61a106"
	},
	{
		"id": "04862ce21b51",
		"ts": "2026-09-26T09:02:47.859Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3469146.66,
		"hash": "04862ce21b512d764115b0ee1cee5c692b48497cd05601ca7c59b8208447962c"
	},
	{
		"id": "2f24b115c1ab",
		"ts": "2026-09-26T09:02:48.085Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1148283.32,
		"hash": "2f24b115c1ab097529e92f704a6a354a5f2b28c40da39bd4e2b29af83e1b9232"
	},
	{
		"id": "77507d58aa3a",
		"ts": "2026-09-26T03:18:54.510Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 154222732.01,
		"hash": "77507d58aa3a5fb6e056a3014ace27910da551ae4c57928031d61e8766888a91"
	},
	{
		"id": "9ff134472edd",
		"ts": "2026-09-26T03:18:54.961Z",
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
		"liquidityUsd": 17239412.26,
		"hash": "9ff134472edd5016db7fbe4e125dfe116e36982b449a78024ff9d14994b122a6"
	},
	{
		"id": "afb256d21ae3",
		"ts": "2026-09-26T03:18:55.226Z",
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
		"liquidityUsd": 872384.22,
		"hash": "afb256d21ae330cbcfd5bee8b52df7cd610a5638bc9aefc542f4db97f58a5856"
	},
	{
		"id": "45db43cea500",
		"ts": "2026-09-26T03:18:55.470Z",
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
		"liquidityUsd": 39169047.99,
		"hash": "45db43cea5005665e71f174e218fbde2d6d747dc8ee09c4690dbc00f05ee2324"
	},
	{
		"id": "0291881a6450",
		"ts": "2026-09-26T03:18:55.719Z",
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
		"liquidityUsd": 4548715.12,
		"hash": "0291881a64502e4f14385839c5a3f6a02e5f9fcfed6b84b6b1e6d6f617b866d5"
	},
	{
		"id": "df8a4491f562",
		"ts": "2026-09-26T03:18:55.977Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1309088.41,
		"hash": "df8a4491f562cbc9e1597f0d900d7aa79b40d2eaaea8ce9015ef383ed52e5440"
	},
	{
		"id": "dcba0206e4ee",
		"ts": "2026-09-26T03:18:56.268Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 39169047.99,
		"hash": "dcba0206e4ee0dc5a3086530fc5c27c6ef37cf32689df19ef1c3e2ec63b4b771"
	},
	{
		"id": "6b36fd27b5fe",
		"ts": "2026-09-26T03:18:56.526Z",
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
		"liquidityUsd": 1130733.12,
		"hash": "6b36fd27b5fe8d873d2ea849345f24e30ced32aad27833338cbc0047de26826d"
	},
	{
		"id": "bf6daf673bdd",
		"ts": "2026-09-26T03:18:56.783Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1727348.03,
		"hash": "bf6daf673bdd77b62e62ba1f9c4e4b6b68d836b91ce7080ad471e93e68c94349"
	},
	{
		"id": "d935b74df269",
		"ts": "2026-09-26T03:18:57.252Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2934132.05,
		"hash": "d935b74df2694a4f8242a896fcce42bf42ba9fad8c4bef7d9dabda0a160ee28f"
	},
	{
		"id": "935081a29c81",
		"ts": "2026-09-26T03:18:57.488Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3797326.93,
		"hash": "935081a29c812934547ffaaefd4872e8c0f344a5158853efc40a207dd460c8da"
	},
	{
		"id": "b26fdee3344d",
		"ts": "2026-09-26T03:18:57.739Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1579921.53,
		"hash": "b26fdee3344d315e2b4fb25a569c23fe351cdeb8ecb03d1a9048ab9a2011af23"
	},
	{
		"id": "833d3961690a",
		"ts": "2026-09-26T03:18:57.985Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18974399.62,
		"hash": "833d3961690af10ca5972f3237cf7cd8aaacd31f8daa532e211033db59d9f6e4"
	},
	{
		"id": "62106fa0a65e",
		"ts": "2026-09-26T03:18:58.222Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 485806.26,
		"hash": "62106fa0a65e791726e9ca13860a0428d8cfd6c51d8dfbb3747250a1f002f0c0"
	},
	{
		"id": "8fbbf9faa18d",
		"ts": "2026-09-26T03:18:58.445Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 863069.76,
		"hash": "8fbbf9faa18d5598409ae5697a36fabcfa15b7ce8fb2a716ee0e7f0a8d7bdaca"
	},
	{
		"id": "767889823081",
		"ts": "2026-09-26T03:18:58.666Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 766800.35,
		"hash": "7678898230812b06cdf4998b2bfac07f8222d70f4ea017214eae56322b63b83c"
	},
	{
		"id": "69edb058103c",
		"ts": "2026-09-26T03:18:58.900Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1147046.31,
		"hash": "69edb058103cff5f0c1d2fbd980b92c470130074c0b7a2c5bc3477305afd5fec"
	},
	{
		"id": "e789392aa11d",
		"ts": "2026-09-26T03:18:59.124Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3466094.84,
		"hash": "e789392aa11d1c0dd02238665f33d1fdac6c2780a99e871736312cf4907cb639"
	},
	{
		"id": "e5d0dad5ee9d",
		"ts": "2026-09-26T03:18:59.354Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 2490869.48,
		"hash": "e5d0dad5ee9d8fcc6fba6a692a0dcf2450ffc1767c5631957a87cf0653cadae0"
	},
	{
		"id": "d5f8ce8cb0d1",
		"ts": "2026-09-25T23:46:26.984Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 154197278.56,
		"hash": "d5f8ce8cb0d115042d34ee031efce89e0fa6c2254186c8d1b872c0a75fc311f6"
	},
	{
		"id": "1c241db899e0",
		"ts": "2026-09-25T23:46:27.202Z",
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
		"liquidityUsd": 17271565.92,
		"hash": "1c241db899e03cc0e1a8de53df87dc21bfcac8729e3f82ca89c4d211dd3c51a5"
	},
	{
		"id": "2cf1657b5310",
		"ts": "2026-09-25T23:46:27.414Z",
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
		"liquidityUsd": 866102.38,
		"hash": "2cf1657b5310b9160c8a1701d05571dca3fed356a98867528e188eb36bf491f8"
	},
	{
		"id": "ae241dd6bbad",
		"ts": "2026-09-25T23:46:27.616Z",
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
		"liquidityUsd": 39353460.48,
		"hash": "ae241dd6bbad85768e82fdefd37b536b899a3d0e4cc7b1dc65c103caa011ad73"
	},
	{
		"id": "64428e691445",
		"ts": "2026-09-25T23:46:27.815Z",
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
		"liquidityUsd": 4573313.56,
		"hash": "64428e6914450759bf317e3a8dbaf2471a6e3f2d4283d097b7f09f23a87636dc"
	},
	{
		"id": "5391945dcb4e",
		"ts": "2026-09-25T23:46:28.019Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1307806.82,
		"hash": "5391945dcb4e97ad56f9ac11c953707ee11be4e640cd9e56d69fff3753c1126f"
	},
	{
		"id": "870a57352b2a",
		"ts": "2026-09-25T23:46:28.386Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 39353460.48,
		"hash": "870a57352b2ab99cd405c1c77ce9434904bb3c2b2e7f5e8ac31c5de6a4cbd200"
	},
	{
		"id": "534b3ba0921b",
		"ts": "2026-09-25T23:46:28.627Z",
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
		"liquidityUsd": 1293536.29,
		"hash": "534b3ba0921b3bc66c18203601ed62039e6969381b617f849e6493a886b1db9b"
	},
	{
		"id": "10df17405415",
		"ts": "2026-09-25T23:46:28.834Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2978931.97,
		"hash": "10df174054158c03687596dada818dba3a5e90528d1d975c90e7c0aee00654ba"
	},
	{
		"id": "91506d45c754",
		"ts": "2026-09-25T23:46:29.038Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3829675.78,
		"hash": "91506d45c7542f3aae6107c58af5ef6fafcadb86c5fd08e1e3af9adbad84702c"
	},
	{
		"id": "518874c6ee12",
		"ts": "2026-09-25T23:46:29.234Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1595908.45,
		"hash": "518874c6ee120ba45ed58a0479146f9f1f597855bf17d3891c41827f0e9c5b35"
	},
	{
		"id": "ffb012d1b3a1",
		"ts": "2026-09-25T23:46:29.443Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1669285.44,
		"hash": "ffb012d1b3a1a5c15b5f3c0b2d1584cb246dbcf43a7d487fd4012f364f4f9938"
	},
	{
		"id": "20103e69ffb3",
		"ts": "2026-09-25T23:46:29.629Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18912094.4,
		"hash": "20103e69ffb30773d1ff1d1c82cbdc17130d84b3470b3d8182f4221a1f61c4ca"
	},
	{
		"id": "439fee4de46f",
		"ts": "2026-09-25T23:46:29.829Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 860682.35,
		"hash": "439fee4de46f001b76e73d9100bd76a4caae68149fd1089abb5f4a22fdfe38c9"
	},
	{
		"id": "efd68ede31ec",
		"ts": "2026-09-25T23:46:30.019Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 493682.42,
		"hash": "efd68ede31ec544c2d5ac9a96524c41a5a664fc8ff46c045c53af5c931e0b71e"
	},
	{
		"id": "2b32d1af72e8",
		"ts": "2026-09-25T23:46:30.222Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1137857.13,
		"hash": "2b32d1af72e8c2566e77f0b323f708d90277f2cb630c38cb95a1474b558b3fb6"
	},
	{
		"id": "17200efeaa29",
		"ts": "2026-09-25T23:46:30.424Z",
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
		"liquidityUsd": 795790.67,
		"hash": "17200efeaa29b9f6837ef0d9a866950e5438739792264f599f896349da2dfe0b"
	},
	{
		"id": "7d94a010278e",
		"ts": "2026-09-25T23:46:30.621Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3396965.15,
		"hash": "7d94a010278ea5ddeeda3c486bd268f4739ba240db65e86065c965a39f412c8b"
	},
	{
		"id": "2fd6ebd8892c",
		"ts": "2026-09-25T23:46:30.821Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 2490869.48,
		"hash": "2fd6ebd8892c7301c34e350ecc33330e8ddda43e441119a5377bcdf4bc395405"
	},
	{
		"id": "567ee5da9b0f",
		"ts": "2026-09-25T20:12:52.397Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 154185920.93,
		"hash": "567ee5da9b0f721c9a0291bf52070c8e5cc2f016b4ad265751827198e49fef69"
	},
	{
		"id": "ed4df2aca68c",
		"ts": "2026-09-25T20:12:52.695Z",
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
		"liquidityUsd": 16340307.1,
		"hash": "ed4df2aca68cc02875249fdde4583998b31f7af2a62e020d1d093b71ce26d4ce"
	},
	{
		"id": "e2c163ff786e",
		"ts": "2026-09-25T20:12:52.988Z",
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
		"liquidityUsd": 868467.09,
		"hash": "e2c163ff786e66d54983f525108ecca20188942c77750e8c41c388059b55f35c"
	},
	{
		"id": "061769b28b75",
		"ts": "2026-09-25T20:12:53.259Z",
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
		"liquidityUsd": 38805960.1,
		"hash": "061769b28b75753390ed1248d40aace95ed01a1f4549729d1446224e8f182e92"
	},
	{
		"id": "199cef5850c1",
		"ts": "2026-09-25T20:12:53.573Z",
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
		"liquidityUsd": 4537481.62,
		"hash": "199cef5850c131d67368aa01ab8289f10c36b35fe2239678b90375b7f0591513"
	},
	{
		"id": "996839f5908d",
		"ts": "2026-09-25T20:12:53.854Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1305471.04,
		"hash": "996839f5908d71e8212483c76f0f8f7d9661e604d4594e411b094473ce870113"
	},
	{
		"id": "bd79979f4134",
		"ts": "2026-09-25T20:12:54.123Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 38806040.04,
		"hash": "bd79979f413429fedacff1f28df2e29889065f0e258c1a6af88b9c27c174bbe3"
	},
	{
		"id": "9325aac46b90",
		"ts": "2026-09-25T20:12:54.423Z",
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
		"liquidityUsd": 1398124.41,
		"hash": "9325aac46b9049cc85a1a027bf54f3813e8e953c70e201413a03561a61c0d377"
	},
	{
		"id": "4bb2a1584e84",
		"ts": "2026-09-25T20:12:54.695Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 3000089.56,
		"hash": "4bb2a1584e8465ad1b357979b8f3f1b84e33884c5c137a0bcd79e6af3ae8d57e"
	},
	{
		"id": "13b306cbe2c1",
		"ts": "2026-09-25T20:12:54.976Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3719111.7,
		"hash": "13b306cbe2c10d15f2a91ca05e1c71f7840887f6e9c2346dabab898084838e05"
	},
	{
		"id": "747e9c5f3a72",
		"ts": "2026-09-25T20:12:55.235Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 856639.72,
		"hash": "747e9c5f3a7215f4c245c9dbd6458904dd9bce093c82d4d4c0f64ab7f1d29b6f"
	},
	{
		"id": "72317fec7cbf",
		"ts": "2026-09-25T20:12:55.487Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18870066.65,
		"hash": "72317fec7cbf712253e6181bfa48bdb926680491ba3a603115ddb1ec09a0fd35"
	},
	{
		"id": "31b3e3adcc2a",
		"ts": "2026-09-25T20:12:55.753Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1565729.97,
		"hash": "31b3e3adcc2a108a6f3349d4f8206e5b4f9643f4304f9ab1e7a3d1d5a68773e0"
	},
	{
		"id": "d8c29c0eb802",
		"ts": "2026-09-25T20:12:56.018Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 506969.95,
		"hash": "d8c29c0eb802d25c17cc40f0fa4e614c296543ea705de1fabd9d5297fdc40966"
	},
	{
		"id": "85373cc1d5d7",
		"ts": "2026-09-25T20:12:56.269Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1591131.95,
		"hash": "85373cc1d5d7c900ab1f4c502e1f2fb354328c5fe2373dbd100948d20be2715a"
	},
	{
		"id": "88a7ac68bb26",
		"ts": "2026-09-25T20:12:56.523Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 814265.14,
		"hash": "88a7ac68bb26f6affa45259e3af6dede9fe041a272b8f596fa0add1dffdbf942"
	},
	{
		"id": "5bc433e20a0a",
		"ts": "2026-09-25T20:12:56.777Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1139670.65,
		"hash": "5bc433e20a0ae74f7257ac8a315a449967c1cf93ef2cb798dc8b293945599657"
	},
	{
		"id": "04972905bdd5",
		"ts": "2026-09-25T20:12:57.029Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121719.35,
		"hash": "04972905bdd52f9c272b891affa2a0c3b208a48bf7d5c737c848c784e67c126a"
	},
	{
		"id": "2963aff10571",
		"ts": "2026-09-25T20:12:57.291Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 954920.67,
		"hash": "2963aff10571471f990f4f4d7156ed9aa1c36e7835cf879d1883908d7e9d7890"
	},
	{
		"id": "1ddbfb1f9d35",
		"ts": "2026-09-25T16:26:03.698Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 154046568.35,
		"hash": "1ddbfb1f9d35046776dece1b1e088e1096f5b8a70e0b19520aee98edec6f2121"
	},
	{
		"id": "ee90320a65a3",
		"ts": "2026-09-25T16:26:03.963Z",
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
		"liquidityUsd": 16438231.04,
		"hash": "ee90320a65a3138103c606ba7f60d6ecbeee8f652e4c6ed83c39e1a36aebdb4f"
	},
	{
		"id": "48241f4216dd",
		"ts": "2026-09-25T16:26:04.207Z",
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
		"liquidityUsd": 872388.31,
		"hash": "48241f4216dd0153b395d4b1e736276293ba6024b0c29faa141478a326c53a25"
	},
	{
		"id": "36baf74f79bd",
		"ts": "2026-09-25T16:26:04.457Z",
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
		"liquidityUsd": 38353685.9,
		"hash": "36baf74f79bd8a6f9cd748ed4b11760685bf5bf3b7b7ded408cb908f9fa03f4f"
	},
	{
		"id": "766b9e99c0ad",
		"ts": "2026-09-25T16:26:04.724Z",
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
		"liquidityUsd": 4524544.63,
		"hash": "766b9e99c0adc08aa624215520fb5b745262374cb813fc3875210aa3ca44a96f"
	},
	{
		"id": "314b56a1ba91",
		"ts": "2026-09-25T16:26:04.994Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1305009.76,
		"hash": "314b56a1ba9197a1cc16aca82a49acf804a48faa7d5211337ba50f15814ab2c2"
	},
	{
		"id": "26fd93a9634d",
		"ts": "2026-09-25T16:26:05.258Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 38353693.08,
		"hash": "26fd93a9634d88d4248e5961af02a6ef804d229382b65efedde5b5f69d67e115"
	},
	{
		"id": "b983c9e2867b",
		"ts": "2026-09-25T16:26:05.506Z",
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
		"liquidityUsd": 1302146.39,
		"hash": "b983c9e2867b6e014146f1678f68518be8b2ca4c1590d40091e9524bb119930a"
	},
	{
		"id": "777a232c7906",
		"ts": "2026-09-25T16:26:05.770Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2982550.15,
		"hash": "777a232c79065aa31788d041b1fd060c4b972253cabc0de76218c1c4304543f0"
	},
	{
		"id": "c28050321735",
		"ts": "2026-09-25T16:26:06.018Z",
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
		"liquidityUsd": 18913677.81,
		"hash": "c28050321735ebb609430f3245fb05494e00f7e70b4f390e7c791aef694bc13e"
	},
	{
		"id": "9b8a93bfea0c",
		"ts": "2026-09-25T16:26:06.243Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3747048.99,
		"hash": "9b8a93bfea0c61747283beb098e264c6f14ac02cd3c6addc1cda72374663b579"
	},
	{
		"id": "c1724ed6f029",
		"ts": "2026-09-25T16:26:06.482Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 851890.09,
		"hash": "c1724ed6f029ca05f2416da07b86b3ba8d96766818ba5fe2245f792c942529ee"
	},
	{
		"id": "0e1816f33529",
		"ts": "2026-09-25T16:26:06.718Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 520027.19,
		"hash": "0e1816f335299e2128a261811adf5e3c89a915dc880321ba3d175d151a0abacd"
	},
	{
		"id": "fea22e187a2c",
		"ts": "2026-09-25T16:26:06.955Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 133125.24,
		"hash": "fea22e187a2c495934ab0160a490ff1de8f43751b54ca9e6449778ed4b4a3409"
	},
	{
		"id": "5a10cfa266a0",
		"ts": "2026-09-25T16:26:07.185Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 824598.75,
		"hash": "5a10cfa266a0329a9e74c98d088715aff2fe139501f5d9599ae8c8d0d4a7f050"
	},
	{
		"id": "14365c1c95e6",
		"ts": "2026-09-25T16:26:07.422Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1533432.26,
		"hash": "14365c1c95e65a6660d12daeb2669ed54d023cee206390c2d7d68933a5565d38"
	},
	{
		"id": "03cee7539a80",
		"ts": "2026-09-25T16:26:07.648Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1582592.57,
		"hash": "03cee7539a80c8655cf482b48258dd47318f16504c04e3ae32153fad19fdf75a"
	},
	{
		"id": "9e1a245c14f3",
		"ts": "2026-09-25T16:26:07.882Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 658205.68,
		"hash": "9e1a245c14f37f1060118ba17d6805686894e34969f077942aaa7baf3e58113b"
	},
	{
		"id": "c0c267a3a3c2",
		"ts": "2026-09-25T16:26:08.121Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4573324.63,
		"hash": "c0c267a3a3c2893e26456113a2fa7f88ad7994d1901f50d9dd75cca457d6821f"
	},
	{
		"id": "67524480009f",
		"ts": "2026-09-25T11:02:41.609Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 154261845.93,
		"hash": "67524480009fee1fbf7c94814d5a164782206a30c0011ba487133306012a06e9"
	},
	{
		"id": "e31764819d72",
		"ts": "2026-09-25T11:02:41.879Z",
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
		"liquidityUsd": 13818891.01,
		"hash": "e31764819d726a88c6b71aa2f04db42c6f563e52f253ac1ffa4304101e12baac"
	},
	{
		"id": "20e206e2e8e0",
		"ts": "2026-09-25T11:02:42.146Z",
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
		"liquidityUsd": 880659.12,
		"hash": "20e206e2e8e0a2fc5947c0ba1dc0d14b78346324d7ec81d7c299c5564b51fa25"
	},
	{
		"id": "f907846fd977",
		"ts": "2026-09-25T11:02:42.389Z",
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
		"liquidityUsd": 38850724.57,
		"hash": "f907846fd9772ba2fa429002a1b2bdf0989eff4e782d4691987036c9abb057b2"
	},
	{
		"id": "67177efbafd5",
		"ts": "2026-09-25T11:02:42.642Z",
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
		"liquidityUsd": 4659450.45,
		"hash": "67177efbafd525674ac8d823d0f98e294d28840488bb0bc217f49350244ba541"
	},
	{
		"id": "b17130b2ee0a",
		"ts": "2026-09-25T11:02:42.885Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1307802.98,
		"hash": "b17130b2ee0aba7486a9357e4d779b86cfa553aa73861e0569537ee055cb39fe"
	},
	{
		"id": "f50233d60f52",
		"ts": "2026-09-25T11:02:43.145Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 38850724.57,
		"hash": "f50233d60f52106ecd980eee35e3ea1b5092078dccb4f2b8256ed0a2ce46c216"
	},
	{
		"id": "57e5c63bfea8",
		"ts": "2026-09-25T11:02:43.387Z",
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
		"liquidityUsd": 2065529.36,
		"hash": "57e5c63bfea8a3cf52c6b8586d1f011ed73d69e348bc22f1cebc1f4cfc51abd8"
	},
	{
		"id": "281e6d2e7414",
		"ts": "2026-09-25T11:02:43.631Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2953748.46,
		"hash": "281e6d2e74144dc0076f0e5f8637bbbeedb2c0c685d5f28222fdbc6ade7e94af"
	},
	{
		"id": "2c263f106424",
		"ts": "2026-09-25T11:02:43.909Z",
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
		"liquidityUsd": 19476962.5,
		"hash": "2c263f106424fb2c12081f3ec19be15a19cdd013b71adc6ff2af84b2ad62f342"
	},
	{
		"id": "77b3703f7f20",
		"ts": "2026-09-25T11:02:44.132Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 142127.37,
		"hash": "77b3703f7f20605dda9a03b872418e302e2e044b48aae56e830895278090f30e"
	},
	{
		"id": "9bdbc6bfc256",
		"ts": "2026-09-25T11:02:44.359Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 868286.98,
		"hash": "9bdbc6bfc25619f2f3427decd84f996cd75a5b357478753b75f2b4ddd0186573"
	},
	{
		"id": "375bc75ee4fe",
		"ts": "2026-09-25T11:02:44.585Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3783271.06,
		"hash": "375bc75ee4fefaf656b44cef8fc37f4fb083bb50948a82b7483fc17744729330"
	},
	{
		"id": "46a6a9980aa8",
		"ts": "2026-09-25T11:02:44.808Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 821675.49,
		"hash": "46a6a9980aa844e6ddb6517ab8d0d3a616ad685aada00ff59761abdf8271985b"
	},
	{
		"id": "048dc219edcb",
		"ts": "2026-09-25T11:02:45.033Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1179065.72,
		"hash": "048dc219edcbd5b982fbb9fe24db98f4db2555d835f1d25d5583b5b3e421bfc7"
	},
	{
		"id": "a70d25abafc5",
		"ts": "2026-09-25T11:02:45.258Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1537866.05,
		"hash": "a70d25abafc560e64f62ba0cf3b277d24d7b3e2ebed50c1c3d3d7f1e8905b09b"
	},
	{
		"id": "ef8855bd7445",
		"ts": "2026-09-25T11:02:45.483Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3364244.51,
		"hash": "ef8855bd74454f8c9757afe4d176c447699696e6ab4147d432b3c9c125ccdc06"
	},
	{
		"id": "53912703b76e",
		"ts": "2026-09-25T11:02:45.707Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 578070.31,
		"hash": "53912703b76e887608f902809db4998afaaff2de0c7557b2d69f67c640ca281b"
	},
	{
		"id": "34b554a280a9",
		"ts": "2026-09-25T11:02:45.932Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 656245.3,
		"hash": "34b554a280a97dc562445ac68e30ff5066ae13f688c130319f910b2cf55daeb1"
	},
	{
		"id": "4c289749ff07",
		"ts": "2026-09-25T05:44:34.592Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 153270800.85,
		"hash": "4c289749ff07547ff96d8c60e72e3556b520e15b4f0784df396464413c319b0f"
	},
	{
		"id": "292dca3bbe6f",
		"ts": "2026-09-25T05:44:35.265Z",
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
		"liquidityUsd": 17130253.67,
		"hash": "292dca3bbe6faf17e196ca21034dd83bab428f292db89d9eb77d7a0dc4226057"
	},
	{
		"id": "2d8753f4856a",
		"ts": "2026-09-25T05:44:35.540Z",
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
		"liquidityUsd": 861348.25,
		"hash": "2d8753f4856aaaa14eb4d585b18e12bb262b48373506c17e80ac62873174d762"
	},
	{
		"id": "34544f8f4dc8",
		"ts": "2026-09-25T05:44:35.803Z",
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
		"liquidityUsd": 36997411.97,
		"hash": "34544f8f4dc8477fbbaa7bdb22c9e387b0af84a001fb32e6b78db2c42189b6c1"
	},
	{
		"id": "24a9be58baf0",
		"ts": "2026-09-25T05:44:36.071Z",
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
		"liquidityUsd": 4577116.49,
		"hash": "24a9be58baf013d86efb4ec7a044346bfa77602d1b23fe995ef9f6973e3bc778"
	},
	{
		"id": "f980b7f8886c",
		"ts": "2026-09-25T05:44:36.331Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1299274.13,
		"hash": "f980b7f8886c0827c66dc4ae539dd3ffeef3579f0dbfdc293b0da4c1accfdaf1"
	},
	{
		"id": "5e890b31f175",
		"ts": "2026-09-25T05:44:36.615Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36997411.97,
		"hash": "5e890b31f17511933f999e41daebee3586bf509335947db68be9365473b2a6cb"
	},
	{
		"id": "b43a6c8cc24e",
		"ts": "2026-09-25T05:44:36.881Z",
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
		"liquidityUsd": 2291831.43,
		"hash": "b43a6c8cc24e6467a78033102109e8cfd324c380dc6f6f523fab4c07310525ac"
	},
	{
		"id": "0ea5a059f059",
		"ts": "2026-09-25T05:44:37.134Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2894231.75,
		"hash": "0ea5a059f059f6fd31ae2708b32df5d1c72daabeb84cb180af3abd671a1aa8d3"
	},
	{
		"id": "8fb1c544c6fc",
		"ts": "2026-09-25T05:44:37.402Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 137613.2,
		"hash": "8fb1c544c6fcb886e7e464acec37b847e3d4cf1fee25059bd11f7acc7b9c2bfa"
	},
	{
		"id": "ac1c4cc9ac0d",
		"ts": "2026-09-25T05:44:37.633Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19170356.56,
		"hash": "ac1c4cc9ac0d23f6cc3cdd2ba33eb636b8d1207c841b52c9a75f54e2c1772c72"
	},
	{
		"id": "ce5a151e9d06",
		"ts": "2026-09-25T05:44:37.886Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 812992.76,
		"hash": "ce5a151e9d06c9fba1a11c44ffe0e4b46022e703b261757064e7a22592f02eae"
	},
	{
		"id": "865a89444b16",
		"ts": "2026-09-25T05:44:38.121Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 889320.69,
		"hash": "865a89444b16dcd5dea18a49cd3d4aa26929277cd9a8e0388064bb2dafffa6bf"
	},
	{
		"id": "17401cf3ae73",
		"ts": "2026-09-25T05:44:38.352Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3695951.09,
		"hash": "17401cf3ae7314adca4e7bbaa487f32b7ed7a60c6628d2572464b1e27cbbf23c"
	},
	{
		"id": "52198476c8a5",
		"ts": "2026-09-25T05:44:38.585Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1349369.44,
		"hash": "52198476c8a5dedcb8feb3352cdbb1d865aa3e6bab4816df50da7d393b8954e0"
	},
	{
		"id": "981891375c78",
		"ts": "2026-09-25T05:44:38.815Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1632151.74,
		"hash": "981891375c787dde41f3dc48cbea18a6bc1b4c80a7c98b2f20a1e060eb6c8123"
	},
	{
		"id": "d8103b280b1b",
		"ts": "2026-09-25T05:44:39.050Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1514359.55,
		"hash": "d8103b280b1b3d91dd2c6b3076a1c758de7158ff8ed332fff9dbd352e1b5a713"
	},
	{
		"id": "421ef637ce93",
		"ts": "2026-09-25T05:44:39.297Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 159863.94,
		"hash": "421ef637ce931aeee6b9b0879b1772598c254d59ad0e99e42b3a1094de7d6ae1"
	},
	{
		"id": "f2b0e22225f5",
		"ts": "2026-09-25T05:44:39.542Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3313127.2,
		"hash": "f2b0e22225f57713b1bc3fb8c29a4c8c29210e0860380a4105a5418670f6a275"
	},
	{
		"id": "b6f652ba93d1",
		"ts": "2026-09-25T00:15:53.726Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 153591123.63,
		"hash": "b6f652ba93d1a53f4fbf701b97a1262f518d86af4d7b725cdff74e3bd52edb75"
	},
	{
		"id": "648c936783ba",
		"ts": "2026-09-25T00:15:54.423Z",
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
		"liquidityUsd": 16995708.54,
		"hash": "648c936783ba53760535df2b7569f9f48c52a130fb159ac71a6dd5e47a9dce53"
	},
	{
		"id": "ce51e155a7f5",
		"ts": "2026-09-25T00:15:54.674Z",
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
		"liquidityUsd": 868765.83,
		"hash": "ce51e155a7f5b490fe2352fd66604f700eafb0ca76c7c533de09155e6a7ab477"
	},
	{
		"id": "096cd99767e2",
		"ts": "2026-09-25T00:15:54.935Z",
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
		"liquidityUsd": 36591810.54,
		"hash": "096cd99767e201e0cf96802813e2109cd1913084220ef2c9318dc98b680e7923"
	},
	{
		"id": "9a5d60a65d16",
		"ts": "2026-09-25T00:15:55.184Z",
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
		"liquidityUsd": 4557022.62,
		"hash": "9a5d60a65d163a4b3e6c1af426388bb04678b521614a3fab535471339e2c2e28"
	},
	{
		"id": "621e14e08525",
		"ts": "2026-09-25T00:15:55.441Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1301564.18,
		"hash": "621e14e08525fed52d64d7996c770a985bf3e63ac0bd3a28d121529a47ececa4"
	},
	{
		"id": "1f80f49a5f68",
		"ts": "2026-09-25T00:15:55.686Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36591810.64,
		"hash": "1f80f49a5f6888b9d1190a4e25a64e18a673a046709b79326de89e6db5aae965"
	},
	{
		"id": "ae7f6ac3d41a",
		"ts": "2026-09-25T00:15:55.943Z",
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
		"liquidityUsd": 2302744.52,
		"hash": "ae7f6ac3d41a9d08dcd70913e9c1985ff137973cc482b8536ecf675c6bfc1e39"
	},
	{
		"id": "b63d54abdd3e",
		"ts": "2026-09-25T00:15:56.193Z",
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
		"liquidityUsd": 19081748.8,
		"hash": "b63d54abdd3e346ad99f87b0abfb89afa337d0f96d169eac341c3a8d5e63e760"
	},
	{
		"id": "bd53e5388d76",
		"ts": "2026-09-25T00:15:56.448Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 137684.43,
		"hash": "bd53e5388d7682a40c71e6e05857125e3624109bc06b149fee5ca05ad82a40c3"
	}
]
