# Changelog

All notable changes to Base Capital are documented here. Format based on [Keep a Changelog](https://keepachangelog.com); this project follows semantic versioning.

## v4 (in progress) - 2026-06-30
### Deterministic on-chain arbiter (RiskStake v4)
- Verdict decision inputs (score + hard-rug flag bitmap) committed on-chain; `finalize` and permissionless `resolveChallengeAuto` recompute correctness via a pure `isVerdictCorrect()` mirroring `verdictRule.ts` (MIN_SAFE_SCORE=75, five hard-rug flags).
- Risk-scaled challenge bonds (`requiredBond = max(floor, stake * bondBps / 10000)`, 10% default); honest challenge nets bond + 50% of slashed stake, frivolous forfeits a stake-scaled bond.
- Emergency pause (exits always open) + preserved 48h rescue timelock.
- Backward-compatible: legacy 4-arg commitVerdict, all v3 signatures and historical proofHash preserved; 26/26 Foundry tests (16 legacy + 10 new) green.
- Deployed + Sourcify-verified on Base mainnet at 0xBaa5175987951E6DAb9Ae52CB4fa8b1C64Ca3037; agent 57556 migrated to the 6-arg commitVerdict (commits score + hard-rug bitmap) so resolveChallengeAuto adjudicates disputes deterministically. v3 (0x0eC7de61…440e) retained for historical proofs.
- First live v4 verdicts committed on mainnet with decision inputs (verdictInputs.set=true, scores 84-96, no hard flags); getAgentStats(57556) reads 5 verdicts / $5 staked. Example commit txs: WETH 0xd33f106e…, cbBTC 0xa445223f… — every write tagged Builder Code bc_kob8hqa0.
- Track record (2026-07-06): 20 v4 verdicts, 15 finalized CORRECT, 100% accuracy, 0% slash-rate; $15 stake recycled, $5 at-risk; agent ran reliably 4 days. Example finalize txs 0x1e0cba92, 0x6bab56e8.
- Treasury reconciliation (2026-07-06): totalSlashed $0 / 100% accuracy across 20 verdicts; funds recycling not lost ($15 returned, $5 at-risk in v4, $2.83 liquid, $6 recoverable from retired v3); gas-only steady-state (about $0.10 ETH over 4 days); both crons healthy; loop self-funding, agent kept running for a long-lived on-chain track record.
- UI polish (2026-07-06): shield favicon added (removes favicon 404) and a note clarifying that on-chain staked verdicts are a high-conviction subset of the off-chain scores.


### Backtest rigor
- Replaced single-oracle n=2 backtest with multi-oracle consensus ground truth (honeypot.is + GoPlus + post-hoc liquidity drain).
- Expanded universe 48 -> 133 candidates (94 labelled) via rate-limit-aware GeckoTerminal harvest (429 backoff); no hardcoded token list.
- Added Wilson 95% confidence intervals on precision/recall and Cohen's kappa for inter-oracle agreement.
- Measured @threshold 75 (with simulation): recall 1.00 (CI [0.44,1], n=3), precision 0.077 (CI [0.027,0.20], n=39); precision conservative-by-design, recall on confirmed rugs is the safety metric.
- Dated report archived to proofs/backtest-<date>.json.
- v4.1: stricter GOOD labeling (require live sellability or >=$10k liquidity) + persistent rug registry (proofs/rug-registry.json); measured precision 0.077 -> 0.182, recall 1.0 (CI [0.51,1], n=4), accuracy 0.757.

## [1.0.0] — 2026-06-28

Production-grade upgrade hardening the agent's on-chain reputation against the "zero-trust" critique: deterministic & verifiable resolution, real separation of powers, no unbounded drain, a real stake, and a measured risk engine.

### Added
- **Live honeypot simulation** in the risk engine (`honeypot.is` buy/sell sim) as a hard signal — catches honeypots the static GoPlus checks miss.
- **Deterministic resolution policy** with an on-chain `keccak256` **proof hash** published in `resolveVerdict`, plus a public CI log line. Anyone can recompute and verify.
- **Backtest harness** (`agent/backtest.ts`) validated against the independent honeypot.is oracle, served at `GET /backtest`. Slashing-grade precision/recall = 1.00 / 1.00; live simulation lifts honeypot recall 0.00 → 1.00.
- **Role separation** in `RiskStake`: independent `owner`, `oracle`, and `treasury` addresses.
- **48-hour timelocked rescue** (`queueRescue` / `executeRescue` / `cancelRescue`) with events.
- `getAgentStats` now also returns `totalAtRisk` and `slashRateBps`; new `pendingCount()` / `getPending()` views.
- **Holder-concentration penalty** and holder fields in the security summary.
- Foundry test suite (17 tests) covering commit/resolve/slash, roles, maturity, stake bounds, and the timelock lifecycle.

### Changed
- `resolveVerdict(id, correct)` → `resolveVerdict(id, correct, proofHash)`.
- Resolution is now **`onlyOracle`** (was `onlyOwner`).
- Default stake raised from **$0.02 to $1** (configurable, bounds $1–$1000).
- Verdict struct now records `resolvedAt` and `proofHash`.
- The engine never issues a slashing-grade LIKELY_RUG verdict on a token the live simulation just sold successfully (floored to RISKY) — protects staked capital from wrong slashes.

### Security
- **Removed the unbounded `rescue()` drain** in favour of the 48h timelock above.
- Added a **maturity guard** so verdicts cannot be resolved prematurely.
- `nonReentrant` retained on all state-changing external calls.
