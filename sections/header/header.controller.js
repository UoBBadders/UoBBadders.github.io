var app = angular.module('badmintonApp');
app.controller('headerController', ['$scope', '$interval', function($scope, $interval) {
  $scope.images = ['assets/images/cover1.jpg',
                   'assets/images/cover2.jpg',
                   'assets/images/cover3.jpg',
                   'assets/images/cover4.jpg',
                   'assets/images/cover5.jpg',
                   'assets/images/cover6.jpg',
                   'assets/images/cover7.jpg',
                   'assets/images/cover8.jpg'];
}]);
