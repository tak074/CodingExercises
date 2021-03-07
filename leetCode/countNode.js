var countNodes = function(root) {
  if (!root) return 0;
  // find depth.
  let findDepth = function(node) {
    let depth = 0;
    while (!!node.left) {
      depth++;
      node = node.left;
    }
    return depth;
  }

  const totalDepth = findDepth(root);

  let exist = function(index) {
    let l = 0;
    let r = (2**totalDepth) - 1;
    let currNode = root;
    while (l < r) {
      const m = Math.floor((l + r) / 2);
      if (index > m) {
        // go right
        currNode = currNode.right;
        l = m + 1;
      } else {
        // go left
        currNode = currNode.left;
        r = m;
      }
    }
    return currNode !== null;
  }

  let l = 0;
  let r = (2**totalDepth) - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (exist(m)) {
      // check the right half
      l = m + 1;
    } else {
      // check the left half
      r = m - 1;
    }
  }

  return 2**(totalDepth) - 1 + l;
};