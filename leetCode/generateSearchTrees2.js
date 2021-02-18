var TreeNode = function(val = 0, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var generateTrees = function(n) {
  let memo = {};

  let buildTree = function(arr) {
    if (arr.length === 0) return [null];
    if (memo[arr.join()]) return memo[arr.join()];

    let res = [];

    for (let i = 0; i < arr.length; i++) {
      let left = buildTree(arr.slice(0, i));
      let right = buildTree(arr.slice(i + 1));
      for (let currLeft of left) {
        for (let currRight of right) {
          let currNode = new TreeNode(arr[i]);
          currNode.left = currLeft;
          currNode.right = currRight;
          res.push(currNode);
        }
      }
    }

    memo[arr.join()] = res;
    return res;
  }

  let nums = [];
  for (let j = 0; j < n; j++) {
    nums.push(j + 1);
  }

  return buildTree(nums);
};