/**
 * Created by turbo on 15-6-23.
 */
'use strict';
angular.module('flightOpApp').controller('letTicketCtr', ['$scope', 'letTicketList', 'Order',function($scope, letTicketList ,Order){
  var vm = $scope.vm = {};
  vm.letTicketList = letTicketList;
  console.log(letTicketList);
  vm.showOverlay = false; /*刷新*/
  vm.disabledGrab = false; /*防止重复抢单*/
  $scope.reload = function(){
    vm.showOverlay = true;
    /*刷新订单列表*/
    Order.getAllLetTicketOrder().then(function(res){
      if(res){
        vm.letTicketList = res;
      }
      vm.showOverlay = false;
    });

  };

  $scope.letTicketOrder = function(tid){
    vm.disabledGrab = true;
    var obj = _.find(vm.letTicketList, {order_num: tid});
    Order.letTicketOrder(tid).then(function(res){
      if(res){
        obj.ticket_status = 0;
        toastr.success('出票成功!', '温馨提示');
      }else{
        toastr.error('出票失败!', '温馨提示');
      }
      vm.disabledGrab = false;
    });
  };


}]);
