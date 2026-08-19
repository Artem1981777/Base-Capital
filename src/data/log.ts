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
	"updatedAt": "2026-08-19T21:21:08.844Z",
	"tokensScored": 12365,
	"verdictsIssued": 12365,
	"safe": 10708,
	"risky": 895,
	"likelyRug": 762,
	"ticks": 727
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "6bd157d0ba6c",
		"ts": "2026-08-19T21:21:02.749Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113042860.56,
		"hash": "6bd157d0ba6cf168226a3f2f0d20856913ec1f0d437cd27a1f7d300d51f495b7"
	},
	{
		"id": "4d11e890e765",
		"ts": "2026-08-19T21:21:03.298Z",
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
		"liquidityUsd": 13254858.52,
		"hash": "4d11e890e7653c88b31f76096d3a5f3069483edb77fcea2b2a08155aa4a4eb55"
	},
	{
		"id": "9f569ddb16f2",
		"ts": "2026-08-19T21:21:03.871Z",
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
		"liquidityUsd": 875635.95,
		"hash": "9f569ddb16f2556f8d3e6358c12bc7753b3ea8ba794b9c9145645df83e925848"
	},
	{
		"id": "04ea746e6ea5",
		"ts": "2026-08-19T21:21:04.220Z",
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
		"liquidityUsd": 27256958.51,
		"hash": "04ea746e6ea5f821ed4323caddfbb7740f2a642a39b58c7f8e9d0af89dd79f54"
	},
	{
		"id": "ac21b8f779ed",
		"ts": "2026-08-19T21:21:04.556Z",
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
		"liquidityUsd": 2446099.91,
		"hash": "ac21b8f779ed794f8dc6743208daf6943ff6c832395fd919189038d7e124296f"
	},
	{
		"id": "6607a621431b",
		"ts": "2026-08-19T21:21:05.165Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1042595.6,
		"hash": "6607a621431b49ff9d830a3739f4926a519107e08fdd47902f2875e571b7a4a1"
	},
	{
		"id": "7670181356e7",
		"ts": "2026-08-19T21:21:05.401Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4106341.73,
		"hash": "7670181356e79812622efe1bc73b198f5eb0011a43aad27872e262cf562d3da8"
	},
	{
		"id": "069b17968085",
		"ts": "2026-08-19T21:21:06.034Z",
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
		"liquidityUsd": 1568091.52,
		"hash": "069b1796808510bd5a4a936a03b8d4af7f2116db316c5d35e3db4476a0678c26"
	},
	{
		"id": "7c281d5990a7",
		"ts": "2026-08-19T21:21:06.303Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4076881.04,
		"hash": "7c281d5990a7ca7388bebd041bc2ada0023cbb1149b63f5a2005271ba8102b88"
	},
	{
		"id": "f7ffb3705fa0",
		"ts": "2026-08-19T21:21:06.533Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3081903.98,
		"hash": "f7ffb3705fa0c3499d56c6e3e03c28f2eff9bfc7c7c2ec85200657de55ef235e"
	},
	{
		"id": "e11dc7c66a19",
		"ts": "2026-08-19T21:21:06.758Z",
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
		"liquidityUsd": 469478.06,
		"hash": "e11dc7c66a1925112fd53238b7072c0a36d6e74cd0954cb2325552a8d8058ed8"
	},
	{
		"id": "28393800cc3f",
		"ts": "2026-08-19T21:21:06.985Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 576748.77,
		"hash": "28393800cc3f4c24f3d66f054b94b95feb866e18ee326cb71ee21eb79c89ad0e"
	},
	{
		"id": "4371425c762b",
		"ts": "2026-08-19T21:21:07.208Z",
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
		"liquidityUsd": 574112.8,
		"hash": "4371425c762bfdab8eba34eacb81e193c57bcfc52b9fb93a5054cfd5ad235d64"
	},
	{
		"id": "613bb0a4e3ef",
		"ts": "2026-08-19T21:21:07.421Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4106341.73,
		"hash": "613bb0a4e3ef1d45646fdf8d8b436335a6289dbf2f58c3dc0f6b134d42f9f26c"
	},
	{
		"id": "8667a0e6b845",
		"ts": "2026-08-19T21:21:07.650Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72825.39,
		"hash": "8667a0e6b845171ea027175844f599414d14c4cc57a80cf7c877fd75b4a3230c"
	},
	{
		"id": "b8eec7479c9b",
		"ts": "2026-08-19T21:21:07.879Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 160312.57,
		"hash": "b8eec7479c9baf09cab923279408f7fa6e4c547644fdabe14555dc8cc96387dd"
	},
	{
		"id": "6395049cd1ad",
		"ts": "2026-08-19T21:21:08.105Z",
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
		"liquidityUsd": 866701.94,
		"hash": "6395049cd1ad6a2a5cf0c0822753cc1d89a7f6d3941f3b2db7f4886d77044c13"
	},
	{
		"id": "e940cd3befc0",
		"ts": "2026-08-19T21:21:08.321Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11381636.76,
		"hash": "e940cd3befc09b396ff1736087acbf597122e22e61b5ed44a42bb51e19ceb6a5"
	},
	{
		"id": "f6b1f4d14bb5",
		"ts": "2026-08-19T21:21:08.571Z",
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
		"liquidityUsd": 736039.87,
		"hash": "f6b1f4d14bb5018bcf284464ff0552869af725610f279c5b020f3f52b1053c22"
	},
	{
		"id": "0459d62b02d1",
		"ts": "2026-08-19T21:21:08.843Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 654819.08,
		"hash": "0459d62b02d18fad4847f08a87d632d0567031cdc0e2f29f9ecf0a05d2a0e84c"
	},
	{
		"id": "7f5b670f0c47",
		"ts": "2026-08-19T20:21:44.616Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111947267.75,
		"hash": "7f5b670f0c47114fa54a309fa5a2847942f0413292109a66bbf908471d9fdc5a"
	},
	{
		"id": "4018a7b08e50",
		"ts": "2026-08-19T20:21:45.253Z",
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
		"liquidityUsd": 13002458.11,
		"hash": "4018a7b08e50a08af9330381b0425ec59597256e011a9c40d6559c9670593cb8"
	},
	{
		"id": "f2d2577f7939",
		"ts": "2026-08-19T20:21:45.490Z",
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
		"liquidityUsd": 835998.82,
		"hash": "f2d2577f7939681c249dd7460020052b78b3e667fea9fe8d66aba0f1830b5c75"
	},
	{
		"id": "f6189c20d13e",
		"ts": "2026-08-19T20:21:45.936Z",
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
		"liquidityUsd": 27477314,
		"hash": "f6189c20d13ee70d5cdaec8fee7e75f4b8bc1c96b8d9886c8f5a08173162520e"
	},
	{
		"id": "ef9c3105a54d",
		"ts": "2026-08-19T20:21:46.176Z",
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
		"liquidityUsd": 2325740.3,
		"hash": "ef9c3105a54d4d7a0e581b62a6ce087ee0406ff0bb572a0c23590c2ab3deb360"
	},
	{
		"id": "f916c492e638",
		"ts": "2026-08-19T20:21:46.480Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 966436.91,
		"hash": "f916c492e63899b74c47c9326550200918d1468d11daf823128fe58d05bffcd8"
	},
	{
		"id": "aa2269f68dfe",
		"ts": "2026-08-19T20:21:46.711Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4164385.5,
		"hash": "aa2269f68dfe6909baf61a1e8fbeb8af9fc8739dd414ef0a48f41549338ea861"
	},
	{
		"id": "763ad26e9201",
		"ts": "2026-08-19T20:21:46.954Z",
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
		"liquidityUsd": 1592352.27,
		"hash": "763ad26e920188b00a83c158edc9cb9e180322b7dbc2df4e46796380ec72ed85"
	},
	{
		"id": "1ee9fb66ad8b",
		"ts": "2026-08-19T20:21:47.188Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3798697.07,
		"hash": "1ee9fb66ad8bf574ead7885c34984799c6752c999913a9c8dbf248d26977508b"
	},
	{
		"id": "c3bf810ac20a",
		"ts": "2026-08-19T20:21:47.433Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2995432.53,
		"hash": "c3bf810ac20ace310b90d87dba98d0bced1ab00a606633e7648c32ce34cf3778"
	},
	{
		"id": "fb054880cfd9",
		"ts": "2026-08-19T20:21:47.650Z",
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
		"liquidityUsd": 418167.59,
		"hash": "fb054880cfd9c02fe6ae3e2329e905c0c44e761fa5f2e4a921f6e78ad4f360af"
	},
	{
		"id": "a752688482bb",
		"ts": "2026-08-19T20:21:47.873Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 542991.66,
		"hash": "a752688482bb49f65ab4c6236c56ac6b0d255cd4fe22b237304a1d7f1508ae16"
	},
	{
		"id": "4f9287c3aea4",
		"ts": "2026-08-19T20:21:48.089Z",
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
		"liquidityUsd": 554036.47,
		"hash": "4f9287c3aea402213f2f605fb70292c9fa309db1970ac910825a867c65d93f3f"
	},
	{
		"id": "e90965c8e5ac",
		"ts": "2026-08-19T20:21:48.314Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4160985.35,
		"hash": "e90965c8e5ac7d50d49c62b48833da4c3f0347bcde29d68453a23a4bed7cb396"
	},
	{
		"id": "d7d6954cb219",
		"ts": "2026-08-19T20:21:48.530Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 58785.93,
		"hash": "d7d6954cb219fcc9974cb3f9204e26eb48a06b6151ced2cdda6c45f099a42d4a"
	},
	{
		"id": "5742a4eb11a4",
		"ts": "2026-08-19T20:21:48.753Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 153241.91,
		"hash": "5742a4eb11a49f7cbf8ede11f3d6a6156d5e1249311fc82d7020b96b83ef28d3"
	},
	{
		"id": "b5eb4c2be97e",
		"ts": "2026-08-19T20:21:48.970Z",
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
		"liquidityUsd": 864838.36,
		"hash": "b5eb4c2be97e92d4152876ff4385e7c82840c6bfe09f0ab22fc3647d63f3f71b"
	},
	{
		"id": "a970c9b02c85",
		"ts": "2026-08-19T20:21:49.194Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10863379.08,
		"hash": "a970c9b02c85acdbed20cce7919d836446b5c6b78f004a16abf969984b2f6871"
	},
	{
		"id": "acefaeb285b8",
		"ts": "2026-08-19T20:21:49.412Z",
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
		"liquidityUsd": 740827.35,
		"hash": "acefaeb285b8f03832207096294dd41166dbe1cfb66f472effef129924c40ff9"
	},
	{
		"id": "f62f8cb26580",
		"ts": "2026-08-19T20:21:49.643Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 76449.84,
		"hash": "f62f8cb2658084e16314d360ee8db88f1c5834925be20d1e26b300aa04f74080"
	},
	{
		"id": "e2665a0f611f",
		"ts": "2026-08-19T19:21:24.584Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112023275.16,
		"hash": "e2665a0f611f1c2953a18a3a882c32fa54c409bd3ca7ffa0c7d6b5b1873c0663"
	},
	{
		"id": "5437a57221ca",
		"ts": "2026-08-19T19:21:25.115Z",
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
		"liquidityUsd": 12958461.65,
		"hash": "5437a57221caf855bac16f1f952b8390bb65c97c8fc828df82c145d7713ca77c"
	},
	{
		"id": "9a15a16ebd61",
		"ts": "2026-08-19T19:21:25.316Z",
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
		"liquidityUsd": 839926.56,
		"hash": "9a15a16ebd618fd376af48f7626eab116fb3f64e6a8fab53537e7adaca305c8e"
	},
	{
		"id": "9afaf4452e6c",
		"ts": "2026-08-19T19:21:25.666Z",
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
		"liquidityUsd": 27403042.6,
		"hash": "9afaf4452e6c524dc606d5d51dc50df29e5f72fc2b63e8c6de443df39f403cac"
	},
	{
		"id": "971494cd531f",
		"ts": "2026-08-19T19:21:25.902Z",
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
		"liquidityUsd": 2310483.46,
		"hash": "971494cd531fe806d5d1e08b6c781084e5001353f05c3c232238415e5bd053aa"
	},
	{
		"id": "31294dcacc3a",
		"ts": "2026-08-19T19:21:26.112Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 966529.87,
		"hash": "31294dcacc3a57e1de79f1a2a086ec22d60675663b26d3798146de02ec560a89"
	},
	{
		"id": "793a21221770",
		"ts": "2026-08-19T19:21:26.311Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27403042.6,
		"hash": "793a212217700511782996c68c52fd9fbebded05e06019f972118a5973e57c1d"
	},
	{
		"id": "3eca072e1ffc",
		"ts": "2026-08-19T19:21:26.516Z",
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
		"liquidityUsd": 1580577.33,
		"hash": "3eca072e1ffc65a588487c39e7b58c2e44e962a4c32e5a60b85fcf46b18560ae"
	},
	{
		"id": "746c6fb7b142",
		"ts": "2026-08-19T19:21:26.725Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3028770.41,
		"hash": "746c6fb7b1422e052c006fcc5bc71499268f6a89963496fc16b8c77773f721be"
	},
	{
		"id": "785d891c340f",
		"ts": "2026-08-19T19:21:27.034Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3718503.63,
		"hash": "785d891c340f6c58d21b8f251dec455f5d19add164f47260bdf8f9ba5b6cbb80"
	},
	{
		"id": "fa2e4353ab04",
		"ts": "2026-08-19T19:21:27.244Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567315.25,
		"hash": "fa2e4353ab044dc7d63dc09d9f2501cf997898a324ebe7833a7770b7830c240d"
	},
	{
		"id": "100ca231f9ee",
		"ts": "2026-08-19T19:21:27.441Z",
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
		"liquidityUsd": 441991.44,
		"hash": "100ca231f9eebe6494ff8a6f2ec2da7b8b48638c310db95c859075d151899c9b"
	},
	{
		"id": "11f362f065f8",
		"ts": "2026-08-19T19:21:27.642Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4100579.3,
		"hash": "11f362f065f8a95c279745bb492a1fafb9d6d6e0aff3b8f36f7afdc260313499"
	},
	{
		"id": "1905068f18cd",
		"ts": "2026-08-19T19:21:27.838Z",
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
		"liquidityUsd": 531697.12,
		"hash": "1905068f18cdf0272ffb1a3b495a656df15e6a3b75aea3e715c5bbbbff75cb08"
	},
	{
		"id": "c0e6a99054cf",
		"ts": "2026-08-19T19:21:28.168Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 63586.09,
		"hash": "c0e6a99054cfe6422e07132925561a84ebbacdc1ae12296df1323da6a21cd295"
	},
	{
		"id": "c284c31b4559",
		"ts": "2026-08-19T19:21:28.353Z",
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
		"liquidityUsd": 864618.36,
		"hash": "c284c31b4559ebb0f575b1df70b36b910a22f45a7917c3891e2dc09b863855e6"
	},
	{
		"id": "5792712c9832",
		"ts": "2026-08-19T19:21:28.553Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10806062.11,
		"hash": "5792712c983242bb9e5eb278fe09dc40e3c9fce4bc62782d55350261e840be3e"
	},
	{
		"id": "cc5c07138389",
		"ts": "2026-08-19T19:21:28.735Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149917.12,
		"hash": "cc5c07138389f8609fce5b9418febe4d0f348f01120a59bb1ee08fa2feed910f"
	},
	{
		"id": "27cfa88651eb",
		"ts": "2026-08-19T19:21:28.919Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77059.83,
		"hash": "27cfa88651eb17812e180cba5798622d8b97a040983423347d96efe0f5f6d3b8"
	},
	{
		"id": "19caebc6aff6",
		"ts": "2026-08-19T19:21:29.132Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 566554.39,
		"hash": "19caebc6aff602b21578180b9b01d5342bd3ed3988d5e4f3a156a4b2e841de41"
	},
	{
		"id": "bcc98de23cd9",
		"ts": "2026-08-19T18:28:53.780Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112185231.81,
		"hash": "bcc98de23cd93d47664a682e3805a7534f9e481ac29b6bbff8d96ce10254f169"
	},
	{
		"id": "35d879782054",
		"ts": "2026-08-19T18:28:54.113Z",
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
		"liquidityUsd": 16724100.7,
		"hash": "35d879782054ff8383c37ece6a5e686c07843ffa39ebb9eeb5819d52b725e6f9"
	},
	{
		"id": "5601c4ec7a9b",
		"ts": "2026-08-19T18:28:54.310Z",
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
		"liquidityUsd": 839210.02,
		"hash": "5601c4ec7a9bba40305d498c69ed1cbb31f4bd99a7ed389510c5f48ab0d84170"
	},
	{
		"id": "9a52049fce77",
		"ts": "2026-08-19T18:28:54.513Z",
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
		"liquidityUsd": 27301707.73,
		"hash": "9a52049fce778d9666a11e7ea4ab66db2764fd6cb737a01c816232088a595115"
	},
	{
		"id": "106c5d12f2d0",
		"ts": "2026-08-19T18:28:54.698Z",
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
		"liquidityUsd": 2303082.68,
		"hash": "106c5d12f2d01558efa1e2e4f6455d9b4f794786f5311d6505621ce995c1c2c7"
	},
	{
		"id": "5f95f4f991db",
		"ts": "2026-08-19T18:28:54.881Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 953342.08,
		"hash": "5f95f4f991db116802ca3f387960659dda223ce6ace9fb875c6f6523ad39ee02"
	},
	{
		"id": "73a726864377",
		"ts": "2026-08-19T18:28:55.073Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4199069.22,
		"hash": "73a726864377cc9f5b037b9298228a3a69ca35929958e422a23c4dd9cc850cc9"
	},
	{
		"id": "e0ff57ccfa85",
		"ts": "2026-08-19T18:28:55.268Z",
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
		"liquidityUsd": 1572856.56,
		"hash": "e0ff57ccfa85046af0ac8181eda0fcc6ccf00a477bd24c1d6cbe532ab4c9a142"
	},
	{
		"id": "2475fc5a6eb4",
		"ts": "2026-08-19T18:28:55.451Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3018489,
		"hash": "2475fc5a6eb490bc4644490ad6faa322ddd6ad36133967ee6928361f61c26b05"
	},
	{
		"id": "2e8b08f9bf68",
		"ts": "2026-08-19T18:28:55.830Z",
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
		"liquidityUsd": 571060.24,
		"hash": "2e8b08f9bf68da9662625d57ac3abc4e86aa80e1afbfa82d3ec6b58c535b59c1"
	},
	{
		"id": "348cbd9afce4",
		"ts": "2026-08-19T18:28:56.011Z",
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
		"liquidityUsd": 431353.8,
		"hash": "348cbd9afce4fba30f15bdddf41b51a37a07595ef33b7e280c490061a93a1ad0"
	},
	{
		"id": "4aa6c74ed73a",
		"ts": "2026-08-19T18:28:56.412Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3711265.86,
		"hash": "4aa6c74ed73ad834a103c3c192bb5478474ba0973d6f47544670a04237a88c36"
	},
	{
		"id": "ab42b59ba7f6",
		"ts": "2026-08-19T18:28:56.770Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4207776.21,
		"hash": "ab42b59ba7f66841f7fbfbf28c959b1670e5f94a24b45d0b197c028cd93cef04"
	},
	{
		"id": "ec8a5d4ccb2b",
		"ts": "2026-08-19T18:28:57.079Z",
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
		"liquidityUsd": 527795.3,
		"hash": "ec8a5d4ccb2bfcf9657d4beb5e4dd170c409748388e21d03b18ed807fd7da81c"
	},
	{
		"id": "1c5456857340",
		"ts": "2026-08-19T18:28:57.263Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55339.92,
		"hash": "1c5456857340e4bb43d182e9c85cc477e369fc9c0fc44ee7b7250cf6b579cd81"
	},
	{
		"id": "a3b840035666",
		"ts": "2026-08-19T18:28:57.447Z",
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
		"liquidityUsd": 868102.48,
		"hash": "a3b840035666686a878032b2fcfba647772726653fc71f89b805c3235957ab8e"
	},
	{
		"id": "499c562dba83",
		"ts": "2026-08-19T18:28:57.630Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10754289.32,
		"hash": "499c562dba834374eea864b25e0b5ecf0b57762e8039d2fe66d043e1faf45ad7"
	},
	{
		"id": "598597a0ce55",
		"ts": "2026-08-19T18:28:57.927Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149363.43,
		"hash": "598597a0ce55aef16bdbf41949463a291724fefd70c7e6cc065126dfa1ae824e"
	},
	{
		"id": "0b7fb62cf2d1",
		"ts": "2026-08-19T18:28:58.104Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 35891.82,
		"hash": "0b7fb62cf2d1b1d04b46ed95b168d73ea19de28d8dfef884b3592770c51ef16b"
	},
	{
		"id": "356457979fe8",
		"ts": "2026-08-19T18:28:58.287Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 563734.98,
		"hash": "356457979fe898a8e5850e79d65488d9bd858e2b00ac922cd833214e8d2e94d3"
	},
	{
		"id": "b78e2b25dcd4",
		"ts": "2026-08-19T17:22:41.526Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112302003.23,
		"hash": "b78e2b25dcd4673790fc7f14dcb4f267895b4fc5b82774ae9f2bebb3ae6a2ffc"
	},
	{
		"id": "b0323a9a43c5",
		"ts": "2026-08-19T17:22:42.168Z",
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
		"liquidityUsd": 17426010.46,
		"hash": "b0323a9a43c5e73d092bf59da27f3be1652ff8f3af6c347c3d60990541c9e94f"
	},
	{
		"id": "6d371ea9d8e6",
		"ts": "2026-08-19T17:22:42.512Z",
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
		"liquidityUsd": 846351.58,
		"hash": "6d371ea9d8e6c88bc7e608b1b435315ed4d18d56b58597b081c298fafe345dd5"
	},
	{
		"id": "09d6e7e35035",
		"ts": "2026-08-19T17:22:42.851Z",
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
		"liquidityUsd": 26744634.38,
		"hash": "09d6e7e35035becdcdacfc012e90b8bc82d5011cd3850cdec90b00e6f7888980"
	},
	{
		"id": "f192cfa16988",
		"ts": "2026-08-19T17:22:43.187Z",
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
		"liquidityUsd": 2305144.35,
		"hash": "f192cfa1698869676d56e32a09de4d86207d9b249cdb732fc7ffcc2f69cc7f89"
	},
	{
		"id": "f869be303c70",
		"ts": "2026-08-19T17:22:43.410Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 950789.17,
		"hash": "f869be303c701cff6b819e8be65f9b157a82bb4cb43a0a71b4b115d489eaafc3"
	},
	{
		"id": "7bc1ba7ab586",
		"ts": "2026-08-19T17:22:43.667Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4202943.14,
		"hash": "7bc1ba7ab58643b7efe4cc2b19eafaf972195da5f9e35297347d7d3ae32bf91e"
	},
	{
		"id": "93529093c9f2",
		"ts": "2026-08-19T17:22:44.025Z",
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
		"liquidityUsd": 1564675.16,
		"hash": "93529093c9f2f4a18507fae7ed5b3e3fadedc0ee4aac8b61f4e1b7eab947a929"
	},
	{
		"id": "111ff38a8042",
		"ts": "2026-08-19T17:22:44.233Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2991632.55,
		"hash": "111ff38a804292309af6b7b8cf14fa9d549bd1ad3ed3826ddb624e52f116ecbc"
	},
	{
		"id": "669e8b075397",
		"ts": "2026-08-19T17:22:44.602Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 387861.67,
		"hash": "669e8b075397c28229f72e708d4bff6871b9b362f8f879a1ef0053df0a6b8b2e"
	},
	{
		"id": "c7e529df6034",
		"ts": "2026-08-19T17:22:44.808Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 573398.75,
		"hash": "c7e529df603468e75979b79bad081fb1fa89709c1a4bfff2dd8581a5f311aa04"
	},
	{
		"id": "f463ca76dda7",
		"ts": "2026-08-19T17:22:45.016Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3700330,
		"hash": "f463ca76dda7e5bc1c901432f043bb1a2f7d2e3635cc17b52ab0246ea2829ae1"
	},
	{
		"id": "031ec7bb9b3b",
		"ts": "2026-08-19T17:22:45.219Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4208321.54,
		"hash": "031ec7bb9b3b49124e676943974b8e08b5025e4c6cbb2b13a8273de6d6bfadbd"
	},
	{
		"id": "6a172c2f47a7",
		"ts": "2026-08-19T17:22:45.435Z",
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
		"liquidityUsd": 534202.08,
		"hash": "6a172c2f47a744580e76ad452fe01d0af11121d20c127ba3e008dc240ddd813a"
	},
	{
		"id": "7d4cedafac61",
		"ts": "2026-08-19T17:22:45.679Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55737.79,
		"hash": "7d4cedafac61f8399e07e3bc4fa8e3516b1f334af028d13319abc866070b998d"
	},
	{
		"id": "a414e1e3fe6b",
		"ts": "2026-08-19T17:22:45.890Z",
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
		"liquidityUsd": 856906.91,
		"hash": "a414e1e3fe6b33cd9180f23628e3c61afbec87efca63f9fd7a1baabd73e329c0"
	},
	{
		"id": "4feaf85659d0",
		"ts": "2026-08-19T17:22:46.100Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10621899.87,
		"hash": "4feaf85659d011f90cf6a8cff1852453dd4f35fc1130cd080afcbda616e19a81"
	},
	{
		"id": "f464d686cf51",
		"ts": "2026-08-19T17:22:46.397Z",
		"symbol": "evo",
		"token": "0x721B072dbb616F29eEA73ac004e03Fd4E884bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 149350.88,
		"hash": "f464d686cf51ae40dd2ef0ecc0170f2b0a883e3fa4c98fc1d5b7f34a769dfe62"
	},
	{
		"id": "5cbb1b335c8f",
		"ts": "2026-08-19T17:22:46.980Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 34869.63,
		"hash": "5cbb1b335c8fbd3f5e2ea78282ea261e31080d30633214bf1d04434a7844c699"
	},
	{
		"id": "f93d232cca08",
		"ts": "2026-08-19T17:22:47.186Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3149031.25,
		"hash": "f93d232cca083b6839e7302239524945c9c302882956b99c87110c06f2c66185"
	},
	{
		"id": "702cfb35b61c",
		"ts": "2026-08-19T16:26:21.983Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113119599.07,
		"hash": "702cfb35b61ca074442792405889d1be0a26298b20291fd0832a6560b487d849"
	},
	{
		"id": "ed296a71c385",
		"ts": "2026-08-19T16:26:22.650Z",
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
		"liquidityUsd": 14043706.55,
		"hash": "ed296a71c385991560e2040f57a7da959bd8f51455507ff8a6a1155c9bd6b135"
	},
	{
		"id": "599aeec9af9a",
		"ts": "2026-08-19T16:26:23.060Z",
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
		"liquidityUsd": 805467.21,
		"hash": "599aeec9af9a1f2b1a01321185566c00b96e7d91f71d1ec3f925a30877e12191"
	},
	{
		"id": "92f9df522b90",
		"ts": "2026-08-19T16:26:23.567Z",
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
		"liquidityUsd": 26860048.48,
		"hash": "92f9df522b908832c7733e96e8bb248083469e0276cc16a5a6c89f661ace546f"
	},
	{
		"id": "cc349442f1d4",
		"ts": "2026-08-19T16:26:23.969Z",
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
		"liquidityUsd": 2309298.74,
		"hash": "cc349442f1d45eab2fce746552fc07a91c2f238c66c1fe6af65d0275cdc5e3ea"
	},
	{
		"id": "a71d2de57a11",
		"ts": "2026-08-19T16:26:24.214Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 957441.06,
		"hash": "a71d2de57a118cf3732bf36026ea9038ed1ce364a66319cc9b3504b681aac9af"
	},
	{
		"id": "7bde1ed8be59",
		"ts": "2026-08-19T16:26:24.430Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4118554.79,
		"hash": "7bde1ed8be597d860ac6d5d2d834ff2da78d36a313e7d3413312e1909cab961c"
	},
	{
		"id": "e5e9bb9df5fd",
		"ts": "2026-08-19T16:26:24.679Z",
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
		"liquidityUsd": 1580099.84,
		"hash": "e5e9bb9df5fd9c3eb2422ea519abb8238a737c5bfecc2853f2b30d708f5566f0"
	},
	{
		"id": "e469058d4cd4",
		"ts": "2026-08-19T16:26:24.899Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3011464.75,
		"hash": "e469058d4cd44f8181af6d14a6ff05fe3662a81c0ea82deee52470d7d234411b"
	},
	{
		"id": "54e433ac8d9e",
		"ts": "2026-08-19T16:26:25.355Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 388271.31,
		"hash": "54e433ac8d9e800b227dc9adff9d6f91c178f385aeaa1ebf77e710b8dfa0c368"
	},
	{
		"id": "3376d857e5ee",
		"ts": "2026-08-19T16:26:25.562Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 584926.14,
		"hash": "3376d857e5ee0ec942fdd7f943e6da4c841c24ade3faa2163f683587a26024bd"
	},
	{
		"id": "9b6cbd6a5a8b",
		"ts": "2026-08-19T16:26:25.789Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3730472.64,
		"hash": "9b6cbd6a5a8baefc091bf4e22e3e65f7b752280ad0e8d5c9816175eaa5597af6"
	},
	{
		"id": "ddc05b2b84eb",
		"ts": "2026-08-19T16:26:25.990Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4133504.99,
		"hash": "ddc05b2b84ebe05ce43cbd07b2a48963fab6af4e811c58b2bce7a363e179ecf0"
	},
	{
		"id": "92d376e2ced2",
		"ts": "2026-08-19T16:26:26.220Z",
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
		"liquidityUsd": 526052.98,
		"hash": "92d376e2ced26848d12d541a8324f0d2614016d1a1b87ce0d9a4f19546e05bd0"
	},
	{
		"id": "08556c6216ab",
		"ts": "2026-08-19T16:26:26.425Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10827822.7,
		"hash": "08556c6216ab207475039e8bb3dabe55343334ca8fcd6e164ed056a02de088a9"
	},
	{
		"id": "84a3745a79a4",
		"ts": "2026-08-19T16:26:26.659Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 45297.02,
		"hash": "84a3745a79a4214208e00f8fdd6ea8e4902a2fcaca6aca8024c3d52d0d169f11"
	},
	{
		"id": "2c321302fc19",
		"ts": "2026-08-19T16:26:26.860Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 40103.14,
		"hash": "2c321302fc1947ee8a8818899614efaaebbb4fed6925003277a4c7772ebb4345"
	},
	{
		"id": "ca15227e3f46",
		"ts": "2026-08-19T16:26:27.097Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3175601.76,
		"hash": "ca15227e3f468d51ae2475025ae714c209c92ae0617b5ece1ebdb4fa4920582d"
	},
	{
		"id": "bdde8917c264",
		"ts": "2026-08-19T16:26:27.318Z",
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
		"liquidityUsd": 857036.26,
		"hash": "bdde8917c2647cd494ee46211a27692e9d73272185586c47a9480005cb5d8302"
	},
	{
		"id": "b7f646b620a4",
		"ts": "2026-08-19T15:26:42.019Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113678172.85,
		"hash": "b7f646b620a42b7c4fa021e70cd1ae2249dc8bbce9b4ad9e1c90aa102c804d88"
	},
	{
		"id": "4a0dc580c18f",
		"ts": "2026-08-19T15:26:42.637Z",
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
		"liquidityUsd": 12746117.37,
		"hash": "4a0dc580c18f8f3161369307115507c8bc149f920a41f2ea2064403797bf1dcd"
	},
	{
		"id": "ef0e752cfe88",
		"ts": "2026-08-19T15:26:43.066Z",
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
		"liquidityUsd": 772258.91,
		"hash": "ef0e752cfe88b6b6a5c30557e84e8029b00a1f1aaaa71aae76ee1e634650a859"
	},
	{
		"id": "748bd60e0a29",
		"ts": "2026-08-19T15:26:43.523Z",
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
		"liquidityUsd": 27254881.48,
		"hash": "748bd60e0a29bb4b5290749d4d6d01424afecf4c6f15c64d88b70eaf9493f684"
	},
	{
		"id": "4abc56af6152",
		"ts": "2026-08-19T15:26:43.977Z",
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
		"liquidityUsd": 2278715.8,
		"hash": "4abc56af6152fc564311ed974715558c4860738841de4065bb711f9c7f54a12c"
	},
	{
		"id": "caede6f9548e",
		"ts": "2026-08-19T15:26:44.231Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 908651.99,
		"hash": "caede6f9548ebd1102054a9a71b92e9dbcae0aaa573dcac288ec57f359042e96"
	},
	{
		"id": "42a725b1d78e",
		"ts": "2026-08-19T15:26:44.479Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4379375.42,
		"hash": "42a725b1d78e0da85d4f7aff2f94fd6f263ff3b9faf8cda77f81e8cee541d3f0"
	},
	{
		"id": "06692ac9d6ba",
		"ts": "2026-08-19T15:26:44.889Z",
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
		"liquidityUsd": 1529456.14,
		"hash": "06692ac9d6bab6fa872682cbf7e5d07d1c48383cb611f9f02bbdb4ab4be8e26e"
	},
	{
		"id": "bbbb0fd47708",
		"ts": "2026-08-19T15:26:45.122Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3007418.73,
		"hash": "bbbb0fd477081cff4e1c6f9f5cb134f75c52bc0ba79f731cd246bc9031bf83b8"
	},
	{
		"id": "3cdb8425c0d0",
		"ts": "2026-08-19T15:26:45.579Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 395236.34,
		"hash": "3cdb8425c0d02537a16e5b745cdb120575f7b76bf4393fbc9aef82a1db6507d6"
	},
	{
		"id": "d3fe17a79060",
		"ts": "2026-08-19T15:26:45.805Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 560364.82,
		"hash": "d3fe17a790601c4657039f87aa9a583e5201deb8846cb8735a60b39ce83937e8"
	},
	{
		"id": "458dbf8ed074",
		"ts": "2026-08-19T15:26:46.126Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3705359.85,
		"hash": "458dbf8ed074179739652e9990646d59f3156494ef86e35845ea8bbe0e8b33ab"
	},
	{
		"id": "99c8e35c6331",
		"ts": "2026-08-19T15:26:46.357Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4379375.42,
		"hash": "99c8e35c6331714cebe9a96c7851be701c4bc6b20efb38fadfbc00efdf62edb8"
	},
	{
		"id": "94887b531ab5",
		"ts": "2026-08-19T15:26:46.590Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 34685.65,
		"hash": "94887b531ab5a20204998f260cc8ca82c6c67486c23850f461d2f18e3dd3d491"
	},
	{
		"id": "904a0b17fbc2",
		"ts": "2026-08-19T15:26:46.809Z",
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
		"liquidityUsd": 508952.6,
		"hash": "904a0b17fbc2580523d7a49583c72ac4896d685d856c29787cb00ab161893be6"
	},
	{
		"id": "712cef50246e",
		"ts": "2026-08-19T15:26:47.021Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10691566.58,
		"hash": "712cef50246e1f2575d115624fef34dd45526b862e7674352dcb3b22721fd7b6"
	},
	{
		"id": "2fb283ff63f2",
		"ts": "2026-08-19T15:26:47.329Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 52702.39,
		"hash": "2fb283ff63f27b2907f5ed7d62aade97397ac7046ad03df7d433bac69ff1c667"
	},
	{
		"id": "97669dbafe21",
		"ts": "2026-08-19T15:26:47.545Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3059359.1,
		"hash": "97669dbafe2112ed9b8f9e23664533dde878fd4b43ac4e7b8956e1793d1df0d1"
	},
	{
		"id": "95322ea5c6cc",
		"ts": "2026-08-19T15:26:47.768Z",
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
		"liquidityUsd": 860406.39,
		"hash": "95322ea5c6cc7912f35822c7e8e6e8640ee0b79b973f70740b044a3fd50d92d3"
	},
	{
		"id": "5f55253710f8",
		"ts": "2026-08-19T15:26:48.004Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 608535.79,
		"hash": "5f55253710f8dc02d92a80ebcf5d00c7124f28c2aaea36cb6546ca83256a6302"
	},
	{
		"id": "6e40f46404e0",
		"ts": "2026-08-19T14:28:44.067Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112398952.42,
		"hash": "6e40f46404e0179750f4231e46e90572c084cb257dfffcfd21ab1fc8bab89498"
	},
	{
		"id": "9003d4e27bd7",
		"ts": "2026-08-19T14:28:44.707Z",
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
		"liquidityUsd": 13422088.55,
		"hash": "9003d4e27bd791683cfb883e20f7977b54f6063d819dbd5d3c9a9405018c1a98"
	},
	{
		"id": "c7d797d049bc",
		"ts": "2026-08-19T14:28:45.147Z",
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
		"liquidityUsd": 747453.61,
		"hash": "c7d797d049bc97f5b17cf60fb0f8558296ecf769df463d8145dae63a6fe0339e"
	},
	{
		"id": "350ecf73682f",
		"ts": "2026-08-19T14:28:45.586Z",
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
		"liquidityUsd": 26904357.59,
		"hash": "350ecf73682f2cc3456aca0ffe00b6b63c48b05d81e82196f1c1a83cf14617e1"
	},
	{
		"id": "8e05debc30d0",
		"ts": "2026-08-19T14:28:46.018Z",
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
		"liquidityUsd": 4275345.29,
		"hash": "8e05debc30d034be6c4657cd20207887af9983dcc0c3f5f681e5b8c1be689cb0"
	},
	{
		"id": "725a3b77b85e",
		"ts": "2026-08-19T14:28:46.264Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 909548.8,
		"hash": "725a3b77b85e93ffd87b4260fac1c48d3c7600970792bbef205904d690d8a710"
	},
	{
		"id": "2b5dea9e3338",
		"ts": "2026-08-19T14:28:46.609Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4430844.02,
		"hash": "2b5dea9e333846a1d77034b97d69ebe4bb988dbfb0c9383f4cfc9eb3eac80d58"
	},
	{
		"id": "0d30de64abf3",
		"ts": "2026-08-19T14:28:47.045Z",
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
		"liquidityUsd": 1461277.79,
		"hash": "0d30de64abf325793593cb196253f5c05980ccf78b144be28c9c557aa03307c0"
	},
	{
		"id": "2a570f02483d",
		"ts": "2026-08-19T14:28:47.327Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2921138.79,
		"hash": "2a570f02483d0c386e3d121ab4cbf5fb3f54b2d57cda3dcf817a5aae039cee2b"
	},
	{
		"id": "b9e6bb0bad9b",
		"ts": "2026-08-19T14:28:47.764Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 362020,
		"hash": "b9e6bb0bad9bb85b07683d70a91f67d60a47ee15e3ad8c82f1331da7687a2d82"
	},
	{
		"id": "8958bcfb3dab",
		"ts": "2026-08-19T14:28:47.978Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 538219.43,
		"hash": "8958bcfb3dab7e5c1cf5d08cc623223318ec07c97bca5b4fa8f5ce68d00633b0"
	},
	{
		"id": "97e93562a71e",
		"ts": "2026-08-19T14:28:48.188Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3517915.12,
		"hash": "97e93562a71eb25dafe0d9662225be815f54576faf93e31e8924a5d23d0eade1"
	},
	{
		"id": "33f96b9238aa",
		"ts": "2026-08-19T14:28:48.406Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4430840.83,
		"hash": "33f96b9238aabc8405ad6a0c3e1a4c08bc52e92a9d997f9be7030d35e67bd225"
	},
	{
		"id": "1a630d470be2",
		"ts": "2026-08-19T14:28:48.612Z",
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
		"liquidityUsd": 496729.6,
		"hash": "1a630d470be2cb05430464e57ac77dc4476e55b748fd8ecb223a15f7d1068d35"
	},
	{
		"id": "8a83f9303568",
		"ts": "2026-08-19T14:28:48.827Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 38156.58,
		"hash": "8a83f93035684965f8c08a00c7ce8c72643e77a8d3c86afbc05d60f404c7580e"
	},
	{
		"id": "6efa7a2fa328",
		"ts": "2026-08-19T14:28:49.037Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10341600.43,
		"hash": "6efa7a2fa328b41fd0914b2472a970a0c6d3e795ccc1116cc7cdd6cec9647a5d"
	},
	{
		"id": "56333fcd74d2",
		"ts": "2026-08-19T14:28:49.253Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 52821.7,
		"hash": "56333fcd74d23fd81736d8fe112cccb97d15b9a17a411a28a65c91ac0a4e3aaf"
	},
	{
		"id": "7461cc8a71f3",
		"ts": "2026-08-19T14:28:49.470Z",
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
		"liquidityUsd": 862617.99,
		"hash": "7461cc8a71f3cc44b0241f55df72df2e956bad983e745ce2c3c7cecc6f59928e"
	},
	{
		"id": "1c669d3274a7",
		"ts": "2026-08-19T14:28:49.686Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2937773.84,
		"hash": "1c669d3274a7842eaa8e3d24a0b71727a293f0b6dd03e690b7be48bea14868c6"
	},
	{
		"id": "e83544c5d98a",
		"ts": "2026-08-19T14:28:49.899Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 602156.06,
		"hash": "e83544c5d98a8a4ee1091770ed268202e2bd26d532bcfe7af48c0328f3c70421"
	},
	{
		"id": "ae2024ac4459",
		"ts": "2026-08-19T13:40:20.766Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112175780.73,
		"hash": "ae2024ac4459640016d1a2579967d821b5dd0bba20f04a1e4b0948e7eb5dd2be"
	},
	{
		"id": "0adf7987385f",
		"ts": "2026-08-19T13:40:21.003Z",
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
		"liquidityUsd": 14323466.95,
		"hash": "0adf7987385f99268d0593a469ea0b31f183da228748c78c0365c2b6a67949e1"
	},
	{
		"id": "9a3e069898ac",
		"ts": "2026-08-19T13:40:21.234Z",
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
		"liquidityUsd": 749486.63,
		"hash": "9a3e069898aca07266c581087ff41a04b0529e0679358914462891bd9debc519"
	},
	{
		"id": "3ee7df1daec0",
		"ts": "2026-08-19T13:40:21.461Z",
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
		"liquidityUsd": 26881038.26,
		"hash": "3ee7df1daec08a5cdfc40f64a23777cb1ca1e4d2df12b47cc6d5a4cd38aab73d"
	},
	{
		"id": "7c24415bcc9c",
		"ts": "2026-08-19T13:40:21.701Z",
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
		"liquidityUsd": 4291913.93,
		"hash": "7c24415bcc9c23b572bc88bac690fe54e81aa7926fe06a28d1d537db4faa771f"
	},
	{
		"id": "776734b8730d",
		"ts": "2026-08-19T13:40:21.931Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900564.77,
		"hash": "776734b8730dfb0d0c9c1b1ae43530da55fefc79108f7d0ab347c0b2edf5c956"
	},
	{
		"id": "5d9d6bb2e5ef",
		"ts": "2026-08-19T13:40:22.158Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4307029.84,
		"hash": "5d9d6bb2e5ef3917c420fab92fcb6ad82b6d7f8cbcd93208262b7f37913e70ad"
	},
	{
		"id": "590054aa0704",
		"ts": "2026-08-19T13:40:22.393Z",
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
		"liquidityUsd": 3379579.27,
		"hash": "590054aa07049ae671a4b8a7b71fd5383d57fcea7add8388ae3e432caa60c524"
	},
	{
		"id": "002e3655661d",
		"ts": "2026-08-19T13:40:22.660Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2939347.09,
		"hash": "002e3655661d58abf546b8833374d48f2bffe6a99051a5770b318cbf13d27abe"
	},
	{
		"id": "a67170ed7f49",
		"ts": "2026-08-19T13:40:22.928Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 385802.55,
		"hash": "a67170ed7f49f758354403445079ce51d427f06501ffb5106e54b938cc3c9488"
	},
	{
		"id": "277fa52394c1",
		"ts": "2026-08-19T13:40:23.143Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 540949.7,
		"hash": "277fa52394c196902bd379f1b813b7c3de3b88a0fafc9bc9feb77a99048e60ee"
	},
	{
		"id": "f1d438655c56",
		"ts": "2026-08-19T13:40:23.360Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4308038.48,
		"hash": "f1d438655c56c3d3292f2c6ae9be1adfc23562eb24bfffce1dd03fe673b7bd62"
	},
	{
		"id": "673151fd35cc",
		"ts": "2026-08-19T13:40:23.573Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3491639.21,
		"hash": "673151fd35ccda29c0ab90a4cd412eb3be59552d03b02e9b940b3c632615c1a6"
	},
	{
		"id": "b6b35509d9c7",
		"ts": "2026-08-19T13:40:23.788Z",
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
		"liquidityUsd": 494995.4,
		"hash": "b6b35509d9c76f0ce89e958c9574d88efc07c12b2165cde7bea68215a338a5f5"
	},
	{
		"id": "0ada395095fb",
		"ts": "2026-08-19T13:40:24.001Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 42240.1,
		"hash": "0ada395095fbbea39f0359a90f1e77272535289ddbccb86ded3bf7602961780b"
	},
	{
		"id": "0c01b28df4d6",
		"ts": "2026-08-19T13:40:24.263Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55023.77,
		"hash": "0c01b28df4d64da3f39ec5f304a7f2071e8a0395998613a7beb26422f52fdb02"
	},
	{
		"id": "f39954b47c2a",
		"ts": "2026-08-19T13:40:24.478Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10358256.76,
		"hash": "f39954b47c2a13474ba9d8999481f332fc0c88e8d832a9e42330c6c572b58209"
	},
	{
		"id": "c02c0051130a",
		"ts": "2026-08-19T13:40:24.692Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2937590.32,
		"hash": "c02c0051130ac0a4689f70040275797e7c21965477a0778ee1551be20d7653c0"
	},
	{
		"id": "22c64d642096",
		"ts": "2026-08-19T13:40:24.905Z",
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
		"liquidityUsd": 858047.97,
		"hash": "22c64d642096c59c8ed58cab1c3e871497270c6196608da829c9dfb61fb30f8c"
	},
	{
		"id": "edb16effd9dc",
		"ts": "2026-08-19T12:38:21.238Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111891478.85,
		"hash": "edb16effd9dc36722e90833cef700a1e0d461794b3eb803be6c513e2e472c048"
	},
	{
		"id": "924d9439adc7",
		"ts": "2026-08-19T12:38:21.459Z",
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
		"liquidityUsd": 16952213.22,
		"hash": "924d9439adc78150d905395b9cce83abc94a77eb8cc3035d5d9bfb20fc4a6729"
	},
	{
		"id": "f7c9a6b4d9e5",
		"ts": "2026-08-19T12:38:21.822Z",
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
		"liquidityUsd": 746509.56,
		"hash": "f7c9a6b4d9e5bd3bdc8be1bf4b42bfcc29bd56c718f302fda503247820af0e66"
	},
	{
		"id": "0c9b1f8fef7d",
		"ts": "2026-08-19T12:38:22.026Z",
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
		"liquidityUsd": 26737286.74,
		"hash": "0c9b1f8fef7d91c6278291e57b9a0c589da1cbe2ebe10d1e7d7e1457677a8dbd"
	},
	{
		"id": "fa92cd75470d",
		"ts": "2026-08-19T12:38:22.222Z",
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
		"liquidityUsd": 4260685.37,
		"hash": "fa92cd75470de36c0ed8be4c2c4a1be7f664a4303cd6bf768c2adfa059ac10b5"
	},
	{
		"id": "06801e4892a2",
		"ts": "2026-08-19T12:38:22.432Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 900709.99,
		"hash": "06801e4892a26b68eae50e6d0033d52267a733e2fcf2532e4e5a25e728db772c"
	},
	{
		"id": "960052b703cc",
		"ts": "2026-08-19T12:38:22.777Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4363933.87,
		"hash": "960052b703cc66cc4e473853389168109fe61cfba04b14b11ff5b3ca3476c215"
	},
	{
		"id": "b2d71d24c14a",
		"ts": "2026-08-19T12:38:22.985Z",
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
		"liquidityUsd": 3366250.74,
		"hash": "b2d71d24c14a8d8eaf5826c920711ab375aef4db20550e32d759126e86924ef7"
	},
	{
		"id": "73880cec5bc0",
		"ts": "2026-08-19T12:38:23.178Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2961880.42,
		"hash": "73880cec5bc0ca90e841b4e8e6f9611304816d5513a1d5220f8d834a017350a8"
	},
	{
		"id": "90f65070ad0b",
		"ts": "2026-08-19T12:38:23.367Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 392834.42,
		"hash": "90f65070ad0b2bba89fe00afef837c546e4551d873c398f4a392961fbb54796e"
	},
	{
		"id": "4b200a2b632a",
		"ts": "2026-08-19T12:38:23.554Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4371369.6,
		"hash": "4b200a2b632a974002e96e828f1a086d0a706a0d9c8e3182dc444372b6bed9b2"
	},
	{
		"id": "83301ae83baf",
		"ts": "2026-08-19T12:38:23.736Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3586273.13,
		"hash": "83301ae83bafce4ef56002140d0bc0ad321a21b2a07406462248cb4b3cf11860"
	},
	{
		"id": "bb41d777b48e",
		"ts": "2026-08-19T12:38:23.931Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 536820.14,
		"hash": "bb41d777b48e65ed609ebf371c12f58b8fb1664f29e1db8551f3e2c0cbbb3ad0"
	},
	{
		"id": "c849d51a2cfd",
		"ts": "2026-08-19T12:38:25.742Z",
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
		"liquidityUsd": 490483.72,
		"hash": "c849d51a2cfd4fd286a442ca8aa2ef2627b78a5f8c72559cfaf8552fd3d73026"
	},
	{
		"id": "910d21072e02",
		"ts": "2026-08-19T12:38:25.917Z",
		"symbol": "dogue",
		"token": "0xb2000000000000000000003779298b7eB3D8d501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 60840.13,
		"hash": "910d21072e02a5802a50adeef24c5a0828900fcae327c0643ddc502d969569a1"
	},
	{
		"id": "0dc410538dfc",
		"ts": "2026-08-19T12:38:26.099Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 53143.62,
		"hash": "0dc410538dfc15bb509e7611b49cd5a9858f0ccbd52b1a0747a64301a6069e84"
	},
	{
		"id": "29c56c19a007",
		"ts": "2026-08-19T12:38:26.280Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10321516.23,
		"hash": "29c56c19a0073a688de9d2848f9d0119f7660229baf4db74678da6b159fba8db"
	},
	{
		"id": "d9ca9421b72f",
		"ts": "2026-08-19T12:38:26.458Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2931328.94,
		"hash": "d9ca9421b72f742e8dd7ece4c23fe61827e15b46f7d1230990d634728e4f094f"
	},
	{
		"id": "b36326f5dc52",
		"ts": "2026-08-19T12:38:26.643Z",
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
		"liquidityUsd": 865640.23,
		"hash": "b36326f5dc52f97153091c2a9e6a40c2fd450b2b3bd13dbd0908b322d8b3b7fc"
	},
	{
		"id": "ceb1c2871e4f",
		"ts": "2026-08-19T11:20:55.001Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111914402.71,
		"hash": "ceb1c2871e4f1645472c826d01647633b8a908b3152642615d1e8b1454fbca17"
	},
	{
		"id": "e10792ad7c7c",
		"ts": "2026-08-19T11:20:55.666Z",
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
		"liquidityUsd": 16422266.49,
		"hash": "e10792ad7c7c5ba307871de88b741948c9aa3f0d52255eeead0fb84c6a20e941"
	},
	{
		"id": "d69bced9cc02",
		"ts": "2026-08-19T11:20:56.143Z",
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
		"liquidityUsd": 745705.93,
		"hash": "d69bced9cc02b69b321ba00cab70b8b659f4848c2b07c09501739385d3862faf"
	}
]
