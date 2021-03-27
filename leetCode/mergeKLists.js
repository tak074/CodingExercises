function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
};


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