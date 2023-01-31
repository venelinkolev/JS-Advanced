const lookupChar = require('./charLookup');
const { assert } = require('chai');

describe('Test function LookUpChar', () => {
  it('Test Incorrect Input', () => {
    assert.equal(lookupChar(12, 1), undefined);
    assert.equal(lookupChar('Ven', 'as'), undefined);
    assert.equal(lookupChar('Ven', 3.4), undefined);
    assert.equal(lookupChar([], 2), undefined);
    assert.equal(lookupChar(1, 'as'), undefined);
  });

  it('Test Incorrect Index', () => {
    assert.equal(lookupChar('Venelin', -1), 'Incorrect index');
    assert.equal(lookupChar('Venelin', 10), 'Incorrect index');
    assert.equal(lookupChar('Venelin', 7), 'Incorrect index');
  });

  it('Test Correct Output', () => {
    assert.equal(lookupChar('Ven', 1), 'e');
    assert.equal(lookupChar('Venelin', 6), 'n');
  });
});
