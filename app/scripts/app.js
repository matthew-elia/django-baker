'use strict';

/**
 * @ngdoc overview
 * @name bakerNetApp
 * @description
 * # bakerNetApp
 *
 * Main module of the application.
 */

var app = angular
  .module('bakerNetApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
