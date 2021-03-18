var gameOfLife = function(board) {
  // keep track of changes
  let changes = new Map();

  let countLives = function(row, col) {
    let counter = 0;
    for (let j = -1; j < 2; j++) {
      if (board[row + j] !== undefined) {
        for (let i = -1; i < 2; i++) {
          if (j === 0 && i === 0) continue;
          if (board[row + j][col + i] === 1) counter++;
        }
      }
    }

    return counter;
  }

  // loop through the board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // find places that needs to be changed
      let lives = countLives(i, j);
      // if currCell === 1
      if (board[i][j] === 1) {
        // check underPopulation
        if (lives < 2) changes.set([i, j], 0);
        // check overPopulation
        if (lives > 3) changes.set([i, j], 0);
      } else { // if currCell === 0
        // check reproduction
        if (lives === 3) changes.set([i, j], 1);
      }
    }
  }
  // loop through changes
  changes.forEach((val, key) => {
    // make changes.
    board[key[0]][key[1]] = val;
  })

  // return board
  return board;
};