angular.module('SampleAngularApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('routeA', {
                url: '/',
                template: '<h3>Hello World 1</h3>'
            })
            .state('routeB', {
                url: '/routeB',
                template: '<h3>Hello World 2</h3>'
            })
            .state('routeC', {
                url: '/routeC',
                template: '<h3>Hello World 3</h3>'
            })

    });