'use strict';

/**
 * Created by turbo on 15-5-15.
 */
angular.module('flightOpApp').controller('grabOrderFinishCtr', ['$scope', 'orderFinishList', 'Order',function($scope, orderFinishList ,Order){
  var vm = $scope.vm = {};
  vm.orderFinishList = orderFinishList;


}]);
