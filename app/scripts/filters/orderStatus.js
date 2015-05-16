'use strict';
/**
 * Created by turbo on 15-5-16.
 */

angular.module('flightOpApp').filter('orderStatus', function(){
  return function(status){
    status = parseInt(status) || 0;
    var res = '';
    switch (status) {
      case 0: res = '未抢单';break;
      default: res = '已失效'
    }
    return res;
  }
});
