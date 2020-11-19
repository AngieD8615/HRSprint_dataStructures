class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.firstIn = 0;
    this.lastIn = 0;
  }

  enqueue(val) {
    this.lastIn++;
    this.storage[this.lastIn] = val;
  }
  dequeue() {
    if (this.size() > 0) {
      this.firstIn++;
      return this.storage[this.firstIn];
    }
  }
  size() {
    return this.lastIn - this.firstIn;
  }
}
