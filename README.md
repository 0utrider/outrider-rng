# Outrider's RNG

<div align="center">

[![Part of Outrider's Pathfinder Tools](https://img.shields.io/badge/Part%20of-Outrider%27s%20Pathfinder%20Tools-7000d6?style=for-the-badge)](https://github.com/0utrider/pathfinder)
[![Available on Foundry Package Browser](https://img.shields.io/badge/Foundry-Package%20Page-7000d6?style=for-the-badge)](https://foundryvtt.com/packages/outrider-rng)

</div>

This is a Foundry VTT module that replaces the default Mersenne Twister RNG with a WebCrypto cryptographically secure RNG.

Foundry Package: https://foundryvtt.com/packages/outrider-rng

## Why?

Foundry uses MT19937, a deterministic PRNG that can produce visible dice roll streaks or clusters.

Outrider RNG provides high quality randomness with no external dependencies.

## Features

- Cryptographically secure randomness
- Zero configuration, dependencies, nor API keys
- Works on all modern browsers
- Foundry VTT v14+ (older installs on v10-v13 can stay on the v1.0.x releases)

## Installation

Easy Method: search for "Outrider's RNG" in Foundry VTT

Manual Method:
1. Download or clone this module.
2. Zip the folder so the root contains `module.json`.
3. In Foundry:  
   **Add-on Modules → Install Module → Choose File**
4. Enable the module in your world.

## How it works

This module overrides:

```js
CONFIG.Dice.randomUniform
```

with a version backed by `crypto.getRandomValues` instead of Foundry's default Mersenne Twister.

## Outrider's Mods

The macro pack joins the shared, brand-violet **Outrider's Mods** compendium folder alongside
every other installed Outrider module, once the active GM's client syncs on install or update.
