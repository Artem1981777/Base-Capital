# Changelog

All notable changes to Base Capital are documented here. Format based on [Keep a Changelog](https://keepachangelog.com); this project follows semantic versioning.

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
