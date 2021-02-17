// recursion
var inorderTraversal = function(root) {
    // return the order as array
    if (root === null) return [];
    let res = [];

    let order = function(node) {
        if (node.left !== null) order(node.left);
        res.push(node.val);
        if (node.right !== null) order(node.right);
    }
    order(root);

    return res;
};

// iteratively
var inorderTraversal = function(root) {
    let stack = [];
    let res = [];
    let curr = root;
  
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
    }
  
    return res;
};