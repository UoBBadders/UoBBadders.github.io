var app = angular.module('badmintonApp');
app.controller('teamController', function($scope) {
  $scope.committee = [{
    imageUrl: 'assets/images/default-profile.jpg',
    name: 'John Smith',
    position: 'position',
    email: 'john@smith.com'
  }, {
    imageUrl: 'assets/images/default-profile.jpg',
    name: 'John Smith',
    position: 'position',
    email: 'john@smith.com'
  }, {
    imageUrl: 'assets/images/default-profile.jpg',
    name: 'John Smith',
    position: 'position',
    email: 'john@smith.com'
  }, {
    imageUrl: 'assets/images/default-profile.jpg',
    name: 'John Smith',
    position: 'position',
    email: 'john@smith.com'
  }];

  $scope.captains = [{
    imageUrl: 'assets/images/default-profile.jpg',
    name: 'John Smith',
    position: 'team | division',
    email: 'john@smith.com'
  }, {
    imageUrl: 'assets/images/default-profile.jpg',
    name: 'John Smith',
    position: 'team | division',
    email: 'john@smith.com'
  }, {
    imageUrl: 'assets/images/default-profile.jpg',
    name: 'John Smith',
    position: 'team | division',
    email: 'john@smith.com'
  }, {
    imageUrl: 'assets/images/default-profile.jpg',
    name: 'John Smith',
    position: 'team | division',
    email: 'john@smith.com'
  }];
});
