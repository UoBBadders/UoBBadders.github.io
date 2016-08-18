var app = angular.module('badmintonApp');
app.controller('headerController', ['$scope', 'coverImageUrls', function($scope, coverImageUrls) {
  $scope.images = coverImageUrls;
}]);
