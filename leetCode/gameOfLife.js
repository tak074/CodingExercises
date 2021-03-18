var gameOfLife = function(board) {
  // keep track of changes
  let countLives = function(row, col) {
    let counter = 0;
    for (let j = -1; j < 2; j++) {
      if (board[row + j] !== undefined) {
        for (let i = -1; i < 2; i++) {
          if (j === 0 && i === 0) continue;
          if (board[row + j][col + i] >= 1) counter++;
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
        // check underPopulation and overPopulation
        if (lives < 2 || lives > 3) board[i][j] = 2;
      } else { // if currCell === 0
        // check reproduction
        if (lives === 3) board[i][j] = -1;
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 2) board[i][j] = 0;
      if (board[i][j] === -1) board[i][j] = 1;
    }
  }
};