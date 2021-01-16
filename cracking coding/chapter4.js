// Q1
let findRoute = function(nodeA, nodeB){
  if (nodeA === nodeB) {
    return [nodeA, nodeB];
  }

  let ans = [];
  let layer = 0;
  let found = false;

  let checkNode = function(currNode, route) {
    route.push(currNode);
    if (currNode === nodeB) {
      found = true;
      ans = route;
    } else {
      if (currNode.connection) {
        currNode.connection.forEach((child) => {
          checkNode(child, route);
        })
      }
    }
  };

  found? ans : null;
};

// Q2
let minimalTree = function(arr) {
  // since arr is sorted,
  let mid = arr[Math.floor(arr.length / 2)];
  let leftArr =  arr.slice(0, mid);
  let rightArr = arr.slice(mid + 1);

  let Graph = function(val, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right; right;
  }

  let parent = new Graph(arr[mid]);
  let leftChild = leftArr[0];
  let righChild = rightArr[0];

  if (left.length > 1) {
    leftChild = minimalTree(leftArr);
  }
  if (right.length > 1) {
    rightChild = minimalTree(rightArr);
  }

  parent.left = leftChild;
  parent.right = rightChild;

  return parent;
}

// Q3

let ListOfDepths = function(tree) {
  if (tree) return [];

  let list = [];
  let listHeads = [];

  let LinkList = function(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }

  (function record(node, depth) {
    let newList = new LinkList(node.val);
    if (!list[node]) {
      listHeads[depth] = newList;
      list[depth] = newList;
    } else {
      let currNode = list[depth];
      currNode.next = newList;
      list[depth] = newList;
    }

    // if left
    if (node.left) {
      record(node.left, depth + 1);
    }
    // if right
    if (node.right) {
      record(node.right, depth + 1);
    })
  })(tree, 0);

  return listHeads;
}

// Q4
let checkBalanced = function(tree) {
  let currNode = tree;
  let pass = true;

  let checkNode = function(node) {
    if (pass && (node.left || node.right)) {
      if (!(node.left && node.right)) {
        pass = false;
      } else {
        checkNode(node.left);
        checkNode(node.right);
      }
    }
  }
  return checkNode(currNode);
}

// Q5

let validateBST = function(tree) {
  let nodes = [];

  function getNodeVal(node) {
    if (node.left) getNodeVal(node.left);
    nodes.push(node.val);
    if (node.right) getNodeVal(node.right);
  }

  let sorted = nodes.sort((a, b) => a - b);

  return nodes === sorted;
}