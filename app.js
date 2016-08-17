/* jshint strict:false */
'use strict';

var app = angular.module('badmintonApp', ['ui.router', 'config', 'duScroll', 'hc.marked', 'leaflet-directive']);

// configure GitHub flavoured markdown
app.config(['markedProvider', function (markedProvider) {
  markedProvider.setOptions({ gfm: true });
}]);

// configure the router
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
});


app.controller('appController', ['$rootScope', '$scope', function($rootScope, $scope) {
  $scope.headerUrl = '/sections/header/header.view.html';
  $scope.aboutUrl = '/sections/about/about.view.html';
  $scope.teamUrl = '/sections/team/team.view.html';
  $scope.membershipUrl = '/sections/membership/membership.view.html';
  $scope.eventsUrl = '/sections/events/events.view.html';
  $scope.galleryUrl = '/sections/gallery/gallery.view.html';
  $scope.contactUrl = '/sections/contact/contact.view.html';
}]);
