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




var searchMatrix = function(matrix, target) {
  let binarySearch = function (start, end, nums) {
    if (nums[start] === target || nums[end] === target) return true;
    if (start >= end) return false;
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target || nums[start] === target || nums[end] === target) return true;
    if (nums[mid] > target) return binarySearch(start, mid - 1, nums);
    if (nums[mid] < target) return binarySearch(mid + 1, end, nums);
  }

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] <= target && matrix[i][matrix[i].length - 1] >= target) {
      if (binarySearch(0, matrix[i].length - 1, matrix[i])) return true;
    }
  }

  return false;
};