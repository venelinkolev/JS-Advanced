const findNewApartment = require('./findApartment');
const { assert } = require('chai');

describe('Test Object findNewApartment', function () {
  describe('Test  isGoodLocation', () => {
    //"Sofia", "Plovdiv" or "Varna"
    //Invalid input!
    //This location is not suitable for you.
    //There is no public transport in area.
    //You can go on home tour!
    it('Test invalide input', () => {
      assert.throw(() => {
        findNewApartment.isGoodLocation(1, 'a');
      }, 'Invalid input!');

      assert.throw(() => {
        findNewApartment.isGoodLocation('a', 'a');
      }, 'Invalid input!');

      assert.throw(() => {
        findNewApartment.isGoodLocation(1, true);
      }, 'Invalid input!');

      assert.throw(() => {
        findNewApartment.isGoodLocation(1, false);
      }, 'Invalid input!');

      it('Test string parm', () => {
        assert.equal(
          findNewApartment.isGoodLocation('a', false),
          'This location is not suitable for you.'
        );
      });
    });

    it('Test string parm false', () => {
      assert.equal(
        findNewApartment.isGoodLocation('Sofia', false),
        'There is no public transport in area.'
      );

      assert.equal(
        findNewApartment.isGoodLocation('Plovdiv', false),
        'There is no public transport in area.'
      );

      assert.equal(
        findNewApartment.isGoodLocation('Varna', false),
        'There is no public transport in area.'
      );
    });

    it('Test string parm true', () => {
      assert.equal(
        findNewApartment.isGoodLocation('Sofia', true),
        'You can go on home tour!'
      );

      assert.equal(
        findNewApartment.isGoodLocation('Plovdiv', true),
        'You can go on home tour!'
      );

      assert.equal(
        findNewApartment.isGoodLocation('Varna', true),
        'You can go on home tour!'
      );
    });
  });

  describe('Test isLargeEnough', () => {
    //([40, 50, 60…])
    it('Test invalid input', () => {
      assert.throw(() => {
        findNewApartment.isLargeEnough([40, 50, 60], '1');
      }, 'Invalid input!');

      assert.throw(() => {
        findNewApartment.isLargeEnough('a', 1);
      }, 'Invalid input!');

      assert.throw(() => {
        findNewApartment.isLargeEnough('a', '1');
      }, 'Invalid input!');

      assert.throw(() => {
        findNewApartment.isLargeEnough([], 1);
      }, 'Invalid input!');

      assert.throw(() => {
        findNewApartment.isLargeEnough([], 'a');
      }, 'Invalid input!');

      assert.throw(() => {
        findNewApartment.isLargeEnough([], {});
      }, 'Invalid input!');
    });

    it('Test valid input', () => {
      assert.equal(
        findNewApartment.isLargeEnough([40, 50, 60], 40),
        '40, 50, 60'
      );
      assert.equal(findNewApartment.isLargeEnough([40, 50, 60], 45), '50, 60');
    });
  });

  describe('Test isItAffordable', () => {
    it('Test invalid input', () => {
      assert.throw(() => {
        findNewApartment.isItAffordable('a', 'a');
      }, 'Invalid input!');

      assert.throw(() => {
        findNewApartment.isItAffordable(1, 'a');
      }, 'Invalid input!');

      assert.throw(() => {
        findNewApartment.isItAffordable('a', 1);
      }, 'Invalid input!');

      assert.throw(() => {
        findNewApartment.isItAffordable(0, 1);
      }, 'Invalid input!');

      assert.throw(() => {
        findNewApartment.isItAffordable(1, 0);
      }, 'Invalid input!');

      assert.throw(() => {
        findNewApartment.isItAffordable(-1, 1);
      }, 'Invalid input!');

      assert.throw(() => {
        findNewApartment.isItAffordable(1, -1);
      }, 'Invalid input!');

      assert.throw(() => {
        findNewApartment.isItAffordable(-1, -1);
      }, 'Invalid input!');
    });

    it('Test valid input', () => {
      assert.equal(
        findNewApartment.isItAffordable(105, 100),
        "You don't have enough money for this house!"
      );

      assert.equal(
        findNewApartment.isItAffordable(100, 105),
        'You can afford this home!'
      );

      assert.equal(
        findNewApartment.isItAffordable(100, 100),
        'You can afford this home!'
      );
    });
  });
});
