var app = angular.module('badmintonApp');
app.controller('headerController', function($scope) {
  // TODO: animate header.
  // Strategy: instead of switching image urls, fade top image to 0 opacity, then set bottom image as top image (z-index).
  // Should be down in directive.
  $scope.images = ['assets/images/cover1.jpg', 'assets/images/cover2.jpg'];
  $scope.idx = 0;

  function mod(x, m) {
    return (x % m + m) % m;
  }

  $scope.getImageUrl = function(idx) {
    return $scope.images[($scope.idx + idx) % $scope.images.length];
  };

  $scope.next = function() {
    $scope.idx = mod($scope.idx + 1, $scope.images.length);
  };
  $scope.prev = function() {
    $scope.idx = mod($scope.idx - 1, $scope.images.length);
  };
});
