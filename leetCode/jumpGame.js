var canJump = function(nums) {
  if (nums.length === 1) return true;
  let valid = false;

  // find places that can get to target
  for (let i = 0; i < nums.length - 1; i++) {
    // if they can jump to the last index
    if (nums[i] + i >= nums.length - 1) {
      // if their index !== 0
      if (i !== 0) {
        // recurse as that location as the target
        valid = canJump(nums.slice(0, i + 1));
        if (valid) break;
      } else {
        return true;
      }
    }
  }

  return valid;
};