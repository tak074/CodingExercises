// LinkedList method
let LinkedList = function(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

var kthSmallest = function(root, k) {
  // create an inorder LinkedList through recursion.
  let head = new LinkedList;
  let prev = head;
  prev.next = new LinkedList(root.val);
  let curr = prev.next;

  let createChain = function(node, prev, curr) {
    if (node.left) {
      let newNode = new LinkedList(node.left.val);
      // prev - new - curr
      newNode.next = curr;
      prev.next = newNode;
      createChain(node.left, prev, newNode);
    }
    if (node.right) {
      let newNode = new LinkedList(node.right.val);
      // curr - new - curr.next
      newNode.next = curr.next;
      curr.next = newNode;
      createChain(node.right, curr, newNode);
    }
  }

  createChain(root, head, curr);

  // find the Kth node
  while (k > 0) {
    head = head.next;
    k--;
  }

  return head.val;
};

// simple counter method
var kthSmallest = function(root, k) {
  let counter = 0;
  let searching = true;
  let res = null;
  let traverse = function(node) {
    if (!searching) return;
    if (!node) return;

    traverse(node.left);
    counter++;
    if (counter === k) {
      searching = false;
      res = node.val;
    }
    traverse(node.right);
  }

  return res;
};