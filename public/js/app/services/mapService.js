'use strict';

angular.module('snailbox').service('mapService', function ($http, API) {

  this.getCoordinates = function (id, address) {
    return $http({
      method: 'PUT',
      // url: API.SERVER_HEROKU + 'user/' + id + '/coordinates',
      url: API.SERVER_LOCAL_MDB + 'user/' + id + '/coordinates',
      dataType: 'json',
      data: address
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      return error;
    });
  };

});