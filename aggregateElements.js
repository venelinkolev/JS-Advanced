function aggregateElements(arr) {
  let sumOne = 0;
  let sumTwo = 0;
  let sumThree = '';

  for (let i = 0; i < arr.length; i++) {
    sumOne += Number(arr[i]);
    sumTwo += 1 / Number(arr[i]);
    sumThree += arr[i];
  }

  console.log(`${sumOne}\n${sumTwo}\n${sumThree}`);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
