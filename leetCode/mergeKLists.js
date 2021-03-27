function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
};

// method 1. create new list with sorted nums
var mergeKLists = function(lists) {
  let head = new ListNode();
  let nums = [];

  for (let i = 0; i < lists.length; i++) {
    let curr = lists[i];
    while (curr) {
      nums.push(curr.val);
      curr = curr.next;
    }
  }

  nums.sort((a,b) => a - b);

  let curr = head;
  for (let j = 0; j < nums.length; j++) {
    let node = new ListNode(nums[j]);
    curr.next = node;
    curr = curr.next;
  }

  return head.next;
};

// method 2 add the smallest amongst the head each time
var mergeKLists = function(lists) {
  let head = new ListNode();
  let curr = head;

  while (lists.some((list) => list !== null)) {
    let smallestVal = Infinity;
    let smallestIndex = -1;
    // find the value and index of the smallest node.
    lists.forEach((list, i) => {
      if (list && list.val < smallestVal) {
        smallestVal = list.val;
        smallestIndex = i;
      }
    })
    curr.next = new ListNode(smallestVal);
    lists[smallestIndex] = lists[smallestIndex].next;
    curr = curr.next;
  }
  return head.next;
};

//method3 iterate down the list until it finds a place
var mergeKLists = function(lists) {
  if (lists.length === 0) return null;
  let head = new ListNode();
  head.next = lists[0];
  for (let i = 1; i < lists.length; i++) {
    let curr = head.next;
    let prev = head;
    let newNode = lists[i];
    while (!!newNode) {
      if (!curr) {
        prev.next = newNode;
        break;
      }
      if (newNode.val < curr.val) {
        let temp = newNode.next;
        prev.next = newNode;
        prev = newNode;
        newNode.next = curr;
        newNode = temp;
      } else {
        prev = curr;
        curr = curr.next;
      }
    }
  }

  return head.next;
};