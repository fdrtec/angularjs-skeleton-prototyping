(function () {
    'use strict';

    angular.module('app.uxComponent')
        .component('dashboardHeader',{
            controller: 'dashboardHeaderCtrl as $ctrl',
            templateUrl: 'ux-component/dashboard/header/dashboard-header.html',
            bindings: {},
        }).controller('dashboardHeaderCtrl', Controller);

    Controller.$inject = ['$state', '$mdSidenav'];

    function Controller($state, $mdSidenav) {
        let self = this;

        self.title = 'Header of DashBoard';
        self.go = go;
        self.toggleLeft = toggleLeft;

        function go(state) {
            $state.go(state);
        };

        function toggleLeft (){
            $mdSidenav('left').toggle();
        }
    }
}());
