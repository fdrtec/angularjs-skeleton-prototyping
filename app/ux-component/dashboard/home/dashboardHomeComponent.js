(function () {
    'use strict';

    angular
        .module('app.uxComponent')
        .component('dashboardHome', {
            controller:'dashboardHomeCtrl as $ctrl',
            templateUrl:'ux-component/dashboard/home/dashboard-home.html',
            bindings: {}
        })
        .controller('dashboardHomeCtrl', Controller);

    Controller.$inject = ['$mdSidenav'];

    function Controller($mdSidenav) {
        const self = this;

        self.title = 'Home of Dashboard';
        self.toggleLeft = toggleLeft;

        function toggleLeft (){
            $mdSidenav('left').toggle();
        }

        self.myInterval = 3000;
        self.slides = [
            '../assets/images/img-1.jpeg',
            '../assets/images/img-2.jpeg',
            '../assets/images/img-3.jpeg',
            '../assets/images/img-4.jpeg',
            '../assets/images/img-5.jpeg',
            '../assets/images/img-6.jpeg',
        ];
    }
}());
