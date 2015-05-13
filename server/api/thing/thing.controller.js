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
        name: 'Google Developers Group',
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
    }]);
};




exports.noders = function(req, res) {
    res.json([{
        img: 'fforres.jpg',
        username: 'fforres',
        description: 'Main Geek @ NodersCL',
        pais: 'Chile',
        url: 'http://www.twitter.com/fforres'
    },{
        img: 'fforres.jpg',
        username: 'fforres',
        description: 'Descripcion numero 2',
        pais: 'Chile',
        url: 'http://www.twitter.com/fforres'
    },{
        img: 'fforres.jpg',
        username: 'fforres',
        description: 'Descripcion numero 3',
        pais: 'Chile',
        url: 'http://www.twitter.com/fforres'
    }]);
};
