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
    $scope.nPrime = 10;
    $scope.lsPrime = [];
    $scope.lsPrime1 = [];

    var findPrimes = function (nPrime) {
      var lsPrime = [1];
      var num = 3;

      //push the first prime 2 in the list
      lsPrime.push(2);

      //from 3 onwards increment by 2 to only get odd numbers
      // as even numbers are not primes except 2
      while (lsPrime.length <= nPrime) {
        var isPrime = true;

        //check if number is prime by dividing it with the prime in list,
        // if number then add to list
        for (var i = 1; i <= lsPrime.length; i++) {
          isPrime = num % lsPrime[i] !== 0;
          if (!isPrime) {
            break;
          }
        }
        if(isPrime) {
          lsPrime.push(num);
        }

        //increment number to check prime
        num += 2;
      }
      $scope.lsPrime = lsPrime;
    };

    findPrimes($scope.nPrime);
    $scope.$watch('nPrime', function() {
      findPrimes($scope.nPrime);
    });
  });
