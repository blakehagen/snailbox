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
    }).catch(function (error) {
      $state.go('login');
      console.log('error', error);
    });
  };

  userHomeCtrl.getUser();


});