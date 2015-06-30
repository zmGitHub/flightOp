/**
 * Created by turbo on 15-6-28.
 */
angular.module('flightOpApp').controller('ApplicationController', ['$scope', 'USER_ROLES', 'AuthService', function($scope, USER_ROLES, AuthService){
  $scope.currentUser = null;
  $scope.userRoles = USER_ROLES;
  $scope.isAuthorized = AuthService.isAuthorized;
  $scope.setCurrentUser = function(user){
    $scope.currentUser = user;
  };


}]);
