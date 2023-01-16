function deleteByEmail() {
  let result = document.getElementById('result');
  let input = document.querySelector('input').value;
  let table = Array.from(document.querySelectorAll('tbody tr'));

  console.log(table);
  for (let i of table) {
    let email = i.children[1].textContent;
    if (email === input) {
      i.parentNode.removeChild(i);
      result.textContent = 'Deleted';
      return;
    }

    result.textContent = 'Not found.';
    console.log(i.children[1].textContent);
  }

  console.log(table);
}
