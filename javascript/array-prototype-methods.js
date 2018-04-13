// 1. EVERY METHOD: Returns true if every/all elements satisfies the condition, otherwise returns false.

var arr = [1,2,3,4,5,6,7,8];
arr.every(function(cv) {
  return cv < 10; // returns true
});

var ar = [1,2,11,4,5,5,6,7];
ar.every(function(cv) {
  return cv < 10; // returns false
});

// 2. SOME METHOD: Returns true is any element passes the test, otherwise returns false.
var arr = [1,2,3,4,5,6,7,8];
arr.some(function(el) {
  return el % 2 === 0; // returns true
});

var ar = [1,3,5,7];
ar.some(function(el) {
  return el % 2 === 0; // returns false
});

// NOTE: Don't forget to return from the callback function, otherwise false will be automatically returned.


// 3. FIND METHOD: The find method locates the first item in an array that matches a test you pass in as a callback function.
// The callback accepts an argument that serves as a reference variable for the item in the array.
// Example:
var sandwiches = ['turkey', 'chicken salad', 'tuna', 'pd&j', 'egg salad'];


// SORTING A NUMERIC ARRAY
/* By default, the sort() function sorts values as strings.
This works well for strings ("Apple" comes before "Banana").
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers.
You can fix this by providing a compare function: */
var points = [40, 100, 1, 5, 25, 10];
var sorted = points.sort(function (a, b) {
  return a - b;
});
console.log(sorted); // [1, 5, 10, 25, 40, 100]



// CREATING OUR OWN ARRAY USING OBJECT
/* Push method is intentionally generic, and we can use that to our advantage. Array.prototype.push can work on an object just fine, as below example shows. Note that we don't create an array to store a collection of objects. Instead, we store the collection of object on the object itself and use call on Array.prototype.push to trick the method into thinking we are dealing with an array, and it just works, thanks to the way JavaScript allows us to establish the execution context */

var obj = {
  length: 0,
  addElem: function (elem) {
   [].push.call(this, elem);
  }
};

console.log(obj.length); // 0
obj.addElem({});
console.log(obj.length); // 1
console.log(obj); // {0: {}, addElem: function () {}, length: 1};
obj.addElem({});
console.log(obj.length); // 2
console.log(obj); // {0: {}, 1: {}, addElem: function () {}, length: 2};


/* DEBUGGING ARRAY PROTOTYPE NATIVE METHODS (Yet to be run and verified) */
Array.prototype._originalPush = Array.prototype.push;
Array.prototype.push = function (...args) {
console.log(‘pushed’, this, args, new Error (‘nice stacktrace’));
return this._originalPush(...args);
}
