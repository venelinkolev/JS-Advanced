function extractText() {
  let items = document.getElementsByTagName('li');

  let result = document.getElementById('result');

  for (let item of items) {
    result.textContent += item.textContent + '\n';
    console.log(item.innerText);
  }

  console.log(items);
}
