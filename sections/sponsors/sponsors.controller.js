var app = angular.module('badmintonApp');
app.controller('sponsorsController', ['$scope', 'sponsors', function($scope, sponsors) {
  $scope.sponsors = sponsors;
}]);
