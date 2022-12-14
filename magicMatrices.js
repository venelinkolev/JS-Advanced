function magicMatrices(arr) {
  let isMagic = true;
  let temp = 0;

  for (let i of arr[0]) {
    temp += i;
  }
  //console.log(temp);
  for (let i = 0; i < arr.length; i++) {
    let sumRow = 0;
    let sumColumn = 0;
    for (let j = 0; j < arr.length; j++) {
      sumRow += arr[i][j];
      sumColumn += arr[j][i];
    }
    if (temp !== sumRow || temp !== sumColumn) {
      isMagic = false;
      break;
    }
  }

  console.log(isMagic);
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
