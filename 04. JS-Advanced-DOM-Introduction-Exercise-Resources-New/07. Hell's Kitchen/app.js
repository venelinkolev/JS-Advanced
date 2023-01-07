function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);

  //   ["PizzaHut - Peter
  // 500, George 300, Mark
  // 800",
  // "TheLake - Bob 1300,
  // Joe 780, Jane 660"]

  function onClick() {
    let input = JSON.parse(document.getElementById('inputs').children[1].value);
    let result = [];
    let restaurants = [];
    let bestAverageSalary = 0;
    //console.log(input);
    //console.log(typeof input);
    while (input[0] !== undefined) {
      let bestSalary = 0;
      let restaurantObj = {};
      let [restaurantName, workers] = input.shift().split(' - ');
      let workersArray = workers.split(', ');
      let workersObj = {};
      let averageSalary = 0;

      let currentRestaurant = restaurants.find(
        (element) => element.restaurantName === restaurantName
      );
      debugger;
      if (currentRestaurant) {
        for (let i of workersArray) {
          let [worker, salary] = i.split(' ');
          salary = Number(salary);

          if (salary > Number(currentRestaurant.bestSalary)) {
            currentRestaurant.bestSalary = salary.toFixed(2);
          }
          currentRestaurant.workers[worker] = salary;
        }

        let currentWorkers = Object.entries(currentRestaurant.workers);

        for (let i of currentWorkers) {
          averageSalary += Number(i[1]);
        }

        averageSalary /= currentWorkers.length;
        currentRestaurant.averageSalary = averageSalary.toFixed(2);

        if (Number(currentRestaurant.averageSalary) > bestAverageSalary) {
          bestAverageSalary = Number(currentRestaurant.averageSalary);
          if (result) {
            result.shift();
          }
          result.push(currentRestaurant);
        }

        //restaurants.push(restaurantObj);
      } else {
        restaurantObj = { restaurantName };
        for (let i of workersArray) {
          let [worker, salary] = i.split(' ');
          salary = Number(salary);

          if (salary > bestSalary) {
            bestSalary = salary;
          }

          averageSalary += salary;
          workersObj[worker] = salary;
        }
        averageSalary /= workersArray.length;

        // //debugger;
        // //debugger;
        restaurantObj['workers'] = workersObj;
        restaurantObj['averageSalary'] = averageSalary.toFixed(2);
        restaurantObj['bestSalary'] = bestSalary.toFixed(2);

        if (averageSalary > bestAverageSalary) {
          bestAverageSalary = averageSalary;
          if (result) {
            result.shift();
          }
          result.push(restaurantObj);
        }
        restaurants.push(restaurantObj);
      }
    }

    console.log(result);
    console.log(restaurants);
    let sortWorkers = Object.entries(result[0].workers);
    sortWorkers.sort((a, b) => b[1] - a[1]);

    document.querySelector(
      '#bestRestaurant p'
    ).textContent = `Name: ${result[0].restaurantName} Average Salary: ${result[0].averageSalary} Best Salary: ${result[0].bestSalary}`;

    let buffer = '';

    for (let i of sortWorkers) {
      buffer += `Name: ${i[0]} With Salary: ${i[1]} ` + '';
      //console.log(`${i[0]}: ${i[1]}`);
    }

    document.querySelector('#workers p').textContent = buffer.trim();

    console.log(buffer.trim());
  }
}
