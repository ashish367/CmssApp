/* global malarkey:false, moment:false */
(function () {
  'use strict';
  var manualSetting = {
    'baseUrl': 'http://192.168.0.80/Project_ManageService/CMSSProjectManagementService.svc'
  }
  angular
    .module('cmssApp')
    .constant('appSetting', manualSetting)
    .constant('moment', moment);

})();
