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
    if (this.warehouseSpace < spaceRequired) {
      throw new Error('Not enough space in the warehouse.');
    } else {
      this.warehouseSpace -= spaceRequired;
    }

    // •	Otherwise, this function should add the product with the properties: product and quantity to the products array, reduce the space available with the space required by the product, and return:
    // "The {product} has been successfully delivered in the warehouse."
    // NOTE: Product names will be unique.

    this.products.push({
      product: product,
      quantity: quantity,
    });

    return `The ${product} has been successfully delivered in the warehouse.`;
  }

  quantityCheck(product, minimalQuantity) {
    // The quantity is of type number.
    // •	If the product is not found, throw an Error:
    // "There is no {product} in the warehouse."
    let currentProduct = this.products.find(
      (element) => element.product == product
    );
    if (!currentProduct) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }

    // •	If the received minimalQuantity is less than or equal to 0, throw an Error:
    // "The quantity cannot be zero or negative."

    if (minimalQuantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }

    // •	If the received minimalQuantity is less or equal to the product quantity in the warehouse, return:
    // "You have enough from product {product}."

    if (minimalQuantity - currentProduct.quantity <= 0) {
      return `You have enough from product ${product}.`;
    } else {
      let difference = minimalQuantity - currentProduct.quantity;
      currentProduct.quantity = minimalQuantity;

      return `You added ${difference} more from the ${product} products.`;
    }

    // •	Otherwise, this function should replace the value of product quantity with a minimalQuantity value and return:
    // "You added {difference} more from the {product} products."
    // •	Difference is the number between the minimum quantity and the product quantity.
  }

  sellProduct(product) {
    // •	If the product is not found, throw an Error:
    // "There is no {product} in the warehouse."
    let currentProduct = this.products.find(
      (element) => element.product == product
    );
    if (!currentProduct) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }

    // •	Otherwise, this function should decrement by 1 the product quantity from the product in the products array, add it to sales with properties {product} and {1} for quantity, and return:
    // "The {product} has been successfully sold."

    currentProduct.quantity -= 1;
    this.sales.push({
      product: product,
      quantity: 1,
    });

    return `The ${product} has been successfully sold.`;
  }

  revision() {
    // This method should return the complete information about the shop:
    // •	If nothing is sold, throw an Error:
    // "There are no sales today!"
    let result = [];

    if (this.sales.length == 0) {
      throw new Error(`There are no sales today!`);
    } else {
      result.push(`You sold ${this.sales.length} products today!`);
    }
    // •	Otherwise, return how many sales you have:
    // "You sold {sales} products today!"
    // •	On the second line:
    // "Products in the warehouse:"
    result.push(`Products in the warehouse:`);
    // •	On the new line, display information about each product in the warehouse:
    // "{product}-{quantity} more left"

    this.products.forEach((element) => {
      result.push(`${element.product}-${element.quantity} more left`);
    });

    return result.join('\n');
  }
}
