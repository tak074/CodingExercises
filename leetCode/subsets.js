var subsets = function(nums) {
  let totalSubSets = [];

  (function checkSubSet(subSet, index) {
    totalSubSets.push(subSet);
    if (subSet.length === nums.length) {
      return;
    }
    for (let i = index; i < nums.length; i ++) {
      checkSubSet([...subSet, nums[i]], i + 1);
    }
  })([], 0);

  return totalSubSets;
};