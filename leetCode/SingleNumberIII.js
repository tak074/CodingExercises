var singleNumber = function(nums) {
  if (nums.length === 2) return nums;

  let xor = nums.reduce((acc, curr) => acc ^ curr, 0);
  let len = xor.toString(2).length - 1;
  let xor2 = 0;
  for (let i = 0; i < nums.length; i++) {
    xor2 = xor2 ^ (nums[i] >> len);
  }
    console.log(xor, xor2);
  xor = xor ^ xor2;
  return [xor, xor2];
};