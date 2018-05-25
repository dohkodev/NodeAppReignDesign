angular.module('appRoutes',['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'app/views/index.html'
        })
        .otherwise({redirectTo: '/'});

        $locationProvider.html5Mode({
            enabled: true,
            requireBased: false
        });
    });