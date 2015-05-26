'use strict';

/**
 * Created by turbo on 15-5-15.
 */
angular.module('flightOpApp').controller('grabOrderSuccessCtr', ['$scope', 'orderSuccessList', 'Order',function($scope, orderSuccessList ,Order){
  var vm = $scope.vm = {};
  vm.orderSuccessList = orderSuccessList;
  console.log(orderSuccessList);
  vm.showOverlay = false; /*刷新*/
  $scope.reload = function(){
    vm.showOverlay = true;
    /*刷新订单列表*/
    Order.grabSuccessOrder().then(function(res){
      if(res){
        vm.orderSuccessList = res;
        vm.showOverlay = false;
      }
    });

  };


}]);
