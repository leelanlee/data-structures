var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // used the Object create to incorporate prototypal inheritance
  var someInstance = Object.create(stackMethods);
  someInstance.top = 0;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};



stackMethods.push = function(value) {
  this.top++;
  this.storage[this.top] = value;
  return value;
};

stackMethods.pop = function() {
  var deletedValue = this.storage[this.top];
  delete this.storage[this.top];
  this.top--;
  return deletedValue;
};

stackMethods.size = function() {
  var counter = 0;
  for (key in this.storage) {
    counter++;
  }
  return counter;
};

