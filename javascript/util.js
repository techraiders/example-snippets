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
