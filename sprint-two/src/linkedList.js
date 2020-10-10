var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { // time complexity: constant
    var node = new Node(value);

    if (list.head === null) {
      list.head = node;
    } else if (list.head === list.tail) {
      list.head.next = node;
    } else {
      list.tail.next = node;
    }

    list.tail = node;
  };

  list.removeHead = function() { // time complexity: constant
    var oldHead = list.head.value;
    list.head = list.head.next;
    return oldHead;
  };

  list.contains = function(target) { // time complexity: linear
    var node = list.head;

    while (node !== null) {
      if (node.value === target) { return true; }
      node = node.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  this.value = value;
  this.next = null;
};
