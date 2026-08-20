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
	"updatedAt": "2026-08-20T17:24:55.841Z",
	"tokensScored": 12710,
	"verdictsIssued": 12710,
	"safe": 10976,
	"risky": 914,
	"likelyRug": 820,
	"ticks": 746
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "cd571da52e3f",
		"ts": "2026-08-20T17:24:51.564Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112175859.39,
		"hash": "cd571da52e3f4fe843167635d726d4619763a1de675920808eda7bb2a4610eab"
	},
	{
		"id": "808c2c38d11f",
		"ts": "2026-08-20T17:24:51.927Z",
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
		"liquidityUsd": 15972875.33,
		"hash": "808c2c38d11f82e73dd7ad9ce7dc8a8164fa895e170e31f290d21ec14d092fe5"
	},
	{
		"id": "04802768de1d",
		"ts": "2026-08-20T17:24:52.142Z",
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
		"liquidityUsd": 876543.07,
		"hash": "04802768de1db3284f92608939c477789beee33cf926a3399157abef6d273cea"
	},
	{
		"id": "b82ad818344d",
		"ts": "2026-08-20T17:24:52.358Z",
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
		"liquidityUsd": 28377268.84,
		"hash": "b82ad818344d89592a88b4612a26ab804d97ceded7414805f04078716de7f9d4"
	},
	{
		"id": "a2da94ddc5c4",
		"ts": "2026-08-20T17:24:52.580Z",
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
		"liquidityUsd": 3255346.42,
		"hash": "a2da94ddc5c4d30e2cc452dbdd3febd5cfbfb34eef8d175a9b97e3b0a186122a"
	},
	{
		"id": "b8a9af44da69",
		"ts": "2026-08-20T17:24:52.787Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1079714.72,
		"hash": "b8a9af44da69f63c64f063fa733b9db6dfd33a972510ac0313fd3d98538cf0b0"
	},
	{
		"id": "c2b2ef4b048c",
		"ts": "2026-08-20T17:24:53.006Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.35,
		"hash": "c2b2ef4b048c54a6e9732c9a729500d3ed7ab08b822acba0cf34a4a10acd273a"
	},
	{
		"id": "0580272ff312",
		"ts": "2026-08-20T17:24:53.239Z",
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
		"liquidityUsd": 4069834.33,
		"hash": "0580272ff312c6cbd67f2fdba8820f596a480617453209ad7fb235b8558047da"
	},
	{
		"id": "7bc1b35f6da4",
		"ts": "2026-08-20T17:24:53.680Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 903022.2,
		"hash": "7bc1b35f6da48dfe54910f37e56274cea3480d4c61b9c742ea567384944d2d4e"
	},
	{
		"id": "86e3d176de01",
		"ts": "2026-08-20T17:24:53.887Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3108277.47,
		"hash": "86e3d176de0137f6ececd678f5b10195571aa0adc9d283b8ada8efc4e33867d3"
	},
	{
		"id": "dcde9412a70c",
		"ts": "2026-08-20T17:24:54.242Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4142717.73,
		"hash": "dcde9412a70cc1dff33948935421a59bc0d8ac7c3720713b5f88c9442e91ef17"
	},
	{
		"id": "30be3e61191f",
		"ts": "2026-08-20T17:24:54.446Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4328909.77,
		"hash": "30be3e61191fc55e5e0a9ad8a4315807851daad6de8f6544e706aadad0c946dc"
	},
	{
		"id": "90c20470a99c",
		"ts": "2026-08-20T17:24:54.653Z",
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
		"liquidityUsd": 449614.97,
		"hash": "90c20470a99c9c179379ca14f4a76a910b212dfe392a27bebb3438a7974687db"
	},
	{
		"id": "2bb8348687b1",
		"ts": "2026-08-20T17:24:54.859Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 593659.48,
		"hash": "2bb8348687b1f0f5f0f7fbf31474721f41de7e8bef4292ba29fd5c91bf741748"
	},
	{
		"id": "1f6fc0e4517b",
		"ts": "2026-08-20T17:24:55.076Z",
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
		"liquidityUsd": 701436.13,
		"hash": "1f6fc0e4517b29dceaf1451cf1f0d0f19faa6800e0561f6b09a7f6f334ee9892"
	},
	{
		"id": "df8e19d0c232",
		"ts": "2026-08-20T17:24:55.415Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1744152.12,
		"hash": "df8e19d0c2320e23390b64260860ecb4f36f21b3c40042c5022cf76e8001eb9e"
	},
	{
		"id": "ea695506bbc4",
		"ts": "2026-08-20T17:24:55.617Z",
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
		"liquidityUsd": 860278.13,
		"hash": "ea695506bbc419eaa8ed1ff09d92707b8dc96639d234fec9efd7ec4aebd43136"
	},
	{
		"id": "869d50bed351",
		"ts": "2026-08-20T17:24:55.840Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 337294.76,
		"hash": "869d50bed3510483b22ea4308425eb4724eb7b2d9309de917190c540c9ee317f"
	},
	{
		"id": "edeaf1ae5725",
		"ts": "2026-08-20T16:29:58.424Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112164063.33,
		"hash": "edeaf1ae57258804b9cb3e4e24e20274b877ef52a965adf7e406959bd263fb39"
	},
	{
		"id": "b7634a1f9275",
		"ts": "2026-08-20T16:29:58.936Z",
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
		"liquidityUsd": 15531759.18,
		"hash": "b7634a1f9275d74226b01a48c6a2c4c21652d83fd1fc2d885b31d00b6882c5fd"
	},
	{
		"id": "81296c3913da",
		"ts": "2026-08-20T16:29:59.216Z",
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
		"liquidityUsd": 868419.78,
		"hash": "81296c3913da44f7e54f3221297667c8c8993f774947b8627c00c2022fc97324"
	},
	{
		"id": "57f5abda1299",
		"ts": "2026-08-20T16:29:59.483Z",
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
		"liquidityUsd": 28381325.07,
		"hash": "57f5abda12992b8226ef016367183b25836e417dc97d5b03196e0ae5680583ce"
	},
	{
		"id": "4678d2ffd6ca",
		"ts": "2026-08-20T16:29:59.760Z",
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
		"liquidityUsd": 3244189.98,
		"hash": "4678d2ffd6ca3618fbd31ca3b8503e72056bfcb6c1aa1b7b51a0665e14058e25"
	},
	{
		"id": "ac64d7419848",
		"ts": "2026-08-20T16:30:00.028Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1074563.05,
		"hash": "ac64d7419848920be08f678bebd462199181e6ac36922f3c0633060541fd3667"
	},
	{
		"id": "a7862570811d",
		"ts": "2026-08-20T16:30:00.333Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.37,
		"hash": "a7862570811d25fec39f5028dce012bc459b77c0d74f93ca797894d5886409cd"
	},
	{
		"id": "4ed2659dac65",
		"ts": "2026-08-20T16:30:00.611Z",
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
		"liquidityUsd": 3845721.26,
		"hash": "4ed2659dac658fb378a641aaea608ddba8ab1d2841948bd1ed1bfb709954683c"
	},
	{
		"id": "dd8126439292",
		"ts": "2026-08-20T16:30:00.897Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 796489.2,
		"hash": "dd812643929254bbfb39ac32c74633c3227daf34e4b1a411cd99429c9b39098e"
	},
	{
		"id": "7dab6749c88e",
		"ts": "2026-08-20T16:30:02.209Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3120206.57,
		"hash": "7dab6749c88e40b20c139c2c415e5ffb2969b6518ed4c53c0143b43af742f839"
	},
	{
		"id": "7b4b36a07d7e",
		"ts": "2026-08-20T16:30:02.849Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4113481.92,
		"hash": "7b4b36a07d7ec1343ec1fb94b494195f5e09cc0bf1be845ade966aecbe9f93f6"
	},
	{
		"id": "bd96393edd80",
		"ts": "2026-08-20T16:30:03.287Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 448666.88,
		"hash": "bd96393edd80a1741881e2e130db1d711ec33892eb9391a6470f3ec438bcd3ec"
	},
	{
		"id": "6863619435e1",
		"ts": "2026-08-20T16:30:05.297Z",
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
		"liquidityUsd": 566222.24,
		"hash": "6863619435e171518b6823280bd96955940cff1b6fcb2237dc66ba20afc96730"
	},
	{
		"id": "d19d26a6b287",
		"ts": "2026-08-20T16:30:06.165Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4262719.97,
		"hash": "d19d26a6b2870e6f207edcf75da81f83422f1d2eb1dd66d5c71a3e3e73764ab1"
	},
	{
		"id": "4d4bd2462e51",
		"ts": "2026-08-20T16:30:06.472Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1732309.13,
		"hash": "4d4bd2462e510a458e4f31c922bfb89b992c446d7fc95ab02e23cddfe2d67a0f"
	},
	{
		"id": "d2b87b6e1bf6",
		"ts": "2026-08-20T16:30:06.744Z",
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
		"liquidityUsd": 701478.23,
		"hash": "d2b87b6e1bf67f96d71d7e69cb7e2512085a086a721103229f8c5c0ff91df0bb"
	},
	{
		"id": "b99ea573dfaf",
		"ts": "2026-08-20T16:30:06.997Z",
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
		"liquidityUsd": 562677.9,
		"hash": "b99ea573dfafbe2e347db798287b49067068efd2b6d8d62d3e287a718997c3fb"
	},
	{
		"id": "f64bd69ba77f",
		"ts": "2026-08-20T16:30:07.253Z",
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
		"liquidityUsd": 864857.64,
		"hash": "f64bd69ba77f12465ee7edb98433d1fb28156730adf74fbacacbb3135738a034"
	},
	{
		"id": "9dfe71ef28be",
		"ts": "2026-08-20T15:29:07.233Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111995441.55,
		"hash": "9dfe71ef28be18af88576dbc23adf48ccd3d0b9797e49933aab3ac9de116d8fc"
	},
	{
		"id": "cef355199e79",
		"ts": "2026-08-20T15:29:07.672Z",
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
		"liquidityUsd": 13518240.91,
		"hash": "cef355199e7982ad488c276aad3d9c0cbf8384733d2986253950a850165c1a8f"
	},
	{
		"id": "60fd855b97fd",
		"ts": "2026-08-20T15:29:08.119Z",
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
		"liquidityUsd": 845129.41,
		"hash": "60fd855b97fdcd7c3ba417e289a1c538d3de981def952f5b2855e4984642e5fe"
	},
	{
		"id": "ca9ad756bad9",
		"ts": "2026-08-20T15:29:08.550Z",
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
		"liquidityUsd": 28319941.21,
		"hash": "ca9ad756bad97e9191eb4e401aecf358fd33dde796d31d3f193d6a90ab8077f8"
	},
	{
		"id": "270400659146",
		"ts": "2026-08-20T15:29:08.870Z",
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
		"liquidityUsd": 3214336.5,
		"hash": "270400659146c4a19f03caf4bae49a43b16cdb7e145603d5e20717c7939ce8ac"
	},
	{
		"id": "a0ef2b08fefa",
		"ts": "2026-08-20T15:29:09.147Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1065050.35,
		"hash": "a0ef2b08fefa3f74ad00bf36ac6d92978c7fdd9f2e3babf9e6f48e8eb1496ef0"
	},
	{
		"id": "130ed72c2688",
		"ts": "2026-08-20T15:29:09.404Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.41,
		"hash": "130ed72c268812ce930f924408c66da3c3a70adf4a5fa4d8766cfd1d0d5e22ea"
	},
	{
		"id": "023bf4f80cb7",
		"ts": "2026-08-20T15:29:09.646Z",
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
		"liquidityUsd": 3808714.98,
		"hash": "023bf4f80cb73eaf87b4fef9d3761f5f21d8880025ad2b2696cf031662d340aa"
	},
	{
		"id": "ca6c25788786",
		"ts": "2026-08-20T15:29:09.912Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 806227.02,
		"hash": "ca6c2578878666f2bc4cbb5db124a17fc607da5c6176029bf5b76c34d2c6fe59"
	},
	{
		"id": "f381dd259a07",
		"ts": "2026-08-20T15:29:10.315Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4065657.1,
		"hash": "f381dd259a07fb3ac5b0bbcfebe02738b5d99f28a2571053c12f5057f74b524f"
	},
	{
		"id": "538c030e8b81",
		"ts": "2026-08-20T15:29:10.553Z",
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
		"liquidityUsd": 3050213.48,
		"hash": "538c030e8b81733d74627cad5254a015ff687e6fe57621d1330af9a7941378a3"
	},
	{
		"id": "7885c0e1137a",
		"ts": "2026-08-20T15:29:10.782Z",
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
		"liquidityUsd": 439827.76,
		"hash": "7885c0e1137a4db770bcf7572992c7a44d8e91dd3c8f5b8e7ffb92f729ad6020"
	},
	{
		"id": "7d4cb8a41a26",
		"ts": "2026-08-20T15:29:11.011Z",
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
		"liquidityUsd": 4344373.31,
		"hash": "7d4cb8a41a2633c919dc9b58b984de564b6bc2035b309919530d804c8162d531"
	},
	{
		"id": "72d0c067a807",
		"ts": "2026-08-20T15:29:11.241Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 547439.58,
		"hash": "72d0c067a807289e754901b755f8cbb8b42cc432bbc05bb51806be6e25a59a6a"
	},
	{
		"id": "1c4ac7efc1eb",
		"ts": "2026-08-20T15:29:11.480Z",
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
		"liquidityUsd": 702276.31,
		"hash": "1c4ac7efc1eb379170867e68cd22c944441ec2ef774e176d5531b9c86abf945b"
	},
	{
		"id": "1bfcd23834bb",
		"ts": "2026-08-20T15:29:11.708Z",
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
		"liquidityUsd": 565769.2,
		"hash": "1bfcd23834bb8b89c32034215d113ed9ebbea8cf7bb0afa323809ca003d9fd0a"
	},
	{
		"id": "4232e6243818",
		"ts": "2026-08-20T15:29:11.935Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1690971.04,
		"hash": "4232e6243818a81ba93904111f9b26f6c483d10a9aec1c27265a5a5a83e23eb6"
	},
	{
		"id": "49d132270370",
		"ts": "2026-08-20T15:29:12.168Z",
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
		"liquidityUsd": 862904.17,
		"hash": "49d1322703706f83b6a7da5c086596f8923932a0a338e4b9417732a2206497eb"
	},
	{
		"id": "ba0fd565eca8",
		"ts": "2026-08-20T14:32:06.410Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111517289.56,
		"hash": "ba0fd565eca8f2b71b0054284b09387d3f915e72fe621754dc3ca5f7c5a0a0cd"
	},
	{
		"id": "3d2a4db97195",
		"ts": "2026-08-20T14:32:06.743Z",
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
		"liquidityUsd": 14059303.46,
		"hash": "3d2a4db97195426974281413ba346ae2b0b13f74db2c7ed2ad10f395ee08438c"
	},
	{
		"id": "59851def535b",
		"ts": "2026-08-20T14:32:06.952Z",
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
		"liquidityUsd": 846402.33,
		"hash": "59851def535be4a1e9427254ec7468a7379a877a8b741a6fa92b5633956040a3"
	},
	{
		"id": "b232611be223",
		"ts": "2026-08-20T14:32:07.164Z",
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
		"liquidityUsd": 28122862.51,
		"hash": "b232611be22339a3fa879d86c230b83bfbc3680791cb9914a437a00ac822bb59"
	},
	{
		"id": "0e042b0e94f6",
		"ts": "2026-08-20T14:32:07.358Z",
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
		"liquidityUsd": 3187145.71,
		"hash": "0e042b0e94f66f7dc0c22272597590112c44b62a6d0de42e2a97a892ea70c998"
	},
	{
		"id": "fe7ef872d752",
		"ts": "2026-08-20T14:32:07.555Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1054881.61,
		"hash": "fe7ef872d752f4dcb57351d02298a1b162b47c1ebda5bac5d0df3e32216fa9c1"
	},
	{
		"id": "1cfd80809a84",
		"ts": "2026-08-20T14:32:07.759Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.41,
		"hash": "1cfd80809a8415d090cb6c7379d210f1b18fa8988f09de17d6b74c6e14f30f82"
	},
	{
		"id": "a9296d123ad0",
		"ts": "2026-08-20T14:32:07.954Z",
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
		"liquidityUsd": 3723561.41,
		"hash": "a9296d123ad01cf4778121c42bd8ca23f6cde0eb5772c789505aec6e0ca8fedc"
	},
	{
		"id": "77a0a21e9563",
		"ts": "2026-08-20T14:32:08.158Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 759510.01,
		"hash": "77a0a21e95637308af4dffe74bc4b4265eb6e779276e0740f31e6bb7e7734d55"
	},
	{
		"id": "5f23e83e3edb",
		"ts": "2026-08-20T14:32:08.353Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4042711.45,
		"hash": "5f23e83e3edb0ef8436e8057f8e80b80a04bbe82c3e8ee2adef8f80cd5d865af"
	},
	{
		"id": "94e24d5f7b50",
		"ts": "2026-08-20T14:32:08.562Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3048087.66,
		"hash": "94e24d5f7b50195e443b1f3dffafe50f1c627e15e678eb26b70b4fb016ca150b"
	},
	{
		"id": "de8c73d90045",
		"ts": "2026-08-20T14:32:08.755Z",
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
		"liquidityUsd": 427618.16,
		"hash": "de8c73d9004507fd4d3b287f6f3f630db069dcf7c30a8a76898252cd10ed0bbc"
	},
	{
		"id": "aa87835ec33b",
		"ts": "2026-08-20T14:32:09.205Z",
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
		"liquidityUsd": 553819.72,
		"hash": "aa87835ec33b14626142eec917e243bf9407b1538368bf1420295c191eed7b32"
	},
	{
		"id": "f94c5d31cf3a",
		"ts": "2026-08-20T14:32:09.731Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4350588.43,
		"hash": "f94c5d31cf3a78554d30bfdcd4d43e190c053ec7d8eff39cd8ca907e9e4061e5"
	},
	{
		"id": "bf1f42d5088a",
		"ts": "2026-08-20T14:32:09.925Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 541956.29,
		"hash": "bf1f42d5088a53be74f38205397ae584bbb9b254449d5cd2d011f348054be64e"
	},
	{
		"id": "f5f4c8cb9662",
		"ts": "2026-08-20T14:32:10.117Z",
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
		"liquidityUsd": 689067.99,
		"hash": "f5f4c8cb9662c481e31ef8888ee3ce574c13bb58e24112e5a591a63d7631d8c3"
	},
	{
		"id": "81ac21442455",
		"ts": "2026-08-20T14:32:10.337Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1667215.79,
		"hash": "81ac214424558ac78aa8effe98c954d13ecc48f8d6bd23872a16019ffefd7d50"
	},
	{
		"id": "7b6b9dd7c80a",
		"ts": "2026-08-20T14:32:10.531Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 322674.23,
		"hash": "7b6b9dd7c80a569ea7ce82438525984ed384f52f6f702a45d51bd1cc9559a68e"
	},
	{
		"id": "5a000cdfb9a7",
		"ts": "2026-08-20T13:41:59.576Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111146404.16,
		"hash": "5a000cdfb9a7d4efef050ce6a72771fdf1c8d1dd98e125b23a65bad742f037bc"
	},
	{
		"id": "128cc663617f",
		"ts": "2026-08-20T13:41:59.809Z",
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
		"liquidityUsd": 13169342.63,
		"hash": "128cc663617fa75411557837bc93a4439af558fccc82f2f5ca2c4e2ba8076cbd"
	},
	{
		"id": "0cd0386eae79",
		"ts": "2026-08-20T13:42:00.042Z",
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
		"liquidityUsd": 852451.61,
		"hash": "0cd0386eae79fc1dfb8f4b82c8447706f8df7eb525ae662dad6bfd93a80f333c"
	},
	{
		"id": "ecac9b8e0c49",
		"ts": "2026-08-20T13:42:00.291Z",
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
		"liquidityUsd": 28043880.86,
		"hash": "ecac9b8e0c49848d898010b2bf48381f784be9ee9bddb224848554ad6959ac04"
	},
	{
		"id": "97203af9d087",
		"ts": "2026-08-20T13:42:00.525Z",
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
		"liquidityUsd": 3206851.92,
		"hash": "97203af9d087232330f0dfbd3af0b72a28d90fbf9ccad53d9f6a004d537304e9"
	},
	{
		"id": "55710fc60cc4",
		"ts": "2026-08-20T13:42:00.756Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1050958.68,
		"hash": "55710fc60cc479ba5815b9becdf15adcecb7e315b36aa44a28611ee6b45c4fdf"
	},
	{
		"id": "f77ea122d571",
		"ts": "2026-08-20T13:42:00.982Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.62,
		"hash": "f77ea122d5716ff285ede2703984d15790c6f3f40bbb16831f5dbecef373ba07"
	},
	{
		"id": "5da41346b6a7",
		"ts": "2026-08-20T13:42:01.223Z",
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
		"liquidityUsd": 3711009.07,
		"hash": "5da41346b6a7ee1876ac61ca86f4af88912c5307a25d19d3d5da75ddfb66ce6f"
	},
	{
		"id": "c2b75f17fd62",
		"ts": "2026-08-20T13:42:01.459Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4029900.81,
		"hash": "c2b75f17fd62c9ca7192a03295bb617c8a8246249c8fdb7e27880b18748d9262"
	},
	{
		"id": "a247e319112f",
		"ts": "2026-08-20T13:42:01.746Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 735373,
		"hash": "a247e319112f0752a8e0ab99a96b581bd38372adf2c14d2457b3cc0dba8a3ecf"
	},
	{
		"id": "1d13b2ea5472",
		"ts": "2026-08-20T13:42:01.999Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3072238.3,
		"hash": "1d13b2ea5472fd027d912c0622a8ee6415a0e113efc6938689657e11283f727d"
	},
	{
		"id": "02efd7459fa6",
		"ts": "2026-08-20T13:42:02.230Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 443906.25,
		"hash": "02efd7459fa6646cdffccfe64982d225d4319b220a32998d9a8977d6af8f5e05"
	},
	{
		"id": "694aa5df6754",
		"ts": "2026-08-20T13:42:02.465Z",
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
		"liquidityUsd": 554172.76,
		"hash": "694aa5df67541452ec8b41bcfb15a85f89e356edb136c52fbaa182cac0fa5407"
	},
	{
		"id": "e13ec7214499",
		"ts": "2026-08-20T13:42:02.694Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4323300.47,
		"hash": "e13ec7214499c6d7a370a9a548adcf6863601ba5e7c1b9d0c5f7d43ca50603f5"
	},
	{
		"id": "343d96ac431f",
		"ts": "2026-08-20T13:42:02.913Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 553609.19,
		"hash": "343d96ac431f9e1b7b8b897cdf9311b65247924faecb990b4ac6e728293d62af"
	},
	{
		"id": "1c8f291cbbd3",
		"ts": "2026-08-20T13:42:03.123Z",
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
		"liquidityUsd": 683923.09,
		"hash": "1c8f291cbbd3764dbd43cc48bc973115a4e4d4a1b7b6bc34a2a909f41ae1990a"
	},
	{
		"id": "acfa7ff989a4",
		"ts": "2026-08-20T13:42:03.339Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1658489.13,
		"hash": "acfa7ff989a44b4c1a133a07988d7f983e19d116aff14e27d8e9174b5a8f3db9"
	},
	{
		"id": "d6fb95c499b2",
		"ts": "2026-08-20T13:42:03.557Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 323189.41,
		"hash": "d6fb95c499b2ec7dc8a92a3877bc5a62a211167c06c792e810882829cbf143f4"
	},
	{
		"id": "96481732bb41",
		"ts": "2026-08-20T12:39:21.415Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111183162.72,
		"hash": "96481732bb4186283f73886a81b4ba6eb75ad94189df728ed2d6eece5db3f876"
	},
	{
		"id": "993a1218b6d9",
		"ts": "2026-08-20T12:39:22.135Z",
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
		"liquidityUsd": 16825338.04,
		"hash": "993a1218b6d9360d91d98398ec39b3bcdc8d84cea7a88f81cad7b1dcd2bbab91"
	},
	{
		"id": "9581602db603",
		"ts": "2026-08-20T12:39:22.610Z",
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
		"liquidityUsd": 849553.51,
		"hash": "9581602db603c5ac19fd8f40a91b1cbdc8f33f906f1ac4c9d7bda238380238c5"
	},
	{
		"id": "2f9b0d4f3179",
		"ts": "2026-08-20T12:39:23.088Z",
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
		"liquidityUsd": 28190296.96,
		"hash": "2f9b0d4f31799dfc93bdc8699be6ec9072e03f64c1cca7cae97b715a98dd0e8e"
	},
	{
		"id": "f6c7c26825be",
		"ts": "2026-08-20T12:39:23.347Z",
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
		"liquidityUsd": 3202850.1,
		"hash": "f6c7c26825be86db51eef6a2de18d14900395b55f45853a79dd94f99593e6540"
	},
	{
		"id": "08be4109360f",
		"ts": "2026-08-20T12:39:23.609Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1065834.77,
		"hash": "08be4109360fcf229a45d3bfaaffaba4bcabfc86f14e40a291ab04f46411512d"
	},
	{
		"id": "17882bb4a0dd",
		"ts": "2026-08-20T12:39:23.893Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.6,
		"hash": "17882bb4a0dd33fc4c06479d681a859f4f48859f56085cda009922f392b7bf0d"
	},
	{
		"id": "d33fd33bd3ff",
		"ts": "2026-08-20T12:39:24.168Z",
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
		"liquidityUsd": 3727075.97,
		"hash": "d33fd33bd3ff155a7324e35bbdb1c9b15e1f662e898b1391219bcbb0c9d1a200"
	},
	{
		"id": "5c909a550d70",
		"ts": "2026-08-20T12:39:24.433Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4074123.73,
		"hash": "5c909a550d704b3b36200c60bebef838391d64bb6f0a2e747b9af131f07803b4"
	},
	{
		"id": "62602b582993",
		"ts": "2026-08-20T12:39:24.697Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3163536.38,
		"hash": "62602b58299369532c682fcb9e26f95c0c8b065145046fda2963b9b929113fdc"
	},
	{
		"id": "d8b248442d09",
		"ts": "2026-08-20T12:39:24.942Z",
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
		"liquidityUsd": 429770.9,
		"hash": "d8b248442d099682811905b4931d03c0ebe3be8f8b496369b5cc2ee2cdf1afba"
	},
	{
		"id": "0e8fb016001c",
		"ts": "2026-08-20T12:39:25.192Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 722619.33,
		"hash": "0e8fb016001cbe21b934a10bab8715f7ab12dce3893a9fe173700de7b900e87d"
	},
	{
		"id": "b752b64d1643",
		"ts": "2026-08-20T12:39:25.440Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4186308.87,
		"hash": "b752b64d1643a44a120b020db2ed242fcb737e8333a48cb4c43fb47c8ae0bd1a"
	},
	{
		"id": "e5a878d7bfbd",
		"ts": "2026-08-20T12:39:25.689Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 547017.79,
		"hash": "e5a878d7bfbdae06452f7f200c752a4d49dc16bf097d1a068fd2afdbf29593ad"
	},
	{
		"id": "f978e376be0f",
		"ts": "2026-08-20T12:39:25.935Z",
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
		"liquidityUsd": 533834.08,
		"hash": "f978e376be0fd1d375e1a94bcb6c7201d59a15bf6877d6ba18907619e98eab14"
	},
	{
		"id": "a59414bb4178",
		"ts": "2026-08-20T12:39:26.181Z",
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
		"liquidityUsd": 679942.63,
		"hash": "a59414bb41786f5ed6f7de8a8bc35e995f2c15bed626f28142c906e4d710e9ea"
	},
	{
		"id": "67fb5c2af650",
		"ts": "2026-08-20T12:39:26.613Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1662743.81,
		"hash": "67fb5c2af650f9c85d750b495303e429a0f05acaea84f0edd6d60d441f170752"
	},
	{
		"id": "b2d51d6b8b3f",
		"ts": "2026-08-20T12:39:26.856Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 327187.84,
		"hash": "b2d51d6b8b3f5ae1d44418124c9470da913877cfc68cf51b37a1af40822646df"
	},
	{
		"id": "eb3549afda52",
		"ts": "2026-08-20T11:22:26.746Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112094208.82,
		"hash": "eb3549afda521ebdd16ed3841ca890682b37190cc823f4f82f618bc4cccf7e32"
	},
	{
		"id": "bbaf37824e0a",
		"ts": "2026-08-20T11:22:26.997Z",
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
		"liquidityUsd": 16632334.56,
		"hash": "bbaf37824e0a619bb66dc5743b161c55f2adbb83d7696f38414e043d6cc79c46"
	},
	{
		"id": "c62efbb02d9b",
		"ts": "2026-08-20T11:22:27.248Z",
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
		"liquidityUsd": 857447.66,
		"hash": "c62efbb02d9bc1310d4e2a339a67b14782f997dcc03a1d28b7d16b01202ac032"
	},
	{
		"id": "967c4b502e94",
		"ts": "2026-08-20T11:22:27.573Z",
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
		"liquidityUsd": 27993062.88,
		"hash": "967c4b502e9469fff0cccacab8880e07e52db42f6993e9555f8ec33e65455201"
	},
	{
		"id": "7595aac1d9c7",
		"ts": "2026-08-20T11:22:27.814Z",
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
		"liquidityUsd": 3227423.14,
		"hash": "7595aac1d9c7fa096ba750a04b326eddee11c23be57d0bbc5b5b802353bca560"
	},
	{
		"id": "bb9faedefc7b",
		"ts": "2026-08-20T11:22:28.386Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1065409.01,
		"hash": "bb9faedefc7b2ba7532c7a9f7acc3d601a48eeb56d8195b92142ba2b6efe0fae"
	},
	{
		"id": "9f810c186f8c",
		"ts": "2026-08-20T11:22:28.625Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.44,
		"hash": "9f810c186f8c0cc935ba1020c2076fb9be7d82ec0080d0b5d7d7ff19192e67ec"
	},
	{
		"id": "3c419b33f0f8",
		"ts": "2026-08-20T11:22:28.868Z",
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
		"liquidityUsd": 3749107.31,
		"hash": "3c419b33f0f89f1f0f588e4fd4e2c17d494a00932ac7d306a7e9495dae605ad7"
	},
	{
		"id": "3368eff0b2b3",
		"ts": "2026-08-20T11:22:29.115Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3209969.72,
		"hash": "3368eff0b2b3cf18c586303aae4d9b9f9b75b82e49b33242d601eb5e8f995e46"
	},
	{
		"id": "342c579234bf",
		"ts": "2026-08-20T11:22:29.353Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4087305.44,
		"hash": "342c579234bf94047fa13feffff0baa7ac21b783ad4ca580ed4df4d6ef28cc82"
	},
	{
		"id": "7985d900eb9d",
		"ts": "2026-08-20T11:22:29.978Z",
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
		"liquidityUsd": 448992.44,
		"hash": "7985d900eb9d90a4ef308ece1da0deebebfc09c8efaa3271b809b8a967e47df3"
	},
	{
		"id": "99cc5d696867",
		"ts": "2026-08-20T11:22:30.204Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 547095.37,
		"hash": "99cc5d69686721e47360f0011a3758bf6880511564940d7dc9171f2282095800"
	},
	{
		"id": "877fa87b5256",
		"ts": "2026-08-20T11:22:30.427Z",
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
		"liquidityUsd": 4254722.64,
		"hash": "877fa87b5256f177ef718f9ceb9a6d4bf9acd34fa016b007275ffdf144975370"
	},
	{
		"id": "8a6f40c88ef7",
		"ts": "2026-08-20T11:22:30.653Z",
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
		"liquidityUsd": 543947.95,
		"hash": "8a6f40c88ef7c59924f2d25dfbb2790b09e4ec615936ac3a0122938041d6390e"
	},
	{
		"id": "dc15a86aba2c",
		"ts": "2026-08-20T11:22:30.880Z",
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
		"liquidityUsd": 685535.74,
		"hash": "dc15a86aba2c89a556c9ce4aa53f24bf051897419353f0ab6a3d9bd63b913ef3"
	},
	{
		"id": "ea438d68a5a1",
		"ts": "2026-08-20T11:22:31.106Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1670337.3,
		"hash": "ea438d68a5a1a70b9d73a7b511af67dede74025ad52bada15583301f3ff0b54e"
	},
	{
		"id": "d5df97de6e23",
		"ts": "2026-08-20T11:22:31.330Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 883827.69,
		"hash": "d5df97de6e231649077c1c5905b501695aedb832272ae235ab407c4976cf62b8"
	},
	{
		"id": "9a145b7a6747",
		"ts": "2026-08-20T10:25:18.578Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111899442.03,
		"hash": "9a145b7a6747d467d69f8f3e91e1f844bd959c529f33e35e105ec43b42f14275"
	},
	{
		"id": "c45ba495ef6f",
		"ts": "2026-08-20T10:25:19.414Z",
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
		"liquidityUsd": 13275967.04,
		"hash": "c45ba495ef6fb746806bf53d1fa28b2ce666659a5466be7646324d6a8b24edbc"
	},
	{
		"id": "039149a43086",
		"ts": "2026-08-20T10:25:19.652Z",
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
		"liquidityUsd": 853346.39,
		"hash": "039149a4308623da5ad0e50c209df850cc9a143a84ea29b62a8eebc48cf84335"
	},
	{
		"id": "1537be55d9d7",
		"ts": "2026-08-20T10:25:19.883Z",
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
		"liquidityUsd": 27348198.42,
		"hash": "1537be55d9d7648eb3b1d9decbdf6e3a285452bfdb1c2deb1a55f87f52a6e8ca"
	},
	{
		"id": "bff295c4b543",
		"ts": "2026-08-20T10:25:20.114Z",
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
		"liquidityUsd": 3250458.34,
		"hash": "bff295c4b543af33c4c956ab368dac4820b5669133647623b06bf3b4bed7c995"
	},
	{
		"id": "3f81322cf7c0",
		"ts": "2026-08-20T10:25:20.353Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1057231.1,
		"hash": "3f81322cf7c0ccadd46b9822b87863d42cc723e1b6feb29cc4250616b10727ca"
	},
	{
		"id": "c252f343dedb",
		"ts": "2026-08-20T10:25:20.596Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152699.19,
		"hash": "c252f343dedbdafbe1989e5672f1af99b81e47d4ebd2e50de2b5553d53590d13"
	},
	{
		"id": "02312abd4376",
		"ts": "2026-08-20T10:25:20.821Z",
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
		"liquidityUsd": 3744417.18,
		"hash": "02312abd43768e21bf18be60bbaecf034662a4a2114600fad7258bbdb330e233"
	},
	{
		"id": "e2edddb1dcb9",
		"ts": "2026-08-20T10:25:21.178Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3239306.78,
		"hash": "e2edddb1dcb9b42a9e177d0a2af9976e202d7c3286767a349ab96226a7dfa547"
	},
	{
		"id": "e00b747f0b7b",
		"ts": "2026-08-20T10:25:21.413Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4055468,
		"hash": "e00b747f0b7be372452673990f012709a6986d97e1c7c3508d871a4dbacf2bcc"
	},
	{
		"id": "fd2fd39eb952",
		"ts": "2026-08-20T10:25:21.633Z",
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
		"liquidityUsd": 444143.74,
		"hash": "fd2fd39eb952875c89329114b686c6a325a5c79ae46163949f0875db836295d2"
	},
	{
		"id": "660a113c4756",
		"ts": "2026-08-20T10:25:21.844Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 541393.94,
		"hash": "660a113c4756d6b4a7f8fd4ffa080a9f0728335fc094098d881fcc62b1c967a0"
	},
	{
		"id": "1559254a9ad2",
		"ts": "2026-08-20T10:25:22.137Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4311393.49,
		"hash": "1559254a9ad27f1cf6d976546e6521a59cfe32e7f25db8f27431dc046080378e"
	},
	{
		"id": "93cbd228e4bd",
		"ts": "2026-08-20T10:25:22.348Z",
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
		"liquidityUsd": 574462.8,
		"hash": "93cbd228e4bd71c8608fd2e6f4041b8cf941f2545e7a5ef0d7900256c33dbdf3"
	},
	{
		"id": "47d989ff32fa",
		"ts": "2026-08-20T10:25:22.567Z",
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
		"liquidityUsd": 702123.81,
		"hash": "47d989ff32fa1da1bc5f21aa31dceab5402e74e9fd27fc5e86e1617394c1a165"
	},
	{
		"id": "9dea2ea78194",
		"ts": "2026-08-20T10:25:22.787Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1672894.55,
		"hash": "9dea2ea78194ef6e58ac33ce30d168e27b0e09d0fc88fe095e4d6d3a3b85d69b"
	},
	{
		"id": "6ebb097874f5",
		"ts": "2026-08-20T10:25:22.996Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 884991.52,
		"hash": "6ebb097874f5928ba7b8f565fb6fc9240e5bc8bbb7703a2aad663aef003ea0e9"
	},
	{
		"id": "f369e3e2416c",
		"ts": "2026-08-20T09:29:39.333Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111823195.74,
		"hash": "f369e3e2416c93472e5cf6ceb5dc2b9ca421cad034bee6cfe7cfe616b8d7d1af"
	},
	{
		"id": "f34fa2174e51",
		"ts": "2026-08-20T09:29:39.772Z",
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
		"liquidityUsd": 16117826.99,
		"hash": "f34fa2174e51cc27f824f49a9f0470411e9f69e5300152a04c851c2c3d67c9b5"
	},
	{
		"id": "8683b30090e6",
		"ts": "2026-08-20T09:29:40.026Z",
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
		"liquidityUsd": 849631.36,
		"hash": "8683b30090e6f7d10ca46ea23fed05f04e60aa4d6f12956135900a9685eb4ca4"
	},
	{
		"id": "1731ee2a1934",
		"ts": "2026-08-20T09:29:40.285Z",
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
		"liquidityUsd": 27423660.3,
		"hash": "1731ee2a1934e295a5010eed25de75747e9c4ff9b2319fa01cfe9fb38d602243"
	},
	{
		"id": "1ade2013208e",
		"ts": "2026-08-20T09:29:40.542Z",
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
		"liquidityUsd": 3162718.13,
		"hash": "1ade2013208eb4818d0d84bbe6562c200c620c856f2a85896eb86d75c0205c0d"
	},
	{
		"id": "ef47ebafa7e0",
		"ts": "2026-08-20T09:29:40.798Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1062075.61,
		"hash": "ef47ebafa7e0333ddf561d86b716d6cf571807d719939255aeaad5ff88f36480"
	},
	{
		"id": "c278f2daaf5c",
		"ts": "2026-08-20T09:29:41.048Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152694.8,
		"hash": "c278f2daaf5c4fb0d89b7f5ef2725e8015c5faa666a5412be0f7e4caff4f5a6c"
	},
	{
		"id": "f1389b04d625",
		"ts": "2026-08-20T09:29:41.299Z",
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
		"liquidityUsd": 3751626.83,
		"hash": "f1389b04d625c25beae1603b66984562ceac0f5822e210ac0119223a07d25c3e"
	},
	{
		"id": "22401fa4135f",
		"ts": "2026-08-20T09:29:41.551Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3130410.69,
		"hash": "22401fa4135f685379cd4258e2dbca9d592d1bf772074dcb556f1322598eed4d"
	},
	{
		"id": "d793859b5bd5",
		"ts": "2026-08-20T09:29:41.808Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4055811.55,
		"hash": "d793859b5bd5838119432533f230078c97ad0dd5733599cd2ee66bb937192e2a"
	},
	{
		"id": "d071516a5b5e",
		"ts": "2026-08-20T09:29:42.041Z",
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
		"liquidityUsd": 452121.02,
		"hash": "d071516a5b5ecf0119cb5a0887a296b90ad9f37bb249366d64e9f62339fe9273"
	},
	{
		"id": "0308a7574b17",
		"ts": "2026-08-20T09:29:42.274Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4286102.36,
		"hash": "0308a7574b1743826791386fe521b8d602c003df99a694990f72587400a6deb2"
	},
	{
		"id": "859539309079",
		"ts": "2026-08-20T09:29:42.506Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 533212.64,
		"hash": "859539309079c4c870da155a7226794c4f2c10efffc05dea5cfd28a1cd4542e9"
	},
	{
		"id": "c29c9d559745",
		"ts": "2026-08-20T09:29:42.740Z",
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
		"liquidityUsd": 573763.43,
		"hash": "c29c9d5597456b52f412db64c991d463f9a7b1ab121e2a60c465c90dcc8acec3"
	},
	{
		"id": "de3aef32e76b",
		"ts": "2026-08-20T09:29:43.025Z",
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
		"liquidityUsd": 706383.11,
		"hash": "de3aef32e76b439dcbeed129157baa3976ebfd4354883d4b790c7577cc900fdd"
	},
	{
		"id": "6ed21087509a",
		"ts": "2026-08-20T09:29:43.278Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1679163.25,
		"hash": "6ed21087509a820053ce0a423bc1f2ac6c070fc8fe7eb3733c7da3b769b3211e"
	},
	{
		"id": "91680f995736",
		"ts": "2026-08-20T09:29:43.518Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 885348.23,
		"hash": "91680f995736085ecf1ce0f00f0f7cd180549d5202714c3e00c796156d136363"
	},
	{
		"id": "47be841e5a30",
		"ts": "2026-08-20T08:33:24.158Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111812673.33,
		"hash": "47be841e5a305aec3f87c78d3567a505bc73fbb089f0ed4759a2d48d4ac34f77"
	},
	{
		"id": "5f1754c01040",
		"ts": "2026-08-20T08:33:24.604Z",
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
		"liquidityUsd": 13149932.12,
		"hash": "5f1754c010402bd7feca1a5a46a2d1ed09c743d635dc2559fde6a7f3440107b9"
	},
	{
		"id": "b79e439abb4b",
		"ts": "2026-08-20T08:33:24.850Z",
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
		"liquidityUsd": 845551.68,
		"hash": "b79e439abb4b5c68473b9f14a8d9442629c0908b15e92186315c5028e4a08d10"
	},
	{
		"id": "a658d8c66ff1",
		"ts": "2026-08-20T08:33:25.095Z",
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
		"liquidityUsd": 27500289.05,
		"hash": "a658d8c66ff10a84ca9e12cea5c5c4d4e1ff299372ce0ad6207b0f75869c30bf"
	},
	{
		"id": "7ab78177d831",
		"ts": "2026-08-20T08:33:25.335Z",
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
		"liquidityUsd": 3038899.49,
		"hash": "7ab78177d83163ef9946485f82c2c59fb37645739ec0c2a53905e51296b24d5e"
	},
	{
		"id": "b9bf8c35dea2",
		"ts": "2026-08-20T08:33:25.572Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1046106.99,
		"hash": "b9bf8c35dea2e1e49502479c5e89135916b5d60326bbd0bad7739f417ff1a1f3"
	},
	{
		"id": "e81a56644c18",
		"ts": "2026-08-20T08:33:25.815Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152693.38,
		"hash": "e81a56644c185c83879f5363417b42cfe1f4b02a0242557ec265ac58a8530c93"
	},
	{
		"id": "84b6f2ce9174",
		"ts": "2026-08-20T08:33:26.054Z",
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
		"liquidityUsd": 3720123.26,
		"hash": "84b6f2ce9174ee3c6ded43874aac3f86718d4ed3b75ca21fba0e12ead9e60b66"
	},
	{
		"id": "5222095f98b4",
		"ts": "2026-08-20T08:33:26.300Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3079332.4,
		"hash": "5222095f98b42db76360005013bacfac8ab810b44ef75de598f6be29722283d2"
	},
	{
		"id": "ea5c941dd1d2",
		"ts": "2026-08-20T08:33:26.540Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4036146.97,
		"hash": "ea5c941dd1d222252597977df6ae154d6dbc3efa9d45def433d04860c6c2cfe2"
	},
	{
		"id": "27cc5409807b",
		"ts": "2026-08-20T08:33:26.770Z",
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
		"liquidityUsd": 449134.38,
		"hash": "27cc5409807b783d423558b6b81ef34b15145559b4094d05faec36b1606a845c"
	},
	{
		"id": "59ec25f2cfd5",
		"ts": "2026-08-20T08:33:26.997Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4238031.09,
		"hash": "59ec25f2cfd51ecabf8b3242252ce54914522b43d5129e82b9a7110e02f6d256"
	},
	{
		"id": "9f8219516127",
		"ts": "2026-08-20T08:33:27.408Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 566339.45,
		"hash": "9f8219516127b9c2b35f286d9662d090c1911bc95ecc6f6a7870a0043d32bf1a"
	},
	{
		"id": "ab5079f9fc32",
		"ts": "2026-08-20T08:33:27.766Z",
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
		"liquidityUsd": 576783.7,
		"hash": "ab5079f9fc32cfc094e777f9a3e0ee1f66e17ae9f5174117b22e15ce36649983"
	},
	{
		"id": "092e9594e240",
		"ts": "2026-08-20T08:33:27.990Z",
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
		"liquidityUsd": 705594.15,
		"hash": "092e9594e2400fd86c7b8f33a5f969509c626879e2efcd65b5e7d01522b6f1b9"
	},
	{
		"id": "f03cf049b7cb",
		"ts": "2026-08-20T08:33:28.270Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1673174.48,
		"hash": "f03cf049b7cbb68d2105aa51ba4c4bcbbff7a2b46fa01866b00e1322b15809c4"
	},
	{
		"id": "6ee075d5dd23",
		"ts": "2026-08-20T08:33:28.497Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 882953.28,
		"hash": "6ee075d5dd23e476806e3353a9742425c9200636f2cc7659a0d8fced4e3fbdce"
	},
	{
		"id": "864fc7863031",
		"ts": "2026-08-20T07:37:22.324Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111092605.91,
		"hash": "864fc7863031af6de4c3b583f29dadc1c899da7cb77cefc70074378578801f28"
	},
	{
		"id": "8a6ab632c4ef",
		"ts": "2026-08-20T07:37:22.749Z",
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
		"liquidityUsd": 16822047.98,
		"hash": "8a6ab632c4ef46b7f3337e246d1def562801914a8af9ea4eb46dd03f1745c1d9"
	},
	{
		"id": "4eb71d6493a7",
		"ts": "2026-08-20T07:37:23.197Z",
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
		"liquidityUsd": 837049.61,
		"hash": "4eb71d6493a7779f6286b5ab873542791884193c98b730ae9fb9b97ee1bfe37b"
	},
	{
		"id": "91b108cf9517",
		"ts": "2026-08-20T07:37:23.442Z",
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
		"liquidityUsd": 27210127.36,
		"hash": "91b108cf95178a3db6beebd314c08baac1a8e75a404f3dc30b0a789abbbad1b8"
	},
	{
		"id": "c13f70c6abdf",
		"ts": "2026-08-20T07:37:23.667Z",
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
		"liquidityUsd": 3006625.93,
		"hash": "c13f70c6abdffca16850fb8bfbc508db7a41e8fe4b57b714737c2efc7635fa3d"
	},
	{
		"id": "66c917aa1f16",
		"ts": "2026-08-20T07:37:23.902Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1032780.71,
		"hash": "66c917aa1f162ef6b9e2bbe5beff484f8ab6056113517b47efeaa266558c0852"
	},
	{
		"id": "e866bce2714d",
		"ts": "2026-08-20T07:37:24.138Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152689.16,
		"hash": "e866bce2714d3d5c935cbfbd1c22e68d7338697201c4fa87fe80e21a7d1365eb"
	},
	{
		"id": "12579be6dc78",
		"ts": "2026-08-20T07:37:24.364Z",
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
		"liquidityUsd": 3725621.11,
		"hash": "12579be6dc7869d27f58773f11df58e2b0c3a2118cd451869cc8ce03a5f73a43"
	},
	{
		"id": "490102bb04df",
		"ts": "2026-08-20T07:37:24.600Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3047494.31,
		"hash": "490102bb04df2d95c2b163673df23040350c015bd0bf9b5131ac37d6c65a75e7"
	},
	{
		"id": "34fe50d0c7f5",
		"ts": "2026-08-20T07:37:24.837Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3986160.83,
		"hash": "34fe50d0c7f574bfe9028382029584ce4b12efa7df6ac97e735b4467968bed96"
	},
	{
		"id": "be8922bb560f",
		"ts": "2026-08-20T07:37:25.048Z",
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
		"liquidityUsd": 456315.17,
		"hash": "be8922bb560f1d5070fd90f5d977f7076502c763d47807fc36e7e1d793c1a0a9"
	},
	{
		"id": "aab96bc5b53f",
		"ts": "2026-08-20T07:37:25.267Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4269327.65,
		"hash": "aab96bc5b53f1c82cf9439fa88a29fe77ccd2b39429a46969cbf9c0416fdcfa0"
	},
	{
		"id": "99f92a637c92",
		"ts": "2026-08-20T07:37:25.487Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 570367.33,
		"hash": "99f92a637c92d69f4fd1c001122df8fb348c22ecaebf3ce22e53286bbe377843"
	},
	{
		"id": "edc58d3ad24c",
		"ts": "2026-08-20T07:37:25.697Z",
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
		"liquidityUsd": 571648.67,
		"hash": "edc58d3ad24cde9efa058c846cb7c6622e1e3b9b479fde49c59ddc2bf0afa1a3"
	},
	{
		"id": "60c93c5c6126",
		"ts": "2026-08-20T07:37:25.917Z",
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
		"liquidityUsd": 699062.8,
		"hash": "60c93c5c61268ab4bc96fca8581354e45ac6825f6e4eaf349ddbc9da3837d0fb"
	},
	{
		"id": "0d6f2b9e29a7",
		"ts": "2026-08-20T07:37:26.135Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1683570.86,
		"hash": "0d6f2b9e29a74eb165336a6597e8131701d9ca940ebb59b7ad3a8cbf045f8e5c"
	},
	{
		"id": "3b2921302ce3",
		"ts": "2026-08-20T07:37:26.345Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 885204.89,
		"hash": "3b2921302ce3ba5191ab8b68d580863d33b33319ed377059f236cfde2e634a01"
	},
	{
		"id": "a36f47c1015b",
		"ts": "2026-08-20T07:37:26.563Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 66697.8,
		"hash": "a36f47c1015bab8bcca247840e6a0152f795a7695e04ff1dfab9f55ca504a185"
	},
	{
		"id": "1e11a07e8a22",
		"ts": "2026-08-20T06:38:44.298Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111071442.33,
		"hash": "1e11a07e8a22e540246e1a88f174ebc1b0b47a04581d115530c9f2bd35c6a025"
	},
	{
		"id": "c76acc65ff24",
		"ts": "2026-08-20T06:38:44.630Z",
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
		"liquidityUsd": 16885047.54,
		"hash": "c76acc65ff24366008d40ef4284c566045d4dc4c10d4527b82dfaa98af43f0ca"
	},
	{
		"id": "f85189f56047",
		"ts": "2026-08-20T06:38:44.964Z",
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
		"liquidityUsd": 859237.62,
		"hash": "f85189f56047acc3a97fdc68e246067a5169e4a928f6d4ab4075d93b117f0639"
	},
	{
		"id": "fabf32a615e5",
		"ts": "2026-08-20T06:38:45.247Z",
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
		"liquidityUsd": 27271522.05,
		"hash": "fabf32a615e54ed68778c91891bb86053a23d2d16b240e04a45406b1e6199e80"
	},
	{
		"id": "782760e390f0",
		"ts": "2026-08-20T06:38:45.433Z",
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
		"liquidityUsd": 3017318.82,
		"hash": "782760e390f057f7c050da2ec87244000b41faaa75ec7c8c976c56fe2761063a"
	},
	{
		"id": "ac931f3b7e6e",
		"ts": "2026-08-20T06:38:45.652Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1018860.53,
		"hash": "ac931f3b7e6e58526250d5a8d979153e09820fae52b17fe57874222d34ca2b8d"
	}
]
