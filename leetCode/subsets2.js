var subsetsWithDup = function(nums) {
  nums.sort((a,b) => a - b);
  let set = [[]];
  for (let i = 0; i < nums.length; i++) {
    // single digit subsets
    set.push([nums[i]]);
    let rest = nums.slice(i + 1);
    if (rest.length >= 1) {
      let subsets = subsetsWithDup(rest);
      for (let j = 1; j < subsets.length; j++) {
        set.push([nums[i]].concat(subsets[j]));
      }
    }
    while (nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return set;
};