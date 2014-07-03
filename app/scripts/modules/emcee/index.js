'use strict';
var angular = require('angular');
module.exports = angular.module('app.emcee', [])
	.controller('EmceeCtrl', require('./controllers/EmceeCtrl'))
	.factory('emceeService', require('./services/emceeService'));
