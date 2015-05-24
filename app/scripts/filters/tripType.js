/**
 * Created by steve on 2015/5/24.
 */
'use strict';
/**
 * Created by turbo on 15-5-16.
 */

angular.module('flightOpApp').filter('trip_type', function(){
    return function(trip_type){
        trip_type = parseInt(trip_type) || 0;
        var res = '';
        switch (trip_type) {
            case 2: res = '往返';break;
            default: res = '单程'
        }
        return res;
    }
});
