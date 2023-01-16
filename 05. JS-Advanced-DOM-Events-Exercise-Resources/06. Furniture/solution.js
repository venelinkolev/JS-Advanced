function solve() {
  const input = document.getElementById('exercise').querySelector('textarea');
  const buttonGenerate = document
    .getElementById('exercise')
    .querySelector('button')
    .addEventListener('click', generate);
  const buttonBuy = document
    .getElementById('exercise')
    .querySelectorAll('button')[1]
    .addEventListener('click', buy);

  const teble = document.querySelector('tbody');

  function generate(event) {
    // <input type="checkbox" disabled />

    let furnitureObj = JSON.parse(input.value);
    //debugger;
    console.log(furnitureObj);

    for (let furniture of furnitureObj) {
      let newRow = document.createElement('tr');
      let td = document.createElement('td');

      let image = document.createElement('td');
      image.innerHTML = `<img src=${furniture.img}>`;
      newRow.appendChild(image);

      let name = document.createElement('p');
      name.textContent = furniture.name;
      td.appendChild(name);
      newRow.appendChild(td);

      let price = document.createElement('p');
      price.textContent = furniture.price;
      td = document.createElement('td');
      newRow.appendChild(td).appendChild(price);

      let decFactor = document.createElement('p');
      decFactor.textContent = furniture.decFactor;
      td = document.createElement('td');
      newRow.appendChild(td).appendChild(decFactor);

      let checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      td = document.createElement('td');
      newRow.appendChild(td).appendChild(checkbox);

      teble.appendChild(newRow);
    }
    input.value = '';
  }

  function buy(event) {
    const checkbox = Array.from(
      document.querySelectorAll('input[type = "checkbox"]')
    );
    let furnitureNames = [];
    let furnitureTotalPrice = [];
    let averageDecorationFactor = [];

    checkbox.forEach((box) => {
      debugger;

      if (box.checked) {
        let currentRow = Array.from(
          box.parentElement.parentElement.querySelectorAll('td')
        );
        let furnitureElement = [];
        for (let i = 1; i < currentRow.length - 1; i++) {
          furnitureElement.push(currentRow[i].textContent);
          console.log(currentRow[i].textContent);
        }
        furnitureNames.push(furnitureElement.shift());
        furnitureTotalPrice.push(furnitureElement.shift());
        averageDecorationFactor.push(furnitureElement.shift());
      }
    });

    console.log(`Bought furniture: ${furnitureNames.join(', ')}`);
    let totalPrice = 0;
    furnitureTotalPrice.forEach((price) => {
      totalPrice += Number(price);
    });
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    let factor = 0;
    averageDecorationFactor.forEach((decFactor) => {
      factor += Number(decFactor);
    });
    factor /= averageDecorationFactor.length;
    console.log(`Average decoration factor: ${factor}`);

    let buffer = `Bought furniture: ${furnitureNames.join(
      ', '
    )}\nTotal price: ${totalPrice.toFixed(
      2
    )}\nAverage decoration factor: ${factor}`;

    event.target.parentElement.querySelectorAll('textarea')[1].value = buffer;
    //console.log(checkbox);
  }

  //console.log(input.value);
}
