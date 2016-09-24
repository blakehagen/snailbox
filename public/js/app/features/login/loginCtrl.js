'use strict';

angular.module('snailbox').controller('loginCtrl', function ($state) {
  var loginCtrl = this;

  loginCtrl.test = 'If you can read this, your loginCtrl controller is set up correctly :)';
  console.log('loginCtrl.test ==>> ', loginCtrl.test);

  loginCtrl.goToSignup = function () {
    $state.go('signup');
  };



});