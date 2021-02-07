var minPathSum = function(grid) {
  if (grid.length === 1) {
    let total = 0;
    for (let i = 0; i < grid[0].length; i++) {
      total += grid[0][i];
    }
    return total;
  }
  let smallestSum = Infinity;
  let currSum = 0;

  let row = 0;
  let col = 0;

  let checkAndAddSquare = function(r, c, sum) {
    // add the curr Square's value to sum.
    sum += grid[r][c];
    // if sum >= smallestSum;
      // quit.
    if (sum < smallestSum) {
      // if next row exist
      if (r + 1 < grid.length) {
        // recurse the row below
        checkAndAddSquare(r + 1, c, sum);
      }
      // if next col exists
      if (c + 1 < grid[0].length) {
        // recurse the next col
        checkAndAddSquare(r, c + 1, sum);
      }
      if (r + 1 === grid.length && c + 1 === grid[0].length) {
        // if neither exists
        // this is the ending square.
        smallestSum = sum;
      }
    }
  }

  checkAndAddSquare(row, col, currSum);

  return smallestSum;
};


var minPathSum = function(grid) {
  // each path is the sum of previous steps and current square.\
  // each square will stem from the square above or to the left.
  // the smaller sum will be that square's value.

  let r = grid.length;
  let c = grid[0].length;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j <c; j++) {
      //skip the first square.
      if (i > 0 && j > 0) {
        grid[i][j] = Math.min(grid[i][j] + grid[i - 1][j], grid[i][j] + grid[i][j - 1]);
      } else if (i > 0 || j > 0) {
        if (i > 0) {
          grid[i][j] = grid[i][j] + grid[i - 1][j];
        } else {
          grid[i][j] = grid[i][j] + grid[i][j - 1];
        }
      }
    }
  }

  return grid[r - 1][c - 1];
};