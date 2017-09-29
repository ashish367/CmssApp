(function () {
  'use strict';

  angular
    .module('cmssApp')
    .controller('ReportController', ReportController);

  /** @ngInject */
  function ReportController($rootScope, AppService) {
    var vm = this;
    activate();
    function activate() {
      var jsonInput = {
        showbar: false,
        header: 'Reports',
        showIcon: true
      };

      $rootScope.$broadcast('toolbarChanges', jsonInput);
    }
  }
})();
