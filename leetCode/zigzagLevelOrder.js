var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let res = [];

  res.push([root.val]);

  let organizeByGeneration = function(node, genNum) {
    if (node.left || node.right) {
      if (!res[genNum]) res[genNum] = [];
      if (node.left) {
        if (genNum % 2 === 0) {
          res[genNum].push(node.left.val);
        } else {
          res[genNum].unshift(node.left.val);
        }
        organizeByGeneration(node.left, genNum + 1);
      }
      if (node.right) {
        if (genNum % 2 === 0) {
          res[genNum].push(node.right.val);
        } else {
          res[genNum].unshift(node.right.val);
        }
        organizeByGeneration(node.right, genNum + 1);
      }
    }
  };

  organizeByGeneration(root, 1);

  return res;
};