'use strict';

module.exports = function ($scope, emceeService) {
	$scope.emcee = emceeService.all()[0];
};
