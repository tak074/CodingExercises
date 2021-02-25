const maxDepth = function(root) {
  if (!root) return 0;
  let maxDepth = 1;

  const checkDepth = function(node, depth) {
    if (!node.left && !node.right) {
      maxDepth = Math.max(maxDepth, depth);
      return;
    } else {
      if (node.left) checkDepth(node.left, depth + 1);
      if (node.right) checkDepth(node.right, depth + 1);
    }
  }

  checkDepth(root,1);

  return maxDepth;
}