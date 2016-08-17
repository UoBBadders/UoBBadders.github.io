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
      $scope.currentTop = 'A';
      var transparentA = false;
      var transparentB = false;
      var idxA = 0;
      var idxB = 1;
      var isAnimating = false;

      function wrap(idx, len) {
        if(idx < 0) idx = len + idx;
        return idx % len;
      };

      $scope.getImage = function(which) {
        if(which == 'A') {
          return $scope.imageUrls[wrap(idxA, $scope.imageUrls.length)];
        } else {
          return $scope.imageUrls[wrap(idxB, $scope.imageUrls.length)];
        }
      };

      $scope.isTransparent = function(which) {
        if(which == 'A') {
          return transparentA;
        } else {
          return transparentB;
        }
      };

      $scope.next = function() {
        if(isAnimating) return;

        // set the top image to transparent to reveal the bottom image
        if($scope.currentTop == 'A') {
          transparentA = true;
        } else {
          transparentB = true;
        }
        isAnimating = true;

        // wait 1s for opacity animation
        $timeout(function() {
          isAnimating = false;
          // move the bottom image to the top
          // make the new bottom image no longer transparent
          // set the new bottom image url to the image which comes after the top image's url
          if($scope.currentTop == 'A') {
            $scope.currentTop = 'B';
            transparentA = false;
            idxA = wrap(idxA + 2, $scope.imageUrls.length);
          } else {
            $scope.currentTop = 'A';
            transparentB = false;
            idxB = wrap(idxB + 2, $scope.imageUrls.length);
          }
        }, 1000);
      };

      $scope.prev = function() {
        if(isAnimating) return;

        // set the new bottom image url to the image which comes before the top image's url
        if($scope.currentTop == 'A') {
          idxB = wrap(idxB - 2, $scope.imageUrls.length);
        } else {
          idxA = wrap(idxA - 2, $scope.imageUrls.length);
        }

        // set the top image to transparent to reveal the bottom image
        if($scope.currentTop == 'A') {
          transparentA = true;
        } else {
          transparentB = true;
        }
        isAnimating = true;

        // wait 1s for opacity animation
        $timeout(function() {
          isAnimating = false;
          // move the bottom image to the top
          // make the new bottom image no longer transparent
          // set the new bottom image url to the image which comes after the top image's url
          if($scope.currentTop == 'A') {
            $scope.currentTop = 'B';
            transparentA = false;
          } else {
            $scope.currentTop = 'A';
            transparentB = false;
          }
        }, 1000);
      };

      $interval($scope.next, 5000);
    }
  };
}]);
