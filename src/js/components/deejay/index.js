'use strict';
var angular = require('angular');
module.exports = angular.module('app.deejay', [])
	.controller('DeejayCtrl', require('./deejay-controller'))
  .factory('deejayService', require('./deejay-service'))
	.directive('deejay', require('./deejay-directive'));
