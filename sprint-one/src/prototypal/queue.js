var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.back = 0;
  someInstance.front = 0;

  return someInstance;
};


var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
  return value;
};

queueMethods.dequeue = function() {
  deletedVal = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  return deletedVal;
};

queueMethods.size = function () {
  var counter = 0;
  for (let key in this.storage) {
    counter++;
  }
  return counter;
};


