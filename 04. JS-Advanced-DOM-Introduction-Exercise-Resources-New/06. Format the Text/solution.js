function solve() {
  let text = document.getElementById('input').value;
  let finalArray = [];
  let resultArray = text.split('.').filter((el) => el.length !== 0);
  let buffer = '';

  for (let i = 1; i <= resultArray.length; i++) {
    finalArray.push(resultArray[i - 1]);
    //debugger;
    if (i % 3 === 0) {
      buffer += `<p>${finalArray.join('. ')}.</p>` + '';
      finalArray = [];
    }
    if (i === resultArray.length) {
      buffer += `<p>${finalArray.join('. ')}.</p>`;
      finalArray = [];
    }
  }

  document.getElementById('output').innerHTML = buffer;

  console.log(buffer);
}
