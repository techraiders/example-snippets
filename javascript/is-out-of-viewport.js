/* I have a helper function that you can use to check if an element is in the viewport. It returns true if any part of the element is in the viewport, even when most of it is not.

My buddy Scott O’Hara and I were chatting a bit about the limitations of this yesterday. Sometimes, what you really want to know if any piece of an element is not in the viewport.

For example, imagine you have a drop-down menu.

If most of the expanded menu is outside the viewport, you might want to handle that interaction differently. It doesn’t matter if 10% of it is visible. That’s still a bad experience for the user.

Today, I want to show you how you can check if any part of an element is not in the viewport.

getBoundingClientRect() #
What makes this all work is the Element.getBoundingClientRect() method.

Called on an element, this method returns an object with the position of the element on the top, bottom, left, and right relative to the viewport.
*/

var elem = document.querySelector('#some-element'),
    bounding = elem.getBoundingClientRect();

// Returns something like this:
// {top: -123, left: 0, right: 0, bottom: 25}
// console.log(bounding);
// We can check if those numbers are outside the viewport with some basic math.

// If bounding.top or bounding.left are less than 0, the top or left side of the element are outside the viewport. If bounding.right is greater than the width of the viewport, or bounding.bottom is greater than it’s height, the right or bottom is outside of the viewport.

if (bounding.top < 0) {
	// Top is out of viewport
}

if (bounding.left < 0) {
	// Left side is out of viewoprt
}

if (bounding.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
	// Bottom is out of viewport
}

if (bounding.right > (window.innerWidth || document.documentElement.clientWidth)) {
	// Right side is out of viewport
}
Not all browsers support window.innerWidth and window.innerHeight, so we fallback to document.documentElement.clientWidth and document.documentElement.clientHeight.

/* Writing a helper function #
To make this easier to use, I’ve put together a helper function: isOutOfViewport().

Pass in the element and it will return an object of booleans.
*/

var elem = document.querySelector('#some-element');
var isOut = isOutOfViewport(elem);

if (isOut.top) {
	// Top is out of viewport
}

if (isOut.left) {
	// Left side is out of viewoprt
}

if (isOut.bottom) {
	// Bottom is out of viewport
}

if (isOut.right) {
	// Right side is out of viewport
}
You can also use it to check if any or all of an element is out of the viewport.

if (isOut.any) {
	// At least one side of the element is out of viewport
}

if (isOut.all) {
	// The entire element is out of viewport
}
// Here’s the helper method.

/*!
 * Check if an element is out of the viewport
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}  elem The element to check
 * @return {Object}     A set of booleans for each side of the element
 */
var isOutOfViewport = function (elem) {

	// Get element's bounding
	var bounding = elem.getBoundingClientRect();

	// Check if it's out of the viewport on each side
	var out = {};
	out.top = bounding.top < 0;
	out.left = bounding.left < 0;
	out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
	out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
	out.any = out.top || out.left || out.bottom || out.right;
	out.all = out.top && out.left && out.bottom && out.right;

	return out;

};
