'use strict';

exports.name = 'deejay';

exports.component = function () {

	return {
		restrict: 'E',
		template: '<div>Favourite member of the Invisibl Skratch Piklz: {{deejay}}</div>',
		controller: require('./deejay-controller'),
		link: function (scope, element, attrs) {
			scope.deejay = scope.deejays[0];
		}
	};

};
