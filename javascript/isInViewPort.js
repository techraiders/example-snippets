/*
Determine whther the HTML element is in viewPort or not?

 @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
*/

var isInViewPort = function (elem) {
  if (elem) {
    var distance = elem.getBoundingClientRect();
    return distance.top >= &&
           distance.left >= &&
           distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
           distance.right <= (window.innerWidth || document.documentElement.clientWidth);
  }
};
