var app = angular.module('badmintonApp');
app.controller('contactController', function($scope) {
  $scope.center = {
    lat: 51.459070,
    lng: -2.602742,
    zoom: 16
  };
});
