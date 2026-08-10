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
	"updatedAt": "2026-08-10T15:57:12.136Z",
	"tokensScored": 8850,
	"verdictsIssued": 8850,
	"safe": 7730,
	"risky": 660,
	"likelyRug": 460,
	"ticks": 537
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "0d5c71d3478b",
		"ts": "2026-08-10T15:57:08.601Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112789926.14,
		"hash": "0d5c71d3478b51a8bfc87e6a0a81fa63fd37daa7df390bc3508ac69947b63067"
	},
	{
		"id": "0b30e241e9c6",
		"ts": "2026-08-10T15:57:09.026Z",
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
		"liquidityUsd": 13353555.81,
		"hash": "0b30e241e9c68b4ee5a474923dc8a59814df84de21b34c622dd44e7fee82594a"
	},
	{
		"id": "e038f30d677c",
		"ts": "2026-08-10T15:57:09.239Z",
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
		"liquidityUsd": 1031144.63,
		"hash": "e038f30d677ccafd45047a04836c9cf2f71da72d9c24453c6ab7ee9ea6f3787e"
	},
	{
		"id": "0c70bfcc4530",
		"ts": "2026-08-10T15:57:09.499Z",
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
		"liquidityUsd": 26691405.32,
		"hash": "0c70bfcc45301e68a96d8cbc40aa80ea6c8932f7a969cbc261fcf8193a2def03"
	},
	{
		"id": "c0bdbf51dada",
		"ts": "2026-08-10T15:57:09.748Z",
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
		"liquidityUsd": 4314631.43,
		"hash": "c0bdbf51dada5da28d0fa29eae6aca4bcfdfd0aa931cac6d43af06a34fac14b7"
	},
	{
		"id": "084c2163086a",
		"ts": "2026-08-10T15:57:09.946Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 936140.73,
		"hash": "084c2163086a55924d59f7f15f89455c973a49382099a341b0b6ad7f8a5cb801"
	},
	{
		"id": "88bb81d87c6e",
		"ts": "2026-08-10T15:57:10.225Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26691405.32,
		"hash": "88bb81d87c6eb414a9d877ffefed0be90320cc084ce333cec5e7412088ea7333"
	},
	{
		"id": "c5a9c98f5648",
		"ts": "2026-08-10T15:57:10.451Z",
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
		"liquidityUsd": 4824984.28,
		"hash": "c5a9c98f5648c09014ce23b14e7138d221a093fa70fdadee7673b4ec17d6a43c"
	},
	{
		"id": "6f783fd2e8e2",
		"ts": "2026-08-10T15:57:10.650Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 66180.64,
		"hash": "6f783fd2e8e2d7a54db077cbb4d24639449f4295a2dac3510b807a7044851113"
	},
	{
		"id": "ef2a749588b9",
		"ts": "2026-08-10T15:57:10.861Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2085205.6,
		"hash": "ef2a749588b973cf583f7291e26171e589d86d96adb9aa78e1c360c8ed0869f0"
	},
	{
		"id": "053f7fc26227",
		"ts": "2026-08-10T15:57:11.061Z",
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
		"liquidityUsd": 265098.48,
		"hash": "053f7fc26227cfa3eae1240b24e8d1a340abcba4a67034b37c4e6476d559396b"
	},
	{
		"id": "92a7432e3da2",
		"ts": "2026-08-10T15:57:11.274Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 998217.9,
		"hash": "92a7432e3da28a4694490527a60c2020a0fdf271c49b90499fccd595bea0feb6"
	},
	{
		"id": "084f50160e7b",
		"ts": "2026-08-10T15:57:11.472Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 234134.08,
		"hash": "084f50160e7b578b7f3e46805a123514157f9b58de7c61995fd9c071c1ec797a"
	},
	{
		"id": "10f0f24f473b",
		"ts": "2026-08-10T15:57:11.703Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9417433.64,
		"hash": "10f0f24f473b599767356cae65681a84b754eb419ebb19da057a6be4b7c47997"
	},
	{
		"id": "755e3c7a62bc",
		"ts": "2026-08-10T15:57:11.926Z",
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
		"liquidityUsd": 1306055.97,
		"hash": "755e3c7a62bcce3ba8a96bf1f377a56df5b1c124e1d2f7772940cdc46b3b574b"
	},
	{
		"id": "cc6dbaea3ee7",
		"ts": "2026-08-10T15:57:12.136Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4136657.72,
		"hash": "cc6dbaea3ee70dc987b35d6c14a61fc74999cd920d6731203ebba42a6a919dd6"
	},
	{
		"id": "4dddc2cdee24",
		"ts": "2026-08-10T14:21:44.619Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114599100,
		"hash": "4dddc2cdee24f7bbe625619e1657740ca5456f7f080035fb059fa59a441eaabf"
	},
	{
		"id": "252fd63d6245",
		"ts": "2026-08-10T14:21:44.852Z",
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
		"liquidityUsd": 14368834.9,
		"hash": "252fd63d624500839b19044e63e94826331556973bdc135e62b08bfb53fc727b"
	},
	{
		"id": "19d963c2f05e",
		"ts": "2026-08-10T14:21:45.395Z",
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
		"liquidityUsd": 1047930.17,
		"hash": "19d963c2f05e03d43b7adf12ce536355404f40d68f38c9eb9a058adb14ba081e"
	},
	{
		"id": "6541924b5b41",
		"ts": "2026-08-10T14:21:45.590Z",
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
		"liquidityUsd": 26857668.08,
		"hash": "6541924b5b419787d98c357822eed81c44dd694dc9d6425a05486c0e22585612"
	},
	{
		"id": "2018492e3bd2",
		"ts": "2026-08-10T14:21:46.094Z",
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
		"liquidityUsd": 4360829.77,
		"hash": "2018492e3bd26a6cc5e27aa223c8f4ebae637c4cee3dad0e8f688956a632f9c7"
	},
	{
		"id": "4dbf04246502",
		"ts": "2026-08-10T14:21:46.286Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 936148.76,
		"hash": "4dbf04246502ae3ff4022e6ad95659979d4abf1f1202fb0f12b21f0c39c0ac2d"
	},
	{
		"id": "37960f60864e",
		"ts": "2026-08-10T14:21:46.756Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26857668.08,
		"hash": "37960f60864ee6322eee7647b4f68083a04fc89d6115865e5d4dbfb3408c97ea"
	},
	{
		"id": "9111c45d7074",
		"ts": "2026-08-10T14:21:46.953Z",
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
		"liquidityUsd": 4883502.76,
		"hash": "9111c45d7074c589b024bae9a829140769da465cff501e30a0c456b9a8a2b772"
	},
	{
		"id": "36618495e023",
		"ts": "2026-08-10T14:21:47.326Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 67918.18,
		"hash": "36618495e0232f22da1f7361e5529075d4decae41beb296ab2b62092d4a76fee"
	},
	{
		"id": "edca9fb6dc5a",
		"ts": "2026-08-10T14:21:47.535Z",
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
		"liquidityUsd": 276091.67,
		"hash": "edca9fb6dc5a95cf283d46a7cea64cccd7e8dcc3924adc5ac3ed5092e600c702"
	},
	{
		"id": "ba37e3afcc93",
		"ts": "2026-08-10T14:21:48.150Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2067266.32,
		"hash": "ba37e3afcc93aa2d1df96dd95d683d961b1607a950066e36239b4f2b73b7af6f"
	},
	{
		"id": "e02320804c21",
		"ts": "2026-08-10T14:21:48.338Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 992037.57,
		"hash": "e02320804c21e0bf542481fd4d43afd8c147681b9e3bbef6e10a26663baf04ef"
	},
	{
		"id": "0782b2384d8f",
		"ts": "2026-08-10T14:21:48.604Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 207554.07,
		"hash": "0782b2384d8fb39315a37fd0f0a1d4b91a70a769a766dec67b496e26af4a3510"
	},
	{
		"id": "9f303b964ce8",
		"ts": "2026-08-10T14:21:48.796Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9538918.21,
		"hash": "9f303b964ce86eb8b566ad41e2a6996ede3367b9f581a16e11b0e41746c26496"
	},
	{
		"id": "08247728013e",
		"ts": "2026-08-10T14:21:49.220Z",
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
		"liquidityUsd": 1338348.19,
		"hash": "08247728013e766e99078ee6102ffb932a962c5fcd67f2e8e6bbc013607305c2"
	},
	{
		"id": "8d6165f56313",
		"ts": "2026-08-10T14:21:49.418Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4188200.94,
		"hash": "8d6165f56313f01a1e0f8f7e2118f4849478df68232d7dedadcb70d43754c9c5"
	},
	{
		"id": "01d360e8b2f0",
		"ts": "2026-08-10T12:58:34.723Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114965806.85,
		"hash": "01d360e8b2f05e65269adecaa0f5588c7d3ac5533c11f1e04bddfe5cbf0942a4"
	},
	{
		"id": "0b959ac1a7e3",
		"ts": "2026-08-10T12:58:35.036Z",
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
		"liquidityUsd": 14935586.2,
		"hash": "0b959ac1a7e3fe1fb0d5665be58b9be1d4e4bbb10039aa3d5f05b64c90bca6cf"
	},
	{
		"id": "76793a7646b5",
		"ts": "2026-08-10T12:58:35.241Z",
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
		"liquidityUsd": 1050115.04,
		"hash": "76793a7646b519e25e97f191104324f2e1ea4391305658226b9e7d667fd04033"
	},
	{
		"id": "c58d10a75fa9",
		"ts": "2026-08-10T12:58:35.422Z",
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
		"liquidityUsd": 27034896.03,
		"hash": "c58d10a75fa90cd123649e0316d7b73db161e22414ece022ab9d9f5670a0f78f"
	},
	{
		"id": "8bca719623b5",
		"ts": "2026-08-10T12:58:35.624Z",
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
		"liquidityUsd": 4395536.48,
		"hash": "8bca719623b5f4f5afa461f627736b097aac5c3105c69c9c10cdaadda8379daf"
	},
	{
		"id": "393b92c406fc",
		"ts": "2026-08-10T12:58:35.805Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 940295.54,
		"hash": "393b92c406fc8e81237b3780e94abacea6b31608dcfdd2b0faea52ec5f4c26fd"
	},
	{
		"id": "8b110c4a0df6",
		"ts": "2026-08-10T12:58:35.998Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 27033583.7,
		"hash": "8b110c4a0df64f5092f9b3cce0b5f94fc0eb0a25450606e79b73930932016cbf"
	},
	{
		"id": "1c2a8d5601b0",
		"ts": "2026-08-10T12:58:36.179Z",
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
		"liquidityUsd": 4904390.64,
		"hash": "1c2a8d5601b0eac09de1d754bf8c90f579c0ff7b3708bb1e7ba064dbcaf621db"
	},
	{
		"id": "9b95dc07544c",
		"ts": "2026-08-10T12:58:36.382Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 69400.97,
		"hash": "9b95dc07544cfeeea648950574c965ff34ac6f08329fb0afca37ac7efce7c385"
	},
	{
		"id": "d844ed9a1f37",
		"ts": "2026-08-10T12:58:36.594Z",
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
		"liquidityUsd": 275677.77,
		"hash": "d844ed9a1f37bdee844e7b55ffd63487047b236a4c40e696d95ff82d590e20b9"
	},
	{
		"id": "980843a305d3",
		"ts": "2026-08-10T12:58:36.775Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2089227.12,
		"hash": "980843a305d320714b38ca0e3f61f2ad78537fa433aa720309366120692c8575"
	},
	{
		"id": "ae37fa58f8b8",
		"ts": "2026-08-10T12:58:36.959Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 996859.28,
		"hash": "ae37fa58f8b89ba2974164f70af2935a0f779c8213faf192345d5bb7f979a00b"
	},
	{
		"id": "265b0acb3073",
		"ts": "2026-08-10T12:58:37.157Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 391850.03,
		"hash": "265b0acb307391069ebd6472f7d3e9b42fd26fae139eabe90bcb5903d7aace46"
	},
	{
		"id": "6029e7cd286e",
		"ts": "2026-08-10T12:58:37.345Z",
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
		"liquidityUsd": 1344926.98,
		"hash": "6029e7cd286eb81a60f3936f44b4c6d84c3c4b01d8f1e83c5a45cf7d8f2d8baa"
	},
	{
		"id": "1411ae8841e0",
		"ts": "2026-08-10T12:58:37.540Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4216996.6,
		"hash": "1411ae8841e0811a54ff48e061704f277046c9789e33e87c6e3007ecf9d00fc4"
	},
	{
		"id": "decb804a0196",
		"ts": "2026-08-10T12:58:37.720Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9513552.7,
		"hash": "decb804a0196659c03c2f8b716792230f59f89b831ca178bad8b48e20499ab94"
	},
	{
		"id": "62a1ffd54832",
		"ts": "2026-08-10T12:58:37.938Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 70347.94,
		"hash": "62a1ffd54832365dd5bbe9839bc71a99205aae2aafcef01d20265b3c056b77d8"
	},
	{
		"id": "e69f5127662b",
		"ts": "2026-08-10T11:04:19.391Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115510697.73,
		"hash": "e69f5127662b402751b08a058c7a92709c0e0b538646eedcfd635c7710a8da8c"
	},
	{
		"id": "8578193e2d0c",
		"ts": "2026-08-10T11:04:19.727Z",
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
		"liquidityUsd": 17415682.08,
		"hash": "8578193e2d0c6f33fc136a7470c2f1f8d80396502ce7dab4324999599b6cef9f"
	},
	{
		"id": "0d8066526711",
		"ts": "2026-08-10T11:04:19.917Z",
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
		"liquidityUsd": 1053417.8,
		"hash": "0d806652671160f3efa988bc1004df2cb05a790836e30433d6bb229af65fe51c"
	},
	{
		"id": "3e2cf9db0598",
		"ts": "2026-08-10T11:04:20.106Z",
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
		"liquidityUsd": 26796900.78,
		"hash": "3e2cf9db05989254d0a57b8e6d0c2eb269a7eeac3d9d3b54ea72a5d561a44c47"
	},
	{
		"id": "e4ba32d8fac4",
		"ts": "2026-08-10T11:04:20.296Z",
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
		"liquidityUsd": 4394062.19,
		"hash": "e4ba32d8fac4c850ceba596c6ff79c15958076bc42d29941765066dc7fc3d1f3"
	},
	{
		"id": "93c619fca0a8",
		"ts": "2026-08-10T11:04:20.486Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 942044.93,
		"hash": "93c619fca0a85d09319a22175a10362c48b6e0bf7d943712a2d8d91efc78ed7d"
	},
	{
		"id": "c45cb46befc4",
		"ts": "2026-08-10T11:04:20.686Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26796900.78,
		"hash": "c45cb46befc4103c3e2a158956d8b65bab4bbd6ed5e540629b7852d56c008d2d"
	},
	{
		"id": "b0bde82a004f",
		"ts": "2026-08-10T11:04:20.894Z",
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
		"liquidityUsd": 4928466.52,
		"hash": "b0bde82a004f1f4739ebd1c33db6231c02ad691ee512ac8c7c694bf027d1cb3f"
	},
	{
		"id": "7e5c4a6eee13",
		"ts": "2026-08-10T11:04:21.083Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 70260.41,
		"hash": "7e5c4a6eee13808e801c5d4f09b69b55b30654ae52ab2bf4892f1b644d19ba12"
	},
	{
		"id": "909325820ed3",
		"ts": "2026-08-10T11:04:21.273Z",
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
		"liquidityUsd": 281306.25,
		"hash": "909325820ed3e4f2e12341d13adb1a3c5976ebab25b8c93dcbdb200ce6f6ba70"
	},
	{
		"id": "d6c8d67fa2b7",
		"ts": "2026-08-10T11:04:21.463Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2121714.02,
		"hash": "d6c8d67fa2b769a8bbda915a06198e483944796688397abd767b82edddb71b27"
	},
	{
		"id": "59d58d4a533e",
		"ts": "2026-08-10T11:04:21.655Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1002033.75,
		"hash": "59d58d4a533eea3876771003e5aa69dbfdc9fdc4a02452cc484c029b445887f4"
	},
	{
		"id": "409a8a6ecfe9",
		"ts": "2026-08-10T11:04:21.842Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 379591.03,
		"hash": "409a8a6ecfe96636c0e122ec95f91109969a022de1d4590c3180f2abc1ca6746"
	},
	{
		"id": "c7c0db8bce5b",
		"ts": "2026-08-10T11:04:22.041Z",
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
		"liquidityUsd": 1350394.12,
		"hash": "c7c0db8bce5b97f8c50bb6dd81f6ac86ec88d0a949be60e79ff2f9c7a2725da7"
	},
	{
		"id": "8c119b827107",
		"ts": "2026-08-10T11:04:22.231Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9606685.61,
		"hash": "8c119b8271079f3be03443bcc1a5b9b3dcf0279fcc69c09391fed2444dfd8215"
	},
	{
		"id": "8545cfcfa546",
		"ts": "2026-08-10T11:04:22.421Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4216012.77,
		"hash": "8545cfcfa5465d28e95824d0e1ad18f002400a01387aa41c25fd7c68f5f9b5ae"
	},
	{
		"id": "6d3c5b551421",
		"ts": "2026-08-10T11:04:22.610Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71286.28,
		"hash": "6d3c5b551421d4a29824b8c50d8802046098bddd31873497487c3a6f613273b7"
	},
	{
		"id": "110ed325ad82",
		"ts": "2026-08-10T09:15:19.272Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115566839.51,
		"hash": "110ed325ad827058f676d10198099d9c02a7a3e374b3a1736de3b610bf1727c7"
	},
	{
		"id": "ebcb32e50c6c",
		"ts": "2026-08-10T09:15:19.721Z",
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
		"liquidityUsd": 17211272.81,
		"hash": "ebcb32e50c6cb1fe4f1c93b25a5d10c01cc5918fbc908865e57f2f5758306943"
	},
	{
		"id": "a82db116dceb",
		"ts": "2026-08-10T09:15:19.978Z",
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
		"liquidityUsd": 1058052.87,
		"hash": "a82db116dceb0f6df87671e90a8bfac47a1e9a9687143c3ca9130e46d36c33e0"
	},
	{
		"id": "e6572ffe43f6",
		"ts": "2026-08-10T09:15:20.219Z",
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
		"liquidityUsd": 26847984.43,
		"hash": "e6572ffe43f643e02ce0cd8e58e30830092aaf2ddfc7e8f88634ef867d75029a"
	},
	{
		"id": "846c00308e3e",
		"ts": "2026-08-10T09:15:20.461Z",
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
		"liquidityUsd": 4411355.95,
		"hash": "846c00308e3e769dba7997d7497bfbe848c92772e51ad6804c4595b9995d0909"
	},
	{
		"id": "108f90b9f338",
		"ts": "2026-08-10T09:15:20.699Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 944945.23,
		"hash": "108f90b9f3386092be15b234348fefd243dd470efe198d34fae4eef6447080d2"
	},
	{
		"id": "cb70507b59b2",
		"ts": "2026-08-10T09:15:20.942Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26847984.43,
		"hash": "cb70507b59b2d44312ec53ef295179569350bf00ce08f1f5586c4e2aa7d3bfa5"
	},
	{
		"id": "f0bf2b22f119",
		"ts": "2026-08-10T09:15:21.185Z",
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
		"liquidityUsd": 4949186.6,
		"hash": "f0bf2b22f119819c06d99e5fcc6ed407d6e1f1ea927d32dd5f9126f321046bc6"
	},
	{
		"id": "493b70404efc",
		"ts": "2026-08-10T09:15:21.437Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 69560.36,
		"hash": "493b70404efc90f25764a28b74bf3d7ca6043a3050d08b6993478b3bda89795c"
	},
	{
		"id": "b89b60088107",
		"ts": "2026-08-10T09:15:21.686Z",
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
		"liquidityUsd": 291124.6,
		"hash": "b89b60088107495ea564feda838042ffcb8a6f146f402fc89f6f24260cf03ace"
	},
	{
		"id": "d3ff1e04c6fe",
		"ts": "2026-08-10T09:15:21.910Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1008597.81,
		"hash": "d3ff1e04c6fef1b437219a1ed1bdf6b7d942968c4f95ca2311ff3d9f648f1df2"
	},
	{
		"id": "5fe875d6713a",
		"ts": "2026-08-10T09:15:22.135Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2064905.33,
		"hash": "5fe875d6713a6aa4f4b0b7cecfb94484859df9c9321bb7a1b828e31bcf10fc9c"
	},
	{
		"id": "a8b4470c8274",
		"ts": "2026-08-10T09:15:22.361Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 379223.91,
		"hash": "a8b4470c8274593af1ef7fccd15d2dfd3fc88cf699a0ea74d293efe0e24ac8f0"
	},
	{
		"id": "2e1753c68325",
		"ts": "2026-08-10T09:15:22.583Z",
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
		"liquidityUsd": 1367399.49,
		"hash": "2e1753c683258a68e7ec6e7f790aa4e63db3edb58e9e812fd221382d18f2a9a2"
	},
	{
		"id": "e8e8e5a0a056",
		"ts": "2026-08-10T09:15:22.805Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4234652.44,
		"hash": "e8e8e5a0a056eabab7759d6165f7d98b3e8a41986cd72c6a0c9cf95ff90f515c"
	},
	{
		"id": "1c54ec551f40",
		"ts": "2026-08-10T09:15:23.028Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 70933.1,
		"hash": "1c54ec551f409de483c152b58a6d70d4a50e35922057bf30c0f9a5263bb90930"
	},
	{
		"id": "a9e27601f817",
		"ts": "2026-08-10T09:15:23.249Z",
		"symbol": "PROMPT",
		"token": "0x30c7235866872213F68cb1F08c37Cb9eCCB93452",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 101373.33,
		"hash": "a9e27601f817c4740a7e2ae3328c72339b9a38bb626baaf49127a83e7099c52e"
	},
	{
		"id": "f465b559dd3e",
		"ts": "2026-08-10T07:24:08.740Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115449919.12,
		"hash": "f465b559dd3eb7d842566f517b628c9d41e45d0e783d78a465326d659b1869df"
	},
	{
		"id": "b2c60d694df0",
		"ts": "2026-08-10T07:24:08.938Z",
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
		"liquidityUsd": 16769555.79,
		"hash": "b2c60d694df0c0f4c5e69fbeadc49e3d8a4689df07cc79e921674d6e469b0d8e"
	},
	{
		"id": "fd636d9df17a",
		"ts": "2026-08-10T07:24:09.144Z",
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
		"liquidityUsd": 1063533.02,
		"hash": "fd636d9df17a8a62a6ef5c1ed97152459dd91107d2a677db86f3fd077ba3768e"
	},
	{
		"id": "9d1be334cd3c",
		"ts": "2026-08-10T07:24:09.359Z",
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
		"liquidityUsd": 26824700.98,
		"hash": "9d1be334cd3cdbcce2971675c9d9d019f22ee20b626473e752579a982d764e7c"
	},
	{
		"id": "6f5e8db78356",
		"ts": "2026-08-10T07:24:09.548Z",
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
		"liquidityUsd": 4410276.07,
		"hash": "6f5e8db783565d0faab7cb97186f91a345cf3084ada392b1d0fb873e5ae867ce"
	},
	{
		"id": "08948363abec",
		"ts": "2026-08-10T07:24:09.740Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 944945.23,
		"hash": "08948363abec261de563f3b2f8b9d4686c354846e2f3f3c2abdd6c8d1b4fee90"
	},
	{
		"id": "65da75e2928c",
		"ts": "2026-08-10T07:24:09.936Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26824700.98,
		"hash": "65da75e2928c7173a7784e38d5f0b8c48204072fcf25fc464f37413c34b8ce73"
	},
	{
		"id": "1d39f16e8ebe",
		"ts": "2026-08-10T07:24:10.148Z",
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
		"liquidityUsd": 4952602.67,
		"hash": "1d39f16e8ebe82ef419edcd00b90b3148639c3469e056fc7a61632d4e16bf56f"
	},
	{
		"id": "5bb80f1b68ea",
		"ts": "2026-08-10T07:24:10.334Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 70015.69,
		"hash": "5bb80f1b68eaa92afcb29757863307ad6f051d800478a2e14326b873d47f749b"
	},
	{
		"id": "10f23e542ba6",
		"ts": "2026-08-10T07:24:10.532Z",
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
		"liquidityUsd": 291379.01,
		"hash": "10f23e542ba63ce7c202010e78be0add0763bb9de8f7c5d701abba260a146939"
	},
	{
		"id": "a2491a6004dc",
		"ts": "2026-08-10T07:24:10.712Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1002848.95,
		"hash": "a2491a6004dc73a4d5048ecaed09ba40e211d8853e40ff1b6169fb2f86f39337"
	},
	{
		"id": "cb30ecad526c",
		"ts": "2026-08-10T07:24:10.896Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2102304.23,
		"hash": "cb30ecad526c81a2a9029311fcd1ad9522041c98fcb98186727e7c7784b8b88d"
	},
	{
		"id": "e26d03ae2591",
		"ts": "2026-08-10T07:24:11.096Z",
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
		"liquidityUsd": 1363785.42,
		"hash": "e26d03ae25919afce6c7bf3111f74f12721ccea9871f1b099e3e01e23d9775c0"
	},
	{
		"id": "58eb9e1f83d5",
		"ts": "2026-08-10T07:24:11.309Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 376336.98,
		"hash": "58eb9e1f83d50216f9cc291a131fbb75b286719adbbac0635a0c30031429e8ad"
	},
	{
		"id": "0779c8664446",
		"ts": "2026-08-10T07:24:11.514Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9611008.11,
		"hash": "0779c8664446efc813cf91af67ebd4464bfe3db8041531b0a3387b6ae552a578"
	},
	{
		"id": "f9687c64391a",
		"ts": "2026-08-10T07:24:11.786Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4231678.72,
		"hash": "f9687c64391a0b0e997f7f499ad433c5262d36cfa4ea2eb1e9338ae7060d5f23"
	},
	{
		"id": "6f09697785ea",
		"ts": "2026-08-10T07:24:12.004Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71063.25,
		"hash": "6f09697785ea2b045525a1b111b1ec0c34c8f8d9dd3111f337c9e795aabb02e5"
	},
	{
		"id": "e15e08a2b11d",
		"ts": "2026-08-10T05:22:25.625Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115163066.91,
		"hash": "e15e08a2b11dc21376f79010a13c4a4fe4366078656604537371842bae9d31f7"
	},
	{
		"id": "cf6cbb080195",
		"ts": "2026-08-10T05:22:25.866Z",
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
		"liquidityUsd": 16615739.54,
		"hash": "cf6cbb080195398461687cdf254e843cc027e0449687f2f13741593ee00a66de"
	},
	{
		"id": "7380f1db3b13",
		"ts": "2026-08-10T05:22:26.113Z",
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
		"liquidityUsd": 1056181.88,
		"hash": "7380f1db3b13453d602fe19f07d1c5ae4685649028071bc07755525577af33b8"
	},
	{
		"id": "1dd8d8dd1316",
		"ts": "2026-08-10T05:22:26.343Z",
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
		"liquidityUsd": 26838075.08,
		"hash": "1dd8d8dd131614259a7b9f364a11087553dfd734b3e36747cf0abd0f758d391a"
	},
	{
		"id": "ae457afb70e4",
		"ts": "2026-08-10T05:22:26.579Z",
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
		"liquidityUsd": 4384895.1,
		"hash": "ae457afb70e496d781f0c0f401fd16828de3ef2982db8cda601be562e67c17a6"
	},
	{
		"id": "c2252a24366a",
		"ts": "2026-08-10T05:22:26.823Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 940103.29,
		"hash": "c2252a24366a14b73f98d4f3bdce27de98703928efb699ee78249af39953a083"
	},
	{
		"id": "722c501e0ae2",
		"ts": "2026-08-10T05:22:27.051Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26838159.73,
		"hash": "722c501e0ae2eea247cf11cc8ae875e9302dd22a7dc5a840a388a000d57c65ee"
	},
	{
		"id": "d5c82923ab44",
		"ts": "2026-08-10T05:22:27.289Z",
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
		"liquidityUsd": 4818470.91,
		"hash": "d5c82923ab44da4fb0de563048c37a3dd0d220d7f23a8e89bff707f1dbd4aeab"
	},
	{
		"id": "6dae4c7fd0a3",
		"ts": "2026-08-10T05:22:27.534Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 69599.48,
		"hash": "6dae4c7fd0a38a3585a353ffa7a5fbaeef499ad18716f792cbd2536e0d02438c"
	},
	{
		"id": "1141e107305c",
		"ts": "2026-08-10T05:22:27.769Z",
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
		"liquidityUsd": 291069.17,
		"hash": "1141e107305c6a770435d245be37022242a2d8cd73e5b2ff2be32d9de5f47167"
	},
	{
		"id": "27d04c4e1082",
		"ts": "2026-08-10T05:22:27.994Z",
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
		"liquidityUsd": 1368258.88,
		"hash": "27d04c4e1082a0da20d8592dac80b23e1fe84ee1e8dd5196276edf88b84c1b45"
	},
	{
		"id": "a8fa30ad31a5",
		"ts": "2026-08-10T05:22:28.221Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 998694.59,
		"hash": "a8fa30ad31a529642b64e3cd7a8a16ab2fa6dd816bed30a2665c801716af86f3"
	},
	{
		"id": "a1aa5f644907",
		"ts": "2026-08-10T05:22:28.436Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2105596,
		"hash": "a1aa5f644907235088afd9741cf7a54587f33a1b271c7a9986532d0fe5acde1d"
	},
	{
		"id": "9ef0e9325a7a",
		"ts": "2026-08-10T05:22:28.658Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 374174.39,
		"hash": "9ef0e9325a7ab5c2ef3034d9f8542e95602e89e381f0af1707cc5148955f2a91"
	},
	{
		"id": "df8e90d96432",
		"ts": "2026-08-10T05:22:28.884Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9494528.71,
		"hash": "df8e90d96432d4643223a9cf5b17ba031740f62fb8aa5f88b8e2c7318f15b685"
	},
	{
		"id": "14f95948c399",
		"ts": "2026-08-10T05:22:29.097Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4202867.24,
		"hash": "14f95948c399cc75649b32a42a0b6c38c1549311890d40fdae6223de3494a892"
	},
	{
		"id": "419a2ebd369f",
		"ts": "2026-08-10T05:22:29.318Z",
		"symbol": "OWB",
		"token": "0xEF5997c2cf2f6c138196f8A6203afc335206b3c1",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 71261.87,
		"hash": "419a2ebd369fc39ebafdcfff0d4df27988ceefebb7b6936cfc53f61bc160af53"
	},
	{
		"id": "33d6928536c0",
		"ts": "2026-08-10T03:50:23.369Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115068824.68,
		"hash": "33d6928536c012159b9b3d2f5af76efe37048bf85e9d3b937b07bd28267b392a"
	},
	{
		"id": "d6f11d5ab397",
		"ts": "2026-08-10T03:50:23.662Z",
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
		"liquidityUsd": 16513128.4,
		"hash": "d6f11d5ab39752c97d4a91b92ed2f81fd24d8abf582f54efe66b85f9c0a98d41"
	},
	{
		"id": "7a14e992b2b5",
		"ts": "2026-08-10T03:50:23.958Z",
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
		"liquidityUsd": 1056181.88,
		"hash": "7a14e992b2b5a0011317220064f999c2c9309be589240ebf717aaa1f1f224eb2"
	},
	{
		"id": "d2288c907bf3",
		"ts": "2026-08-10T03:50:24.209Z",
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
		"liquidityUsd": 26888499.76,
		"hash": "d2288c907bf35e9f7ef9e95dc29524df8eebc6e61f054280dd0214f02f1815b5"
	},
	{
		"id": "a72769eae1e3",
		"ts": "2026-08-10T03:50:24.463Z",
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
		"liquidityUsd": 4400127.54,
		"hash": "a72769eae1e3f3cd1dac8e0a8a398dcca7124d618d0a500a533e575857139f8c"
	},
	{
		"id": "52d77d56e0a9",
		"ts": "2026-08-10T03:50:24.709Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 940274.8,
		"hash": "52d77d56e0a9668fd0981c88d0462b9dca246a5c12f27c9537f10664e22c7972"
	},
	{
		"id": "7cde2eae73d0",
		"ts": "2026-08-10T03:50:24.958Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26888499.76,
		"hash": "7cde2eae73d00ad5b264fdd2416f3405c201a726c8a465c4755c2a183ab820a9"
	},
	{
		"id": "3734f791209d",
		"ts": "2026-08-10T03:50:25.198Z",
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
		"liquidityUsd": 4826060.18,
		"hash": "3734f791209d86ec17e0994850f0e1f40451f092bdb36ada8de621a9e8e8a04b"
	},
	{
		"id": "5c1d22f21431",
		"ts": "2026-08-10T03:50:25.444Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 72663.16,
		"hash": "5c1d22f214314ac76ad5df574dbc48a617e45be87c84159e1f4e721092762316"
	},
	{
		"id": "b15c60e122e4",
		"ts": "2026-08-10T03:50:25.703Z",
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
		"liquidityUsd": 290420.27,
		"hash": "b15c60e122e42bd3122333d64ab66a7bb3870aaba291b7e75682516bcd436a83"
	},
	{
		"id": "58a3ab8def7b",
		"ts": "2026-08-10T03:50:25.926Z",
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
		"liquidityUsd": 1336847.45,
		"hash": "58a3ab8def7b22442a11d2cc1792c86d68626eff2c860d148745b876f7cb50ac"
	},
	{
		"id": "50955e8a031e",
		"ts": "2026-08-10T03:50:26.156Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 990272.98,
		"hash": "50955e8a031e520eb989520a84f9b3c3de2b9c2457090b9e75c90f7e0ee66bfe"
	},
	{
		"id": "1bfedcfed1d1",
		"ts": "2026-08-10T03:50:26.396Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9472723.9,
		"hash": "1bfedcfed1d18082a66de0694d20802967da0badd3ab189bf7504741c3eec065"
	},
	{
		"id": "7a1939ddbecc",
		"ts": "2026-08-10T03:50:26.620Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 376472.09,
		"hash": "7a1939ddbecc1f1c96034089155eeb7a8b42da6e191ff1ff0037cfa46aebac46"
	},
	{
		"id": "de54e2a6c86a",
		"ts": "2026-08-10T03:50:26.859Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2087586.33,
		"hash": "de54e2a6c86a16f7f73638c187bc36cd302491e5154f7a825596e9f5f70a8cad"
	},
	{
		"id": "0a5d0cb837e3",
		"ts": "2026-08-10T03:50:27.081Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4210373.5,
		"hash": "0a5d0cb837e3bb1a518aca47a5a5ec57600dc2093454781109591903781bc11f"
	},
	{
		"id": "37a62815c17b",
		"ts": "2026-08-10T03:50:27.321Z",
		"symbol": "MORPHO",
		"token": "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 942739.62,
		"hash": "37a62815c17ba8dd52facfb6befa031bd95208d41db1168e8fde06247e87f18e"
	},
	{
		"id": "b4ca9b92b0c4",
		"ts": "2026-08-10T01:23:38.630Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114812671.92,
		"hash": "b4ca9b92b0c4d4ccefb4cd3b7312cb2323ff593349404009235288665ae951e3"
	},
	{
		"id": "47bd32e0fc96",
		"ts": "2026-08-10T01:23:38.875Z",
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
		"liquidityUsd": 16744740.58,
		"hash": "47bd32e0fc968d2c711a9a3e847955bbb6dbb112d330be65d5770cd8d6055127"
	},
	{
		"id": "0ac9ca8011cd",
		"ts": "2026-08-10T01:23:39.136Z",
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
		"liquidityUsd": 1048149.74,
		"hash": "0ac9ca8011cd97b68439b56dc5b38fd928b6c1551fc92d70872598a461324512"
	},
	{
		"id": "cc08a0f50624",
		"ts": "2026-08-10T01:23:39.372Z",
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
		"liquidityUsd": 26803197.8,
		"hash": "cc08a0f50624a99636317004b32b9dfb3651de0cc6ae9dea9b42b5dd2f5ffa83"
	},
	{
		"id": "882d080d0599",
		"ts": "2026-08-10T01:23:39.639Z",
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
		"liquidityUsd": 4385789.66,
		"hash": "882d080d0599369245dee2a942af4747aa331f16af84410290c66ce2cf6aa2a7"
	},
	{
		"id": "ac0f7cdab852",
		"ts": "2026-08-10T01:23:39.876Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 938389.41,
		"hash": "ac0f7cdab852b7ac5ed57dd8dd130e80682b9d4d17144ea2f7cf33ef93fb347d"
	},
	{
		"id": "d85fd4fb0731",
		"ts": "2026-08-10T01:23:40.153Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26803197.8,
		"hash": "d85fd4fb07317d0d6cf16f7e575b03e524e6cad698508e38e0adfa1da14226bc"
	},
	{
		"id": "b7a655e01e04",
		"ts": "2026-08-10T01:23:40.393Z",
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
		"liquidityUsd": 4815595.71,
		"hash": "b7a655e01e04c3d6cacc6744f302fa9399398825926b386888e276c444975577"
	},
	{
		"id": "7f37750d80ad",
		"ts": "2026-08-10T01:23:40.659Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 73376.22,
		"hash": "7f37750d80ad936c4a99527fdb0057eac259c57de825c69a45382983b900ebff"
	},
	{
		"id": "211145eaedd2",
		"ts": "2026-08-10T01:23:40.946Z",
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
		"liquidityUsd": 293993.99,
		"hash": "211145eaedd2c05209a760e8046dbf1f02be8e7c48ee9de954666c63f5d1d6f0"
	},
	{
		"id": "6e4b6353aed3",
		"ts": "2026-08-10T01:23:41.190Z",
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
		"liquidityUsd": 1349857.88,
		"hash": "6e4b6353aed3c0885cb2af740f116c3d8ff58fa00910757a91e95e54b0e3866b"
	},
	{
		"id": "7084b3f0dc8c",
		"ts": "2026-08-10T01:23:41.459Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 998871.06,
		"hash": "7084b3f0dc8cbf0b3a90ae99d6223e1c1bd08a3403661d6876672cc03427f7cc"
	},
	{
		"id": "0cb21456430c",
		"ts": "2026-08-10T01:23:41.704Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9435728.23,
		"hash": "0cb21456430cbf5b37e77637b92cb665743f38f84bdb39d268c0e2a4c3d5fe5a"
	},
	{
		"id": "4a164ab6ab4a",
		"ts": "2026-08-10T01:23:41.933Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 378409.98,
		"hash": "4a164ab6ab4a399d7b1bd8bbb1b25f22915cbcdf574c777d4b5039140a5910e8"
	},
	{
		"id": "770e9f62acee",
		"ts": "2026-08-10T01:23:42.178Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2064264.3,
		"hash": "770e9f62acee5fc56068efbeb09a09112c2f6f11ba965665f9b1620be08aff60"
	},
	{
		"id": "f23483938486",
		"ts": "2026-08-10T01:23:42.401Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1734895.25,
		"hash": "f23483938486fcca656de44934e17d236b123810853940c8c21876f6f6de41da"
	},
	{
		"id": "8a8f61b868d6",
		"ts": "2026-08-10T01:23:42.644Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4192414.22,
		"hash": "8a8f61b868d666096f81e866c3e800a7dfd079b09b7c692b23da78f8f08432c7"
	},
	{
		"id": "6b28cf25a969",
		"ts": "2026-08-09T23:26:54.564Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114996350.02,
		"hash": "6b28cf25a969234af32df812682e04308ccd2325888b3ac308b98b60c512771a"
	},
	{
		"id": "6383744c04b7",
		"ts": "2026-08-09T23:26:54.863Z",
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
		"liquidityUsd": 17135900.04,
		"hash": "6383744c04b747e28823a0ea5aa1ea58348f9719be1be617089b2b966fcb8ebf"
	},
	{
		"id": "6ab80bc888a1",
		"ts": "2026-08-09T23:26:55.157Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "6ab80bc888a175c4c96af4f2ca9c19ee91d806cfe860a63212a2f325964024db"
	},
	{
		"id": "eeb16b4b4841",
		"ts": "2026-08-09T23:26:55.406Z",
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
		"liquidityUsd": 26807283.29,
		"hash": "eeb16b4b48418d0d1a232cb41d4bf99fed92932bb189031203ac899e390b6516"
	},
	{
		"id": "395a5196bbdb",
		"ts": "2026-08-09T23:26:55.652Z",
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
		"liquidityUsd": 4397335.47,
		"hash": "395a5196bbdb70686893c60cb6a1b7eb722269a5f0f39a43c7d63850fc87f5a6"
	},
	{
		"id": "f74c945bf7cd",
		"ts": "2026-08-09T23:26:55.901Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 947871.95,
		"hash": "f74c945bf7cd0726302c92d6f45c97559db48b999b2882949f6663a05acdb3b8"
	},
	{
		"id": "5c4d413b10bf",
		"ts": "2026-08-09T23:26:56.149Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26807283.29,
		"hash": "5c4d413b10bfed27b243888d072de61b1d2106ca6147c780578de246d7fd08ff"
	},
	{
		"id": "4a96e0f3e0aa",
		"ts": "2026-08-09T23:26:56.393Z",
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
		"liquidityUsd": 4819434.26,
		"hash": "4a96e0f3e0aaf37535cf24cfdc3e8aae6e60e10a1858baf354fa0101ccd9017f"
	},
	{
		"id": "8a6edbd82fee",
		"ts": "2026-08-09T23:26:56.645Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 76190.12,
		"hash": "8a6edbd82fee9f955bc523314a88c6f5b9e544b2c9a3ce0c9754ffbe31943570"
	},
	{
		"id": "b70ca353f395",
		"ts": "2026-08-09T23:26:56.895Z",
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
		"liquidityUsd": 294654.59,
		"hash": "b70ca353f3950833ef08f3c04489fabb0003546f3b9e2a010cac458351495522"
	},
	{
		"id": "29dad6bd90f5",
		"ts": "2026-08-09T23:26:57.124Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4210148.2,
		"hash": "29dad6bd90f54d7851f4644593605f3ebf2204cc4d4a1fb9611c622a183aba08"
	},
	{
		"id": "bf4a989659f6",
		"ts": "2026-08-09T23:26:57.356Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 974151.71,
		"hash": "bf4a989659f65fdb93e561da80343c89c00c8b529500cb3aedd36ba9d21a4ad8"
	},
	{
		"id": "0ec34f7791bf",
		"ts": "2026-08-09T23:26:57.588Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9432074.27,
		"hash": "0ec34f7791bfe80af30af5418893e4d57e654a7deff865a9e900b0e51ac4ed13"
	},
	{
		"id": "fd221d025f77",
		"ts": "2026-08-09T23:26:57.816Z",
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
		"liquidityUsd": 1332086.01,
		"hash": "fd221d025f770c80cd7af779c38c73a9fc49b88c6d4d2050ff6e5f0877b9d29b"
	},
	{
		"id": "48e25a883dfa",
		"ts": "2026-08-09T23:26:58.048Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 80389.03,
		"hash": "48e25a883dfa684726734d4624802e1fb048e22178eb0477a78f4707c02e354a"
	},
	{
		"id": "4236372f6546",
		"ts": "2026-08-09T23:26:58.281Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 442293.07,
		"hash": "4236372f654654fbd201d1e1dafb2d5aac03c76ffcfa648bf5eb2433f0037bfe"
	},
	{
		"id": "6412ab6a90c3",
		"ts": "2026-08-09T23:26:58.509Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1741686.56,
		"hash": "6412ab6a90c30ada563b17b8574fb65339c776311e8bbeb6772a56a4734d8116"
	},
	{
		"id": "cc1e280f3e8c",
		"ts": "2026-08-09T22:25:57.828Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115319050.24,
		"hash": "cc1e280f3e8c74916392e7453555c4e21a40fa404e9faed21277af2872d99fb2"
	},
	{
		"id": "16ab8fd3f285",
		"ts": "2026-08-09T22:25:58.139Z",
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
		"liquidityUsd": 18098632.9,
		"hash": "16ab8fd3f285f5b1395a285ce14d9fe1a7920f24cc3acdc6145a461c477c025b"
	},
	{
		"id": "27b12ea5bcfe",
		"ts": "2026-08-09T22:25:58.380Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "27b12ea5bcfef014c167c8c36a84e48bdfef00206362a77e9b848a92b00fda7d"
	},
	{
		"id": "305d3eb4453c",
		"ts": "2026-08-09T22:25:58.633Z",
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
		"liquidityUsd": 26959679.07,
		"hash": "305d3eb4453cdb2a309babc3addc4b0c0370b672327fb8965f852fd55b5c4f59"
	},
	{
		"id": "2dde02be29c6",
		"ts": "2026-08-09T22:25:58.870Z",
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
		"liquidityUsd": 4400651.35,
		"hash": "2dde02be29c6e88599452ed0505c24fdba778ce3ee4827a0329a0c3f1f68d291"
	},
	{
		"id": "1578090dcaa8",
		"ts": "2026-08-09T22:25:59.122Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 949996.51,
		"hash": "1578090dcaa8df58320f59fe9ed7d7b84a396abf0defa6c3fa6c7f4ec155ac53"
	},
	{
		"id": "63bff5ecf4ab",
		"ts": "2026-08-09T22:25:59.373Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26959679.07,
		"hash": "63bff5ecf4ab887c6add1069d80f46a2a135a017a2e97da9219a6cdf206c9598"
	},
	{
		"id": "805dd5198b85",
		"ts": "2026-08-09T22:25:59.608Z",
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
		"liquidityUsd": 4849106.09,
		"hash": "805dd5198b85d60e8c11cbd8618c387322feed0df85cac5b64e8c480be4a9869"
	},
	{
		"id": "3022e898783e",
		"ts": "2026-08-09T22:25:59.861Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 77764.79,
		"hash": "3022e898783e90305e0ef52f31c54bcd3fafe4df2312313473e620fe5845b415"
	},
	{
		"id": "579a64d4a38d",
		"ts": "2026-08-09T22:26:00.296Z",
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
		"liquidityUsd": 292875.17,
		"hash": "579a64d4a38d7317a99c7a84c77f9731399f79d5490d2e42a750685dfd7cc8c7"
	},
	{
		"id": "d0cf823712ac",
		"ts": "2026-08-09T22:26:00.546Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4245722.52,
		"hash": "d0cf823712ac10c02ca15d75dc18f4e316ea52c2d71c63798471401707355210"
	},
	{
		"id": "fcde13252a59",
		"ts": "2026-08-09T22:26:00.780Z",
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
		"liquidityUsd": 9551794.58,
		"hash": "fcde13252a59a1d17c8fdd5aeeed35d482b684cdc14f6fa2a4842fb0c0f1729c"
	},
	{
		"id": "b6eadfe00db3",
		"ts": "2026-08-09T22:26:01.126Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"extreme_holder_concentration"
		],
		"liquidityUsd": 975917.2,
		"hash": "b6eadfe00db3c1cff9f318d1023eb1b9d8a84506766d29b7dd24caa4162f4449"
	},
	{
		"id": "2fb54b874cfa",
		"ts": "2026-08-09T22:26:01.766Z",
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
		"liquidityUsd": 1399252.12,
		"hash": "2fb54b874cfa3607dff96adda9010583a01eaaa872f9090210fb6c1fc8d5f34f"
	},
	{
		"id": "4e9fc8281c3f",
		"ts": "2026-08-09T22:26:02.021Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 93507.39,
		"hash": "4e9fc8281c3f0e6e19cc216dba9633a1c599824bc18e621222c733bb3672a96d"
	},
	{
		"id": "b4196e6f04c3",
		"ts": "2026-08-09T22:26:02.275Z",
		"symbol": "WOLF",
		"token": "0x73AC2806C40AB4741ea7a35B7328ACA957755ba3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 439360.59,
		"hash": "b4196e6f04c37b0754e2d87bb0cb55bb5f574b9b7415a081cd4aa6ad3716d090"
	},
	{
		"id": "3a6e653ead16",
		"ts": "2026-08-09T22:26:02.509Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1747954.81,
		"hash": "3a6e653ead1694432c95862b501237ed05bdeb3c73a25cbbb41802e06edc9531"
	},
	{
		"id": "14ea7d49fdf7",
		"ts": "2026-08-09T21:27:38.432Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115041043.33,
		"hash": "14ea7d49fdf78f871f06c7b8a4815461b26db5c4383270143a8d11cfc7d0aa2b"
	},
	{
		"id": "bf6251d98379",
		"ts": "2026-08-09T21:27:38.866Z",
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
		"liquidityUsd": 18154259.61,
		"hash": "bf6251d98379168e2da79409cb8cbbd64cc6c3f746be768f5ab9bc47f2cea695"
	},
	{
		"id": "ae6ced83bb09",
		"ts": "2026-08-09T21:27:39.118Z",
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
		"liquidityUsd": 1045026.27,
		"hash": "ae6ced83bb09c744d0d623d488c7bb48cb2cebed22f9fc1908985f4e5bf14d6d"
	},
	{
		"id": "26dbe7e6f174",
		"ts": "2026-08-09T21:27:39.356Z",
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
		"liquidityUsd": 26862601.69,
		"hash": "26dbe7e6f174e882349a72e1ffa36d10986fd783fc16eae352f2defd383f51a3"
	},
	{
		"id": "60c1c224b1a7",
		"ts": "2026-08-09T21:27:39.609Z",
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
		"liquidityUsd": 4400635.52,
		"hash": "60c1c224b1a74b09a01b4b9704ccd21e7b9fc411456dbcd6f517dea4ec4c91f7"
	},
	{
		"id": "116d4f0647c6",
		"ts": "2026-08-09T21:27:39.849Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 950012.5,
		"hash": "116d4f0647c69df93600de1601d2624d1441d86fe47b2ef808aff554be458b81"
	},
	{
		"id": "87065473ca91",
		"ts": "2026-08-09T21:27:40.097Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 26862601.69,
		"hash": "87065473ca918d0a487d6e9da41143f06550449e89d3477fb3c16fcd3df05418"
	},
	{
		"id": "8e2c13991a49",
		"ts": "2026-08-09T21:27:40.352Z",
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
		"liquidityUsd": 4830253.78,
		"hash": "8e2c13991a49eda7cab704d5167ee46a3724078105cd1ac2ac4578ce1efaf0a5"
	},
	{
		"id": "cbe0bccb82f6",
		"ts": "2026-08-09T21:27:40.599Z",
		"symbol": "COOKIE",
		"token": "0xC0041EF357B183448B235a8Ea73Ce4E4eC8c265F",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 77196.3,
		"hash": "cbe0bccb82f6e7db2f2c362ca5ea438d3f44d8fc5bbc5db9a457f476fdbce92c"
	},
	{
		"id": "b7c11a4d80af",
		"ts": "2026-08-09T21:27:40.860Z",
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
		"liquidityUsd": 291183.5,
		"hash": "b7c11a4d80affe1cb866a78bd4fac6db3dbc034e3f9b647d30de520c29cac56c"
	},
	{
		"id": "96ca568fefb8",
		"ts": "2026-08-09T21:27:41.080Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4220442.74,
		"hash": "96ca568fefb83203bec008892792949fd236de6f405020f2887247a58b6f460d"
	},
	{
		"id": "10d4fdef4c00",
		"ts": "2026-08-09T21:27:41.314Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 9493358,
		"hash": "10d4fdef4c00e69b4acbf5171646422b786fad4d8d691bb932ed7777841f3f5d"
	},
	{
		"id": "5cf22e236ceb",
		"ts": "2026-08-09T21:27:41.538Z",
		"symbol": "QUID",
		"token": "0x1a44233FAe8D50F1AeB3a5d58dd426ff4814Cb53",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 975852.92,
		"hash": "5cf22e236ceb27145e18455a6faa5cf0a35ef1626caa37a83341aa530898ffac"
	},
	{
		"id": "ac55ff533bbc",
		"ts": "2026-08-09T21:27:41.773Z",
		"symbol": "ZORA",
		"token": "0x1111111111166b7FE7bd91427724B487980aFc69",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 79742.56,
		"hash": "ac55ff533bbc20c421db0624aa325977dd6011e31372b0f3d2cadf3ec80a3b57"
	},
	{
		"id": "d3c95e5e3285",
		"ts": "2026-08-09T21:27:41.995Z",
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
		"liquidityUsd": 1430560.16,
		"hash": "d3c95e5e3285720b2ce91b0e4529524e917752c43ab27e9e5664aeb25452088a"
	}
]
