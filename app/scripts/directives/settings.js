'use strict';
/**
 * Created by turbo on 15-5-14.
 */
angular.module('flightOpApp').directive('appSettings',function(){
  return {
    restrict:'EA',
    templateUrl:'views/main/settings.html',
    scope:{},/*使用一个全新的隔离作用域*/
    link:function(){
      try{
         ace.general_things(jQuery);//and settings
      }catch(e){
        console.log('ace-ui渲染错误'+e);
      }
    }
  };
});
