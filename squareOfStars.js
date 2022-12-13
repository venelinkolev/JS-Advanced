function squareOfStars(number) {
  if (number >= 1) {
    let print = '* '.repeat(number);
    for (let i = 1; i <= number; i++) {
      console.log(print);
    }
  } else {
    for (let i = 1; i <= 5; i++) {
      console.log('* * * * *');
    }
  }

  //console.log(print);
}

squareOfStars(5);
squareOfStars(2);
