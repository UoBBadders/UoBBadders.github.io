var app = angular.module('badmintonApp');
app.controller('footerController', ['$scope', 'footerLinksLeft', 'footerLinksRight', function($scope, footerLinksLeft, footerLinksRight) {
  $scope.footerLinksLeft = footerLinksLeft;
  $scope.footerLinksRight = footerLinksRight;
}]);
