function addItem() {
  let list = document.getElementById('items');
  let input = document.getElementById('newItemText').value;
  let text = document.createElement('li');
  text.appendChild(document.createTextNode(input));
  //text.textContent = input;
  list.appendChild(text);
  document.getElementById('newItemText').value = '';
  //console.log(list, input);
}
