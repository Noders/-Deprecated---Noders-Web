'use strict';

angular.module('nodersWebApp')
  .config(['$stateProvider', 'uiGmapGoogleMapApiProvider', function ($stateProvider, uiGmapGoogleMapApiProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
     uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBo23LhSupwDkusUkKPcq0HOUvwxMgTNb8',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
  }]);


function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyBo23LhSupwDkusUkKPcq0HOUvwxMgTNb8&sensor=TRUE";
  document.body.appendChild(script);
}

window.onload = loadScript;