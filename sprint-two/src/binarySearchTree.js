// Specs have been updated to handle es6 instantiation pattern

class BinarySearchTree {
  constructor (value) {
    this.value = value;
    this.left = null; // smaller than current node value
    this.right = null; // larger than current node value
  }

  insert(value) { // time complexity: logarithmic
    var newTree = new BinarySearchTree(value);

    var checkChild = function(child) {
      if (value > child.value) {
        child.right ? checkChild(child.right) : child.right = newTree;
      } else if (value < child.value) {
        child.left ? checkChild(child.left) : child.left = newTree;
      }
    };

    checkChild(this);
  }

  contains(value) { // time complexity: logarithmic
    var result = false;

    var checkValue = function (child) {
      if (result || child === null) { return; }
      if (value === child.value) { result = true; }
      value > child.value ? checkValue(child.right) : checkValue(child.left);
    };

    checkValue(this);
    return result;
  }

  depthFirstLog(cb) { // time complexity: linear

    var invokeCb = function(tree) {
      cb(tree.value);
      if (tree.left) { invokeCb(tree.left); }
      if (tree.right) { invokeCb(tree.right); }
    };

    invokeCb(this);
  }
}
