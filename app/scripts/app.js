'use strict';

/**
 * @ngdoc overview
 * @name flightOpApp
 * @description
 * # flightOpApp
 *
 * Main module of the application.
 */
angular
  .module('flightOpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/dashboard');
    $urlRouterProvider.when('/', '/dashboard');
    $urlRouterProvider.otherwise('/notFound');
    $stateProvider.state('notFound',{
      url:'/notFound',
      templateUrl:'views/404.html'
    });
    /*控制面半年*/
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/dashboard/dashboard.html'
    });
    /*op抢单页面*/
    $stateProvider.state('grab', {
      url: '/grab',
      templateUrl: 'views/grab.html'
    });
    $stateProvider.state('grab.order', {
      url: '/order',
      templateUrl: 'views/grabOrder/grabOrder.html'
    });
    $stateProvider.state('grab.success', {
      url: '/success',
      templateUrl: 'views/grabOrder/success.html'
    });
  });
