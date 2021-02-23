var postorderTraversal = function(root) {
    if (!root) return [];
    let res = [];

    let addNode = function(node) {
        if (!node) return null;
        addNode(node.left);
        addNode(node.right);
        res.push(node.val);
    }

    addNode(root);
    return res;
};