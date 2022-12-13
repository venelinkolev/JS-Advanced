function negativePositiveNumbers(arr) {
  let resultArray = [];

  for (let i of arr) {
    if (i >= 0) resultArray.push(i);
    else resultArray.unshift(i);
  }

  console.log(resultArray.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);
