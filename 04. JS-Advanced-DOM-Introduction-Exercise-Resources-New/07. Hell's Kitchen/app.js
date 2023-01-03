function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);

  //   ["PizzaHut - Peter
  // 500, George 300, Mark
  // 800",
  // "TheLake - Bob 1300,
  // Joe 780, Jane 660"]

  function onClick() {
    let input = JSON.parse(document.getElementById('inputs').children[1].value);
    console.log(input);
    console.log(typeof input);
    while (input[0] !== undefined) {
      let currentRestaurant = input.shift();

      console.log(currentRestaurant);
    }
  }
}
