'use strict';

describe('Controller: SlackCtrl', function () {

  // load the controller's module
  beforeEach(module('nodersWebApp'));

  var SlackCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlackCtrl = $controller('SlackCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
