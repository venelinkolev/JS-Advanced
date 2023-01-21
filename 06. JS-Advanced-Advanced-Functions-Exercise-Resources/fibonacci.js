function fibonacci() {
  let number = 0;
  let lastNumber = 0;

  if (number < 1) {
    return 1;
  } else if (number < 2) {
    return 1;
  }
  return number;
}

let fib = fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
