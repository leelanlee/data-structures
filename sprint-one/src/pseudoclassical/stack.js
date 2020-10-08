var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.top = 0;
  this.storage = {};
};
// implemented the Stack pseudoclassical with prototype chain
Stack.prototype.push = function(value) {
  this.top++;
  this.storage[this.top] = value;
  return value;
};

Stack.prototype.pop = function() {
  var deletedValue = this.storage[this.top];
  delete this.storage[this.top];
  this.top--;
  return deletedValue;
};

Stack.prototype.size = function() {
  var counter = 0;
  for (key in this.storage) {
    counter++;
  }
  return counter;
};
//declared a new class someinstance
var someInstance = new Stack;


