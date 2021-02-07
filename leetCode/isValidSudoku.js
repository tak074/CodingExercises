var isValidSudoku = function(board) {
  let valid = true; 
  
  // go through each element
  // check cols as it checks rows

  let cols = [];
  let squares = [];
  // loop through each rows
  for (let i = 0; i < board.length; i++) {
    // loop through each cols
    let row = board[i];
    let rowVals = {};
    for (let j = 0; j < row.length; j++) {
      let currVal = row[j];
      // check if it's a number
      if (currVal === '.') continue;

      //check rows
      if (rowVals[currVal]) {
        valid = false;
        break;
      }
      rowVals[currVal] = true;
      
      //check cols
      // check if dictionary for current col has been made
      if (!cols[j]) {
        cols[j] = {};
      }
      // if already made, add the value in
      if (cols[j][currVal]) {
        valid = false;
        break;
      }
      cols[j][currVal] = true;

      // check squares
      let squareNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      if (!squares[squareNum]) {
        squares[squareNum] = {};
      }
      if (squares[squareNum][currVal]) {
        valid = false;
        break;
      }
      squares[squareNum][currVal] = true;
    }
    if (!valid) {
      break;
    }
  }

  return valid;
};  