/**
 * Created by turbo on 15-6-30.
 */
angular.module('flightOpApp').factory('SESSION', ['$rootScope', '$window', function ($rootScope, $window) {
  var storage = {};
  var session = $window.localStorage;
  storage.setItem = function (key, value) {
    if (angular.isUndefined(key)) return;
    var objStr = angular.toJson(value);
    session.setItem(key, objStr);
  };

  storage.getItem = function (key) {
    var userStr = session.getItem(key) || undefined;
    if(angular.isUndefined(userStr)){
      return '';
    }else{
      return userStr;
    }
  };

  storage.reset = function(){
    session.clear()
  };
  return storage;
}
]);
