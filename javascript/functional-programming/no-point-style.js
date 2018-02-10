function not (fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

function isOdd(v) {
  return v % 2 == 1;
}

function isEven(v) {
  return !isOdd(v);
}

var isEven = not(isOdd);
isEven(4); // true

/*
Some browsers require console.log(...) to run against the console context, so x = console.log; x(...); fails because of lost this binding. Use console.log.bind(console) to be safe.
printIf(...) can be expressed in terms of a when(...) that looks like:
*/

function when(fn) {
  return function(predicate) {
    if (predicate(...args)) {
      return fn(...args);
    }
  }
}

var output = console.log.bind(console);

function printIf(predicate) {
  return function(msg) {
   if (predicate(msg)) {
     output(msg);
   }
  }
}

function isShortEnough(str) {
  return str.length <= 5;
}

function isLongEngough(str) {
  return !isShortEnough(str);
}
// isLongEnough can also be defined as below:
var isLongEnough = not(isShortEnough);
var printIf = when(output);

// COMPOSITION
function sum (x,y) {
  return x + y;
}
function mult(x,y) {
  return x * y;
}
var x_y = mult(3,4);
sum(x_y, 5); // much imperative style not declarative
sum( mult(3, 4), 5); // 17

function multAndSum() {
  return sum(mult(x,y), z);
}

// (3 * 4) + 5
multAndSum(3, 4, 5); // 17

// like a higher order function or machine making machine.
function pipe2(fn1, fn2) {
  return function piped(arg1, arg2, arg3) {
    return fn2(
      fn1(arg1, arg2);
      arg3
    );
  };
}

var multAndSum = pipe2(mult, sum);

// (3 * 4) + 5
multAndSum(3,4,5); // 17

foo(bar(baz(2)));
compose(foo, bar baz)(2); // runs right to left because we compose it for that.
pipe(bar, bar, foo)(2); // if you want it to list them left to right in order of execution,
//that would be the pipe utility.

function composeRight(fn2, fn1) {
  return function comp(...args) {
    fn2(fn1(...args));
  };
}

function increment (x) {
  return x + 1;
}
function double (x) {
  return x * 2;
}

var f = composeRight(increment, double);
var p = composeRight(double, increment);

f(3); // 7
p(3); // 8


/* EXERCISE IMPLEMENTING PIPE AND COMPOSE THAT ACCEPTS UNLIMITED ARGUMENTS */

function increment (x) { return x + 1; }
function decrement (x) { return x - 1; }
function double (x) { return x * 2; }

function compose () {
  return function composed(result) {
    return pipe(...fns.reverse());
    /*for (var i = fns.length - 1; i >= 0 ; i--) {
      result = fns[i](result);
    }
    return result;*/
  };
}

function pipe (...fns) {
  return function piped (result) {
    for (var i = 0; i < fns.length; i++) {
      result = fns[i](result);
    }
    return result;
  };
}

function unary (fn) {
  return function one (arg) {
    reurn fn(arg);
  };
}

function foo (x, y) {
  var sum;
  return function () {
    if (sum === undefined) {
      sum = x + y;
    }
    return sum;
  };
}

function foo () {
  var id = 0;
  return function () {
    return id++; // violating referencial transparency.
  };
}

var x = foo();
x(); // 0
x(); // 1
x(); // 2


/* Generalized to Specialized */
function add (x,y) {
  return x + y;
}

function partial (fn, ...firstArgs) {
  return function applied (...lastArgs) {
    return fn(...firstArgs, ...lastArgs);
  };
}

var addTo10 = partial(add, 10);
addTo10(32); // 42
/***********************/
var add3 = curry(function add3(x,y,z) {
  return x + y + z;
});

var f = add3(3);
var p = f(4);

p(5); // 12
add3(3)(4)(5); // 12
/* Generalized to Specialized */

/* Recursion */
function sumIter (...nums) {
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}
sumIter(3,4,5,6,7,8,9); // 42

function sumRecur (sum, ...nums) {
  if (nums.length === 0)
    return sum;
  // return sum + num;
  return sum + sumRecur (...nums);
}
sumRecur(3,4,5,6,7,8,9); // 42
/* Recursion */


function compose2 (fn1, fn2) {
  return function comp() {
    var args = [].slice.call(arguments);
    return fn2(
      fn1(args.shift(), args.shift()), args.shift()
    );
  };
}


// Here is th e list of Functional Programming JavaScript libraries: https://github.com/stoeffel/awesome-fp-js#libraries