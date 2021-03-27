var mergeTwoLists = function(l1, l2) {
  let head = new ListNode();
  let curr = head;
  while (l1 || l2) {
    if (l1 === null) {
      curr.next = l2;
      l2 = l2.next;
    } else if (l2 === null) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      if (l1.val < l2.val) {
        curr.next = l1;
        l1 = l1.next;
      } else {
        curr.next = l2;
        l2 = l2.next;
      }
    }
    curr = curr.next;
  }

  return head.next;
};