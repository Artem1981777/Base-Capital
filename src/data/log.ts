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
	"updatedAt": "2026-11-25T03:20:10.104Z",
	"tokensScored": 23498,
	"verdictsIssued": 23498,
	"safe": 19990,
	"risky": 1640,
	"likelyRug": 1868,
	"ticks": 1318
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "7db3121ccfd0",
		"ts": "2026-11-25T03:20:04.923Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 94313551.21,
		"hash": "7db3121ccfd04f2bb0181dc708dd3c8b89185d934ce6746dce206d7355cfc020"
	},
	{
		"id": "3d5d9b447ffb",
		"ts": "2026-11-25T03:20:05.305Z",
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
		"liquidityUsd": 22070152.46,
		"hash": "3d5d9b447ffb127247c1fda463c5d5a20bfdf60f51b7987fe017c80d5d3742b1"
	},
	{
		"id": "b55bdf9a531a",
		"ts": "2026-11-25T03:20:05.549Z",
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
		"liquidityUsd": 348447.39,
		"hash": "b55bdf9a531a697bb346311a858d283e396b74b4e77f023d10730dd5dfe5c44c"
	},
	{
		"id": "12f6268e71ea",
		"ts": "2026-11-25T03:20:05.837Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3234214.4,
		"hash": "12f6268e71eab4d1f2dd069fa8822b618f7219aa3682cec178eb7c5f73d33656"
	},
	{
		"id": "60758593ff0c",
		"ts": "2026-11-25T03:20:06.045Z",
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
		"liquidityUsd": 372941.18,
		"hash": "60758593ff0ccccb55888398bebf676688e77ad609115d870044906cbb12c058"
	},
	{
		"id": "5bf32b903618",
		"ts": "2026-11-25T03:20:06.370Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 761228.16,
		"hash": "5bf32b9036183f392cb88107aa2c490b8fc2f26f544dc1c32843fe964fbba2ab"
	},
	{
		"id": "c540d975dfe7",
		"ts": "2026-11-25T03:20:06.584Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3234214.4,
		"hash": "c540d975dfe7011989924bebe1bd5cb7e2755e967780093607bc7121d840bd75"
	},
	{
		"id": "4d0e11e105ea",
		"ts": "2026-11-25T03:20:06.865Z",
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
		"liquidityUsd": 1498918.4,
		"hash": "4d0e11e105ea3b23d9d7c825424a414c23e7df4b744a9ce143396fb741fe7e23"
	},
	{
		"id": "de4ac8c2fc11",
		"ts": "2026-11-25T03:20:07.093Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1943700.57,
		"hash": "de4ac8c2fc1126ef7cc2d7c63bb2fc6195302a5de2c17e9ea5002de6c1053c48"
	},
	{
		"id": "f79cd56765e9",
		"ts": "2026-11-25T03:20:07.329Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 504812.39,
		"hash": "f79cd56765e9c22a593d3804542e7a0dad5d9d2b064fee7a30cbfc621425ef04"
	},
	{
		"id": "90d867c1976a",
		"ts": "2026-11-25T03:20:07.614Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1226753.49,
		"hash": "90d867c1976a87ea9c87402a539e378c8e25096f4c302d663182f03f3929d4ce"
	},
	{
		"id": "8156ba5befa7",
		"ts": "2026-11-25T03:20:07.870Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5327978.82,
		"hash": "8156ba5befa7a7c169b0c943ee4bc676e25433f840e49c0730d385eaefcdc14b"
	},
	{
		"id": "6e799ea76c4c",
		"ts": "2026-11-25T03:20:08.099Z",
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
		"liquidityUsd": 6948473.6,
		"hash": "6e799ea76c4c25c97676ec8df0a490db72e8de413022256742e20b3196b6b461"
	},
	{
		"id": "f361ecf9884a",
		"ts": "2026-11-25T03:20:08.320Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 521318.96,
		"hash": "f361ecf9884a303573ad18b14dab1edcc5a0235fb64722d41696c46c04d9465d"
	},
	{
		"id": "73ed700b1e52",
		"ts": "2026-11-25T03:20:08.575Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 822486.32,
		"hash": "73ed700b1e52d7fd44183264320d65a3e206dbf690184cfadab7c1476407a107"
	},
	{
		"id": "5fd215429c01",
		"ts": "2026-11-25T03:20:08.994Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1687413.5,
		"hash": "5fd215429c0105b17667feca3b5f2c994add037e2d0653dcc8bc06739c081bd1"
	},
	{
		"id": "27714ab76e0e",
		"ts": "2026-11-25T03:20:09.228Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 695477.87,
		"hash": "27714ab76e0e8cc9585a018c29ddb8f1b533ea2abe9f05ce75d5d55a6911a8ed"
	},
	{
		"id": "d2cf4f523076",
		"ts": "2026-11-25T03:20:09.593Z",
		"symbol": "SPCXc",
		"token": "0xb2000000000000000000007b9fcbd005511aCBd5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1062662.02,
		"hash": "d2cf4f523076b86caca28463f7371a897db4765cfb2f645d9fa86ca202fd0194"
	},
	{
		"id": "e8f03be39787",
		"ts": "2026-11-25T03:20:09.881Z",
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
		"liquidityUsd": 1680336.64,
		"hash": "e8f03be39787fc510e848f1cd3d9b038cc3ff0d2dd16a3df7cf04f0527d6bf54"
	},
	{
		"id": "51348c177b1a",
		"ts": "2026-11-25T03:20:10.104Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1269234.18,
		"hash": "51348c177b1a2d5de9d08dd9969dd41bbd38a27621c70a43e38a3eb5068dec93"
	},
	{
		"id": "c5617c03e9b4",
		"ts": "2026-11-24T19:54:19.721Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 95384564.29,
		"hash": "c5617c03e9b44977fb6c4154378825f41b17d19c4c96a7124f4c7e6fa19d0fef"
	},
	{
		"id": "8d6f38755e48",
		"ts": "2026-11-24T19:54:19.946Z",
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
		"liquidityUsd": 22070102.83,
		"hash": "8d6f38755e4832effbce141f4c9f2f68ecbd5a9701182b3afd67b5a87375fa20"
	},
	{
		"id": "37e1b5efeed2",
		"ts": "2026-11-24T19:54:20.319Z",
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
		"liquidityUsd": 349329.36,
		"hash": "37e1b5efeed2748c07b3a1a96055d5a9006d23a3f7ec334fb41e5befc69fb8df"
	},
	{
		"id": "d4d0e5714c44",
		"ts": "2026-11-24T19:54:20.527Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3267752.5,
		"hash": "d4d0e5714c4460d1e6fe0c660d9d85394face2571ea277e086fee4d355f3b887"
	},
	{
		"id": "cbb21544e466",
		"ts": "2026-11-24T19:54:20.930Z",
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
		"liquidityUsd": 378876.83,
		"hash": "cbb21544e4669e730920b6649b9e1c86d5391bd08fe5ee7d191b87e656108e17"
	},
	{
		"id": "339c5c0a9f22",
		"ts": "2026-11-24T19:54:21.171Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 771590.49,
		"hash": "339c5c0a9f22b6551a120a5d76a8fd116a63c7a475b47112aa5841b173f657e3"
	},
	{
		"id": "22b6f757e6dd",
		"ts": "2026-11-24T19:54:21.460Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3267752.5,
		"hash": "22b6f757e6dd93d1a3de506b5251c39deaf722a1b26de5ad824b73ca482aa22f"
	},
	{
		"id": "471bef480ee5",
		"ts": "2026-11-24T19:54:21.653Z",
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
		"liquidityUsd": 1510149.03,
		"hash": "471bef480ee5eaaa75ca3768bd907d3afce5f3490158fa1e807fa0281de85044"
	},
	{
		"id": "8abafcf8f607",
		"ts": "2026-11-24T19:54:21.844Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1791462.04,
		"hash": "8abafcf8f6072eba77fdf44e768d8cd53074123a4779142076d0128923bbfab6"
	},
	{
		"id": "32f3456817ac",
		"ts": "2026-11-24T19:54:22.135Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 527739.02,
		"hash": "32f3456817ac9c4d697496a75e935084ac9bdde2b7e4f92e336714dc26271024"
	},
	{
		"id": "07b57ae358f6",
		"ts": "2026-11-24T19:54:22.321Z",
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
		"liquidityUsd": 6916991.04,
		"hash": "07b57ae358f673acb772f922dc8ded7f168fca7ed4ab0e6af4b7e6ef05e6a490"
	},
	{
		"id": "d06bc0213b73",
		"ts": "2026-11-24T19:54:22.537Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1687108.24,
		"hash": "d06bc0213b731ddabf4595664b47265ebae6897ebabf5a605ad72e1e832c49fb"
	},
	{
		"id": "4c4c8bca4afe",
		"ts": "2026-11-24T19:54:22.728Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1532744.7,
		"hash": "4c4c8bca4afecf1f68024962c21b2cc283fc41a6e178b6a6f3fb31d6ff601bc5"
	},
	{
		"id": "4254a1372b1b",
		"ts": "2026-11-24T19:54:22.920Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 831836.94,
		"hash": "4254a1372b1bf2a7d38428e109d08b42f7936251961b81f0564bfb98a45b539a"
	},
	{
		"id": "b253ae00a578",
		"ts": "2026-11-24T19:54:23.103Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 548477.85,
		"hash": "b253ae00a578f2a5f0316de9b79a781ab611e2081889ddc66578fa584edda930"
	},
	{
		"id": "e6cda3103b18",
		"ts": "2026-11-24T19:54:23.378Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 713187.45,
		"hash": "e6cda3103b1803b6354738059d363f713795f66e698531d1e27ea7a307ea1492"
	},
	{
		"id": "7f1144c3be1a",
		"ts": "2026-11-24T19:54:23.595Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 427432,
		"hash": "7f1144c3be1aaf60b6431567b30dc450ffd3a794992985f19bee763390e52a99"
	},
	{
		"id": "2c5e5838afbb",
		"ts": "2026-11-24T19:54:23.811Z",
		"symbol": "SPCXc",
		"token": "0xb2000000000000000000007b9fcbd005511aCBd5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 985405.08,
		"hash": "2c5e5838afbbb501f61b947b3bec4e9245ef0429673c58abc42f88b0e14fe6f0"
	},
	{
		"id": "e7304b23687b",
		"ts": "2026-11-24T19:54:24.003Z",
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
		"liquidityUsd": 1694932.1,
		"hash": "e7304b23687b64c0e9791c08fc93f9f016bbd339ff359cf8b238c52f619a6464"
	},
	{
		"id": "6c24d0733d90",
		"ts": "2026-11-24T08:11:51.489Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 82424344.4,
		"hash": "6c24d0733d9063e04b41aef27999a150ccafcb01a38cbe8401fc1518e3b3abf7"
	},
	{
		"id": "18cc57c6d21b",
		"ts": "2026-11-24T08:11:51.749Z",
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
		"liquidityUsd": 22113984.47,
		"hash": "18cc57c6d21bd28fb0a5aef4fefdce3cecb91cc74cdcc3c13330c3099819a27f"
	},
	{
		"id": "1f1c699314aa",
		"ts": "2026-11-24T08:11:51.989Z",
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
		"liquidityUsd": 367140.74,
		"hash": "1f1c699314aa8955a7ad4a3961b9570b8228c601f3666b78ef8152a88fd14ac3"
	},
	{
		"id": "fa417d90c4df",
		"ts": "2026-11-24T08:11:52.233Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3332956.1,
		"hash": "fa417d90c4df209dac36328e491e352b9da227b5dde85142da42440bff73b5f0"
	},
	{
		"id": "3473fcbc07c0",
		"ts": "2026-11-24T08:11:52.467Z",
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
		"liquidityUsd": 352096.39,
		"hash": "3473fcbc07c054c28a05b2545d2f6a38fe26a3fb57bf07a0a872c954940c6313"
	},
	{
		"id": "a0316534f450",
		"ts": "2026-11-24T08:11:52.703Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 786413.08,
		"hash": "a0316534f45067a86983de4fa4fa594286b8f2ac726a2b7935abfe71ff5df68a"
	},
	{
		"id": "9d6289fbe814",
		"ts": "2026-11-24T08:11:52.938Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 85111.04,
		"hash": "9d6289fbe81496a5a4ce3dda780c7cb0667dbc847d4a895a8f222ae759bbcb51"
	},
	{
		"id": "ecf89fea1af6",
		"ts": "2026-11-24T08:11:53.176Z",
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
		"liquidityUsd": 1528808.93,
		"hash": "ecf89fea1af64aa5c022e35358c69589b1e3a600a2b84a4b97eeb37553b1efef"
	},
	{
		"id": "3dc61046b743",
		"ts": "2026-11-24T08:11:53.414Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 607302.05,
		"hash": "3dc61046b743831b6dd016570c1e2d9b2fc4bf1befad5bdc932bc68b4e6074ba"
	},
	{
		"id": "9f916a8e73c0",
		"ts": "2026-11-24T08:11:53.654Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1826958.73,
		"hash": "9f916a8e73c096634363a82496f1ead7d62be344fa04f41139d01b894a0fd69f"
	},
	{
		"id": "430586c59531",
		"ts": "2026-11-24T08:11:53.877Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1521620.05,
		"hash": "430586c5953169ed4a5a6190c28cd80ddfff597bf4e480c4e48586e9c716e269"
	},
	{
		"id": "6479b9b8bbe6",
		"ts": "2026-11-24T08:11:54.096Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 532036.64,
		"hash": "6479b9b8bbe6cc29fc5188de4b8fc17ee6fb2232bcb3eb05a6c5ee3499bcbd2d"
	},
	{
		"id": "f9933ab353d6",
		"ts": "2026-11-24T08:11:54.315Z",
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
		"liquidityUsd": 7043644.79,
		"hash": "f9933ab353d63937904855c2a55b4c53bd1cf0f54c77b2aa267d3a0d40314753"
	},
	{
		"id": "0edc7e0cb5e7",
		"ts": "2026-11-24T08:11:54.536Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 876558.32,
		"hash": "0edc7e0cb5e7d85071d7c153576cc140379b5da75d60f80ce6af0b4f1d6e6289"
	},
	{
		"id": "5578665917e6",
		"ts": "2026-11-24T08:11:54.755Z",
		"symbol": "SPCXc",
		"token": "0xb2000000000000000000007b9fcbd005511aCBd5",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1190085.33,
		"hash": "5578665917e6ce82f5676fe17ca0873601648549dd98c70dcfd74401d2b947aa"
	},
	{
		"id": "1c921f45e939",
		"ts": "2026-11-24T08:11:54.976Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 798895.5,
		"hash": "1c921f45e9397fc0b8b6aa1ec5ca486662292283befdcbf5c3bcfcc61d048cc0"
	},
	{
		"id": "fdd308176608",
		"ts": "2026-11-24T08:11:55.203Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 720204.72,
		"hash": "fdd308176608272b9a43383544fa27cf3a3f84347bca347eaf8d555dfeac7e19"
	},
	{
		"id": "d067e1a4eef1",
		"ts": "2026-11-24T08:11:55.808Z",
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
		"liquidityUsd": 1165792.35,
		"hash": "d067e1a4eef16513477de07c9e74d304f386ee467eb8186a508f1398c08602d1"
	},
	{
		"id": "3e28244802bb",
		"ts": "2026-11-24T08:11:56.033Z",
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
		"liquidityUsd": 1773560.5,
		"hash": "3e28244802bbeb00547b6dcf24500f46d220224ada67d39319e54044b3b018a3"
	},
	{
		"id": "3280559e3f3b",
		"ts": "2026-11-23T23:19:15.252Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 82801645.99,
		"hash": "3280559e3f3b31e4766417bcec55cad059407cb773a1ec92e85db1b5a47baf2d"
	},
	{
		"id": "a931f5f5d148",
		"ts": "2026-11-23T23:19:15.512Z",
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
		"liquidityUsd": 22394634.83,
		"hash": "a931f5f5d1485f890866cb05abf00d254d97ffe510e0e490f416e05124a5d612"
	},
	{
		"id": "36897bc90c5e",
		"ts": "2026-11-23T23:19:15.775Z",
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
		"liquidityUsd": 362439.7,
		"hash": "36897bc90c5e098d6616e7479914416ac79d96804e7e230636ec8567f5d17d40"
	},
	{
		"id": "d24712eb16ff",
		"ts": "2026-11-23T23:19:16.239Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3336069.23,
		"hash": "d24712eb16ff183178cecf3ec2495354571bfb5f4acde1153f0a35bed381c9ee"
	},
	{
		"id": "d7c896699c69",
		"ts": "2026-11-23T23:19:16.509Z",
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
		"liquidityUsd": 357903.92,
		"hash": "d7c896699c69c84a1bdd93eaf1aa3b00fbe0596cecba3eedbb08f52caff81a49"
	},
	{
		"id": "07b3e5c9bdc3",
		"ts": "2026-11-23T23:19:16.759Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 793842.11,
		"hash": "07b3e5c9bdc3c7a18f3c40851e71bf3dac6b97ed7051c915709b43ee7fe14131"
	},
	{
		"id": "5644a85b2510",
		"ts": "2026-11-23T23:19:17.003Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 85111.03,
		"hash": "5644a85b251003b3d9fe44a0e3008a797f9ae3f2b01e8106644917a770275abf"
	},
	{
		"id": "100c43c402eb",
		"ts": "2026-11-23T23:19:17.246Z",
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
		"liquidityUsd": 1420704.46,
		"hash": "100c43c402eb53708ff09594bcdc7bdf2ab9590bf59e98a0226f3348e7b2ce2a"
	},
	{
		"id": "d54c0864420f",
		"ts": "2026-11-23T23:19:17.505Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 606284.62,
		"hash": "d54c0864420f8f3a4f0d14dc0b9908b095cef5df43cb10ec63118742f9c34627"
	},
	{
		"id": "bf15709ade8c",
		"ts": "2026-11-23T23:19:17.753Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1848176.5,
		"hash": "bf15709ade8c74259bae6563273a1e9a07982a3d921ed8723c5211e6854b90a9"
	},
	{
		"id": "f4177d136f01",
		"ts": "2026-11-23T23:19:17.978Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 578151.85,
		"hash": "f4177d136f01e03089fbb534f685d807498f51f36b4927de7995feae4f520a7b"
	},
	{
		"id": "0eec18730e34",
		"ts": "2026-11-23T23:19:18.210Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1815256.27,
		"hash": "0eec18730e340336573e5f426a2a6ada9344d95ca749cee110580c10f3eb5f7f"
	},
	{
		"id": "372ae4575cfe",
		"ts": "2026-11-23T23:19:18.442Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 881581.55,
		"hash": "372ae4575cfed2bf666ffbdcbeda7863ba1e2ef3312d28bbd3036b7a4807e0a7"
	},
	{
		"id": "8d0397d35a29",
		"ts": "2026-11-23T23:19:18.667Z",
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
		"liquidityUsd": 6996537.21,
		"hash": "8d0397d35a29aef39aebf7f396afe1348654a36751d1d39c2b470f43e4d598ab"
	},
	{
		"id": "1b0fa17980a2",
		"ts": "2026-11-23T23:19:18.888Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1147259.57,
		"hash": "1b0fa17980a286e3ee8b5cd80ea9699a24cd4023bda2704905c74444cf1fe1c7"
	},
	{
		"id": "b3095b4f0dc6",
		"ts": "2026-11-23T23:19:19.123Z",
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
		"liquidityUsd": 1170079.31,
		"hash": "b3095b4f0dc6f9edaf08e7b3a442cfad6632b5dc5705904cb57e9f6f021b184e"
	},
	{
		"id": "7200268e78ed",
		"ts": "2026-11-23T23:19:19.355Z",
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
		"liquidityUsd": 1803567.94,
		"hash": "7200268e78ed38f2162838bd0c6969bb96cf7e3f955b40b1ab7df5fe0bc4190c"
	},
	{
		"id": "f159e12a88e2",
		"ts": "2026-11-23T23:19:19.581Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3061305.16,
		"hash": "f159e12a88e21eb68d5ed08447e1fa6397b2506045234fea56a0a2b493bba1b7"
	},
	{
		"id": "ffbfed7839b4",
		"ts": "2026-11-23T11:44:13.475Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 82671418.71,
		"hash": "ffbfed7839b4a063839c9974ce847a94d4cef5d404fe60b97366652127bbb3b1"
	},
	{
		"id": "80be4fa1abc4",
		"ts": "2026-11-23T11:44:13.719Z",
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
		"liquidityUsd": 22385663.54,
		"hash": "80be4fa1abc474e57de8634e4e0aa4650fe306fba97edf1140883e26a45963a0"
	},
	{
		"id": "2c0a655c9153",
		"ts": "2026-11-23T11:44:13.962Z",
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
		"liquidityUsd": 357448.34,
		"hash": "2c0a655c915377a0458c750b9cabf10b4239734a00a10a486e80875f38cd3237"
	},
	{
		"id": "16b0bec97420",
		"ts": "2026-11-23T11:44:14.231Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3359514.19,
		"hash": "16b0bec97420700748e5cb2b0e639d66afe4f39fc19a08078c4af35c55abc0ff"
	},
	{
		"id": "fcdddbaba978",
		"ts": "2026-11-23T11:44:14.466Z",
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
		"liquidityUsd": 412310.19,
		"hash": "fcdddbaba978e8d6956811d6402b2eca3d52f45f66c612d52f2b7a74f04e0385"
	},
	{
		"id": "dcf2cf39618f",
		"ts": "2026-11-23T11:44:14.708Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 792438.72,
		"hash": "dcf2cf39618fa7be7ee8d97ab5f1fce8ae35b075dbb3ba7ffcd7bcd6898be8ab"
	},
	{
		"id": "6da6166397ec",
		"ts": "2026-11-23T11:44:14.936Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 1787186.89,
		"hash": "6da6166397ec92fcb071d06c848cc65cf1f40427a37e8c49ce62384ccfdb5900"
	},
	{
		"id": "b783782c02bd",
		"ts": "2026-11-23T11:44:15.177Z",
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
		"liquidityUsd": 1404864.46,
		"hash": "b783782c02bd3b50834e355a0209bf0f5002ccc75624a737f78ecd97efebfcc9"
	},
	{
		"id": "dc9a02beda89",
		"ts": "2026-11-23T11:44:15.407Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 601836.54,
		"hash": "dc9a02beda890a2e9ff7c1f7a1efe5bfa22ce80b64779d2a086b56a0b074ddf0"
	},
	{
		"id": "c2924ecb949c",
		"ts": "2026-11-23T11:44:15.647Z",
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
		"liquidityUsd": 7212878.16,
		"hash": "c2924ecb949cdbe04b9e00a7066b648b7073d92ff3a9f55fffc9fb3c1721817a"
	},
	{
		"id": "e8d707a6c61a",
		"ts": "2026-11-23T11:44:15.860Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1784056.43,
		"hash": "e8d707a6c61ace5b1f6b9b0a8a57704808cbdb835400886c49431cd893294d9c"
	},
	{
		"id": "170fe9e8201a",
		"ts": "2026-11-23T11:44:16.100Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 536282.92,
		"hash": "170fe9e8201a8975ec7e7a610ff502f58cc7bb70c2fbc27fb21c418dedefeb33"
	},
	{
		"id": "9f40527ee9a0",
		"ts": "2026-11-23T11:44:16.328Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 901221.54,
		"hash": "9f40527ee9a09d43884a6b42c9ccba0106773a64a280483ec5ff64115b53f6a0"
	},
	{
		"id": "8a86c61480d7",
		"ts": "2026-11-23T11:44:16.551Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1740087.37,
		"hash": "8a86c61480d76eb1ed154890d0f85b3048409e03e428688b822d4ecfcfd1306c"
	},
	{
		"id": "b5377aa6b5fb",
		"ts": "2026-11-23T11:44:16.766Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2638705.1,
		"hash": "b5377aa6b5fbf0da8a1ecd994b436722c35311968e75f2289b26b5e0027f2439"
	},
	{
		"id": "2d649b527ddc",
		"ts": "2026-11-23T11:44:16.989Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3100883.76,
		"hash": "2d649b527ddc8a74512a20ecbd155c77ebd97d430b2fc6561157d1ade2f3641f"
	},
	{
		"id": "b7d2ce09af11",
		"ts": "2026-11-23T11:44:17.203Z",
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
		"liquidityUsd": 1177875.61,
		"hash": "b7d2ce09af116bc5b2cd81282d67eb935b6414e141d9d0dc15c86aefad53ba6c"
	},
	{
		"id": "648bb11742bd",
		"ts": "2026-11-23T11:44:17.427Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1037069.13,
		"hash": "648bb11742bd92f2df52fa6cb1ab6de50b6f38e93470eda402980b50faa3483c"
	},
	{
		"id": "deb0945b173a",
		"ts": "2026-11-23T11:44:17.641Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 711740.68,
		"hash": "deb0945b173ac12be552abeb3a754e9a9ac0b3328b0c9003baafa32525878675"
	},
	{
		"id": "e943c06876e1",
		"ts": "2026-11-23T02:10:39.074Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 82308137.87,
		"hash": "e943c06876e132c123be8276f9fb09e82155cfeb256d50a10693474458a0418c"
	},
	{
		"id": "fcd74e324dbc",
		"ts": "2026-11-23T02:10:39.292Z",
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
		"liquidityUsd": 22038100.25,
		"hash": "fcd74e324dbc792c11a526f34b6e382134b4e945d312ee64ae0448f0847a3d4d"
	},
	{
		"id": "027dd9f7bd74",
		"ts": "2026-11-23T02:10:39.499Z",
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
		"liquidityUsd": 353394.15,
		"hash": "027dd9f7bd74e4e187332b453c90b35367411c305770bbcce7c676169622b61a"
	},
	{
		"id": "fb1a830e2317",
		"ts": "2026-11-23T02:10:39.708Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3374373.72,
		"hash": "fb1a830e2317e805ff9138ca8b098e5f0ea139da4313a32febb3a18cfdd18ece"
	},
	{
		"id": "bfca9704e682",
		"ts": "2026-11-23T02:10:39.916Z",
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
		"liquidityUsd": 400511.98,
		"hash": "bfca9704e6823bd198d10afdc2175669e67db167fea780b583a520bac5b87198"
	},
	{
		"id": "9def891609fc",
		"ts": "2026-11-23T02:10:40.159Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 785897.3,
		"hash": "9def891609fc0a16917451efffdca7f0f401ca0d97ea284e50a65e90b0357c3a"
	},
	{
		"id": "44cc17401a94",
		"ts": "2026-11-23T02:10:40.387Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3374373.72,
		"hash": "44cc17401a944794f7deec854c277fb2efa3725fa8e9f639ef81d7856f2427bc"
	},
	{
		"id": "c2be310b758f",
		"ts": "2026-11-23T02:10:40.603Z",
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
		"liquidityUsd": 1164715.64,
		"hash": "c2be310b758f25b0ab6eb29980bfeec4a23ead72be83ee17428ea8a5d6215c30"
	},
	{
		"id": "8223d2e2db28",
		"ts": "2026-11-23T02:10:40.810Z",
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
		"liquidityUsd": 7191503.75,
		"hash": "8223d2e2db286f2110da825607148079b8aa4704d24555ecd7f73382d49c681a"
	},
	{
		"id": "6235eec704ec",
		"ts": "2026-11-23T02:10:41.018Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1658059.67,
		"hash": "6235eec704ec8027fc9846f9f59cf33dc2a59baaa4cc3f84259e0d39bf4787de"
	},
	{
		"id": "94dfb995d0ce",
		"ts": "2026-11-23T02:10:41.235Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 906583.18,
		"hash": "94dfb995d0ceb0ff70ff2f253b050f7e7b6eb866d71d27f87d5abfb8bc19f375"
	},
	{
		"id": "664cacb2108d",
		"ts": "2026-11-23T02:10:41.431Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 569385.02,
		"hash": "664cacb2108d34ec75a7182ebc6b2e9a3b0c0c3f151df875c012eb8ac862d467"
	},
	{
		"id": "4dca129d4246",
		"ts": "2026-11-23T02:10:41.640Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2944079.34,
		"hash": "4dca129d4246fad97b485c073af344fb551ebcf837dd4dcaf160a1a22918dff8"
	},
	{
		"id": "700b83fc2f27",
		"ts": "2026-11-23T02:10:41.849Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 524466.46,
		"hash": "700b83fc2f27b5cfdc3c0e67e48676cb202181195e27f424b45b813ecf10b701"
	},
	{
		"id": "27f3ca1e3e73",
		"ts": "2026-11-23T02:10:42.056Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1508741.32,
		"hash": "27f3ca1e3e7345a48a646c49ae4d1fbf32e217bddb4aee13aeca86453b4cf238"
	},
	{
		"id": "ee1acf4afbe9",
		"ts": "2026-11-23T02:10:42.275Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2638662.99,
		"hash": "ee1acf4afbe95e8fae799a3aa89b8c1869e76c3a7b673ffd9403d07b35a0eaa1"
	},
	{
		"id": "ed3d15718c51",
		"ts": "2026-11-23T02:10:42.503Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 715575.25,
		"hash": "ed3d15718c51161f2efca272ef807fdf76f9f9f906d33f8dff9e3cdd8b72db24"
	},
	{
		"id": "a1e526a0bbfc",
		"ts": "2026-11-23T02:10:42.712Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3036480.39,
		"hash": "a1e526a0bbfcdc538a7d2b3a5ab991690e95481fc4b515ee88b47fa99fb8bb2a"
	},
	{
		"id": "511c04dd78ca",
		"ts": "2026-11-23T02:10:42.921Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 439099.03,
		"hash": "511c04dd78ca1654ccad70cd23c9e7eb98011d5c977da695a597347e8b273d26"
	},
	{
		"id": "3ca51e7fabf9",
		"ts": "2026-11-22T21:29:25.717Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 82749588.34,
		"hash": "3ca51e7fabf987a16b559aeda10e9d82aac362538d26c97332ca00ea1c31e532"
	},
	{
		"id": "726051368687",
		"ts": "2026-11-22T21:29:26.402Z",
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
		"liquidityUsd": 22157451.94,
		"hash": "726051368687a3d2525c3dd601ef82cc7f34e84ceaa6efa13be6c239cddc199b"
	},
	{
		"id": "a28e08af86b4",
		"ts": "2026-11-22T21:29:26.666Z",
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
		"liquidityUsd": 358892.66,
		"hash": "a28e08af86b4c059ec4ffc63eb6e7a22f3784f9c5c91da3abde10ccb8567d5a6"
	},
	{
		"id": "0a2e98a25511",
		"ts": "2026-11-22T21:29:26.918Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3422829.9,
		"hash": "0a2e98a255115b8fd8e6a52612676c7ccfbc32c5b17f8ad3dfe949cbbeb61c44"
	},
	{
		"id": "197f90bcf544",
		"ts": "2026-11-22T21:29:27.172Z",
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
		"liquidityUsd": 407192.87,
		"hash": "197f90bcf54416543c0b335cc815b11b6722d794b57fdc89fce27e683dab2a94"
	},
	{
		"id": "eb76d9ac400e",
		"ts": "2026-11-22T21:29:27.423Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 795170.08,
		"hash": "eb76d9ac400eb25948b86d98612b7b95e88b40c2700128c4cd752a5a9fc9f65d"
	},
	{
		"id": "9b1622785039",
		"ts": "2026-11-22T21:29:27.677Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1650734.07,
		"hash": "9b16227850398a6b3675daf4f3b087ff770242619cff3fb3f31eaef25caebe56"
	},
	{
		"id": "007098fcaf25",
		"ts": "2026-11-22T21:29:27.935Z",
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
		"liquidityUsd": 1511890.75,
		"hash": "007098fcaf25d1a2a9e3bc47e6d5cb1d48782724299a94e7c574ce3fd83b5b8e"
	},
	{
		"id": "78d615a81f1b",
		"ts": "2026-11-22T21:29:28.189Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1652704.29,
		"hash": "78d615a81f1b1cca87ae721e87b35a1cee78b33b241a2984161e2678cda43776"
	},
	{
		"id": "b3745227cbfb",
		"ts": "2026-11-22T21:29:28.443Z",
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
		"liquidityUsd": 7232526.33,
		"hash": "b3745227cbfb4410d46b84d94a2e590795a5a8820c7dd774edb47c797fbdfc36"
	},
	{
		"id": "af7c55f50326",
		"ts": "2026-11-22T21:29:28.681Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 555238.99,
		"hash": "af7c55f50326cd39193c7e4f9d6addb0fa1799b4b2c847fa866d13af9b72bc20"
	},
	{
		"id": "65b9a3eb3e61",
		"ts": "2026-11-22T21:29:28.916Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3453225.56,
		"hash": "65b9a3eb3e610aacc480b86a1bce0c4005a5c77659e853cd16c5344c95524be9"
	},
	{
		"id": "aebcbcc2d539",
		"ts": "2026-11-22T21:29:29.151Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 867291.84,
		"hash": "aebcbcc2d53910011ef50decd6f7e41c1296906d5b56d774e51b10dd555e120e"
	},
	{
		"id": "ea90f19aa01e",
		"ts": "2026-11-22T21:29:29.385Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 721301.97,
		"hash": "ea90f19aa01ee0b756248fc8d9db254003a9248f02c6fe5b483389c0a6f30f37"
	},
	{
		"id": "e6b74434c93f",
		"ts": "2026-11-22T21:29:29.624Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 528255.19,
		"hash": "e6b74434c93f38663da07b7d0bb2faa93ca9f32c3c5b90346cc0e1f5c1f8afc3"
	},
	{
		"id": "0e67901b5a09",
		"ts": "2026-11-22T21:29:29.866Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2649505.55,
		"hash": "0e67901b5a09f2d923f1ccc8cc5debac850cf0bcc1cb7478b54f71f04d85775a"
	},
	{
		"id": "708f660fa30e",
		"ts": "2026-11-22T21:29:30.101Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3065196.11,
		"hash": "708f660fa30e4e490c532318c3e075ceaad8e83c97b70379c538d7e064d0c03b"
	},
	{
		"id": "f231f137f85c",
		"ts": "2026-11-22T21:29:30.337Z",
		"symbol": "GOOGLc",
		"token": "0xb2000000000000000000002D0BA3164cc74f58B7",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1587740.24,
		"hash": "f231f137f85c70a177b9fd162bffb0a2d55b026fd3888c8954e707950faa4677"
	},
	{
		"id": "3ed1530031b3",
		"ts": "2026-11-22T21:29:30.574Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 434866.24,
		"hash": "3ed1530031b308b53d3175f3e9a35f4c374c6ef0bbbe885c2c306f57dfa33d73"
	},
	{
		"id": "1e318e1f81e2",
		"ts": "2026-11-22T15:53:19.350Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 82521444.37,
		"hash": "1e318e1f81e21346b4109e131a4e228088579ff5d7b2ddcba268fd18b5b2220e"
	},
	{
		"id": "322045264c1b",
		"ts": "2026-11-22T15:53:19.599Z",
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
		"liquidityUsd": 21991590.21,
		"hash": "322045264c1bf2607acf2f5dc0ad6c79253a05723a2ca77028d23dceede31b91"
	},
	{
		"id": "da7533816d1b",
		"ts": "2026-11-22T15:53:19.859Z",
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
		"liquidityUsd": 357721.61,
		"hash": "da7533816d1bcfb8ea1af0201eb7d924ba526ddcfdf6531a2eadfbe11ed2982a"
	},
	{
		"id": "0400f1af90cb",
		"ts": "2026-11-22T15:53:20.112Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3414778.66,
		"hash": "0400f1af90cbf53091636b2d7f0c80f673413545a578a89b476e8509f5e385cc"
	},
	{
		"id": "7b3ae151dec4",
		"ts": "2026-11-22T15:53:20.348Z",
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
		"liquidityUsd": 406495.41,
		"hash": "7b3ae151dec4424ff578deaed768f4e382394cb4457b43cf369a9c6dbb2d7d7d"
	},
	{
		"id": "64a7183031fb",
		"ts": "2026-11-22T15:53:20.596Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 792610.42,
		"hash": "64a7183031fb176d323533cace288170d435839991581409cfb2f611b782882d"
	},
	{
		"id": "11e5186c6e5f",
		"ts": "2026-11-22T15:53:20.836Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1681518.89,
		"hash": "11e5186c6e5f76a07fa643b8ec417951593b1a2e09e787efbd0d55280669c06f"
	},
	{
		"id": "345a664b70af",
		"ts": "2026-11-22T15:53:21.094Z",
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
		"liquidityUsd": 1573807.52,
		"hash": "345a664b70af61d53a7c6259403845289db67d38f207e4cd708bfb25ba234c9e"
	},
	{
		"id": "555db938953d",
		"ts": "2026-11-22T15:53:21.348Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1678830.19,
		"hash": "555db938953d5ba861cafbeb5759ef513c2cb8ee1d1f2bd964adf5efd14d4239"
	},
	{
		"id": "3d7c74e6ce1f",
		"ts": "2026-11-22T15:53:21.583Z",
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
		"liquidityUsd": 7130307.33,
		"hash": "3d7c74e6ce1f2110fe1db136fd42e2a6b304b12dd0bb3ad1685c55a564976f25"
	},
	{
		"id": "047d27820dad",
		"ts": "2026-11-22T15:53:21.815Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 869231.87,
		"hash": "047d27820dad551475bd65d0b25ad3d44ab729f22399846cc06ec929d3f16700"
	},
	{
		"id": "ef05bad3ee68",
		"ts": "2026-11-22T15:53:22.040Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4753314.5,
		"hash": "ef05bad3ee681891132ea94653fdd7940d65cefd08750f74a3dcd0e5ae45c2fe"
	},
	{
		"id": "a435ffecccfa",
		"ts": "2026-11-22T15:53:22.289Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 525841.6,
		"hash": "a435ffecccfae88230de8163c0beafc94861da97473d329801b44bd74928110a"
	},
	{
		"id": "6e1aefb6c674",
		"ts": "2026-11-22T15:53:22.527Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 720788.64,
		"hash": "6e1aefb6c6743b10631bb1d9db3fbf2ad269a3f76561ba5744d75c549e882e11"
	},
	{
		"id": "ceb9a0801c79",
		"ts": "2026-11-22T15:53:22.745Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2988267.26,
		"hash": "ceb9a0801c79414f42669da9a8cf1a3b2f6abdcbc60a6d9ace53b36fc7a08921"
	},
	{
		"id": "3be7be6ce217",
		"ts": "2026-11-22T15:53:22.977Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 436610.71,
		"hash": "3be7be6ce217cb5115e0f1b5cafee58ddff0a84e4bf9992faf0a25c58f975107"
	},
	{
		"id": "27e54175e08e",
		"ts": "2026-11-22T15:53:23.203Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 826513.71,
		"hash": "27e54175e08e67cf86fcbd7dbc9957a9a7e252dc591a39e1c2caf76f0fa52bbf"
	},
	{
		"id": "39d40a54f87a",
		"ts": "2026-11-22T15:53:23.445Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3102354.12,
		"hash": "39d40a54f87a9dfc45597e99fedd150cc1f529d4b8cce55c5a7e16fff8c6aa14"
	},
	{
		"id": "64b98a49fb74",
		"ts": "2026-11-22T15:53:23.683Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1070271.57,
		"hash": "64b98a49fb7476b945f4f5cebc574be56b51848b3c5f5eece49b43a48dadbc6e"
	},
	{
		"id": "47af99bfca4f",
		"ts": "2026-11-22T07:43:42.746Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 80643966.21,
		"hash": "47af99bfca4fefb35daac12b0cbec692df5c6974e15e840c137af96b85040e70"
	},
	{
		"id": "7e7e5cff6c39",
		"ts": "2026-11-22T07:43:43.081Z",
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
		"liquidityUsd": 21199964.77,
		"hash": "7e7e5cff6c399902cb35eeadc818b1f0b89de26be28a849d147b391655daed10"
	},
	{
		"id": "e717e654dfa9",
		"ts": "2026-11-22T07:43:43.479Z",
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
		"liquidityUsd": 346841.51,
		"hash": "e717e654dfa9a2319b19476b2e938b83d9cd560c0ae6804a1442901ea05d6dce"
	},
	{
		"id": "058784dc54d5",
		"ts": "2026-11-22T07:43:43.924Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3326257.98,
		"hash": "058784dc54d5d537076b659382da17685f48a1f9bdbd663c688c0a7fd51c9eb5"
	},
	{
		"id": "042fbf39a934",
		"ts": "2026-11-22T07:43:44.166Z",
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
		"liquidityUsd": 398143.93,
		"hash": "042fbf39a934606abccf2469d5bed7e81444e3bdf334f0e932b7abafdf584d67"
	},
	{
		"id": "ee5800dcefd5",
		"ts": "2026-11-22T07:43:44.438Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 773644.4,
		"hash": "ee5800dcefd5c444c775eff71ef21d27bf40fa602ca5c963ab0fd8bc9b482529"
	},
	{
		"id": "a3c64664d909",
		"ts": "2026-11-22T07:43:44.692Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3326257.98,
		"hash": "a3c64664d90940e028dbdb34e61cb049968bf11f205d021a2897e1806d1d2a89"
	},
	{
		"id": "7e243a0db71e",
		"ts": "2026-11-22T07:43:44.929Z",
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
		"liquidityUsd": 1544667.82,
		"hash": "7e243a0db71e472f349c0926c8a61c2ac44b8eac493d080af67219bb3d82a140"
	},
	{
		"id": "6293f52664b4",
		"ts": "2026-11-22T07:43:45.167Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1329628.75,
		"hash": "6293f52664b4a725bffd1c2bc8d352208442dfb106ad2cdbe69b0bc72f1248e0"
	},
	{
		"id": "372379d170d7",
		"ts": "2026-11-22T07:43:45.417Z",
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
		"liquidityUsd": 6964230.61,
		"hash": "372379d170d7c3b6329d1a28b28c831f8b7d183905e4d61b11f403fa49dbe1c6"
	},
	{
		"id": "d49eff3f2813",
		"ts": "2026-11-22T07:43:45.652Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2652171.24,
		"hash": "d49eff3f281328dba60ca9a919cc10ca0ef2fd023a8dd60849090a38536c74b8"
	},
	{
		"id": "5e81dbeb31a1",
		"ts": "2026-11-22T07:43:45.874Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 813897.52,
		"hash": "5e81dbeb31a10f2cb0d6467653d4188f4ec3ddbae232e94bbfc33a0b61467f81"
	},
	{
		"id": "17a2bf4c469b",
		"ts": "2026-11-22T07:43:46.105Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3102525.81,
		"hash": "17a2bf4c469b5aa4d3a9e2193b7c4ce952098a26de1fce540e7ecdc7e0533387"
	},
	{
		"id": "11b0f78ccd27",
		"ts": "2026-11-22T07:43:46.399Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 718727.5,
		"hash": "11b0f78ccd27a392f34aea54741c0883640bd488ec0befd463c66d65ecec75d6"
	},
	{
		"id": "ef43ebaaeda9",
		"ts": "2026-11-22T07:43:46.633Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 498556.52,
		"hash": "ef43ebaaeda98ee10ec5549bcf192a3a77c355ec8428920b85dde30bd743723a"
	},
	{
		"id": "a90493c2fef9",
		"ts": "2026-11-22T07:43:46.972Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 504741.59,
		"hash": "a90493c2fef9abb67b512e9eb59895e88679108fed480716908c47539921d990"
	},
	{
		"id": "e49e20022190",
		"ts": "2026-11-22T07:43:47.434Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 788537.47,
		"hash": "e49e200221907f093c2e6c909476bb214cb937eb42af93af7f0d9d7bf123f84f"
	},
	{
		"id": "621c143aae78",
		"ts": "2026-11-22T07:43:47.688Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1103951.16,
		"hash": "621c143aae7840f1ffd63c6dd868389826dc4bce2eedc9b86517d90e73866fbe"
	},
	{
		"id": "0535bfc97e2d",
		"ts": "2026-11-22T07:43:47.982Z",
		"symbol": "SOGNI",
		"token": "0xE014d2A4da6E450f21b5050120D291e63c8940FD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 420359.92,
		"hash": "0535bfc97e2d829fc80c78bd851a89b4b37e1e9bb329e9bda6fdbb5e3819d082"
	},
	{
		"id": "2fd627d3d931",
		"ts": "2026-11-22T00:54:08.164Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 81338505.14,
		"hash": "2fd627d3d931bdbef838c9c3ac2dd16d10fd761db5a8f564c8c7872f18ca3481"
	},
	{
		"id": "e1e40e8bc80e",
		"ts": "2026-11-22T00:54:08.396Z",
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
		"liquidityUsd": 21511898.78,
		"hash": "e1e40e8bc80e77d2a5dbf8bfb5abe9a613813f190536c8dd670a24f6fb2cd10a"
	},
	{
		"id": "e6aa55a5e801",
		"ts": "2026-11-22T00:54:08.628Z",
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
		"liquidityUsd": 366260.97,
		"hash": "e6aa55a5e801a7f752a26b510d9321e5a4162c2610ef89d624fbf0acddcb76a3"
	},
	{
		"id": "cddbadccdbac",
		"ts": "2026-11-22T00:54:08.828Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3328346.88,
		"hash": "cddbadccdbac682a6f44df5903d693db435c2a93e59378d4304d16f603d7fa99"
	},
	{
		"id": "aa8dc48b71b4",
		"ts": "2026-11-22T00:54:09.046Z",
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
		"liquidityUsd": 407043.74,
		"hash": "aa8dc48b71b44c1b3ef9f244515f447ffb22991be140b66f683c49dc63464d05"
	},
	{
		"id": "a785510052e5",
		"ts": "2026-11-22T00:54:09.294Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 784974.8,
		"hash": "a785510052e534a9b4e93cb7489b71d539d89b4a24fdb4a75a71790b9a45bc55"
	},
	{
		"id": "1d4b943b42e9",
		"ts": "2026-11-22T00:54:09.505Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 84549.26,
		"hash": "1d4b943b42e99f742c233adf55a6c17d58303f7ca730c6a2191f8dfcf5e4b490"
	},
	{
		"id": "07b168caaa64",
		"ts": "2026-11-22T00:54:09.757Z",
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
		"liquidityUsd": 1563852.91,
		"hash": "07b168caaa64af32befaa308e5c420b5f3df12d9fee37a41dffecf5f831c8b12"
	},
	{
		"id": "24925de03bd0",
		"ts": "2026-11-22T00:54:09.966Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1321043.4,
		"hash": "24925de03bd01c333b9dbdbd2a3f05cce1420069e72e1783c5f8d71a5b1c585d"
	},
	{
		"id": "bdb37dd09adf",
		"ts": "2026-11-22T00:54:10.169Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2735579.84,
		"hash": "bdb37dd09adfb8b26574a65e70df966c7265ef433d733d82f5c90ddae723e8a3"
	},
	{
		"id": "65d51dde0dea",
		"ts": "2026-11-22T00:54:10.375Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 826080.86,
		"hash": "65d51dde0dea71e363285a6bc6ce71fdea5efc5a70d7d6c5934cecb664b09e1a"
	},
	{
		"id": "907874af50b9",
		"ts": "2026-11-22T00:54:10.577Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 468959.02,
		"hash": "907874af50b995eb4028ddc6fadd282fcfc2767ec425ad7f43c4fca06821de82"
	},
	{
		"id": "7810bdf6b098",
		"ts": "2026-11-22T00:54:10.784Z",
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
		"liquidityUsd": 7012572.11,
		"hash": "7810bdf6b098671022253c9d4900a85b1c3e1c3a3c995d305e3d4a610d5569c1"
	},
	{
		"id": "7fa94bad31e0",
		"ts": "2026-11-22T00:54:10.974Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2887456.24,
		"hash": "7fa94bad31e0fcb3ce9cc4efd26ff2a5516c2fbe6a921efb97696911fac544ff"
	},
	{
		"id": "d7d68163f26c",
		"ts": "2026-11-22T00:54:11.169Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 512158.4,
		"hash": "d7d68163f26cc30d78555ff5ffef87b2f6f8f4d3a2628a14801001244ae71f75"
	},
	{
		"id": "d91e7a0727e0",
		"ts": "2026-11-22T00:54:11.357Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 783558.43,
		"hash": "d91e7a0727e0a46a7b11a0a301bea361c7bae71668d752440286ecc0183becd7"
	},
	{
		"id": "c1db13ecdf72",
		"ts": "2026-11-22T00:54:11.565Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 727045.45,
		"hash": "c1db13ecdf72270b4b922b9e2e98f6af871327a04ba97c59e8f43416ed6dad02"
	},
	{
		"id": "2f56a5364947",
		"ts": "2026-11-22T00:54:11.755Z",
		"symbol": "ANTc",
		"token": "0xb20000000000000000000016e38FD364d271Ba28",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1143105.95,
		"hash": "2f56a536494731d3db6a4cf3c294f297a5b6dd2d6858862fe929f071110661c2"
	},
	{
		"id": "677d0002a880",
		"ts": "2026-11-22T00:54:11.963Z",
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
		"liquidityUsd": 1777121.5,
		"hash": "677d0002a88051d4f30ed17790e04ff28e6d1a7d8df90665b84637c39937b395"
	},
	{
		"id": "a3e87ea41ef6",
		"ts": "2026-11-21T20:45:20.609Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 81442734.08,
		"hash": "a3e87ea41ef6e37beb8ba6061a6c76478c86248202df48bcbccf67cb85b266db"
	},
	{
		"id": "b22b81cf5ec4",
		"ts": "2026-11-21T20:45:21.119Z",
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
		"liquidityUsd": 21518382.76,
		"hash": "b22b81cf5ec45743e158807d368375a4203ebcf6f696f0b2855a57e23dcdc466"
	},
	{
		"id": "52c4d6df23ff",
		"ts": "2026-11-21T20:45:21.385Z",
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
		"liquidityUsd": 363778.26,
		"hash": "52c4d6df23ff25f4d6b6a2e454a68056c4acffae13419560a54aedef8ca1b522"
	},
	{
		"id": "ece92181a10a",
		"ts": "2026-11-21T20:45:21.631Z",
		"symbol": "AERO",
		"token": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 3330128.08,
		"hash": "ece92181a10a881a8ef8541a1ed580dcee69738b61e8c6cc8a65b84ac975b33c"
	},
	{
		"id": "5111b695f7e3",
		"ts": "2026-11-21T20:45:21.895Z",
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
		"liquidityUsd": 408120.43,
		"hash": "5111b695f7e38e6d12928a68542739f54fa7408bffa534a170bb960811a5f4e1"
	},
	{
		"id": "30b339472b43",
		"ts": "2026-11-21T20:45:22.137Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 788204.58,
		"hash": "30b339472b43bf97721a9f979a46280710e3a6eca7ba0367c54aec414f957d1d"
	},
	{
		"id": "72e2dab4dbea",
		"ts": "2026-11-21T20:45:22.383Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 84549.32,
		"hash": "72e2dab4dbeab96350fdc84ed985add60c88b97fb545b70ceff23fd76db3a212"
	},
	{
		"id": "51a9a7bced58",
		"ts": "2026-11-21T20:45:22.665Z",
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
		"liquidityUsd": 1565615.3,
		"hash": "51a9a7bced58227e82dfdf2507c8c5d59c8b26086243c27694aff3bd591ac973"
	},
	{
		"id": "7effe694c496",
		"ts": "2026-11-21T20:45:22.911Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 1396041.91,
		"hash": "7effe694c4963a6f443581028ded4caa980f64e624b3248d19ebfb26e6f15835"
	},
	{
		"id": "8b68dc9e1613",
		"ts": "2026-11-21T20:45:23.180Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2795885.72,
		"hash": "8b68dc9e1613faf09f0e7c73a61976d59fa9e8aaab4ef0393d3ebef35528d660"
	}
]
