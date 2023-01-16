function addItem() {
  let listElements = document.getElementById('items');
  let input = document.querySelector('input').value;

  let newListElement = document.createElement('li');
  newListElement.appendChild(document.createTextNode(input));
  listElements.appendChild(newListElement);

  let removeButton = document.createElement('a');
  removeButton.href = '#';
  removeButton.addEventListener('click', deleteListElement);
  removeButton.appendChild(document.createTextNode('[Delete]'));

  newListElement.appendChild(removeButton);

  document.querySelector('input').value = '';

  function deleteListElement() {
    newListElement.remove();
  }
  console.log(input);
}
