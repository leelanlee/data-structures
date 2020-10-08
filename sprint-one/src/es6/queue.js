class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //create constructor with starting values
  constructor() {
    this.storage = {};
    this.front = 0;
    this.back = 0;
  }
  enqueue(value) {
    this.storage[this.back] = value;
    this.back++;
    return value;
  }
  dequeue() {
    var deletedVal = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
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
//declared new class some instances
var someInstances = new Queue();
