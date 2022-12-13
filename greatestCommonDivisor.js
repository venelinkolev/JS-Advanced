function greatestCommonDivisor(numberOne, numberTwo) {
  let divisor = 0;
  for (let i = 1; i <= 9; i++) {
    if (numberOne % i === 0 && numberTwo % i === 0) divisor = i;
  }

  console.log(divisor);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
