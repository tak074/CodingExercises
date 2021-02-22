var minimumTotal = function(triangle) {
  // solve bottom up.
  // currRow[index] can go to nextRow[index] or nextRow[index + 1];
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
};