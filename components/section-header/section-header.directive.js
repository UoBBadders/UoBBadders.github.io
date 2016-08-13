var app = angular.module('badmintonApp');
app.directive('sectionHeader', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      title: '&'
    },
    templateUrl: '/components/section-header/section-header.view.html'
  };
});
