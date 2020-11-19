var LinkedList = function() {
  var list = {};
  list.head = new Node(null);
  list.tail = new Node(null);

  list.addToTail = function(value) {
    let end = new Node(value);
    if (this.head.value === null) {
      this.head = end;
      this.tail = this.head;
    } else {
      this.tail.next = end;
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    if (this.head.value !== null) {
      let removedHead = this.head.value;
      this.head = this.head.next;
      return removedHead;
    }
  };

  list.contains = function(target) {

    checkNextNodeForTarget = (linkedList, target) => {
      if (linkedList.value === target) {
        return true;
      }

      if (linkedList.next === null) {
        return false;
      }

      return checkNextNodeForTarget(linkedList.next, target);
    };

    return checkNextNodeForTarget(this.head, target);
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
