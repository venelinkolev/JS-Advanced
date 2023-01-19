function fibonacci() {
    let number = 0;
    let lastNumber = ;

  return function fib() {
    if (number < 1) {
      number++;
      return 1;
    } else if (number < 2) {
      number++;
      return 1;
    } else if (number == 2) {
      number++;
      return 2;
    }

    number += lastNumber;
    lastNumber = number;
    return number;
  };
}

let fib = fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
