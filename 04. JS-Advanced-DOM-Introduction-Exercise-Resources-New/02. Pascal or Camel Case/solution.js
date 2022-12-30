function solve() {
  let text = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;

  text = text.toLowerCase();
  console.log(text);

  let finalResult = document.getElementById('result');

  let word = [];

  let result = text.split(' ');

  switch (convention) {
    case 'Camel Case':
      word.push(result.shift());
      for (let i of result) {
        word.push(i[0].toUpperCase() + i.substring(1));
      }
      break;
    case 'Pascal Case':
      for (let i of result) {
        word.push(i[0].toUpperCase() + i.substring(1));
      }
      break;
    default:
      word.push('Error!');
  }

  finalResult.textContent = word.join('');

  console.log(result);
}
