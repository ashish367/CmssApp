(function () {
  'use strict';

  angular
    .module('cmssApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, AppService, $location, toastr) {
    var vm = this;
    activate();
    function activate() {
      var jsonInput = {
        showbar: true,
        header: 'login',
        showIcon: true
      };
      vm.validate = validate;
      $rootScope.$broadcast('toolbarChanges', jsonInput);
    }
    function validate() {
      if (vm.employeeId == null) {
        AppService.showToast('PLease Enter Credential', false);
      } else {
        var jsonInput = {
          'user_id': JSON.stringify(vm.employeeId),
          'pass': 'Cmss'
        }
        validateLogin(jsonInput);
        AppService.showToast('Welcome', true);
        toastr.clear();
        $location.path('/dashboard').replace();

      }
    }

    function validateLogin(jsonInput) {
      AppService.validateLogin(jsonInput).then(function (success) {
        console.log("login success", angular.toJson(success));
      }, function (error) {
        console.log("login error", angular.toJson(error));
      })
    }

  }
})();
