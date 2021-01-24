var canJump = function(nums) {
  if (nums.length === 1) return true;
  let max = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i] + i);
    if (max <= i) return false;
    if (max >= nums.length - 1) return true;
  }

  return false;
};

var canJump = function(nums) {
  if (nums.length === 1) return true;
  let max = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i] + i);
    if (max <= i) return false;
  }

  return max >= nums.length - 1;
};