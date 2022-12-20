function heroicInventory(arr) {
  let resultHeroArray = [];
  let lenght = arr.length;

  for (let i = 0; i < lenght; i++) {
    let currentHero = arr.shift();
    let [name, level, items] = currentHero.split(' / ');
    items = items ? items.split(', ') : [];
    level = Number(level);

    resultHeroArray.push({ name, level, items });

    //console.log(items);
  }

  let resultJSON = JSON.stringify(resultHeroArray);

  console.log(resultJSON);
}

heroicInventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);
heroicInventory(['Jake / 1000 / ']);
