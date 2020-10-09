

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //  if an array exists at this index
  if (typeof this._storage[index] !== 'object') {
    this._storage[index] = {};
  }
  this._storage[index][k] = v;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage[index];
  for (let bucketEle in storage) {
    return storage[k];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage[index];
  for (let bucketEle in storage) {
    return delete storage[k];
  }
};

