/**** CREATING CUSTOM FILTER ****/

angular.module('hospitalApp')
  .filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
  })
  
  /***** FILTERING DATA INTO CONTROLLER USING $filter SERVICE *****/
  myApp.controller('controllerName', function($log, $scope, $filter) {
    $scope.name = 'Prateek';
    $scope.changedname = $filter('uppercase')($scope.name);
    
    $log.info($scope.name);
    $log.info($scope.changedname);
  })