function add(numberOne) {
  return function sum(numberTwo) {
    return numberOne + numberTwo;
  };
}

let add5 = add(5);

console.log(add5(2));

console.log(add5(3));
