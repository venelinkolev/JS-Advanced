function biggerHalf(arr) {
  let resultArray = arr.sort((a, b) => a - b);

  let halfLength = Math.floor(arr.length / 2);

  let biggerHalf = resultArray.splice(halfLength);

  return biggerHalf;
  console.log(biggerHalf);
  console.log(resultArray);
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
