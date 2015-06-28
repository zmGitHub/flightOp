'use strict';
/**
 * Created by turbo on 15-5-15.
 */
angular.module('flightOpApp').factory('Order',['$http', '$q', function($http, $q){
  var orderService = {};
  var baseUrl = 'http://120.24.171.184/home/OrderSnatch/';
  var _finalUrl = '';

  var makeUrl = function(actionName){
    _finalUrl = baseUrl+actionName;
  };
  var transform = function (data) {
    return $.param(data);
  };
  /**
   *
   * @returns {*} 返回所有未抢单的数据
   */
  orderService.getAllOrder = function(){
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
  };

  /**
   *
   * @param oid 订单ｉｄ
   * @returns {*}　成功返回１　失败返回　0
   */
  orderService.grabOrder = function(oid){
    makeUrl('order_snatch');
    var defer = $q.defer();
    var orderInfo = {
      op_id: 1,
      tmc_id: 1,
      order_num: oid
    };
    $http.post(
      _finalUrl,
      orderInfo,
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        transformRequest: transform
      }).success(function (data) {
        defer.resolve(data);
      }).error(function (data, status) {
        defer.reject(status);
      });
    return defer.promise;
  };
  /*获取待支付的订单*/
  orderService.grabSuccessOrder = function(){
    makeUrl('ticketpaying');
    var defer = $q.defer();
    var opInfo = {
      op_id: 1,
      tmc_id: 1
    };
    $http.post(
      _finalUrl,
      opInfo,
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        transformRequest: transform
      }).success(function (data) {
        defer.resolve(data);
      }).error(function (data, status) {
        defer.reject(status);
      });
    return defer.promise;
  };

  /*获取待出票的订单*/
  orderService.getAllLetTicketOrder = function(){
    makeUrl('ticketprint');
    var defer = $q.defer();
    var opInfo = {
      op_id: 1,
      tmc_id: 1
    };
    $http.post(
      _finalUrl,
      opInfo,
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        transformRequest: transform
      }).success(function (data) {
        defer.resolve(data);
      }).error(function (data, status) {
        defer.reject(status);
      });
    return defer.promise;
  };

  /**
   *
   * @param tid 订单ｉｄ
   * @returns {*}　0 失败　１成功
   */
  orderService.letTicketOrder = function (tid) {
    makeUrl('ticketprinting');
    var defer = $q.defer();
    var orderInfo = {
      op_id: 1,
      tmc_id: 1,
      order_num: tid
    };
    $http.post(
      _finalUrl,
      orderInfo,
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        transformRequest: transform
      }).success(function (data) {
        defer.resolve(data);
      }).error(function (data, status) {
        defer.reject(status);
      });
    return defer.promise;
  };

  /*已完成的订单*/
  orderService.grabFinishOrder = function(){
    makeUrl('ticketprinted');
    var defer = $q.defer();
    var opInfo = {
      op_id: 1,
      tmc_id: 1
    };
    $http.post(
      _finalUrl,
      opInfo,
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        transformRequest: transform
      }).success(function (data) {
        defer.resolve(data);
      }).error(function (data, status) {
        defer.reject(status);
      });
    return defer.promise;
  };
  return orderService;
}]);
