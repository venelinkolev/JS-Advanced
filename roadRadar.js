function roadRadar(driverSpeed, area) {
  //     On the motorway, the limit is 130 km/h

  // · On the interstate, the limit is 90 km/h

  // · In the city, the limit is 50 km/h

  // · Within a residential area, the limit is 20 km/h
  let overLimit = 0;
  switch (area) {
    case 'motorway':
      if (driverSpeed <= 130) {
        console.log(`Driving ${driverSpeed} km/h in a 130 zone`);
      } else {
        overLimit = driverSpeed - 130;
        if (overLimit <= 20)
          console.log(
            `The speed is ${overLimit} km/h faster than the allowed speed of 130 - speeding`
          );
        else if (overLimit <= 40)
          console.log(
            `The speed is ${overLimit} km/h faster than the allowed speed of 130 - excessive speeding`
          );
        else
          console.log(
            `The speed is ${overLimit} km/h faster than the allowed speed of 130 - reckless driving`
          );
      }
      break;
    case 'interstate':
      if (driverSpeed <= 90) {
        console.log(`Driving ${driverSpeed} km/h in a 90 zone`);
      } else {
        overLimit = driverSpeed - 90;
        if (overLimit <= 20)
          console.log(
            `The speed is ${overLimit} km/h faster than the allowed speed of 90 - speeding`
          );
        else if (overLimit <= 40)
          console.log(
            `The speed is ${overLimit} km/h faster than the allowed speed of 90 - excessive speeding`
          );
        else
          console.log(
            `The speed is ${overLimit} km/h faster than the allowed speed of 90 - reckless driving`
          );
      }
      break;
    case 'city':
      if (driverSpeed <= 50) {
        console.log(`Driving ${driverSpeed} km/h in a 50 zone`);
      } else {
        overLimit = driverSpeed - 50;
        if (overLimit <= 20)
          console.log(
            `The speed is ${overLimit} km/h faster than the allowed speed of 50 - speeding`
          );
        else if (overLimit <= 40)
          console.log(
            `The speed is ${overLimit} km/h faster than the allowed speed of 50 - excessive speeding`
          );
        else
          console.log(
            `The speed is ${overLimit} km/h faster than the allowed speed of 50 - reckless driving`
          );
      }
      break;
    case 'residential':
      if (driverSpeed <= 20) {
        console.log(`Driving ${driverSpeed} km/h in a 20 zone`);
      } else {
        overLimit = driverSpeed - 20;
        if (overLimit <= 20)
          console.log(
            `The speed is ${overLimit} km/h faster than the allowed speed of 20 - speeding`
          );
        else if (overLimit <= 40)
          console.log(
            `The speed is ${overLimit} km/h faster than the allowed speed of 20 - excessive speeding`
          );
        else
          console.log(
            `The speed is ${overLimit} km/h faster than the allowed speed of 20 - reckless driving`
          );
      }
      break;
  }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
