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


});