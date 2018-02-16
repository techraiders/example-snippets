/*
The first step is creating an function which will act as the event listener callback. Within the function, an initial event.animationName check must be made to ensure it's the animation name we want to listen for in this specific case:
*/

function insertListener () {
  if (event.animationName === 'nodeInserted') {
    // This is the debug for knowing our listener worked!
    // event.target is the new node!
    console.warn('Another node had been inserted! ', event, event.target);
  }
}

/*
If the animation name matches the desired animation, we know a DOM node has been injected. Not it's time to add the event listener to the parent.
*/

document.addEventListener('animationstart', insertListener, false); // standard + firefox
document.addEventListener('MSAnimationStart', insertListener, false); // IE
document.addEventListener('webkitAnimationStart', insertListener, false); // Chrome + Safari
