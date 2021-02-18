var isValidBST = function(root) {

  let validate = function(node, min, max) {
    if (!node) return true;

    // validate left
    if (min && node.val <= min.val) return false;
    let left = validate(node.left, min, node);
    // validate right
    if (max && node.val >= max.val) return false;
    let right = validate(node.right, node, max);

    return left && right;
  }

  return validate(root, null, null);
};