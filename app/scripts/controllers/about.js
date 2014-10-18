'use strict';

/**
 * @ngdoc function
 * @name primeTableApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the primeTableApp
 */
angular.module('primeTableApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
