var detectCycle = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next && fast.next.next) {
    if (slow === fast) {
      slow = head;
      while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
      }
      return fast;
    }
    fast = fast.next.next;
    slow = slow.next
  }

  return null;
};