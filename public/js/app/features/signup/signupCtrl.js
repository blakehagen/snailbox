angular.module('snailbox').controller('signupCtrl', function ($state) {
  var signupCtrl = this;

  signupCtrl.goToLogin = function () {
    $state.go('login');
  };





});