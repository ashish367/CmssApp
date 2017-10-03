(function () {
  'use strict';

  angular
    .module('cmssApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    // $httpProvider.defaults.headers.post = {};

    angular.extend(toastrConfig, {
      autoDismiss: false,
      containerId: 'toast-container',
      maxOpened: 0,
      newestOnTop: true,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      preventOpenDuplicates: true,
      target: 'body',
      closeButton: true

    });
  }

})();
