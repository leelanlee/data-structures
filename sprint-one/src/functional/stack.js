var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var storageSize = 0;
  for (let key in storage) {
    storageSize++;
  }


  // Implement the methods below
  someInstance.push = function(value) {
    storageSize++;
    storage[storageSize] = value;
    return storage[storageSize];
  };

  someInstance.pop = function() {
    var deletedInstance = storage[storageSize];
    delete storage[storageSize];
    storageSize--;
    return deletedInstance;
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
