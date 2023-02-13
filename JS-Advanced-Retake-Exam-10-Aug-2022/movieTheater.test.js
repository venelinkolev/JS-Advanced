const movieTheater = require('./movieTheater');
const { assert } = require('chai');

describe('Test Object movieTheater', function () {
  describe('Test functionality ageRestrictions', () => {
    it('Test correct input', () => {
      assert.equal(
        movieTheater.ageRestrictions('G'),
        'All ages admitted to watch the movie'
      );
      assert.equal(
        movieTheater.ageRestrictions('PG'),
        'Parental guidance suggested! Some material may not be suitable for pre-teenagers'
      );
      assert.equal(
        movieTheater.ageRestrictions('R'),
        'Restricted! Under 17 requires accompanying parent or adult guardian'
      );
      assert.equal(
        movieTheater.ageRestrictions('NC-17'),
        'No one under 17 admitted to watch the movie'
      );
      assert.equal(
        movieTheater.ageRestrictions('All'),
        'There are no age restrictions for this movie'
      );
    });
  });

  describe('Test functionality moneySpent', () => {
    it('Test invalid input', () => {
      assert.throw(() => {
        movieTheater.moneySpent('1', [], []);
      }, 'Invalid input');
      assert.throw(() => {
        movieTheater.moneySpent(1, 1, ['Soda']);
      }, 'Invalid input');
      assert.throw(() => {
        movieTheater.moneySpent(1, ['Nachos'], 1);
      }, 'Invalid input');
      assert.throw(() => {
        movieTheater.moneySpent('1', 1, {});
      }, 'Invalid input');
    });

    it('Test valid input', () => {
      assert.equal(
        movieTheater.moneySpent(10, ['Nachos'], ['Soda']),
        'The total cost for the purchase with applied discount is 126.80'
      );
      assert.equal(
        movieTheater.moneySpent(10, ['Nachos', 'Popcorn'], ['Soda', 'Water']),
        'The total cost for the purchase with applied discount is 131.60'
      );
      assert.equal(
        movieTheater.moneySpent(10, [], []),
        'The total cost for the purchase with applied discount is 120.00'
      );
      assert.equal(
        movieTheater.moneySpent(1, ['Nachos'], ['Soda']),
        `The total cost for the purchase is 23.50`
      );
      assert.equal(
        movieTheater.moneySpent(1, [], []),
        `The total cost for the purchase is 15.00`
      );
    });
  });

  describe('Test functionality reservation', () => {
    it('Test invalid input', () => {
      assert.throw(() => {
        movieTheater.reservation([], '1');
      }, 'Invalid input');
      assert.throw(() => {
        movieTheater.reservation(1, 1);
      }, 'Invalid input');
      assert.throw(() => {
        movieTheater.reservation(1, '1');
      }, 'Invalid input');
    });
    it('Test valid input', () => {
      assert.equal(
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 3, freeSeats: 5 },
          ],
          2
        ),
        3
      );
      assert.equal(
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 3, freeSeats: 5 },
          ],
          6
        ),
        1
      );
      assert.equal(
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 3, freeSeats: 5 },
          ],
          7
        ),
        1
      );
      assert.equal(
        movieTheater.reservation(
          [
            { rowNumber: 1, freeSeats: 7 },
            { rowNumber: 3, freeSeats: 5 },
          ],
          5
        ),
        3
      );
    });
  });
});
