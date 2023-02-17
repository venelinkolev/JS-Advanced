const flowerShop = require('./flowerShop');
const { assert } = require('chai');

describe('Test function flowerShop', function () {
  const error = 'Invalid input!';

  describe('Test calcPriceOfFlowers ', () => {
    it('Test 1 invalid input', () => {
      assert.throw(() => {
        flowerShop.calcPriceOfFlowers(1, 1, 1);
      }, error);
    });

    it('Test 2 invalid input', () => {
      assert.throw(() => {
        flowerShop.calcPriceOfFlowers('a', 'a', 1);
      }, error);
    });

    it('Test 3 invalid input', () => {
      assert.throw(() => {
        flowerShop.calcPriceOfFlowers('a', 1, 'a');
      }, error);
    });

    it('Test 4 invalid input', () => {
      assert.throw(() => {
        flowerShop.calcPriceOfFlowers(1, 'a', 'a');
      }, error);
    });

    it('Test 1 valid input', () => {
      assert.equal(
        flowerShop.calcPriceOfFlowers('a', 1, 1),
        'You need $1.00 to buy a!'
      );
    });

    it('Test 2 valid input', () => {
      assert.equal(
        flowerShop.calcPriceOfFlowers('a', 2, 2),
        'You need $4.00 to buy a!'
      );
    });
  });

  describe('Test checkFlowersAvailable', () => {
    it('Test', () => {
      assert.equal(
        flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Lily', 'Orchid']),
        `The Rose are available!`
      );

      assert.equal(
        flowerShop.checkFlowersAvailable('Ven', ['Rose', 'Lily', 'Orchid']),
        `The Ven are sold! You need to purchase more!`
      );
    });
  });

  describe('Test sellFlowers', () => {
    it('Test 1 invalid input', () => {
      assert.throw(() => {
        flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], '1');
      }, error);
    });

    it('Test 2 invalid input', () => {
      assert.throw(() => {
        flowerShop.sellFlowers('a', 1);
      }, error);
    });

    it('Test 3 invalid input', () => {
      assert.throw(() => {
        flowerShop.sellFlowers(1, '1');
      }, error);
    });

    it('Test valid input', () => {
      assert.equal(
        flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1),
        'Rose / Orchid'
      );
    });
  });
});
