'use strict';

var angular = require('angular');
require('restangular');

angular.module('app', [
	'restangular',
	require('./components/emcee').name,
	require('./components/deejay').name
]);
