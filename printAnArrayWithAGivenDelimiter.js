function printAnArrayWithAGivenDelimiter(arr, string) {
  console.log(arr.join(string));
}

printAnArrayWithAGivenDelimiter(
  ['One', 'Two', 'Three', 'Four', 'Five'],

  '-'
);
printAnArrayWithAGivenDelimiter(
  ['How about no?', 'I', 'will', 'not', 'do', 'it!'],
  '_'
);
