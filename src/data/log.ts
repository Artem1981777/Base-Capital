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
	"updatedAt": "2026-08-18T01:00:01.574Z",
	"tokensScored": 11533,
	"verdictsIssued": 11533,
	"safe": 10019,
	"risky": 851,
	"likelyRug": 663,
	"ticks": 684
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "cf04698cf7fa",
		"ts": "2026-08-18T00:59:57.319Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112992979.2,
		"hash": "cf04698cf7face3c2245e5881771e45e79cd47874fddbd77130cadb2d11db0ab"
	},
	{
		"id": "7811041955c5",
		"ts": "2026-08-18T00:59:57.657Z",
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
		"liquidityUsd": 16777479.77,
		"hash": "7811041955c52ae32acb631ced63d5f2379a1ec3edcbec6ba5aa70988e7e271c"
	},
	{
		"id": "b20590116831",
		"ts": "2026-08-18T00:59:57.901Z",
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
		"liquidityUsd": 787177.4,
		"hash": "b20590116831cf2856487f11c8ddc63b888f88d930c32725c5c086a87603a635"
	},
	{
		"id": "5448ef3d156a",
		"ts": "2026-08-18T00:59:58.100Z",
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
		"liquidityUsd": 26924599.87,
		"hash": "5448ef3d156a7c0680f47649ba2d5b05d6a0d24cc868b06f2b316374cebe5dc7"
	},
	{
		"id": "2a82793a69e5",
		"ts": "2026-08-18T00:59:58.290Z",
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
		"liquidityUsd": 4259227.67,
		"hash": "2a82793a69e5f13396ec55895ef2f8c9fed2a96c0aee106e604c51c2312f412d"
	},
	{
		"id": "debc8229abf2",
		"ts": "2026-08-18T00:59:58.485Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889216.77,
		"hash": "debc8229abf289dd92e9f9832eff9c23cf6f5d7147ce5ce243936cf32ff3ac77"
	},
	{
		"id": "2438c96e901f",
		"ts": "2026-08-18T00:59:58.677Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3914736.96,
		"hash": "2438c96e901fa294bf2f7ef45cf4679330760913c83bac6718ef4896a4cc430d"
	},
	{
		"id": "98932e3434c3",
		"ts": "2026-08-18T00:59:58.885Z",
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
		"liquidityUsd": 1529126.95,
		"hash": "98932e3434c3187bea9131986601fdbddfd83b195cd8ddc967e3ed234349ebb8"
	},
	{
		"id": "f2d3377d8af0",
		"ts": "2026-08-18T00:59:59.097Z",
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
		"liquidityUsd": 504902.05,
		"hash": "f2d3377d8af041ef04d50e5f2112da55e09c16475ee7afe7af2bb7988ec39b33"
	},
	{
		"id": "edad376cb907",
		"ts": "2026-08-18T00:59:59.306Z",
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
		"liquidityUsd": 9854925,
		"hash": "edad376cb9074a2cf2a3be4318c6c1560b59fe9042624a5e57b8a12f210d7be7"
	},
	{
		"id": "ce857b27ea1c",
		"ts": "2026-08-18T00:59:59.499Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 91386.65,
		"hash": "ce857b27ea1c9334b97988e2e7da0eb70099147ef7dad9cfe57ca0ed0f35d9d8"
	},
	{
		"id": "33a7980d9e77",
		"ts": "2026-08-18T00:59:59.686Z",
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
		"liquidityUsd": 547220.25,
		"hash": "33a7980d9e7737bbbaee205d3e7a2d1be0ed70a7438df0d41a95ce03e43f18ae"
	},
	{
		"id": "3a39d81661cb",
		"ts": "2026-08-18T00:59:59.865Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 387527.84,
		"hash": "3a39d81661cb6bdd18696855d43899f15d4cbb1015a916c96857b516b1cc9767"
	},
	{
		"id": "ce53251c8e6f",
		"ts": "2026-08-18T01:00:00.070Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 67198.54,
		"hash": "ce53251c8e6fb8e126d1abb6a5a73c3c6ee8897d64b9014635a7f37c9e77ec5e"
	},
	{
		"id": "0ef454be6826",
		"ts": "2026-08-18T01:00:00.267Z",
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
		"liquidityUsd": 247016.23,
		"hash": "0ef454be6826341ecf84d5b44840d51330554e76f928dce69af67b46a01d1587"
	},
	{
		"id": "212973419af6",
		"ts": "2026-08-18T01:00:00.456Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 38489.56,
		"hash": "212973419af6620872e2428084d6e2f5071fffcc624d1aa525fce695852b8e00"
	},
	{
		"id": "077699b6df93",
		"ts": "2026-08-18T01:00:00.663Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 3902613.18,
		"hash": "077699b6df937e04225f93f035f676d39d8208bc8545e0be551765500604827c"
	},
	{
		"id": "0a3dac82529c",
		"ts": "2026-08-18T01:00:01.016Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 74955.84,
		"hash": "0a3dac82529c60973bda7562e7e125a6392f7279e68137d9972eece3597a88c0"
	},
	{
		"id": "2f160077803f",
		"ts": "2026-08-18T01:00:01.348Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1001890.73,
		"hash": "2f160077803f0827cda0aa23728c8085b06217970f969354395cb5c2c3feda17"
	},
	{
		"id": "e63a44ce2ebc",
		"ts": "2026-08-18T01:00:01.574Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1501785.61,
		"hash": "e63a44ce2ebc5161a1b3d6ea07d874ea387fa520721ba2cf98f64a4545277f1a"
	},
	{
		"id": "d5edeecc064e",
		"ts": "2026-08-17T23:18:45.554Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112858605.75,
		"hash": "d5edeecc064ed322837a37fce2ee3159766afc18d45d73ead3a549853e561143"
	},
	{
		"id": "ab9845b703ff",
		"ts": "2026-08-17T23:18:46.017Z",
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
		"liquidityUsd": 18032603.77,
		"hash": "ab9845b703ffa959df306a7294b727e7d8af3a0ae776d3404fb0ee1d3ffb715a"
	},
	{
		"id": "e1e6d6a3050b",
		"ts": "2026-08-17T23:18:46.274Z",
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
		"liquidityUsd": 786711.48,
		"hash": "e1e6d6a3050b1efd78a34403291124cb077b13ca54ffcd40980c22d2fb7b79e1"
	},
	{
		"id": "a20a224f5d68",
		"ts": "2026-08-17T23:18:46.533Z",
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
		"liquidityUsd": 26905265.06,
		"hash": "a20a224f5d684b3d8cd07a9e4808719a405d1ba880ee2538ae305405e3f51898"
	},
	{
		"id": "389786e48299",
		"ts": "2026-08-17T23:18:46.790Z",
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
		"liquidityUsd": 4249589.34,
		"hash": "389786e482998817c29fa5388f91fd77fc7b880b01288fe75a3ee00e909177dc"
	},
	{
		"id": "d5dbf9afb9fa",
		"ts": "2026-08-17T23:18:47.043Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 884166.1,
		"hash": "d5dbf9afb9fa600d60627404ffa9fea3c8bbd055c13ad332234a0d3d49279b62"
	},
	{
		"id": "1b46ff315067",
		"ts": "2026-08-17T23:18:47.291Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3846725.97,
		"hash": "1b46ff3150675190695f05876e9cc534e802d8f17ad90989bd5b001240367efb"
	},
	{
		"id": "4e4541515466",
		"ts": "2026-08-17T23:18:47.545Z",
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
		"liquidityUsd": 1279389.82,
		"hash": "4e4541515466d30ddd636aa04b9da44f057789e9b01f6dd06672e6af8f30d471"
	},
	{
		"id": "50d72412e468",
		"ts": "2026-08-17T23:18:47.800Z",
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
		"liquidityUsd": 535313.06,
		"hash": "50d72412e468e3922c0182ce018cddf217ee78095d0029f58004b4583a27064e"
	},
	{
		"id": "4a5bef422e1a",
		"ts": "2026-08-17T23:18:48.099Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 86515.28,
		"hash": "4a5bef422e1a581ead81b9c099c73cae855eb10d22998d513ac675d68fe8527d"
	},
	{
		"id": "bdcc83063e28",
		"ts": "2026-08-17T23:18:48.333Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 393086.61,
		"hash": "bdcc83063e28a2077a205b368e284a754c3945fa228013996619fd628f7922d8"
	},
	{
		"id": "435eac92f8fc",
		"ts": "2026-08-17T23:18:48.567Z",
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
		"liquidityUsd": 515814.03,
		"hash": "435eac92f8fc018e44497d4b5779eaaf604dfa72e278a1a3c06d8d520af49289"
	},
	{
		"id": "3ce2593f37af",
		"ts": "2026-08-17T23:18:48.800Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9865626.35,
		"hash": "3ce2593f37af9a8ab5cfb9add5e4fcb1a94501c804d4b5e57b27854ca808503a"
	},
	{
		"id": "5431ca40d510",
		"ts": "2026-08-17T23:18:49.036Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 62748.24,
		"hash": "5431ca40d51031f4c96a65b7702b094b1f98f1f5365751d744a1db83fe6eeec7"
	},
	{
		"id": "dd699fcd0647",
		"ts": "2026-08-17T23:18:49.269Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247314.48,
		"hash": "dd699fcd06475eafb72a76626caa8a1f139851ef70d047ebdf509d12919e4269"
	},
	{
		"id": "321a60c2c586",
		"ts": "2026-08-17T23:18:49.505Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 43749.41,
		"hash": "321a60c2c586098571055569c4d3fcb7f78a0f4930c3d0c2af9f326b438e1e84"
	},
	{
		"id": "b2785c0a29bb",
		"ts": "2026-08-17T23:18:49.738Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1005164.55,
		"hash": "b2785c0a29bb316bd244cfc702a007f156815e24ef26824bed7dd341423ab9a8"
	},
	{
		"id": "718f3410465f",
		"ts": "2026-08-17T23:18:49.974Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3846725.97,
		"hash": "718f3410465f0a68a2e04be903c0766a99b7245e5db72c8a842a4c6b53405c6e"
	},
	{
		"id": "0f8bbb7c6bcb",
		"ts": "2026-08-17T23:18:50.209Z",
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
		"liquidityUsd": 2554597.67,
		"hash": "0f8bbb7c6bcbf60d975688941c945123e733943ce299fda6fbb889c81464d665"
	},
	{
		"id": "5818b3a5fbb7",
		"ts": "2026-08-17T23:18:50.443Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1464428.95,
		"hash": "5818b3a5fbb7883867f516bfee11b5d036bce970cda3b8b3935127ea3b69256e"
	},
	{
		"id": "5912616f7e8c",
		"ts": "2026-08-17T22:19:40.514Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112830772.81,
		"hash": "5912616f7e8cbedef626ef7668960f916f27c76d4e62fee1cc432ad283185db0"
	},
	{
		"id": "1b049910f372",
		"ts": "2026-08-17T22:19:40.857Z",
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
		"liquidityUsd": 18391615.25,
		"hash": "1b049910f3727147313ae7a89e4d7c83d8ec7ab6fe95ef1f3e86276cdc2b1747"
	},
	{
		"id": "d9f43023d731",
		"ts": "2026-08-17T22:19:41.054Z",
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
		"liquidityUsd": 786711.48,
		"hash": "d9f43023d731d99a1a9bdcf39905f5bc861b9566527e38d595ab53bdf99506c3"
	},
	{
		"id": "505c3fda84fa",
		"ts": "2026-08-17T22:19:41.261Z",
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
		"liquidityUsd": 26939022.66,
		"hash": "505c3fda84fa064f7570a3e1c128fef04eb062171c4c19a4a852ce9b156f8814"
	},
	{
		"id": "862de5538865",
		"ts": "2026-08-17T22:19:41.456Z",
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
		"liquidityUsd": 4250231.92,
		"hash": "862de5538865e57111874818ee5d40390f8e6914ddbe0c09ce2803e737866dca"
	},
	{
		"id": "51fae9e73d72",
		"ts": "2026-08-17T22:19:41.702Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 884166.1,
		"hash": "51fae9e73d729685ceeba51bc3266d84a584784285babadf1e101caad5e66707"
	},
	{
		"id": "b02fee79570e",
		"ts": "2026-08-17T22:19:41.895Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3971999.88,
		"hash": "b02fee79570ee97a698a636f24bdb699cde7b6a1b593f8a5e06ebe9859c3d390"
	},
	{
		"id": "81dfb5e7857c",
		"ts": "2026-08-17T22:19:42.082Z",
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
		"liquidityUsd": 1270304.21,
		"hash": "81dfb5e7857cfda8c5673ea6c552651af86fe26d2db6b8aec8976935c4de4464"
	},
	{
		"id": "5a4ba500e9cc",
		"ts": "2026-08-17T22:19:42.288Z",
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
		"liquidityUsd": 516036.56,
		"hash": "5a4ba500e9cc16323e2c827bb6146ed32c62133f468562fb35919bca1d2e406d"
	},
	{
		"id": "786af463136c",
		"ts": "2026-08-17T22:19:42.484Z",
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
		"liquidityUsd": 391522.38,
		"hash": "786af463136c28133e7de2df085672b7612fb0ab0bf0179b088ae580f0a9f4b1"
	},
	{
		"id": "d98f4a6ff22d",
		"ts": "2026-08-17T22:19:42.674Z",
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
		"liquidityUsd": 526065.21,
		"hash": "d98f4a6ff22d29aa568a6459376211a0732acc32f7546f9200304aa1ef0381b0"
	},
	{
		"id": "8ac50cf7c379",
		"ts": "2026-08-17T22:19:42.887Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 90846.99,
		"hash": "8ac50cf7c3793c9d584dc1cb857c6ebbc76e6c6b01576e340aa09f6573e05fef"
	},
	{
		"id": "d9a434eb3fcd",
		"ts": "2026-08-17T22:19:43.088Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10041636.86,
		"hash": "d9a434eb3fcd983c1237514c6111f7b0c9e1d77055b83bec473ab766b478f462"
	},
	{
		"id": "ee9dce0a385c",
		"ts": "2026-08-17T22:19:43.290Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 81681.6,
		"hash": "ee9dce0a385c674c841d05f7d23cccbee7b7fd918eacfb836a6ad41a7d155838"
	},
	{
		"id": "4aff28323d75",
		"ts": "2026-08-17T22:19:43.489Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 246354.14,
		"hash": "4aff28323d75680de7b63ee4b178f7aba5c50f9d38da28480e4a413852ea0093"
	},
	{
		"id": "bd2c7d4a43ea",
		"ts": "2026-08-17T22:19:43.803Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 42772.14,
		"hash": "bd2c7d4a43ea6cbdce49d965ac8535c187007d9851bc1dabd58544a0387b1d77"
	},
	{
		"id": "cd16aa60a8d5",
		"ts": "2026-08-17T22:19:44.013Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1001171.45,
		"hash": "cd16aa60a8d5959741e858f04e714a6dbea0f4fa57df1f52cd07f55eb9153df2"
	},
	{
		"id": "34540973b5eb",
		"ts": "2026-08-17T22:19:44.210Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 89233.78,
		"hash": "34540973b5eb845c97dadee83717c2c66a0b9417d464f1c6e10dcfefd121e162"
	},
	{
		"id": "2e65a11d58fb",
		"ts": "2026-08-17T22:19:44.414Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2535012.21,
		"hash": "2e65a11d58fb4d2af2171dd131e523344a71c13e0ced54b54d7776a3d538944e"
	},
	{
		"id": "e82043ccb01a",
		"ts": "2026-08-17T22:19:44.608Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3968642.51,
		"hash": "e82043ccb01a6ecc4c22526dccbd96553620be0de68207489cc7cf0921e0a0f2"
	},
	{
		"id": "c8fcc5a1123f",
		"ts": "2026-08-17T21:21:30.415Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112834115.05,
		"hash": "c8fcc5a1123fd7a3238029c3d8e814d84ce8d802f783befa94ed85e7b39c4101"
	},
	{
		"id": "bf7bd28c2827",
		"ts": "2026-08-17T21:21:30.873Z",
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
		"liquidityUsd": 18415216.02,
		"hash": "bf7bd28c28271a74418f43b45de021ddcd34cf39e6dcc9a6d6283f4ddbcaba99"
	},
	{
		"id": "032e30ebfe4d",
		"ts": "2026-08-17T21:21:31.107Z",
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
		"liquidityUsd": 786363.69,
		"hash": "032e30ebfe4d4fe5db9c5f6c0ca071f3a41a826cb737e26ac2bbab8e09bbc6d2"
	},
	{
		"id": "e8da5c629746",
		"ts": "2026-08-17T21:21:31.384Z",
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
		"liquidityUsd": 26958407.12,
		"hash": "e8da5c62974616e415817b9c4f9aeb9457b146ef5c9044eeb974456401f4a79c"
	},
	{
		"id": "38dd8e6c8385",
		"ts": "2026-08-17T21:21:31.642Z",
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
		"liquidityUsd": 4257200.77,
		"hash": "38dd8e6c83858cf6f4717c68bbb1576e74b5af1a2f269bc6a505f2782ef985d0"
	},
	{
		"id": "c30da9d56533",
		"ts": "2026-08-17T21:21:31.874Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889564.2,
		"hash": "c30da9d565332ab3e51a930d40d135de0fdf1793ccace4ee0673f9b4efeed89d"
	},
	{
		"id": "5b10e073632d",
		"ts": "2026-08-17T21:21:32.120Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3997868.45,
		"hash": "5b10e073632d0af14682bc3c6f1b0d3204a0845f7fa36df417f8cd0640e5f34e"
	},
	{
		"id": "884dcc074dd3",
		"ts": "2026-08-17T21:21:32.366Z",
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
		"liquidityUsd": 1261692.87,
		"hash": "884dcc074dd32efe72db7352e9da9ee3b8e9b3c540d63a1e6aa3d8aea5016b7a"
	},
	{
		"id": "af66784a4952",
		"ts": "2026-08-17T21:21:32.802Z",
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
		"liquidityUsd": 499677.92,
		"hash": "af66784a49521d887b1814fe4270286d586b7bd164efdd5702a2ad7e91b9347c"
	},
	{
		"id": "143a95f18d16",
		"ts": "2026-08-17T21:21:33.048Z",
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
		"liquidityUsd": 527833.39,
		"hash": "143a95f18d16e6f4c9efe2ea030ecf69d77393715c4fae37598e9c44ee86e739"
	},
	{
		"id": "a1503965e006",
		"ts": "2026-08-17T21:21:33.278Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 95640.7,
		"hash": "a1503965e0065472160a3f28ce4bde0b0ca6aefe0174f36ab2a9562a0da1a16f"
	},
	{
		"id": "d6da32c74cef",
		"ts": "2026-08-17T21:21:33.499Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 389751.09,
		"hash": "d6da32c74cefffada8fdef6e92464e02c8ef6686072d98fe44f7513f9114834a"
	},
	{
		"id": "aa278cfc8c9e",
		"ts": "2026-08-17T21:21:33.726Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9994797.15,
		"hash": "aa278cfc8c9e91624f1555aff69a946ddc83a256b45dfdb10b07de4d7d5b174b"
	},
	{
		"id": "c8d42638eacf",
		"ts": "2026-08-17T21:21:33.954Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245999.68,
		"hash": "c8d42638eacf0e46ad29542b957999782dea26a9dd2c6190e71c98f2b9c93805"
	},
	{
		"id": "4897104778b4",
		"ts": "2026-08-17T21:21:34.173Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 94396.62,
		"hash": "4897104778b4e0adf8f26c01bb3426df133c81329c1345f0d0ad57bea9b0b4d9"
	},
	{
		"id": "412c814f16be",
		"ts": "2026-08-17T21:21:34.400Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 44769.52,
		"hash": "412c814f16bee94a4397001a61f7be0695f45dd4ac2fec28087f4fedcc93c8fa"
	},
	{
		"id": "48fa5918d373",
		"ts": "2026-08-17T21:21:34.629Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1008668.72,
		"hash": "48fa5918d37329cdfe3c11ad5df11ebaed04ef65b48ea25d4ad18e923c762b9a"
	},
	{
		"id": "60f4115778fd",
		"ts": "2026-08-17T21:21:34.849Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 80363.85,
		"hash": "60f4115778fd0653ee467b906365d6967981559249d8127f411292eb1cb330c8"
	},
	{
		"id": "2f6390de2ca7",
		"ts": "2026-08-17T21:21:35.078Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2533130.6,
		"hash": "2f6390de2ca7a77691784e60cb3ee5bcadb183cb87fa3830817bde594ee6596d"
	},
	{
		"id": "4e5248fa2b18",
		"ts": "2026-08-17T21:21:35.307Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3997868.45,
		"hash": "4e5248fa2b18ec7e6365575642705ce0e29b2d491a212a6493ebc6b3b44114a6"
	},
	{
		"id": "5c56d773f15e",
		"ts": "2026-08-17T20:21:31.926Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112869476.04,
		"hash": "5c56d773f15e397cb0584b97a99e1d4437e075baa0a59e0bee33c2acae23b5b8"
	},
	{
		"id": "b22f65dd5f82",
		"ts": "2026-08-17T20:21:32.266Z",
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
		"liquidityUsd": 17657062.98,
		"hash": "b22f65dd5f82c320145ffb17bc81c4eb21a625c09db48c7c1aec86cd69664ecc"
	},
	{
		"id": "0bd81a8f337c",
		"ts": "2026-08-17T20:21:32.595Z",
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
		"liquidityUsd": 786363.69,
		"hash": "0bd81a8f337c8ca4d8d5e000a9c292fd33791182cd73abe2631d0f0671eb9ed5"
	},
	{
		"id": "cfed117aebd0",
		"ts": "2026-08-17T20:21:32.797Z",
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
		"liquidityUsd": 26938467.87,
		"hash": "cfed117aebd09a694d161baa93776ec2961cec222cdfaac160f499fcb6810b43"
	},
	{
		"id": "3aecde9b016b",
		"ts": "2026-08-17T20:21:33.006Z",
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
		"liquidityUsd": 4257684.34,
		"hash": "3aecde9b016b41564655eee346537f90bca1ae7a3ab8cda4a2895b39051d2ca3"
	},
	{
		"id": "c7f7b2b3b11b",
		"ts": "2026-08-17T20:21:33.197Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889564.2,
		"hash": "c7f7b2b3b11b551007c17d7602b6987ff9f8ee6570346650fb2432d5eba5242b"
	},
	{
		"id": "bd598da3141c",
		"ts": "2026-08-17T20:21:33.395Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3966827.78,
		"hash": "bd598da3141c8affb6666cc28508e359387d9ac3e9318365e03472d55eb19af7"
	},
	{
		"id": "eeac53e76fe0",
		"ts": "2026-08-17T20:21:33.595Z",
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
		"liquidityUsd": 1208459.78,
		"hash": "eeac53e76fe00058da75afe90fb3e5a8be3a71069cce1fc586ee6c475dc116bc"
	},
	{
		"id": "8f184de9dd41",
		"ts": "2026-08-17T20:21:33.927Z",
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
		"liquidityUsd": 486905.62,
		"hash": "8f184de9dd41ffbc6b08353b0f5ba3d9c5fac8d467db0bc72adfcc5a0f63f63f"
	},
	{
		"id": "726e45cbd950",
		"ts": "2026-08-17T20:21:34.116Z",
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
		"liquidityUsd": 402177.65,
		"hash": "726e45cbd950786c9221a5c5ff5f469dc497bd3ca1bf05e2c94ba2f01802f613"
	},
	{
		"id": "adeedaf486bc",
		"ts": "2026-08-17T20:21:34.311Z",
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
		"liquidityUsd": 526995.63,
		"hash": "adeedaf486bcf1806e2e6fab27728082a5ca97cbcafdf5c59f23787940118f08"
	},
	{
		"id": "48dc1bdc1eec",
		"ts": "2026-08-17T20:21:34.510Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 97548.24,
		"hash": "48dc1bdc1eec6353419148f60ea4849edf3ddd691ff8ada975c1a1b154a2c885"
	},
	{
		"id": "d47d2178a837",
		"ts": "2026-08-17T20:21:34.706Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9823839.57,
		"hash": "d47d2178a837d6d64143a1a4eb3ae043727df43c090254306e2647ed7f5ac916"
	},
	{
		"id": "c197be635a63",
		"ts": "2026-08-17T20:21:34.899Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244710.07,
		"hash": "c197be635a63e80110039a5b0f471dd77f29c077370b8cb24d4f7915bccd53b9"
	},
	{
		"id": "7692061a2774",
		"ts": "2026-08-17T20:21:35.089Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 43802.85,
		"hash": "7692061a27742722a615163b5e33da12268277da01eebc20130d645cfc4ae064"
	},
	{
		"id": "3cf04d31f98f",
		"ts": "2026-08-17T20:21:35.287Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77310.05,
		"hash": "3cf04d31f98fd1d4adf6f61217f36fa00f0d1fc141063468dc99e10eee860a49"
	},
	{
		"id": "d2a7681fbd57",
		"ts": "2026-08-17T20:21:35.487Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1009647.21,
		"hash": "d2a7681fbd57cc659b5271a5b1e5fd4bcea550d4d80212fdb3ef5a7bf4ee1d03"
	},
	{
		"id": "af28393c468b",
		"ts": "2026-08-17T20:21:35.685Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 93779.25,
		"hash": "af28393c468b8381bda16aef487dfe78ef83dc74c24df5d7e2ec1a453c464cb2"
	},
	{
		"id": "823e8a2cb7e0",
		"ts": "2026-08-17T20:21:35.881Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2533389.69,
		"hash": "823e8a2cb7e0c67622f14b69203b077c77357ee0246741780b365c0883c048f4"
	},
	{
		"id": "19890326c2ef",
		"ts": "2026-08-17T20:21:36.081Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3970051.88,
		"hash": "19890326c2ef7b0c125f431107ecc3b5df4e911b3709cca15b58c37bccdc2c1d"
	},
	{
		"id": "cbce9db83d1a",
		"ts": "2026-08-17T19:24:14.625Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112842831.38,
		"hash": "cbce9db83d1a91f57b6e9bb1ac621ba84dd647d80d02fd6aa7e02b8ed1b881ec"
	},
	{
		"id": "7ba4e99857fc",
		"ts": "2026-08-17T19:24:14.881Z",
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
		"liquidityUsd": 17915085.55,
		"hash": "7ba4e99857fc276827cb6205b69e5a74cec987fd74bed77f040946fcaa11719e"
	},
	{
		"id": "dc7d72efe0f8",
		"ts": "2026-08-17T19:24:15.252Z",
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
		"liquidityUsd": 786363.69,
		"hash": "dc7d72efe0f841da727c68c36b0db944d66e976dcafd511735db20d01a48aac2"
	},
	{
		"id": "b427aa4bfc70",
		"ts": "2026-08-17T19:24:15.461Z",
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
		"liquidityUsd": 26992639.01,
		"hash": "b427aa4bfc7043897ee9fc7b659684724fb369ad637f27e54b2bc0754c429937"
	},
	{
		"id": "97344650e0b6",
		"ts": "2026-08-17T19:24:15.666Z",
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
		"liquidityUsd": 4259531.73,
		"hash": "97344650e0b65a3d60ea7151d44c9a27a451c5d864b108f7c6c832476e064917"
	},
	{
		"id": "3a094a5123c4",
		"ts": "2026-08-17T19:24:15.884Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889564.2,
		"hash": "3a094a5123c44abb11146560496f4a5a68b876c9951f7d5cc079a77c3b747484"
	},
	{
		"id": "f86985551528",
		"ts": "2026-08-17T19:24:16.100Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4043456.2,
		"hash": "f869855515283a8966c7631883c0a290a8ec89610093e37b633fb733019878c8"
	},
	{
		"id": "6fde990d0462",
		"ts": "2026-08-17T19:24:16.309Z",
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
		"liquidityUsd": 1209134.63,
		"hash": "6fde990d04622c3936286392f0dd9e24f7f533a194eec1dc01ff768936555cfc"
	},
	{
		"id": "a9dedfd8c441",
		"ts": "2026-08-17T19:24:16.510Z",
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
		"liquidityUsd": 498086.76,
		"hash": "a9dedfd8c441671f26b5c7012836f20062d5b4686e7ab3e955462d9a85e67656"
	},
	{
		"id": "8fafd74aaa66",
		"ts": "2026-08-17T19:24:16.718Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 118033.89,
		"hash": "8fafd74aaa663c2a671acde655665fe21e15d566c5c06dd4b7d01fc0a9901507"
	},
	{
		"id": "b980c9b188bf",
		"ts": "2026-08-17T19:24:16.941Z",
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
		"liquidityUsd": 526823.89,
		"hash": "b980c9b188bf2488a8b85f3ea05a3f00c4645a1f78018f7095242d71e93d829a"
	},
	{
		"id": "6e015303d6f4",
		"ts": "2026-08-17T19:24:17.131Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 415646.16,
		"hash": "6e015303d6f4cf19cb569161ebff9b065a818086431da1890825eca499188d1c"
	},
	{
		"id": "6881b2a10787",
		"ts": "2026-08-17T19:24:17.339Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9780468.94,
		"hash": "6881b2a10787d644e4feef539d63d33a9943df563c68057f724df1d6a06d71bc"
	},
	{
		"id": "f95f83d6c793",
		"ts": "2026-08-17T19:24:17.540Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 242294.07,
		"hash": "f95f83d6c79385ab9732c63e10776542f49b2684045a4e257959590635720007"
	},
	{
		"id": "7208c8ec8388",
		"ts": "2026-08-17T19:24:17.878Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1007938.3,
		"hash": "7208c8ec83883a867ab8c5daffd9ada95aa2345cbbf23d89108a8b551e945c1e"
	},
	{
		"id": "523d0a5fea6f",
		"ts": "2026-08-17T19:24:18.067Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 86038.58,
		"hash": "523d0a5fea6fc531a982f36cf789c27c4a97fba17677e74ec32ee01e3caa2858"
	},
	{
		"id": "b628675d513b",
		"ts": "2026-08-17T19:24:18.261Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 67769.42,
		"hash": "b628675d513b71e0c3dc8da2557b76ce4fa39d4e61596909c504d727fc123398"
	},
	{
		"id": "92eed6ad57f0",
		"ts": "2026-08-17T19:24:18.468Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2539393.99,
		"hash": "92eed6ad57f04b703d24ef43f7a4aa43494005a1184998ac0570ff94f1c609a2"
	},
	{
		"id": "53506ea6c8c3",
		"ts": "2026-08-17T19:24:18.658Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 39678.83,
		"hash": "53506ea6c8c3d7e37af1d5d4ede85e3dde166d062b11822e6c2dbdfa63fe5889"
	},
	{
		"id": "796ce071e939",
		"ts": "2026-08-17T19:24:18.855Z",
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
		"liquidityUsd": 587327.59,
		"hash": "796ce071e9399dc5ce1a4f069d99840e867b3f27368cd4fe81f1b0abdc4b8110"
	},
	{
		"id": "fc5b7db7d660",
		"ts": "2026-08-17T18:32:25.427Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112875116.05,
		"hash": "fc5b7db7d660820d1f3e7332e5103320d4119370415df9ce95d86fa7d26f5f78"
	},
	{
		"id": "b0f2afbf9268",
		"ts": "2026-08-17T18:32:25.666Z",
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
		"liquidityUsd": 13274050.85,
		"hash": "b0f2afbf9268d0d0c98f5f477c0ceada7009c497a8123cb95614d131c86b4342"
	},
	{
		"id": "b2154cd42dde",
		"ts": "2026-08-17T18:32:25.899Z",
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
		"liquidityUsd": 786363.69,
		"hash": "b2154cd42dde10988ee0cbdca7c434e0969e920038b340bfe72bb50ddcacdee8"
	},
	{
		"id": "bb5752e605af",
		"ts": "2026-08-17T18:32:26.164Z",
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
		"liquidityUsd": 27003064.72,
		"hash": "bb5752e605aff1de43cb69ba6694ee7bbf27a738fcd7248fa7f4cacb13a650fd"
	},
	{
		"id": "1ed8504fc4b6",
		"ts": "2026-08-17T18:32:26.392Z",
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
		"liquidityUsd": 4259005.41,
		"hash": "1ed8504fc4b6557eec4543d3533363a189f4ec71c84337404de0c90b774de482"
	},
	{
		"id": "a9b639e798f6",
		"ts": "2026-08-17T18:32:26.628Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889566.03,
		"hash": "a9b639e798f6841c0e9dbd0a3e012d9a8c234536ba673353c70194bbcb73d5b6"
	},
	{
		"id": "11ab42de374f",
		"ts": "2026-08-17T18:32:26.863Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3969089.17,
		"hash": "11ab42de374f0dcc93a9a390d7b0e835c97ebdebdcf7c7cb30282a81936bbd71"
	},
	{
		"id": "55c3662cfaad",
		"ts": "2026-08-17T18:32:27.099Z",
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
		"liquidityUsd": 1210711.79,
		"hash": "55c3662cfaad47de978bf1a224ffff2e276bc80d3ec7fcadcf6e7f524df32ddb"
	},
	{
		"id": "f1fcc1ec1d8a",
		"ts": "2026-08-17T18:32:27.330Z",
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
		"liquidityUsd": 498305.44,
		"hash": "f1fcc1ec1d8a68fa1d3a2e331bd3c04a7dcd8e024f5e4001ba5b1fafc8a929c9"
	},
	{
		"id": "61d82e379721",
		"ts": "2026-08-17T18:32:27.570Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109287.91,
		"hash": "61d82e3797212988ff8e284762ea2614fea8deff8ebc29f72ca969995c332436"
	},
	{
		"id": "f111c7335ceb",
		"ts": "2026-08-17T18:32:27.788Z",
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
		"liquidityUsd": 520377.84,
		"hash": "f111c7335ceb07bc68c2e6ba6c5df4fe342dde6ff458b02e6e85e39079eb76de"
	},
	{
		"id": "f3837b7d720e",
		"ts": "2026-08-17T18:32:28.009Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 413720.55,
		"hash": "f3837b7d720e10bc231b399df2dfda9a7670f765b8ac47b2e7263446c3203d83"
	},
	{
		"id": "73c404b1f326",
		"ts": "2026-08-17T18:32:28.220Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9832846.33,
		"hash": "73c404b1f326a4dc4e36b8bbcec3f79ba8c5b82de050f6902e19f3a0d0cc17d7"
	},
	{
		"id": "839ae404cf04",
		"ts": "2026-08-17T18:32:28.440Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 241860.08,
		"hash": "839ae404cf04a28df65c545d38f0113412b45346d1e2009dd0a8322b77824bbc"
	},
	{
		"id": "f09cd8160fd9",
		"ts": "2026-08-17T18:32:28.659Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 37515.05,
		"hash": "f09cd8160fd9e5142cf7d1bc417c03b41b2323a60bb95f091f18676ff0e89467"
	},
	{
		"id": "428e064cf2ae",
		"ts": "2026-08-17T18:32:28.880Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1008717.73,
		"hash": "428e064cf2aeb725b9d120a97e359f24c369a852e508056e72e5aaeaca035dbe"
	},
	{
		"id": "bf4c9564a227",
		"ts": "2026-08-17T18:32:29.091Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 94943.51,
		"hash": "bf4c9564a227a9a688fc0361edcbdca64c06f74499da8ca7d353f66024bcfd25"
	},
	{
		"id": "3d38a4c68641",
		"ts": "2026-08-17T18:32:29.309Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 53214.18,
		"hash": "3d38a4c68641d28828c6b33c600ebc72f91607c64c5b2203afa5f60804e9b741"
	},
	{
		"id": "b5814be14c70",
		"ts": "2026-08-17T18:32:29.526Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2565111.59,
		"hash": "b5814be14c703de9b6d84b857aa8d9f601e6b7d0b5934dd09e3647350bb648f6"
	},
	{
		"id": "50c4297a2777",
		"ts": "2026-08-17T18:32:29.747Z",
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
		"liquidityUsd": 583878.41,
		"hash": "50c4297a2777f61a2ee84ad6e406eaecc0b137d0751d689c0d8af957cf1dc5e1"
	},
	{
		"id": "d95dd82842a1",
		"ts": "2026-08-17T17:23:21.553Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111744605.2,
		"hash": "d95dd82842a111b779dc2f5027dbdb1233a39b8fa7c362ea02fb1dfa623fb82e"
	},
	{
		"id": "25638b647e64",
		"ts": "2026-08-17T17:23:22.041Z",
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
		"liquidityUsd": 13079346.89,
		"hash": "25638b647e6464b1ac44ad041335865b7e50b28b48a467d870b8b16f6b5cc835"
	},
	{
		"id": "ce11c84f09a7",
		"ts": "2026-08-17T17:23:22.305Z",
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
		"liquidityUsd": 786363.69,
		"hash": "ce11c84f09a7d0ecaee7c04bd2d596d22aae4fc843617254ca3dc8749e5966e0"
	},
	{
		"id": "68725b1b18b0",
		"ts": "2026-08-17T17:23:22.569Z",
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
		"liquidityUsd": 27036359.45,
		"hash": "68725b1b18b0d5ea9c1458102dce689979f97a1f9fb20d3adf8821acbd73c4a6"
	},
	{
		"id": "38b19c24ef16",
		"ts": "2026-08-17T17:23:22.831Z",
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
		"liquidityUsd": 4269424.13,
		"hash": "38b19c24ef16f2c0b3acf1f7ef2a99568eb7fdf3c16511166a0049273ba65543"
	},
	{
		"id": "9620b735e42c",
		"ts": "2026-08-17T17:23:23.092Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890725.61,
		"hash": "9620b735e42cc8685ffcf46d1a7fc33c280df12c7b4a0c20d5a480ea1ae895eb"
	},
	{
		"id": "50c17a207058",
		"ts": "2026-08-17T17:23:23.349Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4138209.37,
		"hash": "50c17a2070582e42f5ffa5bcd6f8d6d0b967143f46b69b23c605ba2d09d4343f"
	},
	{
		"id": "200b35eb53ec",
		"ts": "2026-08-17T17:23:23.610Z",
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
		"liquidityUsd": 1212703.14,
		"hash": "200b35eb53ec51886d528ce560a356814332ac52f0d778955baadaa3e39ac591"
	},
	{
		"id": "c51ea06aa5ce",
		"ts": "2026-08-17T17:23:23.913Z",
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
		"liquidityUsd": 480027.07,
		"hash": "c51ea06aa5ce8c5af562ea4b238944286ae8399ac2f33e9642494392af719e08"
	},
	{
		"id": "eb12ea7ef85f",
		"ts": "2026-08-17T17:23:24.176Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 12,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.76,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration",
			"sim_honeypot"
		],
		"liquidityUsd": 89839.52,
		"hash": "eb12ea7ef85f9d6402a67153ba84a8b17bdb3ecb7c6189bb13a06b3138f6dcaa"
	},
	{
		"id": "b74cd2511e27",
		"ts": "2026-08-17T17:23:24.420Z",
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
		"liquidityUsd": 535578.21,
		"hash": "b74cd2511e279c5f0d32963b5e6340aa99670a51ef7ac1e44f239a9d0c7296af"
	},
	{
		"id": "6f94c7b90b45",
		"ts": "2026-08-17T17:23:24.667Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 414800.98,
		"hash": "6f94c7b90b45fec72112357fdac65f16f735cbc2aafb1c31bb96697dc18a79a3"
	},
	{
		"id": "4d6304795b2b",
		"ts": "2026-08-17T17:23:24.912Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 242026.98,
		"hash": "4d6304795b2bda29852c19d169cb9b1782685dfce0e463141dc0a73c702e55b3"
	},
	{
		"id": "b8cd90fafea3",
		"ts": "2026-08-17T17:23:25.156Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 44589.86,
		"hash": "b8cd90fafea394406d39b81af4c974c2217ea2ab289e7a226d8e30dd3778c69d"
	},
	{
		"id": "ec6eb9be7f5b",
		"ts": "2026-08-17T17:23:25.402Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9876523.53,
		"hash": "ec6eb9be7f5bbacf6c2f12dfe149831664b9c6be0ad137cc3e411d48cf995c7d"
	},
	{
		"id": "aef204824dc7",
		"ts": "2026-08-17T17:23:25.644Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1012707.62,
		"hash": "aef204824dc75a23e7443b4b3d2e6357db05ab5d31f9c24fccdc43e3a333ad66"
	},
	{
		"id": "3314b023d760",
		"ts": "2026-08-17T17:23:25.885Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 57263.89,
		"hash": "3314b023d760a0652a81ea0fde197a934c2d92e12d6082c329a61b9dc7590a2d"
	},
	{
		"id": "6ce95264dee6",
		"ts": "2026-08-17T17:23:26.128Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2580702.89,
		"hash": "6ce95264dee631b9c430bc530aca4d55ab94c5e4ac01fec6ff65097282d551e7"
	},
	{
		"id": "a2561f19aa8f",
		"ts": "2026-08-17T17:23:26.373Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 94500.29,
		"hash": "a2561f19aa8f7ecd1e00ba9096ac3896d369bfc60458d153e02ad8498da9bc2c"
	},
	{
		"id": "7c14e8142842",
		"ts": "2026-08-17T17:23:26.626Z",
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
		"liquidityUsd": 607480.93,
		"hash": "7c14e814284241a36d031e2f759bd50b56fc0d651ef62f8b1c8d14036338083e"
	},
	{
		"id": "e1dc85674f86",
		"ts": "2026-08-17T16:22:07.953Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111743659.7,
		"hash": "e1dc85674f863e04b3ae4686f690ae68e0e07a8bf349b90c2088f8c639d70294"
	},
	{
		"id": "039afecf0bc2",
		"ts": "2026-08-17T16:22:08.245Z",
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
		"liquidityUsd": 15111538.43,
		"hash": "039afecf0bc24ca4890dffb2789722f3b2e297c45352ba553fa68c8d70c453d7"
	},
	{
		"id": "dc39c3603c4b",
		"ts": "2026-08-17T16:22:08.438Z",
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
		"liquidityUsd": 795429.95,
		"hash": "dc39c3603c4b4faf9f3cf4eb9940915f25832ee21451a7a5d88b66e9e5011d5d"
	},
	{
		"id": "29ec2f594caa",
		"ts": "2026-08-17T16:22:08.641Z",
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
		"liquidityUsd": 27165053.13,
		"hash": "29ec2f594caa36c83bb962c8fab9fce169c612590914719b0490fe556ed8823f"
	},
	{
		"id": "4bedc123f561",
		"ts": "2026-08-17T16:22:09.005Z",
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
		"liquidityUsd": 4270058.43,
		"hash": "4bedc123f561acdaf323e00e92d3f5406c97a73c35bc57a936b0a0ad7611672a"
	},
	{
		"id": "0cad239f46e5",
		"ts": "2026-08-17T16:22:09.220Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 890726.5,
		"hash": "0cad239f46e57b6d3bc7eddee940869b8a33149d303b3e3509c9dd3a69c78c1d"
	},
	{
		"id": "90dc5bc8cd10",
		"ts": "2026-08-17T16:22:09.407Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4106691.87,
		"hash": "90dc5bc8cd10846980b1cbc6e8c42d60032a9d8816fcf89b2185471f03a0246e"
	},
	{
		"id": "91ce7dd0109b",
		"ts": "2026-08-17T16:22:09.635Z",
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
		"liquidityUsd": 1210213.62,
		"hash": "91ce7dd0109bba15159db59e9d99d1df2ce43c2524b88a460695a9dc73b2a0c0"
	},
	{
		"id": "5c5c5ea0ab39",
		"ts": "2026-08-17T16:22:09.825Z",
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
		"liquidityUsd": 457892.82,
		"hash": "5c5c5ea0ab394fd295554465b176e42783f77bb6d73881a8ca78b5e73e08fce5"
	},
	{
		"id": "4e5c9dd35527",
		"ts": "2026-08-17T16:22:10.018Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 96372.99,
		"hash": "4e5c9dd35527259630575362424592f9d40222f435f40f2d3a343f8d7850f752"
	},
	{
		"id": "aacd19ef8057",
		"ts": "2026-08-17T16:22:10.199Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 44260.27,
		"hash": "aacd19ef80572aa2a429c0bbe3972ed0608089e0bc3f1c287da670d591ad9065"
	},
	{
		"id": "71ae6e7a4892",
		"ts": "2026-08-17T16:22:10.399Z",
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
		"liquidityUsd": 421311.28,
		"hash": "71ae6e7a4892b4d2f0660280ce7a513da6a8b6f5b62692e0a0e03b47da1567a4"
	},
	{
		"id": "83caeb2a4fe4",
		"ts": "2026-08-17T16:22:10.584Z",
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
		"liquidityUsd": 537407.61,
		"hash": "83caeb2a4fe4cbb8c099c121f0de0d69b45ce34f62bba4cdbc1a9ad82f6427c0"
	},
	{
		"id": "55cea0a30d37",
		"ts": "2026-08-17T16:22:10.771Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 240541.79,
		"hash": "55cea0a30d370d7239491ee00819688ed84256ebf1dabdb9b22d5d4a33d638bc"
	},
	{
		"id": "ce546fa6e10f",
		"ts": "2026-08-17T16:22:10.945Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1005610.4,
		"hash": "ce546fa6e10fdf0aca9d8a8edc9f7d2b10accd08065c467ab852a400cef10d7e"
	},
	{
		"id": "fc50e17a04cd",
		"ts": "2026-08-17T16:22:11.147Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9815989.29,
		"hash": "fc50e17a04cd95ce08034fc80173d3efe4d860512ee94038038b08887f04f9ab"
	},
	{
		"id": "8f03af76051d",
		"ts": "2026-08-17T16:22:11.331Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 54609.2,
		"hash": "8f03af76051d95ca305fd2d37de8187ccea91cce8da57007eb915da91c729321"
	},
	{
		"id": "e120822103de",
		"ts": "2026-08-17T16:22:11.583Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2617279.67,
		"hash": "e120822103de3dd4c9fba9483b1a36d7f4b3bb68dc741008ee511681bbc270fe"
	},
	{
		"id": "f9ad538ef83c",
		"ts": "2026-08-17T16:22:11.784Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 75,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.5,
		"flags": [
			"new_pair_under_24h",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 92721.88,
		"hash": "f9ad538ef83ceba51ef1083d21a608807e50db20577a4ab53cbd583068e4c902"
	},
	{
		"id": "92907c58003c",
		"ts": "2026-08-17T16:22:11.988Z",
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
		"liquidityUsd": 614924.55,
		"hash": "92907c58003c423542ef1dd2988145da881888a04c1fd3e44b99143b70c94bce"
	},
	{
		"id": "27fe35a46eb9",
		"ts": "2026-08-17T15:20:48.268Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 111675434.51,
		"hash": "27fe35a46eb96ea34dfb6f6fa158b11068536cf2661ced653b9af1d65ea6df8e"
	},
	{
		"id": "c0a205a3f2c9",
		"ts": "2026-08-17T15:20:48.703Z",
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
		"liquidityUsd": 15969439.05,
		"hash": "c0a205a3f2c93ecc1aa4c5c2557549b1c8ab12b1a1d84a2954a26d879ef79841"
	},
	{
		"id": "676131eb4344",
		"ts": "2026-08-17T15:20:48.942Z",
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
		"liquidityUsd": 797158.49,
		"hash": "676131eb4344c05a0437840aabd4e67806e99fadd452db8994f53e393f9b6b2b"
	},
	{
		"id": "cebc0a7b3964",
		"ts": "2026-08-17T15:20:49.369Z",
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
		"liquidityUsd": 27143042.74,
		"hash": "cebc0a7b3964c495c5ae3d976c6eb71e88fe70fa831b485556d6e957ab33a242"
	},
	{
		"id": "f47f81c91876",
		"ts": "2026-08-17T15:20:49.602Z",
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
		"liquidityUsd": 4236552.73,
		"hash": "f47f81c91876421927d9d780b79b7a184d2da9a864806dc9a179870955bfa484"
	},
	{
		"id": "3f38139324a0",
		"ts": "2026-08-17T15:20:49.842Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 889686.1,
		"hash": "3f38139324a044f6b19bacd8c40bbe27f3f1f6089fcc219c44a0612c755be165"
	},
	{
		"id": "1b1caaf810ce",
		"ts": "2026-08-17T15:20:50.067Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 4469084.95,
		"hash": "1b1caaf810ce563ccf4c04d46dde661d7fd882295cb3f568b56a9774863d0d49"
	},
	{
		"id": "8e205091ab92",
		"ts": "2026-08-17T15:20:50.308Z",
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
		"liquidityUsd": 1351772.37,
		"hash": "8e205091ab923df42b5cfda2c1fe405618e5303873665174dc831d91578787fb"
	},
	{
		"id": "73b1024b13a3",
		"ts": "2026-08-17T15:20:50.555Z",
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
		"liquidityUsd": 539980.17,
		"hash": "73b1024b13a326a0a180f8b06508b06b3993e2a501753f300dfdb95064f5edec"
	},
	{
		"id": "39e123f623ca",
		"ts": "2026-08-17T15:20:50.783Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 82,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.64,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 138353.93,
		"hash": "39e123f623ca66d05e360e5becf11dd097199b96f12e202a0ab4d245fb07ac93"
	},
	{
		"id": "d05cc180e24a",
		"ts": "2026-08-17T15:20:50.999Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 56839.97,
		"hash": "d05cc180e24a2294f7c6f6e0e958089e6e9a55ab82fd117f94dc670680c02b43"
	},
	{
		"id": "484dda567379",
		"ts": "2026-08-17T15:20:51.222Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 424552.66,
		"hash": "484dda56737987709ccb742054f0ad7a3438b4c52693d9b3c7bd3c830ea46c8d"
	},
	{
		"id": "0734572b7eb7",
		"ts": "2026-08-17T15:20:51.434Z",
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
		"liquidityUsd": 568465.78,
		"hash": "0734572b7eb7c467e083a9ecbb2d3cead82810ba998ab88e8050e37f2a4b1ad2"
	},
	{
		"id": "8bda457585e7",
		"ts": "2026-08-17T15:20:52.310Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 239363.84,
		"hash": "8bda457585e7cb740e28244553a679a4abb77989b1be5987a6e059466ecb650a"
	},
	{
		"id": "7bd97eff1bc2",
		"ts": "2026-08-17T15:20:52.532Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1004237.8,
		"hash": "7bd97eff1bc26624b32f4ffddf3d3a525e40ba2ad134c691cb22dfbab7ab6de4"
	},
	{
		"id": "03735de1c7ca",
		"ts": "2026-08-17T15:20:52.745Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9606024.4,
		"hash": "03735de1c7ca040f97382fb3f32c77ac17cadbc6a27d108d953d850895bf65d9"
	},
	{
		"id": "4333002b4cb9",
		"ts": "2026-08-17T15:20:52.966Z",
		"symbol": "MEOW",
		"token": "0xb200000000000000000000B8d3746D2E56596578",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 65170.31,
		"hash": "4333002b4cb96987a5372f9f4f7538ade951085055513406144007a05ec04297"
	},
	{
		"id": "611feab0e137",
		"ts": "2026-08-17T15:20:53.179Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2598007.28,
		"hash": "611feab0e13706c8342f4cb995ac9bd6d2a7aea79c3ed08685997bcbb37fd4e3"
	},
	{
		"id": "3a2eb2153810",
		"ts": "2026-08-17T15:20:53.395Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4469084.95,
		"hash": "3a2eb215381097a2cd2713bf63f7607d760d224929b205a44d192e5d8a165f53"
	},
	{
		"id": "9e152f0dc02b",
		"ts": "2026-08-17T15:20:53.618Z",
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
		"liquidityUsd": 603909.15,
		"hash": "9e152f0dc02b8c7098f1daa8877d7acc9c4e02a18f52f2ef838e3531191cf25c"
	}
]
