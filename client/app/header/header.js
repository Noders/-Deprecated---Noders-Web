'use strict';

angular.module('nodersWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('slack', {
        url: '/login',
        templateUrl: 'app/header/login.html',
        controller: 'SlackCtrl'
      })
      .state('slack', {
        url: '/register',
        templateUrl: 'app/header/register.html',
        controller: 'SlackCtrl'
      });
  });