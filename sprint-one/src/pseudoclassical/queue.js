var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // for pseudoclassical you just need dont to declare object
  // then assign a prototype chain to the methods
  this.storage = {};
  this.front = 0;
  this.back = 0;
};

// assign the Queue to the methods with prototype chain
Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
  return value;
};

Queue.prototype.dequeue = function() {
  deletedVal = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  return deletedVal;
};

Queue.prototype.size = function () {
  var counter = 0;
  for (let key in this.storage) {
    counter++;
  }
  return counter;
};
// create a new class
var someInstance = new Queue;

