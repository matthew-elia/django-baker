'use strict';

/**
 * @ngdoc overview
 * @name bakerNetApp
 * @description
 * # bakerNetApp
 *
 * Main module of the application.
 */

angular
  .module('bakerNetApp', [
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/')
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/auth/login.html'
      });
  });

