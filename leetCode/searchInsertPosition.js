var searchInsert = function(nums, target) {
  let i = 0;
  for (i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (currNum >= target) {
      return i;
    }
  }

  return i;
};


var searchInsert = function(num, target) {
  if (target > num[num.length - 1]) return num.length;
  if (target < num[0]) return 0;

  const binaryPositionSearch = function(arr, start, end) {
    if (start > end) return start;
    const midPoint = Math.floor((start + end) / 2);

    if (arr[midPoint] === target) return midPoint;
    if (arr[midPoint] < target) return binaryPositionSearch(arr, midPoint + 1, end);
    else if (arr[midPoint] > target) return binaryPositionSearch(arr, start, midPoint - 1);
  }

  return binaryPositionSearch(num, 0, num.length - 1);
}