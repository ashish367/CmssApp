(function () {
  'use strict';

  angular
    .module('cmssApp')
    .controller('ApplicationController', ApplicationController);

  /** @ngInject */
  function ApplicationController($rootScope, AppService) {
    var vm = this;
    activate();
    function activate() {
      var jsonInput = {
        showbar: false,
        header: 'Applications',
        showIcon: true
      };
      $rootScope.$broadcast('toolbarChanges', jsonInput);
      // tabs();
      getApplicationDetails();

    }

    function getApplicationDetails() {
      AppService.getApplicationDetails().then(function (success) {
        if (success.hasOwnProperty('data')) {
          vm.applicationList = success.data;
          console.log("applicationList", angular.toJson(vm.applicationList));
        }
      }, function (error) {
        console.log("App Details Error", angular.toJson(error));
      })
    }

  }
})();
