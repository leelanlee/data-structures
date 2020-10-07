var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // created a someInstant Object to store key values of the storage; top of the stack
  // used the extend method to add the queue methods
  var someInstance = {};
  someInstance.storage = {};
  someInstance.top = 0;

  extend(someInstance, stackMethods);
  return someInstance;

};
var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};
// push function to assign a value to the key of the current top
// which is 1 more than the previous top
// and return pushed value
stackMethods.push = function(value) {
  this.top++;
  this.storage[this.top] = value;
  return value;
};
// deleted the current top of the stack
// update the current top key but subtracting one
// return deleted value
stackMethods.pop = function() {
  var deletedValue = this.storage[this.top];
  delete this.storage[this.top];
  this.top--;
  return deletedValue;
};
// count the current storage size
stackMethods.size = function() {
  var counter = 0;
  for (key in this.storage) {
    counter++;
  }
  return counter;
};

