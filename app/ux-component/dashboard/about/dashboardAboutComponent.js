(function () {
    'use strict';

    angular
        .module('app.uxComponent')
        .component('dashboardAbout', {
            controller:'dashboardAboutCtrl as $ctrl',
            templateUrl:'ux-component/dashboard/about/dashboard-about.html',
            bindings: {}
        })
        .controller('dashboardAboutCtrl', Controller);

    Controller.$inject = [];

    function Controller() {
        const self = this;

        self.title = 'About of Dashboard'
    }

}());
