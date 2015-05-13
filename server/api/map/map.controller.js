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
    var Noders = [
    	{
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
        }, 
        {
            name: 'NodersEC',
            web: 'http://www.noders.ec',
            sociales: {
                twitter: 'NodersEC',
                facebook: 'NodersEC'
            },
            subname: 'Cursos gratuitos, workshops y charlas en Ecuador! ',
            latitude: -2.1523874,
            longitude: -79.9799096,
        }

    ]
    res.json(Noders);
};
