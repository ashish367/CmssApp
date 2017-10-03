(function () {
  'use strict';

  angular
    .module('cmssApp')
    .controller('ClientController', ClientController);
  // .controller('ClientBottomSheet', ClientBottomSheet);

  /** @ngInject */
  function ClientController($rootScope, AppService, $mdBottomSheet, $timeout, $scope) {
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
      vm.showBottomSheet = showBottomSheet;
      vm.editClient = editClient;
      vm.deleteClient = deleteClient;
      console.log("size again", vm.clientList);
      getClientDetails();
      vm.bootomName = "Ashish";
    }
    $rootScope.$on('clientDataChanges', function ($event, data) {
      vm.clientList = data;
    });


    function getClientDetails() {
      AppService.getClientDetails().then(function (success) {
        if (success.hasOwnProperty('data')) {
          vm.clientList = success.data;
          console.log("size again 2", vm.clientList.length);

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

    function showBottomSheet(item) {
      AppService.selectedItem = item;
      $mdBottomSheet.show({
        templateUrl: 'app/client/clientBottomSheet.html',
        controller: 'ClientController',
        bindToController: true,
        controllerAs: 'vm',
        // preserveScope: true
      }).then(function (clickedItem) {

      }).catch(function (error) {

      });
    };

    function editClient() {
      var selectedItem = AppService.selectedItem;
      alert("edit" + selectedItem.client_name);
      $mdBottomSheet.hide();
    }
    function deleteClient() {
      var selectedItem = AppService.selectedItem;
      var pos = getPos(selectedItem);
      console.log("deleted", pos);
      vm.clientList.splice(pos, 1);
      $rootScope.$emit('clientDataChanges', vm.clientList);
      console.log("size", vm.clientList.length);
      // delete vm.clientList[pos];
      // this.$apply();
      $mdBottomSheet.hide();
    }

    function getPos(item) {
      var locationPos = -1;
      for (var pos = 0; pos < vm.clientList.length; pos++) {
        var element = vm.clientList[pos];
        if (element.client_id === item.client_id) {
          locationPos = pos;
          return locationPos;
        }

      };
      return locationPos;
    }

  }

  /**
   * ClientBottomSheet controllers start
   */
  /** @ngInject */
  function ClientBottomSheet($rootScope, AppService) {
    var vm = this;
    activate();
    function activate() {
      vm.lists = getJsonList();
      var jsonInput = {
        showbar: false,
        header: 'Clients',
        showIcon: true
      };
      $rootScope.$broadcast('toolbarChanges', jsonInput);
    }

    function getJsonList() {
      var items = [
        { name: 'Edit', icon: 'fa fa-pencil' },
        { name: 'Delete', icon: 'fa fa-trash' }
      ];
      return items;
    }

  }
})();
