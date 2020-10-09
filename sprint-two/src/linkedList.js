var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
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

  list.removeHead = function() {
    var newHead = list.head.next;
    var oldHeadValue = list.head.value;
    list.head = newHead;
    return oldHeadValue;
  };

  list.contains = function(target) {
    var current = list.head;

    while (current !== null) {
      if (current.value === target) { return true; }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};