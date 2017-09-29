(function() {
  'use strict';

  angular
    .module('cmssApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
