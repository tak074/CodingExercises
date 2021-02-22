var sumNumbers = function(root) {
  let totalSum = 0;

  let findASum = function(node, currSum) {
    currSum += node.val;
    if (!node.left && !node.right) {
      totalSum+= Number(currSum);
    } else {
      if (node.left) findASum(node.left, currSum);
      if (node.right) findASum(node.right, currSum);
    }
  }
  findASum(root, '');

  return totalSum;
};