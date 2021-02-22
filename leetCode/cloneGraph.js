var cloneGraph = function(node) {
  if (!node) return null;
  let map = {};

  let clone = function(graph) {
    if (!graph) return null;
    if (!map[graph.val]) {
      map[graph.val] = new Node(graph.val);
      map[graph.val].neighbors = graph.neighbors.map(clone);
    }
    return map[graph.val];
  }
  return clone(node);
};