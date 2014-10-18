'use strict';

/**
 * @ngdoc function
 * @name primeTableApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the primeTableApp
 */
angular.module('primeTableApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
