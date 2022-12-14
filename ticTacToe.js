function ticTacToe(arr) {
  let firstPlayer = 'X';
  let secondPlayer = 'O';

  let firstTurn = true;
  let secondTurn = false;

  let dashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  const gameEnd = (dashboard) => {
    let length = dashboard.length;
    let isEnd = true;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (dashboard[i][j] === false) isEnd = false;
      }
    }
    return isEnd;
  };

  const alreadyTakenPlace = (row, column, dashboard) => {
    if (dashboard[row][column] !== false) return true;
  };

  while (arr[0] !== undefined) {
    let [row, column] = arr.shift().split(' ');

    if (firstPlayer) {
      if (gameEnd(dashboard)) {
        console.log('The game ended! Nobody wins :(');
        break;
      }

      if (alreadyTakenPlace(row, column, dashboard)) {
        console.log('This place is already taken. Please choose another!');
        continue;
      } else {
        dashboard[(row, column)] = firstPlayer;
        firstTurn = false;
        secondTurn = true;
      }
    }

    if (secondPlayer) {
      if (gameEnd(dashboard)) {
        console.log('The game ended! Nobody wins :(');
        break;
      }

      if (alreadyTakenPlace(row, column, dashboard)) {
        console.log('This place is already taken. Please choose another!');
        continue;
      } else {
        dashboard[(row, column)] = secondPlayer;
        firstTurn = true;
        secondTurn = false;
      }
    }
  }

  console.log();
}

ticTacToe([
  '0 1',

  '0 0',

  '0 2',

  '2 0',

  '1 0',

  '1 1',

  '1 2',

  '2 2',

  '2 1',

  '0 0',
]);
ticTacToe([
  '0 0',
  '0 0',
  '1 1',
  '0 1',
  '1 2',
  '0 2',
  '2 2',
  '1 2',
  '2 2',
  '2 1',
]);
ticTacToe([
  '0 1',

  '0 0',

  '0 2',

  '2 0',

  '1 0',

  '1 2',

  '1 1',

  '2 1',

  '2 2',

  '0 0',
]);