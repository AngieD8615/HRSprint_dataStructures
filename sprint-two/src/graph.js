

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.nodes[node] === undefined) {
    this.nodes[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (this.nodes[node] !== undefined) ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.nodes[node] !== undefined) {
    for (var i = 0; i < this.nodes[node].length; i++) {
      var curNode = this.nodes[node];
      var toNode = this.nodes[node][i];
      this.removeEdge(curNode, toNode);
    }
    delete this.nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.nodes[fromNode].indexOf(toNode) > -1);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toNodeLoc = this.nodes[fromNode].indexOf(toNode);
  var fromNodeLoc = this.nodes[fromNode].indexOf(fromNode);
  this.nodes[fromNode].splice(toNodeLoc, 1);
  this.nodes[toNode].splice(fromNodeLoc, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


