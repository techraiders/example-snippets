app.factory('$exceptionHandler', function() {
  return function (exception, cause) {
    exception.message += ' (causes by "' + cause + '")';
    throw exception;
  }
});