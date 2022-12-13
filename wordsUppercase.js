function wordsUppercase(text) {
  let pattern = /[a-zA-z\d]+/g;

  let resultArray = text.match(pattern);

  console.log(resultArray.join(', ').toUpperCase());
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
