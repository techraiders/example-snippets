/* Each object can have different properties, and methods, but sometime we need to have common method on different objects.
Using call, apply and bind. We write object and method separate and call method on that object */

var obj = {num: 2};
var obj2 = {num: 5};

var addToThis = function(a,b,c) {
  return this.num + a + b + c;
};

console.log(addToThis.call(obj, 1,2,3)); // Output: 8
// In call, We individual list of arguments.

var arr = [1,2,3];
console.log(addToThis.apply(obj2, arr)); // Output: 11
// In apply, we can directly pass an array of arguments.

console.log(addToThis.bind(obj, arr));
// returns a function 'bound' instead of value. bind() is different from others.

var bound = addToThis.bind(obj); // here no need to pass arguments.
// here addToThis  method is now bound to method obj and returned to variable bound.
bound(1, 2, 3); // Output: 8
// so bound method is adds arguments passed a, b, c to the value of num variable in current execution context, i.e current object.



/* Finding which HTML element causes overflow of body element, and causes a scrollbar */
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);


/* Finding which HTML element has zIndex more than given zIndex */
[].forEach.call(
  document.querySelectorAll('body *'),
  function(el) {
    var computedStyle = document.defaultView.getComputedStyle(el, null);
    zIndex = computedStyle.getPropertyValue('z-index');
    zIndex = Number(zIndex);
    if (zIndex === zIndex && zIndex > 999) {
      console.info(el);
      //inspect(el);
      //debugger;
    }
  }
);