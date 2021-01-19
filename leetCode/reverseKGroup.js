var reverseKGroup = function(head, k) {
  if (k === 1) return head;
  let newListTail = null;
  let newListHead = null;

  let startPoint = head;
  let currHead;
  let counter = 0;

  let storageHead = null;
  let storageTail = null;

  let checkLength = function(list) {
    if (list === null) return false;
    let num = 1;
    let currHead = list;
    while (num !== k) {
      if (!currHead.next) {
        return false;
      }
      currHead = currHead.next;
      num++;
    }
    return true;
  };

  while (checkLength(startPoint)) {
    currHead = head;
    // do the reversing;
    while (counter < k) {
      let removing = currHead;
      let currHead = currHead.next;
      if (!newListHead) {
          newListHead = removing;
          newListTail = removing;
          removing.next = null;
      } else {
          removing.next = newListHead;
          newListHead = removing;
      }
      counter++;
    }
    // counter === k at this point
    // add newListHead to storageHead
    if (!storageHead) {
      storageHead = newListHead;
      storageTail = newListHead;
    } else {
      storageTail.next = newListHead;
      storageTail = newListTail;
    }
    // reset for next round;
    newListHead = null;
    newListTail = null;
    counter = 0;
    startPoint = currHead;
  }

  // add the rest
  if (currHead) {
    storageTail.next = currHead;
  }

  return storageHead;

};