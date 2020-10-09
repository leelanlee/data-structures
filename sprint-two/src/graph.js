

// Instantiate a new graph
var Graph = function(val) {
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
  //    if a key equals node
    if (+key === node) { delete this[key]; }
  //      delete that property
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //  if both nodes contain each other
  var from = this[fromNode].indexOf(toNode) !== -1;
  var to = this[toNode].indexOf(fromNode) !== -1;
  return from && to;
  //    return true
  //  otherwises return false
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

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
//
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 *



/*
 * Complexity: What is the time complexity of the above functions?
 */



/*
 * Complexity: What is the time complexity of the above functions?
 */


