function townsToJSON(arr) {
  let resultArray = [];
  let length = 3;
  let finalArray = [];

  for (let i = 0; i < arr.length; i++) {
    let currentDate = arr[i].split(' | ');
    let result = [];
    for (let i of currentDate) {
      let relpaceString = i.replace(/\|/g, '').trim();
      result.push(relpaceString);
    }

    resultArray.push(result);
  }

  for (let i = 1; i < resultArray.length; i++) {
    let townInfo = {};
    for (let j = 0; j < length; j++) {
      townInfo[resultArray[0][j]] = resultArray[i][j];
    }
    townInfo.Latitude = Number(Number(townInfo.Latitude).toFixed(2));
    townInfo.Longitude = Number(Number(townInfo.Longitude).toFixed(2));

    finalArray.push(townInfo);
  }

  console.log(JSON.stringify(finalArray));
}

townsToJSON([
  '| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
]);
townsToJSON([
  '| Town | Latitude | Longitude |',
  '| Veliko Turnovo | 43.0757 | 25.6172 |',
]);
