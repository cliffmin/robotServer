'use strict';

angular
    .module('robotServerApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/robot/go/:length', {
                templateUrl: 'views/line.html',
                controller: 'LineCtrl'
            })
            .when('/robot/square/:length', {
                templateUrl: 'views/square.html',
                controller: 'SquareCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
