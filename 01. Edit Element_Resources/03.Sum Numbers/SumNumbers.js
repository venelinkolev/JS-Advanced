function calc() {
  let numberOne = Number(document.getElementById('num1').value);
  let numberTwo = Number(document.getElementById('num2').value);

  let sum = document.getElementById('sum');

  sum.value = numberOne + numberTwo;
  console.log();
}
