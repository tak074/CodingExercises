var TreeNode = function(val = 0, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var generateTrees = function(n) {
  // each treeNode(i) 1 <= i <= n can be the root.
  // make tree left with numbers less than i,
  // make tree right with numbers greater than i.

  // since each left and right tree will be made with a range of numbers. use array for the range.

  // for each combinations of left and right
  // make a set and add it to res.

  let memo = new Map();

  let buildTree = function(arr) {
    if (arr.length === 0) return [null];
    if (memo.has(arr.join())) return memo.get(arr.join());

    let res = [];
    for (let i = 0; i < arr.length; i++) {
      let left = buildTree(arr.slice(0, i));
      let right = buildTree(arr.slice(i + 1));

      // for each combinations of left and right trees.
      for (currLeft of left) {
        for (currRight of right) {
          let node = new TreeNode(arr[i]);
          node.left = currLeft;
          node.right = currRight;

          // add it to res;
          res.push(node);
        }
      }
    }
    memo.set(arr.join(), res);
    return res;
  }

  return buildTree([...Array(n)].map((val, index) => index + 1));
};