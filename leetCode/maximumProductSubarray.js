var maxProduct = function(nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return nums[0];

  let maxes = [nums[0]];
  nums[0] = [nums[0], nums[0]];
  for (let i = 1; i < nums.length; i ++) {
    let currNum = nums[i];
    let products = [currNum];
    products.push(nums[i - 1][0] * currNum);
    products.push(nums[i - 1][1] * currNum);
    nums[i] = [Math.min(...products), Math.max(...products)];
    maxes.push(Math.max(...products));
  }

  return Math.max(...maxes);
};