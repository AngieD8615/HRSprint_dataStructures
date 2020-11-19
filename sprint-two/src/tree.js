var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value));
  console.log(this.children);
};

treeMethods.contains = function(target) {
  let doesContain = false;

  helper = (child, target) => {
    if (child.value === target) {
      doesContain = true;
      return;
    }
    if (child.children.length === 0) {
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
  return doesContain;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
