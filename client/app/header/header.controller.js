'use strict';

angular.module('nodersWebApp')
    .controller('HeaderCtrl', function($scope) {
        $scope.menu = [{
            'title': 'slack',
            'link': '/slack'
        }];

        $scope.isCollapsed = true;

        $scope.isActive = function(route) {
            return route === $location.path();
        };
    });
