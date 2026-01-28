Hooks.once("init", () => {
  console.log("Outrider's RNG | Replace Foundry's RNG with crypto.getRandomValues");

  CONFIG.Dice.randomUniform = () => {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return array[0] / 2**32;
  };
});