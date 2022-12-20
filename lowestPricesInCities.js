function lowestPricesInCities(arr) {
  let resultArray = {};
  arr.forEach((element) => {
    let [nameTown, product, price] = element.split(' | ');
    price = Number(price);

    if (!resultArray[product]) {
      resultArray[product] = { nameTown, price };
    } else {
      if (resultArray[product].price > price) {
        resultArray[product] = { nameTown, price };
      }
    }
  });

  for (let [product, values] of Object.entries(resultArray)) {
    console.log(`${product} -> ${values.price} (${values.nameTown})`);
  }
}

// lowestPricesInCities([
//   'Sample Town | Sample Product | 1000',
//   'Sample Town | Orange | 2',
//   'Sample Town | Peach | 1',
//   'Sofia | Orange | 3',
//   'Sofia | Peach | 2',
//   'New York | Sample Product | 1000.1',
//   'New York | Burger | 10',
// ]);
lowestPricesInCities([
  'Sofia City | Audi | 100000',
  'Sofia City | BMW | 100000',
  'Sofia City | Mitsubishi | 10000',
  'Sofia City | Mercedes | 10000',
  'Sofia City | NoOffenseToCarLovers | 0',
  'Mexico City | Audi | 1000',
  'Mexico City | BMW | 99999',
  'Mexico City | Mitsubishi | 10000',
  'New York City | Mitsubishi | 1000',
  'Washington City | Mercedes | 1000',
]);
