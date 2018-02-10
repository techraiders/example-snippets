// USING SPREAD PARAMETER
let a = [20, 30, 40];
let b = [10, ..a, 50];
console.log(b); // [10, 20, 30, 40, 50];

function collect (...a) {
  console.log(a);
}
collect(1,2,3,4,5); // [1,2,3,4,5]

//IN ES5 Arrays
let z = [4,5,6];
let four = z[0];
let five = z[1];
console.log(four, five);
// IN ES6 Arrays
let [four, five] = z;
console.log(four, five); // 4 5

// ES5 OBJECTS
let king = {name: 'Mufasa', kids: 1};
let name = king.name;
let kids = king.kids;
console.log(name, kids);
// ES6 OBJECTS
let {name, kids} = king;
console.log(name, kids);

// GOTCHA WHEN DESTRUCTURING ASSIGNMENT WHEN THE VARIABLE WAS ALREADY DECLARED
let son = {name: 'Simba', parents: 2};
let name, parents;
{name, parents} = son; // this won't work will throw syntax error
console.log(name, parents);

// ENCLOSING THIS IN PARENTHESIS WILL WORK
({name, parents} = son ); // NOW WORKS
console.log(name, parents);