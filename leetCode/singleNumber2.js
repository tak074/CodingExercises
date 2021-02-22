var singleNumber = function(nums) {
  let map = {};
  let single = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
      single += nums[i];
    } else if (map[nums[i]] === 1){
      map[nums[i]]++;
      single -= nums[i];
    }
  }
  return single;
};

var singleNumber = function(nums) {
  let map = {};

  nums.forEach((n) => {
      map[n] = map[n]? map[n] + 1 : 1;
      if (map[n] === 3) delete map[n];
  })
  return Object.keys(map)[0];
};