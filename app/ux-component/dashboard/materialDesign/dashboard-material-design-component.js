(function () {
    'use strict';

    angular
        .module('app.uxComponent')
        .component('dashboardMd', {
            controller:'dashboardMdCtrl as $ctrl',
            templateUrl:'ux-component/dashboard/materialDesign/dashboard-material-design-template.html',
            bindings: {}
        })
        .controller('dashboardMdCtrl', Controller);

    Controller.$inject = [];

    function Controller() {
        const self = this;
        self.TITLE = {
            COD3R: `Cod3r via Udemy `,
            BRANAS: `Rodrigo Branas`
        }


        self.title = "Components of Material Design"
        self.user = {}
    }

}());
