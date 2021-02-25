// method 1
var rotate = function(nums, k) {
  let counter = 0;

  while (counter < k) {
    nums.unshift(nums.pop());
    counter++;
  }

  return nums;
};

// method 2
var rotate = function(nums, k) {
  let rotated = nums.slice(nums.length - k);
  nums.splice(nums.length - k, k);
  nums.splice(0,0,...rotated);

  return nums;
};