angular.module('snailbox').service('tokenService', function ($window) {

  var storage = $window.localStorage;
  var cachedToken;

  this.setToken = function (token) {
    cachedToken = token;
    storage.setItem('userToken', token);
  };

  this.getToken = function () {
    if (!cachedToken) {
      cachedToken = storage.getItem('userToken');
    }
    return cachedToken;
  };

  this.removeToken = function () {
    cachedToken = null;
    storage.removeItem('userToken');
    console.log('token removed');
  };

  this.isAuthenticated = function () {
    return !!this.getToken();
  };

});