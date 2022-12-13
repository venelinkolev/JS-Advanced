function validityChecker(xOne, yOne, xTwo, yTwo) {
  let formulaX = Math.sqrt(Math.pow(0 - xOne, 2) + Math.pow(0 - yOne, 2));
  let formulaY = Math.sqrt(Math.pow(0 - xTwo, 2) + Math.pow(0 - yTwo, 2));
  let formula = Math.sqrt(Math.pow(xTwo - xOne, 2) + Math.pow(yTwo - yOne, 2));

  //   In case a distance is valid, print: `{x1, y1} to {x2, y2} is valid`

  // If the distance is invalid, print: `{x1, y1} to {x2, y2} is invalid`
  let firstPoint = `{${xOne}, ${yOne}}`;
  let secondPoint = `{${xTwo}, ${yTwo}}`;

  if (Math.floor(formulaX) === formulaX) {
    console.log(`${firstPoint} to {0, 0} is valid`);
  } else console.log(`${firstPoint} to {0, 0} is invalid`);

  if (Math.floor(formulaY) === formulaY) {
    console.log(`${secondPoint} to {0, 0} is valid`);
  } else console.log(`${secondPoint} to {0, 0} is invalid`);

  if (Math.floor(formula) === formula) {
    console.log(`${firstPoint} to ${secondPoint} is valid`);
  } else console.log(`${firstPoint} to ${secondPoint} is invalid`);

  //console.log(formula, formulaX, formulaY);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
