.directive('activateClickedLink', function () {
      return {
          restrict: 'A',
          link: function (scope, iElement) {
              iElement.find('a').on('click', function () {
                  iElement.find("a").removeClass("active");
                  angular.element(this).addClass("active");
              });
          }
      }
  })