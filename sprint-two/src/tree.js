var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(new Tree (value));
  console.log(this.children);
};

treeMethods.contains = function (target) {

  if (_.pluck(this.children, 'value').indexOf(target) > -1) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
