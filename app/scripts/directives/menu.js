'use strict';
/**
 * Created by turbo on 15-5-14.
 */
angular.module('flightOpApp').directive('appMenu',function(){
  return {
    restrict:'EA',
    replace: true,
    templateUrl:'views/main/menu.html',
    scope:{},/*使用一个全新的隔离作用域*/
    link:function(){
      //调用ACE模板的各种函数来初始化UI
      try {
        ace.handle_side_menu(jQuery);

        ace.settings.check('sidebar', 'fixed');
        ace.settings.check('sidebar', 'collapsed');
      } catch (e) {
        console.log('ace-UI 渲染错误'+e);
      }
    }
  };
});
