function calorieObject(arr) {
  let productsList = {};
  for (let i = 0; i < arr.length; i += 2) {
    productsList[arr[i]] = Number(arr[i + 1]);
  }

  console.log(productsList);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
