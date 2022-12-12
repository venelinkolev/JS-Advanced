function circleArea(input) {
  let typeOfArgument = typeof input;

  //let pi = Math.PI;
  //let radiustwo = Math.pow(input);
  //console.log(pi, radiustwo);

  if (typeOfArgument === 'number')
    console.log((Math.PI * (input * input)).toFixed(2));
  else
    console.log(
      `We can not calculate the circle area, because we receive a ${typeOfArgument}.`
    );

  //console.log(typeOfArgument);
}

circleArea(5);
circleArea('name');
