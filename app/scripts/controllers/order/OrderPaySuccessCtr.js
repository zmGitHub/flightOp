'use strict';

/**
 * Created by turbo on 15-5-15.
 */
angular.module('flightOpApp').controller('OrderPaySuccessCtr', ['$scope', 'orderPaySuccessList', 'Order',function($scope, orderPaySuccessList ,Order){
    var vm = $scope.vm = {};
    vm.orderPaySuccessList = orderPaySuccessList;
    console.log(orderPaySuccessList);
    vm.showOverlay = false; /*刷新*/
    $scope.reload = function(){
        vm.showOverlay = true;
        /*刷新订单列表*/
        Order.ticketprint().then(function(res){
            if(res){
                vm.orderPaySuccessList = res;
                vm.showOverlay = false;
            }
        });

    };


}]);
