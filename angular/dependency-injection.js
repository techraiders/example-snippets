var person =  function(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

function logit(person) {
  console.log(person);
}

// object is created out side the function. Here new person object sumit is dependent on person object.
var sumit = new person('sumit', 'singh');

logit(sumit);


/* HOW TO INJECT A SERVICE IN THE CONSOLE TO DEBUG THE APPLICATION BY PLAYING WITH SERVICE */
var service = angular.element(document.body).injector().get('serviceName');
