var singleNumber = function(nums) {
  let map = {};
  let single = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
      single[nums[i]] = 1;
    } else if (map[nums[i]] === 1){
      map[nums[i]]++;
      delete single[nums[i]];
    }
  }
  return Number(Object.keys(single)[0]);
};