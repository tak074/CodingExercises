var connect = function(root) {
  let prevs = [];
  let makeLink = function(root, genNum) {
    if (!root || (!root.left && !root.right)) return root;
    if (prevs[genNum]) {
      prevs[genNum].next = root.left? root.left : root.right;
    }
    // next of left
    if (root.left) {
      // if root.right also exists
      if (root.right) {
        // make the right next of left.
        root.left.next = root.right;
      } else {
        //set default
        root.left.next = null;
        // find the next existing value.
        let currNext = root.next;
        while (currNext) {
          if (currNext.left) {
            root.left.next = currNext.left;
            currNext = null;
          } else if (currNext.right) {
            root.left.next = currNext.right;
            currNext = null;
          } else {
            currNext = currNext.next;
          }
        }
        if (!root.left.next) prevs[genNum] = root.left;
      }
    }
    // next of right;
    if (root.right) {
      // set default
      root.right.next = null;
      // find the next existing value.
      let currNext = root.next;
      while (currNext) {
        if (currNext.left) {
          root.right.next = currNext.left;
          currNext = null;
        } else if (currNext.right) {
          root.right.next = currNext.right;
          currNext = null;
        } else {
          currNext = currNext.next;
        }
      }
      if (!root.right.next) prevs[genNum] = root.right;
    }
    makeLink(root.left, genNum + 1);
    makeLink(root.right, genNum + 1);
    return root;
  };

  return makeLink(root, 0);
}