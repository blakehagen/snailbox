'use strict';

angular.module('snailbox').service('userService', function ($http, API) {

  this.getUserById = function (id) {
    return $http({
      method: 'GET',
      url: API.SERVER_HEROKU + 'user/' + id
      // url: API.SERVER_LOCAL_MDB + 'user/' + id
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      return error;
    });
  };

  this.updateAddress = function (id, addressData) {
    return $http({
      method: 'PUT',
      url: API.SERVER_HEROKU + 'user/' + id + '/address',
      // url: API.SERVER_LOCAL_MDB + 'user/' + id + '/address',
      dataType: 'json',
      data: addressData
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      return error;
    });
  };

  this.getAllUsers = function () {
    return $http({
      method: 'GET',
      url: API.SERVER_HEROKU + 'users'
      // url: API.SERVER_LOCAL_MDB + 'users'
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      return error;
    });
  };

  this.sendInvites = function (id, invitationData) {
    return $http({
      method: 'PUT',
      url: API.SERVER_HEROKU + 'user/' + id,
      // url: API.SERVER_LOCAL_MDB + 'user/' + id,
      dataType: 'json',
      data: invitationData
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      return error;
    });
  };

  this.getConnections = function (id) {
    return $http({
      method: 'GET',
      url: API.SERVER_HEROKU + 'user/' + id + '/connections'
      // url: API.SERVER_LOCAL_MDB + 'user/' + id + '/connections'
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      return error;
    });
  };
  
  this.saveConnections = function (id, newConnections) {
    return $http({
      method: 'PUT',
      url: API.SERVER_HEROKU + 'user/' + id + '/connections',
      // url: API.SERVER_LOCAL_MDB + 'user/' + id + '/connections',
      dataType: 'json',
      data: newConnections
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      return error;
    });
  };


});