var reorderList = function(head) {
  let map = new Map();
  let currNode = head;
  let counter = 0;

  while (currNode) {
    let temp = currNode.next;
    currNode.next = null;
    map.set(counter, currNode);
    counter++;
    currNode = temp;
  }

  currNode = new ListNode();
  for (let i = 0; i < counter / 2; i++) {
    currNode.next = map.get(i);
    currNode = currNode.next;
    if (counter - 1 - i !== i) {
      currNode.next = map.get(counter - 1 - i);
      currNode = currNode.next;
    }
  }

  return head;
};