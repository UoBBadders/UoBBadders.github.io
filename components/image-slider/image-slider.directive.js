var app = angular.module('badmintonApp');
app.directive('imageSlider', ['$timeout', '$interval', function($timeout, $interval) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imageUrls: '='
    },
    templateUrl: 'components/image-slider/image-slider.view.html',
    link: function($scope) {
      $scope.topIdx = 1;
      $scope.bottomIdx = 0;
      $scope.transparent = false;
      $scope.currentTop = 0;

      $scope.getImageUrl = function(idx) {
        if(idx === 0) {
          return $scope.imageUrls[mod($scope.topIdx, $scope.imageUrls.length)];
        } else {
          return $scope.imageUrls[mod($scope.bottomIdx, $scope.imageUrls.length)];
        }
      };

      $scope.isTransparent = function(idx) {
        return $scope.transparent && $scope.currentTop == idx;
      };


      function mod(x, m) {
        return (x % m + m) % m;
      }

      // TODO: this isnt actually cycling through in order...

      // set top image opacity to 0
      // make bottom image top image
      // set new bottom image opacity to 1
      // increment new bottom image url
      $scope.next = function() {
        $scope.transparent = !$scope.transparent;
        $timeout(function () {
          if($scope.currentTop === 0) {
            $scope.currentTop = 1;
          } else {
            $scope.currentTop = 0;
          }
          $scope.transparent = !$scope.transparent;

          if($scope.currentTop === 0) {
            $scope.bottomIdx = mod($scope.bottomIdx + 1, $scope.imageUrls.length);
          } else {
            $scope.topIdx = mod($scope.topIdx + 1, $scope.imageUrls.length);
          }
        }, 1000);
      };

      $scope.prev = function() {
        $scope.transparent = !$scope.transparent;
        $timeout(function () {
          if($scope.currentTop === 0) {
            $scope.currentTop = 1;
          } else {
            $scope.currentTop = 0;
          }
          $scope.transparent = !$scope.transparent;

          if($scope.currentTop === 0) {
            $scope.bottomIdx = mod($scope.bottomIdx - 1, $scope.imageUrls.length);
          } else {
            $scope.topIdx = mod($scope.topIdx - 1, $scope.imageUrls.length);
          }
        }, 1000);
      };

      $interval($scope.next, 5000);
    }
  };
}]);
