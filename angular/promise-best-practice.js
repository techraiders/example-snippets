BAD PRACTICE TO RETURN IMMEDIATE PROMISE, HARDCODED RESPONSE:
var defer;
defer = $q.defer();
defer.resolve(['detail', 'simple']);
return defer.promise;

GOOD PRACTICE:
To return immediate promise (hard coded response).
return $q.when(['detail', 'simple']);

To reject a promise:
return $q.reject({error: 'something bad'});

