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

/*
AFTER(count, fn): Creates a version of the function that executes only after a number of calls. It's useful, for example when we want to make sure the function runs only after all the asynchronous tasks have finished.
*/

function after (count, fn) {
  let runCount = 0;
  return function runAfter() {
    ++runCount;
    if (runCount >= count) return fn.apply(this, arguments);
  }
}

function logResult () {console.log('Calls have finished');}
let logResultAfter2Calls = after(2, logResult);

setTimeout(function logFirstCall () {
  console.log('1st call has finished');
  logResultAfter2Calls();
}, 3000);

setTimeout(function logSecondCall() {
  console.log('2nd call has finished');
  logResultAfter2Calls();
}, 4000); /* Now, I am using after() to build a new function logResultAfter2Calls() that will 
 execute the original code of logResult() only after the second call. */

