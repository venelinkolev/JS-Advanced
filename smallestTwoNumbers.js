function smallestTwoNumbers(arr) {
  let resultArray = arr.sort((a, b) => a - b);

  console.log(resultArray[0] + ' ' + resultArray[1]);
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
