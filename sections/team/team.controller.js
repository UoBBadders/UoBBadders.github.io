var app = angular.module('badmintonApp');
app.controller('teamController', ['$scope', 'committee', 'captains', 'coaches', 'others', function($scope, committee, captains, coaches, others) {
  $scope.committee = committee;
  $scope.captains = captains;
  $scope.coaches = coaches;
  $scope.others = others;
}]);
