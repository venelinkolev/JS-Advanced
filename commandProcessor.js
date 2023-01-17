function commandProcessor() {
  let result = '';

  function append(string) {
    result += string;
  }

  function removeStart(number) {
    result = result.slice(number);
  }

  function removeEnd(number) {
    result = result.slice(0, result.length - number);
  }

  function print() {
    console.log(result);
  }
  return { append, removeStart, removeEnd, print };
}

let secondZeroTest = commandProcessor();
secondZeroTest.append('123');
secondZeroTest.append('45');

secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

console.log('-----------------------');

let firstZeroTest = commandProcessor();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
