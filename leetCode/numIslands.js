var numIslands = function(grid) {
  let islandCount = 0;
  let findIsland = function(row, col) {
    // set it to zero
    grid[row][col] = '0';
    // check is boundaries
    // check left
    if (grid[row][col - 1] && grid[row][col - 1] === '1') {
      findIsland(row, col - 1);
    }
    // down
    if (grid[row + 1] && grid[row + 1][col] && grid[row + 1][col] === '1') {
      findIsland(row + 1, col);
    }
    // right
    if (grid[row][col + 1] && grid[row][col + 1] === '1') {
      findIsland(row, col + 1);
    }
    // up
    if (grid[row - 1] && grid[row - 1][col] && grid[row - 1][col] === '1') {
      findIsland(row - 1, col);
    }
  }
    // go through every location on the grid
  for (let i = 0; i < grid.length; i++) { // row
    for (let j = 0; j < grid[0].length; j++) { // col
      let currLoc = grid[i][j];
      // if the loc is 1,
      if (currLoc === '1') {
        islandCount++;
        // invoke findIsland();
        findIsland(i, j);
      }
    }
  }

  return islandCount;
};