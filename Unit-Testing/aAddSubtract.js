function createCalculator() {
  let value = 0;

  return {
    add: function (num) {
      value += Number(num);
    },

    subtract: function (num) {
      value -= Number(num);
    },

    get: function () {
      return value;
    },
  };
}
//const calc = createCalculator();

// calc.add(4);
// console.log(calc.get());
// calc.add('string');
// console.log(calc.get());

module.exports = { createCalculator };
