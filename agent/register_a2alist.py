import json, os, urllib.request, urllib.error

UA = "curl/8.7.1"
KEY = json.load(open(os.path.expanduser("~/a2a_key.json")))["key"]

req_op = urllib.request.Request("https://a2alist.ai/api/openapi.json", headers={"User-Agent": UA})
op = json.load(urllib.request.urlopen(req_op))
schema = op.get("components", {}).get("schemas", {}).get("AgentCreate", {})
cat_enum = (schema.get("properties", {}).get("category", {}) or {}).get("enum")
print("category enum:", cat_enum)

prefs = ["Data / Analytics", "API Service", "data", "analytics", "api", "infrastructure"]
category = next((c for c in prefs if cat_enum and c in cat_enum), (cat_enum[0] if cat_enum else "Data / Analytics"))
print("using category:", category)

body = {
    "name": "Base Capital",
    "description": "Base Capital - x402 onchain risk-intelligence API for AI trading agents on Base. Pay-per-call 0-100 safety score for any Base token: honeypot, rug, ownership & liquidity flags via GoPlus + on-chain reads. Verdicts staked on-chain for accountability. GET /v1/risk/:token & /v1/signal/trending at $0.01; free /v1/preview, /v1/stats, /v1/feed. Built for agent-to-agent consumption.",
    "category": category,
    "protocol": "x402",
    "url": "https://base-capital.vercel.app",
    "pricing": "$0.01 per request via x402; free preview/stats/feed tier",
    "github": "https://github.com/Artem1981777/Base-Capital",
    "submitted_by": "artemgromov629@gmail.com",
    "chain": "base",
    "token": "USDC",
    "provider": "Base Capital",
    "version": "1.0.0",
}

headers = {"content-type": "application/json", "authorization": "Bearer " + KEY, "User-Agent": UA}
req = urllib.request.Request("https://a2alist.ai/api/agents", data=json.dumps(body).encode(), headers=headers, method="POST")
try:
    resp = urllib.request.urlopen(req)
    print("HTTP", resp.status)
    print(resp.read().decode()[:1500])
except urllib.error.HTTPError as e:
    print("HTTP", e.code)
    print(e.read().decode()[:1500])
