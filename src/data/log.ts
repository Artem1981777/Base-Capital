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
	"updatedAt": "2026-09-06T02:43:11.174Z",
	"tokensScored": 16343,
	"verdictsIssued": 16343,
	"safe": 13881,
	"risky": 1210,
	"likelyRug": 1252,
	"ticks": 938
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "302357f53478",
		"ts": "2026-09-06T02:43:06.412Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116850676.98,
		"hash": "302357f53478c571424d685b3cea3c21585a58a51c8b77d86834884e8ef0bfe5"
	},
	{
		"id": "0272af286fe3",
		"ts": "2026-09-06T02:43:06.689Z",
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
		"liquidityUsd": 18418616.62,
		"hash": "0272af286fe3b1cc8e3504d49e3b17ad13c58b7f437b6f62c574cb72c0fd5629"
	},
	{
		"id": "6250fb624a38",
		"ts": "2026-09-06T02:43:06.962Z",
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
		"liquidityUsd": 1043530.68,
		"hash": "6250fb624a38d8ab9a0ad8f469cc345757a7ba1897d644706ea26a4dfb325fd2"
	},
	{
		"id": "eabc02d4b2e7",
		"ts": "2026-09-06T02:43:07.235Z",
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
		"liquidityUsd": 30487046.97,
		"hash": "eabc02d4b2e75d47e0e903603fa696ee713535954cbb236f9a08636ea2db8e33"
	},
	{
		"id": "0d8680f1a4d3",
		"ts": "2026-09-06T02:43:07.484Z",
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
		"liquidityUsd": 4277573.85,
		"hash": "0d8680f1a4d3dedd5d6030276df950bf58243fa80101f4032bf22db91d24e4c4"
	},
	{
		"id": "474e2eeedbf7",
		"ts": "2026-09-06T02:43:07.740Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1212982.58,
		"hash": "474e2eeedbf7cc7c9360157a3f30ca1597319f8a8bf2b8e5142c04ac2d249b26"
	},
	{
		"id": "9f91a4515a13",
		"ts": "2026-09-06T02:43:08.224Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30487046.97,
		"hash": "9f91a4515a13f36f64e138d591666c7977bb2894bae4d7a214ec0943acd5ec02"
	},
	{
		"id": "222a3412d3a0",
		"ts": "2026-09-06T02:43:08.517Z",
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
		"liquidityUsd": 1775414.06,
		"hash": "222a3412d3a02bbdf4d0227121c2e18244fc74a179a970ec53723272d2c0c332"
	},
	{
		"id": "0ee05ab99f89",
		"ts": "2026-09-06T02:43:08.785Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 478932.21,
		"hash": "0ee05ab99f8984521aacd27a4eab03db45abe8ee03107f50de679a1df468164b"
	},
	{
		"id": "234b6fed43a1",
		"ts": "2026-09-06T02:43:09.077Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 234877.96,
		"hash": "234b6fed43a1f47c928c4ee45eefc1a51f72a314a9615f2e081ea17224253a9b"
	},
	{
		"id": "166c3ce72d51",
		"ts": "2026-09-06T02:43:09.310Z",
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
		"liquidityUsd": 1290653.53,
		"hash": "166c3ce72d51466ff7622a80f79685832fcfba816cc6a3f58e9d63b46654a5a7"
	},
	{
		"id": "965ebbe12321",
		"ts": "2026-09-06T02:43:09.543Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1461229.47,
		"hash": "965ebbe12321d44c6f7b594a76a06551188953f64a26231d12e37ccd227e567a"
	},
	{
		"id": "736b09fbdc51",
		"ts": "2026-09-06T02:43:09.777Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121586.19,
		"hash": "736b09fbdc5195bea0455f30477a8ec25774a1bae6ba4071ac7501dcc4bb9fae"
	},
	{
		"id": "67016b580512",
		"ts": "2026-09-06T02:43:10.010Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3329655.61,
		"hash": "67016b58051286b6912b20a11b8a5ebd4d22a5b1f3086407865fea2121f3d8ae"
	},
	{
		"id": "efecd2ef7bdd",
		"ts": "2026-09-06T02:43:10.242Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 53761.81,
		"hash": "efecd2ef7bdd34b554db9119200d370c8858bd0ee8c44d853890e17c21182fdf"
	},
	{
		"id": "d1fd5bba3dff",
		"ts": "2026-09-06T02:43:10.475Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 181470.33,
		"hash": "d1fd5bba3dff72b6ae311a36500679b14b7472b6246107c3bfa8711c110f66f9"
	},
	{
		"id": "b99141e53ef3",
		"ts": "2026-09-06T02:43:10.707Z",
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
		"liquidityUsd": 602443.74,
		"hash": "b99141e53ef397563f3a6de1a1cf0f32cdfe0886631f4fefbe93769edd37367c"
	},
	{
		"id": "1877d52185e8",
		"ts": "2026-09-06T02:43:10.940Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 131633.04,
		"hash": "1877d52185e88ab9b04bb2fa4ac178b047d2f76da4c1a1653a78144e6e9e0215"
	},
	{
		"id": "763d57640cec",
		"ts": "2026-09-06T02:43:11.174Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1879023.26,
		"hash": "763d57640cec06d2451c026e4e541ca0f9d9944743a622a0923fbb6e3c64c57e"
	},
	{
		"id": "64e315258da6",
		"ts": "2026-09-05T23:31:24.894Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116674120.36,
		"hash": "64e315258da6ffcf549c76e8b83ea5b6eee045c4b754243c1a6372cb11a28ba5"
	},
	{
		"id": "44ac4595cca9",
		"ts": "2026-09-05T23:31:25.522Z",
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
		"liquidityUsd": 19685395.81,
		"hash": "44ac4595cca9e247cf6003c208f8155f6625d86bf9d064cb1d3d54400888ac86"
	},
	{
		"id": "b01ed3a70157",
		"ts": "2026-09-05T23:31:25.776Z",
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
		"liquidityUsd": 1027570.44,
		"hash": "b01ed3a701579b8c8d919db661f7aaf86ca900324b9a74db41435cc0317d747f"
	},
	{
		"id": "18d618362ba7",
		"ts": "2026-09-05T23:31:26.020Z",
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
		"liquidityUsd": 30627753.82,
		"hash": "18d618362ba720092d8a63c0342960e7b796928807297c8f924387ea1eb02349"
	},
	{
		"id": "28c2ce7ea784",
		"ts": "2026-09-05T23:31:26.228Z",
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
		"liquidityUsd": 4265501.24,
		"hash": "28c2ce7ea7843aaa6b11aca70e46af5851689d46fa2b2b0d3f4dfa88a098296c"
	},
	{
		"id": "c90464a20625",
		"ts": "2026-09-05T23:31:26.435Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1201784.47,
		"hash": "c90464a206257ab73c375f0898bd41a98c2be3d38b7e4c8b77ea9d9762d186a1"
	},
	{
		"id": "677f6ec520ea",
		"ts": "2026-09-05T23:31:26.860Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30627753.82,
		"hash": "677f6ec520ea132b5a145e499d7f072c00919320dffa210affb45b02af4d9582"
	},
	{
		"id": "e652469130ee",
		"ts": "2026-09-05T23:31:27.118Z",
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
		"liquidityUsd": 2592862.29,
		"hash": "e652469130ee60e3d7bf4b549bc187d3e153cba2d85a5a3b3b5d6ca9c4168ce4"
	},
	{
		"id": "567a78d6bcb4",
		"ts": "2026-09-05T23:31:27.373Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 220807.04,
		"hash": "567a78d6bcb4878c85a6114561d2b9e5886a3902aeab91f8b555b8be4abde4f7"
	},
	{
		"id": "dc0081b1ff4c",
		"ts": "2026-09-05T23:31:27.617Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 336990.42,
		"hash": "dc0081b1ff4c2732f2178751957b72976a76f7402a3cebffb8aa2e589d9ccc3f"
	},
	{
		"id": "542266f17827",
		"ts": "2026-09-05T23:31:27.823Z",
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
		"liquidityUsd": 1264002.96,
		"hash": "542266f1782716b0b776fadb2cbe4c33d96114de274cc41c6976b3f4b30472bf"
	},
	{
		"id": "d8cfd1ab97fc",
		"ts": "2026-09-05T23:31:28.028Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1377400.58,
		"hash": "d8cfd1ab97fc0bf2065fd2a004a2b615a7d97989f7f150391556d6535efed72d"
	},
	{
		"id": "97cbcd05a112",
		"ts": "2026-09-05T23:31:28.208Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3309073.75,
		"hash": "97cbcd05a112d002c1486fd8c2eb5560eb553097f6c2bb49e9e0517cc36e5024"
	},
	{
		"id": "ce87833b4688",
		"ts": "2026-09-05T23:31:28.403Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 178161.48,
		"hash": "ce87833b468878183a9ec4a3ef1b406eeb92767641e489c14b765e118ecbc5fa"
	},
	{
		"id": "31fc39e77253",
		"ts": "2026-09-05T23:31:28.578Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 55474.99,
		"hash": "31fc39e772536b0234aedeb4f8a05d22ff6c59db077e8080145ceea35c657659"
	},
	{
		"id": "f97795aeef4b",
		"ts": "2026-09-05T23:31:28.784Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 121703.2,
		"hash": "f97795aeef4b0a4e28b2146f5dcfb60510d83ddc3e53f066d26ff2fd87cd59d6"
	},
	{
		"id": "de51241b4d3f",
		"ts": "2026-09-05T23:31:28.970Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 142164.39,
		"hash": "de51241b4d3fc74a04975f816430209f3d7d27930f9a21dee56d5a83863d8c69"
	},
	{
		"id": "06084167bbd1",
		"ts": "2026-09-05T23:31:29.167Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 963809.74,
		"hash": "06084167bbd1c9ff01f3ea43a5e270bdc3661bd4eae21f0e02f6bafb6bf7f016"
	},
	{
		"id": "f615ffa787a5",
		"ts": "2026-09-05T23:31:29.341Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1233733.34,
		"hash": "f615ffa787a503a01df68bf8d777d5146c21a5725cce2693a6161ef027004083"
	},
	{
		"id": "5305a8ffa554",
		"ts": "2026-09-05T21:53:09.732Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116724235.04,
		"hash": "5305a8ffa5542e0bc81406aacdbc95d5ba2646f6bbc558fd35d05ca14b2106d8"
	},
	{
		"id": "ee9106f8a276",
		"ts": "2026-09-05T21:53:10.216Z",
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
		"liquidityUsd": 14973404.31,
		"hash": "ee9106f8a2761eb7089cefb04d305edfa43b10714ebdbee42a6d7e844d116ee4"
	},
	{
		"id": "2f83dbca6dca",
		"ts": "2026-09-05T21:53:10.573Z",
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
		"liquidityUsd": 1030791.71,
		"hash": "2f83dbca6dcac64ecadd8f0a9fac6bae19c83ca8a021c81dc30bf81697b11783"
	},
	{
		"id": "d17954f2f594",
		"ts": "2026-09-05T21:53:10.844Z",
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
		"liquidityUsd": 30427633.22,
		"hash": "d17954f2f594a48eef417d7743a924f4b870072a556545f135f7378221424c78"
	},
	{
		"id": "e67564055bb5",
		"ts": "2026-09-05T21:53:11.130Z",
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
		"liquidityUsd": 4282024.14,
		"hash": "e67564055bb5483447d36d0c69c6a56ecae19f22ce45e21a4c6248621cb426f5"
	},
	{
		"id": "1fcbd9fd5dc2",
		"ts": "2026-09-05T21:53:11.392Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1200229.96,
		"hash": "1fcbd9fd5dc2c5e890fdcc3037c0158715e22a352034f7e9871175aa0c381f3b"
	},
	{
		"id": "c8ea3eff0850",
		"ts": "2026-09-05T21:53:11.681Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 30427633.22,
		"hash": "c8ea3eff0850f42cd3905d9ebd6709ef09027a7b34fb79d95a34c3c13709e607"
	},
	{
		"id": "905f31a0e2e4",
		"ts": "2026-09-05T21:53:11.997Z",
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
		"liquidityUsd": 3022718.7,
		"hash": "905f31a0e2e486e0fc475a22f709db99418422b7ba32954794f90a02da74e965"
	},
	{
		"id": "7b36ec00f09b",
		"ts": "2026-09-05T21:53:12.262Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1211141.89,
		"hash": "7b36ec00f09bc1f6cac05089ecdb1aee45d80f57f8936b38093c507fb82b33ef"
	},
	{
		"id": "649cef5ed36c",
		"ts": "2026-09-05T21:53:12.512Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 337162.41,
		"hash": "649cef5ed36c42935fd6771bf23267a661d9c5dfb44fc9e39079f4eadf875b1f"
	},
	{
		"id": "2d3883fdaf81",
		"ts": "2026-09-05T21:53:12.739Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 236418.32,
		"hash": "2d3883fdaf819051cc2c60acad622d4ca88e9367c68e1961046f0518e1652451"
	},
	{
		"id": "1ca7f61f340c",
		"ts": "2026-09-05T21:53:12.970Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1364063.75,
		"hash": "1ca7f61f340c6e80ea531c6d3536dae46ee20d35ed01b69c9c519e9752d1c520"
	},
	{
		"id": "4e8f7baccae7",
		"ts": "2026-09-05T21:53:13.197Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3325924.89,
		"hash": "4e8f7baccae726e241709ed73264161fc0f4b4e7d34d77737e49f9641b8f322c"
	},
	{
		"id": "f3679c69e9f7",
		"ts": "2026-09-05T21:53:13.424Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 176791.41,
		"hash": "f3679c69e9f7c9a7f427639cf07557236f762053d45fa9b621e7649599ec1ffc"
	},
	{
		"id": "1e43ea4ce381",
		"ts": "2026-09-05T21:53:13.652Z",
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
		"liquidityUsd": 544041.67,
		"hash": "1e43ea4ce381e3a78d05b8ef8bfc1b291a0467980bd9c19a884271bb4139c905"
	},
	{
		"id": "6b262c5460bd",
		"ts": "2026-09-05T21:53:13.882Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1858342.72,
		"hash": "6b262c5460bda1893d7bb6d6ae8fb4281dae250506a6f72748af08a172622849"
	},
	{
		"id": "f227793e150d",
		"ts": "2026-09-05T21:53:14.110Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 52429.43,
		"hash": "f227793e150dcb9214dbc8d9453e3a1ec9b9b8b50145aed1b6a72748dd9c3559"
	},
	{
		"id": "5b504e9ecfec",
		"ts": "2026-09-05T21:53:14.336Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 114122.09,
		"hash": "5b504e9ecfec95d1788b1b51e583a32959c2b4723fc9835db34d10250543512d"
	},
	{
		"id": "fe6abd096772",
		"ts": "2026-09-05T21:53:14.563Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 848071.4,
		"hash": "fe6abd096772dbc5e048fe5526709d814c57ec0c61fac63f3eb1f06af12a4f04"
	},
	{
		"id": "b2a409561d36",
		"ts": "2026-09-05T19:52:31.729Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116591749.01,
		"hash": "b2a409561d36f9116cecd9df8ca3a9f78e44d88553334aaa6a7f3f96737e1c54"
	},
	{
		"id": "9db8b600ded8",
		"ts": "2026-09-05T19:52:32.224Z",
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
		"liquidityUsd": 17987936.82,
		"hash": "9db8b600ded813548930e85087f1abb751c8f767189ee388cc48e89382580549"
	},
	{
		"id": "a09f6ae409b2",
		"ts": "2026-09-05T19:52:32.469Z",
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
		"liquidityUsd": 1025453.17,
		"hash": "a09f6ae409b2e85a92d5fda16440b35c4767341873d00e45bd34321da875b87d"
	},
	{
		"id": "5d6925707a6c",
		"ts": "2026-09-05T19:52:32.919Z",
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
		"liquidityUsd": 29659829.05,
		"hash": "5d6925707a6c00a4f338134b5ea791ede6abe9f8302ae31d21ce95bb45179733"
	},
	{
		"id": "1b639ab5a879",
		"ts": "2026-09-05T19:52:33.356Z",
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
		"liquidityUsd": 4259835.04,
		"hash": "1b639ab5a879b153c586e6baf967e686e0d705ded01ed3d128b19f723cb83173"
	},
	{
		"id": "1a1170401c7a",
		"ts": "2026-09-05T19:52:33.604Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1197392.57,
		"hash": "1a1170401c7a83833dfbf6c48d262ff1176e0f5bf48efd91fd4507911b034bf1"
	},
	{
		"id": "060d7dbcaa0c",
		"ts": "2026-09-05T19:52:33.957Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1153373.15,
		"hash": "060d7dbcaa0caaa43554be659c081409d613412e3fcf6d3c1f4a66d5c617be91"
	},
	{
		"id": "faf692238996",
		"ts": "2026-09-05T19:52:34.205Z",
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
		"liquidityUsd": 3008151.35,
		"hash": "faf692238996f8efd8dd60b3c3be2750c05ba664fc02e8aa7cfb30b068d8b2a6"
	},
	{
		"id": "fe0ea1c49ae3",
		"ts": "2026-09-05T19:52:34.465Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1224769.62,
		"hash": "fe0ea1c49ae33033e8d56ebda1e9973755157b9123ebf4c9b1aef5302a3a20f1"
	},
	{
		"id": "cee88ae014f9",
		"ts": "2026-09-05T19:52:34.732Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 290610.37,
		"hash": "cee88ae014f9bee42d304c865ec6f48d1af37fc6634659ac7051e90e4702a878"
	},
	{
		"id": "243ff88f1d16",
		"ts": "2026-09-05T19:52:34.953Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247745.62,
		"hash": "243ff88f1d1677e23d712dea586bbe1e69fdc429cd6af3f5c01e04c44065a435"
	},
	{
		"id": "3e587dbe04a1",
		"ts": "2026-09-05T19:52:35.183Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1374645.58,
		"hash": "3e587dbe04a1ad33fccac3cc11d7e63de22bd7ffb59d0e659ee1b514f622c67f"
	},
	{
		"id": "61dde5124a0b",
		"ts": "2026-09-05T19:52:35.410Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3296076.14,
		"hash": "61dde5124a0b12fa97f4c0447b28ff04732150a2d4b3a3b4ac109b24222ed07c"
	},
	{
		"id": "8c1a7966fe65",
		"ts": "2026-09-05T19:52:35.635Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 175107.16,
		"hash": "8c1a7966fe65f4a46df443fe02ee6a68a9fe1fc516634e98ab73884747fb55e1"
	},
	{
		"id": "f8af6f3ab96a",
		"ts": "2026-09-05T19:52:35.861Z",
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
		"liquidityUsd": 556776.01,
		"hash": "f8af6f3ab96a1c03278855eb8b1069e756c7f7566f065ebd49763ffff0b68dee"
	},
	{
		"id": "c47b6ba97de9",
		"ts": "2026-09-05T19:52:36.091Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 858593.59,
		"hash": "c47b6ba97de9cb2a6ea4180fe0167e1710ee69a8bc194bec453191359d95dd26"
	},
	{
		"id": "78d148a8ba19",
		"ts": "2026-09-05T19:52:36.312Z",
		"symbol": "STFY",
		"token": "0xC6405D7a226e1C18E559Be2F335F74C01Ad07bF5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 111567.93,
		"hash": "78d148a8ba195221d2dae13842a0220d60ae959718f14c0ffc3db636578bb9d7"
	},
	{
		"id": "93b8d0052b34",
		"ts": "2026-09-05T19:52:36.542Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 59715.26,
		"hash": "93b8d0052b34de1024c264e6f35c1f85bc24c604d5780bbf80d9e3236bf42cac"
	},
	{
		"id": "4de2a1000efe",
		"ts": "2026-09-05T19:52:36.766Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 153143.97,
		"hash": "4de2a1000efefa8f725d1fce89835144142b242b4cd267d112b1ea2390955dd7"
	},
	{
		"id": "4b5a67e68ff5",
		"ts": "2026-09-05T19:52:36.989Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 139353.39,
		"hash": "4b5a67e68ff5bace8f4f9df027ce8708691dcef608e11eeb5a58d7489d31c230"
	},
	{
		"id": "53828e6a2fc9",
		"ts": "2026-09-05T17:06:03.957Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116628069.25,
		"hash": "53828e6a2fc97462a3c14941c3c06bdb3e0f5596a5195fcea3d19126f2465203"
	},
	{
		"id": "87c4d8c1d75f",
		"ts": "2026-09-05T17:06:04.486Z",
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
		"liquidityUsd": 16984941.79,
		"hash": "87c4d8c1d75fddf45a734a4e8ed387032422682d9c03663ef721a4cedfaf77b3"
	},
	{
		"id": "05609b14b80e",
		"ts": "2026-09-05T17:06:04.862Z",
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
		"liquidityUsd": 1030845.5,
		"hash": "05609b14b80e590ec9362436c17c3ec78c3fde8c847d3aba18166c387a34cb72"
	},
	{
		"id": "218cea509d3f",
		"ts": "2026-09-05T17:06:05.134Z",
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
		"liquidityUsd": 29790395.06,
		"hash": "218cea509d3f21b0c629307b196ba18b01124170fd72fb949f82d22e5dd65c5a"
	},
	{
		"id": "d5969d8901a1",
		"ts": "2026-09-05T17:06:05.496Z",
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
		"liquidityUsd": 4263725.38,
		"hash": "d5969d8901a1d6a1f097234c7bce41e2d055da70562a5dfaca7f9ac971aa7932"
	},
	{
		"id": "d2ff57f37691",
		"ts": "2026-09-05T17:06:05.791Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1186382.69,
		"hash": "d2ff57f376915def68abd6436f818bd9cf9102fa3dc0abd330dbd4720e83731e"
	},
	{
		"id": "97234977c0fb",
		"ts": "2026-09-05T17:06:06.079Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1153862.75,
		"hash": "97234977c0fbbc99bbe2e0a7cc3343648fcd9c7f68f3c441633dadeda1257c24"
	},
	{
		"id": "fc3152fa7bce",
		"ts": "2026-09-05T17:06:06.433Z",
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
		"liquidityUsd": 3082506.46,
		"hash": "fc3152fa7bce0b411a33070f884938823af6faf1cf2fd49e91f95aa4d593dacc"
	},
	{
		"id": "16548b2f72b6",
		"ts": "2026-09-05T17:06:06.725Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1184695.66,
		"hash": "16548b2f72b6b8eb9fc73bd6e081655169968155dc1890a06579f92b08b9688d"
	},
	{
		"id": "bc0c8fde345e",
		"ts": "2026-09-05T17:06:06.973Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 263982.4,
		"hash": "bc0c8fde345ec3f9bf70ab3c1387f0daf1cc632451e9408050a0daec78213e12"
	},
	{
		"id": "8423ea7111b2",
		"ts": "2026-09-05T17:06:07.207Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 213468.96,
		"hash": "8423ea7111b2a939b028302ee21a160095c2203710d81accb77547fb641f7afc"
	},
	{
		"id": "064ce890f29c",
		"ts": "2026-09-05T17:06:07.437Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1315506.13,
		"hash": "064ce890f29cc9a16c7ebdc0e82a493df7acd212325b5f3e5ceef0c44fd38a38"
	},
	{
		"id": "08c0b4dbbe97",
		"ts": "2026-09-05T17:06:07.669Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3305096.4,
		"hash": "08c0b4dbbe97787f482ef542a1f8378235ddab7cc8019b2a1bca25a09ee2aeae"
	},
	{
		"id": "399a16a3203f",
		"ts": "2026-09-05T17:06:07.907Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 857288.59,
		"hash": "399a16a3203f23be21eb1487813fab3d47e6539ebd91379ddc190b44d6a3d022"
	},
	{
		"id": "9c7188513ef4",
		"ts": "2026-09-05T17:06:08.143Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 177218.6,
		"hash": "9c7188513ef4d51b8000e6b71f0e4e5fd6391a0db3d77b330d51cb425d834802"
	},
	{
		"id": "d16d05c19c1e",
		"ts": "2026-09-05T17:06:08.378Z",
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
		"liquidityUsd": 563351.31,
		"hash": "d16d05c19c1e9c38d44ab192a6d430936bb9931618fb6fb2a57ff98ba4b33415"
	},
	{
		"id": "79b4b75213b9",
		"ts": "2026-09-05T17:06:08.611Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 54092.54,
		"hash": "79b4b75213b9bfb2fcff6183f07f10fbadd18c75b8816fa698c51afb3293c7f4"
	},
	{
		"id": "369b38dbd3bd",
		"ts": "2026-09-05T17:06:08.911Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 142468.6,
		"hash": "369b38dbd3bd37cb040ee008b3da35414a7ef0196a90f4e1ae8d5caf33189853"
	},
	{
		"id": "c554844011d1",
		"ts": "2026-09-05T17:06:09.144Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1853651.96,
		"hash": "c554844011d157b59b196710e4fe9ade58f3ea0aa75894f8a740681d179cd773"
	},
	{
		"id": "d8d5c7cd0f45",
		"ts": "2026-09-05T17:06:09.377Z",
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
		"liquidityUsd": 916546.54,
		"hash": "d8d5c7cd0f458b20f2232abcae35c14d7ff5d9c37893d60af6d1cfbeb2b792be"
	},
	{
		"id": "2dd2ac508401",
		"ts": "2026-09-05T14:29:48.538Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116265438.71,
		"hash": "2dd2ac50840182f965087c97dc8ce04a3de0ab931f5de6d420bf031af16ce1da"
	},
	{
		"id": "cf4e7b7252e4",
		"ts": "2026-09-05T14:29:49.039Z",
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
		"liquidityUsd": 19128589.48,
		"hash": "cf4e7b7252e41cfc1dbb4b6e4da1cd8965d11b7e0d53fe47bfe778616a993cba"
	},
	{
		"id": "6570e54912b1",
		"ts": "2026-09-05T14:29:49.300Z",
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
		"liquidityUsd": 1025752.24,
		"hash": "6570e54912b1372de4ac1589202469d9c4e8f55bb7124e4eb53db8cec6932d37"
	},
	{
		"id": "f18586e0c400",
		"ts": "2026-09-05T14:29:49.558Z",
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
		"liquidityUsd": 29761534.69,
		"hash": "f18586e0c4002ce2f3f5d5806b535eaa2ddfd2d9212c4197b4034e89f37bc5bc"
	},
	{
		"id": "0446f0e8c2b8",
		"ts": "2026-09-05T14:29:49.808Z",
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
		"liquidityUsd": 4249277.29,
		"hash": "0446f0e8c2b84d643e957e72ca7db9fe4c7ab3a9b96294673a4b8cfacd32a41d"
	},
	{
		"id": "b5ac7f66a72e",
		"ts": "2026-09-05T14:29:50.083Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1180818.57,
		"hash": "b5ac7f66a72e6e10db17e9d3c0de75975a45705d5e69246d9dbd606e1c2d9005"
	},
	{
		"id": "fa0280b3a928",
		"ts": "2026-09-05T14:29:50.336Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1182783.44,
		"hash": "fa0280b3a9287da03a72ff00a79617138ef21aa4cf56256081d6bb5b9059b31a"
	},
	{
		"id": "f16528949360",
		"ts": "2026-09-05T14:29:50.604Z",
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
		"liquidityUsd": 3055756.58,
		"hash": "f16528949360967bd46c017978c389a431eeaf8e4d0e6222f4304cc207a30339"
	},
	{
		"id": "f0c815fc2e3c",
		"ts": "2026-09-05T14:29:50.857Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1198046.34,
		"hash": "f0c815fc2e3c2dc8c6bd5a972f6bfc610faeb750d6b52437dfd859fde80ef604"
	},
	{
		"id": "932fac0dd28a",
		"ts": "2026-09-05T14:29:51.193Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 240496.01,
		"hash": "932fac0dd28abf1cefdd08252dda70197f4ca0af54a66d4cc4d4ecff80996753"
	},
	{
		"id": "de0c7fc59671",
		"ts": "2026-09-05T14:29:51.422Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 224642.18,
		"hash": "de0c7fc596717f29e79066dfa738a0c081906e13e733bdf6b933941897ccbb1c"
	},
	{
		"id": "6e829eb551b7",
		"ts": "2026-09-05T14:29:51.649Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3300452.75,
		"hash": "6e829eb551b7aad43eb2c6530edca517671b5620c6baf70b6735579852b31e58"
	},
	{
		"id": "d57e9249ed0b",
		"ts": "2026-09-05T14:29:51.875Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 175958.82,
		"hash": "d57e9249ed0b379a2e07215f5f97b13206d66c955950dc6e1c1317b152567421"
	},
	{
		"id": "7e0105208a98",
		"ts": "2026-09-05T14:29:52.102Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 857987.56,
		"hash": "7e0105208a9828a7f5972a64666863604492f26f357a94a31363dd6fdb624645"
	},
	{
		"id": "02a7f091f12e",
		"ts": "2026-09-05T14:29:52.330Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1282043.19,
		"hash": "02a7f091f12e1576111cbf92d7bf668ad223a5bcc7ec8c007a4a7fa39ff120bc"
	},
	{
		"id": "3dacdff27657",
		"ts": "2026-09-05T14:29:52.554Z",
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
		"liquidityUsd": 921907.18,
		"hash": "3dacdff27657db547160b4bdb5f4bbe8bbe906e53530730f75715e8a2a7adb64"
	},
	{
		"id": "9ecb3d70e307",
		"ts": "2026-09-05T14:29:52.783Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 154280.51,
		"hash": "9ecb3d70e3077c5250c9740abdba81551c6f67906374bb7737817c8615a3cc5c"
	},
	{
		"id": "4aa693c6aae7",
		"ts": "2026-09-05T14:29:53.008Z",
		"symbol": "RAWR",
		"token": "0xB200000000000000000000503d889fDcbE48B801",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 147389.69,
		"hash": "4aa693c6aae7ea15191ff7ae98d8f0534510ab8de0e9fef51997ec101e70f79a"
	},
	{
		"id": "2904c993f790",
		"ts": "2026-09-05T14:29:53.234Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 990614.58,
		"hash": "2904c993f79043124d5f909ee7c472bc6e61fa1ea4d157cb3d91150a8a2e56d9"
	},
	{
		"id": "3f9cdc4b4c72",
		"ts": "2026-09-05T14:29:53.460Z",
		"symbol": "BPAD",
		"token": "0xf5F11BC9Be9D6690f795D04d2fc9bdd097008a2B",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 45473.73,
		"hash": "3f9cdc4b4c72b276e010787f25f671cdcc09159bc7abda94bf494d0c22d1741e"
	},
	{
		"id": "2991ee3c626b",
		"ts": "2026-09-05T11:35:02.332Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 116248320.48,
		"hash": "2991ee3c626b283b95b0a74d9f7c05c7f872d6385c950c7309913ea15cfe639f"
	},
	{
		"id": "f75cc4566d1e",
		"ts": "2026-09-05T11:35:02.578Z",
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
		"liquidityUsd": 18698211.49,
		"hash": "f75cc4566d1e5a4f978d7f573f022f101bd80e2a8617e2f895262b3ab83aa61d"
	},
	{
		"id": "69ee592e9933",
		"ts": "2026-09-05T11:35:02.833Z",
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
		"liquidityUsd": 1025013.84,
		"hash": "69ee592e9933ed753d3f5043f648040215e505dca4c309966ce1392b03b5edfa"
	},
	{
		"id": "6f6821652866",
		"ts": "2026-09-05T11:35:03.084Z",
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
		"liquidityUsd": 29791602.58,
		"hash": "6f6821652866885e4ae390831e206be0a91318e882fff5e6be21a793d7545b00"
	},
	{
		"id": "467cd72d3e16",
		"ts": "2026-09-05T11:35:03.323Z",
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
		"liquidityUsd": 4220323.1,
		"hash": "467cd72d3e16aa986e81346cd7dbed51aab46cacc15ca2b5fd747895b0d28438"
	},
	{
		"id": "597ced5c46ac",
		"ts": "2026-09-05T11:35:03.610Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1171949.69,
		"hash": "597ced5c46ac8e565684d61fadfa8f78f8a644aa83f878e586964b67aed5bf9a"
	},
	{
		"id": "348202aec2f2",
		"ts": "2026-09-05T11:35:03.849Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2696046.62,
		"hash": "348202aec2f20d6bdd4ad7e29c2dc68f22344db5dedff6f9c31818358e90a07c"
	},
	{
		"id": "a183ca704c70",
		"ts": "2026-09-05T11:35:04.132Z",
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
		"liquidityUsd": 1531980.64,
		"hash": "a183ca704c703c0104b746adc72bb9112f5e244094773ca9a541b3a328f57ddb"
	},
	{
		"id": "2c5eba77da20",
		"ts": "2026-09-05T11:35:04.426Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1177880.74,
		"hash": "2c5eba77da2075ba3374af2ac4588b6e19a9115515fc55e793048c6185efb75f"
	},
	{
		"id": "04d1e518ee21",
		"ts": "2026-09-05T11:35:04.665Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 234963.54,
		"hash": "04d1e518ee21219cd96e73f7c2406845ea92001c196a62be5b52929751aa80c2"
	},
	{
		"id": "af0385a9831a",
		"ts": "2026-09-05T11:35:04.904Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3317639.52,
		"hash": "af0385a9831a3ca183ce632016d6ae36f15b9aaaf4c12feb8aee3eb4a2ec2dbe"
	},
	{
		"id": "281bbb7dd8ef",
		"ts": "2026-09-05T11:35:05.129Z",
		"symbol": "FLOCK",
		"token": "0x5aB3D4c385B400F3aBB49e80DE2fAF6a88A7B691",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 171749.43,
		"hash": "281bbb7dd8efa6092c974965ba04ea213e643703015713a8e305d0d6040de736"
	},
	{
		"id": "91c791bac062",
		"ts": "2026-09-05T11:35:05.353Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 851068.43,
		"hash": "91c791bac062142eeffab785eacae5ee10087257bce63d5061855acf4ccd73f5"
	},
	{
		"id": "591f678be33e",
		"ts": "2026-09-05T11:35:05.591Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1285784.38,
		"hash": "591f678be33ec4b421848d625d27a665c3bec2ce956b612433eee5a9275cd072"
	},
	{
		"id": "eaf8b7df0e36",
		"ts": "2026-09-05T11:35:05.816Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 195647.19,
		"hash": "eaf8b7df0e3614c4e1c838f9318b7907132c98c27141abfcfd21bedcdf775554"
	},
	{
		"id": "49d2095b2b3f",
		"ts": "2026-09-05T11:35:06.041Z",
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
		"liquidityUsd": 934306.03,
		"hash": "49d2095b2b3fe68ceedb1658e8f05e42ef5914cd80b8465f73e8a9748346a056"
	},
	{
		"id": "94be3f46fbba",
		"ts": "2026-09-05T11:35:06.280Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1844712.81,
		"hash": "94be3f46fbbad924be0f7561ca58b50c506ff082244b583ec0da33b8814718b9"
	},
	{
		"id": "d6ea7d6381fd",
		"ts": "2026-09-05T11:35:06.504Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 147968.81,
		"hash": "d6ea7d6381fd92744ba4bdfd714a6c7c51d9bc13761e91e096f3c3ac3b82bdd2"
	},
	{
		"id": "3c1a2b457954",
		"ts": "2026-09-05T11:35:06.740Z",
		"symbol": "DRV",
		"token": "0x9d0E8f5b25384C7310CB8C6aE32C8fbeb645d083",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1012546.5,
		"hash": "3c1a2b457954b084b7c755ecb887dbe274f85f2e6b4a2989fa3a949c25e9b6e8"
	},
	{
		"id": "51623e5f25fe",
		"ts": "2026-09-05T07:21:35.103Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117410441.35,
		"hash": "51623e5f25fecf59578073da7a20c8ef8aa0ad7282289b08ab57b45e35b4c586"
	},
	{
		"id": "9b1c0c604261",
		"ts": "2026-09-05T07:21:35.372Z",
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
		"liquidityUsd": 18689934.08,
		"hash": "9b1c0c60426136e1db65b4da120ba005f3e28c963ca969b3da91e991c05fb304"
	},
	{
		"id": "750338f7c5dd",
		"ts": "2026-09-05T07:21:35.617Z",
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
		"liquidityUsd": 1030580.9,
		"hash": "750338f7c5dd00e62748c62df90c57e78d1cccfe4e517458f653456c7acc06ee"
	},
	{
		"id": "3f74cb2468bd",
		"ts": "2026-09-05T07:21:35.872Z",
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
		"liquidityUsd": 29964790.53,
		"hash": "3f74cb2468bd8206b1e1a03d65ffba7bd0185c6778c09c990c0aec0ccfe4e5de"
	},
	{
		"id": "86af9f7ad831",
		"ts": "2026-09-05T07:21:36.131Z",
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
		"liquidityUsd": 4205015.58,
		"hash": "86af9f7ad831febdbaa74dfc62e6820274e007a5468c95f4d806edf99d378322"
	},
	{
		"id": "6f878732c178",
		"ts": "2026-09-05T07:21:36.387Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1162851.01,
		"hash": "6f878732c1786e622f089c6f201a0245111b742ad25af45849489fc60c6d9303"
	},
	{
		"id": "51e8a75cc20e",
		"ts": "2026-09-05T07:21:36.908Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 29964790.53,
		"hash": "51e8a75cc20e9f6a59978781851f371c079b467a5adc0e854d9e0d2215bee974"
	},
	{
		"id": "ca5282f1a6c0",
		"ts": "2026-09-05T07:21:37.168Z",
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
		"liquidityUsd": 1532664.18,
		"hash": "ca5282f1a6c0d8d0fe42026d2f41e1e095b4dfabf49a40e4bb814edd568dedb2"
	},
	{
		"id": "e5d19ab7f65d",
		"ts": "2026-09-05T07:21:37.463Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1100552.68,
		"hash": "e5d19ab7f65dd48ec4ef3c04ed2724954d924aff08b3c8431434aeecc4ac5cde"
	},
	{
		"id": "eb885eaa38f0",
		"ts": "2026-09-05T07:21:37.777Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1287220.73,
		"hash": "eb885eaa38f0c4bac9c2d9428ebc6b15a82ba37999520eb7b2ac53ddd6dffb45"
	},
	{
		"id": "53169719ced0",
		"ts": "2026-09-05T07:21:38.016Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 850861.07,
		"hash": "53169719ced046b57c8e1579fee72a5ef9886f5af7ff8fa4ddf70892d84d129a"
	},
	{
		"id": "7bfac9cfa9d0",
		"ts": "2026-09-05T07:21:38.243Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 190507.79,
		"hash": "7bfac9cfa9d00e7b87cf7e8ab12a3794edbaaa7e58c8834a68b0b1bac8a5d50a"
	},
	{
		"id": "838152875e09",
		"ts": "2026-09-05T07:21:38.479Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1845850.21,
		"hash": "838152875e09d6cfbebb8d28468240a7f43894928ea0a61ce9bb4f63d27f7f0a"
	},
	{
		"id": "8c8b404fb914",
		"ts": "2026-09-05T07:21:38.720Z",
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
		"liquidityUsd": 914218.49,
		"hash": "8c8b404fb9141059e3c20505ade4b88682909a45ee1e0a6f9743f34bd9b4d176"
	},
	{
		"id": "091b092ea8e6",
		"ts": "2026-09-05T07:21:38.947Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3296931.4,
		"hash": "091b092ea8e6447216ff6b8eb80a13fe9dc12b18b1d51ab2895ddce3ea67b51d"
	},
	{
		"id": "c60893cd94a4",
		"ts": "2026-09-05T07:21:39.183Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 136252.68,
		"hash": "c60893cd94a4629ba17ec58b09af5c75d6a6ad378a37615be6cb3d37ebdc3c0b"
	},
	{
		"id": "82bbf20a61d0",
		"ts": "2026-09-05T07:21:39.422Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 509010.55,
		"hash": "82bbf20a61d04f15470111f3f5581d6be9f47601bcc42eaa053771454a30b30b"
	},
	{
		"id": "9a09bd79ee94",
		"ts": "2026-09-05T02:45:23.161Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117476340.79,
		"hash": "9a09bd79ee944c52573a50584a9b3faf82e08093592c8d4998432c980c3639c0"
	},
	{
		"id": "504ac4943edb",
		"ts": "2026-09-05T02:45:23.422Z",
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
		"liquidityUsd": 18689145.97,
		"hash": "504ac4943edb490acf8476db0089c616b02778afca6a76edceb61db14a221505"
	},
	{
		"id": "8de5e4b25fd7",
		"ts": "2026-09-05T02:45:23.679Z",
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
		"liquidityUsd": 1032294.65,
		"hash": "8de5e4b25fd701ddfc26253d731495a06488d5662254740648e70266177ae735"
	},
	{
		"id": "2decb676f436",
		"ts": "2026-09-05T02:45:23.936Z",
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
		"liquidityUsd": 29664233.47,
		"hash": "2decb676f43677cd6eb2e7702271fef513b0b9dc85ee2d8bbb52220097d910a4"
	},
	{
		"id": "f8451df8e945",
		"ts": "2026-09-05T02:45:24.193Z",
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
		"liquidityUsd": 4176632.48,
		"hash": "f8451df8e945968cb42385d47d093935f8321eddcf6cef4202ec5726617336e6"
	},
	{
		"id": "8a69273b2263",
		"ts": "2026-09-05T02:45:24.446Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1151380.51,
		"hash": "8a69273b2263e3c5e283521ebddcda852e8d4cf233cd5977cd7aece878f0f07b"
	},
	{
		"id": "ae70b0c43134",
		"ts": "2026-09-05T02:45:24.703Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2405132.57,
		"hash": "ae70b0c43134bdd40bba510447a01962a334754ac95c0ea8d0d3fc593ece64a8"
	},
	{
		"id": "e5a0766f56f8",
		"ts": "2026-09-05T02:45:24.965Z",
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
		"liquidityUsd": 1466224.89,
		"hash": "e5a0766f56f84e4330f9ef17e1d8516a751a07c1158a1651bbafdbe65e64fec8"
	},
	{
		"id": "fb1275b52ed5",
		"ts": "2026-09-05T02:45:25.229Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1079746.31,
		"hash": "fb1275b52ed516a778184a2b379802aff4aa8e1f534349f863bf00b9c7042216"
	},
	{
		"id": "d803fad1595c",
		"ts": "2026-09-05T02:45:25.483Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1284823.84,
		"hash": "d803fad1595cf9157324ea38633f04aadf3044a6e6c858f453e456a29261d28d"
	},
	{
		"id": "dd8d768f0e92",
		"ts": "2026-09-05T02:45:25.719Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 846139.48,
		"hash": "dd8d768f0e92accba8ef2149740ce73cbf7b01688dad46285d6e0d75522304a6"
	},
	{
		"id": "bbf960c023f3",
		"ts": "2026-09-05T02:45:25.956Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 160889.28,
		"hash": "bbf960c023f31138436190b3452e5b5661a024154d99d3a50ad2f90ed9f54ee9"
	},
	{
		"id": "2ab817397196",
		"ts": "2026-09-05T02:45:26.194Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1850790.5,
		"hash": "2ab817397196ba9d60bcece2b86d89510757b42214cae037810bf94d4f3e34bd"
	},
	{
		"id": "c8e8e31b04e2",
		"ts": "2026-09-05T02:45:26.432Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 142332.71,
		"hash": "c8e8e31b04e25076d447e89987cb9d1b8f2bef0f730fe8e15d08ad6b70033d89"
	},
	{
		"id": "db82f937f402",
		"ts": "2026-09-05T02:45:26.671Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3276947.5,
		"hash": "db82f937f4023251ae247c941a03b8a5664ca594fbccd4bf164902747403dc98"
	},
	{
		"id": "59f9ec97cd55",
		"ts": "2026-09-05T02:45:26.909Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1328438.54,
		"hash": "59f9ec97cd55b320182107e311688a0cc03063fdb634fb01d3bb5d6c7609e1df"
	},
	{
		"id": "f3a444e1e19a",
		"ts": "2026-09-05T02:45:27.147Z",
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
		"liquidityUsd": 922108.7,
		"hash": "f3a444e1e19ac10042ac380604e7ddad5351a1e7a6c51152f09af099afac73a1"
	},
	{
		"id": "09a9516ad8fa",
		"ts": "2026-09-05T02:45:27.386Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 506590.03,
		"hash": "09a9516ad8faa9d09738724242e795d72ee373f3cadf3195c1cfb9d471f169d7"
	},
	{
		"id": "a2326da37fbc",
		"ts": "2026-09-04T23:40:35.426Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117503509.35,
		"hash": "a2326da37fbc216395fc6f03743ea41fdf3af2de38109b972e9b9d8a7039db94"
	},
	{
		"id": "b5648bc1d07b",
		"ts": "2026-09-04T23:40:35.672Z",
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
		"liquidityUsd": 18630351.31,
		"hash": "b5648bc1d07b511099b6c8852eddb15b2c5e42e468e95a61e9ac19b8f6627f3e"
	},
	{
		"id": "27526d0b1865",
		"ts": "2026-09-04T23:40:35.904Z",
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
		"liquidityUsd": 1025694.52,
		"hash": "27526d0b1865935a0e8ba92cebc523b38b7b4babef7d1eab902acadec654dd35"
	},
	{
		"id": "a1896c757241",
		"ts": "2026-09-04T23:40:36.118Z",
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
		"liquidityUsd": 29251695.4,
		"hash": "a1896c757241a46015015dd8eb6a6dfe7a238b6c51f18f2611cc2a28f58094c1"
	},
	{
		"id": "b0d9dd4d249a",
		"ts": "2026-09-04T23:40:36.346Z",
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
		"liquidityUsd": 4144212.32,
		"hash": "b0d9dd4d249a856a58deeb354b2936fa25dd9179ac4f2e57ea34f05c86400dc1"
	},
	{
		"id": "ad5310828f45",
		"ts": "2026-09-04T23:40:36.564Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1148707.33,
		"hash": "ad5310828f455d0d9961b03e5677a83bba5b9c2e3b51e6fd34d9041d2a9ceaae"
	},
	{
		"id": "e1389ad0e641",
		"ts": "2026-09-04T23:40:36.777Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2383305.59,
		"hash": "e1389ad0e6415864a9adf9f7980ed68d3895beb7683cfe88bdb88551fff698d4"
	},
	{
		"id": "4f4c0a47ac57",
		"ts": "2026-09-04T23:40:36.995Z",
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
		"liquidityUsd": 1466848.21,
		"hash": "4f4c0a47ac57fbeb13c34c0f23e1bb5320f0a4c8cb6ccb17a3f947c029449a73"
	},
	{
		"id": "a85f34d828cb",
		"ts": "2026-09-04T23:40:37.391Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1095253.68,
		"hash": "a85f34d828cb0be0927795d1f085d88fee0a1ad53c75e29318ba05baf8a63cf7"
	},
	{
		"id": "62ca63acc518",
		"ts": "2026-09-04T23:40:37.605Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 845296.95,
		"hash": "62ca63acc518eb60a4d4e6507309519f07491064de3fbfabac9a8dc43d5f4cee"
	},
	{
		"id": "b2c61120c686",
		"ts": "2026-09-04T23:40:37.803Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1285542.92,
		"hash": "b2c61120c68621f6210c8ca89cdc4fab439280b93a9fb534e42a5ef9155f64b2"
	},
	{
		"id": "b54648d4d40c",
		"ts": "2026-09-04T23:40:37.999Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 179517.36,
		"hash": "b54648d4d40cab719e6fedd01170de8af98455b7ac20a0ccdc58167734761189"
	},
	{
		"id": "517d404b1559",
		"ts": "2026-09-04T23:40:38.211Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1859304.43,
		"hash": "517d404b1559c87fea0407adcaa503cdc300fb1daff98062ec952b27af5dd671"
	},
	{
		"id": "9c393d5e8e6f",
		"ts": "2026-09-04T23:40:38.410Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3243607.21,
		"hash": "9c393d5e8e6fe34abb799c47d579937e191769d22efa4a724b09c837a11b9174"
	},
	{
		"id": "0c14bf8e1241",
		"ts": "2026-09-04T23:40:38.617Z",
		"symbol": "doginme",
		"token": "0x6921B130D297cc43754afba22e5EAc0FBf8Db75b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1334480.37,
		"hash": "0c14bf8e12414eab13601faf72d50d851c8f30a977bdbcc327431be7815221a1"
	},
	{
		"id": "5e22ca52f00c",
		"ts": "2026-09-04T23:40:38.811Z",
		"symbol": "BASEJUICE",
		"token": "0xb200000000000000000000046390aed221043f01",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 139912.28,
		"hash": "5e22ca52f00c895f05ae05fbc4eabd23741fb76b640b7316880a55a4f4df609c"
	},
	{
		"id": "e6b4a72cc255",
		"ts": "2026-09-04T23:40:39.048Z",
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
		"liquidityUsd": 931274.4,
		"hash": "e6b4a72cc255548c0a0e0a9cd43c35d5b13845772a77cbffd72beb600bd59953"
	},
	{
		"id": "d27ed4eeb883",
		"ts": "2026-09-04T21:12:03.190Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 117488271.08,
		"hash": "d27ed4eeb883d8358919d468b074378ab7dfd8d12c9e3d24cdb1a736f4506139"
	},
	{
		"id": "d175d525aba0",
		"ts": "2026-09-04T21:12:03.691Z",
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
		"liquidityUsd": 18442144.85,
		"hash": "d175d525aba08edc8eb0f43d280ad6988db34e7a34a0de99884fea621ba3ebf0"
	},
	{
		"id": "f8bf56bfaebc",
		"ts": "2026-09-04T21:12:03.957Z",
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
		"liquidityUsd": 1034376.16,
		"hash": "f8bf56bfaebcc9e12bdce75165d702904aba0aad992c2caf41f368a228888d0f"
	},
	{
		"id": "dc4b19ad6e96",
		"ts": "2026-09-04T21:12:04.236Z",
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
		"liquidityUsd": 29307490.73,
		"hash": "dc4b19ad6e96a4253fc5f5881df37fe2708d9b5a0af0e80ef2ecc6ba9e2a2a5b"
	},
	{
		"id": "0a72395a80a3",
		"ts": "2026-09-04T21:12:04.488Z",
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
		"liquidityUsd": 4148238.04,
		"hash": "0a72395a80a3779af8b2e134e741449abda21df34fa29cd16aa51b55b792bc7b"
	},
	{
		"id": "5d50dd0abc90",
		"ts": "2026-09-04T21:12:04.740Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1147442.43,
		"hash": "5d50dd0abc902566a57be1509dbc8dcc0fc9e275c180762731e931dacae18194"
	},
	{
		"id": "af84f7fa8c9f",
		"ts": "2026-09-04T21:12:05.001Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 2256869.22,
		"hash": "af84f7fa8c9f0815f70db567eaceefe8548c8e621c41b8931824184bcf63fc95"
	},
	{
		"id": "6b4e5ef6ac8a",
		"ts": "2026-09-04T21:12:05.251Z",
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
		"liquidityUsd": 1466306.14,
		"hash": "6b4e5ef6ac8a7ffee6862d48c1174511eb1fae6003f598db579a2f98d7716a66"
	},
	{
		"id": "84c0bf9164d9",
		"ts": "2026-09-04T21:12:05.506Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 1183633.63,
		"hash": "84c0bf9164d95f7ad933f52656f5884846608f6746c45c82405c21fcd2c489fd"
	},
	{
		"id": "5d448eacd937",
		"ts": "2026-09-04T21:12:05.753Z",
		"symbol": "CP",
		"token": "0x001AAd84c21A5CD4d696C56d44866e9703c43F77",
		"score": 70,
		"rating": "medium",
		"verdict": "RISKY",
		"confidence": 0.4,
		"flags": [
			"volume_liquidity_anomaly",
			"mintable",
			"owner_not_renounced",
			"extreme_holder_concentration"
		],
		"liquidityUsd": 831099.96,
		"hash": "5d448eacd9376141b5bb65797e342a42ca773f3a74b690ac62a0ecdf3ac1ee8f"
	},
	{
		"id": "2ba44c6376e7",
		"ts": "2026-09-04T21:12:05.988Z",
		"symbol": "STONKEX",
		"token": "0x5ab000ff9B9FfE0349CE5ffA5fD86f217C3680F5",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 202299.02,
		"hash": "2ba44c6376e7d2b73a98f1a22f4f66cffcf68b92aeb9b0421633699ba5080460"
	},
	{
		"id": "f4007ada140c",
		"ts": "2026-09-04T21:12:06.228Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1302958.01,
		"hash": "f4007ada140c6f6dcdb0cc8e1871a270d7ce3a401217e2f59a12644d979ba1fd"
	}
]
