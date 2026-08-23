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
	"updatedAt": "2026-08-23T09:23:14.117Z",
	"tokensScored": 13864,
	"verdictsIssued": 13864,
	"safe": 11938,
	"risky": 976,
	"likelyRug": 950,
	"ticks": 807
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "20c9a2f2a9df",
		"ts": "2026-08-23T09:23:10.216Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109874694.43,
		"hash": "20c9a2f2a9dfe1258547aef131b0cc013577ef51ea66652626fe98c76cbe2f24"
	},
	{
		"id": "1de425e84ceb",
		"ts": "2026-08-23T09:23:10.615Z",
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
		"liquidityUsd": 13211162.93,
		"hash": "1de425e84cebadb542df53de701783f75c57328e3e56d58aa334058fa08e1118"
	},
	{
		"id": "a355a9e4144f",
		"ts": "2026-08-23T09:23:10.802Z",
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
		"liquidityUsd": 865667.07,
		"hash": "a355a9e4144fab1bf2634183542f43d5c8125f90296737c9acc18e874c5c3001"
	},
	{
		"id": "b2cb00ea4f9b",
		"ts": "2026-08-23T09:23:11.012Z",
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
		"liquidityUsd": 27739085.86,
		"hash": "b2cb00ea4f9b0f5d9299d58f08f414a57d919faf4911449874acf808a3fad14f"
	},
	{
		"id": "29937442c8e7",
		"ts": "2026-08-23T09:23:11.209Z",
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
		"liquidityUsd": 3319639.13,
		"hash": "29937442c8e7c6c8785ef46265796738da2fe1762f4a5381cdc93e1a9518a710"
	},
	{
		"id": "6fb7d850409e",
		"ts": "2026-08-23T09:23:11.394Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1156595.29,
		"hash": "6fb7d850409e5e6c33cefdeecd29dd4583514c252c41f4f89b3fe718e80d0a0e"
	},
	{
		"id": "1fbb0d1dc947",
		"ts": "2026-08-23T09:23:11.609Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 938333.5,
		"hash": "1fbb0d1dc9477ccff83193c28a885d52e74d1f85b1b9f97279a5dd6366fc31cc"
	},
	{
		"id": "4b7cdb7e7054",
		"ts": "2026-08-23T09:23:11.874Z",
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
		"liquidityUsd": 3370541.56,
		"hash": "4b7cdb7e7054294378972d4142f8fc8d91d1dceefcd392425f4376e857773a0e"
	},
	{
		"id": "ad44c13b11fc",
		"ts": "2026-08-23T09:23:12.067Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1354843.17,
		"hash": "ad44c13b11fc2b1a7593a9871dfe27827d74e061733f63e942c6955ea6499040"
	},
	{
		"id": "99a1e168da9b",
		"ts": "2026-08-23T09:23:12.396Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 798158.95,
		"hash": "99a1e168da9b7096f91cadbeb2119c01e15d6a8cc6bd4a3a538ce368f4847e33"
	},
	{
		"id": "315bbccfb341",
		"ts": "2026-08-23T09:23:12.573Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 510770.6,
		"hash": "315bbccfb341c4f90376da74bffbcff4edb86f65a71803e1cb585de83c1fc5b3"
	},
	{
		"id": "f6a2a6d4906e",
		"ts": "2026-08-23T09:23:12.764Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 699161.39,
		"hash": "f6a2a6d4906e15a5b61c4bc0c862f6e3742451c7d25708e4c771fd7bc72804d9"
	},
	{
		"id": "5ab1a2017260",
		"ts": "2026-08-23T09:23:12.957Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10986780.53,
		"hash": "5ab1a20172604799c7a99a0bacd423fe17a23cebee890cc5d5146c9855b7dbeb"
	},
	{
		"id": "262af8a8953d",
		"ts": "2026-08-23T09:23:13.136Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 126776.17,
		"hash": "262af8a8953dc6de7b67a1569ba55404dec2be0c939972361f1c13b0ff2734a8"
	},
	{
		"id": "ac912c1f7562",
		"ts": "2026-08-23T09:23:13.355Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 852125.67,
		"hash": "ac912c1f75620d46a3a92f7e3bbcc7ee7f4223704d42fb8123cc6218f1c51aa9"
	},
	{
		"id": "eb29ba6e185e",
		"ts": "2026-08-23T09:23:13.532Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 613446.37,
		"hash": "eb29ba6e185e4529c840b9663aae49e5978cb7104694bafe054ff86e00cfca7d"
	},
	{
		"id": "2ec0ed678bf3",
		"ts": "2026-08-23T09:23:13.751Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3227677.06,
		"hash": "2ec0ed678bf303266bb9533f00bd1159d658a4105f1630335c6d375f04490f06"
	},
	{
		"id": "633e49d89195",
		"ts": "2026-08-23T09:23:13.926Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1790963.6,
		"hash": "633e49d89195ced99c8ddaef98dd720da3d7c1150665f40d11bfa125864f7e85"
	},
	{
		"id": "3307ccc73bbc",
		"ts": "2026-08-23T09:23:14.117Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3985360.91,
		"hash": "3307ccc73bbc6e86bdf2b43f7df1a434bb6d47f85f14953c6aee579f9392bb34"
	},
	{
		"id": "5c4d21b76399",
		"ts": "2026-08-23T08:24:23.689Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109798316.87,
		"hash": "5c4d21b763996b358b55a536c264c5c60aba517eb5f6ef3c4d4ea4f154a2916e"
	},
	{
		"id": "616f0d0ceccb",
		"ts": "2026-08-23T08:24:23.938Z",
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
		"liquidityUsd": 17653145.15,
		"hash": "616f0d0ceccbb6cc7cd1d5bae768788ec6dec012b073d2dc961704be06fdfa5b"
	},
	{
		"id": "eeb2ad26a292",
		"ts": "2026-08-23T08:24:24.154Z",
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
		"liquidityUsd": 865667.07,
		"hash": "eeb2ad26a292c9bbb360e2500737fff99cf07b4db8f9b4139261552ec3bfed10"
	},
	{
		"id": "064fc3a356d0",
		"ts": "2026-08-23T08:24:24.380Z",
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
		"liquidityUsd": 27652466.41,
		"hash": "064fc3a356d0e51237c51a7ce4a720635528f71a9134eb152a44a2e1bed34bef"
	},
	{
		"id": "21b88b3dcc5b",
		"ts": "2026-08-23T08:24:24.587Z",
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
		"liquidityUsd": 3300551.25,
		"hash": "21b88b3dcc5b65339cd877b01d48869347eb6e38201acdae04731d8616441ab6"
	},
	{
		"id": "58300ec4718b",
		"ts": "2026-08-23T08:24:24.828Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1147134.57,
		"hash": "58300ec4718bbcf562337b19d84db4c2398b97171f39cd0f7b98a3dc867175ac"
	},
	{
		"id": "9559205773fa",
		"ts": "2026-08-23T08:24:25.037Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1700734.96,
		"hash": "9559205773fae48b2322feb557afa1b6b7ef28a0babbf4d35f85136d2c391209"
	},
	{
		"id": "ef9bd0dc95d8",
		"ts": "2026-08-23T08:24:25.253Z",
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
		"liquidityUsd": 3365880.61,
		"hash": "ef9bd0dc95d858a390c03acd3ae7b1f610455c912f188cd926ad36b47b9a34d1"
	},
	{
		"id": "bb3914967f3d",
		"ts": "2026-08-23T08:24:25.457Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1338762.04,
		"hash": "bb3914967f3dc5d85d5f10f895a4d9bc96eaa1b8c63292cfa29cb070ad3a2a61"
	},
	{
		"id": "a252dcd2540d",
		"ts": "2026-08-23T08:24:25.668Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 804984.7,
		"hash": "a252dcd2540d257f81cd7310fbd8fae03cdff1f3cea4b2f8a82dbc64874215a5"
	},
	{
		"id": "32d4063db3fb",
		"ts": "2026-08-23T08:24:25.872Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 497928.83,
		"hash": "32d4063db3fb45ba36af4c675c579cf6a278a90f68097f27642d2b317eb6ea16"
	},
	{
		"id": "3dba4d90d7b8",
		"ts": "2026-08-23T08:24:26.135Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 131194.27,
		"hash": "3dba4d90d7b81158187c4a8516230ca4a186ce2c6feeeac9c6195ceb979daafd"
	},
	{
		"id": "5a418885f68d",
		"ts": "2026-08-23T08:24:26.329Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 692984.04,
		"hash": "5a418885f68d3d0eaf656fca6c74dc2c1971853a4723d72f82167ce2cc91beb6"
	},
	{
		"id": "529f6280d99c",
		"ts": "2026-08-23T08:24:26.566Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10967283.15,
		"hash": "529f6280d99c62985adc73b981d67e62381afcc89cdb77b8a0909a654d78a9ec"
	},
	{
		"id": "3986d23eea98",
		"ts": "2026-08-23T08:24:26.778Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 612003.37,
		"hash": "3986d23eea98482c1073006182a0ae5d545fb0eea506a8ffc67752353d3b3984"
	},
	{
		"id": "d345924395e9",
		"ts": "2026-08-23T08:24:26.987Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 864909.4,
		"hash": "d345924395e950a3d28e77ca30eae01cef751155bf52c960a4db83790fc374e2"
	},
	{
		"id": "c38a901c5ab9",
		"ts": "2026-08-23T08:24:27.195Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3191852.71,
		"hash": "c38a901c5ab9b7aefe3ef1c8043832e3409b86d34fbcde2e024db5d74c0fcd07"
	},
	{
		"id": "822346ebe328",
		"ts": "2026-08-23T08:24:27.404Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1783361.38,
		"hash": "822346ebe32876481fd292aaa0f9eaf064345383a95dea204a07a60b2cbd7645"
	},
	{
		"id": "98881f259f62",
		"ts": "2026-08-23T08:24:27.602Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3958706.27,
		"hash": "98881f259f62bd8d3ce9db65bac5c994d4804bc0625ed7c08a77e84ae08f26ac"
	},
	{
		"id": "50cecc3484f3",
		"ts": "2026-08-23T07:29:50.333Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109786592.58,
		"hash": "50cecc3484f34fa52ae52ee2da38cd235abe128c5e156023162f9019b8a9427a"
	},
	{
		"id": "3dd194e1c158",
		"ts": "2026-08-23T07:29:50.854Z",
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
		"liquidityUsd": 16679233.98,
		"hash": "3dd194e1c1587316598fdd45c5bb442f856880804514b68d881df03a57ce1c26"
	},
	{
		"id": "6c580d65b282",
		"ts": "2026-08-23T07:29:51.537Z",
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
		"liquidityUsd": 868314.4,
		"hash": "6c580d65b28287b26f09b58c70c1b3a424a5a276dbb3f1172411452a4d64f64a"
	},
	{
		"id": "74fb1731c3d2",
		"ts": "2026-08-23T07:29:51.783Z",
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
		"liquidityUsd": 27652926.12,
		"hash": "74fb1731c3d2a5cf12303e5a293118679597b0e7065899565fe1e300ce2120d9"
	},
	{
		"id": "e8991ab7dce4",
		"ts": "2026-08-23T07:29:52.055Z",
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
		"liquidityUsd": 3280236.56,
		"hash": "e8991ab7dce4f0e086acbf0f800725c40fdfd5cef258625dcd02af2edb630b80"
	},
	{
		"id": "f0d0b7ae3fe9",
		"ts": "2026-08-23T07:29:52.297Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1144175.29,
		"hash": "f0d0b7ae3fe9f80f5ea573e467359dfe08107945bdaee1cc440761d01ff4ec5d"
	},
	{
		"id": "ed98bb93abc3",
		"ts": "2026-08-23T07:29:52.556Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 1518711.3,
		"hash": "ed98bb93abc3e45ac7276826f1339b61fd87965794b3ced0b6ef77b5e433738a"
	},
	{
		"id": "124c4475f03d",
		"ts": "2026-08-23T07:29:52.799Z",
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
		"liquidityUsd": 3348638.65,
		"hash": "124c4475f03d361e781c2c60fe0edfc8250cc82db82ec3a39351680e71e6a3a3"
	},
	{
		"id": "c645caccdd8c",
		"ts": "2026-08-23T07:29:53.048Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1362467.68,
		"hash": "c645caccdd8c176127747b179481b0489a970e9048a798d6531e260d1fdcee0d"
	},
	{
		"id": "ae555f6114a9",
		"ts": "2026-08-23T07:29:53.297Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 798694.87,
		"hash": "ae555f6114a91a0ee20a1174198ca30de5502eb2309f7d887eb79d68b13d09a0"
	},
	{
		"id": "fe32c5ede357",
		"ts": "2026-08-23T07:29:53.536Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 134115.46,
		"hash": "fe32c5ede357239679ff52eb9b626a7e33f8c865aced20ee91c6816f5daeb269"
	},
	{
		"id": "8883e23b7adc",
		"ts": "2026-08-23T07:29:53.766Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 493937.87,
		"hash": "8883e23b7adc933491cf1f9fbe14d7f1f0d761d6fa0a2f4e738a1e1ebed8acad"
	},
	{
		"id": "b06a25941c78",
		"ts": "2026-08-23T07:29:53.995Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 693140.37,
		"hash": "b06a25941c786f0d80be724827188e38fa10af653e223873a4dea7ecd05b446e"
	},
	{
		"id": "56c3931d3abb",
		"ts": "2026-08-23T07:29:54.222Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10959404.7,
		"hash": "56c3931d3abb9a521ab569227ad9dc009d77c0cabd9648f644dfed20d90f2299"
	},
	{
		"id": "10c17df09e53",
		"ts": "2026-08-23T07:29:54.450Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 588926.51,
		"hash": "10c17df09e530bb493635ebd7d7962e4be9c79e15a7f0604bcb815538d0da258"
	},
	{
		"id": "81347dd304d1",
		"ts": "2026-08-23T07:29:54.677Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 865532.52,
		"hash": "81347dd304d1536636b23137a4e0ac7136e39a5ace7f4475b66d9cfc3aa9e065"
	},
	{
		"id": "b14f92cd9f32",
		"ts": "2026-08-23T07:29:54.905Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3170073.81,
		"hash": "b14f92cd9f32847daad543625f6ff12b096b118ca62e2d77533889ffeb5edeb8"
	},
	{
		"id": "372d86b25002",
		"ts": "2026-08-23T07:29:55.130Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1783436.34,
		"hash": "372d86b2500250e77f6fe5295c5dbf5fff98b7206557faca6d2f54fc8f0e5933"
	},
	{
		"id": "317f09634ff9",
		"ts": "2026-08-23T07:29:55.358Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3930743.39,
		"hash": "317f09634ff965fde4b235fc9ac6c543247bb15633e3425704fc665b6d9e2d10"
	},
	{
		"id": "e27e121bb7d5",
		"ts": "2026-08-23T06:34:06.906Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109375720.25,
		"hash": "e27e121bb7d5097d52b907e2b8bc095f201636ec0890c67bb57518e1d2437b72"
	},
	{
		"id": "9a2844f93285",
		"ts": "2026-08-23T06:34:07.416Z",
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
		"liquidityUsd": 13194912.26,
		"hash": "9a2844f93285f159fba1dac30a7e0e9386cfa9bbb2261ae7867cc4c184addde6"
	},
	{
		"id": "4d5bd3ff8693",
		"ts": "2026-08-23T06:34:07.634Z",
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
		"liquidityUsd": 860106.92,
		"hash": "4d5bd3ff86931f01458badaaa117ec3abc2a9cc9e3e5a5edea89ddaf8eb90cfc"
	},
	{
		"id": "991e27c99dba",
		"ts": "2026-08-23T06:34:07.832Z",
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
		"liquidityUsd": 27598977.95,
		"hash": "991e27c99dbae3300e637a2234a45aae3a2afa9b6284c7d45fb7a2c1349c08ec"
	},
	{
		"id": "b2d5f6d86d47",
		"ts": "2026-08-23T06:34:08.139Z",
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
		"liquidityUsd": 3273136.42,
		"hash": "b2d5f6d86d47c3d5861b3ee3e8ca885bafe4df92e1cd951a7650b8f97b4b9e33"
	},
	{
		"id": "8182de04a70e",
		"ts": "2026-08-23T06:34:08.381Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1129276.96,
		"hash": "8182de04a70e510b65ad897328575f755800e6bebc44f9f22309cb3a421f1b75"
	},
	{
		"id": "e8d481b5c974",
		"ts": "2026-08-23T06:34:08.622Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 896219.71,
		"hash": "e8d481b5c974af38cd4291e1769a9d9cec93f0aa91a29e22e28cc1f4a33307a1"
	},
	{
		"id": "42b63cf4f2fe",
		"ts": "2026-08-23T06:34:08.842Z",
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
		"liquidityUsd": 3102551.33,
		"hash": "42b63cf4f2fe8732cd04728db8e3ac12968ccfb61ebe51b9c5f3696733b237aa"
	},
	{
		"id": "4411ef371d75",
		"ts": "2026-08-23T06:34:09.056Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1315672.4,
		"hash": "4411ef371d75bba9ce1b8a60c93bb2dcb313152a3d1b05ef2e44c6645f2e93a9"
	},
	{
		"id": "3ebf004abfaa",
		"ts": "2026-08-23T06:34:09.316Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 805413.73,
		"hash": "3ebf004abfaa5ee2dd45f8d2ec0c7ea22995797f83dc3ff2d8bcb3d2687b5d56"
	},
	{
		"id": "72d3ecd5e3d0",
		"ts": "2026-08-23T06:34:09.974Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 140089.28,
		"hash": "72d3ecd5e3d0cb86d814de23961f6001d597c2e97ef44cee942f3dda7d5d5c65"
	},
	{
		"id": "428ea12f557f",
		"ts": "2026-08-23T06:34:10.185Z",
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
		"liquidityUsd": 10880137.39,
		"hash": "428ea12f557fa55f2b59e89829cdf5ca92ebbf531368898dc319f157ce9045ee"
	},
	{
		"id": "3101625da834",
		"ts": "2026-08-23T06:34:10.392Z",
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
		"liquidityUsd": 690198.19,
		"hash": "3101625da83414d41436f001fe55902a5168b789d4d3bd4832d30eddb6b3d02c"
	},
	{
		"id": "998e6a6b3de3",
		"ts": "2026-08-23T06:34:10.601Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"security_check_unavailable",
			"owner_not_renounced"
		],
		"liquidityUsd": 587702.83,
		"hash": "998e6a6b3de3457d1987835da1d4306467ff12ab1a8e6048d52caa0e33afaaa7"
	},
	{
		"id": "72321847479e",
		"ts": "2026-08-23T06:34:10.839Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 865991.16,
		"hash": "72321847479e9c1b300c6c0d269ebeacee84792d696a6ad57bc0a384fba9a85e"
	},
	{
		"id": "2856dd4c7412",
		"ts": "2026-08-23T06:34:11.059Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3146425.44,
		"hash": "2856dd4c7412aa016811027dcf476e0b024688d17837c0276e911ab2d203cfd7"
	},
	{
		"id": "314e2e515f7a",
		"ts": "2026-08-23T06:34:11.303Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 509798.75,
		"hash": "314e2e515f7a5326efb35ef08be54ff27358ce469daad310b7f05a03af70f3f1"
	},
	{
		"id": "eac00e9e31be",
		"ts": "2026-08-23T06:34:11.507Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1780786.72,
		"hash": "eac00e9e31be6c88c7bd96bac6e995a56924dc070db9f2ef2309be54e2facefa"
	},
	{
		"id": "787a3117dd4a",
		"ts": "2026-08-23T06:34:11.700Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 94269.16,
		"hash": "787a3117dd4aafdf64ff9251acf74cf52e346c73bc4b4c1f19e345b2cb85a83b"
	},
	{
		"id": "44d69be30fdd",
		"ts": "2026-08-23T05:24:55.020Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 108981223.72,
		"hash": "44d69be30fddf6c58288b39838559ae67ce7a657ce890edf935af1e1dffdd426"
	},
	{
		"id": "e59c30634831",
		"ts": "2026-08-23T05:24:55.439Z",
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
		"liquidityUsd": 14272895.06,
		"hash": "e59c306348316db181f602cbfc76e8ef7c16ea577b0dd7c7f3b0c5a56d948d29"
	},
	{
		"id": "e4a2dba9cb8b",
		"ts": "2026-08-23T05:24:55.674Z",
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
		"liquidityUsd": 861064.97,
		"hash": "e4a2dba9cb8be05f66dabb03e80654bc7c1db352199a02fff4fabccbdfaec960"
	},
	{
		"id": "a9eeb92fd67e",
		"ts": "2026-08-23T05:24:55.903Z",
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
		"liquidityUsd": 27559307.37,
		"hash": "a9eeb92fd67e7e1ff10cdf2c79c853afdce357c680d0fe5e0f8f11adcf192418"
	},
	{
		"id": "f916f120aac6",
		"ts": "2026-08-23T05:24:56.207Z",
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
		"liquidityUsd": 3287083.32,
		"hash": "f916f120aac6bcb565e1f98a28e79d46fb18e8390c677fc920261336c882a2e6"
	},
	{
		"id": "9f3c9ae91da6",
		"ts": "2026-08-23T05:24:56.442Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1126535.28,
		"hash": "9f3c9ae91da6ed4f05c0205b92f252fe475b585c24577a177077552550ffaf6f"
	},
	{
		"id": "5ff64c12b37f",
		"ts": "2026-08-23T05:24:56.681Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 894810.49,
		"hash": "5ff64c12b37f7d56b007beed958ff8f5328364ebac5e62fdef482394c15f2cf6"
	},
	{
		"id": "0d6acce9c423",
		"ts": "2026-08-23T05:24:56.915Z",
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
		"liquidityUsd": 1770926.01,
		"hash": "0d6acce9c42342827fc14e05589d1d8b357b08195f6c399068f7edcb0e8d7085"
	},
	{
		"id": "604f99682c3c",
		"ts": "2026-08-23T05:24:57.149Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1327126.68,
		"hash": "604f99682c3c1151ba88b7b4d69ab4b71d274e5e72966b93a44ba3b47b74896f"
	},
	{
		"id": "85e7fc77265f",
		"ts": "2026-08-23T05:24:57.384Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 783288.51,
		"hash": "85e7fc77265f8db329160f563cdfa8d4cbdc76be9e7a1d2f0ccc324feda12ff2"
	},
	{
		"id": "ffad9bf6de6a",
		"ts": "2026-08-23T05:24:57.616Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 127786.91,
		"hash": "ffad9bf6de6a2de19a6f5f63f186264422216d61619352ccbd734a062847f0bd"
	},
	{
		"id": "3892e651d9cf",
		"ts": "2026-08-23T05:24:57.835Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 688859.36,
		"hash": "3892e651d9cfe4ea4f3835afbc08bf1ae31541439422335a44786fe606eb3690"
	},
	{
		"id": "292b0e95ea24",
		"ts": "2026-08-23T05:24:58.047Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10864379.59,
		"hash": "292b0e95ea244020e86cc98362ff0863a6aa66ed1311988f99c1647f15e407fe"
	},
	{
		"id": "67a80231184f",
		"ts": "2026-08-23T05:24:58.261Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 879290.6,
		"hash": "67a80231184fc30bd0aa6a870681d4da3f675e883fb46ece2d524ed2d8c0c5aa"
	},
	{
		"id": "5df584b7dbf6",
		"ts": "2026-08-23T05:24:58.475Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3140091.25,
		"hash": "5df584b7dbf6fd200ec7abbe4ee66bdd24ccfa48ce7fd575dcbb6e05a399b249"
	},
	{
		"id": "a885bbf7fb15",
		"ts": "2026-08-23T05:24:58.761Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 581444.99,
		"hash": "a885bbf7fb15fadc54a3f4fbfa75295afec9f3d7aeb59b5f4a4399e41156ff6a"
	},
	{
		"id": "499964577531",
		"ts": "2026-08-23T05:24:59.024Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 518876.13,
		"hash": "49996457753131a0a02cdf9de73f04c907a5883df1e0c2de2369b3f49e7aea42"
	},
	{
		"id": "d7af1b7c5a63",
		"ts": "2026-08-23T05:24:59.255Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1769999.39,
		"hash": "d7af1b7c5a631e9fdc4f7ec48a54f2a0176d265cd24e3b1c45dc56d3b4850f07"
	},
	{
		"id": "367b53fa6414",
		"ts": "2026-08-23T05:25:00.135Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3887682.22,
		"hash": "367b53fa6414b7c7ec1b13656694ad6cec6278c0f22862e9d6fbeaac227b72fb"
	},
	{
		"id": "214886f173f6",
		"ts": "2026-08-23T04:32:19.203Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109768347.95,
		"hash": "214886f173f6461f107a9700b2b14e3d3cc4a4c2c848caa09125ef807ec24ba7"
	},
	{
		"id": "2717d218d705",
		"ts": "2026-08-23T04:32:19.697Z",
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
		"liquidityUsd": 18379161.42,
		"hash": "2717d218d705bcd74889e367130a0c89d9a8ebe69f8ce2cfed544809704b8679"
	},
	{
		"id": "b5ab1f8a61f9",
		"ts": "2026-08-23T04:32:19.937Z",
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
		"liquidityUsd": 875020.95,
		"hash": "b5ab1f8a61f9b0c83eee9d84df53eaffcb0cbe1bdb5443e801297b69d3307c72"
	},
	{
		"id": "2b1c9fa11e34",
		"ts": "2026-08-23T04:32:20.221Z",
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
		"liquidityUsd": 27814257.06,
		"hash": "2b1c9fa11e347b3399f082d9de3a875c2540e8798cbbfa2ba38354823d0d5cfe"
	},
	{
		"id": "a7ba18079a8b",
		"ts": "2026-08-23T04:32:20.466Z",
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
		"liquidityUsd": 3316266.43,
		"hash": "a7ba18079a8b66be5df0f3c8b7beb1adb422ac6e9931053b20b1148e64596b44"
	},
	{
		"id": "01d860ade059",
		"ts": "2026-08-23T04:32:20.723Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1141592.25,
		"hash": "01d860ade059d08b9321be7cf3e8b0ab13880e9e1f736219d0e248c3557853b7"
	},
	{
		"id": "191cdea3530a",
		"ts": "2026-08-23T04:32:20.979Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 905533.25,
		"hash": "191cdea3530ae5848ec4789c8abcb6b47fecd3e5fb0aa070dd1a0ffa8483383b"
	},
	{
		"id": "9e7baa572400",
		"ts": "2026-08-23T04:32:21.288Z",
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
		"liquidityUsd": 1793156.09,
		"hash": "9e7baa57240039b7b4343ac3c26f00bf11bb920c566eee789cf503042070a856"
	},
	{
		"id": "6c7bb00b3cb5",
		"ts": "2026-08-23T04:32:21.559Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1453782.41,
		"hash": "6c7bb00b3cb5404717d0a5bc07b248131d6092ef432dc32b93e485e57fc15b4d"
	},
	{
		"id": "196267128a2d",
		"ts": "2026-08-23T04:32:21.991Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 779612.14,
		"hash": "196267128a2da27a609ed475c3b19c5ebbce5d3d237a5b9cc072cd04b1846991"
	},
	{
		"id": "434804d08968",
		"ts": "2026-08-23T04:32:22.211Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 127199.64,
		"hash": "434804d089681a9b4d1d4903a070e6181906a285a38276b7ad0e95ce272ea24c"
	},
	{
		"id": "61af751f0693",
		"ts": "2026-08-23T04:32:22.451Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 724008.93,
		"hash": "61af751f06936ed38f6fc5171766c90b2966d20b0f00e49dc833b08de1e11865"
	},
	{
		"id": "b543350406f0",
		"ts": "2026-08-23T04:32:22.669Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10839997.19,
		"hash": "b543350406f0560834ac408a73304675ad926d3e276129ed1f7e41ff741f8fbb"
	},
	{
		"id": "dcf3f41614a6",
		"ts": "2026-08-23T04:32:22.908Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3208885.7,
		"hash": "dcf3f41614a62ea314440b400dccbe7f38ab5e56526a2c7a5aca164390bcab77"
	},
	{
		"id": "26bb37d9dc96",
		"ts": "2026-08-23T04:32:23.127Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 892213.98,
		"hash": "26bb37d9dc9626fd685bf18e9fb0da7227e8bb2cc5b1b345219020dbae99f46b"
	},
	{
		"id": "c81807edf7a4",
		"ts": "2026-08-23T04:32:23.367Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 589874.02,
		"hash": "c81807edf7a4d7da9e565ddb8231fa460193e7c241b1dde65d56cbe73ff80e94"
	},
	{
		"id": "cd8e6e31cf10",
		"ts": "2026-08-23T04:32:23.607Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1790934.33,
		"hash": "cd8e6e31cf10313be9fd626188ed0ba6717e25c31336d3777d314425c8bf263a"
	},
	{
		"id": "05e108622db1",
		"ts": "2026-08-23T04:32:23.825Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 521010.46,
		"hash": "05e108622db18b9e88b214bc0fc2ef15da3e2bb85677c19c9bd673697ef849b0"
	},
	{
		"id": "e3f8347d4460",
		"ts": "2026-08-23T04:32:24.066Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3960805.76,
		"hash": "e3f8347d4460e7b7725a0a8040b51c4f1b7078afbf06ebb306489eb4a0a8f073"
	},
	{
		"id": "74e288f6ad8f",
		"ts": "2026-08-23T03:53:47.080Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109867382.43,
		"hash": "74e288f6ad8fb154cc6ab0fd2c2d21584400bce36094de838b8ed0744ad5cb50"
	},
	{
		"id": "9ddc62250f21",
		"ts": "2026-08-23T03:53:47.686Z",
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
		"liquidityUsd": 17554694.6,
		"hash": "9ddc62250f21d94b08c89cf3e35db187bf2cfc3fe5e7f835b74730064a1caf7c"
	},
	{
		"id": "a4b2bbece5de",
		"ts": "2026-08-23T03:53:48.106Z",
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
		"liquidityUsd": 877519.41,
		"hash": "a4b2bbece5de8c5e104d5c619ae9636d2173389d2073622c83833f4f47df94b3"
	},
	{
		"id": "1d667c839825",
		"ts": "2026-08-23T03:53:48.531Z",
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
		"liquidityUsd": 27880248.58,
		"hash": "1d667c839825fa3e274c2ad000ccb185b03f0a94b8d2477f7bec1b7ec6c6104b"
	},
	{
		"id": "eff28864a280",
		"ts": "2026-08-23T03:53:48.765Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "eff28864a280f4910993693ca40f6c22454e8e32087818a96947e8bb6e8c11b3"
	},
	{
		"id": "b5fcc8f8f5ea",
		"ts": "2026-08-23T03:53:49.000Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1145297.47,
		"hash": "b5fcc8f8f5ea166e644ffeab1c38a9b613bcd0cd2002af20b87df54530862917"
	},
	{
		"id": "8bd1f9494888",
		"ts": "2026-08-23T03:53:49.239Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 906291.98,
		"hash": "8bd1f9494888ee94f466873e0490618c45d23b9d4a755ba35e2a5209fec1a72f"
	},
	{
		"id": "04eb8c1b57a7",
		"ts": "2026-08-23T03:53:49.472Z",
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
		"liquidityUsd": 1794265.2,
		"hash": "04eb8c1b57a7acede458a79004e148a56b10bd000752ca5194e0f57d48f38f65"
	},
	{
		"id": "fa030b22cedc",
		"ts": "2026-08-23T03:53:49.703Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1429802.33,
		"hash": "fa030b22cedc92a45aa98871648bc62dba6a5ddd9954858d2576af39790c9968"
	},
	{
		"id": "8e383599617e",
		"ts": "2026-08-23T03:53:50.131Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 791686.81,
		"hash": "8e383599617e831f5703efc6e4af5a99fb5f1e60a3c90aecc203285bfd03206d"
	},
	{
		"id": "fdc4f6956ef4",
		"ts": "2026-08-23T03:53:50.347Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 124022.81,
		"hash": "fdc4f6956ef4994c4f3e281149115f740ef9c18ed0e0ec4db554cafd1617caf1"
	},
	{
		"id": "e578552c8109",
		"ts": "2026-08-23T03:53:50.562Z",
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
		"liquidityUsd": 727197.25,
		"hash": "e578552c8109cf79713ee57bc296ec60b95782e4a154d0d0f972b94d9072d462"
	},
	{
		"id": "64939bf94c23",
		"ts": "2026-08-23T03:53:50.777Z",
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
		"liquidityUsd": 10894759.02,
		"hash": "64939bf94c23fe3cfc5df0e793c3d4ab7e94a1cda494af7bdb6035ddb6246281"
	},
	{
		"id": "c912d87154c7",
		"ts": "2026-08-23T03:53:50.993Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 584593.53,
		"hash": "c912d87154c7e5ddf0a428b1cda1084a1d5ce2a4935ae4bec18fe1f01f5d2ba3"
	},
	{
		"id": "4b457416dba9",
		"ts": "2026-08-23T03:53:51.209Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3229717.2,
		"hash": "4b457416dba9973385f7672e01a46cad8c5104f74b1b1a62d9aa00f937259e8d"
	},
	{
		"id": "8d15fa725fc5",
		"ts": "2026-08-23T03:53:51.424Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 882277.43,
		"hash": "8d15fa725fc5475fe86ac6f10d17f9acc4b84931164294cde67776104a515788"
	},
	{
		"id": "93c00b16e99f",
		"ts": "2026-08-23T03:53:51.638Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1801831.96,
		"hash": "93c00b16e99f69c5166c40492013edd90b1b4f41fa57ff0183688b80c65327b8"
	},
	{
		"id": "ec9eabdfcf4f",
		"ts": "2026-08-23T03:53:51.852Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 529307.44,
		"hash": "ec9eabdfcf4f32bb693ae7e9385f6e49af22b17ceb3f3602fa47291a2069a5e1"
	},
	{
		"id": "a8572a36bae3",
		"ts": "2026-08-23T03:53:52.069Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3956006.8,
		"hash": "a8572a36bae3c7b747aa7d12f06d8a06238c0921c6b60c364f64edfa4fb518d3"
	},
	{
		"id": "7a9a585a81a5",
		"ts": "2026-08-23T02:58:27.718Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109759421.25,
		"hash": "7a9a585a81a55fe9055d635016d48e25b0622befe1ab6564e84e365595cd8b8a"
	},
	{
		"id": "3c0adea393fa",
		"ts": "2026-08-23T02:58:28.394Z",
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
		"liquidityUsd": 16398976.07,
		"hash": "3c0adea393fa0654ec0414cd05fc09f9bfa79856792e2c3da0e6577b0e780223"
	},
	{
		"id": "01fcb582126a",
		"ts": "2026-08-23T02:58:28.889Z",
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
		"liquidityUsd": 885226.6,
		"hash": "01fcb582126abd2d4655f2bbcebeb76b83ddf917c0a8c5a384227a1c39b7edfd"
	},
	{
		"id": "e058259b113c",
		"ts": "2026-08-23T02:58:29.358Z",
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
		"liquidityUsd": 28009405.38,
		"hash": "e058259b113c68edc2fdb050c96bebc3e25be611db4c9be175ea8429318efa0a"
	},
	{
		"id": "5170a840bacc",
		"ts": "2026-08-23T02:58:29.614Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "5170a840bacca0ffb7556082a7f881f8516601d882cf853f06b905766b922ec6"
	},
	{
		"id": "1b80957015b3",
		"ts": "2026-08-23T02:58:29.872Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1152448.06,
		"hash": "1b80957015b30a8a093fb6c80722c592dd7ed0c4d99cd4acb8827ffce72ebc31"
	},
	{
		"id": "6d29714a1a19",
		"ts": "2026-08-23T02:58:30.125Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 903318.99,
		"hash": "6d29714a1a197108a466a4863a9818c0539cb5203c60c3b60823a4cda3a3eed8"
	},
	{
		"id": "be70eea4dfea",
		"ts": "2026-08-23T02:58:30.379Z",
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
		"liquidityUsd": 1798248.96,
		"hash": "be70eea4dfead27020f94e7666305fd58b0bdad0f6a27f9ffd85e59d2f7474e8"
	},
	{
		"id": "ab52a004741a",
		"ts": "2026-08-23T02:58:30.648Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1414393.31,
		"hash": "ab52a004741a61fc8649f06e901476ebf6fc6a50d619a8dc4d7e5faf06d1a48f"
	},
	{
		"id": "401900801727",
		"ts": "2026-08-23T02:58:31.339Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 787130.61,
		"hash": "401900801727a8fc3e1b2dd0f3b12eae7fef8aed850feb6fa9859702fb0ad4f8"
	},
	{
		"id": "15ed3923e8bf",
		"ts": "2026-08-23T02:58:31.577Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 125253.85,
		"hash": "15ed3923e8bff9ba9e44c20147029c564aca28ba6488322e63454881ed42aeb6"
	},
	{
		"id": "0115bac728d5",
		"ts": "2026-08-23T02:58:31.840Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 721398.14,
		"hash": "0115bac728d54111f21d5abd7508f8bbc3810d2cb02a7a7b02a18bd93986a8af"
	},
	{
		"id": "217e8a6b4247",
		"ts": "2026-08-23T02:58:32.078Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10971946.89,
		"hash": "217e8a6b42472ab641a8387cde79fcda25b35083eb80bc094c9f39667e34b0f0"
	},
	{
		"id": "f71dfa827e24",
		"ts": "2026-08-23T02:58:32.313Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 584667.22,
		"hash": "f71dfa827e245f01af0d4afbbb46d2b2378971f333817b218e445aa0327398d3"
	},
	{
		"id": "408ebb6a3494",
		"ts": "2026-08-23T02:58:32.550Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3281356.19,
		"hash": "408ebb6a34949de148786efc6d2352adacfccbabcc13593dc2667e369aa347f9"
	},
	{
		"id": "d5268c8eae0f",
		"ts": "2026-08-23T02:58:32.784Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 877906.97,
		"hash": "d5268c8eae0fed81889abd96643ed8dccbe161f16326417825a26d04133fc13e"
	},
	{
		"id": "55c88bcde3e9",
		"ts": "2026-08-23T02:58:33.022Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1814166.93,
		"hash": "55c88bcde3e9f73b306e695aafb91527784ca27a4678eedc4220f6c61b475fe6"
	},
	{
		"id": "851320d7e862",
		"ts": "2026-08-23T02:58:33.256Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3961499.53,
		"hash": "851320d7e86246cfb467e040f9fbbe15b9007bcc0b7e0303c23444d068e3eac9"
	},
	{
		"id": "6b3ea0a005de",
		"ts": "2026-08-23T02:58:33.494Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 529289.91,
		"hash": "6b3ea0a005de5db108304e24a635930fdf35687638f2f646a49d4206b251b000"
	},
	{
		"id": "14a88c3d6f2d",
		"ts": "2026-08-23T01:04:53.304Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 110016311.68,
		"hash": "14a88c3d6f2d75a83bbc3e3f8e54e6e7c720fcf54e32a2e50d2a1ae340675378"
	},
	{
		"id": "e8b5a4f0d9b6",
		"ts": "2026-08-23T01:04:53.932Z",
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
		"liquidityUsd": 18702800.58,
		"hash": "e8b5a4f0d9b61efed2b8ffdff80ab3ecdd55229c6de403518327e7e145da3111"
	},
	{
		"id": "582caea67cb6",
		"ts": "2026-08-23T01:04:54.353Z",
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
		"liquidityUsd": 878886.48,
		"hash": "582caea67cb66c41ad63aa7ef20dc779ad97434456fd633751076c01acec3f5e"
	},
	{
		"id": "dd2fbac617f9",
		"ts": "2026-08-23T01:04:54.779Z",
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
		"liquidityUsd": 28161973.26,
		"hash": "dd2fbac617f911971a60b84e4ee357f3c48464b1e937f5efd78fd300ac570046"
	},
	{
		"id": "94189d23e5ac",
		"ts": "2026-08-23T01:04:55.034Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "94189d23e5ac9cea72a030061e5d721b74ac70dacf8c0243a0fc4f7bbf6c652a"
	},
	{
		"id": "80d9526e5989",
		"ts": "2026-08-23T01:04:55.283Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1164084.55,
		"hash": "80d9526e5989d5facf3c86fefdd4f10007b148e8419c9b7b1ed35abb520b77f3"
	},
	{
		"id": "7c250119e1d5",
		"ts": "2026-08-23T01:04:55.512Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 911498.66,
		"hash": "7c250119e1d52ff6c13462c516881127a61f91539b9293304f8b557707bc0c54"
	},
	{
		"id": "b903942b35c6",
		"ts": "2026-08-23T01:04:55.778Z",
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
		"liquidityUsd": 1808311.51,
		"hash": "b903942b35c6032398f51b8a389316c7d7b65c5883600b79cfb7281a78e4fa5e"
	},
	{
		"id": "67799058e98b",
		"ts": "2026-08-23T01:04:56.014Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1419057.1,
		"hash": "67799058e98ba5e0a3d0a17438148f50f4295d45676c23273592676f51f445e8"
	},
	{
		"id": "572301cd29c9",
		"ts": "2026-08-23T01:04:56.677Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 787158.13,
		"hash": "572301cd29c957b3a9039c9f03a677bbb95470a3c0725ebb4b1121230c6239c6"
	},
	{
		"id": "36b7217d5a35",
		"ts": "2026-08-23T01:04:56.903Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 133660.22,
		"hash": "36b7217d5a35978e0fdb8c5df9073a5357906efacdb37b57866340a447df4ed7"
	},
	{
		"id": "ce4b04243d67",
		"ts": "2026-08-23T01:04:57.121Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 698343.94,
		"hash": "ce4b04243d678bb3b8c2aa59221ea85d58dc4fb3d2a7c78aecb95d508890920c"
	},
	{
		"id": "93086d476ccc",
		"ts": "2026-08-23T01:04:57.334Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 11092847.81,
		"hash": "93086d476cccffb49e203d265af838cc96558ccf6044f6e1ec1a1d13ce59506f"
	},
	{
		"id": "2c8375a95679",
		"ts": "2026-08-23T01:04:57.550Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 606818.29,
		"hash": "2c8375a95679869c82f5c707bef4cf0ca10ff4ba436b871539e8c3b1e557022f"
	},
	{
		"id": "52dfc9a1bd88",
		"ts": "2026-08-23T01:04:57.764Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 904179.11,
		"hash": "52dfc9a1bd88265da0ec35e46cb3941682d6e70db347ddce58f3cf3c1ed97421"
	},
	{
		"id": "9477a8a0eef8",
		"ts": "2026-08-23T01:04:57.999Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3341731.52,
		"hash": "9477a8a0eef8125a1a3e61f9d2c0daed47ce4544a29c43e28f86f85b72ef041a"
	},
	{
		"id": "4d19b7bf39a0",
		"ts": "2026-08-23T01:04:58.220Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 499116.56,
		"hash": "4d19b7bf39a0f6a66b0b69bd89bf172f703477196276871b75df5a7b9c05ed0e"
	},
	{
		"id": "27f9e22e68cb",
		"ts": "2026-08-23T01:04:58.446Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 570281.54,
		"hash": "27f9e22e68cbdbfd1860e1a1343ed6f1f9c4dcb99d17e52f075a4d35b287058b"
	},
	{
		"id": "e83792ebaa3c",
		"ts": "2026-08-23T01:04:58.665Z",
		"symbol": "POD",
		"token": "0xeD664536023d8E4b1640C394777D34aBAFF1dF8F",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3877199.43,
		"hash": "e83792ebaa3c2baf42c05952f13b1e3a948bdb650077551629ebda647bb2c63d"
	},
	{
		"id": "5e19fe12f01c",
		"ts": "2026-08-22T23:16:49.798Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109794144.87,
		"hash": "5e19fe12f01cf02e7eb00462ec4ba6bf7d74461d240df890dbe70c858399ddb5"
	},
	{
		"id": "7b81667f8d8e",
		"ts": "2026-08-22T23:16:50.451Z",
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
		"liquidityUsd": 17638043.22,
		"hash": "7b81667f8d8ead283a376f43df924789acd78f47172f9aaffb0c19dcb03e5622"
	},
	{
		"id": "72b4cf1c1014",
		"ts": "2026-08-22T23:16:50.894Z",
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
		"liquidityUsd": 874276.82,
		"hash": "72b4cf1c1014639d5ab0a24d84d7967f5ad4757877f5502468467265734d03e1"
	},
	{
		"id": "d7a14872d19b",
		"ts": "2026-08-22T23:16:51.363Z",
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
		"liquidityUsd": 27989535.2,
		"hash": "d7a14872d19bac87e671a2a5e2e87e591d0ae4e86bb7411d460175bb4816bc2a"
	},
	{
		"id": "5ae44e936a71",
		"ts": "2026-08-22T23:16:51.807Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "5ae44e936a715737dea1f9b3072a9bb14868736c23919be889cb3d59c7c82b36"
	},
	{
		"id": "dc0274dfed10",
		"ts": "2026-08-22T23:16:52.126Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1154480.55,
		"hash": "dc0274dfed107640d4bb6c2cd0d2b5c25d256d097ff0d77f17fb153a537086be"
	},
	{
		"id": "d9cc7ac71037",
		"ts": "2026-08-22T23:16:52.376Z",
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
		"liquidityUsd": 408365.57,
		"hash": "d9cc7ac710377e88f6714a7181c20715009f0fbaf703a2f55fe83582435f17ef"
	},
	{
		"id": "864ee118a010",
		"ts": "2026-08-22T23:16:52.640Z",
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
		"liquidityUsd": 1681215.47,
		"hash": "864ee118a0107aad88824b4addfc945c82e97bb61aa951da76b8f99fafaee4c3"
	},
	{
		"id": "2a5777179ffb",
		"ts": "2026-08-22T23:16:53.353Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 797560.21,
		"hash": "2a5777179ffb18e643ed7ceaa708713fa7d1b856fe40abb9100318e7f2c66fac"
	},
	{
		"id": "490e31437d5d",
		"ts": "2026-08-22T23:16:53.665Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1305487.29,
		"hash": "490e31437d5df84f28c29b0b46bcb21489623f1503b83928125a1116312c3468"
	},
	{
		"id": "63de3cf3197e",
		"ts": "2026-08-22T23:16:53.892Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 138057.26,
		"hash": "63de3cf3197e5107f9b73bf7fbde756550a74edc9699ebfbc36709a9faf66e5e"
	},
	{
		"id": "90ae68071607",
		"ts": "2026-08-22T23:16:54.131Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10949566.34,
		"hash": "90ae6807160727953260d01c3700991efd1edc378865df3d07921db148402d0c"
	},
	{
		"id": "2203e4f903a9",
		"ts": "2026-08-22T23:16:54.357Z",
		"symbol": "GITLAWB",
		"token": "0x5F980Dcfc4c0fa3911554cf5ab288ed0eb13DBa3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 715129.07,
		"hash": "2203e4f903a92f867795d151f5f16cab46009da343ffd85a02a5ecf0412baad5"
	},
	{
		"id": "c2ddc993f82c",
		"ts": "2026-08-22T23:16:54.596Z",
		"symbol": "aeon",
		"token": "0xBf8E8f0e8866a7052F948C16508644347c57aba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 618522.1,
		"hash": "c2ddc993f82c7fb8939afd90beda6b34f08d0fc5a8a43b7defe21ef57ac570c2"
	},
	{
		"id": "cefd8835661c",
		"ts": "2026-08-22T23:16:54.823Z",
		"symbol": "HYDX",
		"token": "0x00000e7efa313F4E11Bfff432471eD9423AC6B30",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 892615.1,
		"hash": "cefd8835661c0fee5dd27cbe2e94762179984180d5c8be84b5e2765f9f838eec"
	},
	{
		"id": "19eab432fdc8",
		"ts": "2026-08-22T23:16:55.048Z",
		"symbol": "VEIL",
		"token": "0x767A739D1A152639e9Ea1D8c1BD55FDC5B217D7f",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 567608.79,
		"hash": "19eab432fdc8792b7c385b5db0f174c55b3e6b7c8ac7b945fd6781f7079761b7"
	},
	{
		"id": "719a397d1e86",
		"ts": "2026-08-22T23:16:55.287Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3328468.28,
		"hash": "719a397d1e8668f36f5cdedbe0b3e8e379ece5ddb2c6bfafb15a5b518da20e1a"
	},
	{
		"id": "12616769a0da",
		"ts": "2026-08-22T23:16:55.512Z",
		"symbol": "Ratspeak",
		"token": "0xf1e9Baa65d418A9025e1851DD2D37f1AD208bba3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 513448.92,
		"hash": "12616769a0dadf663b44f65ff1d353feb966a4ddd49d292f4b05fdee0365662c"
	},
	{
		"id": "051dd9f07fcf",
		"ts": "2026-08-22T22:17:13.602Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 109781374.2,
		"hash": "051dd9f07fcf23eefcdae67bb3bc54644c26d00c8a06dee130b368e9f4ad2cc5"
	},
	{
		"id": "ff0245f1b5c3",
		"ts": "2026-08-22T22:17:13.952Z",
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
		"liquidityUsd": 17698256.12,
		"hash": "ff0245f1b5c392c2016a953ce27abbfd89fb7265725148d795f7738a09185ddd"
	},
	{
		"id": "378b9d1b88db",
		"ts": "2026-08-22T22:17:14.142Z",
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
		"liquidityUsd": 872503.21,
		"hash": "378b9d1b88db98b7bd0696d1023df542ea3c2e4e9f11c066e2025b78ff310792"
	},
	{
		"id": "2b5c77cac099",
		"ts": "2026-08-22T22:17:14.344Z",
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
		"liquidityUsd": 27967228.99,
		"hash": "2b5c77cac09905bde5a7db5a728e82db021d6c53c4df3ba9e0c98facba6bd5ff"
	},
	{
		"id": "23c3741c71a5",
		"ts": "2026-08-22T22:17:14.523Z",
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
		"liquidityUsd": 8569867632.36,
		"hash": "23c3741c71a58b4e61cf3a01dc3a15e8fabd898675ee5af912f7ec158aa38eb9"
	},
	{
		"id": "f3e9a898c119",
		"ts": "2026-08-22T22:17:14.733Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 1150919.64,
		"hash": "f3e9a898c1197d7bbe3e24d9dae44258a21b36013c302af042a0098c0703403f"
	},
	{
		"id": "fd8025007cef",
		"ts": "2026-08-22T22:17:14.922Z",
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
		"liquidityUsd": 408182.33,
		"hash": "fd8025007cef293e6883054fb4c74b0a94815e7cc30f9745db40140020b1d9ea"
	},
	{
		"id": "9a6f65d7292c",
		"ts": "2026-08-22T22:17:15.132Z",
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
		"liquidityUsd": 1684071.46,
		"hash": "9a6f65d7292c04c80361b5b0324f565efe7eb1a2327cbcacc78a599bad00398a"
	},
	{
		"id": "4325b5b7b493",
		"ts": "2026-08-22T22:17:15.334Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 795541.63,
		"hash": "4325b5b7b493132f759b43db64b166a3f08365653e0c4f9d5ab1d6a3bc89b4fa"
	},
	{
		"id": "30e3b275bb7d",
		"ts": "2026-08-22T22:17:15.533Z",
		"symbol": "DRB",
		"token": "0x3ec2156D4c0A9CBdAB4a016633b7BcF6a8d68Ea2",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [],
		"liquidityUsd": 1304748.81,
		"hash": "30e3b275bb7dd66ec91c6093628c14591a7eeb26f4f4181c1f4ae690a56a925f"
	},
	{
		"id": "aacba2821884",
		"ts": "2026-08-22T22:17:15.781Z",
		"symbol": "BRIAN",
		"token": "0xB2000000000000000000007BF6D5cBb0E24cB301",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"security_check_unavailable",
			"sim_honeypot"
		],
		"liquidityUsd": 138543.96,
		"hash": "aacba2821884fb9227c0f56b1e92ab7d7b4761716d215664740629ddc42637f7"
	}
]
