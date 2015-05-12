'use strict';

angular.module('nodersWebApp')
    .controller('MainCtrl', ['$scope', '$http', 'uiGmapGoogleMapApi', function($scope, $http, uiGmapGoogleMapApi) {
        $scope.awesomeThings = [];
        $scope.map = {}
        $scope.map.center = {
            latitude: -16.0,
            longitude: -70.0
        };

        $scope.map.zoom = 3;

        $http.get('/api/things').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        uiGmapGoogleMapApi.then(function(maps) {
            $http.get('/api/map').success(function(noders) {
                var events = [];
                _.each(noders,function(node,i){
                    var ob = {};
                    ob.id = i;
                    ob.latitude= node.latitude;
                    ob.longitude= node.longitude;
                    ob.title='T'+i;
                    events.push(ob);
                });
                $scope.map.noders = events;
                console.log($scope.map.noders)
            });
        });





        $scope.map.options = {}
        $scope.map.options.styless = [{
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#d3d3d3"
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "color": "#808080"
            }, {
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#b3b3b3"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ffffff"
            }, {
                "weight": 1.8
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#d7d7d7"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ebebeb"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [{
                "color": "#a7a7a7"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#efefef"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#696969"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#737373"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#d6d6d6"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {}, {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#dadada"
            }]
        }];




    }]);
