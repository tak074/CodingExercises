var maxProduct = function(nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return nums[0];

  let maxes = [];
  for (let i = 0; i < nums.length; i++) {
    let currProd = nums[i];
    let currMaxArr = [currProd];
    for (let j = i + 1; j < nums.length; j++) {
      currProd *= nums[j];
      currMaxArr.push(currProd);
    }
    maxes[i] = Math.max(...currMaxArr);
  }

  return Math.max(...maxes);
};