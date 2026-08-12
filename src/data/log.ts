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
	"updatedAt": "2026-08-12T11:02:17.357Z",
	"tokensScored": 9404,
	"verdictsIssued": 9404,
	"safe": 8194,
	"risky": 694,
	"likelyRug": 516,
	"ticks": 569
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "5e36d68f123d",
		"ts": "2026-08-12T11:02:12.712Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112966280.05,
		"hash": "5e36d68f123d237e50a9a6d97fc10b536a3eafa5c1b7aa49bee3e6565448676d"
	},
	{
		"id": "3d079411da50",
		"ts": "2026-08-12T11:02:13.149Z",
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
		"liquidityUsd": 17006095.07,
		"hash": "3d079411da506463ca10a9cdea2bad42267598e27da32118de07642b03667583"
	},
	{
		"id": "81cb6f5f6837",
		"ts": "2026-08-12T11:02:13.592Z",
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
		"liquidityUsd": 1002992.95,
		"hash": "81cb6f5f68379667cf78f4e8debc83a35234aa2d53018668357527e3bf565f9b"
	},
	{
		"id": "15035aae780e",
		"ts": "2026-08-12T11:02:14.023Z",
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
		"liquidityUsd": 27000198.56,
		"hash": "15035aae780e376e3cea6edeabe650a42dadf93d232e391369ac8b4062f53947"
	},
	{
		"id": "1a609404d3e5",
		"ts": "2026-08-12T11:02:14.258Z",
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
		"liquidityUsd": 4166753.69,
		"hash": "1a609404d3e534ecc78cc80b074ace6b0fa68e28bf25bb4e7318c42761e3361d"
	},
	{
		"id": "6161658630bf",
		"ts": "2026-08-12T11:02:14.488Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 919081.08,
		"hash": "6161658630bf06134bd01871504098fba009b72900803dfcbc15269921ebbef9"
	},
	{
		"id": "c28639317136",
		"ts": "2026-08-12T11:02:14.717Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27000172.69,
		"hash": "c28639317136a532dee67fb1d8dc7fd8631cc40b2f700d9393b504a7f3a3e4b4"
	},
	{
		"id": "82e167cc340e",
		"ts": "2026-08-12T11:02:14.951Z",
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
		"liquidityUsd": 4506410.43,
		"hash": "82e167cc340e6784ef9369d8ac1f8579a038c987a7e332a5f4ea412398b9a003"
	},
	{
		"id": "5f8ab8715905",
		"ts": "2026-08-12T11:02:15.186Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3914574.97,
		"hash": "5f8ab8715905a0c972970b44d5f4857dc2ed9affcb68b0cfe2d7ecac9400e17e"
	},
	{
		"id": "434694535004",
		"ts": "2026-08-12T11:02:15.417Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 950578.61,
		"hash": "43469453500469de648c3661f8155ac18ab5dcdfefaaf6986dc75d046be58b6d"
	},
	{
		"id": "c289a84ebe61",
		"ts": "2026-08-12T11:02:15.635Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2257275.71,
		"hash": "c289a84ebe616f487a65083eff01ab3e98d6881969f45a86863ae07be7e4c7e1"
	},
	{
		"id": "809d750f9ea8",
		"ts": "2026-08-12T11:02:15.848Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1840210.11,
		"hash": "809d750f9ea8bc2a4efbb23243905cbd9840db1b77cbf53a80c177a4810898ce"
	},
	{
		"id": "0302296f7298",
		"ts": "2026-08-12T11:02:16.063Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 208400.62,
		"hash": "0302296f7298f5eb5d957ba734dec7d2e310aaa466b07b25a01846e9674cd46f"
	},
	{
		"id": "abf984ebe1a2",
		"ts": "2026-08-12T11:02:16.283Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 265632.34,
		"hash": "abf984ebe1a2fccd76609bb1863c0119cf438f993fddc1341e3bc0a95daa3bc6"
	},
	{
		"id": "1cb84e05403b",
		"ts": "2026-08-12T11:02:16.497Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4625834.24,
		"hash": "1cb84e05403b94f6affcd5c00592736e0a7f90553b7413e6d1b9b4200916d504"
	},
	{
		"id": "c28d96682af0",
		"ts": "2026-08-12T11:02:16.713Z",
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
		"liquidityUsd": 716946.08,
		"hash": "c28d96682af0bb6ed9ec0c74665c2b88a7966556ee3c854d3853780bf7ac3557"
	},
	{
		"id": "be1135d99a07",
		"ts": "2026-08-12T11:02:16.930Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4206760.27,
		"hash": "be1135d99a07d6d29f834e75cff1011b76904170a1e8a8712a7e8304b401c6b0"
	},
	{
		"id": "ff6a16d9433f",
		"ts": "2026-08-12T11:02:17.143Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9554390.26,
		"hash": "ff6a16d9433f2b0d31c2bf0a6684067384932b389558b71c74e96c184fb075f3"
	},
	{
		"id": "1553f901cf27",
		"ts": "2026-08-12T11:02:17.357Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 832026.9,
		"hash": "1553f901cf273b72b20637cac00014ee7c32094757f476f5736ebb5dc998b15e"
	},
	{
		"id": "e3c80e0c55da",
		"ts": "2026-08-12T09:58:30.283Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112794421.93,
		"hash": "e3c80e0c55daf824f19acaa7694bcda10d087e5c7ccd6ab2b962396628e25e71"
	},
	{
		"id": "eb05a4cb96cc",
		"ts": "2026-08-12T09:58:30.754Z",
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
		"liquidityUsd": 18328660.71,
		"hash": "eb05a4cb96cc0b50a0a563e83db88f0f3b3a439f10a5165b510b438f0d4df90a"
	},
	{
		"id": "262522ee77c1",
		"ts": "2026-08-12T09:58:31.075Z",
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
		"liquidityUsd": 1000820.36,
		"hash": "262522ee77c1b09bf7e9102e2a27bcbe45f72b20fa266b9865e462c5bae113b4"
	},
	{
		"id": "590c1e826564",
		"ts": "2026-08-12T09:58:31.395Z",
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
		"liquidityUsd": 26963463.66,
		"hash": "590c1e8265641a221b1133b8fca9c49582d73a7b2406e5bd05251081ffeb537e"
	},
	{
		"id": "34fa1a3e1641",
		"ts": "2026-08-12T09:58:31.595Z",
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
		"liquidityUsd": 4144709.72,
		"hash": "34fa1a3e16413a7b358e6425ba903c8e0a9aa2ed43834c6df09d7df957411b85"
	},
	{
		"id": "985aa4b0c56e",
		"ts": "2026-08-12T09:58:31.818Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 909596.52,
		"hash": "985aa4b0c56e5b6c10b41926674a13be0c44448722d66dd69c09cd29b1b57905"
	},
	{
		"id": "69c1a3d37d76",
		"ts": "2026-08-12T09:58:32.017Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26963463.66,
		"hash": "69c1a3d37d767ffe198ac1ff82d68f814efcccc7c22ef6f4935c9a4a24867e3d"
	},
	{
		"id": "a6b3f4381cda",
		"ts": "2026-08-12T09:58:32.235Z",
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
		"liquidityUsd": 4493733.75,
		"hash": "a6b3f4381cda912818c1d2218b1ab4f49006d28f5398a03647e9e88d58b20ed9"
	},
	{
		"id": "229a4810fbac",
		"ts": "2026-08-12T09:58:32.436Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3721908.48,
		"hash": "229a4810fbac7d4df9fc459c79daf5f680a6feb97f612a3f030955d7f756d54e"
	},
	{
		"id": "8e79f2cfc0b0",
		"ts": "2026-08-12T09:58:32.635Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 954591.51,
		"hash": "8e79f2cfc0b089007d89084fc26a864f665cb5eff32281b8d478ee8212a8eb4a"
	},
	{
		"id": "9af233c22a32",
		"ts": "2026-08-12T09:58:32.836Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2249525.12,
		"hash": "9af233c22a32634b579b713a07d7c0b3141ba7bf6f7cde4148e7f9b81a916ff4"
	},
	{
		"id": "dc93888e6172",
		"ts": "2026-08-12T09:58:33.051Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1828718.37,
		"hash": "dc93888e6172b623794db55a873933814920dfa69eba8647664d694b791b6be8"
	},
	{
		"id": "b790c014372c",
		"ts": "2026-08-12T09:58:33.293Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207601.1,
		"hash": "b790c014372c2e3b66111793fed56c791bd006581d69f7afd8817cc9bbcda362"
	},
	{
		"id": "f48731d3408c",
		"ts": "2026-08-12T09:58:33.494Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 266719.41,
		"hash": "f48731d3408cc8f31d2eb9dd10a8d1ae699b241aeb51db1d061c405e302cc9be"
	},
	{
		"id": "f98ba1eb414b",
		"ts": "2026-08-12T09:58:33.697Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4575630.28,
		"hash": "f98ba1eb414b6d2aa01e5ed463f7788f5274470b986997c37da7bebddf483dbd"
	},
	{
		"id": "23a04e10feb5",
		"ts": "2026-08-12T09:58:33.912Z",
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
		"liquidityUsd": 719370.88,
		"hash": "23a04e10feb5f39e799bf57d2ae1bd51a26c4221a9364854b41d58533c489dfd"
	},
	{
		"id": "f5c669973a8c",
		"ts": "2026-08-12T09:58:34.120Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4195090.75,
		"hash": "f5c669973a8c6a6a1b19dadd77b4e003d199ab689758baac3094b11579aa0c1e"
	},
	{
		"id": "e9ff3f4f240a",
		"ts": "2026-08-12T09:58:34.333Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9556639.55,
		"hash": "e9ff3f4f240af3a4c9a5a398b8b8312388e464289b7090cebd354ebad5d62148"
	},
	{
		"id": "494cf9bb0578",
		"ts": "2026-08-12T09:58:34.534Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 831539.36,
		"hash": "494cf9bb057897ba7532292b81b187168a47d2d683a22bea439f6209a4ab6217"
	},
	{
		"id": "25906a5966a1",
		"ts": "2026-08-12T08:13:36.509Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112317809.1,
		"hash": "25906a5966a17875016fa17056127e85d6ae4af1389730a617c88f9f0f9cb543"
	},
	{
		"id": "b110e7203986",
		"ts": "2026-08-12T08:13:36.961Z",
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
		"liquidityUsd": 13411190.27,
		"hash": "b110e72039866b9fbde5a0dcf065f2e46a969c9b17ffc18880836c5e3e6b4961"
	},
	{
		"id": "2d2c3132ee99",
		"ts": "2026-08-12T08:13:37.219Z",
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
		"liquidityUsd": 994492.37,
		"hash": "2d2c3132ee992fe200a8b7c13664086a24962ec6cfc7046c287dcfcfcf62a830"
	},
	{
		"id": "4dc9b2e49ab1",
		"ts": "2026-08-12T08:13:37.459Z",
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
		"liquidityUsd": 26830223.63,
		"hash": "4dc9b2e49ab1850f8aa894c78226d6c6e7d5da646ad46480b3d3bb8a3c6e8e97"
	},
	{
		"id": "009ea8346baf",
		"ts": "2026-08-12T08:13:37.700Z",
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
		"liquidityUsd": 4119247.83,
		"hash": "009ea8346baf463045a65b4fef6c7d17b6ce6341faf620a46b9d7c23075d30c6"
	},
	{
		"id": "13158e6eb787",
		"ts": "2026-08-12T08:13:37.933Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 906007.93,
		"hash": "13158e6eb787c1efbf40e9dd4f8df0750aabfe8e40885863f414d9cd171882ab"
	},
	{
		"id": "6a5124501d71",
		"ts": "2026-08-12T08:13:38.157Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26830223.63,
		"hash": "6a5124501d710ce752f123cea9fe6e6a07f48a076cb04b216e510152ffb51621"
	},
	{
		"id": "b62b70667470",
		"ts": "2026-08-12T08:13:38.398Z",
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
		"liquidityUsd": 4471142.85,
		"hash": "b62b7066747008c47aac8bcb7591fa7277fd46ee593d50dde8ecab1d4adc33b4"
	},
	{
		"id": "5bfd8d1dd08f",
		"ts": "2026-08-12T08:13:38.632Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3741098.26,
		"hash": "5bfd8d1dd08f50c2b6d52ff4dfad0ab31cf4a44864b55ee86ee8f641d09590ef"
	},
	{
		"id": "8492d7192ace",
		"ts": "2026-08-12T08:13:38.860Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 949493.56,
		"hash": "8492d7192ace06850c7452596e838146394782e574c2a19a00fc3f92ec7ae740"
	},
	{
		"id": "e510f59d1983",
		"ts": "2026-08-12T08:13:39.084Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2214684.31,
		"hash": "e510f59d19836cb313c084444c0c9216d01c4fc0014bb2d78fcf558d612e8e09"
	},
	{
		"id": "fe95ad49f4e7",
		"ts": "2026-08-12T08:13:39.301Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1824894.52,
		"hash": "fe95ad49f4e700947a1b641bfbbb5492afac56a51e4b58d123455b4700f30f6c"
	},
	{
		"id": "c5ccb151da96",
		"ts": "2026-08-12T08:13:39.524Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 215939.63,
		"hash": "c5ccb151da963370dbb723acf9ee38ef708c75e997cc3e24960a804a400606de"
	},
	{
		"id": "54073065f3ce",
		"ts": "2026-08-12T08:13:39.737Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 262594.31,
		"hash": "54073065f3ce56d569ceb2013ae2fbffcf43e165e3037551f676508e4575717b"
	},
	{
		"id": "25c5ff9735dd",
		"ts": "2026-08-12T08:13:39.959Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4397907.53,
		"hash": "25c5ff9735dde7c33e00fa2f658791f9b8dfa3c84272f1c9585df988251ccaa0"
	},
	{
		"id": "fafb3418bd12",
		"ts": "2026-08-12T08:13:40.177Z",
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
		"liquidityUsd": 706917.26,
		"hash": "fafb3418bd12e5f3742fa257bc5ea84af1da26c242fcc31fbd1003298b19084d"
	},
	{
		"id": "33f88d65e0b6",
		"ts": "2026-08-12T08:13:40.401Z",
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
		"liquidityUsd": 9437274.31,
		"hash": "33f88d65e0b6eeceb18cd463a5172914d27f247e42076567f8614680ba9cf005"
	},
	{
		"id": "f1d5f6419a75",
		"ts": "2026-08-12T08:13:40.617Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 826992.33,
		"hash": "f1d5f6419a75f43f0760fedc0ea90197b9044faf5b8735dd37988506ffa9c018"
	},
	{
		"id": "0ec810d5098f",
		"ts": "2026-08-12T08:13:40.829Z",
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
		"liquidityUsd": 1236607.83,
		"hash": "0ec810d5098f5e647c96381af34f50fdfde15aa952a17cd247d42381594f1d0f"
	},
	{
		"id": "dc33175571fd",
		"ts": "2026-08-12T06:10:39.172Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112173154.98,
		"hash": "dc33175571fdcd7277161579a3445b56f52b29c9e0a6c7c2d9a30b160120422f"
	},
	{
		"id": "70622aa314ac",
		"ts": "2026-08-12T06:10:39.407Z",
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
		"liquidityUsd": 19074499.65,
		"hash": "70622aa314ac414cb6ac284eeb6fa3579a63b2cb188189ea8bdc34bd77a4b437"
	},
	{
		"id": "6ace5a2d27c0",
		"ts": "2026-08-12T06:10:39.609Z",
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
		"liquidityUsd": 995725.51,
		"hash": "6ace5a2d27c0e0938d5e41fa9e0b954f9fd3b0349404f92df105e042809f360f"
	},
	{
		"id": "3e77e978a442",
		"ts": "2026-08-12T06:10:39.815Z",
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
		"liquidityUsd": 26871547.66,
		"hash": "3e77e978a44286f8133f361ac369941ce5c639aa13f8fc8bdad5e81076a4db78"
	},
	{
		"id": "cce28cdca6f5",
		"ts": "2026-08-12T06:10:40.013Z",
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
		"liquidityUsd": 4103068.95,
		"hash": "cce28cdca6f534a58be75f07ed33cf18f94fee19be66ebb02961216344c9e522"
	},
	{
		"id": "67c86be59662",
		"ts": "2026-08-12T06:10:40.230Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 916493.44,
		"hash": "67c86be59662850dcd6f530231b14126674dd3329a6cb6cee705cdb80caa2ba8"
	},
	{
		"id": "03e15c3c8ac3",
		"ts": "2026-08-12T06:10:40.447Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26871547.66,
		"hash": "03e15c3c8ac31c5be99e292bf8ecb7bf1aa1099b844b3326fca6197ad6338fce"
	},
	{
		"id": "2eee596f5a23",
		"ts": "2026-08-12T06:10:40.646Z",
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
		"liquidityUsd": 4457710.36,
		"hash": "2eee596f5a23e6877568d6b07d8ef5bb6526343dded2f21cb6a7e6ef41f12515"
	},
	{
		"id": "c3d60b6a2eea",
		"ts": "2026-08-12T06:10:40.847Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3828194.25,
		"hash": "c3d60b6a2eea8f6dc68b4f2ced59fb98a6cbf51dbceebec48884979468c1e90b"
	},
	{
		"id": "b61076bead44",
		"ts": "2026-08-12T06:10:41.048Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 952904.65,
		"hash": "b61076bead4479578455ea9ed10d9e8688ed73326f5258faf95d0e35cd597734"
	},
	{
		"id": "50e31113b849",
		"ts": "2026-08-12T06:10:41.394Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2203062.57,
		"hash": "50e31113b8496eca431f8835ceacdca7e3fd720b275c778fc2d37d2e091ad4a1"
	},
	{
		"id": "10992b3f4a84",
		"ts": "2026-08-12T06:10:41.625Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1841895.2,
		"hash": "10992b3f4a84eec7966b1b6d260837ff81547074081430c0dc41f00a11ae3da9"
	},
	{
		"id": "5d77692789cf",
		"ts": "2026-08-12T06:10:41.806Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 231215.25,
		"hash": "5d77692789cf7d251798cf1c60f69874f605eab884a6dc944f31d548fd88250e"
	},
	{
		"id": "ab1637f5d5bd",
		"ts": "2026-08-12T06:10:41.991Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9475739.63,
		"hash": "ab1637f5d5bd3a04a9610491333c4405da7ba4267f13a0d6251550e6bf2c6db2"
	},
	{
		"id": "a76b6d81d8b7",
		"ts": "2026-08-12T06:10:42.192Z",
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
		"liquidityUsd": 707531.5,
		"hash": "a76b6d81d8b7ef28f6fdd151c3705f58dc8b78d35b902b1715dc1897e8a9130e"
	},
	{
		"id": "dade3495d555",
		"ts": "2026-08-12T06:10:42.395Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4375506.34,
		"hash": "dade3495d55539adbf3fe06551fe60a57aba0355897aec0b1db06a56205d1e5c"
	},
	{
		"id": "d46fa1a48438",
		"ts": "2026-08-12T06:10:42.577Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 257432.11,
		"hash": "d46fa1a4843825aab489665bcf7ffffc5ea8acc396d90548bf9f85e4304d36c2"
	},
	{
		"id": "fb814a23e130",
		"ts": "2026-08-12T06:10:42.782Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 826595.57,
		"hash": "fb814a23e13036f393141c48046b6aff4fda13bf4aebe82c033439110c82aa07"
	},
	{
		"id": "c692e9d8f218",
		"ts": "2026-08-12T04:03:39.253Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112027015.45,
		"hash": "c692e9d8f218527999fe9ec1b0cbfa7ad0bebced77c002a7eb866895c5e76f91"
	},
	{
		"id": "eeb5dc6a8f40",
		"ts": "2026-08-12T04:03:39.697Z",
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
		"liquidityUsd": 19583239.24,
		"hash": "eeb5dc6a8f406bdaa93ed6d4843a900193a8804ac51477a7553720fe83098ca9"
	},
	{
		"id": "e4a86ec3f2d3",
		"ts": "2026-08-12T04:03:39.940Z",
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
		"liquidityUsd": 993934.19,
		"hash": "e4a86ec3f2d3a33fbe1a41ff9904129a62c4fe0da7002ded14249996e2f17c54"
	},
	{
		"id": "62d597812c4d",
		"ts": "2026-08-12T04:03:40.169Z",
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
		"liquidityUsd": 26852443.88,
		"hash": "62d597812c4d4afbefc1d6d114cf45fbc5ff84d6c0c6fbbb858bea958417e3f8"
	},
	{
		"id": "9420a5f6d7f2",
		"ts": "2026-08-12T04:03:40.403Z",
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
		"liquidityUsd": 4087735.47,
		"hash": "9420a5f6d7f2fc739a65eb50eab6d4c0636e171d90171ddb9accb21f72c79030"
	},
	{
		"id": "1de272a495b0",
		"ts": "2026-08-12T04:03:40.690Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 917001.29,
		"hash": "1de272a495b063ca99b74a067763b466adaad22951b517ed83df646297ffd6c2"
	},
	{
		"id": "7262c33e0675",
		"ts": "2026-08-12T04:03:40.936Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26852443.88,
		"hash": "7262c33e0675dfda6996df58225355b5e08ece1ef642bef2f16a3f83bbda4b40"
	},
	{
		"id": "8d7e00f41d90",
		"ts": "2026-08-12T04:03:41.185Z",
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
		"liquidityUsd": 4454440.59,
		"hash": "8d7e00f41d90e346cf34aaf7c5642e750ef9aba6c77129b1ea58eb0c81bdc50b"
	},
	{
		"id": "cd7937b26bb3",
		"ts": "2026-08-12T04:03:41.423Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3831025.01,
		"hash": "cd7937b26bb3a611d3ebd48063262a3b2afe7031162862099964223bfccba180"
	},
	{
		"id": "5f7964e4a662",
		"ts": "2026-08-12T04:03:41.680Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 948797.96,
		"hash": "5f7964e4a662dca780ffd0f21acbd12ae2a28dbf2b77c5a10f1a2cfe95ff5b0d"
	},
	{
		"id": "695dbda9a67d",
		"ts": "2026-08-12T04:03:42.104Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2268584.68,
		"hash": "695dbda9a67d133deffe10b8cc5ea8bd6cb967bc593c878699e1056bc227a5f9"
	},
	{
		"id": "5a158197ec71",
		"ts": "2026-08-12T04:03:42.323Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1838964.37,
		"hash": "5a158197ec7157a8dd9d0101cc84e10df7c6668d2211ef8ab87fdededd8792b5"
	},
	{
		"id": "bca631d79e6c",
		"ts": "2026-08-12T04:03:42.536Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 231182.38,
		"hash": "bca631d79e6c299b85af9de4a86c9600d8af1c7694f0fd359aedd56aedcd549e"
	},
	{
		"id": "363ccc8c1a96",
		"ts": "2026-08-12T04:03:42.756Z",
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
		"liquidityUsd": 728545.57,
		"hash": "363ccc8c1a9602ea665b8133bedbfa4ac30b24f056b57bcbc8bb178a7604a7db"
	},
	{
		"id": "115212f5b81b",
		"ts": "2026-08-12T04:03:42.977Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4352333.48,
		"hash": "115212f5b81b30c51823efdc97fba13de80c8bd9232fc87725dcbc364fe51bbf"
	},
	{
		"id": "d70215730b70",
		"ts": "2026-08-12T04:03:43.190Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9331842.28,
		"hash": "d70215730b70013cc53714f54f855aafe2f95c47880c44730206782f42e10bb7"
	},
	{
		"id": "b45983907945",
		"ts": "2026-08-12T04:03:43.410Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 261046.87,
		"hash": "b45983907945b40ef9b8423b4bc473fee2c7478663dff8c7fbca96b098e22c1a"
	},
	{
		"id": "2c85b4d0325a",
		"ts": "2026-08-12T04:03:43.630Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 826938.66,
		"hash": "2c85b4d0325a7da311c0dc92fa562a837f414ab9462f97ab86b77dc30b7a2748"
	},
	{
		"id": "06de6d156b30",
		"ts": "2026-08-12T04:03:43.843Z",
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
		"liquidityUsd": 1208277.58,
		"hash": "06de6d156b30a9625c05008592c8785130232aee64555cc915dfb2792a6cc007"
	},
	{
		"id": "9baae2c654ff",
		"ts": "2026-08-12T01:37:49.097Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112045418.35,
		"hash": "9baae2c654ff6447cec653674780a876ae70746e6924a091f6e0b49b401730fa"
	},
	{
		"id": "5cb4109ab6d2",
		"ts": "2026-08-12T01:37:49.537Z",
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
		"liquidityUsd": 18490853.75,
		"hash": "5cb4109ab6d2dc90ba1ac066b6cb5e8c9a84639293d279a92a7774d469272384"
	},
	{
		"id": "8b7b1ed90df4",
		"ts": "2026-08-12T01:37:49.777Z",
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
		"liquidityUsd": 992570.39,
		"hash": "8b7b1ed90df4c4ed20d486834d16c71432f0db268078c538a9c04e9a9d0f2cc5"
	},
	{
		"id": "f1fd4fd0f801",
		"ts": "2026-08-12T01:37:50.206Z",
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
		"liquidityUsd": 26823330.37,
		"hash": "f1fd4fd0f80189fe0e30f747a7579c4c0a0fc404b1689acdf61788483022ec41"
	},
	{
		"id": "a5f2dea0f770",
		"ts": "2026-08-12T01:37:50.463Z",
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
		"liquidityUsd": 4078706.93,
		"hash": "a5f2dea0f7700a1861373b7a5b9a4c3e324957daac2621a1ba42ed428e25dfa2"
	},
	{
		"id": "a28028a68fae",
		"ts": "2026-08-12T01:37:50.891Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 917001.29,
		"hash": "a28028a68faef98e195f42cfc407f9938b43fd977a07eb50c671617b7bffae7a"
	},
	{
		"id": "c591cc7ea6e2",
		"ts": "2026-08-12T01:37:51.143Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26823330.37,
		"hash": "c591cc7ea6e24f1533a22b000e16d114f7ab44be1efe3ec9111c2a1766dcac5b"
	},
	{
		"id": "f96d56c7968e",
		"ts": "2026-08-12T01:37:51.403Z",
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
		"liquidityUsd": 4440796.6,
		"hash": "f96d56c7968e1e8c5ff3bdf02b1daefb03b1ff95e78ee26c129b22533af33d31"
	},
	{
		"id": "9874da1db778",
		"ts": "2026-08-12T01:37:51.632Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4006103.81,
		"hash": "9874da1db778a4c10e69fca51ead251e531dff7c9a169522bf765714d887b0df"
	},
	{
		"id": "b6213d55f2b7",
		"ts": "2026-08-12T01:37:51.868Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 972942.58,
		"hash": "b6213d55f2b77ebb03a4dd446532ab5f89d1cfdba3c9923aae735990e6df90ae"
	},
	{
		"id": "33caf095a6c4",
		"ts": "2026-08-12T01:37:52.092Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2187823.77,
		"hash": "33caf095a6c409ed8b8b5fe016e6e98045a0700f842cb3c50f985c56f6aa0669"
	},
	{
		"id": "bbeed4a1e61c",
		"ts": "2026-08-12T01:37:52.308Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1834379.66,
		"hash": "bbeed4a1e61c420de92e4f8937d37d6e00d12ec30311fcd2d601a96bdf8d6e99"
	},
	{
		"id": "e5db9244ef9d",
		"ts": "2026-08-12T01:37:52.529Z",
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
		"liquidityUsd": 719793.86,
		"hash": "e5db9244ef9d874cd27e35d4796eddd1b00d6a766f8ca543f2f33b31c7f09ce7"
	},
	{
		"id": "2bd491fa249b",
		"ts": "2026-08-12T01:37:52.752Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4336899.69,
		"hash": "2bd491fa249bca4fa300dd958d1b43d4d3b393532d9b589c42a4b5370004411d"
	},
	{
		"id": "774f8f9604d4",
		"ts": "2026-08-12T01:37:52.973Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 236740.67,
		"hash": "774f8f9604d45e81ea8b1b801c96b13ba15f55c21a2e486e2fb18478d98226cf"
	},
	{
		"id": "6726709618d0",
		"ts": "2026-08-12T01:37:53.263Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9295613.93,
		"hash": "6726709618d079f26e3ba5f53aedac204e5270cea263c692030fde5d3e242bb4"
	},
	{
		"id": "644ffc533269",
		"ts": "2026-08-12T01:37:53.486Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 257404.02,
		"hash": "644ffc533269446fdc9a947cd660f3427d4ca15d1712e5bf2c9814e07ada255e"
	},
	{
		"id": "2ed66484e1fe",
		"ts": "2026-08-12T01:37:53.707Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 825828.41,
		"hash": "2ed66484e1fe451c83c2d5529d1ce222d907db985fc1099b26eef55ab8973cdf"
	},
	{
		"id": "1bc22661b55e",
		"ts": "2026-08-12T01:37:53.922Z",
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
		"liquidityUsd": 1208697.81,
		"hash": "1bc22661b55e0c0b704e194dac10172d1b9316f99c331a8addc5c4f2306847b7"
	},
	{
		"id": "cf6309a39d45",
		"ts": "2026-08-11T23:35:26.158Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112088443.28,
		"hash": "cf6309a39d4504da6727f6981899b2eb2b2968cd74b215d31acc471b01e0ed49"
	},
	{
		"id": "ccaf110fb597",
		"ts": "2026-08-11T23:35:26.484Z",
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
		"liquidityUsd": 18232190.05,
		"hash": "ccaf110fb597cf1d6416acba9146df852d7be90a075fdcf0385a86a796497891"
	},
	{
		"id": "6125aeddc65b",
		"ts": "2026-08-11T23:35:26.679Z",
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
		"liquidityUsd": 995366.7,
		"hash": "6125aeddc65b03f312784ce974392deb937baed6943db283090c7e74bb8ab103"
	},
	{
		"id": "f368309a12e9",
		"ts": "2026-08-11T23:35:26.994Z",
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
		"liquidityUsd": 26821601.18,
		"hash": "f368309a12e94658a8d0582eb2f6fc732ba83263f26cbb9e9b17ba7512102cd2"
	},
	{
		"id": "499914145f8a",
		"ts": "2026-08-11T23:35:27.193Z",
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
		"liquidityUsd": 4071451.91,
		"hash": "499914145f8a691aebbbf548b79bcfdb7f11d2598030351198a9d16bd2238440"
	},
	{
		"id": "6b5653d600e0",
		"ts": "2026-08-11T23:35:27.373Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 907197.44,
		"hash": "6b5653d600e0eea921b91e909c8e6c7c88c5043929dadd9db25f8308d078d5d9"
	},
	{
		"id": "99682e8efb4e",
		"ts": "2026-08-11T23:35:27.566Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26821601.18,
		"hash": "99682e8efb4e0ecc42ba5613618e743f67a78b3927ad5210c89544796d15e35b"
	},
	{
		"id": "5784d8d5592a",
		"ts": "2026-08-11T23:35:27.769Z",
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
		"liquidityUsd": 4440252.5,
		"hash": "5784d8d5592a3d6e567feed87f9773ed62839b626d1d1ce3dd8bdb0d31edd479"
	},
	{
		"id": "8b226bf15ab5",
		"ts": "2026-08-11T23:35:27.958Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4010886.22,
		"hash": "8b226bf15ab592110602a6ac96207917d22d09f93fa2b7ac3da15b5e1e69ce22"
	},
	{
		"id": "f7051a388f23",
		"ts": "2026-08-11T23:35:28.171Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 974738.78,
		"hash": "f7051a388f23f98e3f52546dcc72b93e83a99cd73880550c99406ce442860e7c"
	},
	{
		"id": "0bde3fcb9edb",
		"ts": "2026-08-11T23:35:28.376Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2149695.55,
		"hash": "0bde3fcb9edb2987dd9fe46dbdbd862af00efd35deb220da7b720ee7bf795e7a"
	},
	{
		"id": "c581730ef17a",
		"ts": "2026-08-11T23:35:28.573Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9253052.07,
		"hash": "c581730ef17a8542cd59fc2852c39925b0295263126a206d7045928670a5ba06"
	},
	{
		"id": "ca470075c205",
		"ts": "2026-08-11T23:35:28.769Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1830541.1,
		"hash": "ca470075c2052b1e6998dadaf6229c53ac102cfa747fe1d2fe17908165f5caea"
	},
	{
		"id": "5987aab0a6c7",
		"ts": "2026-08-11T23:35:28.960Z",
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
		"liquidityUsd": 716927.75,
		"hash": "5987aab0a6c73bcc1a891c76adb3572a7651c73ba36884492ef7faa7c17be4d5"
	},
	{
		"id": "8747dbac898f",
		"ts": "2026-08-11T23:35:29.154Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 231190.01,
		"hash": "8747dbac898f0c39b03fb23844c850b9e26f633f9c288f024e4d6290a49c29b6"
	},
	{
		"id": "d612d977e842",
		"ts": "2026-08-11T23:35:29.346Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 251280.84,
		"hash": "d612d977e84265bce5e201bae69998a85087fd313b0cee0e5f96135f0dfb18eb"
	},
	{
		"id": "cea7f01fc27c",
		"ts": "2026-08-11T23:35:29.570Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 824522.2,
		"hash": "cea7f01fc27c59096ea86b1d1b966f40a0cf0d5bdd93dab22c5d83f4218fd560"
	},
	{
		"id": "7474449b2fcf",
		"ts": "2026-08-11T23:35:29.775Z",
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
		"liquidityUsd": 1204053.24,
		"hash": "7474449b2fcfc8adfedd63b02c3fa66b781e2c6c9134ed5d33e135204bbe0514"
	},
	{
		"id": "778caeda3820",
		"ts": "2026-08-11T22:37:12.341Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112085809.78,
		"hash": "778caeda382034852602ff2309e3de282d3eff736ce76233c939e91faf6f373e"
	},
	{
		"id": "7d91f5157d80",
		"ts": "2026-08-11T22:37:12.713Z",
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
		"liquidityUsd": 18056325.81,
		"hash": "7d91f5157d80e1a85a5d08e51f1f7907c7d6a2b1990f14d89460f5c331a475fb"
	},
	{
		"id": "7fa21deebf53",
		"ts": "2026-08-11T22:37:13.047Z",
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
		"liquidityUsd": 996915.24,
		"hash": "7fa21deebf5344bb174516d8aefb730daca3fcfb7aac29514f97c473b27cda4d"
	},
	{
		"id": "1234a9df9f17",
		"ts": "2026-08-11T22:37:13.378Z",
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
		"liquidityUsd": 26822578.18,
		"hash": "1234a9df9f177584a3f634547f33c2ed4a7c5420ff689a3af90d0f079d3318e6"
	},
	{
		"id": "42b6e156ef8d",
		"ts": "2026-08-11T22:37:13.573Z",
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
		"liquidityUsd": 4083109.56,
		"hash": "42b6e156ef8d1f28b86931a31b3a1b3d1afc2a974f6f9075c5c5a1d799983570"
	},
	{
		"id": "05681a73bce6",
		"ts": "2026-08-11T22:37:13.769Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 910124.81,
		"hash": "05681a73bce66cb4a63694e7ad00cbe9d6ec51ed13894b521f220393b49bb26b"
	},
	{
		"id": "b1f7fa6508ad",
		"ts": "2026-08-11T22:37:13.952Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26822578.18,
		"hash": "b1f7fa6508ad4bf8ee93531bd5827014122935f1f608ec8229e9937e8eca691d"
	},
	{
		"id": "491a8acad73a",
		"ts": "2026-08-11T22:37:14.303Z",
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
		"liquidityUsd": 4482571.93,
		"hash": "491a8acad73a36657b3adf36dd4d07bc73d602339029519a765935e2b65a83af"
	},
	{
		"id": "c1c76dd6fb88",
		"ts": "2026-08-11T22:37:14.490Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3958373.29,
		"hash": "c1c76dd6fb88e436bcec8528bd4a5c36fdfde06c7dede8a0f42cd6a536129218"
	},
	{
		"id": "75f4fe8ce76e",
		"ts": "2026-08-11T22:37:14.700Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 969955.13,
		"hash": "75f4fe8ce76e5278da51542457d1367294d201489006d33635944570b5c34e04"
	},
	{
		"id": "95ed02a4fdd3",
		"ts": "2026-08-11T22:37:14.897Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2157727.22,
		"hash": "95ed02a4fdd3adf521fcabab6eb7c0344c108f6a15ccf2f2e60090a15009e6b6"
	},
	{
		"id": "3e531d982a92",
		"ts": "2026-08-11T22:37:15.097Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9258492.33,
		"hash": "3e531d982a922da189f4cc3f8858a0ce1815563151d60e03ba84307b06cf4c6a"
	},
	{
		"id": "98cd1618f843",
		"ts": "2026-08-11T22:37:15.301Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1837008.05,
		"hash": "98cd1618f843513185ddfc5edb64a44d80a4126513bac1223816b987491c0ac9"
	},
	{
		"id": "dc8d55f11b53",
		"ts": "2026-08-11T22:37:15.491Z",
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
		"liquidityUsd": 716248.29,
		"hash": "dc8d55f11b53d3a87f6b382d313694600a005ec09839e8046ab418aba7fe9e2a"
	},
	{
		"id": "1e5d435e8e5e",
		"ts": "2026-08-11T22:37:15.691Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 252474.23,
		"hash": "1e5d435e8e5e2b385ec79f24142823ac2c0e73028b6254703615fb5457eb3cec"
	},
	{
		"id": "ea4bba6f5443",
		"ts": "2026-08-11T22:37:15.890Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 224376.86,
		"hash": "ea4bba6f5443d0a697db9b7106d9b818aa09769bc67de066f92378a87fe9ec6b"
	},
	{
		"id": "0b4128a24ea7",
		"ts": "2026-08-11T22:37:16.093Z",
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
		"liquidityUsd": 1201863.74,
		"hash": "0b4128a24ea7aead9feb0d946df7d9319c0bd1458ce3323b1ae055c344a4cfa4"
	},
	{
		"id": "9f10fc090c96",
		"ts": "2026-08-11T22:37:16.323Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 72771.8,
		"hash": "9f10fc090c96c843d55b06a7b2c4202f2c9204b348fb002b93df510cc5f6475a"
	},
	{
		"id": "438a04cddb76",
		"ts": "2026-08-11T21:41:28.508Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112009835.08,
		"hash": "438a04cddb76eeea8646329ec362d82fe09348ba3ec5aa526a4d0e0bd3ab5ae5"
	},
	{
		"id": "467cb39141d5",
		"ts": "2026-08-11T21:41:28.897Z",
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
		"liquidityUsd": 18034576.6,
		"hash": "467cb39141d534c8227e2d10ad75519cc1e7678e68ffa1e85fc5002a97936c9f"
	},
	{
		"id": "6c9e24e30720",
		"ts": "2026-08-11T21:41:29.255Z",
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
		"liquidityUsd": 1021808.74,
		"hash": "6c9e24e3072043928393e3c30a7c7cbbdb79be387967dc214d3a00a6c1a93439"
	},
	{
		"id": "cf0f97b151ae",
		"ts": "2026-08-11T21:41:29.465Z",
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
		"liquidityUsd": 26865048.04,
		"hash": "cf0f97b151ae34bd4ffb637003926e175402a6ecef191a18c635fe4ea0e76694"
	},
	{
		"id": "e55ca0535b59",
		"ts": "2026-08-11T21:41:29.826Z",
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
		"liquidityUsd": 4050746.89,
		"hash": "e55ca0535b59e14afd72e5e06e5b1e574ddd781b508d51c67435b386413cacb5"
	},
	{
		"id": "dcf1d05ce0ae",
		"ts": "2026-08-11T21:41:30.036Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904051.78,
		"hash": "dcf1d05ce0ae78bafb6de61c5a9960b41c5f597d15ff6248dd65dc2ad3298de8"
	},
	{
		"id": "aadc77ab466f",
		"ts": "2026-08-11T21:41:30.234Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26865048.04,
		"hash": "aadc77ab466fa343962347a5f5b940dcae8616cff4c2c501266a3e07c1b0bdee"
	},
	{
		"id": "b91e6e4cc702",
		"ts": "2026-08-11T21:41:30.445Z",
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
		"liquidityUsd": 4475646.22,
		"hash": "b91e6e4cc702b6ab7901fc5a2a1c5be5b01a9f2c257555e46f08bff0f6b9a2ab"
	},
	{
		"id": "6e9be7c955e3",
		"ts": "2026-08-11T21:41:30.651Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3967292.45,
		"hash": "6e9be7c955e3f1821ba60242082a3ece9c31f8bda92b9c864aad43c1c769b733"
	},
	{
		"id": "e384b9549965",
		"ts": "2026-08-11T21:41:30.855Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 968067.75,
		"hash": "e384b954996585f30e25fc48f8ad0ef15fed0fb6c98fcb2eda1ad88fe68e7eb8"
	},
	{
		"id": "85441469f2e2",
		"ts": "2026-08-11T21:41:31.065Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2138361.62,
		"hash": "85441469f2e2aa7dfe9ff0419be3e1945ad8a7cafc0d44d29e740444780d14ec"
	},
	{
		"id": "051a5ab09fad",
		"ts": "2026-08-11T21:41:31.258Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9246248.55,
		"hash": "051a5ab09fad6ade961c8a72815031f2718209952c7b503c87f94df92f123deb"
	},
	{
		"id": "3bf39476d5b4",
		"ts": "2026-08-11T21:41:31.597Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 251826.03,
		"hash": "3bf39476d5b4b991c9cac36a1b31352d30079d6adb1a7dddd5cd3a6d99391433"
	},
	{
		"id": "212dd069bc51",
		"ts": "2026-08-11T21:41:31.783Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1828902.67,
		"hash": "212dd069bc51b78c2e9d2dfe4b17fc7334792774e340ce5e5f46de43ee856bdc"
	},
	{
		"id": "72a9460b8d1e",
		"ts": "2026-08-11T21:41:31.981Z",
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
		"liquidityUsd": 735673.99,
		"hash": "72a9460b8d1ea6f6fee996cc1b3085dba900f7deed9361381732a3afd58ea59b"
	},
	{
		"id": "deb8442ac499",
		"ts": "2026-08-11T21:41:32.179Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 229214.22,
		"hash": "deb8442ac499f82a401a315e5557c0b4cd6093b5b3bb1b98ae6be6aaeb80dbbb"
	},
	{
		"id": "8e9adbbfd983",
		"ts": "2026-08-11T21:41:32.365Z",
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
		"liquidityUsd": 1207945.85,
		"hash": "8e9adbbfd983403b472359e2574e76043494746d5beef571cefa071939be655e"
	},
	{
		"id": "0f7ccda9e1b6",
		"ts": "2026-08-11T21:41:32.553Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4343814.03,
		"hash": "0f7ccda9e1b6388bae98cfc7a6e81bde4f62f7f462d3ec36c3c16d98afbd0ee2"
	},
	{
		"id": "ea5a32a86dac",
		"ts": "2026-08-11T20:38:44.577Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111985781.72,
		"hash": "ea5a32a86dac53bc966305ae796c13da765f7faab60bcd85b8cf9d3070e25943"
	},
	{
		"id": "e08034c3a911",
		"ts": "2026-08-11T20:38:45.028Z",
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
		"liquidityUsd": 17012689.39,
		"hash": "e08034c3a911108667cca04e191d66252d08cd382d41c35b03be796c74c30720"
	},
	{
		"id": "5fd813fa00c1",
		"ts": "2026-08-11T20:38:45.273Z",
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
		"liquidityUsd": 1021808.74,
		"hash": "5fd813fa00c13d7e4be8090201154067a577319b5c215e7fd2badc41e47c8772"
	},
	{
		"id": "946c9b931cec",
		"ts": "2026-08-11T20:38:45.514Z",
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
		"liquidityUsd": 26888150.8,
		"hash": "946c9b931cec5b56ab15cf6d9340790e2d2d4bb77769351be75d643c0b84e902"
	},
	{
		"id": "2b43b15e8aec",
		"ts": "2026-08-11T20:38:45.748Z",
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
		"liquidityUsd": 4043261.27,
		"hash": "2b43b15e8aec557e2b74ca358095d2867d518a8ca45b7d9ff81c65c18d2533e0"
	},
	{
		"id": "019940426d1f",
		"ts": "2026-08-11T20:38:45.989Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904051.78,
		"hash": "019940426d1f4f50014100c0cdfe812c55c91c86903a56c26064ede68e251720"
	},
	{
		"id": "35150e43d984",
		"ts": "2026-08-11T20:38:46.238Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26888150.8,
		"hash": "35150e43d98453d50c76f072ff9c2017a09baf4810ece36f94482f37205c59b3"
	},
	{
		"id": "8e56273fccab",
		"ts": "2026-08-11T20:38:46.481Z",
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
		"liquidityUsd": 4473985.7,
		"hash": "8e56273fccabdde0786dc0b1d363fc46a1ee2323250a446f008ed5eb556122a7"
	},
	{
		"id": "1e28f614b5c1",
		"ts": "2026-08-11T20:38:46.718Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4116319.62,
		"hash": "1e28f614b5c19b5b708aa24216c8e18f9b5dfbee833b824efa1549f127612a1a"
	},
	{
		"id": "e93cb2a542da",
		"ts": "2026-08-11T20:38:46.957Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 967101.63,
		"hash": "e93cb2a542dac9c9433450323a87e2e5b19f01e01c167d5387a2c32ff7761ebe"
	},
	{
		"id": "e3e8ff0cdc83",
		"ts": "2026-08-11T20:38:47.184Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2132546.55,
		"hash": "e3e8ff0cdc832173c80049c4635f2d75bc47d760e71ba356709eea699bc87ec5"
	},
	{
		"id": "600cc9bb053f",
		"ts": "2026-08-11T20:38:47.409Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9262119.94,
		"hash": "600cc9bb053f759bcdaa6d0b2c02b4acb157b8dfa166b320d84e1f8d20e3bef9"
	},
	{
		"id": "07f9256169ec",
		"ts": "2026-08-11T20:38:47.627Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 251821.3,
		"hash": "07f9256169ec304a9d823c82ecf2670fb1d2678f612cab382be1651f15daa212"
	},
	{
		"id": "35c7fecc38f9",
		"ts": "2026-08-11T20:38:47.881Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1832464.59,
		"hash": "35c7fecc38f9c9236d723beb10abadf8a9a6f1a076bd055b84333d7176c9dc1c"
	},
	{
		"id": "6002e1f76ca9",
		"ts": "2026-08-11T20:38:48.105Z",
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
		"liquidityUsd": 734410.08,
		"hash": "6002e1f76ca9525f07856370581f1744b3bcdbb287cf42821df727a796abb8be"
	},
	{
		"id": "89063422923c",
		"ts": "2026-08-11T20:38:48.324Z",
		"symbol": "noice",
		"token": "0x9Cb41FD9dC6891BAe8187029461bfAADF6CC0C69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 228447.62,
		"hash": "89063422923c29bec882d4cee78dd8792ea2fba944333b9302335faa0e014475"
	},
	{
		"id": "a12ca79fba37",
		"ts": "2026-08-11T20:38:48.548Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4359815.35,
		"hash": "a12ca79fba37ee6f511c3120e83a55ab4fe5530ea9d132617b85865f5e0e8ce1"
	},
	{
		"id": "a2557a8ead70",
		"ts": "2026-08-11T19:08:40.081Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111339888.17,
		"hash": "a2557a8ead7085848448b5006342781c30422d5b2f274b67cb3cd9d2c1ddd4fd"
	},
	{
		"id": "e8bdc54cb9e2",
		"ts": "2026-08-11T19:08:40.334Z",
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
		"liquidityUsd": 13826471.8,
		"hash": "e8bdc54cb9e26e71584770475542bab031cc2656cd45b98104a66d3baf76eeca"
	},
	{
		"id": "40874f2dea7c",
		"ts": "2026-08-11T19:08:40.586Z",
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
		"liquidityUsd": 1021661.18,
		"hash": "40874f2dea7c4c45518c924323014005a10fbb1b7da48908f52b18c983112705"
	},
	{
		"id": "f07eadbb956b",
		"ts": "2026-08-11T19:08:40.832Z",
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
		"liquidityUsd": 26788466.56,
		"hash": "f07eadbb956bcd59f4bd6276485e2d60dd13e8b0fab959a14020a78b6558f43c"
	},
	{
		"id": "0c2f13040d74",
		"ts": "2026-08-11T19:08:41.286Z",
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
		"liquidityUsd": 4001432.02,
		"hash": "0c2f13040d74dd48780b2ef08e4f21fb3c00cf2bdacab07d4589f791804e06b8"
	},
	{
		"id": "d4ddfb335ed8",
		"ts": "2026-08-11T19:08:41.527Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904339.32,
		"hash": "d4ddfb335ed8560d43876a4b2e71f1bf003a2a6c867dd5a35749339ef597c102"
	},
	{
		"id": "bdb148d4a658",
		"ts": "2026-08-11T19:08:41.762Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26788466.56,
		"hash": "bdb148d4a658d36b67752933d4d915b06fc42caa53d658cdf27064f515d8517b"
	},
	{
		"id": "e3e264f33305",
		"ts": "2026-08-11T19:08:42.001Z",
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
		"liquidityUsd": 4436795.88,
		"hash": "e3e264f33305b09d21240d3578ffedcec56dfffb2402d3af765ee14e00514689"
	},
	{
		"id": "fc6aefcfb36e",
		"ts": "2026-08-11T19:08:42.246Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4110036.76,
		"hash": "fc6aefcfb36ea33582a108628a9d8548c3663b8894a8bc211f16544ce4eab13e"
	},
	{
		"id": "7c00b5660c15",
		"ts": "2026-08-11T19:08:42.482Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 967437.2,
		"hash": "7c00b5660c153d9f228af163124650ccc0c39ae449958908e1bf73853bdeca59"
	},
	{
		"id": "f7edf7dbfb68",
		"ts": "2026-08-11T19:08:42.698Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2085888.96,
		"hash": "f7edf7dbfb68ea06c4f1760fdc1c84c87f003425b9528533e7827f2aa6ba0727"
	},
	{
		"id": "9c3a990bf595",
		"ts": "2026-08-11T19:08:42.916Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 252161.51,
		"hash": "9c3a990bf5952ba6132f614c7b49c6fe96c4d90b8a5379cfd851c2050e885302"
	},
	{
		"id": "3e0dc2f5fd0a",
		"ts": "2026-08-11T19:08:43.139Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9179179.59,
		"hash": "3e0dc2f5fd0a49b25df81cf9518cbee2d70151b8cf2bf46340f124ba373e1d54"
	},
	{
		"id": "261e73c84d3c",
		"ts": "2026-08-11T19:08:43.366Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1824471.78,
		"hash": "261e73c84d3c81f4468bf0fc8b1c3b8434133366c7368b3fb9769170df1745ad"
	},
	{
		"id": "02ccf56e7edf",
		"ts": "2026-08-11T19:08:43.586Z",
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
		"liquidityUsd": 705064.32,
		"hash": "02ccf56e7edf3ee8236db3f3397c9a7386573011ebeca6115dcd34a387577244"
	},
	{
		"id": "cf89f3e00fcc",
		"ts": "2026-08-11T19:08:43.803Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4326322.53,
		"hash": "cf89f3e00fcc48c662b6baf68e67eb82a8f3e4d8aa13a1263b45ead627478ae8"
	}
]
