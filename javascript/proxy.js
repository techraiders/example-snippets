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
