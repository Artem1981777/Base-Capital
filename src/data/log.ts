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
	"updatedAt": "2026-08-18T08:31:19.922Z",
	"tokensScored": 11670,
	"verdictsIssued": 11670,
	"safe": 10135,
	"risky": 858,
	"likelyRug": 677,
	"ticks": 691
}

export const verdicts: AgentVerdict[] = [
	{
		"id": "04d24b3678e0",
		"ts": "2026-08-18T08:31:15.608Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112438975.82,
		"hash": "04d24b3678e015a79e80fb3cbc216c51f34c363af093159272c77ca16837efb6"
	},
	{
		"id": "801528438798",
		"ts": "2026-08-18T08:31:15.852Z",
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
		"liquidityUsd": 16746014.87,
		"hash": "801528438798c577126ed55bc0dc1895b0ba09a1f4da8a942022a2ee4c1631f7"
	},
	{
		"id": "f268f6118c67",
		"ts": "2026-08-18T08:31:16.077Z",
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
		"liquidityUsd": 753451.6,
		"hash": "f268f6118c673b85d63f6c93d23a34a7483976107cc7353c92c56aef7f661330"
	},
	{
		"id": "1ba9283b83db",
		"ts": "2026-08-18T08:31:16.318Z",
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
		"liquidityUsd": 26725583.27,
		"hash": "1ba9283b83db1afa460dbe7fd7e115fe0e94f2a0c034a03ee9b70cdcae03a308"
	},
	{
		"id": "8d36f2003f48",
		"ts": "2026-08-18T08:31:16.592Z",
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
		"liquidityUsd": 4224003.43,
		"hash": "8d36f2003f48c9a8fba08ad2daab504b560619061f1b9cd1a0d95e343ed114bd"
	},
	{
		"id": "74ba323c0d95",
		"ts": "2026-08-18T08:31:16.816Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 876623.23,
		"hash": "74ba323c0d9518b0790e9482f92c0268fdb6c82b61329f396521b28cae671369"
	},
	{
		"id": "a2eb38cd88d1",
		"ts": "2026-08-18T08:31:17.050Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3370226.37,
		"hash": "a2eb38cd88d1055bd7ddc10301860ac7f58f87d0a262276b68cb7e89fb72bb99"
	},
	{
		"id": "f1435fd0a8d2",
		"ts": "2026-08-18T08:31:17.311Z",
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
		"liquidityUsd": 3411147.31,
		"hash": "f1435fd0a8d254c3edbb9e132fbf2354bc41350da0616d5364fba283ab9b2725"
	},
	{
		"id": "b021fc10ae43",
		"ts": "2026-08-18T08:31:17.553Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 488942.42,
		"hash": "b021fc10ae43ace00974fa4f26f3808dc1f4d86366aabf91516c907545b7360b"
	},
	{
		"id": "6d7d8200433b",
		"ts": "2026-08-18T08:31:17.789Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 99146.3,
		"hash": "6d7d8200433b2dc6ad44244f935a4c0ed06205025939af69b46e73cf542a2a87"
	},
	{
		"id": "2e640a77474d",
		"ts": "2026-08-18T08:31:18.012Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 72545.97,
		"hash": "2e640a77474d0c858377322c28adefe3e165fad03260cc3c57e69363ed5b0580"
	},
	{
		"id": "ca40a2fe2e24",
		"ts": "2026-08-18T08:31:18.222Z",
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
		"liquidityUsd": 462146.16,
		"hash": "ca40a2fe2e24059341efd80031b615a028dd3b66cdc3fe7c3d8411a2a9118ea7"
	},
	{
		"id": "653661a288e2",
		"ts": "2026-08-18T08:31:18.428Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 242415.92,
		"hash": "653661a288e26be4421691677b467125e3a0fd46a34bdbb3f37e23a6bbc4220e"
	},
	{
		"id": "5d1740cdf714",
		"ts": "2026-08-18T08:31:18.648Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 387997.13,
		"hash": "5d1740cdf714e19a11b742dc1f8f861d46a10fd24bb79b96fa7633896d56b30b"
	},
	{
		"id": "5ba56a9935e6",
		"ts": "2026-08-18T08:31:18.857Z",
		"symbol": "MEOW",
		"token": "0x03Ee11923326D54A580aF44eC633F1cDcB414632",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"medium_liquidity",
			"security_check_unavailable"
		],
		"liquidityUsd": 36378.63,
		"hash": "5ba56a9935e6f0286110518d8079a19e95ba33e13c023a882a5932ea92a6e772"
	},
	{
		"id": "95cd804559d2",
		"ts": "2026-08-18T08:31:19.064Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3369703.97,
		"hash": "95cd804559d2aa87f9752037a1075cf4313ba6e8ef6ae9734b1e244fd85889c0"
	},
	{
		"id": "0c6a449adb30",
		"ts": "2026-08-18T08:31:19.284Z",
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
		"liquidityUsd": 70899.44,
		"hash": "0c6a449adb30cae154eb53c2683f63ab8cff70e5cdfa58e98594db06d6b94850"
	},
	{
		"id": "380092aafda7",
		"ts": "2026-08-18T08:31:19.492Z",
		"symbol": "wtCOIN",
		"token": "0x5cDa0E1CA4ce2af96315f7F8963C85399c172204",
		"score": 85,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.7,
		"flags": [
			"new_pair_under_24h",
			"security_check_unavailable"
		],
		"liquidityUsd": 509622,
		"hash": "380092aafda700e32301a67723d364e080f9dd268359d35990647207c0c5d928"
	},
	{
		"id": "9ee0b006f4a6",
		"ts": "2026-08-18T08:31:19.715Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10025997.75,
		"hash": "9ee0b006f4a6eea319b9ff7548cfd799ba4c726582ead7b168192208c9cfa118"
	},
	{
		"id": "89a509f63f5a",
		"ts": "2026-08-18T08:31:19.922Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2580575.63,
		"hash": "89a509f63f5aa9c19b0f3e912f2a7bc7cf1f5f0e0a2bd70a4370688d4366f0ac"
	},
	{
		"id": "d40f3d5ae317",
		"ts": "2026-08-18T07:34:27.582Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112469936.87,
		"hash": "d40f3d5ae317c02f712bbd1cd68ff70bac99cb6d3eafb3849acbfa6b55d6f6de"
	},
	{
		"id": "4fe36b98066d",
		"ts": "2026-08-18T07:34:27.790Z",
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
		"liquidityUsd": 16733430.52,
		"hash": "4fe36b98066d0658c2a70a697c9e02d9e59c56160cfd4a5debb5e397b62aa910"
	},
	{
		"id": "23a20a2bc2aa",
		"ts": "2026-08-18T07:34:27.987Z",
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
		"liquidityUsd": 766196.6,
		"hash": "23a20a2bc2aa82488f8ea5a3ddac9877846fb93fe392070e99d2985e96076bdf"
	},
	{
		"id": "12aefa43734b",
		"ts": "2026-08-18T07:34:28.182Z",
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
		"liquidityUsd": 26824019.8,
		"hash": "12aefa43734b2cbf7b4a4bd28afa072c5151528e62c43c9befb05f3fee72e1b9"
	},
	{
		"id": "07a2ae28f505",
		"ts": "2026-08-18T07:34:28.383Z",
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
		"liquidityUsd": 4224003.43,
		"hash": "07a2ae28f5059a590cad56ceb59f51913cbf6a5c27a170c33300662e9bf46818"
	},
	{
		"id": "70d15fc4a6b7",
		"ts": "2026-08-18T07:34:28.596Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 876623.23,
		"hash": "70d15fc4a6b76a47669b3b7ec201360c8d66b99033189613555e3a28796f5572"
	},
	{
		"id": "e274e6fcc5aa",
		"ts": "2026-08-18T07:34:28.783Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3425363.51,
		"hash": "e274e6fcc5aac3b5bd8bce32c75ba84ee3e837a42a6faa1fe9d562fcf93e34a8"
	},
	{
		"id": "71977ba8d842",
		"ts": "2026-08-18T07:34:29.017Z",
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
		"liquidityUsd": 3416016.87,
		"hash": "71977ba8d8429c97990e447e85a8e4b7ef56e43fd32ae04a1d765a163ea37087"
	},
	{
		"id": "1a029751a3e6",
		"ts": "2026-08-18T07:34:29.221Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 490342.68,
		"hash": "1a029751a3e6a055475be43a8042ecfd52f785c9d382ad0878a88577c06fab81"
	},
	{
		"id": "bd3ca59f2b92",
		"ts": "2026-08-18T07:34:29.410Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 97638.36,
		"hash": "bd3ca59f2b92254e73515bc9aeca74cb142f461a8533347ef3ef33205ca8de88"
	},
	{
		"id": "d473a8012306",
		"ts": "2026-08-18T07:34:29.600Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 70649.48,
		"hash": "d473a801230699655a0b7e8ed8e3ef90f41a4bc8bdaa9b43165468d17a26e132"
	},
	{
		"id": "1f9f57b83ea5",
		"ts": "2026-08-18T07:34:29.782Z",
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
		"liquidityUsd": 475664.99,
		"hash": "1f9f57b83ea5c86f6d2ba5b0aaaa0700d0a0d3fdd0b9dccb5879625334c662cb"
	},
	{
		"id": "3cded7408a42",
		"ts": "2026-08-18T07:34:29.970Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 242368.17,
		"hash": "3cded7408a420137243a7286af916fdca0839120ed41ead3579936d77ba37299"
	},
	{
		"id": "6a96e235d673",
		"ts": "2026-08-18T07:34:30.171Z",
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
		"liquidityUsd": 391043.62,
		"hash": "6a96e235d673d44fea38f6097048aba3c2a171690dc09cb060431782381e6345"
	},
	{
		"id": "82732e0cb5bb",
		"ts": "2026-08-18T07:34:30.358Z",
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
		"liquidityUsd": 34189.82,
		"hash": "82732e0cb5bbe2f93f3e16dbb7e5c810846c5fe98a6a0c0b1de7a48f3e1f92f4"
	},
	{
		"id": "f63913f46a28",
		"ts": "2026-08-18T07:34:30.553Z",
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
		"liquidityUsd": 9995694.59,
		"hash": "f63913f46a285f028282a8d1a113a1203d3049fb7f80c31e2d01c0f3183c4b84"
	},
	{
		"id": "00440bb1606c",
		"ts": "2026-08-18T07:34:30.737Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3425363.14,
		"hash": "00440bb1606ccf5fc8080a5c12b6830c5ad44151ebe64610bc5612d40cc4d682"
	},
	{
		"id": "b41533c227ce",
		"ts": "2026-08-18T07:34:30.928Z",
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
		"liquidityUsd": 75764.56,
		"hash": "b41533c227ce8e098df1911d4fc8d0e800b0684b0ae263de781d37b3832652ae"
	},
	{
		"id": "eed260c518a6",
		"ts": "2026-08-18T07:34:31.123Z",
		"symbol": "wtCOIN",
		"token": "0x5cDa0E1CA4ce2af96315f7F8963C85399c172204",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 51445.42,
		"hash": "eed260c518a6f1c3d4263c1966975c760ebd2aa0d5be97ce6d8ef3fcd4ae2cef"
	},
	{
		"id": "94cc3534dbfd",
		"ts": "2026-08-18T07:34:31.305Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2587052.23,
		"hash": "94cc3534dbfda15571359104315f34182f62d877b0d390632f7fc5a198cc54d7"
	},
	{
		"id": "801310f27f2f",
		"ts": "2026-08-18T06:35:55.142Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112354311.2,
		"hash": "801310f27f2f4181fad41a15b7dd05b291d033c4892d46dc0c16ae28300a477a"
	},
	{
		"id": "5c44ede4d4af",
		"ts": "2026-08-18T06:35:55.373Z",
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
		"liquidityUsd": 16683630.7,
		"hash": "5c44ede4d4af564529a04990655a4f618ebab0d746b6a74b7add2d00d623cc97"
	},
	{
		"id": "1f63ea53a804",
		"ts": "2026-08-18T06:35:55.615Z",
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
		"liquidityUsd": 766196.6,
		"hash": "1f63ea53a804957436ca86d9310113cd07a632b9dc8addb9bc4987305596a330"
	},
	{
		"id": "d6981e6b6c54",
		"ts": "2026-08-18T06:35:55.847Z",
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
		"liquidityUsd": 26815813.97,
		"hash": "d6981e6b6c54ae8699071a249c0144230a885aa36ad0fe6dee12030731999bd3"
	},
	{
		"id": "3c0501470536",
		"ts": "2026-08-18T06:35:56.076Z",
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
		"liquidityUsd": 4224003.43,
		"hash": "3c0501470536d208032d9836eadc9cad5fbf675bcedf85061cecb3373f2c7e48"
	},
	{
		"id": "eff3dba61b6c",
		"ts": "2026-08-18T06:35:56.301Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 876623.23,
		"hash": "eff3dba61b6cbb4de3a0e5fd965f38dafb986a6bb77389bab073a7c23614343a"
	},
	{
		"id": "3dc989867864",
		"ts": "2026-08-18T06:35:56.544Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3434815.82,
		"hash": "3dc98986786426906e03c3379a1f54c862551e184b754e94ba93eec475b0cd37"
	},
	{
		"id": "e7fdfa9eef61",
		"ts": "2026-08-18T06:35:56.769Z",
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
		"liquidityUsd": 1522935.99,
		"hash": "e7fdfa9eef61568f6b080f91df532302b3f4e491c29a8ab814aac007ce2811ae"
	},
	{
		"id": "d4b0b1cfb119",
		"ts": "2026-08-18T06:35:56.999Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 462674.83,
		"hash": "d4b0b1cfb119f699976ae62d69d4a0bcdd9044b9a0a91ac41669f00556800111"
	},
	{
		"id": "0c71dedb36a5",
		"ts": "2026-08-18T06:35:57.226Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 92,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.84,
		"flags": [
			"owner_not_renounced",
			"elevated_holder_concentration"
		],
		"liquidityUsd": 93813.78,
		"hash": "0c71dedb36a5aaa0a022dd1f90959d450f5a826e86dc4c97c51874ba1c21c0c5"
	},
	{
		"id": "c5daec693c4d",
		"ts": "2026-08-18T06:35:57.436Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 67095.99,
		"hash": "c5daec693c4dad6b288de3856e7ec00d8fb3661186b9e7efc37596631bb10314"
	},
	{
		"id": "5e48553b1ec1",
		"ts": "2026-08-18T06:35:57.648Z",
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
		"liquidityUsd": 463229.35,
		"hash": "5e48553b1ec1ae3b2ce7c55afd471ec70d738f0e7e7d0b6bf2d5b5342ce7b10c"
	},
	{
		"id": "887923324654",
		"ts": "2026-08-18T06:35:57.857Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 243830.07,
		"hash": "887923324654dbd3b2a602aaac58e1be52b19f88beb4e3348266abbd8c364fd5"
	},
	{
		"id": "5d073a84db98",
		"ts": "2026-08-18T06:35:58.068Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 390245.48,
		"hash": "5d073a84db9872c6b066a8f3a18f2f2d959de54d64e5725f19034bc49babb8d8"
	},
	{
		"id": "6a5f6a164b36",
		"ts": "2026-08-18T06:35:58.279Z",
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
		"liquidityUsd": 34385.36,
		"hash": "6a5f6a164b36af6689bf04846eeed44bde460271ab3a862818a837b741054bf8"
	},
	{
		"id": "e227abfc89b2",
		"ts": "2026-08-18T06:35:58.526Z",
		"symbol": "VVV",
		"token": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 10000840.9,
		"hash": "e227abfc89b2193bffd1bd318a3749d0e292902aff54468411d82baf31584979"
	},
	{
		"id": "5481711b4c8b",
		"ts": "2026-08-18T06:35:58.736Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3430501.52,
		"hash": "5481711b4c8bb6159b21142d4060a23cecf5e4eb98a326df282716ed77450630"
	},
	{
		"id": "30d5e42e1ad6",
		"ts": "2026-08-18T06:35:58.946Z",
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
		"liquidityUsd": 69396.43,
		"hash": "30d5e42e1ad6297eefca440f647071281dabfb79bc482fa93b0c8d3f9941acae"
	},
	{
		"id": "13fdc3b5187f",
		"ts": "2026-08-18T06:35:59.156Z",
		"symbol": "wtCOIN",
		"token": "0x5cDa0E1CA4ce2af96315f7F8963C85399c172204",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 58129.26,
		"hash": "13fdc3b5187f2439d42f9f4d1961445ad14fb852d8a4c2f02bdfdaa14b45ca1a"
	},
	{
		"id": "d79796e832d7",
		"ts": "2026-08-18T06:35:59.367Z",
		"symbol": "TIBBIR",
		"token": "0xA4A2E2ca3fBfE21aed83471D28b6f65A233C6e00",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 2523862.71,
		"hash": "d79796e832d779c2839b1bc9369c2b02dd220d4d0ad4f78c08d76d4cd0f2879c"
	},
	{
		"id": "77044fd4979f",
		"ts": "2026-08-18T05:24:39.513Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112215696.55,
		"hash": "77044fd4979f1e8c7921b702810d32427baa890d4c5a12195ea113f81ae013d8"
	},
	{
		"id": "402c52f7ee6d",
		"ts": "2026-08-18T05:24:40.291Z",
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
		"liquidityUsd": 16627335.22,
		"hash": "402c52f7ee6db407f09acf3b83977d3719ba2ab3b3a74e1054e8031b00b937e6"
	},
	{
		"id": "cd8fb66d65d7",
		"ts": "2026-08-18T05:24:40.691Z",
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
		"liquidityUsd": 773309.03,
		"hash": "cd8fb66d65d75722097c456096fac6485020ad73e8f8c840a6bceb08cf02bb50"
	},
	{
		"id": "8e0f19aa11d1",
		"ts": "2026-08-18T05:24:41.092Z",
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
		"liquidityUsd": 26802818.58,
		"hash": "8e0f19aa11d15721b54b2a6e68728a79a9129db8d7ce43d15712d78d9714e0ea"
	},
	{
		"id": "793f5ba806ef",
		"ts": "2026-08-18T05:24:41.489Z",
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
		"liquidityUsd": 4223491.23,
		"hash": "793f5ba806ef31261d2a14ebd9cb7e6c425c1d589c32518a0c86af1a345476dc"
	},
	{
		"id": "753c959e4a1c",
		"ts": "2026-08-18T05:24:41.886Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 876623.23,
		"hash": "753c959e4a1ca44150d9e5fd0f69574701f795c30e27c1671a7558e8ce893b2e"
	},
	{
		"id": "e4f0fad0ed6f",
		"ts": "2026-08-18T05:24:42.097Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3574405.44,
		"hash": "e4f0fad0ed6fd3a101306acf8e1ee21f62c15539979a327f24f9a3228cb4ef1d"
	},
	{
		"id": "4b8001942e1c",
		"ts": "2026-08-18T05:24:42.499Z",
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
		"liquidityUsd": 1519139.18,
		"hash": "4b8001942e1ccabc2fcae6a2eeff20709cdfdf4ed287c49364dd8ffc78574419"
	},
	{
		"id": "db51d948d3e8",
		"ts": "2026-08-18T05:24:42.958Z",
		"symbol": "Basecat",
		"token": "0xB2000000000000000000004c27f6523082f41D01",
		"score": 30,
		"rating": "high",
		"verdict": "LIKELY_RUG",
		"confidence": 0.4,
		"flags": [
			"sim_honeypot"
		],
		"liquidityUsd": 466791.96,
		"hash": "db51d948d3e85d61d09bea431628bafce129715ee967b65afcfb4d1754c98eb8"
	},
	{
		"id": "380306d9baa8",
		"ts": "2026-08-18T05:24:43.356Z",
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
		"liquidityUsd": 9894624.45,
		"hash": "380306d9baa8a61eafbff489f9e14aed83b5514ae01a4a601682215cf49c4cf4"
	},
	{
		"id": "476e61e4e177",
		"ts": "2026-08-18T05:24:43.555Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 95300.67,
		"hash": "476e61e4e17761d149b3241a2b5b05b7135704ac4a5728540463aa6e02df0ee2"
	},
	{
		"id": "476808e901a4",
		"ts": "2026-08-18T05:24:43.755Z",
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
		"liquidityUsd": 519855.9,
		"hash": "476808e901a4c70e2ae8680f86c7be0713a8f127a860126f54e165a1d25e97b3"
	},
	{
		"id": "4469176ab5db",
		"ts": "2026-08-18T05:24:43.954Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 66155.98,
		"hash": "4469176ab5db1100b77df5ea57b994b46779b1679b0924c28b7be424cce472ea"
	},
	{
		"id": "a9f9806e319d",
		"ts": "2026-08-18T05:24:44.416Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 244938.76,
		"hash": "a9f9806e319d3ea1612e95bd22138fe71881c0017aa8583bfc87d577c156c9d9"
	},
	{
		"id": "ce78eef81aa0",
		"ts": "2026-08-18T05:24:44.614Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 388918.51,
		"hash": "ce78eef81aa0cfc33365d0902341106cffc7a1c8fa202964b4d8430eee517f89"
	},
	{
		"id": "66a382893068",
		"ts": "2026-08-18T05:24:44.811Z",
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
		"liquidityUsd": 31951.76,
		"hash": "66a382893068826fa5e4960bb2f75b4e4823efb27bc25fc4643a5522b3591b92"
	},
	{
		"id": "8f96f8867fa4",
		"ts": "2026-08-18T05:24:45.010Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3568556.59,
		"hash": "8f96f8867fa46eebb764439fc34f8facbd36952bc06660c754dfabb8e72a3714"
	},
	{
		"id": "754ba00d6016",
		"ts": "2026-08-18T05:24:45.210Z",
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
		"liquidityUsd": 73278.95,
		"hash": "754ba00d601683295de7d74327ff415f0546aaae374a7dcc4060fcf3e9b5f842"
	},
	{
		"id": "d16ab221a322",
		"ts": "2026-08-18T05:24:45.408Z",
		"symbol": "wtCOIN",
		"token": "0x5cDa0E1CA4ce2af96315f7F8963C85399c172204",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 57801.39,
		"hash": "d16ab221a322a368648887bbc8f1faf5192f8cacd0dea76a444a45c073071ff9"
	},
	{
		"id": "075447eb5c4e",
		"ts": "2026-08-18T04:31:40.820Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112195091.32,
		"hash": "075447eb5c4e7dc612cfc40c29c8dc5281a4a0026feca712b61b2268cb1e0272"
	},
	{
		"id": "51cc8b377004",
		"ts": "2026-08-18T04:31:41.242Z",
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
		"liquidityUsd": 17207203.31,
		"hash": "51cc8b377004c7397375d0a9ce0f656c4aa1f6bea517ef477f4a3e6f4dee7a0b"
	},
	{
		"id": "2d038e91b97f",
		"ts": "2026-08-18T04:31:41.522Z",
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
		"liquidityUsd": 772237.59,
		"hash": "2d038e91b97f380d2c76ad89d26301335c6768b5972b0a4fa6fa3bf780d49e53"
	},
	{
		"id": "a7bd8d4554b5",
		"ts": "2026-08-18T04:31:41.753Z",
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
		"liquidityUsd": 26803128.02,
		"hash": "a7bd8d4554b5a22192522ddf4568430c96e10c4eee140453204ffcd2d8293872"
	},
	{
		"id": "c3b3c5a13aae",
		"ts": "2026-08-18T04:31:41.997Z",
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
		"liquidityUsd": 4217668.45,
		"hash": "c3b3c5a13aaeed032115b8c50bbce80c10794b7973f1f7c80ae59cba59df06e7"
	},
	{
		"id": "2891b221ce8d",
		"ts": "2026-08-18T04:31:42.244Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 876623.39,
		"hash": "2891b221ce8dbde5f616187203a90d5c680e2a34846ce8c3b6b1ac8074ea974d"
	},
	{
		"id": "16e07977c0e8",
		"ts": "2026-08-18T04:31:42.476Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3728060.33,
		"hash": "16e07977c0e84aabad2332cfbe0c9db79c9a1915ddc324eff4305d3bcaea0539"
	},
	{
		"id": "03641383bc32",
		"ts": "2026-08-18T04:31:42.732Z",
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
		"liquidityUsd": 1516737.73,
		"hash": "03641383bc32ce0a7eb4a7756dff5b63f63a120ff757c8054a67b9ebd5d8a77a"
	},
	{
		"id": "b6850cae06e9",
		"ts": "2026-08-18T04:31:42.972Z",
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
		"liquidityUsd": 494088.51,
		"hash": "b6850cae06e9d665685500d50243c856eb1c36d5c96f45e53c4d09b8503873b2"
	},
	{
		"id": "46dc5f715189",
		"ts": "2026-08-18T04:31:43.205Z",
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
		"liquidityUsd": 9849132.19,
		"hash": "46dc5f715189dab804a940f6576172062adfab615d8bbf96fd02802a4278b5b4"
	},
	{
		"id": "ae5a82029ee7",
		"ts": "2026-08-18T04:31:43.420Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 93529.74,
		"hash": "ae5a82029ee724b951e33fd05e6ddc36e6aa773f954656ec00006201715ead84"
	},
	{
		"id": "06ca4d383840",
		"ts": "2026-08-18T04:31:43.635Z",
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
		"liquidityUsd": 519855.9,
		"hash": "06ca4d383840f7181e2d580b76696613c1a00c9c61594711454521aa10e858fd"
	},
	{
		"id": "237ee2d38041",
		"ts": "2026-08-18T04:31:43.848Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 68545.64,
		"hash": "237ee2d38041a030331cbc000ec20fbfee7a628388165b81e26b19a957fbbe11"
	},
	{
		"id": "cc044644abd9",
		"ts": "2026-08-18T04:31:44.063Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 245247.83,
		"hash": "cc044644abd94eb2d3526842fff72981fc500d730615db56271f44fdeb1f6340"
	},
	{
		"id": "75bc58409b3a",
		"ts": "2026-08-18T04:31:44.275Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 388169.06,
		"hash": "75bc58409b3a034beee70f8d0d79b8ed233863114c9d768336578dc9c8cfb09e"
	},
	{
		"id": "7e1efffc991b",
		"ts": "2026-08-18T04:31:44.487Z",
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
		"liquidityUsd": 34122.49,
		"hash": "7e1efffc991bc24daad6583c41cf754d8625d3f4b6a2c85ab6f575e4dd53d499"
	},
	{
		"id": "522965de4c86",
		"ts": "2026-08-18T04:31:44.699Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3728060.39,
		"hash": "522965de4c869664dacfc8339b6eaf74c3fa3e9d2aad2c5d59609b21b3c538e9"
	},
	{
		"id": "2829a4a997dc",
		"ts": "2026-08-18T04:31:44.913Z",
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
		"liquidityUsd": 80465.02,
		"hash": "2829a4a997dc475ed0105844787d1ef72578835912b8c3f9b4d7a308d0b3bbdc"
	},
	{
		"id": "9be2af67d91b",
		"ts": "2026-08-18T04:31:45.126Z",
		"symbol": "wtCOIN",
		"token": "0x5cDa0E1CA4ce2af96315f7F8963C85399c172204",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 56243.91,
		"hash": "9be2af67d91b21d1c730e03d246dc19ae70eeed5a505731b0a29a154b1e250b3"
	},
	{
		"id": "35beb0433373",
		"ts": "2026-08-18T03:40:29.573Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112182512.09,
		"hash": "35beb043337313ef9e7d17f059008d76384510fee6a041641fe20a7ffce3bb50"
	},
	{
		"id": "4273dc7453a2",
		"ts": "2026-08-18T03:40:30.025Z",
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
		"liquidityUsd": 16564582.7,
		"hash": "4273dc7453a238988987bea339a15a279d09eb0b50953f1f022a82f68e5bfe6a"
	},
	{
		"id": "27de4d548318",
		"ts": "2026-08-18T03:40:30.301Z",
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
		"liquidityUsd": 775285.8,
		"hash": "27de4d5483182b4631afe33ef8ee3a14843a81e195a191c1e5397224b5538680"
	},
	{
		"id": "d71021e9cf40",
		"ts": "2026-08-18T03:40:30.560Z",
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
		"liquidityUsd": 26778991.07,
		"hash": "d71021e9cf40652eda3954054ebbb58f86bc22f38021e6165f4d90f71da1e3cb"
	},
	{
		"id": "69dcaa55f8a4",
		"ts": "2026-08-18T03:40:30.813Z",
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
		"liquidityUsd": 4210454,
		"hash": "69dcaa55f8a47d8a25426392ba284049d47d7837eaf7901bd1246c95236d6d12"
	},
	{
		"id": "5fee0b84b358",
		"ts": "2026-08-18T03:40:31.068Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 876673.72,
		"hash": "5fee0b84b3585a927e69a4ecb49f2874ac317882440e4e872b58e714bbddda12"
	},
	{
		"id": "752d04d50393",
		"ts": "2026-08-18T03:40:31.345Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3768069.02,
		"hash": "752d04d50393bd465fbf461450df59b3bc82723d1cf6abf9596c86e7639fe87c"
	},
	{
		"id": "9cb8b1777a70",
		"ts": "2026-08-18T03:40:31.669Z",
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
		"liquidityUsd": 1514698.09,
		"hash": "9cb8b1777a707d3bb542459025ba4b54df722c773f2718666921c825e96df663"
	},
	{
		"id": "b95011677a9b",
		"ts": "2026-08-18T03:40:31.943Z",
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
		"liquidityUsd": 494872.88,
		"hash": "b95011677a9bb99ad0f84d56920beb69440619038d30f356c32b0da6d16c54ff"
	},
	{
		"id": "1140072f7b83",
		"ts": "2026-08-18T03:40:32.204Z",
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
		"liquidityUsd": 9729819.8,
		"hash": "1140072f7b8340b45fcd7e035960405632b54e28872f7ffb6a2f9ec16fd3ca7f"
	},
	{
		"id": "2c335521ee04",
		"ts": "2026-08-18T03:40:32.441Z",
		"symbol": "VVVeity",
		"token": "0x85635006d808030e97F3174C8Ea1b4Aa1F1FebA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 91176.64,
		"hash": "2c335521ee047e60755f3eae01067e527837e2ba8f584feb2d81f5f287137cab"
	},
	{
		"id": "ee84d0b67950",
		"ts": "2026-08-18T03:40:32.676Z",
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
		"liquidityUsd": 519855.9,
		"hash": "ee84d0b679507d01bf7d05acc03e216135f73e032dceff6a1438a9b9fd412ce0"
	},
	{
		"id": "042cd3e79d8f",
		"ts": "2026-08-18T03:40:32.913Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 72871.57,
		"hash": "042cd3e79d8f8031caf22cd6acd292ef11931a9c7714ed6d830e7e9be94a0d1f"
	},
	{
		"id": "2bbf05df8f8e",
		"ts": "2026-08-18T03:40:33.148Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 384818.38,
		"hash": "2bbf05df8f8ea4ccc972bd53c0f39f2546e22e169edc54529eba998635369f68"
	},
	{
		"id": "9d6c35db2d60",
		"ts": "2026-08-18T03:40:33.385Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247352.6,
		"hash": "9d6c35db2d601e0eaf069450e32943b44499499af4553c321291c79de4c44b33"
	},
	{
		"id": "367ebe22a9f8",
		"ts": "2026-08-18T03:40:33.620Z",
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
		"liquidityUsd": 34115.05,
		"hash": "367ebe22a9f8ba61a5f5d1d2d5362133adc9d6c8c1751a45c8d8c02b12d7eacc"
	},
	{
		"id": "49fddac6ddf2",
		"ts": "2026-08-18T03:40:33.859Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3768069.02,
		"hash": "49fddac6ddf2e5006c991c7479e0d4dc8301765c8f17e6d8b8b5e2640341fa6b"
	},
	{
		"id": "b638565f252d",
		"ts": "2026-08-18T03:40:34.100Z",
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
		"liquidityUsd": 75049.11,
		"hash": "b638565f252d9538f76ab3ac6476752790f6bdfb16f08dcf2e2b9adf25658733"
	},
	{
		"id": "26e6885cce46",
		"ts": "2026-08-18T03:40:34.338Z",
		"symbol": "wtCOIN",
		"token": "0x5cDa0E1CA4ce2af96315f7F8963C85399c172204",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 52875.03,
		"hash": "26e6885cce46d2522b2f431f46656f9725c10872c80f31705b050d163801ae69"
	},
	{
		"id": "9dae78fb0480",
		"ts": "2026-08-18T02:18:22.232Z",
		"symbol": "WETH",
		"token": "0x4200000000000000000000000000000000000006",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"elevated_holder_concentration"
		],
		"liquidityUsd": 112675708.41,
		"hash": "9dae78fb048053c869563d1e72a148f2fde60724a3b0906f338e390c39c29883"
	},
	{
		"id": "f6151e40933e",
		"ts": "2026-08-18T02:18:22.725Z",
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
		"liquidityUsd": 13716523.26,
		"hash": "f6151e40933efbcbce7b5ea9ceaa01ab233e3c95a30ef2b40e139dddfe957f06"
	},
	{
		"id": "97009c1db501",
		"ts": "2026-08-18T02:18:23.102Z",
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
		"liquidityUsd": 786194.78,
		"hash": "97009c1db50133e3c0890d13ceaecacd73de43b4ff421fc5ed1ed215e078fbdd"
	},
	{
		"id": "a6a81679ef7a",
		"ts": "2026-08-18T02:18:23.448Z",
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
		"liquidityUsd": 26865380.47,
		"hash": "a6a81679ef7aa78e091d6fc8bb5765c0d6d75a889300bb2f424a04a34ed063e9"
	},
	{
		"id": "aa2d612bb12e",
		"ts": "2026-08-18T02:18:23.804Z",
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
		"liquidityUsd": 4239961.09,
		"hash": "aa2d612bb12e4338598b69fe7a8656f74cda8453ec6310ab2190eed85117a07d"
	},
	{
		"id": "3f01d6b286b4",
		"ts": "2026-08-18T02:18:24.026Z",
		"symbol": "BRETT",
		"token": "0x532f27101965dd16442E59d40670FaF5eBB142E4",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"modifiable_tax"
		],
		"liquidityUsd": 886926.7,
		"hash": "3f01d6b286b4fc059c57fca947d5ae29278292b9e48da914bd854e119c6bf2c0"
	},
	{
		"id": "701d634b916a",
		"ts": "2026-08-18T02:18:24.230Z",
		"symbol": "USDC",
		"token": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
		"score": 96,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.92,
		"flags": [
			"owner_not_renounced"
		],
		"liquidityUsd": 3801551.51,
		"hash": "701d634b916a8af38ea594007142af675efb5e420e6739fa622cdebd969f1cde"
	},
	{
		"id": "ec0e436bb06d",
		"ts": "2026-08-18T02:18:24.612Z",
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
		"liquidityUsd": 1521751.71,
		"hash": "ec0e436bb06dc9b0ebf314e52c680f91fc94c88b0ff0c0eeaca886f847d458ab"
	},
	{
		"id": "4980368e00c4",
		"ts": "2026-08-18T02:18:25.007Z",
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
		"liquidityUsd": 452182.89,
		"hash": "4980368e00c40d7ae02956ca5ee76f65627c2077eb01317c47752c5ae42aae16"
	},
	{
		"id": "97dbfe2255aa",
		"ts": "2026-08-18T02:18:25.231Z",
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
		"liquidityUsd": 9772795.64,
		"hash": "97dbfe2255aad39a193cccaab63b507043203b08ab3997bc0eb9e47feb043ad3"
	},
	{
		"id": "c27232548759",
		"ts": "2026-08-18T02:18:25.537Z",
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
		"liquidityUsd": 90112.49,
		"hash": "c272325487597c604a121b5043190ca0d19c92e7c8b0e7b2bf371c441fcfdb3a"
	},
	{
		"id": "e7848ab4d20f",
		"ts": "2026-08-18T02:18:25.735Z",
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
		"liquidityUsd": 540374.26,
		"hash": "e7848ab4d20fc072fb8dcd78ddd352e32ae83652f49936825db03f0bb0be4623"
	},
	{
		"id": "c31b64558165",
		"ts": "2026-08-18T02:18:26.095Z",
		"symbol": "LFI",
		"token": "0x3722264aB15a1dfCe5a5af89e6547F7949A8ABA3",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 385281.1,
		"hash": "c31b64558165a9e654a8ccd7c50df69784dce9a6ee9614e43a9fa38301614cc7"
	},
	{
		"id": "7a481c852d1b",
		"ts": "2026-08-18T02:18:28.740Z",
		"symbol": "BSTONK",
		"token": "0x0F61Edbfe6Cd86024C0f210c0695B08df55fdfc9",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 56193.22,
		"hash": "7a481c852d1b83cfcc024f6387166243c3f849fd218a9fda18fcdf66a006e792"
	},
	{
		"id": "7e59df6e313d",
		"ts": "2026-08-18T02:18:28.967Z",
		"symbol": "FLOWER",
		"token": "0x3E12b9d6A4D12cd9b4a6d613872d0Eb32f68b380",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 247372.94,
		"hash": "7e59df6e313de53ddddeeaf26e47f13e328f6325094d8aa23b600f1db25e2ead"
	},
	{
		"id": "631ad939c51d",
		"ts": "2026-08-18T02:18:29.182Z",
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
		"liquidityUsd": 36693.48,
		"hash": "631ad939c51d9730f8f74b6b7f862ac1fd1ef2a3946d980c9adf316a6889c383"
	},
	{
		"id": "81613ea1fa76",
		"ts": "2026-08-18T02:18:29.390Z",
		"symbol": "VELVET",
		"token": "0xbF927b841994731C573BDF09ceB0c6B0Aa887cDd",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 3801551.51,
		"hash": "81613ea1fa76821f9e8a0cf38fe790c297914086d12a01e20fbcc0833279011e"
	},
	{
		"id": "e52726766c8e",
		"ts": "2026-08-18T02:18:29.608Z",
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
		"liquidityUsd": 74459.4,
		"hash": "e52726766c8e4ef0314a78e5080fa7f6323e3aa2dd8b82c1278fab37210974dd"
	},
	{
		"id": "2ce0498d494b",
		"ts": "2026-08-18T02:18:29.820Z",
		"symbol": "BNKR",
		"token": "0x22aF33FE49fD1Fa80c7149773dDe5890D3c76F3b",
		"score": 100,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 1,
		"flags": [
			"security_check_unavailable"
		],
		"liquidityUsd": 1499268.09,
		"hash": "2ce0498d494b088d32ce9f0bbd117717f9986facc9ff277c55d6275a7e5d3e4d"
	},
	{
		"id": "6fcab719394c",
		"ts": "2026-08-18T02:18:30.038Z",
		"symbol": "wtCOIN",
		"token": "0x5cDa0E1CA4ce2af96315f7F8963C85399c172204",
		"score": 90,
		"rating": "low",
		"verdict": "SAFE",
		"confidence": 0.8,
		"flags": [
			"volume_liquidity_anomaly",
			"security_check_unavailable"
		],
		"liquidityUsd": 81043.61,
		"hash": "6fcab719394c648695751639b4cc3adaa955ee6586be82448a1ad90ea6c98fa4"
	},
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
	}
]
