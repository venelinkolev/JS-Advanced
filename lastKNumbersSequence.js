function lastKNumbersSequence(numberOne, numberTwo) {
  let resultArray = [1];

  for (let i = 1; i < numberOne; i++) {
    let sum = 0;
    let counter = 0;
    for (let j = resultArray.length - 1; j >= 0; j--) {
      counter++;
      sum += resultArray[j];
      if (counter === numberTwo || j === 0) {
        resultArray.push(sum);
        break;
      }
    }
  }

  return resultArray;
  console.log(resultArray);
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
