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