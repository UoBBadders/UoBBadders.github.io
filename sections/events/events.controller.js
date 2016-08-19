var app = angular.module('badmintonApp');
app.controller('eventsController', ['$scope', 'viewOurCalendarLink', function($scope, viewOurCalendarLink) {
  $scope.viewOurCalendarLink = viewOurCalendarLink;
}]);
