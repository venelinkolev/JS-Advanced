function solve() {
  let text = document.getElementById('input').value;
  document.getElementById('output').innerHTML = '';
  let finalArray = [];
  let resultArray = text.split('.').filter((el) => el.length !== 0);
  debugger;
  let buffer = '';

  for (let i = 1; i <= resultArray.length; i++) {
    finalArray.push(resultArray[i - 1].trim());
    debugger;
    if (i % 3 === 0) {
      buffer += `<p>${finalArray.join('. ')}.</p>`;
      finalArray = [];
    }
    if (i === resultArray.length) {
      if (resultArray.length === 1) {
        buffer = `<p>${finalArray[0]}.</p>`;
      } else if (finalArray.length !== 0) {
        buffer += `<p>${finalArray.join('. ')}.</p>`;
        finalArray = [];
      }
    }
  }

  document.getElementById('output').innerHTML = buffer;

  console.log(buffer);
}
