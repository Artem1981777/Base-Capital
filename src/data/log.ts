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
	"updatedAt": "2026-08-22T03:37:46.220Z",
	"tokensScored": 13317,
	"verdictsIssued": 13317,
	"safe": 11479,
	"risky": 947,
	"likelyRug": 891,
	"ticks": 778
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "0f4435bd0fc2",
		"ts": "2026-08-22T03:37:42.580Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111269250.74,
		"hash": "0f4435bd0fc2d85b1725a1daf45984752b509a027fa0d8df202c66bab0d623cf"
	},
	{
		"id": "a3bc33ad9d7d",
		"ts": "2026-08-22T03:37:42.789Z",
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
		"liquidityUsd": 15849529.57,
		"hash": "a3bc33ad9d7d7bdf1d3ceb47c8b15787bd34c357a2834a5b1cfda853868f2180"
	},
	{
		"id": "5abc7a40108c",
		"ts": "2026-08-22T03:37:43.002Z",
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
		"liquidityUsd": 944863.67,
		"hash": "5abc7a40108c12460421d9023e43a03478e25b2ea43ff3396022c07e238a8afe"
	},
	{
		"id": "cdad7ed55c2b",
		"ts": "2026-08-22T03:37:43.191Z",
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
		"liquidityUsd": 28591459.55,
		"hash": "cdad7ed55c2be13050dc5f5773f71d7311dbf15f1e9b137541a940cef70ba3e6"
	},
	{
		"id": "a5d9fbbc7936",
		"ts": "2026-08-22T03:37:43.383Z",
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
		"liquidityUsd": 3566099.05,
		"hash": "a5d9fbbc793641707651bfb3762c601ec6c9593ec70cbb800c53291f5842cf2b"
	},
	{
		"id": "c88b7478c796",
		"ts": "2026-08-22T03:37:43.606Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1244556.5,
		"hash": "c88b7478c7968bbc88aef1f57fb2903427d5d948cf4a1123ef9dc09a6cfe467b"
	},
	{
		"id": "dabd76a3d0d7",
		"ts": "2026-08-22T03:37:43.797Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152749.4,
		"hash": "dabd76a3d0d71d1a1e468049ecd11c6726418168cc801aeef8bfa3a99e542a29"
	},
	{
		"id": "090db833126c",
		"ts": "2026-08-22T03:37:43.982Z",
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
		"liquidityUsd": 4039298.23,
		"hash": "090db833126ced376eb7520866b3d932857fe6caa24b49025f587fc6892da706"
	},
	{
		"id": "2f5bc7668f4a",
		"ts": "2026-08-22T03:37:44.187Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1255958.5,
		"hash": "2f5bc7668f4a8dbebb1bef6290350eb285cd32d737bd167c765df15edce9960d"
	},
	{
		"id": "689d15759695",
		"ts": "2026-08-22T03:37:44.378Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 870623.24,
		"hash": "689d1575969545c2f889c3d6d29b6f073fb186acec265b196b0f95562a634a27"
	},
	{
		"id": "aea9f99cdcfd",
		"ts": "2026-08-22T03:37:44.580Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1948683.43,
		"hash": "aea9f99cdcfd533cc94312484650eea7344a32fbd7dd3674c2cf50409b9b0fd5"
	},
	{
		"id": "b55cfb917ea7",
		"ts": "2026-08-22T03:37:44.773Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12015580.35,
		"hash": "b55cfb917ea7123d00639a8dcac44d99878bc926fb2ec4e37b305dfe3205006d"
	},
	{
		"id": "0fa5f7843867",
		"ts": "2026-08-22T03:37:44.974Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3530900.06,
		"hash": "0fa5f7843867b1926a4a8a05ac440d2bb0a4e3f491cac5732f65d34d78b496a4"
	},
	{
		"id": "067912049cd6",
		"ts": "2026-08-22T03:37:45.198Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 381326.35,
		"hash": "067912049cd6109bb039b9098092fcdb2f12fff12ed1fa4a7ecb2b34cf84317d"
	},
	{
		"id": "f1405fe31961",
		"ts": "2026-08-22T03:37:45.468Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 83066.97,
		"hash": "f1405fe319611157cb13447b0fd644fc162dabc3582c951fa1a7a3297632db14"
	},
	{
		"id": "0aa034655a51",
		"ts": "2026-08-22T03:37:45.652Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 681431.44,
		"hash": "0aa034655a51d4e8d5dfa4bc1476ba3ab35bf82071d547b27d7337edb40c7d1c"
	},
	{
		"id": "340e1aa06084",
		"ts": "2026-08-22T03:37:45.843Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 750631.01,
		"hash": "340e1aa060843ed65fea977314ce7c07a28169653c24cfcad6459254f363fd0a"
	},
	{
		"id": "6373cb1abcf2",
		"ts": "2026-08-22T03:37:46.034Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 460586.87,
		"hash": "6373cb1abcf2e4050b4e1d9173b3b6e7b8f7e549002dab1c63f90d4c8487d233"
	},
	{
		"id": "45b9e1c01939",
		"ts": "2026-08-22T03:37:46.220Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 283214.68,
		"hash": "45b9e1c01939efd3d973beb8879cba65b34c969e53b94d574c2dd909bc0c39b2"
	},
	{
		"id": "67a3925edf3a",
		"ts": "2026-08-22T02:18:24.202Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111090913.59,
		"hash": "67a3925edf3a93d4927e0497701e17473eb1f338d2458bcc119be77f04ade9ad"
	},
	{
		"id": "3088e8c8dc04",
		"ts": "2026-08-22T02:18:24.683Z",
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
		"liquidityUsd": 16454283.5,
		"hash": "3088e8c8dc047049427e8a6ee5275e76cd58cb6c07c1b2dbb79f572d6f182811"
	},
	{
		"id": "b75976f61259",
		"ts": "2026-08-22T02:18:25.191Z",
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
		"liquidityUsd": 940345.89,
		"hash": "b75976f61259b2708bfdae4f69e49dabc9c0f6a4e632015515ceb3f7a2e16b5d"
	},
	{
		"id": "307fd71bcc8b",
		"ts": "2026-08-22T02:18:25.475Z",
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
		"liquidityUsd": 28937580.53,
		"hash": "307fd71bcc8ba8803e925a9b2efb86cdb1d6d0650c3ae6b4224869c9ba3743e2"
	},
	{
		"id": "196ee07f92be",
		"ts": "2026-08-22T02:18:25.760Z",
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
		"liquidityUsd": 3545356.83,
		"hash": "196ee07f92be3dc30cb440ee295b9d7d3ddf6785ffb61b94b179e46446f26a5e"
	},
	{
		"id": "4bd5b772102e",
		"ts": "2026-08-22T02:18:26.373Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1219400.73,
		"hash": "4bd5b772102e02a9af19193271653c291d1d5f413aa2bfc43906377641dbe922"
	},
	{
		"id": "1753a8258b29",
		"ts": "2026-08-22T02:18:26.652Z",
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
		"liquidityUsd": 407393.45,
		"hash": "1753a8258b291cd003f52ad1d712349605f9607d2a8b6131bc061019c875d8db"
	},
	{
		"id": "2a0482cce21f",
		"ts": "2026-08-22T02:18:26.913Z",
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
		"liquidityUsd": 4029248.29,
		"hash": "2a0482cce21f642618b0cded533de6aba3a9e3eaf384be4f1de2460a3de7affd"
	},
	{
		"id": "19073fc8808d",
		"ts": "2026-08-22T02:18:27.435Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1315491.61,
		"hash": "19073fc8808deb4bf5b70e5b80b4e87592f93dbf84689660c882dc3c80f27f42"
	},
	{
		"id": "c575b4de8276",
		"ts": "2026-08-22T02:18:27.701Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 906762.17,
		"hash": "c575b4de827696e8d7d34b7a522f6c7b75a7fd1c2c8cc522ae8f306b65f07f35"
	},
	{
		"id": "75cb31129df0",
		"ts": "2026-08-22T02:18:27.965Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1951174.44,
		"hash": "75cb31129df0efadde6e1722b3a618d3a5047c90b2b63c848fd69f4fcaf01757"
	},
	{
		"id": "b7329744c129",
		"ts": "2026-08-22T02:18:28.212Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12023368.21,
		"hash": "b7329744c129a0c54cf0dd6a108f0d32dd53f57a50080393ae386a5131e15ef0"
	},
	{
		"id": "da37ef25870c",
		"ts": "2026-08-22T02:18:28.476Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3475705.93,
		"hash": "da37ef25870c610129402ec86bdc6ef6d3b4e2314cc1f2b04c0e0b29f070d006"
	},
	{
		"id": "1869319fc259",
		"ts": "2026-08-22T02:18:28.720Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 389155.68,
		"hash": "1869319fc2596c49c0bd20c5216c11cadcbb19e6fddbc12883782e9ac25b43f2"
	},
	{
		"id": "c8b911b40eab",
		"ts": "2026-08-22T02:18:28.984Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77659.78,
		"hash": "c8b911b40eab2ebd819b8292165ca4596eac8b5854130656f88c455cc6916580"
	},
	{
		"id": "6d33118c9a63",
		"ts": "2026-08-22T02:18:29.229Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 677897.99,
		"hash": "6d33118c9a63a2876076853d81049c8a832d2ff7b8de9e5177fe316db8d83a76"
	},
	{
		"id": "cd792785c0b1",
		"ts": "2026-08-22T02:18:29.492Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 748778.18,
		"hash": "cd792785c0b1597b2417c8f58a7140d1ab52d0d0b51a361a2f3806752c85e770"
	},
	{
		"id": "d43e291d7ba9",
		"ts": "2026-08-22T02:18:29.741Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 287699.22,
		"hash": "d43e291d7ba911377e228ce2a3686d886883d7e016c3e9ccf20be6bcd0871f2a"
	},
	{
		"id": "2946026e816b",
		"ts": "2026-08-22T02:18:30.005Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 465691.53,
		"hash": "2946026e816bc6f56bf616002f4fba700158e5f8aabf2f1cf14b20a7aa730dac"
	},
	{
		"id": "a5325abc6a0d",
		"ts": "2026-08-22T01:00:05.917Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111089764.29,
		"hash": "a5325abc6a0dfd4acfbef36abd6a467139d2b344e165a273006433182c8b9c69"
	},
	{
		"id": "1d64d02da29c",
		"ts": "2026-08-22T01:00:06.189Z",
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
		"liquidityUsd": 13989794.74,
		"hash": "1d64d02da29c86f92b40871a55029fc68b75551668f2bda9f7af3da519a7f79b"
	},
	{
		"id": "a7db894e1e5d",
		"ts": "2026-08-22T01:00:06.407Z",
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
		"liquidityUsd": 944504.91,
		"hash": "a7db894e1e5da90cbbdf8bce714c08a60da8974177fbd63bda0da24c116e829d"
	},
	{
		"id": "5570f1590e81",
		"ts": "2026-08-22T01:00:06.920Z",
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
		"liquidityUsd": 28857700.96,
		"hash": "5570f1590e81e2a76ac6892bda302f214e9e4ae582a63b434736355721e3f319"
	},
	{
		"id": "0d400594bbec",
		"ts": "2026-08-22T01:00:07.436Z",
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
		"liquidityUsd": 3545179.88,
		"hash": "0d400594bbecc487fdd906a5e056d4eda5fe9a97aad1433a92b698f70168f3af"
	},
	{
		"id": "1a3b11c226cd",
		"ts": "2026-08-22T01:00:07.651Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1217064.6,
		"hash": "1a3b11c226cd92c947e3e2bd2deed627766aab40d229b299f88c3cd1d33dac38"
	},
	{
		"id": "a252d4dc534f",
		"ts": "2026-08-22T01:00:07.877Z",
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
		"liquidityUsd": 382294.19,
		"hash": "a252d4dc534f4a2812186e4b3a3412b495ea1a7f632a08f3ebfe4bfe9ed6fb6a"
	},
	{
		"id": "0b402df578f2",
		"ts": "2026-08-22T01:00:08.676Z",
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
		"liquidityUsd": 1733159.39,
		"hash": "0b402df578f2a26ebec7dbd95d0861b4335bb40e087a862b4ae9945061970359"
	},
	{
		"id": "b4a97a207e62",
		"ts": "2026-08-22T01:00:08.888Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1266636.87,
		"hash": "b4a97a207e62f6edef621661b11030d26bdb2214b1ef6100267e6d8105d4d759"
	},
	{
		"id": "23e7743dc5c9",
		"ts": "2026-08-22T01:00:09.236Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 867480.27,
		"hash": "23e7743dc5c9a109e5667b771d3739e042f7fde94335ae1a8d78847cad5d2f87"
	},
	{
		"id": "3d48a08fefed",
		"ts": "2026-08-22T01:00:09.450Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1968002.28,
		"hash": "3d48a08fefed6329e2f943b9d7d0bdbc6f9d9e8b77620c413ff250234b63ebf0"
	},
	{
		"id": "7777d975cfdb",
		"ts": "2026-08-22T01:00:09.668Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12041570.56,
		"hash": "7777d975cfdb51003b52d2d62b506a4c848806532ec2bb0f1fa15d6e74c5f134"
	},
	{
		"id": "904c67883bed",
		"ts": "2026-08-22T01:00:09.898Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3507463.51,
		"hash": "904c67883bed343d0eea61eb5bc6a960e85593d18748c073afc2c7314b614625"
	},
	{
		"id": "ddc3666255c7",
		"ts": "2026-08-22T01:00:10.836Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 391007.09,
		"hash": "ddc3666255c774223f4a4515d312fde6d4173850cbce9251bb645950a3d4b47d"
	},
	{
		"id": "9ff3e45d7d81",
		"ts": "2026-08-22T01:00:11.041Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 671274.31,
		"hash": "9ff3e45d7d816f453829717fd915778323b6dd5700ddf0785aed100e0a0eb1c5"
	},
	{
		"id": "12a3baa1e513",
		"ts": "2026-08-22T01:00:11.268Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77998.99,
		"hash": "12a3baa1e513e47463b2722d6efef1b4c080235e6eb817a66b337a2b68fb06f9"
	},
	{
		"id": "000b9908d9ab",
		"ts": "2026-08-22T01:00:12.133Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 507725.66,
		"hash": "000b9908d9abaef949c3ccf1a027b91e3e518f5f07a44f74560b81adfdb6a1d9"
	},
	{
		"id": "57707e64a1f2",
		"ts": "2026-08-22T01:00:12.382Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 756690.04,
		"hash": "57707e64a1f20dc572046d3d0adc9657782b0f58150624fd5acbb1dc683a1faa"
	},
	{
		"id": "8fec938b3baa",
		"ts": "2026-08-22T01:00:12.612Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 272225.71,
		"hash": "8fec938b3baac4dbb2867d09c56ebcb567958add913bea236500f0140730518d"
	},
	{
		"id": "4d232bd49e35",
		"ts": "2026-08-21T23:19:07.029Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111278001.51,
		"hash": "4d232bd49e35a1d448dab00820ac03cfa9033bd9f55a0e3cf4f3b9e36e372ebc"
	},
	{
		"id": "6438447253b4",
		"ts": "2026-08-21T23:19:07.780Z",
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
		"liquidityUsd": 13913165.39,
		"hash": "6438447253b45e56f50c08429e6b29efe0a142b9ed95a65029522068f39416e3"
	},
	{
		"id": "1ebee685f085",
		"ts": "2026-08-21T23:19:08.218Z",
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
		"liquidityUsd": 949981.18,
		"hash": "1ebee685f085661072ecfb55b70ac23a8780ff5650006e9deb1a65ff42624f55"
	},
	{
		"id": "5b99854e2f1d",
		"ts": "2026-08-21T23:19:08.651Z",
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
		"liquidityUsd": 28621657.02,
		"hash": "5b99854e2f1d804c79ab5a35b6a0989f3226cbf0e6a47ce4091fae1bdcac53a2"
	},
	{
		"id": "96bf33fa6a88",
		"ts": "2026-08-21T23:19:08.916Z",
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
		"liquidityUsd": 3538471.05,
		"hash": "96bf33fa6a887b17592bf291a9a7b42a2af0641b29831f1695c03df8896035a1"
	},
	{
		"id": "c34a06c39696",
		"ts": "2026-08-21T23:19:09.189Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1211161.61,
		"hash": "c34a06c39696a90e28b8e2e1a91a00ac4deacd15e76bdc77807b391b6c86b83d"
	},
	{
		"id": "a9bfbce584ed",
		"ts": "2026-08-21T23:19:09.450Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 502405.2,
		"hash": "a9bfbce584edc3de5765763c59fa72ba766456d2566cb6342d329862dcf1d667"
	},
	{
		"id": "f5de611c480d",
		"ts": "2026-08-21T23:19:09.685Z",
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
		"liquidityUsd": 1743439.66,
		"hash": "f5de611c480d413c19b329559dc9096e5e2f159e230232feeca494e15ecd4ecf"
	},
	{
		"id": "b92a6237c4a4",
		"ts": "2026-08-21T23:19:09.942Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1289206.42,
		"hash": "b92a6237c4a415e1705ea683a26292342e52708958b71ccb37bd47a0e9ea4177"
	},
	{
		"id": "a49838b1d53b",
		"ts": "2026-08-21T23:19:10.659Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 791256.04,
		"hash": "a49838b1d53b0b8dcf4276a9491a855431f0545e6ebfdb59e0f6309fac50baaf"
	},
	{
		"id": "0c50a7521ab6",
		"ts": "2026-08-21T23:19:10.890Z",
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
		"liquidityUsd": 12126306.96,
		"hash": "0c50a7521ab6ec3859fe23d5e67e6cd1c1fbeb0873a1c3a5362136799b52eb37"
	},
	{
		"id": "84e50b37475f",
		"ts": "2026-08-21T23:19:11.119Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1977603.22,
		"hash": "84e50b37475f31d4c42d04de12b2109da0050b4ffc594665640a919bbf88f1cc"
	},
	{
		"id": "c5cce92695b2",
		"ts": "2026-08-21T23:19:11.370Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3466862.57,
		"hash": "c5cce92695b2b451f8efd19d035987d287718b41cca96166b696c8ce9dcdc22f"
	},
	{
		"id": "47f090929b83",
		"ts": "2026-08-21T23:19:11.733Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 267100.04,
		"hash": "47f090929b8376a43e8a5cbca7001232d822d86ef339ac36b3486058c3836787"
	},
	{
		"id": "05b532810f1a",
		"ts": "2026-08-21T23:19:12.088Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 390361.31,
		"hash": "05b532810f1af742b672e8c4c4e666ad294bf63e4d02fb3d11df501a68798232"
	},
	{
		"id": "1143512171b2",
		"ts": "2026-08-21T23:19:12.497Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 433369.94,
		"hash": "1143512171b2e7113725497b4617190b2e42dfdb8ba804af0500db94c762e7e9"
	},
	{
		"id": "61c881e4fa2b",
		"ts": "2026-08-21T23:19:12.952Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 770360.37,
		"hash": "61c881e4fa2b9ba6af4455a9dd0f78398bbfe016219a41bc5166dad3bee444a4"
	},
	{
		"id": "9ba4ec9797d2",
		"ts": "2026-08-21T23:19:13.204Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 73136.94,
		"hash": "9ba4ec9797d25ad197058be0aadc0df5aa0b53e63ccc105a572725e7c6dc7b09"
	},
	{
		"id": "0478a22b76b9",
		"ts": "2026-08-21T23:19:13.430Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 674362.17,
		"hash": "0478a22b76b9ef00f3845f6a3b3c5f529bda3cbec84c3a5b030a9ae204ecd8eb"
	},
	{
		"id": "970a6cfeebc2",
		"ts": "2026-08-21T22:19:13.714Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111493527.32,
		"hash": "970a6cfeebc28d15014eaaa10d47b927eead3bfe92b3b1167acdfaba14ccc041"
	},
	{
		"id": "5e542fa4cf9c",
		"ts": "2026-08-21T22:19:14.230Z",
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
		"liquidityUsd": 13922695.96,
		"hash": "5e542fa4cf9c251e1e789ef1a69aa78e882ac1064e77040f0c7f78461159378b"
	},
	{
		"id": "2adb59e7b022",
		"ts": "2026-08-21T22:19:14.572Z",
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
		"liquidityUsd": 955893.6,
		"hash": "2adb59e7b022d5a4499b238d32e882137e763828246a5ab0c76a09d1cb8ec6e0"
	},
	{
		"id": "45e1702ec28b",
		"ts": "2026-08-21T22:19:14.929Z",
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
		"liquidityUsd": 28670909.57,
		"hash": "45e1702ec28b61ae184013b05b15e1552f4703340e29df4cc766e2af630f4429"
	},
	{
		"id": "d8ace72b4d47",
		"ts": "2026-08-21T22:19:15.266Z",
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
		"liquidityUsd": 3540629.84,
		"hash": "d8ace72b4d4712b58600ecba063e8409844a208643adbd974279f5ad8f9f6204"
	},
	{
		"id": "42aafb0cf8e1",
		"ts": "2026-08-21T22:19:15.466Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1209646.56,
		"hash": "42aafb0cf8e198925b0b9e3e7c6aa79c1c98eaa7b4bc6737492e4d0321bdfefd"
	},
	{
		"id": "61a68d31e9df",
		"ts": "2026-08-21T22:19:15.657Z",
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
		"liquidityUsd": 358414,
		"hash": "61a68d31e9dfbf8d10ea30966f606acf44875a6d3ee8830e4c3c78b0c1844834"
	},
	{
		"id": "8e05725fa677",
		"ts": "2026-08-21T22:19:15.872Z",
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
		"liquidityUsd": 1748156.54,
		"hash": "8e05725fa677624386e895f71c163586a65adcd66d843cc6d4c48b103e47b400"
	},
	{
		"id": "e99a0fb36b10",
		"ts": "2026-08-21T22:19:16.055Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1301691.26,
		"hash": "e99a0fb36b10b4cb119ccff4e580dea35718bf4c4045a29ab2d8b6656d7e66b0"
	},
	{
		"id": "6bd7fbb9a1c4",
		"ts": "2026-08-21T22:19:16.572Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 784625.86,
		"hash": "6bd7fbb9a1c46f6c1d7d97b4467312a6f96341300ecfe769145c691c67975205"
	},
	{
		"id": "d7c36babd0d7",
		"ts": "2026-08-21T22:19:16.759Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1970289.14,
		"hash": "d7c36babd0d731e2815f39b615ebec474d437b6740a1a8fb8a370152cea12459"
	},
	{
		"id": "7def74528a63",
		"ts": "2026-08-21T22:19:16.954Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 12289307.19,
		"hash": "7def74528a63cf1f0add2073afe958b881dd3dbc7944c97835d7b685b1aadd55"
	},
	{
		"id": "9d989eac8a80",
		"ts": "2026-08-21T22:19:17.678Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 264382.66,
		"hash": "9d989eac8a80a632ccfc39c0b315338eb6c41d48af4efb215bf33359f9e3e6b9"
	},
	{
		"id": "8b8b7b447b6d",
		"ts": "2026-08-21T22:19:17.869Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3403065.27,
		"hash": "8b8b7b447b6d5b5b425d1e8481f6a6f09d119b3d07cf43e0887d8dac8dc8c1c6"
	},
	{
		"id": "bb47e639d804",
		"ts": "2026-08-21T22:19:18.064Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 399544.7,
		"hash": "bb47e639d80417fe2486e7ad4b006a101530d37be6bb81b35c71050509a37ef9"
	},
	{
		"id": "b770574cbf1a",
		"ts": "2026-08-21T22:19:18.257Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74376.34,
		"hash": "b770574cbf1a82959a99d771cb0b86638ea77850de482cbdd67d0724ac011f5c"
	},
	{
		"id": "db728052a7b3",
		"ts": "2026-08-21T22:19:18.680Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 737558.17,
		"hash": "db728052a7b3c1d7cbe44748e777bf73c613e45d55c133879d884b987ffb4f8c"
	},
	{
		"id": "f8d8515bb485",
		"ts": "2026-08-21T22:19:18.872Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 698609.14,
		"hash": "f8d8515bb4859d41e0e4103151d4736352c056d98fef36f0eca94bca705567e4"
	},
	{
		"id": "097355b3291e",
		"ts": "2026-08-21T22:19:19.060Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 504531.23,
		"hash": "097355b3291e92aab36115399279e005e4249ed116c056d1b3a82f66090654a6"
	},
	{
		"id": "306aef0d0a75",
		"ts": "2026-08-21T21:19:53.546Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111561871.06,
		"hash": "306aef0d0a75543334c0f1f166f66112882aa8fcdf2ea879ac82c4400a45c0fa"
	},
	{
		"id": "33681b9caba8",
		"ts": "2026-08-21T21:19:54.192Z",
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
		"liquidityUsd": 13673020.98,
		"hash": "33681b9caba85491d8aa498fb4ba2edbc441a92d567a63e30de5d054fb0f3bfd"
	},
	{
		"id": "b9426a79f5be",
		"ts": "2026-08-21T21:19:54.630Z",
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
		"liquidityUsd": 928388.48,
		"hash": "b9426a79f5bea9993a3d7ee1f7d38c40b4e0768d58fd8521ba4bc7c60d205e85"
	},
	{
		"id": "3848c7d65f1b",
		"ts": "2026-08-21T21:19:55.113Z",
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
		"liquidityUsd": 28019490.96,
		"hash": "3848c7d65f1b74c66e4dc0671d34dad864207c4bff9d7ec9f189c6c392e04be9"
	},
	{
		"id": "ecbc3fc45e8b",
		"ts": "2026-08-21T21:19:55.552Z",
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
		"liquidityUsd": 3434383.14,
		"hash": "ecbc3fc45e8baf36d1b1daa36ad465078b6ca4465c2317227989516b20a2752f"
	},
	{
		"id": "65a6f58e6202",
		"ts": "2026-08-21T21:19:55.781Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1164767.02,
		"hash": "65a6f58e6202591fb38c7b0c02f820d150e5a8e428e47595140aba12a188613f"
	},
	{
		"id": "040b7c358830",
		"ts": "2026-08-21T21:19:56.014Z",
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
		"liquidityUsd": 378782.4,
		"hash": "040b7c3588301353bd20316167224bad59f7de06032955eb5962a58d93a8b759"
	},
	{
		"id": "ac5d89509be2",
		"ts": "2026-08-21T21:19:56.251Z",
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
		"liquidityUsd": 1692204.22,
		"hash": "ac5d89509be2c2e528e72fc7bba6ca0a98e1f739cc59982dd70e18a2d74630a4"
	},
	{
		"id": "348b7068262d",
		"ts": "2026-08-21T21:19:56.487Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1266956.81,
		"hash": "348b7068262d04dc4cb6246a824ba243f2ced2015e2064a0d3ea02748c4223d5"
	},
	{
		"id": "328bbd0e4418",
		"ts": "2026-08-21T21:19:57.142Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 785605.82,
		"hash": "328bbd0e4418d1ecd5e6a777e8fcb51a8eee55b826a3f0186aa758178f9855ad"
	},
	{
		"id": "12a8b86a589e",
		"ts": "2026-08-21T21:19:57.360Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11833644.1,
		"hash": "12a8b86a589e1bfead2d9cc0013d98c80731f4aefd96e065f672956c8114781f"
	},
	{
		"id": "26f32cfdac5e",
		"ts": "2026-08-21T21:19:57.582Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1849280.37,
		"hash": "26f32cfdac5e1b611f5f5472ec2c3f2bd1c0e16bdf84fe6cbce945ae6a3adcce"
	},
	{
		"id": "0cff94c671dc",
		"ts": "2026-08-21T21:19:57.807Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 268964.64,
		"hash": "0cff94c671dc1fb4b1e495d1fe1f7bc08136e5abace91646a21e491eb3fdc524"
	},
	{
		"id": "6a8040ef2e67",
		"ts": "2026-08-21T21:19:58.025Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3303284.68,
		"hash": "6a8040ef2e67cdc33e62ae395473c3ea5631adbfaa02a32703bd58de6804b903"
	},
	{
		"id": "0684162546f4",
		"ts": "2026-08-21T21:19:58.244Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 385759.3,
		"hash": "0684162546f441ba57dedf6f3d503257714ce9e35d4597055e18502c4463e6dd"
	},
	{
		"id": "3d4bea782aa8",
		"ts": "2026-08-21T21:19:58.460Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 74349.57,
		"hash": "3d4bea782aa8249217a7ecd3cb584153671e06a9be0cdebda8800806fbc86ae7"
	},
	{
		"id": "2eba96a32e65",
		"ts": "2026-08-21T21:19:58.680Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 723947.76,
		"hash": "2eba96a32e65b7d46c3664626153ba68e9c15a6716df18de9aefab1960d549ad"
	},
	{
		"id": "66160e5d56d9",
		"ts": "2026-08-21T21:19:58.896Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 676193.68,
		"hash": "66160e5d56d9ff5112a30dcecea61ead90f42a81e1579f258b8bbc364bd9674e"
	},
	{
		"id": "bdb4b757f289",
		"ts": "2026-08-21T21:19:59.117Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 434779.37,
		"hash": "bdb4b757f28942f24059455c70eb9b5cb2856b5e4383c4ad443e49f1dbc82eb3"
	},
	{
		"id": "d9ccf7339519",
		"ts": "2026-08-21T20:20:54.315Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111495749.89,
		"hash": "d9ccf7339519818f1e070873706a4d50e39a5bae6eb38fef56ff903d07cfcd71"
	},
	{
		"id": "d84e5c825f45",
		"ts": "2026-08-21T20:20:54.748Z",
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
		"liquidityUsd": 16830443.03,
		"hash": "d84e5c825f45eedbd73c9ca8d4f2bb0a3d49e1e0cb8394c2436d49d747a1f79d"
	},
	{
		"id": "c4a2f97d6939",
		"ts": "2026-08-21T20:20:55.000Z",
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
		"liquidityUsd": 923221.73,
		"hash": "c4a2f97d6939f13ba55dead9c417a050333ba02c6e1e8a9f5a4f8364c8a5fcf9"
	},
	{
		"id": "2f5d8f0532f3",
		"ts": "2026-08-21T20:20:55.244Z",
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
		"liquidityUsd": 27957204.08,
		"hash": "2f5d8f0532f39d19ca4f42707d45dc7e74d9748b3b9e8eb3003ed5dc24679a42"
	},
	{
		"id": "0dd4a62634b0",
		"ts": "2026-08-21T20:20:55.489Z",
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
		"liquidityUsd": 3375613.63,
		"hash": "0dd4a62634b021778d158520acd9fbd9c2a26b00f973b5fa7192ecb7cafad71c"
	},
	{
		"id": "611bd9e760fe",
		"ts": "2026-08-21T20:20:55.734Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1158681.29,
		"hash": "611bd9e760fea737f7c1988e4ba226665e5f60591224499e842f0313e870f7a4"
	},
	{
		"id": "989d9bb198b7",
		"ts": "2026-08-21T20:20:55.976Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4838566.28,
		"hash": "989d9bb198b7ffc01dd01018374b6cbabdb166e9a57a699e4e885d4cdf35ebf8"
	},
	{
		"id": "d547769c0bb0",
		"ts": "2026-08-21T20:20:56.242Z",
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
		"liquidityUsd": 1675508.84,
		"hash": "d547769c0bb08af570e3e3826b6c0ef55670b6b85324d35ec6049982a0fbe07f"
	},
	{
		"id": "dadb7391bdf5",
		"ts": "2026-08-21T20:20:56.480Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1265164.21,
		"hash": "dadb7391bdf5c99ba478dcc8d8cb52f8f0ce17ae0b3915552bf05b7f81944662"
	},
	{
		"id": "b357b2840bca",
		"ts": "2026-08-21T20:20:56.726Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 742052.6,
		"hash": "b357b2840bcad52efceb026727f9de22b8df59118036a2dd7d44995e4cf4be2f"
	},
	{
		"id": "08c2fb45f735",
		"ts": "2026-08-21T20:20:57.025Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11523329.83,
		"hash": "08c2fb45f735efe416a0b1730b3ad24d51942ccf21f6fe94d2598adec1d4c3d6"
	},
	{
		"id": "d4b11c4c0c07",
		"ts": "2026-08-21T20:20:57.422Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1839160.62,
		"hash": "d4b11c4c0c07e5296a7b41ac78124a8fd07742817948a9398a275dd6c406e498"
	},
	{
		"id": "3f952ab601ae",
		"ts": "2026-08-21T20:20:57.660Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 266894.43,
		"hash": "3f952ab601ae084114848978df7165ef55c6fb25614b09fe145869dd2801ac06"
	},
	{
		"id": "3fe66e10bb74",
		"ts": "2026-08-21T20:20:58.554Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3228905.14,
		"hash": "3fe66e10bb74869058de35343de9a95b716f6a7fec5d6c52605bb736d26d8193"
	},
	{
		"id": "5c9148327400",
		"ts": "2026-08-21T20:20:58.781Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 392961.46,
		"hash": "5c91483274002d0121161ba6fae1ee35ff501a75e44c8144e8cf320bd49546c6"
	},
	{
		"id": "406f2858cb96",
		"ts": "2026-08-21T20:20:59.029Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73743.75,
		"hash": "406f2858cb96b0db817aee90bf925b4419fab2570d4110cb0de7b93f6b09497d"
	},
	{
		"id": "1c3c7d0e0275",
		"ts": "2026-08-21T20:20:59.254Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 709529.26,
		"hash": "1c3c7d0e027547814549c14dff8303dcad9c66fc5359270babcfe1741fc0f165"
	},
	{
		"id": "c533ec257fcc",
		"ts": "2026-08-21T20:20:59.483Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 650688.95,
		"hash": "c533ec257fcc56bf26e9468109f9ae53e4fd76edb867205fc804fc9aab4d21b5"
	},
	{
		"id": "30a5824ba9f7",
		"ts": "2026-08-21T20:20:59.707Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 999000.33,
		"hash": "30a5824ba9f71dfebd81f68815f676ac45e14f9a6f6a9a376a10c5a925df99d6"
	},
	{
		"id": "1e3bfdebd135",
		"ts": "2026-08-21T19:22:26.498Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111062224.29,
		"hash": "1e3bfdebd135655439b5711fbf63734c0c4cfed586d86310511624071b041c85"
	},
	{
		"id": "d652aa9f3f2a",
		"ts": "2026-08-21T19:22:26.749Z",
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
		"liquidityUsd": 15747406.83,
		"hash": "d652aa9f3f2a0288d4a72798cfc7f791330f91a69258248b6efa819b2c59fd83"
	},
	{
		"id": "4e3e703bc8d8",
		"ts": "2026-08-21T19:22:27.010Z",
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
		"liquidityUsd": 915504.44,
		"hash": "4e3e703bc8d8e1742d3d8b83187ae6318c33c6d9a61e8f868cf47c17aac11c12"
	},
	{
		"id": "e6fbad20fa26",
		"ts": "2026-08-21T19:22:27.251Z",
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
		"liquidityUsd": 27924702.49,
		"hash": "e6fbad20fa26f94a507dae2b01f54e3945adaf3bdf8409eb15740d2acd8f2442"
	},
	{
		"id": "f3c473d70f8f",
		"ts": "2026-08-21T19:22:27.514Z",
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
		"liquidityUsd": 3357160.84,
		"hash": "f3c473d70f8ffa4f06562067218915384ba5be4eb07bacff1f30186814acb79e"
	},
	{
		"id": "336c557d8e53",
		"ts": "2026-08-21T19:22:27.744Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1146312.64,
		"hash": "336c557d8e53082a3695b6edcff16d338d87a0d50b57713dd8328241c01f4d26"
	},
	{
		"id": "7a8037b1c4b9",
		"ts": "2026-08-21T19:22:27.974Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4805034.84,
		"hash": "7a8037b1c4b94c73175933a8142750c961a945d5ccc958a51d93c504da13d220"
	},
	{
		"id": "e2e32d6e1b17",
		"ts": "2026-08-21T19:22:28.209Z",
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
		"liquidityUsd": 1664065.02,
		"hash": "e2e32d6e1b1741ee9d26bce16a6e6b2fda702efdca9aaf8be93255e84bcd0d36"
	},
	{
		"id": "44cee5f8c050",
		"ts": "2026-08-21T19:22:28.451Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1156149.37,
		"hash": "44cee5f8c05000782e4f6e04434ce10c3045ffb40f1973beb200ea00746ee150"
	},
	{
		"id": "95e6615c837c",
		"ts": "2026-08-21T19:22:28.687Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 753974.7,
		"hash": "95e6615c837ce77c5e5dfea7b80bb75626db94196324ac3f6b604ff5be88cd05"
	},
	{
		"id": "37ccea701118",
		"ts": "2026-08-21T19:22:28.905Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11434012.69,
		"hash": "37ccea701118178bef4667202784f2253cd3f8d8a243bf65aeebfa93291a33ca"
	},
	{
		"id": "1c0321331ded",
		"ts": "2026-08-21T19:22:29.132Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 275734.74,
		"hash": "1c0321331ded81922ff9020b6fe626443d36524d7786643dabbfb00ea449543e"
	},
	{
		"id": "057059b30027",
		"ts": "2026-08-21T19:22:29.348Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3206722.08,
		"hash": "057059b30027e21dc608be247705238033af669d46ccfd35d10288c1da23fbef"
	},
	{
		"id": "f8481730427a",
		"ts": "2026-08-21T19:22:29.559Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 391165.04,
		"hash": "f8481730427a0f30c36768dfb0b3121a2096ac7081ec375de7b8166cc07bad54"
	},
	{
		"id": "99b15c1797e4",
		"ts": "2026-08-21T19:22:29.773Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 717096.53,
		"hash": "99b15c1797e4417146ed71bc2017ad833699df8cd1c8cc8c6b3e504c0d5c60c7"
	},
	{
		"id": "e3502680a8e0",
		"ts": "2026-08-21T19:22:29.984Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 73415.6,
		"hash": "e3502680a8e0f22b9953dfd68c3a2cce7f20f2939ac10718b18ca0ea8bb23e5e"
	},
	{
		"id": "f6d3344fdbcd",
		"ts": "2026-08-21T19:22:30.409Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 994452.41,
		"hash": "f6d3344fdbcdc2dab9a3d4095183f206e4415c849a64c1249e25d26e0ae064c2"
	},
	{
		"id": "d779c236a123",
		"ts": "2026-08-21T19:22:30.624Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 640552.61,
		"hash": "d779c236a123c66867246cca7658caa765de6c8e55bdde4be9e06c6888faed02"
	},
	{
		"id": "be4af4faa960",
		"ts": "2026-08-21T19:22:30.834Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4357282.87,
		"hash": "be4af4faa960345ccb8d0a24bb44ced3be0ddee77d2892432d720300d6353203"
	},
	{
		"id": "0ab8218524a3",
		"ts": "2026-08-21T18:30:50.696Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111072775.45,
		"hash": "0ab8218524a36e9e3535a2bcd686779a2831525bf5668d74882f0bdbe749cbb7"
	},
	{
		"id": "f49467c1c47a",
		"ts": "2026-08-21T18:30:51.361Z",
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
		"liquidityUsd": 17165059.37,
		"hash": "f49467c1c47a46be3bde083b583b34160b7cf33da07ef9cbf68d5072d93d94fd"
	},
	{
		"id": "b977002540aa",
		"ts": "2026-08-21T18:30:51.799Z",
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
		"liquidityUsd": 920881.93,
		"hash": "b977002540aa86f7866ef80c74e7affb7ff402601a3b3c7cbe710d75a27925e8"
	},
	{
		"id": "4fb02708f9b4",
		"ts": "2026-08-21T18:30:52.228Z",
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
		"liquidityUsd": 27961780.63,
		"hash": "4fb02708f9b42f933247c92441f0b96384b0594fae6fb2021c72dfd527698df3"
	},
	{
		"id": "b9aaaede7794",
		"ts": "2026-08-21T18:30:52.664Z",
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
		"liquidityUsd": 3412796.8,
		"hash": "b9aaaede7794fcaaad855bf10e39b10a2aa480d085379e474c52a3577d5d1f50"
	},
	{
		"id": "b5b48a45d33f",
		"ts": "2026-08-21T18:30:52.904Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1172689.81,
		"hash": "b5b48a45d33fdbbd92fea2dec3c7e9cf12fa039265a1eedecee8ea061cb96ef3"
	},
	{
		"id": "2c11ef156db1",
		"ts": "2026-08-21T18:30:53.134Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4747361.33,
		"hash": "2c11ef156db1e2435f415374ffe57ff78f3f0da0ae20962bcddbc1a7bc0f53d9"
	},
	{
		"id": "15ba4b98bf12",
		"ts": "2026-08-21T18:30:54.007Z",
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
		"liquidityUsd": 1674482.94,
		"hash": "15ba4b98bf122b896f6b679e56fd1a29ecbff22a182f807aa26c5b0f3229ec16"
	},
	{
		"id": "61337daa9944",
		"ts": "2026-08-21T18:30:54.239Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 938881.21,
		"hash": "61337daa9944e5b3a45079ffbb29fff313bd5f8506eba033a86b04210df71ed8"
	},
	{
		"id": "1fd62f38115f",
		"ts": "2026-08-21T18:30:54.472Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 275715.02,
		"hash": "1fd62f38115f3cfc057c90f9e98cdc2b221bb1c3082b4e7e96fb902ca568474d"
	},
	{
		"id": "12a88f33004a",
		"ts": "2026-08-21T18:30:54.690Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11645042.5,
		"hash": "12a88f33004a7e543ec277e320f602276d79800659b115bf985bc055ced6acb8"
	},
	{
		"id": "2e83b6df209f",
		"ts": "2026-08-21T18:30:54.905Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3296542.2,
		"hash": "2e83b6df209f9d65f58b652ed280059cc63dd01135fcc4f27b0c3e34890c44ad"
	},
	{
		"id": "c6c11fc007dd",
		"ts": "2026-08-21T18:30:55.120Z",
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
		"liquidityUsd": 434896.96,
		"hash": "c6c11fc007ddbb13d28033bd1b8eb66b20e297159f998b66bb6b468d2a1f2cd3"
	},
	{
		"id": "9ef69c62311f",
		"ts": "2026-08-21T18:30:55.332Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 602221.84,
		"hash": "9ef69c62311f72d5a2727b99830041fe218e7917d682ac8c29a1aa7c584142df"
	},
	{
		"id": "2349efafae5b",
		"ts": "2026-08-21T18:30:55.550Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 393302.85,
		"hash": "2349efafae5b1c014daf9490b25e1cd8107bb9ebe0c243a45fd28d12921efcbe"
	},
	{
		"id": "79597ffe669b",
		"ts": "2026-08-21T18:30:55.764Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 75032.5,
		"hash": "79597ffe669b91ad105930d5671bfff7878a8060a8304e5fb21464b98601343e"
	},
	{
		"id": "bad808e0a125",
		"ts": "2026-08-21T18:30:55.983Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1794271.06,
		"hash": "bad808e0a1254031b490ddd8e24d64381b7471c60f1467b0578d9d8f744b44f4"
	},
	{
		"id": "de88f4544834",
		"ts": "2026-08-21T18:30:56.998Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1002819.06,
		"hash": "de88f454483425e2ca3375cbd23e7404f698161332beeb2f0aa8006677071ad1"
	},
	{
		"id": "1dc617c782c9",
		"ts": "2026-08-21T18:30:57.425Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4398586.07,
		"hash": "1dc617c782c981d8b172c5609c39b42e4c79a6ef9ad10594fb70c4fc47cab994"
	},
	{
		"id": "2f79fd6ebb83",
		"ts": "2026-08-21T17:24:19.716Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111803446.89,
		"hash": "2f79fd6ebb83779a0527f05915acd91efe10dbe2c85052a7e0eb21ced207052d"
	},
	{
		"id": "28c38b6861a4",
		"ts": "2026-08-21T17:24:20.065Z",
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
		"liquidityUsd": 13608584.74,
		"hash": "28c38b6861a46798e82704aba054f6230132755102c196d3042f5d3ae552e28b"
	},
	{
		"id": "9c2db4bff920",
		"ts": "2026-08-21T17:24:20.377Z",
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
		"liquidityUsd": 919835.95,
		"hash": "9c2db4bff920e49a6813a95a65ea2c8e1d137877718200b2501df8025a7fbaef"
	},
	{
		"id": "dd35eb0a9721",
		"ts": "2026-08-21T17:24:20.576Z",
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
		"liquidityUsd": 28119714.75,
		"hash": "dd35eb0a9721cdb6d119c44f7867e95a7798e1161619be70fb3ee212c4e3cf41"
	},
	{
		"id": "165efad0a272",
		"ts": "2026-08-21T17:24:20.763Z",
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
		"liquidityUsd": 3395154.72,
		"hash": "165efad0a27205d21ee472dc3436bff7957a1600b963cf1bf97bce12fe67c2c1"
	},
	{
		"id": "6155eb9b7498",
		"ts": "2026-08-21T17:24:20.980Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1164814.31,
		"hash": "6155eb9b749882c09c24cb35ffcd61600a18ee4eeecf7a75ca9356a9b1e15699"
	},
	{
		"id": "682c9e4b9707",
		"ts": "2026-08-21T17:24:21.195Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28119714.75,
		"hash": "682c9e4b9707c07a00a58308b123b70d44c65e05838d8a16710f9d4a140154b4"
	},
	{
		"id": "c4297e4ac73e",
		"ts": "2026-08-21T17:24:21.408Z",
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
		"liquidityUsd": 1661162.08,
		"hash": "c4297e4ac73ef592a7f006d94a5d9ed0ff1d5a01c50bad23e2f6f94c7a47333d"
	},
	{
		"id": "03f61f0d04e3",
		"ts": "2026-08-21T17:24:22.071Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 974197.72,
		"hash": "03f61f0d04e3157e70fedd5e03ab6e736c7ab6a4153a31226604c1563d110352"
	},
	{
		"id": "54bb2365300d",
		"ts": "2026-08-21T17:24:22.280Z",
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
		"liquidityUsd": 11574355.02,
		"hash": "54bb2365300d7035a3a713f45f94b57852dbdfbf148f34c793473bbc8094a7ef"
	},
	{
		"id": "d591fb93401c",
		"ts": "2026-08-21T17:24:22.486Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 280650.46,
		"hash": "d591fb93401c1be55e51a5bbe549388bbda23c0084b7a20ce248f9c80ca24961"
	},
	{
		"id": "b7d9f5a8d991",
		"ts": "2026-08-21T17:24:22.684Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3233096.98,
		"hash": "b7d9f5a8d991f4e5759b1fc5fcab8f5074982f4c95136213f8135df6d5301436"
	},
	{
		"id": "bdbef23bea2b",
		"ts": "2026-08-21T17:24:22.899Z",
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
		"liquidityUsd": 440927.96,
		"hash": "bdbef23bea2bdbf1351a123ed889077faa157ce67d6ad97074a9fe354172de67"
	},
	{
		"id": "48f040611a99",
		"ts": "2026-08-21T17:24:23.089Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 599855.53,
		"hash": "48f040611a996432ec7937b9b9f2ff88b8b0573045f8f4f46c7919a7dd1422dd"
	},
	{
		"id": "0f787c3729ef",
		"ts": "2026-08-21T17:24:23.278Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4375980.9,
		"hash": "0f787c3729efe3a78ca95ed2f1c3971817a7c4daa3b72894859b638d3c9bed7b"
	},
	{
		"id": "3fbd610f1745",
		"ts": "2026-08-21T17:24:23.479Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1793906.08,
		"hash": "3fbd610f1745defd1aa16b3a91efa1e3a81779a226cdc19ed2d45c9f3b30592a"
	},
	{
		"id": "c3f6f07fee28",
		"ts": "2026-08-21T17:24:23.679Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4744443.98,
		"hash": "c3f6f07fee28519c21916d1ce9be58d8984ad02fccaf5ac3c91ee80ff71c464e"
	},
	{
		"id": "99458c53f76c",
		"ts": "2026-08-21T17:24:23.950Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 76107.93,
		"hash": "99458c53f76c3b3f1dccef9cd3fc6d7bf4faec604f6deb4a493ae9d7286f7c34"
	},
	{
		"id": "796e9f2798bf",
		"ts": "2026-08-21T17:24:24.148Z",
		"symbol": "OVPP",
		"token": "0x8C0d3ADCF8Ce094E1aE437557Ec90A6374dC9BDD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 384701.52,
		"hash": "796e9f2798bfe33fbffee0aa6b939787c4e6b2b986e12a315b2238ece64263c4"
	},
	{
		"id": "8ff055145784",
		"ts": "2026-08-21T16:28:27.222Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111804724.72,
		"hash": "8ff0551457845e8cf77c3f4c2e813c5797a9355197790749d318220f68a54447"
	},
	{
		"id": "19be84c16ac6",
		"ts": "2026-08-21T16:28:27.666Z",
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
		"liquidityUsd": 16274656.35,
		"hash": "19be84c16ac616edfb38572c91473882750f9b8363110901e6ecee0113f96ed2"
	},
	{
		"id": "31c96ab207e3",
		"ts": "2026-08-21T16:28:28.097Z",
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
		"liquidityUsd": 916589.87,
		"hash": "31c96ab207e32199fdaa05f1cf6dd6838665935d527a0c73f7fbbbb3efa2f22d"
	},
	{
		"id": "f4a82b7f1eeb",
		"ts": "2026-08-21T16:28:28.336Z",
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
		"liquidityUsd": 28250801.67,
		"hash": "f4a82b7f1eebc07fbb3d7ef167b84f9ca81206cd4bf12b9da1b0864f1dbbcd00"
	},
	{
		"id": "e407fa7dbfba",
		"ts": "2026-08-21T16:28:28.584Z",
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
		"liquidityUsd": 3342239.4,
		"hash": "e407fa7dbfba7cf1623e0171ebc8554cbeacee1afa490ef62e17e52dce527d0f"
	},
	{
		"id": "8e7c230e47c1",
		"ts": "2026-08-21T16:28:28.825Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1158903.89,
		"hash": "8e7c230e47c1ca43d47b4ae902cee5dbdad85d4c23e333cde647bf537493547d"
	},
	{
		"id": "0a074ef1464f",
		"ts": "2026-08-21T16:28:29.065Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28250801.67,
		"hash": "0a074ef1464f294db1382b133df8f84496fa1b08e7f280eca1eb861eab0df4f5"
	},
	{
		"id": "57d14c7090da",
		"ts": "2026-08-21T16:28:29.299Z",
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
		"liquidityUsd": 1651982.23,
		"hash": "57d14c7090da027b2f131985c943cd45dd5549d7aeda44b3d5852c25af50f1c2"
	},
	{
		"id": "d3486a1cb583",
		"ts": "2026-08-21T16:28:29.540Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 992624.58,
		"hash": "d3486a1cb5838c6f721a872ea7815b13da5303fbf198ac44c1965f236ba3f658"
	},
	{
		"id": "6ebd2fb250f6",
		"ts": "2026-08-21T16:28:29.787Z",
		"symbol": "align",
		"token": "0x53f39e5C53EE40bbc3Da97C3B47BD2968d110a8D",
		"score": 0,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 1,
		"flags": [
			"hidden_owner",
			"owner_can_change_balance",
			"mintable",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 279034.99,
		"hash": "6ebd2fb250f6987b475bc3ea73fb682aaac8ba16a51ae95bc70ed2cacc3854db"
	}
]
