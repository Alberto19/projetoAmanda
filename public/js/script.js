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

(function () {
    'use strict';

    angular
        .module('app')
        .factory('config', config);

    function config() {
        return {
            baseApiUrl: "http://localhost:3003/api"
        };
    }
})();

(function () {
    'use strict';

    angular
        .module('app')
        .controller('LayoutController', LayoutController);

    LayoutController.$inject = ['$state'];

    function LayoutController($state) {
        var vm = this;
    }
})();

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
//# sourceMappingURL=script.js.map
