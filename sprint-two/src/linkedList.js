var LinkedList = function() {
  var list = {};
  list.head = {value: null};
  list.tail = {value: null};

  list.addToTail = function(value) {
    if (this.head.value === null) {
      this.head.value = {
        value: value,
        next: null
      };
    }
    this.tail = {value: value};
  };

  list.removeHead = function() {
    this.head.value = this.head.value.next;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
