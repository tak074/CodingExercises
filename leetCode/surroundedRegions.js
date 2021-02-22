var solve = function(board) {
  if (board.length === 0) return null;
  let locations = new Map();

  // check and add 'O' locations
  let check = function(arr) {
    if (!locations.get(arr.toString())) {
    // if unmarked, add to locations
      locations.set(arr.toString(), [Number(arr[0]), Number(arr[1])]);

      // check its surroundings
      // left
      if (board[arr[0]][arr[1] - 1] === 'O') check([arr[0], arr[1] - 1]);
      // right
      if (board[arr[0]][arr[1] + 1] === 'O') check([arr[0], arr[1] + 1]);
      // top
      if (board[arr[0] - 1] && board[arr[0] - 1][arr[1]] === 'O') check([arr[0] - 1, arr[1]]);
      // bottom
      if (board[arr[0] + 1] && board[arr[0] + 1][arr[1]] === 'O') check([arr[0] + 1, arr[1]]);
    }
  };

  let borderCount = 0;
  // check the borders first
  for (let j = 0; j < board.length; j++) {
    // top and bottom
    if (j === 0 || j === board.length - 1) {
      for (let i = 0; i < board[0].length; i++) {
        // if 'O' is on the border, add it to safeBorders
        if (board[j][i] === 'O') {
          borderCount++;
          check([j, i]);
        }
      }
    } else { // left and right
      if (board[j][0] === 'O') {
        borderCount++;
        check([j, 0]);
      }
      if (board[j][board[j].length - 1] === 'O') {
        borderCount++;
        check([j, board[j].length - 1]);
      }
    }
  }

  // make board into all 'X'
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(board[i].length).fill('X');
  }

  // if size = 0, end the function here
  if (borderCount === 0) return board;

  // mark the locations from board
  locations.forEach((val, key) => {
    board[val[0]][val[1]] = 'O';
  })
};