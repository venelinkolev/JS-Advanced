function sumTable() {
  let total = document.getElementById('sum');
  let sum = 0;
  let table = document.getElementsByTagName('tr');

  for (let i = 1; i < table.length - 1; i++) {
    let currentPrice = Number(table[i].children[1].textContent);
    sum += currentPrice;
    //console.log(table[i].children);
  }
  total.textContent = sum;
  //console.log(price);
}
