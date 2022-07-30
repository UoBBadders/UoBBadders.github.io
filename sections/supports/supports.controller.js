var app = angular.module('badmintonApp');
app.controller('supportsController', ['$scope', 'supports', function($scope, supports) {
  $scope.supports = supports;
}]);
