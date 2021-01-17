var search = function(nums, target) {
  let ans = -1;
  for (let index = 0; index < nums.length; index++) {
      if (nums[index] === target) {
          ans = index;
          break;
      }
  };

  return ans;
};