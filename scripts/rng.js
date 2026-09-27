import { supported, syncModulePacks } from "./lib/outrider-mods.js";

const MODULE_ID = "outrider-rng";

Hooks.once("init", () => {
  console.log("Outrider's RNG | Replace Foundry's RNG with crypto.getRandomValues");

  CONFIG.Dice.randomUniform = () => {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] / 2**32;
  };

  game.settings.register(MODULE_ID, "syncedVersion", { scope: "world", config: false, type: String, default: "" });
});

/** Compendium Packs tab: pack goes directly in "Outrider's Mods". Nothing else in the world is touched. */
async function syncWorldContent() {
  await syncModulePacks(MODULE_ID);
}

// Version-gated: runs on install and on each update, never on plain reloads. Active GM only.
Hooks.once("ready", async () => {
  if (!supported()) return;
  game.modules.get(MODULE_ID).api = { syncWorldContent };
  if (!game.users.activeGM?.isSelf) return;
  const version = game.modules.get(MODULE_ID).version;
  if (game.settings.get(MODULE_ID, "syncedVersion") === version) return;
  try {
    await syncWorldContent();
    await game.settings.set(MODULE_ID, "syncedVersion", version);
  } catch (err) {
    console.warn(`${MODULE_ID} | World content sync failed`, err);
  }
});
