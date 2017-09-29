(function () {
    'use strict';

    angular
        .module('cmssApp')
        .directive('toolbar', toolbar);

    /** @ngInject */
    function toolbar() {
        return {
            restrict: "E",
            controller: toolbar,
            bindToController: true,
            templateUrl: 'app/directives/toolbar.html',
            link: link,
            scope: {
                header: '='
            },
            controllerAs: 'vm'


        }
        function link(scope, attr, element) {

            console.log("link scope", angular.toJson(scope));
            console.log("link", attr);
        }
        /**@ngInject */
        function toolbar($rootScope, AppService) {
            var vm = this;

            $rootScope.$on('toolbarChanges', function ($event, data) {
                vm.showbar = data.showbar;
                vm.header = data.header;
                vm.showIcon = data.showIcon
                console.log("controller changes", vm.showbar);
            });
            vm.historyBack = function () {
                AppService.historyBack();
            }
        }
    }
})();
