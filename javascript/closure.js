/*
Closure is when a function remembers the variable around it, even when the function is executed elsewhere i.e another execution context.
-Klye Simpson
*/

functionfunctionfunction greet(whattosay) {
  return function(name) {
    console.log(whattosay + ' ' + name);
  }
}

greet('Hi')('navi'); // Hi navi (as expected)

var sayHi = greet('Hi');
sayHi('Tony');
// Above statement prints Hi Tony, even if function greet has finished its execution so its argument value of whattosay should not exist, because value of whattosay 'Hi' is stored in closure, because it is used in inner function.


function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      function () {
        console.log(i);
        // this function is not being called here, its definition is being pushed
        // the variable i is pushed not the value of i
      }
    );
  }
  return arr;
}

var fs = buildFunctions();

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3

// All of above when called retrieves the value of i from the closue which was 3 when outer function completed its execution.