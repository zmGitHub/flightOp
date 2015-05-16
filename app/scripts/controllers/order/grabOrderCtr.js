'use strict';

/**
 * Created by turbo on 15-5-15.
 */
angular.module('flightOpApp').controller('grabOrderCtr', ['$scope', 'orderList', 'Order',function($scope, orderList ,Order){
  var vm = $scope.vm = {};
  vm.orderList = orderList;
  vm.showOverlay = false; /*刷新*/
  vm.disabledGrab = false; /*防止重复抢单*/
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

  $scope.grabOrder = function(oid){
    vm.disabledGrab = true;
    var obj = _.find(vm.orderList, {order_num: oid});
    Order.grabOrder(oid).then(function(res){
      if(res){
        obj.ticket_status = 1;
        toastr.success('抢单成功!', '温馨提示')
      }else{
        toastr.error('抢单失败!', '温馨提示')
      }
      vm.disabledGrab = false;
    });
  };


}]);
