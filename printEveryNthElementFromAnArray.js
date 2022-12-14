function printEveryNthElementFromAnArray(arr, number) {
  let resultArray = [];

  for (let i = 0; i < arr.length; i += number) {
    resultArray.push(arr[i]);
  }
  return resultArray;
  console.log(resultArray);
}

printEveryNthElementFromAnArray(
  ['5', '20', '31', '4', '20'],

  2
);
printEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset'], 2);
printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6);
