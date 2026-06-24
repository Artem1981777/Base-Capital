// Human-facing landing page + interactive demo.
// Machine clients (agents/crawlers) still get JSON via Accept negotiation on "/"
// or the explicit /manifest route. Demo calls the free, rate-limited
// /v1/preview/:token route; the paid /v1/risk/:token route is untouched.

export function renderLanding(opts: {
	network: string
	price: string
	appId: string
	repoUrl: string
}): string {
	return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="base:app_id" content="${opts.appId}" />
<meta name="description" content="x402 onchain risk-intelligence API for AI trading agents on Base. Pay-per-call 0-100 risk score for any Base token." />
<meta property="og:title" content="Base Capital — x402 risk scores for Base" />
<meta property="og:description" content="Instant onchain risk scores for Base tokens. Built for AI trading agents. Pay-per-call in USDC over x402." />
<title>Base Capital — x402 onchain risk API</title>
<style>
*{box-sizing:border-box}
html,body{margin:0}
body{font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;background:#07080a;color:#e8eaed;-webkit-font-smoothing:antialiased}
a{color:#4f8cff;text-decoration:none}
a:hover{text-decoration:underline}
.wrap{max-width:860px;margin:0 auto;padding:0 20px}
.hero{position:relative;padding:64px 20px 40px;text-align:center;background:radial-gradient(1200px 400px at 50% -120px,rgba(0,82,255,.28),transparent 70%)}
.badge{display:inline-block;font-size:.78rem;font-weight:600;letter-spacing:.04em;color:#9ec0ff;background:rgba(0,82,255,.14);border:1px solid rgba(79,140,255,.35);padding:5px 12px;border-radius:999px;margin-bottom:18px}
h1{font-size:2.6rem;line-height:1.1;margin:0 0 12px;font-weight:800;letter-spacing:-.02em}
.tag{font-size:1.15rem;color:#4f8cff;font-weight:600;margin-bottom:14px}
.sub{max-width:560px;margin:0 auto;color:#aeb4bb}
.card{background:#101216;border:1px solid #20242b;border-radius:16px;padding:22px}
.demo{margin-top:36px}
.demo h2{font-size:1.1rem;margin:0 0 4px}
.demo .muted{color:#8a9099;font-size:.92rem;margin:0 0 16px}
.inrow{display:flex;gap:10px;flex-wrap:wrap}
#addr{flex:1;min-width:240px;background:#0a0c0f;border:1px solid #2a2f37;border-radius:10px;color:#e8eaed;padding:12px 14px;font:14px ui-monospace,Menlo,Consolas,monospace}
#addr:focus{outline:none;border-color:#4f8cff}
#go{background:#0052ff;border:0;color:#fff;font-weight:700;padding:12px 22px;border-radius:10px;cursor:pointer;font-size:.95rem}
#go:hover{background:#1f6bff}
.chips{margin-top:12px;display:flex;gap:8px;flex-wrap:wrap}
.chip{font-size:.82rem;color:#c4cad1;background:#15181d;border:1px solid #262b33;border-radius:999px;padding:6px 12px;cursor:pointer}
.chip:hover{border-color:#4f8cff;color:#fff}
#out{margin-top:20px}
.hint{color:#8a9099;font-size:.92rem}
.hint.err{color:#ff6b6b}
.result{display:flex;gap:20px;flex-wrap:wrap;align-items:center}
.score{flex:0 0 auto;width:118px;height:118px;border:3px solid #16c784;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center}
.score .num{font-size:2.2rem;font-weight:800;line-height:1}
.score .rate{font-size:.72rem;font-weight:700;letter-spacing:.06em;margin-top:4px}
.rows{flex:1;min-width:240px}
.row{display:flex;justify-content:space-between;gap:12px;padding:7px 0;border-bottom:1px solid #1b1f25;font-size:.92rem}
.row:last-child{border-bottom:0}
.row span{color:#8a9099}
.row b{color:#e8eaed;font-weight:600;text-align:right;word-break:break-word}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:20px}
.grid .card h3{margin:0 0 8px;font-size:1rem}
.grid .card p{margin:0;color:#aeb4bb;font-size:.92rem}
pre{background:#0a0c0f;border:1px solid #20242b;border-radius:12px;padding:16px;overflow:auto;font:13px/1.5 ui-monospace,Menlo,Consolas,monospace;color:#cdd3da}
.price{display:flex;align-items:baseline;gap:8px;margin-top:6px}
.price .big{font-size:1.6rem;font-weight:800;color:#fff}
.foot{margin:48px 0 40px;text-align:center;color:#6b7177;font-size:.88rem}
.foot a{margin:0 8px}
@media(max-width:560px){h1{font-size:2rem}.grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="hero">
<div class="wrap">
<div class="badge">Powered by x402 · ${opts.network}</div>
<h1>Base Capital</h1>
<div class="tag">x402 onchain risk intelligence for AI trading agents on Base</div>
<p class="sub">A pay-per-call API that returns a 0–100 safety score for any Base token — liquidity, LP depth, ownership, pair age and holder-concentration checks. Built for autonomous agents, usable by anyone.</p>
</div>
</div>

<div class="wrap">

<div class="card demo">
<h2>Try it live</h2>
<p class="muted">Free preview — paste a Base token address or pick one below.</p>
<div class="inrow">
<input id="addr" placeholder="0x… Base token address" autocomplete="off" spellcheck="false" />
<button id="go">Check risk</button>
</div>
<div class="chips">
<span class="chip" data-addr="0x4200000000000000000000000000000000000006">WETH</span>
<span class="chip" data-addr="0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf">cbBTC</span>
<span class="chip" data-addr="0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed">DEGEN</span>
<span class="chip" data-addr="0x940181a94A35A4569E4529A3CDfB74e38FD98631">AERO</span>
<span class="chip" data-addr="0x532f27101965dd16442E59d40670FaF5eBB142E4">BRETT</span>
</div>
<div id="out"><div class="hint">Results appear here.</div></div>
</div>

<div class="grid">
<div class="card">
<h3>Endpoint</h3>
<p><b style="color:#fff">GET /v1/risk/:token</b><br/>Returns score, rating, flags and raw market + onchain data as JSON.</p>
<div class="price"><span class="big">$${opts.price}</span><span style="color:#8a9099">USDC per call · ${opts.network}</span></div>
</div>
<div class="card">
<h3>How it works</h3>
<p>Agent hits the endpoint, x402 settles a micro-payment in USDC (gasless EIP-3009), and the score comes back in one round-trip. No accounts, no API keys.</p>
</div>
</div>

<div class="card" style="margin-top:16px">
<h3 style="margin:0 0 10px;font-size:1rem">Call it from an agent</h3>
<pre>import { wrapFetchWithPayment } from "@x402/fetch"

const pay = wrapFetchWithPayment(fetch, signer)
const res = await pay(
  "https://base-capital.vercel.app/v1/risk/0x4200000000000000000000000000000000000006"
)
const risk = await res.json()
// { score: 100, rating: "low", flags: [], data: { … } }</pre>
</div>

<div class="card" id="agentcard" style="margin-top:16px">
<h3 style="margin:0 0 4px;font-size:1rem">🤖 Autonomous Risk Agent</h3>
<p class="muted" style="margin:0 0 14px">Scores its watchlist every hour, publishes a SHA256-signed verdict log, and exposes a paid agent-to-agent feed at <b style="color:#cdd3da">GET /v1/signal/trending</b>.</p>
<div id="agentstats" style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"></div>
<div id="feed"><div class="hint">Loading agent feed…</div></div>
</div>

<div class="card" id="onchaincard" style="margin-top:16px">
<h3 style="margin:0 0 4px;font-size:1rem">🔗 On-chain reputation · RiskStake</h3>
<p class="muted" style="margin:0 0 14px">The agent stakes USDC behind every verdict on Base mainnet — wrong calls are slashed to the treasury, correct calls are returned in full. Trustless and verifiable: <a id="oclink" href="https://basescan.org" target="_blank" rel="noopener">view the contract on BaseScan</a>.</p>
<div id="ocstats" style="display:flex;gap:10px;flex-wrap:wrap"><div class="hint">Loading on-chain stats…</div></div>
</div>

<div class="foot">
<a href="${opts.repoUrl}">GitHub</a> ·
<a href="/manifest">Machine-readable manifest</a> ·
<a href="https://x402.org">x402</a> ·
<a href="https://dashboard.base.org">Base Dashboard</a>
<div style="margin-top:10px;color:#565b61">Heuristic risk scoring — not financial advice. Always DYOR.</div>
</div>

</div>

<script>
(function(){
  var input=document.getElementById('addr');
  var btn=document.getElementById('go');
  var out=document.getElementById('out');
  function color(r){return r==='low'?'#16c784':r==='medium'?'#f5a623':r==='high'?'#ff7a45':'#ff4d4f';}
  function fmt(n){try{return Number(n).toLocaleString('en-US',{maximumFractionDigits:0});}catch(e){return String(n);}}
  function row(l,v){return '<div class="row"><span>'+l+'</span><b>'+v+'</b></div>';}
  function check(){
    var a=(input.value||'').trim();
    if(!a){out.innerHTML='<div class="hint err">Enter a Base token address.</div>';return;}
    out.innerHTML='<div class="hint">Scoring '+a.slice(0,12)+'… </div>';
    fetch('/v1/preview/'+encodeURIComponent(a)).then(function(r){return r.json();}).then(function(d){
      if(d.error){out.innerHTML='<div class="hint err">'+d.error+'</div>';return;}
      var c=color(d.rating);var dt=d.data||{};
      var flags=(d.flags&&d.flags.length)?d.flags.join(', '):'none';
      var html='<div class="result">'
        +'<div class="score" style="border-color:'+c+'"><div class="num" style="color:'+c+'">'+d.score+'</div><div class="rate" style="color:'+c+'">'+String(d.rating).toUpperCase()+' RISK</div></div>'
        +'<div class="rows">'
        +row('Liquidity', dt.liquidityUsd!=null?'$'+fmt(dt.liquidityUsd):'—')
        +row('Price', dt.priceUsd?'$'+dt.priceUsd:'—')
        +row('24h volume', dt.volume24h!=null?'$'+fmt(dt.volume24h):'—')
        +row('Pair age', dt.ageHours!=null?Math.round(dt.ageHours/24)+' days':'—')
        +row('Owner renounced', dt.ownerRenounced==null?'unknown':(dt.ownerRenounced?'yes':'no'))
        +row('DEX', dt.dex||'—')
        +row('Flags', flags)
        +'</div></div>';
      out.innerHTML=html;
    }).catch(function(){out.innerHTML='<div class="hint err">Request failed. Try again.</div>';});
  }
  btn.addEventListener('click',check);
  input.addEventListener('keydown',function(e){if(e.key==='Enter')check();});
  var chips=document.querySelectorAll('[data-addr]');
  for(var i=0;i<chips.length;i++){chips[i].addEventListener('click',function(){input.value=this.getAttribute('data-addr');check();});}
})();
</script>
<script>
(function(){
  var statsEl=document.getElementById('agentstats');
  var feedEl=document.getElementById('feed');
  if(!statsEl||!feedEl)return;
  function vcolor(v){return v==='SAFE'?'#16c784':v==='RISKY'?'#f5a623':'#ff4d4f';}
  function stat(label,val){return '<div style="flex:1;min-width:120px;background:#0a0c0f;border:1px solid #20242b;border-radius:12px;padding:12px 14px"><div style="font-size:1.5rem;font-weight:800;color:#fff">'+val+'</div><div style="font-size:.78rem;color:#8a9099;margin-top:2px">'+label+'</div></div>';}
  fetch('/v1/feed?limit=20').then(function(r){return r.json();}).then(function(d){
    var s=d.stats||{};
    statsEl.innerHTML=stat('Tokens scored',s.tokensScored||0)+stat('Verdicts issued',s.verdictsIssued||0)+stat('Agent ticks',s.ticks||0)+stat('Likely rug',s.likelyRug||0);
    var vs=d.verdicts||[];
    if(!vs.length){feedEl.innerHTML='<div class="hint">Agent initializing — first verdicts publish on the next hourly run. Trigger the "Risk Agent" workflow manually to populate now.</div>';return;}
    var html='';
    for(var i=0;i<vs.length;i++){var v=vs[i];var c=vcolor(v.verdict);
      html+='<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #1b1f25">'
        +'<span style="flex:0 0 auto;font-size:.7rem;font-weight:700;color:'+c+';border:1px solid '+c+';border-radius:999px;padding:3px 9px">'+v.verdict+'</span>'
        +'<b style="flex:0 0 auto;color:#e8eaed">'+v.symbol+'</b>'
        +'<span style="flex:1;color:#8a9099;font-size:.86rem">score '+v.score+' · conf '+v.confidence+'</span>'
        +'<code style="flex:0 0 auto;color:#565b61;font-size:.7rem" title="SHA256 '+v.hash+'">#'+v.id+'</code>'
        +'</div>';
    }
    feedEl.innerHTML=html;
  }).catch(function(){feedEl.innerHTML='<div class="hint err">Feed unavailable.</div>';});
})();
</script>
<script>
(function(){
  var el=document.getElementById('ocstats');
  var link=document.getElementById('oclink');
  if(!el)return;
  function stat(label,val){return '<div style="flex:1;min-width:110px;background:#0a0c0f;border:1px solid #20242b;border-radius:12px;padding:12px 14px"><div style="font-size:1.4rem;font-weight:800;color:#fff">'+val+'</div><div style="font-size:.78rem;color:#8a9099;margin-top:2px">'+label+'</div></div>';}
  fetch('/v1/onchain/stats').then(function(r){return r.json();}).then(function(d){
    if(!d||!d.available){el.innerHTML='<div class="hint">On-chain staking initializing — first verdicts settle on the next stake run.</div>';return;}
    if(link&&d.explorer)link.href=d.explorer;
    var s=d.stats||{};
    var acc=((s.accuracyBps||0)/100).toFixed(0)+'%';
    el.innerHTML=stat('Verdicts staked',s.totalVerdicts||0)+stat('USDC staked','$'+(s.totalStakedUsd||0))+stat('Accuracy',acc)+stat('Slashed','$'+(s.totalSlashedUsd||0));
  }).catch(function(){el.innerHTML='<div class="hint err">On-chain stats unavailable.</div>';});
})();
</script>
</body>
</html>`
}
