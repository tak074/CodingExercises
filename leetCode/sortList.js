var sortList = function(head) {
  if (!head) return null;
  if (!head.next) return head;

  let vals = [];
  let currNode = head;
  while(currNode) {
    vals.push(currNode.val);
    currNode = currNode.next;
  }
  vals.sort((a,b) => {return a - b});

  currNode = head;
  let i = 0;
  while (currNode) {
    currNode.val = vals[i];
    i++;
    currNode = currNode.next;
  }

  return head;
};