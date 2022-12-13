function cookingByNumbers(
  num,
  operator1,
  operator2,
  operator3,
  operator4,
  operator5
) {
  //     · chop - divide the number by two
  // · dice - square root of a number
  // · spice - add 1 to the number
  // · bake - multiply number by 3
  // · fillet - subtract 20% from the numbe

  let number = Number(num);
  let command = [];
  command.push(operator1, operator2, operator3, operator4, operator5);

  while (command[0] !== undefined) {
    let currentCommand = command.shift();

    switch (currentCommand) {
      case 'chop':
        number /= 2;
        console.log(number);
        break;
      case 'dice':
        number = Math.sqrt(number);
        console.log(number);
        break;
      case 'spice':
        number += 1;
        console.log(number);
        break;
      case 'bake':
        number *= 3;
        console.log(number);
        break;
      case 'fillet':
        number *= 0.8;
        console.log(number);
        break;
    }
  }

  //console.log(command);
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
