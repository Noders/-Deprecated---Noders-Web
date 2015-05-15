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
        url: 'http://www.google.com'
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
            web: 'http://www.noders.cl',
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
            web: 'http://www.noders.ec',
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
            web: 'http://www.facebook.com/nodersSV',
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
            web: '#',
            sociales: {
                twitter: 'NodersAR',
                facebook: 'NodersAR'
            },
            subname: 'Cursos gratuitos, workshops y charlas en Argentina! ',
            latitude: -32.9264482,
            longitude: -68.813779
        },{
            name: 'NodersCO',
            web: 'http://www.facebook.com/nodersCO',
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
            web: 'http://www.facebook.com/nodersPE',
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