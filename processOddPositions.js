function processOddPositions(arr) {
  let resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) resultArray.push(arr[i]);
  }
  let final = resultArray
    .map((el) => el * 2)
    .reverse()
    .join(' ');
  console.log(final);
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);
