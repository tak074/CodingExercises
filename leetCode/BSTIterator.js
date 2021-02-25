var BSTIterator = function(root) {
  this.index = -1;
  this.order = [];

  let temp = [];
  let recordOrder = function(node) {
    if (!node) return null;

    recordOrder(node.left);
    temp.push(node.val);
    recordOrder(node.right);
  }
  recordOrder(root);
  this.order = temp;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  this.index++;
  return this.order[this.index];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return !!this.order[this.index + 1] || this.order[this.index + 1] === 0;
};