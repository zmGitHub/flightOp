/**
 * Created by turbo on 15-6-28.
 */
angular.module('flightOpApp').factory('AuthService', ['$http', '$q', 'SESSION', function($http, $q, SESSION){
  var authService = {};
  var baseUrl = 'http://120.24.171.184/home/TicketServer/';
  var _finalUrl = '';

  var makeUrl = function(actionName){
    _finalUrl = baseUrl+actionName;
  };
  var transform = function (data) {
    return $.param(data);
  };

  /*用户登录*/
  authService.login = function(user){
    makeUrl('check_login');
    var defer = $q.defer();
    $http.post(
      _finalUrl,
      user,
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        transformRequest: transform
      }).success(function (data) {
        if(data){
          SESSION.setItem('Token', data);
          defer.resolve(data);
        }
      }).error(function (data, status) {
        defer.reject(status);
      });
    return defer.promise;
  };

  /*用户注册*/
  authService.register = function(user){
    makeUrl('add_tmc');
    var defer = $q.defer();
    $http.post(
      _finalUrl,
      user,
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        transformRequest: transform
      }).success(function (data) {
        if(data){
          SESSION.setItem('Token', data);
          defer.resolve(data);
        }
      }).error(function (data, status) {
        defer.reject(status);
      });
    return defer.promise;
  };

  return authService;
}]);
