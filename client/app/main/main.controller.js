'use strict';

angular.module('nodersWebApp')
    .controller('MainCtrl', ['$scope', '$http', 'uiGmapGoogleMapApi', function($scope, $http, uiGmapGoogleMapApi) {
        $scope.awesomeThings = [];
        $scope.map = {};
        $scope.map.center = {
            latitude: -16.0,
            longitude: -70.0
        };

        $scope.map.zoom = 3;
        $http.get('/api/partners').success(function(partners) {
            $scope.partners = partners;
        });

        $http.get('/api/noders').success(function(noders) {
            $scope.noders = noders;
        });
        $http.get('/api/eventos').success(function(eventos) {
            $scope.eventos = eventos;
        });

        uiGmapGoogleMapApi.then(function(maps) {
            var events = [];
            _.each(noders, function(noder, i) {
                var ob = noder;
                ob.id = i;
                ob.latitude = noder.latitude;
                ob.longitude = noder.longitude;
                ob.title = noder.title;
                events.push(ob);
            });
            $scope.map.noders = events;
            $http.get('/api/map').success(function(noders) {
            });
        });

        $scope.noderClicked = function(marker) {
            $scope.selectedMarker = null;
            $scope.selectedMarker = marker;
        };





        $scope.map.options = {};
        $scope.map.options.styless = [{
            'featureType': 'water',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#d3d3d3'
            }]
        }, {
            'featureType': 'transit',
            'stylers': [{
                'color': '#808080'
            }, {
                'visibility': 'off'
            }]
        }, {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'visibility': 'on'
            }, {
                'color': '#b3b3b3'
            }]
        }, {
            'featureType': 'road.highway',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#ffffff'
            }]
        }, {
            'featureType': 'road.local',
            'elementType': 'geometry.fill',
            'stylers': [{
                'visibility': 'on'
            }, {
                'color': '#ffffff'
            }, {
                'weight': 1.8
            }]
        }, {
            'featureType': 'road.local',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'color': '#d7d7d7'
            }]
        }, {
            'featureType': 'poi',
            'elementType': 'geometry.fill',
            'stylers': [{
                'visibility': 'on'
            }, {
                'color': '#ebebeb'
            }]
        }, {
            'featureType': 'administrative',
            'elementType': 'geometry',
            'stylers': [{
                'color': '#a7a7a7'
            }]
        }, {
            'featureType': 'road.arterial',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#ffffff'
            }]
        }, {
            'featureType': 'road.arterial',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#ffffff'
            }]
        }, {
            'featureType': 'landscape',
            'elementType': 'geometry.fill',
            'stylers': [{
                'visibility': 'on'
            }, {
                'color': '#efefef'
            }]
        }, {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'color': '#696969'
            }]
        }, {
            'featureType': 'administrative',
            'elementType': 'labels.text.fill',
            'stylers': [{
                'visibility': 'on'
            }, {
                'color': '#737373'
            }]
        }, {
            'featureType': 'poi',
            'elementType': 'labels.icon',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'poi',
            'elementType': 'labels',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {
            'featureType': 'road.arterial',
            'elementType': 'geometry.stroke',
            'stylers': [{
                'color': '#d6d6d6'
            }]
        }, {
            'featureType': 'road',
            'elementType': 'labels.icon',
            'stylers': [{
                'visibility': 'off'
            }]
        }, {}, {
            'featureType': 'poi',
            'elementType': 'geometry.fill',
            'stylers': [{
                'color': '#dadada'
            }]
        }];


        var noders = [{
            name: 'NodersCL',
            url: 'http://www.noders.cl',
            sociales: {
                twitter: 'noderscl',
                googleplus: {
                    url: 'https://plus.google.com/u/0/b/118339960159682176759/118339960159682176759/posts',
                    name: 'NodersCL'
                },
                youtube: {
                    url: 'https://www.youtube.com/channel/UC7tUsO3S7424TMcgSCUOCow/videos',
                    name: 'NodersCL'
                },
                facebook: 'NodersCL'
            },
            subname: 'Somos la comunidad de Noders y NodeJS en Chile! ',
            latitude: -33.4422182,
            longitude: -70.6262061,
        }, {
            name: 'NodersEC',
            url: 'http://www.noders.ec',
            sociales: {
                twitter: 'NodersEC',
                facebook: 'NodersEC'
            },
            subname: 'Cursos gratuitos, workshops y charlas en Ecuador! ',
            latitude: -2.1523874,
            longitude: -79.9799096,
        },
        {
            name: 'NodersSV',
            url: 'http://www.facebook.com/nodersSV',
            sociales: {
                twitter: 'NodersSV',
                facebook: 'NodersSV'
            },
            subname: 'Cursos gratuitos, workshops y charlas en El Salvador! ',
            latitude: 13.6914782,
            longitude: -89.2146939
        },
        {
            name: 'NodersAR',
            url: '#',
            sociales: {
                twitter: 'NodersAR',
                facebook: 'NodersAR'
            },
            subname: 'Cursos gratuitos, workshops y charlas en Argentina! ',
            latitude: -32.9264482,
            longitude: -68.813779
        },{
            name: 'NodersCO',
            url: 'http://www.facebook.com/nodersCO',
            sociales: {
                twitter: 'NodersCO',
                facebook: 'NodersCO'
            },
            subname: 'Cursos gratuitos, workshops y charlas en Colombia! ',
            latitude: 1.756815,
            longitude: -75.588355
        },
        {
            name: 'NodersPE',
            url: 'http://www.facebook.com/nodersPE',
            sociales: {
                twitter: 'NodersPE',
                facebook: 'NodersPE'
            },
            subname: 'Cursos gratuitos, workshops y charlas en Colombia! ',
            latitude: 1.756815,
            longitude: -75.588355
        }


    ];




    }]);
