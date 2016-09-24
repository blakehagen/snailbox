angular.module('snailbox').controller('loginCtrl', function ($state, authService) {
  var loginCtrl = this;

  loginCtrl.loading = false;
  loginCtrl.error = false;

  loginCtrl.goToSignup = function () {
    $state.go('signup');
  };

  loginCtrl.submitLoginForm = function (isValid) {
    loginCtrl.error = false;
    if (!isValid) {
      console.log('Error - form not valid');
      return false;
    }
    else {
      loginCtrl.loading = true;
      authService.login(loginCtrl.data).then(function (loginResponse) {
        console.log('loginResponse', loginResponse);
        loginCtrl.loading = false;
        if(loginResponse.message !== 'Login Success'){
          loginCtrl.error = true;
          loginCtrl.data.password = '';
        }
      });
    }
  };


});