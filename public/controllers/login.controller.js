(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state'];

    function LoginController($state) {
        var vm = this;
        vm.auth = {
            email: null,
            password: null
        }

        vm.login = login;

        function login() {
        }
    }
})();