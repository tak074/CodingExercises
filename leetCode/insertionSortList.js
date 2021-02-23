var insertionSortList = function(head) {
  if (!head) return null;
  // use hash map to keep track of their indexes
  let map = new Map();
  let order = [];
  let currNode = head;
  let counter = 0;

  // sort through order first.
  while (currNode) {
    // add to order
    order.push(currNode.val);
    // re-order
    if (counter > 0) {
      let i = 0;
      let currVal = order[counter - i];
      let prevVal = order[counter - i - 1];
      while (prevVal && currVal < prevVal) {
        let temp = prevVal;
        order[counter - i - 1] = currVal;
        order[counter - i] = temp;

        i++;
        currVal = order[counter - i];
        prevVal = order[counter - i - 1];
      }
      // now currVal has moved either moved down to the front or has found the place
    }
    let nextNode = currNode.next;
    // prevent cycle by cutting off nexts
    currNode.next = null;
    map.set(currNode.val, currNode);

    counter++;
    currNode = nextNode;
  }

  // once the order has been sorted
  // use map to call and connect in a such order.
  head = map.get(order[0]);
  currNode = head;
  for (let j = 1; j < order.length; j++) {
    currNode.next = map.get(order[j]);
    currNode = currNode.next;
  }

  // make the tail.next = null

  return head;
};