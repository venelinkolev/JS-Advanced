function carFactory(carInfo) {
  function engineSize(object) {
    if (object.power <= 90) {
      object.engine = {
        power: 90,
        volume: 1800,
      };
      delete object.power;
    } else if (object.power <= 120) {
      object.engine = {
        power: 120,
        volume: 2400,
      };
      delete object.power;
    } else {
      object.engine = {
        power: 200,
        volume: 3500,
      };
      delete object.power;
    }
  }

  function carriage(object) {
    let type = object.carriage;

    object.carriage = {
      type: type,
      color: object.color,
    };
    delete object.color;
  }

  function wheelsType(object) {
    if (object.wheelsize % 2 === 0) {
      let size = object.wheelsize - 1;
      object.wheels = [size, size, size, size];
      delete object.wheelsize;
    } else {
      object.wheels = [
        object.wheelsize,
        object.wheelsize,
        object.wheelsize,
        object.wheelsize,
      ];
      delete object.wheelsize;
    }
  }
  engineSize(carInfo);
  carriage(carInfo);
  wheelsType(carInfo);

  return carInfo;
  console.log(carInfo);
}

carFactory({
  model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14,
});
carFactory({
  model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17,
});
