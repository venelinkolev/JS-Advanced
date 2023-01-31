const { createCalculator } = require('./aAddSubtract');
const { assert } = require('chai');

describe('Test calc() function', () => {
  it('Test 1', () => {
    const calc = createCalculator();
    calc.add(4);
    assert.equal(calc.get(), 4, 'Correct');
    calc.add('3');
    assert.equal(calc.get(), 7, 'Correct');
    calc.add(true);
    assert.equal(calc.get(), 8, 'Correct');
    //   calc.add('string');
    //   assert.equal(calc.get(), NaN, 'Correct');
  });

  it('Test 2', () => {
    const calc = createCalculator();
    calc.add(20);
    calc.subtract(5);
    assert.equal(calc.get(), 15, 'Correct');
    calc.subtract('3');
    assert.equal(calc.get(), 12, 'Correct');
    calc.subtract(true);
    assert.equal(calc.get(), 11, 'Correct');
  });
});
