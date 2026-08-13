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
	"updatedAt": "2026-08-13T04:07:58.453Z",
	"tokensScored": 9610,
	"verdictsIssued": 9610,
	"safe": 8371,
	"risky": 707,
	"likelyRug": 532,
	"ticks": 581
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "de0356390214",
		"ts": "2026-08-13T04:07:55.017Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112150207.35,
		"hash": "de03563902145d741697c8533ad399078eb0b8ebf2399a8ab49834dcd35fcb7c"
	},
	{
		"id": "cf13128c8d6c",
		"ts": "2026-08-13T04:07:55.242Z",
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
		"liquidityUsd": 17529904.8,
		"hash": "cf13128c8d6cfe9cf637aeea75cf3dda37c4597dce9a2cae4ecea9c65e582b52"
	},
	{
		"id": "bd0e410b79de",
		"ts": "2026-08-13T04:07:55.458Z",
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
		"liquidityUsd": 893569.6,
		"hash": "bd0e410b79dec75585680a0f685565911cc84e5310a0b30b8caf0aa72082e653"
	},
	{
		"id": "1488785c0529",
		"ts": "2026-08-13T04:07:55.664Z",
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
		"liquidityUsd": 26863368.8,
		"hash": "1488785c0529eaad3dee99029c7d1aa5c8025e1c0ec3d7836fceb114de1ea788"
	},
	{
		"id": "6e60da490312",
		"ts": "2026-08-13T04:07:55.859Z",
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
		"liquidityUsd": 4287689.49,
		"hash": "6e60da490312bdffc5543100791385eb21a1d9b7fcb14476b865c7ac7ed0fa66"
	},
	{
		"id": "43afc3513b3c",
		"ts": "2026-08-13T04:07:56.060Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 896427.7,
		"hash": "43afc3513b3c9fc9e435ef129ab7b624f0ab7a77797ad2468d4e413fa6e3e6e2"
	},
	{
		"id": "0824a95a1d19",
		"ts": "2026-08-13T04:07:56.264Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26863368.8,
		"hash": "0824a95a1d19c3637fd8f77dcf71fa17d3e1309cb886f6340cb8179637630bbf"
	},
	{
		"id": "e298a06f395d",
		"ts": "2026-08-13T04:07:56.490Z",
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
		"liquidityUsd": 4237364.93,
		"hash": "e298a06f395d3688e1ce1ab8fcb361b72e59a9444ed49658ae858b40291257fd"
	},
	{
		"id": "efe7d9e40362",
		"ts": "2026-08-13T04:07:56.679Z",
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
		"liquidityUsd": 946368.8,
		"hash": "efe7d9e40362dac939bab1dc8cacde80c7d0a8cb3cadca27b18b81f4e8e893f9"
	},
	{
		"id": "52be74ba253c",
		"ts": "2026-08-13T04:07:56.880Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2409025.94,
		"hash": "52be74ba253ce426e2f08b2796f809cc4a975dfd214fd7577dc997a6e236d0f8"
	},
	{
		"id": "8682828ae433",
		"ts": "2026-08-13T04:07:57.080Z",
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
		"liquidityUsd": 259539,
		"hash": "8682828ae4338a7bb314f6145007b77808a7230726a2bd540b7e42eee700386a"
	},
	{
		"id": "68c4455a6e5e",
		"ts": "2026-08-13T04:07:57.269Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4406405.07,
		"hash": "68c4455a6e5e4199daea150976abdb58cc2f42eb19b78e7336ff8f7ee3766248"
	},
	{
		"id": "5a55bf5bca50",
		"ts": "2026-08-13T04:07:57.465Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1949446.37,
		"hash": "5a55bf5bca50ad74556fd3e3b82dc8d87b1bfa7eab648f6991072b12fdd29a51"
	},
	{
		"id": "ac335786b317",
		"ts": "2026-08-13T04:07:57.653Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1683491.3,
		"hash": "ac335786b3170d2e2226146fcff1faebed1c94d8c143276de42709faf28802dd"
	},
	{
		"id": "86ccc83d5d93",
		"ts": "2026-08-13T04:07:57.874Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 827049.76,
		"hash": "86ccc83d5d93473ac24ea886d0fe9cdcd4cee457be09126793f138eff5ab11be"
	},
	{
		"id": "ca8eb74ebd54",
		"ts": "2026-08-13T04:07:58.067Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4129716.16,
		"hash": "ca8eb74ebd54422a1e80a36ddb43781c10f6050f97822bad7dfb430ed44afccd"
	},
	{
		"id": "47b4e716a456",
		"ts": "2026-08-13T04:07:58.265Z",
		"symbol": "DEUS",
		"token": "0x940A319B75861014A220D9c6c144d108552B089B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 797520.33,
		"hash": "47b4e716a4562bbab5f829b26b66d2489e584e0ce13970304188fc302b50c580"
	},
	{
		"id": "bf31087b3de4",
		"ts": "2026-08-13T04:07:58.453Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9510385.16,
		"hash": "bf31087b3de42830ae7a7e368deffd8e65189e1378f26965277d448a71c5c498"
	},
	{
		"id": "5741f40b3955",
		"ts": "2026-08-13T01:40:46.180Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111962701.56,
		"hash": "5741f40b3955f8fa72755cb2f70ec411c7b15c495988c7da4b8ffc8d94ab6828"
	},
	{
		"id": "a3557466185a",
		"ts": "2026-08-13T01:40:46.510Z",
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
		"liquidityUsd": 18701426.19,
		"hash": "a3557466185aa36113bde44689eabf15b7c9a99208aa73bce223179c1f102c5b"
	},
	{
		"id": "2b18d37a45e0",
		"ts": "2026-08-13T01:40:46.708Z",
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
		"liquidityUsd": 907524.7,
		"hash": "2b18d37a45e0b610b61289af2b0dce4e9863727708d63bdb4e6b669d52082400"
	},
	{
		"id": "5bada62ccd86",
		"ts": "2026-08-13T01:40:47.036Z",
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
		"liquidityUsd": 26841518.06,
		"hash": "5bada62ccd8646efb98ecc187e5cee6821ed11c7d464c738ead15321ccc3f380"
	},
	{
		"id": "96c4cdb21589",
		"ts": "2026-08-13T01:40:47.226Z",
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
		"liquidityUsd": 4277132.75,
		"hash": "96c4cdb215895e933a6706f351abce78372197ba7400e819493a63ee6c828050"
	},
	{
		"id": "89eee5c3e745",
		"ts": "2026-08-13T01:40:47.421Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 894514.43,
		"hash": "89eee5c3e74506b290036dbf1dbd3f0012854e0bb17f259012b9f8aae83eaf5c"
	},
	{
		"id": "9d208458306f",
		"ts": "2026-08-13T01:40:47.603Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4370685.44,
		"hash": "9d208458306f3fba7eb02a67bb5cc24e8cc81f2ea0b0fa5a7b515bd39f41bb3e"
	},
	{
		"id": "e171de20d199",
		"ts": "2026-08-13T01:40:47.840Z",
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
		"liquidityUsd": 4223131.7,
		"hash": "e171de20d1996c03ff0651bba0bbbd7c1b5e0c6218509ebd3a791021d411e7d5"
	},
	{
		"id": "43ceb243f252",
		"ts": "2026-08-13T01:40:48.023Z",
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
		"liquidityUsd": 947944.78,
		"hash": "43ceb243f25203ffcdf4dbb4d1db8431cffe1779ece2af329f98b3169cf3c77f"
	},
	{
		"id": "0c8d6c15e328",
		"ts": "2026-08-13T01:40:48.209Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4352041.35,
		"hash": "0c8d6c15e328def0886fc99c9de46ac4ff33f7f711fe02418221488940accab1"
	},
	{
		"id": "c0cdd8d4a221",
		"ts": "2026-08-13T01:40:48.402Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2400640.65,
		"hash": "c0cdd8d4a221cc7e757c8ec0d66422eba10badc0c2cfcf270f29fb640d2d8670"
	},
	{
		"id": "9f2b47aca9b3",
		"ts": "2026-08-13T01:40:48.591Z",
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
		"liquidityUsd": 256550.18,
		"hash": "9f2b47aca9b36560ce789e0fcafa6d8314fec856fb5098f678258a1bb93dea91"
	},
	{
		"id": "7190e5589b56",
		"ts": "2026-08-13T01:40:48.778Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 820483.28,
		"hash": "7190e5589b56c0149913c0549d76c91d8fbfce2ff07f588d5e71aff99c2a42a0"
	},
	{
		"id": "227c0a7a3467",
		"ts": "2026-08-13T01:40:48.961Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4108797.45,
		"hash": "227c0a7a34672d70838a1462a00b2ff48c2abe72fd2fa13ec3169ab2059dd5e9"
	},
	{
		"id": "c57edabe06d7",
		"ts": "2026-08-13T01:40:49.147Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1733955.29,
		"hash": "c57edabe06d70075e156be1f5695bc8f648717ea840c61837be999549fd11180"
	},
	{
		"id": "223e42a03f3f",
		"ts": "2026-08-13T01:40:49.333Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1945741.36,
		"hash": "223e42a03f3f86635ae01df45d6dfc36e2d534035387910a709c59c7cc8f4829"
	},
	{
		"id": "d446ee9b8e76",
		"ts": "2026-08-13T01:40:49.536Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9338606.14,
		"hash": "d446ee9b8e76095e60067818f7d201abb59c8eb4f7acef6f7eb402f1247d5afd"
	},
	{
		"id": "0edfc77436fd",
		"ts": "2026-08-12T23:36:52.367Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111988860.35,
		"hash": "0edfc77436fd6c59ba2cae59faefba6b6317d26ab00c7d16c65c6eca65d3c5af"
	},
	{
		"id": "f89433cd2a51",
		"ts": "2026-08-12T23:36:52.568Z",
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
		"liquidityUsd": 17992072.47,
		"hash": "f89433cd2a51cd8df3c5cb640ad9c4632038881f83f4e009a95745607960a70f"
	},
	{
		"id": "da07e567d01c",
		"ts": "2026-08-12T23:36:52.782Z",
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
		"liquidityUsd": 908383.79,
		"hash": "da07e567d01cc0f963e5a993c13aa1c4b6a6ea81ff46571b1bf2964eb940fa1b"
	},
	{
		"id": "4b1ecdca4040",
		"ts": "2026-08-12T23:36:52.985Z",
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
		"liquidityUsd": 26814162.77,
		"hash": "4b1ecdca404087a0a8b2194ffaa47014c6465b79093f8cfd46fe47035c0d072e"
	},
	{
		"id": "22fdfaf7bb40",
		"ts": "2026-08-12T23:36:53.190Z",
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
		"liquidityUsd": 4259030.57,
		"hash": "22fdfaf7bb40564b831f9a584e66dabdd3e7e286d51ffb492deaa50377d5e6a3"
	},
	{
		"id": "d9b785aee2ca",
		"ts": "2026-08-12T23:36:53.405Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890450.1,
		"hash": "d9b785aee2ca8649453b503c60bf62083926c7afdf5ed8388568ca46da114401"
	},
	{
		"id": "9c511053e4e4",
		"ts": "2026-08-12T23:36:53.594Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4552420.01,
		"hash": "9c511053e4e41cd065933aad5fb2a15ab65d2e999aa6b99bd216a4d61e8e8fce"
	},
	{
		"id": "435253776e4e",
		"ts": "2026-08-12T23:36:53.788Z",
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
		"liquidityUsd": 4372812.7,
		"hash": "435253776e4e94b6cae56c372805d497215f904d2c7e0d0a3f4c026f8082ea8f"
	},
	{
		"id": "14a5c810b271",
		"ts": "2026-08-12T23:36:53.978Z",
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
		"liquidityUsd": 939103.72,
		"hash": "14a5c810b2710fe59d17236a7d8c219efd2b16fc3f5d85d816794ca7a2842e08"
	},
	{
		"id": "be282dd1a7bd",
		"ts": "2026-08-12T23:36:54.171Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4552420.01,
		"hash": "be282dd1a7bdf679043f0b2465a77b9329f46da47d2bc24bdd170f151fbc0fa0"
	},
	{
		"id": "fac739d0f7eb",
		"ts": "2026-08-12T23:36:54.363Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2420216.87,
		"hash": "fac739d0f7eb8b552a77d4dc1c63d7c481ff17de8ec7716e23a8f9c258ea9175"
	},
	{
		"id": "37b56a8482d7",
		"ts": "2026-08-12T23:36:54.552Z",
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
		"liquidityUsd": 255787.16,
		"hash": "37b56a8482d75f1c41ecdaaf2af6d4ab49777869fa7dab4a4318c3e521987b16"
	},
	{
		"id": "79f494fa8d96",
		"ts": "2026-08-12T23:36:54.770Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 818205.11,
		"hash": "79f494fa8d96e8156e63cf4920b064e1708e4463a51944bdc5cc7d56acdb67a5"
	},
	{
		"id": "e627d37f2e33",
		"ts": "2026-08-12T23:36:54.962Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4099147.08,
		"hash": "e627d37f2e3380b7432d842ddc30eb49e9f1ee9e88219a3a47ecee8528c7b033"
	},
	{
		"id": "24517c2f45ef",
		"ts": "2026-08-12T23:36:55.150Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1995046.74,
		"hash": "24517c2f45ef5015f60a29ef655d6412f5ec25dc88032308becb9f41ceb76b6b"
	},
	{
		"id": "e0a1e7bd0b48",
		"ts": "2026-08-12T23:36:55.354Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9291997.56,
		"hash": "e0a1e7bd0b484a2c0435ca4fecce33640ec85f590c50d781d02182d0d57ce1e1"
	},
	{
		"id": "cd0dbe60a332",
		"ts": "2026-08-12T23:36:55.543Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1750162.27,
		"hash": "cd0dbe60a3327ca4be3f950293f0652aa09e7b1c5323514d6001d2c3cfc5e1fc"
	},
	{
		"id": "7a732a512915",
		"ts": "2026-08-12T22:36:25.868Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112000855.51,
		"hash": "7a732a51291557e9921890284a219eb85bb0eb9be59745ddeafc83a433817b8f"
	},
	{
		"id": "303ac0147969",
		"ts": "2026-08-12T22:36:26.102Z",
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
		"liquidityUsd": 18000823.63,
		"hash": "303ac0147969e9b20c729024bd14bd3b543db3018ee221981e9b3afe5e4dc3ee"
	},
	{
		"id": "fdc980b710f8",
		"ts": "2026-08-12T22:36:26.333Z",
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
		"liquidityUsd": 908383.79,
		"hash": "fdc980b710f857c61e9ad94bbf9854243b30da6455d9dfec08f657fb72e18a82"
	},
	{
		"id": "7633c0fa975a",
		"ts": "2026-08-12T22:36:26.777Z",
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
		"liquidityUsd": 26813957.76,
		"hash": "7633c0fa975a054dcde956081ca2cbbb931e5d5591d690962a840faa530bc004"
	},
	{
		"id": "7fed40c701f4",
		"ts": "2026-08-12T22:36:27.011Z",
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
		"liquidityUsd": 4253744.02,
		"hash": "7fed40c701f47f9b0a5496391797307a351062075d1f9e22a2296c6c7f349129"
	},
	{
		"id": "65a96b03dc82",
		"ts": "2026-08-12T22:36:27.257Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890120.48,
		"hash": "65a96b03dc8256de81a011489631afc8444bdd2b84093fc40f74eeaabcbfd3cc"
	},
	{
		"id": "9bd22ab64a2a",
		"ts": "2026-08-12T22:36:27.483Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4521221.64,
		"hash": "9bd22ab64a2a612f678fb81d47d1a5305847af85ca0dd43ab22f701991adc9c1"
	},
	{
		"id": "d0789da04766",
		"ts": "2026-08-12T22:36:27.719Z",
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
		"liquidityUsd": 4378992.19,
		"hash": "d0789da04766d4d655f9ddeb9bfe98c10243dc238e9a0ac3fe49fdadc8ee598f"
	},
	{
		"id": "9f4c7c947236",
		"ts": "2026-08-12T22:36:27.947Z",
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
		"liquidityUsd": 938962.16,
		"hash": "9f4c7c947236a56d6be81a66f02756d079152208d6a35663b90800ff7181f14e"
	},
	{
		"id": "430ca07af025",
		"ts": "2026-08-12T22:36:28.172Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4521221.41,
		"hash": "430ca07af02529764ea480fd89d88973ffe941f0e8997fc5d73728661519982f"
	},
	{
		"id": "cc4a73c09e2e",
		"ts": "2026-08-12T22:36:28.390Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2411489.53,
		"hash": "cc4a73c09e2e32f353de94a70c6b39292e33932dcb0433da2fbd6d8b87756db2"
	},
	{
		"id": "12143296644c",
		"ts": "2026-08-12T22:36:28.604Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 256155.6,
		"hash": "12143296644c9c4671e4b24e137e7c6148bae23285f16ea65dbb7f303870892a"
	},
	{
		"id": "c7e6f64b4bb2",
		"ts": "2026-08-12T22:36:28.813Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 818852.81,
		"hash": "c7e6f64b4bb22775607f580e4e7cffb63c7f1f99d006cced8cd8264d686f4074"
	},
	{
		"id": "d941051ca805",
		"ts": "2026-08-12T22:36:29.031Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4109167.48,
		"hash": "d941051ca805d41a380e1b5559d0a0ed56b5909b5657899a23d803841489d776"
	},
	{
		"id": "de8da2077d14",
		"ts": "2026-08-12T22:36:29.243Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1997105.31,
		"hash": "de8da2077d142200bd486cc41662578379056d5dc9435be5ee3a5760dae0ad97"
	},
	{
		"id": "0cc9f675c4bb",
		"ts": "2026-08-12T22:36:29.454Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9274686.76,
		"hash": "0cc9f675c4bbfc1b614dfdf3c1bc69d5fee79f348adbc8d1049899a8a9dddfd4"
	},
	{
		"id": "a4190d5b17e0",
		"ts": "2026-08-12T22:36:29.671Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1751858.76,
		"hash": "a4190d5b17e048b3e6711178480bafaa262cc3fcc8d974739fc5724c5669148c"
	},
	{
		"id": "cae78b5cf8f8",
		"ts": "2026-08-12T21:40:56.648Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111990615.38,
		"hash": "cae78b5cf8f86fc270463cdeca81ca6c1cd7d433bb72e68e9fc8b9dd4888c34d"
	},
	{
		"id": "4f46654dbe1e",
		"ts": "2026-08-12T21:40:56.892Z",
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
		"liquidityUsd": 17830693.7,
		"hash": "4f46654dbe1eb75984149f4ae8244624014804742d15479c6077d7a006e1bf34"
	},
	{
		"id": "cbf85290e10d",
		"ts": "2026-08-12T21:40:57.118Z",
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
		"liquidityUsd": 911910.73,
		"hash": "cbf85290e10dc18b2af5099cfe1f7905aef0f4b947e411e0e49312284fe7764a"
	},
	{
		"id": "b694fd3ffd41",
		"ts": "2026-08-12T21:40:57.562Z",
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
		"liquidityUsd": 26802202.57,
		"hash": "b694fd3ffd4108f4e52e9f4e3f669126159900ec5868d3f23cb364e1b8c7bcfc"
	},
	{
		"id": "f692016551e7",
		"ts": "2026-08-12T21:40:57.834Z",
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
		"liquidityUsd": 4283426.43,
		"hash": "f692016551e7bd01f03b80fddabcbb165bf8034a9195ff6536b86fc9a9a42e3c"
	},
	{
		"id": "d5770b03b006",
		"ts": "2026-08-12T21:40:58.064Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 892256.37,
		"hash": "d5770b03b00608e41ca7e74015197a4c14e72e6e7776691309e72da12ffffce5"
	},
	{
		"id": "80b91551bf30",
		"ts": "2026-08-12T21:40:58.340Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4496004.07,
		"hash": "80b91551bf301219817388416f8aa974f6c34638ac3922e513eb54ca29c5235e"
	},
	{
		"id": "2c0066161afc",
		"ts": "2026-08-12T21:40:58.576Z",
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
		"liquidityUsd": 4381883.24,
		"hash": "2c0066161afc6885b8317a844c6dd0db380c33a01d81297498f8a406169da53f"
	},
	{
		"id": "878742b6b648",
		"ts": "2026-08-12T21:40:58.800Z",
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
		"liquidityUsd": 933122.9,
		"hash": "878742b6b648d91ee223963633dc5058f5ab926b8c6e31dfa414b7eac5bf4898"
	},
	{
		"id": "6e10283b854a",
		"ts": "2026-08-12T21:40:59.047Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4496004.41,
		"hash": "6e10283b854aedb23e430d62f2e8d43bb698c39f785dfec6910afb9e2bb95305"
	},
	{
		"id": "20effa69cbc1",
		"ts": "2026-08-12T21:40:59.259Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2414431.36,
		"hash": "20effa69cbc1c8e8454972b60004d6bb8bd1662dec2d443d8c4053001adc9a92"
	},
	{
		"id": "a860d5c89fd5",
		"ts": "2026-08-12T21:40:59.482Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 255562.13,
		"hash": "a860d5c89fd50244269f9fb446169b0d827002befcce5acbd5f2987f276e50e7"
	},
	{
		"id": "6cd85ab5cf52",
		"ts": "2026-08-12T21:40:59.692Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4102258.71,
		"hash": "6cd85ab5cf5218510590c5255600e861c5f6084438a429a7a445f9156fa11ad9"
	},
	{
		"id": "a85df3fb906a",
		"ts": "2026-08-12T21:40:59.916Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 818844.29,
		"hash": "a85df3fb906a337d7187f1be5d2a45c42f629813bbb613bf66680eb36b175e39"
	},
	{
		"id": "7cb5a9a9fb7c",
		"ts": "2026-08-12T21:41:00.152Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1926736.79,
		"hash": "7cb5a9a9fb7c22fb768a44cb7ea7d4c72b2076247f063bd263471622056f3da6"
	},
	{
		"id": "be3e506935ab",
		"ts": "2026-08-12T21:41:00.447Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 879134.18,
		"hash": "be3e506935ab67f0b9f735acaa5563835b09ff8cb95cada708c2ca90c6feb26d"
	},
	{
		"id": "84187e954ced",
		"ts": "2026-08-12T20:00:32.998Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112152296.51,
		"hash": "84187e954ced4e0f133259aab57ce26abaa2f6db2f167bf327c37c4caed5d5d1"
	},
	{
		"id": "f5e44451206c",
		"ts": "2026-08-12T20:00:33.249Z",
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
		"liquidityUsd": 15179363.41,
		"hash": "f5e44451206c8a2ff7fc0786eff47fa1ce25778ce8ebd327b13d707731338b41"
	},
	{
		"id": "6cd95bc9086b",
		"ts": "2026-08-12T20:00:33.494Z",
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
		"liquidityUsd": 916417.73,
		"hash": "6cd95bc9086b308d7ab106e81533900ff06b9b2f56c37286442d0f6d7abefa17"
	},
	{
		"id": "f643a8dfee10",
		"ts": "2026-08-12T20:00:33.733Z",
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
		"liquidityUsd": 26822907.76,
		"hash": "f643a8dfee1051143030a260eb02e1513f99deec7482aec51229b7ffa2207d84"
	},
	{
		"id": "dc8b619bd755",
		"ts": "2026-08-12T20:00:33.992Z",
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
		"liquidityUsd": 4306639.85,
		"hash": "dc8b619bd755e2712f01ed2b8883e3ee7b1ef3b49f81b8293e5edbd1be5755d5"
	},
	{
		"id": "1cc3d153e284",
		"ts": "2026-08-12T20:00:34.249Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 899599.16,
		"hash": "1cc3d153e284a436e569948f3a3794c409e324a6b768cd9fd8bed1eecbd8e29f"
	},
	{
		"id": "1e02728954b1",
		"ts": "2026-08-12T20:00:34.492Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4465085.65,
		"hash": "1e02728954b1f35062ae3dce8c74e70a861ec7106736ec5a4aaecbdf3a6a92a5"
	},
	{
		"id": "3df50377ea8c",
		"ts": "2026-08-12T20:00:34.748Z",
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
		"liquidityUsd": 4384136.83,
		"hash": "3df50377ea8c01169b82eda891bb8af19833a5eb3648f0302d9306ab6c0c9f68"
	},
	{
		"id": "6c9f50c5c31c",
		"ts": "2026-08-12T20:00:34.989Z",
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
		"liquidityUsd": 945550.96,
		"hash": "6c9f50c5c31c6a6b45e3ac1082eda849ae15af9da2c37ed6d9e71c7539f7a3d3"
	},
	{
		"id": "de2a11b7f998",
		"ts": "2026-08-12T20:00:35.248Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4465085.65,
		"hash": "de2a11b7f99839ff2d0b58417ed913d883ff8a3612e53ec5bab7cafca2d58ff1"
	},
	{
		"id": "a04485e4bea2",
		"ts": "2026-08-12T20:00:35.468Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2425453.56,
		"hash": "a04485e4bea2e681c6a0dc8cfe90771eb590d66f63a769e65eb22473a7eba94b"
	},
	{
		"id": "4f9f818626e7",
		"ts": "2026-08-12T20:00:35.686Z",
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
		"liquidityUsd": 256731.5,
		"hash": "4f9f818626e7feaedbe0c69823bfde70955da9063fc687fb01557799e4711711"
	},
	{
		"id": "8966e7229a18",
		"ts": "2026-08-12T20:00:35.903Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4104474,
		"hash": "8966e7229a18d168fa19e1c78b0ec36fff1e444933af082ef04e6123734ba5f0"
	},
	{
		"id": "7e59274624b0",
		"ts": "2026-08-12T20:00:36.132Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 820831.94,
		"hash": "7e59274624b0c70ef717c20bd4b7cebad5a5fc94c06e93bbb0774a2608763452"
	},
	{
		"id": "f4e604c395f7",
		"ts": "2026-08-12T20:00:36.348Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1944816.8,
		"hash": "f4e604c395f7e0333b910425d32da0937d1b3ede362d7e4dd170a3dc31823875"
	},
	{
		"id": "46ecaeb23d4f",
		"ts": "2026-08-12T20:00:36.567Z",
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
		"liquidityUsd": 1185719.11,
		"hash": "46ecaeb23d4fa00137798eb4c7ee19a35ab1ffea8a6ce0fb060830e4b2c46aff"
	},
	{
		"id": "9d7098c17b60",
		"ts": "2026-08-12T20:00:36.784Z",
		"symbol": "EURC",
		"token": "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2317280.94,
		"hash": "9d7098c17b603fdb56b4adcae26a5386ee594f29779af8b6f4ec5e8a981e2bac"
	},
	{
		"id": "ebec0a870276",
		"ts": "2026-08-12T18:57:06.039Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112381989.59,
		"hash": "ebec0a87027684676dc6c584b84b220183aca643b954be6bfa620104c8a095b4"
	},
	{
		"id": "e423860ccc7f",
		"ts": "2026-08-12T18:57:06.373Z",
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
		"liquidityUsd": 17574092.82,
		"hash": "e423860ccc7f59010b5ca2c4159067f64b4e320e94fb066ea18d353ce2f7a174"
	},
	{
		"id": "9dcaa3497999",
		"ts": "2026-08-12T18:57:06.568Z",
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
		"liquidityUsd": 916417.73,
		"hash": "9dcaa3497999d901663c45a59db63faca80f407954380b216347dea9ee69d32c"
	},
	{
		"id": "ce8b4b17556e",
		"ts": "2026-08-12T18:57:06.752Z",
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
		"liquidityUsd": 26914106.64,
		"hash": "ce8b4b17556ef641e79313214f28fdb916e9f8c2eb8166c7adad64599b51cea8"
	},
	{
		"id": "e556e75ac4e5",
		"ts": "2026-08-12T18:57:06.937Z",
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
		"liquidityUsd": 4333310.82,
		"hash": "e556e75ac4e598bdf7a31688b749a4d42bf6a1f3b247eabd396d0e4e554cb073"
	},
	{
		"id": "935ea7f9830b",
		"ts": "2026-08-12T18:57:07.120Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 906995.32,
		"hash": "935ea7f9830b1c6bcc28c18bc3a9c31685de2d2184bd12038e569f918d3f7977"
	},
	{
		"id": "7260fb8d3cb0",
		"ts": "2026-08-12T18:57:07.306Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4426606.22,
		"hash": "7260fb8d3cb03e8f7cf6fda6700b1d0ec146020eca09dff33c7a42c75c788576"
	},
	{
		"id": "74bf8a6db680",
		"ts": "2026-08-12T18:57:07.509Z",
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
		"liquidityUsd": 4399801.55,
		"hash": "74bf8a6db680f7ebcbca87d81943e6472f732b8b33dfb881991274d19cdc8dfa"
	},
	{
		"id": "46469c65a49e",
		"ts": "2026-08-12T18:57:07.737Z",
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
		"liquidityUsd": 942258.04,
		"hash": "46469c65a49e115aaf34d0798ba1898449da8676eb20231c15f2744da46959c9"
	},
	{
		"id": "124b6b600703",
		"ts": "2026-08-12T18:57:07.940Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4428539.59,
		"hash": "124b6b600703a2a335c29aa23e1ac5cc41b03f9be70cc7b031a12849bab6d45e"
	},
	{
		"id": "1e28fa6f9cbb",
		"ts": "2026-08-12T18:57:08.125Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2453930.23,
		"hash": "1e28fa6f9cbb623503d43760410b5f988600fe816a4e9b2f07fccacba4e304be"
	},
	{
		"id": "6b1d7d00a76f",
		"ts": "2026-08-12T18:57:08.418Z",
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
		"liquidityUsd": 256852.25,
		"hash": "6b1d7d00a76fc33fdfed1303ad8c4f56bf2daa34f6d9aad4437efa4c9d4fa9b6"
	},
	{
		"id": "f3b1d7174dbd",
		"ts": "2026-08-12T18:57:08.602Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4125956.56,
		"hash": "f3b1d7174dbd335ff1638fbec78e3faf70e964e92f6d2bed8aa8bd05808d2a9e"
	},
	{
		"id": "9467966047bd",
		"ts": "2026-08-12T18:57:08.796Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 822654.18,
		"hash": "9467966047bd0d0fbe7d21c3cea38f4135fbf20266f7f5336b840dc63ac0d179"
	},
	{
		"id": "b41ecaad9472",
		"ts": "2026-08-12T18:57:08.980Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1906257.3,
		"hash": "b41ecaad94725ae9da428454807697c537a8496e3ef1146f0ade2bf681ef6daa"
	},
	{
		"id": "c2086e8791a4",
		"ts": "2026-08-12T18:57:09.167Z",
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
		"liquidityUsd": 1182533.29,
		"hash": "c2086e8791a45b9359d7d421d67ba1b248c82a4327b0a2de544d310a26a7fe04"
	},
	{
		"id": "0ec118658f72",
		"ts": "2026-08-12T18:57:09.353Z",
		"symbol": "EURC",
		"token": "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2330616.34,
		"hash": "0ec118658f72ddbc0d249e04889d1220376065bb852aab9e06376c49c1f242fc"
	},
	{
		"id": "5755b2db0a1a",
		"ts": "2026-08-12T17:55:21.209Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112394598.37,
		"hash": "5755b2db0a1a28740880acbfeed646b56b1c66f118a351b7901f99109c2d7c55"
	},
	{
		"id": "51a5ee866e01",
		"ts": "2026-08-12T17:55:21.659Z",
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
		"liquidityUsd": 16441560.51,
		"hash": "51a5ee866e01427df40b81bdb02a6bfd058898d8d8a66db1e9e6446bcf9e01b7"
	},
	{
		"id": "5f667bd9612c",
		"ts": "2026-08-12T17:55:21.898Z",
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
		"liquidityUsd": 916417.73,
		"hash": "5f667bd9612c5ba0419b7bf35c45f706241a8d268c34cc6f04747adc88535c50"
	},
	{
		"id": "aea6e3f1f07b",
		"ts": "2026-08-12T17:55:22.321Z",
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
		"liquidityUsd": 26932680.56,
		"hash": "aea6e3f1f07ba11115a9197833375ae5914d16d922a5ee3c898b042b16296271"
	},
	{
		"id": "b91574bfe0eb",
		"ts": "2026-08-12T17:55:22.565Z",
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
		"liquidityUsd": 4354508.43,
		"hash": "b91574bfe0eb8cdadb5522b15aec8a3078e06f93f22dd845c84f9ca9541d7425"
	},
	{
		"id": "c1a3d5e5141f",
		"ts": "2026-08-12T17:55:22.828Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 906995.32,
		"hash": "c1a3d5e5141fe294c58ab76857582017726619a33ffe89989c4a9422e130955a"
	},
	{
		"id": "a5263f066fcf",
		"ts": "2026-08-12T17:55:23.060Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4496524.07,
		"hash": "a5263f066fcff1d97ee31559acaccaf8864318ca01c11b33a6ff653478131af3"
	},
	{
		"id": "e62a8b7ee685",
		"ts": "2026-08-12T17:55:23.282Z",
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
		"liquidityUsd": 4403555.47,
		"hash": "e62a8b7ee685d3db397bb4706f43938f25b168987c1858b0404ff637aa4663a3"
	},
	{
		"id": "408d01873c57",
		"ts": "2026-08-12T17:55:23.526Z",
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
		"liquidityUsd": 943672.96,
		"hash": "408d01873c5782077aecd446f314b968a2c5e849630e53dd41b2a10bc30b915c"
	},
	{
		"id": "a08bbdf96c54",
		"ts": "2026-08-12T17:55:23.762Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2397504.57,
		"hash": "a08bbdf96c547700417d9b01f0b864b1f5afdc743fb61980442d11b258fa8783"
	},
	{
		"id": "0123fdb5b17a",
		"ts": "2026-08-12T17:55:23.984Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4496524.07,
		"hash": "0123fdb5b17aebaffb740b62c440e0eb8c0cbddcd082cb1b486e897663aa463e"
	},
	{
		"id": "f288d0643fc4",
		"ts": "2026-08-12T17:55:24.196Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 258169.79,
		"hash": "f288d0643fc414b7196f16759c77da2f755c1195ce775697ff6b460770cfbba5"
	},
	{
		"id": "e902f726b0ca",
		"ts": "2026-08-12T17:55:24.423Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4130456.65,
		"hash": "e902f726b0ca6c273c35f3cafb126a79bf280a3771cbae54b2c2563f06a91910"
	},
	{
		"id": "5148d62d8ecc",
		"ts": "2026-08-12T17:55:24.646Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 823349.34,
		"hash": "5148d62d8ecc275585c3d788fa56608d3fdcfb2ea4a51b8be7cc4a34bc74ac0e"
	},
	{
		"id": "720e5a9f3c3f",
		"ts": "2026-08-12T17:55:24.865Z",
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
		"liquidityUsd": 1190798.81,
		"hash": "720e5a9f3c3fe1e6cdb66cff74196281677311a6ed8552706b7e962411bf2fdd"
	},
	{
		"id": "4567082b2c75",
		"ts": "2026-08-12T17:55:25.076Z",
		"symbol": "EURC",
		"token": "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2242911.38,
		"hash": "4567082b2c753a51a08fe1c316cd1b475797f26ffc2606ec65100517e4763f20"
	},
	{
		"id": "96739929979a",
		"ts": "2026-08-12T17:55:25.305Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9348242.73,
		"hash": "96739929979ac754ede1d34667ee2cc9b5250c8754763da4e741046f1de78bf0"
	},
	{
		"id": "314645528cee",
		"ts": "2026-08-12T16:54:44.087Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112390810.76,
		"hash": "314645528cee983d69710f56bacf56d47fbdfd5021416be9591704fa15bb50c5"
	},
	{
		"id": "8dcdd00fc184",
		"ts": "2026-08-12T16:54:44.327Z",
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
		"liquidityUsd": 17599169.19,
		"hash": "8dcdd00fc184138fa1359bd38f52da692eb73f62edb1d096b5d0ded58cf7000a"
	},
	{
		"id": "6a19e13303fe",
		"ts": "2026-08-12T16:54:44.553Z",
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
		"liquidityUsd": 916417.73,
		"hash": "6a19e13303fe54d64d6d93f2834bcf8232ac1f49bf88af3f1533f732856d57b0"
	},
	{
		"id": "e929bde6ddc5",
		"ts": "2026-08-12T16:54:44.794Z",
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
		"liquidityUsd": 26935116.31,
		"hash": "e929bde6ddc585c9b580e4d53929b03364b25a2bf07caf51183a76d46166935e"
	},
	{
		"id": "484204b73aaf",
		"ts": "2026-08-12T16:54:45.032Z",
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
		"liquidityUsd": 4338058.01,
		"hash": "484204b73aaffbbccfa1b7ec2ebc226592da665617955fe997af18ec22caab5e"
	},
	{
		"id": "c00185aa55d6",
		"ts": "2026-08-12T16:54:45.271Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 909952.03,
		"hash": "c00185aa55d6d13ef27529bdc8fe03af8c4c712139d5f6094123a754955449e8"
	},
	{
		"id": "c38ec5b69d55",
		"ts": "2026-08-12T16:54:45.496Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4328198.97,
		"hash": "c38ec5b69d55fcacfd1ed4efd6920979c6905150fed0e2b7bcf94a8d7fb1c7d5"
	},
	{
		"id": "fd78aca11fcb",
		"ts": "2026-08-12T16:54:45.747Z",
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
		"liquidityUsd": 4410664.28,
		"hash": "fd78aca11fcb8b72543c3441d03877cfeec41a9ef255228bd4d729019184d414"
	},
	{
		"id": "3a5ca80fa0df",
		"ts": "2026-08-12T16:54:45.987Z",
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
		"liquidityUsd": 940242.49,
		"hash": "3a5ca80fa0dfd79fd97c2e8a8c9d8aa62d490ddd848ee0a508db89382f7df4d2"
	},
	{
		"id": "3fa3137c2340",
		"ts": "2026-08-12T16:54:46.224Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4336900.95,
		"hash": "3fa3137c23407cb1d49e208960b548b1675d51e07f20069cb45a06ea43d06763"
	},
	{
		"id": "51592c1fe59f",
		"ts": "2026-08-12T16:54:46.436Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2429562.68,
		"hash": "51592c1fe59f709cccfea6b6e71b57c2fe2797f7d26784cd9b3da09f38c4fb5d"
	},
	{
		"id": "b7fa299ccff3",
		"ts": "2026-08-12T16:54:46.662Z",
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
		"liquidityUsd": 258887.66,
		"hash": "b7fa299ccff3b74365b66b23ee9cf41687c8ce5fa086dea13e44f5555fc96c0c"
	},
	{
		"id": "7b9ead486318",
		"ts": "2026-08-12T16:54:46.881Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4130864.91,
		"hash": "7b9ead486318887b377071befd0a48cd84427c9d9243d404207485bef090abe4"
	},
	{
		"id": "68c1d937d43e",
		"ts": "2026-08-12T16:54:47.091Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 819644.71,
		"hash": "68c1d937d43e8e49ccea6dbff8a6d1072e7a2f23f10e83d4062e57822d1a1e9d"
	},
	{
		"id": "7c96925a8f55",
		"ts": "2026-08-12T16:54:47.317Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9369697.32,
		"hash": "7c96925a8f554c3d436063bcbd4c980037f0eb547f08963fa93f9fb50de24f6f"
	},
	{
		"id": "0b9479360ce1",
		"ts": "2026-08-12T16:54:47.539Z",
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
		"liquidityUsd": 1227706.63,
		"hash": "0b9479360ce14815789af4074c1131d4efbf941dcdf859742747c1b96f40b3d3"
	},
	{
		"id": "dba47feb65ba",
		"ts": "2026-08-12T16:54:47.760Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1830606.69,
		"hash": "dba47feb65ba1ee553a75f1173ec427a53579fa04f0bda5e9c4442282f201556"
	},
	{
		"id": "826f595a9a53",
		"ts": "2026-08-12T15:55:53.632Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112385669.05,
		"hash": "826f595a9a530d77e8a2e0502ee4044d516d994bf87a121149d179162dc9cac4"
	},
	{
		"id": "2da4101e9382",
		"ts": "2026-08-12T15:55:53.978Z",
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
		"liquidityUsd": 16419018.79,
		"hash": "2da4101e93824375db838434520c2fad3102f509516b2b13b03224c2e91129c3"
	},
	{
		"id": "baf613d718d1",
		"ts": "2026-08-12T15:55:54.179Z",
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
		"liquidityUsd": 993383.32,
		"hash": "baf613d718d1a7efd63601bdd34020398b77ac3b653bb98f6f9e360ae3012b24"
	},
	{
		"id": "b1c013530b3f",
		"ts": "2026-08-12T15:55:54.374Z",
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
		"liquidityUsd": 26886781.39,
		"hash": "b1c013530b3ff04e251b1d61b17dac47bb35dab15bf0e3994ea4aaf09900a480"
	},
	{
		"id": "df734865e2bb",
		"ts": "2026-08-12T15:55:54.563Z",
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
		"liquidityUsd": 4328864.33,
		"hash": "df734865e2bb5b9dd2162bc1d23050dd66ec98902795a48fc6f051da3c1bdd49"
	},
	{
		"id": "499a5aa7448d",
		"ts": "2026-08-12T15:55:54.748Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 904463.46,
		"hash": "499a5aa7448d8a9f4f7592db00320ee444a3536894792f986456873c9eb2c9c7"
	},
	{
		"id": "c5803f619d4f",
		"ts": "2026-08-12T15:55:54.947Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4212527.73,
		"hash": "c5803f619d4fb2a3e064cde6cccf0454e5825c3667be79ce4b8cb78d2eed533a"
	},
	{
		"id": "8b7272862aaf",
		"ts": "2026-08-12T15:55:55.157Z",
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
		"liquidityUsd": 4415926.31,
		"hash": "8b7272862aaf60ad538bdeb862ea5f690b9c729bf7d2924e22e504d69134d282"
	},
	{
		"id": "e4585505a6c4",
		"ts": "2026-08-12T15:55:55.342Z",
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
		"liquidityUsd": 942763.84,
		"hash": "e4585505a6c4271900ada32cf3cb2d48548a966a536561c7cd9cbc4b1d59bd46"
	},
	{
		"id": "3dbede004762",
		"ts": "2026-08-12T15:55:55.532Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4220623.96,
		"hash": "3dbede0047629ee6ff75f8078d29e146177d331e6e450908c9b309c5755304f1"
	},
	{
		"id": "2bce11bbaddd",
		"ts": "2026-08-12T15:55:55.712Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2457879.01,
		"hash": "2bce11bbadddfb4e273559b284647f0fb4c2649b9d557700702fa526e2c71996"
	},
	{
		"id": "538f3ab4985c",
		"ts": "2026-08-12T15:55:55.913Z",
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
		"liquidityUsd": 256357.31,
		"hash": "538f3ab4985cf786820166b22bb7233c7e3f9ea0e9cc172e3b6fb1b1a07de15a"
	},
	{
		"id": "7da342d78b1d",
		"ts": "2026-08-12T15:55:56.094Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4117171.55,
		"hash": "7da342d78b1d5a811b6a5221900ab297b20e0e83ce8cee7354fca8013946bf7d"
	},
	{
		"id": "82e1ab7cc18f",
		"ts": "2026-08-12T15:55:56.313Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 821396.34,
		"hash": "82e1ab7cc18ff847c825f2834f4d07b45a6644458d3c4046814463b80ae90f98"
	},
	{
		"id": "fa2572d168fe",
		"ts": "2026-08-12T15:55:56.509Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1830533.57,
		"hash": "fa2572d168fe78194dd02fd8da51453944d2c29a27b49d0d13a7f0c4f69bd22d"
	},
	{
		"id": "b7ec58b96d16",
		"ts": "2026-08-12T15:55:56.719Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9397506.26,
		"hash": "b7ec58b96d1621b7cbcd10fc49dd3ab8d275010ffa6d2c7ed2df5ddc07c9e2e1"
	},
	{
		"id": "6ba2f165b0bf",
		"ts": "2026-08-12T15:55:56.897Z",
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
		"liquidityUsd": 1254104.66,
		"hash": "6ba2f165b0bf5b267d7815ee7e7fed28bcb09d9a05ec021e3d242978ca39696b"
	},
	{
		"id": "e1951faf3b21",
		"ts": "2026-08-12T15:55:57.115Z",
		"symbol": "EURC",
		"token": "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2461442.16,
		"hash": "e1951faf3b2188eb0034d9cd45774a67bbf5a90cb8f34f069388fa9295b7703e"
	},
	{
		"id": "d2cffa6a0a3e",
		"ts": "2026-08-12T14:23:20.405Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112651740.25,
		"hash": "d2cffa6a0a3ed73cecfa5599856df8a1a12c46d8ae3933b4438210304295a863"
	},
	{
		"id": "d54c2533bb7b",
		"ts": "2026-08-12T14:23:20.741Z",
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
		"liquidityUsd": 16623314.62,
		"hash": "d54c2533bb7bbde6598310d67daf44ed70219c7002d0d254bb7a35bfcaf7c9f6"
	},
	{
		"id": "4dcfdc5588fa",
		"ts": "2026-08-12T14:23:21.080Z",
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
		"liquidityUsd": 1002997.76,
		"hash": "4dcfdc5588faba69925f9eb6f78a95c4fa52f32ced604f66cd26a85c533556ed"
	},
	{
		"id": "bada10e762c5",
		"ts": "2026-08-12T14:23:21.422Z",
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
		"liquidityUsd": 26902799.95,
		"hash": "bada10e762c589009a2be0bf552343cb4c9541b551cf2c839927e5fc6c766a03"
	},
	{
		"id": "14ca5c77c613",
		"ts": "2026-08-12T14:23:21.606Z",
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
		"liquidityUsd": 4248564.16,
		"hash": "14ca5c77c613c9b70865acccbaf1766e5476bf80b5de84523affd3880085eecf"
	},
	{
		"id": "93df9eeac891",
		"ts": "2026-08-12T14:23:21.788Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 918583.74,
		"hash": "93df9eeac891bcaad0df7030b4ceeb961796e78ebb59e48842b77caca445ead1"
	},
	{
		"id": "4f4639a8df71",
		"ts": "2026-08-12T14:23:21.974Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26902799.95,
		"hash": "4f4639a8df71e7114c9ed159dc58298a35e81ba75fb2869f80518b1f6286a90c"
	},
	{
		"id": "9b613454332d",
		"ts": "2026-08-12T14:23:22.185Z",
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
		"liquidityUsd": 4421336.74,
		"hash": "9b613454332d04214d557b18a9a1c329f99cac27a4a755a413f2d61b7bcd8c0d"
	},
	{
		"id": "8061434bbb0e",
		"ts": "2026-08-12T14:23:22.365Z",
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
		"liquidityUsd": 949867.54,
		"hash": "8061434bbb0e7680e398125f82eed6d8eb6ea8a0ae5562c3c44bf5e4d980052a"
	},
	{
		"id": "76cecb617788",
		"ts": "2026-08-12T14:23:22.584Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4263158.65,
		"hash": "76cecb61778817f3f13ea587964a0df552655184a5ba94040b4501460d21f1ee"
	},
	{
		"id": "f69e51295000",
		"ts": "2026-08-12T14:23:22.764Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2362165.49,
		"hash": "f69e5129500077ef4e97ab2df2e9b2d08bfdb2bdfd6f920670ffc6c9569cbf02"
	},
	{
		"id": "b8fdac40f2ab",
		"ts": "2026-08-12T14:23:22.965Z",
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
		"liquidityUsd": 256429.31,
		"hash": "b8fdac40f2abeb73c2d6674a3d1eefd315f47f22855a9d66eee2fb3890d8222f"
	},
	{
		"id": "67fdba5564e8",
		"ts": "2026-08-12T14:23:23.145Z",
		"symbol": "REI",
		"token": "0x6B2504A03ca4D43d0D73776F6aD46dAb2F2a4cFD",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1841603.08,
		"hash": "67fdba5564e870da2e55d9748cbf3d06c2198efd47283fb7f5877214dc3106d4"
	},
	{
		"id": "1dc5307c1b10",
		"ts": "2026-08-12T14:23:23.332Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4143759.83,
		"hash": "1dc5307c1b108e261179e7a052d00527c3394151dbd6fc82a72844a08ed7b8af"
	},
	{
		"id": "50257b0583fb",
		"ts": "2026-08-12T14:23:23.523Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9452467.63,
		"hash": "50257b0583fb4b107d91871408536c573cd1bb2524802ea4165f0bd30083a8e0"
	},
	{
		"id": "1af7335b276f",
		"ts": "2026-08-12T14:23:23.730Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 823076.06,
		"hash": "1af7335b276f262cdbe21a8e38a19e0a687ea2151e6fae5ed4efa9bdfdaf8703"
	},
	{
		"id": "eb2259e2f417",
		"ts": "2026-08-12T14:23:23.928Z",
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
		"liquidityUsd": 1265928.78,
		"hash": "eb2259e2f4172ced77992815b070bfba05bd8b6e8da969a4a23ab061c82300b3"
	},
	{
		"id": "3a0d9e41e73f",
		"ts": "2026-08-12T12:59:57.896Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 113051827.83,
		"hash": "3a0d9e41e73f3fb9372758476ac9472619c1b5069508b810a9e0986b7ab25842"
	},
	{
		"id": "005cb19ad0ca",
		"ts": "2026-08-12T12:59:58.338Z",
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
		"liquidityUsd": 17253644.11,
		"hash": "005cb19ad0ca61c23ad448576e3c3dcda928b812baeeb41c7289e44723bd99bd"
	},
	{
		"id": "352adc0ed522",
		"ts": "2026-08-12T12:59:58.580Z",
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
		"liquidityUsd": 1002997.76,
		"hash": "352adc0ed522798ccaba1ebef32cd64fddbb48d908a958d2cc5b86cdadffce7d"
	},
	{
		"id": "bea0f8a7d38d",
		"ts": "2026-08-12T12:59:58.822Z",
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
		"liquidityUsd": 26998417.69,
		"hash": "bea0f8a7d38d5e576cabdc5ab10c7732daa8443a2f9f2709a3e94db74522588f"
	},
	{
		"id": "991009a50a5a",
		"ts": "2026-08-12T12:59:59.066Z",
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
		"liquidityUsd": 4229563.11,
		"hash": "991009a50a5a99354e57d613de799a37c13307559a1f901c7018a4eb4778497e"
	},
	{
		"id": "3dd2f6bb7864",
		"ts": "2026-08-12T12:59:59.307Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 918583.9,
		"hash": "3dd2f6bb78642c224d0d6f52e010cb5b49f24e1eed55d5614a0aaec9cab14118"
	},
	{
		"id": "ea9d9a22248e",
		"ts": "2026-08-12T12:59:59.548Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26998417.69,
		"hash": "ea9d9a22248eb35ae114cd79eb691226f52f65e4fb2ed013f2e23e6fc50f7a27"
	},
	{
		"id": "1829a5e3c389",
		"ts": "2026-08-12T12:59:59.796Z",
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
		"liquidityUsd": 4513095.86,
		"hash": "1829a5e3c389a5ad4b875c7374be8a76a0a65b8d814c1abc1f6c1708429ccdca"
	},
	{
		"id": "f34347451ea8",
		"ts": "2026-08-12T13:00:00.044Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4079467.66,
		"hash": "f34347451ea884f5e2e7a323a284ba316246dcbf87d4107387f926e26dab5908"
	},
	{
		"id": "869c10cea356",
		"ts": "2026-08-12T13:00:00.329Z",
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
		"liquidityUsd": 942368.21,
		"hash": "869c10cea356f181ecc1a23e91dc0edef15ae8a515c517620cde6ea8e5fee8b8"
	},
	{
		"id": "061a87d7aa01",
		"ts": "2026-08-12T13:00:00.596Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2349115.45,
		"hash": "061a87d7aa014baf9cd41f184599020605d6b4807909f4ac6924f7283637d25f"
	},
	{
		"id": "dc26ed52d3d0",
		"ts": "2026-08-12T13:00:00.840Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 14,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.72,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 258469.3,
		"hash": "dc26ed52d3d098123b9611ec5d12e258860e033cc0523866084db9ccc7d70b5d"
	}
]
