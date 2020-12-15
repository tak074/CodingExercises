var rob = function(nums) {
  var curr = 0;
  var prev = 0;

  for (var i = 0; i < nums.length; i++) {
    var tmp = curr;
    curr = Math.max(nums[i] + prev, curr);
    prev = tmp;
  }

  return curr;
};