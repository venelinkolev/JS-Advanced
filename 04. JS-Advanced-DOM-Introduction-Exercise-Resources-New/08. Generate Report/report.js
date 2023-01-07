function generateReport() {
  let resultArray = [];

  let box = document.querySelectorAll('input[type=checkbox]');
  let headerRow = document.querySelectorAll('thead tr th input');
  let row = document.querySelectorAll('tbody tr');
  console.log(headerRow);
  debugger;

  for (let i = 0; i < row.length; i++) {
    let rowObject = {};
    for (let j = 0; j < headerRow.length; j++) {
      if (box[j].checked) {
        let propertyName = headerRow[j].name;
        let value = row[i].children[j].textContent;
        rowObject[propertyName] = value;
      }
    }
    resultArray.push(rowObject);
  }
  console.log(resultArray);

  let output = document.getElementById('output');
  output.textContent = JSON.stringify(resultArray);
}
