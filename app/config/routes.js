angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('main', {
                    url: '/',
                    templateUrl: '../templates/main.html'
                })
                .state('home', {
                    url: 'home',
                    parent:'main',
                    templateUrl: '../templates/home.html'
                })
        }]);
