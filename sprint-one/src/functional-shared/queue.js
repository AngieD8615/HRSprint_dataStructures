var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.enqueueCount = 0;
  instance.dequeueCount = 0;

  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.enqueueCount++;
  this.storage[this.enqueueCount] = value;
};

queueMethods.dequeue = function () {
  if (this.enqueueCount - this.dequeueCount > 0) {
    this.dequeueCount++;
    return this.storage[this.dequeueCount];
  }
};

queueMethods.size = function () {
  return this.enqueueCount - this.dequeueCount;
};


