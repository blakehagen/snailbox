'use strict';

angular.module('snailbox').service('userService', function ($http, API) {

  this.getUserById = function (id) {
    return $http({
      method: 'GET',
      url: API.SERVER_HEROKU + 'user/' + id
      // url: API.SERVER_LOCAL_MDB + 'user/' + id
    }).then(function (response) {
      return response.data;
    });
  };


});