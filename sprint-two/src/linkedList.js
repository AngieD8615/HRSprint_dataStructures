var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    helper = (node) => {
      // base case:
      if (node.next === null) {
        node.next = {value: value, next: null};
        this.tail = {value: value};
      // non base case:
      } else {
        helper(node.next);
      }
    };

    if (this.head === null) {
      this.head = {value: value, next: null};
      this.tail = {value: value};
    } else {
      helper(this.head);
    }
  };

  list.removeHead = function() {
    let formerHead = this.head.value;
    this.head = this.head.next;
    return formerHead;
  };

  list.contains = function(target) {
    helper = (node) => {
      // base case:
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      // non base case
      } else {
        return helper(node.next);
      }
    };
    return helper(this.head);

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
