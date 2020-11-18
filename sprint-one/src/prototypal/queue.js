var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.firstIn = 0;
  someInstance.lastIn = 0;
  someInstance.storage = {};

  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function (val) {
  this.lastIn++;
  this.storage[this.lastIn] = val;
};

queueMethods.dequeue = function () {

  if (this.lastIn - this.firstIn > 0) {
    this.firstIn++;
    let result = this.storage[this.firstIn];
    return result;
  }
};

queueMethods.size = function () {
  return this.lastIn - this.firstIn;
};

