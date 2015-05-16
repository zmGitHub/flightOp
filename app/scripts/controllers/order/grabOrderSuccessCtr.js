'use strict';

/**
 * Created by turbo on 15-5-15.
 */
angular.module('flightOpApp').controller('grabOrderSuccessCtr', ['$scope', 'orderSuccessList', 'Order',function($scope, orderSuccessList ,Order){
  var vm = $scope.vm = {};
  vm.orderList = orderSuccessList;
  console.log(orderSuccessList);
  vm.showOverlay = false; /*刷新*/
  $scope.reload = function(){
    vm.showOverlay = true;
    /*刷新订单列表*/
    Order.getAllOrder().then(function(res){
      if(res){
        vm.orderList = res;
        vm.showOverlay = false;
      }
    });

  };


}]);
