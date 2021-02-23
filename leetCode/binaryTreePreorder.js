var preorderTraversal = function(root) {
    if (!root) return [];
    let res = [root.val];

    let addNode = function(node) {
        if (!node) return null;
        if (node.left) res.push(node.left.val);
        addNode(node.left);
        if (node.right) res.push(node.right.val);
        addNode(node.right);
    }

    addNode(root);
    return res;
};