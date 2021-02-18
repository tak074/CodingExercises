var numTrees = function(n) {
  let memo = new Map();

  let buildTree = function(arr) {
    if (arr.length === 0) return [null];
    if (memo.has(arr.join())) return memo.get(arr.join());
    let res = [];

    for (let i = 0; i < arr.length; i++) {
      let left = buildTree(arr.slice(0, i));
      let right = buildTree(arr.slice(i + 1));

      for (currLeft of left) {
        for (currRight of right) {
          let node = new TreeNode(arr[i]);
          node.left = currLeft;
          node.right = currRight;

          res.push(node);
        }
      }
    }

    memo.set(arr, res);
    return res;
  }

  return buildTree([...Array(n)].map((v, i) => i + 1)).length;
};