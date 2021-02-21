var flatten = function(root) {

  let roundRobin = function(currNode, currTail) {
    if (!currNode) return currTail;
    let left = currNode.left;
    let right = currNode.right;

    if (!left && !right) return currTail;

    currNode.right = left;
    currNode.left = null;
    currTail = currNode.right? currNode.right : currNode;
    if (left) currTail = roundRobin(left, left);

    currTail.right = right;
    if (right) currTail = roundRobin(right, right);

    return currTail;
  }
  roundRobin(root, root);

  return root;
};