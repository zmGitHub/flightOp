/**
 * Created by turbo on 15-6-28.
 */
angular.module('flightOpApp').factory('AuthService', ['$http', '$q', function($http, $q){
  var authService = {};
  var baseUrl = 'http://120.24.171.184/home/OrderSnatch/';
  var _finalUrl = '';

  var makeUrl = function(actionName){
    _finalUrl = baseUrl+actionName;
  };
  var transform = function (data) {
    return $.param(data);
  };

  authService.login = function(user){
    makeUrl('showreq');
    var defer = $q.defer();
    $http.post(
      _finalUrl,
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        transformRequest: transform
      }).success(function (data) {
        if(data){
          defer.resolve(data);
        }
      }).error(function (data, status) {
        defer.reject(status);
      });
    return defer.promise;
  }
}]);
