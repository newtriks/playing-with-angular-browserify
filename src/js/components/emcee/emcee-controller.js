'use strict';
var mix = require('ng-mixin');

module.exports = mix({

	$inject: ['$scope', 'emceeService'],

	init: function ($scope, emceeService) {
		$scope.emcee = emceeService.all()[0];
	}
});
