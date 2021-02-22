var solve = function(board) {
  let safeBorders = new Map();
  let locations = new Map();
  // check the borders first
  for (let j = 0; j < board.length; j++) {
    // top and bottom
    if (j === 0 || j === board.length - 1) {
      for (let i = 0; i < board[0].length; i++) {
        // if 'O' is on the border, add it to safeBorders
        if (board[j][i] === 'O') safeBorders.set([j, i], true);
      }
    } else { // left and right
      if (board[j][0] === 'O') safeBorders.set([j, 0], true);
      if (board[j][board[j].length - 1] === 'O') safeBorders.set([j, board[j].length - 1], true);
    }
  }
  // if safeBorders is emtpy
  if (safeBorders.size === 0) {
    for (let i = 0; i < board.length; i++) {
      board[i] = new Array(board[i].length).fill('X');
    }
    // return board filled with 'X';
    return board;
  }

  // from each of the safeBorders,
    // check its left, right, down, up to add it to locations.
};