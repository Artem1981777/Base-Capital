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
	"updatedAt": "2026-07-14T15:21:35.980Z",
	"tokensScored": 3235,
	"verdictsIssued": 3235,
	"safe": 2861,
	"risky": 275,
	"likelyRug": 99,
	"ticks": 203
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "2fd06ad3c49c",
		"ts": "2026-07-14T15:21:31.884Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107545729.46,
		"hash": "2fd06ad3c49c268f9e5fe023107cd816812e09a65c7021831fc84e0029923d26"
	},
	{
		"id": "1ec2382631d5",
		"ts": "2026-07-14T15:21:32.268Z",
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
		"liquidityUsd": 15249461.62,
		"hash": "1ec2382631d5133948e797c09dc2f6338c10212918d2fcdff4e301f99c12b752"
	},
	{
		"id": "226b3b401ce4",
		"ts": "2026-07-14T15:21:32.658Z",
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
		"liquidityUsd": 1230450.19,
		"hash": "226b3b401ce41d891f217ececf7989ec45979ca1d5bde8a3ac212f70b33342f3"
	},
	{
		"id": "7498a1e850e0",
		"ts": "2026-07-14T15:21:32.874Z",
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
		"liquidityUsd": 30539419.12,
		"hash": "7498a1e850e0697f2a2a6aa728b43419ed1e6ef7739a25070aa76632a5b73f30"
	},
	{
		"id": "6c7ff0a0fa0c",
		"ts": "2026-07-14T15:21:33.088Z",
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
		"liquidityUsd": 4597488.07,
		"hash": "6c7ff0a0fa0c76fb931a91a6726dbb91e545e79cbc5c43f9446de85df3263829"
	},
	{
		"id": "31a372937686",
		"ts": "2026-07-14T15:21:33.461Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1010428.01,
		"hash": "31a3729376866e4b1cf73723f6e3fcc4d1a9a502825c0b583fce716ae76e0e42"
	},
	{
		"id": "7cbf97e39815",
		"ts": "2026-07-14T15:21:33.671Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30539419.12,
		"hash": "7cbf97e39815d7e49e96ede3671961fa504942fc7944658de6da6c215c1838aa"
	},
	{
		"id": "611030c63164",
		"ts": "2026-07-14T15:21:33.894Z",
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
		"liquidityUsd": 2695515.23,
		"hash": "611030c6316421fe97ce92eeeacbbb5537d286026949b78df340898233b7ce72"
	},
	{
		"id": "8ec915458eb2",
		"ts": "2026-07-14T15:21:34.101Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3654529.21,
		"hash": "8ec915458eb2c0d71b0b377d8354550236d0c8f1dc91e50140c2d74c4c91b5df"
	},
	{
		"id": "371ea41453a7",
		"ts": "2026-07-14T15:21:34.308Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 389078.03,
		"hash": "371ea41453a72482a99797b0e9f5977355d83867b9b1c4b6c9eab47cfd9b13d1"
	},
	{
		"id": "6c17c0faeb51",
		"ts": "2026-07-14T15:21:34.505Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 410311.58,
		"hash": "6c17c0faeb5121ae08c659be2b9ca2e5fe0806e61478b35b0d2e9a8cc2e6e17c"
	},
	{
		"id": "7f5e6c261a8f",
		"ts": "2026-07-14T15:21:34.700Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1410819.68,
		"hash": "7f5e6c261a8f8b52e625a71da550c05734fe7b29cad46045592dc2b853461a94"
	},
	{
		"id": "d0f6bb29590f",
		"ts": "2026-07-14T15:21:34.956Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 510565.71,
		"hash": "d0f6bb29590f337f4fa5c9e72cff185ff43e72f5f30ea8cb2542e82e6d1ba4f0"
	},
	{
		"id": "47f008fbc75b",
		"ts": "2026-07-14T15:21:35.165Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8804471.6,
		"hash": "47f008fbc75b3fe0292b2ad8dbaf62a4bd6a4c94679c890fb5c74709e4b07b78"
	},
	{
		"id": "a27c42737a3b",
		"ts": "2026-07-14T15:21:35.364Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 288341.47,
		"hash": "a27c42737a3be2cbcf0144051175b4d34f0103a10fa54702d6e3c61035d4caba"
	},
	{
		"id": "1da82febdab3",
		"ts": "2026-07-14T15:21:35.557Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55493.59,
		"hash": "1da82febdab39805370df7376a0ed3f1f294ea7599f504cb25cdf55d6bdb7908"
	},
	{
		"id": "50c15d88816a",
		"ts": "2026-07-14T15:21:35.753Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1944471.2,
		"hash": "50c15d88816a6c4b80035acd0301070fc3a109030607ba93b8bd47783786d658"
	},
	{
		"id": "1060cb425a94",
		"ts": "2026-07-14T15:21:35.979Z",
		"symbol": "B3",
		"token": "0xB3B32F9f8827D4634fE7d973Fa1034Ec9fdDB3B3",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 581704.09,
		"hash": "1060cb425a943fcb5768d6110226b76d663a094d92c3165e9e73e6cd2b4aa3cc"
	},
	{
		"id": "22599d4ab9d6",
		"ts": "2026-07-14T13:27:05.392Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108456604.1,
		"hash": "22599d4ab9d6368d0b9641b8956690cdc2bd665bb4247f773e07eb9d29f232e9"
	},
	{
		"id": "360bc0ddfb19",
		"ts": "2026-07-14T13:27:05.851Z",
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
		"liquidityUsd": 13706178.08,
		"hash": "360bc0ddfb19478e8befc88abded03886a98af67283fef3ff6a594e99a9fad36"
	},
	{
		"id": "8c8e741d9064",
		"ts": "2026-07-14T13:27:06.301Z",
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
		"liquidityUsd": 1237835.06,
		"hash": "8c8e741d9064f6fbe5775cbd5c9f8c1bea24ba54c229dc70b5b5b9541b214a07"
	},
	{
		"id": "a14fe2520e17",
		"ts": "2026-07-14T13:27:06.549Z",
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
		"liquidityUsd": 30602421.06,
		"hash": "a14fe2520e17fd6c7d7916c434cac0877984a42c54b41251acd0098d7029832b"
	},
	{
		"id": "2de08cb1381c",
		"ts": "2026-07-14T13:27:06.796Z",
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
		"liquidityUsd": 4542693.71,
		"hash": "2de08cb1381c14bfd4dcf36a8d79bd2e37ce86d69736907dc143ba517180e375"
	},
	{
		"id": "4c124c54dca9",
		"ts": "2026-07-14T13:27:07.038Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1002652.11,
		"hash": "4c124c54dca9f2da77efb69526dd31d6da1c68859337c5dc2caa0608aeeb9690"
	},
	{
		"id": "831297fc91d4",
		"ts": "2026-07-14T13:27:07.281Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30602421.24,
		"hash": "831297fc91d4937f46face977976e4e368913440c2a867977499a135058c9a55"
	},
	{
		"id": "d2570ca53a60",
		"ts": "2026-07-14T13:27:07.532Z",
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
		"liquidityUsd": 2697547.15,
		"hash": "d2570ca53a6093434722a32d8597d43a3765a855e5a55eb53daf2f0ad894c682"
	},
	{
		"id": "284527695fa7",
		"ts": "2026-07-14T13:27:07.991Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3601381.64,
		"hash": "284527695fa76ed34f3d5dc63efdfacee3e833bec83591bc59db407daeb0cb0b"
	},
	{
		"id": "abb190bcef82",
		"ts": "2026-07-14T13:27:08.233Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 612276.87,
		"hash": "abb190bcef8236c976e8f2ea36698ffa1b95452dadd41038370aa9c3f71fd5b5"
	},
	{
		"id": "d9de820a4259",
		"ts": "2026-07-14T13:27:08.468Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 394329.56,
		"hash": "d9de820a4259d4239fc3167a6a6b2e0ce25d93acf00068a079bee21d8be55242"
	},
	{
		"id": "fffcd34d1e7b",
		"ts": "2026-07-14T13:27:08.699Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8914699.94,
		"hash": "fffcd34d1e7b2f36a8c025c5d651c7e42f3470271e83b151e12683539f6c3b15"
	},
	{
		"id": "86543865985f",
		"ts": "2026-07-14T13:27:08.936Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 509031.95,
		"hash": "86543865985fce12e10c1a78c8d74366e7ed2a068687279261c4dde6c84f5bf3"
	},
	{
		"id": "9f595157d6ad",
		"ts": "2026-07-14T13:27:09.165Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59381.67,
		"hash": "9f595157d6ad7ca59ad829185f2a61576a351e091a589c630491cc6c3951ab23"
	},
	{
		"id": "ccb09d54383c",
		"ts": "2026-07-14T13:27:09.399Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 275407.26,
		"hash": "ccb09d54383c3ca8e613ae4beb0f785ab60fa8fec697fa5fbf2e015e8dde22a0"
	},
	{
		"id": "1c62c095c437",
		"ts": "2026-07-14T13:27:09.634Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1935269.95,
		"hash": "1c62c095c437333ccdca9afbcb09f85f8c65b5ba8b21c53d3e91569335caf405"
	},
	{
		"id": "d2feb1172217",
		"ts": "2026-07-14T13:27:09.866Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1432386.23,
		"hash": "d2feb1172217015c1671fadc4033319da6e5e57697e89973918f3e8ba07f05df"
	},
	{
		"id": "d73ab0f89557",
		"ts": "2026-07-14T13:27:10.097Z",
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
		"liquidityUsd": 1221068.76,
		"hash": "d73ab0f89557e0de0279975139da9c745b110755d10f1477904edcbcc817926c"
	},
	{
		"id": "8ea564c73988",
		"ts": "2026-07-14T11:37:48.791Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107831955.48,
		"hash": "8ea564c73988947922a9fd602466c66d085e4f02e904117b06070f3f762243dc"
	},
	{
		"id": "fd235e4c3dee",
		"ts": "2026-07-14T11:37:49.251Z",
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
		"liquidityUsd": 15247023.9,
		"hash": "fd235e4c3dee7656da9daa0ca90ca295fd74d92b6a84537e862a4b3904e38018"
	},
	{
		"id": "dccf5e448643",
		"ts": "2026-07-14T11:37:49.496Z",
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
		"liquidityUsd": 1207934.86,
		"hash": "dccf5e44864352f32364cd17098ea64999781f8ccd13f2c96398dad0644f1f61"
	},
	{
		"id": "9afdb93a7378",
		"ts": "2026-07-14T11:37:49.735Z",
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
		"liquidityUsd": 29826625.95,
		"hash": "9afdb93a737806bc338794ac73c704a78570fb7a70646c30443385ab631210d8"
	},
	{
		"id": "15c9ee1e8b00",
		"ts": "2026-07-14T11:37:49.976Z",
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
		"liquidityUsd": 4394218.31,
		"hash": "15c9ee1e8b00d728b11e7116911360210fd76b477c918032a51e5ecb93fde1ea"
	},
	{
		"id": "5774b2617f06",
		"ts": "2026-07-14T11:37:50.216Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 967278.84,
		"hash": "5774b2617f060b568be75cfed69725aa1f8e0eb2e42acfad226277a034e0d500"
	},
	{
		"id": "fb6ecda46476",
		"ts": "2026-07-14T11:37:50.452Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29826625.76,
		"hash": "fb6ecda46476626d068fc367e6d4340de24cd9fa87acab5b244762def06ad4d4"
	},
	{
		"id": "ff4e4cad6d34",
		"ts": "2026-07-14T11:37:50.693Z",
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
		"liquidityUsd": 2635784.11,
		"hash": "ff4e4cad6d34a371026e239e3700e76937790996e6e241903873770c259f1122"
	},
	{
		"id": "9126b926895a",
		"ts": "2026-07-14T11:37:50.934Z",
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
		"liquidityUsd": 3706161.47,
		"hash": "9126b926895a004520286d7341d0c0ca18541bd167533b5e2c73004e8f2b84ed"
	},
	{
		"id": "69b27ab2ccb4",
		"ts": "2026-07-14T11:37:51.174Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 887831.83,
		"hash": "69b27ab2ccb4ec25dfdb172f559fd1c65fae3317e25c138541d5eeb9efbab132"
	},
	{
		"id": "9fc00fcf2875",
		"ts": "2026-07-14T11:37:51.397Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 404842.49,
		"hash": "9fc00fcf2875b1adc0c8c28e98b016239f4efe4cfdd69015f48e32fdb4978509"
	},
	{
		"id": "3b703a7ea38f",
		"ts": "2026-07-14T11:37:51.621Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55768.88,
		"hash": "3b703a7ea38f4f927b33a3d7ebd3c65f28dd86d56329962b1a209bb94b709076"
	},
	{
		"id": "eb964893b4c7",
		"ts": "2026-07-14T11:37:51.843Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1850029.95,
		"hash": "eb964893b4c7b51818ca41f6a7fedab512f9b8746f8ce896ccf3c4d07784f978"
	},
	{
		"id": "c4cd57f9fc92",
		"ts": "2026-07-14T11:37:52.071Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266906.52,
		"hash": "c4cd57f9fc92cc2d7e7cb1c530181885a0bcb6be6517a3a6fc860b4a1bb61e28"
	},
	{
		"id": "20f360db7e88",
		"ts": "2026-07-14T11:37:52.292Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 481077.44,
		"hash": "20f360db7e887e88c710e24b3c22f5ce498d2852b5dfd5ecd467601ddf030843"
	},
	{
		"id": "0bd932b6bc73",
		"ts": "2026-07-14T11:37:52.515Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8610276.73,
		"hash": "0bd932b6bc73a85e8b5ea46c58bab7988edb76fefdb8a752d2e57b5a8e2d8ad3"
	},
	{
		"id": "3cd4c38e2634",
		"ts": "2026-07-14T11:37:52.741Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1443099.21,
		"hash": "3cd4c38e26344836358a10cee6ebb2d5ded38e808070c4bd26a088db37355943"
	},
	{
		"id": "b5eceacb5797",
		"ts": "2026-07-14T11:37:52.963Z",
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
		"liquidityUsd": 1189618.23,
		"hash": "b5eceacb579733bc4095473ba19e024cc4f8ce462be661fc4758ac8fb501ab8e"
	},
	{
		"id": "5b6a66572e3d",
		"ts": "2026-07-14T09:59:32.301Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107260517.07,
		"hash": "5b6a66572e3d8e9a8c8b923723c6589785da77be92e98bbc860774997606a530"
	},
	{
		"id": "fb00e726ed97",
		"ts": "2026-07-14T09:59:32.749Z",
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
		"liquidityUsd": 16216275.51,
		"hash": "fb00e726ed973a8a6d2cc26b22382a4f0d8afa4750b045a08a298c0adabab62a"
	},
	{
		"id": "48ed0ec35686",
		"ts": "2026-07-14T09:59:32.982Z",
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
		"liquidityUsd": 1198556.99,
		"hash": "48ed0ec356861d7b9d99491631eb34e55e5dd010e1fd170f526c79637a0ce170"
	},
	{
		"id": "4e445ca09616",
		"ts": "2026-07-14T09:59:33.221Z",
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
		"liquidityUsd": 29636381.27,
		"hash": "4e445ca0961682cb7936ad914b529c55cfb661ede6726fb1fc34a059570fbb30"
	},
	{
		"id": "41495810f762",
		"ts": "2026-07-14T09:59:33.457Z",
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
		"liquidityUsd": 4353372.09,
		"hash": "41495810f762197fe146a0785f038ea6c3c788adb36b267171171657bd3d4b44"
	},
	{
		"id": "fe9de080f33d",
		"ts": "2026-07-14T09:59:33.692Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 964578.4,
		"hash": "fe9de080f33d97687bcf56a2517fbaf16d1050f4c2b3c254c1dd2e46f67e9c6e"
	},
	{
		"id": "2b60a7de466f",
		"ts": "2026-07-14T09:59:33.927Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29636381.27,
		"hash": "2b60a7de466f91de52b8e43715055c101dca96d0fc9e2ddf2f8c4203593dc13c"
	},
	{
		"id": "48dad554fc71",
		"ts": "2026-07-14T09:59:34.161Z",
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
		"liquidityUsd": 2638591.3,
		"hash": "48dad554fc71f68ea698eaaa35ea08061eab20719b462fc35fe571c45ad89c5f"
	},
	{
		"id": "ede1eb2a5b16",
		"ts": "2026-07-14T09:59:34.399Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3449285.8,
		"hash": "ede1eb2a5b16e302d811cd193f8f3143598fa20acf34163b0a4183f1a340fbbe"
	},
	{
		"id": "cfb53d537b11",
		"ts": "2026-07-14T09:59:34.636Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1838459.74,
		"hash": "cfb53d537b11b99e3cc22243173006d846ff8d677a17dcef2f8166cb1c429894"
	},
	{
		"id": "db207af38d35",
		"ts": "2026-07-14T09:59:34.853Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54669.43,
		"hash": "db207af38d35eff9db4c6d279c81ff87a875cb00fd24a6259acf837b82dea360"
	},
	{
		"id": "2a4cffefbb4d",
		"ts": "2026-07-14T09:59:35.078Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 295785.27,
		"hash": "2a4cffefbb4d72963a6d0fd1ef2191be9e92c72cc625e6b80bf4b924b0606e25"
	},
	{
		"id": "d5a0ff1d99af",
		"ts": "2026-07-14T09:59:35.297Z",
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
		"liquidityUsd": 1175422.71,
		"hash": "d5a0ff1d99afb13ee5e9b5f7829ecc899b0b4303f29c8060c66ef79747768267"
	},
	{
		"id": "9c29d8314298",
		"ts": "2026-07-14T09:59:35.521Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 478617.83,
		"hash": "9c29d831429816a2be77f680b28e10888d61725e4a60429d51e94046f8bf3678"
	},
	{
		"id": "57fbb830b09c",
		"ts": "2026-07-14T09:59:35.740Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1471215.73,
		"hash": "57fbb830b09c9af8d53e765890ba046541d5625a6bc45462d2b4b4159e7ebead"
	},
	{
		"id": "e367b8949fd9",
		"ts": "2026-07-14T09:59:35.957Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8605574.06,
		"hash": "e367b8949fd96de62d1f01d7cda4693c786ddd2cde878111b1ec4ae583385fe1"
	},
	{
		"id": "47df8f9bb843",
		"ts": "2026-07-14T09:59:36.203Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 881307.78,
		"hash": "47df8f9bb843eef07007c183ecac7cd702949c2ee709b5a6454cb60e71d0da45"
	},
	{
		"id": "2360e1c4a131",
		"ts": "2026-07-14T09:59:36.422Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 423451.74,
		"hash": "2360e1c4a13182d93c098c1581df6174da2d8a0ff5bf451be7c79a0bd7508ffd"
	},
	{
		"id": "825d814a1b14",
		"ts": "2026-07-14T07:57:09.338Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107275498.17,
		"hash": "825d814a1b14c7f9211b6e09b06656e99177b53091140383f1a00f2946952ef0"
	},
	{
		"id": "483dc2ee789f",
		"ts": "2026-07-14T07:57:09.576Z",
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
		"liquidityUsd": 16094422.6,
		"hash": "483dc2ee789f2b5694654e2d99e1449ef376a417f91f68ee0973ae8414de8640"
	},
	{
		"id": "1c2189fef90e",
		"ts": "2026-07-14T07:57:09.836Z",
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
		"liquidityUsd": 1195869.53,
		"hash": "1c2189fef90e8e59fb1895941e91465f34e83aef0580c4b2c29f4056f7720cbc"
	},
	{
		"id": "5cd8e5202ff9",
		"ts": "2026-07-14T07:57:10.070Z",
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
		"liquidityUsd": 29616828.4,
		"hash": "5cd8e5202ff95f7b986ebe065dd3430e452104cda4a09546793796f209f42857"
	},
	{
		"id": "2aa81d132355",
		"ts": "2026-07-14T07:57:10.328Z",
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
		"liquidityUsd": 4339196.51,
		"hash": "2aa81d13235579d852f284780a607617f00c51b31ace7b821a951264564b72b5"
	},
	{
		"id": "25211b161bfa",
		"ts": "2026-07-14T07:57:10.564Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 958796.7,
		"hash": "25211b161bfae22e62dadbbab1181a0a65727b9a70ad775a9d0941928291c6c3"
	},
	{
		"id": "b37b4fa4f356",
		"ts": "2026-07-14T07:57:10.798Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29616828.4,
		"hash": "b37b4fa4f3569218ac23496a9a055987cfa36c7e4bbdcd48720dd164084e3931"
	},
	{
		"id": "022c77e9efcc",
		"ts": "2026-07-14T07:57:11.029Z",
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
		"liquidityUsd": 2668650.15,
		"hash": "022c77e9efcc24e92cfb1a2e37f253c42061535b4430cf7249e1da7b853caea9"
	},
	{
		"id": "7d7db6125a70",
		"ts": "2026-07-14T07:57:11.274Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4173417.41,
		"hash": "7d7db6125a7097837a28dfa9323f5f81ed69e6b8bc787ef8e3fcba6408de19a9"
	},
	{
		"id": "d1ee3bbd7a93",
		"ts": "2026-07-14T07:57:11.509Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1494026.68,
		"hash": "d1ee3bbd7a93448979bf7468d521a42f84e22993419319fbcf111c88768df9db"
	},
	{
		"id": "7e8fa7655628",
		"ts": "2026-07-14T07:57:11.725Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 483234.03,
		"hash": "7e8fa7655628336b31155c15b7af646271528c17eb34f784bd84a007b22bf1e5"
	},
	{
		"id": "c5c7930ddd1d",
		"ts": "2026-07-14T07:57:11.945Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1835090.94,
		"hash": "c5c7930ddd1d01d19a829d0908f3ed2517407e13ca835cc4fb062e89cbbf7fbf"
	},
	{
		"id": "a49f547b91fe",
		"ts": "2026-07-14T07:57:12.165Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 298853.57,
		"hash": "a49f547b91fe92cfb1271961bbb2ac3b32b8358a53705ac71aa613d2c8b169ad"
	},
	{
		"id": "f1e478b3bbb0",
		"ts": "2026-07-14T07:57:12.380Z",
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
		"liquidityUsd": 1107652.83,
		"hash": "f1e478b3bbb09eaef2acf5d769915b3d3f25725125048ac257ba0a861049aab6"
	},
	{
		"id": "8f1ddd16e10a",
		"ts": "2026-07-14T07:57:12.600Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 51295.87,
		"hash": "8f1ddd16e10a0af1f2acbdf7556d271027c741102cc9c753222e95c1a3abaf95"
	},
	{
		"id": "618d98d0e9b6",
		"ts": "2026-07-14T07:57:12.816Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8565826.28,
		"hash": "618d98d0e9b6b94bb9f57aebdc9c66863fff11bd271d4a23d45b3278e7fdefcd"
	},
	{
		"id": "048691366269",
		"ts": "2026-07-14T07:57:13.034Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4672104.48,
		"hash": "04869136626909ed0dfd2ac631f6720547d25926a9ca7265154b59d5821df989"
	},
	{
		"id": "e70d12dcf72e",
		"ts": "2026-07-14T07:57:13.253Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 989400.32,
		"hash": "e70d12dcf72e3fc396ba1635dd32d6cf5847be675df2246fa8b1dfd5a3196da1"
	},
	{
		"id": "7fec8bf30446",
		"ts": "2026-07-14T05:26:04.398Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107274501.34,
		"hash": "7fec8bf304461bfcef3ecc1e0eaf0a08e54fff63c8073428e12664463e6cb018"
	},
	{
		"id": "4692cb091642",
		"ts": "2026-07-14T05:26:04.749Z",
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
		"liquidityUsd": 15423542.09,
		"hash": "4692cb091642c515f64c3712c78b5f66d85e07ea2ed19925b81f82fa7c157b64"
	},
	{
		"id": "b9311b09728f",
		"ts": "2026-07-14T05:26:05.097Z",
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
		"liquidityUsd": 1204965.82,
		"hash": "b9311b09728f3ac201c4e1305b5b0698a297cde39dddcd00a9acd923e264872e"
	},
	{
		"id": "e91d7656c723",
		"ts": "2026-07-14T05:26:05.563Z",
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
		"liquidityUsd": 29427412.67,
		"hash": "e91d7656c723f9df5e699085fc764f4a464895035248898d72f3977d6beed556"
	},
	{
		"id": "93aecf0ce942",
		"ts": "2026-07-14T05:26:05.911Z",
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
		"liquidityUsd": 4355844.22,
		"hash": "93aecf0ce94272789245811e5b19289418b5878659f92d8c2a8ce7802c0d8890"
	},
	{
		"id": "dda69d7972f6",
		"ts": "2026-07-14T05:26:06.126Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 959199.27,
		"hash": "dda69d7972f6221dd67315fb0c9d969c281703bc3cda0dde477cc2b12f79b934"
	},
	{
		"id": "d8efff11bcd1",
		"ts": "2026-07-14T05:26:06.315Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29427412.67,
		"hash": "d8efff11bcd1fa188cea7d9bcd941e812620077dcf43e32d24303db92557491e"
	},
	{
		"id": "778692d7b4e4",
		"ts": "2026-07-14T05:26:06.530Z",
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
		"liquidityUsd": 2616311.62,
		"hash": "778692d7b4e41955a5ee81ad4cacfe39a27f1f8b483b9fe13559cacf26b24528"
	},
	{
		"id": "d111d370154f",
		"ts": "2026-07-14T05:26:06.863Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4108660.21,
		"hash": "d111d370154f436597d951553261f085390545c49277751610f2ad80a1144372"
	},
	{
		"id": "27cb92e1b9dc",
		"ts": "2026-07-14T05:26:07.060Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1507661.33,
		"hash": "27cb92e1b9dcfa20b6cf25e0568f66867aed7497305c2680503e0df984695a14"
	},
	{
		"id": "efcf1a66da74",
		"ts": "2026-07-14T05:26:07.250Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 485033.85,
		"hash": "efcf1a66da74389e151f0a6ca77b2956f0db10757a1c2e51f79a3cab5d142fab"
	},
	{
		"id": "16b2e0d04b81",
		"ts": "2026-07-14T05:26:07.437Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1832618.46,
		"hash": "16b2e0d04b81d15a62bdf53ab915a4f6ca1a59e17f6754a2d18e8b0c18084a98"
	},
	{
		"id": "699e7bfbfc47",
		"ts": "2026-07-14T05:26:07.626Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 266783.43,
		"hash": "699e7bfbfc473773e8d6cd893843194096dbd99a86db89e45a3c54048c380e5d"
	},
	{
		"id": "5f36a02ccb2b",
		"ts": "2026-07-14T05:26:07.824Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8536579.67,
		"hash": "5f36a02ccb2b40061bd398bf089ac1cb51e3a1dcbf9bc0211113235b85b7dbb6"
	},
	{
		"id": "2049bb35915f",
		"ts": "2026-07-14T05:26:08.016Z",
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
		"liquidityUsd": 1034292.24,
		"hash": "2049bb35915fd9bdd60900211ccdba46dc7664a4c504adfcfd969aaa8c048dac"
	},
	{
		"id": "3079163a5733",
		"ts": "2026-07-14T05:26:08.195Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4658722.98,
		"hash": "3079163a5733702bebcee32ad60d5630db662f42741cba57cb37481910fe721b"
	},
	{
		"id": "4db17aff0041",
		"ts": "2026-07-14T05:26:08.371Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 48972.94,
		"hash": "4db17aff00417eb12fcdbcd9210c36a29c424ec7011c8c1ea749c3caf9dc9163"
	},
	{
		"id": "83e306c63399",
		"ts": "2026-07-14T05:26:08.568Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 995090,
		"hash": "83e306c63399597933710d8c9d48b49a312dd19d53b890ade33708197709a300"
	},
	{
		"id": "94d8b8928d52",
		"ts": "2026-07-14T02:06:32.428Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 107246203.54,
		"hash": "94d8b8928d5247cf45fb8738994ec6084d53e9d07c62ab6e96f6dbe8fd13b882"
	},
	{
		"id": "167d7350d2ae",
		"ts": "2026-07-14T02:06:32.871Z",
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
		"liquidityUsd": 15257991.02,
		"hash": "167d7350d2aeda6bb7e2306737965db6264f48bee2dcc1162e6a6eea3890fb68"
	},
	{
		"id": "877fd0fe2baf",
		"ts": "2026-07-14T02:06:33.327Z",
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
		"liquidityUsd": 1208911.52,
		"hash": "877fd0fe2baf4a55f0113360d67be8e03a8df1f670bf90e373e5ce5bd582deaf"
	},
	{
		"id": "173ce752cb44",
		"ts": "2026-07-14T02:06:33.567Z",
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
		"liquidityUsd": 29706355.86,
		"hash": "173ce752cb449060ccb6b58fb9b3800c013dfe4433172a58d68649c02c2315ea"
	},
	{
		"id": "e829b1411821",
		"ts": "2026-07-14T02:06:33.806Z",
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
		"liquidityUsd": 4363517.13,
		"hash": "e829b14118214d2f3c3056e061b49627b57f160961cd35d655aca5eee7667714"
	},
	{
		"id": "912558f69c59",
		"ts": "2026-07-14T02:06:34.047Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 954423.39,
		"hash": "912558f69c59285662fd5abb9b49950d6d1e191cb0c48990830458f76032389d"
	},
	{
		"id": "e9eefc846de5",
		"ts": "2026-07-14T02:06:34.289Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29706355.86,
		"hash": "e9eefc846de538de0d29166c065535c215ef1d781872213f71c79ded39554d74"
	},
	{
		"id": "cf82915d6509",
		"ts": "2026-07-14T02:06:34.540Z",
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
		"liquidityUsd": 2685404.65,
		"hash": "cf82915d6509a4a580af3b86a72353708a6ac825d97b5a9c44e57b29e43b458f"
	},
	{
		"id": "7dbd1db195f5",
		"ts": "2026-07-14T02:06:34.782Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4120539.38,
		"hash": "7dbd1db195f57e4a3c95e0ec18c3238fc073ff2e1b3fd172c1cbb6238aceed51"
	},
	{
		"id": "e791ed13cb18",
		"ts": "2026-07-14T02:06:35.017Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1498495.89,
		"hash": "e791ed13cb18bb55da7283038a0c5f3d25b597bdd9bb0437bd8a9372b1f54705"
	},
	{
		"id": "507c1e9c0ec3",
		"ts": "2026-07-14T02:06:35.252Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1828168.01,
		"hash": "507c1e9c0ec3036c5a4f523bc5e2ad3320ccc077f6e5f0975b4b243890089abc"
	},
	{
		"id": "c99e4a2cf987",
		"ts": "2026-07-14T02:06:35.477Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 489049,
		"hash": "c99e4a2cf987e3f4588f7cbe05d0ef947a811ce6d7718e0c9ce6e214ce8c8ee1"
	},
	{
		"id": "250f7392216f",
		"ts": "2026-07-14T02:06:35.696Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 263632.42,
		"hash": "250f7392216f8ab5c409244c6e6a5f096944c4a8f041bda1668dbc5bbcd5e160"
	},
	{
		"id": "44d9936dd95c",
		"ts": "2026-07-14T02:06:35.922Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1992967.4,
		"hash": "44d9936dd95ced351dc99fb1e9b20a8ada064c347bda395143945bcf32bee3de"
	},
	{
		"id": "687c7349ed64",
		"ts": "2026-07-14T02:06:36.141Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 49034.03,
		"hash": "687c7349ed64e315f3c901266e91fa69a4f6e1c7f87cd87b56450afced49b688"
	},
	{
		"id": "af90f4e90911",
		"ts": "2026-07-14T02:06:36.374Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8516403.25,
		"hash": "af90f4e909111382586b59f4e05b28c97b92ef533520d51266cbf9fed7867c17"
	},
	{
		"id": "fc69109a650e",
		"ts": "2026-07-14T02:06:36.601Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1842271.82,
		"hash": "fc69109a650ea06abafa14d67a469a25fc99eba27c7d223fb7af54aeb996f327"
	},
	{
		"id": "11d66c804346",
		"ts": "2026-07-14T02:06:36.823Z",
		"symbol": "TIG",
		"token": "0x0C03Ce270B4826Ec62e7DD007f0B716068639F7B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 977668.81,
		"hash": "11d66c8043463b56729f9c153a0b573c1fdc0587de259c457442d84e91b6d11e"
	},
	{
		"id": "6c1ac3f7d596",
		"ts": "2026-07-13T23:51:29.191Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106679069.03,
		"hash": "6c1ac3f7d596aee288d4e28473b40f453137cc742712413fc790019747cea2fd"
	},
	{
		"id": "ea9da757ec21",
		"ts": "2026-07-13T23:51:29.646Z",
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
		"liquidityUsd": 13174959.99,
		"hash": "ea9da757ec21bfdb135063b68ad2d3b66c9d1b94f2713ab9999d5044c0b1f4f4"
	},
	{
		"id": "7d5ae0d44062",
		"ts": "2026-07-13T23:51:29.894Z",
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
		"liquidityUsd": 1204429.86,
		"hash": "7d5ae0d44062e7047528ca8db3985b6c54d2632dd86ab61753f8b81eca945626"
	},
	{
		"id": "f12a7af2078a",
		"ts": "2026-07-13T23:51:30.145Z",
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
		"liquidityUsd": 29624310.24,
		"hash": "f12a7af2078a4cefbf995b6f9ccabb598cc556a63e0f4ca9984b43d1f54cec8d"
	},
	{
		"id": "fde317f05b48",
		"ts": "2026-07-13T23:51:30.392Z",
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
		"liquidityUsd": 4336218.8,
		"hash": "fde317f05b48da3461841026a841de93e15ac707ea6e6e8abb415c6739b36e17"
	},
	{
		"id": "2eba37fb4764",
		"ts": "2026-07-13T23:51:30.639Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 954458.45,
		"hash": "2eba37fb476475acefb90f6714efdbb3141d6905e0c575992442772a530ad647"
	},
	{
		"id": "65c1d5038761",
		"ts": "2026-07-13T23:51:30.887Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29624310.24,
		"hash": "65c1d50387611673436aeeac92d0600b985962ad5238a136c7252be6284980fb"
	},
	{
		"id": "fcdb80ac3d46",
		"ts": "2026-07-13T23:51:33.005Z",
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
		"liquidityUsd": 2583257.45,
		"hash": "fcdb80ac3d465dd47de8ead8f4a5b98fd6c935d1a9c096a3a8dc0a606a2c31e9"
	},
	{
		"id": "512251207392",
		"ts": "2026-07-13T23:51:33.781Z",
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
		"liquidityUsd": 4027428.56,
		"hash": "5122512073923216f1a0857d782556aed73ec72a009413b365796ea634039a6f"
	},
	{
		"id": "469c4b597d68",
		"ts": "2026-07-13T23:51:34.028Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1490512.59,
		"hash": "469c4b597d68093ad1896715a9de55b7286e3e2abfb7bd61c4f1b2fdb7954eed"
	},
	{
		"id": "6f96e3d979b6",
		"ts": "2026-07-13T23:51:34.261Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1810891.17,
		"hash": "6f96e3d979b6b5f4dbad57ab5e886f71dd1cc188a9c86d1da1b65ad21d8c58cf"
	},
	{
		"id": "c450d4194d48",
		"ts": "2026-07-13T23:51:34.496Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1986672.48,
		"hash": "c450d4194d4885f9fa85fcef34bc2ebe4b7b43cddc2d2897eb6bcfecfa9bbf08"
	},
	{
		"id": "821c352bb4a8",
		"ts": "2026-07-13T23:51:34.728Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 280507.68,
		"hash": "821c352bb4a84f5abf8d62c5b5ec55b6e9c29446b0e7cb1df893a6415eb0cef0"
	},
	{
		"id": "036c7df1dcff",
		"ts": "2026-07-13T23:51:34.968Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1901887.81,
		"hash": "036c7df1dcff2c70488adcaefe9ef960a82e7b85a57f2dd50b18dc43ff7a9091"
	},
	{
		"id": "d2af45bf0149",
		"ts": "2026-07-13T23:51:35.199Z",
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
		"liquidityUsd": 1066244.7,
		"hash": "d2af45bf01498ff2db2c04527945304dd58c3fe6ba251601a2e1fd286ee7e515"
	},
	{
		"id": "d12f782f258e",
		"ts": "2026-07-13T23:51:35.524Z",
		"symbol": "PAMPU",
		"token": "0xB2000000000000000000000Ee9988EDD75453501",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 62242.18,
		"hash": "d12f782f258e6169ace44d592875a53ad7c720a1052d3f2ad5b75cd4d5486eb2"
	},
	{
		"id": "ae2ab2be86cb",
		"ts": "2026-07-13T22:53:15.790Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106412684.1,
		"hash": "ae2ab2be86cbaaa326a3dd27b1b671c2bf84a7e08113ea40ff7bce618237a49f"
	},
	{
		"id": "5b156e88e278",
		"ts": "2026-07-13T22:53:16.233Z",
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
		"liquidityUsd": 15309937.12,
		"hash": "5b156e88e27840fe92b423bf0ebecc4c40de0ac7392514e2c32cfe63d25660aa"
	},
	{
		"id": "1d5ff026dfc8",
		"ts": "2026-07-13T22:53:16.471Z",
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
		"liquidityUsd": 1193242.89,
		"hash": "1d5ff026dfc8ef2c37b31c3e98601b6d5c10007463a37246a30abfc4f052b68b"
	},
	{
		"id": "54c9d1576e8e",
		"ts": "2026-07-13T22:53:16.763Z",
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
		"liquidityUsd": 29618626.16,
		"hash": "54c9d1576e8ec9b9139b1de96fc9537b8ba044d13d857bb267822fd3deae6b64"
	},
	{
		"id": "31220bb51a9b",
		"ts": "2026-07-13T22:53:17.018Z",
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
		"liquidityUsd": 4322817.4,
		"hash": "31220bb51a9bbb700f6a2b1da7a1e6968d30681f16ffe5102532e6b43e113f31"
	},
	{
		"id": "6079d8a9526a",
		"ts": "2026-07-13T22:53:17.287Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 954458.45,
		"hash": "6079d8a9526a1ebde8354aa031885210ffd1104e5fdb8c1ac26b5bf20858194f"
	},
	{
		"id": "35ec06bfa5fd",
		"ts": "2026-07-13T22:53:17.522Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29618626.16,
		"hash": "35ec06bfa5fddc9571da6390e7f6292699d0a0b95f5f6a877f29c463919980cb"
	},
	{
		"id": "e88ce76bb772",
		"ts": "2026-07-13T22:53:17.758Z",
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
		"liquidityUsd": 2586779.42,
		"hash": "e88ce76bb7721a7a846e01933c2dc30c24cdebbd9f5ed31914bf45bce5ac9d14"
	},
	{
		"id": "d243e2dad401",
		"ts": "2026-07-13T22:53:17.996Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3995728.68,
		"hash": "d243e2dad401afc428506b809966f786f73ca957abbc3f9048b6321df6533dc4"
	},
	{
		"id": "fb9dbc2cb8a8",
		"ts": "2026-07-13T22:53:18.232Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1487934.86,
		"hash": "fb9dbc2cb8a86c037009f49b6354f810332a43a08a43d263c2c0149945d3a292"
	},
	{
		"id": "73676b748103",
		"ts": "2026-07-13T22:53:18.449Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1849334.3,
		"hash": "73676b74810395356ae7798b1a5822d4bac226a2f23ed24e3b8c7c483a04f5cc"
	},
	{
		"id": "dbadc1c07c5f",
		"ts": "2026-07-13T22:53:18.668Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1974144.44,
		"hash": "dbadc1c07c5f1558dd5ad9f3a1f146df2586784cf085eb016dcc5d27d8e7f87a"
	},
	{
		"id": "fd00d4e75287",
		"ts": "2026-07-13T22:53:18.887Z",
		"symbol": "SUPERGEMMA",
		"token": "0x572c4fA77623652411574c51B5dDB7e1b750AbA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 289355.89,
		"hash": "fd00d4e7528767ea161e3fe32e5dcc573e7bdb6543526916bb952167b6661e18"
	},
	{
		"id": "99e87e855040",
		"ts": "2026-07-13T22:53:19.307Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1831067.85,
		"hash": "99e87e85504051ac88ce4d9e1fa1898b2afe7f293cc33c57b706357a75f7a6ec"
	},
	{
		"id": "bb75b9726b5c",
		"ts": "2026-07-13T22:53:19.524Z",
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
		"liquidityUsd": 1064679.35,
		"hash": "bb75b9726b5c1ce9eaec444a3fda5bfb9e4c492e33a7198b0b91bde837d7d9f2"
	},
	{
		"id": "0abea69ff4e9",
		"ts": "2026-07-13T22:53:19.742Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 504672.5,
		"hash": "0abea69ff4e9779fca2d2059028145256654984afd8f10ddc9dfd8814523039d"
	},
	{
		"id": "ce4a7e1eb220",
		"ts": "2026-07-13T21:53:17.753Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106266065.55,
		"hash": "ce4a7e1eb220cdba149451918716236440e7a98020307104fa1e384338deebc1"
	},
	{
		"id": "aa9b6db01eba",
		"ts": "2026-07-13T21:53:18.206Z",
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
		"liquidityUsd": 15021654.03,
		"hash": "aa9b6db01eba94d29cdd129c5ab447f2d36dc7681cf5cc2c3591405df9b9e3ed"
	},
	{
		"id": "d26f98381ec1",
		"ts": "2026-07-13T21:53:18.449Z",
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
		"liquidityUsd": 1176284.75,
		"hash": "d26f98381ec14b60ce053b57a79f7a8ae2dcf55a5dff52bc76fe0bc1f50e569e"
	},
	{
		"id": "b9a83ecd390b",
		"ts": "2026-07-13T21:53:18.697Z",
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
		"liquidityUsd": 29552113.46,
		"hash": "b9a83ecd390b828acb11a2a8d071d47791a1c976752f502da329a325d677ae14"
	},
	{
		"id": "42835cf970bb",
		"ts": "2026-07-13T21:53:18.948Z",
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
		"liquidityUsd": 4307895.29,
		"hash": "42835cf970bb75ba2a004090e83162957830ae2b437e8e24d717d0357230872a"
	},
	{
		"id": "d24853e415cb",
		"ts": "2026-07-13T21:53:19.189Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 958048.54,
		"hash": "d24853e415cbbccfb62e623e6d318d72fe575ef36cf50e63088c43522c0208bc"
	},
	{
		"id": "4034fb12a592",
		"ts": "2026-07-13T21:53:19.450Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29552113.64,
		"hash": "4034fb12a592cdbfddf4fa12f9fdb51a3ace23b0245eec0e33338a3ab2a8db16"
	},
	{
		"id": "96e4dca0d050",
		"ts": "2026-07-13T21:53:19.693Z",
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
		"liquidityUsd": 2573004.18,
		"hash": "96e4dca0d0502bb2417c60e6ba4c5a22f1ea3b3381b90325f9de885e451156af"
	},
	{
		"id": "1d83cd41ce54",
		"ts": "2026-07-13T21:53:19.942Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 3964817.11,
		"hash": "1d83cd41ce54e9649a424092df09ae3754fee089ba5cbb8f022e322aa0a600aa"
	},
	{
		"id": "cdf91eac7fa3",
		"ts": "2026-07-13T21:53:20.191Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1502408.88,
		"hash": "cdf91eac7fa382f2069d4ac20d6364f12436a74155670f20fc394181d1d615c1"
	},
	{
		"id": "739b6495834f",
		"ts": "2026-07-13T21:53:20.419Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1840745.77,
		"hash": "739b6495834fb4b04eebe38bbbe51764d8d2de468904848a974236812a600584"
	},
	{
		"id": "3825ac183f7f",
		"ts": "2026-07-13T21:53:20.928Z",
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
		"liquidityUsd": 1972242.3,
		"hash": "3825ac183f7fdb61337ba23f16a0a98c3f53d40fff8455cb22273155de4dd52b"
	},
	{
		"id": "579500cbd61e",
		"ts": "2026-07-13T21:53:21.163Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1896914.21,
		"hash": "579500cbd61e5053a4a7c53fb6af88ae31babacfd001d3f4dbd34458fe0d4c74"
	},
	{
		"id": "f58e8672b216",
		"ts": "2026-07-13T21:53:21.395Z",
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
		"liquidityUsd": 1077731.76,
		"hash": "f58e8672b216ebd90267b0bb155a16af3ec6e7864b01538bc64f20ff4bbeee5a"
	},
	{
		"id": "f2547c7976e5",
		"ts": "2026-07-13T21:53:21.625Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 249818.52,
		"hash": "f2547c7976e5860ac2ee7692e2958f2f6510a442c3dd6442ddaa920d9e43dee0"
	},
	{
		"id": "1bae41d06582",
		"ts": "2026-07-13T21:53:21.866Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 503109.49,
		"hash": "1bae41d0658254e349a809ba0501893d19bee8cb723546cf0e5e041ab488f389"
	},
	{
		"id": "6f560b21f76f",
		"ts": "2026-07-13T20:11:44.290Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106762174.31,
		"hash": "6f560b21f76f66a4bc89246b0d4f6eb85449e4f8f6aab26eef819ad8645d4ecd"
	},
	{
		"id": "828f2ded1228",
		"ts": "2026-07-13T20:11:44.733Z",
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
		"liquidityUsd": 16250582.57,
		"hash": "828f2ded1228d94677a725db866ce7edcebe5c66e113984eb4d083805262ee01"
	},
	{
		"id": "5323841782ad",
		"ts": "2026-07-13T20:11:44.995Z",
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
		"liquidityUsd": 1190042.18,
		"hash": "5323841782ad80582e5672c6d14d75fa049221c733f4291d1959fa36b5aa0e89"
	},
	{
		"id": "c03e22f6c255",
		"ts": "2026-07-13T20:11:45.441Z",
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
		"liquidityUsd": 29720566.51,
		"hash": "c03e22f6c255d9ceb9ebf3b0f80d325046710eecd6b6a4c1987843b3c35fc67a"
	},
	{
		"id": "0178b9ae8b2c",
		"ts": "2026-07-13T20:11:45.879Z",
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
		"liquidityUsd": 4365670.81,
		"hash": "0178b9ae8b2c15ea71ec0def9efb3967838d2e68a7e1d6fa39f4731ad18efe14"
	},
	{
		"id": "0b3f38674329",
		"ts": "2026-07-13T20:11:46.118Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 950193.99,
		"hash": "0b3f38674329a005f7d851a702e2c0811c0ab641a9a8078d16d26dd5f28013a5"
	},
	{
		"id": "1055e45bfc23",
		"ts": "2026-07-13T20:11:46.358Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29720620.44,
		"hash": "1055e45bfc23344524f473f4cd6e15f274fa66fb8bb77769d97ec1fc3108c16a"
	},
	{
		"id": "e2d8050b698d",
		"ts": "2026-07-13T20:11:46.597Z",
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
		"liquidityUsd": 2579668.08,
		"hash": "e2d8050b698de63b7e8bf542cef1ae3135a7379e6c4011dec494eac0e4ab48ec"
	},
	{
		"id": "0d3c635c0ea2",
		"ts": "2026-07-13T20:11:46.833Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 4033292.39,
		"hash": "0d3c635c0ea2c91a38c36c3155db56b550ffe337c67e2acb6f5707d56b9ad7f1"
	},
	{
		"id": "9a6c5002c4e9",
		"ts": "2026-07-13T20:11:47.295Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1547886.21,
		"hash": "9a6c5002c4e901e1a3d9327c35f6ba3e5cdb68eaa12e86f67356e5f48b7bdd5e"
	},
	{
		"id": "4cf4acb7c4ea",
		"ts": "2026-07-13T20:11:47.519Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1855733.59,
		"hash": "4cf4acb7c4ea6f9bb04482b6ab0999cb7927567c8e4e43be7544e43d6133c9d5"
	},
	{
		"id": "b7d64dea9335",
		"ts": "2026-07-13T20:11:47.747Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1976922.41,
		"hash": "b7d64dea9335fedb90caf297ec8dd76b8488ec657456f49c176c1cc9e57fb004"
	},
	{
		"id": "58b246a0b74b",
		"ts": "2026-07-13T20:11:47.972Z",
		"symbol": "O",
		"token": "0x182FA643E5f29d5EcA75e7b9CF9336A3fe4620b2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1868482.95,
		"hash": "58b246a0b74b030b7a250cb46baf19edabf08591a1f9f9c096bfe4962c540ee2"
	},
	{
		"id": "6dc2745203ef",
		"ts": "2026-07-13T20:11:48.198Z",
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
		"liquidityUsd": 1108525.17,
		"hash": "6dc2745203ef2ebff73e52d1f22ef7349baab402b46bda670f95acec6a3c1869"
	},
	{
		"id": "fcc693d0e010",
		"ts": "2026-07-13T20:11:48.427Z",
		"symbol": "DOT",
		"token": "0x23A2847d772803f9EFC64B4277b782b06296FE51",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 260247.09,
		"hash": "fcc693d0e0107ff848e048fad2be65cbe598e0924975b69abc33f485083770d9"
	},
	{
		"id": "348c4d67df48",
		"ts": "2026-07-13T20:11:48.653Z",
		"symbol": "SOL",
		"token": "0x311935Cd80B76769bF2ecC9D8Ab7635b2139cf82",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 507834.2,
		"hash": "348c4d67df4866941db43999f5365edcfd6e7bcd997ab9fb88c7088b36ef235f"
	},
	{
		"id": "b9df869b73ad",
		"ts": "2026-07-13T20:11:48.877Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 8444070.23,
		"hash": "b9df869b73ad02f0a8f71c3ddcd3801a35a9195605dde8dfa93d5d795d5f6cac"
	},
	{
		"id": "d3ff93bcc85e",
		"ts": "2026-07-13T18:41:18.664Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 106131355.99,
		"hash": "d3ff93bcc85e813988a1472586212818b6fb177f23f699fd14434f3c7661ce74"
	},
	{
		"id": "38d6377dfd4d",
		"ts": "2026-07-13T18:41:19.048Z",
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
		"liquidityUsd": 16469001.36,
		"hash": "38d6377dfd4d90a778d7a1cb9c4be681335d8f808b2cc069bf4cbf362b2c47ce"
	},
	{
		"id": "b1010938316a",
		"ts": "2026-07-13T18:41:19.259Z",
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
		"liquidityUsd": 1199286.14,
		"hash": "b1010938316a9a28f04a384cc3d37212e2e375a70e8f13268cd9f3ddce9e8eff"
	},
	{
		"id": "f24b7634712d",
		"ts": "2026-07-13T18:41:19.471Z",
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
		"liquidityUsd": 29721054.74,
		"hash": "f24b7634712d8a0935dedf4d282888e4060d11faac200823bc6b7e10b89c0b90"
	},
	{
		"id": "aaff7500aae8",
		"ts": "2026-07-13T18:41:19.703Z",
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
		"liquidityUsd": 4336913.19,
		"hash": "aaff7500aae8764cdfdbf8c56fc91d54fdf342327b04e76b9ac01cbad8cb3071"
	},
	{
		"id": "2dc10cb9c580",
		"ts": "2026-07-13T18:41:19.947Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 952143.87,
		"hash": "2dc10cb9c5803419b88ba769a8d8f25e44e9130950d94b8e219167bcaf125a22"
	},
	{
		"id": "f9c4ed90eb07",
		"ts": "2026-07-13T18:41:20.283Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29721054.74,
		"hash": "f9c4ed90eb07b222192effca32f401c6362b63eb826b9f404c031e7f076e2aad"
	},
	{
		"id": "92647ace1981",
		"ts": "2026-07-13T18:41:20.502Z",
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
		"liquidityUsd": 2562817.07,
		"hash": "92647ace19818ae81bfdfdd759fd8938639f3a2401803b8bc9769f7a019b2544"
	},
	{
		"id": "5441d8db1502",
		"ts": "2026-07-13T18:41:20.717Z",
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
		"liquidityUsd": 3956719.87,
		"hash": "5441d8db15028b9ac24191188b6080050c87bb3be3c2eebcb7c3141f1a107e73"
	}
]
