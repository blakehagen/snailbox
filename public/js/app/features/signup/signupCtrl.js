'use strict';

angular.module('snailbox').controller('signupCtrl', function ($state) {
  var signupCtrl = this;

  signupCtrl.test = 'If you can read this, your signupCtrl is set up correctly :)';
  console.log('signupCtrl.test ==>> ', signupCtrl.test);

  signupCtrl.goToLogin = function () {
    $state.go('login');
  };





});