var Stack = function() {
  var someInstance = {};

  someInstance.count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.count++;
    storage[someInstance.count] = value;
  };

  someInstance.pop = function() {
    if (someInstance.count >= 1 ) {
      let result = storage[someInstance.count];
      someInstance.count--;
      return result;
    }
  };

  someInstance.size = function() {
    return someInstance.count;
  };

  return someInstance;
};
