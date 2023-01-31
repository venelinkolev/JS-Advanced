const mathEnforcer = require('./mathEnforce');
const { assert } = require('chai');

describe('Test Functions', () => {
  describe('Test function addFive', () => {
    it('Test Incorrect Input', () => {
      assert.equal(mathEnforcer.addFive('ven'), undefined);
      assert.equal(mathEnforcer.addFive([]), undefined);
    });

    it('Test Correct Input', () => {
      assert.equal(mathEnforcer.addFive(5), 10);
      assert.equal(mathEnforcer.addFive(-2), 3);
      assert.equal(mathEnforcer.addFive(2.5), 7.5);
    });
  });

  describe('Test function subtractTen', () => {
    it('Test Incorrect Input', () => {
      assert.equal(mathEnforcer.subtractTen('ven'), undefined);
      assert.equal(mathEnforcer.subtractTen([]), undefined);
    });

    it('Test Correct Input', () => {
      assert.equal(mathEnforcer.subtractTen(20), 10);
      assert.equal(mathEnforcer.subtractTen(-10), -20);
      assert.equal(mathEnforcer.subtractTen(15.5), 5.5);
    });
  });

  describe('Test function sum', () => {
    it('Test Incorrect Input', () => {
      assert.equal(mathEnforcer.sum('ven', 1), undefined);
      assert.equal(mathEnforcer.sum(1, []), undefined);
      assert.equal(mathEnforcer.sum('1', '1'), undefined);
    });

    it('Test Correct Input', () => {
      assert.equal(mathEnforcer.sum(20, 10), 30);
      assert.equal(mathEnforcer.sum(-10, 10), 0);
      assert.equal(mathEnforcer.sum(15.5, 15.5), 31);
    });
  });
});
