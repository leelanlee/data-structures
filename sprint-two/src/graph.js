

var Graph = function() {
};

Graph.prototype.addNode = function(node) {
  this[node] = [];
};

Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (+key === node) { return true; }
  }
  return false;
};

Graph.prototype.removeNode = function(node) {
  for (var key in this) {
    if (!Array.isArray(this[key])) { continue; }
    var idx = this[key].indexOf(node);
    if (idx !== -1) {
      this[key].splice(idx, 1);
    }
    if (+key === node) { delete this[key]; }
  }

};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].indexOf(toNode) !== -1;
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) { return null; }
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};


Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toIdx = this[fromNode].indexOf(toNode);
  var fromIdx = this[toNode].indexOf(fromNode);
  if (toIdx === -1 || fromIdx === -1) { return null; }
  this[fromNode].splice(toIdx, 1);
  this[toNode].splice(fromIdx, 1);

};


Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (typeof this[key] === 'function') { continue; }
    cb(+key);
  }
};



