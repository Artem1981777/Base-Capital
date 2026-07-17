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
	"updatedAt": "2026-07-17T18:02:40.540Z",
	"tokensScored": 3897,
	"verdictsIssued": 3897,
	"safe": 3446,
	"risky": 320,
	"likelyRug": 131,
	"ticks": 240
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "b6808f246ed8",
		"ts": "2026-07-17T18:02:35.466Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106915183.12,
		"hash": "b6808f246ed86ce0459810092e743ad47c85ffaec3797452a250ab42b277aaf1"
	},
	{
		"id": "e487aa782eb9",
		"ts": "2026-07-17T18:02:36.133Z",
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
		"liquidityUsd": 14923635.51,
		"hash": "e487aa782eb9cac0a268015fffbdc99e4d4a3cf9632df81f2a8cc5de9dabc799"
	},
	{
		"id": "14b5149c23df",
		"ts": "2026-07-17T18:02:36.582Z",
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
		"liquidityUsd": 1112831.85,
		"hash": "14b5149c23df0f96b615982a78f26b6721dd37fa93b628cf6176a92e4af56535"
	},
	{
		"id": "eaa030698b65",
		"ts": "2026-07-17T18:02:36.876Z",
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
		"liquidityUsd": 28497818.74,
		"hash": "eaa030698b657cc6917c4400f9e487875390bacbe9931b663a35fa514f1866a7"
	},
	{
		"id": "343724d3e885",
		"ts": "2026-07-17T18:02:37.315Z",
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
		"liquidityUsd": 5160524.4,
		"hash": "343724d3e885731469370011275cad38313f3e5dc6b666f842752ed08ef039e0"
	},
	{
		"id": "af24d6305f13",
		"ts": "2026-07-17T18:02:37.565Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 976933.38,
		"hash": "af24d6305f134380d0ab651f026e9b4f6c9e55fbca60fa299db377107fb768e2"
	},
	{
		"id": "50921298e3a1",
		"ts": "2026-07-17T18:02:37.806Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28367113.66,
		"hash": "50921298e3a1faa328a411275927abdc25c248fb8f42ab885da857e674fe95dd"
	},
	{
		"id": "c5be05f1dee2",
		"ts": "2026-07-17T18:02:38.077Z",
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
		"liquidityUsd": 2699792.21,
		"hash": "c5be05f1dee2cdf69aefe802b6d134be725a17f1e7631ef4f0fe0d57e38e0ff9"
	},
	{
		"id": "7c7a61c8c002",
		"ts": "2026-07-17T18:02:38.515Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 354640.22,
		"hash": "7c7a61c8c00219f183ac52dd78b63f0993729e99a03cd6d313cb62beee55bef0"
	},
	{
		"id": "21186bd84b4e",
		"ts": "2026-07-17T18:02:38.768Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 319316.63,
		"hash": "21186bd84b4eb59839b589775d30e6814aac6e7e5945f4c9b58c4fa6989fdaf7"
	},
	{
		"id": "1fe35ee2c8ba",
		"ts": "2026-07-17T18:02:38.989Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 523731.9,
		"hash": "1fe35ee2c8ba2fea104e84b5c68da84bffce7b6409c890b26bb878040a800ca3"
	},
	{
		"id": "a28487cb8150",
		"ts": "2026-07-17T18:02:39.217Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 731662.22,
		"hash": "a28487cb8150d98c4f30c2da3d9fc2ec06b732e0dc237a6c3a0a321ff374ed4f"
	},
	{
		"id": "ec45aea84a87",
		"ts": "2026-07-17T18:02:39.433Z",
		"symbol": "COBIE",
		"token": "0x02C4347ECE55Fe108c9A29e96221615f13070791",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 26062.81,
		"hash": "ec45aea84a873af4dc22edc9ae0fd328c6840e0ca8d48de2cc657c5124c84536"
	},
	{
		"id": "f523dbbdd152",
		"ts": "2026-07-17T18:02:39.651Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 350942.94,
		"hash": "f523dbbdd152a34a8a0cc5ece8305d71d5c37e487e036b0416c496b852b6af2d"
	},
	{
		"id": "adc6ad85f2f0",
		"ts": "2026-07-17T18:02:39.872Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3734743.87,
		"hash": "adc6ad85f2f0ee3bdbace85d836fb8d9178ee14258a40fd75d7aa144ced5221b"
	},
	{
		"id": "b1fbae9efd71",
		"ts": "2026-07-17T18:02:40.100Z",
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
		"liquidityUsd": 1336220.8,
		"hash": "b1fbae9efd715c42b1be7ec52acc9fc774fa22c7123f3aa3b8733e87a41753b7"
	},
	{
		"id": "564dbe762826",
		"ts": "2026-07-17T18:02:40.319Z",
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
		"liquidityUsd": 690381.79,
		"hash": "564dbe762826f8485fd2fb847cfc45db4f61110af01c78ab178311ca5041ec63"
	},
	{
		"id": "98db1efacfd8",
		"ts": "2026-07-17T18:02:40.540Z",
		"symbol": "ARMSTRONG",
		"token": "0xE2d5Bd0D349057D77Fcd2fa5B690161336ebE999",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 99043.86,
		"hash": "98db1efacfd89c782fb11699cc81aa287215a4d1b931d788c3518e786e714747"
	},
	{
		"id": "dc9d28378c2f",
		"ts": "2026-07-17T16:12:01.008Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106153136.54,
		"hash": "dc9d28378c2f11368d71f36a7f830f8da50f870e1c6cbe7a694089c245e6183c"
	},
	{
		"id": "4b28bf348c78",
		"ts": "2026-07-17T16:12:01.354Z",
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
		"liquidityUsd": 15643607.77,
		"hash": "4b28bf348c786e77b9c866316fcd1445f46c75c9d7fee8ed3cf41fcd0925de2f"
	},
	{
		"id": "d6a933b7354d",
		"ts": "2026-07-17T16:12:01.712Z",
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
		"liquidityUsd": 1107808.35,
		"hash": "d6a933b7354d00e16728113d18e5b2182ec2a77827a526533d5a05e1a03045d4"
	},
	{
		"id": "eeb6dc31f1b0",
		"ts": "2026-07-17T16:12:01.902Z",
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
		"liquidityUsd": 28590690.79,
		"hash": "eeb6dc31f1b0140d2f69b12c1b0b17b2ca643a0968ff93c206d1ee7e30cca99a"
	},
	{
		"id": "55ad8b1c4968",
		"ts": "2026-07-17T16:12:02.270Z",
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
		"liquidityUsd": 5119546.89,
		"hash": "55ad8b1c4968f7b826560ce74724d85414ce4e8c8ee636de4f4dbfc78f8ce82e"
	},
	{
		"id": "42604777d068",
		"ts": "2026-07-17T16:12:02.497Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 976933.49,
		"hash": "42604777d068521b5bce3540767f4f8787a4b7a70c36bfb60439b1bd5b300b26"
	},
	{
		"id": "464f73189cb2",
		"ts": "2026-07-17T16:12:02.713Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28590690.79,
		"hash": "464f73189cb210d827c5ddaccf35c51b287e34bfe51c8824baf4d44992b776cb"
	},
	{
		"id": "fbb987ad968e",
		"ts": "2026-07-17T16:12:02.922Z",
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
		"liquidityUsd": 2459367.09,
		"hash": "fbb987ad968e5cfe6ab51f79e9eaa4058e2a6126e8105ce836690b58ad0ccb61"
	},
	{
		"id": "fe00236aeeac",
		"ts": "2026-07-17T16:12:03.126Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 392211.78,
		"hash": "fe00236aeeac4d6d0fc3c817311e95aece8b886f827cf27da893258a0b97373f"
	},
	{
		"id": "6671211f71cd",
		"ts": "2026-07-17T16:12:03.320Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 840793.72,
		"hash": "6671211f71cd7240a7fea710eb21ca321ae59277b3c2e2248fa4d7e99ea87624"
	},
	{
		"id": "429d54164c9e",
		"ts": "2026-07-17T16:12:03.507Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 521525.9,
		"hash": "429d54164c9e94f1e274d72f6055d277ad71732173b0fc92837fea762ba8a0fe"
	},
	{
		"id": "a375edf468ee",
		"ts": "2026-07-17T16:12:03.688Z",
		"symbol": "COBIE",
		"token": "0x02C4347ECE55Fe108c9A29e96221615f13070791",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 26660.31,
		"hash": "a375edf468ee07203e80dac86099a548fd4b5bb1586dcf9f77c5e4c3951188cb"
	},
	{
		"id": "96bcc82948e6",
		"ts": "2026-07-17T16:12:03.889Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348010.49,
		"hash": "96bcc82948e6db3bf6ec5c30a67ecca55cb117def024f23a3de77eaafc0535ac"
	},
	{
		"id": "da89b3724fae",
		"ts": "2026-07-17T16:12:04.082Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 293842.06,
		"hash": "da89b3724fae44ca60722c609eaf7964ef037c7434d5a27e27a79f0678623678"
	},
	{
		"id": "eb22a58ebc2b",
		"ts": "2026-07-17T16:12:04.268Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3766083.14,
		"hash": "eb22a58ebc2b296d621b3c4aa619b1e959dee3affeed73aa47b66a771587b480"
	},
	{
		"id": "014bb380e018",
		"ts": "2026-07-17T16:12:04.449Z",
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
		"liquidityUsd": 1293097.65,
		"hash": "014bb380e018fdbb7db01a20bf16c1a3669ccc63471f5152a451641f6921ccc6"
	},
	{
		"id": "61d5c9aede8b",
		"ts": "2026-07-17T16:12:04.644Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 60179.48,
		"hash": "61d5c9aede8b1337ab8af010c0bf8af8cc69b4fd72e4b122c4cf14d66f75ad6b"
	},
	{
		"id": "f7982c0d7b03",
		"ts": "2026-07-17T14:40:24.538Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105774634.62,
		"hash": "f7982c0d7b0340f2bc0fe82555fd3b58fb8ac5cf9c7b991a960cda175403668a"
	},
	{
		"id": "44e6953cb486",
		"ts": "2026-07-17T14:40:24.791Z",
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
		"liquidityUsd": 15037847.95,
		"hash": "44e6953cb4863836751199086a2f572e3b4f296b8cdf5eff78526cd889c8954a"
	},
	{
		"id": "deb74eacfa73",
		"ts": "2026-07-17T14:40:25.079Z",
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
		"liquidityUsd": 1105623.29,
		"hash": "deb74eacfa7374f09dbb6fc40f13d9ead74c94a7785d84efa5ff77b570101b0e"
	},
	{
		"id": "6432a1d977da",
		"ts": "2026-07-17T14:40:25.326Z",
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
		"liquidityUsd": 28112886.93,
		"hash": "6432a1d977daf826d6c8cbec6a43ae7d966b33620d2d295313ff4a5a5c741fbb"
	},
	{
		"id": "19becce40cc0",
		"ts": "2026-07-17T14:40:25.571Z",
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
		"liquidityUsd": 4681720.46,
		"hash": "19becce40cc0349d4f6d159f9bd446b8897e790391bfb1c229d9c21c68c9f5b8"
	},
	{
		"id": "d8d9d02a38e7",
		"ts": "2026-07-17T14:40:25.822Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 976507.9,
		"hash": "d8d9d02a38e7af15698598381386ba4117b559aa8a7e4946706ec88c6ece18c4"
	},
	{
		"id": "23e5692f3721",
		"ts": "2026-07-17T14:40:26.073Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28112886.93,
		"hash": "23e5692f3721444b2a3be0bc2ff8ae02bef4453716ec0d1a2140dad2b24639a1"
	},
	{
		"id": "5d41e987a82c",
		"ts": "2026-07-17T14:40:26.334Z",
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
		"liquidityUsd": 2448145.84,
		"hash": "5d41e987a82c039210317285620125cfe45198e3a5ee4f04df064f8f83d44686"
	},
	{
		"id": "e6c31fdc6d93",
		"ts": "2026-07-17T14:40:26.593Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 438831.87,
		"hash": "e6c31fdc6d9320879875fe4da290d159a26454b5442cb8ca2e6f85b7c3cfbe9a"
	},
	{
		"id": "095e6328f5ee",
		"ts": "2026-07-17T14:40:26.842Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 836719.9,
		"hash": "095e6328f5ee3b87215576fd25fcdc0e67987eeaaa60fd08546947f6414784ed"
	},
	{
		"id": "9eafcf227985",
		"ts": "2026-07-17T14:40:27.070Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 515375.86,
		"hash": "9eafcf2279859c13e46852ce5506db129f5e05ad5cb9fdaa47f5efc90f53537a"
	},
	{
		"id": "2eccfc9680f1",
		"ts": "2026-07-17T14:40:27.301Z",
		"symbol": "COBIE",
		"token": "0x02C4347ECE55Fe108c9A29e96221615f13070791",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 28293.14,
		"hash": "2eccfc9680f11121e575870978c6e20ce81252efd56c526902b7fbdd786f9ce4"
	},
	{
		"id": "3c987ad965a5",
		"ts": "2026-07-17T14:40:27.529Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 347001.57,
		"hash": "3c987ad965a574994f14e6c4cbc19026842cfc0dd5b6f0d99fd60b2751b78c92"
	},
	{
		"id": "300ba6cbaadd",
		"ts": "2026-07-17T14:40:27.761Z",
		"symbol": "TSG",
		"token": "0x4c433F4EF87fE506A7eED2fD1d822CBED411eBA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 372676.17,
		"hash": "300ba6cbaadd02620e216bceb97b24560edc1958923c262748e61a762586a484"
	},
	{
		"id": "fe3cc35e617d",
		"ts": "2026-07-17T14:40:27.998Z",
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
		"liquidityUsd": 1271343.81,
		"hash": "fe3cc35e617dc4260dc13a5569050eca6a3a5ae90037ccd9de01dd4b6438b2fe"
	},
	{
		"id": "e0fdd845b858",
		"ts": "2026-07-17T14:40:28.225Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 61339.08,
		"hash": "e0fdd845b8580961510fb0149cf46646e5482c3cf8e8d1e6e0de505d77a73f32"
	},
	{
		"id": "9a34ece7a0d4",
		"ts": "2026-07-17T14:40:28.461Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 96972.27,
		"hash": "9a34ece7a0d46f6d930e350def0c672ccbdb88bf88e30f4c983bcb46636fce01"
	},
	{
		"id": "2ddf37ed2f53",
		"ts": "2026-07-17T12:06:13.683Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105370342.99,
		"hash": "2ddf37ed2f53d6ed02cf2a84ce1bc19f6a977987195f88ba9e97d3f8cdf2eef0"
	},
	{
		"id": "95b474d2dbe1",
		"ts": "2026-07-17T12:06:14.041Z",
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
		"liquidityUsd": 13026386.85,
		"hash": "95b474d2dbe13f205106133f9aea0139e9ded5698468acd7d493487211be7cc2"
	},
	{
		"id": "e00f758b248d",
		"ts": "2026-07-17T12:06:14.268Z",
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
		"liquidityUsd": 1117765.79,
		"hash": "e00f758b248d031594d1e0e736477682a93bf10cdef39642dc4357126a574638"
	},
	{
		"id": "c3f5e2d5a0d4",
		"ts": "2026-07-17T12:06:14.459Z",
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
		"liquidityUsd": 29116882.09,
		"hash": "c3f5e2d5a0d460a01dcbfc3866592376f41ef28a0ed401320a1b70981d0babec"
	},
	{
		"id": "742a66ed420f",
		"ts": "2026-07-17T12:06:14.677Z",
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
		"liquidityUsd": 4678110.39,
		"hash": "742a66ed420f5179ec08a29c57fe7ca2f6edb8ca5aef029cd5d2610fd087e9a1"
	},
	{
		"id": "e9d127cceb34",
		"ts": "2026-07-17T12:06:14.886Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 973733.49,
		"hash": "e9d127cceb343da95bb76321578f59d76ea42ba5f4d704c0b355cdd03d6cb68e"
	},
	{
		"id": "1035f0adc996",
		"ts": "2026-07-17T12:06:15.093Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29116882.09,
		"hash": "1035f0adc996229496e82da1e85dd3f8b2cf1c443de7b0a2434966075cf70551"
	},
	{
		"id": "203e4c4408a3",
		"ts": "2026-07-17T12:06:15.317Z",
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
		"liquidityUsd": 2465085.86,
		"hash": "203e4c4408a3b256fc78765d8aae3d0eb044fad67fe777d5f994dbffffdca622"
	},
	{
		"id": "c95b1d335648",
		"ts": "2026-07-17T12:06:15.510Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 460316.33,
		"hash": "c95b1d3356488a1252f2958e2d16dba1fc66c1582d6252018dc113f5db5be21a"
	},
	{
		"id": "692d5987a765",
		"ts": "2026-07-17T12:06:15.702Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 958887.84,
		"hash": "692d5987a7658d6f019939ff003333ef1b0b1adb056c467d1547ebe925988849"
	},
	{
		"id": "b969ad6a7fd5",
		"ts": "2026-07-17T12:06:15.883Z",
		"symbol": "COBIE",
		"token": "0x02C4347ECE55Fe108c9A29e96221615f13070791",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 29313.37,
		"hash": "b969ad6a7fd5522baba36b1a9fcfbdf5449008398cf8d6472e6d9d51340076d5"
	},
	{
		"id": "4559cc1f847e",
		"ts": "2026-07-17T12:06:16.088Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 342670.33,
		"hash": "4559cc1f847e088b50ab1ebb683e54e8f0314f64189639702e79042e8a5a0843"
	},
	{
		"id": "38537bf27093",
		"ts": "2026-07-17T12:06:16.278Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 109843.02,
		"hash": "38537bf27093257b208ae99a398016f0dd98cf43b6d1008d5859724f72699fa7"
	},
	{
		"id": "c36366ea2aba",
		"ts": "2026-07-17T12:06:16.574Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 66972.39,
		"hash": "c36366ea2aba3dbf6cfa4804b3196ce07b9c92b3a99d36238eab6a0c8f7af79e"
	},
	{
		"id": "51c3e359e434",
		"ts": "2026-07-17T12:06:16.878Z",
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
		"liquidityUsd": 1284133.54,
		"hash": "51c3e359e4346d303b02b7b04e01b5f80e14ba168fb169b2c59e46bd583eadde"
	},
	{
		"id": "770a320899fb",
		"ts": "2026-07-17T12:06:17.354Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 718942.58,
		"hash": "770a320899fbb6d779335dcf5dda206b0860d2583ce9c1fbc6d5772e5a9a421e"
	},
	{
		"id": "3db31c97b6ba",
		"ts": "2026-07-17T12:06:17.544Z",
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
		"liquidityUsd": 57239.2,
		"hash": "3db31c97b6bab23e26ab58b2305f0c32c088940b7ce57727b532ee9f78d6a696"
	},
	{
		"id": "e1e10aaef850",
		"ts": "2026-07-17T10:43:42.900Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105255057.54,
		"hash": "e1e10aaef850c5d9bf65dbce605d60e85313918b9ad5bdb9dd6cf07d3097945c"
	},
	{
		"id": "cd9f809b17e7",
		"ts": "2026-07-17T10:43:43.387Z",
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
		"liquidityUsd": 15019553.95,
		"hash": "cd9f809b17e7626f21eb41b1b20b2d3ae4678e22b973eab31e2d06311542febb"
	},
	{
		"id": "bb52283a4e9e",
		"ts": "2026-07-17T10:43:43.702Z",
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
		"liquidityUsd": 1114987.74,
		"hash": "bb52283a4e9eac5e693f84390b87da2d426d91ee5fb7bbe9bbe832ed56d3f47e"
	},
	{
		"id": "978fda3a6ec2",
		"ts": "2026-07-17T10:43:43.951Z",
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
		"liquidityUsd": 29221856.64,
		"hash": "978fda3a6ec2f60d566df8948d6112419e0e089368ac4ca8614b3f846722d7ca"
	},
	{
		"id": "b38dcb068dff",
		"ts": "2026-07-17T10:43:44.229Z",
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
		"liquidityUsd": 4685299.65,
		"hash": "b38dcb068dff623116eab7ef6e49c19ec98dc0a86c50adc9aec3c340997197f3"
	},
	{
		"id": "f5fc0d076138",
		"ts": "2026-07-17T10:43:44.476Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 973739.08,
		"hash": "f5fc0d076138685460bcd58a8fb3cfbbd7053947e9e716f27ec5ea1ed5be0135"
	},
	{
		"id": "31eae958978e",
		"ts": "2026-07-17T10:43:44.724Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29221856.64,
		"hash": "31eae958978ee89dd97753702766ba7a96154cd554e1b9d4af65efceaf51b0ce"
	},
	{
		"id": "fa362c930415",
		"ts": "2026-07-17T10:43:44.976Z",
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
		"liquidityUsd": 2466728.98,
		"hash": "fa362c93041575b700ac38e901864f3cd45688dc07529af5ebe0feb01b3da1a2"
	},
	{
		"id": "b537548b721d",
		"ts": "2026-07-17T10:43:45.241Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 456413.9,
		"hash": "b537548b721d0dc1abe9549b9106caf3f75847c2f0048d2454936170c767b3e4"
	},
	{
		"id": "3bbc71a3ca39",
		"ts": "2026-07-17T10:43:45.539Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 962651.3,
		"hash": "3bbc71a3ca3923f068a2eb715f1c7dac7c55c43e4348af7097a5b7e8e797f768"
	},
	{
		"id": "e89dcc69cc6e",
		"ts": "2026-07-17T10:43:45.780Z",
		"symbol": "COBIE",
		"token": "0x02C4347ECE55Fe108c9A29e96221615f13070791",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 30416.3,
		"hash": "e89dcc69cc6e3473ccba5449ef1bf8543f8ea35e99cfdd6d596908654d92e668"
	},
	{
		"id": "a086888d9736",
		"ts": "2026-07-17T10:43:46.016Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 348931.69,
		"hash": "a086888d9736036b5a9a0220fc1f060c913fc1f738a67b54e907c668e427c6b2"
	},
	{
		"id": "bad6fa4cc622",
		"ts": "2026-07-17T10:43:46.250Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 113496.02,
		"hash": "bad6fa4cc62204dce9869578c1f62830e57546fbad00299e304d82066e27410c"
	},
	{
		"id": "b8367e96637a",
		"ts": "2026-07-17T10:43:46.487Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 72519.07,
		"hash": "b8367e96637ab8e68a77ad38e23ebd7beaba0555b2685a1dc6847cb2cccfea21"
	},
	{
		"id": "59da25ba7dc5",
		"ts": "2026-07-17T10:43:46.723Z",
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
		"liquidityUsd": 1341575.95,
		"hash": "59da25ba7dc571109679f63118b9096bf2d1e3f853beee23261bbb516ef7d8d4"
	},
	{
		"id": "c26a57e7c5d6",
		"ts": "2026-07-17T10:43:46.955Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 718693.02,
		"hash": "c26a57e7c5d6f62fc1810e1cb78a891445c8c52a3ca963eca87995ffa8a40282"
	},
	{
		"id": "9960ad016213",
		"ts": "2026-07-17T10:43:47.199Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 563918.04,
		"hash": "9960ad016213babe229fe9000a81fe61a8e8246c02ccdfe478d905fe749efa56"
	},
	{
		"id": "26227a0358f2",
		"ts": "2026-07-17T08:03:38.386Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105014408.58,
		"hash": "26227a0358f2815868c1d824f4d4d7bb8ad7638b9910c93f50ce2a2a4710d9ce"
	},
	{
		"id": "1a9450157ce1",
		"ts": "2026-07-17T08:03:38.840Z",
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
		"liquidityUsd": 15600672.9,
		"hash": "1a9450157ce1ffcfe64ee6be9df202d92ed1f76e51d0784146f42aef6fb92478"
	},
	{
		"id": "2df4ed0975b7",
		"ts": "2026-07-17T08:03:39.074Z",
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
		"liquidityUsd": 1109181.44,
		"hash": "2df4ed0975b7167ebadd0780baebb37d6c971de93fa388ca6f1477bd7e33903b"
	},
	{
		"id": "7a3879175097",
		"ts": "2026-07-17T08:03:39.523Z",
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
		"liquidityUsd": 29145083,
		"hash": "7a3879175097aedfd472f0b9204a3c286b5d0c509ef5d6d519ff48946dc606d5"
	},
	{
		"id": "f195be64be76",
		"ts": "2026-07-17T08:03:39.756Z",
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
		"liquidityUsd": 4635572.89,
		"hash": "f195be64be766977a5dcfe5cda3fb0669a8599e947dc55ee87b7e1cfbde368ab"
	},
	{
		"id": "9489aedf4333",
		"ts": "2026-07-17T08:03:39.998Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 973209.72,
		"hash": "9489aedf4333e4a8825eec25e8eff86f705c0cbdeb2babb35a5c2f9f76e1508b"
	},
	{
		"id": "c3f2eae24cf6",
		"ts": "2026-07-17T08:03:40.230Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29145083,
		"hash": "c3f2eae24cf617db8a006870209270595f20cc05b1cbb2124153fe635e4d6e8d"
	},
	{
		"id": "ff4a6e660381",
		"ts": "2026-07-17T08:03:40.470Z",
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
		"liquidityUsd": 2454129.62,
		"hash": "ff4a6e6603818efcebc1eacb85fca9027b6d1fc027a19cd9fd26b73dd037d643"
	},
	{
		"id": "6367dce18866",
		"ts": "2026-07-17T08:03:40.944Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 502724.03,
		"hash": "6367dce1886612e2897626d771cf758a349c13884af628234f5f43cfd6b39d4b"
	},
	{
		"id": "77a51c221c89",
		"ts": "2026-07-17T08:03:41.447Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 962912.01,
		"hash": "77a51c221c8947db14c04987324b8d34107f42ff3b3e768131ae73dcb4718ac5"
	},
	{
		"id": "fc66db66feb4",
		"ts": "2026-07-17T08:03:41.665Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 337657.24,
		"hash": "fc66db66feb410f22aabdebb7d830c90af90eeb05e30e650e1695ae2b47f4231"
	},
	{
		"id": "99a78b83f4f9",
		"ts": "2026-07-17T08:03:41.891Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 119129.58,
		"hash": "99a78b83f4f9f2f7bf53dbd5aa2be5b17195f448c4fa53244ded6eac909fd086"
	},
	{
		"id": "187c46ebb39d",
		"ts": "2026-07-17T08:03:42.110Z",
		"symbol": "COBIE",
		"token": "0x02C4347ECE55Fe108c9A29e96221615f13070791",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 33568.44,
		"hash": "187c46ebb39d40dcd07a11a2c9e33011b97ca9be8bbcd17657214f4e484dbd74"
	},
	{
		"id": "c29bf7ad534c",
		"ts": "2026-07-17T08:03:42.335Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 85154.29,
		"hash": "c29bf7ad534c242c01223a3e6d868905adb581ff2a2634c21f22d0dd364c44f7"
	},
	{
		"id": "eaed5ef4f34e",
		"ts": "2026-07-17T08:03:42.552Z",
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
		"liquidityUsd": 1334401.61,
		"hash": "eaed5ef4f34e742bfa84deee941668463b2d6559eacb60172f3aefcefc681bde"
	},
	{
		"id": "6e7fb34e6f0e",
		"ts": "2026-07-17T08:03:42.778Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 734272.38,
		"hash": "6e7fb34e6f0e1d08ef3c3bb8868feb034999c844c78e61a90c0e1a5f6eeb26e4"
	},
	{
		"id": "b9ccfdf07324",
		"ts": "2026-07-17T08:03:42.996Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 98624.25,
		"hash": "b9ccfdf07324b099c8a7715f6e6fb103f562a8f2860a1e6f1ce8ecf9b09933cb"
	},
	{
		"id": "23b9bd1e1152",
		"ts": "2026-07-17T05:38:56.911Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105205700.43,
		"hash": "23b9bd1e1152e0d1af7eca421d1b98e8bf55d9bcefb6a2cb034474bdeb40db4f"
	},
	{
		"id": "440a5cfb7269",
		"ts": "2026-07-17T05:38:57.109Z",
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
		"liquidityUsd": 14734145.21,
		"hash": "440a5cfb7269409a0b4daee6b73ee2836066a0e65d432b3098b551bda940a231"
	},
	{
		"id": "2a4f89bc0f22",
		"ts": "2026-07-17T05:38:57.303Z",
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
		"liquidityUsd": 1114825.3,
		"hash": "2a4f89bc0f22adb18955f3c3661b65fae6b36fcf50aa7980565031f2d09ff280"
	},
	{
		"id": "78fdbd6b77a5",
		"ts": "2026-07-17T05:38:57.494Z",
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
		"liquidityUsd": 28890533.51,
		"hash": "78fdbd6b77a50bf3b2219e5b9d53c572c33f76a57ab9880c694896fd47680b93"
	},
	{
		"id": "c3c927588165",
		"ts": "2026-07-17T05:38:58.217Z",
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
		"liquidityUsd": 4681130.22,
		"hash": "c3c92758816595480f7d49d925167c350c86c450f7481952df00e9f85dafd5a7"
	},
	{
		"id": "6a277192fa64",
		"ts": "2026-07-17T05:38:58.414Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996213,
		"hash": "6a277192fa640d89da7b8a5b7091c00c9f943594efaa954db6da21303e587c97"
	},
	{
		"id": "6212fad16b91",
		"ts": "2026-07-17T05:38:58.614Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 28890533.51,
		"hash": "6212fad16b9158e4e27f6477c1d7ef32b5c71ccc7a06d82ceca14a174011aa59"
	},
	{
		"id": "327bd5339448",
		"ts": "2026-07-17T05:38:58.823Z",
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
		"liquidityUsd": 2464364.51,
		"hash": "327bd5339448790a2bc0701259a25f05fd9cc57783cd2cd4bdeb5198dbc7167a"
	},
	{
		"id": "187d653dbfb3",
		"ts": "2026-07-17T05:38:59.919Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 489459.58,
		"hash": "187d653dbfb322865c24512d2f6b9c274f9570f9a4626d7ce512e88c9adf1341"
	},
	{
		"id": "5a90f09fb2f3",
		"ts": "2026-07-17T05:39:00.107Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 989288.28,
		"hash": "5a90f09fb2f3b5e865d6448c8654b954089b5d81cacdaa46e4614b00d1f594bc"
	},
	{
		"id": "341a270eb490",
		"ts": "2026-07-17T05:39:00.298Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 125784.37,
		"hash": "341a270eb490807b6d0d9b37c260bb4719618e1988333cc898273461ecd1a96b"
	},
	{
		"id": "007b0c1a4115",
		"ts": "2026-07-17T05:39:00.496Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"owner_can_change_balance"
		],
		"liquidityUsd": 325595.24,
		"hash": "007b0c1a41153b3bdde33fbc22e1c181fd0c605da4d5e40f29dba7217ef1f04d"
	},
	{
		"id": "97a484c88f16",
		"ts": "2026-07-17T05:39:00.687Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 72036.01,
		"hash": "97a484c88f163d45d638b27de31a87d9b447450f58767f6545c2a50d4dfca1a6"
	},
	{
		"id": "274e297263eb",
		"ts": "2026-07-17T05:39:00.878Z",
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
		"liquidityUsd": 1369280.37,
		"hash": "274e297263ebacbfe886bdc0ba60b6ff554449160869c085d8f0f96f664fd7c2"
	},
	{
		"id": "5982ade93e0b",
		"ts": "2026-07-17T05:39:01.072Z",
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
		"liquidityUsd": 741613.35,
		"hash": "5982ade93e0bceacc857a6878d440147ece71037f52d7cc8445816e1168e64f5"
	},
	{
		"id": "8975841adf5a",
		"ts": "2026-07-17T05:39:01.265Z",
		"symbol": "COBIE",
		"token": "0x02C4347ECE55Fe108c9A29e96221615f13070791",
		"score": 80,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.6,
		"flags": [
			"medium_liquidity",
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 34827.05,
		"hash": "8975841adf5a9b97f70be1e4f7026f5e2d4fbb0b1849b9c7031c16f1425c9ce6"
	},
	{
		"id": "953399fbf42b",
		"ts": "2026-07-17T05:39:01.608Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 483939.44,
		"hash": "953399fbf42ba1b8e3beeba7691e69e227f7c594311e4cb5288f69fd17d8b1d9"
	},
	{
		"id": "b67c8b4d57ae",
		"ts": "2026-07-17T05:39:01.875Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
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
		"liquidityUsd": 95031.12,
		"hash": "b67c8b4d57ae1f42920bac266947020ae490acc0f79c76879fc86457f43a82be"
	},
	{
		"id": "f2b690c44f28",
		"ts": "2026-07-17T02:24:28.206Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105396062.15,
		"hash": "f2b690c44f285b2d30931e070ff89d466ebcf0ab35d77376af4003c9d5ed4b4d"
	},
	{
		"id": "4ce98c3d171b",
		"ts": "2026-07-17T02:24:28.672Z",
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
		"liquidityUsd": 15288823.61,
		"hash": "4ce98c3d171b954c65160b08894c1616f2a2933a3cabfe1c1137b228f0274fec"
	},
	{
		"id": "cd7d6a33c77f",
		"ts": "2026-07-17T02:24:28.911Z",
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
		"liquidityUsd": 1129788.51,
		"hash": "cd7d6a33c77f5eddfce66c2ed98992b97624e83903fd6492a6524436f8ca6e29"
	},
	{
		"id": "8f77518297e7",
		"ts": "2026-07-17T02:24:29.168Z",
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
		"liquidityUsd": 29276327.03,
		"hash": "8f77518297e706e8aaf49f366e8e87da6f9bd7c7fc9d9b26b1c2c1ae237468d5"
	},
	{
		"id": "be437ee4fd2d",
		"ts": "2026-07-17T02:24:29.406Z",
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
		"liquidityUsd": 4682409.87,
		"hash": "be437ee4fd2d62e6584947faf88b97a629633d7582dffb3f4d1985cec304d2c5"
	},
	{
		"id": "2d6d3dabaa5b",
		"ts": "2026-07-17T02:24:29.656Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996208.28,
		"hash": "2d6d3dabaa5b69db9d24096938e70b84823c1f7fced41a3f74dd374e08e62f0c"
	},
	{
		"id": "7096d5a7679e",
		"ts": "2026-07-17T02:24:29.897Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29276327.03,
		"hash": "7096d5a7679e96d7205e4d6c703c0f695f172bb480ad9eee7882eac8716eeea0"
	},
	{
		"id": "1b525f212499",
		"ts": "2026-07-17T02:24:30.145Z",
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
		"liquidityUsd": 2471298.03,
		"hash": "1b525f212499f74121331c1466355f23c5f454bc2edb4b4e1d8f2e76f927f352"
	},
	{
		"id": "a6294a3f5ed6",
		"ts": "2026-07-17T02:24:30.394Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 918197.52,
		"hash": "a6294a3f5ed63993e4865ffcf957c3ef66b589a56955b765c5b0c6a65f90bcce"
	},
	{
		"id": "b1332beb3d3b",
		"ts": "2026-07-17T02:24:30.855Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 130217.97,
		"hash": "b1332beb3d3b8c68dda0bf0318cde8dd42091d72c5f9cfbc5c3380dcd4586391"
	},
	{
		"id": "1953b408edcb",
		"ts": "2026-07-17T02:24:31.166Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 611225.24,
		"hash": "1953b408edcbd05b1f9be709e825523013f61de700de1ea928de6c34c7c4840f"
	},
	{
		"id": "12c348e2a058",
		"ts": "2026-07-17T02:24:31.400Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 96082.58,
		"hash": "12c348e2a0583ff5708167d071e3a4a6ac2125b28f96340bf3801525586daccd"
	},
	{
		"id": "5a3e685fb709",
		"ts": "2026-07-17T02:24:31.622Z",
		"symbol": "RUSSELL",
		"token": "0x0C5142BC58f9A61AB8C3D2085DD2F4e550c5cE0B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 374430.49,
		"hash": "5a3e685fb7099a2b4e03f39888855be7364d171d818bf15fbb1795e6a191531f"
	},
	{
		"id": "ffe83ffafa70",
		"ts": "2026-07-17T02:24:31.854Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 88557.78,
		"hash": "ffe83ffafa70f80d3630f4e9fe3386e6e5f103673f0b12ed4eb47b63eadcbef2"
	},
	{
		"id": "7f3a9a7979e0",
		"ts": "2026-07-17T02:24:32.072Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 741962.45,
		"hash": "7f3a9a7979e0a54f5709913ca24cc770e87325afd85697dee41036b23173ccfa"
	},
	{
		"id": "800223fb8e67",
		"ts": "2026-07-17T02:24:32.304Z",
		"symbol": "$COBIE",
		"token": "0x199084f1390B58493096Ff73Ec74c68164ba8453",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 77258.62,
		"hash": "800223fb8e67bb8ea7b68f1a05a57e28e21aaa66b1cfbdddd7a2c6412675a23a"
	},
	{
		"id": "5232bf082216",
		"ts": "2026-07-17T02:24:32.522Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 459697.95,
		"hash": "5232bf0822163b15f2acc7fd557a0d67876d4c0d370c56c0047f627206831a3e"
	},
	{
		"id": "c6676e9f6c3a",
		"ts": "2026-07-17T02:24:32.755Z",
		"symbol": "BASEMATE",
		"token": "0x07E61D8a4e197dfC269e90D7ECe1dF0D26702bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 156005.31,
		"hash": "c6676e9f6c3a77e21b89ee7d5f28f9a9d694ac45ea5dd9271501158c30677627"
	},
	{
		"id": "8b52a0b615f0",
		"ts": "2026-07-16T23:55:35.218Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105947247.75,
		"hash": "8b52a0b615f0cf297a2c1391ec09e86ed5b27d8c504a46841092a6a6a94bc54e"
	},
	{
		"id": "5ef4eb5846ed",
		"ts": "2026-07-16T23:55:35.467Z",
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
		"liquidityUsd": 15396424.79,
		"hash": "5ef4eb5846ed1c82f4fd8aa38c0829622cd225cdbfe3bfa74482541c6e804d82"
	},
	{
		"id": "bd705de9a4bb",
		"ts": "2026-07-16T23:55:35.713Z",
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
		"liquidityUsd": 1136376.21,
		"hash": "bd705de9a4bb1d4f5fa664f3cb42af2c829dadadd52b4143b1c8950bcd20bc91"
	},
	{
		"id": "06767079be85",
		"ts": "2026-07-16T23:55:35.960Z",
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
		"liquidityUsd": 29308026.09,
		"hash": "06767079be854e94034a67cbb3fbc8ebd980ee13981f9267e132b618eeeceddd"
	},
	{
		"id": "a956ab1c51ed",
		"ts": "2026-07-16T23:55:36.206Z",
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
		"liquidityUsd": 4749234.04,
		"hash": "a956ab1c51edf1009dcae743f68d745fe06856df42d1a1e8254e113471322a9e"
	},
	{
		"id": "370f72af8ac4",
		"ts": "2026-07-16T23:55:36.452Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996345.89,
		"hash": "370f72af8ac4462df168d78190274a219a5aa91c6def18ca033280198941824c"
	},
	{
		"id": "e5e1c0f8e80d",
		"ts": "2026-07-16T23:55:36.693Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29308026.09,
		"hash": "e5e1c0f8e80d7ce431d37ab80e0eb029e052eababd8077ab91d1210a2b1561d9"
	},
	{
		"id": "1d639966bf69",
		"ts": "2026-07-16T23:55:57.367Z",
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
		"liquidityUsd": 2485820.95,
		"hash": "1d639966bf6959b384c98d82aab3f812472e18c2b5d565a5d83ab42b93e7e1fe"
	},
	{
		"id": "d85b0cf60d32",
		"ts": "2026-07-16T23:55:57.660Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 840369.71,
		"hash": "d85b0cf60d3262e148547a9a377c22d16080d962c05c0cbcbcbe48017770fba7"
	},
	{
		"id": "1709c53a22b7",
		"ts": "2026-07-16T23:55:57.911Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 160598.19,
		"hash": "1709c53a22b771eae1027cff3f95d27a5d2cfa64d92ee46b15c51a7f1296ffeb"
	},
	{
		"id": "e70414b31d4d",
		"ts": "2026-07-16T23:55:58.143Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 62510.81,
		"hash": "e70414b31d4d0af9c958b79ece85e46215f6a66773968bc4a6a5271541e298a0"
	},
	{
		"id": "15c9f69d1944",
		"ts": "2026-07-16T23:55:58.447Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84531.92,
		"hash": "15c9f69d194416bcf119dc374ff2986ce7f8774cbae0242482a491dd29eb7df7"
	},
	{
		"id": "25607df1d977",
		"ts": "2026-07-16T23:55:58.679Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 425862.31,
		"hash": "25607df1d977772e8d83895b865a66a18ce7f7c321814c1bd72279839b9868f9"
	},
	{
		"id": "9e184af8eab8",
		"ts": "2026-07-16T23:56:07.565Z",
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
		"liquidityUsd": 2159526.12,
		"hash": "9e184af8eab8160a495d2ad2317b03eb30c8aaf8b3a7913ab07f21d0dc18f39a"
	},
	{
		"id": "1aa6d9dc57d7",
		"ts": "2026-07-16T23:56:08.097Z",
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
		"liquidityUsd": 696542.49,
		"hash": "1aa6d9dc57d71d2f9a8520535b9b1afcdda702a2a3125f9e8976609bd3ea9c0d"
	},
	{
		"id": "c64677a5bd49",
		"ts": "2026-07-16T23:56:10.090Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 263472.27,
		"hash": "c64677a5bd4936019fc4d258e55fb8c06863082191add3db32fb8c13665edba3"
	},
	{
		"id": "4d9281fad5b4",
		"ts": "2026-07-16T23:56:10.352Z",
		"symbol": "$COBIE",
		"token": "0x199084f1390B58493096Ff73Ec74c68164ba8453",
		"score": 78,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.56,
		"flags": [
			"volume_liquidity_anomaly",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 70426.24,
		"hash": "4d9281fad5b49bc8d8700255c7c762d292185d5050f868dd4cf8f14e9d773e90"
	},
	{
		"id": "193716a0dfd2",
		"ts": "2026-07-16T22:00:31.923Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106311613.85,
		"hash": "193716a0dfd270bebc16d36254f7ad6f16eac365522358778559b84d4538dc84"
	},
	{
		"id": "24adb36ada5f",
		"ts": "2026-07-16T22:00:32.273Z",
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
		"liquidityUsd": 13755572.34,
		"hash": "24adb36ada5f0411f629313ad68a71de33966bcf9ec70751ae88b1a7de2e7205"
	},
	{
		"id": "d7c390a802bd",
		"ts": "2026-07-16T22:00:32.469Z",
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
		"liquidityUsd": 1149062.11,
		"hash": "d7c390a802bd8ac8bd7032502580001f8ac22136f5effbcbf1ca6bbf193eaf4a"
	},
	{
		"id": "080640c0131d",
		"ts": "2026-07-16T22:00:33.536Z",
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
		"liquidityUsd": 29748284.91,
		"hash": "080640c0131d578a725d89416b6d3a6b537e71fb06659152cfe053e9fec4e665"
	},
	{
		"id": "acc06f121e00",
		"ts": "2026-07-16T22:00:33.882Z",
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
		"liquidityUsd": 4820763.1,
		"hash": "acc06f121e00581e77a281294d055c85cdbea6d630ce8105cdd59572bcdbd542"
	},
	{
		"id": "a7500713f321",
		"ts": "2026-07-16T22:00:34.277Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996330.63,
		"hash": "a7500713f32118ccae0d83e70babb4d8ad8e5b73bd5f466ecd068fa523416b15"
	},
	{
		"id": "8396320d7f7e",
		"ts": "2026-07-16T22:00:34.466Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29748284.91,
		"hash": "8396320d7f7e9f1c023a612cf8116e12c6d8b51e47b3ff587490a7a0937359d1"
	},
	{
		"id": "83e4b1303db3",
		"ts": "2026-07-16T22:00:34.679Z",
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
		"liquidityUsd": 2503550.94,
		"hash": "83e4b1303db39c0251a3f92b9c7e9f213100ee9e5397a39e473f48934ebba271"
	},
	{
		"id": "dc5878b395c0",
		"ts": "2026-07-16T22:00:34.866Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 852232.68,
		"hash": "dc5878b395c03f302a60ff7c6253b12672358dd7ebe73c6a8e5b5c5ed79e7b4b"
	},
	{
		"id": "3c5d4c59637c",
		"ts": "2026-07-16T22:00:35.053Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 147563.67,
		"hash": "3c5d4c59637cff654b60e6eb45e95f0e2e9c8b104d0721517c42ccdd6ff3e8b1"
	},
	{
		"id": "3ded00e6c789",
		"ts": "2026-07-16T22:00:35.225Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 52920.06,
		"hash": "3ded00e6c78932498389b0adb52fa142a043d7dc8e4c9ecd5e00b61e21860843"
	},
	{
		"id": "499f9328127e",
		"ts": "2026-07-16T22:00:35.510Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 96696.46,
		"hash": "499f9328127e8d3dcdc0761d1b6a3fa1da428a7e2bccbe48b7e63c5ed9a2c6bb"
	},
	{
		"id": "72ee2bfed7ed",
		"ts": "2026-07-16T22:00:35.696Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 418475.68,
		"hash": "72ee2bfed7ed518067a7f877dba1ed5a1d232224084442458ce4a49e2ee06b7f"
	},
	{
		"id": "45ef658e57f3",
		"ts": "2026-07-16T22:00:35.924Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2227740.42,
		"hash": "45ef658e57f35994f8cc9c154f41848385638b7df43fae4f9faa2ef71f88acd3"
	},
	{
		"id": "89d0d4987b60",
		"ts": "2026-07-16T22:00:36.216Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3707902.42,
		"hash": "89d0d4987b6043d8b3a2211d82e82e7f12f385e48602502c3264cf1d31f3c254"
	},
	{
		"id": "17c5f1326513",
		"ts": "2026-07-16T22:00:36.398Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 274312.57,
		"hash": "17c5f13265139111bc46fd3020ca730f99acec3dc38c7aef85b895bf8b03343e"
	},
	{
		"id": "823eeb6329a4",
		"ts": "2026-07-16T22:00:36.594Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 675138.32,
		"hash": "823eeb6329a45ac2a4529bea5f475d6fade305f18a6adaa568f95ca406edaacf"
	},
	{
		"id": "4dd1c943eee8",
		"ts": "2026-07-16T20:53:58.249Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106243328.36,
		"hash": "4dd1c943eee8e32e803c50a0dda9305e7c448d1003fd121d8f544a5b142eada2"
	},
	{
		"id": "98cd4241ffa9",
		"ts": "2026-07-16T20:53:58.906Z",
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
		"liquidityUsd": 15619575.4,
		"hash": "98cd4241ffa974e2026a7622e824ca90fbf957c6def35815a1a2d97122d46f6b"
	},
	{
		"id": "bb25c5525536",
		"ts": "2026-07-16T20:53:59.354Z",
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
		"liquidityUsd": 1145188.17,
		"hash": "bb25c55255363fa0042f82caa2e1484992abb5853e7dcbed342a719bf4da14f1"
	},
	{
		"id": "e2cbd6c55ace",
		"ts": "2026-07-16T20:53:59.814Z",
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
		"liquidityUsd": 29705758.86,
		"hash": "e2cbd6c55ace193de4f2b2cd2ad4ac04bc0032a4145b8f2472b46832d343ee4e"
	},
	{
		"id": "875553400998",
		"ts": "2026-07-16T20:54:00.265Z",
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
		"liquidityUsd": 4795295.26,
		"hash": "875553400998c7fd0b54bde059db8584a1f05d95c5da9dfacb8575d3ffc8bcd5"
	},
	{
		"id": "98334644d2cb",
		"ts": "2026-07-16T20:54:03.188Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 996314.62,
		"hash": "98334644d2cbbf7ba487310f03974d3878aa79e82e16847e6dabe350e355813e"
	},
	{
		"id": "d1188ee57f24",
		"ts": "2026-07-16T20:54:03.582Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29705758.86,
		"hash": "d1188ee57f242ab7151f8fe9df306af699e0de26a80044b7d75da8c0e97a1f43"
	},
	{
		"id": "5efb6abf116a",
		"ts": "2026-07-16T20:54:03.864Z",
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
		"liquidityUsd": 2495532.66,
		"hash": "5efb6abf116a3ce87facb942b81170980e62cad9a54b2d8e25fd1015f8d04678"
	},
	{
		"id": "76e50b3c396a",
		"ts": "2026-07-16T20:54:04.107Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 904356.47,
		"hash": "76e50b3c396a9a1da00ca302d1298c57d0d1c8bc16568a3f8bdefb4b840a574a"
	},
	{
		"id": "9005b977a7d0",
		"ts": "2026-07-16T20:54:04.409Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 177631.61,
		"hash": "9005b977a7d0204b408b3e78a16f37191ff98269dd5bd0d765e99464c8d4c840"
	},
	{
		"id": "77fe2e69d107",
		"ts": "2026-07-16T20:54:04.869Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 415491.04,
		"hash": "77fe2e69d107eda48aa6273222bbd06962356bd0288e246d4eb888d336058084"
	},
	{
		"id": "aa2acfbc7ef0",
		"ts": "2026-07-16T20:54:05.380Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly"
		],
		"liquidityUsd": 62427.28,
		"hash": "aa2acfbc7ef00489a6246c3e694320dbb2ac21a62780b3de61bfbf9db2c49ecb"
	},
	{
		"id": "c669c20e09c7",
		"ts": "2026-07-16T20:54:05.747Z",
		"symbol": "MYRAD",
		"token": "0x693Bad964F815F32FAbE0b9d4911865bfFC30172",
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
		"liquidityUsd": 97951.56,
		"hash": "c669c20e09c777340207813ee03192f63f678a38bafa4c597017cea65a9c5662"
	},
	{
		"id": "3e643ccb1636",
		"ts": "2026-07-16T20:54:06.009Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2220341.74,
		"hash": "3e643ccb163631cb8713cbf60a33d20ca37c17f2219d38d0ace2bc5d11e6892f"
	},
	{
		"id": "cb656efcf191",
		"ts": "2026-07-16T20:54:06.255Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3554777.58,
		"hash": "cb656efcf1913baec23477a56b0bffa6d55c2c09366a8f354c85dcbdaae9864d"
	},
	{
		"id": "8c0ee80f8096",
		"ts": "2026-07-16T20:54:06.482Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 262793.02,
		"hash": "8c0ee80f809684be350f47492c4b97313b027a70c872e5d858fe7d39e607c4b7"
	},
	{
		"id": "23eb47fde3db",
		"ts": "2026-07-16T20:54:06.706Z",
		"symbol": "BASEMATE",
		"token": "0x07E61D8a4e197dfC269e90D7ECe1dF0D26702bA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 148324.24,
		"hash": "23eb47fde3dbcd0f5766bf3077d59362a2bc015b2288956d9bc734d55977be6c"
	},
	{
		"id": "8c07cbbe77ec",
		"ts": "2026-07-16T19:03:56.709Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 105745571.16,
		"hash": "8c07cbbe77ec28597bf63c680da41cc871997f9756a2c3a4cf698ad9aff2b62e"
	},
	{
		"id": "8c4762d8df0d",
		"ts": "2026-07-16T19:03:57.160Z",
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
		"liquidityUsd": 14986895.75,
		"hash": "8c4762d8df0d5b96b221cb0f508cf97848ac669a15b508fcb3494948d2ecc962"
	},
	{
		"id": "3b210be8c5aa",
		"ts": "2026-07-16T19:03:57.607Z",
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
		"liquidityUsd": 1149932.23,
		"hash": "3b210be8c5aabbdb1b5d20467375f4202f0dc10965d69b665b35dd90a610e580"
	},
	{
		"id": "8bb0fc8b4b6c",
		"ts": "2026-07-16T19:03:57.845Z",
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
		"liquidityUsd": 29825192.94,
		"hash": "8bb0fc8b4b6c5134d979151d77185aac64af35b48f53ad263c0f4fd02363f278"
	},
	{
		"id": "319d0e88fa4c",
		"ts": "2026-07-16T19:03:58.078Z",
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
		"liquidityUsd": 4825266.57,
		"hash": "319d0e88fa4ce55719478c31193f361583c46d51c8c9ef90ce227e409d275106"
	},
	{
		"id": "e44cd71a4b1c",
		"ts": "2026-07-16T19:03:58.366Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 995879.33,
		"hash": "e44cd71a4b1ca10b01fc6e8339a060693ae3023afa265485ab825bb9e7d7b552"
	},
	{
		"id": "5de492d8116a",
		"ts": "2026-07-16T19:03:58.651Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29825192.97,
		"hash": "5de492d8116a8ef32a9809d3d98edaeb4c8db66e5a16389ae643de09f8c16b4f"
	},
	{
		"id": "b7ac399a2475",
		"ts": "2026-07-16T19:03:58.891Z",
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
		"liquidityUsd": 2501885.85,
		"hash": "b7ac399a24755ff86e71299b8424a1270e476c0c85225370724ba6530623a2fa"
	},
	{
		"id": "29e7161d1292",
		"ts": "2026-07-16T19:03:59.137Z",
		"symbol": "jesse",
		"token": "0x50F88fe97f72CD3E75b9Eb4f747F59BcEBA80d59",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 877036.34,
		"hash": "29e7161d1292595338027f38c61ac29e520bb487d4e04ee4199ab00d1847548a"
	},
	{
		"id": "80ec0a8cef9c",
		"ts": "2026-07-16T19:03:59.376Z",
		"symbol": "doji",
		"token": "0x693B8De886712f0039EEf578bbE5aC7ea3B598CE",
		"score": 86,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.72,
		"flags": [
			"volume_liquidity_anomaly",
			"owner_not_renounced"
		],
		"liquidityUsd": 182723.67,
		"hash": "80ec0a8cef9caa22f3e1b6fb36bdaaca13e6301c17f0464626de58685b666b73"
	}
]
