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
	"updatedAt": "2026-06-30T23:08:29.931Z",
	"tokensScored": 811,
	"verdictsIssued": 811,
	"safe": 715,
	"risky": 76,
	"likelyRug": 20,
	"ticks": 62
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "c11026611fff",
		"ts": "2026-06-30T23:08:24.406Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95802342.47,
		"hash": "c11026611fff746adf9c14ccbf31bd069f5688a16ce7e8bd506b2e68a7ed347e"
	},
	{
		"id": "4640daf9130e",
		"ts": "2026-06-30T23:08:25.130Z",
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
		"liquidityUsd": 12868633.99,
		"hash": "4640daf9130e3bf676593fd868a7ab672da3ac25e00d1ba03fb20dda4a01738b"
	},
	{
		"id": "d080fa0f3657",
		"ts": "2026-06-30T23:08:25.676Z",
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
		"liquidityUsd": 1301530.04,
		"hash": "d080fa0f36570b2b5b8979542ef3e396ce6958d47ddaa6d91da42e7cc64d505e"
	},
	{
		"id": "3b86fd1d512d",
		"ts": "2026-06-30T23:08:26.160Z",
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
		"liquidityUsd": 26044279.86,
		"hash": "3b86fd1d512dec302c06d78a320248e4f4f3cf5001918a037b79b48beec51139"
	},
	{
		"id": "1e45f919282a",
		"ts": "2026-06-30T23:08:26.663Z",
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
		"liquidityUsd": 3992781.61,
		"hash": "1e45f919282aad873d2cfe2aa731c6d1dfd8c18ef7f5e2f9949aeacaf014e611"
	},
	{
		"id": "cdd3626a4203",
		"ts": "2026-06-30T23:08:26.925Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 898764.06,
		"hash": "cdd3626a420371fa34ca1c491548b6441f3304a5fb14de13ab16d5585b961506"
	},
	{
		"id": "a5627b1dfc44",
		"ts": "2026-06-30T23:08:27.188Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26044279.86,
		"hash": "a5627b1dfc4444d76efefff12058f5442ad3d7cb9a36c5ed7241f7d69b69a6e8"
	},
	{
		"id": "5805393a591b",
		"ts": "2026-06-30T23:08:27.677Z",
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
		"liquidityUsd": 2158658,
		"hash": "5805393a591bb733516a51be7d8dd7d4bd09f7fe08fc3b0bd25dde54a36cfda6"
	},
	{
		"id": "b43e332e2660",
		"ts": "2026-06-30T23:08:27.936Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9171823.95,
		"hash": "b43e332e2660722088e1c8e4b7981824c8442257ef63b0180de87bbc747180a9"
	},
	{
		"id": "db566fab7ccb",
		"ts": "2026-06-30T23:08:28.188Z",
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
		"liquidityUsd": 4236804.75,
		"hash": "db566fab7ccb702f883b55497db73b3fa1239bce73f1cb15e16ca8b047eb7311"
	},
	{
		"id": "29d3d5d5df53",
		"ts": "2026-06-30T23:08:28.426Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 79827.66,
		"hash": "29d3d5d5df535c29b94ad812c146440b2cdfaaedf1a3424ca7838b9e45785abf"
	},
	{
		"id": "aa4f12625e10",
		"ts": "2026-06-30T23:08:28.733Z",
		"symbol": "CX",
		"token": "0x000000000000012DeF132E61759048bE5b5C6033",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 457884.44,
		"hash": "aa4f12625e10caca1274fd4c60d627fba1518f637986fae7c2d2911a4526999a"
	},
	{
		"id": "8df4f0f17e86",
		"ts": "2026-06-30T23:08:28.967Z",
		"symbol": "OpenClaw",
		"token": "0x9ccd163a68e56D1079D16B25fBd69d464f657b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 215587.75,
		"hash": "8df4f0f17e866fb90927d245af0ffbee1a035e9edc3c0253813c8002e060b98e"
	},
	{
		"id": "6e9d47f83036",
		"ts": "2026-06-30T23:08:29.205Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 971068.98,
		"hash": "6e9d47f8303634cecef9bf9ab47455192ae689a397bf00c2aa3294e2215f987e"
	},
	{
		"id": "a61e4d4fff4a",
		"ts": "2026-06-30T23:08:29.439Z",
		"symbol": "$OLIVIA2.0",
		"token": "0x8185Eaf46136a3f095C60FaCD97ecA1bfC2f38F6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4586892.77,
		"hash": "a61e4d4fff4ae608a6b193bc4ed42fff754b2abb3c690f6de236f1bb1a1792bd"
	},
	{
		"id": "d4d165901f12",
		"ts": "2026-06-30T23:08:29.689Z",
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
		"liquidityUsd": 928534.26,
		"hash": "d4d165901f1244922d76fdb79406fa040cce68e5ba8198bcfe159bda5b64436d"
	},
	{
		"id": "dbd1e86809b2",
		"ts": "2026-06-30T23:08:29.931Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 366785.32,
		"hash": "dbd1e86809b22a1e35449290b9bff4ec3ca39eaa88a8419a167a15522ce59935"
	},
	{
		"id": "27d82344cb99",
		"ts": "2026-06-30T21:25:39.366Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95787348.6,
		"hash": "27d82344cb99754c8df135acfac31dd05aa8d19660da6d63ded736b6de86246e"
	},
	{
		"id": "86ce4d30a226",
		"ts": "2026-06-30T21:25:39.865Z",
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
		"liquidityUsd": 12893119.93,
		"hash": "86ce4d30a226daded1b76bc940ea7c387c61fcc01ea9f347e70ba3295105babd"
	},
	{
		"id": "17c61e2e5820",
		"ts": "2026-06-30T21:25:40.135Z",
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
		"liquidityUsd": 1327381.18,
		"hash": "17c61e2e5820d6e8a0989457f33b574bee029ca63a5cc294a95de0ba09bf6041"
	},
	{
		"id": "1eb9c09873a9",
		"ts": "2026-06-30T21:25:40.391Z",
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
		"liquidityUsd": 26010679.18,
		"hash": "1eb9c09873a9d21ea002fb20303ab7eb40a72ff6a57cddb714595e144818b197"
	},
	{
		"id": "089100115df1",
		"ts": "2026-06-30T21:25:40.656Z",
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
		"liquidityUsd": 4005363.07,
		"hash": "089100115df11d383dd35a789e49e0db4c5b0e0fddbe15467e4f4eaa747c0827"
	},
	{
		"id": "1513babd4818",
		"ts": "2026-06-30T21:25:40.924Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 898789.88,
		"hash": "1513babd4818fddf8c4d38bcebbf8785218c084721b261a665e2b6c6fb047176"
	},
	{
		"id": "ef47cace2462",
		"ts": "2026-06-30T21:25:41.198Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26010679.18,
		"hash": "ef47cace2462fa76d7563712ccefcfc5f4366134d4ca5aa7f609dce921aed16e"
	},
	{
		"id": "39fb550e1f20",
		"ts": "2026-06-30T21:25:41.449Z",
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
		"liquidityUsd": 2163449.29,
		"hash": "39fb550e1f20306320080c4e50564fcf22c9fec81517648433bbf3920a84c750"
	},
	{
		"id": "17b6b5984f56",
		"ts": "2026-06-30T21:25:41.714Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9243137.32,
		"hash": "17b6b5984f56c55b72ae53885bdf95a41d9935a15ac03e1401d8abb14d02e5b5"
	},
	{
		"id": "f7490f3a1a6e",
		"ts": "2026-06-30T21:25:41.983Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 74292.77,
		"hash": "f7490f3a1a6e0742762fd61ed6e6639f9d41aa2d7eaa39d3eca2024200e2135d"
	},
	{
		"id": "e632852048e6",
		"ts": "2026-06-30T21:25:42.242Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4343349.78,
		"hash": "e632852048e6ecb068e1d82d6f08bc08c9ef052deff3e1668e265d2bafed8868"
	},
	{
		"id": "97c64b187fd1",
		"ts": "2026-06-30T21:25:42.481Z",
		"symbol": "CX",
		"token": "0x000000000000012DeF132E61759048bE5b5C6033",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 454978.02,
		"hash": "97c64b187fd1fca21cac6ac8abde0d05ace29b2f0b5c71578db00c1204b178f7"
	},
	{
		"id": "279d939319e4",
		"ts": "2026-06-30T21:25:42.730Z",
		"symbol": "OpenClaw",
		"token": "0x9ccd163a68e56D1079D16B25fBd69d464f657b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 111655.94,
		"hash": "279d939319e4b27a105a1af0d3747bf973f38cc12743d0901b875fd5c31bcb82"
	},
	{
		"id": "6cea3b9fbdb0",
		"ts": "2026-06-30T21:25:42.982Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 943032.79,
		"hash": "6cea3b9fbdb0f9976a39ab011acf460e418ca8e1867b9955e94dfa5b0f94ad24"
	},
	{
		"id": "551055470f1b",
		"ts": "2026-06-30T21:25:43.244Z",
		"symbol": "$OLIVIA2.0",
		"token": "0x8185Eaf46136a3f095C60FaCD97ecA1bfC2f38F6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4545932.53,
		"hash": "551055470f1bb24ad1d857da9192a143315c7820ad6d522cd11185c236674346"
	},
	{
		"id": "a4a6ec79de1f",
		"ts": "2026-06-30T21:25:43.484Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 366464.72,
		"hash": "a4a6ec79de1f57ae84df277be8269bd0886978df752298ce8d48b7294c27bec7"
	},
	{
		"id": "cceb4d2c57e4",
		"ts": "2026-06-30T21:25:43.735Z",
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
		"liquidityUsd": 944133.81,
		"hash": "cceb4d2c57e4d86d5015b22e6159fb395ba2d5ad18e1cb4fe937471e840e1ffd"
	},
	{
		"id": "52e2119cb040",
		"ts": "2026-06-30T19:50:34.538Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95958396.77,
		"hash": "52e2119cb0400da901d075a0a84658adc5003593a3664867130eece01f103047"
	},
	{
		"id": "9499da101712",
		"ts": "2026-06-30T19:50:34.802Z",
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
		"liquidityUsd": 13264974.14,
		"hash": "9499da101712af7699780f8ba83c9d9470d5b38f5f8ebe1dff80a3de79842451"
	},
	{
		"id": "d664a5e5a640",
		"ts": "2026-06-30T19:50:35.286Z",
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
		"liquidityUsd": 1332843.25,
		"hash": "d664a5e5a640955b3894d41d528a9f1c2e269298e95385b36d82b2351d7b6747"
	},
	{
		"id": "ae225f24a2b1",
		"ts": "2026-06-30T19:50:35.559Z",
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
		"liquidityUsd": 25924926.48,
		"hash": "ae225f24a2b1084a7ee308eec36f09a99e9a6c6bbf02ee52f089c3176d61c170"
	},
	{
		"id": "2e79a359b293",
		"ts": "2026-06-30T19:50:35.818Z",
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
		"liquidityUsd": 4026097.43,
		"hash": "2e79a359b293631335b46f6b6fc461043bad38b115fafa0f025d7fe49308f782"
	},
	{
		"id": "d96fb1c58d36",
		"ts": "2026-06-30T19:50:36.076Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 898496.4,
		"hash": "d96fb1c58d366e998346f6bd828500266212786f25e72ddf118c7cf4af0da5d1"
	},
	{
		"id": "57111d3fd064",
		"ts": "2026-06-30T19:50:36.348Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25924926.48,
		"hash": "57111d3fd06451bda6d65d51e97ebed7c27bfa609773b481f7815a99b10413b1"
	},
	{
		"id": "64ae18adfd4e",
		"ts": "2026-06-30T19:50:36.610Z",
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
		"liquidityUsd": 2173652.1,
		"hash": "64ae18adfd4e52834558f5d51c8898c7e0837c93491cbffd58e925d71bfc5c47"
	},
	{
		"id": "ad2fbc704c6a",
		"ts": "2026-06-30T19:50:36.870Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 8842240.33,
		"hash": "ad2fbc704c6a0aa478cfbd06ef90356c0c5de9cb1e6c417d565c180c90e6e931"
	},
	{
		"id": "26f597fed80b",
		"ts": "2026-06-30T19:50:37.129Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 74888.72,
		"hash": "26f597fed80b180b50737fe281140b7d5f987ee8cdd4765fdc0ca6b65b52b5fb"
	},
	{
		"id": "9c9358d35797",
		"ts": "2026-06-30T19:50:37.372Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4316578.13,
		"hash": "9c9358d357970b429b59864e33319aaf03cf2470c9712076de7949f940b0b2a0"
	},
	{
		"id": "9a87fffd31d6",
		"ts": "2026-06-30T19:50:37.616Z",
		"symbol": "CX",
		"token": "0x000000000000012DeF132E61759048bE5b5C6033",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 450961.04,
		"hash": "9a87fffd31d63c82c93b8a5c24544a81f97230bf1f0bbab1e8ae8caae11a03d9"
	},
	{
		"id": "114c20397eab",
		"ts": "2026-06-30T19:50:37.855Z",
		"symbol": "OpenClaw",
		"token": "0x9ccd163a68e56D1079D16B25fBd69d464f657b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 491827.55,
		"hash": "114c20397eabd48a8b93a4e9f65e5fd29b76f862f2fb69cdf4fb7a96bbf5dd99"
	},
	{
		"id": "a9cfd7408548",
		"ts": "2026-06-30T19:50:38.098Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 945283.15,
		"hash": "a9cfd7408548d5e509a021460597a70b1038615bca36ed9b0f53f1d8aeac5da3"
	},
	{
		"id": "b0fe33e45e84",
		"ts": "2026-06-30T19:50:38.339Z",
		"symbol": "$OLIVIA2.0",
		"token": "0x8185Eaf46136a3f095C60FaCD97ecA1bfC2f38F6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4547568.34,
		"hash": "b0fe33e45e84b0ea67c1954fb6eefc406af2d14e77a1af79b00ac139cb0a32d7"
	},
	{
		"id": "78a1bdf16626",
		"ts": "2026-06-30T19:50:38.578Z",
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
		"liquidityUsd": 942778.67,
		"hash": "78a1bdf1662695bf10228b393560a7dce23c79e6eb92a3ac429e6ebd0e24ad84"
	},
	{
		"id": "8d3c33b6c01f",
		"ts": "2026-06-30T19:50:38.819Z",
		"symbol": "HANDL",
		"token": "0x3BBCb624CB9A1f73163A886F460f47603E5E4425",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88586.65,
		"hash": "8d3c33b6c01ff99f4cc4b99117dec47786f4801f85bab0afd2bf77dd8fe5777b"
	},
	{
		"id": "8204815cadc5",
		"ts": "2026-06-30T17:03:49.437Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95683603.1,
		"hash": "8204815cadc5408fe080a67e102c442872e75b7554095839d41bd8d009d0d768"
	},
	{
		"id": "b5f15b697a6e",
		"ts": "2026-06-30T17:03:49.648Z",
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
		"liquidityUsd": 13080389.43,
		"hash": "b5f15b697a6e543053f1e3b3149061845ac8be08b723d3a469abbe927fd2817f"
	},
	{
		"id": "942598f0ae57",
		"ts": "2026-06-30T17:03:49.852Z",
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
		"liquidityUsd": 1315844.08,
		"hash": "942598f0ae57a8d46c3b3ace8aae4c03293c5c25b8c098c9c019b19c819427d9"
	},
	{
		"id": "1768f548cca4",
		"ts": "2026-06-30T17:03:50.055Z",
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
		"liquidityUsd": 26009803.28,
		"hash": "1768f548cca44dfb4c1c6e4536c631407484aa9c952c6aacee7cda9514b09803"
	},
	{
		"id": "c2251557d571",
		"ts": "2026-06-30T17:03:50.259Z",
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
		"liquidityUsd": 3998731.31,
		"hash": "c2251557d57125aac359ef59057209b3d8fc4984f8165e3cabf93c6da5aa3545"
	},
	{
		"id": "5079c8486cfb",
		"ts": "2026-06-30T17:03:50.466Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896433.33,
		"hash": "5079c8486cfb1e82b1764ca06da1adc514d79088bbedb540282fd888deea774f"
	},
	{
		"id": "e112891457dc",
		"ts": "2026-06-30T17:03:50.672Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26009803.28,
		"hash": "e112891457dc927231c615415bff5abbeb116bea2b3aec2b5d94902575c6d7f0"
	},
	{
		"id": "a5b04a32eb12",
		"ts": "2026-06-30T17:03:50.880Z",
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
		"liquidityUsd": 2164181.1,
		"hash": "a5b04a32eb122ca63c43b7b3c23f98bbb8a9143f82ef37d1654883287ad4ffc2"
	},
	{
		"id": "676e029b899f",
		"ts": "2026-06-30T17:03:51.135Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9201967.76,
		"hash": "676e029b899fc91c3ef6646f0c7f9b4c0fb52be6ec1b11325cd38132c06a9c66"
	},
	{
		"id": "3b721f0bef53",
		"ts": "2026-06-30T17:03:51.334Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 77963.21,
		"hash": "3b721f0bef536c16267f10ef2cde66a3be87b6cf6ad806bb0fe97ec50f8c84de"
	},
	{
		"id": "6b88c39953a5",
		"ts": "2026-06-30T17:03:51.524Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4270582.39,
		"hash": "6b88c39953a5816b32513ff8eefa86b8fb554f16c3130d2a4b62d8f854eb1f52"
	},
	{
		"id": "1ce3f880be7d",
		"ts": "2026-06-30T17:03:51.712Z",
		"symbol": "CX",
		"token": "0x000000000000012DeF132E61759048bE5b5C6033",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 461563.24,
		"hash": "1ce3f880be7d6839aad4d802dd2c65bccae4c669914c6d3c710872004b2cd2c1"
	},
	{
		"id": "7b0f16488d6f",
		"ts": "2026-06-30T17:03:51.901Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1766862.79,
		"hash": "7b0f16488d6f1f6aa97d07e2b8d2e617a6f3fd2c75de084f741fbf3cd4d4037b"
	},
	{
		"id": "1b6871317921",
		"ts": "2026-06-30T17:03:52.090Z",
		"symbol": "OpenClaw",
		"token": "0x9ccd163a68e56D1079D16B25fBd69d464f657b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 491895.04,
		"hash": "1b68713179212558b8c0156bd479d0b50761864534adf5c2ea5a2c1d7cd85aa3"
	},
	{
		"id": "9bcd5a72718f",
		"ts": "2026-06-30T17:03:52.293Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 954208.96,
		"hash": "9bcd5a72718f062e3d8dbb8ccec3622f5710c7a0f34c5557539406e2482e6257"
	},
	{
		"id": "278893e57ab2",
		"ts": "2026-06-30T17:03:52.502Z",
		"symbol": "$OLIVIA2.0",
		"token": "0x8185Eaf46136a3f095C60FaCD97ecA1bfC2f38F6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4551924.64,
		"hash": "278893e57ab22e8f63cdbff33a82eb5763f6f8f4fc405491a0627ed85d13123c"
	},
	{
		"id": "0cc82ab986d0",
		"ts": "2026-06-30T17:03:52.701Z",
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
		"liquidityUsd": 951738.66,
		"hash": "0cc82ab986d0ec76dec084519e0005ce8972a31f474e86d28715f2afa83195d2"
	},
	{
		"id": "4d5a1fa3b47d",
		"ts": "2026-06-30T17:03:52.910Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207766.93,
		"hash": "4d5a1fa3b47de9763582049639162ed233a242dfc93a106ba2c3cea42572e325"
	},
	{
		"id": "8698621e4c8b",
		"ts": "2026-06-30T14:11:26.908Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95736351.34,
		"hash": "8698621e4c8b48e0b3dc8f3460b4c45f1180e3f5a21d2a02f95e6ef7a6363513"
	},
	{
		"id": "9a437b38e2f7",
		"ts": "2026-06-30T14:11:27.258Z",
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
		"liquidityUsd": 12903983.57,
		"hash": "9a437b38e2f78ef1350756eb140b4a91948d15e601e0dcd3801d528368f342c0"
	},
	{
		"id": "601e9eb62a60",
		"ts": "2026-06-30T14:11:27.470Z",
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
		"liquidityUsd": 1316554.47,
		"hash": "601e9eb62a604ebb2f08eaca9cae5bcb344dbe064777d51524e629122705a1a2"
	},
	{
		"id": "1d12a3b29df2",
		"ts": "2026-06-30T14:11:27.664Z",
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
		"liquidityUsd": 25725192.97,
		"hash": "1d12a3b29df230b47e27709231c3e26cd06e7901bd703971555a23bb9f558ff3"
	},
	{
		"id": "4c97c9453193",
		"ts": "2026-06-30T14:11:27.861Z",
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
		"liquidityUsd": 3990029.2,
		"hash": "4c97c94531935c97a17f7181f0044d07b532f42a0fffee9e9ac4f7bd34862dab"
	},
	{
		"id": "ece2a48fd2f8",
		"ts": "2026-06-30T14:11:28.059Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 902239.54,
		"hash": "ece2a48fd2f818c81005649928835142e4f2f0a7f9fe0dbf56279b1d4b498089"
	},
	{
		"id": "f6fc42cb9a78",
		"ts": "2026-06-30T14:11:28.257Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25725202.17,
		"hash": "f6fc42cb9a78400ff2a2c324aab24e27b0539fbf3b8615274c1f847cd1349f10"
	},
	{
		"id": "4815716b46d4",
		"ts": "2026-06-30T14:11:28.452Z",
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
		"liquidityUsd": 2222102.42,
		"hash": "4815716b46d4d673e50f38f5f68db84d3ac92adbd789e56a4925661a271ffb3b"
	},
	{
		"id": "be9ae2853fad",
		"ts": "2026-06-30T14:11:28.646Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 8933291.63,
		"hash": "be9ae2853fad3241f5a54c206dfbd8e0f2afb4b6d5780dbe020221a9018a96a4"
	},
	{
		"id": "95725acf937c",
		"ts": "2026-06-30T14:11:29.300Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 73,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.46,
		"flags": [
			"new_pair_under_24h",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 75134.86,
		"hash": "95725acf937c40402fa643385237adb66956c7cdda59e61ec9cba50c2a68bb0a"
	},
	{
		"id": "8d42e6b2e4d6",
		"ts": "2026-06-30T14:11:29.486Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4300853.81,
		"hash": "8d42e6b2e4d6aeaa33dcd72c55ef8ebc17a60781b8f5dc2fa8ac1e384884bb84"
	},
	{
		"id": "9f02a89ece55",
		"ts": "2026-06-30T14:11:29.709Z",
		"symbol": "CX",
		"token": "0x000000000000012DeF132E61759048bE5b5C6033",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 467126.18,
		"hash": "9f02a89ece55ca0115b17cd79a66a62a125b5051a46fbaa5698c502124e9c40f"
	},
	{
		"id": "d001f9b233b8",
		"ts": "2026-06-30T14:11:29.919Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1724935.98,
		"hash": "d001f9b233b8cd48c30f6144628994d4c8980bf25366ea27fc4138a2158c7b90"
	},
	{
		"id": "568d73b0bb2f",
		"ts": "2026-06-30T14:11:30.100Z",
		"symbol": "OpenClaw",
		"token": "0x9ccd163a68e56D1079D16B25fBd69d464f657b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 491869.97,
		"hash": "568d73b0bb2f2bd71d9cac8b24baaf1a03d352f4117d8281ed1ba5c1a794f079"
	},
	{
		"id": "0b051a612fa4",
		"ts": "2026-06-30T14:11:30.278Z",
		"symbol": "$OLIVIA2.0",
		"token": "0x8185Eaf46136a3f095C60FaCD97ecA1bfC2f38F6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4552640.86,
		"hash": "0b051a612fa42dae0c67bfac7c079d1af34136d11a68df65119d091982c612a7"
	},
	{
		"id": "fd68a66b50fb",
		"ts": "2026-06-30T14:11:30.482Z",
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
		"liquidityUsd": 952610.11,
		"hash": "fd68a66b50fb1462bdb85aa30c0c9178c0f38d7cf8e0c9950116d3cfef46e4cf"
	},
	{
		"id": "2c38dcc9aa8c",
		"ts": "2026-06-30T14:11:30.664Z",
		"symbol": "Claude",
		"token": "0x0e7d4bDfe24aa679F9903F10414A25F56CBEBB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 319536.4,
		"hash": "2c38dcc9aa8cd3d493f128bb4584a5e2e50a1daee2c3b1b45a903dd2f9ed493c"
	},
	{
		"id": "f3325e6e89a0",
		"ts": "2026-06-30T14:11:30.852Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207766.93,
		"hash": "f3325e6e89a07dc892a8b4921eb514ec06214b00601d4dd73e16d82b625852f2"
	},
	{
		"id": "fb331230cfec",
		"ts": "2026-06-30T11:43:20.320Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95946441.12,
		"hash": "fb331230cfec04b6da114ed77038368e2c37623a0fbd34c75e953f5acc1e88a9"
	},
	{
		"id": "2cb7862b2ae3",
		"ts": "2026-06-30T11:43:20.754Z",
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
		"liquidityUsd": 13160752.02,
		"hash": "2cb7862b2ae349f58fca02f995d875af5aee5b3579d9712bf16820a697bcd95e"
	},
	{
		"id": "5035bc754c31",
		"ts": "2026-06-30T11:43:20.984Z",
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
		"liquidityUsd": 1318448.48,
		"hash": "5035bc754c31792da0e67bcd50e59f899ff71b9bdcca33c0d01340a44b8598bb"
	},
	{
		"id": "adfad1354435",
		"ts": "2026-06-30T11:43:21.213Z",
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
		"liquidityUsd": 25722584.62,
		"hash": "adfad1354435acba23bcab7b983bdd86331834ec869ef620251b274d9fa50139"
	},
	{
		"id": "c91940badc64",
		"ts": "2026-06-30T11:43:21.442Z",
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
		"liquidityUsd": 4018944.32,
		"hash": "c91940badc6441d74ee16f8c8235417e1db59910f761fad909fdaf2b8a6146c3"
	},
	{
		"id": "9ac9076dab33",
		"ts": "2026-06-30T11:43:21.687Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 910158.41,
		"hash": "9ac9076dab33bc6fb3ef8a072a984216fb70d0e787099f526c685eada1ca8a10"
	},
	{
		"id": "bd2ccbf76326",
		"ts": "2026-06-30T11:43:21.921Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25722584.62,
		"hash": "bd2ccbf763265fd772ffcec83df123aa79ef13b010073bb100882da95f2f825d"
	},
	{
		"id": "eb379a55e9c2",
		"ts": "2026-06-30T11:43:23.029Z",
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
		"liquidityUsd": 2237563.84,
		"hash": "eb379a55e9c2032e9278cb614956fb9008de134c1647e19f8f86c5e0b25358fb"
	},
	{
		"id": "658cfae7cd12",
		"ts": "2026-06-30T11:43:23.270Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 8905648.08,
		"hash": "658cfae7cd1257c394b325600d74826565b8b82c44472027f0e57dd3ec266f4b"
	},
	{
		"id": "d08b7e1652f7",
		"ts": "2026-06-30T11:43:23.499Z",
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
		"liquidityUsd": 4460711.11,
		"hash": "d08b7e1652f7a539a98901d4664d93adfaf94c9a80be8c741c05ad8f26405c98"
	},
	{
		"id": "fdbcf4ee999a",
		"ts": "2026-06-30T11:43:23.713Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 64773.35,
		"hash": "fdbcf4ee999ab560164c422f0be333063c8097cd9ee152eabe0bba5027fb56a7"
	},
	{
		"id": "b8c113b319cd",
		"ts": "2026-06-30T11:43:24.898Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1721991.51,
		"hash": "b8c113b319cdca6806cdba3dfb15d085c96b7e8d76c4afe13e8f93a0145f2607"
	},
	{
		"id": "5b8014135150",
		"ts": "2026-06-30T11:43:25.804Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207764.5,
		"hash": "5b80141351504aec7f6c86dc99f8c12c5193a41f2aeee44c6ef78a741f6ad3a2"
	},
	{
		"id": "8264d16eff79",
		"ts": "2026-06-30T11:43:26.016Z",
		"symbol": "CX",
		"token": "0x000000000000012DeF132E61759048bE5b5C6033",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 466500.69,
		"hash": "8264d16eff79769b7a1c229faaf5150022576ad0f9517fb7a252a40012f0e7d0"
	},
	{
		"id": "94b527251a79",
		"ts": "2026-06-30T11:43:26.231Z",
		"symbol": "$OLIVIA2.0",
		"token": "0x8185Eaf46136a3f095C60FaCD97ecA1bfC2f38F6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4541842.47,
		"hash": "94b527251a799af0b8095ac353bb701b7b8d446cede11526c6cb106715414664"
	},
	{
		"id": "baf682b05d52",
		"ts": "2026-06-30T11:43:26.442Z",
		"symbol": "Claude",
		"token": "0x0e7d4bDfe24aa679F9903F10414A25F56CBEBB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 320719.48,
		"hash": "baf682b05d52c4113658187e5795ba1ff5deea8eb95e65e74821305c99247fed"
	},
	{
		"id": "266f7ecaed7b",
		"ts": "2026-06-30T11:43:26.655Z",
		"symbol": "OpenClaw",
		"token": "0x9ccd163a68e56D1079D16B25fBd69d464f657b07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 491977.59,
		"hash": "266f7ecaed7b51e3bd307ea7d6788b3ffae012492c358e77be27ba7ffce369b1"
	},
	{
		"id": "6fd37ce3c971",
		"ts": "2026-06-30T11:43:26.869Z",
		"symbol": "FAI",
		"token": "0xb33Ff54b9F7242EF1593d2C9Bcd8f9df46c77935",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2132013.37,
		"hash": "6fd37ce3c971f16ef0696dfe18e18c994229be68012dc0bf77f169fda38870cb"
	},
	{
		"id": "532f0d3a1bce",
		"ts": "2026-06-30T08:35:30.409Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 96212787.32,
		"hash": "532f0d3a1bce3a6fc8a66629067a6954cd06ac32b5462ec9c25e1ea4d5e8532c"
	},
	{
		"id": "6d21f4ad0166",
		"ts": "2026-06-30T08:35:30.756Z",
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
		"liquidityUsd": 12758855.27,
		"hash": "6d21f4ad01668c24ac5a9e14ca9221e9378f1d878d4ac58313c0d8ff9d6bd8f5"
	},
	{
		"id": "26ed2760829d",
		"ts": "2026-06-30T08:35:30.960Z",
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
		"liquidityUsd": 1329870.68,
		"hash": "26ed2760829ddf6cb8cede0251f7b76e63c2acce478d690a17fca7331f39ad7c"
	},
	{
		"id": "2cc5beedaf2f",
		"ts": "2026-06-30T08:35:31.159Z",
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
		"liquidityUsd": 25816339.45,
		"hash": "2cc5beedaf2fdad42c1121fb137aad8b8be02431b35248146e3f01256cb0bed8"
	},
	{
		"id": "fff16b6289d4",
		"ts": "2026-06-30T08:35:31.350Z",
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
		"liquidityUsd": 4072368.23,
		"hash": "fff16b6289d438ee6f4a6d4e138a5b6a49f5e6938194d49834cad40f9b727d66"
	},
	{
		"id": "17627c030416",
		"ts": "2026-06-30T08:35:31.555Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 910257.66,
		"hash": "17627c030416a13413a2b615b823c7000566228e71b250ffaab62996d2e58287"
	},
	{
		"id": "72bb2dd46981",
		"ts": "2026-06-30T08:35:31.740Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25816339.45,
		"hash": "72bb2dd46981631d9db5b53fce37c07c5fefa6fa695bd5fd8ba9a7f92b093819"
	},
	{
		"id": "5763057dbc4a",
		"ts": "2026-06-30T08:35:31.938Z",
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
		"liquidityUsd": 2168346.28,
		"hash": "5763057dbc4a0c965179cbdc5a748964b6e515222fc179e76476bf421b726330"
	},
	{
		"id": "6a56ee792157",
		"ts": "2026-06-30T08:35:32.126Z",
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
		"liquidityUsd": 4594457.3,
		"hash": "6a56ee7921571f20d63459a4be85fcf6f9e517eaa62097185a723bd1c85007a8"
	},
	{
		"id": "bda987e5a6df",
		"ts": "2026-06-30T08:35:32.371Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 8957081.43,
		"hash": "bda987e5a6dfb079a5224b9027aeed8259358123e665e4294a53f6ae1b78d730"
	},
	{
		"id": "159185f1e810",
		"ts": "2026-06-30T08:35:32.600Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 74055.6,
		"hash": "159185f1e810aebb67d01ae4beeaa052b310e78e2ab1e58a53408e7811612532"
	},
	{
		"id": "ccb56ebacffb",
		"ts": "2026-06-30T08:35:32.776Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1775915.27,
		"hash": "ccb56ebacffbdd3874fb5001c0d513eebc966184638f83dfdd60f0f2e6578833"
	},
	{
		"id": "d0696921157a",
		"ts": "2026-06-30T08:35:32.963Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207763.42,
		"hash": "d0696921157a466af38b42f9f69f95549810fab02f12a2b256b4cdffbbf178cb"
	},
	{
		"id": "f3250ca62562",
		"ts": "2026-06-30T08:35:33.138Z",
		"symbol": "CX",
		"token": "0x000000000000012DeF132E61759048bE5b5C6033",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 458176.77,
		"hash": "f3250ca625628d4a88fd88410f249bf145223b885764ed5e98068163aa236668"
	},
	{
		"id": "3f08eac0d392",
		"ts": "2026-06-30T08:35:33.309Z",
		"symbol": "Claude",
		"token": "0x0e7d4bDfe24aa679F9903F10414A25F56CBEBB07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692428.36,
		"hash": "3f08eac0d392385cc1dec54447d7f15fc6ef74c46c88d5729e110cf03efa850b"
	},
	{
		"id": "a984f7636ded",
		"ts": "2026-06-30T08:35:33.500Z",
		"symbol": "$OLIVIA2.0",
		"token": "0x8185Eaf46136a3f095C60FaCD97ecA1bfC2f38F6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4515774.4,
		"hash": "a984f7636ded9f6440f17c0f3bbeeba5d8d471ecc7639af8e7f62c31968306a0"
	},
	{
		"id": "dc1ce4b4e781",
		"ts": "2026-06-30T08:35:33.678Z",
		"symbol": "HANDL",
		"token": "0x3BBCb624CB9A1f73163A886F460f47603E5E4425",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97404.26,
		"hash": "dc1ce4b4e7817f681a0d63a91f32b27babe2fb9ea4cfb3ccc82426797238132b"
	},
	{
		"id": "6e6556e36b18",
		"ts": "2026-06-30T05:00:03.113Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 95857458.28,
		"hash": "6e6556e36b185759e9fb53d811aec8913ba60a3c15725d5198d8b700983feda1"
	},
	{
		"id": "5d6b959c8434",
		"ts": "2026-06-30T05:00:03.781Z",
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
		"liquidityUsd": 13096226.99,
		"hash": "5d6b959c84346c5e8af93cda610d9d78826c4ae0b33a8ff668b09a5274bbc2a8"
	},
	{
		"id": "6ed572229bb1",
		"ts": "2026-06-30T05:00:04.027Z",
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
		"liquidityUsd": 1372295.59,
		"hash": "6ed572229bb169c081f4f2704c08e7229556d97dbf0895ac17d75e0b290d7915"
	},
	{
		"id": "f8c528eb75f9",
		"ts": "2026-06-30T05:00:04.277Z",
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
		"liquidityUsd": 25935818.23,
		"hash": "f8c528eb75f9281ce49a34b218494c79ca823f613443865ae310c3ebb31e7013"
	},
	{
		"id": "8bdd51cb839b",
		"ts": "2026-06-30T05:00:04.522Z",
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
		"liquidityUsd": 4089079.84,
		"hash": "8bdd51cb839b74488b86fb2bda68e0431cd5fbbf6ec618d27c17c1f8152170ed"
	},
	{
		"id": "1ddbf8ea58bf",
		"ts": "2026-06-30T05:00:04.761Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 909923.29,
		"hash": "1ddbf8ea58bfd5f739ae5775389c28c3e7f26c67d0fd52c022a623b70dc8123a"
	},
	{
		"id": "362f5339f4c8",
		"ts": "2026-06-30T05:00:04.997Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25935818.23,
		"hash": "362f5339f4c828552a568a771bb2d1dc68e51fd83d80cbf653f3745c702edb22"
	},
	{
		"id": "a062aed0828e",
		"ts": "2026-06-30T05:00:05.234Z",
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
		"liquidityUsd": 2167930.24,
		"hash": "a062aed0828e2d622014002f8dacac5b53817da5891b4a39f58047ce2284cf38"
	},
	{
		"id": "b4811f394ec8",
		"ts": "2026-06-30T05:00:05.474Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9616175.01,
		"hash": "b4811f394ec8329c77bcefb4ac9ff47585ca445ae237aa6d668fad68186472b7"
	},
	{
		"id": "eb00cfa11ca8",
		"ts": "2026-06-30T05:00:05.712Z",
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
		"liquidityUsd": 4601444.06,
		"hash": "eb00cfa11ca8ff8bb0dd05ca7ce62ede2c22d6f4dfcfdaa3ebe28050dd2b9ea5"
	},
	{
		"id": "35e153282265",
		"ts": "2026-06-30T05:00:05.932Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 72149.37,
		"hash": "35e153282265e0d29aa77902496deb2dcb7568c7345c7c8f1bdd08a483353684"
	},
	{
		"id": "a8307d5900ad",
		"ts": "2026-06-30T05:00:06.150Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1800869.22,
		"hash": "a8307d5900addbf7cccb757d116ae6f4110bfdffa190bc24529b2d55d48727bb"
	},
	{
		"id": "49440652db9e",
		"ts": "2026-06-30T05:00:06.369Z",
		"symbol": "Claude",
		"token": "0x0e7d4bDfe24aa679F9903F10414A25F56CBEBB07",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 692501.01,
		"hash": "49440652db9e8e7456532ef46aa6c722867c89c146ecf35bd2bd1d74ebc941b2"
	},
	{
		"id": "ba5f2e6bf51f",
		"ts": "2026-06-30T05:00:06.588Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207763.42,
		"hash": "ba5f2e6bf51ffd6a460d27b322de0011fc07af4f3e432f1e193afb5a21bff575"
	},
	{
		"id": "969f7fe1128c",
		"ts": "2026-06-30T05:00:06.806Z",
		"symbol": "CX",
		"token": "0x000000000000012DeF132E61759048bE5b5C6033",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 449105.83,
		"hash": "969f7fe1128ce953475d03713962b3e746d4de458d050fa0269a9fe52c925a2c"
	},
	{
		"id": "3fe1d961ec67",
		"ts": "2026-06-30T05:00:07.025Z",
		"symbol": "HANDL",
		"token": "0x3BBCb624CB9A1f73163A886F460f47603E5E4425",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95963.97,
		"hash": "3fe1d961ec67751cd621cc4c3dcbc366ae268522e9f51d05ce4f38a76c3b18d7"
	},
	{
		"id": "7b4b9889ddd7",
		"ts": "2026-06-30T05:00:07.244Z",
		"symbol": "RAVE",
		"token": "0x1aA8fD5BCce2231C6100d55Bf8B377cff33Acfc3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 304591.87,
		"hash": "7b4b9889ddd746f8e202443a11bd2558c433a5ab63d8d09afe464cf76c57ef69"
	},
	{
		"id": "ea1f50b0f0a1",
		"ts": "2026-06-30T05:00:07.461Z",
		"symbol": "$OLIVIA2.0",
		"token": "0x8185Eaf46136a3f095C60FaCD97ecA1bfC2f38F6",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4488937.54,
		"hash": "ea1f50b0f0a1abde92f7c568f865b7768c15cd929d7c4febdcdc169dc0f99289"
	},
	{
		"id": "c426704830b1",
		"ts": "2026-06-30T00:00:43.906Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 96127164.23,
		"hash": "c426704830b180df64cb6a8abd8e23d747a9a25756b2c7649c9bde4d993f8d3e"
	},
	{
		"id": "784a6b9caa66",
		"ts": "2026-06-30T00:00:44.385Z",
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
		"liquidityUsd": 12776038.74,
		"hash": "784a6b9caa66f7d4bbb24b6533a9f8f0546e9207e9c52880f2686b9241ee9612"
	},
	{
		"id": "f8d505637950",
		"ts": "2026-06-30T00:00:44.654Z",
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
		"liquidityUsd": 1338399.1,
		"hash": "f8d505637950bfc1b9a85a09301515b22c66155429210ff8a9e3e6393158e304"
	},
	{
		"id": "e34065c78ab9",
		"ts": "2026-06-30T00:00:44.922Z",
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
		"liquidityUsd": 25604486.12,
		"hash": "e34065c78ab9ff362f2927a9739ba6aaefc38ac67a41f98bd1b3fdd8a24b7f26"
	},
	{
		"id": "9dd0154af807",
		"ts": "2026-06-30T00:00:45.202Z",
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
		"liquidityUsd": 4148742.08,
		"hash": "9dd0154af8073cc8e6e3341137e529437a56a6053def3eeb81662da8ae8e8f8f"
	},
	{
		"id": "fe9f35896f99",
		"ts": "2026-06-30T00:00:45.486Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 931664.16,
		"hash": "fe9f35896f9946765b00ec6aec229a9eb731e5f76bcd39e9dd88740148f92c7d"
	},
	{
		"id": "5704299f5384",
		"ts": "2026-06-30T00:00:45.864Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25604486.12,
		"hash": "5704299f53842e62966d83c9292f93c80d77806726939934bfaf3c08a42e5209"
	},
	{
		"id": "a1b5544fd542",
		"ts": "2026-06-30T00:00:46.150Z",
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
		"liquidityUsd": 2203558.03,
		"hash": "a1b5544fd54203e55f1ceee8474ac7ecd90e91e7dd4af22732d4764bfc414db3"
	},
	{
		"id": "4c1ebb7bfc17",
		"ts": "2026-06-30T00:00:46.442Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9073499.97,
		"hash": "4c1ebb7bfc170a979ad448d823290b7626d5699f8704d5dfaa34ffa31c149f70"
	},
	{
		"id": "b8e74b28f637",
		"ts": "2026-06-30T00:00:46.797Z",
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
		"liquidityUsd": 4605880.68,
		"hash": "b8e74b28f637207ae034e7c5524fea41141ef3f1793a45b0f56d79d49b43e820"
	},
	{
		"id": "6d6475ce2099",
		"ts": "2026-06-30T00:00:47.038Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1862984.02,
		"hash": "6d6475ce209994042b2a089cf4665cf9130c934eacaed90487748903183493c9"
	},
	{
		"id": "edf53b025925",
		"ts": "2026-06-30T00:00:47.290Z",
		"symbol": "Claude",
		"token": "0x0e7d4bDfe24aa679F9903F10414A25F56CBEBB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 688351.45,
		"hash": "edf53b025925de838a2a93c9c9562d84705f7e57320c64584239ce184e6f86bb"
	},
	{
		"id": "1b11be99bce2",
		"ts": "2026-06-30T00:00:47.536Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 66829.04,
		"hash": "1b11be99bce26409ff63b2d9989655c1add11ff8adade344633e277dcec5d739"
	},
	{
		"id": "8d2b76525777",
		"ts": "2026-06-30T00:00:47.783Z",
		"symbol": "HANDL",
		"token": "0x3BBCb624CB9A1f73163A886F460f47603E5E4425",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 90309.19,
		"hash": "8d2b765257773de0bded338085db230cc580054c38778961f6365ed2be03fa08"
	},
	{
		"id": "304718a5a602",
		"ts": "2026-06-30T00:00:48.026Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 208883.04,
		"hash": "304718a5a60240ef58ccf682a9f8f35a04fa3a3fc9ba356f389ed310cd07e43b"
	},
	{
		"id": "eea14c8a3915",
		"ts": "2026-06-30T00:00:48.271Z",
		"symbol": "RAVE",
		"token": "0x1aA8fD5BCce2231C6100d55Bf8B377cff33Acfc3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 305361.89,
		"hash": "eea14c8a39153829bcee689166c53f19576c1b685a63d946c08f9dbc80ead215"
	},
	{
		"id": "ef159c5722ca",
		"ts": "2026-06-30T00:00:48.520Z",
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
		"liquidityUsd": 1321912.01,
		"hash": "ef159c5722ca07c54476306f222911ed8d13ed9ae8f50c237b4014e1504ab9eb"
	},
	{
		"id": "20c6468b0b45",
		"ts": "2026-06-30T00:00:48.767Z",
		"symbol": "WOON",
		"token": "0x85EAC631c800af804476b140F87039f742c28BA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 235415.13,
		"hash": "20c6468b0b45c23f69cda8def573b6849e635a0e05f5153297590328cb595c12"
	},
	{
		"id": "8521d30bda43",
		"ts": "2026-06-30T00:00:49.010Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4590157.34,
		"hash": "8521d30bda431d998b8fef4a1d19cba74fea0692f34981174c4544ede33e11da"
	},
	{
		"id": "5dc1e7a9cc0e",
		"ts": "2026-06-29T22:53:27.232Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 96278566.65,
		"hash": "5dc1e7a9cc0e4d135e6164940d58351ae9e0c7d5fd5695ec77d354f1d3053ae9"
	},
	{
		"id": "0605b826353e",
		"ts": "2026-06-29T22:53:27.509Z",
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
		"liquidityUsd": 13792329.31,
		"hash": "0605b826353ee26d13d666efa04813ddccdff13e390b939c11f3ef3bd4c60e44"
	},
	{
		"id": "e5825c5d06ca",
		"ts": "2026-06-29T22:53:27.774Z",
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
		"liquidityUsd": 1344404.03,
		"hash": "e5825c5d06caf16bebd0aecb95c2e78e594c6db1d53625b53241cddaf43b6a22"
	},
	{
		"id": "064f56c2ac0c",
		"ts": "2026-06-29T22:53:28.037Z",
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
		"liquidityUsd": 25609800.44,
		"hash": "064f56c2ac0c6f3ce82c25eeb0cb70e54e73062e0afd0e351f12ee25eabfa522"
	},
	{
		"id": "c03b025074bf",
		"ts": "2026-06-29T22:53:28.515Z",
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
		"liquidityUsd": 4166668.49,
		"hash": "c03b025074bfb5e840929b2cbedc5ee1c53829095d99a7b340ff792df913f3e3"
	},
	{
		"id": "76f2b45e9367",
		"ts": "2026-06-29T22:53:28.771Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 937746.46,
		"hash": "76f2b45e936787fdc19c1b16a5466536cacce641b2322541a3102021d04d39bd"
	},
	{
		"id": "d6b134177e46",
		"ts": "2026-06-29T22:53:29.029Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25609800.44,
		"hash": "d6b134177e4680bb959898c57ae6028f8715384191261dbd2cbcf9c95ba45fc7"
	},
	{
		"id": "776730ffc960",
		"ts": "2026-06-29T22:53:29.301Z",
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
		"liquidityUsd": 2240660.65,
		"hash": "776730ffc960c4122c411daaa0f78f15d855fefe6ee46237ecc109ce8f6eeb95"
	},
	{
		"id": "1615701f192b",
		"ts": "2026-06-29T22:53:29.561Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9278492.76,
		"hash": "1615701f192b9ebc86a8398ba13a3924933e4aecd269451fe4ff1058616e5230"
	},
	{
		"id": "1f6ababe0170",
		"ts": "2026-06-29T22:53:29.816Z",
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
		"liquidityUsd": 4709925.41,
		"hash": "1f6ababe0170c59346087d86a4812e9fa4230043057f759a4cc43e7703361960"
	},
	{
		"id": "b0a03b397316",
		"ts": "2026-06-29T22:53:30.059Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1841379.28,
		"hash": "b0a03b397316775d270cc714d46b735361eead296d5418857992dc6835eff8a2"
	},
	{
		"id": "df728c596526",
		"ts": "2026-06-29T22:53:30.571Z",
		"symbol": "Claude",
		"token": "0x0e7d4bDfe24aa679F9903F10414A25F56CBEBB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 688351.88,
		"hash": "df728c596526b4f0046731a9fd21b2d2cc1d942ada09943494cbbbb1f0370f51"
	},
	{
		"id": "96d792440261",
		"ts": "2026-06-29T22:53:30.812Z",
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
		"liquidityUsd": 1452695.45,
		"hash": "96d792440261c6003cfbf7e7251f93fffab7971443064b1bc44767f6d8af36a3"
	},
	{
		"id": "4bb927aaba7d",
		"ts": "2026-06-29T22:53:31.051Z",
		"symbol": "HANDL",
		"token": "0x3BBCb624CB9A1f73163A886F460f47603E5E4425",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88653.08,
		"hash": "4bb927aaba7dffde9f11a0de43a58b0fde9334a2ea919a914d76d97095af3caa"
	},
	{
		"id": "15eabe8932d9",
		"ts": "2026-06-29T22:53:31.287Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 73406.31,
		"hash": "15eabe8932d97f46ee460f4e3d45a1a7f688f7a94c8b3642d6272950086c4f16"
	},
	{
		"id": "efe639c6e810",
		"ts": "2026-06-29T22:53:31.527Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207873.28,
		"hash": "efe639c6e810bacff624ee16784bfb8e1f0e48f668991aef2da1eb8ea02e40e4"
	},
	{
		"id": "cc4df80c1e0a",
		"ts": "2026-06-29T22:53:31.770Z",
		"symbol": "RAVE",
		"token": "0x1aA8fD5BCce2231C6100d55Bf8B377cff33Acfc3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 313041.03,
		"hash": "cc4df80c1e0a159f3336d8d7b995a635933a7484b7e88a9c444153cca04a6c4d"
	},
	{
		"id": "d47eef447ea9",
		"ts": "2026-06-29T21:23:06.970Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 96579893.08,
		"hash": "d47eef447ea994b781a73fc0b57c426a36b0b649ddbb897b79edd71ec575a9eb"
	},
	{
		"id": "306542986324",
		"ts": "2026-06-29T21:23:07.454Z",
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
		"liquidityUsd": 13185251.42,
		"hash": "30654298632408a172449d43ac960bca5aa97446af9ee0292875e41c2f6f0bd4"
	},
	{
		"id": "507facbf3842",
		"ts": "2026-06-29T21:23:07.952Z",
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
		"liquidityUsd": 1342806.34,
		"hash": "507facbf384226dca7a4c1c01c8e3d746f5103ea90394c8f2d52e5ccfce24e08"
	},
	{
		"id": "00fd0825963e",
		"ts": "2026-06-29T21:23:08.207Z",
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
		"liquidityUsd": 25699620.38,
		"hash": "00fd0825963ef1f106e08cfa7ab6454becbe885a27773b2cd467d2f729bd64bc"
	},
	{
		"id": "b0bc6ec8a046",
		"ts": "2026-06-29T21:23:08.530Z",
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
		"liquidityUsd": 4161115.75,
		"hash": "b0bc6ec8a046b369ed77ec8bbfeb52fd75eb61e47f4401df801d1900a5161226"
	},
	{
		"id": "756269e73437",
		"ts": "2026-06-29T21:23:08.787Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 937001.61,
		"hash": "756269e7343750566555af52a4564bca8250ba70ade3fcc3f3439e82947f280d"
	},
	{
		"id": "01cc13aa4216",
		"ts": "2026-06-29T21:23:09.045Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25699620.38,
		"hash": "01cc13aa42167b4636575724d13ab5815de3c1dd3cf91718c418380bdaa0a0de"
	},
	{
		"id": "0227a15852b2",
		"ts": "2026-06-29T21:23:09.297Z",
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
		"liquidityUsd": 2245849.95,
		"hash": "0227a15852b2b650ed0c729f64255d214fdb59190c01e5ed202fb1cc9278d8c4"
	},
	{
		"id": "bf8ae916e666",
		"ts": "2026-06-29T21:23:09.622Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 9145973.08,
		"hash": "bf8ae916e6664ce3b9a03b63a8076066f28282d7e08c223c487fcd39e8d6d98c"
	},
	{
		"id": "4f1738a01db5",
		"ts": "2026-06-29T21:23:10.109Z",
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
		"liquidityUsd": 4639439.37,
		"hash": "4f1738a01db599ac3ba5f280718e78e02942b94ccbf54059093c1c77eb4e0b9c"
	},
	{
		"id": "eca08e9da201",
		"ts": "2026-06-29T21:23:10.354Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1862206.19,
		"hash": "eca08e9da2019e143d6232437cc0f15bc7bf2342b664f91a0a85e33cfeef8b7a"
	},
	{
		"id": "c8525f3d5c02",
		"ts": "2026-06-29T21:23:10.591Z",
		"symbol": "Claude",
		"token": "0x0e7d4bDfe24aa679F9903F10414A25F56CBEBB07",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 688351.82,
		"hash": "c8525f3d5c023ff482b2f7c8dd3afc3bbb6b31fe37743b2f070c84fe30d637fb"
	},
	{
		"id": "29023ddce258",
		"ts": "2026-06-29T21:23:11.066Z",
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
		"liquidityUsd": 1325036.65,
		"hash": "29023ddce258d28ebf6e8d4d38d0b52b8161af0bd59815eedc57a34b614e6e04"
	},
	{
		"id": "cf385de879d1",
		"ts": "2026-06-29T21:23:11.307Z",
		"symbol": "HANDL",
		"token": "0x3BBCb624CB9A1f73163A886F460f47603E5E4425",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 93777.36,
		"hash": "cf385de879d1f868c161e01b54eb64640a5fb437f26caee735ac3a406f2fe494"
	},
	{
		"id": "52dc0684ca6e",
		"ts": "2026-06-29T21:23:11.739Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 210680.92,
		"hash": "52dc0684ca6ea7d3952d5871d3d94727da3cff7df2573eb3613b6935a309f986"
	},
	{
		"id": "94a0c1991f96",
		"ts": "2026-06-29T21:23:11.980Z",
		"symbol": "Claude",
		"token": "0x6db3cFe766818505e672f9D1ee7b812210B70B07",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 621134.07,
		"hash": "94a0c1991f9653493bb779200776974d9e838d9338f071ed9d5d5102d99a45e9"
	},
	{
		"id": "f68ffd6fa570",
		"ts": "2026-06-29T21:23:12.215Z",
		"symbol": "RAVE",
		"token": "0x1aA8fD5BCce2231C6100d55Bf8B377cff33Acfc3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 314683.47,
		"hash": "f68ffd6fa57047bcd91b7e7632b85277b9ab73328f082db59fc05e78867859a1"
	},
	{
		"id": "063994e28cf9",
		"ts": "2026-06-29T19:52:07.444Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 96444768.78,
		"hash": "063994e28cf951e7ec6ae7aebc6ff06a6ccaf6fdabd370c8902ab0b9a08a36b2"
	},
	{
		"id": "0f54426b27d5",
		"ts": "2026-06-29T19:52:07.718Z",
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
		"liquidityUsd": 13295525.21,
		"hash": "0f54426b27d5d526d3f48c9dfc6626a90d15c6c4f379bb4ed485ca53d5914cb3"
	},
	{
		"id": "abd92b7765ce",
		"ts": "2026-06-29T19:52:07.976Z",
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
		"liquidityUsd": 1366804.93,
		"hash": "abd92b7765ceb857a309695f121293db1040c8e6255ece00e18d4d9212cd0726"
	},
	{
		"id": "eb61643b7f66",
		"ts": "2026-06-29T19:52:08.241Z",
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
		"liquidityUsd": 25836997.63,
		"hash": "eb61643b7f668a6d6fc6249d6012456306daa0895631c2115f5cc6bdec05ae04"
	},
	{
		"id": "c7a7a48583b7",
		"ts": "2026-06-29T19:52:08.991Z",
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
		"liquidityUsd": 4184032.14,
		"hash": "c7a7a48583b743101043d028b1c330246c4cadfdd95dd05a48ddd4c763fe3fd7"
	},
	{
		"id": "2f2c232f96db",
		"ts": "2026-06-29T19:52:09.256Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 941608.64,
		"hash": "2f2c232f96dbb6be2cca9a7ab2baaa2e0900cab6094f106224104c17f00f9218"
	},
	{
		"id": "7bb1284d1457",
		"ts": "2026-06-29T19:52:09.550Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 25836997.63,
		"hash": "7bb1284d14572ea5dffae9b8944dcab1e52daad39e82699b8163d5b7d69bb706"
	}
]
