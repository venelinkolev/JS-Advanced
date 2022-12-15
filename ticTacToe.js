function ticTacToe(arr) {
  let firstPlayer = 'X';
  let secondPlayer = 'O';

  let firstTurn = true;
  let secondTurn = false;

  let dashboard = [
    ['false', 'false', 'false'],
    ['false', 'false', 'false'],
    ['false', 'false', 'false'],
  ];
  const gameWin = (dashboard) => {
    const length = dashboard.length;
    let isWin = false;

    if (
      dashboard[0][0] === dashboard[0][1] &&
      dashboard[0][0] === dashboard[0][2] &&
      dashboard[0][0] !== 'false'
    )
      isWin = true;
    else if (
      dashboard[0][0] === dashboard[1][0] &&
      dashboard[0][0] === dashboard[2][0] &&
      dashboard[0][0] !== 'false'
    )
      isWin = true;
    else if (
      dashboard[1][0] === dashboard[1][1] &&
      dashboard[1][0] === dashboard[1][2] &&
      dashboard[1][0] !== 'false'
    )
      isWin = true;
    else if (
      dashboard[2][0] === dashboard[2][1] &&
      dashboard[2][0] === dashboard[2][2] &&
      dashboard[2][0] !== 'false'
    )
      isWin = true;
    else if (
      dashboard[0][1] === dashboard[1][1] &&
      dashboard[0][1] === dashboard[2][1] &&
      dashboard[0][1] !== 'false'
    )
      isWin = true;
    else if (
      dashboard[0][2] === dashboard[1][2] &&
      dashboard[0][2] === dashboard[2][2] &&
      dashboard[0][2] !== 'false'
    )
      isWin = true;
    else if (
      dashboard[0][0] === dashboard[1][1] &&
      dashboard[0][0] === dashboard[2][2] &&
      dashboard[0][0] !== 'false'
    )
      isWin = true;
    else if (
      dashboard[2][0] === dashboard[1][1] &&
      dashboard[2][0] === dashboard[0][2] &&
      dashboard[2][0] !== 'false'
    )
      isWin = true;

    return isWin;
  };

  const gameEnd = (dashboard) => {
    let length = dashboard.length;
    let isEnd = true;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (dashboard[i][j] === 'false') isEnd = false;
      }
    }
    return isEnd;
  };

  const alreadyTakenPlace = (row, column, dashboard) => {
    if (dashboard[row][column] !== 'false') return true;
    else return false;
  };

  const printMatrix = (dashboard) => {
    for (let i of dashboard) {
      let buffer = '';
      for (let j of i) {
        buffer += j + '\t';
      }
      console.log(buffer);
    }
  };

  while (arr[0] !== undefined) {
    let [row, column] = arr.shift().split(' ').map(Number);
    if (firstTurn) {
      if (gameEnd(dashboard)) {
        console.log('The game ended! Nobody wins :(');
        printMatrix(dashboard);
        break;
      }
      if (alreadyTakenPlace(row, column, dashboard)) {
        console.log('This place is already taken. Please choose another!');
        continue;
      } else {
        dashboard[row][column] = firstPlayer;
        firstTurn = false;
        secondTurn = true;
      }

      if (gameWin(dashboard)) {
        console.log(`Player ${firstPlayer} wins!`);
        printMatrix(dashboard);
        break;
      }
    } else if (secondTurn) {
      if (gameEnd(dashboard)) {
        console.log('The game ended! Nobody wins :(');
        printMatrix(dashboard);
        break;
      }

      if (alreadyTakenPlace(row, column, dashboard)) {
        console.log('This place is already taken. Please choose another!');
        continue;
      } else {
        dashboard[row][column] = secondPlayer;
        firstTurn = true;
        secondTurn = false;
      }

      if (gameWin(dashboard)) {
        console.log(`Player ${secondPlayer} wins!`);
        printMatrix(dashboard);
        break;
      }
    }
  }
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

console.log('-----------------');
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

console.log('-----------------');
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
