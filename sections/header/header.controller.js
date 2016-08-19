var app = angular.module('badmintonApp');
app.controller('headerController', ['$scope', 'coverImageUrls', function($scope, coverImageUrls) {
  $scope.images = [];

  for(var i = 0; i < coverImageUrls.length; i++) {
    $scope.images.push('EDITME/images/slideshow/' + coverImageUrls[i]);
  }
}]);
