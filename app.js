/* jshint strict:false */
'use strict';

var app = angular.module('badmintonApp', ['ui.router', 'config']);

// configure base URL for the environment
app.run(['$rootScope', 'ENV', function($rootScope, ENV) {
  console.log("ENVIRONMENT: %j", ENV);
  $rootScope.baseUrl = ENV.baseUrl;
}]);

// configure the router
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
});


app.controller('appController', ['$rootScope', '$scope', function($rootScope, $scope) {
  var prepend = ($rootScope.baseUrl == '/') ? '' : $rootScope.baseUrl;
  $scope.headerUrl = prepend + '/sections/header/header.view.html';
  $scope.aboutUrl = prepend + '/sections/about/about.view.html';
  $scope.teamUrl = prepend + '/sections/team/team.view.html';
  $scope.membershipUrl = prepend + '/sections/membership/membership.view.html';
  $scope.eventsUrl = prepend + '/sections/events/events.view.html';
  $scope.galleryUrl = prepend + '/sections/gallery/gallery.view.html';
  $scope.contactUrl = prepend + '/sections/contact/contact.view.html';
}]);
