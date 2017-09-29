(function () {
  'use strict';

  angular
    .module('cmssApp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .when('/dashboard', {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'vm'
      })
      .when('/client', {
        templateUrl: 'app/client/client.html',
        controller: 'ClientController',
        controllerAs: 'vm'
      })
      .when('/application', {
        templateUrl: 'app/application/application.html',
        controller: 'ApplicationController',
        controllerAs: 'vm'
      })
      .when('/project', {
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'vm'
      })
      .when('/report', {
        templateUrl: 'app/report/report.html',
        controller: 'ReportController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
