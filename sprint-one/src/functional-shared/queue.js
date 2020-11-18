var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.firstIn = 0;
  someInstance.lastIn = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.firstIn++;
  this.storage[this.firstIn] = val;
};

queueMethods.dequeue = function() {
  if (this.firstIn - this.lastIn > 0) {
    this.lastIn++;
    let result = this.storage[this.lastIn];
    return result;
  }
};

queueMethods.size = function() {
  return this.firstIn - this.lastIn;
};


