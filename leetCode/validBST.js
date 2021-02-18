var isValidBST = function(root) {

  let validate = function(node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;

    // validate left
    if (node.left && node.left.val >= node.val) return false;
    let leftVal = node.left? node.left.val : undefined;
    let left = validate(node.left, leftVal, max);
    // validate right
    if (node.right && node.right.val <= node.val) return false;
    let rightVal = node.right? node.right.val : undefined;
    let right = validate(node.right, min, rightVal);

    return left && right;
  }

  return validate(root, root.val, root.val)
};