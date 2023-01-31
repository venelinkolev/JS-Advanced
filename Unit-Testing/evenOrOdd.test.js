const isOddOrEven = require('./evenOrOdd');
const { assert } = require('chai');

describe('Test isOddOrEven Function', () => {
  it('Test Input', () => {
    assert.equal(isOddOrEven({}), undefined);
    assert.equal(isOddOrEven([1, 2]), undefined);
    assert.equal(isOddOrEven(1), undefined);
  });

  it('Test Even', () => {
    assert.equal(isOddOrEven('Ivan'), 'even');
    assert.equal(isOddOrEven('Kaku'), 'even');
  });

  it('Test Odd', () => {
    assert.equal(isOddOrEven('Ava'), 'odd');
    assert.equal(isOddOrEven('Ven'), 'odd');
  });
});
