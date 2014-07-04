'use strict';
var angular = require('angular');
var deejay = require('./deejay-directive');

module.exports = angular.module('app.deejay', [])
  .factory('deejayService', require('./deejay-service'))
	.directive(deejay.name, deejay.component);
