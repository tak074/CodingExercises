function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
};


var mergeKLists = function(lists) {
  // if empty
  if (lists.length === 0) return null;

  let res = new ListNode(-10001);
  let currNode = res;

  let heads = [];
  let empty = false;

  // load heads
  for (let i = 0; i < lists.length; i++) {
    // if the LinkedList has been exhausted, replace it with infity
    if (lists[i] === null) {
      heads[i] = Infinity;
    } else {
      heads[i] = lists[i].val;
    }
  }

  while (!empty) {
    // check if every linkedLists are empty.
    if (Math.min(...heads) !== Infinity) {
      // compare between them
      for (let j = 0; j < lists.length; j++) {
        // when come across the smallest val
        if (heads[j] === Math.min(...heads)) {
          // make that as the next Node
          currNode.next = new ListNode(heads[j]);
          currNode = currNode.next;
          lists[j] = lists[j].next;

          if (lists[j] === null) {
            heads[j] = Infinity;
          } else {
            heads[j] = lists[j].val;
          }
        }
      }
    } else {
      // end the loop
      empty = true;
    }
  }

  return res.next;
};

var arrToLink = function(arr) {
  let root = new ListNode(0);
  let curr = root;

  for (let i = 0; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }

  return root.next;
}

var samplesToLink = function(arr) {
  let res = [];
  arr.forEach((link) => {
    res.push(arrToLink(link));
  })

  return res;
}

var samples = [[1,4,5],[1,3,4],[2,6]];
var links = samplesToLink(samples);

mergeKLists(links);


