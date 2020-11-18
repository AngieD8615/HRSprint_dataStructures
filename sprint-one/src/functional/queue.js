var Queue = function() {
  var someInstance = {};
  someInstance.firstIn = 1;
  someInstance.lastIn = 1;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.firstIn] = value;
    someInstance.firstIn++;
  };

  someInstance.dequeue = function() {
    if (someInstance.firstIn - someInstance.lastIn > 0) {
      var result = storage[someInstance.lastIn];
      delete storage[someInstance.lastIn];
      someInstance.lastIn++;
      return result;
    }

  };

  someInstance.size = function() {
    return someInstance.firstIn - someInstance.lastIn;
  };

  return someInstance;
};
