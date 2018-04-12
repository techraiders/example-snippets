/* JAVASCRIPT FUNCTION OVERLOADING */
(function () {
  'use strict';
  
  function findAll () {
    // Find all users...
  }
  
  function findByFullName (name) {
    // Find a user by name
  }
  
  function findBySurname (first, last) {
    // Find a user by first and last name
  }
  
  Users.prototype.find = function find () {
    if (arguments.length === 0) return findAll.apply(this);
    if (arguments.length === 1 && typeof (arguments[0]) === 'string')
      return findByFullName.apply(this, arguments);
      
    // by default, search using first and last name
    return findBySurname.apply(this, arguments);
  };
}())

  /******* TRADITIONAL WAY ********/
  // Description: function can also be called before it's defined.
  doProcess(10, 20); // function call
  function doProcess(a, b) {
  // statements
  }
  /* END OF TRADITIONAL WAY */
  
  /** FUNCTION EXPRESSION or FUNCTION LITERALS - MODERN WAY **/
  /* Description: Name of the function removed, and assigned to a variable
     Anonymous function assigned to a variable */
  var doProcess = function(a, b) {
    // statements
  }
  doProcess(10, 20); // function call - can't be before it's definition will through an error.
  
  /* ASSIGNING FUNCTIONS TO OTHER VARIABLE */
  var f = doProcess; // assigment of function
  f(10,20); // function call
    
  /****** PASSING a FUNCTION TO ANOTHER FUNCTION AS AN ARGUMENT *****/
  function doProcess2(process1) {
    process1();
  }
  function doProcess() {
   //
  }
  doProcess2(doProcess);
  
  /******* IMMEDIATELY INVOKED FUNCTION EXPRESSION or SELF EXECUTABLE FUNCTION EXPRESSION *******/
  (
    function() {
     // statements 
    }
  )(); // DESCRIPTION: Immediately invokes itself the moment it is defined. Can also have parameters.
 
  (
    function(a,b) {
     // statements 
    }
  )(10,20); // IIFE can receive arguments
  
  /********** RECEIVING VARIABLE NUMBER OF AGRUMENTS *********/
  function doSum() {
    var s = 0;
    for(var i = 0; i < arguments.length; i++) { // arguments is reserved keyword in JavaScript
      s += arguments[i];
    }
    alert("Total Sum" + s.toString());
  }
  
 doSum(10,20,30);
 doSum(10,20);
 doSum(10,20,30,40,50);

  /******* CALL BACK FUNCTIONS ********/
  function doPrcess(a,b, doLater) {
   alert("Sum = " + (a+b).toString());
   doLater(a, b);
  }
 
  function showDiff(p, q) {
   alert("Diff = " + (p-q).toString());
  }
 function showProduct(m, p) {
  alert("Product: " + (m*p).toString());
 }


// calls doProess, passes arguments to a, b and function definition (name) of showDiff to doLater function 
// <button value="show" onclick="doProcess(10,20, showDiff)"></button>

// We're writing name of the function we have to pass without () otherwise function will be called instead of passing its definition 

// calls doProess, passes arguments to a, b and function definition (name) of showProduct to doLater
// <button value="another show" onclick="doProcess(10,20, showProduct)"></button>

// Passing function definition without creating before 
// <button value="just another show" onclick="doProcess(10,20, function(p, q) {alert('diff: ' + (p-q));})"></button>

  /*************** NESTING JAVASCRIPT FUNCTIONS ************/
  function doProcess(a, b) {
    function doLocalProcess1() {
      // statements
    }
    function doLocalProcess2() {
      // statements
    }
    function doLocalProcess3() {
      // statements
    }
    doLocalProcess1();
    doLocalProcess2();
  }
  doProcess(1,2);
  doLocalProcess1(); // THIS NOT ALLOWED, WILL THROW AN ERROR
  
  /************* FUNCTION RETURNING FUNCTION ***************/
  function doProcess(a, b) {
    function doLocalProcess1() {
      // statements
    }
    function doLocalProcess2() {
      // statements
    }
    return doLocalProcess1;
  }
  
  var f = doProcess(1,2);
  f();
  
  /************** INNER FUNCTION CAN BE ASSIGNED TO OUTER FUNCTION ****************/
  function doProcess() {
    // statements
    function doLocalProcess1() {
     // statements
    }
     /* here outer function's definition is replaced by inner function's definition */
    doProcess = doLocalProcess1;
  }
  doProcess();
  doProcess(); // Executes new definition i.e doLocalProcess1
  doProcess(); // Executes new definition i.e doLocalProcess1
  
  /************** FUNCTION GETS NEW DEFINITION OF ITS EXECUTION ***************/
  function doProcess(a, b) {
    function dispSum() {
      alert('Sum = ' + (a+b).toString());
    }
    dispSum();
    doProcess = function(a,b) {
      alert('Diff = ' + (a-b).toString());
    }
  }
  doProcess(20,10); // OUTPUT 20  
  doProcess(20,10); // OUTPUT 10
  
  /***************** FUNCTIONS AS ARRAY ELEMENTS *********************/
  var arr = [];
  arr[0] = function() {
    alert('First');
  };
  arr[1] = function() {
    alert('Second');
  };
  arr[2] = function() {
    alert('Third');
  };
  arr[3] = function() {
    alert('Fourth');
  };
  
  for(var i=0; i<arry.length; i++) {
    var f = arr[i];
    // OR arr[i]();
  }
  
/************** FUNCTIONS AS EVENT HANDLERS ***************/
  function attachEvent() {
    var btnDummy = document.getElementById("btnDummy");
    btnDummy.onclick = function() {
      alert("Hey, I am functioning");
    };
    btnDummy.value = "I am not dummy any more.";
  }

/* <button id="btnDummy" value="I'm dummy. click following button to make me functional"></button><br/>
<button id=""btnDo value="attach event to above button" onclick="attachEvent()"></button> */
