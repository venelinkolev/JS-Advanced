function evenPositionElement(arr) {
  let resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) resultArray.push(arr[i]);
  }

  console.log(resultArray.join(' '));
}

evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);
