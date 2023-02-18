class WineSelection {
  //     •	space – Number
  // •	wines – Array (empty)
  // •	bill - number

  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space == 0) {
      throw new Error('Not enough space in the cellar.');
    } else {
      this.space -= 1;
      this.wines.push({
        wineName,
        wineType,
        price,
        paid: false,
      });

      return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }
    // The wineName and wineType are of type string and price is type number.
    // •	If there's not enough space in the cellar for the bottle, throw an Error:
    //               "Not enough space in the cellar."
    // •	Otherwise, this function should add the wine, with the properties: wineName, wineType, price, paid: default false, to the wines array and return:
    // "You reserved a bottle of {wineName} {wineType} wine."
  }

  payWineBottle(wineName, price) {
    // The wineName is type string and price is type number.
    // •	If the wine is not found, throw an Error:
    // "{wineName} is not in the cellar."

    let currentWine = this.wines.find((wine) => wine.wineName == wineName);

    if (!currentWine) {
      throw new Error(`${wineName} is not in the cellar.`);
    } else if (currentWine.paid) {
      throw new Error(`${wineName} has already been paid.`);
    }

    // •	If the wine has already paid, throw an Error:
    // "{wineName} has already been paid."
    // •	Otherwise, this function set paid to true on the found wine, add price of the bottle to bill and return:
    // "You bought a {wineName} for a {price}$."

    currentWine.paid = true;
    this.bill += price;

    return `You bought a ${wineName} for a ${price}$.`;
  }

  openBottle(wineName) {
    // •	If the wine is not found, throw an Error:
    // "The wine, you're looking for, is not found."

    let currentWine = this.wines.find((wine) => wine.wineName == wineName);

    if (!currentWine) {
      throw new Error(`The wine, you're looking for, is not found.`);
    } else if (!currentWine.paid) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }
    // •	If the wine hasn't paid, throw an Error:
    // "{wineName} need to be paid before open the bottle."
    // •	Otherwise, this function should remove the wine from the array and return:

    let index = this.wines.indexOf(currentWine);

    this.wines.splice(index, 1);

    // 'You drank a bottle of {wineName}.';

    return `You drank a bottle of ${wineName}.`;
  }

  cellarRevision(wineType) {
    // This method can be called with one parameter or without any.
    //  If no parameter is provided, the method should return the full information of the cellar
    // •	At the first line:
    // "You have space for { emptySlots } bottles more."
    // •	At the second line:
    // "You paid {bill}$ for the wine."
    // •	On the next lines, display information about each wine, sorted alphabetically ascending, by their wineName:
    // "{wineName} > {wineType} - {Has Paid / Not Paid}."
    // If the method is called with a parameter for wineType:
    // •	Return only the information about the wine from the given wineType:
    // "{wineName} > {wineType} - {Has Paid / Not Paid}."
    // •	If there is no such wine type found, throw an Error:
    // "There is no {wineType} in the cellar."

    let buffer = [];
    if (wineType == undefined) {
      buffer.push(`You have space for ${this.space} bottles more.`);
      buffer.push(`You paid ${this.bill}$ for the wine.`);
      this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
      this.wines.forEach((wine) => {
        buffer.push(
          `${wine.wineName} > ${wine.wineType} - ${
            wine.paid ? 'Has Paid' : 'Not Paid'
          }.`
        );
      });
    } else {
      let currentType = this.wines.find((type) => type.wineType == wineType);

      if (!currentType)
        throw new Error(`There is no ${wineType} in the cellar.`);
      else
        return `${currentType.wineName} > ${currentType.wineType} - ${
          currentType.paid ? 'Has Paid' : 'Not Paid'
        }.`;
    }

    return buffer.join('\n');
  }
}

const selection = new WineSelection(5);
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());
