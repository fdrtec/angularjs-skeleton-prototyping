(function () {
    'use strict'

    angular
        .module('app.uxComponent')
        .component('dashboardMain', {
            controller: 'dashboardMainCtrl as $ctrl',
            templateUrl:'ux-component/dashboard/main/dashboard-main.html',
            bindings: {}
        }).controller('dashboardMainCtrl', Controller);

    Controller.$inject = [];

    function Controller() {
        const self = this;

        self.title = 'Main of Dashboard';

    }


}());
