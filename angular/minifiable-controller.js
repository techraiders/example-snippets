myApp.controller('thecontroller', ['$log', '$scope', function(x, y) {
  x.log(y);
}]

// angular passes detectes dependencies '$log', '$scope' and passes to consecuctive parameter x, y. If we pass dependencies of controller directly as parameter to the function of controller. Javascript minifier shorten parameter into 1 character and angular fails to identify dependencies.