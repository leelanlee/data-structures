var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var front = 0;
  var back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[back] = value;
    back++;
  };

  someInstance.dequeue = function() {
    let deletedVal = storage[front];
    delete storage[front];
    front++;
    return deletedVal;
  };

  someInstance.size = function() {
    var counter = 0;
    for (let key in storage) {
      counter++;
    }
    return counter;
  };

  return someInstance;
};
