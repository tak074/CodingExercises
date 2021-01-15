var swapPairs = function(head) {
  if (!head || !head.next) return head;

  let Node = function(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
  let newHead  = new Node();
  newHead.next = head;
  let currNode = newHead;

  while (currNode.next && currNode.next.next) {
    let oneAfter = currNode.next;
    let twoAfter = currNode.next.next;
    let threeAfter = currNode.next.next.next;

    currNode.next = twoAfter;
    twoAfter.next = oneAfter;
    oneAfter.next = threeAfter;

    currNode = currNode.next.next;
  }

  return newHead.next;
};