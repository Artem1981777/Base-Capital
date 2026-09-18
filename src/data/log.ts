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
	"updatedAt": "2026-09-18T02:59:35.773Z",
	"tokensScored": 17773,
	"verdictsIssued": 17773,
	"safe": 15045,
	"risky": 1299,
	"likelyRug": 1429,
	"ticks": 1014
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "70422a8c46ab",
		"ts": "2026-09-18T02:59:31.592Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128191324.75,
		"hash": "70422a8c46ab67c38933a1217d950e51568c57509f140bdb8ca1c0e02d92a358"
	},
	{
		"id": "c017ad24f7fa",
		"ts": "2026-09-18T02:59:31.840Z",
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
		"liquidityUsd": 16962690.54,
		"hash": "c017ad24f7faff631e6eb0c470b157a383552eecb38be1558157e2e387c3c1bc"
	},
	{
		"id": "6761486d0d0c",
		"ts": "2026-09-18T02:59:32.082Z",
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
		"liquidityUsd": 960085.89,
		"hash": "6761486d0d0ce3e3b8ac63d05b5ee8b55ac89263a0c3421c3714b2ff00a8ffd2"
	},
	{
		"id": "4f82b9e6a55c",
		"ts": "2026-09-18T02:59:32.317Z",
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
		"liquidityUsd": 35189806.88,
		"hash": "4f82b9e6a55cf478a07aeb88564d44ba214045f23025e4df7abac4000d18b87e"
	},
	{
		"id": "03039d820877",
		"ts": "2026-09-18T02:59:32.554Z",
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
		"liquidityUsd": 3981078.61,
		"hash": "03039d8208778ef4c6f2e2bb64175a7e210dec43010a34b3d99e63dce0d09003"
	},
	{
		"id": "e62ab3f1e794",
		"ts": "2026-09-18T02:59:32.819Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1164503.15,
		"hash": "e62ab3f1e794cd9eb84005311d85fdc1b708884f7d58b579b721cf0511f393aa"
	},
	{
		"id": "7cde9cc9640f",
		"ts": "2026-09-18T02:59:33.055Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35189806.88,
		"hash": "7cde9cc9640f0432f764cb7fad4f30e958a05a9c232fca47921c35b178affdf1"
	},
	{
		"id": "28ef1798b8b5",
		"ts": "2026-09-18T02:59:33.294Z",
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
		"liquidityUsd": 1048267.21,
		"hash": "28ef1798b8b551159975626a0fb4a7384fb553da8db024131efab99902d1f1dd"
	},
	{
		"id": "09159ea9df66",
		"ts": "2026-09-18T02:59:33.528Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1351461.82,
		"hash": "09159ea9df66076f5b7af18bea67c9c2f0359136469f0628be9555685ec4b898"
	},
	{
		"id": "7225235a832b",
		"ts": "2026-09-18T02:59:33.761Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1524088.24,
		"hash": "7225235a832b50589e86621be3ef7ad090f54077b0a272962c5cc571b43267b3"
	},
	{
		"id": "25bf7a18849c",
		"ts": "2026-09-18T02:59:33.978Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2917568.49,
		"hash": "25bf7a18849c2932b61d33ee58256034a330daacb2112612dc9a152d7403d39f"
	},
	{
		"id": "511971e2a3b1",
		"ts": "2026-09-18T02:59:34.196Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 15629319.08,
		"hash": "511971e2a3b19cdb3466403fca0a7fffcbbaff488947db2d2b3a6217f4e7a8d1"
	},
	{
		"id": "2695e743520e",
		"ts": "2026-09-18T02:59:34.415Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4610007.99,
		"hash": "2695e743520eef663135d833d7a4480988e045d150a93c9b025fa34cc37ba1dd"
	},
	{
		"id": "13b434f4b85b",
		"ts": "2026-09-18T02:59:34.639Z",
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
		"liquidityUsd": 522317.39,
		"hash": "13b434f4b85bc639cfacd9a8b37ef4395893d2e43b236ffeb6bb106e9c543ba5"
	},
	{
		"id": "5de0fdbeab7a",
		"ts": "2026-09-18T02:59:34.859Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1858395.85,
		"hash": "5de0fdbeab7a3d629ad99dfc6adadb6980371e44f47f7c962eb95049b0bcb668"
	},
	{
		"id": "2e5faefdd916",
		"ts": "2026-09-18T02:59:35.080Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1113223.51,
		"hash": "2e5faefdd91673d37c6982c6ccc2359cb4203f090718b2ff88b3e1b9b4addba3"
	},
	{
		"id": "6eedd8d38ed3",
		"ts": "2026-09-18T02:59:35.298Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 186767.39,
		"hash": "6eedd8d38ed30b9c61dc3e81a24e6ecc903aaad0c6d2abac18ca8ea68c4d7245"
	},
	{
		"id": "edef70265a6b",
		"ts": "2026-09-18T02:59:35.517Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 367229.78,
		"hash": "edef70265a6b15aaecabd4da61fc7934f01d68a4bfacb077c700860af237c939"
	},
	{
		"id": "4a206677898d",
		"ts": "2026-09-18T02:59:35.773Z",
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
		"liquidityUsd": 598034.69,
		"hash": "4a206677898d52e48587e21452bef321b0cff80b9261a42f2fe6f99fc0d24fe4"
	},
	{
		"id": "f83455c1057f",
		"ts": "2026-09-17T23:52:47.758Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 127836071.3,
		"hash": "f83455c1057f9c3edee9e6213739e4c4283ddb682a934105287cba48317b5249"
	},
	{
		"id": "8a3d99b3834d",
		"ts": "2026-09-17T23:52:48.007Z",
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
		"liquidityUsd": 16728610.71,
		"hash": "8a3d99b3834d26300fc487eaf0f0b0f44bb5d766647014430bdc65435bac11dd"
	},
	{
		"id": "8c245c819cc0",
		"ts": "2026-09-17T23:52:48.254Z",
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
		"liquidityUsd": 954308.09,
		"hash": "8c245c819cc0c6a360ccf28bc65eb5a0a7ad8e614f7cb6f90e923d630aa3b16e"
	},
	{
		"id": "2249743986c8",
		"ts": "2026-09-17T23:52:48.515Z",
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
		"liquidityUsd": 35012819.57,
		"hash": "2249743986c8b8e15819644ac0805b7dc992d0177bee1b540d4b7e2ca57a01b8"
	},
	{
		"id": "0450eb4a20ac",
		"ts": "2026-09-17T23:52:48.762Z",
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
		"liquidityUsd": 3902630.28,
		"hash": "0450eb4a20ac741590c618fa7b55671bcd10c4bb288d3e5c4e34f55ec22d1547"
	},
	{
		"id": "238c0083f1dc",
		"ts": "2026-09-17T23:52:49.044Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1152679.54,
		"hash": "238c0083f1dc5042f91dea921d93450583c56619e3565a10bc03aa1e56acac18"
	},
	{
		"id": "c329b701b963",
		"ts": "2026-09-17T23:52:49.301Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35012819.57,
		"hash": "c329b701b963456ffc37201dfae2668b41face1502e50c39f3f73a4db9005545"
	},
	{
		"id": "7400e11116c8",
		"ts": "2026-09-17T23:52:49.550Z",
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
		"liquidityUsd": 1078632.3,
		"hash": "7400e11116c8da657538c27d026f877040e7573335a60a3c50135272b32e92df"
	},
	{
		"id": "bb3b489e79bd",
		"ts": "2026-09-17T23:52:49.793Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1340969.81,
		"hash": "bb3b489e79bdc21428ce88b7c6d2f6bb0fe27001653b770d4e1f750e6c8b4c40"
	},
	{
		"id": "9fabc0fd889d",
		"ts": "2026-09-17T23:52:50.059Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1553010.97,
		"hash": "9fabc0fd889d58191772fe1f01db6fd166334e3a338da1690de6bfa0949c4af4"
	},
	{
		"id": "9095f100f033",
		"ts": "2026-09-17T23:52:50.289Z",
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
		"liquidityUsd": 15666897.42,
		"hash": "9095f100f0336f344bf1ffc76dbfda874614e664c340815890760e4b39cb1a05"
	},
	{
		"id": "beb828fc3dca",
		"ts": "2026-09-17T23:52:50.522Z",
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
		"liquidityUsd": 2851692.15,
		"hash": "beb828fc3dcafb719b62cf056af30b4e7e7633e881b250202a783f5977197f68"
	},
	{
		"id": "3ec42bd8d8f0",
		"ts": "2026-09-17T23:52:50.767Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4597675.18,
		"hash": "3ec42bd8d8f09099536961e78d97651ef767ceef39a87c9cf06626d23e699ce6"
	},
	{
		"id": "e79e5486dca2",
		"ts": "2026-09-17T23:52:51.000Z",
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
		"liquidityUsd": 541197.16,
		"hash": "e79e5486dca22e3e307690ea72955a99ce353ece44ca5fd4c57651da90fc32d7"
	},
	{
		"id": "c4922cd59a99",
		"ts": "2026-09-17T23:52:51.237Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1139667.34,
		"hash": "c4922cd59a9959e39a40216489b752cc5ac5a8b72d0e99e2f44d54e834f3d632"
	},
	{
		"id": "efeb5fadf223",
		"ts": "2026-09-17T23:52:51.481Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1849003.35,
		"hash": "efeb5fadf223826badb68471018f694d3d5684da063a70ec06c7def319a1b168"
	},
	{
		"id": "b1f7236bc731",
		"ts": "2026-09-17T23:52:51.713Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 177993.59,
		"hash": "b1f7236bc7319301c514784d8ae0ea1e3721bac9417d9e2caf2ba139036acbec"
	},
	{
		"id": "374bcd788cd6",
		"ts": "2026-09-17T23:52:51.943Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 377543.32,
		"hash": "374bcd788cd697636001510365222f612aa0d4076e551869adcb545a91de1dc7"
	},
	{
		"id": "dbb0c7ab69a4",
		"ts": "2026-09-17T23:52:52.189Z",
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
		"liquidityUsd": 600142.33,
		"hash": "dbb0c7ab69a48d6e01dd23295518f448c9f54f54183a26d8e39d1f245cf70bc0"
	},
	{
		"id": "0df42e5f8021",
		"ts": "2026-09-17T21:53:47.094Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128193658.04,
		"hash": "0df42e5f8021511c52d84ac315cca1054515d9971317239ab0d1e6898cabe786"
	},
	{
		"id": "50023403d0d8",
		"ts": "2026-09-17T21:53:47.561Z",
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
		"liquidityUsd": 16689750.79,
		"hash": "50023403d0d865114664f453d1249d5eb819c59ae7975e3f91685a6c7723dbda"
	},
	{
		"id": "bbae9fd3639b",
		"ts": "2026-09-17T21:53:47.750Z",
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
		"liquidityUsd": 948426.75,
		"hash": "bbae9fd3639b0fa93e4fb6f48faabeaabe0e75d3323e50b5dce640be92c11fba"
	},
	{
		"id": "be1880146973",
		"ts": "2026-09-17T21:53:47.949Z",
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
		"liquidityUsd": 34995847.1,
		"hash": "be1880146973f62cae849905256a8d59cec9ceb983f1bffa7385335d91c745c7"
	},
	{
		"id": "418a51317dd8",
		"ts": "2026-09-17T21:53:48.166Z",
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
		"liquidityUsd": 3901507.21,
		"hash": "418a51317dd8a0e2c9f6222b654a680ea520a49842399a01fc6165b97ed85b36"
	},
	{
		"id": "dcd69bdc2424",
		"ts": "2026-09-17T21:53:48.365Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1151619.65,
		"hash": "dcd69bdc242409a9a39226a2210d4c03bef0c5cdd0f24e94470670bf2c5cdb3d"
	},
	{
		"id": "6ccfb81498c7",
		"ts": "2026-09-17T21:53:48.568Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1556661.67,
		"hash": "6ccfb81498c753c9701d6307624c15592889c0b22c6baa03b632412e19325cf6"
	},
	{
		"id": "7466f3d1224c",
		"ts": "2026-09-17T21:53:48.771Z",
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
		"liquidityUsd": 1080607.5,
		"hash": "7466f3d1224c00dfecdc40b4ff88810a4f7fc883419f5b1851b37d72d9f34a81"
	},
	{
		"id": "930db93f81ab",
		"ts": "2026-09-17T21:53:48.959Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1344719.39,
		"hash": "930db93f81abdca45c4d9ab103f29bbeec1800f76d95dc758eb6002e809108b5"
	},
	{
		"id": "787315f70968",
		"ts": "2026-09-17T21:53:49.152Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1556661.67,
		"hash": "787315f70968015bac26aaf9e7ed352fa17f4a9c11e5411e45e2b97c127330d0"
	},
	{
		"id": "e131ce13f902",
		"ts": "2026-09-17T21:53:49.342Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 15446786.44,
		"hash": "e131ce13f9028a94b5a0d8b2b02ba0b5a51380f699b3b2e7b868bdaf084d9b32"
	},
	{
		"id": "1752996dc6d0",
		"ts": "2026-09-17T21:53:49.542Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2864650.6,
		"hash": "1752996dc6d0d9b02cdc6edbcdfe9c5b9f3c4e408f99004506929793fc2a3322"
	},
	{
		"id": "22fef1ce900c",
		"ts": "2026-09-17T21:53:49.783Z",
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
		"liquidityUsd": 542057.74,
		"hash": "22fef1ce900c90cc5fb696abd5238766624c01c1c58bfa3bd53b405999abbb87"
	},
	{
		"id": "dfeb3b909e8a",
		"ts": "2026-09-17T21:53:50.033Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4565918.26,
		"hash": "dfeb3b909e8ac469adad3f410ad44ddede9d74bbae24c78384af869c614d1016"
	},
	{
		"id": "0777dce1cd9c",
		"ts": "2026-09-17T21:53:50.253Z",
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
		"liquidityUsd": 1105681.65,
		"hash": "0777dce1cd9c40e138eede324975c89688498e37657ab346fa56c57cbcfe76cf"
	},
	{
		"id": "c8ddfcb27535",
		"ts": "2026-09-17T21:53:50.459Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1850618.67,
		"hash": "c8ddfcb275357be4692689a991fe6c2c8344e2a199f7dde44203992cc606ebff"
	},
	{
		"id": "d82fd4172118",
		"ts": "2026-09-17T21:53:50.679Z",
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
		"liquidityUsd": 613335.86,
		"hash": "d82fd417211865041aa2f6f8f8ba062936bef915c4d89d8ec2bb2168757aa9ce"
	},
	{
		"id": "3d734fa763fd",
		"ts": "2026-09-17T21:53:50.882Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 387700.26,
		"hash": "3d734fa763fd2d459f4d01695c86e3e61f292d3103b73804e6bf6a54162d3135"
	},
	{
		"id": "f7611c423a6b",
		"ts": "2026-09-17T21:53:51.123Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 187711.6,
		"hash": "f7611c423a6b6e2183b9d6c5f2d57fd1e2da52155a3f4602c3e9a379270aaf00"
	},
	{
		"id": "e501f9abd226",
		"ts": "2026-09-17T18:46:40.050Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 128178033.08,
		"hash": "e501f9abd2264b50c77c7cf5abc800f94817c178d477af572073cc31965e48bc"
	},
	{
		"id": "e61d5f8de721",
		"ts": "2026-09-17T18:46:40.733Z",
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
		"liquidityUsd": 12655844.86,
		"hash": "e61d5f8de721f4a9c9b0b64cf71d00a670c6546d2ba4014ae96e9dce4c2ce01a"
	},
	{
		"id": "adf698069d7a",
		"ts": "2026-09-17T18:46:41.001Z",
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
		"liquidityUsd": 942311.32,
		"hash": "adf698069d7a1d7b949ace388518efdc0aac3b970ec28d29ede654b161135a5e"
	},
	{
		"id": "7b0e68876769",
		"ts": "2026-09-17T18:46:41.254Z",
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
		"liquidityUsd": 35235234.29,
		"hash": "7b0e688767691995ba977f8e376dab1240ea3bcc92bcd2384f261be44afadf9f"
	},
	{
		"id": "a57d53778fca",
		"ts": "2026-09-17T18:46:41.502Z",
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
		"liquidityUsd": 3947902.32,
		"hash": "a57d53778fca89accf2daffa89d4a51a2d004d5c0d5fb82b09bbafab7073074e"
	},
	{
		"id": "6bea2b51364b",
		"ts": "2026-09-17T18:46:41.756Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1147644.97,
		"hash": "6bea2b51364bcd295502ef87a8ec7056501b044f98d3763c20ed0e2635483988"
	},
	{
		"id": "b94b052f741e",
		"ts": "2026-09-17T18:46:42.002Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35235234.29,
		"hash": "b94b052f741e89b9262e89a42ce78fc41c48f551224db9499c3d80d744827911"
	},
	{
		"id": "fba16cc22945",
		"ts": "2026-09-17T18:46:42.258Z",
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
		"liquidityUsd": 1083082.17,
		"hash": "fba16cc22945006d9810cc5fd9c0d203cdd1ce6eaf39bfacad90e64b0fe453b2"
	},
	{
		"id": "8daa3fcde33d",
		"ts": "2026-09-17T18:46:42.506Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1335560.73,
		"hash": "8daa3fcde33dfe2d85809b11ceb19b5b0b81e44ba410555f89a9f44c6994112a"
	},
	{
		"id": "7f381c91481a",
		"ts": "2026-09-17T18:46:42.985Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1549770.62,
		"hash": "7f381c91481aca07aed90f717cf0d3797b165e3240819fc40ceddbf30f7e7bd0"
	},
	{
		"id": "a2e7d4ca3a0c",
		"ts": "2026-09-17T18:46:43.222Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2981301.91,
		"hash": "a2e7d4ca3a0cb5a563494269d5834fa0774927a653469cbdf47b0dc8b4b0ad21"
	},
	{
		"id": "9dc14bdc9266",
		"ts": "2026-09-17T18:46:43.456Z",
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
		"liquidityUsd": 580711.51,
		"hash": "9dc14bdc9266b9f822a9aa5185a6deb67863243178cc20261f42eaf9dcccd5c4"
	},
	{
		"id": "b10067f97a25",
		"ts": "2026-09-17T18:46:43.698Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 15338033.58,
		"hash": "b10067f97a254625ba7bace63fff6b2ec1a26a11c02112fca51177d1ca0e35b0"
	},
	{
		"id": "4f8929f2ba42",
		"ts": "2026-09-17T18:46:43.937Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1077350.74,
		"hash": "4f8929f2ba423770a39f772998ceaabebf4482590ab4f603e6499eca0ec8a0af"
	},
	{
		"id": "4cdcd8ef4d5f",
		"ts": "2026-09-17T18:46:44.172Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1871351.45,
		"hash": "4cdcd8ef4d5f203660cf11fec6b889d500dc762ba443fd6ffd5a686b5fd0d6e6"
	},
	{
		"id": "0192c546f033",
		"ts": "2026-09-17T18:46:44.802Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 182932.53,
		"hash": "0192c546f03357c2a5f916de2f60953b51262da0699520084e22e14f08dd5202"
	},
	{
		"id": "81b01c7dfd0a",
		"ts": "2026-09-17T18:46:45.037Z",
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
		"liquidityUsd": 611703.46,
		"hash": "81b01c7dfd0aa31a18b3fc902ad48799b2c957137d15be2e1874e18ef5e9fa03"
	},
	{
		"id": "f5409592a7d4",
		"ts": "2026-09-17T18:46:45.270Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 505085.69,
		"hash": "f5409592a7d406669ba57411a62f3bf88dc2b2009f0d83f2a68608d718c6589b"
	},
	{
		"id": "d07e6dcfe3b1",
		"ts": "2026-09-17T18:46:45.507Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4509610.22,
		"hash": "d07e6dcfe3b1ea6ba6e660df8b2d91cece6448e7fb7e10484b10d7cedc14ec23"
	},
	{
		"id": "1be5f47098f9",
		"ts": "2026-09-17T14:38:20.400Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 127770182.87,
		"hash": "1be5f47098f95ad65f5db05f20aa651b379b521b4b6ec1bcc07640a2b6499fd6"
	},
	{
		"id": "a450a9bd07a1",
		"ts": "2026-09-17T14:38:20.855Z",
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
		"liquidityUsd": 16765629.91,
		"hash": "a450a9bd07a1a52b1ac0db19c36193f075b1381fd76ea02608b6a62b9606f347"
	},
	{
		"id": "123fd695b43c",
		"ts": "2026-09-17T14:38:21.133Z",
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
		"liquidityUsd": 949633.38,
		"hash": "123fd695b43c7786f36e3cd114eb3d530ca1115a8c97be7f96aaba8d0050bde0"
	},
	{
		"id": "f82058ad3d7c",
		"ts": "2026-09-17T14:38:21.437Z",
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
		"liquidityUsd": 35304948.27,
		"hash": "f82058ad3d7c26d1c3bc0548bac32757723aaf86fadd3e46ab10a0fccfc83550"
	},
	{
		"id": "ba208a6132eb",
		"ts": "2026-09-17T14:38:21.698Z",
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
		"liquidityUsd": 3928606.98,
		"hash": "ba208a6132ebf7a73050ecb7e9b844d7b1f75a7f3d1b91fe4f758f706dab5b91"
	},
	{
		"id": "8585145db733",
		"ts": "2026-09-17T14:38:21.947Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1164848.72,
		"hash": "8585145db733a6bf7afe9f2af29f398f98e0905783b745451234888e4e987e4f"
	},
	{
		"id": "5e8a224ea077",
		"ts": "2026-09-17T14:38:22.194Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 35304948.27,
		"hash": "5e8a224ea0779b8407e6d1a615fc2bef477f3211925bff9715c98eafbb825059"
	},
	{
		"id": "69e885c27372",
		"ts": "2026-09-17T14:38:22.445Z",
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
		"liquidityUsd": 1090370.36,
		"hash": "69e885c27372fd037701043448433af149ccff20761c8536c0bdc010103b5cdd"
	},
	{
		"id": "41762f665d3e",
		"ts": "2026-09-17T14:38:22.701Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1547479.94,
		"hash": "41762f665d3e57027004add09c34c340d439cf09a6535a987e471c3de013dc6b"
	},
	{
		"id": "b86b40b7425a",
		"ts": "2026-09-17T14:38:22.948Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2934311.68,
		"hash": "b86b40b7425a3d002ded098f6c48203acda0058124036d255f685fdab9a44128"
	},
	{
		"id": "83069fbd703d",
		"ts": "2026-09-17T14:38:23.182Z",
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
		"liquidityUsd": 523833.58,
		"hash": "83069fbd703d24193f51a7c56552a5df60dbbc9635ff9e2d7a9afb867259338e"
	},
	{
		"id": "97b06839f896",
		"ts": "2026-09-17T14:38:23.420Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 15517293.74,
		"hash": "97b06839f896808dc2a4917c6d043a3e0bf1c5a3032190c382ff04484cea9eb1"
	},
	{
		"id": "3a6c4b966207",
		"ts": "2026-09-17T14:38:23.653Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1096141.58,
		"hash": "3a6c4b966207188477545708598283088e6d432ce3eb929bc3cc4ae32b2d5903"
	},
	{
		"id": "9ba908f3b168",
		"ts": "2026-09-17T14:38:23.884Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1964218.58,
		"hash": "9ba908f3b168867820dc233b0c225a499578c35a6c30cbe22e316e1571100b98"
	},
	{
		"id": "81406015191a",
		"ts": "2026-09-17T14:38:24.120Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1291127.65,
		"hash": "81406015191a80ed2ff0cf50d3c06ff0a1a41ddc7708e2b65d611d1815cbccd1"
	},
	{
		"id": "e39e01920275",
		"ts": "2026-09-17T14:38:24.352Z",
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
		"liquidityUsd": 622471.18,
		"hash": "e39e0192027586739927a5c52cce6cd84b8f16ca96f0c6c4e1d8149714291a7e"
	},
	{
		"id": "c189be2ab436",
		"ts": "2026-09-17T14:38:24.584Z",
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
		"liquidityUsd": 1419753.39,
		"hash": "c189be2ab4369abe7aa10c420c2343541d43078b8165a93b789817aaa57a7cbc"
	},
	{
		"id": "bc8f2fad514c",
		"ts": "2026-09-17T14:38:24.820Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 550257.53,
		"hash": "bc8f2fad514c91a734a7970337c1f9a0d2c2f0745de1bec44112ced3608b5ac2"
	},
	{
		"id": "98ffd628c2e6",
		"ts": "2026-09-17T14:38:25.054Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 592861.6,
		"hash": "98ffd628c2e6d3164ceb4a90f55a6c5c863bb5c9413b23204cbd46a5c97ab61a"
	},
	{
		"id": "a58fe86b33fa",
		"ts": "2026-09-17T09:08:57.551Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 126826754.08,
		"hash": "a58fe86b33faab4417af92baf493d517620b42f72768208b4cbd8c7eac0accb0"
	},
	{
		"id": "f260e3c7571b",
		"ts": "2026-09-17T09:08:58.038Z",
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
		"liquidityUsd": 15912943.1,
		"hash": "f260e3c7571bf32d2c38832e7951a1a1158d8979b50733568962b40ac3318329"
	},
	{
		"id": "56b8cae15d8b",
		"ts": "2026-09-17T09:08:58.295Z",
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
		"liquidityUsd": 937219.93,
		"hash": "56b8cae15d8b4fdc625c1619e48006fead12bf9d5a5481aa01117d00731c0bd9"
	},
	{
		"id": "770a59c72310",
		"ts": "2026-09-17T09:08:58.530Z",
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
		"liquidityUsd": 34030693.84,
		"hash": "770a59c72310faa60fe5ea5f17d59ec61abd43d1fd2ecb5b6761250636d77fad"
	},
	{
		"id": "09368f12c3ad",
		"ts": "2026-09-17T09:08:58.843Z",
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
		"liquidityUsd": 3887334.84,
		"hash": "09368f12c3ad60b738a50946cf7e4cabc13db7255ccc1c1c79d0efc991637e99"
	},
	{
		"id": "4fcf1fcfe5b3",
		"ts": "2026-09-17T09:08:59.089Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1149960.26,
		"hash": "4fcf1fcfe5b3a9565225cffa267323b3de75f2d922552570a1f3b2d2105d31d9"
	},
	{
		"id": "8d175d1110cd",
		"ts": "2026-09-17T09:08:59.337Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2212360.59,
		"hash": "8d175d1110cdecfd9cdd13c36a9051368bf07fb724a576ec7d72405a73e9aefd"
	},
	{
		"id": "0e529c5ddde7",
		"ts": "2026-09-17T09:08:59.589Z",
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
		"liquidityUsd": 1078981.35,
		"hash": "0e529c5ddde7bc2180d7d14e0279727c0f157ce6f10df90c5ff81783b423a7e1"
	},
	{
		"id": "83c8ea106121",
		"ts": "2026-09-17T09:08:59.827Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 516238.84,
		"hash": "83c8ea10612129de8f60dbef79cd6f1e12234b702041c1c45f712e3ba61b6b22"
	},
	{
		"id": "e0a2cbad4082",
		"ts": "2026-09-17T09:09:00.075Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1508350.69,
		"hash": "e0a2cbad4082ce83f610a579747cd61b8a7f6fdaa5e2b7b41c9209dd13f1d871"
	},
	{
		"id": "db23ea64a85d",
		"ts": "2026-09-17T09:09:00.313Z",
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
		"liquidityUsd": 15484989.03,
		"hash": "db23ea64a85d72955c11a3275834ebfb2e9002cf4f685d28279c74967e6c415a"
	},
	{
		"id": "2dc72d9d4315",
		"ts": "2026-09-17T09:09:00.565Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 88,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.76,
		"flags": [
			"owner_not_renounced",
			"high_holder_concentration"
		],
		"liquidityUsd": 1091500.11,
		"hash": "2dc72d9d4315815894136d4ada1e390ccd3b606570a8939ebc80bd5dfe30e47c"
	},
	{
		"id": "745112db8653",
		"ts": "2026-09-17T09:09:01.094Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2872515.31,
		"hash": "745112db865311f74f840e9f79bf099c9b57236bcee88eb89508639af175af69"
	},
	{
		"id": "5e704e6de276",
		"ts": "2026-09-17T09:09:01.347Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1391677.96,
		"hash": "5e704e6de2763a26a48e9b15d8f9fbeb580d857e13bd6289a57391c60bea358c"
	},
	{
		"id": "c70f5147f953",
		"ts": "2026-09-17T09:09:01.592Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1945566.54,
		"hash": "c70f5147f9532c3a0f705032c2b5605123a27628990ebfb02be70ba10d9b733d"
	},
	{
		"id": "da5450cd9c8a",
		"ts": "2026-09-17T09:09:01.844Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 990789.1,
		"hash": "da5450cd9c8a7ec986bfcbc2f904e8ec3a0bb0b418ce0b523a1d07f56bf82834"
	},
	{
		"id": "78fde2300e21",
		"ts": "2026-09-17T09:09:02.118Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 625702.33,
		"hash": "78fde2300e218f2a54de850ffcc507d030918fc8264784e885cba308a4557154"
	},
	{
		"id": "b5d6ce270bfb",
		"ts": "2026-09-17T09:09:02.357Z",
		"symbol": "NOCK",
		"token": "0x9B5E262cF9bb04869ab40b19AF91D2dc85761722",
		"score": 22,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.56,
		"flags": [
			"mintable",
			"owner_not_renounced",
			"sim_honeypot"
		],
		"liquidityUsd": 1497187.17,
		"hash": "b5d6ce270bfbc828b89259e2db30d34728aa758930d1e52aba5d7f01f4b007cc"
	},
	{
		"id": "a4f98626a36b",
		"ts": "2026-09-17T09:09:02.603Z",
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
		"liquidityUsd": 247096.9,
		"hash": "a4f98626a36b217b88b3ab49f4be3ca30dc5f6cf1411af21c525c7fb062d1b33"
	},
	{
		"id": "3dfea9a10367",
		"ts": "2026-09-17T03:13:06.216Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 126541462.84,
		"hash": "3dfea9a103673c5ea36b5d03b39e4a05cd0608f5dbc08f8e6928156e73d9ce10"
	},
	{
		"id": "463466ee6f8e",
		"ts": "2026-09-17T03:13:06.472Z",
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
		"liquidityUsd": 14966704.76,
		"hash": "463466ee6f8ed639406159b3f14420cbfec34425c20b0a85f17329b559b3fa4c"
	},
	{
		"id": "d5c8cf03d78f",
		"ts": "2026-09-17T03:13:06.731Z",
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
		"liquidityUsd": 934380.23,
		"hash": "d5c8cf03d78f03811f27f38dedf0e26854f22a1c84c2b40259d44a8be729dcbc"
	},
	{
		"id": "b7c67867fdc7",
		"ts": "2026-09-17T03:13:06.974Z",
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
		"liquidityUsd": 33911809.46,
		"hash": "b7c67867fdc7b58ffe7526f66dc44e6d75e7c3648350f8cc32bafa6b720030b4"
	},
	{
		"id": "fcb9766992ec",
		"ts": "2026-09-17T03:13:07.247Z",
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
		"liquidityUsd": 3873826.32,
		"hash": "fcb9766992ecc5c66fc619c58fe938897c9f6d544688b6daeaccfb69abff7a47"
	},
	{
		"id": "494dce41d61e",
		"ts": "2026-09-17T03:13:07.487Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1145842.11,
		"hash": "494dce41d61e2dfeb9770331f67222ed2d0c641a2cd927235c359ff51273b177"
	},
	{
		"id": "9532b37fedab",
		"ts": "2026-09-17T03:13:07.744Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2397423.16,
		"hash": "9532b37fedab088f479e76891b178f65d31ee768917f6e4f7ba5b4eed9d8190c"
	},
	{
		"id": "61e65374c56c",
		"ts": "2026-09-17T03:13:08.047Z",
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
		"liquidityUsd": 1073136.51,
		"hash": "61e65374c56c6e0c73c5f18ac3bbf6b8d3b502897ddc50e95a12d67a12edbb86"
	},
	{
		"id": "df5028923f1b",
		"ts": "2026-09-17T03:13:08.304Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 514787.55,
		"hash": "df5028923f1badd605a4e78455c2558a5edfd1cdf6f4858ed864d525bcb4d148"
	},
	{
		"id": "7330c48491b8",
		"ts": "2026-09-17T03:13:08.546Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1420240.9,
		"hash": "7330c48491b8b0c6970e9fce70ec77d12a61fad344acb795da5603c3f4fcb692"
	},
	{
		"id": "6acce8e3389f",
		"ts": "2026-09-17T03:13:08.776Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1012383.47,
		"hash": "6acce8e3389f4a97000697c122a1c25327dc5bd92460e9bf9963fb59ab28d585"
	},
	{
		"id": "c73c35e75d6f",
		"ts": "2026-09-17T03:13:09.004Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14554200.14,
		"hash": "c73c35e75d6fb48a9e92207f8ed8a42586e3e5785ac728057a07f91ec8ec6e80"
	},
	{
		"id": "3552d9afdc7c",
		"ts": "2026-09-17T03:13:09.247Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1113475.2,
		"hash": "3552d9afdc7c8cda32bfe1f55e2c4684ff4994fed397f52d4683b0e5680e62c7"
	},
	{
		"id": "34b26ebef231",
		"ts": "2026-09-17T03:13:09.481Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245452.8,
		"hash": "34b26ebef23151f3964271b3e9093bb2b2176ae47e8a4eeb988415f5bd1decdf"
	},
	{
		"id": "92b5212ee5e6",
		"ts": "2026-09-17T03:13:09.709Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1376784.08,
		"hash": "92b5212ee5e66e5c39d701cb6ab9ecae116973d34ec40be51e4925f709ac2b17"
	},
	{
		"id": "d9dc1e629f90",
		"ts": "2026-09-17T03:13:09.956Z",
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
		"liquidityUsd": 1463429.28,
		"hash": "d9dc1e629f9081677efbc58da539de249da9886143792f558a4192b2896d2625"
	},
	{
		"id": "14b456b404b9",
		"ts": "2026-09-17T03:13:10.206Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2899847.7,
		"hash": "14b456b404b99a79f5390d1afb03c9c5546f881df6bc119e294a2672f814e365"
	},
	{
		"id": "523d0ef5928c",
		"ts": "2026-09-17T03:13:10.442Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1795945.83,
		"hash": "523d0ef5928c0eb6608b1779a9d5db41f7571c0b05c7eec4980e48167e99e97d"
	},
	{
		"id": "a3bc1761fc97",
		"ts": "2026-09-17T03:13:10.670Z",
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
		"liquidityUsd": 616030.31,
		"hash": "a3bc1761fc97c2d0711a92d54826911db54142c8f6df6503fdcce9af6709ecf5"
	},
	{
		"id": "3122efa5dfcc",
		"ts": "2026-09-17T03:13:10.914Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 496312.44,
		"hash": "3122efa5dfcc0fa0f7298d6119f0ef41949b9ce6a2784a2ca83f133b2a909c86"
	},
	{
		"id": "6a9b55682c64",
		"ts": "2026-09-16T23:30:47.506Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 125681206.84,
		"hash": "6a9b55682c64ed9cbce3dd764c03c0acc517b6a2e3b4871eaefcf5810952b5ae"
	},
	{
		"id": "c36d579b05d6",
		"ts": "2026-09-16T23:30:47.763Z",
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
		"liquidityUsd": 12609596.9,
		"hash": "c36d579b05d6f4d65342534a69d85042086aaa0c2f2a77e16f66c98e74e83de1"
	},
	{
		"id": "4b56862d8707",
		"ts": "2026-09-16T23:30:48.008Z",
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
		"liquidityUsd": 924887.71,
		"hash": "4b56862d870755f2939396cc796bf50555d83f261069e83a9c632bb40425a03c"
	},
	{
		"id": "006dfa964e12",
		"ts": "2026-09-16T23:30:48.277Z",
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
		"liquidityUsd": 33715453.45,
		"hash": "006dfa964e121b71ab6a3b8a653d783b221309858fd7ae8170c25ed173075a7f"
	},
	{
		"id": "9359161eae66",
		"ts": "2026-09-16T23:30:48.536Z",
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
		"liquidityUsd": 3821139.98,
		"hash": "9359161eae66abca97d95c334a91193a7a6171e262d865e16fc2faecb59c60bb"
	},
	{
		"id": "ba00f82ee17b",
		"ts": "2026-09-16T23:30:48.790Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1146560.44,
		"hash": "ba00f82ee17b7c5b79a332e21efef73993829368888fcc3d3236ab7b8027f252"
	},
	{
		"id": "bcfa646dbf8f",
		"ts": "2026-09-16T23:30:49.056Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2336127.37,
		"hash": "bcfa646dbf8f071545e0c4a838f5d29b9cf47b43ac29e636df26993cdca97363"
	},
	{
		"id": "4a5e475ca747",
		"ts": "2026-09-16T23:30:49.335Z",
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
		"liquidityUsd": 1063977.6,
		"hash": "4a5e475ca7476d55c8d24c5afd7ba9128a70d60503aaa6305fa0e9951893b374"
	},
	{
		"id": "e32074257efe",
		"ts": "2026-09-16T23:30:49.597Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1010242.48,
		"hash": "e32074257efe56c38174252849fe39c12fb0761914ce28b986158b49df9fad11"
	},
	{
		"id": "828acdc598b0",
		"ts": "2026-09-16T23:30:49.862Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 500315.05,
		"hash": "828acdc598b087fbfe3c03181c51d795e8b594ec1b100b6f811bd78015f66b57"
	},
	{
		"id": "dfc1e9fc82a0",
		"ts": "2026-09-16T23:30:50.095Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1517576.77,
		"hash": "dfc1e9fc82a0117b7a05fcfe42d7c64332179396de20dec1d86ea3fdbb81ee4d"
	},
	{
		"id": "aedff46ed299",
		"ts": "2026-09-16T23:30:50.317Z",
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
		"liquidityUsd": 2907793.11,
		"hash": "aedff46ed299ee99bd9922061b667490e36567e9ca22410f61b6654d20f8aaae"
	},
	{
		"id": "61bb73a21634",
		"ts": "2026-09-16T23:30:50.550Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 245687.95,
		"hash": "61bb73a2163441f9ead568d806bdfc189fe2867517984d99653a7ba6f417bec2"
	},
	{
		"id": "2da79d3c9098",
		"ts": "2026-09-16T23:30:50.785Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1789560.06,
		"hash": "2da79d3c909877101819b984056401f73a4033aaec9f15ee6a966a5f4497af1d"
	},
	{
		"id": "33fa74a9d152",
		"ts": "2026-09-16T23:30:51.021Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1314621.29,
		"hash": "33fa74a9d152d2827e0cfe87aed58e9adac19abe2a33cebdc211b89fb4f13ef5"
	},
	{
		"id": "deed208ea7b9",
		"ts": "2026-09-16T23:30:51.254Z",
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
		"liquidityUsd": 1396104.2,
		"hash": "deed208ea7b9e3fe686ad5e9243cf519c04b6cf8ef603f5903c1b6e8044b1048"
	},
	{
		"id": "3f9387af3c77",
		"ts": "2026-09-16T23:30:51.487Z",
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
		"liquidityUsd": 585432.78,
		"hash": "3f9387af3c7756903e1eabb40a7d31d625ee0e298b4c652f76a728bc0e350608"
	},
	{
		"id": "f94a320175a9",
		"ts": "2026-09-16T23:30:51.725Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14014722.2,
		"hash": "f94a320175a91ab6f4616e8fc916957ed2ecf30cad66badffb01edc416fbaf70"
	},
	{
		"id": "8e728f5f03e9",
		"ts": "2026-09-16T23:30:51.961Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2835548.44,
		"hash": "8e728f5f03e925c14732967f25fe418a4af69fc764ae8a61672c6db05f80e4ab"
	},
	{
		"id": "0dce5b3ada6f",
		"ts": "2026-09-16T20:51:10.765Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 125808619.47,
		"hash": "0dce5b3ada6f5fae54f5a9edf965a5865f78c00316731300d1214828c224f809"
	},
	{
		"id": "bed2a57ec852",
		"ts": "2026-09-16T20:51:11.009Z",
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
		"liquidityUsd": 14309550.29,
		"hash": "bed2a57ec852a416682b89079d0e35ee45199f9180d2afee531d4dbbe17f6d68"
	},
	{
		"id": "dbce6c6dd9ff",
		"ts": "2026-09-16T20:51:11.230Z",
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
		"liquidityUsd": 922019.04,
		"hash": "dbce6c6dd9ffa103abb546fd0a9e353f5d6626f121ca4c6787c7a237f3c62563"
	},
	{
		"id": "4bb7d72132f2",
		"ts": "2026-09-16T20:51:11.446Z",
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
		"liquidityUsd": 33389470.67,
		"hash": "4bb7d72132f26670de7e29fa3e1b38254a2d7de2b301168a5167f966e2260721"
	},
	{
		"id": "26009f04a52c",
		"ts": "2026-09-16T20:51:11.659Z",
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
		"liquidityUsd": 3809696.72,
		"hash": "26009f04a52c7ef7561dcf9f40e503239b69cd6173b759bbacc763db8523e862"
	},
	{
		"id": "9c5d24590fd6",
		"ts": "2026-09-16T20:51:11.884Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1127033.02,
		"hash": "9c5d24590fd64c0439894f3f20f34716673e158ab349c925df4e38a77a2b0643"
	},
	{
		"id": "f84dbadd3f37",
		"ts": "2026-09-16T20:51:12.104Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1560936.75,
		"hash": "f84dbadd3f37804dc12f5fcf27677d00613a98851b7b093fc0340a68d92d9d46"
	},
	{
		"id": "f3d4fae89cde",
		"ts": "2026-09-16T20:51:12.332Z",
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
		"liquidityUsd": 1212115.18,
		"hash": "f3d4fae89cde0a72bff09e44321f4e8d823989bdeb4838bd16722925538bdaa3"
	},
	{
		"id": "424510e63ed4",
		"ts": "2026-09-16T20:51:12.567Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1017033.71,
		"hash": "424510e63ed45470c219b64eecf5664212de7da40e24ed42e498e8dbc4cc7c29"
	},
	{
		"id": "32c10b8d57a5",
		"ts": "2026-09-16T20:51:12.803Z",
		"symbol": "BLUECHIP",
		"token": "0xB200000000000000000000cFbdF64a8706a94a01",
		"score": 20,
		"rating": "critical",
		"verdict": "LIKELY_RUG",
		"confidence": 0.6,
		"flags": [
			"volume_liquidity_anomaly",
			"sim_honeypot"
		],
		"liquidityUsd": 478939.65,
		"hash": "32c10b8d57a58d1b8b52eee52d5559256cbeb2c5535c9ae64d76f80f52ade59d"
	},
	{
		"id": "fc819b0c8b9c",
		"ts": "2026-09-16T20:51:12.999Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1560936.75,
		"hash": "fc819b0c8b9cd5daa4d215485f3cb4155a9d7a702988fe9d555948553d618fcc"
	},
	{
		"id": "fc6f9d80a5b2",
		"ts": "2026-09-16T20:51:13.196Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2898806.07,
		"hash": "fc6f9d80a5b2de25a41ecb29b864260a9fc57fe16d3b64350cef6c3aec7a995a"
	},
	{
		"id": "87e860f61edf",
		"ts": "2026-09-16T20:51:13.394Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245966.84,
		"hash": "87e860f61edfb34a030d53b3db44b278b928ad08e2c4359d22eb69761612daba"
	},
	{
		"id": "0292faf2ac09",
		"ts": "2026-09-16T20:51:13.598Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 760627.62,
		"hash": "0292faf2ac095729de56c478d9ab464ac6ce4d47c505bdaa23ae064facb2d7d0"
	},
	{
		"id": "ef7e28d4b008",
		"ts": "2026-09-16T20:51:13.790Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1330719.02,
		"hash": "ef7e28d4b0086d77735bc5a36593aea2db866d1b7a74eda9a61afcecf3223d97"
	},
	{
		"id": "4eac07a761a4",
		"ts": "2026-09-16T20:51:13.986Z",
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
		"liquidityUsd": 1357315.25,
		"hash": "4eac07a761a463dbad7f1ebfb5536eb330513bdc388188a1e5c3d5901ff42cf7"
	},
	{
		"id": "5781d8ea5ab5",
		"ts": "2026-09-16T20:51:14.186Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 14020235.1,
		"hash": "5781d8ea5ab5551b40f39d11ff977a9e9f9758f873fdff24141f989ca8cd2d99"
	},
	{
		"id": "c92755f74080",
		"ts": "2026-09-16T20:51:14.386Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1118660.66,
		"hash": "c92755f74080e9697c25dc0044c757bdb25166a0eb3a4f164c50f99f6d42871f"
	},
	{
		"id": "d3fc1843a110",
		"ts": "2026-09-16T20:51:14.600Z",
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
		"liquidityUsd": 591081.36,
		"hash": "d3fc1843a110520da9326bf0b740ecb3e906a98a724fca3af47ef10446ae896a"
	},
	{
		"id": "7e0b1338078a",
		"ts": "2026-09-16T17:55:41.286Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 123684328.92,
		"hash": "7e0b1338078a918a294e90b1baf2c7d61a56e2d95583d763a05a4ef12548dfdf"
	},
	{
		"id": "04d9d3cc9532",
		"ts": "2026-09-16T17:55:41.582Z",
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
		"liquidityUsd": 12380681.47,
		"hash": "04d9d3cc9532263850144ec2f1c412ca9bb0072d568e83d9bca326cf17b1435a"
	},
	{
		"id": "52f76e80b036",
		"ts": "2026-09-16T17:55:41.910Z",
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
		"liquidityUsd": 909291.5,
		"hash": "52f76e80b03682b5e708feebc569723c9754c9c4997f620e1c0e77f1399c7726"
	},
	{
		"id": "d3c0bc0ceef4",
		"ts": "2026-09-16T17:55:42.206Z",
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
		"liquidityUsd": 33062523.58,
		"hash": "d3c0bc0ceef414f2f73c360855ba688acc89f2d440ea4a9cdd17d023a9872c0b"
	},
	{
		"id": "38a709bf5694",
		"ts": "2026-09-16T17:55:42.492Z",
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
		"liquidityUsd": 3695848.29,
		"hash": "38a709bf56947195692a095aec1f68eb9f5b4e8a212685cb2961edc7b7879d6f"
	},
	{
		"id": "1211d38dfc40",
		"ts": "2026-09-16T17:55:42.783Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1111090.9,
		"hash": "1211d38dfc406d3ee6b951b5492c5269b19cf9c474667e50220a0b4a138d50f3"
	},
	{
		"id": "e242817485b5",
		"ts": "2026-09-16T17:55:43.106Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1652961.18,
		"hash": "e242817485b553e4c271411a77a910860f4e3e6700127dc05e666a9d8bb6e07c"
	},
	{
		"id": "3738b14eff6a",
		"ts": "2026-09-16T17:55:43.386Z",
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
		"liquidityUsd": 1255808.74,
		"hash": "3738b14eff6a7e447cf79d1d5366bf0bf3ed51e548f9671ee642c295a66720c8"
	},
	{
		"id": "ae4e212710ce",
		"ts": "2026-09-16T17:55:43.687Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 992033.09,
		"hash": "ae4e212710ce82521c2d923b881bf85721faa5da2d579e95fdf061738f059373"
	},
	{
		"id": "22a1971d1f73",
		"ts": "2026-09-16T17:55:43.978Z",
		"symbol": "LAPTOP",
		"token": "0xB095274743941e953c746F9C228DA9c18Bb6ec29",
		"score": 84,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.68,
		"flags": [
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 1652961.18,
		"hash": "22a1971d1f7386cadaef5fe85fda5cc729d071452c337a86feb5896df593cd5f"
	},
	{
		"id": "bbb1ce4ea387",
		"ts": "2026-09-16T17:55:44.261Z",
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
		"liquidityUsd": 495492.2,
		"hash": "bbb1ce4ea387f4656eb2186fb6ebaaca35d33fda91374f23c659e265100cfa52"
	},
	{
		"id": "2bab2d9b8f6c",
		"ts": "2026-09-16T17:55:44.533Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 755108.41,
		"hash": "2bab2d9b8f6c2f98cdf4c70d2e5a7be2db8f42fd6b613c47f24395b3eb0958aa"
	},
	{
		"id": "393cecffbe78",
		"ts": "2026-09-16T17:55:44.804Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2783536.02,
		"hash": "393cecffbe78ef2510a17b5474310ec037b8afd9c5c073ce674563449f4a61ad"
	},
	{
		"id": "7e0c4e69434e",
		"ts": "2026-09-16T17:55:45.080Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244896.92,
		"hash": "7e0c4e69434ebbf6da51a8c5b4c6d20359d439042ed44fe31ae1b389e860589d"
	},
	{
		"id": "573eb462f88d",
		"ts": "2026-09-16T17:55:45.343Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1315741.28,
		"hash": "573eb462f88d46622ca5f84121871431700cd5620836f0c58ed9320137f22225"
	},
	{
		"id": "60d8d585df3a",
		"ts": "2026-09-16T17:55:45.611Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1786892.16,
		"hash": "60d8d585df3a8534d8a21c3863940fa36ec2cf2e4c82f4a11c91e8f9762737fa"
	},
	{
		"id": "1e3adbb060cc",
		"ts": "2026-09-16T17:55:45.898Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 478140.86,
		"hash": "1e3adbb060cc7a00ad6a565f7e17a869101e581e681b4e34483b615ba152bd4a"
	},
	{
		"id": "d1403275b23c",
		"ts": "2026-09-16T17:55:46.165Z",
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
		"liquidityUsd": 1332268,
		"hash": "d1403275b23c7e5563b0352cedcd128304da5e8f58fd361987c6395d76e45c30"
	},
	{
		"id": "08140ad15e60",
		"ts": "2026-09-16T17:55:46.434Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 455760.36,
		"hash": "08140ad15e600e6ee78d5c592ce762424f37b398cdc0f90fcd5049417a1b6b34"
	},
	{
		"id": "ce194adde7da",
		"ts": "2026-09-16T13:03:54.775Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 124363715.36,
		"hash": "ce194adde7da963574271e7602535e77fabc2934756f8be4ea38ac1a926d3246"
	},
	{
		"id": "85d1b3e19a47",
		"ts": "2026-09-16T13:03:55.623Z",
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
		"liquidityUsd": 12561062.43,
		"hash": "85d1b3e19a474b33ab6e5f9c6516da1e0ad9699f07523d30510d1f6ecd3e6559"
	},
	{
		"id": "5350fcd30415",
		"ts": "2026-09-16T13:03:55.916Z",
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
		"liquidityUsd": 923178.39,
		"hash": "5350fcd304154a52db18cb7beb61c3b706da4b5b7723503c7591f182daf34743"
	},
	{
		"id": "facdcaa7dc6e",
		"ts": "2026-09-16T13:03:56.214Z",
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
		"liquidityUsd": 33076988.54,
		"hash": "facdcaa7dc6e43dfb161f70136902cb07aeeb3820431e6c3b81a06fce72e503c"
	},
	{
		"id": "3aa971ba89de",
		"ts": "2026-09-16T13:03:56.504Z",
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
		"liquidityUsd": 3759732.02,
		"hash": "3aa971ba89de349fd8a33c15b36f3cbed07bd6703f27d3536c734bf7c6f1c018"
	},
	{
		"id": "f2504bcc1532",
		"ts": "2026-09-16T13:03:56.785Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1130155.64,
		"hash": "f2504bcc1532bd5a58d3e454a2f92afa28a080be56f84e8c7fd9d145942cea91"
	},
	{
		"id": "87882139f6ba",
		"ts": "2026-09-16T13:03:57.082Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1619212.11,
		"hash": "87882139f6ba845b6de61d8d0ffab6b48b05ac3efe6cdec0e8f8a58e5bfe1c28"
	},
	{
		"id": "73be45bdd54d",
		"ts": "2026-09-16T13:03:57.379Z",
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
		"liquidityUsd": 1271341.73,
		"hash": "73be45bdd54d8dc4ac616b99d52e3a86f3b31ef9e425d379d396b4877574cf9c"
	},
	{
		"id": "051439bc5f37",
		"ts": "2026-09-16T13:03:57.688Z",
		"symbol": "EDEL",
		"token": "0xFb31f85A8367210B2e4Ed2360D2dA9Dc2D2Ccc95",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 1018652.05,
		"hash": "051439bc5f373c4af4fb4b6a5a283cf2d7e12759882b0864ead594cd09b6e106"
	}
]
