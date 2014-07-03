'use strict';

var angular = require('angular');
require('restangular');

angular.module('app', [
	'restangular',
	require('./modules/emcee').name,
	require('./modules/deejay').name
]);
