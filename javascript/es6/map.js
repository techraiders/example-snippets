let a = new Map();
let key_1 = 'string key';
let key_2 = {a: 'key'};
let key_3 = function () {};

a.set(key_1, 'return value of a string key');
a.set(key_2, 'return value of an object key');
a.set(key_3, 'return value of a function key');
// console.log(a);
// {"string key" => "return value of a string key", {a: 'key'} => "return value of an object key", function () {} => "return value of a function key"}

let numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
let valMap = new Map(numArr);
// console.log(valMap); // {1 => "one", 2 => "two", 3 => "three"}

// iterating over key, value pairs of map
for (let [key, value] of valMap.entries()) {
  console.log(`${key} points to  ${value}`);
}
/* output: 
  1 points to one
  2 points to two
  3 points to three
*/
