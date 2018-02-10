'use strict';

// Merge an object
let first = {name: 'Tony'};
let last = {lastName: 'Stark'};
let person = Object.assign(first, last);
console.log(person);
// {name: 'Tony', lastName: 'Stark'}
console.log(first);
// first = {name: 'Tony', lastName: 'Stark'} as the target also changed

// Merge multiple sources
let a = Object.assign({foo: 0}, {bar: 1}, {baz: 2});
console.log(a);
// {foo: 0, bar: 1, baz: 2}

// Merge and overwrite equal keys
let b = Object.assign({foo: 0}, {foo: 1}, {foo: 2});
console.log(b);
// {foo: 2}

// Clone an object
let obj = {person: 'Thor Odinson'};
let clone = Object.assign({}, obj);
console.log(clone);
// {person: 'Thor Odinson'}

/*-------------------------------------- SETTING DEFAULT ARGUMENT IN ES5 ------------------------------------- */

const menuConfig = {
  title: 'Order',
  // User did not include 'body' key
  buttonText: 'Send',
  cancellable: true
};

function createMenu(config) {
  config = Object.assign({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
  }, config);

  // config now equals: {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
  console.clear();
  console.log(config);
}

createMenu(menuConfig);

/**************************** Pitfalls of Object.assign *********************/
let obj = {
  a: 1,
  b: {
    c: 2,
  },
}
let newObj = Object.assign({}, obj);
console.log(newObj); // { a: 1, b: { c: 2} }

obj.a = 10;
console.log(obj); // { a: 10, b: { c: 2} }
console.log(newObj); // { a: 1, b: { c: 2} }

newObj.a = 20;
console.log(obj); // { a: 10, b: { c: 2} }
console.log(newObj); // { a: 20, b: { c: 2} }

newObj.b.c = 30;
console.log(obj); // { a: 10, b: { c: 30} }
console.log(newObj); // { a: 20, b: { c: 30} }

// Note: newObj.b.c = 30; Read why..

/*Well, that is a pitfall of Object.assign(). Object.assign only makes shallow copies. Both newObj.b and obj.b share the same reference to the object because of individual copies were not made, instead a reference to the object was copied. Any change made to any of the object's property applies to all references using the object.*/


//Note: Properties on the prototype chain and non-enumerable properties cannot be copied. See here:
let someObj = {
  a: 2,
}

let obj = Object.create(someObj, { 
  b: {
    value: 2,  
  },
  c: {
    value: 3,
    enumerable: true,  
  },
});

let objCopy = Object.assign({}, obj);
console.log(objCopy); // { c: 3 }

/*someObj is on obj's prototype chain so it wouldn't be copied.
property b is a non-enumerable property.
property c has an enumerable property descriptor allowing it to be enumerable. That's why it was copied.*/


/**************************************** Deep Copying Objects ***********************************/

/* A deep copy will duplicate every object it encounters. The copy and the original object will not share anything, so it will be a copy of the original. Here's the fix to the problem we encountered using Object.assign(). Let's explore:

Using JSON.parse(JSON.stringify(object));
This fixes the issue we had earlier. Now newObj.b has a copy and not a reference! This is a way to deep copy objects. Here's an example: */

let obj = { 
  a: 1,
  b: { 
    c: 2,
  },
}

let newObj = JSON.parse(JSON.stringify(obj));

obj.b.c = 20;
console.log(obj); // { a: 1, b: { c: 20 } }
console.log(newObj); // { a: 1, b: { c: 2 } } (New Object Intact!)

/*Pitfall
Unfortunately, this method can't be used to copy user-defined object methods. See below.*/


/************************************** COPYING OBJECT METHODS *********************************/
/*A method is a property of an object that is a function. In the examples so far, we haven't copied an object with a method. Let's try that now and use the methods we've learnt to make copies.*/

let obj = {
  name: 'scotch.io',
  exec: function exec() {
    return true;
  },
}

let method1 = Object.assign({}, obj);
let method2 = JSON.parse(JSON.stringify(obj));

console.log(method1); //Object.assign({}, obj)
/* result
{
  exec: function exec() {
    return true;
  },
  name: "scotch.io"
}
*/

console.log(method2); // JSON.parse(JSON.stringify(obj))
/* result
{
  name: "scotch.io"
}
*/

// The result shows that Object.assign() can be used to copy methods while JSON.parse(JSON.stringify(obj)) can't be used.


/******************************** Copying Circular Objects *****************************/
/* Circular objects are objects that have properties referencing themselves. Let's use the methods of copying objects we've learnt so far to make copies of a circular object and see if it works.

Using JSON.parse(JSON.stringify(object))
Let's try JSON.parse(JSON.stringify(object)): */

// circular object
let obj = { 
  a: 'a',
  b: { 
    c: 'c',
    d: 'd',
  },
}

obj.c = obj.b;
obj.e = obj.a;
obj.b.c = obj.c;
obj.b.d = obj.b;
obj.b.e = obj.b.c;

let newObj = JSON.parse(JSON.stringify(obj));

console.log(newObj); 

// Here's the result:
// Error: TypeError : Converting Circular Structure to JSON.
// JSON.parse(JSON.stringify(obj)) clearly doesn't work for circular objects.

// Let's try using Object.assign()
// circular object
let obj = { 
  a: 'a',
  b: { 
    c: 'c',
    d: 'd',
  },
}

obj.c = obj.b;
obj.e = obj.a;
obj.b.c = obj.c;
obj.b.d = obj.b;
obj.b.e = obj.b.c;

let newObj2 = Object.assign({}, obj);

console.log(newObj2); 

/* Object.assign() works fine for shallow copying circular objects but wouldn't work for deep copying. Feel free to explore the circular object tree on your browser console. I'm sure you'll find a lot of interesting work going on there. */

