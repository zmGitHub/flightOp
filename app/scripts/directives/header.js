'use strict';
/**
 * Created by turbo on 15-5-14.
 */
angular.module('flightOpApp').directive('appHeader', ['$rootScope', '$window', 'SESSION', '$state', function($rootScope, $window, SESSION, $state){
  return {
    restrict:'EA',
    templateUrl:'views/main/header.html',
    scope:{},/*使用一个全新的隔离作用域*/
    link:function(scope){
      var vm = scope.vm = {};
      $rootScope.$on('$stateChangeSuccess',function(event,toState){
        vm.title = $window.document.title = '后台管理系统';
      });
    },
    controller: function($scope){
      $scope.logOut = function(){
        SESSION.reset();
        $state.go('login');
      }
    }
  };
}]);
