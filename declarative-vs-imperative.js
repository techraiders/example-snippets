21172023988001
3874

/************************** SIMPLYFYING SWITCH CASE *********************/
var doSomething = function(doWhat) {
    switch(doWhat) {
        case "doThisThing":
            // more code...
        break;
        case "doThatThing":
            // more code...
        break;
        case "doThisOtherThing":
            // more code....
        break;
        // additional cases here, etc.
        default:
            // default behavior
        break;
    }
};

var thingsWeCanDo = {
    doThisThing      : function() { /* behavior */ },
    doThatThing      : function() { /* behavior */ },
    doThisOtherThing : function() { /* behavior */ },
    default          : function() { /* behavior */ }
};

var doSomething = function(doWhat) {
    var thingToDo = thingsWeCanDo.hasOwnProperty(doWhat) ? doWhat : "default"
    thingsWeCanDo[thingToDo]();
};
/************************** SIMPLYFYING SWITCH CASE *********************/


/******************************** PERFORMANCE OPTIMIZATION ***************************/
/*The Bad
The following would be considered inefficient:*/

function something() {
    if('something' in obj) {
        // something
    }
    else {
        // fallback
    }
}

/*The Good
Instead of running the conditional check within every function call, run the conditional before setting the function: */

var something = ('something' in obj) ? function() {
    // something
} : function() {
    // fallback
};

/*This pattern is especially applicable when using feature detection -- i.e. the value of the conditional never changing.  Of course the conditional evaluation is fast but why calculate easy conditionals more than once? You shouldn't, of course.  Keep this pattern in mind when creating your own frameworks -- don't repeat code! */
/*The code above is inefficient because the conditional is run upon each call of the function.  Let's do better!*/
