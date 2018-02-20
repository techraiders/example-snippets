/*
There are 3 key terms we need to define before we proceed:
  1. Handler: The placeolder object which contains the trap(s).
  2. Trap: The method that provide property access.
  3. Target: The object the proxy virtualizes.
*/

console.clear();

const wrap = obj => {
  return new Proxy(obj, {
    get(target, propKey) {
      console.log(`Reading property ${propKey}`);
      return target[propKey];
    }
  });
}

console.log(wrap);

const object = {message: 'Hello world'};
const wrapped = wrap(object);

console.log(wrapped.message); // "Reading property message"
// "Hello world"




/* FINDING CULPRIT INSERTING AN ITEM INTO YOUR JAVASCRIPT ARRAY */

function proxyArray (arr) {
  var handler = {
    set: function (target, property, value, receiver) {
      debugger;
      target[property] = value;      
      return value;
    }
  };
  return new Proxy(arr, handler);
}

var arr = [1,2,3,4],
    arr = proxyArray(arr);

arr.push(5);
console.log(arr);


/* There are manu real-world applications for Proxies like:
  1. Validation
  2. Value correction.
  3. Property lookup extension.
  4. Tracing property accesses.
  5. Revocable references.
  6. Implementing the DOM in JavaScript.
*/

// USING PROXIES TO ENFORCE VALUE VALIDATION
var validator = {
  set: function (obj, prop, value) {
    if (prop === 'age') {
      if(!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }
    
    // The default behavior to store the value
    obj[prop] = value;
    
    // Indicate success
    return true;
  }
};

var person = new Proxy({}, validator);
    person.age = 100;
    console.log(person.age); // 100

    person.age = 'young'; // Throws an exception - The age is not an integer.
    person.age = 300; // Throws an exception - The age is invalid.



/*
We can use Proxy.revocable in a similar way to Proxy. The main difference are that the return value will be {proxy, revoke}, and that once revoke is called the proxy will throw Error on any operation. Let's go back to our pass-through Proxy example and make it revocable. Note that we're not using the new operator here. Calling revoke over and over has no effect.
*/

var target = {}, handler = {};
var {proxy, revoke} = Proxy.revocable(target, handler);
proxy.a = 'b';
console.log(proxy.a); // 'b'
revoke();
revoke();
revoke();
console.log(proxy.a); // TypeError: illegal operation attempted on a revoked proxy.
/* This type of Proxy is particularty useful because you can now completely cut off access to the proxy granted to a customer. You start by passing of a revocable Proxy and keeping around the revoke method (hey, may be you can use a WeakMap for that), and when it is clear that the consumer shouldn't have access to target anymore, not even through proxy - you .revoke() the hell out of their access. Goodbye consumer!

Furthermore, since revoke is available on the same scope where your handler traps live, you could set up extremely paranoid rules such as "if a consumer attempts to access a private property more than once, revoke their proxy entirely."

*/
