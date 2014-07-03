'use strict';
var angular = require('angular');
module.exports = angular.module('app.deejay', [])
	.controller('DeejayCtrl', require('./controllers/DeejayCtrl'))
  .factory('deejayService', require('./services/deejayService'))
	.directive('deejayName', require('./directives/deejayName'));
