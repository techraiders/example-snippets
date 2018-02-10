/*If you're using jQuery, there's a built in method for loading a single script which may come in handy if you'd like to lazy load a plugin or any other type of script.  Here's how to use it!
*/
jQuery.getScript("/path/to/myscript.js", function(data, status, jqxhr) {

	/* 
		do something now that the script is loaded and code has been executed
	*/	
});

//The getScript method returns a jqxhr so you can also use it as a follows:

jQuery.getScript("/path/to/myscript.js")
	.done(function() {
		/* yay, all good, do something */
	})
	.fail(function() {
		/* boo, fall back to something else */
});

//The obvious use case for jQuery.getScript is lazy loading of a plugin and using it once loaded:

jQuery.getScript("jquery.cookie.js")
	.done(function() {
		jQuery.cookie("cookie_name", "value", { expires: 7 });
});

// If you need to do more advanced stuff like loading multiple scripts and different types of file types (text files, images, css files, etc), I'd recommend you switched to a JavaScript loader.  In the case of wanting to lazy load a plugin and not simply load it with each page, getScript is perfect!