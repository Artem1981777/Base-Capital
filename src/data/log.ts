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
	"updatedAt": "2026-07-07T23:59:31.102Z",
	"tokensScored": 1991,
	"verdictsIssued": 1991,
	"safe": 1752,
	"risky": 186,
	"likelyRug": 53,
	"ticks": 130
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "1ab6c9c3f1db",
		"ts": "2026-07-07T23:59:26.935Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102215332.8,
		"hash": "1ab6c9c3f1dbe514eeddeb163bb91f1ef60913925ca3aff6ab77a209a5a64769"
	},
	{
		"id": "4173b92065d7",
		"ts": "2026-07-07T23:59:27.287Z",
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
		"liquidityUsd": 16018922.57,
		"hash": "4173b92065d729ee3ecabd18c82e9c282d22d746f8495e7b75115359b4ec1c2a"
	},
	{
		"id": "b1d76e22da6e",
		"ts": "2026-07-07T23:59:27.516Z",
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
		"liquidityUsd": 1403557.06,
		"hash": "b1d76e22da6e5a17827cb41b49e8bc53b28cc2420ec64aeec1f3da7c7a2ca323"
	},
	{
		"id": "b3714284d245",
		"ts": "2026-07-07T23:59:27.711Z",
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
		"liquidityUsd": 34281576.39,
		"hash": "b3714284d24536c87457b6f2760481d97c46e5f5724af8f55faefcf9b90dac2d"
	},
	{
		"id": "05b59c129cae",
		"ts": "2026-07-07T23:59:27.904Z",
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
		"liquidityUsd": 4011452.65,
		"hash": "05b59c129caed32a43692c66ab1eb9e6b05069928be6633b10e1b16319979c74"
	},
	{
		"id": "5e866ddd0e22",
		"ts": "2026-07-07T23:59:28.125Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 984261.05,
		"hash": "5e866ddd0e22a9f1137dca9454d160cf9ded1a76351dd6ff39be713913e0cce5"
	},
	{
		"id": "a36478392811",
		"ts": "2026-07-07T23:59:28.314Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34281576.39,
		"hash": "a3647839281162d9ed77580e663f53f8936e27f659f85865d8728732004986bc"
	},
	{
		"id": "a5aa75199050",
		"ts": "2026-07-07T23:59:28.553Z",
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
		"liquidityUsd": 2553302.55,
		"hash": "a5aa751990509af8389f8c3cee899d9e5b5f4f56ddc743f88677d84eea029c97"
	},
	{
		"id": "5b2d944856d3",
		"ts": "2026-07-07T23:59:28.743Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119386.1,
		"hash": "5b2d944856d31e226aff5db7ee2b86854eecad823c6de5faaa67b39c085847df"
	},
	{
		"id": "c8d1956aeb29",
		"ts": "2026-07-07T23:59:28.935Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 66360.24,
		"hash": "c8d1956aeb29d195a9bee87205d3b1c23db402fdd63a43bfe67d2655d2b6a974"
	},
	{
		"id": "ba3146ea61a2",
		"ts": "2026-07-07T23:59:29.120Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 174029.9,
		"hash": "ba3146ea61a27b5bbec78a2fde1831a05db24b7247f1c9397cc1ff251941a159"
	},
	{
		"id": "8d37a5f61575",
		"ts": "2026-07-07T23:59:29.308Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 192939.02,
		"hash": "8d37a5f615753778f6e636f371b82b375296d71c3e826a681ab41bc43113d08d"
	},
	{
		"id": "e28f2abab656",
		"ts": "2026-07-07T23:59:29.490Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3039919.58,
		"hash": "e28f2abab65617a2ba8c5ed3b848b7300ac474fa24ba430218d10d12d208ec8d"
	},
	{
		"id": "db23ede89d6b",
		"ts": "2026-07-07T23:59:29.666Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5245225,
		"hash": "db23ede89d6b9339f5db774b2043861da8d761a427c333dcb0135cc6bd9570bd"
	},
	{
		"id": "1b8853a74fb4",
		"ts": "2026-07-07T23:59:30.564Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2055333.61,
		"hash": "1b8853a74fb4760300de69f28c57faaad19e5c5f2b3779300968fc2048210e59"
	},
	{
		"id": "1850cd807222",
		"ts": "2026-07-07T23:59:30.746Z",
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
		"liquidityUsd": 7385933.74,
		"hash": "1850cd807222e118a384199ea101ee863fd08e6562865aa7dc8883ca69b4722d"
	},
	{
		"id": "f8d591925dc6",
		"ts": "2026-07-07T23:59:30.923Z",
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
		"liquidityUsd": 1868387.63,
		"hash": "f8d591925dc61af994c673231a3ed6e5a4b8aabd9bb7d169da889a869b57bfaf"
	},
	{
		"id": "8c351800fba0",
		"ts": "2026-07-07T23:59:31.102Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1024413.69,
		"hash": "8c351800fba09ab04f227e5c29855f7f215b9cf60bb6eb457ffcd28e86ab258c"
	},
	{
		"id": "1c0426d1e34f",
		"ts": "2026-07-07T22:57:39.361Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102172088.04,
		"hash": "1c0426d1e34fa35220ec88db30996585a3e4098e7833da02d89113856e92818f"
	},
	{
		"id": "ba84feb30c6d",
		"ts": "2026-07-07T22:57:39.639Z",
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
		"liquidityUsd": 16044647.84,
		"hash": "ba84feb30c6db7c364e74affb7ffa2eb72d19507e75e597d2738ec41cd0c6fcd"
	},
	{
		"id": "a844e9d382d0",
		"ts": "2026-07-07T22:57:39.921Z",
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
		"liquidityUsd": 1406631.27,
		"hash": "a844e9d382d0c826a5d32b8674283645b7c76a0203646ffc8fb04c118224fcb2"
	},
	{
		"id": "f35d43932e9d",
		"ts": "2026-07-07T22:57:40.423Z",
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
		"liquidityUsd": 34436071.82,
		"hash": "f35d43932e9d96260e0bfbaf11a09cb37c77e90e6d349ee35eba878e3da23196"
	},
	{
		"id": "f2e348f55a2d",
		"ts": "2026-07-07T22:57:40.689Z",
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
		"liquidityUsd": 4027586.59,
		"hash": "f2e348f55a2de6b223ba405df089598d0b411ccd411d13d1cbc0908edf22ad04"
	},
	{
		"id": "097849fc4bef",
		"ts": "2026-07-07T22:57:40.962Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 986833.68,
		"hash": "097849fc4bef15b9dd28b285653b6cf448350707a6f318cf7e05943a34bab83a"
	},
	{
		"id": "1b4cc83c056c",
		"ts": "2026-07-07T22:57:41.212Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34436071.82,
		"hash": "1b4cc83c056c35b89bd81d7328ddea2f7f3a0d4eaaa16597ec56fc005a1ea48f"
	},
	{
		"id": "115b6d317846",
		"ts": "2026-07-07T22:57:41.482Z",
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
		"liquidityUsd": 2562170.3,
		"hash": "115b6d3178468b2fe76b8e4edfd9b46568d3d6fb362059ce06d09587063a0c49"
	},
	{
		"id": "8bd4a88fbefa",
		"ts": "2026-07-07T22:57:41.733Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118135.52,
		"hash": "8bd4a88fbefae31c23fd67951646e1edf82f99da2fdca7df0156778e634b62cc"
	},
	{
		"id": "0da3fc45192f",
		"ts": "2026-07-07T22:57:42.006Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 67296.57,
		"hash": "0da3fc45192fd93f424d084e9e8099c3569b5d720f7ce19f3be96e82ddb0e8fd"
	},
	{
		"id": "4cf675c42e3a",
		"ts": "2026-07-07T22:57:42.245Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 176052.23,
		"hash": "4cf675c42e3ac8be6c2d47114f8715330c2b01693064d8a932c9fb44f14c9131"
	},
	{
		"id": "881aa57e7fec",
		"ts": "2026-07-07T22:57:42.501Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182389.71,
		"hash": "881aa57e7fec83ce16dbb0e9f4e7001088ca8fb4064ba74f640192f35d1b242b"
	},
	{
		"id": "2225809e7412",
		"ts": "2026-07-07T22:57:42.741Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3038057.27,
		"hash": "2225809e7412731fd3585b73b20399eaf6e78601b6019d54392388329b1d3e86"
	},
	{
		"id": "67ff463c2628",
		"ts": "2026-07-07T22:57:42.996Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2058811.52,
		"hash": "67ff463c26289334427114f6333919fc231b18cfa4763017dbdaf9224dc95f46"
	},
	{
		"id": "44236aa6478a",
		"ts": "2026-07-07T22:57:43.234Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5232420.94,
		"hash": "44236aa6478a93d976a59046f22c32317bf295d1589b9af1ce1d9394da26a7ed"
	},
	{
		"id": "1bce91c7b53b",
		"ts": "2026-07-07T22:57:43.488Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7449396.99,
		"hash": "1bce91c7b53b7ab8601a22b1ddf949dacf767df7f7cd4ad8e30460991bdc39f8"
	},
	{
		"id": "b105ab6433a1",
		"ts": "2026-07-07T22:57:43.724Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1871200.16,
		"hash": "b105ab6433a1ffecdde2cdc2d8584d79f714ffa72095e7b166ca4b258ee92e0b"
	},
	{
		"id": "8005bf00afa6",
		"ts": "2026-07-07T22:57:43.979Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1033335.15,
		"hash": "8005bf00afa6995333ed87ceb74d556e9f18321f09cdf2c5208ed968e0ab063d"
	},
	{
		"id": "301e3d0a2acf",
		"ts": "2026-07-07T21:20:50.873Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102419300.89,
		"hash": "301e3d0a2acf72fd727d4af4171094cbdf5156367ea9f25c76fa14dd631d881b"
	},
	{
		"id": "bbfb511ac400",
		"ts": "2026-07-07T21:20:51.146Z",
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
		"liquidityUsd": 15328534.44,
		"hash": "bbfb511ac4006b8ab4dce6045fe510b02860169b97236d5a7f06a728f5e96d72"
	},
	{
		"id": "1aa0fb4841b5",
		"ts": "2026-07-07T21:20:51.653Z",
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
		"liquidityUsd": 1410253.78,
		"hash": "1aa0fb4841b505519fa2646e54fb98dfd752dcc7f8274bf012cfbacd73b24c8f"
	},
	{
		"id": "789d54df83b9",
		"ts": "2026-07-07T21:20:51.911Z",
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
		"liquidityUsd": 34714634.63,
		"hash": "789d54df83b9efc3a0e9527bbc1deb5aeca09eb40bd21e67ba85a51b772f33a6"
	},
	{
		"id": "f4f9bdc727cc",
		"ts": "2026-07-07T21:20:52.170Z",
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
		"liquidityUsd": 4034554.13,
		"hash": "f4f9bdc727ccd2863d7e3ecbc308187be35116384e43c205c5bb977723f4f1d8"
	},
	{
		"id": "ee503e892713",
		"ts": "2026-07-07T21:20:52.459Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 995433.05,
		"hash": "ee503e89271324dae9e06e974cabc775c3ecc7f7a88899e8a5220d142e30024e"
	},
	{
		"id": "d041e7899ee9",
		"ts": "2026-07-07T21:20:52.741Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34714634.63,
		"hash": "d041e7899ee9f920538478847d7ef11c1014312e060a0cf2dd18b8385cf68d47"
	},
	{
		"id": "7958fd0d50e9",
		"ts": "2026-07-07T21:20:53.037Z",
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
		"liquidityUsd": 2572349.1,
		"hash": "7958fd0d50e94a63af44481d8ff59fd64bdda3023d134290a44e971c5c20193a"
	},
	{
		"id": "381bc6c9a492",
		"ts": "2026-07-07T21:20:53.322Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113975.25,
		"hash": "381bc6c9a492a8b732f9345b27a156b3c1ebd8e979ec8bfa2ce669345eea4d84"
	},
	{
		"id": "f3f8f9cc1771",
		"ts": "2026-07-07T21:20:53.601Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 69683.72,
		"hash": "f3f8f9cc17716cb3a799cce766db85d26360075de419ee8e379dc7c1c62368d9"
	},
	{
		"id": "4c7597b91db4",
		"ts": "2026-07-07T21:20:53.850Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 176665.88,
		"hash": "4c7597b91db4fd95d75d13db2d7d6145dcf5e38893b274aca1733cdfba6cd40c"
	},
	{
		"id": "e8701778e8c5",
		"ts": "2026-07-07T21:20:54.107Z",
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
		"liquidityUsd": 1373913.05,
		"hash": "e8701778e8c5637ca3d839cad550273e229c766014ae6c0a064b5019edbcd1f8"
	},
	{
		"id": "daa5eaa4fe90",
		"ts": "2026-07-07T21:20:54.347Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7492297.97,
		"hash": "daa5eaa4fe9072c11a1cfd35fcebbe71499fe19fd6f135d21cf3247d74888ca5"
	},
	{
		"id": "e0a9587ce49b",
		"ts": "2026-07-07T21:20:54.592Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 171364.71,
		"hash": "e0a9587ce49b334c21d4eb0eb56572cff20c6eb95ebba8f89961a6ffe8ef5c38"
	},
	{
		"id": "983466a3cbeb",
		"ts": "2026-07-07T21:20:54.848Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2889423.06,
		"hash": "983466a3cbeb009f3a6d604eff8e9b34c3c88be699e3fb985a2d5c2cd08ca818"
	},
	{
		"id": "e26fe50700fe",
		"ts": "2026-07-07T21:20:55.087Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2072258.04,
		"hash": "e26fe50700fe0a1dd210a9329459d79193d26029ee0fc70bbdccb04dae6571a3"
	},
	{
		"id": "91bb347d14ea",
		"ts": "2026-07-07T21:20:55.330Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5133351.74,
		"hash": "91bb347d14ea9fa29fba079b2e16779637eab6bd768e4f07548c7640a4dbeb3d"
	},
	{
		"id": "83d45b54812a",
		"ts": "2026-07-07T21:20:55.583Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567139.11,
		"hash": "83d45b54812ac9d5271f96138a7a3a5ee039f980237eaa26695dffffdde3cc6d"
	},
	{
		"id": "69cf567223c9",
		"ts": "2026-07-07T19:50:14.090Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102569036.54,
		"hash": "69cf567223c9226db53f2778d6ff5305ffd140bbcf69fa05bbef9fc0e089deef"
	},
	{
		"id": "743dbf875e98",
		"ts": "2026-07-07T19:50:14.299Z",
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
		"liquidityUsd": 15789228.74,
		"hash": "743dbf875e98afcc12717a2a8396bff0fbdf9f64b81cd43d1da35dbc85abe1cb"
	},
	{
		"id": "191133fae472",
		"ts": "2026-07-07T19:50:14.569Z",
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
		"liquidityUsd": 1418140.6,
		"hash": "191133fae47213b984a9851cd8b1180113c2c75d50a4cfeb3523def2c0c08f27"
	},
	{
		"id": "b37df2545cc3",
		"ts": "2026-07-07T19:50:14.765Z",
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
		"liquidityUsd": 34823255.13,
		"hash": "b37df2545cc3be6a0f8c67ed960eefd77528c54335a32ecc6030057376045d91"
	},
	{
		"id": "93efbe9f5fb6",
		"ts": "2026-07-07T19:50:15.847Z",
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
		"liquidityUsd": 4053751.51,
		"hash": "93efbe9f5fb660f3f6342210b92d5a29475d75d3e0347fbecb4a8d7db199b5da"
	},
	{
		"id": "62ae2504bf70",
		"ts": "2026-07-07T19:50:16.615Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1000547.14,
		"hash": "62ae2504bf70bf043adfbf339e15fb0de25af208cace08bc8112098c639451c8"
	},
	{
		"id": "d4286507020a",
		"ts": "2026-07-07T19:50:17.740Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34823255.13,
		"hash": "d4286507020a933337cd88f2fe825f6feff5dfba3f3965f16ba7fa1621fe3676"
	},
	{
		"id": "8d33cdf492ea",
		"ts": "2026-07-07T19:50:17.941Z",
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
		"liquidityUsd": 2589409.77,
		"hash": "8d33cdf492ea269e249588ca1df40a2d3519fa7306e3c1888d821e386190b4d7"
	},
	{
		"id": "a549081474ce",
		"ts": "2026-07-07T19:50:18.138Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 123465.96,
		"hash": "a549081474ced71c499fedb96855758fce839ba28052cec7d8111e5a8bd3c893"
	},
	{
		"id": "e4f129309a22",
		"ts": "2026-07-07T19:50:18.332Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 66,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.32,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 175349.06,
		"hash": "e4f129309a22dfe925d6e1b8eb5d524edce7948502cb71e75d8253801899b34a"
	},
	{
		"id": "84f8189480e1",
		"ts": "2026-07-07T19:50:18.515Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71607.38,
		"hash": "84f8189480e16228bdec75d687b3021d7b790ff59467f815eea19127fbc17d17"
	},
	{
		"id": "1c7508fac7b9",
		"ts": "2026-07-07T19:50:19.520Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7568166.13,
		"hash": "1c7508fac7b99ec590113da10aee054c8c3d302d72fd0b364449da12edbd5141"
	},
	{
		"id": "029a80cc08cf",
		"ts": "2026-07-07T19:50:19.713Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2861797.94,
		"hash": "029a80cc08cf59ce8d426ae289f3b57a8b751df031fc582d9b46dc238c58c972"
	},
	{
		"id": "2bfa2417d881",
		"ts": "2026-07-07T19:50:19.897Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2056402.75,
		"hash": "2bfa2417d881d1ff882159fb86a08e27fb179bd644964d38b30cf079f497b083"
	},
	{
		"id": "c532d59dd5be",
		"ts": "2026-07-07T19:50:20.093Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5252322.94,
		"hash": "c532d59dd5bed1faa25bee0907d7d1595561f38dbc5d456ea1303c41379c9960"
	},
	{
		"id": "1d234fb29279",
		"ts": "2026-07-07T19:50:20.287Z",
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
		"liquidityUsd": 1853020.13,
		"hash": "1d234fb29279b613711f2e9ef9e5fbf92ad83c7358e512b62fd76361f2b0013d"
	},
	{
		"id": "cdb620d51899",
		"ts": "2026-07-07T19:50:20.481Z",
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
		"liquidityUsd": 1405348.36,
		"hash": "cdb620d51899296aa9ebaf2103d07e77299ed3943b25170ff096cfd486b0bc78"
	},
	{
		"id": "1f02a5cfa66d",
		"ts": "2026-07-07T19:50:20.668Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 565856.82,
		"hash": "1f02a5cfa66d082f2ea8b5b0724404884270e6641e55d1508ce253baf9ce66f1"
	},
	{
		"id": "bd41babd7d1b",
		"ts": "2026-07-07T17:10:47.558Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 103058882.42,
		"hash": "bd41babd7d1b5fcd5ceb9caa905503435862fb4347938cbd932be7e599c9123b"
	},
	{
		"id": "5e13711fec64",
		"ts": "2026-07-07T17:10:47.938Z",
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
		"liquidityUsd": 16639314.01,
		"hash": "5e13711fec64ae8b8e264913856f8120f09cf827fe3ea194a5bc457d89d56df9"
	},
	{
		"id": "f73db73cbaba",
		"ts": "2026-07-07T17:10:48.151Z",
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
		"liquidityUsd": 1420788.1,
		"hash": "f73db73cbabac78c35d498aed1bd79a5f69f824c407ad90d8a31a615fa08cd00"
	},
	{
		"id": "85d3366a9c6a",
		"ts": "2026-07-07T17:10:48.368Z",
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
		"liquidityUsd": 35179181.82,
		"hash": "85d3366a9c6a79ed7c47819a37e3b67de40af32a456d9ac9bdf834a81126b2c2"
	},
	{
		"id": "d69b0b3c4376",
		"ts": "2026-07-07T17:10:48.583Z",
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
		"liquidityUsd": 4109589.06,
		"hash": "d69b0b3c43765d797a425faa052f36cb0bf967104b77fb4437d41477851afdd8"
	},
	{
		"id": "b317a7ed62b0",
		"ts": "2026-07-07T17:10:48.797Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1008836.84,
		"hash": "b317a7ed62b0f76a5f25c3cb179453fd840c8f50dbbe81d8140e488c04988711"
	},
	{
		"id": "1493ca2ddad7",
		"ts": "2026-07-07T17:10:49.017Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35179181.82,
		"hash": "1493ca2ddad723222be2c3b5a4241f6d867f314665e77354a3a1e71669813e6a"
	},
	{
		"id": "c00aa8e8f29c",
		"ts": "2026-07-07T17:10:49.238Z",
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
		"liquidityUsd": 2590290.04,
		"hash": "c00aa8e8f29cc7c075de49d6f232e33077348855fa8fa8ecf295ac7308fc420a"
	},
	{
		"id": "04693ab59f21",
		"ts": "2026-07-07T17:10:49.451Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 122075.71,
		"hash": "04693ab59f21d5608a49093f17c39720d60f5edfb6963069daba642ec29f0bbd"
	},
	{
		"id": "2ecc944019cf",
		"ts": "2026-07-07T17:10:49.664Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 66,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.32,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 178164.37,
		"hash": "2ecc944019cfeba27cce75ce5d66b41ebe0cdbe7eb1436ccb9684d897a4f2a58"
	},
	{
		"id": "77800642f81c",
		"ts": "2026-07-07T17:10:49.869Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 191586.96,
		"hash": "77800642f81c0e69ce066eb74a3ee3bbf9b6e5f5b9e19dc9e04d2325484fe578"
	},
	{
		"id": "c7b2dc3022fe",
		"ts": "2026-07-07T17:10:50.062Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7693649.36,
		"hash": "c7b2dc3022fe1e2cc8211c5505df98656e33a4a3de14251b30083897c7929eb9"
	},
	{
		"id": "e2c4e00d2730",
		"ts": "2026-07-07T17:10:50.262Z",
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
		"liquidityUsd": 2868942.84,
		"hash": "e2c4e00d27306ed1205220ff66414aa1d51e011cf931dbb53abb71322ee56b9d"
	},
	{
		"id": "7ddab028e385",
		"ts": "2026-07-07T17:10:50.464Z",
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
		"liquidityUsd": 1428447.13,
		"hash": "7ddab028e3855b96c2c42128082420a826ca16e6744236436ca6bb10d5cc4c01"
	},
	{
		"id": "c44de048f4a9",
		"ts": "2026-07-07T17:10:50.659Z",
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
		"liquidityUsd": 2111490.96,
		"hash": "c44de048f4a94746099e4cd5a6a78182d9a3f53191d8708405f2bbcd24cf9a04"
	},
	{
		"id": "b69a2b86e496",
		"ts": "2026-07-07T17:10:50.854Z",
		"symbol": "OS",
		"token": "0xD34cF0759cb65A0fe508bb1DaE0A16Cb5109bB7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 76338.66,
		"hash": "b69a2b86e496a9ab86d24b25307cf6927103cc28411bded84a332bbe6d088931"
	},
	{
		"id": "1830082d02a5",
		"ts": "2026-07-07T17:10:51.053Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 570578.62,
		"hash": "1830082d02a5187b80e2fcc9da333ca3ea9eea14ced7c32ba4a9c1220da1125b"
	},
	{
		"id": "0f9d9ad31504",
		"ts": "2026-07-07T17:10:51.254Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1895263.57,
		"hash": "0f9d9ad31504ade656405bc735d5fe369467a00eda0fa7ac64a18ef6db7ce3c1"
	},
	{
		"id": "52440840d206",
		"ts": "2026-07-07T16:07:35.300Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102861614.74,
		"hash": "52440840d20633dd018960061ec16c9b2bd9b1b79b18578ae35fc81d0412f3a3"
	},
	{
		"id": "0d4d88e67c1a",
		"ts": "2026-07-07T16:07:35.743Z",
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
		"liquidityUsd": 16549543.95,
		"hash": "0d4d88e67c1ab2123b62b55e6838a6f61b0fec03a22a2faca05adb62f2bf26d6"
	},
	{
		"id": "e62a6cb0b95a",
		"ts": "2026-07-07T16:07:35.978Z",
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
		"liquidityUsd": 1412820.26,
		"hash": "e62a6cb0b95a4716265f76fc3d4ce0528f148d400fda844838e7de3bdebb2c69"
	},
	{
		"id": "e05aa4709a72",
		"ts": "2026-07-07T16:07:36.220Z",
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
		"liquidityUsd": 35308635.76,
		"hash": "e05aa4709a72478c2740fa2ae2e606720cd641d4345b441b00651b7465742d78"
	},
	{
		"id": "f07184a5d232",
		"ts": "2026-07-07T16:07:36.525Z",
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
		"liquidityUsd": 4101181.51,
		"hash": "f07184a5d232865d24ec51932ce5e77044d29396338faad277b7217939851759"
	},
	{
		"id": "3c38c4ee7a29",
		"ts": "2026-07-07T16:07:36.758Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1008836.84,
		"hash": "3c38c4ee7a299bb1aeb14562f362fdc8a2f3f8f2c891a5112d0833deee8bffde"
	},
	{
		"id": "c2fbfafa1823",
		"ts": "2026-07-07T16:07:36.991Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35308630.81,
		"hash": "c2fbfafa182301e5280595957ebceeea06dd9af46d29d586f21019a3ddacd749"
	},
	{
		"id": "589ecaee16d5",
		"ts": "2026-07-07T16:07:37.227Z",
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
		"liquidityUsd": 2525737.21,
		"hash": "589ecaee16d53214730f15606afb7c0193f6bcc5b82afade90a27a2614704f5b"
	},
	{
		"id": "493bdb585f44",
		"ts": "2026-07-07T16:07:37.461Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 127838.08,
		"hash": "493bdb585f44b5d0c97dd072be030410a42efb79b6019589fe9a2e2433abdc80"
	},
	{
		"id": "8becb6ce33ec",
		"ts": "2026-07-07T16:07:37.694Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 66,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.32,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 179948.57,
		"hash": "8becb6ce33ece56dd0f8045bde74365edf2f18c4a75b0b6731a004657ac17515"
	},
	{
		"id": "e90483129e3b",
		"ts": "2026-07-07T16:07:37.913Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 191582.08,
		"hash": "e90483129e3b9dc71db6c49a0504051120493a7cd39de15db311e320004e89f9"
	},
	{
		"id": "63a5693be75d",
		"ts": "2026-07-07T16:07:38.418Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7535399.41,
		"hash": "63a5693be75de0d9d296bdbab8de84d25894b20fd2ac15de2423fa6001982a28"
	},
	{
		"id": "a5a1b0a14f21",
		"ts": "2026-07-07T16:07:38.639Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2097519.41,
		"hash": "a5a1b0a14f21c8e5089269ede92602867cd11863c438b858a0ad5f21c0858cb6"
	},
	{
		"id": "1a07ced889cf",
		"ts": "2026-07-07T16:07:38.857Z",
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
		"liquidityUsd": 1444755.56,
		"hash": "1a07ced889cf7354ed69ea97baae327a4fffb0079f45a99b54da8872d386fbd3"
	},
	{
		"id": "519b02544f3d",
		"ts": "2026-07-07T16:07:39.077Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1952629.95,
		"hash": "519b02544f3dd33b84205123abdcf794ec401a2a519329186ef182912119bfc5"
	},
	{
		"id": "cfb6659bcdbd",
		"ts": "2026-07-07T16:07:39.298Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3072771.07,
		"hash": "cfb6659bcdbdd5147d5ba57553baa7eaf8931dfc727974e53a4fe8cbfacb1caa"
	},
	{
		"id": "76f8cf2a0a9b",
		"ts": "2026-07-07T16:07:39.565Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 566882.28,
		"hash": "76f8cf2a0a9bea9fcea63fdc56c8c5a2190f5adab1767b20736adb2e0a766e39"
	},
	{
		"id": "ee6eb85f4efa",
		"ts": "2026-07-07T16:07:39.783Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5402764.06,
		"hash": "ee6eb85f4efa96fc1d4b05e53888bebb63f020668a4dc1b09856fb5cb27ba7d5"
	},
	{
		"id": "a03a1bb04137",
		"ts": "2026-07-07T14:24:13.167Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102062767.25,
		"hash": "a03a1bb04137985be1b1a140c7ce1a65a3c813ef83163d48dd22c35c315f6ef6"
	},
	{
		"id": "bcb67ee2949c",
		"ts": "2026-07-07T14:24:13.505Z",
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
		"liquidityUsd": 16306334.64,
		"hash": "bcb67ee2949cd909278e0115299f07d9c86ac1250fdb1073062891f0dd1bf828"
	},
	{
		"id": "3330c093bb9b",
		"ts": "2026-07-07T14:24:13.742Z",
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
		"liquidityUsd": 1390403.24,
		"hash": "3330c093bb9b5d58305d101b529c347f9807d029541565c928bff05c48b6c61a"
	},
	{
		"id": "e7dd693f0d35",
		"ts": "2026-07-07T14:24:13.975Z",
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
		"liquidityUsd": 35199906.28,
		"hash": "e7dd693f0d35a62ac2486ab7eaf73db885cbacb9a59154616fa0afec4b4e41e1"
	},
	{
		"id": "c95b0aef88bd",
		"ts": "2026-07-07T14:24:14.221Z",
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
		"liquidityUsd": 4040993.95,
		"hash": "c95b0aef88bd66098f0330a958a1ef278136b172f31079ed12a7a6e37bddf595"
	},
	{
		"id": "d9c245edf683",
		"ts": "2026-07-07T14:24:14.461Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1002199.34,
		"hash": "d9c245edf68382aafbb5e8761830bf208b409c4ee065849ec3107518c4fd9d3d"
	},
	{
		"id": "3a73d5ab8b4f",
		"ts": "2026-07-07T14:24:14.694Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35199906.28,
		"hash": "3a73d5ab8b4f980d18572c52288601267e3b1473deef5664844ff26e30a9ad9a"
	},
	{
		"id": "9685bd56d340",
		"ts": "2026-07-07T14:24:14.930Z",
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
		"liquidityUsd": 2469318.52,
		"hash": "9685bd56d340a1bfb48d0934c6c886c77e1eca5326a3650b9c501f17a7d12d43"
	},
	{
		"id": "3664c08bbb10",
		"ts": "2026-07-07T14:24:15.163Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 135671.24,
		"hash": "3664c08bbb10fbd4e4da250c439cfae92bba915859fd3bda4e5909984fbb3b7f"
	},
	{
		"id": "56a3625aae16",
		"ts": "2026-07-07T14:24:15.397Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 66,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.32,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 176174.94,
		"hash": "56a3625aae16496e704d14e6b1cbda3e75fe95309b4fc614a1ba89c117653c8a"
	},
	{
		"id": "f5f57e9897e5",
		"ts": "2026-07-07T14:24:15.615Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 186885.8,
		"hash": "f5f57e9897e558877904230b0c1f6a6e234507137d3ae902edbba6c392c36084"
	},
	{
		"id": "d75ae15c2ef5",
		"ts": "2026-07-07T14:24:15.834Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7479358.43,
		"hash": "d75ae15c2ef55b2976a111b31ae55064f8beb206516723de1246a09b9df9de5b"
	},
	{
		"id": "b73faaedc5af",
		"ts": "2026-07-07T14:24:16.053Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2064162.6,
		"hash": "b73faaedc5af99290b675c4f8ae781d584a6db3c0fe3a5402ba606aed4f22b8e"
	},
	{
		"id": "4870e0d1eb4a",
		"ts": "2026-07-07T14:24:16.271Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1913365.98,
		"hash": "4870e0d1eb4ac87dac694b2e4d1ebbb48573346262687bd1340ac845c8c2ebaa"
	},
	{
		"id": "c7c916b31eb2",
		"ts": "2026-07-07T14:24:16.490Z",
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
		"liquidityUsd": 1403347.33,
		"hash": "c7c916b31eb2be7de8dac0ea44d344cac6fd1dd180f331d32640efc8f2017503"
	},
	{
		"id": "21a9d0eb2f47",
		"ts": "2026-07-07T14:24:16.726Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 561508.31,
		"hash": "21a9d0eb2f4704734bceb9a8fc448bfe4744e6135b9c266bc62c8084cf297be0"
	},
	{
		"id": "ca9593572741",
		"ts": "2026-07-07T14:24:16.947Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3170166.21,
		"hash": "ca959357274186caa00839bd654b2b63f2b82156039f67d9bf2e3491d9cbdbde"
	},
	{
		"id": "44bc6b0337db",
		"ts": "2026-07-07T14:24:17.296Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 5232682.02,
		"hash": "44bc6b0337db20e3395a626409be1a63c7e62d80a3c56801d73bcacf350326f5"
	},
	{
		"id": "34da2520535e",
		"ts": "2026-07-07T11:45:17.854Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102124853.36,
		"hash": "34da2520535ee63fb1c6a18db05957a7b3b95befc7fd0ada6e220794cff016d6"
	},
	{
		"id": "aaf13e045ca9",
		"ts": "2026-07-07T11:45:18.865Z",
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
		"liquidityUsd": 15442188.65,
		"hash": "aaf13e045ca9ee88cdd1f7930307adf4314f34dc96a988a55701de3e8af28d48"
	},
	{
		"id": "62496e5a89d1",
		"ts": "2026-07-07T11:45:19.125Z",
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
		"liquidityUsd": 1405700.24,
		"hash": "62496e5a89d14fce8ccc7c4bc4a64fee20705c5c1f82d4463c18e944b8d573ba"
	},
	{
		"id": "350931471790",
		"ts": "2026-07-07T11:45:19.366Z",
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
		"liquidityUsd": 34821031.99,
		"hash": "3509314717904d864fd8a62b8b085a5bcbb79657371a84c75fe6c497600a34aa"
	},
	{
		"id": "01dae1ab9df8",
		"ts": "2026-07-07T11:45:19.606Z",
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
		"liquidityUsd": 4068212.05,
		"hash": "01dae1ab9df88d4acbadabf9f49a7ce3a080be1b2d2cd83e4b481a8039751eab"
	},
	{
		"id": "1fc7cc289836",
		"ts": "2026-07-07T11:45:21.510Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1002199.34,
		"hash": "1fc7cc289836e6b155fd4b7af17d7c3181ef592f34bd1001c9876ca86e134736"
	},
	{
		"id": "bd6ddadfa03b",
		"ts": "2026-07-07T11:45:22.402Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34821031.99,
		"hash": "bd6ddadfa03b967924a5e5e19028f576db5704b822a9afc5b09547b767e0693f"
	},
	{
		"id": "907d717e0bb7",
		"ts": "2026-07-07T11:45:22.653Z",
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
		"liquidityUsd": 2441872.96,
		"hash": "907d717e0bb75680ab2f561b69ea85ff45464efd463fd81716ec3f6fa9c3ad4b"
	},
	{
		"id": "8d1557e93226",
		"ts": "2026-07-07T11:45:24.070Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 123769.06,
		"hash": "8d1557e93226d727d09e98243471c48ae0299869a8888158d22890112896f4d4"
	},
	{
		"id": "14399493d9b4",
		"ts": "2026-07-07T11:45:24.311Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 66,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.32,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 175374.39,
		"hash": "14399493d9b4ed71bcbeb059fff1039d4cb98a6eeb7723eff1ee1c812b74a3f6"
	},
	{
		"id": "aa2c1f0948be",
		"ts": "2026-07-07T11:45:24.538Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 193092.91,
		"hash": "aa2c1f0948bebd4df3c997d9ea4db2426129e3d29224087e4dbd0c63a8f27a9d"
	},
	{
		"id": "9c910b590833",
		"ts": "2026-07-07T11:45:24.777Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7522103.96,
		"hash": "9c910b590833c465f6218713da40254cfa7168941b60f0a1460e1445d4438d44"
	},
	{
		"id": "b4cede985fe3",
		"ts": "2026-07-07T11:45:25.006Z",
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
		"liquidityUsd": 1417614.93,
		"hash": "b4cede985fe3b3242aa0268b651f51567313f48c9b29d4fed356ad0497fb50aa"
	},
	{
		"id": "31b8a74c0628",
		"ts": "2026-07-07T11:45:25.273Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 563184.89,
		"hash": "31b8a74c0628ed95755067680f8449af64608fb4276de8572be45a83d6976a47"
	},
	{
		"id": "3b1b5c734558",
		"ts": "2026-07-07T11:45:25.517Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1866530.44,
		"hash": "3b1b5c7345581bc2295d03921b54c75184581ce244ebdbf3d22c7acbf9d29013"
	},
	{
		"id": "acd845d73db1",
		"ts": "2026-07-07T11:45:28.171Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3299731.65,
		"hash": "acd845d73db1011334932357b0db4d53f3f011d76bc03e79199b48314df93bbd"
	},
	{
		"id": "3b11c5a78a89",
		"ts": "2026-07-07T11:45:28.401Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 445644.15,
		"hash": "3b11c5a78a8962a21fd521de206e5ca50c893594a005aa2f15cab1eccf7bb8a2"
	},
	{
		"id": "b62231ae9085",
		"ts": "2026-07-07T11:45:29.359Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2071523.43,
		"hash": "b62231ae9085882f8e8b2ba39a04fef447aa9ff78ab9b6bc9af23102b64a9b16"
	},
	{
		"id": "f0b6c26b1b60",
		"ts": "2026-07-07T08:20:05.974Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101933304.5,
		"hash": "f0b6c26b1b60ebb3410903db13805773186891735e24890e9202f4de7388a5f1"
	},
	{
		"id": "a616a7534fd3",
		"ts": "2026-07-07T08:20:06.499Z",
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
		"liquidityUsd": 16263098.92,
		"hash": "a616a7534fd36a3967ba48ed7a37b46f086e3afe6a6aeab716f8cbc4001aa27d"
	},
	{
		"id": "8aa791bf5078",
		"ts": "2026-07-07T08:20:06.991Z",
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
		"liquidityUsd": 1400670.81,
		"hash": "8aa791bf5078308715561fa07f50326b017793a0210dde911c461d9a323e4c4f"
	},
	{
		"id": "1ba8dc5d5ce0",
		"ts": "2026-07-07T08:20:07.245Z",
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
		"liquidityUsd": 34328477.64,
		"hash": "1ba8dc5d5ce00e3ee3fe2fbfb3075970bd490cddccda55597d6d44351063a3ef"
	},
	{
		"id": "84ef583b18fb",
		"ts": "2026-07-07T08:20:07.512Z",
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
		"liquidityUsd": 4058431.42,
		"hash": "84ef583b18fbc9957ab3a841763d30d90d312140a40c9560285fe4111fafb92c"
	},
	{
		"id": "7b8a1a79305b",
		"ts": "2026-07-07T08:20:07.791Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1004316.4,
		"hash": "7b8a1a79305ba3fe5014ddc6206ab2ce050ef8ccf3d99cc8d7bcb9c48520ae8e"
	},
	{
		"id": "8a06a5b9e865",
		"ts": "2026-07-07T08:20:08.052Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34328477.64,
		"hash": "8a06a5b9e865770aa94a68300ad1b1cdffef943141cbd592cce5020caf6b7469"
	},
	{
		"id": "98239c05fd69",
		"ts": "2026-07-07T08:20:08.306Z",
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
		"liquidityUsd": 2335819.18,
		"hash": "98239c05fd69f201ecbe83e1dc5dd948e202d979713eb457239844f4efc751aa"
	},
	{
		"id": "155c0611496b",
		"ts": "2026-07-07T08:20:08.571Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 119746.64,
		"hash": "155c0611496b434db1d45517daa5c27df505997b2e8ab597a68d5b913f2342c6"
	},
	{
		"id": "2eecc75f0b11",
		"ts": "2026-07-07T08:20:08.826Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 66,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.32,
		"flags": [
			"modifiable_tax",
			"external_call",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 179135.08,
		"hash": "2eecc75f0b116e6eb9f68e4c3d03bb347cf6e920007af35b2e97fd8c23d8a034"
	},
	{
		"id": "b797633de184",
		"ts": "2026-07-07T08:20:09.071Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 448663.72,
		"hash": "b797633de1840bf5f7c73546991e6bed8fad20b49a2c8d4d90fadbb1801e5f30"
	},
	{
		"id": "95f51b430754",
		"ts": "2026-07-07T08:20:09.315Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182345.18,
		"hash": "95f51b4307541189060fbc63d71ef905eefda8a3890add0a18310cea3d02970f"
	},
	{
		"id": "37699c9439db",
		"ts": "2026-07-07T08:20:09.559Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4677370.93,
		"hash": "37699c9439db9f798668ffe83754da0862d94cd6384d0a024e3fa80d0854328d"
	},
	{
		"id": "b59f0f599554",
		"ts": "2026-07-07T08:20:09.798Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7555781.38,
		"hash": "b59f0f599554b339b6a45305581f1cde60a1f135ae1d3dd7dfac7ce9f43630bc"
	},
	{
		"id": "2e9c5b50737c",
		"ts": "2026-07-07T08:20:10.043Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 118539.49,
		"hash": "2e9c5b50737c1927f78a7847d05ba9ce5bbc5344df503ac216933ca11909cddc"
	},
	{
		"id": "a5b120275302",
		"ts": "2026-07-07T08:20:10.282Z",
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
		"liquidityUsd": 1491058.93,
		"hash": "a5b120275302643a0c43554e4b382dcb930a14099555de3d4e88fef66c0de0f6"
	},
	{
		"id": "9a6eab11770e",
		"ts": "2026-07-07T08:20:10.528Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 562087.64,
		"hash": "9a6eab11770e7c00dea80562675e5b05c43cd25a67d4c9db48d597200facafe8"
	},
	{
		"id": "c4c6ac9c5a51",
		"ts": "2026-07-07T08:20:10.769Z",
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
		"liquidityUsd": 3396077.28,
		"hash": "c4c6ac9c5a51330f64c3281892ab179ddd5069daf585206eaa4e0f467c65c8c3"
	},
	{
		"id": "2f4e382b6cbe",
		"ts": "2026-07-07T04:48:37.007Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 101562253.4,
		"hash": "2f4e382b6cbeff205fd63496effe80b2f6898af9d72e15789b6593716065ff4a"
	},
	{
		"id": "ea69a42806f2",
		"ts": "2026-07-07T04:48:37.276Z",
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
		"liquidityUsd": 15148946.6,
		"hash": "ea69a42806f27d909da18850684406be8a48e1e45eca4f9f6ea61a24a5c3ca90"
	},
	{
		"id": "1b0eba4c3a55",
		"ts": "2026-07-07T04:48:37.783Z",
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
		"liquidityUsd": 1388917.14,
		"hash": "1b0eba4c3a55785d4498db65ac634587ed442f40f1d022873aafd9f4e4ac206d"
	},
	{
		"id": "d50b999194bc",
		"ts": "2026-07-07T04:48:38.041Z",
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
		"liquidityUsd": 34114945.95,
		"hash": "d50b999194bcb779fdd705725fdcc1fb0c65a4a27d266fea8073fc626308cad6"
	},
	{
		"id": "18c052afafbe",
		"ts": "2026-07-07T04:48:38.291Z",
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
		"liquidityUsd": 4046984.29,
		"hash": "18c052afafbe7233df63c83884f06d7cffd5e67ee8eb5956cb45dbc8cc51e916"
	},
	{
		"id": "95fc777b5c06",
		"ts": "2026-07-07T04:48:38.546Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1001918.65,
		"hash": "95fc777b5c06b53487f4432101f027d22f34d0b87345ca116cfbb0509ae616de"
	},
	{
		"id": "ab1bbb58d4f9",
		"ts": "2026-07-07T04:48:38.807Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34114945.91,
		"hash": "ab1bbb58d4f927e5b423cfad98fab4f0a5437272958aaadd661d9faef2e6f1b8"
	},
	{
		"id": "c1c732df4eed",
		"ts": "2026-07-07T04:48:39.058Z",
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
		"liquidityUsd": 2326458.42,
		"hash": "c1c732df4eedf7a94c4e921f2b7c737921f6fe36a1d2c46aafa504935517abd3"
	},
	{
		"id": "5e0162609181",
		"ts": "2026-07-07T04:48:39.314Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 175781,
		"hash": "5e0162609181e136b0252d51631ee98a8db5b5021ea8e5c6ec967a5b6ef64961"
	},
	{
		"id": "9c50c87bc926",
		"ts": "2026-07-07T04:48:39.564Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 415750.16,
		"hash": "9c50c87bc926f08bb7349648ea4d17958fbc2e99b321464376e412f845f6d9a8"
	},
	{
		"id": "63159cdc872f",
		"ts": "2026-07-07T04:48:39.813Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182773.69,
		"hash": "63159cdc872f9e1376b580b26c3179774e1bccb89307e19833b29ddece14d346"
	},
	{
		"id": "fe3df7789a7e",
		"ts": "2026-07-07T04:48:40.051Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 129424.4,
		"hash": "fe3df7789a7e282c99f0695e0ac067cf37ce79427f888aa2b14d51507fbbd6df"
	},
	{
		"id": "7608b964dc5b",
		"ts": "2026-07-07T04:48:40.286Z",
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
		"liquidityUsd": 7679100.27,
		"hash": "7608b964dc5b6d75b7dddd4dd165b8873406c7e7efbcd1977bb625e17012dfd6"
	},
	{
		"id": "45556238181b",
		"ts": "2026-07-07T04:48:40.528Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4656108.54,
		"hash": "45556238181b476a647c7f335359e810d95e90029b5a5f0e31d42e3dbdba6297"
	},
	{
		"id": "2316f1dad8d3",
		"ts": "2026-07-07T04:48:40.763Z",
		"symbol": "hTEA",
		"token": "0xa1A0B2E02B0E6830aD5A4A7211691200945d8919",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 193931.91,
		"hash": "2316f1dad8d3bd32ea48ffdc101221137803a2d50158c2882f06221983795d2b"
	},
	{
		"id": "f52be5939659",
		"ts": "2026-07-07T04:48:41.013Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3331941.66,
		"hash": "f52be59396595ad25d45dc6ff766dc1255003566500afa24d028b4527a998d4f"
	},
	{
		"id": "fd84d6487130",
		"ts": "2026-07-07T04:48:41.258Z",
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
		"liquidityUsd": 1530978.17,
		"hash": "fd84d64871303f5e0bc721c6495b43fb51c78e1f5ddc967032b5be0bd19b1fe2"
	},
	{
		"id": "d8db65246e01",
		"ts": "2026-07-07T04:48:41.510Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1808500.63,
		"hash": "d8db65246e01bb78d63bdb87f26d7507272dea1925d7736a14f075a5f397ee9c"
	},
	{
		"id": "1e3dc1119527",
		"ts": "2026-07-07T00:04:51.719Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102042187.7,
		"hash": "1e3dc11195273d5e0b7004a1e98fea2d97bed38bc06ad8fb701ec8ab3d4aa74c"
	},
	{
		"id": "bbfc82cdda11",
		"ts": "2026-07-07T00:04:51.968Z",
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
		"liquidityUsd": 15893231.84,
		"hash": "bbfc82cdda11f741dc3117a22e7681cc7e5e6e65926661aee26f99f9ba300f24"
	},
	{
		"id": "dd5dbdbcfb2c",
		"ts": "2026-07-07T00:04:52.211Z",
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
		"liquidityUsd": 1414452.88,
		"hash": "dd5dbdbcfb2cfbb80609245078b4385827b4e9f791898f318fa987b873b590e4"
	},
	{
		"id": "4140591557c8",
		"ts": "2026-07-07T00:04:52.458Z",
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
		"liquidityUsd": 34137808.42,
		"hash": "4140591557c84c79bb337cae518cfc2e0848cce3fd947334ff1b7470ea0dfbc6"
	},
	{
		"id": "caf346f8b02a",
		"ts": "2026-07-07T00:04:52.701Z",
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
		"liquidityUsd": 4121011.38,
		"hash": "caf346f8b02a6f1a4e11a1160e34e8c5145a22706e905a44cfd15d1071811bc7"
	},
	{
		"id": "c0df0ba9bee0",
		"ts": "2026-07-07T00:04:52.965Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1026213.12,
		"hash": "c0df0ba9bee02404b65b0868ba05ef0f3a45827705ad79a3a51fdfd497f4fe26"
	},
	{
		"id": "fc23302d26ae",
		"ts": "2026-07-07T00:04:53.213Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 34137808.42,
		"hash": "fc23302d26ae411ae6d19c32ec4f30c4ed15292e21f7573d3c1bd866a593773a"
	},
	{
		"id": "26ad798944c8",
		"ts": "2026-07-07T00:04:53.460Z",
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
		"liquidityUsd": 2370297.13,
		"hash": "26ad798944c86255d6e373e8dcfa25d269bb3b44012de2b1bc9ee2623da4391f"
	},
	{
		"id": "6d082d9002ef",
		"ts": "2026-07-07T00:04:53.699Z",
		"symbol": "BERRY",
		"token": "0x778d347B2ffbadF31a2a1Be9cF42b4C7BA8b1bA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 180354.09,
		"hash": "6d082d9002efb544b3961ce44d908a44dcc280d05bc0c4210092bc73f2f879f3"
	},
	{
		"id": "c6e90fe4c101",
		"ts": "2026-07-07T00:04:53.941Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 454311.35,
		"hash": "c6e90fe4c101388d5c4b88163c23a4f007f4feee97fccf99b583bb12486bb892"
	},
	{
		"id": "9b10485c06af",
		"ts": "2026-07-07T00:04:54.175Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 557337.94,
		"hash": "9b10485c06afdae083a3372b7cd61dafd97905ddf0f82cb65033d2d1bbb416e8"
	},
	{
		"id": "3d9413d2f17d",
		"ts": "2026-07-07T00:04:54.411Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 123453.03,
		"hash": "3d9413d2f17dbdd3309f03ad0d644315d166e955126be4bdde54ce10a71ffc45"
	},
	{
		"id": "68409b14e6ac",
		"ts": "2026-07-07T00:04:54.642Z",
		"symbol": "LBM",
		"token": "0x15B15FA54b629C634958E8BD639b2fc8af654974",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 191994.76,
		"hash": "68409b14e6ac0899b5b24f12ff9ec2c6d5cc22543b32c0c8882ff958e2d49ee6"
	},
	{
		"id": "56ec7995c918",
		"ts": "2026-07-07T00:04:54.872Z",
		"symbol": "BRIAN",
		"token": "0x9b88500C69CEa66c329Abd1C494319B197fb8453",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 33868.77,
		"hash": "56ec7995c9188e3b00039a1ae6df118d9b5aabe670c185dc3acd307d455f954a"
	},
	{
		"id": "c5385018a43f",
		"ts": "2026-07-07T00:04:55.101Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 7828630,
		"hash": "c5385018a43f2f9eb80906045f3ae75516fca2bc893c0199c42130e7260339ef"
	},
	{
		"id": "01d623183823",
		"ts": "2026-07-07T00:04:55.328Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4740634.4,
		"hash": "01d623183823ba431ad2a7f42cbade8f81222c85d90d86b7d35bde25e89f40f1"
	},
	{
		"id": "0a0818ae101b",
		"ts": "2026-07-07T00:04:55.553Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1794891.35,
		"hash": "0a0818ae101b2b5f255c1f0f087d3c7615f0b4b73687bfeeac513ff37454a3c9"
	},
	{
		"id": "e9e4b85fde0e",
		"ts": "2026-07-07T00:04:55.781Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 574967.68,
		"hash": "e9e4b85fde0e31126d1d206c612f0604bca151685a89b85541b22ba2428bd3bf"
	},
	{
		"id": "cfa1063a2dbe",
		"ts": "2026-07-06T22:11:05.463Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 102531978.94,
		"hash": "cfa1063a2dbed3341a246e2136fdd8a08485d39d20d32e090faa0cfe44d86daa"
	},
	{
		"id": "6e87f7dc0a82",
		"ts": "2026-07-06T22:11:06.367Z",
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
		"liquidityUsd": 16665244.8,
		"hash": "6e87f7dc0a82e1d73cfb5a9b74d75f851a423481603e4c4663d983ea930f3fed"
	}
]
