/* Examples of memory leaks:
Definition: The allocated memory that's no longer in used, no longer required, but didn't free and not added to pool of free memory.
*/

// Global variables
var a = 1;
var b = 1;
var c = 1;

// Event Listeners

var element = document.getElementById('button');
element.addEventListener('click', onClick);

onClick () {
}

// Infinitely running interval
setInterval (() => {
  // referencing objects.
});
