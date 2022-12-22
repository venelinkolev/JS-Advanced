function heroes() {
  let heroesCreate = {
    fighter(name) {
      const heroFighter = {
        name,
        health: 100,
        stamina: 100,
        fight: fight,
      };
      function fight() {
        heroFighter.stamina--;
        console.log(`${heroFighter.name} slashes at the foe!`);
      }

      return heroFighter;
    },
    mage(name) {
      const heroMage = {
        name,
        health: 100,
        mana: 100,
        cast: cast,
      };
      function cast(spell) {
        heroMage.mana--;
        console.log(`${heroMage.name} cast ${spell}`);
      }

      return heroMage;
    },
  };

  return heroesCreate;
}

let create = heroes();
const scorcher = create.mage('Scorcher');
scorcher.cast('fireball');
scorcher.cast('thunder');
scorcher.cast('light');
const scorcher2 = create.fighter('Scorcher 2');
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);

const scorcher3 = create.mage('Ven');

console.log('------------');

console.log(scorcher);
console.log(scorcher2);
console.log(scorcher3);
