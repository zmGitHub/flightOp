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
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/app/dashboard');
    $urlRouterProvider.when('/', '/app/dashboard');
    $urlRouterProvider.otherwise('/app/notFound');
    /*主入口页面*/
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'userLoginCtrl',
      needLogin: false
    });
    $stateProvider.state('app', {
      url: '/app',
      templateUrl: 'views/app.html',
      abstract: true
    });
    $stateProvider.state('app.notFound',{
      url:'/notFound',
      templateUrl:'views/404.html',
      needLogin: true
    });
    /*控制面半年*/
    $stateProvider.state('app.dashboard', {
      url: '/dashboard',
      templateUrl: 'views/dashboard/dashboard.html',
      needLogin: true
    });

    $stateProvider.state('app.order', {
      url: '/order',
      templateUrl: 'views/grabOrder/main.html',
      abstract: true
    });
    $stateProvider.state('app.order.grabOrder', {
      url: '/grabOrder',
      templateUrl: 'views/grabOrder/grabOrder.html',
      resolve: {
        orderList: function(Order){
          return Order.getAllOrder();
        }
      },
      controller: 'grabOrderCtr',
      needLogin: true
    });
    /*待支付*/
    $stateProvider.state('app.order.grabOrderSuccess', {
      url: '/grabOrderSuccess',
      templateUrl: '../views/grabOrder/grabOrderSuccess.html',
      resolve: {
        orderSuccessList: function(Order){
          return Order.grabSuccessOrder();
        }
      },
      controller: 'grabOrderSuccessCtr',
      needLogin: true
    });
    /*待出票*/
    $stateProvider.state('app.order.letTicket', {
      url: '/letTicket',
      templateUrl: '../views/grabOrder/letTicket.html',
      resolve: {
        letTicketList: function(Order){
          return Order.getAllLetTicketOrder();
        }
      },
      controller: 'letTicketCtr',
      needLogin: true
    });
    /*已完成*/
    $stateProvider.state('app.order.grabOrderFinish', {
      url: '/grabOrderFinish',
      templateUrl: '../views/grabOrder/grabOrderFinish.html',
      resolve: {
        orderFinishList: function(Order){
          return Order.grabFinishOrder();
        }
      },
      controller: 'grabOrderFinishCtr',
      needLogin: true
    });
  }])
  .run(['$rootScope', 'SESSION', '$state', function($rootScope, SESSION, $state){
    $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
      var isLogin = SESSION.getItem('Token') || false;
      var needAuthor = toState.needLogin || false;

      if(needAuthor){
        if(!isLogin){
          event.preventDefault();
          $state.go('login');
        }
      }else {
        if(isLogin){
          event.preventDefault();
          $state.go('app.dashboard');
        }
      }

    })
  }]);
