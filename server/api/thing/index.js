'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/partners', controller.partners);
router.get('/noders', controller.noders);
router.get('/map', controller.map);
router.get('/eventos', controller.eventos);

module.exports = router;