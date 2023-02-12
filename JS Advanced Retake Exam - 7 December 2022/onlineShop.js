class OnlineShop {
  //     •	warehouseSpace – Number
  // •	products – Array (empty)
  // •	sales – Array (empty)

  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
  }

  loadingStore(product, quantity, spaceRequired) {
    // The product is of type string, while the spaceRequired and quantity are of type number.
    // •	If there is not enough space in the warehouse for the new product, throw an Error:
    // "Not enough space in the warehouse."
    // •	Otherwise, this function should add the product with the properties: product and quantity to the products array, reduce the space available with the space required by the product, and return:
    // "The {product} has been successfully delivered in the warehouse."
    // NOTE: Product names will be unique.
  }

  quantityCheck(product, minimalQuantity) {
    // The quantity is of type number.
    // •	If the product is not found, throw an Error:
    // "There is no {product} in the warehouse."
    // •	If the received minimalQuantity is less than or equal to 0, throw an Error:
    // "The quantity cannot be zero or negative."
    // •	If the received minimalQuantity is less or equal to the product quantity in the warehouse, return:
    // "You have enough from product {product}."
    // •	Otherwise, this function should replace the value of product quantity with a minimalQuantity value and return:
    // "You added {difference} more from the {product} products."
    // •	Difference is the number between the minimum quantity and the product quantity.
  }

  sellProduct(product) {
    // •	If the product is not found, throw an Error:
    // "There is no {product} in the warehouse."
    // •	Otherwise, this function should decrement by 1 the product quantity from the product in the products array, add it to sales with properties {product} and {1} for quantity, and return:
    // "The {product} has been successfully sold."
  }

  revision() {
    // This method should return the complete information about the shop:
    // •	If nothing is sold, throw an Error:
    // "There are no sales today!"
    // •	Otherwise, return how many sales you have:
    // "You sold {sales} products today!"
    // •	On the second line:
    // "Products in the warehouse:"
    // •	On the new line, display information about each product in the warehouse:
    // "{product}-{quantity} more left"
  }
}
