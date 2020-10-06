var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var enqueueCount = 0;
  var dequeueCount = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[enqueueCount] = value;
    enqueueCount++;
  };

  someInstance.dequeue = function() {
    if (enqueueCount - dequeueCount > 0) {
      dequeueCount++;
      return storage[dequeueCount - 1];
    }
  };

  someInstance.size = function() {
    return enqueueCount - dequeueCount;
  };

  return someInstance;
};
