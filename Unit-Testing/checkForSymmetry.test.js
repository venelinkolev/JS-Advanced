const { isSymmetric } = require('./checkForSymmetry');
const { assert } = require('chai');

describe('Test function Symmetry', () => {
  it('Test 1', () => {
    assert.equal(isSymmetric('string'), false, 'Non-arrays');
  });

  it('Test 2', () => {
    assert.equal(isSymmetric(1, 2, 3), false, 'Non-arrays');
  });

  it('Test 3', () => {
    assert.equal(isSymmetric([]), true, 'Symmetric');
  });

  it('Test 4', () => {
    assert.equal(isSymmetric([1, 2, 3, 4]), false, 'Non-Symmetric');
  });

  it('Test 5', () => {
    assert.equal(isSymmetric([1, 2, 3, 2, 1]), true, 'Symmetric');
  });

  it('Test 6', () => {
    assert.equal(isSymmetric(['1', '1']), true, 'Symmetric');
  });

  it('Test 7', () => {
    assert.equal(isSymmetric([1, 2]), false, 'Non-Symmetric');
  });

  it('Test 8', () => {
    assert.equal(isSymmetric({}), false, 'Not-Symmetric');
  });

  it('Test 9', () => {
    assert.equal(isSymmetric([1, '1']), false, 'Non-Symmetric');
  });
});
