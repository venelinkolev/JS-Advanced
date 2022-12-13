function diagonalSums(arr) {
  let sumOne = 0;
  let sumTwo = 0;

  for (let i = 0; i < arr.length; i++) {
    sumOne += arr[i][i];
    sumTwo += arr[i][arr.length - 1 - i];
  }

  console.log(sumOne, sumTwo);
}

diagonalSums([
  [20, 40],
  [10, 60],
]);
diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
