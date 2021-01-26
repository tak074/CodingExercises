var rotateRight = function(head, k) {
  if (head === null) return null;
  if (k === 0 || !head.next) return head;

  let currNode = head;
  let counter = 0;
  let nodes = [];
  let looped = false;

  while (currNode.next) {
    nodes.push(currNode);
    currNode = currNode.next;
  }
  nodes.push(currNode);

  // currNode is now the last node
  let newIndex = (nodes.length - (k % nodes.length)) % nodes.length;
  let newHead = nodes[newIndex];
  // check if the newHead is the old head, which means newIndex === 0;
  if (newHead === head) {
    return head;
  } else {
    // cut the connection between the tail and the newHead

    nodes[newIndex - 1].next = null;
    // connect former head and former tail
    currNode.next = head;
    return newHead;
  }
};