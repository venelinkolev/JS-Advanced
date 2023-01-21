function breakfastRobot() {
  /*
apple - made with 1 carbohydrate and 2 flavour
lemonade - made with 10 carbohydrate and 20 flavour
burger - made with 5 carbohydrate, 7 fat and 3 flavour
eggs - made with 5 protein, 1 fat and 1 flavour
turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour
*/
  class Recipe {
    constructor(nameProduct, protein, carbohydrate, fat, flavours) {
      this.nameProduct = nameProduct;
      this.protein = protein;
      this.carbohydrate = carbohydrate;
      this.fat = fat;
      this.flavours = flavours;
    }
  }

  const apple = new Recipe('apple', 0, 1, 0, 2);
  const lemonade = new Recipe('lemonade', 0, 10, 0, 20);
  const burger = new Recipe('burger', 0, 5, 7, 3);
  const eggs = new Recipe('eggs', 5, 0, 1, 1);
  const turkey = new Recipe('turkey', 10, 10, 10, 10);

  // const apple = {
  //   carbohydrate: 1,
  //   flavours: 2,
  // };
  // const lemonade = {
  //   carbohydrate: 10,

  //   flavours: 20,
  // };
  // const burger = {
  //   carbohydrate: 5,
  //   fat: 7,
  //   flavours: 3,
  // };
  // const eggs = {
  //   protein: 5,

  //   fat: 1,
  //   flavours: 1,
  // };
  // const turkey = {
  //   protein: 10,
  //   carbohydrate: 10,
  //   fat: 10,
  //   flavours: 10,
  // };

  const recipes = [];
  recipes.push(apple, lemonade, burger, eggs, turkey);

  console.log(recipes);
  //console.log(turkey);
  const stored = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavours: 0,
  };

  /*
  restock <microelement> <quantity> - increases the stored quantity of the given microelement
prepare <recipe> <quantity> - uses the available ingredients to prepare the given meal
report - returns information about the stored microelements, in the order described below, including zero elements
*/

  const command = {
    restock: (microelement, quantity) => {
      stored[microelement] += quantity;
      return 'Success';
    },

    prepare: (recipe, quantity) => {
      let currentRecipe = recipes.find((el) => el.nameProduct === recipe);
      return currentRecipe;
    },

    report: () => {},
  };

  return (manager) => {
    let [currentCommand, element, quantity] = manager.split(' ');
    return command[currentCommand](element, quantity);
  };
  //console.log(apple.carbohydrate);
}

let manager = breakfastRobot();
console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));
