var rightSideView = function(root) {
  let views = [];

  let getSideView = function(node, depth) {
    if (!node) return;

    views[depth] = node.val;
    getSideView(node.left, depth + 1);
    getSideView(node.right, depth + 1);
  }

  getSideView(root, 0);

  return views;
};