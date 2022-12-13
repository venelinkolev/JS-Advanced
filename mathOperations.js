function mathOperations(numberOne, numberTwo, operator) {
  //'+', '-', '*', '/', '%', '**'

  switch (operator) {
    case '+':
      console.log(numberOne + numberTwo);
      break;
    case '-':
      console.log(numberOne - numberTwo);
      break;
    case '*':
      console.log(numberOne * numberTwo);
      break;
    case '/':
      console.log(numberOne / numberTwo);
      break;
    case '%':
      console.log(numberOne % numberTwo);
      break;
    case '**':
      console.log(numberOne ** numberTwo);
      break;
  }
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');
