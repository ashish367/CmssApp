(function () {
  'use strict';

  angular
    .module('cmssApp')
    .controller('ClientController', ClientController);

  /** @ngInject */
  function ClientController($rootScope, AppService) {
    var vm = this;
    activate();
    function activate() {
      var jsonInput = {
        showbar: false,
        header: 'Clients',
        showIcon: true
      };
      $rootScope.$broadcast('toolbarChanges', jsonInput);
      vm.isOpen = false;
      getClientDetails();
    }

    function getClientDetails() {
      AppService.getClientDetails().then(function (success) {
        if (success.hasOwnProperty('data')) {
          vm.clientList = success.data;
          vm.clientList = vm.clientList.concat(success.data);
          vm.clientList = vm.clientList.concat(success.data);
        }
        console.log("ClientDetails", angular.toJson(success));
      }, function (error) {
        console.log("ClientDetails Error", angular.toJson(error));
      })
    }

    function getJsonList() {
      var jsonList = [{
        id: 1,
        name: 'Icici'
      }, {
        id: 2,
        name: 'Fullerton'
      }, {
        id: 3,
        name: 'Future Bazaar'
      }]
      return jsonList;
    }

  }
})();
