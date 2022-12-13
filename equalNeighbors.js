function equalNeighbors(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let lengthCounter = 0;
    let lengthArray = arr[0].length;

    while (lengthArray !== 0) {
      if (arr[i][lengthCounter] === arr[i][lengthCounter + 1]) counter++;
      if (arr[i][lengthCounter] === arr[i + 1][lengthCounter]) counter++;

      lengthArray--;
      lengthCounter++;
    }
  }
  for (let i = 0; i < arr[0].length - 1; i++) {
    if (arr[arr.length - 1][i] === arr[arr.length - 1][i + 1]) counter++;
  }

  console.log(counter);
}

// equalNeighbors([
//   ['2', '3', '4', '7', '0'],

//   ['4', '0', '5', '3', '4'],

//   ['2', '3', '5', '4', '2'],

//   ['9', '8', '7', '5', '4'],
// ]);
// equalNeighbors([
//   ['test', 'yes', 'yo', 'ho'],
//   ['well', 'done', 'yo', '6'],
//   ['not', 'done', 'yet', '5'],
// ]);
equalNeighbors([
  [2, 2, 5, 7, 4],
  [4, 0, 5, 3, 4],
  [2, 5, 5, 4, 2],
]);
