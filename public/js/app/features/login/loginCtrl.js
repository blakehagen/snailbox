angular.module('snailbox').controller('loginCtrl', function ($state, authService) {
  var loginCtrl = this;

  loginCtrl.goToSignup = function () {
    $state.go('signup');
  };

  loginCtrl.submitLoginForm = function (isValid) {
    console.log('isValid', isValid);
    console.log('loginCtrl.data', loginCtrl.data);
    if (!isValid) {
      console.log('Error - form not valid');
      return false;
    }
    else {
      authService.login(loginCtrl.data).then(function (loginResponse) {
        console.log('loginResponse', loginResponse);
      });
    }
  };


});