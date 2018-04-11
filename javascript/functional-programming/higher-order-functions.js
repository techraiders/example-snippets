function multiplier (factor) {
  return function (x) {
    return x * factor;
  }
}

var doubler = multiplier(2),
    trippler = multiplier(3);
    
console.log(doubler(4)); // 8
console.log(trippler(4)); // 12

/*
  FUNCTION DECORATORS: A function decorator is a higher-order function that takes one fuction as an argument and returns another function,
  and returned function is a variation of the argument function.
  
  Let's write some common function decorators found in libraries line underscore, lodash or ramda.

ONCE(fn): Creates a version of the function that executes only once. It's useful for an initialization function, where we want to make sure it runs only once, no matter how many times it is called from different places.
*/

function once(fn) {
  let returnValue;
  let canRun = true;
  return function runOnce () {
    if (canRun) {
      returnValue = fn.apply(this, arguments);
      canRun = false;
    }
    return returnValue;
  }
}
