var searchMatrix = function(matrix, target) {

  return check(0,0, matrix, target);
};

const check = function(row, col, matrix, target) {
  if (row > matrix.length - 1 || col > matrix[0].length - 1) return false;
  if (matrix[row][col] === target) return true;
  if (matrix[row][col] > target) return false;

  let right = check(row, col + 1, matrix, target);
  let down = check(row + 1, col, matrix, target);

  return right || down;
}