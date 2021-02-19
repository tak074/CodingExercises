var buildTree = function(inorder, postorder) {
  // last number of postorder is the root.
  if (inorder.length === 1) return new TreeNode(inorder[0]);
  if (inorder.length === 0) return null;

  let index = postorder.length - 1;
  while (inorder.indexOf(postorder[index]) === -1) {
    index--;
  }
  // postorder[index] is now the root value.
  let parentIndex = inorder.indexOf(postorder[index]);

  let parent = new TreeNode(postorder[index]);
  let left = buildTree(inorder.slice(0, parentIndex), postorder.slice(0, index));
  let right = buildTree(inorder.slice(parent + 1), postorder.slice(0, index));

  parent.left = left;
  parent.right = right;

  return parent;
};