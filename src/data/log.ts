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
	"updatedAt": "2026-09-08T08:32:51.558Z",
	"tokensScored": 16624,
	"verdictsIssued": 16624,
	"safe": 14115,
	"risky": 1225,
	"likelyRug": 1284,
	"ticks": 953
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "b39c9d119125",
		"ts": "2026-09-08T08:32:46.830Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116725440.63,
		"hash": "b39c9d11912588aff8332c5363c98d495afc4221e158ea135ba30d38eca30f63"
	},
	{
		"id": "c9e92a314125",
		"ts": "2026-09-08T08:32:47.278Z",
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
		"liquidityUsd": 19228827.29,
		"hash": "c9e92a314125106b9cf7ed2b172524814fa1121541d230f9b11ef0b40979c634"
	},
	{
		"id": "45d46503bb65",
		"ts": "2026-09-08T08:32:47.546Z",
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
		"liquidityUsd": 1003298.73,
		"hash": "45d46503bb6566d8cdb2b3724f93d61265539db1b5dfe8c7f4b010521baa2cd2"
	},
	{
		"id": "c8369b8c70ef",
		"ts": "2026-09-08T08:32:47.786Z",
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
		"liquidityUsd": 33274430.13,
		"hash": "c8369b8c70ef808836b200a1aabedee8d6514cccdf732efb2fffabfdd975054e"
	},
	{
		"id": "7a55cee50b2f",
		"ts": "2026-09-08T08:32:48.054Z",
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
		"liquidityUsd": 4347149.36,
		"hash": "7a55cee50b2f9eb359eb776674512591c51552c3a7a9bc6e94c2ba42b1b77a60"
	},
	{
		"id": "6f9a6739d0de",
		"ts": "2026-09-08T08:32:48.298Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1194270,
		"hash": "6f9a6739d0de852d7c6be558d36bbe183d90f293ded0c7949da8e09dfbe0c31d"
	},
	{
		"id": "eceaf4bd6a73",
		"ts": "2026-09-08T08:32:48.554Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33246439.19,
		"hash": "eceaf4bd6a73ef9f90b1a739ac2ec9a7321c7e39afbe0977ca6cf1577d42a003"
	},
	{
		"id": "93f99a5aea15",
		"ts": "2026-09-08T08:32:48.859Z",
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
		"liquidityUsd": 2335240.59,
		"hash": "93f99a5aea154231b0140bf5cae278e5a1c80ea43c063c3ef9c69039dce0508d"
	},
	{
		"id": "613e95985d38",
		"ts": "2026-09-08T08:32:49.320Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 965043.77,
		"hash": "613e95985d380d893b4d13f28a4e571c9a5a671d35c3a4e4627e9f980e214783"
	},
	{
		"id": "e8ab574f05a4",
		"ts": "2026-09-08T08:32:49.563Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 868672.58,
		"hash": "e8ab574f05a4c5d79ed3333199169657301e6a1a445c8e3051f9b372f8b9f687"
	},
	{
		"id": "2471cb43c80b",
		"ts": "2026-09-08T08:32:49.787Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1636857.27,
		"hash": "2471cb43c80bb143ba8db495d1fb9474b414e6e96db941e50e7022d6b6f5e6c0"
	},
	{
		"id": "c399f2115a5d",
		"ts": "2026-09-08T08:32:50.006Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 199043.39,
		"hash": "c399f2115a5d1e33b4cec7b79580660628501cd79fa357247f7fbb5087776076"
	},
	{
		"id": "f734853c9700",
		"ts": "2026-09-08T08:32:50.225Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 300685.07,
		"hash": "f734853c9700a21f0bbedae88a022e21941e10e3aba9fe1f79850591d6588a58"
	},
	{
		"id": "4ec899d6121d",
		"ts": "2026-09-08T08:32:50.446Z",
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
		"liquidityUsd": 13347631.8,
		"hash": "4ec899d6121d4967566fe942303d8b77ea61e40908da0b9db2bf7972a6a1947f"
	},
	{
		"id": "f70c96702a1c",
		"ts": "2026-09-08T08:32:50.675Z",
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
		"liquidityUsd": 1402824.92,
		"hash": "f70c96702a1cb44061f1c35eaca79974c608e9ab874b5ea8f93f2f8140d21f63"
	},
	{
		"id": "49f52b141fef",
		"ts": "2026-09-08T08:32:50.899Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3159871.98,
		"hash": "49f52b141feffa9e3e9620bf8f0d488792f2702dc990cda6a6cc416758e88503"
	},
	{
		"id": "4b4738d8e53d",
		"ts": "2026-09-08T08:32:51.118Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 196901.7,
		"hash": "4b4738d8e53d275a1325e9bc9dfad1abacf852035f923604fde1f6afa3611b60"
	},
	{
		"id": "c3bcbbca6711",
		"ts": "2026-09-08T08:32:51.338Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4233092.5,
		"hash": "c3bcbbca671180b5d5c51940d704bc6bb1095d33c665cb38abbd2b0c5f96ed35"
	},
	{
		"id": "f6afcbdae609",
		"ts": "2026-09-08T08:32:51.557Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 279410.51,
		"hash": "f6afcbdae6094e3114490e4eedc38c51ff9635c71c7ff50d6a602111739b55b6"
	},
	{
		"id": "b617d5713c30",
		"ts": "2026-09-08T03:21:26.451Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117025537.86,
		"hash": "b617d5713c300901d71d45e310b62ed93143d366c7c18245072f28614dddc4ea"
	},
	{
		"id": "4dc03669133a",
		"ts": "2026-09-08T03:21:26.714Z",
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
		"liquidityUsd": 20420852.03,
		"hash": "4dc03669133aeaeba314b5bbcd871b07f46d3a143c9987de3684fad22cb89095"
	},
	{
		"id": "1680489ea6f2",
		"ts": "2026-09-08T03:21:26.975Z",
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
		"liquidityUsd": 1012970.55,
		"hash": "1680489ea6f2f5a0117ce8d2184b78c3466f2b85fc988a10294a1ca0de4a5ff1"
	},
	{
		"id": "a74901264e7e",
		"ts": "2026-09-08T03:21:27.239Z",
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
		"liquidityUsd": 33738218.19,
		"hash": "a74901264e7ecb93f5f6d135d883db7dd85068f5618c063b31257586150290da"
	},
	{
		"id": "846bfda9981b",
		"ts": "2026-09-08T03:21:27.474Z",
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
		"liquidityUsd": 4408513.83,
		"hash": "846bfda9981bb0bd0bdd2d126c7b89dc9fad27d89bcc322633867ce334471525"
	},
	{
		"id": "989938426de2",
		"ts": "2026-09-08T03:21:27.726Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1202086.87,
		"hash": "989938426de2fe92d0ae0c87549a5f129608b05a5cdb2831859019b274778ffd"
	},
	{
		"id": "e0bb4ca54f84",
		"ts": "2026-09-08T03:21:27.971Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33738218.19,
		"hash": "e0bb4ca54f84504a89e5f99f74a045f18c2cb5749a6cb889795d5091153b9caa"
	},
	{
		"id": "0e8fe1fe18d9",
		"ts": "2026-09-08T03:21:28.318Z",
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
		"liquidityUsd": 2344071.16,
		"hash": "0e8fe1fe18d9ead2218bdf761cc9d059c8b79d6dc88ad1e716da1f313b3650aa"
	},
	{
		"id": "fb2c1cea272c",
		"ts": "2026-09-08T03:21:28.570Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 950128.12,
		"hash": "fb2c1cea272c05e373b42cb52afc190e45ad0163d8a3fe0e60b8215923f2bf61"
	},
	{
		"id": "448b8b79a34d",
		"ts": "2026-09-08T03:21:28.816Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1006987.91,
		"hash": "448b8b79a34d387c6d431d8f220942054d2f1e3179823c7f3832811f0f486336"
	},
	{
		"id": "e914b5078c55",
		"ts": "2026-09-08T03:21:29.039Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1689826.62,
		"hash": "e914b5078c55c7dfebab66fe1b9488e2ead6d110f7191df276d374b61a646a42"
	},
	{
		"id": "d9e783e7de79",
		"ts": "2026-09-08T03:21:29.263Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 230098.47,
		"hash": "d9e783e7de799640633feebbebc900a3029d8c219bf3267466e241c29476fa79"
	},
	{
		"id": "71b5e7b462e5",
		"ts": "2026-09-08T03:21:29.485Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 286863.97,
		"hash": "71b5e7b462e570e9441e24faf746d700f971ac009f803cfffd2bcc6c7fa93d8b"
	},
	{
		"id": "e159af4f66db",
		"ts": "2026-09-08T03:21:29.709Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3308235.71,
		"hash": "e159af4f66db20ec7264b2364cef338dfdca5c9ff818ce0f85b6c59fab500566"
	},
	{
		"id": "d7ce38523b44",
		"ts": "2026-09-08T03:21:29.947Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13579663.28,
		"hash": "d7ce38523b445771a20967290c1c2781c79afe01210e346ff1bc7a7cac5efead"
	},
	{
		"id": "4f199afe7857",
		"ts": "2026-09-08T03:21:30.169Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 212670.62,
		"hash": "4f199afe7857d1437276023da7749a42d1ff18fe396abc69c5dc3e2c632aed8d"
	},
	{
		"id": "5e9af14affb6",
		"ts": "2026-09-08T03:21:30.387Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4214639.22,
		"hash": "5e9af14affb6e583a2f106610d5ef4b936be200ba05364302fa6c452535e39b1"
	},
	{
		"id": "9060ab9916f8",
		"ts": "2026-09-08T03:21:30.610Z",
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
		"liquidityUsd": 1433661.67,
		"hash": "9060ab9916f89dc4cf1b9cc6c3afbbe7776f4b1a80ff81e5658d5bc442feb260"
	},
	{
		"id": "1ece77c9c522",
		"ts": "2026-09-08T03:21:30.828Z",
		"symbol": "LAPTOP",
		"token": "0x4FB636434b05C5dbcf0070f2e810f8E706277b07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5009424.76,
		"hash": "1ece77c9c5225247d4eba82f8082f9427143c0522522430de5e992c4a58540ae"
	},
	{
		"id": "5053ee8c6cac",
		"ts": "2026-09-07T23:56:48.875Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117256384.92,
		"hash": "5053ee8c6cacd6ca148593d80182c0ed22899b82166c5be149e8f56bd18f150c"
	},
	{
		"id": "c13271413996",
		"ts": "2026-09-07T23:56:49.591Z",
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
		"liquidityUsd": 20657046.67,
		"hash": "c13271413996f65d98c8854db9ac2453d074a9cc71689b6f4b5c67bd1eae39da"
	},
	{
		"id": "504e4bd2aed7",
		"ts": "2026-09-07T23:56:50.133Z",
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
		"liquidityUsd": 1018424.83,
		"hash": "504e4bd2aed739f8fa51326570ef6e61971f384d9533e93f3e9bed9f689e1da1"
	},
	{
		"id": "e4f799cb5a7d",
		"ts": "2026-09-07T23:56:50.586Z",
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
		"liquidityUsd": 32829186.71,
		"hash": "e4f799cb5a7db23540dd94873165b4954df4ec4b4337289ace12a22123bc60d9"
	},
	{
		"id": "e8d60577db2f",
		"ts": "2026-09-07T23:56:50.822Z",
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
		"liquidityUsd": 4387728.98,
		"hash": "e8d60577db2f5b35a8e806a6b31a1a6d8999d3051e3fcfbbab9c3628f47c21ab"
	},
	{
		"id": "e6125dc127dc",
		"ts": "2026-09-07T23:56:51.065Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1205973.81,
		"hash": "e6125dc127dc16afd88ef80eeb87dfe59cc30a04769817afb3955525f1fe7a05"
	},
	{
		"id": "a5ffc82ca6ee",
		"ts": "2026-09-07T23:56:51.308Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32829186.71,
		"hash": "a5ffc82ca6ee890e7daf1421adcea386a87c7e9e92f6790ff681aa98364bb2f1"
	},
	{
		"id": "5f8d56a2af5d",
		"ts": "2026-09-07T23:56:51.625Z",
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
		"liquidityUsd": 2353868.08,
		"hash": "5f8d56a2af5d51f04213b0cd61b654e95db644d82766ef336b2b8228b8adc530"
	},
	{
		"id": "526abf2bee1f",
		"ts": "2026-09-07T23:56:51.884Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 955485.67,
		"hash": "526abf2bee1febe0a196dc59ba88e8b863632634d4c4a3e4469c307efd9ae2d6"
	},
	{
		"id": "824badc95202",
		"ts": "2026-09-07T23:56:52.569Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 965558.28,
		"hash": "824badc952026946022b969495c94efb10f3a36d7e0d0c6d269d2485ae63dc73"
	},
	{
		"id": "04bccf8a6c0d",
		"ts": "2026-09-07T23:56:52.794Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1670452.21,
		"hash": "04bccf8a6c0d9aab66dce680b231d4a5567f56a6a6686a20beb0c937f70c7c11"
	},
	{
		"id": "8d2632943d46",
		"ts": "2026-09-07T23:56:53.014Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 177913.41,
		"hash": "8d2632943d46e10d2d3641431c6f49dfe95481229ce4f99bea719094b90cc010"
	},
	{
		"id": "acdc52264f69",
		"ts": "2026-09-07T23:56:53.238Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3306550.33,
		"hash": "acdc52264f6916c6dbd20a7f2c84c65b82cbc1f22a1c6f61945ed1a3e71377ba"
	},
	{
		"id": "4238d223f505",
		"ts": "2026-09-07T23:56:53.456Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 298543.67,
		"hash": "4238d223f50594d89eeb5df957f15d10d6b14fb60863667e698fff1ea5caf4b2"
	},
	{
		"id": "b0b9a673940f",
		"ts": "2026-09-07T23:56:53.676Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13636850.68,
		"hash": "b0b9a673940f09c65d8a37aa45b049cbc679954fd838b63cec4fec16500fe9a8"
	},
	{
		"id": "cf32c620beb2",
		"ts": "2026-09-07T23:56:53.898Z",
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
		"liquidityUsd": 1458656.49,
		"hash": "cf32c620beb2e89e38f3e5dd778daf73023b1a65dd890cfe52f999423cef9d63"
	},
	{
		"id": "f8be1ae3c218",
		"ts": "2026-09-07T23:56:54.125Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 183385.25,
		"hash": "f8be1ae3c218aec8a1f15b74addd5ffbb923a379b91fec63c81f8425e8024164"
	},
	{
		"id": "7d3d6650d28c",
		"ts": "2026-09-07T23:56:54.352Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4210247.81,
		"hash": "7d3d6650d28ceb0e176990596cc3a50462470e4af8a9f1965d92c05e96fcb655"
	},
	{
		"id": "c2b1bfa76e83",
		"ts": "2026-09-07T23:56:54.583Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1170119.35,
		"hash": "c2b1bfa76e83f02793fa26d8ff1aa10e9a70c3889e25963f7859874b844d591c"
	},
	{
		"id": "f55813ecd5bd",
		"ts": "2026-09-07T21:53:44.634Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117284043.26,
		"hash": "f55813ecd5bd08025e2596820f55ce72cd0c40528583b313d49321b2d1fc717d"
	},
	{
		"id": "66f12450583b",
		"ts": "2026-09-07T21:53:44.933Z",
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
		"liquidityUsd": 20738200.56,
		"hash": "66f12450583bfe0868dda6f5759b251655982aef3bca83dcb98157b67f93b12a"
	},
	{
		"id": "d769e4bfdd7e",
		"ts": "2026-09-07T21:53:45.139Z",
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
		"liquidityUsd": 1017854.01,
		"hash": "d769e4bfdd7e5e071ea6500f396a546c9ef8dbe1e06f9086fbe5537ff58dc624"
	},
	{
		"id": "070d217dc8a3",
		"ts": "2026-09-07T21:53:45.339Z",
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
		"liquidityUsd": 33458966.97,
		"hash": "070d217dc8a3462d75ea6dc4d30272f4a698284ceb71a814fadf3973d44ffe71"
	},
	{
		"id": "53838b3c37e7",
		"ts": "2026-09-07T21:53:45.561Z",
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
		"liquidityUsd": 4391073.94,
		"hash": "53838b3c37e781094f9128750f63af5babd017edb5c201ea37acb70a04154d3b"
	},
	{
		"id": "fbbe89a10fa7",
		"ts": "2026-09-07T21:53:45.760Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1205806.08,
		"hash": "fbbe89a10fa7b9883cc3a46fd268b2c5d4ca0e35181c93e2f55c76da2b34168e"
	},
	{
		"id": "eacca3e99b0a",
		"ts": "2026-09-07T21:53:45.956Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 33458966.97,
		"hash": "eacca3e99b0abcc223ad27b82c3949a0019ed5f312b1eb6c448449730ae8f05b"
	},
	{
		"id": "222745d74a26",
		"ts": "2026-09-07T21:53:46.171Z",
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
		"liquidityUsd": 2351320.26,
		"hash": "222745d74a266f02577713210b664de4849ecef0fcc8f4cde9f7ff8411938e9e"
	},
	{
		"id": "0bfb79349808",
		"ts": "2026-09-07T21:53:46.363Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 929094.34,
		"hash": "0bfb7934980872d410a4e0c04dfe1fc63446e841a7eba1591cb4b3179c2df84a"
	},
	{
		"id": "5f39031e7165",
		"ts": "2026-09-07T21:53:46.579Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 986616.57,
		"hash": "5f39031e716580023af1f612138717bfb0a4b8005759347bd161c5c1469d3ebc"
	},
	{
		"id": "9af29259e689",
		"ts": "2026-09-07T21:53:46.790Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1777476.33,
		"hash": "9af29259e6897a3b5c8f6bddf5ded7f7b8010ae735466ae4b2b293617f3eb614"
	},
	{
		"id": "2dea695ab50a",
		"ts": "2026-09-07T21:53:46.968Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 187221.42,
		"hash": "2dea695ab50aef275847afb697751c745f76cad13c4f5ca19987fceec0f53f32"
	},
	{
		"id": "e2d04158eba0",
		"ts": "2026-09-07T21:53:47.149Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 183562.2,
		"hash": "e2d04158eba0aae43020a42f99e3976c5a74c8055426c9ea8327402add52e265"
	},
	{
		"id": "507604042ede",
		"ts": "2026-09-07T21:53:47.425Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3296770.06,
		"hash": "507604042edeaf6718c07b81a660ec021d1b25b2eaa778aa82f57ff21b45773d"
	},
	{
		"id": "412e24c97d60",
		"ts": "2026-09-07T21:53:47.619Z",
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
		"liquidityUsd": 1428034.69,
		"hash": "412e24c97d6063e23fc4aeaddd655a9d22c3ca62ebccd5e671ed015ca8e19a27"
	},
	{
		"id": "e3c29236d9e9",
		"ts": "2026-09-07T21:53:47.885Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4207336.06,
		"hash": "e3c29236d9e9070c91af736c69b77ab9964586a306be0ce7a29b3d3110e827f4"
	},
	{
		"id": "b40588ede9c1",
		"ts": "2026-09-07T21:53:48.086Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 305360.25,
		"hash": "b40588ede9c1f52384c584694804e16e9b862c55af4ad71ee4d291f1135f8474"
	},
	{
		"id": "5071e123d068",
		"ts": "2026-09-07T21:53:48.278Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1169975.09,
		"hash": "5071e123d0684ebf11bb770b65ab1aae69cd13f5939c6ca1be0ee628a07cc476"
	},
	{
		"id": "aa6d60ffc3aa",
		"ts": "2026-09-07T18:36:09.251Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117443800.72,
		"hash": "aa6d60ffc3aaa4dd5e7ec438fe63790951a7e37f04ee9257b7f1449902713237"
	},
	{
		"id": "037f4770cd83",
		"ts": "2026-09-07T18:36:09.494Z",
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
		"liquidityUsd": 20281582.4,
		"hash": "037f4770cd83ba66eba581deb90acf42a9e4567908a13c542059546c69d72cf1"
	},
	{
		"id": "2299647b6816",
		"ts": "2026-09-07T18:36:09.938Z",
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
		"liquidityUsd": 1017781.31,
		"hash": "2299647b6816a2424a6f19852966352551924da6f1aa4a9384c1eb0dc5fccd43"
	},
	{
		"id": "298c6f7c083f",
		"ts": "2026-09-07T18:36:10.200Z",
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
		"liquidityUsd": 32320424.88,
		"hash": "298c6f7c083fb0233bf5de42779be75556d7f7bf4d649e1c84590ef4d77e2d08"
	},
	{
		"id": "6f1eb657c47e",
		"ts": "2026-09-07T18:36:10.470Z",
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
		"liquidityUsd": 4386677.72,
		"hash": "6f1eb657c47e62805dcf49b3d5197adbf0e11288a18959d0155eba5c9e1f8cdb"
	},
	{
		"id": "ed7db794efb3",
		"ts": "2026-09-07T18:36:10.711Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1204682.43,
		"hash": "ed7db794efb31e64bf482eb5677c69d0565e561700ff82d01c70c2987057cf9b"
	},
	{
		"id": "5b7c1058b609",
		"ts": "2026-09-07T18:36:10.944Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 32320424.88,
		"hash": "5b7c1058b60908bc4b7bd624db4c03e7f272236a1a87ff58ca98ccbceb2bf731"
	},
	{
		"id": "5c4e10c0a714",
		"ts": "2026-09-07T18:36:11.199Z",
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
		"liquidityUsd": 2350893.38,
		"hash": "5c4e10c0a714099e9ba292378bb62dcdf92506695af9dfeb0b6dc736024e2569"
	},
	{
		"id": "568fed07f91d",
		"ts": "2026-09-07T18:36:11.459Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 995405.12,
		"hash": "568fed07f91de1051a78016937bd2536a72cd9d92183d3eaef7642a0d2f958a7"
	},
	{
		"id": "d21980ffc07a",
		"ts": "2026-09-07T18:36:11.714Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 997069.04,
		"hash": "d21980ffc07ac46ceef60a8cf2ec7fdda1787eb26f611d4fbdc518a629c7a6ef"
	},
	{
		"id": "ecb81c57acfc",
		"ts": "2026-09-07T18:36:11.937Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 283626.19,
		"hash": "ecb81c57acfc8376dccbbc3cb6ad655a95c079d3eb4f1bdfbc41733eb50c0c00"
	},
	{
		"id": "7c81dc44e77b",
		"ts": "2026-09-07T18:36:12.173Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1756477.54,
		"hash": "7c81dc44e77bec29ea7a5af21e7c959201ec31c4e3e5c7f16e96a5ffb1baa173"
	},
	{
		"id": "02bfa0acb93e",
		"ts": "2026-09-07T18:36:12.397Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 191493.91,
		"hash": "02bfa0acb93e78d087927aaedfbb9a37fb37f448316147f5784a0d23f8c8ec0f"
	},
	{
		"id": "76f2803d3a56",
		"ts": "2026-09-07T18:36:12.621Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 197893.77,
		"hash": "76f2803d3a5675504e7baf9ad21cb5924178ab196ab80ba0e80a29de213c0ecb"
	},
	{
		"id": "93434111c2ae",
		"ts": "2026-09-07T18:36:12.845Z",
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
		"liquidityUsd": 1409053.76,
		"hash": "93434111c2ae0432b9647953c2b64003f866064e3d3876461dc7d8f9444b259c"
	},
	{
		"id": "6794597ac228",
		"ts": "2026-09-07T18:36:13.082Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3326559.62,
		"hash": "6794597ac22856d7ac035704ab6f434865a5c3fb9cf7d793b594a8eac9f7100d"
	},
	{
		"id": "f94bc175af0e",
		"ts": "2026-09-07T18:36:13.302Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4194493.6,
		"hash": "f94bc175af0ed9021225d9e0762cd4ed895c6bd9bbf8e8cd6758840eb78256d1"
	},
	{
		"id": "85e2a4b63023",
		"ts": "2026-09-07T18:36:13.524Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 394323.92,
		"hash": "85e2a4b63023e4de841821078b90a4fec06b8987b8823f131ed67dd332dae02d"
	},
	{
		"id": "220c0ec22e5d",
		"ts": "2026-09-07T13:56:22.757Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117445373.09,
		"hash": "220c0ec22e5d02e9c98019d291f8cc1cf716e528384b0a005fc484b861ff187f"
	},
	{
		"id": "a0fd9656079d",
		"ts": "2026-09-07T13:56:23.287Z",
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
		"liquidityUsd": 20638052.13,
		"hash": "a0fd9656079dbc27cc54f8216b193bd744f361baae94bb8a629191f63f583665"
	},
	{
		"id": "529737c6c97f",
		"ts": "2026-09-07T13:56:23.505Z",
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
		"liquidityUsd": 1020749.63,
		"hash": "529737c6c97f06888605658090c647a39cfb64aa0a5c4622a9cac38ef8b73534"
	},
	{
		"id": "dd2922c5ab8f",
		"ts": "2026-09-07T13:56:23.875Z",
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
		"liquidityUsd": 30432170.13,
		"hash": "dd2922c5ab8f01d1e01dc9c17074a81bdb53814be711a5477ee62f8d5e9490f5"
	},
	{
		"id": "aa2f3348d276",
		"ts": "2026-09-07T13:56:24.220Z",
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
		"liquidityUsd": 4396281.33,
		"hash": "aa2f3348d276bc9df3f77e7214d0e427ae560ce1672f8231bb3eb97a242eff18"
	},
	{
		"id": "9e5fdac6fb41",
		"ts": "2026-09-07T13:56:24.586Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1212372.22,
		"hash": "9e5fdac6fb41b788cc628833ad316b22a3e0109d9a81addf8e624311be0de750"
	},
	{
		"id": "264e1407ffc1",
		"ts": "2026-09-07T13:56:24.789Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30432170.13,
		"hash": "264e1407ffc13e6fc3290bee49ba2c86284875323d969fec026a9e99bf815670"
	},
	{
		"id": "e428421f4a7b",
		"ts": "2026-09-07T13:56:25.157Z",
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
		"liquidityUsd": 2825283.14,
		"hash": "e428421f4a7bca9b9728729258e809fc1a810d9b4a0fcfb0037ab465e1f201d1"
	},
	{
		"id": "bbcfb8aae326",
		"ts": "2026-09-07T13:56:25.357Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1031824.1,
		"hash": "bbcfb8aae32659c7c1128733365d3ce851b41cb3aafdc26b2db45baa90149228"
	},
	{
		"id": "24d275aeb8bb",
		"ts": "2026-09-07T13:56:25.589Z",
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
		"liquidityUsd": 282784.03,
		"hash": "24d275aeb8bba00af6e2b0235473798367b4efc8d6d53b0deeb222bb3a9a8a06"
	},
	{
		"id": "ca5836f5d9c3",
		"ts": "2026-09-07T13:56:25.787Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1033687.75,
		"hash": "ca5836f5d9c337ec6d4d77ffb29a5e0b0186026d0b7220758773fc35db115a6c"
	},
	{
		"id": "f310419466cf",
		"ts": "2026-09-07T13:56:25.970Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1672232.29,
		"hash": "f310419466cf9efcf2c78d514e9756403d09434832431bd7083f5dedcacf6d10"
	},
	{
		"id": "851dedac25b4",
		"ts": "2026-09-07T13:56:26.172Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 193440.29,
		"hash": "851dedac25b491a6600692adf0982d24341eec4de787f835e9db6719ac0974c1"
	},
	{
		"id": "db5ae76d07ea",
		"ts": "2026-09-07T13:56:26.379Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 204793.18,
		"hash": "db5ae76d07ead5dad0cde44705764f310b55f4a7c6e11d1e8a9ed19ae9646118"
	},
	{
		"id": "5b8abd71d6fd",
		"ts": "2026-09-07T13:56:26.576Z",
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
		"liquidityUsd": 1491488.31,
		"hash": "5b8abd71d6fd6323c2dd7dbbf6e19e4562d67b762c8bc7936eaa7a1591ade015"
	},
	{
		"id": "b29068f5e439",
		"ts": "2026-09-07T13:56:26.757Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 418417.62,
		"hash": "b29068f5e4391957f5f4f26815476109cedf8c46b50fc1292cab097842d17310"
	},
	{
		"id": "56545a6360e4",
		"ts": "2026-09-07T13:56:26.953Z",
		"symbol": "ClawBank",
		"token": "0x16332535E2c27da578bC2e82bEb09Ce9d3C8EB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 308985.07,
		"hash": "56545a6360e470ee3c0a9608e432a9491cd3618f3e160b3371de8c2e8105ea60"
	},
	{
		"id": "42347874ac0f",
		"ts": "2026-09-07T13:56:27.136Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3370572.98,
		"hash": "42347874ac0f4a6835cb414dfc51aeae40f010282bc1ef20cab2f5ecbf8e517f"
	},
	{
		"id": "89ee86297139",
		"ts": "2026-09-07T13:56:27.343Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1181539.48,
		"hash": "89ee8629713912843a44bd68791fadd882e21ddc5d3bc500e30e8d570ae4b390"
	},
	{
		"id": "be93de04cdb0",
		"ts": "2026-09-07T13:56:27.547Z",
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
		"liquidityUsd": 574351.6,
		"hash": "be93de04cdb0a69a0e2f3ddd176845568751332a7faf5289f7a63a0adc3dfa5c"
	},
	{
		"id": "79d37cfffdd7",
		"ts": "2026-09-07T07:52:00.864Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116967669.03,
		"hash": "79d37cfffdd7e4ba291f8d824fa0166649cbb194a655d324b27f4c81343c9ccc"
	},
	{
		"id": "d9f54c94a98f",
		"ts": "2026-09-07T07:52:01.134Z",
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
		"liquidityUsd": 19982775.76,
		"hash": "d9f54c94a98f16b2ee175cb6cdb4b4bb2f11db363e0805211039fe96bff8e736"
	},
	{
		"id": "09a5a8891bfc",
		"ts": "2026-09-07T07:52:01.391Z",
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
		"liquidityUsd": 1014178.78,
		"hash": "09a5a8891bfc4a05b4fe226c1b34ec6722a22a2f175673061dffbe8ca4769c6f"
	},
	{
		"id": "daad06e7a269",
		"ts": "2026-09-07T07:52:01.655Z",
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
		"liquidityUsd": 30317992.63,
		"hash": "daad06e7a2693a7cb023da6c2f65abc72ff5b4cdeb70d721c4317808c6b5d504"
	},
	{
		"id": "26ccfc525552",
		"ts": "2026-09-07T07:52:02.057Z",
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
		"liquidityUsd": 4382505.51,
		"hash": "26ccfc525552c71d9dff92fb0f26446fa2f130ae5112b75d64dd3ffd90da30e1"
	},
	{
		"id": "1dde9e863e27",
		"ts": "2026-09-07T07:52:02.425Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1201039.08,
		"hash": "1dde9e863e27b69a222e018a3693a1874736b3e06b63eaa24ea144689022faa1"
	},
	{
		"id": "a521d21e3125",
		"ts": "2026-09-07T07:52:02.757Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30317879.92,
		"hash": "a521d21e31254a02cfd0cbbe76c711e245029b69536ec3653d946893aee3b73d"
	},
	{
		"id": "3a8f8bfc1f56",
		"ts": "2026-09-07T07:52:03.038Z",
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
		"liquidityUsd": 2812283.23,
		"hash": "3a8f8bfc1f561315560263b5a0b6d5ce180e598b2c4d7c190f761d8c5a771917"
	},
	{
		"id": "f53e29e2c540",
		"ts": "2026-09-07T07:52:03.272Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 983287.43,
		"hash": "f53e29e2c5408cc1011d2a6d4c506c6c8ac8ece4977b05561e3600ea3274e7a3"
	},
	{
		"id": "9a250abb2ed1",
		"ts": "2026-09-07T07:52:03.568Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1015053.96,
		"hash": "9a250abb2ed1873782333948c01da05db0ec690c784cc19cb5057366e487635c"
	},
	{
		"id": "0c5b23e2476d",
		"ts": "2026-09-07T07:52:03.787Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 278641.76,
		"hash": "0c5b23e2476de2dd3fd67254b3329b06fc3ff8fc322d948b9a17d03e29e8d7ea"
	},
	{
		"id": "d13a0a2efc45",
		"ts": "2026-09-07T07:52:04.010Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 216257.87,
		"hash": "d13a0a2efc45e324cb127a509265a793212cd6a778af313bac2aeb8109edbc35"
	},
	{
		"id": "5bb9d27a33fa",
		"ts": "2026-09-07T07:52:04.243Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1667620.53,
		"hash": "5bb9d27a33fad2eaeae6a6289b3abacf0c64bcb3905efa87f9adec56d2ccf74b"
	},
	{
		"id": "fd84db0f939d",
		"ts": "2026-09-07T07:52:04.484Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 199557.25,
		"hash": "fd84db0f939d6a2be67db8b900f3e35039a930e6c77d4d6a0219f244d270b8dc"
	},
	{
		"id": "a77d353584c2",
		"ts": "2026-09-07T07:52:04.719Z",
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
		"liquidityUsd": 1358564.98,
		"hash": "a77d353584c20d0c4768b26d6e00e4c406021e4c280c35dc304a08cfb1fcb398"
	},
	{
		"id": "1787fd2866c9",
		"ts": "2026-09-07T07:52:04.951Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 414396.35,
		"hash": "1787fd2866c955883846705a18f48e6895427385a9ba859811a4b7bc0abfdef1"
	},
	{
		"id": "36ab3454b20f",
		"ts": "2026-09-07T07:52:05.184Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3315765.35,
		"hash": "36ab3454b20f8b8efab908874956f6023f9ae250489a076b12f9f5acb868d965"
	},
	{
		"id": "525b13ed808e",
		"ts": "2026-09-07T07:52:05.403Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1175818.16,
		"hash": "525b13ed808e944365010d9d6dd60a691934ddeb6f3b652d011da3a8e71fe91e"
	},
	{
		"id": "ae3a2aff92ee",
		"ts": "2026-09-07T07:52:05.622Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13070837.71,
		"hash": "ae3a2aff92ee9f585b1f974f3e2facbc07086fe2d0ebdf0e9449bbe6db78f3d9"
	},
	{
		"id": "e74d59061e39",
		"ts": "2026-09-07T02:40:55.173Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117462939.66,
		"hash": "e74d59061e3918ed6bd53c901d357d62691f6b57f4d993db66b96993c10a6395"
	},
	{
		"id": "7eb87b752a52",
		"ts": "2026-09-07T02:40:55.482Z",
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
		"liquidityUsd": 14138822.68,
		"hash": "7eb87b752a52dd50b0d543863d29340f751767d11d3d6b1fa1c77aca0d2a80c1"
	},
	{
		"id": "70634813a6f2",
		"ts": "2026-09-07T02:40:55.765Z",
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
		"liquidityUsd": 1030066.59,
		"hash": "70634813a6f241409bad3f64f567fb343c848db3d89f849acfe0123e5765cf10"
	},
	{
		"id": "d0cd110468f6",
		"ts": "2026-09-07T02:40:56.089Z",
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
		"liquidityUsd": 30851922.59,
		"hash": "d0cd110468f63641d23ac9bc993be7548f0c18efce304d61440080aa90bd8d6d"
	},
	{
		"id": "ecf5cfe4f487",
		"ts": "2026-09-07T02:40:56.461Z",
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
		"liquidityUsd": 4415691.58,
		"hash": "ecf5cfe4f4877ac0735d3fceb089a2aa23f8a4d93b67fde9b48806e22800e893"
	},
	{
		"id": "deb72aa53c88",
		"ts": "2026-09-07T02:40:57.084Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1216092.96,
		"hash": "deb72aa53c88fdca24cdcafd7e75688700aaa250836cfa48110fc6c6bc69d97f"
	},
	{
		"id": "64d4b8aca088",
		"ts": "2026-09-07T02:40:57.479Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3328298.4,
		"hash": "64d4b8aca088bde54cb1ebc52668a9a3a48835fc96b81c68c41d2f4ee8ce9977"
	},
	{
		"id": "25945c34c7c8",
		"ts": "2026-09-07T02:40:57.728Z",
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
		"liquidityUsd": 1750378.58,
		"hash": "25945c34c7c8e04740a764cf8f7e6e7f1eb040e6ab3a9dd356f31d439772c288"
	},
	{
		"id": "ef30be3ca797",
		"ts": "2026-09-07T02:40:57.964Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1175221.97,
		"hash": "ef30be3ca7977357f91cb24e2e8d83d2ec3a2caf3dfebb3d08e50729267a2601"
	},
	{
		"id": "fc41804bf3ce",
		"ts": "2026-09-07T02:40:58.205Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1048331.32,
		"hash": "fc41804bf3ce8e4c1536128dc2c7490b90508d1ed30db0f6c2d3fdad9c17e5f4"
	},
	{
		"id": "4869eb8f6e97",
		"ts": "2026-09-07T02:40:58.425Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 240042.26,
		"hash": "4869eb8f6e97c5e75b1179900a992e52269a434de0283125cb46743eaf536392"
	},
	{
		"id": "4d7422d60744",
		"ts": "2026-09-07T02:40:58.663Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 277793.15,
		"hash": "4d7422d607444d018c3f551bfa3aff1918b010d8ce955847ea8c6a09e3c28cf6"
	},
	{
		"id": "148a7b86fbee",
		"ts": "2026-09-07T02:40:58.868Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1621459.51,
		"hash": "148a7b86fbeed3d8337e638b22c47e1ac9bf379fad0db5ba37fd625f881e6493"
	},
	{
		"id": "fd5edcbbdae0",
		"ts": "2026-09-07T02:40:59.066Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207386.17,
		"hash": "fd5edcbbdae05893d70da54927049c0ad15ae67261b31621f8ee3ce5aef597c9"
	},
	{
		"id": "28e3c74d4623",
		"ts": "2026-09-07T02:40:59.268Z",
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
		"liquidityUsd": 1407223.66,
		"hash": "28e3c74d4623a237899449e37589270417053d55f38d42b43c8283dd440cf5b0"
	},
	{
		"id": "6ba45a7d09ea",
		"ts": "2026-09-07T02:40:59.465Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1109744.27,
		"hash": "6ba45a7d09ea7672123a81288cd8c74eba4b6d9da653e200b24af4337f108c59"
	},
	{
		"id": "986c376acbfb",
		"ts": "2026-09-07T02:40:59.687Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 393021.76,
		"hash": "986c376acbfbb356915ec1ef26e1dece2bd418394b1dd941650c261c192d5b6b"
	},
	{
		"id": "190aedc24ed2",
		"ts": "2026-09-07T02:40:59.892Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3414009.04,
		"hash": "190aedc24ed2a8f4d6e1d49829a90cc4fa7a8babede51acbae4f346651611be0"
	},
	{
		"id": "fd37bc8c657a",
		"ts": "2026-09-07T02:41:00.117Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13219703.49,
		"hash": "fd37bc8c657a5e353b6f33808b5897272a7fbf11c45882a126582d99a5a02024"
	},
	{
		"id": "0b26d89c80d3",
		"ts": "2026-09-06T23:35:07.289Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117340720.03,
		"hash": "0b26d89c80d3789778644074741f96353f46f71380ea7d6250bffa007b1d6884"
	},
	{
		"id": "faf146e1f786",
		"ts": "2026-09-06T23:35:08.011Z",
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
		"liquidityUsd": 19384964.88,
		"hash": "faf146e1f786bbeea6b447ec994947b63583842a78aab13c6a9dedb7f61fb4ef"
	},
	{
		"id": "698a9ad1c923",
		"ts": "2026-09-06T23:35:08.509Z",
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
		"liquidityUsd": 1045181.99,
		"hash": "698a9ad1c9236d510eca07380a583c36915c41432082be09ca58e2a6ee0bcba4"
	},
	{
		"id": "32a6920f9ff9",
		"ts": "2026-09-06T23:35:08.994Z",
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
		"liquidityUsd": 30815227.36,
		"hash": "32a6920f9ff9cb260f6a4b8aab5e1b8503bd41805e7de5149bc693b2687ef62c"
	},
	{
		"id": "d9d350bb7d38",
		"ts": "2026-09-06T23:35:09.291Z",
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
		"liquidityUsd": 4398590.51,
		"hash": "d9d350bb7d38a9c7adbdd973a1713cb195497da71971d4785270872199f649f5"
	},
	{
		"id": "c34fe6010773",
		"ts": "2026-09-06T23:35:09.617Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1225625.73,
		"hash": "c34fe6010773eed6842015fc5006723833b15b6e1adcdd0728c3108eac8fc548"
	},
	{
		"id": "aa072633a1ed",
		"ts": "2026-09-06T23:35:09.885Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30815227.36,
		"hash": "aa072633a1ed907b582d94bcb729c6ba745963b61a22b92c8a899cf03d09090d"
	},
	{
		"id": "a674a5629463",
		"ts": "2026-09-06T23:35:10.150Z",
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
		"liquidityUsd": 1735952.12,
		"hash": "a674a56294635e09ca172c4334a60becabd6af974755718976fdfbdd131124bc"
	},
	{
		"id": "4781e40a7a83",
		"ts": "2026-09-06T23:35:10.420Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1260971.72,
		"hash": "4781e40a7a833f1ee1f4a952ef14fbca3381d58931d720b18616c82a19886c18"
	},
	{
		"id": "c3f31cccbd0f",
		"ts": "2026-09-06T23:35:11.224Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1130850.49,
		"hash": "c3f31cccbd0fb03ddc373c6b882969dc10f544393992ee7e30261247c828856f"
	},
	{
		"id": "686d3ea4b514",
		"ts": "2026-09-06T23:35:11.455Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 224926.68,
		"hash": "686d3ea4b514c435176622644a944a856ea1007af7a0fe0f7226f828c56219ab"
	},
	{
		"id": "d756e92d5d0c",
		"ts": "2026-09-06T23:35:11.686Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 288074.81,
		"hash": "d756e92d5d0c0495110422bbb8da4fab3258d0115051130faa1f42d1397dba1e"
	},
	{
		"id": "495ee060ca25",
		"ts": "2026-09-06T23:35:11.943Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1470198.06,
		"hash": "495ee060ca25fe4b378d46e03d77e0d0e68414b2a024d7c48d281a2c889e9c85"
	},
	{
		"id": "bff05cf0f06a",
		"ts": "2026-09-06T23:35:12.171Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 192940.76,
		"hash": "bff05cf0f06a33e4414b44d66da432799d9fbee5a67609850d9f2ad4f981fc43"
	},
	{
		"id": "4c5d23875606",
		"ts": "2026-09-06T23:35:12.403Z",
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
		"liquidityUsd": 1482482.18,
		"hash": "4c5d2387560661fc87899386bf89cd68c231b6ae984f80fee83950be0e312e1e"
	},
	{
		"id": "3a95e963c60b",
		"ts": "2026-09-06T23:35:12.631Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1039715.97,
		"hash": "3a95e963c60b02006421805b81af1ccc1ee6ebaec0d7a71364f8790a9048dffd"
	},
	{
		"id": "2750033ccdaf",
		"ts": "2026-09-06T23:35:12.863Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13142024.05,
		"hash": "2750033ccdaf55a17c766def6ea1cca2d8e0a202d3ae2de3016182b55c8ea3c6"
	},
	{
		"id": "90c650e58eb8",
		"ts": "2026-09-06T23:35:13.091Z",
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
		"liquidityUsd": 932244.96,
		"hash": "90c650e58eb8b166b168d8e69ca8357bf67cf26ea82cb2cdf9661a84cca20319"
	},
	{
		"id": "8d5392094522",
		"ts": "2026-09-06T23:35:13.331Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 434253.85,
		"hash": "8d53920945224e6112ec8aebd65b5d863e79721d17d8715f896041d71b0aacab"
	},
	{
		"id": "c457a4089a4b",
		"ts": "2026-09-06T21:57:31.676Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117284810.79,
		"hash": "c457a4089a4bc5c87ee174df1786af6ee6c832bcdc7d6b77872b44e6b6deb475"
	},
	{
		"id": "1bf7028fe97e",
		"ts": "2026-09-06T21:57:32.210Z",
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
		"liquidityUsd": 19544527.29,
		"hash": "1bf7028fe97e40af5c7def01c43dee3286b947afc350c5ea1d9b24354226528d"
	},
	{
		"id": "c9d0c801d824",
		"ts": "2026-09-06T21:57:32.473Z",
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
		"liquidityUsd": 1044001.58,
		"hash": "c9d0c801d8240871e14fa7ad1314a4b97578e2af3ce55ba67dcb10c73aafd192"
	},
	{
		"id": "0b390791d837",
		"ts": "2026-09-06T21:57:32.924Z",
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
		"liquidityUsd": 31024913.55,
		"hash": "0b390791d8373d667ba421b8f23a47a2177b75d3611b8accf27e945f198948e0"
	},
	{
		"id": "4ff40e961cf4",
		"ts": "2026-09-06T21:57:33.176Z",
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
		"liquidityUsd": 4385628.27,
		"hash": "4ff40e961cf4039966f92b6f6478aeb06ae4124ff65c9f4b93d3306456948bf8"
	},
	{
		"id": "edb2bd6fcd72",
		"ts": "2026-09-06T21:57:33.421Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1223416.14,
		"hash": "edb2bd6fcd724a1b826a56e96a48a3afc22af2ac573720ba95047526d1906569"
	},
	{
		"id": "136aab895b5e",
		"ts": "2026-09-06T21:57:33.698Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 31024913.55,
		"hash": "136aab895b5efc5c3e91533995604d48b4b48afe3794428efe22fe76855896a8"
	},
	{
		"id": "c5c6d5366782",
		"ts": "2026-09-06T21:57:33.958Z",
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
		"liquidityUsd": 1731904.79,
		"hash": "c5c6d536678243f691fccddaa8cc82366bf5af149dc7a069e4bb23b905e1927d"
	},
	{
		"id": "86ac373f1798",
		"ts": "2026-09-06T21:57:34.225Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1152490.59,
		"hash": "86ac373f17981156516cd4049416fe1b919519d0036d9e4cbab3f34ee6656a29"
	},
	{
		"id": "49c4c18f26cd",
		"ts": "2026-09-06T21:57:34.676Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1115328.04,
		"hash": "49c4c18f26cd31c430cef2cf085012d4fe7530fa45964722a35b25b26c3c4d8a"
	},
	{
		"id": "f059e60a4161",
		"ts": "2026-09-06T21:57:34.900Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 190475.77,
		"hash": "f059e60a41614dad5992f84047590a47902bf9224f31bb532a436b46e9e41f8c"
	},
	{
		"id": "6e260fe5c835",
		"ts": "2026-09-06T21:57:35.132Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 287734.28,
		"hash": "6e260fe5c8356841b0331ced907f4eeef588084dd2946a5120763c10f9b1da9c"
	},
	{
		"id": "43afbb88d7a0",
		"ts": "2026-09-06T21:57:35.375Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1507285.54,
		"hash": "43afbb88d7a05f9c1faf646ce7648be803351417b984b372d00ffd25218e4513"
	},
	{
		"id": "90a13c33923c",
		"ts": "2026-09-06T21:57:35.607Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 201590.32,
		"hash": "90a13c33923cc42cfe4303e46f26588034b1588dc361874d7da01296302d13b7"
	},
	{
		"id": "5480df9c40d5",
		"ts": "2026-09-06T21:57:35.836Z",
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
		"liquidityUsd": 1400954.92,
		"hash": "5480df9c40d55c3fb75be1450561894a55522b21ae390228bc68ad46bbc0756d"
	},
	{
		"id": "a078d8c98935",
		"ts": "2026-09-06T21:57:36.115Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1035742.47,
		"hash": "a078d8c98935c2c93e3fea647bb572721627de9bdfa01ca8bc1a2fbb78e89291"
	},
	{
		"id": "f855ca5d44a7",
		"ts": "2026-09-06T21:57:36.342Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3448457.55,
		"hash": "f855ca5d44a7aad9705b7108da54045c495bdf6f094da52fce7bcf1558ff5113"
	},
	{
		"id": "24e68bf8ee76",
		"ts": "2026-09-06T21:57:36.566Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 13108091.81,
		"hash": "24e68bf8ee76932c2ffdc5d70a99d223ca7a5f2c799c45d399736189e4df1cd7"
	},
	{
		"id": "a33da504c17d",
		"ts": "2026-09-06T21:57:36.796Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4291029.63,
		"hash": "a33da504c17dae4e84399419e5176d77f78724944dc6b06ca4c88eeb29fa3734"
	},
	{
		"id": "e28688a62657",
		"ts": "2026-09-06T19:56:19.706Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117070051.85,
		"hash": "e28688a62657667183613b20fb530adcbd1ca899aad08d57b63c5dd0a5ad2e1f"
	},
	{
		"id": "b7603fa496e3",
		"ts": "2026-09-06T19:56:20.190Z",
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
		"liquidityUsd": 19833106.81,
		"hash": "b7603fa496e35d3bcdbe59e56d7376fce2f70a124c4b432f150428473c658d0d"
	},
	{
		"id": "a02848fc106c",
		"ts": "2026-09-06T19:56:20.510Z",
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
		"liquidityUsd": 1037889.82,
		"hash": "a02848fc106c20c572dcc400e44aa8901c5cc482d90669d403c923fb81206971"
	},
	{
		"id": "54cdfdf8c954",
		"ts": "2026-09-06T19:56:20.719Z",
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
		"liquidityUsd": 30616631.87,
		"hash": "54cdfdf8c95441886f63b46b7afba21babe869eb7e67a9f1ddac3dfea13b877c"
	},
	{
		"id": "3c60e2f33212",
		"ts": "2026-09-06T19:56:20.931Z",
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
		"liquidityUsd": 4306123.14,
		"hash": "3c60e2f33212ecc395b830697ea1192f5e56d126d2901b8ef2b4204a813ae92e"
	},
	{
		"id": "2dc5a2315e67",
		"ts": "2026-09-06T19:56:21.122Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1214711.71,
		"hash": "2dc5a2315e6743f5377acf27a1f3413512d398aa5b7d1a45b334d1b5ab6342d9"
	},
	{
		"id": "5b080c7b913a",
		"ts": "2026-09-06T19:56:21.328Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3609069.63,
		"hash": "5b080c7b913a40fb856273da860021394ff5f9c56103640405e91d628b201c39"
	},
	{
		"id": "e24090d2353a",
		"ts": "2026-09-06T19:56:21.540Z",
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
		"liquidityUsd": 1720374.24,
		"hash": "e24090d2353a741ae313d2a0080d57fe9de95546af29bd9322e1908a3924d5f7"
	},
	{
		"id": "02782426719a",
		"ts": "2026-09-06T19:56:21.743Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 919352.97,
		"hash": "02782426719a96c3973a5e429dbd7fa37025866d3f812381f8cc8450fcbb5ca1"
	},
	{
		"id": "042c377e4542",
		"ts": "2026-09-06T19:56:22.109Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1104808.09,
		"hash": "042c377e4542eee26b90e4b68611111cf2499ec22e1323d9f4ec9cc18803fb56"
	},
	{
		"id": "ea24e9713cff",
		"ts": "2026-09-06T19:56:22.316Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 222089.63,
		"hash": "ea24e9713cffe165a7140eef6fd0a6055548b81f8dfeb0ef428b663302b1b860"
	}
]
