// Q1
var removeDup = function(list) {
  let vals = {};
  let node = function(val = 0, next = null) {
    this.val = val;
    this.next = next;
  };

  let root = new node();
  let temp = root;

  // go through each node of the list
  let curr = list;
  while (!!curr.next) {
    // if current value doesn't exists in vals
    if (!vals[curr.val]) {
      // add current value to vals
      vals[curr.val] = true;
      // prev = current node
      temp.next = curr;
    }
    curr = curr.next;
  }

  return root.next;
}

// Q2
var kthLast = function(k, list) {

  let curr = list;
  let vals = [];

  while (!!curr) {
    vals.push(curr.val);
    curr = curr.next;
  }

  return vals[vals.length - k];
}

// Q3
var removeMiddleNode = function(list) {
  if (!list.next || !list.next.next) {
    return list;
  }

  let slow = list;
  let prevSlow;

  let fast = list;
  while (!!fast.next.next || !!fast.next) {
    prevSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prevSlow.next = slow.next;

  return list;
}

// Q4
var partitionList = function(list, num) {
  let curr = list;
  let prev;
  let first = true;

  let node = function(val = 0, next = null) {
    this.val = val;
    this.next = next;
  };

  let greaters = new node();
  let currGreat = greaters;
  while (!!curr.next) {
    if (curr.val >= num) {
      currGreat.next = curr;
      currGreat = currGreat.next;
      if (!first) prev.next = curr.next;
      currGreat.next = null;
    }
    prev = curr;
    if (first) first = false;
    curr = curr.next;
  };

  // curr is the last node.
  // connect greaters.next as curr.next
  curr.next = greaters.next;

  return list;
}

// Q5
var sumLists = function(list1, list2) {
  let num1 = [];
  let num2 = [];

  while (list1.next) {
    num1.unshift(list1.val);
    list1 = list1.next;
  }

  while (list2.next) {
    num2.unshift(list2.val);
    list2 = list2.next;
  }

  num1 = Number(num1.join(''));
  num2 = Number(num2.join(''));
  return num1 + num2;
}

// Q6
var checkPalindrome = function(list) {
  let vals = '';
  let reverse = '';
  if (list && !list.next) return true;
  while (list.next) {
    vals = vals + list.val;
    reverse = list.val + reverse;
    list = list.next;
  }
  return vals === reverse;
}

// Q7
var findIntersection = function(list1, list2) {
  let node = function(val = 0, next = null) {
    this.val = val;
    this.next = next;
  };
  // remember the last node of list1
  let curr1 = list1;
  let prev1 = new node(1);
  // remember the last node of list2
  let curr2 = list2;
  let prev2 = new node(2);

  if (!curr1.next) last1 = curr1;
  if (!curr2.next) last2 = curr2;

  // loop through list1
  while (curr1.next) {
    // make it into doubly linked list
    curr1.prev = prev1;
    prev1 = curr1;
    curr1 = curr1.next;
  }

  //loop through list2
  while (curr2.next) {
    // make it into doubly linked list
    curr2.prev = prev2;
    prev2 = curr2;
    curr2 = curr2.next;
  }

  // if their last nodes are the same, they are intersected
  if (curr1 === curr2) {
    while (curr1 === curr2) {
      curr1 = curr1.prev;
      curr2 = curr2.prev;
    }
    return curr1;
  } else {
    // else
    return 'Not Intersecting';
  }
};

// Q8
var findLoopStart = function(list) {
  // find out if there's collision
  let slow = list;
  let fast = list;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }
  //if there is
  if (slow === fast) {
    // set slow to the head
    slow = list;
    // increment slow and fast one at a time until they collide
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }
    return fast;
  } else {
    return null;
  }

};