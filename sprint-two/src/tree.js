var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function (target) {
  let doesContain = false;

  helper = (child, target) => {
    if (child.value === target) {
      doesContain = true;
      return;
    }

    child.children.forEach((child) => {
      return helper(child, target);
    });
  };

  this.children.forEach((child) => {
    if (!doesContain) {
      helper(child, target);
    }
  });
  // or you could use: helper(this, target);
  return doesContain;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
