Sometimes it is quite possible to come across circular dependencies. This happens when service A injects service B, but service b also injects service A,
or 
A depends on serice B depends on service C and C also depends on A.

When angular bootstraps process, it tries to setup all the services, and injects each services dependencies, detects when such a scenario happens and error out, instead stuck in infinite loop.

CIRCULAR DEPENDENCIES:
*Cause Angular's bootstrap to error.
*Usually are a code smell.
*May be solved by splitting services smaller.

COMMON EXAMPLE AND SOLUTION WHEN CIRCULAR DEPENDENCY IS REQUIRED:
HTTP Interceptors:
*Angular's way for handling cross-app HTTP concerns.
*Most commonly used for authentication and error handling.
*Listens for HTTP failures.

Example:
*Listens for HTTP failures.
*Create an interceptor to be incharge of handling different responses.
*For one of its handling scenarios, it depends on an external service, which in turn makes an HTTP request.
*In case of 401 failures, calls AuthService.
*AuthService performs login request.
*The same service

$httpProvider.interceptors.push(function (AuthService) {
  return {
    response: function (response) {
     // Detect and handle 401 errors
     AuthService.handleExpiredSession();
    }
  };
});

function AuthService ($http) {
  return {
    login: function (user, password) {
      // This uses $http to login
    },
    handlerExpiredSession: function () {
     // Redirect to login page
    }
  };
}

attempting to run above code end up throwing below error:
Error: [$injector: cdep] Circular dependency found:
$http <- AuthService <- $http

SOLUTION: Angular provides $injector service. Which is the programatic way to access AngularJs dependency injection at run time.
$httpProvider.interceptors.push(function ($injector) {
  return {
    response: function (response) {
     // Detect and handle 401 errors
     $injector.get('AuthService').handleExpiredSession();
     // Difference is now we are performing this at later point, after angular has finished bootstraping of the project.
     // At this point everything is up and running and it is safe to get an instance of AuthService using $injector.
    }
  };
});