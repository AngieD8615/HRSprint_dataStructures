var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};

};



Stack.prototype.push = function(val) {
  this.count++;
  this.storage[this.count] = val;
};

Stack.prototype.pop = function() {
  if (this.count > 0) {
    let result = this.storage[this.count];
    this.count--;
    return result;
  }
};

Stack.prototype.size = function() {
  return this.count;
};
