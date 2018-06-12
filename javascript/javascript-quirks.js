/* 1. String.length returns number of bytes taken by the string, not number of characters.

2. 0.1 + 0.2 returns 0.3000000000004 javascript floating point operations overflows the rounding precision,
    we need to use the toPrecision function to guarantee that we get the correct.
    
3. new Date(2016, 5, 31): returns 2016 July 1 because months when constructing date, and only months are 0 based. 31st date of June doesn't exsit so it overflows to July 1.

4. new Array(0, 1 Array(2)): returns [0, 1, [undefined, undefined]]: Instantiating an Array with multiple arguments creates an Array from those values. However a single argument only specifies the length.

5. [10, 5, 1].sort() : Array.prototype.sort's default comparator assumes String operations. All values are coerced and compared as Strings.

try {throw 'garbage';}
catch (something) {console.log(something);}

delete window.someProperty; // false

*/

// ----------- Finding String Length -----------

 String.prototype.lengthInUtf8 = function() {
        var asciiLength = this.match(/[\u0000-\u007f]/g) ? this.match(/[\u0000-\u007f]/g).length : 0;
        var multiByteLength = encodeURI(this.replace(/[\u0000-\u007f]/g)).match(/%/g) ? encodeURI(this.replace(/[\u0000-\u007f]/g, '')).match(/%/g).length : 0;
        return asciiLength + multiByteLength;
    }

    'test'.lengthInUtf8();
    // returns 4
    '\u{2f894}'.lengthInUtf8();
    // returns 4
    'سلام علیکم'.lengthInUtf8();
    // returns 19, each Arabic/Persian alphabet character takes 2 bytes. 
    '你好，JavaScript 世界'.lengthInUtf8();
    // returns 26, each Chinese character/punctuation takes 3 bytes.
    
    
    '🐄'.length; // 2
// ----------- Finding String Length -----------

var obj = {x: 1, x: 2}; // When using the same name for your properties, the second property will overwrite the first.

/* In ECMAScript 5 strict mode code, duplicate property names were considered a SyntaxError.  With the introduction of computed property names making duplication possible at runtime, ECMAScript 2015 has removed this restriction. */

function haveES2015DuplicatePropertySemantics() {
  'use strict';
  try {
    ({prop: 1, prop: 2});

    // No error thrown, duplicate property names allowed in strict mode
    return true;
  } catch(e) {
    // Error thrown, duplicates prohibited in strict mode
    return false;
  }
}

// ------------------------------------- COMPARING DATE OBJECTS ------------------------------------------------
// Comparing two Dates is tricky. We can’t compare them as is:

var dt1 = new Date(“2012–03–26”),
    dt2 = new Date(“2012–03–26”),
    res = (dt1 == dt2);
// res will be always false (even it’s not a result of “===” operator, but “==”). To compare two dates we should compare their numeric // values.

// Reference: https://techblog.dorogin.com/javascript-date-quirks-12d449020539


// Date Parsing illegal value as date via Date.parse or Date’s constructor will return Date object “Invalid Date”.
res = (new Date(“x”)).constructor == Date; // res is true
res = new Date(“x”).valueOf(); // res is NaN i.e value of invalid date is NaN
res = new Date(“x”).toString(); // res is “Invalid Date”

------------------------------------- COMPARING DATE OBJECTS ------------------------------------------------
{} == {} // false i.e '==' or '===' compares reference of objects, rather than their values.

var foo = '123';
var baz = +foo;
console.log(baz); // Uniary operator form of plus does one and only one job. It invokes two number algorithm that coerces anything to a number.


var now = new Date; // i.e date object, Wed Jan 24 2018 16:15:24 GMT+0530 (India Standard Time)
var now = new Date(); // i.e  date object, Wed Jan 24 2018 16:15:56 GMT+0530 (India Standard Time)
var now = +new Date; // 1516790824192 i.e milliseconds
var now = +new Date(); // 1516790824192 i.e milliseconds

To get the milliseconds, the preferable option is to call:
Date.now; // 1516790824192 i.e milliseconds


// Usage of '~' operator: 2's complement.
~N -> -(N+1);
var foo = 'foo';
if (~foo.indexOf('f')) alert('Found it.');
else alert('Didn't find.');
// Negative one is a truthy value. '~' operator coerces in way so that we get expected behavior.

/*
String - Number = Number; '123' - 0 = 123
Number - String = Number; 123 - '' = 123
String + Number = String; '123' + 0 = '1230'
String / Number = Number; '123' / 1 = 123
String * Number = Number; '123' * 1 = 123
Number<String> - Number<String> = Number; '123' - '0' = 123 */

var foo = 0;
var baz = foo || 'foo';
console.log(baz); // 'foo'


var foo = '123';
if (foo == true) alert(true); else alert(false); // Here foo is coerced to a number 123 and true is coerced to number 1; and 123 != 1 so condition becomes false.

var foo = 0;
if (foo == false) alert(true); else alert(false); // This accidentally works in our favor. false is coerced to 0 then both values are compared, and eventually condition evaluates to true.



foo = [];
if (foo) alert(true); else alert(false); // Empty arrays are truthy.

if (foo == false) {} // true
//Description: When we have an object like an array, The abstract equality, algorithm goes to toPrimitive algorithm. To primitive algorithms ends up with an array being a string. Now we have an empty string == false, still we can't compare these. So again it goes to toPrimitive algorithm, Empty string becomes a number 0, and false also becomes a number 0. Eventually, the condition becomes 0 == 0 and hence finally evaludate to true.


------------------------------JAVASCRIPT IMPLICIT COERCION TABLE----------------------------
'0' == null; // false
'0' == undefined; // false
'0' == false; // true --UH OH!
'0' == NaN; // false
'0' == 0; // true
'0' == ''; // false;

false == null; // false
false == undefined; // false
false == NaN; // false
false == 0; // true -- UH OH!
false == ''; // true -- UH OH!
false == []; // true
false == {}; false

'' == null; // false
'' == undefined; // false
'' == NaN; // false
'' == 0; // trye -- UH OH!
'' == []; // true --UH OH!
'' == {}; // false

0 == null; // false
0 == undefined; // false
0 == NaN; // false
0 == []; // true -- UH OH!
0 == {}; // false


'0' == false; // true -- UH OH!
false == 0; // true -- UH OH!
false == '' // true -- UH OH!
false == []; // true -- UH OH!
'' == 0; // true -- UH OH!
'' == []; // true -- UH OH!
0 == []; // true -- UH OH!

[] == ![] // true
"true" == true // false
"foo" == ["foo"] // true



var foo = new String('123');
foo; // String{"123"} // i.e foo[0] = 'f', foo[1] = 'o', foo[2] = 'o';
typeOf foo; // "object"

var baz = foo + '';
typeOf baz; // "string"


[] + {} // "[object Object]"
{} + [] // 0
({}+[]) // "[object Object]"



"Any sufficiently advanced technology is indistinguishable from magic".
// Learn More, JavaScript Date Quirks:
//  1. https://hackernoon.com/a-quick-handbook-for-dates-in-javascript-7b71d0ef8e53
