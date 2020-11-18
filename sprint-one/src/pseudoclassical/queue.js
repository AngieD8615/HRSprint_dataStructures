var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.firstIn = 0;
  this.lastIn = 0;
};


Queue.prototype.enqueue = function(val) {
  this.lastIn++;
  this.storage[this.lastIn] = val;

};

Queue.prototype.dequeue = function() {
  if (this.lastIn - this.firstIn > 0) {
    this.firstIn++;
    return this.storage[this.firstIn];
  }
};

Queue.prototype.size = function() {
  return this.lastIn - this.firstIn;
};
