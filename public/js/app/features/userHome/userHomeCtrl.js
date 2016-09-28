'use strict';

angular.module('snailbox').controller('userHomeCtrl', function ($stateParams, $state, userService) {
  var userHomeCtrl = this;

  userHomeCtrl.getUser = function () {
    userService.getUserById($stateParams.id)
      .then(function (user) {
      console.log('user', user);
    }).catch(function (error) {
      $state.go('login');
      console.log('error', error);
    });
  };

  userHomeCtrl.getUser();


});