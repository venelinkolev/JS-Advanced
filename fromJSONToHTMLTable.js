function fromJSONToHTMLTable(string) {
  let objectInfo = JSON.parse(string);
  let resultArray = [];

  function replaceEntity(value) {
    return value
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function makeKeyRow(objectInfo) {
    let currentObjectKeys = Object.keys(objectInfo[0]);
    let result = '   <tr>';
    for (let j of currentObjectKeys) {
      result += `<th>${replaceEntity(j)}</th>`;
    }
    result += '</tr>';
    //console.log(result);

    return result;
  }

  function makeValueRow(objectInfo) {
    let buffer = [];
    for (let i of objectInfo) {
      let currentObjectValues = Object.values(i);
      let result = '   <tr>';
      for (let k of currentObjectValues) {
        result += `<td>${replaceEntity(k)}</td>`;
      }
      result += '</tr>';
      buffer.push(result);
      //console.log(result);
    }
    return buffer.join('\n');
  }
  //console.log('</table>');
  resultArray.push('<table>');
  resultArray.push(makeKeyRow(objectInfo));
  resultArray.push(makeValueRow(objectInfo));
  resultArray.push('</table>');

  console.log(resultArray.join('\n'));
}

fromJSONToHTMLTable(
  `[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]`
);
fromJSONToHTMLTable(
  `[{"Name":"Pesho","Score":4,"Grade":8},{"Name":"Gosho","Score":5,"Grade":8},{"Name":"Angel","Score":5.50,"Grade":10}]`
);
