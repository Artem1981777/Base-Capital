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
	"updatedAt": "2026-10-15T17:58:36.199Z",
	"tokensScored": 20290,
	"verdictsIssued": 20290,
	"safe": 17282,
	"risky": 1445,
	"likelyRug": 1563,
	"ticks": 1148
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "f13d2b043212",
		"ts": "2026-10-15T17:58:32.466Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146642909.49,
		"hash": "f13d2b04321279526f201f38a1171dfc7d3c8998281049bcb2add69e7082ce93"
	},
	{
		"id": "c66b8b631b62",
		"ts": "2026-10-15T17:58:32.722Z",
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
		"liquidityUsd": 18429056.48,
		"hash": "c66b8b631b6219ae94399d08a7f89a9090053365732b936cd9c342a6c24db6f4"
	},
	{
		"id": "85c4b29c4ba0",
		"ts": "2026-10-15T17:58:32.969Z",
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
		"liquidityUsd": 778133.59,
		"hash": "85c4b29c4ba0a054db5ac1be87dd340cfd2fa21a319189ba581c56bd2ac0be65"
	},
	{
		"id": "dda58194667f",
		"ts": "2026-10-15T17:58:33.188Z",
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
		"liquidityUsd": 45189762.68,
		"hash": "dda58194667fff15bf29b988bd49832a1d08ba2a81ff1213dffbcd85bb531200"
	},
	{
		"id": "61a4158aea6d",
		"ts": "2026-10-15T17:58:33.424Z",
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
		"liquidityUsd": 4725518.14,
		"hash": "61a4158aea6d87305a21d086e2a33a05ecf2ea6b6f7ec5a1c7792be2f6c18137"
	},
	{
		"id": "d087a0cb3a64",
		"ts": "2026-10-15T17:58:33.639Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1169763.78,
		"hash": "d087a0cb3a642befaec07227806c41046d3b86d4ec54b24e17fb79ef36efbc6a"
	},
	{
		"id": "8d244ab6e9b3",
		"ts": "2026-10-15T17:58:33.853Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140025.66,
		"hash": "8d244ab6e9b3869b670d7cbe44f9fbef5c8e4bc4aff4a6452c272b9e64486de7"
	},
	{
		"id": "5406196cfe2c",
		"ts": "2026-10-15T17:58:34.057Z",
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
		"liquidityUsd": 2553213.84,
		"hash": "5406196cfe2c45166a00752c9e62251bef70985b4c98afb2e16ea52897ca5166"
	},
	{
		"id": "ba8640d7f671",
		"ts": "2026-10-15T17:58:34.360Z",
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
		"liquidityUsd": 1788912.4,
		"hash": "ba8640d7f671c1f0ee3359330f59430a79bb2a3d103953d9cf7d93cf9183156f"
	},
	{
		"id": "d89d19af6cf7",
		"ts": "2026-10-15T17:58:34.583Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2975854.26,
		"hash": "d89d19af6cf7f1a225a160a6f3bc215cc4e2a101d9e3b26ee8af297b21c96eee"
	},
	{
		"id": "510102afeb9c",
		"ts": "2026-10-15T17:58:34.783Z",
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
		"liquidityUsd": 16860529.52,
		"hash": "510102afeb9c0c1c9364f4bad4a74dab5d1cd990018238bc4d25e9602ee59a13"
	},
	{
		"id": "49a1208063d6",
		"ts": "2026-10-15T17:58:34.980Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1386084.01,
		"hash": "49a1208063d68dc3c24d1e59575a9c3cfd92bb21d9d72e47c1e83bed28d74803"
	},
	{
		"id": "9e8c17724247",
		"ts": "2026-10-15T17:58:35.202Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 224860.04,
		"hash": "9e8c177242479690c95269b1bfcbeff0d3f308762bff376157ec82d03b2b1a9e"
	},
	{
		"id": "2101174bfe1e",
		"ts": "2026-10-15T17:58:35.408Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2079659.2,
		"hash": "2101174bfe1ec0996c5c940f491538048d4baf0d0c0a4617b78df78540c4dd70"
	},
	{
		"id": "5da858f62061",
		"ts": "2026-10-15T17:58:35.604Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3990223.18,
		"hash": "5da858f62061ec67ed03a20e78a4a14f07753b6f309645117767fe5fa1519f66"
	},
	{
		"id": "105b03d841ec",
		"ts": "2026-10-15T17:58:35.819Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1114634.81,
		"hash": "105b03d841ecd0c0c06d80499c6378db445db664a9f30ca03fa2606ad981d6f4"
	},
	{
		"id": "ecbf70e234d9",
		"ts": "2026-10-15T17:58:36.015Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1109477.62,
		"hash": "ecbf70e234d988004edfb600f7ec8a5e560f9484f4a365a7558a82378fc1b92a"
	},
	{
		"id": "fa48601f2c19",
		"ts": "2026-10-15T17:58:36.199Z",
		"symbol": "Paper",
		"token": "0x503fdcc939Ed5c10aCfB495209Fa9d36c5988B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10199551.62,
		"hash": "fa48601f2c191d8e3875dead1b697c1d5e34b84859f14ce63a41fa3492901910"
	},
	{
		"id": "f1c1d2e33dc3",
		"ts": "2026-10-15T13:53:55.432Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 141928861.62,
		"hash": "f1c1d2e33dc32a99918e0f700ce22885e5e49a68bf09be89ddf6390fd3aac977"
	},
	{
		"id": "ed88e5ce14a0",
		"ts": "2026-10-15T13:53:56.008Z",
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
		"liquidityUsd": 17667591.52,
		"hash": "ed88e5ce14a046c99de1c314b8435bc94415978829017b78515b124eb3292bc3"
	},
	{
		"id": "8c0c870818d2",
		"ts": "2026-10-15T13:53:56.246Z",
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
		"liquidityUsd": 755434.97,
		"hash": "8c0c870818d2d99ed29d77d8ebe74597ccf812218e5787b1f50128c61dbcab6f"
	},
	{
		"id": "17683797fc49",
		"ts": "2026-10-15T13:53:56.624Z",
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
		"liquidityUsd": 44044252,
		"hash": "17683797fc4929ac0876238af62c88a5678732fe500d4c43d540a91d932a85fe"
	},
	{
		"id": "b42192a2ffb6",
		"ts": "2026-10-15T13:53:56.851Z",
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
		"liquidityUsd": 4518449.7,
		"hash": "b42192a2ffb6f89b1a0a7fb1d2001add7f46f91024be91bed1cd6c713b7d7bdd"
	},
	{
		"id": "c6c9db0cff26",
		"ts": "2026-10-15T13:53:57.091Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1113509.88,
		"hash": "c6c9db0cff2601cd90a123127076d8b1cfb05df0b767a04e20bda7e63f1a5697"
	},
	{
		"id": "914dd1e1cefe",
		"ts": "2026-10-15T13:53:57.354Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140024.7,
		"hash": "914dd1e1cefe2a61ecdd84a282ca9a2effff175e3f09fa0b851b0efbcff25c57"
	},
	{
		"id": "f99c4d4a3ab0",
		"ts": "2026-10-15T13:53:57.615Z",
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
		"liquidityUsd": 2445235.33,
		"hash": "f99c4d4a3ab02b3788e593304c73a6fb431734568abc5ec743af5b1d98096a4f"
	},
	{
		"id": "5c2d2469dc00",
		"ts": "2026-10-15T13:53:57.946Z",
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
		"liquidityUsd": 1755598,
		"hash": "5c2d2469dc006d8cb989b45412e27e54ae7d06924722ea38658ad236d5f80738"
	},
	{
		"id": "2080033379af",
		"ts": "2026-10-15T13:53:58.188Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2770170.05,
		"hash": "2080033379afefcbbebd9d55f18dd7af3368cceefca4eaf127659f8d440f0860"
	},
	{
		"id": "436bfea66525",
		"ts": "2026-10-15T13:53:58.410Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1327719.39,
		"hash": "436bfea66525fa92592b855ca48d005301a862585d87c918df87f1cbe8399206"
	},
	{
		"id": "8895744871d6",
		"ts": "2026-10-15T13:53:58.623Z",
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
		"liquidityUsd": 15612019.88,
		"hash": "8895744871d64921e7ce32e49a074a032e3cda8ce0a98dbd628e8d4d71cfbe03"
	},
	{
		"id": "add063378294",
		"ts": "2026-10-15T13:53:58.846Z",
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
		"liquidityUsd": 296257.58,
		"hash": "add06337829426b3eeb79d39d5a55cba56bc69e41dd39e623b1914bbe831610d"
	},
	{
		"id": "5e939c3bcf37",
		"ts": "2026-10-15T13:53:59.083Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 175559.6,
		"hash": "5e939c3bcf37ea2d51028ea5fe4d7d12eb3049a0ef43de4574d73c1b1bdaae2f"
	},
	{
		"id": "e5e8a88b9c25",
		"ts": "2026-10-15T13:53:59.274Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1067801.62,
		"hash": "e5e8a88b9c258f4c346d5862a996237dea87c131d97371b06b1455c33407ae36"
	},
	{
		"id": "33946ffd751f",
		"ts": "2026-10-15T13:53:59.845Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1948933.99,
		"hash": "33946ffd751f5ba4ba20454eb9704df872963dea30ed57e904237371b93884ba"
	},
	{
		"id": "2bfbba5a9d14",
		"ts": "2026-10-15T13:54:00.064Z",
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
		"liquidityUsd": 1058667,
		"hash": "2bfbba5a9d14e84890c682973a82b79a5a5899dd48f6f869c0a5af2f114da4d6"
	},
	{
		"id": "014a2f7dea3a",
		"ts": "2026-10-15T13:54:00.285Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1104658.91,
		"hash": "014a2f7dea3a659dcf727b4562c1bd6f5f0216b307e29230d8db5408440bf0f7"
	},
	{
		"id": "988e96b3fec1",
		"ts": "2026-10-15T13:54:00.498Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 441981.37,
		"hash": "988e96b3fec1309435e8fc8e0137084c7bf23fc7ff84655bb01c53734302a91e"
	},
	{
		"id": "f766d283bb04",
		"ts": "2026-10-15T08:47:32.494Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 143693140.57,
		"hash": "f766d283bb04fd81e085c8d351735bda7939cbfc1a666b381fe46d2c35432b2c"
	},
	{
		"id": "409ec7903dd1",
		"ts": "2026-10-15T08:47:32.752Z",
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
		"liquidityUsd": 17855259.11,
		"hash": "409ec7903dd17f693d717c90fa985de1b775bdc65056bb5ada757f7064548ae8"
	},
	{
		"id": "e3399b0eb775",
		"ts": "2026-10-15T08:47:33.205Z",
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
		"liquidityUsd": 755434.97,
		"hash": "e3399b0eb775188aefefbf678b5cfd4dc22fe2e94920eaea65b1aadb2d17cfa4"
	},
	{
		"id": "7ccb160ebc42",
		"ts": "2026-10-15T08:47:33.450Z",
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
		"liquidityUsd": 44121524.54,
		"hash": "7ccb160ebc42759906cb3f1f1f7b3f572726f6fcb4f49ee2e32505c41baf2817"
	},
	{
		"id": "160afa581ab1",
		"ts": "2026-10-15T08:47:33.702Z",
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
		"liquidityUsd": 4364442.13,
		"hash": "160afa581ab15b05f90a7cd82a4f55e4e0debcffb4f82b104ee9298cefd03af7"
	},
	{
		"id": "62e473800a07",
		"ts": "2026-10-15T08:47:33.953Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1111381.98,
		"hash": "62e473800a078e1fef7b34da56b81673c5fb0e3de2968f09fc2de620a6fff57e"
	},
	{
		"id": "7a9de4d36cfe",
		"ts": "2026-10-15T08:47:34.229Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140018.41,
		"hash": "7a9de4d36cfec501927ff390bf4ffd08a0a27e3c79c0df63452db1b5f34cf543"
	},
	{
		"id": "27a42f94c85f",
		"ts": "2026-10-15T08:47:34.532Z",
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
		"liquidityUsd": 2475825.62,
		"hash": "27a42f94c85f601c80d9f081ecb21f3f1506c281a84ba92f3169d7ee3bbbdb43"
	},
	{
		"id": "ce382e27e083",
		"ts": "2026-10-15T08:47:34.797Z",
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
		"liquidityUsd": 1767974.59,
		"hash": "ce382e27e08312658aaafa653ea75299625227d8574c1c45334756e000f81b78"
	},
	{
		"id": "440aa29a4454",
		"ts": "2026-10-15T08:47:35.039Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2828644.65,
		"hash": "440aa29a4454c07a980fdb2ab37669bb898786af5b23a7634792749c83754f6a"
	},
	{
		"id": "15d1885387a1",
		"ts": "2026-10-15T08:47:35.258Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1328179.01,
		"hash": "15d1885387a1923fd246883d892c6dce2a8655b38f93eacac699314a381182e9"
	},
	{
		"id": "ceb9cd40f0de",
		"ts": "2026-10-15T08:47:35.480Z",
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
		"liquidityUsd": 15720679.86,
		"hash": "ceb9cd40f0deb19a88b2b82460bb1b2db3c19ac13372a83bae5747149edceb77"
	},
	{
		"id": "36b2993d7c9c",
		"ts": "2026-10-15T08:47:35.699Z",
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
		"liquidityUsd": 1080079.26,
		"hash": "36b2993d7c9c44ce1719ddf4127ce1698007bc889dd56b808f5194ea5654afb7"
	},
	{
		"id": "92824dd2e42e",
		"ts": "2026-10-15T08:47:35.920Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1057887.18,
		"hash": "92824dd2e42eaf8d26941d14b9bcf4fbda53a3c8083e71e89bbc970ac50d4e1d"
	},
	{
		"id": "9f114cd99854",
		"ts": "2026-10-15T08:47:36.138Z",
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
		"liquidityUsd": 301851,
		"hash": "9f114cd998542b41e466db0446fc52d2c3081757af6a2c3731b5f4f97d35e424"
	},
	{
		"id": "d14221ec4369",
		"ts": "2026-10-15T08:47:36.358Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1126152.76,
		"hash": "d14221ec4369d27887570d2f11f690786a4cb020e2755746f7750b73a56d3c65"
	},
	{
		"id": "056458f1fdb0",
		"ts": "2026-10-15T08:47:36.573Z",
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
		"liquidityUsd": 4275945.61,
		"hash": "056458f1fdb0cf381945e99bc4785ab5b8992aa286c54198ef3331adf9d22197"
	},
	{
		"id": "ab4b7d8cd6d9",
		"ts": "2026-10-15T08:47:36.791Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3885883.14,
		"hash": "ab4b7d8cd6d9c1a92406c983d55d74cee50363d98cc9f981f0d9b9680de269dc"
	},
	{
		"id": "7d468e8fcbda",
		"ts": "2026-10-15T08:47:37.010Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2020380.05,
		"hash": "7d468e8fcbdad641d48b5ad4989f6e08fd307165ed6dc39eb1d8c4ac9d8d8a17"
	},
	{
		"id": "505f224dfc6d",
		"ts": "2026-10-15T03:00:21.233Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 144992976.08,
		"hash": "505f224dfc6d064acb25be60abad5f9543bdf5aaf5100ec4826d5c065fff87dc"
	},
	{
		"id": "94a79ed18f60",
		"ts": "2026-10-15T03:00:21.890Z",
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
		"liquidityUsd": 17486965.44,
		"hash": "94a79ed18f60eccb76fd3fd04c5b6dd99a7a58f11b5d5b5bd42d5c9099380082"
	},
	{
		"id": "a0f67c6e87fb",
		"ts": "2026-10-15T03:00:22.135Z",
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
		"liquidityUsd": 759117.66,
		"hash": "a0f67c6e87fbcda038885611a1bf25b8d4a28fd4771e59c8b33bafe94c44926c"
	},
	{
		"id": "201139b0917f",
		"ts": "2026-10-15T03:00:22.593Z",
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
		"liquidityUsd": 44793831.34,
		"hash": "201139b0917fbbb3adc98809ad5437b1b47198c64accd1c0856bc8e2a04c8085"
	},
	{
		"id": "5ff8dddf9f28",
		"ts": "2026-10-15T03:00:22.838Z",
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
		"liquidityUsd": 4468222.48,
		"hash": "5ff8dddf9f289e843a126039ad46206530f6b70d441ba9658188c12ada1bc402"
	},
	{
		"id": "adf049209a36",
		"ts": "2026-10-15T03:00:23.088Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1126992.63,
		"hash": "adf049209a362676b1f7828abeb945d432864068fef6ca5c57ebd39dd87fb93a"
	},
	{
		"id": "0d6228612e42",
		"ts": "2026-10-15T03:00:23.326Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 140129.93,
		"hash": "0d6228612e42ebe43cf439d81f25861f01682e55a08d5acc15c6b0cff702bb2c"
	},
	{
		"id": "e0e1eed0ff37",
		"ts": "2026-10-15T03:00:23.577Z",
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
		"liquidityUsd": 2526737.33,
		"hash": "e0e1eed0ff37e7369a36ea55241d63262c7441f1e3890d47838b36a3ed3a3929"
	},
	{
		"id": "25c63c3a796d",
		"ts": "2026-10-15T03:00:23.825Z",
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
		"liquidityUsd": 1803075.64,
		"hash": "25c63c3a796db56f6501a65bae6ff9716453e4eba632ab29095988fea8fb10ad"
	},
	{
		"id": "f7d991622ebf",
		"ts": "2026-10-15T03:00:24.088Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1334252.51,
		"hash": "f7d991622ebf049a2b388176fff2378426e581c154213aedc3e8fe43405d3d3f"
	},
	{
		"id": "19d54c93e293",
		"ts": "2026-10-15T03:00:24.324Z",
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
		"liquidityUsd": 1097015.76,
		"hash": "19d54c93e293f19aac26d004f56cb5b2cfe0c32eac3ae18a024feda5ff064857"
	},
	{
		"id": "576063e7c8fc",
		"ts": "2026-10-15T03:00:24.550Z",
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
		"liquidityUsd": 2828625.91,
		"hash": "576063e7c8fc8927dd1ab8974bbac63d4839d1e4722be600622aa2da765dfd44"
	},
	{
		"id": "fcdd28c685ae",
		"ts": "2026-10-15T03:00:24.778Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1063706.07,
		"hash": "fcdd28c685ae9637a7b519f8a0c63a2573d552506ade1ff64bce7a1582fbe2f8"
	},
	{
		"id": "d7f4ecbb179e",
		"ts": "2026-10-15T03:00:25.005Z",
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
		"liquidityUsd": 303020.03,
		"hash": "d7f4ecbb179e22d77faac1f59442554390740e579b747d2c6e2590e26f5f2b69"
	},
	{
		"id": "78790321f2d9",
		"ts": "2026-10-15T03:00:25.247Z",
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
		"liquidityUsd": 15476840.09,
		"hash": "78790321f2d9f062d8d1722b8c95e472cf87f228a3e0bb507de5158e1bb66be8"
	},
	{
		"id": "6cd6e5e2915b",
		"ts": "2026-10-15T03:00:25.482Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2031796.79,
		"hash": "6cd6e5e2915b3d973614f2a1feda51d2dbbba90307ec71be21be8a00593da9ed"
	},
	{
		"id": "0e5d7d8a9f13",
		"ts": "2026-10-15T03:00:25.713Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5276929.34,
		"hash": "0e5d7d8a9f13060f719f90a2f6d06ad7c303dd16a24bd2997890715bce221d80"
	},
	{
		"id": "06b8e4fbbacd",
		"ts": "2026-10-15T03:00:25.948Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3942227.35,
		"hash": "06b8e4fbbacde9cddea4c1139c10f6fe75ff4c6be43c30921fefeb1453bc32a2"
	},
	{
		"id": "b55541228828",
		"ts": "2026-10-15T03:00:26.179Z",
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
		"liquidityUsd": 4356623.79,
		"hash": "b555412288283346db9b88989e3c69f6180cf93bd2bb4bcdf3da4dfae77c9e3b"
	},
	{
		"id": "db4879817a06",
		"ts": "2026-10-14T23:38:09.648Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 146624562.96,
		"hash": "db4879817a0664bc1b970722e32d566e25b69ea8cb31930b66f430b824d35fee"
	},
	{
		"id": "3886d5f4b474",
		"ts": "2026-10-14T23:38:10.321Z",
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
		"liquidityUsd": 17818945.22,
		"hash": "3886d5f4b474314b413c438afbd4ea6fe09ec8555cfd450ae78efcb48e2bae06"
	},
	{
		"id": "b5d3ef712138",
		"ts": "2026-10-14T23:38:10.589Z",
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
		"liquidityUsd": 802999.6,
		"hash": "b5d3ef712138e804cd8a7bb95a376a27c05da1367bb9194561576fa124bfcaea"
	},
	{
		"id": "9a58c1a4c846",
		"ts": "2026-10-14T23:38:10.846Z",
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
		"liquidityUsd": 45540046.4,
		"hash": "9a58c1a4c846141c7148899020cb36bc3013bbc58cfc47563cdc951f7288f422"
	},
	{
		"id": "b70bc2584467",
		"ts": "2026-10-14T23:38:11.093Z",
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
		"liquidityUsd": 4593465.9,
		"hash": "b70bc2584467767bb44b17e2047da325e0ce434ac90baeb76ca10516fc4050d6"
	},
	{
		"id": "19d54b741912",
		"ts": "2026-10-14T23:38:11.344Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1161079.32,
		"hash": "19d54b7419128121f924ba07533fe32387db867d396b7c80aac4eb1d8987fc2e"
	},
	{
		"id": "25ca7fcd6ef0",
		"ts": "2026-10-14T23:38:11.611Z",
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
		"liquidityUsd": 1780753.45,
		"hash": "25ca7fcd6ef0fa7b7d27adae6c4f7bf6e589d1e1ade768402970b16a965f80d8"
	},
	{
		"id": "d6a8b56854ff",
		"ts": "2026-10-14T23:38:11.881Z",
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
		"liquidityUsd": 2570012.33,
		"hash": "d6a8b56854ff3020b69f1f264155fb899a47ded322b79581f987091254c094c1"
	},
	{
		"id": "15ecb34d3e8b",
		"ts": "2026-10-14T23:38:12.128Z",
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
		"liquidityUsd": 1780752.24,
		"hash": "15ecb34d3e8b7661c2c3c8771d4ecfe65253073b99ef6466bd96c347958e15ae"
	},
	{
		"id": "101a1a7d1ef1",
		"ts": "2026-10-14T23:38:12.387Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1127355.8,
		"hash": "101a1a7d1ef1243f46ead814b48ed6e6f6320529c0d8f3f7cddc70371d5b7d97"
	},
	{
		"id": "1c1064ffacc7",
		"ts": "2026-10-14T23:38:12.618Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1371676.27,
		"hash": "1c1064ffacc7a013aa88a61ef77ca626c00f838f75ec3928e4bc22685cfcda99"
	},
	{
		"id": "efd6715de80d",
		"ts": "2026-10-14T23:38:12.858Z",
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
		"liquidityUsd": 2912231.04,
		"hash": "efd6715de80d47e8312d3caa7bba1b185977849a8bbbfe545e81862543b78db6"
	},
	{
		"id": "e2ba5dd12667",
		"ts": "2026-10-14T23:38:13.089Z",
		"symbol": "Paper",
		"token": "0xC54a9e149d964a8e8620f685bE8a09e0acbf0b07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 5218853.88,
		"hash": "e2ba5dd1266705e0b6e675571bb193e6343072252002143658fc032c179dd983"
	},
	{
		"id": "d9136b739bc8",
		"ts": "2026-10-14T23:38:13.323Z",
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
		"liquidityUsd": 313730.77,
		"hash": "d9136b739bc83b5c2f1a542ee8cdc2b30186417a890c02743b7bf06f2f8466dc"
	},
	{
		"id": "d9c61d98e459",
		"ts": "2026-10-14T23:38:13.555Z",
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
		"liquidityUsd": 16078253.49,
		"hash": "d9c61d98e459d00b59dd1c34954b858133604b0273a65abe26e52e14db86e648"
	},
	{
		"id": "7254cf061b58",
		"ts": "2026-10-14T23:38:13.787Z",
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
		"liquidityUsd": 4591695.21,
		"hash": "7254cf061b58197521dbfee880d97dcd062daf0f9396f96e1219f7231e382c17"
	},
	{
		"id": "ad14cceb391d",
		"ts": "2026-10-14T23:38:14.016Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1071053.3,
		"hash": "ad14cceb391d8cb73f76306bdd68e965eaf386ad2749230325c3b719ad88ed4c"
	},
	{
		"id": "9645ee19cad5",
		"ts": "2026-10-14T23:38:14.255Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5237468.71,
		"hash": "9645ee19cad5c239c03bbd24a68a01f9eb9338c3edbc35b54197cb4b2924bbe0"
	},
	{
		"id": "dccc6ad42a8c",
		"ts": "2026-10-14T23:38:14.486Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2061545.35,
		"hash": "dccc6ad42a8cf950a0234c0d9d13fd4b652d8c78d2748d9d5e74c3fe8abe4130"
	},
	{
		"id": "b3b784cde495",
		"ts": "2026-10-14T20:24:46.689Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147329210.26,
		"hash": "b3b784cde495280df083f6b2075281ea134aacea042833891bf3b16717755858"
	},
	{
		"id": "eb1942593194",
		"ts": "2026-10-14T20:24:47.395Z",
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
		"liquidityUsd": 17866912.88,
		"hash": "eb19425931942e9de135234f52ab2a8221e8c18284ce6041935bf0f887792eaa"
	},
	{
		"id": "7c60c549485a",
		"ts": "2026-10-14T20:24:47.839Z",
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
		"liquidityUsd": 802999.6,
		"hash": "7c60c549485acbd2f2ba688cf62975b7f21078512a03719c42e1598fef02221c"
	},
	{
		"id": "e8fcb1010c24",
		"ts": "2026-10-14T20:24:48.115Z",
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
		"liquidityUsd": 45130463.56,
		"hash": "e8fcb1010c247a6d94745b87176013d5d5796139137cacd36de0a5b5da0e7dbd"
	},
	{
		"id": "31b94cc9d2bb",
		"ts": "2026-10-14T20:24:48.377Z",
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
		"liquidityUsd": 4630360.86,
		"hash": "31b94cc9d2bbe48c5a7f725148f61d9b1d554a6aff5936812d87263c9ba2de47"
	},
	{
		"id": "5bc6f9fbc655",
		"ts": "2026-10-14T20:24:48.630Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1164384.72,
		"hash": "5bc6f9fbc655e689139cb5359ec4bf3b5a8e76b18e8833b426794bf2f189ff85"
	},
	{
		"id": "cb753b8911e5",
		"ts": "2026-10-14T20:24:48.901Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 45130463.56,
		"hash": "cb753b8911e52ec2935babb769e9bd5ba261c0bce957b8a297eccb837eabc918"
	},
	{
		"id": "55b9ccc9707d",
		"ts": "2026-10-14T20:24:49.155Z",
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
		"liquidityUsd": 2586513.09,
		"hash": "55b9ccc9707d837f1573fbe37ee03956acf36ed85ef8f9c6f269b5269b6f57fe"
	},
	{
		"id": "fa3029b82f30",
		"ts": "2026-10-14T20:24:49.422Z",
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
		"liquidityUsd": 1804672.64,
		"hash": "fa3029b82f3029ff395e789247d38800f58d6cccfb9237ea80ad8033f5cc13dd"
	},
	{
		"id": "debb5c5a450a",
		"ts": "2026-10-14T20:24:49.785Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1136165.14,
		"hash": "debb5c5a450adeece8f0268433e758c3e5a03574adb781847cef8d016589a0de"
	},
	{
		"id": "48ab94aefec0",
		"ts": "2026-10-14T20:24:50.020Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1378021.56,
		"hash": "48ab94aefec0681ebf0097e7e2418b36a5e3e49205a3569b49bfb8084b6cf48e"
	},
	{
		"id": "a43b10db34d1",
		"ts": "2026-10-14T20:24:50.254Z",
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
		"liquidityUsd": 2941278.08,
		"hash": "a43b10db34d1977a645adc578163de7e710698d985d80ed92a87964f45383846"
	},
	{
		"id": "402116b603f4",
		"ts": "2026-10-14T20:24:50.503Z",
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
		"liquidityUsd": 314831.86,
		"hash": "402116b603f489886a887b6eef5220a3e3924667ea69b51f1ba28e70ae4fe3c7"
	},
	{
		"id": "1eb2701cb579",
		"ts": "2026-10-14T20:24:50.737Z",
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
		"liquidityUsd": 4553768.97,
		"hash": "1eb2701cb57947b7beeb47890bf3ccc736dcd4ce0cbd3eab774c74b29e0a6516"
	},
	{
		"id": "aef2ea46fb12",
		"ts": "2026-10-14T20:24:50.988Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1072067.74,
		"hash": "aef2ea46fb1287bd010d8c392f6d0c78506ca7d7ad17d523afd184e5a0be3e75"
	},
	{
		"id": "318bf047c1ef",
		"ts": "2026-10-14T20:24:51.236Z",
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
		"liquidityUsd": 16264263.03,
		"hash": "318bf047c1ef79c4df3992db439a1e6c499046837f60e51a6adf2e467a64e309"
	},
	{
		"id": "bc09ae12851e",
		"ts": "2026-10-14T20:24:51.467Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2074101.13,
		"hash": "bc09ae12851ea77cf7d549fd925658ba2aff8de2cc47be7e9d8fc699f81492c4"
	},
	{
		"id": "485d12b5549c",
		"ts": "2026-10-14T20:24:51.714Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4003487.89,
		"hash": "485d12b5549c059811109a207572995f17c8f8102f72d356ea3bc9136c4f16a5"
	},
	{
		"id": "89b9c384703a",
		"ts": "2026-10-14T20:24:51.962Z",
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
		"liquidityUsd": 1152795.42,
		"hash": "89b9c384703a4442e755c33f809f539355a8a2f046b0cbb4c09bb856ba8c51f4"
	},
	{
		"id": "107e4005c6cd",
		"ts": "2026-10-14T16:26:23.162Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 147757271.35,
		"hash": "107e4005c6cd7f1e8d1fa78bdc6981f0fa0792a731297d8eeb6972999910bcb2"
	},
	{
		"id": "d0df3cb9bcdb",
		"ts": "2026-10-14T16:26:23.454Z",
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
		"liquidityUsd": 17831343.35,
		"hash": "d0df3cb9bcdb98c853c3c1a550cc4b2f44f4f4820247f5e42e4718b44a59c477"
	},
	{
		"id": "541d4a26aa58",
		"ts": "2026-10-14T16:26:23.733Z",
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
		"liquidityUsd": 802999.6,
		"hash": "541d4a26aa58c12d31c91a8e339490208bc8faa5b0258af5a46ed82146c9cabc"
	},
	{
		"id": "03a243ce795b",
		"ts": "2026-10-14T16:26:24.035Z",
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
		"liquidityUsd": 44329657.05,
		"hash": "03a243ce795b202213533804a163e9002157a3f2197ec920b28baf15d6548987"
	},
	{
		"id": "2d87e8ae7254",
		"ts": "2026-10-14T16:26:24.302Z",
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
		"liquidityUsd": 4619491.82,
		"hash": "2d87e8ae7254d85ff22d944061ad350e8ea90af9f877e9262df7397a29d77d61"
	},
	{
		"id": "a6ebeba1782f",
		"ts": "2026-10-14T16:26:24.559Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1162836.11,
		"hash": "a6ebeba1782f104f0024ddb93bdcbadf2034309da1407961f9bec2fc65fabe7f"
	},
	{
		"id": "8534e02e4db1",
		"ts": "2026-10-14T16:26:24.811Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 44329657.05,
		"hash": "8534e02e4db1e275160df20c3b5b03e341e6f0a88be9e177e60cc194bc27752b"
	},
	{
		"id": "6d29dda36f8d",
		"ts": "2026-10-14T16:26:25.081Z",
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
		"liquidityUsd": 2935742.65,
		"hash": "6d29dda36f8d93d1ad2c4d14c76326ea5a1ac2e0111fdb647a4599c4b5a31310"
	},
	{
		"id": "094d66c88040",
		"ts": "2026-10-14T16:26:25.357Z",
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
		"liquidityUsd": 1773500.68,
		"hash": "094d66c88040cfa6a0497de7d4c54e3cc3a1662297e7cc00f6a5b73a16969c1b"
	},
	{
		"id": "082a3988c783",
		"ts": "2026-10-14T16:26:25.617Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 319223.98,
		"hash": "082a3988c783212343f818d6492758ee305f2b59ec55dc571d7989644d84be80"
	},
	{
		"id": "6d96c9c42609",
		"ts": "2026-10-14T16:26:25.883Z",
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
		"liquidityUsd": 1170814.16,
		"hash": "6d96c9c42609bdf5b9f9abc3afd456ae41cd979aca01e65acb70192417ea4180"
	},
	{
		"id": "c6fbcc7787eb",
		"ts": "2026-10-14T16:26:26.141Z",
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
		"liquidityUsd": 4545882.49,
		"hash": "c6fbcc7787eb82b3ef102058d7e6a9c501d0f234de174d14a06b78742b3c3519"
	},
	{
		"id": "83291eb0c5a1",
		"ts": "2026-10-14T16:26:26.382Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1341203.54,
		"hash": "83291eb0c5a1f1c9ed6ef5a2144eebb659f5728434fa0cde03674cb7ede0c0f7"
	},
	{
		"id": "781c865aedb3",
		"ts": "2026-10-14T16:26:26.628Z",
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
		"liquidityUsd": 15851442.52,
		"hash": "781c865aedb32effda8815c6541484f2ecf9adc4728c113fb0ea571c56655dc9"
	},
	{
		"id": "2dec65bc8bfd",
		"ts": "2026-10-14T16:26:26.867Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1066183.8,
		"hash": "2dec65bc8bfd2811dd15d3ba693898b0883c30a351fe8dd7299ff38666d3175e"
	},
	{
		"id": "f902d1a93c3b",
		"ts": "2026-10-14T16:26:27.093Z",
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
		"liquidityUsd": 2911849.17,
		"hash": "f902d1a93c3ba0b16d726471db5071bf0e17f17e13626c206020ce7a1f9a4d39"
	},
	{
		"id": "b45672289a98",
		"ts": "2026-10-14T16:26:27.339Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4000289.07,
		"hash": "b45672289a9877cd6f021c3b1f548feb5fbab180438925519a0bee5ab704ebf3"
	},
	{
		"id": "69efec216873",
		"ts": "2026-10-14T16:26:27.581Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5228866.75,
		"hash": "69efec216873538a195a7edaec495dd077bf17e112dd3f0860620a081a876199"
	},
	{
		"id": "0e5d4fc3fa7b",
		"ts": "2026-10-14T16:26:27.813Z",
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
		"liquidityUsd": 605098.07,
		"hash": "0e5d4fc3fa7ba3dcb111b3d8a45fb2ce88fdd37b9a1668bbc9553a35da840249"
	},
	{
		"id": "f18aaf86003b",
		"ts": "2026-10-14T11:05:58.831Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 149691851.92,
		"hash": "f18aaf86003b98e6f762a6eee3e9603135c7b76734f6e8fbc7c7a4a97b212a52"
	},
	{
		"id": "6349b877d912",
		"ts": "2026-10-14T11:05:59.168Z",
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
		"liquidityUsd": 18286019.22,
		"hash": "6349b877d912754e301259bdb2f7656941d105b35cc3d015490b40b6e8aafb0b"
	},
	{
		"id": "0edb71340273",
		"ts": "2026-10-14T11:05:59.476Z",
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
		"liquidityUsd": 798146.82,
		"hash": "0edb71340273537c6edf1c91069a3c9bd65179423171ccd775b21683776994ce"
	},
	{
		"id": "1e9ad59daa21",
		"ts": "2026-10-14T11:05:59.771Z",
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
		"liquidityUsd": 41756430.98,
		"hash": "1e9ad59daa2108a9122e1423815eed5afff112da76ffbc5d173bb319d3163fbb"
	},
	{
		"id": "4b394d9bbf61",
		"ts": "2026-10-14T11:06:00.067Z",
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
		"liquidityUsd": 4774178.76,
		"hash": "4b394d9bbf61a0b7b30a7f1e077421945fc7d5819afc3ad1a249e8cce8ecc4ea"
	},
	{
		"id": "ea8c68bb754f",
		"ts": "2026-10-14T11:06:00.365Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1212524.64,
		"hash": "ea8c68bb754f5bb2b00fc72b097e7437768b2d2b9ed2927e360c21195ff01f6d"
	},
	{
		"id": "a9188b335616",
		"ts": "2026-10-14T11:06:00.675Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41756431.04,
		"hash": "a9188b335616b683e826c674f8e9ef579a9b6320aee6d61179228a994ded1ed2"
	},
	{
		"id": "e282334c2180",
		"ts": "2026-10-14T11:06:00.972Z",
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
		"liquidityUsd": 3023411.42,
		"hash": "e282334c2180b6a2cd2e02322d15c05e13e2e6ff60d2d47bf448d39ff926b848"
	},
	{
		"id": "d3cfb0e7a6d7",
		"ts": "2026-10-14T11:06:01.268Z",
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
		"liquidityUsd": 1800844.24,
		"hash": "d3cfb0e7a6d7124fe11e57ec693500f20b62d3a82cfe49877a26ab33c4e87164"
	},
	{
		"id": "e761966bc120",
		"ts": "2026-10-14T11:06:01.827Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 326950.32,
		"hash": "e761966bc1207a63f10d10f2d7da4b967d2d34a8fc17181997db4ea7c57b0c1a"
	},
	{
		"id": "13eca91160b6",
		"ts": "2026-10-14T11:06:02.119Z",
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
		"liquidityUsd": 4748082.38,
		"hash": "13eca91160b6240f3b21f5cac41c9725e85e2b91ef26bbe8ba0aaa1094575e66"
	},
	{
		"id": "db6ba0d930b2",
		"ts": "2026-10-14T11:06:02.415Z",
		"symbol": "Surplus",
		"token": "0xC52aeDec3374422d7510E294cfAa90799595CBa3",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1282587.51,
		"hash": "db6ba0d930b23bf21a9e02fdfb0749f63e2f37d26b61e9580857cc4f8ada7d09"
	},
	{
		"id": "69fbef72d425",
		"ts": "2026-10-14T11:06:02.721Z",
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
		"liquidityUsd": 16268860.49,
		"hash": "69fbef72d425782491ba0e1e6c6e53c772301399e400a9a0d36921ff1689858c"
	},
	{
		"id": "ce9a4d6552b1",
		"ts": "2026-10-14T11:06:03.212Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 40,
		"rating": "high",
		"verdict": "RISKY",
		"confidence": 0.2,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 5285657.52,
		"hash": "ce9a4d6552b1b001a429f7177f886737caabcf04c7890bf9de0b93a1a67c7c22"
	},
	{
		"id": "9727f28a8fac",
		"ts": "2026-10-14T11:06:03.606Z",
		"symbol": "CTR",
		"token": "0x11030f79109269d796fd0FB956D6244e502757f7",
		"score": 18,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.64,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 600069.9,
		"hash": "9727f28a8fac44712b0a168b5548854be1519ab36ec22e26b8ac7b973c09dae3"
	},
	{
		"id": "33bf2de17086",
		"ts": "2026-10-14T11:06:03.869Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4174175.8,
		"hash": "33bf2de17086224bda4fbacb89a02196e4af6367ceb1778a84e5e9e708594386"
	},
	{
		"id": "218e1e64cd60",
		"ts": "2026-10-14T11:06:04.123Z",
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
		"liquidityUsd": 1146633.74,
		"hash": "218e1e64cd6062e3d5b677bd328abff85978eb15698a2747a393b3b447e03cb6"
	},
	{
		"id": "9da7564253ed",
		"ts": "2026-10-14T11:06:04.376Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1455078.82,
		"hash": "9da7564253edb5108d764a943656e6fcdf6caeb69731d93a4407641beacc9017"
	},
	{
		"id": "d0bdfafa481d",
		"ts": "2026-10-14T11:06:04.624Z",
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
		"liquidityUsd": 3039988.4,
		"hash": "d0bdfafa481dc633a5e50d41bd6b42e07a2c44570557f84e459adb64de8256fd"
	},
	{
		"id": "db3e09954721",
		"ts": "2026-10-14T05:45:18.391Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150513738.12,
		"hash": "db3e09954721916802676991ac52f2b55e1b5c06be748491dab3649d13024fd9"
	},
	{
		"id": "7f4144af133b",
		"ts": "2026-10-14T05:45:18.700Z",
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
		"liquidityUsd": 18325178.04,
		"hash": "7f4144af133b686911b3603040692a3e47532d96c849aa6ee58d624a5cfceca3"
	},
	{
		"id": "e62b44302cff",
		"ts": "2026-10-14T05:45:18.969Z",
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
		"liquidityUsd": 799274.96,
		"hash": "e62b44302cff63bcdaad55e9506a45172d299b9dc1b32258e11e9979a3e989bb"
	},
	{
		"id": "b2bd540c2d16",
		"ts": "2026-10-14T05:45:19.224Z",
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
		"liquidityUsd": 41900140.15,
		"hash": "b2bd540c2d16e125e545a93f37ca35ef8df569c958b0774ddb12ff43649f8d6e"
	},
	{
		"id": "025257020a50",
		"ts": "2026-10-14T05:45:19.480Z",
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
		"liquidityUsd": 4782639.11,
		"hash": "025257020a50bb8d9fc74d34ab5102edaf519ac91e598a5ec110c397170788e1"
	},
	{
		"id": "327470e29a01",
		"ts": "2026-10-14T05:45:19.736Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1212514.46,
		"hash": "327470e29a012334515f4ff05c09d64e8b355d42b0460918b8623c768ed3845a"
	},
	{
		"id": "8af2c09704a6",
		"ts": "2026-10-14T05:45:20.001Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41900140.15,
		"hash": "8af2c09704a6a6addbe4d036affacb70ca6ba822e8a4a20da055b0651771da06"
	},
	{
		"id": "f86d75259d61",
		"ts": "2026-10-14T05:45:20.248Z",
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
		"liquidityUsd": 3037157.4,
		"hash": "f86d75259d613c04bf8d79a5f072ba7dc5018c947026c5b605407ad6393e85b1"
	},
	{
		"id": "d9185dd1e82c",
		"ts": "2026-10-14T05:45:20.505Z",
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
		"liquidityUsd": 1890613.45,
		"hash": "d9185dd1e82cf7158c5bea68c9ec5e7b837cfbffd2831d34816cb600213c014f"
	},
	{
		"id": "b5c8b86d3420",
		"ts": "2026-10-14T05:45:20.756Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 331899.94,
		"hash": "b5c8b86d342083b6b5f766126ec01ffb8982315f50bcd53e65da8e785277faa4"
	},
	{
		"id": "8e5ab7419f17",
		"ts": "2026-10-14T05:45:20.994Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5200136.32,
		"hash": "8e5ab7419f1720766db7c9cc2d052e0901e6f7eec4b3afcc014ccc91919b975d"
	},
	{
		"id": "afe17b7ea4b0",
		"ts": "2026-10-14T05:45:21.241Z",
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
		"liquidityUsd": 4896017.67,
		"hash": "afe17b7ea4b0cd165e9e365771bd3e95de2c62c99c8e05be77aeabc6fed38a37"
	},
	{
		"id": "a283fc59704f",
		"ts": "2026-10-14T05:45:21.482Z",
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
		"liquidityUsd": 15906834.81,
		"hash": "a283fc59704ff65aa24f34ab76e76461fdf6bd861a100fd7848eb340e7481568"
	},
	{
		"id": "182a59dbb29a",
		"ts": "2026-10-14T05:45:21.714Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1127875.59,
		"hash": "182a59dbb29a03f7e2a6f699b7510ba319f6cd40de32e8106d814e2034122ae4"
	},
	{
		"id": "8b12388bac5f",
		"ts": "2026-10-14T05:45:21.958Z",
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
		"liquidityUsd": 3050602.52,
		"hash": "8b12388bac5fbf33a6554d0a34dea1ffc0f040423da91683d6721970cfd65bd8"
	},
	{
		"id": "79b892493239",
		"ts": "2026-10-14T05:45:22.202Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4069294.34,
		"hash": "79b89249323937f4ec19d5c5e802d1706f2b633df2990ec3c32b607c7e86a5a6"
	},
	{
		"id": "14a56a5397ae",
		"ts": "2026-10-14T05:45:22.429Z",
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
		"liquidityUsd": 613100.25,
		"hash": "14a56a5397ae77db2c2d2c46ea83762f188ed3840da1575f053ca9937518d103"
	},
	{
		"id": "af61d9d1d791",
		"ts": "2026-10-14T05:45:22.690Z",
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
		"liquidityUsd": 1174695.13,
		"hash": "af61d9d1d791199496d978299d59e8b16b475b866213b237f6143fb64a67268c"
	},
	{
		"id": "b8e55b6a7350",
		"ts": "2026-10-14T05:45:22.926Z",
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
		"liquidityUsd": 1185606.16,
		"hash": "b8e55b6a735078f241f9002ecd63f48320ba62d7a04488953ff80417759dc1b2"
	},
	{
		"id": "46439fc642c0",
		"ts": "2026-10-14T00:06:22.110Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150314585.92,
		"hash": "46439fc642c0c41221f2d9022ee4d012e3a01bf261445cd355a208aa6e9e0823"
	},
	{
		"id": "9cc83df5ee8c",
		"ts": "2026-10-14T00:06:22.433Z",
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
		"liquidityUsd": 18193976.04,
		"hash": "9cc83df5ee8c818126c947d515ae7ec4e6c76019f668f525fc7b78ac57878f0b"
	},
	{
		"id": "36a10f1a21ac",
		"ts": "2026-10-14T00:06:22.746Z",
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
		"liquidityUsd": 802468.86,
		"hash": "36a10f1a21ac7fcd337cc254d900325e670aaea7b8ace24c1911755c1016c0f2"
	},
	{
		"id": "e0759da1164c",
		"ts": "2026-10-14T00:06:23.058Z",
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
		"liquidityUsd": 41950861.08,
		"hash": "e0759da1164c3043304dce6825d41315282dafa18a5f2f28e867deb673fa20e2"
	},
	{
		"id": "545516be0820",
		"ts": "2026-10-14T00:06:23.368Z",
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
		"liquidityUsd": 4762798.38,
		"hash": "545516be0820f76c0f9ae313d38bb9baca07bcf19723932e4bd6e43fae1c5904"
	},
	{
		"id": "b55b9de12975",
		"ts": "2026-10-14T00:06:23.678Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1208305.89,
		"hash": "b55b9de12975e81af69086ea11ac821ca446b1cc949dd58e8da2cb2b3347bc93"
	},
	{
		"id": "d299c638eb41",
		"ts": "2026-10-14T00:06:23.987Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 41950861.08,
		"hash": "d299c638eb411af22b6b4b843c4ba98159b4d69e76d71078390ed921d83ce1fb"
	},
	{
		"id": "027d0791fa32",
		"ts": "2026-10-14T00:06:24.310Z",
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
		"liquidityUsd": 929443.36,
		"hash": "027d0791fa32e9b38b82c19f58131e7c298e370418b4a7aa6625c0983ff291e1"
	},
	{
		"id": "e1d681d5f174",
		"ts": "2026-10-14T00:06:24.621Z",
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
		"liquidityUsd": 1909032.38,
		"hash": "e1d681d5f17425cff728d29e4d3a6b853450d21662d5c22fabe9be9781db4037"
	},
	{
		"id": "64ffca6886fb",
		"ts": "2026-10-14T00:06:24.924Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 318259.72,
		"hash": "64ffca6886fbf556504ee1e5ac80313b7bc1816738d7eb741b0fe07761a5241f"
	},
	{
		"id": "1e8306a0aeea",
		"ts": "2026-10-14T00:06:25.213Z",
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
		"liquidityUsd": 5094678.39,
		"hash": "1e8306a0aeeae70def10b5f97f9d16e12a03dbbf5136cd285c1c0d379bb31060"
	},
	{
		"id": "8b1bcdc2deae",
		"ts": "2026-10-14T00:06:25.507Z",
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
		"liquidityUsd": 15765452.09,
		"hash": "8b1bcdc2deae1852ea988c855010d48d1269fbddaa413feaa0238c54e1e67fa3"
	},
	{
		"id": "91c0196ee4a3",
		"ts": "2026-10-14T00:06:25.798Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1123733.54,
		"hash": "91c0196ee4a3ce2cf021c4baf8d71d2f540d9664db3efb6e43771e994398744e"
	},
	{
		"id": "74ee078fc335",
		"ts": "2026-10-14T00:06:26.089Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4078118.5,
		"hash": "74ee078fc335831027cf90888b8e7dc6f9965580567dcaae9fe8d6e7b6cbbb8d"
	},
	{
		"id": "fc8dca4edfb4",
		"ts": "2026-10-14T00:06:26.378Z",
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
		"liquidityUsd": 3088432.27,
		"hash": "fc8dca4edfb43317bfef2420c032df1d5ab570d75ecbc6f4307f98d567b3f657"
	},
	{
		"id": "89b8ead4fadf",
		"ts": "2026-10-14T00:06:26.670Z",
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
		"liquidityUsd": 623089.67,
		"hash": "89b8ead4fadf115d6f0af30af21072e1544533253cec435b553b1b7aac0c4165"
	},
	{
		"id": "1c92e036cd07",
		"ts": "2026-10-14T00:06:26.963Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 448617.11,
		"hash": "1c92e036cd074e931f2f8674f6a22756b6ad25a82b632cd36814ce586d0e1ffd"
	},
	{
		"id": "5363045427cf",
		"ts": "2026-10-14T00:06:27.251Z",
		"symbol": "ZRO",
		"token": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 197587.14,
		"hash": "5363045427cfce2d352555fc5d692dbb715853d077ac2ae5c41c5cd44a625d86"
	},
	{
		"id": "6a8657527542",
		"ts": "2026-10-14T00:06:27.540Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5158759.72,
		"hash": "6a86575275429496b78344a62b5c6f9247a1ca601f67b52048e6b57fc9da68de"
	},
	{
		"id": "334deda56350",
		"ts": "2026-10-13T20:02:37.615Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 150494459.46,
		"hash": "334deda563503b5f2c3f05b24c03510542114a0e6400f4f6c30770fc511cae70"
	},
	{
		"id": "80be976d0a7e",
		"ts": "2026-10-13T20:02:38.142Z",
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
		"liquidityUsd": 18275383.57,
		"hash": "80be976d0a7e6b6f2d126d26d7d123db8522ea7d05d16cd3d4c4de0ca1c4b6e2"
	},
	{
		"id": "4ce33acd818f",
		"ts": "2026-10-13T20:02:38.444Z",
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
		"liquidityUsd": 800872.5,
		"hash": "4ce33acd818fa06f2024c6432ad0a805a5a2597a1aa20aef2398327ca55448bd"
	},
	{
		"id": "9870044bb39e",
		"ts": "2026-10-13T20:02:38.745Z",
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
		"liquidityUsd": 42013803.89,
		"hash": "9870044bb39e2a1921882d8565228ce033f4388885ab261b17a29c56abc2187e"
	},
	{
		"id": "e0f4b7d3344f",
		"ts": "2026-10-13T20:02:39.042Z",
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
		"liquidityUsd": 4775686.43,
		"hash": "e0f4b7d3344fc06c8393b62645b396269c4b42940f76b37f3c1ef65874c6c439"
	},
	{
		"id": "913519fcf6db",
		"ts": "2026-10-13T20:02:39.382Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1208240.4,
		"hash": "913519fcf6db183a24f198594f9d9ce70ce0c4a179bc816cc384b1bec858116c"
	},
	{
		"id": "4e3702e5c1ac",
		"ts": "2026-10-13T20:02:39.677Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 42013803.89,
		"hash": "4e3702e5c1acb03013c283d9d274b389c081432b09351ee52452bf6ba8bf35c0"
	},
	{
		"id": "20c4c277c687",
		"ts": "2026-10-13T20:02:39.976Z",
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
		"liquidityUsd": 932976.26,
		"hash": "20c4c277c6872a31a502c99b621c75e566b3806ce1c300bb5acf3866a0fabfc4"
	},
	{
		"id": "8760c4ccdee3",
		"ts": "2026-10-13T20:02:40.264Z",
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
		"liquidityUsd": 1885988.3,
		"hash": "8760c4ccdee3edb3bc4c360199ab1c117763177f2f098980a293423aa14c0611"
	},
	{
		"id": "b73f632bb696",
		"ts": "2026-10-13T20:02:40.562Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 325390.41,
		"hash": "b73f632bb6962d97e5a7f4b02bd66b45bf5738fa12e03896e20db966abbb24ec"
	},
	{
		"id": "b599f08c1f68",
		"ts": "2026-10-13T20:02:40.833Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5106168.08,
		"hash": "b599f08c1f68fbfe10003b7be19789879b6f4c85e11647d2d811a7af6478df5f"
	}
]
