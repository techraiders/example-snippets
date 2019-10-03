// FIND SIMILAR OR COMMON:
const similarity = (arr, values) => arr.filter(v => values.includes(v));
similarity([1, 2, 3], [1, 2, 4]); // [1, 2]

// SMOOTH SCROLL:
This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window.
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar


// SORT CHARACTERS IN STRING
This snippet can be used to alphabetically sort the characters in a string.

const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');
sortCharactersInString('cabbage'); // 'aabbceg'

// CAPITALIZE EACH WORD:
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
capitalizeEveryWord('hello world!'); // 'Hello World!'

// DECAPITALIZE
const decapitalize = ([first, ...rest]) =>
first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'

// DEEP FLATTEN
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]

// DEFER
// This snippet delays the execution of a function until the current call stack is cleared.
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);
defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'

// DIFFERENCE
// This snippet finds the difference between two arrays.
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
