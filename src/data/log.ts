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
	"updatedAt": "2026-09-24T21:55:59.873Z",
	"tokensScored": 18492,
	"verdictsIssued": 18492,
	"safe": 15697,
	"risky": 1338,
	"likelyRug": 1457,
	"ticks": 1053
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "e7c8ce9ba1d3",
		"ts": "2026-09-24T21:55:53.511Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 153687094.04,
		"hash": "e7c8ce9ba1d35e92f377039b02fa2722cf9d47ad9a929f909a93f7ce06584c41"
	},
	{
		"id": "475037c2e7fc",
		"ts": "2026-09-24T21:55:54.186Z",
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
		"liquidityUsd": 17004085.04,
		"hash": "475037c2e7fc17af6b108eae47e90af21f1f78f1754dab1b4bd9486ca71ad65b"
	},
	{
		"id": "f20474183395",
		"ts": "2026-09-24T21:55:54.666Z",
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
		"liquidityUsd": 867628.64,
		"hash": "f20474183395c17af2f9ab64794d4fb6f608a6635452461a9607701eab25163a"
	},
	{
		"id": "d5fd14eaefaf",
		"ts": "2026-09-24T21:55:55.149Z",
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
		"liquidityUsd": 36645290.13,
		"hash": "d5fd14eaefaf84fa7d250d3e38da681ca910d2910afbc75a2afe47e4d11a2e4a"
	},
	{
		"id": "96e13964414c",
		"ts": "2026-09-24T21:55:55.627Z",
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
		"liquidityUsd": 4542802.93,
		"hash": "96e13964414c637ce0413d2d26328b2064c526a32ff324c9fbe2ea44a33a9dfb"
	},
	{
		"id": "7c200771aa18",
		"ts": "2026-09-24T21:55:55.915Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1302911.68,
		"hash": "7c200771aa183b957f38acaa50840b9055f400ab3dc4d0eb3eb63c9fa998d063"
	},
	{
		"id": "cb78fcd92584",
		"ts": "2026-09-24T21:55:56.203Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36639604.64,
		"hash": "cb78fcd925849f2bbaf2589834c664b02b844ab607c971b6bdab9a6a2f0b9064"
	},
	{
		"id": "54556559ce49",
		"ts": "2026-09-24T21:55:56.707Z",
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
		"liquidityUsd": 1453175.29,
		"hash": "54556559ce49f02ff758a1cb935147f45ffae2af2f0038faad615e2818a881dd"
	},
	{
		"id": "e255993c6aaa",
		"ts": "2026-09-24T21:55:56.986Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 114524.77,
		"hash": "e255993c6aaa4599e265414359faa866f204395956f60a203c10a4a9ce079430"
	},
	{
		"id": "f637cdd0ada6",
		"ts": "2026-09-24T21:55:57.466Z",
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
		"liquidityUsd": 19088968.58,
		"hash": "f637cdd0ada633d419428bec4607dd7371f25b1b06bd3babe9d2d829d60b12f5"
	},
	{
		"id": "8d99047773fa",
		"ts": "2026-09-24T21:55:57.765Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2973585.04,
		"hash": "8d99047773fa135aadd3fcefd46beaa84242afa07a5c2a3720eb0bad82de3a0b"
	},
	{
		"id": "16509f594648",
		"ts": "2026-09-24T21:55:58.028Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1533626.24,
		"hash": "16509f59464863b56155d2fd888d5e50fc4ab6ccbf271ee79de22237b4893958"
	},
	{
		"id": "2441eac201b6",
		"ts": "2026-09-24T21:55:58.291Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 477215.16,
		"hash": "2441eac201b6eb54ce27308c979d8d4600c651a57c6e5da4277033b6527595b5"
	},
	{
		"id": "c31700a5de91",
		"ts": "2026-09-24T21:55:58.556Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3466592.65,
		"hash": "c31700a5de9195e6b216504c629df35bd3aada06f54da272c08fb28f7abd0763"
	},
	{
		"id": "76c95ba75522",
		"ts": "2026-09-24T21:55:58.819Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 819530.53,
		"hash": "76c95ba75522a4b1a2bf55183b0484a6892af1e7237a58ffd96553974aa2a225"
	},
	{
		"id": "94f225df5965",
		"ts": "2026-09-24T21:55:59.083Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 162153.07,
		"hash": "94f225df59659dfe4a2b99d283ef3d23965cadad44a93debe9f64f6291b31a69"
	},
	{
		"id": "e10351610704",
		"ts": "2026-09-24T21:55:59.345Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2823177.94,
		"hash": "e103516107044da03f36c6b1c6473a347074d3dac70fc2a1d64bdb3350ad8170"
	},
	{
		"id": "abadca215e89",
		"ts": "2026-09-24T21:55:59.608Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 560946.9,
		"hash": "abadca215e896638a1510f880f45a952981a7be51725dd2b8a4ef3367762bb1e"
	},
	{
		"id": "278b680259c8",
		"ts": "2026-09-24T21:55:59.873Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1119221.64,
		"hash": "278b680259c8bc871c89b0160fe2e30276f63c50afca1720e47b0735e85b8761"
	},
	{
		"id": "2802c22e1df5",
		"ts": "2026-09-24T18:07:43.284Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 152867881.74,
		"hash": "2802c22e1df5ecf83bd401dea836687e4788f682449b30b0910d0b889e1708a7"
	},
	{
		"id": "a20190ed4678",
		"ts": "2026-09-24T18:07:43.657Z",
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
		"liquidityUsd": 13960095.1,
		"hash": "a20190ed4678c63de9622e4d1ca14fd7526c74420f0f3eba42b90fe524cbae0c"
	},
	{
		"id": "ad17f6a4fecb",
		"ts": "2026-09-24T18:07:43.860Z",
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
		"liquidityUsd": 860696.72,
		"hash": "ad17f6a4fecbe839c53537ebf83d56c8c23ded5a28f9c34d778959085b005a77"
	},
	{
		"id": "4d368f40e4b9",
		"ts": "2026-09-24T18:07:44.057Z",
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
		"liquidityUsd": 36566754.05,
		"hash": "4d368f40e4b9dfa70ca7fc7204ae65dce8069326848b74c0adab46d91094bc51"
	},
	{
		"id": "d6f1c277fb72",
		"ts": "2026-09-24T18:07:44.254Z",
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
		"liquidityUsd": 4512964.39,
		"hash": "d6f1c277fb72cc181392c20a9b169f8b225be1b6bde6fdeb9a84adcce9470848"
	},
	{
		"id": "f7b15b303f18",
		"ts": "2026-09-24T18:07:44.502Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1292512.77,
		"hash": "f7b15b303f18d758dd619f14797f7c9110dbc57c88df3e2a83e13b17841a28f2"
	},
	{
		"id": "f39f2869e12b",
		"ts": "2026-09-24T18:07:44.698Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36566754.05,
		"hash": "f39f2869e12b2457868bb196c3104dc33e40b30654e4d3e49b5c74d17b00b573"
	},
	{
		"id": "d57b50c7df49",
		"ts": "2026-09-24T18:07:44.908Z",
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
		"liquidityUsd": 1437561.34,
		"hash": "d57b50c7df49bd70f4e56a31bb5f0aa1c375d5cd40c25131e08ff46e3c369b7b"
	},
	{
		"id": "4a6d7643d8e2",
		"ts": "2026-09-24T18:07:45.109Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 141506.41,
		"hash": "4a6d7643d8e24e1984ffa8a65a6d5c21b85309f0d9ce341f3a6f58913198846a"
	},
	{
		"id": "8493a83c136f",
		"ts": "2026-09-24T18:07:45.304Z",
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
		"liquidityUsd": 18659754.94,
		"hash": "8493a83c136fc6aef1ab4f1419859e5d3e414534333990b6f808e57a2fcaa382"
	},
	{
		"id": "366d94b61019",
		"ts": "2026-09-24T18:07:45.527Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2935505.27,
		"hash": "366d94b610197a61564c172ef56da7ea60cc63845010759fe4d6ad92f3d1b137"
	},
	{
		"id": "ddc014678756",
		"ts": "2026-09-24T18:07:45.715Z",
		"symbol": "CATALYST",
		"token": "0xcA7A1E31b36779cf32acb18714Ab26982CF36B05",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1122031.6,
		"hash": "ddc014678756da153478244bacd425767827e825d82acc6e86d8b8551b5dc043"
	},
	{
		"id": "354309a70467",
		"ts": "2026-09-24T18:07:45.895Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1527750.86,
		"hash": "354309a70467920e32fb0648228f3e5cfd3167b8cea91cdb851377ccd2fef23c"
	},
	{
		"id": "660a40f4d0c2",
		"ts": "2026-09-24T18:07:46.092Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 483821.98,
		"hash": "660a40f4d0c2e72b52030fdc20323ab0a79fdb3580fd3d16df419b867e61455c"
	},
	{
		"id": "3f8f63773559",
		"ts": "2026-09-24T18:07:46.282Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3415773.79,
		"hash": "3f8f637735598c1224f2db645593bad67d739a9a194489226062958e18a324fb"
	},
	{
		"id": "ad5448dfa6b3",
		"ts": "2026-09-24T18:07:46.463Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 824919.59,
		"hash": "ad5448dfa6b30aa65a78ee69e3eec3edf8c89f9b720b800128a36a4d0a4b0bca"
	},
	{
		"id": "9cef5a5ba1a8",
		"ts": "2026-09-24T18:07:46.655Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 611696.98,
		"hash": "9cef5a5ba1a867f84b2c1b5bfceb9995762568ef7b22a32803a63f5ad32310e2"
	},
	{
		"id": "35ac403fba4a",
		"ts": "2026-09-24T18:07:46.854Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149758.63,
		"hash": "35ac403fba4af8847bb3a5f42dbdeeeb8bd5d4d236609e3d3dfd76f0e7a67793"
	},
	{
		"id": "e70fe1bb6eae",
		"ts": "2026-09-24T18:07:47.050Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1214834.25,
		"hash": "e70fe1bb6eaefcc1284266270e3b4cc618008a34a3b17ed0b306f5b093a2a580"
	},
	{
		"id": "4bc4cbec49f8",
		"ts": "2026-09-24T13:07:51.148Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 151626100.07,
		"hash": "4bc4cbec49f82287c92959e235008b70f522cfaad29f8886447840a0a329fb5f"
	},
	{
		"id": "43819347b10a",
		"ts": "2026-09-24T13:07:51.446Z",
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
		"liquidityUsd": 17267215.62,
		"hash": "43819347b10a7b9ed82d90a5a3e5e1aaa2c17928638c42d56009dda49c9da77d"
	},
	{
		"id": "bbc9b61b349f",
		"ts": "2026-09-24T13:07:51.708Z",
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
		"liquidityUsd": 866418.43,
		"hash": "bbc9b61b349f6a80115e60532653e431a6b16cc84302361c948fd7654dad9073"
	},
	{
		"id": "e80d2943eab7",
		"ts": "2026-09-24T13:07:51.972Z",
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
		"liquidityUsd": 36028926.45,
		"hash": "e80d2943eab78ab898e16fad706795d24c95a07ba8e628e26c1adf69d16184ce"
	},
	{
		"id": "ab3751eeb7e7",
		"ts": "2026-09-24T13:07:52.238Z",
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
		"liquidityUsd": 4380578.51,
		"hash": "ab3751eeb7e7bf2995d8d72d91410ec17178bfaab6954c87da997bcff54d0a4d"
	},
	{
		"id": "52b8c303f312",
		"ts": "2026-09-24T13:07:52.501Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1262549.22,
		"hash": "52b8c303f312963789abd619122086d45c595bdc4cf93f256e45fe9ad8600c98"
	},
	{
		"id": "a0904fe9dbdb",
		"ts": "2026-09-24T13:07:52.763Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36028926.45,
		"hash": "a0904fe9dbdbbeefc7f00e1d5832953a6937307e343fdd7bc622257f80fae60e"
	},
	{
		"id": "f3decff26606",
		"ts": "2026-09-24T13:07:53.039Z",
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
		"liquidityUsd": 2661060.5,
		"hash": "f3decff266061896356599a9535f4dec49438ad8ad82fcd87be4d3809abe9463"
	},
	{
		"id": "74a19ddbce07",
		"ts": "2026-09-24T13:07:53.300Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 209071.16,
		"hash": "74a19ddbce07807483ffa472fef78a08abdc089f8065987cad9351d25ee3bf08"
	},
	{
		"id": "3999689d519c",
		"ts": "2026-09-24T13:07:53.565Z",
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
		"liquidityUsd": 18032392.1,
		"hash": "3999689d519ce2667de55cb3ed1a625e83e4d67ec778d9afedabe5c395bcf86b"
	},
	{
		"id": "385023242618",
		"ts": "2026-09-24T13:07:53.812Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2750808.56,
		"hash": "3850232426187ec92b75e8b98d92369584f61009ee3be4d2cb2af8ef2ae5c75e"
	},
	{
		"id": "358e721c2c21",
		"ts": "2026-09-24T13:07:54.056Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1509183.72,
		"hash": "358e721c2c21b5495a68de10137d8ba310ad03c7b80913701c3cf02097a83721"
	},
	{
		"id": "7f77846ca7de",
		"ts": "2026-09-24T13:07:54.295Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 465680.9,
		"hash": "7f77846ca7de53de01ccee97aaee5f13e679ce7047ba1523831f66d2b4bedc3a"
	},
	{
		"id": "a2323cb2a270",
		"ts": "2026-09-24T13:07:54.540Z",
		"symbol": "CATALYST",
		"token": "0xcA7A1E31b36779cf32acb18714Ab26982CF36B05",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1132746.79,
		"hash": "a2323cb2a27096ee2e9aab6d301f2d90736e449105a2d66b926eea7271ad778e"
	},
	{
		"id": "d4f89e65a036",
		"ts": "2026-09-24T13:07:54.778Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 603647.01,
		"hash": "d4f89e65a036673c00158622b3b0b6828cfe08681294cb06f88c82259493eceb"
	},
	{
		"id": "1a6884c54d89",
		"ts": "2026-09-24T13:07:55.025Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 782428.95,
		"hash": "1a6884c54d8911c3771bbba4d6417ca8e758f8dc1675c6d41cd186ab87341f28"
	},
	{
		"id": "d806039d2721",
		"ts": "2026-09-24T13:07:55.269Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3389745.46,
		"hash": "d806039d27211c6ef25838763408e1d4bf51dbaae82ca531573a5e7eab60e62a"
	},
	{
		"id": "1fa8be730c44",
		"ts": "2026-09-24T13:07:55.510Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4193056.38,
		"hash": "1fa8be730c444d48cb3e14b834dc68a72fa27ae41a90354f9ce386ef759c6b6f"
	},
	{
		"id": "f16f2d61dfd9",
		"ts": "2026-09-24T13:07:55.754Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1066172.4,
		"hash": "f16f2d61dfd9869ae320de8d8653427185960a9a0eae76b8c285de734eeca91f"
	},
	{
		"id": "08a6d33a44fc",
		"ts": "2026-09-24T07:06:32.069Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 152464158.8,
		"hash": "08a6d33a44fcb61854bb16f4a52f62d8f24d769b38b91c5f6dbb9f2eb4d5fec9"
	},
	{
		"id": "4ebff9e9692b",
		"ts": "2026-09-24T07:06:32.344Z",
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
		"liquidityUsd": 16079008.8,
		"hash": "4ebff9e9692beaac0c699741e15fc11dad56e25aa828afd6d0b3b5e2063b356e"
	},
	{
		"id": "1da174672fdc",
		"ts": "2026-09-24T07:06:32.588Z",
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
		"liquidityUsd": 879973.95,
		"hash": "1da174672fdcc72e0e8183fa647ddb713db8c2b36976b92c81736e90f72ceea6"
	},
	{
		"id": "d94b5709b605",
		"ts": "2026-09-24T07:06:32.845Z",
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
		"liquidityUsd": 36045793.47,
		"hash": "d94b5709b605eb386812dc05c30ac7672e9eb30c75e8d14039bd95e58d71b6c1"
	},
	{
		"id": "08399c8cc71a",
		"ts": "2026-09-24T07:06:33.087Z",
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
		"liquidityUsd": 4458745.45,
		"hash": "08399c8cc71a61f724f70dfc72df6e6f6603c40f85661e65c13c7f5dbdefbdad"
	},
	{
		"id": "089b5c651457",
		"ts": "2026-09-24T07:06:33.343Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1273739.92,
		"hash": "089b5c6514576439d202c880b29a83dc4f02e8e31d21dc2b9d16d8c351533cf9"
	},
	{
		"id": "2dc74dfaff98",
		"ts": "2026-09-24T07:06:33.600Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36045788.77,
		"hash": "2dc74dfaff986be0806ec9b5aa91735a24decb5b15681b3990970519173bcc53"
	},
	{
		"id": "58b1a6df1992",
		"ts": "2026-09-24T07:06:33.846Z",
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
		"liquidityUsd": 1448361.68,
		"hash": "58b1a6df1992cbe401f129e31b3b0eeb52c5ad64d904176408d94468a9de8125"
	},
	{
		"id": "1ac93ed70891",
		"ts": "2026-09-24T07:06:34.105Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2825149.63,
		"hash": "1ac93ed708910603b6be53c62555da87732e06c787066e1adc6516f4c77d562e"
	},
	{
		"id": "22cde507fb11",
		"ts": "2026-09-24T07:06:34.363Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 224142.47,
		"hash": "22cde507fb1142fa84c5d7849454027729f0fd835ebd8acbba61358b88488ccf"
	},
	{
		"id": "9b3b4c3908b7",
		"ts": "2026-09-24T07:06:34.601Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1530246.93,
		"hash": "9b3b4c3908b7737799f8301182dab6cdbab82e77a32389026bc60064318b4d7f"
	},
	{
		"id": "39bf98f2341b",
		"ts": "2026-09-24T07:06:34.836Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18586904.29,
		"hash": "39bf98f2341b18c43b655fe503347ba8c5e34a120e034331dff5286e44e800fd"
	},
	{
		"id": "1cdc8507f8f9",
		"ts": "2026-09-24T07:06:35.071Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3448805.59,
		"hash": "1cdc8507f8f9a8e7d354a1177fdde4a4500cd33b00cb09d2a158344d61a1a461"
	},
	{
		"id": "939e60b0cfb0",
		"ts": "2026-09-24T07:06:35.306Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 588495.74,
		"hash": "939e60b0cfb0cabf67e4ff2d2ef6972e19bbafeb88e63aa3639cfcc2b73304c2"
	},
	{
		"id": "5a325356eb68",
		"ts": "2026-09-24T07:06:35.528Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 459942.37,
		"hash": "5a325356eb685ed2d0fe5df622fd1fcccef4a8da98566734eee7e2b56fd36cbf"
	},
	{
		"id": "069a83163d49",
		"ts": "2026-09-24T07:06:35.764Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 755148.94,
		"hash": "069a83163d49b47e9214b9426d8bbc0b9fdd73c10e1b3d1a6d9dd84264b0b850"
	},
	{
		"id": "fe80853db260",
		"ts": "2026-09-24T07:06:35.997Z",
		"symbol": "CATALYST",
		"token": "0xcA7A1E31b36779cf32acb18714Ab26982CF36B05",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 1104490.94,
		"hash": "fe80853db260214c9e8af612f8d77034df25a7a21644a17b13eeea10e7955b0e"
	},
	{
		"id": "52fdd23406f7",
		"ts": "2026-09-24T07:06:36.221Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1077739.97,
		"hash": "52fdd23406f7e85572eb0a9c5b4caafd5aeb2d93f936bce05f3f9282711500ab"
	},
	{
		"id": "7b36f9706bea",
		"ts": "2026-09-24T07:06:36.455Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3640667.3,
		"hash": "7b36f9706bea4f011be1378d788903fe86d96c0b3146cd2890b21bc465b93809"
	},
	{
		"id": "1726d3c24479",
		"ts": "2026-09-24T01:01:04.376Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 152209908.73,
		"hash": "1726d3c24479fe524aea17eab3f8c5847cd586d5f67a55ef0a5a0a5127943541"
	},
	{
		"id": "526df76e3b09",
		"ts": "2026-09-24T01:01:04.645Z",
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
		"liquidityUsd": 17444635.41,
		"hash": "526df76e3b09c9603dc55d17dc63a9686ed156fa072f1988d58b3f356dc8da30"
	},
	{
		"id": "82cdf42fc7e7",
		"ts": "2026-09-24T01:01:04.901Z",
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
		"liquidityUsd": 878840.96,
		"hash": "82cdf42fc7e78494525e677d9cb181c7b70845ededc0b61582c69aa760662aa9"
	},
	{
		"id": "84f5dadbf0df",
		"ts": "2026-09-24T01:01:05.213Z",
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
		"liquidityUsd": 35884684.36,
		"hash": "84f5dadbf0df5d0de401d4b15b8ac67ea453d51370a6c8ead94a60edbea3b513"
	},
	{
		"id": "6b8a274a9fe6",
		"ts": "2026-09-24T01:01:05.498Z",
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
		"liquidityUsd": 4454925.34,
		"hash": "6b8a274a9fe6716c9aca8fe60f14bb4e2a91410891500cf4ee1305dc12fc6efa"
	},
	{
		"id": "926b29594655",
		"ts": "2026-09-24T01:01:05.760Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1253553.81,
		"hash": "926b295946552c3726b5c8396c800d7a8ab55ffbc2a4f4709e787bf1adeb6959"
	},
	{
		"id": "666c77fd3722",
		"ts": "2026-09-24T01:01:06.046Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35884684.36,
		"hash": "666c77fd3722fc4e1538601cf0bd8892ff4b66a1d71a079427940640a35c750b"
	},
	{
		"id": "fb58eea05302",
		"ts": "2026-09-24T01:01:06.347Z",
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
		"liquidityUsd": 1364366.67,
		"hash": "fb58eea05302e5398c6fe92acf11ac17015dce14b3244406fdb91f4fc36eee75"
	},
	{
		"id": "6f43d53ee1ec",
		"ts": "2026-09-24T01:01:06.598Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2824707.43,
		"hash": "6f43d53ee1ec79609c5950838e5eebf0f378240e13d783fe194825e62de04207"
	},
	{
		"id": "69df6e08ca27",
		"ts": "2026-09-24T01:01:06.992Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1530508.61,
		"hash": "69df6e08ca27db8eb03c768f1e57c3f7edc2f96f0402af63b4a7fd910de26494"
	},
	{
		"id": "ffc748e3d3a3",
		"ts": "2026-09-24T01:01:07.240Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 656986.49,
		"hash": "ffc748e3d3a3338569fd147aa5c96393f2a27055d06d0e3475840a5ad35bd37e"
	},
	{
		"id": "ab04f0c5f6d6",
		"ts": "2026-09-24T01:01:07.486Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18419404.68,
		"hash": "ab04f0c5f6d6155abd8da06f0c86ec538aa0414b253084e1dbddb4d20b0f6ac0"
	},
	{
		"id": "b834927b9159",
		"ts": "2026-09-24T01:01:07.739Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 211190.45,
		"hash": "b834927b9159f0bbe249a56bba4387fac5db81f022d8cdb2e48d88d4936658a3"
	},
	{
		"id": "72e0bd7c2f04",
		"ts": "2026-09-24T01:01:07.982Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3381425.79,
		"hash": "72e0bd7c2f04d943607f3c306dc7780e705188e312b11624b0ae65f9a2759070"
	},
	{
		"id": "2123cc7602eb",
		"ts": "2026-09-24T01:01:08.213Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 757321.55,
		"hash": "2123cc7602ebbf755cde435da937ad292b460831bdb84750be24a9317ba2ecd6"
	},
	{
		"id": "014e6f9aa7ee",
		"ts": "2026-09-24T01:01:08.456Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 750068.46,
		"hash": "014e6f9aa7ee345abcc991f97cfe0aa713c67c6821b0bb5a6f0dff745a5f5807"
	},
	{
		"id": "063d890a4eb5",
		"ts": "2026-09-24T01:01:08.685Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1095798.78,
		"hash": "063d890a4eb5dbb50e9e58d1aa4fb8e3d02eef19b1196ecaa8af625182258895"
	},
	{
		"id": "d237036a6233",
		"ts": "2026-09-24T01:01:08.913Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1946472.01,
		"hash": "d237036a6233ae7bf87fa6b90f31ad6a8a0219051e963df8003730f2f6f376ff"
	},
	{
		"id": "4a2280be719d",
		"ts": "2026-09-24T01:01:09.155Z",
		"symbol": "CATALYST",
		"token": "0xcA7A1E31b36779cf32acb18714Ab26982CF36B05",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 1171695.9,
		"hash": "4a2280be719d126c49a576f7cc40a121eacbb8c682c92e03c7813e5ea9a58c2b"
	},
	{
		"id": "4531970967a9",
		"ts": "2026-09-23T22:00:39.118Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 151676829.14,
		"hash": "4531970967a921b578c384f8875a52a98994baba37880aff833b4c7ea856b071"
	},
	{
		"id": "b0c892dec613",
		"ts": "2026-09-23T22:00:39.498Z",
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
		"liquidityUsd": 12993722.58,
		"hash": "b0c892dec613bb68978d9fb78d7833651493af2e938636092af1ff5b6326d963"
	},
	{
		"id": "41fd43ec40d5",
		"ts": "2026-09-23T22:00:39.747Z",
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
		"liquidityUsd": 879063.55,
		"hash": "41fd43ec40d5483d80b7ca43eb285415e9519951d96ac88e95568a2049d1e61b"
	},
	{
		"id": "3ae107f9b56d",
		"ts": "2026-09-23T22:00:40.014Z",
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
		"liquidityUsd": 35845951.78,
		"hash": "3ae107f9b56d268754bd26dbc0466861fc51fb8b4d169b732cbceca3a90efca4"
	},
	{
		"id": "aa14b87f6cb9",
		"ts": "2026-09-23T22:00:40.312Z",
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
		"liquidityUsd": 4432394.82,
		"hash": "aa14b87f6cb9ba10ca6cb94b7279e72a56111ccce6a4d6141306412741b0c541"
	},
	{
		"id": "b0343e5a2a4f",
		"ts": "2026-09-23T22:00:40.574Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1252461.9,
		"hash": "b0343e5a2a4f154c17907e8cf2fd61115f39c60a39826f012dd0f4759db4ae2d"
	},
	{
		"id": "ffc1b136bc0c",
		"ts": "2026-09-23T22:00:40.890Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35845951.78,
		"hash": "ffc1b136bc0c5dff98ba31546c9bff3184d7be6bd5b9783f2f961b2bccfd0219"
	},
	{
		"id": "098c4b35e162",
		"ts": "2026-09-23T22:00:41.194Z",
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
		"liquidityUsd": 1362577.42,
		"hash": "098c4b35e162d3f41da4fc9b949c4deed403b0b5544a0d9376da459f4d137c18"
	},
	{
		"id": "e2f2cf4a0908",
		"ts": "2026-09-23T22:00:41.464Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2802482.97,
		"hash": "e2f2cf4a09084e082108d206da41fc9ef98d9cf05d8994e4624c685756befd99"
	},
	{
		"id": "993e503de516",
		"ts": "2026-09-23T22:00:41.734Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1579407,
		"hash": "993e503de51608f6cf3329e7ea4858792b32964f4e0250deb77e153167c88997"
	},
	{
		"id": "9a2d685784f1",
		"ts": "2026-09-23T22:00:41.979Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 640114.81,
		"hash": "9a2d685784f1874f6febc1c194ff7d2a76bdffed02ee03bf137ad31422570cd3"
	},
	{
		"id": "19c2d956ef3c",
		"ts": "2026-09-23T22:00:42.207Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 216998.81,
		"hash": "19c2d956ef3c783afec74590ebe620daf3488238501982ae3d398a4b69ef9530"
	},
	{
		"id": "effc7dab7655",
		"ts": "2026-09-23T22:00:42.447Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 740897.42,
		"hash": "effc7dab765547f57afde3ef99fa010aa95f537f12697b668933c1bd0fe87ba2"
	},
	{
		"id": "c14b66503a2b",
		"ts": "2026-09-23T22:00:42.763Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3362058.45,
		"hash": "c14b66503a2b9d5da308838e5f3e4bb3080d396fda083f13a3ea882113ae604b"
	},
	{
		"id": "4a519885e1e2",
		"ts": "2026-09-23T22:00:42.988Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18258487.31,
		"hash": "4a519885e1e247e9b44055ac58d19dceb378aaf7b15bc6decb771a146fa6e6c8"
	},
	{
		"id": "9010d72490f9",
		"ts": "2026-09-23T22:00:43.229Z",
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
		"liquidityUsd": 1434571.19,
		"hash": "9010d72490f93a816df2ebe1a6d4b6a521a588ad92fb6d88674edf04917448f1"
	},
	{
		"id": "4332f7f98a72",
		"ts": "2026-09-23T22:00:43.462Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 790267.24,
		"hash": "4332f7f98a728851a28928a7df7a0c87c5568ba175d98cf19182a095416211e3"
	},
	{
		"id": "0df9454c7c6e",
		"ts": "2026-09-23T22:00:43.705Z",
		"symbol": "SR",
		"token": "0x10c56F005a379f8eAfc88ff5c3f40d30F0031AC9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 111526.17,
		"hash": "0df9454c7c6e635b4cecbbf336c661b8a8e46688f3e2b7629aa7917b45e14917"
	},
	{
		"id": "ab4f52ab6b13",
		"ts": "2026-09-23T22:00:43.947Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1503360.19,
		"hash": "ab4f52ab6b1353059cc8e98430163afa7c7f1c1514430ab32ec7680c64d5d669"
	},
	{
		"id": "029d3345a737",
		"ts": "2026-09-23T18:12:50.468Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 151148719.88,
		"hash": "029d3345a737cbbbbfd66feabbd3f8f20ac823f57bd0bb293be9a64f69502bd0"
	},
	{
		"id": "3543ec288d41",
		"ts": "2026-09-23T18:12:50.714Z",
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
		"liquidityUsd": 16896616.67,
		"hash": "3543ec288d415d32c101f567d9002a4d6f95a93da4e14d48fe88547e761bade2"
	},
	{
		"id": "c70b5151f590",
		"ts": "2026-09-23T18:12:50.958Z",
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
		"liquidityUsd": 876455.3,
		"hash": "c70b5151f59098f7b386a3c556f03779bd60de60078ffbebab4291ae997b16da"
	},
	{
		"id": "cc77a93dab96",
		"ts": "2026-09-23T18:12:51.205Z",
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
		"liquidityUsd": 36064600.4,
		"hash": "cc77a93dab96d6ec892e21c4b3dbf7b14e5a74956d46da019e603249de190b6d"
	},
	{
		"id": "af2d12866db0",
		"ts": "2026-09-23T18:12:51.463Z",
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
		"liquidityUsd": 4434071.47,
		"hash": "af2d12866db0b0fb27a9eea1d8aed1fc8236ec503d3d447b160504efeafb8da0"
	},
	{
		"id": "4c450c846b92",
		"ts": "2026-09-23T18:12:51.717Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1254929.19,
		"hash": "4c450c846b92b247c01ef7cc1830c7945d7e11d4063f418c69808bea019ae0f2"
	},
	{
		"id": "35fcfb353c94",
		"ts": "2026-09-23T18:12:51.973Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36069931.06,
		"hash": "35fcfb353c9476fc62095d875c301a0524922cc699f6178893c1548d26fc3935"
	},
	{
		"id": "67acdbe41839",
		"ts": "2026-09-23T18:12:52.428Z",
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
		"liquidityUsd": 1356458.48,
		"hash": "67acdbe418390b6e7b33961d17b7cccda88e82b3389316cf260c4a31bfe58b72"
	},
	{
		"id": "56b058c0000e",
		"ts": "2026-09-23T18:12:52.682Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2703301.48,
		"hash": "56b058c0000eb887ab3e1dbd085f61cf04a9586cd807673360404df6c758b104"
	},
	{
		"id": "c0561fee2a31",
		"ts": "2026-09-23T18:12:52.927Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 679920.64,
		"hash": "c0561fee2a31e95dd58999c5c5b9a17faf67072e3705e2db3700c23387b0dd07"
	},
	{
		"id": "841ef3a255db",
		"ts": "2026-09-23T18:12:53.177Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 744186.34,
		"hash": "841ef3a255dbc236f8da3c74e558ebe2b24ebc16e3a1763ac9f2f001f64542c0"
	},
	{
		"id": "196d3fc352d0",
		"ts": "2026-09-23T18:12:53.402Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1586978.88,
		"hash": "196d3fc352d001131862f7ee62708256201e09f6a3da8a7f9426521d15af8f2c"
	},
	{
		"id": "96da6f025c08",
		"ts": "2026-09-23T18:12:53.621Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3386029.56,
		"hash": "96da6f025c08e7aa487ecd145b568105894751d7a505e252fbd40cf55607e816"
	},
	{
		"id": "0688e832243f",
		"ts": "2026-09-23T18:12:53.848Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18461183.74,
		"hash": "0688e832243f38f13497cf55b19d6eee6e74730cc49b02622fc27604b8ef9212"
	},
	{
		"id": "d58eb14abcd4",
		"ts": "2026-09-23T18:12:54.174Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 815130.05,
		"hash": "d58eb14abcd466c392b0c28e54d9879820ecada638eb522290e18920d45034b0"
	},
	{
		"id": "81e9a67a151c",
		"ts": "2026-09-23T18:12:54.398Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 189349.48,
		"hash": "81e9a67a151c4db5d1c9213b4debe810f46b958f549333b8aaff746ca4fd9807"
	},
	{
		"id": "7223ea6be816",
		"ts": "2026-09-23T18:12:54.618Z",
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
		"liquidityUsd": 1461032.53,
		"hash": "7223ea6be816ba42d76ea1c0ab77a488f079130fa21b8c904b4fa3cd6bc294fe"
	},
	{
		"id": "a2d3038c1c55",
		"ts": "2026-09-23T18:12:54.859Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 943029.39,
		"hash": "a2d3038c1c556c3f2fcd0bc2b4fdfd8c5ae8c99b39fa70782e3ad0888e1a4024"
	},
	{
		"id": "605a56f2fe43",
		"ts": "2026-09-23T18:12:55.087Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1084523.77,
		"hash": "605a56f2fe43ac6b60b6ff3c42b7bafca7c5d86ba608069a687b448d89a75856"
	},
	{
		"id": "7703e4cc79cb",
		"ts": "2026-09-23T13:18:34.725Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 152928679.89,
		"hash": "7703e4cc79cb6b4568b211cb9341b4680f94b170c1cbfadbf9799a603e13a54d"
	},
	{
		"id": "3f3e174cca5b",
		"ts": "2026-09-23T13:18:35.226Z",
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
		"liquidityUsd": 13086966.38,
		"hash": "3f3e174cca5b644031cff6bada71e2367737fd0c3bdb6b3626c7b6a6f3eff30d"
	},
	{
		"id": "008676fdfc4d",
		"ts": "2026-09-23T13:18:35.495Z",
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
		"liquidityUsd": 894362.52,
		"hash": "008676fdfc4de2f2aa75f4f182c40f12d435dd9e343e9ed2c295d2165326c26b"
	},
	{
		"id": "d4e9a301241e",
		"ts": "2026-09-23T13:18:35.764Z",
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
		"liquidityUsd": 36782054.13,
		"hash": "d4e9a301241e3ff45a393f15659303a30745bb2c1a227857b3f8b0adce0b19d1"
	},
	{
		"id": "891f8ca9d4c3",
		"ts": "2026-09-23T13:18:36.035Z",
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
		"liquidityUsd": 4620140.69,
		"hash": "891f8ca9d4c3fb2bfdea1bba258e366ba2068a19a9c33a35fb2f307b8423598d"
	},
	{
		"id": "f0677508a58f",
		"ts": "2026-09-23T13:18:36.312Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1325968.3,
		"hash": "f0677508a58fcc9e69117d84157b7514dc23486342232845ac5acd94115b411c"
	},
	{
		"id": "c5a2a10a1361",
		"ts": "2026-09-23T13:18:36.581Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36782054.13,
		"hash": "c5a2a10a13614c7a2b5131c6b331624bad47c100a4b9836e3964c433f04e9092"
	},
	{
		"id": "0a6ff992af8a",
		"ts": "2026-09-23T13:18:36.855Z",
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
		"liquidityUsd": 1379901.09,
		"hash": "0a6ff992af8ac075bec5915a1e40547f39d155c5e56781105a48a5b82a9a91b7"
	},
	{
		"id": "7ac7a1b6412c",
		"ts": "2026-09-23T13:18:37.113Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 701381.24,
		"hash": "7ac7a1b6412c8302b93962aeb5aad3a3d50358a4a7fa473440b9ac12c9c90736"
	},
	{
		"id": "a03066e3eedb",
		"ts": "2026-09-23T13:18:37.389Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2893842.56,
		"hash": "a03066e3eedb82e6db013a38bd6fef925db82f428fa4ec76949f49774bfe30a8"
	},
	{
		"id": "1bbe03e2027b",
		"ts": "2026-09-23T13:18:37.633Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 778722.05,
		"hash": "1bbe03e2027b650ec62bac9f9ff0f00931a471fb3abc82aa1b11ba088c777653"
	},
	{
		"id": "fe013c368ada",
		"ts": "2026-09-23T13:18:37.883Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19014985.83,
		"hash": "fe013c368ada396edf58d0c6fea655e0eefde5a8ef049999eaf41ffa5cd017e8"
	},
	{
		"id": "fe1d65181c6b",
		"ts": "2026-09-23T13:18:38.123Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3463447.08,
		"hash": "fe1d65181c6b5914caef7971d0a4515a919dfba9f238b45c7260e73e4b5d742e"
	},
	{
		"id": "d13b411782dc",
		"ts": "2026-09-23T13:18:38.376Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 826406.71,
		"hash": "d13b411782dc909b2b1c5999f01b20d2df0b313d5aa9b6e513021864fb6f0eae"
	},
	{
		"id": "2bebbb7494da",
		"ts": "2026-09-23T13:18:38.618Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1533706.75,
		"hash": "2bebbb7494daf79bdf7c200e9679d5bfc811b48a24df4270f5db308cddb99c0e"
	},
	{
		"id": "4c38dccf0ca3",
		"ts": "2026-09-23T13:18:38.993Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 483181.34,
		"hash": "4c38dccf0ca32ba1382dd628dc6c433f98bb6ae511159233d9aee15303b66aef"
	},
	{
		"id": "e08b2b77b9b4",
		"ts": "2026-09-23T13:18:39.235Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1132710.98,
		"hash": "e08b2b77b9b432b931439304ceccbeb11d72bf2fe262e938203a5f9a4fd0c58c"
	},
	{
		"id": "f7f725b12544",
		"ts": "2026-09-23T13:18:39.485Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1084131.97,
		"hash": "f7f725b1254460552b05904227f49d0e2371e0acec3a8a9f174705c9aa0510a5"
	},
	{
		"id": "d52c66b93868",
		"ts": "2026-09-23T13:18:39.740Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2094843.16,
		"hash": "d52c66b93868bce9cb32be688acca6e92c9cf8ae7a51dd1bf160a4e3a01c9d79"
	},
	{
		"id": "f620aff1f47d",
		"ts": "2026-09-23T07:16:15.423Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 153549769.33,
		"hash": "f620aff1f47d276d0d01d186b7e8beaf166ecfd95a8f6e550841cb47c5dcf9c7"
	},
	{
		"id": "f5c5a863c271",
		"ts": "2026-09-23T07:16:15.687Z",
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
		"liquidityUsd": 15524961.7,
		"hash": "f5c5a863c271f5351acee984e941759761a6dada38330eb2b7601c32b57fb5ef"
	},
	{
		"id": "8e674198674d",
		"ts": "2026-09-23T07:16:15.895Z",
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
		"liquidityUsd": 909615.43,
		"hash": "8e674198674d36195e0d8a86df7612053da9c9a8bb6b3e2006785c5c624a2880"
	},
	{
		"id": "4d5a28fdf6fe",
		"ts": "2026-09-23T07:16:16.139Z",
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
		"liquidityUsd": 36941101.14,
		"hash": "4d5a28fdf6feb6ef0c7281abb0f659c43527dbe3bb252cc9f55b96878066c708"
	},
	{
		"id": "fa77b1b257d3",
		"ts": "2026-09-23T07:16:16.353Z",
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
		"liquidityUsd": 4679583.31,
		"hash": "fa77b1b257d333b8ec2870c80fba518d9924a660a8f09e99ffe0fdffb4ae9e87"
	},
	{
		"id": "e2d3d017c733",
		"ts": "2026-09-23T07:16:16.564Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1343395.05,
		"hash": "e2d3d017c733154412e28eb6570ac5ec78e7c5ef390b2d62bf00b5ea963078a4"
	},
	{
		"id": "63ff68afdc82",
		"ts": "2026-09-23T07:16:16.771Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36941101.14,
		"hash": "63ff68afdc8268919738fbc6b6f72ccf0defcc5a2253fb0876852a380135197b"
	},
	{
		"id": "d8b088ae4447",
		"ts": "2026-09-23T07:16:17.036Z",
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
		"liquidityUsd": 1355727.28,
		"hash": "d8b088ae4447dd9b300096d99b756d83c7a078804e2eea04c5e45295ad079812"
	},
	{
		"id": "53649beb3197",
		"ts": "2026-09-23T07:16:17.253Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 695790.49,
		"hash": "53649beb3197ae59dc3c4e3d96ceb620977e6d1630fb2d5b288c6b70739f7b60"
	},
	{
		"id": "f2a3821d514e",
		"ts": "2026-09-23T07:16:17.470Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2959846.72,
		"hash": "f2a3821d514e00b02acfe21c3169d373448add9c853150a8982ff1fd13261ad0"
	},
	{
		"id": "0e57383c3c30",
		"ts": "2026-09-23T07:16:17.663Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 842660.24,
		"hash": "0e57383c3c30058afde5aacf52c2efaaa6d6fb55185eee2fcf8e69b402d8728d"
	},
	{
		"id": "9fd13dbf5577",
		"ts": "2026-09-23T07:16:17.855Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 19200466.75,
		"hash": "9fd13dbf5577e07c3f03f6202e313e7cac14494836e68ffcceb2abd4bb79fb88"
	},
	{
		"id": "854dbcedc690",
		"ts": "2026-09-23T07:16:18.044Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3623947.66,
		"hash": "854dbcedc6901a1a367f17c8df7058655f0dc06582aabc876f3d243e46c97640"
	},
	{
		"id": "f0cfcb9ae23d",
		"ts": "2026-09-23T07:16:18.246Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1546973.08,
		"hash": "f0cfcb9ae23d49c0fa39fc60dfb9dc2e3a1739b169acbbe471e13e322e8b3a1b"
	},
	{
		"id": "9e042bb55e0f",
		"ts": "2026-09-23T07:16:18.438Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1157827.31,
		"hash": "9e042bb55e0fa3548bab7559c9c6b193fff83dbd8a7e9799786f4dd0f494913b"
	},
	{
		"id": "c23f6dd94635",
		"ts": "2026-09-23T07:16:18.632Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 493461.72,
		"hash": "c23f6dd9463518a624faa3beb85dba3e97984cb3a9a44748be5b42b945be6233"
	},
	{
		"id": "fdcc06a35da5",
		"ts": "2026-09-23T07:16:18.902Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 884790.51,
		"hash": "fdcc06a35da5cad43f4420e3a3ea75a091ba8890f7de5ff28d2a9595f64a75b5"
	},
	{
		"id": "604ff8da7440",
		"ts": "2026-09-23T07:16:19.094Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1107568.93,
		"hash": "604ff8da7440fc7546f2040bd69bc1e56820b903497dcdfa8d7fbde71b3f00a0"
	},
	{
		"id": "7a3d81dc8356",
		"ts": "2026-09-23T07:16:19.284Z",
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
		"liquidityUsd": 1556491.22,
		"hash": "7a3d81dc8356d398164e2a99523603af2827bf66f16856f555125c0dab993864"
	},
	{
		"id": "a7d5342c1e2e",
		"ts": "2026-09-23T01:12:41.823Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 153583745.13,
		"hash": "a7d5342c1e2ecb8f75c335ad4c7f68cb9d4a5585cb9474fe713f03b328081ae6"
	},
	{
		"id": "59cad1f6a113",
		"ts": "2026-09-23T01:12:42.079Z",
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
		"liquidityUsd": 17585789.75,
		"hash": "59cad1f6a113a17d128d5ac8ed03cb4cebf2fab7b76f86a666302bc0a141ae10"
	},
	{
		"id": "150c5a2a3d0d",
		"ts": "2026-09-23T01:12:42.330Z",
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
		"liquidityUsd": 899905.37,
		"hash": "150c5a2a3d0d61a86a1fb7a64b8648c7991cb1727c4d62a6f87349c15f0d1e92"
	},
	{
		"id": "8a67ebcfe0ba",
		"ts": "2026-09-23T01:12:42.585Z",
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
		"liquidityUsd": 36601234.2,
		"hash": "8a67ebcfe0ba8aca19ef607ad409b05f269a32fe4590da02035e19bb1055fe44"
	},
	{
		"id": "6708243ce1a9",
		"ts": "2026-09-23T01:12:42.831Z",
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
		"liquidityUsd": 4806477.62,
		"hash": "6708243ce1a908b5a286e08abd7dddf7f06256e8157a2a8caea986a1efecd3cd"
	},
	{
		"id": "79e691697102",
		"ts": "2026-09-23T01:12:43.079Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1337546.61,
		"hash": "79e69169710268bb32730ccb92bed08f37cce0794012ab8f32b787273506bb95"
	},
	{
		"id": "68aa5ee5fd7a",
		"ts": "2026-09-23T01:12:43.321Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36601234.2,
		"hash": "68aa5ee5fd7a03a9846cf41010b9a8972f0ef3cf219e2f95ca808b6992de8ed4"
	},
	{
		"id": "d0682197fac8",
		"ts": "2026-09-23T01:12:43.609Z",
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
		"liquidityUsd": 1354265.08,
		"hash": "d0682197fac84a768146bfecfe22cd90a3a3cd8f25c9ad0abbade8c0a33517ab"
	},
	{
		"id": "86b2a4e68925",
		"ts": "2026-09-23T01:12:43.852Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 679598.42,
		"hash": "86b2a4e689253b8fafe353095720d44d69fee96d9dbb4eac2d07415d3e8126c5"
	},
	{
		"id": "67853afb4379",
		"ts": "2026-09-23T01:12:44.098Z",
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
		"liquidityUsd": 19411255.87,
		"hash": "67853afb437986df5eb20635d84194213840f9fe285f66d336901b08cbc4abec"
	},
	{
		"id": "bd8c458d0e28",
		"ts": "2026-09-23T01:12:44.358Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2853329.66,
		"hash": "bd8c458d0e28e4409810d54c9f798052daff3180253982bd6752a8e1169d7413"
	},
	{
		"id": "254ef408e4a8",
		"ts": "2026-09-23T01:12:44.585Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 934141.73,
		"hash": "254ef408e4a84d02747557d5bba72761546922ab573157dab87be84a3da057b1"
	},
	{
		"id": "6051d96bf825",
		"ts": "2026-09-23T01:12:44.822Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1143482.96,
		"hash": "6051d96bf8252801ac34078c20c0ff3acbaf950159b49a547406af8ae9e95d06"
	},
	{
		"id": "939700b8c3ee",
		"ts": "2026-09-23T01:12:45.048Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 535950.16,
		"hash": "939700b8c3ee4771cdda6b233e4c8091e6da52a35ae3c030303a087ea4308705"
	},
	{
		"id": "242c1502cc76",
		"ts": "2026-09-23T01:12:45.279Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1558993.76,
		"hash": "242c1502cc76a6419d1f55d839524403ab3b29af4a45230a9c35d9c6ddaca35f"
	},
	{
		"id": "487aeb1c30d8",
		"ts": "2026-09-23T01:12:45.509Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1096664.13,
		"hash": "487aeb1c30d8d1a35fc2157c308ea707259cf2895047287aab0ae919cdd5bfd7"
	},
	{
		"id": "987e2fd5516c",
		"ts": "2026-09-23T01:12:45.738Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3619366.46,
		"hash": "987e2fd5516cea9a559996110c618ac39165f34ae227eeb6002533f2039cf651"
	},
	{
		"id": "2c017f2409b0",
		"ts": "2026-09-23T01:12:45.965Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 550923.57,
		"hash": "2c017f2409b0d7941b7cfa0ae17c09d08c1b7f8526c141f6321c2e328e63cddf"
	},
	{
		"id": "0951bc4239cb",
		"ts": "2026-09-23T01:12:46.192Z",
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
		"liquidityUsd": 1629453.76,
		"hash": "0951bc4239cb293cb3dc55f1e0c25f7e416763ff939755662f0bf5ce26543b86"
	},
	{
		"id": "fe1f99acbfd6",
		"ts": "2026-09-22T22:41:36.786Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 153284766.91,
		"hash": "fe1f99acbfd624b6e9ae9b005208b8bf5ff070afbf23343d4ef3e4d950ce1c67"
	},
	{
		"id": "799b2ffc24ea",
		"ts": "2026-09-22T22:41:37.063Z",
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
		"liquidityUsd": 17253009.45,
		"hash": "799b2ffc24ea4bcf2f0da0401830bd89f1265777a9f91d03356d17e3eaeb2dcd"
	},
	{
		"id": "58ca10591af0",
		"ts": "2026-09-22T22:41:37.322Z",
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
		"liquidityUsd": 895693.43,
		"hash": "58ca10591af078d0f01790b5447ba4b55038cb61b75fae60f3156cded9cf1127"
	},
	{
		"id": "ecf5649e21a4",
		"ts": "2026-09-22T22:41:37.586Z",
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
		"liquidityUsd": 36133912.32,
		"hash": "ecf5649e21a44284c96a590ed3a9ff67f29c8b8e02b8176a6678de35714f5e1a"
	},
	{
		"id": "8d38168dc8bf",
		"ts": "2026-09-22T22:41:37.849Z",
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
		"liquidityUsd": 4666617.59,
		"hash": "8d38168dc8bf409a5cc8fc043e60121c5a7e5923b43d29fdb4f9b40382634447"
	},
	{
		"id": "90b295c9a1e2",
		"ts": "2026-09-22T22:41:38.123Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1329644.53,
		"hash": "90b295c9a1e23c16550f28b4c48dac29f17aa093c834a7cb4aac8a3a7b4cd619"
	},
	{
		"id": "54426be14303",
		"ts": "2026-09-22T22:41:38.384Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 36133912.32,
		"hash": "54426be14303975afe91fc79b7833f82d93d58eb3b384559220c6117d205400b"
	},
	{
		"id": "5ac6e763edb5",
		"ts": "2026-09-22T22:41:38.643Z",
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
		"liquidityUsd": 1371277,
		"hash": "5ac6e763edb5cce9f5a8b589360462e4554d4f1ec30abffbb5914612a135e6c1"
	},
	{
		"id": "0bd7d86fcf4b",
		"ts": "2026-09-22T22:41:38.902Z",
		"symbol": "TRUE",
		"token": "0x21CFCFc3d8F98fC728f48341D10Ad8283F6EB7AB",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 607041.82,
		"hash": "0bd7d86fcf4bd2cb0b263f738005d2e931c38a65123462668f6b7a765b5d5e00"
	},
	{
		"id": "ee2ed7cf81d4",
		"ts": "2026-09-22T22:41:39.164Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 2826129.91,
		"hash": "ee2ed7cf81d409566fc03ffce6436838ccb743509b6de640ede4770fad374e49"
	}
]
