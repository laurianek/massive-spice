'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('primeTableApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('Calculate the nth prime correctly', function () {
    scope.nPrime = 1;
    expect(scope.lsPrime.length).toEqual(0);
    expect(scope.storePrime.list.length).toEqual(0);

    scope.findPrimes(scope.nPrime);

    expect(scope.lsPrime.length).toEqual(0);
    expect(scope.storePrime.list.length).toEqual(1 + 1);
    expect(scope.storePrime.list[1]).toEqual(2);
    expect(scope.storePrime.maxCheckNum).toEqual(3);

    scope.nPrime = 2;
    scope.findPrimes(scope.nPrime);

    expect(scope.lsPrime.length).toEqual(0);
    expect(scope.storePrime.list.length).toEqual(2 + 1);
    expect(scope.storePrime.list[2]).toEqual(3);
    expect(scope.storePrime.maxCheckNum).toEqual(5);

    scope.nPrime = 102;
    scope.findPrimes(scope.nPrime);

    expect(scope.lsPrime.length).toEqual(0);
    expect(scope.storePrime.list.length).toEqual(102 + 1);
    expect(scope.storePrime.list[102]).toEqual(557);
    expect(scope.storePrime.maxCheckNum).toEqual(557 + 2);

  });

  it('Initialise with the first 10 primes', function () {
    scope.update();
    expect(scope.nPrime).toEqual(10);
    expect(scope.storePrime.list.length).toBe(10 + 1);
    expect(scope.storePrime.list[0]).toEqual(1);
    expect(scope.storePrime.list).toEqual([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  it('Checks the user input and communication', function () {
    scope.nPrime = '5';
    scope.update();
    expect(scope.communication).toBe('The 5th prime is 11');

    scope.nPrime = '5lol';
    scope.update();
    expect(scope.communication).toBe('You\'ve type on incorrect number');

    scope.nPrime = 'lol';
    scope.update();
    expect(scope.communication).toBe('You\'ve type on incorrect number');

    scope.nPrime = '0005';
    scope.update();
    expect(scope.communication).toBe('The 5th prime is 11');

    scope.nPrime = '5.78';
    scope.update();
    expect(scope.communication).toBe('Please enter whole numbers only');

    scope.nPrime = '';
    scope.update();
    expect(scope.communication).toBe('Please enter a number');

  });

  it('Checks the communication nth to be in correct English', function () {
    scope.nPrime = '1';
    scope.update();
    expect(scope.communication).toContain('The 1st prime is');

    scope.nPrime = '21';
    scope.update();
    expect(scope.communication).toContain('The 21st prime is');

    scope.nPrime = '2';
    scope.update();
    expect(scope.communication).toContain('The 2nd prime is');

    scope.nPrime = '52';
    scope.update();
    expect(scope.communication).toContain('The 52nd prime is');

    scope.nPrime = '3';
    scope.update();
    expect(scope.communication).toContain('The 3rd prime is');

    scope.nPrime = '43';
    scope.update();
    expect(scope.communication).toContain('The 43rd prime is');

    scope.nPrime = '4';
    scope.update();
    expect(scope.communication).toContain('The 4th prime is');

    scope.nPrime = '34';
    scope.update();
    expect(scope.communication).toContain('The 34th prime is');


    scope.nPrime = '11';
    scope.update();
    expect(scope.communication).toContain('The 11th prime is');

    scope.nPrime = '12';
    scope.update();
    expect(scope.communication).toContain('The 12th prime is');

    scope.nPrime = '13';
    scope.update();
    expect(scope.communication).toContain('The 13th prime is');
  });

});
