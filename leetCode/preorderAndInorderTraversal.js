function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

var buildTree = function(pre, inorder) {
  // preorder groups things by level, but doesn't specify who gets connected to who
  // inorder groups things by immediate connection.
  if (inorder.length === 1) return new TreeNode(inorder[0]);
  if (inorder.length === 0) return null;
  // first number from pre that is has index !== -1 is the root in inorder.
  let index = 0;
  let parentIndex = inorder.indexOf(pre[index]);
  while (parentIndex === -1) {
    index++;
    parentIndex = inorder.indexOf(pre[index]);
  }
  // pre[index] is the root of this in.
  let parent = new TreeNode(pre[index]);
  let left = buildTree(pre.slice(index + 1), inorder.slice(0, parentIndex));
  let right = buildTree(pre.slice(index + 1), inorder.slice(parentIndex + 1));

  parent.left = left;
  parent.right = right;

  return parent;
};