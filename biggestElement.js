function biggestElement(arr) {
  let biggestElement = Number.MIN_SAFE_INTEGER;

  for (let i of arr) {
    for (let j of i) {
      if (biggestElement < j) biggestElement = j;
    }
  }
  console.log(biggestElement);
}

biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);
biggestElement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
