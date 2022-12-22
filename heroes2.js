function solve() {
  let funCast = (state) => ({
    cast(spell) {
      console.log(`${state.name} cast ${spell}`);
      state.mana--;
    },
  });

  let funFight = (state) => ({
    fight() {
      console.log(`${state.name} slashes at the foe!`);
      state.stamina--;
    },
  });

  const fighter = (name) => {
    let state = {
      name,
      health: 100,
      stamina: 100,
    };

    return Object.assign(state, funFight(state));
  };

  const mage = (name) => {
    let state = {
      name,
      health: 100,
      mana: 100,
    };

    return Object.assign(state, funCast(state));
  };

  return { mage, fighter };
}

let create = solve();
const scorcher = create.mage('Scorcher');
scorcher.cast('fireball');
scorcher.cast('thunder');
scorcher.cast('light');
const scorcher2 = create.fighter('Scorcher 2');
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
