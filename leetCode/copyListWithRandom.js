var copyRandomList = function(head) {
  let map = new Map();
  let node = head;

  // create nodes and their copies
  while (node) {
    map.set(node, new Node(node.val));
    node = node.next;
  }

  // create their connections
  node = head;
  while (node) {
    // .next and .random does not have default null.
    map.get(node).next = map.get(node.next) || null;
    map.get(node).random = map.get(node.random) || null;
    node = node.next;
  }

  return map.get(head);
};