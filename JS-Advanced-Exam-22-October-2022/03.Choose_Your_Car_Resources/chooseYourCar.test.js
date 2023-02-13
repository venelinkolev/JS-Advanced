const chooseYourCar = require('./chooseYourCar');
const { assert } = require('chai');

describe('Test function chooseYourCar', function () {
  describe('Test method choosingType', () => {
    it('Test invalid input', () => {
      assert.throw(() => {
        chooseYourCar.choosingType('Sedan', 'Red', 1899);
      }, 'Invalid Year!');

      assert.throw(() => {
        chooseYourCar.choosingType('Sedan', 'Red', 2023);
      }, 'Invalid Year!');
    });

    it('Test valid input', () => {
      assert.throw(() => {
        chooseYourCar.choosingType('A', 'Red', 2020);
      }, 'This type of car is not what you are looking for.');

      assert.equal(
        chooseYourCar.choosingType('Sedan', 'Red', 2009),
        'This Sedan is too old for you, especially with that Red color.'
      );

      assert.equal(
        chooseYourCar.choosingType('Sedan', 'Red', 2012),
        'This Red Sedan meets the requirements, that you have.'
      );

      assert.equal(
        chooseYourCar.choosingType('Sedan', 'Red', 2010),
        'This Red Sedan meets the requirements, that you have.'
      );
    });
  });

  describe('Test method brandName', () => {
    it('Test incorrect input', () => {
      assert.throw(() => {
        chooseYourCar.brandName(['BMW', 'Reno', 'Ford'], '2');
      }, 'Invalid Information');

      assert.throw(() => {
        chooseYourCar.brandName('A', '1');
      }, 'Invalid Information');

      assert.throw(() => {
        chooseYourCar.brandName('BMW', 1);
      }, 'Invalid Information');

      assert.throw(() => {
        chooseYourCar.brandName(['BMW', 'Reno', 'Ford'], -2);
      }, 'Invalid Information');

      assert.throw(() => {
        chooseYourCar.brandName(['BMW', 'Reno', 'Ford'], 3);
      }, 'Invalid Information');
    });

    it('Test correct input', () => {
      assert.equal(
        chooseYourCar.brandName(['BMW', 'Reno', 'Ford'], 2),
        'BMW, Reno'
      );

      assert.equal(
        chooseYourCar.brandName(['BMW', 'Reno', 'Ford'], 0),
        'Reno, Ford'
      );
    });
  });

  describe('Test method carFuelConsumption', () => {
    it('Test invalid input', () => {
      assert.throw(() => {
        chooseYourCar.carFuelConsumption('1', '1');
      }, 'Invalid Information');

      assert.throw(() => {
        chooseYourCar.carFuelConsumption(10, '1');
      }, 'Invalid Information');

      assert.throw(() => {
        chooseYourCar.carFuelConsumption('1', 30);
      }, 'Invalid Information');

      assert.throw(() => {
        chooseYourCar.carFuelConsumption(0, 20);
      }, 'Invalid Information');

      assert.throw(() => {
        chooseYourCar.carFuelConsumption(20, 0);
      }, 'Invalid Information');

      assert.throw(() => {
        chooseYourCar.carFuelConsumption(-1, 20);
      }, 'Invalid Information');

      assert.throw(() => {
        chooseYourCar.carFuelConsumption(20, -1);
      }, 'Invalid Information');
    });

    it('Test valid input', () => {
      assert.equal(
        chooseYourCar.carFuelConsumption(150, 10),
        'The car is efficient enough, it burns 6.67 liters/100 km.'
      );

      assert.equal(
        chooseYourCar.carFuelConsumption(140, 9.8),
        'The car is efficient enough, it burns 7.00 liters/100 km.'
      );

      assert.equal(
        chooseYourCar.carFuelConsumption(150, 8),
        'The car is efficient enough, it burns 5.33 liters/100 km.'
      );

      assert.equal(
        chooseYourCar.carFuelConsumption(150, 18),
        'The car burns too much fuel - 12.00 liters!'
      );
    });
  });
});
