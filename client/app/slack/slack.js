'use strict';

angular.module('nodersWebApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('slack', {
        url: '/slack',
        templateUrl: 'app/slack/slack.html',
        controller: 'SlackCtrl'
      });
  });