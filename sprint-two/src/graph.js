

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //  create a new graph with value of the input node
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (+key === node) { return true; }
  }

  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
// iterate thru Graph
  for (var key in this) {
    if (!Array.isArray(this[key])) { continue; }
    var idx = this[key].indexOf(node);
    if (idx !== -1) {
      this[key].splice(idx, 1);
    }
    //    if a key equals node
    if (+key === node) { delete this[key]; }
  //      delete that property
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //  if both nodes contain each other
  return this[fromNode].indexOf(toNode) !== -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //  if one node doesn't exist, end function
  if (!this.contains(fromNode) || !this.contains(toNode)) { return null; }
  //  push the fromNode into the toNode
  this[fromNode].push(toNode);
  //  push the toNode into the fromNode
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



