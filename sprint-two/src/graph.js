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
  //  iterate thru each property of the node
  for (let key in this) {
      if(Number(key) === node) { return true; }
  }
    return false;
};
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let key in this) {

    if (Number(key) === node) {
      delete this[key];
    }
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  if (this[fromNode] && this[toNode]) {
    if (this[fromNode].indexOf(toNode) !== -1 && this[toNode].indexOf(fromNode) !== -1) {
      return true;
    }

  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(this.contains(fromNode) && this.contains(toNode)) {
      if(this[fromNode].indexOf(toNode) === -1) {
       this[fromNode].push(toNode);
      }
      if(this[toNode].indexOf(fromNode) === -1) {
       this[toNode].push(fromNode);
      }
}
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    this[fromNode].splice(this[toNode].indexOf(toNode), 1);
    this[toNode].splice(this[fromNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let node in this) {
    cb(Number(node));
  }
};



