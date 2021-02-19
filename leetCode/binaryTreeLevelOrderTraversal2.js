var levelOrderBottom = function(root) {
  // use memoization.
  let memo = [];

  let addGen = function(node, genNum) {
    if (!node) return null;
    // add itself to it's generation equivalent. memo[genNum];
    if (!memo[genNum]) memo[genNum] = [];
    memo[genNum].push(node.val);

    // check for its children
    addGen(node.left, genNum + 1);
    addGen(node.right, genNum + 1);
  };
  addGen(root, 0);

  // reverse order of memo.
  memo.reverse();
  // return reversed memo.
  return memo;
};