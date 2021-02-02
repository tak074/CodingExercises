var search = function(nums, target) {
  let first = nums[0];
  let counter = 0;

  if (first === target) {
    return 0;
  }

  if (first < target) {
    while (first !== target) {
      // add last into the front
      nums.splice(0, 0, nums[nums.length - 1]);
      // update first
      first = nums[0];
      // increase counter
      counter++;
    }
    return nums.length - counter;
  } else {
    while (first !== target) {
      // add first into the end
      nums.splice(nums.length - 1, 0, nums[0]);
      // update first
      first = nums[0];
      // increase counter
      counter++;
    }
    return counter;
  }

  return -1;
};