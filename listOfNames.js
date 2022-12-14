function listOfNames(arr) {
  arr.sort((a, b) => a.localeCompare(b));
  let counter = 0;
  for (let i of arr) {
    counter++;
    console.log(`${counter}.${i}`);
  }
}

listOfNames(['John', 'Bob', 'Christina', 'Ema']);
