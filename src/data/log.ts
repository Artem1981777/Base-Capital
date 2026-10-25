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
	"updatedAt": "2026-10-25T00:46:32.994Z",
	"tokensScored": 21328,
	"verdictsIssued": 21328,
	"safe": 18185,
	"risky": 1502,
	"likelyRug": 1641,
	"ticks": 1203
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "7f58c245cc8b",
		"ts": "2026-10-25T00:46:29.180Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 158914756.54,
		"hash": "7f58c245cc8beeeb8645c9b387206a5b04fda4723fbad1109d73714c81769904"
	},
	{
		"id": "af86229b6819",
		"ts": "2026-10-25T00:46:29.545Z",
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
		"liquidityUsd": 17355108.26,
		"hash": "af86229b68199a9c9802cbdcc62b45bc2919f7df6c8951d320d073dcb722a43b"
	},
	{
		"id": "8bf879ad2607",
		"ts": "2026-10-25T00:46:29.769Z",
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
		"liquidityUsd": 255609.39,
		"hash": "8bf879ad26079687004d88cc37791f119d19147d623b7d6333ea8f21083b3bb1"
	},
	{
		"id": "b565d4dd0909",
		"ts": "2026-10-25T00:46:29.976Z",
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
		"liquidityUsd": 8029695.18,
		"hash": "b565d4dd09093c00e9cb9b46635974affe085827eb3054a44cbdf0aec9544aee"
	},
	{
		"id": "bd554c095aa9",
		"ts": "2026-10-25T00:46:30.181Z",
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
		"liquidityUsd": 2142826.81,
		"hash": "bd554c095aa943833325618e921bdfb54c2be6a85baa15be1f098bd4975e6c58"
	},
	{
		"id": "54ff4740953a",
		"ts": "2026-10-25T00:46:30.407Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1126664.57,
		"hash": "54ff4740953a1496d1a84d68904ed5a3f5ba48fd932ba337cd720d576e30f378"
	},
	{
		"id": "dc7fdfb10845",
		"ts": "2026-10-25T00:46:30.618Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2466288.49,
		"hash": "dc7fdfb10845d71497821dc028693bcc61704d7348ee98f37c298590b4cb9c0a"
	},
	{
		"id": "9f0a69a0fcf7",
		"ts": "2026-10-25T00:46:30.824Z",
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
		"liquidityUsd": 2219589.85,
		"hash": "9f0a69a0fcf78123912913a0aa3eb66426d3a57060a5c6814d0e2e3814343da0"
	},
	{
		"id": "a808fcfbd61c",
		"ts": "2026-10-25T00:46:31.024Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1198764.23,
		"hash": "a808fcfbd61c26023076cd99301c4021a3c487759181f900ca208946b28a21dc"
	},
	{
		"id": "3928b3dc2660",
		"ts": "2026-10-25T00:46:31.221Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1800602.26,
		"hash": "3928b3dc2660ee0a26452c48e42192f47699e7c5a682b23103fb9e68d268ad24"
	},
	{
		"id": "133cc74f2573",
		"ts": "2026-10-25T00:46:31.412Z",
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
		"liquidityUsd": 476183.85,
		"hash": "133cc74f25731dc354a80283832c16a0e50aed5cd7adf5ab22fefd2a70e82663"
	},
	{
		"id": "552b53381e3d",
		"ts": "2026-10-25T00:46:31.595Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2466288.49,
		"hash": "552b53381e3dbc92d2fe1c3f92b8deb87fbe599bd5b363248def1993018fc6c9"
	},
	{
		"id": "83d3f3dd286f",
		"ts": "2026-10-25T00:46:31.782Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 669863.35,
		"hash": "83d3f3dd286f7478676eaa9a835d0de54123fb4513f66536ad059a2de3c3bb8b"
	},
	{
		"id": "c9a60887213d",
		"ts": "2026-10-25T00:46:32.013Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 950261.97,
		"hash": "c9a60887213d101f08c5ba6cb22e09351115f11957803baf1625031b7ef773e3"
	},
	{
		"id": "b30392933702",
		"ts": "2026-10-25T00:46:32.203Z",
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
		"liquidityUsd": 9000294.57,
		"hash": "b30392933702e8bde159ee6b000e86cdadd52c30b46764e54258ee3216882a27"
	},
	{
		"id": "fcf46c44d4f2",
		"ts": "2026-10-25T00:46:32.391Z",
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
		"liquidityUsd": 3119068.71,
		"hash": "fcf46c44d4f2044aec23b74c7404534fbcada06a9223aef8cab1fb5239fa68b4"
	},
	{
		"id": "81b28045eb69",
		"ts": "2026-10-25T00:46:32.626Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 963263.03,
		"hash": "81b28045eb69bfcd2dccca8e763c7cd6988486302692feafd97a3aba590c4c63"
	},
	{
		"id": "b114940ebf94",
		"ts": "2026-10-25T00:46:32.812Z",
		"symbol": "UP",
		"token": "0x5b2193fDc451C1f847bE09CA9d13A4Bf60f8c86B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 565519.44,
		"hash": "b114940ebf94ae8f09d8c9cf446b3d61b2341970f97772b44c6a3caedcbe0ba2"
	},
	{
		"id": "43927cb5d92a",
		"ts": "2026-10-25T00:46:32.994Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 514417.78,
		"hash": "43927cb5d92adfddc52a21057c08e9c4ca1397561cebded2923c5253c953d9d2"
	},
	{
		"id": "34d9eeea3cfb",
		"ts": "2026-10-24T22:51:10.484Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 158336492.05,
		"hash": "34d9eeea3cfbd1167659b0b239c856b4a4b19bfc67b095d4976a7a65a732d3c4"
	},
	{
		"id": "27dd29a44764",
		"ts": "2026-10-24T22:51:10.755Z",
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
		"liquidityUsd": 17235097.98,
		"hash": "27dd29a44764c073ec798d39b547ddc20422d61b914240926d02ccd216ac2087"
	},
	{
		"id": "dbf154360c6a",
		"ts": "2026-10-24T22:51:11.225Z",
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
		"liquidityUsd": 259000.44,
		"hash": "dbf154360c6aa35c3de5c1feabb314836f3d2b62332b14dfb35322c2f96c0aeb"
	},
	{
		"id": "eb7eaf16ef06",
		"ts": "2026-10-24T22:51:11.490Z",
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
		"liquidityUsd": 8012965.91,
		"hash": "eb7eaf16ef06dc4c3bb3ce8cdbea06969261b3487047d1c1dc1b907ab6ba665f"
	},
	{
		"id": "2aaf4e8aa191",
		"ts": "2026-10-24T22:51:11.766Z",
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
		"liquidityUsd": 2123100.89,
		"hash": "2aaf4e8aa191c3385b1a33787584c7e33e4731c16846e8c4445190abbdd98fca"
	},
	{
		"id": "1a2960c3f3a3",
		"ts": "2026-10-24T22:51:12.048Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1116306.05,
		"hash": "1a2960c3f3a3bf8c544c481cc99f07d69aa17f938a22a5ce3d5dc59419a300da"
	},
	{
		"id": "44e854b7fde8",
		"ts": "2026-10-24T22:51:12.326Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2470677.06,
		"hash": "44e854b7fde836ee3534330823efdc5a808dc7e091e1dcdf8aec77e806033dbf"
	},
	{
		"id": "0a650b8cd709",
		"ts": "2026-10-24T22:51:12.603Z",
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
		"liquidityUsd": 2202923.52,
		"hash": "0a650b8cd709d5c247848f28b533f2b05121db4627ff062f3983274e7415a2ad"
	},
	{
		"id": "9241fde2970e",
		"ts": "2026-10-24T22:51:12.876Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1199560.98,
		"hash": "9241fde2970e82c4bfd85b58b64b2fbe47972a6b9e335298c067b7c777fddc66"
	},
	{
		"id": "f462209e390e",
		"ts": "2026-10-24T22:51:13.157Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1795207.78,
		"hash": "f462209e390e266c1c0a7dc3bd718433ae51fb85f8a22413840bae5e4f62651d"
	},
	{
		"id": "93b76102c897",
		"ts": "2026-10-24T22:51:13.392Z",
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
		"liquidityUsd": 505439.93,
		"hash": "93b76102c8977bd9dac7520933e1e4ad30483a34b227c80c8120f3bca81d05e2"
	},
	{
		"id": "0003c90d6348",
		"ts": "2026-10-24T22:51:13.640Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2470677.06,
		"hash": "0003c90d6348e599b7177ebeec9c42de30621402131fe24c93af0700fa144bb8"
	},
	{
		"id": "513aa8a2eb9e",
		"ts": "2026-10-24T22:51:13.876Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 956690.72,
		"hash": "513aa8a2eb9efafe2b5be5a012ab54d4787e0aa0dd1eef1a6294319874913344"
	},
	{
		"id": "278525824108",
		"ts": "2026-10-24T22:51:14.124Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 670152.72,
		"hash": "2785258241082801cadab76da1591c6b8f6168f53a6cb5e9e83ca70aa29ae899"
	},
	{
		"id": "6be9fa4efaee",
		"ts": "2026-10-24T22:51:14.366Z",
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
		"liquidityUsd": 8897001.25,
		"hash": "6be9fa4efaee07446a42dbc1a49c33536ee47cf5456aa9a38ba1a6b80aab0505"
	},
	{
		"id": "57abb612a5b0",
		"ts": "2026-10-24T22:51:14.607Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 955997.2,
		"hash": "57abb612a5b003ff6f49faa8663784b2668a12c979f23c0f4db6f735f03a533c"
	},
	{
		"id": "c2e5f51964f3",
		"ts": "2026-10-24T22:51:14.845Z",
		"symbol": "UP",
		"token": "0x5b2193fDc451C1f847bE09CA9d13A4Bf60f8c86B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 616396.89,
		"hash": "c2e5f51964f394581d64cd8e7d051c0d1babbd2bd6a6e11ed7bf4469f141f0d9"
	},
	{
		"id": "2ffea4c09956",
		"ts": "2026-10-24T22:51:15.089Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 511890.54,
		"hash": "2ffea4c09956175cf60d626b670633c3590a0927fa7244a1ba5198659d6bdcc5"
	},
	{
		"id": "e5279111cb8e",
		"ts": "2026-10-24T22:51:15.324Z",
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
		"liquidityUsd": 3082869.44,
		"hash": "e5279111cb8eefd69942777a48a2083f16c203a0bf816ab636530f13f96afb40"
	},
	{
		"id": "60767f4a28a1",
		"ts": "2026-10-24T20:08:30.710Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 155357768.02,
		"hash": "60767f4a28a1ef8f7549386c041769e63ad2aedf5f639a1fd4f25b6f2eaf2b9a"
	},
	{
		"id": "b2e449777ec4",
		"ts": "2026-10-24T20:08:30.942Z",
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
		"liquidityUsd": 17293130.67,
		"hash": "b2e449777ec43844e8d67da95fe651f70cd1c6ddd3a6c3bd4676922619862304"
	},
	{
		"id": "68253858e2cb",
		"ts": "2026-10-24T20:08:31.176Z",
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
		"liquidityUsd": 259378.97,
		"hash": "68253858e2cbf69fdc585edfcd115d6ed0275246e01c5ad8448571d8f30d41d0"
	},
	{
		"id": "f4c4c5436e80",
		"ts": "2026-10-24T20:08:31.379Z",
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
		"liquidityUsd": 8759039.02,
		"hash": "f4c4c5436e80ff517dfc927e2fbee92635afef60a2cebdeb09c65aebbcfd6b0d"
	},
	{
		"id": "07542722a34f",
		"ts": "2026-10-24T20:08:31.593Z",
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
		"liquidityUsd": 2107017.2,
		"hash": "07542722a34fb39720407eaaa617f1209f25a768bf24a6a3690662196c21b947"
	},
	{
		"id": "b4b611e2e5b2",
		"ts": "2026-10-24T20:08:31.811Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1109612.88,
		"hash": "b4b611e2e5b2f7558a2a6eb4e7118730795dc7cf771c1ea1652c23fd3513b631"
	},
	{
		"id": "81c8e9875006",
		"ts": "2026-10-24T20:08:32.065Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2469284.94,
		"hash": "81c8e987500682cce94fbbd6128d51779d032c0ad16e83d4b4818636d5f7486e"
	},
	{
		"id": "fd4e4d28a254",
		"ts": "2026-10-24T20:08:32.280Z",
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
		"liquidityUsd": 2205707.94,
		"hash": "fd4e4d28a2542ce77dcfb5fe3621b2991b00e6ea4d8f8c9ed18f58921fcd64bd"
	},
	{
		"id": "9ce0bcbd45b7",
		"ts": "2026-10-24T20:08:32.492Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1204783.37,
		"hash": "9ce0bcbd45b75830ad1d999bff52a0e4a3e3ca39da5fbc8ab4b21f370846a6ae"
	},
	{
		"id": "46cf12812254",
		"ts": "2026-10-24T20:08:32.745Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1797138.89,
		"hash": "46cf12812254867ca9c83a603a5398e7992730a3366518404033569bba503ff4"
	},
	{
		"id": "660bd3deaef9",
		"ts": "2026-10-24T20:08:32.949Z",
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
		"liquidityUsd": 510811.84,
		"hash": "660bd3deaef9ac425616bf47be9037e24b1708c94e223d369a84fd7eeb8d40dd"
	},
	{
		"id": "17c46171b6e8",
		"ts": "2026-10-24T20:08:33.172Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2469284.94,
		"hash": "17c46171b6e8e9f329f1ef2d39034cdd459ddb2b3ca7869277aef907c08135c9"
	},
	{
		"id": "4110a0ac0a8a",
		"ts": "2026-10-24T20:08:33.395Z",
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
		"liquidityUsd": 4084531.43,
		"hash": "4110a0ac0a8a5b394a389a4ed8a5e2ea33d2be27897f1e1349cfbed53c9a9ed9"
	},
	{
		"id": "0ac325a0d6de",
		"ts": "2026-10-24T20:08:33.591Z",
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
		"liquidityUsd": 12167506.62,
		"hash": "0ac325a0d6de947f7f96ff4c35f612f45990f88ac51281de8a1328985409938e"
	},
	{
		"id": "6d2c5624036b",
		"ts": "2026-10-24T20:08:33.853Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 948900.01,
		"hash": "6d2c5624036bc5b3faa9eed7902324e6bf8de0b09265618bb39199962a22b6ae"
	},
	{
		"id": "29919c00a999",
		"ts": "2026-10-24T20:08:34.043Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 663120.28,
		"hash": "29919c00a999d9753f14d229ac807a5dc031472bed2f94e212a1b461ef80bfd9"
	},
	{
		"id": "24d0a208d1c0",
		"ts": "2026-10-24T20:08:34.234Z",
		"symbol": "UP",
		"token": "0x5b2193fDc451C1f847bE09CA9d13A4Bf60f8c86B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 586346.58,
		"hash": "24d0a208d1c062955bcdc3a552b3ceb5683c5271723e8a8516c24559c315a6c1"
	},
	{
		"id": "a493d8d54015",
		"ts": "2026-10-24T20:08:34.463Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 953001.13,
		"hash": "a493d8d540158bd103dcaf608c91937c6119adc18fe78fec96f0362fc98e74e2"
	},
	{
		"id": "ed34ac397b73",
		"ts": "2026-10-24T20:08:34.672Z",
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
		"liquidityUsd": 3109938.03,
		"hash": "ed34ac397b73ec260deca689818c959a44c3f531b51d8b90b587080816e6273b"
	},
	{
		"id": "76e83a66ae05",
		"ts": "2026-10-24T17:47:46.308Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 152917530.52,
		"hash": "76e83a66ae05642fadf579faa43b09a80107bb35ce8d401b55d38d334ca22a00"
	},
	{
		"id": "ca2e8e080284",
		"ts": "2026-10-24T17:47:46.538Z",
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
		"liquidityUsd": 17085943.97,
		"hash": "ca2e8e080284185f8f92bc4ead4197d40646b8cd51de5c82c6d012e4990f75c1"
	},
	{
		"id": "db80f45fbcb3",
		"ts": "2026-10-24T17:47:46.772Z",
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
		"liquidityUsd": 256703.42,
		"hash": "db80f45fbcb3f068a2a5dc54763fa4f3a2ef39469dd029ae332c962e45cf52e6"
	},
	{
		"id": "0930243fc474",
		"ts": "2026-10-24T17:47:46.967Z",
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
		"liquidityUsd": 8725466.19,
		"hash": "0930243fc47482681ae610bb69df415f23afe4a1181b1fa3d952dd07b983addd"
	},
	{
		"id": "34d5aa3a8284",
		"ts": "2026-10-24T17:47:47.178Z",
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
		"liquidityUsd": 2072997.85,
		"hash": "34d5aa3a8284876e387fffc62a22816f573a589a52160775bf5a886d231b56d9"
	},
	{
		"id": "23fb8e9a3873",
		"ts": "2026-10-24T17:47:47.393Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1092746.15,
		"hash": "23fb8e9a38738b62f364808ed7b26bddeaf7604219babf8ec4790265ca003327"
	},
	{
		"id": "1556bd5f0799",
		"ts": "2026-10-24T17:47:47.652Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2468407.4,
		"hash": "1556bd5f079933d2810fba444c95855cf9e32c2211892698a64cdd3ebad66be2"
	},
	{
		"id": "32522c2570c5",
		"ts": "2026-10-24T17:47:47.859Z",
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
		"liquidityUsd": 2312821.34,
		"hash": "32522c2570c534622749fd28ca14f67b4b4b296c8814ad59292a47afd56f4178"
	},
	{
		"id": "6ed695847807",
		"ts": "2026-10-24T17:47:48.068Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1158948.05,
		"hash": "6ed695847807a43e7b6e6070bbd54bed1d4a3be6eb7ec5370218a5747466bd15"
	},
	{
		"id": "4b43e197ec59",
		"ts": "2026-10-24T17:47:48.349Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1782478.93,
		"hash": "4b43e197ec59bc7e04ad879f28d9bdb0be9e3c7326fc33e77e8c9c3a719cc0f7"
	},
	{
		"id": "2654b6d7418c",
		"ts": "2026-10-24T17:47:48.544Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 2468423.8,
		"hash": "2654b6d7418c732d0dee7c76e5bc68e4b86f7029c2a2657c9b306092d2175209"
	},
	{
		"id": "a6eb95d32e62",
		"ts": "2026-10-24T17:47:48.750Z",
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
		"liquidityUsd": 496153.01,
		"hash": "a6eb95d32e62a673b2f37a2295391bd380dc63c8fa217d7fe267e122959f9d5f"
	},
	{
		"id": "cec0cd28c2c3",
		"ts": "2026-10-24T17:47:48.947Z",
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
		"liquidityUsd": 1021556.54,
		"hash": "cec0cd28c2c34305dad71c4a9d3bd37c6b556fa1223556a585f04b8c8b4fa774"
	},
	{
		"id": "1adf92bec205",
		"ts": "2026-10-24T17:47:49.139Z",
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
		"liquidityUsd": 11979278.25,
		"hash": "1adf92bec205b7232f89a4236d6af55af5c44195a4912ce0917a258383795936"
	},
	{
		"id": "b855e6fea14f",
		"ts": "2026-10-24T17:47:49.340Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 950134.13,
		"hash": "b855e6fea14f5a710ee748db4906dc1bb7c141de4ac3137498f8363606287ac5"
	},
	{
		"id": "583a6844e6f0",
		"ts": "2026-10-24T17:47:49.547Z",
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
		"liquidityUsd": 4006834.95,
		"hash": "583a6844e6f000471995f77430127bc430210e22eb16dd5d12858e6014a191c8"
	},
	{
		"id": "98f1bedfe7b4",
		"ts": "2026-10-24T17:47:49.736Z",
		"symbol": "SLC",
		"token": "0x6Bd83ABC39391Af1E24826E90237C4BD3468b5D2",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 156510.07,
		"hash": "98f1bedfe7b44bde249b9ca7123d2440ec8f8e902d7e2b728c852c49750da076"
	},
	{
		"id": "07d353203476",
		"ts": "2026-10-24T17:47:49.933Z",
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
		"liquidityUsd": 3051273.13,
		"hash": "07d353203476849eca6ce30f4efb1323835cb77c846bcbd88e39074e24fc6280"
	},
	{
		"id": "111c95371820",
		"ts": "2026-10-24T17:47:50.149Z",
		"symbol": "UP",
		"token": "0x5b2193fDc451C1f847bE09CA9d13A4Bf60f8c86B",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 584217.64,
		"hash": "111c953718201bb0097c8742c7240d0a136475c41953f0221cfcfb1c7169752a"
	},
	{
		"id": "af5b83b2ceb5",
		"ts": "2026-10-24T14:13:36.522Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 155414117.11,
		"hash": "af5b83b2ceb54a5a06c76fc065e5c52f93c768aadd3c377bb64523df65f1cb07"
	},
	{
		"id": "1cbc4d957bcd",
		"ts": "2026-10-24T14:13:37.015Z",
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
		"liquidityUsd": 17005764.9,
		"hash": "1cbc4d957bcd5bc19a8c160d185ba776ea347650d5c3d78d5c37e6a8259dcfd0"
	},
	{
		"id": "6732b7698a70",
		"ts": "2026-10-24T14:13:37.497Z",
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
		"liquidityUsd": 262990.88,
		"hash": "6732b7698a702fc15298e9084fa46848a1d00e434a6389dfe3e44deec24f4d5c"
	},
	{
		"id": "b8e069709e66",
		"ts": "2026-10-24T14:13:37.757Z",
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
		"liquidityUsd": 8870256.66,
		"hash": "b8e069709e66dca1df28e5c7424e81b3edbb6a6834f2fade61c7e4e7960c75af"
	},
	{
		"id": "7b115e760f13",
		"ts": "2026-10-24T14:13:38.020Z",
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
		"liquidityUsd": 2152718,
		"hash": "7b115e760f1332cb6f9a5db1c557422870427d8e1f1c46500d87f9848e0e28c6"
	},
	{
		"id": "4ace5a0278e4",
		"ts": "2026-10-24T14:13:38.282Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1130675.43,
		"hash": "4ace5a0278e4f57d2d92b9f9e20a5f410d01f586f64e74a68329be4baee62b7e"
	},
	{
		"id": "88015c0f1061",
		"ts": "2026-10-24T14:13:38.533Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2468981.88,
		"hash": "88015c0f10610a06ddc8389f9f508abe5164d07a7adc77c63736a01ed12a3525"
	},
	{
		"id": "734578d18ac2",
		"ts": "2026-10-24T14:13:38.791Z",
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
		"liquidityUsd": 2377649.47,
		"hash": "734578d18ac295d86961c1881223f597a56301760a7ccc16dd705bd3cc1b68e4"
	},
	{
		"id": "286431662e63",
		"ts": "2026-10-24T14:13:39.044Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1773831.65,
		"hash": "286431662e6343c7293dd1bddec7c6eb087c70880e30a7c483524897e5bebb97"
	},
	{
		"id": "7293e692c0d7",
		"ts": "2026-10-24T14:13:39.302Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2468982.18,
		"hash": "7293e692c0d7c4baf9091afdcdb094d7a1917660ef0179dcc0a93da6b504a835"
	},
	{
		"id": "3c6d5b1d3ec7",
		"ts": "2026-10-24T14:13:39.542Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1200953.29,
		"hash": "3c6d5b1d3ec786488e85584daf4a499e07896b83c6710a99d6876b8a87403e92"
	},
	{
		"id": "427907c44637",
		"ts": "2026-10-24T14:13:39.783Z",
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
		"liquidityUsd": 1038623.9,
		"hash": "427907c44637abfd808b34ab0e1aba3e46e341afa5e7a36a3962bc99310db867"
	},
	{
		"id": "c4964257a55e",
		"ts": "2026-10-24T14:13:40.020Z",
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
		"liquidityUsd": 490377.13,
		"hash": "c4964257a55e6ed14a1c25fc96602944012275192260170d555383a3c75b3ddd"
	},
	{
		"id": "79418e17f906",
		"ts": "2026-10-24T14:13:40.266Z",
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
		"liquidityUsd": 4172592.29,
		"hash": "79418e17f906960c0a0322931a37a5e3b390ea8a17c9afdce534a9220bf30ba9"
	},
	{
		"id": "ad072816c539",
		"ts": "2026-10-24T14:13:40.500Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 949649.04,
		"hash": "ad072816c539bc349c4286a634abb04d55c16431b31da6627eb432aec5ae2a1a"
	},
	{
		"id": "af9cbf98f12f",
		"ts": "2026-10-24T14:13:40.737Z",
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
		"liquidityUsd": 12201065.86,
		"hash": "af9cbf98f12fb19575dea68fc2090ba71cb6c7ade5daa30af21fde6dbdb9287a"
	},
	{
		"id": "efd84c8d7e70",
		"ts": "2026-10-24T14:13:40.974Z",
		"symbol": "SLC",
		"token": "0x6Bd83ABC39391Af1E24826E90237C4BD3468b5D2",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 176581.42,
		"hash": "efd84c8d7e70ed114b0dfc9c5f3cbcbfc7a15c28a733edcf285036aefd7a23ef"
	},
	{
		"id": "2973ca769326",
		"ts": "2026-10-24T14:13:41.214Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54780.73,
		"hash": "2973ca76932640fd93cf11aa8043258db445c06544c9086da11692faf4f5b87a"
	},
	{
		"id": "47be0314a9a3",
		"ts": "2026-10-24T14:13:41.449Z",
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
		"liquidityUsd": 3104985.69,
		"hash": "47be0314a9a3c147e4a83e3cdaac696836edd277658702a4829141a5346fb025"
	},
	{
		"id": "0d0a0001c396",
		"ts": "2026-10-24T10:12:48.591Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 155336182.63,
		"hash": "0d0a0001c396c935bd9d43e3ff90985aa2c2035493a3f0e236a84b898dafd285"
	},
	{
		"id": "cfdff97d7363",
		"ts": "2026-10-24T10:12:48.873Z",
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
		"liquidityUsd": 16987600.55,
		"hash": "cfdff97d73634fe3a8963bf9acfc33d80e9789ee91c39bb6432c86e42bd9d30c"
	},
	{
		"id": "08831341b8fb",
		"ts": "2026-10-24T10:12:49.139Z",
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
		"liquidityUsd": 262728.36,
		"hash": "08831341b8fb94fd4beee8d02d426f6ec3d94a919936e751fae073650913b9fb"
	},
	{
		"id": "244ca6e09ec4",
		"ts": "2026-10-24T10:12:49.379Z",
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
		"liquidityUsd": 8949386.26,
		"hash": "244ca6e09ec4aef9e0eb339824c747544ef28a7fccc083d59b4a1f19f1563f84"
	},
	{
		"id": "17725edf4ad4",
		"ts": "2026-10-24T10:12:49.660Z",
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
		"liquidityUsd": 3286961.31,
		"hash": "17725edf4ad4943c0dd6f39ba810875d81982cf8a5eeb0d854ce1f6ba9ac9589"
	},
	{
		"id": "e06d5ff8d082",
		"ts": "2026-10-24T10:12:49.929Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1131401.78,
		"hash": "e06d5ff8d08219f861d13f20a4a7fdefaef17ecf69f07b8bb264336b2a6e5fab"
	},
	{
		"id": "166563ac6fb1",
		"ts": "2026-10-24T10:12:50.174Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2468954.07,
		"hash": "166563ac6fb1ade67e15bbb17ed9520ef6fae311ad13137bba8ab222141c6e70"
	},
	{
		"id": "fc547371d635",
		"ts": "2026-10-24T10:12:50.467Z",
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
		"liquidityUsd": 2368974.8,
		"hash": "fc547371d635cec1d0c5e9da88b826839b57784ff5d7ceb3542cee0a381f61c4"
	},
	{
		"id": "4c2d7326f994",
		"ts": "2026-10-24T10:12:50.726Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2468887.27,
		"hash": "4c2d7326f9942ba6f61d38dc20b8c94e3aca0b641c474ae95dfd04024f0fe741"
	},
	{
		"id": "54f84d93310d",
		"ts": "2026-10-24T10:12:50.964Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1755527.58,
		"hash": "54f84d93310d39689bb298ff73c90a5c9a9c055b9f4e1c13a569f51792d0fadc"
	},
	{
		"id": "4973ab58e98a",
		"ts": "2026-10-24T10:12:51.194Z",
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
		"liquidityUsd": 1038070.84,
		"hash": "4973ab58e98ad98f879cf47934acff7456bd9bdc6e04ec822161346ab26b693f"
	},
	{
		"id": "0e0ab7266ef0",
		"ts": "2026-10-24T10:12:51.429Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1184119.77,
		"hash": "0e0ab7266ef014abb274716b7cb3bf12f2d50ff0c0279aeb8fd44420baed0727"
	},
	{
		"id": "489088f887a4",
		"ts": "2026-10-24T10:12:51.667Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 953785.29,
		"hash": "489088f887a46b192163d00868da99b0b6ddbc00ab6e07be9a4b08d502ab7908"
	},
	{
		"id": "e0e27cfb4ced",
		"ts": "2026-10-24T10:12:51.889Z",
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
		"liquidityUsd": 4250466.73,
		"hash": "e0e27cfb4cedd083beedf473b68d021b548f273560b9f731f2a9bab63a5eb8e4"
	},
	{
		"id": "b2798f0314b7",
		"ts": "2026-10-24T10:12:52.120Z",
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
		"liquidityUsd": 12272720.99,
		"hash": "b2798f0314b721f6cc31569ba57e3cc36582690d35270ce8daad1e3dd4c328fc"
	},
	{
		"id": "32fb557704bb",
		"ts": "2026-10-24T10:12:52.352Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54391.34,
		"hash": "32fb557704bb743d0983d63683634db52af77cf58f9f3dae1c6f754c9eb6a0cc"
	},
	{
		"id": "bc75f1c62090",
		"ts": "2026-10-24T10:12:52.592Z",
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
		"liquidityUsd": 3102966.03,
		"hash": "bc75f1c62090dca7519f167de7e3fe71340b0788b647a7ab82a372770e744fc1"
	},
	{
		"id": "f7faa53d10aa",
		"ts": "2026-10-24T10:12:52.819Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3247569.21,
		"hash": "f7faa53d10aa582f35247ad6fa241528d52fe6efdaa9a298ce35a22254b0504a"
	},
	{
		"id": "0c44167cf0f6",
		"ts": "2026-10-24T10:12:53.052Z",
		"symbol": "ELSA",
		"token": "0x29cC30f9D113B356Ce408667aa6433589CeCBDcA",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 512304.28,
		"hash": "0c44167cf0f6039f1742470b718f98fb6a998d76146b6e1324c4459d6b2c62ea"
	},
	{
		"id": "374c65d34308",
		"ts": "2026-10-24T05:20:47.988Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156350523.55,
		"hash": "374c65d3430897615c05b3af05f58b78e488eb9c6d2ea1d6a02415b02230c127"
	},
	{
		"id": "f92b428b8edb",
		"ts": "2026-10-24T05:20:48.246Z",
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
		"liquidityUsd": 16443819.63,
		"hash": "f92b428b8edb57bf2a8deeb4a5f180cc2f131aeaa347c9b744eb3778cf14ca57"
	},
	{
		"id": "11652f391676",
		"ts": "2026-10-24T05:20:48.457Z",
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
		"liquidityUsd": 263720.97,
		"hash": "11652f3916766ea8ec7eb90793e63268fb737ca957ee931cbedbe6f015bf00e5"
	},
	{
		"id": "cab797ca59b9",
		"ts": "2026-10-24T05:20:48.679Z",
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
		"liquidityUsd": 9785504.24,
		"hash": "cab797ca59b9f2682dcfe63dc2dc2b4964e066dbe81123ae7d65b2214cb1a866"
	},
	{
		"id": "c11b19b2d4ee",
		"ts": "2026-10-24T05:20:48.894Z",
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
		"liquidityUsd": 3339835.52,
		"hash": "c11b19b2d4ee55f167f8ed180ae53e6ff93324e923d32b2dc481a8a0f2a5e03d"
	},
	{
		"id": "d251c5ae37f6",
		"ts": "2026-10-24T05:20:49.119Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1141739.1,
		"hash": "d251c5ae37f63f90ccbe8c1ef0b113ffc593d392a15cfed8c700e0f57cebf077"
	},
	{
		"id": "83b1de24f48e",
		"ts": "2026-10-24T05:20:49.352Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2473330.59,
		"hash": "83b1de24f48ed36cd969b7ab8087f5f1a76b571c8e69f28ca149dbe0c43315c8"
	},
	{
		"id": "d4e59240a632",
		"ts": "2026-10-24T05:20:49.576Z",
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
		"liquidityUsd": 2401985.84,
		"hash": "d4e59240a6322f61d4f41742d4316297660353295e8b2e6981d7d42f26002298"
	},
	{
		"id": "09181b0559cd",
		"ts": "2026-10-24T05:20:49.813Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2473330.59,
		"hash": "09181b0559cd04c44d44ff9fd21ec41186bf37a7c0ae28ed2907c5cf044009d7"
	},
	{
		"id": "5f03d9fd95b4",
		"ts": "2026-10-24T05:20:50.052Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1753184.52,
		"hash": "5f03d9fd95b49ea59c5022cbbed01f2648dad7ced5dba6f80748c70f613604da"
	},
	{
		"id": "cf17ac89fde1",
		"ts": "2026-10-24T05:20:50.263Z",
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
		"liquidityUsd": 1033966.44,
		"hash": "cf17ac89fde163b0b818353973024a867a4cbb551feb9fb9e5eaae4b7e1a4204"
	},
	{
		"id": "7c52962c6f2c",
		"ts": "2026-10-24T05:20:50.456Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1208599,
		"hash": "7c52962c6f2cdcb8a119d00a9dfddc0e718c57440f52d9bc35614139643cd2a9"
	},
	{
		"id": "afe25998ea38",
		"ts": "2026-10-24T05:20:50.652Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 961253.04,
		"hash": "afe25998ea38b50d47552b66429ed20badf7b5c3ed927665733d1f379c14a718"
	},
	{
		"id": "13292fc27061",
		"ts": "2026-10-24T05:20:50.884Z",
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
		"liquidityUsd": 12453528.94,
		"hash": "13292fc270612a8c36e3061ab0e812cffdbf0cb8f3ced4d40d21951ee34c33b3"
	},
	{
		"id": "13999dfa4522",
		"ts": "2026-10-24T05:20:51.080Z",
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
		"liquidityUsd": 4322364.15,
		"hash": "13999dfa45221cbe24efe5b99721bbe43bc052be87bca4128eff6cc62f90fbd3"
	},
	{
		"id": "5208c53b199d",
		"ts": "2026-10-24T05:20:51.287Z",
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
		"liquidityUsd": 3168903.07,
		"hash": "5208c53b199d44093f817d083750c1f8a9a17fc388507007c9125407068b3e3f"
	},
	{
		"id": "c0889c892a0b",
		"ts": "2026-10-24T05:20:51.548Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56007.55,
		"hash": "c0889c892a0be298b6267882052dc271a7666f6de503a930d162d9310fcf79db"
	},
	{
		"id": "6fe0352c6bdc",
		"ts": "2026-10-24T05:20:51.765Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3770610.46,
		"hash": "6fe0352c6bdc56ec60d3e12efce1e8e8bc204c72c9e9aab9ce30230f1ab053d5"
	},
	{
		"id": "d6590427e09c",
		"ts": "2026-10-24T05:20:51.964Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3978647.88,
		"hash": "d6590427e09c5c72c86be5eae06b399092e3b7389df8c1b756b0a1697267996b"
	},
	{
		"id": "8d02583b048b",
		"ts": "2026-10-24T00:13:18.559Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156505853.53,
		"hash": "8d02583b048be8a789b7cf14caac55319e36172f415c9f7f2832ba2482d2fe50"
	},
	{
		"id": "d9fbe06a5b93",
		"ts": "2026-10-24T00:13:18.779Z",
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
		"liquidityUsd": 16453708.17,
		"hash": "d9fbe06a5b93fc0a1ef3eac3d401f6177d62f59f53e750d23a524fc4389017d7"
	},
	{
		"id": "5267f94bd5de",
		"ts": "2026-10-24T00:13:19.029Z",
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
		"liquidityUsd": 265105.72,
		"hash": "5267f94bd5de51f5b63d40032a18c86fc8a54b96ed204662a639bf95fa6c895d"
	},
	{
		"id": "c9f4845f81e9",
		"ts": "2026-10-24T00:13:19.248Z",
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
		"liquidityUsd": 9869429.54,
		"hash": "c9f4845f81e92079f5120a02613149c4a2f04e9b6aae1f60a0a2ea7ee8d02f22"
	},
	{
		"id": "95da69680b80",
		"ts": "2026-10-24T00:13:19.460Z",
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
		"liquidityUsd": 3354998.99,
		"hash": "95da69680b80aadb157b23ac6add2601b5716bb504e1c39204f19eb1bf68164c"
	},
	{
		"id": "d17fd9c0d7e5",
		"ts": "2026-10-24T00:13:19.676Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1125393.32,
		"hash": "d17fd9c0d7e5d97227904d178f1988e429da550b340926d1e841a970da3182bf"
	},
	{
		"id": "e8dc168a458e",
		"ts": "2026-10-24T00:13:19.893Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 9869429.54,
		"hash": "e8dc168a458e11792575f8dc7abb49680f81c7050c8ceb11d0ecf6f6d09ece0b"
	},
	{
		"id": "346902a455f1",
		"ts": "2026-10-24T00:13:20.118Z",
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
		"liquidityUsd": 2419701.68,
		"hash": "346902a455f1520e427af7eb5ee277df510e16bcc69a0a81af29ebdb6e65a944"
	},
	{
		"id": "61be93190a9d",
		"ts": "2026-10-24T00:13:20.346Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2473293.91,
		"hash": "61be93190a9dc2c1345cf372bf862ec3b557fda3e297985a9bc3994ed3093c5a"
	},
	{
		"id": "536d28797522",
		"ts": "2026-10-24T00:13:20.602Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1726115.67,
		"hash": "536d287975224fa70aaa63179b928abc8a0dde718d78fc2a9396502c73ac8099"
	},
	{
		"id": "73233070693e",
		"ts": "2026-10-24T00:13:20.796Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1230199.74,
		"hash": "73233070693ec35ff527b5575b63646f4de6fecc74fe6d07e2f18dad5c7f449c"
	},
	{
		"id": "2dee5c430b59",
		"ts": "2026-10-24T00:13:20.999Z",
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
		"liquidityUsd": 1035920.49,
		"hash": "2dee5c430b59e5f68e406a7c8121457e3259726b21f86b52418d799b49401c27"
	},
	{
		"id": "27b67d92086b",
		"ts": "2026-10-24T00:13:21.210Z",
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
		"liquidityUsd": 12532315.94,
		"hash": "27b67d92086b4ea23a22a916a6a0d9ee266188dafc70801a49f127275a45b753"
	},
	{
		"id": "b95969836e44",
		"ts": "2026-10-24T00:13:21.420Z",
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
		"liquidityUsd": 3177261.01,
		"hash": "b95969836e44aad37f7e8ff3bc59fb495431dbd8637b9dfd3b7f45328485cb75"
	},
	{
		"id": "d669f57f8de6",
		"ts": "2026-10-24T00:13:21.631Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 969934.73,
		"hash": "d669f57f8de68cc3a7f1826d396910dd5ce76aaf88783e46147c49fa1e938a64"
	},
	{
		"id": "69bb9b151883",
		"ts": "2026-10-24T00:13:21.838Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4373521.74,
		"hash": "69bb9b1518830e794772f592348b45bd9ac20a3143bd1f7e70d74cab4438211d"
	},
	{
		"id": "876a6de3d707",
		"ts": "2026-10-24T00:13:22.040Z",
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
		"liquidityUsd": 4393007.9,
		"hash": "876a6de3d70713b6b3ece5291f9fa11415205fe65628442ba6218831e210bb48"
	},
	{
		"id": "2d85f4403f90",
		"ts": "2026-10-24T00:13:22.240Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 69488.9,
		"hash": "2d85f4403f903d2d7c652678e50fa264af34044e544c14c3bf478390db8e7bc9"
	},
	{
		"id": "9564575d2b42",
		"ts": "2026-10-24T00:13:22.477Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55811.44,
		"hash": "9564575d2b42883e7840df2e1b21459caa4899ffdd1b07a36e86b05922deccf5"
	},
	{
		"id": "dcc81b3417b1",
		"ts": "2026-10-23T21:49:12.598Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157220436.02,
		"hash": "dcc81b3417b1350d1eb25087f33dc8e74b6c28c2c573cfea7eb8dac0f22a9b27"
	},
	{
		"id": "440fb6221ad6",
		"ts": "2026-10-23T21:49:13.087Z",
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
		"liquidityUsd": 16556461.38,
		"hash": "440fb6221ad61e6c1ea0ab02467d92acb4f86276787ec5e07a860a2bc6c7c0fd"
	},
	{
		"id": "5362dca6d720",
		"ts": "2026-10-23T21:49:13.366Z",
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
		"liquidityUsd": 267124.24,
		"hash": "5362dca6d720a90ccf846a5fead30d7675b39f7b2d793af954ca6b2c0d5c4473"
	},
	{
		"id": "79349efd331e",
		"ts": "2026-10-23T21:49:13.634Z",
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
		"liquidityUsd": 10324633.47,
		"hash": "79349efd331e29699cfd5f066bf46af0718b89ea38dcff703512647900ae8571"
	},
	{
		"id": "ccead4ce3b0c",
		"ts": "2026-10-23T21:49:13.893Z",
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
		"liquidityUsd": 3392527.94,
		"hash": "ccead4ce3b0c9564804133f7a37252d6bf1ae784fdcc02d5837ca553a21696f2"
	},
	{
		"id": "3455fc87065c",
		"ts": "2026-10-23T21:49:14.176Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1158205.78,
		"hash": "3455fc87065c1bf7c491c5944366373316b6ab3bf5e246814cbd50e3d7d5881d"
	},
	{
		"id": "3864cdc23234",
		"ts": "2026-10-23T21:49:14.447Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 10324633.47,
		"hash": "3864cdc232341fe97f9c97cbc63129521a54ea0fa0fac0c2f8dd14d1664bc2bf"
	},
	{
		"id": "082cabbc9ffa",
		"ts": "2026-10-23T21:49:14.747Z",
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
		"liquidityUsd": 1924731.69,
		"hash": "082cabbc9ffa09ffdd963ea6250f8ba205ab9387ac535d6816f07a49b328a5c1"
	},
	{
		"id": "7026981155e4",
		"ts": "2026-10-23T21:49:15.228Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2467202.32,
		"hash": "7026981155e4cc8d3f10ade12bb267988135c4b28b013b6804232a67fa54a84b"
	},
	{
		"id": "1f461a697d55",
		"ts": "2026-10-23T21:49:15.499Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1767570.96,
		"hash": "1f461a697d55bb128e560cb90b4c8797c6354313fd65d15831c0e12207fa8cc1"
	},
	{
		"id": "56ae4ff83053",
		"ts": "2026-10-23T21:49:15.794Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1255489.19,
		"hash": "56ae4ff8305353970468c66ac07779be2ed5fd8dcbffcc3da6979a757791b0dc"
	},
	{
		"id": "1efcd9ff3c86",
		"ts": "2026-10-23T21:49:16.030Z",
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
		"liquidityUsd": 1044226.35,
		"hash": "1efcd9ff3c86c981a434ac3cee104c6c42df97d50cdf2c5daf91f356838f0b33"
	},
	{
		"id": "da424c6f042c",
		"ts": "2026-10-23T21:49:16.258Z",
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
		"liquidityUsd": 3211135.18,
		"hash": "da424c6f042c033ee694f187e6e41e7c9f6bd25ae7589bde97adb09ae89754ec"
	},
	{
		"id": "9cf86b1bc43e",
		"ts": "2026-10-23T21:49:16.495Z",
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
		"liquidityUsd": 12577361.15,
		"hash": "9cf86b1bc43e6c2d417783b88ebdf92aa0aa4d6c3ae75752e4608945ffb7ec23"
	},
	{
		"id": "9e9ce8981f56",
		"ts": "2026-10-23T21:49:16.744Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4568205.1,
		"hash": "9e9ce8981f56cb34958ad72533fd11bc94f649409b42ac05a059491b419fe54c"
	},
	{
		"id": "0e23079546d0",
		"ts": "2026-10-23T21:49:16.976Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 973341.22,
		"hash": "0e23079546d05b3c7947d645ea4b076de0722698e9019cb69e2556bb1de06321"
	},
	{
		"id": "45758e0c4a38",
		"ts": "2026-10-23T21:49:17.207Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56440.77,
		"hash": "45758e0c4a3868cb4ac2d04905cc12333f16fb207834be604cd1189db635c29b"
	},
	{
		"id": "92fd814db35c",
		"ts": "2026-10-23T21:49:17.441Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1945673.27,
		"hash": "92fd814db35cdf3939d0e7285f96d7e68fbbdad394a3ce1702cf1a36e7448e5c"
	},
	{
		"id": "14e572b932a7",
		"ts": "2026-10-23T21:49:17.668Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 677733.61,
		"hash": "14e572b932a7eb314721bfd9199f90c6ed741fae53bb461ed3029271847e92f9"
	},
	{
		"id": "a96351e7ffdc",
		"ts": "2026-10-23T18:52:00.615Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157320750.92,
		"hash": "a96351e7ffdcb1fcc2d27d39a06a9a71159b03e5da6056558d2e633be192de54"
	},
	{
		"id": "f7d311587f13",
		"ts": "2026-10-23T18:52:01.180Z",
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
		"liquidityUsd": 16575384.87,
		"hash": "f7d311587f13c6b86b198757af22d69488c6b70ad9dc01587ce0e70087720e08"
	},
	{
		"id": "fec6b4dba803",
		"ts": "2026-10-23T18:52:01.456Z",
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
		"liquidityUsd": 270615.48,
		"hash": "fec6b4dba8032ffc811a982b78b813a537b7299c450c0b017085284441980c6b"
	},
	{
		"id": "d53588805909",
		"ts": "2026-10-23T18:52:01.713Z",
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
		"liquidityUsd": 10608610.94,
		"hash": "d53588805909468c03958f95431c1159244f4f46e74b88e69167028ae53d85c5"
	},
	{
		"id": "7119481d36a9",
		"ts": "2026-10-23T18:52:01.998Z",
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
		"liquidityUsd": 3421617.41,
		"hash": "7119481d36a9bfe7f149741cea03979473a1bfb8a049a4d27f73e8e9755e3108"
	},
	{
		"id": "a19f31133534",
		"ts": "2026-10-23T18:52:02.270Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1170009.9,
		"hash": "a19f311335349d7c17f23162f2d92de5bc0bc3207b9cad6e269056550fcdddc7"
	},
	{
		"id": "34df4df76171",
		"ts": "2026-10-23T18:52:02.529Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 10608610.94,
		"hash": "34df4df761715ea06563c52269392703e04d35bed4c638aa7cd3341a8f0440a2"
	},
	{
		"id": "38226cb8de78",
		"ts": "2026-10-23T18:52:02.815Z",
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
		"liquidityUsd": 1711777.98,
		"hash": "38226cb8de7854228679f749028b0646aed01c9f321923520c77193458697d1b"
	},
	{
		"id": "41b6b6288675",
		"ts": "2026-10-23T18:52:03.073Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2467681.56,
		"hash": "41b6b62886757e1aa0c4cf2a8edd525f6fd33fdc859886fb915445ea52f2f7f7"
	},
	{
		"id": "287dba0503a2",
		"ts": "2026-10-23T18:52:03.331Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 4729464.7,
		"hash": "287dba0503a2e4e68a130d26287a3766315e2d1c4284f0205893c3d4495d0b8b"
	},
	{
		"id": "ddda40d5d1d5",
		"ts": "2026-10-23T18:52:03.579Z",
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
		"liquidityUsd": 1770406.68,
		"hash": "ddda40d5d1d5c3d44c536e8373957afd903f23505ec8f59a9de43a3cd8bcbdcc"
	},
	{
		"id": "fa56fd6122e6",
		"ts": "2026-10-23T18:52:03.808Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1263081.49,
		"hash": "fa56fd6122e622dbde9a827b8ba0f5ace76c0ba344073f1e70119209621262ab"
	},
	{
		"id": "a65c15d59bb7",
		"ts": "2026-10-23T18:52:04.055Z",
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
		"liquidityUsd": 3242029.92,
		"hash": "a65c15d59bb7713d882758e7e6b9bc8869eddb18f2520aa5466c2dfb0fe6a182"
	},
	{
		"id": "2570f4782ae6",
		"ts": "2026-10-23T18:52:04.283Z",
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
		"liquidityUsd": 12631744.07,
		"hash": "2570f4782ae6f4cea99c789b6ae93fd21971ef1bbfe8c08bf919e4775e534abc"
	},
	{
		"id": "5698b6d3812a",
		"ts": "2026-10-23T18:52:04.587Z",
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
		"liquidityUsd": 1052387.94,
		"hash": "5698b6d3812aa6b27c68426c55a3bd4b58bd980a521c896036eb6f2a3098d712"
	},
	{
		"id": "2cacdbf913b3",
		"ts": "2026-10-23T18:52:04.830Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1946627.34,
		"hash": "2cacdbf913b3002eace2e793766190e9ec7b55886e23b789e02286d61a04799a"
	},
	{
		"id": "8baa5dc89a23",
		"ts": "2026-10-23T18:52:05.067Z",
		"symbol": "PROS",
		"token": "0x8B7DdE054BE9D180c1Be7FaE0874697374A49832",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 973461.58,
		"hash": "8baa5dc89a236025ccd2f0cb9f017df2e3511269d65781450ce14fed38f22dc1"
	},
	{
		"id": "079c4ba909f9",
		"ts": "2026-10-23T18:52:05.310Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 56842.56,
		"hash": "079c4ba909f97e0c8f7612616fe874497f8507cdfd8ac2a094ec0e29c47f8899"
	},
	{
		"id": "9115d8cbaf7e",
		"ts": "2026-10-23T18:52:05.563Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 26,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.48,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 672453.37,
		"hash": "9115d8cbaf7e859da3bfe4a765af043c4fe9b02e7afa4c46862cf77e1f4f0f1e"
	},
	{
		"id": "7c4e65778f27",
		"ts": "2026-10-23T14:38:07.446Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156920114.89,
		"hash": "7c4e65778f2756857c18ccff2a129e5b0fdd2f0003015840ec09daf3e02d2621"
	},
	{
		"id": "327c731b79ac",
		"ts": "2026-10-23T14:38:07.914Z",
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
		"liquidityUsd": 16494873.75,
		"hash": "327c731b79ace70c2221434062b8604b4b06aa023ccd850e51170f6376061da3"
	},
	{
		"id": "faca2b0daa28",
		"ts": "2026-10-23T14:38:08.210Z",
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
		"liquidityUsd": 269034.79,
		"hash": "faca2b0daa28abf8f7715c9b98dd32b7a68e3942f153e33581b7e285db5806a8"
	},
	{
		"id": "a26b9fdf147c",
		"ts": "2026-10-23T14:38:08.474Z",
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
		"liquidityUsd": 10563727.71,
		"hash": "a26b9fdf147c4e758799a1124e8529915f83a560ff740a930476151689e6321a"
	},
	{
		"id": "64426c00f00e",
		"ts": "2026-10-23T14:38:08.742Z",
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
		"liquidityUsd": 3392098.3,
		"hash": "64426c00f00e3374873d85eb4088b85ebeba9e0d9b70892d07e4b0ede8cb0340"
	},
	{
		"id": "5c6c70dc172b",
		"ts": "2026-10-23T14:38:09.020Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1151357.37,
		"hash": "5c6c70dc172b3553eba95aecfddf8315ffef2c1fab63c607b33b596f7c89d523"
	},
	{
		"id": "7ee8fd0fa634",
		"ts": "2026-10-23T14:38:09.300Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 10563727.71,
		"hash": "7ee8fd0fa634d613a0136d25e11fca47829b70a1819492a3408a50919c104d62"
	},
	{
		"id": "51ad5cb13b46",
		"ts": "2026-10-23T14:38:09.599Z",
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
		"liquidityUsd": 1303121.55,
		"hash": "51ad5cb13b46c91dddbdfe9122d494f62337ad44e2aa8d04465f3a2f250c84f6"
	},
	{
		"id": "e8d3b4128455",
		"ts": "2026-10-23T14:38:09.892Z",
		"symbol": "AXIS",
		"token": "0x5bE75e3b0aFf5D1A042A5363Ae36AcB1d6d755ea",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2467281.27,
		"hash": "e8d3b41284555914d14ef3e142a08499e0cdac6a99d68f9dd680bc53352efa46"
	},
	{
		"id": "939e137d53a9",
		"ts": "2026-10-23T14:38:10.157Z",
		"symbol": "AERO",
		"token": "0x3f5bF3EdAc59d650D8fDf9657a71F2f904A3a4Ee",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 2145302.47,
		"hash": "939e137d53a939e3c2a50e94db39a4f484e514d0a324e041bad169ad6c0a2946"
	}
]
