function calculator() {
  let numberOne = 0;
  let numberTwo = 0;
  let result = 0;

  function init(selectorOne, selectorTwo, resultSelector) {
    //debugger;
    numberOne = document.querySelector(selectorOne);
    numberTwo = document.querySelector(selectorTwo);
    result = document.querySelector(resultSelector);
  }

  function add() {
    result.value = Number(numberOne.value) + Number(numberTwo.value);
  }

  function subtract() {
    result.value = Number(numberOne.value) - Number(numberTwo.value);
  }

  return { init, add, subtract };
}

const calculate = calculator();

calculate.init('#num1', '#num2', '#result');
// calculate.add();
// calculate.subtract();
