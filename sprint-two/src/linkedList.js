var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    var current;
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      current = list.head;

      while (current.next) {
        current = current.next;
      }
      list.tail = node;
      current.next = list.tail;

    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    var currentHead = list.head;
    list.head = list.head.next;
    return currentHead.value;

  };

  list.contains = function(target) {
    current = list.head;
    var ifTrue = false;
    while (current !== null) {
      if (current.value === target) {
        ifTrue = true;
      }
      current = current.next;
    } return ifTrue;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};