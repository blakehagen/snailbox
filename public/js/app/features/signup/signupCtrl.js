angular.module('snailbox').controller('signupCtrl', function ($state, $location, authService) {
  var signupCtrl = this;

  signupCtrl.loading       = false;
  signupCtrl.error         = false;
  signupCtrl.passwordError = false;

  signupCtrl.goToLogin = function () {
    $state.go('login');
  };

  signupCtrl.submitSignupForm = function (isValid) {
    console.log('signupCtrl.data', signupCtrl.data);
    signupCtrl.error         = false;
    signupCtrl.passwordError = false;
    if (!isValid) {
      return false;
    }
    else if (signupCtrl.data.password !== signupCtrl.data.password2) {
      signupCtrl.error          = true;
      signupCtrl.passwordError  = true;
      signupCtrl.data.password  = '';
      signupCtrl.data.password2 = '';
      return false;
    }
    else {
      signupCtrl.loading = true;
      authService.signup(signupCtrl.data).then(function (signupResponse) {
        console.log('signupResponse', signupResponse);
        signupCtrl.loading = false;
        if (signupResponse.message !== 'Registration Success') {
          signupCtrl.error          = true;
          signupCtrl.data.password  = '';
          signupCtrl.data.password2 = '';
          return false;
        }
        $location.path('/user/' + signupResponse.user._id);
      });
    }
  };

});