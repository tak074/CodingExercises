var pathSum = function(root, targetSum) {
  // take care of currSum issue.
  let routes = [];

  let traverse = function(node, currSum, route) {
    if (!node) return null;
    // update info
    currSum += node.val;

    if ((currSum === targetSum) && (!node.left && !node.right)) {
      // if its not a leaf, return false
      routes.push([...route, node.val]);
    } else {
      // traverse down its path
      traverse(node.left, currSum, [...route, node.val]);
      traverse(node.right, currSum, [...route, node.val]);
    }
  }

  traverse(root, 0, []);
  return routes;
};