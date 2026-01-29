# Outrider's RNG

This is a Foundry VTT module that replaces the default Mersenne Twister RNG with a WebCrypto cryptographically secure RNG.

## Why?

Foundry uses MT19937, a deterministic PRNG that can produce visible dice roll streaks or clusters.

Outrider RNG provides high‑quality randomness with no external dependencies.

## Features

- Cryptographically secure randomness
- Zero configuration, dependencies, nor API keys
- Works on all modern browsers
- Fully compatible with Foundry VTT v10–v13

## Installation

1. Download or clone this module.
2. Zip the folder so the root contains `module.json`.
3. In Foundry:  
   **Add-on Modules → Install Module → Choose File**
4. Enable the module in your world.

## How it works

This module overrides:

```js
CONFIG.Dice.randomUniform