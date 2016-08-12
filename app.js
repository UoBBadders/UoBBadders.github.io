/* jshint strict:false */
'use strict';

var app = angular.module('badmintonApp', ['ui.router']);

// configure the router
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
});
