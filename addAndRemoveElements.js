function addAndRemoveElements(arr) {
  let counter = 1;
  let resultArray = [];

  while (arr[0] !== undefined) {
    let currentComand = arr.shift();

    switch (currentComand) {
      case 'add':
        resultArray.push(counter);
        break;
      case 'remove':
        resultArray.pop();
        break;
    }

    counter++;
  }
  if (resultArray.length === 0) console.log('Empty');
  else {
    for (let i of resultArray) {
      console.log(i);
    }
  }
}

addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);
