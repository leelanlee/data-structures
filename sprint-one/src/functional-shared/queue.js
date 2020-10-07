var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // created a someInstant Object to store key values of the storage; front of the line; the back of the line
  // used the extend method to add the queue methods
  var someInstance = {};
  someInstance.storage = {};
  someInstance.back = 0;
  someInstance.front = 0;
  extend(someInstance, queueMethods);
  return someInstance;


};
// created an extend method to combine someInstance with queue methods
var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
// create object of queue methods
var queueMethods = {};
// enqueue should assign a value to storage with the back key value
// and return added value
queueMethods.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
  return value;
};
// dequeue should delete from the front of the queue and move the front value up by one
// return deleted value
queueMethods.dequeue = function() {
  deletedVal = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  return deletedVal;
};
// count the current storage size
queueMethods.size = function () {
  var counter = 0;
  for (let key in this.storage) {
    counter++;
  }
  return counter;
};



