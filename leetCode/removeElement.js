var removeElement = function(nums, val) {
  let i = 0;
  while (nums[i] || nums[i] === 0) {
    if (nums[i] === val) nums.splice(i, 1);
    else i++;
  }
};