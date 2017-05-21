(function () {
    'use strict';

    angular
        .module('app')
        .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', ($locationProvider, $stateProvider, $urlRouterProvider)=> {
            // Use URLs without hash
            $locationProvider.html5Mode(true);

            // Login routes
            $stateProvider
                .state({
                    abstract: true,
                    name:'init',
                    url: '',
                    templateUrl: 'views/layouts/init.html'
                })
            $stateProvider
                .state({
                    name:'init.login',
                    url: '/',
                    controller: 'LoginController as vm',
                    templateUrl: 'views/layouts/login.html'
                })
        }]);
})();
