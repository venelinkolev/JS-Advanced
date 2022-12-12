function stringLength(one, two, three) {
  let sumLength = one.length + two.length + three.length;
  let average = Math.floor(sumLength / 3);

  console.log(`${sumLength}\n${average}`);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');
