var insertionSortList = function(head) {
  if (!head) return null;

  let sorted = new ListNode(-Infinity);

  while (head) {
    let currNode = new ListNode(head.val);
    let currHead = sorted;
    let prev = sorted;
    while (currHead && currHead.val < currNode.val) {
      prev = currHead;
      currHead = currHead.next
    }
    prev.next = currNode;
    currNode.next = currHead;

    head = head.next;
  }

  return sorted.next;
};