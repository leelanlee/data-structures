var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) { // time complexity: constant
  this._storage[item] = item;
};

setPrototype.contains = function(item) { // time complexity: constant
  return this._storage[item] !== undefined;
};

setPrototype.remove = function(item) { // time complexity: constant
  delete this._storage[item];
};
