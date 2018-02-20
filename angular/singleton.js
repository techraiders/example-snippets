/* Angular services are singleton which object can't be created, whereas $scope service is an exception */

myApp.controller('theController', ['$scope', '$log', function($scope, $log) {
  $log.name = 'I am first';
}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {
  $log.name = 'I am second';
}]);
// Here both names will be added into only one original $log because $log is a service whoose new instance can't be created.
