(function () {
    'use strict';

    angular
        .module('cmssApp')
        .service('AppService', AppService);

    /** @ngInject */
    function AppService($mdToast, toastr, $window, $q, appSetting, $http) {
        var collections = {
            "showToast": showToast,
            "historyBack": historyBack,
            "getClientDetails": getClientDetails,
            "validateLogin": validateLogin,
            "getApplicationDetails": getApplicationDetails
        }
        return collections;

        function showToast(msg, booleanValue, time) {
            if (booleanValue) {
                toastr.success(msg + '!', {
                    iconClass: 'success'
                });
            } else {
                toastr.error('Your credentials are gone', 'Error', {
                    iconClass: 'error'
                });
            }
        }

        function historyBack() {
            $window.history.back();
        }

        function servicePostCall(jsonInput) {
            var defer = $q.defer();
            var params = {
                method: jsonInput.method,
                url: appSetting.baseUrl + jsonInput.service,
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                data: jsonInput.data
            }
            console.log("sevice Params", angular.toJson(params));
            $http(params).then(function (success) {
                defer.resolve(success);
            }, function (error) {
                defer.reject(error);
            });
            return defer.promise;
        }

        function serviceGetCall(jsonInput) {
            var defer = $q.defer();
            var params = {
                method: jsonInput.method,
                url: appSetting.baseUrl + jsonInput.service,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded,application/json' }
            }
            $http(params).then(function (success) {
                defer.resolve(success);
            }, function (error) {
                defer.reject(error);
            });
            return defer.promise;
        }

        function setterPostService(service, data) {
            // data = JSON.stringify(data);
            var jsonInput = {
                service: service,
                method: 'POST',
                data: data
            };
            return jsonInput;
        }

        function setterGetService(service) {
            var jsonInput = {
                service: service,
                method: 'GET'
            }
            return jsonInput;
        }

        function getClientDetails() {
            var jsonInput = setterGetService('/clientDetails');
            return serviceGetCall(jsonInput);
        }

        function validateLogin(requestData) {
            var jsonInput = setterPostService('/userLogin', requestData);
            return servicePostCall(jsonInput);
        }

        function getApplicationDetails() {
            var jsonInput = setterGetService('/applicationDetails');
            return serviceGetCall(jsonInput);

        }



    }
})();
