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
