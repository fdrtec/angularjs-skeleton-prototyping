(function () {
    'use strict';

    angular.module('app.uxComponent')
        .component('dashboardHeader',{
            controller: 'dashboardHeaderCtrl as $ctrl',
            templateUrl: 'ux-component/dashboard/header/dashboard-header.html',
            bindings: {},
        }).controller('dashboardHeaderCtrl', Controller);

    Controller.$inject = [];

    function Controller() {
        let self = this;

        self.title = 'Header of DashBoard'
    }
}());
