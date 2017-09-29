(function () {
  'use strict';

  angular
    .module('cmssApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);
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
