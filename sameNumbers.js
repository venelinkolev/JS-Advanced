function sameNumbers(number) {
  let string = number.toString();
  let sum = Number(string[0]);
  let isSame = true;
  currentNumber = sum;

  for (let i = 1; i < string.length; i++) {
    sum += Number(string[i]);
    if (currentNumber !== Number(string[i])) isSame = false;
    currentNumber = Number(string[i]);
  }

  console.log(isSame);
  console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
