'use strict';

angular.module('snailbox').controller('editAddressCtrl', function ($stateParams, $state, $location, userService) {

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
    userService.updateAddress($stateParams.id, editAddressCtrl.userAddress).then(function (response) {
      if (response === 'Update Success!') {
        $location.path('/user/' + $stateParams.id);
      } else {
        console.log('response', response);
      }
    });
  };
  
  editAddressCtrl.cancel = function () {
    console.log('fired cancel!');
    $location.path('/user/' + $stateParams.id);
  };


});