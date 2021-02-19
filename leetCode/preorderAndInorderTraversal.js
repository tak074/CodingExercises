function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

var buildTree = function(preorder, inorder) {
  // first number of preorder is the head.
  let head = new TreeNode(preorder[0]);
  // preorder groups things by level, but doesn't specify who gets connected to who
  // inorder groups things by immediate connection.

  let inorderToTree = function(arr) {
    if (arr.length === 1) return new TreeNode(arr[0]);
    else {
      let parent = new TreeNode(arr[Math.floor(arr.length / 2)])
    }
  }
};