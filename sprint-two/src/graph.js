var Graph = function() {
};

Graph.prototype.addNode = function(node) { // time complexity: constant
  this[node] = {};
};

Graph.prototype.contains = function(node) { // time complexity: constant
  return this[node] !== undefined;
};

Graph.prototype.removeNode = function(node) { // time complexity: linear
  for (var key in this) {
    delete this[key][node];
  }
  delete this[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode) { // time complexity: constant
  return this[fromNode][toNode] !== undefined;
};

Graph.prototype.addEdge = function(fromNode, toNode) { // time complexity: constant
  this[fromNode][toNode] = toNode;
  this[toNode][fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode) { // time complexity: constant
  delete this[fromNode][toNode];
  delete this[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb) { // time complexity: linear
  for (var key in this) {
    if (typeof this[key] === 'function') { continue; }
    cb(+key);
  }
};


