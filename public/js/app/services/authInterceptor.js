angular.module('snailbox').service('authInterceptor', function (tokenService) {

  this.request = function (config) {
    var token = tokenService.getToken();
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  };

  this.response = function (response) {
    return response;
  };

});