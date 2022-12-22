function storeCatalogue(arr) {
  let result = {};
  arr.forEach((element) => {
    let [product, price] = element.split(' : ');
    let currentUpperCaseChar = product[0];
    price = Number(price);

    if (!result[currentUpperCaseChar]) {
      result[currentUpperCaseChar] = {
        [product]: price,
      };
    } else {
      result[currentUpperCaseChar][product] = price;
    }
    //console.log(currentUpperCaseChar);
  });
  let resultArray = Object.entries(result);
  resultArray.sort((a, b) => a[0].localeCompare(b[0]));

  for (let i of resultArray) {
    console.log(i[0]);
    let currentObjectArray = Object.entries(i[1]);
    currentObjectArray.sort((a, b) => a[0].localeCompare(b[0]));

    for (let k of currentObjectArray) {
      console.log(`  ${k[0]}: ${k[1]}`);
    }
    //console.log(currentObjectArray);
  }
  //console.log(resultArray);
}

storeCatalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);
storeCatalogue([
  'Banana : 2',
  "Rubic's Cube : 5",
  'Raspberry P : 4999',
  'Rolex : 100000',
  'Rollon : 10',
  'Rali Car : 2000000',
  'Pesho : 0.000001',
  'Barrel : 10',
]);
