app.config(['$logProvider', function() {
  $logProvider.debugEnabled(false);
}]);

// this disables debug-lever messages.
// Prefer $log over console.log($log is safe and handles case when the browser does not implement console logging.)


/* HOW TO INJECT A SERVICE IN THE CONSOLE TO DEBUG THE APPLICATION BY PLAYING WITH SERVICE */
var service = angular.element(document.body).injector().get('serviceName');
