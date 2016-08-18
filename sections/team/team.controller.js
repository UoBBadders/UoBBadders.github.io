var app = angular.module('badmintonApp');
app.controller('teamController', ['$scope', 'committee', 'captains', 'coaches', function($scope, committee, captains, coaches) {
  $scope.committee = committee;
  $scope.captains = captains;
  $scope.coaches = coaches;
}]);
