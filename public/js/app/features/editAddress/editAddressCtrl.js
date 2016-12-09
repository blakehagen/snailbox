'use strict';

angular.module('snailbox').controller('editAddressCtrl', function ($stateParams, $state, $location, userService, _) {

  var editAddressCtrl = this;

  editAddressCtrl.getUser = function () {
    userService.getUserById($stateParams.id).then(function (userData) {
      editAddressCtrl.userAddress = userData.address;
    });
  };

  editAddressCtrl.getUser();

  editAddressCtrl.submitUpdatedAddress = function (isValid) {
    if (!isValid) {
      return false;
    }
    userService.updateAddress($stateParams.id, editAddressCtrl.userAddress)
      .then(function (response) {
        if (_.get(response, 'status', null) === 401) {
          $state.go('login');
          return false;
        }
        if (response === 'Update Success!') {
          $location.path('/user/' + $stateParams.id);
        } else {
          console.log('response', response);
        }
      })
      .catch(function (err) {
        console.log('err', err);
      });
  };

  editAddressCtrl.cancel = function () {
    $location.path('/user/' + $stateParams.id);
  };

});