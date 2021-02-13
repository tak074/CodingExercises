var deleteDuplicates = function(head) {
  let empty = false;

  let findHead = function(node) {
    if (node === null) return null;
    if (node.next === null) return node;
    let first = node;
    let second = node.next;
    let headAdjust = false;

    while (first.val === second.val) {
      first = first.next;
      second = second.next;
      if (second === null) {
        empty = true;
        break;
      }
      headAdjust = true;
    }
    if (empty) return null;
    if (headAdjust && second.next !== null && second.val === second.next.val) {
      return findHead(second);
    }
    return headAdjust? second : first;
  }

  // find head
  head = findHead(head);
  if (head === null) return null;

  let tail = head;
  let curr = head;
  while (curr) {
    let nextNode = findHead(curr.next);
    tail.next = nextNode;
    curr = nextNode;
    tail = nextNode;
  }

  return head;
};