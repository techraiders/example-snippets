myApp.service('myservice', function() {
  var self = this;
  this.name = 'Navneet';
  this.nameLength = function() {
    return self.name.length;
  };
});

myApp.controller('theController', ['$scope', '$log', 'myservice', function($scope, $log, myservice) {
  $log.log(myservice.name);
  $log.log(myservice.name.length());
}]);