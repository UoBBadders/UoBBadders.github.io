var app = angular.module('badmintonApp');
app.directive('navBar', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/components/nav-bar/nav-bar.view.html'
  };
});
