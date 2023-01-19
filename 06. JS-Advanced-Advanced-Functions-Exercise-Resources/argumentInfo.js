function argumentInfo(...arguments) {
  const result = {};

  for (let argument of arguments) {
    let type = typeof argument;
    console.log(`${type}: ${argument}`);

    if (!result.hasOwnProperty(type)) {
      result[type] = 1;
    } else {
      result[type]++;
    }
  }

  const final = Object.entries(result).sort((a, b) => b[1] - a[1]);

  final.forEach((line) => console.log(`${line[0]} = ${line[1]}`));
}

argumentInfo('cat', 42, function () {
  console.log('Hello world!');
});
