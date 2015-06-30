'use strict';
/**
 * Created by turbo on 15-6-27.
 */
angular.module('flightOpApp').controller('userLoginCtrl', ['$scope', '$state', 'AuthService', function($scope, $state, AuthService){
  var vm = $scope.vm = {};
  vm.loginBox = true;
  vm.regBox = false;
  vm.forgetBox = false;
  vm.pdChecked = false;

  /*用户注册*/
  vm.userReg = {
    account: '',
    password: '',
    rePassword: '',
    name: 'TMC',
    agreements: false
  };

  /*用户登录*/
  vm.userLogin = {
    account: '',
    password: ''
  };


  /*用户注册*/
  vm.register = function(user){
    AuthService.register(user).then(function(res){
      if(res){
        $state.go('app.dashboard');
      }else{
        toastr.error('注册失败!请重试...', '温馨提示');
      }
    });
  };

  /*用户登录*/
  vm.login = function(user){
    AuthService.login(user).then(function(res){
      if(res){
        $state.go('app.dashboard');
      }else{
        toastr.error('注册失败!请重试...', '温馨提示');
      }
    });
  };
  vm.checkedPassword = function(){
    if(!angular.equals(vm.userReg.password, vm.userReg.rePassword)){
      vm.pdChecked = true;
    }else {
      vm.pdChecked = false;
    }
  };
  $scope.$watch('vm.loginBox', function(newValue){
    if(newValue){
      vm.regBox = false;
      vm.forgetBox = false;
    }
  });
  $scope.$watch('vm.regBox', function(newValue){
    if(newValue){
      vm.loginBox = false;
      vm.forgetBox = false;
    }

  });
  $scope.$watch('vm.forgetBox', function(newValue){
    if(newValue){
      vm.regBox = false;
      vm.loginBox = false;
    }
  });

  $scope.$watch('vm.userReg.rePassword', function(){
    vm.checkedPassword();
  });

  $scope.$watch('vm.userReg.password', function(){
    vm.checkedPassword();
  });
}]);
