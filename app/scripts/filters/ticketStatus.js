/**
 * Created by steve on 2015/5/25.
 */

'use strict';


angular.module('flightOpApp').filter('ticket_status', function(){
    return function(ticket_status){
        ticket_status = parseInt(ticket_status) || 0;
        var res = '';
        switch (ticket_status) {
            case 0: res = '未支付';break;
            case 1: res = '已支付';break;
            case 2: res = '已出票';break;
            case 3: res = '申请退票';break;
            case 4: res = '订单已失效';break;
            default: res = '未支付'
        }
        return res;
    }
});
