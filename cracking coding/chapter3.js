// Q1
// throuogh even spacing method and non-even spacing method

// Q2
var stackWithMin = function() {
  let Stack = function() {
    this.index = 0;
    this.mins = [];
  }

  Stack.prototype.push = function(val) {
    this[this.index] = val;
    if (this.mins.length === 0) {
      this.mins.push(val);
    } else {
      if (this.mins[this.mins.length - 1] >= val) {
        this.mins.push(val);
      }
    }
    this.index++;
  };

  Stack.prototype.pop = function() {
    if (this.index === 0) {
      return this;
    } else {
      let popped = this[index];
      delete this[index];
      this.index--;
      if (popped === this.mins[this.mins.length - 1]) {
        this.mins.pop();
      }
      return popped;
    }
  };

  Stack.prototype.min = function() {
    return this.mins[this.mins.length - 1];
  };
}

// Q3
var q3= function() {
  let Stack = function(capacity) {
    this.index = 0;
    this.isFull = false;
  };

  Stack.prototype.push = function(val) {
    if (this.index < 0) this.index = 0;
    this[this.index] = val;
    this.index++;
    if (this.index > capacity) {
      this.isFull = true;
    }
  };

  Stack.prototype.pop = function() {
    if (this.index < 0) {
      return false;
    } else {
      if (this.index > capacity) {
        this.isFull = false;
      }
      let popped = this[index];
      delete this[index];
      this.index--
      return popped;
    }
  };

  let setOfStacks = function(capacity) {
    this.stacks = [];
    this.stackNum = 0;
  };

  setOfStacks.prototype.pop = function() {
    if (this.stacks.length === 0) {
      return this;
    }
    let currStack = this.stacks[this.stackNum];
    let popped = currStack.pop();

    if (currStack.index === -1){
      delete this.stacks[this.stackNum];
      this.stackNum--;
    };

    return popped;
  };
  setOfStacks.prototype.push = function(val) {
    if (this.stacks.length === 0) {
      let newStack = new Stack(capacity);
      newStack.push(val);
      this.stacks.push(newStack);
    } else {
      let currStack = this.stacks[this.stackNum];
      if (currStack.isFull) {
        // make a new stack
        let newStack = new Stack(capacity);
        newStack.push(val);
        this.stacks.push(newStack);
        this.stackNum++;
      } else {
        // add to this stack
        currStack.push(val);
      }
    }
  };
};

// Q4
// implement two stacks, oldest and newest.
// whenever a new item is added, add it to newest.
// when a oldest item needs to be returned
  // if oldest is empty
    // reverse newest into oldest so the oldest is at the top while the newest is at the bottom.
  // else
    // return the top of the oldest.


// Q5
// let sortThroughStacks = function(stack)
  // let smallestTop = new Stack();
  // let temp = new Stack();
  // while (!stack.isEmpty())
    // let val = stack.pop();
    // fitTheVal
      // if smallestTop stack is empty, add the value.
      // else
        // if val <= smallestTop.peek();
          // add it to the top of smallestTop
        // else
          // move the top value of smallestTop to temp Stack
          // recurse fitTheVal until the stack has been put awayed;

    // while (!temp.isEmpty())
      // smallestTop.push(temp.pop());
  // return smallestTop


  // Q6
  /*
  only dogs and cats, and I can use linkedList.
  I will link one dog, one cat, one dog, one cat in the order they arrive.
  if two dogs arrive in a row, I will create an empty node in between.
   */
  // let QueueOfAnimals = function()
    // let Queue = function(type = null, real = false, next = null=) {
      // this.real = real;
      // this.type = type;
      // this.next = next;
    // }
    // let firstDog;
    // let firstCat;
    // let lastDog;
    // let lastCat;

    // Queue.prototype.add = function()
      // make currNode
      // if both firstDog and firstCat are null
        // currNode will be either firstDog or firstCat depending on its type
        // currNode will be also either lastDog or lastCat depending on its type
      // else
        // if currNode.type is cat
          // if firstCat is null
            // firstDog.next = currNode
            // firstCat = currNode
          // else
            // add it after lastCat.
            // if (!lastCat.next)
              // add a bogus dog Node as its next
              // and add currNode as bogus dog node's next
              // lastCat = currNode;
            // else
              // lastCat.next.next = currNode;
              // lastCat = currNode;
        // else if currNode type is dog
          // if firstDog is null
            // firstCat.next = currNode
            // firstDog = currNode
          // else
            // add it after lastDog.
            // if (!lastDog.next)
              // add a bogus cat Node as its next
              // and add currNode as bogus cat node's next
              // lastDog = currNode;
            // else
              // lastDog.next.next = currNode;
              // lastDog = currNode;

    // Queue.prototype.remove = function(type)
      // let adopting;
      // if type === cat
        // adopting = firstCat;
        // make firstCat a bogus cat;
        // let currCat = firstCat;
        // while (currCat.next.next.real)
          // currCat = firstCat.next.next;
        // firstCat = currCat;
      // else
        // adopting = firstDog;
          // make firstDog a bogus Dog;
          // let currDog = firstDog;
          // while (currDog.next.next.real)
            // currDog = firstDog.next.next;
          // firstDog = currDog;

      // let head = currentstart
      // while (!head.real)
        // head = head.next;
      // currentstart = head;
      // return adopting;

    // Queue.prototype.peek = function()
      //if (!lastCat.next) return lastCat;
      // return lastDog;

    // Queue.prototype.isEmpty = function()
      // if (firstDog === null && firstCat === null) return true;
      // return false;