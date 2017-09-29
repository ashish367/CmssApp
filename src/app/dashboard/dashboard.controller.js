(function () {
  'use strict';

  angular
    .module('cmssApp')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($rootScope, AppService, $location) {
    var vm = this;
    activate();
    function activate() {
      var jsonInput = {
        showbar: true,
        header: 'Dashboard',
        showIcon: true
      };

      $rootScope.$broadcast('toolbarChanges', jsonInput);

      vm.list = [{
        id: 1,
        name: 'Clients',
        icon: 'fa fa-users'
      }, {
        id: 2,
        name: 'Applications',
        icon: 'fa fa-th-large'
      }, {
        id: 3,
        name: 'Projects',
        icon: 'fa fa-newspaper-o'
      }, {
        id: 4,
        name: 'Report',
        icon: 'fa fa-pie-chart'
      }];
      vm.openItem = openItem;
    }

    function openItem(item) {
      if (angular.equals(item.id, 1)) {
        $location.path('/client');
      } else if (angular.equals(item.id, 2)) {
        $location.path('/application');
      } else if (angular.equals(item.id, 3)) {
        $location.path('/project');
      } else if (angular.equals(item.id, 4)) {
        $location.path('/report');
      }
    }

  }
})();
