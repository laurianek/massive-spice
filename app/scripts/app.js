'use strict';

/**
 * @ngdoc overview
 * @name primeTableApp
 * @description
 * # primeTableApp
 *
 * Main module of the application.
 */
angular
  .module('primeTableApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
