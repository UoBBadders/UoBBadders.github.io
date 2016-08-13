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
