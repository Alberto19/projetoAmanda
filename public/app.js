(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'ngMaterial',
        ])
        .config(['$httpProvider',($httpProvider)=>{
            // Add http 
        }])
        .run(['$rootScope', '$state', ($rootScope, $state)=> {
            // Page changed event
            $rootScope.$on('$stateChangeStart', (event, next, current)=> {
            });
        }]);
})();
