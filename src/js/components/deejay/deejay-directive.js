'use strict';

module.exports = function () {
	return {
		template: '<div>Favourite member of the Invisibl Skratch Piklz: {{deejay}}</div>',
		restrict: 'E',
		replace: true,
		controller: 'DeejayCtrl',
		link: function (scope, element, attrs) {
			scope.deejay = scope.deejays[0];
		}
	};
};
