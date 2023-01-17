function listProcessor(arr) {
  let collection = [];

  while (arr.length !== 0) {
    let currentElementArray = arr.shift();

    if (currentElementArray === 'print') {
      console.log(collection.join(','));
      continue;
    }

    let currentCommand = currentElementArray.split(' ');
    //console.log(currentCommand);
    switch (currentCommand[0]) {
      case 'add':
        collection.push(currentCommand[1]);
        break;
      case 'remove':
        collection = collection.filter((element) => {
          return element !== currentCommand[1];
        });
    }
  }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor([
  'add pesho',
  'add george',
  'add peter',
  'remove peter',
  'print',
]);
