var detectCycle = function(head) {
  if (!head) return head;
  if (!head.next || !head.next.next) return null;
  let slow = head.next;
  let fast = head.next.next;

  while (fast !== slow ) {
    if (!fast || !fast.next) return null;
    fast = fast.next.next;
    slow = slow.next
  }

  // fast and slow are at the intersection
  slow = head;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
};