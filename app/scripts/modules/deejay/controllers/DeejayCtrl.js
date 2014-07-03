'use strict';

module.exports = function ($scope, deejayService) {
	$scope.deejays = deejayService.all();
};
