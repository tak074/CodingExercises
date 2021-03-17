var PeekingIterator = function(iterator) {
  this.list = iterator;
  this.peeked = null;
};

/**
* @return {number}
*/
PeekingIterator.prototype.peek = function() {
  if (this.peeked === null) {
      this.peeked = this.next();
  }
  return this.peeked;
};

/**
* @return {number}
*/
PeekingIterator.prototype.next = function() {
  if (this.peeked === null) {
      return this.list.next();
  } else {
      let oldPeeked = this.peeked;
      this.peeked = null;
      return oldPeeked;
  }
};

/**
* @return {boolean}
*/
PeekingIterator.prototype.hasNext = function() {
  return this.peeked || this.list.hasNext();
};