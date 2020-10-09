var BinarySearchTree = function (value) {
  var obj = Object.create(biTreeMethods);

  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

var biTreeMethods = {};


biTreeMethods.insert = function (value) {
  let newNode = BinarySearchTree(value);
  if (value < this.value && this.left === null) {
    this.left = newNode;
  }
  if (value > this.value && this.right === null) {
    this.right = newNode;
  }
  if (value < this.value && this.left !== null) {
    let leftNode = this.left;
    leftNode.insert(value);
  }
  if (value > this.value && this.right !== null) {
    let rightNode = this.right;
    rightNode.insert(value);
  }

},

biTreeMethods.contains = function (target) {
  if (target === this.value) {
    return true;
  }
  if (target < this.value) {
    if (this.left === null) {
      return false;
    }
    let leftNode = this.left;
    return leftNode.contains(target);
  }
  if (target > this.value) {
    if (this.right === null) {
      return false;
    }
    let rightNode = this.right;
    return rightNode.contains(target);
  }

},

biTreeMethods.depthFirstLog = function (cb) {

};




/*
 * Complexity: What is the time complexity of the above functions?
 */
