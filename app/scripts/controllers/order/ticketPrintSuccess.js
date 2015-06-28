'use strict';

/**
 * Created by turbo on 15-5-15.
 */
angular.module('flightOpApp').controller('ticketPrintSuccessCtr', ['$scope', 'ticketPrintSuccess', 'Order',function($scope, ticketPrintSuccess ,Order){
    var vm = $scope.vm = {};
    vm.ticketPrintSuccess = ticketPrintSuccess;
    console.log(ticketPrintSuccess);
    vm.showOverlay = false; /*刷新*/
    $scope.reload = function(){
        vm.showOverlay = true;
        /*刷新订单列表*/
        Order.ticketprinted().then(function(res){
            if(res){
                vm.ticketPrintSuccess = res;
                vm.showOverlay = false;
            }
        });

    };


}]);
