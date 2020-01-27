(function () {
    'use strict'

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
            {
                image: 'http://lorempixel.com/400/200/food'
            },
            {
                image: 'http://lorempixel.com/400/200/sports'
            },
            {
                image: 'http://lorempixel.com/400/200/people'
            },
            {
                image: 'public/assets/images/19858.jpg'
            }
        ];

    }
}());
