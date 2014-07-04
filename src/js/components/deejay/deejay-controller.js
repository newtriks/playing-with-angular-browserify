'use strict';
var mix = require('ng-mixin');

module.exports = mix({

  $inject: ['$scope', 'deejayService'],

  init: function ($scope, deejayService) {
    $scope.deejays = deejayService.all();
  }
});
