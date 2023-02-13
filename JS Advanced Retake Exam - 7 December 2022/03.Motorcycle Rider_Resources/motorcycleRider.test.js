const motorcycleRider = require('./03.Motorcycle Rider -Resources/Motorcycle Rider');
const { assert } = require('chai');

describe('Test Object "motorcycleRider"', function () {
  const error = 'Invalid Information!';
  describe('Test licenseRestriction', () => {
    it('Test 1 - Invalid Information!', () => {
      assert.throw(() => {
        motorcycleRider.licenseRestriction(1);
      }, error);
      assert.throw(() => {
        motorcycleRider.licenseRestriction('How');
      }, error);
      assert.throw(() => {
        motorcycleRider.licenseRestriction([]);
      }, error);
    });

    it('Test 2 - Correct Information', () => {
      assert.equal(
        motorcycleRider.licenseRestriction('AM'),
        'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.'
      );

      assert.equal(
        motorcycleRider.licenseRestriction('A1'),
        'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.'
      );

      assert.equal(
        motorcycleRider.licenseRestriction('A2'),
        'Motorcycles with maximum power of 35KW. and the minimum age is 18.'
      );

      assert.equal(
        motorcycleRider.licenseRestriction('A'),
        'No motorcycle restrictions, and the minimum age is 24.'
      );
    });
  });

  describe('Test motorcycleShowroom', () => {
    it('Test incorrect input', () => {
      assert.throw(() => {
        motorcycleRider.motorcycleShowroom('a', 1);
      }, error);
      assert.throw(() => {
        motorcycleRider.motorcycleShowroom([], 1);
      }, error);
      assert.throw(() => {
        motorcycleRider.motorcycleShowroom([1, 1], '');
      }, error);
      assert.throw(() => {
        motorcycleRider.motorcycleShowroom([1, 1], '1');
      }, error);
      assert.throw(() => {
        motorcycleRider.motorcycleShowroom([1, 1], 30);
      }, error);
      assert.throw(() => {
        motorcycleRider.motorcycleShowroom([], 30);
      }, error);
    });
    it('Test correct input', () => {
      assert.equal(
        motorcycleRider.motorcycleShowroom([100, 150, 650], 100),
        `There are 1 available motorcycles matching your criteria!`
      );
      assert.equal(
        motorcycleRider.motorcycleShowroom([50, 150, 650], 50),
        `There are 1 available motorcycles matching your criteria!`
      );
      assert.equal(
        motorcycleRider.motorcycleShowroom([100, 150, 650], 1000),
        `There are 3 available motorcycles matching your criteria!`
      );
      assert.equal(
        motorcycleRider.motorcycleShowroom([100, 150, 650], 500),
        `There are 2 available motorcycles matching your criteria!`
      );
    });
  });

  describe('Test therSpendings', () => {
    it('Test incorrect input', () => {
      assert.throw(() => {
        motorcycleRider.otherSpendings([1], [1], '');
      }, error);
      assert.throw(() => {
        motorcycleRider.otherSpendings('', [1], true);
      }, error);
      assert.throw(() => {
        motorcycleRider.otherSpendings([1], '', false);
      }, error);
      assert.throw(() => {
        motorcycleRider.otherSpendings('', '', '');
      }, error);
    });
    it('Test correct input with discount', () => {
      assert.equal(
        motorcycleRider.otherSpendings(['helmet'], ['oil filter'], true),
        'You spend $207.00 for equipment and consumables with 10% discount!'
      );
      assert.equal(
        motorcycleRider.otherSpendings(
          ['helmet', 'jacked'],
          ['oil filter', 'engine oil'],
          true
        ),
        'You spend $540.00 for equipment and consumables with 10% discount!'
      );
      assert.equal(
        motorcycleRider.otherSpendings([], ['oil filter'], true),
        'You spend $27.00 for equipment and consumables with 10% discount!'
      );
      assert.equal(
        motorcycleRider.otherSpendings([], [], true),
        'You spend $0.00 for equipment and consumables with 10% discount!'
      );
    });
    it('Test correct input without discount', () => {
      assert.equal(
        motorcycleRider.otherSpendings(['helmet'], ['oil filter'], false),
        'You spend $230.00 for equipment and consumables!'
      );
      assert.equal(
        motorcycleRider.otherSpendings(
          ['helmet', 'jacked'],
          ['oil filter', 'engine oil'],
          false
        ),
        'You spend $600.00 for equipment and consumables!'
      );
      assert.equal(
        motorcycleRider.otherSpendings([], ['oil filter'], false),
        'You spend $30.00 for equipment and consumables!'
      );
      assert.equal(
        motorcycleRider.otherSpendings([], [], false),
        'You spend $0.00 for equipment and consumables!'
      );
    });
  });
});
