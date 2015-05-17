/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function(req, res) {
    res.json(["THIS IS OUR API :-)"]);
};

exports.partners = function(req, res) {
    res.json([{
        name: 'GDG Santiago',
        img: 'googledevelopersgroup.png',
        url: 'http://gdgsantiago.cl/'
    }, {
        name: 'IF',
        img: 'if.png',
        url: 'http://www.ifchile.com'
    }, {
        name: 'Noisegrasp',
        img: 'noisegrasp.png',
        url: 'http://www.noisegrasp.com'
    }, {
        name: 'Strongloop',
        img: 'strongloop.png',
        url: 'http://www.strongloop.com'
    }, {
        name: 'CryptoParty.ec',
        img: 'cryptoparty.png',
        url: 'https://www.cryptoparty.ec/'
    }, {
        "name": "Area51",
        "img": "area51.jpg",
        "url": "http://area51.ec/"
    }]);
};




exports.noders = function(req, res) {
    res.json([{
            img: 'fforres.jpg',
            username: 'fforres',
            pais: 'Chile',
            url: 'http://www.twitter.com/fforres'
        }, {
            img: 'josevildosola.jpg',
            username: 'josevildosola55',
            pais: 'Chile',
            url: 'http://www.twitter.com/josevildosola55'
        }, {
            img: 'maetschl.jpeg',
            username: 'maetschl',
            pais: 'Chile',
            url: 'http://www.twitter.com/maetschl'
        }, {
            img: 'rchancay.jpeg',
            username: 'r_chancay',
            pais: 'Ecuador',
            url: 'http://www.twitter.com/r_chancay'
        }, {
            img: 'AdrianoChiliseo.jpeg',
            username: 'AdrianoChiliseo',
            pais: 'El Salvador',
            url: 'http://www.twitter.com/AdrianoChiliseo'
        }, {
            img: 'WillBonilla11.jpg',
            username: 'WillBonilla11',
            pais: 'El Salvador',
            url: 'http://www.twitter.com/WillBonilla11'
        }, {
            img: 'enriquegraficos.png',
            username: 'enriquegraficos',
            pais: 'El Salvador',
            url: 'http://www.twitter.com/enriquegraficos'
        }, {
            img: 'melvingilbertos.jpg',
            username: 'melvingilbertos',
            pais: 'El Salvador',
            url: 'http://www.twitter.com/melvingilbertos'
        }, {
            img: 'norr1994.jpg',
            username: 'norr1994',
            pais: 'El Salvador',
            url: 'http://www.twitter.com/norr1994'
        }, {
            img: 'beacon_tech.png',
            username: 'beacon_tech',
            pais: 'Argentina',
            url: 'http://www.twitter.com/beacon_tech'
        }, {
            img: 'icristiam.jpeg',
            username: 'icristiam',
            pais: 'Colombia',
            url: 'http://www.twitter.com/icristiam'
        }, {
            img: 'Juanqtx.jpg',
            username: 'Juanqtx',
            pais: 'Colombia',
            url: 'http://www.twitter.com/Juanqtx'
        }




    ]);
};


// Get list of map locations
exports.map = function(req, res) {
    var Noders = [{
            name: 'NodersCL',
            url: 'http://www.noders.cl',
            sociales: {
                twitter: 'noderscl',
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
        }, {
            name: 'NodersSV',
            url: 'http://www.facebook.com/nodersSV',
            sociales: {
                twitter: 'NodersSV',
                facebook: 'NodersSV'
            },
            subname: 'Cursos gratuitos, workshops y charlas en El Salvador! ',
            latitude: 13.6914782,
            longitude: -89.2146939
        }, {
            name: 'NodersAR',
            url: '#',
            sociales: {
                twitter: 'NodersAR',
                facebook: 'NodersAR'
            },
            subname: 'Cursos gratuitos, workshops y charlas en Argentina! ',
            latitude: -32.9264482,
            longitude: -68.813779
        }, {
            name: 'NodersCO',
            url: 'http://www.facebook.com/nodersCO',
            sociales: {
                twitter: 'NodersCO',
                facebook: 'NodersCO'
            },
            subname: 'Cursos gratuitos, workshops y charlas en Colombia! ',
            latitude: 1.756815,
            longitude: -75.588355
        }, {
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


    ]
    res.json(Noders);
};



// Get list of map locations
exports.eventos = function(req, res) {
    var Noders = [{
            name: 'Que se necesita para ser un progamador en NodeJS',
            organizador: 'NodersSV',
            url: 'http://www.facebook.com/noderssv',
            sociales: {
                twitter: 'nodersSV',

                facebook: 'NodersSV'
            },
            fecha: '15/05/2015',
            lugar: {
                latitude: -33.4422182,
                longitude: -70.6262061
            }
        }, {
            name: 'ReactJS Clase1 - "React"',
            organizador: 'NodersCL',
            url: 'http://www.noders.cl',
            sociales: {
                twitter: 'nodersCL',
                facebook: 'nodersCL'
            },
            fecha: '25/05/2015',
            lugar: {
                latitude: -33.4422182,
                longitude: -70.6262061
            }
        }, {
            name: 'ReactJS Clase2 - "Flux"',
            organizador: 'NodersCL',
            url: 'http://www.noders.cl',
            sociales: {
                twitter: 'nodersCL',
                facebook: 'nodersCL'
            },
            fecha: '01/06/2015',
            lugar: {
                latitude: -33.4422182,
                longitude: -70.6262061
            }
        }, {
            name: 'ReactJS Clase3 - "Ecosistema de ReactJS"',
            organizador: 'NodersCL',
            url: 'http://www.noders.cl',
            sociales: {
                twitter: 'nodersCL',
                facebook: 'nodersCL'
            },
            fecha: '08/06/2015',
            lugar: {
                latitude: -33.4422182,
                longitude: -70.6262061
            }
        }

    ]
    res.json(Noders);
};
