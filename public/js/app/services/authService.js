'use strict';

angular.module('snailbox').service('authService', function ($http, API) {

  this.signup = function (data) {
    return $http({
      method: 'POST',
      url: API.SERVER_HEROKU + 'signup',
      // url: API.SERVER_LOCAL_MDB + 'signup',
      dataType: 'json',
      data: data
    }).then(function (response) {
      return response.data;
    });
  };

  this.login = function (data) {
    return $http({
      method: 'POST',
      url: API.SERVER_HEROKU + 'login',
      // url: API.SERVER_LOCAL_MDB + 'login',
      dataType: 'json',
      data: data
    }).then(function (response) {
      return response.data;
    }).catch(function (response) {
      return response.data;
    });
  };

}); // END SERVICE //