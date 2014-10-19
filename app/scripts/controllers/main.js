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
    //I like to 'declare' all my scope variable at the top so it's easy to find
    $scope.nPrime = 10;
    $scope.lsPrime = [];
    $scope.storePrime = { list: [], maxCheckNum: 0 };
    $scope.communication = '';
    $scope.style = '';

    $scope.findPrimes = function (nPrime) {

      //Init. pushes the first prime, 2, in the list and 1 has a display helper
      var lsPrime = [1,2];
      var num = 3;

      //If the asked number prime is lower than has been calculated before, don't calculate again
      if($scope.storePrime.list.length - 1 > nPrime) {
        return;

      } else if ($scope.storePrime.list.length === 0 ) {
        $scope.storePrime.list = lsPrime;
        $scope.storePrime.maxCheckNum = 2;

      } else {
        lsPrime = $scope.storePrime.list;
        num = $scope.storePrime.maxCheckNum;
      }

      //from 3 onwards increment by 2 to only get odd numbers
      // as even numbers are not primes except 2
      while (lsPrime.length <= nPrime) {
        var isPrime = true;
        var maxCheckNum = num/2;

        //check if number is prime by dividing it with the prime in list,
        // do not check numbers higher than num/2,
        // if number then add to list
        for (var i = 1; i <= lsPrime.length; i++) {
          isPrime = 0 !== num % lsPrime[i];
          if (!isPrime || lsPrime[i] > maxCheckNum) {
            break;
          }
        }
        if(isPrime) {
          lsPrime.push(num);
        }

        //increment number to check prime
        num += 2;
      }
      $scope.storePrime.list = lsPrime;
      $scope.storePrime.maxCheckNum = num;
    };

    $scope.displayPrimes = function() {
      if($scope.storePrime.list.length - 1 > $scope.nPrime) {
        $scope.findPrimes($scope.nPrime);
      }
      $scope.lsPrime = $scope.storePrime.list.slice(0, parseInt($scope.nPrime)+ 1);
    };

    $scope.update = function () {

      $scope.findPrimes($scope.nPrime);

      var tooBig;
      $scope.style = '';

      if($scope.nPrime < 300) {
        $scope.displayPrimes();
      } else {
        $scope.lsPrime = [];
        tooBig = 'Sorry the number you\'ve type is too big to display into a table! ';
        $scope.style = 'bg-warning';
      }

      var nth = 'th',
        strNum = $scope.nPrime.toString(),
        lastNum = strNum.slice(strNum.length -1);
      if( lastNum === '1' && strNum !== '11') {
        nth = 'st';
      } else if ( lastNum === '2' && strNum !== '12' )  {
        nth = 'nd';
      } else if ( lastNum === '3' && strNum !== '13'){
        nth = 'rd';
      }
      $scope.communication = [tooBig, 'The ',$scope.nPrime,nth,' prime is ',$scope.storePrime.list[$scope.nPrime]].join('');

    };

    //init
    $scope.displayPrimes();

    $scope.$watch('nPrime', function() {

      if(!Number($scope.nPrime)) {
        $scope.communication = 'You\'ve type on incorrect number';
        $scope.style = 'bg-danger';
        $scope.lsPrime = [];
        return;
      }
      $scope.update();
    });
  });
