angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('main', {
                    url: '/',
                    template: '<dashboard-main></dashboard-main>'
                })
                .state('home', {
                    url: 'home',
                    parent:'main',
                    template: '<dashboard-home></dashboard-home>'
                })
        }]);
