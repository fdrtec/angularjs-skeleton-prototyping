(function () {
    'use strict'

    angular
        .module('app.uxComponent')
        .component('dashboardFooter', {
            controller: 'dashboardFooterCtrl as $ctrl',
            templateUrl: 'ux-component/dashboard/footer/dashboard-footer.html',
            bindings: {}
        })
        .controller('dashboardFooterCtrl', Controller);

    Controller.$inject = [];

    function Controller() {
        const self = this;
        self.title = 'Footer of Dashboard'

    }

}());
