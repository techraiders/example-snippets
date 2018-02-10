// Set up a click event listener the native way
jQuery('.tabs a').on('click', function() {
	// Switch to the tab, load some content, whatever	
});

// Trigger a click on the last one
jQuery('.tabs a').last().trigger('click');

// Listen to all clicks in the body
jQuery('body').on('click', 'a', function() {
	// Do some logic

	// Condition met, do something drastic!
	if(conditionMet) {
		// Reload the page?
		// Open a submenu?
		// Submit a form?
		// ... you get the idea
	}
});

//Now we have a problem -- the tab trigger click is listened to by something completely separate and now we're in for trouble.  Yikes.  The best solution if you need to use trigger is providing a custom event name along with the native event:

// Set up a click event with an additional custom event
jQuery('.tabs a').on('click tabs-click', function() {
	// Switch to the tab, load some content, whatever	
});

// Trigger a fake click on the last one
jQuery('.tabs a').last().trigger('tabs-click');

/*
Alternate: triggerHandler
If you're using jQuery specifically, you could also use jQuery's triggerHandler method which triggers an event but only those registered through jQuery, and with the following caveats:

The .triggerHandler() method does not cause the default behavior of an event to occur (such as a form submission).
While .trigger() will operate on all elements matched by the jQuery object, .triggerHandler() only affects the first matched element.
Events created with .triggerHandler() do not bubble up the DOM hierarchy; if they are not handled by the target element directly, they do nothing.

Instead of returning the jQuery object (to allow chaining), .triggerHandler() returns whatever value was returned by the last handler it caused to be executed. If no handlers are triggered, it returns undefined

The .triggerHandler() method is jQuery's way of preventing the problems that trigger can create. */



/* ATTACH EVENT HANDLERS TO DYNAMICALLY CREATED ELEMENTS */
// attach event on parent element which is not dynamically created and then, pass a selector to filters it out the element which on which to execute the handler.
angular.element('mx-job-details').on('mouseenter keyup', 'form div.row.form-group', function (event, data) {
  // debugger;
  // what you want to happen when mouseover and mouseout 
  // occurs on elements that match '.dosomething'
});


/* FINDING OUT EVENT HANDLERS ATTACH TO ANY DOM ELEMENT */
var el = document.getElementById('someId');
jQuery._data(el, 'events');