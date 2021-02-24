var findMin = function(nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.min(...nums);
  if (nums[0] >= nums[nums.length - 1]) {
    let midIndex = Math.floor(nums.length / 2);
    if (nums[midIndex] < nums[midIndex - 1]) return nums[midIndex];
    if (nums[0] <= nums[midIndex]) {
      return findMin(nums.slice(midIndex + 1));
    } else if (nums[0] > nums[midIndex]){
      return findMin(nums.slice(0, midIndex));
    }
  }
  return nums[0];
};