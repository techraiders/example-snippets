<textarea data-ng-model="vm.obj.property" data-min-words="10"></textarea>
<div data-ng-message="minWords">You must provide at least 10 words.</div>

<script>
(function(){
  'use strict';
  app.directive('minWords', function() {
    return {
      restrict: 'A';
    scope: {
      minWords: '='
    },
    require: 'ng-model',
    link: function($scope,$element,$attrs,$ctrl){
      $ctrl.$validators.minWords = function(modelValue) {
        if(modelValue != undefined) {
          var words = modelValue.split(' ');
          if(words.length >= $scope.minwords || 5) {
           return true;
          }
        }
        return false;
      }
    }
    };
  });
}());
  
  
  /***************************** Building Async Validators **********************/
  angular.module('myModule').directive('usernameValidator', function($http, $q) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$asyncValidators.username = function(modelValue, viewValue) {
                return $http.post('/username-check', {username: viewValue}).then(
                    function(response) {
                        if (!response.data.validUsername) {
                            return $q.reject(response.data.errorMessage);
                        }
                        return true;
                    }
                );
            };
        }
    };
});
  
/* Basically it’s just a matter of adding an asynchronous validator on that field. That validator simply performs an HTTP request and according to the response sets the field as valid or not. The mechanism that enables this is plain promises: our validator returns a promise and the field’s validity will remain in “pending” state until the promise is resolved. If it resolves with an error, the field will be marked invalid, otherwise Angular assumes all is well.

But, a caveat we have left in the example above is that it let’s the user attempt to submit the form while we are still waiting for some pending validations to return. That’s because the submit button is only disabled while the form is invalid (myForm.$invalid). While there are pending validations and no invalid fields the form isn’t invalid (yet) and so the button isn’t disabled. The solution is to disable the button also while the form is pending:

<button type="submit" ng-disabled="myForm.$invalid || myForm.$pending">Sign Up</button> */
</script>