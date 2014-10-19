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
    expect(scope.storePrime.list.length).toEqual(1+1);
    expect(scope.storePrime.list[1]).toEqual(2);
    expect(scope.storePrime.maxCheckNum).toEqual(3);

    scope.nPrime = 2;
    scope.findPrimes(scope.nPrime);

    expect(scope.lsPrime.length).toEqual(0);
    expect(scope.storePrime.list.length).toEqual(2+1);
    expect(scope.storePrime.list[2]).toEqual(3);
    expect(scope.storePrime.maxCheckNum).toEqual(5);

    scope.nPrime = 102;
    scope.findPrimes(scope.nPrime);

    expect(scope.lsPrime.length).toEqual(0);
    expect(scope.storePrime.list.length).toEqual(102+1);
    expect(scope.storePrime.list[102]).toEqual(557);
    expect(scope.storePrime.maxCheckNum).toEqual(557 + 2);

  });

  it('Initialise with the first 10 primes', function () {
    scope.update();
    expect(scope.nPrime).toEqual(10);
    expect(scope.storePrime.list.length).toBe(10+1);
    expect(scope.storePrime.list[0]).toEqual(1);
    expect(scope.storePrime.list).toEqual([1,2,3,5,7,11,13,17,19,23,29]);
  });
  
});
