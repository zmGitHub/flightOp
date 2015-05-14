'use strict';
/**
 * Created by turbo on 15-5-14.
 */
angular.module('flightOpApp').directive('appScrollUp',function(){
  return {
    restrict:'EA',
    template:'<a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse"><i class="icon-double-angle-up icon-only bigger-110"></i></a>',
    scope:{},/*使用一个全新的隔离作用域*/
    link:function(){
      try{
        $('#btn-scroll-up').on(ace.click_event, function(){
          var duration = Math.min(400, Math.max(100, parseInt($('html').scrollTop() / 3)));
          $('html,body').animate({scrollTop: 0}, duration);
          return false;
        });
      }catch(e){
        console.log('ace-ui渲染错误'+e);
      }
    }
  };
});
