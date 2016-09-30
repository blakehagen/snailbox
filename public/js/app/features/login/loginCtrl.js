angular.module('snailbox').controller('loginCtrl', function ($state, $location, authService, tokenService) {
  var loginCtrl = this;

  loginCtrl.loading = false;
  loginCtrl.error   = false;

  loginCtrl.goToSignup = function () {
    $state.go('signup');
  };

  loginCtrl.submitLoginForm = function (isValid) {
    loginCtrl.error = false;
    if (!isValid) {
      return false;
    }
    else {
      loginCtrl.loading = true;
      authService.login(loginCtrl.data).then(function (loginResponse) {
        console.log('loginResponse::::', loginResponse);
        loginCtrl.loading = false;
        if (loginResponse.message !== 'Login Success') {
          loginCtrl.error         = true;
          loginCtrl.data.password = '';
          return false;
        }
        tokenService.setToken(loginResponse.token);
        if (!loginResponse.user.address.address1) {
          $location.path('/user/' + loginResponse.user._id + '/new');
        } else {
          $location.path('/user/' + loginResponse.user._id);
        }
      });
    }
  };

});