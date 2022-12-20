function townPopulation(arr) {
  let objectTowns = {};

  for (let town of arr) {
    let [townName, population] = town.split(' <-> ');
    population = Number(population);

    if (objectTowns.hasOwnProperty(townName)) {
      objectTowns[townName] += population;
    } else objectTowns[townName] = population;
  }

  for (let city in objectTowns) {
    console.log(`${city} : ${objectTowns[city]}`);
  }
}

townPopulation([
  'Sofia <-> 1200000',

  'Montana <-> 20000',

  'New York <-> 10000000',

  'Washington <-> 2345000',

  'Las Vegas <-> 1000000',
]);
townPopulation([
  'Istanbul <-> 100000',

  'Honk Kong <-> 2100004',

  'Jerusalem <-> 2352344',

  'Mexico City <-> 23401925',

  'Istanbul <-> 1000',
]);
