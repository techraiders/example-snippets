/* NaN is a special number in JavaScript, If you have to check whether a value is a NaN,
I recommend you to use Number.isNaN(value). You can not determine by comparing your value to NaN.


Caution: Don't use window.isNaN(value), because The problem with window.isNaN is that it has
an issue; it returns true if value can be coerced to a number. See example below to give you
a concrete idea of this issue:


Example: 
Number.isNaN(0/0); // true; because 0/0 is NaN
window.isNaN(2); // false
window.isNaN(NaN); // true
window.isNaN('somestring that can't be converted to number'); // true because couldn't coerce to a number
window.isNaN('2'); // false because it coerces to number 2
window.isNaN({email: 'hello_navneet@hotmail.com'}) // true because couldn't coerce to a number
window.isNaN([]); // false; because [] coerces into 0; [] == 0 is true; or Number([]) is 0
window.isNaN(undefined); // true; because Number(undefined) == NaN is true

Use Number.isNan(value) instead: Number.isNaN returns true if value is NaN otherwise returns false

Number.isNaN(0/0); // true; because 0/0 is NaN
Number.isNaN(2); // false
Number.isNaN(NaN); // true;
Number.isNaN('Somestring'); // false
Number.isNaN('2'); // false; 
Number.isNaN({email: 'hello_navneet@hotmail.com'}); // false; 
Number.isNaN([]); // false
Number.isNaN(undefined); // false

*/
