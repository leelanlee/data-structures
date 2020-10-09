var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value) {
  // call a new tree
  var child = new Tree(value);
  // push it to newTree children
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = false;

  var hasTarget = function(tree) {
    if (tree.value === target) {
      result = true;
    }
    if (tree.children.length > 0) {

      _.each(tree.children, function(child) {
        hasTarget(child);
      });

    }
  };
  hasTarget(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
