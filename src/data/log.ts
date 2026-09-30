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
	"updatedAt": "2026-09-30T23:24:50.963Z",
	"tokensScored": 19062,
	"verdictsIssued": 19062,
	"safe": 16225,
	"risky": 1372,
	"likelyRug": 1465,
	"ticks": 1083
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "d85dc0e8feaf",
		"ts": "2026-09-30T23:24:47.199Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 161399096.52,
		"hash": "d85dc0e8feaf1ea8ce03ce46baddadf913cf62d49d1313b704d33eac8e8060e1"
	},
	{
		"id": "47ff31e1e939",
		"ts": "2026-09-30T23:24:47.455Z",
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
		"liquidityUsd": 16559286.4,
		"hash": "47ff31e1e93929f45a74370113d6456f5fb5e9e4729c9eb0f8d34d514d69c10b"
	},
	{
		"id": "b815dfd7f1c9",
		"ts": "2026-09-30T23:24:47.668Z",
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
		"liquidityUsd": 875061.55,
		"hash": "b815dfd7f1c98054cb77b916968a19651429984e14e131ecee1d80a8efd2ae70"
	},
	{
		"id": "f08311481496",
		"ts": "2026-09-30T23:24:47.873Z",
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
		"liquidityUsd": 42030732.63,
		"hash": "f08311481496228eb95965c8fb32188a7898d63264279075425c8058503cace5"
	},
	{
		"id": "e166bde29e1e",
		"ts": "2026-09-30T23:24:48.086Z",
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
		"liquidityUsd": 4601106.31,
		"hash": "e166bde29e1e57a19657eca1eb0845d96d4b366835054ade7efb598557861264"
	},
	{
		"id": "e4ad472e1806",
		"ts": "2026-09-30T23:24:48.295Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1324860.69,
		"hash": "e4ad472e1806d08f7707ee3753865ae14e9f20141dc607121b49b4d3b9358725"
	},
	{
		"id": "201f04eab385",
		"ts": "2026-09-30T23:24:48.497Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42030732.63,
		"hash": "201f04eab3852d120f7d5e2fdb0130956427bd898e95b2f742aa1243fff8e094"
	},
	{
		"id": "518ca2ff7a63",
		"ts": "2026-09-30T23:24:48.710Z",
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
		"liquidityUsd": 2309372.64,
		"hash": "518ca2ff7a63432b436d7e20ab00451878cf969c7feb94c3952d4a92d88b730a"
	},
	{
		"id": "8c02763cf165",
		"ts": "2026-09-30T23:24:49.013Z",
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
		"liquidityUsd": 1759445.27,
		"hash": "8c02763cf16543a0d7efd24a29cb3c83f46c860b0f48e7cbbce5feb70a911134"
	},
	{
		"id": "50a0f8eea18c",
		"ts": "2026-09-30T23:24:49.216Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4016117.35,
		"hash": "50a0f8eea18c601fddfada1d54f3b2d7709ee4aa6179742ec8fe932f1571be79"
	},
	{
		"id": "86ecd7e729de",
		"ts": "2026-09-30T23:24:49.405Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1641165.78,
		"hash": "86ecd7e729de5fda707923ed7752997433292981fccbe711502a79bce85b7fd7"
	},
	{
		"id": "ca523406d3d4",
		"ts": "2026-09-30T23:24:49.608Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 174687.39,
		"hash": "ca523406d3d46c9cf910f6bc0826945aaeb37be6acc3c57316665c11192c8526"
	},
	{
		"id": "c07c2afd183f",
		"ts": "2026-09-30T23:24:49.797Z",
		"symbol": "ICP",
		"token": "0x00f3C42833C3170159af4E92dbb451Fb3F708917",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 713994.04,
		"hash": "c07c2afd183fe87f1d5ea9b00f6255a727ce7c8d46632d5ec5946cd128b7b774"
	},
	{
		"id": "cb1dc1bf87a3",
		"ts": "2026-09-30T23:24:49.988Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 499574.19,
		"hash": "cb1dc1bf87a3d0ef4fdc997cc7fb83e704a1c17af284f7e75a967915f4f0213d"
	},
	{
		"id": "f790b70295c3",
		"ts": "2026-09-30T23:24:50.183Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 626157.22,
		"hash": "f790b70295c36ca51a2662e173f389e18a0403ac5c374e14f08321f5ce8a5920"
	},
	{
		"id": "5417642d09de",
		"ts": "2026-09-30T23:24:50.376Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4277769.05,
		"hash": "5417642d09decd707e8855aa1f9288a84d21a0a217f88447d395171ffca3281a"
	},
	{
		"id": "fe7598c5c1a8",
		"ts": "2026-09-30T23:24:50.580Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1090118.1,
		"hash": "fe7598c5c1a8360e8a861f17a192a3965e2a8c7a66bcd8fcf2344222731551a4"
	},
	{
		"id": "f030db137c71",
		"ts": "2026-09-30T23:24:50.767Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2720346.46,
		"hash": "f030db137c71a9e7dae275d2d9953e7bdb7c29532e528e8e138270ffde8beb9b"
	},
	{
		"id": "2119bfdc5b23",
		"ts": "2026-09-30T23:24:50.963Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18052743.24,
		"hash": "2119bfdc5b2358ea8be417cda6feed168542a599565b42d0d5ec812d2f8a90d7"
	},
	{
		"id": "19069de25927",
		"ts": "2026-09-30T19:46:55.665Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 160898324.49,
		"hash": "19069de259278a0362280d08e450f6cc6af54953c47b0c3456702b121485fcac"
	},
	{
		"id": "ae6ad9d10f68",
		"ts": "2026-09-30T19:46:55.984Z",
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
		"liquidityUsd": 16184800.84,
		"hash": "ae6ad9d10f680d97cc904069dd78e0655e2acd4a6ed4c46246dd2309e16b1dc8"
	},
	{
		"id": "09c5197a9a06",
		"ts": "2026-09-30T19:46:56.192Z",
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
		"liquidityUsd": 875142.97,
		"hash": "09c5197a9a0655a466850b036753a5c46c6675d2ee7be3427a9890b0bde8a957"
	},
	{
		"id": "03f4edd4201f",
		"ts": "2026-09-30T19:46:56.393Z",
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
		"liquidityUsd": 41736363.51,
		"hash": "03f4edd4201f469411061336c3b8791eb18d6d6b689a46acc7d4181161721076"
	},
	{
		"id": "23ebe3c12ea6",
		"ts": "2026-09-30T19:46:56.579Z",
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
		"liquidityUsd": 4564514.29,
		"hash": "23ebe3c12ea63ef062a176c06f544cb154f468657fd85e9db98bcbae6b502da1"
	},
	{
		"id": "0793a972bc79",
		"ts": "2026-09-30T19:46:56.774Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1324949.74,
		"hash": "0793a972bc799b1477409be86217068acd7a696ed767b760cecd6dfd8924c6f8"
	},
	{
		"id": "ae0043ea1577",
		"ts": "2026-09-30T19:46:57.033Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41736363.51,
		"hash": "ae0043ea1577dcca3922fe11b5710740db311fc53d42349ac484eee7cc047200"
	},
	{
		"id": "7dbb934a1139",
		"ts": "2026-09-30T19:46:57.241Z",
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
		"liquidityUsd": 2298986.13,
		"hash": "7dbb934a11396e6518428bb1a5c5c252b303fa89cda942bbe301c1f164390076"
	},
	{
		"id": "7fedc783bcbc",
		"ts": "2026-09-30T19:46:57.441Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3898245.77,
		"hash": "7fedc783bcbc730e92c68d127ba2bcc9e9c70778a82057d54e6f0368230e852e"
	},
	{
		"id": "9e384f7f3a84",
		"ts": "2026-09-30T19:46:57.633Z",
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
		"liquidityUsd": 1784857.81,
		"hash": "9e384f7f3a844aa7f1245126e872b4b15d044bec3fcab3f0fba48da5eaa4d59d"
	},
	{
		"id": "4a5e8642ecc7",
		"ts": "2026-09-30T19:46:57.830Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1631245.12,
		"hash": "4a5e8642ecc7b3c40f42728115ba9bf7d49af8d250d68bc932b992f4ab857496"
	},
	{
		"id": "9b531e11e0f2",
		"ts": "2026-09-30T19:46:58.032Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 234877.87,
		"hash": "9b531e11e0f2971809ac0d35733b664713e08f239f6715b794e2093761426a2b"
	},
	{
		"id": "1c5f3d80c8bf",
		"ts": "2026-09-30T19:46:58.218Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 495162.85,
		"hash": "1c5f3d80c8bf6c1a5d616ac9b41dd65c6e7617fd03ec586e08bb489a4f3f6d71"
	},
	{
		"id": "530b4cc94722",
		"ts": "2026-09-30T19:46:58.411Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 643516.88,
		"hash": "530b4cc94722ed0d2879fc333b8bc3a39c0011159f1f363b1f4d418512531ac7"
	},
	{
		"id": "d83d325940a1",
		"ts": "2026-09-30T19:46:58.604Z",
		"symbol": "ICP",
		"token": "0x00f3C42833C3170159af4E92dbb451Fb3F708917",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 720172.45,
		"hash": "d83d325940a17f0d747ff9d3c5c893f6dd51c1b196a68f935ff9d82959c249b6"
	},
	{
		"id": "d213a42ae882",
		"ts": "2026-09-30T19:46:58.814Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1127332.84,
		"hash": "d213a42ae882752f91b17cde72f29e06e131308d2e97b5f5515a6384a91d0d68"
	},
	{
		"id": "d25d51ef2da1",
		"ts": "2026-09-30T19:46:59.013Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1086319.52,
		"hash": "d25d51ef2da1e086d158d993840d088ce54c6ce43e2e1ff0b7c311d0c41a8a7d"
	},
	{
		"id": "3955cb15b78b",
		"ts": "2026-09-30T19:46:59.194Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 383893.8,
		"hash": "3955cb15b78b6bcb53a9c780740e3c2962a180abd42844ed5cce42ab053f3767"
	},
	{
		"id": "3e43538ec7f2",
		"ts": "2026-09-30T19:46:59.401Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 369174.78,
		"hash": "3e43538ec7f2a6ed8ceed0c70c1b4ed9023e1d9dccfeea46a3bcd4a324350b56"
	},
	{
		"id": "a7e6d3e8e88e",
		"ts": "2026-09-30T14:33:25.224Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 161453531.76,
		"hash": "a7e6d3e8e88e5c08363e0bd0c33ba213684e9e5df815333e1f271c0a77f4d878"
	},
	{
		"id": "41a1dffcf7e2",
		"ts": "2026-09-30T14:33:26.639Z",
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
		"liquidityUsd": 16989873.2,
		"hash": "41a1dffcf7e2f5aa9cdcf9dde928ec23ef86a4432ba97b197af68608a280871e"
	},
	{
		"id": "6e46482b1b7b",
		"ts": "2026-09-30T14:33:26.927Z",
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
		"liquidityUsd": 892891.48,
		"hash": "6e46482b1b7ba6333f7c95dc13979b49ef3a33997727f277bf7a584c0877fb49"
	},
	{
		"id": "d972bdc2a21b",
		"ts": "2026-09-30T14:33:27.228Z",
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
		"liquidityUsd": 41810373.28,
		"hash": "d972bdc2a21bc68f216c677794c3a1851bb9735276364d5f42cc02ca2cb86d5f"
	},
	{
		"id": "4c9ee76355df",
		"ts": "2026-09-30T14:33:27.514Z",
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
		"liquidityUsd": 4568890.67,
		"hash": "4c9ee76355df9058cc0c12755cebe18f745744ff7e6e3295396283c70e4ded65"
	},
	{
		"id": "983d9bc87df3",
		"ts": "2026-09-30T14:33:27.775Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1327075.92,
		"hash": "983d9bc87df3288e1872b27fdbea499d4473a603db14b9f97e516304275fc0f8"
	},
	{
		"id": "796c14b169d5",
		"ts": "2026-09-30T14:33:28.095Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41772244.3,
		"hash": "796c14b169d5039c3e4e8a79f4857f9cd76a246f2099eeaf92ed9c29ed85ee49"
	},
	{
		"id": "999b303562db",
		"ts": "2026-09-30T14:33:28.398Z",
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
		"liquidityUsd": 2451419.54,
		"hash": "999b303562db64a5e6a5afc165fb9b396302031b97da508be7b6c61acd4ba7ed"
	},
	{
		"id": "7844c1143b96",
		"ts": "2026-09-30T14:33:28.681Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3850069.36,
		"hash": "7844c1143b96a25b86e80152ef7fffb828584715b0868ebcb6c180b6839425f2"
	},
	{
		"id": "a97393920c79",
		"ts": "2026-09-30T14:33:28.960Z",
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
		"liquidityUsd": 1787546.47,
		"hash": "a97393920c793b59d8d728255af6ab0c59c12afe9272d6c9f167b167a9b56d21"
	},
	{
		"id": "21ec1c70447a",
		"ts": "2026-09-30T14:33:29.210Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1649115.67,
		"hash": "21ec1c70447a3def9b9939a4c10341c0975196a28af03221d3a025fc9710109a"
	},
	{
		"id": "cb4b4fdadffa",
		"ts": "2026-09-30T14:33:29.446Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 269471.08,
		"hash": "cb4b4fdadffa86f41883cac78518827ec00eee7020f9b9f68bdc6150109112ab"
	},
	{
		"id": "a63bc001cb46",
		"ts": "2026-09-30T14:33:29.686Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 534341.73,
		"hash": "a63bc001cb46df50d22cd5891cdc9ed7f8b3170803c6f85e073f52809de57b49"
	},
	{
		"id": "6bdb3e66aeed",
		"ts": "2026-09-30T14:33:29.926Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 276114.66,
		"hash": "6bdb3e66aeed66fa1fb9dd844a0146c394662641cf636d9c1eebaff0ba325981"
	},
	{
		"id": "a7357457d5fb",
		"ts": "2026-09-30T14:33:30.163Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17949447.25,
		"hash": "a7357457d5fbc631968ddfb52cc3d7f4175fbb9637cab7ea2267006acf584981"
	},
	{
		"id": "9bb03fd2b56b",
		"ts": "2026-09-30T14:33:30.406Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 632881.94,
		"hash": "9bb03fd2b56bca33275b72e04aa2128fc44c240c17dbe16f9db680fd94e96fc4"
	},
	{
		"id": "f7850699c286",
		"ts": "2026-09-30T14:33:30.645Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1097552.78,
		"hash": "f7850699c2861d2f6516cecdbf406db8fba5bf8dd140959f0be571869e906e51"
	},
	{
		"id": "8864e5e118ed",
		"ts": "2026-09-30T14:33:30.890Z",
		"symbol": "ICP",
		"token": "0x00f3C42833C3170159af4E92dbb451Fb3F708917",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 720349.3,
		"hash": "8864e5e118ed4eee1770b45fa5d22e26f662da1d74ec2a80dd8aea17a495d592"
	},
	{
		"id": "9535888aa62f",
		"ts": "2026-09-30T14:33:31.132Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4215183.9,
		"hash": "9535888aa62f48c3b6ecda1a25371ee9c796c5e21a302230a5f603eeb3a8341a"
	},
	{
		"id": "b43c9132f8cf",
		"ts": "2026-09-30T07:53:17.703Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 160314641.6,
		"hash": "b43c9132f8cf9b875438ca9a4091bbd82404968ef99d44fb86883428d4febb80"
	},
	{
		"id": "0205bcf5622c",
		"ts": "2026-09-30T07:53:17.961Z",
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
		"liquidityUsd": 17216354.6,
		"hash": "0205bcf5622cb6dc7b7483c8117a31f936df631e07a3a288bd4c0cccefc774ac"
	},
	{
		"id": "477b2555c091",
		"ts": "2026-09-30T07:53:18.202Z",
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
		"liquidityUsd": 880484.15,
		"hash": "477b2555c091d640c9148d85216c4fb1a053c1b04dacb5396ec1d73c568d9288"
	},
	{
		"id": "a55f9dd895c7",
		"ts": "2026-09-30T07:53:18.448Z",
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
		"liquidityUsd": 41945664.04,
		"hash": "a55f9dd895c7e06107d648cd39746288ed0b68ab9a80a5885a857aa6696bf3ea"
	},
	{
		"id": "c20f1e79acfd",
		"ts": "2026-09-30T07:53:18.690Z",
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
		"liquidityUsd": 4524099.01,
		"hash": "c20f1e79acfde92be8dc35a8591d59d3821e6220bcb9fe3603bde6daf552415f"
	},
	{
		"id": "6ff0baaf90a5",
		"ts": "2026-09-30T07:53:18.920Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1300252.97,
		"hash": "6ff0baaf90a58e616045909b24caecd737bd076e968ab55b627c285b98f26ddc"
	},
	{
		"id": "85d8dd78259a",
		"ts": "2026-09-30T07:53:19.163Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41954526.44,
		"hash": "85d8dd78259a036046aa25ef669157d64d7c4faaed128c20e20d810130077427"
	},
	{
		"id": "8f6bcfcaef77",
		"ts": "2026-09-30T07:53:19.411Z",
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
		"liquidityUsd": 2445803.78,
		"hash": "8f6bcfcaef77884e1b868b923070ba78dc1b837629736f5ae92b4dc214b866a9"
	},
	{
		"id": "e18dbad74afd",
		"ts": "2026-09-30T07:53:19.648Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4066316.47,
		"hash": "e18dbad74afd46c98f4d0f27704a1a91e810797d16fa612d598271d6b0fec9d5"
	},
	{
		"id": "14032aeaa08b",
		"ts": "2026-09-30T07:53:19.880Z",
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
		"liquidityUsd": 1902368.55,
		"hash": "14032aeaa08b62b869b61c5f7d82856d3dd37c1156073a0a633027608d995dbe"
	},
	{
		"id": "2d0a5374e095",
		"ts": "2026-09-30T07:53:20.099Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 265319.16,
		"hash": "2d0a5374e095b5936500a4d51bc56d0b2dad71f5ae5a071cbd09050fbfa37bfc"
	},
	{
		"id": "eb97fdd43a85",
		"ts": "2026-09-30T07:53:20.325Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1593925.51,
		"hash": "eb97fdd43a8528c7632236012e429ead25ecb2d987e41b9600ed9d88e381f9e2"
	},
	{
		"id": "acf8671b78b1",
		"ts": "2026-09-30T07:53:20.548Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 297103.83,
		"hash": "acf8671b78b17e211a643ad9bdcae68c87df36f42d891314196857f9ab9ac15d"
	},
	{
		"id": "98d01976e8ef",
		"ts": "2026-09-30T07:53:20.770Z",
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
		"liquidityUsd": 556671.9,
		"hash": "98d01976e8ef4739a64f06104a83c1c6f38c530a7050e40faf1f12dfcd0af8cc"
	},
	{
		"id": "712d575b6661",
		"ts": "2026-09-30T07:53:20.986Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2769078.42,
		"hash": "712d575b666142c7262489c7a6161f75d6af708da5c6369465d2d6ae69392b7f"
	},
	{
		"id": "cc8b3ee041cc",
		"ts": "2026-09-30T07:53:21.210Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17808199.15,
		"hash": "cc8b3ee041cca29348b8518fdcebf3b706635e3180ddd4a8a6c1e22357fd6d71"
	},
	{
		"id": "2944df9ffd01",
		"ts": "2026-09-30T07:53:21.431Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1045726.56,
		"hash": "2944df9ffd01afc584a29cde83cd2a53e42b5eb4352f075e266f0d08534196ea"
	},
	{
		"id": "eb06e0f5daa8",
		"ts": "2026-09-30T07:53:21.652Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 627888.3,
		"hash": "eb06e0f5daa820362e11fb205cfa81973c066e5fa365e0caa32b44cbfc680856"
	},
	{
		"id": "e513fb784cde",
		"ts": "2026-09-30T07:53:21.868Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1023128.13,
		"hash": "e513fb784cde26a90a85d5d4682843997f0d64d61f50e06ef0debeae21a2060e"
	},
	{
		"id": "d17a094facf0",
		"ts": "2026-09-30T01:00:40.549Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 160777842.54,
		"hash": "d17a094facf0d9a26dc3460a9db2b6e694462a30aa7ec57066485a187c52e65f"
	},
	{
		"id": "915af5f89d41",
		"ts": "2026-09-30T01:00:40.932Z",
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
		"liquidityUsd": 17123338.77,
		"hash": "915af5f89d415c7a66128d26455b61024482cf0f75ce58cba069723e4e493583"
	},
	{
		"id": "ef08bb98168f",
		"ts": "2026-09-30T01:00:41.144Z",
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
		"liquidityUsd": 872795.95,
		"hash": "ef08bb98168f8bca6110069d911eb26d9b4f78ad334edf158977deed038b6eff"
	},
	{
		"id": "7f1ace2ca43b",
		"ts": "2026-09-30T01:00:41.343Z",
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
		"liquidityUsd": 41922771.33,
		"hash": "7f1ace2ca43b3f39420f03e03f63113fb98405358285b31985af547612d23770"
	},
	{
		"id": "1fae72559291",
		"ts": "2026-09-30T01:00:41.546Z",
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
		"liquidityUsd": 4479335.68,
		"hash": "1fae72559291e5db0632c97c0cd32e6396d60572408b6faf4a148dd8ab3ed353"
	},
	{
		"id": "8c2a7b5a6930",
		"ts": "2026-09-30T01:00:41.893Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1301144.86,
		"hash": "8c2a7b5a69300b51a555beb4ad61558eb584d716b031f607ec41e1786d1da4aa"
	},
	{
		"id": "f0f2a1a27ed7",
		"ts": "2026-09-30T01:00:42.089Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41922771.33,
		"hash": "f0f2a1a27ed7ccf5403a688e10b4842a0cbbee5c91a4283296cbfa8bc1d9688a"
	},
	{
		"id": "44cc83b626cb",
		"ts": "2026-09-30T01:00:42.284Z",
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
		"liquidityUsd": 665569.31,
		"hash": "44cc83b626cb1104b65d46925aa927ab774fcd5b40891e87853cc44830e9a13c"
	},
	{
		"id": "5a485fcd1e4a",
		"ts": "2026-09-30T01:00:42.501Z",
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
		"liquidityUsd": 1830440.67,
		"hash": "5a485fcd1e4ac5e2e91efac12e62e35a92132ac7aff9a63cca59bb01a0497059"
	},
	{
		"id": "fcef7bbf395e",
		"ts": "2026-09-30T01:00:42.704Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3964544.01,
		"hash": "fcef7bbf395e5a5423d709d7502ded3221e958e84e2a7359717375ed0868af24"
	},
	{
		"id": "fa5add0f24d8",
		"ts": "2026-09-30T01:00:42.895Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 210270.68,
		"hash": "fa5add0f24d88bd5dadafb4ef6ad40dbe533ecbac83f22fcef226ed46d952107"
	},
	{
		"id": "93f148cd14b8",
		"ts": "2026-09-30T01:00:43.172Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 272526.96,
		"hash": "93f148cd14b85b56bea8fe2baab8903bc48c5d56e11dcd19b5292f1920a0c096"
	},
	{
		"id": "83c8c6dcbf28",
		"ts": "2026-09-30T01:00:43.376Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1590353.45,
		"hash": "83c8c6dcbf2813641ce7f17f1010d67cc17de906ab54a48dc576e17f8edc8964"
	},
	{
		"id": "7097ebf90feb",
		"ts": "2026-09-30T01:00:43.575Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 528131.48,
		"hash": "7097ebf90feb25c54de0cb8c27513c0956bbc85b493b4be16948a00e0af6f4ae"
	},
	{
		"id": "f285bd877bc2",
		"ts": "2026-09-30T01:00:43.796Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 223234.93,
		"hash": "f285bd877bc2e1d0ba00fee3fea404a43cf9e88579a196942f6823a84e023b55"
	},
	{
		"id": "91c0772f39c6",
		"ts": "2026-09-30T01:00:43.990Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2767127.56,
		"hash": "91c0772f39c6731b2f5f0a1aa0447381602d1ede235bfc71cc6212e497e142ce"
	},
	{
		"id": "1c0a005e7cf1",
		"ts": "2026-09-30T01:00:44.194Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1557628.72,
		"hash": "1c0a005e7cf17e6d1cfbaf5a8767f9fcff804bc0382e38cdf8dc799ea0848868"
	},
	{
		"id": "6b1bca61a309",
		"ts": "2026-09-30T01:00:44.382Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 641924.72,
		"hash": "6b1bca61a3092ff9b1d2fa466b4bf015f43a62e2abba969118ef1899fe1b899e"
	},
	{
		"id": "445558adcedf",
		"ts": "2026-09-30T01:00:44.577Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17816294.16,
		"hash": "445558adcedf9b8d5531459dae6cdf51b3250f2f71c58064eec4876338bb3442"
	},
	{
		"id": "bb4c3901c1ae",
		"ts": "2026-09-29T21:48:05.031Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 161312626.51,
		"hash": "bb4c3901c1ae5813f3a1ddd5b9e6112b74783ebbece5c19d4b9548b6170b2408"
	},
	{
		"id": "40d74a0d3676",
		"ts": "2026-09-29T21:48:05.279Z",
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
		"liquidityUsd": 14219999.9,
		"hash": "40d74a0d3676125a03863a7f6ab4e61620243b28c05be6954f421e1610bc831c"
	},
	{
		"id": "543ad60761b4",
		"ts": "2026-09-29T21:48:05.495Z",
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
		"liquidityUsd": 874819.84,
		"hash": "543ad60761b4119f07d06b9790a7ecc94bbd21db08ae87f24b961bb3678603a3"
	},
	{
		"id": "6e6378d64de7",
		"ts": "2026-09-29T21:48:05.869Z",
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
		"liquidityUsd": 41913637.22,
		"hash": "6e6378d64de7cf602909af34353d424331eee16de6e7ed0bf6ea312275a1b8b4"
	},
	{
		"id": "d37c4d0c7834",
		"ts": "2026-09-29T21:48:06.086Z",
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
		"liquidityUsd": 4496511.88,
		"hash": "d37c4d0c7834583e18d093bcba92605f3bd246069f435075dc147449a43c7443"
	},
	{
		"id": "cb7d4a83960e",
		"ts": "2026-09-29T21:48:06.306Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1301144.86,
		"hash": "cb7d4a83960e7354ca637f98ee710c7c039714995740e52da5b177035c0daa72"
	},
	{
		"id": "003e9d2004e3",
		"ts": "2026-09-29T21:48:06.524Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41913637.22,
		"hash": "003e9d2004e37e8a5cd0741edaa2aac184e9c4a62abfb32d0646c3c4959a03b5"
	},
	{
		"id": "377c32d0b111",
		"ts": "2026-09-29T21:48:06.743Z",
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
		"liquidityUsd": 666563.86,
		"hash": "377c32d0b111f1d1633fce745ed277fa2fdc48fa741b6d39f992a3f3e9f74e98"
	},
	{
		"id": "98e28035f80c",
		"ts": "2026-09-29T21:48:06.968Z",
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
		"liquidityUsd": 1850239.14,
		"hash": "98e28035f80cb449660b887738548d6de6106fb1f41b0b5182c4b3b57216688c"
	},
	{
		"id": "84bd68d2de26",
		"ts": "2026-09-29T21:48:07.186Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4540590.82,
		"hash": "84bd68d2de26e7cb60978237dabee208d81d99843a182147b285f6e255731a9a"
	},
	{
		"id": "aae83516cd49",
		"ts": "2026-09-29T21:48:07.388Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 234705.82,
		"hash": "aae83516cd49dd9724c632ca5e492bd1246e137ce832c9109bc81020306fcc3e"
	},
	{
		"id": "6072ee9e7933",
		"ts": "2026-09-29T21:48:07.596Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 308220.14,
		"hash": "6072ee9e793383a194faf0c1f791c25e05fd118c66bd6c87fbf7a8aa06e0dbc0"
	},
	{
		"id": "f2f2b47d52ac",
		"ts": "2026-09-29T21:48:07.798Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1624306.53,
		"hash": "f2f2b47d52acac941eeb09754608fd9489a3f5736bf7418cd7fdc10a85e6e7c2"
	},
	{
		"id": "c8d2c45c6892",
		"ts": "2026-09-29T21:48:08.000Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 583234.6,
		"hash": "c8d2c45c68921903071dd07477499eeba89a9ed7f6a0d84bc4342e5e098b7144"
	},
	{
		"id": "901ce0e16d47",
		"ts": "2026-09-29T21:48:08.209Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2780319.73,
		"hash": "901ce0e16d472859bb9c94f9754c33546e02e06d57a96e1a014b77aa2b534533"
	},
	{
		"id": "2864bf27e6d5",
		"ts": "2026-09-29T21:48:08.425Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 222849.94,
		"hash": "2864bf27e6d5212211a7877f301c9cb86af8ada5a65bc36d726c5a7a57ae925e"
	},
	{
		"id": "c3d5580c1485",
		"ts": "2026-09-29T21:48:08.627Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17848676.07,
		"hash": "c3d5580c148589c8a16b881427a3f2ee2d1708175ef8e1d5de21653fdd1bb663"
	},
	{
		"id": "a49c86e89824",
		"ts": "2026-09-29T21:48:08.830Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1555765.4,
		"hash": "a49c86e898247689f702bc5ec92cc623bdd92f8482912144d18e17798fdbe11b"
	},
	{
		"id": "6d47ae5d1be4",
		"ts": "2026-09-29T21:48:09.033Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 594668,
		"hash": "6d47ae5d1be4f6a72ecd56864b3d5edebdd7ee76d4de3870a2a552c1d9737a4f"
	},
	{
		"id": "4e368e5ea529",
		"ts": "2026-09-29T17:32:30.374Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 160798555.14,
		"hash": "4e368e5ea529e878f97ccee2a58a23c7cb4dfb57b6ccec00505143a8fcacd2a2"
	},
	{
		"id": "861c0438eeca",
		"ts": "2026-09-29T17:32:30.642Z",
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
		"liquidityUsd": 17272739.04,
		"hash": "861c0438eeca09ef7f8a93ac1537ae1e88705621664942f8bccd1bbf502fb490"
	},
	{
		"id": "576d077674b3",
		"ts": "2026-09-29T17:32:30.920Z",
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
		"liquidityUsd": 870402.66,
		"hash": "576d077674b30d11ae458ad355f477f4bf7a8729b1e0add02364c17326548061"
	},
	{
		"id": "80c4422ac61d",
		"ts": "2026-09-29T17:32:31.197Z",
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
		"liquidityUsd": 41460548.41,
		"hash": "80c4422ac61dc33cc6ea6dad55f0d6aeea92bf97f9372fba584165e7146b1176"
	},
	{
		"id": "b0cb6a33988e",
		"ts": "2026-09-29T17:32:31.490Z",
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
		"liquidityUsd": 4573389.73,
		"hash": "b0cb6a33988e5e7b8993f932c62be77ecbdcb26e6df891b736f7f0e62ca78f5e"
	},
	{
		"id": "d9e0a5956dd6",
		"ts": "2026-09-29T17:32:31.782Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1296370.7,
		"hash": "d9e0a5956dd696268962d9d6b1ab7cc6810c7ec0d577430e621b468f3f75aac5"
	},
	{
		"id": "e6df400c776f",
		"ts": "2026-09-29T17:32:32.060Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41460548.41,
		"hash": "e6df400c776f411758f8e120df9f1014cca07f614f5a026034c49ce36870a2ca"
	},
	{
		"id": "f8a5c6250db8",
		"ts": "2026-09-29T17:32:32.350Z",
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
		"liquidityUsd": 653877.81,
		"hash": "f8a5c6250db8e01897c2e9b421fa46cc66828fd77636f23f46cefaf49639dad7"
	},
	{
		"id": "4808efad752c",
		"ts": "2026-09-29T17:32:32.610Z",
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
		"liquidityUsd": 1804320.46,
		"hash": "4808efad752c85b7443a76ba93a11e04a0d7fa02b2eddcb1092eb9f678485678"
	},
	{
		"id": "e0ae74a04d08",
		"ts": "2026-09-29T17:32:32.891Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4351713.53,
		"hash": "e0ae74a04d08eff405ff2f0fe27de2395e05a447640e70cb680b5718bae74046"
	},
	{
		"id": "b84c6f9f9e7a",
		"ts": "2026-09-29T17:32:33.165Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 349894.43,
		"hash": "b84c6f9f9e7afcd156acd57d85757105f9228c55b8ab5c8c5bb49bfac5ec3776"
	},
	{
		"id": "36b3339adab1",
		"ts": "2026-09-29T17:32:33.432Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 243345.59,
		"hash": "36b3339adab1e13ea381218a3cd12fbaeadff09ba7ce475f06f1b45597c9b3b3"
	},
	{
		"id": "de3e98e8c60b",
		"ts": "2026-09-29T17:32:33.698Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 637831.16,
		"hash": "de3e98e8c60bf2b443013abfc0f6d0a5b4c688d0bd39badbb15dab7dcc0864e4"
	},
	{
		"id": "37f7abceb88e",
		"ts": "2026-09-29T17:32:33.965Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1600572.19,
		"hash": "37f7abceb88e981d1e887690cf2df07742b4827b6bba9d7faf415cb185ebdc23"
	},
	{
		"id": "44e280514c63",
		"ts": "2026-09-29T17:32:34.237Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2782882.35,
		"hash": "44e280514c63b80245e3c1ccf84965864b1d4f786cdddcc25d9dd2f39b2acbfe"
	},
	{
		"id": "23fb8fa8cfeb",
		"ts": "2026-09-29T17:32:34.489Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 224444.69,
		"hash": "23fb8fa8cfeb62508da12d5ffa9178ffcf0ba36622db89fcc18f51b0bf1f9375"
	},
	{
		"id": "bd73b320e378",
		"ts": "2026-09-29T17:32:34.752Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17719599.99,
		"hash": "bd73b320e3780e89ec8947e6e304eed04b07690c6b35c86a42ad295b2aea736c"
	},
	{
		"id": "ea9c772846b9",
		"ts": "2026-09-29T17:32:35.002Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1546104.1,
		"hash": "ea9c772846b97473df8ad15cd1b8086844826b81a3bbe1aa121ea4d58aaf48c4"
	},
	{
		"id": "a894b7d7c2f6",
		"ts": "2026-09-29T17:32:35.277Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 843221.08,
		"hash": "a894b7d7c2f6423a65d23e960cb79135ad2e168b87b8c0a8755090de9489a609"
	},
	{
		"id": "9c60bc6db577",
		"ts": "2026-09-29T11:02:13.482Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 158106717.16,
		"hash": "9c60bc6db577c343379fe25cb0ff3f2e4e6628b51fc817aa1bc53a819cc06f91"
	},
	{
		"id": "6599987afd14",
		"ts": "2026-09-29T11:02:13.949Z",
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
		"liquidityUsd": 17710576.26,
		"hash": "6599987afd140df4c07333cb355794cb5077743d477a857c34183a58d821206a"
	},
	{
		"id": "d463742cdcb1",
		"ts": "2026-09-29T11:02:14.199Z",
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
		"liquidityUsd": 885179.61,
		"hash": "d463742cdcb1e218a5fbf0fe0bffd516048470c1fdf190dba756b5f9b713f45c"
	},
	{
		"id": "d810afe7b3ac",
		"ts": "2026-09-29T11:02:14.449Z",
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
		"liquidityUsd": 42248771.82,
		"hash": "d810afe7b3acbdd1ff5b3de494e3c4ba03bd217f68625205c22a29cbf1dd3db3"
	},
	{
		"id": "3da4c9578548",
		"ts": "2026-09-29T11:02:14.699Z",
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
		"liquidityUsd": 4660485.06,
		"hash": "3da4c95785485d787b12ecc99ada537ce0456ed7715a9dedf43234acc660dc9d"
	},
	{
		"id": "0a537c8f83dc",
		"ts": "2026-09-29T11:02:14.944Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1308146.97,
		"hash": "0a537c8f83dcd848dc2fb836f690f7237b63780b9772e82b27a0001f07d43983"
	},
	{
		"id": "eaacc4c27d75",
		"ts": "2026-09-29T11:02:15.201Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42248771.82,
		"hash": "eaacc4c27d7582b59aa7ee4ad81ceafa99ecf6dc6132c4781d9d8122df7215e1"
	},
	{
		"id": "3e6c7ddf75e1",
		"ts": "2026-09-29T11:02:15.449Z",
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
		"liquidityUsd": 694327,
		"hash": "3e6c7ddf75e1cf072e028088a48e5ccc1fd06df6ad8c2d1916f3bbdb152fba8f"
	},
	{
		"id": "c3f76c6e3745",
		"ts": "2026-09-29T11:02:15.704Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1802539.14,
		"hash": "c3f76c6e374579cee762b3ea9fd1c842c51866a76dcf06391b3288769591f2cc"
	},
	{
		"id": "a29abfa6ce87",
		"ts": "2026-09-29T11:02:15.962Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4262989.68,
		"hash": "a29abfa6ce87fa68438666c711c91c616149a3aaf076be720cdfa6bcb5c2f31d"
	},
	{
		"id": "c9bf46e6f030",
		"ts": "2026-09-29T11:02:16.194Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 435669.31,
		"hash": "c9bf46e6f030b8c1878ab8b60f1b38ed0b915a211bb0ffab679810dcb7ed1949"
	},
	{
		"id": "58b9ef7ec016",
		"ts": "2026-09-29T11:02:16.482Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2800156.8,
		"hash": "58b9ef7ec0166a9dc6df5eecad6e086f43c335bb5ccc004deb00b9d3e48b10be"
	},
	{
		"id": "f56dd55c1011",
		"ts": "2026-09-29T11:02:16.711Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 228164.3,
		"hash": "f56dd55c10113bef99826fe9c490055fc6b0348a5331da7d2d76deeda1d9bf8e"
	},
	{
		"id": "5e50224c3cb3",
		"ts": "2026-09-29T11:02:17.068Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1666400.78,
		"hash": "5e50224c3cb380205cbc2b6529111e5f8023f46c7671e835f0ae4e96659a884c"
	},
	{
		"id": "8bd9f893599a",
		"ts": "2026-09-29T11:02:17.291Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 840889.74,
		"hash": "8bd9f893599a868a8af881789abcd7ddbace7553855c1f0c2ecde3413b559a28"
	},
	{
		"id": "0c926d468776",
		"ts": "2026-09-29T11:02:17.523Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18284956.78,
		"hash": "0c926d46877614f39bd2875413fcc40febef12d53e1b4b9c720d262a33084d6c"
	},
	{
		"id": "865c2de17ec4",
		"ts": "2026-09-29T11:02:17.752Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 222062.37,
		"hash": "865c2de17ec47d1b022816c5c719f745e61dc5b0c707a8f22020570bc49034b2"
	},
	{
		"id": "38a5ff05275f",
		"ts": "2026-09-29T11:02:17.975Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1563146.29,
		"hash": "38a5ff05275faf8b2ae2863ef4cd35d626cf2e0effcc9bcfd4e53b5acc3a7dec"
	},
	{
		"id": "d6159df4b258",
		"ts": "2026-09-29T11:02:18.206Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 740106.38,
		"hash": "d6159df4b258f296f2e2b70f73c5a558b190d98c30d0353a471bc5a6a6c1e4b9"
	},
	{
		"id": "ad175238870e",
		"ts": "2026-09-29T04:00:31.836Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 156225005.65,
		"hash": "ad175238870ec76c1c23671c8c83891ff7f5cf48d5777da7563cb66bf2fb1379"
	},
	{
		"id": "bf1ed66dabca",
		"ts": "2026-09-29T04:00:32.645Z",
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
		"liquidityUsd": 17078002.77,
		"hash": "bf1ed66dabca3a2fc6315008f79931a641d83bbdef84d5162ddbe71ffaa58ad6"
	},
	{
		"id": "f517e89a1072",
		"ts": "2026-09-29T04:00:32.912Z",
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
		"liquidityUsd": 875689.14,
		"hash": "f517e89a1072da294ddd71df8bbc3e294305bf0ea65cebdca38d3712abbd1fd4"
	},
	{
		"id": "ad73deb37368",
		"ts": "2026-09-29T04:00:33.171Z",
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
		"liquidityUsd": 42053252.24,
		"hash": "ad73deb37368509e02df29d90f923f18f107dc559c5478ad6d27b4c0d331b6fb"
	},
	{
		"id": "4af70472928d",
		"ts": "2026-09-29T04:00:33.417Z",
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
		"liquidityUsd": 4556252.95,
		"hash": "4af70472928dde3f2cd9d1ee5094945ee3c9658622bdbac8f2ac85064323d3bd"
	},
	{
		"id": "607ed86a278c",
		"ts": "2026-09-29T04:00:33.668Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1279090.9,
		"hash": "607ed86a278cb6cd36a17c91a6855ddbb4278f3909be2a2b773ae233ac0b43b1"
	},
	{
		"id": "e00f56d38391",
		"ts": "2026-09-29T04:00:33.906Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42053252.24,
		"hash": "e00f56d383915c69e2070631b11265a344d78d09464182f0da2aa960b09bd74a"
	},
	{
		"id": "786a65fd3ae0",
		"ts": "2026-09-29T04:00:34.176Z",
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
		"liquidityUsd": 1220306.08,
		"hash": "786a65fd3ae060b56117ca02b0383a0b52bcf33cfb8af5d665c0ff08bcd3627c"
	},
	{
		"id": "92bb9e7316a1",
		"ts": "2026-09-29T04:00:34.417Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1803351.36,
		"hash": "92bb9e7316a12bb5b56ef9f0eb767df8b8efd45c795948961dd2b11893e7fc5d"
	},
	{
		"id": "fb103320e9c1",
		"ts": "2026-09-29T04:00:34.736Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 415068.89,
		"hash": "fb103320e9c1a9b290f418ee42f16be240754f7f70943ba89ffe1e081d2fda7a"
	},
	{
		"id": "42331516027c",
		"ts": "2026-09-29T04:00:34.959Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4138403.41,
		"hash": "42331516027c6b60e2a98cd3d512e0b480db925d254b7997ca5734e6379cbaa0"
	},
	{
		"id": "cf6af8ce3178",
		"ts": "2026-09-29T04:00:35.182Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2740243.19,
		"hash": "cf6af8ce3178b0da83dbe9fa9eff3a8ebf292c678f4670c704f2f4b0a22345f0"
	},
	{
		"id": "eecfb4bbb2a4",
		"ts": "2026-09-29T04:00:35.510Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1542410.57,
		"hash": "eecfb4bbb2a451394f32047dc49ce251c2cc11456c571887e5495fa45b9805db"
	},
	{
		"id": "a2a096582c9c",
		"ts": "2026-09-29T04:00:35.733Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1638361.26,
		"hash": "a2a096582c9c1d9157aedf21d154554252414d4534addc1aec0de84dea9284a9"
	},
	{
		"id": "5dbe76fae1db",
		"ts": "2026-09-29T04:00:35.955Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 849806.05,
		"hash": "5dbe76fae1db86e3def35d0d674273e2db2d49db7d9b3563f258fdf1831e893e"
	},
	{
		"id": "26ae6c307e46",
		"ts": "2026-09-29T04:00:36.178Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 407744.32,
		"hash": "26ae6c307e46189c7d14766db0e5952725c532ec348a9e48388324c9b31b5b01"
	},
	{
		"id": "412781c0847b",
		"ts": "2026-09-29T04:00:36.408Z",
		"symbol": "SPIKE",
		"token": "0xb20000000000000000000070F6c1A66D7C1e4d01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 235831.63,
		"hash": "412781c0847b3d07273b07c00e4eca5afc30ef12421e1a90a96127854de18115"
	},
	{
		"id": "a2018ee9d62f",
		"ts": "2026-09-29T04:00:36.630Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 17653802.37,
		"hash": "a2018ee9d62f63c02acd9f98f02637c38629de47c1fb8a5908f0e81ab3ab99a7"
	},
	{
		"id": "71fd2134df33",
		"ts": "2026-09-29T04:00:36.853Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 735389.68,
		"hash": "71fd2134df3340107ca7f28fffa8e4166c19fb3958389bd6d354b89928effb77"
	},
	{
		"id": "e922e2b34c20",
		"ts": "2026-09-28T23:39:38.236Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157068980.54,
		"hash": "e922e2b34c20d189242ba6fc9dae93d83fb9c6984446e239eb55719ae312b687"
	},
	{
		"id": "2a622b077ca5",
		"ts": "2026-09-28T23:39:38.467Z",
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
		"liquidityUsd": 13554093.72,
		"hash": "2a622b077ca591710c53cb5e557e818c4d1900a64361f51d4e1490d3cef0940a"
	},
	{
		"id": "92ee1c4574e7",
		"ts": "2026-09-28T23:39:38.690Z",
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
		"liquidityUsd": 883897.12,
		"hash": "92ee1c4574e7b1fb6ce610f87412cbc4a7e48e5deb48e8f2ee2086c872267100"
	},
	{
		"id": "3a2a180aaaf1",
		"ts": "2026-09-28T23:39:38.883Z",
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
		"liquidityUsd": 41685558.52,
		"hash": "3a2a180aaaf16d88b1c1c8d2fa6089276f101eeac3d5c91c44ade53841102db9"
	},
	{
		"id": "517c02234752",
		"ts": "2026-09-28T23:39:39.098Z",
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
		"liquidityUsd": 4657545.33,
		"hash": "517c022347524caf68c68c782ce72f7548d6d61ba630d27fde6f76bbcfe3f129"
	},
	{
		"id": "0d8f4e14fe45",
		"ts": "2026-09-28T23:39:39.313Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1291836.4,
		"hash": "0d8f4e14fe45eae5e189787bcdbab1cf5b59c895f86f3eea89e6a825c29807a5"
	},
	{
		"id": "5779154fc393",
		"ts": "2026-09-28T23:39:39.537Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41685558.52,
		"hash": "5779154fc393af54b15a446740fcd318c9fd609cc0738f4d423f636b05a1e8d3"
	},
	{
		"id": "44a78134c54a",
		"ts": "2026-09-28T23:39:39.737Z",
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
		"liquidityUsd": 1209550.36,
		"hash": "44a78134c54acb08f0042898128706d3f6607046576867fddf9f1ffd39f56467"
	},
	{
		"id": "07e34a5c767f",
		"ts": "2026-09-28T23:39:39.953Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1732985.23,
		"hash": "07e34a5c767fab18d35fa2f2f2a26837bc0b1de2878f9f81f635fe3e7dfa7cbd"
	},
	{
		"id": "e802e55c84bb",
		"ts": "2026-09-28T23:39:40.149Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4011578.26,
		"hash": "e802e55c84bb0e2ae5246a6bfb3db168c5da6cb0e070277323b831c30204c4c7"
	},
	{
		"id": "a60a009edd1b",
		"ts": "2026-09-28T23:39:40.331Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2771751.8,
		"hash": "a60a009edd1b3c4623811196f4270275aa842008f6dd83e31c7b15e7476b8c73"
	},
	{
		"id": "caf710f53735",
		"ts": "2026-09-28T23:39:40.509Z",
		"symbol": "boar",
		"token": "0x0cbf291Ba052174879d90bf781dF1A5F2BC5Bb07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 332199.89,
		"hash": "caf710f53735deb12c026608e8c3cabca520a497c0f1c215e0c2169ea44c9b30"
	},
	{
		"id": "f4bdc99f6d01",
		"ts": "2026-09-28T23:39:40.693Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1636805.77,
		"hash": "f4bdc99f6d01e1b1e80a27dbae59eb4d41fefdf5dfbb72c88cd3c90a3207d5f8"
	},
	{
		"id": "09e24536d700",
		"ts": "2026-09-28T23:39:40.886Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 435522.27,
		"hash": "09e24536d7005fe623abf0b599f124132bdc0b005f29b4ed29cc131179bff087"
	},
	{
		"id": "07521795d63a",
		"ts": "2026-09-28T23:39:41.085Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1555920.12,
		"hash": "07521795d63adc5c42dc7eed54b946a2200ef88e89cbd71480af1b2c5a1ecf71"
	},
	{
		"id": "8215448eb8b1",
		"ts": "2026-09-28T23:39:41.262Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 843978,
		"hash": "8215448eb8b1e395319df369d622201091823ec1b434d7ad5bf2ef3dac90df3f"
	},
	{
		"id": "75338c39fa43",
		"ts": "2026-09-28T23:39:41.443Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 18082968.5,
		"hash": "75338c39fa43880a299992ff85169ad581ec7b002f1deb9dfad97052891d8822"
	},
	{
		"id": "f55407a83923",
		"ts": "2026-09-28T23:39:41.619Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 838413.55,
		"hash": "f55407a8392366054432b88c3ff2514d6b3311af758eb21542f6e72a66ec6e85"
	},
	{
		"id": "f6582a39fd2b",
		"ts": "2026-09-28T23:39:41.824Z",
		"symbol": "EDGE",
		"token": "0xED6E000dEF95780fb89734c07EE2ce9F6dcAf110",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 691160.78,
		"hash": "f6582a39fd2bac5babfa10c02d2e1bdbb705775e9f71f18df0f59588ca66e96a"
	},
	{
		"id": "974ea486e71a",
		"ts": "2026-09-28T18:23:37.730Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 157501768.89,
		"hash": "974ea486e71a93f8289f528017d5a9270239c58c67db7cb8a1cb06131c9e5149"
	},
	{
		"id": "e7500d23dbc6",
		"ts": "2026-09-28T18:23:38.579Z",
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
		"liquidityUsd": 13587664.21,
		"hash": "e7500d23dbc67359a8e19d8992a7e792cabe3c4a006d15b5a559c87d7cd124af"
	},
	{
		"id": "12eacce44149",
		"ts": "2026-09-28T18:23:39.061Z",
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
		"liquidityUsd": 886516.56,
		"hash": "12eacce441499b859ea55365921b11664d0714c96755716f6de2ed47c6ef28cd"
	},
	{
		"id": "d61f68c870c7",
		"ts": "2026-09-28T18:23:39.520Z",
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
		"liquidityUsd": 41570338.73,
		"hash": "d61f68c870c7f1772dcdc2ea5abc48e5db33b60ee0f1c8571e95506f4643fb0c"
	},
	{
		"id": "b65f796fc331",
		"ts": "2026-09-28T18:23:39.980Z",
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
		"liquidityUsd": 4635623.7,
		"hash": "b65f796fc3314e934d4070505069a822f082706aef4a54ad42d0e3c49f99cff1"
	},
	{
		"id": "b046823463b2",
		"ts": "2026-09-28T18:23:40.270Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1306539.61,
		"hash": "b046823463b2542d3759ad1badbea04620aa20552e6bb8e9698dee4277605fad"
	},
	{
		"id": "9df26c59bd01",
		"ts": "2026-09-28T18:23:40.536Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41570338.73,
		"hash": "9df26c59bd01e959ce79ca8ca11f9276c05b91b93699697cd8007989a3cc1ed7"
	},
	{
		"id": "5a9b5d2faf7c",
		"ts": "2026-09-28T18:23:40.995Z",
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
		"liquidityUsd": 1308755.68,
		"hash": "5a9b5d2faf7c366e1bf265f4e6420782452d97c7b90ddfda1d42920ca78dd790"
	},
	{
		"id": "a623af81be67",
		"ts": "2026-09-28T18:23:41.262Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 2816479.73,
		"hash": "a623af81be6734cedb836c7caa70a355ad49bacae20848854c3b30f6a2b601fb"
	},
	{
		"id": "644206e10ce7",
		"ts": "2026-09-28T18:23:41.534Z",
		"symbol": "xdp",
		"token": "0x07b3D902783c3C12b077508c3B5c00113d1291D0",
		"score": 63,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.26,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1635711.03,
		"hash": "644206e10ce7a9d6778163c35aaf5bbd4a72731befd010d49689f7288a3e7e94"
	}
]
