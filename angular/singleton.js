/* Angular services are singleton which object can't be created, whereas $scope service is an exception */

myApp.controller('theController', ['$scope', '$log', function($scope, $log) {
  $log.name = 'I am first';
}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {
  $log.name = 'I am second';
}]);
// Here both names will be added into only one original $log because $log is a service whoose new instance can't be created.



/* IMPLEMENTING SINGLETON DESIGN PATTERN IN VANILLA JAVASCRIPT */

var Singleton = (function () {
  var instance;
  
  function createInstance () {
    var object = new Object('I am the instance');
    return object;
  }
  
  return {
    getInstance : function () {
      if (!instance) instance = createInstance();
      return instance;
    }
  };  
})();

function run() {
  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();
  
  alert('Same instance? ' + (instance1 === instance2));
}
