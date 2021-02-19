function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

// implemented to make a v shaped tree.
// needs to make it into a more complete shape
  // recursion
    // find middle or linkedList, make it a node.
    // split the rest of linkedlist into left and right
    // recursed left and right values become middle.left and middle.right

    // Q: how do I know the end cases of the linkedList?
    // A: when finding the middle value, also keep track of prev, list right before.
      // and before going through the recursion, set its next as null.

var sortedListToBST = function(head) {
  if (!head) return null;
  if (!head.next) return new TreeNode(head.val);

  let fast = head;
  let slow = head;
  let prev;

  while(fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  let head2 = slow.next;
  // slow will be the root.
  let root = new TreeNode(slow.val);
  let left = sortedListToBST(head);
  let right = sortedListToBST(head2);

  root.left = left;
  root.right = right;

  return root;
};
