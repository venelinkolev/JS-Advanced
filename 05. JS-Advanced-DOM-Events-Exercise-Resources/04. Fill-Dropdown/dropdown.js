function addItem() {
  let text = document.querySelector('input[id = newItemText]');
  let value = document.querySelector('input[id = newItemValue]');
  let menu = document.querySelector('select');

  let option = document.createElement('option');

  option.value = value.value;
  option.textContent = text.value;
  menu.appendChild(option);
  //debugger;
  console.log(text.value, value.value);
  text.value = '';
  value.value = '';

  console.log();
}
