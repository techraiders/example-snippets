
module.service('fileUpload', ['$http', function ($http) {
  this.uploadFileToUrl = function (file, uploadUrl) {
    var formData = new FormData();
    formData.append('file', file);

    $http.post(uploadUrl, formData, {
      // Angular's default transformRequest function will try to serialize our FormData object, so we override it with angular.identity function to leave the data intact.
      transformRequest: angular.identity,

      // Angular's default Content-Type header for POST and PUT request is application/json, so we want to change this, too. By setting 'Content-Type': undefined, the browser sets the Content-Type to multipart/form-data for us and fills in the corrent boundary. Manually setting 'Content-Type' : multipart/form-data will fail to fill in the boundary parameter of the request.
      headers: {
        'Content-Type' : undefined
      }
    }).then(function (response) {

    }, function (reason) {

    });
  };
}]);
