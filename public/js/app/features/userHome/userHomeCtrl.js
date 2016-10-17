'use strict';

angular.module('snailbox').controller('userHomeCtrl', function ($stateParams, $state, $location, userService) {
  var userHomeCtrl = this;

  userHomeCtrl.getUser = function () {
    userService.getUserById($stateParams.id)
      .then(function (user) {
        if(!user.address.address1){
          $location.path('/user/' + $stateParams.id + '/new');
        }
      console.log('user', user);
        userHomeCtrl.address = user.address;
    }).catch(function (error) {
      $state.go('login');
      console.log('error', error);
    });
  };

  userHomeCtrl.getUser();
  
  userHomeCtrl.goToEditAddress = function () {
    $location.path('/user/' + $stateParams.id + '/edit');
  };

  userHomeCtrl.goToSendAddress = function () {
    $location.path('/user/' + $stateParams.id + '/send');
  };

});