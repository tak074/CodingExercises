var removeNthFromEnd = function(head, n) {

  let storage = [];
  let currNode = head;

  // go through each node
  while (currNode.next) {
    if (storage.length <= n) {
      storage.push(currNode);
    } else {
      storage.shift();
      storage.push(currNode);
    }
      // console.log(currNode);
    currNode = currNode.next;
  }

  storage.push(currNode);
  // currNode ==== last node.
  // storage = [...., 3rd last, 2nd last, last];
  // storage.length = n + 1;

  let nodeIndex = storage.length - n;

  if (storage[nodeIndex] === head) {
    return head.next;
  } else {
    let previousNode = storage[nodeIndex - 1];
    previousNode.next = storage[nodeIndex].next;

    return head;
  }

};