//Find minimum number from a JavaScript array using Math object and apply method which is repeated exactly k times.

var arr = [2, 2, 1, 3, 1, 1];
var counter, k = 2;
var res = [];

for (var i = 0; i < arr.length; i++) {
  counter = 1;
  for (var j = i+1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      counter += 1;
    }
  } if (counter === k) {
      res.push(arr[i]);
    }
}

console.log(res);
console.log(Math.min.apply(Math, res));