var partition = function(head, x) {
  let linkedList = function(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }

  // create two linkedLists
  let lessThan = new linkedList();
  let res = lessThan;
  let tail = lessThan;
  let rest = new linkedList();
  let restHead = rest;
  let restTail = rest;

  // loop through the linkedList
  while (head !== null) {
    // add it to either fo the linkedLists
    if (head.val < x) {
      lessThan.next = head;
      tail = head;
      lessThan = lessThan.next;
    } else {
      rest.next = head;
      rest = rest.next;
      restTail = head;
    }
    head = head.next;
  }

  restTail.next = null;

  // combine both linkedLists.
  tail.next = restHead.next;

  // return the combined linkedList
  return res.next;
};