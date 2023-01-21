function breakfastRobot() {
  /*
apple - made with 1 carbohydrate and 2 flavour
lemonade - made with 10 carbohydrate and 20 flavour
burger - made with 5 carbohydrate, 7 fat and 3 flavour
eggs - made with 5 protein, 1 fat and 1 flavour
turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour
*/
  // class Recipe {
  //   constructor(nameProduct, protein, carbohydrate, fat, flavours) {
  //     this.nameProduct = nameProduct;
  //     this.protein = protein;
  //     this.carbohydrate = carbohydrate;
  //     this.fat = fat;
  //     this.flavours = flavours;
  //   }
  // }

  // const apple = new Recipe('apple', _, 1, _, 2);
  // const lemonade = new Recipe('lemonade', _, 10, _, 20);
  // const burger = new Recipe('burger', 0, 5, 7, 3);
  // const eggs = new Recipe('eggs', 5, 0, 1, 1);
  // const turkey = new Recipe('turkey', 10, 10, 10, 10);

  // console.log(apple);

  const recipes = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };

  console.log(recipes);
  // recipes.push(apple, lemonade, burger, eggs, turkey);

  //console.log(turkey);
  const stored = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  /*
  restock <microelement> <quantity> - increases the stored quantity of the given microelement
prepare <recipe> <quantity> - uses the available ingredients to prepare the given meal
report - returns information about the stored microelements, in the order described below, including zero elements
*/

  const command = {
    restock: (microelement, quantity) => {
      stored[microelement] += Number(quantity);
      return 'Success';
    },

    prepare: (recipe, quantity) => {
      let currentRecipe = Object.entries(recipes).find(
        (el) => el[0] === recipe
      );
      //let currentRecipeQuantity = Object.entries(currentRecipe[1]);

      // currentRecipeQuantity.forEach((line) => {
      //   line[1] = Number(line[1]) * quantity;
      // });
      for (let key in currentRecipe[1]) {
        let microelement = currentRecipe[1][key];
        microelement *= quantity;
      }

      let currentMicroelementValue = 0;
      let microelementValue = 0;
      let currentMicroelement = '';
      let isEnough = true;
      for (let key in currentRecipe[1]) {
        currentMicroelementValue = stored[key];
        microelementValue = currentRecipe[1][key];

        if (currentMicroelementValue - microelementValue < 0) {
          isEnough = false;
          currentMicroelement = key;
          break;
        }
      }

      if (!isEnough) {
        return `Error: not enough ${currentMicroelement} in stock`;
      } else {
        for (let key in stored) {
          stored[key] -= currentRecipe[1][key];
        }
        return 'Success';
      }
      //return currentRecipe[1];
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
