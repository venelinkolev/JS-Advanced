function solve() {
  const addButtons = Array.from(document.querySelectorAll('.add-product'));
  const checkout = document.getElementsByClassName('checkout')[0];

  checkout.addEventListener('click', checkoutButton);

  addButtons.forEach((button) => {
    button.addEventListener('click', add);
  });

  let buffer = '';
  let total = 0;
  let products = [];

  function add(event) {
    //debugger;
    const currentElement = event.target.parentElement.parentElement;
    let product =
      currentElement.getElementsByClassName('product-title')[0].textContent;
    let price = Number(
      currentElement.getElementsByClassName('product-line-price')[0].textContent
    );

    total += price;
    if (!products.find((x) => x == product)) products.push(product);

    buffer += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
    document.querySelector('textarea').textContent = buffer;

    console.log(total);
    console.log(products);
  }

  function checkoutButton(event) {
    buffer += `You bought ${products.join(', ')} for ${total.toFixed(2)}.`;

    document.querySelector('textarea').textContent = buffer;
    //debugger;
    disabled();
  }

  function disabled() {
    checkout.disabled = true;
    addButtons.forEach((button) => {
      button.disabled = true;
    });
  }

  console.log(addButtons, checkout);
}
