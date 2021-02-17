// reverse a linked list from position m to n. Do it in one-pass.
// 1 <= m <= n

var reverseBetween = function(head, m, n) {
  if (m === n ) return head;
  let reversed;
  let reversedTail;
  let originalTail;

  let ListNode = function(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }

  let starter = new ListNode();
  let currNode = head;
  let counter = 1;

  originalTail = starter;

  // go through each linkedList
  while (!!currNode) {
    // once we are at m,
    let nextHead;
    if (counter === m) {
      nextHead = currNode.next;
      // start adding it to reversed
      reversed = currNode;
      reversedTail = currNode;
      currNode = nextHead;
    } else if (counter > m && counter < n) {
      nextHead = currNode.next;
      currNode.next = reversed;
      reversed = currNode;
      currNode = nextHead;
    } else if (counter === n) {
      nextHead = currNode.next;
      currNode.next = reversed;
      originalTail.next = currNode;
      reversedTail.next = nextHead;
      currNode = nextHead;
    } else {
      originalTail = currNode;
      currNode = currNode.next;
    }

    counter++;
  }
  // connect the original and the rest

  return m === 1? starter.next : head;
};