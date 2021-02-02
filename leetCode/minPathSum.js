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