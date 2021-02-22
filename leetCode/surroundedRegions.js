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

  // check and add 'O' locations
  let check = function(arr) {
    if (!locations.has(arr)) {
    // if unmarked, add to locations
      locations.set(arr, true);

      // check its surroundings
      // left
      if (board[arr[0]][arr[1] - 1] === 'O') check([...arr[0], arr[1] - 1]);
      // right
      if (board[arr[0]][arr[1] + 1] === 'O') check([...arr[0], arr[1]] + 1);
      // top
      if (board[arr[0] - 1] && board[arr[0] - 1][arr[1]] === 'O') check([...arr[0] - 1, arr[1]]);
      // bottom
      if (board[arr[0] + 1] && board[arr[0] + 1][arr[1]] === 'O') check([...arr[0] + 1, arr[1]]);
    }
  };

  // from each of the safeBorders,
  safeBorders.forEach((val, key) => {
    check(key);
  })

  // make board into all 'X'
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(board[i].length).fill('X');
  }
  // if size = 0, end the function here
  if (safeBorders.size === 0) return board;

  // mark the locations from board
  locations.forEach((val, key) => {
    board[key[0]][key[1]] = 'O';
  })
};