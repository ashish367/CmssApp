(function () {
  'use strict';

  angular
    .module('cmssApp')
    .controller('ProjectController', ProjectController);

  /** @ngInject */
  function ProjectController($rootScope, AppService) {
    var vm = this;
    activate();
    function activate() {
      var jsonInput = {
        showbar: false,
        header: 'Projects',
        showIcon: true
      };

      $rootScope.$broadcast('toolbarChanges', jsonInput);
    }
  }
})();
