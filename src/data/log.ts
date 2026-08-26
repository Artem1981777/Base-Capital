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
	"updatedAt": "2026-08-26T12:42:51.312Z",
	"tokensScored": 15217,
	"verdictsIssued": 15217,
	"safe": 12981,
	"risky": 1119,
	"likelyRug": 1117,
	"ticks": 878
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "394fb4811952",
		"ts": "2026-08-26T12:42:46.904Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115303634.12,
		"hash": "394fb4811952c74b3b359cea153c1a1f4d06590b3c484dae93a901688ece49d2"
	},
	{
		"id": "ba12a75a74d0",
		"ts": "2026-08-26T12:42:47.196Z",
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
		"liquidityUsd": 16124767.03,
		"hash": "ba12a75a74d0a296420af8f1242e9025aa9b96cc2a4f1d7334feab5e717a0518"
	},
	{
		"id": "d119eaa3dd25",
		"ts": "2026-08-26T12:42:47.458Z",
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
		"liquidityUsd": 962569.85,
		"hash": "d119eaa3dd255891ea876f3563e50722b16f5b2c157754e68aad10cdfee1d5bb"
	},
	{
		"id": "469b6fc3dab4",
		"ts": "2026-08-26T12:42:47.730Z",
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
		"liquidityUsd": 29971605.91,
		"hash": "469b6fc3dab4d033395ea53958ba386d1c1d321957dc12cc64d14f6617b51fb5"
	},
	{
		"id": "6b84ee11505c",
		"ts": "2026-08-26T12:42:47.998Z",
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
		"liquidityUsd": 4675742.16,
		"hash": "6b84ee11505c630f219d279a67c1c2f35a43f8d434573d8fc6218f216386f04b"
	},
	{
		"id": "f3c68e2ab73d",
		"ts": "2026-08-26T12:42:48.263Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1184008.63,
		"hash": "f3c68e2ab73dc1333e75638fb2b1c641c3cf05ff01347d137affe718caeec90a"
	},
	{
		"id": "ebe421430191",
		"ts": "2026-08-26T12:42:48.530Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1378974,
		"hash": "ebe4214301914c79fa4cae6864fd554a9251485dc7b2d70af647b35be50ea462"
	},
	{
		"id": "cb5efeb619ce",
		"ts": "2026-08-26T12:42:48.798Z",
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
		"liquidityUsd": 1905255.18,
		"hash": "cb5efeb619ce497a7594611969396143d355580ac5ba5a28da1510564d3dd117"
	},
	{
		"id": "6e40753fe463",
		"ts": "2026-08-26T12:42:49.096Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 714475.51,
		"hash": "6e40753fe4633a738d4d3644aa985f027d963065cb495133f4083e7a1d81dfc3"
	},
	{
		"id": "db7b64838d96",
		"ts": "2026-08-26T12:42:49.360Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1427055.26,
		"hash": "db7b64838d96caa2caecd694b111ca71a160bbb4b020ecb8667150a99a639ce5"
	},
	{
		"id": "3515ee6dab00",
		"ts": "2026-08-26T12:42:49.609Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1169905.45,
		"hash": "3515ee6dab0084b44fcfbb7dd0a1fbf5474da6f8d968334c4cd0c341c2a17dce"
	},
	{
		"id": "5c1f52eb479b",
		"ts": "2026-08-26T12:42:49.853Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4105143.52,
		"hash": "5c1f52eb479b1bd2592fbcd6b5803998d054017bd8ebeaddc2aa9a5a87d12980"
	},
	{
		"id": "881995b4cbd0",
		"ts": "2026-08-26T12:42:50.095Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84896.42,
		"hash": "881995b4cbd04ab73ea52c5ca117bd0f2be9837b5b797be907ed00dac1773588"
	},
	{
		"id": "07386bb4829d",
		"ts": "2026-08-26T12:42:50.337Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1384701.89,
		"hash": "07386bb4829d1742661ef24ac37066470dd60ca169df1aebd4da990808c3db2f"
	},
	{
		"id": "efb1d496816c",
		"ts": "2026-08-26T12:42:50.580Z",
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
		"liquidityUsd": 3455352.37,
		"hash": "efb1d496816cff5637e3fda3c5519deb2ea5b35f24cd19227e97441f5d22b4f9"
	},
	{
		"id": "71634c279955",
		"ts": "2026-08-26T12:42:50.823Z",
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
		"liquidityUsd": 11464084.44,
		"hash": "71634c2799552123b0f2a35fcfbbc4db8f9858949bfb0d5671fe9f91545e8614"
	},
	{
		"id": "524144729253",
		"ts": "2026-08-26T12:42:51.067Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 530215.72,
		"hash": "52414472925332d8791c65c663a219e71bd7bdae6d797bbad9dac8d7cf85b806"
	},
	{
		"id": "eb285dd67154",
		"ts": "2026-08-26T12:42:51.312Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 555641.41,
		"hash": "eb285dd6715424579a5909e6bc3ab8393f33e2b8592a2a5b58c82ecf8ab8761d"
	},
	{
		"id": "4b25805b951d",
		"ts": "2026-08-26T11:25:06.804Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115468922.71,
		"hash": "4b25805b951dbd4d64d908bf6ece615a2ac260a384b325c4cb9da943c2d48242"
	},
	{
		"id": "73eca45f41c7",
		"ts": "2026-08-26T11:25:07.049Z",
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
		"liquidityUsd": 17372896.19,
		"hash": "73eca45f41c7504f9377bb62fc2b80b9e2b2b6ae1ef1a2eca22e4aafcf9d440e"
	},
	{
		"id": "21e7c300da00",
		"ts": "2026-08-26T11:25:07.301Z",
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
		"liquidityUsd": 967676.92,
		"hash": "21e7c300da00204f3182fb894ada48f37f4cc13f0e0d931d1f34a40e79190724"
	},
	{
		"id": "dabd6f2cc59d",
		"ts": "2026-08-26T11:25:07.557Z",
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
		"liquidityUsd": 30024233.63,
		"hash": "dabd6f2cc59d7cda9accf1a7b4c4a50eebc9620bb8b6e142691be0780b54a83d"
	},
	{
		"id": "0d8f51b8089f",
		"ts": "2026-08-26T11:25:07.806Z",
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
		"liquidityUsd": 4713883.15,
		"hash": "0d8f51b8089f1208175c87459477b9d443efb7c5517f6691dc17eedd068d2ba5"
	},
	{
		"id": "d9a161ab12b3",
		"ts": "2026-08-26T11:25:08.065Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1179530.84,
		"hash": "d9a161ab12b3d747fe858e40e7ee8be18dd1e30a44c005373129ec1321bdc74a"
	},
	{
		"id": "2db2788944c2",
		"ts": "2026-08-26T11:25:08.315Z",
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
		"liquidityUsd": 456192.87,
		"hash": "2db2788944c28f9975cb9a849e0684b335f3ab47eb09ed8637fc8290535a635c"
	},
	{
		"id": "d41932986a5f",
		"ts": "2026-08-26T11:25:08.773Z",
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
		"liquidityUsd": 1914520.6,
		"hash": "d41932986a5f967c3dcf18b1df756fd28951e312e2acf6c759efca69e495b82e"
	},
	{
		"id": "7d080dcea629",
		"ts": "2026-08-26T11:25:09.016Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1410208.77,
		"hash": "7d080dcea629b5dd99fab76552461a2bf2f526ec3c5b160620cf419887a95ad9"
	},
	{
		"id": "a80001b9cc5c",
		"ts": "2026-08-26T11:25:09.271Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 737196.31,
		"hash": "a80001b9cc5cfae9d9d269b7527b3eef23cfb79f39abd45a2346a0db2e2ea52f"
	},
	{
		"id": "a224ac2a9585",
		"ts": "2026-08-26T11:25:09.500Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1199350.95,
		"hash": "a224ac2a9585b30b44d76fb2b78f6bfd086c99cc6d9647bc296cb7b782879983"
	},
	{
		"id": "93e7955b7a19",
		"ts": "2026-08-26T11:25:09.733Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 98342.97,
		"hash": "93e7955b7a1964b1cc60f8b4939b86d5112ec5c01d15d9ff32a56be1441a13a0"
	},
	{
		"id": "60868bc205d5",
		"ts": "2026-08-26T11:25:09.957Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4127774.74,
		"hash": "60868bc205d5319c733a6511630c37834d4a23080697bab38fb4d5380064ac1e"
	},
	{
		"id": "c49215fcb580",
		"ts": "2026-08-26T11:25:10.191Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1384182.74,
		"hash": "c49215fcb5806c119d7c0f3477aeb99d2949279f192f9478163a9baf9a85a30f"
	},
	{
		"id": "001ed572ba9e",
		"ts": "2026-08-26T11:25:10.421Z",
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
		"liquidityUsd": 532946.75,
		"hash": "001ed572ba9e3ab8382c4ca089f9e32239da9d7fe82c53dd5d8bb64ab92ce1d0"
	},
	{
		"id": "edcee5eb9b0b",
		"ts": "2026-08-26T11:25:10.653Z",
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
		"liquidityUsd": 3475397.64,
		"hash": "edcee5eb9b0b2f8e9ec8418b8528b7ccd5cb4741456eb694816bb7fe68c95cf6"
	},
	{
		"id": "f126fc8dfad3",
		"ts": "2026-08-26T11:25:10.877Z",
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
		"liquidityUsd": 11487793.18,
		"hash": "f126fc8dfad3efa53dcd183341c284f83e96b589bb7fce3e2e20cef16bb3c820"
	},
	{
		"id": "622227dbe2c6",
		"ts": "2026-08-26T11:25:11.114Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 554528.28,
		"hash": "622227dbe2c6891ababe1a9b2e76b5ace9d9eba6e84ccb8a1b96d9afd7fdafe2"
	},
	{
		"id": "9b5edf3a722a",
		"ts": "2026-08-26T10:31:00.414Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115241961.07,
		"hash": "9b5edf3a722a6a8af935159a5b733d15880f87a25b9daaa4f5e7d03c50d878b7"
	},
	{
		"id": "446159c67ab4",
		"ts": "2026-08-26T10:31:00.884Z",
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
		"liquidityUsd": 19126786.28,
		"hash": "446159c67ab47697dc3121850d4d9f66ac1be8092510961536ce8be718e6dbb0"
	},
	{
		"id": "268e2f87ed46",
		"ts": "2026-08-26T10:31:01.268Z",
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
		"liquidityUsd": 964991.89,
		"hash": "268e2f87ed46d890e7381b2e14272bb5eac65f4bd97a022afc2f2313ff8a3439"
	},
	{
		"id": "d4a764bae99d",
		"ts": "2026-08-26T10:31:01.533Z",
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
		"liquidityUsd": 29854738.02,
		"hash": "d4a764bae99dfdf1f2e53762a2eff6ba37ad4ebf70a69f08f7dfd54fc9a6b3eb"
	},
	{
		"id": "044197bab3dd",
		"ts": "2026-08-26T10:31:01.839Z",
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
		"liquidityUsd": 4685289.44,
		"hash": "044197bab3dd9be15b315c41fa697ce9633e38c990f5d4d5e15119f8aace3fa3"
	},
	{
		"id": "6783d18868c7",
		"ts": "2026-08-26T10:31:02.103Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1183502.85,
		"hash": "6783d18868c7a5d58e18f7f2b00247fe0382cc09e14e7750ad888a4cd1cd2b35"
	},
	{
		"id": "b3f63d81c408",
		"ts": "2026-08-26T10:31:02.358Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152989.88,
		"hash": "b3f63d81c4087bec4676244ff68aad3255d94b2f9ad194ff0d542a933d79221b"
	},
	{
		"id": "daf97e938265",
		"ts": "2026-08-26T10:31:02.672Z",
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
		"liquidityUsd": 1907020.24,
		"hash": "daf97e9382656dfa00a7b479e83175f86965d25a96d5d7ae619ad81583307bfd"
	},
	{
		"id": "a714d55a98f3",
		"ts": "2026-08-26T10:31:02.914Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1394182.84,
		"hash": "a714d55a98f343a3b681e8ac515486e40c954bb5cc70feabc9299e58eb02ab1e"
	},
	{
		"id": "151a761e7764",
		"ts": "2026-08-26T10:31:03.193Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 743794.98,
		"hash": "151a761e77643d2589c667dcae786f8f200fbf8d0169fd341566c3a78f9a058f"
	},
	{
		"id": "12989e24f054",
		"ts": "2026-08-26T10:31:03.431Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1207565.33,
		"hash": "12989e24f054607ea3641cead204c15d499d69224214d657669a1c8427f5ccba"
	},
	{
		"id": "f309c90bea88",
		"ts": "2026-08-26T10:31:03.664Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 102310.8,
		"hash": "f309c90bea882af60cac8db72a254e1013eee845c2dec0f1d0eeba9bbeef1f94"
	},
	{
		"id": "e863721491e5",
		"ts": "2026-08-26T10:31:03.888Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4102550.01,
		"hash": "e863721491e558aedfe2af148504c1c2a798837b81d16e699e244d7857d94790"
	},
	{
		"id": "92efc155c8df",
		"ts": "2026-08-26T10:31:04.118Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1406368.96,
		"hash": "92efc155c8df7a2c979ce8a1155511a5e871946851293e547ef984e951dca23e"
	},
	{
		"id": "68e88ffba709",
		"ts": "2026-08-26T10:31:04.353Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 535206.3,
		"hash": "68e88ffba7097ef9966a856ef7ef70628c257f69929d153e7323c51b14fb74be"
	},
	{
		"id": "170d607b5815",
		"ts": "2026-08-26T10:31:04.584Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3478103.63,
		"hash": "170d607b5815a60db451ad543852e7a26e905db2e13cb39cd203147b5da59e99"
	},
	{
		"id": "46c05a97ade2",
		"ts": "2026-08-26T10:31:04.804Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11418630.69,
		"hash": "46c05a97ade2afc216dbaade965f2d827f6869fa7f1ab260aa3913759b155c93"
	},
	{
		"id": "ee6ca7907012",
		"ts": "2026-08-26T10:31:05.036Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1833348.71,
		"hash": "ee6ca7907012528d7c1fe589f4a6fb010faf89a7bc753113124833c9139ff055"
	},
	{
		"id": "626f71df1406",
		"ts": "2026-08-26T09:36:24.643Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115029200.03,
		"hash": "626f71df14069e4f98604a4ebf5cfd9a3c89b0d5b58f2fefaa4975192f2838a8"
	},
	{
		"id": "2e7236768848",
		"ts": "2026-08-26T09:36:25.202Z",
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
		"liquidityUsd": 19256338.42,
		"hash": "2e7236768848c0031422624497a3d5318740da22e1aa28798ee2a5031def899c"
	},
	{
		"id": "712b9901a3c1",
		"ts": "2026-08-26T09:36:25.537Z",
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
		"liquidityUsd": 964587.31,
		"hash": "712b9901a3c189a459a9fbf75c120c28b8670823852a38c5180962f23abecd1f"
	},
	{
		"id": "ffc257d6b1b7",
		"ts": "2026-08-26T09:36:25.869Z",
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
		"liquidityUsd": 29712941.31,
		"hash": "ffc257d6b1b70aec1d0a69f1d560d79fb0a9e20ddc880c5c5ab342bf09ed1860"
	},
	{
		"id": "d5ac4a3f641f",
		"ts": "2026-08-26T09:36:26.199Z",
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
		"liquidityUsd": 4680120.99,
		"hash": "d5ac4a3f641f7064ae01125306c29cf84e8a9890b173a17b937834337d0f4ae5"
	},
	{
		"id": "18e415237df8",
		"ts": "2026-08-26T09:36:26.525Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1179370.28,
		"hash": "18e415237df870cd3a87262cd58562adf69110964bd799d35650f1ea5f37b415"
	},
	{
		"id": "a46b13de3766",
		"ts": "2026-08-26T09:36:26.849Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152885.2,
		"hash": "a46b13de376601b03103dd9c5de37de022aac1b9f3d3c63332930b6dbcb5d6ac"
	},
	{
		"id": "1370aa55cc2c",
		"ts": "2026-08-26T09:36:27.189Z",
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
		"liquidityUsd": 1902693.99,
		"hash": "1370aa55cc2cd53819ca601a1ffb2b9e202e32cef742854f3aab611240e4a7ca"
	},
	{
		"id": "deff5d8123bc",
		"ts": "2026-08-26T09:36:27.515Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1465841.33,
		"hash": "deff5d8123bc46c16c7b032b64336d4286fa0638acdc6b5b3feeea8fff40d8e4"
	},
	{
		"id": "32336d0bfc3a",
		"ts": "2026-08-26T09:36:28.099Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 732091.2,
		"hash": "32336d0bfc3a74efe4dfae765362bff5a88dfdba55e07ce66024bcb5a9ba001f"
	},
	{
		"id": "87f57aedc972",
		"ts": "2026-08-26T09:36:28.410Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1213810.23,
		"hash": "87f57aedc97248a0982a63cae58c6b73db019d3344e2cafa451ba321d17ab181"
	},
	{
		"id": "082f11b2ef5e",
		"ts": "2026-08-26T09:36:28.733Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 100648.99,
		"hash": "082f11b2ef5ec42d5f2d94985e74695649e8609de35843135bb48106f05eb5bf"
	},
	{
		"id": "2bbb274b29e3",
		"ts": "2026-08-26T09:36:29.057Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4102500.05,
		"hash": "2bbb274b29e3a94da816d568f2753a1b7d1b18aaaf6aff237081f7eff3bd1908"
	},
	{
		"id": "90fd7270269d",
		"ts": "2026-08-26T09:36:29.370Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1376107.47,
		"hash": "90fd7270269da513731b9cec6c7effb6ba2b5434e16776f2fdb752eafaa0102f"
	},
	{
		"id": "84d99fa52673",
		"ts": "2026-08-26T09:36:29.694Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3428431.72,
		"hash": "84d99fa526734b85fe2ba4589ced8e4af0762205bc9906187acf271c1cea1dbf"
	},
	{
		"id": "a0ee7c9987c0",
		"ts": "2026-08-26T09:36:30.006Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 539009.49,
		"hash": "a0ee7c9987c0880b7bf441debc71df402d09a64f3d46c6727251879f24a8d799"
	},
	{
		"id": "5fbe176082be",
		"ts": "2026-08-26T09:36:30.328Z",
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
		"liquidityUsd": 11392708.59,
		"hash": "5fbe176082be39975c09337f6b8da71d6d24c87d3843d5f3dd3f0ea43a03d536"
	},
	{
		"id": "441496ea30ad",
		"ts": "2026-08-26T09:36:30.641Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1841005.91,
		"hash": "441496ea30ade9f5b6bda1e9324ef3f9c3e698207727540b81ac4a25cf5afbf4"
	},
	{
		"id": "109714f256e7",
		"ts": "2026-08-26T08:38:01.745Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115071283.66,
		"hash": "109714f256e74107d29ffc7051da14014bf23ce1589b361b878c18803cfe9dfb"
	},
	{
		"id": "99d3ed7ebb9c",
		"ts": "2026-08-26T08:38:02.260Z",
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
		"liquidityUsd": 19209538.24,
		"hash": "99d3ed7ebb9c2d60636252718b5bf7d7a18416011444aec03bd236490aaaeea3"
	},
	{
		"id": "b7d8692d5a8c",
		"ts": "2026-08-26T08:38:02.608Z",
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
		"liquidityUsd": 971564.81,
		"hash": "b7d8692d5a8c66df98bda5cde532eb2975b403c965f25c11c438aa3bd9e1a243"
	},
	{
		"id": "821ef4ffb52c",
		"ts": "2026-08-26T08:38:02.954Z",
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
		"liquidityUsd": 29789892.56,
		"hash": "821ef4ffb52c7357a76ca92cfe9357aa71f048624906ca560386eebd7da59248"
	},
	{
		"id": "7ecd1acb1ae8",
		"ts": "2026-08-26T08:38:03.151Z",
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
		"liquidityUsd": 4694286.89,
		"hash": "7ecd1acb1ae8afa0ad9ad2ad739af9c8b3eeb62db777238227c34cec53a3d765"
	},
	{
		"id": "200c941e18b9",
		"ts": "2026-08-26T08:38:03.339Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192767.42,
		"hash": "200c941e18b90d4a9d724ade8e030fbf298a7eedd45b253312499d85f22e6099"
	},
	{
		"id": "86823b76ec67",
		"ts": "2026-08-26T08:38:03.562Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.76,
		"hash": "86823b76ec678a822ea5194a66b2374e26605b8f0531a859ba5d18bbefea5e73"
	},
	{
		"id": "a045ab46ddac",
		"ts": "2026-08-26T08:38:03.759Z",
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
		"liquidityUsd": 1911434.79,
		"hash": "a045ab46ddacddc2d87becc21dc6d42137bcf1e62cf124d3ad5f1e2877ad62e4"
	},
	{
		"id": "55d455811687",
		"ts": "2026-08-26T08:38:03.955Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1450939.23,
		"hash": "55d4558116873e51485cf3e898be946acfd11e44509b886eae0a78ecf11357b1"
	},
	{
		"id": "e191ee09dbd0",
		"ts": "2026-08-26T08:38:04.150Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1215778.6,
		"hash": "e191ee09dbd06763fc35cd7bf0f0f86325a4f8b41ece5f197bfaddf9b2d5c2db"
	},
	{
		"id": "b0ac4d042859",
		"ts": "2026-08-26T08:38:04.337Z",
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
		"liquidityUsd": 728570.86,
		"hash": "b0ac4d04285936319f870c64ac5623a85a98b3ea4788d00f59b6ddd60c268381"
	},
	{
		"id": "ebdc7ba29c7d",
		"ts": "2026-08-26T08:38:04.532Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 98420.66,
		"hash": "ebdc7ba29c7d0c76d04827a44e3bf5df65705c18f359c233016a5a1adb1c2608"
	},
	{
		"id": "5633e2f3a9e1",
		"ts": "2026-08-26T08:38:04.709Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4140371.81,
		"hash": "5633e2f3a9e1d2889dd8441ecd91adf644f20993575335b18c7523f52831477f"
	},
	{
		"id": "b2085381701c",
		"ts": "2026-08-26T08:38:04.905Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1424108.67,
		"hash": "b2085381701c77d5fea789ec31297608c503ad6e56e5a51fd3e6e45d1c03c2fd"
	},
	{
		"id": "96c1ae34f2d6",
		"ts": "2026-08-26T08:38:05.096Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3460174.82,
		"hash": "96c1ae34f2d62f5d6196b8eb57c34219b302bdcb2c60138c30ee161d3697c342"
	},
	{
		"id": "c191ebc3ad87",
		"ts": "2026-08-26T08:38:05.301Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 541987.52,
		"hash": "c191ebc3ad879851060d3a61d5134cca52660addd13d22070ecd5530f81fcf6c"
	},
	{
		"id": "300151d1cfb1",
		"ts": "2026-08-26T08:38:05.480Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11492354.62,
		"hash": "300151d1cfb122c23f06b17bd81463c67b3e573f15e7a5ce466b869b6f081449"
	},
	{
		"id": "63dad1ea2d4c",
		"ts": "2026-08-26T08:38:05.676Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1853121.75,
		"hash": "63dad1ea2d4cfbd612688433626925dee4a155ff0f489440cd12d46c70d28fa6"
	},
	{
		"id": "83cf1f60a8e0",
		"ts": "2026-08-26T07:41:48.126Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115082696.98,
		"hash": "83cf1f60a8e0185b244ad38ad880496e051a9e7b407adcbacbe1a9d1a64838a9"
	},
	{
		"id": "8f69f2263d3a",
		"ts": "2026-08-26T07:41:48.647Z",
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
		"liquidityUsd": 19389299.08,
		"hash": "8f69f2263d3ac1fe8e78a061e46115422c95bb00c60d7f18949f41e262b92532"
	},
	{
		"id": "91fe56a9deac",
		"ts": "2026-08-26T07:41:49.013Z",
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
		"liquidityUsd": 972453.91,
		"hash": "91fe56a9deac9c46798f3fb3151c4c8792ad9f9a47bc279e1d62f582d0b34f23"
	},
	{
		"id": "a91e72089cab",
		"ts": "2026-08-26T07:41:49.362Z",
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
		"liquidityUsd": 29826213.82,
		"hash": "a91e72089cababe6c2fd300f73f8ae0342f1dab3150fecaff025240c774bc847"
	},
	{
		"id": "153a5c1401e0",
		"ts": "2026-08-26T07:41:49.710Z",
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
		"liquidityUsd": 4698301.44,
		"hash": "153a5c1401e0fe763a7663f450f9e77c699cda1cec4e38616f52da51359e4ca1"
	},
	{
		"id": "1a5662f7361b",
		"ts": "2026-08-26T07:41:49.924Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192795.73,
		"hash": "1a5662f7361b8ada09579da1e3f1aaac10bef4e985364bf5fbc60e89e6c77ac0"
	},
	{
		"id": "5f4849e933d3",
		"ts": "2026-08-26T07:41:50.151Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.75,
		"hash": "5f4849e933d3c6873e7d794e4d492f152a6e9a5b57177d8dc7ce50aa0b800092"
	},
	{
		"id": "44c994af430d",
		"ts": "2026-08-26T07:41:50.366Z",
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
		"liquidityUsd": 1914051.65,
		"hash": "44c994af430dcd7dc9c7a9b98277eddc1c54596e1ad8ffe42ad00467da7474d7"
	},
	{
		"id": "e66d0c00969b",
		"ts": "2026-08-26T07:41:50.555Z",
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
		"liquidityUsd": 1496868.79,
		"hash": "e66d0c00969bb88be4de15f87d6f996f679df85f286c19fbfa1ab996cf8260de"
	},
	{
		"id": "9c95e9d66ffc",
		"ts": "2026-08-26T07:41:50.742Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1222479.86,
		"hash": "9c95e9d66ffcfdb432479481b874a6645b19f3402e0f35f347b370a1520e4f8a"
	},
	{
		"id": "46883f826b21",
		"ts": "2026-08-26T07:41:50.920Z",
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
		"liquidityUsd": 748555.29,
		"hash": "46883f826b21a94399ba7c2efdb5de0bd7f1c00ede515fd0422269e06c8048f3"
	},
	{
		"id": "04d6f98446bc",
		"ts": "2026-08-26T07:41:51.100Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4136609.58,
		"hash": "04d6f98446bc0eceb8f107f09623f0b08a8e33e7e699f60c75ec7b305af4f62b"
	},
	{
		"id": "70c4fbce1e00",
		"ts": "2026-08-26T07:41:51.276Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 97427.58,
		"hash": "70c4fbce1e00019956a25137462c18aa55516a846e95172173423157bf69da95"
	},
	{
		"id": "19394576ccd2",
		"ts": "2026-08-26T07:41:51.474Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544095.68,
		"hash": "19394576ccd29acb655a2874a97a3a97232535feefab0e197a7af147bd704ce5"
	},
	{
		"id": "f4ef4502bb2a",
		"ts": "2026-08-26T07:41:51.658Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3436780.07,
		"hash": "f4ef4502bb2a11e0315f8d58a1f687e73bc6867f97536d71bfa7392a84228ef3"
	},
	{
		"id": "a37517661809",
		"ts": "2026-08-26T07:41:51.838Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 545631.78,
		"hash": "a3751766180979cc0100b4115bee5ef156bb1b64c0afd959fd57bfb572b43f70"
	},
	{
		"id": "2e812323bb2f",
		"ts": "2026-08-26T07:41:52.021Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11578361.24,
		"hash": "2e812323bb2fcb61258c33ad336a43b9ae70cb23e964a5dfd50b9bf7a5820a1d"
	},
	{
		"id": "c1a59a26f244",
		"ts": "2026-08-26T07:41:52.235Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1855928.15,
		"hash": "c1a59a26f2449138bb929b2cdef582159687d457de0c92d696feb7a31d36802b"
	},
	{
		"id": "3b470824c206",
		"ts": "2026-08-26T07:41:52.477Z",
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
		"liquidityUsd": 848509.74,
		"hash": "3b470824c206509909974f5a5d388c2296ee52e8365d540601f88169d47d1f87"
	},
	{
		"id": "54a2b2dea05c",
		"ts": "2026-08-26T06:40:47.285Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115064386.7,
		"hash": "54a2b2dea05cf575686fd62fc89a844ac176690189511c5e5efde1637109674f"
	},
	{
		"id": "c356e8f591bc",
		"ts": "2026-08-26T06:40:47.759Z",
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
		"liquidityUsd": 19470450.21,
		"hash": "c356e8f591bc36ad2fab29799509c95916f575b47027afa479dc984ecae76df1"
	},
	{
		"id": "84b5560e206e",
		"ts": "2026-08-26T06:40:48.032Z",
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
		"liquidityUsd": 966557.61,
		"hash": "84b5560e206e9dc113e9ca6d2779145bc264c9c753fe41dc7657485e2682d1be"
	},
	{
		"id": "30f5a9fe3e7a",
		"ts": "2026-08-26T06:40:48.357Z",
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
		"liquidityUsd": 29784841.32,
		"hash": "30f5a9fe3e7a147f13066682343ddaddba3ca42dc0393bc83285e018dd93c1fc"
	},
	{
		"id": "440ba6c16101",
		"ts": "2026-08-26T06:40:48.603Z",
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
		"liquidityUsd": 4678282.48,
		"hash": "440ba6c16101338f8606d0562d30294768cd14a86de5d935d5a0b6009d46aa1b"
	},
	{
		"id": "f85244aa74d2",
		"ts": "2026-08-26T06:40:48.853Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192795.73,
		"hash": "f85244aa74d2ec8cd4d48fad05fe673a649e59ad26fd7faeb62c514bb5546c78"
	},
	{
		"id": "e1a7c5fc7c33",
		"ts": "2026-08-26T06:40:49.102Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.48,
		"hash": "e1a7c5fc7c33c06e281214e85c3865a03b90f229f653ba2fe454023fdd1d13f0"
	},
	{
		"id": "ce6e536cd19b",
		"ts": "2026-08-26T06:40:49.360Z",
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
		"liquidityUsd": 1907021.77,
		"hash": "ce6e536cd19b9df4ea9714ef3448c366922f7a73b893f904a8f7853c02ff2a79"
	},
	{
		"id": "4273941cf284",
		"ts": "2026-08-26T06:40:49.592Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1468223.94,
		"hash": "4273941cf2845b139562674c65bde15704686e29a1936a43aee4e6e20e7cfac4"
	},
	{
		"id": "e90b464a521a",
		"ts": "2026-08-26T06:40:49.841Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1210778.57,
		"hash": "e90b464a521ac6e983af294ecf5b0bc32fc25db8eecbbae6742eb6dc6cfa9ac8"
	},
	{
		"id": "5a26e596f622",
		"ts": "2026-08-26T06:40:50.076Z",
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
		"liquidityUsd": 745503.36,
		"hash": "5a26e596f6220056b4ca4af505f1149698169d185ff9b869408acab072221f4d"
	},
	{
		"id": "9b8348f4fe17",
		"ts": "2026-08-26T06:40:50.307Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4123197.45,
		"hash": "9b8348f4fe1703908ea5bea1fb4a44f0dcc445e3b70e755a73ec3e933ad78c15"
	},
	{
		"id": "056a310f6536",
		"ts": "2026-08-26T06:40:50.527Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 91647.83,
		"hash": "056a310f6536b98233e4867a783d48e430b3361590767ac2f8e112810d6fb031"
	},
	{
		"id": "127276c3624b",
		"ts": "2026-08-26T06:40:50.744Z",
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
		"liquidityUsd": 542011.22,
		"hash": "127276c3624bf928f1098b284cea55cdc772b6986061ea116148f1eec07b8cd1"
	},
	{
		"id": "77d4294c5ecd",
		"ts": "2026-08-26T06:40:50.974Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3419802.28,
		"hash": "77d4294c5ecdd1c16863a1e672a16119d6d50178cf5d818f6f673e9e712e1311"
	},
	{
		"id": "20b8d46f0410",
		"ts": "2026-08-26T06:40:51.205Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544470.85,
		"hash": "20b8d46f041046a5b49e8087372ccf40bc6d4bb418f85a30713ce53b9ff9e531"
	},
	{
		"id": "dab2fa73e3b1",
		"ts": "2026-08-26T06:40:51.437Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11434925.44,
		"hash": "dab2fa73e3b1e27c976fc616703ec9cca4905ce3c777acc82c99d4c9781e779d"
	},
	{
		"id": "0fb958d96af9",
		"ts": "2026-08-26T06:40:51.668Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1858522.34,
		"hash": "0fb958d96af93d0c7730a5f71d9c1790efbe6eb1f3365b0aa54cd763d7f1131b"
	},
	{
		"id": "59a3680bc122",
		"ts": "2026-08-26T06:40:51.889Z",
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
		"liquidityUsd": 859242.23,
		"hash": "59a3680bc1222445b7facfdcd49e09733e88beae45c7aea473e447ac52b67b96"
	},
	{
		"id": "563ce21a0cf8",
		"ts": "2026-08-26T05:30:08.808Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114968133.08,
		"hash": "563ce21a0cf85f5d28de9c982903397c455eb4351180e2de4a2ab6a1d6741449"
	},
	{
		"id": "8270b9ae0c45",
		"ts": "2026-08-26T05:30:09.216Z",
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
		"liquidityUsd": 18728627.1,
		"hash": "8270b9ae0c458b62c595eb74435c8a640c1a37fd98ffd46d8e90394375263103"
	},
	{
		"id": "78bcb331b5c0",
		"ts": "2026-08-26T05:30:09.426Z",
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
		"liquidityUsd": 967190.83,
		"hash": "78bcb331b5c02e85e75be6d1819aa18785e16ea29f579d9ff8cee99d639c127b"
	},
	{
		"id": "2f4ef5563064",
		"ts": "2026-08-26T05:30:09.605Z",
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
		"liquidityUsd": 29787938.67,
		"hash": "2f4ef5563064be0317a2733c92bdaba5d489cf892a8a531d8070779ddc57b730"
	},
	{
		"id": "cc54b46c709a",
		"ts": "2026-08-26T05:30:09.804Z",
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
		"liquidityUsd": 4684394.09,
		"hash": "cc54b46c709a026fd527cdc83a781ec2be2db8f5780ace4f7eac85570a526733"
	},
	{
		"id": "9a8fbf3dffa3",
		"ts": "2026-08-26T05:30:09.999Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192138.63,
		"hash": "9a8fbf3dffa310c14f628bafd814de77063ca58a16b885c43c822ab38b0179c1"
	},
	{
		"id": "20c219ed5c80",
		"ts": "2026-08-26T05:30:10.204Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.45,
		"hash": "20c219ed5c80c71f0c1a642c75662591f7fea0e7eba9d2f0eea921e882ec09e4"
	},
	{
		"id": "5145a650865a",
		"ts": "2026-08-26T05:30:10.423Z",
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
		"liquidityUsd": 1908001.56,
		"hash": "5145a650865abbc2b2556c19b55c3f61122fcf892025179bf4fa1cd3706f52f2"
	},
	{
		"id": "02727890a9cb",
		"ts": "2026-08-26T05:30:10.709Z",
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
		"liquidityUsd": 1471335.57,
		"hash": "02727890a9cbd10487858b266f69e3c0a135868fb34a3f778901d473bb6db51e"
	},
	{
		"id": "a3aee1060f67",
		"ts": "2026-08-26T05:30:10.903Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1211197.66,
		"hash": "a3aee1060f675bd5c316fca13e02240a2f1d744b47a7b4b107dcbe29613f306a"
	},
	{
		"id": "843dbe9604fe",
		"ts": "2026-08-26T05:30:11.081Z",
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
		"liquidityUsd": 728785.58,
		"hash": "843dbe9604feede49a0a92165166d57d7cfc5114f9ab866ad544d900270dd2ae"
	},
	{
		"id": "6b383a83f756",
		"ts": "2026-08-26T05:30:11.280Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4129430,
		"hash": "6b383a83f756e025d8d070e8de3cef01e723e8663c23a931e1690673fc3fdd98"
	},
	{
		"id": "f32851291436",
		"ts": "2026-08-26T05:30:11.471Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 98213.14,
		"hash": "f32851291436c0dae6c93c9c6ede48a1836c4a6b27787ffd5b95768894cae1ba"
	},
	{
		"id": "aa4c3677f743",
		"ts": "2026-08-26T05:30:11.669Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 542462.1,
		"hash": "aa4c3677f743704e1f1ac42b57573cb2432ad00db132b9dadf731a20adb26f72"
	},
	{
		"id": "dbd5c3807fdf",
		"ts": "2026-08-26T05:30:11.846Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1847674.87,
		"hash": "dbd5c3807fdfcc0db35db74e8b26bc144f0467d106bf7e8c19efd3015665cafa"
	},
	{
		"id": "44231df6975c",
		"ts": "2026-08-26T05:30:12.044Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3388316.59,
		"hash": "44231df6975c7dcd2ca3665dae5382f5cb43dbe89780034424c2e0f05f9d46fc"
	},
	{
		"id": "535d8100d955",
		"ts": "2026-08-26T05:30:12.234Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 546781.2,
		"hash": "535d8100d9553988943894ed3e6aa23d71a2f0e973c1eae1f8841530f1efd91e"
	},
	{
		"id": "896f4fe5b4ec",
		"ts": "2026-08-26T05:30:12.513Z",
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
		"liquidityUsd": 851686.65,
		"hash": "896f4fe5b4ec35f3191b4a6d305e41a0065fd5ec1d2191f9cacc1c832248596d"
	},
	{
		"id": "3940c1a56eb9",
		"ts": "2026-08-26T05:30:12.728Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11481242.49,
		"hash": "3940c1a56eb966d7ffddae860d58c17742a2c650c76390ca55af8f540f0d7f44"
	},
	{
		"id": "d2a4609ab203",
		"ts": "2026-08-26T04:35:25.376Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115055991.21,
		"hash": "d2a4609ab20396620d262541166683821a7027e5c8ecae861ebb5e850522ba99"
	},
	{
		"id": "ca443d34cdcb",
		"ts": "2026-08-26T04:35:25.648Z",
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
		"liquidityUsd": 16837998.29,
		"hash": "ca443d34cdcb83c1e62e4f62dbfdb17af0dc235096c1489c57f3351df2c32c36"
	},
	{
		"id": "fb24663e13b7",
		"ts": "2026-08-26T04:35:25.903Z",
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
		"liquidityUsd": 969781.75,
		"hash": "fb24663e13b7db18c3b363a78d6fe8a2e87641e5e7286c5adafaf49b30a63ab6"
	},
	{
		"id": "0cf2ccd99307",
		"ts": "2026-08-26T04:35:26.152Z",
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
		"liquidityUsd": 29867819.03,
		"hash": "0cf2ccd9930708a84d2cc8146434533477f0346f44157a2a3fd62324ef06b3ec"
	},
	{
		"id": "2d9789be08be",
		"ts": "2026-08-26T04:35:26.431Z",
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
		"liquidityUsd": 4689179.64,
		"hash": "2d9789be08bee0c74df40575b7c788df8ed921e6bf16c0134af55cbfcc83cd76"
	},
	{
		"id": "3507b04927d4",
		"ts": "2026-08-26T04:35:26.775Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1192138.63,
		"hash": "3507b04927d43617f34bf136a91d5b509663dcd55ce1c5eeacb16f7948f90702"
	},
	{
		"id": "a5f8087bd556",
		"ts": "2026-08-26T04:35:27.024Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.44,
		"hash": "a5f8087bd5563c67e48c37d4614eb2298d32a699864df8b71626d66a9ac6d5bd"
	},
	{
		"id": "142536f137f7",
		"ts": "2026-08-26T04:35:27.280Z",
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
		"liquidityUsd": 1915330.45,
		"hash": "142536f137f709e59d73bcc6aa75d84a52bbf52aa82141f7637b26ca0979bb02"
	},
	{
		"id": "a4f5bc456ffb",
		"ts": "2026-08-26T04:35:27.532Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1477320.53,
		"hash": "a4f5bc456ffbc456d0c1a1bd3bb5b7487bd882997a3039099a36422c6a21fa53"
	},
	{
		"id": "c1b6cff5a002",
		"ts": "2026-08-26T04:35:27.781Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1204596.24,
		"hash": "c1b6cff5a00269c44ecede6775d3f68ab365df6753e1d0019ab63b5eb97a2f5d"
	},
	{
		"id": "0666073ad534",
		"ts": "2026-08-26T04:35:28.012Z",
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
		"liquidityUsd": 729805.99,
		"hash": "0666073ad534a787c22335e7f7269d096d4bc3f5c94fffe331a0ef33b5ce7d32"
	},
	{
		"id": "27069fe04bb3",
		"ts": "2026-08-26T04:35:28.242Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4144996.76,
		"hash": "27069fe04bb33f9c94383f2db68280e73f6d4018762083ff2a3121c66ac3c698"
	},
	{
		"id": "701463a6817a",
		"ts": "2026-08-26T04:35:28.475Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 93805.72,
		"hash": "701463a6817acc4a49933089c2e1a7bfb1b9a95bc22b9bf15399bc9aba918613"
	},
	{
		"id": "18d403df205d",
		"ts": "2026-08-26T04:35:28.707Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 544222.13,
		"hash": "18d403df205d7a93ac72afb8b3fadcbc2f7e82f505c228d2fc1e21b76aae90e6"
	},
	{
		"id": "397f24699911",
		"ts": "2026-08-26T04:35:28.939Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1866870.86,
		"hash": "397f24699911f9fa6f54dc7a5bf151d72f2d1b04b05d0fa36211e05ae80711c3"
	},
	{
		"id": "4fcecbbd3df5",
		"ts": "2026-08-26T04:35:29.173Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 551704.33,
		"hash": "4fcecbbd3df5b9b2f7a6452fe51e7c1e4407c6c5fe1230c5469be2c700caa3df"
	},
	{
		"id": "420aeb72cf74",
		"ts": "2026-08-26T04:35:29.405Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3396756.94,
		"hash": "420aeb72cf741e5c71e6cd869ac934abe1398938e92cd4cb74af925a50e15af4"
	},
	{
		"id": "031340ee7ed8",
		"ts": "2026-08-26T04:35:29.640Z",
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
		"liquidityUsd": 854096.61,
		"hash": "031340ee7ed8fcb4deed6578cd24a03233f693ab1e31cfa2dfe8810a0efae2ac"
	},
	{
		"id": "267c7c7b0c9d",
		"ts": "2026-08-26T04:35:29.872Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11496715.86,
		"hash": "267c7c7b0c9d5b773bccae56d577b32be06eaa21db87dda81a9e892ae589ff1b"
	},
	{
		"id": "68763bed1e63",
		"ts": "2026-08-26T03:00:32.188Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 115061742.12,
		"hash": "68763bed1e632897d21bfb2106159e1852ee721f70c005e58d8d1be6a406305c"
	},
	{
		"id": "3b6ca7d690dc",
		"ts": "2026-08-26T03:00:32.558Z",
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
		"liquidityUsd": 18717935.72,
		"hash": "3b6ca7d690dc9f23aaef4af74831fa1149ea3e39226d15545be6ee13918ae369"
	},
	{
		"id": "678fcf5ff952",
		"ts": "2026-08-26T03:00:32.746Z",
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
		"liquidityUsd": 970792.14,
		"hash": "678fcf5ff952a500fa118abd0a87779ec73ba45c4c844497c44552e229debec4"
	},
	{
		"id": "9ee644e04af9",
		"ts": "2026-08-26T03:00:32.940Z",
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
		"liquidityUsd": 30038395.15,
		"hash": "9ee644e04af904ebaf4e3880b4c615aa4274ab59604751623094dd2973de104e"
	},
	{
		"id": "a64e0107e7dc",
		"ts": "2026-08-26T03:00:33.129Z",
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
		"liquidityUsd": 4720967.02,
		"hash": "a64e0107e7dcd1925bdca547bac7a19ce73ab7028873dd6a5c456c0a0726b14a"
	},
	{
		"id": "6e7b27c60c10",
		"ts": "2026-08-26T03:00:33.322Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1186569.78,
		"hash": "6e7b27c60c10418aeffc8e3d4159d8b7798311162712306815d81e9d5ffee456"
	},
	{
		"id": "2b757e5d63a1",
		"ts": "2026-08-26T03:00:33.526Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.42,
		"hash": "2b757e5d63a1e6edc925331dc036de368760f335237fc89fe68dd92e0323ea77"
	},
	{
		"id": "41cdd21bf35e",
		"ts": "2026-08-26T03:00:33.735Z",
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
		"liquidityUsd": 1916446.13,
		"hash": "41cdd21bf35e3891829906f7e138b5bcafee75af5301a9acd4f1921255a42202"
	},
	{
		"id": "cb891639fd8b",
		"ts": "2026-08-26T03:00:33.947Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1484268.59,
		"hash": "cb891639fd8b437a9d1ab7bb9a571022ff2b7b77afa5f790fce0fb21a4e8a4b9"
	},
	{
		"id": "8e799592f4aa",
		"ts": "2026-08-26T03:00:34.150Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1175583.27,
		"hash": "8e799592f4aac24691db48a1936546e50e28b9de8ba25993b0a3e4b4d402a85d"
	},
	{
		"id": "07516a6b4093",
		"ts": "2026-08-26T03:00:34.330Z",
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
		"liquidityUsd": 740768.32,
		"hash": "07516a6b4093d9d7c937bbe7d0cc286948e95fbeb49ecc32e86287bb4e5cf170"
	},
	{
		"id": "15914bb454df",
		"ts": "2026-08-26T03:00:34.510Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1372110.2,
		"hash": "15914bb454df30669d37fd07c0e263efffc8cf32b7ecbe5f0b6c495bf731103a"
	},
	{
		"id": "fde11b64046e",
		"ts": "2026-08-26T03:00:34.716Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4140052.51,
		"hash": "fde11b64046efd547d96cbef82d50a4fef19acef3c20a7b476badbc2bd96a624"
	},
	{
		"id": "a7250825ef30",
		"ts": "2026-08-26T03:00:34.898Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 84951.69,
		"hash": "a7250825ef300e877b081c0d443a29fe6e6627226efe0119919cc14c5456cd3b"
	},
	{
		"id": "1db84c81765b",
		"ts": "2026-08-26T03:00:35.088Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 549689.7,
		"hash": "1db84c81765bf6c10dfac763ef6323a7120b7c61427e2d4096838e7778bd3d30"
	},
	{
		"id": "d12a0036c204",
		"ts": "2026-08-26T03:00:35.284Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1863723.55,
		"hash": "d12a0036c20484d9334826b8e8fe6c4af1317b14e4732f246ee7f391d2eea501"
	},
	{
		"id": "83cdb4e64e5a",
		"ts": "2026-08-26T03:00:35.469Z",
		"symbol": "MIGGLES",
		"token": "0xB1a03EdA10342529bBF8EB700a06C60441fEf25d",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 559970.39,
		"hash": "83cdb4e64e5a123a2876614963fb19aa036d8437e7587697e9fca2b4d2b29586"
	},
	{
		"id": "37d5f4f42f2d",
		"ts": "2026-08-26T03:00:35.697Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3429580.25,
		"hash": "37d5f4f42f2dafb11f008b3809e9d1977e75033920b97f7236ce9a38f65415fe"
	},
	{
		"id": "96a6e7a7097b",
		"ts": "2026-08-26T03:00:35.880Z",
		"symbol": "PrinterInkCoin",
		"token": "0x6CB927b413068609853A539016F31DEff6E9AbA3",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 120807.55,
		"hash": "96a6e7a7097bed4b44fcdfe1c5129e8086cb2f16c2bf53e6cb5ee786a5f4fd81"
	},
	{
		"id": "1ffe94034b23",
		"ts": "2026-08-26T01:04:04.019Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 114703785.78,
		"hash": "1ffe94034b23a842cdf0938b42327c383b04eca92c4ed54aa57eadbc26ea2682"
	},
	{
		"id": "920383fca7be",
		"ts": "2026-08-26T01:04:04.484Z",
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
		"liquidityUsd": 17040093.42,
		"hash": "920383fca7beb64d8bc2b65e4f29249bf0177602ba8f3dd977a6cf1bf9a6de34"
	},
	{
		"id": "de3c861feda9",
		"ts": "2026-08-26T01:04:04.723Z",
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
		"liquidityUsd": 964286.13,
		"hash": "de3c861feda9b58b3453e9636505cf090f32e9d31d2247aef85d2a28dae52227"
	},
	{
		"id": "d4bbdbf76a7f",
		"ts": "2026-08-26T01:04:05.199Z",
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
		"liquidityUsd": 29850656.83,
		"hash": "d4bbdbf76a7f9199d44df00116981129fd1c3941f15f1fa2864c72e579d3dd12"
	},
	{
		"id": "8add135cbda2",
		"ts": "2026-08-26T01:04:05.458Z",
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
		"liquidityUsd": 4622807.03,
		"hash": "8add135cbda28f20b95edce0db4a13573f36f4531872995dade140f677009f84"
	},
	{
		"id": "29413d34a3af",
		"ts": "2026-08-26T01:04:05.724Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1179255.81,
		"hash": "29413d34a3af8edc47a708ff27987bcd8e096d3d13fdf7380ddac311592b9c07"
	},
	{
		"id": "662778f44a17",
		"ts": "2026-08-26T01:04:05.989Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 152676.42,
		"hash": "662778f44a176207d277119d41c9b984c99c46e3e10cf13c0439ee2c9fb00548"
	},
	{
		"id": "f31c8bba4805",
		"ts": "2026-08-26T01:04:06.235Z",
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
		"liquidityUsd": 1902582.27,
		"hash": "f31c8bba4805496955d7bbcd9cc1de0d1a61809dc7c828cd959b9fd718955be4"
	},
	{
		"id": "ff0ea0cd5c68",
		"ts": "2026-08-26T01:04:06.483Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"high_holder_concentration"
		],
		"liquidityUsd": 1492195.11,
		"hash": "ff0ea0cd5c686b9db710c2e1a01edbeba717895bbdfee496e55f446f9f4aab9d"
	},
	{
		"id": "f7af54583c8e",
		"ts": "2026-08-26T01:04:06.944Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 730237.4,
		"hash": "f7af54583c8e16ce071d8ba249199336e08d414f217259c58bfc1960c78f894f"
	},
	{
		"id": "bdbf43301a02",
		"ts": "2026-08-26T01:04:07.176Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1204052.51,
		"hash": "bdbf43301a02b7f594f17d9058c65ab6000891fe62035903f6348ab5bb4f526f"
	},
	{
		"id": "93dac27b6c63",
		"ts": "2026-08-26T01:04:07.405Z",
		"symbol": "NVDAc",
		"token": "0xb20000000000000000000078ee7ce2fE4908108C",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 1376448.89,
		"hash": "93dac27b6c635ba3bbf5cc830c9cdd1290b9d61ce004690c918639e0addd18da"
	},
	{
		"id": "fa87075e222a",
		"ts": "2026-08-26T01:04:07.638Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 540144.33,
		"hash": "fa87075e222ae2c392ad962af3499071bdfce71d09adaff942c5760981ae18a7"
	},
	{
		"id": "5a56ac4141f5",
		"ts": "2026-08-26T01:04:07.863Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 92223.07,
		"hash": "5a56ac4141f52d14aa05865ba2ea77c36ed49f3cec46d03e92fe6248dfbae781"
	},
	{
		"id": "4345d0b750ca",
		"ts": "2026-08-26T01:04:08.102Z",
		"symbol": "KTA",
		"token": "0xc0634090F2Fe6c6d75e61Be2b949464aBB498973",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 4062132.9,
		"hash": "4345d0b750cad4fc35fed5ec4e6516bd543cfcfcdadb827c875d4ca5f211240d"
	}
]
