var reverseKGroup = function(head, k) {
  if (k === 1) return head;

  let res = new ListNode();
  let curr = head;
  let prev = res;

  let hasKNode = function(node) {
   let counter = 0;
   while (node && counter < k) {
     node = node.next;
     counter++;
   }
   return counter === k;
  }

  // while k number of nodes exists.
  while (hasKNode(curr)) {
    // needs prev and next. (before the group, and after the group)
    let counter = 0;
    let reverse = null;
    let last = curr;
    // flip the group
    while (counter < k) {
     if (!reverse) {
       reverse = curr;
       curr = curr.next;
       reverse.next = null;
     } else {
       let temp = curr.next;
       curr.next = reverse;
       reverse = curr;
       curr = temp;
     }
     counter++;
    }
    // curr is the next
    // reverse is the head of reversed list.
    // connect with prev and next
    prev.next = reverse
    last.next = curr;
    // update prev location.
    prev = last;
  }

  return res.next;
 };