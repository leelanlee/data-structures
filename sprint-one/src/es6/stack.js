class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.top = 0;
  }
  push(value) {
    this.top++;
    this.storage[this.top] = value;
    return value;
  }
  pop() {
    var deletedVal = this.storage[this.top];
    delete this.storage[this.top];
    this.top--;
    return deletedVal;
  }
  size() {
    var counter = 0;
    for (let key in this.storage) {
      counter++;
    }
    return counter;
  }
}
var someInstance = new Stack();