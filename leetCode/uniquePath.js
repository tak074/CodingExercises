var uniquePaths = function(m, n) {
  let row = 0;
  let col = 0;
  let solutions = 0;
  (function checkSquare (r, c) {
    if (r === m - 1) {
      solutions++;
    } else {
      // if not the last row
      // check if last col
      if (c === n - 1) {
        // go down
        checkSquare(r + 1, c);
      } else {
        // neither last col or last row
        for (let i = 0; i < 2; i++) {
          if (i === 0) {
            // go down
            checkSquare(r + 1, c);
          } else {
            checkSquare(r, c + 1);
          }
        }
      }
    }
  })(row, col);

  return solutions;
};