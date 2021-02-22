var minimumTotal = function(triangle) {
  // you can only add from top to bottom
  // currRow[index] can go to nextRow[index] or nextRow[index + 1];
  let currSmallest = Infinity;

  let traverse = function(currSum, index, rowCount) {
    // first path
    let sum1 = currSum + triangle[rowCount][index];
    if (rowCount === triangle.length - 1) {
      currSmallest = Math.min(currSmallest, sum1);
    } else {
      traverse(sum1, index, rowCount + 1);
    }

    // second path
    if (triangle[rowCount].length > index + 1) {
      let sum2 = currSum + triangle[rowCount][index + 1];
      if (rowCount === triangle.length - 1) {
        currSmallest = Math.min(currSmallest, sum2);
      } else {
        traverse(sum2, index + 1, rowCount + 1);
      }
    }
  }

  traverse(0, 0, 0);
  return currSmallest;
};