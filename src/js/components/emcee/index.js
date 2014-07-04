'use strict';
var angular = require('angular');
module.exports = angular.module('app.emcee', [])
	.controller('EmceeCtrl', require('./emcee-controller'))
	.factory('emceeService', require('./emcee-service'));
