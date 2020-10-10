var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) { // time complexity: constant
  var child = new Tree(value);
  this.children.push(child);
};

Tree.prototype.contains = function(target) { // time complexity: linear
  var hasTarget = false;

  var checkValue = function(children) {
    if (hasTarget) { return; }

    _.each(children, function(child) {
      if (child.value === target) { hasTarget = true; }
      checkValue(child.children);
    });

  };

  checkValue(this.children);
  return hasTarget;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


