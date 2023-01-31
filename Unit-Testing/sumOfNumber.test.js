const { sum } = require('./sumOfNumber');
const { expect } = require('chai');
const { assert } = require('chai');

describe('Test function sum()', () => {
  it('Test 1', () => {
    let array = [1, 2, 3, 4];

    let result = sum(array);

    expect(result).to.be.equal(10);
  });

  it('Test 2', () => {
    assert.equal(sum([1, 2, 3, 4]), 10, 'Correct Result');
  });

  it('Test 3', () => {
    assert.equal(sum([1, '2', '3']), 6, 'Correct Result');
  });

  it('Test 4', () => {
    assert.equal(sum([]), 0, 'Correct');
  });

  it('Test 5', () => {
    assert.equal(sum([1, '2', true]), 4, 'Correct Result');
  });
});
