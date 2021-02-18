var levelOrder = function(root) {
  if (!root) return [];
  let res = [];

  res.push([root.val]);

  let countByGeneration = function(currNode, genNum) {
    // if it has child node,
    if (currNode.left || currNode.right) {
      // they should be added to the res[genNum];
      if (!res[genNum]) res[genNum] = [];
      if (currNode.left) {
        res[genNum].push(currNode.left.val);
        countByGeneration(currNode.left, genNum + 1);
      }
      if (currNode.right) {
        res[genNum].push(currNode.right.val);
        countByGeneration(currNode.right, genNum + 1);
      }
    }
  }

  countByGeneration(root, 1);

  return res;
};