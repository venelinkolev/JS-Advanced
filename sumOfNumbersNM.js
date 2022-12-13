function sumOfNumbersNM(numberOne, numberTwo) {
  let numOne = Number(numberOne);
  let numTwo = Number(numberTwo);
  let sum = 0;

  for (let i = numOne; i <= numTwo; i++) {
    sum += i;
  }

  console.log(sum);
}

sumOfNumbersNM('1', '5');
sumOfNumbersNM('-8', '20');
