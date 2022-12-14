function extractIncreasingSubsetFromArray(arr) {
  let temp = Number.MIN_SAFE_INTEGER;
  let result = arr.reduce((acc, curr) => {
    if (curr >= temp) {
      temp = curr;
      acc.push(temp);
    }
    return acc;
  }, []);

  return result;
  console.log(result);
}

extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsetFromArray([1, 2, 3, 4]);
extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]);
